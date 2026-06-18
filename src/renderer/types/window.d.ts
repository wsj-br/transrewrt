export {};

/** Preload bridge (`src/main/preload.js` → `contextBridge.exposeInMainWorld`). */
interface ElectronAPI {
  getConfig?: () => Promise<Record<string, unknown>>;
  setConfig?: (key: string, value: unknown) => Promise<unknown>;
  setAllConfig?: (config: Record<string, unknown>) => Promise<unknown>;
  getSecretsForRequest?: () => Promise<unknown>;
  testApiConfiguration?: (opts: unknown) => Promise<unknown>;
  testProviderApiKey?: (opts: unknown) => Promise<unknown>;
  openSettings?: () => void;
  notifySettingsUpdated?: () => void;
  onSettingsUpdated?: (callback: (...args: unknown[]) => void) => void;
  removeSettingsUpdated?: (callback: (...args: unknown[]) => void) => void;
  writeLastApiResult?: (payload: unknown) => Promise<unknown>;
  writeDebugFile?: (filename: string, data: unknown) => Promise<unknown>;
  llmStream?: (payload: unknown) => Promise<unknown>;
  llmAbort?: (requestId: string) => Promise<unknown>;
  llmModels?: () => Promise<unknown>;
  getBuildTimestamp?: () => Promise<unknown>;
  getOsUsername?: () => Promise<unknown>;
  openExternalUrl?: (url: string) => Promise<unknown>;
  readThirdPartyNotices?: () => Promise<unknown>;
  getOpenRouterKeyInfo?: () => Promise<unknown>;
  logApiCall?: (payload: unknown) => Promise<unknown>;
  getTotalCostFromDatabase?: () => Promise<{ total_cost?: number }>;
  getSummaryByFunction?: (from: unknown, to: unknown) => Promise<unknown[]>;
  getSummaryByModel?: (from: unknown, to: unknown) => Promise<unknown[]>;
  getSummaryByDay?: (from: unknown, to: unknown) => Promise<unknown[]>;
  getSummaryByTargetLang?: (from: unknown, to: unknown) => Promise<unknown[]>;
  getSummaryByRewriteMode?: (from: unknown, to: unknown) => Promise<unknown[]>;
  getSummaryByTransformPrompt?: (from: unknown, to: unknown) => Promise<unknown[]>;
  getAllCalls?: (...args: unknown[]) => Promise<{ rows?: unknown[]; total?: number }>;
  getAllCallsExport?: (from: unknown, to: unknown) => Promise<unknown[]>;
  getSummaryByDayPaginated?: (...args: unknown[]) => Promise<{ rows?: unknown[]; total?: number }>;
  deleteCallsOutsideRange?: (from: unknown, to: unknown) => Promise<unknown>;
  deleteCallsByModel?: (model: string) => Promise<unknown>;
  getExecutionHistory?: (...args: unknown[]) => Promise<unknown[]>;
  deleteExecutionHistory?: (from: unknown, to: unknown) => Promise<unknown>;
  customPrompts?: {
    getAll?: () => Promise<unknown>;
    create?: (prompt: unknown) => Promise<unknown>;
    update?: (id: unknown, prompt: unknown) => Promise<unknown>;
    delete?: (id: unknown) => Promise<unknown>;
    import?: (prompts: unknown, mode: unknown) => Promise<unknown>;
  };
  glossary?: {
    getAll?: () => Promise<unknown>;
    getByLangPair?: (sourceLang: string, targetLang: string) => Promise<unknown>;
    create?: (term: unknown) => Promise<unknown>;
    update?: (id: number, term: unknown) => Promise<unknown>;
    delete?: (id: number) => Promise<unknown>;
    import?: (terms: unknown) => Promise<unknown>;
  };
  exportConfigBackup?: (opts?: { includeUsageData?: boolean }) => Promise<{
    ok?: boolean;
    canceled?: boolean;
    filename?: string;
  }>;
  importConfigBackup?: (opts?: {
    filePath?: string;
    clearHistory?: boolean;
    restoreUsageData?: boolean;
  }) => Promise<{ ok?: boolean }>;
  getPathForFile?: (file: File) => string;
  getRuntimePlatform?: () => string;
  getSystemPrefersDark?: () => boolean;
  writeClipboardText?: (text: string) => Promise<unknown>;
  readPresets?: () => Promise<unknown>;
  getPresetsRemoteSyncState?: () => Promise<unknown>;
  updatePresetsFromRemote?: (opts?: unknown) => Promise<unknown>;
}

declare global {
  interface Window {
    electronAPI?: ElectronAPI;
  }
}
