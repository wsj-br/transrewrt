/**
 * Model list entries from the LLM API include pricingKnown when supported.
 * Legacy payloads without the flag: treat as "known" only if a non-zero rate is present
 * (so 0+0 without the flag is treated as unknown, not free).
 */
export function isPricingKnown(model) {
  if (model?.pricingKnown === true) return true;
  if (model?.pricingKnown === false) return false;
  const p = parseFloat(model?.pricing?.prompt ?? 0);
  const c = parseFloat(model?.pricing?.completion ?? 0);
  return p > 0 || c > 0;
}

/** True when the API confirmed pricing and both prompt and completion rates are zero. */
export function isConfirmedFreeModel(model) {
  if (!isPricingKnown(model)) return false;
  const p = parseFloat(model?.pricing?.prompt ?? 0);
  const c = parseFloat(model?.pricing?.completion ?? 0);
  return p === 0 && c === 0;
}

/** For cost sorting: unknown pricing sorts after all known finite costs (asc and desc). */
export function modelCostSortValue(model) {
  return isPricingKnown(model)
    ? parseFloat(model?.pricing?.prompt ?? 0) + parseFloat(model?.pricing?.completion ?? 0)
    : Number.POSITIVE_INFINITY;
}
