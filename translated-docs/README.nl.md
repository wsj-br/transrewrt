---
translated_at: "2026-03-25T22:12:23.677Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logo" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Versie"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licentie: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI-gedreven tekstgereedschap: vertaal tussen talen, herschrijf in verschillende stijlen en transformeer met aangepaste prompts — met behulp van meerdere AI-aanbieders (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI en lokale Ollama). Werkt als desktopapp (Electron) of als zelfgehost webapp (Docker).

- **Vertalen** — tussen tientallen talen, met automatische detectie van de brontaal
- **Herschrijven** — grammatica corrigeren, duidelijkheid verbeteren, formeel/informeel, inkorten, uitbreiden, technisch
- **Transformeren** — aangepaste AI-prompts; prompts aanmaken en beheren, optionele doeltaal per prompt
- **Geschiedenis** — volledige uitvoeringsgeschiedenis met invoer/uitvoertekst, filteren en exporteren
- **Modellen & kosten** — kies modellen van elke geconfigureerde aanbieder; kosten- en gebruikspanels met logboeken, samenvattingen per model/actie/dag
- **UI** — meertalige interface (30+ talen, RTL-ondersteuning), lettertypen, ...
- **Webmodus** — ondersteuning voor meerdere gebruikers met beheerdersrollen
- **Desktop** — Electron-app voor Windows en Linux
- **Zelfgehost** — Docker-image voor amd64 & arm64 (klaar voor Raspberry Pi)

Nadat u het heeft geïnstalleerd, raadpleegt u de **[Gebruikersgids](USER-GUIDE.nl.md)** voor een complete uitleg van alle functies.

<small>**Lees in andere talen:** [English (UK)](README.nl.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Opmerking over vertalingen van de interface en documentatie:** Alle interface-talen, behalve het originele Engels (UK), zijn vertaald met behulp van AI-modellen; de formulering kan daarom onnauwkeurig zijn of fouten bevatten.

</small>

<br/>

<a id="screenshots"></a>
## Screenshot

**Taalkeuze**

![Taalkeuze](../images/screenshots/nl/language-selector.png)

**Vertalen**

![Vertalen](../images/screenshots/nl/translate.png)

**Transformeren - prompt-editor**

![Transformeren - prompt-editor](../images/screenshots/nl/transform-prompt-edit.png)

**Dashboard**

![Kostendashboard](../images/screenshots/nl/dashboard-summary.png)

**Geschiedenis**

![Geschiedenis](../images/screenshots/nl/history.png)

**Instellingen - modelselectie**

![Instellingen - modelselectie](../images/screenshots/nl/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Inhoudsopgave

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Snelle start](#snelle-start)
- [Installatie](#installatie)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Een OpenRouter API-sleutel verkrijgen](#een-openrouter-api-sleutel-verkrijgen)
- [Configuratie en omgeving](#configuratie-en-omgeving)
- [Ontwikkeling en architectuur](#ontwikkeling-en-architectuur)
- [Releases en labels](#releases-en-labels)
- [Bijdragen](#bijdragen)
- [Disclaimer](#disclaimer)
- [Licentie](#licentie)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="snelle-start"></a>
## Snelle start

**Docker (aanbevolen voor zelf-hosten)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Vervang `sk-or-your-key` door je [OpenRouter API-sleutel](https://openrouter.ai/keys) (of stel sleutels van andere providers in; zie [Configuratie](#configuratie-en-omgeving)). Open [http://localhost:5000](http://localhost:5000) en wijzig het standaardbeheerderswachtwoord voordat je de service publiek maakt.

<br/>

> ℹ️ **OPMERKING**<br/>
> Bij Docker worden LLM-referenties ingesteld via omgevingsvariabelen zoals `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (niet in de webinterface). Bij de desktopversie (Electron) stel je de sleutels in onder **Instellingen → API**.

<br/>

**Windows**

Download de nieuwste `Transrewrt Setup x.y.z.exe` van [Releases](https://github.com/wsj-br/transrewrt/releases), voer de installateur uit, en start het programma via het Startmenu of een snelkoppeling op het bureaublad. Voer je API-sleutels in onder **Instellingen → API**. Je moet minimaal één provider instellen; OpenRouter wordt vaak gebruikt voor gratis modellen.

<br/>

**Linux**

Download de `.AppImage` die bij je CPU past van [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` voor standaard pc's, `arm64` voor veel ARM-apparaten, inclusief Raspberry Pi 4+), en voer vervolgens het volgende uit:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Voer je API-sleutels in onder **Instellingen → API**. Je moet minimaal één provider instellen; OpenRouter wordt vaak gebruikt voor gratis modellen.

Op Debian/Ubuntu moet je mogelijk eerst extra afhankelijkheden installeren:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Zie [Installatie → Linux](#linux-electron) voor meer details.

<br/>

> ℹ️ **OPMERKING**<br/>
> macOS wordt momenteel niet ondersteund. Transrewrt is beschikbaar voor Windows, Linux en Docker.

<br/>

Zodra de app actief is, raadpleeg de **[Gebruikershandleiding](USER-GUIDE.nl.md)** om te leren hoe je tekst kunt vertalen, herschrijven en omzetten, hoe je prompts kunt beheren en modellen kunt configureren.

<br/><br/>

<a id="installatie"></a>
## Installatie

<a id="windows-electron"></a>
### Windows (Electron)

- Download de nieuwste installateur van [Releases](https://github.com/wsj-br/transrewrt/releases).
- Voer het `.exe`-bestand uit en volg de installatie-instructies.
- Eerste keer starten: start de app via het Startmenu of een snelkoppeling op het bureaublad. 

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Download de juiste `.AppImage` (`x64` of `arm64`) van [Releases](https://github.com/wsj-br/transrewrt/releases).
- Voer uit: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` op x86_64/amd64, of gebruik de `...-arm64.AppImage` op ARM64.
- Extra afhankelijkheden (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Zie [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) voor meer informatie.

<br/>

<a id="docker"></a>
### Docker

- Download: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Stel minimaal één providersleutel in via de omgeving (bijvoorbeeld `OPENROUTER_KEY` voor OpenRouter). Geef variabelen door met `-e` of gebruik `docker compose` / `.env`, zodat geheimen niet in de afbeelding worden opgenomen.
- Providersleutels worden **niet** ingevoerd in de webinterface; de server leest ze uit de omgeving.

Voorbeeld - benoemde volume voor persistentie (OpenRouter-sleutel via omgeving):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Optie    | Beschrijving                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Poort    | `5000` (gebruik `-p 5000:5000` om te mappen)                                                                   |
| Volume   | Koppel `/app/data` voor persistentie van configuratie en database                                             |
| Omgevingsvariabelen | `PORT`, `CONFIG_PATH`, plus LLM-sleutels (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - zie [Configuratie](#configuratie-en-omgeving) |

Om te bouwen en lokaal uit te voeren: `docker compose up --build -d` of `pnpm docker:up` - zie [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Een OpenRouter API-sleutel verkrijgen

Transrewrt ondersteunt meerdere AI-aanbieders. [OpenRouter](https://openrouter.ai) is een populaire keuze omdat het veel modellen samenvoegt onder één sleutel en gratis modellen aanbiedt.

1. Meld u aan of log in op [openrouter.ai](https://openrouter.ai).
2. Ga naar de pagina [Keys](https://openrouter.ai/keys) en maak een nieuwe sleutel aan (geef deze een naam en stel eventueel een creditlimiet in). U kunt gratis modellen gebruiken zonder credits toe te voegen.
3. **Desktop (Electron):** plak sleutels in **Instellingen → API**. **Docker:** stel omgevingsvariabelen in zoals `OPENROUTER_KEY` (zie [Snel aan de slag](#quick-start)).

Gebruik OpenRouter’s **Body Builder**-model ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) niet voor vertalen, herschrijven of transformeren: het retourneert JSON-aanvraagpayloads, niet de voltooide tekst voor deze taken. Zie [Instellingen → Modellen](USER-GUIDE.nl.md#models) in de gebruikershandleiding.

U kunt ook andere aanbieders gebruiken (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) of modellen lokaal uitvoeren met [Ollama](https://ollama.com). Zie [Configuratie](#configuration-and-environment) voor de volledige lijst met ondersteunde aanbieders en omgevingsvariabelen.

> ⚠️ **WAARSCHUWING**<br/>
> Als u Ollama gebruikt vanaf een ander apparaat, container of service, vergeet dan niet Ollama te configureren om externe verbindingen toe te staan (niet alleen localhost).

Zie [OpenRouter-authenticatie](https://openrouter.ai/docs/api/reference/authentication) voor limieten, BYOK en meer.

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuratie en omgeving

**Locaties van configuratiebestanden**

| Implementatie      | Config-locatie                                  |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gebruik een volume om deze te behouden) |

<br/>

**Omgevingsvariabelen** (alleen web/Docker; Electron gebruikt het lokale configuratiebestand)

| Variabele         | Standaard               | Beschrijving |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Serverluisterpoort |
| `CONFIG_PATH`    | `/app/data/config.json` | Pad naar het configuratiebestand |
| `OPENROUTER_KEY` | *(leeg)*                | OpenRouter API-sleutel |
| `OPENAI_KEY`     | *(leeg)*                | OpenAI API-sleutel |
| `CEREBRAS_KEY`   | *(leeg)*                | Cerebras API-sleutel |
| `ANTHROPIC_KEY`  | *(leeg)*                | Anthropic API-sleutel |
| `GOOGLE_KEY`     | *(leeg)*                | Google Gemini API-sleutel |
| `DEEPSEEK_KEY`   | *(leeg)*                | DeepSeek API-sleutel |
| `GROQ_KEY`       | *(leeg)*                | Groq API-sleutel |
| `MISTRAL_KEY`    | *(leeg)*                | Mistral API-sleutel |
| `OLLAMA_URL`     | *(leeg)*                | Basis-URL van Ollama (bijv. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(leeg)*                | xAI API-sleutel |

Configureer alleen de aanbieders die u gebruikt. Model-ID's zijn genamespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, enz.).

**Kostenweergave:** OpenRouter retourneert de exacte gefactureerde kosten wanneer van toepassing. Andere aanbieders gebruiken de **geschatte** kosten op basis van de openbare prijzen van modellen van OpenRouter wanneer een OpenRouter-sleutel beschikbaar is; zonder deze kunnen kosten van niet-OpenRouter-aanbieders als `0` worden weergegeven. Schattingen zijn geen facturen.

<br/>

**Gegevens en persistentie:** Voor Docker koppel een volume aan `/app/data` zodat `config.json` en de SQLite-database behouden blijven bij het herstarten van de container. Zonder volume gaan alle gegevens verloren wanneer de container stopt.

**Ontwikkelaars:** Na het ophalen van wijzigingen die de oude configuratie met één sleutel vervangen, herstel of voeg `data/config.json` samen met de nieuwe standaardstructuur van `src/config-defaults/config_default.json` als uw lokale bestand nog steeds verwijderde velden gebruikt (`api_key`, `api_url`, proxy-opties).

<br/>

**Webauthenticatie:**

- Standaard beheerder: `admin` / `transrewrt26`.
- Beheer gebruikers in **Instellingen → Gebruikers**.
- Wachtwoord opnieuw instellen: `docker exec <container> reset-web-password '<gebruikersnaam>' '<nieuw-wachtwoord>'`
  (vanuit broncode: `pnpm run reset-web-password -- <gebruikersnaam> <nieuw-wachtwoord>`)

<br/>

> ⚠️ **WAARSCHUWING**<br/>
> Wijzig het standaardbeheerderswachtwoord onmiddellijk op elke host die toegankelijk is via het netwerk.

<br/>

Belangrijke instellingen (lettertype, modellen, talen, enz.) zijn beschikbaar in de instellingen van de applicatie.

<br/><br/>

<a id="development-and-architecture"></a>

## Ontwikkeling en architectuur

- **Ontwikkeling:** Installatie, bouwen, testen en implementeren (Electron, Web, Docker) - zie **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architectuur en systeemoverzicht:** Mapstructuur, technische stack, ontwerpbeslissingen - zie **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Releases en labels

- **Git-labels** `v`* (bijv. `v1.0.10`) activeren de [release-workflow](.github/workflows/release.yml). **GitHub Releases** bevatten de installatiebestanden voor Windows (`.exe`) en Linux AppImages (**x64** en **arm64**).
- **Docker-images** worden gepubliceerd naar `ghcr.io/wsj-br/transrewrt`. De imagedlabels komen overeen met de Git-versie (bijv. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) plus `latest`. Multi-arch: `linux/amd64` en `linux/arm64` (bijv. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Bijdragen

1. Fork de repository.
2. Maak een feature branch: `git checkout -b feature/mijn-feature`
3. Voer je wijzigingen door met een duidelijke commitboodschap.
4. Push en open een Pull Request naar `main`.

Volg alstublieft de bestaande code-stijl en test uw wijzigingen in zowel Electron- als webmodus voordat u ze indient. Zie [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) voor instructies over bouwen en testen.

<br/>

**Problemen melden:** Open een issue op [GitHub](https://github.com/wsj-br/transrewrt/issues). Vermeld uw platform (Windows / Linux / Docker) en de app-versie (te vinden in het Over-dialoogvenster of op de Releases-pagina).

<br/><br/>

<a id="disclaimer"></a>
## Aansprakelijkheid

Productnamen en pictogrammen zijn eigendom van hun respectieve houders en worden uitsluitend gebruikt voor identificatiedoeleinden. Deze software is niet verbonden aan of goedgekeurd door enige van de genoemde merken.

<br/><br/>

<a id="license"></a>
## Licentie

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)