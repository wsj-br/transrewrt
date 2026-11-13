/**
 * Types for presets.json (Easy mode). Canonical file: `easy-mode-config/presets.json`.
 */

export type PresetLocaleStrings = Record<string, string>;

/** Ranking policy used by the presets editor and presets-check. Ignored by the running app. */
export interface PresetSuggestionConfig {
  /** `quality` sorts by index, `price` walks the Pareto frontier, `free` keeps zero-cost routes. */
  profile?: "quality" | "price" | "free";
  /** Blended USD per 1M tokens, `(3 × input + output) / 4`. Null or omitted means no cap. */
  max_price?: number | null;
  /** Minimum index gap between the kept primary and the kept fallback. */
  min_delta?: number;
  chrf_weight?: number;
  arena_weight?: number;
  /** Fraction of the best ChrF in the candidate pool. Models below it sort last. */
  quality_floor?: number;
}

export interface Preset {
  id: string;
  name: string;
  description: string;
  /** Editor and presets-check ranking policy. Not used at runtime. */
  suggestion?: PresetSuggestionConfig;
  /** Cloud provider engine id → canonical model id (no `local`). */
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
}
