/**
 * Types for skills.json (Regular mode). Canonical file: `regular-mode-config/skills.json`.
 */

export type SkillLocaleStrings = Record<string, string>;

export interface Skill {
  id: string;
  name: string;
  description: string;
  model_id: string;
  prompt_hint: string;
  /** UI locale code → display name (see skillDisplay). */
  translated_name?: SkillLocaleStrings;
  /** UI locale code → display description. */
  translated_description?: SkillLocaleStrings;
}

export interface SkillsFile {
  $schema?: string;
  version: string;
  updated_at: string;
  skills: Skill[];
  /** Dev skills editor: primary OpenRouter model for “translate missing”. Ignored by `normalizeSkillsFile`. */
  translation_model?: string;
  /** Dev skills editor: retry model when the primary fails. Ignored by `normalizeSkillsFile`. */
  translation_model_fallback?: string;
}
