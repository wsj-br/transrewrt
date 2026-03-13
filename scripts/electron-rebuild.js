"use strict";

/**
 * Rebuild native modules (better-sqlite3) for Electron's embedded Node.js.
 * Required because Electron ships its own Node with a different ABI (BoringSSL, etc.)
 * than system Node — so the binary built at install time for system Node cannot be
 * loaded in the Electron main process. "Electron supporting Node 24" does not
 * remove this: we still need a separate build targeting Electron's runtime.
 */

const path = require("path");
const { execSync } = require("child_process");

const root = path.resolve(__dirname, "..");
const electronPkg = require(path.join(root, "node_modules/electron/package.json"));
const version = electronPkg.version;

execSync(
  `electron-rebuild -f -o better-sqlite3 -v ${version}`,
  { stdio: "inherit", cwd: root }
);
