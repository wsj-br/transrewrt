// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer, webUtils } = require('electron');

function llmStreamWithAccumulation(payload) {
  return new Promise((resolve, reject) => {
    const { requestId } = payload;
    let content = '';
    const onChunk = (_e, d) => {
      if (d.requestId !== requestId) return;
      content += d.text || '';
    };
    const onEnd = (_e, d) => {
      if (d.requestId !== requestId) return;
      cleanup();
      resolve({ content, usage: d.usage, cancelled: false });
    };
    const onErr = (_e, d) => {
      if (d.requestId !== requestId) return;
      cleanup();
      reject(new Error(d.error || 'LLM stream error'));
    };
    function cleanup() {
      ipcRenderer.removeListener('llm:chunk', onChunk);
      ipcRenderer.removeListener('llm:end', onEnd);
      ipcRenderer.removeListener('llm:error', onErr);
    }
    ipcRenderer.on('llm:chunk', onChunk);
    ipcRenderer.on('llm:end', onEnd);
    ipcRenderer.on('llm:error', onErr);
    ipcRenderer.invoke('llm:stream', payload).catch((e) => {
      cleanup();
      reject(e);
    });
  });
}

// Config and file writes go through main process (contextIsolation: true, no nodeIntegration in renderer).
const api = {
  getConfig: () => ipcRenderer.invoke('config:get'),
  setConfig: (key, value) => ipcRenderer.invoke('config:set', key, value),
  setAllConfig: (config) => ipcRenderer.invoke('config:setAll', config),
  getSecretsForRequest: () => ipcRenderer.invoke('config:getSecretsForRequest'),
  testApiConfiguration: (opts) => ipcRenderer.invoke('api:testConfiguration', opts),
  testProviderApiKey: (opts) => ipcRenderer.invoke('api:testProvider', opts),
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
  llmStream: (payload) => llmStreamWithAccumulation(payload),
  llmAbort: (requestId) => ipcRenderer.invoke('llm:abort', { requestId }),
  llmModels: () => ipcRenderer.invoke('llm:models'),
  getBuildTimestamp: () => ipcRenderer.invoke('get-build-timestamp'),
  getOsUsername: () => ipcRenderer.invoke('get-os-username'),
  openExternalUrl: (url) => ipcRenderer.invoke('shell:openExternal', url),
  readThirdPartyNotices: () => ipcRenderer.invoke('shell:readThirdPartyNotices'),
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
  getAllCalls: (from, to, page, pageSize, username, sortKey, sortDir) =>
    ipcRenderer.invoke('appDb:getAllCalls', from, to, page, pageSize, username, sortKey, sortDir).then((r) => r ?? { rows: [], total: 0 }),
  getAllCallsExport: (from, to) =>
    ipcRenderer.invoke('appDb:getAllCallsExport', from, to).then((r) => r?.rows ?? []),
  getSummaryByDayPaginated: (from, to, page, pageSize) =>
    ipcRenderer.invoke('appDb:getSummaryByDayPaginated', from, to, page, pageSize).then((r) => r ?? { rows: [], total: 0 }),
  deleteCallsOutsideRange: (from, to) => ipcRenderer.invoke('appDb:deleteOutsideRange', from, to),
  deleteCallsByModel: (model) => ipcRenderer.invoke('appDb:deleteByModel', model),
  getExecutionHistory: (from, to, username, limit) =>
    ipcRenderer.invoke('appDb:getExecutionHistory', from, to, username, limit).then((r) => r?.rows ?? []),
  deleteExecutionHistory: (from, to) => ipcRenderer.invoke('appDb:deleteExecutionHistory', from, to),
  customPrompts: {
    getAll: () => ipcRenderer.invoke('customPrompts:getAll'),
    create: (prompt) => ipcRenderer.invoke('customPrompts:create', prompt),
    update: (id, prompt) => ipcRenderer.invoke('customPrompts:update', id, prompt),
    delete: (id) => ipcRenderer.invoke('customPrompts:delete', id),
    import: (prompts, mode) => ipcRenderer.invoke('customPrompts:import', { prompts, mode }),
  },
  exportConfigBackup: (opts) => ipcRenderer.invoke('configBackup:export', opts || {}),
  importConfigBackup: (opts) => ipcRenderer.invoke('configBackup:import', opts || {}),
  getPathForFile: (file) => (file && webUtils?.getPathForFile ? webUtils.getPathForFile(file) : ''),
  getRuntimePlatform: () => process.platform,
  writeClipboardText: (text) => ipcRenderer.invoke('clipboard:writeText', text),
  readPresets: () => ipcRenderer.invoke('presets:read'),
  updatePresetsFromRemote: (opts) => ipcRenderer.invoke('presets:updateFromRemote', opts || {}),
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