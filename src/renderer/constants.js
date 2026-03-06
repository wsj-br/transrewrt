/** Model ID for the free tier model; always included in the list and cannot be removed. */
export const FREE_MODEL_ID = "openrouter/free";

/** True when running in web/Docker mode (no Electron). */
export const isWeb = typeof window !== "undefined" && !window.electronAPI?.getConfig;

/** Available styles for rewrite mode. */
export const REWRITE_STYLES = [
  "Check Spelling & Grammar",
  "Improve Clarity",
  "Make Formal",
  "Make Informal",
  "Shorten",
  "Expand",
  "Make Technical",
];
