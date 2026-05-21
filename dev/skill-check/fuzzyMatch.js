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
  return s;
}

function vendorSegment(normalizedPath) {
  const slash = normalizedPath.indexOf("/");
  return slash >= 0 ? normalizedPath.slice(0, slash) : normalizedPath;
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
  return n > 0 ? Math.min(0.05 * n, 0.15) : 0;
}

function scoreCandidate(unavailableId, engine, candidateId) {
  const oldNorm = normalizeForCompare(unavailableId, engine);
  const newNorm = normalizeForCompare(candidateId, engine);
  let score = levenshteinRatio(oldNorm, newNorm);
  if (vendorSegment(oldNorm) && vendorSegment(oldNorm) === vendorSegment(newNorm)) {
    score += 0.15;
  }
  const oldLatest = oldNorm.includes("latest");
  const newLatest = newNorm.includes("latest");
  if (oldLatest && newLatest) score += 0.1;
  const oldFree = String(unavailableId).toLowerCase().includes(":free");
  const newFree = String(candidateId).toLowerCase().includes(":free");
  if (oldFree && newFree) score += 0.1;
  score += commonPrefixTokenScore(oldNorm, newNorm);
  return Math.min(score, 1);
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
  let bestScore = 0;

  for (const m of list) {
    if (!m || typeof m.id !== "string") continue;
    if (m.id === canonicalUnavailable) continue;
    if (!isTransrewrtWorkflowModel(m)) continue;

    const score = scoreCandidate(canonicalUnavailable, engine, m.id);
    if (score > bestScore) {
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
  levenshteinRatio,
};
