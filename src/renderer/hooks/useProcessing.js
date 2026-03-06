import { useState, useRef, useCallback, useEffect } from "react";

/**
 * Centralizes run/timer/cost state and handlers for translate, rewrite, and transform.
 * Caller provides API functions and mode-specific state/setters; hook returns processing
 * state and handlers that perform the API calls and update the provided setters.
 */
export function useProcessing({
  translate,
  rewrite,
  transform,
  activeModel,
  settings,
  updateSettings,
  setSetting,
  currentMode,
  setCurrentMode,
  // Translate
  inputTextTranslate,
  setOutputTextTranslate,
  targetLanguage,
  sourceLanguage,
  // Rewrite
  inputTextRewrite,
  setOutputTextRewrite,
  rewriteStyle,
  // Transform
  inputTextTransform,
  setOutputTextTransform,
  transformPrompts,
  transformPromptId,
  showTransformLangSelector,
  transformTargetLang,
}) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [tokensPerSecond, setTokensPerSecond] = useState(0);
  const [lastRunCost, setLastRunCost] = useState(0);
  const [lastRunModel, setLastRunModel] = useState(null);

  const timerRef = useRef(null);
  const tpsCalculationRef = useRef({ startTime: null, tokens: 0 });
  const startTimeRef = useRef(null);
  const abortControllerRef = useRef(null);
  const cancelledByUserRef = useRef(false);
  const processingModeRef = useRef(null);
  const currentModeRef = useRef(currentMode);

  useEffect(() => {
    currentModeRef.current = currentMode;
  }, [currentMode]);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, []);

  const stopProcessing = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    startTimeRef.current = null;
    setIsProcessing(false);
    abortControllerRef.current = null;
  }, []);

  const translateText = useCallback(
    async (signal) => {
      const text = inputTextTranslate;
      if (!text?.trim()) return;

      processingModeRef.current = "translate";
      setIsProcessing(true);
      setOutputTextTranslate("translating...");
      setLastRunCost(0);
      setLastRunModel(null);
      setElapsedTime(0);
      setTokensPerSecond(0);
      startTimeRef.current = Date.now();
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        if (!startTimeRef.current) return;
        setElapsedTime((Date.now() - startTimeRef.current) / 1000);
      }, 100);
      tpsCalculationRef.current = { startTime: Date.now(), tokens: 0 };

      try {
        const result = await translate(
          text,
          targetLanguage,
          activeModel,
          sourceLanguage === "Detect Language" ? null : sourceLanguage,
          signal
        );

        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        startTimeRef.current = null;
        setIsProcessing(false);

        const totalTokens =
          (result.usage?.prompt_tokens || 0) + (result.usage?.completion_tokens || 0);
        const durationSeconds = (Date.now() - tpsCalculationRef.current.startTime) / 1000;
        const tps = durationSeconds > 0 ? totalTokens / durationSeconds : 0;
        setTokensPerSecond(tps);
        setLastRunCost(result.calculated_cost ?? result.usage?.cost ?? 0);
        setLastRunModel(result.model_used || result.model || null);

        if (cancelledByUserRef.current) return;

        if (result.content) {
          const cleaned = result.content.replace(/^\s*\n+/, "");
          setOutputTextTranslate(cleaned);
          if (settings.auto_copy) navigator.clipboard.writeText(cleaned);
        }
        if (result.cancelled) {
          const msg = result.content
            ? `Translation stopped by user.\n\nPartial result captured (${totalTokens} tokens, ${result.calculated_cost ? "$" + result.calculated_cost.toFixed(5) : "free"})`
            : "Translation stopped by user.";
          setOutputTextTranslate(msg);
        } else if (result.error) {
          setOutputTextTranslate(`Error: ${result.error}`);
        }
      } catch (error) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        startTimeRef.current = null;
        setIsProcessing(false);
        setLastRunCost(0);
        setLastRunModel(null);
        const isAbort =
          error.name === "AbortError" ||
          (error.message && String(error.message).includes("Failed to fetch"));
        if (isAbort && !cancelledByUserRef.current) {
          setOutputTextTranslate("Translation stopped by user.");
        } else {
          setOutputTextTranslate(`Error: ${error.message}`);
        }
      } finally {
        abortControllerRef.current = null;
        processingModeRef.current = null;
        if (!cancelledByUserRef.current && currentModeRef.current !== "translate") {
          setCurrentMode("translate");
          updateSettings({ app_mode: "translate" });
        }
      }
    },
    [
      inputTextTranslate,
      targetLanguage,
      sourceLanguage,
      activeModel,
      settings.auto_copy,
      translate,
      setOutputTextTranslate,
      setCurrentMode,
      updateSettings,
    ]
  );

  const handleTranslate = useCallback(() => {
    if (isProcessing) {
      cancelledByUserRef.current = true;
      setOutputTextTranslate("Translation stopped by user.");
      if (abortControllerRef.current) abortControllerRef.current.abort();
      stopProcessing();
      return;
    }
    cancelledByUserRef.current = false;
    abortControllerRef.current = new AbortController();
    translateText(abortControllerRef.current.signal);
  }, [isProcessing, stopProcessing, translateText, setOutputTextTranslate]);

  const handleRewrite = useCallback(async () => {
    const text = inputTextRewrite;
    if (!text?.trim()) return;

    if (isProcessing) {
      cancelledByUserRef.current = true;
      setOutputTextRewrite("Rewrite stopped by user.");
      if (abortControllerRef.current) abortControllerRef.current.abort();
      stopProcessing();
      return;
    }
    cancelledByUserRef.current = false;
    abortControllerRef.current = new AbortController();
    processingModeRef.current = "rewrite";

    setIsProcessing(true);
    setOutputTextRewrite("rewriting...");
    setLastRunCost(0);
    setLastRunModel(null);
    setElapsedTime(0);
    setTokensPerSecond(0);
    startTimeRef.current = Date.now();
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!startTimeRef.current) return;
      setElapsedTime((Date.now() - startTimeRef.current) / 1000);
    }, 100);
    tpsCalculationRef.current = { startTime: Date.now(), tokens: 0 };

    try {
      const result = await rewrite(
        text,
        rewriteStyle,
        activeModel,
        abortControllerRef.current.signal
      );

      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      startTimeRef.current = null;
      setIsProcessing(false);

      const totalTokens =
        (result.usage?.prompt_tokens || 0) + (result.usage?.completion_tokens || 0);
      const durationSeconds = (Date.now() - tpsCalculationRef.current.startTime) / 1000;
      const tps = durationSeconds > 0 ? totalTokens / durationSeconds : 0;
      setTokensPerSecond(tps);
      setLastRunCost(result.calculated_cost ?? result.usage?.cost ?? 0);
      setLastRunModel(result.model_used || result.model || null);

      if (cancelledByUserRef.current) return;

      if (result.content) {
        const cleaned = result.content.replace(/^\s*\n+/, "");
        setOutputTextRewrite(cleaned);
        if (settings.auto_copy) navigator.clipboard.writeText(cleaned);
      }
      if (result.cancelled) {
        const msg = result.content
          ? `Rewrite stopped by user.\n\nPartial result captured (${totalTokens} tokens, ${result.calculated_cost ? "$" + result.calculated_cost.toFixed(5) : "free"})`
          : "Rewrite stopped by user.";
        setOutputTextRewrite(msg);
      } else if (result.error) {
        setOutputTextRewrite(`Error: ${result.error}`);
      }
    } catch (error) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      startTimeRef.current = null;
      setIsProcessing(false);
      setLastRunCost(0);
      const isAbort =
        error.name === "AbortError" ||
        (error.message && String(error.message).includes("Failed to fetch"));
      if (isAbort && !cancelledByUserRef.current) {
        setOutputTextRewrite("Rewrite stopped by user.");
      } else {
        setOutputTextRewrite(`Error: ${error.message}`);
      }
    } finally {
      abortControllerRef.current = null;
      processingModeRef.current = null;
      if (!cancelledByUserRef.current && currentModeRef.current !== "rewrite") {
        setCurrentMode("rewrite");
        updateSettings({ app_mode: "rewrite" });
      }
    }
  }, [
    inputTextRewrite,
    rewriteStyle,
    activeModel,
    isProcessing,
    settings.auto_copy,
    rewrite,
    setOutputTextRewrite,
    stopProcessing,
    setCurrentMode,
    updateSettings,
  ]);

  const runTransform = useCallback(
    async (signal) => {
      const text = inputTextTransform?.trim();
      if (!text) return;
      const selected = transformPrompts?.find(
        (p) => String(p.id) === String(transformPromptId) || p.name === transformPromptId
      );
      if (!selected) return;

      const promptConfig = {
        name: selected.name,
        role: selected.role,
        instructions: selected.instructions,
        output_description: selected.output_description ?? "transformed",
        temperature: Number(selected.temperature) ?? 0.4,
        target_language: selected.target_language ?? null,
      };
      const lang =
        showTransformLangSelector && transformTargetLang && transformTargetLang !== "Auto"
          ? transformTargetLang
          : null;

      processingModeRef.current = "transform";
      setIsProcessing(true);
      setOutputTextTransform("transforming...");
      setLastRunCost(0);
      setLastRunModel(null);
      setElapsedTime(0);
      setTokensPerSecond(0);
      startTimeRef.current = Date.now();
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        if (startTimeRef.current)
          setElapsedTime((Date.now() - startTimeRef.current) / 1000);
      }, 100);
      tpsCalculationRef.current = { startTime: Date.now(), tokens: 0 };

      try {
        const result = await transform(text, promptConfig, activeModel, lang, signal);

        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        startTimeRef.current = null;
        setIsProcessing(false);

        const totalTokens =
          (result.usage?.prompt_tokens || 0) + (result.usage?.completion_tokens || 0);
        const durationSec = (Date.now() - tpsCalculationRef.current.startTime) / 1000;
        const tps = durationSec > 0 ? totalTokens / durationSec : 0;
        setTokensPerSecond(tps);
        setLastRunCost(result.calculated_cost ?? result.usage?.cost ?? 0);
        setLastRunModel(result.model_used || result.model || null);

        if (cancelledByUserRef.current) return;

        if (result.content) {
          const cleaned = result.content.replace(/^\s*\n+/, "");
          setOutputTextTransform(cleaned);
          if (settings.auto_copy) navigator.clipboard.writeText(cleaned);
        }
        if (result.cancelled) {
          setOutputTextTransform(
            result.content
              ? `Transform stopped by user.\n\nPartial result (${totalTokens} tokens, ${result.calculated_cost ? "$" + result.calculated_cost.toFixed(5) : "free"})`
              : "Transform stopped by user."
          );
        } else if (result.error) {
          setOutputTextTransform(`Error: ${result.error}`);
        }
      } catch (err) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        startTimeRef.current = null;
        setIsProcessing(false);
        setLastRunCost(0);
        setLastRunModel(null);
        const isAbort =
          err.name === "AbortError" ||
          (err.message && String(err.message).includes("Failed to fetch"));
        if (isAbort && !cancelledByUserRef.current) {
          setOutputTextTransform("Transform stopped by user.");
        } else {
          setOutputTextTransform(`Error: ${err.message}`);
        }
      } finally {
        abortControllerRef.current = null;
        processingModeRef.current = null;
        if (!cancelledByUserRef.current && currentModeRef.current !== "transform") {
          setCurrentMode("transform");
          updateSettings({ app_mode: "transform" });
        }
      }
    },
    [
      inputTextTransform,
      transformPrompts,
      transformPromptId,
      showTransformLangSelector,
      transformTargetLang,
      activeModel,
      settings.auto_copy,
      transform,
      setOutputTextTransform,
      setCurrentMode,
      updateSettings,
    ]
  );

  const handleTransform = useCallback(() => {
    if (isProcessing) {
      cancelledByUserRef.current = true;
      setOutputTextTransform("Transform stopped by user.");
      if (abortControllerRef.current) abortControllerRef.current.abort();
      stopProcessing();
      return;
    }
    cancelledByUserRef.current = false;
    abortControllerRef.current = new AbortController();
    runTransform(abortControllerRef.current.signal);
  }, [isProcessing, stopProcessing, runTransform, setOutputTextTransform]);

  const runActionStartOnlyRef = useRef(null);
  runActionStartOnlyRef.current = () => {
    if (isProcessing) return;
    if (currentMode === "translate") handleTranslate();
    else if (currentMode === "rewrite") handleRewrite();
  };

  const handleRunActionStartOnly = useCallback(() => {
    runActionStartOnlyRef.current?.();
  }, []);

  const handleRunAction = useCallback(() => {
    if (isProcessing) {
      if (processingModeRef.current === "translate") handleTranslate();
      else if (processingModeRef.current === "rewrite") handleRewrite();
      else if (processingModeRef.current === "transform") handleTransform();
      return;
    }
    if (currentMode === "translate") handleTranslate();
    else if (currentMode === "rewrite") handleRewrite();
    else if (currentMode === "transform") handleTransform();
  }, [
    currentMode,
    isProcessing,
    handleTranslate,
    handleRewrite,
    handleTransform,
  ]);

  return {
    isProcessing,
    elapsedTime,
    tokensPerSecond,
    lastRunCost,
    lastRunModel,
    stopProcessing,
    handleTranslate,
    handleRewrite,
    runTransform,
    handleTransform,
    processingModeRef,
    handleRunAction,
    handleRunActionStartOnly,
  };
}
