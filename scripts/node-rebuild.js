"use strict";

/**
 * Ensure better-sqlite3 can load under the current system Node.js (not Electron).
 * Quiet on success (exit 0). Prints only on failure (exit 1).
 *
 * better-sqlite3 v13+ ships N-API prebuilds under prebuilds/{platform}-{arch}.node and
 * skips compiling build/Release when a host prebuild is present. Prefer that path.
 *
 * When only a node-gyp Release binary exists (no prebuild), keep the previous marker:
 *   node_modules/better-sqlite3/build/Release/.transrewrt-system-node.json
 * with NODE_MODULE_VERSION + sha256 of better_sqlite3.node so an Electron rebuild
 * (different binary) invalidates the marker without require()-ing the addon.
 */

const fs = require("fs");
const crypto = require("crypto");
const path = require("path");
const { spawnSync } = require("child_process");

const RED = "\x1b[31m";
const RESET = "\x1b[0m";

const PREBUILD_PLATFORMS = ["linux", "darwin", "win32"];
const PREBUILD_ARCHS = ["x64", "arm64"];

const extraArgs = process.argv.slice(2);
if (extraArgs.length === 1 && (extraArgs[0] === "--help" || extraArgs[0] === "-h")) {
  console.log(
    "Ensure better-sqlite3 matches system Node (web / tsx). Quiet on success; errors to stderr.\n"
  );
  console.log("Usage: node scripts/node-rebuild.js");
  console.log("       (run via pnpm dev:web, translate:docs, etc.)\n");
  console.log(
    "Accepts packaged prebuilds (better-sqlite3 v13+) or build/Release/better_sqlite3.node.\n" +
      "For Release builds, writes .transrewrt-system-node.json and skips pnpm rebuild when the\n" +
      "marker matches current NODE_MODULE_VERSION and the .node file hash.\n"
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

function isLinuxMusl() {
  return process.platform === "linux" && !process.report.getReport().header.glibcVersionRuntime;
}

/** Host prebuild path used by better-sqlite3/lib/binding.js, or null. */
function getPrebuildPath() {
  if (!PREBUILD_PLATFORMS.includes(process.platform) || !PREBUILD_ARCHS.includes(process.arch)) {
    return null;
  }
  const target = `${isLinuxMusl() ? "linuxmusl" : process.platform}-${process.arch}`;
  const filename = path.join(betterRoot, "prebuilds", `${target}.node`);
  return fs.existsSync(filename) ? filename : null;
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
  fs.mkdirSync(releaseDir, { recursive: true });
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

function releaseAddonAlreadyValid() {
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

function systemNodeAddonAlreadyValid() {
  // v13+: packaged N-API prebuild is the system-Node binary; binding.js prefers it.
  if (getPrebuildPath()) return true;
  return releaseAddonAlreadyValid();
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

// Rebuild may be a no-op when a prebuild exists (binding.gyp target type: none).
if (getPrebuildPath()) {
  process.exit(0);
}

if (!fs.existsSync(addonPath)) {
  console.error(
    RED +
      "better-sqlite3 rebuild finished but neither a host prebuild nor " +
      addonPath +
      " is available." +
      RESET
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
