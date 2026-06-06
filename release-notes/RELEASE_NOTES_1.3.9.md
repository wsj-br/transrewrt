# Transrewrt 1.3.9 - Release Notes

**Release date:** 2026-06-06

Transrewrt 1.3.9 is a patch release that fixes the Docker web app startup crash introduced in 1.3.8. If you run Transrewrt from the published Docker image, upgrade from `1.3.8` to `1.3.9`.

## Fixes

- **Docker startup**: The server no longer crashes with `Cannot find module '../../package.json'` when reading the app version at startup. Version and build timestamp logging work correctly in the Docker layout (`/app/package.json`).

## Detailed changelog

For the full line-by-line list of changes, see **[CHANGELOG.md](https://github.com/wsj-br/transrewrt/blob/main/dev/CHANGELOG.md)** — section **[1.3.9] - 2026-06-06**.

## Getting This Release

Published builds for this release are attached to the GitHub **Releases** page for this tag. Typical artifacts include:

- **Windows**: Installer (x64)
- **Linux**: AppImage (x64 and arm64)
- **Docker**: `ghcr.io/wsj-br/transrewrt:1.3.9` (and `latest` when tagged accordingly); multi-arch images as published on GHCR.

The **1.3.8** Docker image tag is broken at startup; use **1.3.9** or later for Docker deployments.

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
