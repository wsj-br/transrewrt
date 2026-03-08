/**
 * Returns a copy of the import list with duplicate names renamed to "Name (1)", "Name (2)", etc.
 * Uses existingNames (current prompts) and also treats names assigned in this batch as taken.
 */
export function resolveDuplicateNames(existingNames, list) {
  const used = new Set(existingNames.map((n) => String(n).trim()).filter(Boolean));
  return list.map((p) => {
    let name = (p?.name ?? "").trim();
    if (!name) return p;
    const baseName = name.replace(/\s*\(\d+\)\s*$/, "").trim() || name;
    if (!used.has(name)) {
      used.add(name);
      return { ...p, name };
    }
    let n = 1;
    let candidate;
    do {
      candidate = `${baseName} (${n})`;
      n++;
    } while (used.has(candidate));
    used.add(candidate);
    return { ...p, name: candidate };
  });
}
