# Skills catalog editor (development only)

Small Express app + static HTML UI to edit [`regular-mode-config/skills.json`](../../regular-mode-config/skills.json) in the repo, mirror it to `data/skills.json` for local web dev, list OpenRouter models, test a route, fill missing translations, and inspect per-locale strings.

## Run

From the repository root:

```bash
pnpm run dev:skills-editor
```

Then open the URL printed in the terminal (default [http://127.0.0.1:8765/](http://127.0.0.1:8765/)) — or wait for your default browser to open automatically. The terminal should stay attached until you press Ctrl+C; if it exits right away with “port already in use”, another process (often a previous editor instance) is bound to that port — set `SKILLS_EDITOR_PORT` or stop the other process.

## Environment

| Variable | Purpose |
|----------|---------|
| `OPENROUTER_API_KEY` | Required for **Test model** and **Translate missing** (read from `process.env` only — this server does **not** load `.env`). Optional for the model list (sent as `Authorization`); the list is also loaded from the public **GET /v1/models** catalog. Export in the same terminal before `pnpm run dev:skills-editor`, or configure your IDE/task to pass the variable into Node. |
| `SKILLS_EDITOR_PORT` | HTTP port (default `8765`). |
| `SKILLS_EDITOR_HOST` | Bind address (default `127.0.0.1`). |
| `SKILLS_EDITOR_DATA_SKILLS_PATH` | Override path for the data-dir mirror (default `<repo>/data/skills.json`). |
| `SKILLS_EDITOR_NO_OPEN` | Set to `1` / `true` / `yes` to skip opening the default browser on startup. |

On startup the server opens the editor URL in your default browser (same idea as `ai-i18n-tools editor`), after a short delay so the listener is ready.

## Behaviour

- **Environment**: LLM keys come only from the real process environment (`process.env`); this server does not read `.env` files.
- **Canonical file**: `regular-mode-config/skills.json` — always loaded and saved here first.
- **Mirror**: After each successful save, the same JSON is written to `data/skills.json` (parent directory created if needed). If the mirror fails, the API returns an error even though the repo file was updated; fix permissions or path and save again.
- **Source locale**: Read from `src/config-defaults/config_default.json` (`source_locale`, default `en-GB`) for translation targets and the translations table.
- **Test model**: Sends one tiny non-streaming completion to OpenRouter (small token cost). Does not write files.
- **Model list**: Rows and the “translate missing” dropdown show the **inner** OpenRouter id (e.g. `openrouter/free`, `google/gemini-…`) for readability; choosing a row still stores the **canonical** id (`openrouter/…`) in `model_id`, matching the main app.
- **Show translations**: Browser-only view of `translated_name` / `translated_description` using `src/renderer/locales/ui-languages.json`.
- **Electron dev note**: Unpackaged Electron may read `skills.json` next to your `config.json` ([`getSkillsFilePath`](../../src/main/configPath.js)), not necessarily `data/skills.json`. The mirror mainly helps `pnpm run dev:web` / server-style layouts.

This editor is **not** packaged in the Electron app or Docker image.
