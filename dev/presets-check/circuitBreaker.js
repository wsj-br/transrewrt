/**
 * Stop a run that wants to rewrite too many model ids (truncated catalog, bad matcher).
 */

/**
 * @param {Array<{ engine: string }>} replacements
 * @param {{ maxPerRun?: number, maxPerEngine?: number }} [opts]
 */
function evaluateCircuitBreaker(replacements, opts = {}) {
  const list = Array.isArray(replacements) ? replacements : [];
  const maxPerRun = typeof opts.maxPerRun === "number" ? opts.maxPerRun : 6;
  const maxPerEngine = typeof opts.maxPerEngine === "number" ? opts.maxPerEngine : 3;
  if (maxPerRun > 0 && list.length > maxPerRun) {
    return { tripped: true, reason: "run", count: list.length, max: maxPerRun, engine: null };
  }
  /** @type {Record<string, number>} */
  const byEngine = {};
  for (const row of list) {
    const engine = row?.engine || "unknown";
    byEngine[engine] = (byEngine[engine] || 0) + 1;
    if (maxPerEngine > 0 && byEngine[engine] > maxPerEngine) {
      return {
        tripped: true,
        reason: "engine",
        engine,
        count: byEngine[engine],
        max: maxPerEngine,
      };
    }
  }
  return { tripped: false, reason: null, count: list.length, engine: null };
}

module.exports = { evaluateCircuitBreaker };
