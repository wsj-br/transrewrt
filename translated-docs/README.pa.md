---
translated_at: "2026-03-27T23:14:13.383Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt ਲੋਗੋ" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="ਸੰਸਕਰਨ"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="ਲਾਈਸੈਂਸ: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="ਪਲੇਟਫਾਰਮ">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

ਕਲਾਤਮਕ ਬੁੱਧੀ ਨਾਲ ਸੰਚਾਲਿਤ ਪਾਠ ਟੂਲ: ਕਈ ਭਾਸ਼ਾਵਾਂ ਵਿਚ ਅਨੁਵਾਦ ਕਰੋ, ਵੱਖ-ਵੱਖ ਸ਼ੈਲੀਆਂ ਵਿਚ ਪੁਨਰ-ਲਿਖੋ, ਅਤੇ ਕਸਟਮ ਪ੍ਰੇਰਕਾਂ ਨਾਲ ਰੂਪਾਂਤਰਿਤ ਕਰੋ — ਕਈ ਐਆਈ ਪ੍ਰਦਾਤਾਵਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, ਅਤੇ ਸਥਾਨਕ Ollama)। ਡੈਸਕਟਾਪ ਐਪ (Electron) ਜਾਂ ਆਪਣੇ ਸਰਵਰ 'ਤੇ ਵੈੱਬ ਐਪ (Docker) ਵਜੋਂ ਚਲਦਾ ਹੈ।

- **ਅਨੁਵਾਦ** — ਦਰਜਨਾਂ ਭਾਸ਼ਾਵਾਂ ਵਿਚਕਾਰ, ਸਵੈਚਲਿਤ ਸਰੋਤ ਪਛਾਣ ਨਾਲ
- **ਪੁਨਰ-ਲਿਖੋ** — ਵਿਆਕਰਨ ਸੁਧਾਰੋ, ਸਪਸ਼ਟਤਾ ਵਧਾਓ, ਔਪਚਾਰਿਕ/ਅਨੌਪਚਾਰਿਕ, ਛੋਟਾ ਕਰੋ, ਵਧਾਓ, ਤਕਨੀਕੀ
- **ਰੂਪਾਂਤਰਿਤ** — ਕਸਟਮ ਐਆਈ ਪ੍ਰੇਰਕ; ਪ੍ਰੇਰਕ ਬਣਾਓ ਅਤੇ ਪਰਬੰਧਿਤ ਕਰੋ, ਹਰੇਕ ਪ੍ਰੇਰਕ ਲਈ ਨਿਸ਼ਾਨਾ ਭਾਸ਼ਾ ਵਿਕਲਪਿਕ
- **ਇਤਿਹਾਸ** — ਪੂਰਾ ਚਲਾਉਣ ਇਤਿਹਾਸ ਇਨਪੁਟ/ਆਉਟਪੁਟ ਪਾਠ ਨਾਲ, ਫਿਲਟਰਿੰਗ, ਅਤੇ ਨਿਰਯਾਤ
- **ਮਾਡਲ ਅਤੇ ਲਾਗਤ** — ਕਿਸੇ ਵੀ ਸੰਰਚਿਤ ਪ੍ਰਦਾਤਾ ਵਿਚੋਂ ਮਾਡਲ ਚੁਣੋ; ਲਾਗਤ ਅਤੇ ਵਰਤੋਂ ਡੈਸ਼ਬੋਰਡ ਲੌਗ, ਮਾਡਲ/ਆਪਰੇਸ਼ਨ/ਦਿਨ ਦੁਆਰਾ ਸਾਰਾਂਸ਼ ਨਾਲ
- **ਯੂਆਈ** — ਬਹੁ-ਭਾਸ਼ੀ ਇੰਟਰਫੇਸ (30+ ਭਾਸ਼ਾਵਾਂ, RTL ਸਹਾਇਤਾ), ਫਾਂਟ, ...
- **ਵੈਬ ਮੋਡ** — ਐਡਮਿਨ ਰੋਲਾਂ ਨਾਲ ਬਹੁ-ਉਪਭੋਗਤਾ ਸਹਿਯੋਗ
- **ਡੈਸਕਟਾਪ** — ਵਿੰਡੋਜ਼ ਅਤੇ ਲੀਨਕਸ ਲਈ ਐਲੇਕਟ੍ਰਾਨ ਐਪ
- **ਸਵੈ-ਹੋਸਟ** — amd64 ਅਤੇ arm64 (ਰਾਸਪਬੇਰੀ ਪਾਈ-ਤਿਆਰ) ਲਈ ਡਾਕਰ ਇਮੇਜ

ਇੰਸਟਾਲ ਹੋਣ ਤੋਂ ਬਾਅਦ, ਸਾਰੇ ਫੀਚਰਾਂ ਦੀ ਪੂਰੀ ਸਮਝ ਲਈ **[ਯੂਜ਼ਰ ਗਾਈਡ](USER-GUIDE.pa.md)** ਦੇਖੋ।

<small>**ਹੋਰ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਪੜ੍ਹੋ:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **ਯੂਆਈ ਅਤੇ ਦਸਤਾਵੇਜ਼ੀਕਰਨ ਅਨੁਵਾਦ ਬਾਰੇ ਨੋਟ:** ਮੂਲ ਅੰਗਰੇਜ਼ੀ (ਯੂਕੇ) ਨੂੰ ਛੱਡ ਕੇ ਸਾਰੀਆਂ ਇੰਟਰਫੇਸ ਭਾਸ਼ਾਵਾਂ
> ਐਆਈ ਮਾਡਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਅਨੁਵਾਦਿਤ ਕੀਤੀਆਂ ਗਈਆਂ ਹਨ; ਸ਼ਬਦਸੀਮਾ ਅਸ਼ੁੱਧ ਹੋ ਸਕਦੀ ਹੈ ਜਾਂ ਇਰਾਦਤਨ ਗਲਤੀਆਂ ਹੋ ਸਕਦੀਆਂ ਹਨ।

</small>

<br/>

<a id="screenshots"></a>

## ਸਕਰੀਨਸ਼ਾਟ

**ਭਾਸ਼ਾ ਚੋਣਕਰਤਾ**

![ਭਾਸ਼ਾ ਚੋਣਕਰਤਾ](../images/screenshots/pa/language-selector.png)

**ਅਨੁਵਾਦ ਕਰੋ**

![ਅਨੁਵਾਦ ਕਰੋ](../images/screenshots/pa/translate.png)

**ਰੂਪਾੰਤਰ - ਪ੍ਰੌਪਟ ਸੰਪਾਦਕ**

![ਰੂਪਾੰਤਰ - ਪ੍ਰੌਪਟ ਸੰਪਾਦਕ](../images/screenshots/pa/transform-prompt-edit.png)

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

- [ਤੇਜ਼ੀ ਨਾਲ ਸ਼ੁਰੂਆਤ](#quick-start)
- [ਸਥਾਪਤਾ](#installation)
  - [ਵਿੰਡੋਜ਼ (ਇਲੈਕਟ੍ਰਾਨ)](#windows-electron)
  - [ਲੀਨਕਸ (ਇਲੈਕਟ੍ਰਾਨ)](#linux-electron)
  - [ਡਾਕਰ](#docker)
- [ਓਪਨਰਾਊਟਰ API ਕੁੰਜੀ ਪ੍ਰਾਪਤ ਕਰਨਾ](#getting-an-openrouter-api-key)
- [ਕਨਫਿਗਰੇਸ਼ਨ ਅਤੇ ਵਾਤਾਵਰਣ](#configuration-and-environment)
- [ਵਿਕਾਸ ਅਤੇ ਆਰਕੀਟੈਕਚਰ](#development-and-architecture)
- [ਰਿਲੀਜ਼ ਅਤੇ ਟੈਗ](#releases-and-tags)
- [ਯੋਗਦਾਨ](#contributing)
- [ਅਸਵੀਕਰਣ](#disclaimer)
- [ਲਾਇਸੈਂਸ](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## ਤੁਰੰਤ ਸ਼ੁਰੂਆਤ

**ਡੌਕਰ (ਸੈਲਫ਼-ਹੋਸਟਿੰਗ ਲਈ ਸਿਫਾਰਸ਼ ਕੀਤਾ ਗਿਆ)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` ਨੂੰ ਆਪਣੀ [OpenRouter API ਕੁੰਜੀ](https://openrouter.ai/keys) ਨਾਲ ਬਦਲੋ (ਜਾਂ ਹੋਰ ਪ੍ਰਦਾਤਾ ਕੁੰਜੀਆਂ ਸੈੱਟ ਕਰੋ; ਵੇਖੋ [ਕਨਫਿਗਰੇਸ਼ਨ](#configuration-and-environment)). [http://localhost:5000](http://localhost:5000) ਖੋਲ੍ਹੋ ਅਤੇ ਸੇਵਾ ਨੂੰ ਪ੍ਰਦਰਸ਼ਿਤ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਡਿਫਾਲਟ ਐਡਮਿਨ ਪਾਸਵਰਡ ਬਦਲੋ।

<br/>

> ℹ️ **ਨੋਟ**<br/>
> ਡੌਕਰ ਵਿੱਚ, ਐੱਲਐੱਲਐੱਮ ਪ੍ਰਮਾਣ ਪੱਤਰਾਂ ਨੂੰ `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (ਵੈੱਬ ਯੂਆਈ ਵਿੱਚ ਨਹੀਂ) ਵਰਗੇ ਮਾਹੌਲ ਵੇਰੀਏਬਲਾਂ ਨਾਲ ਸੈੱਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ। ਡੈਸਕਟਾਪ (ਇਲੈਕਟ੍ਰਾਨ) ਵਿੱਚ ਤੁਸੀਂ **ਸੈਟਿੰਗਜ਼ → ਏਪੀਆਈ** ਵਿੱਚ ਕੁੰਜੀਆਂ ਦਾ ਕੰਫੀਗਰ ਕਰਦੇ ਹੋ।

<br/>

**ਵਿੰਡੋਜ਼**

[ਰਿਲੀਜ਼ਾਂ](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ ਨਵੀਂ ਵਰਜਨ `Transrewrt Setup x.y.z.exe` ਡਾਊਨਲੋਡ ਕਰੋ, ਇੰਸਟਾਲਰ ਨੂੰ ਚਲਾਓ, ਫਿਰ ਸਟਾਰਟ ਮੇਨੂ ਜਾਂ ਡੈਸਕਟਾਪ ਸ਼ਾਰਟਕੱਟ ਤੋਂ ਲਾਂਚ ਕਰੋ। ਆਪਣੀਆਂ ਏਪੀਆਈ ਕੁੰਜੀਆਂ **ਸੈਟਿੰਗਜ਼ → ਏਪੀਆਈ** ਵਿੱਚ ਦਿਓ। ਤੁਹਾਨੂੰ ਘੱਟੋ ਘੱਟ ਇੱਕ ਪ੍ਰਦਾਤਾ ਨੂੰ ਕੰਫੀਗਰ ਕਰਨਾ ਚਾਹੀਦਾ ਹੈ, ਮੁਫ਼ਤ ਮਾਡਲਾਂ ਲਈ OpenRouter ਆਮ ਵਰਤੀ ਜਾਂਦੀ ਹੈ।

<br/>

**ਲੀਨੈਕਸ**

ਆਪਣੇ ਸੀਪੀਯੂ ਲਈ `.AppImage` [ਰਿਲੀਜ਼ਾਂ](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ ਡਾਊਨਲੋਡ ਕਰੋ (`x64` ਸਧਾਰਨ ਪੀਸੀ ਲਈ, `arm64` ਬਹੁਤ ਸਾਰੇ ਐਆਰਐਮ ਉਪਕਰਣਾਂ ਲਈ, ਰਸਪਬੇਰੀ ਪਾਈ 4+ ਸਮੇਤ), ਫਿਰ:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

ਆਪਣੀਆਂ API ਕੁੰਜੀਆਂ **Settings → API** ਵਿੱਚ ਦਿਓ। ਤੁਹਾਨੂੰ ਘੱਟੋ ਘੱਟ ਇੱਕ ਪ੍ਰਦਾਤਾ ਨੂੰ ਕੰਫੀਗਰ ਕਰਨ ਦੀ ਲੋੜ ਹੈ, ਮੁਫਤ ਮਾਡਲਾਂ ਲਈ OpenRouter ਆਮ ਵਰਤੀ ਜਾਂਦੀ ਹੈ।

ਡੀਬੀਅਨ/ਉਬੰਟੂ ਉੱਤੇ, ਤੁਹਾਨੂੰ ਪਹਿਲਾਂ ਕੁੱਝ ਵਾਧੂ ਨਿਰਭਰਤਾਵਾਂ ਇੰਸਟਾਲ ਕਰਨ ਦੀ ਲੋੜ ਹੋ ਸਕਦੀ ਹੈ:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

ਵੇਰਵੇ ਲਈ [ਇੰਸਟਾਲੇਸ਼ਨ → ਲੀਨੈਕਸ](#linux-electron) ਵੇਖੋ।

<br/>

> ℹ️ **ਨੋਟ**<br/>
> ਮੈਕਓਐਸ ਮੌਜੂਦਾ ਸਮੇਂ ਲਈ ਸਹਿਯੋਗ ਨਹੀਂ ਕਰਦਾ। Transrewrt ਵਿੰਡੋਜ਼, ਲੀਨੈਕਸ ਅਤੇ ਡੌਕਰ ਲਈ ਉਪਲਬਧ ਹੈ।

<br/>

ਐਪ ਚਲ ਰਿਹਾ ਹੋਵੇ, ਤਾਂ ਪਾਠ ਨੂੰ ਅਨੁਵਾਦ, ਪੁਨਰ ਲਿਖਣ ਅਤੇ ਰੂਪ ਬਦਲਣ, ਪ੍ਰਾਮਿਟ ਪਰਬੰਧਨ ਕਰਨ ਅਤੇ ਮਾਡਲਾਂ ਦੀ ਕਨਫਿਗਰੇਸ਼ਨ ਲਈ **[ਯੂਜ਼ਰ ਗਾਈਡ](USER-GUIDE.pa.md)** ਵੇਖੋ।

<br/><br/>

<a id="installation"></a>

## ਇੰਸਟਾਲੇਸ਼ਨ

<a id="windows-electron"></a>
### ਵਿੰਡੋਜ਼ (ਇਲੈਕਟ੍ਰਾਨ)

- [ਰਿਲੀਜ਼](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ ਨਵੀਂਤਮ ਇੰਸਟਾਲਰ ਡਾਊਨਲੋਡ ਕਰੋ।
- `.exe` ਚਲਾਓ ਅਤੇ ਇੰਸਟਾਲਰ ਦੀ ਪਾਲਣਾ ਕਰੋ।
- ਪਹਿਲੀ ਵਾਰ ਚਲਾਉਣਾ: ਸਟਾਰਟ ਮੇਨੂ ਜਾਂ ਡੈਸਕਟਾਪ ਸ਼ਾਰਟਕੱਟ ਤੋਂ ਐਪ ਨੂੰ ਸ਼ੁਰੂ ਕਰੋ।

<br/>

<a id="linux-electron"></a>
### ਲੀਨਕਸ (ਇਲੈਕਟ੍ਰਾਨ)

- [ਰਿਲੀਜ਼](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ ਮੈਚ ਕਰਦਾ `.AppImage` (`x64` ਜਾਂ `arm64`) ਡਾਊਨਲੋਡ ਕਰੋ।
- ਚਲਾਓ: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` x86_64/amd64 'ਤੇ, ਜਾਂ ARM64 'ਤੇ `...-arm64.AppImage` ਫਾਈਲ ਨਾਮ ਦੀ ਵਰਤੋਂ ਕਰੋ।
- ਵਾਧੂ ਡਿਪੈਂਡੇਂਸੀਜ਼ (ਡੈਬੀਅਨ/ਊਬੰਟੂ): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- ਹੋਰ ਲਈ [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) ਵੇਖੋ।

<br/>

<a id="docker"></a>
### ਡੌਕਰ

- ਖਿੱਚੋ: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- ਘੱਟ ਇੱਕ ਪ੍ਰਦਾਤਾ ਕੁੰਜੀ ਵਾਤਾਵਰਣ ਰਾਹੀਂ ਸੈੱਟ ਕਰੋ (ਉਦਾਹਰਨ ਲਈ `OPENROUTER_API_KEY` OpenRouter ਲਈ)। ਚਰ ਨੂੰ `-e` ਜਾਂ `docker compose` / `.env` ਰਾਹੀਂ ਪਾਸ ਕਰੋ ਤਾਂ ਜੋ ਰਹਸਿਆ ਇਮੇਜ ਵਿੱਚ ਨਾ ਬੇਕ ਹੋਣ।
- ਪ੍ਰਦਾਤਾ ਕੁੰਜੀਆਂ ਵੈੱਬ UI ਵਿੱਚ **ਨਹੀਂ** ਦਰਜ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ; ਸਰਵਰ ਉਹਨਾਂ ਨੂੰ ਵਾਤਾਵਰਣ ਤੋਂ ਪੜ੍ਹਦਾ ਹੈ।

ਉਦਾਹਰਨ - ਸਥਾਈਤਾ ਲਈ ਨਾਮਤ ਵਾਲੀਉਮ (env ਰਾਹੀਂ OpenRouter ਕੁੰਜੀ):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

ਜਾਂ ਜੇਕਰ ਤੁਸੀਂ ਡੌਕਰ ਕੰਪੋਜ਼ ਦੀ ਵਰਤੋਂ ਕਰਨਾ ਪਸੰਦ ਕਰਦੇ ਹੋ, ਤਾਂ ਵਰਤੋ:

# ਕੰਪੋਜ਼ ਫਾਇਲ ਡਾਊਨਲੋਡ ਕਰੋ
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# API_KEYS ਸ਼ਾਮਲ ਕਰਨ ਲਈ ਫਾਇਲ ਨੂੰ ਸੋਧੋ
vi transrewrt.yml
# ਕੰਟੇਨਰ ਨੂੰ ਸ਼ੁਰੂ ਕਰੋ
docker compose -f transrewrt.yml up -d
```

<br/>

| ਚੋਣ   | ਵਰਣਨ                                                                                                                            |
|--------|----------------------------------------------------------------------------------------------------------------------------------|
| ਪੋਰਟ     | `5000` ( `-p 5000:5000` ਨਾਲ ਮੈਪ ਕਰੋ)                                                                                          |
| ਵਾਲੀਊਮ   | ਕੌਨਫਿਗ ਅਤੇ ਡੇਟਾਬੇਸ ਨੂੰ ਬਰਕਰਾਰ ਰੱਖਣ ਲਈ `/app/data` ਮਾਊਂਟ ਕਰੋ                                                                  |
| ਐਨਵੀ ਵੇਅਰ   | `PORT`, `CONFIG_PATH`, ਅਤੇ LLM ਕੁੰਜੀਆਂ (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - [ਕੌਨਫਿਗਰੇਸ਼ਨ](#configuration-and-environment) ਵੇਖੋ |

ਸਰੋਤ ਤੋਂ ਬਿਲਡ ਕਰਨ ਅਤੇ ਚਲਾਉਣ ਲਈ: `docker compose up --build -d` ਜਾਂ `pnpm docker:up` - [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) ਵੇਖੋ।

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## ਓਪਨਰਾਊਟਰ API ਕੁੰਜੀ ਪ੍ਰਾਪਤ ਕਰਨਾ

ਟਰਾਂਸਰੀਵਰਟ ਮਲਟੀਪਲ ਏਆਈ ਪ੍ਰਦਾਤਾਵਾਂ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ। [OpenRouter](https://openrouter.ai) ਇੱਕ ਪ੍ਰਸਿੱਧ ਵਿਕਲਪ ਹੈ ਕਿਉਂਕਿ ਇਹ ਇੱਕੋ ਕੁੰਜੀ ਹੇਠ ਬਹੁਤ ਸਾਰੇ ਮਾਡਲਾਂ ਨੂੰ ਇਕੱਠਾ ਕਰਦਾ ਹੈ ਅਤੇ ਮੁਫ਼ਤ ਮਾਡਲ ਪੇਸ਼ ਕਰਦਾ ਹੈ।

1. [openrouter.ai](https://openrouter.ai) 'ਤੇ ਸਾਈਨ ਅੱਪ ਕਰੋ ਜਾਂ ਲਾਗਇਨ ਕਰੋ।
2. [Keys](https://openrouter.ai/keys) ਪੇਜ ਖੋਲ੍ਹੋ ਅਤੇ ਇੱਕ ਨਵੀਂ ਕੁੰਜੀ ਬਣਾਓ (ਇਸਦਾ ਨਾਮ ਦਿਓ, ਅਤੇ ਚਾਹੋ ਤਾਂ ਕ੍ਰੈਡਿਟ ਸੀਮਾ ਸੈੱਟ ਕਰੋ)। ਤੁਸੀਂ ਕ੍ਰੈਡਿਟ ਜੋੜੇ ਬਿਨਾਂ ਮੁਫ਼ਤ ਮਾਡਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ।
3. **ਡੈਸਕਟਾਪ (ਇਲੈਕਟ੍ਰਾਨ):** **ਸੈਟਿੰਗਜ਼ → API** ਵਿੱਚ ਕੁੰਜੀ ਪੇਸਟ ਕਰੋ। **ਡੌਕਰ:** `OPENROUTER_API_KEY` ਵਰਗੇ env ਵੇਰੀਏਬਲ ਸੈੱਟ ਕਰੋ (ਵੇਖੋ [ਤੇਜ਼ ਸ਼ੁਰੂਆਤ](#quick-start))।

ਅਨੁਵਾਦ, ਮੁੜ ਲਿਖਣ ਜਾਂ ਪਰਿਵਰਤਨ ਲਈ ਓਪਨਰਾਊਟਰ ਦੇ **ਬਾਡੀ ਬਿਲਡਰ** ਮਾਡਲ ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) ਦੀ ਵਰਤੋਂ ਨਾ ਕਰੋ: ਇਹ ਕੰਮਾਂ ਲਈ JSON ਰਿਕੁਐਸਟ ਪੇਲੋਡ ਵਾਪਸ ਕਰਦਾ ਹੈ, ਪੂਰੀ ਹੋਈ ਟੈਕਸਟ ਨਹੀਂ। ਵਰਤੋਂਕਰਤਾ ਮਾਰਗਦਰਸ਼ਿਕਾ ਵਿੱਚ [ਸੈਟਿੰਗਜ਼ → ਮਾਡਲ](USER-GUIDE.pa.md#models) ਵੇਖੋ।

ਤੁਸੀਂ ਹੋਰ ਪ੍ਰਦਾਤਾਵਾਂ (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ਦੀ ਵਰਤੋਂ ਵੀ ਕਰ ਸਕਦੇ ਹੋ ਜਾਂ [Ollama](https://ollama.com) ਨਾਲ ਮਾਡਲ ਸਥਾਨਕ ਤੌਰ 'ਤੇ ਚਲਾ ਸਕਦੇ ਹੋ। ਸਮਰਥਤ ਪ੍ਰਦਾਤਾਵਾਂ ਅਤੇ ਵਾਤਾਵਰਣ ਚਲਨ ਦੀ ਪੂਰੀ ਸੂਚੀ ਲਈ [ਕਾਨਫਿਗ੍ਰੇਸ਼ਨ](#configuration-and-environment) ਵੇਖੋ।

> ⚠️ **ਚੇਤਾਵਨੀ**<br/>
> ਜੇਕਰ ਤੁਸੀਂ ਕਿਸੇ ਹੋਰ ਡਿਵਾਈਸ, ਕੰਟੇਨਰ, ਜਾਂ ਸੇਵਾ ਤੋਂ Ollama ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੇ ਹੋ, ਤਾਂ Ollama ਨੂੰ ਬਾਹਰੀ ਕਨੈਕਸ਼ਨ (ਸਿਰਫ਼ localhost ਨਹੀਂ) ਦੀ ਆਗਿਆ ਦੇਣ ਲਈ ਕਾਨਫਿਗਰ ਕਰਨਾ ਯਾਦ ਰੱਖੋ।

ਸੀਮਾਵਾਂ, BYOK, ਅਤੇ ਹੋਰ ਵੇਰਵੇ ਲਈ, [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication) ਵੇਖੋ।

<br/><br/>

<a id="configuration-and-environment"></a>

## ਕਨਫ਼ੀਗਰੇਸ਼ਨ ਅਤੇ ਮਾਹੌਲ

**ਕਾਨਫ਼ੀਗ ਫ਼ਾਇਲਾਂ ਦੇ ਸਥਾਨ**

| ਡਿਪਲੌਇਮੈਂਟ | ਕਾਨਫ਼ੀਗ ਸਥਾਨ |
| ------------------ | ------------------------------------------------- |
| ਇਲੈਕਟ੍ਰੋਨ (Windows) | `%APPDATA%\transrewrt\` |
| ਇਲੈਕਟ੍ਰੋਨ (Linux) | `~/.config/transrewrt/` |
| ਵੈੱਬ / ਡਾਕਰ | `/app/data/config.json` (ਸਥਿਰ ਕਰਨ ਲਈ ਇੱਕ ਵਾਲੀਅਮ ਦੀ ਵਰਤੋਂ ਕਰੋ) |

<br/>

**ਮਾਹੌਲ ਚਲਣਯੋਗ** (ਕੇਵਲ ਵੈੱਬ/ਡਾਕਰ; ਇਲੈਕਟ੍ਰੋਨ ਸਥਾਨਕ ਕਾਨਫ਼ੀਗ ਫ਼ਾਇਲ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ)

| ਚਲਣਯੋਗ | ਮੂਲ | ਵਰਣਨ |
| ---------------- | ----------------------- | ----------- |
| `PORT` | `5000` | ਸਰਵਰ ਸੁਣਨ ਪੋਰਟ |
| `CONFIG_PATH` | `/app/data/config.json` | ਕਾਨਫ਼ੀਗ ਫ਼ਾਇਲ ਲਈ ਮਾਰਗ |
| `OPENROUTER_API_KEY` | *(ਖਾਲੀ)* | ਓਪਨਰਾਊਟਰ ਏ.ਪੀ.ਆਈ. ਕੁੰਜੀ |
| `OPENAI_API_KEY` | *(ਖਾਲੀ)* | ਓਪਨਏ.ਆਈ. ਏ.ਪੀ.ਆਈ. ਕੁੰਜੀ |
| `CEREBRAS_API_KEY` | *(ਖਾਲੀ)* | ਸੇਰੀਬ੍ਰਾਸ ਏ.ਪੀ.ਆਈ. ਕੁੰਜੀ |
| `ANTHROPIC_API_KEY` | *(ਖਾਲੀ)* | ਐਨਥਰੋਪਿਕ ਏ.ਪੀ.ਆਈ. ਕੁੰਜੀ |
| `GOOGLE_API_KEY` | *(ਖਾਲੀ)* | ਗੂਗਲ ਜੈਮੀਨੀ ਏ.ਪੀ.ਆਈ. ਕੁੰਜੀ |
| `DEEPSEEK_API_KEY` | *(ਖਾਲੀ)* | ਡੀਪਸੀਕ ਏ.ਪੀ.ਆਈ. ਕੁੰਜੀ |
| `GROQ_API_KEY` | *(ਖਾਲੀ)* | ਗਰੌਕ ਏ.ਪੀ.ਆਈ. ਕੁੰਜੀ |
| `MISTRAL_API_KEY` | *(ਖਾਲੀ)* | ਮਿਸਟਰਲ ਏ.ਪੀ.ਆਈ. ਕੁੰਜੀ |
| `OLLAMA_URL` | *(ਖਾਲੀ)* | ਓਲਾਮਾ ਬੇਸ URL (ਜਿਵੇਂ ਕਿ `http://host.docker.internal:11434`) |
| `XAI_API_KEY` | *(ਖਾਲੀ)* | xAI ਏ.ਪੀ.ਆਈ. ਕੁੰਜੀ |

ਕੇਵਲ ਉਹਨਾਂ ਸੇਵਾ ਪ੍ਰਦਾਤਾਵਾਂ ਨੂੰ ਕਾਨਫ਼ੀਗਰ ਕਰੋ ਜਿਨ੍ਹਾਂ ਤੁਸੀਂ ਵਰਤਦੇ ਹੋ। ਮਾਡਲ ਆਈਡੀ ਨਾਮਾਂ ਵਿੱਚ ਖੇਤਰ ਹਨ (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ਆਦਿ)।

**ਲਾਗਤ ਦਿਖਾਓ:** ਓਪਨਰਾਊਟਰ ਲਾਗਤ ਕਾਰਵਾਈ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ ਤਾਂ ਮੂਲ ਲਾਗਤ ਦੱਸਦਾ ਹੈ। ਹੋਰ ਪ੍ਰਦਾਤਾ ਓਪਨਰਾਊਟਰ ਦੀ ਖੁਲ੍ਹੀ ਮਾਡਲ ਕੀਮਤ ਤੋਂ **ਅਨੁਮਾਨਤ** ਲਾਗਤ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਨ ਜਦੋਂ ਓਪਨਰਾਊਟਰ ਕੁੰਜੀ ਉਪਲੱਬਧ ਹੋਵੇ; ਇਸ ਦੇ ਬਗੈਰ, ਗੈਰ-ਓਪਨਰਾਊਟਰ ਲਾਗਤ `0` ਵਜੋਂ ਦਿਸ ਸਕਦੀ ਹੈ। ਅਨੁਮਾਨ ਬਿਲ ਨਹੀਂ ਹੁੰਦੇ।

<br/>

**ਡਾਟਾ ਅਤੇ ਸਥਾਈਕਰਨ:** ਡਾਕਰ ਲਈ, `/app/data` ਤੇ ਇੱਕ ਵਾਲੀਅਮ ਮਾਊਂਟ ਕਰੋ ਤਾਂ ਜੋ `config.json` ਅਤੇ SQLite ਡਾਟਾਬੇਸ ਕੰਟੇਨਰ ਨੂੰ ਮੁੜ ਚਾਲੂ ਕਰਨ 'ਤੇ ਵੀ ਸੁਰੱਖਿਅਤ ਰਹੇ। ਬਿਨਾਂ ਵਾਲੀਅਮ ਦੇ, ਕੰਟੇਨਰ ਬੰਦ ਹੋਣ 'ਤੇ ਸਾਰਾ ਡਾਟਾ ਖ਼ਤਮ ਹੋ ਜਾਂਦਾ ਹੈ।

**ਵਿਕਾਸਕਾਰ:** ਪੁਰਾਣੀ ਇੱਕ-ਕੁੰਜੀ ਕਾਨਫ਼ੀਗਰੇਸ਼ਨ ਨੂੰ ਬਦਲਣ ਲਈ ਤਬਦੀਲੀਆਂ ਖਿੱਚਣ ਤੋਂ ਬਾਅਦ, ਜੇਕਰ ਤੁਹਾਡੀ ਸਥਾਨਕ ਫ਼ਾਇਲ ਵਿੱਚ ਹਟਾਏ ਗਏ ਫੀਲਡ (`api_key`, `api_url`, ਪਰਉਕਸੀ ਚੋਣਾਂ) ਅਜੇ ਵੀ ਹਨ ਤਾਂ `data/config.json` ਨੂੰ `src/config-defaults/config_default.json` ਵਿੱਚ ਨਵੀਂ ਮੂਲ ਸ਼ਕਲ ਨਾਲ ਮੁੜ-ਸੈੱਟ ਜਾਂ ਮਰਜ਼ ਕਰੋ।

<br/>

**ਵੈਬ ਪ੍ਰਮਾਣਕਰਨ:**

- ਮੂਲ ਐਡਮਿਨ: `admin` / `transrewrt26`.
- ਸੈਟਿੰਗਾਂ → ਉਪਭੋਗਤਾ ਵਿੱਚ ਉਪਭੋਗਤਾ ਨੂੰ ਪਰਬੰਧਿਤ ਕਰੋ।
- ਪਾਸਵਰਡ ਰੀਸੈੱਟ ਕਰੋ: `docker exec <container> reset-web-password '<username>' '<new-password>'`
(ਸਰੋਤ ਦੇ ਤੌਰ 'ਤੇ: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ਚੇਤਾਵਨੀ**<br/>
> ਕਿਸੇ ਵੀ ਨੈੱਟਵਰਕ-ਪਹੁੰਚਯੋਗ ਹੋਸਟ 'ਤੇ ਮੂਲ ਐਡਮਿਨ ਪਾਸਵਰਡ ਨੂੰ ਤੁਰੰਤ ਬਦਲੋ।

<br/>

ਮੁਢਲੀਆਂ ਸੈਟਿੰਗਾਂ (ਫ਼ਾਂਟ, ਮਾਡਲ, ਭਾਸ਼ਾਵਾਂ, ਆਦਿ) ਐਪਲੀਕੇਸ਼ਨ ਸੈਟਿੰਗਾਂ ਵਿੱਚ ਉਪਲਬਧ ਹਨ।

<br/><br/>

<a id="development-and-architecture"></a>

## ਵਿਕਾਸ ਅਤੇ ਆਰਕੀਟੈਕਚਰ

- **ਵਿਕਾਸ:** ਸੈਟਅੱਪ, ਬਿਲਡ, ਟੈਸਟ, ਅਤੇ ਡਿਪਲੌਇ (Electron, Web, Docker) - ਹੋਰ ਜਾਣਕਾਰੀ ਲਈ **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** ਵੇਖੋ।
- **ਆਰਕੀਟੈਕਚਰ ਅਤੇ ਸਿਸਟਮ ਦਾ ਜਨਰਲ ਵਿਚਾਰ:** ਫੋਲਡਰ ਸਟ੍ਰੱਕਚਰ, ਟੈਕ ਸਟੈਕ, ਡਿਜ਼ਾਈਨ ਦੇ ਫੈਸਲੇ - ਹੋਰ ਜਾਣਕਾਰੀ ਲਈ **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** ਵੇਖੋ।

<br/><br/>

<a id="releases-and-tags"></a>
## ਰਿਲੀਜ਼ ਅਤੇ ਟੈਗ

- **ਜਿਟ ਟੈਗ** `v`* (ਉਦਾਹਰਣ ਦੇ ਤੌਰ 'ਤੇ `v1.0.10`) [ਰਿਲੀਜ਼ ਵਰਕਫਲੋ](.github/workflows/release.yml) ਨੂੰ ਟ੍ਰਿਗਰ ਕਰਦੇ ਹਨ। **GitHub ਰਿਲੀਜ਼** ਵਿੱਚ Windows ਇੰਸਟਾਲਰ (`.exe`) ਅਤੇ Linux AppImages (**x64** ਅਤੇ **arm64**) ਨਾਲ ਜੁੜੇ ਹੁੰਦੇ ਹਨ।
- **Docker ਇਮੇਜ** `ghcr.io/wsj-br/transrewrt` ਤੇ ਪ੍ਰਕਾਸ਼ਿਤ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ। ਇਮੇਜ ਟੈਗ Git ਵਰਜਨ ਨਾਲ ਮੇਲ ਖਾਂਦੇ ਹਨ (ਉਦਾਹਰਣ ਦੇ ਤੌਰ 'ਤੇ `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) ਅਤੇ `latest` ਵੀ। ਮਲਟੀ-ਆਰਕ: `linux/amd64` ਅਤੇ `linux/arm64` (ਉਦਾਹਰਣ ਦੇ ਤੌਰ 'ਤੇ Raspberry Pi)।

<br/><br/>

<a id="contributing"></a>
## ਯੋਗਦਾਨ

1. ਰੀਪੋਜ਼ੀਟਰੀ ਨੂੰ ਫੋਰਕ ਕਰੋ।
2. ਇੱਕ ਫੀਚਰ ਬ੍ਰਾਂਚ ਬਣਾਓ: `git checkout -b feature/my-feature`
3. ਇੱਕ ਸਪੱਸ਼ਟ ਸੁਨੇਹੇ ਨਾਲ ਆਪਣੇ ਬਦਲਾਅ ਕਮਿਟ ਕਰੋ।
4. ਪੁੱਸ਼ ਕਰੋ ਅਤੇ `main` ਦੇ ਵਿਰੁੱਧ ਇੱਕ ਪੁੱਲ ਮੰਗ (Pull Request) ਖੋਲ੍ਹੋ।

ਕਿਰਪਾ ਕਰਕੇ ਮੌਜੂਦਾ ਕੋਡ ਸਟਾਈਲ ਦੀ ਪਾਲਣਾ ਕਰੋ ਅਤੇ ਜਮ੍ਹਾਂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਆਪਣੇ ਬਦਲਾਅ ਨੂੰ Electron ਅਤੇ ਵੈੱਬ ਮੋਡ ਦੋਵਾਂ ਵਿੱਚ ਚੈੱਕ ਕਰੋ। ਬਿਲਡ ਅਤੇ ਟੈਸਟ ਨਿਰਦੇਸ਼ਾਂ ਲਈ [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) ਵੇਖੋ।

<br/>

**ਮੁੱਦੇ ਰਿਪੋਰਟ ਕਰਨਾ:** [GitHub](https://github.com/wsj-br/transrewrt/issues) 'ਤੇ ਇੱਕ ਮੁੱਦਾ ਖੋਲ੍ਹੋ। ਆਪਣੇ ਪਲੇਟਫਾਰਮ (Windows / Linux / Docker) ਅਤੇ ਐਪ ਵਰਜਨ (ਐਬਾਊਟ ਡਾਇਲਾਗ ਵਿੱਚ ਜਾਂ ਰਿਲੀਜ਼ ਪੇਜ 'ਤੇ ਦਿਖਾਇਆ ਗਿਆ) ਸ਼ਾਮਲ ਕਰੋ।

<br/><br/>

<a id="disclaimer"></a>

## ਅਸਵੀਕਰਨ

ਉਤਪਾਦ ਨਾਮ ਅਤੇ ਆਈਕਨ ਉਨ੍ਹਾਂ ਦੇ ਸੰਬੰਧਤ ਮਾਲਕਾਂ ਦੇ ਹਨ ਅਤੇ ਸਿਰਫ਼ ਪਛਾਣ ਦੇ ਉਦੇਸ਼ਾਂ ਲਈ ਵਰਤੇ ਗਏ ਹਨ। ਇਹ ਸਾਫਟਵੇਅਰ ਉਲੀਖੀਆਂ ਗਈਆਂ ਕਿਸੇ ਵੀ ਬ੍ਰਾਂਡਾਂ ਨਾਲ ਸਬੰਧਤ ਨਹੀਂ ਹੈ ਜਾਂ ਉਨ੍ਹਾਂ ਦੁਆਰਾ ਅਨੁਮੋਦਿਤ ਨਹੀਂ ਹੈ।

<br/><br/>

<a id="license"></a>
## ਲਾਇਸੈਂਸ

ਕਾਪੀਰਾਈਟ © 2026 ਵਾਲਡੇਮਾਰ ਸਕੂਡੈਲਰ ਜੂਨੀਅਰ।

[ਐਪਾਚੀ ਲਾਇਸੈਂਸ 2.0](LICENSE)