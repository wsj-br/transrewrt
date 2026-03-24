/**
 * Routes: GET /api/status, /api/build-info, /api/key
 */

const fs = require("fs");
const express = require("express");
const {
  mergeKeys,
  engineConfigured,
  readEnvNonBlank,
  ENGINE_IDS,
  CONFIG_KEY_BY_ENGINE,
  ENV_KEY_BY_ENGINE,
  OPENROUTER_BASE,
  providerDisplayName,
  testProviderAuth,
} = require("../../shared/llm");

/**
 * @param {() => object} readConfig
 * @param {string} buildTimestampPath
 * @param {object} log
 */
module.exports = function createStatusRouter(
  readConfig,
  buildTimestampPath,
  log,
) {
  const router = express.Router();

  function requireAdmin(req, res, next) {
    if (req.authSession?.role !== "admin") {
      return res.status(403).json({ error: "Admin access required" });
    }
    return next();
  }

  router.get("/status", async (req, res) => {
    try {
      const keysMap = mergeKeys(readConfig());
      const apiKeySet = ENGINE_IDS.some((e) => engineConfigured(e, keysMap));
      if (!apiKeySet) {
        return res.json({
          apiKeySet: false,
          apiKeyValid: false,
          message: "No LLM provider keys or Ollama URL are configured.",
        });
      }

      let apiKeyValid = false;
      let message = "";

      if (engineConfigured("openrouter", keysMap)) {
        const key = (keysMap.openrouter_api_key || "").trim();
        const testUrl = `${OPENROUTER_BASE}/models`;
        const keyRes = await fetch(testUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${key}`,
            "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
            "X-Title": "Transrewrt",
          },
        });
        apiKeyValid = keyRes.ok;
        message = apiKeyValid
          ? "OpenRouter API key is valid."
          : keyRes.status === 401
            ? "OpenRouter API key is invalid or expired."
            : `OpenRouter key check failed (HTTP ${keyRes.status}).`;
      } else {
        apiKeyValid = true;
        message =
          "Non-OpenRouter providers configured; connectivity not verified by this check.";
      }

      res.json({
        apiKeySet: true,
        apiKeyValid,
        message,
      });
    } catch (err) {
      log.error("[API] GET /api/status - Error: " + err.message, {
        stack: err.stack,
      });
      res.json({
        apiKeySet: false,
        apiKeyValid: false,
        message: err.message || "Failed to verify configuration.",
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
      log.error("[API] GET /api/build-info - Error: " + err.message, {
        stack: err.stack,
      });
      res.json({ buildTimestamp: null });
    }
  });

  router.get("/key", async (req, res) => {
    try {
      const keysMap = mergeKeys(readConfig());
      const key = (keysMap.openrouter_api_key || "").trim();
      if (!key) {
        return res
          .status(400)
          .json({ error: "OpenRouter API key is not configured." });
      }
      res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
      res.setHeader("Pragma", "no-cache");
      const keyUrl = `${OPENROUTER_BASE}/key?_=${Date.now()}`;
      const keyRes = await fetch(keyUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${key}`,
          "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
          "X-Title": "Transrewrt",
        },
      });
      const data = await keyRes.json().catch(() => ({}));
      if (!keyRes.ok) return res.status(keyRes.status).json(data);
      log.info("API key usage", { status: keyRes.status, data });
      return res.json(data);
    } catch (err) {
      log.error("[API] GET /api/key - Error: " + err.message, {
        stack: err.stack,
      });
      res
        .status(500)
        .json({ error: err.message || "Failed to fetch key info." });
    }
  });

  router.get("/provider-keys", requireAdmin, async (req, res) => {
    try {
      const providers = ENGINE_IDS.map((provider) => {
        const envKey = ENV_KEY_BY_ENGINE[provider];
        const envConfigured = !!readEnvNonBlank(process.env, envKey);
        const configured = envConfigured;
        return {
          provider,
          label: providerDisplayName(provider),
          configured,
          envConfigured,
          message: configured ? "Configured from environment." : "Not configured in environment.",
          recommendedAction: configured
            ? ""
            : "Review your Docker environment configuration for this API key.",
          source: envConfigured ? "environment" : "none",
        };
      }).filter((row) => row.envConfigured && row.provider !== "ollama");
      res.json({
        providers,
      });
    } catch (err) {
      log.error("[API] GET /api/provider-keys - Error: " + err.message, {
        stack: err.stack,
      });
      res.status(500).json({ error: err.message || "Failed to load API key status." });
    }
  });

  router.post("/provider-test", requireAdmin, async (req, res) => {
    try {
      const provider = String(req.body?.provider || "").trim();
      if (!ENGINE_IDS.includes(provider)) {
        return res.status(400).json({ error: "Unsupported provider." });
      }
      const merged = mergeKeys(readConfig());
      const value = merged[CONFIG_KEY_BY_ENGINE[provider]] || "";
      const result = await testProviderAuth(provider, value);
      const response = {
        provider,
        status: result.ok ? "success" : "error",
        message: result.ok
          ? result.message
          : `${result.message} Review this API key in your Docker environment configuration.`,
      };
      return res.status(result.ok ? 200 : 400).json(response);
    } catch (err) {
      log.error("[API] POST /api/provider-test - Error: " + err.message, {
        stack: err.stack,
      });
      return res.status(500).json({ error: err.message || "Failed to test API key." });
    }
  });

  return router;
};
