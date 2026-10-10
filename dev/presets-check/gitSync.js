/**
 * Git fetch / commit / push for presets.json only (isolated runtime clone).
 */

const { spawnSync } = require("child_process");
const path = require("path");

function git(cwd, args, opts = {}) {
  const timeout = typeof opts.timeout === "number" ? opts.timeout : 120000;
  const r = spawnSync("git", args, {
    cwd,
    encoding: "utf8",
    timeout,
    stdio: opts.capture !== false ? "pipe" : "inherit",
  });
  if (r.error) {
    if (r.error.code === "ETIMEDOUT") {
      throw new Error(`git ${args.join(" ")} timed out after ${timeout}ms`);
    }
    throw r.error;
  }
  if (r.status !== 0 && !opts.allowFail) {
    const msg = (r.stderr || r.stdout || "").trim();
    throw new Error(`git ${args.join(" ")} failed (${r.status}): ${msg.slice(0, 500)}`);
  }
  return r;
}

function githubRemoteUrl(github) {
  const owner = github.owner || "wsj-br";
  const repo = github.repo || "transrewrt";
  if (github.useSsh) {
    return `git@github.com:${owner}/${repo}.git`;
  }
  const token = (github.token || process.env.GITHUB_TOKEN || "").trim();
  if (token) {
    return `https://x-access-token:${token}@github.com/${owner}/${repo}.git`;
  }
  return `https://github.com/${owner}/${repo}.git`;
}

function configureGitRemote(repoDir, github) {
  const url = githubRemoteUrl(github);
  git(repoDir, ["remote", "set-url", "origin", url], { allowFail: false });
}

/**
 * Fetch latest presets.json from remote branch into working tree.
 * @param {string} repoDir
 * @param {{ branch?: string, presetsFile?: string, github?: object }} opts
 */
function fetchLatestPresetsFile(repoDir, opts = {}) {
  const branch = opts.branch || opts.github?.branch || "main";

  if (opts.github) configureGitRemote(repoDir, opts.github);

  git(repoDir, ["fetch", "origin", branch]);
  git(repoDir, ["reset", "--hard", `origin/${branch}`]);
}

/**
 * @param {string} repoDir
 * @param {string} presetsFile
 * @returns {boolean}
 */
function hasPresetsFileChanges(repoDir, presetsFile) {
  const r = git(repoDir, ["diff", "--quiet", "--", presetsFile], { allowFail: true });
  return r.status !== 0;
}

/**
 * Commit and push only presets.json.
 * @returns {{ commit: string, pushed: boolean }}
 */
function stagedNames(repoDir, timeout) {
  const staged = git(repoDir, ["diff", "--cached", "--name-only"], { timeout });
  return String(staged.stdout || "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function commitAndPushPresetsFile(repoDir, opts = {}) {
  const branch = opts.branch || opts.github?.branch || "main";
  const presetsFile = opts.presetsFile || "easy-mode-config/presets.json";
  const prefix = opts.commitMessagePrefix || "chore(presets): auto-replace unavailable models";
  const lines = Array.isArray(opts.changeLines) ? opts.changeLines : [];
  const body = lines.length ? `\n\n${lines.map((l) => `- ${l}`).join("\n")}` : "";
  const message = `${prefix} [presets-check]${body}`;
  const timeout = typeof opts.gitTimeoutMs === "number" ? opts.gitTimeoutMs : 120000;

  if (opts.github) configureGitRemote(repoDir, opts.github);

  if (!hasPresetsFileChanges(repoDir, presetsFile)) {
    return { commit: null, pushed: false, skipped: true };
  }

  git(repoDir, ["add", "--", presetsFile], { timeout });
  const names = stagedNames(repoDir, timeout);
  if (names.length !== 1 || names[0] !== presetsFile) {
    git(repoDir, ["reset", "HEAD", "--", presetsFile], { timeout, allowFail: true });
    throw new Error(
      `Refusing to commit unexpected staged files: ${names.join(", ") || "(none)"}`,
    );
  }
  git(repoDir, ["commit", "-m", message], { timeout });

  git(repoDir, ["fetch", "origin", branch], { timeout });
  const rebase = git(repoDir, ["pull", "--rebase", "origin", branch], { timeout, allowFail: true });
  if (rebase.status !== 0) {
    git(repoDir, ["rebase", "--abort"], { timeout, allowFail: true });
    const msg = (rebase.stderr || rebase.stdout || "").trim();
    throw new Error(`git pull --rebase before push failed: ${msg.slice(0, 500)}`);
  }

  const push = git(repoDir, ["push", "origin", `HEAD:${branch}`], { timeout, allowFail: true });
  if (push.status !== 0) {
    const msg = (push.stderr || push.stdout || "").trim();
    const race = /non-fast-forward|fetch first|rejected/i.test(msg);
    if (race && typeof opts.writeFile === "function" && opts.fileContents && !opts._retried) {
      git(repoDir, ["reset", "--hard", `origin/${branch}`], { timeout });
      opts.writeFile(opts.fileContents);
      return commitAndPushPresetsFile(repoDir, { ...opts, _retried: true });
    }
    throw new Error(`git push failed (${push.status}): ${msg.slice(0, 500)}`);
  }

  const head = git(repoDir, ["rev-parse", "--short", "HEAD"], { timeout });
  const commit = (head.stdout || "").trim();
  return { commit, pushed: true };
}

function cloneRepo(targetRepoDir, github) {
  const url = githubRemoteUrl(github);
  const branch = github.branch || "main";
  const parent = path.dirname(targetRepoDir);
  const r = spawnSync(
    "git",
    ["clone", "--depth", "1", "--branch", branch, url, targetRepoDir],
    { cwd: parent, encoding: "utf8", stdio: "pipe" },
  );
  if (r.status !== 0) {
    throw new Error(`git clone failed: ${(r.stderr || r.stdout || "").slice(0, 500)}`);
  }
}

module.exports = {
  git,
  githubRemoteUrl,
  configureGitRemote,
  fetchLatestPresetsFile,
  hasPresetsFileChanges,
  commitAndPushPresetsFile,
  cloneRepo,
};
