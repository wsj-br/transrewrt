/**
 * Transrewrt Web Server
 * Serves the React app and proxies OpenRouter API calls.
 * Config is stored in a local file (Docker volume).
 */

const express = require("express");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const { Readable } = require("stream");
const Database = require("better-sqlite3");
const lockfile = require("proper-lockfile");
const argon2 = require("argon2");

const app = express();
const PORT = process.env.PORT || 5000;
const CONFIG_PATH = process.env.CONFIG_PATH || path.join(__dirname, "..", "data", "config.json");
const STATE_PATH = path.join(path.dirname(CONFIG_PATH), "state.json");
const DEFAULT_CONFIG_PATH = path.join(__dirname, "..", "config", "config_default.json");
const BUILD_TIMESTAMP_PATH = path.join(__dirname, "..", "build_timestamp");

const STATE_KEYS = [
  "last_used_model",
  "settings_active_tab",
  "source_language",
  "target_language",
  "app_mode",
  "rewrite_style",
  "web_session",
  "web_session_expires_at",
  "web_view",
];

const DEFAULT_STATE = {
  last_used_model: "openrouter/free",
  settings_active_tab: "api",
  source_language: "Detect Language",
  target_language: "Spanish",
  app_mode: "translate",
  rewrite_style: "Check Spelling & Grammar",
  web_session: "",
  web_session_expires_at: null,
  web_view: "workspace",
};

function isStateKey(key) {
  return STATE_KEYS.includes(key);
}

function stripStateKeysAndDeprecated(obj) {
  const out = { ...obj };
  STATE_KEYS.forEach((k) => delete out[k]);
  return out;
}

const DEV_WEB = process.env.DEV_WEB === "true";

// API key can come from env or (in DEV_WEB) from config. If unset, web app shows a message.
const ENV_API_KEY = process.env.API_KEY || "";
const ENV_API_URL = (process.env.API_URL || "https://openrouter.ai/api/v1").replace(/\/$/, "");

console.log("=".repeat(60));
console.log("[SERVER] Transrewrt Server starting...");
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
const DB_PATH = path.join(dataDir, "transrewrt.db");
const LEGACY_DB_PATH = path.join(dataDir, "poliverb.db");
if (fs.existsSync(LEGACY_DB_PATH) && !fs.existsSync(DB_PATH)) {
  fs.copyFileSync(LEGACY_DB_PATH, DB_PATH);
  console.log("[SERVER] Migrated legacy DB to transrewrt.db");
}
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

const DEFAULT_WEB_PASSWORD = "transrewrt26";

// Argon2id (OWASP-recommended). Old SHA-256 hashes are 64-char hex; we migrate on first successful login.
const LEGACY_HASH_LEN = 64;
const LEGACY_HEX = /^[a-f0-9]{64}$/i;

async function hashPassword(password) {
  return argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 19456, // 19 MiB
    timeCost: 2,
    parallelism: 1,
  });
}

function isLegacyHash(stored) {
  return typeof stored === "string" && stored.length === LEGACY_HASH_LEN && LEGACY_HEX.test(stored);
}

function legacyHashPassword(password) {
  return crypto.createHash("sha256").update(password, "utf8").digest("hex");
}

async function verifyPassword(password, storedHash) {
  if (!storedHash) return false;
  if (isLegacyHash(storedHash)) {
    return legacyHashPassword(password) === storedHash;
  }
  return argon2.verify(storedHash, password);
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

/** Set session cookie with current config timeout (sliding window). Call on translate/rewrite usage. */
function setSessionRefreshCookie(req, res) {
  const cookies = parseCookie(req.headers.cookie);
  const sessionId = cookies.transrewrt_session;
  if (!sessionId) return;
  const config = loadConfig();
  const maxAge = Math.max(60, Number(config.web_session_timeout) || 604800);
  const expiresAt = Date.now() + maxAge * 1000;
  const state = loadState();
  if (state.web_session === sessionId) {
    saveState({ ...state, web_session_expires_at: expiresAt });
  }
  res.setHeader(
    "Set-Cookie",
    `transrewrt_session=${sessionId}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAge}`
  );
}

// Web login: require session cookie for /api except POST /api/auth/login and GET /api/status
// (req.path is relative to mount, so "/api/auth/login" becomes "/auth/login")
function requireWebSession(req, res, next) {
  if (req.path === "/auth/login" && req.method === "POST") return next();
  if (req.path === "/status" && req.method === "GET") return next();
  if (req.path === "/build-info" && req.method === "GET") return next();
  const cookies = parseCookie(req.headers.cookie);
  const sessionId = cookies.transrewrt_session;
  const state = loadState();
  if (sessionId && state.web_session && sessionId === state.web_session) {
    return next();
  }
  return res.status(401).json({ error: "Authentication required" });
}
app.use("/api", requireWebSession);

/**
 * Load config from file with file locking. Merges with default config.
 * Strips state keys so only config is returned.
 */
function loadConfig() {
  const lockOpts = { realpath: false };
  let release;
  try {
    const dir = path.dirname(CONFIG_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if (!fs.existsSync(CONFIG_PATH)) {
      fs.writeFileSync(CONFIG_PATH, "{}", "utf8");
    }
    release = lockfile.lockSync(CONFIG_PATH, lockOpts);
    let userConfig = {};
    const data = fs.readFileSync(CONFIG_PATH, "utf8");
    if (data.trim()) userConfig = JSON.parse(data);
    let defaultConfig = {};
    if (fs.existsSync(DEFAULT_CONFIG_PATH)) {
      defaultConfig = JSON.parse(fs.readFileSync(DEFAULT_CONFIG_PATH, "utf8"));
    }
    const merged = { ...defaultConfig, ...userConfig };
    return stripStateKeysAndDeprecated(merged);
  } catch (err) {
    console.error("[CONFIG] Failed to load config:", err);
    return {};
  } finally {
    if (release) {
      try {
        release();
      } catch (e) {
        console.error("[CONFIG] Failed to release config lock:", e);
      }
    }
  }
}

/**
 * Load state from file. If state.json is missing, migrate from config file and create it.
 */
function loadState() {
  const lockOpts = { realpath: false };
  let release;
  try {
    const dir = path.dirname(STATE_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if (fs.existsSync(STATE_PATH)) {
      release = lockfile.lockSync(STATE_PATH, lockOpts);
      const data = fs.readFileSync(STATE_PATH, "utf8");
      const fileState = data.trim() ? JSON.parse(data) : {};
      return { ...DEFAULT_STATE, ...fileState };
    }
    const state = { ...DEFAULT_STATE };
    if (fs.existsSync(CONFIG_PATH)) {
      try {
        const raw = fs.readFileSync(CONFIG_PATH, "utf8");
        const userConfig = raw.trim() ? JSON.parse(raw) : {};
        STATE_KEYS.forEach((k) => {
          if (userConfig[k] !== undefined) state[k] = userConfig[k];
        });
      } catch (_) {}
    }
    saveState(state);
    return state;
  } catch (err) {
    console.error("[STATE] Failed to load state:", err);
    return { ...DEFAULT_STATE };
  } finally {
    if (release) {
      try {
        release();
      } catch (e) {
        console.error("[STATE] Failed to release state lock:", e);
      }
    }
  }
}

/**
 * Save state to file with file locking. Skips write if content is unchanged.
 */
function saveState(state) {
  const lockOpts = { realpath: false };
  let release;
  try {
    const dir = path.dirname(STATE_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if (!fs.existsSync(STATE_PATH)) fs.writeFileSync(STATE_PATH, "{}", "utf8");
    release = lockfile.lockSync(STATE_PATH, lockOpts);
    let current;
    try {
      current = fs.readFileSync(STATE_PATH, "utf8");
    } catch (_) {
      current = "";
    }
    let currentParsed;
    try {
      currentParsed = current ? JSON.parse(current) : {};
    } catch (_) {
      currentParsed = {};
    }
    if (canonicalStringify(currentParsed) === canonicalStringify(state)) {
      return true;
    }
    fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2), "utf8");
    console.log("[STATE] State saved.");
    return true;
  } catch (err) {
    console.error("[STATE] Failed to save state:", err);
    return false;
  } finally {
    if (release) {
      try {
        release();
      } catch (e) {
        console.error("[STATE] Failed to release state lock:", e);
      }
    }
  }
}

/** Canonical JSON stringify (sorted keys) for change detection. */
function canonicalStringify(obj) {
  if (obj === null || typeof obj !== "object") return JSON.stringify(obj);
  if (Array.isArray(obj)) return "[" + obj.map(canonicalStringify).join(",") + "]";
  const keys = Object.keys(obj).sort();
  return "{" + keys.map((k) => JSON.stringify(k) + ":" + canonicalStringify(obj[k])).join(",") + "}";
}

/**
 * Save config to file with file locking. Skips write if content is unchanged (saves IO / SSD wear).
 */
function saveConfig(config) {
  const lockOpts = { realpath: false };
  let release;
  try {
    const dir = path.dirname(CONFIG_PATH);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if (!fs.existsSync(CONFIG_PATH)) fs.writeFileSync(CONFIG_PATH, "{}", "utf8");
    release = lockfile.lockSync(CONFIG_PATH, lockOpts);
    const newContent = JSON.stringify(config, null, 2);
    let current;
    try {
      current = fs.readFileSync(CONFIG_PATH, "utf8");
    } catch (_) {
      current = "";
    }
    let currentParsed;
    try {
      currentParsed = current ? JSON.parse(current) : {};
    } catch (_) {
      currentParsed = {};
    }
    if (canonicalStringify(currentParsed) === canonicalStringify(config)) {
      return true;
    }
    fs.writeFileSync(CONFIG_PATH, newContent, "utf8");
    console.log("[CONFIG] Config saved.");
    return true;
  } catch (err) {
    console.error("[CONFIG] Failed to save config:", err);
    return false;
  } finally {
    if (release) {
      try {
        release();
      } catch (e) {
        console.error("[CONFIG] Failed to release config lock:", e);
      }
    }
  }
}

// --- Config API ---

app.get("/api/config", (req, res) => {
  try {
    res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
    res.setHeader("Pragma", "no-cache");
    const config = loadConfig();
    const state = loadState();
    res.json({ ...config, ...state });
  } catch (err) {
    console.error("[API] GET /api/config - Error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/config", (req, res) => {
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
    // Never overwrite server-managed session state from client (e.g. after translate/rewrite sliding window)
    delete statePart.web_session;
    delete statePart.web_session_expires_at;
    if (Object.keys(configPart).length > 0) {
      const config = { ...loadConfig(), ...configPart };
      saveConfig(config);
    }
    if (Object.keys(statePart).length > 0) {
      const state = { ...loadState(), ...statePart };
      saveState(state);
    }
    res.json({ success: true });
  } catch (err) {
    console.error("[API] POST /api/config - Error:", err);
    res.status(500).json({ error: err.message });
  }
});

// --- Web login (when BASIC auth is not used) ---
app.post("/api/auth/login", async (req, res) => {
  try {
    const { password } = req.body || {};
    const config = loadConfig();
    const state = loadState();
    const storedHash = config.web_password_hash;
    const valid = storedHash
      ? await verifyPassword(password, storedHash)
      : password === DEFAULT_WEB_PASSWORD;
    if (!valid) {
      return res.status(401).json({ error: "Invalid password" });
    }
    const sessionId = crypto.randomBytes(24).toString("hex");
    const maxAge = Math.max(3600, Number(config.web_session_timeout) || 604800);
    const newState = {
      ...state,
      web_session: sessionId,
      web_session_expires_at: Date.now() + maxAge * 1000,
    };
    saveState(newState);
    if (!storedHash) {
      const newConfig = { ...config, web_password_hash: await hashPassword(DEFAULT_WEB_PASSWORD) };
      saveConfig(newConfig);
    } else if (isLegacyHash(storedHash)) {
      const newConfig = { ...config, web_password_hash: await hashPassword(password) };
      saveConfig(newConfig);
    }
    res
      .status(200)
      .setHeader(
        "Set-Cookie",
        `transrewrt_session=${sessionId}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAge}`
      )
      .json({ success: true });
  } catch (err) {
    console.error("[API] POST /api/auth/login - Error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/auth/change-password", async (req, res) => {
  try {
    const { newPassword } = req.body || {};
    if (!newPassword || typeof newPassword !== "string" || newPassword.length < 1) {
      return res.status(400).json({ error: "New password required" });
    }
    const config = loadConfig();
    const newConfig = { ...config, web_password_hash: await hashPassword(newPassword) };
    saveConfig(newConfig);
    res.json({ success: true });
  } catch (err) {
    console.error("[API] POST /api/auth/change-password - Error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/auth/logout", (req, res) => {
  try {
    const state = loadState();
    saveState({ ...state, web_session: "", web_session_expires_at: null });
    res
      .status(200)
      .setHeader(
        "Set-Cookie",
        "transrewrt_session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0"
      )
      .json({ success: true });
  } catch (err) {
    console.error("[API] POST /api/auth/logout - Error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/auth/check", (req, res) => {
  res.json({ ok: true });
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
  setSessionRefreshCookie(req, res);
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

app.get("/api/calls/total-cost", (req, res) => {
  if (!db) return res.status(503).json({ error: "Database unavailable" });
  try {
    const row = db.prepare("SELECT COALESCE(SUM(cost), 0) AS total_cost FROM api_calls").get();
    res.json({ total_cost: row?.total_cost ?? 0 });
  } catch (err) {
    console.error("[API] GET /api/calls/total-cost - Error:", err);
    res.status(500).json({ error: err.message });
  }
});

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

// Delete all rows for a single model (body: { model }). Never deletes entire table.
app.post("/api/calls/delete-by-model", (req, res) => {
  setSessionRefreshCookie(req, res);
  if (!db) {
    return res.status(503).json({ error: "Database unavailable" });
  }
  const model = req.body && req.body.model != null ? String(req.body.model).trim() : "";
  if (!model) {
    return res.status(400).json({ error: "Model name is required" });
  }
  try {
    const result = db.prepare("DELETE FROM api_calls WHERE model = ?").run(model);
    res.json({ success: true, deleted: result.changes });
  } catch (err) {
    console.error("[API] POST /api/calls/delete-by-model - Error:", err);
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
    "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
    "X-Title": "Transrewrt",
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

app.get("/api/build-info", (req, res) => {
  try {
    if (!fs.existsSync(BUILD_TIMESTAMP_PATH)) {
      return res.json({ buildTimestamp: null });
    }
    const content = fs.readFileSync(BUILD_TIMESTAMP_PATH, "utf8").trim();
    res.json({ buildTimestamp: content || null });
  } catch (err) {
    console.error("[API] GET /api/build-info - Error:", err);
    res.json({ buildTimestamp: null });
  }
});

// --- OpenRouter key limits (limit, limit_remaining, limit_reset) ---
app.get("/api/key", async (req, res) => {
  try {
    const baseUrl = getProxyBaseUrl();
    if (!baseUrl.includes("openrouter.ai")) {
      return res.status(400).json({ error: "Key info is only available for OpenRouter API." });
    }
    const keyUrl = `${baseUrl}/key`;
    const headers = getProxyHeaders();
    const keyRes = await fetch(keyUrl, { method: "GET", headers });
    const data = await keyRes.json().catch(() => ({}));
    if (!keyRes.ok) return res.status(keyRes.status).json(data);
    return res.json(data);
  } catch (err) {
    console.error("[API] GET /api/key - Error:", err);
    res.status(500).json({ error: err.message || "Failed to fetch key info." });
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
    setSessionRefreshCookie(req, res);
    response.headers.forEach((value, key) => {
      const k = key.toLowerCase();
      if (k !== "transfer-encoding" && k !== "set-cookie") {
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
      <html><head><meta charset="utf-8"><title>Transrewrt – Dev</title></head>
      <body style="font-family: system-ui; padding: 2rem; max-width: 40rem;">
        <h1>Transrewrt (dev)</h1>
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
  console.log(`[SERVER] Transrewrt server running at http://localhost:${PORT}`);
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
