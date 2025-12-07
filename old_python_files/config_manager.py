import json
import os

CONFIG_FILE = "config.json"

DEFAULT_CONFIG = {
    "api_key": "",
    "available_models": [],
    "cached_models": [],
    "last_used_model": "",
    "theme": "System",
    "available_languages": ["Spanish", "French", "German", "Italian", "Brazilian Portuguese", "Russian", "Japanese", "Chinese", "Korean", "English (US)", "English (UK)", "Spanish (ES)", "Spanish (Latam)"],
    "enter_behavior": "Shift-Translate",
    "auto_copy": False,
    "real_time_translation": True,
    "font_family": "Segoe UI",
    "font_size": 13,
    "input_text_color": "white",
    "output_text_color": "white",
    "window_geometry": "",
    "settings_geometry": "",
    "total_cost": 0.0
}

class ConfigManager:
    def __init__(self):
        self.config = self.load_config()

    def load_config(self):
        if not os.path.exists(CONFIG_FILE):
            return DEFAULT_CONFIG.copy()
        try:
            with open(CONFIG_FILE, "r") as f:
                return json.load(f)
        except json.JSONDecodeError:
            return DEFAULT_CONFIG.copy()

    def save_config(self):
        with open(CONFIG_FILE, "w") as f:
            json.dump(self.config, f, indent=4)

    def get(self, key):
        return self.config.get(key, DEFAULT_CONFIG.get(key))

    def set(self, key, value):
        self.config[key] = value
        self.save_config()
