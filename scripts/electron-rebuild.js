"use strict";

/**
 * Rebuild native modules (better-sqlite3) for Electron's embedded Node.js.
 * Required because Electron ships its own Node with a different ABI (BoringSSL, etc.)
 * than system Node - so the binary built at install time for system Node cannot be
 * loaded in the Electron main process. "Electron supporting Node 24" does not
 * remove this: we still need a separate build targeting Electron's runtime.
 */

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const RED = "\x1b[31m";
const RESET = "\x1b[0m";

/** @param {number} ms */
function sleepSync(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) {
    /* sync delay for CLI; avoids EBUSY flakes on Windows */
  }
}

/**
 * Windows often keeps handles on native build outputs (AV, indexer, stray Electron).
 * Removing the folder before @electron/rebuild runs avoids node-gyp rmdir EBUSY when possible.
 */
function tryRemoveBetterSqliteBuildDir() {
  if (process.platform !== "win32") {
    return;
  }
  const buildDir = path.join(root, "node_modules", "better-sqlite3", "build");
  if (!fs.existsSync(buildDir)) {
    return;
  }
  const attempts = 5;
  const delayMs = 1000;
  for (let i = 1; i <= attempts; i++) {
    try {
      fs.rmSync(buildDir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
      return;
    } catch (e) {
      const code = e && typeof e === "object" && "code" in e ? e.code : null;
      if (code === "ENOENT") {
        return;
      }
      const retry = (code === "EBUSY" || code === "EPERM") && i < attempts;
      if (retry) {
        console.warn(
          `better-sqlite3\\build is locked (${String(code)}), attempt ${i}/${attempts}. ` +
            "Close Transrewrt/Electron and other node processes, then retrying…"
        );
        sleepSync(delayMs);
        continue;
      }
      console.error(
        RED +
          "Could not remove node_modules\\better-sqlite3\\build (file in use). " +
          "Quit Transrewrt, Task Manager → end electron.exe / stray node.exe, then run again." +
          RESET
      );
      throw e;
    }
  }
}

const extraArgs = process.argv.slice(2);
if (extraArgs.length === 1 && (extraArgs[0] === "--help" || extraArgs[0] === "-h")) {
  console.log("Rebuild native modules (better-sqlite3) for Electron's Node.\n");
  console.log("Usage: node scripts/electron-rebuild.js");
  console.log("       (run via pnpm postinstall)\n");
  console.log("Options:\n  --help, -h   Show this help and exit.\n");
  process.exit(0);
}
if (extraArgs.length > 0) {
  console.error(RED + "Unknown option(s): " + extraArgs.join(", ") + RESET);
  console.error(RED + "Use --help to see usage." + RESET + "\n");
  process.exit(1);
}

const root = path.resolve(__dirname, "..");
const electronPkg = require(path.join(root, "node_modules/electron/package.json"));
const version = electronPkg.version;

tryRemoveBetterSqliteBuildDir();

const rebuildCli = path.join(path.dirname(require.resolve("@electron/rebuild")), "cli.js");
const result = spawnSync(
  process.execPath,
  [rebuildCli, "-f", "-o", "better-sqlite3", "-v", version],
  { stdio: "inherit", cwd: root }
);
if (result.error) {
  throw result.error;
}
if (result.status !== 0) {
  process.exit(result.status == null ? 1 : result.status);
}
