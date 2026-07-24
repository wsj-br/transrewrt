---
title: Konfiguracja
description: >-
  Lokalizacje plików konfiguracyjnych, zmienne środowiskowe Docker, tryb
  prywatności i uwierzytelnianie internetowe.
---



## Lokalizacje plików konfiguracyjnych

| Wdrożenie | Folder danych |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/` (użyj woluminu do utrwalenia) |

Folder danych zawiera wszystko, co warto zarchiwizować:

- `config.json` — ustawienia i (desktopowe) zaszyfrowane klucze API
- `state.json` — ostatnio używane języki, model i stan widoku
- `presets.json` — buforowany katalog presetów trybu Easy
- `transrewrt.db` — baza danych SQLite z historią, kosztami, promptami, słownikiem i (internetowymi) użytkownikami

Możesz również utworzyć przenośną kopię zapasową ZIP z poziomu aplikacji — zobacz [Ustawienia → Ustawienia ogólne](/docs/settings/#general-settings).

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
| `LOCAL_LLM_URL` | Pełny podstawowy adres URL API zgodnego z OpenAI dla serwera lokalnego, włączając ścieżkę (na przykład Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | Klucz API xAI |
| `NVIDIA_API_KEY` | Klucz API NVIDIA |
| `ALIBABA_API_KEY` | Klucz API Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | Klucz API apikey.fun |
| `CUSTOM_PROVIDER_NAME` | Nazwa wyświetlana dla niestandardowego dostawcy zgodnego z OpenAI |
| `CUSTOM_PROVIDER_URL` | Bazowy adres URL dla niestandardowego dostawcy zgodnego z OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | Klucz API dla niestandardowego dostawcy |

Wszystkie trzy zmienne `CUSTOM_PROVIDER_*` są wymagane podczas korzystania z niestandardowego punktu końcowego. Modele pojawiają się w trybie **Zaawansowanym** jako `{providerName}/…`.

## Zmienne środowiskowe (komputer stacjonarny)

| Zmienna | Opis |
| --- | --- |
| `TRANSREWRT_DISABLE_GPU` | Ustaw na `1`, aby wyłączyć akcelerację sprzętową (przydatne, gdy Chromium wyświetla błędy GPU / EGL w systemie Linux) |
| `HISTORY_DISABLED` | Wymuś wyłączenie historii wykonania (`true` / `1`) — zobacz [Tryb prywatności](#privacy-mode) |

## Tryb prywatności

Ustaw `HISTORY_DISABLED` na `true` lub `1` w procesie serwera web/Docker i/lub głównym procesie Electron, aby wymusić wyłączenie historii niezależnie od `config.json` lub preferencji użytkownika. Spowoduje to wyłączenie przechowywania historii wejść/wyjść, zablokowanie **Ustawienia → Ustawienia ogólne → Historia** oraz zablokowanie interfejsów API związanych z historią.

## Trwałość danych (Docker)

Zamontuj wolumin w `/app/data`, aby pliki konfiguracyjne i baza danych SQLite (zobacz [Lokalizacje plików konfiguracyjnych](#config-file-locations)) przetrwały ponowne uruchomienia kontenera. Bez woluminu dane zostaną utracone po zatrzymaniu kontenera.

## Uwierzytelnianie w sieci

- Domyślny administrator: `admin` / `transrewrt26`
- Zarządzaj użytkownikami, limitem czasu sesji i odwołaniem sesji w **Ustawienia → Użytkownicy** — zobacz [Ustawienia](/docs/settings/#users)
- Każdy zalogowany użytkownik może zmienić swoje hasło lub wylogować się z menu użytkownika na dole paska bocznego
- Zresetuj hasło:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Zmień domyślne hasło administratora natychmiast na każdym hoście dostępnym w sieci.
:::

:::caution
Serwer używa zwykłego protokołu HTTP. Jeśli udostępniasz go poza localhostem lub zaufaną siecią, umieść go za odwrotnym proxy z HTTPS (na przykład Caddy, nginx lub Traefik), aby hasła i tekst nie były przesyłane w postaci jawnej.
:::

## Wyświetlanie kosztów

OpenRouter zwraca dokładny naliczony koszt, jeśli ma to zastosowanie. Inni dostawcy używają **szacowanego** kosztu z publicznych cen modeli OpenRouter, gdy dostępny jest klucz OpenRouter. Szacunki nie są fakturami.

Aby uzyskać informacje o interfejsie użytkownika ustawień (czcionki, modele, historia, kopie zapasowe), zobacz [Ustawienia](/docs/settings/).
