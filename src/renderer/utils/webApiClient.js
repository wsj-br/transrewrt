/**
 * Web API client - provides same interface as electronAPI for browser/Docker mode.
 * Uses fetch() to call the server's REST API.
 */

// Detect base path from window location for reverse proxy support (e.g., /translator)
function getBasePath() {
  if (typeof window !== "undefined" && window.location.pathname) {
    // Get the path segment - e.g., /translator/ -> /translator
    const path = window.location.pathname.replace(/\/$/, "");
    // If there's a path (not root), return it
    if (path && path !== "/") {
      return path;
    }
  }
  return "";
}

const API_BASE = getBasePath();
console.log(`[WebAPI] Detected base path: "${API_BASE}"`);

const webAPI = {
  readConfig: async () => {
    console.log("[WebAPI] readConfig - Fetching config from server");
    try {
      const res = await fetch(`${API_BASE}/api/config`);
      console.log(`[WebAPI] readConfig - Response status: ${res.status}`);
      if (!res.ok) {
        console.log("[WebAPI] readConfig - Response not OK, returning empty object");
        return {};
      }
      const data = await res.json();
      console.log(`[WebAPI] readConfig - Received config with keys: ${Object.keys(data || {}).join(", ")}`);
      if (data && data.api_key) {
        console.log(`[WebAPI] readConfig - API Key present: ${data.api_key.substring(0, 8)}...`);
      } else {
        console.log("[WebAPI] readConfig - No API Key in received config");
      }
      return data && typeof data === "object" ? data : {};
    } catch (err) {
      console.error("[WebAPI] readConfig - Failed to read config:", err);
      return {};
    }
  },

  writeConfig: async (configData) => {
    console.log("[WebAPI] writeConfig - Sending config to server");
    console.log(`[WebAPI] writeConfig - Config keys: ${Object.keys(configData || {}).join(", ")}`);
    if (configData && configData.api_key) {
      console.log(`[WebAPI] writeConfig - API Key being sent: ${configData.api_key.substring(0, 8)}...`);
    } else {
      console.log("[WebAPI] writeConfig - No API Key in config being sent");
    }
    try {
      const res = await fetch(`${API_BASE}/api/config`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(configData),
      });
      console.log(`[WebAPI] writeConfig - Response status: ${res.status}`);
      const json = await res.json();
      console.log(`[WebAPI] writeConfig - Response: ${JSON.stringify(json)}`);
      const success = json && json.success === true;
      console.log(`[WebAPI] writeConfig - Success: ${success}`);
      return success;
    } catch (err) {
      console.error("[WebAPI] writeConfig - Failed to write config:", err);
      return false;
    }
  },

  getConfigPath: () => `${API_BASE}/api/config`,

  openSettings: () => {
    // No-op in web mode - settings are inline modal
  },

  notifySettingsUpdated: () => {
    // No-op in web mode - no multi-window
  },

  onSettingsUpdated: () => {
    // No-op in web mode - no IPC
  },
};

export default webAPI;
