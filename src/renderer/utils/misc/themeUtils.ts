export type ThemePreference = "light" | "dark" | "system";

/** OS dark preference — Electron nativeTheme when available, else prefers-color-scheme. */
export function resolveSystemPrefersDark(): boolean {
  if (typeof window === "undefined") return false;
  const api = (
    window as Window & { electronAPI?: { getSystemPrefersDark?: () => boolean } }
  ).electronAPI;
  if (typeof api?.getSystemPrefersDark === "function") {
    try {
      return api.getSystemPrefersDark();
    } catch {
      /* fall through to matchMedia */
    }
  }
  if (typeof window.matchMedia === "function") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  return false;
}

export function applyBodyThemeClass(theme: "light" | "dark"): void {
  document.body.className = theme;
}

export function applySystemBodyTheme(): void {
  applyBodyThemeClass(resolveSystemPrefersDark() ? "dark" : "light");
}

/** Apply saved theme or follow OS; returns cleanup when listening for OS changes. */
export function applyConfiguredTheme(theme: ThemePreference): (() => void) | void {
  if (theme !== "system") {
    applyBodyThemeClass(theme);
    return;
  }
  applySystemBodyTheme();
  if (typeof window.matchMedia !== "function") return;
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const onChange = () => applySystemBodyTheme();
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}
