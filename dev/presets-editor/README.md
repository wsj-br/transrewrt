<p align="center">
  <img src="images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

# Presets catalog editor (development only)

Small Express app + static HTML UI to edit [`easy-mode-config/presets.json`](../../easy-mode-config/presets.json) in the repo, mirror it to `data/presets.json` for local web dev, list OpenRouter models, test a route, fill missing translations, and inspect per-locale strings.

## Run

From the repository root:

```bash
pnpm run presets-editor
```

Then open the URL printed in the terminal (default [http://127.0.0.1:8765/](http://127.0.0.1:8765/)) — or wait for your default browser to open automatically. The terminal should stay attached until you press Ctrl+C; if it exits right away with “port already in use”, another process (often a previous editor instance) is bound to that port — set `PRESETS_EDITOR_PORT` or stop the other process.

## Environment

| Variable | Purpose |
|----------|---------|
| `OPENROUTER_API_KEY` | Required for OpenRouter **Test**, **Translate missing**, **Translate benchmark**, and **AI Suggestion** (must be in `process.env` — export in the shell or `source .env` before starting; this server does **not** read `.env`). Optional Bearer for the OpenRouter model list; the list is also loaded from the public **GET /v1/models** catalog. |
| Other provider keys | Same env vars as the main app (`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GOOGLE_API_KEY`, etc.). When set, **Choose** loads that provider’s catalog via `GET /api/models?engine=…`. Without a key you can still type a canonical id (e.g. `openai/gpt-4o`) in the preset form. |
| `PRESETS_EDITOR_PORT` | HTTP port (default `8765`). |
| `PRESETS_EDITOR_HOST` | Bind address (default `127.0.0.1`). |
| `PRESETS_EDITOR_DATA_PRESETS_PATH` | Override path for the data-dir mirror (default `<repo>/data/presets.json`). |
| `PRESETS_EDITOR_NO_OPEN` | Set to `1` / `true` / `yes` to skip opening the default browser on startup. |

Provider model catalogs are cached on disk as `presets-editor-provider-catalogs.json` in the repo root (gitignored). If `lastUpdated` is within the last **2 hours**, the editor loads from that file; otherwise it refetches all configured providers and rewrites the cache. Use `GET /api/models?force=1` to refresh immediately.

OpenRouter **models, pricing, and endpoint performance** (latency/throughput P90 per model) are cached separately in `presets-editor-openrouter-cache.json` (gitignored, **6 hour** TTL). The model picker, Performance page, and `GET /api/models?engine=openrouter` use this file. The first load after expiry rebuilds it from OpenRouter (may take a few minutes). Use `GET /api/models?engine=openrouter&force=1` or **Refresh** on the Performance page to rebuild immediately.

On startup the server opens the editor URL in your default browser (same idea as `ai-i18n-tools editor`), after a short delay so the listener is ready.

## Behaviour

- **Environment**: LLM keys come only from `process.env` (export before launch, e.g. `set -a && source .env && set +a && pnpm run presets-editor`); this server does not read `.env` files.
- **Canonical file**: `easy-mode-config/presets.json` — always loaded and saved here first.
- **Mirror**: After each successful save, the same JSON is written to `data/presets.json` (parent directory created if needed). If the mirror fails, the API returns an error even though the repo file was updated; fix permissions or path and save again.
- **Source locale**: Read from `src/config-defaults/config_default.json` (`source_locale`, default `en-GB`) for translation targets and the translations table.
- **Test model**: Per-provider **Test** on each preset row sends one tiny completion (small token cost when a key is set). Does not write files.
- **Benchmark**: Topbar **Benchmark** runs one app-style translate (Portuguese → English) per **selected** preset and provider. Default sample text is defined in `translatePresetsBenchmark.js` and loaded into the UI from `GET /api/presets/translate-benchmark/defaults`. A **Provider** select chooses one Easy-mode cloud engine or **All providers** (skips engines without an API key). Checkbox **Test fallback models too** adds each preset’s `fallback_ids[provider]` run (main model always runs). Preset list includes `free-router` (OpenRouter-only). Uses the **loaded catalog** (unsaved edits included; save to disk optional). Left column: provider + preset selection; right column: sample text. Results show provider, end-to-end time, per-row cost when reported, and total cost for the run. Contrast with **Performance**, which shows time-to-first-token percentiles only.
- **AI Suggestion**: Opens a dedicated flow: (1) choose `suggestion_model` / `suggestion_model_fallback` and which presets to include (checkbox list with a master toggle; all selected by default; `free-router` never listed), with provider catalogs prefetched once per session; (2) run page with a detailed log (catalog load, per-preset OpenRouter web search via `openrouter:web_search` — see `dev/OpenRouter internet access for prompts.md`); (3) review and **Save to catalog**. Web search may incur extra cost (~$0.02 per request max at default settings, plus tokens).
- **model_ids**: Each preset can map cloud providers (OpenRouter, OpenAI, Anthropic, Google, DeepSeek, Groq, Mistral, xAI, Cerebras) to a canonical `engine/model` id for Easy mode. Local LLM is not edited here — end users pick local models in the app. The main app only shows a preset for a provider when that preset has a non-empty `model_ids[provider]` entry (presets without a mapping stay visible in this editor).
- **Model list**: Translation / suggestion pickers and provider **Choose** dialogs show readable ids; stored values are canonical (`openrouter/…`, `openai/gpt-4o`, …), matching the main app.
- **Show translations**: Browser-only view of `translated_name` / `translated_description` using `src/renderer/locales/ui-languages.json`.
- **Electron dev note**: Unpackaged Electron may read `presets.json` next to your `config.json` ([`getPresetsFilePath`](../../src/main/configPath.js)), not necessarily `data/presets.json`. The mirror mainly helps `pnpm run dev:web` / server-style layouts.

This editor is **not** packaged in the Electron app or Docker image.
