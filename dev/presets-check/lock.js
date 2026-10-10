/**
 * Pid lock so overlapping cron runs do not write presets.json together.
 */

const fs = require("fs");
const path = require("path");

function pidAlive(pid) {
  if (!Number.isInteger(pid) || pid <= 0) return false;
  try {
    process.kill(pid, 0);
    return true;
  } catch (e) {
    return Boolean(e && e.code === "EPERM");
  }
}

function readLockPid(lockPath) {
  try {
    const n = parseInt(String(fs.readFileSync(lockPath, "utf8")).trim(), 10);
    return Number.isFinite(n) ? n : 0;
  } catch {
    return 0;
  }
}

/**
 * @param {string} lockPath
 * @returns {{ fd: number, release: () => void }}
 */
function acquireRunLock(lockPath) {
  fs.mkdirSync(path.dirname(lockPath), { recursive: true });
  for (let attempt = 0; attempt < 2; attempt += 1) {
    try {
      const fd = fs.openSync(lockPath, "wx");
      fs.writeFileSync(fd, `${process.pid}\n`);
      return {
        fd,
        release() {
          try {
            fs.closeSync(fd);
          } catch {
            /* already closed */
          }
          try {
            if (readLockPid(lockPath) === process.pid) fs.unlinkSync(lockPath);
          } catch {
            /* another run replaced the lock */
          }
        },
      };
    } catch (e) {
      if (!e || e.code !== "EEXIST") throw e;
      const owner = readLockPid(lockPath);
      if (pidAlive(owner)) {
        const err = new Error(`Another presets-check run is active (pid ${owner || "unknown"})`);
        err.code = "ELOCKED";
        throw err;
      }
      try {
        fs.unlinkSync(lockPath);
      } catch {
        /* retry open */
      }
    }
  }
  const err = new Error(`Could not acquire lock ${lockPath}`);
  err.code = "ELOCKED";
  throw err;
}

module.exports = { acquireRunLock, pidAlive };
