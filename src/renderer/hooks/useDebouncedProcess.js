import { useEffect, useRef } from "react";

/**
 * Keeps inputTextRef in sync with inputText and runs debounced process when
 * real_time_translation is enabled (translate mode only). Skips debounce when
 * shouldAutoProcessRef is set (paste handler will run action directly).
 * Transform and rewrite do not use real-time; only translate does.
 */
export function useDebouncedProcess(
  inputText,
  handleRunAction,
  realTimeTranslation,
  realTimeDelay,
  shouldAutoProcessRef,
  currentMode = "translate"
) {
  const inputTextRef = useRef("");
  const settingsRef = useRef({ real_time_delay: realTimeDelay });
  const debounceRef = useRef(null);

  settingsRef.current = { real_time_delay: realTimeDelay ?? 1000 };

  useEffect(() => {
    inputTextRef.current = inputText;
  }, [inputText]);

  useEffect(() => {
    if (currentMode !== "translate") return; // real-time only for translate
    if (realTimeTranslation !== true) return;
    if (shouldAutoProcessRef?.current) return; // paste handler will run action
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    const delay = settingsRef.current.real_time_delay ?? 1000;
    debounceRef.current = setTimeout(() => {
      if (inputTextRef.current?.trim()) {
        handleRunAction();
      }
    }, delay);
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [inputText, realTimeTranslation, handleRunAction, currentMode]);
}
