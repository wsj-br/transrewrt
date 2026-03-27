---
translated_at: "2026-03-26T00:30:19.214Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logo" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lisensya: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Kasangkapan sa text na pinapagana ng AI: isalin sa pagitan ng mga wika, i-rewrite sa iba't ibang istilo, at baguhin gamit ang custom na mga prompt — gamit ang maramihang AI provider (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, at lokal na Ollama). Tumatakbo bilang desktop app (Electron) o self-hosted na web app (Docker).

- **Isalin** — sa pagitan ng maraming wika, may awtomatikong detection ng wika ng source
- **I-rewrite** — ayusin ang grammar, mapabuti ang kalinawan, formal/impormal, pagpapaikli, pagpapalawak, teknikal
- **Baguhin** — mga custom na AI prompt; lumikha at pamahalaan ang mga prompt, opsyonal na wika ng target bawat prompt
- **Kasaysayan** — buong kasaysayan ng pagpapatakbo kasama ang input/output text, pag-filter, at eksport
- **Modelo at gastos** — pumili ng modelo mula sa anumang naka-configure na provider; dashboard para sa gastos at paggamit na may log, mga buod ayon sa modelo/lakas/ng araw
- **UI** — interface na multilingual (30+ na mga wika, suporta sa RTL), mga font, ...
- **Mode ng Web** — suporta sa multi-user na may admin na mga tungkulin
- **Desktop** — Electron app para sa Windows at Linux
- **Self-hosted** — larawan ng Docker para sa amd64 & arm64 (handang gamitin sa Raspberry Pi)

Kapag nai-install na, tingnan ang **[Gabay sa Gumagamit](USER-GUIDE.tl.md)** para sa buong gabay sa lahat ng tampok.

<small>**Basahin sa iba pang mga wika:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Paunawa sa pagsasalin ng UI at dokumentasyon:** Ang lahat ng mga wika ng interface maliban sa orihinal na English (UK)
> ay isinalin gamit ang mga modelo ng AI; ang pagpapahayag ay maaaring hindi eksakto o may mga kamalian.

</small>

<br/>

<a id="screenshots"></a>
## Mga Screenshot

**Tagapili ng wika**

![Tagapili ng wika](../images/screenshots/tl/language-selector.png)

**Isalin**

![Isalin](../images/screenshots/tl/translate.png)

**Baguhin - editor ng prompt**

![Baguhin - editor ng prompt](../images/screenshots/tl/transform-prompt-edit.png)

**Dashboard**

![Dashboard ng gastos](../images/screenshots/tl/dashboard-summary.png)

**Kasaysayan**

![Kasaysayan](../images/screenshots/tl/history.png)

**Mga Setting - pagpili ng modelo**

![Mga Setting - pagpili ng modelo](../images/screenshots/tl/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Talaan ng mga Nilalaman

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Mabilis na simula](#mabilis-na-simula)
- [Pag-install](#pag-install)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Paggamit ng OpenRouter API key](#paggamit-ng-openrouter-api-key)
- [Konpigurasyon at kapaligiran](#konpigurasyon-at-kapaligiran)
- [Pag-unlad at arkitektura](#pag-unlad-at-arkitektura)
- [Mga paglabas at tag](#mga-paglabas-at-tag)
- [Paano makakatulong](#paano-makakatulong)
- [Deklarasyon](#deklarasyon)
- [Lisensya](#lisensya)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="mabilis-na-simula"></a>
## Mabilis na simula

**Docker (ina-inaakong paraan kung gagawing sariling server)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Palitan ang `sk-or-your-key` ng iyong [OpenRouter API key](https://openrouter.ai/keys) (o ilagay ang mga key ng ibang tagapagbigay; tingnan ang [Konpigurasyon](#konpigurasyon-at-kapaligiran)). Buksan ang [http://localhost:5000](http://localhost:5000) at palitan ang default na admin password bago ipaalam ang serbisyo sa publiko.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Sa Docker, itinatakda ang mga kredensyal ng LLM gamit ang mga environment variable tulad ng `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (hindi sa web UI). Sa desktop (Electron), iko-konpigura ang mga key sa **Settings → API**.

<br/>

**Windows**

I-download ang pinakabagong `Transrewrt Setup x.y.z.exe` mula sa [Mga Paglabas](https://github.com/wsj-br/transrewrt/releases), patakbuhin ang installer, at pagkatapos ay buksan mula sa Start menu o shortcut sa desktop. Ilagay ang iyong API keys sa **Settings → API**. Kailangan mong i-ayos ang kahit isang tagapagbigay; ang OpenRouter ay karaniwan para sa libreng mga modelo.

<br/>

**Linux**

I-download ang `.AppImage` para sa iyong CPU mula sa [Mga Paglabas](https://github.com/wsj-br/transrewrt/releases) (`x64` para sa karaniwang PC, `arm64` para sa maraming ARM device, kabilang ang Raspberry Pi 4+), pagkatapos:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Ilagay ang iyong API keys sa **Settings → API**. Kailangan mong i-ayos ang kahit isang tagapagbigay; ang OpenRouter ay karaniwan para sa libreng mga modelo.

Sa Debian/Ubuntu, maaaring kailanganin mong i-install muna ang karagdagang dependencies:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Tingnan ang [Pag-install → Linux](#linux-electron) para sa mga detalye.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Ang macOS ay hindi pa suportado. Ang Transrewrt ay available para sa Windows, Linux, at Docker.

<br/>

Kapag tumatakbo na ang app, tingnan ang **[Gabay sa Gumagamit](USER-GUIDE.tl.md)** upang matuto kung paano isasalin, isusulat muli, at baguhin ang teksto, pamahalaan ang mga prompt, at i-configure ang mga modelo.

<br/><br/>

<a id="pag-install"></a>
## Pag-install

<a id="windows-electron"></a>
### Windows (Electron)

- I-download ang pinakabagong installer mula sa [Mga Paglabas](https://github.com/wsj-br/transrewrt/releases).
- Patakbuhin ang `.exe` at sundin ang mga tagubilin sa installer.
- Unang pagpapatakbo: buksan ang app mula sa Start menu o shortcut sa desktop.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- I-download ang tugmang `.AppImage` (`x64` o `arm64`) mula sa [Mga Paglabas](https://github.com/wsj-br/transrewrt/releases).
- Patakbuhin: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` sa x86_64/amd64, o gamitin ang filename na `...-arm64.AppImage` sa ARM64.
- Mga karagdagang dependencies (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Tingnan ang [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para sa karagdagang impormasyon.

<br/>

<a id="docker"></a>
### Docker

- I-download: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Itakda ang kahit isang key ng tagapagbigay gamit ang environment (halimbawa ang `OPENROUTER_API_KEY` para sa OpenRouter). Ipasa ang variables gamit ang `-e` o `docker compose` / `.env` para hindi ma-embed ang mga lihim sa imahe.
- Ang mga key ng tagapagbigay ay **hindi** ini-enter sa web UI; binabasa ito ng server mula sa environment.

Halimbawa - named volume para sa pagpapatuloy (OpenRouter key sa pamamagitan ng env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opsyon   | Paglalarawan                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (i-map gamit ang `-p 5000:5000`)                                                                        |
| Volume   | I-mount ang `/app/data` para sa pagpapatuloy ng config at database                                            |
| Env vars | `PORT`, `CONFIG_PATH`, kasama na ang mga LLM keys (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - tingnan ang [Konpigurasyon](#konpigurasyon-at-kapaligiran) |

Para i-build at patakbuhin mula sa source: `docker compose up --build -d` o `pnpm docker:up` - tingnan ang [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="paggamit-ng-openrouter-api-key"></a>

## Paggamit ng OpenRouter API key

Sinusuportahan ng Transrewrt ang maraming AI provider. Ang [OpenRouter](https://openrouter.ai) ay isang sikat na pagpipilian dahil pinagsama nito ang maraming modelo sa isang key at nag-aalok ng libreng mga modelo.

1. Mag-sign up o mag-log in sa [openrouter.ai](https://openrouter.ai).
2. Buksan ang pahina ng [Keys](https://openrouter.ai/keys) at lumikha ng bagong key (bigyan ng pangalan, at opsyonal na takdaan ng limitasyon sa kredito). Maaaring gamitin ang libreng mga modelo nang walang pagdaragdag ng kredito.
3. **Desktop (Electron):** i-paste ang mga key sa **Settings → API**. **Docker:** itakda ang mga env var tulad ng `OPENROUTER_API_KEY` (tingnan ang [Quick start](#quick-start)).

Huwag gamitin ang **Body Builder** model ng OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) para sa pagsasalin, pag-rewriter, o pagbabago: ito ay nagbabalik ng JSON request payloads, hindi ang kumpletong teksto para sa mga ganitong gawain. Tingnan ang [Settings → Models](USER-GUIDE.tl.md#models) sa User Guide.

Maaari rin kayong gumamit ng iba pang provider (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o patakbuhin ang mga modelo nang lokal gamit ang [Ollama](https://ollama.com). Tingnan ang [Configuration](#configuration-and-environment) para sa buong listahan ng mga suportadong provider at environment variables.

> ⚠️ **BABALA**<br/>
> Kung gumagamit ka ng Ollama mula sa ibang device, container, o serbisyo, tandaan na i-configure ang Ollama para payagan ang mga panlabas na koneksyon (hindi lang localhost).

Para sa mga limitasyon, BYOK, at iba pa, tingnan ang [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konpigurasyon at kapaligiran

**Mga lokasyon ng config file**

| Deployment         | Lokasyon ng Config                                 |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gumamit ng volume para mapanatili) |

<br/>

**Mga Environment variable** (para lang sa web/Docker; ginagamit ng Electron ang lokal na config file)

| Variable         | Default                 | Paglalarawan |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Server listening port |
| `CONFIG_PATH`    | `/app/data/config.json` | Landas patungo sa config file |
| `OPENROUTER_API_KEY` | *(walang laman)*         | OpenRouter API key |
| `OPENAI_API_KEY`     | *(walang laman)*         | OpenAI API key |
| `CEREBRAS_API_KEY`   | *(walang laman)*         | Cerebras API key |
| `ANTHROPIC_API_KEY`  | *(walang laman)*         | Anthropic API key |
| `GOOGLE_API_KEY`     | *(walang laman)*         | Google Gemini API key |
| `DEEPSEEK_API_KEY`   | *(walang laman)*         | DeepSeek API key |
| `GROQ_API_KEY`       | *(walang laman)*         | Groq API key |
| `MISTRAL_API_KEY`    | *(walang laman)*         | Mistral API key |
| `OLLAMA_URL`     | *(walang laman)*         | Ollama base URL (hal. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(walang laman)*         | xAI API key |

Ikumpigura lamang ang mga provider na gagamitin mo. Ang mga model ID ay may namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, at iba pa).

**Paghahayag ng gastos:** Ibinabalik ng OpenRouter ang eksaktong bayad kapag kinakailangan. Ang ibang provider ay gumagamit ng **sinasabing** gastos mula sa pampublikong presyo ng modelo mula sa OpenRouter kung available ang OpenRouter key; kung wala ito, maaaring magpakita ang gastos sa di-OpenRouter bilang `0`. Ang mga pagtatantiya ay hindi resibo.

<br/>

**Data at pagpapatuloy:** Para sa Docker, i-mount ang isang volume sa `/app/data` upang mapanatili ang `config.json` at ang SQLite database kapag bumalik ang container. Kung wala ang volume, mawawala ang lahat ng data kapag tumigil ang container.

**Mga developer:** Pagkatapos kuhain ang mga pagbabagong pinalitan ang lumang single-key config, i-reset o i-merge ang `data/config.json` gamit ang bagong default na anyo mula sa `src/config-defaults/config_default.json` kung ang lokal mong file ay gumagamit pa rin ng mga patlang na tinanggal (`api_key`, `api_url`, mga opsyon sa proxy).

<br/>

**Pang-web na pagpapatunay:**

- Default admin: `admin` / `transrewrt26`.
- Pamahalaan ang mga user sa **Settings → Users**.
- I-reset ang password: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (mula sa source: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **BABALA**<br/>
> Palitan agad ang default na admin password sa anumang host na may access sa network.

<br/>

Mga pangunahing setting (font, mga modelo, mga wika, at iba pa) ay makukuha sa Settings ng application.

<br/><br/>

<a id="development-and-architecture"></a>

## Pag-unlad at arkitektura

- **Pag-unlad:** Pag-setup, pagbuo, pagsubok, at pag-deploy (Electron, Web, Docker) - tingnan ang **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Pangkalahatang-ideya ng arkitektura at sistema:** Istraktura ng folder, tech stack, mga desisyon sa disenyo - tingnan ang **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Mga Release at Tag

- Ang mga **Git tag** na `v`* (hal., `v1.0.10`) ay nag-trigger sa [release workflow](.github/workflows/release.yml). Ang mga **GitHub Release** ay may kasamang Windows installer (`.exe`) at Linux AppImage (**x64** at **arm64**).
- Ang mga **Docker image** ay nailathala sa `ghcr.io/wsj-br/transrewrt`. Ang mga tag ng imahe ay tumutugma sa bersyon ng Git (hal., `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) kasama ang `latest`. Multi-arkitektura: `linux/amd64` at `linux/arm64` (hal., Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Pagtutulog

1. Kopyahin ang repository.
2. Lumikha ng feature branch: `git checkout -b feature/my-feature`
3. I-commit ang iyong mga pagbabago na may malinaw na mensahe.
4. I-push at buksan ang Pull Request laban sa `main`.

Pakisunod ang umiiral na istilo ng code at subukan ang iyong mga pagbabago sa parehong Electron at web mode bago isumite. Tingnan ang [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para sa mga tagubilin sa pagbuo at pagsubok.

<br/>

**Pag-uulat ng mga isyu:** Magbukas ng isyu sa [GitHub](https://github.com/wsj-br/transrewrt/issues). Isama ang iyong platform (Windows / Linux / Docker) at bersyon ng app (nakalagay sa About dialog o sa pahina ng Mga Release).

<br/><br/>

<a id="disclaimer"></a>
## Waiver

Ang mga pangalan at icon ng produkto ay pag-aari ng kanilang mga may-akda at ginagamit lamang para sa layuning pagkakakilanlan. Ang software na ito ay hindi kaugnay o pinagkakatiwalaan ng anumang mga brand na nabanggit.

<br/><br/>

<a id="license"></a>
## Lisensya

Karapatan ng Pagmamay-ari © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)