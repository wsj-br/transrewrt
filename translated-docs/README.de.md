---
translation_last_updated: '2026-03-31T22:57:15.881Z'
source_file_mtime: '2026-03-31T22:20:13.182Z'
source_file_hash: bf6416a9ca259a19
translation_language: de
source_file_path: README.md
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Inhaltsverzeichnis**

- [Screenshots](#screenshots)
- [Inhaltsverzeichnis](#table-of-contents)
- [Schnellstart](#quick-start)
- [Installation](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Zeitzone konfigurieren](#configuring-the-timezone)
- [OpenRouter-API-Schlüssel beschaffen](#getting-an-openrouter-api-key)
- [Konfiguration und Umgebung](#configuration-and-environment)
- [Entwicklung und Architektur](#development-and-architecture)
- [Probleme melden](#reporting-issues)
- [Haftungsausschluss](#disclaimer)
- [Lizenz](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

KI-gestütztes Texttool: Übersetzen zwischen Sprachen, Umschreibung in verschiedenen Stilen und Transformation mit benutzerdefinierten Prompts – unter Verwendung mehrerer KI-Anbieter (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI und lokal betriebenes Ollama). Läuft als Desktop-App (Electron) oder als selbstgehostete Web-App (Docker).

- **Übersetzen** — zwischen Dutzenden von Sprachen, mit automatischer Erkennung der Ausgangssprache
- **Umschreibung** — Grammatik korrigieren, Klarheit verbessern, formell/informell, kürzen, erweitern, technisch
- **Transformation** — benutzerdefinierte KI-Prompts; Erstellen und Verwalten von Prompts, optionale Zielsprache pro Prompt
- **Historie** — vollständige Ausführungs-Historie mit Eingabe- und Ausgabetext, Filterung und Export
- **Modelle & Kosten** — Auswahl von Modellen von jedem konfigurierten Anbieter; Kosten- und Nutzungs-Dashboards mit Protokoll, Zusammenfassungen nach Modell/Operation/Tag
- **Benutzeroberfläche (UI)** — mehrsprachige Oberfläche (über 30 Sprachen, Unterstützung für rechts-nach-links-Sprachen), Schriftarten, ...
- **Web-Modus** — Unterstützung für mehrere Benutzer mit Administratorrollen
- **Desktop** — Electron-App für Windows und Linux
- **Selbstgehostet** — Docker-Image für amd64 & arm64 (bereit für Raspberry Pi)

Nach der Installation finden Sie im **[Benutzerhandbuch](USER-GUIDE.de.md)** eine vollständige Anleitung zu allen Funktionen.

**In anderen Sprachen lesen:**
[Englisch (GB)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [Englisch (US)](README.en-US.md) · [Philippinisch](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)

> **Hinweis zu Übersetzungen der Benutzeroberfläche und Dokumentation:** Alle Sprachen der Benutzeroberfläche außer dem Original Englisch (GB)
> wurden mithilfe von KI-Modellen übersetzt; die Formulierungen können ungenau oder fehlerhaft sein.

## Screenshots

**Sprachauswahl**

Sprachauswahl

**Übersetzen**

Übersetzen

**Transformation – Prompt-Editor**

Transformation – Prompt-Editor

**Dashboard**

Dashboard-Zusammenfassung – Nutzung

**Historie**

Historie

**Einstellungen – Modellauswahl**

Einstellungen – Modellauswahl

## Inhaltsverzeichnis

- [Schnellstart](#quick-start)
- [Installation](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Zeitzone konfigurieren](#configuring-the-timezone)
- [OpenRouter-API-Schlüssel erhalten](#getting-an-openrouter-api-key)
- [Konfiguration und Umgebung](#configuration-and-environment)
- [Entwicklung und Architektur](#development-and-architecture)
- [Probleme melden](#reporting-issues)
- [Haftungsausschluss](#disclaimer)
- [Lizenz](#license)

## Schnellstart

**Docker (empfohlen für Self-Hosting)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Ersetzen Sie `sk-or-your-key` durch Ihren [OpenRouter-API-Schlüssel](https://openrouter.ai/keys) (oder setzen Sie Schlüssel anderer Anbieter; siehe [Konfiguration](#configuration-and-environment)). Öffnen Sie [http://localhost:5000](http://localhost:5000) und ändern Sie das Standard-Administrator-Passwort, bevor Sie den Dienst öffentlich zugänglich machen.

> ℹ️ **HINWEIS**  
>
> Bei Docker werden LLM-Anmeldedaten mit Umgebungsvariablen wie `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … festgelegt (nicht in der Web-Oberfläche). Auf dem Desktop (Electron) konfigurieren Sie die Schlüssel unter **Einstellungen → API**.

**Windows**

Laden Sie die neueste `Transrewrt Setup x.y.z.exe` von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter, führen Sie das Installationsprogramm aus und starten Sie die Anwendung über das Startmenü oder eine Desktop-Verknüpfung. Geben Sie Ihre API-Schlüssel unter **Einstellungen → API** ein. Sie müssen mindestens einen Anbieter konfigurieren; OpenRouter ist üblich für kostenlose Modelle.

**Linux**

Laden Sie die `.AppImage`-Datei für Ihre CPU von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter (`x64` für typische PCs, `arm64` für viele ARM-Geräte, einschließlich Raspberry Pi 4+), dann:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Geben Sie Ihre API-Schlüssel unter **Einstellungen → API** ein. Sie müssen mindestens einen Anbieter konfigurieren; OpenRouter ist üblich für kostenlose Modelle.

**Konsolenmeldungen:** Paketierte Linux-Builds (`x64` und `arm64` AppImages) unterdrücken Node-Deprecation-Warnungen im Terminal (z. B. das eingebaute `punycode`-Modul). Wenn Chromium GPU-/EGL-Fehler wie „GLES3 is unsupported“ ausgibt, die App aber funktioniert, können Sie diese durch Deaktivierung der Hardwarebeschleunigung unterdrücken:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Dies gilt auch für amd64; passen Sie den Dateinamen an Ihren Download an. Weitere Details finden Sie unter [Installation → Linux (Electron)](#linux-electron).

Unter Debian/Ubuntu benötigen Sie möglicherweise zusätzliche **Laufzeitbibliotheken**, die Chromium erwartet (oft bereits auf vollständigen Desktops vorhanden). Verwenden Sie **`libnotify4`** für Desktop-Benachrichtigungen – **nicht** `libnotify-dev` (dieses Paket dient dem Softwarebau, nicht dem Ausführen des gepackten AppImages):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

Minimal- oder benutzerdefinierte Images können weiterhin mit einer fehlenden `.so`-Datei fehlschlagen; installieren Sie das Paket, das im Fehler genannt wird (häufig zusätzlich benötigt: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Einige Umgebungen benötigen FUSE, um AppImages auszuführen (z. B. `libfuse2` unter Ubuntu 22.04+), oder verwenden Sie `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

Siehe [Installation → Linux](#linux-electron) für dieselbe Zusammenfassung.

> ℹ️ **HINWEIS**  
>
> macOS wird derzeit nicht unterstützt. Transrewrt ist für Windows, Linux und Docker verfügbar.

Sobald die Anwendung läuft, lesen Sie das **[Benutzerhandbuch](USER-GUIDE.de.md)**, um zu erfahren, wie Sie Text übersetzen, umschreiben und transformieren, Prompts verwalten und Modelle konfigurieren.

## Installation

### Windows (Electron)

- Laden Sie das neueste Installationsprogramm von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter.
- Führen Sie die `.exe`-Datei aus und folgen Sie dem Installationsassistenten.
- Beim ersten Start: Starten Sie die Anwendung über das Startmenü oder eine Desktop-Verknüpfung.

> ℹ️ **HINWEIS**  
>
> Unter Windows kann eine der folgenden Sicherheitswarnungen angezeigt werden (normal für nicht signierte/indie-Apps):
>
> - **Benutzerkontensteuerung (UAC)**: „Möchten Sie zulassen, dass diese App von einem unbekannten Herausgeber Änderungen an Ihrem Gerät vornimmt?“ → Klicken Sie auf **Ja**.
> - **Microsoft Defender SmartScreen**: „Windows hat Ihren PC geschützt“ → Klicken Sie auf **Weitere Informationen** → **Trotzdem ausführen**.
>
> Dies geschieht, weil die App nicht von Microsoft oder einem großen Herausgeber signiert wurde – sie ist sicher, wenn sie aus unseren offiziellen GitHub-Releases heruntergeladen wurde
> (überprüfen Sie den SHA256-Prüfsummenwert unten).

### Linux (Electron)

- Laden Sie die passende `.AppImage`-Datei (`x64` oder `arm64`) aus den [Releases](https://github.com/wsj-br/transrewrt/releases) herunter.
- Ausführen: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` auf x86_64/amd64 oder verwenden Sie den Dateinamen `...-arm64.AppImage` auf ARM64.
- **Laufzeitbibliotheken für Debian/Ubuntu** (Electron/Chromium; wie in [Schnellstart → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — verwenden Sie **`libnotify4`**, nicht `libnotify-dev`. Auf minimalen Systemen installieren Sie alle fehlenden `.so`-Dateien, die im Terminal gemeldet werden; Zusatzpakete wie `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2` sind oft erforderlich. AppImage benötigt möglicherweise `libfuse2` (Ubuntu 22.04+) oder `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`.
- **GPU-Meldungen:** Chromium kann auf einigen Systemen (insbesondere ARM) GPU- oder EGL-Initialisierungsfehler protokollieren; die App kann dennoch normal ausgeführt werden. Um diese Meldungen zu vermeiden, starten Sie mit deaktivierter Hardwarebeschleunigung: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (oder Ihrem `arm64`-Dateinamen).

### Docker

- Abrufen: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Mindestens einen Anbieterschlüssel über Umgebungsvariablen setzen (z. B. `OPENROUTER_API_KEY` für OpenRouter). Variablen mit `-e` oder über `docker compose` / `.env` übergeben, damit Geheimnisse nicht in das Image eingebettet werden.
- Anbieterschlüssel werden **nicht** über die Web-Oberfläche eingegeben; der Server liest sie aus der Umgebung.

Beispiel – benanntes Volume für Persistenz (OpenRouter-Schlüssel über Umgebung):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

oder, falls Sie Docker Compose bevorzugen:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Weitere Informationen zu allen Umgebungsvariablen wie `PORT`, `CONFIG_PATH`, `TZ` und LLM-Schlüsseln (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) finden Sie unter [Konfiguration](#configuration-and-environment).

### Zeitzone konfigurieren

Datum und Uhrzeit in der Benutzeroberfläche orientieren sich an der **Browser**-Lokalisierung und -Zeitzone. Für das **serverseitige** Verhalten (z. B. Protokollierung) verwendet der Container die Umgebungsvariable `TZ`. Der Standardwert ist `TZ=Europe/London`.

Um eine andere Zeitzone zu verwenden, setzen Sie `TZ` in Ihrer Compose-Datei, zum Beispiel:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Oder geben Sie sie beim Ausführen des Containers an (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Auf vielen Linux-Systemen können Sie den System-Zeitzonennamen kopieren mit:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Eine Liste gültiger Zeitzonennamen wird in der [tz-Datenbank](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia) gepflegt.

## Abrufen eines OpenRouter-API-Schlüssels

Transrewrt unterstützt mehrere KI-Anbieter. [OpenRouter](https://openrouter.ai) ist eine beliebte Wahl, da es viele Modelle unter einem Schlüssel bündelt und kostenlose Modelle anbietet.

1. Registrieren Sie sich oder melden Sie sich an unter [openrouter.ai](https://openrouter.ai).
2. Öffnen Sie die Seite [Keys](https://openrouter.ai/keys) und erstellen Sie einen neuen Schlüssel (geben Sie einen Namen ein und legen Sie optional ein Guthabenguthaben fest). Sie können kostenlose Modelle nutzen, ohne Guthaben hinzuzufügen.
3. **Desktop (Electron):** Schlüssel einfügen unter **Einstellungen → API**. **Docker:** Umgebungsvariablen wie `OPENROUTER_API_KEY` setzen (siehe [Schnellstart](#quick-start)).

Verwenden Sie nicht das OpenRouter-Modell **Body Builder** (`[openrouter/bodybuilder](https://openrouter.ai/openrouter/bodybuilder)`) für Übersetzen, Umschreiben oder Transformation: Es gibt JSON-Anfrage-Payloads zurück, nicht den fertigen Text für diese Aufgaben. Siehe [Einstellungen → Modelle](USER-GUIDE.de.md#models) im Benutzerhandbuch.

Sie können auch andere Anbieter verwenden (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) oder Modelle lokal mit [Ollama](https://ollama.com) ausführen. Die vollständige Liste der unterstützten Anbieter und Umgebungsvariablen finden Sie unter [Konfiguration](#configuration-and-environment).

> ⚠️ **WARNUNG**  
>
> Wenn Sie Ollama von einem anderen Gerät, Container oder Dienst aus verwenden, denken Sie daran, Ollama so zu konfigurieren, dass externe Verbindungen erlaubt sind (nicht nur localhost).

Für Limits, BYOK und mehr siehe [OpenRouter-Authentifizierung](https://openrouter.ai/docs/api/reference/authentication).

## Konfiguration und Umgebung

**Konfigurationsdatei-Standorte**

| Bereitstellung         | Konfigurationsort                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (verwenden Sie ein Volume, um Daten persistent zu speichern) |

**Umgebungsvariablen** (nur Web/Docker; Electron verwendet die lokale Konfigurationsdatei)

| Variable             | Standardwert            | Beschreibung                                                                                                                 |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `PORT`               | `5000`                  | Server-Port für eingehende Verbindungen                                                                                     |
| `CONFIG_PATH`        | `/app/data/config.json` | Pfad zur Konfigurationsdatei                                                                                                |
| `TZ`                 | `Europe/London`         | IANA-Zeitzone für serverseitige Zeit (Protokollierung usw.); die Benutzeroberfläche folgt weiterhin dem Browser. Siehe [Docker → Zeitzone](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(leer)*                | OpenRouter-API-Schlüssel                                                                                                    |
| `OPENAI_API_KEY`     | *(leer)*                | OpenAI-API-Schlüssel                                                                                                        |
| `CEREBRAS_API_KEY`   | *(leer)*                | Cerebras-API-Schlüssel                                                                                                      |
| `ANTHROPIC_API_KEY`  | *(leer)*                | Anthropic-API-Schlüssel                                                                                                     |
| `GOOGLE_API_KEY`     | *(leer)*                | Google-Gemini-API-Schlüssel                                                                                                 |
| `DEEPSEEK_API_KEY`   | *(leer)*                | DeepSeek-API-Schlüssel                                                                                                      |
| `GROQ_API_KEY`       | *(leer)*                | Groq-API-Schlüssel                                                                                                          |
| `MISTRAL_API_KEY`    | *(leer)*                | Mistral-API-Schlüssel                                                                                                       |
| `OLLAMA_URL`         | *(leer)*                | Ollama-Basis-URL (z. B. `http://host.docker.internal:11434`)                                                                 |
| `XAI_API_KEY`        | *(leer)*                | xAI-API-Schlüssel                                                                                                           |

Konfigurieren Sie nur die Anbieter, die Sie verwenden. Modell-IDs sind namensgeklammert (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, usw.).

**Kostenanzeige:** OpenRouter gibt die exakte Abrechnungskosten zurück, wenn zutreffend. Andere Anbieter verwenden **geschätzte** Kosten basierend auf den öffentlichen Preisangaben von OpenRouter, sofern ein OpenRouter-Schlüssel vorhanden ist; andernfalls können Nicht-OpenRouter-Kosten als `0` angezeigt werden. Schätzungen sind keine Rechnungen.

**Daten und Persistenz:** Verwenden Sie bei Docker ein Volume am Pfad `/app/data`, damit `config.json` und die SQLite-Datenbank bei Container-Neustarts erhalten bleiben. Ohne Volume gehen alle Daten beim Beenden des Containers verloren.

**Entwickler:** Nachdem Sie Änderungen übernommen haben, die die alte Einzelschlüssel-Konfiguration ersetzen, setzen Sie `data/config.json` zurück oder führen Sie es mit der neuen Standardstruktur aus `src/config-defaults/config_default.json` zusammen, falls Ihre lokale Datei noch entfernte Felder verwendet (`api_key`, `api_url`, Proxy-Optionen).

**Web-Authentifizierung:**

- Standardadministrator: `admin` / `transrewrt26`.
- Verwalten Sie Benutzer unter **Einstellungen → Benutzer**.
- Ein Passwort zurücksetzen: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (aus der Quelle: `pnpm run reset-web-password -- <username> <new-password>`)

> ⚠️ **WARNUNG**  
>
> Ändern Sie das Standard-Administratorpasswort sofort auf jedem netzwerkzugänglichen Host.

Wichtige Einstellungen (Schriftart, Modelle, Sprachen usw.) sind in den Anwendungseinstellungen verfügbar.

## Entwicklung und Architektur

- **Entwicklung:** Einrichtung, Build, Testen und Bereitstellung (Electron, Web, Docker) – siehe **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektur und Systemübersicht:** Verzeichnisstruktur, Technologie-Stack, Designentscheidungen – siehe **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

## Probleme melden

Öffnen Sie ein Ticket auf [GitHub](https://github.com/wsj-br/transrewrt/issues). Geben Sie Ihre Plattform (Windows / Linux / Docker) und die App-Version an (angezeigt im Über-Dialog oder auf der Releases-Seite).

## Haftungsausschluss

Produktnamen und Symbole gehören ihren jeweiligen Eigentümern und werden nur zur Identifikation verwendet. Diese Software steht in keiner Verbindung zu den genannten Marken und wird von diesen nicht unterstützt.

## Lizenz

Urheberrecht © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
