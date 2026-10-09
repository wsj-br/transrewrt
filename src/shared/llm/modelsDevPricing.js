/**
 * Per-provider model pricing from models.dev (USD per 1M input/output tokens).
 * Used to estimate call cost and model-list prices when the provider does not
 * return billed usage.cost. Loads a bundled snapshot, then refreshes from
 * https://models.dev/api.json (24h TTL). Fetch failures keep the snapshot.
 */

const snapshot = require("./modelsDevPricing.snapshot.json");

const MODELS_DEV_API_URL = "https://models.dev/api.json";
const PRICING_TTL_MS = 24 * 60 * 60 * 1000;
const REFRESH_TIMEOUT_MS = 8000;
const XAI_TICKS_PER_USD = 10_000_000_000;

/** Transrewrt engine id -> models.dev provider id. Engines omitted here use global match. */
const ENGINE_TO_PROVIDER = {
  openai: "openai",
  anthropic: "anthropic",
  google: "google",
  deepseek: "deepseek",
  groq: "groq",
  mistralai: "mistral",
  xai: "xai",
  cerebras: "cerebras",
  nvidia: "nvidia",
  alibaba: "alibaba",
};

/**
 * @typedef {{ input: number, output: number, canonical?: string, provider: string, modelId: string }} PricingRow
 * @typedef {{
 *   byProvider: Record<string, Record<string, PricingRow>>,
 *   byProviderLower: Record<string, Record<string, string>>,
 *   byProviderNorm: Record<string, Record<string, string[]>>,
 *   globalLower: Record<string, Array<{ provider: string, modelId: string }>>,
 *   globalNorm: Record<string, Array<{ provider: string, modelId: string }>>,
 * }} PricingIndex
 */

/** @type {typeof globalThis.fetch} */
let fetchImpl = globalThis.fetch.bind(globalThis);

/** @type {PricingIndex} */
let pricingIndex = emptyIndex();
/** 0 = snapshot only (not a successful live fetch). */
let fetchedAt = 0;
/** @type {Promise<void> | null} */
let inFlight = null;

pricingIndex = buildIndex(snapshot.models || {});

/**
 * Normalize a model id segment so minor formatting differences still match
 * (e.g. `Qwen3 14B` vs `Qwen 3 14B`, hyphen vs space). Case-insensitive; strips
 * whitespace, hyphens, and underscores; keeps "." so `2.5` does not merge with `25`.
 * @param {string} s
 * @returns {string}
 */
function normalizePricingSlugForMatch(s) {
  return String(s || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "")
    .replace(/[-_]/g, "");
}

/**
 * @param {unknown} ticks
 * @returns {number | null} USD, or null if ticks are missing/invalid
 */
function costUsdFromXaiTicks(ticks) {
  if (ticks == null || ticks === "") return null;
  const n = Number(ticks);
  if (!Number.isFinite(n)) return null;
  return n / XAI_TICKS_PER_USD;
}

/**
 * Compact models.dev `api.json` to `{ providerId: { modelId: { input, output, canonical? } } }`.
 * Rates stay USD per 1M tokens. Models with no `cost` object are omitted.
 * @param {Record<string, { models?: Record<string, { cost?: { input?: unknown, output?: unknown }, canonical_model_id?: string }> }>} api
 * @returns {Record<string, Record<string, { input: number, output: number, canonical?: string }>>}
 */
function pruneModelsDevApiJson(api) {
  const models = {};
  if (!api || typeof api !== "object") return models;
  for (const [providerId, provider] of Object.entries(api)) {
    const src = provider?.models;
    if (!src || typeof src !== "object") continue;
    const out = {};
    for (const [modelId, m] of Object.entries(src)) {
      const cost = m?.cost;
      if (!cost || typeof cost !== "object") continue;
      const input = parseFloat(cost.input);
      const output = parseFloat(cost.output);
      if (!Number.isFinite(input) && !Number.isFinite(output)) continue;
      /** @type {{ input: number, output: number, canonical?: string }} */
      const row = {
        input: Number.isFinite(input) ? input : 0,
        output: Number.isFinite(output) ? output : 0,
      };
      if (m.canonical_model_id) row.canonical = String(m.canonical_model_id);
      out[modelId] = row;
    }
    if (Object.keys(out).length > 0) models[providerId] = out;
  }
  return models;
}

/** @returns {PricingIndex} */
function emptyIndex() {
  return {
    byProvider: {},
    byProviderLower: {},
    byProviderNorm: {},
    globalLower: {},
    globalNorm: {},
  };
}

function slashSuffix(id) {
  const i = String(id).lastIndexOf("/");
  return i >= 0 ? String(id).slice(i + 1) : String(id);
}

function pushRef(map, key, ref) {
  if (!key) return;
  if (!map[key]) map[key] = [];
  map[key].push(ref);
}

/**
 * @param {Record<string, Record<string, { input: number, output: number, canonical?: string }>>} modelsByProvider
 * @returns {PricingIndex}
 */
function buildIndex(modelsByProvider) {
  const idx = emptyIndex();
  for (const [provider, models] of Object.entries(modelsByProvider || {})) {
    idx.byProvider[provider] = {};
    idx.byProviderLower[provider] = {};
    idx.byProviderNorm[provider] = {};
    for (const [modelId, m] of Object.entries(models || {})) {
      const input = Number(m?.input);
      const output = Number(m?.output);
      if (!Number.isFinite(input) && !Number.isFinite(output)) continue;
      /** @type {PricingRow} */
      const row = {
        input: Number.isFinite(input) ? input : 0,
        output: Number.isFinite(output) ? output : 0,
        provider,
        modelId,
      };
      if (m.canonical) row.canonical = String(m.canonical);
      idx.byProvider[provider][modelId] = row;
      const low = modelId.toLowerCase();
      idx.byProviderLower[provider][low] = modelId;
      const sufLow = slashSuffix(modelId).toLowerCase();
      if (sufLow !== low && !idx.byProviderLower[provider][sufLow]) {
        idx.byProviderLower[provider][sufLow] = modelId;
      }
      const norm = normalizePricingSlugForMatch(slashSuffix(modelId));
      const ref = { provider, modelId };
      if (norm) {
        if (!idx.byProviderNorm[provider][norm]) idx.byProviderNorm[provider][norm] = [];
        idx.byProviderNorm[provider][norm].push(modelId);
        pushRef(idx.globalNorm, norm, ref);
      }
      pushRef(idx.globalLower, low, ref);
      if (sufLow !== low) pushRef(idx.globalLower, sufLow, ref);
    }
  }
  return idx;
}

function indexHasRows(idx) {
  return Boolean(idx && Object.keys(idx.byProvider || {}).length > 0);
}

function rowOf(ref) {
  return pricingIndex.byProvider[ref.provider]?.[ref.modelId] || null;
}

/**
 * @param {string} engine
 * @param {Array<{ provider: string, modelId: string }>} candidates
 * @returns {PricingRow | null}
 */
function pickFromCandidates(engine, candidates) {
  if (!candidates || candidates.length === 0) return null;
  if (candidates.length === 1) return rowOf(candidates[0]);
  const mapped = ENGINE_TO_PROVIDER[engine];
  if (mapped) {
    const pref = candidates.filter((c) => c.provider === mapped);
    if (pref.length === 1) return rowOf(pref[0]);
    if (pref.length > 1) {
      pref.sort((a, b) => a.modelId.localeCompare(b.modelId));
      return rowOf(pref[0]);
    }
  }
  const lab = mapped || engine;
  const byCanon = candidates.filter((c) => {
    const row = rowOf(c);
    const canon = (row?.canonical || "").toLowerCase();
    return Boolean(lab) && canon.startsWith(`${String(lab).toLowerCase()}/`);
  });
  if (byCanon.length === 1) return rowOf(byCanon[0]);
  const pool = byCanon.length > 1 ? byCanon : candidates;
  const sorted = [...pool].sort((a, b) =>
    `${a.provider}/${a.modelId}`.localeCompare(`${b.provider}/${b.modelId}`),
  );
  return rowOf(sorted[0]);
}

/**
 * @param {string} provider
 * @param {string} innerModelId
 * @returns {PricingRow | null}
 */
function lookupInProvider(provider, innerModelId) {
  const models = pricingIndex.byProvider[provider];
  if (!models) return null;
  if (models[innerModelId]) return models[innerModelId];
  const lowerMap = pricingIndex.byProviderLower[provider] || {};
  const low = innerModelId.toLowerCase();
  const sufLow = slashSuffix(innerModelId).toLowerCase();
  const canonId = lowerMap[low] || lowerMap[sufLow];
  if (canonId && models[canonId]) return models[canonId];
  const norm = normalizePricingSlugForMatch(slashSuffix(innerModelId));
  const ids = (pricingIndex.byProviderNorm[provider] || {})[norm];
  if (!ids || ids.length === 0) return null;
  if (ids.length === 1) return models[ids[0]];
  const sorted = [...ids].sort();
  return models[sorted[0]] || null;
}

/**
 * @param {string} engine
 * @param {string} innerModelId
 * @returns {{ input: number, output: number } | null} USD per 1M tokens
 */
function lookupProviderModelRow(engine, innerModelId) {
  const id = String(innerModelId || "").trim();
  if (!id || !indexHasRows(pricingIndex)) return null;
  const mapped = ENGINE_TO_PROVIDER[engine];
  if (mapped) {
    const row = lookupInProvider(mapped, id);
    if (row) return { input: row.input, output: row.output };
  }
  const low = id.toLowerCase();
  const sufLow = slashSuffix(id).toLowerCase();
  let candidates = pricingIndex.globalLower[low] || [];
  if (candidates.length === 0 && sufLow !== low) {
    candidates = pricingIndex.globalLower[sufLow] || [];
  }
  if (candidates.length === 0) {
    const norm = normalizePricingSlugForMatch(slashSuffix(id));
    candidates = pricingIndex.globalNorm[norm] || [];
  }
  const picked = pickFromCandidates(engine, candidates);
  if (!picked) return null;
  return { input: picked.input, output: picked.output };
}

/**
 * @param {string} engine
 * @param {string} innerModelId
 * @param {{ prompt_tokens?: number, completion_tokens?: number }} usage
 * @returns {number} USD
 */
function estimateCostDollars(engine, innerModelId, usage) {
  const row = lookupProviderModelRow(engine, innerModelId);
  if (!row) return 0;
  const pt = usage?.prompt_tokens ?? 0;
  const ct = usage?.completion_tokens ?? 0;
  return (pt * row.input + ct * row.output) / 1e6;
}

async function doRefresh() {
  try {
    const res = await fetchImpl(MODELS_DEV_API_URL, {
      signal: AbortSignal.timeout(REFRESH_TIMEOUT_MS),
    });
    if (!res.ok) return;
    const json = await res.json();
    const models = pruneModelsDevApiJson(json);
    if (!Object.keys(models).length) return;
    pricingIndex = buildIndex(models);
    fetchedAt = Date.now();
  } catch {
    /* keep snapshot / last good index */
  }
}

/** Refresh from models.dev when the 24h TTL has elapsed. Failures keep the snapshot. */
async function refreshModelsDevPricingIfNeeded() {
  const now = Date.now();
  if (fetchedAt > 0 && now - fetchedAt < PRICING_TTL_MS && indexHasRows(pricingIndex)) {
    return;
  }
  if (inFlight) return inFlight;
  inFlight = doRefresh();
  try {
    await inFlight;
  } finally {
    inFlight = null;
  }
}

/**
 * Replace the in-memory index (tests). `fetchedAt` stays 0 so a refresh is attempted.
 * @param {Record<string, Record<string, { input: number, output: number, canonical?: string }>>} models
 */
function resetPricingIndexForTests(models) {
  pricingIndex = buildIndex(models || {});
  fetchedAt = 0;
  inFlight = null;
}

/** @param {typeof globalThis.fetch} fn */
function setFetchForTests(fn) {
  fetchImpl = fn || globalThis.fetch.bind(globalThis);
}

module.exports = {
  MODELS_DEV_API_URL,
  ENGINE_TO_PROVIDER,
  XAI_TICKS_PER_USD,
  pruneModelsDevApiJson,
  lookupProviderModelRow,
  estimateCostDollars,
  refreshModelsDevPricingIfNeeded,
  costUsdFromXaiTicks,
  normalizePricingSlugForMatch,
  resetPricingIndexForTests,
  setFetchForTests,
};
