// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron');

// Config and file writes go through main process (contextIsolation: true, no nodeIntegration in renderer).
const api = {
  getConfig: () => ipcRenderer.invoke('config:get'),
  setConfig: (key, value) => ipcRenderer.invoke('config:set', key, value),
  setAllConfig: (config) => ipcRenderer.invoke('config:setAll', config),
  getSecretsForRequest: () => ipcRenderer.invoke('config:getSecretsForRequest'),
  testApiConfiguration: (opts) => ipcRenderer.invoke('api:testConfiguration', opts),
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
  writeProxyDebugLog: (line) => ipcRenderer.invoke('write-proxy-debug-log', line),
  getBuildTimestamp: () => ipcRenderer.invoke('get-build-timestamp'),
  getOsUsername: () => ipcRenderer.invoke('get-os-username'),
  getOpenRouterKeyInfo: () => ipcRenderer.invoke('getOpenRouterKeyInfo'),
  // App DB (same surface as webAPI for Cost tab and custom prompts)
  logApiCall: (payload) => ipcRenderer.invoke('appDb:log', payload),
  getTotalCostFromDatabase: () => ipcRenderer.invoke('appDb:getTotalCost').then((r) => ({ total_cost: r?.total_cost ?? 0 })),
  getSummaryByFunction: (from, to) => ipcRenderer.invoke('appDb:getSummaryByFunction', from, to).then((r) => r?.rows ?? []),
  getSummaryByModel: (from, to) => ipcRenderer.invoke('appDb:getSummaryByModel', from, to).then((r) => r?.rows ?? []),
  getSummaryByDay: (from, to) => ipcRenderer.invoke('appDb:getSummaryByDay', from, to).then((r) => r?.rows ?? []),
  getSummaryByTargetLang: (from, to) => ipcRenderer.invoke('appDb:getSummaryByTargetLang', from, to).then((r) => r?.rows ?? []),
  getSummaryByRewriteMode: (from, to) => ipcRenderer.invoke('appDb:getSummaryByRewriteMode', from, to).then((r) => r?.rows ?? []),
  getSummaryByTransformPrompt: (from, to) => ipcRenderer.invoke('appDb:getSummaryByTransformPrompt', from, to).then((r) => r?.rows ?? []),
  getAllCalls: (from, to, page, pageSize) =>
    ipcRenderer.invoke('appDb:getAllCalls', from, to, page, pageSize).then((r) => r ?? { rows: [], total: 0 }),
  getAllCallsExport: (from, to) =>
    ipcRenderer.invoke('appDb:getAllCallsExport', from, to).then((r) => r?.rows ?? []),
  getSummaryByDayPaginated: (from, to, page, pageSize) =>
    ipcRenderer.invoke('appDb:getSummaryByDayPaginated', from, to, page, pageSize).then((r) => r ?? { rows: [], total: 0 }),
  deleteCallsOutsideRange: (from, to) => ipcRenderer.invoke('appDb:deleteOutsideRange', from, to),
  deleteCallsByModel: (model) => ipcRenderer.invoke('appDb:deleteByModel', model),
  customPrompts: {
    getAll: () => ipcRenderer.invoke('customPrompts:getAll'),
    create: (prompt) => ipcRenderer.invoke('customPrompts:create', prompt),
    update: (id, prompt) => ipcRenderer.invoke('customPrompts:update', id, prompt),
    delete: (id) => ipcRenderer.invoke('customPrompts:delete', id),
    import: (prompts, mode) => ipcRenderer.invoke('customPrompts:import', { prompts, mode }),
  },
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