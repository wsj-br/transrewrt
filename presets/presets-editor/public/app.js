(function () {
  "use strict";

  const HEALTH_PATH = "/api/health";
  const HEALTH_POLL_MS = 10_000;
  const rawFetch = window.fetch.bind(window);

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

  function editorFetch(input, init) {
    return rawFetch(input, init).catch(function (err) {
      if (editorFetchFailureMeansServerGone(err)) showEditorServerDown();
      return Promise.reject(err);
    });
  }

  window.fetch = editorFetch;

  function editorHealthPollTick() {
    if (document.visibilityState !== "visible") return;
    rawFetch(HEALTH_PATH, { cache: "no-store", method: "GET" })
      .then(function (res) {
        if (res.ok) hideEditorServerDown();
        else showEditorServerDown();
      })
      .catch(function () {
        showEditorServerDown();
      });
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
    const res = await fetch("/api/logs", { cache: "no-store" });
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
  /** @type {Record<string, { latency_p90_s?: number | null, throughput_p90?: number | null } | null | undefined>} */
  var openRouterPerformanceByPath = {};
  /** @type {Set<string>} */
  var openRouterPerformancePending = new Set();
  var translateRunInFlight = false;
  /** Skip per-checkbox sync while master row bulk-toggles all preset checkboxes. */
  var presetSelectListBulkSync = false;
  var KEY_TRANSLATION_MODEL = "translation_model";
  var KEY_TRANSLATION_FALLBACK = "translation_model_fallback";
  var PRESET_PROVIDER_PICKER_PREFIX = "preset_provider:";
  var PRESET_PROVIDER_FALLBACK_PICKER_PREFIX = "preset_provider_fb:";
  var DIRECT_LLM_ENGINES = new Set([
    "openrouter",
    "openai",
    "anthropic",
    "google",
    "deepseek",
    "groq",
    "mistralai",
    "local",
    "xai",
    "cerebras",
  ]);

  var providers = [];
  var modelsByEngine = {};
  /** @type {Record<string, Record<string, { rank: number, index: number }>>} */
  var modelRanksCache = {};
  /** @type {Record<string, boolean>} */
  var modelRanksPending = {};
  var modelsCatalogPrefetchPromise = null;
  /** @type {"idle"|"loading"|"ready"|"error"} */
  var modelsCatalogPrefetchState = "idle";
  var catalogLoadProgress = 0;
  var aiSuggestRunInFlight = false;
  /** @type {AbortController | null} */
  var aiSuggestAbortController = null;
  /** @type {Record<string, Record<string, { primary?: object, fallback?: object }>>} */
  var aiSuggestStaging = {};
  var serverSessionErrorCount = 0;
  var serverLogAlertShown = false;

  function pickerEngineFromTarget(target) {
    const t = target || "";
    if (t.startsWith(PRESET_PROVIDER_FALLBACK_PICKER_PREFIX)) {
      return t.slice(PRESET_PROVIDER_FALLBACK_PICKER_PREFIX.length) || null;
    }
    if (t.startsWith(PRESET_PROVIDER_PICKER_PREFIX)) {
      return t.slice(PRESET_PROVIDER_PICKER_PREFIX.length) || null;
    }
    return null;
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

  function stripRedundantModelsPathSegment(modelId) {
    const s = String(modelId || "").trim();
    if (!s) return s;
    const slash = s.indexOf("/");
    if (slash > 0) {
      const first = s.slice(0, slash).toLowerCase();
      if (DIRECT_LLM_ENGINES.has(first)) {
        let rest = s.slice(slash + 1);
        while (rest.toLowerCase().startsWith("models/")) {
          rest = rest.slice("models/".length);
        }
        return rest ? s.slice(0, slash + 1) + rest : s.slice(0, slash);
      }
    }
    let inner = s;
    while (inner.toLowerCase().startsWith("models/")) {
      inner = inner.slice("models/".length);
    }
    return inner;
  }

  function canonicalForEngine(engine, raw) {
    const id = String(raw || "").trim();
    if (!id) return "";
    let out;
    if (id.startsWith(engine + "/")) {
      out = id;
    } else {
      const slash = id.indexOf("/");
      if (slash > 0) {
        const first = id.slice(0, slash).toLowerCase();
        if (DIRECT_LLM_ENGINES.has(first)) out = id;
        else if (engine === "openrouter") out = "openrouter/" + id;
        else out = engine + "/" + id;
      } else if (engine === "openrouter") {
        out = id;
      } else {
        out = engine + "/" + id;
      }
    }
    return stripRedundantModelsPathSegment(out);
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
    delete catalog.suggestion_model;
    delete catalog.suggestion_model_fallback;
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

  function updateAiSuggestBar() {
    const btn = document.getElementById("btn-ai-suggest");
    if (!btn) return;
    btn.disabled = aiSuggestRunInFlight || translateRunInFlight || modelsCatalogPrefetchState !== "ready";
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
    const perf = document.getElementById("performance-panel");
    const bench = document.getElementById("translate-benchmark-panel");
    const layout = document.getElementById("editor-main-layout");
    if (layout) layout.classList.add("layout-ai-suggest-review");
    if (listPanel) listPanel.classList.add("hidden");
    if (detailPanel) detailPanel.classList.add("hidden");
    if (setup) setup.classList.add("hidden");
    if (run) run.classList.add("hidden");
    if (review) review.classList.add("hidden");
    if (perf) perf.classList.add("hidden");
    if (bench) bench.classList.add("hidden");
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

  /** Topbar Presets: leave Performance / Benchmark / AI Suggestion and show the catalog list + detail. */
  function showPresetsMainPage() {
    aiSuggestStaging = {};
    aiSuggestRunInFlight = false;
    hideEditorMainPanels();
    showEditorMainPanels();
    updateAiSuggestBar();
    updateTranslateBar();
  }

  function setTopbarTranslateRowVisible(visible) {
    const translateRow = document.getElementById("topbar-translate-row");
    if (translateRow) translateRow.classList.toggle("hidden", !visible);
  }

  function defaultSuggestionFloor(profile) {
    if (profile === "price") return 0.6;
    if (profile === "free") return 0;
    return 0.7;
  }

  function ensurePresetSuggestion(preset) {
    if (!preset.suggestion || typeof preset.suggestion !== "object") preset.suggestion = {};
    const suggestion = preset.suggestion;
    if (suggestion.profile !== "quality" && suggestion.profile !== "price" && suggestion.profile !== "free") {
      suggestion.profile = preset.id === "free-router" ? "free" : "quality";
    }
    if (suggestion.profile === "free") suggestion.max_price = 0;
    if (suggestion.min_delta == null || suggestion.min_delta === "") suggestion.min_delta = 1;
    if (suggestion.chrf_weight == null || suggestion.chrf_weight === "") suggestion.chrf_weight = 0.55;
    if (suggestion.arena_weight == null || suggestion.arena_weight === "") suggestion.arena_weight = 0.45;
    if (suggestion.quality_floor == null || suggestion.quality_floor === "") {
      suggestion.quality_floor = defaultSuggestionFloor(suggestion.profile);
    }
    return suggestion;
  }

  function suggestionProblem(preset) {
    const suggestion = ensurePresetSuggestion(preset);
    const chrf = Number(suggestion.chrf_weight);
    const arena = Number(suggestion.arena_weight);
    if (!Number.isFinite(chrf) || !Number.isFinite(arena) || chrf + arena <= 0) {
      return "ChrF and Arena weights must sum to more than 0.";
    }
    if (chrf < 0 || arena < 0) return "Weights cannot be negative.";
    const floor = Number(suggestion.quality_floor);
    if (!Number.isFinite(floor) || floor < 0) return "Quality floor must be 0 or greater.";
    const delta = Number(suggestion.min_delta);
    if (!Number.isFinite(delta) || delta < 0) return "Index gap must be 0 or greater.";
    if (suggestion.profile === "free") return "";
    if (suggestion.max_price == null || suggestion.max_price === "") return "";
    const cap = Number(suggestion.max_price);
    if (!Number.isFinite(cap) || cap < 0) return "Cost cap must be blank or a number ≥ 0.";
    if (cap === 0) return "A $0 cap is only valid on the free profile.";
    return "";
  }

  function completePresetSuggestions() {
    (catalog.presets || []).forEach(function (preset) {
      if (!preset) return;
      const suggestion = ensurePresetSuggestion(preset);
      const cap =
        suggestion.profile === "free"
          ? 0
          : suggestion.max_price == null || suggestion.max_price === ""
            ? null
            : Number(suggestion.max_price);
      preset.suggestion = {
        profile: suggestion.profile,
        max_price: cap,
        min_delta: Number.isFinite(Number(suggestion.min_delta)) ? Number(suggestion.min_delta) : 1,
        chrf_weight: Number(suggestion.chrf_weight),
        arena_weight: Number(suggestion.arena_weight),
        quality_floor: Number(suggestion.quality_floor),
      };
    });
  }

  function readOptionalNumber(raw) {
    const text = String(raw == null ? "" : raw).trim();
    if (!text) return null;
    const n = Number(text);
    return Number.isFinite(n) ? n : Number.NaN;
  }

  function suggestionCapValue(suggestion) {
    if (!suggestion || suggestion.profile === "free") return "0";
    if (suggestion.max_price == null || suggestion.max_price === "") return "";
    return String(suggestion.max_price);
  }

  function bindSuggestionInputs(preset, root, onChange) {
    const suggestion = ensurePresetSuggestion(preset);
    const profile = root.querySelector("[data-suggestion-field='profile']");
    const cap = root.querySelector("[data-suggestion-field='max_price']");
    const delta = root.querySelector("[data-suggestion-field='min_delta']");
    const chrf = root.querySelector("[data-suggestion-field='chrf_weight']");
    const arena = root.querySelector("[data-suggestion-field='arena_weight']");
    const floor = root.querySelector("[data-suggestion-field='quality_floor']");
    if (profile) profile.value = suggestion.profile;
    if (cap) {
      cap.value = suggestionCapValue(suggestion);
      cap.disabled = suggestion.profile === "free";
    }
    if (delta) delta.value = String(suggestion.min_delta);
    if (chrf) chrf.value = String(Math.round(Number(suggestion.chrf_weight) * 1000) / 10);
    if (arena) arena.value = String(Math.round(Number(suggestion.arena_weight) * 1000) / 10);
    if (floor) floor.value = String(suggestion.quality_floor);
    function apply() {
      suggestion.profile = profile ? profile.value : suggestion.profile;
      if (suggestion.profile === "free") suggestion.max_price = 0;
      else if (cap) suggestion.max_price = readOptionalNumber(cap.value);
      if (delta) suggestion.min_delta = Number(delta.value);
      if (chrf) suggestion.chrf_weight = Number(chrf.value) / 100;
      if (arena) suggestion.arena_weight = Number(arena.value) / 100;
      if (floor) suggestion.quality_floor = Number(floor.value);
      if (cap) {
        cap.disabled = suggestion.profile === "free";
        if (suggestion.profile === "free") cap.value = "0";
      }
      if (typeof onChange === "function") onChange();
    }
    root.querySelectorAll("[data-suggestion-field]").forEach(function (el) {
      el.addEventListener("input", apply);
      el.addEventListener("change", apply);
    });
  }

  function providerLabelForEngine(engine) {
    const prov = providers.find(function (p) {
      return p.engine === engine;
    });
    return (prov && prov.label) || engine;
  }

  function getPresetsForSelectList(includeFreeRouter) {
    return (catalog.presets || [])
      .filter(function (s) {
        if (!s || typeof s.id !== "string") return false;
        if (!includeFreeRouter && s.id === "free-router") return false;
        return true;
      })
      .slice()
      .sort(function (a, b) {
        return String(a.name || a.id).localeCompare(String(b.name || b.id), undefined, {
          sensitivity: "base",
        });
      });
  }

  function getPresetCheckboxInputs(host) {
    if (!host) return [];
    return Array.from(host.querySelectorAll('input[type="checkbox"][data-preset-id]'));
  }

  function getSelectedPresetIdsFromHost(hostId) {
    const host = document.getElementById(hostId);
    if (!host) return [];
    return getPresetCheckboxInputs(host)
      .filter(function (el) {
        return el.checked;
      })
      .map(function (el) {
        return el.getAttribute("data-preset-id") || "";
      })
      .filter(Boolean);
  }

  function syncPresetSelectMaster(host) {
    if (!host) return;
    const master = host.querySelector("[data-preset-select-master]");
    if (!master) return;
    const boxes = getPresetCheckboxInputs(host);
    const total = boxes.length;
    const checked = boxes.filter(function (b) {
      return b.checked;
    }).length;

    // Three-state master: none (empty), all (checkmark), partial (dash).
    // Clear indeterminate before checked — some browsers keep checked true otherwise.
    if (total === 0 || checked === 0) {
      master.indeterminate = false;
      master.checked = false;
    } else if (checked === total) {
      master.indeterminate = false;
      master.checked = true;
    } else {
      master.checked = false;
      master.indeterminate = true;
    }
  }

  function setPresetCheckboxInputsChecked(host, checked) {
    presetSelectListBulkSync = true;
    try {
      getPresetCheckboxInputs(host).forEach(function (el) {
        el.checked = checked;
      });
    } finally {
      presetSelectListBulkSync = false;
    }
    syncPresetSelectMaster(host);
    // Re-apply after paint — direct checkbox hits used to leave the master visual out of sync.
    requestAnimationFrame(function () {
      syncPresetSelectMaster(host);
    });
  }

  function onPresetSelectMasterClick(host, onChange) {
    const boxes = getPresetCheckboxInputs(host);
    const checked = boxes.filter(function (b) {
      return b.checked;
    }).length;
    // Any selection (all or partial) → clear; none selected → select all.
    const selectAll = checked === 0;
    setPresetCheckboxInputsChecked(host, selectAll);
    if (typeof onChange === "function") onChange();
  }

  function bindPresetSelectMasterRow(masterLabel, _masterInput, host, onChange) {
    function onMasterActivate(e) {
      e.preventDefault();
      e.stopPropagation();
      onPresetSelectMasterClick(host, onChange);
    }
    // Block native checkbox toggle; pointer-events on input are off (see CSS) so all hits use the label.
    masterLabel.addEventListener("mousedown", function (e) {
      e.preventDefault();
    });
    masterLabel.addEventListener("click", onMasterActivate);
  }

  /**
   * @param {string} hostId
   * @param {{ includeFreeRouter?: boolean, onChange?: () => void, emptyMessage?: string, ariaLabel?: string }} options
   */
  function renderPresetSelectList(hostId, options) {
    const opts = options || {};
    const host = document.getElementById(hostId);
    if (!host) return;
    const onChange = opts.onChange || function () {};
    host.innerHTML = "";

    const presets = getPresetsForSelectList(!!opts.includeFreeRouter);
    if (!presets.length) {
      const empty = document.createElement("p");
      empty.className = "muted";
      empty.textContent =
        opts.emptyMessage || "No presets available.";
      host.appendChild(empty);
      onChange();
      return;
    }

    const masterLabel = document.createElement("label");
    masterLabel.className = "ai-suggest-presets-check preset-select-master-row";
    const masterInput = document.createElement("input");
    masterInput.type = "checkbox";
    masterInput.setAttribute("data-preset-select-master", "1");
    masterInput.setAttribute("aria-label", opts.ariaLabel || "Toggle all presets");
    const masterSpan = document.createElement("span");
    masterSpan.className = "ai-suggest-presets-check-label preset-select-master-label";
    const masterTitle = document.createElement("strong");
    masterTitle.textContent = "Presets";
    masterSpan.appendChild(masterTitle);
    masterLabel.appendChild(masterInput);
    masterLabel.appendChild(masterSpan);
    bindPresetSelectMasterRow(masterLabel, masterInput, host, onChange);
    host.appendChild(masterLabel);

    presets.forEach(function (preset) {
      const label = document.createElement("label");
      label.className = "ai-suggest-presets-check";
      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = true;
      input.setAttribute("data-preset-id", preset.id);
      input.addEventListener("change", function () {
        if (presetSelectListBulkSync) return;
        syncPresetSelectMaster(host);
        onChange();
      });
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
    syncPresetSelectMaster(host);
    onChange();
  }

  function getSelectedAiSuggestPresetIds() {
    return (catalog.presets || [])
      .map(function (preset) {
        return preset && preset.id;
      })
      .filter(Boolean);
  }

  function renderAiSuggestPresetCheckboxes() {
    const host = document.getElementById("ai-suggest-presets-checkboxes");
    if (!host) return;
    const presets = catalog.presets || [];
    host.innerHTML = "";
    if (!presets.length) {
      host.innerHTML = '<p class="muted ai-suggest-setup-presets-note">No presets available.</p>';
      updateAiSuggestContinueButton();
      return;
    }
    presets.forEach(function (preset) {
      if (!preset || !preset.id) return;
      const block = document.createElement("section");
      block.className = "ai-suggest-preset-policy";
      block.innerHTML =
        '<div class="ai-suggest-preset-policy-name"><strong>' +
        escapeHtml(preset.name || preset.id) +
        '</strong><span class="ai-suggest-presets-check-meta">' +
        escapeHtml(preset.id) +
        "</span></div>" +
        '<div class="ai-suggest-policy-row">' +
        "<label>Profile <select data-suggestion-field='profile'>" +
        "<option value='quality'>Quality</option>" +
        "<option value='price'>Price</option>" +
        "<option value='free'>Free</option>" +
        "</select></label>" +
        "<label>Cap $/1M <input data-suggestion-field='max_price' type='number' min='0' step='0.01' /></label>" +
        "<label>Index gap <input data-suggestion-field='min_delta' type='number' min='0' step='0.1' title='Minimum index points between the primary and the fallback. 0 keeps the next model. 1 skips models within 1.0 points of the one already kept.' /></label>" +
        "</div>";
      host.appendChild(block);
      bindSuggestionInputs(preset, block, updateAiSuggestContinueButton);
    });
    updateAiSuggestContinueButton();
  }

  function updateAiSuggestContinueButton() {
    const btn = document.getElementById("btn-ai-suggest-continue");
    if (!btn) return;
    const presets = (catalog.presets || []).filter(Boolean);
    const problem = presets.map(suggestionProblem).find(Boolean) || "";
    btn.disabled = aiSuggestRunInFlight || modelsCatalogPrefetchState !== "ready" || presets.length === 0 || Boolean(problem);
    updateAiSuggestSetupContinueHint(problem, presets.length);
  }

  function updateAiSuggestSetupContinueHint(problem, selectedCount) {
    const el = document.getElementById("ai-suggest-setup-continue-hint");
    if (!el) return;
    let msg = "";
    if (modelsCatalogPrefetchState !== "ready") {
      msg = "Wait for provider catalogs to finish loading.";
    } else if (selectedCount === 0) {
      msg = "Add a preset before ranking.";
    } else if (problem) {
      msg = problem;
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
    if (summary) summary.textContent = "Ranking selected presets from published scores. No model call.";
    // Enabled while a run is in flight so the user can abort.
    if (cancelBtn) cancelBtn.disabled = false;
  }

  function exitAiSuggestFlow() {
    if (aiSuggestAbortController) {
      try {
        aiSuggestAbortController.abort();
      } catch {
        /* ignore */
      }
      aiSuggestAbortController = null;
    }
    aiSuggestStaging = {};
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

  function suggestMeasure(value, digits) {
    return typeof value === "number" && Number.isFinite(value) ? value.toFixed(digits) : "—";
  }

  function suggestUsd(value) {
    return typeof value === "number" && Number.isFinite(value) ? "$" + value.toFixed(3) : "—";
  }

  function suggestFrontier(row) {
    if (!row || typeof row.frontierLayer !== "number" || !Number.isFinite(row.frontierLayer)) return "—";
    const text = String(row.frontierLayer);
    if (!row.dominatedBy) return escapeHtml(text);
    return (
      '<span title="Dominated by ' +
      escapeHtml(row.dominatedBy) +
      '">' +
      escapeHtml(text) +
      "</span>"
    );
  }

  function suggestProfileLabel(preset) {
    const profile = preset && preset.suggestion && preset.suggestion.profile;
    if (profile === "price") return "Price";
    if (profile === "free") return "Free";
    return "Quality";
  }

  function suggestCapLabel(preset) {
    const suggestion = preset && preset.suggestion;
    if (!suggestion || suggestion.profile === "free") return "$0/1M";
    if (suggestion.max_price == null || suggestion.max_price === "") return "no cap";
    return "$" + suggestion.max_price + "/1M";
  }

  function renderAiSuggestReview() {
    const host = document.getElementById("ai-suggest-review-host");
    if (!host) return;
    const order = (catalog.presets || []).map(function (preset) {
      return preset && preset.id;
    });
    const presetIds = Object.keys(aiSuggestStaging).sort(function (a, b) {
      const ia = order.indexOf(a);
      const ib = order.indexOf(b);
      if (ia < 0 && ib < 0) return a.localeCompare(b);
      if (ia < 0) return 1;
      if (ib < 0) return -1;
      return ia - ib;
    });
    if (!presetIds.length) {
      host.innerHTML = '<p class="muted">No ranked models.</p>';
      return;
    }
    host.innerHTML = presetIds
      .map(function (presetId) {
        const preset = (catalog.presets || []).find(function (item) {
          return item && item.id === presetId;
        });
        const staging = aiSuggestStaging[presetId] || {};
        const engines = Object.keys(staging);
        const rows = [];
        engines.forEach(function (engine) {
          const slot = staging[engine];
          if (!slot) return;
          const prov = providers.find(function (item) {
            return item.engine === engine;
          });
          const label = (prov && prov.label) || engine;
          if (slot.primary) rows.push({ label: label, type: "Primary", row: slot.primary });
          if (slot.fallback) rows.push({ label: label, type: "Fallback", row: slot.fallback });
        });
        const body = rows.length
          ? rows
              .map(function (item) {
                const row = item.row;
                return (
                  "<tr><td>" +
                  escapeHtml(item.label) +
                  "</td><td>" +
                  escapeHtml(item.type) +
                  "</td><td><code>" +
                  escapeHtml(displayIdForCatalogModel(row.id)) +
                  "</code></td><td class=\"num\">" +
                  (row.rank != null ? escapeHtml(String(row.rank)) : "—") +
                  "</td><td class=\"num\">" +
                  suggestMeasure(row.index, 1) +
                  "</td><td class=\"num\">" +
                  suggestMeasure(row.chrf, 3) +
                  "</td><td class=\"num\">" +
                  suggestMeasure(row.arenaScore, 1) +
                  "</td><td class=\"num\">" +
                  suggestUsd(row.blendedPerMTokens) +
                  "</td><td class=\"num\">" +
                  suggestFrontier(row) +
                  "</td></tr>"
                );
              })
              .join("")
          : '<tr><td colspan="9" class="muted">No ranked model for the providers on this preset.</td></tr>';
        return (
          '<section class="ai-suggest-preset-block"><h3>' +
          escapeHtml((preset && preset.name) || presetId) +
          "</h3><p class=\"muted ai-suggest-preset-id\">" +
          escapeHtml(suggestProfileLabel(preset) + " · " + suggestCapLabel(preset)) +
          "</p><table class=\"ai-suggest-table\"><thead><tr>" +
          "<th>Provider</th><th>Type</th><th>Model</th>" +
          '<th title="Place in this provider’s ranked list.">Rank</th>' +
          '<th title="ChrF and Arena, 0–100. Higher is better.">Index</th>' +
          '<th title="Mean languagebench ChrF for the app languages. Higher is better.">ChrF</th>' +
          '<th title="LMArena text score. Higher is better.">Arena</th>' +
          '<th title="USD per 1M tokens, (3 × input + output) / 4.">Blended</th>' +
          '<th title="Pareto tier. Tier 1 is not beaten by a cheaper, higher-index model.">Frontier</th>' +
          "</tr></thead><tbody>" +
          body +
          "</tbody></table></section>"
        );
      })
      .join("");
  }

  function openAiSuggestFlow() {
    if (modelsCatalogPrefetchState !== "ready") {
      alert("Wait for provider catalogs to finish loading.");
      return;
    }
    showAiSuggestSetupPage();
  }

  async function continueAiSuggestFromSetup() {
    const presetIds = getSelectedAiSuggestPresetIds();
    if (!presetIds.length) {
      alert("Add a preset before ranking.");
      return;
    }
    const problem = (catalog.presets || [])
      .filter(function (preset) {
        return preset && presetIds.indexOf(preset.id) >= 0;
      })
      .map(suggestionProblem)
      .find(Boolean);
    if (problem) {
      alert(problem);
      return;
    }
    completePresetSuggestions();
    await executeAiSuggestRun(presetIds);
  }

  async function executeAiSuggestRun(presetIds) {
    const selectedPresetIds = Array.isArray(presetIds) ? presetIds.filter(Boolean) : [];
    if (aiSuggestAbortController) {
      try {
        aiSuggestAbortController.abort();
      } catch {
        /* ignore */
      }
    }
    aiSuggestAbortController = new AbortController();
    const runSignal = aiSuggestAbortController.signal;
    aiSuggestRunInFlight = true;
    updateAiSuggestBar();
    updateTranslateBar();
    showAiSuggestRunPage();
    const summaryEl = document.getElementById("ai-suggest-run-summary");
    const cancelBtn = document.getElementById("btn-ai-suggest-run-cancel");
    if (cancelBtn) cancelBtn.disabled = false;
    let completed = 0;
    let planned = 0;
    let openedReview = false;

    appendAiSuggestRunLog("Starting deterministic model ranking…");
    appendAiSuggestRunLog(
      "Presets selected: " + selectedPresetIds.length + " (" + selectedPresetIds.join(", ") + ")",
    );
    const refreshEl = document.getElementById("ai-suggest-refresh-benchmarks");
    const refreshBenchmarks = Boolean(refreshEl && refreshEl.checked);
    appendAiSuggestRunLog(
      refreshBenchmarks ? "Benchmark cache: refresh." : "Benchmark cache: use the saved copy when it is fresh.",
    );

    try {
      const res = await fetch("/api/presets/suggest-models?stream=1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          catalog: catalog,
          preset_ids: selectedPresetIds,
          refresh_benchmarks: refreshBenchmarks,
        }),
        signal: runSignal,
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
        if (runSignal.aborted) return;
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
                if (row && (row.primary || row.model_id)) {
                  aiSuggestStaging[rec.presetId][eng] = {
                    primary: row.primary || { id: row.model_id },
                    fallback: row.fallback || null,
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
          if (rec.cancelled) {
            appendAiSuggestRunLog("Run cancelled.", true);
            if (summaryEl) summaryEl.textContent = "Cancelled.";
            return;
          }
          if (rec.ok) {
            if (summaryEl) summaryEl.textContent = "Finished.";
            if (rec.errors && rec.errors.length) {
              rec.errors.forEach(function (errLine) {
                appendAiSuggestRunLog(errLine, true);
              });
            }
            appendAiSuggestRunLog("Run complete. Opening review…");
            openedReview = true;
            // Defer so the log line paints before the (heavier) review DOM swap.
            setTimeout(function () {
              showAiSuggestReview();
            }, 0);
          } else {
            appendAiSuggestRunLog("Failed: " + (rec.error || "unknown"), true);
            if (summaryEl) summaryEl.textContent = rec.error || "Suggestion run failed.";
          }
        }
      });

      // If the stream ended without a done event but we got results, still open review.
      if (!openedReview && !runSignal.aborted && Object.keys(aiSuggestStaging).length) {
        appendAiSuggestRunLog(
          "Stream ended without a final done event; opening review with received results…",
          true,
        );
        openedReview = true;
        setTimeout(function () {
          showAiSuggestReview();
        }, 0);
      }
    } catch (e) {
      const aborted =
        runSignal.aborted ||
        (e && (e.name === "AbortError" || /abort/i.test(String(e.message || ""))));
      if (aborted) {
        appendAiSuggestRunLog("Cancelled by user.", true);
        if (summaryEl) summaryEl.textContent = "Cancelled.";
      } else {
        appendAiSuggestRunLog(e.message || String(e), true);
        if (summaryEl) summaryEl.textContent = e.message || String(e);
      }
    } finally {
      aiSuggestRunInFlight = false;
      if (aiSuggestAbortController && aiSuggestAbortController.signal === runSignal) {
        aiSuggestAbortController = null;
      }
      if (cancelBtn) cancelBtn.disabled = false;
      updateAiSuggestBar();
      updateTranslateBar();
      // If cancelled before review, return to setup so the user can restart.
      if (runSignal.aborted && !openedReview) {
        const run = document.getElementById("ai-suggest-run-panel");
        if (run) run.classList.add("hidden");
        showAiSuggestSetupPage();
      }
    }
  }

  async function readNdjsonResponse(res, onRecord) {
    const reader = res.body && res.body.getReader ? res.body.getReader() : null;
    if (!reader) {
      const t = await res.text();
      var j;
      try {
        j = JSON.parse(t);
      } catch {
        throw new Error(t.slice(0, 200) || String(res.status));
      }
      throw new Error(j.error || j.message || "Request failed HTTP " + res.status);
    }
    const dec = new TextDecoder();
    var buf = "";
    function consumeBuffer(flush) {
      if (flush) buf += dec.decode();
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
    while (true) {
      var read = await reader.read();
      if (read.done) break;
      buf += dec.decode(read.value, { stream: true });
      consumeBuffer(false);
    }
    consumeBuffer(true);
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

  function pickerUsesOpenRouterPerformance() {
    const eng = pickerEngineFromTarget(modelPickerTarget);
    if (eng) return eng === "openrouter";
    return (
      modelPickerTarget === "preset" ||
      modelPickerTarget === "translation_model" ||
      modelPickerTarget === KEY_TRANSLATION_FALLBACK
    );
  }

  function modelPathForPerformance(m) {
    return openrouterInnerFromCanonical(m?.id || "");
  }

  function modelPickerPerfSuffix(m) {
    const path = modelPathForPerformance(m);
    if (!path) return "";
    const stats = openRouterPerformanceByPath[path];
    if (stats === undefined) return "";
    if (!stats) return "";
    const parts = [];
    if (stats.latency_p90_s != null && !Number.isNaN(Number(stats.latency_p90_s))) {
      parts.push("Lat P90 " + Number(stats.latency_p90_s).toFixed(3) + "s");
    }
    if (stats.throughput_p90 != null && !Number.isNaN(Number(stats.throughput_p90))) {
      parts.push("TPS P90 " + Number(stats.throughput_p90).toFixed(1));
    }
    return parts.length ? " · " + parts.join(" · ") : "";
  }

  function pickerRankEngine() {
    const eng = pickerEngineFromTarget(modelPickerTarget);
    if (eng) return eng;
    if (
      modelPickerTarget === "preset" ||
      modelPickerTarget === "translation_model" ||
      modelPickerTarget === KEY_TRANSLATION_FALLBACK
    ) {
      return "openrouter";
    }
    return "";
  }

  function pickerRankingSuggestion() {
    const preset = getSelectedPreset();
    const eng = pickerEngineFromTarget(modelPickerTarget);
    if (preset && (modelPickerTarget === "preset" || (eng && isPresetProviderPickerTarget(modelPickerTarget)))) {
      return ensurePresetSuggestion(preset);
    }
    return {
      profile: "quality",
      max_price: null,
      min_delta: 1,
      chrf_weight: 0.55,
      arena_weight: 0.45,
      quality_floor: 0.7,
    };
  }

  function pickerRankKey(engine, suggestion) {
    return (
      engine +
      "|" +
      JSON.stringify({
        profile: suggestion.profile,
        max_price: suggestion.max_price == null ? null : suggestion.max_price,
        min_delta: suggestion.min_delta,
        chrf_weight: suggestion.chrf_weight,
        arena_weight: suggestion.arena_weight,
        quality_floor: suggestion.quality_floor,
      })
    );
  }

  function queueModelRanks(engine) {
    if (!engine) return;
    const suggestion = pickerRankingSuggestion();
    const key = pickerRankKey(engine, suggestion);
    if (modelRanksCache[key] || modelRanksPending[key]) return;
    modelRanksPending[key] = true;
    const preset = getSelectedPreset();
    fetch("/api/presets/model-ranks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        engine: engine,
        preset_id: preset && preset.id ? preset.id : "",
        suggestion: suggestion,
      }),
    })
      .then(function (res) {
        return res.json().then(function (json) {
          if (!res.ok) throw new Error(json.error || "HTTP " + res.status);
          return json;
        });
      })
      .then(function (json) {
        const map = {};
        (json.ranks || []).forEach(function (row) {
          if (row && row.id) map[row.id] = { rank: row.rank, index: row.index };
        });
        modelRanksCache[key] = map;
        renderModelList();
      })
      .catch(function () {
        modelRanksCache[key] = {};
        renderModelList();
      })
      .finally(function () {
        delete modelRanksPending[key];
      });
  }

  function modelRankLabel(m, engine) {
    const suggestion = pickerRankingSuggestion();
    const key = pickerRankKey(engine, suggestion);
    if (!Object.prototype.hasOwnProperty.call(modelRanksCache, key)) return "";
    const info = modelRanksCache[key][m.id];
    if (!info || !Number.isFinite(Number(info.rank))) return "Rank — · Index —";
    const index =
      typeof info.index === "number" && Number.isFinite(info.index) ? info.index.toFixed(1) : "—";
    return "Rank " + info.rank + " · Index " + index;
  }

  function modelPickerPriceLine(m) {
    const pp = m.pricing;
    let priceLine;
    if (!pp || typeof pp !== "object") {
      priceLine = "Pricing not available";
    } else {
      const prompt = pp.prompt;
      const completion = pp.completion;
      if (prompt == null && completion == null) {
        priceLine = "Pricing not available";
      } else {
        const inFmt = formatPrice(prompt);
        const outFmt = formatPrice(completion);
        if (inFmt === "—" && outFmt === "—") {
          priceLine = "Pricing not available";
        } else {
          priceLine = "In $" + inFmt + " / 1M · Out $" + outFmt + " / 1M";
        }
      }
    }
    if (!pickerUsesOpenRouterPerformance()) return priceLine;
    return priceLine + modelPickerPerfSuffix(m);
  }

  function queueOpenRouterPerformanceForModels(modelList) {
    if (!pickerUsesOpenRouterPerformance() || !Array.isArray(modelList) || !modelList.length) return;
    const paths = modelList
      .map(function (m) {
        return modelPathForPerformance(m);
      })
      .filter(function (p) {
        return p && openRouterPerformanceByPath[p] === undefined && !openRouterPerformancePending.has(p);
      });
    if (!paths.length) return;
    const unique = [...new Set(paths)];
    unique.forEach(function (p) {
      openRouterPerformancePending.add(p);
    });
    fetch("/api/models/openrouter-performance-summary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ paths: unique }),
      cache: "no-store",
    })
      .then(function (res) {
        return res.json().then(function (json) {
          if (!res.ok) throw new Error(json.error || "HTTP " + res.status);
          return json;
        });
      })
      .then(function (json) {
        const stats = json.stats && typeof json.stats === "object" ? json.stats : {};
        unique.forEach(function (p) {
          openRouterPerformanceByPath[p] = Object.prototype.hasOwnProperty.call(stats, p)
            ? stats[p]
            : null;
        });
        renderModelList();
      })
      .catch(function () {
        unique.forEach(function (p) {
          openRouterPerformanceByPath[p] = null;
        });
      })
      .finally(function () {
        unique.forEach(function (p) {
          openRouterPerformancePending.delete(p);
        });
      });
  }

  function isModelPickerOpen() {
    const overlay = document.getElementById("model-picker-overlay");
    return overlay && !overlay.classList.contains("hidden");
  }

  function updateModelPickerCurrentSelection() {
    const el = document.getElementById("model-picker-current");
    if (!el) return;
    const canonicalId = String(getSelectedModelIdForPicker() || "").trim();
    el.replaceChildren();
    const label = document.createTextNode("Current: ");
    el.appendChild(label);
    if (!canonicalId) {
      el.appendChild(document.createTextNode("(none)"));
      return;
    }
    const display = displayIdForCatalogModel(canonicalId);
    const code = document.createElement("code");
    code.textContent = display;
    el.appendChild(code);
    if (display !== canonicalId) {
      el.appendChild(document.createTextNode(" · "));
      const full = document.createElement("code");
      full.textContent = canonicalId;
      el.appendChild(full);
    }
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
      if (isPresetProviderFallbackPickerTarget(modelPickerTarget)) {
        title.textContent = ((prov && prov.label) || eng) + " — Fallback";
      } else if (eng) title.textContent = (prov && prov.label) || eng;
      else if (modelPickerTarget === "preset") title.textContent = "Preset model";
      else if (modelPickerTarget === "translation_model") title.textContent = "Translation model";
      else if (modelPickerTarget === "translation_model_fallback") {
        title.textContent = "Translation model — Fallback";
      } else title.textContent = "Select model";
    }
    updateModelPickerCurrentSelection();
    if (hint) {
      if (isPresetProviderFallbackPickerTarget(modelPickerTarget)) {
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
          "Choose the OpenRouter model for the selected preset. Pricing is per 1M tokens (USD). Latency and throughput are best-provider P90 (seconds / tok/s) when available.";
      } else if (modelPickerTarget === "translation_model") {
        hint.textContent =
          "Used for “Translate missing”, stored as translation_model. On failure, the server retries with translation_model_fallback when that field is set.";
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
      const res = await fetch(
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
    const eng = pickerEngineFromTarget(t);
    const silentLoad = isAiSuggestFlowVisible();
    if ((t === "preset" || (eng && isPresetProviderPickerTarget(t))) && !getSelectedPreset()) {
      return;
    }
    const needsOpenRouterList =
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
    const rankEngine = pickerRankEngine();
    queueModelRanks(rankEngine);

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
        queueOpenRouterPerformanceForModels(list);
        list
          .slice()
          .sort(function (a, b) {
            const suggestion = pickerRankingSuggestion();
            const key = pickerRankKey(rankEngine, suggestion);
            const map = modelRanksCache[key] || {};
            const rankA = map[a.id] && Number.isFinite(Number(map[a.id].rank)) ? Number(map[a.id].rank) : Infinity;
            const rankB = map[b.id] && Number.isFinite(Number(map[b.id].rank)) ? Number(map[b.id].rank) : Infinity;
            if (rankA !== rankB) return rankA - rankB;
            return (a.name || a.id).localeCompare(b.name || b.id);
          })
          .forEach(function (m) {
            const row = document.createElement("button");
            row.type = "button";
            row.className = "model-row";
            if (m.id === selectedModelId) row.classList.add("selected");
            const rankLabel = modelRankLabel(m, rankEngine);
            row.innerHTML =
              '<span class="model-id">' +
              escapeHtml(modelPickerDisplay(m)) +
              '</span><span class="model-name">' +
              escapeHtml(m.name || "") +
              "</span>" +
              (rankLabel ? '<span class="model-rank">' + escapeHtml(rankLabel) + "</span>" : "") +
              '<span class="model-price">' +
              escapeHtml(modelPickerPriceLine(m)) +
              "</span>";
            row.addEventListener("click", function () {
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

    renderSuggestionPolicy(preset);
    renderProviderModels();
    renderTranslations();
    updateTranslateBar();
  }

  function renderSuggestionPolicy(preset) {
    const host = document.getElementById("suggestion-policy-host");
    if (!host) return;
    if (!preset) {
      host.innerHTML = "";
      return;
    }
    host.innerHTML =
      "<div class='provider-models-heading'><strong>suggestion</strong> " +
      "<span class='muted provider-models-note'>Ranking policy written into presets.json. " +
      "ChrF and Arena are percents of the index. Cap is blended USD per 1M tokens; leave it blank for no cap.</span></div>" +
      "<div class='suggestion-policy-grid'>" +
      "<label>Profile <select data-suggestion-field='profile'>" +
      "<option value='quality'>Quality</option><option value='price'>Price</option><option value='free'>Free</option>" +
      "</select></label>" +
      "<label>Cap $/1M <input data-suggestion-field='max_price' type='number' min='0' step='0.01' /></label>" +
      "<label>Index gap <input data-suggestion-field='min_delta' type='number' min='0' step='0.1' /></label>" +
      "<label>ChrF % <input data-suggestion-field='chrf_weight' type='number' min='0' step='1' /></label>" +
      "<label>Arena % <input data-suggestion-field='arena_weight' type='number' min='0' step='1' /></label>" +
      "<label>Quality floor <input data-suggestion-field='quality_floor' type='number' min='0' max='1' step='0.05' /></label>" +
      "</div>";
    bindSuggestionInputs(preset, host, function () {});
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
        "). Try reloading the page or restarting pnpm run presets-editor."
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
        sRes = await fetch(presetsUrl, { cache: "no-store" });
        if (!sRes.ok) throw new Error(await parsePresetsFetchError(sRes));
        const prunedHdr = sRes.headers.get("X-Editor-Presets-Models-Pruned");
        reloadedModelsPruned = prunedHdr != null ? parseInt(prunedHdr, 10) || 0 : 0;
        catalog = await sRes.json();
        [mRes, uRes, provRes] = await Promise.all([
          fetch("/api/meta", { cache: "no-store" }),
          fetch("/api/ui-languages", { cache: "no-store" }),
          fetch("/api/providers", { cache: "no-store" }),
        ]);
      } else {
        [mRes, uRes, sRes, provRes] = await Promise.all([
          fetch("/api/meta", { cache: "no-store" }),
          fetch("/api/ui-languages", { cache: "no-store" }),
          fetch(presetsUrl, { cache: "no-store" }),
          fetch("/api/providers", { cache: "no-store" }),
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
      delete catalog.suggestion_model;
      delete catalog.suggestion_model_fallback;
      syncHeaderTranslationModelsDisplay();
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
    const problem = (catalog.presets || []).map(suggestionProblem).find(Boolean);
    if (problem) {
      setStatus(problem, false);
      return false;
    }
    completePresetSuggestions();
    try {
      const res = await fetch("/api/presets", {
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
      updateTranslateBar();
      return true;
    } catch (e) {
      setStatus(e.message || String(e), false);
      return false;
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
      const res = await fetch("/api/presets/translate-missing?stream=1", {
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
      const res = await fetch("/api/presets/test-model", {
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

  const btnPresetsMain = document.getElementById("btn-presets-main");
  if (btnPresetsMain) {
    btnPresetsMain.addEventListener("click", function () {
      showPresetsMainPage();
    });
  }

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

  const btnAiSuggestSetupCancel = document.getElementById("btn-ai-suggest-setup-cancel");
  if (btnAiSuggestSetupCancel) {
    btnAiSuggestSetupCancel.addEventListener("click", function () {
      exitAiSuggestFlow();
    });
  }

  const btnAiSuggestRunCancel = document.getElementById("btn-ai-suggest-run-cancel");
  if (btnAiSuggestRunCancel) {
    btnAiSuggestRunCancel.addEventListener("click", function () {
      if (aiSuggestRunInFlight && aiSuggestAbortController) {
        appendAiSuggestRunLog("Cancelling…", true);
        const summaryEl = document.getElementById("ai-suggest-run-summary");
        if (summaryEl) summaryEl.textContent = "Cancelling…";
        btnAiSuggestRunCancel.disabled = true;
        try {
          aiSuggestAbortController.abort();
        } catch {
          /* ignore */
        }
        return;
      }
      exitAiSuggestFlow();
    });
  }

  function applyAiSuggestModelsToCatalog() {
    Object.keys(aiSuggestStaging).forEach(function (presetId) {
      const preset = (catalog.presets || []).find(function (item) {
        return item && item.id === presetId;
      });
      const byEngine = aiSuggestStaging[presetId];
      if (!preset || !byEngine) return;
      Object.keys(byEngine).forEach(function (engine) {
        const slot = byEngine[engine];
        const primaryId = slot && slot.primary && slot.primary.id ? String(slot.primary.id).trim() : "";
        const fallbackId = slot && slot.fallback && slot.fallback.id ? String(slot.fallback.id).trim() : "";
        if (primaryId) setPresetModelId(preset, engine, primaryId);
        if (fallbackId && fallbackId !== primaryId) {
          setPresetFallbackId(preset, engine, fallbackId);
        } else if (primaryId && presetFallbackId(preset, engine) === primaryId) {
          setPresetFallbackId(preset, engine, "");
        }
      });
      normalizePresetModelIds(preset);
    });
  }

  const btnAiSuggestCancel = document.getElementById("btn-ai-suggest-cancel");
  if (btnAiSuggestCancel) {
    btnAiSuggestCancel.addEventListener("click", async function () {
      btnAiSuggestCancel.disabled = true;
      applyAiSuggestModelsToCatalog();
      const saved = await saveCatalog();
      btnAiSuggestCancel.disabled = false;
      if (saved) exitAiSuggestFlow();
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

  // ── Performance panel ────────────────────────────────────────────────────

  function showPerformancePanel() {
    hideEditorMainPanels();
    const panel = document.getElementById("performance-panel");
    const translateRow = document.getElementById("topbar-translate-row");
    if (translateRow) translateRow.classList.add("hidden");
    if (panel) panel.classList.remove("hidden");
  }

  function exitPerformancePanel() {
    const panel = document.getElementById("performance-panel");
    if (panel) panel.classList.add("hidden");
    showEditorMainPanels();
    setTopbarTranslateRowVisible(true);
  }

  function perfFmtLatency(val) {
    if (val == null || Number.isNaN(Number(val))) return null;
    return (Number(val) / 1000).toFixed(3);
  }

  function perfFmtTps(val) {
    if (val == null || Number.isNaN(Number(val))) return null;
    return Number(val).toFixed(1);
  }

  function perfFmtUptime(val) {
    if (val == null || Number.isNaN(Number(val))) return null;
    return Number(val).toFixed(1) + "%";
  }

  function perfStatusLabel(status) {
    if (status == null) return null;
    return status === 0 ? "OK" : "Error " + status;
  }

  function perfLatencyP90Ms(ep) {
    const p90 = ep?.latency_last_30m?.p90;
    if (p90 == null || Number.isNaN(Number(p90))) return null;
    return Number(p90);
  }

  function perfDisplayModel(row) {
    if (row?.resolved_model && row.resolved_model !== row.model) {
      return row.model + " → " + row.resolved_model;
    }
    return row?.model || "";
  }

  function perfTopEndpointsByLatencyP90(endpoints, limit) {
    const max = limit == null ? 2 : limit;
    return endpoints
      .filter(function (ep) {
        return perfLatencyP90Ms(ep) != null;
      })
      .sort(function (a, b) {
        return perfLatencyP90Ms(a) - perfLatencyP90Ms(b);
      })
      .slice(0, max);
  }

  function perfFmtPricePer1M(ep) {
    const pp = ep?.pricing;
    if (!pp || typeof pp !== "object") return null;
    const prompt = pp.prompt;
    const completion = pp.completion;
    if (prompt == null && completion == null) return null;
    const inFmt = formatPrice(prompt);
    const outFmt = formatPrice(completion);
    if (inFmt === "—" && outFmt === "—") return null;
    return "In $" + inFmt + " / 1M · Out $" + outFmt + " / 1M";
  }

  function numCell(text, extraClass) {
    const td = document.createElement("td");
    td.className = "num" + (extraClass ? " " + extraClass : "");
    if (text == null) {
      td.textContent = "—";
      td.classList.add("null-val");
    } else {
      td.textContent = text;
    }
    return td;
  }

  function renderPerformanceTable(data) {
    const wrap = document.getElementById("performance-table-wrap");
    if (!wrap) return;
    wrap.innerHTML = "";

    const rows = data.rows || [];
    if (!rows.length) {
      const p = document.createElement("p");
      p.className = "muted performance-empty";
      p.textContent = "No OpenRouter models found in presets.";
      wrap.appendChild(p);
      return;
    }

    const table = document.createElement("table");
    table.className = "perf-table";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    const headers = [
      { label: "Setting", cls: "" },
      { label: "Model", cls: "" },
      { label: "Provider", cls: "" },
      { label: "Price ($/1M tok)", cls: "" },
      { label: "Latency P75 (s)", cls: "num" },
      { label: "Latency P90 (s)", cls: "num" },
      { label: "TPS P75", cls: "num" },
      { label: "TPS P90", cls: "num" },
      { label: "Uptime 1D", cls: "num" },
      { label: "Status", cls: "num" },
    ];
    headers.forEach(function (h) {
      const th = document.createElement("th");
      th.textContent = h.label;
      if (h.cls) th.className = h.cls;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    rows.forEach(function (row, rowIdx) {
      const allEndpoints = Array.isArray(row.endpoints) ? row.endpoints : [];
      const endpoints = perfTopEndpointsByLatencyP90(allEndpoints, 2);

      if (!endpoints.length) {
        const tr = document.createElement("tr");
        if (rowIdx === 0 || rows[rowIdx - 1]?.setting !== row.setting) {
          tr.classList.add("perf-row-group-start");
        }

        const tdSetting = document.createElement("td");
        tdSetting.className = "cell-setting";
        tdSetting.textContent = row.setting;
        tr.appendChild(tdSetting);

        const tdModel = document.createElement("td");
        tdModel.className = "cell-model";
        tdModel.textContent = perfDisplayModel(row);
        tr.appendChild(tdModel);

        const tdProvider = document.createElement("td");
        tdProvider.className = "null-val";
        if (row.error) {
          tdProvider.textContent = "Error: " + row.error;
        } else if (allEndpoints.length) {
          tdProvider.textContent = "No latency P90 data";
        } else {
          tdProvider.textContent = "No endpoints";
        }
        tdProvider.colSpan = 8;
        tr.appendChild(tdProvider);

        tbody.appendChild(tr);
        return;
      }

      endpoints.forEach(function (ep, epIdx) {
        const tr = document.createElement("tr");
        if (epIdx === 0) tr.classList.add("perf-row-group-start");

        const tdSetting = document.createElement("td");
        tdSetting.className = "cell-setting";
        tdSetting.textContent = epIdx === 0 ? row.setting : "";
        tr.appendChild(tdSetting);

        const tdModel = document.createElement("td");
        tdModel.className = "cell-model";
        tdModel.textContent = epIdx === 0 ? perfDisplayModel(row) : "";
        tr.appendChild(tdModel);

        const tdProvider = document.createElement("td");
        tdProvider.className = "cell-provider";
        tdProvider.textContent = ep.provider_name || ep.name || "—";
        tr.appendChild(tdProvider);

        const tdPrice = document.createElement("td");
        tdPrice.className = "cell-price";
        const priceFmt = perfFmtPricePer1M(ep);
        if (priceFmt == null) {
          tdPrice.textContent = "—";
          tdPrice.classList.add("null-val");
        } else {
          tdPrice.textContent = priceFmt;
        }
        tr.appendChild(tdPrice);

        tr.appendChild(numCell(perfFmtLatency(ep.latency_last_30m?.p75)));
        tr.appendChild(numCell(perfFmtLatency(ep.latency_last_30m?.p90)));
        tr.appendChild(numCell(perfFmtTps(ep.throughput_last_30m?.p75)));
        tr.appendChild(numCell(perfFmtTps(ep.throughput_last_30m?.p90)));

        const uptimeFmt = perfFmtUptime(ep.uptime_last_1d);
        const tdUptime = numCell(uptimeFmt);
        if (ep.uptime_last_1d != null && Number(ep.uptime_last_1d) < 99) {
          tdUptime.classList.add("cell-uptime-warn");
        }
        tr.appendChild(tdUptime);

        const statusLabel = perfStatusLabel(ep.status);
        const tdStatus = numCell(statusLabel);
        if (ep.status === 0) {
          tdStatus.classList.add("cell-status-ok");
        } else if (ep.status != null) {
          tdStatus.classList.add("cell-status-err");
        }
        tr.appendChild(tdStatus);

        tbody.appendChild(tr);
      });
    });

    table.appendChild(tbody);
    wrap.appendChild(table);
  }

  function setPerformanceStatus(msg, isErr) {
    const el = document.getElementById("performance-status");
    if (!el) return;
    el.innerHTML = "";
    if (!msg) return;
    if (!isErr) {
      const spinner = document.createElement("span");
      spinner.className = "perf-spinner";
      spinner.setAttribute("aria-hidden", "true");
      el.appendChild(spinner);
    }
    el.appendChild(document.createTextNode(msg));
    el.classList.toggle("err", Boolean(isErr));
  }

  function clearPerformanceStatus() {
    const el = document.getElementById("performance-status");
    if (!el) return;
    el.innerHTML = "";
    el.classList.remove("err");
  }

  async function loadPerformanceData(forceRefresh) {
    const btnRefresh = document.getElementById("btn-performance-refresh");
    if (btnRefresh) btnRefresh.disabled = true;
    const wrap = document.getElementById("performance-table-wrap");
    if (wrap) {
      wrap.innerHTML = "<p class=\"muted performance-empty\">Loading…</p>";
    }
    setPerformanceStatus(
      forceRefresh ? "Refreshing OpenRouter cache (models + performance)…" : "Loading performance data…",
      false,
    );
    try {
      const res = await fetch("/api/performance" + (forceRefresh ? "?force=1" : ""), { cache: "no-store" });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "HTTP " + res.status);
      clearPerformanceStatus();
      renderPerformanceTable(data);
    } catch (err) {
      setPerformanceStatus("Failed to load: " + (err.message || String(err)), true);
      const w = document.getElementById("performance-table-wrap");
      if (w) w.innerHTML = "";
    } finally {
      if (btnRefresh) btnRefresh.disabled = false;
    }
  }

  const btnPerformance = document.getElementById("btn-performance");
  if (btnPerformance) {
    btnPerformance.addEventListener("click", function () {
      showPerformancePanel();
      loadPerformanceData();
    });
  }

  const btnPerformanceClose = document.getElementById("btn-performance-close");
  if (btnPerformanceClose) {
    btnPerformanceClose.addEventListener("click", function () {
      exitPerformancePanel();
    });
  }

  const btnPerformanceRefresh = document.getElementById("btn-performance-refresh");
  if (btnPerformanceRefresh) {
    btnPerformanceRefresh.addEventListener("click", function () {
      loadPerformanceData(true);
    });
  }

  // ── Translate benchmark panel ─────────────────────────────────────────────

  let translateBenchmarkDefaultsPromise = null;

  function loadTranslateBenchmarkDefaults() {
    if (translateBenchmarkDefaultsPromise) return translateBenchmarkDefaultsPromise;
    translateBenchmarkDefaultsPromise = (async function () {
      const sampleEl = document.getElementById("translate-benchmark-sample-text");
      if (!sampleEl || sampleEl.value.trim()) return;
      try {
        const res = await fetch("/api/presets/translate-benchmark/defaults");
        if (!res.ok) return;
        const data = await res.json();
        if (data.default_sample_text != null && !sampleEl.value.trim()) {
          sampleEl.value = data.default_sample_text;
        }
      } catch {
        /* ignore */
      }
    })();
    return translateBenchmarkDefaultsPromise;
  }

  function getSelectedBenchmarkPresetIds() {
    return getSelectedPresetIdsFromHost("benchmark-presets-checkboxes");
  }

  function getSelectedBenchmarkProvider() {
    const el = document.getElementById("benchmark-provider");
    if (!el) return "openrouter";
    const v = String(el.value || "").trim();
    return v || "openrouter";
  }

  function populateBenchmarkProviderSelect() {
    const select = document.getElementById("benchmark-provider");
    if (!select) return;
    const prev = select.value || "openrouter";
    select.innerHTML = "";

    const optAll = document.createElement("option");
    optAll.value = "all";
    optAll.textContent = "All providers";
    select.appendChild(optAll);

    const list = providers.length
      ? providers
      : [{ engine: "openrouter", label: "OpenRouter" }];
    list.forEach(function (prov) {
      const engine = prov.engine || prov.id;
      if (!engine) return;
      const opt = document.createElement("option");
      opt.value = engine;
      const label = prov.label || engine;
      opt.textContent = prov.configured === false ? label + " (no key)" : label;
      select.appendChild(opt);
    });

    const values = Array.prototype.map.call(select.options, function (o) {
      return o.value;
    });
    select.value = values.indexOf(prev) >= 0 ? prev : "openrouter";
  }

  function updateBenchmarkRunButton() {
    const btnRun = document.getElementById("btn-translate-benchmark-run");
    if (!btnRun) return;
    const selected = getSelectedBenchmarkPresetIds().length;
    btnRun.disabled = selected === 0;
  }

  function renderBenchmarkPresetCheckboxes() {
    renderPresetSelectList("benchmark-presets-checkboxes", {
      includeFreeRouter: true,
      onChange: updateBenchmarkRunButton,
      emptyMessage: "No presets in the catalog.",
      ariaLabel: "Toggle all presets for benchmark",
    });
  }

  function showTranslateBenchmarkPanel() {
    hideEditorMainPanels();
    const panel = document.getElementById("translate-benchmark-panel");
    const translateRow = document.getElementById("topbar-translate-row");
    if (translateRow) translateRow.classList.add("hidden");
    if (panel) panel.classList.remove("hidden");
    populateBenchmarkProviderSelect();
    renderBenchmarkPresetCheckboxes();
    void loadTranslateBenchmarkDefaults();
  }

  function exitTranslateBenchmarkPanel() {
    const panel = document.getElementById("translate-benchmark-panel");
    if (panel) panel.classList.add("hidden");
    showEditorMainPanels();
    setTopbarTranslateRowVisible(true);
  }

  function setTranslateBenchmarkStatus(msg, isErr) {
    const el = document.getElementById("translate-benchmark-status");
    if (!el) return;
    el.textContent = msg || "";
    el.classList.toggle("err", !!isErr);
    el.classList.toggle("muted", !isErr && !msg);
  }

  function clearTranslateBenchmarkStatus() {
    setTranslateBenchmarkStatus("", false);
  }

  function benchmarkFmtCostUsd(costUsd, costKnown) {
    if (costUsd == null || Number.isNaN(Number(costUsd))) return "—";
    if (!costKnown && Number(costUsd) === 0) return "—";
    return "$" + Number(costUsd).toFixed(6);
  }

  function renderTranslateBenchmarkTotalCost(data) {
    const el = document.getElementById("translate-benchmark-total-cost");
    if (!el) return;
    const rows = data.rows || [];
    if (!rows.length) {
      el.classList.add("hidden");
      el.textContent = "";
      return;
    }
    const totalFmt = benchmarkFmtCostUsd(data.total_cost_usd, data.total_cost_known);
    let text = "Total cost (this run): " + totalFmt;
    if (data.total_cost_partial) {
      text += " — sum of known rows only; some costs unavailable";
    }
    el.textContent = text;
    el.classList.remove("hidden");
  }

  function formatBenchmarkSlotLabel(slot) {
    if (slot === "main") return "main";
    if (slot === "fallback") return "fallback";
    return slot || "";
  }

  function formatBenchmarkProgressMessage(p) {
    if (!p || p.total == null) return "Running benchmark…";
    const slotLabel = formatBenchmarkSlotLabel(p.slot);
    const engPart = p.engine ? " · " + p.engine : "";
    const idPart =
      (p.preset_id || "?") + engPart + (slotLabel ? " · " + slotLabel : "");
    return "Running " + p.index + "/" + p.total + " (" + idPart + ")…";
  }

  var BENCHMARK_RESULT_TABLE_COLS = 9;

  function appendBenchmarkResultRows(tbody, row) {
    const summaryTr = document.createElement("tr");
    summaryTr.className = "benchmark-result-row";
    if (!row.ok) summaryTr.classList.add("benchmark-row-fail");

    const fullText = row.ok
      ? String(row.content || row.content_preview || "").trim()
      : String(row.content || row.error || "").trim();
    const previewText = row.ok
      ? String(row.content_preview || row.content || "").trim()
      : String(row.content_preview || row.content || row.error || "").trim();
    const canExpand = fullText.length > 0 && fullText.length > previewText.length;
    if (canExpand) {
      summaryTr.classList.add("benchmark-result-row-expandable");
      summaryTr.setAttribute("role", "button");
      summaryTr.setAttribute("tabindex", "0");
      summaryTr.setAttribute("aria-expanded", "false");
      summaryTr.title = "Click to show full output";
    }

    const tdPreset = document.createElement("td");
    tdPreset.className = "cell-setting";
    tdPreset.textContent = row.preset_id || "—";
    summaryTr.appendChild(tdPreset);

    const tdProvider = document.createElement("td");
    tdProvider.className = "cell-provider";
    tdProvider.textContent = row.engine || "—";
    summaryTr.appendChild(tdProvider);

    const tdSlot = document.createElement("td");
    tdSlot.className = "cell-slot";
    tdSlot.textContent = formatBenchmarkSlotLabel(row.slot) || "—";
    summaryTr.appendChild(tdSlot);

    const tdModel = document.createElement("td");
    tdModel.className = "cell-model";
    tdModel.textContent = row.model_id || "—";
    summaryTr.appendChild(tdModel);

    summaryTr.appendChild(numCell(row.ok ? row.duration_fmt : null));
    summaryTr.appendChild(
      numCell(row.ok ? benchmarkFmtCostUsd(row.cost_usd, row.cost_known) : null),
    );

    let tokText = null;
    if (row.ok && row.prompt_tokens != null && row.completion_tokens != null) {
      tokText = row.prompt_tokens + " / " + row.completion_tokens;
    }
    summaryTr.appendChild(numCell(tokText));

    const tdStatus = document.createElement("td");
    tdStatus.className = "num";
    if (row.ok) {
      tdStatus.textContent = "OK";
      tdStatus.classList.add("cell-status-ok");
    } else {
      tdStatus.textContent = "error";
      tdStatus.classList.add("cell-status-err", "benchmark-status-err");
    }
    summaryTr.appendChild(tdStatus);

    const tdPreview = document.createElement("td");
    tdPreview.className = "benchmark-preview";
    if (row.ok) {
      const preview = row.content_preview || "—";
      tdPreview.textContent = canExpand ? preview + " ▾" : preview;
    } else {
      const preview = previewText || "—";
      if (!previewText) {
        tdPreview.textContent = "—";
      } else if (canExpand) {
        tdPreview.textContent = preview + " ▾";
        tdPreview.classList.add("benchmark-preview-error");
      } else {
        tdPreview.textContent = preview;
        tdPreview.classList.add("benchmark-preview-error");
      }
    }
    summaryTr.appendChild(tdPreview);

    const detailTr = document.createElement("tr");
    detailTr.className = "benchmark-result-detail hidden";
    const detailTd = document.createElement("td");
    detailTd.colSpan = BENCHMARK_RESULT_TABLE_COLS;
    detailTd.className = "benchmark-result-detail-cell";
    const out = document.createElement("div");
    out.className = "benchmark-result-full-output";
    out.textContent = fullText || "—";
    detailTd.appendChild(out);
    detailTr.appendChild(detailTd);

    if (canExpand) {
      function setExpanded(open) {
        detailTr.classList.toggle("hidden", !open);
        summaryTr.setAttribute("aria-expanded", open ? "true" : "false");
        summaryTr.classList.toggle("benchmark-result-row-expanded", open);
        const prevCell = summaryTr.querySelector(".benchmark-preview");
        if (prevCell) {
          const base = row.ok
            ? row.content_preview || "—"
            : previewText || "—";
          prevCell.textContent = open ? base + " ▴" : canExpand ? base + " ▾" : base;
        }
      }
      function toggleExpanded() {
        setExpanded(detailTr.classList.contains("hidden"));
      }
      summaryTr.addEventListener("click", toggleExpanded);
      summaryTr.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleExpanded();
        }
      });
    }

    tbody.appendChild(summaryTr);
    tbody.appendChild(detailTr);
  }

  function initTranslateBenchmarkTableShell() {
    const wrap = document.getElementById("translate-benchmark-table-wrap");
    if (!wrap) return null;
    wrap.innerHTML = "";

    const table = document.createElement("table");
    table.className = "perf-table";
    table.id = "translate-benchmark-results-table";

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    [
      "Preset ID",
      "Provider",
      "Slot",
      "Model ID",
      "Time",
      "Cost",
      "Tokens (in/out)",
      "Status",
      "Output",
    ].forEach(function (label, i) {
      const th = document.createElement("th");
      th.textContent = label;
      if (i >= 4) th.className = "num";
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    tbody.id = "translate-benchmark-results-tbody";
    table.appendChild(tbody);
    wrap.appendChild(table);
    return tbody;
  }

  function appendTranslateBenchmarkRow(row) {
    let tbody = document.getElementById("translate-benchmark-results-tbody");
    if (!tbody) tbody = initTranslateBenchmarkTableShell();
    if (!tbody) return;
    appendBenchmarkResultRows(tbody, row);
  }

  function renderTranslateBenchmarkTable(data) {
    const wrap = document.getElementById("translate-benchmark-table-wrap");
    if (!wrap) return;

    const rows = data.rows || [];
    if (!rows.length) {
      wrap.innerHTML = "";
      const p = document.createElement("p");
      p.className = "muted performance-empty";
      p.textContent = "No models to benchmark for the selected presets and provider(s).";
      wrap.appendChild(p);
      return;
    }

    initTranslateBenchmarkTableShell();
    rows.forEach(function (row) {
      appendTranslateBenchmarkRow(row);
    });
    renderTranslateBenchmarkTotalCost(data);
  }

  function parseTranslateBenchmarkSseChunk(buffer) {
    const events = [];
    const blocks = buffer.split("\n\n");
    const remainder = blocks.pop() || "";
    blocks.forEach(function (block) {
      const trimmed = block.trim();
      if (!trimmed) return;
      let eventName = "message";
      let dataStr = "";
      trimmed.split("\n").forEach(function (line) {
        if (line.startsWith("event: ")) eventName = line.slice(7).trim();
        else if (line.startsWith("data: ")) dataStr += line.slice(6);
      });
      if (!dataStr) return;
      try {
        events.push({ event: eventName, data: JSON.parse(dataStr) });
      } catch {
        /* ignore malformed chunk */
      }
    });
    return { events, remainder };
  }

  async function consumeTranslateBenchmarkSse(res) {
    if (!res.body) throw new Error("Empty response body");
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let finalPayload = null;

    while (true) {
      const { done, value } = await reader.read();
      if (value) buffer += decoder.decode(value, { stream: true });
      const parsed = parseTranslateBenchmarkSseChunk(buffer);
      buffer = parsed.remainder;
      parsed.events.forEach(function (ev) {
        if (ev.event === "progress") {
          setTranslateBenchmarkStatus(formatBenchmarkProgressMessage(ev.data), false);
        } else if (ev.event === "row") {
          appendTranslateBenchmarkRow(ev.data);
        } else if (ev.event === "done") {
          finalPayload = ev.data;
        } else if (ev.event === "error") {
          throw new Error(ev.data?.error || "Benchmark failed");
        }
      });
      if (done) {
        if (buffer.trim()) {
          const tail = parseTranslateBenchmarkSseChunk(buffer + "\n\n");
          tail.events.forEach(function (ev) {
            if (ev.event === "progress") {
              setTranslateBenchmarkStatus(formatBenchmarkProgressMessage(ev.data), false);
            } else if (ev.event === "row") {
              appendTranslateBenchmarkRow(ev.data);
            } else if (ev.event === "done") {
              finalPayload = ev.data;
            } else if (ev.event === "error") {
              throw new Error(ev.data?.error || "Benchmark failed");
            }
          });
        }
        break;
      }
    }

    return finalPayload;
  }

  function benchmarkIncludeFallbackModels() {
    const el = document.getElementById("benchmark-include-fallback");
    return el ? el.checked : false;
  }

  async function runTranslateBenchmark() {
    const btnRun = document.getElementById("btn-translate-benchmark-run");
    const sampleEl = document.getElementById("translate-benchmark-sample-text");
    const sampleText = sampleEl ? sampleEl.value : "";
    const presetIds = getSelectedBenchmarkPresetIds();
    const includeFallback = benchmarkIncludeFallbackModels();
    const provider = getSelectedBenchmarkProvider();
    if (!presetIds.length) {
      setTranslateBenchmarkStatus("Select at least one preset to benchmark.", true);
      return;
    }

    if (btnRun) btnRun.disabled = true;
    setTranslateBenchmarkStatus("Starting benchmark…", false);
    const totalEl = document.getElementById("translate-benchmark-total-cost");
    if (totalEl) {
      totalEl.classList.add("hidden");
      totalEl.textContent = "";
    }
    initTranslateBenchmarkTableShell();

    try {
      const res = await fetch("/api/presets/translate-benchmark?stream=1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "text/event-stream",
        },
        body: JSON.stringify({
          sample_text: sampleText,
          preset_ids: presetIds,
          include_fallback: includeFallback,
          provider: provider,
          stream: true,
        }),
      });

      const contentType = (res.headers.get("Content-Type") || "").toLowerCase();
      if (!res.ok) {
        const data =
          contentType.indexOf("json") >= 0
            ? await res.json().catch(function () {
                return {};
              })
            : {};
        throw new Error(data.error || "HTTP " + res.status);
      }

      if (contentType.indexOf("text/event-stream") < 0) {
        const data = await res.json();
        clearTranslateBenchmarkStatus();
        renderTranslateBenchmarkTable(data);
        return;
      }

      const data = await consumeTranslateBenchmarkSse(res);
      if (!data) throw new Error("Benchmark ended without a result");
      renderTranslateBenchmarkTotalCost(data);
      clearTranslateBenchmarkStatus();
    } catch (err) {
      setTranslateBenchmarkStatus(
        "Failed: " + (err.message || String(err)),
        true,
      );
    } finally {
      updateBenchmarkRunButton();
    }
  }

  const btnTranslateBenchmark = document.getElementById("btn-translate-benchmark");
  if (btnTranslateBenchmark) {
    btnTranslateBenchmark.addEventListener("click", function () {
      showTranslateBenchmarkPanel();
    });
  }

  const btnTranslateBenchmarkClose = document.getElementById("btn-translate-benchmark-close");
  if (btnTranslateBenchmarkClose) {
    btnTranslateBenchmarkClose.addEventListener("click", function () {
      exitTranslateBenchmarkPanel();
    });
  }

  const btnTranslateBenchmarkRun = document.getElementById("btn-translate-benchmark-run");
  if (btnTranslateBenchmarkRun) {
    btnTranslateBenchmarkRun.addEventListener("click", function () {
      runTranslateBenchmark();
    });
  }

  void loadTranslateBenchmarkDefaults();
  loadAll();
})();
