# Transrewrt 1.6.0 - Release Notes

**Release date:** 2026-07-15

Transrewrt 1.6.0 centres on translation consistency and fuller rewrite refinement: a built-in glossary keeps chosen terms aligned across languages, and the Rewrite workspace gains the same Rephrase / version-history / word-alternatives flow Translate already had. The release also adds NVIDIA, Alibaba Cloud (DashScope), and apikey.fun as first-class LLM providers, moves streaming onto the Vercel AI SDK, and includes production-build, Docker, and dependency security fixes.

## Highlights

- **Glossary**: Store source/target term pairs per language pair and apply them during translation so chosen terms stay consistent. Manage terms in Settings → Glossary (add/edit/delete, CSV/XLSX import and template export); storage is local in Electron and per-user on web/Docker. Translate workspace adds **Add to Glossary** beside the From language selector and a **Glossary** link in the output footer (when the glossary switch is on).
- **Rewrite Rephrase…**: Same refinement flow as Translate — up to 5 versions, right-click / selection word alternatives — using `rewrite_alternative` and `rewrite_word_alternatives` prompts; Rephrase controls sit in the right half of the top toolbar so output height is preserved.
- **More LLM providers**: Built-in NVIDIA (`NVIDIA_API_KEY`), Alibaba Cloud / DashScope (`ALIBABA_API_KEY`), and apikey.fun (`APIFUN_API_KEY`) with Settings → API Config fields, provider tests, and Advanced model-filter entries.
- **LLM stack**: Replaced `multi-llm-ts` with the Vercel AI SDK (`ai` + `@ai-sdk/openai-compatible`); providers use their OpenAI-compatible endpoints. Streaming, usage/cost shape, and engine-prefixed model ids are unchanged for callers.
- **Production / Docker stability**: Fixed blank “Loading…” production renderer (`jsxDEV is not a function` under Babel 8) and Docker `reset-web-password` path resolution (`MODULE_NOT_FOUND`).

## Improvements

- **Presets editor**: Topbar **Presets** button returns to the catalog from Performance, Benchmark, or AI Suggestion; Transrewrt logo beside the title; model picker header shows the current selection while the modal is open.
- **Presets Benchmark**: Choose one Easy-mode engine or all configured providers (not OpenRouter only); failed model calls show status `error` and the API message in Output.
- **Right-click word alternatives**: On translation/rewrite output with no selection, selecting the word under the cursor (or doing nothing if there is no word) instead of opening the browser context menu.
- **Docs**: Glossary covered in README and USER-GUIDE.

## Fixes

- **`pnpm dev:web`**: Restored webpack-dev-server proxy compatibility by pinning `http-proxy-middleware` to the patched v2 backport (`^2.0.10`) instead of API-incompatible v3.
- **Babel 8**: Removed obsolete `allExtensions` from `@babel/preset-typescript`; production builds set `NODE_ENV=production` so React emits production JSX helpers.
- **Translate Rephrase UI**: Call sites updated after the shared `RephraseControls` / `useWordAlternatives` / `WordAlternativesPopover` refactor.
- **`pnpm run presets-check`**: No longer hardcodes `--local --dry-run`, so documented CLI flags work as intended.
- **Dependency / supply chain**: `js-yaml` forced to `^4.2.0`; `upgrade-dependencies.sh` merges duplicate `minimumReleaseAgeExclude` entries; CI workflow bumps for `actions/setup-node` and related actions.

## Detailed changelog

For a complete, line-by-line list of changes (Added / Changed / Fixed / Security), see **[CHANGELOG.md](https://github.com/wsj-br/transrewrt/blob/main/dev/CHANGELOG.md)** — section **[1.6.0] - 2026-07-15**.

## Getting This Release

Published builds for this release are attached to the GitHub **Releases** page for this tag. Typical artifacts include:

- **Windows**: Installer (x64)
- **Linux**: AppImage (x64 and arm64)
- **Docker**: `ghcr.io/wsj-br/transrewrt:1.6.0` (and `latest` when tagged accordingly); multi-arch images as published on GHCR.

Exact filenames and checksums appear on the release page.

## Documentation

- **[README](https://github.com/wsj-br/transrewrt/blob/main/README.md)** — Overview, installation, and quick start  
- **[USER-GUIDE](https://github.com/wsj-br/transrewrt/blob/main/USER-GUIDE.md)** — Full walkthrough of features and settings (including glossary)  
- **[DEVELOPMENT.md](https://github.com/wsj-br/transrewrt/blob/main/dev/DEVELOPMENT.md)** — Local setup, `release:github`, Windows `release:github:win`, and pre-release checks  
- **[SYSTEM-OVERVIEW.md](https://github.com/wsj-br/transrewrt/blob/main/dev/SYSTEM-OVERVIEW.md)** — Architecture (LLM wrapper and providers)

## Disclaimer

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

## License

Copyright © 2026 Waldemar Scudeller Jr.

Transrewrt is released under the **Apache License 2.0**. See [LICENSE](https://github.com/wsj-br/transrewrt/blob/main/LICENSE).

---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
