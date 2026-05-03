/**
 * HISTORY_DISABLED: when set to true or 1 (case-insensitive), execution history is forced off.
 * Checked in Electron main, Node server, and merged into client config for UI.
 */

function isHistoryDisabledByEnv(env) {
  const e =
    env ||
    (typeof process !== "undefined" && process.env) ||
    {};
  const v = e.HISTORY_DISABLED;
  if (v == null || String(v).trim() === "") return false;
  const s = String(v).trim().toLowerCase();
  return s === "true" || s === "1";
}

/**
 * @param {object} config - merged settings sent to the renderer (must not mutate input).
 * @returns {object}
 */
function applyHistoryEnvToClientConfig(config) {
  if (!config || typeof config !== "object") return config;
  if (!isHistoryDisabledByEnv()) {
    return { ...config, history_disabled_by_administrator: false };
  }
  return {
    ...config,
    keep_execution_history: false,
    history_disabled_by_administrator: true,
  };
}

module.exports = {
  isHistoryDisabledByEnv,
  applyHistoryEnvToClientConfig,
};
