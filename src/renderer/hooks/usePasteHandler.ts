import { useRef, useEffect } from "react";

/**
 * Provides paste handling: pasteToInput (read clipboard and set text, optionally auto-run),
 * handlePasteEvent (for programmatic paste with auto-run). Returns shouldAutoProcessRef
 * for use by the input sync effect (to trigger handleRunAction after inputText updates).
 */
export function usePasteHandler(setInputText, handleRunAction, inputText, autoTranslateOnPaste) {
  const shouldAutoProcessRef = useRef(false);

  const pasteToInput = () => {
    const clipboard = typeof navigator !== "undefined" ? navigator.clipboard : null;
    if (!clipboard || typeof clipboard.readText !== "function") {
      console.warn("Clipboard API not available (requires secure context)");
      return;
    }
    clipboard
      .readText()
      .then((text) => {
        setInputText(text);
        if (text.trim() && autoTranslateOnPaste !== false) {
          setTimeout(() => {
            handleRunAction();
          }, 150);
        }
      })
      .catch((err) => {
        console.error("Failed to read clipboard contents: ", err);
      });
  };

  const handlePasteEvent = (pastedText) => {
    if (pastedText && pastedText.trim() && autoTranslateOnPaste !== false) {
      shouldAutoProcessRef.current = true;
    }
  };

  // When inputText changes and paste requested auto-process, run action after a tick
  useEffect(() => {
    if (shouldAutoProcessRef.current && inputText.trim()) {
      shouldAutoProcessRef.current = false;
      const t = setTimeout(() => {
        handleRunAction();
      }, 50);
      return () => clearTimeout(t);
    }
  }, [inputText, handleRunAction]);

  return { pasteToInput, handlePasteEvent, shouldAutoProcessRef };
}
