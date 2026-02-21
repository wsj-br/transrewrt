/**
 * SQLite cost-tracking DB for Electron (same schema as server).
 * DB path: userData/transrewrt.db. Legacy poliverb.db in userData is migrated on first run.
 */

const path = require("path");
const fs = require("fs");
const Database = require("better-sqlite3");

let db = null;
let userDataPath = null;

function getDb() {
  if (db) return db;
  if (!userDataPath) {
    console.error("[costDb] userDataPath not set (registerCostDbHandlers not called or called without getPath)");
    return null;
  }
  const DB_PATH = path.join(userDataPath, "transrewrt.db");
  const LEGACY_PATH = path.join(userDataPath, "poliverb.db");
  try {
    if (!fs.existsSync(userDataPath)) {
      fs.mkdirSync(userDataPath, { recursive: true });
    }
    if (fs.existsSync(LEGACY_PATH) && !fs.existsSync(DB_PATH)) {
      fs.copyFileSync(LEGACY_PATH, DB_PATH);
    }
    db = new Database(DB_PATH);
  } catch (err) {
    console.error("[costDb] Failed to open database at", DB_PATH, err);
    return null;
  }
  try {
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
    db.exec("ALTER TABLE api_calls ADD COLUMN tps REAL");
  } catch (_) {
    /* column may already exist */
  }
  return db;
}

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

function registerCostDbHandlers(ipcMain, getUserDataPath) {
  userDataPath = getUserDataPath();
  if (!userDataPath) {
    console.error("[costDb] getUserDataPath() returned empty");
    return;
  }
  // Initialize DB on startup so transrewrt.db is created and any load error is surfaced
  const d = getDb();
  if (d) {
    console.log("[costDb] Database ready at", path.join(userDataPath, "transrewrt.db"));
  }

  ipcMain.handle("costDb:log", (_, payload) => {
    try {
      const d = getDb();
      if (!d) return { success: false, total_cost: 0 };
      const b = payload || {};
      d.prepare(
        `INSERT INTO api_calls (timestamp, type, model, source_lang, target_lang, rewrite_style, request_bytes, response_bytes, duration_ms, cost, total_cost, tps)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).run(
        b.timestamp || new Date().toISOString(),
        b.type || "",
        b.model ?? null,
        b.source_lang ?? null,
        b.target_lang ?? null,
        b.rewrite_style ?? null,
        b.request_bytes ?? null,
        b.response_bytes ?? null,
        b.duration_ms ?? null,
        b.cost ?? null,
        b.total_cost ?? null,
        b.tps ?? null
      );
      const row = d.prepare("SELECT COALESCE(SUM(cost), 0) AS total_cost FROM api_calls").get();
      return { success: true, total_cost: row?.total_cost ?? 0 };
    } catch (err) {
      console.error("[costDb] log error:", err);
      return { success: false, total_cost: 0 };
    }
  });

  ipcMain.handle("costDb:getTotalCost", () => {
    try {
      const d = getDb();
      if (!d) return { total_cost: 0 };
      const row = d.prepare("SELECT COALESCE(SUM(cost), 0) AS total_cost FROM api_calls").get();
      return { total_cost: row?.total_cost ?? 0 };
    } catch (err) {
      console.error("[costDb] getTotalCost error:", err);
      return { total_cost: 0 };
    }
  });

  ipcMain.handle("costDb:getSummaryByFunction", (_, from, to) => {
    try {
      const d = getDb();
      if (!d) return { rows: [] };
      const { where, params } = buildWhereFromTo(from, to);
      const sql = `SELECT type AS function, COUNT(*) AS calls, COALESCE(SUM(cost), 0) AS cost FROM api_calls ${where} GROUP BY type`;
      const rows = d.prepare(sql).all(...params);
      const totalCalls = rows.reduce((s, r) => s + r.calls, 0);
      const totalCost = rows.reduce((s, r) => s + (r.cost || 0), 0);
      rows.push({ function: "Total", calls: totalCalls, cost: totalCost });
      return { rows };
    } catch (err) {
      console.error("[costDb] getSummaryByFunction error:", err);
      return { rows: [] };
    }
  });

  ipcMain.handle("costDb:getSummaryByModel", (_, from, to) => {
    try {
      const d = getDb();
      if (!d) return { rows: [] };
      const { where, params } = buildWhereFromTo(from, to);
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
      const rows = d.prepare(sql).all(...params);
      const totals = rows.reduce(
        (acc, r) => ({
          translation_calls: acc.translation_calls + (r.translation_calls || 0),
          rewrite_calls: acc.rewrite_calls + (r.rewrite_calls || 0),
          translation_cost: acc.translation_cost + (r.translation_cost || 0),
          rewrite_cost: acc.rewrite_cost + (r.rewrite_cost || 0),
        }),
        { translation_calls: 0, rewrite_calls: 0, translation_cost: 0, rewrite_cost: 0 }
      );
      let weightedTpsNum = 0;
      let weightedTpsDenom = 0;
      rows.forEach((r) => {
        const tc = r.translation_calls || 0;
        const rc = r.rewrite_calls || 0;
        const n = tc + rc;
        const avgTps = r.avg_tps != null && Number(r.avg_tps) > 0 ? Number(r.avg_tps) : null;
        if (avgTps != null && n > 0) {
          weightedTpsNum += avgTps * n;
          weightedTpsDenom += n;
        }
      });
      const totalAvgTps = weightedTpsDenom > 0 ? weightedTpsNum / weightedTpsDenom : null;
      rows.push({ model: "Total", ...totals, avg_tps: totalAvgTps });
      return { rows };
    } catch (err) {
      console.error("[costDb] getSummaryByModel error:", err);
      return { rows: [] };
    }
  });

  ipcMain.handle("costDb:getSummaryByDay", (_, from, to) => {
    try {
      const d = getDb();
      if (!d) return { rows: [] };
      const { where, params } = buildWhereFromTo(from, to);
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
      const rows = d.prepare(sql).all(...params);
      return { rows };
    } catch (err) {
      console.error("[costDb] getSummaryByDay error:", err);
      return { rows: [] };
    }
  });

  ipcMain.handle("costDb:deleteOutsideRange", (_, from, to) => {
    try {
      const d = getDb();
      if (!d) return;
      if (!from && !to) {
        d.prepare("DELETE FROM api_calls").run();
      } else {
        const cutoff = from || to;
        d.prepare("DELETE FROM api_calls WHERE timestamp < ?").run(cutoff);
      }
    } catch (err) {
      console.error("[costDb] deleteOutsideRange error:", err);
    }
  });

  ipcMain.handle("costDb:deleteByModel", (_, model) => {
    try {
      const d = getDb();
      if (!d) return { deleted: 0 };
      const name = model != null ? String(model).trim() : "";
      if (!name) return { deleted: 0 };
      const result = d.prepare("DELETE FROM api_calls WHERE model = ?").run(name);
      return { deleted: result.changes };
    } catch (err) {
      console.error("[costDb] deleteByModel error:", err);
      return { deleted: 0 };
    }
  });
}

module.exports = { registerCostDbHandlers };
