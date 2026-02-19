import { useEffect } from "react";

/**
 * Registers keyboard shortcuts: Execute = Enter runs translate/rewrite,
 * Shift-Execute = Shift+Enter runs translate/rewrite. Escape clears input.
 */
export function useKeyboardShortcuts(handleRunAction, inputText, enterBehavior, clearInput) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key !== "Enter") {
        if (event.key === "Escape") {
          clearInput();
        }
        return;
      }

      const behavior = enterBehavior || "Execute";
      const hasText = !!inputText.trim();
      const isShiftExecute = behavior === "Shift-Execute";

      if (event.shiftKey) {
        if (isShiftExecute && hasText) {
          event.preventDefault();
          handleRunAction();
        }
      } else {
        if (!isShiftExecute && hasText) {
          event.preventDefault();
          handleRunAction();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [inputText, enterBehavior, handleRunAction, clearInput]);
}
