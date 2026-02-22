"use strict";

/**
 * Rebuild native modules (e.g. better-sqlite3) for the current system Node.js.
 * Run this before starting the web-only server so the binary matches system Node.js ABI,
 * not the Electron ABI that postinstall/electron-rebuild targets.
 */

const path = require("path");
const { execSync } = require("child_process");

const root = path.resolve(__dirname, "..");

console.log(`Rebuilding better-sqlite3 for system Node.js (MODULE_VERSION ${process.versions.modules})...`);
execSync("pnpm rebuild better-sqlite3", { stdio: "inherit", cwd: root });
console.log("✔ Node.js rebuild complete");
