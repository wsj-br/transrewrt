---
translation_last_updated: '2026-03-31T22:57:07.554Z'
source_file_mtime: '2026-03-31T22:20:13.182Z'
source_file_hash: bf6416a9ca259a19
translation_language: tl
source_file_path: README.md
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Talaan ng Nilalaman**

- [Mga Screenshot](#screenshots)
- [Talaan ng Nilalaman](#table-of-contents)
- [Mabilis na pagsisimula](#quick-start)
- [Pag-install](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Pag-configure ng oras ng time zone](#configuring-the-timezone)
- [Paano makakuha ng OpenRouter API key](#getting-an-openrouter-api-key)
- [Konpigurasyon at kapaligiran](#configuration-and-environment)
- [Pagsisimula at arkitektura](#development-and-architecture)
- [Pag-uulat ng mga isyu](#reporting-issues)
- [Paunawa](#disclaimer)
- [Lisensya](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

**Basahin sa iba pang mga wika:**
[Ingles (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [Ingles (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)

> **Tala sa pagsasalin ng UI at dokumentasyon:** Ang lahat ng mga wika sa interface maliban sa orihinal na Ingles (UK)
> ay isinalin gamit ang mga modelo ng AI; maaaring hindi tumpak o may mga pagkakamali ang mga salita.

## Mga Screenshot

**Tagapili ng wika**

Tagapili ng wika

**Isalin**

Isalin

**I-Transform - editor ng prompt**

I-transform – editor ng prompt

**Dashboard**

Buod ng Dashboard — paggamit

**Kasaysayan**

Kasaysayan

**Mga Setting - pagpili ng modelo**

Mga Setting – pagpili ng modelo

## Talaan ng Nilalaman

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

## Mabilis na pagsisimula

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

> ℹ️ **PAUNAWA**  
>
> Sa Docker, ang mga kredensyal ng LLM ay itinatakda gamit ang mga environment variable tulad ng `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (hindi sa web UI). Sa desktop (Electron), kinokonpigura mo ang mga key sa **Mga Setting → API**.

**Windows**

I-download ang pinakabagong `Transrewrt Setup x.y.z.exe` mula sa [Releases](https://github.com/wsj-br/transrewrt/releases), patakbuhin ang installer, at pagkatapos ay i-launch mula sa Start menu o desktop shortcut. Ilagay ang iyong API keys sa **Mga Setting → API**. Kailangan mong i-configure ang kahit isang provider, karaniwan ang OpenRouter para sa libreng mga modelo.

**Linux**

I-download ang `.AppImage` para sa iyong CPU mula sa [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` para sa karaniwang PC, `arm64` para sa maraming ARM device, kabilang ang Raspberry Pi 4+), pagkatapos ay:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Ilagay ang iyong API keys sa **Mga Setting → API**. Kailangan mong i-configure ang kahit isang provider, karaniwan ang OpenRouter para sa libreng mga modelo.

**Mga mensahe sa console:** Ang mga na-impake na build para sa Linux (`x64` at `arm64` AppImages) ay pinipigilan ang mga babala sa deprecation ng Node sa terminal (halimbawa ang built-in na `punycode` module). Kung nagpapakita ang Chromium ng mga error sa GPU / EGL tulad ng “GLES3 ay hindi suportado” ngunit gumagana ang app, maaari mong patayin ang mga ito sa pamamagitan ng pag-disable sa hardware acceleration:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Ito ay nalalapat din sa amd64; baguhin ang pangalan ng file upang tumugma sa iyong download. Tingnan ang [Pag-install → Linux (Electron)](#linux-electron) para sa mas detalyadong paliwanag.

Sa Debian/Ubuntu, maaaring kailanganin mo ng karagdagang **runtime** na mga library na inaasahan ng Chromium (madalas na naroroon na sa buong desktop). Gamitin ang **`libnotify4`** para sa mga desktop notification—**hindi** `libnotify-dev` (ito ay para sa pagbuo ng software, hindi para sa pagpapatakbo ng na-impake na AppImage):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

Ang minimal o custom na mga imahe ay maaari pa ring mabigo dahil sa nawawalang `.so`; i-install ang package na pinangalanan sa error (karaniwang karagdagang: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Ang ilang kapaligiran ay nangangailangan ng FUSE para mapatakbo ang AppImages (hal. `libfuse2` sa Ubuntu 22.04+), o gamitin ang `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

Tingnan ang [Pag-install → Linux](#linux-electron) para sa parehong buod.

> ℹ️ **PAUNAWA**  
>
> Ang macOS ay kasalukuyang hindi suportado. Ang Transrewrt ay magagamit para sa Windows, Linux, at Docker.

Kapag tumatakbo na ang app, tingnan ang **[User Guide](USER-GUIDE.tl.md)** para matuto kung paano isalin, i-rewrite, at i-transform ang teksto, pamahalaan ang mga prompt, at i-configure ang mga modelo.

## Pag-install

### Windows (Electron)

- I-download ang pinakabagong installer mula sa [Releases](https://github.com/wsj-br/transrewrt/releases).
- Patakbuhin ang `.exe` at sundin ang installer.
- Unang pagpapatakbo: simulan ang app mula sa Start menu o desktop shortcut.

> ℹ️ **PAUNAWA**  
>
> Maaaring ipakita ng Windows ang isa sa mga babalang pangseguridad na ito (normal para sa mga hindi naka-sign/indie na app):
>
> - **User Account Control (UAC)**: "Gusto mo bang payagan ang app na ito mula sa isang hindi kilalang publisher na baguhin ang iyong device?" → I-click ang **Oo**.
> - **Microsoft Defender SmartScreen**: "Pinrotektahan ng Windows ang iyong PC" → I-click ang **Higit pang impormasyon** → **I-run gayunpaman**.
>
> Nangyayari ito dahil hindi naka-sign ang app ng Microsoft o ng isang pangunahing publisher—ligtas ito kung kinuha mula sa aming opisyal na GitHub releases
>  (i-verify ang SHA256 checksum sa ibaba).

### Linux (Electron)

- I-download ang katugmang `.AppImage` (`x64` o `arm64`) mula sa [Mga Release](https://github.com/wsj-br/transrewrt/releases).
- I-run: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` sa x86_64/amd64, o gamitin ang filename na `...-arm64.AppImage` sa ARM64.
- **Mga runtime library ng Debian/Ubuntu** (Electron/Chromium; katulad ng [Mabilisang Simula → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — gamitin ang **`libnotify4`**, hindi `libnotify-dev`. Sa mga minimal na sistema, i-install ang anumang nawawalang `.so` na nakalista sa terminal; kadalasang kailangan ang mga add-on tulad ng `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`. Maaaring kailanganin ng AppImage ang `libfuse2` (Ubuntu 22.04+) o `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`.
- **Mga mensahe sa GPU:** Maaaring mag-log ang Chromium ng mga error sa pag-initialize ng GPU o EGL sa ilang sistema (lalo na sa ARM); maaari pa ring tumakbo nang maayos ang app. Upang maiwasan ang mga mensaheng ito, i-launch gamit ang hardware acceleration na naka-off: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (o ang iyong filename na `arm64`).

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

### Pag-configure ng timezone

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

## Pagkuha ng OpenRouter API key

Sinusuportahan ng Transrewrt ang maraming AI provider. Ang [OpenRouter](https://openrouter.ai) ay isang sikat na pagpipilian dahil pinagsasama nito ang maraming modelo sa isang susi at nag-aalok ng libreng mga modelo.

1. Mag-sign up o mag-login sa [openrouter.ai](https://openrouter.ai).
2. Buksan ang pahina ng [Keys](https://openrouter.ai/keys) at lumikha ng bagong susi (bigyan ng pangalan, at opsyonal na itakda ang limitasyon ng kredito). Maaari kang gumamit ng libreng mga modelo nang walang idinagdag na kredito.
3. **Desktop (Electron):** i-paste ang mga susi sa **Settings → API**. **Docker:** itakda ang env vars tulad ng `OPENROUTER_API_KEY` (tingnan ang [Quick start](#quick-start)).

Huwag gamitin ang **Body Builder** model ng OpenRouter (`[openrouter/bodybuilder](https://openrouter.ai/openrouter/bodybuilder)`) para sa pagsasalin, pag-rewrite, o pag-transform: nagbabalik ito ng JSON request payloads, hindi ang kumpletong teksto para sa mga gawaing ito. Tingnan ang [Mga Setting → Mga Modelo](USER-GUIDE.tl.md#models) sa User Guide.

Maaari mo ring gamitin ang iba pang mga provider (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) o patakbuhin ang mga modelo nang lokal gamit ang [Ollama](https://ollama.com). Tingnan ang [Configuration](#configuration-and-environment) para sa buong listahan ng sinusuportahang provider at environment variables.

> ⚠️ **BABALA**  
>
> Kung gumagamit ka ng Ollama mula sa ibang device, container, o serbisyo, tandaang i-configure ang Ollama upang payagan ang mga koneksyon mula sa labas (hindi lang localhost).

Para sa mga limitasyon, BYOK, at iba pa, tingnan ang [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

## Konpigurasyon at kapaligiran

**Lokasyon ng config file**

| Deployment         | Lokasyon ng Config                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gamitin ang isang volume para sa pagpapanatili) |

**Mga Environment variable** (web/Docker lamang; ginagamit ng Electron ang lokal na config file)

| Variable             | Default                 | Paglalarawan                                                                                                                 |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `PORT`               | `5000`                  | Port kung saan nakikinig ang server                                                                                                       |
| `CONFIG_PATH`        | `/app/data/config.json` | Landas patungo sa config file                                                                                                     |
| `TZ`                 | `Europe/London`         | IANA timezone para sa oras sa server-side (logging, atbp.); sinusundan pa rin ng UI ang browser. Tingnan ang [Docker → timezone](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(walang laman)*               | OpenRouter API key                                                                                                          |
| `OPENAI_API_KEY`     | *(walang laman)*               | OpenAI API key                                                                                                              |
| `CEREBRAS_API_KEY`   | *(walang laman)*               | Cerebras API key                                                                                                            |
| `ANTHROPIC_API_KEY`  | *(walang laman)*               | Anthropic API key                                                                                                           |
| `GOOGLE_API_KEY`     | *(walang laman)*               | Google Gemini API key                                                                                                       |
| `DEEPSEEK_API_KEY`   | *(walang laman)*               | DeepSeek API key                                                                                                            |
| `GROQ_API_KEY`       | *(walang laman)*               | Groq API key                                                                                                                |
| `MISTRAL_API_KEY`    | *(walang laman)*               | Mistral API key                                                                                                             |
| `OLLAMA_URL`         | *(walang laman)*               | Ollama base URL (hal. `http://host.docker.internal:11434`)                                                                  |
| `XAI_API_KEY`        | *(walang laman)*               | xAI API key                                                                                                                 |

Ikonpigura lamang ang mga provider na gagamitin mo. Ang mga model ID ay may namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, at iba pa).

**Pagpapakita ng gastos:** Ibinabalik ng OpenRouter ang eksaktong gastos kapag naaangkop. Ginagamit ng iba pang provider ang **tinataya** na gastos mula sa pampublikong presyo ng modelo ng OpenRouter kung may OpenRouter key; kung wala ito, ang gastos na hindi OpenRouter ay maaaring ipakita bilang `0`. Ang mga tantiya ay hindi resibo.

**Data at persistence:** Para sa Docker, i-mount ang isang volume sa `/app/data` upang mapanatili ang `config.json` at ang SQLite database sa bawat pag-restart ng container. Kung walang volume, mawawala ang lahat ng data kapag tumigil ang container.

**Mga Developer:** Matapos i-pull ang mga pagbabago na pinalitan ang lumang single-key config, i-reset o i-merge ang `data/config.json` gamit ang bagong default na hugis mula sa `src/config-defaults/config_default.json` kung ang iyong lokal na file ay gumagamit pa rin ng mga patlang na tinanggal (`api_key`, `api_url`, mga opsyon ng proxy).

**Web authentication:**

- Default admin: `admin` / `transrewrt26`.
- Pamahalaan ang mga user sa **Settings → Users**.
- I-reset ang password: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (mula sa source: `pnpm run reset-web-password -- <username> <new-password>`)

> ⚠️ **BABA**  
>
> Baguhin agad ang default na admin password sa anumang host na ma-access sa network.

Magagamit ang mga pangunahing setting (font, mga modelo, mga wika, at iba pa) sa Mga Setting ng aplikasyon.

## Pagsusuri at arkitektura

- **Pag-unlad:** Setup, build, subukan, at i-deploy (Electron, Web, Docker) - tingnan ang **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arkitektura at pangkalahatang-ideya ng sistema:** Estruktura ng folder, tech stack, mga desisyon sa disenyo - tingnan ang **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

## Pag-uulat ng mga isyu

Magbukas ng isyu sa [GitHub](https://github.com/wsj-br/transrewrt/issues). Isama ang iyong platform (Windows / Linux / Docker) at bersyon ng app (nakalagay sa About dialog o sa pahina ng Releases).

## Paunawa

Ang mga pangalan ng produkto at icon ay pagmamay-ari ng kanilang mga respektibong may-ari at ginagamit lamang para sa identification. Ang software na ito ay hindi konektado o iniindorso ng anumang mga banggit na brand.

## Lisensya

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
