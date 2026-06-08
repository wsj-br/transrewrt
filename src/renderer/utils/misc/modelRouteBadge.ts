import { EASY_PROVIDER_LABEL_KEYS } from "../presets/easyProviderConstants";

type RouteBadgeColor = "brand" | "informative" | "success" | "warning" | "error";

const KNOWN_ROUTE_ENGINES = new Set(Object.keys(EASY_PROVIDER_LABEL_KEYS));

/**
 * Route badge for model ids (Settings → Models and header model selector).
 * Shows the API route provider (OpenRouter, Anthropic, custom name, …), not "direct".
 * @param {string} modelId
 * @param {(key: string) => string} t - i18n t()
 * @returns {{ text: string, color: RouteBadgeColor }}
 */
export function modelRouteBadgeProps(
  modelId: string,
  t: (key: string) => string,
): { text: string; color: RouteBadgeColor } {
  const id = modelId || "";
  if (id.startsWith("openrouter/")) {
    return { text: "openrouter", color: "informative" };
  }

  const engine = id.split("/")[0] || "";
  const engineLower = engine.toLowerCase();

  if (engineLower === "custom") {
    return { text: t("Custom provider"), color: "brand" };
  }

  if (KNOWN_ROUTE_ENGINES.has(engineLower)) {
    const labelKey =
      EASY_PROVIDER_LABEL_KEYS[
        engineLower as keyof typeof EASY_PROVIDER_LABEL_KEYS
      ];
    return { text: t(labelKey), color: "brand" };
  }

  if (engine) {
    return { text: engine, color: "brand" };
  }

  return { text: t("Custom provider"), color: "brand" };
}
