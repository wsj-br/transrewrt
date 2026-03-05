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
  try {
    db.exec("ALTER TABLE api_calls ADD COLUMN transform_prompt TEXT");
  } catch (_) {
    /* column may already exist */
  }
  try {
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
  } catch (_) {
    /* table may already exist */
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
        `INSERT INTO api_calls (timestamp, type, model, source_lang, target_lang, rewrite_style, transform_prompt, request_bytes, response_bytes, duration_ms, cost, total_cost, tps)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      ).run(
        b.timestamp || new Date().toISOString(),
        b.type || "",
        b.model ?? null,
        b.source_lang ?? null,
        b.target_lang ?? null,
        b.rewrite_style ?? null,
        b.transform_prompt ?? null,
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
          SUM(CASE WHEN type = 'transform' THEN 1 ELSE 0 END) AS transform_calls,
          SUM(CASE WHEN type = 'translate' THEN COALESCE(cost, 0) ELSE 0 END) AS translation_cost,
          SUM(CASE WHEN type = 'rewrite' THEN COALESCE(cost, 0) ELSE 0 END) AS rewrite_cost,
          SUM(CASE WHEN type = 'transform' THEN COALESCE(cost, 0) ELSE 0 END) AS transform_cost,
          AVG(CASE WHEN tps IS NOT NULL AND tps > 0 THEN tps ELSE NULL END) AS avg_tps
        FROM api_calls ${where}
        GROUP BY model
      `;
      const rows = d.prepare(sql).all(...params);
      const totals = rows.reduce(
        (acc, r) => ({
          translation_calls: acc.translation_calls + (r.translation_calls || 0),
          rewrite_calls: acc.rewrite_calls + (r.rewrite_calls || 0),
          transform_calls: acc.transform_calls + (r.transform_calls || 0),
          translation_cost: acc.translation_cost + (r.translation_cost || 0),
          rewrite_cost: acc.rewrite_cost + (r.rewrite_cost || 0),
          transform_cost: acc.transform_cost + (r.transform_cost || 0),
        }),
        { translation_calls: 0, rewrite_calls: 0, transform_calls: 0, translation_cost: 0, rewrite_cost: 0, transform_cost: 0 }
      );
      let weightedTpsNum = 0;
      let weightedTpsDenom = 0;
      rows.forEach((r) => {
        const tc = r.translation_calls || 0;
        const rc = r.rewrite_calls || 0;
        const trc = r.transform_calls || 0;
        const n = tc + rc + trc;
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
          SUM(CASE WHEN type = 'transform' THEN 1 ELSE 0 END) AS transform_calls,
          SUM(CASE WHEN type = 'translate' THEN COALESCE(cost, 0) ELSE 0 END) AS translation_cost,
          SUM(CASE WHEN type = 'rewrite' THEN COALESCE(cost, 0) ELSE 0 END) AS rewrite_cost,
          SUM(CASE WHEN type = 'transform' THEN COALESCE(cost, 0) ELSE 0 END) AS transform_cost
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

  ipcMain.handle("costDb:getSummaryByTargetLang", (_, from, to) => {
    try {
      const d = getDb();
      if (!d) return { rows: [] };
      const { where, params } = buildWhereFromTo(from, to);
      const andPart = where ? where.replace(" WHERE ", "") : "";
      const fullWhere = " WHERE type = 'translate'" + (andPart ? " AND " + andPart : "");
      const sql = `
        SELECT COALESCE(target_lang, '(none)') AS target_lang, COUNT(*) AS calls, COALESCE(SUM(cost), 0) AS cost
        FROM api_calls ${fullWhere}
        GROUP BY target_lang
        ORDER BY calls DESC
      `;
      const rows = d.prepare(sql).all(...params);
      return { rows };
    } catch (err) {
      console.error("[costDb] getSummaryByTargetLang error:", err);
      return { rows: [] };
    }
  });

  ipcMain.handle("costDb:getSummaryByTransformPrompt", (_, from, to) => {
    try {
      const d = getDb();
      if (!d) return { rows: [] };
      const { where, params } = buildWhereFromTo(from, to);
      const andPart = where ? where.replace(" WHERE ", "") : "";
      const fullWhere = " WHERE type = 'transform'" + (andPart ? " AND " + andPart : "");
      const sql = `
        SELECT COALESCE(transform_prompt, '(none)') AS transform_prompt, COUNT(*) AS calls, COALESCE(SUM(cost), 0) AS cost
        FROM api_calls ${fullWhere}
        GROUP BY transform_prompt
        ORDER BY calls DESC
      `;
      const rows = d.prepare(sql).all(...params);
      return { rows };
    } catch (err) {
      console.error("[costDb] getSummaryByTransformPrompt error:", err);
      return { rows: [] };
    }
  });

  ipcMain.handle("costDb:getSummaryByRewriteStyle", (_, from, to) => {
    try {
      const d = getDb();
      if (!d) return { rows: [] };
      const { where, params } = buildWhereFromTo(from, to);
      const andPart = where ? where.replace(" WHERE ", "") : "";
      const fullWhere = " WHERE type = 'rewrite'" + (andPart ? " AND " + andPart : "");
      const sql = `
        SELECT COALESCE(rewrite_style, '(none)') AS rewrite_style, COUNT(*) AS calls, COALESCE(SUM(cost), 0) AS cost
        FROM api_calls ${fullWhere}
        GROUP BY rewrite_style
        ORDER BY calls DESC
      `;
      const rows = d.prepare(sql).all(...params);
      return { rows };
    } catch (err) {
      console.error("[costDb] getSummaryByRewriteStyle error:", err);
      return { rows: [] };
    }
  });

  ipcMain.handle("costDb:getAllCalls", (_, from, to, page, pageSize) => {
    try {
      const d = getDb();
      if (!d) return { rows: [], total: 0 };
      const { where, params } = buildWhereFromTo(from, to);
      const countRow = d.prepare(`SELECT COUNT(*) AS total FROM api_calls${where}`).get(...params);
      const total = countRow?.total ?? 0;
      const offset = ((page || 1) - 1) * (pageSize || 50);
      const limit = pageSize || 50;
      const rows = d.prepare(
        `SELECT * FROM api_calls${where} ORDER BY timestamp DESC LIMIT ? OFFSET ?`
      ).all(...params, limit, offset);
      return { rows, total };
    } catch (err) {
      console.error("[costDb] getAllCalls error:", err);
      return { rows: [], total: 0 };
    }
  });

  ipcMain.handle("costDb:getSummaryByDayPaginated", (_, from, to, page, pageSize) => {
    try {
      const d = getDb();
      if (!d) return { rows: [], total: 0 };
      const { where, params } = buildWhereFromTo(from, to);
      const countRow = d.prepare(
        `SELECT COUNT(DISTINCT date(timestamp)) AS total FROM api_calls${where}`
      ).get(...params);
      const total = countRow?.total ?? 0;
      const offset = ((page || 1) - 1) * (pageSize || 50);
      const limit = pageSize || 50;
      const rows = d.prepare(
        `SELECT date(timestamp) AS day,
          SUM(CASE WHEN type = 'translate' THEN 1 ELSE 0 END) AS translation_calls,
          SUM(CASE WHEN type = 'rewrite' THEN 1 ELSE 0 END) AS rewrite_calls,
          SUM(CASE WHEN type = 'transform' THEN 1 ELSE 0 END) AS transform_calls,
          SUM(CASE WHEN type = 'translate' THEN COALESCE(cost, 0) ELSE 0 END) AS translation_cost,
          SUM(CASE WHEN type = 'rewrite' THEN COALESCE(cost, 0) ELSE 0 END) AS rewrite_cost,
          SUM(CASE WHEN type = 'transform' THEN COALESCE(cost, 0) ELSE 0 END) AS transform_cost
        FROM api_calls${where}
        GROUP BY date(timestamp) ORDER BY day DESC LIMIT ? OFFSET ?`
      ).all(...params, limit, offset);
      return { rows, total };
    } catch (err) {
      console.error("[costDb] getSummaryByDayPaginated error:", err);
      return { rows: [], total: 0 };
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

  // Custom prompts (Transform feature)
  ipcMain.handle("customPrompts:getAll", () => {
    try {
      const d = getDb();
      if (!d) return [];
      return d.prepare("SELECT * FROM custom_prompts ORDER BY name ASC").all();
    } catch (err) {
      console.error("[costDb] customPrompts:getAll error:", err);
      return [];
    }
  });

  ipcMain.handle("customPrompts:create", (_, prompt) => {
    try {
      const d = getDb();
      if (!d) return { id: null, error: "Database unavailable" };
      const now = new Date().toISOString();
      const result = d.prepare(
        `INSERT INTO custom_prompts (name, role, instructions, output_description, temperature, target_language, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
      ).run(
        prompt.name || "",
        prompt.role || "",
        typeof prompt.instructions === "string" ? prompt.instructions : JSON.stringify(prompt.instructions || []),
        prompt.output_description ?? "transformed",
        prompt.temperature ?? 0.4,
        prompt.target_language ?? null,
        now,
        now
      );
      return { id: result.lastInsertRowid, error: null };
    } catch (err) {
      console.error("[costDb] customPrompts:create error:", err);
      return { id: null, error: err.message };
    }
  });

  ipcMain.handle("customPrompts:update", (_, id, prompt) => {
    try {
      const d = getDb();
      if (!d) return { success: false, error: "Database unavailable" };
      const now = new Date().toISOString();
      const instructions = typeof prompt.instructions === "string" ? prompt.instructions : JSON.stringify(prompt.instructions || []);
      d.prepare(
        `UPDATE custom_prompts SET name = ?, role = ?, instructions = ?, output_description = ?, temperature = ?, target_language = ?, updated_at = ? WHERE id = ?`
      ).run(
        prompt.name || "",
        prompt.role || "",
        instructions,
        prompt.output_description ?? "transformed",
        prompt.temperature ?? 0.4,
        prompt.target_language ?? null,
        now,
        id
      );
      return { success: true, error: null };
    } catch (err) {
      console.error("[costDb] customPrompts:update error:", err);
      return { success: false, error: err.message };
    }
  });

  ipcMain.handle("customPrompts:delete", (_, id) => {
    try {
      const d = getDb();
      if (!d) return { success: false, error: "Database unavailable" };
      d.prepare("DELETE FROM custom_prompts WHERE id = ?").run(id);
      return { success: true, error: null };
    } catch (err) {
      console.error("[costDb] customPrompts:delete error:", err);
      return { success: false, error: err.message };
    }
  });

  ipcMain.handle("customPrompts:import", (_, body) => {
    try {
      const d = getDb();
      if (!d) return { success: false, count: 0, error: "Database unavailable" };
      const list = Array.isArray(body) ? body : (body?.prompts ?? []);
      const mode = body?.mode || "merge";
      if (mode === "replace") d.prepare("DELETE FROM custom_prompts").run();
      const now = new Date().toISOString();
      const insert = d.prepare(
        `INSERT INTO custom_prompts (name, role, instructions, output_description, temperature, target_language, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
      );
      const update = d.prepare(
        `UPDATE custom_prompts SET role = ?, instructions = ?, output_description = ?, temperature = ?, target_language = ?, updated_at = ? WHERE name = ?`
      );
      let count = 0;
      for (const p of list) {
        if (!p?.name) continue;
        const instructions = typeof p.instructions === "string" ? p.instructions : JSON.stringify(p.instructions || []);
        try {
          insert.run(
            p.name,
            p.role || "",
            instructions,
            p.output_description ?? "transformed",
            p.temperature ?? 0.4,
            p.target_language ?? null,
            p.created_at || now,
            now
          );
          count++;
        } catch (e) {
          if (mode === "merge" && /UNIQUE constraint/.test(e.message)) {
            update.run(p.role || "", instructions, p.output_description ?? "transformed", p.temperature ?? 0.4, p.target_language ?? null, now, p.name);
            count++;
          } else throw e;
        }
      }
      return { success: true, count, error: null };
    } catch (err) {
      console.error("[costDb] customPrompts:import error:", err);
      return { success: false, count: 0, error: err.message };
    }
  });
}

module.exports = { registerCostDbHandlers };
