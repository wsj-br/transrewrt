# Transrewrt 1.3.8 - Release Notes

**Release date:** 2026-06-05

Transrewrt 1.3.8 adds translate **Rephrase…** with up to three stored variants, a full **Benchmark** panel in the presets editor for comparing preset translation runs (with live progress and expandable results), and Windows-friendly GitHub release scripts. Web dev startup is smoother on Windows, and the user guide labels match the current UI.

## Highlights

- **Translate — Rephrase…**: Generate alternative translations from the workspace; store up to three versions, switch between them in the output panel, and send all existing versions to the model when rephrasing again.
- **Presets editor — Benchmark panel**: Two-column layout with preset checkboxes (including `free-router`), editable sample text, per-row cost and total run cost, live SSE progress, and expandable rows for full model output. Optional **Test fallback models too** runs both main and fallback OpenRouter models per preset.
- **Windows releases**: `scripts/release.ps1` and `pnpm run release:github:win` / `release:github:dry:win` — PowerShell port of the GitHub release flow.
- **Web dev on Windows**: `pnpm dev:web` webpack dev server port moved from 5000 to 5500 (avoids Hyper-V reserved ranges and Chrome `ERR_UNSAFE_PORT`); production/Docker default remains 5000.

## Improvements

- **Benchmark UX**: Sample text loads from server defaults (`GET /api/presets/translate-benchmark/defaults`); costs display as `$0.000000`; server logs include per-row duration/cost and wall-clock totals on finish.
- **Web server logs**: Startup output includes app version and build timestamp when available.
- **USER-GUIDE.md**: Labels updated for auto-execute on paste, real-time translation while typing, Transform prompt editor fields, and backup filename timestamps (local time).

## Removed

- Standalone `scripts/benchmark-presets-translate.js` — replaced by the presets editor Benchmark panel.

## Detailed changelog

For a complete, line-by-line list of changes (Added / Changed / Fixed / Removed), see **[CHANGELOG.md](https://github.com/wsj-br/transrewrt/blob/main/dev/CHANGELOG.md)** — section **[1.3.8] - 2026-06-05**.

## Getting This Release

Published builds for this release are attached to the GitHub **Releases** page for this tag. Typical artifacts include:

- **Windows**: Installer (x64)
- **Linux**: AppImage (x64 and arm64)
- **Docker**: `ghcr.io/wsj-br/transrewrt:1.3.8` (and `latest` when tagged accordingly); multi-arch images as published on GHCR.

Exact filenames and checksums appear on the release page.

## Documentation

- **[README](https://github.com/wsj-br/transrewrt/blob/main/README.md)** — Overview, installation, and quick start  
- **[USER-GUIDE](https://github.com/wsj-br/transrewrt/blob/main/USER-GUIDE.md)** — Full walkthrough of features and settings (updated labels for translate and transform options)  
- **[DEVELOPMENT.md](https://github.com/wsj-br/transrewrt/blob/main/dev/DEVELOPMENT.md)** — Local setup, `release:github`, Windows `release:github:win`, and pre-release checks

## Disclaimer

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

## License

Copyright © 2026 Waldemar Scudeller Jr.

Transrewrt is released under the **Apache License 2.0**. See [LICENSE](https://github.com/wsj-br/transrewrt/blob/main/LICENSE).

---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
