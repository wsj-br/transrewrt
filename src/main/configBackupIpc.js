/**
 * Electron: export/import transrewrt-config-backup ZIP (same layout as web server).
 */

const { dialog } = require("electron");
const fs = require("fs");
const path = require("path");
const archiver = require("archiver");
const {
  BACKUP_FORMAT,
  BACKUP_VERSION,
  zipBufferToMap,
  configBackupFileStem,
} = require("../shared/configBackup/zipUtils.js");
const { sql, promptTargetLanguageToDb } = require("../shared/db/appSchema.js");
const { getConfigFilePath, getStateFilePath, getKeyFilePath } = require("./configPath");

function readJsonFileRaw(filePath) {
  try {
    if (!fs.existsSync(filePath)) return {};
    const raw = fs.readFileSync(filePath, "utf8");
    if (!raw.trim()) return {};
    const o = JSON.parse(raw);
    return o && typeof o === "object" ? o : {};
  } catch {
    return {};
  }
}

function writeJsonFileRaw(filePath, obj) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(obj && typeof obj === "object" ? obj : {}, null, 2), "utf8");
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

function insertPromptElectron(stmt, row) {
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
    null,
  );
}

function buildElectronBackupMap(getDb, userDataPath) {
  const map = new Map();
  const included = [];
  const configPath = getConfigFilePath();
  const statePath = getStateFilePath();

  const configObj = readJsonFileRaw(configPath);
  map.set("files/config.json", Buffer.from(JSON.stringify(configObj, null, 2), "utf8"));
  included.push("files/config.json");

  const stateObj = readJsonFileRaw(statePath);
  map.set("files/state.json", Buffer.from(JSON.stringify(stateObj, null, 2), "utf8"));
  included.push("files/state.json");

  const keyPath = getKeyFilePath();
  if (fs.existsSync(keyPath)) {
    map.set("files/transrewrt.key", fs.readFileSync(keyPath));
    included.push("files/transrewrt.key");
  }

  const ws = path.join(userDataPath, "window-state.json");
  if (fs.existsSync(ws)) {
    map.set("files/window-state.json", fs.readFileSync(ws));
    included.push("files/window-state.json");
  }
  const sws = path.join(userDataPath, "settings-window-state.json");
  if (fs.existsSync(sws)) {
    map.set("files/settings-window-state.json", fs.readFileSync(sws));
    included.push("files/settings-window-state.json");
  }

  const d = getDb();
  if (!d) throw new Error("Database unavailable");
  const prompts = d.prepare(sql.CUSTOM_PROMPTS_GET_ALL).all();
  map.set("data/custom_prompts.json", Buffer.from(JSON.stringify(prompts, null, 2), "utf8"));
  included.push("data/custom_prompts.json");

  const manifest = {
    format: BACKUP_FORMAT,
    version: BACKUP_VERSION,
    createdAt: new Date().toISOString(),
    originRuntime: "electron",
    includedFiles: included,
  };
  map.set("manifest.json", Buffer.from(JSON.stringify(manifest, null, 2), "utf8"));
  return map;
}

function applyElectronRestore(getDb, userDataPath, zipBuffer, clearHistory) {
  const map = zipBufferToMap(zipBuffer);
  const manifest = parseJsonEntry(map, "manifest.json", null);
  if (!manifest || typeof manifest !== "object") {
    throw new Error("Invalid backup: missing manifest.json");
  }
  if (manifest.format !== BACKUP_FORMAT) throw new Error("Invalid backup format");
  if (manifest.version !== BACKUP_VERSION) throw new Error("Unsupported backup version");
  const origin = manifest.originRuntime;
  if (origin !== "web" && origin !== "electron") throw new Error("Invalid originRuntime");

  const d = getDb();
  if (!d) throw new Error("Database unavailable");

  const configPath = getConfigFilePath();
  const statePath = getStateFilePath();
  const keyPath = getKeyFilePath();

  d.exec("PRAGMA foreign_keys = ON");
  const tx = d.transaction(() => {
    if (clearHistory) {
      d.prepare("DELETE FROM api_calls").run();
    }
    const promptsList = parseJsonEntry(map, "data/custom_prompts.json", []);
    d.prepare("DELETE FROM custom_prompts WHERE user_id IS NULL").run();
    const ins = d.prepare(sql.CUSTOM_PROMPTS_INSERT);
    if (origin === "electron" && Array.isArray(promptsList)) {
      for (const row of promptsList) {
        if (row.user_id != null && row.user_id !== "") continue;
        insertPromptElectron(ins, row);
      }
    } else if (origin === "web" && Array.isArray(promptsList)) {
      const byName = new Map();
      for (const row of promptsList) {
        const n = row.name;
        if (!n || byName.has(n)) continue;
        byName.set(n, row);
      }
      for (const row of byName.values()) {
        insertPromptElectron(ins, row);
      }
    }
  });
  tx();

  const cfg = parseJsonEntry(map, "files/config.json", {});
  const st = parseJsonEntry(map, "files/state.json", {});
  writeJsonFileRaw(configPath, cfg);
  writeJsonFileRaw(statePath, st);

  const keyBuf = map.get("files/transrewrt.key");
  if (keyBuf && Buffer.isBuffer(keyBuf) && keyBuf.length > 0) {
    fs.writeFileSync(keyPath, keyBuf);
  }

  const wsb = map.get("files/window-state.json");
  if (wsb && Buffer.isBuffer(wsb) && wsb.length > 0) {
    fs.writeFileSync(path.join(userDataPath, "window-state.json"), wsb);
  }
  const swsb = map.get("files/settings-window-state.json");
  if (swsb && Buffer.isBuffer(swsb) && swsb.length > 0) {
    fs.writeFileSync(path.join(userDataPath, "settings-window-state.json"), swsb);
  }
}

function registerConfigBackupIpc(ipcMainRef, getDb, userDataPath, reloadConfigCallback) {
  ipcMainRef.handle("configBackup:export", async () => {
    const { canceled, filePath } = await dialog.showSaveDialog({
      title: "Export configuration backup",
      defaultPath: `${configBackupFileStem()}.zip`,
      filters: [{ name: "ZIP", extensions: ["zip"] }],
    });
    if (canceled || !filePath) return { ok: false, canceled: true };
    const map = buildElectronBackupMap(getDb, userDataPath);
    await new Promise((resolve, reject) => {
      const out = fs.createWriteStream(filePath);
      const archive = archiver("zip", { zlib: { level: 9 } });
      out.on("close", resolve);
      archive.on("error", reject);
      archive.pipe(out);
      for (const [name, buf] of map.entries()) {
        archive.append(buf, { name });
      }
      archive.finalize().catch(reject);
    });
    return { ok: true, path: filePath, filename: path.basename(filePath) };
  });

  ipcMainRef.handle("configBackup:import", async (_evt, opts) => {
    const clearHistory = !!(opts && opts.clearHistory);
    let filePath = opts && opts.filePath;
    if (!filePath) {
      const { canceled, filePaths } = await dialog.showOpenDialog({
        title: "Restore configuration backup",
        filters: [{ name: "ZIP", extensions: ["zip"] }],
        properties: ["openFile"],
      });
      if (canceled || !filePaths || !filePaths[0]) return { ok: false, canceled: true };
      filePath = filePaths[0];
    }
    const buf = fs.readFileSync(filePath);
    applyElectronRestore(getDb, userDataPath, buf, clearHistory);
    if (typeof reloadConfigCallback === "function") reloadConfigCallback();
    return { ok: true };
  });
}

module.exports = { registerConfigBackupIpc, buildElectronBackupMap, applyElectronRestore };
