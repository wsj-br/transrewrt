---
translated_at: "2026-03-29T01:54:35.359Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner" />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Bersyon"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lisensya: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Isang kasangkapan sa teksto na pinapagana ng AI: isalin sa pagitan ng mga wika, muling isulat sa iba't ibang istilo, at baguhin gamit ang pasadyang mga prompt — gamit ang maramihang tagapaghatid ng AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, at lokal na Ollama). Maaring patakbuhin bilang desktop app (Electron) o bilang self-hosted web app (Docker).

- **Isalin** — sa daan-daang wika, may awtomatikong pagtukoy sa wika ng orihinal
- **Muling isulat** — ayusin ang gramatika, mapabuti ang kaliwanagan, pormal/impormal, maikli o palawakin, teknikal
- **Baguhin** — AI prompt na pasadya; lumikha at pamahalaan ang mga prompt, opsyonal na wika-layunin bawat prompt
- **Kasaysayan** — kumpletong kasaysayan ng mga gawaing isinagawa na may input/output na teksto, may pag-filter, at pag-export
- **Mga Modelo at gastos** — pumili ng mga modelo mula sa anumang naka-configure na tagapagbigay; dashboard ng gastos at paggamit may log, buod ayon sa modelo/gawain/araw
- **User Interface** — multiwika na interface (higit sa 30 wika, suporta sa kanan-pabalikwalang teksto), mga font, ...
- **Web na mode** — suporta sa maraming user kasama ang admin na papel
- **Desktop** — aplikasyong Electron para sa Windows at Linux
- **Self-hosted** — imahe sa Docker para sa amd64 at arm64 (nakarehistro na sa Raspberry Pi)

Kapag na-install na, tingnan ang **[Gabay sa Gumagamit](USER-GUIDE.tl.md)** para sa buong gabay sa lahat ng mga tampok.

<small>**Basahin sa ibang mga wika:** </small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Puna sa mga salin ng UI at dokumentasyon:** Ang lahat ng mga wika ng interface maliban sa orihinal na Ingles (UK)
> ay isinalin gamit ang mga AI model; ang mga pananalita ay maaaring hindi tumpak o may mga pagkakamali.

</small>

<br/>

<a id="screenshots"></a>

## Mga Screenshot

**Tagapili ng wika**

![Tagapili ng wika](../images/screenshots/tl/language-selector.png)

**Isalin**

![Isalin](../images/screenshots/tl/translate.png)

**Baguhin – editor ng prompt**

![Baguhin – editor ng prompt](../images/screenshots/tl/transform-prompt-edit.png)

**Dashboard**

![Buod ng Dashboard – paggamit](../images/screenshots/tl/dashboard-summary.png)

**Kasaysayan**

![Kasaysayan](../images/screenshots/tl/history.png)

**Mga Setting – pagpili ng modelo**

![Mga Setting – pagpili ng modelo](../images/screenshots/tl/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Talahanayan ng mga Nilalaman

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Mabilis na pagsisimula](#quick-start)
- [Pag-install](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Pagsasagawa ng oras na sona (timezone)](#configuring-the-timezone)
- [Pagkuha ng OpenRouter API key](#getting-an-openrouter-api-key)
- [Konpigurasyon at kapaligiran](#configuration-and-environment)
- [Pagsasagawa at arkitektura](#development-and-architecture)
- [Pag-uulat ng mga isyu](#reporting-issues)
- [Paunawa](#disclaimer)
- [Lisensya](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Mabilisang Simula

**Docker (ina-rekomenda para sa self-hosting)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Palitan ang `sk-or-your-key` ng iyong [OpenRouter API key](https://openrouter.ai/keys) (o itakda ang mga susi ng ibang provider; tingnan ang [Configuration](#configuration-and-environment)). Buksan ang [http://localhost:5000](http://localhost:5000) at palitan ang default na admin password bago ipakita ang serbisyo.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Sa Docker, itinatakda ang mga kredensyal ng LLM gamit ang mga environment variable tulad ng `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (hindi sa web UI). Sa desktop (Electron), itinatakda ang mga susi sa **Settings → API**.

<br/>

**Windows**

I-download ang pinakabagong `Transrewrt Setup x.y.z.exe` mula sa [Mga Inilabas](https://github.com/wsj-br/transrewrt/releases), i-run ang installer, pagkatapos ay i-launch mula sa Start menu o desktop shortcut. Ilagay ang iyong API keys sa **Mga Setting → API**. Kailangan mong i-configure ang hindi bababa sa isang provider, karaniwan ang OpenRouter para sa libreng mga modelo.

<br/>

**Linux**

I-download ang `.AppImage` para sa iyong CPU mula sa [Mga Inilabas](https://github.com/wsj-br/transrewrt/releases) (`x64` para sa karaniwang PC, `arm64` para sa maraming ARM device, kabilang ang Raspberry Pi 4+), pagkatapos ay:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Ilagay ang iyong API keys sa **Mga Setting → API**. Kailangan mong i-configure ang hindi bababa sa isang provider, karaniwan ang OpenRouter para sa libreng mga modelo.

Sa Debian/Ubuntu, maaaring kailanganin mong i-install muna ang karagdagang dependency:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Tingnan ang [Pag-install → Linux](#linux-electron) para sa mga detalye.

<br/>

> ℹ️ **PAUNAWA**<br/>

> Kasalukuyang hindi suportado ang macOS. Magagamit ang Transrewrt para sa Windows, Linux, at Docker.

<br/>

Kapag tumatakbo na ang app, tingnan ang **[Gabay sa Gumagamit](USER-GUIDE.tl.md)** upang matutunan kung paano isalin, muling isulat, at baguhin ang teksto, pamahalaan ang mga prompt, at i-configure ang mga modelo.

<br/><br/>

<a id="installation"></a>

## Pag-install

<a id="windows-electron"></a>

### Windows (Electron)

- I-download ang pinakabagong installer mula sa [Mga Paglabas](https://github.com/wsj-br/transrewrt/releases).
- I-run ang `.exe` at sundin ang mga hakbang sa installer.
- Unang pagpapatakbo: simulan ang app mula sa Start menu o desktop shortcut.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Maaaring ipakita ng Windows ang isa sa mga babala sa seguridad na ito (normal para sa mga hindi naka-sign o indie app):
>   - **User Account Control (UAC)**: "Gusto mo bang payagan ang app na ito mula sa isang hindi kilalang publisher na magbago sa iyong device?" → Pindutin ang **Yes**.
>   - **Microsoft Defender SmartScreen**: "Pinrotektahan ng Windows ang iyong PC" → Pindutin ang **More info** → **Run anyway**.
>
> Nangyayari ito dahil hindi naka-sign ang app ng Microsoft o ng isang pangunahing publisher—ligtas ito kung iyon ay na-download mula sa aming opisyal na GitHub releases
>  (suriin ang SHA256 checksum sa ibaba).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- I-download ang kaukulang `.AppImage` (`x64` o `arm64`) mula sa [Releases](https://github.com/wsj-br/transrewrt/releases).
- Ipagana: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` sa x86_64/amd64, o gamitin ang pangalan ng file na `...-arm64.AppImage` sa ARM64.
- Karagdagang dependencies (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Tingnan ang [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para sa karagdagang impormasyon.

<br/>

<a id="docker"></a>

### Docker

- I-download: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Itakda ang kahit isang susi ng provider sa pamamagitan ng environment (halimbawa, `OPENROUTER_API_KEY` para sa OpenRouter). Ipasa ang mga variable gamit ang `-e` o `docker compose` / `.env` upang hindi masama ang mga lihim sa imahe.
- Ang mga susi ng provider ay **hindi** isinasagot sa web UI; ang server ang nagbabasa mula sa environment.

Halimbawa – named volume para sa pagpapatuloy (OpenRouter key sa pamamagitan ng env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

o kung gusto mong gumamit ng Docker Compose, gamitin ang:

```
# i-download ang compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# i-edit ang file para magdagdag ng API_KEYS at ayusin ang oras (TZ)
vi transrewrt.yml
# i-on ang container
docker compose -f transrewrt.yml up -d

Tingnan ang [Konpigurasyon](#configuration-and-environment) para sa lahat ng mga variable ng kapaligiran, tulad ng `PORT`, `CONFIG_PATH`, `TZ`, at mga susi ng LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>

### Pagsasaayos ng orasang sona

Ang petsa at oras ng user interface ng aplikasyon ay sumusunod sa **locale at orasang sona ng browser**. Para sa pag-uugali sa **server-side** (tulad ng pag-log), ang lalagyan ay gumagamit ng `TZ` na environment variable. Ang default ay `TZ=Europe/London`.

Upang gamitin ang ibang orasang sona, itakda ang `TZ` sa iyong Compose file, halimbawa:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

O ipasa ito habang pinapatakbo ang lalagyan (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Sa maraming Linux host, maaari mong kopyahin ang pangalan ng orasang sona ng sistema gamit ang:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Makikita ang listahan ng mga wastong pangalan ng orasang sona sa [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Paano makakuha ng OpenRouter API key

Sumusuporta ang Transrewrt sa maraming AI providers. Ang [OpenRouter](https://openrouter.ai) ay isang sikat na opsyon dahil pinipilit nito ang maraming modelo sa ilalim ng iisang key at nag-aalok ng libreng mga modelo.

1. Mag-sign up o mag-log in sa [openrouter.ai](https://openrouter.ai).
2. Buksan ang pahina ng [Keys](https://openrouter.ai/keys) at lumikha ng bagong key (bigyan ng pangalan, at opsyonal na itakda ang limitasyon ng kredito). Maaari mong gamitin ang libreng mga modelo nang hindi nagdadagdag ng kredito.
3. **Desktop (Electron):** i-paste ang key sa **Settings → API**. **Docker:** itakda ang env vars tulad ng `OPENROUTER_API_KEY` (tingnan ang [Quick start](#quick-start)).

Huwag gamitin ang **Body Builder** na modelo ng OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) para sa pagsasalin, pag-rewrite, o pagbabago: nagbabalik ito ng JSON request payloads, hindi ang kumpletong teksto para sa mga gawaing iyon. Tingnan ang [Settings → Models](USER-GUIDE.tl.md#models) sa User Guide.

Maaari mo ring gamitin ang iba pang mga tagapagbigay (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o paganahin nang lokal ang mga modelo gamit ang [Ollama](https://ollama.com). Tingnan ang [Configuration](#configuration-and-environment) para sa buong listahan ng suportadong mga tagapagbigay at mga variable sa kapaligiran.

> ⚠️ **BABAALA**<br/>
> Kung gumagamit ka ng Ollama mula sa ibang aparato, lalagyan (container), o serbisyo, tandaan na i-configure ang Ollama upang payagan ang mga panlabas na koneksyon (hindi lang localhost).

Para sa mga limitasyon, BYOK, at iba pa, tingnan ang [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Pagsasaayos at kapaligiran

**Mga lokasyon ng file ng pagsasaayos**

| Pag-deploy         | Lokasyon ng Config                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gamitin ang isang volume para mapanatili) |

<br/>

**Mga variable sa kapaligiran** (para sa web/Docker lamang; ginagamit ng Electron ang lokal na config file)

| Variable         | Default                 | Paglalarawan |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Server na port para sa pagdinig |
| `CONFIG_PATH`    | `/app/data/config.json` | Landas patungo sa config file |
| `TZ`             | `Europe/London`         | IANA timezone para sa server-side na oras (logging, at iba pa); ang UI ay sumusunod pa rin sa browser. Tingnan ang [Docker → timezone](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(walang laman)*          | OpenRouter API key |
| `OPENAI_API_KEY`     | *(walang laman)*          | OpenAI API key |
| `CEREBRAS_API_KEY`   | *(walang laman)*          | Cerebras API key |
| `ANTHROPIC_API_KEY`  | *(walang laman)*          | Anthropic API key |
| `GOOGLE_API_KEY`     | *(walang laman)*          | Google Gemini API key |
| `DEEPSEEK_API_KEY`   | *(walang laman)*          | DeepSeek API key |
| `GROQ_API_KEY`       | *(walang laman)*          | Groq API key |
| `MISTRAL_API_KEY`    | *(walang laman)*          | Mistral API key |
| `OLLAMA_URL`     | *(walang laman)*          | Ollama base URL (hal. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(walang laman)*          | xAI API key |

I-configure lamang ang mga provider na ginagamit mo. Ang mga model ID ay may namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, at iba pa).

**Display ng gastos:** Ang OpenRouter ay nagbabalik ng eksaktong singil na halaga kapag naaangkop. Ang ibang provider ay gumagamit ng **tinatayang** halaga mula sa pampublikong presyo ng modelo ng OpenRouter kapag available ang OpenRouter key; kung wala ito, maaaring ipakita bilang `0` ang gastos na hindi OpenRouter. Ang mga pagtataya ay hindi mga invoice.

<br/>

**Data at pagpapanatili:** Para sa Docker, i-mount ang isang volume sa `/app/data` upang manatili ang `config.json` at ang SQLite database kahit i-restart ang container. Kung walang volume, mawawala ang lahat ng data kapag tumigil ang container.

**Mga developer:** Matapos i-pull ang mga pagbabagong pinalitan ang lumang config na may isang key, i-reset o i-merge ang `data/config.json` gamit ang bagong default na hugis mula sa `src/config-defaults/config_default.json` kung ang lokal na file mo ay gumagamit pa rin ng mga patlang na inalis (`api_key`, `api_url`, mga opsyon ng proxy).

<br/>

**Web authentication:**

- Default na admin: `admin` / `transrewrt26`.
- Pamahalaan ang mga user sa **Settings → Users**.

- I-reset ang password: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (mula sa source: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **BABAALA**<br/>
> Palitan agad ang default na admin password sa anumang host na may access sa network.

<br/>

Magagamit ang mga mahahalagang setting (font, mga modelo, wika, atbp.) sa Mga Setting ng aplikasyon.

<br/><br/>

<a id="development-and-architecture"></a>

## Pagsusuri at arkitektura

- **Pagsusuri:** Pag-aayos, pagbuo, pagsusuri, at pag-deploy (Electron, Web, Docker) - tingnan ang **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arkitektura at pangkalahatang-ideya ng sistema:** Estruktura ng folder, tech stack, mga desisyon sa disenyo - tingnan ang **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## Pag-uulat ng mga isyu

Buksan ang isang isyu sa [GitHub](https://github.com/wsj-br/transrewrt/issues). Isama ang iyong platform (Windows / Linux / Docker) at bersyon ng app (nakalagay sa About dialog o sa pahina ng Releases).

<br/><br/>

<a id="disclaimer"></a>

## Paunawa

Ang mga pangalan at mga logo ng produkto ay pagmamay-ari ng kaukulang may-ari at ginagamit lamang para sa layuning pagkilala. Ang software na ito ay hindi kaugnay o pinagpalitaw man ng anumang mga brand na nabanggit.

<br/><br/>

<a id="license"></a>

## Lisensya

Copyright © 2026 Waldemar Scudeller Jr.

[Lisensya ng Apache 2.0](LICENSE)