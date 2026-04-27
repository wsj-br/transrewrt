/**
 * SQLite app DB for Electron. Uses shared schema and queries (src/shared/db/appSchema.js).
 * Holds api_calls (cost/API log) and custom_prompts (transform prompts).
 * DB path: userData/transrewrt.db
 */

const path = require("path");
const fs = require("fs");
const Database = require("better-sqlite3");
const {
  applyAppSchema,
  promptTargetLanguageToDb,
  buildWhereFromTo,
  buildExecutionHistoryWhere,
  sql,
  replaceWhere,
} = require("../shared/db/appSchema.js");

let db = null;
let userDataPath = null;

function getDb() {
  if (db) return db;
  if (!userDataPath) {
    console.error("[appDb] userDataPath not set (registerAppDbHandlers not called or called without getPath)");
    return null;
  }
  const DB_PATH = path.join(userDataPath, "transrewrt.db");
  try {
    if (!fs.existsSync(userDataPath)) {
      fs.mkdirSync(userDataPath, { recursive: true });
    }
    db = new Database(DB_PATH);
    db.pragma("journal_mode = WAL");
    db.pragma("synchronous = NORMAL");
    applyAppSchema(db);
  } catch (err) {
    console.error("[appDb] Failed to open database at", DB_PATH, err);
    return null;
  }
  return db;
}

function closeDb() {
  if (!db) return;
  try {
    db.exec("PRAGMA wal_checkpoint(TRUNCATE)");
  } catch (err) {
    console.error("[appDb] WAL checkpoint failed during close:", err);
  }
  try {
    db.close();
  } catch (err) {
    console.error("[appDb] Failed to close database:", err);
  } finally {
    db = null;
  }
}

function fullWhereForType(type, from, to) {
  const { where, params } = buildWhereFromTo(from, to);
  const andPart = where ? where.replace(" WHERE ", "") : "";
  return { where: " WHERE type = '" + type + "'" + (andPart ? " AND " + andPart : ""), params };
}

function registerAppDbHandlers(ipcMain, getUserDataPath) {
  userDataPath = getUserDataPath();
  if (!userDataPath) {
    console.error("[appDb] getUserDataPath() returned empty");
    return;
  }
  const d = getDb();
  if (d && process.env.NODE_ENV === "development") {
    console.log("[appDb] Database ready at", path.join(userDataPath, "transrewrt.db"));
  }

  ipcMain.handle("appDb:log", (_, payload) => {
    try {
      const d = getDb();
      if (!d) return { success: false, total_cost: 0 };
      const b = payload || {};
      const insertCall = d.prepare(sql.INSERT_API_CALL);
      const insertContent = d.prepare(sql.INSERT_ACTION_CONTENT);
      const runLog = d.transaction(() => {
        const info = insertCall.run(
          b.timestamp || new Date().toISOString(),
          b.type || "",
          b.model ?? null,
          b.source_lang ?? null,
          b.target_lang ?? null,
          b.rewrite_mode ?? null,
          b.transform_prompt ?? null,
          b.prompt_tokens ?? null,
          b.completion_tokens ?? null,
          b.duration_ms ?? null,
          b.cost ?? null,
          b.tps ?? null,
          b.username ?? null,
          b.input_chars ?? null,
          b.input_words ?? null,
          b.input_paragraphs ?? null,
          b.output_chars ?? null,
          b.output_words ?? null,
          b.output_paragraphs ?? null,
        );
        if (Object.prototype.hasOwnProperty.call(b, "input_text") && Object.prototype.hasOwnProperty.call(b, "output_text")) {
          insertContent.run(
            info.lastInsertRowid,
            b.input_text != null ? String(b.input_text) : "",
            b.output_text != null ? String(b.output_text) : "",
          );
        }
      });
      runLog();
      const row = d.prepare(sql.GET_TOTAL_COST).get();
      return { success: true, total_cost: row?.total_cost ?? 0 };
    } catch (err) {
      console.error("[appDb] log error:", err);
      return { success: false, total_cost: 0 };
    }
  });

  ipcMain.handle("appDb:getTotalCost", () => {
    try {
      const d = getDb();
      if (!d) return { total_cost: 0 };
      const row = d.prepare(sql.GET_TOTAL_COST).get();
      return { total_cost: row?.total_cost ?? 0 };
    } catch (err) {
      console.error("[appDb] getTotalCost error:", err);
      return { total_cost: 0 };
    }
  });

  ipcMain.handle("appDb:getSummaryByFunction", (_, from, to) => {
    try {
      const d = getDb();
      if (!d) return { rows: [] };
      const { where, params } = buildWhereFromTo(from, to);
      const rows = d.prepare(replaceWhere(sql.GET_SUMMARY_BY_FUNCTION, where)).all(...params);
      const totalCalls = rows.reduce((s, r) => s + r.calls, 0);
      const totalCost = rows.reduce((s, r) => s + (r.cost || 0), 0);
      rows.push({ function: "Total", calls: totalCalls, cost: totalCost });
      return { rows };
    } catch (err) {
      console.error("[appDb] getSummaryByFunction error:", err);
      return { rows: [] };
    }
  });

  ipcMain.handle("appDb:getSummaryByModel", (_, from, to) => {
    try {
      const d = getDb();
      if (!d) return { rows: [] };
      const { where, params } = buildWhereFromTo(from, to);
      const rows = d.prepare(replaceWhere(sql.GET_SUMMARY_BY_MODEL, where)).all(...params);
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
      console.error("[appDb] getSummaryByModel error:", err);
      return { rows: [] };
    }
  });

  ipcMain.handle("appDb:getSummaryByDay", (_, from, to) => {
    try {
      const d = getDb();
      if (!d) return { rows: [] };
      const { where, params } = buildWhereFromTo(from, to);
      const rows = d.prepare(replaceWhere(sql.GET_SUMMARY_BY_DAY, where)).all(...params);
      return { rows };
    } catch (err) {
      console.error("[appDb] getSummaryByDay error:", err);
      return { rows: [] };
    }
  });

  ipcMain.handle("appDb:getSummaryByTargetLang", (_, from, to) => {
    try {
      const d = getDb();
      if (!d) return { rows: [] };
      const { where, params } = fullWhereForType("translate", from, to);
      const rows = d.prepare(replaceWhere(sql.GET_SUMMARY_BY_TARGET_LANG, where)).all(...params);
      return { rows };
    } catch (err) {
      console.error("[appDb] getSummaryByTargetLang error:", err);
      return { rows: [] };
    }
  });

  ipcMain.handle("appDb:getSummaryByTransformPrompt", (_, from, to) => {
    try {
      const d = getDb();
      if (!d) return { rows: [] };
      const { where, params } = fullWhereForType("transform", from, to);
      const rows = d.prepare(replaceWhere(sql.GET_SUMMARY_BY_TRANSFORM_PROMPT, where)).all(...params);
      return { rows };
    } catch (err) {
      console.error("[appDb] getSummaryByTransformPrompt error:", err);
      return { rows: [] };
    }
  });

  ipcMain.handle("appDb:getSummaryByRewriteMode", (_, from, to) => {
    try {
      const d = getDb();
      if (!d) return { rows: [] };
      const { where, params } = fullWhereForType("rewrite", from, to);
      const rows = d.prepare(replaceWhere(sql.GET_SUMMARY_BY_REWRITE_MODE, where)).all(...params);
      return { rows };
    } catch (err) {
      console.error("[appDb] getSummaryByRewriteMode error:", err);
      return { rows: [] };
    }
  });

  ipcMain.handle("appDb:getAllCalls", (_, from, to, page, pageSize) => {
    try {
      const d = getDb();
      if (!d) return { rows: [], total: 0 };
      const { where, params } = buildWhereFromTo(from, to);
      const total = d.prepare(replaceWhere(sql.COUNT_API_CALLS, where)).get(...params)?.total ?? 0;
      const offset = ((page || 1) - 1) * (pageSize || 50);
      const limit = pageSize || 50;
      const rows = d.prepare(replaceWhere(sql.GET_ALL_CALLS, where)).all(...params, limit, offset);
      return { rows, total };
    } catch (err) {
      console.error("[appDb] getAllCalls error:", err);
      return { rows: [], total: 0 };
    }
  });

  ipcMain.handle("appDb:getAllCallsExport", (_, from, to) => {
    try {
      const d = getDb();
      if (!d) return { rows: [] };
      const { where, params } = buildWhereFromTo(from, to);
      const rows = d.prepare(replaceWhere(sql.GET_ALL_CALLS_EXPORT, where)).all(...params);
      return { rows };
    } catch (err) {
      console.error("[appDb] getAllCallsExport error:", err);
      return { rows: [] };
    }
  });

  ipcMain.handle("appDb:getSummaryByDayPaginated", (_, from, to, page, pageSize) => {
    try {
      const d = getDb();
      if (!d) return { rows: [], total: 0 };
      const { where, params } = buildWhereFromTo(from, to);
      const total = d.prepare(replaceWhere(sql.COUNT_DISTINCT_DAYS, where)).get(...params)?.total ?? 0;
      const offset = ((page || 1) - 1) * (pageSize || 50);
      const limit = pageSize || 50;
      const rows = d.prepare(replaceWhere(sql.GET_SUMMARY_BY_DAY_PAGINATED, where)).all(...params, limit, offset);
      return { rows, total };
    } catch (err) {
      console.error("[appDb] getSummaryByDayPaginated error:", err);
      return { rows: [], total: 0 };
    }
  });

  ipcMain.handle("appDb:deleteOutsideRange", (_, from, to) => {
    try {
      const d = getDb();
      if (!d) return;
      const run = () => {
        if (!from && !to) {
          d.prepare(sql.DELETE_API_CALLS).run();
        } else {
          d.prepare(sql.DELETE_API_CALLS_BEFORE).run(from || to);
        }
      };
      d.transaction(run)();
    } catch (err) {
      console.error("[appDb] deleteOutsideRange error:", err);
    }
  });

  ipcMain.handle("appDb:getExecutionHistory", (_, from, to, username, limit) => {
    try {
      const d = getDb();
      if (!d) return { rows: [] };
      const { whereClause, params } = buildExecutionHistoryWhere(from, to, username, "a");
      const base = replaceWhere(sql.GET_EXECUTION_HISTORY, whereClause);
      const lim =
        limit != null && Number.isFinite(Number(limit)) && Number(limit) > 0
          ? Math.min(500, Math.floor(Number(limit)))
          : null;
      const q = lim != null ? `${base} LIMIT ?` : base;
      const rows = lim != null ? d.prepare(q).all(...params, lim) : d.prepare(q).all(...params);
      return { rows };
    } catch (err) {
      console.error("[appDb] getExecutionHistory error:", err);
      return { rows: [] };
    }
  });

  ipcMain.handle("appDb:deleteExecutionHistory", (_, from, to) => {
    try {
      const d = getDb();
      if (!d) return;
      if (!from && !to) {
        d.prepare(sql.DELETE_ACTION_CONTENT_ALL).run();
      } else {
        d.prepare(sql.DELETE_ACTION_CONTENT_BEFORE).run(from || to);
      }
    } catch (err) {
      console.error("[appDb] deleteExecutionHistory error:", err);
    }
  });

  ipcMain.handle("appDb:deleteByModel", (_, model) => {
    try {
      const d = getDb();
      if (!d) return { deleted: 0 };
      const name = model != null ? String(model).trim() : "";
      if (!name) return { deleted: 0 };
      const result = d.prepare(sql.DELETE_API_CALLS_BY_MODEL).run(name);
      return { deleted: result.changes };
    } catch (err) {
      console.error("[appDb] deleteByModel error:", err);
      return { deleted: 0 };
    }
  });

  ipcMain.handle("customPrompts:getAll", () => {
    try {
      const d = getDb();
      if (!d) return [];
      return d.prepare(sql.CUSTOM_PROMPTS_GET_ALL).all();
    } catch (err) {
      console.error("[appDb] customPrompts:getAll error:", err);
      return [];
    }
  });

  ipcMain.handle("customPrompts:create", (_, prompt) => {
    try {
      const d = getDb();
      if (!d) return { id: null, error: "Database unavailable" };
      const now = new Date().toISOString();
      const promptInstructions = (prompt.prompt_instructions != null && String(prompt.prompt_instructions).trim()) ? String(prompt.prompt_instructions).trim() : null;
      const result = d.prepare(sql.CUSTOM_PROMPTS_INSERT).run(
        prompt.name || "",
        prompt.role || "",
        typeof prompt.instructions === "string" ? prompt.instructions : JSON.stringify(prompt.instructions || []),
        prompt.output_description ?? "transformed",
        prompt.temperature ?? 0.4,
        promptTargetLanguageToDb(prompt.target_language),
        promptInstructions,
        now,
        now,
        null,
      );
      return { id: result.lastInsertRowid, error: null };
    } catch (err) {
      console.error("[appDb] customPrompts:create error:", err);
      return { id: null, error: err.message };
    }
  });

  ipcMain.handle("customPrompts:update", (_, id, prompt) => {
    try {
      const d = getDb();
      if (!d) return { success: false, error: "Database unavailable" };
      const now = new Date().toISOString();
      const instructions = typeof prompt.instructions === "string" ? prompt.instructions : JSON.stringify(prompt.instructions || []);
      const promptInstructions = (prompt.prompt_instructions != null && String(prompt.prompt_instructions).trim()) ? String(prompt.prompt_instructions).trim() : null;
      d.prepare(sql.CUSTOM_PROMPTS_UPDATE).run(
        prompt.name || "",
        prompt.role || "",
        instructions,
        prompt.output_description ?? "transformed",
        prompt.temperature ?? 0.4,
        promptTargetLanguageToDb(prompt.target_language),
        promptInstructions,
        now,
        id
      );
      return { success: true, error: null };
    } catch (err) {
      console.error("[appDb] customPrompts:update error:", err);
      return { success: false, error: err.message };
    }
  });

  ipcMain.handle("customPrompts:delete", (_, id) => {
    try {
      const d = getDb();
      if (!d) return { success: false, error: "Database unavailable" };
      d.prepare(sql.CUSTOM_PROMPTS_DELETE).run(id);
      return { success: true, error: null };
    } catch (err) {
      console.error("[appDb] customPrompts:delete error:", err);
      return { success: false, error: err.message };
    }
  });

  ipcMain.handle("customPrompts:import", (_, body) => {
    try {
      const d = getDb();
      if (!d) return { success: false, count: 0, error: "Database unavailable" };
      const list = Array.isArray(body) ? body : (body?.prompts ?? []);
      const mode = body?.mode || "merge";
      if (mode === "replace") d.prepare(sql.CUSTOM_PROMPTS_DELETE_ALL).run();
      const now = new Date().toISOString();
      const insert = d.prepare(sql.CUSTOM_PROMPTS_INSERT);
      const update = d.prepare(sql.CUSTOM_PROMPTS_UPDATE_BY_NAME);
      let count = 0;
      for (const p of list) {
        if (!p?.name) continue;
        const instructions = typeof p.instructions === "string" ? p.instructions : JSON.stringify(p.instructions || []);
        const promptInstructions = (p.prompt_instructions != null && String(p.prompt_instructions).trim()) ? String(p.prompt_instructions).trim() : null;
        try {
          insert.run(
            p.name,
            p.role || "",
            instructions,
            p.output_description ?? "transformed",
            p.temperature ?? 0.4,
            promptTargetLanguageToDb(p.target_language),
            promptInstructions,
            p.created_at || now,
            now,
            null,
          );
          count++;
        } catch (e) {
          if (mode === "merge" && /UNIQUE constraint/.test(e.message)) {
            update.run(p.role || "", instructions, p.output_description ?? "transformed", p.temperature ?? 0.4, promptTargetLanguageToDb(p.target_language), promptInstructions, now, p.name);
            count++;
          } else throw e;
        }
      }
      return { success: true, count, error: null };
    } catch (err) {
      console.error("[appDb] customPrompts:import error:", err);
      return { success: false, count: 0, error: err.message };
    }
  });
}

module.exports = {
  registerAppDbHandlers,
  getDb: () => getDb(),
  closeDb,
};
