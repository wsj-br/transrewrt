/**
 * Model id references in easy-mode presets.json: per-preset slots and top-level fields.
 */

const TOP_LEVEL_PAIRS = [
  ["translation_model", "translation_model_fallback", "translation"],
  ["suggestion_model", "suggestion_model_fallback", "suggestion"],
];

/**
 * @param {object} catalog
 * @param {Array<{ id: string }>} engines
 */
function collectModelRefs(catalog, engines) {
  /** @type {Array<object>} */
  const refs = [];
  const presets = Array.isArray(catalog?.presets) ? catalog.presets : [];
  presets.forEach((preset, si) => {
    const presetId = preset?.id || "";
    const ids = preset?.model_ids && typeof preset.model_ids === "object" ? preset.model_ids : {};
    const fallbackIds =
      preset?.fallback_ids && typeof preset.fallback_ids === "object" ? preset.fallback_ids : {};
    for (const engine of engines) {
      const engineId = engine.id;
      const primary = ids[engineId];
      if (primary && String(primary).trim()) {
        refs.push({
          kind: "preset",
          slot: "primary",
          field: "model_ids",
          presetIndex: si,
          presetId,
          engine: engineId,
          path: `presets[${si}].model_ids.${engineId}`,
          successorOnly: false,
        });
      }
      const fallback = fallbackIds[engineId];
      if (fallback && String(fallback).trim()) {
        refs.push({
          kind: "preset",
          slot: "fallback",
          field: "fallback_ids",
          presetIndex: si,
          presetId,
          engine: engineId,
          path: `presets[${si}].fallback_ids.${engineId}`,
          successorOnly: false,
        });
      }
    }
  });

  for (const [primaryField, fallbackField, presetId] of TOP_LEVEL_PAIRS) {
    const primary = catalog?.[primaryField];
    if (primary && String(primary).trim()) {
      refs.push({
        kind: "toplevel",
        slot: "primary",
        field: primaryField,
        presetIndex: null,
        presetId,
        engine: "openrouter",
        path: primaryField,
        successorOnly: true,
      });
    }
    const fallback = catalog?.[fallbackField];
    if (fallback && String(fallback).trim()) {
      refs.push({
        kind: "toplevel",
        slot: "fallback",
        field: fallbackField,
        presetIndex: null,
        presetId,
        engine: "openrouter",
        path: fallbackField,
        successorOnly: true,
      });
    }
  }

  return refs;
}

function getModelValue(catalog, ref) {
  if (!ref) return null;
  if (ref.kind === "toplevel") return catalog?.[ref.field] ?? null;
  const preset = catalog?.presets?.[ref.presetIndex];
  return preset?.[ref.field]?.[ref.engine] ?? null;
}

function setModelValue(catalog, ref, value) {
  if (!ref) return;
  if (ref.kind === "toplevel") {
    catalog[ref.field] = value;
    return;
  }
  const preset = catalog?.presets?.[ref.presetIndex];
  if (!preset) return;
  if (!preset[ref.field] || typeof preset[ref.field] !== "object") preset[ref.field] = {};
  preset[ref.field][ref.engine] = value;
}

/**
 * @param {object[]} refs
 * @returns {Map<string, object[]>}
 */
function groupRefsByPair(refs) {
  /** @type {Map<string, object[]>} */
  const groups = new Map();
  for (const ref of refs) {
    const key = `${ref.kind}:${ref.presetId}:${ref.engine}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(ref);
  }
  return groups;
}

module.exports = {
  TOP_LEVEL_PAIRS,
  collectModelRefs,
  getModelValue,
  setModelValue,
  groupRefsByPair,
};
