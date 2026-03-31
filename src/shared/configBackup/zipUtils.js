/**
 * Shared ZIP backup constants and safe parsing (Electron main + web server).
 */

const AdmZip = require("adm-zip");

const BACKUP_FORMAT = "transrewrt-config-backup";
const BACKUP_VERSION = 1;

/**
 * Basename (no .zip) for config backup files: transrewrt-config-backup-YYYY-MM-DD_HHMMSS (UTC).
 * @param {Date} [d]
 * @returns {string}
 */
function configBackupFileStem(d = new Date()) {
  const iso = d.toISOString();
  const date = iso.slice(0, 10);
  const hms = iso.slice(11, 13) + iso.slice(14, 16) + iso.slice(17, 19);
  return `${BACKUP_FORMAT}-${date}_${hms}`;
}

function isSafeZipEntryName(entryName) {
  const n = String(entryName).replace(/\\/g, "/");
  if (!n || n.includes("..")) return false;
  if (n.startsWith("/")) return false;
  return true;
}

/**
 * @param {Buffer} zipBuffer
 * @returns {Map<string, Buffer>}
 */
function zipBufferToMap(zipBuffer) {
  const zip = new AdmZip(zipBuffer);
  /** @type {Map<string, Buffer>} */
  const map = new Map();
  for (const e of zip.getEntries()) {
    if (e.isDirectory) continue;
    const name = e.entryName.replace(/\\/g, "/");
    if (!isSafeZipEntryName(name)) continue;
    if (name === "data/app_meta.json") continue;
    map.set(name, e.getData());
  }
  return map;
}

module.exports = {
  BACKUP_FORMAT,
  BACKUP_VERSION,
  configBackupFileStem,
  isSafeZipEntryName,
  zipBufferToMap,
};
