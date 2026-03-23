/**
 * IPC handlers for OpenRouter key info and API connectivity test.
 */

const path = require("path");
const {
  OPENROUTER_BASE,
  mergeKeys,
  CONFIG_KEY_BY_ENGINE,
  testProviderAuth,
} = require(path.join(__dirname, "..", "..", "shared", "llm"));

/**
 * Register API-related IPC handlers (key info, test).
 * @param {import("electron").IpcMain} ipcMain
 * @param {() => object} getConfigCache - Returns current config cache from main
 */
function registerApiIpc(ipcMain, getConfigCache) {
  ipcMain.handle("getOpenRouterKeyInfo", async () => {
    const configCache = getConfigCache();
    const merged = mergeKeys(configCache);
    const apiKey = (merged.openrouter_api_key || "").trim();
    if (!apiKey) {
      throw new Error("OpenRouter API key not set");
    }
    const keyUrl = `${OPENROUTER_BASE}/key?_=${Date.now()}`;
    try {
      const res = await fetch(keyUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
          "X-Title": "Transrewrt",
        },
        cache: "no-store",
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || `HTTP ${res.status}`);
      }
      return data;
    } catch (err) {
      console.error("[IPC] getOpenRouterKeyInfo failed:", err.message);
      throw err;
    }
  });

  ipcMain.handle(
    "api:testConfiguration",
    async (_, { openrouterApiKeyOverride } = {}) => {
      const configCache = getConfigCache();
      const merged = mergeKeys(configCache);
      const value =
        openrouterApiKeyOverride !== undefined && openrouterApiKeyOverride !== null
          ? String(openrouterApiKeyOverride)
          : merged.openrouter_api_key || "";
      const result = await testProviderAuth("openrouter", value);
      return {
        status: result.ok ? "success" : "error",
        message: result.message,
      };
    },
  );

  ipcMain.handle("api:testProvider", async (_, { provider, overrideValue } = {}) => {
    const normalizedProvider = String(provider || "").trim();
    const configCache = getConfigCache();
    const merged = mergeKeys(configCache);
    const configField = CONFIG_KEY_BY_ENGINE[normalizedProvider];
    const value =
      overrideValue !== undefined && overrideValue !== null
        ? String(overrideValue)
        : configField
          ? merged[configField]
          : "";
    const result = await testProviderAuth(normalizedProvider, value);
    return {
      provider: result.provider,
      status: result.ok ? "success" : "error",
      message: result.message,
    };
  });
}

module.exports = { registerApiIpc };
