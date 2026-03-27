---
translated_at: "2026-03-27T23:12:54.881Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
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

Narzędzie tekstowe wykorzystujące AI: tłumaczenie między językami, przepisywanie w różnych stylach oraz modyfikowanie z użyciem własnych zachęt — z wykorzystaniem wielu dostawców AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI i lokalny Ollama). Działa jako aplikacja komputerowa (Electron) lub hostowana przez użytkownika aplikacja internetowa (Docker).

- **Tłumaczenie** — między dziesiątkami języków, z automatycznym wykrywaniem języka źródłowego
- **Przepisywanie** — poprawa gramatyki, zwiększenie przejrzystości, wersja formalna/informalna, skracanie, rozwijanie, styl techniczny
- **Modyfikacja** — własne zachęty AI; tworzenie i zarządzanie zachętami, opcjonalny język docelowy dla każdej zachęty
- **Historia** — pełna historia operacji z tekstem wejściowym/wyjściowym, filtrowanie i eksport
- **Modele i koszty** — wybór modeli od dowolnego skonfigurowanego dostawcy; pulpity z kosztami i zużyciem z dziennikiem oraz podsumowaniami według modelu/operacji/dnia
- **Interfejs użytkownika** — wielojęzyczny interfejs (30+ języków, obsługa pisania od prawej do lewej), czcionki, ...
- **Tryb sieciowy** — obsługa wielu użytkowników z rolami administratora
- **Wersja komputerowa** — aplikacja Electron dla Windows i Linux
- **Hostowanie własne** — obraz Dockera dla architektur amd64 i arm64 (gotowy do działania na Raspberry Pi)

Po zainstalowaniu, zobacz **[Przewodnik użytkownika](USER-GUIDE.pl.md)**, aby poznać wszystkie funkcje.

<small>**Przeczytaj w innych językach:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Uwaga dotycząca tłumaczeń interfejsu i dokumentacji:** Wszystkie języki interfejsu oprócz oryginalnego angielskiego (UK) zostały przetłumaczone przy użyciu modeli AI; sformułowania mogą być niedokładne lub zawierać błędy.

</small>

<br/>

<a id="screenshots"></a>

## Zrzuty ekranu

**Wybór języka**

![Wybór języka](../images/screenshots/pl/language-selector.png)

**Tłumacz**

![Tłumacz](../images/screenshots/pl/translate.png)

**Przekształć – edytor prompty**

![Przekształć – edytor prompty](../images/screenshots/pl/transform-prompt-edit.png)

**Panel główny**

![Panel główny](../images/screenshots/pl/dashboard-summary.png)

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
- [Wkładanie](#contributing)
- [Zrzeczenie odpowiedzialności](#disclaimer)
- [Licencja](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Szybki start

**Docker (zalecane przy samodzielnym hostowaniu)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Zamień `sk-or-your-key` na swój [klucz API OpenRouter](https://openrouter.ai/keys) (lub ustaw klucze innych dostawców; zobacz [Konfiguracja](#configuration-and-environment)). Otwórz [http://localhost:5000](http://localhost:5000) i zmień domyślne hasło administratora przed udostępnieniem usługi.

<br/>

> ℹ️ **UWAGA**<br/>
> W Dockerze poświadczenia LLM ustawia się za pomocą zmiennych środowiskowych takich jak `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nie przez interfejs webowy). W wersji desktopowej (Electron) klucze konfiguruje się w **Ustawienia → API**.

<br/>

**Windows**

Pobierz najnowszy plik `Transrewrt Setup x.y.z.exe` z sekcji [Wersje (Releases)](https://github.com/wsj-br/transrewrt/releases), uruchom instalator, a następnie uruchom program z menu Start lub skrótu na pulpicie. Wprowadź swoje klucze API w **Ustawienia → API**. Musisz skonfigurować co najmniej jednego dostawcę, OpenRouter jest popularny dla modeli bezpłatnych.

<br/>

**Linux**

Pobierz odpowiedni plik `.AppImage` dla swojego procesora z sekcji [Wersje](https://github.com/wsj-br/transrewrt/releases) (`x64` dla typowych komputerów, `arm64` dla większości urządzeń ARM, w tym Raspberry Pi 4+), a następnie:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Wprowadź swoje klucze API w **Ustawienia → API**. Musisz skonfigurować co najmniej jednego dostawcę, OpenRouter jest popularny dla modeli bezpłatnych.

W systemach Debian/Ubuntu może być konieczne najpierw zainstalowanie dodatkowych zależności:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Szczegóły dostępne w sekcji [Instalacja → Linux](#linux-electron).

<br/>

> ℹ️ **UWAGA**<br/>
> Obecnie Transrewrt nie obsługuje macOS. Dostępny jest dla Windows, Linux oraz w wersji Docker.

<br/>

Po uruchomieniu aplikacji zapoznaj się z **[Przewodnikiem użytkownika (User Guide)](USER-GUIDE.pl.md)**, aby dowiedzieć się, jak tłumaczyć, przepisywać i przekształcać tekst, zarządzać promptami oraz konfigurować modele.

<br/><br/>

<a id="installation"></a>

## Instalacja

<a id="windows-electron"></a>
### Windows (Electron)

- Pobierz najnowszy instalator z sekcji [Releases](https://github.com/wsj-br/transrewrt/releases).
- Uruchom plik `.exe` i postępuj zgodnie z instrukcjami instalatora.
- Przy pierwszym uruchomieniu: uruchom aplikację z menu Start lub skrótu na pulpicie. 

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Pobierz odpowiedni plik `.AppImage` (`x64` lub `arm64`) z sekcji [Releases](https://github.com/wsj-br/transrewrt/releases).
- Uruchomienie: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` na x86_64/amd64 lub użyj pliku `...-arm64.AppImage` na ARM64.
- Dodatkowe zależności (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Zobacz [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) w celu uzyskania więcej informacji.

<br/>

<a id="docker"></a>
### Docker

- Pobranie obrazu: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Ustaw co najmniej jeden klucz dostawcy za pomocą środowiska (na przykład `OPENROUTER_API_KEY` dla OpenRouter). Przekaż zmienne za pomocą flagi `-e` lub za pomocą `docker compose` / `.env`, aby tajne dane nie zostały zakodowane w obrazie.
- Klucze dostawców **nie** są wprowadzane w interfejsie WWW; serwer odczytuje je ze środowiska.

Przykład – nazwany wolumin dla trwałości danych (klucz OpenRouter przez środowisko):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

albo, jeśli wolisz użyć Docker Compose, skorzystaj z:

# pobierz plik compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edytuj plik, aby dodać klucze API
vi transrewrt.yml
# uruchom kontener
docker compose -f transrewrt.yml up -d
```

<br/>

| Opcja    | Opis                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Port     | `5000` (mapuj za pomocą `-p 5000:5000`)                                                                                                       |
| Wolumin  | Zamontuj `/app/data` w celu trwałości konfiguracji i bazy danych                                                                                  |
| Zmienne środowiskowe | `PORT`, `CONFIG_PATH`, oraz klucze LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) – zobacz [Konfiguracja](#configuration-and-environment) |

Aby zbudować i uruchomić z kodu źródłowego: `docker compose up --build -d` lub `pnpm docker:up` – zobacz [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Uzyskanie klucza API OpenRouter

Transrewrt obsługuje wiele dostawców AI. [OpenRouter](https://openrouter.ai) jest popularnym wyborem, ponieważ agreguje wiele modeli pod jednym kluczem i oferuje modele darmowe.

1. Zarejestruj się lub zaloguj na stronie [openrouter.ai](https://openrouter.ai).
2. Otwórz stronę [Keys](https://openrouter.ai/keys) i utwórz nowy klucz (nadaj mu nazwę oraz opcjonalnie ustaw limit kredytu). Możesz korzystać z modeli darmowych bez dodawania kredytu.
3. **Wersja desktopowa (Electron):** wklej klucze w **Ustawienia → API**. **Docker:** ustaw zmienne środowiskowe takie jak `OPENROUTER_API_KEY` (zobacz [Szybki start](#quick-start)).

Nie używaj modelu **Body Builder** OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) do tłumaczenia, przepisywania ani transformowania: zwraca on ładunki żądań w formacie JSON, a nie gotowy tekst dla tych zadań. Zobacz [Ustawienia → Modele](USER-GUIDE.pl.md#models) w Przewodniku użytkownika.

Możesz również korzystać z innych dostawców (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) albo uruchamiać modele lokalnie za pomocą [Ollama](https://ollama.com). Aby uzyskać pełną listę obsługiwanych dostawców i zmiennych środowiskowych, zobacz [Konfiguracja](#configuration-and-environment).

> ⚠️ **OSTRZEŻENIE**<br/>
> Jeśli korzystasz z Ollama z innego urządzenia, kontenera lub usługi, pamiętaj, aby skonfigurować Ollama tak, aby zezwalało na połączenia zewnętrzne (nie tylko localhost).

Aby poznać limity, BYOK i więcej, zobacz [uwierzytelnianie OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Konfiguracja i środowisko

**Lokalizacje plików konfiguracyjnych**

| Wdrożenie       | Lokalizacja konfiguracji                             |
| --------------- | ---------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (użyj woluminu, by zachować dane) |

<br/>

**Zmienne środowiskowe** (tylko wersja webowa/Docker; Electron używa lokalnego pliku konfiguracyjnego)

| Zmienna              | Domyślnie                  | Opis |
| -------------------- | -------------------------- | ---- |
| `PORT`               | `5000`                     | Port nasłuchujący serwera |
| `CONFIG_PATH`        | `/app/data/config.json`    | Ścieżka do pliku konfiguracyjnego |
| `OPENROUTER_API_KEY` | *(puste)*                  | Klucz API OpenRouter |
| `OPENAI_API_KEY`     | *(puste)*                  | Klucz API OpenAI |
| `CEREBRAS_API_KEY`   | *(puste)*                  | Klucz API Cerebras |
| `ANTHROPIC_API_KEY`  | *(puste)*                  | Klucz API Anthropic |
| `GOOGLE_API_KEY`     | *(puste)*                  | Klucz API Google Gemini |
| `DEEPSEEK_API_KEY`   | *(puste)*                  | Klucz API DeepSeek |
| `GROQ_API_KEY`       | *(puste)*                  | Klucz API Groq |
| `MISTRAL_API_KEY`    | *(puste)*                  | Klucz API Mistral |
| `OLLAMA_URL`         | *(puste)*                  | Podstawowy URL Ollama (np. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(puste)*                  | Klucz API xAI |

Skonfiguruj wyłącznie dostawców, których używasz. Identyfikatory modeli są przestrzeniami nazw (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, itp.).

**Wyświetlanie kosztów:** OpenRouter zwraca rzeczywisty rozliczony koszt, gdy to możliwe. Pozostałe dostawcy korzystają z **szacunkowego** kosztu z dostępnych publicznie cen modeli OpenRouter, o ile dostępny jest klucz OpenRouter; w przeciwnym razie koszty nietworzywy OpenRouter mogą być wyświetlane jako `0`. Szacunki nie są fakturami.

<br/>

**Dane i trwałość danych:** W przypadku Docker, zamontuj wolumin w `/app/data`, aby plik `config.json` oraz baza danych SQLite były utrwalane pomimo ponownego uruchamiania kontenera. Bez woluminu wszystkie dane zostaną utracone po zatrzymaniu kontenera.

**Deweloperzy:** Po aktualizacji, która wymienia starą konfigurację z pojedynczym kluczem, zresetuj lub połącz swój plik `data/config.json` z nowym domyślnym kształtem z pliku `src/config-defaults/config_default.json`, jeśli Twój lokalny plik nadal używa usuniętych pól (`api_key`, `api_url`, opcje proxy).

<br/>

**Uwierzytelnianie w wersji internetowej:**

- Domyślny administrator: `admin` / `transrewrt26`.
- Zarządzanie użytkownikami w menu **Ustawienia → Użytkownicy**.
- Resetowanie hasła: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (z kodu źródłowego: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **OSTRZEŻENIE**<br/>
> Natychmiast zmień domyślne hasło administratora na każdym hoście, do którego można uzyskać dostęp sieciowo.

<br/>

Główne ustawienia (czcionka, modele, języki itp.) są dostępne w aplikacji w menu Ustawienia.

<br/><br/>

<a id="development-and-architecture"></a>

## Rozwój i architektura

- **Rozwój:** Konfiguracja, kompilacja, testowanie i wdrażanie (Electron, Web, Docker) – zobacz **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektura i przegląd systemu:** Struktura katalogów, stos technologiczny, decyzje projektowe – zobacz **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Wydania i tagi

- **Tagi Git** zaczynające się od `v` (np. `v1.0.10`) uruchamiają [przepływ wydania](.github/workflows/release.yml). **Wydania na GitHubie** zawierają instalator dla systemu Windows (`.exe`) oraz AppImage dla Linuksa (wersje **x64** i **arm64**).
- **Obrazy Docker** są publikowane pod adresem `ghcr.io/wsj-br/transrewrt`. Tagi obrazów odpowiadają wersji w Gicie (np. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) oraz `latest`. Obsługiwane architektury: `linux/amd64` i `linux/arm64` (np. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Wkładanie zmian

1. Sklonuj repozytorium.
2. Utwórz gałąź funkcji: `git checkout -b feature/moja-funkcja`
3. Zatwierdź zmiany z czytelnym komunikatem.
4. Wypchnij zmiany i otwórz Pull Request do gałęzi `main`.

Prosimy o przestrzeganie istniejącego stylu kodu oraz testowanie zmian w trybach Electron i webowym przed wysłaniem. Zobacz [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) po instrukcje kompilacji i testowania.

<br/>

**Zgłaszanie problemów:** Otwórz zgłoszenie na [GitHub](https://github.com/wsj-br/transrewrt/issues). Dołącz informacje o platformie (Windows / Linux / Docker) oraz wersji aplikacji (pokazanej w oknie „O programie” lub na stronie wydań).

<br/><br/>

<a id="disclaimer"></a>

## Zrzeczenie odpowiedzialności

Nazwy produktów i ikony należą do ich odpowiednich właścicieli i są używane wyłącznie w celach identyfikacyjnych. Oprogramowanie to nie jest powiązane ani nie jest oficjalnie zatwierdzone przez żadne z wymienionych marek.

<br/><br/>

<a id="license"></a>
## Licencja

Prawa autorskie © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)