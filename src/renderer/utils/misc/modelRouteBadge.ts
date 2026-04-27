/**
 * Route badge for model ids (Settings → Models and header model selector).
 * @param {string} modelId
 * @param {(key: string) => string} t - i18n t()
 * @returns {{ text: string, color: 'brand' | 'informative' }}
 */
export function modelRouteBadgeProps(modelId, t) {
  const id = modelId || "";
  if (id.startsWith("openrouter/")) {
    return { text: "openrouter", color: "informative" };
  }
  const engine = id.split("/")[0] || "";
  if (engine === "ollama") {
    return { text: t("local"), color: "informative" };
  }
  return { text: t("direct"), color: "brand" };
}
