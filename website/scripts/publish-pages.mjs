#!/usr/bin/env node
/**
 * Trigger a GitHub Actions deploy of website/ to GitHub Pages (no app release required).
 *
 * The workflow builds whatever is already on the remote ref — local edits are never
 * uploaded. This script refuses to dispatch when website/ has uncommitted changes
 * (or, by default, when the publish ref has local commits not yet pushed).
 *
 * Usage (from website/ or repo root via pnpm website:publish):
 *   node scripts/publish-pages.mjs
 *   node scripts/publish-pages.mjs --ref main
 *   node scripts/publish-pages.mjs --dry-run
 *   node scripts/publish-pages.mjs --watch
 *   node scripts/publish-pages.mjs --allow-dirty
 *
 * Prerequisites: gh auth, push access; repo Settings → Pages → Source = GitHub Actions.
 */

import { execFileSync } from "node:child_process";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { setTimeout as sleep } from "node:timers/promises";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "../..");
const useShell = process.platform === "win32";

const WORKFLOW = "website-pages.yml";
let ref = "";
let dryRun = false;
let watch = false;
let allowDirty = false;

function usage() {
  console.log(`Usage: node scripts/publish-pages.mjs [--ref <branch|sha|tag>] [--watch] [--dry-run] [--allow-dirty]

Triggers the "Deploy website (GitHub Pages)" workflow on GitHub Actions.

The workflow builds the remote git ref (not your working tree). By default this
script aborts if website/ has uncommitted changes, or if the publish branch has
local commits that are not pushed to origin yet.

Options:
  --ref <ref>     Git ref to build (default: the repo default branch).
  --watch         After dispatch, wait for the run and stream status (gh run watch).
  --dry-run       Validate checks and print the gh command; do not dispatch.
  --allow-dirty   Skip the clean-tree / unpushed-commit checks (not recommended).
  -h, --help      Show this help.`);
}

const args = process.argv.slice(2);
for (let i = 0; i < args.length; i += 1) {
  const arg = args[i];
  switch (arg) {
    case "--":
      break;
    case "--ref": {
      const value = args[i + 1];
      if (!value) {
        console.error("Error: --ref requires a value");
        process.exit(1);
      }
      ref = value;
      i += 1;
      break;
    }
    case "--watch":
      watch = true;
      break;
    case "--dry-run":
      dryRun = true;
      break;
    case "--allow-dirty":
      allowDirty = true;
      break;
    case "-h":
    case "--help":
      usage();
      process.exit(0);
      break;
    default:
      console.error(`Unknown argument: ${arg}`);
      usage();
      process.exit(1);
  }
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

function run(command, cmdArgs, { quiet = false, inherit = true } = {}) {
  try {
    const stdout = execFileSync(command, cmdArgs, {
      cwd: root,
      encoding: "utf8",
      stdio: quiet ? "pipe" : inherit ? "inherit" : "pipe",
      shell: useShell,
    });
    return { ok: true, stdout: typeof stdout === "string" ? stdout : "" };
  } catch (err) {
    if (quiet) {
      return {
        ok: false,
        stdout: typeof err.stdout === "string" ? err.stdout : "",
        status: err.status ?? 1,
      };
    }
    const detail = err.status != null ? ` (exit ${err.status})` : "";
    fail(`${command} ${cmdArgs.join(" ")} failed${detail}`);
  }
}

function requireCmd(name) {
  if (!run(name, ["--version"], { quiet: true }).ok) {
    fail(`Missing required command: ${name}`);
  }
}

requireCmd("gh");
requireCmd("git");

if (!run("gh", ["auth", "status"], { quiet: true }).ok) {
  fail("GitHub CLI is not authenticated. Run: gh auth login");
}

if (!run("git", ["rev-parse", "--is-inside-work-tree"], { quiet: true }).ok) {
  fail("Not inside a git repository.");
}

if (!allowDirty) {
  const websiteDirty = run(
    "git",
    ["status", "--porcelain", "--untracked-files=normal", "--", "website/"],
    { quiet: true, inherit: false },
  ).stdout;
  if (websiteDirty.trim()) {
    console.error("Error: website/ has uncommitted changes. GitHub Pages builds the remote");
    console.error("ref only — commit (and push) these first, or pass --allow-dirty to override.");
    console.error("");
    console.error(websiteDirty.trimEnd());
    process.exit(1);
  }

  let publishRef = ref;
  if (!publishRef) {
    const originHead = run("git", ["symbolic-ref", "-q", "--short", "refs/remotes/origin/HEAD"], {
      quiet: true,
      inherit: false,
    });
    if (originHead.ok) {
      publishRef = originHead.stdout.trim().replace(/^origin\//, "");
    }
    if (!publishRef) {
      const fromGh = run(
        "gh",
        ["repo", "view", "--json", "defaultBranchRef", "--jq", ".defaultBranchRef.name"],
        { quiet: true, inherit: false },
      );
      if (fromGh.ok) publishRef = fromGh.stdout.trim();
    }
    if (!publishRef) {
      fail("Could not resolve the default branch; pass --ref explicitly.");
    }
  }

  if (run("git", ["show-ref", "--verify", "--quiet", `refs/heads/${publishRef}`], { quiet: true }).ok) {
    const upstream = `origin/${publishRef}`;
    if (run("git", ["show-ref", "--verify", "--quiet", `refs/remotes/${upstream}`], { quiet: true }).ok) {
      const aheadResult = run("git", ["rev-list", "--count", `${upstream}..${publishRef}`], {
        quiet: true,
        inherit: false,
      });
      const ahead = Number.parseInt(aheadResult.stdout.trim() || "0", 10);
      if (Number.isFinite(ahead) && ahead > 0) {
        fail(
          `Branch '${publishRef}' is ${ahead} commit(s) ahead of ${upstream}. Push before publishing (or pass --allow-dirty).`,
        );
      }
    } else {
      console.error(`Warning: no remote-tracking branch ${upstream}; cannot verify push state.`);
    }
  }
}

const cmd = ["workflow", "run", WORKFLOW];
if (ref) {
  cmd.push("--ref", ref);
}

console.log(`Dispatching ${WORKFLOW}${ref ? ` (ref: ${ref})` : ""}…`);
if (dryRun) {
  console.log(`[dry-run] gh ${cmd.join(" ")}`);
  process.exit(0);
}

run("gh", cmd);

console.log("Workflow dispatched. Track progress:");
console.log(`  https://github.com/wsj-br/transrewrt/actions/workflows/${WORKFLOW}`);
console.log("Site (after deploy): https://wsj-br.github.io/transrewrt/");

if (watch) {
  console.log("Waiting for the new run…");
  await sleep(3000);
  const runId = run(
    "gh",
    ["run", "list", "--workflow", WORKFLOW, "--limit", "1", "--json", "databaseId", "--jq", ".[0].databaseId"],
    { quiet: true, inherit: false },
  ).stdout.trim();
  if (!runId || runId === "null") {
    console.error("Could not resolve the new run id; open the Actions URL above.");
    process.exit(1);
  }
  run("gh", ["run", "watch", runId]);
}
