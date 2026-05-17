/**
 * Types for skills.json (Easy mode). Canonical file: `easy-mode-config/skills.json`.
 */

export type SkillLocaleStrings = Record<string, string>;

export interface Skill {
  id: string;
  name: string;
  description: string;
  /** Cloud provider engine id → canonical model id (no `ollama`). */
  model_ids?: Record<string, string>;
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
  /** Dev skills editor: primary OpenRouter model for AI Suggestion. Ignored by `normalizeSkillsFile`. */
  suggestion_model?: string;
  /** Dev skills editor: retry model when AI Suggestion primary fails. Ignored by `normalizeSkillsFile`. */
  suggestion_model_fallback?: string;
}
