#!/usr/bin/env node
/**
 * Clears Docker build cache and unused images/networks/volumes.
 *
 * Usage:
 *   node scripts/clean-docker.mjs
 *   pnpm docker:clean
 */

import { execFileSync } from "node:child_process";
import process from "node:process";

const useShell = process.platform === "win32";

function run(command, args) {
  try {
    execFileSync(command, args, {
      encoding: "utf8",
      stdio: "inherit",
      shell: useShell,
    });
    return true;
  } catch {
    return false;
  }
}

function requireCmd(name) {
  try {
    execFileSync(name, ["--version"], {
      stdio: "pipe",
      shell: useShell,
    });
  } catch {
    console.error(`Missing required command: ${name}`);
    process.exit(1);
  }
}

requireCmd("docker");

console.log("Clearing docker compose cache...");
if (run("docker", ["builder", "prune", "--all", "--force"])) {
  console.log("Docker compose cache cleared");
} else {
  console.error("Error clearing docker compose cache");
}

console.log("Clearing docker system images/networks/volumes not used...");
if (run("docker", ["system", "prune", "--all", "--force"])) {
  console.log("Docker system images/networks/volumes not used cleared");
}

console.log("Clean completed!");
