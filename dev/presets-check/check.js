#!/usr/bin/env node
/**
 * Presets model availability checker — validates easy-mode-config/presets.json model ids,
 * fuzzy-replaces unavailable models, optionally commits/pushes to GitHub, notifies via NTFY.
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
const { findFuzzyReplacement } = require("./fuzzyMatch.js");
const { sharedRequire, getMonorepoRoot } = require("./paths.js");
const {
  fetchLatestPresetsFile,
  commitAndPushPresetsFile,
} = require("./gitSync.js");

const { mergeKeys } = sharedRequire("llm/index.js");
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

function printHelp() {
  console.log(`Presets model availability checker

Usage:
  pnpm run presets-check [-- --dry-run] [-- --local] [-- --config <path>]

Options:
  --dry-run       Check and report only; do not write presets.json or push
  --local         Use monorepo easy-mode-config/presets.json; skip git operations
  --config <path> Config JSON (default: dev/presets-check/config.json)
  --help, -h      Show this help

Env:
  PRESET_CHECK_RUNTIME, PRESET_CHECK_DRY_RUN, PRESET_CHECK_NTFY_TOPIC, GITHUB_TOKEN,
  OPENROUTER_API_KEY, OPENAI_API_KEY, … (provider keys for non-OpenRouter catalogs)
`);
}

function parseArgs(argv) {
  const out = { dryRun: false, local: false, config: null, help: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--help" || a === "-h") out.help = true;
    else if (a === "--dry-run") out.dryRun = true;
    else if (a === "--local") out.local = true;
    else if (a === "--config" && argv[i + 1]) {
      out.config = argv[++i];
    }
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

function collectModelRefs(catalog) {
  /** @type {Array<{ path: string, engine: string, presetId: string }>} */
  const refs = [];

  const presets = Array.isArray(catalog.presets) ? catalog.presets : [];
  presets.forEach((preset, si) => {
    const ids = preset.model_ids && typeof preset.model_ids === "object" ? preset.model_ids : {};
    for (const { id: engine } of EASY_CLOUD_ENGINES) {
      const raw = ids[engine];
      if (!raw || !String(raw).trim()) continue;
      refs.push({
        path: `presets[${si}].model_ids.${engine}`,
        engine,
        presetId: preset.id,
      });
    }

    const fallbackIds =
      preset.fallback_ids && typeof preset.fallback_ids === "object" ? preset.fallback_ids : {};
    for (const { id: engine } of EASY_CLOUD_ENGINES) {
      const raw = fallbackIds[engine];
      if (!raw || !String(raw).trim()) continue;
      refs.push({
        path: `presets[${si}].fallback_ids.${engine}`,
        engine,
        presetId: preset.id,
      });
    }
  });

  return refs;
}

function getModelValue(catalog, ref) {
  const m = ref.path.match(/^presets\[(\d+)\]\.(model_ids|fallback_ids)\.(\w+)$/);
  if (!m) return null;
  const preset = catalog.presets[Number(m[1])];
  const field = m[2];
  const engineKey = m[3];
  return preset?.[field]?.[engineKey] ?? null;
}

function setModelValue(catalog, ref, value) {
  const m = ref.path.match(/^presets\[(\d+)\]\.(model_ids|fallback_ids)\.(\w+)$/);
  if (!m) return;
  const preset = catalog.presets[Number(m[1])];
  if (!preset) return;
  const field = m[2];
  const engineKey = m[3];
  if (!preset[field]) preset[field] = {};
  preset[field][engineKey] = value;
}

function groupRefsForCheck(refs, catalog) {
  const presets = Array.isArray(catalog.presets) ? catalog.presets : [];
  const presetOrder = presets.map((p) => p.id).filter(Boolean);
  /** @type {Map<string, typeof refs>} */
  const byPreset = new Map();
  for (const id of presetOrder) byPreset.set(id, []);
  for (const ref of refs) {
    if (!byPreset.has(ref.presetId)) byPreset.set(ref.presetId, []);
    byPreset.get(ref.presetId).push(ref);
  }
  const order = presetOrder.filter((id) => (byPreset.get(id)?.length ?? 0) > 0);
  return { order, byPreset };
}

function checkModelRef(ref, catalog, idSets, catalogsByEngine, config, results, minMatchScore) {
  const raw = getModelValue(catalog, ref);
  const canonical = canonicalForEngine(ref.engine, String(raw).trim());
  const idSet = idSets[ref.engine];
  const catalogList = catalogsByEngine[ref.engine] || [];
  const out = { hasUnresolved: false, hasReplacements: false };

  if (!idSet || idSet.size === 0) {
    const msg = `Skipped ${ref.path}: no catalog for ${ref.engine} (missing API key?)`;
    console.warn(`[presets-check] ${msg}`);
    appendLog(config.logPath, {
      event: "skipped",
      path: ref.path,
      presetId: ref.presetId,
      engine: ref.engine,
      oldId: canonical,
      reason: "no_catalog",
    });
    return out;
  }

  if (idSet.has(canonical)) {
    results.push({ ...ref, status: "ok", oldId: canonical });
    return out;
  }

  const { replacement, score, bestScore } = findFuzzyReplacement(
    ref.engine,
    canonical,
    catalogList,
    { minScore: minMatchScore },
  );

  if (replacement) {
    out.hasReplacements = true;
    results.push({
      ...ref,
      status: "replacement",
      oldId: canonical,
      newId: replacement,
      score,
    });
    console.log(
      `[presets-check] REPLACE ${ref.engine}: ${canonical} -> ${replacement} (score ${score.toFixed(2)})`,
    );
  } else {
    out.hasUnresolved = true;
    results.push({
      ...ref,
      status: "unresolved",
      oldId: canonical,
      bestScore,
    });
    console.warn(
      `[presets-check] UNRESOLVED ${ref.engine}: ${canonical} (best score ${bestScore.toFixed(2)})`,
    );
  }
  return out;
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args.help) {
    printHelp();
    process.exit(0);
  }

  const dryRun = isDryRun(args.dryRun);
  let config = loadConfig(args.config);

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
  }

  configureProviderCatalog({
    cachePath: config.catalogCachePath,
    logLabel: "presets-check",
  });

  console.log(`[presets-check] Starting (${dryRun ? "dry-run" : "apply"}${args.local ? ", local" : ", remote-git"})`);

  if (!args.local) {
    try {
      fetchLatestPresetsFile(config.repoDir, {
        branch: config.github?.branch,
        presetsFile: config.presetsRel,
        github: config.github,
      });
      console.log(`[presets-check] Fetched latest ${config.presetsRel} from origin/${config.github?.branch || "main"}`);
    } catch (e) {
      console.error(`[presets-check] Git fetch failed: ${e.message}`);
      process.exit(1);
    }
  }

  if (!fs.existsSync(config.presetsPath)) {
    console.error(`[presets-check] presets file not found: ${config.presetsPath}`);
    process.exit(1);
  }

  const rawText = fs.readFileSync(config.presetsPath, "utf8");
  const catalog = parsePresetsJson(rawText);
  if (!catalog) {
    console.error("[presets-check] Invalid presets.json");
    process.exit(1);
  }

  const keysMap = mergeKeys(process.env);
  let catalogsByEngine;
  try {
    catalogsByEngine = await refreshAllEngineCatalogsFromProviders(keysMap, {
      cachePath: config.catalogCachePath,
    });
  } catch (e) {
    console.error(`[presets-check] Catalog refresh failed: ${e.message}`);
    process.exit(1);
  }

  const idSets = buildIdSets(catalogsByEngine);
  const refs = collectModelRefs(catalog);
  const { order: presetOrder, byPreset } = groupRefsForCheck(refs, catalog);

  /** @type {Array<object>} */
  const results = [];
  let hasUnresolved = false;
  let hasReplacements = false;

  const runRef = (ref) => {
    const r = checkModelRef(
      ref,
      catalog,
      idSets,
      catalogsByEngine,
      config,
      results,
      config.minMatchScore,
    );
    if (r.hasUnresolved) hasUnresolved = true;
    if (r.hasReplacements) hasReplacements = true;
  };

  for (const presetId of presetOrder) {
    console.log(`[presets-check]  Checking preset: "${presetId}"`);
    for (const ref of byPreset.get(presetId) || []) runRef(ref);
    console.log(`[presets-check]  Finished preset: "${presetId}"`);
  }

  let pushResult = null;

  if (hasReplacements && !dryRun) {
    for (const r of results) {
      if (r.status === "replacement" && r.newId) {
        setModelValue(catalog, r, r.newId);
      }
    }
    catalog.version = bumpPatchVersion(catalog.version);
    catalog.updated_at = new Date().toISOString();
    const serialized = serializePresetsCatalog(catalog);
    atomicWriteUtf8(config.presetsPath, serialized);
    console.log(`[presets-check] Wrote ${config.presetsPath}`);

    if (!args.local && !config.localMode) {
      try {
        const changeLines = results
          .filter((r) => r.status === "replacement")
          .map((r) => {
            const label = `${r.presetId}/${r.engine}`;
            return `${label}: ${r.oldId} -> ${r.newId} (score ${r.score?.toFixed(2)})`;
          });
        pushResult = commitAndPushPresetsFile(config.repoDir, {
          branch: config.github?.branch,
          presetsFile: config.presetsRel,
          github: config.github,
          commitMessagePrefix: config.github?.commitMessagePrefix,
          changeLines,
        });
        console.log(`[presets-check] Pushed commit ${pushResult.commit} to ${config.github?.branch || "main"}`);
      } catch (e) {
        console.error(`[presets-check] Git push failed: ${e.message}`);
        appendLog(config.logPath, { event: "push_failed", error: e.message });
        if (config.ntfy?.topic || process.env.PRESET_CHECK_NTFY_TOPIC) {
          try {
            await sendNtfy(config, {
              title: "Presets check: push failed",
              body: e.message,
              tags: "rotating_light",
              priority: "high",
            });
          } catch (ne) {
            console.warn(`[presets-check] NTFY failed: ${ne.message}`);
          }
        }
        process.exit(1);
      }
    }
  } else if (hasReplacements && dryRun) {
    console.log("[presets-check] Dry-run: would apply replacements (no write/push)");
  }

  for (const r of results) {
    if (r.status === "ok") continue;
    appendLog(config.logPath, {
      event: r.status,
      path: r.path,
      presetId: r.presetId,
      engine: r.engine,
      oldId: r.oldId,
      newId: r.newId,
      score: r.score,
      bestScore: r.bestScore,
      pushed: pushResult?.pushed ?? false,
      commit: pushResult?.commit,
      dryRun,
    });
  }

  const notifyTopic = (config.ntfy?.topic || "").trim();
  if (notifyTopic) {
    for (const r of results) {
      if (r.status !== "replacement" && r.status !== "unresolved") continue;
      try {
        const label = `Preset "${r.presetId}" (${r.engine})`;
        if (r.status === "replacement") {
          const title = pushResult?.pushed
            ? "Presets model replaced (pushed)"
            : dryRun
              ? "Presets model would be replaced (dry-run)"
              : "Presets model replaced";
          let body = `${label}: ${r.oldId} -> ${r.newId} (score ${r.score?.toFixed(2)})`;
          if (pushResult?.commit) body += `\nCommit: ${pushResult.commit} on ${config.github?.branch || "main"}`;
          await sendNtfy(config, { title, body, tags: "warning" });
        } else {
          await sendNtfy(config, {
            title: "Presets model unavailable - no replacement",
            body: `${label}: ${r.oldId} - no replacement found (best score ${r.bestScore?.toFixed(2)})`,
            tags: "rotating_light",
          });
        }
      } catch (e) {
        console.warn(`[presets-check] NTFY failed: ${e.message}`);
      }
    }
  } else if (results.some((r) => r.status === "replacement" || r.status === "unresolved")) {
    console.warn("[presets-check] NTFY topic not configured; skipping notifications");
  }

  const okCount = results.filter((r) => r.status === "ok").length;
  const repCount = results.filter((r) => r.status === "replacement").length;
  const unresCount = results.filter((r) => r.status === "unresolved").length;
  console.log(
    `[presets-check] Done: ${okCount} ok, ${repCount} replacement(s), ${unresCount} unresolved`,
  );

  process.exit(hasUnresolved ? 1 : 0);
}

main().catch((e) => {
  console.error("[presets-check] Fatal:", e);
  process.exit(1);
});
