---
translated_at: "2026-03-26T00:37:52.234Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt-Logo" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lizenz: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plattform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

KI-gestütztes Textwerkzeug: Übersetzung zwischen Sprachen, Umschreibung in verschiedenen Stilen und Textumwandlung mittels benutzerdefinierter Anweisungen – mit Unterstützung mehrerer KI-Anbieter (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI und lokales Ollama). Läuft als Desktop-Anwendung (Electron) oder als selbstgehostete Webanwendung (Docker).

- **Übersetzen** — zwischen Dutzenden von Sprachen, mit automatischer Erkennung der Ausgangssprache
- **Umschreiben** — Grammatik korrigieren, Verständlichkeit verbessern, formell/informell, kürzen, erweitern, technisch anpassen
- **Umwandeln** — benutzerdefinierte KI-Anweisungen; Anlegen und Verwalten eigener Anweisungen, optionale Zielsprache pro Anweisung
- **Verlauf** — vollständiger Ausführungsverlauf mit Eingabe- und Ausgabetext, Filterfunktion und Exportmöglichkeit
- **Modelle & Kosten** — Auswahl von Modellen aller konfigurierten Anbieter; Kosten- und Nutzungsübersichten mit Protokoll, Zusammenfassungen nach Modell/Aktion/Tag
- **Benutzeroberfläche** — mehrsprachige Oberfläche (über 30 Sprachen, inkl. RTL-Unterstützung), Schriftarten, ...
- **Webmodus** — Unterstützung mehrerer Nutzer mit Admin-Rollen
- **Desktop** — Electron-Anwendung für Windows und Linux
- **Selbstgehostet** — Docker-Image für amd64 & arm64 (auch für Raspberry Pi geeignet)

Nach der Installation lesen Sie bitte die **[Benutzeranleitung](USER-GUIDE.de.md)** für eine vollständige Übersicht über alle Funktionen.

<small>**In anderen Sprachen lesen:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Hinweis zu Übersetzungen der Benutzeroberfläche und Dokumentation:** Alle Sprachversionen der Benutzeroberfläche außer dem ursprünglichen Englisch (UK) 
> wurden mit KI-Modellen übersetzt; die Formulierungen können ungenau oder fehlerbehaftet sein.

</small>

<br/>

<a id="screenshots"></a>
## Screenshots

**Sprachauswahl**

![Sprachauswahl](../images/screenshots/de/language-selector.png)

**Übersetzen**

![Übersetzen](../images/screenshots/de/translate.png)

**Umwandeln – Anweisungs-Editor**

![Umwandeln – Anweisungs-Editor](../images/screenshots/de/transform-prompt-edit.png)

**Dashboard**

![Kosten-Dashboard](../images/screenshots/de/dashboard-summary.png)

**Verlauf**

![Verlauf](../images/screenshots/de/history.png)

**Einstellungen – Modellauswahl**

![Einstellungen – Modellauswahl](../images/screenshots/de/settings-models.png)

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
- [Erhalt eines OpenRouter-API-Schlüssels](#getting-an-openrouter-api-key)
- [Konfiguration und Umgebung](#configuration-and-environment)
- [Entwicklung und Architektur](#development-and-architecture)
- [Versionen und Tags](#releases-and-tags)
- [Mitwirken](#contributing)
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

Ersetzen Sie `sk-or-your-key` durch Ihren [OpenRouter-API-Schlüssel](https://openrouter.ai/keys) (oder setzen Sie Schlüssel anderer Anbieter; siehe [Konfiguration](#configuration-and-environment)). Öffnen Sie [http://localhost:5000](http://localhost:5000) und ändern Sie das Standard-Admin-Passwort, bevor Sie den Dienst öffentlich zugänglich machen.

<br/>

> ℹ️ **HINWEIS**<br/>
> In Docker werden LLM-Zugangsdaten über Umgebungsvariablen wie `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … gesetzt (nicht über die Web-Oberfläche). Bei der Desktop-Version (Electron) konfigurieren Sie die Schlüssel unter **Einstellungen → API**.

<br/>

**Windows**

Laden Sie die neueste `Transrewrt Setup x.y.z.exe` von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter, führen Sie den Installer aus und starten Sie die Anwendung über das Startmenü oder die Desktopverknüpfung. Geben Sie Ihre API-Schlüssel unter **Einstellungen → API** ein. Sie müssen mindestens einen Anbieter konfigurieren; OpenRouter wird häufig für kostenlose Modelle verwendet.

<br/>

**Linux**

Laden Sie die `.AppImage`-Datei für Ihre CPU von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter (`x64` für typische PCs, `arm64` für viele ARM-Geräte, inklusive Raspberry Pi 4+), dann:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Geben Sie Ihre API-Schlüssel unter **Einstellungen → API** ein. Sie müssen mindestens einen Anbieter konfigurieren; OpenRouter wird häufig für kostenlose Modelle verwendet.

Unter Debian/Ubuntu müssen Sie möglicherweise zuerst zusätzliche Abhängigkeiten installieren:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Weitere Details finden Sie unter [Installation → Linux](#linux-electron).

<br/>

> ℹ️ **HINWEIS**<br/>
> macOS wird derzeit nicht unterstützt. Transrewrt ist für Windows, Linux und Docker verfügbar.

<br/>

Sobald die Anwendung läuft, lesen Sie das **[Benutzerhandbuch (User Guide)](USER-GUIDE.de.md)**, um zu erfahren, wie Sie Text übersetzen, umschreiben und umformen, Prompts verwalten und Modelle konfigurieren.

<br/><br/>

<a id="installation"></a>
## Installation

<a id="windows-electron"></a>
### Windows (Electron)

- Laden Sie den neuesten Installer von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter.
- Führen Sie die `.exe` aus und folgen Sie den Installationsanweisungen.
- Beim ersten Start: öffnen Sie die Anwendung über das Startmenü oder die Desktopverknüpfung.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Laden Sie die passende `.AppImage`-Datei (`x64` oder `arm64`) von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter.
- Ausführen: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` auf x86_64/amd64, oder verwenden Sie die Datei `...-arm64.AppImage` auf ARM64.
- Zusätzliche Abhängigkeiten (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Weitere Informationen finden Sie in [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Herunterladen: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Mindestens einen Anbieterschlüssel über die Umgebungsvariablen setzen (z. B. `OPENROUTER_API_KEY` für OpenRouter). Variablen mit `-e` oder über `docker compose` / `.env` übergeben, damit Geheimnisse nicht im Image enthalten sind.
- Anbieterschlüssel werden **nicht** in der Web-Oberfläche eingegeben; der Server liest sie aus der Umgebung.

Beispiel – benanntes Volume für Datenspeicherung (OpenRouter-Schlüssel über Umgebung):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Option   | Beschreibung                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (Zuordnung mit `-p 5000:5000`)                                                                          |
| Volume   | Mounten von `/app/data` für die Persistenz von Konfiguration und Datenbank                                     |
| Umgebungsvariablen | `PORT`, `CONFIG_PATH`, sowie LLM-Schlüssel (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) – siehe [Konfiguration](#configuration-and-environment) |

Zum Bauen und Ausführen aus dem Quellcode: `docker compose up --build -d` oder `pnpm docker:up` – siehe [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Abrufen eines OpenRouter-API-Schlüssels

Transrewrt unterstützt mehrere KI-Anbieter. [OpenRouter](https://openrouter.ai) ist eine beliebte Wahl, da es viele Modelle unter einem einzigen Schlüssel bündelt und auch kostenlose Modelle anbietet.

1. Registrieren Sie sich oder melden Sie sich auf [openrouter.ai](https://openrouter.ai) an.
2. Öffnen Sie die Seite [Keys](https://openrouter.ai/keys) und erstellen Sie einen neuen Schlüssel (geben Sie einen Namen ein und optional ein Kontingent). Sie können kostenlose Modelle nutzen, ohne Guthaben hinzuzufügen.
3. **Desktop (Electron):** Schlüssel in **Einstellungen → API** einfügen. **Docker:** Umgebungsvariablen wie `OPENROUTER_API_KEY` setzen (siehe [Schnellstart](#quick-start)).

Verwenden Sie nicht OpenRouters Modell **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) für Übersetzungen, Umschreibungen oder Transformationen: Es gibt JSON-Anfragetexte zurück, nicht den fertigen bearbeiteten Text. Siehe [Einstellungen → Modelle](USER-GUIDE.de.md#models) im Benutzerhandbuch.

Sie können auch andere Anbieter verwenden (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) oder Modelle lokal mit [Ollama](https://ollama.com) ausführen. Eine vollständige Liste der unterstützten Anbieter und Umgebungsvariablen finden Sie unter [Konfiguration](#configuration-and-environment).

> ⚠️ **WARNUNG**<br/>
> Wenn Sie Ollama von einem anderen Gerät, Container oder Dienst nutzen, denken Sie daran, Ollama so zu konfigurieren, dass externe Verbindungen erlaubt sind (nicht nur localhost).

Weitere Informationen zu Limits, BYOK usw. finden Sie unter [OpenRouter-Authentifizierung](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguration und Umgebung

**Speicherorte der Konfigurationsdatei**

| Bereitstellung           | Konfigurationsort                                 |
| ------------------------ | ------------------------------------------------- |
| Electron (Windows)       | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)         | `~/.config/transrewrt/`                           |
| Web / Docker             | `/app/data/config.json` (Volume verwenden für Persistenz) |

<br/>

**Umgebungsvariablen** (nur Web/Docker; Electron verwendet die lokale Konfigurationsdatei)

| Variable           | Standardwert            | Beschreibung |
| ------------------ | ----------------------- | ------------ |
| `PORT`             | `5000`                  | Server-Port |
| `CONFIG_PATH`      | `/app/data/config.json` | Pfad zur Konfigurationsdatei |
| `OPENROUTER_API_KEY`   | *(leer)*                | OpenRouter-API-Schlüssel |
| `OPENAI_API_KEY`       | *(leer)*                | OpenAI-API-Schlüssel |
| `CEREBRAS_API_KEY`     | *(leer)*                | Cerebras-API-Schlüssel |
| `ANTHROPIC_API_KEY`    | *(leer)*                | Anthropic-API-Schlüssel |
| `GOOGLE_API_KEY`       | *(leer)*                | Google-Gemini-API-Schlüssel |
| `DEEPSEEK_API_KEY`     | *(leer)*                | DeepSeek-API-Schlüssel |
| `GROQ_API_KEY`         | *(leer)*                | Groq-API-Schlüssel |
| `MISTRAL_API_KEY`      | *(leer)*                | Mistral-API-Schlüssel |
| `OLLAMA_URL`       | *(leer)*                | Basis-URL von Ollama (z. B. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`          | *(leer)*                | xAI-API-Schlüssel |

Konfigurieren Sie nur die Anbieter, die Sie nutzen. Die Modell-IDs sind namensgekürzt (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, usw.).

**Kostenanzeige:** OpenRouter gibt bei Bedarf die exakten Abrechnungskosten zurück. Bei anderen Anbietern werden **geschätzte** Kosten aus OpenRouters öffentlichen Preisangaben verwendet, wenn ein OpenRouter-Schlüssel vorhanden ist. Ohne diesen wird die Kostenangabe für Nicht-OpenRouter-Anbieter möglicherweise als `0` angezeigt. Die Schätzungen sind keine Rechnungen.

<br/>

**Daten und Persistenz:** Verwenden Sie bei Docker ein gemountetes Volume unter `/app/data`, damit `config.json` und die SQLite-Datenbank auch nach einem Neustart des Containers erhalten bleiben. Ohne ein Volume gehen alle Daten beim Stoppen des Containers verloren.

**Entwickler:** Nach Aktualisierung des Codes, in dem die alte Einzelschlüssel-Konfiguration ersetzt wurde, setzen Sie Ihre `data/config.json` zurück oder passen sie an die neue Standardstruktur in `src/config-defaults/config_default.json` an, falls in Ihrer lokalen Datei noch entfernte Felder wie (`api_key`, `api_url`, Proxy-Optionen) verwendet werden.

<br/>

**Web-Authentifizierung:**

- Standard-Admin: `admin` / `transrewrt26`.
- Verwalten Sie Benutzer unter **Einstellungen → Benutzer**.
- Ein Passwort zurücksetzen: `docker exec <container> reset-web-password '<Benutzername>' '<neues-passwort>'`
  (aus Quellcode: `pnpm run reset-web-password -- <Benutzername> <neues-passwort>`)

<br/>

> ⚠️ **WARNUNG**<br/>
> Ändern Sie das Standard-Admin-Passwort sofort auf jedem host, der über das Netzwerk erreichbar ist.

<br/>

Wichtige Einstellungen (Schriftart, Modelle, Sprachen usw.) sind in den Anwendungseinstellungen verfügbar.

<br/><br/>

<a id="development-and-architecture"></a>

## Entwicklung und Architektur

- **Entwicklung:** Einrichten, Erstellen, Testen und Bereitstellen (Electron, Web, Docker) – siehe **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektur und Systemübersicht:** Ordnerstruktur, Technologie-Stack, Designentscheidungen – siehe **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Releases und Tags

- **Git-Tags** `v`* (z. B. `v1.0.10`) lösen den [Release-Workflow](.github/workflows/release.yml) aus. **GitHub Releases** enthalten den Windows-Installer (`.exe`) und Linux-AppImages (**x64** und **arm64**).
- **Docker-Images** werden nach `ghcr.io/wsj-br/transrewrt` veröffentlicht. Die Image-Tags entsprechen der Git-Version (z. B. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) sowie dem `latest`-Tag. Multi-Architektur: `linux/amd64` und `linux/arm64` (z. B. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Mitwirken

1. Erstellen Sie einen Fork des Repositorys.
2. Erstellen Sie einen Feature-Zweig: `git checkout -b feature/feature-name`
3. Führen Sie Ihre Änderungen mit einer klaren Commit-Nachricht durch.
4. Übertragen Sie Ihre Änderungen und öffnen Sie eine Pull Request gegen `main`.

Beachten Sie den bestehenden Code-Stil und testen Sie Ihre Änderungen vor der Abgabe sowohl im Electron- als auch im Web-Modus. Anleitungen zum Erstellen und Testen finden Sie in [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Probleme melden:** Öffnen Sie ein Ticket auf [GitHub](https://github.com/wsj-br/transrewrt/issues). Geben Sie dabei Ihre Plattform (Windows / Linux / Docker) und die App-Version an (ersichtlich im Info-Dialog oder auf der Releases-Seite).

<br/><br/>

<a id="disclaimer"></a>
## Haftungsausschluss

Produktnamen und Symbole gehören ihren jeweiligen Eigentümern und dienen ausschließlich der Identifikation. Diese Software ist nicht mit den genannten Marken verbunden oder von diesen unterstützt.

<br/><br/>

<a id="license"></a>
## Lizenz

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)