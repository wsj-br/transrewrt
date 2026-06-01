import { useState, useRef, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  formatPartialRunCostLabel,
  resolveRunCostLine,
} from "../utils/misc/formatUtils";
import { copyTextToClipboard } from "../utils/misc/clipboardUtils";

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
  rewriteMode,
  // Transform
  inputTextTransform,
  setOutputTextTransform,
  transformPrompts,
  transformPromptId,
  transformFromLang,
}) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [tokensPerSecond, setTokensPerSecond] = useState(0);
  const [lastRunCost, setLastRunCost] = useState(0);
  /** none: idle; amount/free/unknown: last completed run (for status line). */
  const [lastRunCostKind, setLastRunCostKind] = useState("none");
  const [lastRunModel, setLastRunModel] = useState(null);
  const [rewriteOutputIsModelResult, setRewriteOutputIsModelResult] = useState(false);
  const { t, i18n } = useTranslation();
  const locale = i18n.language || "en-GB";

  const isAbortMessage = useCallback((msg) => {
    if (msg == null || typeof msg !== "string") return false;
    const s = msg.toLowerCase();
    // Do not treat "failed to fetch" as user cancel - that is usually network/CORS/proxy.
    return s.includes("aborted") || s.includes("signal is aborted");
  }, []);

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
      // Do not abort fetch here: React 18 Strict Mode (dev) unmount/remount would cancel
      // in-flight translate/rewrite/transform and show a false "stopped by user" message.
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
      setOutputTextTranslate(t('Translating...'));
      setLastRunCost(0);
      setLastRunCostKind("none");
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
        const costLine = resolveRunCostLine({
          calculated_cost: result.calculated_cost,
          usage: result.usage,
          model_used: result.model_used || result.model || activeModel,
        });
        setLastRunCost(costLine.kind === "amount" ? costLine.value : 0);
        setLastRunCostKind(costLine.kind);
        setLastRunModel(result.model_used || result.model || null);

        if (cancelledByUserRef.current) return;

        if (result.content) {
          const cleaned = result.content.replace(/^\s*\n+/, "");
          setOutputTextTranslate(cleaned);
          if (settings.auto_copy) void copyTextToClipboard(cleaned).catch((err) => {
            console.warn("Auto-copy to clipboard failed:", err);
          });
        }
        if (result.cancelled) {
          if (cancelledByUserRef.current) {
            const msg = result.content
              ? `${t("Translation stopped by user.")}\n\n${t("Partial result captured ({{tokens}} tokens, {{cost}})", { tokens: totalTokens, cost: formatPartialRunCostLabel(result, locale, t) })}`
              : t("Translation stopped by user.");
            setOutputTextTranslate(msg);
          } else {
            setOutputTextTranslate(
              result.content
                ? `${t("The request ended before completion.")}\n\n${result.content}`
                : t("The request ended before completion. Try again."),
            );
          }
        } else if (result.error) {
          if (isAbortMessage(result.error)) {
            setOutputTextTranslate(t("Translation stopped by user."));
          } else {
            setOutputTextTranslate(t("Error: {{message}}", { message: result.error }));
          }
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
        const userAbort =
          cancelledByUserRef.current ||
          error.name === "AbortError" ||
          (error.message && isAbortMessage(error.message));
        if (userAbort) {
          setOutputTextTranslate(t("Translation stopped by user."));
        } else {
          setOutputTextTranslate(t("Error: {{message}}", { message: error.message }));
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
      t,
      locale,
      isAbortMessage,
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
      setOutputTextTranslate(t("Translation stopped by user."));
      if (abortControllerRef.current) abortControllerRef.current.abort();
      stopProcessing();
      return;
    }
    cancelledByUserRef.current = false;
    abortControllerRef.current = new AbortController();
    translateText(abortControllerRef.current.signal);
  }, [isProcessing, stopProcessing, translateText, setOutputTextTranslate, t]);

  const handleRewrite = useCallback(async () => {
    const text = inputTextRewrite;
    if (!text?.trim()) return;

    if (isProcessing) {
      cancelledByUserRef.current = true;
      setRewriteOutputIsModelResult(false);
      setOutputTextRewrite(t("Rewrite stopped by user."));
      if (abortControllerRef.current) abortControllerRef.current.abort();
      stopProcessing();
      return;
    }
    cancelledByUserRef.current = false;
    abortControllerRef.current = new AbortController();
    processingModeRef.current = "rewrite";

    setIsProcessing(true);
    setRewriteOutputIsModelResult(false);
    setOutputTextRewrite(t("rewriting..."));
    setLastRunCost(0);
    setLastRunCostKind("none");
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
        rewriteMode,
        activeModel,
        abortControllerRef.current.signal,
        sourceLanguage === "Detect Language" ? null : sourceLanguage,
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
      const rewriteCostLine = resolveRunCostLine({
        calculated_cost: result.calculated_cost,
        usage: result.usage,
        model_used: result.model_used || result.model || activeModel,
      });
      setLastRunCost(rewriteCostLine.kind === "amount" ? rewriteCostLine.value : 0);
      setLastRunCostKind(rewriteCostLine.kind);
      setLastRunModel(result.model_used || result.model || null);

      if (cancelledByUserRef.current) return;

      if (result.content) {
        const cleaned = result.content.replace(/^\s*\n+/, "");
        setRewriteOutputIsModelResult(true);
        setOutputTextRewrite(cleaned);
        if (settings.auto_copy) void copyTextToClipboard(cleaned).catch((err) => {
          console.warn("Auto-copy to clipboard failed:", err);
        });
      }
      if (result.cancelled) {
        setRewriteOutputIsModelResult(false);
        if (cancelledByUserRef.current) {
          const msg = result.content
            ? `${t("Rewrite stopped by user.")}\n\n${t("Partial result captured ({{tokens}} tokens, {{cost}})", { tokens: totalTokens, cost: formatPartialRunCostLabel(result, locale, t) })}`
            : t("Rewrite stopped by user.");
          setOutputTextRewrite(msg);
        } else {
          setOutputTextRewrite(
            result.content
              ? `${t("The request ended before completion.")}\n\n${result.content}`
              : t("The request ended before completion. Try again."),
          );
        }
      } else if (result.error) {
        setRewriteOutputIsModelResult(false);
        if (isAbortMessage(result.error)) {
          setOutputTextRewrite(t("Rewrite stopped by user."));
        } else {
          setOutputTextRewrite(t("Error: {{message}}", { message: result.error }));
        }
      }
    } catch (error) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      startTimeRef.current = null;
      setIsProcessing(false);
      setLastRunCost(0);
      setRewriteOutputIsModelResult(false);
      const userAbort =
        cancelledByUserRef.current ||
        error.name === "AbortError" ||
        (error.message && isAbortMessage(error.message));
      if (userAbort) {
        setOutputTextRewrite(t("Rewrite stopped by user."));
      } else {
        setOutputTextRewrite(t("Error: {{message}}", { message: error.message }));
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
    t,
    inputTextRewrite,
    rewriteMode,
    activeModel,
    sourceLanguage,
    isProcessing,
    settings.auto_copy,
    rewrite,
    locale,
    isAbortMessage,
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
        temperature: Number(selected.temperature) || 0.4,
        target_language: selected.target_language ?? null,
      };
      const workspaceFrom =
        sourceLanguage && sourceLanguage !== "Detect Language" ? sourceLanguage : null;
      const uiExplicit =
        transformFromLang && transformFromLang !== "Detect Language" ? transformFromLang : null;
      const statedFromLang = uiExplicit ?? workspaceFrom;

      processingModeRef.current = "transform";
      setIsProcessing(true);
      setOutputTextTransform(t('Transforming...'));
      setLastRunCost(0);
      setLastRunCostKind("none");
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
        const result = await transform(text, promptConfig, activeModel, signal, statedFromLang);

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
        const xfCostLine = resolveRunCostLine({
          calculated_cost: result.calculated_cost,
          usage: result.usage,
          model_used: result.model_used || result.model || activeModel,
        });
        setLastRunCost(xfCostLine.kind === "amount" ? xfCostLine.value : 0);
        setLastRunCostKind(xfCostLine.kind);
        setLastRunModel(result.model_used || result.model || null);

        if (cancelledByUserRef.current) return;

        if (result.content) {
          const cleaned = result.content.replace(/^\s*\n+/, "");
          setOutputTextTransform(cleaned);
          if (settings.auto_copy) void copyTextToClipboard(cleaned).catch((err) => {
            console.warn("Auto-copy to clipboard failed:", err);
          });
        }
        if (result.cancelled) {
          if (cancelledByUserRef.current) {
            setOutputTextTransform(
              result.content
                ? `${t("Transform stopped by user.")}\n\n${t("Partial result ({{tokens}} tokens, {{cost}})", { tokens: totalTokens, cost: formatPartialRunCostLabel(result, locale, t) })}`
                : t("Transform stopped by user."),
            );
          } else {
            setOutputTextTransform(
              result.content
                ? `${t("The request ended before completion.")}\n\n${result.content}`
                : t("The request ended before completion. Try again."),
            );
          }
        } else if (result.error) {
          if (isAbortMessage(result.error)) {
            setOutputTextTransform(t("Transform stopped by user."));
          } else {
            setOutputTextTransform(t("Error: {{message}}", { message: result.error }));
          }
        }
      } catch (err) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        startTimeRef.current = null;
        setIsProcessing(false);
        setLastRunCost(0);
        setLastRunCostKind("none");
        setLastRunModel(null);
        const userAbort =
          cancelledByUserRef.current ||
          err.name === "AbortError" ||
          (err.message && isAbortMessage(err.message));
        if (userAbort) {
          setOutputTextTransform(t("Transform stopped by user."));
        } else {
          setOutputTextTransform(t("Error: {{message}}", { message: err.message }));
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
      transformFromLang,
      sourceLanguage,
      activeModel,
      settings.auto_copy,
      transform,
      locale,
      t,
      isAbortMessage,
      setOutputTextTransform,
      setCurrentMode,
      updateSettings,
    ]
  );

  const handleTransform = useCallback(() => {
    if (isProcessing) {
      cancelledByUserRef.current = true;
      setOutputTextTransform(t("Transform stopped by user."));
      if (abortControllerRef.current) abortControllerRef.current.abort();
      stopProcessing();
      return;
    }
    cancelledByUserRef.current = false;
    abortControllerRef.current = new AbortController();
    runTransform(abortControllerRef.current.signal);
  }, [isProcessing, stopProcessing, runTransform, setOutputTextTransform, t]);

  const handleRunActionStartOnly = useCallback(() => {
    if (isProcessing) return;
    if (currentMode === "translate") handleTranslate();
    else if (currentMode === "rewrite") handleRewrite();
  }, [isProcessing, currentMode, handleTranslate, handleRewrite]);

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
    lastRunCostKind,
    lastRunModel,
    rewriteOutputIsModelResult,
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
