// Configuration manager to handle application settings
class ConfigManager {
  constructor() {
    this.config = {};
    this.loadConfig();
  }

  /**
   * Load configuration from file only (Electron API)
   * Uses localStorage only as fallback if electronAPI unavailable
   */
  loadConfig() {
    try {
      // Only use Electron file API if available
      if (window.electronAPI && window.electronAPI.readConfig) {
        const fileConfig = window.electronAPI.readConfig();
        // readConfig() always returns an object (never null), either from config.json or config_default.json
        if (fileConfig && Object.keys(fileConfig).length > 0) {
          this.config = { ...fileConfig };
        } else {
          this.config = {};
        }
      } else {
        // Running in web mode without Electron - no file persistence available
        this.config = {};
      }
    } catch (error) {
      this.config = {};
    }
  }

  /**
   * Persist configuration to file via Electron API
   */
  persistToFile() {
    try {
      // Always use electronAPI.writeConfig if available
      if (window.electronAPI && window.electronAPI.writeConfig) {
        const success = window.electronAPI.writeConfig(this.config);
        if (success) {
          return;
        }
      }

      // Fallback: direct Node.js fs access (only in Electron context with nodeIntegration)
      const electronRequire =
        typeof window !== "undefined" && window.require ? window.require : null;
      if (!electronRequire) {
        return;
      }
      const fs = electronRequire("fs");
      const path = electronRequire("path");

      // Determine config path
      let filePath;
      if (window.electronAPI && window.electronAPI.getConfigPath) {
        filePath = window.electronAPI.getConfigPath();
      } else {
        // Fallback to executable directory
        filePath = path.join(path.dirname(process.execPath || process.cwd()), "config.json");
      }

      // Ensure directory exists
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
