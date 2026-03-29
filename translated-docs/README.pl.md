---
translated_at: "2026-03-29T01:55:35.681Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Wersja"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licencja: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Narzędzie tekstowe wspierane przez sztuczną inteligencję: tłumaczenie między językami, przepisywanie w różnych stylach oraz transformacja za pomocą niestandardowych poleceń — z wykorzystaniem wielu dostawców AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI oraz lokalny Ollama). Działa jako aplikacja komputerowa (Electron) lub samodzielnie hostowana aplikacja internetowa (Docker).

- **Tłumacz** — między dziesiątkami języków, z automatycznym wykrywaniem języka źródłowego
- **Przepisz** — poprawa gramatyki, zwiększona przejrzystość, wersja formalna/niejednolita, skrócenie, rozbudowanie, język techniczny
- **Przekształć** — niestandardowe prompty AI; twórz i zarządzaj promptami, opcjonalny język docelowy dla każdego promptu
- **Historia** — pełna historia wykonań z tekstem wejściowym/wyjściowym, filtrowanie i eksport
- **Modele i koszty** — wybieraj modele od dowolnego skonfigurowanego dostawcy; tablice kosztów i zużycia z logami, podsumowaniami według modelu/operacji/dnia
- **Interfejs użytkownika** — wielojęzyczny interfejs (ponad 30 języków, obsługa języków pisanych z prawej do lewej), czcionki itd.
- **Tryb webowy** — obsługę wielu użytkowników z rolami administratora
- **Aplikacja komputerowa** — aplikacja Electron dla systemów Windows i Linux
- **Hostowanie samodzielne** — obraz Docker dla amd64 i arm64 (gotowy do działania na Raspberry Pi)

Po instalacji zapoznaj się z **[podręcznikiem użytkownika](USER-GUIDE.pl.md)**, aby zobaczyć pełny opis wszystkich funkcji.

<small>**Przeczytaj w innych językach:** </small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

E.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Uwaga dotycząca tłumaczeń interfejsu i dokumentacji:** Wszystkie języki interfejsu oprócz oryginalnego angielskiego (Wielka Brytania)
> zostały przetłumaczone przy użyciu modeli AI; sformułowania mogą być niedokładne lub zawierać błędy.

</small>

<br/>

<a id="screenshots"></a>

## Zrzuty ekranu

**Wybór języka**

![Wybór języka](../images/screenshots/pl/language-selector.png)

**Tłumacz**

![Tłumacz](../images/screenshots/pl/translate.png)

**Transformacja – edytor promptów**

![Transformacja – edytor promptów](../images/screenshots/pl/transform-prompt-edit.png)

**Panel główny**

![Podsumowanie panelu głównego — zużycie](../images/screenshots/pl/dashboard-summary.png)

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
  - [Konfigurowanie strefy czasowej](#configuring-the-timezone)
- [Uzyskanie klucza API OpenRouter](#getting-an-openrouter-api-key)
- [Konfiguracja i środowisko](#configuration-and-environment)
- [Rozwój i architektura](#development-and-architecture)
- [Zgłaszanie problemów](#reporting-issues)
- [Zrzeczenie odpowiedzialności](#disclaimer)
- [Licencja](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Szybki start

**Docker (zalecane dla samoobsługowego hostingu)**

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
> W Dockerze dane uwierzytelniające do LLM ustawia się za pomocą zmiennych środowiskowych takich jak `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nie przez interfejs webowy). W wersji komputerowej (Electron) klucze konfiguruje się w **Ustawienia → API**.

<br/>

**Windows**

Pobierz najnowszy plik `Transrewrt Setup x.y.z.exe` z sekcji [Releases](https://github.com/wsj-br/transrewrt/releases), uruchom instalator, a następnie uruchom aplikację z menu Start lub skrótu na pulpicie. Wprowadź swoje klucze API w **Ustawienia → API**. Musisz skonfigurować co najmniej jednego dostawcę, OpenRouter to popularny wybór dla modeli darmowych.

<br/>

**Linux**

Pobierz plik `.AppImage` odpowiedni dla Twojego procesora z sekcji [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` dla typowych komputerów, `arm64` dla wielu urządzeń ARM, w tym Raspberry Pi 4+), a następnie wykonaj:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Wprowadź swoje klucze API w **Ustawienia → API**. Musisz skonfigurować co najmniej jednego dostawcę, OpenRouter to popularny wybór dla modeli darmowych.

W systemach Debian/Ubuntu może być konieczne najpierw zainstalowanie dodatkowych zależności:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Szczegóły dostępne są w sekcji [Instalacja → Linux](#linux-electron).

<br/>

> ℹ️ **UWAGA**<br/>

> Obecnie macOS nie jest obsługiwane. Transrewrt jest dostępny dla systemów Windows, Linux oraz Docker.

<br/>

Po uruchomieniu aplikacji zapoznaj się z **[Podręcznikiem użytkownika](USER-GUIDE.pl.md)**, aby dowiedzieć się, jak tłumaczyć, przepisywać i przekształcać tekst, zarządzać promptami oraz konfigurować modele.

<br/><br/>

<a id="installation"></a>

## Instalacja

<a id="windows-electron"></a>

### Windows (Electron)

- Pobierz najnowszy instalator z sekcji [Releases](https://github.com/wsj-br/transrewrt/releases).
- Uruchom plik `.exe` i postępuj zgodnie z instrukcjami instalatora.
- Przy pierwszym uruchomieniu: uruchom aplikację z menu Start lub skrótu na pulpicie.

<br/>

> ℹ️ **UWAGA**<br/>
> Windows może wyświetlić jedno z poniższych ostrzeżeń bezpieczeństwa (to normalne dla niepodpisanych aplikacji niezależnych):
>   - **Kontrola konta użytkownika (UAC)**: „Czy chcesz zezwolić tej aplikacji od nieznanego wydawcy na wprowadzenie zmian na urządzeniu?” → Kliknij **Tak**.
>   - **Microsoft Defender SmartScreen**: „Windows chroni swój komputer” → Kliknij **Więcej informacji** → **Nadal uruchom**.
>
> Wynika to z faktu, że aplikacja nie jest podpisana przez Microsoft ani dużego wydawcę – jest bezpieczna, o ile została pobrana z naszych oficjalnych wydań na GitHubie
> (zweryfikuj poniższą sumę kontrolną SHA256).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- Pobierz odpowiedni plik `.AppImage` (`x64` lub `arm64`) z sekcji [Releases](https://github.com/wsj-br/transrewrt/releases).
- Uruchom: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` na x86_64/amd64 lub użyj pliku o nazwie `...-arm64.AppImage` na ARM64.
- Dodatkowe zależności (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Więcej informacji znajduje się w pliku [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>

### Docker

- Pobierz: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Ustaw co najmniej jeden klucz dostawcy za pomocą środowiska (na przykład `OPENROUTER_API_KEY` dla OpenRouter). Przekaż zmienne za pomocą `-e` lub `docker compose` / `.env`, aby tajne dane nie były wbudowane w obraz.
- Klucze dostawców **nie** są wprowadzane w interfejsie webowym; serwer odczytuje je ze środowiska.

Przykład – nazwana wolumina dla trwałości (klucz OpenRouter przez env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

lub jeśli wolisz użyć Docker Compose, wykonaj:

```
# pobierz plik compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edytuj plik, aby dodać klucze API oraz dostosować strefę czasową (TZ)
vi transrewrt.yml
# uruchom kontener
docker compose -f transrewrt.yml up -d

Zobacz [Konfigurację](#configuration-and-environment) pod kątem wszystkich zmiennych środowiskowych, takich jak `PORT`, `CONFIG_PATH`, `TZ` oraz kluczy LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>

### Konfigurowanie strefy czasowej

Data i godzina wyświetlane w interfejsie aplikacji są dostosowane do ustawień lokalnych i strefy czasowej **przeglądarki**. W przypadku zachowania po stronie **serwera** (np. rejestrowanie zdarzeń), kontener korzysta ze zmiennej środowiskowej `TZ`. Domyślną wartością jest `TZ=Europe/London`.

Aby użyć innej strefy czasowej, ustaw wartość `TZ` w pliku Compose, na przykład:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Lub przekaż ją podczas uruchamiania kontenera (Docker):

```bash
--env TZ=America/Sao_Paulo
```

W wielu systemach Linux nazwę strefy czasowej systemu można skopiować za pomocą polecenia:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Lista poprawnych nazw stref czasowych jest dostępna w [bazie danych tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Uzyskiwanie klucza API OpenRouter

Transrewrt obsługuje wiele dostawców sztucznej inteligencji. [OpenRouter](https://openrouter.ai) jest popularnym wyborem, ponieważ łączy wiele modeli w jednym kluczu i oferuje modele bezpłatne.

1. Zarejestruj się lub zaloguj na stronie [openrouter.ai](https://openrouter.ai).
2. Otwórz stronę [Keys](https://openrouter.ai/keys) i utwórz nowy klucz (nadaj mu nazwę i opcjonalnie ustaw limit środków). Możesz korzystać z modeli bezpłatnych bez dodawania środków.
3. **Wersja komputerowa (Electron):** wklej klucze w **Ustawienia → API**. **Docker:** ustaw zmienne środowiskowe, takie jak `OPENROUTER_API_KEY` (zobacz [Szybki start](#quick-start)).

Nie używaj modelu **Body Builder** OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) do tłumaczenia, przepisywania ani przekształcania: zwraca on ładunki żądań w formacie JSON, a nie gotowy tekst dla tych zadań. Szczegóły znajdziesz w sekcji [Ustawienia → Modele](USER-GUIDE.pl.md#models) w Podręczniku użytkownika.

Możesz również korzystać z innych dostawców (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) lub uruchamiać modele lokalnie za pomocą [Ollama](https://ollama.com). Pełną listę obsługiwanych dostawców i zmiennych środowiskowych znajdziesz w sekcji [Konfiguracja](#configuration-and-environment).

> ⚠️ **OSTRZEŻENIE**<br/>
> Jeśli korzystasz z Ollama z innego urządzenia, kontenera lub usługi, pamiętaj o skonfigurowaniu Ollama tak, aby umożliwiał połączenia zewnętrzne (nie tylko z localhost).

Aby uzyskać informacje o limitach, własnych kluczach (BYOK) i innych szczegółach, zobacz [uwierzytelnienie OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Konfiguracja i środowisko

**Lokalizacje plików konfiguracyjnych**

| Wdrożenie          | Lokalizacja konfiguracji                           |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (użyj woluminu, aby zachować) |

<br/>

**Zmienne środowiskowe** (tylko wersja internetowa/Docker; Electron używa lokalnego pliku konfiguracyjnego)

| Zmienna          | Domyślna wartość          | Opis |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Port nasłuchu serwera |
| `CONFIG_PATH`    | `/app/data/config.json` | Ścieżka do pliku konfiguracyjnego |
| `TZ`             | `Europe/London`         | Strefa czasowa IANA dla czasu po stronie serwera (rejestrowanie itp.); interfejs użytkownika nadal podąża za przeglądarką. Zobacz [Docker → strefa czasowa](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(puste)*               | Klucz API OpenRouter |
| `OPENAI_API_KEY`     | *(puste)*               | Klucz API OpenAI |
| `CEREBRAS_API_KEY`   | *(puste)*               | Klucz API Cerebras |
| `ANTHROPIC_API_KEY`  | *(puste)*               | Klucz API Anthropic |
| `GOOGLE_API_KEY`     | *(puste)*               | Klucz API Google Gemini |
| `DEEPSEEK_API_KEY`   | *(puste)*               | Klucz API DeepSeek |
| `GROQ_API_KEY`       | *(puste)*               | Klucz API Groq |
| `MISTRAL_API_KEY`    | *(puste)*               | Klucz API Mistral |
| `OLLAMA_URL`     | *(puste)*               | Podstawowy adres URL Ollama (np. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(puste)*               | Klucz API xAI |

Skonfiguruj tylko tych dostawców, których używasz. Identyfikatory modeli są przestrzeniowane (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, itd.).

**Wyświetlanie kosztów:** OpenRouter zwraca dokładny naliczony koszt, gdy to możliwe. Pozostałe dostawcy wykorzystują **oszacowane** koszty z publicznej cennikowej OpenRouter, jeśli dostępny jest klucz OpenRouter; w przeciwnym razie koszt dla dostawców innych niż OpenRouter może być wyświetlany jako `0`. Szacunki nie są rachunkami.

<br/>

**Dane i trwałość:** Dla Docker — zamontuj wolumin w lokalizacji `/app/data`, by plik `config.json` i baza danych SQLite były utrwalone nawet po ponownym uruchomieniu kontenera. Bez woluminu wszystkie dane zostaną utracone po zatrzymaniu kontenera.

**Deweloperzy:** Po zaktualizowaniu zmian zastępujących stare, jednokluczowe ustawienia, zresetuj lub scal plik `data/config.json` z nową domyślną strukturą z pliku `src/config-defaults/config_default.json`, jeśli Twój lokalny plik nadal używa usuniętych pól (`api_key`, `api_url`, opcje proxy).

<br/>

**Uwierzytelnianie HTTP:**

- Domyślny administrator: `admin` / `transrewrt26`.
- Zarządzaj użytkownikami w **Ustawienia → Użytkownicy**.

- Zresetuj hasło: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (z kodu źródłowego: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **OSTRZEŻENIE**<br/>
> Natychmiast zmień domyślne hasło administratora na każdym hoście dostępnym w sieci.

<br/>

Główne ustawienia (czcionka, modele, języki itp.) są dostępne w ustawieniach aplikacji.

<br/><br/>

<a id="development-and-architecture"></a>

## Rozwój i architektura

- **Rozwój:** Konfiguracja, kompilacja, testowanie i wdrażanie (Electron, Web, Docker) – zobacz **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Architektura i przegląd systemu:** Struktura katalogów, stos technologiczny, decyzje projektowe – zobacz **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## Zgłaszanie problemów

Otwórz zgłoszenie na [GitHubie](https://github.com/wsj-br/transrewrt/issues). Podaj swoją platformę (Windows / Linux / Docker) oraz wersję aplikacji (podaną w oknie „O programie” lub na stronie wydań).

<br/><br/>

<a id="disclaimer"></a>

## Zastrzeżenie

Nazwy produktów i ikony należą do ich odpowiednich właścicieli i są używane wyłącznie w celach identyfikacyjnych. Oprogramowanie to nie jest powiązane ani nie jest wspierane przez żadne z wymienionych marek.

<br/><br/>

<a id="license"></a>

## Licencja

Wszelkie prawa zastrzeżone © 2026 Waldemar Scudeller Jr.

[Licencja Apache w wersji 2.0](LICENSE)