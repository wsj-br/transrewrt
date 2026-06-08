import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type MouseEvent,
  type SetStateAction,
} from "react";
import { useTranslation } from "react-i18next";
import { MAX_TRANSLATE_VERSIONS } from "../constants/translateVersions";
import {
  getTextareaExpandedSelectionAnchor,
  restoreTextareaSelection,
  textareaHasNonEmptySelection,
} from "../utils/misc/textSelectionUtils";
import { copyTextToClipboard } from "../utils/misc/clipboardUtils";
import { formatApiErrorLine } from "../utils/misc/apiErrorDisplay";
import {
  applyWordAlternative,
  type WordAlternativeChoice,
} from "../utils/misc/wordAlternativeUtils";

type Range = { start: number; end: number };

type TranslateWordAlternativesFn = (
  fullTranslation: string,
  phrase: string,
  originalText: string,
  targetLang: string,
  model: string,
  sourceLang: string | null,
  signal: AbortSignal | null,
) => Promise<{
  alternatives?: WordAlternativeChoice[];
  error?: string;
  cancelled?: boolean;
  calculated_cost?: number;
  usage?: Record<string, unknown>;
  model_used?: string;
  model?: string;
  duration_ms?: number;
}>;

export function useTranslateWordAlternatives({
  translateWordAlternatives,
  outputText,
  inputTextTranslate,
  sourceLanguage,
  targetLanguage,
  activeModel,
  isProcessing,
  translateOutputIsModelResult,
  translateVersions,
  setTranslateVersions,
  setSelectedTranslateVersion,
  setOutputTextTranslate,
  applyRunCostFromResult,
  autoCopy,
}: {
  translateWordAlternatives: TranslateWordAlternativesFn;
  outputText: string;
  inputTextTranslate: string;
  sourceLanguage: string;
  targetLanguage: string;
  activeModel: string;
  isProcessing: boolean;
  translateOutputIsModelResult: boolean;
  translateVersions: string[];
  setTranslateVersions: Dispatch<SetStateAction<string[]>>;
  setSelectedTranslateVersion: Dispatch<SetStateAction<number>>;
  setOutputTextTranslate: (value: string) => void;
  applyRunCostFromResult: (result: Record<string, unknown>) => void;
  autoCopy: boolean;
}) {
  const { t } = useTranslation();
  const outputTextareaRef = useRef<HTMLTextAreaElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const rangeRef = useRef<Range | null>(null);
  const selectionHighlightRef = useRef<Range | null>(null);

  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(false);
  const [alternatives, setAlternatives] = useState<WordAlternativeChoice[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [outputHasSelection, setOutputHasSelection] = useState(false);
  const [mountedOutputTextarea, setMountedOutputTextarea] = useState<HTMLTextAreaElement | null>(
    null,
  );

  const registerOutputTextarea = useCallback((node: HTMLTextAreaElement | null) => {
    outputTextareaRef.current = node;
    setMountedOutputTextarea(node);
    setOutputHasSelection(textareaHasNonEmptySelection(node));
  }, [outputTextareaRef]);

  useEffect(() => {
    const textarea = mountedOutputTextarea;
    if (!textarea) return;

    const onSelectionChange = () => {
      setOutputHasSelection(textareaHasNonEmptySelection(textarea));
    };
    textarea.addEventListener("select", onSelectionChange);
    textarea.addEventListener("keyup", onSelectionChange);
    textarea.addEventListener("mouseup", onSelectionChange);
    document.addEventListener("selectionchange", onSelectionChange);

    return () => {
      textarea.removeEventListener("select", onSelectionChange);
      textarea.removeEventListener("keyup", onSelectionChange);
      textarea.removeEventListener("mouseup", onSelectionChange);
      document.removeEventListener("selectionchange", onSelectionChange);
    };
  }, [mountedOutputTextarea]);

  useEffect(() => {
    if (!open) return;
    const textarea = outputTextareaRef.current;
    const range = selectionHighlightRef.current;
    if (!textarea || !range) return;
    restoreTextareaSelection(textarea, range.start, range.end);
  }, [open, loading, alternatives, error]);

  const dismiss = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    rangeRef.current = null;
    selectionHighlightRef.current = null;
    setOpen(false);
    setLoading(false);
    setAlternatives([]);
    setError(null);
  }, []);

  const fetchAlternatives = useCallback(
    async (phrase: string, range: Range) => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      rangeRef.current = range;

      setLoading(true);
      setAlternatives([]);
      setError(null);

      try {
        const result = await translateWordAlternatives(
          outputText,
          phrase,
          inputTextTranslate,
          targetLanguage,
          activeModel,
          sourceLanguage === "Detect Language" ? null : sourceLanguage,
          controller.signal,
        );

        if (controller.signal.aborted) return;

        if (result.cancelled) {
          dismiss();
          return;
        }

        applyRunCostFromResult(result);

        if (result.error) {
          setError(formatApiErrorLine(result.error, t));
          setLoading(false);
          return;
        }

        const alts = result.alternatives ?? [];
        if (alts.length < 2) {
          setError(t("No alternatives found"));
          setLoading(false);
          return;
        }

        setAlternatives(alts);
        setLoading(false);
      } catch (err) {
        if (controller.signal.aborted) return;
        setError(formatApiErrorLine((err as Error)?.message ?? String(err), t));
        setLoading(false);
      }
    },
    [
      activeModel,
      applyRunCostFromResult,
      dismiss,
      inputTextTranslate,
      outputText,
      sourceLanguage,
      t,
      targetLanguage,
      translateWordAlternatives,
    ],
  );

  const openWordAlternativesForTextarea = useCallback(
    (textarea: HTMLTextAreaElement): boolean => {
      if (!translateOutputIsModelResult || isProcessing) return false;

      const anchor = getTextareaExpandedSelectionAnchor(textarea, outputText);
      if (!anchor) return false;

      const range = { start: anchor.start, end: anchor.end };
      rangeRef.current = range;
      selectionHighlightRef.current = range;
      restoreTextareaSelection(textarea, range.start, range.end);

      setOpen(true);
      setPosition({ x: anchor.x, y: anchor.y });
      void fetchAlternatives(anchor.phrase, range);
      return true;
    },
    [fetchAlternatives, isProcessing, outputText, translateOutputIsModelResult],
  );

  const tryOpenWordAlternativesFromTextarea = useCallback((): boolean => {
    const textarea = outputTextareaRef.current;
    if (!textarea) return false;
    return openWordAlternativesForTextarea(textarea);
  }, [openWordAlternativesForTextarea]);

  const handleOutputContextMenu = useCallback(
    (event: MouseEvent<HTMLTextAreaElement>) => {
      if (!translateOutputIsModelResult || isProcessing) return;
      if (event.currentTarget.selectionStart === event.currentTarget.selectionEnd) return;

      if (!openWordAlternativesForTextarea(event.currentTarget)) return;
      event.preventDefault();
    },
    [isProcessing, openWordAlternativesForTextarea, translateOutputIsModelResult],
  );

  const applyAlternative = useCallback(
    (choice: WordAlternativeChoice) => {
      const range = rangeRef.current;
      if (!range) {
        dismiss();
        return;
      }

      const newText = applyWordAlternative(outputText, range, choice);

      if (translateVersions.length < MAX_TRANSLATE_VERSIONS) {
        setTranslateVersions((prev) => {
          const next = [...prev, newText];
          setSelectedTranslateVersion(next.length);
          return next;
        });
      } else {
        setTranslateVersions((prev) => [...prev.slice(0, -1), newText]);
        setSelectedTranslateVersion(MAX_TRANSLATE_VERSIONS);
      }

      setOutputTextTranslate(newText);
      if (autoCopy) {
        void copyTextToClipboard(newText).catch((err) => {
          console.warn("Auto-copy to clipboard failed:", err);
        });
      }
      dismiss();
    },
    [
      autoCopy,
      dismiss,
      outputText,
      setOutputTextTranslate,
      setSelectedTranslateVersion,
      setTranslateVersions,
      translateVersions.length,
    ],
  );

  const handleEscape = useCallback(() => {
    if (!open) return false;
    dismiss();
    return true;
  }, [dismiss, open]);

  return {
    popoverProps: {
      open,
      x: position.x,
      y: position.y,
      loading,
      alternatives,
      error,
      onDismiss: dismiss,
      onSelect: applyAlternative,
    },
    handleOutputContextMenu,
    tryOpenWordAlternativesFromTextarea,
    registerOutputTextarea,
    outputHasSelection,
    isPopoverOpen: open,
    handleEscape,
  };
}
