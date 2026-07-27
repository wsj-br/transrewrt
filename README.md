<p align="center">
  <img src="images/transrewrt_banner.png" alt="Transrewrt Banner" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.2-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

AI-powered text tool for **translate**, **rewrite**, and **transform** with custom prompts. Use your own AI providers (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, OpenAI-compatible endpoints, and local servers such as Ollama, LM Studio, or llama.cpp). Run as a desktop app (Windows / Linux) or a self-hosted web app (Docker). No Transrewrt cloud account.

## Features

| Capability | Description |
| --- | --- |
| **Translate** | Dozens of languages, auto-detect, glossaries, refine with Rephrase |
| **Rewrite** | Clarity, tone, length, spelling & grammar — same language |
| **Transform** | Custom AI prompts you create, edit, and reuse |
| **Deploy** | Electron desktop or Docker web (amd64 & arm64) |
| **Keys** | Your providers, your host — Easy presets or Advanced model list |

![Translate](images/screenshots/en-GB/translate.png)

<small>**Read in other languages:** </small>
<small id="lang-list">[English (UK)](./README.md) · [العربية](./translated-docs/README.ar.md) · [简体中文](./translated-docs/README.zh-Hans.md) · [繁體中文](./translated-docs/README.zh-Hant.md) · [Čeština](./translated-docs/README.cs.md) · [Nederlands](./translated-docs/README.nl.md) · [Français](./translated-docs/README.fr.md) · [Deutsch](./translated-docs/README.de.md) · [Ελληνικά](./translated-docs/README.el.md) · [हिन्दी](./translated-docs/README.hi.md) · [Magyar](./translated-docs/README.hu.md) · [Italiano](./translated-docs/README.it.md) · [日本語](./translated-docs/README.ja.md) · [한국어](./translated-docs/README.ko.md) · [فارسی](./translated-docs/README.fa.md) · [Polski](./translated-docs/README.pl.md) · [Português (Brasil)](./translated-docs/README.pt-BR.md) · [Română](./translated-docs/README.ro.md) · [Русский](./translated-docs/README.ru.md) · [Slovenčina](./translated-docs/README.sk.md) · [Español](./translated-docs/README.es.md) · [Svenska](./translated-docs/README.sv.md) · [ไทย](./translated-docs/README.th.md) · [Türkçe](./translated-docs/README.tr.md) · [Українська](./translated-docs/README.uk.md) · [Tiếng Việt](./translated-docs/README.vi.md)</small>

## Quick start

**Docker**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Replace `PROVIDER_API_KEY` with your provider variable (for example `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `GROQ_API_KEY`). Open [http://localhost:5000](http://localhost:5000) and change the default admin password. Keys are set via environment variables (not the web UI).

**Windows** — Download `Transrewrt Setup x.y.z.exe` from [Releases](https://github.com/wsj-br/transrewrt/releases), install, then add keys in **Settings → API**.

**Linux** — Download the `.AppImage` from [Releases](https://github.com/wsj-br/transrewrt/releases), then:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Platform details (Compose, SmartScreen, apt libs, GPU flags, timezone): [Quick start docs](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## Documentation

Full product docs (install, API keys, guides, settings, troubleshooting):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [API key](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [Configuration](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [Translate](https://wsj-br.github.io/transrewrt/docs/translate/) · [Rewrite](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [Transform](https://wsj-br.github.io/transrewrt/docs/transform/)
- [Common issues](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## Development

- Setup, build, test, deploy: [dev/DEVELOPMENT.md](dev/DEVELOPMENT.md)
- Architecture overview: [dev/SYSTEM-OVERVIEW.md](dev/SYSTEM-OVERVIEW.md)

## Support

Open an issue on [GitHub](https://github.com/wsj-br/transrewrt/issues). Include your platform (Windows / Linux / Docker) and app version (About dialog or Releases page).

## Acknowledgments

Easy-mode preset suggestions in the presets editor use public evaluation data from:

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [Artificial Analysis](https://artificialanalysis.ai/) (attribution required for API data)

Third-party dependency licenses and these data-source notices are listed in [NOTICES](NOTICES).

## License

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)

Product names and icons belong to their respective owners and are used for identification purposes only. This software is not affiliated with or endorsed by those brands.

<small>

> **Note on UI and documentation translations:** All interface and documentation languages except English (UK) were translated with AI using [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/); the wording may be imprecise or contain errors.

</small>
