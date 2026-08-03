import * as XLSX from "xlsx-js-style";
import { escapeCsvCell } from "./exportUtils";
import { ALL_LANGUAGES as SHARED_ALL_LANGUAGES } from "../../../shared/glossary.js";

/** Canonical stored value for glossary language wildcards (English source locale). */
export const GLOSSARY_ALL_LANGUAGES: string = SHARED_ALL_LANGUAGES;

export interface GlossaryTerm {
  id: number;
  source_language: string;
  target_language: string;
  source_text: string;
  target_text: string;
  created_at?: string;
  updated_at?: string;
  user_id?: string | null;
}

/** True when filter is empty, exact match, or the term uses the All Languages wildcard. */
export function glossaryLanguageMatchesFilter(termLang: string, filterLang: string): boolean {
  if (!filterLang) return true;
  if (filterLang === GLOSSARY_ALL_LANGUAGES) return termLang === GLOSSARY_ALL_LANGUAGES;
  return termLang === filterLang || termLang === GLOSSARY_ALL_LANGUAGES;
}

export const GLOSSARY_CSV_HEADERS = [
  "source_language",
  "target_language",
  "source_text",
  "target_text",
];

const XLSX_MIME = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

function normalizeKey(key: string): string {
  return String(key).trim().toLowerCase().replace(/\s+/g, "_");
}

function parseCsvLine(line: string): string[] {
  const out: string[] = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (ch === '"') {
      if (inQuotes && line[i + 1] === '"') {
        field += '"';
        i++;
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

function normalizeHeaders(headers: string[]): string[] {
  return headers.map(normalizeKey);
}

export function parseCsvToTerms(
  text: string,
  fallbackSrcLang: string,
  fallbackTgtLang: string,
): GlossaryTerm[] {
  const lines = text.split(/\r?\n/).filter((l) => l.trim());
  if (lines.length < 2) return [];
  const headers = normalizeHeaders(parseCsvLine(lines[0]));
  const has4Cols = headers.includes("source_language") && headers.includes("target_language");
  const terms: GlossaryTerm[] = [];
  for (let i = 1; i < lines.length; i++) {
    const vals = parseCsvLine(lines[i]);
    if (has4Cols) {
      const row: Record<string, string> = {};
      headers.forEach((h, idx) => {
        row[h] = vals[idx] != null ? String(vals[idx]).trim() : "";
      });
      if (row.source_text && row.target_text && row.source_language && row.target_language) {
        terms.push({
          id: 0,
          source_language: row.source_language,
          target_language: row.target_language,
          source_text: row.source_text,
          target_text: row.target_text,
        });
      }
    } else {
      const srcIdx = headers.indexOf("source_text");
      const tgtIdx = headers.indexOf("target_text");
      const s = srcIdx >= 0 ? (vals[srcIdx] ?? "").trim() : (vals[0] ?? "").trim();
      const tg = tgtIdx >= 0 ? (vals[tgtIdx] ?? "").trim() : (vals[1] ?? "").trim();
      if (s && tg && fallbackSrcLang && fallbackTgtLang) {
        terms.push({
          id: 0,
          source_language: fallbackSrcLang,
          target_language: fallbackTgtLang,
          source_text: s,
          target_text: tg,
        });
      }
    }
  }
  return terms;
}

export function parseXlsxToTerms(
  wb: XLSX.WorkBook,
  fallbackSrcLang: string,
  fallbackTgtLang: string,
): { terms: GlossaryTerm[]; is2col: boolean } {
  const sheetName = wb.SheetNames[0];
  const rows: Record<string, string>[] = XLSX.utils.sheet_to_json(wb.Sheets[sheetName], {
    defval: "",
  });
  if (!rows.length) return { terms: [], is2col: false };
  const keys = Object.keys(rows[0]).map(normalizeKey);
  const has4Cols = keys.includes("source_language") && keys.includes("target_language");
  const terms: GlossaryTerm[] = rows
    .map((row) => {
      const norm: Record<string, string> = {};
      Object.keys(row).forEach((k) => {
        norm[normalizeKey(k)] = String(row[k] ?? "").trim();
      });
      if (has4Cols) {
        return {
          id: 0,
          source_language: norm.source_language || "",
          target_language: norm.target_language || "",
          source_text: norm.source_text || "",
          target_text: norm.target_text || "",
        };
      }
      return {
        id: 0,
        source_language: fallbackSrcLang,
        target_language: fallbackTgtLang,
        source_text: norm.source_text || norm[keys[0]] || "",
        target_text: norm.target_text || norm[keys[1]] || "",
      };
    })
    .filter((t) => t.source_text && t.target_text && t.source_language && t.target_language);
  return { terms, is2col: !has4Cols };
}

export function termsToXlsx(terms: GlossaryTerm[]): Blob {
  const rows = terms.map((t) => ({
    source_language: t.source_language,
    target_language: t.target_language,
    source_text: t.source_text,
    target_text: t.target_text,
  }));
  const ws = XLSX.utils.json_to_sheet(rows);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Glossary");
  const arr = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  return new Blob([arr], { type: XLSX_MIME });
}

export function termsToCsv(terms: GlossaryTerm[]): Blob {
  const header = GLOSSARY_CSV_HEADERS.join(",");
  const rows = terms.map((t) =>
    [t.source_language, t.target_language, t.source_text, t.target_text]
      .map(escapeCsvCell)
      .join(","),
  );
  return new Blob([[header, ...rows].join("\r\n")], { type: "text/csv;charset=utf-8;" });
}

export function glossaryTemplateCsvBlob(): Blob {
  return new Blob([GLOSSARY_CSV_HEADERS.join(",") + "\r\n"], {
    type: "text/csv;charset=utf-8;",
  });
}

export function glossaryTemplateXlsxBlob(): Blob {
  const ws = XLSX.utils.aoa_to_sheet([GLOSSARY_CSV_HEADERS]);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Glossary");
  const arr = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  return new Blob([arr], { type: XLSX_MIME });
}
