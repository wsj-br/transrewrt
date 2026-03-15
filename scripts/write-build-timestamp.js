/**
 * Write build_timestamp file in project root (same format as Docker: YYYY-MM-DDTHH:mm:ss+zzzz).
 * Cross-platform (Node Date); used by electron-builder before packaging.
 */

const fs = require("fs");
const path = require("path");

const RED = "\x1b[31m";
const RESET = "\x1b[0m";
const extraArgs = process.argv.slice(2);
if (extraArgs.length === 1 && (extraArgs[0] === "--help" || extraArgs[0] === "-h")) {
  console.log("Write build_timestamp file in project root (used by electron-builder).\n");
  console.log("Usage: node scripts/write-build-timestamp.js\n");
  console.log("Options:\n  --help, -h   Show this help and exit.\n");
  process.exit(0);
}
if (extraArgs.length > 0) {
  console.error(RED + "Unknown option(s): " + extraArgs.join(", ") + RESET);
  console.error(RED + "Use --help to see usage." + RESET + "\n");
  process.exit(1);
}

const rootDir = path.resolve(__dirname, "..");
const outPath = path.join(rootDir, "build_timestamp");

const now = new Date();
const pad = (n, len = 2) => String(n).padStart(len, "0");
const tzOffset = -now.getTimezoneOffset();
const tzSign = tzOffset >= 0 ? "+" : "-";
const tzHours = pad(Math.floor(Math.abs(tzOffset) / 60));
const tzMins = pad(Math.abs(tzOffset) % 60);
const tz = `${tzSign}${tzHours}${tzMins}`;

const timestamp =
  now.getFullYear() +
  "-" +
  pad(now.getMonth() + 1) +
  "-" +
  pad(now.getDate()) +
  "T" +
  pad(now.getHours()) +
  ":" +
  pad(now.getMinutes()) +
  ":" +
  pad(now.getSeconds()) +
  tz;

fs.writeFileSync(outPath, timestamp, "utf8");
console.log("build_timestamp written:", timestamp);
