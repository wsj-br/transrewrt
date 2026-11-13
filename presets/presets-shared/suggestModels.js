/**
 * Deterministic Easy-mode model ranking, shared by the presets editor and presets-check.
 * The index matches ai-i18n-tools suggest-models: ChrF and Arena only, then alias
 * collapse and a price-quality Pareto frontier. Price is a cap and a sort, not part of the index.
 */

const path = require("path");
const { sharedRequire } = require("./paths.js");
const { isTransrewrtWorkflowModel } = sharedRequire("presetsProviderCatalog.js");
const {
  bcp47ForLocales,
  curatedCatalogKeys,
  isChatWorkflowModel,
  keysForArenaModel,
  keysForBenchmarkId,
  keysForCatalogModel,
  stemMatchKey,
} = sharedRequire("modelBenchmarks/matchKeys.js");
const { ensureBenchmarkCache } = sharedRequire("modelBenchmarks/benchmarkCache.js");

const MISSING_CHRF_STAND_IN = 0.35;
const MISSING_ARENA_STAND_IN = 0.45;

const PROFILE_DEFAULTS = {
  quality: { chrf: 0.55, arena: 0.45, qualityFloor: 0.7 },
  price: { chrf: 0.55, arena: 0.45, qualityFloor: 0.6 },
  free: { chrf: 0.55, arena: 0.45, qualityFloor: 0 },
};

/** A calendar date in the id, such as `2024-08-06`, `20241022`, or `preview-06-05`. */
const DATED_MODEL_ID = /(?:^|[^0-9])(?:\d{4}-\d{2}-\d{2}|\d{8}|\d{2}-\d{2})(?:[^0-9]|$)/;

function presetsBenchmarkCachePath(root) {
  return path.join(root, "presets-model-benchmarks.json");
}

async function loadPresetBenchmarks(cachePath, opts = {}) {
  return ensureBenchmarkCache(cachePath, { refresh: opts.refresh === true });
}

function clamp01(n) {
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.min(1, n));
}

function finiteOrNull(value) {
  return value != null && Number.isFinite(Number(value)) ? Number(value) : null;
}

function numberOr(value, fallback) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}

function roundIndex(score) {
  return Math.round(score * 1000) / 10;
}

function roundMoney(value) {
  if (value == null || !Number.isFinite(value)) return null;
  return Math.round(value * 1000) / 1000;
}

function perTokenToPerMillion(raw) {
  if (raw === undefined || raw === "") return null;
  const n = Number(raw);
  return Number.isFinite(n) ? n * 1_000_000 : null;
}

function listedPerMillion(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim() !== "") {
    const n = Number(value);
    return Number.isFinite(n) ? n : null;
  }
  return null;
}

/** Catalog USD per 1M tokens. Prompt and completion are per-token rates. Zero is unpriced. */
function catalogRatesPerMillion(entry) {
  const pricing = entry && entry.pricing;
  if (!pricing) return null;
  const perTokenInput = perTokenToPerMillion(pricing.prompt);
  const perTokenOutput = perTokenToPerMillion(pricing.completion);
  const hasPerToken = perTokenInput !== null || perTokenOutput !== null;
  const input = hasPerToken ? perTokenInput : listedPerMillion(pricing.input_per_million);
  const output = hasPerToken ? perTokenOutput : listedPerMillion(pricing.output_per_million);
  if ((input ?? 0) <= 0 && (output ?? 0) <= 0) return null;
  return { input, output };
}

function blendedPerMillion(input, output) {
  if (input == null && output == null) return null;
  return (3 * (input ?? 0) + (output ?? 0)) / 4;
}

function isFreeRoute(id) {
  const s = String(id || "").trim();
  if (!s) return false;
  if (/:free$/i.test(s)) return true;
  const tail = s.slice(s.lastIndexOf("/") + 1).toLowerCase();
  return tail === "free";
}

function isDatedModelId(id) {
  return DATED_MODEL_ID.test(String(id || ""));
}

function isExpirationDatePast(expirationDate) {
  if (expirationDate == null || expirationDate === "") return false;
  const day = String(expirationDate).trim().slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) return false;
  return day < new Date().toISOString().slice(0, 10);
}

function modelDisplayName(entry) {
  const candidate = entry && (entry.name ?? entry.display_name);
  return typeof candidate === "string" ? candidate.trim() : "";
}

/**
 * Policy stored on a preset. Missing fields use the profile defaults.
 * `maxPrice` null means no cap. Free forces a zero cap.
 * @param {object} preset
 */
function normalizeSuggestion(preset) {
  const raw = preset && preset.suggestion && typeof preset.suggestion === "object" ? preset.suggestion : {};
  const presetId = String(preset?.id || "");
  let profile = raw.profile;
  if (profile !== "quality" && profile !== "price" && profile !== "free") {
    profile = presetId === "free-router" ? "free" : "quality";
  }
  const base = PROFILE_DEFAULTS[profile];
  let chrf = numberOr(raw.chrf_weight, base.chrf);
  let arena = numberOr(raw.arena_weight, base.arena);
  if (chrf < 0) chrf = 0;
  if (arena < 0) arena = 0;
  const sum = chrf + arena;
  if (!(sum > 0)) {
    chrf = base.chrf;
    arena = base.arena;
  } else {
    chrf /= sum;
    arena /= sum;
  }
  let maxPrice;
  if (profile === "free") {
    maxPrice = 0;
  } else if (raw.max_price == null || raw.max_price === "") {
    maxPrice = null;
  } else {
    maxPrice = Number(raw.max_price);
    if (!Number.isFinite(maxPrice) || maxPrice < 0) maxPrice = null;
  }
  let minDelta = numberOr(raw.min_delta, 1);
  if (minDelta < 0) minDelta = 0;
  let qualityFloor = numberOr(raw.quality_floor, base.qualityFloor);
  if (!Number.isFinite(qualityFloor) || qualityFloor < 0) qualityFloor = base.qualityFloor;
  return { profile, maxPrice, minDelta, chrf, arena, qualityFloor };
}

function meanChrf(model, allow) {
  if (!model) return null;
  let sum = 0;
  let n = 0;
  for (const [code, bucket] of Object.entries(model.chrfByBcp47 || {})) {
    if (!allow.has(code) || !bucket || bucket.n <= 0) continue;
    sum += bucket.sum;
    n += bucket.n;
  }
  return n > 0 ? sum / n : null;
}

function lookupModelsDev(pricing, keys) {
  for (const key of keys) {
    const rate = pricing[key];
    if (!rate) continue;
    if (finiteOrNull(rate.input) === null && finiteOrNull(rate.output) === null) continue;
    return { input: finiteOrNull(rate.input), output: finiteOrNull(rate.output) };
  }
  return null;
}

function indexCatalog(provider, models) {
  const index = new Map();
  for (const model of models) {
    for (const key of keysForCatalogModel(provider, model)) {
      const list = index.get(key) ?? [];
      if (!list.includes(model.id)) list.push(model.id);
      index.set(key, list);
    }
  }
  return index;
}

function catalogIdsForBenchmark(benchId, index) {
  const ids = new Set();
  for (const key of [...keysForBenchmarkId(benchId), ...curatedCatalogKeys(benchId)]) {
    for (const id of index.get(key) ?? []) ids.add(id);
  }
  return [...ids];
}

function bestStem(keys, byStem) {
  let best = null;
  for (const key of keys) {
    const found = byStem.get(stemMatchKey(key));
    if (found == null) continue;
    const value = typeof found === "number" ? found : found.score;
    if (best === null || value > best) best = value;
  }
  return best;
}

function devKeys(keys) {
  const out = [];
  const seen = new Set();
  for (const key of keys) {
    for (const candidate of [key, stemMatchKey(key)]) {
      if (!candidate || seen.has(candidate)) continue;
      seen.add(candidate);
      out.push(candidate);
    }
  }
  return out;
}

/**
 * @param {object} suggestion normalizeSuggestion result
 * @param {object[]} catalog
 */
function eligibleCatalog(catalog, provider, suggestion) {
  const freeProfile = suggestion.profile === "free";
  return (catalog || []).filter((entry) => {
    if (!entry || !String(entry.id || "").trim()) return false;
    if (isExpirationDatePast(entry.expiration_date)) return false;
    const name = modelDisplayName(entry);
    const described = { id: entry.id, ...(name ? { name } : {}) };
    if (!isTransrewrtWorkflowModel(entry) || !isChatWorkflowModel(described)) return false;
    const free = isFreeRoute(entry.id);
    if (freeProfile) return free;
    return !free;
  });
}

/**
 * Rank one provider's chat catalog.
 * @param {{ provider: string, catalog: object[], benchmarks: object, suggestion: object, locales: string[] }} opts
 */
function rankEngineModels(opts) {
  const suggestion = opts.suggestion;
  const allow = new Set(bcp47ForLocales(opts.locales || []));
  const chat = eligibleCatalog(opts.catalog, opts.provider, suggestion);
  const index = indexCatalog(
    opts.provider,
    chat.map((entry) => {
      const name = modelDisplayName(entry);
      return { id: entry.id, ...(name ? { name } : {}) };
    }),
  );

  const chrfById = new Map();
  const chrfByStem = new Map();
  const lbCostById = new Map();
  const lbModels = opts.benchmarks?.languagebench?.models || {};
  for (const [benchId, agg] of Object.entries(lbModels)) {
    const chrf = meanChrf(agg, allow);
    const benchKeys = [...keysForBenchmarkId(benchId), ...curatedCatalogKeys(benchId)];
    if (chrf !== null) {
      for (const key of benchKeys) {
        const stem = stemMatchKey(key);
        if (!stem) continue;
        const prev = chrfByStem.get(stem);
        if (prev === undefined || chrf > prev) chrfByStem.set(stem, chrf);
      }
    }
    for (const catalogId of catalogIdsForBenchmark(benchId, index)) {
      if (chrf !== null) {
        const prev = chrfById.get(catalogId);
        if (prev === undefined || chrf > prev) chrfById.set(catalogId, chrf);
      }
      if (agg.cost != null && agg.cost > 0 && !lbCostById.has(catalogId)) {
        lbCostById.set(catalogId, agg.cost);
      }
    }
  }

  const arenaByKey = new Map();
  const arenaByStem = new Map();
  for (const row of opts.benchmarks?.arena?.models || []) {
    for (const key of keysForArenaModel(row)) {
      const prev = arenaByKey.get(key);
      if (!prev || row.score > prev.score) arenaByKey.set(key, { score: row.score });
      const stem = stemMatchKey(key);
      if (!stem) continue;
      const prevStem = arenaByStem.get(stem);
      if (!prevStem || row.score > prevStem.score) arenaByStem.set(stem, { score: row.score });
    }
  }

  const devPricing = opts.benchmarks?.modelsDev?.pricing || {};
  const candidates = chat.map((entry) => {
    const name = modelDisplayName(entry);
    const keys = keysForCatalogModel(opts.provider, { id: entry.id, ...(name ? { name } : {}) });
    let arenaScore = null;
    for (const key of keys) {
      const arena = arenaByKey.get(key);
      if (arena && (arenaScore === null || arena.score > arenaScore)) arenaScore = arena.score;
    }
    if (arenaScore === null) arenaScore = bestStem(keys, arenaByStem);
    const catalog = catalogRatesPerMillion(entry);
    const dev = lookupModelsDev(devPricing, devKeys(keys));
    const devBlended = dev ? blendedPerMillion(dev.input, dev.output) : null;
    const lbCost = lbCostById.get(entry.id) ?? null;
    let input = null;
    let output = null;
    let blended = null;
    let priceSource = null;
    if (catalog && ((catalog.input ?? 0) > 0 || (catalog.output ?? 0) > 0)) {
      input = catalog.input;
      output = catalog.output;
      blended = blendedPerMillion(input, output);
      priceSource = "catalog";
    } else if (dev && devBlended != null && devBlended > 0) {
      input = dev.input;
      output = dev.output;
      blended = devBlended;
      priceSource = "models.dev";
    } else if (lbCost != null && lbCost > 0) {
      blended = lbCost;
      priceSource = "languagebench";
    } else if (isFreeRoute(entry.id)) {
      input = 0;
      output = 0;
      blended = 0;
      priceSource = "free";
    }
    return {
      id: entry.id,
      name,
      chrf: chrfById.get(entry.id) ?? bestStem(keys, chrfByStem),
      arenaScore,
      inputPerMTokens: input,
      outputPerMTokens: output,
      blended,
      priceSource,
    };
  });

  const chrfVals = candidates.map((row) => row.chrf).filter((v) => v !== null);
  const arenaVals = candidates.map((row) => row.arenaScore).filter((v) => v !== null);
  const maxChrF = chrfVals.length > 0 ? Math.max(...chrfVals) : 0;
  const maxArena = arenaVals.length > 0 ? Math.max(...arenaVals) : 0;
  const floor = suggestion.qualityFloor > 0 && maxChrF > 0 ? maxChrF * suggestion.qualityFloor : 0;

  const scored = candidates.map((row) => {
    const qualityN = row.chrf != null && maxChrF > 0 ? clamp01(row.chrf / maxChrF) : MISSING_CHRF_STAND_IN;
    const intelN = row.arenaScore != null && maxArena > 0 ? clamp01(row.arenaScore / maxArena) : MISSING_ARENA_STAND_IN;
    const score = suggestion.chrf * qualityN + suggestion.arena * intelN;
    const belowFloor = floor > 0 && (row.chrf == null || row.chrf < floor);
    return {
      row,
      index: roundIndex(score),
      belowFloor,
      frontierLayer: null,
      dominatedBy: null,
      aliasOf: null,
    };
  });

  assignAliases(scored);
  assignFrontier(scored);
  scored.sort(suggestion.profile === "price" ? comparePriceOrder : compareQualityOrder);

  return scored.map((item, i) => ({
    id: item.row.id,
    name: item.row.name,
    rank: i + 1,
    index: item.index,
    chrf: item.row.chrf,
    arenaScore: item.row.arenaScore,
    inputPerMTokens: item.row.inputPerMTokens,
    outputPerMTokens: item.row.outputPerMTokens,
    blendedPerMTokens: item.row.blended,
    frontierLayer: item.frontierLayer,
    dominatedBy: item.dominatedBy,
    aliasOf: item.aliasOf,
    belowFloor: item.belowFloor,
    priceSource: item.row.priceSource,
  }));
}

function aliasKey(item) {
  const row = item.row;
  if (row.chrf == null || row.arenaScore == null || row.inputPerMTokens == null || row.outputPerMTokens == null) {
    return null;
  }
  return JSON.stringify([row.chrf, row.arenaScore, row.inputPerMTokens, row.outputPerMTokens]);
}

function compareById(a, b) {
  return String(a.row.id).localeCompare(String(b.row.id));
}

function compareAliasCanonical(a, b) {
  const aDated = isDatedModelId(a.row.id);
  const bDated = isDatedModelId(b.row.id);
  if (aDated !== bDated) return aDated ? 1 : -1;
  if (a.row.id.length !== b.row.id.length) return a.row.id.length - b.row.id.length;
  return compareById(a, b);
}

function assignAliases(scored) {
  const groups = new Map();
  for (const item of scored) {
    const key = aliasKey(item);
    if (key === null) continue;
    const list = groups.get(key) ?? [];
    list.push(item);
    groups.set(key, list);
  }
  for (const group of groups.values()) {
    if (group.length < 2) continue;
    group.sort(compareAliasCanonical);
    const canonical = group[0];
    if (!canonical) continue;
    for (const item of group.slice(1)) item.aliasOf = canonical.row.id;
  }
}

function blendedOf(item) {
  return item.row.blended ?? Number.POSITIVE_INFINITY;
}

function assignFrontier(scored) {
  const remaining = scored.filter(
    (item) => item.aliasOf === null && !item.belowFloor && item.row.blended != null && item.row.blended >= 0,
  );
  const byLayer = new Map();
  const leftover = [...remaining];
  let layer = 1;
  while (leftover.length > 0) {
    leftover.sort((a, b) => {
      const priceCmp = blendedOf(a) - blendedOf(b);
      if (priceCmp !== 0) return priceCmp;
      if (b.index !== a.index) return b.index - a.index;
      return compareById(a, b);
    });
    let best = Number.NEGATIVE_INFINITY;
    let bestPrice = Number.NaN;
    const front = [];
    for (const item of leftover) {
      const price = blendedOf(item);
      if (item.index > best) {
        front.push(item);
        best = item.index;
        bestPrice = price;
      } else if (item.index === best && price === bestPrice) {
        front.push(item);
      }
    }
    for (const item of front) item.frontierLayer = layer;
    byLayer.set(layer, front);
    const frontIds = new Set(front.map((item) => item.row.id));
    leftover.splice(0, leftover.length, ...leftover.filter((item) => !frontIds.has(item.row.id)));
    layer += 1;
  }

  const layer1 = byLayer.get(1) ?? [];
  for (const item of remaining) {
    if (item.frontierLayer == null || item.frontierLayer <= 1) {
      item.dominatedBy = null;
      continue;
    }
    let best = null;
    for (const cand of layer1) {
      if (cand.index < item.index || blendedOf(cand) > blendedOf(item)) continue;
      if (best === null || blendedOf(cand) < blendedOf(best) || (blendedOf(cand) === blendedOf(best) && compareById(cand, best) < 0)) {
        best = cand;
      }
    }
    item.dominatedBy = best?.row.id ?? null;
  }
}

function compareQualityOrder(a, b) {
  if (a.belowFloor !== b.belowFloor) return a.belowFloor ? 1 : -1;
  if (b.index !== a.index) return b.index - a.index;
  const priceCmp = blendedOf(a) - blendedOf(b);
  if (priceCmp !== 0) return priceCmp;
  return compareById(a, b);
}

function comparePriceOrder(a, b) {
  if (a.belowFloor !== b.belowFloor) return a.belowFloor ? 1 : -1;
  if (!a.belowFloor) {
    const aLayer = a.frontierLayer;
    const bLayer = b.frontierLayer;
    if ((aLayer === null) !== (bLayer === null)) return aLayer === null ? 1 : -1;
    if (aLayer !== null && bLayer !== null) {
      if (aLayer !== bLayer) return aLayer - bLayer;
      const priceCmp = blendedOf(a) - blendedOf(b);
      if (priceCmp !== 0) return priceCmp;
      if (b.index !== a.index) return b.index - a.index;
      return compareById(a, b);
    }
  }
  if (b.index !== a.index) return b.index - a.index;
  const priceCmp = blendedOf(a) - blendedOf(b);
  if (priceCmp !== 0) return priceCmp;
  return compareById(a, b);
}

function withinCap(row, maxPrice) {
  if (maxPrice == null) return true;
  const price = roundMoney(row.blendedPerMTokens);
  if (price == null) return false;
  return price <= roundMoney(maxPrice);
}

/**
 * Primary is the best non-alias model inside the cost cap.
 * Fallback is the next distinct model. The index gap prefers a more distant score,
 * but a provider with any other model still gets a fallback, even above the cap or
 * below the primary's index. One available model means primary only.
 * @param {object[]} models
 * @param {{ maxPrice?: number|null, minDelta?: number }} opts
 */
function selectSuggestRows(models, opts) {
  const distinct = (models || []).filter((row) => row && row.aliasOf == null);
  const capped = opts.maxPrice == null ? distinct : distinct.filter((row) => withinCap(row, opts.maxPrice));
  const primary = capped[0] || null;
  if (!primary) return [];
  const others = distinct.filter((row) => row.id !== primary.id);
  const minDelta = Number(opts.minDelta);
  let fallback = null;
  if (Number.isFinite(minDelta) && minDelta > 0 && Number.isFinite(primary.index)) {
    fallback =
      others.find((row) => {
        if (!Number.isFinite(row.index)) return false;
        const gap = Math.round(Math.abs(row.index - primary.index) * 10) / 10;
        return gap >= minDelta;
      }) || null;
  }
  if (!fallback) fallback = others[0] || null;
  return fallback ? [primary, fallback] : [primary];
}

function enginesOnPreset(preset) {
  const ids = new Set();
  for (const bag of [preset?.model_ids, preset?.fallback_ids]) {
    if (!bag || typeof bag !== "object") continue;
    for (const [engine, value] of Object.entries(bag)) {
      if (typeof value === "string" && value.trim()) ids.add(engine);
    }
  }
  if (preset?.id === "free-router") return [...ids].filter((engine) => engine === "openrouter");
  return [...ids];
}

function hasMeasuredScore(row) {
  return Boolean(row && (row.chrf != null || row.arenaScore != null));
}

/**
 * An unscored pick can fill a missing slot. It cannot replace a current id that has a score.
 * @param {object|null} current
 * @param {object|null} candidate
 * @param {"unavailable"|"over_cap"|"upgrade"} kind
 */
function allowsScoreReplacement(current, candidate, kind) {
  if (!candidate) return false;
  if (kind === "unavailable") return true;
  if (!hasMeasuredScore(candidate) && hasMeasuredScore(current)) return false;
  return true;
}

function formatRankReason(row, label) {
  if (!row) return "";
  const bits = [];
  if (Number.isFinite(row.index)) bits.push(`index ${row.index.toFixed(1)}`);
  if (row.chrf != null) bits.push(`ChrF ${Number(row.chrf).toFixed(3)}`);
  if (row.arenaScore != null) bits.push(`Arena ${Math.round(row.arenaScore)}`);
  if (row.blendedPerMTokens != null) bits.push(`$${Number(row.blendedPerMTokens).toFixed(3)}/1M`);
  if (row.frontierLayer != null) bits.push(`frontier ${row.frontierLayer}`);
  if (row.dominatedBy) bits.push(`beaten by ${row.dominatedBy}`);
  const metrics = bits.join("; ");
  const prefix = label ? `${label}: ` : "";
  return `${prefix}${metrics}`.slice(0, 500);
}

/**
 * Rank each engine the preset already lists.
 * @param {{ preset: object, catalogsByEngine: Record<string, object[]>, benchmarks: object, locales: string[] }} opts
 */
function suggestPresetModels(opts) {
  const suggestion = normalizeSuggestion(opts.preset);
  /** @type {Record<string, { primary: object|null, fallback: object|null, ranked: object[], selected: object[] }>} */
  const byEngine = {};
  for (const engine of enginesOnPreset(opts.preset)) {
    const catalog = opts.catalogsByEngine?.[engine] || [];
    if (!catalog.length) continue;
    const ranked = rankEngineModels({
      provider: engine,
      catalog,
      benchmarks: opts.benchmarks,
      suggestion,
      locales: opts.locales || [],
    });
    const selected = selectSuggestRows(ranked, suggestion);
    byEngine[engine] = {
      primary: selected[0] || null,
      fallback: selected[1] || null,
      ranked,
      selected,
    };
  }
  return { suggestion, byEngine };
}

module.exports = {
  PROFILE_DEFAULTS,
  presetsBenchmarkCachePath,
  loadPresetBenchmarks,
  normalizeSuggestion,
  rankEngineModels,
  selectSuggestRows,
  suggestPresetModels,
  enginesOnPreset,
  hasMeasuredScore,
  allowsScoreReplacement,
  formatRankReason,
  isFreeRoute,
  catalogRatesPerMillion,
  roundMoney,
};
