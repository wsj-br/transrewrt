import { useState, useRef, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  formatPartialRunCostLabel,
  resolveRunCostLine,
} from "../utils/misc/formatUtils";
import { copyTextToClipboard } from "../utils/misc/clipboardUtils";
import {
  buildActionErrorAlert,
  buildEmptyResultAlert,
  buildIncompleteRequestAlert,
  type ActionErrorAction,
  type EmptyResultKind,
} from "../utils/misc/apiErrorDisplay";
import { SOURCE_LOCALE } from "../i18n";
import { MAX_TRANSLATE_VERSIONS } from "../constants/translateVersions";

const MAX_REWRITE_VERSIONS = MAX_TRANSLATE_VERSIONS;

export type ActionErrorAlert = {
  title: string;
  message: string;
};

/**
 * Centralizes run/timer/cost state and handlers for translate, rewrite, and transform.
 * Caller provides API functions and mode-specific state/setters; hook returns processing
 * state and handlers that perform the API calls and update the provided setters.
 */
export function useProcessing({
  translate,
  translateAlternative,
  rewrite,
  rewriteAlternative,
  transform,
  activeModel,
  settings,
  updateSettings,
  currentMode,
  setCurrentMode,
  // Translate
  inputTextTranslate,
  outputTextTranslate,
  setOutputTextTranslate,
  targetLanguage,
  sourceLanguage,
  // Rewrite
  inputTextRewrite,
  outputTextRewrite,
  setOutputTextRewrite,
  rewriteMode,
  // Transform
  inputTextTransform,
  outputTextTransform,
  setOutputTextTransform,
  transformPrompts,
  transformPromptId,
  transformFromLang,
  glossaryTerms = [],
}) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [tokensPerSecond, setTokensPerSecond] = useState(0);
  const [lastRunCost, setLastRunCost] = useState(0);
  /** none: idle; amount/free/unknown: last completed run (for status line). */
  const [lastRunCostKind, setLastRunCostKind] = useState("none");
  const [lastRunModel, setLastRunModel] = useState(null);
  const [translateOutputIsModelResult, setTranslateOutputIsModelResult] = useState(false);
  const [translateVersions, setTranslateVersions] = useState([]);
  const [selectedTranslateVersion, setSelectedTranslateVersion] = useState(1);
  const [rewriteVersions, setRewriteVersions] = useState([]);
  const [selectedRewriteVersion, setSelectedRewriteVersion] = useState(1);
  const [rewriteOutputIsModelResult, setRewriteOutputIsModelResult] = useState(false);
  const [actionError, setActionError] = useState(null);
  const { t, i18n } = useTranslation();
  const locale = i18n.language || SOURCE_LOCALE;

  const clearActionError = useCallback(() => setActionError(null), []);

  const showActionError = useCallback(
    (action, rawMessage, status = null) => {
      setActionError(buildActionErrorAlert(action, rawMessage, t, status));
    },
    [t],
  );

  const showEmptyResultError = useCallback(
    (kind: EmptyResultKind, parentAction: ActionErrorAction = "translate") => {
      setActionError(buildEmptyResultAlert(kind, t, parentAction));
    },
    [t],
  );

  const showIncompleteRequestError = useCallback(
    (action: ActionErrorAction) => {
      setActionError(buildIncompleteRequestAlert(action, t));
    },
    [t],
  );

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
  const [processingMode, setProcessingMode] = useState(null);
  const setActiveProcessingMode = useCallback((mode) => {
    processingModeRef.current = mode;
    setProcessingMode(mode);
  }, []);
  const currentModeRef = useRef(currentMode);
  const translateVersionsRef = useRef([]);
  const rewriteVersionsRef = useRef([]);

  useEffect(() => {
    translateVersionsRef.current = translateVersions;
  }, [translateVersions]);

  useEffect(() => {
    rewriteVersionsRef.current = rewriteVersions;
  }, [rewriteVersions]);

  useEffect(() => {
    currentModeRef.current = currentMode;
  }, [currentMode]);

  useEffect(() => {
    if (!outputTextTranslate?.trim()) {
      setTranslateOutputIsModelResult(false);
      setTranslateVersions([]);
      setSelectedTranslateVersion(1);
    }
  }, [outputTextTranslate]);

  useEffect(() => {
    if (!outputTextRewrite?.trim()) {
      setRewriteOutputIsModelResult(false);
      setRewriteVersions([]);
      setSelectedRewriteVersion(1);
    }
  }, [outputTextRewrite]);

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

      const previousOutput = outputTextTranslate;

      setActiveProcessingMode("translate");
      setIsProcessing(true);
      setTranslateOutputIsModelResult(false);
      setTranslateVersions([]);
      setSelectedTranslateVersion(1);
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
          signal,
          null,
          glossaryTerms,
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
          setTranslateVersions([cleaned]);
          setSelectedTranslateVersion(1);
          setTranslateOutputIsModelResult(true);
          setOutputTextTranslate(cleaned);
          if (settings.auto_copy) void copyTextToClipboard(cleaned).catch((err) => {
            console.warn("Auto-copy to clipboard failed:", err);
          });
        } else if (!result.cancelled && !result.error) {
          setTranslateOutputIsModelResult(false);
          setTranslateVersions([]);
          setSelectedTranslateVersion(1);
          setOutputTextTranslate(previousOutput || "");
          showEmptyResultError("translate");
        }
        if (result.cancelled) {
          setTranslateOutputIsModelResult(false);
          setTranslateVersions([]);
          setSelectedTranslateVersion(1);
          if (cancelledByUserRef.current) {
            const msg = result.content
              ? `${t("Translation stopped by user.")}\n\n${t("Partial result captured ({{tokens}} tokens, {{cost}})", { tokens: totalTokens, cost: formatPartialRunCostLabel(result, locale, t) })}`
              : t("Translation stopped by user.");
            setOutputTextTranslate(msg);
          } else if (result.content) {
            const cleaned = result.content.replace(/^\s*\n+/, "");
            setTranslateVersions([cleaned]);
            setSelectedTranslateVersion(1);
            setTranslateOutputIsModelResult(true);
            setOutputTextTranslate(cleaned);
            showIncompleteRequestError("translate");
          } else {
            setOutputTextTranslate(previousOutput || "");
            showIncompleteRequestError("translate");
          }
        } else if (result.error) {
          setTranslateOutputIsModelResult(false);
          setTranslateVersions([]);
          setSelectedTranslateVersion(1);
          if (isAbortMessage(result.error)) {
            setOutputTextTranslate(t("Translation stopped by user."));
          } else {
            setOutputTextTranslate(previousOutput || "");
            showActionError("translate", result.error, result.status);
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
        setTranslateOutputIsModelResult(false);
        setTranslateVersions([]);
        setSelectedTranslateVersion(1);
        const userAbort =
          cancelledByUserRef.current ||
          error.name === "AbortError" ||
          (error.message && isAbortMessage(error.message));
        if (userAbort) {
          setOutputTextTranslate(t("Translation stopped by user."));
        } else {
          setOutputTextTranslate(previousOutput || "");
          showActionError("translate", error.message, error.status);
        }
      } finally {
        abortControllerRef.current = null;
        setActiveProcessingMode(null);
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
      showActionError,
    showEmptyResultError,
    showIncompleteRequestError,
      inputTextTranslate,
      outputTextTranslate,
      targetLanguage,
      sourceLanguage,
      activeModel,
      settings.auto_copy,
      translate,
      glossaryTerms,
      setOutputTextTranslate,
      setCurrentMode,
      updateSettings,
      setActiveProcessingMode,
    ]
  );

  const translateAlternativeText = useCallback(
    async (signal) => {
      const text = inputTextTranslate;
      const versions = translateVersionsRef.current;
      if (!text?.trim() || !versions.length || versions.length >= MAX_TRANSLATE_VERSIONS) return;

      const previousVersionText = versions[selectedTranslateVersion - 1] || versions[versions.length - 1];

      setActiveProcessingMode("translate_alternative");
      setIsProcessing(true);
      setOutputTextTranslate(t("Rephrasing..."));
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
        const result = await translateAlternative(
          text,
          versions,
          targetLanguage,
          activeModel,
          sourceLanguage === "Detect Language" ? null : sourceLanguage,
          signal,
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
          setTranslateVersions((prev) => {
            const next = [...prev, cleaned].slice(0, MAX_TRANSLATE_VERSIONS);
            setSelectedTranslateVersion(next.length);
            return next;
          });
          setTranslateOutputIsModelResult(true);
          setOutputTextTranslate(cleaned);
          if (settings.auto_copy) void copyTextToClipboard(cleaned).catch((err) => {
            console.warn("Auto-copy to clipboard failed:", err);
          });
        } else if (!result.cancelled && !result.error) {
          setTranslateOutputIsModelResult(true);
          setOutputTextTranslate(previousVersionText);
          showEmptyResultError("rephrase", "translate");
        }
        if (result.cancelled) {
          setTranslateOutputIsModelResult(true);
          if (cancelledByUserRef.current) {
            setOutputTextTranslate(previousVersionText);
          } else if (result.content) {
            const cleaned = result.content.replace(/^\s*\n+/, "");
            setOutputTextTranslate(cleaned);
            showIncompleteRequestError("translate");
          } else {
            setOutputTextTranslate(previousVersionText);
            showIncompleteRequestError("translate");
          }
        } else if (result.error) {
          setTranslateOutputIsModelResult(true);
          setOutputTextTranslate(previousVersionText);
          if (!isAbortMessage(result.error)) {
            showActionError("translate", result.error, result.status);
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
        setTranslateOutputIsModelResult(true);
        const userAbort =
          cancelledByUserRef.current ||
          error.name === "AbortError" ||
          (error.message && isAbortMessage(error.message));
        setOutputTextTranslate(previousVersionText);
        if (!userAbort) {
          showActionError("translate", error.message, error.status);
        }
      } finally {
        abortControllerRef.current = null;
        setActiveProcessingMode(null);
      }
    },
    [
      t,
      isAbortMessage,
      showActionError,
    showEmptyResultError,
    showIncompleteRequestError,
      inputTextTranslate,
      selectedTranslateVersion,
      targetLanguage,
      sourceLanguage,
      activeModel,
      settings.auto_copy,
      translateAlternative,
      setOutputTextTranslate,
      setActiveProcessingMode,
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

  const handleAlternative = useCallback(() => {
    if (isProcessing) {
      if (processingModeRef.current === "translate_alternative") {
        cancelledByUserRef.current = true;
        const versions = translateVersionsRef.current;
        const restore = versions[selectedTranslateVersion - 1];
        if (restore) setOutputTextTranslate(restore);
        if (abortControllerRef.current) abortControllerRef.current.abort();
        stopProcessing();
      }
      return;
    }
    if (translateVersionsRef.current.length >= MAX_TRANSLATE_VERSIONS) return;
    cancelledByUserRef.current = false;
    abortControllerRef.current = new AbortController();
    translateAlternativeText(abortControllerRef.current.signal);
  }, [isProcessing, stopProcessing, translateAlternativeText, selectedTranslateVersion, setOutputTextTranslate]);

  const handleTranslateVersionChange = useCallback(
    (version) => {
      const index = Number(version) - 1;
      if (index < 0 || index >= translateVersions.length) return;
      setSelectedTranslateVersion(Number(version));
      setOutputTextTranslate(translateVersions[index]);
    },
    [translateVersions, setOutputTextTranslate],
  );

  const handleRewrite = useCallback(async () => {
    const text = inputTextRewrite;
    if (!text?.trim()) return;

    if (isProcessing) {
      cancelledByUserRef.current = true;
      setRewriteOutputIsModelResult(false);
      setRewriteVersions([]);
      setSelectedRewriteVersion(1);
      setOutputTextRewrite(t("Rewrite stopped by user."));
      if (abortControllerRef.current) abortControllerRef.current.abort();
      stopProcessing();
      return;
    }
    cancelledByUserRef.current = false;
    abortControllerRef.current = new AbortController();
    setActiveProcessingMode("rewrite");

    const previousOutput = outputTextRewrite;

    setIsProcessing(true);
    setRewriteOutputIsModelResult(false);
    setRewriteVersions([]);
    setSelectedRewriteVersion(1);
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
        setRewriteVersions([cleaned]);
        setSelectedRewriteVersion(1);
        setRewriteOutputIsModelResult(true);
        setOutputTextRewrite(cleaned);
        if (settings.auto_copy) void copyTextToClipboard(cleaned).catch((err) => {
          console.warn("Auto-copy to clipboard failed:", err);
        });
      } else if (!result.cancelled && !result.error) {
        setRewriteOutputIsModelResult(false);
        setRewriteVersions([]);
        setSelectedRewriteVersion(1);
        setOutputTextRewrite(previousOutput || "");
        showEmptyResultError("rewrite");
      }
      if (result.cancelled) {
        setRewriteOutputIsModelResult(false);
        setRewriteVersions([]);
        setSelectedRewriteVersion(1);
        if (cancelledByUserRef.current) {
          const msg = result.content
            ? `${t("Rewrite stopped by user.")}\n\n${t("Partial result captured ({{tokens}} tokens, {{cost}})", { tokens: totalTokens, cost: formatPartialRunCostLabel(result, locale, t) })}`
            : t("Rewrite stopped by user.");
          setOutputTextRewrite(msg);
        } else if (result.content) {
          const cleaned = result.content.replace(/^\s*\n+/, "");
          setRewriteVersions([cleaned]);
          setSelectedRewriteVersion(1);
          setRewriteOutputIsModelResult(true);
          setOutputTextRewrite(cleaned);
          showIncompleteRequestError("rewrite");
        } else {
          setOutputTextRewrite(previousOutput || "");
          showIncompleteRequestError("rewrite");
        }
      } else if (result.error) {
        setRewriteOutputIsModelResult(false);
        setRewriteVersions([]);
        setSelectedRewriteVersion(1);
        if (isAbortMessage(result.error)) {
          setOutputTextRewrite(t("Rewrite stopped by user."));
        } else {
          setOutputTextRewrite(previousOutput || "");
          showActionError("rewrite", result.error, result.status);
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
      setRewriteVersions([]);
      setSelectedRewriteVersion(1);
      const userAbort =
        cancelledByUserRef.current ||
        error.name === "AbortError" ||
        (error.message && isAbortMessage(error.message));
      if (userAbort) {
        setOutputTextRewrite(t("Rewrite stopped by user."));
      } else {
        setOutputTextRewrite(previousOutput || "");
        showActionError("rewrite", error.message, error.status);
      }
    } finally {
      abortControllerRef.current = null;
      setActiveProcessingMode(null);
      if (!cancelledByUserRef.current && currentModeRef.current !== "rewrite") {
        setCurrentMode("rewrite");
        updateSettings({ app_mode: "rewrite" });
      }
    }
  }, [
    t,
    inputTextRewrite,
    outputTextRewrite,
    rewriteMode,
    activeModel,
    sourceLanguage,
    isProcessing,
    settings.auto_copy,
    rewrite,
    locale,
    isAbortMessage,
    showActionError,
    showEmptyResultError,
    showIncompleteRequestError,
    setOutputTextRewrite,
    stopProcessing,
    setCurrentMode,
    updateSettings,
    setActiveProcessingMode,
  ]);

  const rewriteAlternativeText = useCallback(
    async (signal) => {
      const text = inputTextRewrite;
      const versions = rewriteVersionsRef.current;
      if (!text?.trim() || !versions.length || versions.length >= MAX_REWRITE_VERSIONS) return;

      const previousVersionText = versions[selectedRewriteVersion - 1] || versions[versions.length - 1];

      setActiveProcessingMode("rewrite_alternative");
      setIsProcessing(true);
      setOutputTextRewrite(t("Rephrasing..."));
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
        const result = await rewriteAlternative(
          text,
          versions,
          rewriteMode,
          activeModel,
          sourceLanguage === "Detect Language" ? null : sourceLanguage,
          signal,
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
          setRewriteVersions((prev) => {
            const next = [...prev, cleaned].slice(0, MAX_REWRITE_VERSIONS);
            setSelectedRewriteVersion(next.length);
            return next;
          });
          setRewriteOutputIsModelResult(true);
          setOutputTextRewrite(cleaned);
          if (settings.auto_copy) void copyTextToClipboard(cleaned).catch((err) => {
            console.warn("Auto-copy to clipboard failed:", err);
          });
        } else if (!result.cancelled && !result.error) {
          setRewriteOutputIsModelResult(true);
          setOutputTextRewrite(previousVersionText);
          showEmptyResultError("rephrase", "rewrite");
        }
        if (result.cancelled) {
          setRewriteOutputIsModelResult(true);
          if (cancelledByUserRef.current) {
            setOutputTextRewrite(previousVersionText);
          } else if (result.content) {
            const cleaned = result.content.replace(/^\s*\n+/, "");
            setOutputTextRewrite(cleaned);
            showIncompleteRequestError("rewrite");
          } else {
            setOutputTextRewrite(previousVersionText);
            showIncompleteRequestError("rewrite");
          }
        } else if (result.error) {
          setRewriteOutputIsModelResult(true);
          setOutputTextRewrite(previousVersionText);
          if (!isAbortMessage(result.error)) {
            showActionError("rewrite", result.error, result.status);
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
        setRewriteOutputIsModelResult(true);
        const userAbort =
          cancelledByUserRef.current ||
          error.name === "AbortError" ||
          (error.message && isAbortMessage(error.message));
        setOutputTextRewrite(previousVersionText);
        if (!userAbort) {
          showActionError("rewrite", error.message, error.status);
        }
      } finally {
        abortControllerRef.current = null;
        setActiveProcessingMode(null);
      }
    },
    [
      t,
      isAbortMessage,
      showActionError,
    showEmptyResultError,
    showIncompleteRequestError,
      inputTextRewrite,
      selectedRewriteVersion,
      rewriteMode,
      sourceLanguage,
      activeModel,
      settings.auto_copy,
      rewriteAlternative,
      setOutputTextRewrite,
      setActiveProcessingMode,
    ],
  );

  const handleRewriteAlternative = useCallback(() => {
    if (isProcessing) {
      if (processingModeRef.current === "rewrite_alternative") {
        cancelledByUserRef.current = true;
        const versions = rewriteVersionsRef.current;
        const restore = versions[selectedRewriteVersion - 1];
        if (restore) setOutputTextRewrite(restore);
        if (abortControllerRef.current) abortControllerRef.current.abort();
        stopProcessing();
      }
      return;
    }
    if (rewriteVersionsRef.current.length >= MAX_REWRITE_VERSIONS) return;
    cancelledByUserRef.current = false;
    abortControllerRef.current = new AbortController();
    rewriteAlternativeText(abortControllerRef.current.signal);
  }, [
    isProcessing,
    stopProcessing,
    rewriteAlternativeText,
    selectedRewriteVersion,
    setOutputTextRewrite,
  ]);

  const handleRewriteVersionChange = useCallback(
    (version) => {
      const index = Number(version) - 1;
      if (index < 0 || index >= rewriteVersions.length) return;
      setSelectedRewriteVersion(Number(version));
      setOutputTextRewrite(rewriteVersions[index]);
    },
    [rewriteVersions, setOutputTextRewrite],
  );

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

      const previousOutput = outputTextTransform;

      setActiveProcessingMode("transform");
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
        } else if (!result.cancelled && !result.error) {
          setOutputTextTransform(previousOutput || "");
          showEmptyResultError("transform");
        }
        if (result.cancelled) {
          if (cancelledByUserRef.current) {
            setOutputTextTransform(
              result.content
                ? `${t("Transform stopped by user.")}\n\n${t("Partial result ({{tokens}} tokens, {{cost}})", { tokens: totalTokens, cost: formatPartialRunCostLabel(result, locale, t) })}`
                : t("Transform stopped by user."),
            );
          } else if (result.content) {
            const cleaned = result.content.replace(/^\s*\n+/, "");
            setOutputTextTransform(cleaned);
            showIncompleteRequestError("transform");
          } else {
            setOutputTextTransform(previousOutput || "");
            showIncompleteRequestError("transform");
          }
        } else if (result.error) {
          if (isAbortMessage(result.error)) {
            setOutputTextTransform(t("Transform stopped by user."));
          } else {
            setOutputTextTransform(previousOutput || "");
            showActionError("transform", result.error, result.status);
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
          setOutputTextTransform(previousOutput || "");
          showActionError("transform", err.message, err.status);
        }
      } finally {
        abortControllerRef.current = null;
        setActiveProcessingMode(null);
        if (!cancelledByUserRef.current && currentModeRef.current !== "transform") {
          setCurrentMode("transform");
          updateSettings({ app_mode: "transform" });
        }
      }
    },
    [
      inputTextTransform,
      outputTextTransform,
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
      showActionError,
    showEmptyResultError,
    showIncompleteRequestError,
      setOutputTextTransform,
      setCurrentMode,
      updateSettings,
      setActiveProcessingMode,
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

  const applyRunCostFromResult = useCallback(
    (result) => {
      const totalTokens =
        (result.usage?.prompt_tokens || 0) + (result.usage?.completion_tokens || 0);
      const durationSeconds = result.duration_ms ? result.duration_ms / 1000 : 0;
      const tps = durationSeconds > 0 ? totalTokens / durationSeconds : 0;
      setTokensPerSecond(tps);
      const costLine = resolveRunCostLine({
        calculated_cost: result.calculated_cost,
        usage: result.usage,
        model_used: result.model_used || result.model || activeModel,
      });
      setLastRunCost(costLine.kind === "amount" ? costLine.value : 0);
      setLastRunCostKind(costLine.kind);
      setLastRunModel(result.model_used || result.model || activeModel);
    },
    [activeModel],
  );

  const handleRunAction = useCallback(() => {
    if (isProcessing) {
      if (processingModeRef.current === "translate") handleTranslate();
      else if (processingModeRef.current === "translate_alternative") handleAlternative();
      else if (processingModeRef.current === "rewrite") handleRewrite();
      else if (processingModeRef.current === "rewrite_alternative") handleRewriteAlternative();
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
    handleAlternative,
    handleRewrite,
    handleRewriteAlternative,
    handleTransform,
  ]);

  return {
    isProcessing,
    elapsedTime,
    tokensPerSecond,
    lastRunCost,
    lastRunCostKind,
    lastRunModel,
    translateOutputIsModelResult,
    translateVersions,
    selectedTranslateVersion,
    setTranslateVersions,
    setSelectedTranslateVersion,
    setTranslateOutputIsModelResult,
    applyRunCostFromResult,
    rewriteOutputIsModelResult,
    rewriteVersions,
    selectedRewriteVersion,
    setRewriteVersions,
    setSelectedRewriteVersion,
    actionError,
    clearActionError,
    stopProcessing,
    handleTranslate,
    handleAlternative,
    handleTranslateVersionChange,
    handleRewrite,
    handleRewriteAlternative,
    handleRewriteVersionChange,
    runTransform,
    handleTransform,
    processingMode,
    handleRunAction,
    handleRunActionStartOnly,
  };
}
