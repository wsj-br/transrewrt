/**
 * Base path from window.location for reverse-proxy support (e.g. /translator).
 * Shared by apiService and webApiClient.
 */
export function getBasePath() {
  if (typeof window !== "undefined" && window.location.pathname) {
    const path = window.location.pathname.replace(/\/$/, "");
    if (path && path !== "/") {
      return path;
    }
  }
  return "";
}
