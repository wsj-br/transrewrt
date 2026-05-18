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

  let catalog = { version: "0.0.0", updated_at: "", skills: [] };
  let meta = { sourceLocale: "en-GB" };
  let uiLanguages = [];
  let models = [];
  let selectedId = null;
  let lastDetailSkillId = null;
  let expandedProviders = new Set();
  /** Snapshot of name/description when skill was selected — used to clear stale translations */
  let nameDescBaseline = { id: null, name: "", description: "" };
  let modelSearch = "";
  let skillSearch = "";
  var modelPickerTarget = "skill";
  var translateRunInFlight = false;
  var KEY_TRANSLATION_MODEL = "translation_model";
  var KEY_TRANSLATION_FALLBACK = "translation_model_fallback";
  var KEY_SUGGESTION_MODEL = "suggestion_model";
  var KEY_SUGGESTION_FALLBACK = "suggestion_model_fallback";
  var SKILL_PROVIDER_PICKER_PREFIX = "skill_provider:";
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

  function pickerEngineFromTarget(target) {
    const ai = parseAiSuggestPickerTarget(target);
    if (ai) return ai.engine;
    const t = target || "";
    if (!t.startsWith(SKILL_PROVIDER_PICKER_PREFIX)) return null;
    return t.slice(SKILL_PROVIDER_PICKER_PREFIX.length) || null;
  }

  function parseAiSuggestPickerTarget(target) {
    const t = target || "";
    if (!t.startsWith(AI_SUGGEST_PICKER_PREFIX)) return null;
    const rest = t.slice(AI_SUGGEST_PICKER_PREFIX.length);
    const colon = rest.indexOf(":");
    if (colon <= 0) return null;
    return {
      skillId: rest.slice(0, colon),
      engine: rest.slice(colon + 1),
    };
  }

  function aiSuggestPickerTarget(skillId, engine) {
    return AI_SUGGEST_PICKER_PREFIX + skillId + ":" + engine;
  }

  function isSkillProviderPickerTarget(target) {
    return Boolean(pickerEngineFromTarget(target));
  }

  function getPickerModels() {
    const eng = pickerEngineFromTarget(modelPickerTarget);
    if (eng) return modelsByEngine[eng] || [];
    return models;
  }

  function skillModelId(sk, engine) {
    if (!sk || !engine) return "";
    if (sk.model_ids && sk.model_ids[engine]) return String(sk.model_ids[engine]).trim();
    return "";
  }

  function setSkillModelId(sk, engine, id) {
    if (!sk || !engine) return;
    if (!sk.model_ids || typeof sk.model_ids !== "object") sk.model_ids = {};
    const trimmed = String(id || "").trim();
    if (trimmed) sk.model_ids[engine] = trimmed;
    else delete sk.model_ids[engine];
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

  function normalizeSkillModelIds(skill) {
    if (!skill) return;
    if (!skill.model_ids || typeof skill.model_ids !== "object") skill.model_ids = {};
    const legacy = skill.model_id ? String(skill.model_id).trim() : "";
    if (legacy && !skill.model_ids.openrouter) skill.model_ids.openrouter = legacy;
    Object.keys(skill.model_ids).forEach(function (eng) {
      const raw = skill.model_ids[eng];
      if (typeof raw !== "string" || !raw.trim()) {
        delete skill.model_ids[eng];
        return;
      }
      skill.model_ids[eng] = canonicalForEngine(eng, raw);
    });
    if (skill.model_id != null) delete skill.model_id;
  }

  function normalizeCatalogModelIds() {
    (catalog.skills || []).forEach(normalizeSkillModelIds);
  }

  function providersForSkill(skill) {
    if (!providers.length) return [];
    if (skill && skill.id === "free-router") {
      return providers.filter(function (p) {
        return p.engine === "openrouter";
      });
    }
    return providers;
  }

  function getSelectedModelIdForPicker() {
    const aiPick = parseAiSuggestPickerTarget(modelPickerTarget);
    if (aiPick) {
      const st = aiSuggestStaging[aiPick.skillId];
      return st && st[aiPick.engine] ? st[aiPick.engine].model_id : "";
    }
    const eng = pickerEngineFromTarget(modelPickerTarget);
    if (eng && isSkillProviderPickerTarget(modelPickerTarget)) {
      const sk = getSelectedSkill();
      return skillModelId(sk, eng);
    }
    if (modelPickerTarget === "skill") {
      const sk = getSelectedSkill();
      return skillModelId(sk, "openrouter");
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

  function ensureDefaultTranslationModels() {
    migrateCatalogTranslationKeys();
    if (!models.length) {
      syncHeaderTranslationModelsDisplay();
      return;
    }
    const has = function (id) {
      return id && models.some(function (m) { return m.id === id; });
    };
    if (!has(catalog[KEY_TRANSLATION_MODEL])) {
      catalog[KEY_TRANSLATION_MODEL] = models[0].id;
    }
    const fb = catalog[KEY_TRANSLATION_FALLBACK];
    if (typeof fb === "string" && fb.trim() && !has(fb.trim())) {
      delete catalog[KEY_TRANSLATION_FALLBACK];
    }
    syncHeaderTranslationModelsDisplay();
  }

  function computeTranslateQueueInfo() {
    const sourceLocale = meta.sourceLocale || "en-GB";
    const targets = uiLanguages.filter(function (row) {
      return row && row.code && row.code !== sourceLocale;
    });
    let jobs = 0;
    let slots = 0;
    (catalog.skills || []).forEach(function (skill) {
      if (!skill || typeof skill.id !== "string") return;
      targets.forEach(function (row) {
        const code = row.code;
        const nn = !pickLocaleString(skill.translated_name, code);
        const nd = !pickLocaleString(skill.translated_description, code);
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
          "No missing translations — every non-source locale has name and description for each skill.";
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

  function ensureDefaultSuggestionModels() {
    if (!models.length) {
      syncSuggestionModelsDisplay();
      return;
    }
    const has = function (id) {
      return id && models.some(function (m) {
        return m.id === id;
      });
    };
    if (!has(catalog[KEY_SUGGESTION_MODEL])) {
      const fromTranslation = String(catalog[KEY_TRANSLATION_MODEL] || "").trim();
      catalog[KEY_SUGGESTION_MODEL] = has(fromTranslation) ? fromTranslation : models[0].id;
    }
    const fb = catalog[KEY_SUGGESTION_FALLBACK];
    if (typeof fb === "string" && fb.trim() && !has(fb.trim())) {
      delete catalog[KEY_SUGGESTION_FALLBACK];
    }
    syncSuggestionModelsDisplay();
    updateAiSuggestContinueButton();
  }

  function providerLabelForEngine(engine) {
    const prov = providers.find(function (p) {
      return p.engine === engine;
    });
    return (prov && prov.label) || engine;
  }

  function getAiSuggestableSkills() {
    return (catalog.skills || []).filter(function (s) {
      return s && typeof s.id === "string" && s.id !== "free-router";
    });
  }

  function getSelectedAiSuggestSkillIds() {
    const host = document.getElementById("ai-suggest-skill-checkboxes");
    if (!host) return [];
    return Array.from(host.querySelectorAll('input[type="checkbox"][data-skill-id]:checked')).map(
      function (el) {
        return el.getAttribute("data-skill-id") || "";
      },
    ).filter(Boolean);
  }

  function setAllAiSuggestSkillChecks(checked) {
    const host = document.getElementById("ai-suggest-skill-checkboxes");
    if (!host) return;
    host.querySelectorAll('input[type="checkbox"][data-skill-id]').forEach(function (el) {
      el.checked = checked;
    });
    updateAiSuggestContinueButton();
  }

  function renderAiSuggestSkillCheckboxes() {
    const host = document.getElementById("ai-suggest-skill-checkboxes");
    if (!host) return;
    host.innerHTML = "";
    const skills = getAiSuggestableSkills().slice().sort(function (a, b) {
      return String(a.name || a.id).localeCompare(String(b.name || b.id), undefined, {
        sensitivity: "base",
      });
    });
    if (!skills.length) {
      const empty = document.createElement("p");
      empty.className = "muted";
      empty.textContent = "No skills available (add skills besides free-router).";
      host.appendChild(empty);
      updateAiSuggestContinueButton();
      return;
    }
    skills.forEach(function (skill) {
      const label = document.createElement("label");
      label.className = "ai-suggest-skill-check";
      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = true;
      input.setAttribute("data-skill-id", skill.id);
      input.addEventListener("change", updateAiSuggestContinueButton);
      const span = document.createElement("span");
      span.className = "ai-suggest-skill-check-label";
      span.innerHTML =
        "<strong>" +
        escapeHtml(skill.name || skill.id) +
        '</strong><span class="ai-suggest-skill-check-meta">' +
        escapeHtml(skill.id) +
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
    const selectedCount = getSelectedAiSuggestSkillIds().length;
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
      msg = "Select at least one skill to continue.";
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
          if (engine === "openrouter") ensureDefaultSuggestionModels();
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
    ensureDefaultSuggestionModels();
    renderAiSuggestSkillCheckboxes();
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

  function snapshotModelIdForSkill(skill, engine) {
    if (!skill) return "";
    const snap = aiSuggestSnapshot[skill.id];
    if (snap && snap[engine]) return snap[engine];
    return skillModelId(skill, engine);
  }

  function setAiSuggestStagingModel(skillId, engine, modelId) {
    if (!aiSuggestStaging[skillId]) aiSuggestStaging[skillId] = {};
    const trimmed = String(modelId || "").trim();
    if (!trimmed) {
      delete aiSuggestStaging[skillId][engine];
      return;
    }
    const prev = aiSuggestStaging[skillId][engine] || {};
    aiSuggestStaging[skillId][engine] = {
      model_id: canonicalForEngine(engine, trimmed),
      reason: prev.reason || "",
      warning: prev.warning,
    };
  }

  function renderAiSuggestReview() {
    const host = document.getElementById("ai-suggest-review-host");
    if (!host) return;
    host.innerHTML = "";
    const skillIds = Object.keys(aiSuggestStaging).sort();
    if (!skillIds.length) {
      host.innerHTML = '<p class="muted">No suggestions to review.</p>';
      return;
    }
    skillIds.forEach(function (skillId) {
      const skill = catalog.skills.find(function (s) {
        return s && s.id === skillId;
      });
      const section = document.createElement("section");
      section.className = "ai-suggest-skill-block";
      const title = document.createElement("h3");
      title.textContent = (skill && skill.name) || skillId;
      section.appendChild(title);
      const meta = document.createElement("p");
      meta.className = "muted ai-suggest-skill-id";
      meta.textContent = skillId;
      section.appendChild(meta);

      const table = document.createElement("table");
      table.className = "ai-suggest-table";
      table.innerHTML =
        "<thead><tr><th>Provider</th><th>Current</th><th>Suggested</th><th></th></tr></thead>";
      const tbody = document.createElement("tbody");

      const provList = skill ? providersForSkill(skill) : providers;
      provList.forEach(function (prov) {
        const engine = prov.engine;
        const staging = aiSuggestStaging[skillId] && aiSuggestStaging[skillId][engine];
        const currentRaw = snapshotModelIdForSkill(skill, engine);
        const suggestedRaw = staging ? staging.model_id : "";
        const tr = document.createElement("tr");
        const currentDisplay = currentRaw
          ? escapeHtml(displayIdForCatalogModel(currentRaw))
          : '<span class="muted">(blank)</span>';
        let suggestedHtml = suggestedRaw
          ? "<code>" + escapeHtml(displayIdForCatalogModel(suggestedRaw)) + "</code>"
          : '<span class="muted">(none)</span>';
        if (staging && staging.reason) {
          suggestedHtml +=
            '<div class="ai-suggest-reason muted">' + escapeHtml(staging.reason) + "</div>";
        }
        if (staging && staging.warning === "not_in_catalog") {
          suggestedHtml +=
            ' <span class="ai-suggest-warn-badge">not in catalog</span>';
        }
        tr.innerHTML =
          "<td>" +
          escapeHtml(prov.label || engine) +
          "</td><td>" +
          currentDisplay +
          "</td><td>" +
          suggestedHtml +
          "</td><td></td>";
        const actionsTd = tr.querySelector("td:last-child");
        const btnChange = document.createElement("button");
        btnChange.type = "button";
        btnChange.className = "btn secondary sm";
        btnChange.textContent = "Change";
        btnChange.addEventListener("click", function () {
          openModelPicker(aiSuggestPickerTarget(skillId, engine));
        });
        actionsTd.appendChild(btnChange);
        tbody.appendChild(tr);
      });
      table.appendChild(tbody);
      section.appendChild(table);
      host.appendChild(section);
    });
  }

  function applyAiSuggestStagingToCatalog() {
    Object.keys(aiSuggestStaging).forEach(function (skillId) {
      const skill = catalog.skills.find(function (s) {
        return s && s.id === skillId;
      });
      if (!skill) return;
      const staging = aiSuggestStaging[skillId];
      if (!staging) return;
      Object.keys(staging).forEach(function (engine) {
        const row = staging[engine];
        if (row && row.model_id) setSkillModelId(skill, engine, row.model_id);
      });
      normalizeSkillModelIds(skill);
    });
    aiSuggestStaging = {};
    aiSuggestSnapshot = {};
    hideAiSuggestReview();
    renderSkillList();
    renderDetail();
    setStatus("Applied AI suggestions to catalog (save to persist)", true);
  }

  function cancelAiSuggestReview() {
    aiSuggestStaging = {};
    aiSuggestSnapshot = {};
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
    const skillIds = getSelectedAiSuggestSkillIds();
    if (!skillIds.length) {
      alert("Select at least one skill to suggest models for.");
      return;
    }
    await executeAiSuggestRun(skillIds);
  }

  async function executeAiSuggestRun(skillIds) {
    const selectedSkillIds = Array.isArray(skillIds) ? skillIds.filter(Boolean) : [];
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
      "Skills selected: " + selectedSkillIds.length + " (" + selectedSkillIds.join(", ") + ")",
    );

    try {
      const res = await nativeFetch("/api/skills/suggest-models?stream=1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ catalog: catalog, skill_ids: selectedSkillIds }),
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
          planned = rec.totalSkills != null ? rec.totalSkills : 0;
          if (summaryEl) {
            summaryEl.textContent = "Processing " + planned + " selected skill(s)…";
          }
          appendAiSuggestRunLog(
            "Will process " + planned + " skill(s); reusing server catalog cache when warm.",
          );
        } else if (rec.type === "job") {
          if (rec.status === "retry") {
            appendAiSuggestRunLog(
              "Retry (fallback) " + rec.skillId + " — primary error: " + (rec.primaryError || "?"),
              true,
            );
          } else if (rec.status === "running") {
            appendAiSuggestRunLog("Processing skill: " + rec.skillId + "…");
          } else if (rec.status === "ok") {
            completed++;
            const fbNote = rec.usedFallback ? " [via fallback]" : "";
            appendAiSuggestRunLog("Done: " + rec.skillId + fbNote);
            if (rec.suggestions) {
              aiSuggestStaging[rec.skillId] = {};
              Object.keys(rec.suggestions).forEach(function (eng) {
                const row = rec.suggestions[eng];
                if (row && row.model_id) {
                  aiSuggestStaging[rec.skillId][eng] = {
                    model_id: row.model_id,
                    reason: row.reason || "",
                    warning: row.warning,
                  };
                }
              });
            }
          } else if (rec.status === "error") {
            appendAiSuggestRunLog("Error: " + rec.skillId + " — " + (rec.error || "?"), true);
          }
          if (summaryEl && planned) {
            summaryEl.textContent =
              "Progress: " + Math.min(completed, planned) + " / " + planned + " skill(s) done.";
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

  function getSelectedSkill() {
    return catalog.skills.find(function (s) {
      return s.id === selectedId;
    });
  }

  function syncBaselineFromSkill(skill) {
    if (!skill) {
      nameDescBaseline = { id: null, name: "", description: "" };
      return;
    }
    nameDescBaseline = {
      id: skill.id,
      name: skill.name || "",
      description: skill.description || "",
    };
  }

  function maybeClearTranslationsOnSourceEdit(skill) {
    if (!skill || skill.id !== nameDescBaseline.id) return;
    const n = skill.name || "";
    const d = skill.description || "";
    if (n === nameDescBaseline.name && d === nameDescBaseline.description) return;
    delete skill.translated_name;
    delete skill.translated_description;
  }

  function renderSkillList() {
    const ul = document.getElementById("skill-list");
    if (!ul) return;
    const q = skillSearch.trim().toLowerCase();
    ul.innerHTML = "";
    catalog.skills.forEach(function (skill) {
      if (q) {
        const hay = (skill.id + " " + (skill.name || "")).toLowerCase();
        if (!hay.includes(q)) return;
      }
      const li = document.createElement("li");
      const btn = document.createElement("button");
      btn.type = "button";
      if (skill.id === selectedId) btn.classList.add("active");
      btn.innerHTML =
        "<strong>" +
        escapeHtml(skill.name || skill.id) +
        '</strong><span class="skill-line-meta">' +
        escapeHtml(skill.id) +
        "</span>";
      btn.addEventListener("click", function () {
        selectedId = skill.id;
        syncBaselineFromSkill(skill);
        renderSkillList();
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
      if (aiPickTitle) title.textContent = "Suggested model — " + aiPickTitle.skillId;
      else if (eng) title.textContent = (prov && prov.label) || eng;
      else if (modelPickerTarget === "skill") title.textContent = "Skill model";
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
        hint.textContent =
          "Override suggested model for skill " +
          aiPick.skillId +
          " (" +
          (prov ? prov.label : aiPick.engine) +
          ").";
      } else if (eng) {
        hint.textContent = prov && prov.configured
          ? "Choose a model for this provider. Stored under model_ids." +
            eng +
            " as a canonical engine/model id."
          : "No API key for this provider — type a model id in the skill form (e.g. " +
            eng +
            "/model-name).";
      } else if (modelPickerTarget === "skill") {
        hint.textContent =
          "Choose the OpenRouter model for the selected skill. Pricing is per 1M tokens (USD).";
      } else if (modelPickerTarget === "translation_model") {
        hint.textContent =
          "Used for “Translate missing”, stored as translation_model. On failure, the server retries with translation_model_fallback when that field is set.";
      } else if (modelPickerTarget === "suggestion_model") {
        hint.textContent =
          "Used for AI Suggestion (OpenRouter web search). Stored as suggestion_model in skills.json.";
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
    const t = target || "skill";
    const aiPick = parseAiSuggestPickerTarget(t);
    const eng = pickerEngineFromTarget(t);
    const silentLoad = isAiSuggestFlowVisible();
    if (!aiPick && (t === "skill" || (eng && isSkillProviderPickerTarget(t))) && !getSelectedSkill()) {
      return;
    }
    const needsOpenRouterList =
      t === "suggestion_model" ||
      t === "suggestion_model_fallback" ||
      t === "translation_model" ||
      t === KEY_TRANSLATION_FALLBACK ||
      t === "skill";
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
                setAiSuggestStagingModel(aiPick.skillId, aiPick.engine, m.id);
                renderAiSuggestReview();
              } else {
              const eng = pickerEngineFromTarget(modelPickerTarget);
              if ((eng && isSkillProviderPickerTarget(modelPickerTarget)) || modelPickerTarget === "skill") {
                const sk = getSelectedSkill();
                if (!sk) return;
                const engine = eng || "openrouter";
                setSkillModelId(sk, engine, m.id);
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
    const skill = getSelectedSkill();
    if (!skill) {
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
      rowsForMap(skill.translated_name, skill.name || "") +
      '<div class="trans-sub">Descriptions</div>' +
      rowsForMap(skill.translated_description, skill.description || "");
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

  function renderProviderModels() {
    const host = document.getElementById("provider-models-host");
    if (!host) return;
    const skill = getSelectedSkill();
    if (!skill) {
      host.innerHTML = "";
      return;
    }
    host.innerHTML = "";
    providersForSkill(skill).forEach(function (prov) {
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

      const fieldWrap = document.createElement("div");
      fieldWrap.className = "provider-model-field";
      const input = document.createElement("input");
      input.type = "text";
      input.className = "provider-model-input";
      input.placeholder = engine + "/model-name";
      input.value = skillModelId(skill, engine);
      input.autocomplete = "off";
      input.addEventListener("input", function () {
        setSkillModelId(skill, engine, input.value);
      });
      input.addEventListener("change", function () {
        const canon = canonicalForEngine(engine, input.value);
        setSkillModelId(skill, engine, canon);
        input.value = skillModelId(skill, engine);
      });
      fieldWrap.appendChild(input);
      row.appendChild(fieldWrap);

      const actions = document.createElement("div");
      actions.className = "provider-model-actions";
      if (prov.configured) {
        const btnChoose = document.createElement("button");
        btnChoose.type = "button";
        btnChoose.className = "btn secondary sm";
        btnChoose.textContent = "Choose";
        btnChoose.addEventListener("click", function () {
          openModelPicker(SKILL_PROVIDER_PICKER_PREFIX + engine);
        });
        actions.appendChild(btnChoose);
      }
      const btnTest = document.createElement("button");
      btnTest.type = "button";
      btnTest.className = "btn secondary sm";
      btnTest.textContent = "Test";
      btnTest.addEventListener("click", function () {
        testProviderModel(engine, row.querySelector(".provider-model-test-result"));
      });
      actions.appendChild(btnTest);
      row.appendChild(actions);

      const out = document.createElement("div");
      out.className = "provider-model-test-result";
      row.appendChild(out);

      host.appendChild(row);
    });
  }

  function renderDetail() {
    const empty = document.getElementById("detail-empty");
    const form = document.getElementById("detail-form");
    const skill = getSelectedSkill();
    if (!empty || !form) return;
    if (!skill) {
      if (lastDetailSkillId != null) clearTestModelResult();
      lastDetailSkillId = null;
      empty.classList.remove("hidden");
      form.classList.add("hidden");
      updateTranslateBar();
      return;
    }
    if (skill.id !== lastDetailSkillId) clearTestModelResult();
    lastDetailSkillId = skill.id;
    empty.classList.add("hidden");
    form.classList.remove("hidden");

    refreshSourceLocaleFieldLabels();

    document.getElementById("detail-title").textContent = skill.name || skill.id;

    document.getElementById("field-id").value = skill.id;
    document.getElementById("field-name").value = skill.name || "";
    document.getElementById("field-description").value = skill.description || "";
    document.getElementById("field-prompt-hint").value = skill.prompt_hint || "";

    renderProviderModels();
    renderTranslations();
    updateTranslateBar();
  }

  async function loadAll() {
    setEditorBootVisible(true, "Loading skills catalog…");
    setStatus("Loading…", null);
    try {
      const [mRes, uRes, sRes, provRes] = await Promise.all([
        nativeFetch("/api/meta", { cache: "no-store" }),
        nativeFetch("/api/ui-languages", { cache: "no-store" }),
        nativeFetch("/api/skills", { cache: "no-store" }),
        nativeFetch("/api/providers", { cache: "no-store" }),
      ]);
      if (!mRes.ok) throw new Error("meta HTTP " + mRes.status);
      if (!uRes.ok) throw new Error("ui-languages HTTP " + uRes.status);
      if (!sRes.ok) {
        let msg = "";
        try {
          const errBody = await sRes.json();
          if (errBody && typeof errBody.error === "string" && errBody.error.trim()) {
            msg = errBody.error.trim();
          }
        } catch {
          /* ignore */
        }
        throw new Error(
          msg ||
            "Could not load the skills catalog. The server returned an unexpected response (HTTP " +
              sRes.status +
              "). Try reloading the page or restarting pnpm run dev:skills-editor.",
        );
      }
      meta = await mRes.json();
      uiLanguages = await uRes.json();
      catalog = await sRes.json();
      refreshSourceLocaleFieldLabels();
      if (!provRes.ok) {
        const t = await provRes.text();
        throw new Error("providers: " + t);
      }
      const provJson = await provRes.json();
      providers = provJson.providers || [];
      if (!catalog.skills) catalog.skills = [];
      normalizeCatalogModelIds();

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

      ensureDefaultTranslationModels();
      ensureDefaultSuggestionModels();
      if (selectedId && !catalog.skills.some(function (s) { return s.id === selectedId; })) {
        selectedId = null;
      }
      renderSkillList();
      renderDetail();
      updateAiSuggestBar();
      setStatus("Ready", true);
      setEditorBootVisible(false);
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
      const res = await nativeFetch("/api/skills", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(catalog),
      });
      const data = await res.json().catch(function () {
        return {};
      });
      if (!res.ok) throw new Error(data.error || "Save failed");
      catalog = data.catalog || catalog;
      syncBaselineFromSkill(getSelectedSkill());
      setStatus("Saved (repo + data mirror)", true);
      renderSkillList();
      renderDetail();
      syncHeaderTranslationModelsDisplay();
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
      const res = await nativeFetch("/api/skills/translate-missing?stream=1", {
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
                rec.skillId +
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
                rec.skillId +
                " · " +
                rec.locale +
                " — " +
                (bits.length ? bits.join(", ") : "(no new fields)") +
                fbNote,
            );
          } else if (rec.status === "error") {
            appendTranslateLog(
              "ERR " + rec.skillId + " · " + rec.locale + ": " + (rec.error || "?"),
              true,
            );
          } else if (rec.status === "skipped") {
            appendTranslateLog("Skip " + rec.skillId + " · " + rec.locale);
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
            syncBaselineFromSkill(getSelectedSkill());
            renderSkillList();
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

  async function testProviderModel(engine, outEl) {
    const skill = getSelectedSkill();
    const out = outEl || null;
    const raw = skill ? skillModelId(skill, engine) : "";
    const modelId = raw ? canonicalForEngine(engine, raw) : "";
    if (!skill || !modelId) {
      if (out) {
        out.textContent = "Enter a model id first.";
        setTestModelResultClass(out, "err");
      }
      return;
    }
    if (out) {
      out.textContent = "Testing…";
      setTestModelResultClass(out, "");
    }
    try {
      const res = await nativeFetch("/api/skills/test-model", {
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
      const skill = getSelectedSkill();
      if (!skill) return;
      skill[key] = el.value;
      if (key === "name" || key === "description") {
        maybeClearTranslationsOnSourceEdit(skill);
        renderTranslations();
        updateTranslateBar();
      }
    });
  }

  document.getElementById("skill-search").addEventListener("input", function (e) {
    skillSearch = e.target.value || "";
    renderSkillList();
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
    loadAll();
  });

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

  const btnAiSuggestSkillsAll = document.getElementById("btn-ai-suggest-skills-all");
  if (btnAiSuggestSkillsAll) {
    btnAiSuggestSkillsAll.addEventListener("click", function () {
      setAllAiSuggestSkillChecks(true);
    });
  }
  const btnAiSuggestSkillsNone = document.getElementById("btn-ai-suggest-skills-none");
  if (btnAiSuggestSkillsNone) {
    btnAiSuggestSkillsNone.addEventListener("click", function () {
      setAllAiSuggestSkillChecks(false);
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
    const skill = getSelectedSkill();
    if (!skill) return;
    const next = e.target.value.trim();
    if (!next || next === skill.id) return;
    if (catalog.skills.some(function (s) { return s.id === next && s !== skill; })) {
      alert("That id is already in use.");
      e.target.value = skill.id;
      return;
    }
    skill.id = next;
    selectedId = next;
    nameDescBaseline.id = next;
    renderSkillList();
    renderDetail();
  });

  wireField("field-name", "name");
  wireField("field-description", "description");
  wireField("field-prompt-hint", "prompt_hint");

  document.getElementById("btn-add-skill").addEventListener("click", function () {
    const nid = "new-skill-" + Date.now();
    catalog.skills.push({
      id: nid,
      name: "New skill",
      description: "",
      model_ids: { openrouter: "openrouter/openrouter/free" },
      prompt_hint: "Be concise and direct.",
    });
    selectedId = nid;
    syncBaselineFromSkill(getSelectedSkill());
    renderSkillList();
    renderDetail();
  });

  document.getElementById("btn-delete-skill").addEventListener("click", function () {
    const skill = getSelectedSkill();
    if (!skill) return;
    if (!confirm("Delete skill " + skill.id + "?")) return;
    catalog.skills = catalog.skills.filter(function (s) {
      return s.id !== skill.id;
    });
    selectedId = null;
    nameDescBaseline = { id: null, name: "", description: "" };
    renderSkillList();
    renderDetail();
  });

  loadAll();
})();
