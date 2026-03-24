---
translated_at: "2026-03-24T01:32:05.560Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt-Logo" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lizenz: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plattform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Ein KI-gestütztes Textwerkzeug: Übersetzung zwischen Sprachen, Umschreibung in verschiedenen Stilen und Transformation mit benutzerdefinierten Anweisungen – mit Unterstützung mehrerer KI-Anbieter (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI und lokales Ollama). Läuft als Desktop-Anwendung (Electron) oder als selbstgehostete Webanwendung (Docker).

- **Übersetzen** – zwischen Dutzenden von Sprachen, mit automatischer Erkennung der Ausgangssprache
- **Umschreiben** – Grammatik korrigieren, Klarheit verbessern, formell/informell umformulieren, kürzen, erweitern, technisch anpassen
- **Transformieren** – benutzerdefinierte KI-Anweisungen; Anlegen und Verwalten von Anweisungen, optionale Zielsprache pro Anweisung
- **Verlauf** – vollständiger Ausführungsverlauf mit Eingabe- und Ausgabetext, Filterfunktion und Exportmöglichkeit
- **Modelle & Kosten** – Auswahl von Modellen bei jedem konfigurierten Anbieter; Kostendashboard mit SQLite-Protokoll, Zusammenfassungen nach Modell/Operation/Tag
- **Benutzeroberfläche** – mehrsprachige Oberfläche (über 30 Sprachen, inkl. RTL-Unterstützung), Schriftarten, …
- **Webmodus** – Unterstützung für mehrere Benutzer mit Admin-Rollen; API-Schlüssel verbleiben serverseitig und werden nie dem Browser preisgegeben
- **Desktop** – Electron-App für Windows und Linux
- **Selbstgehostet** – Docker-Image für amd64 & arm64 (auch für Raspberry Pi geeignet)

Nach der Installation finden Sie im **[Benutzerhandbuch](USER-GUIDE.de.md)** eine vollständige Anleitung zu allen Funktionen.

<small>**In anderen Sprachen lesen:** [English (UK)](README.de.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<br/>

**Hinweis zu Übersetzungen der Benutzeroberfläche und Dokumentation:** Alle Interface-Sprachen außer Englisch (UK) wurden mithilfe von KI-Modellen übersetzt; die Formulierungen können ungenau sein oder Fehler enthalten.

<a id="screenshots"></a>
## Screenshots

**Sprachauswahl**

![Sprachauswahl](../images/screenshots/de/language-selector.png)

**Übersetzen**

![Übersetzen](../images/screenshots/de/translate.png)

**Transformieren – Anweisungs-Editor**

![Transformieren – Anweisungs-Editor](../images/screenshots/de/transform-prompt-edit.png)

**Dashboard**

![Kostendashboard](../images/screenshots/de/dashboard-summary.png)

**Verlauf**

![Verlauf](../images/screenshots/de/history.png)

**Einstellungen – Modellauswahl**

![Einstellungen – Modellauswahl](../images/screenshots/de/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Inhaltsverzeichnis

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Schnellstart](#schnellstart)
- [Installation](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Einen OpenRouter-API-Schlüssel erhalten](#einen-openrouter-api-schlüssel-erhalten)
- [Konfiguration und Umgebung](#konfiguration-und-umgebung)
- [Entwicklung und Architektur](#entwicklung-und-architektur)
- [Versionen und Tags](#versionen-und-tags)
- [Mitwirken](#mitwirken)
- [Haftungsausschluss](#haftungsausschluss)
- [Lizenz](#lizenz)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Schnellstart

**Docker (empfohlen für Selbsthosting)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Ersetzen Sie `sk-or-your-key` durch Ihren [OpenRouter-API-Schlüssel](https://openrouter.ai/keys) (oder setzen Sie Schlüssel anderer Anbieter; siehe [Konfiguration](#konfiguration-und-umgebung)). Öffnen Sie [http://localhost:5000](http://localhost:5000) und ändern Sie das Standard-Administrator-Passwort, bevor Sie den Dienst öffentlich zugänglich machen.

<br/>

> ℹ️ **HINWEIS**<br/>
> In Docker werden LLM-Zugangsdaten über Umgebungsvariablen wie `OPENROUTER_KEY`, `OPENAI_KEY`, … gesetzt (nicht über die Web-Oberfläche). Bei der Desktop-Version (Electron) konfigurieren Sie die Schlüssel unter **Einstellungen → API**.

<br/>

**Windows**

Laden Sie die neueste `Transrewrt Setup x.y.z.exe` von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter, führen Sie den Installer aus und starten Sie die Anwendung über das Startmenü oder eine Desktop-Verknüpfung. Geben Sie Ihre API-Schlüssel in **Einstellungen → API** ein. Sie müssen mindestens einen Anbieter konfigurieren; OpenRouter ist oft eine gute Wahl für kostenlose Modelle.

<br/>

**Linux**

Laden Sie die `.AppImage`-Datei von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter und führen Sie danach folgendes aus:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Geben Sie Ihre API-Schlüssel in **Einstellungen → API** ein. Sie müssen mindestens einen Anbieter konfigurieren; OpenRouter ist oft eine gute Wahl für kostenlose Modelle.

Unter Debian/Ubuntu müssen Sie möglicherweise zunächst zusätzliche Abhängigkeiten installieren:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Weitere Informationen finden Sie unter [Installation → Linux](#linux-electron).

<br/>

> ℹ️ **HINWEIS**<br/>
> macOS wird derzeit nicht unterstützt. Transrewrt ist verfügbar für Windows, Linux und Docker.

<br/>

Sobald die Anwendung läuft, lesen Sie den **[Benutzerleitfaden](USER-GUIDE.de.md)**, um zu erfahren, wie Text übersetzt, umgeschrieben und umgewandelt werden kann, wie Prompts verwaltet und Modelle konfiguriert werden.

<br/><br/>

<a id="installation"></a>
## Installation

<a id="windows-electron"></a>
### Windows (Electron)

- Laden Sie den neuesten Installer von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter.
- Führen Sie die `.exe`-Datei aus und folgen Sie dem Installationsassistenten.
- Beim ersten Start: Starten Sie die Anwendung über das Startmenü oder eine Desktop-Verknüpfung.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Laden Sie die `.AppImage`-Datei von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter.
- Ausführen: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Zusätzliche Abhängigkeiten (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Weitere Informationen finden Sie in [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Pull: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Setzen Sie mindestens einen Anbieterschlüssel über die Umgebung (z. B. `OPENROUTER_KEY` für OpenRouter). Übergeben Sie Variablen mit `-e` oder über `docker compose` / `.env`, damit keine Geheimnisse in das Image eingebaut werden.
- Anbieterschlüssel werden **nicht** über die Web-Oberfläche eingegeben; der Server liest sie aus der Umgebung.

Beispiel – benanntes Volume für Datenspeicherung (OpenRouter-Schlüssel über Umgebungsvariable):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Option     | Beschreibung                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------- |
| Port       | `5000` (mit `-p 5000:5000` mappen)                                                                             |
| Volume     | Mounten Sie `/app/data`, um Konfiguration und Datenbank dauerhaft zu speichern                                 |
| Umgebungsvariablen | `PORT`, `CONFIG_PATH` sowie LLM-Schlüssel (`OPENROUTER_KEY`, `OPENAI_KEY`, …) – siehe [Konfiguration](#konfiguration-und-umgebung) |

Zum Bauen und Starten aus dem Quellcode: `docker compose up --build -d` oder `pnpm docker:up` – siehe [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Abrufen eines OpenRouter-API-Schlüssels

Transrewrt unterstützt mehrere KI-Anbieter. [OpenRouter](https://openrouter.ai) ist eine beliebte Wahl, da es viele Modelle unter einem Schlüssel zusammenführt und kostenlose Modelle anbietet.

1. Registrieren Sie sich oder melden Sie sich an bei [openrouter.ai](https://openrouter.ai).
2. Öffnen Sie die [Keys-Seite](https://openrouter.ai/keys) und erstellen Sie einen neuen Schlüssel (geben Sie einen Namen ein und legen Sie optional ein Guthabenlimit fest). Sie können kostenlose Modelle nutzen, ohne Guthaben hinzuzufügen.
3. **Desktop (Electron):** Schlüssel einfügen unter **Einstellungen → API**. **Docker:** Umgebungsvariablen wie `OPENROUTER_KEY` setzen (siehe [Schnellstart](#quick-start)).

Sie können auch andere Anbieter verwenden (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) oder Modelle lokal mit [Ollama](https://ollama.com) ausführen. Eine vollständige Liste der unterstützten Anbieter und Umgebungsvariablen finden Sie unter [Konfiguration](#configuration-and-environment).

Weitere Informationen zu Limits, BYOK usw. finden Sie unter [OpenRouter-Authentifizierung](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguration und Umgebung

**Speicherorte der Konfigurationsdatei**

| Bereitstellung      | Konfigurationsort                                    |
| ------------------- | ---------------------------------------------------- |
| Electron (Windows)  | `%APPDATA%\transrewrt\`                              |
| Electron (Linux)    | `~/.config/transrewrt/`                              |
| Web / Docker        | `/app/data/config.json` (Volume verwenden, um Daten persistent zu speichern) |

<br/>

**Umgebungsvariablen** (nur Web/Docker; Electron verwendet die lokale Konfigurationsdatei)

| Variable         | Standardwert            | Beschreibung |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Server-Port |
| `CONFIG_PATH`    | `/app/data/config.json` | Pfad zur Konfigurationsdatei |
| `OPENROUTER_KEY` | *(leer)*                | OpenRouter-API-Schlüssel |
| `OPENAI_KEY`     | *(leer)*                | OpenAI-API-Schlüssel |
| `ANTHROPIC_KEY`  | *(leer)*                | Anthropic-API-Schlüssel |
| `GOOGLE_KEY`     | *(leer)*                | Google Gemini-API-Schlüssel |
| `DEEPSEEK_KEY`   | *(leer)*                | DeepSeek-API-Schlüssel |
| `GROQ_KEY`       | *(leer)*                | Groq-API-Schlüssel |
| `MISTRAL_KEY`    | *(leer)*                | Mistral-API-Schlüssel |
| `OLLAMA_URL`     | *(leer)*                | Basis-URL von Ollama (z. B. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(leer)*                | xAI-API-Schlüssel |

Konfigurieren Sie nur die Anbieter, die Sie nutzen. Modell-IDs sind namensbasiert (`openrouter/…`, `openai/…`, `ollama/…`, etc.).

**Kostenanzeige:** OpenRouter liefert bei Bedarf die exakte Abrechnungskosten. Andere Anbieter nutzen **geschätzte** Kosten basierend auf den öffentlichen Preisen von OpenRouter, sofern ein OpenRouter-Schlüssel vorhanden ist. Andernfalls können Nicht-OpenRouter-Kosten als `0` angezeigt werden. Die Schätzungen sind keine Rechnungen.

<br/>

**Daten und Persistenz:** Verwenden Sie bei Docker ein Volume am Pfad `/app/data`, damit `config.json` und die SQLite-Datenbank beim Neustart des Containers erhalten bleiben. Ohne Volume gehen alle Daten beim Beenden des Containers verloren.

**Entwickler:** Nachdem Änderungen übernommen wurden, die die alte Einzelschlüssel-Konfiguration ersetzen, setzen Sie `data/config.json` zurück oder führen Sie es mit der neuen Standardstruktur aus `src/config-defaults/config_default.json` zusammen, wenn Ihre lokale Datei noch entfernte Felder verwendet (`api_key`, `api_url`, Proxy-Optionen).

<br/>

**Web-Authentifizierung:**

- Standard-Administrator: `admin` / `transrewrt26`.
- Verwalten Sie Benutzer unter **Einstellungen → Benutzer**.
- Passwort zurücksetzen: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (aus der Quelle: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ACHTUNG**<br/>
> Ändern Sie das Standard-Administratorkennwort sofort auf jedem netzwerkzugänglichen Host.

<br/>

Wichtige Einstellungen (Schriftart, Modelle, Sprachen usw.) sind in den Anwendungseinstellungen verfügbar.

<br/><br/>

<a id="development-and-architecture"></a>
## Entwicklung und Architektur

- **Entwicklung:** Einrichtung, Erstellung, Testen und Bereitstellung (Electron, Web, Docker) – siehe **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektur und Systemübersicht:** Ordnerstruktur, verwendete Technologien, Designentscheidungen – siehe **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Veröffentlichungen und Tags

- **Git-Tags** `v`* (z. B. `v1.0.10`) lösen den [Freigabeprozess](.github/workflows/release.yml) aus. **GitHub-Releases** enthalten den Windows-Installer (`.exe`) und die Linux-AppImage.
- **Docker-Images** werden auf `ghcr.io/wsj-br/transrewrt` veröffentlicht. Die Image-Tags entsprechen der Git-Version (z. B. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) sowie dem Tag `latest`. Unterstützte Architekturen: `linux/amd64` und `linux/arm64` (z. B. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Mitwirken

1. Repository forken.
2. Ein Feature-Branch erstellen: `git checkout -b feature/mein-feature`
3. Änderungen mit einer klaren Nachricht committen.
4. Änderungen pushen und einen Pull-Request gegen `main` erstellen.

Bitte halte den bestehenden Codestil ein und teste deine Änderungen vor dem Einreichen sowohl im Electron- als auch im Web-Modus. Für Anweisungen zum Erstellen und Testen siehe [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Fehler melden:** Erstelle ein Issue auf [GitHub](https://github.com/wsj-br/transrewrt/issues). Gib dabei deine Plattform (Windows / Linux / Docker) und die App-Version an (angezeigt im Info-Dialog oder auf der Releases-Seite).

<br/><br/>

<a id="disclaimer"></a>
## Haftungsausschluss

Produktnamen und Symbole sind Eigentum ihrer jeweiligen Inhaber und werden nur zu Identifikationszwecken verwendet. Diese Software ist weder mit den genannten Marken verbunden noch von ihnen genehmigt.

<br/><br/>

<a id="license"></a>
## Lizenz

Urheberrecht © 2026 Waldemar Scudeller Jr.

[Apache-Lizenz 2.0](LICENSE)