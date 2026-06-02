---
translation_last_updated: '2026-06-02T15:30:51.546Z'
source_file_mtime: '2026-06-02T15:30:03.287Z'
source_file_hash: be3f9b67527af4a76a7271c81f0a2da3ac4ae613e81dd07786d01ee40eb7df57
translation_language: tl
source_file_path: README.md
translation_models:
  - qwen/qwen3-235b-a22b-2507
  - qwen/qwen3.6-35b-a3b
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.3.5-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Kasangkapan sa teksto na pinapagana ng AI: isalin sa pagitan ng mga wika, muling isulat sa iba't ibang estilo, at baguhin gamit ang pasadyang mga prompt — gamit ang maramihang AI provider (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, at lokal na Ollama). Tumatakbo bilang desktop app (Electron) o self-hosted web app (Docker).

- **Isalin** - sa pagitan ng mga dosenang mga wika, na may awtomatikong pagtuklas ng pinagmulan
- **Muling isulat** - ayusin ang gramatika, pabutihin ang linaw, pormal/impormal, paiikliin, palawakin, teknikal
- **Baguhin** - mga pasadyang prompt sa AI; lumikha at pamahalaan ang mga prompt, opsyonal na wika ng destinasyon bawat prompt
- **Kasaysayan** - buong kasaysayan ng pagpapatupad na may tekstong input/output, pag-filter, at pag-export
- **Madali & Advanced** - Madaling mode (default): mga naayos na preset bawat provider (**Libre (OpenRouter)**, **Standard**, **Advanced**, **Technical**; ang mga preset na may mapping lamang para sa napiling provider ang lumilitaw) nang hindi pinipili ang model ID; Advanced mode: buong listahan ng modelo mula sa iyong naka-configure na mga provider
- **Mga Modelo & gastos** - mga dashboard para sa gastos at paggamit (Buod, Ayos ng Modelo, Lahat ng Tawag) na may opsyon na i-export; ipinapakita ng OpenRouter ang aktuwal na gastos, ang iba pang mga provider ay gumagamit ng mga pagtataya
- **UI** - multilingual na interface (30+ wika, suporta sa RTL), mga font, ...
- **Web mode** - suporta sa multi-user na may admin roles
- **Desktop** - Electron app para sa Windows at Linux
- **Self-hosted** - Docker image para sa amd64 & arm64 (handang gamitin sa Raspberry Pi)

Kapag nainstall na, tingnan ang [**User Guide**](USER-GUIDE.tl.md) para sa kompletong gabay sa lahat ng mga tampok.

<small>**Basahin sa ibang mga wika:** </small>
<small id="lang-list">[English (GB)](../README.md) · [Português (Brasil)](./README.pt-BR.md) · [العربية](./README.ar.md) · [বাংলা](./README.bn.md) · [Català](./README.ca.md) · [中文 (中国大陆)](./README.zh-CN.md) · [中文 (台灣)](./README.zh-TW.md) · [Hrvatski](./README.hr.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [English (US)](./README.en-US.md) · [Tagalog](./README.tl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Bahasa Melayu](./README.ms.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Basa Jawa](./README.jv.md) · [Português](./README.pt.md) · [ਪੰਜਾਬੀ](./README.pa.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Kiswahili](./README.sw.md) · [Svenska](./README.sv.md) · [తెలుగు](./README.te.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

<small>

> **Tala sa mga pagsasalin ng UI at dokumentasyon:** Ang lahat ng mga wika sa interface maliban sa orihinal na English (UK) 
> ay isinalin gamit ang mga AI model; maaaring hindi tumpak o may mga kamalian ang mga salin.

</small>

<br/>

<a id="table-of-contents"></a>
## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Mga Screenshot](#screenshots)
- [Mabilis na pagsisimula](#quick-start)
- [Pagkuha ng OpenRouter API key](#getting-an-openrouter-api-key)
- [Configuration at environment](#configuration-and-environment)
- [Pagsasagawa at arkitektura](#development-and-architecture)
- [Pag-uulat ng mga isyu](#reporting-issues)
- [Paunawa](#disclaimer)
- [Lisensya](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## Mga Screenshot

**Tagapili ng wika**

![Language selector](../images/screenshots/tl/language-selector.png)

**Isalin**

![Translate](../images/screenshots/tl/translate.png)

**Transform - editor ng prompt**

![Transform - prompt editor](../images/screenshots/tl/transform-prompt-edit.png)

**Dashboard**

![Dashboard summary - usage](../images/screenshots/tl/dashboard-summary.png)

**Kasaysayan**

![History](../images/screenshots/tl/history.png)

**Mga Setting - pagpili ng modelo**

![Settings - model selection](../images/screenshots/tl/settings-general.png)

<br/><br/>

<a id="quick-start"></a>
## Mabilis na simula

<details>
<summary><b>Docker (rekomendado para sa self-hosting)</b></summary>

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

Palitan ang `sk-or-your-key` ng iyong [OpenRouter API key](https://openrouter.ai/keys) (o itakda ang iba pang mga provider key; tingnan ang [Configuration](#configuration-and-environment)). Buksan ang [http://localhost:5000](http://localhost:5000) at baguhin ang default na admin password bago ilantad ang serbisyo.

Itakda ang kahit isang provider key sa pamamagitan ng environment (halimbawa `OPENROUTER_API_KEY` para sa OpenRouter). Ipasa ang mga variable gamit ang `-e` o `docker compose` / `.env` upang hindi ma-embed ang mga lihim sa imahe. Ang mga provider key ay **hindi** inilalagay sa web UI; ang server ang nagbabasa mula sa environment.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Sa Docker, ang mga kredensyal ng LLM ay itinatakda gamit ang mga environment variable tulad ng `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (hindi sa web UI). Sa desktop (Electron), itinatakda mo ang mga key sa **Settings → API**.

<br/>

O gamitin ang Docker Compose:

```bash
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Tingnan ang [Configuration](#configuration-and-environment) para sa lahat ng environment variable, tulad ng `PORT`, `CONFIG_PATH`, `TZ`, at mga LLM key (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

</details>

<br/>

<details>
<summary><b>Server timezone (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

Ang petsa at oras ng user interface ng aplikasyon ay sumusunod sa **locale at timezone ng browser**. Para sa **server-side** na pag-uugali (tulad ng logging), ginagamit ng container ang environment variable na `TZ`. Ang default ay `TZ=Europe/London`.

Para gamitin ang ibang timezone, itakda ang `TZ` sa iyong Compose file, halimbawa:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

O ipasa ito habang pinapatakbo ang container (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Sa maraming Linux host, maaari mong kopyahin ang pangalan ng system timezone gamit ang:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Ang listahan ng mga wastong pangalan ng timezone ay pinananatili sa [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- I-download ang pinakabagong `Transrewrt Setup x.y.z.exe` mula sa [Releases](https://github.com/wsj-br/transrewrt/releases).
- Patakbuhin ang `.exe` at sundin ang installer.
- Unang pagpapatakbo: simulan ang app mula sa Start menu o desktop shortcut.
- Ilagay ang iyong API keys sa **Settings → API**. Kailangan mong i-configure ang kahit isang provider; karaniwan ang OpenRouter para sa libreng mga modelo.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Maaaring ipakita ng Windows ang isa sa mga babalang pangseguridad na ito (normal para sa mga unsigned/indie apps):
>   - **User Account Control (UAC)**: "Gusto mo bang payagan ang app na ito mula sa isang hindi kilalang publisher na baguhin ang iyong device?" → I-click ang **Oo**.
>   - **Microsoft Defender SmartScreen**: "Pinoprotektahan ng Windows ang iyong PC" → I-click ang **Higit pang impormasyon** → **Patakbuhin pa rin**.
>
> Nangyayari ito dahil hindi naka-sign ang app ng Microsoft o ng isang pangunahing publisher — ligtas ito kung na-download mula sa aming opisyal na GitHub releases (i-verify ang checksums sa pahina ng [Releases](https://github.com/wsj-br/transrewrt/releases) kasama ang bawat asset).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

I-download ang `.AppImage` para sa iyong CPU mula sa [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` para sa karaniwang PC, `arm64` para sa maraming ARM device, kabilang ang Raspberry Pi 4+), pagkatapos:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Sa x86_64/amd64 gamitin ang `x64` filename; sa ARM64 gamitin ang `...-arm64.AppImage` pangalan.

Ipasok ang iyong API keys sa **Mga Setting → API**. Kailangan mong i-configure ang kahit isang provider; karaniwan ang OpenRouter para sa libreng mga modelo.

**Mga mensahe sa Console:** Ang naka-packaged na Linux build (`x64` at `arm64` AppImages) ay nag-suppress ng Node deprecation warnings sa terminal (halimbawa ang built-in `punycode` module). Kung nagpi-print ang Chromium ng GPU / EGL errors tulad ng “GLES3 is unsupported” ngunit gumagana ang app, maaari mong i-silence ang mga ito sa pamamagitan ng pag-disable ng hardware acceleration:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Ito ay nalalapat din sa amd64; baguhin ang filename upang tumugma sa iyong download.

Sa Debian/Ubuntu, maaaring kailanganin mo pang dagdag na **runtime** libraries na kinakailangan ng Chromium (madalas na naroroon na ito sa buong desktop installation). Patakbuhin ang mga sumusunod na command kung kinakailangan:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

palitan ang `libasound2t64` ng `libasound2` para sa `arm64`. Maaaring mag-fail pa rin ang minimal o custom installation dahil sa nawawalang `.so` file. I-install ang package na may pangalan na nakasaad sa error message (karaniwang karagdagang package: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Sa ilang environment, maaaring kailanganin mong patakbuhin ang app gamit ang `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Ang macOS ay hindi pa sinusuportahan sa kasalukuyan. Ang Transrewrt ay available para sa Windows, Linux, at Docker.

</details>

<br/>

Kapag tumatakbo na ang app, tingnan ang [**User Guide**](USER-GUIDE.tl.md) para matuto kung paano isalin, muling isulat, at baguhin ang teksto, pamahalaan ang mga prompt, at i-configure ang mga modelo.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Kung paano makakuha ng OpenRouter API key

Sinusuportahan ng Transrewrt ang maraming AI provider. Ang [OpenRouter](https://openrouter.ai) ay isang sikat na pagpipilian dahil pinagsama nito ang maraming modelo sa isang key at nag-aalok ng libreng mga modelo.

1. Mag-sign up o mag-log in sa [openrouter.ai](https://openrouter.ai).
2. Buksan ang pahina ng [Keys](https://openrouter.ai/keys) at lumikha ng bagong key (bigyan ng pangalan, at opsyonal na itakda ang credit limit). Maaari mong gamitin ang libreng mga modelo nang walang pagdaragdag ng credit.
3. **Desktop (Electron):** i-idikit ang mga key sa **Mga Setting → API**. **Docker:** itakda ang env vars tulad ng `OPENROUTER_API_KEY` (tingnan ang [Quick start](#quick-start)).

Huwag gamitin ang **Body Builder** model ng OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) para sa translate, rewrite, o transform: ito ay nagbabalik ng JSON request payloads, hindi ang kumpletong teksto para sa mga gawaing iyon. Tingnan ang [Settings → Models](USER-GUIDE.tl.md#models) sa User Guide.

Maaari mo ring gamitin ang iba pang provider (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o patakbuhin ang mga modelo nang lokal gamit ang [Ollama](https://ollama.com). Tingnan ang [Configuration](#configuration-and-environment) para sa buong listahan ng mga sinusuportahang provider at environment variables.

</br>

> ⚠️ **BABAALA**<br/>
> Kung gumagamit ka ng Ollama mula sa ibang device, container, o serbisyo, tandaang i-configure ang Ollama upang payagan ang mga panlabas na koneksyon (hindi lang localhost).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuration at environment

</br>

**Mga lokasyon ng config file**

| Pag-deploy         | Lokasyon ng config                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gamitin ang volume para sa pagpapanatili) |

<br/>

**Mga Environment variables** (web/Docker lamang; ginagamit ng Electron ang lokal na config file)

| Variable             | Paglalarawan                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | Port kung saan nakikinig ang server (naka-default sa `5000`)                                  |
| `CONFIG_PATH`        | Landas patungo sa config file (naka-default sa `/app/data/config.json`)                |
| `TZ`                 | time zone para sa oras sa server-side (logging, at iba pa) (naka-default sa `Europe/London`) |
| `HISTORY_DISABLED`   | Pilitin ang pag-off ng kasaysayan ng pagpapatupad (opsyonal, naka-default sa `false`)                  |
| `OPENROUTER_API_KEY` | OpenRouter API key                                                           |
| `OPENAI_API_KEY`     | OpenAI API key                                                               |
| `CEREBRAS_API_KEY`   | Cerebras API key                                                             |
| `ANTHROPIC_API_KEY`  | Anthropic API key                                                            |
| `GOOGLE_API_KEY`     | Google Gemini API key                                                        |
| `DEEPSEEK_API_KEY`   | DeepSeek API key                                                             |
| `GROQ_API_KEY`       | Groq API key                                                                 |
| `MISTRAL_API_KEY`    | Mistral API key                                                              |
| `OLLAMA_URL`         | Ollama base URL (hal. `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | xAI API key                                                                  |

**Privacy mode:** Upang pilitin ang pag-off ng pagsubaybay sa kasaysayan anuman ang `config.json` o mga kagustuhan batay sa user, itakda ang `HISTORY_DISABLED` sa `true` o `1` (hindi sensitibo sa kaso) para sa **web/Docker server process** at/o sa **Electron desktop main process** (hal. sistema o environment ng launcher — hindi lamang ang renderer). Ito ay nag-de-disable sa pag-iimbak ng kasaysayan ng input/output, i-lock ang **Settings → Mga Pangkalahatang Setting → Kasaysayan**, at pinipigilan ang mga History-related API.

I-configure lamang ang mga provider na ginagamit mo. Ang mga Model ID ay may namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, atbp.).

**Pagpapakita ng gastos:** Ibinabalik ng OpenRouter ang eksaktong na-bill na gastos kapag naaangkop. Ang iba pang mga provider ay gumagamit ng **tinataya** na gastos mula sa pampublikong presyo ng modelo ng OpenRouter kapag available ang OpenRouter key; kung wala ito, ang gastos na hindi OpenRouter ay maaaring ipakita bilang `0`. Ang mga pagtataya ay hindi mga invoice.

<br/>

**Data at persistence:** Para sa Docker, i-mount ang isang volume sa `/app/data` upang ang `config.json` at ang SQLite database ay manatili pagkatapos ng bawat pag-restart ng container. Kung walang volume, mawawala ang lahat ng data kapag tumigil ang container.

<br/>

**Web authentication:**

- Default admin: `admin` / `transrewrt26`.
- Pamahalaan ang mga user sa **Mga Setting → Mga User**.
- I-reset ang password: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **BABAALA**<br/>
> Agad na palitan ang default na admin password sa anumang network-accessible host.

<br/>

Ang mga setting ng key (font, mga modelo, mga wika, atbp.) ay magagamit sa Mga Setting ng application.

<br/><br/>

<a id="development-and-architecture"></a>
## Pag-unlad at arkitektura

- **Pagsasagawa:** Pag-setup, build, pagsubok, at pag-deploy (Electron, Web, Docker) - tingnan ang [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).
- **Arkitektura at pangkalahatang-ideya ng sistema:** Istraktura ng folder, tech stack, mga desisyon sa disenyo - tingnan ang [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md).

<br/><br/>

<a id="reporting-issues"></a>
## Pag-uulat ng mga isyu

Magbukas ng isyu sa [GitHub](https://github.com/wsj-br/transrewrt/issues). Isama ang iyong platform (Windows / Linux / Docker) at bersyon ng app (ipinapakita sa About dialog o sa pahina ng Releases).

<br/><br/>

<a id="disclaimer"></a>
## Paalala

Ang mga pangalan ng produkto at icon ay pagmamay-ari ng kanilang mga respektibong may-ari at ginagamit lamang para sa identification. Ang software na ito ay hindi konektado o iniindorso ng anumang mga banggit na brand.

<br/><br/>

<a id="license"></a>
## Lisensya

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
