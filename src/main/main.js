const { app, BrowserWindow, screen } = require("electron");
const path = require("path");
const fs = require("fs");
const os = require("os");

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
try {
  if (require("electron-squirrel-startup")) {
    app.quit();
  }
} catch (error) {
  // electron-squirrel-startup is optional
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
    const minWidth = 800;
    const minHeight = 600;
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
    width: 1000,
    height: 700,
  });

  // Create the browser window.
  mainWindow = new BrowserWindow({
    x: savedState ? savedState.x : undefined,
    y: savedState ? savedState.y : undefined,
    width: savedState ? savedState.width : 1000,
    height: savedState ? savedState.height : 700,
    icon: path.join(__dirname, "../../tr_logo.ico"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: process.env.NODE_ENV === "development" ? false : true,
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
    mainWindow.loadURL("http://localhost:3030");
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, "../../dist/index.html"));
  }

  // Remove menu bar
  mainWindow.setMenuBarVisibility(false);

  // Add keyboard shortcut to open DevTools (Ctrl+Shift+I or F12)
  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.control && input.shift && input.key.toLowerCase() === 'i') {
      mainWindow.webContents.toggleDevTools();
    } else if (input.key === 'F12') {
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
    icon: path.join(__dirname, "../../tr_logo.ico"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
    },
    autoHideMenuBar: true,
  });

  settingsWindow.setMenuBarVisibility(false);
  settingsWindow.setMinimumSize(780, 300); // Minimum width for 4-column language grid

  // Add keyboard shortcut to open DevTools in settings window (Ctrl+Shift+I or F12)
  settingsWindow.webContents.on('before-input-event', (event, input) => {
    if (input.control && input.shift && input.key.toLowerCase() === 'i') {
      settingsWindow.webContents.toggleDevTools();
    } else if (input.key === 'F12') {
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
      : `file://${path.join(__dirname, "../../dist/index.html")}?window=settings`;

  settingsWindow.loadURL(startUrl);

  if (process.env.NODE_ENV === "development") {
    // settingsWindow.webContents.openDevTools();
  }

  settingsWindow.on("closed", () => {
    settingsWindow = null;
  });
};

const { ipcMain } = require("electron");

ipcMain.on("open-settings", () => {
  createSettingsWindow();
});

ipcMain.on("settings-updated", () => {
  // Broadcast to all windows to reload config
  BrowserWindow.getAllWindows().forEach((win) => {
    win.webContents.send("settings-updated");
  });
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

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
