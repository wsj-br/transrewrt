/**
 * Easy mode: resolve model + prompt from locked provider and presets catalog (cloud only).
 */

import type { Preset } from "./presetsTypes";
import { canonicalModelIdFromPresetModelId } from "../misc/modelIdUtils";
import type { EasyCloudEngineId, EasyEngineId } from "./easyProviderConstants";
import { EASY_OLLAMA_DEFAULT_PROMPT_HINT } from "./easyProviderConstants";

export function getPresetModelIds(preset: Preset): Record<string, string> {
  if (!preset.model_ids || typeof preset.model_ids !== "object") return {};
  return { ...preset.model_ids };
}

export function getPresetFallbackIds(preset: Preset): Record<string, string> {
  if (!preset.fallback_ids || typeof preset.fallback_ids !== "object") return {};
  return { ...preset.fallback_ids };
}

/** Non-empty `model_ids[provider]` for cloud providers. */
export function presetHasModelForProvider(preset: Preset, provider: EasyCloudEngineId): boolean {
  if (preset.id === "free-router" && provider !== "openrouter") return false;
  const ids = getPresetModelIds(preset);
  const raw = ids[provider];
  return typeof raw === "string" && raw.trim().length > 0;
}

export function filterPresetsForEasyProvider(presets: Preset[], provider: EasyEngineId): Preset[] {
  if (provider === "ollama") return [];
  return presets.filter((s) => presetHasModelForProvider(s, provider));
}

export function resolveCloudPresetModel(
  preset: Preset,
  provider: EasyCloudEngineId,
): { canonicalModelId: string; promptHint: string | null } | null {
  const ids = getPresetModelIds(preset);
  const raw = ids[provider];
  if (!raw || !String(raw).trim()) return null;
  return {
    canonicalModelId: canonicalModelIdFromPresetModelId(String(raw).trim()),
    promptHint: preset.prompt_hint || null,
  };
}

export function resolveCloudPresetFallbackModel(
  preset: Preset,
  provider: EasyCloudEngineId,
): { canonicalModelId: string } | null {
  const ids = getPresetFallbackIds(preset);
  const raw = ids[provider];
  if (!raw || !String(raw).trim()) return null;
  return {
    canonicalModelId: canonicalModelIdFromPresetModelId(String(raw).trim()),
  };
}

export type PresetProviderRow = {
  provider: EasyCloudEngineId;
  mainId: string;
  fallbackId: string | null;
};

/** Providers with API keys and a non-empty preset main model (Advanced → Select from presets). */
export function buildPresetProviderRows(
  preset: Preset,
  configuredEngines: EasyCloudEngineId[],
): PresetProviderRow[] {
  const configured = new Set(configuredEngines);
  const rows: PresetProviderRow[] = [];
  for (const provider of configured) {
    if (!presetHasModelForProvider(preset, provider)) continue;
    const main = resolveCloudPresetModel(preset, provider);
    if (!main) continue;
    const fallback = resolveCloudPresetFallbackModel(preset, provider);
    rows.push({
      provider,
      mainId: main.canonicalModelId,
      fallbackId: fallback?.canonicalModelId ?? null,
    });
  }
  rows.sort((a, b) => a.provider.localeCompare(b.provider));
  return rows;
}

/** Raw preset model ids for a provider row (main + fallback, deduped). */
export function presetProviderRowModelIds(row: PresetProviderRow): string[] {
  const ids = [row.mainId];
  if (row.fallbackId && row.fallbackId !== row.mainId) ids.push(row.fallbackId);
  return ids;
}

export type EasyRuntimeResolution = {
  effectiveModel: string | null;
  fallbackModel: string | null;
  promptHint: string | null;
  fromPresetCatalog: boolean;
};

export function resolveEasyRuntime(params: {
  mode: string | undefined;
  easyProvider: string | undefined;
  easyOllamaModel: string | undefined;
  selectedPresetId: string | null | undefined;
  presets: Preset[];
}): EasyRuntimeResolution {
  const uiMode = params.mode === "advanced" ? "advanced" : "easy";
  if (uiMode === "advanced" || !params.presets.length) {
    return { effectiveModel: null, fallbackModel: null, promptHint: null, fromPresetCatalog: false };
  }

  const provider = (params.easyProvider || "openrouter").trim() as EasyEngineId;

  if (provider === "ollama") {
    const model = (params.easyOllamaModel || "").trim();
    if (!model) {
      return {
        effectiveModel: null,
        fallbackModel: null,
        promptHint: EASY_OLLAMA_DEFAULT_PROMPT_HINT,
        fromPresetCatalog: false,
      };
    }
    return {
      effectiveModel: canonicalModelIdFromPresetModelId(model),
      fallbackModel: null,
      promptHint: EASY_OLLAMA_DEFAULT_PROMPT_HINT,
      fromPresetCatalog: false,
    };
  }

  const cloudProvider = provider as EasyCloudEngineId;
  const available = filterPresetsForEasyProvider(params.presets, cloudProvider);
  const preset =
    available.find((s) => s.id === params.selectedPresetId) ?? available[0];
  if (!preset) {
    return { effectiveModel: null, fallbackModel: null, promptHint: null, fromPresetCatalog: false };
  }

  const resolved = resolveCloudPresetModel(preset, cloudProvider);
  if (!resolved) {
    return { effectiveModel: null, fallbackModel: null, promptHint: null, fromPresetCatalog: true };
  }

  const fallbackResolved = resolveCloudPresetFallbackModel(preset, cloudProvider);

  return {
    effectiveModel: resolved.canonicalModelId,
    fallbackModel: fallbackResolved?.canonicalModelId ?? null,
    promptHint: resolved.promptHint,
    fromPresetCatalog: true,
  };
}
