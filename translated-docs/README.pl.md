<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.3.9-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Narzędzie tekstowe z wykorzystaniem AI: tłumaczenie między językami, przeformułowanie w różnych stylach oraz transformacja za pomocą niestandardowych promptów — z wykorzystaniem wielu dostawców AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI oraz lokalny Ollama). Działa jako aplikacja desktopowa (Electron) lub samodzielnie hostowana aplikacja internetowa (Docker).

- **Tłumacz** – między dziesiątkami języków, z automatycznym wykrywaniem języka źródłowego
- **Przepisz** – popraw błędy gramatyczne, popraw czytelność, wersja formalna/nieformalna, skróć, rozwiń, wersja techniczna
- **Przekształć** – niestandardowe zachęty AI; twórz i zarządzaj zachętami, opcjonalny język docelowy dla każdej zachęty
- **Historia** – pełna historia wykonania z tekstem wejściowym/wyjściowym, filtrowaniem i eksportem
- **Łatwy i zaawansowany** – Tryb łatwy (domyślny): wyselekcjonowane ustawienia domyślne dla każdego dostawcy (**Darmowe (OpenRouter)**, **Standardowe**, **Zaawansowane**, **Techniczne**; widoczne są wyłącznie ustawienia domyślne, które mają mapowanie dla wybranego dostawcy), bez konieczności wybierania identyfikatorów modeli; Tryb zaawansowany: pełna lista modeli z Twoich skonfigurowanych dostawców
- **Modele i koszt** – tabele kosztów i zużycia (Podsumowanie, Według modelu, Wszystkie wywołania) z możliwością eksportu; OpenRouter pokazuje rzeczywiste wydatki, inne dostawcy używają szacunków
- **Interfejs użytkownika (UI)** – wielojęzyczny interfejs (ponad 30 języków, obsługa języków pisanych od prawej do lewej), czcionki, ...
- **Tryb sieciowy** – obsługa wielu użytkowników z rolami administratora
- **Aplikacja komputerowa** – aplikacja Electron dla systemów Windows i Linux
- **Hostowana lokalnie** – obraz Docker dla architektur amd64 i arm64 (gotowy do użycia na Raspberry Pi)

Po zainstalowaniu zapoznaj się z [**Podręcznikiem użytkownika**](USER-GUIDE.pl.md), aby poznać szczegółowy opis wszystkich funkcji.

<small>**Przeczytaj w innych językach:** </small>
<small id="lang-list">[English (GB)](../README.md) · [Português (Brasil)](./README.pt-BR.md) · [العربية](./README.ar.md) · [বাংলা](./README.bn.md) · [Català](./README.ca.md) · [中文 (中国大陆)](./README.zh-CN.md) · [中文 (台灣)](./README.zh-TW.md) · [Hrvatski](./README.hr.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [English (US)](./README.en-US.md) · [Tagalog](./README.tl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Bahasa Melayu](./README.ms.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Basa Jawa](./README.jv.md) · [Português](./README.pt.md) · [ਪੰਜਾਬੀ](./README.pa.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Kiswahili](./README.sw.md) · [Svenska](./README.sv.md) · [తెలుగు](./README.te.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

<small>

> **Uwaga dotycząca tłumaczeń interfejsu i dokumentacji:** Wszystkie języki interfejsu oprócz oryginalnego angielskiego (Wielka Brytania) 
> zostały przetłumaczone przy użyciu modeli AI; sformułowania mogą być niedokładne lub zawierać błędy.

</small>

<br/>

<a id="table-of-contents"></a>
## Spis treści

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Zrzuty ekranu](#screenshots)
- [Szybki start](#quick-start)
- [Uzyskanie klucza API OpenRouter](#getting-an-openrouter-api-key)
- [Konfiguracja i środowisko](#configuration-and-environment)
- [Rozwój i architektura](#development-and-architecture)
- [Zgłaszanie problemów](#reporting-issues)
- [Zrzeczenie odpowiedzialności](#disclaimer)
- [Licencja](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## Zrzuty ekranu

**Wybór języka**

![Language selector](../images/screenshots/pl/language-selector.png)

**Przetłumacz**

![Translate](../images/screenshots/pl/translate.png)

**Transformacja — edytor promptów**

![Transform - prompt editor](../images/screenshots/pl/transform-prompt-edit.png)

**Panel**

![Dashboard summary - usage](../images/screenshots/pl/dashboard-summary.png)

**Historia**

![History](../images/screenshots/pl/history.png)

**Ustawienia — wybór modelu**

![Settings - model selection](../images/screenshots/pl/settings-general.png)

<br/><br/>

<a id="quick-start"></a>
## Szybki start

<details>
<summary><b>Docker (zalecane dla samodzielnego hostingu)</b></summary>

<a id="docker"></a>

<br/>

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

Ustaw co najmniej jeden klucz dostawcy za pomocą zmiennych środowiskowych (np. `OPENROUTER_API_KEY` dla OpenRouter). Przekaż zmienne za pomocą `-e` lub `docker compose` / `.env`, aby dane poufne nie były wbudowane w obraz. Klucze dostawców **nie** są wprowadzane w interfejsie WWW; serwer odczytuje je ze środowiska.

<br/>

> ℹ️ **UWAGA**<br/>
> W Dockerze dane uwierzytelniające LLM są ustawiane za pomocą zmiennych środowiskowych takich jak `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (nie w interfejsie WWW). W wersji na komputer stacjonarny (Electron) konfigurujesz klucze w **Ustawienia → API**.

<br/>

Lub użyj Docker Compose:

```bash
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Zobacz [Konfigurację](#configuration-and-environment) pod kątem wszystkich zmiennych środowiskowych, takich jak `PORT`, `CONFIG_PATH`, `TZ`, oraz kluczy LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

</details>

<br/>

<details>
<summary><b>Strefa czasowa serwera (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

Interfejs użytkownika aplikacji używa ustawień daty i czasu zgodnych z lokalizacją i strefą czasową **przeglądarki**. W przypadku zachowania po stronie **serwera** (rejestrowanie i podobne funkcje), kontener używa zmiennej środowiskowej `TZ`. Domyślnie jest to `TZ=Europe/London`.

Aby użyć innej strefy czasowej, ustaw `TZ` w pliku Compose, na przykład:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Lub przekaż ją podczas uruchamiania kontenera (Docker):

```bash
--env TZ=America/Sao_Paulo
```

W wielu systemach Linux nazwę strefy czasowej systemu można skopiować poleceniem:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Lista poprawnych nazw stref czasowych jest prowadzona w [bazie danych tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- Pobierz najnowsze `Transrewrt Setup x.y.z.exe` z sekcji [Releases](https://github.com/wsj-br/transrewrt/releases).
- Uruchom `.exe` i postępuj zgodnie z instrukcjami instalatora.
- Przy pierwszym uruchomieniu: uruchom aplikację z menu Start lub skrótu na pulpicie.
- Wprowadź swoje klucze API w **Ustawienia → API**. Musisz skonfigurować co najmniej jednego dostawcę; OpenRouter jest powszechnie używany do modeli bezpłatnych.

<br/>

> ℹ️ **UWAGA**<br/>
> Windows może wyświetlić jedno z tych ostrzeżeń bezpieczeństwa (normalne dla aplikacji niepodpisanych/niezależnych):
>   - **Kontrola konta użytkownika (UAC)**: "Czy chcesz zezwolić tej aplikacji od nieznanego wydawcy na wprowadzenie zmian na urządzeniu?" → Kliknij **Tak**.
>   - **SmartScreen Microsoft Defender**: "Windows chroni Twój komputer" → Kliknij **Więcej informacji** → **Mimo to uruchom**.
>
> Dzieje się tak, ponieważ aplikacja nie jest podpisana przez Microsoft lub dużego wydawcę — jest bezpieczna, jeśli została pobrana z naszych oficjalnych wydań na GitHubie (sprawdź sumy kontrolne na stronie [Releases](https://github.com/wsj-br/transrewrt/releases) obok każdego pliku).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

Pobierz `.AppImage` dla swojego procesora z sekcji [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` dla typowych komputerów PC, `arm64` dla wielu urządzeń ARM, w tym Raspberry Pi 4+), a następnie:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Na x86_64/amd64 użyj nazwy pliku `x64`; na ARM64 użyj nazwy `...-arm64.AppImage`.

Wprowadź swoje klucze API w **Ustawienia → API**. Musisz skonfigurować co najmniej jednego dostawcę; OpenRouter jest popularny dla modeli bezpłatnych.

**Komunikaty konsoli:** Pakowane wersje dla systemu Linux (`x64` i `arm64` AppImages) tłumią ostrzeżenia deprecjacyjne Node w terminalu (na przykład wbudowany moduł `punycode`). Jeśli Chromium wyświetla błędy GPU / EGL, takie jak „GLES3 jest nieobsługiwane”, ale aplikacja działa, możesz je wyłączyć, wyłączając akcelerację sprzętową:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

To dotyczy również amd64; zmień nazwę pliku, aby pasowała do pobranego.

W systemach Debian/Ubuntu mogą być potrzebne dodatkowe biblioteki **uruchomieniowe**, wymagane przez Chromium (często są już obecne w pełnych instalacjach desktopowych). Uruchom poniższe polecenia, jeśli to konieczne:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

zamień `libasound2t64` na `libasound2` dla `arm64`. Minimalne lub niestandardowe instalacje mogą nadal kończyć się błędem brakującego pliku `.so`. Zainstaluj pakiet o nazwie podanej w komunikacie błędu (częste dodatki: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). W niektórych środowiskach może być konieczne uruchomienie aplikacji przy użyciu `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **UWAGA**<br/>
> macOS nie jest obecnie obsługiwany. Transrewrt jest dostępny dla systemów Windows, Linux i Docker.

</details>

<br/>

Gdy aplikacja będzie działać, zapoznaj się z [**Podręcznikiem użytkownika**](USER-GUIDE.pl.md), aby dowiedzieć się, jak tłumaczyć, przepisywać i przekształcać tekst, zarządzać zachętami oraz konfigurować modele.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Uzyskanie klucza API OpenRouter

Transrewrt obsługuje wiele dostawców AI. [OpenRouter](https://openrouter.ai) jest popularnym wyborem, ponieważ agreguje wiele modeli pod jednym kluczem i oferuje modele bezpłatne.

1. Zarejestruj się lub zaloguj się na stronie [openrouter.ai](https://openrouter.ai).
2. Otwórz stronę [Keys](https://openrouter.ai/keys) i utwórz nowy klucz (nadaj mu nazwę i opcjonalnie ustaw limit środków). Możesz korzystać z modeli bezpłatnych bez dodawania środków.
3. **Wersja desktopowa (Electron):** wklej klucze w **Ustawienia → API**. **Docker:** ustaw zmienne środowiskowe, takie jak `OPENROUTER_API_KEY` (zobacz [Szybki start](#quick-start)).

Nie używaj modelu **Body Builder** OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) do tłumaczenia, przeformułowania ani transformacji: zwraca on ładunki żądań JSON, a nie gotowy tekst do tych zadań. Zobacz [Ustawienia → Modele](USER-GUIDE.pl.md#models) w Przewodniku użytkownika.

Możesz również używać innych dostawców (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) lub uruchamiać modele lokalnie za pomocą [Ollama](https://ollama.com). Zobacz [Konfiguracja](#configuration-and-environment), aby uzyskać pełną listę obsługiwanych dostawców i zmiennych środowiskowych.

</br>

> ⚠️ **OSTRZEŻENIE**<br/>
> Jeśli używasz Ollama z innego urządzenia, kontenera lub usługi, pamiętaj, aby skonfigurować Ollama tak, aby zezwalał na połączenia zewnętrzne (nie tylko localhost).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguracja i środowisko

</br>

**Lokalizacje plików konfiguracyjnych**

| Wdrożenie         | Lokalizacja konfiguracji                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (użyj wolumenu, aby utrwalić dane) |

<br/>

**Zmienne środowiskowe** (tylko web/Docker; Electron używa lokalnego pliku konfiguracyjnego)

| Zmienna             | Opis                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | port nasłuchu serwera (domyślnie `5000`)                                  |
| `CONFIG_PATH`        | Ścieżka do pliku konfiguracyjnego (domyślnie `/app/data/config.json`)                |
| `TZ`                 | strefa czasowa dla czasu po stronie serwera (logi itp.) (domyślnie `Europe/London`) |
| `HISTORY_DISABLED`   | Wymusza wyłączenie historii wykonywania (opcjonalne, domyślnie `false`)                  |
| `OPENROUTER_API_KEY` | klucz API OpenRouter                                                           |
| `OPENAI_API_KEY`     | klucz API OpenAI                                                               |
| `CEREBRAS_API_KEY`   | klucz API Cerebras                                                             |
| `ANTHROPIC_API_KEY`  | klucz API Anthropic                                                            |
| `GOOGLE_API_KEY`     | klucz API Google Gemini                                                        |
| `DEEPSEEK_API_KEY`   | klucz API DeepSeek                                                             |
| `GROQ_API_KEY`       | klucz API Groq                                                                 |
| `MISTRAL_API_KEY`    | klucz API Mistral                                                              |
| `OLLAMA_URL`         | podstawowy adres URL Ollama (np. `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | klucz API xAI                                                                  |

**Tryb prywatności:** Aby wymusić wyłączenie śledzenia historii niezależnie od ustawień `config.json` lub preferencji poszczególnych użytkowników, ustaw wartość `HISTORY_DISABLED` na `true` lub `1` (bez uwzględniania wielkości liter) dla **procesu serwera internetowego/Docker** i/lub **głównego procesu aplikacji desktopowej Electron** (np. środowiska systemowego lub programu uruchamiającego — nie tylko renderera). To wyłącza zapisywanie historii wejścia/wyjścia, blokuje opcję **Ustawienia → Ustawienia ogólne → Historia** oraz blokuje interfejsy API związane z historią.

Skonfiguruj tylko dostawców, których używasz. Identyfikatory modeli są przestrzeniami nazw (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, itp.).

**Wyświetlanie kosztów:** OpenRouter zwraca dokładny rozliczony koszt, jeśli to możliwe. Pozostali dostawcy używają **szacunkowego** kosztu z publicznej cennika modeli OpenRouter, gdy dostępny jest klucz OpenRouter; bez niego, koszt niebędący OpenRouter może być wyświetlany jako `0`. Szacunki nie są fakturami.

<br/>

**Dane i utrwalanie:** Dla Docker, zamontuj wolumen w `/app/data`, aby `config.json` i baza danych SQLite były utrwalone przy ponownym uruchomieniu kontenera. Bez wolumenu wszystkie dane zostaną utracone po zatrzymaniu kontenera.

<br/>

**Uwierzytelnianie w sieci:**

- Domyślny administrator: `admin` / `transrewrt26`.
- Zarządzaj użytkownikami w **Ustawienia → Użytkownicy**.
- Zresetuj hasło: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **OSTRZEŻENIE**<br/>
> Natychmiast zmień domyślne hasło administratora na każdym hoście dostępnym w sieci.

<br/>

Ustawienia kluczy (czcionka, modele, języki itp.) są dostępne w Ustawieniach aplikacji.

<br/><br/>

<a id="development-and-architecture"></a>
## Rozwój i architektura

- **Rozwój oprogramowania:** Konfiguracja, kompilacja, testowanie i wdrażanie (Electron, Web, Docker) – zobacz [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).
- **Architektura i przegląd systemu:** Struktura katalogów, stos technologiczny, decyzje projektowe – zobacz [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md).

<br/><br/>

<a id="reporting-issues"></a>
## Zgłaszanie problemów

Otwórz zgłoszenie na [GitHub](https://github.com/wsj-br/transrewrt/issues). Dołącz swoją platformę (Windows / Linux / Docker) oraz wersję aplikacji (widoczną w oknie O programie lub na stronie Releases).

<br/><br/>

<a id="disclaimer"></a>
## Zrzeczenie odpowiedzialności

Nazwy produktów i ikony należą do ich właścicieli i są używane wyłącznie w celach identyfikacyjnych. To oprogramowanie nie jest powiązane z wymienionymi markami ani przez nie wspierane.

<br/><br/>

<a id="license"></a>
## Licencja

Prawa autorskie © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
