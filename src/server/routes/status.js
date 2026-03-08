/**
 * Routes: GET /api/status, /api/build-info, /api/key
 */

const fs = require("fs");
const express = require("express");

/**
 * @param {function} readConfig
 * @param {function} getProxyHeaders
 * @param {function} getProxyBaseUrl
 * @param {string} buildTimestampPath
 * @param {string} envApiKey
 * @param {object} log
 */
module.exports = function createStatusRouter(
  readConfig,
  getProxyHeaders,
  getProxyBaseUrl,
  buildTimestampPath,
  envApiKey,
  log,
) {
  const router = express.Router();

  router.get("/status", async (req, res) => {
    try {
      const apiKey = envApiKey || readConfig().api_key || "";
      const apiKeySet = !!(apiKey && String(apiKey).trim());
      if (!apiKeySet) {
        return res.json({
          apiKeySet: false,
          apiKeyValid: false,
          message: "API_KEY is not set.",
        });
      }
      const baseUrl = getProxyBaseUrl();
      const testUrl = `${baseUrl}/models?limit=1`;
      const headers = getProxyHeaders();
      const keyRes = await fetch(testUrl, { method: "GET", headers });
      const apiKeyValid = keyRes.ok;
      res.json({
        apiKeySet: true,
        apiKeyValid,
        message: apiKeyValid
          ? "API key is valid."
          : keyRes.status === 401
            ? "API key is invalid or expired."
            : `API key check failed (HTTP ${keyRes.status}).`,
      });
    } catch (err) {
      log.error("[API] GET /api/status - Error: " + err.message, { stack: err.stack });
      res.json({
        apiKeySet: !!(envApiKey || readConfig().api_key || "")?.trim(),
        apiKeyValid: false,
        message: err.message || "Failed to verify API key.",
      });
    }
  });

  router.get("/build-info", (req, res) => {
    try {
      if (!fs.existsSync(buildTimestampPath)) {
        return res.json({ buildTimestamp: null });
      }
      const content = fs.readFileSync(buildTimestampPath, "utf8").trim();
      res.json({ buildTimestamp: content || null });
    } catch (err) {
      log.error("[API] GET /api/build-info - Error: " + err.message, { stack: err.stack });
      res.json({ buildTimestamp: null });
    }
  });

  router.get("/key", async (req, res) => {
    try {
      const baseUrl = getProxyBaseUrl();
      if (!baseUrl.includes("openrouter.ai")) {
        return res
          .status(400)
          .json({ error: "Key info is only available for OpenRouter API." });
      }
      res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
      res.setHeader("Pragma", "no-cache");
      const keyUrl = `${baseUrl}/key?_=${Date.now()}`;
      const headers = getProxyHeaders();
      const keyRes = await fetch(keyUrl, { method: "GET", headers });
      const data = await keyRes.json().catch(() => ({}));
      if (!keyRes.ok) return res.status(keyRes.status).json(data);
      log.info("API key usage", { status: keyRes.status, data });
      return res.json(data);
    } catch (err) {
      log.error("[API] GET /api/key - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message || "Failed to fetch key info." });
    }
  });

  return router;
};
