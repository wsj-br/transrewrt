# Transrewrt 1.6.4 - Release Notes

**Release date:** 2026-10-10

Transrewrt 1.6.4 ships unsigned macOS builds, estimates non-OpenRouter costs from models.dev, and chooses Easy-mode models with Arena Score instead of Artificial Analysis. Unavailable Easy-mode models are replaced from the shared benchmark shortlist, and provider lists drop duplicate and non-chat entries.


---

## Changes

For a complete, line-by-line list of changes (Added / Changed / Fixed), see [CHANGELOG.md](https://github.com/wsj-br/transrewrt/blob/main/dev/CHANGELOG.md) — section **[1.6.4] - 2026-10-10**.

<details>
<summary><strong>Highlights</strong></summary>

- **macOS**: Unsigned DMG builds for Apple Silicon (`arm64`) and Intel (`x64`) are attached to GitHub Releases. Packaged apps load default config and presets from the app content root, so macOS finds them under `Contents/config`.
- **Cost estimates**: Non-OpenRouter call cost and model-list pricing use models.dev (a bundled snapshot plus a 24-hour refresh). xAI uses billed `cost_in_usd_ticks` when the API returns it.
- **Easy-mode suggestions**: AI Suggest no longer uses Artificial Analysis. Capability comes from Arena Score (Hugging Face `lmarena-ai/leaderboard-dataset`), speed from OpenRouter endpoint performance, and price fallback from models.dev, alongside languagebench ChrF.
- **Unavailable models**: presets-check replaces unavailable Easy-mode models from the shared benchmark shortlist (languagebench ChrF, Arena Score, price, and speed) without calling an LLM, and falls back to guarded fuzzy matching.
- **Model lists**: Provider catalogs collapse alias, same-name, and duplicate-id rows and skip non-chat SKUs when the API reports that.

</details>

<details>
<summary><strong>Improvements</strong></summary>

- **Arena Score wording**: Presets-editor UI, prompts, and the shortlist field `arena_score` say “Arena Score” instead of “Elo”.
- **Data notices**: README acknowledgments and `NOTICES` state that languagebench and Arena scores are used only on the maintainer’s machine and are not redistributed. Artificial Analysis is dropped; Arena AI (CC-BY-4.0) and models.dev (MIT) are listed.
- **Docker context**: The build context ignores `presets-editor-*.json` caches so languagebench rows cannot enter the image.
- **Dependencies**: App and website dependencies are upgraded, including Electron 44, ESLint 10, TypeScript 7, and Starlight 0.42.
- **Telemetry**: Next.js and Astro CLI telemetry is disabled in build and start scripts, Docker, and website CI.
- **Tooling**: Workspace clean scripts also remove `presets-editor-openrouter-cache.json`. The UI catalog is `src/renderer/locales/strings.json` (`glossary.uiGlossary` is no longer set in `ai-i18n-tools.config.json`).

</details>

<details>
<summary><strong>Fixes</strong></summary>

- **macOS packaging**: `@xmldom/xmldom` is capped below 0.9 so electron-builder can parse `Info.plist` when building the macOS app.
- **pnpm on npm 12**: `upgrade-tools` allows pnpm’s install script so the native binary replaces the Node.js placeholder.
- **presets-check**: Skips suspect provider catalogs, caps how many ids one run can replace, checks top-level translation and suggestion models, and hardens git push, locking, log growth, and failure notifications.
- **i18n scripts**: `generate-test-data` reads OpenRouter model ids from `providers.openrouter.translationModels`. Website `i18n:translate`, `i18n:translate:ui`, and `i18n:locales` resolve through the root `website:i18n:*` wrappers.

</details>

<details>
<summary><strong>Documentation</strong></summary>

- **[README](https://github.com/wsj-br/transrewrt/blob/main/README.md)** — Overview and quick start
- **[Product docs](https://wsj-br.github.io/transrewrt/docs/)** — Install, guides, settings, and troubleshooting
- **[DEVELOPMENT.md](https://github.com/wsj-br/transrewrt/blob/main/dev/DEVELOPMENT.md)** — Local setup, `release:github`, `website:publish`, and pre-release checks
- **[SYSTEM-OVERVIEW.md](https://github.com/wsj-br/transrewrt/blob/main/dev/SYSTEM-OVERVIEW.md)** — Architecture (LLM wrapper and providers)
- **[i18n.md](https://github.com/wsj-br/transrewrt/blob/main/dev/i18n.md)** — App and docs localization workflow

</details>


## License

Copyright © 2026 Waldemar Scudeller Jr.

Transrewrt is released under the **Apache License 2.0**. See [LICENSE](https://github.com/wsj-br/transrewrt/blob/main/LICENSE).

<details>
<summary><strong>Disclaimer</strong></summary>

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

See [NOTICES](https://github.com/wsj-br/transrewrt/blob/main/NOTICES) for more details on third-party dependencies and data sources.

</details>

## Downloads

- **Windows**: Download the `.exe` installer (64-bit) from the Assets section below.
- **Linux**: Download the `.AppImage` for either x64 or arm64 from the Assets section below.
- **macOS**: Download the unsigned `.dmg` for Apple Silicon (`arm64`) or Intel (`x64`) from the Assets section below. On first launch, right-click the app and choose Open, or run `xattr -dr com.apple.quarantine /Applications/Transrewrt.app`.
- **Docker**: Pull using `ghcr.io/wsj-br/transrewrt:1.6.4` (or `latest` for the newest release). Both x64 and arm64 are supported.

See [Assets](https://github.com/wsj-br/transrewrt/releases/tag/1.6.4) for exact filenames and checksums.


---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
