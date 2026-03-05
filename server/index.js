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
const { createLogger } = require("./logger");

const app = express();
const PORT = process.env.PORT || 5000;
const CONFIG_PATH =
  process.env.CONFIG_PATH || path.join(__dirname, "..", "data", "config.json");
const STATE_PATH = path.join(path.dirname(CONFIG_PATH), "state.json");
const DEFAULT_CONFIG_PATH = path.join(
  __dirname,
  "..",
  "config",
  "config_default.json",
);
const BUILD_TIMESTAMP_PATH = path.join(__dirname, "..", "build_timestamp");

const STATE_KEYS = [
  "last_used_model",
  "settings_active_tab",
  "source_language",
  "target_language",
  "app_mode",
  "rewrite_style",
  "transform_prompt",
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
  transform_prompt: null,
  web_session: "",
  web_session_expires_at: null,
  web_view: "workspace",
};

const SESSION_STALE_GRACE_MS = 30 * 24 * 60 * 60 * 1000;

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
const ENV_API_URL = (
  process.env.API_URL || "https://openrouter.ai/api/v1"
).replace(/\/$/, "");
const ENV_KEY_SEED = (process.env.KEY_SEED || "").trim();

// Ensure data directory exists before creating logger
const dataDir = path.dirname(CONFIG_PATH);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const logToConsole = DEV_WEB || process.env.LOG_TO_CONSOLE === "1" || process.env.LOG_TO_CONSOLE === "true";
const log = createLogger(dataDir, logToConsole);

log.info("=".repeat(60));
log.info("[SERVER] Transrewrt Server starting...");
log.info(`[SERVER] Port: ${PORT}`);
if (DEV_WEB) {
  log.info(
    "[SERVER] DEV_WEB mode: only API on this port; use http://localhost:5000 for the app",
  );
}
log.info(`[SERVER] Config path: ${CONFIG_PATH}`);
log.info(`[SERVER] Default config path: ${DEFAULT_CONFIG_PATH}`);
log.info("=".repeat(60));
log.info(`[SERVER] Data directory: ${dataDir}`);
if (!fs.existsSync(dataDir)) {
  log.info(`[SERVER] Creating data directory: ${dataDir}`);
  fs.mkdirSync(dataDir, { recursive: true });
  log.info("[SERVER] Data directory created successfully");
} else {
  log.info("[SERVER] Data directory already exists");
}

// SQLite DB for API call logs
const DB_PATH = path.join(dataDir, "transrewrt.db");
const LEGACY_DB_PATH = path.join(dataDir, "poliverb.db");
if (fs.existsSync(LEGACY_DB_PATH) && !fs.existsSync(DB_PATH)) {
  fs.copyFileSync(LEGACY_DB_PATH, DB_PATH);
  log.info("[SERVER] Migrated legacy DB to transrewrt.db");
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
  db.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      created_at INTEGER NOT NULL,
      last_seen_at INTEGER NOT NULL,
      expires_at INTEGER NOT NULL,
      last_ip TEXT
    )
  `);
  db.exec("CREATE INDEX IF NOT EXISTS idx_sessions_expires_at ON sessions (expires_at)");
  db.exec("CREATE INDEX IF NOT EXISTS idx_sessions_last_seen_at ON sessions (last_seen_at)");
  try {
    db.exec("ALTER TABLE sessions ADD COLUMN last_ip TEXT");
  } catch (_) {
    // Column may already exist (e.g. from CREATE or previous migration)
  }
  try {
    db.exec("ALTER TABLE api_calls ADD COLUMN tps REAL");
  } catch (_) {
    // Column may already exist (e.g. from CREATE or previous migration)
  }
  try {
    db.exec("ALTER TABLE api_calls ADD COLUMN transform_prompt TEXT");
  } catch (_) {
    // Column may already exist
  }
  db.exec(`
    CREATE TABLE IF NOT EXISTS custom_prompts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      role TEXT NOT NULL,
      instructions TEXT NOT NULL,
      output_description TEXT DEFAULT 'transformed',
      temperature REAL DEFAULT 0.4,
      target_language TEXT DEFAULT NULL,
      created_at TEXT NOT NULL,
      updated_at TEXT NOT NULL
    )
  `);
} catch (err) {
  log.error("[SERVER] Failed to init SQLite DB: " + err.message, {
    stack: err.stack,
  });
  db = null;
}

function cleanupStalledSessions(now = Date.now()) {
  if (!db) return;
  try {
    const result = db
      .prepare("DELETE FROM sessions WHERE expires_at <= ? OR last_seen_at <= ?")
      .run(now, now - SESSION_STALE_GRACE_MS);
    if (result.changes > 0) {
      log.info(`[AUTH] Cleaned up ${result.changes} expired/stalled sessions`);
    }
  } catch (err) {
    log.error("[AUTH] Failed to clean up sessions: " + err.message, { stack: err.stack });
  }
}

// Migrate legacy single-session state to DB once, then clear deprecated fields.
function migrateLegacyStateSession() {
  if (!db) return;
  try {
    const state = loadState();
    const legacySessionId =
      typeof state.web_session === "string" ? state.web_session.trim() : "";
    const legacyExpiresAt = Number(state.web_session_expires_at);
    const hasValidExpiry = Number.isFinite(legacyExpiresAt) && legacyExpiresAt > Date.now();
    if (legacySessionId && hasValidExpiry) {
      db.prepare(
        `
          INSERT OR IGNORE INTO sessions (id, created_at, last_seen_at, expires_at, last_ip)
          VALUES (?, ?, ?, ?, ?)
        `,
      ).run(legacySessionId, Date.now(), Date.now(), legacyExpiresAt, null);
    }
    if (legacySessionId || state.web_session_expires_at != null) {
      saveState({ ...state, web_session: "", web_session_expires_at: null });
    }
    cleanupStalledSessions();
  } catch (err) {
    log.error("[AUTH] Failed to migrate legacy session state: " + err.message, {
      stack: err.stack,
    });
  }
}

if (db) {
  migrateLegacyStateSession();
  setInterval(() => cleanupStalledSessions(), 5 * 60 * 1000);
}

// Middleware
app.use(express.json({ limit: "10mb" }));

// Log all /api requests and responses to file (and console in dev)
app.use("/api", (req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    log.info("API request", {
      method: req.method,
      path: req.originalUrl || req.path,
      statusCode: res.statusCode,
      durationMs: Date.now() - start,
    });
  });
  next();
});

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
  return (
    typeof stored === "string" &&
    stored.length === LEGACY_HASH_LEN &&
    LEGACY_HEX.test(stored)
  );
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

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (forwarded) {
    const first = typeof forwarded === "string" ? forwarded.split(",")[0] : forwarded[0];
    if (first) return first.trim();
  }
  return req.socket?.remoteAddress || req.connection?.remoteAddress || "";
}

/** Set session cookie with current config timeout (sliding window). Call on translate/rewrite usage. */
function setSessionRefreshCookie(req, res) {
  const cookies = parseCookie(req.headers.cookie);
  const sessionId = cookies.transrewrt_session;
  if (!sessionId || !db) return;
  const config = loadConfig();
  const maxAge = Math.max(60, Number(config.web_session_timeout) || 604800);
  const now = Date.now();
  const expiresAt = now + maxAge * 1000;
  const ip = getClientIp(req);
  const result = db
    .prepare("UPDATE sessions SET expires_at = ?, last_seen_at = ?, last_ip = ? WHERE id = ?")
    .run(expiresAt, now, ip || null, sessionId);
  if (result.changes === 0) return;
  res.setHeader(
    "Set-Cookie",
    `transrewrt_session=${sessionId}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAge}`,
  );
}

// Web login: require session cookie for /api except POST /api/auth/login and GET /api/status
// (req.path is relative to mount, so "/api/auth/login" becomes "/auth/login")
function requireWebSession(req, res, next) {
  if (req.path === "/auth/login" && req.method === "POST") return next();
  if (req.path === "/status" && req.method === "GET") return next();
  if (req.path === "/build-info" && req.method === "GET") return next();
  if (!db) {
    log.error("[AUTH] 503: session database unavailable");
    return res.status(503).json({ error: "Database unavailable" });
  }
  const cookies = parseCookie(req.headers.cookie);
  const sessionId = cookies.transrewrt_session;

  if (!sessionId) {
    log.info("[AUTH] 401: no session cookie");
    return res.status(401).json({ error: "Authentication required" });
  }

  cleanupStalledSessions();
  const now = Date.now();
  const row = db
    .prepare("SELECT id, expires_at FROM sessions WHERE id = ?")
    .get(sessionId);
  if (!row) {
    log.info("[AUTH] 401: session cookie does not match any active DB session");
    return res.status(401).json({ error: "Authentication required" });
  }
  if (Number(row.expires_at) <= now) {
    db.prepare("DELETE FROM sessions WHERE id = ?").run(sessionId);
    log.info("[AUTH] 401: session expired; removed session from DB");
    res.setHeader(
      "Set-Cookie",
      "transrewrt_session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0",
    );
    return res.status(401).json({ error: "Authentication required" });
  }

  req.authSession = {
    id: row.id,
    expiresAt: Number(row.expires_at),
  };
  return next();
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
    log.error("[CONFIG] Failed to load config: " + err.message, { stack: err.stack });
    return {};
  } finally {
    if (release) {
      try {
        release();
      } catch (e) {
        log.error("[CONFIG] Failed to release config lock:", e.message);
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
    log.error("[STATE] Failed to load state: " + err.message, { stack: err.stack });
    return { ...DEFAULT_STATE };
  } finally {
    if (release) {
      try {
        release();
      } catch (e) {
        log.error("[STATE] Failed to release state lock:", e.message);
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
    return true;
  } catch (err) {
    log.error("[STATE] Failed to save state: " + err.message, { stack: err.stack });
    return false;
  } finally {
    if (release) {
      try {
        release();
      } catch (e) {
        log.error("[STATE] Failed to release state lock:", e.message);
      }
    }
  }
}

/** Canonical JSON stringify (sorted keys) for change detection. */
function canonicalStringify(obj) {
  if (obj === null || typeof obj !== "object") return JSON.stringify(obj);
  if (Array.isArray(obj))
    return "[" + obj.map(canonicalStringify).join(",") + "]";
  const keys = Object.keys(obj).sort();
  return (
    "{" +
    keys
      .map((k) => JSON.stringify(k) + ":" + canonicalStringify(obj[k]))
      .join(",") +
    "}"
  );
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
    if (!fs.existsSync(CONFIG_PATH))
      fs.writeFileSync(CONFIG_PATH, "{}", "utf8");
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
    log.info("[CONFIG] Config saved.");
    return true;
  } catch (err) {
    log.error("[CONFIG] Failed to save config: " + err.message, { stack: err.stack });
    return false;
  } finally {
    if (release) {
      try {
        release();
      } catch (e) {
        log.error("[CONFIG] Failed to release config lock:", e.message);
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
    const payload = {
      ...config,
      ...state,
      web_session: "",
      web_session_expires_at: req.authSession?.expiresAt ?? null,
    };
    if (ENV_KEY_SEED) payload.key_seed = ENV_KEY_SEED;
    res.json(payload);
  } catch (err) {
    log.error("[API] GET /api/config - Error: " + err.message, { stack: err.stack });
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
    log.error("[API] POST /api/config - Error: " + err.message, { stack: err.stack });
    res.status(500).json({ error: err.message });
  }
});

// --- Web login (when BASIC auth is not used) ---
app.post("/api/auth/login", async (req, res) => {
  try {
    const { password } = req.body || {};
    const config = loadConfig();
    const storedHash = config.web_password_hash;
    const valid = storedHash
      ? await verifyPassword(password, storedHash)
      : password === DEFAULT_WEB_PASSWORD;
    if (!valid) {
      return res.status(401).json({ error: "Invalid password" });
    }
    const sessionId = crypto.randomBytes(24).toString("hex");
    const maxAge = Math.max(3600, Number(config.web_session_timeout) || 604800);
    const now = Date.now();
    const ip = getClientIp(req);
    cleanupStalledSessions(now);
    if (!db) {
      return res.status(503).json({ error: "Database unavailable" });
    }
    db.prepare(
      `
        INSERT INTO sessions (id, created_at, last_seen_at, expires_at, last_ip)
        VALUES (?, ?, ?, ?, ?)
      `,
    ).run(sessionId, now, now, now + maxAge * 1000, ip || null);
    if (!storedHash) {
      const newConfig = {
        ...config,
        web_password_hash: await hashPassword(DEFAULT_WEB_PASSWORD),
      };
      saveConfig(newConfig);
    } else if (isLegacyHash(storedHash)) {
      const newConfig = {
        ...config,
        web_password_hash: await hashPassword(password),
      };
      saveConfig(newConfig);
    }
    res
      .status(200)
      .setHeader(
        "Set-Cookie",
        `transrewrt_session=${sessionId}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAge}`,
      )
      .json({ success: true });
  } catch (err) {
    log.error("[API] POST /api/auth/login - Error: " + err.message, { stack: err.stack });
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/auth/change-password", async (req, res) => {
  try {
    const { newPassword } = req.body || {};
    if (
      !newPassword ||
      typeof newPassword !== "string" ||
      newPassword.length < 1
    ) {
      return res.status(400).json({ error: "New password required" });
    }
    const config = loadConfig();
    const newConfig = {
      ...config,
      web_password_hash: await hashPassword(newPassword),
    };
    saveConfig(newConfig);
    res.json({ success: true });
  } catch (err) {
    log.error("[API] POST /api/auth/change-password - Error: " + err.message, { stack: err.stack });
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/auth/logout", (req, res) => {
  try {
    const cookies = parseCookie(req.headers.cookie);
    const sessionId = cookies.transrewrt_session;
    if (db && sessionId) {
      db.prepare("DELETE FROM sessions WHERE id = ?").run(sessionId);
    }
    res
      .status(200)
      .setHeader(
        "Set-Cookie",
        "transrewrt_session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0",
      )
      .json({ success: true });
  } catch (err) {
    log.error("[API] POST /api/auth/logout - Error: " + err.message, { stack: err.stack });
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
    const timestamp = b.timestamp || new Date().toLocaleString();
    const type = b.type || "";
    const model = b.model || "";
    const source_lang = b.source_lang || "";
    const target_lang = b.target_lang || "";
    const rewrite_style = b.rewrite_style || "";
    const transform_prompt = b.transform_prompt ?? null;
    const req_bytes = b.request_bytes ?? 0;
    const res_bytes = b.response_bytes ?? 0;
    const dur = b.duration_ms ?? 0;
    const cost = b.cost ?? 0;
    const total_cost = b.total_cost ?? 0;

    if (type === "translate") {
      log.info("[API call] translate", {
        timestamp,
        model,
        source_lang,
        target_lang,
        request_bytes: req_bytes,
        response_bytes: res_bytes,
        duration_ms: dur,
        cost,
        total_cost,
      });
    } else if (type === "transform") {
      log.info("[API call] transform", {
        timestamp,
        model,
        transform_prompt,
        target_lang: target_lang,
        request_bytes: req_bytes,
        response_bytes: res_bytes,
        duration_ms: dur,
        cost,
        total_cost,
      });
    } else {
      log.info("[API call] rewrite", {
        timestamp,
        model,
        rewrite_style,
        request_bytes: req_bytes,
        response_bytes: res_bytes,
        duration_ms: dur,
        cost,
        total_cost,
      });
    }

    const stmt = db.prepare(`
      INSERT INTO api_calls (timestamp, type, model, source_lang, target_lang, rewrite_style, transform_prompt, request_bytes, response_bytes, duration_ms, cost, total_cost, tps)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    stmt.run(
      timestamp,
      type,
      model,
      source_lang,
      target_lang,
      rewrite_style,
      transform_prompt,
      req_bytes,
      res_bytes,
      dur,
      cost,
      total_cost,
      b.tps ?? null,
    );
    res.json({ success: true });
  } catch (err) {
    log.error("[API] POST /api/calls - Error: " + err.message, { stack: err.stack });
    res.status(500).json({ error: err.message });
  }
});

// --- API call summaries (for Cost Tracking tab) ---
function buildWhereFromTo(from, to) {
  const parts = [];
  const params = [];
  if (from) {
    parts.push("timestamp >= ?");
    params.push(from);
  }
  if (to) {
    parts.push("timestamp <= ?");
    params.push(to);
  }
  return { where: parts.length ? " WHERE " + parts.join(" AND ") : "", params };
}

app.get("/api/calls/total-cost", (req, res) => {
  if (!db) return res.status(503).json({ error: "Database unavailable" });
  try {
    const row = db
      .prepare("SELECT COALESCE(SUM(cost), 0) AS total_cost FROM api_calls")
      .get();
    const total_cost = row?.total_cost ?? 0;
    log.info("GET /api/calls/total-cost", { total_cost });
    res.json({ total_cost });
  } catch (err) {
    log.error("[API] GET /api/calls/total-cost - Error: " + err.message, { stack: err.stack });
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
    log.error("[API] GET /api/calls/summary-by-function - Error: " + err.message, { stack: err.stack });
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
        SUM(CASE WHEN type = 'transform' THEN 1 ELSE 0 END) AS transform_calls,
        SUM(CASE WHEN type = 'translate' THEN COALESCE(cost, 0) ELSE 0 END) AS translation_cost,
        SUM(CASE WHEN type = 'rewrite' THEN COALESCE(cost, 0) ELSE 0 END) AS rewrite_cost,
        SUM(CASE WHEN type = 'transform' THEN COALESCE(cost, 0) ELSE 0 END) AS transform_cost,
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
        const trc = r.transform_calls || 0;
        const totalCalls = tc + rc + trc;
        const avgTps =
          r.avg_tps != null && Number(r.avg_tps) > 0 ? Number(r.avg_tps) : null;
        if (avgTps != null && totalCalls > 0) {
          weightedTpsNum += avgTps * totalCalls;
          weightedTpsDenom += totalCalls;
        }
        return {
          translation_calls: acc.translation_calls + tc,
          rewrite_calls: acc.rewrite_calls + rc,
          transform_calls: acc.transform_calls + trc,
          translation_cost: acc.translation_cost + (r.translation_cost || 0),
          rewrite_cost: acc.rewrite_cost + (r.rewrite_cost || 0),
          transform_cost: acc.transform_cost + (r.transform_cost || 0),
        };
      },
      {
        translation_calls: 0,
        rewrite_calls: 0,
        transform_calls: 0,
        translation_cost: 0,
        rewrite_cost: 0,
        transform_cost: 0,
      },
    );
    const totalAvgTps =
      weightedTpsDenom > 0 ? weightedTpsNum / weightedTpsDenom : null;
    rows.push({ model: "Total", ...totals, avg_tps: totalAvgTps });
    res.json({ rows });
  } catch (err) {
    log.error("[API] GET /api/calls/summary-by-model - Error: " + err.message, { stack: err.stack });
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
        SUM(CASE WHEN type = 'transform' THEN 1 ELSE 0 END) AS transform_calls,
        SUM(CASE WHEN type = 'translate' THEN COALESCE(cost, 0) ELSE 0 END) AS translation_cost,
        SUM(CASE WHEN type = 'rewrite' THEN COALESCE(cost, 0) ELSE 0 END) AS rewrite_cost,
        SUM(CASE WHEN type = 'transform' THEN COALESCE(cost, 0) ELSE 0 END) AS transform_cost
      FROM api_calls ${where}
      GROUP BY date(timestamp)
      ORDER BY day DESC
    `;
    const rows = db.prepare(sql).all(...params);
    res.json({ rows });
  } catch (err) {
    log.error("[API] GET /api/calls/summary-by-day - Error: " + err.message, { stack: err.stack });
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/calls/summary-by-target-lang", (req, res) => {
  if (!db) return res.status(503).json({ error: "Database unavailable" });
  try {
    const { where, params } = buildWhereFromTo(req.query.from, req.query.to);
    const andPart = where ? where.replace(" WHERE ", "") : "";
    const fullWhere = " WHERE type = 'translate'" + (andPart ? " AND " + andPart : "");
    const sql = `
      SELECT COALESCE(target_lang, '(none)') AS target_lang, COUNT(*) AS calls, COALESCE(SUM(cost), 0) AS cost
      FROM api_calls ${fullWhere}
      GROUP BY target_lang
      ORDER BY calls DESC
    `;
    const rows = db.prepare(sql).all(...params);
    res.json({ rows });
  } catch (err) {
    log.error("[API] GET /api/calls/summary-by-target-lang - Error: " + err.message, { stack: err.stack });
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/calls/summary-by-rewrite-style", (req, res) => {
  if (!db) return res.status(503).json({ error: "Database unavailable" });
  try {
    const { where, params } = buildWhereFromTo(req.query.from, req.query.to);
    const andPart = where ? where.replace(" WHERE ", "") : "";
    const fullWhere = " WHERE type = 'rewrite'" + (andPart ? " AND " + andPart : "");
    const sql = `
      SELECT COALESCE(rewrite_style, '(none)') AS rewrite_style, COUNT(*) AS calls, COALESCE(SUM(cost), 0) AS cost
      FROM api_calls ${fullWhere}
      GROUP BY rewrite_style
      ORDER BY calls DESC
    `;
    const rows = db.prepare(sql).all(...params);
    res.json({ rows });
  } catch (err) {
    log.error("[API] GET /api/calls/summary-by-rewrite-style - Error: " + err.message, { stack: err.stack });
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/calls/summary-by-transform-prompt", (req, res) => {
  if (!db) return res.status(503).json({ error: "Database unavailable" });
  try {
    const { where, params } = buildWhereFromTo(req.query.from, req.query.to);
    const andPart = where ? where.replace(" WHERE ", "") : "";
    const fullWhere = " WHERE type = 'transform'" + (andPart ? " AND " + andPart : "");
    const sql = `
      SELECT COALESCE(transform_prompt, '(none)') AS transform_prompt, COUNT(*) AS calls, COALESCE(SUM(cost), 0) AS cost
      FROM api_calls ${fullWhere}
      GROUP BY transform_prompt
      ORDER BY calls DESC
    `;
    const rows = db.prepare(sql).all(...params);
    res.json({ rows });
  } catch (err) {
    log.error("[API] GET /api/calls/summary-by-transform-prompt - Error: " + err.message, { stack: err.stack });
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/calls/all", (req, res) => {
  if (!db) return res.status(503).json({ error: "Database unavailable" });
  try {
    const { where, params } = buildWhereFromTo(req.query.from, req.query.to);
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const pageSize = Math.min(200, Math.max(1, parseInt(req.query.pageSize, 10) || 50));
    const countRow = db.prepare(`SELECT COUNT(*) AS total FROM api_calls${where}`).get(...params);
    const total = countRow?.total ?? 0;
    const offset = (page - 1) * pageSize;
    const rows = db.prepare(
      `SELECT * FROM api_calls${where} ORDER BY timestamp DESC LIMIT ? OFFSET ?`
    ).all(...params, pageSize, offset);
    res.json({ rows, total, page, pageSize });
  } catch (err) {
    log.error("[API] GET /api/calls/all - Error: " + err.message, { stack: err.stack });
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/calls/summary-by-day-paginated", (req, res) => {
  if (!db) return res.status(503).json({ error: "Database unavailable" });
  try {
    const { where, params } = buildWhereFromTo(req.query.from, req.query.to);
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const pageSize = Math.min(200, Math.max(1, parseInt(req.query.pageSize, 10) || 50));
    const countRow = db.prepare(
      `SELECT COUNT(DISTINCT date(timestamp)) AS total FROM api_calls${where}`
    ).get(...params);
    const total = countRow?.total ?? 0;
    const offset = (page - 1) * pageSize;
    const sql = `
      SELECT date(timestamp) AS day,
        SUM(CASE WHEN type = 'translate' THEN 1 ELSE 0 END) AS translation_calls,
        SUM(CASE WHEN type = 'rewrite' THEN 1 ELSE 0 END) AS rewrite_calls,
        SUM(CASE WHEN type = 'transform' THEN 1 ELSE 0 END) AS transform_calls,
        SUM(CASE WHEN type = 'translate' THEN COALESCE(cost, 0) ELSE 0 END) AS translation_cost,
        SUM(CASE WHEN type = 'rewrite' THEN COALESCE(cost, 0) ELSE 0 END) AS rewrite_cost,
        SUM(CASE WHEN type = 'transform' THEN COALESCE(cost, 0) ELSE 0 END) AS transform_cost
      FROM api_calls ${where}
      GROUP BY date(timestamp) ORDER BY day DESC LIMIT ? OFFSET ?
    `;
    const rows = db.prepare(sql).all(...params, pageSize, offset);
    res.json({ rows, total, page, pageSize });
  } catch (err) {
    log.error("[API] GET /api/calls/summary-by-day-paginated - Error: " + err.message, { stack: err.stack });
    res.status(500).json({ error: err.message });
  }
});

// Delete all rows for a single model (body: { model }). Never deletes entire table.
app.post("/api/calls/delete-by-model", (req, res) => {
  setSessionRefreshCookie(req, res);
  if (!db) {
    return res.status(503).json({ error: "Database unavailable" });
  }
  const model =
    req.body && req.body.model != null ? String(req.body.model).trim() : "";
  if (!model) {
    return res.status(400).json({ error: "Model name is required" });
  }
  try {
    const result = db
      .prepare("DELETE FROM api_calls WHERE model = ?")
      .run(model);
    res.json({ success: true, deleted: result.changes });
  } catch (err) {
    log.error("[API] POST /api/calls/delete-by-model - Error: " + err.message, { stack: err.stack });
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
    log.error("[API] DELETE /api/calls - Error: " + err.message, { stack: err.stack });
    res.status(500).json({ error: err.message });
  }
});

// --- Custom prompts (Transform feature) ---
app.get("/api/custom-prompts", (req, res) => {
  if (!db) return res.status(503).json({ error: "Database unavailable" });
  try {
    const rows = db.prepare("SELECT * FROM custom_prompts ORDER BY name ASC").all();
    res.json(rows);
  } catch (err) {
    log.error("[API] GET /api/custom-prompts - Error: " + err.message, { stack: err.stack });
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/custom-prompts", (req, res) => {
  setSessionRefreshCookie(req, res);
  if (!db) return res.status(503).json({ error: "Database unavailable" });
  try {
    const b = req.body || {};
    const now = new Date().toISOString();
    const instructions = typeof b.instructions === "string" ? b.instructions : JSON.stringify(b.instructions || []);
    const result = db.prepare(
      `INSERT INTO custom_prompts (name, role, instructions, output_description, temperature, target_language, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    ).run(
      b.name || "",
      b.role || "",
      instructions,
      b.output_description ?? "transformed",
      b.temperature ?? 0.4,
      b.target_language ?? null,
      now,
      now
    );
    res.status(201).json({ id: result.lastInsertRowid, success: true });
  } catch (err) {
    log.error("[API] POST /api/custom-prompts - Error: " + err.message, { stack: err.stack });
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/custom-prompts/:id", (req, res) => {
  setSessionRefreshCookie(req, res);
  if (!db) return res.status(503).json({ error: "Database unavailable" });
  try {
    const id = parseInt(req.params.id, 10);
    if (!Number.isFinite(id)) return res.status(400).json({ error: "Invalid id" });
    const b = req.body || {};
    const now = new Date().toISOString();
    const instructions = typeof b.instructions === "string" ? b.instructions : JSON.stringify(b.instructions || []);
    const result = db.prepare(
      `UPDATE custom_prompts SET name = ?, role = ?, instructions = ?, output_description = ?, temperature = ?, target_language = ?, updated_at = ? WHERE id = ?`
    ).run(
      b.name || "",
      b.role || "",
      instructions,
      b.output_description ?? "transformed",
      b.temperature ?? 0.4,
      b.target_language ?? null,
      now,
      id
    );
    if (result.changes === 0) return res.status(404).json({ error: "Prompt not found" });
    res.json({ success: true });
  } catch (err) {
    log.error("[API] PUT /api/custom-prompts/:id - Error: " + err.message, { stack: err.stack });
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/custom-prompts/:id", (req, res) => {
  setSessionRefreshCookie(req, res);
  if (!db) return res.status(503).json({ error: "Database unavailable" });
  try {
    const id = parseInt(req.params.id, 10);
    if (!Number.isFinite(id)) return res.status(400).json({ error: "Invalid id" });
    const result = db.prepare("DELETE FROM custom_prompts WHERE id = ?").run(id);
    if (result.changes === 0) return res.status(404).json({ error: "Prompt not found" });
    res.json({ success: true });
  } catch (err) {
    log.error("[API] DELETE /api/custom-prompts/:id - Error: " + err.message, { stack: err.stack });
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/custom-prompts/export", (req, res) => {
  if (!db) return res.status(503).json({ error: "Database unavailable" });
  try {
    const rows = db.prepare("SELECT * FROM custom_prompts ORDER BY name ASC").all();
    res.json(rows);
  } catch (err) {
    log.error("[API] GET /api/custom-prompts/export - Error: " + err.message, { stack: err.stack });
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/custom-prompts/import", (req, res) => {
  setSessionRefreshCookie(req, res);
  if (!db) return res.status(503).json({ error: "Database unavailable" });
  try {
    const body = Array.isArray(req.body) ? req.body : (req.body?.prompts || []);
    const mode = req.body?.mode || "merge"; // merge | replace
    const now = new Date().toISOString();
    if (mode === "replace") {
      db.prepare("DELETE FROM custom_prompts").run();
    }
    const insert = db.prepare(
      `INSERT INTO custom_prompts (name, role, instructions, output_description, temperature, target_language, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    );
    const update = db.prepare(
      `UPDATE custom_prompts SET role = ?, instructions = ?, output_description = ?, temperature = ?, target_language = ?, updated_at = ? WHERE name = ?`
    );
    let count = 0;
    for (const p of body) {
      if (!p || !p.name) continue;
      const instructions = typeof p.instructions === "string" ? p.instructions : JSON.stringify(p.instructions || []);
      try {
        insert.run(p.name, p.role || "", instructions, p.output_description ?? "transformed", p.temperature ?? 0.4, p.target_language ?? null, p.created_at || now, now);
        count++;
      } catch (e) {
        if (mode === "merge" && /UNIQUE constraint/.test(e.message)) {
          update.run(p.role || "", instructions, p.output_description ?? "transformed", p.temperature ?? 0.4, p.target_language ?? null, now, p.name);
          count++;
        } else {
          throw e;
        }
      }
    }
    res.json({ success: true, count });
  } catch (err) {
    log.error("[API] POST /api/custom-prompts/import - Error: " + err.message, { stack: err.stack });
    res.status(500).json({ error: err.message });
  }
});

// --- OpenRouter Proxy (uses ENV_API_KEY/ENV_API_URL when set, else config) ---

function getProxyHeaders() {
  const apiKey = ENV_API_KEY || loadConfig().api_key || "";
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
    "HTTP-Referer": "https://github.com/wsj-br/transrewrt",
    "X-Title": "Transrewrt",
  };
}

function getProxyBaseUrl() {
  return ENV_API_KEY
    ? ENV_API_URL
    : (loadConfig().api_url || "https://openrouter.ai/api/v1").replace(
        /\/$/,
        "",
      );
}

// --- API status (check if API key is set and valid) - no auth required ---
app.get("/api/status", async (req, res) => {
  try {
    const apiKey = ENV_API_KEY || loadConfig().api_key || "";
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
      apiKeySet: !!(ENV_API_KEY || loadConfig().api_key || "")?.trim(),
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
    log.error("[API] GET /api/build-info - Error: " + err.message, { stack: err.stack });
    res.json({ buildTimestamp: null });
  }
});

// --- OpenRouter key limits (limit, limit_remaining, limit_reset) ---
app.get("/api/key", async (req, res) => {
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
    log.error("Proxy error: " + err.message, { stack: err.stack });
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
    log.error("Proxy error: " + err.message, { stack: err.stack });
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
    log.error("Proxy error: " + err.message, { stack: err.stack });
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
  log.info("=".repeat(60));
  log.info(`[SERVER] Transrewrt server running at http://localhost:${PORT}`);
  log.info(`[SERVER] Config path: ${CONFIG_PATH}`);
  log.info("[SERVER] Loading initial config...");
  const initialConfig = loadConfig();
  if (ENV_API_KEY) {
    log.info(
      "[SERVER] API Key is being loaded from environment variable API_KEY",
    );
  } else if (initialConfig.api_key) {
    log.info(
      `[SERVER] API Key present in initial config: ${initialConfig.api_key.substring(0, 8)}...`,
    );
  } else {
    log.info("[SERVER] No API Key in initial config");
  }
  if (ENV_KEY_SEED) {
    log.info("[SERVER] KEY_SEED is being loaded from environment variable KEY_SEED");
  }
  log.info("[SERVER] Server ready to accept requests");
  log.info("=".repeat(60));
});
