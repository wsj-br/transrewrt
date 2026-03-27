---
translated_at: "2026-03-26T00:55:42.887Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logo" width="120" />
</p>

<h1 align="center">ਟ੍ਰਾਂਸਰਾਈਟ</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="ਸੰਸਕਰਨ"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="ਲਾਇਸੈਂਸ: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="ਪਲੇਟਫਾਰਮ">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI-ਸੰਚਾਲਿਤ ਟੈਕਸਟ ਟੂਲ: ਭਾਸ਼ਾਵਾਂ ਵਿਚਕਾਰ ਅਨੁਵਾਦ ਕਰੋ, ਵੱਖ-ਵੱਖ ਸ਼ੈਲੀਆਂ ਵਿੱਚ ਮੁੜ ਲਿਖੋ, ਅਤੇ ਕਸਟਮ ਪ੍ਰੌਮਟਸ ਨਾਲ ਤਬਦੀਲ ਕਰੋ — ਮਲਟੀਪਲ AI ਪ੍ਰਦਾਤਾਵਾਂ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, ਅਤੇ ਸਥਾਨਕ Ollama) ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋਏ। ਡੈਸਕਟਾਪ ਐਪ (Electron) ਜਾਂ ਸੈਲਫ-ਹੋਸਟ ਵੈਬ ਐਪ (Docker) ਵਜੋਂ ਚਲਦਾ ਹੈ।

- **ਅਨੁਵਾਦ** — ਦਰਜਨਾਂ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ, ਆਪਣੇ ਆਪ ਸਰੋਤ ਪਛਾਣ ਨਾਲ
- **ਮੁੜ ਲਿਖੋ** — ਵਿਆਕਰਨ ਠੀਕ ਕਰੋ, ਸੰਪ੍ਰੇਸ਼ਨ ਸੁਧਾਰੋ, ਔਪਚਾਰਿਕ/ਅਨੌਪਚਾਰਿਕ, ਛੋਟਾ ਕਰੋ, ਵਧਾਓ, ਤਕਨੀਕੀ
- **ਪਰਿਵਰਤਨ** — ਕਸਟਮ AI ਪ੍ਰੌਮਟਸ; ਪ੍ਰੌਮਟਸ ਬਣਾਓ ਅਤੇ ਮੈਨੇਜ ਕਰੋ, ਪ੍ਰਤੀ ਪ੍ਰੌਮਟ ਵਿਕਲਪਿਕ ਟੀਚਾ ਭਾਸ਼ਾ
- **ਇਤਿਹਾਸ** — ਇਨਪੁਟ/ਆਊਟਪੁਟ ਟੈਕਸਟ, ਫਿਲਟਰਿੰਗ ਅਤੇ ਨਿਰਯਾਤ ਨਾਲ ਪੂਰਾ ਕਾਰਜ ਇਤਿਹਾਸ
- **ਮਾਡਲ ਅਤੇ ਲਾਗਤ** — ਕਿਸੇ ਵੀ ਕੰਫਿਗਰ ਕੀਤੇ ਪ੍ਰਦਾਤਾ ਤੋਂ ਮਾਡਲ ਚੁਣੋ; ਮਾਡਲ/ਆਪਰੇਸ਼ਨ/ਦਿਨ ਅਨੁਸਾਰ ਲੌਗ, ਸਾਰਾਂਸ਼ ਨਾਲ ਲਾਗਤ ਅਤੇ ਵਰਤੋਂ ਡੈਸ਼ਬੋਰਡ
- **UI** — ਬਹੁਭਾਸ਼ੀ ਇੰਟਰਫੇਸ (30+ ਭਾਸ਼ਾਵਾਂ, RTL ਸਹਾਇਤਾ), ਫਾਂਟਸ, ...
- **ਵੈੱਬ ਮੋਡ** — ਐਡਮਿਨ ਰੋਲਾਂ ਨਾਲ ਬਹੁ-ਯੂਜ਼ਰ ਸਹਾਇਤਾ
- **ਡੈਸਕਟਾਪ** — ਵਿੰਡੋਜ਼ ਅਤੇ ਲੀਨਕਸ ਲਈ ਐਲੈਕਟ੍ਰਾਨ ਐਪ
- **ਸੈਲਫ-ਹੋਸਟਡ** — amd64 ਅਤੇ arm64 (ਰਸਪਬੇਰੀ ਪਾਈ-ਤਿਆਰ) ਲਈ ਡਾਕਰ ਇਮੇਜ

ਇੰਸਟਾਲ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਸਾਰੇ ਫੀਚਰਾਂ ਬਾਰੇ ਪੂਰੀ ਜਾਣਕਾਰੀ ਲਈ **[ਯੂਜ਼ਰ ਗਾਈਡ](USER-GUIDE.pa.md)** ਵੇਖੋ।

<small>**ਹੋਰ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਪੜ੍ਹੋ:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UI ਅਤੇ ਦਸਤਾਵੇਜ਼ੀਕਰਨ ਅਨੁਵਾਦ ਬਾਰੇ ਨੋਟ:** English (UK) ਮੂਲ ਤੋਂ ਇਲਾਵਾ ਸਭ ਇੰਟਰਫੇਸ ਭਾਸ਼ਾਵਾਂ ਨੂੰ AI ਮਾਡਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਅਨੁਵਾਦਿਤ ਕੀਤਾ ਗਿਆ ਹੈ; ਸ਼ਬਦਾਵਲੀ ਅਸਿੱਧੀ ਹੋ ਸਕਦੀ ਹੈ ਜਾਂ ਇਰਾਦਤਾਂ ਸ਼ਾਮਲ ਹੋ ਸਕਦੀਆਂ ਹਨ।

</small>

<br/>

<a id="screenshots"></a>
## ਸਕਰੀਨਸ਼ੌਟ

**ਭਾਸ਼ਾ ਚੋਣਕਰਤਾ**

![ਭਾਸ਼ਾ ਚੋਣਕਰਤਾ](../images/screenshots/pa/language-selector.png)

**ਅਨੁਵਾਦ**

![ਅਨੁਵਾਦ](../images/screenshots/pa/translate.png)

**ਟਰਾਂਸਫਾਰਮ - ਪ੍ਰੌਮਟ ਸੰਪਾਦਕ**

![ਟਰਾਂਸਫਾਰਮ - ਪ੍ਰੌਮਟ ਸੰਪਾਦਕ](../images/screenshots/pa/transform-prompt-edit.png)

**ਡੈਸ਼ਬੋਰਡ**

![ਲਾਗਤ ਦਾ ਡੈਸ਼ਬੋਰਡ](../images/screenshots/pa/dashboard-summary.png)

**ਇਤਿਹਾਸ**

![ਇਤਿਹਾਸ](../images/screenshots/pa/history.png)

**ਸੈਟਿੰਗਾਂ - ਮਾਡਲ ਚੋਣ**

![ਸੈਟਿੰਗਾਂ - ਮਾਡਲ ਚੋਣ](../images/screenshots/pa/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## ਵਿਸ਼ਾ ਸੂਚੀ

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [ਤੁਰੰਤ ਸ਼ੁਰੂਆਤ](#quick-start)
- [ਸਥਾਪਨਾ](#installation)
  - [ਵਿੰਡੋਜ਼ (ਇਲੈਕਟ੍ਰਾਨ)](#windows-electron)
  - [ਲੀਨਕਸ (ਇਲੈਕਟ੍ਰਾਨ)](#linux-electron)
  - [ਡੌਕਰ](#docker)
- [OpenRouter API ਕੁੰਜੀ ਪ੍ਰਾਪਤ ਕਰਨਾ](#getting-an-openrouter-api-key)
- [ਕਾਨਫ਼ੀਗਰੇਸ਼ਨ ਅਤੇ ਵਾਤਾਵਰਣ](#configuration-and-environment)
- [ਵਿਕਾਸ ਅਤੇ ਆਰਕੀਟੈਕਚਰ](#development-and-architecture)
- [ਰਿਲੀਜ਼ ਅਤੇ ਟੈਗ](#releases-and-tags)
- [ਯੋਗਦਾਨ ਪਾਉਣਾ](#contributing)
- [ਅਸਵੀਕਾਰ](#disclaimer)
- [ਲਾਇਸੈਂਸ](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## ਤੁਰੰਤ ਸ਼ੁਰੂਆਤ

**ਡੌਕਰ (ਸਵੈ-ਹੋਸਟਿੰਗ ਲਈ ਤਰਜੀਹੀ)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` ਨੂੰ ਆਪਣੀ [OpenRouter API ਕੁੰਜੀ](https://openrouter.ai/keys) ਨਾਲ ਬਦਲੋ (ਜਾਂ ਹੋਰ ਪ੍ਰਦਾਤਾ ਕੁੰਜੀਆਂ ਸੈੱਟ ਕਰੋ; [ਕਾਨਫ਼ੀਗਰੇਸ਼ਨ](#configuration-and-environment) ਵੇਖੋ)। [http://localhost:5000](http://localhost:5000) ਖੋਲ੍ਹੋ ਅਤੇ ਸੇਵਾ ਨੂੰ ਪ੍ਰਗਟ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਡਿਫ਼ਾਲਟ ਐਡਮਿਨ ਪਾਸਵਰਡ ਬਦਲੋ।

<br/>

> ℹ️ **ਨੋਟ**<br/>
> ਡੌਕਰ ਵਿੱਚ, LLM ਕੁੰਜੀਆਂ ਵਾਤਾਵਰਣ ਚਲਣਾਂ ਨਾਲ ਜਿਵੇਂ `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (ਵੈੱਬ UI ਵਿੱਚ ਨਹੀਂ) ਸੈੱਟ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ। ਡੈਸਕਟਾਪ (ਇਲੈਕਟ੍ਰਾਨ) ਵਿੱਚ ਤੁਸੀਂ **ਸੈਟਿੰਗਾਂ → API** ਵਿੱਚ ਕੁੰਜੀਆਂ ਸੈੱਟ ਕਰਦੇ ਹੋ।

<br/>

**ਵਿੰਡੋਜ਼**

[ਰਿਲੀਜ਼](https://github.com/wsj-br/transrewrt/releases) ਵਿੱਚੋਂ ਨਵੀਂ `Transrewrt Setup x.y.z.exe` ਡਾਊਨਲੋਡ ਕਰੋ, ਸਥਾਪਨਾ ਪ੍ਰੋਗਰਾਮ ਨੂੰ ਚਲਾਓ, ਫਿਰ ਸ਼ੁਰੂਆਤ ਮੇਨੂ ਜਾਂ ਡੈਸਕਟਾਪ ਸ਼ਾਰਟਕੱਟ ਤੋਂ ਲਾਂਚ ਕਰੋ। **ਸੈਟਿੰਗਾਂ → API** ਵਿੱਚ ਆਪਣੀਆਂ API ਕੁੰਜੀਆਂ ਦਰਜ ਕਰੋ। ਤੁਹਾਨੂੰ ਘੱਟ ਤੋਂ ਘੱਟ ਇੱਕ ਪ੍ਰਦਾਤਾ ਨੂੰ ਕਾਨਫਿਗਰ ਕਰਨਾ ਹੋਵੇਗਾ, ਮੁਫ਼ਤ ਮਾਡਲਾਂ ਲਈ ਆਮ ਤੌਰ 'ਤੇ OpenRouter ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।

<br/>

**ਲੀਨਕਸ**

[ਰਿਲੀਜ਼](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ ਆਪਣੇ CPU ਲਈ `.AppImage` ਡਾਊਨਲੋਡ ਕਰੋ (`x64` ਆਮ ਪੀਸੀ ਲਈ, `arm64` ਕਈ ARM ਡਿਵਾਈਸਾਂ ਲਈ, ਜਿਵੇਂ ਰਸਪਬੇਰੀ ਪਾਈ 4+) ਫਿਰ:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

**ਸੈਟਿੰਗਾਂ → API** ਵਿੱਚ ਆਪਣੀਆਂ API ਕੁੰਜੀਆਂ ਦਰਜ ਕਰੋ। ਤੁਹਾਨੂੰ ਘੱਟ ਤੋਂ ਘੱਟ ਇੱਕ ਪ੍ਰਦਾਤਾ ਨੂੰ ਕਾਨਫਿਗਰ ਕਰਨਾ ਹੋਵੇਗਾ, ਮੁਫ਼ਤ ਮਾਡਲਾਂ ਲਈ ਆਮ ਤੌਰ 'ਤੇ OpenRouter ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।

ਡੀਬੀਅਨ/ਉਬੰਟੂ ਉੱਤੇ ਤੁਹਾਨੂੰ ਪਹਿਲਾਂ ਵਾਧੂ ਨਿਰਭਰਤਾਵਾਂ ਸਥਾਪਤ ਕਰਨ ਦੀ ਲੋੜ ਹੋ ਸਕਦੀ ਹੈ:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

ਵੇਰਵਾ ਲਈ [ਸਥਾਪਨਾ → ਲੀਨਕਸ](#linux-electron) ਵੇਖੋ।

<br/>

> ℹ️ **ਨੋਟ**<br/>
> ਮੈਕਓਐਸ ਫਿਲਹਾਲ ਸਮਰਥਿਤ ਨਹੀਂ ਹੈ। Transrewrt ਵਿੰਡੋਜ਼, ਲੀਨਕਸ ਅਤੇ ਡੌਕਰ ਲਈ ਉਪਲਬਧ ਹੈ।

<br/>

ਇਕ ਵਾਰ ਐਪ ਚੱਲਣਾ ਸ਼ੁਰੂ ਕਰ ਦੇਵੇ ਤਾਂ, ਟੈਕਸਟ ਨੂੰ ਅਨੁவਾਦ ਕਰਨਾ, ਪੁਨਰ-ਲਿਖਣਾ ਅਤੇ ਬਦਲਣਾ, ਪ੍ਰਾਮਟਾਂ ਨੂੰ ਪ੍ਰਬੰਧਿਤ ਕਰਨਾ, ਅਤੇ ਮਾਡਲਾਂ ਨੂੰ ਕਾਨਫ਼ੀਗਰ ਕਰਨਾ ਸਿੱਖਣ ਲਈ **[ਯੂਜ਼ਰ ਗਾਈਡ](USER-GUIDE.pa.md)** ਵੇਖੋ।

<br/><br/>

<a id="installation"></a>
## ਸਥਾਪਨਾ

<a id="windows-electron"></a>
### ਵਿੰਡੋਜ਼ (ਇਲੈਕਟ੍ਰਾਨ)

- [ਰਿਲੀਜ਼](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ ਨਵੀਂ ਸਥਾਪਨਾ ਫਾਈਲ ਡਾਊਨਲੋਡ ਕਰੋ।
- `.exe` ਚਲਾਓ ਅਤੇ ਸਥਾਪਨਾ ਨੂੰ ਪੂਰਾ ਕਰੋ।
- ਪਹਿਲੀ ਵਾਰ: ਸ਼ੁਰੂਆਤ ਮੇਨੂ ਜਾਂ ਡੈਸਕਟਾਪ ਸ਼ਾਰਟਕੱਟ ਤੋਂ ਐਪ ਨੂੰ ਸ਼ੁਰੂ ਕਰੋ।

<br/>

<a id="linux-electron"></a>
### ਲੀਨਕਸ (ਇਲੈਕਟ੍ਰਾਨ)

- [ਰਿਲੀਜ਼](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ `x64` ਜਾਂ `arm64` ਮੇਲ ਕਰਨ ਵਾਲਾ `.AppImage` ਡਾਊਨਲੋਡ ਕਰੋ।
- ਚਲਾਓ: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` x86_64/amd64 ਲਈ, ਜਾਂ ARM64 ਉੱਤੇ `...-arm64.AppImage` ਫਾਈਲ ਨਾਮ ਵਰਤੋਂ।
- ਵਾਧੂ ਨਿਰਭਰਤਾਵਾਂ (ਡੀਬੀਅਨ/ਉਬੰਟੂ): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- ਹੋਰ ਜਾਣਕਾਰੀ ਲਈ [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) ਵੇਖੋ।

<br/>

<a id="docker"></a>
### ਡੌਕਰ

- ਪੁੱਲ: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- ਵਾਤਾਵਰਣ ਰਾਹੀਂ ਘੱਟ ਤੋਂ ਘੱਟ ਇੱਕ ਪ੍ਰਦਾਤਾ ਦੀ ਕੁੰਜੀ ਸੈੱਟ ਕਰੋ (ਉਦਾਹਰਣ ਲਈ OpenRouter ਲਈ `OPENROUTER_API_KEY`)। ਰਹੱਸਾਂ ਨੂੰ ਇਮੇਜ ਵਿੱਚ ਨਾ ਸਮੋਣ ਲਈ ਵੇਰੀਏਬਲ ਨੂੰ `-e` ਜਾਂ `docker compose` / `.env` ਰਾਹੀਂ ਪਾਸ ਕਰੋ।
- ਪ੍ਰਦਾਤਾ ਕੁੰਜੀਆਂ **ਵੈੱਬ UI** ਵਿੱਚ ਦਰਜ ਨਹੀਂ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ; ਸਰਵਰ ਉਹਨਾਂ ਨੂੰ ਵਾਤਾਵਰਣ ਵਿੱਚੋਂ ਪੜ੍ਹਦਾ ਹੈ।

ਉਦਾਹਰਨ - ਟਿਕਾਊਤਾ ਲਈ ਨਾਮ ਵਾਲੀ ਵਾਲੀਓਮ (env ਵਿੱਚ OpenRouter ਕੁੰਜੀ ਨਾਲ):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| ਚੋਣ   | ਵਰਣਨ                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| ਪੋਰਟ     | `5000` (ਮੈਪ ਕਰੋ `-p 5000:5000` ਨਾਲ)                                                                              |
| ਵਾਲੀਓਮ   | ਕੌਨਫਿਗ ਅਤੇ ਡੇਟਾਬੇਸ ਟਿਕਾਊਤਾ ਲਈ `/app/data` ਮਾਊਂਟ ਕਰੋ                                                         |
| Env vars | `PORT`, `CONFIG_PATH`, ਤੋਂ ਬਾਅਦ LLM ਕੁੰਜੀ (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - [ਕੌਨਫ਼ੀਗਰੇਸ਼ਨ](#configuration-and-environment) ਵੇਖੋ |

ਸਰੋਤ ਤੋਂ ਬਣਾਉਣ ਅਤੇ ਚਲਾਉਣ ਲਈ: `docker compose up --build -d` ਜਾਂ `pnpm docker:up` - [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) ਵੇਖੋ।

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## OpenRouter API ਕੁੰਜੀ ਪ੍ਰਾਪਤ ਕਰਨਾ

Transrewrt ਮਲਟੀਪਲ AI ਪ੍ਰਦਾਤਾਵਾਂ ਨੂੰ ਸਮਰਥਨ ਦਿੰਦਾ ਹੈ। [OpenRouter](https://openrouter.ai) ਇੱਕ ਪ੍ਰਸਿੱਧ ਚੋਣ ਹੈ ਕਿਉਂਕਿ ਇਹ ਇੱਕੋ ਕੁੰਜੀ ਹੇਠ ਕਈ ਮਾਡਲਾਂ ਨੂੰ ਇਕੱਤਰ ਕਰਦਾ ਹੈ ਅਤੇ ਮੁਫ਼ਤ ਮਾਡਲ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।

1. [openrouter.ai](https://openrouter.ai) 'ਤੇ ਸਾਈਨ ਅੱਪ ਕਰੋ ਜਾਂ ਲਾਗਇਨ ਕਰੋ।
2. [Keys](https://openrouter.ai/keys) ਪੇਜ ਖੋਲ੍ਹੋ ਅਤੇ ਇੱਕ ਨਵੀਂ ਕੁੰਜੀ ਬਣਾਓ (ਇਸ ਦਾ ਨਾਮ ਰੱਖੋ, ਅਤੇ ਵਿਕਲਪਿਕ ਤੌਰ 'ਤੇ ਇੱਕ ਕ੍ਰੈਡਿਟ ਸੀਮਾ ਸੈੱਟ ਕਰੋ)। ਤੁਸੀਂ ਬਿਨਾਂ ਕ੍ਰੈਡਿਟ ਜੋੜੇ ਮੁਫ਼ਤ ਮਾਡਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ।
3. **ਡੈਸਕਟਾਪ (ਇਲੈਕਟ੍ਰਾਨ):** **Settings → API** ਵਿੱਚ ਕੁੰਜੀਆਂ ਪੇਸਟ ਕਰੋ। **ਡਾਕਰ:** `OPENROUTER_API_KEY` ਵਰਗੇ env ਵੇਰੀਏਬਲ ਸੈੱਟ ਕਰੋ (ਵੇਖੋ [Quick start](#quick-start))।

ਟਰਾਂਸਲੇਟ, ਰੀਆਰਾਈਟ ਜਾਂ ਟਰਾਂਸਫਾਰਮ ਲਈ OpenRouter ਦੇ **ਬਾਡੀ ਬਿਲਡਰ** ਮਾਡਲ ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) ਦੀ ਵਰਤੋਂ ਨਾ ਕਰੋ: ਇਹ ਉਹਨਾਂ ਕਾਰਜਾਂ ਲਈ ਪੂਰਾ ਹੋਇਆ ਪਾਠ ਨਹੀਂ ਸਗੋਂ JSON ਰਿਕੁਐਸਟ ਪੇਲੋਡ ਵਾਪਸ ਕਰਦਾ ਹੈ। ਪੂਰਨ ਸੈਟਿੰਗਾਂ ਬਾਰੇ ਵੇਰਵੇ ਲਈ ਵਰਤੋਂਕਰਤਾ ਗਾਈਡ ਵਿੱਚ [Settings → Models](USER-GUIDE.pa.md#models) ਵੇਖੋ।

ਤੁਸੀਂ ਹੋਰ ਪ੍ਰਦਾਤਾਵਾਂ (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ਦੀ ਵੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ ਜਾਂ [Ollama](https://ollama.com) ਨਾਲ ਮਾਡਲ ਸਥਾਨਕ ਤੌਰ 'ਤੇ ਚਲਾ ਸਕਦੇ ਹੋ। ਸਮਰਥਿਤ ਪ੍ਰਦਾਤਾਵਾਂ ਅਤੇ ਪਰਯਾਵਰਨ ਵੇਰੀਏਬਲਾਂ ਦੀ ਪੂਰੀ ਸੂਚੀ ਲਈ [Configuration](#configuration-and-environment) ਵੇਖੋ।

> ⚠️ **ਚੇਤਾਵਨੀ**<br/>
> ਜੇਕਰ ਤੁਸੀਂ ਕਿਸੇ ਹੋਰ ਡਿਵਾਈਸ, ਕੰਟੇਨਰ ਜਾਂ ਸੇਵਾ ਤੋਂ Ollama ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੇ ਹੋ, ਤਾਂ ਯਾਦ ਰੱਖੋ ਕਿ Ollama ਨੂੰ ਬਾਹਰੀ ਕਨੈਕਸ਼ਨਾਂ ਨੂੰ ਆਗਿਆ ਦੇਣ ਲਈ ਕਾਨਫ਼ੀਗਰ ਕਰੋ (ਸਿਰਫ਼ localhost ਨਹੀਂ)।

ਸੀਮਾਵਾਂ, BYOK, ਅਤੇ ਹੋਰ ਜਾਣਕਾਰੀ ਲਈ, [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication) ਵੇਖੋ।

<br/><br/>

<a id="configuration-and-environment"></a>
## ਕਨਫਿਗਰੇਸ਼ਨ ਅਤੇ ਪਰਯਾਵਰਨ

**ਕਨਫਿਗ ਫਾਈਲ ਸਥਾਨ**

| ਡਿਪਲੌਇਮੈਂਟ         | ਕਨਫਿਗ ਸਥਾਨ                                   |
| ------------------ | ------------------------------------------------- |
| ਇਲੈਕਟ੍ਰਾਨ (ਵਿੰਡੋਜ਼) | `%APPDATA%\transrewrt\`                           |
| ਇਲੈਕਟ੍ਰਾਨ (ਲੀਨਕਸ)   | `~/.config/transrewrt/`                           |
| ਵੈੱਬ / ਡਾਕਰ       | `/app/data/config.json` (ਬਚਾਉਣ ਲਈ ਇੱਕ ਵਾਲੀਊਮ ਦੀ ਵਰਤੋਂ ਕਰੋ) |

<br/>

**ਪਰਯਾਵਰਨ ਵੇਰੀਏਬਲ** (ਸਿਰਫ਼ ਵੈੱਬ/ਡਾਕਰ; ਇਲੈਕਟ੍ਰਾਨ ਸਥਾਨਕ ਕਨਫਿਗ ਫਾਈਲ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ)

| ਵੇਰੀਏਬਲ         | ਮੂਲ         | ਵਿਵਰਣ |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | ਸਰਵਰ ਲੀਸਨਿੰਗ ਪੋਰਟ |
| `CONFIG_PATH`    | `/app/data/config.json` | ਕਨਫਿਗ ਫਾਈਲ ਦਾ ਮਾਰਗ |
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

ਤੁਸੀਂ ਸਿਰਫ਼ ਉਹਨਾਂ ਪ੍ਰਦਾਤਾਵਾਂ ਨੂੰ ਕਾਨਫ਼ੀਗਰ ਕਰੋ ਜੋ ਤੁਸੀਂ ਵਰਤ ਰਹੇ ਹੋ। ਮਾਡਲ ID ਨੇਮਸਪੇਸ ਵਿੱਚ ਹਨ (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ਆਦਿ)।

**ਖਰਚ ਪ੍ਰਦਰਸ਼ਨ:** ਜਦੋਂ ਲਾਗੂ ਹੋਵੇ, OpenRouter ਠੀਕ ਬਿੱਲ ਕੀਤੀ ਲਾਗਤ ਵਾਪਸ ਕਰਦਾ ਹੈ। ਹੋਰ ਪ੍ਰਦਾਤਾ OpenRouter ਕੁੰਜੀ ਉਪਲਬਧ ਹੋਣ ਸਮੇਂ OpenRouter ਦੀਆਂ ਜਨਤਕ ਮਾਡਲ ਕੀਮਤਾਂ ਤੋਂ **ਅਨੁਮਾਨਿਤ** ਲਾਗਤ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਨ; ਇਸ ਤੋਂ ਬਿਨਾਂ, non-OpenRouter ਲਾਗਤ `0` ਵਜੋਂ ਦਿਖਾਈ ਸਕਦੀ ਹੈ। ਅਨੁਮਾਨ ਬਿੱਲ ਨਹੀਂ ਹੁੰਦੇ।

<br/>

**ਡਾਟਾ ਅਤੇ ਪਰਸਿਸਟੈਂਸ:** ਡਾਕਰ ਲਈ, `/app/data` 'ਤੇ ਇੱਕ ਵਾਲੀਊਮ ਮਾਊਂਟ ਕਰੋ ਤਾਂ ਜੋ `config.json` ਅਤੇ SQLite ਡੇਟਾਬੇਸ ਕੰਟੇਨਰ ਨੂੰ ਮੁੜ ਸ਼ੁਰੂ ਕਰਨ ਦੌਰਾਨ ਵੀ ਬਚਿਆ ਰਹੇ। ਬਿਨਾਂ ਵਾਲੀਊਮ ਦੇ, ਕੰਟੇਨਰ ਰੁਕਣ ਸਮੇਂ ਸਾਰਾ ਡਾਟਾ ਖ਼ਤਮ ਹੋ ਜਾਂਦਾ ਹੈ।

**ਡਵੈਲਪਰਜ਼:** ਜੇਕਰ ਤੁਹਾਡੀ ਸਥਾਨਕ ਫਾਈਲ ਹਟਾਏ ਗਏ ਫੀਲਡਾਂ (`api_key`, `api_url`, ਪ੍ਰਾਕਸੀ ਵਿਕਲਪ) ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੀ ਹੈ ਤਾਂ ਪੁਰਾਣੇ single-key ਕਨਫਿਗ ਨੂੰ ਬਦਲਣ ਵਾਲੇ ਪਰਿਵਰਤਨ ਖਿੱਚਣ ਤੋਂ ਬਾਅਦ, `data/config.json` ਨੂੰ `src/config-defaults/config_default.json` ਵਿਚਲੇ ਨਵੇਂ ਡਿਫ਼ਾਲਟ ਫਾਰਮ ਨਾਲ ਰੀਸੈੱਟ ਜਾਂ ਮਰਜ਼ ਕਰੋ।

<br/>

**ਵੈੱਬ ਪ੍ਰਮਾਣੀਕਰਨ:**

- ਡਿਫ਼ਾਲਟ ਐਡਮਿਨ: `admin` / `transrewrt26`.
- **Settings → Users** ਵਿੱਚ ਉਪਭੋਗਤਾ ਪਰਬੰਧਿਤ ਕਰੋ।
- ਪਾਸਵਰਡ ਰੀਸੈੱਟ ਕਰੋ: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (ਸਰੋਤ ਤੋਂ: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ਚੇਤਾਵਨੀ**<br/>
> ਕਿਸੇ ਵੀ ਨੈੱਟਵਰਕ-ਐਕਸੈਸਯੋਗ ਹੋਸਟ 'ਤੇ ਡਿਫ਼ਾਲਟ ਐਡਮਿਨ ਪਾਸਵਰਡ ਤੁਰੰਤ ਬਦਲੋ।

<br/>

ਮੁੱਖ ਸੈਟਿੰਗਾਂ (ਫਾਂਟ, ਮਾਡਲ, ਭਾਸ਼ਾਵਾਂ, ਆਦਿ) ਐਪਲੀਕੇਸ਼ਨ ਸੈਟਿੰਗਾਂ ਵਿੱਚ ਉਪਲਬਧ ਹਨ।

<br/><br/>

<a id="development-and-architecture"></a>

## ਵਿਕਾਸ ਅਤੇ ਆਰਕੀਟੈਕਚਰ

- **ਵਿਕਾਸ:** ਸੈਟਅੱਪ, ਬਿਲਡ, ਟੈਸਟ, ਅਤੇ ਡਿਪਲੌਇੰਟ (Electron, Web, Docker) - ਦੇਖੋ **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **ਆਰਕੀਟੈਕਚਰ ਅਤੇ ਸਿਸਟਮ ਦਾ ਜਨਰਲ ਵਿਚਾਰ:** ਫੋਲਡਰ ਸਟਰਕਚਰ, ਟੈਕ ਸਟੈਕ, ਡਿਜ਼ਾਈਨ ਦੇ ਫੈਸਲੇ - ਦੇਖੋ **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## ਰਿਲੀਜ਼ ਅਤੇ ਟੈਗ

- **Git ਟੈਗ** `v`* (ਮਿਸਾਲ `v1.0.10`) [ਰਿਲੀਜ਼ ਵਰਕਫਲੋ](.github/workflows/release.yml) ਨੂੰ ਟਰਿੱਗਰ ਕਰਦੇ ਹਨ। **GitHub ਰਿਲੀਜ਼** ਵਿੰਡੋਜ਼ ਇੰਸਟਾਲਰ (`.exe`) ਅਤੇ ਲੀਨਕਸ AppImages (**x64** ਅਤੇ **arm64**) ਨੂੰ ਜੋੜਦੇ ਹਨ।
- **Docker ਇਮੇਜ** `ghcr.io/wsj-br/transrewrt` ਨੂੰ ਪ੍ਰਕਾਸ਼ਿਤ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ। ਇਮੇਜ ਟੈਗ Git ਵਰਜਨ ਨਾਲ ਮੇਲ ਖਾਂਦੇ ਹਨ (ਮਿਸਾਲ `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) ਅਤੇ `latest` ਨਾਲ। ਮਲਟੀ-ਆਰਕ: `linux/amd64` ਅਤੇ `linux/arm64` (ਮਿਸਾਲ, Raspberry Pi)।

<br/><br/>

<a id="contributing"></a>
## ਯੋਗਦਾਨ

1. ਰੀਪੋਜ਼ੀਟਰੀ ਨੂੰ ਫੋਰਕ ਕਰੋ।
2. ਇੱਕ ਫੀਚਰ ਬਰਾਂਚ ਬਣਾਓ: `git checkout -b feature/my-feature`
3. ਆਪਣੇ ਬਦਲਾਅ ਵੈੱਖ ਸੁਨੇਹੇ ਨਾਲ ਕਮਿਟ ਕਰੋ।
4. ਧੱਕੋ (ਪੁਸ਼) ਅਤੇ `main` ਉੱਤੇ ਇੱਕ ਪੁਲ ਰਿਕੁਐਸਟ ਖੋਲ੍ਹੋ।

ਮੰਨ ਲਓ ਵਿਚਾਲੇ ਕੋਡ ਸਟਾਈਲ ਨੂੰ ਲਾਗੂ ਕਰੋ ਅਤੇ ਪੇਸ਼ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ Electron ਅਤੇ ਵੈੱਬ ਦੋਵਾਂ ਮੋਡਾਂ ਵਿੱਚ ਆਪਣੇ ਬਦਲਾਅ ਦੀ ਜਾਂਚ ਕਰੋ। [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) ਵਿੱਚ ਬਿਲਡ ਅਤੇ ਟੈਸਟ ਦੀਆਂ ਹਦਾਇਤਾਂ ਵੇਖੋ।

<br/>

**ਮੁੱਦਿਆਂ ਦੀ ਰਿਪੋਰਟ ਕਰਨਾ:** [GitHub](https://github.com/wsj-br/transrewrt/issues) 'ਤੇ ਇੱਕ ਮੁੱਦਾ ਖੋਲ੍ਹੋ। ਆਪਣੇ ਪਲੇਟਫਾਰਮ (Windows / Linux / Docker) ਅਤੇ ਐਪ ਦੇ ਵਰਜਨ (ਅਬਾਊਟ ਡਾਇਲਾਗ ਵਿੱਚ ਦਿਖਾਇਆ ਗਿਆ ਜਾਂ ਰਿਲੀਜ਼ ਪੇਜ 'ਤੇ) ਸ਼ਾਮਲ ਕਰੋ।

<br/><br/>

<a id="disclaimer"></a>
## ਅਸਵੀਕ੍ਰਿਤੀ

ਉਤਪਾਦਾਂ ਦੇ ਨਾਮ ਅਤੇ ਆਈਕਨ ਆਪਣੇ ਸੰਬੰਧਤ ਮਾਲਕਾਂ ਦੇ ਹੁੰਦੇ ਹਨ ਅਤੇ ਸਿਰਫ਼ ਪਛਾਣ ਦੇ ਉਦੇਸ਼ਾਂ ਲਈ ਵਰਤੇ ਜਾਂਦੇ ਹਨ। ਇਹ ਸਾਫਟਵੇਅਰ ਜ਼ਿਕਰ ਕੀਤੀਆਂ ਕਿਸੇ ਵੀ ਬ੍ਰਾਂਡਾਂ ਨਾਲ ਸੰਬੰਧਿਤ ਜਾਂ ਮਨਜ਼ੂਰਸ਼ੁਦਾ ਨਹੀਂ ਹੈ।

<br/><br/>

<a id="license"></a>
## ਲਾਇਸੈਂਸ

Copyright © 2026 ਵਾਲਡੇਮਾਰ ਸਕੁਡੈਲਰ ਜੂਨੀਅਰ।

[Apache License 2.0](LICENSE)