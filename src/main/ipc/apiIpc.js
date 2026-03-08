/**
 * IPC handlers for OpenRouter key info and proxy rolling key.
 */

const crypto = require("crypto");

const PROXY_WINDOW_SECONDS = 30;

function getRollingKeyForProxy(keySeed) {
  if (!keySeed || typeof keySeed !== "string") return "";
  const timeWindow = Math.floor(Date.now() / 1000 / PROXY_WINDOW_SECONDS);
  const hmac = crypto
    .createHmac("sha256", keySeed)
    .update(String(timeWindow))
    .digest("base64");
  const base64url = hmac.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  return base64url.substring(0, 16);
}

/**
 * Register API-related IPC handlers (key info, proxy).
 * @param {import("electron").IpcMain} ipcMain
 * @param {() => object} getConfigCache - Returns current config cache from main
 */
function registerApiIpc(ipcMain, getConfigCache) {
  ipcMain.handle("getOpenRouterKeyInfo", async () => {
    const configCache = getConfigCache();
    const apiKey = (configCache.api_key || "").trim();
    if (!apiKey) {
      throw new Error("API key not set");
    }
    const apiUrl = (configCache.api_url || "").trim().replace(/\/+$/, "");
    const keySeed = (configCache.key_seed || "").trim();
    const looksLikeProxy =
      apiUrl.length > 0 && !apiUrl.includes("openrouter.ai");
    const useProxy = looksLikeProxy && keySeed.length > 0;

    let keyUrl;
    if (useProxy) {
      const rollingKey = getRollingKeyForProxy(keySeed);
      keyUrl = `${apiUrl}/${rollingKey}/api/v1/key?_=${Date.now()}`;
    } else if (looksLikeProxy) {
      throw new Error(
        "Key seed is required when using the Transrewrt proxy for API key usage.",
      );
    } else {
      const baseUrl = apiUrl || "https://openrouter.ai/api/v1";
      if (!baseUrl.includes("openrouter.ai")) {
        throw new Error("Key info is only available for OpenRouter API.");
      }
      keyUrl = `${baseUrl}/key?_=${Date.now()}`;
    }

    try {
      const res = await fetch(keyUrl, {
        method: "GET",
        headers: { Authorization: `Bearer ${apiKey}` },
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
}

module.exports = { registerApiIpc };
