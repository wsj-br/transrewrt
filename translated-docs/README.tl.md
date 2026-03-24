---
translated_at: "2026-03-24T01:17:17.444Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logo" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Bersyon"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lisensya: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Kasangkapan sa teksto na pinapagana ng AI: isalin sa iba’t ibang wika, muling isulat sa iba’t ibang istilo, at baguhin gamit ang pasadyang mga prompt – gamit ang maramihang tagapaghatid ng AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, at lokal na Ollama). Maaaring tumakbo bilang desktop app (Electron) o sariling-host na web app (Docker).

- **Isalin** – sa maramihang wika, may awtomatikong pagtukoy sa pinagmulang wika
- **Muling isulat** – ayusin ang gramatika, mapabuti ang kaliwanagan, formal/o di-pormal, maikli, palawakin, teknikal
- **Baguhin** – pasadyang mga prompt sa AI; lumikha at pamahalaan ang mga prompt, opsyonal ang target na wika bawat prompt
- **Kasaysayan** – kumpletong kasaysayan ng pagpapatakbo kasama input/output na teksto, may pag-filter at eksport
- **Mga Modelo at gastos** – pumili ng mga modelo mula sa anumang naka-configure na tagapaghatid; dashboard ng gastos na may log sa SQLite, buod ayon sa modelo/gawain/araw
- **UI** – multi-wikang interface (30+ wikang suportado, may suporta sa RLTL), mga font, atbp.
- **Modo ng Web** – suporta sa maramihang gumagamit na may papel na admin; ang mga API key ay mananatili sa server-side, hindi kailanman ipapakita sa browser
- **Desktop** – app na Electron para sa Windows at Linux
- **Sariling-host** – imahe ng Docker para sa amd64 at arm64 (handang gamitin sa Raspberry Pi)

Kapag na-install na, tingnan ang **[Gabay sa Gumagamit](USER-GUIDE.tl.md)** para sa kumpletong walkthrough ng lahat ng tampok.

<small>**Basahin sa iba’t ibang wika:** [English (UK)](README.tl.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>


<br/>

**Tala sa pagsasalin sa UI at dokumentasyon:** Ang lahat ng mga wika sa interface maliban sa Ingles (UK) ay isinalin gamit ang mga modelo ng AI; maaaring hindi tumpak ang pagpapahayag o may posibilidad na magkamali.

<a id="screenshots"></a>
## Mga Screenshot

**Tagapili ng wika**

![Tagapili ng wika](../images/screenshots/tl/language-selector.png)

**Pagsasalin**

![Pagsasalin](../images/screenshots/tl/translate.png)

**Pagbabago – editor ng prompt**

![Pagbabago – editor ng prompt](../images/screenshots/tl/transform-prompt-edit.png)

**Dashboard**

![Dashboard ng gastos](../images/screenshots/tl/dashboard-summary.png)

**Kasaysayan**

![Kasaysayan](../images/screenshots/tl/history.png)

**Mga Setting – pagpili ng modelo**

![Mga Setting – pagpili ng modelo](../images/screenshots/tl/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Talahanayan ng mga Nilalaman

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Mabilisang Simula](#quick-start)
- [Instalasyon](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Paano makakuha ng OpenRouter API key](#getting-an-openrouter-api-key)
- [Konpigurasyon at kapaligiran](#configuration-and-environment)
- [Pag-unlad at arkitektura](#development-and-architecture)
- [Mga release at tag](#releases-and-tags)
- [Pagtulong sa proyekto](#contributing)
- [Paunawa](#disclaimer)
- [Lisensya](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Mabilisang Simula

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

Palitan ang `sk-or-your-key` ng iyong [OpenRouter API key](https://openrouter.ai/keys) (o i-set ang iba pang key ng provider; tingnan ang [Konpigurasyon](#configuration-and-environment)). Buksan ang [http://localhost:5000](http://localhost:5000) at baguhin ang default na admin password bago ilantad ang serbisyo.

<br/>

> ℹ️ **TALA**<br/>
> Sa Docker, ang mga kredensyal ng LLM ay ikinakabit gamit ang environment variables tulad ng `OPENROUTER_KEY`, `OPENAI_KEY`, … (hindi sa web UI). Sa desktop (Electron), kinokonpigura mo ang mga key sa **Mga Setting → API**.

<br/>

**Windows**

I-download ang pinakabagong `Transrewrt Setup x.y.z.exe` mula sa [Mga Release](https://github.com/wsj-br/transrewrt/releases), patakbuhin ang installer, pagkatapos ay i-launch mula sa Start menu o desktop shortcut. Ilagay ang iyong mga API key sa **Mga Setting → API**. Kailangan mong ikonpigura ang kahit isang provider; karaniwan ang OpenRouter para sa libreng mga modelo.

<br/>

**Linux**

I-download ang `.AppImage` mula sa [Mga Release](https://github.com/wsj-br/transrewrt/releases), pagkatapos:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Ilagay ang iyong mga API key sa **Mga Setting → API**. Kailangan mong ikonpigura ang kahit isang provider; karaniwan ang OpenRouter para sa libreng mga modelo.

Sa Debian/Ubuntu, maaaring kailanganin munang i-install ang karagdagang dependencies:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Tingnan ang [Instalasyon → Linux](#linux-electron) para sa karagdagang detalye.

<br/>

> ℹ️ **TALA**<br/>
> Ang macOS ay hindi pa suportado sa kasalukuyan. Ang Transrewrt ay available para sa Windows, Linux, at Docker.

<br/>

Kapag tumatakbo na ang app, tingnan ang **[Gabay sa Gumagamit](USER-GUIDE.tl.md)** para matuto kung paano isasalin, i-rewrite, at baguhin ang teksto, pamahalaan ang mga prompt, at ikonpigura ang mga modelo.

<br/><br/>

<a id="installation"></a>
## Instalasyon

<a id="windows-electron"></a>
### Windows (Electron)

- I-download ang pinakabagong installer mula sa [Mga Release](https://github.com/wsj-br/transrewrt/releases).
- Patakbuhin ang `.exe` at sundin ang installer.
- Unang pagpapatakbo: i-launch ang app mula sa Start menu o desktop shortcut.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- I-download ang `.AppImage` mula sa [Mga Release](https://github.com/wsj-br/transrewrt/releases).
- Patakbuhin: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Karagdagang dependencies (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Tingnan ang [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para sa karagdagang impormasyon.

<br/>

<a id="docker"></a>
### Docker

- I-pull: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Itakda ang kahit isang key ng provider sa pamamagitan ng environment (halimbawa `OPENROUTER_KEY` para sa OpenRouter). Ipasa ang variables gamit ang `-e` o `docker compose` / `.env` upang hindi masama ang mga lihim sa imahe.
- Ang mga key ng provider ay **hindi** ilalagay sa web UI; ang server ay nagbabasa mula sa environment.

Halimbawa - named volume para sa data persistence (OpenRouter key gamit ang env):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opsyon   | Deskripsyon                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (i-map gamit ang `-p 5000:5000`)                                                                       |
| Volume   | I-mount ang `/app/data` para sa konpigurasyon at pag-iimbak ng database                                       |
| Env vars | `PORT`, `CONFIG_PATH`, kasama ang LLM keys (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - tingnan ang [Konpigurasyon](#configuration-and-environment) |

Para i-build at patakbuhin mula sa source: `docker compose up --build -d` o `pnpm docker:up` - tingnan ang [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Paano makakuha ng OpenRouter API key

Sinusuportahan ng Transrewrt ang maraming AI provider. Ang [OpenRouter](https://openrouter.ai) ay isang sikat na pagpipilian dahil pinipigil nito ang maraming modelo sa ilalim ng isang key at nag-aalok ng libreng mga modelo.

1. Mag-sign up o mag-log in sa [openrouter.ai](https://openrouter.ai).
2. Buksan ang pahina ng [Keys](https://openrouter.ai/keys) at lumikha ng bagong key (bigyan ng pangalan, at opsyonal na ilagay ang limitasyon sa kredito). Maaari mong gamitin ang libreng mga modelo kahit walang idinaragdag na kredito.
3. **Desktop (Electron):** i-paste ang mga key sa **Settings → API**. **Docker:** i-set ang env vars tulad ng `OPENROUTER_KEY` (tingnan ang [Mga mabilisang hakbang](#quick-start)).

Maaari mo ring gamitin ang iba pang provider (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) o patakbuhin ang mga modelo nang lokal gamit ang [Ollama](https://ollama.com). Tingnan ang [Configuration](#configuration-and-environment) para sa kumpletong listahan ng sinusuportahang provider at environment variables.

Para sa mga limitasyon, BYOK, at iba pa, tingnan ang [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuration at kapaligiran

**Lokasyon ng config file**

| Deployment         | Lokasyon ng config                              |
| ------------------ | ----------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                         |
| Electron (Linux)   | `~/.config/transrewrt/`                         |
| Web / Docker       | `/app/data/config.json` (gamitin ang volume para mapangalagaan) |

<br/>

**Mga Environment variable** (web/Docker lamang; gumagamit ang Electron ng lokal na config file)

| Variable         | Default                 | Paglalarawan |
| ---------------- | ----------------------- | ------------ |
| `PORT`           | `5000`                  | Port kung saan nakikinig ang server |
| `CONFIG_PATH`    | `/app/data/config.json` | Landas patungo sa config file |
| `OPENROUTER_KEY` | *(walang laman)*          | OpenRouter API key |
| `OPENAI_KEY`     | *(walang laman)*          | OpenAI API key |
| `ANTHROPIC_KEY`  | *(walang laman)*          | Anthropic API key |
| `GOOGLE_KEY`     | *(walang laman)*          | Google Gemini API key |
| `DEEPSEEK_KEY`   | *(walang laman)*          | DeepSeek API key |
| `GROQ_KEY`       | *(walang laman)*          | Groq API key |
| `MISTRAL_KEY`    | *(walang laman)*          | Mistral API key |
| `OLLAMA_URL`     | *(walang laman)*          | Ollama base URL (hal. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(walang laman)*          | xAI API key |

I-configure lamang ang mga provider na gagamitin mo. Ang mga model ID ay may namespace (`openrouter/…`, `openai/…`, `ollama/…`, atbp.).

**Pakita ng gastos:** Ibinabalik ng OpenRouter ang eksaktong gastos kapag naaangkop. Ang iba pang provider ay gumagamit ng **tinatayang** gastos mula sa publikong presyo ng modelo ng OpenRouter kapag may OpenRouter key; kung wala ito, maaaring ipakita ng hindi OpenRouter na gastos bilang `0`. Ang mga pagtantya ay hindi mga resibo.

<br/>

**Data at pag-iimbak:** Para sa Docker, i-mount ang isang volume sa `/app/data` upang mapanatili ang `config.json` at ang SQLite database sa bawat restart ng container. Kung walang volume, ang lahat ng data ay mawawala kapag tumigil ang container.

**Para sa mga developer:** Matapos i-pull ang mga pagbabago na pinalitan ang lumang solong-key na config, i-reset o i-merge ang `data/config.json` gamit ang bagong default na hugis mula sa `src/config-defaults/config_default.json` kung ang iyong lokal na file ay gumagamit pa rin ng mga field na tinanggal (`api_key`, `api_url`, mga opsyon ng proxy).

<br/>

**Web authentication:**

- Default admin: `admin` / `transrewrt26`.
- Pamahalaan ang mga user sa **Settings → Users**.
- I-reset ang password: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (mula sa source: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **BABALA**<br/>
> Agad na palitan ang default na admin password sa anumang host na may access sa network.

<br/>

Ang mga pangunahing setting (font, mga modelo, mga wika, atbp.) ay magagamit sa Settings ng application.

<br/><br/>

<a id="development-and-architecture"></a>
## Pag-unlad at arkitektura

- **Pag-unlad:** Setup, build, test, at deploy (Electron, Web, Docker) - tingnan ang **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arkitektura at pangkalahatang tingin sa sistema:** Estruktura ng folder, tech stack, mga desisyong pang-disenyo - tingnan ang **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Mga Paglabas at mga tag

- Ang **mga Git tag** na `v`* (tulad ng `v1.0.10`) ay nagpapagana sa [workshop para sa paglalabas (release workflow)](.github/workflows/release.yml). Ang mga **GitHub Release** ay may kasamang Windows installer (`.exe`) at Linux AppImage.
- Ang **mga Docker image** ay nailalabas sa `ghcr.io/wsj-br/transrewrt`. Ang mga tag ng imahe ay tugma sa bersyon ng Git (halimbawa, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) kasama ang `latest`. Multi-arch: `linux/amd64` at `linux/arm64` (tulad ng Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Pagtulong

1. Kopyahin (fork) ang repository.
2. Lumikha ng feature branch: `git checkout -b feature/my-feature`
3. I-commit ang iyong mga pagbabago na may malinaw na mensahe.
4. I-push at buksan ang Pull Request laban sa `main`.

Paki-suma sa umiiral na code style at subukan ang iyong mga pagbabago sa parehong Electron at web mod bago ipasa. Tingnan ang [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para sa mga tagubilin sa pagbuo at pagsusulit.

<br/>

**Pag-ulat ng mga isyu:** Buksan ang isyu sa [GitHub](https://github.com/wsj-br/transrewrt/issues). Isama ang iyong platform (Windows / Linux / Docker) at bersyon ng app (ipinapakita sa About dialog o sa pahina ng mga Release).

<br/><br/>

<a id="disclaimer"></a>
## Paalala

Ang mga pangalan at icon ng produkto ay pag-aari ng mga may-akda nito at ginagamit lamang para sa layuning pagkakakilanlan. Ang software na ito ay walang kaugnayan at hindi sinusuportahan ng anumang mga brand na binanggit.

<br/><br/>

<a id="license"></a>
## Lisensya

Copyright © 2026 Waldemar Scudeller Jr.

[Apache Lisensya 2.0](LICENSE)