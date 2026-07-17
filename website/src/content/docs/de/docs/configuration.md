---
title: Konfiguration
description: >-
  Speicherorte der Konfigurationsdateien, Docker-Umgebungsvariablen,
  Datenschutzmodus und Web-Authentifizierung.
---



## Speicherorte der Konfigurationsdateien

| Bereitstellung | Speicherort der Konfiguration |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (verwenden Sie ein Volume zur Persistenz) |

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
| `LOCAL_LLM_URL` | Vollständige OpenAI-kompatible API-Basis-URL für einen lokalen Server (einschließlich des Pfads, z. B. Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | xAI API-Schlüssel |
| `NVIDIA_API_KEY` | NVIDIA API-Schlüssel |
| `ALIBABA_API_KEY` | Alibaba Cloud (DashScope) API-Schlüssel |
| `APIFUN_API_KEY` | apikey.fun API-Schlüssel |
| `CUSTOM_PROVIDER_NAME` | Anzeigename für einen benutzerdefinierten OpenAI-kompatiblen Anbieter |
| `CUSTOM_PROVIDER_URL` | Basis-URL für einen benutzerdefinierten OpenAI-kompatiblen Anbieter |
| `CUSTOM_PROVIDER_API_KEY` | API-Schlüssel für den benutzerdefinierten Anbieter |

Alle drei `CUSTOM_PROVIDER_*`-Variablen sind erforderlich, wenn ein benutzerdefinierter Endpunkt verwendet wird. Modelle erscheinen im **erweiterten** Modus als `{providerName}/…`.

## Datenschutzmodus

Setzen Sie `HISTORY_DISABLED` auf `true` oder `1` im Web-/Docker-Serverprozess und/oder im Electron-Hauptprozess, um den Verlauf unabhängig von `config.json` oder den benutzerspezifischen Einstellungen zu deaktivieren. Dies deaktiviert das Speichern des Eingabe-/Ausgabeverlaufs, sperrt **Einstellungen → Allgemeine Einstellungen → Verlauf** und blockiert verlaufsbezogene APIs.

## Datenpersistenz (Docker)

Mounten Sie ein Volume unter `/app/data`, damit `config.json` und die SQLite-Datenbank Container-Neustarts überleben. Ohne ein Volume gehen Daten verloren, wenn der Container stoppt.

## Web-Authentifizierung

- Standard-Admin: `admin` / `transrewrt26`
- Benutzer verwalten unter **Einstellungen → Benutzer**
- Passwort zurücksetzen:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Ändern Sie das Standard-Admin-Passwort sofort auf jedem netzwerkzugänglichen Host.
:::

## Kostenanzeige

OpenRouter gibt, falls zutreffend, die exakten abgerechneten Kosten zurück. Andere Anbieter verwenden **geschätzte** Kosten basierend auf den öffentlichen Modellpreisen von OpenRouter, wenn ein OpenRouter-Schlüssel verfügbar ist. Schätzungen sind keine Rechnungen.

Informationen zur Benutzeroberfläche für Einstellungen (Schriftarten, Modelle, Verlauf, Sicherungen) finden Sie unter [Einstellungen](/docs/settings/).
