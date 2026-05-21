/**
 * Git fetch / commit / push for skills.json only (isolated runtime clone).
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
 * Fetch latest skills.json from remote branch into working tree.
 * @param {string} repoDir
 * @param {{ branch?: string, skillsFile?: string, github?: object }} opts
 */
function fetchLatestSkillsFile(repoDir, opts = {}) {
  const branch = opts.branch || opts.github?.branch || "main";

  if (opts.github) configureGitRemote(repoDir, opts.github);

  git(repoDir, ["fetch", "origin", branch]);
  git(repoDir, ["reset", "--hard", `origin/${branch}`]);
}

/**
 * @param {string} repoDir
 * @param {string} skillsFile
 * @returns {boolean}
 */
function hasSkillsFileChanges(repoDir, skillsFile) {
  const r = git(repoDir, ["diff", "--quiet", "--", skillsFile], { allowFail: true });
  return r.status !== 0;
}

/**
 * Commit and push only skills.json.
 * @returns {{ commit: string, pushed: boolean }}
 */
function commitAndPushSkillsFile(repoDir, opts = {}) {
  const branch = opts.branch || opts.github?.branch || "main";
  const skillsFile = opts.skillsFile || "easy-mode-config/skills.json";
  const prefix = opts.commitMessagePrefix || "chore(skills): auto-replace unavailable models";
  const lines = Array.isArray(opts.changeLines) ? opts.changeLines : [];
  const body = lines.length ? `\n\n${lines.map((l) => `- ${l}`).join("\n")}` : "";
  const message = `${prefix} [skill-check]${body}`;

  if (opts.github) configureGitRemote(repoDir, opts.github);

  git(repoDir, ["add", "--", skillsFile]);
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
  fetchLatestSkillsFile,
  hasSkillsFileChanges,
  commitAndPushSkillsFile,
  cloneRepo,
};
