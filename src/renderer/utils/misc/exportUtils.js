/**
 * Shared helpers for exporting table data to JSON, CSV, and XLSX.
 * Used by DashboardTabAllCalls, DashboardTabByDay, and DashboardTabByModel.
 */

export function escapeCsvCell(value) {
  const s = value == null ? "" : String(value);
  if (/[",\r\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

/**
 * @param {Array<Record<string, unknown>>} rows
 * @param {Array<{ key: string, labelKey: string }>} columns
 * @param {(key: string) => string} t
 */
export function rowsToCsvWithLabels(rows, columns, t) {
  if (rows.length === 0 && columns.length === 0) return "";
  const header = columns.map((c) => escapeCsvCell(t(c.labelKey))).join(",");
  const body = rows.map((row) =>
    columns.map((c) => escapeCsvCell(row[c.key])).join(",")
  );
  return [header, ...body].join("\r\n");
}

export function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
