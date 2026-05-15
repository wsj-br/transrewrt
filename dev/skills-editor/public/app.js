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
  let expandedProviders = new Set();
  /** Snapshot of name/description when skill was selected — used to clear stale translations */
  let nameDescBaseline = { id: null, name: "", description: "" };
  let modelSearch = "";
  let skillSearch = "";
  var modelPickerTarget = "skill";
  var translateRunInFlight = false;
  var KEY_TRANSLATION_MODEL = "translation_model";
  var KEY_TRANSLATION_FALLBACK = "translation_model_fallback";

  function getSelectedModelIdForPicker() {
    if (modelPickerTarget === "skill") {
      const sk = getSelectedSkill();
      return sk ? sk.model_id || "" : "";
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
    const m = models.find(function (x) {
      return x.id === id;
    });
    return m ? modelPickerDisplay(m) : openrouterInnerFromCanonical(id);
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
          " OpenRouter request(s). Primary model: " +
          KEY_TRANSLATION_MODEL +
          "; optional retry: " +
          KEY_TRANSLATION_FALLBACK +
          ". Save the catalog to persist.";
      }
    }

    const primaryOk =
      primary.startsWith("openrouter/") &&
      models.some(function (m) {
        return m.id === primary;
      });
    if (btn) {
      btn.disabled = q.slots === 0 || translateRunInFlight || !primaryOk || !models.length;
    }
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

  async function readNdjsonResponse(res, onRecord) {
    const reader = res.body && res.body.getReader ? res.body.getReader() : null;
    if (!reader) {
      const t = await res.text();
      var j = {};
      try {
        j = JSON.parse(t);
      } catch (e) {
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
        } catch (pe) {
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
      } catch (e2) {
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
    if (title) {
      if (modelPickerTarget === "skill") title.textContent = "Skill model";
      else if (modelPickerTarget === "translation_model") title.textContent = "Translation model";
      else title.textContent = "Translation model — Fallback";
    }
    if (hint) {
      if (modelPickerTarget === "skill") {
        hint.textContent =
          "Choose the OpenRouter model for the selected skill. Pricing is per 1M tokens (USD).";
      } else if (modelPickerTarget === "translation_model") {
        hint.textContent =
          "Used for “Translate missing”, stored as translation_model. On failure, the server retries with translation_model_fallback when that field is set.";
      } else {
        hint.textContent =
          "Optional retry model when the primary translation model errors. Stored as translation_model_fallback.";
      }
    }
  }

  function openModelPicker(target) {
    const t = target || "skill";
    if (t === "skill" && !getSelectedSkill()) return;
    modelPickerTarget = t;
    updateModelPickerChrome();
    const overlay = document.getElementById("model-picker-overlay");
    const modalSearch = document.getElementById("model-modal-search");
    if (!overlay) return;
    overlay.classList.remove("hidden");
    overlay.setAttribute("aria-hidden", "false");
    if (modalSearch) modalSearch.value = modelSearch;
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

    const filtered = models.filter(function (m) {
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
              if (modelPickerTarget === "skill") {
                const sk = getSelectedSkill();
                if (!sk) return;
                sk.model_id = m.id;
                const field = document.getElementById("field-model-id");
                if (field) field.value = m.id;
              } else if (modelPickerTarget === "translation_model") {
                catalog[KEY_TRANSLATION_MODEL] = m.id;
                syncHeaderTranslationModelsDisplay();
              } else {
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

  function renderDetail() {
    const empty = document.getElementById("detail-empty");
    const form = document.getElementById("detail-form");
    const skill = getSelectedSkill();
    if (!empty || !form) return;
    if (!skill) {
      empty.classList.remove("hidden");
      form.classList.add("hidden");
      updateTranslateBar();
      return;
    }
    empty.classList.add("hidden");
    form.classList.remove("hidden");

    refreshSourceLocaleFieldLabels();

    document.getElementById("detail-title").textContent = skill.name || skill.id;

    document.getElementById("field-id").value = skill.id;
    document.getElementById("field-name").value = skill.name || "";
    document.getElementById("field-description").value = skill.description || "";
    document.getElementById("field-prompt-hint").value = skill.prompt_hint || "";
    document.getElementById("field-model-id").value = skill.model_id || "";

    renderTranslations();
    updateTranslateBar();
  }

  async function loadAll() {
    setStatus("Loading…", null);
    try {
      const [mRes, uRes, sRes, modRes] = await Promise.all([
        nativeFetch("/api/meta", { cache: "no-store" }),
        nativeFetch("/api/ui-languages", { cache: "no-store" }),
        nativeFetch("/api/skills", { cache: "no-store" }),
        nativeFetch("/api/models", { cache: "no-store" }),
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
        } catch (_) {
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
      if (!modRes.ok) {
        const t = await modRes.text();
        throw new Error("models: " + t);
      }
      const modJson = await modRes.json();
      models = modJson.data || [];
      if (!catalog.skills) catalog.skills = [];

      models.forEach(function (m) {
        expandedProviders.add(providerSortKeyFromModelId(m.id));
      });

      ensureDefaultTranslationModels();
      if (selectedId && !catalog.skills.some(function (s) { return s.id === selectedId; })) {
        selectedId = null;
      }
      renderSkillList();
      renderDetail();
      setStatus("Ready", true);
    } catch (e) {
      setStatus(e.message || String(e), false);
    }
  }

  async function saveCatalog() {
    setStatus("Saving…", null);
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

  async function testModel() {
    const skill = getSelectedSkill();
    const out = document.getElementById("test-model-result");
    if (!skill || !skill.model_id) {
      if (out) {
        out.textContent = "Select a model first.";
        out.className = "test-result err";
      }
      return;
    }
    if (out) {
      out.textContent = "Testing…";
      out.className = "test-result";
    }
    try {
      const res = await nativeFetch("/api/skills/test-model", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ modelId: skill.model_id }),
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
        out.className = "test-result ok";
      }
    } catch (e) {
      if (out) {
        out.textContent = e.message || String(e);
        out.className = "test-result err";
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
      models.forEach(function (m) {
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

  const btnChangeModel = document.getElementById("btn-change-model");
  if (btnChangeModel) {
    btnChangeModel.addEventListener("click", function () {
      if (!getSelectedSkill()) return;
      openModelPicker("skill");
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

  document.getElementById("btn-test-model").addEventListener("click", function () {
    testModel();
  });

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
      model_id: "openrouter/openrouter/free",
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
