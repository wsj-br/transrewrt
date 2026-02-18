/**
 * Web API client - provides same interface as electronAPI for browser/Docker mode.
 * Uses fetch() to call the server's REST API.
 */

import { getBasePath } from "./urlUtils";

const API_BASE = getBasePath();

const webAPI = {
  readConfig: async () => {
    try {
      const res = await fetch(`${API_BASE}/api/config`, { credentials: "include" });
      if (res.status === 401) return Promise.reject({ status: 401 });
      if (!res.ok) return {};
      const data = await res.json();
      return data && typeof data === "object" ? data : {};
    } catch (err) {
      if (err && err.status === 401) throw err;
      console.error("[WebAPI] readConfig failed:", err);
      return {};
    }
  },

  writeConfig: async (configData) => {
    try {
      const res = await fetch(`${API_BASE}/api/config`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(configData),
        credentials: "include",
      });
      if (res.status === 401) return Promise.reject({ status: 401 });
      const json = await res.json();
      return json && json.success === true;
    } catch (err) {
      if (err && err.status === 401) throw err;
      console.error("[WebAPI] writeConfig failed:", err);
      return false;
    }
  },

  login: async (password) => {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
      credentials: "include",
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Login failed");
    }
    return true;
  },

  changePassword: async (newPassword) => {
    const res = await fetch(`${API_BASE}/api/auth/change-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPassword }),
      credentials: "include",
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Failed to change password");
    }
    return true;
  },

  logout: async () => {
    const res = await fetch(`${API_BASE}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Logout failed");
    }
    return true;
  },

  logApiCall: async (payload) => {
    try {
      await fetch(`${API_BASE}/api/calls`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include",
      });
    } catch (err) {
      console.warn("[WebAPI] logApiCall failed:", err);
    }
  },

  getSummaryByFunction: async (from, to) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    const res = await fetch(`${API_BASE}/api/calls/summary-by-function?${q}`, { credentials: "include" });
    if (!res.ok) throw new Error("Failed to load summary");
    const data = await res.json();
    return data.rows || [];
  },

  getSummaryByModel: async (from, to) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    const res = await fetch(`${API_BASE}/api/calls/summary-by-model?${q}`, { credentials: "include" });
    if (!res.ok) throw new Error("Failed to load summary");
    const data = await res.json();
    return data.rows || [];
  },

  getSummaryByDay: async (from, to) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    const res = await fetch(`${API_BASE}/api/calls/summary-by-day?${q}`, { credentials: "include" });
    if (!res.ok) throw new Error("Failed to load summary");
    const data = await res.json();
    return data.rows || [];
  },

  deleteCallsOutsideRange: async (from, to) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    const res = await fetch(`${API_BASE}/api/calls?${q}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Failed to delete data");
    }
  },

  getApiStatus: async () => {
    try {
      const res = await fetch(`${API_BASE}/api/status`, { credentials: "include" });
      const data = await res.json();
      return {
        apiKeySet: !!data.apiKeySet,
        apiKeyValid: !!data.apiKeyValid,
        message: data.message || "",
      };
    } catch (err) {
      console.error("[WebAPI] getApiStatus failed:", err);
      return { apiKeySet: false, apiKeyValid: false, message: err.message || "Failed to check API status." };
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
