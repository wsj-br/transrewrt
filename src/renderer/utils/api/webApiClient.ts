/**
 * Web API client - provides same interface as electronAPI for browser/Docker mode.
 * Uses fetch() to call the server's REST API.
 */

import { getBasePath } from "../misc/urlUtils";
import * as sessionExpiredHandler from "../misc/sessionExpiredHandler";
import { configBackupFileStem } from "../../../shared/configBackup/fileStem.js";

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

  readSkills: async () => {
    try {
      const res = await fetch(`${API_BASE}/api/skills`, { credentials: "include", cache: "no-store" });
      if (res.status === 401) {
        handle401();
        return Promise.reject({ status: 401 });
      }
      if (!res.ok) {
        return { version: "0.0.0", updated_at: "", skills: [] };
      }
      const data = await res.json();
      return data && typeof data === "object" ? data : { version: "0.0.0", updated_at: "", skills: [] };
    } catch (err) {
      if (err && err.status === 401) throw err;
      console.error("[WebAPI] readSkills failed:", err);
      return { version: "0.0.0", updated_at: "", skills: [] };
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

  getFirstLoginInfo: async () => {
    try {
      const res = await fetch(`${API_BASE}/api/auth/first-login-info`, { credentials: "include" });
      if (!res.ok) return { firstLogin: false };
      const data = await res.json().catch(() => ({}));
      return { firstLogin: !!data.firstLogin };
    } catch (err) {
      console.error("[WebAPI] getFirstLoginInfo failed:", err);
      return { firstLogin: false };
    }
  },

  login: async (username, password) => {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Login failed");
    }
    const data = await res.json();
    return { username: data.username, role: data.role, mustChangePassword: !!data.mustChangePassword };
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

  checkAuth: async () => {
    const res = await fetch(`${API_BASE}/api/auth/check`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) return Promise.reject(new Error("Session check failed"));
    const data = await res.json();
    return {
      ok: !!data.ok,
      username: data.username ?? null,
      role: data.role ?? null,
      mustChangePassword: !!data.mustChangePassword,
    };
  },

  getUsers: async () => {
    const res = await fetch(`${API_BASE}/api/users`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (res.status === 403) return Promise.reject(new Error("Admin access required"));
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Failed to load users");
    }
    const data = await res.json();
    return data.users || [];
  },

  createUser: async ({ username, password, role, must_change_password }) => {
    const res = await fetch(`${API_BASE}/api/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        role: role || "user",
        must_change_password: must_change_password === true || must_change_password === 1 ? 1 : 0,
      }),
      credentials: "include",
    });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (res.status === 403) return Promise.reject(new Error("Admin access required"));
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Failed to create user");
    }
    return await res.json();
  },

  updateUser: async (id, { username, role, must_change_password }) => {
    const res = await fetch(`${API_BASE}/api/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, role, must_change_password }),
      credentials: "include",
    });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (res.status === 403) return Promise.reject(new Error("Admin access required"));
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Failed to update user");
    }
    return await res.json();
  },

  setUserPassword: async (id, newPassword) => {
    const res = await fetch(`${API_BASE}/api/users/${id}/change-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPassword }),
      credentials: "include",
    });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (res.status === 403) return Promise.reject(new Error("Admin access required"));
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Failed to set password");
    }
  },

  revokeUserSessions: async (id) => {
    const res = await fetch(`${API_BASE}/api/users/${id}/revoke-sessions`, {
      method: "POST",
      credentials: "include",
    });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (res.status === 403) return Promise.reject(new Error("Admin access required"));
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Failed to revoke sessions");
    }
  },

  deleteUser: async (id) => {
    const res = await fetch(`${API_BASE}/api/users/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (res.status === 403) return Promise.reject(new Error("Admin access required"));
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Failed to delete user");
    }
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

  getTotalCostFromDatabase: async (username = null) => {
    const q = new URLSearchParams();
    if (username) q.set("username", username);
    const res = await fetch(`${API_BASE}/api/calls/total-cost?${q}`, { credentials: "include" });
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

  getSummaryByFunction: async (from, to, username = null) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    if (username) q.set("username", username);
    const res = await fetch(`${API_BASE}/api/calls/summary-by-function?${q}`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) throw new Error("Failed to load summary");
    const data = await res.json();
    return data.rows || [];
  },

  getSummaryByModel: async (from, to, username = null) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    if (username) q.set("username", username);
    const res = await fetch(`${API_BASE}/api/calls/summary-by-model?${q}`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) throw new Error("Failed to load summary");
    const data = await res.json();
    return data.rows || [];
  },

  getSummaryByDay: async (from, to, username = null) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    if (username) q.set("username", username);
    const res = await fetch(`${API_BASE}/api/calls/summary-by-day?${q}`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) throw new Error("Failed to load summary");
    const data = await res.json();
    return data.rows || [];
  },

  getSummaryByTargetLang: async (from, to, username = null) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    if (username) q.set("username", username);
    const res = await fetch(`${API_BASE}/api/calls/summary-by-target-lang?${q}`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) throw new Error("Failed to load summary");
    const data = await res.json();
    return data.rows || [];
  },

  getSummaryByRewriteMode: async (from, to, username = null) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    if (username) q.set("username", username);
    const res = await fetch(`${API_BASE}/api/calls/summary-by-rewrite-mode?${q}`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) throw new Error("Failed to load summary");
    const data = await res.json();
    return data.rows || [];
  },

  getSummaryByTransformPrompt: async (from, to, username = null) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    if (username) q.set("username", username);
    const res = await fetch(`${API_BASE}/api/calls/summary-by-transform-prompt?${q}`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) throw new Error("Failed to load summary");
    const data = await res.json();
    return data.rows || [];
  },

  getAllCalls: async (
    from,
    to,
    page,
    pageSize,
    username = null,
    sortKey: string | null = null,
    sortDir: "asc" | "desc" | null = null,
  ) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    if (page) q.set("page", String(page));
    if (pageSize) q.set("pageSize", String(pageSize));
    if (username) q.set("username", username);
    if (sortKey) q.set("sort", sortKey);
    if (sortDir) q.set("dir", sortDir);
    const res = await fetch(`${API_BASE}/api/calls/all?${q}`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) throw new Error("Failed to load calls");
    return await res.json();
  },

  getAllCallsExport: async (from, to, username = null) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    if (username) q.set("username", username);
    const res = await fetch(`${API_BASE}/api/calls/export?${q}`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) throw new Error("Failed to export calls");
    const data = await res.json();
    return data.rows ?? [];
  },

  getSummaryByDayPaginated: async (from, to, page, pageSize, username = null) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    if (page) q.set("page", String(page));
    if (pageSize) q.set("pageSize", String(pageSize));
    if (username) q.set("username", username);
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
      } catch {
        msg = `${msg} (${res.status} ${res.statusText || ""})`.trim();
      }
      throw new Error(msg);
    }
  },

  getExecutionHistory: async (from, to, username = null, limit = null) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    if (username) q.set("username", username);
    if (limit != null && Number.isFinite(Number(limit)) && Number(limit) > 0) {
      q.set("limit", String(Math.min(500, Math.floor(Number(limit)))));
    }
    const res = await fetch(`${API_BASE}/api/calls/history?${q}`, { credentials: "include" });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) throw new Error("Failed to load execution history");
    const data = await res.json();
    return data.rows ?? [];
  },

  deleteExecutionHistory: async (from, to) => {
    const q = new URLSearchParams();
    if (from) q.set("from", from);
    if (to) q.set("to", to);
    const res = await fetch(`${API_BASE}/api/calls/history?${q}`, {
      method: "DELETE",
      credentials: "include",
    });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Failed to delete history data");
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
        configuredEngines: Array.isArray(data.configuredEngines) ? data.configuredEngines : [],
      };
    } catch (err) {
      console.error("[WebAPI] getApiStatus failed:", err);
      return {
        apiKeySet: false,
        apiKeyValid: false,
        message: err.message || "Failed to check API status.",
        configuredEngines: [],
      };
    }
  },

  getProviderKeysStatus: async () => {
    try {
      const res = await fetch(`${API_BASE}/api/provider-keys`, {
        credentials: "include",
      });
      if (res.status === 401) {
        handle401();
        return Promise.reject({ status: 401 });
      }
      if (res.status === 403) return Promise.reject(new Error("Admin access required"));
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to load provider key status");
      }
      const data = await res.json();
      return Array.isArray(data.providers) ? data.providers : [];
    } catch (err) {
      if (err && err.status === 401) throw err;
      console.error("[WebAPI] getProviderKeysStatus failed:", err);
      throw err;
    }
  },

  testProviderApiKey: async (provider) => {
    const normalizedProvider = String(provider || "").trim();
    const res = await fetch(`${API_BASE}/api/provider-test`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ provider: normalizedProvider }),
      credentials: "include",
    });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (res.status === 403) return Promise.reject(new Error("Admin access required"));
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return {
        provider: normalizedProvider,
        status: "error",
        message: data.error || data.message || "Authentication test failed.",
      };
    }
    return {
      provider: normalizedProvider,
      status: data.status || "success",
      message: data.message || "Authentication succeeded.",
      successI18n: data.successI18n,
    };
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

  downloadConfigBackup: async ({ includeUsageData = false } = {}) => {
    const q = includeUsageData ? "?includeUsageData=true" : "";
    const res = await fetch(`${API_BASE}/api/config/backup${q}`, {
      credentials: "include",
      cache: "no-store",
    });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (res.status === 403) {
      throw new Error("Admin access required");
    }
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      throw new Error(data.error || "Backup failed");
    }
    const blob = await res.blob();
    const filename = `${configBackupFileStem(new Date())}.zip`;
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    return { ok: true, filename };
  },

  restoreConfigBackup: async (file, { clearHistory = false, restoreUsageData = false } = {}) => {
    const fd = new FormData();
    fd.append("file", file);
    fd.append("clearHistory", clearHistory ? "true" : "false");
    fd.append("restoreUsageData", restoreUsageData ? "true" : "false");
    const res = await fetch(`${API_BASE}/api/config/backup/restore`, {
      method: "POST",
      body: fd,
      credentials: "include",
    });
    if (res.status === 401) {
      handle401();
      return Promise.reject({ status: 401 });
    }
    if (res.status === 403) {
      throw new Error("Admin access required");
    }
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data.error || "Restore failed");
    }
    return data;
  },
};

export default webAPI;
