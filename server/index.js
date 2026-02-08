/**
 * T-R Web Server
 * Serves the React app and proxies OpenRouter API calls.
 * Config is stored in a local file (Docker volume).
 */

const express = require("express");
const path = require("path");
const fs = require("fs");
const { Readable } = require("stream");

const app = express();
const PORT = process.env.PORT || 3000;
const CONFIG_PATH = process.env.CONFIG_PATH || path.join(__dirname, "..", "data", "config.json");
const DEFAULT_CONFIG_PATH = path.join(__dirname, "..", "config_default.json");

// Ensure data directory exists
const dataDir = path.dirname(CONFIG_PATH);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Middleware
app.use(express.json({ limit: "10mb" }));

/**
 * Load config from file. Creates from default if not exists.
 */
function loadConfig() {
  try {
    if (fs.existsSync(CONFIG_PATH)) {
      const data = fs.readFileSync(CONFIG_PATH, "utf8");
      return JSON.parse(data);
    }
    if (fs.existsSync(DEFAULT_CONFIG_PATH)) {
      const defaultData = fs.readFileSync(DEFAULT_CONFIG_PATH, "utf8");
      const defaultConfig = JSON.parse(defaultData);
      fs.writeFileSync(CONFIG_PATH, JSON.stringify(defaultConfig, null, 2), "utf8");
      return defaultConfig;
    }
    return {};
  } catch (err) {
    console.error("Failed to load config:", err);
    return {};
  }
}

/**
 * Save config to file.
 */
function saveConfig(config) {
  try {
    const dir = path.dirname(CONFIG_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Failed to save config:", err);
    return false;
  }
}

// --- Config API ---

app.get("/api/config", (req, res) => {
  try {
    const config = loadConfig();
    res.json(config);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/config", (req, res) => {
  try {
    const config = req.body;
    if (typeof config !== "object") {
      return res.status(400).json({ error: "Invalid config" });
    }
    const success = saveConfig(config);
    res.json({ success });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/config/default", (req, res) => {
  try {
    if (fs.existsSync(DEFAULT_CONFIG_PATH)) {
      const data = fs.readFileSync(DEFAULT_CONFIG_PATH, "utf8");
      res.json(JSON.parse(data));
    } else {
      res.status(404).json({ error: "Default config not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- OpenRouter Proxy ---

const OPENROUTER_BASE = "https://openrouter.ai/api/v1";

function getProxyHeaders() {
  const config = loadConfig();
  const apiUrl = config.api_url || OPENROUTER_BASE;
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${config.api_key || ""}`,
    "HTTP-Referer": "https://github.com/TranslateRewrite/translator-and-rewriter",
    "X-Title": "Translator & Rewriter",
  };
}

// Proxy POST /api/proxy/chat/completions (streaming)
app.post("/api/proxy/chat/completions", async (req, res) => {
  const config = loadConfig();
  const apiUrl = (config.api_url || OPENROUTER_BASE).replace(/\/$/, "");
  const targetUrl = `${apiUrl}/chat/completions`;

  try {
    const headers = getProxyHeaders();
    const response = await fetch(targetUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(req.body),
    });

    res.status(response.status);
    response.headers.forEach((value, key) => {
      if (key.toLowerCase() !== "transfer-encoding") {
        res.setHeader(key, value);
      }
    });

    if (response.body) {
      Readable.fromWeb(response.body).pipe(res);
    } else {
      res.end();
    }
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Proxy GET /api/proxy/models
app.get("/api/proxy/models", async (req, res) => {
  const config = loadConfig();
  const apiUrl = (config.api_url || OPENROUTER_BASE).replace(/\/$/, "");
  const targetUrl = `${apiUrl}/models`;

  try {
    const headers = getProxyHeaders();
    const response = await fetch(targetUrl, { headers });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: err.message });
  }
});

// Proxy GET /api/proxy/generation (for usage after cancel)
app.get("/api/proxy/generation", async (req, res) => {
  const config = loadConfig();
  const apiUrl = (config.api_url || OPENROUTER_BASE).replace(/\/$/, "");
  const targetUrl = `${apiUrl}/generation?id=${encodeURIComponent(req.query.id || "")}`;

  try {
    const headers = getProxyHeaders();
    const response = await fetch(targetUrl, { headers });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    console.error("Proxy error:", err);
    res.status(500).json({ error: err.message });
  }
});

// --- Static files ---

const distPath = path.join(__dirname, "..", "dist");
app.use(express.static(distPath));

// SPA fallback: serve index.html for all non-API routes
app.get("*", (req, res) => {
  if (req.path.startsWith("/api/")) {
    return res.status(404).json({ error: "Not found" });
  }
  res.sendFile(path.join(distPath, "index.html"));
});

// --- Start ---

app.listen(PORT, () => {
  console.log(`T-R server running at http://localhost:${PORT}`);
  console.log(`Config path: ${CONFIG_PATH}`);
});
