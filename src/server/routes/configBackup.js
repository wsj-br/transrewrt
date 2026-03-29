/**
 * Admin-only configuration backup: GET /config/backup, POST /config/backup/restore
 */

const express = require("express");
const archiver = require("archiver");
const multer = require("multer");
const { buildWebBackupMap, applyWebRestore } = require("../utils/configBackupOps.js");
const { configBackupFileStem } = require("../../shared/configBackup/zipUtils.js");

function requireAdmin(req, res, next) {
  if (req.authSession?.role !== "admin") {
    return res.status(403).json({ error: "Admin access required" });
  }
  next();
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 50 * 1024 * 1024 },
});

/**
 * @param {object} configFile - createConfigFile result + file-only readers/writers
 * @param {function} getDb
 * @param {object} appDb - mergeUserPreferencesData, promptTargetLanguageToDb, seedDefaultAdmin
 * @param {string} dataDir
 * @param {string} defaultConfigPath
 * @param {object} log
 */
module.exports = function createConfigBackupRouter(configFile, getDb, appDb, dataDir, defaultConfigPath, log) {
  const router = express.Router();

  router.get("/config/backup", requireAdmin, (req, res) => {
    try {
      const includeUsageData = req.query?.includeUsageData === "true";
      const map = buildWebBackupMap({
        getDb,
        readConfigFileOnly: configFile.readConfigFileOnly,
        readStateFileOnly: configFile.readStateFileOnly,
        dataDir,
        includeUsageData,
      });

      const stem = configBackupFileStem();
      res.setHeader("Content-Type", "application/zip");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename="${stem}.zip"`,
      );

      const archive = archiver("zip", { zlib: { level: 9 } });
      archive.on("error", (err) => {
        log.error("[BACKUP] archiver error: " + err.message, { stack: err.stack });
        if (!res.headersSent) {
          res.status(500).json({ error: err.message });
        }
      });
      archive.pipe(res);
      for (const [name, buf] of map.entries()) {
        archive.append(buf, { name });
      }
      archive.finalize().catch((err) => {
        log.error("[BACKUP] finalize error: " + err.message, { stack: err.stack });
      });
    } catch (err) {
      log.error("[BACKUP] GET backup: " + err.message, { stack: err.stack });
      res.status(500).json({ error: err.message });
    }
  });

  router.post(
    "/config/backup/restore",
    requireAdmin,
    upload.single("file"),
    async (req, res) => {
      try {
        if (!req.file || !req.file.buffer) {
          return res.status(400).json({ error: "ZIP file required (field name: file)" });
        }
        const clearHistory =
          req.body?.clearHistory === "true" ||
          req.body?.clearHistory === true ||
          req.body?.clear_execution_data === "true";
        const restoreUsageData =
          req.body?.restoreUsageData === "true" || req.body?.restoreUsageData === true;

        const ctx = {
          getDb,
          writeConfigFileOnly: configFile.writeConfigFileOnly,
          writeStateFileOnly: configFile.writeStateFileOnly,
          mergeUserPreferencesData: appDb.mergeUserPreferencesData,
          stripStateKeysAndDeprecated: configFile.stripStateKeysAndDeprecated,
          promptTargetLanguageToDb: appDb.promptTargetLanguageToDb,
          dataDir,
          defaultConfigPath,
          configFile,
          seedDefaultAdmin: appDb.seedDefaultAdmin,
        };

        await applyWebRestore(ctx, req.file.buffer, { clearHistory, restoreUsageData });
        log.info("[BACKUP] Restore completed successfully");
        res.json({ ok: true });
      } catch (err) {
        log.error("[BACKUP] Restore failed: " + err.message, { stack: err.stack });
        res.status(400).json({ error: err.message || "Restore failed" });
      }
    },
  );

  return router;
};
