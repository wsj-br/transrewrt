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
    
    // First, check if config.json already exists
    const pathsToCheck = [
      path.join(resourcesPath, 'config.json'),
      path.join(path.dirname(process.execPath), 'config.json'),
      path.join(__dirname, '../../config.json'),
      path.resolve('config.json'),
      path.join(appPath, 'config.json'),
      path.resolve('../config.json')
    ];

    for (const p of pathsToCheck) {
      if (fs.existsSync(p)) {
        return p;
      }
    }

    // If not found, return the preferred writable location
    // Priority: alongside executable, appPath, user home
    const writablePathsToTry = [
      path.join(path.dirname(process.execPath), 'config.json'),
      path.join(appPath, 'config.json'),
      path.join(os.homedir(), 'config.json')
    ];

    // Return the first writable location (we'll test writeability when actually writing)
    return writablePathsToTry[0];
  } catch (e) {
    console.error('Failed to get config path', e);
    // Fallback to executable directory
    return path.join(path.dirname(process.execPath), 'config.json');
  }
};

const api = {
  readConfig: () => {
    try {
      // Determine paths for both development and production
      // In production, extraFiles are placed in resources directory or alongside executable
      const resourcesPath = process.resourcesPath || path.dirname(process.execPath);
      const appPath = process.env.PORTABLE_EXECUTABLE_DIR || process.cwd();
      
      // Look for config.json in multiple locations to be robust
      const pathsToCheck = [
        // Production: resources directory (where extraFiles are typically placed)
        path.join(resourcesPath, 'config.json'),
        // Production: alongside executable (for portable apps)
        path.join(path.dirname(process.execPath), 'config.json'),
        // Development path relative to this file (src/main/preload.js -> root/config.json)
        path.join(__dirname, '../../config.json'),
        // Current working directory
        path.resolve('config.json'),
        // App path
        path.join(appPath, 'config.json'),
        // Parent of CWD (sometimes useful)
        path.resolve('../config.json')
      ];

      let configPath = null;
      for (const p of pathsToCheck) {
        if (fs.existsSync(p)) {
          configPath = p;
          break;
        }
      }

      if (configPath) {
        console.log(`Loading config from: ${configPath}`);
        const data = fs.readFileSync(configPath, 'utf8');
        return JSON.parse(data);
      } else {
        // Config.json not found, try to load from config_default.json and create config.json
        console.log('Config file not found. Attempting to load defaults from config_default.json');
        const defaultPathsToCheck = [
          // Production: resources directory (where extraFiles are typically placed)
          path.join(resourcesPath, 'config_default.json'),
          // Production: alongside executable (for portable apps)
          path.join(path.dirname(process.execPath), 'config_default.json'),
          // Development path relative to this file
          path.join(__dirname, '../../config_default.json'),
          path.resolve('config_default.json'),
          // App path
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
          console.log(`Loading default config from: ${defaultConfigPath}`);
          const defaultData = fs.readFileSync(defaultConfigPath, 'utf8');
          const defaultConfig = JSON.parse(defaultData);
          
          // Try to create config.json in writable locations (not in read-only resources directory)
          // Priority: alongside executable, appPath, user home, then same dir as default
          const writablePathsToTry = [
            // Production: alongside executable (for portable apps) - usually writable
            path.join(path.dirname(process.execPath), 'config.json'),
            // App path (portable executable dir)
            path.join(appPath, 'config.json'),
            // User's home directory (always writable)
            path.join(os.homedir(), 'config.json'),
            // Current working directory
            path.resolve('config.json'),
            // Same directory as config_default.json (may fail if read-only, but try anyway)
            path.join(path.dirname(defaultConfigPath), 'config.json')
          ];

          let configCreated = false;
          for (const writePath of writablePathsToTry) {
            try {
              // Ensure directory exists
              const writeDir = path.dirname(writePath);
              if (!fs.existsSync(writeDir)) {
                fs.mkdirSync(writeDir, { recursive: true });
              }
              
              fs.writeFileSync(writePath, JSON.stringify(defaultConfig, null, 2), 'utf8');
              console.log(`Created config.json from defaults at: ${writePath}`);
              configCreated = true;
              break;
            } catch (writeError) {
              // Try next location if this one fails (e.g., read-only directory)
              console.warn(`Failed to write config.json to ${writePath}:`, writeError.message);
              continue;
            }
          }

          if (!configCreated) {
            console.warn('Could not create config.json in any writable location. Using defaults from memory.');
          }
          
          // Always return the default config, even if we couldn't write it to disk
          return defaultConfig;
        } else {
          console.error('Neither config.json nor config_default.json found.');
          console.error('Checked config.json paths:', pathsToCheck);
          console.error('Checked config_default.json paths:', defaultPathsToCheck);
          console.error('Current working directory:', process.cwd());
          console.error('Executable path:', process.execPath);
          console.error('Resources path:', resourcesPath);
          console.error('App path:', appPath);
          // Return empty config as fallback - this should rarely happen if config_default.json is properly packaged
          return {};
        }
      }
    } catch (e) {
      console.error('Failed to read config file', e);
      // Return empty config as fallback
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
      console.log(`Wrote config.json to: ${configPath}`);
      return true;
    } catch (e) {
      console.error('Failed to write config file', e);
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
          console.log(`Wrote config.json to alternative location: ${altPath}`);
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