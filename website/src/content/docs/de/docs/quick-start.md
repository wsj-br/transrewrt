---
title: Schnellstart
description: >-
  Installieren Sie Transrewrt unter Windows, Linux oder macOS, oder führen Sie
  die Docker-Web-App aus.
---



Wählen Sie den für Sie passenden Weg. Alle sind kostenlos und Open Source (Apache 2.0).

## Docker (Web-App)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Ersetzen Sie `PROVIDER_API_KEY` durch die Variable für Ihren Anbieter (z. B. `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `XIA_API_KEY`, ...) und legen Sie deren Wert fest. Die vollständige Liste finden Sie unter [Konfiguration](/docs/configuration/#environment-variables-web--docker).

Öffnen Sie dann [http://localhost:5000](http://localhost:5000) und **ändern Sie das Standard-Admin-Passwort**, bevor Sie den Dienst freigeben.

:::tip
In Docker werden LLM-Anmeldeinformationen mit Umgebungsvariablen (z. B. `PROVIDER_API_KEY`) festgelegt. Sie werden **nicht** in der Web-Benutzeroberfläche eingegeben. Auf dem Desktop konfigurieren Sie Schlüssel unter **Einstellungen → API-Konfiguration**.
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
3. Öffnen Sie die App und geben Sie API-Schlüssel unter **Einstellungen → API-Konfiguration** ein. Konfigurieren Sie mindestens einen Anbieter; OpenRouter ist eine gängige Wahl für kostenlose Modelle.

:::note
Windows zeigt möglicherweise UAC- oder SmartScreen-Warnungen an, wenn Sie die App installieren. Die Installation ist sicher, wenn Sie sie von der offiziellen GitHub Releases-Seite herunterladen. Klicken Sie auf „Weitere Informationen“ und „Trotzdem ausführen“, um die Installation durchzuführen.
:::

## Linux

Laden Sie die `.AppImage` für Ihre CPU von [Releases](https://github.com/wsj-br/transrewrt/releases) herunter (`x64` oder `arm64`, einschließlich Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Geben Sie API-Schlüssel unter **Einstellungen → API-Konfiguration** ein.

Wenn Chromium GPU-/EGL-Fehler ausgibt, die App aber funktioniert, können Sie die Hardwarebeschleunigung deaktivieren:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

## macOS

Laden Sie das `.dmg` für Ihren Mac von den [Releases](https://github.com/wsj-br/transrewrt/releases) herunter:

- **Apple Silicon** — `Transrewrt-x.y.z-arm64.dmg`
- **Intel** — `Transrewrt-x.y.z-x64.dmg`

Öffnen Sie das Disk-Image und ziehen Sie Transrewrt in den Ordner „Programme“. Geben Sie API-Schlüssel unter **Einstellungen → API-Konfiguration** ein.

:::noteDer macOS-Build ist nicht signiert (keine Apple-Notarisierung). Gatekeeper blockiert den ersten Start. Klicken Sie mit der rechten Maustaste auf `Transrewrt.app` und wählen Sie **Öffnen**, dann bestätigen Sie **Öffnen**.
:::

Oder löschen Sie das Quarantäne-Attribut:

```bash
xattr -dr com.apple.quarantine /Applications/Transrewrt.app
```

## Aktualisieren

- **Windows** — Laden Sie das neuere `Transrewrt Setup x.y.z.exe` von den [Releases](https://github.com/wsj-br/transrewrt/releases) herunter und führen Sie es aus. Einstellungen und Daten bleiben erhalten.
- **Linux** — Laden Sie das neuere `.AppImage` herunter und ersetzen Sie die alte Datei. Einstellungen und Daten bleiben erhalten.
- **macOS** — Laden Sie das neuere `.dmg` herunter, öffnen Sie es und ziehen Sie Transrewrt in den Ordner „Programme“, wobei Sie die vorhandene App ersetzen. Einstellungen und Daten bleiben erhalten.
- **Docker** — Ziehen Sie das neue Image und erstellen Sie den Container neu. Daten bleiben im `/app/data`-Volume erhalten:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## Nächste Schritte

1. [API-Schlüssel abrufen](/docs/api-key/)
2. Führen Sie eine einfache Übersetzung durch, um zu bestätigen, dass alles funktioniert
3. Lesen Sie die Anleitungen zu [Übersetzen](/docs/translate/), [Umschreiben](/docs/rewrite/) und [Transformieren](/docs/transform/)
