/**
 * Load skill-check configuration (JSON file + env overrides).
 */

const fs = require("fs");
const path = require("path");

const DEFAULT_CONFIG = {
  runtimeRoot: ".",
  repoPath: "repo",
  skillsFile: "easy-mode-config/skills.json",
  catalogCachePath: "provider-catalogs-cache.json",
  logPath: "skill-check.log",
  minMatchScore: 0.55,
  github: {
    owner: "wsj-br",
    repo: "transrewrt",
    branch: "main",
    token: null,
    useSsh: false,
    commitMessagePrefix: "chore(skills): auto-replace unavailable models",
  },
  ntfy: {
    server: "https://ntfy.sh",
    topic: "",
    authToken: null,
    priority: "default",
  },
};

function readJsonFile(p) {
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

function deepMerge(base, over) {
  const out = { ...base };
  for (const [k, v] of Object.entries(over || {})) {
    if (v && typeof v === "object" && !Array.isArray(v) && typeof base[k] === "object") {
      out[k] = deepMerge(base[k], v);
    } else if (v !== undefined) {
      out[k] = v;
    }
  }
  return out;
}

function loadConfig(configPath) {
  const runtime = process.env.SKILL_CHECK_RUNTIME
    ? path.resolve(process.env.SKILL_CHECK_RUNTIME)
    : null;
  const filePath =
    configPath ||
    (runtime ? path.join(runtime, "config.json") : path.join(__dirname, "config.json"));
  const examplePath = runtime
    ? path.join(runtime, "config.example.json")
    : path.join(__dirname, "config.example.json");
  let raw = fs.existsSync(filePath) ? readJsonFile(filePath) : null;
  if (!raw && fs.existsSync(examplePath)) {
    raw = readJsonFile(examplePath);
  }
  let config = deepMerge(DEFAULT_CONFIG, raw || {});

  if (process.env.SKILL_CHECK_NTFY_TOPIC) {
    config.ntfy = { ...config.ntfy, topic: process.env.SKILL_CHECK_NTFY_TOPIC };
  }
  if (process.env.SKILL_CHECK_NTFY_SERVER) {
    config.ntfy = { ...config.ntfy, server: process.env.SKILL_CHECK_NTFY_SERVER };
  }
  if (process.env.SKILL_CHECK_NTFY_TOKEN) {
    config.ntfy = { ...config.ntfy, authToken: process.env.SKILL_CHECK_NTFY_TOKEN };
  }
  if (process.env.GITHUB_TOKEN) {
    config.github = { ...config.github, token: process.env.GITHUB_TOKEN };
  }

  const runtimeRoot = process.env.SKILL_CHECK_RUNTIME
    ? path.resolve(process.env.SKILL_CHECK_RUNTIME)
    : path.resolve(path.dirname(filePath), config.runtimeRoot || ".");

  function absFromRuntime(rel) {
    return path.isAbsolute(rel) ? rel : path.join(runtimeRoot, rel);
  }

  const skillsRel = config.skillsFile || "easy-mode-config/skills.json";
  const repoDir = absFromRuntime(config.repoPath || "repo");

  return {
    ...config,
    runtimeRoot,
    repoDir,
    skillsPath: path.join(repoDir, skillsRel),
    skillsRel,
    catalogCachePath: absFromRuntime(config.catalogCachePath || "provider-catalogs-cache.json"),
    logPath: absFromRuntime(config.logPath || "skill-check.log"),
    configFilePath: filePath,
  };
}

function isDryRun(cliDryRun) {
  if (cliDryRun) return true;
  const env = process.env.SKILL_CHECK_DRY_RUN;
  return env === "1" || env === "true" || env === "yes";
}

module.exports = { DEFAULT_CONFIG, loadConfig, isDryRun };
