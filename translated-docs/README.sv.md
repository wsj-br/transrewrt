---
translated_at: "2026-03-25T22:26:36.767Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt-logotyp" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licens: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plattform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI-drivet textverktyg: översätt mellan språk, omskriv i olika stilar och transformera med anpassade prompter — med flera AI-leverantörer (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI och lokal Ollama). Körs som skrivbordsapp (Electron) eller självvärd webbapp (Docker).

- **Översätt** — mellan dussintals språk, med automatisk källspråksidentifiering
- **Omskriv** — rätta till grammatik, förbättra tydligheten, formell/informell ton, förkorta, utöka, teknisk text
- **Transformera** — anpassade AI-prompter; skapa och hantera prompter, valfritt målspråk per prompt
- **Historik** — fullständig körningshistorik med indata/utdata, filtrering och export
- **Modeller och kostnad** — välj modeller från alla konfigurerade leverantörer; kostnads- och användningsöversikter med loggar, sammanfattningar per modell/operation/dag
- **Gränssnitt** — flerspråkigt gränssnitt (30+ språk, stöd för RTL), teckensnitt, ...
- **Webbläge** — stöd för flera användare med administratörsroller
- **Skrivbord** — Electron-app för Windows och Linux
- **Självvärd** — Docker-avbildning för amd64 och arm64 (redo för Raspberry Pi)

När du har installerat det, kolla **[Användarhandboken](USER-GUIDE.sv.md)** för en genomgång av alla funktioner.

<small>**Läs på andra språk:** [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Obs om översättningar av gränssnitt och dokumentation:** Alla gränssnittsspråk utom den ursprungliga brittiska engelskan 
> har översatts med hjälp av AI-modeller; formuleringarna kan vara otydliga eller innehålla fel.

</small>

<br/>

<a id="screenshots"></a>
## Skärmdumpar

**Språkval**

![Språkval](../images/screenshots/sv/language-selector.png)

**Översättning**

![Översätt](../images/screenshots/sv/translate.png)

**Transformera – promptredigerare**

![Transformera – promptredigerare](../images/screenshots/sv/transform-prompt-edit.png)

**Översiktspanel**

![Kostnadsöversiktspanel](../images/screenshots/sv/dashboard-summary.png)

**Historik**

![Historik](../images/screenshots/sv/history.png)

**Inställningar – modellval**

![Inställningar – modellval](../images/screenshots/sv/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Innehållsförteckning

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Snabbstart](#snabbstart)
- [Installation](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Hämta en OpenRouter API-nyckel](#h%C3%A4mta-en-openrouter-api-nyckel)
- [Konfiguration och miljö](#konfiguration-och-milj%C3%B6)
- [Utveckling och arkitektur](#utveckling-och-arkitektur)
- [Versioner och taggar](#versioner-och-taggar)
- [Bidra](#bidra)
- [Ansvarsfriskrivning](#ansvarsfriskrivning)
- [Licens](#licens)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="snabbstart"></a>
## Snabbstart

**Docker (rekommenderas för lokal värdtjänst)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Ersätt `sk-or-your-key` med din [OpenRouter API-nyckel](https://openrouter.ai/keys) (eller ställ in nycklar för andra leverantörer; se [Konfiguration](#konfiguration-och-miljö)). Öppna [http://localhost:5000](http://localhost:5000) och ändra standardadminlösenordet innan du exponerar tjänsten.

<br/>

> ℹ️ **OBS**<br/>
> I Docker anges LLM-autentiseringsuppgifter med miljövariabler som `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (inte i webbgränssnittet). På skrivbordet (Electron) konfigurerar du nycklarna i **Inställningar → API**.

<br/>

**Windows**

Ladda ner den senaste `Transrewrt Setup x.y.z.exe` från [Releases](https://github.com/wsj-br/transrewrt/releases), kör installationsprogrammet och starta sedan från Start-menyn eller en genväg på skrivbordet. Ange dina API-nycklar i **Inställningar → API**. Du måste minst konfigurera en leverantör – OpenRouter är vanlig för kostnadsfria modeller.

<br/>

**Linux**

Ladda ner `.AppImage`-filen för din processor från [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` för vanliga datorer, `arm64` för många ARM-enheter, inklusive Raspberry Pi 4+), och kör sedan:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Ange dina API-nycklar i **Inställningar → API**. Du måste minst konfigurera en leverantör – OpenRouter är vanlig för kostnadsfria modeller.

På Debian/Ubuntu kan du behöva installera extra beroenden först:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Se [Installation → Linux](#linux-electron) för detaljer.

<br/>

> ℹ️ **OBS**<br/>
> macOS stöds för närvarande inte. Transrewrt finns tillgängligt för Windows, Linux och Docker.

<br/>

När appen körs, se **[Användarhandbok](USER-GUIDE.sv.md)** för att lära dig hur du översätter, omskriver och omvandlar text, hanterar prompter och konfigurerar modeller.

<br/><br/>

<a id="installation"></a>
## Installation

<a id="windows-electron"></a>
### Windows (Electron)

- Ladda ner den senaste installationsfilen från [Releases](https://github.com/wsj-br/transrewrt/releases).
- Kör `.exe`-filen och följ installationsguiden.
- Första körningen: starta appen från Start-menyn eller en genväg på skrivbordet.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Ladda ner den matchande `.AppImage`-filen (`x64` eller `arm64`) från [Releases](https://github.com/wsj-br/transrewrt/releases).
- Kör: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` på x86_64/amd64, eller använd filnamnet med `...-arm64.AppImage` på ARM64.
- Extra beroenden (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Se [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) för mer information.

<br/>

<a id="docker"></a>
### Docker

- Hämta: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Ange minst en leverantörsnyckel via miljö (t.ex. `OPENROUTER_KEY` för OpenRouter). Skicka variablerna med `-e` eller med `docker compose` / `.env` så att hemligheter inte inkorporeras i avbilden.
- Leverantörsnycklar **anges inte** i webbgränssnittet; servern läser dem från miljön.

Exempel – namngiven volym för beständighet (OpenRouter-nyckel via miljö):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Alternativ | Beskrivning                                                                                                |
| -------- | ---------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (mappa med `-p 5000:5000`)                                                                           |
| Volym    | Montera `/app/data` för konfigurations- och databasbeständighet                                             |
| Miljövariabler | `PORT`, `CONFIG_PATH`, samt LLM-nycklar (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - se [Konfiguration](#konfiguration-och-miljö) |

För att bygga och köra från källkod: `docker compose up --build -d` eller `pnpm docker:up` - se [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Skaffa en OpenRouter API-nyckel

Transrewrt stöder flera AI-leverantörer. [OpenRouter](https://openrouter.ai) är ett populärt val eftersom det samlar många modeller under en och samma nyckel och erbjuder kostnadsfria modeller.

1. Skapa ett konto eller logga in på [openrouter.ai](https://openrouter.ai).
2. Öppna sidan [Keys](https://openrouter.ai/keys) och skapa en ny nyckel (ge den ett namn och ange eventuellt en kreditgräns). Du kan använda de kostnadsfria modellerna utan att lägga till kredit.
3. **Skrivbord (Electron):** klistra in nycklar under **Inställningar → API**. **Docker:** ange miljövariabler som t.ex. `OPENROUTER_KEY` (se [Snabbstart](#quick-start)).

Använd inte OpenRouters modell **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) för översättning, omskrivning eller omvandling: den returnerar JSON-begäranden, inte den färdiga texten för dessa uppgifter. Se [Inställningar → Modeller](USER-GUIDE.sv.md#models) i användarhandboken.

Du kan också använda andra leverantörer (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) eller köra modeller lokalt med [Ollama](https://ollama.com). Se [Konfiguration](#configuration-and-environment) för den fullständiga listan över supportade leverantörer och miljövariabler.

> ⚠️ **VARNING**<br/>
> Om du använder Ollama från en annan enhet, container eller tjänst, kom ihåg att konfigurera Ollama så att externa anslutningar tillåts (inte endast localhost).

För begränsningar, BYOK och mer, se [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguration och miljö

**Konfigurationsfilens plats**

| Distribution         | Konfigurationsplats                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Webb / Docker       | `/app/data/config.json` (använd en volym för att spara data) |

<br/>

**Miljövariabler** (endast webb/Docker; Electron använder lokal konfigurationsfil)

| Variabel         | Standard                 | Beskrivning |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Serverns lyssningsport |
| `CONFIG_PATH`    | `/app/data/config.json` | Sökväg till konfigurationsfil |
| `OPENROUTER_KEY` | *(tom)*                 | OpenRouter API-nyckel |
| `OPENAI_KEY`     | *(tom)*                 | OpenAI API-nyckel |
| `CEREBRAS_KEY`   | *(tom)*                 | Cerebras API-nyckel |
| `ANTHROPIC_KEY`  | *(tom)*                 | Anthropic API-nyckel |
| `GOOGLE_KEY`     | *(tom)*                 | Google Gemini API-nyckel |
| `DEEPSEEK_KEY`   | *(tom)*                 | DeepSeek API-nyckel |
| `GROQ_KEY`       | *(tom)*                 | Groq API-nyckel |
| `MISTRAL_KEY`    | *(tom)*                 | Mistral API-nyckel |
| `OLLAMA_URL`     | *(tom)*                 | Ollama bas-URL (t.ex. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(tom)*                 | xAI API-nyckel |

Konfigurera endast de leverantörer du använder. Modell-ID:n är namngivna per leverantör (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Kostnadsvisning:** OpenRouter returnerar exakt fakturerad kostnad när det är tillämpligt. Andra leverantörer använder **uppskattad** kostnad från OpenRouters publika prissättning när en OpenRouter-nyckel är tillgänglig; utan den kan kostnader för icke-OpenRouter-tjänster visas som `0`. Uppskattningar är inte fakturor.

<br/>

**Data och beständighet:** För Docker, montera en volym vid `/app/data` så att `config.json` och SQLite-databasen bevaras även efter omstart av containern. Utan volym förloras all data när containern stoppas.

**Utvecklare:** Efter att ha hämtat ändringar som ersätter den gamla enkelnyckel-konfigurationen, återställ eller slå samman `data/config.json` med den nya standardformen från `src/config-defaults/config_default.json` om din lokala fil fortfarande använder borttagna fält (`api_key`, `api_url`, proxyinställningar).

<br/>

**Webbautentisering:**

- Standardadmin: `admin` / `transrewrt26`.
- Hantera användare under **Inställningar → Användare**.
- Återställ lösenord: `docker exec <container> reset-web-password '<användarnamn>' '<nytt-lösenord>'`
  (från källkod: `pnpm run reset-web-password -- <användarnamn> <nytt-lösenord>`)

<br/>

> ⚠️ **VARNING**<br/>
> Ändra standardlösenordet för admin omedelbart på alla värdar med nätverksåtkomst.

<br/>

Viktiga inställningar (typsnitt, modeller, språk, etc.) finns tillgängliga i programinställningarna.

<br/><br/>

<a id="development-and-architecture"></a>

## Utveckling och arkitektur

- **Utveckling:** Installation, bygge, test och distribution (Electron, Webb, Docker) – se **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arkitektur och systemöversikt:** Mappstruktur, teknikstack, designbeslut – se **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Versioner och taggar

- **Git-taggar** `v`* (t.ex. `v1.0.10`) utlöser [release-arbetsflödet](.github/workflows/release.yml). **GitHub Releases** bifogar Windows-installationsprogrammet (`.exe`) och Linux AppImages (**x64** och **arm64**).
- **Docker-avbildningar** publiceras till `ghcr.io/wsj-br/transrewrt`. Avbildningstaggar matchar Git-versionen (t.ex. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) samt `latest`. Flera arkitekturer: `linux/amd64` och `linux/arm64` (t.ex. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Bidra

1. Dubbla (forka) databasen.
2. Skapa en funktionsgren: `git checkout -b feature/min-funktion`
3. Genomföra ändringar med ett tydligt meddelande.
4. Pusha och skapa en Pull Request mot `main`.

Följ gärna den befintliga kodstilen och testa ändringarna i både Electron- och webblägen innan du skickar in dem. Se [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) för instruktioner om bygge och testning.

<br/>

**Rapportera problem:** Öppna ett ärende på [GitHub](https://github.com/wsj-br/transrewrt/issues). Ange din plattform (Windows / Linux / Docker) och programversion (visas i "Om"-dialogen eller på Releases-sidan).

<br/><br/>

<a id="disclaimer"></a>
## Ansvarsfriskrivning

Produktnamn och ikoner tillhör sina respektive ägare och används endast för identifiering. Denna mjukvara är inte ansluten till eller godkänd av något av de nämnda varumärkena.

<br/><br/>

<a id="license"></a>
## Licens

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)