/**
 * Resolve OpenRouter `~author/family-latest` aliases to concrete model slugs.
 * @see https://openrouter.ai/docs/guides/routing/routers/latest-resolution
 *
 * Tilde aliases have no endpoint performance data; OpenRouter reports pricing/context
 * on the alias row for the model it currently resolves to. We match catalog rows on
 * those fields and pick the newest `created` concrete model.
 */

function pricingKey(pricing) {
  if (!pricing || typeof pricing !== "object") return null;
  const prompt = parseFloat(pricing.prompt);
  const completion = parseFloat(pricing.completion);
  if (!Number.isFinite(prompt) || !Number.isFinite(completion)) return null;
  return `${prompt}:${completion}`;
}

/**
 * @param {string} pathPart - e.g. `~anthropic/claude-sonnet-latest` (no `openrouter/` prefix)
 */
function isOpenRouterLatestAlias(pathPart) {
  const s = String(pathPart || "").trim();
  return s.startsWith("~") && s.includes("/") && s.endsWith("-latest");
}

/**
 * @param {string} aliasPathPart
 * @param {Array<{ id?: string, pricing?: object, context_length?: number, created?: number }>} catalogRows
 * @returns {string | null} Concrete model slug (no `openrouter/` prefix), or null if unresolved.
 */
function resolveOpenRouterLatestAlias(aliasPathPart, catalogRows) {
  const aliasId = String(aliasPathPart || "").trim();
  if (!isOpenRouterLatestAlias(aliasId)) return null;
  if (!Array.isArray(catalogRows) || catalogRows.length === 0) return null;

  const aliasRow = catalogRows.find((row) => row?.id === aliasId);
  if (!aliasRow) return null;

  const aliasPricing = pricingKey(aliasRow.pricing);
  const aliasContext = aliasRow.context_length;

  /** @type {Array<{ id: string, created: number }>} */
  const candidates = [];
  for (const row of catalogRows) {
    const id = row?.id;
    if (typeof id !== "string" || !id || id.startsWith("~")) continue;
    if (pricingKey(row.pricing) !== aliasPricing) continue;
    if (aliasContext != null && row.context_length !== aliasContext) continue;
    candidates.push({ id, created: Number(row.created) || 0 });
  }

  if (!candidates.length) return null;
  candidates.sort((a, b) => b.created - a.created);
  return candidates[0].id;
}

module.exports = {
  isOpenRouterLatestAlias,
  resolveOpenRouterLatestAlias,
};
