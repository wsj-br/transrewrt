# Transrewrt 1.6.1 - Release Notes

**Release date:** 2026-07-17

Transrewrt 1.6.1 focuses on clearer failure handling, a more flexible local LLM setup, and a task-first documentation site. Translate / rewrite / transform errors open a dismissible alert instead of dumping `Error: …` into the output panel; leaked prompt wrapper tags are stripped from results; and the former Ollama-only local provider is generalized to **Local LLM** with a full OpenAI-compatible API base URL. The marketing site and product docs are reorganized around Get started, Guides, Settings, and Troubleshooting.

## Highlights

- **Error alerts**: Translate / rewrite / transform failures (including empty model responses and incomplete requests) open a dismissible dialog with user-friendly messages instead of writing errors into the output panel.
- **Cleaner model output**: Strip leaked prompt wrapper tags (`<translate>`, `<rewrite>`, `<transform>`) from outputs (and plain-text alternatives) before showing them.
- **Local LLM**: Renamed the Ollama-specific local provider to **Local LLM** (`local` / `local/…`, `local_llm_base_url`, `LOCAL_LLM_URL`, `easy_local_llm_model`). The URL is the full OpenAI-compatible API base (no automatic `/v1` append); Test/reachability use `GET …/models`. Defaults/examples use paths such as `http://localhost:11434/v1` so Ollama, LM Studio, llama.cpp, and similar stacks work without hardcoding `/v1` in the app.
- **Product docs**: Moved the User Guide into task-first website docs (Get started, Guides, Settings reference, Troubleshooting); root `README.md` is a slim GitHub landing page with docs links. Marketing “Full User Guide” CTAs point at `/docs/`.

## Improvements

- **Local LLM icon**: Generic Lucide hard-drive glyph instead of the Ollama favicon.
- **API settings tip**: Lucide `Lightbulb` icon instead of the 💡 emoji (reliable on Linux Electron without a system emoji font).
- **Presets catalog versioning**: Presets editor save bumps `presets.json` version using Transrewrt `package.json` major.minor and an incremented catalog patch.
- **Website locales**: Marketing frontpage is locale-aware (`/{locale}/`); language pickers list languages alphabetically; LanguagePicker uses a two-column dropdown; screenshots load from `images/screenshots/<locale>/`.
- **Third-party notices**: `pnpm 3p-notices` / `notices:write` rewritten around `pnpm licenses list` and `scripts/write-third-party-notices.mjs` (removed `license-checker-rseidelsohn`).

## Fixes

- **Starlight locale docs**: Translated docs lived under nested `{locale}/src/content/docs/docs/` and fell back to English; relocated to `{locale}/docs/` with matching lowercase Starlight locale keys (`pt-br`, `zh-hans`).
- **Website TypeScript**: Dropped deprecated `baseUrl`; explicit `@/*` → `./src/*` path mapping for TypeScript 6+/7.
- **Lint**: ESLint ignores `website/dist/` and applies Node globals to `**/*.mjs` so `pnpm lint` stays green after website builds and the notices script.

## Detailed changelog

For a complete, line-by-line list of changes (Added / Changed / Fixed), see **[CHANGELOG.md](https://github.com/wsj-br/transrewrt/blob/main/dev/CHANGELOG.md)** — section **[1.6.1] - 2026-07-17**.

## Getting This Release

Published builds for this release are attached to the GitHub **Releases** page for this tag. Typical artifacts include:

- **Windows**: Installer (x64)
- **Linux**: AppImage (x64 and arm64)
- **Docker**: `ghcr.io/wsj-br/transrewrt:1.6.1` (and `latest` when tagged accordingly); multi-arch images as published on GHCR.

Exact filenames and checksums appear on the release page.

## Documentation

- **[README](https://github.com/wsj-br/transrewrt/blob/main/README.md)** — Overview and quick start  
- **[Product docs](https://wsj-br.github.io/transrewrt/docs/)** — Install, guides, settings, and troubleshooting  
- **[DEVELOPMENT.md](https://github.com/wsj-br/transrewrt/blob/main/dev/DEVELOPMENT.md)** — Local setup, `release:github`, and pre-release checks  
- **[SYSTEM-OVERVIEW.md](https://github.com/wsj-br/transrewrt/blob/main/dev/SYSTEM-OVERVIEW.md)** — Architecture (LLM wrapper and providers)  
- **[i18n.md](https://github.com/wsj-br/transrewrt/blob/main/dev/i18n.md)** — UI and docs translation workflow

## Disclaimer

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

## License

Copyright © 2026 Waldemar Scudeller Jr.

Transrewrt is released under the **Apache License 2.0**. See [LICENSE](https://github.com/wsj-br/transrewrt/blob/main/LICENSE).

---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
