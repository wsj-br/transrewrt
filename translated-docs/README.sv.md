---
translated_at: "2026-03-24T03:18:27.145Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt-logotyp" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licens: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plattform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI-drivet textverktyg: översätt mellan språk, omskriv i olika stilar och omvandla med anpassade prompter – med flera AI-leverantörer (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI och lokal Ollama). Kör som en skrivbordsapplikation (Electron) eller som en självvärd webbapplikation (Docker).

- **Översätt** – mellan dussintals språk, med automatisk källspråksidentifiering
- **Omskriv** – korrigerade grammatik, förbättrad tydlighet, formellt/obligatoriskt, förkorta, utöka, tekniskt
- **Omvandla** – anpassade AI-prompter; skapa och hantera prompter, valfritt målspråk per prompt
- **Historik** – fullständig historik över körningar med indata/utdata-text, filtrering och export
- **Modeller och kostnad** – välj modeller från valfri konfigurerad leverantör; kostnadsöversikt med SQLite-logg, summeringar per modell/åtgärd/dag
- **Användargränssnitt** – flerspråkigt gränssnitt (över 30 språk, stöd för RTL), teckensnitt, ...
- **Webbläge** – stöd för flera användare med administratörsroller; API-nycklar förblir serversidan, exponeras aldrig i webbläsaren
- **Skrivbord** – Electron-app för Windows och Linux
- **Självvärd** – Docker-avbild för amd64 och arm64 (klar för Raspberry Pi)

När du har installerat, se **[Användarhandboken](USER-GUIDE.sv.md)** för en genomgång av alla funktioner.

<small>**Läs på andra språk:** [English (UK)](README.sv.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<br/>

**Obs! Översättningar av gränssnitt och dokumentation:** Alla gränssnittsspråk utom engelska (UK) har översatts med AI-modeller; formuleringarna kan vara otydliga eller innehålla fel.

<a id="screenshots"></a>
## Skärmdumpar

**Språkval**

![Språkval](../images/screenshots/sv/language-selector.png)

**Översätt**

![Översätt](../images/screenshots/sv/translate.png)

**Omvandla – promptredigerare**

![Omvandla – promptredigerare](../images/screenshots/sv/transform-prompt-edit.png)

**Översiktspanel**

![Kostnadsöversikt](../images/screenshots/sv/dashboard-summary.png)

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
- [Utgåvor och taggar](#utg%C3%A5vor-och-taggAR)
- [Bidra](#bidra)
- [Ansvarsfriskrivning](#ansvarsfriskrivning)
- [Licens](#licens)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="snabbstart"></a>
## Snabbstart

**Docker (rekommenderas för självvärdbaserad drift)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Ersätt `sk-or-your-key` med din [OpenRouter API-nyckel](https://openrouter.ai/keys) (eller ställ in nycklar för andra leverantörer; se [Konfiguration](#konfiguration-och-milj%C3%B6)). Öppna [http://localhost:5000](http://localhost:5000) och ändra standardlösenordet för administratör innan du gör tjänsten tillgänglig utåt.

<br/>

> ℹ️ **OBS**<br/>
> I Docker, sätts LLM-credentials via miljövariabler som t.ex. `OPENROUTER_KEY`, `OPENAI_KEY`, … (inte i webbgränssnittet). På skrivbordet (Electron) konfigurerar du nycklar i **Inställningar → API**.

<br/>

**Windows**

Ladda ner den senaste `Transrewrt Setup x.y.z.exe` från [Releases](https://github.com/wsj-br/transrewrt/releases), kör installationsprogrammet och starta sedan från Start-menyn eller en genväg på skrivbordet. Ange dina API-nycklar i **Inställningar → API**. Du måste konfigurera minst en leverantör; OpenRouter är vanligt för kostnadsfria modeller.

<br/>

**Linux**

Ladda ner `.AppImage`-filen från [Releases](https://github.com/wsj-br/transrewrt/releases), och kör sedan:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Ange dina API-nycklar i **Inställningar → API**. Du måste konfigurera minst en leverantör; OpenRouter är vanligt för kostnadsfria modeller.

I Debian/Ubuntu kanske du behöver installera extra beroenden först:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Se [Installation → Linux](#linux-electron) för detaljer.

<br/>

> ℹ️ **OBS**<br/>
> macOS stöds för närvarande inte. Transrewrt finns tillgängligt för Windows, Linux och Docker.

<br/>

När appen är igång, se **[Användarhandledningen](USER-GUIDE.sv.md)** för att lära dig hur du översätter, omskriver och omformar text, hanterar prompts samt konfigurerar modeller.

<br/><br/>

<a id="installation"></a>
## Installation

<a id="windows-electron"></a>
### Windows (Electron)

- Ladda ner den senaste installationsfilen från [Releases](https://github.com/wsj-br/transrewrt/releases).
- Kör `.exe`-filen och följ installationsguiden.
- Första starten: starta appen från Start-menyn eller en genväg på skrivbordet.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Ladda ner `.AppImage`-filen från [Releases](https://github.com/wsj-br/transrewrt/releases).
- Kör: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Extra beroenden (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Se [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) för mer information.

<br/>

<a id="docker"></a>
### Docker

- Ladda ner: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Sätt minst en leverantörsnyckel via miljö (t.ex. `OPENROUTER_KEY` för OpenRouter). Skicka variabler med `-e` eller via `docker compose` / `.env` så att hemligheter inte fastnar i avbildningen.
- Leverantörsnycklar **ska inte** anges i webbgränssnittet; servern läser dem från miljön.

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

| Alternativ | Beskrivning                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (mappa med `-p 5000:5000`)                                                                              |
| Volym   | Montera `/app/data` för beständighet av konfiguration och databas                                                         |
| Miljövariabler | `PORT`, `CONFIG_PATH`, samt LLM-nycklar (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - se [Konfiguration](#konfiguration-och-milj%C3%B6) |

För att bygga och köra från källkod: `docker compose up --build -d` eller `pnpm docker:up` – se [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Hämta en OpenRouter API-nyckel

Transrewrt stöder flera AI-leverantörer. [OpenRouter](https://openrouter.ai) är ett populärt val eftersom det samlar många modeller under en och samma nyckel och erbjuder gratismodeller.

1. Skapa ett konto eller logga in på [openrouter.ai](https://openrouter.ai).
2. Öppna sidan [Keys](https://openrouter.ai/keys) och skapa en ny nyckel (ge den ett namn och ange eventuellt en kreditgräns). Du kan använda gratismodeller utan att lägga till kredit.
3. **Skrivbord (Electron):** klistra in nycklar i **Inställningar → API**. **Docker:** ange miljövariabler som t.ex. `OPENROUTER_KEY` (se [Snabbstart](#quick-start)).

Du kan också använda andra leverantörer (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) eller köra modeller lokalt med [Ollama](https://ollama.com). Se [Konfiguration](#configuration-and-environment) för en fullständig lista på stödda leverantörer och miljövariabler.

För begränsningar, BYOK och mer, se [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguration och miljö

**Placering av konfigurationsfiler**

| Distribution        | Konfigurationsplats                             |
| ------------------- | ----------------------------------------------- |
| Electron (Windows)  | `%APPDATA%\transrewrt\`                         |
| Electron (Linux)    | `~/.config/transrewrt/`                         |
| Webb / Docker       | `/app/data/config.json` (använd en volym för beständighet) |

<br/>

**Miljövariabler** (endast webb/Docker; Electron använder lokal konfigurationsfil)

| Variabel           | Som standard             | Beskrivning |
| ------------------ | ------------------------ | ----------- |
| `PORT`             | `5000`                   | Serverns lyssningsport |
| `CONFIG_PATH`      | `/app/data/config.json`  | Sökväg till konfigurationsfilen |
| `OPENROUTER_KEY`   | *(tom)*                  | OpenRouter API-nyckel |
| `OPENAI_KEY`       | *(tom)*                  | OpenAI API-nyckel |
| `ANTHROPIC_KEY`    | *(tom)*                  | Anthropic API-nyckel |
| `GOOGLE_KEY`       | *(tom)*                  | Google Gemini API-nyckel |
| `DEEPSEEK_KEY`     | *(tom)*                  | DeepSeek API-nyckel |
| `GROQ_KEY`         | *(tom)*                  | Groq API-nyckel |
| `MISTRAL_KEY`      | *(tom)*                  | Mistral API-nyckel |
| `OLLAMA_URL`       | *(tom)*                  | Ollama-bas-URL (t.ex. `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(tom)*                  | xAI API-nyckel |

Konfigurera endast de leverantörer du använder. Modell-ID:n är namnrymdsindelade (`openrouter/…`, `openai/…`, `ollama/…`, osv.).

**Kostnadsvisning:** OpenRouter returnerar exakta faktureringskostnader där det är tillämpligt. Andra leverantörer använder **uppskattade** kostnader från OpenRouters publika modellprissättning när en OpenRouter-nyckel är tillgänglig; utan denna kan kostnad för annan trafik visas som `0`. Uppskattningar är inte fakturor.

<br/>

**Data och beständighet:** För Docker, montera en volym vid `/app/data` så att `config.json` och SQLite-databasen bevaras vid omstart av containern. Utan en volym förloras all data när containern stoppas.

**För utvecklare:** Efter att ha hämtat ändringar som ersätter den gamla konfigurationen med enkelnyckel, återställ eller slå samman `data/config.json` med den nya standardstrukturen från `src/config-defaults/config_default.json` om din lokala fil fortfarande använder borttagna fält (`api_key`, `api_url`, proxyinställningar).

<br/>

**Webbautentisering:**

- Standardadmin: `admin` / `transrewrt26`.
- Hantera användare i **Inställningar → Användare**.
- Återställ ett lösenord: `docker exec <container> reset-web-password '<användarnamn>' '<nytt-lösenord>'`
  (från källkod: `pnpm run reset-web-password -- <användarnamn> <nytt-lösenord>`)

<br/>

> ⚠️ **VARNING**<br/>
> Byt direkt lösenordet för standardadministratören på alla värdar med nätverksåtkomst.

<br/>

Viktiga inställningar (typsnitt, modeller, språk, etc.) finns tillgängliga i programmets Inställningar.

<br/><br/>

<a id="development-and-architecture"></a>
## Utveckling och arkitektur

- **Utveckling:** Installation, bygge, testning och distribution (Electron, Webb, Docker) – se **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arkitektur och systemöversikt:** Mappstruktur, teknikstack, designbeslut – se **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Utgåvor och taggar

- **Git-taggar** `v`* (t.ex. `v1.0.10`) utlöser [utgivningsarbetsflödet](.github/workflows/release.yml). **GitHub-utgåvor** inkluderar Windows-installationsprogrammet (`.exe`) och Linux AppImage.
- **Docker-avbilder** publiceras till `ghcr.io/wsj-br/transrewrt`. Avbildningstaggar matchar Git-versionen (t.ex. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) samt `latest`. Flera arkitekturer: `linux/amd64` och `linux/arm64` (t.ex. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Bidra

1. Gör en fork av databasen.
2. Skapa en funktionsgren: `git checkout -b feature/min-funktion`
3. Genomför dina ändringar med ett tydligt meddelande.
4. Skicka och öppna en Pull Request mot `main`.

Följ gärna den befintliga kodstilen och testa dina ändringar i både Electron- och webblägen innan du skickar in dem. Se [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) för instruktioner om hur du bygger och testar programmet.

<br/>

**Rapportera fel:** Öppna en ärende på [GitHub](https://github.com/wsj-br/transrewrt/issues). Ange din plattform (Windows / Linux / Docker) och appversion (visas i dialogrutan Om eller på sidan med utgåvor).

<br/><br/>

<a id="disclaimer"></a>
## Ansvarsfriskrivning

Produktnamn och ikoner tillhör sina respektive ägare och används endast för identifiering. Denna programvara är inte kopplad till eller godkänd av något av de nämnda varumärkena.

<br/><br/>

<a id="license"></a>
## Licens

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)