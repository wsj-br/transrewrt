import React, { useState, useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import * as XLSX from "xlsx-js-style";
import { Trash2, Upload, Download, Plus, Search, BookOpen, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { triggerDownload } from "../utils/misc/exportUtils";
import {
  type GlossaryTerm,
  parseCsvToTerms,
  parseXlsxToTerms,
  termsToCsv,
  termsToXlsx,
  glossaryTemplateCsvBlob,
  glossaryTemplateXlsxBlob,
} from "../utils/misc/glossaryUtils";
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

function SettingsGlossaryTab() {
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
      const data = (await glossaryApi.getAll()) as GlossaryTerm[] | { terms?: GlossaryTerm[] };
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
      const created = (await glossaryApi.create({ ...newRow, source_text: newRow.source_text.trim(), target_text: newRow.target_text.trim() })) as GlossaryTerm | undefined;
      if (created?.id) {
        setTerms((prev) => [...prev, created]);
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
      const result = (await glossaryApi.import(termsToImport)) as { count?: number } | undefined;
      setImportStatus(t("Imported {{count}} terms.", { count: result?.count ?? termsToImport.length }));
      await load();
    } catch (err) {
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
    triggerDownload(glossaryTemplateCsvBlob(), "glossary-template.csv");
  };

  const handleDownloadTemplateXlsx = () => {
    triggerDownload(glossaryTemplateXlsxBlob(), "glossary-template.xlsx");
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

export default SettingsGlossaryTab;
