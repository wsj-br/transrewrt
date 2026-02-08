import webAPI from "./webApiClient";

// Configuration manager to handle application settings
// Supports both Electron (file API) and Web/Docker (server API)
class ConfigManager {
  constructor() {
    this.config = {};
    this._isElectron = !!(typeof window !== "undefined" && window.electronAPI && window.electronAPI.readConfig);
    this._isWeb = !this._isElectron && typeof fetch !== "undefined";
    if (this._isElectron) {
      this.loadConfig();
    }
  }

  /**
   * Load configuration - sync in Electron, async in Web mode.
   * Returns Promise that resolves when load is complete (caller should await in web mode).
   */
  loadConfig() {
    try {
      if (this._isElectron && window.electronAPI && window.electronAPI.readConfig) {
        const fileConfig = window.electronAPI.readConfig();
        this.config = fileConfig && Object.keys(fileConfig).length > 0 ? { ...fileConfig } : {};
        return Promise.resolve();
      }
      if (this._isWeb) {
        return webAPI.readConfig().then((fileConfig) => {
          this.config = fileConfig && Object.keys(fileConfig).length > 0 ? { ...fileConfig } : {};
        });
      }
      this.config = {};
      return Promise.resolve();
    } catch (error) {
      this.config = {};
      return Promise.resolve();
    }
  }

  /**
   * Persist configuration to file via Electron API or server API (web mode)
   */
  persistToFile() {
    try {
      if (this._isElectron && window.electronAPI && window.electronAPI.writeConfig) {
        window.electronAPI.writeConfig(this.config);
        return;
      }
      if (this._isWeb) {
        webAPI.writeConfig(this.config);
        return;
      }
      const electronRequire =
        typeof window !== "undefined" && window.require ? window.require : null;
      if (!electronRequire) return;
      const fs = electronRequire("fs");
      const path = electronRequire("path");
      let filePath;
      if (window.electronAPI && window.electronAPI.getConfigPath) {
        filePath = window.electronAPI.getConfigPath();
      } else {
        filePath = path.join(path.dirname(process.execPath || process.cwd()), "config.json");
      }
      const configDir = path.dirname(filePath);
      if (!fs.existsSync(configDir)) {
        fs.mkdirSync(configDir, { recursive: true });
      }
      fs.writeFileSync(filePath, JSON.stringify(this.config, null, 2), "utf8");
    } catch (error) {
      // Silently fail
    }
  }

  /**
   * Save configuration to file only (Electron)
   * Always uses file persistence - no localStorage fallback
   */
  saveConfig() {
    try {
      // Always persist to file via Electron API or direct fs access
      this.persistToFile();
    } catch {
      // Silently fail
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
   * Set a configuration value
   * @param {string} key - Configuration key
   * @param {*} value - Configuration value
   */
  set(key, value) {
    this.config[key] = value;
    this.saveConfig();
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
   */
  setAll(config) {
    this.config = { ...this.config, ...config };
    this.saveConfig();
  }
}

export default new ConfigManager();
