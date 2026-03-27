---
translated_at: "2026-03-27T23:15:18.407Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
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

AI-drivet textverktyg: översätt mellan språk, omskriv i olika stilar och omvandla med anpassade prompter – med flera AI-leverantörer (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI och lokal Ollama). Kör som skrivbordsapp (Electron) eller som självvärd webbapplikation (Docker).

- **Översätt** — mellan dussintals språk, med automatisk källdetektering
- **Omskriver** — korrigerar grammatik, förbättrar klarhet, formellt/informellt, förkortar, expanderar, tekniskt
- **Omvandla** — anpassade AI-prompter; skapa och hantera prompter, valfritt målspråk per prompt
- **Historik** — fullständig körningshistorik med in-/ut-data, filtrering och export
- **Modeller och kostnader** — välj modeller från alla konfigurerade leverantörer; kostnads- och användningsöversikter med loggar, sammanfattningar per modell/åtgärd/dag
- **UI** — stöd för flera språk (30+ språk, stöd för RTL), teckensnitt, ...
- **Webbläge** — stöd för flera användare med administratörsroller
- **Skrivbord** — Electron-app för Windows och Linux
- **Självvärd** — Docker-avbild för amd64 & arm64 (klar för Raspberry Pi)

När du har installerat programmet, se **[Användarhandboken](USER-GUIDE.sv.md)** för en genomgång av alla funktioner.

<small>**Läs på andra språk:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Obs! Översättning av gränssnitt och dokumentation:** Alla gränssnittsspråk utom det originala engelska (UK) 
> har översatts med hjälp av AI-modeller; formuleringarna kan vara otydliga eller innehålla fel.

</small>

<br/>

<a id="screenshots"></a>

## Skärmdumpar

**Språkval**

![Språkval](../images/screenshots/sv/language-selector.png)

**Översätt**

![Översätt](../images/screenshots/sv/translate.png)

**Transformera – frågeredigerare**

![Transformera – frågeredigerare](../images/screenshots/sv/transform-prompt-edit.png)

**Instrumentpanel**

![Kostnadsinstrumentpanel](../images/screenshots/sv/dashboard-summary.png)

**Historik**

![Historik](../images/screenshots/sv/history.png)

**Inställningar – modellval**

![Inställningar – modellval](../images/screenshots/sv/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Innehållsförteckning

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Snabbstart](#quick-start)
- [Installation](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Hämta en OpenRouter API-nyckel](#getting-an-openrouter-api-key)
- [Konfiguration och miljö](#configuration-and-environment)
- [Utveckling och arkitektur](#development-and-architecture)
- [Versioner och taggar](#releases-and-tags)
- [Bidra](#contributing)
- [Ansvarsfriskrivning](#disclaimer)
- [Licens](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Komma igång snabbt

**Docker (rekommenderas för lokal värdtjänst)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Ersätt `sk-or-your-key` med din [OpenRouter API-nyckel](https://openrouter.ai/keys) (eller ställ in nycklar för andra leverantörer; se [Konfiguration](#configuration-and-environment)). Öppna [http://localhost:5000](http://localhost:5000) och ändra standardadministratörslösenordet innan du exponerar tjänsten.

<br/>

> ℹ️ **OBS**<br/>
> I Docker så ställs LLM-autentiseringsuppgifter in via miljövariabler som t.ex. `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (inte i webbgränssnittet). I skrivbordsversionen (Electron) konfigurerar du nycklar i **Inställningar → API**.

<br/>

**Windows**

Ladda ner den senaste `Transrewrt Setup x.y.z.exe` från [Releases](https://github.com/wsj-br/transrewrt/releases), kör installationsprogrammet och starta sedan från Start-menyn eller genvägen på skrivbordet. Ange dina API-nycklar i **Inställningar → API**. Du måste konfigurera minst en leverantör; OpenRouter är vanligt för kostnadsfria modeller.

<br/>

**Linux**

Ladda ner `.AppImage`-filen för din processor från [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` för vanliga datorer, `arm64` för många ARM-enheter, inklusive Raspberry Pi 4+), därefter:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Ange dina API-nycklar i **Inställningar → API**. Du måste konfigurera minst en leverantör; OpenRouter är vanligt för kostnadsfria modeller.

På Debian/Ubuntu kan du behöva installera ytterligare beroenden först:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Se [Installation → Linux](#linux-electron) för detaljer.

<br/>

> ℹ️ **OBS**<br/>
> macOS stöds inte för närvarande. Transrewrt finns tillgängligt för Windows, Linux och Docker.

<br/>

När appen körs, se **[Användarhandbok](USER-GUIDE.sv.md)** för att lära dig hur du översätter, skriver om och omvandlar text, hanterar prompts och konfigurerar modeller.

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

- Ladda ner rätt `.AppImage`-fil (`x64` eller `arm64`) från [Releases](https://github.com/wsj-br/transrewrt/releases).
- Kör: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` på x86_64/amd64, eller använd filnamnet `...-arm64.AppImage` på ARM64.
- Ytterligare beroenden (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Se [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) för mer information.

<br/>

<a id="docker"></a>
### Docker

- Hämta: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Ange minst en providernyckel via miljövariabler (till exempel `OPENROUTER_API_KEY` för OpenRouter). Skicka variabler med `-e` eller via `docker compose` / `.env` så att hemligheter inte blir inbakade i avbildningen.
- Providernycklar anges **inte** i webbgränssnittet; servern läser dem från miljön.

Exempel – namngiven volym för persistent lagring (OpenRouter-nyckel via env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

eller om du föredrar att använda Docker Compose:

# ladda ner compose-filen
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# redigera filen för att lägga till API-nycklarna
vi transrewrt.yml
# starta containern
docker compose -f transrewrt.yml up -d
```

<br/>

| Alternativ | Beskrivning                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Port     | `5000` (mappa med `-p 5000:5000`)                                                                                                       |
| Volume   | Montera `/app/data` för konfigurations- och databaspersistens                                                                          |
| Miljövariabler | `PORT`, `CONFIG_PATH`, samt LLM-nycklar (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - se [Konfiguration](#configuration-and-environment) |

För att bygga och köra från källkod: `docker compose up --build -d` eller `pnpm docker:up` - se [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Få en OpenRouter API-nyckel

Transrewrt stöder flera AI-leverantörer. [OpenRouter](https://openrouter.ai) är ett populärt val eftersom det samlar många modeller under en enda nyckel och erbjuder gratismodeller.

1. Skapa ett konto eller logga in på [openrouter.ai](https://openrouter.ai).
2. Öppna sidan [Keys](https://openrouter.ai/keys) och skapa en ny nyckel (ge den ett namn och ange eventuellt en kreditgräns). Du kan använda gratismodeller utan att lägga till kredit.
3. **Skrivbord (Electron):** klistra in nycklar i **Inställningar → API**. **Docker:** ange miljövariabler som t.ex. `OPENROUTER_API_KEY` (se [Snabbstart](#quick-start)).

Använd inte OpenRouters modell **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) för översättning, omskrivning eller omvandling: den returnerar JSON-begärandenyttolaster, inte den färdiga texten för dessa uppgifter. Se [Inställningar → Modeller](USER-GUIDE.sv.md#models) i Användarhandboken.

Du kan också använda andra leverantörer (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) eller köra modeller lokalt med [Ollama](https://ollama.com). Se [Konfiguration](#configuration-and-environment) för en fullständig lista över tillgängliga leverantörer och miljövariabler.

> ⚠️ **VARNING**<br/>
> Om du använder Ollama från en annan enhet, container eller tjänst, kom ihåg att konfigurera Ollama så att externa anslutningar tillåts (inte endast localhost).

Mer information om begränsningar, BYOK och annat finns i [OpenRouter-authentisering](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Konfiguration och miljö

**Placering av konfigurationsfiler**

| Distribution | Konfigurationsplats |
| ------------ | ------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Webb / Docker | `/app/data/config.json` (använd en volym för beständighet) |

<br/>

**Miljövariabler** (endast för webb/Docker; Electron använder lokal konfigurationsfil)

| Variabel | Standard | Beskrivning |
| ------ | -------- | ----------- |
| `PORT` | `5000` | Serverns lyssningsport |
| `CONFIG_PATH` | `/app/data/config.json` | Sökväg till konfigurationsfilen |
| `OPENROUTER_API_KEY` | *(tom)* | OpenRouter API-nyckel |
| `OPENAI_API_KEY` | *(tom)* | OpenAI API-nyckel |
| `CEREBRAS_API_KEY` | *(tom)* | Cerebras API-nyckel |
| `ANTHROPIC_API_KEY` | *(tom)* | Anthropic API-nyckel |
| `GOOGLE_API_KEY` | *(tom)* | Google Gemini API-nyckel |
| `DEEPSEEK_API_KEY` | *(tom)* | DeepSeek API-nyckel |
| `GROQ_API_KEY` | *(tom)* | Groq API-nyckel |
| `MISTRAL_API_KEY` | *(tom)* | Mistral API-nyckel |
| `OLLAMA_URL` | *(tom)* | Ollama bas-URL (t.ex. `http://host.docker.internal:11434`) |
| `XAI_API_KEY` | *(tom)* | xAI API-nyckel |

Konfigurera endast de leverantörer du använder. Modell-ID:n är namnrymdsmärkta (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, osv.).

**Kostnadsvisning:** OpenRouter returnerar exakt fakturerad kostnad vid tillämplighet. Andra leverantörer använder **uppskattad** kostnad från OpenRouters publika modellprissättning om en OpenRouter-nyckel är tillgänglig; annars kan kostnaden för icke-OpenRouter visas som `0`. Uppskattningar är inte fakturor.

<br/>

**Data och beständighet:** För Docker, montera en volym på `/app/data` så att `config.json` och SQLite-databasen sparas vid omstart av containern. Utan volym förloras all data när containern stoppas.

**Utvecklare:** Efter att ha hämtat ändringar som ersätter den gamla enskilda nyckelkonfigurationen, återställ eller slå samman `data/config.json` med den nya standardformen från `src/config-defaults/config_default.json` om din lokala fil fortfarande använder borttagna fält (`api_key`, `api_url`, proxyinställningar).

<br/>

**Webbautentisering:**

- Standardadmin: `admin` / `transrewrt26`.
- Hantera användare i **Inställningar → Användare**.
- Återställ lösenord: `docker exec <container> reset-web-password '<användarnamn>' '<nytt-lösenord>'`
  (från källkod: `pnpm run reset-web-password -- <användarnamn> <nytt-lösenord>`)

<br/>

> ⚠️ **VARNING**<br/>
> Byt det standardiserade administratörslösenordet omedelbart på varje värd som är tillgänglig från nätverket.

<br/>

Nyckelinställningar (typsnitt, modeller, språk, osv.) är tillgängliga i programmets Inställningar.

<br/><br/>

<a id="development-and-architecture"></a>

## Utveckling och arkitektur

- **Utveckling:** Installation, bygge, test och distribution (Electron, Webb, Docker) – se **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arkitektur och systemöversikt:** Mappstruktur, teknikstack, designbeslut – se **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Versioner och taggar

- **Git-taggar** `v`* (t.ex. `v1.0.10`) utlöser [utgivningsarbetsflödet](.github/workflows/release.yml). **GitHub-releases** bifogar Windows-installationsprogram (`.exe`) och Linux AppImages (**x64** och **arm64**).
- **Docker-avbildningar** publiceras till `ghcr.io/wsj-br/transrewrt`. Avbildningstaggar matchar Git-versionen (t.ex. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) samt `latest`. Flera arkitekturer: `linux/amd64` och `linux/arm64` (t.ex. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Bidra

1. Flaska databasen.
2. Skapa en funktionsgren: `git checkout -b feature/min-funktion`
3. Genomför dina ändringar med ett tydligt meddelande.
4. Skicka och öppna en pull-begäran mot `main`.

Följ gärna den befintliga kodstilen och testa dina ändringar i både Electron- och webbläge innan du skickar in dem. Se [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) för instruktioner om bygge och testning.

<br/>

**Rapportera problem:** Öppna en issue på [GitHub](https://github.com/wsj-br/transrewrt/issues). Inkludera din plattform (Windows / Linux / Docker) och appversion (visas i dialogrutan Om eller på Releases-sidan).

<br/><br/>

<a id="disclaimer"></a>

## Ansvarsfriskrivning

Produktnamn och ikoner tillhör sina respektive ägare och används enbart för identifikationsändamål. Denna mjukvara är inte ansluten till eller godkänd av något av de nämnda varumärkena.

<br/><br/>

<a id="license"></a>
## Licens

Upphovsrätt © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)