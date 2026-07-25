---
title: Konfiguration
description: >-
  Speicherorte der Konfigurationsdateien, Docker-Umgebungsvariablen,
  Datenschutzmodus und Web-Authentifizierung.
---



## Speicherorte der Konfigurationsdateien

| Bereitstellung | Datenordner |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/` (verwenden Sie ein Volume zur Persistenz) |

Der Datenordner enthält alles, was gesichert werden sollte:

- `config.json` — Einstellungen und (Desktop) verschlüsselte API-Schlüssel
- `state.json` — zuletzt verwendete Sprachen, Modell und Ansichtszustand
- `presets.json` — Katalog der Easy-Modus-Voreinstellungen im Cache
- `transrewrt.db` — SQLite-Datenbank mit Verlauf, Kosten, Prompts, Glossar und (Web-)Benutzern

Sie können auch ein portables Backup-ZIP aus der App erstellen – siehe [Einstellungen → Allgemeine Einstellungen](/docs/settings/#general-settings).

## Datenpersistenz (Docker)

Mounten Sie ein Volume unter `/app/data`, damit die Konfigurationsdateien und die SQLite-Datenbank (siehe [Speicherorte der Konfigurationsdateien](#config-file-locations)) Container-Neustarts überleben. Ohne ein Volume gehen Daten verloren, wenn der Container stoppt.

## Umgebungsvariablen (Web / Docker)

Electron verwendet die lokale Konfigurationsdatei. Nur für den Web-/Docker-Server:

| Variable | Beschreibung |
| --- | --- |
| `PORT` | Server-Listening-Port (Standard `5000`) |
| `CONFIG_PATH` | Pfad zur Konfigurationsdatei (Standard `/app/data/config.json`) |
| `TZ` | Zeitzone für die serverseitige Zeit (Standard `Europe/London`) |
| `HISTORY_DISABLED` | Ausführungsverlauf erzwingen (`true` / `1`) |
| `OPENROUTER_API_KEY` | OpenRouter API-Schlüssel |
| `OPENAI_API_KEY` | OpenAI API-Schlüssel |
| `CEREBRAS_API_KEY` | Cerebras API-Schlüssel |
| `ANTHROPIC_API_KEY` | Anthropic API-Schlüssel |
| `GOOGLE_API_KEY` | Google Gemini API-Schlüssel |
| `DEEPSEEK_API_KEY` | DeepSeek API-Schlüssel |
| `GROQ_API_KEY` | Groq API-Schlüssel |
| `MISTRAL_API_KEY` | Mistral API-Schlüssel |
| `LOCAL_LLM_URL` | Vollständige OpenAI-kompatible API-Basis-URL für einen lokalen Server, einschließlich des Pfads (zum Beispiel Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | xAI API-Schlüssel |
| `NVIDIA_API_KEY` | NVIDIA API-Schlüssel |
| `ALIBABA_API_KEY` | Alibaba Cloud (DashScope) API-Schlüssel |
| `APIFUN_API_KEY` | apikey.fun API-Schlüssel |
| `CUSTOM_PROVIDER_NAME` | Anzeigename für einen benutzerdefinierten OpenAI-kompatiblen Anbieter |
| `CUSTOM_PROVIDER_URL` | Basis-URL für einen benutzerdefinierten OpenAI-kompatiblen Anbieter |
| `CUSTOM_PROVIDER_API_KEY` | API-Schlüssel für den benutzerdefinierten Anbieter |

Alle drei `CUSTOM_PROVIDER_*`-Variablen sind erforderlich, wenn ein benutzerdefinierter Endpunkt verwendet wird. Modelle erscheinen im Modus **Erweitert** als `{providerName}/…`.

## Umgebungsvariablen (Desktop)

| Variable | Beschreibung |
| --- | --- |
| `TRANSREWRT_DISABLE_GPU` | Auf `1` setzen, um die Hardwarebeschleunigung zu deaktivieren (nützlich, wenn Chromium GPU-/EGL-Fehler unter Linux ausgibt) |
| `HISTORY_DISABLED` | Ausführungsverlauf erzwingen (`true` / `1`) – siehe [Datenschutzmodus](#privacy-mode) |

## Datenschutzmodus

Setzen Sie `HISTORY_DISABLED` auf `true` oder `1` im Web-/Docker-Serverprozess und/oder im Electron-Hauptprozess, um den Verlauf unabhängig von `config.json` oder benutzerspezifischen Einstellungen zu deaktivieren. Dies deaktiviert die Speicherung des Eingabe-/Ausgabeverlaufs, sperrt **Einstellungen → Allgemeine Einstellungen → Verlauf** und blockiert verlaufsbezogene APIs.

## Web-Authentifizierung

- Standard-Admin: `admin` / `transrewrt26`
- Benutzer, Sitzungs-Timeout und Sitzungswiderruf verwalten unter **Einstellungen → Benutzer** – siehe [Einstellungen](/docs/settings/#users)
- Jeder angemeldete Benutzer kann sein eigenes Passwort ändern oder sich über das Benutzermenü am unteren Rand der Seitenleiste abmelden
- Ein Passwort zurücksetzen:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Ändern Sie das Standard-Admin-Passwort sofort auf jedem über das Netzwerk erreichbaren Host.
:::

:::caution
Der Server spricht reines HTTP. Wenn Sie ihn über localhost oder ein vertrauenswürdiges Netzwerk hinaus zugänglich machen, platzieren Sie ihn hinter einem Reverse-Proxy mit HTTPS (z. B. Caddy, nginx oder Traefik), damit Passwörter und Text nicht unverschlüsselt gesendet werden.
:::

## Kostenanzeige

OpenRouter gibt, wo zutreffend, die exakten abgerechneten Kosten zurück. Andere Anbieter verwenden **geschätzte** Kosten aus der öffentlichen Modellpreisgestaltung von OpenRouter, wenn ein OpenRouter-Schlüssel verfügbar ist. Schätzungen sind keine Rechnungen.

Für die Benutzeroberfläche der Einstellungen (Schriftarten, Modelle, Verlauf, Backups) siehe [Einstellungen](/docs/settings/).
