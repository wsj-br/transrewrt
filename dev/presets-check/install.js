#!/usr/bin/env node
/**
 * Install presets-check into an isolated runtime directory (for server cron).
 *
 * Usage:
 *   pnpm run presets-check:install -- --target /opt/transrewrt-presets-check
 *   pnpm run presets-check:install -- --target /opt/transrewrt-presets-check --force
 */

const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const { cloneRepo } = require("./gitSync.js");
const { DEFAULT_CONFIG } = require("./config.js");

const MONOREPO_ROOT = path.join(__dirname, "..", "..");

const PRESET_CHECK_SCRIPTS = [
  "check.js",
  "config.js",
  "fuzzyMatch.js",
  "gitSync.js",
  "log.js",
  "ntfy.js",
  "paths.js",
];

const SHARED_FILES = [
  "apiErrorMessage.js",
  "presetModelIdUtils.js",
  "presetsCatalog.js",
  "presetsProviderCatalog.js",
  "openRouterProviderRouting.js",
  "llm/index.js",
  "llm/estimateMaxTokens.js",
];

/** Runtime deps mirrored from the monorepo (Vercel AI SDK stack). */
const RUNTIME_DEP_NAMES = ["ai", "@ai-sdk/openai-compatible"];

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
  console.log(`Install Transrewrt presets-check runtime

Usage:
  pnpm run presets-check:install -- --target <directory> [--force]

Options:
  --target <dir>  Runtime root (e.g. /opt/transrewrt-presets-check)
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

function readMonorepoRuntimeDeps() {
  const rootPkgPath = path.join(MONOREPO_ROOT, "package.json");
  const rootPkg = JSON.parse(fs.readFileSync(rootPkgPath, "utf8"));
  const from = { ...(rootPkg.dependencies || {}), ...(rootPkg.devDependencies || {}) };
  /** @type {Record<string, string>} */
  const dependencies = {};
  for (const name of RUNTIME_DEP_NAMES) {
    const ver = from[name];
    if (!ver || typeof ver !== "string") {
      throw new Error(
        `Missing dependency "${name}" in monorepo package.json (required for presets-check runtime)`,
      );
    }
    dependencies[name] = ver;
  }
  return dependencies;
}

function writeRuntimePackageJson(targetDir) {
  const pkg = {
    name: "transrewrt-presets-check-runtime",
    private: true,
    type: "commonjs",
    engines: { node: ">=24.0.0" },
    dependencies: readMonorepoRuntimeDeps(),
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
# Run the presets-check cron job

# GitHub SSH (when github.useSsh is true in config.json) — edit key path if needed
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id-git

set -e
cd "$(dirname "$0")"

# Source secrets: PRESET_CHECK_NTFY_TOPIC, OPENROUTER_API_KEY, PRESET_CHECK_DRY_RUN, …
source .env

export PRESET_CHECK_RUNTIME="$(pwd)"
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
    console.error(`[presets-check:install] ${repoDir} already exists (use --force to refresh lib only)`);
    process.exit(1);
  }

  console.log(`[presets-check:install] Target: ${target}`);

  if (!fs.existsSync(repoDir)) {
    console.log("[presets-check:install] Cloning repository (shallow)…");
    cloneRepo(repoDir, DEFAULT_CONFIG.github);
  } else if (args.force) {
    console.log("[presets-check:install] Repo clone exists; skipping re-clone (git pull in check run)");
  }

  console.log("[presets-check:install] Copying lib/ scripts…");
  if (fs.existsSync(libDir)) {
    fs.rmSync(libDir, { recursive: true, force: true });
  }
  copyDirFiles(__dirname, libDir, PRESET_CHECK_SCRIPTS);
  copyDirFiles(path.join(MONOREPO_ROOT, "src", "shared"), sharedDir, SHARED_FILES);

  const configPath = path.join(target, "config.json");
  if (!fs.existsSync(configPath)) {
    copyFile(path.join(__dirname, "config.example.json"), path.join(target, "config.example.json"));
  }

  console.log("[presets-check:install] Writing package.json and installing dependencies…");
  writeRuntimePackageJson(target);
  // Drop prior install so dep stack changes (e.g. multi-llm-ts → AI SDK) do not leave stale modules.
  for (const name of ["node_modules", "package-lock.json"]) {
    const p = path.join(target, name);
    if (fs.existsSync(p)) {
      fs.rmSync(p, { recursive: true, force: true });
    }
  }
  npmInstall(target);
  if (writeConfig(target)) {
    console.log("[presets-check:install] Created config.json");
  } else {
    console.log("[presets-check:install] Keeping existing config.json");
  }
  if (writeRunScript(target)) {
    console.log("[presets-check:install] Created run.sh");
  } else {
    console.log("[presets-check:install] Keeping existing run.sh");
  }

  console.log(`
[presets-check:install] Done.

Next steps:
  1. Edit ${path.join(target, "config.json")} — set ntfy.topic; set github.useSsh true for SSH push
  2. Create ${path.join(target, ".env")} — PRESET_CHECK_NTFY_TOPIC, OPENROUTER_API_KEY, …
  3. Edit run.sh ssh-add path if not ~/.ssh/id-git

Dry-run:
  cd ${target} && PRESET_CHECK_DRY_RUN=1 ./run.sh

Cron example:
  0 6 * * * ${path.join(target, "run.sh")} >> ${path.join(target, "presets-check-cron.log")} 2>&1
`);
}

main();
