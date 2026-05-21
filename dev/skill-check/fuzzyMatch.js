/**
 * Fuzzy model id matching against a provider catalog.
 */

const { sharedRequire } = require("./paths.js");

const { isTransrewrtWorkflowModel } = sharedRequire("skillsProviderCatalog.js");

function levenshteinDistance(a, b) {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp = new Array(n + 1);
  for (let j = 0; j <= n; j++) dp[j] = j;
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = dp[j];
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + cost);
      prev = tmp;
    }
  }
  return dp[n];
}

function levenshteinRatio(a, b) {
  if (a === b) return 1;
  if (!a || !b) return 0;
  const dist = levenshteinDistance(a, b);
  return 1 - dist / Math.max(a.length, b.length);
}

function stripEnginePrefix(id, engine) {
  const prefix = `${engine}/`;
  if (id.startsWith(prefix)) return id.slice(prefix.length);
  if (engine === "openrouter" && id.startsWith("openrouter/")) {
    return id.slice("openrouter/".length);
  }
  return id;
}

/** Normalize for comparison only (not for output ids). */
function normalizeForCompare(id, engine) {
  let s = stripEnginePrefix(String(id || "").trim().toLowerCase(), engine);
  if (s.startsWith("~")) s = s.slice(1);
  s = s.replace(/:free$/i, "");
  s = s.replace(/-\d{4}-\d{2}-\d{2}$/, "");
  s = s.replace(/-\d{4,8}$/, "");
  s = s.replace(/\.{2,}/g, ".");
  return s;
}

function vendorSegment(normalizedPath) {
  const slash = normalizedPath.indexOf("/");
  return slash >= 0 ? normalizedPath.slice(0, slash) : normalizedPath;
}

/**
 * Model family before version suffix: poolside/laguna-m.1 → poolside/laguna-m
 * @param {string} normalizedPath
 */
function modelFamilyKey(normalizedPath) {
  const s = String(normalizedPath || "");
  const slash = s.lastIndexOf("/");
  const vendor = slash >= 0 ? s.slice(0, slash + 1) : "";
  const tail = slash >= 0 ? s.slice(slash + 1) : s;
  const dot = tail.lastIndexOf(".");
  const family = dot > 0 ? tail.slice(0, dot) : tail;
  return `${vendor}${family}`;
}

function commonPrefixTokenScore(a, b) {
  const ta = a.split(/[/:-]+/).filter(Boolean);
  const tb = b.split(/[/:-]+/).filter(Boolean);
  let n = 0;
  const len = Math.min(ta.length, tb.length);
  for (let i = 0; i < len; i++) {
    if (ta[i] !== tb[i]) break;
    n++;
  }
  return n > 0 ? Math.min(0.03 * n, 0.09) : 0;
}

/**
 * @returns {{ score: number, baseRatio: number }}
 */
function scoreCandidate(unavailableId, engine, candidateId) {
  const oldNorm = normalizeForCompare(unavailableId, engine);
  const newNorm = normalizeForCompare(candidateId, engine);
  const baseRatio = levenshteinRatio(oldNorm, newNorm);

  let bonus = 0;
  if (vendorSegment(oldNorm) && vendorSegment(oldNorm) === vendorSegment(newNorm)) {
    bonus += 0.03;
  }
  if (modelFamilyKey(oldNorm) === modelFamilyKey(newNorm)) {
    bonus += 0.35;
  }
  const oldLatest = oldNorm.includes("latest");
  const newLatest = newNorm.includes("latest");
  if (oldLatest && newLatest) bonus += 0.05;
  const oldFree = String(unavailableId).toLowerCase().includes(":free");
  const newFree = String(candidateId).toLowerCase().includes(":free");
  if (oldFree && newFree) bonus += 0.03;
  bonus += commonPrefixTokenScore(oldNorm, newNorm);

  return { score: baseRatio + bonus, baseRatio };
}

function isBetterCandidate(a, b) {
  if (!b) return true;
  if (a.score !== b.score) return a.score > b.score;
  if (a.baseRatio !== b.baseRatio) return a.baseRatio > b.baseRatio;
  return false;
}

/**
 * @param {string} engine
 * @param {string} unavailableId
 * @param {Array<{ id: string, displayId?: string, name?: string }>} catalogModels
 * @param {{ minScore?: number }} [opts]
 * @returns {{ replacement: string | null, score: number, bestScore: number }}
 */
function findFuzzyReplacement(engine, unavailableId, catalogModels, opts = {}) {
  const minScore = typeof opts.minScore === "number" ? opts.minScore : 0.55;
  const list = Array.isArray(catalogModels) ? catalogModels : [];
  const canonicalUnavailable = String(unavailableId || "").trim();

  let best = null;
  /** @type {{ score: number, baseRatio: number, id: string } | null} */
  let bestRank = null;
  let bestScore = 0;

  for (const m of list) {
    if (!m || typeof m.id !== "string") continue;
    if (m.id === canonicalUnavailable) continue;
    if (!isTransrewrtWorkflowModel(m)) continue;

    const { score, baseRatio } = scoreCandidate(canonicalUnavailable, engine, m.id);
    const rank = { score, baseRatio, id: m.id };
    if (isBetterCandidate(rank, bestRank)) {
      bestRank = rank;
      bestScore = score;
      best = m.id;
    }
  }

  if (best && bestScore >= minScore) {
    return { replacement: best, score: bestScore, bestScore };
  }
  return { replacement: null, score: 0, bestScore };
}

module.exports = {
  findFuzzyReplacement,
  normalizeForCompare,
  modelFamilyKey,
  levenshteinRatio,
  scoreCandidate,
};
