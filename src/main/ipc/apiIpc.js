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

  ipcMain.handle(
    "api:testConfiguration",
    async (
      _,
      { apiUrl, use_transrewrt_proxy, apiKeyOverride, keySeedOverride }
    ) => {
      const configCache = getConfigCache();
      const apiKey = (
        apiKeyOverride !== undefined && apiKeyOverride !== null
          ? String(apiKeyOverride)
          : configCache.api_key || ""
      ).trim();
      const keySeed = (
        keySeedOverride !== undefined && keySeedOverride !== null
          ? String(keySeedOverride)
          : configCache.key_seed || ""
      ).trim();
      const baseUrl = (apiUrl || "https://openrouter.ai/api/v1").trim().replace(
        /\/+$/,
        ""
      );

      if (!baseUrl) {
        return { status: "error", message: "API URL is required" };
      }
      if (!apiKey) {
        return { status: "error", message: "API Key is required" };
      }
      if (use_transrewrt_proxy && !keySeed) {
        return {
          status: "error",
          message: "Key Seed is required when using Transrewrt Proxy",
        };
      }

      let testUrl;
      if (use_transrewrt_proxy && keySeed) {
        const rollingKey = getRollingKeyForProxy(keySeed);
        testUrl = `${baseUrl}/${rollingKey}/api/v1/key`;
      } else {
        testUrl = `${baseUrl}/key`;
      }

      try {
        const response = await fetch(testUrl, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
            "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
            "X-Title": "Transrewrt",
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
          try {
            const errorData = JSON.parse(errorText);
            if (errorData.error?.message) errorMessage = errorData.error.message;
          } catch {
            /* ignore */
          }
          return { status: "error", message: errorMessage };
        }

        const data = await response.json();
        if (data && (data.data || data.id || response.ok)) {
          const keyInfo = data.data || data;
          const keyLabel = keyInfo.label || keyInfo.id || "API key";
          return {
            status: "success",
            message: `Success! Connected to API. Valid API key: ${keyLabel}`,
          };
        }
        return {
          status: "error",
          message:
            "Connection successful but unexpected response. Check your API key permissions.",
        };
      } catch (error) {
        return {
          status: "error",
          message: `Connection failed: ${error.message}`,
        };
      }
    }
  );
}

module.exports = { registerApiIpc };
