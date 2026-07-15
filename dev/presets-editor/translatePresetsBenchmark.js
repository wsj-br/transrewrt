/**
 * Dev presets-editor: translate benchmark per Easy-mode preset (per-provider main + fallback).
 * Same prompts and streamCompletion path as the main app translate flow.
 */

const { mergeKeys, streamCompletion, engineConfigured, ENV_KEY_BY_ENGINE } = require("../../src/shared/llm");
const { streamTextChunkToString } = require("../../src/shared/llm/streamDeltaContent");
const prompts = require("../../src/config-defaults/prompts.json");

const BENCHMARK_DEFAULT_SAMPLE_TEXT_PT =
  `Ficamos no aguardo do envio do relatório financeiro atualizado para darmos andamento ao projeto conforme o cronograma estipulado.

E aí, beleza? Vamos marcar de tomar um café qualquer dia desses, mas tem que ser pra valer, sem dar bolo!

Precisamos rodar o script de migração no ambiente de staging para validar se o deploy do microsserviço não vai gargalar o banco de dados em produção.`;

const BENCHMARK_SOURCE_LANG = "Portuguese";
const BENCHMARK_TARGET_LANG = "English";
const BENCHMARK_TRANSLATE_TEMPERATURE = 0.3;

const CONTENT_PREVIEW_MAX = 120;

function resolvePrompt(value) {
  return Array.isArray(value) ? value.join("\n") : value;
}

/** Same structure as apiService.buildTranslatePrompt */
function buildTranslatePrompt(sourceLang, targetLang, promptHint = null) {
  const config = prompts.translate;
  const shared = prompts.shared.translate;
  const taskLines = [config.firstBullet];
  if (sourceLang && sourceLang !== "Detect Language" && config.withSourceLanguageLine) {
    taskLines.push(config.withSourceLanguageLine);
  }
  const lines = [
    config.role,
    "",
    "Your task:",
    ...taskLines,
    ...shared.task,
    ...shared.footer,
  ];
  let prompt = resolvePrompt(lines)
    .replace(/\{\{sourceLang\}\}/g, sourceLang || "")
    .replace(/\{\{targetLang\}\}/g, targetLang || "");
  if (promptHint && String(promptHint).trim()) {
    prompt = `${prompt}\n\n[Preset instruction: ${String(promptHint).trim()}]`;
  }
  return prompt;
}

function formatDurationMs(ms) {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor((ms % 60000) / 1000);
  const millis = ms % 1000;
  const pad = (n, digits) => String(n).padStart(digits, "0");
  return `${pad(minutes, 2)}:${pad(seconds, 2)}.${pad(millis, 3)}`;
}

function contentPreview(text) {
  const s = String(text || "").trim();
  if (!s) return "";
  if (s.length <= CONTENT_PREVIEW_MAX) return s;
  return s.slice(0, CONTENT_PREVIEW_MAX) + "…";
}

function normalizeSampleText(text) {
  const s = String(text ?? "").trim();
  return s || BENCHMARK_DEFAULT_SAMPLE_TEXT_PT;
}

function usageToCostFields(usage) {
  if (!usage || typeof usage !== "object") {
    return { cost_usd: null, cost_known: false, prompt_tokens: null, completion_tokens: null };
  }
  const cost = Number(usage.cost);
  const costKnown = usage.cost_known !== false;
  return {
    cost_usd: Number.isFinite(cost) ? cost : null,
    cost_known: costKnown,
    prompt_tokens: usage.prompt_tokens ?? null,
    completion_tokens: usage.completion_tokens ?? null,
  };
}

function missingKeyMessage(engine) {
  const ek = ENV_KEY_BY_ENGINE[engine] || String(engine).toUpperCase() + "_API_KEY";
  return (
    ek +
    " is not set. Export it in the shell before starting the presets editor."
  );
}

/**
 * @param {object} preset
 * @param {string} engine
 * @param {boolean} [includeFallback]
 * @returns {Array<{ slot: "main" | "fallback", model_id: string, engine: string }>}
 */
function benchmarkRunsForPreset(preset, engine, includeFallback = true) {
  const eng = String(engine || "").trim();
  if (!eng) return [];
  // free-router only maps OpenRouter (same as editor providersForPreset).
  if (preset?.id === "free-router" && eng !== "openrouter") {
    return [];
  }
  const runs = [];
  const main =
    preset?.model_ids?.[eng] != null ? String(preset.model_ids[eng]).trim() : "";
  const fallback =
    preset?.fallback_ids?.[eng] != null
      ? String(preset.fallback_ids[eng]).trim()
      : "";
  if (main) runs.push({ slot: "main", model_id: main, engine: eng });
  if (includeFallback && fallback && fallback !== main) {
    runs.push({ slot: "fallback", model_id: fallback, engine: eng });
  }
  return runs;
}

/**
 * @param {object[]} presets
 * @param {string[]} engines
 * @param {boolean} [includeFallback]
 * @returns {Array<{ preset: object, preset_id: string, slot: string, model_id: string, engine: string }>}
 */
function buildBenchmarkRunQueue(presets, engines, includeFallback = true) {
  const engineList = Array.isArray(engines) ? engines : [];
  const queue = [];
  for (const preset of presets) {
    if (!preset) continue;
    const presetId = preset.id || "<no-id>";
    for (const engine of engineList) {
      const runs = benchmarkRunsForPreset(preset, engine, includeFallback);
      for (const run of runs) {
        queue.push({
          preset,
          preset_id: presetId,
          slot: run.slot,
          model_id: run.model_id,
          engine: run.engine,
        });
      }
    }
  }
  return queue;
}

/**
 * @param {string[]} engines
 * @param {Record<string, string>} keysMap
 * @param {boolean} skipUnconfigured
 * @returns {string[]}
 */
function resolveActiveBenchmarkEngines(engines, keysMap, skipUnconfigured) {
  const list = Array.isArray(engines) ? engines.map((e) => String(e).trim()).filter(Boolean) : [];
  const active = [];
  for (const engine of list) {
    if (engineConfigured(engine, keysMap)) {
      active.push(engine);
    } else if (!skipUnconfigured) {
      throw new Error(missingKeyMessage(engine));
    }
  }
  if (!active.length) {
    throw new Error(
      "No configured providers to benchmark. Export the relevant API keys in the shell before starting the presets editor.",
    );
  }
  return active;
}

/**
 * @param {string} canonicalModelId
 * @param {string} sampleText
 * @param {string | null | undefined} promptHint
 * @param {Record<string, string>} keysMap
 */
async function translateWithPresetModel(canonicalModelId, sampleText, promptHint, keysMap) {
  const systemPrompt = buildTranslatePrompt(
    BENCHMARK_SOURCE_LANG,
    BENCHMARK_TARGET_LANG,
    promptHint,
  );
  const messages = [
    { role: "system", content: systemPrompt },
    { role: "user", content: `<translate>${sampleText}</translate>` },
  ];

  let content = "";
  const start = Date.now();
  const { usage } = await streamCompletion(
    canonicalModelId,
    messages,
    { keysMap, temperature: BENCHMARK_TRANSLATE_TEMPERATURE },
    {
      onText: (chunk) => {
        content += streamTextChunkToString(chunk);
      },
    },
  );
  const costFields = usageToCostFields(usage);
  return {
    duration_ms: Date.now() - start,
    content: content.trim(),
    ...costFields,
  };
}

function formatBenchmarkError(error) {
  if (!error) return "Unknown error";
  const msg = error.message ? String(error.message).trim() : String(error).trim();
  const status = error.status ?? error.statusCode;
  if (status && msg) return "HTTP " + status + ": " + msg;
  return msg || "Unknown error";
}

function makeBenchmarkRow(presetId, slot, modelId, engine, result, error) {
  const base = {
    preset_id: presetId,
    engine: engine || "",
    slot,
    model_id: modelId,
  };
  if (error) {
    const errText = formatBenchmarkError(error);
    return {
      ...base,
      ok: false,
      duration_ms: null,
      duration_fmt: null,
      content_preview: contentPreview(errText),
      content: errText,
      cost_usd: null,
      cost_known: false,
      prompt_tokens: null,
      completion_tokens: null,
      error: errText,
    };
  }
  return {
    ...base,
    ok: true,
    duration_ms: result.duration_ms,
    duration_fmt: formatDurationMs(result.duration_ms),
    content_preview: contentPreview(result.content),
    content: result.content || "",
    cost_usd: result.cost_usd,
    cost_known: result.cost_known,
    prompt_tokens: result.prompt_tokens,
    completion_tokens: result.completion_tokens,
    error: null,
  };
}

/**
 * @param {{ presets: object[], keysMap: Record<string, string>, sample_text?: string, include_fallback?: boolean, engines?: string[], skip_unconfigured?: boolean, onProgress?: (p: { index: number, total: number, preset_id: string, slot: string, engine: string }) => void, onRow?: (row: object, ctx?: object) => void }} opts
 */
async function runTranslatePresetsBenchmark(opts) {
  const presets = Array.isArray(opts.presets) ? opts.presets : [];
  const keysMap = opts.keysMap || mergeKeys({});
  const sampleText = normalizeSampleText(opts.sample_text);
  const includeFallback = opts.include_fallback !== false;
  const skipUnconfigured = opts.skip_unconfigured === true;
  const engines = Array.isArray(opts.engines) && opts.engines.length
    ? opts.engines
    : ["openrouter"];

  const activeEngines = resolveActiveBenchmarkEngines(
    engines,
    keysMap,
    skipUnconfigured,
  );

  const queue = buildBenchmarkRunQueue(presets, activeEngines, includeFallback);
  if (!queue.length) {
    throw new Error(
      "No models to benchmark for the selected presets and provider(s). Check model_ids (and fallback_ids if enabled).",
    );
  }

  const total = queue.length;
  const rows = [];
  let totalCostUsd = 0;
  let totalCostPartial = false;

  for (let index = 0; index < queue.length; index += 1) {
    const item = queue[index];
    const {
      preset,
      preset_id: presetId,
      slot,
      model_id: modelId,
      engine,
    } = item;
    if (opts.onProgress) {
      opts.onProgress({
        index: index + 1,
        total,
        preset_id: presetId,
        slot,
        engine,
      });
    }
    try {
      const result = await translateWithPresetModel(
        modelId,
        sampleText,
        preset.prompt_hint,
        keysMap,
      );
      if (result.cost_usd != null && result.cost_known) {
        totalCostUsd += result.cost_usd;
      } else {
        totalCostPartial = true;
      }
      const row = makeBenchmarkRow(presetId, slot, modelId, engine, result, null);
      rows.push(row);
      if (opts.onRow) {
        opts.onRow(row, {
          index: index + 1,
          total,
          preset_id: presetId,
          slot,
          engine,
        });
      }
    } catch (e) {
      totalCostPartial = true;
      const row = makeBenchmarkRow(presetId, slot, modelId, engine, null, e);
      rows.push(row);
      if (opts.onRow) {
        opts.onRow(row, {
          index: index + 1,
          total,
          preset_id: presetId,
          slot,
          engine,
        });
      }
    }
  }

  const okRows = rows.filter((r) => r.ok);
  const totalCostKnown = okRows.length > 0 && !totalCostPartial;

  return {
    sample_text: sampleText,
    source_lang: BENCHMARK_SOURCE_LANG,
    target_lang: BENCHMARK_TARGET_LANG,
    engines: activeEngines,
    rows,
    total_cost_usd: totalCostUsd,
    total_cost_known: totalCostKnown,
    total_cost_partial: totalCostPartial,
  };
}

module.exports = {
  BENCHMARK_DEFAULT_SAMPLE_TEXT_PT,
  BENCHMARK_SOURCE_LANG,
  BENCHMARK_TARGET_LANG,
  buildTranslatePrompt,
  formatDurationMs,
  normalizeSampleText,
  benchmarkRunsForPreset,
  buildBenchmarkRunQueue,
  resolveActiveBenchmarkEngines,
  runTranslatePresetsBenchmark,
};
