import webAPI from "../api/webApiClient";

// Configuration manager to handle application settings
// Supports both Electron (file API) and Web/Docker (server API)
class ConfigManager {
  config: Record<string, unknown> = {};
  _isElectron = false;
  _isWeb = false;

  constructor() {
    this._isElectron = !!(typeof window !== "undefined" && window.electronAPI && window.electronAPI.getConfig);
    this._isWeb = !this._isElectron && typeof fetch !== "undefined";
    if (this._isElectron) {
      this.loadConfig();
    }
  }

  /**
   * Load configuration - async in both Electron (IPC) and Web mode.
   * Returns Promise that resolves when load is complete (caller should await).
   */
  loadConfig() {
    try {
      if (this._isElectron && window.electronAPI && window.electronAPI.getConfig) {
        return window.electronAPI.getConfig().then((fileConfig) => {
          this.config = fileConfig && Object.keys(fileConfig).length > 0 ? { ...fileConfig } : {};
        });
      }
      if (this._isWeb) {
        return webAPI.readConfig().then((fileConfig) => {
          this.config = fileConfig && Object.keys(fileConfig).length > 0 ? { ...fileConfig } : {};
        });
      }
      this.config = {};
      return Promise.resolve();
    } catch (error) {
      console.error("[ConfigManager] Error loading config:", error);
      this.config = {};
      return Promise.resolve();
    }
  }

  /**
   * Persist configuration via Electron IPC or server API (web mode)
   * @returns {Promise<boolean>} True if save succeeded
   */
  async persistToFile() {
    try {
      if (this._isElectron && window.electronAPI && window.electronAPI.setAllConfig) {
        const success = await window.electronAPI.setAllConfig(this.config);
        if (success) console.log("[ConfigManager] Config persisted.");
        return success;
      }
      if (this._isWeb) {
        const success = await webAPI.writeConfig(this.config);
        if (!success) {
          console.error("[ConfigManager] Failed to save config to server");
        } else {
          console.log("[ConfigManager] Config persisted.");
        }
        return success;
      }
      return false;
    } catch (error) {
      console.error("[ConfigManager] Failed to save config:", error);
      return false;
    }
  }

  /**
   * Save configuration to file only (Electron)
   * Always uses file persistence - no localStorage fallback
   * @returns {Promise<boolean>} True if save succeeded
   */
  async saveConfig() {
    try {
      return await this.persistToFile();
    } catch (error) {
      console.error("[ConfigManager] saveConfig error:", error);
      return false;
    }
  }

  /**
   * Get a configuration value
   * @param {string} key - Configuration key
   * @returns {*} Configuration value
   */
  get(key) {
    return this.config[key];
  }

  /**
   * Set a configuration value (single-key write in Electron to avoid race conditions)
   * @param {string} key - Configuration key
   * @param {*} value - Configuration value
   * @returns {Promise<boolean>} True if save succeeded
   */
  set(key, value) {
    if (this._isElectron && window.electronAPI && window.electronAPI.setConfig) {
      this.config[key] = value;
      return window.electronAPI.setConfig(key, value);
    }
    this.config[key] = value;
    return this.saveConfig();
  }

  /**
   * Get all configuration
   * @returns {Object} All configuration
   */
  getAll() {
    return { ...this.config };
  }

  /**
   * Set multiple configuration values
   * @param {Object} config - Configuration object
   * @returns {Promise<boolean>} True if save succeeded
   */
  setAll(config) {
    this.config = { ...this.config, ...config };
    if (this._isElectron && window.electronAPI && window.electronAPI.setAllConfig) {
      return window.electronAPI.setAllConfig(this.config);
    }
    return this.saveConfig();
  }
}

export default new ConfigManager();
