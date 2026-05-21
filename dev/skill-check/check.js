#!/usr/bin/env node
/**
 * Skills model availability checker — validates easy-mode-config/skills.json model ids,
 * fuzzy-replaces unavailable models, optionally commits/pushes to GitHub, notifies via NTFY.
 *
 * Usage:
 *   pnpm run skill-check [-- --dry-run] [-- --local] [-- --config path]
 *   SKILL_CHECK_RUNTIME=/opt/transrewrt-skill-check node lib/check.js
 */

const fs = require("fs");
const path = require("path");

const { loadConfig, isDryRun } = require("./config.js");
const { appendLog } = require("./log.js");
const { sendNtfy } = require("./ntfy.js");
const { findFuzzyReplacement } = require("./fuzzyMatch.js");
const { sharedRequire, getMonorepoRoot } = require("./paths.js");
const {
  fetchLatestSkillsFile,
  commitAndPushSkillsFile,
} = require("./gitSync.js");

const { mergeKeys } = sharedRequire("llm/index.js");
const { parseSkillsJson, bumpPatchVersion } = sharedRequire("skillsCatalog.js");
const { canonicalForEngine } = sharedRequire("skillModelIdUtils.js");
const {
  EASY_CLOUD_ENGINES,
  configureProviderCatalog,
  refreshAllEngineCatalogsFromProviders,
  buildIdSets,
} = sharedRequire("skillsProviderCatalog.js");

const TOP_LEVEL_MODEL_FIELDS = [
  "translation_model",
  "translation_model_fallback",
  "suggestion_model",
  "suggestion_model_fallback",
];

function printHelp() {
  console.log(`Skills model availability checker

Usage:
  pnpm run skill-check [-- --dry-run] [-- --local] [-- --config <path>]

Options:
  --dry-run       Check and report only; do not write skills.json or push
  --local         Use monorepo easy-mode-config/skills.json; skip git operations
  --config <path> Config JSON (default: dev/skill-check/config.json)
  --help, -h      Show this help

Env:
  SKILL_CHECK_RUNTIME, SKILL_CHECK_DRY_RUN, SKILL_CHECK_NTFY_TOPIC, GITHUB_TOKEN,
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

function inferEngineFromModelId(modelId) {
  const id = String(modelId || "").trim();
  const slash = id.indexOf("/");
  if (slash <= 0) return "openrouter";
  const first = id.slice(0, slash).toLowerCase();
  if (first === "openrouter") return "openrouter";
  for (const { id: engine } of EASY_CLOUD_ENGINES) {
    if (engine === first) return engine;
  }
  return "openrouter";
}

function collectModelRefs(catalog) {
  /** @type {Array<{ path: string, engine: string, skillId?: string, field?: string }>} */
  const refs = [];

  for (const field of TOP_LEVEL_MODEL_FIELDS) {
    const raw = catalog[field];
    if (!raw || !String(raw).trim()) continue;
    const engine = inferEngineFromModelId(raw);
    refs.push({
      path: field,
      engine,
      field,
    });
  }

  const skills = Array.isArray(catalog.skills) ? catalog.skills : [];
  skills.forEach((skill, si) => {
    const ids = skill.model_ids && typeof skill.model_ids === "object" ? skill.model_ids : {};
    for (const { id: engine } of EASY_CLOUD_ENGINES) {
      const raw = ids[engine];
      if (!raw || !String(raw).trim()) continue;
      refs.push({
        path: `skills[${si}].model_ids.${engine}`,
        engine,
        skillId: skill.id,
      });
    }
  });

  return refs;
}

function getModelValue(catalog, ref) {
  if (ref.field) return catalog[ref.field];
  const m = ref.path.match(/^skills\[(\d+)\]\.model_ids\.(\w+)$/);
  if (!m) return null;
  const skill = catalog.skills[Number(m[1])];
  return skill?.model_ids?.[m[2]] ?? null;
}

function setModelValue(catalog, ref, value) {
  if (ref.field) {
    catalog[ref.field] = value;
    return;
  }
  const m = ref.path.match(/^skills\[(\d+)\]\.model_ids\.(\w+)$/);
  if (!m) return;
  const skill = catalog.skills[Number(m[1])];
  if (!skill) return;
  if (!skill.model_ids) skill.model_ids = {};
  skill.model_ids[m[2]] = value;
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
      skillsPath: path.join(root, "easy-mode-config", "skills.json"),
      skillsRel: "easy-mode-config/skills.json",
      localMode: true,
    };
  }

  configureProviderCatalog({
    cachePath: config.catalogCachePath,
    logLabel: "skill-check",
  });

  console.log(`[skill-check] Starting (${dryRun ? "dry-run" : "apply"}${args.local ? ", local" : ", remote-git"})`);

  if (!args.local) {
    try {
      fetchLatestSkillsFile(config.repoDir, {
        branch: config.github?.branch,
        skillsFile: config.skillsRel,
        github: config.github,
      });
      console.log(`[skill-check] Fetched latest ${config.skillsRel} from origin/${config.github?.branch || "main"}`);
    } catch (e) {
      console.error(`[skill-check] Git fetch failed: ${e.message}`);
      process.exit(1);
    }
  }

  if (!fs.existsSync(config.skillsPath)) {
    console.error(`[skill-check] skills file not found: ${config.skillsPath}`);
    process.exit(1);
  }

  const rawText = fs.readFileSync(config.skillsPath, "utf8");
  const catalog = parseSkillsJson(rawText);
  if (!catalog) {
    console.error("[skill-check] Invalid skills.json");
    process.exit(1);
  }

  const keysMap = mergeKeys(process.env);
  let catalogsByEngine;
  try {
    catalogsByEngine = await refreshAllEngineCatalogsFromProviders(keysMap, {
      cachePath: config.catalogCachePath,
    });
  } catch (e) {
    console.error(`[skill-check] Catalog refresh failed: ${e.message}`);
    process.exit(1);
  }

  const idSets = buildIdSets(catalogsByEngine);
  const refs = collectModelRefs(catalog);
  /** @type {Array<object>} */
  const results = [];
  let hasUnresolved = false;
  let hasReplacements = false;

  for (const ref of refs) {
    const raw = getModelValue(catalog, ref);
    const canonical = canonicalForEngine(ref.engine, String(raw).trim());
    const idSet = idSets[ref.engine];
    const catalogList = catalogsByEngine[ref.engine] || [];

    if (!idSet || idSet.size === 0) {
      const msg = `Skipped ${ref.path}: no catalog for ${ref.engine} (missing API key?)`;
      console.warn(`[skill-check] ${msg}`);
      appendLog(config.logPath, {
        event: "skipped",
        path: ref.path,
        skillId: ref.skillId,
        engine: ref.engine,
        oldId: canonical,
        reason: "no_catalog",
      });
      continue;
    }

    if (idSet.has(canonical)) {
      results.push({ ...ref, status: "ok", oldId: canonical });
      continue;
    }

    const { replacement, score, bestScore } = findFuzzyReplacement(
      ref.engine,
      canonical,
      catalogList,
      { minScore: config.minMatchScore },
    );

    if (replacement) {
      hasReplacements = true;
      results.push({
        ...ref,
        status: "replacement",
        oldId: canonical,
        newId: replacement,
        score,
      });
      console.log(
        `[skill-check] REPLACE ${ref.path}: ${canonical} → ${replacement} (score ${score.toFixed(2)})`,
      );
    } else {
      hasUnresolved = true;
      results.push({
        ...ref,
        status: "unresolved",
        oldId: canonical,
        bestScore,
      });
      console.warn(
        `[skill-check] UNRESOLVED ${ref.path}: ${canonical} (best score ${bestScore.toFixed(2)})`,
      );
    }
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
    const serialized = `${JSON.stringify(catalog, null, 2)}\n`;
    atomicWriteUtf8(config.skillsPath, serialized);
    console.log(`[skill-check] Wrote ${config.skillsPath}`);

    if (!args.local && !config.localMode) {
      try {
        const changeLines = results
          .filter((r) => r.status === "replacement")
          .map((r) => {
            const label = r.skillId ? `${r.skillId}/${r.engine}` : r.field || r.path;
            return `${label}: ${r.oldId} → ${r.newId} (score ${r.score?.toFixed(2)})`;
          });
        pushResult = commitAndPushSkillsFile(config.repoDir, {
          branch: config.github?.branch,
          skillsFile: config.skillsRel,
          github: config.github,
          commitMessagePrefix: config.github?.commitMessagePrefix,
          changeLines,
        });
        console.log(`[skill-check] Pushed commit ${pushResult.commit} to ${config.github?.branch || "main"}`);
      } catch (e) {
        console.error(`[skill-check] Git push failed: ${e.message}`);
        appendLog(config.logPath, { event: "push_failed", error: e.message });
        if (config.ntfy?.topic || process.env.SKILL_CHECK_NTFY_TOPIC) {
          try {
            await sendNtfy(config, {
              title: "Skills check: push failed",
              body: e.message,
              tags: "rotating_light",
              priority: "high",
            });
          } catch (ne) {
            console.warn(`[skill-check] NTFY failed: ${ne.message}`);
          }
        }
        process.exit(1);
      }
    }
  } else if (hasReplacements && dryRun) {
    console.log("[skill-check] Dry-run: would apply replacements (no write/push)");
  }

  for (const r of results) {
    if (r.status === "ok") continue;
    appendLog(config.logPath, {
      event: r.status,
      path: r.path,
      skillId: r.skillId,
      engine: r.engine,
      field: r.field,
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
        const label = r.skillId ? `Skill "${r.skillId}" (${r.engine})` : r.field || r.path;
        if (r.status === "replacement") {
          const title = pushResult?.pushed
            ? "Skills model replaced (pushed)"
            : dryRun
              ? "Skills model would be replaced (dry-run)"
              : "Skills model replaced";
          let body = `${label}: ${r.oldId} → ${r.newId} (score ${r.score?.toFixed(2)})`;
          if (pushResult?.commit) body += `\nCommit: ${pushResult.commit} on ${config.github?.branch || "main"}`;
          await sendNtfy(config, { title, body, tags: "warning" });
        } else {
          await sendNtfy(config, {
            title: "Skills model unavailable — no replacement",
            body: `${label}: ${r.oldId} — no replacement found (best score ${r.bestScore?.toFixed(2)})`,
            tags: "rotating_light",
          });
        }
      } catch (e) {
        console.warn(`[skill-check] NTFY failed: ${e.message}`);
      }
    }
  } else if (results.some((r) => r.status === "replacement" || r.status === "unresolved")) {
    console.warn("[skill-check] NTFY topic not configured; skipping notifications");
  }

  const okCount = results.filter((r) => r.status === "ok").length;
  const repCount = results.filter((r) => r.status === "replacement").length;
  const unresCount = results.filter((r) => r.status === "unresolved").length;
  console.log(
    `[skill-check] Done: ${okCount} ok, ${repCount} replacement(s), ${unresCount} unresolved`,
  );

  process.exit(hasUnresolved ? 1 : 0);
}

main().catch((e) => {
  console.error("[skill-check] Fatal:", e);
  process.exit(1);
});
