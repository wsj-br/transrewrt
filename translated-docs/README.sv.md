---
translation_last_updated: '2026-03-29T20:53:47.063Z'
source_file_mtime: '2026-03-29T01:54:18.655Z'
source_file_hash: 27ed6c4cec02f5e6
translation_language: sv
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI-drivet textverktyg: översätt mellan språk, omskriv i olika stilar och omvandla med anpassade frågor – med flera AI-leverantörer (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI och lokal Ollama). Kör som skrivbordsapp (Electron) eller som självvärdd webbapp (Docker).

- **Översätt** — mellan dussintals språk, med automatisk källspråksidentifiering
- **Omskriv** — korrigerar grammatik, förbättrar tydlighet, formellt/informellt, kortast, utöka, tekniskt
- **Omvandla** — anpassade AI-frågor; skapa och hantera frågor, valfritt målspråk per fråga
- **Historik** — fullständig körningshistorik med inmatning/utmatning, filtrering och export
- **Modeller & kostnad** — välj modeller från alla konfigurerade leverantörer; kostnads- och användningsöversikter med loggar, sammanfattningar per modell/operation/dag
- **Användargränssnitt** — flerspråkigt gränssnitt (30+ språk, RTL-stöd), teckensnitt, ...
- **Webbläge** — stöd för flera användare med administratörsroller
- **Skrivbord** — Electron-app för Windows och Linux
- **Självvärdd** — Docker-avbildning för amd64 & arm64 (klar för Raspberry Pi)

När du har installerat programmet, se **[Användarhandbok](USER-GUIDE.sv.md)** för en fullständig genomgång av alla funktioner.

<small>**Läs på andra språk:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Obs om översättningar av användargränssnitt och dokumentation:** Alla gränssnittsspråk utom det ursprungliga engelska (UK)
> har översatts med hjälp av AI-modeller; formuleringarna kan vara otydliga eller innehålla fel.

</small>

<br/>

<a id="screenshots"></a>
## Skärmdumpar

**Språkval**

![Language selector](../images/screenshots/sv/language-selector.png)

**Översätt**

![Translate](../images/screenshots/sv/translate.png)

**Omvandla – frågeredigerare**

![Transform - prompt editor](../images/screenshots/sv/transform-prompt-edit.png)

**Översiktspanel**

![Dashboard summary — usage](../images/screenshots/sv/dashboard-summary.png)

**Historik**

![History](../images/screenshots/sv/history.png)

**Inställningar – modellval**

![Settings - model selection](../images/screenshots/sv/settings-models.png)

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
  - [Konfigurera tidszon](#configuring-the-timezone)
- [Hämta en OpenRouter API-nyckel](#getting-an-openrouter-api-key)
- [Konfiguration och miljö](#configuration-and-environment)
- [Utveckling och arkitektur](#development-and-architecture)
- [Rapportera problem](#reporting-issues)
- [Ansvarsfriskrivning](#disclaimer)
- [Licens](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Snabbstart

**Docker (rekommenderas för självvärdbaserad drift)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Ersätt `sk-or-your-key` med din [OpenRouter API-nyckel](https://openrouter.ai/keys) (eller ange nycklar för andra leverantörer; se [Konfiguration](#configuration-and-environment)). Öppna [http://localhost:5000](http://localhost:5000) och ändra standardlösenordet för administratör innan du exponerar tjänsten.

<br/>

> ℹ️ **OBS**<br/>
> I Docker anges LLM-credentials med miljövariabler som t.ex. `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (inte i webbgränssnittet). I skrivbordsversionen (Electron) konfigurerar du nycklar i **Inställningar → API**.

<br/>

**Windows**

Ladda ner den senaste `Transrewrt Setup x.y.z.exe` från [Releases](https://github.com/wsj-br/transrewrt/releases), kör installationsprogrammet och starta sedan via Start-menyn eller genvägen på skrivbordet. Ange dina API-nycklar i **Inställningar → API**. Du måste konfigurera minst en leverantör; OpenRouter är vanligt för gratis modeller.

<br/>

**Linux**

Ladda ner `.AppImage`-filen för din processor från [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` för vanliga datorer, `arm64` för många ARM-enheter, inklusive Raspberry Pi 4+), och gör sedan följande:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Ange dina API-nycklar i **Inställningar → API**. Du måste konfigurera minst en leverantör; OpenRouter är vanligt för gratis modeller.

I Debian/Ubuntu kan du behöva installera extra beroenden först:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Se [Installation → Linux](#linux-electron) för detaljer.

<br/>

> ℹ️ **OBS**<br/>
> macOS stöds för närvarande inte. Transrewrt finns tillgängligt för Windows, Linux och Docker.

<br/>

När appen körs, se **[Användarhandbok](USER-GUIDE.sv.md)** för att lära dig hur du översätter, omskriver och omvandlar text, hanterar prompts och konfigurerar modeller.

<br/><br/>

<a id="installation"></a>
## Installation

<a id="windows-electron"></a>
### Windows (Electron)

- Ladda ner den senaste installationsfilen från [Releases](https://github.com/wsj-br/transrewrt/releases).
- Kör `.exe`-filen och följ installationsprogrammet.
- Första körningen: starta appen från Start-menyn eller genvägen på skrivbordet.

<br/>

> ℹ️ **OBS**<br/>
> Windows kan visa en av följande säkerhetsvarningar (normalt för osignerade/oberoende appar):
>   - **Anvärkontroll (UAC)**: "Vill du tillåta att det här programmet från en okänd utgivare gör ändringar i din dator?" → Klicka på **Ja**.
>   - **Microsoft Defender SmartScreen**: "Windows skyddade din dator" → Klicka på **Mer info** → **Kör ändå**.
>
> Detta sker eftersom appen inte är signerad av Microsoft eller en större utgivare – den är säker om den laddats ner från våra officiella GitHub-releases
>  (verifiera SHA256-kontrollsumman nedan).

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Ladda ner motsvarande `.AppImage` (`x64` eller `arm64`) från [Releases](https://github.com/wsj-br/transrewrt/releases).
- Kör: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` på x86_64/amd64, eller använd filnamnet `...-arm64.AppImage` på ARM64.
- Ytterligare beroenden (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Se [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) för mer information.

<br/>

<a id="docker"></a>
### Docker

- Hämta: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Ange minst en leverantörsnyckel via miljövariabel (till exempel `OPENROUTER_API_KEY` för OpenRouter). Skicka variabler med `-e` eller via `docker compose` / `.env` så att hemligheter inte läggs in i avbildningen.
- Leverantörsnycklar **anges inte** i webbgränssnittet; servern läser dem från miljön.

Exempel – namngiven volym för beständighet (OpenRouter-nyckel via env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

eller om du föredrar att använda Docker Compose, använd:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Se [Configuration](#configuration-and-environment) för alla miljövariabler, såsom `PORT`, `CONFIG_PATH`, `TZ` och LLM-nycklar (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>
### Konfigurera tidszon

Applikationens användargränssnitt följer webbläsarens **lokalinställningar och tidszon**. För **serversidan** (loggning och liknande) använder containern miljövariabeln `TZ`. Standard är `TZ=Europe/London`.

För att använda en annan tidszon, ange `TZ` i din Compose-fil, till exempel:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Eller skicka den när containern körs (Docker):

```bash
--env TZ=America/Sao_Paulo
```

På många Linux-system kan du kopiera systemets tidszonsnamn med:

```bash
echo TZ=\"$(</etc/timezone)\"
```

En lista över giltiga tidszonsnamn finns i [tz-databasen](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Få en OpenRouter API-nyckel

Transrewrt stöder flera AI-leverantörer. [OpenRouter](https://openrouter.ai) är ett populärt val eftersom det samlar många modeller under en nyckel och erbjuder gratis modeller.

1. Skapa ett konto eller logga in på [openrouter.ai](https://openrouter.ai).
2. Öppna sidan [Keys](https://openrouter.ai/keys) och skapa en ny nyckel (ge den ett namn och ange eventuellt en kreditgräns). Du kan använda gratis modeller utan att lägga till kredit.
3. **Skrivbord (Electron):** klistra in nycklar i **Inställningar → API**. **Docker:** ange miljövariabler som `OPENROUTER_API_KEY` (se [Snabbstart](#quick-start)).

Använd inte OpenRouters **Body Builder**-modell ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) för översätt, omskriv eller omvandla: den returnerar JSON-begärandenyttolaster, inte den färdiga texten för dessa uppgifter. Se [Inställningar → Modeller](USER-GUIDE.sv.md#models) i användarhandboken.

Du kan också använda andra leverantörer (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) eller köra modeller lokalt med [Ollama](https://ollama.com). Se [Configuration](#configuration-and-environment) för en fullständig lista över stödda leverantörer och miljövariabler.

> ⚠️ **VARNING**<br/>
> Om du använder Ollama från en annan enhet, container eller tjänst, kom ihåg att konfigurera Ollama att tillåta externa anslutningar (inte endast localhost).

För begränsningar, BYOK och mer, se [OpenRouter-autentisering](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguration och miljö

**Placering av konfigurationsfiler**

| Distribution         | Konfigurationsplats                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (använd en volym för att spara) |

<br/>

**Miljövariabler** (endast webb/Docker; Electron använder den lokala konfigurationsfilen)

| Variabel         | Standard                 | Beskrivning |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Serverns lyssningsport |
| `CONFIG_PATH`    | `/app/data/config.json` | Sökväg till konfigurationsfilen |
| `TZ`             | `Europe/London`         | IANA-tidszon för serversidan (loggning, etc.); användargränssnittet följer fortfarande webbläsarens tidszon. Se [Docker → tidszon](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(tom)*               | OpenRouter API-nyckel |
| `OPENAI_API_KEY`     | *(tom)*               | OpenAI API-nyckel |
| `CEREBRAS_API_KEY`   | *(tom)*               | Cerebras API-nyckel |
| `ANTHROPIC_API_KEY`  | *(tom)*               | Anthropic API-nyckel |
| `GOOGLE_API_KEY`     | *(tom)*               | Google Gemini API-nyckel |
| `DEEPSEEK_API_KEY`   | *(tom)*               | DeepSeek API-nyckel |
| `GROQ_API_KEY`       | *(tom)*               | Groq API-nyckel |
| `MISTRAL_API_KEY`    | *(tom)*               | Mistral API-nyckel |
| `OLLAMA_URL`     | *(tom)*               | Ollama bas-URL (t.ex. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(tom)*               | xAI API-nyckel |

Konfigurera endast de leverantörer du använder. Modell-ID:n är namngivna med namnrymd (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Kostnadsvisning:** OpenRouter returnerar exakt fakturerad kostnad när det är tillämpligt. Andra leverantörer använder **uppskattad** kostnad från OpenRouters publika modellprissättning när en OpenRouter-nyckel är tillgänglig; utan den kan kostnaden för icke-OpenRouter visas som `0`. Uppskattningar är inte fakturor.

<br/>

**Data och beständighet:** För Docker, montera en volym vid `/app/data` så att `config.json` och SQLite-databasen bevaras över containeromstarter. Utan en volym förloras all data när containern stoppas.

**Utvecklare:** Efter att ha hämtat ändringar som ersätter den gamla enkelnyckelkonfigurationen, återställ eller slå ihop `data/config.json` med den nya standardstrukturen från `src/config-defaults/config_default.json` om din lokala fil fortfarande använder borttagna fält (`api_key`, `api_url`, proxyinställningar).

<br/>

**Webbautentisering:**

- Standardadministratör: `admin` / `transrewrt26`.
- Hantera användare i **Inställningar → Användare**.
- Återställ ett lösenord: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (från källkod: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **VARNING**<br/>
> Ändra standardadministratörens lösenord omedelbart på alla nätverksåtkomliga värdar.

<br/>

Nyckelinställningar (typsnitt, modeller, språk, etc.) finns tillgängliga i applikationens Inställningar.

<br/><br/>

<a id="development-and-architecture"></a>
## Utveckling och arkitektur

- **Utveckling:** Konfiguration, version, test och distribution (Electron, Webb, Docker) - se **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arkitektur och systemöversikt:** Mappstruktur, teknikstack, designbeslut - se **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Rapportera problem

Öppna en ärende på [GitHub](https://github.com/wsj-br/transrewrt/issues). Inkludera din plattform (Windows / Linux / Docker) och appversion (visas i dialogrutan Om eller på sidan Releases).

<br/><br/>

<a id="disclaimer"></a>
## Ansvarsfriskrivning

Produktnamn och ikoner tillhör sina respektive ägare och används endast för identifiering. Denna programvara är inte ansluten till eller godkänd av något av de nämnda varumärkena.

<br/><br/>

<a id="license"></a>
## Licens

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)
