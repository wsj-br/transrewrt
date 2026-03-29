---
translation_last_updated: '2026-03-29T20:53:38.457Z'
source_file_mtime: '2026-03-29T01:54:18.655Z'
source_file_hash: 27ed6c4cec02f5e6
translation_language: pa
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt ਬੈਨਰ"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="ਵਰਜਨ"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="ਲਾਇਸੈਂਸ: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="ਪਲੇਟਫਾਰਮ">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI-ਸਹਾਇਤਾ ਵਾਲਾ ਟੈਕਸਟ ਟੂਲ: ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਅਨੁਵਾਦ ਕਰੋ, ਵੱਖ-ਵੱਖ ਸ਼ੈਲੀਆਂ ਵਿੱਚ ਮੁੜ-ਲਿਖੋ, ਅਤੇ ਕਸਟਮ ਪ੍ਰੋਂਪਟਾਂ ਨਾਲ ਟ੍ਰਾਂਸਫਾਰਮ ਕਰੋ — ਮਲਟੀਪਲ AI ਪ੍ਰਦਾਤਾਵਾਂ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, ਅਤੇ ਸਥਾਨਕ Ollama) ਦੀ ਵਰਤੋਂ ਕਰਕੇ। ਡੈਸਕਟਾਪ ਐਪ (Electron) ਜਾਂ ਸੈਲਫ-ਹੋਸਟਡ ਵੈੱਬ ਐਪ (Docker) ਵਜੋਂ ਚਲਦਾ ਹੈ।

- **ਅਨੁਵਾਦ ਕਰੋ** — ਦਰਜਨਾਂ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ, ਆਟੋਮੈਟਿਕ ਸਰੋਤ ਪਛਾਣ ਨਾਲ
- **ਮੁੜ-ਲਿਖਤ** — ਵਿਆਕਰਨ ਠੀਕ ਕਰੋ, ਸਪੱਸ਼ਟਤਾ ਸੁਧਾਰੋ, ਔਪਚਾਰਿਕ/ਅਨੌਪਚਾਰਿਕ, ਛੋਟਾ ਕਰੋ, ਵਧਾਓ, ਤਕਨੀਕੀ
- **ਟ੍ਰਾਂਸਫਾਰਮ** — ਕਸਟਮ AI ਪ੍ਰੋਂਪਟ; ਪ੍ਰੋਂਪਟ ਬਣਾਓ ਅਤੇ ਪ੍ਰਬੰਧਿਤ ਕਰੋ, ਹਰੇਕ ਪ੍ਰੋਂਪਟ ਲਈ ਵਿਕਲਪਿਕ ਨਿਸ਼ਾਨਾ ਭਾਸ਼ਾ
- **ਇਤਿਹਾਸ** — ਇਨਪੁੱਟ/ਆਊਟਪੁਟ ਟੈਕਸਟ ਨਾਲ ਪੂਰਾ ਕਾਰਜ ਇਤਿਹਾਸ, ਫਿਲਟਰਿੰਗ, ਅਤੇ ਐਕਸਪੋਰਟ
- **ਮਾਡਲ ਅਤੇ ਲਾਗਤ** — ਕਿਸੇ ਵੀ ਕੰਫਿਗਰ ਕੀਤੇ ਪ੍ਰਦਾਤਾ ਤੋਂ ਮਾਡਲ ਚੁਣੋ; ਲਾਗਤ ਅਤੇ ਵਰਤੋਂ ਦੇ ਡੈਸ਼ਬੋਰਡ ਲਾਗ, ਮਾਡਲ/ਆਪਰੇਸ਼ਨ/ਦਿਨ ਅਨੁਸਾਰ ਸਾਰਾਂਸ਼
- **UI** — ਬਹੁਭਾਸ਼ੀ ਇੰਟਰਫੇਸ (30+ ਭਾਸ਼ਾਵਾਂ, RTL ਸਹਾਇਤਾ), ਫਾਂਟ, ...
- **ਵੈੱਬ ਮੋਡ** — ਐਡਮਿਨ ਰੋਲਾਂ ਨਾਲ ਮਲਟੀ-ਯੂਜ਼ਰ ਸਹਾਇਤਾ
- **ਡੈਸਕਟਾਪ** — Windows ਅਤੇ Linux ਲਈ Electron ਐਪ
- **ਸੈਲਫ-ਹੋਸਟਡ** — amd64 ਅਤੇ arm64 (ਰਸਪਬੇਰੀ ਪਾਈ-ਤਿਆਰ) ਲਈ Docker ਇਮੇਜ

ਇੰਸਟਾਲ ਹੋਣ ਤੋਂ ਬਾਅਦ, ਸਾਰੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਦੀ ਪੂਰੀ ਸਮਝ ਲਈ **[ਯੂਜ਼ਰ ਗਾਈਡ](USER-GUIDE.pa.md)** ਵੇਖੋ।

<small>**ਹੋਰ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਪੜ੍ਹੋ:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UI ਅਤੇ ਦਸਤਾਵੇਜ਼ੀਕਰਨ ਅਨੁਵਾਦਾਂ ਬਾਰੇ ਨੋਟ:** ਮੂਲ ਅੰਗਰੇਜ਼ੀ (ਯੂਕੇ) ਨੂੰ ਛੱਡ ਕੇ ਸਾਰੀਆਂ ਇੰਟਰਫੇਸ ਭਾਸ਼ਾਵਾਂ 
> AI ਮਾਡਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਅਨੁਵਾਦਿਤ ਕੀਤੀਆਂ ਗਈਆਂ ਸਨ; ਸ਼ਬਦਾਵਲੀ ਅਸ਼ੁੱਧ ਹੋ ਸਕਦੀ ਹੈ ਜਾਂ ਗਲਤੀਆਂ ਸ਼ਾਮਲ ਹੋ ਸਕਦੀਆਂ ਹਨ।

</small>

<br/>

<a id="screenshots"></a>
## ਸਕਰੀਨਸ਼ਾਟ

**ਭਾਸ਼ਾ ਚੋਣਕਰਤਾ**

![Language selector](../images/screenshots/pa/language-selector.png)

**ਅਨੁਵਾਦ ਕਰੋ**

![Translate](../images/screenshots/pa/translate.png)

**ਟ੍ਰਾਂਸਫਾਰਮ - ਪ੍ਰੋਂਪਟ ਐਡੀਟਰ**

![Transform - prompt editor](../images/screenshots/pa/transform-prompt-edit.png)

**ਡੈਸ਼ਬੋਰਡ**

![Dashboard summary — usage](../images/screenshots/pa/dashboard-summary.png)

**ਇਤਿਹਾਸ**

![History](../images/screenshots/pa/history.png)

**ਸੈਟਿੰਗਾਂ - ਮਾਡਲ ਚੋਣ**

![Settings - model selection](../images/screenshots/pa/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## ਸੂਚੀ

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [ਤੁਰੰਤ ਸ਼ੁਰੂਆਤ](#quick-start)
- [ਇੰਸਟਾਲੇਸ਼ਨ](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [ਟਾਈਮਜ਼ੋਨ ਕੰਫਿਗਰ ਕਰਨਾ](#configuring-the-timezone)
- [OpenRouter API ਕੁੰਜੀ ਪ੍ਰਾਪਤ ਕਰਨਾ](#getting-an-openrouter-api-key)
- [ਕੰਫਿਗਰੇਸ਼ਨ ਅਤੇ ਵਾਤਾਵਰਣ](#configuration-and-environment)
- [ਵਿਕਾਸ ਅਤੇ ਆਰਕੀਟੈਕਚਰ](#development-and-architecture)
- [ਮੁੱਦੇ ਰਿਪੋਰਟ ਕਰਨਾ](#reporting-issues)
- [ਅਸਵੀਕਰਣ](#disclaimer)
- [ਲਾਇਸੈਂਸ](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## ਤੁਰੰਤ ਸ਼ੁਰੂਆਤ

**ਡਾਕਰ (ਆਪਣੇ ਆਪ ਹੋਸਟ ਕਰਨ ਲਈ ਸਿਫਾਰਸ਼ ਕੀਤਾ ਗਿਆ)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` ਨੂੰ ਆਪਣੀ [OpenRouter API ਕੁੰਜੀ](https://openrouter.ai/keys) ਨਾਲ ਬਦਲੋ (ਜਾਂ ਹੋਰ ਪ੍ਰਦਾਤਾ ਕੁੰਜੀਆਂ ਸੈੱਟ ਕਰੋ; [ਕਾਨਫ਼ੀਗਰੇਸ਼ਨ](#configuration-and-environment) ਵੇਖੋ)। [http://localhost:5000](http://localhost:5000) ਖੋਲ੍ਹੋ ਅਤੇ ਸੇਵਾ ਨੂੰ ਉਜਾਗਰ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਡਿਫਾਲਟ ਐਡਮਿਨ ਪਾਸਵਰਡ ਬਦਲੋ।

<br/>

> ℹ️ **ਨੋਟ**<br/>
> ਡਾਕਰ ਵਿੱਚ, LLM ਪ੍ਰਮਾਣ ਪੱਤਰਾਂ ਨੂੰ ਵਾਤਾਵਰਣ ਚਲਣ ਵਰਗੇ `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … ਨਾਲ ਸੈੱਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ (ਵੈਬ UI ਵਿੱਚ ਨਹੀਂ)। ਡੈਸਕਟਾਪ (ਇਲੈਕਟ੍ਰਾਨ) ਵਿੱਚ ਤੁਸੀਂ **ਸੈਟਿੰਗਾਂ → API** ਵਿੱਚ ਕੁੰਜੀਆਂ ਨੂੰ ਕਾਨਫ਼ੀਗਰ ਕਰਦੇ ਹੋ।

<br/>

**ਵਿੰਡੋਜ਼**

[ਰਿਲੀਜ਼](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ ਨਵੀਨਤਮ `Transrewrt ਸੈਟਅੱਪ x.y.z.exe` ਡਾਊਨਲੋਡ ਕਰੋ, ਇੰਸਟਾਲਰ ਨੂੰ ਚਲਾਓ, ਫਿਰ ਸਟਾਰਟ ਮੇਨੂ ਜਾਂ ਡੈਸਕਟਾਪ ਸ਼ਾਰਟਕੱਟ ਤੋਂ ਲਾਂਚ ਕਰੋ। **ਸੈਟਿੰਗਾਂ → API** ਵਿੱਚ ਆਪਣੀਆਂ API ਕੁੰਜੀਆਂ ਦਿਓ। ਤੁਹਾਨੂੰ ਘੱਟੋ ਘੱਟ ਇੱਕ ਪ੍ਰਦਾਤਾ ਨੂੰ ਕਾਨਫ਼ੀਗਰ ਕਰਨਾ ਹੋਵੇਗਾ, ਮੁਫ਼ਤ ਮਾਡਲਾਂ ਲਈ OpenRouter ਆਮ ਹੈ।

<br/>

**ਲੀਨਕਸ**

ਆਪਣੇ CPU ਲਈ [ਰਿਲੀਜ਼](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ `.AppImage` ਡਾਊਨਲੋਡ ਕਰੋ (`x64` ਆਮ ਪੀਸੀ ਲਈ, `arm64` ਬਹੁਤ ਸਾਰੇ ARM ਉਪਕਰਣਾਂ ਲਈ, ਰਾਸਪਬੇਰੀ ਪਾਈ 4+ ਸਮੇਤ), ਫਿਰ:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

ਆਪਣੀਆਂ API ਕੁੰਜੀਆਂ ਨੂੰ **ਸੈਟਿੰਗਾਂ → API** ਵਿੱਚ ਦਿਓ। ਤੁਹਾਨੂੰ ਘੱਟੋ ਘੱਟ ਇੱਕ ਪ੍ਰਦਾਤਾ ਨੂੰ ਕਾਨਫ਼ੀਗਰ ਕਰਨਾ ਹੋਵੇਗਾ, ਮੁਫ਼ਤ ਮਾਡਲਾਂ ਲਈ OpenRouter ਆਮ ਹੈ।

Debian/Ubuntu ਵਿੱਚ ਤੁਹਾਨੂੰ ਪਹਿਲਾਂ ਵਾਧੂ ਨਿਰਭਰਤਾਵਾਂ ਸਥਾਪਤ ਕਰਨ ਦੀ ਲੋੜ ਹੋ ਸਕਦੀ ਹੈ:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

ਵੇਰਵੇ ਲਈ [ਸਥਾਪਨਾ → ਲੀਨਕਸ](#linux-electron) ਵੇਖੋ।

<br/>

> ℹ️ **ਨੋਟ**<br/>
> ਮੈਕOS ਨੂੰ ਫਿਲਹਾਲ ਸਮਰਥਨ ਨਹੀਂ ਮਿਲਿਆ ਹੈ। Transrewrt ਵਿੰਡੋਜ਼, ਲੀਨਕਸ, ਅਤੇ ਡਾਕਰ ਲਈ ਉਪਲਬਧ ਹੈ।

<br/>

ਇਕ ਵਾਰ ਐਪ ਚੱਲਣ ਤੋਂ ਬਾਅਦ, ਪਾਠ ਨੂੰ ਅਨੁਵਾਦ ਕਰਨ, ਮੁੜ-ਲਿਖਣ ਅਤੇ ਟ੍ਰਾਂਸਫਾਰਮ ਕਰਨ, ਪ੍ਰਾਮਿਟਾਂ ਨੂੰ ਪਰਬੰਧਿਤ ਕਰਨ ਅਤੇ ਮਾਡਲਾਂ ਨੂੰ ਕਾਨਫ਼ੀਗਰ ਕਰਨ ਬਾਰੇ ਜਾਣਨ ਲਈ **[ਯੂਜ਼ਰ ਗਾਈਡ](USER-GUIDE.pa.md)** ਵੇਖੋ।

<br/><br/>

<a id="installation"></a>
## ਸਥਾਪਨਾ

<a id="windows-electron"></a>
### ਵਿੰਡੋਜ਼ (ਇਲੈਕਟ੍ਰਾਨ)

- [ਰਿਲੀਜ਼](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ ਨਵੀਨਤਮ ਇੰਸਟਾਲਰ ਡਾਊਨਲੋਡ ਕਰੋ।
- `.exe` ਨੂੰ ਚਲਾਓ ਅਤੇ ਇੰਸਟਾਲਰ ਦੀ ਪਾਲਣਾ ਕਰੋ।
- ਪਹਿਲੀ ਵਾਰ ਚਲਾਉਣਾ: ਸਟਾਰਟ ਮੇਨੂ ਜਾਂ ਡੈਸਕਟਾਪ ਸ਼ਾਰਟਕੱਟ ਤੋਂ ਐਪ ਨੂੰ ਸ਼ੁਰੂ ਕਰੋ।

<br/>

> ℹ️ **ਨੋਟ**<br/>
> ਵਿੰਡੋਜ਼ ਇਕੱਠੇ ਇਹਨਾਂ ਸੁਰੱਖਿਆ ਚੇਤਾਵਨੀਆਂ ਵਿੱਚੋਂ ਇੱਕ ਦਿਖਾ ਸਕਦਾ ਹੈ (ਬਿਨਾਂ ਦਸਤਖਤ/ਸੁਤੰਤਰ ਐਪਾਂ ਲਈ ਆਮ):
>   - **ਯੂਜ਼ਰ ਅਕਾਊਂਟ ਕੰਟਰੋਲ (UAC)**: "ਕੀ ਤੁਸੀਂ ਇਸ ਅਣਜਾਣ ਪ੍ਰਕਾਸ਼ਕ ਤੋਂ ਐਪ ਨੂੰ ਆਪਣੇ ਡਿਵਾਈਸ ਵਿੱਚ ਤਬਦੀਲੀਆਂ ਕਰਨ ਦੀ ਆਗਿਆ ਦੇਣਾ ਚਾਹੁੰਦੇ ਹੋ?" → **ਹਾਂ** ਤੇ ਕਲਿੱਕ ਕਰੋ।
>   - **ਮਾਈਕ੍ਰੋਸਾਫਟ ਡਿਫੈਂਡਰ ਸਮਾਰਟਸਕਰੀਨ**: "ਵਿੰਡੋਜ਼ ਨੇ ਤੁਹਾਡੇ ਪੀਸੀ ਨੂੰ ਸੁਰੱਖਿਅਤ ਰੱਖਿਆ" → **ਹੋਰ ਜਾਣਕਾਰੀ** ਤੇ ਕਲਿੱਕ ਕਰੋ → **ਫਿਰ ਵੀ ਚਲਾਓ**।
>
> ਇਹ ਇਸ ਲਈ ਵਾਪਰਦਾ ਹੈ ਕਿਉਂਕਿ ਐਪ ਮਾਈਕ੍ਰੋਸਾਫਟ ਜਾਂ ਕਿਸੇ ਵੱਡੇ ਪ੍ਰਕਾਸ਼ਕ ਦੁਆਰਾ ਦਸਤਖਤ ਨਹੀਂ ਕੀਤਾ ਗਿਆ ਹੈ—ਇਹ ਸੁਰੱਖਿਅਤ ਹੈ ਜੇਕਰ ਇਸਨੂੰ ਸਾਡੇ ਅਧਿਕਾਰਤ GitHub ਰਿਲੀਜ਼ ਤੋਂ ਡਾਊਨਲੋਡ ਕੀਤਾ ਗਿਆ ਹੈ
>  (ਹੇਠਾਂ SHA256 ਚੈੱਕਸਮ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ)।

<br/>

<a id="linux-electron"></a>
### ਲੀਨਕਸ (ਇਲੈਕਟ੍ਰਾਨ)

- [ਰੀਲੀਜ਼](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ ਮੈਚ ਕਰਦਾ `.AppImage` (`x64` ਜਾਂ `arm64`) ਡਾਊਨਲੋਡ ਕਰੋ।
- ਚਲਾਓ: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` x86_64/amd64 ਤੇ, ਜਾਂ ARM64 ਤੇ `...-arm64.AppImage` ਫਾਇਲ ਨਾਮ ਦੀ ਵਰਤੋਂ ਕਰੋ।
- ਵਾਧੂ ਨਿਰਭਰਤਾਵਾਂ (ਡੈਬੀਅਨ/ਉਬੰਟੂ): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- ਹੋਰ ਲਈ [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) ਵੇਖੋ।

<br/>

<a id="docker"></a>
### ਡੌਕਰ

- ਪੁੱਲ ਕਰੋ: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- ਘੱਟੋ ਘੱਟ ਇੱਕ ਪ੍ਰਦਾਤਾ ਕੁੰਜੀ ਮਾਹੌਲ ਰਾਹੀਂ ਸੈੱਟ ਕਰੋ (ਉਦਾਹਰਣ ਲਈ OpenRouter ਲਈ `OPENROUTER_API_KEY`)। ਗੁਪਤ ਚੀਜ਼ਾਂ ਨੂੰ ਇਮੇਜ ਵਿੱਚ ਨਾ ਸ਼ਾਮਲ ਕਰਨ ਲਈ `-e` ਜਾਂ `docker compose` / `.env` ਨਾਲ ਚਲਾਓ।
- ਪ੍ਰਦਾਤਾ ਕੁੰਜੀਆਂ **ਵੈੱਬ UI** ਵਿੱਚ ਦਾਖਲ ਨਹੀਂ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ; ਸਰਵਰ ਉਹਨਾਂ ਨੂੰ ਮਾਹੌਲ ਤੋਂ ਪੜ੍ਹਦਾ ਹੈ।

ਉਦਾਹਰਣ - ਸਥਾਈਤਾ ਲਈ ਨਾਮਿਤ ਵਾਲੀਅਮ (env ਰਾਹੀਂ OpenRouter ਕੁੰਜੀ):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

ਜਾਂ ਜੇਕਰ ਤੁਸੀਂ ਡੌਕਰ ਕੰਪੋਜ਼ ਦੀ ਵਰਤੋਂ ਕਰਨਾ ਪਸੰਦ ਕਰਦੇ ਹੋ, ਤਾਂ ਵਰਤੋ:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

ਸਾਰੇ ਮਾਹੌਲ ਚਲਨ, ਜਿਵੇਂ `PORT`, `CONFIG_PATH`, `TZ`, ਅਤੇ LLM ਕੁੰਜੀਆਂ (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) ਲਈ [ਕਾਨਫ਼ੀਗਰੇਸ਼ਨ](#configuration-and-environment) ਵੇਖੋ।

<a id="configuring-the-timezone"></a>
## ਟਾਈਮਜ਼ੋਨ ਨੂੰ ਕਾਨਫ਼ੀਗਰ ਕਰਨਾ

ਐਪਲੀਕੇਸ਼ਨ ਯੂਜ਼ਰ ਇੰਟਰਫੇਸ ਦੀ ਮਿਤੀ ਅਤੇ ਸਮਾਂ **ਬਰਾਊਜ਼ਰ** ਦੇ ਸਥਾਨਕ ਅਤੇ ਟਾਈਮਜ਼ੋਨ ਦੀ ਪਾਲਣਾ ਕਰਦਾ ਹੈ। **ਸਰਵਰ-ਸਾਈਡ** ਵਰਤਾਓ (ਲੌਗਿੰਗ ਅਤੇ ਇਸ ਤਰ੍ਹਾਂ ਦੇ) ਲਈ, ਕੰਟੇਨਰ `TZ` ਮਾਹੌਲ ਚਲਨ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ। ਡਿਫ਼ਾਲਟ `TZ=Europe/London` ਹੈ।

ਕਿਸੇ ਹੋਰ ਟਾਈਮਜ਼ੋਨ ਦੀ ਵਰਤੋਂ ਕਰਨ ਲਈ, ਆਪਣੀ Compose ਫਾਇਲ ਵਿੱਚ `TZ` ਸੈੱਟ ਕਰੋ, ਉਦਾਹਰਣ ਵਜੋਂ:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

ਜਾਂ ਕੰਟੇਨਰ ਨੂੰ ਚਲਾਉਂਦੇ ਸਮੇਂ (ਡੌਕਰ) ਪਾਸ ਕਰੋ:

```bash
--env TZ=America/Sao_Paulo
```

ਕਈ ਲੀਨਕਸ ਹੋਸਟਾਂ ਤੇ ਤੁਸੀਂ ਸਿਸਟਮ ਟਾਈਮਜ਼ੋਨ ਨਾਮ ਨੂੰ ਇਸ ਤਰ੍ਹਾਂ ਕਾਪੀ ਕਰ ਸਕਦੇ ਹੋ:

```bash
echo TZ=\"$(</etc/timezone)\"
```

ਵੈਧ ਟਾਈਮਜ਼ੋਨ ਨਾਮਾਂ ਦੀ ਸੂਚੀ [tz ਡਾਟਾਬੇਸ](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (ਵਿਕੀਪੀਡੀਆ) ਵਿੱਚ ਰੱਖੀ ਜਾਂਦੀ ਹੈ।

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## OpenRouter API ਕੁੰਜੀ ਪ੍ਰਾਪਤ ਕਰਨਾ

Transrewrt ਕਈ AI ਪ੍ਰਦਾਤਾਵਾਂ ਨੂੰ ਸਮਰਥਨ ਦਿੰਦਾ ਹੈ। [OpenRouter](https://openrouter.ai) ਇੱਕ ਪ੍ਰਸਿੱਧ ਚੋਣ ਹੈ ਕਿਉਂਕਿ ਇਹ ਇੱਕੋ ਕੁੰਜੀ ਹੇਠ ਬਹੁਤ ਸਾਰੇ ਮਾਡਲਾਂ ਨੂੰ ਇਕੱਠਾ ਕਰਦਾ ਹੈ ਅਤੇ ਮੁਫ਼ਤ ਮਾਡਲ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।

1. [openrouter.ai](https://openrouter.ai) ਤੇ ਸਾਈਨ ਅੱਪ ਕਰੋ ਜਾਂ ਲੌਗ ਇਨ ਕਰੋ।
2. [ਕੁੰਜੀਆਂ](https://openrouter.ai/keys) ਸਫ਼ਾ ਖੋਲ੍ਹੋ ਅਤੇ ਇੱਕ ਨਵੀਂ ਕੁੰਜੀ ਬਣਾਓ (ਨਾਮ ਦਿਓ, ਅਤੇ ਵਿਕਲਪਿਕ ਤੌਰ 'ਤੇ ਕਰੈਡਿਟ ਸੀਮਾ ਸੈੱਟ ਕਰੋ)। ਕਰੈਡਿਟ ਸ਼ਾਮਲ ਕੀਤੇ ਬਿਨਾਂ ਮੁਫ਼ਤ ਮਾਡਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ।
3. **ਡੈਸਕਟਾਪ (ਇਲੈਕਟ੍ਰਾਨ):** ਕੁੰਜੀਆਂ **ਸੈਟਿੰਗਾਂ → API** ਵਿੱਚ ਪੇਸਟ ਕਰੋ। **ਡੌਕਰ:** `OPENROUTER_API_KEY` ਵਰਗੇ ਮਾਹੌਲ ਚਲਨ ਸੈੱਟ ਕਰੋ (ਤੇਜ਼ ਸ਼ੁਰੂਆਤ ਲਈ [Quick start](#quick-start) ਵੇਖੋ)।

ਅਨੁਵਾਦ, ਮੁੜ-ਲਿਖਤ, ਜਾਂ ਟ੍ਰਾਂਸਫਾਰਮ ਲਈ OpenRouter ਦੇ **ਬਾਡੀ ਬਿਲਡਰ** ਮਾਡਲ ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) ਦੀ ਵਰਤੋਂ ਨਾ ਕਰੋ: ਇਹ ਉਹਨਾਂ ਕਾਰਜਾਂ ਲਈ ਪੂਰਾ ਟੈਕਸਟ ਨਹੀਂ, ਬਲਕਿ JSON ਰਿਕੁਐਸਟ ਪੇਲੋਡ ਵਾਪਸ ਕਰਦਾ ਹੈ। ਯੂਜ਼ਰ ਗਾਈਡ ਵਿੱਚ [ਸੈਟਿੰਗਾਂ → ਮਾਡਲ](USER-GUIDE.pa.md#models) ਵੇਖੋ।

ਤੁਸੀਂ ਹੋਰ ਪ੍ਰਦਾਤਾਵਾਂ (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ਦੀ ਵਰਤੋਂ ਵੀ ਕਰ ਸਕਦੇ ਹੋ ਜਾਂ [Ollama](https://ollama.com) ਨਾਲ ਮਾਡਲ ਸਥਾਨਕ ਤੌਰ 'ਤੇ ਚਲਾ ਸਕਦੇ ਹੋ। ਸਮਰਥਿਤ ਪ੍ਰਦਾਤਾਵਾਂ ਅਤੇ ਮਾਹੌਲ ਚਲਨ ਦੀ ਪੂਰੀ ਸੂਚੀ ਲਈ [ਕਾਨਫ਼ੀਗਰੇਸ਼ਨ](#configuration-and-environment) ਵੇਖੋ।

> ⚠️ **ਚੇਤਾਵਨੀ**<br/>
> ਜੇਕਰ ਤੁਸੀਂ ਕਿਸੇ ਹੋਰ ਡਿਵਾਈਸ, ਕੰਟੇਨਰ, ਜਾਂ ਸੇਵਾ ਤੋਂ Ollama ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੇ ਹੋ, ਤਾਂ Ollama ਨੂੰ ਬਾਹਰੀ ਕਨੈਕਸ਼ਨਾਂ ਨੂੰ ਸਵੀਕਾਰ ਕਰਨ ਲਈ ਕਾਨਫ਼ੀਗਰ ਕਰਨਾ ਯਾਦ ਰੱਖੋ (ਸਿਰਫ਼ localhost ਨਹੀਂ)।

ਸੀਮਾਵਾਂ, BYOK, ਅਤੇ ਹੋਰਾਂ ਲਈ, [OpenRouter ਪ੍ਰਮਾਣਕਰਨ](https://openrouter.ai/docs/api/reference/authentication) ਵੇਖੋ।

<br/><br/>

<a id="configuration-and-environment"></a>
## ਕਾਨਫ਼ੀਗਰੇਸ਼ਨ ਅਤੇ ਵਾਤਾਵਰਣ

**ਕਾਨਫ਼ੀਗ ਫਾਇਲ ਸਥਾਨ**

| ਡਿਪਲੌਇਮੈਂਟ         | ਕਾਨਫ਼ੀਗ ਸਥਾਨ                                   |
| ------------------ | ------------------------------------------------- |
| ਇਲੈਕਟ੍ਰਾਨ (Windows) | `%APPDATA%\transrewrt\`                           |
| ਇਲੈਕਟ੍ਰਾਨ (Linux)   | `~/.config/transrewrt/`                           |
| ਵੈੱਬ / ਡਾਕਰ       | `/app/data/config.json` (ਬਰਕਰਾਰ ਰੱਖਣ ਲਈ ਇੱਕ ਵਾਲੀਊਮ ਵਰਤੋਂ) |

<br/>

**ਵਾਤਾਵਰਣ ਚਲਣਯੋਗ** (ਵੈੱਬ/ਡਾਕਰ ਸਿਰਫ; ਇਲੈਕਟ੍ਰਾਨ ਸਥਾਨਕ ਕਾਨਫ਼ੀਗ ਫਾਇਲ ਵਰਤਦਾ ਹੈ)

| ਚਲਣਯੋਗ         | ਮੂਲ         | ਵੇਰਵਾ |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | ਸਰਵਰ ਸੁਣਨ ਪੋਰਟ |
| `CONFIG_PATH`    | `/app/data/config.json` | ਕਾਨਫ਼ੀਗ ਫਾਇਲ ਲਈ ਮਾਰਗ |
| `TZ`             | `Europe/London`         | ਸਰਵਰ-ਪਾਸੇ ਸਮਾਂ ਲਈ IANA ਸਮਾਂ ਖੰਡ (ਲਾਗਿੰਗ, ਆਦਿ); UI ਅਜੇ ਵੀ ਬਰਾਊਜ਼ਰ ਦੀ ਪਾਲਣਾ ਕਰਦਾ ਹੈ। ਡਾਕਰ → ਸਮਾਂ ਖੰਡ](#docker-timezone) ਵੇਖੋ |
| `OPENROUTER_API_KEY` | *(ਖਾਲੀ)*               | OpenRouter API ਕੁੰਜੀ |
| `OPENAI_API_KEY`     | *(ਖਾਲੀ)*               | OpenAI API ਕੁੰਜੀ |
| `CEREBRAS_API_KEY`   | *(ਖਾਲੀ)*               | Cerebras API ਕੁੰਜੀ |
| `ANTHROPIC_API_KEY`  | *(ਖਾਲੀ)*               | Anthropic API ਕੁੰਜੀ |
| `GOOGLE_API_KEY`     | *(ਖਾਲੀ)*               | Google Gemini API ਕੁੰਜੀ |
| `DEEPSEEK_API_KEY`   | *(ਖਾਲੀ)*               | DeepSeek API ਕੁੰਜੀ |
| `GROQ_API_KEY`       | *(ਖਾਲੀ)*               | Groq API ਕੁੰਜੀ |
| `MISTRAL_API_KEY`    | *(ਖਾਲੀ)*               | Mistral API ਕੁੰਜੀ |
| `OLLAMA_URL`     | *(ਖਾਲੀ)*               | Ollama ਬੇਸ URL (ਜਿਵੇਂ `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(ਖਾਲੀ)*               | xAI API ਕੁੰਜੀ |

ਸਿਰਫ ਉਹਨਾਂ ਪ੍ਰਦਾਤਾਵਾਂ ਨੂੰ ਕਾਨਫ਼ੀਗਰ ਕਰੋ ਜਿਹਨਾਂ ਦੀ ਤੁਸੀਂ ਵਰਤੋਂ ਕਰਦੇ ਹੋ। ਮਾਡਲ ID ਨਾਮ ਸਪੇਸ ਕੀਤੇ ਗਏ ਹਨ (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ਆਦਿ)।

**ਲਾਗਤ ਪ੍ਰਦਰਸ਼ਨ:** OpenRouter ਲਾਗੂ ਹੋਣ ਤੇ ਸਹੀ ਬਿਲਡ ਲਾਗਤ ਵਾਪਸ ਕਰਦਾ ਹੈ। ਹੋਰ ਪ੍ਰਦਾਤਾ OpenRouter ਦੀ ਖੁੱਲ੍ਹੀ ਮਾਡਲ ਕੀਮਤ ਤੋਂ **ਅਨੁਮਾਨਿਤ** ਲਾਗਤ ਵਰਤਦੇ ਹਨ ਜਦੋਂ OpenRouter ਕੁੰਜੀ ਉਪਲਬਧ ਹੁੰਦੀ ਹੈ; ਬਿਨਾਂ ਇਸ ਦੇ, ਗੈਰ-OpenRouter ਲਾਗਤ `0` ਵਜੋਂ ਦਿਖਾਈ ਦੇ ਸਕਦੀ ਹੈ। ਅਨੁਮਾਨ ਬਿੱਲ ਨਹੀਂ ਹੁੰਦੇ।

<br/>

**ਡਾਟਾ ਅਤੇ ਸਥਾਈਕਰਨ:** ਡਾਕਰ ਲਈ, `/app/data` ਤੇ ਇੱਕ ਵਾਲੀਊਮ ਮਾਊਂਟ ਕਰੋ ਤਾਂ ਜੋ `config.json` ਅਤੇ SQLite ਡੇਟਾਬੇਸ ਕੰਟੇਨਰ ਰੀਸਟਾਰਟਾਂ ਦੌਰਾਨ ਬਰਕਰਾਰ ਰਹਿ ਸਕਣ। ਬਿਨਾਂ ਵਾਲੀਊਮ ਦੇ, ਕੰਟੇਨਰ ਰੁਕਣ ਤੇ ਸਭ ਡਾਟਾ ਗੁਆਚ ਜਾਂਦਾ ਹੈ।

**ਡਿਵੈਲਪਰ:** ਪੁਰਾਣੀ ਇੱਕ-ਕੁੰਜੀ ਕਾਨਫ਼ੀਗ ਨੂੰ ਬਦਲਣ ਵਾਲੇ ਪਰਿਵਰਤਨਾਂ ਨੂੰ ਖਿੱਚਣ ਤੋਂ ਬਾਅਦ, ਜੇਕਰ ਤੁਹਾਡੀ ਸਥਾਨਕ ਫਾਇਲ ਹਟਾਏ ਗਏ ਫੀਲਡਾਂ (`api_key`, `api_url`, ਪ੍ਰੋਕਸੀ ਵਿਕਲਪ) ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੀ ਹੈ, ਤਾਂ `data/config.json` ਨੂੰ `src/config-defaults/config_default.json` ਵਿੱਚ ਨਵੇਂ ਮੂਲ ਆਕਾਰ ਨਾਲ ਰੀਸੈੱਟ ਜਾਂ ਮਰਜ਼ ਕਰੋ।

<br/>

**ਵੈੱਬ ਪ੍ਰਮਾਣਕਰਨ:**

- ਮੂਲ ਐਡਮਿਨ: `admin` / `transrewrt26`।
- **ਸੈਟਿੰਗਾਂ → ਉਪਭੋਗਤਾ** ਵਿੱਚ ਉਪਭੋਗਤਾ ਪਰਬੰਧਿਤ ਕਰੋ।
- ਪਾਸਵਰਡ ਰੀਸੈੱਟ ਕਰੋ: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (ਸਰੋਤ ਤੋਂ: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ਚੇਤਾਵਨੀ**<br/>
> ਕਿਸੇ ਵੀ ਨੈੱਟਵਰਕ-ਐਕਸੈਸਯੋਗ ਹੋਸਟ ਤੇ ਮੂਲ ਐਡਮਿਨ ਪਾਸਵਰਡ ਤੁਰੰਤ ਬਦਲੋ।

<br/>

ਕੁੰਜੀ ਸੈਟਿੰਗਾਂ (ਫਾਂਟ, ਮਾਡਲ, ਭਾਸ਼ਾਵਾਂ, ਆਦਿ) ਐਪਲੀਕੇਸ਼ਨ ਸੈਟਿੰਗਾਂ ਵਿੱਚ ਉਪਲਬਧ ਹਨ।

<br/><br/>

<a id="development-and-architecture"></a>
## ਵਿਕਾਸ ਅਤੇ ਆਰਕੀਟੈਕਚਰ

- **ਵਿਕਾਸ:** ਸੈਟਅੱਪ, ਬਿਲਡ, ਟੈਸਟ, ਅਤੇ ਡਿਪਲੌਇ (ਇਲੈਕਟ੍ਰਾਨ, ਵੈੱਬ, ਡਾਕਰ) - **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** ਵੇਖੋ।
- **ਆਰਕੀਟੈਕਚਰ ਅਤੇ ਸਿਸਟਮ ਦਾ ਜਨਰਲ ਵੇਰਵਾ:** ਫੋਲਡਰ ਸਟਰਕਚਰ, ਟੈਕ ਸਟੈਕ, ਡਿਜ਼ਾਈਨ ਫੈਸਲੇ - **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** ਵੇਖੋ।

<br/><br/>

<a id="reporting-issues"></a>
## ਮੁੱਦਿਆਂ ਦੀ ਰਿਪੋਰਟ ਕਰਨਾ

[GitHub](https://github.com/wsj-br/transrewrt/issues) ਤੇ ਇੱਕ ਮੁੱਦਾ ਖੋਲ੍ਹੋ। ਆਪਣਾ ਪਲੇਟਫਾਰਮ (Windows / Linux / Docker) ਅਤੇ ਐਪ ਵਰਜਨ (About ਡਾਇਲਾਗ ਜਾਂ Releases ਪੇਜ 'ਤੇ ਦਿਖਾਇਆ ਗਿਆ) ਸ਼ਾਮਲ ਕਰੋ।

<br/><br/>

<a id="disclaimer"></a>
## ਅਸਵੀਕਰਣ

ਉਤਪਾਦ ਨਾਮ ਅਤੇ ਆਈਕਨ ਆਪਣੇ ਸਬੰਧਤ ਮਾਲਕਾਂ ਦੇ ਹਨ ਅਤੇ ਸਿਰਫ਼ ਪਛਾਣ ਦੇ ਉਦੇਸ਼ਾਂ ਲਈ ਵਰਤੇ ਗਏ ਹਨ। ਇਹ ਸੌਫ਼ਟਵੇਅਰ ਕਿਸੇ ਵੀ ਦੱਸੇ ਗਏ ਬ੍ਰਾਂਡ ਨਾਲ ਸੰਬੰਧਿਤ ਜਾਂ ਪ੍ਰਮਾਣਿਤ ਨਹੀਂ ਹੈ।

<br/><br/>

<a id="license"></a>
## ਲਾਇਸੈਂਸ

ਕਾਪੀਰਾਈਟ © 2026 ਵਾਲਡੇਮਾਰ ਸਕੂਡੇਲਰ ਜੂਨੀਅਰ।

[Apache License 2.0](LICENSE)
