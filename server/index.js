/**
 * Poliverb Web Server
 * Serves the React app and proxies OpenRouter API calls.
 * Config is stored in a local file (Docker volume).
 */

const express = require("express");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const { Readable } = require("stream");
const Database = require("better-sqlite3");

const app = express();
const PORT = process.env.PORT || 5000;
const CONFIG_PATH = process.env.CONFIG_PATH || path.join(__dirname, "..", "data", "config.json");
const DEFAULT_CONFIG_PATH = path.join(__dirname, "..", "config_default.json");

const DEV_WEB = process.env.DEV_WEB === "true";

// API key can come from env or (in DEV_WEB) from config. If unset, web app shows a message.
const ENV_API_KEY = process.env.API_KEY || "";
const ENV_API_URL = (process.env.API_URL || "https://openrouter.ai/api/v1").replace(/\/$/, "");

console.log("=".repeat(60));
console.log("[SERVER] Poliverb Server starting...");
console.log(`[SERVER] Port: ${PORT}`);
if (DEV_WEB) {
  console.log("[SERVER] DEV_WEB mode: only API on this port; use http://localhost:5000 for the app");
}
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

// SQLite DB for API call logs
const DB_PATH = path.join(dataDir, "poliverb.db");
let db;
try {
  db = new Database(DB_PATH);
  db.exec(`
    CREATE TABLE IF NOT EXISTS api_calls (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      timestamp TEXT NOT NULL,
      type TEXT NOT NULL,
      model TEXT,
      source_lang TEXT,
      target_lang TEXT,
      rewrite_style TEXT,
      request_bytes INTEGER,
      response_bytes INTEGER,
      duration_ms INTEGER,
      cost REAL,
      total_cost REAL,
      tps REAL
    )
  `);
  try {
    db.exec("ALTER TABLE api_calls ADD COLUMN tps REAL");
  } catch (_) {
    // Column may already exist (e.g. from CREATE or previous migration)
  }
} catch (err) {
  console.error("[SERVER] Failed to init SQLite DB:", err);
  db = null;
}

// Middleware
app.use(express.json({ limit: "10mb" }));

const DEFAULT_WEB_PASSWORD = "poliverb26";

function hashPassword(password) {
  return crypto.createHash("sha256").update(password, "utf8").digest("hex");
}

function parseCookie(cookieHeader) {
  if (!cookieHeader) return {};
  const out = {};
  cookieHeader.split(";").forEach((part) => {
    const [key, ...v] = part.trim().split("=");
    if (key && v.length) out[key] = decodeURIComponent(v.join("=").trim());
  });
  return out;
}

// Web login: require session cookie for /api except POST /api/auth/login and GET /api/status
// (req.path is relative to mount, so "/api/auth/login" becomes "/auth/login")
function requireWebSession(req, res, next) {
  if (req.path === "/auth/login" && req.method === "POST") return next();
  if (req.path === "/status" && req.method === "GET") return next();
  const cookies = parseCookie(req.headers.cookie);
  const sessionId = cookies.poliverb_session;
  const config = loadConfig();
  if (sessionId && config.web_session && sessionId === config.web_session) {
    return next();
  }
  return res.status(401).json({ error: "Authentication required" });
}
app.use("/api", requireWebSession);

/**
 * Load config from file. Merges with default config to ensure all fields exist.
 */
function loadConfig() {
  try {
    let userConfig = {};
    if (fs.existsSync(CONFIG_PATH)) {
      const data = fs.readFileSync(CONFIG_PATH, "utf8");
      userConfig = JSON.parse(data);
    }
    let defaultConfig = {};
    if (fs.existsSync(DEFAULT_CONFIG_PATH)) {
      const defaultData = fs.readFileSync(DEFAULT_CONFIG_PATH, "utf8");
      defaultConfig = JSON.parse(defaultData);
    }
    const mergedConfig = { ...defaultConfig, ...userConfig };
    if (!fs.existsSync(CONFIG_PATH) && Object.keys(defaultConfig).length > 0) {
      const dir = path.dirname(CONFIG_PATH);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(CONFIG_PATH, JSON.stringify(mergedConfig, null, 2), "utf8");
    }
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
  try {
    const dir = path.dirname(CONFIG_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2), "utf8");
    console.log("[CONFIG] Config saved.");
    return true;
  } catch (err) {
    console.error("[CONFIG] Failed to save config:", err);
    return false;
  }
}

// --- Config API ---

app.get("/api/config", (req, res) => {
  try {
    const config = loadConfig();
    res.json(config);
  } catch (err) {
    console.error("[API] GET /api/config - Error:", err);
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
    console.error("[API] POST /api/config - Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// --- Web login (when BASIC auth is not used) ---
app.post("/api/auth/login", (req, res) => {
  try {
    const { password } = req.body || {};
    const config = loadConfig();
    const storedHash = config.web_password_hash;
    const valid =
      storedHash
        ? hashPassword(password) === storedHash
        : password === DEFAULT_WEB_PASSWORD;
    if (!valid) {
      return res.status(401).json({ error: "Invalid password" });
    }
    const sessionId = crypto.randomBytes(24).toString("hex");
    const newConfig = { ...config, web_session: sessionId };
    if (!storedHash) {
      newConfig.web_password_hash = hashPassword(DEFAULT_WEB_PASSWORD);
    }
    saveConfig(newConfig);
    res
      .status(200)
      .setHeader(
        "Set-Cookie",
        `poliverb_session=${sessionId}; Path=/; HttpOnly; SameSite=Strict; Max-Age=86400`
      )
      .json({ success: true });
  } catch (err) {
    console.error("[API] POST /api/auth/login - Error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/auth/change-password", (req, res) => {
  try {
    const { newPassword } = req.body || {};
    if (!newPassword || typeof newPassword !== "string" || newPassword.length < 1) {
      return res.status(400).json({ error: "New password required" });
    }
    const config = loadConfig();
    const newConfig = { ...config, web_password_hash: hashPassword(newPassword) };
    saveConfig(newConfig);
    res.json({ success: true });
  } catch (err) {
    console.error("[API] POST /api/auth/change-password - Error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/auth/logout", (req, res) => {
  try {
    const config = loadConfig();
    const newConfig = { ...config, web_session: "" };
    saveConfig(newConfig);
    res
      .status(200)
      .setHeader(
        "Set-Cookie",
        "poliverb_session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0"
      )
      .json({ success: true });
  } catch (err) {
    console.error("[API] POST /api/auth/logout - Error:", err);
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

// --- API call logging (SQLite) ---
app.post("/api/calls", (req, res) => {
  if (!db) {
    return res.status(503).json({ error: "Database unavailable" });
  }
  try {
    const b = req.body || {};
    const stmt = db.prepare(`
      INSERT INTO api_calls (timestamp, type, model, source_lang, target_lang, rewrite_style, request_bytes, response_bytes, duration_ms, cost, total_cost, tps)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    stmt.run(
      b.timestamp || new Date().toISOString(),
      b.type || "",
      b.model || null,
      b.source_lang || null,
      b.target_lang || null,
      b.rewrite_style || null,
      b.request_bytes ?? null,
      b.response_bytes ?? null,
      b.duration_ms ?? null,
      b.cost ?? null,
      b.total_cost ?? null,
      b.tps ?? null
    );
    res.json({ success: true });
  } catch (err) {
    console.error("[API] POST /api/calls - Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// --- API call summaries (for Cost Tracking tab) ---
function buildWhereFromTo(from, to) {
  const parts = [];
  const params = [];
  if (from) { parts.push("timestamp >= ?"); params.push(from); }
  if (to) { parts.push("timestamp <= ?"); params.push(to); }
  return { where: parts.length ? " WHERE " + parts.join(" AND ") : "", params };
}

app.get("/api/calls/summary-by-function", (req, res) => {
  if (!db) return res.status(503).json({ error: "Database unavailable" });
  try {
    const { where, params } = buildWhereFromTo(req.query.from, req.query.to);
    const sql = `
      SELECT type AS function, COUNT(*) AS calls, COALESCE(SUM(cost), 0) AS cost
      FROM api_calls ${where}
      GROUP BY type
    `;
    const rows = db.prepare(sql).all(...params);
    const totalCalls = rows.reduce((s, r) => s + r.calls, 0);
    const totalCost = rows.reduce((s, r) => s + (r.cost || 0), 0);
    rows.push({ function: "Total", calls: totalCalls, cost: totalCost });
    res.json({ rows });
  } catch (err) {
    console.error("[API] GET /api/calls/summary-by-function - Error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/calls/summary-by-model", (req, res) => {
  if (!db) return res.status(503).json({ error: "Database unavailable" });
  try {
    const { where, params } = buildWhereFromTo(req.query.from, req.query.to);
    const sql = `
      SELECT model,
        SUM(CASE WHEN type = 'translate' THEN 1 ELSE 0 END) AS translation_calls,
        SUM(CASE WHEN type = 'rewrite' THEN 1 ELSE 0 END) AS rewrite_calls,
        SUM(CASE WHEN type = 'translate' THEN COALESCE(cost, 0) ELSE 0 END) AS translation_cost,
        SUM(CASE WHEN type = 'rewrite' THEN COALESCE(cost, 0) ELSE 0 END) AS rewrite_cost,
        AVG(CASE WHEN tps IS NOT NULL AND tps > 0 THEN tps ELSE NULL END) AS avg_tps
      FROM api_calls ${where}
      GROUP BY model
    `;
    const rows = db.prepare(sql).all(...params);
    let weightedTpsNum = 0;
    let weightedTpsDenom = 0;
    const totals = rows.reduce(
      (acc, r) => {
        const tc = r.translation_calls || 0;
        const rc = r.rewrite_calls || 0;
        const totalCalls = tc + rc;
        const avgTps = r.avg_tps != null && Number(r.avg_tps) > 0 ? Number(r.avg_tps) : null;
        if (avgTps != null && totalCalls > 0) {
          weightedTpsNum += avgTps * totalCalls;
          weightedTpsDenom += totalCalls;
        }
        return {
          translation_calls: acc.translation_calls + tc,
          rewrite_calls: acc.rewrite_calls + rc,
          translation_cost: acc.translation_cost + (r.translation_cost || 0),
          rewrite_cost: acc.rewrite_cost + (r.rewrite_cost || 0),
        };
      },
      { translation_calls: 0, rewrite_calls: 0, translation_cost: 0, rewrite_cost: 0 }
    );
    const totalAvgTps = weightedTpsDenom > 0 ? weightedTpsNum / weightedTpsDenom : null;
    rows.push({ model: "Total", ...totals, avg_tps: totalAvgTps });
    res.json({ rows });
  } catch (err) {
    console.error("[API] GET /api/calls/summary-by-model - Error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/calls/summary-by-day", (req, res) => {
  if (!db) return res.status(503).json({ error: "Database unavailable" });
  try {
    const { where, params } = buildWhereFromTo(req.query.from, req.query.to);
    const sql = `
      SELECT date(timestamp) AS day,
        SUM(CASE WHEN type = 'translate' THEN 1 ELSE 0 END) AS translation_calls,
        SUM(CASE WHEN type = 'rewrite' THEN 1 ELSE 0 END) AS rewrite_calls,
        SUM(CASE WHEN type = 'translate' THEN COALESCE(cost, 0) ELSE 0 END) AS translation_cost,
        SUM(CASE WHEN type = 'rewrite' THEN COALESCE(cost, 0) ELSE 0 END) AS rewrite_cost
      FROM api_calls ${where}
      GROUP BY date(timestamp)
      ORDER BY day DESC
    `;
    const rows = db.prepare(sql).all(...params);
    res.json({ rows });
  } catch (err) {
    console.error("[API] GET /api/calls/summary-by-day - Error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/calls", (req, res) => {
  if (!db) {
    return res.status(503).json({ error: "Database unavailable" });
  }
  const from = req.query.from || null;
  const to = req.query.to || null;
  try {
    if (!from && !to) {
      db.prepare("DELETE FROM api_calls").run();
    } else {
      const cutoff = from || to;
      db.prepare("DELETE FROM api_calls WHERE timestamp < ?").run(cutoff);
    }
    res.json({ success: true });
  } catch (err) {
    console.error("[API] DELETE /api/calls - Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// --- OpenRouter Proxy (uses ENV_API_KEY/ENV_API_URL when set, else config) ---

function getProxyHeaders() {
  const apiKey = ENV_API_KEY || (loadConfig().api_key || "");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
    "HTTP-Referer": "https://github.com/wsj-br/poliverb",
    "X-Title": "Poliverb",
  };
}

function getProxyBaseUrl() {
  return ENV_API_KEY ? ENV_API_URL : (loadConfig().api_url || "https://openrouter.ai/api/v1").replace(/\/$/, "");
}

// --- API status (check if API key is set and valid) - no auth required ---
app.get("/api/status", async (req, res) => {
  try {
    const apiKey = ENV_API_KEY || (loadConfig().api_key || "");
    const apiKeySet = !!(apiKey && String(apiKey).trim());
    if (!apiKeySet) {
      return res.json({ apiKeySet: false, apiKeyValid: false, message: "API_KEY is not set." });
    }
    const baseUrl = getProxyBaseUrl();
    const testUrl = `${baseUrl}/models?limit=1`;
    const headers = getProxyHeaders();
    const keyRes = await fetch(testUrl, { method: "GET", headers });
    const apiKeyValid = keyRes.ok;
    res.json({
      apiKeySet: true,
      apiKeyValid,
      message: apiKeyValid ? "API key is valid." : (keyRes.status === 401 ? "API key is invalid or expired." : `API key check failed (HTTP ${keyRes.status}).`),
    });
  } catch (err) {
    console.error("[API] GET /api/status - Error:", err);
    res.json({
      apiKeySet: !!((ENV_API_KEY || (loadConfig().api_key || ""))?.trim()),
      apiKeyValid: false,
      message: err.message || "Failed to verify API key.",
    });
  }
});

// Proxy POST /api/proxy/chat/completions (streaming)
app.post("/api/proxy/chat/completions", async (req, res) => {
  const targetUrl = `${getProxyBaseUrl()}/chat/completions`;

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
  const targetUrl = `${getProxyBaseUrl()}/models`;

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
  const targetUrl = `${getProxyBaseUrl()}/generation?id=${encodeURIComponent(req.query.id || "")}`;

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

// --- Static files (skip when DEV_WEB: app is served by Webpack dev server on 5000) ---

const distPath = path.join(__dirname, "..", "dist");

if (!DEV_WEB) {
  app.use(express.static(distPath));
  // SPA fallback: serve index.html for all non-API routes (Express 5 / path-to-regexp v8: wildcard must be named)
  app.get("/{*splat}", (req, res) => {
    if (req.path.startsWith("/api/")) {
      return res.status(404).json({ error: "Not found" });
    }
    res.sendFile(path.join(distPath, "index.html"));
  });
} else {
  // dev:web mode: only serve API; tell users to use http://localhost:5000 for the app
  app.get("/", (req, res) => {
    res.type("html").send(`
      <!DOCTYPE html>
      <html><head><meta charset="utf-8"><title>Poliverb – Dev</title></head>
      <body style="font-family: system-ui; padding: 2rem; max-width: 40rem;">
        <h1>Poliverb (dev)</h1>
        <p>For web development, use the Webpack dev server:</p>
        <p><a href="http://localhost:5000">http://localhost:5000</a></p>
        <p>This port (3030) only serves the API when running <code>pnpm run dev:web</code>.</p>
      </body></html>
    `);
  });
  app.get("/{*splat}", (req, res, next) => {
    if (req.path.startsWith("/api/")) return next();
    res.redirect(302, "http://localhost:5000");
  });
}

// --- Start ---

app.listen(PORT, () => {
  console.log("=".repeat(60));
  console.log(`[SERVER] Poliverb server running at http://localhost:${PORT}`);
  console.log(`[SERVER] Config path: ${CONFIG_PATH}`);
  console.log("[SERVER] Loading initial config...");
  const initialConfig = loadConfig();
  if (ENV_API_KEY) {
    console.log("[SERVER] API Key is being loaded from environment variable API_KEY");
  } else if (initialConfig.api_key) {
    console.log(`[SERVER] API Key present in initial config: ${initialConfig.api_key.substring(0, 8)}...`);
  } else {
    console.log("[SERVER] No API Key in initial config");
  }
  console.log("[SERVER] Server ready to accept requests");
  console.log("=".repeat(60));
});
