/**
 * Quality-profile ranking of one provider's chat models.
 * Ported from ai-i18n-tools `rankProviderModels` for `suggest-models --quality`:
 * ChrF 0.45, Arena 0.35, price 0.20, quality floor 0.70 of the best ChrF.
 * There is no speed axis. Returned ChrF and Arena values are measured only.
 */

const {
  bcp47ForLocales,
  curatedCatalogKeys,
  isChatWorkflowModel,
  keysForArenaModel,
  keysForBenchmarkId,
  keysForCatalogModel,
  stemMatchKey,
} = require("./matchKeys");

const QUALITY_WEIGHTS = {
  chrf: 0.45,
  arena: 0.35,
  price: 0.2,
  qualityFloor: 0.7,
};

const MISSING_CHRF_STAND_IN = 0.35;
const MISSING_ARENA_STAND_IN = 0.45;

function clamp01(n) {
  if (!Number.isFinite(n)) return 0;
  return Math.max(0, Math.min(1, n));
}

function finiteOrNull(value) {
  return value != null && Number.isFinite(value) ? value : null;
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

/** Catalog USD per 1M tokens. A zero or missing rate is unpriced (`null`). */
function catalogRatesPerMillion(entry) {
  const pricing = entry.pricing;
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
  if (input === null && output === null) return null;
  return (3 * (input ?? 0) + (output ?? 0)) / 4;
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

function modelDisplayName(entry) {
  const candidate = entry.name ?? entry.display_name;
  return typeof candidate === "string" ? candidate.trim() : "";
}

/** Compare YYYY-MM-DD (or ISO prefix) to today's UTC calendar date. */
function isExpirationDatePast(expirationDate) {
  if (expirationDate === null || expirationDate === undefined || expirationDate === "") {
    return false;
  }
  const day = String(expirationDate).trim().slice(0, 10);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(day)) return false;
  const todayUtc = new Date().toISOString().slice(0, 10);
  return day < todayUtc;
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

/**
 * Rank chat, non-expired catalog models.
 * Missing ChrF sorts below the quality floor.
 * `chrf` and `arenaScore` are measured values only (never the stand-ins).
 *
 * @param {{
 *   provider: string,
 *   catalog: readonly object[],
 *   benchmarks: object,
 *   profile?: "quality" | "price",
 *   weights?: { chrf: number, arena: number, price: number, qualityFloor: number },
 *   locales: readonly string[],
 * }} opts
 */
function rankProviderModels(opts) {
  const weights = opts.weights ?? QUALITY_WEIGHTS;
  const allow = new Set(bcp47ForLocales(opts.locales));
  const chat = (opts.catalog || []).filter((entry) => {
    if (!entry || !String(entry.id || "").trim()) return false;
    if (isExpirationDatePast(entry.expiration_date)) return false;
    const name = modelDisplayName(entry);
    return isChatWorkflowModel({ id: entry.id, ...(name ? { name } : {}) });
  });
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
      if (agg.cost !== null && agg.cost > 0 && !lbCostById.has(catalogId)) {
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

  function stemmedValue(keys, byStem) {
    let best = null;
    for (const key of keys) {
      const found = byStem.get(stemMatchKey(key));
      if (found == null) continue;
      const value = typeof found === "number" ? found : found.score;
      if (best === null || value > best) best = value;
    }
    return best;
  }

  const devPricing = opts.benchmarks?.modelsDev?.pricing || {};
  const candidates = chat.map((entry) => {
    const name = modelDisplayName(entry);
    const keys = keysForCatalogModel(opts.provider, {
      id: entry.id,
      ...(name ? { name } : {}),
    });
    let arenaScore = null;
    for (const key of keys) {
      const arena = arenaByKey.get(key);
      if (arena && (arenaScore === null || arena.score > arenaScore)) arenaScore = arena.score;
    }
    if (arenaScore === null) arenaScore = stemmedValue(keys, arenaByStem);
    const catalog = catalogRatesPerMillion(entry);
    const dev = lookupModelsDev(devPricing, keys);
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
    } else if (dev && devBlended !== null && devBlended > 0) {
      input = dev.input;
      output = dev.output;
      blended = devBlended;
      priceSource = "models.dev";
    } else if (lbCost !== null && lbCost > 0) {
      blended = lbCost;
      priceSource = "languagebench";
    }
    return {
      id: entry.id,
      name,
      chrf: chrfById.get(entry.id) ?? stemmedValue(keys, chrfByStem),
      arenaScore,
      inputPerMTokens: input,
      outputPerMTokens: output,
      blended,
      priceSource,
    };
  });

  const chrfVals = candidates.map((row) => row.chrf).filter((v) => v !== null);
  const arenaVals = candidates.map((row) => row.arenaScore).filter((v) => v !== null);
  const priceVals = candidates.map((row) => row.blended).filter((v) => v !== null && v >= 0);
  const maxChrF = chrfVals.length > 0 ? Math.max(...chrfVals) : 0;
  const maxArena = arenaVals.length > 0 ? Math.max(...arenaVals) : 0;
  const maxPrice = priceVals.length > 0 ? Math.max(...priceVals) : 0;
  const floor = weights.qualityFloor > 0 && maxChrF > 0 ? maxChrF * weights.qualityFloor : 0;
  const unknownPrice = opts.profile === "price" ? 0 : 0.5;

  const scored = candidates.map((row) => {
    const qualityN =
      row.chrf !== null && maxChrF > 0 ? clamp01(row.chrf / maxChrF) : MISSING_CHRF_STAND_IN;
    const intelN =
      row.arenaScore !== null && maxArena > 0
        ? clamp01(row.arenaScore / maxArena)
        : MISSING_ARENA_STAND_IN;
    let priceN = unknownPrice;
    if (row.blended !== null && maxPrice > 0) {
      priceN = clamp01(1 - row.blended / (maxPrice + 1e-9));
      if (row.blended <= 0) priceN = 1;
    }
    const score = weights.chrf * qualityN + weights.arena * intelN + weights.price * priceN;
    const belowFloor = floor > 0 && (row.chrf === null || row.chrf < floor);
    return { row, score, belowFloor };
  });

  scored.sort((a, b) => {
    if (a.belowFloor !== b.belowFloor) return a.belowFloor ? 1 : -1;
    if (b.score !== a.score) return b.score - a.score;
    const pa = a.row.blended ?? Number.POSITIVE_INFINITY;
    const pb = b.row.blended ?? Number.POSITIVE_INFINITY;
    return pa - pb;
  });

  return scored.map((item, i) => ({
    id: item.row.id,
    name: item.row.name,
    rank: i + 1,
    index: Math.round(item.score * 1000) / 10,
    chrf: item.row.chrf,
    arenaScore: item.row.arenaScore,
    maxChrF: maxChrF > 0 ? maxChrF : null,
    maxArena: maxArena > 0 ? maxArena : null,
    inputPerMTokens: item.row.inputPerMTokens,
    outputPerMTokens: item.row.outputPerMTokens,
    belowFloor: item.belowFloor,
    priceSource: item.row.priceSource,
  }));
}

module.exports = {
  QUALITY_WEIGHTS,
  rankProviderModels,
};
