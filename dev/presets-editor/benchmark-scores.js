/**
 * Deterministic benchmark scoring for Easy-mode AI Suggest.
 * Sources: languagebench (fair-forward, keyless) + Artificial Analysis Data API
 * (`ARTIFICIAL_INTELLIGENCE_API_KEY`) + provider-catalog pricing.
 *
 * Attribution: https://huggingface.co/spaces/fair-forward/languagebench
 * Attribution: https://artificialanalysis.ai/
 */

const fs = require("fs");
const path = require("path");
const { isTransrewrtWorkflowModel } = require("../../src/shared/presetsProviderCatalog.js");

const BENCHMARK_CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;

const LANGUAGEBENCH_RESULTS_URL =
  "https://huggingface.co/spaces/fair-forward/languagebench/resolve/main/results/results.json";
const LANGUAGEBENCH_MODELS_URL =
  "https://huggingface.co/spaces/fair-forward/languagebench/resolve/main/results/models.json";
const AA_MODELS_URL = "https://artificialanalysis.ai/api/v2/data/llms/models";

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
  // drop common AA/LB suffixes that don't appear in catalog ids
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

function keysForAaModel(aa) {
  const keys = new Set();
  const add = (v) => {
    const k = normalizeMatchKey(v);
    if (k) keys.add(k);
  };
  const slug = String(aa?.slug || "");
  const name = String(aa?.name || "");
  const creator = String(aa?.model_creator?.slug || aa?.model_creator?.name || "").toLowerCase();
  add(slug);
  add(name);
  if (creator && slug) add(`${creator}/${slug}`);
  // gpt-5-5 → gpt-5.5 style via normalize (dashes already)
  return [...keys];
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
 * Attach LB + AA metrics onto catalog models per engine.
 */
function enrichCatalogModels({ catalogsByEngine, lbChrF, lbModelsById, aaByKeys, matchIndex }) {
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
      let intelligence = null;
      let tokensPerSec = null;
      let ttftSec = null;
      let aaPriceIn = null;
      let aaPriceOut = null;
      let aaBlended = null;
      let matchedLbId = null;
      let matchedAaSlug = null;

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
        const aa = aaByKeys.get(key);
        if (!aa) continue;
        const intel = Number(aa.evaluations?.artificial_analysis_intelligence_index);
        if (Number.isFinite(intel) && (intelligence == null || intel > intelligence)) {
          intelligence = intel;
          matchedAaSlug = aa.slug;
          const tps = Number(aa.median_output_tokens_per_second);
          const ttft = Number(aa.median_time_to_first_token_seconds);
          tokensPerSec = Number.isFinite(tps) ? tps : tokensPerSec;
          ttftSec = Number.isFinite(ttft) ? ttft : ttftSec;
          const pin = Number(aa.pricing?.price_1m_input_tokens);
          const pout = Number(aa.pricing?.price_1m_output_tokens);
          const blend = Number(aa.pricing?.price_1m_blended_3_to_1);
          aaPriceIn = Number.isFinite(pin) ? pin : aaPriceIn;
          aaPriceOut = Number.isFinite(pout) ? pout : aaPriceOut;
          aaBlended = Number.isFinite(blend) ? blend : aaBlended;
        }
      }

      const catalogBlended = catalogBlendedPricePer1M(model);
      // Provider catalogs sometimes report 0 for unpriced SKUs; prefer AA/LB when catalog is zero.
      const catalogPriceUsable = catalogBlended != null && catalogBlended > 0;
      const priceIn = catalogPriceUsable
        ? Number(model.pricing?.prompt) * 1e6
        : aaPriceIn != null
          ? aaPriceIn
          : catalogBlended != null
            ? Number(model.pricing?.prompt) * 1e6
            : null;
      const priceOut = catalogPriceUsable
        ? Number(model.pricing?.completion) * 1e6
        : aaPriceOut != null
          ? aaPriceOut
          : catalogBlended != null
            ? Number(model.pricing?.completion) * 1e6
            : null;
      let blended = null;
      if (catalogPriceUsable) blended = catalogBlended;
      else if (aaBlended != null && aaBlended > 0) blended = aaBlended;
      else if (lbCost != null && lbCost > 0) blended = lbCost;
      else if (catalogBlended != null) blended = catalogBlended;
      else if (aaBlended != null) blended = aaBlended;
      else if (lbCost != null) blended = lbCost;

      enriched[engine].push({
        catalogId,
        name: model.name || catalogId,
        chrf,
        intelligence,
        tokens_per_sec: tokensPerSec,
        ttft_sec: ttftSec,
        price_in: Number.isFinite(priceIn) ? priceIn : null,
        price_out: Number.isFinite(priceOut) ? priceOut : null,
        blended_price: Number.isFinite(blended) ? blended : null,
        zero_price: catalogIsZeroPrice(model),
        matched_lb_id: matchedLbId,
        matched_aa_slug: matchedAaSlug,
        has_any_score: chrf != null || intelligence != null || tokensPerSec != null,
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
  const intelVals = candidates.map((m) => m.intelligence).filter((v) => v != null);
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
      m.intelligence != null && maxIntel > 0 ? clamp01(m.intelligence / maxIntel) : 0.45;
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
    intelligence: row.intelligence != null ? Math.round(row.intelligence * 10) / 10 : null,
    blended_price_per_1m: row.blended_price != null ? Math.round(row.blended_price * 1000) / 1000 : null,
    price_in: row.price_in != null ? Math.round(row.price_in * 1000) / 1000 : null,
    price_out: row.price_out != null ? Math.round(row.price_out * 1000) / 1000 : null,
    tokens_per_sec: row.tokens_per_sec != null ? Math.round(row.tokens_per_sec * 10) / 10 : null,
    ttft_sec: row.ttft_sec != null ? Math.round(row.ttft_sec * 1000) / 1000 : null,
  };
}

/**
 * Fetch (or load cached) benchmark datasets.
 * @param {{ root: string, cachePath?: string, force?: boolean, log?: (msg: string) => void, aaApiKey?: string, uiLanguagesPath?: string }} opts
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

    let aaModels = [];
    let aaError = null;
    const aaKey = String(opts.aaApiKey || process.env.ARTIFICIAL_INTELLIGENCE_API_KEY || "").trim();
    if (aaKey) {
      try {
        log("[benchmark-scores] Fetching Artificial Analysis models…");
        const aaJson = await fetchJson(AA_MODELS_URL, {
          headers: { "x-api-key": aaKey },
          timeoutMs: 60000,
        });
        aaModels = Array.isArray(aaJson?.data) ? aaJson.data : [];
      } catch (e) {
        aaError = e.message || String(e);
        log(`[benchmark-scores] Artificial Analysis fetch failed (continuing without): ${aaError}`);
      }
    } else {
      log("[benchmark-scores] ARTIFICIAL_INTELLIGENCE_API_KEY unset — skipping AA");
    }

    const bcp47 = collectTargetBcp47(opts.uiLanguagesPath);
    const payload = {
      lastUpdated: new Date().toISOString(),
      sources: {
        languagebench: {
          resultsUrl: LANGUAGEBENCH_RESULTS_URL,
          modelsUrl: LANGUAGEBENCH_MODELS_URL,
          attribution: "https://huggingface.co/spaces/fair-forward/languagebench",
        },
        artificialAnalysis: {
          url: AA_MODELS_URL,
          attribution: "https://artificialanalysis.ai/",
          fetched: Boolean(aaModels.length),
          error: aaError,
        },
      },
      targetBcp47: bcp47,
      languagebench: {
        results: lbResults,
        models: lbModels,
      },
      artificialAnalysis: {
        models: aaModels,
      },
    };
    writeDiskCache(cachePath, payload);
    memoryCache = { path: cachePath, data: payload, mtimeMs: Date.now() };
    log(
      `[benchmark-scores] Cached languagebench (${lbResults.length} rows, ${lbModels.length} models)` +
        (aaModels.length ? ` + AA (${aaModels.length} models)` : ""),
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
 *   aaApiKey?: string,
 *   log?: (msg: string) => void,
 *   forceRefresh?: boolean,
 * }} opts
 */
async function buildBenchmarkShortlists(opts) {
  const profile = resolveProfile(opts.preset);
  const cfg = PROFILE_CONFIG[profile] || PROFILE_CONFIG.standard;

  let cache;
  try {
    cache = await ensureBenchmarkCache({
      root: opts.root,
      cachePath: opts.cachePath,
      uiLanguagesPath: opts.uiLanguagesPath,
      aaApiKey: opts.aaApiKey,
      log: opts.log,
      force: opts.forceRefresh,
    });
  } catch (e) {
    return {
      ok: false,
      error: e.message || String(e),
      profile,
      shortlists: {},
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

  /** @type {Map<string, object>} */
  const aaByKeys = new Map();
  for (const aa of cache.artificialAnalysis?.models || []) {
    for (const key of keysForAaModel(aa)) {
      const prev = aaByKeys.get(key);
      const intel = Number(aa.evaluations?.artificial_analysis_intelligence_index);
      const prevIntel = Number(prev?.evaluations?.artificial_analysis_intelligence_index);
      if (!prev || (Number.isFinite(intel) && (!Number.isFinite(prevIntel) || intel > prevIntel))) {
        aaByKeys.set(key, aa);
      }
    }
  }

  const matchIndex = buildCatalogMatchIndex(opts.catalogsByEngine);
  const enriched = enrichCatalogModels({
    catalogsByEngine: opts.catalogsByEngine,
    lbChrF,
    lbModelsById,
    aaByKeys,
    matchIndex,
  });

  /** @type {Record<string, object[]>} */
  const shortlists = {};
  for (const [engine, list] of Object.entries(enriched)) {
    const scored = scoreEnrichedList(list, profile);
    const top = scored.slice(0, cfg.shortlistSize).map(slimShortlistEntry);
    if (top.length) shortlists[engine] = top;
  }

  return {
    ok: true,
    profile,
    timingCandidates: cfg.timingCandidates,
    shortlists,
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
    "Sources: languagebench ChrF (translation) + Artificial Analysis (intelligence/speed) + catalog pricing.",
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
  if (entry.intelligence != null) bits.push(`AA intel ${entry.intelligence}`);
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
  if (base.includes("ChrF") || base.includes("AA intel")) return base;
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
  defaultBenchmarkCachePath,
  ensureBenchmarkCache,
  buildBenchmarkShortlists,
  formatShortlistEvidenceBlock,
  enforceShortlistOnSuggestions,
  applyLiveTimingToShortlist,
  suggestionsFromTimingPicks,
  resolveProfile,
  aggregateLanguagebenchChrF,
  normalizeMatchKey,
  PROFILE_CONFIG,
};
