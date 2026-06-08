# Transrewrt 1.4.0 - Release Notes

**Release date:** 2026-06-08

Transrewrt 1.4.0 deepens translate refinement: right-click or **Rephrase…** on a selection to explore word and phrase alternatives, store up to five translation versions, and apply replacements across full grammatical spans without leaving broken phrasing. The user guide now documents the updated workflow, and screenshot automation is more reliable for localized translate captures.

## Highlights

- **Word alternatives in translate output**: Right-click selected text to fetch alternatives; choosing one adds a new version (or replaces version 5 when the limit is reached).
- **Rephrase… with selection**: With text selected, **Rephrase…** opens the same alternatives list near the selection; without a selection, it still runs a full alternative translation.
- **Five translation versions**: Rephrase and version history now support up to five stored variants (previously three).
- **Smarter replacements**: Applying a word alternative replaces the full grammatical span (e.g. adjacent prepositions), so output no longer has doubled or missing words.
- **Selection stays visible**: Output text selection remains highlighted while alternatives load via **Rephrase…**, matching right-click behaviour.

## Improvements

- **USER-GUIDE.md**: Translate refinement docs updated for control placement, workflow steps, grammar-span replacements, stopping during rephrase, and all-versions context for full rephrase.
- **Presets check**: Root `pnpm presets-check` runs a local dry-run from `dev/presets-check` (no git fetch).
- **Automation hooks**: `data-testid="translate-run-button"` and `data-testid="translate-rephrase-button"` on Translate workspace controls.

## Fixes

- **Screenshot script**: Translate sample capture no longer clicks the layout toggle instead of the Translate action button; runs the sample translation after each target UI locale is applied, fills the React input reliably, and waits for visible output plus the rephrase button before capturing.

## Detailed changelog

For a complete, line-by-line list of changes (Added / Changed / Fixed), see **[CHANGELOG.md](https://github.com/wsj-br/transrewrt/blob/main/dev/CHANGELOG.md)** — section **[1.4.0] - 2026-06-08**.

## Getting This Release

Published builds for this release are attached to the GitHub **Releases** page for this tag. Typical artifacts include:

- **Windows**: Installer (x64)
- **Linux**: AppImage (x64 and arm64)
- **Docker**: `ghcr.io/wsj-br/transrewrt:1.4.0` (and `latest` when tagged accordingly); multi-arch images as published on GHCR.

Exact filenames and checksums appear on the release page.

## Documentation

- **[README](https://github.com/wsj-br/transrewrt/blob/main/README.md)** — Overview, installation, and quick start  
- **[USER-GUIDE](https://github.com/wsj-br/transrewrt/blob/main/USER-GUIDE.md)** — Full walkthrough of features and settings (updated translate refinement workflow)  
- **[DEVELOPMENT.md](https://github.com/wsj-br/transrewrt/blob/main/dev/DEVELOPMENT.md)** — Local setup, `release:github`, Windows `release:github:win`, and pre-release checks

## Disclaimer

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

## License

Copyright © 2026 Waldemar Scudeller Jr.

Transrewrt is released under the **Apache License 2.0**. See [LICENSE](https://github.com/wsj-br/transrewrt/blob/main/LICENSE).

---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
