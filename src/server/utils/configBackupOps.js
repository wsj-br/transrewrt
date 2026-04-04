/**
 * Build and apply Transrewrt configuration ZIP backups (web server).
 * @see dev plan: transrewrt-config-backup format.
 */

const fs = require("fs");
const path = require("path");
const { sql } = require("../../shared/db/appSchema.js");
const {
  BACKUP_FORMAT,
  BACKUP_VERSION,
  zipBufferToMap,
} = require("../../shared/configBackup/zipUtils.js");
const { mergeKeys, CONFIG_KEY_BY_ENGINE } = require("../../shared/llm");
const {
  pickUserPreferenceEntries,
  pickServerGlobalEntries,
  isServerGlobalKey,
} = require("./webConfigKeys.js");

/** Web restore: never persist LLM keys to config.json (env / server-only). */
function omitLlmProviderKeysFromConfig(config) {
  const out =
    config && typeof config === "object" && !Array.isArray(config) ? { ...config } : {};
  for (const k of Object.values(CONFIG_KEY_BY_ENGINE)) {
    delete out[k];
  }
  return out;
}

function parseJsonEntry(map, key, fallback) {
  const buf = map.get(key);
  if (!buf) return fallback;
  try {
    const s = buf.toString("utf8");
    if (!s.trim()) return fallback;
    return JSON.parse(s);
  } catch {
    return fallback;
  }
}

/** Insert api_calls + action_content from backup ZIP map (INSERT OR IGNORE). */
function restoreUsageDataFromBackup(db, map) {
  const apiCallRows = parseJsonEntry(map, "data/api_calls.json", []);
  if (!Array.isArray(apiCallRows) || apiCallRows.length === 0) return;
  const insCall = db.prepare(
    `INSERT OR IGNORE INTO api_calls (id, timestamp, type, model, source_lang, target_lang,
      rewrite_mode, transform_prompt, prompt_tokens, completion_tokens, duration_ms, cost, tps,
      username, input_chars, input_words, input_paragraphs, output_chars, output_words, output_paragraphs)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
  );
  for (const r of apiCallRows) {
    insCall.run(
      r.id,
      r.timestamp,
      r.type,
      r.model,
      r.source_lang,
      r.target_lang,
      r.rewrite_mode,
      r.transform_prompt,
      r.prompt_tokens,
      r.completion_tokens,
      r.duration_ms,
      r.cost,
      r.tps,
      r.username,
      r.input_chars,
      r.input_words,
      r.input_paragraphs,
      r.output_chars,
      r.output_words,
      r.output_paragraphs,
    );
  }
  const contentRows = parseJsonEntry(map, "data/action_content.json", []);
  if (!Array.isArray(contentRows) || contentRows.length === 0) return;
  const insContent = db.prepare(
    "INSERT OR IGNORE INTO action_content (api_call_id, input_text, output_text) VALUES (?, ?, ?)",
  );
  for (const c of contentRows) {
    insContent.run(c.api_call_id, c.input_text, c.output_text);
  }
}

/**
 * @param {import("better-sqlite3").Database} db
 * @returns {string | null} user id
 */
function resolveAdminUserIdForExport(db) {
  if (!db) return null;
  const byName = db
    .prepare("SELECT id FROM users WHERE LOWER(username) = LOWER(?) LIMIT 1")
    .get("admin");
  if (byName?.id) return byName.id;
  const byRole = db
    .prepare(
      `SELECT id FROM users WHERE role = ?
       ORDER BY (last_login IS NULL) ASC, last_login DESC, created_at DESC, id DESC
       LIMIT 1`,
    )
    .get("admin");
  return byRole?.id ?? null;
}

/**
 * @param {import("better-sqlite3").Database} db
 * @param {string | null | undefined} userId
 * @returns {Record<string, unknown>}
 */
function getUserPreferencesParsedForExport(db, userId) {
  if (!db || userId == null || userId === "") return {};
  const row = db.prepare("SELECT data FROM user_preferences WHERE user_id = ?").get(userId);
  if (!row?.data) return {};
  try {
    const parsed = typeof row.data === "string" ? JSON.parse(row.data) : row.data;
    return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? { ...parsed } : {};
  } catch {
    return {};
  }
}

function insertPromptRow(db, stmt, row, promptTargetLanguageToDb) {
  stmt.run(
    row.name || "",
    row.role || "",
    typeof row.instructions === "string"
      ? row.instructions
      : JSON.stringify(row.instructions || []),
    row.output_description ?? "transformed",
    row.temperature ?? 0.4,
    promptTargetLanguageToDb(row.target_language),
    row.prompt_instructions != null && String(row.prompt_instructions).trim()
      ? String(row.prompt_instructions).trim()
      : null,
    row.created_at || new Date().toISOString(),
    row.updated_at || new Date().toISOString(),
    row.user_id,
  );
}

/**
 * @param {object} opts
 * @param {function} opts.getDb
 * @param {function} opts.readConfigFileOnly
 * @param {function} opts.readStateFileOnly
 * @param {string} opts.dataDir
 * @returns {Map<string, Buffer>}
 */
function buildWebBackupMap(opts) {
  const { getDb, readConfigFileOnly, readStateFileOnly, dataDir, includeUsageData } = opts;
  const withUsage = includeUsageData === true;
  const map = new Map();
  const included = [];

  const db = getDb();
  if (!db) {
    throw new Error("Database unavailable");
  }

  const fileConfig = readConfigFileOnly();
  const fileOnly =
    fileConfig && typeof fileConfig === "object" && !Array.isArray(fileConfig) ? fileConfig : {};
  const keysEffective = mergeKeys(fileOnly);
  const fileLayer = { ...fileOnly, ...keysEffective };
  const adminId = resolveAdminUserIdForExport(db);
  const adminPrefs = adminId ? getUserPreferencesParsedForExport(db, adminId) : {};
  let configObj = { ...fileLayer, ...adminPrefs };
  for (const k of Object.keys(fileLayer)) {
    if (isServerGlobalKey(k)) {
      configObj[k] = fileLayer[k];
    }
  }
  delete configObj.web_session;
  delete configObj.web_session_expires_at;
  map.set("files/config.json", Buffer.from(JSON.stringify(configObj, null, 2), "utf8"));
  included.push("files/config.json");

  const stateObj = readStateFileOnly();
  map.set("files/state.json", Buffer.from(JSON.stringify(stateObj, null, 2), "utf8"));
  included.push("files/state.json");

  const keyPath = path.join(dataDir, "transrewrt.key");
  if (fs.existsSync(keyPath)) {
    map.set("files/transrewrt.key", fs.readFileSync(keyPath));
    included.push("files/transrewrt.key");
  }

  const users = db.prepare("SELECT * FROM users ORDER BY username ASC").all();
  map.set("data/users.json", Buffer.from(JSON.stringify(users, null, 2), "utf8"));
  included.push("data/users.json");

  const prefRows = db.prepare("SELECT user_id, data FROM user_preferences").all();
  map.set("data/user_preferences.json", Buffer.from(JSON.stringify(prefRows, null, 2), "utf8"));
  included.push("data/user_preferences.json");

  const prompts = db.prepare("SELECT * FROM custom_prompts ORDER BY user_id, name").all();
  map.set("data/custom_prompts.json", Buffer.from(JSON.stringify(prompts, null, 2), "utf8"));
  included.push("data/custom_prompts.json");

  if (withUsage) {
    const apiCalls = db.prepare("SELECT * FROM api_calls ORDER BY id ASC").all();
    map.set("data/api_calls.json", Buffer.from(JSON.stringify(apiCalls, null, 2), "utf8"));
    included.push("data/api_calls.json");
    const actionContent = db.prepare("SELECT * FROM action_content ORDER BY api_call_id ASC").all();
    map.set("data/action_content.json", Buffer.from(JSON.stringify(actionContent, null, 2), "utf8"));
    included.push("data/action_content.json");
  }

  const manifest = {
    format: BACKUP_FORMAT,
    version: BACKUP_VERSION,
    createdAt: new Date().toISOString(),
    originRuntime: "web",
    includedFiles: included,
  };
  map.set("manifest.json", Buffer.from(JSON.stringify(manifest, null, 2), "utf8"));
  return map;
}

/**
 * @param {object} ctx
 * @param {Buffer} zipBuffer
 * @param {{ clearHistory?: boolean, restoreUsageData?: boolean }} options
 */
async function applyWebRestore(ctx, zipBuffer, options) {
  const {
    getDb,
    writeConfigFileOnly,
    writeStateFileOnly,
    mergeUserPreferencesData,
    stripStateKeysAndDeprecated,
    promptTargetLanguageToDb,
    dataDir,
    seedDefaultAdmin,
    configFile,
    defaultConfigPath,
  } = ctx;

  const clearHistory = options?.clearHistory === true;
  const restoreUsageData = options?.restoreUsageData === true;
  const map = zipBufferToMap(zipBuffer);

  const manifest = parseJsonEntry(map, "manifest.json", null);
  if (!manifest || typeof manifest !== "object") {
    throw new Error("Invalid backup: missing or bad manifest.json");
  }
  if (manifest.format !== BACKUP_FORMAT) {
    throw new Error("Invalid backup format");
  }
  if (manifest.version !== BACKUP_VERSION) {
    throw new Error("Unsupported backup version");
  }
  const origin = manifest.originRuntime;
  if (origin !== "web" && origin !== "electron") {
    throw new Error("Invalid originRuntime");
  }

  const db = getDb();
  if (!db) {
    throw new Error("Database unavailable");
  }

  const usersFromZip = parseJsonEntry(map, "data/users.json", []);
  const fullWebUserRestore =
    origin === "web" && Array.isArray(usersFromZip) && usersFromZip.length > 0;

  let electronStyleConfigWrite = null;
  let stateToWrite = parseJsonEntry(map, "files/state.json", {});
  const configFromZip = parseJsonEntry(map, "files/config.json", {});

  db.exec("PRAGMA foreign_keys = ON");

  const tx = db.transaction(() => {
    if (clearHistory) {
      db.prepare("DELETE FROM api_calls").run();
    }
    db.prepare("DELETE FROM sessions").run();

    if (fullWebUserRestore) {
      db.prepare("DELETE FROM custom_prompts").run();
      db.prepare("DELETE FROM user_preferences").run();
      db.prepare("DELETE FROM users").run();

      const insUser = db.prepare(
        `INSERT INTO users (id, username, password_hash, role, created_at, last_login, last_update, must_change_password)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      );
      for (const u of usersFromZip) {
        insUser.run(
          u.id,
          u.username,
          u.password_hash,
          u.role,
          u.created_at,
          u.last_login ?? null,
          u.last_update,
          u.must_change_password ?? 0,
        );
      }

      const prefs = parseJsonEntry(map, "data/user_preferences.json", []);
      const insPref = db.prepare("INSERT INTO user_preferences (user_id, data) VALUES (?, ?)");
      if (Array.isArray(prefs)) {
        for (const p of prefs) {
          if (p && p.user_id != null && p.data != null) {
            const dataStr = typeof p.data === "string" ? p.data : JSON.stringify(p.data);
            insPref.run(p.user_id, dataStr);
          }
        }
      }

      const plist = parseJsonEntry(map, "data/custom_prompts.json", []);
      const insPrompt = db.prepare(sql.CUSTOM_PROMPTS_INSERT);
      if (Array.isArray(plist)) {
        for (const row of plist) {
          insertPromptRow(db, insPrompt, row, promptTargetLanguageToDb);
        }
      }
      if (restoreUsageData) {
        restoreUsageDataFromBackup(db, map);
      }
      return;
    }

    const combined = { ...configFromZip, ...stateToWrite };
    const stripped = stripStateKeysAndDeprecated({ ...combined });
    electronStyleConfigWrite = pickServerGlobalEntries(stripped, true);
    const userPrefPayload = pickUserPreferenceEntries(stripped);

    const allUsers = db.prepare("SELECT id FROM users").all();
    if (allUsers.length === 0) {
      ctx._deferSeedAdmin = true;
    } else {
      for (const { id } of allUsers) {
        mergeUserPreferencesData(id, userPrefPayload);
      }
    }

    const promptsList = parseJsonEntry(map, "data/custom_prompts.json", []);
    const admin = db
      .prepare("SELECT id FROM users WHERE role = ? ORDER BY created_at ASC LIMIT 1")
      .get("admin");
    if (admin && Array.isArray(promptsList)) {
      db.prepare("DELETE FROM custom_prompts WHERE user_id = ?").run(admin.id);
      const ins = db.prepare(sql.CUSTOM_PROMPTS_INSERT);
      for (const row of promptsList) {
        if (row.user_id != null && row.user_id !== "") continue;
        insertPromptRow(
          db,
          ins,
          { ...row, user_id: admin.id },
          promptTargetLanguageToDb,
        );
      }
    }
    if (restoreUsageData) {
      restoreUsageDataFromBackup(db, map);
    }
  });

  tx();

  if (fullWebUserRestore) {
    writeConfigFileOnly(omitLlmProviderKeysFromConfig(configFromZip));
    writeStateFileOnly(stateToWrite);
  } else {
    writeConfigFileOnly(omitLlmProviderKeysFromConfig(electronStyleConfigWrite || {}));
    writeStateFileOnly(stateToWrite);
  }

  const keyBuf = map.get("files/transrewrt.key");
  if (keyBuf && Buffer.isBuffer(keyBuf) && keyBuf.length > 0) {
    fs.writeFileSync(path.join(dataDir, "transrewrt.key"), keyBuf);
  }

  if (ctx._deferSeedAdmin && typeof seedDefaultAdmin === "function") {
    await seedDefaultAdmin(configFile, defaultConfigPath);
    const userPrefPayload = pickUserPreferenceEntries(
      stripStateKeysAndDeprecated({ ...configFromZip, ...stateToWrite }),
    );
    const db2 = getDb();
    const allUsers = db2.prepare("SELECT id FROM users").all();
    for (const { id } of allUsers) {
      mergeUserPreferencesData(id, userPrefPayload);
    }
    const admin = db2
      .prepare("SELECT id FROM users WHERE role = ? ORDER BY created_at ASC LIMIT 1")
      .get("admin");
    const promptsList = parseJsonEntry(map, "data/custom_prompts.json", []);
    if (admin && Array.isArray(promptsList) && promptsList.length > 0) {
      db2.prepare("DELETE FROM custom_prompts WHERE user_id = ?").run(admin.id);
      const ins = db2.prepare(sql.CUSTOM_PROMPTS_INSERT);
      for (const row of promptsList) {
        if (row.user_id != null && row.user_id !== "") continue;
        insertPromptRow(
          db2,
          ins,
          { ...row, user_id: admin.id },
          promptTargetLanguageToDb,
        );
      }
    }
  }
}

module.exports = {
  BACKUP_FORMAT,
  BACKUP_VERSION,
  buildWebBackupMap,
  zipBufferToMap,
  applyWebRestore,
};
