"use strict";

/**
 * Rebuild native modules (e.g. better-sqlite3) for the current system Node.js.
 * Run this before starting the web-only server so the binary matches system Node.js ABI,
 * not the Electron ABI that postinstall/electron-rebuild targets.
 */

const path = require("path");
const { execSync } = require("child_process");

const RED = "\x1b[31m";
const RESET = "\x1b[0m";
const extraArgs = process.argv.slice(2);
if (extraArgs.length === 1 && (extraArgs[0] === "--help" || extraArgs[0] === "-h")) {
  console.log("Rebuild native modules (e.g. better-sqlite3) for system Node (web server).\n");
  console.log("Usage: node scripts/node-rebuild.js");
  console.log("       (run via pnpm dev:web)\n");
  console.log("Options:\n  --help, -h   Show this help and exit.\n");
  process.exit(0);
}
if (extraArgs.length > 0) {
  console.error(RED + "Unknown option(s): " + extraArgs.join(", ") + RESET);
  console.error(RED + "Use --help to see usage." + RESET + "\n");
  process.exit(1);
}

const root = path.resolve(__dirname, "..");

console.log(`Rebuilding better-sqlite3 for system Node.js (MODULE_VERSION ${process.versions.modules})...`);
execSync("pnpm rebuild better-sqlite3", { stdio: "inherit", cwd: root });
console.log("✔ Node.js rebuild complete");
