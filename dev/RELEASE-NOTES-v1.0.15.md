<!-- DOCTOC SKIP -->

# Transrewrt 1.0.15 - initial official release

**Release date:** 2026-03-27

We are pleased to announce the **first official release** of **Transrewrt**, an AI-powered desktop and self-hosted application for working with text across languages and styles.

## What is Transrewrt?

Transrewrt helps you **translate** between languages (with optional source detection), **rewrite** text in different tones and styles, and **transform** text using your own prompts. It connects to multiple AI providers (including OpenRouter and many direct APIs, plus local **Ollama**), so you can choose models and balance quality, speed, and cost.

## Highlights

- **Translate, Rewrite, and Transform** - Three focused workflows with model selection and execution history.
- **Multiple providers** - Configure the backends that fit your setup; use cloud APIs, free tiers where available, or run models locally.
- **History and cost awareness** - Review past runs, filter and export history, and track usage where your providers expose pricing.
- **Multilingual UI** - Many interface languages with RTL support where applicable.
- **Two ways to run** - **Desktop** (Electron on Windows and Linux) for a native app with local configuration, or **self-hosted web** via Docker for multi-user access on your network or server.

## Getting Transrewrt

Published builds for this release are attached to the GitHub **Releases** page for this tag. Typical artifacts include:

- **Windows** - Installer (x64)
- **Linux** - AppImage (x64 and arm64; arm64 suits devices such as Raspberry Pi-class hardware)
- **Docker** - Multi-architecture images for amd64 and arm64 (see the repository README and Compose examples for deployment)

Exact filenames and checksums appear on the release page.

## Documentation

- **[README](README.md)** - Overview, installation, and quick start  
- **[USER-GUIDE](USER-GUIDE.md)** - Full walkthrough of features and settings  

## Disclaimer

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by any of the mentioned brands.


## License

Transrewrt is released under the **Apache License 2.0**. See [LICENSE](LICENSE).

---

*Thank you for trying Transrewrt. Feedback and issue reports on the project repository are welcome.*
