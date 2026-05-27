(function () {
  "use strict";

  const HEALTH_PATH = "/api/health";
  const HEALTH_POLL_MS = 10000;
  const nativeFetch = window.fetch.bind(window);

  function editorFetchFailureMeansServerGone(err) {
    if (!err || err.name === "AbortError") return false;
    return err instanceof TypeError;
  }

  function showEditorServerDown() {
    const el = document.getElementById("editor-server-down-overlay");
    if (el) {
      el.classList.remove("hidden");
      el.setAttribute("aria-hidden", "false");
    }
  }

  function hideEditorServerDown() {
    const el = document.getElementById("editor-server-down-overlay");
    if (el) {
      el.classList.add("hidden");
      el.setAttribute("aria-hidden", "true");
    }
  }

  window.fetch = function (input, init) {
    return nativeFetch(input, init).catch(function (err) {
      if (editorFetchFailureMeansServerGone(err)) showEditorServerDown();
      return Promise.reject(err);
    });
  };

  function editorHealthPollTick() {
    if (document.visibilityState !== "visible") return;
    nativeFetch(HEALTH_PATH, { cache: "no-store", method: "GET" })
      .then(function (res) {
        if (res.ok) hideEditorServerDown();
      })
      .catch(function () {});
  }

  setInterval(editorHealthPollTick, HEALTH_POLL_MS);
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") editorHealthPollTick();
  });
  setTimeout(editorHealthPollTick, 0);

  (function attachEditorServerDownClose() {
    const closeBtn = document.getElementById("editor-server-down-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        window.close();
      });
    }
  })();

  function escapeHtml(str) {
    if (str == null) return "";
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function providerSortKeyFromModelId(modelId) {
    const id = modelId || "";
    if (!id) return "other";
    if (id.startsWith("openrouter/")) {
      const inner = id.slice("openrouter/".length);
      const first = inner.split("/")[0];
      return (first || "openrouter").toLowerCase();
    }
    return (id.split("/")[0] || "other").toLowerCase();
  }

  function openrouterInnerFromCanonical(canonicalId) {
    const s = String(canonicalId || "").trim();
    return s.startsWith("openrouter/") ? s.slice("openrouter/".length) : s;
  }

  function modelPickerDisplay(m) {
    if (m && typeof m.displayId === "string" && m.displayId.trim()) return m.displayId.trim();
    return openrouterInnerFromCanonical(m.id);
  }

  function pickLocaleString(map, key) {
    if (!map || typeof map !== "object") return "";
    const k = String(key || "").trim();
    if (!k) return "";
    if (typeof map[k] === "string" && map[k].trim()) return map[k];
    const lower = k.toLowerCase();
    for (const [code, value] of Object.entries(map)) {
      if (code.toLowerCase() === lower && typeof value === "string" && value.trim()) return value;
    }
    return "";
  }

  function setStatus(msg, ok) {
    const el = document.getElementById("status-line");
    if (!el) return;
    el.textContent = msg || "";
    el.classList.toggle("ok", Boolean(ok));
    el.classList.toggle("err", msg && !ok);
    if (!msg) el.classList.remove("ok", "err");
  }

  function updateServerLogButtonState() {
    const btn = document.getElementById("btn-view-logs");
    if (!btn) return;
    btn.classList.toggle("has-errors", serverSessionErrorCount > 0);
    btn.title =
      serverSessionErrorCount > 0
        ? serverSessionErrorCount + " server error(s) this session — open log"
        : "View presets-editor server log";
  }

  function formatLogContentHtml(content) {
    const lines = String(content || "").split("\n");
    return lines
      .map(function (line) {
        const safe = escapeHtml(line);
        if (/\[ERROR\]/.test(line)) return '<span class="log-line-err">' + safe + "</span>";
        if (/\[WARN\]/.test(line)) return '<span class="log-line-warn">' + safe + "</span>";
        return safe;
      })
      .join("\n");
  }

  async function fetchServerLogs() {
    const res = await nativeFetch("/api/logs", { cache: "no-store" });
    if (!res.ok) {
      const t = await res.text().catch(function () {
        return "";
      });
      throw new Error(t || "Could not load server log (HTTP " + res.status + ")");
    }
    return res.json();
  }

  function applyServerLogMeta(data) {
    if (!data || typeof data !== "object") return;
    if (typeof data.sessionErrorCount === "number") {
      serverSessionErrorCount = data.sessionErrorCount;
      updateServerLogButtonState();
    }
  }

  async function refreshServerLogViewer() {
    const summaryEl = document.getElementById("server-log-summary");
    const contentEl = document.getElementById("server-log-content");
    if (summaryEl) summaryEl.textContent = "Loading log…";
    try {
      const data = await fetchServerLogs();
      applyServerLogMeta(data);
      if (summaryEl) {
        const errPart =
          data.sessionErrorCount > 0
            ? data.sessionErrorCount + " error(s) this session. "
            : "No errors this session. ";
        summaryEl.textContent =
          errPart +
          "File: " +
          (data.path || "presets-editor.log") +
          (data.sessionStart ? " · session " + data.sessionStart : "");
      }
      if (contentEl) {
        contentEl.innerHTML = formatLogContentHtml(data.content || "(empty log)");
        contentEl.scrollTop = contentEl.scrollHeight;
      }
    } catch (e) {
      if (summaryEl) summaryEl.textContent = e.message || String(e);
      if (contentEl) contentEl.textContent = "";
    }
  }

  function openServerLogModal() {
    const overlay = document.getElementById("server-log-overlay");
    if (!overlay) return;
    overlay.classList.remove("hidden");
    overlay.setAttribute("aria-hidden", "false");
    refreshServerLogViewer();
  }

  function closeServerLogModal() {
    const overlay = document.getElementById("server-log-overlay");
    if (!overlay) return;
    overlay.classList.add("hidden");
    overlay.setAttribute("aria-hidden", "true");
  }

  function showServerLogStartupAlert(errorCount) {
    if (serverLogAlertShown || errorCount <= 0) return;
    serverLogAlertShown = true;
    const overlay = document.getElementById("server-log-alert-overlay");
    const msgEl = document.getElementById("server-log-alert-message");
    if (msgEl) {
      msgEl.textContent =
        "The presets-editor server logged " +
        errorCount +
        " error(s) while starting (for example invalid API keys or provider catalog failures).";
    }
    if (overlay) {
      overlay.classList.remove("hidden");
      overlay.setAttribute("aria-hidden", "false");
    }
  }

  function dismissServerLogStartupAlert() {
    const overlay = document.getElementById("server-log-alert-overlay");
    if (overlay) {
      overlay.classList.add("hidden");
      overlay.setAttribute("aria-hidden", "true");
    }
  }

  async function checkServerLogAfterStartup() {
    try {
      const data = await fetchServerLogs();
      applyServerLogMeta(data);
      if (data.hasSessionErrors && data.sessionErrorCount > 0) {
        showServerLogStartupAlert(data.sessionErrorCount);
      }
    } catch {
      /* non-fatal */
    }
  }

  function setEditorBootMessage(msg) {
    const el = document.getElementById("editor-boot-message");
    if (el) el.textContent = msg || "";
  }

  function setEditorBootVisible(visible, message) {
    const overlay = document.getElementById("editor-boot-overlay");
    if (overlay) {
      overlay.classList.toggle("hidden", !visible);
      overlay.setAttribute("aria-hidden", visible ? "false" : "true");
      overlay.setAttribute("aria-busy", visible ? "true" : "false");
    }
    document.body.classList.toggle("editor-booting", visible);
    if (message) setEditorBootMessage(message);
  }

  function refreshSourceLocaleFieldLabels() {
    const loc = meta.sourceLocale || "en-GB";
    const suffix = "(" + loc + ")";
    const nameEl = document.getElementById("label-name-source-locale");
    const descEl = document.getElementById("label-description-source-locale");
    if (nameEl) nameEl.textContent = suffix;
    if (descEl) descEl.textContent = suffix;
  }

  let catalog = { version: "0.0.0", updated_at: "", presets: [] };
  let meta = { sourceLocale: "en-GB" };
  let uiLanguages = [];
  let models = [];
  let selectedId = null;
  let lastDetailPresetId = null;
  let expandedProviders = new Set();
  /** Snapshot of name/description when preset was selected — used to clear stale translations */
  let nameDescBaseline = { id: null, name: "", description: "" };
  let modelSearch = "";
  let presetSearch = "";
  var modelPickerTarget = "preset";
  var translateRunInFlight = false;
  var KEY_TRANSLATION_MODEL = "translation_model";
  var KEY_TRANSLATION_FALLBACK = "translation_model_fallback";
  var KEY_SUGGESTION_MODEL = "suggestion_model";
  var KEY_SUGGESTION_FALLBACK = "suggestion_model_fallback";
  var PRESET_PROVIDER_PICKER_PREFIX = "preset_provider:";
  var PRESET_PROVIDER_FALLBACK_PICKER_PREFIX = "preset_provider_fb:";
  var AI_SUGGEST_PICKER_PREFIX = "ai_suggest:";

  var DIRECT_LLM_ENGINES = new Set([
    "openrouter",
    "openai",
    "anthropic",
    "google",
    "deepseek",
    "groq",
    "mistralai",
    "ollama",
    "xai",
    "cerebras",
  ]);

  var providers = [];
  var modelsByEngine = {};
  var modelsCatalogPrefetchPromise = null;
  /** @type {"idle"|"loading"|"ready"|"error"} */
  var modelsCatalogPrefetchState = "idle";
  var catalogLoadProgress = 0;
  var aiSuggestRunInFlight = false;
  /** @type {Record<string, Record<string, { model_id: string, reason?: string, warning?: string }>>} */
  var aiSuggestStaging = {};
  /** @type {Record<string, Record<string, string>>} */
  var aiSuggestSnapshot = {};
  /** @type {Record<string, Record<string, { primary?: string, fallback?: string }>>} */
  var aiSuggestChoice = {};
  var serverSessionErrorCount = 0;
  var serverLogAlertShown = false;

  function pickerEngineFromTarget(target) {
    const ai = parseAiSuggestPickerTarget(target);
    if (ai) return ai.engine;
    const t = target || "";
    if (t.startsWith(PRESET_PROVIDER_FALLBACK_PICKER_PREFIX)) {
      return t.slice(PRESET_PROVIDER_FALLBACK_PICKER_PREFIX.length) || null;
    }
    if (t.startsWith(PRESET_PROVIDER_PICKER_PREFIX)) {
      return t.slice(PRESET_PROVIDER_PICKER_PREFIX.length) || null;
    }
    return null;
  }

  function parseAiSuggestPickerTarget(target) {
    const t = target || "";
    if (!t.startsWith(AI_SUGGEST_PICKER_PREFIX)) return null;
    const rest = t.slice(AI_SUGGEST_PICKER_PREFIX.length);
    const parts = rest.split(":");
    if (parts.length < 2) return null;
    if (parts[parts.length - 1] === "fallback") {
      if (parts.length < 3) return null;
      return {
        presetId: parts.slice(0, -2).join(":"),
        engine: parts[parts.length - 2],
        role: "fallback",
      };
    }
    return {
      presetId: parts.slice(0, -1).join(":"),
      engine: parts[parts.length - 1],
      role: "primary",
    };
  }

  function aiSuggestPickerTarget(presetId, engine, role) {
    const suffix = role === "fallback" ? ":fallback" : "";
    return AI_SUGGEST_PICKER_PREFIX + presetId + ":" + engine + suffix;
  }

  function presetProviderPickerTarget(engine, role) {
    if (role === "fallback") return PRESET_PROVIDER_FALLBACK_PICKER_PREFIX + engine;
    return PRESET_PROVIDER_PICKER_PREFIX + engine;
  }

  function isPresetProviderFallbackPickerTarget(target) {
    return String(target || "").startsWith(PRESET_PROVIDER_FALLBACK_PICKER_PREFIX);
  }

  function isPresetProviderPickerTarget(target) {
    const t = target || "";
    return (
      t.startsWith(PRESET_PROVIDER_PICKER_PREFIX) || t.startsWith(PRESET_PROVIDER_FALLBACK_PICKER_PREFIX)
    );
  }

  function getPickerModels() {
    const eng = pickerEngineFromTarget(modelPickerTarget);
    if (eng) return modelsByEngine[eng] || [];
    return models;
  }

  function presetModelId(preset, engine) {
    if (!preset || !engine) return "";
    if (preset.model_ids && preset.model_ids[engine]) return String(preset.model_ids[engine]).trim();
    return "";
  }

  function presetFallbackId(preset, engine) {
    if (!preset || !engine) return "";
    if (preset.fallback_ids && preset.fallback_ids[engine]) return String(preset.fallback_ids[engine]).trim();
    return "";
  }

  function setPresetModelId(preset, engine, id) {
    if (!preset || !engine) return;
    if (!preset.model_ids || typeof preset.model_ids !== "object") preset.model_ids = {};
    const trimmed = String(id || "").trim();
    if (trimmed) preset.model_ids[engine] = trimmed;
    else delete preset.model_ids[engine];
  }

  function setPresetFallbackId(preset, engine, id) {
    if (!preset || !engine) return;
    if (!preset.fallback_ids || typeof preset.fallback_ids !== "object") preset.fallback_ids = {};
    const trimmed = String(id || "").trim();
    if (trimmed) preset.fallback_ids[engine] = trimmed;
    else delete preset.fallback_ids[engine];
  }

  function canonicalForEngine(engine, raw) {
    const id = String(raw || "").trim();
    if (!id) return "";
    if (id.startsWith(engine + "/")) return id;
    const slash = id.indexOf("/");
    if (slash > 0) {
      const first = id.slice(0, slash).toLowerCase();
      if (DIRECT_LLM_ENGINES.has(first)) return id;
    }
    if (engine === "openrouter") {
      if (id.startsWith("openrouter/")) return id;
      if (slash <= 0) return id;
      return "openrouter/" + id;
    }
    if (slash <= 0) return engine + "/" + id;
    return engine + "/" + id;
  }

  function normalizePresetModelIds(preset) {
    if (!preset) return;
    if (!preset.model_ids || typeof preset.model_ids !== "object") preset.model_ids = {};
    const legacy = preset.model_id ? String(preset.model_id).trim() : "";
    if (legacy && !preset.model_ids.openrouter) preset.model_ids.openrouter = legacy;
    Object.keys(preset.model_ids).forEach(function (eng) {
      const raw = preset.model_ids[eng];
      if (typeof raw !== "string" || !raw.trim()) {
        delete preset.model_ids[eng];
        return;
      }
      preset.model_ids[eng] = canonicalForEngine(eng, raw);
    });

    if (!preset.fallback_ids || typeof preset.fallback_ids !== "object") preset.fallback_ids = {};
    Object.keys(preset.fallback_ids).forEach(function (eng) {
      const raw = preset.fallback_ids[eng];
      if (typeof raw !== "string" || !raw.trim()) {
        delete preset.fallback_ids[eng];
        return;
      }
      preset.fallback_ids[eng] = canonicalForEngine(eng, raw);
    });

    if (preset.model_id != null) delete preset.model_id;
  }

  function normalizeCatalogModelIds() {
    (catalog.presets || []).forEach(normalizePresetModelIds);
  }

  function providersForPreset(preset) {
    if (!providers.length) return [];
    if (preset && preset.id === "free-router") {
      return providers.filter(function (p) {
        return p.engine === "openrouter";
      });
    }
    return providers;
  }

  function getSelectedModelIdForPicker() {
    const aiPick = parseAiSuggestPickerTarget(modelPickerTarget);
    if (aiPick) {
      const st = aiSuggestStaging[aiPick.presetId];
      const row = st && st[aiPick.engine];
      if (!row) return "";
      return aiPick.role === "fallback" ? row.fallback_id || "" : row.model_id || "";
    }
    const eng = pickerEngineFromTarget(modelPickerTarget);
    if (eng && isPresetProviderPickerTarget(modelPickerTarget)) {
      const preset = getSelectedPreset();
      if (isPresetProviderFallbackPickerTarget(modelPickerTarget)) {
        return presetFallbackId(preset, eng);
      }
      return presetModelId(preset, eng);
    }
    if (modelPickerTarget === "preset") {
      const preset = getSelectedPreset();
      return presetModelId(preset, "openrouter");
    }
    if (modelPickerTarget === "translation_model") {
      return String(catalog[KEY_TRANSLATION_MODEL] || "").trim();
    }
    if (modelPickerTarget === "translation_model_fallback") {
      return String(catalog[KEY_TRANSLATION_FALLBACK] || "").trim();
    }
    if (modelPickerTarget === "suggestion_model") {
      return String(catalog[KEY_SUGGESTION_MODEL] || "").trim();
    }
    if (modelPickerTarget === "suggestion_model_fallback") {
      return String(catalog[KEY_SUGGESTION_FALLBACK] || "").trim();
    }
    return "";
  }

  function displayIdForCatalogModel(canonicalId) {
    const id = String(canonicalId || "").trim();
    if (!id) return "(none)";
    const slash = id.indexOf("/");
    const eng = slash > 0 ? id.slice(0, slash) : "";
    const list =
      eng && Array.isArray(modelsByEngine[eng]) && modelsByEngine[eng].length
        ? modelsByEngine[eng]
        : models;
    const m = list.find(function (x) {
      return x.id === id;
    });
    if (m) return modelPickerDisplay(m);
    if (slash > 0) return id.slice(slash + 1);
    return openrouterInnerFromCanonical(id);
  }

  function syncHeaderTranslationModelsDisplay() {
    const el1 = document.getElementById("display-translation-model");
    const el2 = document.getElementById("display-translation-model-fallback");
    if (el1) el1.textContent = displayIdForCatalogModel(catalog[KEY_TRANSLATION_MODEL]);
    if (el2) el2.textContent = displayIdForCatalogModel(catalog[KEY_TRANSLATION_FALLBACK]);
  }

  function migrateCatalogTranslationKeys() {
    if (catalog.editor_translation_model_id && !catalog[KEY_TRANSLATION_MODEL]) {
      catalog[KEY_TRANSLATION_MODEL] = String(catalog.editor_translation_model_id).trim();
      delete catalog.editor_translation_model_id;
    }
  }

  function computeTranslateQueueInfo() {
    const sourceLocale = meta.sourceLocale || "en-GB";
    const targets = uiLanguages.filter(function (row) {
      return row && row.code && row.code !== sourceLocale;
    });
    let jobs = 0;
    let slots = 0;
    (catalog.presets || []).forEach(function (preset) {
      if (!preset || typeof preset.id !== "string") return;
      targets.forEach(function (row) {
        const code = row.code;
        const nn = !pickLocaleString(preset.translated_name, code);
        const nd = !pickLocaleString(preset.translated_description, code);
        if (!nn && !nd) return;
        jobs++;
        if (nn) slots++;
        if (nd) slots++;
      });
    });
    return { jobs: jobs, slots: slots };
  }

  function updateTranslateBar() {
    const hint = document.getElementById("translate-missing-hint");
    const btn = document.getElementById("btn-translate-missing");
    const q = computeTranslateQueueInfo();
    const primary = String(catalog[KEY_TRANSLATION_MODEL] || "").trim();

    if (hint) {
      if (!uiLanguages.length) {
        hint.textContent = "UI languages not loaded yet.";
      } else if (q.slots === 0) {
        hint.textContent =
          "No missing translations — every non-source locale has name and description for each preset.";
      } else {
        hint.textContent =
          q.slots +
          " missing field(s) across " +
          q.jobs +
          " OpenRouter request(s)."
      }
    }

    const primaryOk =
      primary.startsWith("openrouter/") &&
      models.some(function (m) {
        return m.id === primary;
      });
    if (btn) {
      btn.disabled = q.slots === 0 || translateRunInFlight || aiSuggestRunInFlight || !primaryOk || !models.length;
    }
    updateAiSuggestBar();
  }

  function openrouterProviderConfigured() {
    return providers.some(function (p) {
      return p.engine === "openrouter" && p.configured;
    });
  }

  function updateAiSuggestBar() {
    const btn = document.getElementById("btn-ai-suggest");
    if (!btn) return;
    btn.disabled =
      aiSuggestRunInFlight || translateRunInFlight || !openrouterProviderConfigured();
    updateAiSuggestContinueButton();
  }

  function isAiSuggestFlowVisible() {
    const setup = document.getElementById("ai-suggest-setup-panel");
    const run = document.getElementById("ai-suggest-run-panel");
    const review = document.getElementById("ai-suggest-review-panel");
    return (
      (setup && !setup.classList.contains("hidden")) ||
      (run && !run.classList.contains("hidden")) ||
      (review && !review.classList.contains("hidden"))
    );
  }

  function hideEditorMainPanels() {
    const listPanel = document.getElementById("list-panel");
    const detailPanel = document.getElementById("detail-panel");
    const setup = document.getElementById("ai-suggest-setup-panel");
    const run = document.getElementById("ai-suggest-run-panel");
    const review = document.getElementById("ai-suggest-review-panel");
    const layout = document.getElementById("editor-main-layout");
    if (layout) layout.classList.add("layout-ai-suggest-review");
    if (listPanel) listPanel.classList.add("hidden");
    if (detailPanel) detailPanel.classList.add("hidden");
    if (setup) setup.classList.add("hidden");
    if (run) run.classList.add("hidden");
    if (review) review.classList.add("hidden");
  }

  function showEditorMainPanels() {
    const listPanel = document.getElementById("list-panel");
    const detailPanel = document.getElementById("detail-panel");
    const layout = document.getElementById("editor-main-layout");
    const translateRow = document.getElementById("topbar-translate-row");
    if (layout) layout.classList.remove("layout-ai-suggest-review");
    if (listPanel) listPanel.classList.remove("hidden");
    if (detailPanel) detailPanel.classList.remove("hidden");
    if (translateRow) translateRow.classList.remove("hidden");
  }

  function setTopbarTranslateRowVisible(visible) {
    const translateRow = document.getElementById("topbar-translate-row");
    if (translateRow) translateRow.classList.toggle("hidden", !visible);
  }

  function syncSuggestionModelsDisplay() {
    const el1 = document.getElementById("display-suggestion-model");
    const el2 = document.getElementById("display-suggestion-model-fallback");
    if (el1) el1.textContent = displayIdForCatalogModel(catalog[KEY_SUGGESTION_MODEL]);
    if (el2) el2.textContent = displayIdForCatalogModel(catalog[KEY_SUGGESTION_FALLBACK]);
  }

  function providerLabelForEngine(engine) {
    const prov = providers.find(function (p) {
      return p.engine === engine;
    });
    return (prov && prov.label) || engine;
  }

  function getAiSuggestablePresets() {
    return (catalog.presets || []).filter(function (s) {
      return s && typeof s.id === "string" && s.id !== "free-router";
    });
  }

  function getSelectedAiSuggestPresetIds() {
    const host = document.getElementById("ai-suggest-presets-checkboxes");
    if (!host) return [];
    return Array.from(host.querySelectorAll('input[type="checkbox"][data-preset-id]:checked')).map(
      function (el) {
        return el.getAttribute("data-preset-id") || "";
      },
    ).filter(Boolean);
  }

  function setAllAiSuggestPresetChecks(checked) {
    const host = document.getElementById("ai-suggest-presets-checkboxes");
    if (!host) return;
    host.querySelectorAll('input[type="checkbox"][data-preset-id]').forEach(function (el) {
      el.checked = checked;
    });
    updateAiSuggestContinueButton();
  }

  function renderAiSuggestPresetCheckboxes() {
    const host = document.getElementById("ai-suggest-presets-checkboxes");
    if (!host) return;
    host.innerHTML = "";
    const presets = getAiSuggestablePresets().slice().sort(function (a, b) {
      return String(a.name || a.id).localeCompare(String(b.name || b.id), undefined, {
        sensitivity: "base",
      });
    });
    if (!presets.length) {
      const empty = document.createElement("p");
      empty.className = "muted";
      empty.textContent = "No presets available (add presets besides free-router).";
      host.appendChild(empty);
      updateAiSuggestContinueButton();
      return;
    }
    presets.forEach(function (preset) {
      const label = document.createElement("label");
      label.className = "ai-suggest-presets-check";
      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = true;
      input.setAttribute("data-preset-id", preset.id);
      input.addEventListener("change", updateAiSuggestContinueButton);
      const span = document.createElement("span");
      span.className = "ai-suggest-presets-check-label";
      span.innerHTML =
        "<strong>" +
        escapeHtml(preset.name || preset.id) +
        '</strong><span class="ai-suggest-presets-check-meta">' +
        escapeHtml(preset.id) +
        "</span>";
      label.appendChild(input);
      label.appendChild(span);
      host.appendChild(label);
    });
    updateAiSuggestContinueButton();
  }

  function updateAiSuggestContinueButton() {
    const btn = document.getElementById("btn-ai-suggest-continue");
    if (!btn) return;
    const primary = String(catalog[KEY_SUGGESTION_MODEL] || "").trim();
    const selectedCount = getSelectedAiSuggestPresetIds().length;
    btn.disabled =
      aiSuggestRunInFlight ||
      !primary.startsWith("openrouter/") ||
      !openrouterProviderConfigured() ||
      selectedCount === 0;
    updateAiSuggestSetupContinueHint(primary, selectedCount);
  }

  function updateAiSuggestSetupContinueHint(primary, selectedCount) {
    const el = document.getElementById("ai-suggest-setup-continue-hint");
    if (!el) return;
    let msg = "";
    if (!primary.startsWith("openrouter/")) {
      msg = "Choose a primary suggestion model to continue.";
    } else if (selectedCount === 0) {
      msg = "Select at least one preset to continue.";
    }
    el.textContent = msg;
    el.classList.toggle("hidden", !msg);
  }

  function reportCatalogLoadProgress(engine, count, done, total, onProgress) {
    const label = providerLabelForEngine(engine);
    const msg =
      "Loading provider catalogs (" +
      done +
      "/" +
      total +
      ")… " +
      label +
      ": " +
      count +
      " model(s)";
    if (typeof onProgress === "function") onProgress(msg);
    else setStatus(msg, null);
  }

  function prefetchAllEngineCatalogs(opts) {
    const options = opts || {};
    if (modelsCatalogPrefetchState === "ready" && !options.force) {
      return modelsCatalogPrefetchPromise || Promise.resolve();
    }
    if (modelsCatalogPrefetchPromise && !options.force) {
      return modelsCatalogPrefetchPromise;
    }

    if (options.force) {
      modelsCatalogPrefetchState = "idle";
      modelsCatalogPrefetchPromise = null;
      modelsByEngine = {};
      models = [];
    }

    const engines = providers.map(function (p) {
      return p.engine;
    });
    if (!engines.length) {
      modelsCatalogPrefetchState = "ready";
      modelsCatalogPrefetchPromise = Promise.resolve();
      return modelsCatalogPrefetchPromise;
    }

    const onProgress = options.onProgress;
    modelsCatalogPrefetchState = "loading";
    catalogLoadProgress = 0;
    const totalEngines = engines.length;
    const initialMsg = "Loading provider catalogs (0/" + totalEngines + ")…";
    if (typeof onProgress === "function") onProgress(initialMsg);
    else setStatus(initialMsg, null);

    modelsCatalogPrefetchPromise = Promise.all(
      engines.map(function (engine) {
        return loadModelsForEngine(engine, { force: Boolean(options.force) }).then(function (list) {
          catalogLoadProgress += 1;
          reportCatalogLoadProgress(
            engine,
            list.length,
            catalogLoadProgress,
            totalEngines,
            onProgress,
          );
          return { engine: engine, count: list.length };
        });
      }),
    )
      .then(function (rows) {
        const modelTotal = rows.reduce(function (n, r) {
          return n + (r.count || 0);
        }, 0);
        modelsCatalogPrefetchState = "ready";
        const doneMsg =
          "Catalogs ready (" + rows.length + " providers, " + modelTotal + " models).";
        if (typeof onProgress === "function") onProgress(doneMsg);
        return rows;
      })
      .catch(function (e) {
        modelsCatalogPrefetchState = "error";
        modelsCatalogPrefetchPromise = null;
        throw e;
      });
    return modelsCatalogPrefetchPromise;
  }

  function appendTranslateLog(text, isErr) {
    const el = document.getElementById("translate-progress-log");
    if (!el) return;
    const line = document.createElement("div");
    line.className = "translate-log-line" + (isErr ? " err" : "");
    line.textContent = text;
    el.appendChild(line);
    el.scrollTop = el.scrollHeight;
  }

  function openTranslateProgressModal() {
    const overlay = document.getElementById("translate-progress-overlay");
    const log = document.getElementById("translate-progress-log");
    const summary = document.getElementById("translate-progress-summary");
    const closeBtn = document.getElementById("translate-progress-close");
    if (log) log.innerHTML = "";
    if (summary) summary.textContent = "Starting…";
    if (overlay) {
      overlay.classList.remove("hidden");
      overlay.setAttribute("aria-hidden", "false");
      overlay.setAttribute("data-run-done", "0");
    }
    if (closeBtn) closeBtn.disabled = true;
    translateRunInFlight = true;
    updateTranslateBar();
  }

  function markTranslateProgressDone() {
    const overlay = document.getElementById("translate-progress-overlay");
    const closeBtn = document.getElementById("translate-progress-close");
    if (overlay) overlay.setAttribute("data-run-done", "1");
    if (closeBtn) closeBtn.disabled = false;
    translateRunInFlight = false;
    updateTranslateBar();
  }

  function closeTranslateProgressModal() {
    const overlay = document.getElementById("translate-progress-overlay");
    if (overlay) {
      overlay.classList.add("hidden");
      overlay.setAttribute("aria-hidden", "true");
      overlay.setAttribute("data-run-done", "0");
    }
    translateRunInFlight = false;
    updateTranslateBar();
  }

  function appendAiSuggestRunLog(text, isErr) {
    const el = document.getElementById("ai-suggest-run-log");
    if (!el) return;
    const line = document.createElement("div");
    line.className = "translate-log-line" + (isErr ? " err" : "");
    line.textContent = text;
    el.appendChild(line);
    el.scrollTop = el.scrollHeight;
  }

  function showAiSuggestSetupPage() {
    hideEditorMainPanels();
    setTopbarTranslateRowVisible(false);
    const setup = document.getElementById("ai-suggest-setup-panel");
    if (setup) setup.classList.remove("hidden");
    syncSuggestionModelsDisplay();
    renderAiSuggestPresetCheckboxes();
  }

  function showAiSuggestRunPage() {
    hideEditorMainPanels();
    setTopbarTranslateRowVisible(false);
    const run = document.getElementById("ai-suggest-run-panel");
    const log = document.getElementById("ai-suggest-run-log");
    const summary = document.getElementById("ai-suggest-run-summary");
    const cancelBtn = document.getElementById("btn-ai-suggest-run-cancel");
    if (run) run.classList.remove("hidden");
    if (log) log.innerHTML = "";
    if (summary) {
      summary.textContent =
        "Using " +
        displayIdForCatalogModel(catalog[KEY_SUGGESTION_MODEL]) +
        " (web search enabled). Extra search cost may apply (~$0.02 per request max at default settings).";
    }
    if (cancelBtn) cancelBtn.disabled = true;
  }

  function exitAiSuggestFlow() {
    aiSuggestStaging = {};
    aiSuggestSnapshot = {};
    aiSuggestChoice = {};
    showEditorMainPanels();
    const setup = document.getElementById("ai-suggest-setup-panel");
    const run = document.getElementById("ai-suggest-run-panel");
    const review = document.getElementById("ai-suggest-review-panel");
    if (setup) setup.classList.add("hidden");
    if (run) run.classList.add("hidden");
    if (review) review.classList.add("hidden");
    aiSuggestRunInFlight = false;
    updateAiSuggestBar();
    updateTranslateBar();
  }

  function showAiSuggestReview() {
    hideEditorMainPanels();
    setTopbarTranslateRowVisible(false);
    const reviewPanel = document.getElementById("ai-suggest-review-panel");
    if (reviewPanel) reviewPanel.classList.remove("hidden");
    renderAiSuggestReview();
  }

  function hideAiSuggestReview() {
    exitAiSuggestFlow();
  }

  function snapshotEntryForPreset(preset) {
    if (!preset) return null;
    const snap = aiSuggestSnapshot[preset.id];
    if (!snap) return null;
    if (snap.model_ids || snap.fallback_ids) return snap;
    return { model_ids: snap, fallback_ids: {} };
  }

  function snapshotModelIdForPreset(preset, engine) {
    if (!preset) return "";
    const snap = snapshotEntryForPreset(preset);
    if (snap && snap.model_ids && snap.model_ids[engine]) return snap.model_ids[engine];
    return presetModelId(preset, engine);
  }

  function snapshotFallbackModelIdForPreset(preset, engine) {
    if (!preset) return "";
    const snap = snapshotEntryForPreset(preset);
    if (snap && snap.fallback_ids && snap.fallback_ids[engine]) return snap.fallback_ids[engine];
    return presetFallbackId(preset, engine);
  }

  function setAiSuggestStagingModel(presetId, engine, modelId) {
    if (!aiSuggestStaging[presetId]) aiSuggestStaging[presetId] = {};
    const trimmed = String(modelId || "").trim();
    if (!trimmed) {
      delete aiSuggestStaging[presetId][engine];
      return;
    }
    const prev = aiSuggestStaging[presetId][engine] || {};
    aiSuggestStaging[presetId][engine] = {
      model_id: canonicalForEngine(engine, trimmed),
      reason: prev.reason || "",
      fallback_id: prev.fallback_id || "",
      fallback_reason: prev.fallback_reason || "",
      warning: prev.warning,
    };
    setAiSuggestChoice(presetId, engine, "primary", "suggested");
  }

  function setAiSuggestStagingFallbackModel(presetId, engine, modelId) {
    if (!aiSuggestStaging[presetId]) aiSuggestStaging[presetId] = {};
    const trimmed = String(modelId || "").trim();
    const prev = aiSuggestStaging[presetId][engine] || {};
    if (!trimmed) {
      if (!prev.model_id) {
        delete aiSuggestStaging[presetId][engine];
        return;
      }
      aiSuggestStaging[presetId][engine] = {
        model_id: prev.model_id,
        reason: prev.reason || "",
        fallback_id: "",
        fallback_reason: "",
        warning: prev.warning,
      };
      return;
    }
    aiSuggestStaging[presetId][engine] = {
      model_id: prev.model_id || "",
      reason: prev.reason || "",
      fallback_id: canonicalForEngine(engine, trimmed),
      fallback_reason: prev.fallback_reason || "",
      warning: prev.warning,
    };
    setAiSuggestChoice(presetId, engine, "fallback", "suggested");
  }

  function aiSuggestChoiceField(role) {
    return role === "fallback" ? "fallback" : "primary";
  }

  function defaultAiSuggestChoiceValue(currentId, suggestedId) {
    const suggested = String(suggestedId || "").trim();
    if (!suggested) return "current";
    const current = String(currentId || "").trim();
    if (current === suggested) return "current";
    return "suggested";
  }

  function getAiSuggestChoice(presetId, engine, role, preset, staging) {
    const field = aiSuggestChoiceField(role);
    const row = aiSuggestChoice[presetId] && aiSuggestChoice[presetId][engine];
    if (row && row[field]) return row[field];
    const current =
      role === "fallback"
        ? snapshotFallbackModelIdForPreset(preset, engine)
        : snapshotModelIdForPreset(preset, engine);
    const suggested =
      role === "fallback"
        ? staging && staging.fallback_id
          ? staging.fallback_id
          : ""
        : staging && staging.model_id
          ? staging.model_id
          : "";
    return defaultAiSuggestChoiceValue(current, suggested);
  }

  function setAiSuggestChoice(presetId, engine, role, value) {
    if (!aiSuggestChoice[presetId]) aiSuggestChoice[presetId] = {};
    if (!aiSuggestChoice[presetId][engine]) aiSuggestChoice[presetId][engine] = {};
    aiSuggestChoice[presetId][engine][aiSuggestChoiceField(role)] = value;
  }

  function buildAiSuggestChoiceSelect(presetId, engine, role, preset, staging) {
    const suggested =
      role === "fallback"
        ? staging && staging.fallback_id
          ? staging.fallback_id
          : ""
        : staging && staging.model_id
          ? staging.model_id
          : "";
    const hasSuggested = Boolean(String(suggested || "").trim());
    const sel = document.createElement("select");
    sel.className = "ai-suggest-choice-select";
    sel.setAttribute(
      "aria-label",
      (role === "fallback" ? "Fallback" : "Primary") + " model — keep current or use suggested",
    );

    const optCurrent = document.createElement("option");
    optCurrent.value = "current";
    optCurrent.textContent = "Keep current";
    sel.appendChild(optCurrent);

    const optSuggested = document.createElement("option");
    optSuggested.value = "suggested";
    optSuggested.textContent = "Use suggested";
    optSuggested.disabled = !hasSuggested;
    sel.appendChild(optSuggested);

    sel.value = hasSuggested ? getAiSuggestChoice(presetId, engine, role, preset, staging) : "current";
    sel.addEventListener("change", function () {
      setAiSuggestChoice(presetId, engine, role, sel.value);
      renderAiSuggestReview();
    });
    return sel;
  }

  function renderAiSuggestReview() {
    const host = document.getElementById("ai-suggest-review-host");
    if (!host) return;
    host.innerHTML = "";
    const presetIds = Object.keys(aiSuggestStaging).sort();
    if (!presetIds.length) {
      host.innerHTML = '<p class="muted">No suggestions to review.</p>';
      return;
    }
    presetIds.forEach(function (presetId) {
      const preset = catalog.presets.find(function (s) {
        return s && s.id === presetId;
      });
      const section = document.createElement("section");
      section.className = "ai-suggest-preset-block";
      const title = document.createElement("h3");
      title.textContent = (preset && preset.name) || presetId;
      section.appendChild(title);
      const meta = document.createElement("p");
      meta.className = "muted ai-suggest-preset-id";
      meta.textContent = presetId;
      section.appendChild(meta);

      const table = document.createElement("table");
      table.className = "ai-suggest-table";
      table.innerHTML =
        "<thead><tr><th>Provider</th><th>Primary (current)</th><th>Primary (suggested)</th><th>Apply</th><th></th><th>Fallback (current)</th><th>Fallback (suggested)</th><th>Apply</th><th></th></tr></thead>";
      const tbody = document.createElement("tbody");

      const provList = preset ? providersForPreset(preset) : providers;
      provList.forEach(function (prov) {
        const engine = prov.engine;
        const staging = aiSuggestStaging[presetId] && aiSuggestStaging[presetId][engine];
        const currentPrimary = snapshotModelIdForPreset(preset, engine);
        const currentFallback = snapshotFallbackModelIdForPreset(preset, engine);
        const suggestedPrimary = staging ? staging.model_id : "";
        const suggestedFallback = staging ? staging.fallback_id : "";
        const primaryChoice = getAiSuggestChoice(presetId, engine, "primary", preset, staging);
        const fallbackChoice = getAiSuggestChoice(presetId, engine, "fallback", preset, staging);

        function cellCurrent(raw) {
          return raw
            ? escapeHtml(displayIdForCatalogModel(raw))
            : '<span class="muted">(blank)</span>';
        }

        function cellSuggested(raw, reason, warn) {
          let html = raw
            ? "<code>" + escapeHtml(displayIdForCatalogModel(raw)) + "</code>"
            : '<span class="muted">(none)</span>';
          if (reason) {
            html += '<div class="ai-suggest-reason muted">' + escapeHtml(reason) + "</div>";
          }
          if (warn === "not_in_catalog") {
            html += ' <span class="ai-suggest-warn-badge">not in catalog</span>';
          }
          return html;
        }

        const tr = document.createElement("tr");
        const suggestedPrimaryMuted = primaryChoice === "current" ? " ai-suggest-suggested-muted" : "";
        const suggestedFallbackMuted = fallbackChoice === "current" ? " ai-suggest-suggested-muted" : "";
        tr.innerHTML =
          "<td>" +
          escapeHtml(prov.label || engine) +
          "</td><td>" +
          cellCurrent(currentPrimary) +
          '</td><td class="ai-suggest-suggested-cell' +
          suggestedPrimaryMuted +
          '">' +
          cellSuggested(suggestedPrimary, staging && staging.reason, staging && staging.warning) +
          "</td><td></td><td></td><td>" +
          cellCurrent(currentFallback) +
          '</td><td class="ai-suggest-suggested-cell' +
          suggestedFallbackMuted +
          '">' +
          cellSuggested(
            suggestedFallback,
            staging && staging.fallback_reason,
            staging && staging.warning,
          ) +
          "</td><td></td><td></td>";

        const actionCells = tr.querySelectorAll("td");
        const primaryChoiceCell = actionCells[3];
        const primaryActions = actionCells[4];
        const fallbackChoiceCell = actionCells[7];
        const fallbackActions = actionCells[8];

        primaryChoiceCell.className = "ai-suggest-choice-cell";
        primaryChoiceCell.appendChild(
          buildAiSuggestChoiceSelect(presetId, engine, "primary", preset, staging),
        );
        fallbackChoiceCell.className = "ai-suggest-choice-cell";
        fallbackChoiceCell.appendChild(
          buildAiSuggestChoiceSelect(presetId, engine, "fallback", preset, staging),
        );

        const btnChangePrimary = document.createElement("button");
        btnChangePrimary.type = "button";
        btnChangePrimary.className = "btn secondary sm";
        btnChangePrimary.textContent = "Change";
        btnChangePrimary.addEventListener("click", function () {
          openModelPicker(aiSuggestPickerTarget(presetId, engine, "primary"));
        });
        primaryActions.className = "ai-suggest-actions";
        primaryActions.appendChild(btnChangePrimary);

        const btnChangeFallback = document.createElement("button");
        btnChangeFallback.type = "button";
        btnChangeFallback.className = "btn secondary sm";
        btnChangeFallback.textContent = "Change";
        btnChangeFallback.addEventListener("click", function () {
          openModelPicker(aiSuggestPickerTarget(presetId, engine, "fallback"));
        });
        fallbackActions.className = "ai-suggest-actions";
        fallbackActions.appendChild(btnChangeFallback);

        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      section.appendChild(table);
      host.appendChild(section);
    });
  }

  function applyAiSuggestStagingToCatalog() {
    Object.keys(aiSuggestStaging).forEach(function (presetId) {
      const preset = catalog.presets.find(function (s) {
        return s && s.id === presetId;
      });
      if (!preset) return;
      const staging = aiSuggestStaging[presetId];
      if (!staging) return;
      Object.keys(staging).forEach(function (engine) {
        const row = staging[engine];
        if (!row) return;
        const stagingRow = aiSuggestStaging[presetId] && aiSuggestStaging[presetId][engine];
        if (
          getAiSuggestChoice(presetId, engine, "primary", preset, stagingRow) === "suggested" &&
          row.model_id
        ) {
          setPresetModelId(preset, engine, row.model_id);
        }
        if (getAiSuggestChoice(presetId, engine, "fallback", preset, stagingRow) === "suggested") {
          setPresetFallbackId(preset, engine, row.fallback_id || "");
        }
      });
      normalizePresetModelIds(preset);
    });
    aiSuggestStaging = {};
    aiSuggestSnapshot = {};
    aiSuggestChoice = {};
    hideAiSuggestReview();
    renderPresetList();
    renderDetail();
    setStatus("Applied AI suggestions to catalog (save to persist)", true);
  }

  function cancelAiSuggestReview() {
    aiSuggestStaging = {};
    aiSuggestSnapshot = {};
    aiSuggestChoice = {};
    exitAiSuggestFlow();
  }

  function openAiSuggestFlow() {
    if (!openrouterProviderConfigured()) {
      alert("OPENROUTER_API_KEY is required for AI Suggestion.");
      return;
    }
    showAiSuggestSetupPage();
  }

  async function continueAiSuggestFromSetup() {
    const primary = String(catalog[KEY_SUGGESTION_MODEL] || "").trim();
    if (!primary.startsWith("openrouter/")) {
      alert("Choose a primary suggestion model (suggestion_model).");
      return;
    }
    const presetIds = getSelectedAiSuggestPresetIds();
    if (!presetIds.length) {
      alert("Select at least one preset to suggest models for.");
      return;
    }
    await executeAiSuggestRun(presetIds);
  }

  async function executeAiSuggestRun(presetIds) {
    const selectedPresetIds = Array.isArray(presetIds) ? presetIds.filter(Boolean) : [];
    aiSuggestRunInFlight = true;
    updateAiSuggestBar();
    updateTranslateBar();
    showAiSuggestRunPage();
    const summaryEl = document.getElementById("ai-suggest-run-summary");
    const cancelBtn = document.getElementById("btn-ai-suggest-run-cancel");
    let completed = 0;
    let planned = 0;

    appendAiSuggestRunLog("Starting AI model suggestion run…");
    appendAiSuggestRunLog(
      "Suggestion model: " + displayIdForCatalogModel(catalog[KEY_SUGGESTION_MODEL]),
    );
    const fb = String(catalog[KEY_SUGGESTION_FALLBACK] || "").trim();
    if (fb) {
      appendAiSuggestRunLog("Fallback: " + displayIdForCatalogModel(fb));
    }
    appendAiSuggestRunLog(
      "Presets selected: " + selectedPresetIds.length + " (" + selectedPresetIds.join(", ") + ")",
    );

    try {
      const res = await nativeFetch("/api/presets/suggest-models?stream=1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ catalog: catalog, preset_ids: selectedPresetIds }),
      });

      if (!res.ok) {
        const errJson = await res.json().catch(function () {
          return {};
        });
        appendAiSuggestRunLog("HTTP " + res.status + ": " + (errJson.error || res.statusText), true);
        if (summaryEl) summaryEl.textContent = "Failed before suggestion run.";
        return;
      }

      await readNdjsonResponse(res, function (rec) {
        if (rec.type === "parse_error") {
          appendAiSuggestRunLog("Could not parse stream line: " + (rec.line || ""), true);
          return;
        }
        if (rec.type === "log") {
          appendAiSuggestRunLog(rec.message || "", Boolean(rec.error));
          return;
        }
        if (rec.type === "start") {
          planned = rec.totalPresets != null ? rec.totalPresets : 0;
          if (summaryEl) {
            summaryEl.textContent = "Processing " + planned + " selected preset(s)…";
          }
          appendAiSuggestRunLog(
            "Will process " + planned + " preset(s); reusing server catalog cache when warm.",
          );
        } else if (rec.type === "job") {
          if (rec.status === "retry") {
            appendAiSuggestRunLog(
              "Retry (fallback) " + rec.presetId + " — primary error: " + (rec.primaryError || "?"),
              true,
            );
          } else if (rec.status === "running") {
            appendAiSuggestRunLog("Processing preset: " + rec.presetId + "…");
          } else if (rec.status === "ok") {
            completed++;
            const fbNote = rec.usedFallback ? " [via fallback]" : "";
            appendAiSuggestRunLog("Done: " + rec.presetId + fbNote);
            if (rec.suggestions) {
              aiSuggestStaging[rec.presetId] = {};
              Object.keys(rec.suggestions).forEach(function (eng) {
                const row = rec.suggestions[eng];
                if (row && row.model_id) {
                  aiSuggestStaging[rec.presetId][eng] = {
                    model_id: row.model_id,
                    reason: row.reason || "",
                    fallback_id: row.fallback_id || "",
                    fallback_reason: row.fallback_reason || "",
                    warning: row.warning,
                  };
                }
              });
            }
          } else if (rec.status === "error") {
            appendAiSuggestRunLog("Error: " + rec.presetId + " — " + (rec.error || "?"), true);
          }
          if (summaryEl && planned) {
            summaryEl.textContent =
              "Progress: " + Math.min(completed, planned) + " / " + planned + " preset(s) done.";
          }
        } else if (rec.type === "done") {
          if (rec.ok) {
            if (rec.snapshot) aiSuggestSnapshot = rec.snapshot;
            if (summaryEl) {
              summaryEl.textContent =
                "Finished. Review suggestions, then Save to catalog or Cancel.";
            }
            if (rec.errors && rec.errors.length) {
              rec.errors.forEach(function (errLine) {
                appendAiSuggestRunLog(errLine, true);
              });
            }
            appendAiSuggestRunLog("Run complete. Opening review…");
            showAiSuggestReview();
          } else {
            appendAiSuggestRunLog("Failed: " + (rec.error || "unknown"), true);
            if (summaryEl) summaryEl.textContent = rec.error || "Suggestion run failed.";
          }
        }
      });
    } catch (e) {
      appendAiSuggestRunLog(e.message || String(e), true);
      if (summaryEl) summaryEl.textContent = e.message || String(e);
    } finally {
      aiSuggestRunInFlight = false;
      if (cancelBtn) cancelBtn.disabled = false;
      updateAiSuggestBar();
      updateTranslateBar();
    }
  }

  async function readNdjsonResponse(res, onRecord) {
    const reader = res.body && res.body.getReader ? res.body.getReader() : null;
    if (!reader) {
      const t = await res.text();
      var j = {};
      try {
        j = JSON.parse(t);
      } catch {
        throw new Error(t.slice(0, 200) || String(res.status));
      }
      throw new Error(j.error || j.message || "Request failed HTTP " + res.status);
    }
    const dec = new TextDecoder();
    var buf = "";
    while (true) {
      var read = await reader.read();
      if (read.done) break;
      buf += dec.decode(read.value, { stream: true });
      var idx;
      while ((idx = buf.indexOf("\n")) >= 0) {
        var line = buf.slice(0, idx).trim();
        buf = buf.slice(idx + 1);
        if (!line) continue;
        var rec;
        try {
          rec = JSON.parse(line);
        } catch {
          onRecord({ type: "parse_error", line: line.slice(0, 200) });
          continue;
        }
        onRecord(rec);
      }
    }
    var tail = buf.trim();
    if (tail) {
      try {
        onRecord(JSON.parse(tail));
      } catch {
        onRecord({ type: "parse_error", line: tail.slice(0, 200) });
      }
    }
  }

  function getSelectedPreset() {
    return catalog.presets.find(function (s) {
      return s.id === selectedId;
    });
  }

  function syncBaselineFromPreset(preset) {
    if (!preset) {
      nameDescBaseline = { id: null, name: "", description: "" };
      return;
    }
    nameDescBaseline = {
      id: preset.id,
      name: preset.name || "",
      description: preset.description || "",
    };
  }

  function maybeClearTranslationsOnSourceEdit(preset) {
    if (!preset || preset.id !== nameDescBaseline.id) return;
    const n = preset.name || "";
    const d = preset.description || "";
    if (n === nameDescBaseline.name && d === nameDescBaseline.description) return;
    delete preset.translated_name;
    delete preset.translated_description;
  }

  function renderPresetList() {
    const ul = document.getElementById("preset-list");
    if (!ul) return;
    const q = presetSearch.trim().toLowerCase();
    ul.innerHTML = "";
    catalog.presets.forEach(function (preset) {
      if (q) {
        const hay = (preset.id + " " + (preset.name || "")).toLowerCase();
        if (!hay.includes(q)) return;
      }
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      if (preset.id === selectedId) btn.classList.add("active");
      btn.innerHTML =
        "<strong>" +
        escapeHtml(preset.name || preset.id) +
        '</strong><span class="preset-line-meta">' +
        escapeHtml(preset.id) +
        "</span>";
      btn.addEventListener("click", function () {
        selectedId = preset.id;
        syncBaselineFromPreset(preset);
        renderPresetList();
        renderDetail();
      });
      li.appendChild(btn);
      ul.appendChild(li);
    });
  }

  function formatPrice(n) {
    if (n == null || Number.isNaN(Number(n))) return "—";
    return (Number(n) * 1e6).toFixed(2);
  }

  function isModelPickerOpen() {
    const overlay = document.getElementById("model-picker-overlay");
    return overlay && !overlay.classList.contains("hidden");
  }

  function updateModelPickerChrome() {
    const title = document.getElementById("model-picker-title");
    const hint = document.getElementById("model-picker-hint");
    const eng = pickerEngineFromTarget(modelPickerTarget);
    const prov = eng
      ? providers.find(function (p) {
          return p.engine === eng;
        })
      : null;
    if (title) {
      const aiPickTitle = parseAiSuggestPickerTarget(modelPickerTarget);
      if (aiPickTitle) {
        const roleLabel = aiPickTitle.role === "fallback" ? "fallback" : "primary";
        title.textContent =
          "Suggested " + roleLabel + " model — " + aiPickTitle.presetId;
      } else if (isPresetProviderFallbackPickerTarget(modelPickerTarget)) {
        title.textContent = ((prov && prov.label) || eng) + " — Fallback";
      } else if (eng) title.textContent = (prov && prov.label) || eng;
      else if (modelPickerTarget === "preset") title.textContent = "Preset model";
      else if (modelPickerTarget === "translation_model") title.textContent = "Translation model";
      else if (modelPickerTarget === "suggestion_model") title.textContent = "Suggestion model";
      else if (modelPickerTarget === "suggestion_model_fallback") {
        title.textContent = "Suggestion model — Fallback";
      } else if (modelPickerTarget === "translation_model_fallback") {
        title.textContent = "Translation model — Fallback";
      } else title.textContent = "Select model";
    }
    if (hint) {
      const aiPick = parseAiSuggestPickerTarget(modelPickerTarget);
      if (aiPick) {
        const roleLabel = aiPick.role === "fallback" ? "fallback" : "primary";
        hint.textContent =
          "Override suggested " +
          roleLabel +
          " model for preset " +
          aiPick.presetId +
          " (" +
          (prov ? prov.label : aiPick.engine) +
          "). Stored under " +
          (aiPick.role === "fallback" ? "fallback_ids" : "model_ids") +
          ".";
      } else if (isPresetProviderFallbackPickerTarget(modelPickerTarget)) {
        hint.textContent = prov && prov.configured
          ? "Choose a fallback model for this provider. Stored under fallback_ids." +
            eng +
            " (used when the primary model fails)."
          : "No API key for this provider — type a fallback model id in the preset form.";
      } else if (eng) {
        hint.textContent = prov && prov.configured
          ? "Choose a primary model for this provider. Stored under model_ids." +
            eng +
            " as a canonical engine/model id."
          : "No API key for this provider — type a model id in the preset form (e.g. " +
            eng +
            "/model-name).";
      } else if (modelPickerTarget === "preset") {
        hint.textContent =
          "Choose the OpenRouter model for the selected preset. Pricing is per 1M tokens (USD).";
      } else if (modelPickerTarget === "translation_model") {
        hint.textContent =
          "Used for “Translate missing”, stored as translation_model. On failure, the server retries with translation_model_fallback when that field is set.";
      } else if (modelPickerTarget === "suggestion_model") {
        hint.textContent =
          "Used for AI Suggestion (OpenRouter web search). Stored as suggestion_model in presets.json.";
      } else if (modelPickerTarget === "suggestion_model_fallback") {
        hint.textContent =
          "Optional retry when the primary suggestion model fails. Stored as suggestion_model_fallback.";
      } else if (modelPickerTarget === "translation_model_fallback") {
        hint.textContent =
          "Optional retry model when the primary translation model errors. Stored as translation_model_fallback.";
      } else {
        hint.textContent = "";
      }
    }
  }

  async function loadModelsForEngine(engine, opts) {
    const options = opts || {};
    if (!engine) return [];
    if (!options.force && Array.isArray(modelsByEngine[engine])) return modelsByEngine[engine];
    try {
      const forceQ = options.force ? "&force=1" : "";
      const res = await nativeFetch(
        "/api/models?engine=" + encodeURIComponent(engine) + forceQ,
        { cache: "no-store" },
      );
      if (!res.ok) {
        modelsByEngine[engine] = [];
        return [];
      }
      const json = await res.json();
      modelsByEngine[engine] = json.data || [];
      if (engine === "openrouter") models = modelsByEngine[engine];
      return modelsByEngine[engine];
    } catch {
      modelsByEngine[engine] = [];
      return [];
    }
  }

  async function openModelPicker(target) {
    const t = target || "preset";
    const aiPick = parseAiSuggestPickerTarget(t);
    const eng = pickerEngineFromTarget(t);
    const silentLoad = isAiSuggestFlowVisible();
    if (!aiPick && (t === "preset" || (eng && isPresetProviderPickerTarget(t))) && !getSelectedPreset()) {
      return;
    }
    const needsOpenRouterList =
      t === "suggestion_model" ||
      t === "suggestion_model_fallback" ||
      t === "translation_model" ||
      t === KEY_TRANSLATION_FALLBACK ||
      t === "preset";
    if (needsOpenRouterList) {
      await loadModelsForEngine("openrouter", { silent: silentLoad });
    }
    if (eng) {
      const prov = providers.find(function (p) {
        return p.engine === eng;
      });
      if (!prov || !prov.configured) {
        alert(
          "No API key for " +
            (prov ? prov.label : eng) +
            ". Type a model id in the field (e.g. " +
            eng +
            "/model-name).",
        );
        return;
      }
      if (!silentLoad) setStatus("Loading " + (prov.label || eng) + " models…", null);
      await loadModelsForEngine(eng, { silent: silentLoad });
      if (!silentLoad) setStatus("", null);
      if (!modelsByEngine[eng] || !modelsByEngine[eng].length) {
        alert("No models returned for " + (prov.label || eng) + ". Check the API key or enter an id manually.");
        return;
      }
    }
    modelPickerTarget = t;
    updateModelPickerChrome();
    const overlay = document.getElementById("model-picker-overlay");
    const modalSearch = document.getElementById("model-modal-search");
    if (!overlay) return;
    overlay.classList.remove("hidden");
    overlay.setAttribute("aria-hidden", "false");
    if (modalSearch) modalSearch.value = modelSearch;
    const pickerModels = getPickerModels();
    pickerModels.forEach(function (m) {
      expandedProviders.add(providerSortKeyFromModelId(m.id));
    });
    renderModelList();
    if (modalSearch) {
      setTimeout(function () {
        modalSearch.focus();
        modalSearch.select();
      }, 0);
    }
  }

  function closeModelPicker() {
    const overlay = document.getElementById("model-picker-overlay");
    if (!overlay) return;
    overlay.classList.add("hidden");
    overlay.setAttribute("aria-hidden", "true");
    const modalSearch = document.getElementById("model-modal-search");
    modelSearch = (modalSearch && modalSearch.value) || "";
  }

  function renderModelListInto(container) {
    if (!container) return;
    const selectedModelId = getSelectedModelIdForPicker();
    const q = modelSearch.trim().toLowerCase();

    const pickerModels = getPickerModels();
    const filtered = pickerModels.filter(function (m) {
      if (!q) return true;
      const id = (m.id || "").toLowerCase();
      const disp = modelPickerDisplay(m).toLowerCase();
      const name = (m.name || "").toLowerCase();
      return id.includes(q) || disp.includes(q) || name.includes(q);
    });

    const byProv = new Map();
    filtered.forEach(function (m) {
      const k = providerSortKeyFromModelId(m.id);
      if (!byProv.has(k)) byProv.set(k, []);
      byProv.get(k).push(m);
    });
    const keys = Array.from(byProv.keys()).sort(function (a, b) {
      return a.localeCompare(b);
    });

    container.innerHTML = "";
    keys.forEach(function (prov) {
      const block = document.createElement("div");
      block.className = "provider-block";
      const expanded = expandedProviders.has(prov);
      const head = document.createElement("button");
      head.type = "button";
      head.className = "provider-header";
      head.innerHTML =
        '<span class="chev">' +
        (expanded ? "▼" : "▶") +
        "</span><strong>" +
        escapeHtml(prov) +
        "</strong>";
      head.addEventListener("click", function () {
        if (expandedProviders.has(prov)) expandedProviders.delete(prov);
        else expandedProviders.add(prov);
        renderModelList();
      });
      block.appendChild(head);
      if (expanded) {
        const list = byProv.get(prov) || [];
        list
          .slice()
          .sort(function (a, b) {
            return (a.name || a.id).localeCompare(b.name || b.id);
          })
          .forEach(function (m) {
            const row = document.createElement("button");
            row.type = "button";
            row.className = "model-row";
            if (m.id === selectedModelId) row.classList.add("selected");
            const pp = m.pricing || {};
            const priceLine =
              pp.prompt != null
                ? "In $" + formatPrice(pp.prompt) + " / 1M · Out $" + formatPrice(pp.completion) + " / 1M"
                : "Cost n/a";
            row.innerHTML =
              '<span class="model-id">' +
              escapeHtml(modelPickerDisplay(m)) +
              '</span><span class="model-name">' +
              escapeHtml(m.name || "") +
              '</span><span class="model-price">' +
              escapeHtml(priceLine) +
              "</span>";
            row.addEventListener("click", function () {
              const aiPick = parseAiSuggestPickerTarget(modelPickerTarget);
              if (aiPick) {
                if (aiPick.role === "fallback") {
                  setAiSuggestStagingFallbackModel(aiPick.presetId, aiPick.engine, m.id);
                } else {
                  setAiSuggestStagingModel(aiPick.presetId, aiPick.engine, m.id);
                }
                renderAiSuggestReview();
              } else {
              const eng = pickerEngineFromTarget(modelPickerTarget);
              if ((eng && isPresetProviderPickerTarget(modelPickerTarget)) || modelPickerTarget === "preset") {
                const preset = getSelectedPreset();
                if (!preset) return;
                const engine = eng || "openrouter";
                if (isPresetProviderFallbackPickerTarget(modelPickerTarget)) {
                  setPresetFallbackId(preset, engine, m.id);
                } else {
                  setPresetModelId(preset, engine, m.id);
                }
                renderProviderModels();
              } else if (modelPickerTarget === "translation_model") {
                catalog[KEY_TRANSLATION_MODEL] = m.id;
                syncHeaderTranslationModelsDisplay();
              } else if (modelPickerTarget === "translation_model_fallback") {
                catalog[KEY_TRANSLATION_FALLBACK] = m.id;
                syncHeaderTranslationModelsDisplay();
              } else if (modelPickerTarget === "suggestion_model") {
                catalog[KEY_SUGGESTION_MODEL] = m.id;
                syncSuggestionModelsDisplay();
                updateAiSuggestContinueButton();
              } else if (modelPickerTarget === "suggestion_model_fallback") {
                catalog[KEY_SUGGESTION_FALLBACK] = m.id;
                syncSuggestionModelsDisplay();
                updateAiSuggestContinueButton();
              }
              }
              if (isModelPickerOpen()) closeModelPicker();
              else renderModelList();
            });
            block.appendChild(row);
          });
      }
      container.appendChild(block);
    });
  }

  function renderModelList() {
    if (isModelPickerOpen()) {
      renderModelListInto(document.getElementById("model-modal-list"));
    }
  }

  function renderTranslations() {
    const panel = document.getElementById("translations-panel");
    const host = document.getElementById("translations-tables");
    if (!panel || !host) return;
    panel.classList.remove("hidden");
    const preset = getSelectedPreset();
    if (!preset) {
      host.innerHTML = "";
      return;
    }
    const src = meta.sourceLocale || "en-GB";

    function rowsForMap(map, sourceField) {
      let html = '<div class="trans-table-wrap"><table class="trans-table">';
      html += "<thead><tr><th>Locale</th><th>English name</th><th>Value</th></tr></thead><tbody>";
      uiLanguages.forEach(function (row) {
        const code = row.code;
        const englishName =
          row.englishName && String(row.englishName).trim()
            ? String(row.englishName).trim()
            : row.label || code;
        const dir = row.direction === "rtl" ? "rtl" : "ltr";
        let val;
        let missing = false;
        if (code === src) {
          val = sourceField;
        } else {
          val = pickLocaleString(map, code);
          if (!val) missing = true;
        }
        html +=
          "<tr" +
          (missing ? ' class="missing"' : "") +
          "><td>" +
          escapeHtml(code) +
          '</td><td dir="ltr">' +
          escapeHtml(englishName) +
          '</td><td dir="' +
          escapeHtml(dir) +
          '">' +
          (missing ? "(missing)" : escapeHtml(val)) +
          "</td></tr>";
      });
      html += "</tbody></table></div>";
      return html;
    }

    host.innerHTML =
      '<div class="trans-sub">Names</div>' +
      rowsForMap(preset.translated_name, preset.name || "") +
      '<div class="trans-sub">Descriptions</div>' +
      rowsForMap(preset.translated_description, preset.description || "");
  }

  function setTestModelResultClass(out, state) {
    if (!out) return;
    const base = out.classList.contains("provider-model-test-result")
      ? "provider-model-test-result"
      : "test-result span-2 model-test-result";
    out.className = base + (state ? " " + state : "");
  }

  function clearTestModelResult() {
    document.querySelectorAll(".provider-model-test-result").forEach(function (out) {
      out.textContent = "";
      setTestModelResultClass(out, "");
    });
  }

  function buildProviderModelSlot(preset, prov, engine, role, testOut) {
    const slot = document.createElement("div");
    slot.className = "provider-model-slot";

    const slotLabel = document.createElement("span");
    slotLabel.className = "provider-model-slot-label";
    slotLabel.textContent = role === "fallback" ? "Fallback" : "Primary";
    slot.appendChild(slotLabel);

    const input = document.createElement("input");
    input.type = "text";
    input.className = "provider-model-input";
    input.placeholder = engine + "/model-name";
    input.value = role === "fallback" ? presetFallbackId(preset, engine) : presetModelId(preset, engine);
    input.autocomplete = "off";
    input.addEventListener("input", function () {
      if (role === "fallback") setPresetFallbackId(preset, engine, input.value);
      else setPresetModelId(preset, engine, input.value);
    });
    input.addEventListener("change", function () {
      const canon = canonicalForEngine(engine, input.value);
      if (role === "fallback") {
        setPresetFallbackId(preset, engine, canon);
        input.value = presetFallbackId(preset, engine);
      } else {
        setPresetModelId(preset, engine, canon);
        input.value = presetModelId(preset, engine);
      }
    });
    slot.appendChild(input);

    const slotActions = document.createElement("div");
    slotActions.className = "provider-model-slot-actions";
    if (prov.configured) {
      const btnChoose = document.createElement("button");
      btnChoose.type = "button";
      btnChoose.className = "btn secondary sm";
      btnChoose.textContent = "Choose";
      btnChoose.addEventListener("click", function () {
        openModelPicker(presetProviderPickerTarget(engine, role));
      });
      slotActions.appendChild(btnChoose);
    }
    if (role === "primary") {
      const btnTest = document.createElement("button");
      btnTest.type = "button";
      btnTest.className = "btn secondary sm";
      btnTest.textContent = "Test";
      btnTest.addEventListener("click", function () {
        testProviderModel(engine, testOut, "primary");
      });
      slotActions.appendChild(btnTest);
    } else {
      const btnTestFb = document.createElement("button");
      btnTestFb.type = "button";
      btnTestFb.className = "btn secondary sm";
      btnTestFb.textContent = "Test";
      btnTestFb.addEventListener("click", function () {
        testProviderModel(engine, testOut, "fallback");
      });
      slotActions.appendChild(btnTestFb);
    }
    slot.appendChild(slotActions);
    return slot;
  }

  function renderProviderModels() {
    const host = document.getElementById("provider-models-host");
    if (!host) return;
    const preset = getSelectedPreset();
    if (!preset) {
      host.innerHTML = "";
      return;
    }
    host.innerHTML = "";
    providersForPreset(preset).forEach(function (prov) {
      const engine = prov.engine;
      const row = document.createElement("div");
      row.className = "provider-model-row";
      row.dataset.engine = engine;

      const label = document.createElement("div");
      label.className = "provider-model-label";
      const badge = prov.configured
        ? '<span class="provider-key-badge ok">API key</span>'
        : '<span class="provider-key-badge muted">No key — type id</span>';
      label.innerHTML = "<strong>" + escapeHtml(prov.label || engine) + "</strong> " + badge;
      row.appendChild(label);

      const out = document.createElement("div");
      out.className = "provider-model-test-result";

      const slots = document.createElement("div");
      slots.className = "provider-model-slots";
      slots.appendChild(buildProviderModelSlot(preset, prov, engine, "primary", out));
      slots.appendChild(buildProviderModelSlot(preset, prov, engine, "fallback", out));
      row.appendChild(slots);
      row.appendChild(out);

      host.appendChild(row);
    });
  }

  function renderDetail() {
    const empty = document.getElementById("detail-empty");
    const form = document.getElementById("detail-form");
    const preset = getSelectedPreset();
    if (!empty || !form) return;
    if (!preset) {
      if (lastDetailPresetId != null) clearTestModelResult();
      lastDetailPresetId = null;
      empty.classList.remove("hidden");
      form.classList.add("hidden");
      updateTranslateBar();
      return;
    }
    if (preset.id !== lastDetailPresetId) clearTestModelResult();
    lastDetailPresetId = preset.id;
    empty.classList.add("hidden");
    form.classList.remove("hidden");

    refreshSourceLocaleFieldLabels();

    document.getElementById("detail-title").textContent = preset.name || preset.id;

    document.getElementById("field-id").value = preset.id;
    document.getElementById("field-name").value = preset.name || "";
    document.getElementById("field-description").value = preset.description || "";
    document.getElementById("field-prompt-hint").value = preset.prompt_hint || "";

    renderProviderModels();
    renderTranslations();
    updateTranslateBar();
  }

  async function parsePresetsFetchError(sRes) {
    let msg = "";
    try {
      const errBody = await sRes.json();
      if (errBody && typeof errBody.error === "string" && errBody.error.trim()) {
        msg = errBody.error.trim();
      }
    } catch {
      /* ignore */
    }
    return (
      msg ||
      "Could not load the presets catalog. The server returned an unexpected response (HTTP " +
        sRes.status +
        "). Try reloading the page or restarting pnpm run dev:presets-editor."
    );
  }

  async function loadAll(opts) {
    const options = opts || {};
    setEditorBootVisible(true, options.reload ? "Reloading from disk…" : "Loading presets catalog…");
    setStatus("Loading…", null);
    const presetsUrl = options.reload ? "/api/presets?reload=1" : "/api/presets";
    let reloadedModelsPruned = 0;
    try {
      let mRes;
      let uRes;
      let sRes;
      let provRes;
      if (options.reload) {
        sRes = await nativeFetch(presetsUrl, { cache: "no-store" });
        if (!sRes.ok) throw new Error(await parsePresetsFetchError(sRes));
        const prunedHdr = sRes.headers.get("X-Editor-Presets-Models-Pruned");
        reloadedModelsPruned = prunedHdr != null ? parseInt(prunedHdr, 10) || 0 : 0;
        catalog = await sRes.json();
        [mRes, uRes, provRes] = await Promise.all([
          nativeFetch("/api/meta", { cache: "no-store" }),
          nativeFetch("/api/ui-languages", { cache: "no-store" }),
          nativeFetch("/api/providers", { cache: "no-store" }),
        ]);
      } else {
        [mRes, uRes, sRes, provRes] = await Promise.all([
          nativeFetch("/api/meta", { cache: "no-store" }),
          nativeFetch("/api/ui-languages", { cache: "no-store" }),
          nativeFetch(presetsUrl, { cache: "no-store" }),
          nativeFetch("/api/providers", { cache: "no-store" }),
        ]);
        if (!sRes.ok) throw new Error(await parsePresetsFetchError(sRes));
        catalog = await sRes.json();
      }
      if (!mRes.ok) throw new Error("meta HTTP " + mRes.status);
      if (!uRes.ok) throw new Error("ui-languages HTTP " + uRes.status);
      meta = await mRes.json();
      if (typeof meta.sessionErrorCount === "number") {
        serverSessionErrorCount = meta.sessionErrorCount;
        updateServerLogButtonState();
      }
      uiLanguages = await uRes.json();
      if (!Array.isArray(catalog.presets) && Array.isArray(catalog.skills)) {
        catalog.presets = catalog.skills;
        delete catalog.skills;
      }
      refreshSourceLocaleFieldLabels();
      if (!provRes.ok) {
        const t = await provRes.text();
        throw new Error("providers: " + t);
      }
      const provJson = await provRes.json();
      providers = provJson.providers || [];
      if (!catalog.presets) catalog.presets = [];
      normalizeCatalogModelIds();

      if (!options.reload || modelsCatalogPrefetchState !== "ready") {
        setEditorBootMessage("Loading provider model catalogs…");
        await prefetchAllEngineCatalogs({
          onProgress: function (msg) {
            setEditorBootMessage(msg);
            setStatus(msg, null);
          },
        });
        models.forEach(function (m) {
          expandedProviders.add(providerSortKeyFromModelId(m.id));
        });
      }

      migrateCatalogTranslationKeys();
      syncHeaderTranslationModelsDisplay();
      syncSuggestionModelsDisplay();
      if (selectedId && !catalog.presets.some(function (s) { return s.id === selectedId; })) {
        selectedId = null;
      }
      renderPresetList();
      renderDetail();
      updateAiSuggestBar();
      if (options.reload) {
        if (reloadedModelsPruned > 0) {
          setStatus(
            "Reloaded — cleared " +
              reloadedModelsPruned +
              " catalog model(s) not in provider list (see server log); save to persist",
            true,
          );
        } else {
          setStatus("Reloaded from disk", true);
        }
      } else {
        setStatus("Ready", true);
      }
      setEditorBootVisible(false);
      checkServerLogAfterStartup();
    } catch (e) {
      const msg = e.message || String(e);
      setStatus(msg, false);
      setEditorBootMessage("Failed to load: " + msg);
    }
  }

  async function saveCatalog() {
    setStatus("Saving…", null);
    normalizeCatalogModelIds();
    try {
      const res = await nativeFetch("/api/presets", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(catalog),
      });
      const data = await res.json().catch(function () {
        return {};
      });
      if (!res.ok) throw new Error(data.error || "Save failed");
      catalog = data.catalog || catalog;
      syncBaselineFromPreset(getSelectedPreset());
      setStatus("Saved (repo + data mirror)", true);
      renderPresetList();
      renderDetail();
      syncHeaderTranslationModelsDisplay();
      syncSuggestionModelsDisplay();
      updateTranslateBar();
    } catch (e) {
      setStatus(e.message || String(e), false);
    }
  }

  async function translateMissing() {
    const primary = String(catalog[KEY_TRANSLATION_MODEL] || "").trim();
    if (!primary.startsWith("openrouter/")) {
      alert("Choose a primary translation model (translation_model).");
      return;
    }
    if (computeTranslateQueueInfo().slots === 0) return;

    openTranslateProgressModal();
    const summaryEl = document.getElementById("translate-progress-summary");
    let completedSlots = 0;
    let plannedSlots = 0;

    try {
      const res = await nativeFetch("/api/presets/translate-missing?stream=1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ catalog: catalog }),
      });

      if (!res.ok) {
        const errJson = await res.json().catch(function () {
          return {};
        });
        appendTranslateLog("HTTP " + res.status + ": " + (errJson.error || res.statusText), true);
        if (summaryEl) summaryEl.textContent = "Failed before translation run.";
        markTranslateProgressDone();
        return;
      }

      await readNdjsonResponse(res, function (rec) {
        if (rec.type === "parse_error") {
          appendTranslateLog("Could not parse stream line: " + (rec.line || ""), true);
          return;
        }
        if (rec.type === "start") {
          plannedSlots = rec.missingSlots != null ? rec.missingSlots : 0;
          if (summaryEl) {
            summaryEl.textContent =
              "Running " +
              (rec.totalJobs != null ? rec.totalJobs : 0) +
              " request(s), up to " +
              plannedSlots +
              " field(s).";
          }
          appendTranslateLog(
            "Planned " +
              (rec.totalJobs != null ? rec.totalJobs : 0) +
              " OpenRouter call(s); up to " +
              (rec.missingSlots != null ? rec.missingSlots : 0) +
              " string field(s).",
          );
        } else if (rec.type === "job") {
          if (rec.status === "retry") {
            appendTranslateLog(
              "Retry (fallback) " +
                rec.presetId +
                " · " +
                rec.locale +
                " — primary error: " +
                (rec.primaryError || "?"),
            );
          } else if (rec.status === "ok") {
            const bits = [];
            if (rec.name) bits.push("name");
            if (rec.desc) bits.push("description");
            completedSlots += (rec.name ? 1 : 0) + (rec.desc ? 1 : 0);
            const fbNote = rec.usedFallback ? " [via fallback]" : "";
            appendTranslateLog(
              "OK  " +
                rec.presetId +
                " · " +
                rec.locale +
                " — " +
                (bits.length ? bits.join(", ") : "(no new fields)") +
                fbNote,
            );
          } else if (rec.status === "error") {
            appendTranslateLog(
              "ERR " + rec.presetId + " · " + rec.locale + ": " + (rec.error || "?"),
              true,
            );
          } else if (rec.status === "skipped") {
            appendTranslateLog("Skip " + rec.presetId + " · " + rec.locale);
          }
          if (summaryEl && plannedSlots) {
            summaryEl.textContent =
              "Progress: " +
              Math.min(completedSlots, plannedSlots) +
              " / " +
              plannedSlots +
              " field(s) filled (live).";
          }
        } else if (rec.type === "done") {
          if (rec.ok && rec.catalog) {
            catalog = rec.catalog;
            if (summaryEl) {
              summaryEl.textContent =
                "Finished. Filled " +
                (rec.filled != null ? rec.filled : 0) +
                " field(s). Catalog saved to repo + data mirror.";
            }
            appendTranslateLog("Saved catalog (version " + (catalog.version || "?") + ").");
            if (rec.errors && rec.errors.length) {
              rec.errors.forEach(function (errLine) {
                appendTranslateLog(errLine, true);
              });
              appendTranslateLog("Completed with " + rec.errors.length + " error line(s).", true);
            }
            syncBaselineFromPreset(getSelectedPreset());
            renderPresetList();
            renderDetail();
            syncHeaderTranslationModelsDisplay();
          } else {
            appendTranslateLog("Failed: " + (rec.error || "unknown"), true);
            if (rec.errors && rec.errors.length) {
              rec.errors.forEach(function (errLine) {
                appendTranslateLog(errLine, true);
              });
            }
            if (summaryEl) summaryEl.textContent = rec.error || "Translation or save failed.";
          }
        }
      });
    } catch (e) {
      appendTranslateLog(e.message || String(e), true);
      if (summaryEl) summaryEl.textContent = e.message || String(e);
    }
    markTranslateProgressDone();
  }

  async function testProviderModel(engine, outEl, role) {
    const preset = getSelectedPreset();
    const out = outEl || null;
    const useFallback = role === "fallback";
    const raw = preset
      ? useFallback
        ? presetFallbackId(preset, engine)
        : presetModelId(preset, engine)
      : "";
    const modelId = raw ? canonicalForEngine(engine, raw) : "";
    if (!preset || !modelId) {
      if (out) {
        out.textContent = useFallback ? "Enter a fallback model id first." : "Enter a model id first.";
        setTestModelResultClass(out, "err");
      }
      return;
    }
    if (out) {
      out.textContent = "Testing…";
      setTestModelResultClass(out, "");
    }
    try {
      const res = await nativeFetch("/api/presets/test-model", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ modelId: modelId }),
      });
      const data = await res.json().catch(function () {
        return {};
      });
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Request failed");
      }
      if (out) {
        out.textContent =
          "OK (" +
          (data.latencyMs != null ? data.latencyMs + " ms" : "?") +
          ") — " +
          (data.preview || "").slice(0, 80);
        setTestModelResultClass(out, "ok");
      }
    } catch (e) {
      if (out) {
        out.textContent = e.message || String(e);
        setTestModelResultClass(out, "err");
      }
    }
  }

  function wireField(id, key) {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", function () {
      const preset = getSelectedPreset();
      if (!preset) return;
      preset[key] = el.value;
      if (key === "name" || key === "description") {
        maybeClearTranslationsOnSourceEdit(preset);
        renderTranslations();
        updateTranslateBar();
      }
    });
  }

  document.getElementById("preset-search").addEventListener("input", function (e) {
    presetSearch = e.target.value || "";
    renderPresetList();
  });

  const modelModalSearch = document.getElementById("model-modal-search");
  if (modelModalSearch) {
    modelModalSearch.addEventListener("input", function (e) {
      modelSearch = e.target.value || "";
      renderModelList();
    });
  }

  const btnModalExpand = document.getElementById("btn-modal-expand-all");
  const btnModalCollapse = document.getElementById("btn-modal-collapse-all");
  if (btnModalExpand) {
    btnModalExpand.addEventListener("click", function () {
      getPickerModels().forEach(function (m) {
        expandedProviders.add(providerSortKeyFromModelId(m.id));
      });
      renderModelList();
    });
  }
  if (btnModalCollapse) {
    btnModalCollapse.addEventListener("click", function () {
      expandedProviders.clear();
      renderModelList();
    });
  }

  const btnPickTranslation = document.getElementById("btn-pick-translation-model");
  if (btnPickTranslation) {
    btnPickTranslation.addEventListener("click", function () {
      openModelPicker("translation_model");
    });
  }
  const btnPickFallback = document.getElementById("btn-pick-translation-model-fallback");
  if (btnPickFallback) {
    btnPickFallback.addEventListener("click", function () {
      openModelPicker("translation_model_fallback");
    });
  }

  const modelPickerOverlay = document.getElementById("model-picker-overlay");
  const modelPickerClose = document.getElementById("model-picker-close");
  if (modelPickerClose) {
    modelPickerClose.addEventListener("click", function () {
      closeModelPicker();
    });
  }
  if (modelPickerOverlay) {
    modelPickerOverlay.addEventListener("click", function (e) {
      if (e.target === modelPickerOverlay) closeModelPicker();
    });
  }

  const translateProgressOverlay = document.getElementById("translate-progress-overlay");
  const translateProgressClose = document.getElementById("translate-progress-close");
  if (translateProgressClose) {
    translateProgressClose.addEventListener("click", function () {
      const o = document.getElementById("translate-progress-overlay");
      if (!o || o.getAttribute("data-run-done") !== "1") return;
      closeTranslateProgressModal();
    });
  }
  if (translateProgressOverlay) {
    translateProgressOverlay.addEventListener("click", function (e) {
      if (e.target !== translateProgressOverlay) return;
      if (translateProgressOverlay.getAttribute("data-run-done") !== "1") return;
      closeTranslateProgressModal();
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    const alertOv = document.getElementById("server-log-alert-overlay");
    if (alertOv && !alertOv.classList.contains("hidden")) {
      e.preventDefault();
      dismissServerLogStartupAlert();
      return;
    }
    const logOv = document.getElementById("server-log-overlay");
    if (logOv && !logOv.classList.contains("hidden")) {
      e.preventDefault();
      closeServerLogModal();
      return;
    }
    const tp = document.getElementById("translate-progress-overlay");
    if (tp && !tp.classList.contains("hidden")) {
      if (tp.getAttribute("data-run-done") === "1") {
        e.preventDefault();
        closeTranslateProgressModal();
      }
      return;
    }
    if (!isModelPickerOpen()) return;
    e.preventDefault();
    closeModelPicker();
  });

  document.getElementById("btn-reload").addEventListener("click", function () {
    loadAll({ reload: true });
  });

  const btnViewLogs = document.getElementById("btn-view-logs");
  if (btnViewLogs) {
    btnViewLogs.addEventListener("click", function () {
      openServerLogModal();
    });
  }
  const serverLogClose = document.getElementById("server-log-close");
  if (serverLogClose) {
    serverLogClose.addEventListener("click", function () {
      closeServerLogModal();
    });
  }
  const btnServerLogRefresh = document.getElementById("btn-server-log-refresh");
  if (btnServerLogRefresh) {
    btnServerLogRefresh.addEventListener("click", function () {
      refreshServerLogViewer();
    });
  }
  const serverLogOverlay = document.getElementById("server-log-overlay");
  if (serverLogOverlay) {
    serverLogOverlay.addEventListener("click", function (e) {
      if (e.target === serverLogOverlay) closeServerLogModal();
    });
  }
  const btnServerLogAlertView = document.getElementById("btn-server-log-alert-view");
  if (btnServerLogAlertView) {
    btnServerLogAlertView.addEventListener("click", function () {
      dismissServerLogStartupAlert();
      openServerLogModal();
    });
  }
  const btnServerLogAlertDismiss = document.getElementById("btn-server-log-alert-dismiss");
  if (btnServerLogAlertDismiss) {
    btnServerLogAlertDismiss.addEventListener("click", function () {
      dismissServerLogStartupAlert();
    });
  }

  document.getElementById("btn-save-catalog").addEventListener("click", function () {
    saveCatalog();
  });

  document.getElementById("btn-translate-missing").addEventListener("click", function () {
    translateMissing();
  });

  const btnAiSuggest = document.getElementById("btn-ai-suggest");
  if (btnAiSuggest) {
    btnAiSuggest.addEventListener("click", function () {
      openAiSuggestFlow();
    });
  }

  const btnAiSuggestContinue = document.getElementById("btn-ai-suggest-continue");
  if (btnAiSuggestContinue) {
    btnAiSuggestContinue.addEventListener("click", function () {
      continueAiSuggestFromSetup();
    });
  }

  const btnAiSuggestPresetsAll = document.getElementById("btn-ai-suggest-presets-all");
  if (btnAiSuggestPresetsAll) {
    btnAiSuggestPresetsAll.addEventListener("click", function () {
      setAllAiSuggestPresetChecks(true);
    });
  }
  const btnAiSuggestPresetsNone = document.getElementById("btn-ai-suggest-presets-none");
  if (btnAiSuggestPresetsNone) {
    btnAiSuggestPresetsNone.addEventListener("click", function () {
      setAllAiSuggestPresetChecks(false);
    });
  }

  const btnAiSuggestSetupCancel = document.getElementById("btn-ai-suggest-setup-cancel");
  if (btnAiSuggestSetupCancel) {
    btnAiSuggestSetupCancel.addEventListener("click", function () {
      exitAiSuggestFlow();
    });
  }

  const btnAiSuggestRunCancel = document.getElementById("btn-ai-suggest-run-cancel");
  if (btnAiSuggestRunCancel) {
    btnAiSuggestRunCancel.addEventListener("click", function () {
      if (aiSuggestRunInFlight) return;
      exitAiSuggestFlow();
    });
  }

  const btnPickSuggestion = document.getElementById("btn-pick-suggestion-model");
  if (btnPickSuggestion) {
    btnPickSuggestion.addEventListener("click", function () {
      openModelPicker("suggestion_model");
    });
  }
  const btnPickSuggestionFb = document.getElementById("btn-pick-suggestion-model-fallback");
  if (btnPickSuggestionFb) {
    btnPickSuggestionFb.addEventListener("click", function () {
      openModelPicker("suggestion_model_fallback");
    });
  }

  const btnAiSuggestSave = document.getElementById("btn-ai-suggest-save");
  if (btnAiSuggestSave) {
    btnAiSuggestSave.addEventListener("click", function () {
      applyAiSuggestStagingToCatalog();
    });
  }

  const btnAiSuggestCancel = document.getElementById("btn-ai-suggest-cancel");
  if (btnAiSuggestCancel) {
    btnAiSuggestCancel.addEventListener("click", function () {
      cancelAiSuggestReview();
    });
  }

  document.getElementById("field-id").addEventListener("change", function (e) {
    const preset = getSelectedPreset();
    if (!preset) return;
    const next = e.target.value.trim();
    if (!next || next === preset.id) return;
    if (catalog.presets.some(function (s) { return s.id === next && s !== preset; })) {
      alert("That id is already in use.");
      e.target.value = preset.id;
      return;
    }
    preset.id = next;
    selectedId = next;
    nameDescBaseline.id = next;
    renderPresetList();
    renderDetail();
  });

  wireField("field-name", "name");
  wireField("field-description", "description");
  wireField("field-prompt-hint", "prompt_hint");

  document.getElementById("btn-add-preset").addEventListener("click", function () {
    const nid = "new-preset-" + Date.now();
    catalog.presets.push({
      id: nid,
      name: "New preset",
      description: "",
      model_ids: { openrouter: "openrouter/openrouter/free" },
      prompt_hint: "Be concise and direct.",
    });
    selectedId = nid;
    syncBaselineFromPreset(getSelectedPreset());
    renderPresetList();
    renderDetail();
  });

  document.getElementById("btn-delete-preset").addEventListener("click", function () {
    const preset = getSelectedPreset();
    if (!preset) return;
    if (!confirm("Delete preset " + preset.id + "?")) return;
    catalog.presets = catalog.presets.filter(function (s) {
      return s.id !== preset.id;
    });
    selectedId = null;
    nameDescBaseline = { id: null, name: "", description: "" };
    renderPresetList();
    renderDetail();
  });

  loadAll();
})();
