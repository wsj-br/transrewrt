import { useState, useEffect, useRef, useCallback } from "react";
import { glossaryApi } from "../services/apiService";
import type { GlossaryTerm } from "../utils/misc/glossaryUtils";

export type { GlossaryTerm };

/**
 * Fetches glossary terms for a given language pair.
 * Re-fetches when sourceLang/targetLang change or enabled toggles on.
 * Returns empty array silently when enabled=false.
 */
export function useGlossaryTerms(
  sourceLang: string | null,
  targetLang: string | null,
  enabled: boolean,
): { terms: GlossaryTerm[]; loading: boolean; error: string | null; refresh: () => void } {
  const [terms, setTerms] = useState<GlossaryTerm[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fetchCount = useRef(0);

  const fetch = useCallback(async () => {
    if (!enabled || !sourceLang || !targetLang || sourceLang === "Detect Language") {
      setTerms([]);
      return;
    }
    const id = ++fetchCount.current;
    setLoading(true);
    setError(null);
    try {
      const rows = await glossaryApi.getByLangPair(sourceLang, targetLang);
      if (id !== fetchCount.current) return;
      setTerms(Array.isArray(rows) ? rows : []);
    } catch (err) {
      if (id !== fetchCount.current) return;
      setError(err?.message || "Failed to load glossary");
      setTerms([]);
    } finally {
      if (id === fetchCount.current) setLoading(false);
    }
  }, [enabled, sourceLang, targetLang]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { terms, loading, error, refresh: fetch };
}
