---
translation_last_updated: '2026-05-29T23:01:48.844Z'
source_file_mtime: '2026-05-29T16:29:05.776Z'
source_file_hash: 0d709d5bf12a5169fd01d0adaf36791be842032d19813c7a63900e58dc0db095
translation_language: sv
source_file_path: README.md
translation_models:
  - qwen/qwen3-235b-a22b-2507
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.3.3-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI-drivet textverktyg: översätt mellan språk, omskriv i olika stilar och omvandla med anpassade frågor – med flera AI-leverantörer (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI och lokal Ollama). Kör som skrivbordsapp (Electron) eller självvärd webbapp (Docker).

- **Översätt** – mellan dussintals språk, med automatisk källspråksidentifiering
- **Omskriv** – åtgärda grammatik, förbättra tydligheten, formellt/obligatoriskt, förkorta, utöka, tekniskt
- **Transformera** – anpassade AI-prompts; skapa och hantera prompts, valfritt målspråk per prompt
- **Historik** – fullständig körningshistorik med inmatning/utdata, filtrering och export
- **Enkel & Avancerad** - Enkelt läge (standard): förvalda förinställningar per leverantör (**Gratis (OpenRouter)**, **Standard**, **Avancerad**, **Teknisk**; endast förinställningar med en mappning för den valda leverantören visas) utan att välja modell-ID; Avancerat läge: fullständig modelllista från dina konfigurerade leverantörer
- **Modeller & kostnad** - kostnads- och användningsinstrumentpaneler (Sammanfattning, Efter modell, Alla anrop) med export; OpenRouter visar faktisk utgift, andra leverantörer använder uppskattningar
- **Användargränssnitt (UI)** - flerspråkigt gränssnitt (30+ språk, RTL-stöd), teckensnitt, ...
- **Webbläge** - stöd för flera användare med administratörsroller
- **Skrivbord** - Electron-app för Windows och Linux
- **Självvärdbaserad** - Docker-avbildning för amd64 & arm64 (klar för Raspberry Pi)

När installationen är klar, se [**användarhandboken**](USER-GUIDE.sv.md) för en fullständig genomgång av alla funktioner.

<small>**Läs på andra språk:** </small>
<small id="lang-list">[English (GB)](../README.md) · [Português (Brasil)](./README.pt-BR.md) · [العربية](./README.ar.md) · [বাংলা](./README.bn.md) · [Català](./README.ca.md) · [中文 (中国大陆)](./README.zh-CN.md) · [中文 (台灣)](./README.zh-TW.md) · [Hrvatski](./README.hr.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [English (US)](./README.en-US.md) · [Tagalog](./README.tl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Bahasa Melayu](./README.ms.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Basa Jawa](./README.jv.md) · [Português](./README.pt.md) · [ਪੰਜਾਬੀ](./README.pa.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Kiswahili](./README.sw.md) · [Svenska](./README.sv.md) · [తెలుగు](./README.te.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

<small>

> **Obs om översättningar av gränssnitt och dokumentation:** Alla gränssnittsspråk utom det ursprungliga engelska (UK) 
> har översatts med AI-modeller; formuleringarna kan vara otydliga eller innehålla fel.

</small>

<br/>

<a id="table-of-contents"></a>
## Innehållsförteckning

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Skärmdumpar](#screenshots)
- [Snabbstart](#quick-start)
- [Hämta en OpenRouter API-nyckel](#getting-an-openrouter-api-key)
- [Konfiguration och miljö](#configuration-and-environment)
- [Utveckling och arkitektur](#development-and-architecture)
- [Rapportera problem](#reporting-issues)
- [Ansvarsfriskrivning](#disclaimer)
- [Licens](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## Skärmdumpar

**Språkval**

![Language selector](../images/screenshots/sv/language-selector.png)

**Översätt**

![Translate](../images/screenshots/sv/translate.png)

**Omvandla – frågeredigerare**

![Transform - prompt editor](../images/screenshots/sv/transform-prompt-edit.png)

**Översiktspanel**

![Dashboard summary - usage](../images/screenshots/sv/dashboard-summary.png)

**Historik**

![History](../images/screenshots/sv/history.png)

**Inställningar – modellval**

![Settings - model selection](../images/screenshots/sv/settings-general.png)

<br/><br/>

<a id="quick-start"></a>
## Snabbstart

<details>
<summary><b>Docker (rekommenderas för självvärdbaserad drift)</b></summary>

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

Ersätt `sk-or-your-key` med din [OpenRouter API-nyckel](https://openrouter.ai/keys) (eller ange nycklar för andra leverantörer; se [Konfiguration](#configuration-and-environment)). Öppna [http://localhost:5000](http://localhost:5000) och ändra standardlösenordet för administratör innan du exponerar tjänsten.

Ange minst en leverantörsnyckel via miljövariabler (till exempel `OPENROUTER_API_KEY` för OpenRouter). Skicka variabler med `-e` eller `docker compose` / `.env` så att hemligheter inte inkorporeras i avbilden. Leverantörsnycklar **inte** anges i webbgränssnittet; servern läser dem från miljön.

<br/>

> ℹ️ **OBS**<br/>
> I Docker anges LLM-autentiseringsuppgifter med miljövariabler som `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (inte i webbgränssnittet). I skrivbordsläge (Electron) konfigurerar du nycklar i **Inställningar → API**.

<br/>

Eller använd Docker Compose:

```bash
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Se [Konfiguration](#configuration-and-environment) för alla miljövariabler, såsom `PORT`, `CONFIG_PATH`, `TZ`, och LLM-nycklar (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

</details>

<br/>

<details>
<summary><b>Serverns tidszon (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

Datum och tid i applikationens användargränssnitt följer **webbläsarens** språk och tidszon. För **serversidigt** beteende (loggning och liknande) använder containern miljövariabeln `TZ`. Standard är `TZ=Europe/London`.

För att använda en annan tidszon, ange `TZ` i din Compose-fil, till exempel:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Eller skicka den när containern körs (Docker):

```bash
--env TZ=America/Sao_Paulo
```

På många Linux-värdar kan du kopiera systemets tidszonsnamn med:

```bash
echo TZ=\"$(</etc/timezone)\"
```

En lista över giltiga tidszonsnamn finns i [tz-databasen](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- Ladda ner den senaste `Transrewrt Setup x.y.z.exe` från [Releases](https://github.com/wsj-br/transrewrt/releases).
- Kör `.exe` och följ installationsprogrammet.
- Första körningen: starta appen från Start-menyn eller skrivbordsikon.
- Ange dina API-nycklar i **Inställningar → API**. Du måste konfigurera minst en leverantör; OpenRouter är vanligt för gratis modeller.

<br/>

> ℹ️ **OBS**<br/>
> Windows kan visa en av dessa säkerhetsvarningar (normalt för osignerade/oberoende appar):
>   - **Användarkontroll (UAC)**: "Vill du tillåta att den här appen från en okänd utgivare gör ändringar i din enhet?" → Klicka på **Ja**.
>   - **Microsoft Defender SmartScreen**: "Windows skyddade din dator" → Klicka på **Mer info** → **Kör ändå**.
>
> Detta sker eftersom appen inte är signerad av Microsoft eller en större utgivare – den är säker om den laddats ner från våra officiella GitHub-releases (verifiera kontrollsummor på [Releases](https://github.com/wsj-br/transrewrt/releases)-sidan bredvid varje tillgång).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

Ladda ner `.AppImage` för din CPU från [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` för vanliga datorer, `arm64` för många ARM-enheter, inklusive Raspberry Pi 4+), och gör sedan följande:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Använd filnamnet `x64` på x86_64/amd64; använd `...-arm64.AppImage` på ARM64.

Ange dina API-nycklar i **Inställningar → API**. Du måste konfigurera minst en leverantör; OpenRouter är vanligt för gratis modeller.

**Konsolmeddelanden:** Paketerade Linux-versioner (`x64` och `arm64` AppImages) undertrycker Node-avvecklingsvarningar i terminalen (till exempel den inbyggda modulen `punycode`). Om Chromium visar GPU-/EGL-fel som t.ex. "GLES3 stöds inte" men appen fungerar, kan du tysta dem genom att inaktivera hårdvaruacceleration:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Det gäller även på amd64; ändra filnamnet så att det matchar din nedladdning.

På Debian/Ubuntu kan du behöva ytterligare **körningsbibliotek** som krävs av Chromium (dessa finns ofta redan i fullständiga skrivbordsinstallationer). Kör kommandona nedan vid behov:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

ersätt `libasound2t64` med `libasound2` för `arm64`. Minimala eller anpassade installationer kan fortfarande misslyckas med en saknad `.so`-fil. Installera paketet med namnet som anges i felmeddelandet (vanliga tillägg: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). I vissa miljöer kan du behöva köra appen med `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **OBS**<br/>
> macOS stöds för närvarande inte. Transrewrt finns tillgängligt för Windows, Linux och Docker.

</details>

<br/>

När appen körs, se [**användarhandboken**](USER-GUIDE.sv.md) för att lära dig hur du översätter, omskriver och transformerar text, hanterar prompts och konfigurerar modeller.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Hämta en OpenRouter API-nyckel

Transrewrt stöder flera AI-leverantörer. [OpenRouter](https://openrouter.ai) är ett populärt val eftersom det samlar många modeller under en och samma nyckel och erbjuder gratis modeller.

1. Skapa ett konto eller logga in på [openrouter.ai](https://openrouter.ai).
2. Öppna sidan [Keys](https://openrouter.ai/keys) och skapa en ny nyckel (ge den ett namn och ange eventuellt en kreditgräns). Du kan använda gratis modeller utan att lägga till kredit.
3. **Skrivbord (Electron):** klistra in nycklar i **Inställningar → API**. **Docker:** ange miljövariabler som `OPENROUTER_API_KEY` (se [Snabbstart](#quick-start)).

Använd inte OpenRouters modell **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) för översättning, omskrivning eller omvandling: den returnerar JSON-begärandenyttolaster, inte den färdiga texten för dessa uppgifter. Se [Inställningar → Modeller](USER-GUIDE.sv.md#models) i användarhandboken.

Du kan också använda andra leverantörer (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) eller köra modeller lokalt med [Ollama](https://ollama.com). Se [Konfiguration](#configuration-and-environment) för en fullständig lista över stödda leverantörer och miljövariabler.

</br>

> ⚠️ **VARNING**<br/>
> Om du använder Ollama från en annan enhet, container eller tjänst, kom ihåg att konfigurera Ollama så att externa anslutningar tillåts (inte endast localhost).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguration och miljö

</br>

**Konfigurationsfilens plats**

| Distribution         | Konfigurationsplats                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Webben / Docker       | `/app/data/config.json` (använd en volym för att spara) |

<br/>

**Miljövariabler** (endast webb/Docker; Electron använder lokal konfigurationsfil)

| Variabel             | Beskrivning                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | Serverns lyssningsport (förvalt värde `5000`)                                  |
| `CONFIG_PATH`        | Sökväg till konfigurationsfilen (förvalt värde: `/app/data/config.json`)                |
| `TZ`                 | tidszon för serversidig tid (loggning, etc.) (förvalt värde `Europe/London`) |
| `HISTORY_DISABLED`   | Tvinga av historikspårning (valfritt, som standard är `false`)                  |
| `OPENROUTER_API_KEY` | OpenRouter API-nyckel                                                           |
| `OPENAI_API_KEY`     | OpenAI API-nyckel                                                               |
| `CEREBRAS_API_KEY`   | Cerebras API-nyckel                                                             |
| `ANTHROPIC_API_KEY`  | Anthropic API-nyckel                                                            |
| `GOOGLE_API_KEY`     | Google Gemini API-nyckel                                                        |
| `DEEPSEEK_API_KEY`   | DeepSeek API-nyckel                                                             |
| `GROQ_API_KEY`       | Groq API-nyckel                                                                 |
| `MISTRAL_API_KEY`    | Mistral API-nyckel                                                              |
| `OLLAMA_URL`         | Ollama bas-URL (t.ex. `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | xAI API-nyckel                                                                  |

**Integritetsläge:** För att tvinga av historikspårning oavsett `config.json` eller användarinställningar, sätt `HISTORY_DISABLED` till `true` eller `1` (ej skiftlägeskänsligt) för **webb-/Docker-serverprocessen** och/eller **Electron-skrivbordsappens huvudprocess** (t.ex. system- eller startmiljö – inte endast renderingsprocessen). Detta inaktiverar lagring av inmatnings-/utmatningshistorik, låser **Inställningar → Allmänna inställningar → Historik** och blockerar API:er relaterade till Historik.

Konfigurera endast de leverantörer du använder. Modell-ID:n är namnrymdsindelade (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Kostnadsvisning:** OpenRouter returnerar exakt fakturerad kostnad när det är tillämpligt. Andra leverantörer använder **uppskattad** kostnad från OpenRouters publika modellprissättning när en OpenRouter-nyckel är tillgänglig; utan nyckel kan icke-OpenRouter-kostnader visas som `0`. Uppskattningar är inte fakturor.

<br/>

**Data och beständighet:** För Docker, montera en volym vid `/app/data` så att `config.json` och SQLite-databasen bevaras vid omstart av containern. Utan volym förloras all data när containern stoppas.

<br/>

**Webbautentisering:**

- Förvald administratör: `admin` / `transrewrt26`.
- Hantera användare i **Inställningar → Användare**.
- Återställ ett lösenord: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **VARNING**<br/>
> Ändra omedelbart det förvalda administratörslösenordet på alla nätverksåtkomliga system.

<br/>

Nyckelinställningar (typsnitt, modeller, språk, etc.) finns tillgängliga i applikationens Inställningar.

<br/><br/>

<a id="development-and-architecture"></a>
## Utveckling och arkitektur

- **Utveckling:** Konfiguration, bygg, testa och distribuera (Electron, Web, Docker) – se [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).
- **Arkitektur och systemöversikt:** Mappstruktur, teknikstack, designbeslut – se [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md).

<br/><br/>

<a id="reporting-issues"></a>
## Rapportera problem

Öppna ett ärende på [GitHub](https://github.com/wsj-br/transrewrt/issues). Inkludera din plattform (Windows / Linux / Docker) och appversion (visas i dialogrutan Om eller på Releases-sidan).

<br/><br/>

<a id="disclaimer"></a>
## Ansvarsfriskrivning

Produktnamn och ikoner tillhör sina respektive ägare och används endast för identifiering.

<br/><br/>

<a id="license"></a>
## Licens

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
