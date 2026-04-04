/**
 * Shared ZIP backup constants and safe parsing (Electron main + web server).
 */

const AdmZip = require("adm-zip");
const { BACKUP_FORMAT, configBackupFileStem } = require("./fileStem.js");

const BACKUP_VERSION = 1;

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
