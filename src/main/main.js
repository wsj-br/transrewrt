const { app, BrowserWindow, screen, ipcMain, protocol } = require("electron");
const path = require("path");
const fs = require("fs");
const os = require("os");
const crypto = require("crypto");

// Custom protocol for production: serve renderer via app:// instead of file://.
// Best practice: Electron recommends loadFile()/file:// for local content when it works; in packaged
// apps file:// can be blocked (e.g. "Not allowed to load local resource" in some sandbox contexts).
// Using a custom protocol is the documented approach for "the same effect as the file:// protocol"
// (https://www.electronjs.org/docs/latest/api/protocol) and avoids that restriction.
protocol.registerSchemesAsPrivileged([
  {
    scheme: "app",
    privileges: { standard: true, secure: true, supportFetchAPI: true },
  },
]);

// --- Config path (single source of truth for Electron; must match preload usage when migrating) ---
const getConfigFilePath = () => {
  try {
    const appPath = process.env.PORTABLE_EXECUTABLE_DIR || process.cwd();
    const homedir = os.homedir();
    const userDataPath =
      typeof app !== "undefined" && app.getPath
        ? path.join(app.getPath("userData"), "config.json")
        : null;
    const isSystemPath = (p) => {
      const normalized = (p || "").toLowerCase();
      return (
        normalized.includes("node_modules") ||
        normalized.includes("electron/dist") ||
        normalized.includes("resources") ||
        normalized.includes(".npm")
      );
    };
    const pathsToCheck = [
      ...(userDataPath ? [userDataPath] : []),
      path.resolve("config.json"),
      path.join(appPath, "config.json"),
      path.join(homedir, "config.json"),
      path.join(__dirname, "../../config.json"),
      path.resolve("../config.json"),
      ...(isSystemPath(process.execPath)
        ? []
        : [path.join(path.dirname(process.execPath), "config.json")]),
    ];
    for (const p of pathsToCheck) {
      if (p && fs.existsSync(p) && !isSystemPath(p)) return p;
    }
    const writablePathsToTry = [
      ...(userDataPath ? [userDataPath] : []),
      path.resolve("config.json"),
      path.join(appPath, "config.json"),
      path.join(homedir, "config.json"),
      path.join(path.dirname(process.execPath), "config.json"),
    ];
    for (const p of writablePathsToTry) {
      try {
        const dir = path.dirname(p);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        const testFile = path.join(dir, ".write-test");
        fs.writeFileSync(testFile, "test", "utf8");
        fs.unlinkSync(testFile);
        return p;
      } catch (_) {
        continue;
      }
    }
    return path.resolve("config.json");
  } catch (_) {
    return path.resolve("config.json");
  }
};

const getDefaultConfigPath = () =>
  path.join(path.dirname(getConfigFilePath()), "../config/config_default.json");

// Path to config_default.json for merging defaults. In packaged app, extraFiles put it next to the exe.
const getDefaultConfigPathForLoad = () => {
  if (typeof app !== "undefined" && app.isPackaged) {
    return path.join(
      path.dirname(process.execPath),
      "config",
      "config_default.json",
    );
  }
  return path.join(__dirname, "../../config/config_default.json");
};

const getStateFilePath = () =>
  path.join(path.dirname(getConfigFilePath()), "state.json");

const getConfigDir = () => path.dirname(getConfigFilePath());
const getKeyFilePath = () => path.join(getConfigDir(), "transrewrt.key");
const ENC_PREFIX = "enc:";
const KEY_BYTES = 32;
const IV_BYTES = 16;

function getOrCreateEncryptionKey() {
  const keyPath = getKeyFilePath();
  const dir = path.dirname(keyPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (fs.existsSync(keyPath)) {
    const raw = fs.readFileSync(keyPath, "utf8").trim();
    if (/^[0-9a-fA-F]{64}$/.test(raw)) return Buffer.from(raw, "hex");
    if (raw.length >= 32) return Buffer.from(raw.slice(0, KEY_BYTES), "utf8");
    return Buffer.from(raw, "hex");
  }
  const key = crypto.randomBytes(KEY_BYTES);
  fs.writeFileSync(keyPath, key.toString("hex"), "utf8");
  return key;
}

function isEncryptedApiKey(value) {
  return typeof value === "string" && value.startsWith(ENC_PREFIX);
}

function decryptApiKey(encryptedValue) {
  try {
    const b64 = encryptedValue.slice(ENC_PREFIX.length);
    const buf = Buffer.from(b64, "base64");
    if (buf.length < IV_BYTES) return "";
    const iv = buf.subarray(0, IV_BYTES);
    const ciphertext = buf.subarray(IV_BYTES);
    const key = getOrCreateEncryptionKey();
    const decipher = crypto.createDecipheriv("aes-256-cbc", key, iv);
    return Buffer.concat([
      decipher.update(ciphertext),
      decipher.final(),
    ]).toString("utf8");
  } catch (err) {
    console.error("Failed to decrypt api_key:", err.message);
    return "";
  }
}

function encryptApiKey(plainValue) {
  if (typeof plainValue !== "string" || !plainValue.trim()) return "";
  try {
    const key = getOrCreateEncryptionKey();
    const iv = crypto.randomBytes(IV_BYTES);
    const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
    const ciphertext = Buffer.concat([
      cipher.update(plainValue, "utf8"),
      cipher.final(),
    ]);
    return ENC_PREFIX + Buffer.concat([iv, ciphertext]).toString("base64");
  } catch (err) {
    console.error("Failed to encrypt api_key:", err.message);
    return plainValue;
  }
}

const STATE_KEYS = [
  "last_used_model",
  "settings_active_tab",
  "source_language",
  "target_language",
  "app_mode",
  "rewrite_style",
  "web_session",
];

const DEFAULT_STATE = {
  last_used_model: "openrouter/free",
  settings_active_tab: "api",
  source_language: "Detect Language",
  target_language: "Spanish",
  app_mode: "translate",
  rewrite_style: "Check Spelling & Grammar",
  web_session: "",
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
/** State keys read from config file before strip; used for migration when state.json is missing. */
let stateFromConfigForMigration = {};

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
    if (merged.api_key != null && isEncryptedApiKey(merged.api_key)) {
      merged.api_key = decryptApiKey(merged.api_key);
    }
    stateFromConfigForMigration = {};
    STATE_KEYS.forEach((k) => {
      if (merged[k] !== undefined) stateFromConfigForMigration[k] = merged[k];
    });
    configCache = stripStateKeysAndDeprecated(merged);
    if (!fs.existsSync(configPath) && Object.keys(defaultConfig).length > 0) {
      const dir = path.dirname(configPath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
      fs.writeFileSync(
        configPath,
        JSON.stringify(configCache, null, 2),
        "utf8",
      );
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
      } catch (_) {}
    }
    const toWrite = { ...config };
    if (typeof toWrite.api_key === "string" && toWrite.api_key.trim() !== "") {
      toWrite.api_key = encryptApiKey(toWrite.api_key);
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
      return stateCache;
    }
    stateCache = { ...DEFAULT_STATE, ...stateFromConfigForMigration };
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
      } catch (_) {}
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

// Get the path to store window state
const getWindowStatePath = () => {
  return path.join(app.getPath("userData"), "window-state.json");
};

// Load window state from file
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

// Save window state to file
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

// Get the path to store SETTINGS window state
const getSettingsWindowStatePath = () => {
  return path.join(app.getPath("userData"), "settings-window-state.json");
};

// Load SETTINGS window state
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

// Save SETTINGS window state
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

// Ensure a saved window state is visible and has a minimum size; otherwise fall back.
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
  // Load saved window state and validate it against current displays
  const savedState = validateWindowState(loadWindowState(), {
    width: 1220,
    height: 840,
  });

  // Create the browser window.
  mainWindow = new BrowserWindow({
    x: savedState ? savedState.x : undefined,
    y: savedState ? savedState.y : undefined,
    width: savedState ? savedState.width : 1220,
    height: savedState ? savedState.height : 840,
    minWidth: 1220,
    minHeight: 840,
    icon: path.join(__dirname, "../../images/transrewrt_logo.ico"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
      devTools: false,
    },
  });
  // Restore maximized state
  if (savedState && savedState.isMaximized) {
    mainWindow.maximize();
  }

  // Save window state on resize, move, and close
  mainWindow.on("resize", () => saveWindowState(mainWindow));
  mainWindow.on("move", () => saveWindowState(mainWindow));

  // and load the index.html of the app.
  if (process.env.NODE_ENV === "development") {
    const devUrl = "http://localhost:3030";
    let devLoadRetries = 0;
    const tryLoadDev = () => mainWindow.loadURL(devUrl);
    mainWindow.webContents.on(
      "did-fail-load",
      (_, errorCode, errorDescription, validatedUrl) => {
        if (errorCode === -3) return; // ERR_ABORTED, e.g. user navigated
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

  // Remove menu bar
  mainWindow.setMenuBarVisibility(false);

  // Add keyboard shortcut to open DevTools (Ctrl+Shift+I or F12)
  mainWindow.webContents.on("before-input-event", (event, input) => {
    if (input.control && input.shift && input.key.toLowerCase() === "i") {
      mainWindow.webContents.toggleDevTools();
    } else if (input.key === "F12") {
      mainWindow.webContents.toggleDevTools();
    }
  });

  // Close settings window when main window closes
  mainWindow.on("close", () => {
    saveWindowState(mainWindow);
    // Close settings window if it's open
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
    icon: path.join(__dirname, "../../images/transrewrt_logo.ico"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
    },
    autoHideMenuBar: true,
  });

  settingsWindow.setMenuBarVisibility(false);
  settingsWindow.setMinimumSize(780, 300); // Minimum width for 4-column language grid

  // Add keyboard shortcut to open DevTools in settings window (Ctrl+Shift+I or F12)
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

  // Load the same app but with a query param to router
  const startUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3030?window=settings"
      : "app://./dist/index.html?window=settings";

  settingsWindow.loadURL(startUrl);

  if (process.env.NODE_ENV === "development") {
    // settingsWindow.webContents.openDevTools();
  }

  settingsWindow.on("closed", () => {
    settingsWindow = null;
  });
};

// --- IPC: config (main process is single source of truth) ---
ipcMain.handle("config:get", () =>
  Promise.resolve({ ...configCache, ...stateCache }),
);

function configUnchanged(existing, value) {
  if (existing === value) return true;
  if (
    typeof value === "object" &&
    value !== null &&
    typeof existing === "object" &&
    existing !== null
  ) {
    return JSON.stringify(existing) === JSON.stringify(value);
  }
  return false;
}

ipcMain.handle("config:set", (_, key, value) => {
  if (key === undefined) return Promise.resolve(false);
  if (isStateKey(key)) {
    if (configUnchanged(stateCache[key], value)) return Promise.resolve(true);
    stateCache[key] = value;
    const ok = saveStateToFile(stateCache);
    if (ok) {
      BrowserWindow.getAllWindows().forEach((win) => {
        if (win && !win.isDestroyed()) win.webContents.send("settings-updated");
      });
    }
    return Promise.resolve(ok);
  }
  if (configUnchanged(configCache[key], value)) return Promise.resolve(true);
  configCache[key] = value;
  const ok = saveConfigToFile(configCache);
  if (ok) {
    BrowserWindow.getAllWindows().forEach((win) => {
      if (win && !win.isDestroyed()) win.webContents.send("settings-updated");
    });
  }
  return Promise.resolve(ok);
});

ipcMain.handle("config:setAll", (_, newConfig) => {
  if (typeof newConfig !== "object") return Promise.resolve(false);
  const configPart = {};
  const statePart = {};
  Object.keys(newConfig).forEach((k) => {
    if (isStateKey(k)) statePart[k] = newConfig[k];
    else configPart[k] = newConfig[k];
  });
  let configSaved = false;
  let stateSaved = false;
  if (Object.keys(configPart).length > 0) {
    const nextConfig = { ...configCache, ...configPart };
    if (
      canonicalConfigString(configCache) !== canonicalConfigString(nextConfig)
    ) {
      configCache = nextConfig;
      configSaved = saveConfigToFile(configCache);
    }
  }
  if (Object.keys(statePart).length > 0) {
    const nextState = { ...stateCache, ...statePart };
    if (
      canonicalConfigString(stateCache) !== canonicalConfigString(nextState)
    ) {
      stateCache = nextState;
      stateSaved = saveStateToFile(stateCache);
    }
  }
  if (configSaved || stateSaved) {
    BrowserWindow.getAllWindows().forEach((win) => {
      if (win && !win.isDestroyed()) win.webContents.send("settings-updated");
    });
  }
  return Promise.resolve(true);
});

ipcMain.handle("write-last-api-result", (_, payload) => {
  try {
    const dir = app.getPath("userData");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const filePath = path.join(dir, "last_api_result.json");
    fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), "utf8");
    return Promise.resolve(true);
  } catch (err) {
    console.error("Failed to write last_api_result.json", err);
    return Promise.resolve(false);
  }
});

ipcMain.handle("write-debug-file", (_, filename, data) => {
  try {
    const dir = app.getPath("userData");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    const filePath = path.join(dir, filename);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
    return Promise.resolve(true);
  } catch (err) {
    console.error(`Failed to write ${filename}:`, err);
    return Promise.resolve(false);
  }
});

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
  } catch (_) {
    buildTimestampCache = null;
    return null;
  }
}
ipcMain.handle("get-build-timestamp", () =>
  Promise.resolve(getBuildTimestamp()),
);

ipcMain.on("open-settings", () => {
  createSettingsWindow();
});

ipcMain.on("settings-updated", () => {
  BrowserWindow.getAllWindows().forEach((win) => {
    if (win && !win.isDestroyed()) win.webContents.send("settings-updated");
  });
});

// Cost-tracking SQLite DB (transrewrt.db in userData)
const { registerCostDbHandlers } = require("./costDb");

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", () => {
  // Serve app assets via app:// in production so we avoid file:// (blocked in some packaged/sandbox contexts).
  // Use fs.readFile (not net.fetch(file://)) so reading from app.asar works in sandboxed environments.
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
      try {
        const { pathname } = new URL(request.url);
        const requestPath = pathname.replace(/^\/+/, "").replace(/\\/g, "/");
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

  registerCostDbHandlers(ipcMain, () => app.getPath("userData"));
  loadConfigFromFile();
  loadStateFromFile();
  saveConfigToFile(configCache);
  createWindow();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
