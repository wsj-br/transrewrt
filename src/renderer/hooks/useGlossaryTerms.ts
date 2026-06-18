import { useState, useEffect, useRef } from "react";
import { glossaryApi } from "../services/apiService";

export interface GlossaryTerm {
  id: number;
  source_language: string;
  target_language: string;
  source_text: string;
  target_text: string;
  created_at: string;
  updated_at: string;
  user_id: string | null;
}

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

  const fetch = async () => {
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
    } catch (err: any) {
      if (id !== fetchCount.current) return;
      setError(err?.message || "Failed to load glossary");
      setTerms([]);
    } finally {
      if (id === fetchCount.current) setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, [sourceLang, targetLang, enabled]);

  return { terms, loading, error, refresh: fetch };
}
