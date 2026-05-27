/**
 * Which Easy-mode providers are configured (from settings `*_configured` flags).
 */

import {
  CONFIG_KEY_TO_EASY_ENGINE,
  EASY_ENGINE_IDS,
  type EasyEngineId,
} from "./easyProviderConstants";

type SettingsLike = Record<string, unknown>;

const EASY_ENGINE_SET = new Set<string>(EASY_ENGINE_IDS);

function enginesFromServerList(serverConfiguredEngines: string[] | null | undefined): EasyEngineId[] {
  if (!Array.isArray(serverConfiguredEngines) || serverConfiguredEngines.length === 0) {
    return [];
  }
  const out: EasyEngineId[] = [];
  for (const id of serverConfiguredEngines) {
    const e = String(id || "").trim();
    if (EASY_ENGINE_SET.has(e)) out.push(e as EasyEngineId);
  }
  return out;
}

/**
 * @param settings - client config (`*_configured` flags on Electron)
 * @param serverConfiguredEngines - from `GET /api/status` on web (Docker env keys)
 */
export function listConfiguredEasyEngines(
  settings: SettingsLike,
  serverConfiguredEngines?: string[] | null,
): EasyEngineId[] {
  const fromServer = enginesFromServerList(serverConfiguredEngines);
  if (fromServer.length > 0) return fromServer;

  const out: EasyEngineId[] = [];
  for (const engine of EASY_ENGINE_IDS) {
    const key = Object.entries(CONFIG_KEY_TO_EASY_ENGINE).find(([, e]) => e === engine)?.[0];
    if (!key) continue;
    if (engine === "ollama") {
      const url = settings.ollama_base_url;
      const configured =
        settings.ollama_base_url_configured === true ||
        (typeof url === "string" && url.trim().length > 0);
      if (configured) out.push("ollama");
      continue;
    }
    if (settings[`${key}_configured`] === true) {
      out.push(engine);
    }
  }
  return out;
}

export function pickDefaultEasyProvider(
  settings: SettingsLike,
  serverConfiguredEngines?: string[] | null,
): EasyEngineId | null {
  const configured = listConfiguredEasyEngines(settings, serverConfiguredEngines);
  if (!configured.length) return null;
  const current = settings.easy_provider;
  if (typeof current === "string" && configured.includes(current as EasyEngineId)) {
    return current as EasyEngineId;
  }
  return configured[0];
}
