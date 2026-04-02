---
translation_last_updated: '2026-04-02T12:43:07.722Z'
source_file_mtime: '2026-04-02T12:39:14.838Z'
source_file_hash: 0826245f792850f3
translation_language: pa
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt ਬੈਨਰ"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="ਵਰਜਨ"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="ਲਾਇਸੈਂਸ: ਅਪਾਚੇ 2.0"></a>
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
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **UI ਅਤੇ ਦਸਤਾਵੇਜ਼ੀਕਰਨ ਅਨੁਵਾਦਾਂ ਬਾਰੇ ਨੋਟ:** ਮੂਲ ਅੰਗਰੇਜ਼ੀ (ਯੂਕੇ) ਨੂੰ ਛੱਡ ਕੇ ਸਾਰੀਆਂ ਇੰਟਰਫੇਸ ਭਾਸ਼ਾਵਾਂ 
> AI ਮਾਡਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਅਨੁਵਾਦਿਤ ਕੀਤੀਆਂ ਗਈਆਂ ਸਨ; ਸ਼ਬਦਾਵਲੀ ਅਸ਼ੁੱਧ ਹੋ ਸਕਦੀ ਹੈ ਜਾਂ ਗਲਤੀਆਂ ਸ਼ਾਮਲ ਹੋ ਸਕਦੀਆਂ ਹਨ।

</small>

<br/>

<a id="table-of-contents"></a>
## ਵਿਸ਼ਾ ਸੂਚੀ

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [ਸਕਰੀਨਸ਼ਾਟ](#screenshots)
- [ਤੁਰੰਤ ਸ਼ੁਰੂਆਤ](#quick-start)
- [OpenRouter API ਕੁੰਜੀ ਪ੍ਰਾਪਤ ਕਰਨਾ](#getting-an-openrouter-api-key)
- [ਕਨਫਿਗਰੇਸ਼ਨ ਅਤੇ ਵਾਤਾਵਰਣ](#configuration-and-environment)
- [ਵਿਕਾਸ ਅਤੇ ਆਰਕੀਟੈਕਚਰ](#development-and-architecture)
- [ਮੁੱਦਿਆਂ ਦੀ ਰਿਪੋਰਟਿੰਗ](#reporting-issues)
- [ਅਸਵੀਕਰਣ](#disclaimer)
- [ਲਾਇਸੈਂਸ](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

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

<a id="quick-start"></a>
## ਤੁਰੰਤ ਸ਼ੁਰੂਆਤ

<details>
<summary><b>ਡੌਕਰ (ਆਪਣੇ ਆਪ ਹੋਸਟ ਕਰਨ ਲਈ ਸਿਫਾਰਸ਼ ਕੀਤਾ ਗਿਆ)</b></summary>

<a id="docker"></a>

<br/>

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

ਘੱਟੋ-ਘੱਟ ਇੱਕ ਪ੍ਰਦਾਤਾ ਕੁੰਜੀ ਵਾਤਾਵਰਣ ਰਾਹੀਂ ਸੈੱਟ ਕਰੋ (ਉਦਾਹਰਣ ਲਈ OpenRouter ਲਈ `OPENROUTER_API_KEY`)। ਗੁਪਤ ਚੀਜ਼ਾਂ ਨੂੰ ਇਮੇਜ ਵਿੱਚ ਨਾ ਸ਼ਾਮਲ ਕਰਨ ਲਈ `-e` ਜਾਂ `docker compose` / `.env` ਨਾਲ ਚਲਾਓ। ਪ੍ਰਦਾਤਾ ਕੁੰਜੀਆਂ ਵੈੱਬ UI ਵਿੱਚ **ਨਹੀਂ** ਦਰਜ ਕੀਤੀਆਂ ਜਾਂਦੀਆਂ; ਸਰਵਰ ਉਹਨਾਂ ਨੂੰ ਵਾਤਾਵਰਣ ਤੋਂ ਪੜ੍ਹਦਾ ਹੈ।

<br/>

> ℹ️ **ਨੋਟ**<br/>
> ਡੌਕਰ ਵਿੱਚ, LLM ਪ੍ਰਮਾਣ ਪੱਤਰਾਂ ਨੂੰ `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … ਵਰਗੇ ਵਾਤਾਵਰਣ ਚਲਣ ਨਾਲ ਸੈੱਟ ਕੀਤਾ ਜਾਂਦਾ ਹੈ (ਵੈੱਬ UI ਵਿੱਚ ਨਹੀਂ)। ਡੈਸਕਟਾਪ (Electron) ਉੱਤੇ ਤੁਸੀਂ **ਸੈਟਿੰਗਾਂ → API** ਵਿੱਚ ਕੁੰਜੀਆਂ ਨੂੰ ਕਾਨਫਿਗਰ ਕਰਦੇ ਹੋ।

<br/>

ਜਾਂ ਡੌਕਰ ਕੰਪੋਜ਼ ਵਰਤੋ:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

ਸਾਰੇ ਮਾਹੌਲ ਚਲਨ, ਜਿਵੇਂ `PORT`, `CONFIG_PATH`, `TZ`, ਅਤੇ LLM ਕੁੰਜੀਆਂ (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) ਲਈ [ਕਾਨਫ਼ੀਗਰੇਸ਼ਨ](#configuration-and-environment) ਵੇਖੋ।

</details>

<br/>

<details>
<summary><b>ਸਰਵਰ ਟਾਈਮਜ਼ੋਨ (ਡੌਕਰ)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

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

</details>

<br/>

<details>
<summary><b>ਵਿੰਡੋਜ਼</b></summary>

<a id="windows-electron"></a>

<br/>

- [ਰਿਲੀਜ਼](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ ਨਵੀਂ `Transrewrt Setup x.y.z.exe` ਡਾਊਨਲੋਡ ਕਰੋ।
- `.exe` ਚਲਾਓ ਅਤੇ ਇੰਸਟਾਲਰ ਦੀ ਪਾਲਣਾ ਕਰੋ।
- ਪਹਿਲੀ ਵਾਰ ਚਲਾਉਣਾ: ਸਟਾਰਟ ਮੀਨੂ ਜਾਂ ਡੈਸਕਟਾਪ ਸ਼ਾਰਟਕੱਟ ਤੋਂ ਐਪ ਸ਼ੁਰੂ ਕਰੋ।
- **ਸੈਟਿੰਗਾਂ → API** ਵਿੱਚ ਆਪਣੀਆਂ API ਕੁੰਜੀਆਂ ਦਰਜ ਕਰੋ। ਤੁਹਾਨੂੰ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਪ੍ਰਦਾਤਾ ਨੂੰ ਕਨਫਿਗਰ ਕਰਨ ਦੀ ਲੋੜ ਹੈ; ਮੁਫ਼ਤ ਮਾਡਲਾਂ ਲਈ OpenRouter ਆਮ ਹੈ।

<br/>

> ℹ️ **ਨੋਟ**<br/>
> ਵਿੰਡੋਜ਼ ਇਹਨਾਂ ਵਿੱਚੋਂ ਇੱਕ ਸੁਰੱਖਿਆ ਚੇਤਾਵਨੀ ਦਿਖਾ ਸਕਦਾ ਹੈ (ਬਿਨਾਂ ਦਸਤਖਤ/ਸੁਤੰਤਰ ਐਪਸ ਲਈ ਆਮ):
>   - **ਯੂਜ਼ਰ ਅਕਾਊਂਟ ਕੰਟਰੋਲ (UAC)**: "ਕੀ ਤੁਸੀਂ ਅਣਜਾਣ ਪਬਲਿਸ਼ਰ ਤੋਂ ਇਸ ਐਪ ਨੂੰ ਆਪਣੇ ਡਿਵਾਈਸ 'ਤੇ ਤਬਦੀਲੀਆਂ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦੇਣਾ ਚਾਹੁੰਦੇ ਹੋ?" → **ਹਾਂ** ਤੇ ਕਲਿੱਕ ਕਰੋ।
>   - **ਮਾਈਕਰੋਸਾਫਟ ਡਿਫੈਂਡਰ ਸਮਾਰਟਸਕਰੀਨ**: "ਵਿੰਡੋਜ਼ ਨੇ ਤੁਹਾਡੇ ਪੀਸੀ ਨੂੰ ਸੁਰੱਖਿਅਤ ਕੀਤਾ" → **ਹੋਰ ਜਾਣਕਾਰੀ** ਤੇ ਕਲਿੱਕ ਕਰੋ → **ਫਿਰ ਵੀ ਚਲਾਓ**।
>
> ਇਹ ਇਸ ਲਈ ਹੁੰਦਾ ਹੈ ਕਿਉਂਕਿ ਐਪ ਮਾਈਕਰੋਸਾਫਟ ਜਾਂ ਕਿਸੇ ਵੱਡੇ ਪਬਲਿਸ਼ਰ ਦੁਆਰਾ ਦਸਤਖਤ ਨਹੀਂ ਕੀਤਾ ਗਿਆ ਹੈ—ਇਹ ਸੁਰੱਖਿਅਤ ਹੈ ਜੇਕਰ ਸਾਡੇ ਅਧਿਕਾਰਤ GitHub ਰਿਲੀਜ਼ (ਹਰੇਕ ਐਸੇਟ ਨਾਲ [ਰਿਲੀਜ਼](https://github.com/wsj-br/transrewrt/releases) ਪੇਜ 'ਤੇ ਚੈੱਕਸਮ ਦੀ ਪੁਸ਼ਟੀ ਕਰਕੇ) ਤੋਂ ਡਾਊਨਲੋਡ ਕੀਤਾ ਗਿਆ ਹੈ।

<br/>

</details>

<br/>

<details>
<summary><b>ਲੀਨਕਸ</b></summary>

<a id="linux-electron"></a>

<br/>

ਆਪਣੇ CPU ਲਈ [ਰਿਲੀਜ਼](https://github.com/wsj-br/transrewrt/releases) ਤੋਂ `.AppImage` ਡਾਊਨਲੋਡ ਕਰੋ (`x64` ਆਮ ਪੀਸੀ ਲਈ, `arm64` ਬਹੁਤ ਸਾਰੇ ARM ਉਪਕਰਣਾਂ ਲਈ, ਰਾਸਪਬੇਰੀ ਪਾਈ 4+ ਸਮੇਤ), ਫਿਰ:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

x86_64/amd64 'ਤੇ `x64` ਫਾਈਲ ਨਾਮ ਵਰਤੋ; ARM64 'ਤੇ `...-arm64.AppImage` ਨਾਮ ਵਰਤੋ।

ਆਪਣੀਆਂ API ਕੁੰਜੀਆਂ **ਸੈਟਿੰਗਾਂ → API** ਵਿੱਚ ਦਰਜ ਕਰੋ। ਤੁਹਾਨੂੰ ਘੱਟੋ-ਘੱਟ ਇੱਕ ਪ੍ਰਦਾਤਾ ਨੂੰ ਕਨਫਿਗਰ ਕਰਨ ਦੀ ਲੋੜ ਹੈ; ਮੁਫ਼ਤ ਮਾਡਲਾਂ ਲਈ OpenRouter ਆਮ ਹੈ।

**ਕੰਸੋਲ ਸੁਨੇਹੇ:** ਪੈਕੇਜ ਕੀਤੇ ਲੀਨਕਸ ਬਿਲਡ (`x64` ਅਤੇ `arm64` AppImages) ਟਰਮੀਨਲ ਵਿੱਚ ਨੋਡ ਡੀਪ੍ਰੀਸੀਏਸ਼ਨ ਚੇਤਾਵਨੀਆਂ ਨੂੰ ਦਬਾਉਂਦੇ ਹਨ (ਉਦਾਹਰਨ ਲਈ ਅੰਦਰੂਨੀ `punycode` ਮੌਡੀਊਲ)। ਜੇਕਰ ਕ੍ਰੋਮੀਅਮ "GLES3 ਅਸਮਰੱਥ" ਵਰਗੀਆਂ GPU / EGL ਗਲਤੀਆਂ ਛਾਪਦਾ ਹੈ ਪਰ ਐਪ ਕੰਮ ਕਰਦਾ ਹੈ, ਤਾਂ ਤੁਸੀਂ ਹਾਰਡਵੇਅਰ ਐਕਸਲੀਰੇਸ਼ਨ ਨੂੰ ਅਯੋਗ ਕਰਕੇ ਉਹਨਾਂ ਨੂੰ ਚੁੱਪ ਕਰਵਾ ਸਕਦੇ ਹੋ:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

ਇਹ amd64 'ਤੇ ਵੀ ਲਾਗੂ ਹੁੰਦਾ ਹੈ; ਆਪਣੇ ਡਾਊਨਲੋਡ ਨਾਲ ਮੇਲ ਖਾਣ ਲਈ ਫਾਈਲ ਨਾਮ ਬਦਲੋ।

Debian/Ubuntu 'ਤੇ, ਤੁਹਾਨੂੰ Chromium ਦੁਆਰਾ ਲੋੜੀਂਦੀਆਂ ਅਤਿਰਿਕਤ **ਰਨਟਾਈਮ** ਲਾਇਬਰੇਰੀਆਂ ਦੀ ਲੋੜ ਹੋ ਸਕਦੀ ਹੈ (ਜੋ ਕਿ ਪੂਰੀ ਡੈਸਕਟਾਪ ਇੰਸਟਾਲੇਸ਼ਨਾਂ 'ਤੇ ਅਕਸਰ ਪਹਿਲਾਂ ਤੋਂ ਮੌਜੂਦ ਹੁੰਦੀਆਂ ਹਨ)। ਜੇ ਲੋੜ ਹੋਵੇ ਤਾਂ ਹੇਠਾਂ ਦਿੱਤੇ ਕਮਾਂਡ ਚਲਾਓ:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

`arm64` ਲਈ `libasound2t64` ਨੂੰ `libasound2` ਨਾਲ ਬਦਲੋ। ਘੱਟੋ-ਘੱਟ ਜਾਂ ਕਸਟਮ ਇੰਸਟਾਲੇਸ਼ਨਾਂ ਅਜੇ ਵੀ `.so` ਫਾਈਲ ਦੇ ਗਾਇਬ ਹੋਣ ਕਾਰਨ ਅਸਫਲ ਹੋ ਸਕਦੀਆਂ ਹਨ। ਗਲਤੀ ਸੁਨੇਹੇ ਵਿੱਚ ਨਾਮ ਦਿੱਤੇ ਪੈਕੇਜ ਨੂੰ ਇੰਸਟਾਲ ਕਰੋ (ਆਮ ਐਕਸਟਰਾ: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`)। ਕੁਝ ਵਾਤਾਵਰਣਾਂ ਵਿੱਚ, ਤੁਹਾਨੂੰ `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage` ਵਰਤ ਕੇ ਐਪ ਨੂੰ ਚਲਾਉਣ ਦੀ ਲੋੜ ਪੈ ਸਕਦੀ ਹੈ।

<br/>

> ℹ️ **ਨੋਟ**<br/>
> macOS ਨੂੰ ਫਿਲਹਾਲ ਸਹਾਇਤਾ ਪ੍ਰਦਾਨ ਨਹੀਂ ਕੀਤੀ ਗਈ ਹੈ। Transrewrt Windows, Linux, ਅਤੇ ਡੌਕਰ ਲਈ ਉਪਲਬਧ ਹੈ।

</details>

<br/>

ਇਕ ਵਾਰ ਐਪ ਚੱਲਣ ਤੋਂ ਬਾਅਦ, ਪਾਠ ਨੂੰ ਅਨੁਵਾਦ ਕਰਨ, ਮੁੜ-ਲਿਖਣ ਅਤੇ ਟ੍ਰਾਂਸਫਾਰਮ ਕਰਨ, ਪ੍ਰਾਮਿਟਾਂ ਨੂੰ ਪਰਬੰਧਿਤ ਕਰਨ ਅਤੇ ਮਾਡਲਾਂ ਨੂੰ ਕਾਨਫ਼ੀਗਰ ਕਰਨ ਬਾਰੇ ਜਾਣਨ ਲਈ **[ਯੂਜ਼ਰ ਗਾਈਡ](USER-GUIDE.pa.md)** ਵੇਖੋ।

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## ਇੱਕ OpenRouter API ਕੁੰਜੀ ਪ੍ਰਾਪਤ ਕਰਨਾ

Transrewrt ਕਈ AI ਪ੍ਰਦਾਤਾਵਾਂ ਨੂੰ ਸਮਰਥਨ ਦਿੰਦਾ ਹੈ। [OpenRouter](https://openrouter.ai) ਇੱਕ ਪ੍ਰਸਿੱਧ ਚੋਣ ਹੈ ਕਿਉਂਕਿ ਇਹ ਇੱਕੋ ਕੁੰਜੀ ਹੇਠ ਬਹੁਤ ਸਾਰੇ ਮਾਡਲਾਂ ਨੂੰ ਇਕੱਠਾ ਕਰਦਾ ਹੈ ਅਤੇ ਮੁਫ਼ਤ ਮਾਡਲ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।

1. [openrouter.ai](https://openrouter.ai) ਤੇ ਸਾਈਨ ਅੱਪ ਕਰੋ ਜਾਂ ਲੌਗ ਇਨ ਕਰੋ।
2. [ਕੁੰਜੀਆਂ](https://openrouter.ai/keys) ਸਫ਼ਾ ਖੋਲ੍ਹੋ ਅਤੇ ਇੱਕ ਨਵੀਂ ਕੁੰਜੀ ਬਣਾਓ (ਨਾਮ ਦਿਓ, ਅਤੇ ਵਿਕਲਪਿਕ ਤੌਰ 'ਤੇ ਕਰੈਡਿਟ ਸੀਮਾ ਸੈੱਟ ਕਰੋ)। ਕਰੈਡਿਟ ਸ਼ਾਮਲ ਕੀਤੇ ਬਿਨਾਂ ਮੁਫ਼ਤ ਮਾਡਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ।
3. **ਡੈਸਕਟਾਪ (ਇਲੈਕਟ੍ਰਾਨ):** ਕੁੰਜੀਆਂ **ਸੈਟਿੰਗਾਂ → API** ਵਿੱਚ ਪੇਸਟ ਕਰੋ। **ਡੌਕਰ:** `OPENROUTER_API_KEY` ਵਰਗੇ ਮਾਹੌਲ ਚਲਨ ਸੈੱਟ ਕਰੋ (ਤੇਜ਼ ਸ਼ੁਰੂਆਤ ਲਈ [Quick start](#quick-start) ਵੇਖੋ)।

ਅਨੁਵਾਦ, ਮੁੜ-ਲਿਖਤ, ਜਾਂ ਟ੍ਰਾਂਸਫਾਰਮ ਲਈ OpenRouter ਦੇ **ਬਾਡੀ ਬਿਲਡਰ** ਮਾਡਲ ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) ਦੀ ਵਰਤੋਂ ਨਾ ਕਰੋ: ਇਹ ਉਹਨਾਂ ਕੰਮਾਂ ਲਈ ਪੂਰਾ ਟੈਕਸਟ ਨਹੀਂ, ਬਲਕਿ JSON ਰਿਕੁਐਸਟ ਪੇਲੋਡ ਵਾਪਸ ਕਰਦਾ ਹੈ। ਯੂਜ਼ਰ ਗਾਈਡ ਵਿੱਚ [ਸੈਟਿੰਗਾਂ → ਮਾਡਲ](USER-GUIDE.pa.md#models) ਵੇਖੋ।

ਤੁਸੀਂ ਹੋਰ ਪ੍ਰਦਾਤਾਵਾਂ (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ਦੀ ਵਰਤੋਂ ਵੀ ਕਰ ਸਕਦੇ ਹੋ ਜਾਂ [Ollama](https://ollama.com) ਨਾਲ ਮਾਡਲ ਸਥਾਨਕ ਤੌਰ 'ਤੇ ਚਲਾ ਸਕਦੇ ਹੋ। ਸਮਰਥਿਤ ਪ੍ਰਦਾਤਾਵਾਂ ਅਤੇ ਮਾਹੌਲ ਚਲਨ ਦੀ ਪੂਰੀ ਸੂਚੀ ਲਈ [ਕਾਨਫ਼ੀਗਰੇਸ਼ਨ](#configuration-and-environment) ਵੇਖੋ।

</br>

> ⚠️ **ਚੇਤਾਵਨੀ**<br/>
> ਜੇਕਰ ਤੁਸੀਂ ਕਿਸੇ ਹੋਰ ਡਿਵਾਈਸ, ਕੰਟੇਨਰ, ਜਾਂ ਸੇਵਾ ਤੋਂ Ollama ਦੀ ਵਰਤੋਂ ਕਰ ਰਹੇ ਹੋ, ਤਾਂ ਬਾਹਰੀ ਕਨੈਕਸ਼ਨਾਂ ਨੂੰ ਸਹਾਇਤਾ ਦੇਣ ਲਈ Ollama ਨੂੰ ਕਾਨਫਿਗਰ ਕਰਨਾ ਯਾਦ ਰੱਖੋ (ਸਿਰਫ਼ localhost ਨਹੀਂ)।

<br/><br/>

<a id="configuration-and-environment"></a>
## ਕਾਨਫਿਗਰੇਸ਼ਨ ਅਤੇ ਵਾਤਾਵਰਣ

</br>

**ਕਾਨਫ਼ੀਗ ਫਾਇਲ ਸਥਾਨ**

| ਡਿਪਲੌਇਮੈਂਟ         | ਕਾਨਫ਼ੀਗ ਸਥਾਨ                                   |
| ------------------ | ------------------------------------------------- |
| ਇਲੈਕਟ੍ਰਾਨ (Windows) | `%APPDATA%\transrewrt\`                           |
| ਇਲੈਕਟ੍ਰਾਨ (Linux)   | `~/.config/transrewrt/`                           |
| ਵੈੱਬ / ਡਾਕਰ       | `/app/data/config.json` (ਬਰਕਰਾਰ ਰੱਖਣ ਲਈ ਇੱਕ ਵਾਲੀਊਮ ਵਰਤੋਂ) |

<br/>

**ਵਾਤਾਵਰਣ ਚਲਣਯੋਗ** (ਵੈੱਬ/ਡਾਕਰ ਸਿਰਫ; ਇਲੈਕਟ੍ਰਾਨ ਸਥਾਨਕ ਕਾਨਫ਼ੀਗ ਫਾਇਲ ਵਰਤਦਾ ਹੈ)

| ਚਲਣ             | ਵੇਰਵਾ                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | ਸਰਵਰ ਸੁਣਨ ਵਾਲਾ ਪੋਰਟ  (ਡਿਫਾਲਟ `5000` ਹੈ)                                  |
| `CONFIG_PATH`        | ਕਾਨਫਿਗ ਫਾਈਲ ਲਈ ਮਾਰਗ (ਡਿਫਾਲਟ `/app/data/config.json)` ਹੈ)                 |
| `TZ`                 | ਸਰਵਰ-ਸਾਈਡ ਸਮਾਂ ਲਈ ਟਾਈਮਜ਼ੋਨ (ਲਾਗਿੰਗ, ਆਦਿ) (ਡਿਫਾਲਟ `Europe/London` ਹੈ) |
| `OPENROUTER_API_KEY` | OpenRouter API ਕੁੰਜੀ                                                           |
| `OPENAI_API_KEY`     | OpenAI API ਕੁੰਜੀ                                                               |
| `CEREBRAS_API_KEY`   | ਸੇਰੇਬਰਸ API ਕੁੰਜੀ                                                             |
| `ANTHROPIC_API_KEY`  | Anthropic API ਕੁੰਜੀ                                                            |
| `GOOGLE_API_KEY`     | Google Gemini API ਕੁੰਜੀ                                                        |
| `DEEPSEEK_API_KEY`   | DeepSeek API ਕੁੰਜੀ                                                             |
| `GROQ_API_KEY`       | Groq API ਕੁੰਜੀ                                                                 |
| `MISTRAL_API_KEY`    | Mistral API ਕੁੰਜੀ                                                              |
| `OLLAMA_URL`         | Ollama ਬੇਸ URL (ਉਦਾਹਰਣ ਲਈ `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | xAI API ਕੁੰਜੀ                                                                  |

ਸਿਰਫ ਉਹਨਾਂ ਪ੍ਰਦਾਤਾਵਾਂ ਨੂੰ ਕਾਨਫ਼ੀਗਰ ਕਰੋ ਜਿਹਨਾਂ ਦੀ ਤੁਸੀਂ ਵਰਤੋਂ ਕਰਦੇ ਹੋ। ਮਾਡਲ ID ਨਾਮ ਸਪੇਸ ਕੀਤੇ ਗਏ ਹਨ (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, ਆਦਿ)।

**ਲਾਗਤ ਪ੍ਰਦਰਸ਼ਨ:** OpenRouter ਲਾਗੂ ਹੋਣ ਤੇ ਸਹੀ ਬਿਲਡ ਲਾਗਤ ਵਾਪਸ ਕਰਦਾ ਹੈ। ਹੋਰ ਪ੍ਰਦਾਤਾ OpenRouter ਦੀ ਖੁੱਲ੍ਹੀ ਮਾਡਲ ਕੀਮਤ ਤੋਂ **ਅਨੁਮਾਨਿਤ** ਲਾਗਤ ਵਰਤਦੇ ਹਨ ਜਦੋਂ OpenRouter ਕੁੰਜੀ ਉਪਲਬਧ ਹੁੰਦੀ ਹੈ; ਬਿਨਾਂ ਇਸ ਦੇ, ਗੈਰ-OpenRouter ਲਾਗਤ `0` ਵਜੋਂ ਦਿਖਾਈ ਦੇ ਸਕਦੀ ਹੈ। ਅਨੁਮਾਨ ਬਿੱਲ ਨਹੀਂ ਹੁੰਦੇ।

<br/>

**ਡਾਟਾ ਅਤੇ ਸਥਾਈਕਰਨ:** ਡਾਕਰ ਲਈ, `/app/data` ਤੇ ਇੱਕ ਵਾਲੀਊਮ ਮਾਊਂਟ ਕਰੋ ਤਾਂ ਜੋ `config.json` ਅਤੇ SQLite ਡੇਟਾਬੇਸ ਕੰਟੇਨਰ ਰੀਸਟਾਰਟਾਂ ਦੌਰਾਨ ਬਰਕਰਾਰ ਰਹਿ ਸਕਣ। ਬਿਨਾਂ ਵਾਲੀਊਮ ਦੇ, ਕੰਟੇਨਰ ਰੁਕਣ ਤੇ ਸਭ ਡਾਟਾ ਗੁਆਚ ਜਾਂਦਾ ਹੈ।

<br/>

**ਵੈੱਬ ਪ੍ਰਮਾਣਕਰਨ:**

- ਮੂਲ ਐਡਮਿਨ: `admin` / `transrewrt26`।
- **ਸੈਟਿੰਗਾਂ → ਉਪਭੋਗਤਾ** ਵਿੱਚ ਉਪਭੋਗਤਾ ਪਰਬੰਧਿਤ ਕਰੋ।
- ਪਾਸਵਰਡ ਰੀਸੈੱਟ ਕਰੋ: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **ਚੇਤਾਵਨੀ**<br/>
> ਕਿਸੇ ਵੀ ਨੈੱਟਵਰਕ-ਐਕਸੈੱਸਯੋਗ ਹੋਸਟ 'ਤੇ ਤੁਰੰਤ ਡਿਫਾਲਟ ਐਡਮਿਨ ਪਾਸਵਰਡ ਬਦਲੋ।

<br/>

ਕੁੰਜੀ ਸੈਟਿੰਗਾਂ (ਫਾਂਟ, ਮਾਡਲ, ਭਾਸ਼ਾਵਾਂ, ਆਦਿ) ਐਪਲੀਕੇਸ਼ਨ ਸੈਟਿੰਗਾਂ ਵਿੱਚ ਉਪਲਬਧ ਹਨ।

<br/><br/>

<a id="development-and-architecture"></a>
## ਵਿਕਾਸ ਅਤੇ ਆਰਕੀਟੈਕਚਰ

- **ਵਿਕਾਸ:** ਸੈਟਅੱਪ, ਬਿਲਡ, ਟੈਸਟ, ਅਤੇ ਡਿਪਲੌਇ (ਇਲੈਕਟ੍ਰਾਨ, ਵੈੱਬ, ਡਾਕਰ) - **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)** ਵੇਖੋ।
- **ਆਰਕੀਟੈਕਚਰ ਅਤੇ ਸਿਸਟਮ ਦਾ ਜਨਰਲ ਵੇਰਵਾ:** ਫੋਲਡਰ ਸਟਰਕਚਰ, ਟੈਕ ਸਟੈਕ, ਡਿਜ਼ਾਈਨ ਫੈਸਲੇ - **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)** ਵੇਖੋ।

<br/><br/>

<a id="reporting-issues"></a>
## ਮੁੱਦਿਆਂ ਦੀ ਰਿਪੋਰਟਿੰਗ

[GitHub](https://github.com/wsj-br/transrewrt/issues) ਤੇ ਇੱਕ ਮੁੱਦਾ ਖੋਲ੍ਹੋ। ਆਪਣਾ ਪਲੇਟਫਾਰਮ (Windows / Linux / Docker) ਅਤੇ ਐਪ ਵਰਜਨ (About ਡਾਇਲਾਗ ਜਾਂ Releases ਪੇਜ 'ਤੇ ਦਿਖਾਇਆ ਗਿਆ) ਸ਼ਾਮਲ ਕਰੋ।

<br/><br/>

<a id="disclaimer"></a>
## ਅਸਵੀਕਰਣ

ਉਤਪਾਦ ਨਾਮ ਅਤੇ ਆਈਕਨ ਆਪਣੇ ਸਬੰਧਤ ਮਾਲਕਾਂ ਦੇ ਹਨ ਅਤੇ ਸਿਰਫ਼ ਪਛਾਣ ਦੇ ਉਦੇਸ਼ਾਂ ਲਈ ਵਰਤੇ ਗਏ ਹਨ। ਇਹ ਸੌਫ਼ਟਵੇਅਰ ਕਿਸੇ ਵੀ ਦੱਸੇ ਗਏ ਬ੍ਰਾਂਡ ਨਾਲ ਸੰਬੰਧਿਤ ਜਾਂ ਪ੍ਰਮਾਣਿਤ ਨਹੀਂ ਹੈ।

<br/><br/>

<a id="license"></a>
## ਲਾਇਸੈਂਸ

ਕਾਪੀਰਾਈਟ © 2026 ਵਾਲਡੇਮਾਰ ਸਕੂਡੇਲਰ ਜੂਨੀਅਰ।

[Apache License 2.0](../LICENSE)
