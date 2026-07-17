---
title: Schnellstart
description: >-
  Installieren Sie Transrewrt unter Windows oder Linux, oder führen Sie die
  selbst gehostete Docker-Web-App aus.
---



Wählen Sie den für Sie passenden Weg. Alle sind kostenlos und Open Source (Apache 2.0).

## Docker (selbst gehostete Web-App)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Ersetzen Sie `PROVIDER_API_KEY=sk-or-your-key` durch Ihren API-Schlüssel des gewählten Anbieters (siehe unterstützte Optionen unter [Konfiguration](/docs/configuration/)).

Öffnen Sie dann [http://localhost:5000](http://localhost:5000) und **ändern Sie das Standard-Admin-Passwort**, bevor Sie den Dienst freigeben.

:::caution
In Docker werden LLM-Anmeldeinformationen mit Umgebungsvariablen (z. B. `PROVIDER_API_KEY`) festgelegt. Sie werden **nicht** in der Web-Benutzeroberfläche eingegeben. Auf dem Desktop konfigurieren Sie Schlüssel unter **Einstellungen → API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Laden Sie die neueste `Transrewrt Setup x.y.z.exe` von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter.
2. Führen Sie das Installationsprogramm aus.
3. Öffnen Sie die App und geben Sie API-Schlüssel unter **Einstellungen → API** ein. Konfigurieren Sie mindestens einen Anbieter; OpenRouter ist eine gängige Wahl für kostenlose Modelle.

:::note
Windows zeigt möglicherweise UAC- oder SmartScreen-Warnungen für nicht signierte Indie-Apps an. Bevorzugen Sie Downloads von der offiziellen GitHub-Releases-Seite und überprüfen Sie die Prüfsummen, wenn diese veröffentlicht werden.
:::

## Linux

Laden Sie die `.AppImage` für Ihre CPU von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter (`x64` oder `arm64`, einschließlich Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Geben Sie API-Schlüssel unter **Einstellungen → API** ein.

Wenn Chromium GPU-/EGL-Fehler ausgibt, die App aber funktioniert, können Sie die Hardwarebeschleunigung deaktivieren:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS wird derzeit nicht unterstützt. Transrewrt ist für Windows, Linux und Docker verfügbar.
:::

## Nächste Schritte

1. [API-Schlüssel abrufen](/docs/api-key/)
2. Führen Sie eine einfache Übersetzung durch, um zu bestätigen, dass alles funktioniert
3. Lesen Sie die Anleitungen zu [Übersetzen](/docs/translate/), [Umschreiben](/docs/rewrite/) und [Transformieren](/docs/transform/)
