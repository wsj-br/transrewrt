import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import * as XLSX from "xlsx-js-style";
import { Trash2, Upload, Download, Plus, Search, BookOpen, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { triggerDownload } from "../utils/misc/exportUtils";
import { glossaryApi } from "../services/apiService";
import LanguageSelector from "./LanguageSelector";
import {
  settingsSection,
  settingsTabContent,
} from "./settings/settingsLayoutClasses";
import {
  settingsUsersTable as tbl,
} from "./settings/settingsTableClasses";
import { cn } from "@/lib/utils";

interface GlossaryTerm {
  id: number;
  source_language: string;
  target_language: string;
  source_text: string;
  target_text: string;
  created_at?: string;
  updated_at?: string;
}

const GLOSSARY_CSV_HEADERS = ["source_language", "target_language", "source_text", "target_text"];

function escapeCsvCell(val: string): string {
  const s = String(val ?? "");
  if (s.includes(",") || s.includes('"') || s.includes("\n")) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

function parseCsvLine(line: string): string[] {
  const out: string[] = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') { field += '"'; i++; }
      else inQuotes = !inQuotes;
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

function normalizeHeaders(headers: string[]): string[] {
  return headers.map((h) => String(h).trim().toLowerCase().replace(/\s+/g, "_"));
}

function parseCsvToTerms(text: string, fallbackSrcLang: string, fallbackTgtLang: string): GlossaryTerm[] {
  const lines = text.split(/\r?\n/).filter((l) => l.trim());
  if (lines.length < 2) return [];
  const headers = normalizeHeaders(parseCsvLine(lines[0]));
  const has4Cols = headers.includes("source_language") && headers.includes("target_language");
  const terms: GlossaryTerm[] = [];
  for (let i = 1; i < lines.length; i++) {
    const vals = parseCsvLine(lines[i]);
    if (has4Cols) {
      const row: Record<string, string> = {};
      headers.forEach((h, idx) => { row[h] = vals[idx] != null ? String(vals[idx]).trim() : ""; });
      if (row.source_text && row.target_text && row.source_language && row.target_language) {
        terms.push({ id: 0, source_language: row.source_language, target_language: row.target_language, source_text: row.source_text, target_text: row.target_text });
      }
    } else {
      const srcIdx = headers.indexOf("source_text");
      const tgtIdx = headers.indexOf("target_text");
      const s = srcIdx >= 0 ? (vals[srcIdx] ?? "").trim() : (vals[0] ?? "").trim();
      const tg = tgtIdx >= 0 ? (vals[tgtIdx] ?? "").trim() : (vals[1] ?? "").trim();
      if (s && tg && fallbackSrcLang && fallbackTgtLang) {
        terms.push({ id: 0, source_language: fallbackSrcLang, target_language: fallbackTgtLang, source_text: s, target_text: tg });
      }
    }
  }
  return terms;
}

function parseXlsxToTerms(wb: any, fallbackSrcLang: string, fallbackTgtLang: string): { terms: GlossaryTerm[]; is2col: boolean } {
  const sheetName = wb.SheetNames[0];
  const rows: Record<string, string>[] = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], { defval: "" });
  if (!rows.length) return { terms: [], is2col: false };
  const keys = Object.keys(rows[0]).map((k) => k.trim().toLowerCase().replace(/\s+/g, "_"));
  const has4Cols = keys.includes("source_language") && keys.includes("target_language");
  const terms: GlossaryTerm[] = rows.map((row) => {
    const norm: Record<string, string> = {};
    Object.keys(row).forEach((k) => { norm[k.trim().toLowerCase().replace(/\s+/g, "_")] = String(row[k] ?? "").trim(); });
    if (has4Cols) {
      return { id: 0, source_language: norm.source_language || "", target_language: norm.target_language || "", source_text: norm.source_text || "", target_text: norm.target_text || "" };
    }
    return { id: 0, source_language: fallbackSrcLang, target_language: fallbackTgtLang, source_text: norm.source_text || norm[keys[0]] || "", target_text: norm.target_text || norm[keys[1]] || "" };
  }).filter((t) => t.source_text && t.target_text && t.source_language && t.target_language);
  return { terms, is2col: !has4Cols };
}

function termsToXlsx(terms: GlossaryTerm[]): Blob {
  const rows = terms.map((t) => ({ source_language: t.source_language, target_language: t.target_language, source_text: t.source_text, target_text: t.target_text }));
  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Glossary");
  const arr = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  return new Blob([arr], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
}

function termsToCsv(terms: GlossaryTerm[]): Blob {
  const header = GLOSSARY_CSV_HEADERS.join(",");
  const rows = terms.map((t) => [t.source_language, t.target_language, t.source_text, t.target_text].map(escapeCsvCell).join(","));
  return new Blob([[header, ...rows].join("\r\n")], { type: "text/csv;charset=utf-8;" });
}

interface SettingsGlossaryTabProps {
  settings: Record<string, unknown>;
}

export function SettingsGlossaryTab({ settings: _settings }: SettingsGlossaryTabProps) {
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [terms, setTerms] = useState<GlossaryTerm[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterSrc, setFilterSrc] = useState("");
  const [filterTgt, setFilterTgt] = useState("");
  const [filterText, setFilterText] = useState("");
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const [newRow, setNewRow] = useState({ source_language: "", target_language: "", source_text: "", target_text: "" });
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data: any = await glossaryApi.getAll();
      setTerms(Array.isArray(data) ? data : (data?.terms ?? []));
    } catch {
      setTerms([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const filtered = terms.filter((term) => {
    if (filterSrc && term.source_language !== filterSrc) return false;
    if (filterTgt && term.target_language !== filterTgt) return false;
    if (filterText) {
      const q = filterText.toLowerCase();
      if (!term.source_text.toLowerCase().includes(q) && !term.target_text.toLowerCase().includes(q)) return false;
    }
    return true;
  });

  const handleDelete = async (id: number) => {
    await glossaryApi.delete(id);
    setTerms((prev) => prev.filter((t) => t.id !== id));
  };

  const handleAddRow = async () => {
    if (!newRow.source_language || !newRow.target_language || !newRow.source_text.trim() || !newRow.target_text.trim()) return;
    setSaving(true);
    try {
      const created: any = await glossaryApi.create({ ...newRow, source_text: newRow.source_text.trim(), target_text: newRow.target_text.trim() });
      if (created?.id) {
        setTerms((prev) => [...prev, created as GlossaryTerm]);
      } else {
        await load();
      }
      setNewRow({ source_language: "", target_language: "", source_text: "", target_text: "" });
    } finally {
      setSaving(false);
    }
  };

  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = "";
    setImportStatus(null);
    try {
      const isXlsx = file.name.endsWith(".xlsx") || file.name.endsWith(".xls");
      let termsToImport: GlossaryTerm[] = [];
      if (isXlsx) {
        const buf = await file.arrayBuffer();
        const wb = XLSX.read(buf, { type: "array" });
        const { terms: parsed } = parseXlsxToTerms(wb, "", "");
        termsToImport = parsed;
      } else {
        const text = await file.text();
        termsToImport = parseCsvToTerms(text, "", "");
      }
      if (!termsToImport.length) { setImportStatus(t("No valid rows found in file.")); return; }
      const result: any = await glossaryApi.import(termsToImport);
      setImportStatus(t("Imported {{count}} terms.", { count: result?.count ?? termsToImport.length }));
      await load();
    } catch (err: any) {
      setImportStatus(err?.message || t("Import failed."));
    }
  };

  const handleExportCsv = () => {
    const blob = termsToCsv(terms);
    triggerDownload(blob, "glossary.csv");
  };

  const handleExportXlsx = () => {
    const blob = termsToXlsx(terms);
    triggerDownload(blob, "glossary.xlsx");
  };

  const handleDownloadTemplateCsv = () => {
    const blob = new Blob([GLOSSARY_CSV_HEADERS.join(",") + "\r\n"], { type: "text/csv;charset=utf-8;" });
    triggerDownload(blob, "glossary-template.csv");
  };

  const handleDownloadTemplateXlsx = () => {
    const ws = XLSX.utils.aoa_to_sheet([GLOSSARY_CSV_HEADERS]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Glossary");
    const arr = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([arr], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    triggerDownload(blob, "glossary-template.xlsx");
  };

  return (
    <div className={settingsTabContent}>
      {/* Section: Glossary Terms */}
      <div className={settingsSection}>
        {/* Section header */}
        <div className="flex items-center gap-2 px-5 pt-5 pb-3">
          <BookOpen size={18} className="text-muted-foreground shrink-0" />
          <h3 className="text-base font-semibold">{t("Glossary Terms")}</h3>
          <span className="ml-auto text-xs text-muted-foreground">
            {loading ? t("Loading…") : t("{{count}} terms", { count: terms.length })}
          </span>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center gap-2 px-5 pb-3 border-b border-border">
          <input ref={fileInputRef} type="file" accept=".csv,.xlsx,.xls" className="hidden" onChange={handleImportFile} />
          <Button variant="outline" size="sm" className="h-8 gap-1.5" onClick={() => fileInputRef.current?.click()}>
            <Upload size={14} />
            {t("Import")}
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1.5" onClick={handleExportCsv} disabled={!terms.length}>
            <Download size={14} />
            {t("Export CSV")}
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1.5" onClick={handleExportXlsx} disabled={!terms.length}>
            <Download size={14} />
            {t("Export XLSX")}
          </Button>
          <div className="flex items-center gap-1 ms-auto">
            <Button variant="link" size="sm" className="h-8 gap-1.5 text-xs text-muted-foreground [&:hover]:text-blue-600 dark:[&:hover]:text-blue-400 [&:hover]:underline" onClick={handleDownloadTemplateCsv}>
              <FileDown size={14} />
              {t("Template CSV")}
            </Button>
            <Button variant="link" size="sm" className="h-8 gap-1.5 text-xs text-muted-foreground [&:hover]:text-blue-600 dark:[&:hover]:text-blue-400 [&:hover]:underline" onClick={handleDownloadTemplateXlsx}>
              <FileDown size={14} />
              {t("Template XLSX")}
            </Button>
          </div>
        </div>

        {importStatus && (
          <p className="px-5 pt-2 text-xs text-muted-foreground">{importStatus}</p>
        )}

        {/* Filter bar */}
        <div className="flex flex-wrap items-end gap-3 px-5 py-3 border-b border-border">
          <div className="flex flex-col gap-1 min-w-[160px]">
            <Label className="text-xs text-muted-foreground">{t("Source language")}</Label>
            <LanguageSelector
              label={t("Source language")}
              hideLabel
              value={filterSrc}
              onChange={setFilterSrc}
              targetListSameAsSource
              detectLanguage={false}
            />
          </div>
          <div className="flex flex-col gap-1 min-w-[160px]">
            <Label className="text-xs text-muted-foreground">{t("Target language")}</Label>
            <LanguageSelector
              label={t("Target language")}
              hideLabel
              value={filterTgt}
              onChange={setFilterTgt}
              targetListSameAsSource
              detectLanguage={false}
            />
          </div>
          <div className="flex flex-col gap-1 flex-1 min-w-[180px]">
            <Label className="text-xs text-muted-foreground">{t("Search terms")}</Label>
            <div className="relative">
              <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <Input
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                placeholder={t("Filter by text…")}
                className="h-9 ps-8"
              />
            </div>
          </div>
          {(filterSrc || filterTgt || filterText) && (
            <Button variant="ghost" size="sm" className="h-9 text-xs" onClick={() => { setFilterSrc(""); setFilterTgt(""); setFilterText(""); }}>
              {t("Clear filters")}
            </Button>
          )}
        </div>

        {/* Table */}
        <div className={cn(tbl.wrap, "mt-4")}>
          <table className={tbl.table}>
            <thead>
              <tr>
                <th className={cn(tbl.th, "w-[1%] whitespace-nowrap")}>{t("Source language")}</th>
                <th className={tbl.th}>{t("Source term")}</th>
                <th className={cn(tbl.th, "w-[1%] whitespace-nowrap")}>{t("Target language")}</th>
                <th className={tbl.th}>{t("Target term")}</th>
                <th className={cn(tbl.th, "w-10")}></th>
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={5} className={cn(tbl.td, "text-center text-muted-foreground py-8")}>
                    {t("Loading…")}
                  </td>
                </tr>
              )}
              {!loading && filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className={cn(tbl.td, "text-center text-muted-foreground py-8")}>
                    {terms.length === 0 ? t("No glossary terms yet. Add one below or import a file.") : t("No terms match the current filters.")}
                  </td>
                </tr>
              )}
              {!loading && filtered.map((term) => (
                <tr key={term.id} className={tbl.tr}>
                  <td className={cn(tbl.td, "w-[1%] whitespace-nowrap")}>{term.source_language}</td>
                  <td className={tbl.td}>{term.source_text}</td>
                  <td className={cn(tbl.td, "w-[1%] whitespace-nowrap")}>{term.target_language}</td>
                  <td className={tbl.td}>{term.target_text}</td>
                  <td className={tbl.td}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-7 w-7 text-muted-foreground hover:text-destructive"
                      onClick={() => handleDelete(term.id)}
                      aria-label={t("Delete term")}
                    >
                      <Trash2 size={14} />
                    </Button>
                  </td>
                </tr>
              ))}

              {/* Inline add row */}
              <tr className={tbl.tr}>
                <td className={cn(tbl.td, "w-[1%] whitespace-nowrap")}>
                  <LanguageSelector
                    label={t("Source language")}
                    hideLabel
                    hideIcon
                    hugSelectWidth
                    value={newRow.source_language}
                    onChange={(v) => setNewRow((p) => ({ ...p, source_language: v }))}
                    targetListSameAsSource
                    detectLanguage={false}
                  />
                </td>
                <td className={tbl.td}>
                  <Input
                    value={newRow.source_text}
                    onChange={(e) => setNewRow((p) => ({ ...p, source_text: e.target.value }))}
                    placeholder={t("Source term…")}
                    className="h-8"
                  />
                </td>
                <td className={cn(tbl.td, "w-[1%] whitespace-nowrap")}>
                  <LanguageSelector
                    label={t("Target language")}
                    hideLabel
                    hideIcon
                    hugSelectWidth
                    value={newRow.target_language}
                    onChange={(v) => setNewRow((p) => ({ ...p, target_language: v }))}
                    targetListSameAsSource
                    detectLanguage={false}
                  />
                </td>
                <td className={tbl.td}>
                  <Input
                    value={newRow.target_text}
                    onChange={(e) => setNewRow((p) => ({ ...p, target_text: e.target.value }))}
                    placeholder={t("Target term…")}
                    className="h-8"
                  />
                </td>
                <td className={tbl.td}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7"
                    onClick={handleAddRow}
                    disabled={saving || !newRow.source_language || !newRow.target_language || !newRow.source_text.trim() || !newRow.target_text.trim()}
                    aria-label={t("Add term")}
                  >
                    <Plus size={14} />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
