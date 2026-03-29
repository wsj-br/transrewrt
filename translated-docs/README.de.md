---
translated_at: "2026-03-29T01:54:46.100Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lizenz: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plattform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Ein KI-gestütztes Texttool: Übersetzen Sie zwischen Sprachen, formulieren Sie Texte in verschiedenen Stilen um und transformieren Sie Inhalte mit benutzerdefinierten Anweisungen – unter Nutzung mehrerer KI-Anbieter (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI und lokales Ollama). Läuft als Desktopanwendung (Electron) oder als selbstgehostete Webanwendung (Docker).

- **Übersetzen** – zwischen Dutzenden von Sprachen, mit automatischer Spracherkennung
- **Umformulieren** – Grammatik korrigieren, Klarheit verbessern, formell/informell umwandeln, kürzen, erweitern, technische Texte anpassen
- **Transformieren** – benutzerdefinierte KI-Anweisungen; Erstellen und Verwalten von Anweisungen, optionale Zielsprache pro Anweisung
- **Verlauf** – vollständiger Ausführungsverlauf mit Ein- und Ausgabetexten, Filterfunktion und Exportmöglichkeit
- **Modelle & Kosten** – Auswahl von Modellen von beliebigen konfigurierten Anbietern; Kosten- und Nutzungsübersichten mit Protokoll, Zusammenfassungen nach Modell/Aktion/Tag
- **Benutzeroberfläche (UI)** – mehrsprachige Oberfläche (über 30 Sprachen, inkl. Unterstützung von rechts-nach-links-Schrift), Schriftarten, ...
- **Webmodus** – Mehrbenutzersupport mit Administratorrollen
- **Desktop** – Electron-App für Windows und Linux
- **Selbstgehostet** – Docker-Image für amd64 & arm64 (auch für Raspberry Pi geeignet)

Nach der Installation finden Sie im **[Benutzerhandbuch](USER-GUIDE.de.md)** eine vollständige Anleitung zu allen Funktionen.

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt-PT.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Srpski](README.sr.md) · [Español](README.es.md) · [Svenska](README.sv.md) · [ไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md) </small>

# Transrewrt

Ein lokaler, anpassbarer AI-Gateway-Server, der mehrere Anbieter unterstützt, einschließlich OpenAI, die OpenRouter- und die Ollama-APIs.

![Transrewrt-Screenshot](media/screenshot.png)

Ein Open-Source-Projekt von [Matt Klepac](https://mklepac.com).

## Hervorhebungen

- **Lokal und privat**: Ihre API-Schlüssel verlassen niemals Ihr Gerät. Wenn Sie einen lokalen Ollama-Server oder API-Service verwenden, werden Ihre Daten niemals an Dritte gesendet.
- **OpenRouter-Unterstützung**: Verwenden Sie kostenlosen Zugang zu Tausenden von Modellen – einschließlich GPT-4 – über [OpenRouter](https://openrouter.ai/?via=transrewrt). Ihre Schlüssel gehen nur an OpenRouter, und alle Daten bleiben privat und werden nie zum Training verwendet.
- **Anpassbare Ausführungsreihenfolge („Router“)**: Sie können festlegen, in welcher Reihenfolge Anbieter aufgerufen werden – z. B. zuerst lokal, bei Fehlschlag Fallbacks verwenden.
- **Anpassbarer Proxy**: Leiten Sie alle Ihre Anfragen über einen beliebigen Proxy wie [Tor](https://www.torproject.org/) weiter.
- **Reverse Proxy für beliebige APIs**: Konfigurieren Sie zusätzliche Endpunkte, um beliebige APIs über denselben Proxy zu leiten.
- **Unterstützung für mehrere Provider**: Einfache Konfiguration mit OpenAI-ähnlichen Schnittstellen, einschließlich Ollama, OpenRouter und lokalen LLM-Diensten.
- **Mehrere Konten pro Anbieter**: Verwenden Sie mehrere OpenAI-API-Schlüssel (z. B. von Freunden oder Kollegen) und schalten Sie zwischen ihnen um, um Kontingente zu umgehen.
- **Zustandsloser**: Transrewrt speichert niemals Konfigurationsdateien oder Protokolle auf Ihrer Festplatte.
- **Offline-Unterstützung**: Alle Funktionen funktionieren komplett offline, bis auf das Herunterladen neuer Modelle über Ollama.

## Sicherheitshinweise

Das Speichern Ihrer API-Schlüssel im lokalen Speicher Ihres Browsers ist nicht 100 % sicher, aber wahrscheinlich sicherer als das Speichern in Ihrem Textverarbeitungsprogramm. Verwenden Sie auf gemeinsam genutzten Computern ein privates Browsing-Fenster oder geben Sie Ihren Schlüssel nur temporär ein, da er sonst unter Umständen von anderen Benutzern eingesehen werden kann.

Ich bin kein Sicherheitsexperte. Verwenden Sie dieses Tool auf eigenes Risiko.

## Entwicklungsziele

Das Ziel dieses Projekts ist es, eine Open-Source-basierte Lösung zu schaffen, die mehr Flexibilität und Kontrolle bei der Nutzung von LLMs bietet. Wenn Sie weitere Funktionen wünschen oder Bugs melden möchten, erstellen Sie bitte ein Issue auf GitHub.

## Verwendung

### Schnellstart

1. Stellen Sie sicher, dass auf Ihrem Computer [Node.js](https://nodejs.org/) installiert ist.
2. Installieren Sie Transrewrt über npm:

   ```bash
   npm create transrewrt@latest
   ```

3. Klicken Sie auf „Provider verwalten“ und fügen Sie Ihre API-Schlüssel hinzu.

### Alternative Methode: Manuelle Installation mit npm

1. Führen Sie im Terminal Folgendes aus:

   ```bash
   npm install -g create-transrewrt
   create-transrewrt
   ```

2. Klicken Sie auf „Provider verwalten“ und fügen Sie Ihre API-Schlüssel hinzu.

## Erweiterte Konfiguration

### Konfigurieren eines Reverse Proxies

Sie können einen separaten Reverse-Proxy-Endpunkt einrichten, um beliebige APIs über Ihren Transrewrt-Server zu leiten. Geben Sie einen Pfad (z. B. `/api/router`) und die Ziel-URL (z. B. `https://jsonplaceholder.typicode.com`) an. Dann können Sie Anfragen über Ihr Transrewrt-Gateway an `http://localhost:3000/api/router/posts/1` senden, die an `https://jsonplaceholder.typicode.com/posts/1` weitergeleitet werden.

> [!WARNING]
> Dies kann ein Sicherheitsrisiko darstellen, wenn Ihr Transrewrt-Server öffentlich zugänglich ist. Verwenden Sie diese Funktion daher nur lokal.

### OpenRouter-Support

Transrewrt unterstützt OpenRouter-API-Schlüssel. Besuchen Sie [dashboard.openrouter.ai](https://dashboard.openrouter.ai/), um Ihren API-Schlüssel abzurufen (dort finden Sie auch Anweisungen zur Verwendung mit der offiziellen OpenAI-Library). Sobald Sie einen Schlüssel haben, fügen Sie ihn wie üblich im „Provider verwalten“-Bereich hinzu.

### Lokale Ausführung mit Ollama

1. [Installieren Sie Ollama](https://ollama.com/download) auf Ihrem Computer und starten Sie den Server.
2. Laden Sie ein Modell über Ollama herunter (z. B.):

   ```bash
   ollama run llama3
   ```

3. Fügen Sie in Transrewrt einen neuen Provider hinzu: Wählen Sie "Ollama" und verwenden Sie `http://localhost:11434` als Basis-URL. Lassen Sie den API-Key-Feld leer.
4. Stellen Sie sicher, dass das von Ihnen ausgewählte Modell in Ollama ausgeführt wird.

Siehe auch: [Ollama-Modellbibliothek](https://ollama.com/library)

### Ausführen mit Docker

Transrewrt kann auch über Docker gestartet werden:

```bash
docker run -p 3000:3000 ghcr.io/matt-klepac/transrewrt:main
```

Wenn Sie eine Umgebungsvariable für den Port festlegen möchten:

```bash
docker run -p 3000:3000 -e PORT=3000 ghcr.io/matt-klepac/transrewrt:main
```

> [!NOTE]
> Beachten Sie, dass der lokale Speicher beim Schließen des Browsers zurückgesetzt wird, da der Container keine persistenten Volumes nutzt. Für persistente Daten verwenden Sie stattdessen das selbst-gehostete Node.js-Paket.

### Verwendung mit OpenAI-API-Wrapperbibliotheken

Transrewrt leitet OpenAI-Anfragen einfach weiter, sodass es mit jeder Bibliothek funktioniert, die Anfragen an `https://api.openai.com` sendet. Richten Sie den Base-URL der Bibliothek einfach auf Ihre lokale Transrewrt-Instanz (z. B. `http://localhost:3000`) um.

Ein Beispiel in Python mit der OpenAI-Bibliothek:

```python
from openai import OpenAI

client = OpenAI(api_key="your-key", base_url="http://localhost:3000")

response = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": "Du bist ein hilfreicher Assistent."},
    {"role": "user", "content": "Erkläre, warum der Himmel blau ist."}
  ]
)

print(response.choices[0].message.content)
```

## Unterstützte Umgebungsvariablen

- `PORT`: Legt den Port fest, auf dem der Server läuft (Standard: 3000)
- `OPENROUTER_BASE_URL`: Ändert die OpenRouter-API-Basis-URL (Standard: `https://openrouter.ai/api/v1`)
- `CORS_ORIGIN`: Legt die CORS-Origin für die API fest (Standard: `*`)

## Datenschutz

Diese Anwendung läuft vollständig auf Ihrem Gerät und speichert niemals Ihre Daten. Keine Analyse-Tools oder Tracking-Mechanismen sind enthalten.

## Unterstützen Sie das Projekt

Wenn Ihnen dieses Projekt gefällt, erwägen Sie eine Unterstützung via [GitHub Sponsors](https://github.com/sponsors/matt-klepac) oder [PayPal](https://paypal.me/mklepac).

## Lizenz

[MIT](LICENSE)

## Gleichnamige Projekte

Achtung: Dies ist **nicht** mit [Transcrypt](https://www.transcrypt.org/) oder [Rewrt](https://rewrt.ai/) verknüpft.

E.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Hinweis zu Übersetzungen der Benutzeroberfläche und der Dokumentation:** Alle Oberflächensprachen außer dem Original (Englisch (GB)) 
> wurden mithilfe von KI-Modellen übersetzt. Die Formulierungen können ungenau sein oder Fehler enthalten.

</small>

<br/>

<a id="screenshots"></a>

## Bildschirmfotos

**Sprachauswahl**

![Sprachauswahl](../images/screenshots/de/language-selector.png)

**Übersetzen**

![Übersetzen](../images/screenshots/de/translate.png)

**Transformieren – Eingabefeld für Anweisungen**

![Transformieren – Eingabefeld für Anweisungen](../images/screenshots/de/transform-prompt-edit.png)

**Übersichtsseite (Dashboard)**

![Dashboardübersicht – Nutzung](../images/screenshots/de/dashboard-summary.png)

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
  - [Zeitzone konfigurieren](#configuring-the-timezone)
- [OpenRouter-API-Schlüssel besorgen](#getting-an-openrouter-api-key)
- [Konfiguration und Umgebung](#configuration-and-environment)
- [Entwicklung und Architektur](#development-and-architecture)
- [Probleme melden](#reporting-issues)
- [Haftungsausschluss](#disclaimer)
- [Lizenz](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Kurzanleitung

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

Ersetzen Sie `sk-or-your-key` durch Ihren [OpenRouter-API-Schlüssel](https://openrouter.ai/keys) (oder setzen Sie Schlüssel anderer Anbieter; siehe [Konfiguration](#configuration-and-environment)). Rufen Sie [http://localhost:5000](http://localhost:5000) auf und ändern Sie das Standard-Administratorpasswort, bevor Sie den Dienst öffentlich zugänglich machen.

<br/>

> ℹ️ **HINWEIS**<br/>
> Bei Docker werden LLM-Zugangsdaten über Umgebungsvariablen wie `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … gesetzt (nicht über die Web-Oberfläche). Bei der Desktop-Anwendung (Electron) konfigurieren Sie die Schlüssel unter **Einstellungen → API**.

<br/>

**Windows**

Laden Sie die neueste `Transrewrt Setup x.y.z.exe` von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter, führen Sie den Installer aus und starten Sie die Anwendung über das Startmenü oder eine Desktop-Verknüpfung. Geben Sie Ihre API-Schlüssel unter **Einstellungen → API** ein. Sie müssen mindestens einen Anbieter konfigurieren; OpenRouter ist eine gängige Wahl für kostenlose Modelle.

<br/>

**Linux**

Laden Sie die `.AppImage`-Datei für Ihre CPU von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter (`x64` für typische PCs, `arm64` für viele ARM-Geräte, inklusive Raspberry Pi 4+), und führen Sie anschließend Folgendes aus:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Geben Sie Ihre API-Schlüssel unter **Einstellungen → API** ein. Sie müssen mindestens einen Anbieter konfigurieren; OpenRouter ist eine gängige Wahl für kostenlose Modelle.

Unter Debian/Ubuntu müssen möglicherweise zunächst zusätzliche Abhängigkeiten installiert werden:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Weitere Details finden Sie unter [Installation → Linux](#linux-electron).

<br/>

> ℹ️ **HINWEIS**<br/>

> macOS wird derzeit nicht unterstützt. Transrewrt ist verfügbar für Windows, Linux und Docker.

<br/>

Sobald die Anwendung läuft, lesen Sie das **[Benutzerhandbuch](USER-GUIDE.de.md)**, um zu erfahren, wie Sie Texte übersetzen, umschreiben und umwandeln, Prompts verwalten und Modelle konfigurieren können.

<br/><br/>

<a id="installation"></a>

## Installation

<a id="windows-electron"></a>

### Windows (Electron)

- Laden Sie das aktuelle Installationsprogramm von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter.
- Führen Sie die `.exe`-Datei aus und folgen Sie den Anweisungen des Installationsassistenten.
- Erster Start: Starten Sie die Anwendung über das Startmenü oder eine Verknüpfung auf dem Desktop.

<br/>

> ℹ️ **HINWEIS**<br/>
> Windows zeigt möglicherweise eine dieser Sicherheitswarnungen an (normal bei nicht signierten oder unabhängigen Anwendungen):
>   - **Benutzerkontensteuerung (UAC)**: „Möchten Sie zulassen, dass diese App von einem unbekannten Herausgeber Änderungen an Ihrem Gerät vornimmt?“ → Klicken Sie auf **Ja**.
>   - **Microsoft Defender SmartScreen**: „Windows hat Ihren PC geschützt“ → Klicken Sie auf **Weitere Informationen** → **Trotzdem ausführen**.
>
> Dies geschieht, weil die App nicht von Microsoft oder einem bekannten Herausgeber signiert wurde – sie ist sicher, sofern Sie sie von unseren offiziellen GitHub-Releases heruntergeladen haben
> (überprüfen Sie dazu den SHA256-Prüfsummenwert unten).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- Lade die passende `.AppImage`-Datei (`x64` oder `arm64`) aus den [Veröffentlichungen](https://github.com/wsj-br/transrewrt/releases) herunter.
- Ausführen: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` auf x86_64/amd64; auf ARM64 die Datei `...-arm64.AppImage` verwenden.
- Zusätzliche Abhängigkeiten (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Weitere Informationen finden Sie in [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>

### Docker

- Abrufen: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Mindestens einen Provider-Schlüssel über eine Umgebungsvariable setzen (z. B. `OPENROUTER_API_KEY` für OpenRouter). Variablen mit `-e` oder über `docker compose` / `.env` übergeben, damit Geheimnisse nicht in das Image eingebettet werden.
- Provider-Schlüssel werden **nicht** in der Web-Oberfläche eingegeben; der Server liest sie aus der Umgebung.

Beispiel – benanntes Volume für Datenspeicherung (OpenRouter-Schlüssel über Umgebung):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Alternativ, falls Sie Docker Compose bevorzugen:

```bash
# die Compose-Datei herunterladen
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# die Datei bearbeiten, um die API_KEYS hinzuzufügen und die Zeitzone (TZ) anzupassen
vi transrewrt.yml
# den Container starten
docker compose -f transrewrt.yml up -d

Siehe [Konfiguration](#configuration-and-environment) für alle Umgebungsvariablen wie `PORT`, `CONFIG_PATH`, `TZ` und LLM-Schlüssel (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>

### Konfigurieren der Zeitzone

Datum und Uhrzeit in der Benutzeroberfläche der Anwendung richten sich nach der **Browser**-Lokalisierung und -Zeitzone. Für das **serverseitige** Verhalten (Protokollierung und Ähnliches) verwendet der Container die Umgebungsvariable `TZ`. Der Standardwert ist `TZ=Europe/London`.

Um eine andere Zeitzone zu verwenden, setzen Sie `TZ` in Ihrer Compose-Datei, zum Beispiel:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Oder übergeben Sie sie beim Ausführen des Containers (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Auf vielen Linux-Systemen können Sie den System-Zeitzonennamen folgendermaßen kopieren:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Eine Liste gültiger Zeitzonennamen wird in der [tz-Datenbank](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia) gepflegt.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Abrufen eines OpenRouter-API-Schlüssels

Transrewrt unterstützt mehrere KI-Anbieter. [OpenRouter](https://openrouter.ai) ist eine beliebte Wahl, da es viele Modelle unter einem einzigen Schlüssel zusammenfasst und auch kostenlose Modelle anbietet.

1. Registrieren Sie sich oder melden Sie sich auf [openrouter.ai](https://openrouter.ai) an.
2. Rufen Sie die Seite [Keys](https://openrouter.ai/keys) auf und erstellen Sie einen neuen Schlüssel (geben Sie ihm einen Namen, und legen Sie optional ein Guthabenlimit fest). Sie können kostenlose Modelle nutzen, ohne Guthaben hinzuzufügen.
3. **Desktop (Electron):** Schlüssel im Bereich **Einstellungen → API** einfügen. **Docker:** Umgebungsvariablen wie `OPENROUTER_API_KEY` setzen (siehe [Schnellstart](#quick-start)).

Verwenden Sie **nicht** das OpenRouter-Modell **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) für Übersetzungen, Umschreibungen oder Umwandlungen: Es gibt JSON-Anfrage-Strukturen zurück, nicht den fertigen Text für diese Aufgaben. Siehe [Einstellungen → Modelle](USER-GUIDE.de.md#models) im Benutzerhandbuch.

Sie können auch andere Anbieter verwenden (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) oder Modelle lokal mit [Ollama](https://ollama.com) ausführen. Eine vollständige Liste der unterstützten Anbieter und Umgebungsvariablen finden Sie unter [Konfiguration](#configuration-and-environment).

> ⚠️ **ACHTUNG**<br/>
> Wenn Sie Ollama von einem anderen Gerät, Container oder Dienst aus verwenden, vergessen Sie nicht, Ollama so zu konfigurieren, dass externe Verbindungen erlaubt sind (nicht nur localhost).

Für Informationen zu Limits, BYOK und mehr siehe [OpenRouter-Authentifizierung](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Konfiguration und Umgebung

**Pfade der Konfigurationsdateien**

| Bereitstellung       | Konfigurationsort                                     |
| -------------------- | ----------------------------------------------------- |
| Electron (Windows)   | `%APPDATA%\transrewrt\`                               |
| Electron (Linux)     | `~/.config/transrewrt/`                               |
| Web / Docker         | `/app/data/config.json` (verwenden Sie ein Volume, um Daten zu speichern) |

<br/>

**Umgebungsvariablen** (nur Web/Docker; Electron verwendet die lokale Konfigurationsdatei)

| Variable         | Standardwert              | Beschreibung |
| ---------------- | ------------------------- | ------------ |
| `PORT`           | `5000`                    | Server-Port zum Lauschen |
| `CONFIG_PATH`    | `/app/data/config.json`   | Pfad zur Konfigurationsdatei |
| `TZ`             | `Europe/London`           | IANA-Zeitzone für die serverseitige Zeit (Protokollierung usw.); die Oberfläche richtet sich weiterhin nach dem Browser. Siehe [Docker → Zeitzone](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(leer)*              | OpenRouter-API-Schlüssel |
| `OPENAI_API_KEY`     | *(leer)*              | OpenAI-API-Schlüssel |
| `CEREBRAS_API_KEY`   | *(leer)*              | Cerebras-API-Schlüssel |
| `ANTHROPIC_API_KEY`  | *(leer)*              | Anthropic-API-Schlüssel |
| `GOOGLE_API_KEY`     | *(leer)*              | Google-Gemini-API-Schlüssel |
| `DEEPSEEK_API_KEY`   | *(leer)*              | DeepSeek-API-Schlüssel |
| `GROQ_API_KEY`       | *(leer)*              | Groq-API-Schlüssel |
| `MISTRAL_API_KEY`    | *(leer)*              | Mistral-API-Schlüssel |
| `OLLAMA_URL`     | *(leer)*                    | Basis-URL von Ollama (z. B. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(leer)*              | xAI-API-Schlüssel |

Konfigurieren Sie nur die Anbieter, die Sie auch verwenden. Modell-IDs sind namensraumgebunden (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Kostendarstellung:** OpenRouter gibt bei Anwendbarkeit die genaue Abrechnungskosten zurück. Bei anderen Anbietern werden **geschätzte** Kosten anhand der öffentlichen Preisgestaltung von OpenRouter angezeigt, sofern ein OpenRouter-Schlüssel vorhanden ist. Ohne diesen kann die Kostenangabe für Nicht-OpenRouter-Anbieter `0` betragen. Die Schätzungen entsprechen keinen Rechnungen.

<br/>

**Daten und Persistenz:** Verwenden Sie bei Docker ein Volume, das an `/app/data` eingehängt wird, damit `config.json` und die SQLite-Datenbank bei Neustarts des Containers erhalten bleiben. Ohne ein Volume gehen alle Daten verloren, sobald der Container beendet wird.

**Entwickler:** Nachdem Sie Änderungen gezogen haben, die die alte Einzelschlüssel-Konfiguration ersetzen, setzen Sie `data/config.json` zurück oder führen Sie es mit der neuen Standardstruktur aus `src/config-defaults/config_default.json` zusammen, falls Ihre lokale Datei noch entfernte Felder verwendet (`api_key`, `api_url`, Proxy-Optionen).

<br/>

**Web-Authentifizierung:**

- Standard-Administrator: `admin` / `transrewrt26`.
- Verwalten Sie Benutzer unter **Einstellungen → Benutzer**.

- Passwort zurücksetzen: `docker exec <container> reset-web-password '<Benutzername>' '<neues-Passwort>'`  
  (aus der Quelle: `pnpm run reset-web-password -- <Benutzername> <neues-Passwort>`)

<br/>

> ⚠️ **ACHTUNG**<br/>
> Ändern Sie sofort das standardmäßige Administratorpasswort auf jedem netzwerkzugänglichen Host.

<br/>

Wichtige Einstellungen (Schriftart, Modelle, Sprachen usw.) sind in den Anwendungseinstellungen verfügbar.

<br/><br/>

<a id="development-and-architecture"></a>

## Entwicklung und Architektur

- **Entwicklung:** Einrichtung, Erstellen, Testen und Bereitstellen (Electron, Web, Docker) – siehe **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektur und Systemübersicht:** Ordnerstruktur, verwendete Technologien, Designentscheidungen – siehe **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## Probleme melden

Eröffnen Sie ein Issue auf [GitHub](https://github.com/wsj-br/transrewrt/issues). Geben Sie dabei Ihre Plattform (Windows / Linux / Docker) und die App-Version an (angezeigt im Info-Dialog oder auf der Releases-Seite).

<br/><br/>

<a id="disclaimer"></a>

## Haftungsausschluss

Produktnamen und Symbole gehören ihren jeweiligen Inhabern und dienen nur der Identifikation. Diese Software ist weder mit den genannten Marken verbunden noch wird sie von ihnen unterstützt.

<br/><br/>

<a id="license"></a>

## Lizenz

Copyright © 2026 Waldemar Scudeller Jr.

[Apache Lizenz 2.0](LICENSE)