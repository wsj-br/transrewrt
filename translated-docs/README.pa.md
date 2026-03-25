---
translated_at: "2026-03-25T22:31:36.247Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt ਲੋਗੋ" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="ਸੰਸਕਰਨ"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="ਲਾਇਸੈਂਸ: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="ਪਲੇਟਫਾਰਮ">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

ਏਆਈ-ਸੰਚਾਲਿਤ ਪਾਠ ਟੂਲ: ਕਈ ਏਆਈ ਪ੍ਰਦਾਤਾਵਾਂ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, ਅਤੇ ਸਥਾਨਕ Ollama) ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਭਾਸ਼ਾਵਾਂ ਵਿਚਕਾਰ ਅਨੁਵਾਦ ਕਰੋ, ਵੱਖ-ਵੱਖ ਸ਼ੈਲੀਆਂ ਵਿੱਚ ਮੁੜ ਲਿਖੋ, ਅਤੇ ਕਸਟਮ ਪ੍ਰਾਮਟਾਂ ਨਾਲ ਬਦਲੋ — ਡੈਸਕਟਾਪ ਐਪ (ਇਲੈਕਟ੍ਰਾਨ) ਜਾਂ ਆਪਣੇ ਸਰਵਰ 'ਤੇ ਵੈੱਬ ਐਪ (Docker) ਵਜੋਂ ਚਲਾਓ.

- **ਅਨੁਵਾਦ** — ਦਰਜਨ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ, ਆਟੋਮੈਟਿਕ ਸਰੋਤ ਪਛਾਣ ਨਾਲ
- **ਮੁੜ ਲਿਖੋ** — ਵਿਆਕਰਣ ਠੀਕ ਕਰੋ, ਸਪਸ਼ਟਤਾ ਸੁਧਾਰੋ, ਔਪਚਾਰਿਕ/ਅਣਔਪਚਾਰਿਕ, ਛੋਟਾ ਕਰੋ, ਵਧਾਓ, ਤਕਨੀਕੀ
- **ਬਦਲੋ** — ਕਸਟਮ ਏਆਈ ਪ੍ਰਾਮਟ; ਪ੍ਰਾਮਟ ਬਣਾਓ ਅਤੇ ਪ੍ਰਬੰਧਿਤ ਕਰੋ, ਹਰੇਕ ਪ੍ਰਾਮਟ ਲਈ ਇੰਗਤ ਭਾਸ਼ਾ ਵਿਕਲਪਕ
- **ਇਤਿਹਾਸ** — ਪੂਰਾ ਕਾਰਜ ਇਤਿਹਾਸ ਇਨਪੁਟ/ਆਉਟਪੁਟ ਪਾਠ, ਫਿਲਟਰਿੰਗ, ਅਤੇ ਨਿਰਯਾਤ ਨਾਲ
- **ਮਾਡਲ ਅਤੇ ਲਾਗਤ** — ਕਿਸੇ ਵੀ ਕੰਫੀਗਰ ਪ੍ਰਦਾਤਾ ਤੋਂ ਮਾਡਲ ਚੁਣੋ; ਲਾਗਤ ਅਤੇ ਵਰਤੋਂ ਡੈਸ਼ਬੋਰਡ ਲਾਗ, ਮਾਡਲ/ਆਪਰੇਸ਼ਨ/ਦਿਨ ਅਨੁਸਾਰ ਸਾਰਾਂਸ਼ ਨਾਲ
- **ਯੂਆਈ** — ਬਹੁਭਾਸ਼ੀ ਇੰਟਰਫੇਸ (30+ ਭਾਸ਼ਾਵਾਂ, RTL ਸਹਾਇਤਾ), ਫੋਂਟ, ...
- **ਵੈੱਬ ਮੋਡ** — ਐਡਮਿਨ ਰੋਲਾਂ ਨਾਲ ਬਹੁ-ਯੂਜ਼ਰ ਸਹਾਇਤਾ
- **ਡੈਸਕਟਾਪ** — ਵਿੰਡੋਜ਼ ਅਤੇ ਲੀਨਕਸ ਲਈ ਇਲੈਕਟ੍ਰਾਨ ਐਪ
- **ਆਪਣੇ ਸਰਵਰ 'ਤੇ** — amd64 ਅਤੇ arm64 (ਰਾਸਪਬੇਰੀ ਪਾਈ-ਤਿਆਰ) ਲਈ ਡਾਕਰ ਇਮੇਜ

ਸਥਾਪਤ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਸਾਰੀਆਂ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਬਾਰੇ ਪੂਰੀ ਜਾਣਕਾਰੀ ਲਈ **[ਯੂਜ਼ਰ ਗਾਈਡ](USER-GUIDE.pa.md)** ਵੇਖੋ।

<small>**ਹੋਰ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਪੜ੍ਹੋ:** [English (UK)](README.pa.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **ਯੂਆਈ ਅਤੇ ਦਸਤਾਵੇਜ਼ੀਕਰਨ ਅਨੁਵਾਦ ਬਾਰੇ ਨੋਟ:** ਮੂਲ ਅੰਗਰੇਜ਼ੀ (UK) ਨੂੰ ਛੱਡ ਕੇ ਸਾਰੀਆਂ ਇੰਟਰਫੇਸ ਭਾਸ਼ਾਵਾਂ 
> ਏਆਈ ਮਾਡਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਅਨੁਵਾਦਿਤ ਕੀਤੀਆਂ ਗਈਆਂ ਸਨ; ਸ਼ਬਦਾਵਲੀ ਅਸਪਸ਼ਟ ਹੋ ਸਕਦੀ ਹੈ ਜਾਂ ਗਲਤੀਆਂ ਸ਼ਾਮਲ ਹੋ ਸਕਦੀਆਂ ਹਨ।

</small>

<br/>

<a id="screenshots"></a>
## ਸਕਰੀਨਸ਼ਾਟ

**ਭਾਸ਼ਾ ਚੋਣਕਰਤਾ**

![ਭਾਸ਼ਾ ਚੋਣਕਰਤਾ](../images/screenshots/pa/language-selector.png)

**ਅਨੁਵਾਦ ਕਰੋ**

![ਅਨੁਵਾਦ ਕਰੋ](../images/screenshots/pa/translate.png)

**ਪਰਿਵਰਤਨ - ਪ੍ਰਾਮਟ ਸੰਪਾਦਕ**

![ਪਰਿਵਰਤਨ - ਪ੍ਰਾਮਟ ਸੰਪਾਦਕ](../images/screenshots/pa/transform-prompt-edit.png)

**ਡੈਸ਼ਬੋਰਡ**

![ਲਾਗਤ ਡੈਸ਼ਬੋਰਡ](../images/screenshots/pa/dashboard-summary.png)

**ਇਤਿਹਾਸ**

![ਇਤਿਹਾਸ](../images/screenshots/pa/history.png)

**ਸੈਟਿੰਗਾਂ - ਮਾਡਲ ਚੋਣ**

![ਸੈਟਿੰਗਾਂ - ਮਾਡਲ ਚੋਣ](../images/screenshots/pa/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## ਵਿਸ਼ਾ ਸੂਚੀ

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [ਤੇਜ਼ ਸ਼ੁਰੂਆਤ](#quick-start)
- [ਸਥਾਪਤ ਕਰਨਾ](#installation)
  - [ਵਿੰਡੋਜ਼ (Electron)](#windows-electron)
  - [ਲੀਨਕਸ (Electron)](#linux-electron)
  - [ਡਾਕਰ](#docker)
- [OpenRouter API ਕੁੰਜੀ ਪ੍ਰਾਪਤ ਕਰਨਾ](#getting-an-openrouter-api-key)
- [ਕਾਨਫ਼ੀਗਰੇਸ਼ਨ ਅਤੇ ਵਾਤਾਵਰਣ](#configuration-and-environment)
- [ਵਿਕਾਸ ਅਤੇ ਆਰਕੀਟੈਕਚਰ](#development-and-architecture)
- [ਰਿਲੀਜ਼ ਅਤੇ ਟੈਗ](#releases-and-tags)
- [ਯੋਗਦਾਨ](#contributing)
- [ਅਸੁਰੱਖਿਆ ਭਰਾਈ](#disclaimer)
- [ਲਾਇਸੈਂਸ](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## ਤੇਜ਼ ਸ਼ੁਰੂਆਤ

**ਡਾਕਰ (ਆਪਣੇ ਸਰਵਰ 'ਤੇ ਚਲਾਉਣ ਲਈ ਸਿਫਾਰਸ਼ ਕੀਤਾ ਗਿਆ)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` ਨੂੰ ਆਪਣੀ [OpenRouter API ਕੁੰਜੀ](https://openrouter.ai/keys) ਨਾਲ ਬਦਲੋ (ਜਾਂ ਹੋਰ ਪ੍ਰਦਾਤਾ ਕੁੰਜੀਆਂ ਸੈੱਟ ਕਰੋ; ਵੇਖੋ [ਕਾਨਫ਼ੀਗਰੇਸ਼ਨ](#configuration-and-environment))। [http://localhost:5000](http://localhost:5000) 'ਤੇ ਜਾਓ ਅਤੇ ਸੇਵਾ ਨੂੰ ਬਾਹਰੀ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਡਿਫ਼ਾਲਟ ਐਡਮਿਨ ਪਾਸਵਰਡ ਬਦਲੋ।

<br/>

> ℹ️ **ਨੋਟ**<br/>
> ਡਾਕਰ ਵਿੱਚ, LLM ਪ੍ਰਮਾਣ ਪੱਤਰਾਂ ਨੂੰ `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … ਵਰਗੇ ਵਾਤਾਵਰਣ ਵੇਰੀਏਬਲਾਂ ਨਾਲ ਸੈੱਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ (ਵੈੱਬ UI ਵਿੱਚ ਨਹੀਂ)। ਡੈਸਕਟਾਪ (Electron) 'ਤੇ ਤੁਸੀਂ **Settings → API** ਵਿੱਚ ਕੁੰਜੀਆਂ ਨੂੰ ਕਾਨਫ਼ੀਗਰ ਕਰਦੇ ਹੋ।

<br/>

**ਵਿੰਡੋਜ਼**

[ਰਿਲੀਜ਼](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ ਅਖੀਰਲੀ `Transrewrt Setup x.y.z.exe` ਡਾਊਨਲੋਡ ਕਰੋ, ਇੰਸਟਾਲਰ ਨੂੰ ਚਲਾਓ, ਫਿਰ ਸਟਾਰਟ ਮੇਨੂ ਜਾਂ ਡੈਸਕਟਾਪ ਸ਼ਾਰਟਕੱਟ ਰਾਹੀਂ ਲਾਂਚ ਕਰੋ। **Settings → API** ਵਿੱਚ ਆਪਣੀਆਂ API ਕੁੰਜੀਆਂ ਦਿਉ। ਤੁਸੀਂ ਘੱਟ ਵਿੱਚੋਂ ਇੱਕ ਪ੍ਰਦਾਤਾ ਨੂੰ ਕਾਨਫ਼ੀਗਰ ਕਰਨਾ ਜ਼ਰੂਰੀ ਹੈ, OpenRouter ਮੁਫ਼ਤ ਮਾਡਲਾਂ ਲਈ ਆਮ ਹੈ।

<br/>

**ਲੀਨਕਸ**

ਆਪਣੇ CPU ਲਈ `.AppImage` ਡਾਊਨਲੋਡ ਕਰੋ [ਰਿਲੀਜ਼](https://github.com/wsj-br/transrewrt/releases) 'ਤੇ (`x64` ਆਮ ਪੀਸੀ ਲਈ, `arm64` ਬਹੁਤ ਸਾਰੇ ARM ਡਿਵਾਈਸ ਲਈ, ਰਸਪਬੇਰੀ ਪਾਈ 4+ ਸਮੇਤ), ਫਿਰ:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**Settings → API** ਵਿੱਚ ਆਪਣੀਆਂ API ਕੁੰਜੀਆਂ ਦਿਓ। ਤੁਸੀਂ ਘੱਟ ਵਿੱਚੋਂ ਇੱਕ ਪ੍ਰਦਾਤਾ ਨੂੰ ਕਾਨਫ਼ੀਗਰ ਕਰਨਾ ਜ਼ਰੂਰੀ ਹੈ, OpenRouter ਮੁਫ਼ਤ ਮਾਡਲਾਂ ਲਈ ਆਮ ਹੈ।

Debian/Ubuntu 'ਤੇ ਤੁਹਾਨੂੰ ਪਹਿਲਾਂ ਹੋਰ ਨਿਰਭਰਤਾਵਾਂ ਇੰਸਟਾਲ ਕਰਨ ਦੀ ਲੋੜ ਹੋ ਸਕਦੀ ਹੈ:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

ਵੇਰਵੇ ਲਈ [ਸਥਾਪਤ ਕਰਨਾ → ਲੀਨਕਸ](#linux-electron) ਦੇਖੋ।

<br/>

> ℹ️ **ਨੋਟ**<br/>
> ਫਿਲਹਾਲ macOS ਸਮਰਥਿਤ ਨਹੀਂ ਹੈ। Transrewrt ਵਿੰਡੋਜ਼, ਲੀਨਕਸ, ਅਤੇ ਡਾਕਰ ਲਈ ਉਪਲਬਧ ਹੈ।

<br/>

ਇੱਕ ਵਾਰ ਐਪ ਚੱਲ ਰਿਹਾ ਹੋਵੇ, ਟੈਕਸਟ ਅਨੁਵਾਦ, ਪੁਨਰ-ਲੇਖਨ, ਅਤੇ ਰੂਪਾਂਤਰਿਤ ਕਰਨ ਲਈ, ਪ੍ਰਾਮਿਟਾਂ ਨੂੰ ਪਰਬੰਧਿਤ ਕਰਨ ਲਈ, ਅਤੇ ਮਾਡਲਾਂ ਨੂੰ ਕਾਨਫ਼ੀਗਰ ਕਰਨ ਲਈ **[ਯੂਜ਼ਰ ਗਾਈਡ](USER-GUIDE.pa.md)** ਦੇਖੋ।

<br/><br/>

<a id="installation"></a>
## ਸਥਾਪਤ ਕਰਨਾ

<a id="windows-electron"></a>
### ਵਿੰਡੋਜ਼ (Electron)

- [ਰਿਲੀਜ਼](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ ਨਵੀਨਤਮ ਇੰਸਟਾਲਰ ਡਾਊਨਲੋਡ ਕਰੋ।
- `.exe` ਨੂੰ ਚਲਾਓ ਅਤੇ ਇੰਸਟਾਲਰ ਦੀ ਪਾਲਣਾ ਕਰੋ।
- ਪਹਿਲੀ ਵਾਰ ਚਲਾਉਣਾ: ਸਟਾਰਟ ਮੇਨੂ ਜਾਂ ਡੈਸਕਟਾਪ ਸ਼ਾਰਟਕੱਟ ਰਾਹੀਂ ਐਪ ਨੂੰ ਸ਼ੁਰੂ ਕਰੋ। 

<br/>

<a id="linux-electron"></a>
### ਲੀਨਕਸ (Electron)

- [ਰਿਲੀਜ਼](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ ਮੇਲ ਖਾਂਦਾ `.AppImage` (`x64` ਜਾਂ `arm64`) ਡਾਊਨਲੋਡ ਕਰੋ।
- ਚਲਾਓ: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` x86_64/amd64 'ਤੇ, ਜਾਂ `...-arm64.AppImage` ਫਾਈਲ ਨਾਮ `ARM64` 'ਤੇ ਵਰਤੋਂ ਕਰੋ।
- ਵਾਧੂ ਨਿਰਭਰਤਾਵਾਂ (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- ਹੋਰ ਲਈ [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) ਦੇਖੋ।

<br/>

<a id="docker"></a>
### ਡਾਕਰ

- ਪੁੱਲ: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- ਘੱਟ ਵਿੱਚੋਂ ਇੱਕ ਪ੍ਰਦਾਤਾ ਕੁੰਜੀ ਵਾਤਾਵਰਣ ਰਾਹੀਂ ਸੈੱਟ ਕਰੋ (ਉਦਾਹਰਣ: OpenRouter ਲਈ `OPENROUTER_KEY`)। `-e` ਜਾਂ `docker compose` / `.env` ਰਾਹੀਂ ਵੇਰੀਏਬਲਾਂ ਦੇਣ ਤਾਂ ਜੋ ਗੁਪਤ ਚੀਜ਼ਾਂ ਇਮੇਜ ਵਿੱਚ ਨਾ ਹੋਣ।
- ਪ੍ਰਦਾਤਾ ਕੁੰਜੀਆਂ **ਵੈੱਬ UI ਵਿੱਚ ਦਾਖਲ ਨਹੀਂ** ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ; ਸਰਵਰ ਉਹਨਾਂ ਨੂੰ ਵਾਤਾਵਰਣ ਤੋਂ ਪੜ੍ਹਦਾ ਹੈ।

ਉਦਾਹਰਨ - ਸਥਾਈਤਾ ਲਈ ਨਾਮਿਤ ਵਾਲੀਅਮ (env ਰਾਹੀਂ OpenRouter ਕੁੰਜੀ):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| ਵਿਕਲਪ   | ਵਿਵਰਣ                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| ਪੋਰਟ     | `5000` ( `-p 5000:5000` ਨਾਲ ਮੈਪ ਕਰੋ)                                                                              |
| ਵਾਲੀਅਮ   | ਕਾਨਫ਼ੀਗ ਅਤੇ ਤਸਵੀਰ ਦੀ ਸਥਾਈਤਾ ਲਈ `/app/data` ਮਾਊਂਟ ਕਰੋ                                                         |
| Env vars | `PORT`, `CONFIG_PATH`, ਅਤੇ LLM ਕੁੰਜੀਆਂ (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - ਵੇਖੋ [ਕਾਨਫ਼ੀਗਰੇਸ਼ਨ](#configuration-and-environment) |

ਸਰੋਤ ਤੋਂ ਬਣਾਉਣ ਅਤੇ ਚਲਾਉਣ ਲਈ: `docker compose up --build -d` ਜਾਂ `pnpm docker:up` - ਵੇਖੋ [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)।

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## ਓਪਨਰਾਊਟਰ API ਕੁੰਜੀ ਪ੍ਰਾਪਤ ਕਰਨਾ

ਟ੍ਰਾਂਸਰੀਵਰਟ ਮਲਟੀਪਲ ਏਆਈ ਪ੍ਰਦਾਤਾਵਾਂ ਨੂੰ ਸਮਰਥਨ ਕਰਦਾ ਹੈ। [ਓਪਨਰਾਊਟਰ](https://openrouter.ai) ਇੱਕ ਪ੍ਰਸਿੱਧ ਵਿਕਲਪ ਹੈ ਕਿਉਂਕਿ ਇਹ ਇੱਕੋ ਕੁੰਜੀ ਹੇਠ ਕਈ ਮਾਡਲਾਂ ਨੂੰ ਇਕੱਠਾ ਕਰਦਾ ਹੈ ਅਤੇ ਮੁਫ਼ਤ ਮਾਡਲ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।

1. [openrouter.ai](https://openrouter.ai) 'ਤੇ ਸਾਈਨ ਅੱਪ ਕਰੋ ਜਾਂ ਲਾਗ ਇਨ ਕਰੋ।
2. [Keys](https://openrouter.ai/keys) ਪੇਜ ਖੋਲ੍ਹੋ ਅਤੇ ਇੱਕ ਨਵੀਂ ਕੁੰਜੀ ਬਣਾਓ (ਇਸਦਾ ਨਾਮ ਸੈੱਟ ਕਰੋ, ਅਤੇ ਵਿਕਲਪਕ ਤੌਰ 'ਤੇ ਇੱਕ ਕਰੈਡਿਟ ਸੀਮਾ ਸੈੱਟ ਕਰੋ)। ਤੁਸੀਂ ਕਰੈਡਿਟ ਜੋੜੇ ਬਿਨਾਂ ਮੁਫ਼ਤ ਮਾਡਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ।
3. **ਡੈਸਕਟਾਪ (ਇਲੈਕਟ੍ਰਾਨ):** **ਸੈਟਿੰਗਜ਼ → ਏਪੀਆਈ** ਵਿੱਚ ਕੁੰਜੀਆਂ ਪੇਸਟ ਕਰੋ। **ਡੌਕਰ:** `OPENROUTER_KEY` ਵਰਗੇ ਐਨਵੀ ਵੇਰੀਏਬਲ ਸੈੱਟ ਕਰੋ ( [ਤੇਜ਼ ਸ਼ੁਰੂਆਤ](#quick-start) ਵੇਖੋ)।

ਤਬਦੀਲੀ, ਫਿਰ ਲਿਖਣ ਜਾਂ ਰੂਪਾਂਤਰਿਤ ਕਰਨ ਲਈ ਓਪਨਰਾਊਟਰ ਦੇ **ਬਾਡੀ ਬਿਲਡਰ** ਮਾਡਲ (`openrouter/bodybuilder`) ਦੀ ਵਰਤੋਂ ਨਾ ਕਰੋ: ਇਸ ਨਾਲ ਉਹਨਾਂ ਕਾਰਜਾਂ ਲਈ ਪੂਰੀ ਹੋਈ ਟੈਕਸਟ ਨਹੀਂ, ਬਲਕਿ JSON ਰਿਕਵੈਸਟ ਪੇਲੋਡ ਵਾਪਸ ਆਉਂਦੇ ਹਨ। ਵਰਤੋਂਕਰਤਾ ਗਾਈਡ ਵਿੱਚ [ਸੈਟਿੰਗਜ਼ → ਮਾਡਲ](USER-GUIDE.pa.md#models) ਨੂੰ ਵੇਖੋ।

ਤੁਸੀਂ ਹੋਰ ਪ੍ਰਦਾਤਾਵਾਂ (ਓਪਨਐਆਈ, ਐਂਥਰੋਪਿਕ, ਗੂਗਲ ਜੈਮੀਨੀ, ਡੀਪਸੀਕ, ਗਰੌਕ, ਮਿਸਟਰਲ, ਐਕਸਏਆਈ, ਸੈਰੀਬਰਾਸ) ਦੀ ਵੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ ਜਾਂ [ਓਲਾਮਾ](https://ollama.com) ਨਾਲ ਮਾਡਲਾਂ ਨੂੰ ਸਥਾਨਕ ਤੌਰ 'ਤੇ ਚਲਾ ਸਕਦੇ ਹੋ। ਸਮਰਥਤ ਪ੍ਰਦਾਤਾਵਾਂ ਅਤੇ ਏਨਵੀ ਵੇਰੀਏਬਲਾਂ ਦੀ ਪੂਰੀ ਸੂਚੀ ਲਈ [ਕਨਫ਼ੀਗਰੇਸ਼ਨ](#configuration-and-environment) ਨੂੰ ਵੇਖੋ।

> ⚠️ **ਚੇਤਾਵਨੀ**<br/>
> ਜੇਕਰ ਤੁਸੀਂ ਕਿਸੇ ਹੋਰ ਡਿਵਾਈਸ, ਕੰਟੇਨਰ ਜਾਂ ਸੇਵਾ ਤੋਂ Ollama ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੇ ਹੋ, ਤਾਂ Ollama ਨੂੰ ਬਾਹਰੀ ਕਨੈਕਸ਼ਨਾਂ (ਕੇਵਲ ਲੋਕਲਹੋਸਟ ਨਹੀਂ) ਦੀ ਆਗਿਆ ਦੇਣ ਲਈ ਕਨਫ਼ੀਗਰ ਕਰਨਾ ਯਾਦ ਰੱਖੋ।

<br/><br/>

<a id="configuration-and-environment"></a>
## ਕਨਫ਼ੀਗਰੇਸ਼ਨ ਅਤੇ ਵਾਤਾਵਰਣ

**ਕਨਫ਼ੀਗ ਫਾਇਲਾਂ ਦੀਆਂ ਥਾਵਾਂ**

| ਡਿਪਲੌਈਮੈਂਟ       | ਕਨਫਿਗ ਸਥਾਨ                             |
| ------------------ | ---------------------------------------- |
| ਇਲੈਕਟ੍ਰਾਨ (ਵਿੰਡੋਜ਼) | `%APPDATA%\transrewrt\`                  |
| ਇਲੈਕਟ੍ਰਾਨ (ਲਿਨਕਸ) | `~/.config/transrewrt/`                  |
| ਵੈਬ / ਡੌਕਰ         | `/app/data/config.json` (ਸਥਾਈਕਰਣ ਲਈ ਵਾਲੀਅਮ ਦੀ ਵਰਤੋਂ ਕਰੋ) |

<br/>

**ਵਾਤਾਵਰਣ ਚਲ (ENV variables)** (ਕੇਵਲ ਵੈੱਬ/ਡੌਕਰ ਲਈ; ਇਲੈਕਟ੍ਰਾਨ ਸਥਾਨਕ ਕਨਫਿਗ ਫਾਇਲ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ)

| ਚਲ            | ਡਿਫ਼ਾਲਟ              | ਵਰਣਨ         |
| -------------- | -------------------- | -------------- |
| `PORT`         | `5000`               | ਸਰਵਰ ਸੁਣਨ ਵਾਲਾ ਪੋਰਟ |
| `CONFIG_PATH`  | `/app/data/config.json` | ਕਨਫ਼ੀਗ ਫਾਇਲ ਲਈ ਮਾਰਗ |
| `OPENROUTER_KEY` | *(ਖਾਲੀ)*            | ਓਪਨਰਾਊਟਰ ਏਪੀਆਈ ਕੁੰਜੀ |
| `OPENAI_KEY`   | *(ਖਾਲੀ)*            | ਓਪਨਐਆਈ ਏਪੀਆਈ ਕੁੰਜੀ |
| `CEREBRAS_KEY` | *(ਖਾਲੀ)*            | ਸੈਰੀਬਰਾਸ ਏਪੀਆਈ ਕੁੰਜੀ |
| `ANTHROPIC_KEY`| *(ਖਾਲੀ)*            | ਐਂਥਰੋਪਿਕ ਏਪੀਆਈ ਕੁੰਜੀ |
| `GOOGLE_KEY`   | *(ਖਾਲੀ)*            | ਗੂਗਲ ਜੈਮਨੀ ਏਪੀਆਈ ਕੁੰਜੀ |
| `DEEPSEEK_KEY` | *(ਖਾਲੀ)*            | ਡੀਪਸੀਕ ਏਪੀਆਈ ਕੁੰਜੀ |
| `GROQ_KEY`     | *(ਖਾਲੀ)*            | ਗਰੌਕ ਏਪੀਆਈ ਕੁੰਜੀ |
| `MISTRAL_KEY`  | *(ਖਾਲੀ)*            | ਮਿਸਟਰਲ ਏਪੀਆਈ ਕੁੰਜੀ |
| `OLLAMA_URL`   | *(ਖਾਲੀ)*            | ਓਲਾਮਾ ਬੇਸ URL (ਉਦਾਹਰਨ ਲਈ `http://host.docker.internal:11434`) |
| `XAI_KEY`      | *(ਖਾਲੀ)*            | ਐਕਸਏਆਈ ਏਪੀਆਈ ਕੁੰਜੀ |

ਕੇਵਲ ਉਹਨਾਂ ਪ੍ਰਦਾਤਾਵਾਂ ਨੂੰ ਕਨਫ਼ੀਗਰ ਕਰੋ ਜਿਨ੍ਹਾਂ ਦੀ ਤੁਸੀਂ ਵਰਤੋਂ ਕਰਦੇ ਹੋ। ਮਾਡਲ ਆਈਡੀਆਂ ਨਾਮਸਪੇਸ ਹਨ (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ਆਦਿ)।

**ਕੀਮਤ ਪ੍ਰਦਰਸ਼ਨ:** ਓਪਨਰਾਊਟਰ ਲਾਗੂ ਹੋਣ 'ਤੇ ਬਿੱਲ ਕੀਤੀ ਕੀਮਤ ਵਾਪਸ ਕਰਦਾ ਹੈ। ਹੋਰ ਪ੍ਰਦਾਤਾ ਲਾਗਤ ਦੇ ਅੰਦਾਜ਼ੇ (ਕੀਮਤਾਂ) ਦੀ ਵਰਤੋਂ, ਜਦੋਂ ਓਪਨਰਾਊਟਰ ਕੁੰਜੀ ਉਪਲਬਧ ਹੋਵੇ, ਓਪਨਰਾਊਟਰ ਦੇ ਜਨਤਕ ਮਾਡਲ ਮੁੱਲ ਤੋਂ ਕਰਦੇ ਹਨ; ਬਿਨਾਂ ਇਸ ਦੇ, ਨਾਨ-ਓਪਨਰਾਊਟਰ ਲਾਗਤ `0` ਵਜੋਂ ਦਿਖਾਈ ਦੇ ਸਕਦੀ ਹੈ। ਅੰਦਾਜ਼ਾ ਖਰਚ ਬਿੱਲ ਨਹੀਂ ਹੁੰਦੇ।

<br/>

**ਡਾਟਾ ਅਤੇ ਸਥਾਈਪਣਾ:** ਡੌਕਰ ਲਈ, `/app/data` 'ਤੇ ਇੱਕ ਵਾਲੀਅਮ ਮਾਊਂਟ ਕਰੋ ਤਾਂ ਜੋ `config.json` ਅਤੇ SQLite ਡੇਟਾਬੇਸ ਕੰਟੇਨਰ ਦੇ ਰੀਸਟਾਰਟ ਤੋਂ ਬਾਅਦ ਵੀ ਖੁੱਲ੍ਹਾ ਰਹੇ। ਬਿਨਾਂ ਵਾਲੀਅਮ ਦੇ, ਕੰਟੇਨਰ ਬੰਦ ਹੋਣ 'ਤੇ ਸਾਰਾ ਡਾਟਾ ਗੁਆ ਦਿੱਤਾ ਜਾਂਦਾ ਹੈ।

**ਡਿਵੈਲਪਰਾਂ ਲਈ:** ਪੁਰਾਣੀਆਂ ਇਕ-ਕੁੰਜੀ ਵਾਲੀ ਕਨਫ਼ੀਗ ਨੂੰ ਬਦਲਣ ਵਾਲੀਆਂ ਤਬਦੀਲੀਆਂ ਖਿੱਚਣ ਤੋਂ ਬਾਅਦ, ਜੇਕਰ ਤੁਹਾਡੀ ਸਥਾਨਕ ਫਾਇਲ ਅਜੇ ਵੀ ਹਟਾਈਆਂ ਗਈਆਂ ਫੀਲਡਾਂ (`api_key`, `api_url`, ਪ੍ਰੋਕਸੀ ਵਿਕਲਪ) ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੀ ਹੈ, ਤਾਂ `data/config.json` ਨੂੰ `src/config-defaults/config_default.json` 'ਚੋਂ ਨਵੇਂ ਡਿਫ਼ਾਲਟ ਢਾਂਚੇ ਨਾਲ ਰੀਸੈੱਟ ਜਾਂ ਮਰਜ਼ ਕਰੋ।

<br/>

**ਵੈਬ ਪ੍ਰਮਾਣੀਕਰਨ:**

- ਡਿਫ਼ਾਲਟ ਐਡਮਿਨ: `admin` / `transrewrt26`।
- **ਸੈਟਿੰਗਜ਼ → ਯੂਜ਼ਰ** ਵਿੱਚ ਯੂਜ਼ਰ ਪ੍ਰਬੰਧਿਤ ਕਰੋ।
- ਪਾਸਵਰਡ ਰੀਸੈਟ ਕਰੋ: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (ਸਰੋਤ ਰਾਹੀਂ: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ਚੇਤਾਵਨੀ**<br/>
> ਕਿਸੇ ਵੀ ਨੈੱਟਵਰਕ-ਐਕਸੈਸਯੋਗ ਹੋਸਟ 'ਤੇ ਡਿਫ਼ਾਲਟ ਐਡਮਿਨ ਪਾਸਵਰਡ ਨੂੰ ਤੁਰੰਤ ਬਦਲੋ।

<br/>

ਫਾਂਟ, ਮਾਡਲ, ਭਾਸ਼ਾਵਾਂ ਆਦਿ ਵਰਗੀਆਂ ਮੁੱਖ ਸੈਟਿੰਗਜ਼ ਐਪਲੀਕੇਸ਼ਨ ਸੈਟਿੰਗਜ਼ ਵਿੱਚ ਉਪਲਬਧ ਹਨ।

<br/><br/>

<a id="development-and-architecture"></a>

## ਵਿਕਾਸ ਅਤੇ ਆਰਕੀਟੈਕਚਰ

- **ਵਿਕਾਸ:** ਸੈੱਟਅੱਪ, ਬਿਲਡ, ਟੈਸਟ, ਅਤੇ ਡਿਪਲੌਅ (ਇਲੈਕਟ੍ਰੌਨ, ਵੈੱਬ, ਡਾਕਰ) - **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** ਦੇਖੋ।
- **ਆਰਕੀਟੈਕਚਰ ਅਤੇ ਸਿਸਟਮ ਓਵਰਵੀਅ:** ਫੋਲਡਰ ਸਟਰਕਚਰ, ਟੈੱਕ ਸਟੈਕ, ਡਿਜ਼ਾਈਨ ਫੈਸਲੇ - **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** ਦੇਖੋ।

<br/><br/>

<a id="releases-and-tags"></a>
## ਰੀਲੀਜ਼ ਅਤੇ ਟੈਗ

- **ਗਿੱਟ ਟੈਗ** `v`* (ਜਿਵੇਂ `v1.0.10`) [ਰੀਲੀਜ਼ ਵਰਕਫਲੋ](.github/workflows/release.yml) ਨੂੰ ਟ੍ਰਿਗਰ ਕਰਦੇ ਹਨ। **ਗਿੱਟਹੱਬ ਰੀਲੀਜ਼** ਵਿੰਡੋਜ਼ ਇੰਸਟਾਲਰ (`.exe`) ਅਤੇ ਲੀਨਕਸ ਐਪਇਮੇਜ ( **x64** ਅਤੇ **arm64** ) ਨਾਲ ਜੁੜੇ ਹੋਏ ਹਨ।
- **ਡਾਕਰ ਇਮੇਜ** `ghcr.io/wsj-br/transrewrt` ਤੇ ਪ੍ਰਕਾਸ਼ਿਤ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ। ਇਮੇਜ ਟੈਗ ਗਿੱਟ ਵਰਜਨ ਨਾਲ ਮੇਲ ਖਾਂਦੇ ਹਨ (ਜਿਵੇਂ `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) ਅਤੇ `latest` ਨਾਲ। ਮਲਟੀ-ਆਰਕ: `linux/amd64` ਅਤੇ `linux/arm64` (ਜਿਵੇਂ ਰਸਪਬੇਰੀ ਪਾਈ)।

<br/><br/>

<a id="contributing"></a>
## ਯੋਗਦਾਨ ਪਾਉਣਾ

1. ਰਿਪੋਜ਼ੀਟਰੀ ਨੂੰ ਫੋਰਕ ਕਰੋ।
2. ਇੱਕ ਫੀਚਰ ਸ਼ਾਖਾ ਬਣਾਓ: `git checkout -b feature/my-feature`
3. ਇੱਕ ਸਪਸ਼ਟ ਸੁਨੇਹੇ ਨਾਲ ਆਪਣੇ ਬਦਲਾਵ ਨੂੰ ਕਮਿਟ ਕਰੋ।
4. ਧੱਕੋ ਅਤੇ `main` ਖਿਲਾਫ਼ ਇੱਕ ਪੁਲ ਰਿਕੁਐਸਟ ਖੋਲ੍ਹੋ।

ਯੋਗਦਾਨ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਮੌਜੂਦਾ ਕੋਡ ਸਟਾਈਲ ਦੀ ਪਾਲਣਾ ਕਰੋ ਅਤੇ ਇਲੈਕਟ੍ਰੌਨ ਅਤੇ ਵੈੱਬ ਮੋਡ ਦੋਵਾਂ ਵਿੱਚ ਆਪਣੇ ਬਦਲਾਵਾਂ ਦਾ ਟੈਸਟ ਕਰੋ। ਬਿਲਡ ਅਤੇ ਟੈਸਟ ਨਿਰਦੇਸ਼ਾਂ ਲਈ [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) ਵੇਖੋ।

<br/>

**ਮੁੱਦੇ ਦੀ ਰਿਪੋਰਟ ਕਰਨਾ:** [GitHub](https://github.com/wsj-br/transrewrt/issues) ਤੇ ਇੱਕ ਮੁੱਦਾ ਖੋਲ੍ਹੋ। ਆਪਣੇ ਪਲੇਟਫਾਰਮ (ਵਿੰਡੋਜ਼ / ਲੀਨਕਸ / ਡਾਕਰ) ਅਤੇ ਐਪ ਵਰਜਨ (ਅਬਾਊਟ ਡਾਇਲਾਗ ਵਿੱਚ ਜਾਂ ਰੀਲੀਜ਼ ਪੇਜ ਤੇ ਦਿਖਾਇਆ ਗਿਆ) ਸ਼ਾਮਲ ਕਰੋ।

<br/><br/>

<a id="disclaimer"></a>
## ਛੋਟ

ਉਤਪਾਦ ਨਾਮ ਅਤੇ ਆਈਕਨ ਉਨ੍ਹਾਂ ਦੇ ਸੰਬੰਧਤ ਮਾਲਕਾਂ ਦੇ ਹਨ ਅਤੇ ਸਿਰਫ਼ ਪਛਾਣ ਦੇ ਉਦੇਸ਼ਾਂ ਲਈ ਵਰਤੇ ਜਾਂਦੇ ਹਨ। ਇਹ ਸਾਫਟਵੇਅਰ ਕਿਸੇ ਵੀ ਜ਼ਿਕਰ ਕੀਤੇ ਗਏ ਬਰੈਂਡਾਂ ਨਾਲ ਸਬੰਧਿਤ ਜਾਂ ਪ੍ਰਵਾਨਗੀ ਪ੍ਰਾਪਤ ਨਹੀਂ ਹੈ।

<br/><br/>

<a id="license"></a>
## ਲਾਇਸੈਂਸ

ਕਾਪੀਰਾਈਟ © 2026 ਵਾਲਡੇਮਰ ਸਕੂਡੇਲਰ ਜੂਨੀਅਰ।

[ਅਪਾਚੇ ਲਾਇਸੈਂਸ 2.0](LICENSE)