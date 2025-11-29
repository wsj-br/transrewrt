import customtkinter as ctk
from tkinter import ttk
import tkinter as tk
from config_manager import ConfigManager
from api_client import OpenRouterClient
import threading

class ColorPicker(ctk.CTkFrame):
    """Simple color picker with predefined colors"""
    COLORS = [
        ("White", "#FFFFFF"), ("Light Gray", "#D3D3D3"), ("Gray", "#808080"),
        ("Black", "#000000"), ("Red", "#FF0000"), ("Orange", "#FFA500"),
        ("Yellow", "#FFFF00"), ("Green", "#00FF00"), ("Cyan", "#00FFFF"),
        ("Blue", "#0000FF"), ("Purple", "#800080"), ("Pink", "#FFC0CB")
    ]
    
    def __init__(self, parent, initial_color="white", **kwargs):
        super().__init__(parent, **kwargs)
        self.selected_color = tk.StringVar(value=initial_color)
        
        # Find color name or use hex
        color_name = initial_color
        for name, hex_val in self.COLORS:
            if hex_val.lower() == initial_color.lower():
                color_name = name
                break
        
        self.dropdown = ctk.CTkOptionMenu(
            self, 
            variable=self.selected_color,
            values=[name for name, _ in self.COLORS],
            width=150
        )
        self.dropdown.pack(side="left", padx=5)
        
        # Set initial value
        self.selected_color.set(color_name)
    
    def get(self):
        """Get the hex color value"""
        name = self.selected_color.get()
        for n, hex_val in self.COLORS:
            if n == name:
                return hex_val
        return "#FFFFFF"

class SettingsDialog(ctk.CTkToplevel):
    def __init__(self, parent, config_manager: ConfigManager):
        super().__init__(parent)
        self.config_manager = config_manager
        self.title("Settings")
        
        # Load geometry
        geom = self.config_manager.get("settings_geometry")
        if geom:
            self.geometry(geom)
        else:
            self.geometry("1000x700")
        
        self.resizable(True, True)
        
        # Make modal
        self.transient(parent)
        self.grab_set()

        self.all_models = []
        self.filtered_models = []
        self.selected_model_ids = set(self.config_manager.get("available_models"))
        
        # Sort state
        self.sort_col = "Prompt"
        self.sort_reverse = False

        self.layout_ui()
        
        # Bind close event
        self.protocol("WM_DELETE_WINDOW", self.on_close)

    def on_close(self):
        # Save geometry
        self.config_manager.set("settings_geometry", self.geometry())
        self.destroy()

    def layout_ui(self):
        self.tabview = ctk.CTkTabview(self)
        self.tabview.pack(fill="both", expand=True, padx=10, pady=10)

        self.tab_general = self.tabview.add("General")
        self.tab_models = self.tabview.add("Models")
        self.tab_languages = self.tabview.add("Languages")

        self.setup_general_tab()
        self.setup_models_tab()
        self.setup_languages_tab()

        # Save Button
        self.save_btn = ctk.CTkButton(self, text="Save & Close", command=self.save_settings)
        self.save_btn.pack(pady=10)

    def setup_general_tab(self):
        scroll = ctk.CTkScrollableFrame(self.tab_general)
        scroll.pack(fill="both", expand=True, padx=10, pady=10)

        # API Key
        ctk.CTkLabel(scroll, text="OpenRouter API Key:", font=ctk.CTkFont(weight="bold")).pack(anchor="w", pady=(10, 5))
        self.api_key_entry = ctk.CTkEntry(scroll, show="*", width=400)
        self.api_key_entry.pack(anchor="w", pady=5)
        self.api_key_entry.insert(0, self.config_manager.get("api_key"))

        # Cost Tracking
        ctk.CTkLabel(scroll, text="Cost Tracking:", font=ctk.CTkFont(weight="bold")).pack(anchor="w", pady=(20, 5))
        cost_frame = ctk.CTkFrame(scroll, fg_color="transparent")
        cost_frame.pack(anchor="w", fill="x")
        
        total_cost = self.config_manager.get("total_cost")
        ctk.CTkLabel(cost_frame, text=f"Total Cost: ${total_cost:.6f}").pack(side="left", padx=(0, 20))
        ctk.CTkButton(cost_frame, text="Reset Cost", width=100, command=self.reset_cost).pack(side="left")

        # Behavior Settings
        ctk.CTkLabel(scroll, text="Behavior:", font=ctk.CTkFont(weight="bold")).pack(anchor="w", pady=(20, 5))
        
        self.enter_var = ctk.StringVar(value=self.config_manager.get("enter_behavior"))
        ctk.CTkLabel(scroll, text="Enter Key Behavior:").pack(anchor="w")
        ctk.CTkOptionMenu(scroll, variable=self.enter_var, values=["Translate", "Newline", "Shift-Translate"]).pack(anchor="w", pady=5)

        self.auto_copy_var = ctk.BooleanVar(value=self.config_manager.get("auto_copy"))
        ctk.CTkCheckBox(scroll, text="Auto-copy result to clipboard", variable=self.auto_copy_var).pack(anchor="w", pady=5)

        self.realtime_var = ctk.BooleanVar(value=self.config_manager.get("real_time_translation"))
        ctk.CTkCheckBox(scroll, text="Real-time translation (while typing)", variable=self.realtime_var).pack(anchor="w", pady=5)

        # Appearance Settings
        ctk.CTkLabel(scroll, text="Appearance:", font=ctk.CTkFont(weight="bold")).pack(anchor="w", pady=(20, 5))
        
        # Font
        font_frame = ctk.CTkFrame(scroll, fg_color="transparent")
        font_frame.pack(anchor="w", fill="x")
        
        ctk.CTkLabel(font_frame, text="Font Family:").pack(side="left", padx=(0, 10))
        self.font_family_var = ctk.StringVar(value=self.config_manager.get("font_family"))
        fonts = ["Segoe UI", "Arial", "Calibri", "Verdana", "Consolas", "Courier New", "Lucida Console"]
        ctk.CTkOptionMenu(font_frame, variable=self.font_family_var, values=fonts, width=150).pack(side="left", padx=(0, 20))

        ctk.CTkLabel(font_frame, text="Size:").pack(side="left", padx=(0, 10))
        self.font_size_var = ctk.StringVar(value=str(self.config_manager.get("font_size")))
        ctk.CTkEntry(font_frame, textvariable=self.font_size_var, width=50).pack(side="left")

        # Colors
        ctk.CTkLabel(scroll, text="Text Colors:", font=ctk.CTkFont(size=12)).pack(anchor="w", pady=(10, 5))
        
        color_frame = ctk.CTkFrame(scroll, fg_color="transparent")
        color_frame.pack(anchor="w", fill="x", pady=5)
        
        ctk.CTkLabel(color_frame, text="Input:").pack(side="left", padx=(0, 10))
        self.input_color_picker = ColorPicker(color_frame, initial_color=self.config_manager.get("input_text_color"))
        self.input_color_picker.pack(side="left", padx=(0, 20))

        ctk.CTkLabel(color_frame, text="Output:").pack(side="left", padx=(0, 10))
        self.output_color_picker = ColorPicker(color_frame, initial_color=self.config_manager.get("output_text_color"))
        self.output_color_picker.pack(side="left")

    def reset_cost(self):
        self.config_manager.set("total_cost", 0.0)
        # Refresh display
        self.setup_general_tab()

    def setup_models_tab(self):
        # Main Content Area
        content_frame = ctk.CTkFrame(self.tab_models, fg_color="transparent")
        content_frame.pack(fill="both", expand=True, padx=5, pady=5)

        # Left: Available Models (Treeview)
        left_frame = ctk.CTkFrame(content_frame)
        left_frame.pack(side="left", fill="both", expand=True, padx=(0, 5))
        
        ctk.CTkLabel(left_frame, text="Available Models", font=ctk.CTkFont(size=18, weight="bold")).pack(pady=(5, 2), anchor="center")

        # Controls (Search, Filter, Buttons) - Moved here
        controls_frame = ctk.CTkFrame(left_frame, fg_color="transparent")
        controls_frame.pack(fill="x", padx=5, pady=2)

        # Search
        self.search_var = ctk.StringVar()
        self.search_var.trace("w", self.on_search_change)
        ctk.CTkEntry(controls_frame, textvariable=self.search_var, placeholder_text="Search models...", width=200).pack(side="left", padx=5)

        # Filter Free
        self.filter_free_var = ctk.BooleanVar()
        ctk.CTkCheckBox(controls_frame, text="Free Only", variable=self.filter_free_var, command=self.refresh_model_view).pack(side="left", padx=10)

        # Expand/Collapse Buttons
        self.expand_btn = ctk.CTkButton(controls_frame, text="Expand All", width=80, command=self.expand_all)
        self.expand_btn.pack(side="left", padx=5)
        
        self.collapse_btn = ctk.CTkButton(controls_frame, text="Collapse All", width=80, command=self.collapse_all)
        self.collapse_btn.pack(side="left", padx=5)

        # Refresh Button
        self.fetch_btn = ctk.CTkButton(controls_frame, text="Refresh API", command=self.fetch_models, width=100)
        self.fetch_btn.pack(side="left", padx=5)


        
        # Treeview for better performance
        tree_container = ctk.CTkFrame(left_frame)
        tree_container.pack(fill="both", expand=True, padx=5, pady=(2, 5))
        
        # Configure Treeview Style for Dark Mode
        style = ttk.Style()
        style.theme_use("default")
        style.configure("Treeview", 
                        background="#2b2b2b", 
                        foreground="white", 
                        fieldbackground="#2b2b2b",
                        borderwidth=0)
        style.configure("Treeview.Heading", 
                        background="#3a3a3a", 
                        foreground="white", 
                        relief="flat")
        style.map("Treeview", 
                  background=[('selected', '#1f538d')])
        style.map("Treeview.Heading", 
                  background=[('active', '#4a4a4a')])

        self.models_tree = ttk.Treeview(tree_container, columns=("Name", "Prompt"), show="tree headings", selectmode="none")
        self.models_tree.heading("#0", text="Provider/Model", command=lambda: self.sort_tree("#0"))
        self.models_tree.heading("Name", text="Name", command=lambda: self.sort_tree("Name"))
        self.models_tree.heading("Prompt", text="$/M Prompt", command=lambda: self.sort_tree("Prompt"))
        
        self.models_tree.column("#0", width=300)
        self.models_tree.column("Name", width=200)
        self.models_tree.column("Prompt", width=100)
        
        scrollbar = ttk.Scrollbar(tree_container, orient="vertical", command=self.models_tree.yview)
        self.models_tree.configure(yscrollcommand=scrollbar.set)
        
        self.models_tree.pack(side="left", fill="both", expand=True)
        scrollbar.pack(side="right", fill="y")
        
        self.models_tree.bind("<Button-1>", self.on_tree_click)

        # Right: Selected Models (Treeview)
        right_frame = ctk.CTkFrame(content_frame, width=400)
        right_frame.pack(side="right", fill="both", padx=(5, 0))
        right_frame.pack_propagate(False)
        
        ctk.CTkLabel(right_frame, text="Selected Models", font=ctk.CTkFont(size=18, weight="bold")).pack(pady=(5, 2))
        
        # Spacer to align with left side controls
        # Controls frame on left has height approx 28 + padding
        ctk.CTkFrame(right_frame, height=32, fg_color="transparent").pack(fill="x", pady=2)
        
        selected_container = ctk.CTkFrame(right_frame)
        selected_container.pack(fill="both", expand=True, padx=5, pady=(2, 5))
        
        self.selected_tree = ttk.Treeview(selected_container, columns=("Prompt",), show="tree headings", selectmode="none")
        self.selected_tree.heading("#0", text="Model")
        self.selected_tree.heading("Prompt", text="$/M Prompt")
        
        self.selected_tree.column("#0", width=250)
        self.selected_tree.column("Prompt", width=100)
        
        sel_scrollbar = ttk.Scrollbar(selected_container, orient="vertical", command=self.selected_tree.yview)
        self.selected_tree.configure(yscrollcommand=sel_scrollbar.set)
        
        self.selected_tree.pack(side="left", fill="both", expand=True)
        sel_scrollbar.pack(side="right", fill="y")
        
        self.selected_tree.bind("<Button-1>", self.on_selected_tree_click)

        # Initial Load
        cached = self.config_manager.get("cached_models")
        if cached and isinstance(cached, list) and len(cached) > 0 and isinstance(cached[0], dict):
            self.all_models = cached
            self.refresh_model_view()
        elif self.config_manager.get("api_key"):
            self.fetch_models()
            
        self.update_selected_view()

    def sort_tree(self, col):
        if self.sort_col == col:
            self.sort_reverse = not self.sort_reverse
        else:
            self.sort_col = col
            self.sort_reverse = False
            
        self.refresh_model_view()

    def on_tree_click(self, event):
        region = self.models_tree.identify("region", event.x, event.y)
        if region == "tree":
            item = self.models_tree.identify_row(event.y)
            if item:
                # Check if it's a model (has tags) or provider
                tags = self.models_tree.item(item, "tags")
                if "model" in tags:
                    # Model ID is now in the text of the item, not values[0]
                    # But wait, we are putting it in text for the tree item
                    model_id = self.models_tree.item(item, "text")
                    if model_id:
                        # Toggle selection
                        if model_id in self.selected_model_ids:
                            self.selected_model_ids.discard(model_id)
                            self.models_tree.item(item, tags=("model",))
                        else:
                            self.selected_model_ids.add(model_id)
                            self.models_tree.item(item, tags=("model", "selected"))
                        self.update_selected_view()

    def on_selected_tree_click(self, event):
        item = self.selected_tree.identify_row(event.y)
        if item:
            model_id = self.selected_tree.item(item, "text")
            self.selected_model_ids.discard(model_id)
            self.update_selected_view()
            self.refresh_model_view()

    def setup_languages_tab(self):
        ctk.CTkLabel(self.tab_languages, text="Select languages to appear in dropdowns:").pack(pady=10, padx=10, anchor="w")
        
        self.languages_scroll = ctk.CTkScrollableFrame(self.tab_languages)
        self.languages_scroll.pack(fill="both", expand=True, padx=10, pady=10)

        all_languages = [
            "Arabic", "Bengali", "Brazilian Portuguese", "Chinese", "Dutch", "English", 
            "English (US)", "English (UK)", "French", "German", "Hindi", "Indonesian", 
            "Italian", "Japanese", "Korean", "Polish", "Portuguese", "Russian", 
            "Spanish", "Spanish (ES)", "Spanish (Latam)", "Turkish", "Vietnamese"
        ]
        all_languages.sort()
        
        current_langs = set(self.config_manager.get("available_languages"))
        self.lang_checkboxes = []
        
        for lang in all_languages:
            var = ctk.StringVar(value=lang if lang in current_langs else "")
            cb = ctk.CTkCheckBox(self.languages_scroll, text=lang, variable=var, onvalue=lang, offvalue="")
            cb.pack(anchor="w", pady=2)
            if lang in current_langs:
                cb.select()
            self.lang_checkboxes.append(cb)

    def fetch_models(self):
        api_key = self.api_key_entry.get()
        if not api_key: return 
        
        self.fetch_btn.configure(state="disabled", text="Fetching...")
        
        def _fetch():
            client = OpenRouterClient(api_key)
            models = client.get_available_models()
            if models:
                self.config_manager.set("cached_models", models)
                self.all_models = models
                self.after(0, self.refresh_model_view)
            self.after(0, lambda: self.fetch_btn.configure(state="normal", text="Refresh API"))
            
        threading.Thread(target=_fetch, daemon=True).start()

    def on_search_change(self, *args):
        self.refresh_model_view()

    def expand_all(self):
        for item in self.models_tree.get_children():
            self.models_tree.item(item, open=True)

    def collapse_all(self):
        for item in self.models_tree.get_children():
            self.models_tree.item(item, open=False)

    def update_sort_indicators(self):
        # Reset all headings
        headers = {
            "#0": "Provider/Model",
            "Name": "Name",
            "Prompt": "$/M Prompt"
        }
        
        for col, text in headers.items():
            if col == self.sort_col:
                arrow = "▼" if self.sort_reverse else "▲"
                self.models_tree.heading(col, text=f"{text} {arrow}")
            else:
                self.models_tree.heading(col, text=text)

    def refresh_model_view(self, *args):
        self.update_sort_indicators()
        
        # Clear tree
        for item in self.models_tree.get_children():
            self.models_tree.delete(item)

        # Filter
        search_term = self.search_var.get().lower()
        only_free = self.filter_free_var.get()
        
        filtered = []
        for m in self.all_models:
            m_id = m.get("id", "")
            m_name = m.get("name", "")
            
            # Pricing check
            is_free = False
            try:
                p = m.get("pricing", {})
                price_prompt = float(p.get("prompt", 0))
                price_completion = float(p.get("completion", 0))
                if price_prompt == 0 and price_completion == 0:
                    is_free = True
            except:
                pass
            
            # Filter Logic
            if only_free and not is_free:
                continue
            if search_term and search_term not in m_id.lower() and search_term not in m_name.lower():
                continue
                
            filtered.append(m)

        # Render Groups or Flat List
        if self.sort_col == "#0": # Provider/Model (Grouped)
            # Group by Provider
            grouped = {}
            for m in filtered:
                m_id = m.get("id", "")
                provider = m_id.split("/")[0] if "/" in m_id else "Other"
                if provider not in grouped:
                    grouped[provider] = []
                grouped[provider].append(m)

            for provider in sorted(grouped.keys(), reverse=self.sort_reverse):
                provider_item = self.models_tree.insert("", "end", text=provider, open=True, tags=("provider",))
                
                # Sort models within provider (always alphabetical by ID for consistency within group)
                models_list = grouped[provider]
                models_list.sort(key=lambda x: x.get("id", "").lower())

                for m in models_list:
                    m_id = m.get("id", "")
                    m_name = m.get("name", "")
                    
                    try:
                        p = m.get("pricing", {})
                        price_prompt = float(p.get("prompt", 0)) * 1000000
                    except:
                        price_prompt = 0.0
                    
                    tags = ("model", "selected") if m_id in self.selected_model_ids else ("model",)
                    
                    # ID in tree column (#0), Name in Name column
                    self.models_tree.insert(provider_item, "end", text=m_id, 
                                           values=(m_name, f"${price_prompt:.4f}"),
                                           tags=tags)
        else: # Flat List (Sorted by Name or Price)
            # Sort the flat list
            def get_sort_key(m):
                if self.sort_col == "Name":
                    return m.get("name", "").lower()
                elif self.sort_col == "Prompt":
                    try:
                        return float(m.get("pricing", {}).get("prompt", 0))
                    except:
                        return 0.0
                return m.get("id", "")

            filtered.sort(key=get_sort_key, reverse=self.sort_reverse)
            
            for m in filtered:
                m_id = m.get("id", "")
                m_name = m.get("name", "")
                
                try:
                    p = m.get("pricing", {})
                    price_prompt = float(p.get("prompt", 0)) * 1000000
                except:
                    price_prompt = 0.0
                
                tags = ("model", "selected") if m_id in self.selected_model_ids else ("model",)
                
                # In flat view, we show the full ID in the first column, but no parent
                self.models_tree.insert("", "end", text=m_id, 
                                       values=(m_name, f"${price_prompt:.4f}"),
                                       tags=tags) 
        # Enable/Disable Expand/Collapse based on view
        if self.sort_col == "#0":
            self.expand_btn.configure(state="normal")
            self.collapse_btn.configure(state="normal")
        else:
            self.expand_btn.configure(state="disabled")
            self.collapse_btn.configure(state="disabled")

    def update_selected_view(self):
        for item in self.selected_tree.get_children():
            self.selected_tree.delete(item)

        for m_id in sorted(list(self.selected_model_ids)):
            # Find model in all_models
            model = next((m for m in self.all_models if m.get("id") == m_id), None)
            if model:
                try:
                    p = model.get("pricing", {})
                    price_prompt = float(p.get("prompt", 0)) * 1000000
                    price_completion = float(p.get("completion", 0)) * 1000000
                except:
                    price_prompt = 0.0
                    price_completion = 0.0
                
                self.selected_tree.insert("", "end", text=m_id, 
                                         values=(f"${price_prompt:.4f}",))

    def save_settings(self):
        # General
        self.config_manager.set("api_key", self.api_key_entry.get())
        self.config_manager.set("enter_behavior", self.enter_var.get())
        self.config_manager.set("auto_copy", self.auto_copy_var.get())
        self.config_manager.set("real_time_translation", self.realtime_var.get())
        self.config_manager.set("font_family", self.font_family_var.get())
        try:
            self.config_manager.set("font_size", int(self.font_size_var.get()))
        except:
            pass
        self.config_manager.set("input_text_color", self.input_color_picker.get())
        self.config_manager.set("output_text_color", self.output_color_picker.get())

        # Models
        self.config_manager.set("available_models", list(self.selected_model_ids))
        
        # Languages
        selected_langs = []
        for cb in self.lang_checkboxes:
            if cb.get():
                selected_langs.append(cb.get())
        if not selected_langs: selected_langs = ["English"]
        self.config_manager.set("available_languages", selected_langs)
        
        self.on_close()
