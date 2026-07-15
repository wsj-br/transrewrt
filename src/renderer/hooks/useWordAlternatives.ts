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
import {
  getTextareaWordAnchor,
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

/**
 * Callback type supplied by the caller. It receives the selected phrase
 * and an AbortSignal, and must return an array of alternatives.
 */
export type WordAlternativesFetchFn = (
  phrase: string,
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

/**
 * Generic hook for managing a word-alternatives popover on any output TextPanel.
 * It is completely mode-agnostic: the caller supplies `onFetchAlternatives` and
 * the versions state setters so this hook can serve both Translate and Rewrite.
 */
export function useWordAlternatives({
  onFetchAlternatives,
  outputText,
  outputIsModelResult,
  isProcessing,
  versions,
  setVersions,
  setSelectedVersion,
  setOutputText,
  maxVersions,
  applyRunCostFromResult,
  autoCopy,
}: {
  onFetchAlternatives: WordAlternativesFetchFn;
  outputText: string;
  outputIsModelResult: boolean;
  isProcessing: boolean;
  versions: string[];
  setVersions: Dispatch<SetStateAction<string[]>>;
  setSelectedVersion: Dispatch<SetStateAction<number>>;
  setOutputText: (value: string) => void;
  maxVersions: number;
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
        const result = await onFetchAlternatives(phrase, controller.signal);

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
    [applyRunCostFromResult, dismiss, onFetchAlternatives, t],
  );

  const openWordAlternativesForTextarea = useCallback(
    (
      textarea: HTMLTextAreaElement,
      clientX?: number,
      clientY?: number,
    ): boolean => {
      if (!outputIsModelResult || isProcessing) return false;

      const anchor = getTextareaWordAnchor(textarea, outputText, clientX, clientY);
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
    [fetchAlternatives, isProcessing, outputText, outputIsModelResult],
  );

  const tryOpenWordAlternativesFromTextarea = useCallback((): boolean => {
    const textarea = outputTextareaRef.current;
    if (!textarea) return false;
    return openWordAlternativesForTextarea(textarea);
  }, [openWordAlternativesForTextarea]);

  const handleOutputContextMenu = useCallback(
    (event: MouseEvent<HTMLTextAreaElement>) => {
      if (!outputIsModelResult || isProcessing) return;

      const opened = openWordAlternativesForTextarea(
        event.currentTarget,
        event.clientX,
        event.clientY,
      );
      // Suppress the browser menu when we handled a word, or when the click was on empty space
      // (no word under the cursor) so the page does not show a confusing default menu.
      if (opened || event.currentTarget.selectionStart === event.currentTarget.selectionEnd) {
        event.preventDefault();
      }
    },
    [isProcessing, openWordAlternativesForTextarea, outputIsModelResult],
  );

  const applyAlternative = useCallback(
    (choice: WordAlternativeChoice) => {
      const range = rangeRef.current;
      if (!range) {
        dismiss();
        return;
      }

      const newText = applyWordAlternative(outputText, range, choice);

      if (versions.length < maxVersions) {
        setVersions((prev) => {
          const next = [...prev, newText];
          setSelectedVersion(next.length);
          return next;
        });
      } else {
        setVersions((prev) => [...prev.slice(0, -1), newText]);
        setSelectedVersion(maxVersions);
      }

      setOutputText(newText);
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
      maxVersions,
      outputText,
      setOutputText,
      setSelectedVersion,
      setVersions,
      versions.length,
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
