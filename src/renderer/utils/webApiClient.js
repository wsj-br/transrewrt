/**
 * Web API client - provides same interface as electronAPI for browser/Docker mode.
 * Uses fetch() to call the server's REST API.
 */

import { getBasePath } from "./urlUtils";
import * as sessionExpiredHandler from "./sessionExpiredHandler";

const API_BASE = getBasePath();

function handle401() {
  sessionExpiredHandler.onSessionExpired();
}

const webAPI = {
  readConfig: async () => {
    try {
      const res = await fetch(`${API_BASE}/api/config`, { credentials: "include", cache: "no-store" });
      if (res.status === 401) {
        handle401();
        return Promise.reject({ status: 401 });
      }
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
      if (res.status === 401) {
        handle401();
        return Promise.reject({ status: 401 });
      }
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

  checkSession: async () => {
    const res = await fetch(`${API_BASE}/api/auth/check`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) return Promise.reject(new Error("Session check failed"));
    return true;
  },

  logApiCall: async (payload) => {
    try {
      const res = await fetch(`${API_BASE}/api/calls`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        credentials: "include",
      });
      if (res.status === 401) {
        handle401();
      }
    } catch (err) {
      console.warn("[WebAPI] logApiCall failed:", err);
    }
  },

  getTotalCostFromDatabase: async () => {
    const res = await fetch(`${API_BASE}/api/calls/total-cost`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Failed to get total cost");
    }
    const data = await res.json();
    return { total_cost: data.total_cost ?? 0 };
  },

  getSummaryByFunction: async (from, to) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    const res = await fetch(`${API_BASE}/api/calls/summary-by-function?${q}`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) throw new Error("Failed to load summary");
    const data = await res.json();
    return data.rows || [];
  },

  getSummaryByModel: async (from, to) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    const res = await fetch(`${API_BASE}/api/calls/summary-by-model?${q}`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) throw new Error("Failed to load summary");
    const data = await res.json();
    return data.rows || [];
  },

  getSummaryByDay: async (from, to) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    const res = await fetch(`${API_BASE}/api/calls/summary-by-day?${q}`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) throw new Error("Failed to load summary");
    const data = await res.json();
    return data.rows || [];
  },

  getSummaryByTargetLang: async (from, to) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    const res = await fetch(`${API_BASE}/api/calls/summary-by-target-lang?${q}`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) throw new Error("Failed to load summary");
    const data = await res.json();
    return data.rows || [];
  },

  getSummaryByRewriteStyle: async (from, to) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    const res = await fetch(`${API_BASE}/api/calls/summary-by-rewrite-style?${q}`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) throw new Error("Failed to load summary");
    const data = await res.json();
    return data.rows || [];
  },

  getSummaryByTransformPrompt: async (from, to) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    const res = await fetch(`${API_BASE}/api/calls/summary-by-transform-prompt?${q}`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) throw new Error("Failed to load summary");
    const data = await res.json();
    return data.rows || [];
  },

  getAllCalls: async (from, to, page, pageSize) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    if (page) q.set("page", String(page));
    if (pageSize) q.set("pageSize", String(pageSize));
    const res = await fetch(`${API_BASE}/api/calls/all?${q}`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) throw new Error("Failed to load calls");
    return await res.json();
  },

  getSummaryByDayPaginated: async (from, to, page, pageSize) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    if (page) q.set("page", String(page));
    if (pageSize) q.set("pageSize", String(pageSize));
    const res = await fetch(`${API_BASE}/api/calls/summary-by-day-paginated?${q}`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) throw new Error("Failed to load summary");
    return await res.json();
  },

  deleteCallsOutsideRange: async (from, to) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    const res = await fetch(`${API_BASE}/api/calls?${q}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Failed to delete data");
    }
  },

  deleteCallsByModel: async (model) => {
    const name = model != null ? String(model).trim() : "";
    if (!name) {
      return Promise.reject(new Error("Model name is required"));
    }
    const res = await fetch(`${API_BASE}/api/calls/delete-by-model`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ model: name }),
      credentials: "include",
    });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) {
      const text = await res.text();
      let msg = "Failed to delete data";
      try {
        const data = text ? JSON.parse(text) : {};
        if (data.error && typeof data.error === "string") msg = data.error;
        else msg = `${msg} (${res.status} ${res.statusText || ""})`.trim();
      } catch (_) {
        msg = `${msg} (${res.status} ${res.statusText || ""})`.trim();
      }
      throw new Error(msg);
    }
  },

  customPrompts: {
    getAll: async () => {
      const res = await fetch(`${API_BASE}/api/custom-prompts`, { credentials: "include" });
      if (res.status === 401) {
        handle401();
        return Promise.reject({ status: 401 });
      }
      if (!res.ok) throw new Error("Failed to load custom prompts");
      return res.json();
    },
    create: async (prompt) => {
      const res = await fetch(`${API_BASE}/api/custom-prompts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prompt),
        credentials: "include",
      });
      if (res.status === 401) {
        handle401();
        return Promise.reject({ status: 401 });
      }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to create prompt");
      }
      const data = await res.json();
      return { id: data.id, error: null };
    },
    update: async (id, prompt) => {
      const res = await fetch(`${API_BASE}/api/custom-prompts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(prompt),
        credentials: "include",
      });
      if (res.status === 401) {
        handle401();
        return Promise.reject({ status: 401 });
      }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to update prompt");
      }
      return { success: true, error: null };
    },
    delete: async (id) => {
      const res = await fetch(`${API_BASE}/api/custom-prompts/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (res.status === 401) {
        handle401();
        return Promise.reject({ status: 401 });
      }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to delete prompt");
      }
      return { success: true, error: null };
    },
    export: async () => {
      const res = await fetch(`${API_BASE}/api/custom-prompts/export`, { credentials: "include" });
      if (res.status === 401) {
        handle401();
        return Promise.reject({ status: 401 });
      }
      if (!res.ok) throw new Error("Failed to export prompts");
      return res.json();
    },
    import: async (prompts, mode = "merge") => {
      const res = await fetch(`${API_BASE}/api/custom-prompts/import`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompts: Array.isArray(prompts) ? prompts : [prompts], mode }),
        credentials: "include",
      });
      if (res.status === 401) {
        handle401();
        return Promise.reject({ status: 401 });
      }
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to import prompts");
      }
      return res.json();
    },
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

  getOpenRouterKeyInfo: async () => {
    try {
      const res = await fetch(`${API_BASE}/api/key?_=${Date.now()}`, {
        credentials: "include",
        cache: "no-store",
      });
      const data = await res.json().catch(() => ({}));
      if (res.status === 401) {
        handle401();
        return Promise.reject(new Error(data.error || "Authentication required"));
      }
      if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
      return data;
    } catch (err) {
      console.error("[WebAPI] getOpenRouterKeyInfo failed:", err);
      throw err;
    }
  },

  getBuildInfo: async () => {
    try {
      const res = await fetch(`${API_BASE}/api/build-info`, { credentials: "include" });
      if (!res.ok) return { buildTimestamp: null };
      const data = await res.json();
      return { buildTimestamp: data?.buildTimestamp ?? null };
    } catch {
      return { buildTimestamp: null };
    }
  },

  getConfigPath: () => `${API_BASE}/api/config`,

  openSettings: () => {
    // No-op in web mode - settings are inline in the app
  },

  notifySettingsUpdated: () => {
    // No-op in web mode - no multi-window
  },

  onSettingsUpdated: () => {
    // No-op in web mode - no IPC
  },
};

export default webAPI;
