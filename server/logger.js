/**
 * Server logger: writes to a log file in the data folder.
 * In dev mode (DEV_WEB), also prints to the server console.
 */

const fs = require("fs");
const path = require("path");

const LOG_FILE = "server.log";

function createLogger(dataDir, devWeb) {
  const logPath = path.join(dataDir, LOG_FILE);

  function write(level, message, data) {
    const ts = new Date().toISOString();
    const dataStr = data !== undefined ? "\t" + JSON.stringify(data) : "";
    const line = `${ts}\t${level}\t${message}${dataStr}\n`;
    try {
      fs.appendFileSync(logPath, line, "utf8");
    } catch (err) {
      try {
        process.stderr.write(`[logger] failed to write log: ${err.message}\n`);
      } catch (_) {}
    }
    if (devWeb) {
      if (level === "error" || level === "warn") {
        console.error(line.trim());
      } else {
        console.log(line.trim());
      }
    }
  }

  return {
    info(message, data) {
      write("info", message, data);
    },
    warn(message, data) {
      write("warn", message, data);
    },
    error(message, data) {
      write("error", message, data);
    },
  };
}

module.exports = { createLogger };
