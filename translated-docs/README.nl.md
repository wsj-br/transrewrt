---
translated_at: "2026-03-27T23:08:58.614Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
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

AI-gedreven teksttool: vertaal tussen talen, herschrijf in verschillende stijlen en transformeer met aangepaste prompts — met gebruik van meerdere AI-aanbieders (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, en lokale Ollama). Werkt als desktopapp (Electron) of als zelfgehoste webapp (Docker).

- **Vertalen** — tussen tientallen talen, met automatische detectie van de brontaal
- **Herschrijven** — grammatica verbeteren, duidelijkheid verhogen, formele/informeel maken, inkorten, uitbreiden, technisch maken
- **Transformeren** — aangepaste AI-prompts; maak en beheer prompts, optionele doeltaal per prompt
- **Geschiedenis** — volledige uitvoeringsgeschiedenis met invoer/uitvoertekst, filtermogelijkheden en exportfunctie
- **Modellen & kosten** — kies modellen van elke geconfigureerde provider; kosten- en gebruiksoverzichten met log, samenvattingen per model/bewerking/dag
- **Gebruikersinterface** — meertalige interface (meer dan 30 talen, RTL-ondersteuning), lettertypen, ...
- **Webrunmodus** — ondersteuning voor meerdere gebruikers met adminrollen
- **Desktop** — Electron-app voor Windows en Linux
- **Zelfgehost** — Docker-installatie voor amd64 en arm64 (klaar voor Raspberry Pi)

Na installatie raadpleegt u de **[gebruikershandleiding](USER-GUIDE.nl.md)** voor een volledige uitleg van alle functies.

<small>**Lees in andere talen:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Opmerking over vertalingen van UI en documentatie:** Alle interface-talen, behalve het oorspronkelijke Engels (UK),  
> zijn vertaald met behulp van AI-modellen; de formulering kan daarom onnauwkeurig zijn of fouten bevatten.

</small>

<br/>

<a id="screenshots"></a>

## Schermafdrukken

**Taalkeuze**

![Taalkeuze](../images/screenshots/nl/language-selector.png)

**Vertalen**

![Vertalen](../images/screenshots/nl/translate.png)

**Transformeren - prompteditor**

![Transformeren - prompteditor](../images/screenshots/nl/transform-prompt-edit.png)

**Dashboard**

![Kosten dashboard](../images/screenshots/nl/dashboard-summary.png)

**Geschiedenis**

![Geschiedenis](../images/screenshots/nl/history.png)

**Instellingen - modelselectie**

![Instellingen - modelselectie](../images/screenshots/nl/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Inhoudsopgave

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Snel starten](#quick-start)
- [Installatie](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Een OpenRouter API-sleutel verkrijgen](#getting-an-openrouter-api-key)
- [Configuratie en omgeving](#configuration-and-environment)
- [Ontwikkeling en architectuur](#development-and-architecture)
- [Releases en labels](#releases-and-tags)
- [Bijdragen](#contributing)
- [Disclaimer](#disclaimer)
- [Licentie](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Snel beginnen

**Docker (aanbevolen voor zelfhosten)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Vervang `sk-or-your-key` door jouw [OpenRouter API-sleutel](https://openrouter.ai/keys) (of stel sleutels in voor andere providers; zie [Configuratie](#configuration-and-environment)). Open [http://localhost:5000](http://localhost:5000) en wijzig het standaardbeheerderswachtwoord voordat u de service beschikbaar maakt.

<br/>

> ℹ️ **OPMERKING**<br/>
> Bij Docker worden LLM-referenties ingesteld via omgevingsvariabelen zoals `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (niet in de webinterface). Bij de desktopversie (Electron) stelt u de sleutels in via **Instellingen → API**.

<br/>

**Windows**

Download het nieuwste `Transrewrt Setup x.y.z.exe` van [Releases](https://github.com/wsj-br/transrewrt/releases), voer het installatieprogramma uit en start het programma via het Startmenu of de snelkoppeling op het bureaublad. Voer uw API-sleutels in bij **Instellingen → API**. U moet minimaal één provider configureren; OpenRouter is een veelgebruikte keuze voor gratis modellen.

<br/>

**Linux**

Download het `.AppImage`-bestand voor uw processor van [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` voor standaard pc's, `arm64` voor veel ARM-apparaten, inclusief Raspberry Pi 4+), daarna:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Voer uw API-sleutels in bij **Instellingen → API**. U moet minimaal één provider configureren; OpenRouter is een veelgebruikte keuze voor gratis modellen.

Op Debian/Ubuntu moet u mogelijk eerst extra afhankelijkheden installeren:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Zie [Installatie → Linux](#linux-electron) voor meer details.

<br/>

> ℹ️ **OPMERKING**<br/>
> macOS wordt momenteel niet ondersteund. Transrewrt is beschikbaar voor Windows, Linux en Docker.

<br/>

Zodra de app draait, bekijk de **[Gebruikershandleiding](USER-GUIDE.nl.md)** om te leren hoe u tekst kunt vertalen, herschrijven en transformeren, prompts kunt beheren en modellen kunt configureren.

<br/><br/>

<a id="installation"></a>

## Installatie

<a id="windows-electron"></a>
### Windows (Electron)

- Download de nieuwste installer van [Releases](https://github.com/wsj-br/transrewrt/releases).
- Voer het `.exe`-bestand uit en volg de installatie.
- Eerste keer uitvoeren: start de app via het Startmenu of een snelkoppeling op het bureaublad.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Download het juiste `.AppImage`-bestand (`x64` of `arm64`) van [Releases](https://github.com/wsj-br/transrewrt/releases).
- Uitvoeren: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` op x86_64/amd64, of gebruik het `...-arm64.AppImage`-bestand op ARM64.
- Extra afhankelijkheden (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Zie [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) voor meer informatie.

<br/>

<a id="docker"></a>
### Docker

- Download de afbeelding: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Stel minimaal één provider-sleutel in via omgevingsvariabelen (bijvoorbeeld `OPENROUTER_API_KEY` voor OpenRouter). Geef variabelen door met `-e` of via `docker compose` / `.env`, zodat geheime sleutels niet worden vastgelegd in de afbeelding.
- Provider-sleutels worden **niet** ingevuld in de webinterface; de server leest ze uit de omgeving.

Voorbeeld - benoemde volume voor persistentie (OpenRouter-sleutel via omgeving):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

of gebruik Docker Compose:

# download het compose-bestand
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# bewerk het bestand om de API-KEYS toe te voegen
vi transrewrt.yml
# start de container
docker compose -f transrewrt.yml up -d
```

<br/>

| Optie    | Beschrijving                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Poort    | `5000` (toewijzen met `-p 5000:5000`)                                                                                                   |
| Volume   | Koppel `/app/data` voor persistentie van configuratie en database                                                                       |
| Omgevingsvariabelen | `PORT`, `CONFIG_PATH`, plus LLM-sleutels (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - zie [Configuratie](#configuration-and-environment) |

Om vanuit broncode te bouwen en uit te voeren: `docker compose up --build -d` of `pnpm docker:up` - zie [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Een OpenRouter API-sleutel verkrijgen

Transrewrt ondersteunt meerdere AI-aanbieders. [OpenRouter](https://openrouter.ai) is een populaire keuze omdat het veel modellen onder één sleutel samenvoegt en gratis modellen aanbiedt.

1. Meld u aan of log in op [openrouter.ai](https://openrouter.ai).
2. Ga naar de pagina [Sleutels](https://openrouter.ai/keys) en maak een nieuwe sleutel aan (geef deze een naam, optioneel met een kredietlimiet). U kunt gratis modellen gebruiken zonder krediet toe te voegen.
3. **Desktop (Electron):** plak de sleutels in **Instellingen → API**. **Docker:** stel omgevingsvariabelen in zoals `OPENROUTER_API_KEY` (zie [Snel aan de slag](#quick-start)).

Gebruik OpenRouter's **Body Builder**-model ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) niet voor vertalen, herschrijven of transformeren: dit retourneert JSON-verzoekgegevens, niet de voltooide tekst voor deze taken. Zie [Instellingen → Modellen](USER-GUIDE.nl.md#models) in de gebruikershandleiding.

U kunt ook andere aanbieders gebruiken (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) of modellen lokaal draaien met [Ollama](https://ollama.com). Zie [Configuratie](#configuration-and-environment) voor de volledige lijst met ondersteunde aanbieders en omgevingsvariabelen.

> ⚠️ **WAARSCHUWING**<br/>
> Als u Ollama gebruikt vanaf een ander apparaat, container of service, vergeet dan niet Ollama te configureren om externe verbindingen toe te staan (niet alleen localhost).

Zie [OpenRouter authenticatie](https://openrouter.ai/docs/api/reference/authentication) voor informatie over limieten, meebrengen van eigen sleutel (BYOK) en meer.

<br/><br/>

<a id="configuration-and-environment"></a>

## Configuratie en omgeving

**Locaties configuratiebestand**

| Implementatie      | Configuratielocatie                             |
| ------------------ | ----------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                         |
| Electron (Linux)   | `~/.config/transrewrt/`                         |
| Web / Docker       | `/app/data/config.json` (gebruik een volume om deze te behouden) |

<br/>

**Omgevingsvariabelen** (alleen voor web/Docker; Electron gebruikt het lokale configuratiebestand)

| Variabele             | Standaard               | Beschrijving |
| -------------------- | ----------------------- | ----------- |
| `PORT`               | `5000`                  | Poort waarop de server luistert |
| `CONFIG_PATH`        | `/app/data/config.json` | Pad naar het configuratiebestand |
| `OPENROUTER_API_KEY` | *(leeg)*                | OpenRouter API-sleutel |
| `OPENAI_API_KEY`     | *(leeg)*                | OpenAI API-sleutel |
| `CEREBRAS_API_KEY`   | *(leeg)*                | Cerebras API-sleutel |
| `ANTHROPIC_API_KEY`  | *(leeg)*                | Anthropic API-sleutel |
| `GOOGLE_API_KEY`     | *(leeg)*                | Google Gemini API-sleutel |
| `DEEPSEEK_API_KEY`   | *(leeg)*                | DeepSeek API-sleutel |
| `GROQ_API_KEY`       | *(leeg)*                | Groq API-sleutel |
| `MISTRAL_API_KEY`    | *(leeg)*                | Mistral API-sleutel |
| `OLLAMA_URL`         | *(leeg)*                | Basis-URL van Ollama (bijv. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(leeg)*                | xAI API-sleutel |

Configureer alleen de providers die u gebruikt. Model-ID's zijn genamespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, enz.).

**Kostenweergave:** OpenRouter geeft de exacte factureringkosten terug indien van toepassing. Andere providers gebruiken **geschatte** kosten op basis van de openbare prijzen van modellen van OpenRouter wanneer een OpenRouter-sleutel beschikbaar is; zonder deze sleutel kunnen kosten van niet-OpenRouter providers worden weergegeven als `0`. Schattingen zijn geen facturen.

<br/>

**Gegevens en persistentie:** Voor Docker koppelt u een volume aan `/app/data` zodat het `config.json`-bestand en de SQLite-database behouden blijven bij het opnieuw opstarten van de container. Zonder een volume gaan alle gegevens verloren wanneer de container stopt.

**Ontwikkelaars:** Na het synchroniseren van wijzigingen die de oude configuratie met één sleutel vervangen, moet u `data/config.json` opnieuw instellen of samenvoegen met de nieuwe standaardstructuur uit `src/config-defaults/config_default.json` als uw lokale bestand nog steeds gebruikmaakt van verwijderde velden (`api_key`, `api_url`, proxy-opties).

<br/>

**Webverificatie:**

- Standaard beheerder: `admin` / `transrewrt26`.
- Beheer gebruikers in **Instellingen → Gebruikers**.
- Wachtwoord herstellen: `docker exec <container> reset-web-password '<gebruikersnaam>' '<nieuw-wachtwoord>'`
  (vanuit broncode: `pnpm run reset-web-password -- <gebruikersnaam> <nieuw-wachtwoord>`)

<br/>

> ⚠️ **WAARSCHUWING**<br/>
> Wijzig het standaardbeheerderswachtwoord onmiddellijk op elke host die toegankelijk is via een netwerk.

<br/>

Belangrijke instellingen (lettertype, modellen, talen, enz.) zijn beschikbaar in de applicatie-instellingen.

<br/><br/>

<a id="development-and-architecture"></a>

## Ontwikkeling en architectuur

- **Ontwikkeling:** Installatie, bouwen, testen en implementeren (Electron, Web, Docker) - zie **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architectuur en systeemoverzicht:** Mappenstructuur, technische stack, ontwerpbeslissingen - zie **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Releases en tags

- **Git-tags** `v`* (bijv. `v1.0.10`) activeren de [release-workflow](.github/workflows/release.yml). **GitHub Releases** bevatten de installatiebestanden voor Windows (`.exe`) en Linux AppImages (**x64** en **arm64**).
- **Docker-afbeeldingen** worden gepubliceerd naar `ghcr.io/wsj-br/transrewrt`. De tag van de afbeelding komt overeen met de Git-versie (bijv. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) en daarnaast wordt ook de tag `latest` gebruikt. Multi-architectuur: `linux/amd64` en `linux/arm64` (bijv. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Bijdragen

1. Fork de repository.
2. Maak een feature-branch: `git checkout -b feature/mijn-feature`
3. Commit jouw aanpassingen met een duidelijke commitboodschap.
4. Push en open een Pull Request naar `main`.

Volg a.u.b. de bestaande coderingsstijl en test jouw wijzigingen in zowel Electron- als webmodus voordat je deze indient. Zie [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) voor instructies over builden en testen.

<br/>

**Problemen melden:** Open een issue op [GitHub](https://github.com/wsj-br/transrewrt/issues). Vermeld jouw platform (Windows / Linux / Docker) en appversie (weergegeven in het Over-dialoogvenster of op de Releases-pagina).

<br/><br/>

<a id="disclaimer"></a>

## Aansprakelijkheid

Productnamen en iconen zijn eigendom van hun respectieve houders en worden uitsluitend gebruikt voor identificatiedoeleinden. Deze software is niet verbonden aan of goedgekeurd door merken die hierin worden genoemd.

<br/><br/>

<a id="license"></a>
## Licentie

Copyright © 2026 Waldemar Scudeller Jr.

[Apache Licentie 2.0](LICENSE)