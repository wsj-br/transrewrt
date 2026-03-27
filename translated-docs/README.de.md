---
translated_at: "2026-03-27T22:51:47.126Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
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

KI-gestütztes Textwerkzeug: Übersetzung zwischen Sprachen, Umschreibung in verschiedenen Stilen und Transformation mit benutzerdefinierten Anweisungen – mit Unterstützung mehrerer KI-Anbieter (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI und lokales Ollama). Läuft als Desktop-App (Electron) oder als selbstgehostete Web-App (Docker).

- **Übersetzen** — zwischen Dutzenden von Sprachen mit automatischer Erkennung der Ausgangssprache
- **Umformulieren** — Grammatik korrigieren, Klarheit verbessern, formell/informell, kürzen, erweitern, technisch
- **Transformieren** — benutzerdefinierte KI-Anweisungen; Anweisungen erstellen und verwalten, optionale Zielsprache je Anweisung
- **Verlauf** — vollständiger Ausführungsverlauf mit Ein- und Ausgabetexten, Filterfunktion und Export
- **Modelle & Kosten** — Auswahl von Modellen bei jedem konfigurierten Anbieter; Dashboard für Kosten und Nutzung mit Log, sowie Zusammenfassungen nach Modell/Operation/Tag
- **Benutzeroberfläche** — mehrsprachige Oberfläche (über 30 Sprachen, Unterstützung von rechts-nach-links-Sprachen), Schriften, ...
- **Web-Modus** — Unterstützung mehrerer Benutzer mit Administratorrollen
- **Desktop** — Electron-App für Windows und Linux
- **Selbstgehostet** — Docker-Image für amd64 & arm64 (bereit für Raspberry Pi)

Nach der Installation lesen Sie das **[Benutzerhandbuch](USER-GUIDE.de.md)** für eine vollständige Übersicht über alle Funktionen.

<small>**In anderen Sprachen lesen:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Hinweis zu UI- und Dokumentationsübersetzungen:** Alle Oberflächensprachen außer dem Original Englisch (UK)  
> wurden mithilfe von KI-Modellen übersetzt; die Formulierungen können ungenau oder fehlerhaft sein.

</small>

<br/>

<a id="screenshots"></a>

## Screenshots

**Sprachauswahl**

![Language selector](../images/screenshots/de/language-selector.png)

**Übersetzen**

![Translate](../images/screenshots/de/translate.png)

**Transformieren – Eingabeaufforderungs-Editor**

![Transform - prompt editor](../images/screenshots/de/transform-prompt-edit.png)

**Dashboard**

![Kosten-Dashboard](../images/screenshots/de/dashboard-summary.png)

**Verlauf**

![Verlauf](../images/screenshots/de/history.png)

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
- [Beschaffung eines OpenRouter-API-Schlüssels](#getting-an-openrouter-api-key)
- [Konfiguration und Umgebung](#configuration-and-environment)
- [Entwicklung und Architektur](#development-and-architecture)
- [Versionen und Tags](#releases-and-tags)
- [Beitragen](#contributing)
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

Ersetzen Sie `sk-or-your-key` durch Ihren [OpenRouter-API-Schlüssel](https://openrouter.ai/keys) (oder setzen Sie Schlüssel anderer Anbieter; siehe [Konfiguration](#configuration-and-environment)). Öffnen Sie [http://localhost:5000](http://localhost:5000) und ändern Sie das Standard-Administratorpasswort, bevor Sie den Dienst öffentlich zugänglich machen.

<br/>

> ℹ️ **HINWEIS**<br/>
> Bei Docker werden LLM-Anmeldedaten über Umgebungsvariablen wie `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … gesetzt (nicht über die Weboberfläche). Bei Desktop-Anwendungen (Electron) konfigurieren Sie die Schlüssel unter **Einstellungen → API**.

<br/>

**Windows**

Laden Sie die neueste `Transrewrt Setup x.y.z.exe` von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter, führen Sie den Installer aus und starten Sie dann das Programm über das Startmenü oder eine desktopgestützte Verknüpfung. Geben Sie Ihre API-Schlüssel unter **Einstellungen → API** ein. Sie müssen mindestens einen Anbieter konfigurieren; OpenRouter ist eine gängige Wahl für kostenlose Modelle.

<br/>

**Linux**

Laden Sie die passende `.AppImage`-Datei für Ihre CPU von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter (`x64` für typische PCs, `arm64` für viele ARM-Geräte, einschließlich Raspberry Pi 4+), danach:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Geben Sie Ihre API-Schlüssel unter **Einstellungen → API** ein. Sie müssen mindestens einen Anbieter konfigurieren; OpenRouter ist eine gängige Wahl für kostenlose Modelle.

Unter Debian/Ubuntu müssen Sie ggf. zuerst zusätzliche Abhängigkeiten installieren:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Weitere Informationen finden Sie unter [Installation → Linux](#linux-electron).

<br/>

> ℹ️ **HINWEIS**<br/>
> macOS wird derzeit nicht unterstützt. Transrewrt ist für Windows, Linux und Docker verfügbar.

<br/>

Sobald die Anwendung läuft, lesen Sie bitte den **[Benutzerleitfaden](USER-GUIDE.de.md)**, um zu erfahren, wie Sie Texte übersetzen, umschreiben und transformieren, Eingabeaufforderungen verwalten und Modelle konfigurieren können.

<br/><br/>

<a id="installation"></a>

## Installation

<a id="windows-electron"></a>
### Windows (Electron)

- Laden Sie das neueste Installationsprogramm von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter.
- Führen Sie die `.exe`-Datei aus und folgen Sie dem Installationsassistenten.
- Erster Start: Starten Sie die App über das Startmenü oder die Desktopverknüpfung.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Laden Sie die passende `.AppImage`-Datei (`x64` oder `arm64`) von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter.
- Ausführen: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` auf x86_64/amd64 oder verwenden Sie den Dateinamen `...-arm64.AppImage` auf ARM64.
- Zusätzliche Abhängigkeiten (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Weitere Informationen finden Sie in [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Herunterladen: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Legen Sie mindestens einen Anbieterschlüssel über Umgebungsvariablen fest (z. B. `OPENROUTER_API_KEY` für OpenRouter). Übergeben Sie Variablen mit `-e` oder mittels `docker compose` / `.env`, damit Geheimnisse nicht in das Image eingebettet werden.
- Anbieterschlüssel werden **nicht** über die Web-Oberfläche eingegeben; der Server liest sie aus der Umgebung.

Beispiel – benanntes Volume für Persistenz (OpenRouter-Schlüssel per Umgebung):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Alternativ, falls Sie Docker Compose bevorzugen:

```
# Compose-Datei herunterladen
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Datei bearbeiten, um die API-KEYS hinzuzufügen
vi transrewrt.yml
# Container starten
docker compose -f transrewrt.yml up -d
```

<br/>

| Option   | Beschreibung                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Port     | `5000` (Zuordnung mit `-p 5000:5000`)                                                                                                   |
| Volume   | Mounten Sie `/app/data`, um Konfiguration und Datenbank dauerhaft zu speichern                                                          |
| Umgebungsvariablen | `PORT`, `CONFIG_PATH` sowie LLM-Schlüssel (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) – siehe [Konfiguration](#configuration-and-environment) |

Zum Bauen und Ausführen aus der Quelle: `docker compose up --build -d` oder `pnpm docker:up` – siehe [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## So erhalten Sie einen OpenRouter-API-Schlüssel

Transrewrt unterstützt mehrere KI-Anbieter. [OpenRouter](https://openrouter.ai) ist eine beliebte Wahl, da viele Modelle unter einem einzigen Schlüssel gebündelt werden und kostenlose Modelle angeboten werden.

1. Registrieren Sie sich oder melden Sie sich an unter [openrouter.ai](https://openrouter.ai).
2. Öffnen Sie die [Keys-Seite](https://openrouter.ai/keys) und erstellen Sie einen neuen Schlüssel (geben Sie ihm einen Namen, optional auch ein Guthabenlimit). Sie können kostenlose Modelle nutzen, ohne Guthaben hinzuzufügen.
3. **Desktop (Electron):** Fügen Sie den Schlüssel unter **Einstellungen → API** ein. **Docker:** Setzen Sie Umgebungsvariablen wie `OPENROUTER_API_KEY` (siehe [Schnellstart](#quick-start)).

Verwenden Sie nicht das OpenRouter-**Body Builder**-Modell ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) für Übersetzungen, Umschreibungen oder Transformationen: Es gibt JSON-Anfrage-Inhalte zurück, nicht den fertigen Text für diese Aufgaben. Siehe [Einstellungen → Modelle](USER-GUIDE.de.md#models) im Benutzerhandbuch.

Sie können auch andere Anbieter verwenden (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) oder Modelle lokal mit [Ollama](https://ollama.com) ausführen. Eine vollständige Liste der unterstützten Anbieter und Umgebungsvariablen finden Sie unter [Konfiguration](#configuration-and-environment).

> ⚠️ **WARNUNG**<br/>
> Wenn Sie Ollama von einem anderen Gerät, Container oder Dienst verwenden, denken Sie daran, Ollama so zu konfigurieren, dass externe Verbindungen erlaubt sind (nicht nur localhost).

Weitere Informationen zu Limits, BYOK usw. finden Sie unter [OpenRouter-Authentifizierung](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguration und Umgebung

**Konfigurationsdateipfade**

| Bereitstellung     | Konfigurationspfad                                |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (Volumen zur Persistenz verwenden) |

<br/>

**Umgebungsvariablen** (nur Web/Docker; Electron verwendet die lokale Konfigurationsdatei)

| Variable             | Standard                 | Beschreibung |
| -------------------- | ------------------------ | ----------- |
| `PORT`               | `5000`                   | Server-Port |
| `CONFIG_PATH`        | `/app/data/config.json`  | Pfad zur Konfigurationsdatei |
| `OPENROUTER_API_KEY` | *(leer)*                 | OpenRouter-API-Schlüssel |
| `OPENAI_API_KEY`     | *(leer)*                 | OpenAI-API-Schlüssel |
| `CEREBRAS_API_KEY`   | *(leer)*                 | Cerebras-API-Schlüssel |
| `ANTHROPIC_API_KEY`  | *(leer)*                 | Anthropic-API-Schlüssel |
| `GOOGLE_API_KEY`     | *(leer)*                 | Google Gemini-API-Schlüssel |
| `DEEPSEEK_API_KEY`   | *(leer)*                 | DeepSeek-API-Schlüssel |
| `GROQ_API_KEY`       | *(leer)*                 | Groq-API-Schlüssel |
| `MISTRAL_API_KEY`    | *(leer)*                 | Mistral-API-Schlüssel |
| `OLLAMA_URL`         | *(leer)*                 | Basis-URL von Ollama (z. B. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(leer)*                 | xAI-API-Schlüssel |

Konfigurieren Sie nur die Anbieter, die Sie verwenden. Modell-IDs sind namensraumbezogen (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…` usw.).

**Kostenanzeige:** OpenRouter gibt – falls zutreffend – die genauen Abrechnungskosten zurück. Bei anderen Anbietern werden **geschätzte** Kosten anhand der öffentlichen Preise von OpenRouter angezeigt, sofern ein OpenRouter-Schlüssel vorhanden ist; andernfalls können Nicht-OpenRouter-Kosten als `0` erscheinen. Schätzungen entsprechen nicht der Rechnung.

<br/>

**Daten und Persistenz:** Verwenden Sie bei Docker ein angehängtes Volume am Pfad `/app/data`, damit `config.json` und die SQLite-Datenbank beim Neustart des Containers erhalten bleiben. Ohne Volume gehen alle Daten beim Stoppen des Containers verloren.

**Entwickler:** Nachdem Sie Änderungen übernommen haben, die die alte Einzelschlüssel-Konfiguration ersetzen, setzen Sie Ihre lokale `data/config.json` zurück oder führen Sie sie mit der neuen standardmäßigen Struktur aus `src/config-defaults/config_default.json` zusammen, falls Ihre lokale Datei noch entfernte Felder verwendet (`api_key`, `api_url`, Proxy-Optionen).

<br/>

**Web-Authentifizierung:**

- Standard-Administrator: `admin` / `transrewrt26`.
- Benutzerverwaltung unter **Einstellungen → Benutzer**.
- Passwort zurücksetzen: `docker exec <container> reset-web-password '<benutzername>' '<neues-passwort>'`
  (aus dem Quellcode: `pnpm run reset-web-password -- <benutzername> <neues-passwort>`)

<br/>

> ⚠️ **WARNUNG**<br/>
> Ändern Sie das Standardpasswort des Administrators sofort auf jedem netzwerkzugänglichen Host.

<br/>

Wichtige Einstellungen (Schriftart, Modelle, Sprachen etc.) sind in den Anwendungseinstellungen verfügbar.

<br/><br/>

<a id="development-and-architecture"></a>

## Entwicklung und Architektur

- **Entwicklung:** Einrichtung, Erstellen, Testen und Bereitstellung (Electron, Web, Docker) – siehe **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektur und Systemübersicht:** Ordnerstruktur, verwendete Technologien, Designentscheidungen – siehe **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Releases und Tags

- **Git-Tags** vom Typ `v`* (z. B. `v1.0.10`) lösen den [Veröffentlichungs-Workflow](.github/workflows/release.yml) aus. Bei **GitHub-Releases** werden der Windows-Installer (`.exe`) und Linux AppImages (**x64** und **arm64**) bereitgestellt.
- **Docker-Images** werden auf `ghcr.io/wsj-br/transrewrt` veröffentlicht. Die Image-Tags entsprechen der Git-Version (z. B. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) sowie dem Tag `latest`. Multi-Architektur: `linux/amd64` und `linux/arm64` (z. B. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Mitwirken

1. Kopieren Sie das Repository.
2. Erstellen Sie einen Feature-Branch: `git checkout -b feature/mein-feature`
3. Führen Sie Ihre Änderungen mit einer klaren Commit-Nachricht durch.
4. Übertragen Sie Ihre Änderungen und öffnen Sie einen Pull Request gegen `main`.

Bitte richten Sie sich nach dem bestehenden Code-Stil und testen Sie Ihre Änderungen sowohl im Electron- als auch im Web-Modus, bevor Sie diese einreichen. Anleitungen zum Erstellen und Testen finden Sie in [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Probleme melden:** Öffnen Sie ein Ticket auf [GitHub](https://github.com/wsj-br/transrewrt/issues). Geben Sie Ihre Plattform (Windows / Linux / Docker) und die App-Version an (angezeigt im Info-Fenster oder auf der Release-Seite).

<br/><br/>

<a id="disclaimer"></a>
## Haftungsausschluss

Produktnamen und Symbole gehören ihren jeweiligen Eigentümern und werden ausschließlich zum Zweck der Identifikation verwendet. Diese Software steht in keiner Verbindung mit den genannten Marken und wird nicht von ihnen unterstützt.

<br/><br/>

<a id="license"></a>
## Lizenz

Urheberrecht © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)