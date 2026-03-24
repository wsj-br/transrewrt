---
translated_at: "2026-03-24T01:16:43.841Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logo" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Versie"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licentie: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

AI-gestuurde teksttool: vertaal tussen talen, herschrijf in verschillende stijlen en transformeer met aangepaste prompts — met gebruik van meerdere AI-aanbieders (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI en lokale Ollama). Draait als desktopapp (Electron) of als zelfgehoste webapp (Docker).

- **Vertalen** — tussen dozijnen talen, met automatische detectie van de brontaal
- **Herschrijven** — grammatica verbeteren, duidelijkheid verhogen, formeel/informeel, inkorten, uitbreiden, technisch
- **Transformeren** — aangepaste AI-prompts; maak en beheer prompts, optionele doeltaal per prompt
- **Geschiedenis** — volledige uitvoeringsgeschiedenis met invoer/uitvoertekst, filteren en exporteren
- **Modellen & kosten** — kies modellen van elke geconfigureerde aanbieder; kostenoverzicht met SQLite-log, samenvattingen per model/actie/dag
- **Gebruikersinterface** — meertalige interface (30+ talen, RTL-ondersteuning), lettertypen, ...
- **Webmodus** — ondersteuning voor meerdere gebruikers met beheerdersrollen; API-sleutels blijven aan de serverzijde en worden nooit aan de browser blootgesteld
- **Desktop** — Electron-app voor Windows en Linux
- **Zelfgehost** — Docker-image voor amd64 & arm64 (klaar voor Raspberry Pi)

Na installatie raadpleegt u de **[Gebruikershandleiding](USER-GUIDE.nl.md)** voor een volledige uitleg van alle functies.

<small>**Lees in andere talen:** [English (UK)](README.nl.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>


<br/>

**Opmerking over vertalingen van de gebruikersinterface en documentatie**: Alle interfacetalen behalve Engels (UK) zijn vertaald met behulp van AI-modellen; de formulering kan onnauwkeurig zijn of fouten bevatten.



<a id="screenshots"></a>
## Screenshot

**Taalkeuze**

![Taalkeuze](../images/screenshots/nl/language-selector.png)

**Vertalen**

![Vertalen](../images/screenshots/nl/translate.png)

**Transformeren - prompteditor**

![Transformeren - prompteditor](../images/screenshots/nl/transform-prompt-edit.png)

**Dashboard**

![Kostenoverzicht](../images/screenshots/nl/dashboard-summary.png)

**Geschiedenis**

![Geschiedenis](../images/screenshots/nl/history.png)

**Instellingen - modelkeuze**

![Instellingen - modelkeuze](../images/screenshots/nl/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Inhoudsopgave

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Snel aan de slag](#quick-start)
- [Installatie](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Een OpenRouter API-sleutel verkrijgen](#getting-an-openrouter-api-key)
- [Configuratie en omgeving](#configuration-and-environment)
- [Ontwikkeling en architectuur](#development-and-architecture)
- [Releases en tags](#releases-and-tags)
- [Bijdragen](#contributing)
- [Disclaimer](#disclaimer)
- [Licentie](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Snel aan de slag

**Docker (aanbevolen voor zelfhosten)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Vervang `sk-or-your-key` door jouw [OpenRouter API-sleutel](https://openrouter.ai/keys) (of stel andere provider-sleutels in; zie [Configuratie](#configuration-and-environment)). Open [http://localhost:5000](http://localhost:5000) en verander het standaard admin-wachtwoord voordat je de service publiek maakt.

<br/>

> ℹ️ **OPMERKING**<br/>
> Bij Docker worden LLM-referenties ingesteld via omgevingsvariabelen zoals `OPENROUTER_KEY`, `OPENAI_KEY`, … (niet in de webinterface). Bij de desktopversie (Electron) stel je de sleutels in onder **Instellingen → API**.

<br/>

**Windows**

Download de nieuwste `Transrewrt Setup x.y.z.exe` van [Releases](https://github.com/wsj-br/transrewrt/releases), voer het installatieprogramma uit en start het programma via het Startmenu of een bureaubladsnelkoppeling. Voer je API-sleutels in onder **Instellingen → API**. Je moet minstens één provider instellen; OpenRouter wordt vaak gebruikt voor gratis modellen.

<br/>

**Linux**

Download het `.AppImage`-bestand van [Releases](https://github.com/wsj-br/transrewrt/releases), en voer vervolgens uit:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Voer je API-sleutels in onder **Instellingen → API**. Je moet minstens één provider instellen; OpenRouter wordt vaak gebruikt voor gratis modellen.

Op Debian/Ubuntu moet je mogelijk eerst extra afhankelijkheden installeren:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Zie [Installatie → Linux](#linux-electron) voor meer details.

<br/>

> ℹ️ **OPMERKING**<br/>
> macOS wordt momenteel niet ondersteund. Transrewrt is beschikbaar voor Windows, Linux en Docker.

<br/>

Als de app eenmaal draait, raadpleeg dan de **[Gebruikershandleiding](USER-GUIDE.nl.md)** om te leren hoe je tekst vertaalt, herschrijft en transformeert, prompts beheert en modellen configureert.

<br/><br/>

<a id="installation"></a>
## Installatie

<a id="windows-electron"></a>
### Windows (Electron)

- Download de nieuwste installer van [Releases](https://github.com/wsj-br/transrewrt/releases).
- Voer het `.exe`-bestand uit en volg de installatie.
- Eerste keer starten: start de app via het Startmenu of een bureaubladsnelkoppeling.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Download het `.AppImage`-bestand van [Releases](https://github.com/wsj-br/transrewrt/releases).
- Voer uit: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Extra afhankelijkheden (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Zie [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) voor meer informatie.

<br/>

<a id="docker"></a>
### Docker

- Ophalen: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Stel minstens één providersleutel in via omgevingsvariabelen (bijvoorbeeld `OPENROUTER_KEY` voor OpenRouter). Geef variabelen door met `-e` of via `docker compose` / `.env`, zodat geheimen niet in de image worden opgenomen.
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

| Optie      | Beschrijving                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------- |
| Poort      | `5000` (toewijzen met `-p 5000:5000`)                                                                         |
| Volume     | Koppel `/app/data` voor persistentie van configuratie en database                                            |
| Omgevingsvariabelen | `PORT`, `CONFIG_PATH`, plus LLM-sleutels (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - zie [Configuratie](#configuration-and-environment) |

Om te bouwen en uitvoeren vanuit de broncode: `docker compose up --build -d` of `pnpm docker:up` - zie [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Een OpenRouter API-sleutel verkrijgen

Transrewrt ondersteunt meerdere AI-aanbieders. [OpenRouter](https://openrouter.ai) is een populaire keuze omdat het veel modellen onder één sleutel bundelt en gratis modellen aanbiedt.

1. Maak een account aan of meld u aan op [openrouter.ai](https://openrouter.ai).
2. Ga naar de [Keys-pagina](https://openrouter.ai/keys) en maak een nieuwe sleutel aan (geef deze een naam, optioneel met een kredietlimiet). U kunt gratis modellen gebruiken zonder krediet toe te voegen.
3. **Desktop (Electron):** plak de sleutel in **Instellingen → API**. **Docker:** stel omgevingsvariabelen in zoals `OPENROUTER_KEY` (zie [Snelstart](#quick-start)).

U kunt ook andere aanbieders gebruiken (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) of modellen lokaal uitvoeren met [Ollama](https://ollama.com). Zie [Configuratie](#configuration-and-environment) voor de volledige lijst met ondersteunde aanbieders en omgevingsvariabelen.

Bekijk [OpenRouter-authenticatie](https://openrouter.ai/docs/api/reference/authentication) voor limieten, BYOK en meer.

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuratie en omgeving

**Locaties van configuratiebestanden**

| Implementatie      | Configuratie-locatie                            |
| ------------------ | ----------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                         |
| Electron (Linux)   | `~/.config/transrewrt/`                         |
| Web / Docker       | `/app/data/config.json` (gebruik een volume om deze permanent op te slaan) |

<br/>

**Omgevingsvariabelen** (alleen web/Docker; Electron gebruikt het lokale configuratiebestand)

| Variabele         | Standaard               | Beschrijving |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Poort waarop de server luistert |
| `CONFIG_PATH`    | `/app/data/config.json` | Pad naar het configuratiebestand |
| `OPENROUTER_KEY` | *(leeg)*                | OpenRouter API-sleutel |
| `OPENAI_KEY`     | *(leeg)*                | OpenAI API-sleutel |
| `ANTHROPIC_KEY`  | *(leeg)*                | Anthropic API-sleutel |
| `GOOGLE_KEY`     | *(leeg)*                | Google Gemini API-sleutel |
| `DEEPSEEK_KEY`   | *(leeg)*                | DeepSeek API-sleutel |
| `GROQ_KEY`       | *(leeg)*                | Groq API-sleutel |
| `MISTRAL_KEY`    | *(leeg)*                | Mistral API-sleutel |
| `OLLAMA_URL`     | *(leeg)*                | Ollama basis-URL (bijv. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(leeg)*                | xAI API-sleutel |

Configureer alleen de aanbieders die u gebruikt. Model-ID’s zijn genamespace (`openrouter/…`, `openai/…`, `ollama/…`, enz.).

**Kostenweergave:** OpenRouter retourneert, indien van toepassing, de exacte factuurkosten. Andere aanbieders gebruiken **geschatte** kosten op basis van de publieke prijzen van modellen van OpenRouter wanneer een OpenRouter-sleutel beschikbaar is; zonder deze sleutel kunnen kosten voor niet-OpenRouter providers als `0` worden weergegeven. Deze schattingen zijn geen facturen.

<br/>

**Gegevens en persistentie:** Voor Docker, koppel een volume aan `/app/data` zodat `config.json` en de SQLite-database behouden blijven bij het opnieuw opstarten van de container. Zonder volume gaan alle gegevens verloren wanneer de container stopt.

**Ontwikkelaars:** Na het overnemen van wijzigingen die de oude configuratie met één sleutel vervangen, moet u `data/config.json` opnieuw instellen of samenvoegen met de nieuwe standaardstructuur uit `src/config-defaults/config_default.json` als uw lokale bestand nog steeds gebruikmaakt van verwijderde velden (`api_key`, `api_url`, proxy-opties).

<br/>

**Webverificatie:**

- Standaard beheerder: `admin` / `transrewrt26`.
- Beheer gebruikers in **Instellingen → Gebruikers**.
- Wachtwoord opnieuw instellen: `docker exec <container> reset-web-password '<gebruikersnaam>' '<nieuw-wachtwoord>'`
  (vanuit broncode: `pnpm run reset-web-password -- <gebruikersnaam> <nieuw-wachtwoord>`)

<br/>

> ⚠️ **WAARSCHUWING**<br/>
> Wijzig het standaard beheerderswachtwoord onmiddellijk op elk systeem dat toegankelijk is via een netwerk.

<br/>

Belangrijke instellingen (lettertype, modellen, talen, enz.) zijn beschikbaar in de app-instellingen.

<br/><br/>

<a id="development-and-architecture"></a>
## Ontwikkeling en architectuur

- **Ontwikkeling:** Installatie, bouwen, testen en implementeren (Electron, Web, Docker) - zie **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architectuur en systeemoverzicht:** Mappenstructuur, technische stack, ontwerpbeslissingen - zie **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Releases en tags

- **Git-tags** `v`* (bijvoorbeeld `v1.0.10`) activeren de [release-werkstroom](.github/workflows/release.yml). **GitHub-releases** bevatten de Windows-installer (`.exe`) en de Linux AppImage.
- **Docker-images** worden gepubliceerd naar `ghcr.io/wsj-br/transrewrt`. De imagenamen komen overeen met de Git-versie (bijvoorbeeld `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) plus het label `latest`. Multi-architectuur: `linux/amd64` en `linux/arm64` (bijvoorbeeld Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Mee helpen

1. Fork de repository.
2. Maak een feature branch: `git checkout -b feature/mijn-feature`
3. Commit je wijzigingen met een duidelijke boodschap.
4. Push en open een Pull Request naar `main`.

Volg de bestaande code-stijl en test je wijzigingen zowel in Electron- als in webmodus voordat je ze instuurt. Zie [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) voor instructies over het bouwen en testen.

<br/>

**Problemen melden:** Open een issue op [GitHub](https://github.com/wsj-br/transrewrt/issues). Vermeld je platform (Windows / Linux / Docker) en de appversie (weergegeven in het Over-scherm of op de Releases-pagina).

<br/><br/>

<a id="disclaimer"></a>
## Aansprakelijkheid

Productnamen en pictogrammen zijn eigendom van hun respectieve eigenaren en worden uitsluitend gebruikt voor identificatiedoeleinden. Deze software is niet verbonden aan of goedgekeurd door een van de genoemde merken.

<br/><br/>

<a id="license"></a>
## Licentie

Copyright © 2026 Waldemar Scudeller Jr.

[Apache Licentie 2.0](LICENSE)