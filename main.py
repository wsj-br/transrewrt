import customtkinter as ctk
import tkinter as tk
import pyperclip
import threading
import time
from config_manager import ConfigManager
from api_client import OpenRouterClient
from ui_components import SettingsDialog

ctk.set_appearance_mode("System")
ctk.set_default_color_theme("blue")

class App(ctk.CTk):
    def __init__(self):
        super().__init__()

        self.config_manager = ConfigManager()
        self.title("Translator & Rewriter")
        
        # Load geometry
        geom = self.config_manager.get("window_geometry")
        if geom:
            self.geometry(geom)
        else:
            self.geometry("1000x700")

        self.grid_columnconfigure(0, weight=1)
        self.grid_rowconfigure(2, weight=1) 

        self.create_header()
        self.create_mode_selector()
        self.create_work_area()
        
        # Timer state
        self.timer_running = False
        self.start_time = 0
        
        # Debounce for real-time
        self.debounce_timer = None
        
        # Last API response for cost tracking
        self.last_response = None

        # Load initial state
        self.update_config_dependent_ui()
        self.apply_appearance_settings()
        
        # Bind close event
        self.protocol("WM_DELETE_WINDOW", self.on_close)

    def on_close(self):
        # Save geometry
        self.config_manager.set("window_geometry", self.geometry())
        self.destroy()

    def create_header(self):
        self.header_frame = ctk.CTkFrame(self, corner_radius=0, height=60)
        self.header_frame.grid(row=0, column=0, sticky="ew", padx=0, pady=0)
        self.header_frame.grid_propagate(False)
        
        self.title_label = ctk.CTkLabel(self.header_frame, text="Translator & Rewriter", font=ctk.CTkFont(size=20, weight="bold"))
        self.title_label.pack(side="left", padx=20, pady=10)

        self.settings_btn = ctk.CTkButton(self.header_frame, text="⚙️", width=40, command=self.open_settings)
        self.settings_btn.pack(side="right", padx=10)

        self.model_var = ctk.StringVar(value="Select Model")
        self.model_dropdown = ctk.CTkOptionMenu(self.header_frame, variable=self.model_var, values=[])
        self.model_dropdown.pack(side="right", padx=10)
        
        ctk.CTkLabel(self.header_frame, text="Model:").pack(side="right", padx=5)

    def create_mode_selector(self):
        # Compact mode selector
        mode_frame = ctk.CTkFrame(self, fg_color="transparent", height=40)
        mode_frame.grid(row=1, column=0, sticky="ew", padx=20, pady=(5, 0))
        mode_frame.grid_propagate(False)
        
        self.mode_var = ctk.StringVar(value="Translate")
        
        self.translate_btn = ctk.CTkButton(mode_frame, text="Translate", width=100, command=lambda: self.set_mode("Translate"))
        self.translate_btn.pack(side="left", padx=5)
        
        self.rewrite_btn = ctk.CTkButton(mode_frame, text="Rewrite", width=100, fg_color="gray", command=lambda: self.set_mode("Rewrite"))
        self.rewrite_btn.pack(side="left", padx=5)

    def set_mode(self, mode):
        self.mode_var.set(mode)
        if mode == "Translate":
            self.translate_btn.configure(fg_color=("gray75", "gray25"))
            self.rewrite_btn.configure(fg_color="gray")
            self.source_lang_dropdown.pack(side="left")
            self.style_dropdown.pack_forget()
            self.target_lang_dropdown.pack(side="right")
            self.run_btn.configure(text="Translate")
        else:
            self.translate_btn.configure(fg_color="gray")
            self.rewrite_btn.configure(fg_color=("gray75", "gray25"))
            self.source_lang_dropdown.pack_forget()
            self.style_dropdown.pack(side="left")
            self.target_lang_dropdown.pack_forget()
            self.run_btn.configure(text="Rewrite")

    def create_work_area(self):
        # Container for PanedWindow
        container = ctk.CTkFrame(self, fg_color="transparent")
        container.grid(row=2, column=0, sticky="nsew", padx=20, pady=(5, 10))

        self.paned_window = tk.PanedWindow(container, orient=tk.HORIZONTAL, sashwidth=6, bg="#2b2b2b", bd=0)
        self.paned_window.pack(fill="both", expand=True)

        # Left Panel (Input)
        self.left_panel = ctk.CTkFrame(self.paned_window)
        self.paned_window.add(self.left_panel, minsize=300)

        # Right Panel (Output)
        self.right_panel = ctk.CTkFrame(self.paned_window)
        self.paned_window.add(self.right_panel, minsize=300)
        
        # Set equal initial sizes
        self.after(100, lambda: self.paned_window.sash_place(0, self.paned_window.winfo_width() // 2, 0))

        self.setup_left_panel()
        self.setup_right_panel()

    def setup_left_panel(self):
        self.left_panel.grid_columnconfigure(0, weight=1)
        self.left_panel.grid_rowconfigure(1, weight=1)

        # Controls (Dynamic based on mode)
        self.left_controls = ctk.CTkFrame(self.left_panel, fg_color="transparent")
        self.left_controls.grid(row=0, column=0, sticky="ew", pady=5, padx=5)
        
        # Translate Mode Controls
        self.source_lang_var = ctk.StringVar(value="Detect Language")
        self.source_lang_dropdown = ctk.CTkOptionMenu(self.left_controls, variable=self.source_lang_var, values=["Detect Language"])
        
        # Rewrite Mode Controls
        self.style_var = ctk.StringVar(value="Check Spelling & Grammar")
        styles = ["Check Spelling & Grammar", "Improve Clarity", "Make Formal", "Make Informal", "Shorten", "Expand", "Make Technical"]
        self.style_dropdown = ctk.CTkOptionMenu(self.left_controls, variable=self.style_var, values=styles, width=200)

        # Input Box
        self.input_box = ctk.CTkTextbox(self.left_panel, wrap="word")
        self.input_box.grid(row=1, column=0, sticky="nsew", padx=5, pady=5)
        self.input_box.bind("<KeyRelease>", self.on_input_change)
        self.input_box.bind("<Return>", self.on_enter_pressed)
        self.input_box.bind("<Shift-Return>", self.on_shift_enter_pressed)

        # Bottom Bar (Stats + Buttons)
        bottom_frame = ctk.CTkFrame(self.left_panel, fg_color="transparent")
        bottom_frame.grid(row=2, column=0, sticky="ew", pady=5, padx=5)
        
        self.input_stats = ctk.CTkLabel(bottom_frame, text="Chars: 0 | Words: 0 | Paragraphs: 0", font=ctk.CTkFont(size=11))
        self.input_stats.pack(side="left")

        ctk.CTkButton(bottom_frame, text="Clear", width=60, fg_color="gray", command=lambda: self.clear_text(self.input_box)).pack(side="right", padx=5)
        ctk.CTkButton(bottom_frame, text="Paste", width=60, command=lambda: self.paste_text(self.input_box)).pack(side="right", padx=5)

    def setup_right_panel(self):
        self.right_panel.grid_columnconfigure(0, weight=1)
        self.right_panel.grid_rowconfigure(1, weight=1)

        # Top Bar (Timer + Target Lang)
        top_frame = ctk.CTkFrame(self.right_panel, fg_color="transparent")
        top_frame.grid(row=0, column=0, sticky="ew", pady=5, padx=5)

        self.timer_label = ctk.CTkLabel(top_frame, text="0.0s", font=ctk.CTkFont(size=12, weight="bold"))
        self.timer_label.pack(side="left", padx=5)

        self.cost_label = ctk.CTkLabel(top_frame, text="", font=ctk.CTkFont(size=12))
        self.cost_label.pack(side="left", padx=10)

        self.target_lang_var = ctk.StringVar(value="Spanish")
        self.target_lang_dropdown = ctk.CTkOptionMenu(top_frame, variable=self.target_lang_var, values=[])

        # Output Box
        self.output_box = ctk.CTkTextbox(self.right_panel, state="disabled", wrap="word")
        self.output_box.grid(row=1, column=0, sticky="nsew", padx=5, pady=5)

        # Bottom Bar (Stats + Cost + Copy + Run)
        bottom_frame = ctk.CTkFrame(self.right_panel, fg_color="transparent")
        bottom_frame.grid(row=2, column=0, sticky="ew", pady=5, padx=5)

        self.output_stats = ctk.CTkLabel(bottom_frame, text="Chars: 0 | Words: 0 | Paragraphs: 0", font=ctk.CTkFont(size=11))
        self.output_stats.pack(side="left")

        self.run_btn = ctk.CTkButton(bottom_frame, text="Translate", width=100, command=self.run_action)
        self.run_btn.pack(side="right", padx=5)
        
        ctk.CTkButton(bottom_frame, text="Copy", width=60, command=lambda: self.copy_text(self.output_box)).pack(side="right", padx=5)

    def open_settings(self):
        dialog = SettingsDialog(self, self.config_manager)
        self.wait_window(dialog)
        self.update_config_dependent_ui()
        self.apply_appearance_settings()

    def update_config_dependent_ui(self):
        # Models
        models = self.config_manager.get("available_models")
        if models:
            self.model_dropdown.configure(values=models)
            last_used = self.config_manager.get("last_used_model")
            if last_used in models:
                self.model_var.set(last_used)
            else:
                self.model_var.set(models[0])
        else:
            self.model_dropdown.configure(values=["No Models Configured"])
            self.model_var.set("No Models Configured")
            
        # Languages
        langs = self.config_manager.get("available_languages")
        self.target_lang_dropdown.configure(values=langs)
        source_langs = ["Detect Language"] + langs
        self.source_lang_dropdown.configure(values=source_langs)

        # Ensure correct controls are shown
        self.set_mode(self.mode_var.get())

    def apply_appearance_settings(self):
        font_family = self.config_manager.get("font_family")
        font_size = self.config_manager.get("font_size")
        input_color = self.config_manager.get("input_text_color")
        output_color = self.config_manager.get("output_text_color")
        
        font = ctk.CTkFont(family=font_family, size=font_size)
        
        self.input_box.configure(font=font, text_color=input_color)
        self.output_box.configure(font=font, text_color=output_color)

    def update_stats(self, text, label):
        chars = len(text)
        words = len(text.split())
        paragraphs = len([p for p in text.split("\n") if p.strip()])
        label.configure(text=f"Chars: {chars} | Words: {words} | Paragraphs: {paragraphs}")

    def on_input_change(self, event=None):
        text = self.input_box.get("1.0", "end-1c")
        self.update_stats(text, self.input_stats)
        
        if self.config_manager.get("real_time_translation"):
            if self.debounce_timer:
                self.debounce_timer.cancel()
            self.debounce_timer = threading.Timer(1.0, self.run_action)
            self.debounce_timer.start()

    def on_enter_pressed(self, event):
        behavior = self.config_manager.get("enter_behavior")
        if behavior == "Translate":
            self.run_action()
            return "break"
        elif behavior == "Newline":
            return # Default
        elif behavior == "Shift-Translate":
            return # Default (Shift-Enter handles it)

    def on_shift_enter_pressed(self, event):
        behavior = self.config_manager.get("enter_behavior")
        if behavior == "Shift-Translate":
            self.run_action()
            return "break"
        return # Default

    def paste_text(self, textbox):
        try:
            text = pyperclip.paste()
            textbox.insert("end", text)
            self.on_input_change()
        except:
            pass

    def copy_text(self, textbox):
        try:
            text = textbox.get("1.0", "end-1c")
            pyperclip.copy(text)
        except:
            pass

    def clear_text(self, textbox):
        textbox.delete("1.0", "end")
        self.on_input_change()

    def run_action(self):
        api_key = self.config_manager.get("api_key")
        if not api_key:
            self.show_error("Error: No API Key configured.")
            return

        model = self.model_var.get()
        if model == "No Models Configured":
            self.show_error("Error: No Model selected.")
            return

        self.config_manager.set("last_used_model", model)
        client = OpenRouterClient(api_key)
        mode = self.mode_var.get()
        
        text = self.input_box.get("1.0", "end-1c")
        if not text.strip(): return

        # UI State
        self.run_btn.configure(state="disabled")
        self.start_time = time.time()
        self.timer_running = True
        self.update_timer()
        
        # Show "processing" message
        self.output_box.configure(state="normal")
        self.output_box.delete("1.0", "end")
        if mode == "Translate":
            self.output_box.insert("end", "Translating...")
        else:
            self.output_box.insert("end", "Rewriting...")
        self.output_box.configure(state="disabled")

        def _run():
            start_run = time.time()
            try:
                if mode == "Translate":
                    target = self.target_lang_var.get()
                    source = self.source_lang_var.get()
                    response = client.translate(text, target, model, source)
                else:
                    style = self.style_var.get()
                    response = client.rewrite(text, style, model)
                
                end_run = time.time()
                duration = end_run - start_run
                
                if isinstance(response, dict) and "content" in response:
                    result = response["content"]
                    usage = response.get("usage", {})
                    prompt_tokens = usage.get("prompt_tokens", 0)
                    completion_tokens = usage.get("completion_tokens", 0)
                    
                    # Calculate Cost
                    cost = 0.0
                    cached_models = self.config_manager.get("cached_models")
                    if cached_models:
                        # Find model pricing
                        model_data = next((m for m in cached_models if m.get("id") == model), None)
                        if model_data and "pricing" in model_data:
                            p = model_data["pricing"]
                            p_rate = float(p.get("prompt", 0))
                            c_rate = float(p.get("completion", 0))
                            cost = (prompt_tokens * p_rate) + (completion_tokens * c_rate)
                    
                    # Calculate TPS
                    tps = completion_tokens / duration if duration > 0 else 0.0
                    
                else:
                    # Fallback for error string or old format
                    result = response if isinstance(response, str) else str(response)
                    cost = 0.0
                    tps = 0.0
                
            except Exception as e:
                result = f"Error: {str(e)}"
                cost = 0.0
                tps = 0.0
                
            self.after(0, lambda: self.show_result(result, cost, tps))
        
        threading.Thread(target=_run, daemon=True).start()

    def update_timer(self):
        if self.timer_running:
            elapsed = time.time() - self.start_time
            self.timer_label.configure(text=f"{elapsed:.1f}s")
            self.after(100, self.update_timer)

    def show_result(self, result, cost, tps):
        self.timer_running = False
        elapsed = time.time() - self.start_time
        
        self.output_box.configure(state="normal")
        self.output_box.delete("1.0", "end")
        self.output_box.insert("end", result)
        self.output_box.configure(state="disabled")
        self.run_btn.configure(state="normal")
        
        self.update_stats(result, self.output_stats)
        
        # Update cost tracking
        total_cost = self.config_manager.get("total_cost") + cost
        self.config_manager.set("total_cost", total_cost)
        
        # Display cost info
        if tps > 0:
            self.cost_label.configure(text=f"Cost: ${cost:.6f} | TPS: {tps:.1f} | Total: ${total_cost:.6f}")
        else:
            self.cost_label.configure(text=f"Cost: ${cost:.6f} | Total: ${total_cost:.6f}")
        
        if self.config_manager.get("auto_copy"):
            self.copy_text(self.output_box)

    def show_error(self, message):
        self.output_box.configure(state="normal")
        self.output_box.delete("1.0", "end")
        self.output_box.insert("end", message)
        self.output_box.configure(state="disabled")

if __name__ == "__main__":
    app = App()
    app.mainloop()
