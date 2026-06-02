# Transrewrt 1.3.7 - Release Notes

**Release date:** 2026-06-02

Transrewrt 1.3.7 is a small quality release: OpenRouter translate, rewrite, and transform calls again rely on each model’s provider defaults instead of forcing token limits or reasoning effort, and the codebase typechecks cleanly under `pnpm lint`.

## Highlights

- **OpenRouter defaults restored**: Translate, rewrite, and transform no longer send `max_tokens` or `reasoning.effort` on OpenRouter requests; each model uses its provider defaults (restores pre-1.3.3 behaviour).
- **Typecheck fixes**: `pnpm lint` passes — ambient module/globals, class field types, component prop defaults, and related TypeScript fixes.

## Detailed changelog

For a complete, line-by-line list of changes (Added / Changed / Fixed), see **[CHANGELOG.md](https://github.com/wsj-br/transrewrt/blob/main/dev/CHANGELOG.md)** — section **[1.3.7] - 2026-06-02**.

## Getting This Release

Published builds for this release are attached to the GitHub **Releases** page for this tag. Typical artifacts include:

- **Windows**: Installer (x64)
- **Linux**: AppImage (x64 and arm64)
- **Docker**: `ghcr.io/wsj-br/transrewrt:1.3.7` (and `latest` when tagged accordingly); multi-arch images as published on GHCR.

Exact filenames and checksums appear on the release page.

## Documentation

- **[README](https://github.com/wsj-br/transrewrt/blob/main/README.md)** — Overview, installation, and quick start  
- **[USER-GUIDE](https://github.com/wsj-br/transrewrt/blob/main/USER-GUIDE.md)** — Full walkthrough of features and settings  
- **[DEVELOPMENT.md](https://github.com/wsj-br/transrewrt/blob/main/dev/DEVELOPMENT.md)** — Local setup, `release:github`, and pre-release checks

## Disclaimer

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.

## License

Copyright © 2026 Waldemar Scudeller Jr.

Transrewrt is released under the **Apache License 2.0**. See [LICENSE](https://github.com/wsj-br/transrewrt/blob/main/LICENSE).

---

*Thank you for using Transrewrt. Feedback and issue reports on the project repository are welcome.*
