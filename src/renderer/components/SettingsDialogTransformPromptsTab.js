import React, { useState, useEffect } from "react";
import { makeStyles, tokens, Button, Spinner, Dropdown, Option, Text } from "@fluentui/react-components";
import { Download, Upload, List } from "lucide-react";
import * as XLSX from "xlsx-js-style";
import webAPI from "../utils/webApiClient";

const EXPORT_FORMATS = ["json", "csv", "xlsx"];
const CSV_COLUMNS = ["name", "role", "instructions", "output_description", "temperature", "target_language"];

/** Instructions (stringified JSON array or array) → newline-separated string for display/CSV/XLSX */
function instructionsToNewlineString(value) {
  if (value == null) return "";
  if (Array.isArray(value)) return value.join("\n");
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed.join("\n") : value;
    } catch {
      return value;
    }
  }
  return "";
}

/** Newline-separated string → array for storage (each line = one element); on import we pass array and normalizePrompt stringifies */
function newlineStringToInstructionsArray(str) {
  if (str == null) return [];
  const s = String(str).replace(/^\s*'/, ""); // strip leading apostrophe (Excel export prefix)
  return s
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

/** For JSON export: "open" stringified JSON array to a real array */
function instructionsToExportArray(value) {
  if (value == null) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? parsed : [value];
    } catch {
      return value ? [value] : [];
    }
  }
  return [];
}

function escapeCsvField(value) {
  const s = value == null ? "" : String(value);
  if (/[",\r\n]/.test(s)) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

function buildCsvFromPrompts(prompts) {
  const header = CSV_COLUMNS.join(",");
  const rows = (Array.isArray(prompts) ? prompts : []).map((p) =>
    CSV_COLUMNS.map((col) =>
      escapeCsvField(col === "instructions" ? instructionsToNewlineString(p[col]) : p[col])
    ).join(",")
  );
  return [header, ...rows].join("\r\n");
}

function parseCsvLine(line) {
  const out = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      inQuotes = !inQuotes;
    } else if (ch === "," && !inQuotes) {
      out.push(field.replace(/""/g, '"'));
      field = "";
    } else {
      field += ch;
    }
  }
  out.push((field || "").replace(/""/g, '"'));
  return out;
}

function parseCsvToPrompts(text) {
  const lines = text.split(/\r?\n/).filter((line) => line.trim().length > 0);
  if (lines.length < 2) return [];
  const prompts = [];
  for (let i = 1; i < lines.length; i++) {
    const values = parseCsvLine(lines[i]);
    const obj = {};
    CSV_COLUMNS.forEach((col, idx) => {
      obj[col] = values[idx] != null ? String(values[idx]).trim() : "";
    });
    if (obj.name) {
      prompts.push({
        name: obj.name,
        role: obj.role || "",
        instructions: newlineStringToInstructionsArray(obj.instructions),
        output_description: obj.output_description || "transformed",
        temperature: Number(obj.temperature) || 0.4,
        target_language: obj.target_language || null,
      });
    }
  }
  return prompts;
}

const useStyles = makeStyles({
  sectionInner: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalS,
  },
  formatRow: {
    display: "flex",
    alignItems: "center",
    gap: tokens.spacingHorizontalM,
    flexWrap: "wrap",
  },
  formatRowSpacer: {
    marginLeft: "48px",
    flexShrink: 0,
  },
  formatDropdown: {
    minWidth: "fit-content",
    width: "fit-content",
  },
  message: {
    fontSize: "13px",
    color: tokens.colorNeutralForeground2,
  },
  error: {
    color: tokens.colorStatusDangerForeground1,
  },
  tableWrap: {
    width: "fit-content",
    maxWidth: "100%",
    marginTop: "8px",
    marginBottom: "8px",
    borderRadius: "8px",
    overflow: "auto",
    boxShadow: `0 1px 3px ${tokens.colorNeutralShadowAmbient}, 0 1px 2px ${tokens.colorNeutralShadowKey}`,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
  },
  table: {
    width: "auto",
    tableLayout: "auto",
    borderCollapse: "collapse",
    fontSize: "14px",
  },
  thead: {
    backgroundColor: "rgba(96, 205, 255, 0.18)",
  },
  th: {
    padding: "12px 16px",
    textAlign: "left",
    fontWeight: 600,
    color: "#60cdff",
    borderBottom: "2px solid rgba(96, 205, 255, 0.4)",
    fontSize: "13px",
  },
  td: {
    padding: "12px 16px",
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    color: tokens.colorNeutralForeground1,
  },
  tbodyTr: {
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  emptyRow: {
    padding: "20px 16px",
    textAlign: "center",
    color: tokens.colorNeutralForeground3,
    fontStyle: "italic",
    backgroundColor: tokens.colorNeutralBackground1,
  },
});

const getCustomPromptsApi = () =>
  typeof window !== "undefined" && window.electronAPI?.customPrompts
    ? window.electronAPI.customPrompts
    : webAPI?.customPrompts;

const getAcceptForFormat = (format) => {
  switch (format) {
    case "json":
      return ".json,application/json";
    case "csv":
      return ".csv,text/csv,text/plain";
    case "xlsx":
      return ".xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    default:
      return ".json,application/json";
  }
};

const SettingsDialogTransformPromptsTab = () => {
  const styles = useStyles();
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [exportMessage, setExportMessage] = useState("");
  const [importMessage, setImportMessage] = useState("");
  const [importError, setImportError] = useState(false);
  const [exportImportFormat, setExportImportFormat] = useState("json");
  const fileInputRef = React.useRef(null);

  const loadPrompts = async () => {
    const api = getCustomPromptsApi();
    if (!api?.getAll) {
      setPrompts([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const list = await api.getAll();
      setPrompts(Array.isArray(list) ? list : []);
    } catch (_) {
      setPrompts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPrompts();
  }, []);

  const handleExport = async () => {
    setExportMessage("");
    const api = getCustomPromptsApi();
    const getExportData = api?.export ? () => api.export() : api?.getAll ? () => api.getAll() : null;
    if (!getExportData) {
      setExportMessage("Export not available.");
      return;
    }
    try {
      const list = await getExportData();
      const rawList = Array.isArray(list) ? list : [];
      let blob;
      let filename;
      if (exportImportFormat === "json") {
        const data = rawList.map((p) => ({
          ...p,
          instructions: instructionsToExportArray(p.instructions),
        }));
        blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
        filename = "transrewrt-custom-prompts.json";
      } else if (exportImportFormat === "csv") {
        const csv = buildCsvFromPrompts(rawList);
        blob = new Blob([csv], { type: "text/csv" });
        filename = "transrewrt-custom-prompts.csv";
      } else if (exportImportFormat === "xlsx") {
        const instrStr = (p) => instructionsToNewlineString(p.instructions);
        const rows = rawList.map((p) => ({
          name: p.name ?? "",
          role: p.role ?? "",
          instructions: "'" + instrStr(p),
          output_description: p.output_description ?? "transformed",
          temperature: p.temperature ?? 0.4,
          target_language: p.target_language ?? "",
        }));
        const ws = XLSX.utils.json_to_sheet(rows);
        const range = XLSX.utils.decode_range(ws["!ref"] || "A1");
        const headerStyle = {
          fill: { patternType: "solid", fgColor: { rgb: "BDD7EE" } },
          font: { bold: true },
          alignment: { vertical: "top" },
        };
        const cellStyleTop = { alignment: { vertical: "top" } };
        const cellStyleTopWrap = { alignment: { vertical: "top", wrapText: true } };
        const colIndexInstructions = 2;
        for (let C = range.s.c; C <= range.e.c; C++) {
          const addr = XLSX.utils.encode_cell({ r: 0, c: C });
          if (ws[addr]) ws[addr].s = headerStyle;
        }
        for (let R = range.s.r + 1; R <= range.e.r; R++) {
          for (let C = range.s.c; C <= range.e.c; C++) {
            const addr = XLSX.utils.encode_cell({ r: R, c: C });
            if (ws[addr]) {
              ws[addr].s = C === colIndexInstructions ? cellStyleTopWrap : cellStyleTop;
            }
          }
        }
        const colWidths = CSV_COLUMNS.map((_, c) => {
          let maxCh = 10;
          for (let r = 0; r <= range.e.r; r++) {
            const addr = XLSX.utils.encode_cell({ r, c: c });
            const cell = ws[addr];
            if (!cell || cell.v == null) continue;
            const str = String(cell.v);
            const lines = str.split(/\r?\n/);
            const len = lines.length ? Math.max(...lines.map((l) => l.length)) : str.length;
            maxCh = Math.min(Math.max(maxCh, len + 2), 80);
          }
          return { wch: maxCh };
        });
        ws["!cols"] = colWidths;
        const rowHeights = [];
        const defaultHpt = 15;
        rowHeights[0] = { hpt: 20 };
        for (let R = 1; R <= range.e.r; R++) {
          const addr = XLSX.utils.encode_cell({ r: R, c: colIndexInstructions });
          const cell = ws[addr];
          const lines = cell && cell.v != null ? String(cell.v).split(/\r?\n/).length : 1;
          rowHeights[R] = { hpt: Math.min(Math.max(defaultHpt, lines * defaultHpt), 200) };
        }
        ws["!rows"] = rowHeights;
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Prompts");
        const arr = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        blob = new Blob([arr], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        filename = "transrewrt-custom-prompts.xlsx";
      } else {
        setExportMessage("Unknown format.");
        return;
      }
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
      setExportMessage("Exported successfully.");
    } catch (err) {
      setExportMessage(err?.message || "Export failed.");
    }
  };

  const handleImportClick = () => {
    setImportMessage("");
    setImportError(false);
    fileInputRef.current?.click();
  };

  const normalizePrompt = (p) => ({
    name: p.name ?? "",
    role: p.role ?? "",
    instructions: typeof p.instructions === "string" ? p.instructions : JSON.stringify(p.instructions || []),
    output_description: p.output_description ?? "transformed",
    temperature: Number(p.temperature) || 0.4,
    target_language: p.target_language ?? null,
  });

  const handleImportFile = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setImportMessage("");
    setImportError(false);
    const api = getCustomPromptsApi();
    if (!api?.import) {
      setImportMessage("Import not available.");
      setImportError(true);
      return;
    }
    try {
      let list = [];
      if (exportImportFormat === "json") {
        const text = await file.text();
        const data = JSON.parse(text);
        list = Array.isArray(data) ? data : (data?.prompts ? data.prompts : []);
      } else if (exportImportFormat === "csv") {
        const text = await file.text();
        list = parseCsvToPrompts(text);
      } else if (exportImportFormat === "xlsx") {
        const buf = await file.arrayBuffer();
        const wb = XLSX.read(buf, { type: "array" });
        const firstSheet = wb.Sheets[wb.SheetNames[0]];
        if (!firstSheet) {
          setImportMessage("No sheet in file.");
          setImportError(true);
          return;
        }
        const rows = XLSX.utils.sheet_to_json(firstSheet);
        list = (Array.isArray(rows) ? rows : []).map((row) =>
          normalizePrompt({ ...row, instructions: newlineStringToInstructionsArray(row.instructions) })
        );
      }
      list = list.filter((p) => p?.name).map(normalizePrompt);
      if (list.length === 0) {
        setImportMessage("No prompts in file.");
        setImportError(true);
        return;
      }
      const result = await api.import(list, "merge");
      if (result?.error) throw new Error(result.error);
      setImportMessage(`Imported ${list.length} prompt(s).`);
      loadPrompts();
    } catch (err) {
      setImportMessage(err?.message || "Import failed.");
      setImportError(true);
    }
  };

  const sectionTitleStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: 0,
    marginBottom: "36px",
  };
  const indentStyle = { paddingLeft: "24px" };

  return (
    <div className="tab-content">
      <div className="section">
        <Text as="h3" size={500} weight="semibold" style={sectionTitleStyle}>
          <Download size={20} />
          Export / Import custom prompts
        </Text>
        <div style={indentStyle} className={styles.sectionInner}>
          <div className={styles.formatRow}>
            <Button
              appearance="primary"
              icon={<Download size={16} />}
              onClick={handleExport}
              disabled={loading}
            >
              Export
            </Button>
            <Button
              appearance="secondary"
              icon={<Upload size={16} />}
              onClick={handleImportClick}
              disabled={loading}
            >
              Import (merge)
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept={getAcceptForFormat(exportImportFormat)}
              style={{ display: "none" }}
              onChange={handleImportFile}
            />
            <span className={styles.formatRowSpacer} aria-hidden="true" />
            <Dropdown
              id="export-import-format"
              appearance="underline"
              value={exportImportFormat.toUpperCase()}
              selectedOptions={[exportImportFormat]}
              onOptionSelect={(_, data) => data.optionValue && setExportImportFormat(String(data.optionValue))}
              aria-label="Export/import format"
              className={styles.formatDropdown}
              style={{ minWidth: "72px", width: "fit-content" }}
            >
              {EXPORT_FORMATS.map((f) => (
                <Option key={f} value={f}>
                  {f.toUpperCase()}
                </Option>
              ))}
            </Dropdown>
          </div>
          {exportMessage && <div className={styles.message}>{exportMessage}</div>}
          {importMessage && (
            <div className={importError ? `${styles.message} ${styles.error}` : styles.message}>
              {importMessage}
            </div>
          )}
        </div>
      </div>
      <div className="section">
        <Text as="h3" size={500} weight="semibold" style={sectionTitleStyle}>
          <List size={20} />
          Custom prompts
        </Text>
        <div style={indentStyle}>
          {loading ? (
            <Spinner size="small" />
          ) : (
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead className={styles.thead}>
                  <tr>
                    <th className={styles.th}>Name</th>
                    <th className={styles.th}>Role</th>
                    <th className={styles.th}>Instructions</th>
                    <th className={styles.th}>Output description</th>
                    <th className={styles.th}>Target language</th>
                    <th className={styles.th}>Temperature</th>
                  </tr>
                </thead>
                <tbody>
                  {prompts.length === 0 ? (
                    <tr>
                      <td colSpan={6} className={styles.emptyRow}>
                        No custom prompts yet. Create them in the Transform view.
                      </td>
                    </tr>
                  ) : (
                    prompts.map((p) => {
                      const instructionsDisplay = instructionsToNewlineString(p.instructions);
                      const instructionsPreview =
                        instructionsDisplay.length > 80
                          ? `${instructionsDisplay.slice(0, 80)}…`
                          : instructionsDisplay || "—";
                      return (
                        <tr key={p.id} className={styles.tbodyTr}>
                          <td className={styles.td}>{p.name}</td>
                          <td className={styles.td}>
                            {p.role ? `${String(p.role).slice(0, 50)}${String(p.role).length > 50 ? "…" : ""}` : "—"}
                          </td>
                          <td
                            className={styles.td}
                            style={{ whiteSpace: "pre-wrap" }}
                            title={instructionsDisplay || undefined}
                          >
                            {instructionsPreview}
                          </td>
                          <td className={styles.td}>
                            {p.output_description ? String(p.output_description).slice(0, 40) : "—"}
                            {(p.output_description && String(p.output_description).length > 40) ? "…" : ""}
                          </td>
                          <td className={styles.td}>{p.target_language ?? "—"}</td>
                          <td className={styles.td}>{p.temperature ?? "—"}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SettingsDialogTransformPromptsTab;
