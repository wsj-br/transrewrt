/**
 * Regular-mode skills catalog: remote URL, JSON parse, version / updated_at merge rules.
 * Used by Electron IPC and web server routes.
 */

const SKILLS_REMOTE_URL =
  "https://raw.githubusercontent.com/wsj-br/transrewrt/refs/heads/main/regular-mode-config/skills.json";

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

module.exports = {
  SKILLS_REMOTE_URL,
  parseSkillsJson,
  parseUpdatedAtMs,
  compareVersion,
  isLocalSkillsNewerThanRemote,
  shouldWriteRemoteSkillsOverLocal,
};
