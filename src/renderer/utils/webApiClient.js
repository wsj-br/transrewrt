/**
 * Web API client - provides same interface as electronAPI for browser/Docker mode.
 * Uses fetch() to call the server's REST API.
 */

const API_BASE = ""; // Same origin

const webAPI = {
  readConfig: async () => {
    try {
      const res = await fetch(`${API_BASE}/api/config`);
      if (!res.ok) return {};
      const data = await res.json();
      return data && typeof data === "object" ? data : {};
    } catch (err) {
      console.error("Failed to read config:", err);
      return {};
    }
  },

  writeConfig: async (configData) => {
    try {
      const res = await fetch(`${API_BASE}/api/config`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(configData),
      });
      const json = await res.json();
      return json && json.success === true;
    } catch (err) {
      console.error("Failed to write config:", err);
      return false;
    }
  },

  getConfigPath: () => "/api/config",

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
