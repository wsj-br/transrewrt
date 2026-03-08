/**
 * Routes: POST /api/auth/login, change-password, logout; GET /api/auth/check.
 * Middleware: requireWebSession. Helper: setSessionRefreshCookie.
 */

const crypto = require("crypto");
const express = require("express");
const argon2 = require("argon2");

const DEFAULT_WEB_PASSWORD = "transrewrt26";

async function hashPassword(password) {
  return argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 19456,
    timeCost: 2,
    parallelism: 1,
  });
}

async function verifyPassword(password, storedHash) {
  if (!storedHash) return false;
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

/**
 * @param {function} getDb
 * @param {object} configFile - readConfig, writeConfig, loadState, saveState
 * @param {object} appDb - cleanupStalledSessions
 * @param {object} log
 */
module.exports = function createAuth(getDb, configFile, appDb, log) {
  const { readConfig, writeConfig } = configFile;
  const { cleanupStalledSessions } = appDb;

  function setSessionRefreshCookie(req, res) {
    const cookies = parseCookie(req.headers.cookie);
    const sessionId = cookies.transrewrt_session;
    const db = getDb();
    if (!sessionId || !db) return;
    const config = readConfig();
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

  function requireWebSession(req, res, next) {
    if (req.path === "/auth/login" && req.method === "POST") return next();
    if (req.path === "/status" && req.method === "GET") return next();
    if (req.path === "/build-info" && req.method === "GET") return next();
    const db = getDb();
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
    const row = db.prepare("SELECT id, expires_at FROM sessions WHERE id = ?").get(sessionId);
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

    req.authSession = { id: row.id, expiresAt: Number(row.expires_at) };
    return next();
  }

  const router = express.Router();

  router.post("/login", async (req, res) => {
    try {
      const { password } = req.body || {};
      const config = readConfig();
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
      const db = getDb();
      if (!db) {
        return res.status(503).json({ error: "Database unavailable" });
      }
      db.prepare(
        `INSERT INTO sessions (id, created_at, last_seen_at, expires_at, last_ip)
         VALUES (?, ?, ?, ?, ?)`,
      ).run(sessionId, now, now, now + maxAge * 1000, ip || null);
      if (!storedHash) {
        const newConfig = {
          ...config,
          web_password_hash: await hashPassword(DEFAULT_WEB_PASSWORD),
        };
        writeConfig(newConfig);
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

  router.post("/change-password", async (req, res) => {
    try {
      const { newPassword } = req.body || {};
      if (
        !newPassword ||
        typeof newPassword !== "string" ||
        newPassword.length < 1
      ) {
        return res.status(400).json({ error: "New password required" });
      }
      const config = readConfig();
      const newConfig = {
        ...config,
        web_password_hash: await hashPassword(newPassword),
      };
      writeConfig(newConfig);
      res.json({ success: true });
    } catch (err) {
      log.error("[API] POST /api/auth/change-password - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/logout", (req, res) => {
    try {
      const cookies = parseCookie(req.headers.cookie);
      const sessionId = cookies.transrewrt_session;
      const db = getDb();
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

  router.get("/check", (req, res) => {
    res.json({ ok: true });
  });

  return { router, requireWebSession, setSessionRefreshCookie };
};
