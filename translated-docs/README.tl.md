---
translation_last_updated: '2026-03-30T00:46:02.924Z'
source_file_mtime: '2026-03-29T23:51:36.506Z'
source_file_hash: fa17b974cbf42a93
translation_language: tl
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Bersyon"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lisensya: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Kasangkapan sa teksto na pinapagana ng AI: isalin sa pagitan ng mga wika, i-rewrite sa iba't ibang estilo, at baguhin gamit ang mga pasadyang prompt — gamit ang maramihang AI provider (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, at lokal na Ollama). Tumatakbo bilang desktop app (Electron) o self-hosted web app (Docker).

- **Isalin** — sa pagitan ng maraming wika, may awtomatikong pagtukoy sa pinagmulan
- **Rewrite** — ayusin ang gramatika, pahusayin ang klaridad, pormal/o hindi pormal, paikliin, palawakin, teknikal
- **Transform** — pasadyang AI prompt; likhain at pamahalaan ang mga prompt, opsyonal na target na wika bawat prompt
- **Kasaysayan** — buong kasaysayan ng pagpapatakbo kasama ang input/output na teksto, pag-filter, at pag-export
- **Mga Modelo at gastos** — pumili ng mga modelo mula sa anumang naka-configure na provider; dashboard ng gastos at paggamit na may log, buod ayon sa modelo/operasyon/araw
- **UI** — multilingual na interface (30+ na mga wika, suporta sa RTL), mga font, ...
- **Web mode** — suporta sa maraming user na may admin na papel
- **Desktop** — Electron app para sa Windows at Linux
- **Self-hosted** — imahe ng Docker para sa amd64 at arm64 (handang gamitin sa Raspberry Pi)

Matapos mai-install, tingnan ang **[Gabay sa User](USER-GUIDE.tl.md)** para sa buong walkthrough ng lahat ng mga tampok.

<small>**Mabasa rin sa ibang mga wika:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Tala sa pagsasalin ng UI at dokumentasyon:** Ang lahat ng mga wika sa interface maliban sa orihinal na Ingles (UK)
> ay isinalin gamit ang mga modelo ng AI; maaaring hindi tumpak o may mga pagkakamali ang mga salita.

</small>

<br/>

<a id="screenshots"></a>
## Mga Screenshot

**Tagapili ng wika**

![Language selector](../images/screenshots/tl/language-selector.png)

**Isalin**

![Translate](../images/screenshots/tl/translate.png)

**I-Transform - editor ng prompt**

![Transform - prompt editor](../images/screenshots/tl/transform-prompt-edit.png)

**Dashboard**

![Dashboard summary — usage](../images/screenshots/tl/dashboard-summary.png)

**Kasaysayan**

![History](../images/screenshots/tl/history.png)

**Mga Setting - pagpili ng modelo**

![Settings - model selection](../images/screenshots/tl/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Talaan ng mga Nilalaman

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Mabilis na simula](#quick-start)
- [Pag-install](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Pag-configure ng oras ng time zone](#configuring-the-timezone)
- [Pagkuha ng OpenRouter API key](#getting-an-openrouter-api-key)
- [Pag-configure at kapaligiran](#configuration-and-environment)
- [Pagsasagawa at arkitektura](#development-and-architecture)
- [Pag-uulat ng mga isyu](#reporting-issues)
- [Paalala](#disclaimer)
- [Lisensya](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Mabilis na simula

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

Palitan ang `sk-or-your-key` gamit ang iyong [OpenRouter API key](https://openrouter.ai/keys) (o itakda ang iba pang provider keys; tingnan ang [Configuration](#configuration-and-environment)). Buksan ang [http://localhost:5000](http://localhost:5000) at baguhin ang default na admin password bago ilantad ang serbisyo.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Sa Docker, ang mga credential ng LLM ay itinatakda gamit ang environment variables tulad ng `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (hindi sa web UI). Sa desktop (Electron), itinatakda mo ang mga key sa **Mga Setting → API**.

<br/>

**Windows**

I-download ang pinakabagong `Transrewrt Setup x.y.z.exe` mula sa [Releases](https://github.com/wsj-br/transrewrt/releases), patakbuhin ang installer, at pagkatapos ay i-launch mula sa Start menu o desktop shortcut. Ilagay ang iyong API keys sa **Mga Setting → API**. Kailangan mong i-configure ang kahit isang provider, karaniwan ang OpenRouter para sa libreng mga modelo.

<br/>

**Linux**

I-download ang `.AppImage` para sa iyong CPU mula sa [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` para sa karaniwang PC, `arm64` para sa maraming ARM device, kabilang ang Raspberry Pi 4+), pagkatapos ay:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Ilagay ang iyong API keys sa **Mga Setting → API**. Kailangan mong i-configure ang kahit isang provider, karaniwan ang OpenRouter para sa libreng mga modelo.

Sa Debian/Ubuntu, maaaring kailanganin mong i-install muna ang karagdagang dependencies:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Tingnan ang [Installation → Linux](#linux-electron) para sa mga detalye.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Ang macOS ay kasalukuyang hindi suportado. Ang Transrewrt ay available para sa Windows, Linux, at Docker.

<br/>

Kapag tumatakbo na ang app, tingnan ang **[User Guide](USER-GUIDE.tl.md)** para matuto kung paano isalin, i-rewrite, at i-transform ang teksto, pamahalaan ang mga prompt, at i-configure ang mga modelo.

<br/><br/>

<a id="installation"></a>
## Pag-install

<a id="windows-electron"></a>
### Windows (Electron)

- I-download ang pinakabagong installer mula sa [Releases](https://github.com/wsj-br/transrewrt/releases).
- Patakbuhin ang `.exe` at sundin ang installer.
- Unang pagpapatakbo: simulan ang app mula sa Start menu o desktop shortcut.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Maaaring ipakita ng Windows ang isa sa mga babalang pangseguridad na ito (normal para sa mga unsigned/indie app):
>   - **User Account Control (UAC)**: "Gusto mo bang payagan ang app na ito mula sa isang hindi kilalang publisher na baguhin ang iyong device?" → I-click ang **Oo**.
>   - **Microsoft Defender SmartScreen**: "Pinrotektahan ng Windows ang iyong PC" → I-click ang **Higit pang impormasyon** → **Patakbuhin pa rin**.
>
> Nangyayari ito dahil hindi naka-sign ang app ng Microsoft o ng isang pangunahing publisher—ligtas ito kung na-download mula sa aming opisyal na GitHub releases
>  (i-verify ang SHA256 checksum sa ibaba).

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- I-download ang tugmang `.AppImage` (`x64` o `arm64`) mula sa [Releases](https://github.com/wsj-br/transrewrt/releases).
- Patakbuhin: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` sa x86_64/amd64, o gamitin ang pangalan ng file na `...-arm64.AppImage` sa ARM64.
- Karagdagang dependencies (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Tingnan ang [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para sa karagdagang impormasyon.

<br/>

<a id="docker"></a>
### Docker

- Kunin: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Itakda ang kahit isang susi ng provider sa pamamagitan ng environment (halimbawa `OPENROUTER_API_KEY` para sa OpenRouter). Ipasa ang mga variable gamit ang `-e` o `docker compose` / `.env` upang hindi maisama ang mga lihim sa imahe.
- Ang mga susi ng provider ay **hindi** isinasagot sa web UI; ang server ang nagbabasa mula sa environment.

Halimbawa - named volume para sa pagpapatuloy (OpenRouter key sa pamamagitan ng env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

o kung gusto mong gamitin ang Docker Compose, gamitin ang:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Tingnan ang [Configuration](#configuration-and-environment) para sa lahat ng environment variable, tulad ng `PORT`, `CONFIG_PATH`, `TZ`, at mga susi ng LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>
### Pag-configure ng oras ng time zone

Ang petsa at oras sa user interface ng aplikasyon ay sumusunod sa locale at time zone ng **browser**. Para sa **server-side** na pag-uugali (tulad ng logging), ang container ay gumagamit ng `TZ` na environment variable. Ang default ay `TZ=Europe/London`.

Para gamitin ang ibang time zone, itakda ang `TZ` sa iyong Compose file, halimbawa:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

O ipasa ito habang pinapatakbo ang container (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Sa maraming Linux host, maaari mong kopyahin ang pangalan ng time zone ng sistema gamit ang:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Ang listahan ng mga wastong pangalan ng time zone ay pinapanatili sa [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Kung paano makakuha ng OpenRouter API key

Sinusuportahan ng Transrewrt ang maraming AI provider. Ang [OpenRouter](https://openrouter.ai) ay isang sikat na pagpipilian dahil pinagsasama nito ang maraming modelo sa isang susi at nag-aalok ng libreng mga modelo.

1. Mag-sign up o mag-login sa [openrouter.ai](https://openrouter.ai).
2. Buksan ang pahina ng [Keys](https://openrouter.ai/keys) at lumikha ng bagong susi (bigyan ng pangalan, at opsyonal na itakda ang limitasyon ng kredito). Maaari kang gumamit ng libreng mga modelo nang walang idinagdag na kredito.
3. **Desktop (Electron):** i-paste ang mga susi sa **Settings → API**. **Docker:** itakda ang env vars tulad ng `OPENROUTER_API_KEY` (tingnan ang [Quick start](#quick-start)).

Huwag gamitin ang **Body Builder** model ng OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) para sa pagsasalin, pag-rewrite, o pagbabago: nagbabalik ito ng JSON request payloads, hindi ang kumpletong teksto para sa mga gawaing iyon. Tingnan ang [Settings → Models](USER-GUIDE.tl.md#models) sa User Guide.

Maaari mo ring gamitin ang iba pang mga provider (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o patakbuhin ang mga modelo nang lokal gamit ang [Ollama](https://ollama.com). Tingnan ang [Configuration](#configuration-and-environment) para sa buong listahan ng sinusuportahang provider at environment variables.

> ⚠️ **BABAENG**<br/>
> Kung gumagamit ka ng Ollama mula sa ibang device, container, o serbisyo, tandaang i-configure ang Ollama upang payagan ang mga panlabas na koneksyon (hindi lang localhost).

Para sa mga limitasyon, BYOK, at iba pa, tingnan ang [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konpigurasyon at kapaligiran

**Lokasyon ng config file**

| Deployment         | Lokasyon ng Config                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gamitin ang isang volume para sa pagpapanatili) |

<br/>

**Mga Environment variable** (web/Docker lamang; ginagamit ng Electron ang lokal na config file)

| Variable         | Default                 | Deskripsyon |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Server listening port |
| `CONFIG_PATH`    | `/app/data/config.json` | Landas patungo sa config file |
| `TZ`             | `Europe/London`         | IANA timezone para sa server-side time (logging, at iba pa); sinusundan pa rin ng UI ang browser. Tingnan ang [Docker → timezone](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(walang laman)*        | OpenRouter API key |
| `OPENAI_API_KEY`     | *(walang laman)*        | OpenAI API key |
| `CEREBRAS_API_KEY`   | *(walang laman)*        | Cerebras API key |
| `ANTHROPIC_API_KEY`  | *(walang laman)*        | Anthropic API key |
| `GOOGLE_API_KEY`     | *(walang laman)*        | Google Gemini API key |
| `DEEPSEEK_API_KEY`   | *(walang laman)*        | DeepSeek API key |
| `GROQ_API_KEY`       | *(walang laman)*        | Groq API key |
| `MISTRAL_API_KEY`    | *(walang laman)*        | Mistral API key |
| `OLLAMA_URL`     | *(walang laman)*        | Ollama base URL (hal. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(walang laman)*        | xAI API key |

Ikonpigura lamang ang mga provider na gagamitin mo. Ang mga model ID ay may namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, at iba pa).

**Pagpapakita ng gastos:** Ibinabalik ng OpenRouter ang eksaktong gastos kapag naaangkop. Ginagamit ng iba pang provider ang **tinataya** na gastos mula sa pampublikong presyo ng modelo ng OpenRouter kung may OpenRouter key; kung wala ito, ang gastos na hindi OpenRouter ay maaaring ipakita bilang `0`. Ang mga tantiya ay hindi resibo.

<br/>

**Data at persistence:** Para sa Docker, i-mount ang isang volume sa `/app/data` upang mapanatili ang `config.json` at ang SQLite database sa bawat pag-restart ng container. Kung walang volume, mawawala ang lahat ng data kapag tumigil ang container.

**Mga Developer:** Matapos i-pull ang mga pagbabago na pinalitan ang lumang single-key config, i-reset o i-merge ang `data/config.json` gamit ang bagong default na hugis mula sa `src/config-defaults/config_default.json` kung ang iyong lokal na file ay gumagamit pa rin ng mga patlang na tinanggal (`api_key`, `api_url`, mga opsyon ng proxy).

<br/>

**Web authentication:**

- Default admin: `admin` / `transrewrt26`.
- Pamahalaan ang mga user sa **Settings → Users**.
- I-reset ang password: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (mula sa source: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **BABALA**<br/>
> Agad na baguhin ang default na admin password sa anumang host na may access sa network.

<br/>

Magagamit ang mga pangunahing setting (font, mga modelo, mga wika, at iba pa) sa Mga Setting ng aplikasyon.

<br/><br/>

<a id="development-and-architecture"></a>
## Pag-unlad at arkitektura

- **Pag-unlad:** Setup, build, subukan, at i-deploy (Electron, Web, Docker) - tingnan ang **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arkitektura at pangkalahatang-ideya ng sistema:** Estruktura ng folder, tech stack, mga desisyon sa disenyo - tingnan ang **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Pag-uulat ng mga isyu

Magbukas ng isyu sa [GitHub](https://github.com/wsj-br/transrewrt/issues). Isama ang iyong platform (Windows / Linux / Docker) at bersyon ng app (nakalagay sa About dialog o sa pahina ng Releases).

<br/><br/>

<a id="disclaimer"></a>
## Disclaimer

Ang mga pangalan ng produkto at icon ay pagmamay-ari ng kanilang mga respektibong may-ari at ginagamit lamang para sa identification. Ang software na ito ay hindi konektado o iniindorso ng anumang mga banggit na brand.

<br/><br/>

<a id="license"></a>
## Lisensya

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
