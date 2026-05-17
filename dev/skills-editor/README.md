# Skills catalog editor (development only)

Small Express app + static HTML UI to edit [`easy-mode-config/skills.json`](../../easy-mode-config/skills.json) in the repo, mirror it to `data/skills.json` for local web dev, list OpenRouter models, test a route, fill missing translations, and inspect per-locale strings.

## Run

From the repository root:

```bash
pnpm run dev:skills-editor
```

Then open the URL printed in the terminal (default [http://127.0.0.1:8765/](http://127.0.0.1:8765/)) — or wait for your default browser to open automatically. The terminal should stay attached until you press Ctrl+C; if it exits right away with “port already in use”, another process (often a previous editor instance) is bound to that port — set `SKILLS_EDITOR_PORT` or stop the other process.

## Environment

| Variable | Purpose |
|----------|---------|
| `OPENROUTER_API_KEY` | Required for OpenRouter **Test**, **Translate missing**, and **AI Suggestion** (read from `process.env` only — this server does **not** load `.env`). Optional for the OpenRouter model list (sent as `Authorization`); the list is also loaded from the public **GET /v1/models** catalog. |
| Other provider keys | Same env vars as the main app (`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GOOGLE_API_KEY`, etc.). When set, **Choose** loads that provider’s catalog via `GET /api/models?engine=…`. Without a key you can still type a canonical id (e.g. `openai/gpt-4o`) in the skill form. |
| `SKILLS_EDITOR_PORT` | HTTP port (default `8765`). |
| `SKILLS_EDITOR_HOST` | Bind address (default `127.0.0.1`). |
| `SKILLS_EDITOR_DATA_SKILLS_PATH` | Override path for the data-dir mirror (default `<repo>/data/skills.json`). |
| `SKILLS_EDITOR_NO_OPEN` | Set to `1` / `true` / `yes` to skip opening the default browser on startup. |

Provider model catalogs are cached on disk as `skills-editor-provider-catalogs.json` in the repo root (gitignored). If `lastUpdated` is within the last **2 hours**, the editor loads from that file; otherwise it refetches all configured providers and rewrites the cache. Use `GET /api/models?force=1` to refresh immediately.

On startup the server opens the editor URL in your default browser (same idea as `ai-i18n-tools editor`), after a short delay so the listener is ready.

## Behaviour

- **Environment**: LLM keys come only from the real process environment (`process.env`); this server does not read `.env` files.
- **Canonical file**: `easy-mode-config/skills.json` — always loaded and saved here first.
- **Mirror**: After each successful save, the same JSON is written to `data/skills.json` (parent directory created if needed). If the mirror fails, the API returns an error even though the repo file was updated; fix permissions or path and save again.
- **Source locale**: Read from `src/config-defaults/config_default.json` (`source_locale`, default `en-GB`) for translation targets and the translations table.
- **Test model**: Per-provider **Test** on each skill row sends one tiny completion (small token cost when a key is set). Does not write files.
- **AI Suggestion**: Opens a dedicated flow: (1) choose `suggestion_model` / `suggestion_model_fallback` and which skills to include (checkboxes, all selected by default; `free-router` never listed), with provider catalogs prefetched once per session; (2) run page with a detailed log (catalog load, per-skill OpenRouter web search via `openrouter:web_search` — see `dev/OpenRouter internet access for prompts.md`); (3) review and **Save to catalog**. Web search may incur extra cost (~$0.02 per request max at default settings, plus tokens).
- **model_ids**: Each skill can map cloud providers (OpenRouter, OpenAI, Anthropic, Google, DeepSeek, Groq, Mistral, xAI, Cerebras) to a canonical `engine/model` id for Easy mode. Ollama is not edited here — end users pick local models in the app. The main app only shows a skill for a provider when that skill has a non-empty `model_ids[provider]` entry (skills without a mapping stay visible in this editor).
- **Model list**: Translation / suggestion pickers and provider **Choose** dialogs show readable ids; stored values are canonical (`openrouter/…`, `openai/gpt-4o`, …), matching the main app.
- **Show translations**: Browser-only view of `translated_name` / `translated_description` using `src/renderer/locales/ui-languages.json`.
- **Electron dev note**: Unpackaged Electron may read `skills.json` next to your `config.json` ([`getSkillsFilePath`](../../src/main/configPath.js)), not necessarily `data/skills.json`. The mirror mainly helps `pnpm run dev:web` / server-style layouts.

This editor is **not** packaged in the Electron app or Docker image.
