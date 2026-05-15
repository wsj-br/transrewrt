import type { Skill, SkillLocaleStrings } from "./skillsTypes";

function pickLocaleString(map: SkillLocaleStrings | undefined, key: string): string | undefined {
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
export function skillDisplayName(skill: Skill, uiLocale: string, sourceLocale: string): string {
  return (
    pickLocaleString(skill.translated_name, uiLocale) ??
    pickLocaleString(skill.translated_name, sourceLocale) ??
    skill.name ??
    skill.id
  );
}

export function skillDisplayDescription(skill: Skill, uiLocale: string, sourceLocale: string): string {
  return (
    pickLocaleString(skill.translated_description, uiLocale) ??
    pickLocaleString(skill.translated_description, sourceLocale) ??
    skill.description ??
    ""
  );
}
