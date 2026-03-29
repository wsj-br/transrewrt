import fs from "fs";
import Papa from "papaparse";
import { GlossaryTerm } from "./types";

export class Glossary {
  private terms: Map<string, GlossaryTerm> = new Map();

  /**
   * @param glossaryUiPath - `strings.json` (i18n extract + generate-translations) or legacy UI glossary CSV
   * @param glossaryUserPath - optional user CSV (en, locale, translation)
   * @param targetLocales - doc target locales; used to expand user-glossary `locale: *`
   */
  constructor(
    glossaryUiPath: string,
    glossaryUserPath?: string,
    targetLocales: string[] = []
  ) {
    if (fs.existsSync(glossaryUiPath)) {
      if (this.looksLikeStringsJson(glossaryUiPath)) {
        this.loadGlossaryFromStringsJson(glossaryUiPath);
      } else {
        this.loadGlossaryUiCsv(glossaryUiPath);
      }
    } else {
      console.warn(`Glossary file not found: ${glossaryUiPath}`);
    }
    if (glossaryUserPath && fs.existsSync(glossaryUserPath)) {
      this.loadGlossaryUser(glossaryUserPath, targetLocales);
    }
  }

  private looksLikeStringsJson(filepath: string): boolean {
    if (filepath.toLowerCase().endsWith(".json")) return true;
    try {
      const head = fs.readFileSync(filepath, "utf-8").trimStart().slice(0, 1);
      return head === "{";
    } catch {
      return false;
    }
  }

  /**
   * Load UI glossary from `src/renderer/locales/strings.json`
   * (shape: `{ [id]: { source, translated: { [locale]: string } } }`).
   */
  private loadGlossaryFromStringsJson(filepath: string): void {
    const raw = JSON.parse(fs.readFileSync(filepath, "utf-8")) as Record<
      string,
      unknown
    >;
    let count = 0;
    for (const value of Object.values(raw)) {
      if (!value || typeof value !== "object") continue;
      const rec = value as { source?: unknown; translated?: unknown };
      const source =
        typeof rec.source === "string" ? rec.source.trim() : "";
      if (!source) continue;
      const translatedRaw = rec.translated;
      const translations: Record<string, string> = {};
      if (translatedRaw && typeof translatedRaw === "object") {
        for (const [loc, text] of Object.entries(
          translatedRaw as Record<string, unknown>
        )) {
          if (typeof text === "string" && text.trim()) {
            translations[loc] = text.trim();
          }
        }
      }
      if (Object.keys(translations).length === 0) continue;
      const term: GlossaryTerm = {
        english: source,
        translations,
        partOfSpeech: "unknown",
      };
      this.terms.set(source.toLowerCase(), term);
      count++;
    }
    console.log(`✓ Loaded ${count} glossary terms from strings.json (UI)`);
  }

  private loadGlossaryUiCsv(filepath: string): void {
    const content = fs.readFileSync(filepath, "utf-8");
    const { data } = Papa.parse<Record<string, string>>(content, {
      header: true,
      skipEmptyLines: true,
    });

    for (const row of data) {
      const english = row["en"]?.trim();
      if (!english) continue;

      const term: GlossaryTerm = {
        english,
        translations: {},
        partOfSpeech: "unknown",
      };

      for (const [col, val] of Object.entries(row)) {
        if (col === "en" || !val?.trim()) continue;
        term.translations[col] = val.trim();
      }

      this.terms.set(english.toLowerCase(), term);
    }

    console.log(`✓ Loaded ${this.terms.size} glossary terms from UI CSV`);
  }

  /**
   * User glossary (en, locale, translation) — overrides UI entries.
   * When locale is "*", apply to every code in `targetLocales` (same as `locales.targets` in translate.config).
   */
  private loadGlossaryUser(
    filepath: string,
    targetLocales: string[]
  ): void {
    const content = fs.readFileSync(filepath, "utf-8");
    const { data } = Papa.parse<Record<string, string>>(content, {
      header: true,
      skipEmptyLines: true,
    });

    let count = 0;
    let warnedEmptyStarTargets = false;
    for (const row of data) {
      const english = row["en"]?.trim();
      const locale = row["locale"]?.trim();
      const translation = row["translation"]?.trim();
      if (!english || !locale || !translation) continue;

      const key = english.toLowerCase();
      let term = this.terms.get(key);
      if (!term) {
        term = {
          english,
          translations: {},
          partOfSpeech: "unknown",
        };
        this.terms.set(key, term);
      }

      if (locale === "*") {
        if (targetLocales.length === 0) {
          if (!warnedEmptyStarTargets) {
            console.warn(
              "Glossary user-glossary: rows with locale \"*\" were skipped (locales.targets is empty)."
            );
            warnedEmptyStarTargets = true;
          }
          continue;
        }
        for (const loc of targetLocales) {
          term.translations[loc] = translation;
        }
      } else {
        term.translations[locale] = translation;
      }
      count++;
    }

    if (count > 0) {
      console.log(`✓ Loaded ${count} user glossary overrides`);
    }
  }

  /**
   * Find glossary terms in text and return translation hints
   */
  findTermsInText(text: string, locale: string): string[] {
    const hints: string[] = [];
    const textLower = text.toLowerCase();

    const sortedTerms = Array.from(this.terms.entries()).sort(
      (a, b) => b[0].length - a[0].length
    );

    const matchedPositions = new Set<number>();

    for (const [termLower, term] of sortedTerms) {
      const translation = term.translations[locale];
      if (!translation) continue;

      let index = 0;
      while ((index = textLower.indexOf(termLower, index)) !== -1) {
        const beforeChar = index > 0 ? textLower[index - 1] : " ";
        const afterChar = textLower[index + termLower.length] || " ";
        const isWordBoundary =
          /[\s\p{P}]/u.test(beforeChar) && /[\s\p{P}]/u.test(afterChar);

        if (!isWordBoundary) {
          index++;
          continue;
        }

        const positions = Array.from(
          { length: termLower.length },
          (_, i) => index + i
        );
        const hasOverlap = positions.some((pos) => matchedPositions.has(pos));

        if (!hasOverlap) {
          hints.push(`- "${term.english}" → "${translation}"`);
          positions.forEach((pos) => matchedPositions.add(pos));
          break;
        }

        index++;
      }
    }

    return hints;
  }

  getTranslation(englishTerm: string, locale: string): string | undefined {
    const term = this.terms.get(englishTerm.toLowerCase());
    return term?.translations[locale];
  }

  get size(): number {
    return this.terms.size;
  }
}
