import webAPI from "./webApiClient";

// Configuration manager to handle application settings
// Supports both Electron (file API) and Web/Docker (server API)
class ConfigManager {
  constructor() {
    this.config = {};
    this._isElectron = !!(typeof window !== "undefined" && window.electronAPI && window.electronAPI.readConfig);
    this._isWeb = !this._isElectron && typeof fetch !== "undefined";
    console.log(`[ConfigManager] Initialized - Mode: ${this._isElectron ? "Electron" : this._isWeb ? "Web/Docker" : "Unknown"}`);
    if (this._isElectron) {
      console.log("[ConfigManager] Loading config in Electron mode");
      this.loadConfig();
    } else {
      console.log("[ConfigManager] Web/Docker mode - config will be loaded asynchronously");
    }
  }

  /**
   * Load configuration - sync in Electron, async in Web mode.
   * Returns Promise that resolves when load is complete (caller should await in web mode).
   */
  loadConfig() {
    console.log("[ConfigManager] loadConfig called");
    try {
      if (this._isElectron && window.electronAPI && window.electronAPI.readConfig) {
        console.log("[ConfigManager] Loading config via Electron API");
        const fileConfig = window.electronAPI.readConfig();
        this.config = fileConfig && Object.keys(fileConfig).length > 0 ? { ...fileConfig } : {};
        console.log(`[ConfigManager] Config loaded (Electron). Keys: ${Object.keys(this.config).join(", ")}`);
        return Promise.resolve();
      }
      if (this._isWeb) {
        console.log("[ConfigManager] Loading config via Web API");
        return webAPI.readConfig().then((fileConfig) => {
          this.config = fileConfig && Object.keys(fileConfig).length > 0 ? { ...fileConfig } : {};
          console.log(`[ConfigManager] Config loaded (Web). Keys: ${Object.keys(this.config).join(", ")}`);
          if (this.config.api_key) {
            console.log(`[ConfigManager] API Key loaded: ${this.config.api_key.substring(0, 8)}...`);
          } else {
            console.log("[ConfigManager] No API Key in loaded config");
          }
        });
      }
      console.log("[ConfigManager] No config loading method available");
      this.config = {};
      return Promise.resolve();
    } catch (error) {
      console.error("[ConfigManager] Error loading config:", error);
      this.config = {};
      return Promise.resolve();
    }
  }

  /**
   * Persist configuration to file via Electron API or server API (web mode)
   * @returns {Promise<boolean>} True if save succeeded
   */
  async persistToFile() {
    console.log("[ConfigManager] persistToFile called");
    console.log(`[ConfigManager] Config to save - Keys: ${Object.keys(this.config).join(", ")}`);
    if (this.config.api_key) {
      console.log(`[ConfigManager] API Key to save: ${this.config.api_key.substring(0, 8)}...`);
    } else {
      console.log("[ConfigManager] No API Key in config to save");
    }
    try {
      if (this._isElectron && window.electronAPI && window.electronAPI.writeConfig) {
        console.log("[ConfigManager] Saving via Electron API");
        window.electronAPI.writeConfig(this.config);
        console.log("[ConfigManager] Config saved successfully (Electron)");
        return true;
      }
      if (this._isWeb) {
        console.log("[ConfigManager] Saving via Web API");
        const success = await webAPI.writeConfig(this.config);
        if (!success) {
          console.error("[ConfigManager] Failed to save config to server");
        } else {
          console.log("[ConfigManager] Config saved successfully (Web)");
        }
        return success;
      }
      console.log("[ConfigManager] Attempting fallback save method");
      const electronRequire =
        typeof window !== "undefined" && window.require ? window.require : null;
      if (!electronRequire) {
        console.log("[ConfigManager] No fallback method available");
        return false;
      }
      const fs = electronRequire("fs");
      const path = electronRequire("path");
      let filePath;
      if (window.electronAPI && window.electronAPI.getConfigPath) {
        filePath = window.electronAPI.getConfigPath();
      } else {
        filePath = path.join(path.dirname(process.execPath || process.cwd()), "config.json");
      }
      console.log(`[ConfigManager] Fallback save to: ${filePath}`);
      const configDir = path.dirname(filePath);
      if (!fs.existsSync(configDir)) {
        fs.mkdirSync(configDir, { recursive: true });
      }
      fs.writeFileSync(filePath, JSON.stringify(this.config, null, 2), "utf8");
      console.log("[ConfigManager] Config saved successfully (fallback)");
      return true;
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
    console.log("[ConfigManager] saveConfig called");
    try {
      // Always persist to file via Electron API or direct fs access
      const result = await this.persistToFile();
      console.log(`[ConfigManager] saveConfig result: ${result}`);
      return result;
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
   * Set a configuration value
   * @param {string} key - Configuration key
   * @param {*} value - Configuration value
   * @returns {Promise<boolean>} True if save succeeded
   */
  set(key, value) {
    console.log(`[ConfigManager] set called - Key: ${key}, Value type: ${typeof value}`);
    if (key === "api_key" && typeof value === "string") {
      console.log(`[ConfigManager] Setting API Key: ${value.substring(0, 8)}...`);
    }
    this.config[key] = value;
    // Return the promise so callers can await if needed
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
    console.log(`[ConfigManager] setAll called - Keys: ${Object.keys(config).join(", ")}`);
    if (config.api_key) {
      console.log(`[ConfigManager] Setting API Key via setAll: ${config.api_key.substring(0, 8)}...`);
    }
    this.config = { ...this.config, ...config };
    // Return the promise so callers can await if needed
    return this.saveConfig();
  }
}

export default new ConfigManager();
