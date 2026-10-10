/**
 * Append JSON-lines log entries for presets-check.
 */

const fs = require("fs");
const path = require("path");

const LOG_MAX_BYTES = 2 * 1024 * 1024;

function trimLogIfNeeded(logPath) {
  try {
    if (!fs.existsSync(logPath)) return;
    const stat = fs.statSync(logPath);
    if (stat.size <= LOG_MAX_BYTES) return;
    const raw = fs.readFileSync(logPath, "utf8");
    const keep = raw.slice(-Math.floor(LOG_MAX_BYTES * 0.75));
    fs.writeFileSync(
      logPath,
      `[presets-check] Log truncated (${new Date().toISOString()})\n${keep}`,
      "utf8",
    );
  } catch {
    /* console still prints */
  }
}

function appendLog(logPath, entry) {
  const line = `${JSON.stringify({ ts: new Date().toISOString(), ...entry })}\n`;
  const dir = path.dirname(logPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  trimLogIfNeeded(logPath);
  fs.appendFileSync(logPath, line, "utf8");
}

module.exports = { appendLog, trimLogIfNeeded, LOG_MAX_BYTES };
