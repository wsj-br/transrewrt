/**
 * Load skills catalog (Electron IPC or web GET /api/skills).
 */

import type { Skill, SkillsFile } from "./skillsTypes";
import webAPI from "../api/webApiClient";

export type SkillsRemoteSyncResult = {
  updated?: boolean;
  skipped?: boolean;
  reason?: string;
  version?: string;
  updated_at?: string;
  error?: string;
};

function isLocaleStringRecord(v: unknown): v is Record<string, string> {
  if (v === null || typeof v !== "object" || Array.isArray(v)) return false;
  return Object.values(v as Record<string, unknown>).every((x) => typeof x === "string");
}

function normalizeSkill(s: unknown): Skill | null {
  if (!s || typeof s !== "object") return null;
  const o = s as Record<string, unknown>;
  if (typeof o.id !== "string" || typeof o.name !== "string") return null;
  const modelIdsRaw = o.model_ids;
  let model_ids =
    modelIdsRaw && typeof modelIdsRaw === "object" && !Array.isArray(modelIdsRaw)
      ? Object.fromEntries(
          Object.entries(modelIdsRaw as Record<string, unknown>).filter(
            ([, v]) => typeof v === "string" && String(v).trim(),
          ),
        )
      : undefined;
  const legacyModelId = typeof o.model_id === "string" ? o.model_id.trim() : "";
  if (legacyModelId) {
    if (!model_ids) model_ids = {};
    if (!model_ids.openrouter) model_ids.openrouter = legacyModelId;
  }
  const out: Skill = {
    id: o.id,
    name: o.name,
    description: typeof o.description === "string" ? o.description : "",
    prompt_hint: typeof o.prompt_hint === "string" ? o.prompt_hint : "",
    ...(model_ids && Object.keys(model_ids).length ? { model_ids } : {}),
  };
  if (isLocaleStringRecord(o.translated_name)) {
    out.translated_name = o.translated_name;
  }
  if (isLocaleStringRecord(o.translated_description)) {
    out.translated_description = o.translated_description;
  }
  return out;
}

function normalizeSkillsFile(raw: unknown): SkillsFile {
  if (!raw || typeof raw !== "object") {
    return { version: "0.0.0", updated_at: "", skills: [] };
  }
  const o = raw as Record<string, unknown>;
  const skills = Array.isArray(o.skills) ? o.skills : [];
  return {
    ...(typeof o.$schema === "string" ? { $schema: o.$schema } : {}),
    version: typeof o.version === "string" ? o.version : "0.0.0",
    updated_at: typeof o.updated_at === "string" ? o.updated_at : "",
    skills: skills.map(normalizeSkill).filter((x): x is Skill => x != null),
  };
}

/** Load merged skills (user file or server file, else bundled defaults). */
export async function loadSkillsFile(): Promise<SkillsFile> {
  try {
    if (typeof window !== "undefined" && window.electronAPI?.readSkills) {
      const data = await window.electronAPI.readSkills();
      return normalizeSkillsFile(data);
    }
    const data = await webAPI.readSkills();
    return normalizeSkillsFile(data);
  } catch {
    return { version: "0.0.0", updated_at: "", skills: [] };
  }
}

/** Fetch remote catalog when due (or `force`); Electron IPC or web POST /api/skills/sync. */
export async function syncSkillsFromRemote(
  options: { force?: boolean } = {},
): Promise<SkillsRemoteSyncResult> {
  if (typeof window !== "undefined" && window.electronAPI?.updateSkillsFromRemote) {
    return window.electronAPI.updateSkillsFromRemote(options);
  }
  if (webAPI.syncSkillsFromRemote) {
    return webAPI.syncSkillsFromRemote(options);
  }
  return { skipped: true };
}

/** @deprecated Use syncSkillsFromRemote */
export async function updateSkillsFromRemoteElectron(): Promise<void> {
  await syncSkillsFromRemote();
}
