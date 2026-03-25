---
translated_at: "2026-03-25T22:21:15.772Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
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

Narzędzie tekstowe z wykorzystaniem sztucznej inteligencji: tłumaczenie między językami, przepisywanie w różnych stylach oraz modyfikowanie z użyciem niestandardowych promptów — z wykorzystaniem wielu dostawców AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI oraz lokalny Ollama). Działa jako aplikacja desktopowa (Electron) lub samoobsługowa aplikacja internetowa (Docker).

- **Tłumaczenie** — między dziesiątkami języków, z automatycznym wykrywaniem języka źródłowego
- **Przepisywanie** — poprawa gramatyki, zwiększanie przejrzystości, styl formalny/nieformalny, skracanie, rozwijanie, styl techniczny
- **Transformowanie** — niestandardowe prompty AI; możliwość tworzenia i zarządzania promptami, opcjonalny język docelowy dla każdego promptu
- **Historia** — kompletna historia wykonanych operacji z tekstem wejściowym/wyjściowym, filtrowanie i eksport
- **Modele i koszty** — wybór modeli z dowolnego skonfigurowanego dostawcy; panel kosztów i zużycia z dziennikami, podsumowaniami według modelu/operacji/dnia
- **Interfejs użytkownika** — wielojęzyczny interfejs (30+ języków, obsługa języków pisanych od prawej do lewej), czcionki, ...
- **Wersja internetowa** — obsługę wielu użytkowników z rolami administratora
- **Wersja desktopowa** — aplikacja Electron dla Windows i Linux
- **Samoobsługowy hosting** — obraz Docker dla architektur amd64 i arm64 (gotowy również do Raspberry Pi)

Po zainstalowaniu zapoznaj się z **[Podręcznikiem użytkownika](USER-GUIDE.pl.md)**, aby przejść krok po kroku przez wszystkie funkcje.

<small>**Przeczytaj w innych językach:** [English (UK)](README.pl.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Uwaga dotycząca tłumaczeń interfejsu i dokumentacji:** Wszystkie języki interfejsu oprócz oryginalnego angielskiego (UK) zostały przetłumaczone za pomocą modeli AI; sformułowania mogą być niedokładne lub zawierać błędy.

</small>

<br/>

<a id="screenshots"></a>
## Zrzuty ekranu

**Wybór języka**

![Wybór języka](../images/screenshots/pl/language-selector.png)

**Tłumaczenie**

![Tłumaczenie](../images/screenshots/pl/translate.png)

**Transformowanie — edytor promptów**

![Transformowanie — edytor promptów](../images/screenshots/pl/transform-prompt-edit.png)

**Panel**

![Panel kosztów](../images/screenshots/pl/dashboard-summary.png)

**Historia**

![Historia](../images/screenshots/pl/history.png)

**Ustawienia — wybór modelu**

![Ustawienia — wybór modelu](../images/screenshots/pl/settings-models.png)

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
- [Wydania i tagi](#releases-and-tags)
- [Współpraca](#contributing)
- [Zrzeczenie odpowiedzialności](#disclaimer)
- [Licencja](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Szybki start

**Docker (zalecane dla samodzielnego hostingu)**

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
> W Dockerze poświadczenia LLM ustawia się za pomocą zmiennych środowiskowych, takich jak `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (nie przez interfejs WWW). W wersji desktopowej (Electron) klucze konfiguruje się w **Ustawienia → API**.

<br/>

**Windows**

Pobierz najnowszy plik `Transrewrt Setup x.y.z.exe` z sekcji [Wydania](https://github.com/wsj-br/transrewrt/releases), uruchom instalator, a następnie uruchom aplikację z menu Start lub skrótu na pulpicie. Wprowadź swoje klucze API w **Ustawienia → API**. Należy skonfigurować przynajmniej jednego dostawcę; OpenRouter to popularny wybór dla modeli darmowych.

<br/>

**Linux**

Pobierz odpowiedni plik `.AppImage` dla swojego procesora z sekcji [Wydania](https://github.com/wsj-br/transrewrt/releases) (`x64` dla typowych komputerów, `arm64` dla większości urządzeń ARM, w tym Raspberry Pi 4+), a następnie:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Wprowadź swoje klucze API w **Ustawienia → API**. Należy skonfigurować przynajmniej jednego dostawcę; OpenRouter to popularny wybór dla modeli darmowych.

W Debianie/Ubuntu może być konieczne najpierw zainstalowanie dodatkowych zależności:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Szczegóły w sekcji [Instalacja → Linux](#linux-electron).

<br/>

> ℹ️ **UWAGA**<br/>
> macOS nie jest obecnie obsługiwane. Transrewrt jest dostępny dla Windows, Linux i Docker.

<br/>

Gdy aplikacja działa, zapoznaj się z **[Przewodnikiem użytkownika](USER-GUIDE.pl.md)**, aby dowiedzieć się, jak tłumaczyć, przepisywać i przekształcać tekst, zarządzać promptami oraz konfigurować modele.

<br/><br/>

<a id="installation"></a>
## Instalacja

<a id="windows-electron"></a>
### Windows (Electron)

- Pobierz najnowszy instalator z sekcji [Wydania](https://github.com/wsj-br/transrewrt/releases).
- Uruchom plik `.exe` i postępuj zgodnie z instrukcjami instalatora.
- Przy pierwszym uruchomieniu: uruchom aplikację z menu Start lub skrótu na pulpicie.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Pobierz odpowiedni plik `.AppImage` (`x64` lub `arm64`) z sekcji [Wydania](https://github.com/wsj-br/transrewrt/releases).
- Uruchom: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` na x86_64/amd64, albo użyj pliku `...-arm64.AppImage` na ARM64.
- Dodatkowe zależności (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Więcej informacji w pliku [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Pobierz: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Ustaw przynajmniej jeden klucz dostawcy za pomocą środowiska (np. `OPENROUTER_KEY` dla OpenRouter). Przekaż zmienne za pomocą `-e` lub `docker compose` / `.env`, aby hasła nie były wbudowane w obraz.
- Klucze dostawców **nie** są wprowadzane przez interfejs WWW; serwer odczytuje je ze środowiska.

Przykład – nazwany wolumin dla trwałości (klucz OpenRouter przez środowisko):

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
| Wolumin  | Zainstaluj `/app/data` dla trwałości konfiguracji i bazy danych                                                         |
| Zmienne środowiskowe | `PORT`, `CONFIG_PATH`, oraz klucze LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) – zobacz [Konfiguracja](#configuration-and-environment) |

Aby zbudować i uruchomić z kodu źródłowego: `docker compose up --build -d` albo `pnpm docker:up` – zobacz [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Uzyskanie klucza API OpenRouter

Transrewrt obsługuje wiele dostawców AI. [OpenRouter](https://openrouter.ai) jest popularnym wyborem, ponieważ agreguje wiele modeli pod jednym kluczem i oferuje modele darmowe.

1. Zarejestruj się lub zaloguj na stronie [openrouter.ai](https://openrouter.ai).
2. Otwórz stronę [Keys](https://openrouter.ai/keys) i utwórz nowy klucz (nadaj mu nazwę i opcjonalnie ustaw limit środków). Możesz korzystać z darmowych modeli bez dodawania środków.
3. **Wersja komputerowa (Electron):** wklej klucze w **Ustawienia → API**. **Docker:** ustaw zmienne środowiskowe, np. `OPENROUTER_KEY` (zobacz [Szybki start](#quick-start)).

Nie używaj modelu **Body Builder** od OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) do tłumaczenia, przepisywania ani przekształcania: zwraca on ładunki żądań w formacie JSON, nie gotowy tekst dla tych zadań. Zobacz [Ustawienia → Modele](USER-GUIDE.pl.md#models) w Przewodniku użytkownika.

Możesz również używać innych dostawców (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) lub uruchamiać modele lokalnie za pomocą [Ollama](https://ollama.com). Pełną listę obsługiwanych dostawców i zmiennych środowiskowych znajdziesz w sekcji [Konfiguracja](#configuration-and-environment).

> ⚠️ **OSTRZEŻENIE**<br/>
> Jeśli używasz Ollama z innego urządzenia, kontenera lub usługi, pamiętaj o skonfigurowaniu Ollama, aby zezwalało na połączenia zewnętrzne (nie tylko z localhost).

Aby dowiedzieć się więcej o limitach, własnych kluczach (BYOK) i innych funkcjach, zobacz [uwierzytelnianie OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguracja i środowisko

**Lokalizacje plików konfiguracyjnych**

| Wdrożenie        | Lokalizacja konfiguracji                         |
| ---------------- | ------------------------------------------------ |
| Electron (Windows) | `%APPDATA%\transrewrt\`                         |
| Electron (Linux)   | `~/.config/transrewrt/`                         |
| Web / Docker       | `/app/data/config.json` (użyj woluminu do trwałego zapisu) |

<br/>

**Zmienne środowiskowe** (tylko dla wersji web/Docker; Electron używa lokalnego pliku konfiguracyjnego)

| Zmienna            | Domyślna wartość          | Opis |
| ------------------ | ------------------------- | ---- |
| `PORT`             | `5000`                    | Port nasłuchiwania serwera |
| `CONFIG_PATH`      | `/app/data/config.json`   | Ścieżka do pliku konfiguracyjnego |
| `OPENROUTER_KEY`   | *(puste)*                 | Klucz API OpenRouter |
| `OPENAI_KEY`       | *(puste)*                 | Klucz API OpenAI |
| `CEREBRAS_KEY`     | *(puste)*                 | Klucz API Cerebras |
| `ANTHROPIC_KEY`    | *(puste)*                 | Klucz API Anthropic |
| `GOOGLE_KEY`       | *(puste)*                 | Klucz API Google Gemini |
| `DEEPSEEK_KEY`     | *(puste)*                 | Klucz API DeepSeek |
| `GROQ_KEY`         | *(puste)*                 | Klucz API Groq |
| `MISTRAL_KEY`      | *(puste)*                 | Klucz API Mistral |
| `OLLAMA_URL`       | *(puste)*                 | Podstawowy URL Ollama (np. `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(puste)*                 | Klucz API xAI |

Skonfiguruj tylko tych dostawców, których używasz. Identyfikatory modeli są przestrzeniami nazw (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, itd.).

**Wyświetlanie kosztów:** OpenRouter zwraca rzeczywisty koszt rozliczony, gdy jest to możliwe. Inni dostawcy korzystają z **szacunkowych** kosztów na podstawie publicznych cen modeli OpenRouter, jeśli dostępny jest klucz OpenRouter; bez niego koszt dla nie-OpenRouter może być wyświetlany jako `0`. Szacunki nie są fakturami.

<br/>

**Dane i trwałość:** W przypadku Docker zainstaluj wolumin w `/app/data`, aby plik `config.json` i baza danych SQLite były zachowywane przy ponownym uruchomieniu kontenera. Bez woluminu wszystkie dane zostaną utracone po zatrzymaniu kontenera.

**Deweloperzy:** Po pobraniu zmian, które zastępują stary konfiguracyjny jednokluczowy format, zresetuj lub połącz `data/config.json` z nową domyślną strukturą z pliku `src/config-defaults/config_default.json`, jeśli Twój lokalny plik wciąż używa usuniętych pól (`api_key`, `api_url`, opcje proxy).

<br/>

**Uwierzytelnianie w wersji internetowej:**

- Domyślny administrator: `admin` / `transrewrt26`.
- Zarządzaj użytkownikami w **Ustawienia → Użytkownicy**.
- Zresetuj hasło: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (z kodu źródłowego: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **OSTRZEŻENIE**<br/>
> Natychmiast zmień domyślne hasło administratora na każdym hoście dostępnym w sieci.

<br/>

Podstawowe ustawienia (czcionka, modele, języki itp.) są dostępne w Ustawieniach aplikacji.

<br/><br/>

<a id="development-and-architecture"></a>

## Rozwój i architektura

- **Rozwój:** Konfiguracja, budowanie, testowanie i wdrażanie (Electron, Web, Docker) – patrz **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektura i przegląd systemu:** Struktura katalogów, stos technologiczny, decyzje projektowe – patrz **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Wersje i tagi

- **Tagi Git** `v`* (np. `v1.0.10`) uruchamiają [przepływ wersji](.github/workflows/release.yml). **Wersje GitHub** zawierają instalator Windows (`.exe`) oraz AppImage dla Linuksa (**x64** i **arm64**).
- **Obrazy Docker** są publikowane na `ghcr.io/wsj-br/transrewrt`. Tagi obrazów odpowiadają wersji Git (np. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) oraz `latest`. Multi-arch: `linux/amd64` i `linux/arm64` (np. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Współpraca

1. Sklonuj repozytorium.
2. Utwórz gałąź funkcyjną: `git checkout -b feature/moja-funkcja`
3. Zacommituj zmiany z czytelnym komunikatem.
4. Wypchnij zmiany i otwórz żądanie pull request do gałęzi `main`.

Prosimy o przestrzeganie istniejącego stylu kodu oraz przetestowanie zmian w trybie Electron i webowym przed wysłaniem. Instrukcje budowania i testowania znajdują się w pliku [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

**Zgłaszanie problemów:** Otwórz zgłoszenie na [GitHub](https://github.com/wsj-br/transrewrt/issues). Podaj platformę (Windows / Linux / Docker) oraz wersję aplikacji (dostępną w oknie O programie lub na stronie wersji).

<br/><br/>

<a id="disclaimer"></a>
## Zrzeczenie odpowiedzialności

Nazwy produktów i ikony należą do ich odpowiednich właścicieli i są używane wyłącznie w celach identyfikacyjnych. Oprogramowanie to nie jest powiązane ani nie jest wspierane przez żadne z wymienionych marek.

<br/><br/>

<a id="license"></a>
## Licencja

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)