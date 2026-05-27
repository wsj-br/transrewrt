/**
 * Types for presets.json (Easy mode). Canonical file: `easy-mode-config/presets.json`.
 */

export type PresetLocaleStrings = Record<string, string>;

export interface Preset {
  id: string;
  name: string;
  description: string;
  /** Cloud provider engine id → canonical model id (no `ollama`). */
  model_ids?: Record<string, string>;
  /**
   * Cloud provider engine id → canonical fallback model id.
   * Used for an automatic one-time retry when the primary model call fails.
   */
  fallback_ids?: Record<string, string>;
  prompt_hint: string;
  /** UI locale code → display name (see presetDisplay). */
  translated_name?: PresetLocaleStrings;
  /** UI locale code → display description. */
  translated_description?: PresetLocaleStrings;
}

export interface PresetsFile {
  $schema?: string;
  version: string;
  updated_at: string;
  presets: Preset[];
  /** Dev presets editor: primary OpenRouter model for “translate missing”. Ignored by `normalizePresetsFile`. */
  translation_model?: string;
  /** Dev presets editor: retry model when the primary fails. Ignored by `normalizePresetsFile`. */
  translation_model_fallback?: string;
  /** Dev presets editor: primary OpenRouter model for AI Suggestion. Ignored by `normalizePresetsFile`. */
  suggestion_model?: string;
  /** Dev presets editor: retry model when AI Suggestion primary fails. Ignored by `normalizePresetsFile`. */
  suggestion_model_fallback?: string;
}
