---
translated_at: "2026-03-27T23:08:57.352Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logo" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Bersyon"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lisensya: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Isang kasangkapan sa pagproseso ng teksto na kapowered ng AI: isalin sa pagitan ng mga wika, muling isulat sa iba't ibang istilo, at baguhin gamit ang pasadyang mga prompt — gamit ang maraming serbisyo ng AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, at lokal na Ollama). Tumatakbo bilang desktop app (Electron) o self-hosted na web app (Docker).

- **Isalin** — sa pagitan ng maraming mga wika, na may awtomatikong pagkilala sa pinagmulang wika
- **Muling isulat** — ayusin ang gramatika, mapabuti ang linaw, formal o di-pormal, pinabuod, pinalawak, teknikal
- **Baguhin** — mga pasadyang prompt sa AI; lumikha at pamahalaan ang mga prompt, opsional na wikang patutunguhan bawat prompt
- **Kasaysayan** — buong kasaysayan ng pagpapagana na may input/output na teksto, pag-filter, at pag-export
- **Mga modelo at gastos** — pumili ng mga modelo mula sa anumang naka-configure na provider; mga dashboard para sa gastos at paggamit kasama ang log, mga buod ayon sa modelo/operasyon/araw
- **UI** — multilingual na interface (30+ mga wika, suporta sa RTL), mga font, ...
- **Modo sa Web** — suporta sa maraming gumagamit na may admin na mga tungkulin
- **Desktop** — Electron app para sa Windows at Linux
- **Self-hosted** — imahe ng Docker para sa amd64 at arm64 (handang gamitin sa Raspberry Pi)

Kapag nainstall na, tingnan ang **[Gabay sa Gumagamit](USER-GUIDE.tl.md)** para sa buong walkthrough ng lahat ng tampok.

<small>**Basahin sa ibang wika:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Tala tungkol sa pagsasalin ng UI at dokumentasyon:** Ang lahat ng mga wika sa interface maliban sa orihinal na English (UK)
> ay naisalin gamit ang mga modelo ng AI; maaaring hindi tumpak o may mga pagkakamali ang pagkakasulat.

</small>

<br/>

<a id="screenshots"></a>

## Mga Screenshot

**Tagapili ng wika**

![Tagapili ng wika](../images/screenshots/tl/language-selector.png)

**Isalin**

![Isalin](../images/screenshots/tl/translate.png)

**Ibago - editor ng prompt**

![Ibago - editor ng prompt](../images/screenshots/tl/transform-prompt-edit.png)

**Dashboard**

![Dashboard ng gastos](../images/screenshots/tl/dashboard-summary.png)

**Kasaysayan**

![Kasaysayan](../images/screenshots/tl/history.png)

**Mga Setting - pagpili ng modelo**

![Mga Setting - pagpili ng modelo](../images/screenshots/tl/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Talahanayan ng Mga Nilalaman

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Mabilis na pagsisimula](#quick-start)
- [Pag-install](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Paano makakuha ng OpenRouter API key](#getting-an-openrouter-api-key)
- [Konpigurasyon at kapaligiran](#configuration-and-environment)
- [Pagsisilang at arkitektura](#development-and-architecture)
- [Mga inilabas at mga tag](#releases-and-tags)
- [Pakiki-ambag](#contributing)
- [Paalala](#disclaimer)
- [Lisensya](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Mabilisang Simula

**Docker (inirerekomenda para sa self-hosting)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Palitan ang `sk-or-your-key` ng iyong [OpenRouter API key](https://openrouter.ai/keys) (o itakda ang mga susi ng iba pang provider; tingnan ang [Configuration](#configuration-and-environment)). Buksan ang [http://localhost:5000](http://localhost:5000) at palitan ang default na admin password bago i-expose ang serbisyo.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Sa Docker, itinatakda ang mga kredensyal ng LLM gamit ang mga variable sa kapaligiran tulad ng `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (hindi sa web UI). Sa desktop (Electron), kinokonpigura ang mga susi sa **Settings → API**.

<br/>

**Windows**

Mag-download ng pinakabagong `Transrewrt Setup x.y.z.exe` mula sa [Releases](https://github.com/wsj-br/transrewrt/releases), patakbuhin ang installer, at i-launch ito mula sa Start menu o desktop shortcut. Ilagay ang iyong mga API key sa **Settings → API**. Kailangan mong ikonpigura ang kahit isang provider; karaniwan ang OpenRouter para sa libreng mga modelo.

<br/>

**Linux**

Mag-download ng `.AppImage` para sa iyong CPU mula sa [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` para karaniwang PC, `arm64` para maraming aparato na ARM, kabilang ang Raspberry Pi 4+), pagkatapos:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Ilagay ang iyong mga API key sa **Settings → API**. Kailangan mong ikonpigura ang kahit isang provider; karaniwan ang OpenRouter para sa libreng mga modelo.

Sa Debian/Ubuntu, maaaring kailanganin mong i-install muna ang karagdagang dependencies:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Tingnan ang [Installation → Linux](#linux-electron) para sa karagdagang detalye.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Kasalukuyang hindi sinusuportahan ang macOS. Magagamit ang Transrewrt para sa Windows, Linux, at Docker.

<br/>

Kapag tumatakbo na ang app, tingnan ang **[User Guide](USER-GUIDE.tl.md)** para matuto kung paano isasalin, i-rerewrite, at baguhin ang teksto, pamahalaan ang mga prompt, at ikonpigura ang mga modelo.

<br/><br/>

<a id="installation"></a>

## Pag-install

<a id="windows-electron"></a>
### Windows (Electron)

- I-download ang pinakabagong installer mula sa [Releases](https://github.com/wsj-br/transrewrt/releases).
- I-run ang `.exe` at sundin ang tagapag-install.
- Unang pagpapatakbo: i-start ang app mula sa Start menu o desktop shortcut.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- I-download ang tugmang `.AppImage` (`x64` o `arm64`) mula sa [Releases](https://github.com/wsj-br/transrewrt/releases).
- I-run: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` sa x86_64/amd64, o gamitin ang pangalan ng file na `...-arm64.AppImage` sa ARM64.
- Karagdagang dependencies (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Tingnan ang [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para sa karagdagang impormasyon.

<br/>

<a id="docker"></a>
### Docker

- Kunin gamit ang: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Itakda ang kahit isang provider key gamit ang environment (halimbawa, `OPENROUTER_API_KEY` para sa OpenRouter). Isama ang mga variable gamit ang `-e` o `docker compose` / `.env` upang hindi maiimbak ang mga lihim sa loob ng imahe.
- Ang mga provider key ay **hindi** inilalagay sa web UI; ang server ang nagbabasa mula sa environment.

Halimbawa - named volume para sa pagpapatuloy (OpenRouter key gamit ang env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

o kung gusto mong gamitin ang Docker Compose, gamitin ang:

# i-download ang compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# i-edit ang file upang magdagdag ng API_KEYS
vi transrewrt.yml
# i-start ang container
docker compose -f transrewrt.yml up -d
```

<br/>

| Opsyon   | Paglalarawan                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Port     | `5000` (i-map gamit ang `-p 5000:5000`)                                                                                                       |
| Volume   | I-mount ang `/app/data` para sa config at database persistence                                                                                  |
| Mga Env var | `PORT`, `CONFIG_PATH`, kasama ang LLM keys (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - tingnan ang [Configuration](#configuration-and-environment) |

Para i-build at patakbuhin mula sa source: `docker compose up --build -d` o `pnpm docker:up` - tingnan ang [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Kumuha ng OpenRouter API key

Sinusuportahan ng Transrewrt ang maraming AI providers. Ang [OpenRouter](https://openrouter.ai) ay isang sikat na pagpipilian dahil nagpopondok ito ng maraming modelo sa ilalim ng iisang key at nag-aalok ng libreng mga modelo.

1. Mag-sign up o mag-log in sa [openrouter.ai](https://openrouter.ai).
2. Buksan ang [Keys](https://openrouter.ai/keys) na pahina at lumikha ng bagong key (bigyan ng pangalan, at opsyonal na ilagay ang limitasyon sa credit). Maaaring gamitin ang mga libreng modelo nang hindi nagdadagdag ng credit.
3. **Desktop (Electron):** i-paste ang key sa **Settings → API**. **Docker:** itakda ang mga env var tulad ng `OPENROUTER_API_KEY` (tingnan ang [Mabilis na simula](#quick-start)).

Huwag gamitin ang **Body Builder** model ng OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) sa pagsasalin, pagpapalit, o pagbabago: ito ay nagbabalik ng JSON request payloads, hindi ang buong naisalin na teksto para sa mga gawaing ito. Tingnan ang [Settings → Mga Modelo](USER-GUIDE.tl.md#mga-modelo) sa User Guide.

Maaari mo ring gamitin ang iba pang mga provider (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o i-run ang mga modelo nang lokal gamit ang [Ollama](https://ollama.com). Tingnan ang [Configuration](#configuration-at-environment) para sa buong listahan ng sinusuportahang mga provider at mga environment variable.

> ⚠️ **BABALA**<br/>
> Kung gumagamit ka ng Ollama mula sa ibang device, container, o serbisyo, tandaang i-configure ang Ollama upang payagan ang mga koneksyon mula sa labas (hindi lang localhost).

Para sa mga limitasyon, BYOK, at iba pa, tingnan ang [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-at-environment"></a>

## Konpigurasyon at kapaligiran

**Lokasyon ng config file**

| I-deploy          | Lokasyon ng config                              |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gamitin ang isang volume para mapanatili) |

<br/>

**Mga variable sa kapaligiran** (web/Docker lamang; gumagamit ng lokal na config file ang Electron)

| Variable         | Default                 | Deskripsyon |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Port na pinapakinggan ng server |
| `CONFIG_PATH`    | `/app/data/config.json` | Path patungo sa config file |
| `OPENROUTER_API_KEY` | *(walang laman)*          | OpenRouter API key |
| `OPENAI_API_KEY`     | *(walang laman)*          | OpenAI API key |
| `CEREBRAS_API_KEY`   | *(walang laman)*          | Cerebras API key |
| `ANTHROPIC_API_KEY`  | *(walang laman)*          | Anthropic API key |
| `GOOGLE_API_KEY`     | *(walang laman)*          | Google Gemini API key |
| `DEEPSEEK_API_KEY`   | *(walang laman)*          | DeepSeek API key |
| `GROQ_API_KEY`       | *(walang laman)*          | Groq API key |
| `MISTRAL_API_KEY`    | *(walang laman)*          | Mistral API key |
| `OLLAMA_URL`     | *(walang laman)*          | Base URL ng Ollama (tulad ng `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(walang laman)*          | xAI API key |

I-configure lamang ang mga provider na gagamitin mo. Ang mga Model ID ay may namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, atbp.).

**Pagpapakita ng gastos:** Ibinabalik ng OpenRouter ang eksaktong na-billing na halaga kapag naaangkop. Ginagamit ng iba pang provider ang **tinatayang** gastos mula sa pampublikong presyo ng model ng OpenRouter kung mayroong OpenRouter key; kung wala ito, ang gastos na hindi OpenRouter ay maaaring lumabas bilang `0`. Ang mga pagtataya ay hindi resibo.

<br/>

**Data at pagpapanatili:** Para sa Docker, i-mount ang isang volume sa `/app/data` upang mapanatili ang `config.json` at ang database ng SQLite kapag muli nang binuhay ang container. Kung walang volume, mawawala ang lahat ng data kapag huminto ang container.

**Mga developer:** Matapos i-pull ang mga pagbabagong pinalitan ang lumang konpigurasyon na may iisang susi, i-reset o i-merge ang `data/config.json` sa bagong default na anyo mula sa `src/config-defaults/config_default.json` kung ang lokal mong file ay gumagamit pa rin ng mga patlang na inalis (`api_key`, `api_url`, mga opsyon sa proxy).

<br/>

**Pang-web na pagpapatotoo:**

- Default na admin: `admin` / `transrewrt26`.
- Pamahalaan ang mga user sa **Settings → Mga User**.
- I-reset ang password: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (mula sa source: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **BABALA**<br/>
> Agad na palitan ang default na admin password sa anumang host na ma-access sa network.

<br/>

Ang mga pangunahing setting (font, mga model, wika, atbp.) ay makikita sa Mga Setting ng aplikasyon.

<br/><br/>

<a id="development-and-architecture"></a>

## Pag-unlad at arkitektura

- **Pag-unlad:** Pag-setup, pagbuo, pagsubok, at pag-deploy (Electron, Web, Docker) - tingnan ang **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arkitektura at pangkalahatang-ideya ng sistema:** Estruktura ng folder, tech stack, desisyon sa disenyo - tingnan ang **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Mga Paglabas at Mga Tag

- Ang mga **Git tag** na `v`* (hal. `v1.0.10`) ay nag-trigger sa [workflow ng paglabas](.github/workflows/release.yml). Ang **GitHub Releases** ay may kasamang Windows installer (`.exe`) at Linux AppImage (**x64** at **arm64**).
- Ang mga **Docker image** ay nailalathala sa `ghcr.io/wsj-br/transrewrt`. Ang mga tag ng imahe ay tumutugma sa bersyon ng Git (hal. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) kasama ang `latest`. Multi-arch: `linux/amd64` at `linux/arm64` (hal. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Pagtutulog

1. I-fork ang repository.
2. Lumikha ng feature branch: `git checkout -b feature/my-feature`
3. I-commit ang iyong mga pagbabago na may malinaw na mensahe.
4. I-push at magbukas ng Pull Request patungo sa `main`.

Pakipanatili ang umiiral na estilo ng code at subukan ang iyong mga pagbabago sa parehong Electron at web mode bago isumite. Tingnan ang [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para sa mga tagubilin sa pagbuo at pagsusulit.

<br/>

**Pagre-rehistro ng mga isyu:** Magbukas ng isyu sa [GitHub](https://github.com/wsj-br/transrewrt/issues). Isama ang iyong platform (Windows / Linux / Docker) at bersyon ng app (nakalagay sa About dialog o sa pahina ng Mga Paglabas).

<br/><br/>

<a id="disclaimer"></a>

## Paalala

Ang mga pangalan at logo ng produkto ay pag-aari ng kanilang mga katutulad na may-ari at ginagamit lamang para sa layuning pagkilala. Ang software na ito ay hindi kaugnay at hindi inaprubahan ng anumang mga brand na binanggit.

<br/><br/>

<a id="license"></a>
## Lisensya

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)