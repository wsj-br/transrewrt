import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { BookOpenText, Download, Upload, List, Trash2, Loader2 } from "lucide-react";
import samplePromptsData from "../../config-defaults/transform-prompts.json";
import { findUILanguageEntry } from "../utils/misc/languageConstants";
import ConfirmModal from "./ConfirmModal";
import * as XLSX from "xlsx-js-style";
import webAPI from "../utils/api/webApiClient";
import { resolveDuplicateNames } from "../utils/misc/promptUtils";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  settingsDataTable as tbl,
  settingsTransformPromptsCard as promptCard,
} from "./settings/settingsTableClasses";
import { settingsSection, settingsTabContent } from "./settings/settingsLayoutClasses";

const EXPORT_FORMATS = ["json", "csv", "xlsx"];
const CSV_COLUMNS = ["name", "role", "instructions", "output_description", "temperature", "target_language", "prompt_instructions"];

/** Normalize import/DB value to boolean: true = show From language selector at run time (`target_language` column). */
function normalizeAskFromLanguageFlag(value) {
  if (value === true || value === 1) return true;
  if (value === false || value === 0 || value === "0") return false;
  if (typeof value === "string") {
    const s = value.trim().toLowerCase();
    if (s === "yes" || s === "true" || s === "1") return true;
    if (s === "no" || s === "false" || s === "") return false;
    if (s.length > 0) return true;
  }
  return false;
}

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
    CSV_COLUMNS.map((col) => {
      if (col === "instructions") return escapeCsvField(instructionsToNewlineString(p[col]));
      if (col === "target_language") return escapeCsvField(p.target_language === true || p.target_language === 1 ? "Yes" : "No");
      return escapeCsvField(p[col]);
    }).join(",")
  );
  return [header, ...rows].join("\r\n");
}

/**
 * Parse a single CSV line respecting quoted fields and escaped quotes ("" → ").
 * RFC 4180: fields containing comma, quote, or newline are wrapped in "; internal " escaped as "".
 */
function parseCsvLine(line) {
  const out = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        field += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (ch === "," && !inQuotes) {
      out.push(field);
      field = "";
    } else {
      field += ch;
    }
  }
  out.push(field || "");
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
        target_language: normalizeAskFromLanguageFlag(obj.target_language),
        prompt_instructions: (obj.prompt_instructions != null && String(obj.prompt_instructions).trim()) ? String(obj.prompt_instructions).trim() : null,
      });
    }
  }
  return prompts;
}

const getCustomPromptsApi = () =>
  typeof window !== "undefined" && window.electronAPI?.customPrompts
    ? window.electronAPI.customPrompts
    : webAPI?.customPrompts;

function getTransformPromptRowDisplay(p, t) {
  const instructionsDisplay = instructionsToNewlineString(p.instructions);
  const instructionsPreview =
    instructionsDisplay.length > 80
      ? `${instructionsDisplay.slice(0, 80)}…`
      : instructionsDisplay || "-";
  const roleStr = p.role ? String(p.role) : "";
  const roleDisplay = roleStr
    ? `${roleStr.slice(0, 50)}${roleStr.length > 50 ? "…" : ""}`
    : "-";
  const outStr = p.output_description ? String(p.output_description) : "";
  const outputDisplay = outStr
    ? `${outStr.slice(0, 40)}${outStr.length > 40 ? "…" : ""}`
    : "-";
  const fromLangYes = p.target_language === true || p.target_language === 1;
  return {
    instructionsDisplay,
    instructionsPreview,
    roleDisplay,
    outputDisplay,
    fromLangYes,
    fromLangLabel: fromLangYes ? t("Yes") : t("No"),
    tempDisplay: p.temperature ?? "-",
  };
}

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

const SettingsTransformPromptsTab = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language || "en-GB";
  const [prompts, setPrompts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [exportMessage, setExportMessage] = useState("");
  const [importMessage, setImportMessage] = useState("");
  const [importError, setImportError] = useState(false);
  const [exportImportFormat, setExportImportFormat] = useState("json");
  const [promptToDelete, setPromptToDelete] = useState(null);
  const [showLoadSampleConfirm, setShowLoadSampleConfirm] = useState(false);
  const [loadSampleLoading, setLoadSampleLoading] = useState(false);
  const fileInputRef = useRef(null);

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
    } catch {
      setPrompts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmDeletePrompt = async () => {
    if (!promptToDelete?.id) {
      setPromptToDelete(null);
      return;
    }
    const api = getCustomPromptsApi();
    if (!api?.delete) {
      setPromptToDelete(null);
      return;
    }
    try {
      await api.delete(promptToDelete.id);
      setPromptToDelete(null);
      await loadPrompts();
    } catch {
      setPromptToDelete(null);
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
      setExportMessage(t("Export not available."));
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
        filename = "transrewrt-transform-prompts.json";
      } else if (exportImportFormat === "csv") {
        const csv = buildCsvFromPrompts(rawList);
        blob = new Blob([csv], { type: "text/csv" });
        filename = "transrewrt-transform-prompts.csv";
      } else if (exportImportFormat === "xlsx") {
        const instrStr = (p) => instructionsToNewlineString(p.instructions);
        const rows = rawList.map((p) => ({
          name: p.name ?? "",
          role: p.role ?? "",
          instructions: "'" + instrStr(p),
          output_description: p.output_description ?? "transformed",
          temperature: p.temperature ?? 0.4,
          target_language: p.target_language === true || p.target_language === 1 ? "Yes" : "No",
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
        filename = "transrewrt-transform-prompts.xlsx";
      } else {
        setExportMessage(t("Unknown format."));
        return;
      }
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
      setExportMessage(t("Exported successfully."));
    } catch (err) {
      setExportMessage(err?.message || t("Export failed."));
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
    target_language: normalizeAskFromLanguageFlag(p.target_language),
  });

  const handleImportFile = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setImportMessage("");
    setImportError(false);
    const api = getCustomPromptsApi();
    if (!api?.import) {
      setImportMessage(t("Import not available."));
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
          setImportMessage(t("No sheet in file."));
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
        setImportMessage(t("No prompts in file."));
        setImportError(true);
        return;
      }
      const existing = await api.getAll();
      const existingNames = (Array.isArray(existing) ? existing : []).map((p) => p?.name).filter(Boolean);
      list = resolveDuplicateNames(existingNames, list);
      const result = await api.import(list, "merge");
      if (result?.error) throw new Error(result.error);
      setExportMessage("");
      setImportMessage(t("Imported {{count}} prompt(s).", { count: list.length }));
      loadPrompts();
    } catch (err) {
      setImportMessage(err?.message || t("Import failed."));
      setImportError(true);
    }
  };

  const handleConfirmLoadSamplePrompts = async () => {
    setLoadSampleLoading(true);
    setShowLoadSampleConfirm(false);
    setImportMessage("");
    setImportError(false);
    try {
      const api = getCustomPromptsApi();
      if (!api?.import) {
        setImportMessage(t("Import not available."));
        setImportError(true);
        return;
      }
      const list = Array.isArray(samplePromptsData) ? samplePromptsData : [];
      const normalized = list
        .filter((p) => p?.name)
        // eslint-disable-next-line no-unused-vars -- id omitted from bundled defaults
        .map(({ id, ...rest }) => ({
          ...rest,
          target_language:
            rest.target_language === true ||
            rest.target_language === 1 ||
            (typeof rest.target_language === "string" &&
              rest.target_language.trim() !== "" &&
              rest.target_language !== "0"),
        }));
      if (normalized.length === 0) {
        setImportMessage(t("No prompts in sample file."));
        setImportError(true);
        return;
      }
      const existing = await api.getAll();
      const existingNames = (Array.isArray(existing) ? existing : [])
        .map((p) => p?.name)
        .filter(Boolean);
      const toImport = resolveDuplicateNames(existingNames, normalized);
      const result = await api.import(toImport, "merge");
      if (result?.error) throw new Error(result.error);
      setExportMessage("");
      setImportMessage(t("Imported {{count}} prompt(s).", { count: toImport.length }));
      await loadPrompts();
    } catch (err) {
      setImportMessage(err?.message || t("Import failed."));
      setImportError(true);
    } finally {
      setLoadSampleLoading(false);
    }
  };

  const sectionTitleStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: 0,
    marginBottom: "36px",
  };
  const indentStyle = { paddingInlineStart: "24px" };

  return (
    <div className={settingsTabContent}>
      <div className={settingsSection}>
        <h3 className="flex items-center gap-2 text-base font-semibold mt-0 mb-9">
          <Download size={18} />
          {t("Export / Import transform prompts")}
        </h3>
        <div className="ps-6 flex flex-col gap-2">
          <div className="flex items-center gap-3 flex-wrap">
            <Button size="sm" onClick={handleExport} disabled={loading}>
              <Download size={14} />{t("Export")}
            </Button>
            <Button variant="outline" size="sm" onClick={handleImportClick} disabled={loading}>
              <Upload size={14} />{t("Import (merge)")}
            </Button>
            <input
              ref={fileInputRef}
              type="file"
              accept={getAcceptForFormat(exportImportFormat)}
              className="hidden"
              onChange={handleImportFile}
            />
            <span className="ms-6 shrink-0" aria-hidden="true" />
            <span
              id="settings-transform-format-label"
              className="text-sm text-muted-foreground shrink-0"
            >
              {t("Format:")}
            </span>
            <Select value={exportImportFormat} onValueChange={setExportImportFormat}>
              <SelectTrigger
                className="min-w-[72px] w-fit h-8"
                aria-labelledby="settings-transform-format-label"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {EXPORT_FORMATS.map((f) => (
                  <SelectItem key={f} value={f}>{f.toUpperCase()}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span className="ms-6 shrink-0" aria-hidden="true" />
            <Button
              variant="outline"
              size="sm"
              className="bg-emerald-950/40 border-emerald-800 text-emerald-200 hover:bg-emerald-900/50"
              onClick={() => setShowLoadSampleConfirm(true)}
              disabled={loading || loadSampleLoading}
            >
              {!loadSampleLoading && <BookOpenText size={14} />}
              {loadSampleLoading ? t("Loading…") : t("Load sample prompts")}
            </Button>
          </div>
          {exportMessage && <div className="text-xs text-muted-foreground">{exportMessage}</div>}
          {importMessage && (
            <div className={`text-xs ${importError ? "text-red-400" : "text-muted-foreground"}`}>
              {importMessage}
            </div>
          )}
        </div>
      </div>
      <div className={settingsSection}>
        <h3 className="flex items-center gap-2 text-base font-semibold mt-0 mb-9">
          <List size={18} />
          {t("Transform prompts")}
        </h3>
        <div className="ps-6">
          {loading ? (
            <Loader2 size={20} className="animate-spin opacity-50" />
          ) : (
            <>
              <div className={promptCard.list}>
                {prompts.length === 0 ? (
                  <div className={promptCard.empty}>
                    {t("No transform prompts yet. Import from a file or create in the Transform view.")}
                  </div>
                ) : (
                  prompts.map((p) => {
                    const d = getTransformPromptRowDisplay(p, t);
                    return (
                      <div key={p.id} className={promptCard.card}>
                        <div className={promptCard.headerRow}>
                          <span className={promptCard.name}>{p.name}</span>
                          <button
                            type="button"
                            className={promptCard.deleteBtn}
                            title={t("Delete this prompt")}
                            aria-label={t("Delete this prompt")}
                            onClick={() => setPromptToDelete(p)}
                          >
                            <Trash2 size={13} />
                          </button>
                        </div>
                        <div className={promptCard.fieldBlock}>
                          <span className={promptCard.fieldLabel}>{t("Role")}</span>
                          <div className={promptCard.fieldValue}>{d.roleDisplay}</div>
                        </div>
                        <div className={promptCard.fieldBlock}>
                          <span className={promptCard.fieldLabel}>{t("Instructions")}</span>
                          <div
                            className={promptCard.instructionsValue}
                            title={d.instructionsDisplay || undefined}
                          >
                            {d.instructionsPreview}
                          </div>
                        </div>
                        <div className={promptCard.fieldBlock}>
                          <span className={promptCard.fieldLabel}>{t("Output description")}</span>
                          <div className={promptCard.fieldValue}>{d.outputDisplay}</div>
                        </div>
                        <div className={promptCard.fieldBlock}>
                          <span className={promptCard.fieldLabel}>{t("From language (prompt)")}</span>
                          <div className={promptCard.fieldValue}>{d.fromLangLabel}</div>
                        </div>
                        <div className={promptCard.fieldBlock}>
                          <span className={promptCard.fieldLabel}>{t("Temperature")}</span>
                          <div className={promptCard.fieldValue}>{d.tempDisplay}</div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
              <div className="hidden sm:block">
                <div className={tbl.wrap}>
                  <table className={tbl.table}>
                    <thead className={tbl.thead}>
                      <tr>
                        <th className={tbl.th}>{t("Name")}</th>
                        <th className={tbl.th}>{t("Role")}</th>
                        <th className={tbl.th}>{t("Instructions")}</th>
                        <th className={tbl.th}>{t("Output description")}</th>
                        <th className={tbl.th}>{t("From language (prompt)")}</th>
                        <th className={tbl.th}>{t("Temperature")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {prompts.length === 0 ? (
                        <tr>
                          <td colSpan={6} className={tbl.emptyRow}>
                            {t("No transform prompts yet. Import from a file or create in the Transform view.")}
                          </td>
                        </tr>
                      ) : (
                        prompts.map((p) => {
                          const d = getTransformPromptRowDisplay(p, t);
                          return (
                            <tr key={p.id} className={tbl.tbodyTr}>
                              <td className={tbl.td}>
                                <span className="flex items-center gap-1.5 min-w-0">
                                  <span style={{ minWidth: 0 }}>{p.name}</span>
                                  <button
                                    type="button"
                                    className="text-muted-foreground hover:text-foreground shrink-0 ms-auto cursor-pointer"
                                    title={t("Delete this prompt")}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setPromptToDelete(p);
                                    }}
                                  >
                                    <Trash2 size={13} />
                                  </button>
                                </span>
                              </td>
                              <td className={tbl.td}>{d.roleDisplay}</td>
                              <td className={tbl.td} style={{ whiteSpace: "pre-wrap" }} title={d.instructionsDisplay || undefined}>
                                {d.instructionsPreview}
                              </td>
                              <td className={tbl.td}>{d.outputDisplay}</td>
                              <td className={tbl.td}>{d.fromLangLabel}</td>
                              <td className={tbl.td}>{d.tempDisplay}</td>
                            </tr>
                          );
                        })
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {promptToDelete != null && (
        <ConfirmModal
          title={t("Delete prompt")}
          message={t('Delete the prompt "{{name}}"?\n\nThis cannot be undone.', { name: promptToDelete.name || t("Untitled") })}
          confirmLabel={t("Delete")}
          cancelLabel={t("Cancel")}
          onConfirm={handleConfirmDeletePrompt}
          onCancel={() => setPromptToDelete(null)}
          danger
        />
      )}
      {showLoadSampleConfirm && (
        <ConfirmModal
          title={t("Load sample prompts")}
          message={t(
            "Import the sample prompts from the app config?\n\nThe prompts are in English, but after the import you can translate them to {{language}}, click in Edit > Translate prompt.",
            {
              language: findUILanguageEntry(locale)?.label ?? t("your language"),
            }
          )}
          confirmLabel={t("Load")}
          cancelLabel={t("Cancel")}
          onConfirm={handleConfirmLoadSamplePrompts}
          onCancel={() => setShowLoadSampleConfirm(false)}
          maxWidth="600px"
        />
      )}
    </div>
  );
};

export default SettingsTransformPromptsTab;
