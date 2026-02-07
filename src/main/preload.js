// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge, ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');
const os = require('os');

// Helper function to get the config file path
const getConfigFilePath = () => {
  try {
    const resourcesPath = process.resourcesPath || path.dirname(process.execPath);
    const appPath = process.env.PORTABLE_EXECUTABLE_DIR || process.cwd();
    const homedir = os.homedir();

    // Helper to check if a path is in a read-only/system location (like node_modules)
    const isSystemPath = (p) => {
      const normalized = p.toLowerCase();
      // Skip paths containing node_modules, electron/dist, or other package manager directories
      return normalized.includes('node_modules') ||
             normalized.includes('electron/dist') ||
             normalized.includes('resources') ||
             normalized.includes('.npm');
    };

    // Check for user config.json in these locations (in order of preference)
    const pathsToCheck = [
      // Project root (current working directory) - most common for development
      path.resolve('config.json'),
      // App directory (portable executable dir)
      path.join(appPath, 'config.json'),
      // User's home directory - always writable
      path.join(homedir, 'config.json'),
      // Project root relative to this file (src/main/preload.js -> root/config.json)
      path.join(__dirname, '../../config.json'),
      // Parent directory
      path.resolve('../config.json'),
      // Executable directory (only if not in a system path)
      ...(isSystemPath(process.execPath) ? [] : [path.join(path.dirname(process.execPath), 'config.json')])
    ];

    for (const p of pathsToCheck) {
      const exists = fs.existsSync(p);
      const system = isSystemPath(p);
      if (exists && !system) {
        return p;
      }
    }

    // No existing config found - create in first writable location
    const writablePathsToTry = [
      // Project root (current working directory)
      path.resolve('config.json'),
      // App directory
      path.join(appPath, 'config.json'),
      // User's home directory
      path.join(homedir, 'config.json'),
      // Executable directory
      path.join(path.dirname(process.execPath), 'config.json')
    ];

    for (const p of writablePathsToTry) {
      try {
        const dir = path.dirname(p);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        // Test if writable by attempting to create a temp file
        const testFile = path.join(dir, '.write-test');
        fs.writeFileSync(testFile, 'test', 'utf8');
        fs.unlinkSync(testFile);
        return p;
      } catch (err) {
        continue;
      }
    }

    // Fallback: use cwd even if we can't test it
    return path.resolve('config.json');
  } catch (e) {
    return path.resolve('config.json');
  }
};

const api = {
  readConfig: () => {
    try {
      // Use getConfigFilePath to get the appropriate config path
      const configPath = getConfigFilePath();

      // Check if the file exists at the determined path
      if (fs.existsSync(configPath)) {
        const data = fs.readFileSync(configPath, 'utf8');
        return JSON.parse(data);
      }

      // Config not found, try to load defaults
      // Look for config_default.json in standard locations
      const resourcesPath = process.resourcesPath || path.dirname(process.execPath);
      const appPath = process.env.PORTABLE_EXECUTABLE_DIR || process.cwd();

      const defaultPathsToCheck = [
        path.join(resourcesPath, 'config_default.json'),
        path.join(path.dirname(process.execPath), 'config_default.json'),
        path.join(__dirname, '../../config_default.json'),
        path.resolve('config_default.json'),
        path.join(appPath, 'config_default.json'),
        path.resolve('../config_default.json')
      ];

      let defaultConfigPath = null;
      for (const p of defaultPathsToCheck) {
        if (fs.existsSync(p)) {
          defaultConfigPath = p;
          break;
        }
      }

      if (defaultConfigPath) {
        const defaultData = fs.readFileSync(defaultConfigPath, 'utf8');
        const defaultConfig = JSON.parse(defaultData);

        // Create config.json at the path returned by getConfigFilePath()
        const configDir = path.dirname(configPath);
        if (!fs.existsSync(configDir)) {
          fs.mkdirSync(configDir, { recursive: true });
        }
        fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2), 'utf8');

        return defaultConfig;
      } else {
        return {};
      }
    } catch (e) {
      return {};
    }
  },
  getConfigPath: () => {
    return getConfigFilePath();
  },
  writeConfig: (configData) => {
    try {
      const configPath = getConfigFilePath();
      const configDir = path.dirname(configPath);

      // Ensure directory exists
      if (!fs.existsSync(configDir)) {
        fs.mkdirSync(configDir, { recursive: true });
      }

      fs.writeFileSync(configPath, JSON.stringify(configData, null, 2), 'utf8');
      return true;
    } catch (e) {
      // Try alternative locations if first fails
      const resourcesPath = process.resourcesPath || path.dirname(process.execPath);
      const appPath = process.env.PORTABLE_EXECUTABLE_DIR || process.cwd();
      const alternativePaths = [
        path.join(appPath, 'config.json'),
        path.join(os.homedir(), 'config.json'),
        path.resolve('config.json')
      ];

      for (const altPath of alternativePaths) {
        try {
          const altDir = path.dirname(altPath);
          if (!fs.existsSync(altDir)) {
            fs.mkdirSync(altDir, { recursive: true });
          }
          fs.writeFileSync(altPath, JSON.stringify(configData, null, 2), 'utf8');
          return true;
        } catch (altError) {
          continue;
        }
      }
      return false;
    }
  },
  openSettings: () => ipcRenderer.send('open-settings'),
  notifySettingsUpdated: () => ipcRenderer.send('settings-updated'),
  onSettingsUpdated: (callback) => ipcRenderer.on('settings-updated', callback)
};

try {
  contextBridge.exposeInMainWorld('electronAPI', api);
} catch (e) {
  // If contextIsolation is disabled, contextBridge might fail or not work as expected
  // Fallback to direct assignment
  window.electronAPI = api;
}

// Ensure it's available in non-isolated contexts if contextBridge didn't throw but didn't work (common in some electron configs)
if (!window.electronAPI) {
  window.electronAPI = api;
}

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});