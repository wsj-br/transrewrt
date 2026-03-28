const { app, BrowserWindow, screen, ipcMain, protocol, shell } = require("electron");
const path = require("path");
const fs = require("fs");
const os = require("os");
const {
  getConfigFilePath,
  getDefaultConfigPathForLoad,
  getStateFilePath,
} = require("./configPath");
const { isEncryptedApiKey, encryptApiKey, decryptApiKey } = require("./encryption");
const { registerConfigIpc } = require("./ipc/configIpc");
const { registerApiIpc } = require("./ipc/apiIpc");
const { registerLlmIpc } = require("./ipc/llmIpc");
const { registerWindowIpc } = require("./ipc/windowIpc");
const {
  ENCRYPTED_CONFIG_KEYS,
  ENGINE_IDS,
  CONFIG_KEY_BY_ENGINE,
  ENV_KEY_BY_ENGINE,
  readEnvNonBlank,
} = require("../shared/llm");

// Custom protocol for production: serve renderer via app:// instead of file://.
protocol.registerSchemesAsPrivileged([
  {
    scheme: "app",
    privileges: { standard: true, secure: true, supportFetchAPI: true },
  },
]);

const STATE_KEYS = [
  "last_used_model",
  "settings_active_tab",
  "source_language",
  "target_language",
  "app_mode",
  "rewrite_mode",
  "web_session",
  "all_calls_page_size",
];

const DEFAULT_STATE = {
  last_used_model: "openrouter/openrouter/free",
  settings_active_tab: "api",
  source_language: "Detect Language",
  target_language: "Spanish",
  app_mode: "translate",
  rewrite_mode: "Check Spelling & Grammar",
  web_session: "",
  all_calls_page_size: 10,
};

function isStateKey(key) {
  return STATE_KEYS.includes(key);
}

function stripStateKeysAndDeprecated(obj) {
  const out = { ...obj };
  STATE_KEYS.forEach((k) => delete out[k]);
  return out;
}

let configCache = {};
let stateCache = {};
let stateFromConfigForMigration = {};

function syncMissingEnvKeysIntoConfig(config) {
  const next = { ...config };
  let changed = false;
  for (const engine of ENGINE_IDS) {
    const configKey = CONFIG_KEY_BY_ENGINE[engine];
    const envKey = ENV_KEY_BY_ENGINE[engine];
    if (!configKey || !envKey) continue;
    const currentValue = next[configKey] != null ? String(next[configKey]).trim() : "";
    const envValue = readEnvNonBlank(process.env, envKey);
    if (!currentValue && envValue) {
      next[configKey] = envValue;
      changed = true;
    }
  }
  return { next, changed };
}

function loadConfigFromFile() {
  try {
    const configPath = getConfigFilePath();
    let userConfig = {};
    if (fs.existsSync(configPath)) {
      const data = fs.readFileSync(configPath, "utf8");
      userConfig = JSON.parse(data);
    }
    const defaultPath = getDefaultConfigPathForLoad();
    let defaultConfig = {};
    if (fs.existsSync(defaultPath)) {
      defaultConfig = JSON.parse(fs.readFileSync(defaultPath, "utf8"));
    }
    const merged = { ...defaultConfig, ...userConfig };
    for (const field of ENCRYPTED_CONFIG_KEYS) {
      if (merged[field] != null && isEncryptedApiKey(merged[field])) {
        merged[field] = decryptApiKey(merged[field]);
      }
    }
    stateFromConfigForMigration = {};
    STATE_KEYS.forEach((k) => {
      if (merged[k] !== undefined) stateFromConfigForMigration[k] = merged[k];
    });
    stateFromConfigForMigration.rewrite_mode = stateFromConfigForMigration.rewrite_mode ?? merged.rewrite_style;
    const stripped = stripStateKeysAndDeprecated(merged);
    const synced = syncMissingEnvKeysIntoConfig(stripped);
    configCache = synced.next;
    if (!fs.existsSync(configPath) && Object.keys(defaultConfig).length > 0) {
      const dir = path.dirname(configPath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(
        configPath,
        JSON.stringify(configCache, null, 2),
        "utf8",
      );
    } else if (synced.changed) {
      saveConfigToFile(configCache);
    }
    return configCache;
  } catch (err) {
    console.error("Failed to load config in main:", err);
    configCache = {};
    stateFromConfigForMigration = {};
    return configCache;
  }
}

function canonicalConfigString(config) {
  if (config === null || typeof config !== "object")
    return JSON.stringify(config);
  if (Array.isArray(config))
    return "[" + config.map(canonicalConfigString).join(",") + "]";
  const keys = Object.keys(config).sort();
  return (
    "{" +
    keys
      .map((k) => JSON.stringify(k) + ":" + canonicalConfigString(config[k]))
      .join(",") +
    "}"
  );
}

function saveConfigToFile(config) {
  try {
    const configPath = getConfigFilePath();
    const dir = path.dirname(configPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    let current = {};
    if (fs.existsSync(configPath)) {
      try {
        const raw = fs.readFileSync(configPath, "utf8");
        if (raw.trim()) current = JSON.parse(raw);
      } catch { /* ignore */ }
    }
    const toWrite = { ...config };
    for (const field of ENCRYPTED_CONFIG_KEYS) {
      if (typeof toWrite[field] === "string" && toWrite[field].trim() !== "") {
        toWrite[field] = encryptApiKey(toWrite[field]);
      }
    }
    if (canonicalConfigString(current) === canonicalConfigString(toWrite))
      return true;
    fs.writeFileSync(configPath, JSON.stringify(toWrite, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Failed to save config in main:", err);
    return false;
  }
}

function loadStateFromFile() {
  try {
    const statePath = getStateFilePath();
    if (fs.existsSync(statePath)) {
      const data = fs.readFileSync(statePath, "utf8");
      const fileState = data.trim() ? JSON.parse(data) : {};
      stateCache = { ...DEFAULT_STATE, ...fileState };
      stateCache.rewrite_mode = stateCache.rewrite_mode ?? stateCache.rewrite_style;
      return stateCache;
    }
    stateCache = { ...DEFAULT_STATE, ...stateFromConfigForMigration };
    stateCache.rewrite_mode = stateCache.rewrite_mode ?? stateFromConfigForMigration.rewrite_style;
    saveStateToFile(stateCache);
    return stateCache;
  } catch (err) {
    console.error("Failed to load state in main:", err);
    stateCache = { ...DEFAULT_STATE };
    return stateCache;
  }
}

function saveStateToFile(state) {
  try {
    const statePath = getStateFilePath();
    const dir = path.dirname(statePath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    let current = {};
    if (fs.existsSync(statePath)) {
      try {
        const raw = fs.readFileSync(statePath, "utf8");
        if (raw.trim()) current = JSON.parse(raw);
      } catch { /* ignore */ }
    }
    if (canonicalConfigString(current) === canonicalConfigString(state))
      return true;
    fs.writeFileSync(statePath, JSON.stringify(state, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Failed to save state in main:", err);
    return false;
  }
}

// Enable hot reload for development
if (process.env.NODE_ENV === "development") {
  require("electron-reload")(__dirname, {
    hardResetMethod: "exit",
  });
}

const getWindowStatePath = () => {
  return path.join(app.getPath("userData"), "window-state.json");
};

const loadWindowState = () => {
  try {
    const statePath = getWindowStatePath();
    if (fs.existsSync(statePath)) {
      const state = JSON.parse(fs.readFileSync(statePath, "utf8"));
      return state;
    }
  } catch (err) {
    console.error("Failed to load window state:", err);
  }
  return null;
};

const saveWindowState = (win) => {
  try {
    const statePath = getWindowStatePath();
    const bounds = win.getBounds();
    const state = {
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: bounds.height,
      isMaximized: win.isMaximized(),
    };
    fs.writeFileSync(statePath, JSON.stringify(state));
  } catch (err) {
    console.error("Failed to save window state:", err);
  }
};

const getSettingsWindowStatePath = () => {
  return path.join(app.getPath("userData"), "settings-window-state.json");
};

const loadSettingsWindowState = () => {
  try {
    const statePath = getSettingsWindowStatePath();
    if (fs.existsSync(statePath)) {
      return JSON.parse(fs.readFileSync(statePath, "utf8"));
    }
  } catch (err) {
    console.error("Failed to load settings window state:", err);
  }
  return null;
};

const saveSettingsWindowState = (win) => {
  try {
    const statePath = getSettingsWindowStatePath();
    const bounds = win.getBounds();
    const state = {
      x: bounds.x,
      y: bounds.y,
      width: bounds.width,
      height: bounds.height,
    };
    fs.writeFileSync(statePath, JSON.stringify(state));
  } catch (err) {
    console.error("Failed to save settings window state:", err);
  }
};

let mainWindow = null;
let settingsWindow = null;

const validateWindowState = (state, fallback) => {
  try {
    if (!state) return fallback;
    const display = screen.getDisplayMatching({
      x: state.x,
      y: state.y,
      width: state.width,
      height: state.height,
    });
    const { workArea } = display;
    const minWidth = 1220;
    const minHeight = 840;
    const width = Math.max(state.width || fallback.width, minWidth);
    const height = Math.max(state.height || fallback.height, minHeight);

    const withinX =
      state.x >= workArea.x - width + 50 &&
      state.x <= workArea.x + workArea.width - 50;
    const withinY =
      state.y >= workArea.y - height + 50 &&
      state.y <= workArea.y + workArea.height - 50;

    if (!withinX || !withinY) {
      return fallback;
    }

    return { ...state, width, height };
  } catch (err) {
    console.error("Failed to validate window state:", err);
    return fallback;
  }
};

const createWindow = () => {
  const savedState = validateWindowState(loadWindowState(), {
    width: 1220,
    height: 840,
  });

  mainWindow = new BrowserWindow({
    x: savedState ? savedState.x : undefined,
    y: savedState ? savedState.y : undefined,
    width: savedState ? savedState.width : 1220,
    height: savedState ? savedState.height : 840,
    minWidth: 1220,
    minHeight: 840,
    backgroundColor: "#1a1a1a",
    icon: path.join(__dirname, "../../images/transrewrt_logo.ico"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
      devTools: false,
    },
  });
  if (savedState && savedState.isMaximized) {
    mainWindow.maximize();
  }

  mainWindow.on("resize", () => saveWindowState(mainWindow));
  mainWindow.on("move", () => saveWindowState(mainWindow));

  if (process.env.NODE_ENV === "development") {
    const devUrl = "http://localhost:3030";
    let devLoadRetries = 0;
    const tryLoadDev = () => mainWindow.loadURL(devUrl);
    mainWindow.webContents.on(
      "did-fail-load",
      (_, errorCode, errorDescription, validatedUrl) => {
        if (errorCode === -3) return;
        console.error(
          "Main window load failed:",
          errorCode,
          errorDescription,
          validatedUrl,
        );
        if (validatedUrl === devUrl && devLoadRetries < 2) {
          devLoadRetries += 1;
          setTimeout(tryLoadDev, 2000);
        }
      },
    );
    tryLoadDev();
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL("app://./dist/index.html");
    mainWindow.webContents.on(
      "did-fail-load",
      (_, errorCode, errorDescription, validatedUrl) => {
        if (errorCode !== -3) {
          console.error(
            "Main window load failed:",
            errorCode,
            errorDescription,
            validatedUrl,
          );
        }
      },
    );
  }

  mainWindow.setMenuBarVisibility(false);

  mainWindow.webContents.on("before-input-event", (event, input) => {
    if (input.control && input.shift && input.key.toLowerCase() === "i") {
      mainWindow.webContents.toggleDevTools();
    } else if (input.key === "F12") {
      mainWindow.webContents.toggleDevTools();
    }
  });

  mainWindow.on("close", () => {
    saveWindowState(mainWindow);
    if (settingsWindow && !settingsWindow.isDestroyed()) {
      settingsWindow.close();
    }
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
};

const createSettingsWindow = () => {
  if (settingsWindow) {
    settingsWindow.focus();
    return;
  }

  const savedState = validateWindowState(loadSettingsWindowState(), {
    width: 950,
    height: 640,
  });

  settingsWindow = new BrowserWindow({
    x: savedState ? savedState.x : undefined,
    y: savedState ? savedState.y : undefined,
    width: savedState ? savedState.width : 950,
    height: savedState ? savedState.height : 640,
    backgroundColor: "#1a1a1a",
    icon: path.join(__dirname, "../../images/transrewrt_logo.ico"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
    autoHideMenuBar: true,
  });

  settingsWindow.setMenuBarVisibility(false);
  settingsWindow.setMinimumSize(780, 300);

  settingsWindow.webContents.on("before-input-event", (event, input) => {
    if (input.control && input.shift && input.key.toLowerCase() === "i") {
      settingsWindow.webContents.toggleDevTools();
    } else if (input.key === "F12") {
      settingsWindow.webContents.toggleDevTools();
    }
  });

  settingsWindow.on("resize", () => saveSettingsWindowState(settingsWindow));
  settingsWindow.on("move", () => saveSettingsWindowState(settingsWindow));
  settingsWindow.on("close", () => saveSettingsWindowState(settingsWindow));

  const startUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3030?window=settings"
      : "app://./dist/index.html?window=settings";

  settingsWindow.loadURL(startUrl);

  settingsWindow.on("closed", () => {
    settingsWindow = null;
  });
};

// Build timestamp cache (used by config IPC)
let buildTimestampCache = null;
function getBuildTimestamp() {
  if (buildTimestampCache !== null) return buildTimestampCache;
  try {
    const filePath = path.join(app.getAppPath(), "build_timestamp");
    if (!fs.existsSync(filePath)) {
      buildTimestampCache = null;
      return null;
    }
    const content = fs.readFileSync(filePath, "utf8").trim();
    buildTimestampCache = content || null;
    return buildTimestampCache;
  } catch {
    buildTimestampCache = null;
    return null;
  }
}

// Register IPC handlers
registerConfigIpc(ipcMain, {
  getConfigCache: () => configCache,
  getStateCache: () => stateCache,
  setConfigCache: (c) => {
    configCache = c;
  },
  setStateCache: (s) => {
    stateCache = s;
  },
  loadConfigFromFile,
  saveConfigToFile,
  loadStateFromFile,
  saveStateToFile,
  isStateKey,
  canonicalConfigString,
  getBuildTimestamp,
});
registerApiIpc(ipcMain, () => configCache);
registerLlmIpc(ipcMain, () => configCache);
registerWindowIpc(ipcMain, createSettingsWindow);

ipcMain.handle("get-os-username", () => {
  try {
    return os.userInfo().username || "";
  } catch {
    return "";
  }
});

ipcMain.handle("shell:openExternal", async (_event, url) => {
  const candidate = String(url || "").trim();
  if (!candidate) return false;
  await shell.openExternal(candidate);
  return true;
});

const { registerAppDbHandlers, getDb } = require("./appDb");
const { registerConfigBackupIpc } = require("./configBackupIpc");

app.on("ready", () => {
  if (process.env.NODE_ENV !== "development") {
    const appBase = app.getAppPath();
    const mimeByExt = {
      ".html": "text/html",
      ".js": "application/javascript",
      ".css": "text/css",
      ".json": "application/json",
      ".ico": "image/x-icon",
      ".png": "image/png",
      ".svg": "image/svg+xml",
      ".woff2": "font/woff2",
      ".woff": "font/woff",
    };
    protocol.handle("app", async (request) => {
      let requestPath;
      try {
        const { pathname } = new URL(request.url);
        requestPath = pathname.replace(/^\/+/, "").replace(/\\/g, "/");
        const filePath = path.resolve(appBase, requestPath);
        const relative = path.relative(appBase, filePath);
        if (
          !relative ||
          relative.startsWith("..") ||
          path.isAbsolute(relative)
        ) {
          return new Response("Forbidden", {
            status: 403,
            headers: { "Content-Type": "text/plain" },
          });
        }
        const data = await fs.promises.readFile(filePath);
        const ext = path.extname(filePath).toLowerCase();
        const contentType = mimeByExt[ext] || "application/octet-stream";
        return new Response(data, {
          headers: { "Content-Type": contentType },
        });
      } catch (err) {
        if (err.code === "ENOENT") {
          return new Response(`Not found: ${requestPath}`, {
            status: 404,
            headers: { "Content-Type": "text/plain" },
          });
        }
        console.error("app:// protocol error:", err);
        return new Response(String(err.message), {
          status: 500,
          headers: { "Content-Type": "text/plain" },
        });
      }
    });
  }

  registerAppDbHandlers(ipcMain, () => app.getPath("userData"));
  registerConfigBackupIpc(
    ipcMain,
    () => getDb(),
    app.getPath("userData"),
    () => {
      loadConfigFromFile();
      loadStateFromFile();
      BrowserWindow.getAllWindows().forEach((w) => {
        try {
          w.webContents.send("settings-updated");
        } catch {
          /* ignore */
        }
      });
    },
  );
  loadConfigFromFile();
  loadStateFromFile();
  saveConfigToFile(configCache);
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
