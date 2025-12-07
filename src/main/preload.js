// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
const { contextBridge, ipcRenderer } = require('electron');
const fs = require('fs');
const path = require('path');

const api = {
  readConfig: () => {
    try {
      // Look for config.json in multiple locations to be robust
      const pathsToCheck = [
        // Development path relative to this file (src/main/preload.js -> root/config.json)
        path.join(__dirname, '../../config.json'),
        // Current working directory
        path.resolve('config.json'),
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
        console.error('Config file not found. Checked paths:', pathsToCheck);
      }
    } catch (e) {
      console.error('Failed to read config file', e);
    }
    return null;
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