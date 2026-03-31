---
translation_last_updated: '2026-03-31T23:42:50.771Z'
source_file_mtime: '2026-03-31T23:34:44.122Z'
source_file_hash: 4c9fbb976bec3529
translation_language: de
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

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

<small>**In anderen Sprachen lesen:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Hinweis zu Übersetzungen der Benutzeroberfläche und Dokumentation:** Alle Sprachen der Benutzeroberfläche außer dem Original Englisch (GB)
> wurden mithilfe von KI-Modellen übersetzt; die Formulierungen können ungenau oder fehlerhaft sein.

</small>

<br/>

<a id="screenshots"></a>
## Screenshots

**Sprachauswahl**

![Language selector](../images/screenshots/de/language-selector.png)

**Übersetzen**

![Translate](../images/screenshots/de/translate.png)

**Transformation – Prompt-Editor**

![Transform - prompt editor](../images/screenshots/de/transform-prompt-edit.png)

**Dashboard**

![Dashboard summary — usage](../images/screenshots/de/dashboard-summary.png)

**Historie**

![History](../images/screenshots/de/history.png)

**Einstellungen – Modellauswahl**

![Settings - model selection](../images/screenshots/de/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Inhaltsverzeichnis

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

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

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
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

<br/>

> ℹ️ **HINWEIS**<br/>
> In Docker werden LLM-Anmeldedaten mit Umgebungsvariablen wie `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … festgelegt (nicht in der Web-Oberfläche). Auf dem Desktop (Electron) konfigurieren Sie die Schlüssel unter **Einstellungen → API**.

<br/>

**Windows**

Laden Sie die neueste `Transrewrt Setup x.y.z.exe` von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter, führen Sie das Installationsprogramm aus und starten Sie die Anwendung über das Startmenü oder eine Desktop-Verknüpfung. Geben Sie Ihre API-Schlüssel unter **Einstellungen → API** ein. Sie müssen mindestens einen Anbieter konfigurieren; OpenRouter ist üblich für kostenlose Modelle.

<br/>

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

<br/>

> ℹ️ **HINWEIS**<br/>
> macOS wird derzeit nicht unterstützt. Transrewrt ist verfügbar für Windows, Linux und Docker.

<br/>

Sobald die Anwendung läuft, lesen Sie das **[Benutzerhandbuch](USER-GUIDE.de.md)**, um zu erfahren, wie Sie Text übersetzen, umschreiben und transformieren, Prompts verwalten und Modelle konfigurieren.

<br/><br/>

<a id="installation"></a>
## Installation

<a id="windows-electron"></a>
### Windows (Electron)

- Laden Sie das neueste Installationsprogramm von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter.
- Führen Sie die `.exe`-Datei aus und folgen Sie dem Installationsassistenten.
- Beim ersten Start: Starten Sie die Anwendung über das Startmenü oder eine Desktop-Verknüpfung.

<br/>

> ℹ️ **HINWEIS**<br/>
> Windows zeigt möglicherweise eine dieser Sicherheitswarnungen an (üblich bei nicht signierten/indie-Anwendungen):
>   - **Benutzerkontensteuerung (UAC)**: „Möchten Sie zulassen, dass diese App von einem unbekannten Herausgeber Änderungen an Ihrem Gerät vornimmt?“ → Klicken Sie auf **Ja**.
>   - **Microsoft Defender SmartScreen**: „Windows hat Ihren PC geschützt“ → Klicken Sie auf **Weitere Informationen** → **Trotzdem ausführen**.
>
> Dies geschieht, weil die App nicht von Microsoft oder einem großen Herausgeber signiert ist – sie ist sicher, wenn sie aus unseren offiziellen GitHub-Releases heruntergeladen wurde
>  (überprüfen Sie den SHA256-Prüfsummenwert unten).

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Laden Sie die passende `.AppImage`-Datei (`x64` oder `arm64`) aus den [Releases](https://github.com/wsj-br/transrewrt/releases) herunter.
- Ausführen: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` auf x86_64/amd64 oder verwenden Sie den Dateinamen `...-arm64.AppImage` auf ARM64.
- **Laufzeitbibliotheken für Debian/Ubuntu** (Electron/Chromium; wie in [Schnellstart → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — verwenden Sie **`libnotify4`**, nicht `libnotify-dev`. Auf minimalen Systemen installieren Sie alle fehlenden `.so`-Dateien, die im Terminal gemeldet werden; Zusatzpakete wie `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2` sind oft erforderlich. AppImage benötigt möglicherweise `libfuse2` (Ubuntu 22.04+) oder `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`.
- **GPU-Meldungen:** Chromium kann auf einigen Systemen (insbesondere ARM) GPU- oder EGL-Initialisierungsfehler protokollieren; die App kann dennoch normal ausgeführt werden. Um diese Meldungen zu vermeiden, starten Sie mit deaktivierter Hardwarebeschleunigung: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (oder Ihrem `arm64`-Dateinamen).

<br/>

<a id="docker"></a>
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

<a id="configuring-the-timezone"></a>
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

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## OpenRouter-API-Schlüssel erhalten

Transrewrt unterstützt mehrere KI-Anbieter. [OpenRouter](https://openrouter.ai) ist eine beliebte Wahl, da es viele Modelle unter einem Schlüssel bündelt und kostenlose Modelle anbietet.

1. Registrieren Sie sich oder melden Sie sich an unter [openrouter.ai](https://openrouter.ai).
2. Öffnen Sie die Seite [Keys](https://openrouter.ai/keys) und erstellen Sie einen neuen Schlüssel (geben Sie einen Namen ein und legen Sie optional ein Guthabenguthaben fest). Sie können kostenlose Modelle nutzen, ohne Guthaben hinzuzufügen.
3. **Desktop (Electron):** Schlüssel einfügen unter **Einstellungen → API**. **Docker:** Umgebungsvariablen wie `OPENROUTER_API_KEY` setzen (siehe [Schnellstart](#quick-start)).

Verwenden Sie nicht OpenRouters **Body Builder**-Modell ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) für Übersetzen, Umschreiben oder Transformation: Es gibt JSON-Anfrage-Payloads zurück, nicht den fertigen Text für diese Aufgaben. Siehe [Einstellungen → Modelle](USER-GUIDE.de.md#models) im Benutzerhandbuch.

Sie können auch andere Anbieter verwenden (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) oder Modelle lokal mit [Ollama](https://ollama.com) ausführen. Die vollständige Liste der unterstützten Anbieter und Umgebungsvariablen finden Sie unter [Konfiguration](#configuration-and-environment).

> ⚠️ **WARNUNG**<br/>
> Wenn Sie Ollama von einem anderen Gerät, Container oder Dienst verwenden, denken Sie daran, Ollama so zu konfigurieren, dass externe Verbindungen erlaubt sind (nicht nur localhost).

Für Limits, BYOK und mehr siehe [OpenRouter-Authentifizierung](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguration und Umgebung

**Konfigurationsdatei-Standorte**

| Bereitstellung         | Konfigurationsort                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (verwenden Sie ein Volume, um Daten persistent zu speichern) |

<br/>

**Umgebungsvariablen** (nur Web/Docker; Electron verwendet die lokale Konfigurationsdatei)

| Variable             | Beschreibung                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | Server-Port (Standard: `5000`)                                  |
| `CONFIG_PATH`        | Pfad zur Konfigurationsdatei (Standard: `/app/data/config.json`)                 |
| `TZ`                 | Zeitzone für serverseitige Zeit (Logging usw.) (Standard:  `Europe/London`) |
| `OPENROUTER_API_KEY` | OpenRouter-API-Schlüssel                                                           |
| `OPENAI_API_KEY`     | OpenAI-API-Schlüssel                                                               |
| `CEREBRAS_API_KEY`   | Cerebras-API-Schlüssel                                                             |
| `ANTHROPIC_API_KEY`  | Anthropic-API-Schlüssel                                                            |
| `GOOGLE_API_KEY`     | Google-Gemini-API-Schlüssel                                                        |
| `DEEPSEEK_API_KEY`   | DeepSeek-API-Schlüssel                                                             |
| `GROQ_API_KEY`       | Groq-API-Schlüssel                                                                 |
| `MISTRAL_API_KEY`    | Mistral-API-Schlüssel                                                              |
| `OLLAMA_URL`         | Ollama-Basis-URL (z. B. `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | xAI-API-Schlüssel                                                                  |

Konfigurieren Sie nur die Anbieter, die Sie verwenden. Modell-IDs sind namensgeklammert (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, usw.).

**Kostenanzeige:** OpenRouter gibt die exakte Abrechnungskosten zurück, wenn zutreffend. Andere Anbieter verwenden **geschätzte** Kosten basierend auf den öffentlichen Preisangaben von OpenRouter, sofern ein OpenRouter-Schlüssel vorhanden ist; andernfalls können Nicht-OpenRouter-Kosten als `0` angezeigt werden. Schätzungen sind keine Rechnungen.

<br/>

**Daten und Persistenz:** Verwenden Sie bei Docker ein Volume am Pfad `/app/data`, damit `config.json` und die SQLite-Datenbank bei Container-Neustarts erhalten bleiben. Ohne Volume gehen alle Daten beim Beenden des Containers verloren.

**Entwickler:** Nachdem Sie Änderungen übernommen haben, die die alte Einzelschlüssel-Konfiguration ersetzen, setzen Sie `data/config.json` zurück oder führen Sie es mit der neuen Standardstruktur aus `src/config-defaults/config_default.json` zusammen, falls Ihre lokale Datei noch entfernte Felder verwendet (`api_key`, `api_url`, Proxy-Optionen).

<br/>

**Web-Authentifizierung:**

- Standardadministrator: `admin` / `transrewrt26`.
- Verwalten Sie Benutzer unter **Einstellungen → Benutzer**.
- Ein Passwort zurücksetzen: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (aus der Quelle: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **WARNUNG**<br/>
> Ändern Sie das Standard-Administrator-Passwort sofort auf jedem netzwerkzugänglichen Host.

<br/>

Wichtige Einstellungen (Schriftart, Modelle, Sprachen usw.) sind in den Anwendungseinstellungen verfügbar.

<br/><br/>

<a id="development-and-architecture"></a>
## Entwicklung und Architektur

- **Entwicklung:** Einrichtung, Build, Testen und Bereitstellung (Electron, Web, Docker) – siehe **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektur und Systemübersicht:** Verzeichnisstruktur, Technologie-Stack, Designentscheidungen – siehe **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Probleme melden

Öffnen Sie ein Ticket auf [GitHub](https://github.com/wsj-br/transrewrt/issues). Geben Sie Ihre Plattform (Windows / Linux / Docker) und die App-Version an (angezeigt im Über-Dialog oder auf der Releases-Seite).

<br/><br/>

<a id="disclaimer"></a>
## Haftungsausschluss

Produktnamen und Symbole gehören ihren jeweiligen Eigentümern und werden nur zur Identifikation verwendet. Diese Software steht in keiner Verbindung zu den genannten Marken und wird von diesen nicht unterstützt.

<br/><br/>

<a id="license"></a>
## Lizenz

Urheberrecht © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
