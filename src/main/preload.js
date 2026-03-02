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
  getBuildTimestamp: () => ipcRenderer.invoke('get-build-timestamp'),
  // Cost-tracking DB (same surface as webAPI for Cost tab)
  logApiCall: (payload) => ipcRenderer.invoke('costDb:log', payload),
  getTotalCostFromDatabase: () => ipcRenderer.invoke('costDb:getTotalCost').then((r) => ({ total_cost: r?.total_cost ?? 0 })),
  getSummaryByFunction: (from, to) => ipcRenderer.invoke('costDb:getSummaryByFunction', from, to).then((r) => r?.rows ?? []),
  getSummaryByModel: (from, to) => ipcRenderer.invoke('costDb:getSummaryByModel', from, to).then((r) => r?.rows ?? []),
  getSummaryByDay: (from, to) => ipcRenderer.invoke('costDb:getSummaryByDay', from, to).then((r) => r?.rows ?? []),
  getSummaryByTargetLang: (from, to) => ipcRenderer.invoke('costDb:getSummaryByTargetLang', from, to).then((r) => r?.rows ?? []),
  getSummaryByRewriteStyle: (from, to) => ipcRenderer.invoke('costDb:getSummaryByRewriteStyle', from, to).then((r) => r?.rows ?? []),
  getAllCalls: (from, to, page, pageSize) =>
    ipcRenderer.invoke('costDb:getAllCalls', from, to, page, pageSize).then((r) => r ?? { rows: [], total: 0 }),
  getSummaryByDayPaginated: (from, to, page, pageSize) =>
    ipcRenderer.invoke('costDb:getSummaryByDayPaginated', from, to, page, pageSize).then((r) => r ?? { rows: [], total: 0 }),
  deleteCallsOutsideRange: (from, to) => ipcRenderer.invoke('costDb:deleteOutsideRange', from, to),
  deleteCallsByModel: (model) => ipcRenderer.invoke('costDb:deleteByModel', model),
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