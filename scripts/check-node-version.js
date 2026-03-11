"use strict";

/**
 * Ensure the current Node version matches the project requirement (.nvmrc or engines),
 * then start the server using this same Node binary (process.execPath). That way the
 * server always runs with the Node that passed the check, avoiding PATH/ABI issues when
 * run via concurrently or other child processes on Windows.
 */

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const rootDir = path.resolve(__dirname, "..");
const nvmrcPath = path.join(rootDir, ".nvmrc");
const requiredMajor = 24; // fallback if .nvmrc missing

let required = requiredMajor;
if (fs.existsSync(nvmrcPath)) {
  const raw = fs.readFileSync(nvmrcPath, "utf8").trim();
  const match = raw.match(/^(\d+)/);
  if (match) required = parseInt(match[1], 10);
}

const current = process.version.slice(1); // strip 'v'
const currentMajor = parseInt(current.split(".")[0], 10);

if (currentMajor < required) {
  console.error(
    `[check-node] This project requires Node ${required}+ (native modules are built for it).`
  );
  console.error(`[check-node] Current: ${process.version}.`);
  console.error(
    `[check-node] Run 'nvm use ${required}' or 'nvm use' in the project root, then try again.`
  );
  process.exit(1);
}

// Launch server with this same Node binary so PATH in child processes doesn't matter
const serverPath = path.join(rootDir, "src", "server", "index.js");
const result = spawnSync(process.execPath, [serverPath], {
  stdio: "inherit",
  env: process.env,
  cwd: rootDir,
});
const exitCode =
  result.status !== null ? result.status : result.signal ? 128 : 0;
process.exit(exitCode);
