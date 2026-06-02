/**
 * Appearance font presets for Settings → General → Font family.
 * Linux clients (Electron or browser) use distro-common names; Windows/macOS keep the original list.
 */

const HEADER_SANS = { type: "header", value: "__sans__", label: "- Sans-serif -" };
const HEADER_SERIF = { type: "header", value: "__serif__", label: "- Serif -" };
const HEADER_MONO = { type: "header", value: "__mono__", label: "- Monospace -" };

/** @type {{ type: string, value: string, label: string }[]} */
const FONT_OPTIONS_DEFAULT = [
  HEADER_SANS,
  { type: "font", value: "system-ui", label: "system-ui" },
  { type: "font", value: "Segoe UI", label: "Segoe UI" },
  { type: "font", value: "Verdana", label: "Verdana" },
  HEADER_SERIF,
  { type: "font", value: "Georgia", label: "Georgia" },
  { type: "font", value: "Times New Roman", label: "Times New Roman" },
  { type: "font", value: "Cambria", label: "Cambria" },
  HEADER_MONO,
  { type: "font", value: "ui-monospace", label: "ui-monospace" },
  { type: "font", value: "Consolas", label: "Consolas" },
  // Menlo is macOS-native; on Windows web it usually substitutes to the same face as Consolas / ui-monospace.
  { type: "font", value: "Courier New", label: "Courier New" },
];

/** @type {{ type: string, value: string, label: string }[]} */
const FONT_OPTIONS_LINUX = [
  HEADER_SANS,
  { type: "font", value: "system-ui", label: "system-ui" },
  { type: "font", value: "Cantarell", label: "Cantarell" },
  { type: "font", value: "Ubuntu", label: "Ubuntu" },
  { type: "font", value: "Noto Sans", label: "Noto Sans" },
  { type: "font", value: "DejaVu Sans", label: "DejaVu Sans" },
  { type: "font", value: "Liberation Sans", label: "Liberation Sans" },
  HEADER_SERIF,
  { type: "font", value: "Noto Serif", label: "Noto Serif" },
  { type: "font", value: "Liberation Serif", label: "Liberation Serif" },
  { type: "font", value: "DejaVu Serif", label: "DejaVu Serif" },
  { type: "font", value: "Times New Roman", label: "Times New Roman" },
  HEADER_MONO,
  { type: "font", value: "ui-monospace", label: "ui-monospace" },
  { type: "font", value: "DejaVu Sans Mono", label: "DejaVu Sans Mono" },
  { type: "font", value: "Liberation Mono", label: "Liberation Mono" },
  { type: "font", value: "Noto Sans Mono", label: "Noto Sans Mono" },
  { type: "font", value: "Source Code Pro", label: "Source Code Pro" },
];

const SERIF_PRESETS = new Set([
  "Georgia",
  "Times New Roman",
  "Cambria",
  "Noto Serif",
  "Liberation Serif",
  "DejaVu Serif",
]);

const MONO_PRESETS = new Set([
  "ui-monospace",
  "Consolas",
  "Menlo",
  "Courier New",
  "DejaVu Sans Mono",
  "Liberation Mono",
  "Noto Sans Mono",
  "Source Code Pro",
]);

/** Full CSS stacks for presets where a simple `name, monospace` dupes another option (e.g. Menlo→Consolas on Windows web). */
const MONO_FAMILY_STACK_CSS = {
  Menlo: 'Menlo, "Courier New", Courier, monospace',
  "Courier New": '"Courier New", Courier, monospace',
};

function quoteFontFamilyToken(name) {
  const s = String(name).trim();
  if (!s) return "";
  if (/^[a-zA-Z0-9-]+$/.test(s)) return s;
  return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

/** Desktop Linux browser: same fontconfig reality as Electron on Linux (no Segoe/Consolas/Menlo by default). */
function isLikelyDesktopLinuxBrowser() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  if (/Android/i.test(ua)) return false;
  if (/Linux/i.test(ua)) return true;
  const plat = navigator.platform || "";
  return /^Linux/i.test(plat);
}

/**
 * @param {{ platform?: string, isElectron?: boolean }} opts
 * @returns {{ options: { type: string, value: string, label: string }[], defaultFont: string }}
 */
export function getAppearanceFontOptions(
  opts: { platform?: string; isElectron?: boolean } = {},
) {
  const { platform, isElectron } = opts;
  const useLinuxFonts =
    (isElectron && platform === "linux") || (!isElectron && isLikelyDesktopLinuxBrowser());
  if (useLinuxFonts) {
    return { options: FONT_OPTIONS_LINUX, defaultFont: "system-ui" };
  }
  return { options: FONT_OPTIONS_DEFAULT, defaultFont: "Verdana" };
}

/**
 * CSS font-family stack with a generic fallback (sans-serif / serif / monospace).
 * Unknown preset names still get sans-serif as a safe default.
 * @param {string | undefined | null} family - Stored config value (single family name).
 * @returns {string | undefined}
 */
export function resolveAppearanceFontFamilyCss(family) {
  if (family == null || typeof family !== "string") return undefined;
  const name = family.trim();
  if (!name) return undefined;

  if (MONO_FAMILY_STACK_CSS[name]) {
    return MONO_FAMILY_STACK_CSS[name];
  }

  let generic = "sans-serif";
  if (SERIF_PRESETS.has(name)) generic = "serif";
  else if (MONO_PRESETS.has(name)) generic = "monospace";

  const quoted = quoteFontFamilyToken(name);
  if (!quoted) return undefined;
  return `${quoted}, ${generic}`;
}
