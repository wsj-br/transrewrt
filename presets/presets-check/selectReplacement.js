/**
 * Deterministic replacement for an unavailable Easy-mode model id.
 * Order: same-family successor, benchmark shortlist, guarded fuzzy, unresolved.
 * No LLM call.
 */

const { sharedRequire, presetsSharedRequire } = require("./paths.js");
const { allowsScoreReplacement, roundMoney } = presetsSharedRequire("suggestModels.js");
const { isTransrewrtWorkflowModel } = sharedRequire("presetsProviderCatalog.js");
const {
  modelFamilyKey,
  normalizeForCompare,
  rankFuzzyCandidates,
} = require("./fuzzyMatch.js");

/**
 * Blended $/1M from catalog per-token pricing. Null when pricing is absent.
 * @param {object|null|undefined} model
 * @returns {number|null}
 */
function catalogBlendedPer1M(model) {
  const p = model?.pricing;
  if (!p || typeof p !== "object") return null;
  const prompt = Number(p.prompt);
  const completion = Number(p.completion);
  if (!Number.isFinite(prompt) && !Number.isFinite(completion)) return null;
  const inPer1M = Number.isFinite(prompt) ? prompt * 1e6 : 0;
  const outPer1M = Number.isFinite(completion) ? completion * 1e6 : inPer1M;
  return (3 * inPer1M + outPer1M) / 4;
}

function isFreeModel(model) {
  const id = String(model?.id || "");
  if (/:free$/i.test(id)) return true;
  const tail = id.slice(id.lastIndexOf("/") + 1);
  if (tail.toLowerCase() === "free") return true;
  const price = catalogBlendedPer1M(model);
  return price != null && price <= 0;
}

/**
 * @param {string} unavailableId
 * @param {string} candidateId
 * @param {string} engine
 * @param {{ aliasStem?: boolean }} [opts]
 */
function sameFamily(unavailableId, candidateId, engine, opts = {}) {
  const left = modelFamilyKey(normalizeForCompare(unavailableId, engine));
  const right = modelFamilyKey(normalizeForCompare(candidateId, engine));
  if (left && left === right) return true;
  if (!opts.aliasStem) return false;
  const stem = modelFamilyKey(
    normalizeForCompare(unavailableId, engine).replace(/-latest$/, ""),
  );
  if (!stem || !right) return false;
  if (right === stem) return true;
  return right.startsWith(stem) && /[-.]/.test(right.charAt(stem.length));
}

function knownCandidatePrice(model, priceForId) {
  const catalog = catalogBlendedPer1M(model);
  if (catalog != null && catalog > 0) return catalog;
  if (typeof priceForId === "function") {
    const ext = priceForId(model.id);
    if (ext != null && Number.isFinite(ext) && ext > 0) return ext;
  }
  return catalog;
}

function metricSnapshot(row) {
  if (!row || typeof row !== "object") return null;
  return {
    chrf: row.chrf ?? null,
    arena_score: row.arena_score ?? null,
    blended_price_per_1m: row.blended_price_per_1m ?? null,
    tokens_per_sec: row.tokens_per_sec ?? null,
    score: row.score ?? null,
  };
}

/**
 * @param {{
 *   engine: string,
 *   unavailableId: string,
 *   excludeIds?: Set<string>,
 *   ranked?: object[],
 *   shortlist?: object[],
 *   catalogModels?: object[],
 *   benchmarkOk?: boolean,
 *   useBenchmark?: boolean,
 *   successorOnly?: boolean,
 *   freeOnly?: boolean,
 *   maxPriceRatio?: number,
 *   minMatchScore?: number,
 *   priceForId?: (id: string) => number|null,
 * }} opts
 */
function selectSlotReplacement(opts) {
  const engine = opts.engine;
  const unavailableId = String(opts.unavailableId || "").trim();
  const exclude = opts.excludeIds instanceof Set ? opts.excludeIds : new Set();
  const ranked = Array.isArray(opts.ranked) ? opts.ranked : [];
  const shortlist = Array.isArray(opts.shortlist) ? opts.shortlist : [];
  const catalogModels = Array.isArray(opts.catalogModels) ? opts.catalogModels : [];
  const useBenchmark = opts.useBenchmark !== false;
  const benchmarkOk = Boolean(opts.benchmarkOk);
  const successorOnly = Boolean(opts.successorOnly);
  const freeOnly = Boolean(opts.freeOnly);
  const maxPriceRatio = typeof opts.maxPriceRatio === "number" ? opts.maxPriceRatio : 3;
  const minMatchScore = typeof opts.minMatchScore === "number" ? opts.minMatchScore : 0.55;
  const priceForId = typeof opts.priceForId === "function" ? opts.priceForId : null;
  const aliasStem = successorOnly;

  /** @type {Map<string, object>} */
  const catalogById = new Map();
  for (const model of catalogModels) {
    if (model && typeof model.id === "string" && model.id) catalogById.set(model.id, model);
  }
  const rankedById = new Map(ranked.map((row) => [row.model_id, row]));
  const oldPrice = priceForId ? priceForId(unavailableId) : null;

  function allowed(id) {
    if (!id || id === unavailableId || exclude.has(id)) return false;
    const model = catalogById.get(id);
    if (!model || !isTransrewrtWorkflowModel(model)) return false;
    if (freeOnly && !isFreeModel(model)) return false;
    if (oldPrice != null && oldPrice > 0 && maxPriceRatio > 0) {
      const price = knownCandidatePrice(model, priceForId);
      if (price != null && price > oldPrice * maxPriceRatio) return false;
    }
    return true;
  }

  /** @type {Array<{ id: string, source: string, score: number|null, metrics: object|null }>} */
  const ordered = [];
  const seen = new Set();

  function push(id, source, score, metrics) {
    if (!id || seen.has(id) || !allowed(id)) return;
    seen.add(id);
    ordered.push({
      id,
      source,
      score: score == null || !Number.isFinite(Number(score)) ? null : Number(score),
      metrics: metrics || null,
    });
  }

  if (useBenchmark && benchmarkOk) {
    for (const row of ranked) {
      if (!row || row.below_floor) continue;
      if (!sameFamily(unavailableId, row.model_id, engine, { aliasStem })) continue;
      push(row.model_id, "successor", row.score, metricSnapshot(row));
    }
  }

  if (!successorOnly && useBenchmark && benchmarkOk) {
    for (const row of shortlist) {
      if (!row) continue;
      const rankedRow = rankedById.get(row.model_id);
      if (rankedRow?.below_floor) continue;
      push(row.model_id, "shortlist", row.score, metricSnapshot(row));
    }
  }

  let bestScore = 0;
  if (!successorOnly && ordered.length === 0) {
    const fuzzy = rankFuzzyCandidates(engine, unavailableId, catalogModels, {
      minScore: minMatchScore,
    });
    bestScore = fuzzy.bestScore;
    for (const row of fuzzy.candidates) {
      push(row.id, "fuzzy", row.score, null);
    }
  }

  if (!ordered.length) {
    return {
      status: "unresolved",
      oldId: unavailableId,
      newId: null,
      source: null,
      score: null,
      bestScore,
      candidates: [],
    };
  }

  const top = ordered[0];
  return {
    status: "replacement",
    oldId: unavailableId,
    newId: top.id,
    source: top.source,
    score: top.score,
    bestScore: top.score ?? bestScore,
    candidates: ordered,
  };
}

/**
 * Pick primary and fallback together so the two slots stay distinct.
 * @param {{
 *   primaryId?: string|null,
 *   fallbackId?: string|null,
 *   primaryUnavailable?: boolean,
 *   fallbackUnavailable?: boolean,
 * }} opts
 */
function selectReplacementPair(opts) {
  const exclude = new Set();
  let primary = null;
  const primaryId = opts.primaryId ? String(opts.primaryId).trim() : "";
  const fallbackId = opts.fallbackId ? String(opts.fallbackId).trim() : "";

  if (primaryId) {
    if (!opts.primaryUnavailable) {
      primary = { status: "ok", oldId: primaryId, newId: null, source: null, score: null, candidates: [] };
      exclude.add(primaryId);
    } else {
      primary = selectSlotReplacement({ ...opts, unavailableId: primaryId, excludeIds: exclude });
      if (primary.newId) exclude.add(primary.newId);
    }
  }

  let fallback = null;
  if (fallbackId) {
    if (!opts.fallbackUnavailable) {
      fallback = { status: "ok", oldId: fallbackId, newId: null, source: null, score: null, candidates: [] };
    } else {
      fallback = selectSlotReplacement({ ...opts, unavailableId: fallbackId, excludeIds: exclude });
    }
  }

  return { primary, fallback };
}

/**
 * Walk candidates after an optional smoke test. Mutates `excludeIds` with the kept id.
 * @param {object|null} decision
 * @param {Set<string>} excludeIds
 * @param {((id: string) => Promise<boolean>)|null} verifyFn
 */
async function resolveVerifiedChoice(decision, excludeIds, verifyFn) {
  const exclude = excludeIds instanceof Set ? excludeIds : new Set();
  if (!decision || decision.status !== "replacement") {
    if (decision?.status === "ok" && decision.oldId) exclude.add(decision.oldId);
    return decision;
  }
  const viable = (decision.candidates || []).filter((c) => c && c.id && !exclude.has(c.id));
  if (!verifyFn) {
    const chosen = viable[0];
    if (!chosen) {
      return { ...decision, status: "unresolved", newId: null, source: null, score: null, verifyFailed: false };
    }
    exclude.add(chosen.id);
    return { ...decision, newId: chosen.id, source: chosen.source, score: chosen.score, verified: false };
  }
  for (const candidate of viable) {
    const ok = await verifyFn(candidate.id);
    if (ok) {
      exclude.add(candidate.id);
      return {
        ...decision,
        newId: candidate.id,
        source: candidate.source,
        score: candidate.score,
        verified: true,
      };
    }
  }
  return {
    ...decision,
    status: "unresolved",
    newId: null,
    source: null,
    score: null,
    verified: false,
    verifyFailed: true,
  };
}

function rowCandidate(row, source) {
  return {
    id: row.id,
    source: source || "ranked",
    score: row.index,
    metrics: {
      chrf: row.chrf ?? null,
      arena_score: row.arenaScore ?? null,
      blended_price_per_1m: row.blendedPerMTokens ?? null,
      score: row.index ?? null,
    },
  };
}

/**
 * Realign a preset's primary and fallback to the deterministic #1 / #2.
 * Does not delete a slot when nothing qualifies.
 * @param {object} opts
 */
function selectPolicyPair(opts) {
  const selected = Array.isArray(opts.selected) ? opts.selected : [];
  const ranked = Array.isArray(opts.ranked) ? opts.ranked : [];
  const byId = new Map(ranked.map((row) => [row.id, row]));
  const maxPrice = opts.suggestion ? opts.suggestion.maxPrice : null;
  const primaryId = opts.primaryId ? String(opts.primaryId).trim() : "";
  const fallbackId = opts.fallbackId ? String(opts.fallbackId).trim() : "";

  function priceOf(id) {
    const row = byId.get(id);
    return row ? roundMoney(row.blendedPerMTokens) : null;
  }

  function overCap(id) {
    if (maxPrice == null) return false;
    const price = priceOf(id);
    return price != null && price > roundMoney(maxPrice);
  }

  function decide(currentId, unavailable, exclude) {
    if (!currentId) return null;
    const current = byId.get(currentId) || null;
    const desired = selected.find((row) => row && row.id && !exclude.has(row.id)) || null;
    let kind;
    if (unavailable) kind = "unavailable";
    else if (desired && desired.id === currentId) {
      return {
        status: "ok",
        oldId: currentId,
        newId: null,
        source: null,
        score: current?.index ?? null,
        candidates: [],
      };
    } else if (overCap(currentId)) kind = "over_cap";
    else if (!desired) {
      return {
        status: "ok",
        oldId: currentId,
        newId: null,
        source: null,
        score: current?.index ?? null,
        candidates: [],
      };
    } else {
      kind = "upgrade";
    }

    const candidates = [];
    for (const row of selected) {
      if (!row || !row.id || row.id === currentId || exclude.has(row.id)) continue;
      if (!allowsScoreReplacement(current, row, kind)) continue;
      candidates.push(rowCandidate(row, kind));
    }
    if (kind === "upgrade" && !unavailable && !overCap(currentId)) {
      candidates.push({ id: currentId, source: "keep", score: current?.index ?? null, metrics: null });
    }
    if (!candidates.length || candidates[0].source === "keep") {
      if (kind === "upgrade" || candidates[0]?.source === "keep") {
        return {
          status: "ok",
          oldId: currentId,
          newId: null,
          source: null,
          score: current?.index ?? null,
          candidates: [],
        };
      }
      return {
        status: "unresolved",
        oldId: currentId,
        newId: null,
        source: null,
        score: null,
        candidates,
      };
    }
    const top = candidates[0];
    return {
      status: "replacement",
      oldId: currentId,
      newId: top.id,
      source: kind,
      score: top.score,
      candidates,
    };
  }

  const exclude = new Set();
  let primary = null;
  if (primaryId) {
    primary = decide(primaryId, Boolean(opts.primaryUnavailable), exclude);
    if (primary?.oldId) exclude.add(primary.oldId);
    if (primary?.newId) exclude.add(primary.newId);
  }
  let fallback = null;
  if (fallbackId) fallback = decide(fallbackId, Boolean(opts.fallbackUnavailable), exclude);
  return { primary, fallback };
}

module.exports = {
  catalogBlendedPer1M,
  isFreeModel,
  sameFamily,
  selectSlotReplacement,
  selectReplacementPair,
  selectPolicyPair,
  resolveVerifiedChoice,
};
