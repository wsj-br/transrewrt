/**
 * Deterministic benchmark scoring for Easy-mode AI Suggest.
 *
 * Licence-clean sources (Artificial Analysis retired — its Data Platform terms
 * restrict use to internal purposes and bar structured/machine-readable reuse
 * and "model/provider selection guidance", which is exactly this feature):
 *
 *  - languagebench (fair-forward Space JSON, keyless) → translation quality (ChrF)
 *  - Arena / LMArena official HF dataset (text/latest, overall) → capability
 *  - OpenRouter endpoint performance        → speed (throughput, latency)
 *  - models.dev (MIT)                       → pricing fallback
 *  - provider-catalog pricing               → primary pricing
 *
 * Attribution / licence per source is recorded in the cache payload `sources`.
 *
 * Attribution: https://huggingface.co/spaces/fair-forward/languagebench (CC-BY-SA-4.0)
 * Attribution: https://huggingface.co/datasets/lmarena-ai/leaderboard-dataset (CC-BY-4.0)
 * Attribution: https://models.dev/ (MIT)
 */

const fs = require("fs");
const path = require("path");
const { sharedRequire } = require("./paths.js");
const { isTransrewrtWorkflowModel } = sharedRequire("presetsProviderCatalog.js");
const arenaLeaderboardModule = import("./fetchArenaLeaderboard.mjs");

const BENCHMARK_CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;
/** Bump when the on-disk cache shape or Arena source changes (invalidates old mirrors). */
const BENCHMARK_CACHE_VERSION = 2;

const LANGUAGEBENCH_RESULTS_URL =
  "https://huggingface.co/spaces/fair-forward/languagebench/resolve/main/results/results.json";
const LANGUAGEBENCH_MODELS_URL =
  "https://huggingface.co/spaces/fair-forward/languagebench/resolve/main/results/models.json";

const ARENA_DATASET_URL = "https://huggingface.co/datasets/lmarena-ai/leaderboard-dataset";
const ARENA_LEADERBOARD = "text";

// models.dev open model registry (MIT) — pricing fallback for unpriced catalog SKUs.
const MODELS_DEV_URL = "https://models.dev/api.json";

/** UI locale → languagebench BCP-47 codes used for ChrF aggregation. */
const UI_LOCALE_TO_BCP47 = {
  "en-GB": ["en"],
  ar: ["ar"],
  "zh-Hans": ["zh"],
  "zh-Hant": ["zh", "yue"],
  cs: ["cs"],
  nl: ["nl"],
  fr: ["fr"],
  de: ["de"],
  el: ["el"],
  hi: ["hi"],
  hu: ["hu"],
  it: ["it"],
  ja: ["ja"],
  ko: ["ko"],
  fa: ["fa"],
  pl: ["pl"],
  "pt-BR": ["pt"],
  ro: ["ro"],
  ru: ["ru"],
  sk: ["sk"],
  es: ["es"],
  sv: ["sv"],
  th: ["th"],
  tr: ["tr"],
  uk: ["uk"],
  vi: ["vi"],
};

/**
 * Extra one-way aliases from benchmark id/slug → preferred catalog id tails
 * (without engine prefix). Used when fuzzy matching is ambiguous.
 */
const CURATED_BENCHMARK_TO_CATALOG = {
  "x-ai/grok-4.20": ["grok-4.20-0309-non-reasoning", "grok-4.20-0309-reasoning"],
  "x-ai/grok-4.20-0309": ["grok-4.20-0309-non-reasoning", "grok-4.20-0309-reasoning"],
  "deepseek/deepseek-v4-flash-20260423": ["deepseek-v4-flash"],
  "anthropic/claude-haiku-4.5": ["claude-haiku-4-5-20251001", "claude-haiku-4-5"],
  "google/gemini-3.1-flash-lite": ["gemini-3.1-flash-lite"],
  "google/gemini-3.1-pro-preview": ["gemini-3.1-pro-preview"],
};

const PROFILE_BY_PRESET = {
  standard: "standard",
  advanced: "advanced",
  technical: "technical",
  "free-router": "free",
};

const PROFILE_CONFIG = {
  standard: {
    weights: { quality: 0.25, intelligence: 0.1, price: 0.3, speed: 0.35 },
    qualityFloorRatio: 0.85,
    shortlistSize: 4,
    timingCandidates: 4,
  },
  advanced: {
    weights: { quality: 0.45, intelligence: 0.35, price: 0.15, speed: 0.05 },
    qualityFloorRatio: 0.7,
    shortlistSize: 5,
    timingCandidates: 0,
  },
  technical: {
    weights: { quality: 0.25, intelligence: 0.5, price: 0.15, speed: 0.1 },
    qualityFloorRatio: 0.65,
    shortlistSize: 5,
    timingCandidates: 0,
  },
  free: {
    weights: { quality: 0.4, intelligence: 0.2, price: 0.3, speed: 0.1 },
    qualityFloorRatio: 0,
    shortlistSize: 5,
    timingCandidates: 0,
    zeroPriceOnly: true,
  },
};

/** @type {{ path: string, data: object, mtimeMs: number } | null} */
let memoryCache = null;
/** @type {Promise<object> | null} */
let refreshInFlight = null;

function defaultBenchmarkCachePath(root) {
  return path.join(root, "presets-editor-benchmark-cache.json");
}

function parseLastUpdated(iso) {
  if (typeof iso !== "string" || !iso.trim()) return null;
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? null : d;
}

function isCacheFresh(lastUpdated) {
  const d = lastUpdated instanceof Date ? lastUpdated : parseLastUpdated(lastUpdated);
  if (!d) return false;
  return Date.now() - d.getTime() < BENCHMARK_CACHE_TTL_MS;
}

function readDiskCache(cachePath) {
  try {
    if (!fs.existsSync(cachePath)) return null;
    const parsed = JSON.parse(fs.readFileSync(cachePath, "utf8"));
    if (parsed?.cacheVersion !== BENCHMARK_CACHE_VERSION) return null;
    const lastUpdated = parseLastUpdated(parsed?.lastUpdated);
    if (!lastUpdated) return null;
    if (!parsed.languagebench || !Array.isArray(parsed.languagebench.results)) return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeDiskCache(cachePath, payload) {
  const dir = path.dirname(cachePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const tmp = `${cachePath}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(payload), "utf8");
  fs.renameSync(tmp, cachePath);
}

async function fetchJson(url, { headers = {}, timeoutMs = 120000 } = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, { headers, signal: ctrl.signal });
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`HTTP ${res.status} for ${url}: ${body.slice(0, 200)}`);
    }
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Fetch the official Arena text/latest overall snapshot (CC-BY-4.0).
 * @returns {Promise<{ models: object[], fetched: boolean, error: string|null, leaderboard: string, snapshotDate: string|null, parquetPath?: string|null }>}
 */
async function fetchArenaTextSnapshot() {
  try {
    const { fetchArenaTextLatestOverall } = await arenaLeaderboardModule;
    return await fetchArenaTextLatestOverall();
  } catch (e) {
    return {
      models: [],
      fetched: false,
      error: e.message || String(e),
      leaderboard: ARENA_LEADERBOARD,
      snapshotDate: null,
      parquetPath: null,
    };
  }
}

/**
 * Fetch models.dev registry pricing as a slim by-key map (licence: MIT).
 * @returns {Promise<{ pricing: Record<string, { input: number|null, output: number|null }>, fetched: boolean, error: string|null }>}
 */
async function fetchModelsDevPricing() {
  try {
    const apiJson = await fetchJson(MODELS_DEV_URL, { timeoutMs: 60000 });
    const pricing = buildModelsDevPricingByKey(apiJson);
    return { pricing, fetched: Object.keys(pricing).length > 0, error: null };
  } catch (e) {
    return { pricing: {}, fetched: false, error: e.message || String(e) };
  }
}

function collectTargetBcp47(uiLanguagesPath) {
  const codes = new Set();
  try {
    if (uiLanguagesPath && fs.existsSync(uiLanguagesPath)) {
      const list = JSON.parse(fs.readFileSync(uiLanguagesPath, "utf8"));
      if (Array.isArray(list)) {
        for (const row of list) {
          const mapped = UI_LOCALE_TO_BCP47[row?.code];
          if (mapped) mapped.forEach((c) => codes.add(c));
          else if (typeof row?.code === "string" && row.code.length >= 2) {
            codes.add(row.code.split("-")[0].toLowerCase());
          }
        }
      }
    }
  } catch {
    /* fall through to defaults */
  }
  if (!codes.size) {
    for (const arr of Object.values(UI_LOCALE_TO_BCP47)) arr.forEach((c) => codes.add(c));
  }
  return [...codes];
}

/**
 * Aggregate mean ChrF for translation_from + translation_to over target languages.
 * @param {object[]} results
 * @param {string[]} bcp47List
 * @returns {Map<string, { chrf: number, n: number }>}
 */
function aggregateLanguagebenchChrF(results, bcp47List) {
  const allow = new Set(bcp47List);
  /** @type {Map<string, number[]>} */
  const byModel = new Map();
  for (const row of results || []) {
    if (!row || !allow.has(row.bcp_47)) continue;
    if (row.task !== "translation_from" && row.task !== "translation_to") continue;
    if (row.metric !== "chrf") continue;
    const score = Number(row.score);
    if (!Number.isFinite(score)) continue;
    const model = String(row.model || "");
    if (!model) continue;
    let arr = byModel.get(model);
    if (!arr) {
      arr = [];
      byModel.set(model, arr);
    }
    arr.push(score);
  }
  /** @type {Map<string, { chrf: number, n: number }>} */
  const out = new Map();
  for (const [model, arr] of byModel) {
    if (!arr.length) continue;
    out.set(model, {
      chrf: arr.reduce((a, b) => a + b, 0) / arr.length,
      n: arr.length,
    });
  }
  return out;
}

function stripEnginePrefix(id) {
  const s = String(id || "").trim();
  const slash = s.indexOf("/");
  if (slash <= 0) return s;
  const eng = s.slice(0, slash).toLowerCase();
  const known = new Set([
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
  return known.has(eng) ? s.slice(slash + 1) : s;
}

function normalizeMatchKey(raw) {
  let s = String(raw || "")
    .toLowerCase()
    .trim();
  if (!s) return "";
  s = s.replace(/^openrouter\//, "");
  // x-ai → xai for cross-source matching
  s = s.replace(/^x-ai\//, "xai/");
  s = s.replace(/~/g, "");
  // drop Arena display-name effort tags and common catalog suffixes
  s = s.replace(/\s*\((?:x?high|max|low|medium|minimal|adaptive)\)\s*$/i, "");
  s = s
    .replace(/-(non-)?reasoning(-high|-low|-medium|-max|-minimal|-adaptive)?$/g, "")
    .replace(/-(high|low|medium|max|minimal|xhigh|preview|instant)(-\d{2}-\d{2})?$/g, "")
    .replace(/-preview(-\d{2}-\d{4})?$/g, "")
    .replace(/-\d{8}$/g, "")
    .replace(/-\d{6}$/g, "");
  // collapse punctuation
  s = s.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return s;
}

function keysForCatalogModel(engine, model) {
  const id = String(model?.id || "").trim();
  const displayId = String(model?.displayId || "").trim();
  const name = String(model?.name || "").trim();
  const keys = new Set();
  const add = (v) => {
    const k = normalizeMatchKey(v);
    if (k) keys.add(k);
  };
  add(id);
  add(displayId);
  add(name);
  add(stripEnginePrefix(id));
  if (engine === "openrouter") {
    add(displayId);
    // also key without vendor: google/gemini-x → gemini-x
    const tail = stripEnginePrefix(id);
    const innerSlash = tail.indexOf("/");
    if (innerSlash > 0) add(tail.slice(innerSlash + 1));
  }
  return [...keys];
}

function keysForBenchmarkId(benchId) {
  const keys = new Set();
  const add = (v) => {
    const k = normalizeMatchKey(v);
    if (k) keys.add(k);
  };
  add(benchId);
  add(stripEnginePrefix(benchId));
  const tail = stripEnginePrefix(benchId);
  const slash = tail.indexOf("/");
  if (slash > 0) add(tail.slice(slash + 1));
  // also with xai vs x-ai already handled in normalizeMatchKey
  return [...keys];
}

function stripArenaEffortTag(name) {
  return String(name || "")
    .replace(/\s*\((?:x?high|max|low|medium|minimal|adaptive)\)\s*$/i, "")
    .trim();
}

/**
 * Normalised match keys for one Arena leaderboard row (`{ model, vendor }`).
 * Display names like "Claude Opus 5.5 (High)" are keyed with and without the effort tag.
 * @param {object} row
 * @returns {string[]}
 */
function keysForArenaModel(row) {
  const keys = new Set();
  const add = (v) => {
    const k = normalizeMatchKey(v);
    if (k) keys.add(k);
  };
  const model = String(row?.model || "");
  const stripped = stripArenaEffortTag(model);
  const vendor = String(row?.vendor || "").toLowerCase();
  add(model);
  add(stripped);
  if (vendor && model) add(`${vendor}/${model}`);
  if (vendor && stripped) add(`${vendor}/${stripped}`);
  return [...keys];
}

/**
 * Map of normalised key → cheapest models.dev price (per 1M tokens) for the
 * whole registry. Used only as a pricing fallback for unpriced catalog SKUs.
 * @param {object} apiJson - models.dev `/api.json` shape: { [providerId]: { models: { [id]: { cost } } } }
 * @returns {Record<string, { input: number|null, output: number|null }>}
 */
function buildModelsDevPricingByKey(apiJson) {
  /** @type {Record<string, { input: number|null, output: number|null }>} */
  const out = {};
  for (const provider of Object.values(apiJson || {})) {
    const models = provider?.models;
    if (!models || typeof models !== "object") continue;
    for (const [id, model] of Object.entries(models)) {
      const cost = model?.cost;
      const input = Number(cost?.input);
      const output = Number(cost?.output);
      if (!Number.isFinite(input) && !Number.isFinite(output)) continue;
      const key = normalizeMatchKey(id);
      if (!key) continue;
      const entry = {
        input: Number.isFinite(input) ? input : null,
        output: Number.isFinite(output) ? output : null,
      };
      const prev = out[key];
      // Keep the cheapest match when several providers serve the same model id.
      const blended = (3 * (entry.input ?? 0) + (entry.output ?? 0)) / 4;
      const prevBlended = prev ? (3 * (prev.input ?? 0) + (prev.output ?? 0)) / 4 : Infinity;
      if (!prev || blended < prevBlended) out[key] = entry;
    }
  }
  return out;
}

/**
 * Speed lookup from OpenRouter endpoint performance (`performanceByPath`):
 * pathPart → { latency_p90_s, throughput_p90 }. Throughput maps to tokens/s,
 * latency maps to a time-to-first-response proxy in seconds.
 * @param {Record<string, object|null>} performanceByPath
 * @returns {Map<string, { tokens_per_sec: number|null, ttft_sec: number|null }>}
 */
function buildSpeedByKeys(performanceByPath) {
  /** @type {Map<string, { tokens_per_sec: number|null, ttft_sec: number|null }>} */
  const out = new Map();
  for (const [pathPart, perf] of Object.entries(performanceByPath || {})) {
    if (!perf || typeof perf !== "object") continue;
    const key = normalizeMatchKey(pathPart);
    if (!key) continue;
    const throughput = Number(perf.throughput_p90);
    const latency = Number(perf.latency_p90_s);
    out.set(key, {
      tokens_per_sec: Number.isFinite(throughput) && throughput > 0 ? throughput : null,
      ttft_sec: Number.isFinite(latency) && latency > 0 ? latency : null,
    });
  }
  return out;
}

/**
 * Blended $/1M tokens from catalog pricing (per-token → per-1M), 3:1 input:output.
 * @param {object} model
 * @returns {number | null}
 */
function catalogBlendedPricePer1M(model) {
  const p = model?.pricing;
  if (!p || typeof p !== "object") return null;
  const prompt = Number(p.prompt);
  const completion = Number(p.completion);
  if (!Number.isFinite(prompt) && !Number.isFinite(completion)) return null;
  const inPer1M = Number.isFinite(prompt) ? prompt * 1e6 : 0;
  const outPer1M = Number.isFinite(completion) ? completion * 1e6 : inPer1M;
  return (3 * inPer1M + outPer1M) / 4;
}

function catalogIsZeroPrice(model) {
  const blended = catalogBlendedPricePer1M(model);
  if (blended == null) return false;
  return blended <= 0;
}

function resolveProfile(preset) {
  const id = String(preset?.id || "")
    .toLowerCase()
    .trim();
  if (PROFILE_BY_PRESET[id]) return PROFILE_BY_PRESET[id];
  const hay = `${id} ${preset?.name || ""} ${preset?.description || ""}`.toLowerCase();
  if (/\bfree\b|zero-?cost|no charge/.test(hay)) return "free";
  if (/\btechnical\b|code|developer/.test(hay)) return "technical";
  if (/\badvanced\b|quality|best|high-?accuracy|nuanced/.test(hay)) return "advanced";
  if (/\bstandard\b|fast|quick|lightweight|cost-?efficient|high-?volume/.test(hay)) {
    return "standard";
  }
  return "standard";
}

function clamp01(n) {
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.min(1, n));
}

/** Minimum acceptable ChrF = ratio × best ChrF in the candidate set (e.g. 0.85 → within 15% of best). */
function qualityFloorFromBest(values, ratio) {
  if (!values.length || !(ratio > 0)) return 0;
  const max = Math.max(...values);
  return max * ratio;
}

/**
 * Build match index: normalized key → { engine, catalogId, model }
 */
function buildCatalogMatchIndex(catalogsByEngine) {
  /** @type {Map<string, Array<{ engine: string, catalogId: string, model: object }>>} */
  const index = new Map();
  for (const [engine, models] of Object.entries(catalogsByEngine || {})) {
    for (const model of models || []) {
      if (!isTransrewrtWorkflowModel(model)) continue;
      const catalogId = String(model.id || "").trim();
      if (!catalogId) continue;
      const entry = { engine, catalogId, model };
      for (const key of keysForCatalogModel(engine, model)) {
        let arr = index.get(key);
        if (!arr) {
          arr = [];
          index.set(key, arr);
        }
        if (!arr.some((e) => e.engine === engine && e.catalogId === catalogId)) {
          arr.push(entry);
        }
      }
    }
  }
  return index;
}

function findCatalogMatches(index, keys, engineFilter = null) {
  /** @type {Map<string, { engine: string, catalogId: string, model: object }>} */
  const found = new Map();
  for (const key of keys) {
    const hits = index.get(key) || [];
    for (const hit of hits) {
      if (engineFilter && hit.engine !== engineFilter) continue;
      found.set(`${hit.engine}\0${hit.catalogId}`, hit);
    }
  }
  return [...found.values()];
}

function applyCuratedAliases(benchId, index, engineFilter) {
  const curated = CURATED_BENCHMARK_TO_CATALOG[benchId] || CURATED_BENCHMARK_TO_CATALOG[benchId.toLowerCase()];
  if (!curated) return [];
  const keys = curated.flatMap((tail) => keysForBenchmarkId(tail));
  return findCatalogMatches(index, keys, engineFilter);
}

/**
 * Attach LB + Arena / OpenRouter-speed / models.dev metrics onto catalog models per engine.
 */
function enrichCatalogModels({
  catalogsByEngine,
  lbChrF,
  lbModelsById,
  arenaByKeys,
  modelsDevByKey,
  speedByKeys,
  matchIndex,
}) {
  /** @type {Record<string, Array<object>>} */
  const enriched = {};

  for (const [engine, models] of Object.entries(catalogsByEngine || {})) {
    enriched[engine] = [];
    for (const model of models || []) {
      if (!isTransrewrtWorkflowModel(model)) continue;
      const catalogId = String(model.id || "").trim();
      if (!catalogId) continue;

      let chrf = null;
      let lbCost = null;
      let arenaScore = null;
      let tokensPerSec = null;
      let ttftSec = null;
      let mdPriceIn = null;
      let mdPriceOut = null;
      let matchedLbId = null;
      let matchedArenaId = null;

      // Reverse lookup: which LB models map to this catalog id?
      for (const [lbId, stats] of lbChrF) {
        const hits = [
          ...findCatalogMatches(matchIndex, keysForBenchmarkId(lbId), engine),
          ...applyCuratedAliases(lbId, matchIndex, engine),
        ];
        if (hits.some((h) => h.catalogId === catalogId)) {
          if (chrf == null || stats.chrf > chrf) {
            chrf = stats.chrf;
            matchedLbId = lbId;
            const meta = lbModelsById.get(lbId);
            if (meta && Number.isFinite(Number(meta.cost))) lbCost = Number(meta.cost);
          }
        }
      }

      const catKeys = keysForCatalogModel(engine, model);
      for (const key of catKeys) {
        // Capability / intelligence: Arena Score (highest match wins).
        const arena = arenaByKeys.get(key);
        if (arena) {
          const rating = Number(arena.score);
          if (Number.isFinite(rating) && (arenaScore == null || rating > arenaScore)) {
            arenaScore = rating;
            matchedArenaId = arena.model;
          }
        }
        // Speed: OpenRouter endpoint performance.
        const sp = speedByKeys.get(key);
        if (sp) {
          if (sp.tokens_per_sec != null && tokensPerSec == null) tokensPerSec = sp.tokens_per_sec;
          if (sp.ttft_sec != null && ttftSec == null) ttftSec = sp.ttft_sec;
        }
        // Price fallback: models.dev (used only when catalog price is unusable).
        const md = modelsDevByKey.get(key);
        if (md) {
          if (md.input != null && mdPriceIn == null) mdPriceIn = md.input;
          if (md.output != null && mdPriceOut == null) mdPriceOut = md.output;
        }
      }

      const catalogBlended = catalogBlendedPricePer1M(model);
      // Provider catalogs sometimes report 0 for unpriced SKUs; prefer models.dev / LB when zero.
      const catalogPriceUsable = catalogBlended != null && catalogBlended > 0;
      const mdBlended =
        mdPriceIn != null || mdPriceOut != null
          ? (3 * (mdPriceIn ?? 0) + (mdPriceOut ?? 0)) / 4
          : null;
      const priceIn = catalogPriceUsable
        ? Number(model.pricing?.prompt) * 1e6
        : mdPriceIn != null
          ? mdPriceIn
          : catalogBlended != null
            ? Number(model.pricing?.prompt) * 1e6
            : null;
      const priceOut = catalogPriceUsable
        ? Number(model.pricing?.completion) * 1e6
        : mdPriceOut != null
          ? mdPriceOut
          : catalogBlended != null
            ? Number(model.pricing?.completion) * 1e6
            : null;
      let blended = null;
      if (catalogPriceUsable) blended = catalogBlended;
      else if (mdBlended != null && mdBlended > 0) blended = mdBlended;
      else if (lbCost != null && lbCost > 0) blended = lbCost;
      else if (catalogBlended != null) blended = catalogBlended;
      else if (mdBlended != null) blended = mdBlended;
      else if (lbCost != null) blended = lbCost;

      enriched[engine].push({
        catalogId,
        name: model.name || catalogId,
        chrf,
        arena_score: arenaScore,
        tokens_per_sec: tokensPerSec,
        ttft_sec: ttftSec,
        price_in: Number.isFinite(priceIn) ? priceIn : null,
        price_out: Number.isFinite(priceOut) ? priceOut : null,
        blended_price: Number.isFinite(blended) ? blended : null,
        zero_price: catalogIsZeroPrice(model),
        matched_lb_id: matchedLbId,
        matched_arena_id: matchedArenaId,
        has_any_score: chrf != null || arenaScore != null || tokensPerSec != null,
      });
    }
  }
  return enriched;
}

function scoreEnrichedList(list, profileName) {
  const cfg = PROFILE_CONFIG[profileName] || PROFILE_CONFIG.standard;
  let candidates = list.filter((m) => m.has_any_score || m.zero_price || m.blended_price != null);
  if (cfg.zeroPriceOnly) {
    candidates = candidates.filter((m) => m.zero_price);
  }

  const chrfVals = candidates.map((m) => m.chrf).filter((v) => v != null);
  const intelVals = candidates.map((m) => m.arena_score).filter((v) => v != null);
  const priceVals = candidates
    .map((m) => m.blended_price)
    .filter((v) => v != null && v >= 0);
  const tpsVals = candidates.map((m) => m.tokens_per_sec).filter((v) => v != null && v > 0);
  const ttftVals = candidates.map((m) => m.ttft_sec).filter((v) => v != null && v > 0);

  const maxChrF = chrfVals.length ? Math.max(...chrfVals) : 0;
  const maxIntel = intelVals.length ? Math.max(...intelVals) : 0;
  const maxTps = tpsVals.length ? Math.max(...tpsVals) : 0;
  const minTtft = ttftVals.length ? Math.min(...ttftVals) : 0;
  const maxTtft = ttftVals.length ? Math.max(...ttftVals) : 0;
  const maxPrice = priceVals.length ? Math.max(...priceVals) : 0;

  const qualityFloor =
    cfg.qualityFloorRatio > 0 && chrfVals.length
      ? qualityFloorFromBest(chrfVals, cfg.qualityFloorRatio)
      : 0;

  const preferChrF = profileName === "standard" || profileName === "advanced";

  const scored = candidates.map((m) => {
    // Missing ChrF: neutral for technical/free; slight penalty for translate-oriented profiles.
    const qualityN =
      m.chrf != null && maxChrF > 0
        ? clamp01(m.chrf / maxChrF)
        : preferChrF
          ? 0.35
          : 0.5;
    const intelN =
      m.arena_score != null && maxIntel > 0 ? clamp01(m.arena_score / maxIntel) : 0.45;
    let priceN = 0.5;
    if (m.blended_price != null && maxPrice > 0) {
      // lower price → higher score
      priceN = clamp01(1 - m.blended_price / (maxPrice + 1e-9));
      if (m.blended_price <= 0) priceN = 1;
    }
    let speedN = 0.5;
    const parts = [];
    if (m.tokens_per_sec != null && maxTps > 0 && m.tokens_per_sec > 0) {
      parts.push(clamp01(m.tokens_per_sec / maxTps));
    }
    if (m.ttft_sec != null && m.ttft_sec > 0 && maxTtft > minTtft) {
      parts.push(clamp01(1 - (m.ttft_sec - minTtft) / (maxTtft - minTtft + 1e-9)));
    } else if (m.ttft_sec != null && m.ttft_sec > 0 && minTtft > 0) {
      parts.push(clamp01(minTtft / m.ttft_sec));
    }
    if (parts.length) speedN = parts.reduce((a, b) => a + b, 0) / parts.length;

    const w = cfg.weights;
    const score =
      (w.quality || 0) * qualityN +
      (w.intelligence || 0) * intelN +
      (w.price || 0) * priceN +
      (w.speed || 0) * speedN;

    const belowFloor =
      qualityFloor > 0 &&
      ((m.chrf != null && m.chrf < qualityFloor) || (preferChrF && m.chrf == null));
    return { ...m, score, belowFloor, qualityN, intelN, priceN, speedN };
  });

  scored.sort((a, b) => {
    if (a.belowFloor !== b.belowFloor) return a.belowFloor ? 1 : -1;
    if (b.score !== a.score) return b.score - a.score;
    const pa = a.blended_price ?? Number.POSITIVE_INFINITY;
    const pb = b.blended_price ?? Number.POSITIVE_INFINITY;
    return pa - pb;
  });

  return scored;
}

function slimShortlistEntry(row) {
  return {
    model_id: row.catalogId,
    name: row.name,
    score: Math.round(row.score * 1000) / 1000,
    chrf: row.chrf != null ? Math.round(row.chrf * 1000) / 1000 : null,
    arena_score: row.arena_score != null ? Math.round(row.arena_score) : null,
    blended_price_per_1m: row.blended_price != null ? Math.round(row.blended_price * 1000) / 1000 : null,
    price_in: row.price_in != null ? Math.round(row.price_in * 1000) / 1000 : null,
    price_out: row.price_out != null ? Math.round(row.price_out * 1000) / 1000 : null,
    tokens_per_sec: row.tokens_per_sec != null ? Math.round(row.tokens_per_sec * 10) / 10 : null,
    ttft_sec: row.ttft_sec != null ? Math.round(row.ttft_sec * 1000) / 1000 : null,
  };
}

/** Full ranked row for deterministic replacement (not sent to the suggestion LLM). */
function slimRankedEntry(row) {
  return {
    ...slimShortlistEntry(row),
    below_floor: Boolean(row.belowFloor),
    zero_price: Boolean(row.zero_price),
  };
}

/**
 * Cheapest models.dev blended $/1M for a catalog or benchmark id.
 * @param {Record<string, { input?: number|null, output?: number|null }>|null|undefined} pricingByKey
 * @param {string} modelId
 * @returns {number|null}
 */
function blendedPriceFromModelsDev(pricingByKey, modelId) {
  const table = pricingByKey && typeof pricingByKey === "object" ? pricingByKey : {};
  let best = null;
  for (const key of keysForBenchmarkId(modelId)) {
    const md = table[key];
    if (!md) continue;
    const input = Number(md.input);
    const output = Number(md.output);
    if (!Number.isFinite(input) && !Number.isFinite(output)) continue;
    const blended =
      (3 * (Number.isFinite(input) ? input : 0) + (Number.isFinite(output) ? output : 0)) / 4;
    if (best == null || blended < best) best = blended;
  }
  return best;
}

/**
 * Fetch (or load cached) benchmark datasets.
 * @param {{ root: string, cachePath?: string, force?: boolean, log?: (msg: string) => void, uiLanguagesPath?: string }} opts
 */
async function ensureBenchmarkCache(opts) {
  const root = opts.root;
  const cachePath = opts.cachePath || defaultBenchmarkCachePath(root);
  const log = opts.log || (() => {});
  const force = Boolean(opts.force);

  if (!force && memoryCache && memoryCache.path === cachePath && isCacheFresh(memoryCache.data.lastUpdated)) {
    return memoryCache.data;
  }

  if (!force) {
    const disk = readDiskCache(cachePath);
    if (disk && isCacheFresh(disk.lastUpdated)) {
      memoryCache = { path: cachePath, data: disk, mtimeMs: Date.now() };
      log(`[benchmark-scores] Using disk cache (${disk.lastUpdated})`);
      return disk;
    }
  }

  if (refreshInFlight) return refreshInFlight;

  refreshInFlight = (async () => {
    log("[benchmark-scores] Fetching languagebench results…");
    const [lbResults, lbModels] = await Promise.all([
      fetchJson(LANGUAGEBENCH_RESULTS_URL, { timeoutMs: 180000 }),
      fetchJson(LANGUAGEBENCH_MODELS_URL, { timeoutMs: 60000 }),
    ]);
    if (!Array.isArray(lbResults)) throw new Error("languagebench results.json is not an array");
    if (!Array.isArray(lbModels)) throw new Error("languagebench models.json is not an array");

    log("[benchmark-scores] Fetching Arena Score + models.dev pricing…");
    const [arena, modelsDev] = await Promise.all([
      fetchArenaTextSnapshot(),
      fetchModelsDevPricing(),
    ]);
    if (arena.fetched) {
      log(
        `[benchmark-scores] Arena text/overall ${arena.snapshotDate || "undated"}: ${arena.models.length} models`,
      );
    } else {
      log(`[benchmark-scores] Arena fetch failed (continuing without Arena Score): ${arena.error}`);
    }
    if (modelsDev.fetched) {
      log(`[benchmark-scores] models.dev pricing: ${Object.keys(modelsDev.pricing).length} keys`);
    } else {
      log(`[benchmark-scores] models.dev fetch failed (continuing without price fallback): ${modelsDev.error}`);
    }

    const bcp47 = collectTargetBcp47(opts.uiLanguagesPath);
    const payload = {
      cacheVersion: BENCHMARK_CACHE_VERSION,
      lastUpdated: new Date().toISOString(),
      sources: {
        languagebench: {
          resultsUrl: LANGUAGEBENCH_RESULTS_URL,
          modelsUrl: LANGUAGEBENCH_MODELS_URL,
          attribution: "https://huggingface.co/spaces/fair-forward/languagebench",
          license: "CC-BY-SA-4.0",
        },
        arena: {
          url: ARENA_DATASET_URL,
          parquetPath: arena.parquetPath || null,
          leaderboard: arena.leaderboard || ARENA_LEADERBOARD,
          category: "overall",
          snapshotDate: arena.snapshotDate,
          attribution: ARENA_DATASET_URL,
          license: "CC-BY-4.0",
          fetched: arena.fetched,
          error: arena.error,
        },
        modelsDev: {
          url: MODELS_DEV_URL,
          attribution: "https://models.dev/",
          license: "MIT",
          fetched: modelsDev.fetched,
          error: modelsDev.error,
        },
        openRouterPerformance: {
          attribution: "https://openrouter.ai/",
          note: "per-model endpoint latency/throughput supplied by the caller (OpenRouter disk cache)",
        },
      },
      targetBcp47: bcp47,
      languagebench: {
        results: lbResults,
        models: lbModels,
      },
      arena: {
        models: arena.models,
      },
      modelsDev: {
        pricing: modelsDev.pricing,
      },
    };
    writeDiskCache(cachePath, payload);
    memoryCache = { path: cachePath, data: payload, mtimeMs: Date.now() };
    log(
      `[benchmark-scores] Cached languagebench (${lbResults.length} rows, ${lbModels.length} models)` +
        (arena.models.length ? ` + Arena (${arena.models.length} models)` : ""),
    );
    return payload;
  })()
    .catch((e) => {
      const disk = readDiskCache(cachePath);
      if (disk) {
        log(`[benchmark-scores] Fetch failed (${e.message}); using stale cache`);
        memoryCache = { path: cachePath, data: disk, mtimeMs: Date.now() };
        return disk;
      }
      throw e;
    })
    .finally(() => {
      refreshInFlight = null;
    });

  return refreshInFlight;
}

/**
 * Build per-engine shortlists for a preset.
 * @param {{
 *   root: string,
 *   preset: object,
 *   catalogsByEngine: Record<string, object[]>,
 *   cachePath?: string,
 *   uiLanguagesPath?: string,
 *   openRouterPerformance?: Record<string, object|null>,
 *   log?: (msg: string) => void,
 *   forceRefresh?: boolean,
 *   profile?: string,
 * }} opts
 */
async function buildBenchmarkShortlists(opts) {
  const profile =
    opts.profile && PROFILE_CONFIG[opts.profile] ? opts.profile : resolveProfile(opts.preset);
  const cfg = PROFILE_CONFIG[profile] || PROFILE_CONFIG.standard;

  let cache;
  try {
    cache = await ensureBenchmarkCache({
      root: opts.root,
      cachePath: opts.cachePath,
      uiLanguagesPath: opts.uiLanguagesPath,
      log: opts.log,
      force: opts.forceRefresh,
    });
  } catch (e) {
    return {
      ok: false,
      error: e.message || String(e),
      profile,
      shortlists: {},
      rankedByEngine: {},
      modelsDevPricing: {},
      cacheLastUpdated: null,
    };
  }

  const bcp47 = cache.targetBcp47 || collectTargetBcp47(opts.uiLanguagesPath);
  const lbChrF = aggregateLanguagebenchChrF(cache.languagebench.results, bcp47);
  /** @type {Map<string, object>} */
  const lbModelsById = new Map();
  for (const m of cache.languagebench.models || []) {
    if (m?.id) lbModelsById.set(m.id, m);
  }

  // Capability / intelligence: Arena Score (highest per normalised key wins).
  /** @type {Map<string, object>} */
  const arenaByKeys = new Map();
  for (const row of cache.arena?.models || []) {
    const rating = Number(row?.score);
    if (!Number.isFinite(rating)) continue;
    for (const key of keysForArenaModel(row)) {
      const prev = arenaByKeys.get(key);
      const prevScore = Number(prev?.score);
      if (!prev || !Number.isFinite(prevScore) || rating > prevScore) arenaByKeys.set(key, row);
    }
  }

  // Pricing fallback: models.dev by-key map.
  const modelsDevByKey = new Map(Object.entries(cache.modelsDev?.pricing || {}));

  // Speed: OpenRouter endpoint performance supplied by the caller.
  const speedByKeys = buildSpeedByKeys(opts.openRouterPerformance);

  const matchIndex = buildCatalogMatchIndex(opts.catalogsByEngine);
  const enriched = enrichCatalogModels({
    catalogsByEngine: opts.catalogsByEngine,
    lbChrF,
    lbModelsById,
    arenaByKeys,
    modelsDevByKey,
    speedByKeys,
    matchIndex,
  });

  /** @type {Record<string, object[]>} */
  const shortlists = {};
  /** @type {Record<string, object[]>} */
  const rankedByEngine = {};
  for (const [engine, list] of Object.entries(enriched)) {
    const scored = scoreEnrichedList(list, profile);
    rankedByEngine[engine] = scored.map(slimRankedEntry);
    const top = scored.slice(0, cfg.shortlistSize).map(slimShortlistEntry);
    if (top.length) shortlists[engine] = top;
  }

  return {
    ok: true,
    profile,
    timingCandidates: cfg.timingCandidates,
    shortlists,
    rankedByEngine,
    modelsDevPricing: cache.modelsDev?.pricing || {},
    cacheLastUpdated: cache.lastUpdated || null,
    targetBcp47: bcp47,
    sources: cache.sources || null,
  };
}

function formatShortlistEvidenceBlock(shortlistResult) {
  if (!shortlistResult?.ok) {
    return shortlistResult?.error
      ? `Benchmark evidence unavailable (${shortlistResult.error}). Use the full catalogs below.`
      : "";
  }
  const engines = Object.keys(shortlistResult.shortlists || {});
  if (!engines.length) {
    return "Benchmark evidence: no scored models matched the provider catalogs for this preset.";
  }
  const lines = [
    "Benchmark evidence (deterministic shortlist — prefer these over the full catalog):",
    `Profile: ${shortlistResult.profile}`,
    `Cache: ${shortlistResult.cacheLastUpdated || "unknown"}`,
    "Sources: languagebench ChrF (translation) + Arena Score (capability) + OpenRouter endpoint speed + models.dev/catalog pricing.",
    "When a provider has a shortlist below, model_id and fallback_model_id MUST be chosen from that shortlist.",
    JSON.stringify(shortlistResult.shortlists),
  ];
  return lines.join("\n");
}

/**
 * Enforce that suggestions stay inside the shortlist; substitute top ranks if needed.
 * @param {Record<string, object>} suggestions - from normalizeSuggestResponse
 * @param {Record<string, object[]>} shortlists
 * @returns {Record<string, object>}
 */
function enforceShortlistOnSuggestions(suggestions, shortlists) {
  if (!shortlists || typeof shortlists !== "object") return suggestions || {};
  const out = { ...(suggestions || {}) };
  for (const [engine, list] of Object.entries(shortlists)) {
    if (!Array.isArray(list) || list.length === 0) continue;
    const allowed = new Set(list.map((r) => r.model_id));
    const top = list[0];
    const second = list[1] && list[1].model_id !== top.model_id ? list[1] : list[2] || null;
    const row = out[engine];
    if (!row) {
      out[engine] = {
        model_id: top.model_id,
        reason: formatScoreReason(top, "benchmark shortlist #1 (no LLM pick)"),
        ...(second
          ? {
              fallback_id: second.model_id,
              fallback_reason: formatScoreReason(second, "benchmark shortlist #2"),
            }
          : {}),
      };
      continue;
    }
    let modelId = row.model_id;
    let reason = row.reason || "";
    if (!allowed.has(modelId)) {
      modelId = top.model_id;
      reason = formatScoreReason(top, "substituted: LLM pick outside shortlist");
    } else {
      const matched = list.find((r) => r.model_id === modelId);
      if (matched) {
        reason = appendScoreAnnotation(reason, matched);
      }
    }
    let fallbackId = row.fallback_id;
    let fallbackReason = row.fallback_reason || "";
    if (fallbackId && !allowed.has(fallbackId)) {
      fallbackId = second && second.model_id !== modelId ? second.model_id : null;
      fallbackReason = fallbackId
        ? formatScoreReason(
            list.find((r) => r.model_id === fallbackId) || second,
            "substituted: LLM fallback outside shortlist",
          )
        : "";
    } else if (fallbackId) {
      const matchedFb = list.find((r) => r.model_id === fallbackId);
      if (matchedFb) fallbackReason = appendScoreAnnotation(fallbackReason, matchedFb);
    } else if (second && second.model_id !== modelId) {
      fallbackId = second.model_id;
      fallbackReason = formatScoreReason(second, "benchmark shortlist #2");
    }
    out[engine] = {
      model_id: modelId,
      reason: String(reason || "").slice(0, 500),
      ...(fallbackId
        ? { fallback_id: fallbackId, fallback_reason: String(fallbackReason || "").slice(0, 500) }
        : {}),
    };
  }
  return out;
}

function formatScoreReason(entry, prefix) {
  if (!entry) return prefix || "";
  const bits = [];
  if (entry.chrf != null) bits.push(`ChrF ${entry.chrf}`);
  if (entry.arena_score != null) bits.push(`Arena Score ${entry.arena_score}`);
  if (entry.blended_price_per_1m != null) bits.push(`~$${entry.blended_price_per_1m}/1M blended`);
  if (entry.tokens_per_sec != null) bits.push(`${entry.tokens_per_sec} tok/s`);
  if (entry.ttft_sec != null) bits.push(`TTFT ${entry.ttft_sec}s`);
  const metrics = bits.length ? ` [${bits.join("; ")}]` : "";
  return `${prefix || "benchmark"}${metrics}`.slice(0, 500);
}

function appendScoreAnnotation(reason, entry) {
  const base = String(reason || "").trim();
  const ann = formatScoreReason(entry, "").trim();
  if (!ann) return base;
  if (!base) return ann.replace(/^\[/, "Scores [");
  if (base.includes("ChrF") || base.includes("Arena Score")) return base;
  return `${base} ${ann}`.slice(0, 500);
}

/**
 * After live timing, reorder shortlist and pick fastest two as primary/fallback.
 * @param {object[]} shortlist
 * @param {Array<{ model_id: string, ok: boolean, duration_ms: number | null, cost_usd?: number | null, error?: string | null }>} timingRows
 */
function applyLiveTimingToShortlist(shortlist, timingRows) {
  const list = Array.isArray(shortlist) ? [...shortlist] : [];
  const byId = new Map((timingRows || []).map((r) => [r.model_id, r]));
  const annotated = list.map((entry) => {
    const t = byId.get(entry.model_id);
    return {
      ...entry,
      live_duration_ms: t && t.ok ? t.duration_ms : null,
      live_ok: Boolean(t && t.ok),
      live_error: t && !t.ok ? t.error || "timing failed" : null,
      live_cost_usd: t?.cost_usd ?? null,
    };
  });
  const ok = annotated.filter((e) => e.live_ok && e.live_duration_ms != null);
  const failed = annotated.filter((e) => !e.live_ok);
  ok.sort((a, b) => {
    if (a.live_duration_ms !== b.live_duration_ms) return a.live_duration_ms - b.live_duration_ms;
    return (b.score || 0) - (a.score || 0);
  });
  const ordered = [...ok, ...failed];
  const primary = ok[0] || null;
  const fallback = ok.find((e) => e.model_id !== primary?.model_id) || null;
  return { ordered, primary, fallback };
}

function suggestionsFromTimingPicks(enginePicks) {
  /** @type {Record<string, object>} */
  const out = {};
  for (const [engine, pick] of Object.entries(enginePicks || {})) {
    if (!pick?.primary) continue;
    const p = pick.primary;
    const f = pick.fallback;
    const dur = p.live_duration_ms != null ? `${(p.live_duration_ms / 1000).toFixed(2)}s` : "?";
    out[engine] = {
      model_id: p.model_id,
      reason: formatScoreReason(p, `live timing #1 (${dur})`).slice(0, 500),
      ...(f
        ? {
            fallback_id: f.model_id,
            fallback_reason: formatScoreReason(
              f,
              `live timing #2 (${f.live_duration_ms != null ? (f.live_duration_ms / 1000).toFixed(2) + "s" : "?"})`,
            ).slice(0, 500),
          }
        : {}),
    };
  }
  return out;
}

module.exports = {
  BENCHMARK_CACHE_TTL_MS,
  BENCHMARK_CACHE_VERSION,
  defaultBenchmarkCachePath,
  ensureBenchmarkCache,
  buildBenchmarkShortlists,
  blendedPriceFromModelsDev,
  formatShortlistEvidenceBlock,
  enforceShortlistOnSuggestions,
  applyLiveTimingToShortlist,
  suggestionsFromTimingPicks,
  resolveProfile,
  aggregateLanguagebenchChrF,
  normalizeMatchKey,
  PROFILE_CONFIG,
};
