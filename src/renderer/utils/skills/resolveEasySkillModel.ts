/**
 * Easy mode: resolve model + prompt from locked provider and skills catalog (cloud only).
 */

import type { Skill } from "./skillsTypes";
import { canonicalModelIdFromSkillModelId } from "../misc/modelIdUtils";
import type { EasyCloudEngineId, EasyEngineId } from "./easyProviderConstants";
import { EASY_OLLAMA_DEFAULT_PROMPT_HINT } from "./easyProviderConstants";

export function getSkillModelIds(skill: Skill): Record<string, string> {
  if (!skill.model_ids || typeof skill.model_ids !== "object") return {};
  return { ...skill.model_ids };
}

/** Non-empty `model_ids[provider]` for cloud providers. */
export function skillHasModelForProvider(skill: Skill, provider: EasyCloudEngineId): boolean {
  if (skill.id === "free-router" && provider !== "openrouter") return false;
  const ids = getSkillModelIds(skill);
  const raw = ids[provider];
  return typeof raw === "string" && raw.trim().length > 0;
}

export function filterSkillsForEasyProvider(skills: Skill[], provider: EasyEngineId): Skill[] {
  if (provider === "ollama") return [];
  return skills.filter((s) => skillHasModelForProvider(s, provider));
}

export function resolveCloudSkillModel(
  skill: Skill,
  provider: EasyCloudEngineId,
): { canonicalModelId: string; promptHint: string | null } | null {
  const ids = getSkillModelIds(skill);
  const raw = ids[provider];
  if (!raw || !String(raw).trim()) return null;
  return {
    canonicalModelId: canonicalModelIdFromSkillModelId(String(raw).trim()),
    promptHint: skill.prompt_hint || null,
  };
}

export type EasyRuntimeResolution = {
  effectiveModel: string | null;
  promptHint: string | null;
  fromSkillCatalog: boolean;
};

export function resolveEasyRuntime(params: {
  mode: string | undefined;
  easyProvider: string | undefined;
  easyOllamaModel: string | undefined;
  selectedSkillId: string | null | undefined;
  skills: Skill[];
}): EasyRuntimeResolution {
  const uiMode = params.mode === "advanced" ? "advanced" : "easy";
  if (uiMode === "advanced" || !params.skills.length) {
    return { effectiveModel: null, promptHint: null, fromSkillCatalog: false };
  }

  const provider = (params.easyProvider || "openrouter").trim() as EasyEngineId;

  if (provider === "ollama") {
    const model = (params.easyOllamaModel || "").trim();
    if (!model) {
      return { effectiveModel: null, promptHint: EASY_OLLAMA_DEFAULT_PROMPT_HINT, fromSkillCatalog: false };
    }
    return {
      effectiveModel: canonicalModelIdFromSkillModelId(model),
      promptHint: EASY_OLLAMA_DEFAULT_PROMPT_HINT,
      fromSkillCatalog: false,
    };
  }

  const cloudProvider = provider as EasyCloudEngineId;
  const available = filterSkillsForEasyProvider(params.skills, cloudProvider);
  const skill =
    available.find((s) => s.id === params.selectedSkillId) ?? available[0];
  if (!skill) {
    return { effectiveModel: null, promptHint: null, fromSkillCatalog: false };
  }

  const resolved = resolveCloudSkillModel(skill, cloudProvider);
  if (!resolved) {
    return { effectiveModel: null, promptHint: null, fromSkillCatalog: true };
  }

  return {
    effectiveModel: resolved.canonicalModelId,
    promptHint: resolved.promptHint,
    fromSkillCatalog: true,
  };
}
