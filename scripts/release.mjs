#!/usr/bin/env node
/**
 * Creates a GitHub release from the local CLI using:
 * - tag/title: v<package.json version>
 * - notes file: release-notes/RELEASE_NOTES_<version>.md
 *
 * If the tag (or a GitHub release for it) already exists, it is removed and
 * the tag is recreated at the current HEAD, then pushed — so you can fix a
 * mistaken tag or re-run the release after new commits.
 *
 * Usage:
 *   node scripts/release.mjs
 *   node scripts/release.mjs --dry-run
 *   node scripts/release.mjs --verify-clean=false
 */

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

let verifyClean = true;
let dryRun = false;

function usage() {
  console.log(`Usage: node scripts/release.mjs [--dry-run] [--verify-clean=true|false]

Options:
  --dry-run            Validate and print planned steps; no deletes, tag, push, or release.
  --verify-clean=true  Require clean git working tree (default).
  --verify-clean=false Skip clean-tree check.

If tag v<version> or a GitHub release for it already exists, they are removed
and the tag is recreated at HEAD, then pushed to origin.`);
}

for (const arg of process.argv.slice(2)) {
  switch (arg) {
    case "--dry-run":
      dryRun = true;
      break;
    case "--verify-clean=false":
      verifyClean = false;
      break;
    case "--verify-clean=true":
      verifyClean = true;
      break;
    case "-h":
    case "--help":
      usage();
      process.exit(0);
      break;
    default:
      console.error(`Unknown argument: ${arg}`);
      process.exit(1);
  }
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

/**
 * Run a command with an argv array. Prefer no shell so argv (e.g.
 * `-m "Release v1.6.2"`) is preserved on Windows and Linux — using a shell
 * splits on spaces and makes `git tag` fail with "fatal: too many arguments".
 *
 * Exception: on Windows, `pnpm` is typically a `.cmd` shim and needs shell:true
 * (git / gh / node are native executables and work with shell:false).
 */
function run(command, args, { quiet = false, inherit = true } = {}) {
  const needsShell = process.platform === "win32" && command === "pnpm";
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: "utf8",
    env: process.env,
    shell: needsShell,
    stdio: quiet ? "pipe" : inherit ? "inherit" : "pipe",
  });

  if (result.error) {
    if (quiet) {
      return { ok: false, stdout: "", status: 1 };
    }
    fail(`failed to start ${command}: ${result.error.message}`);
  }

  const status = result.status ?? 1;
  if (status !== 0) {
    if (quiet) {
      return {
        ok: false,
        stdout: typeof result.stdout === "string" ? result.stdout : "",
        status,
      };
    }
    fail(`${command} ${args.join(" ")} failed (exit ${status})`);
  }

  return {
    ok: true,
    stdout: typeof result.stdout === "string" ? result.stdout : "",
    status,
  };
}

function requireCmd(name) {
  // Same probe on Windows and Linux: spawn the binary directly (no shell),
  // except pnpm on Windows (see run()).
  const check = run(name, ["--version"], { quiet: true });
  if (!check.ok) fail(`Missing required command: ${name}`);
}

requireCmd("gh");
requireCmd("git");
requireCmd("node");
requireCmd("pnpm");

if (!run("git", ["rev-parse", "--is-inside-work-tree"], { quiet: true }).ok) {
  fail("Not inside a git repository.");
}

if (!run("gh", ["auth", "status"], { quiet: true }).ok) {
  fail("GitHub CLI is not authenticated. Run: gh auth login");
}

const packageJsonPath = path.join(root, "package.json");
if (!fs.existsSync(packageJsonPath)) {
  fail("package.json not found in current directory.");
}

const { version } = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
if (!version || typeof version !== "string") {
  fail("Could not read package.json version.");
}

const tag = `v${version}`;
const notesFile = `release-notes/RELEASE_NOTES_${version}.md`;
const notesPath = path.join(root, "release-notes", `RELEASE_NOTES_${version}.md`);

if (!fs.existsSync(notesPath)) {
  fail(`Release notes file not found: ${notesFile}`);
}

if (verifyClean) {
  const status = run("git", ["status", "--porcelain"], { quiet: true, inherit: false });
  if (status.stdout.trim()) {
    fail("Working tree is not clean. Commit/stash changes or run with --verify-clean=false");
  }
}

if (!run("git", ["remote", "get-url", "origin"], { quiet: true }).ok) {
  fail("Remote 'origin' not configured.");
}

console.log("Syncing dependencies...");
run("pnpm", ["install", "--no-frozen-lockfile"]);

const headCommit = run("git", ["rev-parse", "HEAD"], { quiet: true, inherit: false }).stdout.trim();

function remoteTagExists() {
  const result = run("git", ["ls-remote", "origin", `refs/tags/${tag}`], {
    quiet: true,
    inherit: false,
  });
  return result.ok && Boolean(result.stdout.trim());
}

function localTagExists() {
  return run("git", ["rev-parse", "-q", "--verify", `refs/tags/${tag}`], { quiet: true }).ok;
}

function releaseExists() {
  return run("gh", ["release", "view", tag], { quiet: true }).ok;
}

function recreateTagAtHead() {
  if (dryRun) {
    console.log(`[dry-run] HEAD commit: ${headCommit}`);
    if (releaseExists()) {
      console.log(`[dry-run] Would delete GitHub release: ${tag}`);
    }
    if (remoteTagExists()) {
      console.log(`[dry-run] Would delete remote tag: origin ${tag}`);
    }
    if (localTagExists()) {
      console.log(`[dry-run] Would delete local tag: ${tag}`);
    }
    console.log(`[dry-run] Would create annotated tag ${tag} at HEAD and push to origin.`);
    return;
  }

  if (releaseExists()) {
    console.log(`Deleting existing GitHub release ${tag} (and its tag on the remote)...`);
    run("gh", ["release", "delete", tag, "--yes", "--cleanup-tag"]);
  } else if (remoteTagExists()) {
    console.log(`Deleting remote tag ${tag}...`);
    run("git", ["push", "origin", `:refs/tags/${tag}`]);
  }

  if (localTagExists()) {
    console.log(`Deleting local tag ${tag}...`);
    run("git", ["tag", "-d", tag]);
  }

  console.log(`Creating annotated tag ${tag} at HEAD (${headCommit})...`);
  run("git", ["tag", "-a", tag, "-m", `Release ${tag}`, "HEAD"]);

  console.log(`Pushing tag ${tag} to origin...`);
  run("git", ["push", "origin", `refs/tags/${tag}`]);
}

recreateTagAtHead();

console.log("Release inputs:");
console.log(`  Tag:        ${tag}`);
console.log(`  Title:      ${tag}`);
console.log(`  Notes file: ${notesFile}`);

if (dryRun) {
  console.log("[dry-run] Would run:");
  console.log(`  gh release create ${tag} --title ${tag} --notes-file ${notesFile}`);
  process.exit(0);
}

run("gh", ["release", "create", tag, "--title", tag, "--notes-file", notesFile]);
console.log(`Release created successfully: ${tag}`);
console.log("");
console.log("See the progress at the github repository https://github.com/wsj-br/transrewrt/actions");
console.log("");
