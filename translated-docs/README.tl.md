---
translated_at: "2026-03-25T22:18:08.295Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "stepfun/step-3.5-flash:free"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo ng Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Bersyon"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lisensya: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plataporma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI-powered na tool sa teksto: isalin-wika ang pagitan ng mga wika, baguhin ang anyo, at baguhin ang teksto gamit ang mga custom na prompt — gamit ang iba't ibang AI provider (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, at lokal na Ollama). Nagpapatakbo bilang desktop app (Electron) o self-hosted na web app (Docker).

- **Isaling-wika** — sa pagitan ng dosena pang wika, awtomatikong pagtuklas sa source
- **Baguhin ang anyo** — ayusin ang grammar, linangin ang kap claro, pormal/hindi pormal, paikliin, palawakin, teknikal
- **Baguhin** — mga custom na AI prompt; lumikha at pamahalaan ang mga prompt, opsyonal na target language bawat prompt
- **Kasaysayan** — buong kasaysayan ng pag-execute na may input/output na teksto, pagfi-filter, at pag-export
- **Mga Modelo at gastos** — pumili ng mga modelo mula sa sinumang naka-configure na provider; mga dashboard para sa gastos at paggamit na may log, mga buod ayon sa modelo/operasyon/araw
- **UI** — multilingual na interface (30+ wika, RLT support), mga font, ...
- **Web mode** — multi-user support na may mga admin role
- **Desktop** — Electron app para sa Windows at Linux
- **Self-hosted** — Docker image para sa amd64 & arm64 (Raspberry Pi-ready)

Kapag na-install na, tingnan ang **[User Guide](USER-GUIDE.tl.md)** para sa buong walkthrough ng lahat ng mga feature.

<small>**Basahin sa iba pang mga wika:** [English (UK)](README.tl.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Tungkol sa pagsasalin ng UI at dokumentasyon:** Ang lahat ng mga wika ng interface maliban sa orihinal na English (UK) ay isinalin gamit ang mga AI model; ang paggamit ng salita ay maaaring hindi eksakto o may mga kamalian.

</small>

<br/>

<a id="screenshots"></a>
## Mga Screenshot

**Pumipili ng wika**

![Pumipili ng wika](../images/screenshots/tl/language-selector.png)

**Isaling-wika**

![Isaling-wika](../images/screenshots/tl/translate.png)

**Baguhin - editor ng prompt**

![Baguhin - editor ng prompt](../images/screenshots/tl/transform-prompt-edit.png)

**Dashboard**

![Dashboard ng gastos](../images/screenshots/tl/dashboard-summary.png)

**Kasaysayan**

![Kasaysayan](../images/screenshots/tl/history.png)

**Mga setting - pagpili ng modelo**

![Mga setting - pagpili ng modelo](../images/screenshots/tl/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Talahanayan ng mga nilalaman

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Mabilisang simula](#mabilisang-simula)
- [Pag-install](#pag-install)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Kumuha ng OpenRouter API key](#kumuha-ng-openrouter-api-key)
- [Konpigurasyon at kapaligiran](#konpigurasyon-at-kapaligiran)
- [Pag-unlad at arkitektura](#pag-unlad-at-arkitektura)
- [Mga release at mga tag](#mga-release-at-mga-tag)
- [Pagtulong sa proyekto](#pagtulong-sa-proyekto)
- [Paalala](#paalala)
- [Lisensya](#lisensya)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="mabilisang-simula"></a>
## Mabilisang simula

**Docker (rekomendado para sa self-hosting)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Palitan ang `sk-or-your-key` gamit ang iyong [OpenRouter API key](https://openrouter.ai/keys) (o itakda ang ibang key ng provider; tingnan ang [Konpigurasyon](#konpigurasyon-at-kapaligiran)). Buksan ang [http://localhost:5000](http://localhost:5000) at baguhin ang default na admin password bago ipaalam ang serbisyo.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Sa Docker, ang mga kredensyal ng LLM ay itinatakda gamit ang mga environment variable tulad ng `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (hindi sa web UI). Sa desktop (Electron) ikaw ay magko-configure ng mga key sa **Mga Setting → API**.

<br/>

**Windows**

I-download ang pinakabagong `Transrewrt Setup x.y.z.exe` mula sa [Mga Release](https://github.com/wsj-br/transrewrt/releases), patakbuhin ang installer, at pagkatapos ay ilunsad mula sa Start menu o desktop shortcut. Ilagay ang iyong mga API key sa **Mga Setting → API**. Dapat ay ikaw ay magko-configure ng kahit isang provider; karaniwan ang OpenRouter para sa libreng mga modelo.

<br/>

**Linux**

I-download ang `.AppImage` para sa iyong CPU mula sa [Mga Release](https://github.com/wsj-br/transrewrt/releases) (`x64` para sa karaniwang PC, `arm64` para sa maraming ARM device, kabilang ang Raspberry Pi 4+), at pagkatapos ay:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Ilagay ang iyong mga API key sa **Mga Setting → API**. Dapat ay ikaw ay magko-configure ng kahit isang provider; karaniwan ang OpenRouter para sa libreng mga modelo.

Sa Debian/Ubuntu maaaring kailanganin mong i-install muna ang karagdagang dependencies:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Tingnan ang [Pag-install → Linux](#linux-electron) para sa mga detalye.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Hindi kasalukuyang suportado ang macOS. Magagamit ang Transrewrt para sa Windows, Linux, at Docker.

<br/>

Kapag tumatakbo na ang app, tingnan ang **[Gabay sa Gumagamit](USER-GUIDE.tl.md)** para matuto kung paano isalin, baguhin, at baguhin ang teksto, pamahalaan ang mga prompt, at i-configure ang mga modelo.

<br/><br/>

<a id="pag-install"></a>
## Pag-install

<a id="windows-electron"></a>
### Windows (Electron)

- I-download ang pinakabagong installer mula sa [Mga Release](https://github.com/wsj-br/transrewrt/releases).
- Patakbuhin ang `.exe` at sundin ang installer.
- Unang pagpapatakbo: i-launch ang app mula sa Start menu o desktop shortcut. 

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- I-download ang tugma na `.AppImage` (`x64` o `arm64`) mula sa [Mga Release](https://github.com/wsj-br/transrewrt/releases).
- Patakbuhin: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` sa x86_64/amd64, o gamitin ang `...-arm64.AppImage` filename sa ARM64.
- Karagdagang dependencies (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Tingnan ang [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para sa higit pang mga detalye.

<br/>

<a id="docker"></a>
### Docker

- I-pull: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Itakda ang kahit isang key ng provider sa pamamagitan ng environment (halimbawa `OPENROUTER_KEY` para sa OpenRouter). Ipass ang mga variable gamit ang `-e` o `docker compose` / `.env` upang hindi mapasama sa imahe ang mga sikreto.
- Ang mga key ng provider ay **hindi** ilalagay sa web UI; ang server ay babasahin ang mga ito mula sa environment.

Halimbawa - named volume para sa persistence (OpenRouter key via env):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opsyon   | Paglalarawan                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (i-map gamit ang `-p 5000:5000`)                                                                              |
| Volume   | I-mount ang `/app/data` para sa konpigurasyon at database persistence                                                         |
| Mga Env var | `PORT`, `CONFIG_PATH`, kasama ang mga LLM key (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - tingnan ang [Konpigurasyon](#konpigurasyon-at-kapaligiran) |

Para i-build at patakbuhin mula sa source: `docker compose up --build -d` o `pnpm docker:up` - tingnan ang [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="kumuha-ng-openrouter-api-key"></a>

## Kung Paano Kumuha ng OpenRouter API Key

Suportado ng Transrewrt ang maraming AI provider. Ang [OpenRouter](https://openrouter.ai) ay isang sikat na napili dahil nagpo-provide ito ng maraming modelo gamit ang iisang key at nag-o-offer ng libreng mga modelo.

1. Mag-sign up o mag-log in sa [openrouter.ai](https://openrouter.ai).
2. Buksan ang pahina ng [Keys](https://openrouter.ai/keys) at lumikha ng bagong key (magbigay ng pangalan, at opsyonal na ilagay ang limitasyon sa kredito). Maaari mong gamitin ang libreng mga modelo kahit walang idadagdag na kredito.
3. **Desktop (Electron):** i-paste ang keys sa **Settings → API**. **Docker:** itakda ang mga env vars tulad ng `OPENROUTER_KEY` (tingnan ang [Mabilis na Pag-umpisa](#quick-start)).

Huwag gamitin ang **Body Builder** model ng OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) para sa pagsasalin, pag-rewrite, o pagbabago: nagbabalik ito ng JSON request payloads, hindi ang buong teksto para sa mga gawaing ito. Tingnan ang [Settings → Mga Modelo](USER-GUIDE.tl.md#models) sa User Guide.

Maaari mo ring gamitin ang iba pang provider (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o patakbuhin ang mga modelo nang lokal gamit ang [Ollama](https://ollama.com). Tingnan ang [Configuration](#configuration-and-environment) para sa buong listahan ng suportadong provider at environment variables.

> ⚠️ **BABALA**<br/>
> Kung gumagamit ka ng Ollama mula sa ibang device, container, o serbisyo, tiyaking naka-configure ang Ollama para payagan ang mga panlabas na koneksyon (hindi lang localhost).

Para sa mga limitasyon, BYOK, at iba pa, tingnan ang [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konpigurasyon at kapaligiran

**Mga lokasyon ng config file**

| Ideploy | Lokasyon ng config |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gamitin ang volume para mapanatili) |

<br/>

**Mga Environment variable** (web/Docker lang; gumagamit ang Electron ng lokal na config file)

| Variable         | Default                 | Paglalarawan |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Port kung saan nakikinig ang server |
| `CONFIG_PATH`    | `/app/data/config.json` | Lokasyon ng config file |
| `OPENROUTER_KEY` | *(walang laman)*         | OpenRouter API key |
| `OPENAI_KEY`     | *(walang laman)*         | OpenAI API key |
| `CEREBRAS_KEY`   | *(walang laman)*         | Cerebras API key |
| `ANTHROPIC_KEY`  | *(walang laman)*         | Anthropic API key |
| `GOOGLE_KEY`     | *(walang laman)*         | Google Gemini API key |
| `DEEPSEEK_KEY`   | *(walang laman)*         | DeepSeek API key |
| `GROQ_KEY`       | *(walang laman)*         | Groq API key |
| `MISTRAL_KEY`    | *(walang laman)*         | Mistral API key |
| `OLLAMA_URL`     | *(walang laman)*         | Base URL ng Ollama (hal. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(walang laman)*         | xAI API key |

I-configure lamang ang mga provider na gagamitin mo. Ang mga model ID ay may namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, atbp.).

**Pagpapakita ng gastos:** Ibinabalik ng OpenRouter ang eksaktong bayarin kapag kinakailangan. Ang ibang provider ay gumagamit ng **tinatayang** gastos mula sa publikong presyo ng modelo ng OpenRouter kung may OpenRouter key; kung wala, ang gastos para sa hindi OpenRouter ay maaaring ipakita bilang `0`. Ang mga tantiya ay hindi resibo.

<br/>

**Data at pag-iiwas sa pagkawala:** Para sa Docker, i-mount ang isang volume sa `/app/data` upang mapanatili ang `config.json` at SQLite database kahit i-restart ang container. Kung walang volume, mawawala ang lahat ng data kapag tumigil ang container.

**Para sa mga developer:** Matapos i-pull ang mga pagbabago na pinalitan ang lumang solong-key config, i-reset o i-merge ang `data/config.json` gamit ang bagong default form mula sa `src/config-defaults/config_default.json` kung ang lokal mong file ay gumagamit pa rin ng tinanggal na fields (`api_key`, `api_url`, proxy options).

<br/>

**Web authentication:**

- Default admin: `admin` / `transrewrt26`.
- Pamahalaan ang mga user sa **Settings → Users**.
- I-reset ang password: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (mula sa source: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **BABALA**<br/>
> Agad na baguhin ang default na admin password sa anumang host na maaring i-access sa network.

<br/>

Makikita ang mga pangunahing setting (font, mga modelo, mga wika, atbp.) sa Settings ng aplikasyon.

<br/><br/>

<a id="development-and-architecture"></a>

## Pag-unlad at arkitektura

- **Pag-unlad:** Pag-setup, pagbuo, pagsubok, at pag-deploy (Electron, Web, Docker) - tingnan ang **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arkitektura at pangkalahatang-ideya ng sistema:** Estruktura ng folder, teknikal na stack, mga desisyon sa disenyo - tingnan ang **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Mga Paglalabas at Mga Tag

- Ang **Git tags** na `v`* (tulad ng `v1.0.10`) ay nag-trigger sa [workflow ng paglalabas](.github/workflows/release.yml). Ang mga **GitHub Release** ay may kasamang Windows installer (`.exe`) at Linux AppImages (**x64** at **arm64**).
- Ang mga **Docker image** ay nailathala sa `ghcr.io/wsj-br/transrewrt`. Ang mga tag ng imahe ay tugma sa bersyon ng Git (hal. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) kasama ang `latest`. Multi-arch: `linux/amd64` at `linux/arm64` (tulad ng Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Pagtutulung

1. I-fork ang repository.
2. Lumikha ng feature branch: `git checkout -b feature/my-feature`
3. I-commit ang iyong mga pagbabago na may malinaw na mensahe.
4. I-push at magbukas ng Pull Request patungo sa `main`.

Paki-sunod ang umiiral na estilo ng code at subukan ang iyong mga pagbabago sa parehong Electron at web mode bago isumite. Tingnan ang [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para sa mga tagubilin sa pagbuo at pagsubok.

<br/>

**Pag-uulat ng mga isyu:** Magbukas ng isyu sa [GitHub](https://github.com/wsj-br/transrewrt/issues). Isama ang iyong platform (Windows / Linux / Docker) at bersyon ng app (nakalagay sa About dialog o sa pahina ng Mga Paglalabas).

<br/><br/>

<a id="disclaimer"></a>
## Paunawa

Ang mga pangalan at logo ng produkto ay pag-aari ng kanilang mga may-akda at ginagamit lamang para sa layuning pagkilala. Ang software na ito ay walang kinalaman at hindi sinusuportahan man ng anumang mga brand na binanggit.

<br/><br/>

<a id="license"></a>
## Lisensya

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)