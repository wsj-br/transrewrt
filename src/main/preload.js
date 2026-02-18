// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron');

// Config and file writes go through main process (contextIsolation: true, no nodeIntegration in renderer).
const api = {
  getConfig: () => ipcRenderer.invoke('config:get'),
  setConfig: (key, value) => ipcRenderer.invoke('config:set', key, value),
  setAllConfig: (config) => ipcRenderer.invoke('config:setAll', config),
  openSettings: () => ipcRenderer.send('open-settings'),
  notifySettingsUpdated: () => ipcRenderer.send('settings-updated'),
  onSettingsUpdated: (callback) => {
    ipcRenderer.on('settings-updated', callback);
  },
  removeSettingsUpdated: (callback) => {
    ipcRenderer.removeListener('settings-updated', callback);
  },
  writeLastApiResult: (payload) => ipcRenderer.invoke('write-last-api-result', payload),
  writeDebugFile: (filename, data) => ipcRenderer.invoke('write-debug-file', filename, data),
};

contextBridge.exposeInMainWorld('electronAPI', api);

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});