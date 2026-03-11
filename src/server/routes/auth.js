/**
 * Routes: POST /api/auth/login, change-password, logout; GET /api/auth/check.
 * Middleware: requireWebSession. Helper: setSessionRefreshCookie.
 * Multi-user: login with username+password; sessions tied to users table.
 */

const crypto = require("crypto");
const express = require("express");
const argon2 = require("argon2");

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
 * @param {object} configFile - readConfig, writeConfig (for web_session_timeout only)
 * @param {object} appDb - cleanupStalledSessions
 * @param {object} log
 */
module.exports = function createAuth(getDb, configFile, appDb, log) {
  const { readConfig } = configFile;
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

  /** Must match src/renderer/constants.js DEFAULT_ADMIN_USERNAME */
  const DEFAULT_ADMIN_USERNAME = "admin";

  function requireWebSession(req, res, next) {
    if (req.path === "/auth/login" && req.method === "POST") return next();
    const pathname = (req.originalUrl || req.url || "").split("?")[0] || "";
    const isFirstLoginInfo = req.method === "GET" && (
      pathname.includes("/auth/first-login-info") ||
      (req.path && String(req.path).includes("first-login-info"))
    );
    if (isFirstLoginInfo) return next();
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
    const row = db.prepare("SELECT id, user_id, expires_at FROM sessions WHERE id = ?").get(sessionId);
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

    const user = db.prepare("SELECT id, username, role, must_change_password FROM users WHERE id = ?").get(row.user_id);
    if (!user) {
      db.prepare("DELETE FROM sessions WHERE id = ?").run(sessionId);
      res.setHeader(
        "Set-Cookie",
        "transrewrt_session=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0",
      );
      return res.status(401).json({ error: "Authentication required" });
    }

    req.authSession = {
      id: row.id,
      userId: user.id,
      username: user.username,
      role: user.role,
      mustChangePassword: !!user.must_change_password,
      expiresAt: Number(row.expires_at),
    };
    return next();
  }

  const router = express.Router();

  router.get("/first-login-info", (req, res) => {
    try {
      const db = getDb();
      if (!db) {
        return res.status(503).json({ firstLogin: false });
      }
      const adminUsername = (DEFAULT_ADMIN_USERNAME || "").toLowerCase();
      if (!adminUsername) {
        return res.json({ firstLogin: false });
      }
      const row = db.prepare(
        "SELECT last_login FROM users WHERE LOWER(username) = ? LIMIT 1",
      ).get(adminUsername);
      const firstLogin = !!row && row.last_login == null;
      return res.json({ firstLogin });
    } catch (err) {
      log.error("[API] GET /api/auth/first-login-info - Error: " + err.message, { stack: err.stack });
      return res.status(500).json({ firstLogin: false });
    }
  });

  router.post("/login", async (req, res) => {
    try {
      const { username, password } = req.body || {};
      if (!username || typeof username !== "string" || !password || typeof password !== "string") {
        return res.status(400).json({ error: "Username and password required" });
      }
      const normalizedUsername = username.trim().toLowerCase();
      if (!normalizedUsername) {
        return res.status(400).json({ error: "Username required" });
      }

      const db = getDb();
      if (!db) {
        return res.status(503).json({ error: "Database unavailable" });
      }
      const user = db.prepare(
        "SELECT id, username, password_hash, role, must_change_password FROM users WHERE LOWER(username) = ?",
      ).get(normalizedUsername);
      if (!user) {
        return res.status(401).json({ error: "Invalid username or password" });
      }
      const valid = await verifyPassword(password, user.password_hash);
      if (!valid) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      const config = readConfig();
      const maxAge = Math.max(3600, Number(config.web_session_timeout) || 604800);
      const now = Date.now();
      const ip = getClientIp(req);
      cleanupStalledSessions(now);
      const sessionId = crypto.randomBytes(24).toString("hex");
      db.prepare(
        `INSERT INTO sessions (id, user_id, created_at, last_seen_at, expires_at, last_ip)
         VALUES (?, ?, ?, ?, ?, ?)`,
      ).run(sessionId, user.id, now, now, now + maxAge * 1000, ip || null);
      db.prepare("UPDATE users SET last_login = ? WHERE id = ?").run(now, user.id);

      res
        .status(200)
        .setHeader(
          "Set-Cookie",
          `transrewrt_session=${sessionId}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAge}`,
        )
        .json({
          success: true,
          username: user.username,
          role: user.role,
          mustChangePassword: !!user.must_change_password,
        });
    } catch (err) {
      log.error("[API] POST /api/auth/login - Error: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.post("/change-password", async (req, res) => {
    try {
      const { newPassword } = req.body || {};
      if (!newPassword || typeof newPassword !== "string" || newPassword.length < 1) {
        return res.status(400).json({ error: "New password required" });
      }
      const db = getDb();
      if (!db) return res.status(503).json({ error: "Database unavailable" });
      const session = req.authSession;
      if (!session || !session.userId) {
        return res.status(401).json({ error: "Authentication required" });
      }
      const user = db.prepare("SELECT id FROM users WHERE id = ?").get(session.userId);
      if (!user) {
        return res.status(401).json({ error: "User not found" });
      }
      const now = Date.now();
      const passwordHash = await hashPassword(newPassword);
      db.prepare(
        "UPDATE users SET password_hash = ?, last_update = ?, must_change_password = 0 WHERE id = ?",
      ).run(passwordHash, now, session.userId);
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
    const session = req.authSession;
    res.json({
      ok: true,
      username: session?.username ?? null,
      role: session?.role ?? null,
      mustChangePassword: session?.mustChangePassword ?? false,
    });
  });

  return { router, requireWebSession, setSessionRefreshCookie };
};
