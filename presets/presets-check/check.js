#!/usr/bin/env node
/**
 * Presets model availability checker — validates easy-mode-config/presets.json model ids,
 * replaces unavailable models from benchmark shortlists (no LLM), optionally commits/pushes,
 * and notifies via NTFY.
 *
 * Usage:
 *   pnpm run presets-check [-- --dry-run] [-- --local] [-- --config path]
 *   PRESET_CHECK_RUNTIME=/opt/transrewrt-presets-check node lib/check.js
 */

const fs = require("fs");
const path = require("path");

const { loadConfig, isDryRun } = require("./config.js");
const { appendLog } = require("./log.js");
const { sendNtfy } = require("./ntfy.js");
const { presetsSharedRequire, sharedRequire, getMonorepoRoot } = require("./paths.js");
const {
  fetchLatestPresetsFile,
  commitAndPushPresetsFile,
} = require("./gitSync.js");
const { acquireRunLock } = require("./lock.js");
const { collectModelRefs, getModelValue, setModelValue, groupRefsByPair } = require("./modelRefs.js");
const { selectReplacementPair, resolveVerifiedChoice } = require("./selectReplacement.js");
const { readLastGoodCounts, writeLastGoodCounts, evaluateCatalogSanity } = require("./catalogSanity.js");
const { evaluateCircuitBreaker } = require("./circuitBreaker.js");

const { mergeKeys, engineConfigured } = sharedRequire("llm/index.js");
const {
  parsePresetsJson,
  bumpPatchVersion,
  serializePresetsCatalog,
} = sharedRequire("presetsCatalog.js");
const { canonicalForEngine } = sharedRequire("presetModelIdUtils.js");
const {
  EASY_CLOUD_ENGINES,
  configureProviderCatalog,
  refreshAllEngineCatalogsFromProviders,
  buildIdSets,
} = sharedRequire("presetsProviderCatalog.js");
const {
  buildBenchmarkShortlists,
  blendedPriceFromModelsDev,
  defaultBenchmarkCachePath,
} = presetsSharedRequire("benchmark-scores.js");
const {
  runCandidateTimingBenchmark,
  BENCHMARK_DEFAULT_SAMPLE_TEXT_PT,
} = presetsSharedRequire("translatePresetsBenchmark.js");

/** @type {object|null} */
let activeConfig = null;
/** @type {{ release: () => void }|null} */
let activeLock = null;

function printHelp() {
  console.log(`Presets model availability checker

Usage:
  pnpm run presets-check [-- --dry-run] [-- --local] [-- --config <path>]
                         [-- --explain] [-- --preset <id>] [-- --engine <id>]
                         [-- --no-benchmark] [-- --no-verify]

Options:
  --dry-run       Check and report only; do not write presets.json or push
  --local         Use monorepo easy-mode-config/presets.json; skip git operations
  --config <path> Config JSON (default: dev/presets-check/config.json)
  --explain       Print candidate scores and the chosen source for each unavailable id
  --preset <id>   Only check this preset (repeatable). Skips top-level model fields
  --engine <id>   Only check this provider (repeatable)
  --no-benchmark  Do not use benchmark shortlists; guarded fuzzy match only
  --no-verify     Do not smoke-test replacement ids
  --help, -h      Show this help

Env:
  PRESET_CHECK_RUNTIME, PRESET_CHECK_DRY_RUN, PRESET_CHECK_NTFY_TOPIC, GITHUB_TOKEN,
  OPENROUTER_API_KEY, OPENAI_API_KEY, … (provider keys for non-OpenRouter catalogs)
`);
}

function parseArgs(argv) {
  const out = {
    dryRun: false,
    local: false,
    config: null,
    help: false,
    explain: false,
    noBenchmark: false,
    noVerify: false,
    presets: [],
    engines: [],
  };
  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === "--help" || a === "-h") out.help = true;
    else if (a === "--dry-run") out.dryRun = true;
    else if (a === "--local") out.local = true;
    else if (a === "--explain") out.explain = true;
    else if (a === "--no-benchmark") out.noBenchmark = true;
    else if (a === "--no-verify") out.noVerify = true;
    else if (a === "--config" && argv[i + 1]) out.config = argv[++i];
    else if (a === "--preset" && argv[i + 1]) out.presets.push(argv[++i]);
    else if (a === "--engine" && argv[i + 1]) out.engines.push(argv[++i]);
  }
  return out;
}

function atomicWriteUtf8(filePath, contents) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const tmp = `${filePath}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(tmp, contents, "utf8");
  fs.renameSync(tmp, filePath);
}

function readAppVersion(repoDir) {
  try {
    const pkg = JSON.parse(fs.readFileSync(path.join(repoDir, "package.json"), "utf8"));
    return typeof pkg.version === "string" ? pkg.version.trim() : "";
  } catch {
    return "";
  }
}

function releaseLock() {
  if (!activeLock) return;
  const lock = activeLock;
  activeLock = null;
  lock.release();
}

async function notify(config, payload) {
  const topic = (config?.ntfy?.topic || "").trim();
  if (!topic) return;
  try {
    await sendNtfy(config, payload);
  } catch (e) {
    console.warn(`[presets-check] NTFY failed: ${e.message}`);
  }
}

async function die(message) {
  console.error(`[presets-check] ${message}`);
  const config = activeConfig;
  if (config) {
    try {
      appendLog(config.logPath, { event: "fatal", error: message });
    } catch {
      /* logging must not hide the failure */
    }
    await notify(config, {
      title: "Presets check failed",
      body: message.slice(0, 3500),
      tags: "rotating_light",
      priority: "high",
    });
  }
  releaseLock();
  process.exit(1);
}

function refAllowed(ref, args) {
  if (args.engines.length && !args.engines.includes(ref.engine)) return false;
  if (args.presets.length) {
    if (ref.kind === "toplevel") return false;
    if (!args.presets.includes(ref.presetId)) return false;
  }
  return true;
}

function loadOpenRouterPerformance(config) {
  if (!config.openRouterSpeed) return {};
  const cachePath = path.join(config.runtimeRoot, "presets-editor-openrouter-cache.json");
  try {
    const parsed = JSON.parse(fs.readFileSync(cachePath, "utf8"));
    const perf = parsed?.performanceByPath;
    if (perf && typeof perf === "object") {
      console.log(
        `[presets-check] OpenRouter speed axis: ${Object.keys(perf).length} model(s) from cache`,
      );
      return perf;
    }
  } catch (e) {
    console.warn(`[presets-check] OpenRouter speed cache unavailable: ${e.message}`);
  }
  return {};
}

function printExplain(row) {
  const dest = row.newId ? ` -> ${row.newId}` : "";
  const source = row.source ? ` [${row.source}]` : "";
  console.log(`[presets-check] EXPLAIN ${row.path}: ${row.status} ${row.oldId || ""}${dest}${source}`);
  const candidates = Array.isArray(row.candidates) ? row.candidates.slice(0, 8) : [];
  for (const candidate of candidates) {
    const score = candidate.score == null ? "?" : Number(candidate.score).toFixed(3);
    console.log(`  - ${candidate.source} ${candidate.id} score=${score}`);
  }
}

function formatChangeLine(row) {
  const score = row.score == null ? "?" : Number(row.score).toFixed(2);
  return `${row.presetId}/${row.engine}: ${row.oldId} -> ${row.newId} (${row.source || "replacement"}, score ${score})`;
}

function buildSummary(results, extras) {
  const replacements = results.filter((r) => r.status === "replacement");
  const unresolved = results.filter((r) => r.status === "unresolved");
  const lines = [];
  if (extras.dryRun) lines.push("Dry-run (no write).");
  if (extras.breaker) lines.push(extras.breaker);
  for (const note of extras.suspects || []) lines.push(note);
  for (const row of replacements) lines.push(`Replaced ${formatChangeLine(row)}`);
  for (const row of unresolved) {
    const why = row.verifyFailed ? "smoke test failed" : "no candidate";
    lines.push(`Unresolved ${row.presetId}/${row.engine} ${row.oldId} (${why})`);
  }
  return lines.join("\n").slice(0, 3500);
}

async function smokeTestModel(engine, modelId, keysMap, promptHint, cachePath) {
  const { rows } = await runCandidateTimingBenchmark({
    engine,
    model_ids: [modelId],
    keysMap,
    sample_text: BENCHMARK_DEFAULT_SAMPLE_TEXT_PT,
    prompt_hint: promptHint,
    useCache: true,
    cachePath,
    root: path.dirname(cachePath),
  });
  const row = rows && rows[0];
  if (row?.ok) return true;
  console.warn(
    `[presets-check] VERIFY fail ${engine} ${modelId}: ${row?.error || "no result"}`,
  );
  return false;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    process.exit(0);
  }

  const dryRun = isDryRun(args.dryRun);
  let config = loadConfig(args.config);
  activeConfig = config;

  if (args.local) {
    const root = getMonorepoRoot();
    config = {
      ...config,
      runtimeRoot: root,
      repoDir: root,
      presetsPath: path.join(root, "easy-mode-config", "presets.json"),
      presetsRel: "easy-mode-config/presets.json",
      localMode: true,
    };
    activeConfig = config;
  }

  const stateDir = path.dirname(config.logPath);
  const lockPath = path.join(stateDir, "presets-check.lock");
  try {
    activeLock = acquireRunLock(lockPath);
  } catch (e) {
    if (e && e.code === "ELOCKED") {
      console.log(`[presets-check] ${e.message}; exiting`);
      process.exit(0);
    }
    throw e;
  }

  configureProviderCatalog({
    cachePath: config.catalogCachePath,
    logLabel: "presets-check",
  });

  console.log(
    `[presets-check] Starting (${dryRun ? "dry-run" : "apply"}${args.local ? ", local" : ", remote-git"})`,
  );

  if (!args.local) {
    try {
      fetchLatestPresetsFile(config.repoDir, {
        branch: config.github?.branch,
        presetsFile: config.presetsRel,
        github: config.github,
      });
      console.log(
        `[presets-check] Fetched latest ${config.presetsRel} from origin/${config.github?.branch || "main"}`,
      );
    } catch (e) {
      await die(`Git fetch failed: ${e.message}`);
      return;
    }
  }

  if (!fs.existsSync(config.presetsPath)) {
    await die(`presets file not found: ${config.presetsPath}`);
    return;
  }

  const originalText = fs.readFileSync(config.presetsPath, "utf8");
  const catalog = parsePresetsJson(originalText);
  if (!catalog) {
    await die("Invalid presets.json");
    return;
  }

  const keysMap = mergeKeys(process.env);
  let catalogsByEngine;
  try {
    catalogsByEngine = await refreshAllEngineCatalogsFromProviders(keysMap, {
      cachePath: config.catalogCachePath,
    });
  } catch (e) {
    await die(`Catalog refresh failed: ${e.message}`);
    return;
  }

  const sanityPath = path.join(stateDir, "catalog-sanity.json");
  const lastGood = readLastGoodCounts(sanityPath);
  /** @type {Record<string, object>} */
  const sanityByEngine = {};
  /** @type {Record<string, number>} */
  const nextCounts = { ...lastGood };
  /** @type {string[]} */
  const suspectNotes = [];
  for (const { id: engine } of EASY_CLOUD_ENGINES) {
    const list = catalogsByEngine[engine] || [];
    const expectCatalog = engine === "openrouter" || engineConfigured(engine, keysMap);
    const verdict = evaluateCatalogSanity({
      engine,
      count: list.length,
      expectCatalog,
      lastGoodCount: lastGood[engine] || 0,
      shrinkRatio: config.catalogShrinkRatio,
    });
    sanityByEngine[engine] = verdict;
    if (verdict.status === "ok" && verdict.updateLastGood != null) {
      nextCounts[engine] = verdict.updateLastGood;
    }
    if (verdict.status === "suspect") {
      const note =
        verdict.reason === "shrunk"
          ? `Suspect ${engine} catalog: ${verdict.count} models, last good ${verdict.lastGoodCount}`
          : `Suspect ${engine} catalog: empty while a key or public list was expected`;
      suspectNotes.push(note);
      console.warn(`[presets-check] ${note}; skipping replacements`);
      appendLog(config.logPath, {
        event: "catalog_suspect",
        engine,
        reason: verdict.reason,
        count: verdict.count,
        lastGoodCount: verdict.lastGoodCount,
      });
    }
  }
  writeLastGoodCounts(sanityPath, nextCounts);

  const idSets = buildIdSets(catalogsByEngine);
  const allRefs = collectModelRefs(catalog, EASY_CLOUD_ENGINES).filter((ref) => refAllowed(ref, args));
  const groups = groupRefsByPair(allRefs);

  const useBenchmark = !args.noBenchmark;
  const openRouterPerformance = useBenchmark ? loadOpenRouterPerformance(config) : {};
  const benchmarkCachePath =
    config.localMode && !process.env.PRESET_CHECK_RUNTIME
      ? defaultBenchmarkCachePath(getMonorepoRoot())
      : path.join(stateDir, "presets-editor-benchmark-cache.json");
  const uiLanguagesPath = path.join(config.repoDir, "src", "renderer", "locales", "ui-languages.json");
  const timingCachePath = path.join(stateDir, "presets-editor-timing-cache.json");

  /** @type {Map<string, object>} */
  const benchByPreset = new Map();
  /** @type {object|null} */
  let benchForTopLevel = null;
  if (useBenchmark) {
    const presets = Array.isArray(catalog.presets) ? catalog.presets : [];
    const wanted = new Set(
      allRefs.filter((ref) => ref.kind === "preset").map((ref) => ref.presetId),
    );
    for (const preset of presets) {
      if (!preset || !wanted.has(preset.id)) continue;
      const result = await buildBenchmarkShortlists({
        root: config.runtimeRoot,
        preset,
        catalogsByEngine,
        cachePath: benchmarkCachePath,
        uiLanguagesPath,
        openRouterPerformance,
        log: (msg) => console.log(`[presets-check] ${msg}`),
      });
      benchByPreset.set(preset.id, result);
      if (!result.ok) {
        console.warn(`[presets-check] Benchmark shortlist unavailable for "${preset.id}": ${result.error}`);
      } else {
        console.log(
          `[presets-check] Benchmark profile for "${preset.id}": ${result.profile} (${Object.keys(result.shortlists || {}).length} provider shortlist(s))`,
        );
      }
    }
    if (allRefs.some((ref) => ref.kind === "toplevel")) {
      benchForTopLevel = await buildBenchmarkShortlists({
        root: config.runtimeRoot,
        preset: { id: "advanced", name: "Advanced", description: "quality" },
        profile: "advanced",
        catalogsByEngine,
        cachePath: benchmarkCachePath,
        uiLanguagesPath,
        openRouterPerformance,
      });
    }
  }

  /** @type {Array<object>} */
  const results = [];

  for (const refs of groups.values()) {
    const sample = refs[0];
    const preset =
      sample.kind === "preset" ? catalog.presets?.[sample.presetIndex] : null;
    const bench =
      sample.kind === "toplevel" ? benchForTopLevel : benchByPreset.get(sample.presetId);
    const primaryRef = refs.find((ref) => ref.slot === "primary") || null;
    const fallbackRef = refs.find((ref) => ref.slot === "fallback") || null;
    const engine = sample.engine;
    const sanity = sanityByEngine[engine];
    const idSet = idSets[engine];

    const slots = [
      ["primary", primaryRef],
      ["fallback", fallbackRef],
    ];

    if (!sanity || sanity.status !== "ok") {
      for (const [, ref] of slots) {
        if (!ref) continue;
        const raw = getModelValue(catalog, ref);
        const canonical = canonicalForEngine(engine, String(raw || "").trim());
        const reason = sanity?.status === "suspect" ? "catalog_suspect" : "no_catalog";
        console.warn(`[presets-check] Skipped ${ref.path}: ${reason}`);
        appendLog(config.logPath, {
          event: "skipped",
          path: ref.path,
          presetId: ref.presetId,
          engine,
          oldId: canonical,
          reason,
        });
        results.push({ ...ref, status: "skipped", oldId: canonical, reason, candidates: [] });
      }
      continue;
    }

    function slotState(ref) {
      if (!ref) return { ref: null, canonical: "", unavailable: false };
      const raw = getModelValue(catalog, ref);
      const canonical = canonicalForEngine(engine, String(raw || "").trim());
      const unavailable = !idSet || !idSet.has(canonical);
      return { ref, canonical, unavailable };
    }

    const primaryState = slotState(primaryRef);
    const fallbackState = slotState(fallbackRef);
    if (sample.kind === "preset") {
      console.log(`[presets-check]  Checking preset: "${sample.presetId}" (${engine})`);
    }

    const pair = selectReplacementPair({
      engine,
      primaryId: primaryState.canonical,
      fallbackId: fallbackState.canonical,
      primaryUnavailable: primaryState.unavailable,
      fallbackUnavailable: fallbackState.unavailable,
      ranked: bench?.rankedByEngine?.[engine] || [],
      shortlist: bench?.shortlists?.[engine] || [],
      catalogModels: catalogsByEngine[engine] || [],
      benchmarkOk: Boolean(bench?.ok),
      useBenchmark,
      successorOnly: Boolean(sample.successorOnly),
      freeOnly: bench?.profile === "free" || sample.presetId === "free-router",
      maxPriceRatio: config.maxPriceRatio,
      minMatchScore: config.minMatchScore,
      priceForId: (id) => blendedPriceFromModelsDev(bench?.modelsDevPricing, id),
    });

    const wantsVerify = primaryState.unavailable || fallbackState.unavailable;
    const verifyEnabled =
      wantsVerify &&
      !args.noVerify &&
      config.verifyReplacements !== false &&
      engineConfigured(engine, keysMap);
    if (wantsVerify && !verifyEnabled) {
      console.log(`[presets-check] VERIFY skipped for ${engine} (no API key or disabled)`);
    }
    const verifyFn = verifyEnabled
      ? (modelId) =>
          smokeTestModel(engine, modelId, keysMap, preset?.prompt_hint, timingCachePath)
      : null;
    const exclude = new Set();
    const verifiedPrimary = await resolveVerifiedChoice(pair.primary, exclude, verifyFn);
    const verifiedFallback = await resolveVerifiedChoice(pair.fallback, exclude, verifyFn);

    function pushDecision(ref, state, decision) {
      if (!ref || !decision) return;
      const row = {
        ...ref,
        status: decision.status,
        oldId: state.canonical,
        newId: decision.newId || null,
        source: decision.source || null,
        score: decision.score,
        bestScore: decision.bestScore,
        verified: Boolean(decision.verified),
        verifyFailed: Boolean(decision.verifyFailed),
        candidates: decision.candidates || [],
      };
      results.push(row);
      if (args.explain) printExplain(row);
      if (row.status === "replacement") {
        const score = row.score == null ? "?" : Number(row.score).toFixed(2);
        console.log(
          `[presets-check] REPLACE ${engine}: ${row.oldId} -> ${row.newId} (${row.source}, score ${score})`,
        );
      } else if (row.status === "unresolved") {
        console.warn(`[presets-check] UNRESOLVED ${engine}: ${row.oldId}`);
      }
    }

    pushDecision(primaryRef, primaryState, verifiedPrimary);
    pushDecision(fallbackRef, fallbackState, verifiedFallback);
  }

  const replacements = results.filter((row) => row.status === "replacement" && row.newId);
  const unresolved = results.filter((row) => row.status === "unresolved");
  const breaker = evaluateCircuitBreaker(replacements, {
    maxPerRun: config.maxReplacementsPerRun,
    maxPerEngine: config.maxReplacementsPerEngine,
  });

  let pushResult = null;
  let breakerMessage = "";
  if (breaker.tripped) {
    breakerMessage =
      breaker.reason === "engine"
        ? `Circuit breaker: ${breaker.count} replacements for ${breaker.engine} (max ${breaker.max}); nothing written`
        : `Circuit breaker: ${breaker.count} replacements (max ${breaker.max}); nothing written`;
    console.error(`[presets-check] ${breakerMessage}`);
    appendLog(config.logPath, { event: "circuit_breaker", ...breaker, dryRun });
  } else if (replacements.length && !dryRun) {
    for (const row of replacements) setModelValue(catalog, row, row.newId);
    catalog.version = bumpPatchVersion(catalog.version, readAppVersion(config.repoDir));
    catalog.updated_at = new Date().toISOString();
    const serialized = serializePresetsCatalog(catalog);
    atomicWriteUtf8(config.presetsPath, serialized);
    const reread = parsePresetsJson(fs.readFileSync(config.presetsPath, "utf8"));
    if (!reread) {
      atomicWriteUtf8(config.presetsPath, originalText);
      await die("Wrote an invalid presets catalog; restored the previous file");
    }
    console.log(`[presets-check] Wrote ${config.presetsPath}`);

    if (!args.local && !config.localMode) {
      try {
        pushResult = commitAndPushPresetsFile(config.repoDir, {
          branch: config.github?.branch,
          presetsFile: config.presetsRel,
          github: config.github,
          commitMessagePrefix: config.github?.commitMessagePrefix,
          changeLines: replacements.map(formatChangeLine),
          gitTimeoutMs: config.gitTimeoutMs,
          fileContents: serialized,
          writeFile: (contents) => atomicWriteUtf8(config.presetsPath, contents),
        });
        if (pushResult.skipped) {
          console.log("[presets-check] No presets.json diff to commit");
        } else {
          console.log(
            `[presets-check] Pushed commit ${pushResult.commit} to ${config.github?.branch || "main"}`,
          );
        }
      } catch (e) {
        appendLog(config.logPath, { event: "push_failed", error: e.message });
        await die(`Git push failed: ${e.message}`);
      }
    }
  } else if (replacements.length && dryRun) {
    console.log("[presets-check] Dry-run: would apply replacements (no write/push)");
  }

  for (const row of results) {
    if (row.status === "ok" || row.status === "skipped") continue;
    appendLog(config.logPath, {
      event: row.status,
      path: row.path,
      presetId: row.presetId,
      engine: row.engine,
      oldId: row.oldId,
      newId: row.newId,
      source: row.source,
      score: row.score,
      bestScore: row.bestScore,
      verifyFailed: row.verifyFailed || false,
      pushed: pushResult?.pushed ?? false,
      commit: pushResult?.commit,
      dryRun,
    });
  }

  const summary = buildSummary(results, { dryRun, breaker: breakerMessage, suspects: suspectNotes });
  const needsAttention = unresolved.length > 0 || suspectNotes.length > 0 || breaker.tripped;
  if (summary && (replacements.length || needsAttention)) {
    await notify(config, {
      title: needsAttention ? "Presets check needs attention" : "Presets check replaced models",
      body: summary,
      tags: needsAttention ? "rotating_light" : "warning",
      priority: needsAttention ? "high" : config.ntfy?.priority,
    });
  } else if (!summary && config.ntfy?.heartbeat) {
    await notify(config, {
      title: "Presets check ok",
      body: "All checked model ids are available.",
      tags: "white_check_mark",
    });
  } else if ((replacements.length || needsAttention) && !(config.ntfy?.topic || "").trim()) {
    console.warn("[presets-check] NTFY topic not configured; skipping notifications");
  }

  const okCount = results.filter((row) => row.status === "ok").length;
  const skipCount = results.filter((row) => row.status === "skipped").length;
  console.log(
    `[presets-check] Done: ${okCount} ok, ${replacements.length} replacement(s), ${unresolved.length} unresolved, ${skipCount} skipped`,
  );

  releaseLock();
  process.exit(needsAttention ? 1 : 0);
}

main().catch(async (e) => {
  const message = e && e.stack ? e.stack : String(e);
  console.error("[presets-check] Fatal:", message);
  if (activeConfig) {
    try {
      appendLog(activeConfig.logPath, { event: "fatal", error: e.message || String(e) });
    } catch {
      /* ignore */
    }
    await notify(activeConfig, {
      title: "Presets check failed",
      body: (e.message || String(e)).slice(0, 3500),
      tags: "rotating_light",
      priority: "high",
    });
  }
  releaseLock();
  process.exit(1);
});
