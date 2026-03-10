/**
 * Routes: GET/POST /api/config, GET /api/config/default
 */

const fs = require("fs");
const express = require("express");

module.exports = function createConfigRouter(configFile, defaultConfigPath, envKeySeed) {
  const router = express.Router();
  const { readConfig, writeConfig, loadState, isStateKey } = configFile;

  router.get("/", (req, res) => {
    try {
      res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
      res.setHeader("Pragma", "no-cache");
      const config = readConfig();
      const state = loadState();
      const payload = {
        ...config,
        ...state,
        web_session: "",
      };
      if (envKeySeed) payload.key_seed = envKeySeed;
      res.json(payload);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/", (req, res) => {
    try {
      const body = req.body;
      if (typeof body !== "object") {
        return res.status(400).json({ error: "Invalid config" });
      }
      const configPart = {};
      const statePart = {};
      Object.keys(body).forEach((k) => {
        if (isStateKey(k)) statePart[k] = body[k];
        else configPart[k] = body[k];
      });
      delete statePart.web_session;
      delete statePart.web_session_expires_at;
      if (Object.keys(configPart).length > 0) {
        const config = { ...readConfig(), ...configPart };
        writeConfig(config);
      }
      if (Object.keys(statePart).length > 0) {
        const state = { ...loadState(), ...statePart };
        configFile.saveState(state);
      }
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.get("/default", (req, res) => {
    try {
      if (fs.existsSync(defaultConfigPath)) {
        const data = fs.readFileSync(defaultConfigPath, "utf8");
        res.json(JSON.parse(data));
      } else {
        res.status(404).json({ error: "Default config not found" });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};
