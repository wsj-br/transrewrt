/**
 * Provider GET /models lists often repeat the same chat model: alias rows (Mistral),
 * dated snapshots that share a display name (OpenAI), or the same id after path
 * stripping (Google `models/…`). Collapse those cliques to one catalog entry and
 * drop rows that cannot do chat completions when the provider reports capabilities.
 */

/**
 * Keep the row when the provider does not report chat capability, or reports it true.
 * Explicit `completion_chat: false` (embed, OCR, TTS, moderation) is dropped.
 * @param {{ capabilities?: { completion_chat?: boolean }, archived?: boolean }} row
 * @returns {boolean}
 */
function isChatCatalogModel(row) {
  if (row?.archived === true) return false;
  const caps = row?.capabilities;
  if (!caps || typeof caps !== "object") return true;
  if (caps.completion_chat === false) return false;
  return true;
}

function collectRowIds(row) {
  const ids = [];
  const id = String(row?.id || "").trim();
  if (id) ids.push(id);
  if (Array.isArray(row?.aliases)) {
    for (const a of row.aliases) {
      const s = String(a || "").trim();
      if (s) ids.push(s);
    }
  }
  return ids;
}

function findRoot(parent, i) {
  let r = i;
  while (parent[r] !== r) r = parent[r];
  let c = i;
  while (parent[c] !== r) {
    const next = parent[c];
    parent[c] = r;
    c = next;
  }
  return r;
}

function union(parent, a, b) {
  const ra = findRoot(parent, a);
  const rb = findRoot(parent, b);
  if (ra !== rb) parent[rb] = ra;
}

function isNicheAliasId(id) {
  return /vibe-cli|with-tools|-fim-|embed|ocr|moderation|transcribe|tts|realtime|:batch|:nitro|:floor|:extended/i.test(
    String(id || ""),
  );
}

/**
 * Pick one row from a duplicate/alias clique.
 * Prefer a shared `name` that is itself an id; else a non-niche `*-latest` /
 * `*-current`; else the shortest id (undated aliases beat dated snapshots).
 * @param {Array<{ id: string, name?: string, aliases?: string[] }>} group
 */
function attachAliases(row, allIds) {
  const extra = [...new Set(allIds)].filter((id) => id && id !== row.id);
  if (extra.length === 0) {
    if (row.aliases == null) return row;
    const copy = { ...row };
    delete copy.aliases;
    return copy;
  }
  return { ...row, aliases: extra };
}

function pickCanonicalRow(group) {
  if (group.length === 1) {
    return attachAliases(group[0], collectRowIds(group[0]));
  }
  const ids = group.map((r) => String(r.id || "").trim()).filter(Boolean);
  const idSet = new Set(ids);
  const name = group
    .map((r) => (r.name == null ? "" : String(r.name).trim()))
    .find((n) => n && idSet.has(n));
  let preferred = name ? group.find((r) => String(r.id).trim() === name) : null;
  if (!preferred) {
    preferred = group.find(
      (r) =>
        /-(latest|current)$/i.test(String(r.id || "")) && !isNicheAliasId(r.id),
    );
  }
  if (!preferred) {
    const ranked = [...group].sort((a, b) => {
      const ia = String(a.id || "");
      const ib = String(b.id || "");
      const na = isNicheAliasId(ia) ? 1 : 0;
      const nb = isNicheAliasId(ib) ? 1 : 0;
      if (na !== nb) return na - nb;
      if (ia.length !== ib.length) return ia.length - ib.length;
      return ia.localeCompare(ib);
    });
    preferred = ranked[0];
  }
  return attachAliases(preferred, group.flatMap(collectRowIds));
}

/**
 * Collapse rows that are the same underlying model: duplicate ids, `aliases`
 * links, or the same non-empty display `name`.
 * @param {Array<{ id: string, name?: string, aliases?: string[] }>} rows
 * @returns {typeof rows}
 */
function collapseAliasedModelRows(rows) {
  const list = Array.isArray(rows) ? rows : [];
  if (list.length <= 1) return list;

  const parent = list.map((_, i) => i);
  const idToIndex = new Map();
  list.forEach((row, i) => {
    const id = String(row?.id || "").trim();
    if (!id) return;
    if (idToIndex.has(id)) union(parent, i, idToIndex.get(id));
    else idToIndex.set(id, i);
  });
  list.forEach((row, i) => {
    for (const alias of collectRowIds(row)) {
      const j = idToIndex.get(alias);
      if (j != null) union(parent, i, j);
    }
  });
  const nameToIndex = new Map();
  list.forEach((row, i) => {
    const name = row?.name == null ? "" : String(row.name).trim();
    if (!name) return;
    if (nameToIndex.has(name)) union(parent, i, nameToIndex.get(name));
    else nameToIndex.set(name, i);
  });

  const groups = new Map();
  list.forEach((row, i) => {
    const root = findRoot(parent, i);
    if (!groups.has(root)) groups.set(root, []);
    groups.get(root).push(row);
  });
  return [...groups.values()].map(pickCanonicalRow);
}

module.exports = {
  isChatCatalogModel,
  collapseAliasedModelRows,
};
