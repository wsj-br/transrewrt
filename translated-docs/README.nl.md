---
translation_last_updated: '2026-03-31T22:57:07.538Z'
source_file_mtime: '2026-03-31T22:20:13.182Z'
source_file_hash: bf6416a9ca259a19
translation_language: nl
source_file_path: README.md
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Inhoudsopgave**

- [Schermafbeeldingen](#screenshots)
- [Inhoudsopgave](#table-of-contents)
- [Snel aan de slag](#quick-start)
- [Installatie](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Tijdzone configureren](#configuring-the-timezone)
- [Een OpenRouter API-sleutel verkrijgen](#getting-an-openrouter-api-key)
- [Configuratie en omgeving](#configuration-and-environment)
- [Ontwikkeling en architectuur](#development-and-architecture)
- [Problemen melden](#reporting-issues)
- [Disclaimer](#disclaimer)
- [Licentie](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

**Lees in andere talen:**
[Engels (UK)](../README.md) · [Portugees (BR)](README.pt-BR.md) · [Arabisch](README.ar.md) · [Bengaals](README.bn.md) · [Catalaans](README.ca.md) · [Vereenvoudigd Chinees](README.zh-CN.md) · [Traditioneel Chinees](README.zh-TW.md) · [Kroatisch](README.hr.md) · [Tsjechisch](README.cs.md) · [Nederlands](README.nl.md) · [Engels (VS)](README.en-US.md) · [Filipijns](README.tl.md) · [Frans](README.fr.md) · [Duits](README.de.md) · [Grieks](README.el.md) · [Hindi](README.hi.md) · [Hongaars](README.hu.md) · [Italiaans](README.it.md) · [Japans](README.ja.md) · [Basa Jawa](README.jv.md) · [Koreaans](README.ko.md) · [Maleis](README.ms.md) · [Perzisch](README.fa.md) · [Pools](README.pl.md) · [Portugees (PT)](README.pt.md) · [Punjabi](README.pa.md) · [Roemeens](README.ro.md) · [Russisch](README.ru.md) · [Slowaaks](README.sk.md) · [Spaans](README.es.md) · [Swahili](README.sw.md) · [Zweeds](README.sv.md) · [Telugu](README.te.md) · [Thais](README.th.md) · [Turks](README.tr.md) · [Oekraïens](README.uk.md) · [Vietnamees](README.vi.md)

> **Opmerking over vertalingen van de interface en documentatie:** Alle talen van de interface, behalve het oorspronkelijke Engels (UK),
> zijn vertaald met behulp van AI-modellen; de formulering kan onnauwkeurig zijn of fouten bevatten.

## Schermafbeeldingen

**Taalkeuze**

Taalkeuze

**Vertalen**

Vertalen

**Transformatie - prompteditor**

Transformatie - prompt-editor

**Dashboard**

Dashboard samenvatting — gebruik

**Geschiedenis**

Geschiedenis

**Instellingen - modelselectie**

Instellingen - modelselectie

## Inhoudsopgave

- [Snel aan de slag](#quick-start)
- [Installatie](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Tijdzone configureren](#configuring-the-timezone)
- [Een OpenRouter API-sleutel verkrijgen](#getting-an-openrouter-api-key)
- [Configuratie en omgeving](#configuration-and-environment)
- [Ontwikkeling en architectuur](#development-and-architecture)
- [Problemen melden](#reporting-issues)
- [Disclaimer](#disclaimer)
- [Licentie](#license)

## Snel aan de slag

**Docker (aanbevolen voor self-hosting)**

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

> ℹ️ **OPMERKING**  
>
> In Docker worden LLM-referenties ingesteld met omgevingsvariabelen zoals `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (niet in de webinterface). Op desktop (Electron) configureert u de sleutels in **Instellingen → API**.

**Windows**

Download de nieuwste `Transrewrt Setup x.y.z.exe` van [Releases](https://github.com/wsj-br/transrewrt/releases), voer de installer uit en start vervolgens via het Startmenu of een bureaubladsnelkoppeling. Voer je API-sleutels in bij **Instellingen → API**. Je moet ten minste één provider configureren; OpenRouter is veelgebruikt voor gratis modellen.

**Linux**

Download het `.AppImage`-bestand voor je CPU van [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` voor typische pc's, `arm64` voor veel ARM-apparaten, inclusief Raspberry Pi 4+), en voer daarna uit:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Voer je API-sleutels in bij **Instellingen → API**. Je moet ten minste één provider configureren; OpenRouter is veelgebruikt voor gratis modellen.

**Consoleberichten:** Gepackagde Linux-versies (`x64` en `arm64` AppImages) onderdrukken Node-verouderingswaarschuwingen in de terminal (bijvoorbeeld de ingebouwde `punycode`-module). Als Chromium GPU-/EGL-fouten zoals “GLES3 wordt niet ondersteund” afdrukt, maar de app werkt, kunt u deze dempen door hardwareversnelling uit te schakelen:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Dit geldt ook voor amd64; wijzig de bestandsnaam zodat deze overeenkomt met uw download. Zie [Installatie → Linux (Electron)](#linux-electron) voor iets meer detail.

Op Debian/Ubuntu hebt u mogelijk extra **runtime**-bibliotheken nodig die Chromium verwacht (vaak al aanwezig op volledige desktops). Gebruik **`libnotify4`** voor desktopmeldingen—**niet** `libnotify-dev` (dat is voor het bouwen van software, niet voor het uitvoeren van de gepackagde AppImage):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

Minimalistische of aangepaste installaties kunnen nog steeds mislukken met een ontbrekend `.so`; installeer het pakket dat in de foutmelding wordt genoemd (veelvoorkomende extra's: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Sommige omgevingen hebben FUSE nodig om AppImages uit te voeren (bijvoorbeeld `libfuse2` op Ubuntu 22.04+), of gebruik `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

Zie [Installatie → Linux](#linux-electron) voor dezelfde samenvatting.

> ℹ️ **OPMERKING**  
>
> macOS wordt momenteel niet ondersteund. Transrewrt is beschikbaar voor Windows, Linux en Docker.

Zodra de app draait, bekijk de **[Gebruikershandleiding](USER-GUIDE.nl.md)** om te leren hoe je tekst vertaalt, herschrijft en transformeert, prompts beheert en modellen configureert.

## Installatie

### Windows (Electron)

- Download de nieuwste installer van [Releases](https://github.com/wsj-br/transrewrt/releases).
- Voer het `.exe`-bestand uit en volg de installatie.
- Eerste keer: start de app via het Startmenu of een bureaubladsnelkoppeling.

> ℹ️ **OPMERKING**  
> 
> Windows kan een van deze beveiligingswaarschuwingen weergeven (normaal bij ondertekende/indie apps):
> 
> - **User Account Control (UAC)**: "Wilt u toestaan dat deze app van een onbekende uitgever wijzigingen aanbrengt op uw apparaat?" → Klik op **Ja**.
> - **Microsoft Defender SmartScreen**: "Windows heeft uw PC beveiligd" → Klik op **Meer informatie** → **Toch uitvoeren**.
> 
> Dit gebeurt omdat de app niet is ondertekend door Microsoft of een grote uitgever — het is veilig als u deze hebt gedownload uit onze officiële GitHub-releases
>  (controleer de SHA256-controlesom hieronder).

### Linux (Electron)

- Download het bijbehorende `.AppImage`-bestand (`x64` of `arm64`) van [Releases](https://github.com/wsj-br/transrewrt/releases).
- Uitvoeren: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` op x86_64/amd64, of gebruik de `...-arm64.AppImage`-bestandsnaam op ARM64.
- **Debian/Ubuntu runtime-bibliotheken** (Electron/Chromium; hetzelfde als [Snel starten → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — gebruik **`libnotify4`**, niet `libnotify-dev`. Op minimale systemen, installeer eventuele ontbrekende `.so`-bestanden die in de terminal worden gemeld; add-ons zoals `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2` zijn vaak nodig. AppImage heeft mogelijk `libfuse2` nodig (Ubuntu 22.04+) of `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`.
- **GPU-berichten:** Chromium kan GPU- of EGL-initialisatiefouten melden op sommige systemen (vooral ARM); de app kan nog steeds normaal draaien. Om deze berichten te vermijden, start u de app met hardwareversnelling uitgeschakeld: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (of uw `arm64`-bestandsnaam).

### Docker

- Download de image: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Stel minstens één provider-sleutel in via omgevingsvariabelen (bijvoorbeeld `OPENROUTER_API_KEY` voor OpenRouter). Geef variabelen door met `-e` of via `docker compose` / `.env`, zodat geheimen niet in de image worden opgeslagen.
- Provider-sleutels worden **niet** ingevoerd in de webinterface; de server leest ze uit de omgeving.

Voorbeeld - benoemde volume voor persistentie (OpenRouter-sleutel via omgeving):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

of als u liever Docker Compose gebruikt, gebruik dan:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Zie [Configuratie](#configuration-and-environment) voor alle omgevingsvariabelen, zoals `PORT`, `CONFIG_PATH`, `TZ` en LLM-sleutels (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

### Het tijdzone instellen

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

## Een OpenRouter API-sleutel verkrijgen

Transrewrt ondersteunt meerdere AI-providers. [OpenRouter](https://openrouter.ai) is een populaire keuze omdat het veel modellen onder één sleutel bundelt en gratis modellen aanbiedt.

1. Meld u aan of log in op [openrouter.ai](https://openrouter.ai).
2. Ga naar de pagina [Keys](https://openrouter.ai/keys) en maak een nieuwe sleutel aan (geef deze een naam, en stel eventueel een kredietlimiet in). U kunt gratis modellen gebruiken zonder krediet toe te voegen.
3. **Desktop (Electron):** plak de sleutels in **Instellingen → API**. **Docker:** stel omgevingsvariabelen in zoals `OPENROUTER_API_KEY` (zie [Snel aan de slag](#quick-start)).

Gebruik OpenRouter’s **Body Builder**-model (`[openrouter/bodybuilder](https://openrouter.ai/openrouter/bodybuilder)`) niet voor vertalen, herschrijven of transformeren: het retourneert JSON-aanvraagpayloads, niet de voltooide tekst voor deze taken. Zie [Instellingen → Modellen](USER-GUIDE.nl.md#models) in de Gebruikershandleiding.

U kunt ook andere providers gebruiken (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) of modellen lokaal uitvoeren met [Ollama](https://ollama.com). Zie [Configuratie](#configuration-and-environment) voor de volledige lijst met ondersteunde providers en omgevingsvariabelen.

> ⚠️ **WAARSCHUWING**  
> 
> Als u Ollama gebruikt vanaf een ander apparaat, container of service, vergeet dan niet Ollama te configureren om externe verbindingen toe te staan (niet alleen localhost).

Voor limieten, BYOK en meer, zie [OpenRouter authenticatie](https://openrouter.ai/docs/api/reference/authentication).

## Configuratie en omgeving

**Locaties van configuratiebestanden**

| Implementatie         | Configuratielocatie                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gebruik een volume om door te zetten) |

**Omgevingsvariabelen** (alleen web/Docker; Electron gebruikt het lokale configuratiebestand)

| Variabele             | Standaard                 | Beschrijving                                                                                                                 |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `PORT`               | `5000`                  | Serverluisterpoort                                                                                                       |
| `CONFIG_PATH`        | `/app/data/config.json` | Pad naar het configuratiebestand                                                                                                     |
| `TZ`                 | `Europe/London`         | IANA-tijdzone voor serverzijde tijd (loggen, enz.); de gebruikersinterface volgt nog steeds de browser. Zie [Docker → tijdzone](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(leeg)*               | OpenRouter API-sleutel                                                                                                          |
| `OPENAI_API_KEY`     | *(leeg)*               | OpenAI API-sleutel                                                                                                              |
| `CEREBRAS_API_KEY`   | *(leeg)*               | Cerebras API-sleutel                                                                                                            |
| `ANTHROPIC_API_KEY`  | *(leeg)*               | Anthropic API-sleutel                                                                                                           |
| `GOOGLE_API_KEY`     | *(leeg)*               | Google Gemini API-sleutel                                                                                                       |
| `DEEPSEEK_API_KEY`   | *(leeg)*               | DeepSeek API-sleutel                                                                                                            |
| `GROQ_API_KEY`       | *(leeg)*               | Groq API-sleutel                                                                                                                |
| `MISTRAL_API_KEY`    | *(leeg)*               | Mistral API-sleutel                                                                                                             |
| `OLLAMA_URL`         | *(leeg)*               | Ollama basis-URL (bijv. `http://host.docker.internal:11434`)                                                                  |
| `XAI_API_KEY`        | *(leeg)*               | xAI API-sleutel                                                                                                                 |

Configureer alleen de providers die u gebruikt. Model-ID's zijn genamespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, enz.).

**Kostenweergave:** OpenRouter retourneert de exacte factuurkosten indien van toepassing. Andere providers gebruiken **geschatte** kosten op basis van de openbare prijzen van OpenRouter als een OpenRouter-sleutel beschikbaar is; zonder deze kunnen kosten van niet-OpenRouter als `0` worden weergegeven. Schattingen zijn geen facturen.

**Gegevens en persistentie:** Voor Docker, koppel een volume aan `/app/data` zodat `config.json` en de SQLite-database behouden blijven bij het opnieuw opstarten van de container. Zonder een volume gaan alle gegevens verloren wanneer de container stopt.

**Ontwikkelaars:** Na het binnenhalen van wijzigingen die de oude configuratie met één sleutel vervangen, reset of voeg `data/config.json` samen met de nieuwe standaardstructuur uit `src/config-defaults/config_default.json` als uw lokale bestand nog steeds gebruikmaakt van verwijderde velden (`api_key`, `api_url`, proxyopties).

**Webauthenticatie:**

- Standaard beheerder: `admin` / `transrewrt26`.
- Beheer gebruikers in **Instellingen → Gebruikers**.
- Wachtwoord opnieuw instellen: `docker exec <container> reset-web-password '<gebruikersnaam>' '<nieuw-wachtwoord>'`
  (vanuit broncode: `pnpm run reset-web-password -- <gebruikersnaam> <nieuw-wachtwoord>`)

> ⚠️ **WAARSCHUWING**  
>
> Wijzig het standaardbeheerderswachtwoord onmiddellijk op elke host die toegankelijk is via het netwerk.

Belangrijke instellingen (lettertype, modellen, talen, enz.) zijn beschikbaar in de applicatie-instellingen.

## Ontwikkeling en architectuur

- **Ontwikkeling:** Installatie, builden, testen en implementeren (Electron, Web, Docker) - zie **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architectuur en systeemoverzicht:** Mappenstructuur, technologie-stack, ontwerpbeslissingen - zie **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

## Problemen melden

Open een issue op [GitHub](https://github.com/wsj-br/transrewrt/issues). Vermeld je platform (Windows / Linux / Docker) en appversie (weergegeven in het Over-venster of op de Releases-pagina).

## Disclaimer

Productnamen en pictogrammen behoren toe aan hun respectieve eigenaren en worden alleen gebruikt ter identificatie. Deze software is niet gelieerd aan of goedgekeurd door een van de genoemde merken.

## Licentie

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
