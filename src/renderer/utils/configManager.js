// Configuration manager to handle application settings
class ConfigManager {
  constructor() {
    this.config = {};
    this.loadConfig();
  }

  /**
   * Load configuration from localStorage
   */
  loadConfig() {
    try {
      // First try to load from localStorage
      const savedConfig = localStorage.getItem("translator_rewriter_config");
      if (savedConfig) {
        this.config = JSON.parse(savedConfig);
      } else {
        this.config = {};
      }

      // If running in Electron, try to load from file and merge
      if (window.electronAPI) {
        const fileConfig = window.electronAPI.readConfig();
        // readConfig() always returns an object (never null), either from config.json or config_default.json
        if (fileConfig && Object.keys(fileConfig).length > 0) {
          this.config = { ...this.config, ...fileConfig };
          console.log("Loaded config from file:", this.config);
        }
      }
      
      // If config is still empty after all attempts, log a warning
      // This should not happen in Electron since readConfig() creates config from defaults
      if (Object.keys(this.config).length === 0) {
        console.warn("No configuration loaded. This may cause issues.");
      }
    } catch (error) {
      console.error("Error loading config:", error);
      // Keep empty config - readConfig() should have handled defaults
    }
  }

  persistToFile() {
    try {
      // Use electronAPI to write config if available (ensures consistent location)
      if (window.electronAPI && window.electronAPI.writeConfig) {
        const success = window.electronAPI.writeConfig(this.config);
        if (success) {
          return;
        }
        // If writeConfig fails, fall back to old method
      }

      // Fallback: try to write using require (for compatibility)
      const electronRequire =
        typeof window !== "undefined" && window.require ? window.require : null;
      if (!electronRequire) return;
      const fs = electronRequire("fs");
      const path = electronRequire("path");
      
      // Try to get the config path from electronAPI if available
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
      console.log(`Persisted config to: ${filePath}`);
    } catch (error) {
      console.error("Error writing config file:", error);
    }
  }

  /**
   * Save configuration to localStorage and disk (Electron)
   */
  saveConfig() {
    try {
      localStorage.setItem(
        "translator_rewriter_config",
        JSON.stringify(this.config),
      );
      this.persistToFile();
    } catch (error) {
      console.error("Error saving config:", error);
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
