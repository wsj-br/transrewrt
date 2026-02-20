/**
 * Write build_timestamp file in project root (same format as Docker: YYYY-MM-DDTHH:mm:ss+zzzz).
 * Cross-platform (Node Date); used by electron-builder before packaging.
 */

const fs = require("fs");
const path = require("path");

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
