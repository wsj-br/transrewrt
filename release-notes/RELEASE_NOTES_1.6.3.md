# Transrewrt 1.6.3 - Release Notes

**Release date:** 2026-08-04

Transrewrt 1.6.3 expands glossary language coverage, refreshes provider icons, and polishes the language selector and docs site localization. Release tooling now waits for a green CI run before tagging.


---

## Changes

For a complete, line-by-line list of changes (Added / Changed / Fixed), see [CHANGELOG.md](https://github.com/wsj-br/transrewrt/blob/main/dev/CHANGELOG.md) — section **[1.6.3] - 2026-08-04**.

<details>
<summary><strong>Highlights</strong></summary>

- **Glossary — All Languages**: Source/target language selectors include All Languages; those terms apply to every language pair (specific pair matches still win on conflicts).
- **Glossary navigation**: The Translate page Glossary link opens Settings on the Glossary tab (Electron and web). “Add to Glossary” is icon-only (label remains as tooltip / aria-label).
- **Provider icons**: New icons for `meta`, `pareto-code`, `perceptron`, `sakana`, `thinkingmachines`, and `apifun`; OpenRouter pseudo-providers (`auto`, `auto-beta`, `bodybuilder`, `free`, `fusion`) reuse `openrouter.ico`. Custom OpenAI-compatible providers use a Lucide PlugZap glyph; unknown providers fall back to a Lucide bot icon instead of the 🔑 emoji.
- **UI language selector**: The header selector shows each language’s native `label` only (trigger and list), sorted by `englishName`, with `englishName` as the hover tooltip.
- **Docs localization**: Starlight UI (TOC, etc.) works for Simplified/Traditional Chinese (`zh-CN` / `zh-TW`); sidebar page links use each locale’s translated frontmatter title; sidebar group headings localize via `docs-sidebar-groups.json`.

</details>

<details>
<summary><strong>Improvements</strong></summary>

- **Provider icon check**: `pnpm run check-provider-icons` refreshes the Easy-mode catalog cache and lists providers missing a `ProviderIcon` mapping; also checks built-in engines (e.g. `apifun`) outside that cache.
- **Release gate**: `release:github` refuses to proceed until the GitHub Actions `CI` workflow for HEAD has finished successfully.
- **Copy / tooling**: “Self-host” wording replaced with Docker / web-app phrasing in README, docs, and marketing; `nvm_resolve_lts_node_version` folded into `scripts/upgrade-tools.sh`; local `.pnpm-store/` ignored in git.

</details>

<details>
<summary><strong>Fixes</strong></summary>

- **Chinese docs UI**: Starlight TOC and related UI map `lang` to `zh-CN` / `zh-TW` so Simplified/Traditional Chinese locales render correctly.
- **Docs sidebar titles**: Page links use translated frontmatter `title` instead of hardcoded English labels.
- **Glossary Settings tab**: Translate → Glossary opens the Glossary tab in Settings on both Electron and web.
- **Unknown-provider icon**: Fallback uses a Lucide bot glyph so it renders with the app font stack (no crossed-box emoji).

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
- **Docker**: Pull using `ghcr.io/wsj-br/transrewrt:1.6.3` (or `latest` for the newest release). Both x64 and arm64 are supported.

See [Assets](https://github.com/wsj-br/transrewrt/releases/tag/1.6.3) for exact filenames and checksums.


---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
