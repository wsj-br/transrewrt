/**
 * OpenRouter endpoint performance helpers (latency / throughput percentiles).
 */

function perfLatencyP90Ms(ep) {
  const p90 = ep?.latency_last_30m?.p90;
  if (p90 == null || Number.isNaN(Number(p90))) return null;
  return Number(p90);
}

/**
 * Best endpoint by lowest latency P90 (matches OpenRouter `sort: "latency"` intent).
 * @param {Array<object>} endpoints
 * @returns {object | null}
 */
function pickBestEndpointByLatencyP90(endpoints) {
  if (!Array.isArray(endpoints) || !endpoints.length) return null;
  const withP90 = endpoints.filter((ep) => perfLatencyP90Ms(ep) != null);
  if (!withP90.length) return null;
  return withP90.sort((a, b) => perfLatencyP90Ms(a) - perfLatencyP90Ms(b))[0];
}

/**
 * @param {Array<object>} endpoints
 * @returns {{ latency_p90_s: number | null, throughput_p90: number | null } | null}
 */
function summarizeEndpointPerformance(endpoints) {
  const ep = pickBestEndpointByLatencyP90(endpoints);
  if (!ep) return null;
  const latMs = perfLatencyP90Ms(ep);
  const tps = ep?.throughput_last_30m?.p90;
  return {
    latency_p90_s: latMs != null ? latMs / 1000 : null,
    throughput_p90: tps != null && !Number.isNaN(Number(tps)) ? Number(tps) : null,
  };
}

module.exports = {
  perfLatencyP90Ms,
  pickBestEndpointByLatencyP90,
  summarizeEndpointPerformance,
};
