/**
 * Disk cache for languagebench ChrF, Arena Score, and models.dev prices.
 * Aggregates are stored; the raw languagebench dump is not.
 * Ported from ai-i18n-tools `src/core/model-benchmarks.ts`.
 * Fetches are skipped when `VITEST` is set unless the caller passes `fetchImpl`.
 */

const fs = require("fs");
const path = require("path");
const { normalizeMatchKey } = require("./matchKeys");

const BENCHMARK_CACHE_VERSION = 1;
const BENCHMARK_CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;
const BENCHMARK_CACHE_FILENAME = "model-benchmarks.json";

const LANGUAGEBENCH_RESULTS_URL =
  "https://huggingface.co/spaces/fair-forward/languagebench/resolve/main/results/results.json";
const LANGUAGEBENCH_MODELS_URL =
  "https://huggingface.co/spaces/fair-forward/languagebench/resolve/main/results/models.json";
const ARENA_DATASET_URL = "https://huggingface.co/datasets/lmarena-ai/leaderboard-dataset";
const MODELS_DEV_URL = "https://models.dev/api.json";

const ARENA_TREE_URL =
  "https://huggingface.co/api/datasets/lmarena-ai/leaderboard-dataset/tree/main/text";
const ARENA_RESOLVE_BASE =
  "https://huggingface.co/datasets/lmarena-ai/leaderboard-dataset/resolve/main";

class BenchmarkUnavailableError extends Error {
  constructor(message) {
    super(message);
    this.name = "BenchmarkUnavailableError";
  }
}

const inflight = new Map();

function benchmarkCachePath(cacheDir) {
  return path.join(cacheDir, BENCHMARK_CACHE_FILENAME);
}

function sourceMeta(url, license, attribution, fetchedAt, error) {
  return { url, license, attribution, fetchedAt, error };
}

function emptyBenchmarkCache() {
  return {
    cacheVersion: BENCHMARK_CACHE_VERSION,
    sources: {
      languagebench: sourceMeta(
        LANGUAGEBENCH_RESULTS_URL,
        "CC-BY-SA-4.0",
        "languagebench (Fair Forward / GIZ)",
        null,
        null,
      ),
      arena: sourceMeta(
        ARENA_DATASET_URL,
        "CC-BY-4.0",
        "LMArena Arena Score (text / overall)",
        null,
        null,
      ),
      modelsDev: sourceMeta(MODELS_DEV_URL, "MIT", "models.dev", null, null),
    },
    languagebench: { models: {} },
    arena: { models: [] },
    modelsDev: { pricing: {} },
  };
}

function isFresh(meta, now) {
  if (!meta?.fetchedAt || meta.error) return false;
  const parsed = Date.parse(meta.fetchedAt);
  if (Number.isNaN(parsed)) return false;
  return now - parsed < BENCHMARK_CACHE_TTL_MS;
}

function readBenchmarkCache(cachePath) {
  try {
    if (!fs.existsSync(cachePath)) return null;
    const parsed = JSON.parse(fs.readFileSync(cachePath, "utf8"));
    if (parsed?.cacheVersion !== BENCHMARK_CACHE_VERSION) return null;
    if (!parsed.languagebench || !parsed.arena || !parsed.modelsDev || !parsed.sources) {
      return null;
    }
    return parsed;
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    throw new Error(`Could not read benchmark cache ${cachePath}: ${msg}`, { cause: e });
  }
}

function writeBenchmarkCache(cachePath, payload) {
  const dir = path.dirname(cachePath);
  fs.mkdirSync(dir, { recursive: true });
  const tmp = `${cachePath}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(tmp, `${JSON.stringify(payload)}\n`, "utf8");
  fs.renameSync(tmp, cachePath);
}

async function defaultJson(url, timeoutMs) {
  const response = await fetch(url, { signal: AbortSignal.timeout(timeoutMs) });
  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`HTTP ${response.status} for ${url}: ${body.slice(0, 200)}`);
  }
  return response.json();
}

async function defaultBuffer(url, timeoutMs) {
  const response = await fetch(url, { signal: AbortSignal.timeout(timeoutMs) });
  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`HTTP ${response.status} for ${url}: ${body.slice(0, 200)}`);
  }
  return response.arrayBuffer();
}

function networkFetchAllowed(fetchImpl) {
  return fetchImpl !== undefined || process.env.VITEST !== "true";
}

function resolveFetch(fetchImpl) {
  if (fetchImpl) return fetchImpl;
  if (!networkFetchAllowed(undefined)) return null;
  return { json: defaultJson, buffer: defaultBuffer };
}

function finiteNumber(value) {
  const n = typeof value === "number" ? value : Number(value);
  return Number.isFinite(n) ? n : null;
}

function aggregateLanguagebench(results, models) {
  if (!Array.isArray(results)) throw new Error("languagebench results.json is not an array");
  if (!Array.isArray(models)) throw new Error("languagebench models.json is not an array");
  const byModel = new Map();
  for (const row of results) {
    if (!row || typeof row !== "object") continue;
    if (row.task !== "translation_from" && row.task !== "translation_to") continue;
    if (row.metric !== "chrf") continue;
    const score = finiteNumber(row.score);
    const model = typeof row.model === "string" ? row.model : "";
    const bcp = typeof row.bcp_47 === "string" ? row.bcp_47 : "";
    if (score === null || !model || !bcp) continue;
    let agg = byModel.get(model);
    if (!agg) {
      agg = { chrfByBcp47: {}, cost: null };
      byModel.set(model, agg);
    }
    const bucket = agg.chrfByBcp47[bcp] ?? { sum: 0, n: 0 };
    bucket.sum += score;
    bucket.n += 1;
    agg.chrfByBcp47[bcp] = bucket;
  }
  for (const row of models) {
    if (!row || typeof row !== "object") continue;
    const id = typeof row.id === "string" ? row.id : "";
    const cost = finiteNumber(row.cost);
    if (!id || cost === null) continue;
    const agg = byModel.get(id) ?? { chrfByBcp47: {}, cost: null };
    agg.cost = cost;
    byModel.set(id, agg);
  }
  if (byModel.size === 0) throw new Error("languagebench returned no ChrF rows");
  return { models: Object.fromEntries(byModel) };
}

function buildModelsDevPricing(apiJson) {
  const out = {};
  if (!apiJson || typeof apiJson !== "object") return out;
  for (const provider of Object.values(apiJson)) {
    if (!provider || typeof provider !== "object") continue;
    const models = provider.models;
    if (!models || typeof models !== "object") continue;
    for (const [id, model] of Object.entries(models)) {
      const cost = model && typeof model === "object" ? model.cost : undefined;
      const input = finiteNumber(cost && typeof cost === "object" ? cost.input : undefined);
      const output = finiteNumber(cost && typeof cost === "object" ? cost.output : undefined);
      if (input === null && output === null) continue;
      const key = normalizeMatchKey(id);
      if (!key) continue;
      const entry = { input, output };
      const prev = out[key];
      const blended = (3 * (entry.input ?? 0) + (entry.output ?? 0)) / 4;
      const prevBlended = prev ? (3 * (prev.input ?? 0) + (prev.output ?? 0)) / 4 : Infinity;
      if (!prev || blended < prevBlended) out[key] = entry;
    }
  }
  return out;
}

function pickLatestParquetPath(listing) {
  const files = Array.isArray(listing) ? listing : [];
  const latest = files
    .map((row) => {
      if (!row || typeof row !== "object") return "";
      return String(row.path ?? "");
    })
    .filter(
      (p) => /\/latest-\d+-of-\d+\.parquet$/i.test(p) || /^latest-\d+-of-\d+\.parquet$/i.test(p),
    );
  if (latest.length === 0) {
    throw new Error("no latest-*.parquet under text/ in the Arena dataset");
  }
  latest.sort();
  const chosen = latest[latest.length - 1] ?? "";
  return chosen.includes("/") ? chosen : `text/${chosen}`;
}

function arenaRowsFromParquetObjects(rows) {
  const models = [];
  for (const row of rows || []) {
    if (String(row.category ?? "").toLowerCase() !== "overall") continue;
    const model = String(row.model_name ?? "").trim();
    const vendor = String(row.organization ?? "").trim();
    const score = finiteNumber(row.rating);
    if (!model || score === null) continue;
    const rawDate = row.leaderboard_publish_date;
    const publishDate =
      typeof rawDate === "string" && rawDate.trim() ? rawDate.trim().slice(0, 10) : null;
    models.push({ model, vendor, score, publishDate });
  }
  return models;
}

function bufferAsAsync(buf) {
  return {
    byteLength: buf.byteLength,
    slice: (start, end) => buf.slice(start, end ?? buf.byteLength),
  };
}

async function fetchArena(fetchImpl) {
  const listing = await fetchImpl.json(ARENA_TREE_URL, 30_000);
  const parquetPath = pickLatestParquetPath(listing);
  const buf = await fetchImpl.buffer(`${ARENA_RESOLVE_BASE}/${parquetPath}`, 120_000);
  // hyparquet is ESM-only. This dynamic import is the documented exception to the
  // no-inline-imports rule so CommonJS (Electron main and Express) can read the parquet.
  const { parquetReadObjects } = await import("hyparquet");
  const rows = await parquetReadObjects({
    file: bufferAsAsync(buf),
    columns: ["model_name", "organization", "rating", "category", "leaderboard_publish_date"],
  });
  const models = arenaRowsFromParquetObjects(rows);
  if (models.length === 0) throw new Error("Arena snapshot contained no overall scores");
  return models;
}

function hasLanguagebench(cache) {
  return Object.keys(cache.languagebench.models).length > 0;
}

function hasArena(cache) {
  return cache.arena.models.length > 0;
}

function assertScoresAvailable(cache) {
  if (!hasLanguagebench(cache) && !hasArena(cache)) {
    const lb = cache.sources.languagebench.error ?? "no ChrF rows";
    const arena = cache.sources.arena.error ?? "no Arena scores";
    throw new BenchmarkUnavailableError(
      `Cannot rank models: languagebench (${lb}) and Arena (${arena}) are both unavailable.`,
    );
  }
}

async function refreshCache(cachePath, previous, refresh, which, fetchImpl) {
  const next = previous ? structuredClone(previous) : emptyBenchmarkCache();
  const nowIso = new Date().toISOString();
  const now = Date.now();
  const fetcher = fetchImpl;

  const fail = (slot, error, clear) => {
    slot.error = error;
    if (refresh) {
      slot.fetchedAt = null;
      clear();
    }
  };

  const skipped = "benchmark download skipped";

  if (which === "all") {
    const needLb = refresh || !isFresh(next.sources.languagebench, now) || !hasLanguagebench(next);
    const needArena = refresh || !isFresh(next.sources.arena, now) || !hasArena(next);
    if (needLb) {
      if (!fetcher) {
        if (!hasLanguagebench(next)) {
          fail(next.sources.languagebench, skipped, () => {
            next.languagebench = { models: {} };
          });
        }
      } else {
        try {
          const [results, models] = await Promise.all([
            fetcher.json(LANGUAGEBENCH_RESULTS_URL, 180_000),
            fetcher.json(LANGUAGEBENCH_MODELS_URL, 60_000),
          ]);
          next.languagebench = aggregateLanguagebench(results, models);
          next.sources.languagebench.fetchedAt = nowIso;
          next.sources.languagebench.error = null;
        } catch (e) {
          const msg = e instanceof Error ? e.message : String(e);
          fail(next.sources.languagebench, msg, () => {
            next.languagebench = { models: {} };
          });
        }
      }
    }
    if (needArena) {
      if (!fetcher) {
        if (!hasArena(next)) {
          fail(next.sources.arena, skipped, () => {
            next.arena = { models: [] };
          });
        }
      } else {
        try {
          next.arena = { models: await fetchArena(fetcher) };
          next.sources.arena.fetchedAt = nowIso;
          next.sources.arena.error = null;
        } catch (e) {
          const msg = e instanceof Error ? e.message : String(e);
          fail(next.sources.arena, msg, () => {
            next.arena = { models: [] };
          });
        }
      }
    }
  }

  const needDev =
    which === "modelsDev" || which === "all"
      ? refresh || !isFresh(next.sources.modelsDev, now) || Object.keys(next.modelsDev.pricing).length === 0
      : false;
  if (needDev) {
    if (!fetcher) {
      if (Object.keys(next.modelsDev.pricing).length === 0) {
        fail(next.sources.modelsDev, skipped, () => {
          next.modelsDev = { pricing: {} };
        });
      }
    } else {
      try {
        const apiJson = await fetcher.json(MODELS_DEV_URL, 60_000);
        const pricing = buildModelsDevPricing(apiJson);
        if (Object.keys(pricing).length === 0) throw new Error("models.dev returned no prices");
        next.modelsDev = { pricing };
        next.sources.modelsDev.fetchedAt = nowIso;
        next.sources.modelsDev.error = null;
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        fail(next.sources.modelsDev, msg, () => {
          next.modelsDev = { pricing: {} };
        });
      }
    }
  }

  if (which === "all") assertScoresAvailable(next);
  writeBenchmarkCache(cachePath, next);
  return next;
}

/**
 * Load the benchmark cache, refreshing stale sources. A failed download reuses the
 * previous slice unless `refresh` is set.
 * @param {string} cachePath
 * @param {{ refresh?: boolean, fetchImpl?: { json: Function, buffer: Function } }} [opts]
 */
async function ensureBenchmarkCache(cachePath, opts = {}) {
  const refresh = opts.refresh === true;
  const existing = inflight.get(cachePath);
  if (existing && !refresh) return existing;
  const run = (async () => {
    const previous = readBenchmarkCache(cachePath);
    const now = Date.now();
    const allFresh =
      !refresh &&
      previous !== null &&
      isFresh(previous.sources.languagebench, now) &&
      isFresh(previous.sources.arena, now) &&
      isFresh(previous.sources.modelsDev, now) &&
      hasLanguagebench(previous) &&
      hasArena(previous);
    if (allFresh && previous) return previous;
    const fetcher = resolveFetch(opts.fetchImpl);
    return refreshCache(cachePath, previous, refresh, "all", fetcher);
  })();
  inflight.set(cachePath, run);
  try {
    return await run;
  } finally {
    inflight.delete(cachePath);
  }
}

module.exports = {
  BENCHMARK_CACHE_VERSION,
  BENCHMARK_CACHE_TTL_MS,
  BENCHMARK_CACHE_FILENAME,
  LANGUAGEBENCH_RESULTS_URL,
  LANGUAGEBENCH_MODELS_URL,
  ARENA_DATASET_URL,
  MODELS_DEV_URL,
  BenchmarkUnavailableError,
  benchmarkCachePath,
  emptyBenchmarkCache,
  readBenchmarkCache,
  aggregateLanguagebench,
  buildModelsDevPricing,
  pickLatestParquetPath,
  arenaRowsFromParquetObjects,
  ensureBenchmarkCache,
};
