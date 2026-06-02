/**
 * Load presets catalog (Electron IPC or web GET /api/presets).
 */

import type { Preset, PresetsFile } from "./presetsTypes";
import webAPI from "../api/webApiClient";

export type PresetsRemoteSyncResult = {
  updated?: boolean;
  skipped?: boolean;
  reason?: string;
  version?: string;
  updated_at?: string;
  last_checked_at?: number;
  error?: string;
};

export type PresetsRemoteSyncState = {
  last_checked_at: number;
};

function isLocaleStringRecord(v: unknown): v is Record<string, string> {
  if (v === null || typeof v !== "object" || Array.isArray(v)) return false;
  return Object.values(v as Record<string, unknown>).every((x) => typeof x === "string");
}

function normalizePreset(s: unknown): Preset | null {
  if (!s || typeof s !== "object") return null;
  const o = s as Record<string, unknown>;
  if (typeof o.id !== "string" || typeof o.name !== "string") return null;

  const modelIdsRaw = o.model_ids;
  let model_ids: Record<string, string> | undefined =
    modelIdsRaw && typeof modelIdsRaw === "object" && !Array.isArray(modelIdsRaw)
      ? (Object.fromEntries(
          Object.entries(modelIdsRaw as Record<string, unknown>).filter(
            ([, v]) => typeof v === "string" && String(v).trim(),
          ),
        ) as Record<string, string>)
      : undefined;

  const legacyModelId = typeof o.model_id === "string" ? o.model_id.trim() : "";
  if (legacyModelId) {
    if (!model_ids) model_ids = {};
    if (!model_ids.openrouter) model_ids.openrouter = legacyModelId;
  }

  const fallbackIdsRaw = o.fallback_ids;
  const fallback_ids: Record<string, string> | undefined =
    fallbackIdsRaw && typeof fallbackIdsRaw === "object" && !Array.isArray(fallbackIdsRaw)
      ? (Object.fromEntries(
          Object.entries(fallbackIdsRaw as Record<string, unknown>).filter(
            ([, v]) => typeof v === "string" && String(v).trim(),
          ),
        ) as Record<string, string>)
      : undefined;

  const out: Preset = {
    id: o.id,
    name: o.name,
    description: typeof o.description === "string" ? o.description : "",
    prompt_hint: typeof o.prompt_hint === "string" ? o.prompt_hint : "",
    ...(model_ids && Object.keys(model_ids).length ? { model_ids } : {}),
    ...(fallback_ids && Object.keys(fallback_ids).length ? { fallback_ids } : {}),
  };
  if (isLocaleStringRecord(o.translated_name)) {
    out.translated_name = o.translated_name;
  }
  if (isLocaleStringRecord(o.translated_description)) {
    out.translated_description = o.translated_description;
  }
  return out;
}

function normalizePresetsFile(raw: unknown): PresetsFile {
  if (!raw || typeof raw !== "object") {
    return { version: "0.0.0", updated_at: "", presets: [] };
  }
  const o = raw as Record<string, unknown>;
  const presets = Array.isArray(o.presets) ? o.presets : [];
  return {
    ...(typeof o.$schema === "string" ? { $schema: o.$schema } : {}),
    version: typeof o.version === "string" ? o.version : "0.0.0",
    updated_at: typeof o.updated_at === "string" ? o.updated_at : "",
    presets: presets.map(normalizePreset).filter((x): x is Preset => x != null),
  };
}

/** Load merged presets (user file or server file, else bundled defaults). */
export async function loadPresetsFile(): Promise<PresetsFile> {
  try {
    if (typeof window !== "undefined" && window.electronAPI?.readPresets) {
      const data = await window.electronAPI.readPresets();
      return normalizePresetsFile(data);
    }
    const data = await webAPI.readPresets();
    return normalizePresetsFile(data);
  } catch {
    return { version: "0.0.0", updated_at: "", presets: [] };
  }
}

/** Read last remote catalog check time (epoch ms). */
export async function loadPresetsRemoteSyncState(): Promise<PresetsRemoteSyncState> {
  try {
    if (typeof window !== "undefined" && window.electronAPI?.getPresetsRemoteSyncState) {
      const data = await window.electronAPI.getPresetsRemoteSyncState();
      const ms = Number((data as PresetsRemoteSyncState)?.last_checked_at);
      return { last_checked_at: Number.isFinite(ms) && ms > 0 ? ms : 0 };
    }
    if (webAPI.getPresetsRemoteSyncState) {
      const data = await webAPI.getPresetsRemoteSyncState();
      const ms = Number(data?.last_checked_at);
      return { last_checked_at: Number.isFinite(ms) && ms > 0 ? ms : 0 };
    }
  } catch {
    // ignore
  }
  return { last_checked_at: 0 };
}

/** Fetch remote catalog when due (or `force`); Electron IPC or web POST /api/presets/sync. */
export async function syncPresetsFromRemote(
  options: { force?: boolean } = {},
): Promise<PresetsRemoteSyncResult> {
  if (typeof window !== "undefined" && window.electronAPI?.updatePresetsFromRemote) {
    return window.electronAPI.updatePresetsFromRemote(options);
  }
  if (webAPI.syncPresetsFromRemote) {
    return webAPI.syncPresetsFromRemote(options);
  }
  return { skipped: true };
}

/** @deprecated Use syncPresetsFromRemote */
export async function updatePresetsFromRemoteElectron(): Promise<void> {
  await syncPresetsFromRemote();
}
