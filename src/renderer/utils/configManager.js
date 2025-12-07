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
        if (fileConfig) {
          this.config = { ...this.config, ...fileConfig };
          console.log("Loaded config from file:", this.config);
        }

        if (Object.keys(this.config).length === 0) {
          this.setDefaultConfig();
        }
      } else {
        if (Object.keys(this.config).length === 0) {
          this.setDefaultConfig();
        }
      }
    } catch (error) {
      console.error("Error loading config:", error);
      this.setDefaultConfig();
    }
  }

  setDefaultConfig() {
    this.config = {
      api_key: "",
      last_used_model: "",
      available_models: [],
      available_languages: [],
      auto_copy: false,
      real_time_translation: false,
      enter_behavior: "Translate",
      font_family: "Arial",
      font_size: 14,
      input_text_color: "#ffffff",
      output_text_color: "#ffffff",
      window_geometry: "1000x700",
      settings_modal_geometry: { width: 950, height: 640 },
      total_cost: 0.0,
      api_url: "https://openrouter.ai/api/v1",
    };
  }

  persistToFile() {
    try {
      const electronRequire =
        typeof window !== "undefined" && window.require ? window.require : null;
      if (!electronRequire) return;
      const fs = electronRequire("fs");
      const path = electronRequire("path");
      const filePath = path.join(process.cwd(), "config.json");
      fs.writeFileSync(filePath, JSON.stringify(this.config, null, 2), "utf8");
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
