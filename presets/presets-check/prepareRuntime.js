#!/usr/bin/env node
/**
 * First-start setup for the presets-check container: clone the repo into the
 * runtime volume when it is not already a git checkout.
 */

const fs = require("fs");
const path = require("path");
const { loadConfig } = require("./config.js");
const { cloneRepo } = require("./gitSync.js");

function main() {
  const config = loadConfig();
  const repoDir = config.repoDir;
  const gitDir = path.join(repoDir, ".git");
  if (fs.existsSync(gitDir)) return;
  if (fs.existsSync(repoDir)) {
    throw new Error(`${repoDir} exists but is not a git clone`);
  }
  fs.mkdirSync(path.dirname(repoDir), { recursive: true });
  const owner = config.github?.owner || "wsj-br";
  const repo = config.github?.repo || "transrewrt";
  console.log(`[presets-check] Cloning ${owner}/${repo} into ${repoDir}`);
  cloneRepo(repoDir, config.github);
}

try {
  main();
} catch (error) {
  const message = error && error.message ? error.message : String(error);
  console.error(`[presets-check] ${message}`);
  process.exit(1);
}
