# Transrewrt 1.5.0 - Release Notes

**Release date:** 2026-06-08

Transrewrt 1.5.0 adds first-class support for custom OpenAI-compatible API providers — configure a name, base URL, and key in Settings (desktop) or via environment variables (web/Docker), then pick models from Advanced mode alongside OpenRouter and other direct providers. Model routing labels and the Settings layout are clearer, and a new console script helps verify custom provider connectivity before you rely on it in the app.

## Highlights

- **Custom OpenAI-compatible provider**: Add your own provider (name, URL, API key) in Settings → API Config on Electron, or set `CUSTOM_PROVIDER_*` environment variables on web/Docker; when configured and reachable, its models appear in Advanced mode (e.g. NVIDIA NIM).
- **Provider-prefixed model ids**: Custom provider models use the configured provider name as prefix (e.g. `NVIDIA/nvidia/…`) instead of generic `custom/…`; legacy `custom/…` ids still resolve for streaming.
- **Clearer model routing labels**: Settings → Models route badge shows the actual API provider name (Anthropic, Cerebras, openrouter, NVIDIA, …) instead of generic "direct".
- **Console connectivity check**: `pnpm run check-custom-provider` tests `CUSTOM_PROVIDER_*` settings and lists available custom provider models.

## Improvements

- **Settings → API Config (Electron)**: Ollama and custom OpenAI-compatible provider share a two-column row; custom provider fields are stacked vertically; removed duplicate **Test custom provider** button.
- **Settings → Models provider filter**: Matches custom provider names case-insensitively (e.g. NVIDIA).

## Detailed changelog

For a complete, line-by-line list of changes (Added / Changed / Fixed), see **[CHANGELOG.md](https://github.com/wsj-br/transrewrt/blob/main/dev/CHANGELOG.md)** — section **[1.5.0] - 2026-06-08**.

## Getting This Release

Published builds for this release are attached to the GitHub **Releases** page for this tag. Typical artifacts include:

- **Windows**: Installer (x64)
- **Linux**: AppImage (x64 and arm64)
- **Docker**: `ghcr.io/wsj-br/transrewrt:1.5.0` (and `latest` when tagged accordingly); multi-arch images as published on GHCR.

Exact filenames and checksums appear on the release page.

## Documentation

- **[README](https://github.com/wsj-br/transrewrt/blob/main/README.md)** — Overview, installation, and quick start  
- **[USER-GUIDE](https://github.com/wsj-br/transrewrt/blob/main/USER-GUIDE.md)** — Full walkthrough of features and settings  
- **[DEVELOPMENT.md](https://github.com/wsj-br/transrewrt/blob/main/dev/DEVELOPMENT.md)** — Local setup, `release:github`, Windows `release:github:win`, and pre-release checks

## Disclaimer

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

## License

Copyright © 2026 Waldemar Scudeller Jr.

Transrewrt is released under the **Apache License 2.0**. See [LICENSE](https://github.com/wsj-br/transrewrt/blob/main/LICENSE).

---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
