/**
 * Rolling key for Transrewrt API proxy (HMAC-SHA256 TOTP).
 * Must match the proxy: 30s window, HMAC-SHA256(KEY_SEED, string(time_window)), base64url, first 16 chars.
 */

const WINDOW_SECONDS = 30;

/**
 * Compute the current rolling key for the Transrewrt proxy.
 * @param {string} keySeed - KEY_SEED (UTF-8)
 * @param {(message: string, data: object) => void} [logFn] - Optional; when provided (e.g. in dev), called with debug info for server-side logging
 * @returns {Promise<string>} First 16 characters of base64url-encoded HMAC-SHA256 digest
 */
export async function getRollingKey(keySeed, logFn) {
  if (!keySeed || typeof keySeed !== "string") return "";
  const timeWindow = Math.floor(Date.now() / 1000 / WINDOW_SECONDS);
  const keyData = new TextEncoder().encode(keySeed);
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const message = new TextEncoder().encode(String(timeWindow));
  const signature = await crypto.subtle.sign("HMAC", cryptoKey, message);
  const bytes = new Uint8Array(signature);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  const base64 = btoa(binary);
  const base64url = base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  const rollingKey = base64url.substring(0, 16);
  if (typeof logFn === "function") {
    const windowStart = timeWindow * WINDOW_SECONDS;
    const windowEnd = windowStart + WINDOW_SECONDS - 1;
    logFn("getRollingKey", {
      timeWindow,
      windowSeconds: WINDOW_SECONDS,
      windowValidFrom: new Date(windowStart * 1000).toISOString(),
      windowValidTo: new Date(windowEnd * 1000).toISOString(),
      rollingKeyMasked: rollingKey ? `${rollingKey.slice(0, 2)}***` : "(empty)",
      keySeedLength: keySeed.length,
    });
  }
  return rollingKey;
}
