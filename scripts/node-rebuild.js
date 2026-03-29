"use strict";

/**
 * Ensure better-sqlite3 is built for the current system Node.js (not Electron).
 * Quiet on success (exit 0). Prints only on failure (exit 1).
 *
 * After a successful rebuild, writes
 *   node_modules/better-sqlite3/build/Release/.transrewrt-system-node.json
 * with NODE_MODULE_VERSION + sha256 of better_sqlite3.node. Skip rebuild when that
 * file exists, the version matches process.versions.modules, and the addon hash matches —
 * so an Electron rebuild (different binary) invalidates the marker without relying on require().
 */

const fs = require("fs");
const crypto = require("crypto");
const path = require("path");
const { spawnSync } = require("child_process");

const RED = "\x1b[31m";
const RESET = "\x1b[0m";

const extraArgs = process.argv.slice(2);
if (extraArgs.length === 1 && (extraArgs[0] === "--help" || extraArgs[0] === "-h")) {
  console.log(
    "Ensure better-sqlite3 matches system Node (web / tsx). Quiet on success; errors to stderr.\n"
  );
  console.log("Usage: node scripts/node-rebuild.js");
  console.log("       (run via pnpm dev:web, translate:docs, etc.)\n");
  console.log(
    "Writes build/Release/.transrewrt-system-node.json under better-sqlite3 after a good rebuild;\n" +
      "skips pnpm rebuild when that marker matches current NODE_MODULE_VERSION and the .node file.\n"
  );
  console.log("Options:\n  --help, -h   Show this help and exit.\n");
  process.exit(0);
}
if (extraArgs.length > 0) {
  console.error(RED + "Unknown option(s): " + extraArgs.join(", ") + RESET);
  console.error(RED + "Use --help for usage." + RESET + "\n");
  process.exit(1);
}

const root = path.resolve(__dirname, "..");
const betterRoot = path.join(root, "node_modules", "better-sqlite3");
const releaseDir = path.join(betterRoot, "build", "Release");
const addonPath = path.join(releaseDir, "better_sqlite3.node");
const markerPath = path.join(releaseDir, ".transrewrt-system-node.json");

function sha256File(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function readMarker() {
  try {
    const raw = fs.readFileSync(markerPath, "utf8");
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function writeMarker() {
  const addonSha256 = sha256File(addonPath);
  fs.writeFileSync(
    markerPath,
    JSON.stringify(
      {
        nodeModuleVersion: String(process.versions.modules),
        addonSha256,
      },
      null,
      0
    ) + "\n",
    "utf8"
  );
}

function systemNodeAddonAlreadyValid() {
  if (!fs.existsSync(addonPath)) return false;
  const m = readMarker();
  if (!m || typeof m.addonSha256 !== "string" || typeof m.nodeModuleVersion !== "string") {
    return false;
  }
  if (m.nodeModuleVersion !== String(process.versions.modules)) return false;
  try {
    return sha256File(addonPath) === m.addonSha256;
  } catch {
    return false;
  }
}

if (systemNodeAddonAlreadyValid()) {
  process.exit(0);
}

const result = spawnSync("pnpm rebuild better-sqlite3", {
  cwd: root,
  encoding: "utf8",
  stdio: ["ignore", "pipe", "pipe"],
  shell: true,
  windowsHide: true,
});

if (result.error) {
  console.error(RED + result.error.message + RESET);
  process.exit(1);
}

if (result.status !== 0) {
  if (result.stdout) console.error(result.stdout);
  if (result.stderr) console.error(result.stderr);
  process.exit(1);
}

if (!fs.existsSync(addonPath)) {
  console.error(
    RED + "better-sqlite3 rebuild finished but " + addonPath + " is missing." + RESET
  );
  process.exit(1);
}

try {
  writeMarker();
} catch (e) {
  console.error(RED + "Failed to write marker: " + (e && e.message) + RESET);
  process.exit(1);
}

process.exit(0);
