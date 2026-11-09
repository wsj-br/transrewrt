# Transrewrt 1.7.0 - Release Notes

**Release date:** 2026-11-09

Transrewrt 1.7.0 rebuilds Settings → Models around quality scores and a clearer Easy/Advanced split. Easy mode shows one card per preset; Advanced mode is a single sortable table with Index, ChrF, Arena, and price. Model pickers elsewhere show the same quality index.


---

## Changes

For a complete, line-by-line list of changes (Added / Changed / Fixed), see [CHANGELOG.md](https://github.com/wsj-br/transrewrt/blob/main/dev/CHANGELOG.md) — section **[1.7.0] - 2026-11-09**.

<details>
<summary><strong>Highlights</strong></summary>

- **Settings → Models**: An Easy/Advanced toggle is always available and switches the app-wide experience mode. Easy shows one readonly card per Easy-mode preset (Free, Standard, and the others) with that preset’s main and fallback models. Advanced keeps a selectable table.
- **Quality scores**: Index, ChrF, and Arena use the ai-i18n-tools quality weights. The table opens sorted by index, high to low, and models with no index stay at the bottom.
- **Model pickers**: Selectors in the main window and prompt dialogs show each model’s quality index as a chip.
- **One model list**: Available and Selected are now one sortable, searchable table with checkboxes, provider chips, Free Only and Selected only filters, and Select from presets and Deselect All. Rows show input and output prices; unknown prices are a tooltipped dash, and local models stay “no cost - local”.

</details>

<details>
<summary><strong>Improvements</strong></summary>

- **Dated routes**: A dated or batch route such as DeepSeek V4 Flash 0731 (batch) uses the published DeepSeek V4 Flash ChrF and Arena scores. A different size or generation stays unmatched.
- **Website translations**: The website `ai-i18n-tools` config is folded into the root file (UI, docs, and JSON blocks). Website i18n scripts run that config, and the website translation cache is merged into `.translation-cache/cache.db`.
- **Screenshots**: `take-screenshots` treats a header language label such as “English (UK)” as a successful locale switch, probes `pnpm serve` (`:5000`) then `pnpm dev:web` (`:5500`) unless `BASE_URL` is set, and prefixes fatal errors with `Error:`.
- **Hy-MT2**: `scripts/hy-mt2-translate.js` tries Hy-MT2 through a local Ollama server and prints token count, tokens per second, and translation time. `--cpu` forces the CPU; other requests send a previous CPU load back to the GPU.

</details>

<details>
<summary><strong>Fixes</strong></summary>

- **Docker**: The web image includes `ui-languages.json` so model scores can load the UI locale list at startup.
- **Test data**: `generate-test-data` uses `better-sqlite3` when it can, so seeding while `pnpm serve` is running no longer overwrites the WAL database and blanks the dashboard. Leftover WAL files are not treated as a running server, and lock errors list the PIDs that still have the database open.
- **Web server**: `pnpm serve` serves the webpack `dist/` at the repo root. Docker still uses `/app/dist`.
- **Model cards**: Benchmark scores are calculated from the models already listed, instead of a second catalog fetch that could finish without scores.
- **Dependencies**: The bare `glob` pnpm override is dropped so the direct dependency stays on patched `glob` 14 and `@electron/asar` keeps glob 7 (GHSA-3g3m-2fjr-6pw4).

</details>

<details>
<summary><strong>Documentation</strong></summary>

- **[README](https://github.com/wsj-br/transrewrt/blob/main/README.md)** — Overview and quick start
- **[Product docs](https://wsj-br.github.io/transrewrt/docs/)** — Install, guides, settings, and troubleshooting
- **[DEVELOPMENT.md](https://github.com/wsj-br/transrewrt/blob/main/dev/DEVELOPMENT.md)** — Local setup, `release:github`, `website:publish`, and pre-release checks
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
- **Docker**: Pull using `ghcr.io/wsj-br/transrewrt:1.7.0` (or `latest` for the newest release). Both x64 and arm64 are supported.

See [Assets](https://github.com/wsj-br/transrewrt/releases/tag/1.7.0) for exact filenames and checksums.


---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
