---
translated_at: "2026-03-25T22:12:27.911Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
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

Ein KI-gestütztes Textwerkzeug: Übersetzen zwischen Sprachen, umschreiben in verschiedenen Stilen sowie transformieren mit benutzerdefinierten Prompts – unter Nutzung mehrerer KI-Anbieter (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI und lokales Ollama). Läuft als Desktop-Anwendung (Electron) oder als selbstgehostete Webanwendung (Docker).

- **Übersetzen** – zwischen Dutzenden Sprachen, mit automatischer Erkennung der Ausgangssprache
- **Umschreiben** – Grammatik korrigieren, Verständlichkeit verbessern, formell/informell umformulieren, kürzen, erweitern, technisch anpassen
- **Transformieren** – benutzerdefinierte KI-Prompts; Erstellen und Verwalten von Prompts, optionale Zielsprache pro Prompt
- **Verlauf** – vollständiger Ausführungsverlauf mit Eingabe-/Ausgabetext, Filterfunktion und Exportmöglichkeit
- **Modelle & Kosten** – Auswahl von Modellen aller konfigurierten Anbieter; Dashboard zur Kosten- und Verbrauchsanalyse mit Protokoll, Zusammenfassungen nach Modell/Operation/Tag
- **Benutzeroberfläche** – mehrsprachige Oberfläche (über 30 Sprachen, inklusive RTL-Unterstützung), Schriftarten, …
- **Webmodus** – Unterstützung mehrerer Benutzer mit Administratorrollen
- **Desktop** – Electron-App für Windows und Linux
- **Selbstgehostet** – Docker-Image für amd64 und arm64 (auch Raspberry Pi tauglich)

Nach der Installation finden Sie im **[Benutzerhandbuch](USER-GUIDE.de.md)** eine ausführliche Anleitung zu allen Funktionen.

<small>**In anderen Sprachen lesen:** [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Hinweis zu Übersetzungen der Benutzeroberfläche und Dokumentation:** Alle Sprachversionen der Benutzeroberfläche außer dem Original (Englisch UK) 
> wurden mithilfe von KI-Modellen übersetzt; die Formulierungen können ungenau sein oder Fehler enthalten.

</small>

<br/>

<a id="screenshots"></a>
## Bildschirmfotos

**Sprachauswahl**

![Sprachauswahl](../images/screenshots/de/language-selector.png)

**Übersetzen**

![Übersetzen](../images/screenshots/de/translate.png)

**Transformieren – Prompt-Editor**

![Transformieren – Prompt-Editor](../images/screenshots/de/transform-prompt-edit.png)

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


- [Schnellstart](#schnellstart)
- [Installation](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Beschaffung eines OpenRouter-API-Schlüssels](#beschaffung-eines-openrouter-api-schlüssels)
- [Konfiguration und Umgebung](#konfiguration-und-umgebung)
- [Entwicklung und Architektur](#entwicklung-und-architektur)
- [Veröffentlichungen und Tags](#veröffentlichungen-und-tags)
- [Mitwirken](#mitwirken)
- [Haftungsausschluss](#haftungsausschluss)
- [Lizenz](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Schnellstart

**Docker (empfohlen für Self-Hosting)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Ersetzen Sie `sk-or-your-key` durch Ihren [OpenRouter-API-Schlüssel](https://openrouter.ai/keys) (oder legen Sie Schlüssel anderer Anbieter fest; siehe [Konfiguration](#konfiguration-und-umgebung)). Rufen Sie [http://localhost:5000](http://localhost:5000) auf und ändern Sie das Standard-Admin-Passwort, bevor Sie den Dienst nach außen freigeben.

<br/>

> ℹ️ **HINWEIS**<br/>
> Bei Docker werden die Anmeldeinformationen für große Sprachmodelle (LLM) über Umgebungsvariablen wie `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … festgelegt (nicht über die Web-Oberfläche). Bei der Desktop-Version (Electron) konfigurieren Sie die Schlüssel unter **Einstellungen → API**.

<br/>

**Windows**

Laden Sie die neueste `Transrewrt Setup x.y.z.exe` von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter, führen Sie das Installationsprogramm aus und starten Sie die Anwendung über das Startmenü oder eine Desktop-Verknüpfung. Geben Sie Ihre API-Schlüssel unter **Einstellungen → API** ein. Sie müssen mindestens einen Anbieter konfigurieren; OpenRouter ist eine übliche Wahl für kostenlose Modelle.

<br/>

**Linux**

Laden Sie die passende `.AppImage`-Datei für Ihre CPU von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter (`x64` für typische PCs, `arm64` für viele ARM-Geräte, einschließlich Raspberry Pi 4+), dann:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Geben Sie Ihre API-Schlüssel unter **Einstellungen → API** ein. Sie müssen mindestens einen Anbieter konfigurieren; OpenRouter ist eine übliche Wahl für kostenlose Modelle.

Unter Debian/Ubuntu müssen vorher ggf. zusätzliche Abhängigkeiten installiert werden:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Weitere Details finden Sie unter [Installation → Linux](#linux-electron).

<br/>

> ℹ️ **HINWEIS**<br/>
> macOS wird derzeit nicht unterstützt. Transrewrt ist für Windows, Linux und Docker verfügbar.

<br/>

Sobald die Anwendung läuft, lesen Sie den **[Benutzerleitfaden](USER-GUIDE.de.md)**, um zu erfahren, wie Sie Text übersetzen, umschreiben und transformieren, Prompts verwalten und Modelle konfigurieren können.

<br/><br/>

<a id="installation"></a>
## Installation

<a id="windows-electron"></a>
### Windows (Electron)

- Laden Sie das neueste Installationsprogramm von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter.
- Führen Sie die `.exe`-Datei aus und folgen Sie dem Installationsassistenten.
- Beim ersten Start: Starten Sie die Anwendung über das Startmenü oder eine Desktop-Verknüpfung.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Laden Sie die passende `.AppImage`-Datei (`x64` oder `arm64`) von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter.
- Ausführen: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` auf x86_64/amd64 oder verwenden Sie die `...-arm64.AppImage`-Datei auf ARM64.
- Zusätzliche Abhängigkeiten (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Weitere Informationen finden Sie in [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Herunterladen: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Legen Sie mindestens einen Anbieter-Schlüssel über die Umgebung fest (z. B. `OPENROUTER_KEY` für OpenRouter). Übergeben Sie Variablen mit `-e` oder `docker compose` / `.env`, damit Geheimnisse nicht im Image eingebettet werden.
- Anbieter-Schlüssel werden **nicht** in der Web-Oberfläche eingegeben; der Server liest sie aus der Umgebung.

Beispiel – Named Volume für Datenspeicherung (OpenRouter-Schlüssel via Umgebung):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Option   | Beschreibung                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (Zuordnung mit `-p 5000:5000`)                                                                          |
| Volume   | Mounten Sie `/app/data` für persistente Konfiguration und Datenbank                                           |
| Umgebungsvariablen | `PORT`, `CONFIG_PATH`, sowie LLM-Schlüssel (`OPENROUTER_KEY`, `OPENAI_KEY`, …) – siehe [Konfiguration](#konfiguration-und-umgebung) |

Zum Bauen und Ausführen aus dem Quellcode: `docker compose up --build -d` oder `pnpm docker:up` – siehe [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## So erhalten Sie einen OpenRouter-API-Schlüssel

Transrewrt unterstützt mehrere KI-Anbieter. [OpenRouter](https://openrouter.ai) ist eine beliebte Wahl, da es viele Modelle unter einem einzigen Schlüssel bündelt und auch kostenlose Modelle anbietet.

1. Registrieren Sie sich unter [openrouter.ai](https://openrouter.ai) oder melden Sie sich dort an.
2. Rufen Sie die Seite [Keys](https://openrouter.ai/keys) auf und erstellen Sie einen neuen Schlüssel (geben Sie einen Namen ein und legen Sie optional ein Guthabenlimit fest). Sie können kostenlose Modelle nutzen, ohne Guthaben hinzuzufügen.
3. **Desktop (Electron):** Schlüssel in **Einstellungen → API** einfügen. **Docker:** Umgebungsvariablen wie `OPENROUTER_KEY` setzen (siehe [Schnellstart](#quick-start)).

Verwenden Sie **nicht** das **Body Builder**-Modell von OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) für Übersetzungen, Umschreibungen oder Transformationen: Es gibt JSON-Anfrage-Strukturen zurück, nicht den fertigen Text für diese Aufgaben. Siehe [Einstellungen → Modelle](USER-GUIDE.de.md#models) im Benutzerhandbuch.

Sie können auch andere Anbieter nutzen (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) oder Modelle lokal mit [Ollama](https://ollama.com) betreiben. Eine vollständige Liste der unterstützten Anbieter und Umgebungsvariablen finden Sie unter [Konfiguration](#configuration-and-environment).

> ⚠️ **WARNUNG**<br/>
> Wenn Sie Ollama von einem anderen Gerät, Container oder Dienst aus nutzen, konfigurieren Sie Ollama so, dass externe Verbindungen erlaubt sind (nicht nur localhost).

Weitere Informationen zu Limits, BYOK usw. finden Sie unter [OpenRouter-Authentifizierung](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguration und Umgebung

**Speicherorte der Konfigurationsdatei**

| Installation        | Konfigurationspfad                                 |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (Verwenden Sie ein Volume zur dauerhaften Speicherung) |

<br/>

**Umgebungsvariablen** (nur Web / Docker; Electron verwendet die lokale Konfigurationsdatei)

| Variable         | Standardwert            | Beschreibung |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Server-Port |
| `CONFIG_PATH`    | `/app/data/config.json` | Pfad zur Konfigurationsdatei |
| `OPENROUTER_KEY` | *(leer)*                | OpenRouter-API-Schlüssel |
| `OPENAI_KEY`     | *(leer)*                | OpenAI-API-Schlüssel |
| `CEREBRAS_KEY`   | *(leer)*                | Cerebras-API-Schlüssel |
| `ANTHROPIC_KEY`  | *(leer)*                | Anthropic-API-Schlüssel |
| `GOOGLE_KEY`     | *(leer)*                | Google Gemini-API-Schlüssel |
| `DEEPSEEK_KEY`   | *(leer)*                | DeepSeek-API-Schlüssel |
| `GROQ_KEY`       | *(leer)*                | Groq-API-Schlüssel |
| `MISTRAL_KEY`    | *(leer)*                | Mistral-API-Schlüssel |
| `OLLAMA_URL`     | *(leer)*                | Basis-URL von Ollama (z. B. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(leer)*                | xAI-API-Schlüssel |

Konfigurieren Sie nur die Anbieter, die Sie tatsächlich verwenden. Die Modell-IDs sind namensgegliedert (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` usw.).

**Kostenanzeige:** OpenRouter gibt – wenn zutreffend – die genauen Abrechnungskosten zurück. Bei anderen Anbietern werden **geschätzte** Kosten auf Grundlage der öffentlichen Preisgestaltung von OpenRouter verwendet, sofern ein OpenRouter-Schlüssel vorhanden ist; andernfalls können die Kosten für Nicht-OpenRouter-Anbieter als `0` angezeigt werden. Die Schätzungen sind keine Rechnungen.

<br/>

**Daten und Persistenz:** Bei Docker mounten Sie ein Volume unter `/app/data`, damit `config.json` und die SQLite-Datenbank bei Neustarts des Containers erhalten bleiben. Ohne Volume gehen alle Daten beim Anhalten des Containers verloren.

**Entwickler:** Nachdem Sie Änderungen übernommen haben, die die alte Einzelschlüssel-Konfiguration ersetzen, setzen Sie `data/config.json` zurück oder führen Sie sie mit der neuen Standardstruktur aus `src/config-defaults/config_default.json` zusammen, falls Ihre lokale Datei noch entfernte Felder verwendet (`api_key`, `api_url`, Proxy-Optionen).

<br/>

**Web-Authentifizierung:**

- Standard-Administrator: `admin` / `transrewrt26`.
- Benutzer verwalten unter **Einstellungen → Benutzer**.
- Passwort zurücksetzen: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (aus der Quelle: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **WARNUNG**<br/>
> Ändern Sie das Standard-Administrator-Passwort umgehend auf jedem netzwerkzugänglichen Host.

<br/>

Wichtige Einstellungen (Schriftart, Modelle, Sprachen usw.) finden Sie im Anwendungsbereich „Einstellungen“.

<br/><br/>

<a id="development-and-architecture"></a>

## Entwicklung und Architektur

- **Entwicklung:** Einrichtung, Erstellen, Testen und Bereitstellung (Electron, Web, Docker) – siehe **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektur und Systemübersicht:** Ordnerstruktur, Technologiestapel, Designentscheidungen – siehe **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Versionen und Tags

- **Git-Tags** `v`* (z. B. `v1.0.10`) lösen den [Veröffentlichungs-Workflow](.github/workflows/release.yml) aus. **GitHub Releases** enthalten den Windows-Installer (`.exe`) und Linux-AppImages (**x64** und **arm64**).
- **Docker-Images** werden nach `ghcr.io/wsj-br/transrewrt` veröffentlicht. Die Image-Tags entsprechen der Git-Version (z. B. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) sowie dem Tag `latest`. Mehrfach-Architekturen: `linux/amd64` und `linux/arm64` (z. B. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Mitwirken

1. Forken Sie das Repository.
2. Erstellen Sie einen Feature-Branch: `git checkout -b feature/mein-feature`
3. Führen Sie Ihre Änderungen mit einer klaren Commit-Nachricht durch.
4. Pushen Sie und öffnen Sie eine Pull Request gegen `main`.

Bitte halten Sie den bestehenden Code-Stil ein und testen Sie Ihre Änderungen vor dem Einreichen sowohl im Electron- als auch im Web-Modus. Anleitungen zum Erstellen und Testen finden Sie in [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Fehler melden:** Eröffnen Sie ein Ticket auf [GitHub](https://github.com/wsj-br/transrewrt/issues). Geben Sie Ihre Plattform (Windows / Linux / Docker) und die App-Version an (angezeigt im „Info“-Dialog oder auf der Releases-Seite).

<br/><br/>

<a id="disclaimer"></a>
## Haftungsausschluss

Produktnamen und Symbole unterliegen dem Urheberrecht ihrer jeweiligen Inhaber und dienen ausschließlich der Identifikation. Diese Software ist nicht mit irgendwelchen genannten Marken verbunden oder von ihnen genehmigt.

<br/><br/>

<a id="license"></a>
## Lizenz

Urheberrecht © 2026 Waldemar Scudeller Jr.

[Apache-Lizenz 2.0](LICENSE)