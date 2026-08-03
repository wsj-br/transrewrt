/**
 * Glossary language wildcards and match helpers (Electron + web).
 * Canonical stored value is English "All Languages" (same pattern as "Detect Language").
 */

const ALL_LANGUAGES = "All Languages";

/**
 * Lower is more specific. Exact pair wins over wildcards when source_text collides.
 * @param {{ source_language?: string, target_language?: string }} term
 * @param {string} sourceLang
 * @param {string} targetLang
 */
function glossaryTermSpecificity(term, sourceLang, targetLang) {
  const srcExact = term.source_language === sourceLang;
  const tgtExact = term.target_language === targetLang;
  if (srcExact && tgtExact) return 0;
  if (srcExact && term.target_language === ALL_LANGUAGES) return 1;
  if (term.source_language === ALL_LANGUAGES && tgtExact) return 2;
  return 3;
}

/**
 * Keep one term per source_text, preferring the most specific language match.
 * @param {Array<{ source_language?: string, target_language?: string, source_text?: string }>} rows
 * @param {string} sourceLang
 * @param {string} targetLang
 */
function preferSpecificGlossaryTerms(rows, sourceLang, targetLang) {
  const list = Array.isArray(rows) ? rows : [];
  const bySourceText = new Map();
  for (const row of list) {
    const key = String(row?.source_text ?? "");
    if (!key) continue;
    const existing = bySourceText.get(key);
    if (
      !existing ||
      glossaryTermSpecificity(row, sourceLang, targetLang) <
        glossaryTermSpecificity(existing, sourceLang, targetLang)
    ) {
      bySourceText.set(key, row);
    }
  }
  return [...bySourceText.values()].sort((a, b) =>
    String(a.source_text || "").localeCompare(String(b.source_text || "")),
  );
}

module.exports = {
  ALL_LANGUAGES,
  preferSpecificGlossaryTerms,
};
