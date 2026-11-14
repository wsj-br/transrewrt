import { useEffect } from "react";

const WORKSPACE_INPUT_SELECTOR = '[data-panel="input"] textarea';

/** Place the caret in the workspace input after Escape clears it. */
function focusWorkspaceInput() {
  const input = document.querySelector(WORKSPACE_INPUT_SELECTOR);
  if (!(input instanceof HTMLTextAreaElement) || input.disabled) return;
  input.focus();
  const end = input.value.length;
  input.setSelectionRange(end, end);
}

/**
 * Registers keyboard shortcuts: Execute = Enter runs translate/rewrite,
 * Shift-Execute = Shift+Enter runs translate/rewrite. Escape clears input
 * and moves the caret to the input box.
 * Only active when currentView === "workspace" so Settings navigation doesn't trigger run/stop.
 */
export function useKeyboardShortcuts(
  handleRunAction,
  inputText,
  enterBehavior,
  clearInput,
  currentView = "workspace",
  onEscape,
) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (currentView !== "workspace") return;

      if (event.key !== "Enter") {
        if (event.key === "Escape") {
          if (typeof onEscape === "function" && onEscape()) {
            event.preventDefault();
            return;
          }
          clearInput();
          focusWorkspaceInput();
          requestAnimationFrame(focusWorkspaceInput);
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
  }, [inputText, enterBehavior, handleRunAction, clearInput, currentView, onEscape]);
}
