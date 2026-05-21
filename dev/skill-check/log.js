/**
 * Append JSON-lines log entries for skill-check.
 */

const fs = require("fs");
const path = require("path");

function appendLog(logPath, entry) {
  const line = `${JSON.stringify({ ts: new Date().toISOString(), ...entry })}\n`;
  const dir = path.dirname(logPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.appendFileSync(logPath, line, "utf8");
}

module.exports = { appendLog };
