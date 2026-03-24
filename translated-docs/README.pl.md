---
translated_at: "2026-03-24T01:58:28.725Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Wersja"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licencja: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Narzędzie tekstowe z silnikiem AI: tłumaczenie między językami, przepisywanie w różnych stylach i transformacja za pomocą niestandardowych promptów — z wykorzystaniem wielu dostawców AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI oraz lokalny Ollama). Działa jako aplikacja komputerowa (Electron) lub samodzielna aplikacja internetowa (Docker).

- **Tłumaczenie** — między dziesiątkami języków, z automatycznym wykrywaniem języka źródłowego
- **Przepisywanie** — poprawianie gramatyki, poprawa klarowności, styl formalny/nieformalny, skracanie, rozwijanie, język techniczny
- **Transformacja** — niestandardowe prompty AI; tworzenie i zarządzanie promptami, opcjonalny język docelowy dla każdego promptu
- **Historia** — pełna historia operacji z wejściowym i wyjściowym tekstem, filtrowanie i eksport
- **Modele i koszty** — wybór modeli od dowolnego skonfigurowanego dostawcy; tablica kosztów z logiem SQLite, podsumowania według modelu/operacji/dnia
- **Interfejs użytkownika** — wielojęzyczny interfejs (ponad 30 języków, obsługa RTL), czcionki, ...
- **Wersja internetowa** — obsługa wielu użytkowników z rolami administratora; klucze API pozostają po stronie serwera, nigdy nie są udostępniane przeglądarce
- **Wersja komputerowa** — aplikacja Electron dla Windows i Linux
- **Samodzielna instalacja** — obraz Docker dla amd64 i arm64 (przygotowany na Raspberry Pi)

Po zainstalowaniu zapoznaj się z **[Przewodnikiem użytkownika](USER-GUIDE.pl.md)**, aby poznać wszystkie funkcje.

<small>**Przeczytaj w innych językach:** [English (UK)](README.pl.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>


<br/>

**Uwaga dotycząca tłumaczeń interfejsu i dokumentacji:** Wszystkie języki interfejsu oprócz angielskiego (UK) zostały przetłumaczone za pomocą modeli AI; sformułowania mogą być niedokładne lub zawierać błędy.



<a id="screenshots"></a>
## Zrzuty ekranu

**Wybór języka**

![Wybór języka](../images/screenshots/pl/language-selector.png)

**Tłumaczenie**

![Tłumaczenie](../images/screenshots/pl/translate.png)

**Transformacja – edytor promptów**

![Transformacja – edytor promptów](../images/screenshots/pl/transform-prompt-edit.png)

**Panel główny**

![Panel kosztów](../images/screenshots/pl/dashboard-summary.png)

**Historia**

![Historia](../images/screenshots/pl/history.png)

**Ustawienia – wybór modelu**

![Ustawienia – wybór modelu](../images/screenshots/pl/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Spis treści

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Szybki start](#quick-start)
- [Instalacja](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Uzyskanie klucza API OpenRouter](#getting-an-openrouter-api-key)
- [Konfiguracja i środowisko](#configuration-and-environment)
- [Rozwój i architektura](#development-and-architecture)
- [Wersje i tagi](#releases-and-tags)
- [Współpraca](#contributing)
- [Zrzeczenie odpowiedzialności](#disclaimer)
- [Licencja](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Szybki start

**Docker (zalecane przy samodzielnym hostowaniu)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Zamień `sk-or-your-key` na swój [klucz API OpenRouter](https://openrouter.ai/keys) (lub ustaw klucze innych dostawców; zobacz [Konfiguracja](#configuration-and-environment)). Otwórz [http://localhost:5000](http://localhost:5000) i zmień domyślne hasło administratora przed udostępnieniem usługi.

<br/>

> ℹ️ **UWAGA**<br/>
> W Dockerze poświadczenia LLM są ustawiane za pomocą zmiennych środowiskowych takich jak `OPENROUTER_KEY`, `OPENAI_KEY`, … (a nie przez interfejs sieciowy). W wersji desktopowej (Electron) klucze konfiguruje się w **Ustawienia → API**.

<br/>

**Windows**

Pobierz najnowsze `Transrewrt Setup x.y.z.exe` z sekcji [Wersje](https://github.com/wsj-br/transrewrt/releases), uruchom instalator, a następnie uruchom aplikację z menu Start lub skrótu na pulpicie. Wprowadź swoje klucze API w **Ustawienia → API**. Należy skonfigurować co najmniej jednego dostawcę; OpenRouter jest popularnym wyborem dla modeli darmowych.

<br/>

**Linux**

Pobierz plik `.AppImage` z sekcji [Wersje](https://github.com/wsj-br/transrewrt/releases), a następnie:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Wprowadź swoje klucze API w **Ustawienia → API**. Należy skonfigurować co najmniej jednego dostawcę; OpenRouter jest popularnym wyborem dla modeli darmowych.

W systemach Debian/Ubuntu może być konieczne uprzednie zainstalowanie dodatkowych zależności:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Szczegóły znajdują się w sekcji [Instalacja → Linux](#linux-electron).

<br/>

> ℹ️ **UWAGA**<br/>
> Obecnie macOS nie jest obsługiwane. Transrewrt jest dostępny dla Windows, Linux i Docker.

<br/>

Po uruchomieniu aplikacji zapoznaj się z **[podręcznikiem użytkownika](USER-GUIDE.pl.md)**, aby dowiedzieć się, jak tłumaczyć, przepisywać i przekształcać tekst, zarządzać prompty i konfigurować modele.

<br/><br/>

<a id="installation"></a>
## Instalacja

<a id="windows-electron"></a>
### Windows (Electron)

- Pobierz najnowszy instalator z sekcji [Wersje](https://github.com/wsj-br/transrewrt/releases).
- Uruchom plik `.exe` i postępuj zgodnie z instrukcją instalatora.
- Przy pierwszym uruchomieniu: uruchom aplikację z menu Start lub skrótu na pulpicie.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Pobierz plik `.AppImage` z sekcji [Wersje](https://github.com/wsj-br/transrewrt/releases).
- Uruchom: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Dodatkowe zależności (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Więcej informacji znajduje się w pliku [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Pobierz obraz: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Ustaw co najmniej jeden klucz dostawcy za pomocą zmiennych środowiskowych (np. `OPENROUTER_KEY` dla OpenRouter). Przekaż zmienne za pomocą `-e` lub `docker compose` / `.env`, aby nie zapisywać tajemnic w obrazie.
- Klucze dostawców **nie** są wprowadzane w interfejsie sieciowym; serwer odczytuje je ze środowiska.

Przykład – użycie nazwanego woluminu do trwałego przechowywania danych (klucz OpenRouter przez zmienną środowiskową):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opcja      | Opis                                                                                                       |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| Port       | `5000` (mapowanie za pomocą `-p 5000:5000`)                                                                |
| Wolumin    | Montuj `/app/data` w celu trwałego przechowywania konfiguracji i bazy danych                               |
| Zmienne środowiskowe | `PORT`, `CONFIG_PATH`, oraz klucze LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) – zobacz [Konfiguracja](#configuration-and-environment) |

Aby zbudować i uruchomić z kodu źródłowego: `docker compose up --build -d` lub `pnpm docker:up` – zobacz [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Uzyskiwanie klucza API OpenRouter

Transrewrt obsługuje wiele dostawców AI. [OpenRouter](https://openrouter.ai) jest popularnym wyborem, ponieważ agreguje wiele modeli pod jednym kluczem i oferuje darmowe modele.

1. Zarejestruj się lub zaloguj na stronie [openrouter.ai](https://openrouter.ai).
2. Otwórz stronę [Keys](https://openrouter.ai/keys) i utwórz nowy klucz (nadaj mu nazwę, opcjonalnie ustaw limit środków). Możesz korzystać z darmowych modeli bez doładowywania środków.
3. **Wersja komputerowa (Electron):** wklej klucze w **Ustawienia → API**. **Docker:** ustaw zmienne środowiskowe, np. `OPENROUTER_KEY` (zobacz [Szybki start](#quick-start)).

Możesz również używać innych dostawców (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) lub uruchamiać modele lokalnie za pomocą [Ollama](https://ollama.com). Zobacz [Konfiguracja](#configuration-and-environment) dla pełnej listy obsługiwanych dostawców i zmiennych środowiskowych.

Zobacz [uwierzytelnianie OpenRouter](https://openrouter.ai/docs/api/reference/authentication) w celu uzyskania informacji o limitach, BYOK i innych funkcjach.

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguracja i środowisko

**Lokalizacje plików konfiguracyjnych**

| Wdrożenie           | Lokalizacja konfiguracji                         |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (użyj woluminu, by zachować dane) |

<br/>

**Zmienne środowiskowe** (tylko web/Docker; Electron używa lokalnego pliku konfiguracyjnego)

| Zmienna            | Domyślnie               | Opis |
| ------------------ | ----------------------- | ---- |
| `PORT`             | `5000`                  | Port nasłuchu serwera |
| `CONFIG_PATH`      | `/app/data/config.json` | Ścieżka do pliku konfiguracyjnego |
| `OPENROUTER_KEY`   | *(puste)*               | Klucz API OpenRouter |
| `OPENAI_KEY`       | *(puste)*               | Klucz API OpenAI |
| `ANTHROPIC_KEY`    | *(puste)*               | Klucz API Anthropic |
| `GOOGLE_KEY`       | *(puste)*               | Klucz API Google Gemini |
| `DEEPSEEK_KEY`     | *(puste)*               | Klucz API DeepSeek |
| `GROQ_KEY`         | *(puste)*               | Klucz API Groq |
| `MISTRAL_KEY`      | *(puste)*               | Klucz API Mistral |
| `OLLAMA_URL`       | *(puste)*               | Podstawowy URL Ollama (np. `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(puste)*               | Klucz API xAI |

Skonfiguruj jedynie tych dostawców, których używasz. Identyfikatory modeli są nazwane przestrzennie (`openrouter/…`, `openai/…`, `ollama/…`, itd.).

**Wyświetlanie kosztów:** OpenRouter zwraca rzeczywisty rozliczony koszt, o ile to możliwe. Inne dostawcy używają **oszacowanego** kosztu na podstawie publicznych cen modeli OpenRouter, jeśli klucz OpenRouter jest dostępny; w przeciwnym razie koszt usług innych niż OpenRouter może być wyświetlany jako `0`. Szacunki nie są rachunkami.

<br/>

**Dane i trwałość:** Dla Docker zainstaluj wolumin w `/app/data`, aby plik `config.json` i baza danych SQLite przetrwały ponowne uruchomienie kontenera. Bez woluminu wszystkie dane zostaną utracone po zatrzymaniu kontenera.

**Deweloperzy:** Po ściągnięciu zmian, które zastępują starą jednokluczykową konfigurację, zresetuj lub połącz `data/config.json` z nowym domyślnym schematem z `src/config-defaults/config_default.json`, jeśli Twój lokalny plik nadal używa usuniętych pól (`api_key`, `api_url`, opcje proxy).

<br/>

**Uwierzytelnianie w wersji web:**

- Domyślny administrator: `admin` / `transrewrt26`.
- Zarządzaj użytkownikami w **Ustawienia → Użytkownicy**.
- Zresetuj hasło: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (z kodu źródłowego: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **OSTRZEŻENIE**<br/>
> Natychmiast zmień domyślne hasło administratora na każdym urządzeniu dostępnym w sieci.

<br/>

Główne ustawienia (czcionka, modele, języki itp.) są dostępne w Ustawieniach aplikacji.

<br/><br/>

<a id="development-and-architecture"></a>
## Rozwój i architektura

- **Rozwój:** Konfiguracja, budowanie, testowanie i wdrażanie (Electron, Web, Docker) – zobacz **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektura i przegląd systemu:** Struktura folderów, stos technologiczny, decyzje projektowe – zobacz **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Wersje i tagi

- **Tagi Git** `v`* (np. `v1.0.10`) uruchamiają [przepływ wersji](.github/workflows/release.yml). **Wersje na GitHubie** zawierają instalator dla systemu Windows (`.exe`) oraz plik AppImage dla Linuksa.
- **Obrazy Docker** są publikowane w `ghcr.io/wsj-br/transrewrt`. Tagi obrazów odpowiadają wersji Git (np. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) oraz `latest`. Wieloplatformowe: `linux/amd64` i `linux/arm64` (np. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Wkładanie wkładu

1. Sklonuj repozytorium.
2. Utwórz gałąź funkcjonalną: `git checkout -b feature/moja-funkcja`
3. Zatwierdź zmiany z czytelnym opisem.
4. Wypchnij zmiany i utwórz żądanie łączenia (Pull Request) do gałęzi `main`.

Prosimy o przestrzeganie istniejącego stylu kodu oraz przetestowanie zmian w trybie Electron i w trybie webowym przed wysłaniem. Zobacz [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) po instrukcje kompilacji i testowania.

<br/>

**Zgłaszanie problemów:** Otwórz zgłoszenie na [GitHubie](https://github.com/wsj-br/transrewrt/issues). Dołącz platformę (Windows / Linux / Docker) oraz wersję aplikacji (widoczną w oknie „O programie” lub na stronie wersji).

<br/><br/>

<a id="disclaimer"></a>
## Zastrzeżenie

Nazwy produktów i ikony należą do swoich odpowiednich właścicieli i są używane wyłącznie w celach identyfikacyjnych. To oprogramowanie nie jest powiązane ani zatwierdzone przez żadne z wymienionych marek.

<br/><br/>

<a id="license"></a>
## Licencja

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)