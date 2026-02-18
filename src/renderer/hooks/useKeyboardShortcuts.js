import { useEffect } from "react";

/**
 * Registers global keyboard shortcuts for run action (Ctrl+Enter, Enter by setting),
 * and Escape to clear input.
 */
export function useKeyboardShortcuts(handleRunAction, inputText, enterBehavior, clearInput) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
        event.preventDefault();
        handleRunAction();
      }

      if (event.key === "Enter" && !event.ctrlKey && !event.metaKey) {
        const behavior = enterBehavior || "Execute";
        const hasText = inputText.trim();
        const isExecute = behavior === "Execute" || behavior === "Translate";
        const isShiftExecute = behavior === "Shift-Execute" || behavior === "Shift-Translate";

        if (isExecute && hasText) {
          event.preventDefault();
          handleRunAction();
        } else if (isShiftExecute && event.shiftKey && hasText) {
          event.preventDefault();
          handleRunAction();
        }
      }

      if (event.key === "Escape") {
        clearInput();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [inputText, enterBehavior, handleRunAction, clearInput]);
}
