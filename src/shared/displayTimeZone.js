/**
 * Display timezone for UI timestamps: browser/system IANA zone when available,
 * otherwise the server TZ (Docker `TZ`, default Europe/London).
 */

const DEFAULT_SERVER_TIME_ZONE = "Europe/London";

function isValidIanaTimeZone(tz) {
  if (!tz || typeof tz !== "string") return false;
  try {
    Intl.DateTimeFormat(undefined, { timeZone: tz });
    return true;
  } catch {
    return false;
  }
}

/** IANA zone from `TZ` (Docker/server), with project default. */
function readServerTimeZoneFromEnv(env = process.env) {
  const tz = String(env?.TZ || "").trim();
  if (isValidIanaTimeZone(tz)) return tz;
  return DEFAULT_SERVER_TIME_ZONE;
}

/** Browser or Electron renderer system zone when Intl exposes it. */
function resolveBrowserTimeZone() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return isValidIanaTimeZone(tz) ? tz : undefined;
  } catch {
    return undefined;
  }
}

/**
 * Zone for formatting instants in the UI.
 * @param {string} [serverTimeZone] - from API on web when browser zone is unavailable
 * @returns {string} IANA timezone id
 */
function resolveDisplayTimeZone(serverTimeZone) {
  const browser = resolveBrowserTimeZone();
  if (browser) return browser;
  const server = String(serverTimeZone || "").trim();
  if (isValidIanaTimeZone(server)) return server;
  return DEFAULT_SERVER_TIME_ZONE;
}

module.exports = {
  DEFAULT_SERVER_TIME_ZONE,
  isValidIanaTimeZone,
  readServerTimeZoneFromEnv,
  resolveBrowserTimeZone,
  resolveDisplayTimeZone,
};
