---
translation_last_updated: '2026-04-02T12:40:49.914Z'
source_file_mtime: '2026-04-02T12:39:14.838Z'
source_file_hash: 0826245f792850f3
translation_language: nl
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Versie"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licentie: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI-gedreven tekstgereedschap: vertalen tussen talen, herschrijven in verschillende stijlen en transformeren met aangepaste prompts — met gebruik van meerdere AI-providers (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI en lokaal Ollama). Werkt als desktopapp (Electron) of als zelfgehoste webapp (Docker).

- **Vertalen** — tussen tientallen talen, met automatische herkenning van de brontaal
- **Herschrijven** — grammatica verbeteren, duidelijkheid verbeteren, formeel/informeel, inkorten, uitbreiden, technisch
- **Transformatie** — aangepaste AI-prompts; prompts aanmaken en beheren, optionele doeltaal per prompt
- **Geschiedenis** — volledige uitvoeringsgeschiedenis met invoer/uitvoertekst, filteren en exporteren
- **Modellen & kosten** — modellen kiezen van elke geconfigureerde provider; dashboard voor kosten en gebruik met logboek, samenvattingen per model/operatie/dag
- **UI** — meertalige interface (30+ talen, RTL-ondersteuning), lettertypen, ...
- **Webmodus** — ondersteuning voor meerdere gebruikers met beheerdersrollen
- **Desktop** — Electron-app voor Windows en Linux
- **Zelfgehost** — Docker-image voor amd64 & arm64 (klaar voor Raspberry Pi)

Nadat u het heeft geïnstalleerd, raadpleegt u de **[Gebruikershandleiding](USER-GUIDE.nl.md)** voor een volledige uitleg van alle functies.

<small>**Lees in andere talen:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Opmerking over vertalingen van de interface en documentatie:** Alle talen van de interface, behalve het oorspronkelijke Engels (UK),
> zijn vertaald met behulp van AI-modellen; de formulering kan onnauwkeurig zijn of fouten bevatten.

</small>

<br/>

<a id="table-of-contents"></a>
## Inhoudsopgave

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Schermafbeeldingen](#screenshots)
- [Snelstart](#quick-start)
- [Een OpenRouter API-sleutel ophalen](#getting-an-openrouter-api-key)
- [Configuratie en omgeving](#configuration-and-environment)
- [Ontwikkeling en architectuur](#development-and-architecture)
- [Problemen rapporteren](#reporting-issues)
- [Disclaimer](#disclaimer)
- [Licentie](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## Screenshots

**Taalkeuze**

![Language selector](../images/screenshots/nl/language-selector.png)

**Vertalen**

![Translate](../images/screenshots/nl/translate.png)

**Transformatie - prompteditor**

![Transform - prompt editor](../images/screenshots/nl/transform-prompt-edit.png)

**Dashboard**

![Dashboard summary — usage](../images/screenshots/nl/dashboard-summary.png)

**Geschiedenis**

![History](../images/screenshots/nl/history.png)

**Instellingen - modelselectie**

![Settings - model selection](../images/screenshots/nl/settings-models.png)

<br/><br/>

<a id="quick-start"></a>
## Snel aan de slag

<details>
<summary><b>Docker (aanbevolen voor zelf hosten)</b></summary>

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

Vervang `sk-or-your-key` door je [OpenRouter API-sleutel](https://openrouter.ai/keys) (of stel andere provider-sleutels in; zie [Configuratie](#configuration-and-environment)). Open [http://localhost:5000](http://localhost:5000) en wijzig het standaard beheerderswachtwoord voordat je de service openstelt.

Stel ten minste één provider-sleutel in via de omgeving (bijvoorbeeld `OPENROUTER_API_KEY` voor OpenRouter). Geef variabelen door met `-e` of `docker compose` / `.env` zodat geheimen niet in de image worden gebakken. Provider-sleutels worden **niet** ingevoerd in de web-interface; de server leest ze uit de omgeving.

<br/>

> ℹ️ **OPMERKING**<br/>
> In Docker worden LLM-referenties ingesteld via omgevingsvariabelen zoals `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (niet in de web-UI). Op het bureaublad (Electron) stelt u de sleutels in onder **Instellingen → API**.

<br/>

Of gebruik Docker Compose:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Zie [Configuratie](#configuration-and-environment) voor alle omgevingsvariabelen, zoals `PORT`, `CONFIG_PATH`, `TZ` en LLM-sleutels (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

</details>

<br/>

<details>
<summary><b>Servertijdzone (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

De datum en tijd in de gebruikersinterface van de applicatie volgen de **browser**-taalinstelling en het tijdgebied. Voor **serverzijde**-gedrag (zoals loggen), gebruikt de container de omgevingsvariabele `TZ`. De standaardwaarde is `TZ=Europe/London`.

Om een ander tijdgebied te gebruiken, stel `TZ` in uw Compose-bestand in, bijvoorbeeld:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Of geef het door bij het starten van de container (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Op veel Linux-systemen kunt u de systeemtijdzone-naam kopiëren met:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Een lijst van geldige tijdzone-namen wordt bijgehouden in de [tz-database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- Download de nieuwste `Transrewrt Setup x.y.z.exe` van [Releases](https://github.com/wsj-br/transrewrt/releases).
- Voer het `.exe`-bestand uit en volg de installer.
- Eerste keer: start de app vanuit het Startmenu of het bureaubladsnelkoppeling.
- Voer je API-sleutels in onder **Instellingen → API**. Je moet ten minste één provider configureren; OpenRouter is gebruikelijk voor gratis modellen.

<br/>

> ℹ️ **OPMERKING**<br/>
> Windows kan een van deze beveiligingswaarschuwingen tonen (normaal voor niet-ondertekende/indie-apps):
>   - **User Account Control (UAC)**: "Wil je toestaan dat deze app van een onbekende uitgever wijzigingen aanbrengt op je apparaat?" → Klik op **Ja**.
>   - **Microsoft Defender SmartScreen**: "Windows heeft je pc beschermd" → Klik op **Meer info** → **Toch uitvoeren**.
>
> Dit gebeurt omdat de app niet ondertekend is door Microsoft of een grote uitgever—het is veilig als je het downloadt van onze officiële GitHub-releases (controleer de checksums op de [Releases](https://github.com/wsj-br/transrewrt/releases)-pagina naast elk bestand).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

Download het `.AppImage`-bestand voor je CPU van [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` voor typische pc's, `arm64` voor veel ARM-apparaten, inclusief Raspberry Pi 4+), en voer daarna uit:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Gebruik op x86_64/amd64 de `x64`-bestandsnaam; op ARM64 gebruik de `...-arm64.AppImage`-naam.

Voer je API-sleutels in onder **Instellingen → API**. Je moet ten minste één provider configureren; OpenRouter is gebruikelijk voor gratis modellen.

**Consoleberichten:** Gepackagde Linux-versies (`x64` en `arm64` AppImages) onderdrukken Node-verouderingswaarschuwingen in de terminal (bijvoorbeeld de ingebouwde `punycode`-module). Als Chromium GPU-/EGL-fouten zoals “GLES3 wordt niet ondersteund” afdrukt, maar de app werkt, kunt u deze dempen door hardwareversnelling uit te schakelen:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Dit geldt ook voor amd64; wijzig de bestandsnaam om overeen te komen met je download.

Op Debian/Ubuntu heb je mogelijk extra **runtime**-bibliotheken nodig die vereist zijn door Chromium (deze zijn vaak al aanwezig op volledige desktop-installaties). Voer de onderstaande opdrachten uit indien nodig:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

vervang `libasound2t64` door `libasound2` voor `arm64`. Minimale of aangepaste installaties kunnen nog steeds mislukken met een ontbrekend `.so`-bestand. Installeer het pakket genoemd in het foutbericht (veelvoorkomende extra's: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). In sommige omgevingen moet je de app mogelijk uitvoeren met `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **OPMERKING**<br/>
> macOS wordt momenteel niet ondersteund. Transrewrt is beschikbaar voor Windows, Linux en Docker.

</details>

<br/>

Zodra de app draait, bekijk de **[Gebruikershandleiding](USER-GUIDE.nl.md)** om te leren hoe je tekst vertaalt, herschrijft en transformeert, prompts beheert en modellen configureert.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Een OpenRouter API-sleutel verkrijgen

Transrewrt ondersteunt meerdere AI-providers. [OpenRouter](https://openrouter.ai) is een populaire keuze omdat het veel modellen onder één sleutel bundelt en gratis modellen aanbiedt.

1. Meld u aan of log in op [openrouter.ai](https://openrouter.ai).
2. Ga naar de pagina [Keys](https://openrouter.ai/keys) en maak een nieuwe sleutel aan (geef deze een naam, en stel eventueel een kredietlimiet in). U kunt gratis modellen gebruiken zonder krediet toe te voegen.
3. **Desktop (Electron):** plak de sleutels in **Instellingen → API**. **Docker:** stel omgevingsvariabelen in zoals `OPENROUTER_API_KEY` (zie [Snel aan de slag](#quick-start)).

Gebruik OpenRouter’s **Body Builder**-model ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) niet voor vertalen, herschrijven of transformeren: het retourneert JSON-verzoekpayloads, niet de voltooide tekst voor deze taken. Zie [Instellingen → Modellen](USER-GUIDE.nl.md#models) in de gebruikershandleiding.

U kunt ook andere providers gebruiken (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) of modellen lokaal uitvoeren met [Ollama](https://ollama.com). Zie [Configuratie](#configuration-and-environment) voor de volledige lijst met ondersteunde providers en omgevingsvariabelen.

</br>

> ⚠️ **WAARSCHUWING**<br/>
> Als u Ollama gebruikt vanaf een ander apparaat, container of service, vergeet dan niet Ollama te configureren om externe verbindingen toe te staan (niet alleen localhost).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuratie en omgeving

</br>

**Locaties van configuratiebestanden**

| Implementatie         | Configuratielocatie                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gebruik een volume om door te zetten) |

<br/>

**Omgevingsvariabelen** (alleen web/Docker; Electron gebruikt het lokale configuratiebestand)

| Variabele             | Beschrijving                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | Serverpoort waarop wordt geluisterd (standaard `5000`)                                  |
| `CONFIG_PATH`        | Pad naar het configuratiebestand (standaard `/app/data/config.json`)                 |
| `TZ`                 | tijdzone voor serverzijde tijd (loggen, enz.) (standaard `Europe/London`) |
| `OPENROUTER_API_KEY` | OpenRouter API-sleutel                                                           |
| `OPENAI_API_KEY`     | OpenAI API-sleutel                                                               |
| `CEREBRAS_API_KEY`   | Cerebras API-sleutel                                                             |
| `ANTHROPIC_API_KEY`  | Anthropic API-sleutel                                                            |
| `GOOGLE_API_KEY`     | Google Gemini API-sleutel                                                        |
| `DEEPSEEK_API_KEY`   | DeepSeek API-sleutel                                                             |
| `GROQ_API_KEY`       | Groq API-sleutel                                                                 |
| `MISTRAL_API_KEY`    | Mistral API-sleutel                                                              |
| `OLLAMA_URL`         | Ollama basis-URL (bijv. `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | xAI API-sleutel                                                                  |

Configureer alleen de providers die u gebruikt. Model-ID's zijn genamespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, enz.).

**Kostenweergave:** OpenRouter retourneert de exacte factuurkosten indien van toepassing. Andere providers gebruiken **geschatte** kosten op basis van de openbare prijzen van OpenRouter als een OpenRouter-sleutel beschikbaar is; zonder deze kunnen kosten van niet-OpenRouter als `0` worden weergegeven. Schattingen zijn geen facturen.

<br/>

**Gegevens en persistentie:** Voor Docker, koppel een volume aan `/app/data` zodat `config.json` en de SQLite-database behouden blijven bij het opnieuw opstarten van de container. Zonder een volume gaan alle gegevens verloren wanneer de container stopt.

<br/>

**Webauthenticatie:**

- Standaard beheerder: `admin` / `transrewrt26`.
- Beheer gebruikers onder **Instellingen → Gebruikers**.
- Stel een wachtwoord opnieuw in: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **WAARSCHUWING**<br/>
> Wijzig het standaardbeheerderswachtwoord onmiddellijk op elke netwerktoegankelijke host.

<br/>

Belangrijke instellingen (lettertype, modellen, talen, enz.) zijn beschikbaar in de applicatie-instellingen.

<br/><br/>

<a id="development-and-architecture"></a>
## Ontwikkeling en architectuur

- **Ontwikkeling:** Installatie, builden, testen en implementeren (Electron, Web, Docker) - zie **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architectuur en systeemoverzicht:** Mappenstructuur, technologie-stack, ontwerpbeslissingen - zie **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Problemen melden

Open een issue op [GitHub](https://github.com/wsj-br/transrewrt/issues). Vermeld je platform (Windows / Linux / Docker) en appversie (weergegeven in het Over-venster of op de Releases-pagina).

<br/><br/>

<a id="disclaimer"></a>
## Disclaimer

Productnamen en pictogrammen behoren toe aan hun respectieve eigenaren en worden alleen gebruikt ter identificatie. Deze software is niet gelieerd aan of goedgekeurd door een van de genoemde merken.

<br/><br/>

<a id="license"></a>
## Licentie

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
