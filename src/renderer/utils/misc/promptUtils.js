/** Lowercase trimmed key so "Foo" and "foo" count as the same name for collision checks. */
function nameConflictKey(name) {
  const t = String(name ?? "").trim();
  return t ? t.toLowerCase() : null;
}

/**
 * Returns a copy of the import list with duplicate names renamed to "Name (1)", "Name (2)", etc.
 * Collision detection is case-insensitive vs existing names and within the batch (SQLite names are case-sensitive).
 * Uses existingNames (current prompts) and also treats names assigned in this batch as taken.
 */
export function resolveDuplicateNames(existingNames, list) {
  const usedKeys = new Set();
  for (const n of existingNames) {
    const k = nameConflictKey(n);
    if (k) usedKeys.add(k);
  }
  return list.map((p) => {
    let name = (p?.name ?? "").trim();
    if (!name) return p;
    const baseName = name.replace(/\s*\(\d+\)\s*$/, "").trim() || name;
    const key = nameConflictKey(name);
    if (key && !usedKeys.has(key)) {
      usedKeys.add(key);
      return { ...p, name };
    }
    let n = 1;
    let candidate;
    let candidateKey;
    do {
      candidate = `${baseName} (${n})`;
      n++;
      candidateKey = nameConflictKey(candidate);
    } while (candidateKey && usedKeys.has(candidateKey));
    if (candidateKey) usedKeys.add(candidateKey);
    return { ...p, name: candidate };
  });
}
