---
title: Konfiguracja
description: >-
  Lokalizacje plików konfiguracyjnych, zmienne środowiskowe Docker, tryb
  prywatności i uwierzytelnianie internetowe.
translation_last_updated: '2026-07-17T14:58:58.711Z'
source_file_mtime: '2026-07-17T14:43:44.727Z'
source_file_hash: 8c3b2c00eddcee7693d66c5f5955c2d2186e55de630886446764bc6b798f05b5
translation_language: pl
source_file_path: src/content/docs/docs/configuration.md
translation_models:
  - google/gemini-2.5-flash
---



## Lokalizacje plików konfiguracyjnych

| Wdrożenie | Lokalizacja konfiguracji |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (użyj woluminu do utrwalenia) |

## Zmienne środowiskowe (web / Docker)

Electron używa lokalnego pliku konfiguracyjnego. Tylko dla serwera web/Docker:

| Zmienna | Opis |
| --- | --- |
| `PORT` | Port nasłuchujący serwera (domyślnie `5000`) |
| `CONFIG_PATH` | Ścieżka do pliku konfiguracyjnego (domyślnie `/app/data/config.json`) |
| `TZ` | Strefa czasowa dla czasu po stronie serwera (domyślnie `Europe/London`) |
| `HISTORY_DISABLED` | Wymuś wyłączenie historii wykonania (`true` / `1`) |
| `OPENROUTER_API_KEY` | Klucz API OpenRouter |
| `OPENAI_API_KEY` | Klucz API OpenAI |
| `CEREBRAS_API_KEY` | Klucz API Cerebras |
| `ANTHROPIC_API_KEY` | Klucz API Anthropic |
| `GOOGLE_API_KEY` | Klucz API Google Gemini |
| `DEEPSEEK_API_KEY` | Klucz API DeepSeek |
| `GROQ_API_KEY` | Klucz API Groq |
| `MISTRAL_API_KEY` | Klucz API Mistral |
| `LOCAL_LLM_URL` | Pełny bazowy adres URL API zgodnego z OpenAI dla serwera lokalnego (uwzględnij ścieżkę, np. Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | Klucz API xAI |
| `NVIDIA_API_KEY` | Klucz API NVIDIA |
| `ALIBABA_API_KEY` | Klucz API Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | Klucz API apikey.fun |
| `CUSTOM_PROVIDER_NAME` | Nazwa wyświetlana dla niestandardowego dostawcy zgodnego z OpenAI |
| `CUSTOM_PROVIDER_URL` | Bazowy adres URL dla niestandardowego dostawcy zgodnego z OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | Klucz API dla niestandardowego dostawcy |

Wszystkie trzy zmienne `CUSTOM_PROVIDER_*` są wymagane podczas korzystania z niestandardowego punktu końcowego. Modele pojawiają się w trybie **Zaawansowanym** jako `{providerName}/…`.

## Tryb prywatności

Ustaw `HISTORY_DISABLED` na `true` lub `1` w procesie serwera web/Docker i/lub głównym procesie Electron, aby wymusić wyłączenie historii niezależnie od `config.json` lub preferencji użytkownika. Spowoduje to wyłączenie przechowywania historii wejść/wyjść, zablokowanie **Ustawienia → Ustawienia ogólne → Historia** oraz zablokowanie interfejsów API związanych z historią.

## Trwałość danych (Docker)

Zamontuj wolumin w `/app/data`, aby `config.json` i baza danych SQLite przetrwały ponowne uruchomienia kontenera. Bez woluminu dane zostaną utracone po zatrzymaniu kontenera.

## Uwierzytelnianie w sieci

- Domyślny administrator: `admin` / `transrewrt26`
- Zarządzaj użytkownikami w **Ustawienia → Użytkownicy**
- Zresetuj hasło:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Natychmiast zmień domyślne hasło administratora na każdym hoście dostępnym w sieci.
:::

## Wyświetlanie kosztów

OpenRouter zwraca dokładny naliczony koszt, jeśli ma to zastosowanie. Inni dostawcy używają **szacowanego** kosztu z publicznych cen modeli OpenRouter, gdy dostępny jest klucz OpenRouter. Szacunki nie są fakturami.

Interfejs użytkownika ustawień (czcionki, modele, historia, kopie zapasowe) znajduje się w sekcji [Ustawienia](/docs/settings/).
