import { useState, useEffect } from "react";
import webAPI from "../utils/webApiClient";
import { resolveDuplicateNames } from "../utils/promptUtils";
import { formatElapsedMmSs } from "../utils/formatUtils";
import samplePromptsData from "../../../config/transform-prompts.json";

function getCustomPromptsApi() {
  return typeof window !== "undefined" && window.electronAPI?.customPrompts
    ? window.electronAPI.customPrompts
    : webAPI.customPrompts;
}

/**
 * Manages transform prompts list, selection, edit mode, CRUD, load sample, and test panel state.
 * Caller provides settings, updateSettings, setSetting, setError, setCurrentView, and optionally isWeb.
 */
export function useTransformPrompts({
  settings,
  updateSettings,
  setSetting,
  setError,
  setCurrentView,
  isWeb,
  currentMode,
  currentView,
  transform,
  activeModel,
}) {
  const [transformPrompts, setTransformPrompts] = useState([]);
  const [transformPromptId, setTransformPromptId] = useState(
    () => settings?.transform_prompt ?? null
  );
  const [transformEditMode, setTransformEditMode] = useState(false);
  const [editingPrompt, setEditingPrompt] = useState(null);
  const [inputTextTransform, setInputTextTransform] = useState("");
  const [outputTextTransform, setOutputTextTransform] = useState("");
  const [transformTargetLang, setTransformTargetLang] = useState("");
  const [transformTestInput, setTransformTestInput] = useState("");
  const [transformTestOutput, setTransformTestOutput] = useState("");
  const [transformTestMeta, setTransformTestMeta] = useState("");
  const [transformTestRunning, setTransformTestRunning] = useState(false);
  const [transformEditorDraft, setTransformEditorDraft] = useState(null);
  const [transformPromptToDelete, setTransformPromptToDelete] = useState(null);
  const [showLoadSampleConfirm, setShowLoadSampleConfirm] = useState(false);
  const [loadSampleLoading, setLoadSampleLoading] = useState(false);

  // Sync transform_prompt from settings (skip when current selection is valid but settings may be stale, e.g. just saved a new prompt)
  useEffect(() => {
    if (settings?.transform_prompt === undefined) return;
    const matchByCurrent = transformPrompts.find(
      (p) => String(p.id) === String(transformPromptId) || p.name === transformPromptId
    );
    if (matchByCurrent && matchByCurrent.name !== settings.transform_prompt) return;
    setTransformPromptId(settings.transform_prompt);
  }, [settings?.transform_prompt, transformPrompts, transformPromptId]);

  // Load custom prompts when showing the transform workspace
  useEffect(() => {
    if (currentMode !== "transform" || currentView !== "workspace") return;
    const api = getCustomPromptsApi();
    if (!api?.getAll) return;
    api
      .getAll()
      .then((list) => setTransformPrompts(Array.isArray(list) ? list : []))
      .catch(() => setTransformPrompts([]));
  }, [currentMode, currentView]);

  // When prompts load: reselect last used or select first
  useEffect(() => {
    if (transformPrompts.length === 0) return;
    const match = transformPrompts.find(
      (p) => String(p.id) === String(transformPromptId) || p.name === transformPromptId
    );
    if (!match) {
      const first = transformPrompts[0];
      setTransformPromptId(first.id);
      updateSettings({ transform_prompt: first.name });
    }
  }, [transformPrompts, transformPromptId, updateSettings]);

  const handleTransformPromptSelect = (id, name) => {
    setTransformPromptId(id);
    updateSettings({ transform_prompt: name ?? id });
    setTransformTargetLang("");
  };

  const handleTransformNewPrompt = () => {
    setEditingPrompt(null);
    setTransformEditMode(true);
  };

  const handleTransformEditPrompt = (prompt) => {
    setEditingPrompt(prompt ?? null);
    setTransformEditMode(true);
  };

  const handleTransformDuplicate = async (prompt) => {
    if (!prompt) return;
    const api = getCustomPromptsApi();
    if (!api) return;
    const baseName = (prompt.name || "Prompt").trim();
    let copyName = `${baseName} (copy)`;
    const existingNames = new Set(transformPrompts.map((p) => p.name));
    for (let n = 2; existingNames.has(copyName); n++) {
      copyName = `${baseName} (copy ${n})`;
    }
    try {
      const instructions =
        typeof prompt.instructions === "string"
          ? prompt.instructions
          : JSON.stringify(prompt.instructions || []);
      const res = await api.create({
        name: copyName,
        role: prompt.role || "",
        instructions,
        output_description: prompt.output_description ?? "transformed",
        temperature: Number(prompt.temperature) ?? 0.4,
        target_language: prompt.target_language ?? null,
      });
      if (res?.error) throw new Error(res.error);
      const list = await api.getAll();
      setTransformPrompts(Array.isArray(list) ? list : []);
      const added = Array.isArray(list) ? list.find((p) => p.name === copyName) : null;
      if (added) {
        setTransformPromptId(added.id);
        updateSettings({ transform_prompt: added.name });
        setEditingPrompt(added);
        setTransformEditMode(true);
      }
    } catch (err) {
      console.error("Duplicate prompt failed:", err);
      setError(err?.message || "Failed to duplicate prompt");
    }
  };

  const handleTransformBackToRun = () => {
    setTransformEditMode(false);
    setEditingPrompt(null);
  };

  const handleOpenExportImportPrompts = () => {
    updateSettings({ settings_active_tab: "transform" });
    setCurrentView("settings");
    if (isWeb) setSetting("web_view", "settings");
  };

  const handleConfirmLoadSamplePrompts = async () => {
    setLoadSampleLoading(true);
    setShowLoadSampleConfirm(false);
    try {
      const api = getCustomPromptsApi();
      const list = Array.isArray(samplePromptsData) ? samplePromptsData : [];
      const normalized = list
        .filter((p) => p?.name)
        .map(({ id, ...rest }) => ({
          ...rest,
          target_language:
            rest.target_language === true ||
            rest.target_language === 1 ||
            (typeof rest.target_language === "string" &&
              rest.target_language.trim() !== "" &&
              rest.target_language !== "0"),
        }));
      if (normalized.length === 0) {
        setError("No prompts in sample file.");
        return;
      }
      const existing = await api.getAll().catch(() => []);
      const existingNames = (Array.isArray(existing) ? existing : [])
        .map((p) => p?.name)
        .filter(Boolean);
      const toImport = resolveDuplicateNames(existingNames, normalized);
      await api.import(toImport, "merge");
      const next = await api.getAll();
      setTransformPrompts(Array.isArray(next) ? next : []);
      if (
        next?.length > 0 &&
        !transformPrompts.find((p) => String(p.id) === String(transformPromptId))
      ) {
        setTransformPromptId(next[0].id);
        updateSettings({ transform_prompt: next[0].name });
      }
    } catch (err) {
      setError(err?.message || "Failed to load sample prompts");
    } finally {
      setLoadSampleLoading(false);
    }
  };

  const handleTransformSave = async (payload) => {
    const api = getCustomPromptsApi();
    if (!api) return;
    try {
      if (editingPrompt?.id != null) {
        const res = await api.update(editingPrompt.id, payload);
        if (res?.error) throw new Error(res.error);
      } else {
        const res = await api.create(payload);
        if (res?.error) throw new Error(res.error);
        const newId = res?.id;
        if (newId != null) {
          const list = await api.getAll();
          const added = Array.isArray(list)
            ? list.find((p) => p.id === newId || p.name === payload.name)
            : null;
          if (added) {
            setTransformPromptId(added.id);
            updateSettings({ transform_prompt: added.name });
          }
        }
      }
      const list = await api.getAll();
      setTransformPrompts(Array.isArray(list) ? list : []);
      if (editingPrompt?.id != null) {
        setTransformPromptId(editingPrompt.id);
        updateSettings({ transform_prompt: payload.name });
      }
      setTransformEditMode(false);
      setEditingPrompt(null);
    } catch (err) {
      console.error("Save prompt failed:", err);
      setError(err?.message || "Failed to save prompt");
    }
  };

  const handleTransformDeleteRequest = (prompt) => {
    if (prompt?.id != null) setTransformPromptToDelete(prompt);
  };

  const handleConfirmTransformDelete = async () => {
    const prompt = transformPromptToDelete;
    if (!prompt?.id) {
      setTransformPromptToDelete(null);
      return;
    }
    const api = getCustomPromptsApi();
    if (!api) {
      setTransformPromptToDelete(null);
      return;
    }
    try {
      const res = await api.delete(prompt.id);
      if (res?.error) throw new Error(res.error);
      const list = await api.getAll();
      setTransformPrompts(Array.isArray(list) ? list : []);
      setTransformPromptId(null);
      updateSettings({ transform_prompt: null });
      setTransformEditMode(false);
      setEditingPrompt(null);
    } catch (err) {
      console.error("Delete prompt failed:", err);
      setError(err?.message || "Failed to delete prompt");
    } finally {
      setTransformPromptToDelete(null);
    }
  };

  const handleTransformTest = async () => {
    const text = transformTestInput.trim();
    const config = transformEditorDraft || editingPrompt;
    if (!text || !config) return;
    const promptConfig = {
      name: config.name,
      role: config.role,
      instructions: config.instructions,
      output_description: config.output_description ?? "transformed",
      temperature: Number(config.temperature) ?? 0.4,
      target_language: config.target_language === true || config.target_language === 1,
    };
    setTransformTestRunning(true);
    setTransformTestOutput("Testing…");
    const start = Date.now();
    try {
      const result = await transform(text, promptConfig, activeModel, null, null);
      const durationSec = (Date.now() - start) / 1000;
      const totalTokens =
        (result.usage?.prompt_tokens || 0) + (result.usage?.completion_tokens || 0);
      const tps = durationSec > 0 ? totalTokens / durationSec : 0;
      setTransformTestMeta(
        `Time: ${formatElapsedMmSs(durationSec)} | Cost: ${result.calculated_cost ? `$${result.calculated_cost.toFixed(5)}` : "free"} | TPS: ${tps.toFixed(1)}`
      );
      setTransformTestOutput(
        result.content
          ? result.content.replace(/^\s*\n+/, "")
          : result.error
            ? `Error: ${result.error}`
            : "—"
      );
    } catch (err) {
      setTransformTestMeta("");
      setTransformTestOutput(`Error: ${err.message}`);
    } finally {
      setTransformTestRunning(false);
    }
  };

  const selectedTransformPrompt = transformPrompts.find(
    (p) => String(p.id) === String(transformPromptId) || p.name === transformPromptId
  );
  const showTransformLangSelector =
    selectedTransformPrompt &&
    (selectedTransformPrompt.target_language === true ||
      selectedTransformPrompt.target_language === 1);

  return {
    transformPrompts,
    setTransformPrompts,
    transformPromptId,
    setTransformPromptId,
    transformEditMode,
    editingPrompt,
    inputTextTransform,
    setInputTextTransform,
    outputTextTransform,
    setOutputTextTransform,
    transformTargetLang,
    setTransformTargetLang,
    transformTestInput,
    setTransformTestInput,
    transformTestOutput,
    setTransformTestOutput,
    transformTestMeta,
    transformTestRunning,
    transformEditorDraft,
    setTransformEditorDraft,
    transformPromptToDelete,
    setTransformPromptToDelete,
    showLoadSampleConfirm,
    setShowLoadSampleConfirm,
    loadSampleLoading,
    selectedTransformPrompt,
    showTransformLangSelector,
    handleTransformPromptSelect,
    handleTransformNewPrompt,
    handleTransformEditPrompt,
    handleTransformDuplicate,
    handleTransformBackToRun,
    handleOpenExportImportPrompts,
    handleConfirmLoadSamplePrompts,
    handleTransformSave,
    handleTransformDeleteRequest,
    handleConfirmTransformDelete,
    handleTransformTest,
  };
}
