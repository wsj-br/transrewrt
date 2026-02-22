"use strict";

/**
 * Run electron-rebuild for the installed Electron version (e.g. 40.x → Node 24).
 * Ensures native modules (e.g. better-sqlite3) are built for the installed Electron (40.x → Node 24).
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
