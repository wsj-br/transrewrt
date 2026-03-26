---
translated_at: "2026-03-26T00:51:33.275Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Wersja"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licencja: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Narzędzie tekstowe wspierane przez sztuczną inteligencję: tłumaczenie między językami, przepisywanie w różnych stylach oraz transformacja z wykorzystaniem niestandardowych zachęt — z użyciem wielu dostawców AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI oraz lokalny Ollama). Działa jako aplikacja desktopowa (Electron) lub hostowana przez użytkownika aplikacja internetowa (Docker).

- **Tłumaczenie** — pomiędzy dziesiątkami języków, z automatycznym wykrywaniem języka źródłowego  
- **Przepisywanie** — poprawa gramatyki, zwiększanie przejrzystości, wariant formalny/nieformalny, skracanie, rozwijanie, styl techniczny  
- **Transformacja** — niestandardowe zachęty AI; tworzenie i zarządzanie zachętami, opcjonalny język docelowy dla każdej zachęty  
- **Historia** — pełna historia operacji z wejściowym/wyjściowym tekstem, filtrowanie i eksport  
- **Modele i koszty** — wybór modeli z dowolnego skonfigurowanego dostawcy; tablice kosztów i zużycia z dziennikami, podsumowaniami według modelu/operacji/dnia  
- **Interfejs użytkownika** — wielojęzyczny interfejs (ponad 30 języków, obsługa języków pisanych od prawej do lewej), czcionki, ...  
- **Tryb internetowy** — obsługa wielu użytkowników z rolami administratora  
- **Wersja desktopowa** — aplikacja Electron dla Windows i Linux  
- **Hostowana lokalnie** — obraz Docker dla amd64 i arm64 (gotowy do działania na Raspberry Pi)

Po zainstalowaniu zapoznaj się z **[przewodnikiem użytkownika](USER-GUIDE.pl.md)**, aby poznać wszystkie funkcje.

<small>**Przeczytaj w innych językach:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Uwaga dotycząca tłumaczeń interfejsu i dokumentacji:** Wszystkie języki interfejsu oprócz oryginalnego angielskiego (UK)  
> zostały przetłumaczone przy użyciu modeli sztucznej inteligencji; sformułowania mogą być niedokładne lub zawierać błędy.

</small>

<br/>

<a id="screenshots"></a>
## Zrzuty ekranu

**Wybór języka**

![Wybór języka](../images/screenshots/pl/language-selector.png)

**Tłumaczenie**

![Tłumaczenie](../images/screenshots/pl/translate.png)

**Transformacja – edytor zachęt**

![Transformacja – edytor zachęt](../images/screenshots/pl/transform-prompt-edit.png)

**Tablica kontrolna**

![Tablica kosztów](../images/screenshots/pl/dashboard-summary.png)

**Historia**

![Historia](../images/screenshots/pl/history.png)

**Ustawienia – wybór modelu**

![Ustawienia – wybór modelu](../images/screenshots/pl/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Spis treści

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Szybki start](#szybki-start)
- [Instalacja](#instalacja)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Uzyskanie klucza API OpenRouter](#uzyskanie-klucza-api-openrouter)
- [Konfiguracja i środowisko](#konfiguracja-i-%C5%9Brodowisko)
- [Rozwój i architektura](#rozw%C3%B3j-i-architektura)
- [Wersje i tagi](#wersje-i-tagi)
- [Współpraca](#wsp%C3%B3%C5%82praca)
- [Zrzeczenie odpowiedzialności](#zrzeczenie-odpowiedzialno%C5%9Bci)
- [Licencja](#licencja)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="szybki-start"></a>
## Szybki start

**Docker (zalecane dla samodzielnego hostowania)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Zamień `sk-or-your-key` na swój [klucz API OpenRouter](https://openrouter.ai/keys) (lub ustaw klucze innych dostawców; zobacz [Konfiguracja](#konfiguracja-i-%C5%9Brodowisko)). Otwórz [http://localhost:5000](http://localhost:5000) i zmień domyślne hasło administratora przed udostępnieniem usługi.

<br/>

> ℹ️ **UWAGA**<br/>
> W Dockerze poświadczenia LLM są ustawiane za pomocą zmiennych środowiskowych takich jak `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (nie przez interfejs WWW). W wersji desktopowej (Electron) konfigurujesz klucze w **Ustawienia → API**.

<br/>

**Windows**

Pobierz najnowszy plik `Transrewrt Setup x.y.z.exe` z sekcji [Wersje](https://github.com/wsj-br/transrewrt/releases), uruchom instalator, a następnie uruchom aplikację z menu Start lub skrótu na pulpicie. Wprowadź swoje klucze API w **Ustawienia → API**. Musisz skonfigurować co najmniej jednego dostawcę; OpenRouter jest często używany do darmowych modeli.

<br/>

**Linux**

Pobierz odpowiedni plik `.AppImage` dla swojego procesora z sekcji [Wersje](https://github.com/wsj-br/transrewrt/releases) (`x64` dla typowych komputerów, `arm64` dla większości urządzeń ARM, w tym Raspberry Pi 4+), a następnie:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Wprowadź swoje klucze API w **Ustawienia → API**. Musisz skonfigurować co najmniej jednego dostawcę; OpenRouter jest często używany do darmowych modeli.

W systemach Debian/Ubuntu może być konieczna wcześniejsza instalacja dodatkowych zależności:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Szczegóły znajdziesz w sekcji [Instalacja → Linux](#linux-electron).

<br/>

> ℹ️ **UWAGA**<br/>
> macOS nie jest obecnie obsługiwany. Transrewrt jest dostępny dla Windows, Linux oraz Docker.

<br/>

Po uruchomieniu aplikacji zapoznaj się z **[Przewodnikiem użytkownika](USER-GUIDE.pl.md)**, aby dowiedzieć się, jak tłumaczyć, przepisywać i przekształcać tekst, zarządzać zachętami oraz konfigurować modele.

<br/><br/>

<a id="instalacja"></a>
## Instalacja

<a id="windows-electron"></a>
### Windows (Electron)

- Pobierz najnowszy instalator z sekcji [Wersje](https://github.com/wsj-br/transrewrt/releases).
- Uruchom plik `.exe` i postępuj zgodnie z instrukcjami instalatora.
- Przy pierwszym uruchomieniu: uruchom aplikację z menu Start lub skrótu na pulpicie.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Pobierz odpowiedni plik `.AppImage` (`x64` lub `arm64`) z sekcji [Wersje](https://github.com/wsj-br/transrewrt/releases).
- Uruchom: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` na x86_64/amd64, albo użyj nazwy pliku `...-arm64.AppImage` na ARM64.
- Dodatkowe zależności (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Zobacz [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) w celu uzyskania więcej informacji.

<br/>

<a id="docker"></a>
### Docker

- Pobierz obraz: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Ustaw co najmniej jeden klucz dostawcy poprzez środowisko (np. `OPENROUTER_KEY` dla OpenRouter). Przekaż zmienne za pomocą `-e` lub `docker compose` / `.env`, aby tajemnice nie były wbudowywane w obraz.
- Klucze dostawców **nie** są wprowadzane przez interfejs WWW; serwer odczytuje je ze środowiska.

Przykład - nazwany wolumen dla trwałości danych (klucz OpenRouter przez środowisko):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opcja    | Opis                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (mapuj za pomocą `-p 5000:5000`)                                                                              |
| Wolumen  | Zamontuj `/app/data` dla trwałości konfiguracji i bazy danych                                                         |
| Zm. env  | `PORT`, `CONFIG_PATH`, oraz klucze LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - zobacz [Konfiguracja](#konfiguracja-i-%C5%9Brodowisko) |

Aby zbudować i uruchomić z kodu źródłowego: `docker compose up --build -d` albo `pnpm docker:up` - zobacz [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="uzyskanie-klucza-api-openrouter"></a>

## Uzyskanie klucza API OpenRouter

Transrewrt obsługuje wiele dostawców AI. [OpenRouter](https://openrouter.ai) jest popularnym wyborem, ponieważ agreguje wiele modeli pod jednym kluczem i oferuje modele bezpłatne.

1. Zarejestruj się lub zaloguj na [openrouter.ai](https://openrouter.ai).
2. Otwórz stronę [Keys](https://openrouter.ai/keys) i utwórz nowy klucz (nadaj mu nazwę i opcjonalnie ustaw limit środków). Możesz korzystać z modeli bezpłatnych bez dodawania środków.
3. **Wersja komputerowa (Electron):** wklej klucze w **Ustawienia → API**. **Docker:** ustaw zmienne środowiskowe, takie jak `OPENROUTER_KEY` (patrz [Szybki start](#quick-start)).

Nie używaj modelu **Body Builder** od OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) do tłumaczenia, przepisywania ani przekształcania: zwraca on ładunki żądań JSON, a nie gotowy tekst dla tych zadań. Zobacz [Ustawienia → Modele](USER-GUIDE.pl.md#models) w Podręczniku użytkownika.

Możesz również używać innych dostawców (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) lub uruchamiać modele lokalnie z użyciem [Ollama](https://ollama.com). Zobacz sekcję [Konfiguracja](#configuration-and-environment), aby uzyskać pełną listę obsługiwanych dostawców i zmiennych środowiskowych.

> ⚠️ **OSTRZEŻENIE**<br/>
> Jeśli korzystasz z Ollama z innego urządzenia, kontenera lub usługi, pamiętaj, aby skonfigurować Ollama tak, aby zezwalało na połączenia zewnętrzne (nie tylko localhost).

Aby uzyskać informacje o limitach, BYOK i więcej, zobacz [uwierzytelnianie OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguracja i środowisko

**Lokalizacje plików konfiguracyjnych**

| Wdrożenie        | Lokalizacja konfiguracji                         |
| ---------------- | ------------------------------------------------ |
| Electron (Windows) | `%APPDATA%\transrewrt\`                         |
| Electron (Linux)   | `~/.config/transrewrt/`                         |
| Sieć / Docker      | `/app/data/config.json` (użyj woluminu, aby dane były trwałe) |

<br/>

**Zmienne środowiskowe** (tylko web/Docker; Electron używa lokalnego pliku konfiguracyjnego)

| Zmienna           | Domyślne                 | Opis |
| ----------------- | ------------------------ | ---- |
| `PORT`            | `5000`                   | Port nasłuchujący serwera |
| `CONFIG_PATH`     | `/app/data/config.json` | Ścieżka do pliku konfiguracyjnego |
| `OPENROUTER_KEY`  | *(puste)*                | Klucz API OpenRouter |
| `OPENAI_KEY`      | *(puste)*                | Klucz API OpenAI |
| `CEREBRAS_KEY`    | *(puste)*                | Klucz API Cerebras |
| `ANTHROPIC_KEY`   | *(puste)*                | Klucz API Anthropic |
| `GOOGLE_KEY`      | *(puste)*                | Klucz API Google Gemini |
| `DEEPSEEK_KEY`    | *(puste)*                | Klucz API DeepSeek |
| `GROQ_KEY`        | *(puste)*                | Klucz API Groq |
| `MISTRAL_KEY`     | *(puste)*                | Klucz API Mistral |
| `OLLAMA_URL`      | *(puste)*                | Podstawowy URL Ollama (np. `http://host.docker.internal:11434`) |
| `XAI_KEY`         | *(puste)*                | Klucz API xAI |

Skonfiguruj tylko te dostawców, których używasz. Identyfikatory modeli są zorganizowane przestrzennie (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, itd.).

**Wyświetlanie kosztów:** OpenRouter zwraca rzeczywisty naliczony koszt, o ile to możliwe. Inni dostawcy używają **oszacowanego** kosztu z publicznych cen modeli OpenRouter, gdy dostępny jest klucz OpenRouter; bez niego koszt dla innych dostawców może być wyświetlany jako `0`. Szacunki nie są fakturami.

<br/>

**Dane i trwałość:** W przypadku Dockera zamontuj wolumin w lokalizacji `/app/data`, aby plik `config.json` oraz baza danych SQLite były zachowywane przy ponownym uruchomieniu kontenera. Bez zamontowanego woluminu wszystkie dane zostaną utracone po zatrzymaniu kontenera.

**Dla deweloperów:** Po zaciągnięciu zmian zastępujących starej konfiguracji jednego klucza, zresetuj lub scal plik `data/config.json` z nową domyślną strukturą z pliku `src/config-defaults/config_default.json`, jeśli Twój lokalny plik nadal używa usuniętych pól (`api_key`, `api_url`, opcje proxy).

<br/>

**Uwierzytelnianie w wersji sieciowej:**

- Domyślny administrator: `admin` / `transrewrt26`.
- Zarządzaj użytkownikami w **Ustawienia → Użytkownicy**.
- Zresetuj hasło: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (z kodu źródłowego: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **OSTRZEŻENIE**<br/>
> Natychmiast zmień domyślne hasło administratora na każdym hoście dostępnym w sieci.

<br/>

Główne ustawienia (czcionka, modele, języki itp.) są dostępne w Ustawieniach aplikacji.

<br/><br/>

<a id="development-and-architecture"></a>

## Rozwój i architektura

- **Rozwój:** Konfiguracja, kompilacja, testowanie i wdrażanie (Electron, Web, Docker) – patrz **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Omówienie architektury i systemu:** Struktura folderów, stos technologiczny, decyzje projektowe – patrz **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Wersje i tagi

- **Tagi Git** zaczynające się od `v` (np. `v1.0.10`) uruchamiają [przepływ pracy publikacji](.github/workflows/release.yml). **Wersje na GitHubie** zawierają instalator dla Windows (`.exe`) oraz obrazy AppImage dla Linuksa (**x64** i **arm64**).
- **Obrazy Docker** są publikowane w repozytorium `ghcr.io/wsj-br/transrewrt`. Tagi obrazów odpowiadają wersji Git (np. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`), dodatkowo z tagiem `latest`. Wieloplatformowe: `linux/amd64` i `linux/arm64` (np. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Współpraca

1. Wykonaj forka repozytorium.
2. Utwórz gałąź funkcjonalności: `git checkout -b feature/moja-funkcja`
3. Zatwierdź zmiany z czytelnym komunikatem.
4. Wypchnij zmiany i utwórz żądanie łączenia (Pull Request) do gałęzi `main`.

Proszę przestrzegać istniejącego stylu kodowania oraz przetestować zmiany w trybach Electron i webowym przed wysłaniem. Szczegółowe instrukcje kompilacji i testów znajdują się w pliku [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Zgłaszanie problemów:** Otwórz zgłoszenie na [GitHubie](https://github.com/wsj-br/transrewrt/issues). Włącz informację o systemie operacyjnym (Windows / Linux / Docker) oraz wersji aplikacji (podana w oknie „O programie” lub na stronie z wersjami).

<br/><br/>

<a id="disclaimer"></a>
## Zrzeczenie odpowiedzialności

Nazwy produktów i ikony należą do ich odpowiednich właścicieli i są używane wyłącznie w celach identyfikacyjnych. Oprogramowanie to nie jest powiązane ani zalecane przez żadne z wymienionych marek.

<br/><br/>

<a id="license"></a>
## Licencja

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)