# Transrewrt 1.7.1 - Release Notes

**Release date:** 2026-11-13

Transrewrt 1.7.1 ranks Suggest models from ChrF, Arena, and each preset’s cost cap, with no suggestion LLM call. The ranked primary and fallback are shown in a table, and Save catalog writes those ids. presets-check can run as a long-lived Docker image that realigns the same ids when scores or prices move.


---

## Changes

For a complete, line-by-line list of changes (Added / Changed / Fixed), see [CHANGELOG.md](https://github.com/wsj-br/transrewrt/blob/main/dev/CHANGELOG.md) — section **[1.7.1] - 2026-11-13**.

<details>
<summary><strong>Highlights</strong></summary>

- **Suggest models**: Every preset is ranked from ChrF and Arena under that preset’s blended cost cap. There is no suggestion LLM call. presets-check realigns those ids when a scored model launches or a price change moves the rank.
- **Review and save**: The ranked primary and fallback appear in a table. Save catalog writes those ids and returns to the preset list. Per-preset checkboxes and keep-or-apply prompts are gone.
- **Index gap**: The gap is the minimum index-point distance between the primary and the fallback. The default is 1.
- **Fallbacks**: A provider with more than one model always gets a fallback, even above the cost cap or inside the index gap. One available model stays primary only.
- **Model picker**: The preset editor model picker shows each model’s rank and index.

</details>

<details>
<summary><strong>Improvements</strong></summary>

- **presets-check image**: Production install is a long-running Docker image (`ghcr.io/wsj-br/transrewrt-presets-check`) with in-container cron and a standalone `presets/presets-check/docker-compose.yml` for servers without a repository clone. HTTPS git auth uses `GIT_ASKPASS`, so the token is not stored in the remote URL. The image no longer accepts an SSH deploy key. It exits before cloning or scheduling when `GITHUB_TOKEN` or `PRESET_CHECK_NTFY_TOPIC` is empty. Compose leaves `TZ`, `PRESET_CHECK_RUNTIME`, and `PRESET_CHECK_LIB` to the image defaults.
- **Layout**: The presets editor, presets-check, and their shared helpers live under `presets/`, so `dev/` stays documentation.
- **Screenshots**: Images live only in `website/public/images/screenshots`. `take-screenshots` writes there, and the README image uses the GitHub Pages URL.
- **supercronic**: Dependency upgrade scripts bump the supercronic pin in `Dockerfile.presets-check` to the latest GitHub release and refresh the amd64 and arm64 SHA1 sums.
- **i18next**: `i18next` 27 matches the `react-i18next` 18 peer.

</details>

<details>
<summary><strong>Fixes</strong></summary>

- **presets-check startup**: Checking a preset group no longer crashes with `Cannot access 'engine' before initialization`.

</details>

<details>
<summary><strong>Documentation</strong></summary>

- **[README](https://github.com/wsj-br/transrewrt/blob/main/README.md)** — Overview and quick start
- **[Product docs](https://wsj-br.github.io/transrewrt/docs/)** — Install, guides, settings, and troubleshooting
- **[DEVELOPMENT.md](https://github.com/wsj-br/transrewrt/blob/main/dev/DEVELOPMENT.md)** — Local setup, `release:github`, `website:publish`, and pre-release checks

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
- **Docker**: Pull using `ghcr.io/wsj-br/transrewrt:1.7.1` (or `latest` for the newest release). Both x64 and arm64 are supported.

See [Assets](https://github.com/wsj-br/transrewrt/releases/tag/1.7.1) for exact filenames and checksums.


---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
