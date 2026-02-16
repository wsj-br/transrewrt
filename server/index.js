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
const PORT = process.env.PORT || 5000;
const CONFIG_PATH = process.env.CONFIG_PATH || path.join(__dirname, "..", "data", "config.json");
const DEFAULT_CONFIG_PATH = path.join(__dirname, "..", "config_default.json");

console.log("=".repeat(60));
console.log("[SERVER] T-R Server starting...");
console.log(`[SERVER] Port: ${PORT}`);
console.log(`[SERVER] Config path: ${CONFIG_PATH}`);
console.log(`[SERVER] Default config path: ${DEFAULT_CONFIG_PATH}`);
console.log("=".repeat(60));

// Ensure data directory exists
const dataDir = path.dirname(CONFIG_PATH);
console.log(`[SERVER] Data directory: ${dataDir}`);
if (!fs.existsSync(dataDir)) {
  console.log(`[SERVER] Creating data directory: ${dataDir}`);
  fs.mkdirSync(dataDir, { recursive: true });
  console.log(`[SERVER] Data directory created successfully`);
} else {
  console.log(`[SERVER] Data directory already exists`);
}

// Middleware
app.use(express.json({ limit: "10mb" }));

// Basic authentication middleware (optional, enabled via USERNAME env var)
const AUTH_USERNAME = process.env.USERNAME;
const AUTH_PASSWORD = process.env.PASSWORD;

if (AUTH_USERNAME) {
  console.log(`[AUTH] Basic auth enabled for user: ${AUTH_USERNAME}`);
  
  // Helper to parse Basic Auth header
  function parseBasicAuth(header) {
    if (!header || !header.startsWith("Basic ")) {
      return null;
    }
    const base64 = header.slice(6);
    const decoded = Buffer.from(base64, "base64").toString("utf8");
    const [user, pass] = decoded.split(":");
    return { user, pass };
  }

  // Middleware to require auth for all requests
  function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    const credentials = parseBasicAuth(authHeader);
    
    if (!credentials) {
      res.setHeader("WWW-Authenticate", 'Basic realm="Translator & Rewriter"');
      return res.status(401).json({ error: "Authentication required" });
    }
    
    if (credentials.user === AUTH_USERNAME && credentials.pass === AUTH_PASSWORD) {
      return next();
    }
    
    res.setHeader("WWW-Authenticate", 'Basic realm="Translator & Rewriter"');
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // Apply auth to all routes
  app.use(requireAuth);
} else {
  console.log("[AUTH] Basic auth disabled (USERNAME not set)");
}

/**
 * Load config from file. Merges with default config to ensure all fields exist.
 */
function loadConfig() {
  console.log(`[CONFIG] Loading config from: ${CONFIG_PATH}`);
  try {
    let userConfig = {};
    
    // Load user config if it exists
    if (fs.existsSync(CONFIG_PATH)) {
      console.log(`[CONFIG] Config file exists, reading...`);
      const data = fs.readFileSync(CONFIG_PATH, "utf8");
      userConfig = JSON.parse(data);
      console.log(`[CONFIG] User config loaded. Keys: ${Object.keys(userConfig).join(", ")}`);
    } else {
      console.log(`[CONFIG] Config file does not exist at ${CONFIG_PATH}`);
    }
    
    // Load default config
    let defaultConfig = {};
    if (fs.existsSync(DEFAULT_CONFIG_PATH)) {
      console.log(`[CONFIG] Loading default config from: ${DEFAULT_CONFIG_PATH}`);
      const defaultData = fs.readFileSync(DEFAULT_CONFIG_PATH, "utf8");
      defaultConfig = JSON.parse(defaultData);
      console.log(`[CONFIG] Default config loaded. Keys: ${Object.keys(defaultConfig).join(", ")}`);
    } else {
      console.log(`[CONFIG] No default config found`);
    }
    
    // Merge: default config is the base, user config overrides
    const mergedConfig = { ...defaultConfig, ...userConfig };
    
    // If user config didn't exist, create it from defaults
    if (!fs.existsSync(CONFIG_PATH) && Object.keys(defaultConfig).length > 0) {
      console.log(`[CONFIG] Writing default config to: ${CONFIG_PATH}`);
      fs.writeFileSync(CONFIG_PATH, JSON.stringify(mergedConfig, null, 2), "utf8");
      console.log(`[CONFIG] Default config written successfully`);
    }
    
    if (mergedConfig.api_key) {
      console.log(`[CONFIG] API Key present: ${mergedConfig.api_key.substring(0, 8)}...`);
    } else {
      console.log(`[CONFIG] No API Key in config`);
    }
    
    console.log(`[CONFIG] Final merged config keys: ${Object.keys(mergedConfig).join(", ")}`);
    return mergedConfig;
  } catch (err) {
    console.error("[CONFIG] Failed to load config:", err);
    return {};
  }
}

/**
 * Save config to file.
 */
function saveConfig(config) {
  console.log(`[CONFIG] Saving config to: ${CONFIG_PATH}`);
  console.log(`[CONFIG] Config keys to save: ${Object.keys(config).join(", ")}`);
  if (config.api_key) {
    console.log(`[CONFIG] API Key being saved: ${config.api_key.substring(0, 8)}...`);
  } else {
    console.log(`[CONFIG] No API Key in config being saved`);
  }
  try {
    const dir = path.dirname(CONFIG_PATH);
    if (!fs.existsSync(dir)) {
      console.log(`[CONFIG] Creating directory: ${dir}`);
      fs.mkdirSync(dir, { recursive: true });
    }
    const configString = JSON.stringify(config, null, 2);
    console.log(`[CONFIG] Writing ${configString.length} bytes to file`);
    fs.writeFileSync(CONFIG_PATH, configString, "utf8");
    console.log(`[CONFIG] Config saved successfully`);
    
    // Verify the write by reading back
    const verifyData = fs.readFileSync(CONFIG_PATH, "utf8");
    const verifyConfig = JSON.parse(verifyData);
    console.log(`[CONFIG] Verification: Config file contains keys: ${Object.keys(verifyConfig).join(", ")}`);
    if (verifyConfig.api_key) {
      console.log(`[CONFIG] Verification: API Key present: ${verifyConfig.api_key.substring(0, 8)}...`);
    }
    
    return true;
  } catch (err) {
    console.error("[CONFIG] Failed to save config:", err);
    return false;
  }
}

// --- Config API ---

app.get("/api/config", (req, res) => {
  console.log("[API] GET /api/config - Loading config");
  try {
    const config = loadConfig();
    console.log("[API] GET /api/config - Returning config");
    res.json(config);
  } catch (err) {
    console.error("[API] GET /api/config - Error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/config", (req, res) => {
  console.log("[API] POST /api/config - Received config save request");
  console.log("[API] POST /api/config - Body keys:", Object.keys(req.body).join(", "));
  try {
    const config = req.body;
    if (typeof config !== "object") {
      console.log("[API] POST /api/config - Invalid config type");
      return res.status(400).json({ error: "Invalid config" });
    }
    const success = saveConfig(config);
    console.log(`[API] POST /api/config - Save result: ${success}`);
    res.json({ success });
  } catch (err) {
    console.error("[API] POST /api/config - Error:", err);
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
  console.log("=".repeat(60));
  console.log(`[SERVER] T-R server running at http://localhost:${PORT}`);
  console.log(`[SERVER] Config path: ${CONFIG_PATH}`);
  console.log("[SERVER] Loading initial config...");
  const initialConfig = loadConfig();
  console.log(`[SERVER] Initial config loaded with keys: ${Object.keys(initialConfig).join(", ")}`);
  if (initialConfig.api_key) {
    console.log(`[SERVER] API Key present in initial config: ${initialConfig.api_key.substring(0, 8)}...`);
  } else {
    console.log("[SERVER] No API Key in initial config");
  }
  console.log("[SERVER] Server ready to accept requests");
  console.log("=".repeat(60));
});
