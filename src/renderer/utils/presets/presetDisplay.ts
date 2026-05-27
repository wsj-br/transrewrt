import type { Preset, PresetLocaleStrings } from "./presetsTypes";

function pickLocaleString(map: PresetLocaleStrings | undefined, key: string): string | undefined {
  if (!map || typeof map !== "object") return undefined;
  const k = String(key || "").trim();
  if (!k) return undefined;
  if (typeof map[k] === "string" && map[k].trim()) return map[k];
  const lower = k.toLowerCase();
  for (const [code, value] of Object.entries(map)) {
    if (code.toLowerCase() === lower && typeof value === "string" && value.trim()) return value;
  }
  return undefined;
}

/**
 * @param uiLocale - Selected UI locale (e.g. i18n.language)
 * @param sourceLocale - Locale of the canonical `name` / `description` strings in the catalog
 */
export function presetDisplayName(preset: Preset, uiLocale: string, sourceLocale: string): string {
  return (
    pickLocaleString(preset.translated_name, uiLocale) ??
    pickLocaleString(preset.translated_name, sourceLocale) ??
    preset.name ??
    preset.id
  );
}

export function presetDisplayDescription(preset: Preset, uiLocale: string, sourceLocale: string): string {
  return (
    pickLocaleString(preset.translated_description, uiLocale) ??
    pickLocaleString(preset.translated_description, sourceLocale) ??
    preset.description ??
    ""
  );
}
