# Transrewrt 1.6.2 - Release Notes

**Release date:** 2026-07-25

Transrewrt 1.6.2 tightens Easy/Advanced model picking, improves presets AI Suggest, and polishes everyday workspace UX. The model/preset menu can switch Easy ↔ Advanced without opening Settings; Cost Tracking shares the same cost-display controls as General; and Help plus a version link sit in the workspace chrome. Presets-editor AI Suggest can be cancelled mid-run, caches live-timing for two hours, and shortlists from languagebench and Artificial Analysis. Rewrite’s Changes (diff) control works in every rewrite mode, the OpenRouter free model is optional in the selected list, and temperature is omitted for models that reject non-default values.

## Highlights

- **Easy ↔ Advanced in the picker**: The model/preset menu can switch modes (item above Open Settings). “Open Settings → Models” appears only in Advanced mode.
- **Cost Tracking parity**: Settings → Cost Tracking includes the same “Show cost information on the actions” and “Cost fraction digits” controls as Settings → General.
- **Workspace chrome**: Header Help (?) links to the docs; the action bar shows a small app version link (bottom-right) to the GitHub Pages site.
- **Presets AI Suggest**: Cancel mid-flight; cache live-timing measurements for 2 hours; shortlist from languagebench (ChrF) and Artificial Analysis (intelligence/speed) plus catalog pricing; standard/fast presets can live-time top candidates and pick the two fastest.
- **Rewrite Changes**: The “Changes” (diff) control is available for every rewrite mode, not only Check Spelling & Grammar.
- **Selected models**: The OpenRouter free model is optional; the selected list may be empty (removing the last header model opens Settings → Models). Unavailable-model fallback picks the next model instead of forcing free.

## Improvements

- **Temperature handling**: Chat completions omit `temperature` for GPT-5 / o-series and Claude 4.6+ models that reject non-default values, and still retry once without it if a provider rejects temperature at runtime.
- **Easy-mode model filter**: Excludes prompt-guard, safeguard, multi-agent, image/video specialty models, Groq Orpheus (TTS), and Compound agent models from shortlists and live-timing.
- **AI Suggest streaming**: NDJSON events flush promptly (Nagle disabled) so the final `done`/review step appears without needing a click to “wake” the page.
- **Third-party notices**: README acknowledgments and `NOTICES` entries for languagebench (CC-BY-SA-4.0) and Artificial Analysis Data API; `write-third-party-notices` supports `additionalNotices` for non-npm sources.
- **Docker Compose**: `production.yml` / `docker-compose.yml` forward `NVIDIA_API_KEY`, `ALIBABA_API_KEY`, and `APIFUN_API_KEY` into the container.
- **Cross-platform scripts**: `release:github`, `website:publish`, and `docker:clean` use Node scripts; Bash/PowerShell duplicates and `release:github:win` wrappers removed. PowerShell upgrade/clean scripts aligned with Bash.
- **Website tooling**: Website `packageManager` aligned to `pnpm@11.17.0`; translation cache tracked like the root app; `clean-workspace` also clears website subproject artifacts.

## Fixes

- **Third-party notices in Electron**: Settings → About → Third-party notices failed because webpack treated extensionless `NOTICES` as a directory; copy/path lookup now require a real file.
- **Website favicon**: Starlight favicon points at `/logos/transrewrt_logo.svg` (stops 404 / router warnings in `astro dev`).
- **Docs links under Astro base**: Markdown links and images honour Astro `base` (`/transrewrt`); `/docs/…` links keep the current Starlight locale.
- **Release website deploy**: Release workflow dispatches `website-pages.yml` on `main` instead of calling it on the release tag (Pages environment only allows deployments from `main`).
- **`pnpm dev:web` / better-sqlite3**: `node-rebuild.js` accepts v13 host prebuilds when the package skips compile.
- **PowerShell upgrade scripts**: Tools phase runs inside the dotsource block; workspace dirs no longer nest under `@()`; browserslist update falls back when `npx` is missing.
- **`release:github` on Windows**: Annotated tag creation no longer fails with `fatal: too many arguments` when the `-m` message contains spaces (spawn without a shell, matching ai-i18n-tools).

## Detailed changelog

For a complete, line-by-line list of changes (Added / Changed / Fixed), see **[CHANGELOG.md](https://github.com/wsj-br/transrewrt/blob/main/dev/CHANGELOG.md)** — section **[1.6.2] - 2026-07-25**.

## Getting This Release

Published builds for this release are attached to the GitHub **Releases** page for this tag. Typical artifacts include:

- **Windows**: Installer (x64)
- **Linux**: AppImage (x64 and arm64)
- **Docker**: `ghcr.io/wsj-br/transrewrt:1.6.2` (and `latest` when tagged accordingly); multi-arch images as published on GHCR.
- **Website / docs**: `https://wsj-br.github.io/transrewrt/` (also redeployable with `pnpm website:publish`)

Exact filenames and checksums appear on the release page.

## Documentation

- **[README](https://github.com/wsj-br/transrewrt/blob/main/README.md)** — Overview and quick start  
- **[Product docs](https://wsj-br.github.io/transrewrt/docs/)** — Install, guides, settings, and troubleshooting  
- **[DEVELOPMENT.md](https://github.com/wsj-br/transrewrt/blob/main/dev/DEVELOPMENT.md)** — Local setup, `release:github`, `website:publish`, and pre-release checks  
- **[SYSTEM-OVERVIEW.md](https://github.com/wsj-br/transrewrt/blob/main/dev/SYSTEM-OVERVIEW.md)** — Architecture (LLM wrapper and providers)  
- **[i18n.md](https://github.com/wsj-br/transrewrt/blob/main/dev/i18n.md)** — UI and docs translation workflow

## Disclaimer

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

## License

Copyright © 2026 Waldemar Scudeller Jr.

Transrewrt is released under the **Apache License 2.0**. See [LICENSE](https://github.com/wsj-br/transrewrt/blob/main/LICENSE).

---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
