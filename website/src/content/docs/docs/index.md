---
title: Overview
description: What Transrewrt is and how to find install, guides, and settings docs.
---

**Transrewrt** is an open-source AI-powered text tool for:

- **Translate** — between dozens of languages, with automatic source detection and glossaries
- **Rewrite** — fix grammar, improve clarity, change tone or length
- **Transform** — run your own custom AI prompts on any text

It supports many AI providers (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, OpenAI-compatible endpoints, and local OpenAI-compatible servers such as Ollama, LM Studio, or llama.cpp). Run it as a **desktop app** (Windows / Linux) or a **self-hosted web app** (Docker).

Your keys, your models, your host — there is no Transrewrt cloud account.

## How the window is organised

![Translate workspace](/images/screenshots/en-GB/translate.png)

- **Sidebar** — the main navigation: Translate, Rewrite, Transform, Dashboard, History, Settings (and the logged-in user on web).
- **Toolbar** — the page title, the **preset** (Easy) or **model** (Advanced) selector, the **Interface language** (globe icon; does not change Translate From/To), and Help (**?**) linking to these docs. The preset/model menu can also **Switch to Easy/Advanced mode** (above Open Settings).
- **Work area** — the Input and Output panels, with counts, timing, TPS, and optional cost. The action bar shows a small app **version** link (bottom-right) to the GitHub Pages site.

By default the app runs in **Easy** mode: pick a **preset** and a **Provider** in Settings. Switch to **Advanced** under [Settings → General Settings](/docs/settings/#general-settings) for a full model list, or use the switch in the toolbar preset/model menu.

## Get started

1. [Quick start](/docs/quick-start/) — install desktop or run with Docker
2. [API key](/docs/api-key/) — connect a free OpenRouter key or another provider
3. [Configuration](/docs/configuration/) — environment variables, config paths, web auth

## Guides

- [Translate text](/docs/translate/)
- [Rewrite text](/docs/rewrite/)
- [Transform with prompts](/docs/transform/)
- [Use the Dashboard](/docs/dashboard/)
- [Browse History](/docs/history/)

## Reference and help

- [Settings](/docs/settings/)
- [Common issues](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
