# Transrewrt 1.3.1 - Release Notes

**Release date:** 2026-05-18

Transrewrt 1.3.1 introduces **Easy mode** as the default AI experience: pick a skill (or a local Ollama model) instead of juggling per-task model lists, with a curated skills catalog synced from the project repository. Advanced mode is unchanged for power users. This release adds a development-only skills catalog editor, hardens desktop and web packaging (SQLite native module, configuration backup ZIP, Windows installer finish action, Linux taskbar icon), and documents Easy vs Advanced behaviour in the user-facing guides.

## Highlights

- **Easy mode (default)**: Settings → General **AI experience** offers **Easy** vs **Advanced**. Easy mode shows a header **Skill** selector (Free, Fast, Advanced, Technical, Legal, and variants) backed by `easy-mode-config/skills.json`; per-provider `model_ids` let each cloud engine use the right endpoint; **Provider** in Settings (cloud) or installed **Ollama** models (local) drive what appears in the header. Legacy configs without `mode` are upgraded to `mode: "easy"` on load.
- **Skills catalog lifecycle**: Canonical catalog in-repo; first launch and periodic sync download updates (Electron in Easy mode, web server for shared `data/skills.json`). Settings shows catalog version, `updated_at`, and **Refresh**. Transform prompt modals in Easy mode use the same skill picker as Translate/Rewrite.
- **Dev skills editor** (`pnpm run dev:skills-editor`): Edit the catalog, per-provider model matrix, test models, translate missing locale strings, and run **AI Suggestion** to propose models (with session-cached provider catalogs and stricter JSON parsing). Editor saves bump patch version and `updated_at`.
- **Packaging and platform fixes**: `electron-rebuild` before `electron-builder` avoids `better-sqlite3` ABI mismatches after web dev rebuilds; configuration backup export uses archiver v8 correctly; Windows NSIS “Run Transrewrt” on Finish no longer hangs the wizard; Linux/Wayland taskbar icon uses consistent `transrewrt` app id and desktop entry.
- **Dependency hygiene**: Removed unused `geist` package (transitive `next` advisory); Electron pinned to ^41.6.1 until `better-sqlite3` supports Electron 42; pnpm 11 `allowBuilds` and `.nvmrc` (Node 24) align with `engines`.

## Improvements

- **Web settings**: API Config provider cards use a two-column grid; Easy-mode provider list uses server `configuredEngines` from `GET /api/status`.
- **Documentation**: README and USER-GUIDE cover Easy vs Advanced, skills toolbar, simplified Dashboard tabs, web history scoping, and `HISTORY_DISABLED`.
- **CI**: Release workflow uses `package.json` `packageManager` for pnpm (no pinned action version mismatch).

## Fixes

- Web app initialization error (“Cannot access 'settings' before initialization”).
- Regular/Easy skill `model_id` normalization for OpenRouter slugs; skill-specific errors instead of Advanced “remove from list” behaviour on 404/400.
- OpenRouter catalog entries (e.g. Gemini 3.1 Pro preview id, Qwen 3.5 Flash id).
- Dev skills editor: port-in-use startup, model list without API key, layout/test-model UI stability, AI Suggestion chat-only models and catalog-only suggestions.

## Detailed changelog

For a complete, line-by-line list of changes (Added / Changed / Fixed / Security / Removed), see **[CHANGELOG.md](CHANGELOG.md)** — section **1.3.1 - 2026-05-18**.

## Getting This Release

Published builds for this release are attached to the GitHub **Releases** page for this tag. Typical artifacts include:

- **Windows**: Installer (x64)
- **Linux**: AppImage (x64 and arm64)
- **Docker**: `ghcr.io/wsj-br/transrewrt:1.3.1` (and `latest` when tagged accordingly); multi-arch images as published on GHCR.

Exact filenames and checksums appear on the release page.

## Documentation

- **[README](https://github.com/wsj-br/transrewrt/blob/main/README.md)** — Overview, installation, and quick start  
- **[USER-GUIDE](https://github.com/wsj-br/transrewrt/blob/main/USER-GUIDE.md)** — Full walkthrough of features and settings (Easy vs Advanced, skills, history)  
- **[SYSTEM-OVERVIEW.md](SYSTEM-OVERVIEW.md)** — Architecture and runtime modes  
- **[DEVELOPMENT.md](DEVELOPMENT.md)** — Local setup, skills editor, and tooling  
- **[i18n.md](i18n.md)** — UI translation workflow  

## Disclaimer

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

## License

Copyright © 2026 Waldemar Scudeller Jr.

Transrewrt is released under the **Apache License 2.0**. See [LICENSE](../LICENSE).

---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
