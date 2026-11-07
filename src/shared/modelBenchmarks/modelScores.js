/**
 * Quality-profile Index, ChrF, and Arena Score for the Settings model cards.
 * Each engine is ranked on its own catalog pool. Custom providers and the
 * OpenRouter free router are skipped. A model is omitted when both ChrF and
 * Arena are missing, so stand-in-only rows are not shown.
 */

const fs = require("fs");
const {
  benchmarkCachePath,
  ensureBenchmarkCache,
  readBenchmarkCache,
} = require("./benchmarkCache");
const { QUALITY_WEIGHTS, rankProviderModels } = require("./rankModels");

const uiLanguages = require("../../renderer/locales/ui-languages.json");

/** Cloud engines from `ENGINE_IDS`, plus local. Custom providers stay out. */
const SCORED_ENGINES = new Set([
  "openrouter",
  "openai",
  "anthropic",
  "google",
  "deepseek",
  "groq",
  "mistralai",
  "xai",
  "cerebras",
  "nvidia",
  "alibaba",
  "apifun",
  "local",
]);

const FREE_ROUTER_ID = "openrouter/openrouter/free";

function defaultLocales() {
  return uiLanguages
    .map((row) => (row && row.code ? String(row.code) : ""))
    .filter(Boolean);
}

function publicSources(benchmarks) {
  const pick = (slot) => ({
    url: slot?.url || "",
    license: slot?.license || "",
    attribution: slot?.attribution || "",
    error: slot?.error || null,
  });
  return {
    languagebench: pick(benchmarks.sources?.languagebench),
    arena: pick(benchmarks.sources?.arena),
    modelsDev: pick(benchmarks.sources?.modelsDev),
  };
}

function warningsOf(benchmarks) {
  const out = [];
  const lb = benchmarks.sources?.languagebench?.error;
  const arena = benchmarks.sources?.arena?.error;
  const dev = benchmarks.sources?.modelsDev?.error;
  if (lb) out.push(`languagebench: ${lb}`);
  if (arena) out.push(`Arena: ${arena}`);
  if (dev) out.push(`models.dev: ${dev}`);
  return out;
}

function scoreCatalog(models, benchmarks, locales) {
  /** @type {Map<string, Array<{ canonicalId: string, entry: object }>>} */
  const groups = new Map();
  for (const model of models || []) {
    const id = String(model?.id || "").trim();
    if (!id || id === FREE_ROUTER_ID) continue;
    const slash = id.indexOf("/");
    if (slash <= 0) continue;
    const engine = id.slice(0, slash);
    if (!SCORED_ENGINES.has(engine)) continue;
    const inner = id.slice(slash + 1);
    if (!inner || (engine === "openrouter" && inner === "openrouter/free")) continue;
    const list = groups.get(engine) ?? [];
    const pricing = model.pricing && typeof model.pricing === "object" ? model.pricing : undefined;
    list.push({
      canonicalId: id,
      entry: {
        id: inner,
        name: model.name || inner,
        ...(pricing ? { pricing } : {}),
      },
    });
    groups.set(engine, list);
  }

  /** @type {Record<string, { index: number, rank: number, chrf: number | null, arena: number | null, maxChrf: number | null, maxArena: number | null, belowFloor: boolean }>} */
  const scores = {};
  for (const [engine, rows] of groups) {
    const ranked = rankProviderModels({
      provider: engine,
      catalog: rows.map((row) => row.entry),
      benchmarks,
      profile: "quality",
      weights: QUALITY_WEIGHTS,
      locales,
    });
    const canonicalByInner = new Map(rows.map((row) => [row.entry.id, row.canonicalId]));
    const visible = [];
    for (const row of ranked) {
      if (row.chrf == null && row.arenaScore == null) continue;
      const canonicalId = canonicalByInner.get(row.id);
      if (!canonicalId) continue;
      visible.push({ canonicalId, row });
    }
    visible.sort((a, b) => b.row.index - a.row.index || a.row.rank - b.row.rank);
    visible.forEach((item, i) => {
      scores[item.canonicalId] = {
        index: item.row.index,
        rank: i + 1,
        chrf: item.row.chrf,
        arena: item.row.arenaScore,
        maxChrf: item.row.maxChrF,
        maxArena: item.row.maxArena,
        belowFloor: item.row.belowFloor,
      };
    });
  }
  return scores;
}

/**
 * @param {Array<{ id: string, name?: string, pricing?: { prompt?: number, completion?: number } }>} models
 * @param {{ cacheDir?: string, locales?: string[], refresh?: boolean, benchmarks?: object }} [opts]
 */
async function getModelScores(models, opts = {}) {
  const locales = opts.locales && opts.locales.length ? opts.locales : defaultLocales();
  let benchmarks = opts.benchmarks || null;
  if (!benchmarks) {
    if (!opts.cacheDir) throw new Error("cacheDir is required");
    const cachePath = benchmarkCachePath(opts.cacheDir);
    try {
      benchmarks = await loadBenchmarks(cachePath, opts.refresh === true);
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      let cached = null;
      try {
        cached = readBenchmarkCache(cachePath);
      } catch {
        // A corrupt cache cannot be ranked. Scores stay empty.
      }
      const hasRows =
        cached &&
        (Object.keys(cached.languagebench?.models || {}).length > 0 ||
          (cached.arena?.models || []).length > 0);
      return {
        scores: hasRows ? scoreCatalog(models, cached, locales) : {},
        sources: cached ? publicSources(cached) : null,
        warnings: [message, ...(cached ? warningsOf(cached) : [])],
      };
    }
  }
  return {
    scores: scoreCatalog(models, benchmarks, locales),
    sources: publicSources(benchmarks),
    warnings: warningsOf(benchmarks),
  };
}

async function loadBenchmarks(cachePath, refresh) {
  try {
    return await ensureBenchmarkCache(cachePath, { refresh });
  } catch (e) {
    const message = e instanceof Error ? e.message : String(e);
    if (!message.startsWith("Could not read benchmark cache")) throw e;
    try {
      fs.unlinkSync(cachePath);
    } catch {
      /* ignore */
    }
    return ensureBenchmarkCache(cachePath, { refresh: true });
  }
}

module.exports = {
  SCORED_ENGINES,
  FREE_ROUTER_ID,
  getModelScores,
};
