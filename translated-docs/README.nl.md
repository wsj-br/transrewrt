---
translated_at: "2026-03-26T00:30:22.855Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
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

AI-gestuurde teksttool: vertaal tussen talen, herschrijf in verschillende stijlen, en transformeer met aangepaste prompts — gebruikmakend van meerdere AI-aanbieders (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, en lokale Ollama). Werkt als desktopapplicatie (Electron) of als zelfgehoste webapp (Docker).

- **Vertalen** — tussen tientallen talen, met automatische detectie van de brontaal
- **Herschrijven** — grammatica corrigeren, duidelijkheid verbeteren, formeel/informeel, verkorten, uitbreiden, technisch
- **Transformeren** — aangepaste AI-prompts; maak en beheer prompts, optionele doeltaal per prompt
- **Geschiedenis** — volledige uitvoeringsgeschiedenis met invoer/uitvoertekst, filteren en exporteren
- **Modellen & kosten** — kies modellen van elke geconfigureerde aanbieder; kosten- en gebruiksdashboards met logboek, samenvattingen per model/operatie/dag
- **Gebruikersinterface** — meertalige interface (30+ talen, RTL-ondersteuning), lettertypen, ...
- **Webrunmodus** — ondersteuning voor meerdere gebruikers met beheerdersrollen
- **Desktop** — Electron-app voor Windows en Linux
- **Zelfgehost** — Docker-image voor amd64 & arm64 (klaar voor Raspberry Pi)

Na installatie raadpleeg de **[Gebruikersgids](USER-GUIDE.nl.md)** voor een volledige uitleg van alle functies.

<small>**Lees in andere talen:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Opmerking over vertalingen van de interface en documentatie:** Alle talen van de interface behalve het oorspronkelijke Engels (UK)  
> zijn vertaald met behulp van AI-modellen; de formulering kan onnauwkeurig zijn of fouten bevatten.

</small>

<br/>

<a id="screenshots"></a>
## Screenshots

**Taalkeuze**

![Taalkeuze](../images/screenshots/nl/language-selector.png)

**Vertalen**

![Vertalen](../images/screenshots/nl/translate.png)

**Transformeren - prompteditor**

![Transformeren - prompteditor](../images/screenshots/nl/transform-prompt-edit.png)

**Dashboard**

![Kostendashboard](../images/screenshots/nl/dashboard-summary.png)

**Geschiedenis**

![Geschiedenis](../images/screenshots/nl/history.png)

**Instellingen - modelkeuze**

![Instellingen - modelkeuze](../images/screenshots/nl/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Inhoudsopgave

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Snel aan de slag](#snel-aan-de-slag)
- [Installatie](#installatie)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Een OpenRouter API-sleutel verkrijgen](#een-openrouter-api-sleutel-verkrijgen)
- [Configuratie en omgeving](#configuratie-en-omgeving)
- [Ontwikkeling en architectuur](#ontwikkeling-en-architectuur)
- [Releases en tags](#releases-en-tags)
- [Bijdragen](#bijdragen)
- [Vrijwaring](#vrijwaring)
- [Licentie](#licentie)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="snel-aan-de-slag"></a>
## Snel aan de slag

**Docker (aanbevolen voor zelfhosting)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Vervang `sk-or-your-key` door je [OpenRouter API-sleutel](https://openrouter.ai/keys) (of stel sleutels in voor andere providers; zie [Configuratie](#configuratie-en-omgeving)). Open [http://localhost:5000](http://localhost:5000) en wijzig het standaardbeheerderswachtwoord voordat je de service openstelt.

<br/>

> ℹ️ **OPMERKING**<br/>
> Bij Docker worden LLM-referenties ingesteld via omgevingsvariabelen zoals `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (niet in de webinterface). Bij de desktopversie (Electron) configureer je de sleutels in **Instellingen → API**.

<br/>

**Windows**

Download de nieuwste `Transrewrt Setup x.y.z.exe` van [Releases](https://github.com/wsj-br/transrewrt/releases), voer het installatieprogramma uit en start daarna via het Startmenu of een snelkoppeling op het bureaublad. Voer je API-sleutels in bij **Instellingen → API**. Je moet minstens één provider instellen; OpenRouter is vaak in gebruik voor gratis modellen.

<br/>

**Linux**

Download het `.AppImage`-bestand dat overeenkomt met jouw processor van [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` voor standaard pc's, `arm64` voor veel ARM-apparaten, inclusief Raspberry Pi 4+), en voer het vervolgens uit:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Voer je API-sleutels in bij **Instellingen → API**. Je moet minstens één provider instellen; OpenRouter is vaak in gebruik voor gratis modellen.

Op Debian/Ubuntu moet je mogelijk eerst extra afhankelijkheden installeren:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Zie [Installatie → Linux](#linux-electron) voor meer informatie.

<br/>

> ℹ️ **OPMERKING**<br/>
> macOS wordt op dit moment niet ondersteund. Transrewrt is beschikbaar voor Windows, Linux en Docker.

<br/>

Zodra de app draait, raadpleeg de **[Gebruikershandleiding](USER-GUIDE.nl.md)** om te leren hoe je tekst vertaalt, herschrijft en transformeert, prompts beheert en modellen configureert.

<br/><br/>

<a id="installatie"></a>
## Installatie

<a id="windows-electron"></a>
### Windows (Electron)

- Download de nieuwste installer van [Releases](https://github.com/wsj-br/transrewrt/releases).
- Voer het `.exe`-bestand uit en volg de installatie-instructies.
- Bij eerste gebruik: start de app via het Startmenu of een bureaubladsnelkoppeling.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Download het juiste `.AppImage`-bestand (`x64` of `arm64`) van [Releases](https://github.com/wsj-br/transrewrt/releases).
- Voer uit: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` op x86_64/amd64, of gebruik de `...-arm64.AppImage`-bestandsnaam op ARM64.
- Extra afhankelijkheden (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Zie [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) voor meer informatie.

<br/>

<a id="docker"></a>
### Docker

- Ophalen: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Stel minstens één providersleutel in via omgevingsvariabelen (bijvoorbeeld `OPENROUTER_KEY` voor OpenRouter). Geef variabelen door met `-e` of gebruik `docker compose` / `.env`, zodat geheimen niet in de afbeelding worden opgeslagen.
- Providersleutels worden **niet** ingevoerd in de webinterface; de server leest ze uit de omgeving.

Voorbeeld - benoemde volume voor duurzaamheid (OpenRouter-sleutel via omgeving):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Optie      | Beschrijving                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------- |
| Poort      | `5000` (koppel met `-p 5000:5000`)                                                                            |
| Volume     | Koppel `/app/data` voor behoud van configuratie en database                                                   |
| Omgevingsvariabelen | `PORT`, `CONFIG_PATH`, plus LLM-sleutels (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - zie [Configuratie](#configuratie-en-omgeving) |

Om uit broncode te bouwen en uit te voeren: `docker compose up --build -d` of `pnpm docker:up` - zie [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Een OpenRouter API-sleutel verkrijgen

Transrewrt ondersteunt meerdere AI-aanbieders. [OpenRouter](https://openrouter.ai) is een populaire keuze omdat het vele modellen onder één sleutel bundelt en gratis modellen aanbiedt.

1. Meld u aan of log in op [openrouter.ai](https://openrouter.ai).
2. Ga naar de [Keys-pagina](https://openrouter.ai/keys) en maak een nieuwe sleutel aan (geef deze een naam, en optioneel een kredietlimiet). U kunt gratis modellen gebruiken zonder krediet toe te voegen.
3. **Bureaublad (Electron):** plak de sleutels in **Instellingen → API**. **Docker:** stel omgevingsvariabelen in, zoals `OPENROUTER_KEY` (zie [Snelle start](#quick-start)).

Gebruik OpenRouter’s **Body Builder**-model ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) niet voor vertalen, herschrijven of transformeren: dit retourneert JSON-aanvraaginhoud, niet de voltooide tekst voor deze taken. Zie [Instellingen → Modellen](USER-GUIDE.nl.md#models) in de gebruikershandleiding.

U kunt ook andere aanbieders gebruiken (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) of modellen lokaal uitvoeren met [Ollama](https://ollama.com). Zie [Configuratie](#configuration-and-environment) voor de volledige lijst met ondersteunde aanbieders en omgevingsvariabelen.

> ⚠️ **WAARSCHUWING**<br/>
> Als u Ollama gebruikt vanaf een ander apparaat, container of service, configureer Ollama dan zodanig dat externe verbindingen zijn toegestaan (niet alleen localhost).


Zie [OpenRouter authenticatie](https://openrouter.ai/docs/api/reference/authentication) voor informatie over limieten, BYOK en meer.

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuratie en omgeving

**Locaties van configuratiebestanden**

| Implementatie      | Configuratielocatie                                 |
| ------------------ | --------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                             |
| Electron (Linux)   | `~/.config/transrewrt/`                             |
| Web / Docker       | `/app/data/config.json` (gebruik een volume om gegevens te behouden) |

<br/>

**Omgevingsvariabelen** (alleen web/Docker; Electron gebruikt het lokale configuratiebestand)

| Variabele          | Standaard             | Beschrijving |
| ------------------ | --------------------- | ------------ |
| `PORT`             | `5000`                | Serverluisterpoort |
| `CONFIG_PATH`      | `/app/data/config.json` | Pad naar het configuratiebestand |
| `OPENROUTER_KEY`   | *(leeg)*              | OpenRouter API-sleutel |
| `OPENAI_KEY`       | *(leeg)*              | OpenAI API-sleutel |
| `CEREBRAS_KEY`     | *(leeg)*              | Cerebras API-sleutel |
| `ANTHROPIC_KEY`    | *(leeg)*              | Anthropic API-sleutel |
| `GOOGLE_KEY`       | *(leeg)*              | Google Gemini API-sleutel |
| `DEEPSEEK_KEY`     | *(leeg)*              | DeepSeek API-sleutel |
| `GROQ_KEY`         | *(leeg)*              | Groq API-sleutel |
| `MISTRAL_KEY`      | *(leeg)*              | Mistral API-sleutel |
| `OLLAMA_URL`       | *(leeg)*              | Basis-URL van Ollama (bijv. `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(leeg)*              | xAI API-sleutel |

Configureer alleen de aanbieders die u gebruikt. Model-ID’s zijn genamespace’d (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Kostenweergave:** OpenRouter retourneert, indien van toepassing, de exacte gefactureerde kosten. Andere aanbieders gebruiken **geschatte** kosten op basis van OpenRouter’s openbare modelfacturering wanneer een OpenRouter-sleutel beschikbaar is; zonder die sleutel kunnen kosten van niet-OpenRouter-modellen worden weergegeven als `0`. Schattingen zijn geen facturen.

<br/>

**Gegevens en persistentie:** Voor Docker koppelt u een volume aan `/app/data`, zodat `config.json` en de SQLite-database behouden blijven na het opnieuw opstarten van de container. Zonder een volume gaan alle gegevens verloren wanneer de container stopt.

**Ontwikkelaars:** Na het binnenhalen van wijzigingen die de oude configuratie met één sleutel vervangen, reset of voeg `data/config.json` samen met de nieuwe standaardstructuur uit `src/config-defaults/config_default.json`, als uw lokaal bestand nog steeds gebruik maakt van verwijderde velden (`api_key`, `api_url`, proxy-opties).

<br/>

**Webauthenticatie:**

- Standaardbeheerder: `admin` / `transrewrt26`.
- Beheer gebruikers in **Instellingen → Gebruikers**.
- Wachtwoord resetten: `docker exec <container> reset-web-password '<gebruikersnaam>' '<nieuw-wachtwoord>'`
  (vanuit bron: `pnpm run reset-web-password -- <gebruikersnaam> <nieuw-wachtwoord>`)

<br/>

> ⚠️ **WAARSCHUWING**<br/>
> Wijzig het standaardbeheerderswachtwoord onmiddellijk op elke host die toegankelijk is via een netwerk.

<br/>

Belangrijke instellingen (lettertype, modellen, talen, enz.) zijn beschikbaar in de applicatie-instellingen.

<br/><br/>

<a id="development-and-architecture"></a>

## Ontwikkeling en architectuur

- **Ontwikkeling:** Installatie, bouwen, testen en uitrollen (Electron, Web, Docker) - zie **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architectuur en systeemoverzicht:** Mappenstructuur, gebruikte technologieën, ontwerpgedachten - zie **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Releases en tags

- **Git tags** `v`* (bijv. `v1.0.10`) activeren de [release-workflow](.github/workflows/release.yml). **GitHub Releases** bevatten de Windows installer (`.exe`) en Linux AppImages (**x64** en **arm64**).
- **Docker-images** worden gepubliceerd naar `ghcr.io/wsj-br/transrewrt`. De imagedtags komen overeen met de Git-versie (bijv. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) plus `latest`. Multi-arch: `linux/amd64` en `linux/arm64` (bijv. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Bijdragen

1. Fork de repository.
2. Maak een feature branch: `git checkout -b feature/mijn-feature`
3. Commit je wijzigingen met een duidelijke beschrijving.
4. Push en open een Pull Request naar `main`.

Volg de bestaande code-stijl en test je wijzigingen zowel in Electron- als webmodus voordat je ze indient. Zie [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) voor instructies over bouwen en testen.

<br/>

**Problemen melden:** Open een issue op [GitHub](https://github.com/wsj-br/transrewrt/issues). Vermeld je platform (Windows / Linux / Docker) en appversie (te vinden in het Over-dialoogvenster of op de Releases-pagina).

<br/><br/>

<a id="disclaimer"></a>
## Disclaimer

Productnamen en pictogrammen zijn eigendom van hun respectieve eigenaren en worden uitsluitend gebruikt voor identificatiedoeleinden. Deze software is niet verbonden aan of goedgekeurd door een van de genoemde merken.

<br/><br/>

<a id="license"></a>
## Licentie

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)