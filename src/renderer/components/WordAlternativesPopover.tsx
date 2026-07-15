import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import type { WordAlternativeChoice } from "../utils/misc/wordAlternativeUtils";
import { wordAlternativeDisplayText } from "../utils/misc/wordAlternativeUtils";

const POPOVER_OFFSET = 4;
const VIEWPORT_PADDING = 8;

type WordAlternativesPopoverProps = {
  open: boolean;
  x: number;
  y: number;
  loading: boolean;
  alternatives: WordAlternativeChoice[];
  error: string | null;
  onDismiss: () => void;
  onSelect: (choice: WordAlternativeChoice) => void;
  /** Accessible label for the listbox. Defaults to "Word alternatives". */
  ariaLabel?: string;
};

export function WordAlternativesPopover({
  open,
  x,
  y,
  loading,
  alternatives,
  error,
  onDismiss,
  onSelect,
  ariaLabel,
}: WordAlternativesPopoverProps) {
  const { t } = useTranslation();
  const popoverRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ left: x, top: y });

  useLayoutEffect(() => {
    if (!open) return;
    const el = popoverRef.current;
    if (!el) {
      setCoords({ left: x + POPOVER_OFFSET, top: y + POPOVER_OFFSET });
      return;
    }
    const rect = el.getBoundingClientRect();
    let left = x + POPOVER_OFFSET;
    let top = y + POPOVER_OFFSET;
    if (left + rect.width > window.innerWidth - VIEWPORT_PADDING) {
      left = Math.max(VIEWPORT_PADDING, window.innerWidth - rect.width - VIEWPORT_PADDING);
    }
    if (top + rect.height > window.innerHeight - VIEWPORT_PADDING) {
      top = Math.max(VIEWPORT_PADDING, window.innerHeight - rect.height - VIEWPORT_PADDING);
    }
    setCoords({ left, top });
  }, [open, x, y, loading, alternatives.length, error]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (popoverRef.current?.contains(target)) return;
      onDismiss();
    };

    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
  }, [open, onDismiss]);

  if (!open) return null;

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-[10049]"
        aria-hidden
        onContextMenu={(e) => e.preventDefault()}
      />
      <div
        ref={popoverRef}
        role="listbox"
        aria-label={ariaLabel ?? t("Word alternatives")}
        className={cn(
          "fixed z-[10050] min-w-[10rem] max-w-[min(24rem,calc(100vw-16px))] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        )}
        style={{ left: coords.left, top: coords.top }}
        onContextMenu={(e) => e.preventDefault()}
      >
        {loading ? (
          <div className="px-3 py-2 text-sm text-muted-foreground">{t("Loading alternatives…")}</div>
        ) : error ? (
          <div className="px-3 py-2 text-sm text-destructive">{error}</div>
        ) : (
          alternatives.map((alt, index) => (
            <button
              key={`${wordAlternativeDisplayText(alt)}-${index}`}
              type="button"
              role="option"
              className="flex w-full cursor-default items-start rounded-sm px-3 py-2 text-left text-sm outline-none hover:bg-accent hover:text-accent-foreground"
              onClick={() => onSelect(alt)}
            >
              {wordAlternativeDisplayText(alt)}
            </button>
          ))
        )}
      </div>
    </>,
    document.body,
  );
}
