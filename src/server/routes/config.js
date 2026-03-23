/**
 * Routes: GET/POST /api/config, GET /api/config/default
 * Web: merges server-global keys (admin-only write) with per-user preferences in SQLite.
 */

const fs = require("fs");
const express = require("express");
const { isServerGlobalKey, pickServerGlobalEntries } = require("../utils/webConfigKeys.js");

module.exports = function createConfigRouter(configFile, defaultConfigPath, appDb) {
  const router = express.Router();
  const { readConfig, writeConfig } = configFile;

  function loadDefaultConfigJson() {
    try {
      if (defaultConfigPath && fs.existsSync(defaultConfigPath)) {
        return JSON.parse(fs.readFileSync(defaultConfigPath, "utf8"));
      }
    } catch {
      /* ignore */
    }
    return {};
  }

  router.get("/", (req, res) => {
    try {
      res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
      res.setHeader("Pragma", "no-cache");
      const auth = req.authSession;
      if (!auth?.userId) {
        return res.status(401).json({ error: "Authentication required" });
      }

      const fileDefaults = loadDefaultConfigJson();
      const globalRead = readConfig();
      const userPrefs = appDb.getUserPreferencesData(auth.userId) || {};
      const isAdmin = auth.role === "admin";

      const merged = {
        ...fileDefaults,
        ...configFile.DEFAULT_STATE,
        ...userPrefs,
        ...pickServerGlobalEntries(globalRead, isAdmin),
      };
      merged.web_session = "";
      res.json(merged);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/", (req, res) => {
    try {
      const auth = req.authSession;
      if (!auth?.userId) {
        return res.status(401).json({ error: "Authentication required" });
      }

      const body = req.body;
      if (typeof body !== "object" || body === null) {
        return res.status(400).json({ error: "Invalid config" });
      }

      const serverPart = {};
      const userPart = {};
      Object.keys(body).forEach((k) => {
        if (k === "web_session" || k === "web_session_expires_at") return;
        if (isServerGlobalKey(k)) serverPart[k] = body[k];
        else userPart[k] = body[k];
      });

      if (Object.keys(serverPart).length > 0 && auth.role !== "admin") {
        return res.status(403).json({ error: "Admin access required" });
      }

      if (Object.keys(serverPart).length > 0) {
        const config = { ...readConfig(), ...serverPart };
        writeConfig(config);
      }

      if (Object.keys(userPart).length > 0) {
        appDb.mergeUserPreferencesData(auth.userId, userPart);
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
