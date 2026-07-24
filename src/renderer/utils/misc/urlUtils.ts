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

/** Open a URL in the system browser (Electron) or a new tab (web). */
export function openExternalUrl(url: string) {
  if (!url) return;
  if (typeof window !== "undefined" && window.electronAPI?.openExternalUrl) {
    window.electronAPI.openExternalUrl(url).catch(() => {});
    return;
  }
  window.open(url, "_blank", "noopener,noreferrer");
}
