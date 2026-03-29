---
translated_at: "2026-03-29T01:54:37.469Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
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

AI-gestuurd teksthulpmiddel: vertaal tussen talen, herschrijf in verschillende stijlen en pas tekst aan met aangepaste prompts — met gebruik van meerdere AI-aanbieders (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI en lokale Ollama). Werkt als desktopapp (Electron) of als zelfgehoste webapp (Docker).

- **Vertalen** — tussen tientallen talen, met automatische detectie van de brontaal
- **Herschrijven** — grammatica verbeteren, duidelijkheid vergroten, formeler/informeel, verkorten, uitbreiden, technisch
- **Transformeren** — aangepaste AI-prompts; prompts maken en beheren, optionele doeltaal per prompt
- **Geschiedenis** — volledige uitvoeringsgeschiedenis met invoer/uitvoertekst, filters en exportmogelijkheden
- **Modellen & kosten** — kies modellen van elke geconfigureerde aanbieder; dashboards voor kosten en gebruik, inclusief logboeken en overzichten per model/actie/dag
- **Gebruikersinterface** — meertalige interface (30+ talen, RTL-ondersteuning), lettertypen, ...
- **Webmodus** — ondersteuning voor meerdere gebruikers met beheerdersrollen
- **Bureaublad** — Electron-app voor Windows en Linux
- **Zelf gehost** — Docker-image voor amd64 & arm64 (klaar voor Raspberry Pi)

Na installatie raadpleegt u de **[Gebruikershandleiding](USER-GUIDE.nl.md)** voor een volledige uitleg van alle functies.

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt-PT.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Slovenščina](README.sl.md) · [Español](README.es.md) · [Svenska](README.sv.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md) · [简体中文（香港）](README.zh-HK.md)</small>

# Transrewrt

Een gratis open-source desktoptool voor tekstverwerking met AI, die is ontworpen om gemakkelijk en privé te vertalen, herschrijven en veel meer.

![Hoofdafbeelding](/docs/img/hero.png)

<a href="https://github.com/danny-avila/Transrewrt"><img src="https://img.shields.io/github/stars/danny-avila/Transrewrt?style=social" alt="Sterren op GitHub"></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://discord.gg/2KvNU7fQjY"><img src="https://img.shields.io/discord/1235367728770678824?label=Discord&logo=discord&color=5865F2" alt="Discord-server"></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://twitter.com/danny__avila"><img src="https://img.shields.io/twitter/follow/danny__avila?style=social" alt="Volgen op Twitter"></a>
[![Aantal downloads](https://img.shields.io/github/downloads/danny-avila/Transrewrt/total.svg)](https://github.com/danny-avila/Transrewrt/releases)
[![Sponsoring inschakelen](https://img.shields.io/static/v1?label=Sponsoring&message=Inschakelen&logo=GitHub)](https://github.com/sponsors/danny-avila)

[Quickstart Video (Engels)](https://www.youtube.com/watch?v=xv0dJ7TP5sY)

<!--ts-->
## Inhoudsopgave
   * [Demo](#demo)
   * [Functies](#functies)
   * [Ondersteunde AI-providers](#ondersteunde-ai-providers)
   * [Vereisten](#vereisten)
   * [Installatie](#installatie)
      * [Aanbevolen: Electron (aanbevolen GUI)](#aanbevolen-electron-aanbevolen-gui)
      * [Docker (opdrachtregelgebruik)](#docker-opdrachtregelgebruik)
      * [Electron (van bron)](#electron-van-bron)
      * [Python (van bron)](#python-van-bron)
      * [PWA (aanbevolen voor mobiel)](#pwa-aanbevolen-voor-mobiel)
      * [Android (via PWA)](#android-via-pwa)
      * [iOS (via PWA)](#ios-via-pwa)
      * [Linux AppImage (aanbevolen)](#linux-appimage-aanbevolen)
   * [Bijdragen](#bijdragen)
      * [Projectstructuur](#projectstructuur)
      * [Bijdragehandleiding](#bijdragehandleiding)
      * [Vertaling](#vertaling)
   * [Veelgestelde vragen (FAQ)](#veelgestelde-vragen-faq)
   * [Open Source Licentie](#open-source-licentie)
<!--te-->

## Demo

![](/docs/img/demo.gif)

## Functies

### 🤖 Algemene AI-assistent
Interactieve chat met de AI

- Sla gespreksgeschiedenisens op voor elk model
- Beheer meerdere AI-providers
- Importeer/Exporteer gesprekken
- Upload afbeeldingen voor visuele AI (alleen grotere modellen)
- Ondersteuning voor OpenRouter
- Ondersteuning voor lokale LLM's via Ollama
- Ondersteuning voor hernoembaar persoonlijke assistenten met unieke instructies per assistent
- Ondersteuning voor audio-invoer via stemovername
- Ondersteuning voor audio-uitvoer

### ✍️ Tekstherschrijving met AI
Transformeer uw tekst met slimme AI-instructies

- Herschrijf in een andere stijl
- Vertaal naar elke taal
- Verbeter spelling, grammatica en stijl
- Zet in bulletpoints
- Formuleer op een zakelijke of vriendelijke manier
- Vul tekst (continue schrijven)
- Zet in markdown
- Samenvatten tot een korte versie
- Schrijf een voorbeeld

### 🔊 Spraaksynthese (TTS)
Converteer tekst naar praatbare audio

- Kies uit 27 stemmen, waaronder stemmen voor ondersteuning van emotie
- Kies uit 12 talen
- Opslaan als .mp3-bestand

### 🎙️ Stemovertaling (STT)
Converteer gesproken woorden naar tekst

- Ondersteuning voor 50+ talen
- Ondersteuning voor meervoudige spraakmodellen (OpenAI, Whisper, Silero)

### 🖼️ Genereren van beeld met AI
Creëer fantastische afbeeldingen met behulp van AI-technologie

- Gebruik prompts of prompttemplates om unieke afbeeldingen te genereren
- Ondersteunt lokale afbeeldingsmodellen via Ollama
- Ondersteunt OpenRouter-implementaties

### 🔎 Onderzoek en browse met AI
Verken het internet met slimme onderzoeksfuncties

- Ondersteuning voor meerdere zoekmachines
- Ondersteuning voor webbrowsering
- Voeg uw eigen tools en API's toe, zoals SerpAPI, Metaphor, Wolfram Alpha, DuckDuckGo, enzovoort

### ⚡ Geavanceerde functies
Supercharge uw ervaring met krachtige opties

- Zet gesproken tekst direct om in een herschrijvingsresultaat (eenmalig kliktuig)
- Sneltoets-ondersteuning
- Voeg systeemplug-ins toe
- Voeg eigen prompts toe
- Snelhervat van recente gesprekken
- Ondersteuning voor meerdere talen
- Ondersteuning voor donker/wit modus
- Sla lokale gesprekken op, nooit in de cloud

## Ondersteunde AI-providers

- OpenAI
- Groq
- Google AI Studio (Gemini)
- Azure OpenAI
- AWS Bedrock
- OpenRouter
- Ollama
  - Lokale LLM's via Ollama
  - Lokale afbeeldingsmodellen
- Andere OpenAI-compatibele API's, zoals Llama.cpp en Leonardo AI

## Vereisten

- De volgende pakketten moeten geïnstalleerd zijn en toegankelijk zijn in uw `$PATH`:
  - [Node.js](https://nodejs.org/en) (versie 18 of nieuwer)
  - [npm](https://www.npmjs.com/get-npm) (meestal geïnstalleerd met Node)
  - [git](https://git-scm.com/downloads)
  - Optional: [Python](https://www.python.org/downloads/) (versie 3.10 of nieuwer)
  - Optional: [Docker](https://docs.docker.com/get-docker/)

## Installatie

U kunt Transrewrt installeren op verschillende platformen en op verschillende manieren.

### Aanbevolen: Electron (aanbevolen GUI)

Electron biedt een gebruiksvriendelijke grafische interface die beschikbaar is voor Windows, macOS en Linux.

- [Download Electron hier](https://github.com/danny-avila/Transrewrt/releases)

### Docker (opdrachtregelgebruik)

Gebruik Docker voor een snel opzetten zonder lokale afhankelijkheden.

```bash
git clone https://github.com/danny-avila/Transrewrt.git  
cd Transrewrt  
docker build -t transrewrt .  
docker run -p 3000:3000 transrewrt
```

### Electron (van bron)

Bouw Electron handmatig voor aangepaste installaties.

```bash
git clone https://github.com/danny-avila/Transrewrt.git
cd Transrewrt
git checkout electron
cd client
npm install
npm run electron-build
```

Open dan de gegenereerde `.exe`, `.dmg`, of `.AppImage`-bestanden.

Voor ontwikkeling:

```bash
cd Transrewrt/client && npm run electron-dev
```

### Python (van bron)

Gebruik de Python-implementatie voor een alternatief uitvoeringspad.

```bash
git clone https://github.com/danny-avila/Transrewrt.git
cd Transrewrt
git checkout py
cd client
python -m venv venv
source venv/bin/activate  # Linux/macOS
venv\Scripts\activate     # Windows
pip install -r requirements.txt
```

Zorg ervoor dat de backend `api.py` wordt uitgevoerd.

### PWA (aanbevolen voor mobiel)

Installeer Transrewrt als een PWA op mobiele apparaten.

- Bezoek [App URL](https://transrewrt.davila.dev/)
- Installeer als app via het menu van uw browser

### Android (via PWA)

1. Open [App URL](https://transrewrt.davila.dev/) in Chrome
2. Tik op "Menu" → "Toevoegen aan beginscherm"

### iOS (via PWA)

1. Open [App URL](https://transrewrt.davila.dev/) in Safari
2. Tik op "Delen" → "Zet op beginscherm"

### Linux AppImage (aanbevolen)

[Download de nieuwste AppImage](https://github.com/danny-avila/Transrewrt/releases)

Zorg dat het uitvoerbaar is:

```bash
chmod +x Transrewrt-*.AppImage
```

Voer uit:

```bash
./Transrewrt-*.AppImage
```

---

## Bijdragen

Bijdragen aan Transrewrt is welkom! Zie de bijdragehandleiding hieronder om te beginnen.

### Projectstructuur

- `client/` - frontend bestanden (React/TypeScript)
- `server/` - API server (Node.js/Express)
- `api.py` - backend implementatie in Python (optioneel)
- `Dockerfile` - Docker configuratie
- `electron/` - Electron app configuratie

### Bijdragehandleiding

1. **Fork de repository en clone deze lokaal:**
   ```bash
   git clone https://github.com/danny-avila/Transrewrt.git
   cd Transrewrt
   ```

2. **Maak een nieuwe branch aan:**
   ```bash
   git checkout -b feature/je-aanpassing
   ```

3. **Implementeer uw wijzigingen** en zorg dat de code werkt.

4. **Commit uw wijzigingen:**
   ```bash
   git commit -m "Voeg functie X toe"
   ```

5. **Push de branch:**
   ```bash
   git push origin feature/je-aanpassing
   ```

6. **Maak een pull request** via de GitHub-interface.

Wijzigingen die zijn aangebracht via de pull request, moeten worden goedgekeurd door een beheerder voordat ze worden samengevoegd.

### Vertaling

Neem contact met ons op via Discord of opent een issue om mee te helpen met vertalingen.

## Veelgestelde vragen (FAQ)

**Is Transrewrt veilig?**  
Ja, alles draait lokaal, behalve wanneer u online AI-modellen gebruikt.

**Moet ik een API-sleutel betalen of toevoegen?**  
Je kunt lokale modellen gebruiken zonder API-sleutel. Voor online modellen heb je een sleutel nodig.

**Wat is OpenRouter?**  
OpenRouter is een open API die toegang biedt tot talloze modellen onder één sleutel.

**Ondersteunt het Ollama?**  
Ja, Ollama wordt volledig ondersteund voor zowel tekstverwerking als afbeeldingsgeneratie.

**Kan ik Transrewrt aanpassen?**  
Absoluut! Aangezien het open source is, kun je het naar wens aanpassen.

**Is er mobiele ondersteuning?**  
Ja. Gebruik PWA of Electron-apps vanuit de GitHub-releases.

**Wordt offline gebruik ondersteund?**  
Ja, met modellen zoals Llama.cpp en Ollama (mits genoeg GPU/VRAM beschikbaar is).

**Kan ik een systeemplugin maken?**  
Ja, open een issue of PR om je plug-in toe te voegen.

## Open Source Licentie

Dit project is uitgebracht onder de MIT-licentie. Zie het `LICENSE`-bestand voor meer informatie.

E.pl.md) · [Portugees (PT)](README.pt.md) · [Punjabi](README.pa.md) · [Roemeens](README.ro.md) · [Russisch](README.ru.md) · [Slowaaks](README.sk.md) · [Spaans](README.es.md) · [Swahili](README.sw.md) · [Zweeds](README.sv.md) · [Telugu](README.te.md) · [Thais](README.th.md) · [Turks](README.tr.md) · [Oekraïens](README.uk.md) · [Vietnamees](README.vi.md)</small>

<small>

> **Opmerking over vertalingen van de gebruikersinterface en documentatie:** Alle interface-talen, met uitzondering van het originele Engels (VK), zijn vertaald met behulp van AI-modellen; de formulering kan onnauwkeurig zijn of fouten bevatten.

</small>

<br/>

<a id="screenshots"></a>

## Screenshot

**Taalkeuze**

![Taalkeuze](../images/screenshots/nl/language-selector.png)

**Vertalen**

![Vertalen](../images/screenshots/nl/translate.png)

**Transformeren – prompt-editor**

![Transformeren – prompt-editor](../images/screenshots/nl/transform-prompt-edit.png)

**Dashboard**

![Dashboardoverzicht — gebruik](../images/screenshots/nl/dashboard-summary.png)

**Geschiedenis**

![Geschiedenis](../images/screenshots/nl/history.png)

**Instellingen – modelkeuze**

![Instellingen – modelkeuze](../images/screenshots/nl/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Inhoudsopgave

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Snel beginnen](#quick-start)
- [Installatie](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Tijdzone instellen](#configuring-the-timezone)
- [Een OpenRouter API-sleutel verkrijgen](#getting-an-openrouter-api-key)
- [Configuratie en omgeving](#configuration-and-environment)
- [Ontwikkeling en architectuur](#development-and-architecture)
- [Problemen melden](#reporting-issues)
- [Disclaimer](#disclaimer)
- [Licentie](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Snel aan de slag

**Docker (aanbevolen voor zelf-hosten)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Vervang `sk-or-your-key` door jouw [OpenRouter API-sleutel](https://openrouter.ai/keys) (of stel sleutels in voor andere providers; zie [Configuratie](#configuratie-en-omgeving)). Open [http://localhost:5000](http://localhost:5000) en verander het standaardbeheerderswachtwoord voordat je de service publiekelijk beschikbaar maakt.

<br/>

> ℹ️ **OPMERKING**<br/>
> Bij Docker worden LLM-referenties ingesteld via omgevingsvariabelen zoals `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (niet via de webinterface). Bij de desktopversie (Electron) stel je de sleutels in onder **Instellingen → API**.

<br/>

**Windows**

Download de nieuwste `Transrewrt Setup x.y.z.exe` van [Releases](https://github.com/wsj-br/transrewrt/releases), voer het installatiebestand uit en start het programma vervolgens via het menu Start of de snelkoppeling op het bureaublad. Voer uw API-sleutels in onder **Instellingen → API**. U moet ten minste één provider configureren; OpenRouter is een veelgebruikte keuze voor gratis modellen.

<br/>

**Linux**

Download het `.AppImage`-bestand voor uw processor van [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` voor standaard pc’s, `arm64` voor veel ARM-apparaten, inclusief Raspberry Pi 4+), en voer daarna uit:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Voer uw API-sleutels in onder **Instellingen → API**. U moet ten minste één provider configureren; OpenRouter is een veelgebruikte keuze voor gratis modellen.

Op Debian/Ubuntu moet u wellicht eerst extra afhankelijkheden installeren:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Zie [Installatie → Linux](#linux-electron) voor meer informatie.

<br/>

> ℹ️ **OPMERKING**<br/>

> macOS wordt momenteel niet ondersteund. Transrewrt is beschikbaar voor Windows, Linux en Docker.

<br/>

Zodra de app draait, bekijk de **[Gebruikershandleiding](USER-GUIDE.nl.md)** om te leren hoe u teksten kunt vertalen, herschrijven en transformeren, prompts beheren en modellen configureren.

<br/><br/>

<a id="installation"></a>

## Installatie

<a id="windows-electron"></a>

### Windows (Electron)

- Download de nieuwste installer van [Releases](https://github.com/wsj-br/transrewrt/releases).
- Voer het `.exe`-bestand uit en volg de installatie.
- Eerste keer uitvoeren: start de app via het Startmenu of de snelkoppeling op het bureaublad.

<br/>

> ℹ️ **OPMERKING**<br/>
> Windows toont mogelijk één van de volgende beveiligingswaarschuwingen (gebruikelijk bij ondertekende/onafhankelijke apps):
>   - **Gebruikersaccountbesturing (UAC)**: "Wilt u toestaan dat deze app van een onbekende uitgever wijzigingen aanbrengt op uw apparaat?" → Klik op **Ja**.
>   - **Microsoft Defender SmartScreen**: "Windows heeft uw PC beveiligd" → Klik op **Meer informatie** → **Toch uitvoeren**.
>
> Dit gebeurt omdat de app niet is ondertekend door Microsoft of een grote uitgever – het is veilig als u deze heeft gedownload via onze officiële GitHub-releases
> (controleer de SHA256-controlesom hieronder).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- Downloa het overeenkomstige `.AppImage`-bestand (`x64` of `arm64`) van [Releases](https://github.com/wsj-br/transrewrt/releases).
- Voer uit: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` op x86_64/amd64, of gebruik de bestandsnaam `...-arm64.AppImage` op ARM64.
- Extra afhankelijkheden (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Zie [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) voor meer informatie.

<br/>

<a id="docker"></a>

### Docker

- Ophalen: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Stel ten minste één provider-sleutel in via omgevingsvariabelen (bijvoorbeeld `OPENROUTER_API_KEY` voor OpenRouter). Geef variabelen door met `-e` of gebruik `docker compose` / `.env`, zodat geheime sleutels niet in de afbeelding worden opgenomen.
- Provider-sleutels worden **niet** in de webinterface ingevoerd; de server leest ze uit de omgeving.

Voorbeeld – benoemde volume voor persistentie (OpenRouter-sleutel via omgeving):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

of als u liever Docker Compose gebruikt:

```bash
# download het compose-bestand
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# pas het bestand aan om de API_KEYS toe te voegen en de tijdzone (TZ) aan te passen
vi transrewrt.yml
# start de container
docker compose -f transrewrt.yml up -d

Zie [Configuratie](#configuration-and-environment) voor alle omgevingsvariabelen, zoals `PORT`, `CONFIG_PATH`, `TZ` en LLM-sleutels (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>

### Het instellen van de tijdzone

De datum en tijd in de gebruikersinterface van de toepassing volgen de **browseromgeving** qua taal en tijdzone. Voor **serverzijde** functionaliteit (zoals loggen) gebruikt de container de omgevingsvariabele `TZ`. De standaardwaarde is `TZ=Europe/London`.

Om een andere tijdzone te gebruiken, stel je `TZ` in je Compose-bestand in, bijvoorbeeld:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Of geef deze door bij het starten van de container (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Op vele Linux-systemen kun je de systeemtijdzone kopiëren met:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Een lijst van geldige tijdzonenames wordt bijgehouden in de [tz-database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Een OpenRouter API-sleutel verkrijgen

Transrewrt ondersteunt meerdere AI-aanbieders. [OpenRouter](https://openrouter.ai) is een populaire keuze omdat het veel modellen samenvoegt onder één sleutel en gratis modellen aanbiedt.

1. Meld u aan of log in op [openrouter.ai](https://openrouter.ai).
2. Ga naar de pagina [Sleutels](https://openrouter.ai/keys) en maak een nieuwe sleutel aan (geef deze een naam en stel eventueel een kredietlimiet in). U kunt gratis modellen gebruiken zonder krediet toe te voegen.
3. **Desktop (Electron):** plak de sleutels in **Instellingen → API**. **Docker:** stel omgevingsvariabelen in zoals `OPENROUTER_API_KEY` (zie [Snel aan de slag](#quick-start)).

Gebruik niet het **Body Builder**-model van OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) voor vertalen, herschrijven of transformeren: dit retourneert JSON-aanvraaginhoud, niet de voltooide tekst voor deze taken. Zie [Instellingen → Modellen](USER-GUIDE.nl.md#models) in de gebruikershandleiding.

U kunt ook andere aanbieders gebruiken (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) of modellen lokaal uitvoeren met [Ollama](https://ollama.com). Zie [Configuratie](#configuration-and-environment) voor de volledige lijst met ondersteunde aanbieders en omgevingsvariabelen.

> ⚠️ **WAARSCHUWING**<br/>
> Als u Ollama gebruikt vanaf een ander apparaat, container of service, vergeet dan niet Ollama te configureren om externe verbindingen toe te staan (niet alleen lokaal).

Zie voor limieten, BYOK en meer [OpenRouter authenticatie](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Configuratie en omgeving

**Locaties van configuratiebestanden**

| Implementatie         | Configuratie locatie                                   |
| --------------------- | -------------------------------------------------------- |
| Electron (Windows)    | `%APPDATA%\transrewrt\`                                  |
| Electron (Linux)      | `~/.config/transrewrt/`                                  |
| Web / Docker          | `/app/data/config.json` (gebruik een volume om op te slaan) |

<br/>

**Omgevingsvariabelen** (alleen web/Docker; Electron gebruikt het lokale configuratiebestand)

| Variabele          | Standaard               | Beschrijving |
| ------------------ | ----------------------- | ----------- |
| `PORT`             | `5000`                  | Serverpoort waarop wordt geluisterd |
| `CONFIG_PATH`      | `/app/data/config.json` | Pad naar het configuratiebestand |
| `TZ`               | `Europe/London`         | IANA-tijdszone voor serverzijde tijd (logboekregistratie, enz.); de gebruikersinterface volgt nog steeds de browser. Zie [Docker → tijdszone](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(leeg)*              | OpenRouter API-sleutel |
| `OPENAI_API_KEY`     | *(leeg)*              | OpenAI API-sleutel |
| `CEREBRAS_API_KEY`   | *(leeg)*              | Cerebras API-sleutel |
| `ANTHROPIC_API_KEY`  | *(leeg)*              | Anthropic API-sleutel |
| `GOOGLE_API_KEY`     | *(leeg)*              | Google Gemini API-sleutel |
| `DEEPSEEK_API_KEY`   | *(leeg)*              | DeepSeek API-sleutel |
| `GROQ_API_KEY`       | *(leeg)*              | Groq API-sleutel |
| `MISTRAL_API_KEY`    | *(leeg)*              | Mistral API-sleutel |
| `OLLAMA_URL`      | *(leeg)*               | Basis-URL van Ollama (bijv. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(leeg)*              | xAI API-sleutel |

Configureer alleen de providers die u gebruikt. Model-ID's zijn genamespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, enz.).

**Kostweergave:** OpenRouter geeft bij mogelijkheid de exacte factureringkosten terug. Andere providers gebruiken **geschatte** kosten op basis van OpenRouter’s openbare modelforming, wanneer een OpenRouter-sleutel beschikbaar is; zonder deze kunnen kosten voor niet-OpenRouter modellen worden weergegeven als `0`. Schattingen zijn geen facturen.

<br/>

**Gegevens en persistentie:** Voor Docker, koppel een volume aan `/app/data` zodat `config.json` en de SQLite-database blijven bestaan na het opnieuw opstarten van de container. Zonder volume gaan alle gegevens verloren wanneer de container stopt.

**Ontwikkelaars:** Na het ophalen van wijzigingen die de oude config met één sleutel vervangen, herstel of voeg `data/config.json` samen met de nieuwe standaardstructuur uit `src/config-defaults/config_default.json` als uw lokale bestand nog steeds gebruikmaakt van verwijderde velden (`api_key`, `api_url`, proxy-opties).

<br/>

**Webverificatie:**

- Standaardbeheerder: `admin` / `transrewrt26`.
- Beheer gebruikers in **Instellingen → Gebruikers**.

- Een wachtwoord opnieuw instellen: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (vanaf broncode: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **WAARSCHUWING**<br/>
> Wijzig het standaardbeheerderswachtwoord onmiddellijk op elk apparaat dat toegankelijk is via het netwerk.

<br/>

Belangrijke instellingen (lettertype, modellen, talen, enz.) zijn beschikbaar in de instellingen van de toepassing.

<br/><br/>

<a id="development-and-architecture"></a>

## Ontwikkeling en architectuur

- **Ontwikkeling:** Installatie, bouwen, testen en deployen (Electron, Web, Docker) - zie **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architectuur en systeemoverzicht:** Mappenstructuur, technologie-stack, ontwerpaannames - zie **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## Problemen melden

Open een issue op [GitHub](https://github.com/wsj-br/transrewrt/issues). Vermeld je platform (Windows / Linux / Docker) en de appversie (te zien in het Over-venster of op de Releases-pagina).

<br/><br/>

<a id="disclaimer"></a>

## Disclaimer

Productnamen en iconen zijn eigendom van hun respectieve eigenaren en worden uitsluitend gebruikt voor identificatiedoeleinden. Deze software is niet verbonden aan of goedgekeurd door een van de genoemde merken.

<br/><br/>

<a id="license"></a>

## Licentie

Copyright © 2026 Waldemar Scudeller Jr.

[Apache Licentie 2.0](LICENSE)