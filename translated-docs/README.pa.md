---
translated_at: "2026-03-24T02:53:44.927Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<center>
  <img src="../images/transrewrt_logo.svg" alt="ਟ੍ਰਾਂਸਰਿਵਰਟ ਲੋਗੋ" width="120" />
</center>

<h1 align="center">ਟ੍ਰਾਂਸਰਿਵਰਟ</h1>

<center>
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="ਵਰਜਨ"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="ਲਾਇਸੈਂਸ: ਅਪਾਚੇ 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="ਪਲੇਟਫਾਰਮ">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="ਰੀਐਕਟ 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="ਇਲੈਕਟ੍ਰਾਨ 41">
</center>

AI-ਸੰਚਾਲਿਤ ਟੈਕਸਟ ਟੂਲ: ਭਾਸ਼ਾਵਾਂ ਵਿਚਕਾਰ ਅਨੁਵਾਦ, ਵੱਖ-ਵੱਖ ਸ਼ੈਲੀਆਂ ਵਿੱਚ ਫਿਰ ਲਿਖਣਾ ਅਤੇ ਕਸਟਮ ਪ੍ਰੰਪਟਾਂ ਨਾਲ ਟਰਾਂਸਫਾਰਮ ਕਰਨਾ — ਮਲਟੀਪਲ AI ਪ੍ਰਦਾਤਾਵਾਂ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, ਅਤੇ ਸਥਾਨਕ Ollama) ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹੋਏ। ਡੈਸਕਟਾਪ ਐਪ (ਇਲੈਕਟ੍ਰਾਨ) ਜਾਂ ਸੈਲਫ-ਹੋਸਟਡ ਵੈੱਬ ਐਪ (ਡਾਕਰ) ਵਜੋਂ ਚਲਦਾ ਹੈ।

- **ਅਨੁਵਾਦ** — ਦਰ्जਨਾਂ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ, ਆਟੋਮੈਟਿਕ ਸਰੋਤ ਪਛਾਣ ਨਾਲ
- **ਫਿਰ ਲਿਖੋ** — ਵਿਆਕਰਨ ਠੀਕ ਕਰੋ, ਸਪਸ਼ਟਤਾ ਸੁਧਾਰੋ, ਔਪਚਾਰਿਕ/ਅਨੌਪਚਾਰਿਕ, ਛੋਟਾ ਕਰੋ, ਲੰਮਾ ਕਰੋ, ਤਕਨੀਕੀ
- **ਰੂਪਾਂਤਰਿਤ** — ਕਸਟਮ AI ਪ੍ਰੰਪਟ; ਪ੍ਰੰਪਟ ਬਣਾਓ ਅਤੇ ਪ੍ਰਬੰਧਿਤ ਕਰੋ, ਹਰੇਕ ਪ੍ਰੰਪਟ ਲਈ ਚੁਣੌਤੀਯੋਗ ਭਾਸ਼ਾ
- **ਇਤਿਹਾਸ** — ਪੂਰਾ ਕਾਰਜ ਇਤਿਹਾਸ, ਇਨਪੁਟ/ਆਉਟਪੁਟ ਟੈਕਸਟ, ਫਿਲਟਰਿੰਗ, ਅਤੇ ਨਿਰਯਾਤ ਨਾਲ
- **ਮਾਡਲ ਅਤੇ ਲਾਗਤ** — ਕਿਸੇ ਵੀ ਕਾਨਫ਼ੀਗਰ ਕੀਤੇ ਪ੍ਰਦਾਤਾ ਤੋਂ ਮਾਡਲ ਚੁਣੋ; ਐਸ.ਕਿਊ.ਐਲਾਈਟ ਲੌਗ ਨਾਲ ਲਾਗਤ ਡੈਸ਼ਬੋਰਡ, ਮਾਡਲ/ਆਪਰੇਸ਼ਨ/ਦਿਨ ਅਨੁਸਾਰ ਸਾਰਾਂਸ਼
- **UI** — ਬਹੁਭਾਸ਼ੀ ਇੰਟਰਫੇਸ (30+ ਭਾਸ਼ਾਵਾਂ, RTL ਸਹਾਇਤਾ), ਫੋਂਟ, ...
- **ਵੈੱਬ ਮੋਡ** — ਐਡਮਿਨ ਰੋਲ ਨਾਲ ਮਲਟੀ-ਯੂਜ਼ਰ ਸਮਰਥਨ; API ਕੁੰਜੀਆਂ ਸਰਵਰ-ਸਾਈਡ ਰਹਿੰਦੀਆਂ ਹਨ, ਬਰਾਊਜ਼ਰ ਨੂੰ ਕਦੇ ਉਜਾਗਰ ਨਹੀਂ ਹੁੰਦੀਆਂ
- **ਡੈਸਕਟਾਪ** — ਵਿੰਡੋਜ਼ ਅਤੇ ਲੀਨਕਸ ਲਈ ਇਲੈਕਟ੍ਰਾਨ ਐਪ
- **ਸੈਲਫ-ਹੋਸਟਡ** — amd64 ਅਤੇ arm64 (ਰਸਪਬਰੀ ਪਾਈ-ਤਿਆਰ) ਲਈ ਡਾਕਰ ਇਮੇਜ

ਇੰਸਟਾਲ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਸਭ ਫੀਚਰਾਂ ਬਾਰੇ ਪੂਰੀ ਜਾਣਕਾਰੀ ਲਈ **[ਯੂਜ਼ਰ ਗਾਈਡ](USER-GUIDE.pa.md)** ਦੇਖੋ।

<small>**ਹੋਰ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਪੜ੍ਹੋ:** [English (UK)](README.pa.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>



<br/>

**UI ਅਤੇ ਦਸਤਾਵੇਜ਼ਕਰਨ ਅਨੁਵਾਦਾਂ ਬਾਰੇ ਨੋਟ:** ਅੰਗਰੇਜ਼ੀ (UK) ਤੋਂ ਇਲਾਵਾ ਸਾਰੀਆਂ ਇੰਟਰਫੇਸ ਭਾਸ਼ਾਵਾਂ ਨੂੰ AI ਮਾਡਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਅਨੁਵਾਦਿਤ ਕੀਤਾ ਗਿਆ ਸੀ; ਸ਼ਬਦਾਵਲੀ ਅਸਪਸ਼ਟ ਹੋ ਸਕਦੀ ਹੈ ਜਾਂ ਗਲਤੀਆਂ ਹੋ ਸਕਦੀਆਂ ਹਨ।



<a id="screenshots"></a>
## ਸਕ੍ਰੀਨਸ਼ੌਟ

**ਭਾਸ਼ਾ ਚੁਣੋ**

![ਭਾਸ਼ਾ ਚੁਣੋ](../images/screenshots/pa/language-selector.png)

**ਅਨੁਵਾਦ**

![ਅਨੁਵਾਦ](../images/screenshots/pa/translate.png)

**ਰੂਪਾਂਤਰਿਤ - ਪ੍ਰੰਪਟ ਸੰਪਾਦਕ**

![ਰੂਪਾਂਤਰਿਤ - ਪ੍ਰੰਪਟ ਸੰਪਾਦਕ](../images/screenshots/pa/transform-prompt-edit.png)

**ਡੈਸ਼ਬੋਰਡ**

![ਲਾਗਤ ਡੈਸ਼ਬੋਰਡ](../images/screenshots/pa/dashboard-summary.png)

**ਇਤਿਹਾਸ**

![ਇਤਿਹਾਸ](../images/screenshots/pa/history.png)

**ਸੈਟਿੰਗਾਂ - ਮਾਡਲ ਚੋਣ**

![ਸੈਟਿੰਗਾਂ - ਮਾਡਲ ਚੋਣ](../images/screenshots/pa/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## ਸੂਚੀ   

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [ਤੁਰੰਤ ਸ਼ੁਰੂਆਤ](#quick-start)
- [ਸਥਾਪਤਾ](#installation)
  - [ਵਿੰਡੋਜ਼ (ਇਲੈਕਟ੍ਰਾਨ)](#windows-electron)
  - [ਲੀਨਕਸ (ਇਲੈਕਟ੍ਰਾਨ)](#linux-electron)
  - [ਡੌਕਰ](#docker)
- [ਓਪਨਰਾਊਟਰ ਏਪੀਆਈ ਕੁੰਜੀ ਪ੍ਰਾਪਤ ਕਰਨਾ](#getting-an-openrouter-api-key)
- [ਕਾਨਫੀਗਰੇਸ਼ਨ ਅਤੇ ਵਾਤਾਵਰਣ](#configuration-and-environment)
- [ਵਿਕਾਸ ਅਤੇ ਆਰਕੀਟੈਕਚਰ](#development-and-architecture)
- [ਰਿਹਾਇਸ਼ਾਂ ਅਤੇ ਟੈਗ](#releases-and-tags)
- [ਯੋਗਦਾਨ](#contributing)
- [ਅਸਵੀਕਰਣ](#disclaimer)
- [ਲਾਇਸੈਂਸ](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
 ## ਤੁਰੰਤ ਸ਼ੁਰੂਆਤ

**ਡੌਕਰ (ਆਤਮ-ਹੋਸਟਿੰਗ ਲਈ ਸਿਫਾਰਸ਼ ਕੀਤਾ ਗਿਆ)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

`sk-or-your-key` ਨੂੰ ਤੁਹਾਡੀ [ਓਪਨਰਾਊਟਰ ਏਪੀਆਈ ਕੁੰਜੀ](https://openrouter.ai/keys) ਨਾਲ ਬਦਲੋ (ਜਾਂ ਹੋਰ ਪ੍ਰਦਾਤਾ ਕੁੰਜੀਆਂ ਸੈੱਟ ਕਰੋ; ਵੇਖੋ [ਕਾਨਫੀਗਰੇਸ਼ਨ](#configuration-and-environment))। [http://localhost:5000](http://localhost:5000) ਖੋਲ੍ਹੋ ਅਤੇ ਸੇਵਾ ਨੂੰ ਪ੍ਰਗਟ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਡਿਫਾਲਟ ਐਡਮਿਨ ਪਾਸਵਰਡ ਨੂੰ ਬਦਲੋ।

<br/>

> ℹ️ **ਨੋਟ**<br/>
> ਡਾਕਰ ਵਿੱਚ, ਐਲਐਲਐਮ ਕੁੰਜੀਆਂ ਜਿਵੇਂ `OPENROUTER_KEY`, `OPENAI_KEY`, … (ਵੈਬ ਯੂਆਈ ਵਿੱਚ ਨਹੀਂ) ਵਾਤਾਵਰਣ ਚਲਣ ਨਾਲ ਸਮਾਂ ਸੈੱਟ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ। ਡੈਸਕਟਾਪ (ਇਲੈਕਟਰਾਨ) ਤੇ, ਤੁਸੀਂ **ਸੈਟਿੰਗਜ਼ → ਏਪੀਆਈ** ਵਿੱਚ ਕੁੰਜੀਆਂ ਨੂੰ ਕਾਨਫੀਗਰ ਕਰ ਸਕਦੇ ਹੋ। 
<br/>

**ਵਿੰਡੋਜ਼**

ਨਵੀਨਤਮ `Transrewrt ਸੈਟਅੱਪ x.y.z.exe` ਡਾਊਨਲੋਡ ਕਰੋ [ਰਿਹਾਇਸ਼ਾਂ](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ, ਇੰਸਟਾਲਰ ਨੂੰ ਚਲਾਓ, ਫਿਰ ਸਟਾਰਟ ਮੇਨੂ ਜਾਂ ਡੈਸਕਟਾਪ ਸ਼ਾਰਟਕੱਟ ਤੋਂ ਲਾਂਚ ਕਰੋ। ਆਪਣੀਆਂ ਏਪੀਆਈ ਕੁੰਜੀਆਂ ਦਾਖਲ ਕਰੋ **ਸੈਟਿੰਗਜ਼ → ਏਪੀਆਈ** ਵਿੱਚ। ਤੁਹਾਨੂੰ ਘੱਟੋ ਘੱਟ ਇੱਕ ਪ੍ਰਦਾਤਾ ਨੂੰ ਕਾਨਫੀਗਰ ਕਰਨਾ ਹੋਵੇਗਾ, ਮੁਫਤ ਮਾਡਲਾਂ ਲਈ ਓਪਨਰਾਊਟਰ ਆਮ ਹੈ।

<br/>

**ਲੀਨਕਸ**

[ਰਿਹਾਇਸ਼ਾਂ](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ `.AppImage` ਡਾਊਨਲੋਡ ਕਰੋ, ਤਦ:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

ਆਪਣੀਆਂ ਏਪੀਆਈ ਕੁੰਜੀਆਂ ਦਾਖਲ ਕਰੋ **ਸੈਟਿੰਗਜ਼ → ਏਪੀਆਈ** ਵਿੱਚ। ਤੁਹਾਨੂੰ ਘੱਟੋ ਘੱਟ ਇੱਕ ਪ੍ਰਦਾਤਾ ਨੂੰ ਕਾਨਫੀਗਰ ਕਰਨਾ ਹੋਵੇਗਾ, ਮੁਫਤ ਮਾਡਲਾਂ ਲਈ ਓਪਨਰਾਊਟਰ ਆਮ ਹੈ।

ਡੀਬੀਅਨ/ਉਬੰਟੂ ਤੇ ਤੁਹਾਨੂੰ ਪਹਿਲਾਂ ਵਾਧੂ ਨਿਰਭਰਤਾਵਾਂ ਨੂੰ ਸਥਾਪਤ ਕਰਨ ਦੀ ਲੋੜ ਪੈ ਸਕਦੀ ਹੈ:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

ਵੇਦੋ ਵੇਰਵੇ ਲਈ [ਸਥਾਪਤਾ → ਲੀਨਕਸ](#linux-electron)।

<br/>

> ℹ️ **ਨੋਟ**<br/>
> ਮੈਕਓਐਸ ਅਜੇ ਸਮਰਥਤ ਨਹੀਂ ਹੈ। ਟਰਾਂਸਰਿਵਰਟ ਵਿੰਡੋਜ਼, ਲੀਨਕਸ ਅਤੇ ਡਾਕਰ ਲਈ ਉਪਲਬਧ ਹੈ।

<br/>

ਜਦੋਂ ਐਪ ਚੱਲ ਰਹੀ ਹੈ, ਤਾਂ **[ਯੂਜ਼ਰ ਗਾਈਡ](USER-GUIDE.pa.md)** ਵੇਖੋ, ਪਾਠ ਨੂੰ ਅਨੁਵਾਦ ਕਰਨ, ਪੁਨਰ-ਲੇਖਨ ਕਰਨ, ਅਤੇ ਤਬਦੀਲੀ ਕਰਨ, ਪ੍ਰੇਰਕਾਂ ਨੂੰ ਪਰਬੰਧਿਤ ਕਰਨ ਅਤੇ ਮਾਡਲਾਂ ਨੂੰ ਕਾਨਫਿਗਰ ਕਰਨ ਬਾਰੇ ਸਿੱਖਣ ਲਈ।

<br/><br/>

<a id="installation"></a>
## ਸਥਾਪਤਾ

<a id="windows-electron"></a>
### ਵਿੰਡੋਜ਼ (ਇਲੈਕਟ੍ਰਾਨ)

- ਨਵੀਨਤਮ ਇੰਸਟਾਲਰ ਡਾਊਨਲੋਡ ਕਰੋ [ਰਿਹਾਇਸ਼ਾਂ](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ।
- `.exe` ਚਲਾਓ ਅਤੇ ਇੰਸਟਾਲਰ ਦੀ ਪਾਲਣਾ ਕਰੋ।
- ਪਹਿਲੀ ਵਾਰ ਚਲਾਓ: ਸਟਾਰਟ ਮੇਨੂ ਜਾਂ ਡੈਸਕਟਾਪ ਸ਼ਾਰਟਕੱਟ ਤੋਂ ਐਪ ਨੂੰ ਲਾਂਚ ਕਰੋ।

<br/>

<a id="linux-electron"></a>
### ਲੀਨਕਸ (ਇਲੈਕਟ੍ਰਾਨ)

- [ਰਿਹਾਇਸ਼ਾਂ](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ `.AppImage` ਡਾਊਨਲੋਡ ਕਰੋ।
- ਚਲਾਓ: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- ਵਾਧੂ ਨਿਰਭਰਤਾਵਾਂ (ਡੀਬੀਅਨ/ਉਬੰਟੂ): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- ਹੋਰ ਲਈ [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) ਵੇਖੋ।

<br/>

<a id="docker"></a>
### ਡੌਕਰ

- ਖਿੱਚੋ: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- ਵਾਤਾਵਰਣ ਰਾਹੀਂ ਘੱਟੋ ਘੱਟ ਇੱਕ ਪ੍ਰਦਾਤਾ ਕੁੰਜੀ ਸੈੱਟ ਕਰੋ (ਉਦਾਹਰਣ ਲਈ OpenRouter ਲਈ `OPENROUTER_KEY`)। ਰਹਸ ਨੂੰ ਇਮੇਜ ਵਿੱਚ ਨਾ ਰਹਿਣ ਦੇਣ ਲਈ ਚਲਣ ਨੂੰ `-e` ਜਾਂ `docker compose` / `.env` ਰਾਹੀਂ ਪਾਸ ਕਰੋ।
- ਪ੍ਰਦਾਤਾ ਕੁੰਜੀਆਂ ਵੈੱਬ ਯੂਆਈ ਵਿੱਚ ਦਾਖਲ ਨਹੀਂ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ; ਸਰਵਰ ਉਨ੍ਹਾਂ ਨੂੰ ਵਾਤਾਵਰਣ ਤੋਂ ਪੜ੍ਹਦਾ ਹੈ।

ਉਦਾਹਰਣ - ਭਾਵਨਾ ਲਈ ਨਾਮੀਤ ਵਾਲੀਅਮ (ਵਾਤਾਵਰਨ ਰਾਹੀਂ OpenRouter ਕੁੰਜੀ):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| ਵਿਕਲਪ   | ਵਰਣਨ                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| ਪੋਰਟ     | `5000` (`-p 5000:5000` ਨਾਲ ਮੈਪ ਕਰੋ)                                                                              |
| ਵਾਲੀਅਮ   | ਕਾਨਫੀਗ ਅਤੇ ਡੇਟਾਬੇਸ ਪ੍ਰਸਿੱਧੀ ਲਈ `/app/data` ਮਾਊਂਟ ਕਰੋ                                                         |
| ਚਲਣ| `PORT`, `CONFIG_PATH`, ਨਾਲ ਹੀ ਐਲਐਲਐਮ ਕੁੰਜੀਆਂ (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - ਵੇਖੋ [ਕਾਨਫੀਗਰੇਸ਼ਨ](#configuration-and-environment) |

ਸਰੋਤ ਤੋਂ ਬਣਾਉਣ ਅਤੇ ਚਲਾਉਣ ਲਈ: `docker compose up --build -d` ਜਾਂ `pnpm docker:up` - ਵੇਖੋ [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)।

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## ਓਪਨਰਾਊਟਰ API ਕੁੰਜੀ ਪ੍ਰਾਪਤ ਕਰਨਾ

ਟਰਾਂਸਰੀਵਰਟ ਕਈ AI ਪ੍ਰਦਾਤਾਵਾਂ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ। [OpenRouter](https://openrouter.ai) ਇੱਕ ਪ੍ਰਸਿੱਧ ਚੋਣ ਹੈ ਕਿਉਂਕਿ ਇਹ ਇੱਕੋ ਕੁੰਜੀ ਹੇਠਾਂ ਕਈ ਮਾਡਲਾਂ ਨੂੰ ਇਕੱਠਾ ਕਰਦਾ ਹੈ ਅਤੇ ਮੁਫਤ ਮਾਡਲ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।

1. [openrouter.ai](https://openrouter.ai) 'ਤੇ ਰਜਿਸਟਰ ਕਰੋ ਜਾਂ ਲਾਗਇਨ ਕਰੋ।
2. [Keys](https://openrouter.ai/keys) ਸਫ਼ੇ 'ਤੇ ਜਾਓ ਅਤੇ ਇੱਕ ਨਵੀਂ ਕੁੰਜੀ ਬਣਾਓ (ਨਾਮ ਦਿਓ, ਅਤੇ ਵਿਕਲਪਕ ਤੌਰ 'ਤੇ ਕਰੈਡਿਟ ਸੀਮਾ ਸੈੱਟ ਕਰੋ)। ਤੁਸੀਂ ਕਰੈਡਿਟ ਸ਼ਾਮਲ ਕੀਤੇ ਬਿਨਾਂ ਮੁਫਤ ਮਾਡਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ।
3. **ਡੈਸਕਟਾਪ (ਇਲੈਕਟ੍ਰਾਨ):** ਕੁੰਜੀਆਂ ਨੂੰ **ਸੈਟਿੰਗਾਂ → API** ਵਿੱਚ ਪੇਸਟ ਕਰੋ। **ਡਾਕਰ:** `OPENROUTER_KEY` ਵਰਗੇ env ਚਲ (ਵੇਖੋ [ਤੇਜ਼ ਸ਼ੁਰੂਆਤ](#quick-start))।

ਤੁਸੀਂ ਹੋਰ ਪ੍ਰਦਾਤਾਵਾਂ (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ ਜਾਂ [Ollama](https://ollama.com) ਨਾਲ ਮਾਡਲ ਸਥਾਨਕ ਤੌਰ 'ਤੇ ਚਲਾ ਸਕਦੇ ਹੋ। ਸਮਰਥਤ ਪ੍ਰਦਾਤਾਵਾਂ ਅਤੇ ਮੁਹਾਵਰਾ ਚਲ ਦੀ ਪੂਰੀ ਸੂਚੀ ਲਈ [ਕੰਫਿਗਰੇਸ਼ਨ](#configuration-and-environment) ਵੇਖੋ।

ਸੀਮਾਵਾਂ, BYOK, ਅਤੇ ਹੋਰ ਬਾਰੇ, [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication) ਵੇਖੋ।

<br/><br/>

<a id="configuration-and-environment"></a>
## ਕੰਫਿਗਰੇਸ਼ਨ ਅਤੇ ਵਾਤਾਵਰਣ

**ਕੰਫਿਗ ਫਾਈਲ ਸਥਾਨ**

| ਡਿਪਲੌਇਮੈਂਟ         | ਕੰਫਿਗ ਸਥਾਨ                                   |
| ------------------ | ------------------------------------------------- |
| ਇਲੈਕਟ੍ਰਾਨ (ਵਿੰਡੋਜ਼) | `%APPDATA%\transrewrt\`                           |
| ਇਲੈਕਟ੍ਰਾਨ (ਲੀਨਕਸ)   | `~/.config/transrewrt/`                           |
| ਵੈੱਬ / ਡਾਕਰ       | `/app/data/config.json` (ਬਣਾਉਣ ਲਈ ਇੱਕ ਵਾਲੀਅਮ ਦੀ ਵਰਤੋਂ ਕਰੋ) |

<br/>

**ਮੁਹਾਵਰਾ ਚਲ** (ਕੇਵਲ ਵੈੱਬ/ਡਾਕਰ; ਇਲੈਕਟ੍ਰਾਨ ਸਥਾਨਕ ਕੰਫਿਗ ਫਾਈਲ ਦੀ ਵਰਤੋਂ ਕਰਦਾ ਹੈ)

| ਚਲ         | ਮੂਲ                 | ਵਿਵਰਣ |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | ਸਰਵਰ ਸੁਣਨ ਵਾਲਾ ਪੋਰਟ |
| `CONFIG_PATH`    | `/app/data/config.json` | ਕੰਫਿਗ ਫਾਈਲ ਲਈ ਮਾਰਗ |
| `OPENROUTER_KEY` | *(ਖਾਲੀ)*               | OpenRouter API ਕੁੰਜੀ |
| `OPENAI_KEY`     | *(ਖਾਲੀ)*               | OpenAI API ਕੁੰਜੀ |
| `ANTHROPIC_KEY`  | *(ਖਾਲੀ)*               | Anthropic API ਕੁੰਜੀ |
| `GOOGLE_KEY`     | *(ਖਾਲੀ)*               | Google Gemini API ਕੁੰਜੀ |
| `DEEPSEEK_KEY`   | *(ਖਾਲੀ)*               | DeepSeek API ਕੁੰਜੀ |
| `GROQ_KEY`       | *(ਖਾਲੀ)*               | Groq API ਕੁੰਜੀ |
| `MISTRAL_KEY`    | *(ਖਾਲੀ)*               | Mistral API ਕੁੰਜੀ |
| `OLLAMA_URL`     | *(ਖਾਲੀ)*               | Ollama ਬੇਸ URL (ਜਿਵੇਂ `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(ਖਾਲੀ)*               | xAI API ਕੁੰਜੀ |

ਸਿਰਫ਼ ਉਹਨਾਂ ਪ੍ਰਦਾਤਾਵਾਂ ਦੀ ਕੰਫਿਗਰੇਸ਼ਨ ਕਰੋ ਜਿਨ੍ਹਾਂ ਦੀ ਤੁਸੀਂ ਵਰਤੋਂ ਕਰ ਰਹੇ ਹੋ। ਮਾਡਲ ID ਸਪੇਸ-ਨਾਮ ਹਨ (`openrouter/…`, `openai/…`, `ollama/…`, ਆਦਿ)।

**ਲਾਗਤ ਪ੍ਰਦਰਸ਼ਨ:** OpenRouter ਉਸ ਦੇ ਲਾਗੂ ਹੋਣ ਤੇ ਮੁੱਲ ਬਿਲੀ ਲਾਗਤ ਵਾਪਸ ਕਰਦਾ ਹੈ। ਹੋਰ ਪ੍ਰਦਾਤਾ OpenRouter ਦੀਆਂ ਜਨਤਕ ਮਾਡਲ ਕੀਮਤਾਂ ਤੋਂ **ਅੰਦਾਜ਼ਾ** ਲਾਗਤ ਦੀ ਵਰਤੋਂ ਕਰਦੇ ਹਨ ਜਦੋਂ OpenRouter ਕੁੰਜੀ ਉਪਲੱਬਧ ਹੁੰਦੀ ਹੈ; ਅਜਿਹਾ ਨਾ ਹੋਣ ਦੀ ਸੂਰਤ ਵਿੱਚ, ਗੈਰ-OpenRouter ਲਾਗਤ `0` ਦੇ ਰੂਪ ਵਿੱਚ ਦਿਖਾਈ ਦੇ ਸਕਦੀ ਹੈ। ਅੰਦਾਜ਼ੇ ਬਿੱਲਾਂ ਨਹੀਂ ਹੁੰਦੇ।

<br/>

**ਡੇਟਾ ਅਤੇ ਸਥਾਈਕਰਨ:** ਡਾਕਰ ਲਈ, `/app/data` ਤੇ ਇੱਕ ਵਾਲੀਅਮ ਮਾਊਂਟ ਕਰੋ ਤਾਂ ਜੋ `config.json` ਅਤੇ SQLite ਡੇਟਾਬੇਸ ਕੰਟੇਨਰ ਰੀਸਟਾਰਟ ਦੌਰਾਨ ਬਣੇ ਰਹਿਣ। ਬਿਨਾਂ ਵਾਲੀਅਮ ਦੇ, ਕੰਟੇਨਰ ਰੁਕਣ 'ਤੇ ਸਾਰਾ ਡੇਟਾ ਨਸ਼ਟ ਹੋ ਜਾਂਦਾ ਹੈ।

**ਡਿਵੈਲਪਰ:** ਪੁਰਾਣੇ ਸਿੰਗਲ-ਕੁੰਜੀ ਕੰਫਿਗ ਨੂੰ ਬਦਲਣ ਵਾਲੇ ਬਦਲਾਵਾਂ ਨੂੰ ਖਿੱਚਣ ਤੋਂ ਬਾਅਦ, ਤੁਹਾਡੀ ਸਥਾਨਕ ਫਾਈਲ ਹੇਠਾਂ ਹਟਾਏ ਗਏ ਖੇਤਰਾਂ (`api_key`, `api_url`, ਪਰਾਕਸੀ ਵਿਕਲਪ) ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੀ ਹੈ, ਤਾਂ `data/config.json` ਨੂੰ `src/config-defaults/config_default.json` ਤੋਂ ਨਵੇਂ ਮੂਲ ਰੂਪ ਨਾਲ ਰੀਸੈੱਟ ਜਾਂ ਮਰਜ਼ ਕਰੋ।

<br/>

**ਵੈੱਬ ਪ੍ਰਮਾਣਕਰਨ:**

- ਮੂਲ ਐਡਮਿਨ: `admin` / `transrewrt26`।
- ਉਪਭੋਗਤਾਵਾਂ ਨੂੰ **ਸੈਟਿੰਗਾਂ → ਉਪਭੋਗਤਾ** ਵਿੱਚ ਪਰਬੰਧਤ ਕਰੋ।
- ਪਾਸਵਰਡ ਰੀਸੈੱਟ ਕਰਨਾ: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (ਸਰੋਤ ਤੋਂ: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ਚੇਤਾਵਨੀ**<br/>
> ਕਿਸੇ ਵੀ ਨੈੱਟਵਰਕ-ਪਹੁੰਚਯੋਗ ਹੋਸਟ 'ਤੇ ਮੂਲ ਐਡਮਿਨ ਪਾਸਵਰਡ ਤੁਰੰਤ ਬਦਲੋ।

<br/>

ਕੁੰਜੀ ਸੈਟਿੰਗਾਂ (ਫਾਂਟ, ਮਾਡਲ, ਭਾਸ਼ਾਵਾਂ, ਆਦਿ) ਐਪਲੀਕੇਸ਼ਨ ਸੈਟਿੰਗਾਂ ਵਿੱਚ ਉਪਲਬਧ ਹਨ।

<br/><br/>

<a id="development-and-architecture"></a>
## ਵਿਕਾਸ ਅਤੇ ਬਣਤਰ

- **ਵਿਕਾਸ:** ਸੈੱਟਅੱਪ, ਬਿਲਡ, ਟੈਸਟ, ਅਤੇ ਡਿਪਲੌਇ (ਇਲੈਕਟ੍ਰਾਨ, ਵੈੱਬ, ਡਾਕਰ) - ਵੇਖੋ **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**।
- **ਬਣਤਰ ਅਤੇ ਸਿਸਟਮ ਦਾ ਜਨਰਲ ਵਿਚਾਰ:** ਫੋਲਡਰ ਸਟਰਕਚਰ, ਟੈਕ ਸਟੈਕ, ਡਿਜ਼ਾਈਨ ਫੈਸਲੇ - ਵੇਖੋ **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**।

<br/><br/>

<a id="releases-and-tags"></a>

## ਰਿਲੀਜ਼ ਅਤੇ ਟੈਗ

- **ਜੀ.ਆਈ.ਟੀ. ਟੈਗ** `v`* (ਉਦਾਹਰਨ ਲਈ `v1.0.10`) [ਰਿਲੀਜ਼ ਵਰਕਫਲੋ](.github/workflows/release.yml) ਨੂੰ ਚਾਲੂ ਕਰਦੀਆਂ ਹਨ। **ਗਿੱਥਹਬ ਰਿਲੀਜ਼** ਵਿੰਡੋਜ਼ ਇੰਸਟਾਲਰ (`.exe`) ਅਤੇ ਲੀਨਕਸ ਐਪਇਮੇਜ਼ ਨਾਲ ਜੁੜਦੀਆਂ ਹਨ।
- **ਡੌਕਰ ਇਮੇਜ** `ghcr.io/wsj-br/transrewrt` ਵਿੱਚ ਪ੍ਰਕਾਸ਼ਿਤ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ ਹਨ। ਇਮੇਜ ਟੈਗ ਗਿੱਟ ਵਰਜਨ ਲਈ ਮੈਚ ਕਰਦੇ ਹਨ (ਉਦਾਹਰਨ ਲਈ `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) ਨਾਲ ਹੀ `latest` ਵੀ। ਮਲਟੀ-ਆਰਕ: `linux/amd64` ਅਤੇ `linux/arm64` (ਉਦਾਹਰਨ ਲਈ ਰਸਪਬਰੀ ਪਾਈ)।

<br/><br/>

<a id="contributing"></a>
## ਯੋਗਦਾਨ

1. ਰੀਪੋਜ਼ੀਟਰੀ ਨੂੰ ਫੌਰਕ ਕਰੋ।
2. ਇੱਕ ਫੀਚਰ ਸ਼ਾਖਾ ਬਣਾਉ: `git checkout -b feature/my-feature`
3. ਆਪਣੀਆਂ ਤਬਦੀਲੀਆਂ ਨੂੰ ਸਪੱਸ਼ਟ ਸੁਨੇਹੇ ਨਾਲ ਕਮਿਟ ਕਰੋ।
4. ਧੱਕੋ ਅਤੇ `main` ਖਿਲਾਫ ਇੱਕ ਪੁੱਲ ਰਿਕੁਐਸਟ ਖੋਲ੍ਹੋ।

ਕਿਰਪਾ ਕਰਕੇ ਮੌਜੂਦਾ ਕੋਡ ਸਟਾਈਲ ਨੂੰ ਅਪਣਾਓ ਅਤੇ ਜਮ੍ਹਾਂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਦੋਵਾਂ ਇਲੈਕਟ੍ਰੌਨ ਅਤੇ ਵੈੱਬ ਮੋਡ ਵਿੱਚ ਆਪਣੀਆਂ ਤਬਦੀਲੀਆਂ ਦੀ ਜਾਂਚ ਕਰੋ। ਨਿਰਮਾਣ ਅਤੇ ਟੈਸਟ ਨਿਰਦੇਸ਼ਾਂ ਲਈ [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) ਵੇਖੋ।

<br/>

**ਮੁੱਦਿਆਂ ਦੀ ਰਿਪੋਰਟ ਕਰਨਾ:** [ਗਿੱਥਹਬ](https://github.com/wsj-br/transrewrt/issues) ਉੱਤੇ ਇੱਕ ਮੁੱਦਾ ਖੋਲ੍ਹੋ। ਆਪਣੇ ਪਲੇਟਫਾਰਮ (ਵਿੰਡੋਜ਼ / ਲੀਨਕਸ / ਡੌਕਰ) ਅਤੇ ਐਪ ਵਰਜਨ (ਅਬਾਉਟ ਡਾਇਲਾਗ ਵਿੱਚ ਜਾਂ ਰਿਲੀਜ਼ ਪੇਜ 'ਤੇ ਦਿਖਾਇਆ ਗਿਆ) ਸ਼ਾਮਿਲ ਕਰੋ।

<br/><br/>

<a id="disclaimer"></a>
## ਅਸਵੀਕਰਣ

ਉਤਪਾਦ ਨਾਮ ਅਤੇ ਆਈਕਨ ਆਪਣੇ ਸੰਬੰਧਤ ਮਾਲਕਾਂ ਦੇ ਹਨ ਅਤੇ ਕੇਵਲ ਪਛਾਣ ਉਦੇਸ਼ਾਂ ਲਈ ਵਰਤੇ ਜਾਂਦੇ ਹਨ। ਇਹ ਸਾਫਟਵੇਅਰ ਜ਼ਿਕਰ ਕੀਤੀਆਂ ਕਿਸੇ ਵੀ ਬ੍ਰਾਂਡਾਂ ਨਾਲ ਸਬੰਧਤ ਜਾਂ ਉਨ੍ਹਾਂ ਵੱਲੋਂ ਸਵੀਕ੍ਰਿਤ ਨਹੀਂ ਹੈ।

<br/><br/>

<a id="license"></a>
## ਲਾਇਸੈਂਸ

ਕਾਪੀਰਾਈਟ © 2026 ਵਾਲਡੇਮਾਰ ਸਕੂਡੇਲਰ ਜੂਨੀਅਰ।

[ਐਪਾਚੇ ਲਾਇਸੈਂਸ 2.0](LICENSE)