/**
 * Git fetch / commit / push for presets.json only (isolated runtime clone).
 */

const { spawnSync } = require("child_process");
const path = require("path");

function git(cwd, args, opts = {}) {
  const r = spawnSync("git", args, {
    cwd,
    encoding: "utf8",
    stdio: opts.capture !== false ? "pipe" : "inherit",
  });
  if (r.error) throw r.error;
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
function commitAndPushPresetsFile(repoDir, opts = {}) {
  const branch = opts.branch || opts.github?.branch || "main";
  const presetsFile = opts.presetsFile || "easy-mode-config/presets.json";
  const prefix = opts.commitMessagePrefix || "chore(presets): auto-replace unavailable models";
  const lines = Array.isArray(opts.changeLines) ? opts.changeLines : [];
  const body = lines.length ? `\n\n${lines.map((l) => `- ${l}`).join("\n")}` : "";
  const message = `${prefix} [presets-check]${body}`;

  if (opts.github) configureGitRemote(repoDir, opts.github);

  git(repoDir, ["add", "--", presetsFile]);
  git(repoDir, ["commit", "-m", message]);

  git(repoDir, ["fetch", "origin", branch]);
  const rebase = git(repoDir, ["pull", "--rebase", "origin", branch], { allowFail: true });
  if (rebase.status !== 0) {
    const msg = (rebase.stderr || rebase.stdout || "").trim();
    throw new Error(`git pull --rebase before push failed: ${msg.slice(0, 500)}`);
  }

  const head = git(repoDir, ["rev-parse", "--short", "HEAD"]);
  const commit = (head.stdout || "").trim();

  git(repoDir, ["push", "origin", `HEAD:${branch}`]);

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
