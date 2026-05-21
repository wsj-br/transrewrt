#!/usr/bin/env node
/**
 * Install skill-check into an isolated runtime directory (for server cron).
 *
 * Usage:
 *   pnpm run skill-check:install -- --target /opt/transrewrt-skill-check
 *   pnpm run skill-check:install -- --target /opt/transrewrt-skill-check --force
 */

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const { cloneRepo } = require("./gitSync.js");
const { DEFAULT_CONFIG } = require("./config.js");

const MONOREPO_ROOT = path.join(__dirname, "..", "..");

const SKILL_CHECK_SCRIPTS = [
  "check.js",
  "config.js",
  "fuzzyMatch.js",
  "gitSync.js",
  "log.js",
  "ntfy.js",
  "paths.js",
];

const SHARED_FILES = [
  "skillModelIdUtils.js",
  "skillsCatalog.js",
  "skillsProviderCatalog.js",
  "openRouterProviderRouting.js",
  "llm/index.js",
];

function parseInstallArgs(argv) {
  const out = { target: null, force: false, help: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--help" || a === "-h") out.help = true;
    else if (a === "--force") out.force = true;
    else if (a === "--target" && argv[i + 1]) out.target = path.resolve(argv[++i]);
  }
  return out;
}

function printHelp() {
  console.log(`Install Transrewrt skill-check runtime

Usage:
  pnpm run skill-check:install -- --target <directory> [--force]

Options:
  --target <dir>  Runtime root (e.g. /opt/transrewrt-skill-check)
  --force         Refresh lib/ only; keeps existing config.json and run.sh
  --help, -h      Show this help
`);
}

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function copyDirFiles(srcDir, destDir, files) {
  for (const rel of files) {
    const src = path.join(srcDir, rel);
    const dest = path.join(destDir, rel);
    if (!fs.existsSync(src)) {
      throw new Error(`Missing source file: ${src}`);
    }
    copyFile(src, dest);
  }
}

function writeRuntimePackageJson(targetDir) {
  const pkg = {
    name: "transrewrt-skill-check-runtime",
    private: true,
    type: "commonjs",
    engines: { node: ">=24.0.0" },
    dependencies: {
      "multi-llm-ts": "5.1.0-beta4",
    },
  };
  const pkgPath = path.join(targetDir, "package.json");
  fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`, "utf8");
  return pkgPath;
}

function npmInstall(targetDir) {
  const r = spawnSync("npm", ["install", "--omit=dev"], {
    cwd: targetDir,
    encoding: "utf8",
    stdio: "pipe",
  });
  if (r.status !== 0) {
    throw new Error(`npm install failed: ${(r.stderr || r.stdout || "").slice(0, 500)}`);
  }
}

function writeConfig(targetDir) {
  const configPath = path.join(targetDir, "config.json");
  if (fs.existsSync(configPath)) return false;
  const cfg = {
    ...DEFAULT_CONFIG,
    runtimeRoot: ".",
    ntfy: { ...DEFAULT_CONFIG.ntfy, topic: "your-topic-here" },
  };
  fs.writeFileSync(configPath, `${JSON.stringify(cfg, null, 2)}\n`, "utf8");
  return true;
}

function writeRunScript(targetDir) {
  const p = path.join(targetDir, "run.sh");
  if (fs.existsSync(p)) return false;
  const script = `#!/bin/bash
# Run the skill-check cron job
set -e
cd "$(dirname "$0")"
# Source secrets: export GITHUB_TOKEN, SKILL_CHECK_NTFY_TOPIC, OPENROUTER_API_KEY, …
source .env
# Set the runtime root
export SKILL_CHECK_RUNTIME="$(pwd)"
# Run the skill-check checker
exec node lib/check.js "$@"
`;
  fs.writeFileSync(p, script, "utf8");
  fs.chmodSync(p, 0o755);
  return true;
}

function main() {
  const args = parseInstallArgs(process.argv.slice(2));
  if (args.help || !args.target) {
    printHelp();
    process.exit(args.help ? 0 : 1);
  }

  const target = args.target;
  const libDir = path.join(target, "lib");
  const sharedDir = path.join(libDir, "shared");
  const repoDir = path.join(target, "repo");

  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  if (fs.existsSync(repoDir) && !args.force) {
    console.error(`[skill-check:install] ${repoDir} already exists (use --force to refresh lib only)`);
    process.exit(1);
  }

  console.log(`[skill-check:install] Target: ${target}`);

  if (!fs.existsSync(repoDir)) {
    console.log("[skill-check:install] Cloning repository (shallow)…");
    cloneRepo(repoDir, DEFAULT_CONFIG.github);
  } else if (args.force) {
    console.log("[skill-check:install] Repo clone exists; skipping re-clone (git pull in check run)");
  }

  console.log("[skill-check:install] Copying lib/ scripts…");
  if (fs.existsSync(libDir)) {
    fs.rmSync(libDir, { recursive: true, force: true });
  }
  copyDirFiles(__dirname, libDir, SKILL_CHECK_SCRIPTS);
  copyDirFiles(path.join(MONOREPO_ROOT, "src", "shared"), sharedDir, SHARED_FILES);

  const configPath = path.join(target, "config.json");
  if (!fs.existsSync(configPath)) {
    copyFile(path.join(__dirname, "config.example.json"), path.join(target, "config.example.json"));
  }

  console.log("[skill-check:install] Writing package.json and installing dependencies…");
  writeRuntimePackageJson(target);
  npmInstall(target);
  if (writeConfig(target)) {
    console.log("[skill-check:install] Created config.json");
  } else {
    console.log("[skill-check:install] Keeping existing config.json");
  }
  if (writeRunScript(target)) {
    console.log("[skill-check:install] Created run.sh");
  } else {
    console.log("[skill-check:install] Keeping existing run.sh");
  }

  console.log(`
[skill-check:install] Done.

Next steps:
  1. Edit ${path.join(target, "config.json")} — set ntfy.topic (or SKILL_CHECK_NTFY_TOPIC)
  2. Export GITHUB_TOKEN (PAT with repo contents write) for push
  3. Export provider API keys (OPENROUTER_API_KEY, …)

Dry-run:
  cd ${target} && SKILL_CHECK_DRY_RUN=1 ./run.sh

Cron example:
  0 6 * * * ${path.join(target, "run.sh")} >> ${path.join(target, "skill-check-cron.log")} 2>&1
`);
}

main();
