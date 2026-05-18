/**
 * Easy-mode skills catalog: remote URL, JSON parse, version / updated_at merge rules.
 * Used by Electron IPC and web server routes.
 */

const fs = require("fs");
const path = require("path");

const SKILLS_REMOTE_URL =
  "https://raw.githubusercontent.com/wsj-br/transrewrt/refs/heads/main/easy-mode-config/skills.json";

/** Minimum time between remote skills.json fetch attempts (Electron + web server). */
const SKILLS_REMOTE_SYNC_INTERVAL_MS = 6 * 60 * 60 * 1000;

function parseSkillsJson(text) {
  try {
    const data = JSON.parse(text);
    if (!data || typeof data !== "object" || !Array.isArray(data.skills)) return null;
    return data;
  } catch {
    return null;
  }
}

/** @returns {number} epoch ms, or 0 if invalid */
function parseUpdatedAtMs(iso) {
  const t = Date.parse(String(iso || "").trim());
  return Number.isFinite(t) ? t : 0;
}

/** Increment the last numeric segment (e.g. 1.1.0 → 1.1.1). */
function bumpPatchVersion(version) {
  const parts = String(version || "0.0.0")
    .trim()
    .split(".")
    .map((x) => {
      const n = parseInt(x, 10);
      return Number.isFinite(n) ? n : 0;
    });
  if (parts.length === 0) parts.push(0, 0, 0);
  else if (parts.length === 1) parts.push(0, 0);
  else if (parts.length === 2) parts.push(0);
  parts[parts.length - 1] += 1;
  return parts.join(".");
}

/** Semver-like a.b.c; positive if a > b. */
function compareVersion(a, b) {
  const pa = String(a || "0")
    .split(".")
    .map((x) => parseInt(x, 10) || 0);
  const pb = String(b || "0")
    .split(".")
    .map((x) => parseInt(x, 10) || 0);
  const n = Math.max(pa.length, pb.length);
  for (let i = 0; i < n; i++) {
    const da = pa[i] || 0;
    const db = pb[i] || 0;
    if (da !== db) return da - db;
  }
  return 0;
}

/**
 * Local skills.json must not be overwritten when its updated_at is newer than remote
 * (both must parse as valid dates).
 */
function isLocalSkillsNewerThanRemote(localParsed, remoteParsed) {
  const lt = parseUpdatedAtMs(localParsed?.updated_at);
  const rt = parseUpdatedAtMs(remoteParsed?.updated_at);
  if (lt === 0 || rt === 0) return false;
  return lt > rt;
}

/**
 * Whether to write remote catalog to the user/data skills path (not used for bootstrap-only copy).
 * @param {{ userPathExists: boolean, localParsed: object, remoteParsed: object }} p
 */
function shouldWriteRemoteSkillsOverLocal(p) {
  const { userPathExists, localParsed, remoteParsed } = p;
  if (!userPathExists) return true;
  if (isLocalSkillsNewerThanRemote(localParsed, remoteParsed)) return false;
  const lt = parseUpdatedAtMs(localParsed?.updated_at);
  const rt = parseUpdatedAtMs(remoteParsed?.updated_at);
  if (rt > lt) return true;
  if (rt < lt) return false;
  return compareVersion(remoteParsed?.version, localParsed?.version) > 0;
}

/**
 * Log line when remote easy-mode skills.json replaces the local copy.
 * @param {object} remote
 * @param {object} current
 */
function formatSkillsRemoteUpdateLog(remote, current) {
  const newVersion = String(remote?.version ?? "?").trim() || "?";
  const newUpdated = String(remote?.updated_at ?? "").trim() || "unknown";
  const wasVersion = String(current?.version ?? "").trim() || "bundled";
  const wasUpdated = String(current?.updated_at ?? "").trim() || "unknown";
  return (
    `[skills] Updated skills.json to version ${newVersion} (updated_at ${newUpdated}) ` +
    `(was ${wasVersion}, updated_at ${wasUpdated})`
  );
}

/** Sidecar next to skills.json recording the last remote check time. */
function getSkillsRemoteSyncStatePath(skillsPath) {
  return path.join(path.dirname(skillsPath), ".skills-remote-sync.json");
}

/** @returns {number} epoch ms, or 0 */
function readSkillsRemoteSyncCheckedAt(statePath) {
  try {
    if (!statePath || !fs.existsSync(statePath)) return 0;
    const data = JSON.parse(fs.readFileSync(statePath, "utf8"));
    const t = Number(data?.last_checked_at);
    return Number.isFinite(t) && t > 0 ? t : 0;
  } catch {
    return 0;
  }
}

/** @param {number} [ms] */
function writeSkillsRemoteSyncCheckedAt(statePath, ms = Date.now()) {
  try {
    const dir = path.dirname(statePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(statePath, `${JSON.stringify({ last_checked_at: ms }, null, 2)}\n`, "utf8");
  } catch {
    // ignore
  }
}

function isSkillsRemoteSyncDue(lastCheckedAtMs, nowMs = Date.now()) {
  if (!lastCheckedAtMs || lastCheckedAtMs <= 0) return true;
  return nowMs - lastCheckedAtMs >= SKILLS_REMOTE_SYNC_INTERVAL_MS;
}

/** Easy mode unless config explicitly sets `mode` to `"advanced"`. */
function isEasyExperienceMode(mode) {
  return mode !== "advanced";
}

module.exports = {
  SKILLS_REMOTE_URL,
  SKILLS_REMOTE_SYNC_INTERVAL_MS,
  parseSkillsJson,
  parseUpdatedAtMs,
  bumpPatchVersion,
  compareVersion,
  isLocalSkillsNewerThanRemote,
  shouldWriteRemoteSkillsOverLocal,
  formatSkillsRemoteUpdateLog,
  getSkillsRemoteSyncStatePath,
  readSkillsRemoteSyncCheckedAt,
  writeSkillsRemoteSyncCheckedAt,
  isSkillsRemoteSyncDue,
  isEasyExperienceMode,
};
