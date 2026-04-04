/**
 * Backup ZIP basename only (no adm-zip). Safe to import from the webpack renderer bundle.
 */

const BACKUP_FORMAT = "transrewrt-config-backup";

function pad2(n) {
  return String(n).padStart(2, "0");
}

/**
 * Basename (no .zip) for config backup files: transrewrt-config-backup-YYYY-MM-DD_HHMMSS
 * using the local date/time of the given `Date` (default: now).
 * @param {Date} [d]
 * @returns {string}
 */
function configBackupFileStem(d = new Date()) {
  const date = `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  const hms = pad2(d.getHours()) + pad2(d.getMinutes()) + pad2(d.getSeconds());
  return `${BACKUP_FORMAT}-${date}_${hms}`;
}

module.exports = {
  BACKUP_FORMAT,
  configBackupFileStem,
};
