/** Engine ids aligned with `src/shared/llm` ENGINE_IDS (excluding ollama for cloud preset maps). */

export const EASY_CLOUD_ENGINE_IDS = [
  "openrouter",
  "openai",
  "anthropic",
  "google",
  "deepseek",
  "groq",
  "mistralai",
  "xai",
  "cerebras",
] as const;

export type EasyCloudEngineId = (typeof EASY_CLOUD_ENGINE_IDS)[number];

export const EASY_ENGINE_IDS = [...EASY_CLOUD_ENGINE_IDS, "ollama"] as const;

export type EasyEngineId = (typeof EASY_ENGINE_IDS)[number];

/** Config / env key suffix → engine id (Electron `*_configured` flags). */
export const CONFIG_KEY_TO_EASY_ENGINE: Record<string, EasyEngineId> = {
  openrouter_api_key: "openrouter",
  openai_api_key: "openai",
  anthropic_api_key: "anthropic",
  google_api_key: "google",
  deepseek_api_key: "deepseek",
  groq_api_key: "groq",
  mistralai_api_key: "mistralai",
  xai_api_key: "xai",
  cerebras_api_key: "cerebras",
  ollama_base_url: "ollama",
};

export const EASY_PROVIDER_LABEL_KEYS: Record<EasyEngineId, string> = {
  openrouter: "OpenRouter",
  openai: "OpenAI",
  anthropic: "Anthropic",
  google: "Google Gemini",
  deepseek: "DeepSeek",
  groq: "Groq",
  mistralai: "Mistral",
  xai: "xAI",
  cerebras: "Cerebras",
  ollama: "Ollama",
};

/** Default prompt when Easy mode uses Ollama (no per-preset tier). */
export const EASY_OLLAMA_DEFAULT_PROMPT_HINT =
  "Be concise and direct. Follow the user's instructions faithfully. Do not add explanations, commentary, or alternatives unless explicitly requested.";

export type ExperienceMode = "easy" | "advanced";

/** UI experience mode: only `"advanced"` selects Advanced; anything else is Easy. */
export function resolveExperienceMode(mode: string | undefined): ExperienceMode {
  return mode === "advanced" ? "advanced" : "easy";
}
