---
title: Ustawienia
description: >-
  Kompaktowy przewodnik po Ogólne, Modele, Języki, Słownik, Koszt,
  Przekształcenie, Użytkownicy, API i Informacje.
translation_last_updated: '2026-07-17T14:58:59.147Z'
source_file_mtime: '2026-07-17T14:37:21.849Z'
source_file_hash: 492e5fd37f4a6b282502282d4f2728047a0d09ae8c30334b3c8388a5ce6e9f68
translation_language: pl
source_file_path: src/content/docs/docs/settings.md
translation_models:
  - google/gemini-2.5-flash
  - meta-llama/llama-3.3-70b-instruct
---



Otwórz **Ustawienia** z paska bocznego, aby dostosować zachowanie aplikacji.

| Zakładka | Komputer | Web (admin) | Web (użytkownik) | Notatki |
| --- | :---: | :---: | :---: | --- |
| Ustawienia ogólne | tak | tak | tak | Obejmuje **doświadczenie AI** (Łatwe / Zaawansowane) |
| Modele | tak | tak | tak | Tylko gdy **doświadczenie AI** jest **Zaawansowane** |
| Języki | tak | tak | tak | |
| Śledzenie kosztów | tak | tak | — | |
| Przekształcenie | tak | tak | tak | Import/eksport partii poleceń |
| Słownik | tak | tak | tak | Pary terminów do tłumaczenia |
| Użytkownicy | — | tak | — | |
| Konfiguracja API | tak | tak | — | |
| Informacje | tak | tak | tak | |

W trybie **Łatwym**, wybierz AI za pomocą ustawień w pasku narzędzi i **Dostawcy** w Ustawieniach ogólnych; zakładka **Modele** jest ukryta.

:::note
W wersji internetowej każdy użytkownik ma własną konfigurację (doświadczenie AI, dostawca, modele/ustawienia, języki, opcje, polecenia). Zmiany nie wpływają na innych użytkowników.
:::

## Ustawienia ogólne

**Doświadczenie AI**

- **Łatwy** (domyślny): wybierz **Dostawcę**. Dostawcy chmurowi używają predefiniowanych ustawień paska narzędzi (**Darmowy (OpenRouter)**, **Standardowy**, **Zaawansowany**, **Techniczny**). **Lokalny LLM** wyświetla listę zainstalowanych modeli lokalnych. **Odśwież katalog ustawień** pobiera najnowszą listę ustawień z repozytorium projektu.
- **Zaawansowany**: wybierz modele na pasku narzędzi; zarządzaj listą w [Modelach](#models).

**Wygląd** — Motyw; **Pokaż informacje o kosztach na akcjach**; **Liczba cyfr ułamkowych kosztu**; margines wokół aplikacji w wersji internetowej; **Rodzina czcionek** i **Rozmiar**.

**Zachowanie** — **Zachowanie dla ENTER**; **Automatyczne wykonywanie po wklejeniu**; **Automatyczne kopiowanie wyniku do schowka**; **Tłumaczenie w czasie rzeczywistym podczas pisania**; **Limit czasu (ms)**.

**Historia**

- **Zachowaj historię wykonania** — przechowuj dane wejściowe/wyjściowe dla widoku [Historia](/docs/history/). Wyłączenie wymaga potwierdzenia i może usunąć przechowywany tekst. Jeśli jest oznaczone jako *wyłączone przez administratora*, ustawione jest `HISTORY_DISABLED` — zobacz [Konfiguracja](/docs/configuration/#privacy-mode).
- **Usuń dane historii** — usuń przechowywany tekst według wieku lub wyczyść wszystko. **Nie** usuwa sum kosztów (do tego służy Śledzenie kosztów).

**Kopia zapasowa konfiguracji** (administratorzy komputerów stacjonarnych i sieci web)

- Opcjonalnie **Dołącz dane użycia do kopii zapasowej**
- **Konfiguracja kopii zapasowej** — ZIP z konfiguracją, stanem, użytkownikami, preferencjami, monitami i opcjonalnymi danymi użycia
- **Przywróć z kopii zapasowej** — okno dialogowe potwierdzenia z opcjami przywracania i/lub czyszczenia danych użycia

Kopie zapasowe mogą być przenoszone między komputerami stacjonarnymi a siecią; przywrócenie kopii zapasowej komputera stacjonarnego w sieci stosuje dane do użytkownika administratora.

## Modele

Dostępne tylko w trybie **Zaawansowanym**.

![Karta Ustawienia Modele](/images/screenshots/pl/settings-general.png)

- **Dostępne modele** (po lewej) i **Wybrane modele** (po prawej)
- Wyszukiwanie, etykiety **Dostawca**, **Tylko darmowe**, **Odśwież**, Rozwiń/Zwiń wszystko
- Identyfikatory modeli używają prefiksu dostawcy (`openrouter/…`, `openai/…`, `local/…`, …)

:::caution
Nie używaj OpenRouter **Body Builder** (`openrouter/bodybuilder`) do tłumaczenia, przepisywania ani transformacji — zwraca on ładunki żądań JSON, a nie gotowy tekst.
:::

Dodaj za pomocą **Dodaj**; usuń za pomocą **X**. **Odznacz wszystko** zachowuje wymagany darmowy model.

## Języki

- **Najpopularniejsze języki** — przypięte blisko góry list języków w Tłumaczeniu i Transformacji
- **Język niestandardowy** — dodaj język brakujący na wbudowanej liście

## Śledzenie kosztów

- **Całkowity koszt**, **Kopiuj wartość**, **Resetuj koszt**
- **Synchronizuj z użyciem klucza API** — dopasuj do użycia konta OpenRouter (tylko OpenRouter)
- **Użycie klucza API** — szczegóły OpenRouter, gdy są dostępne
- **Usuń dane kosztów** — wszystkie dane lub wpisy starsze niż data

OpenRouter pokazuje rzeczywisty naliczony koszt, gdy ma to zastosowanie; inni dostawcy używają szacunków z cennika OpenRouter. Szacunki nie są fakturami.

:::caution
Usunięcie danych kosztów jest nieodwracalne. Najpierw wyeksportuj dane za pośrednictwem Historii lub Pulpitu nawigacyjnego → Wszystkie połączenia, jeśli potrzebujesz kopii zapasowej. Powiązana historia danych wejściowych/wyjściowych dla tych wywołań API również zostanie usunięta.
:::

## Transformuj

Zbiorcze zarządzanie monitami: przeglądanie, usuwanie, importowanie, eksportowanie i ładowanie przykładowych monitów.

## Słownik

Zarządzaj parami terminów stosowanymi podczas [tłumaczenia](/docs/translate/#use-the-glossary). Każdy termin ma język źródłowy/docelowy oraz tekst źródłowy/docelowy.

- Dodaj za pomocą dolnego wiersza i **+**
- Filtruj według języków lub tekstu
- Importuj/eksportuj CSV lub XLSX; pobierz puste szablony

Wersja desktopowa przechowuje słownik lokalnie; wersja webowa przechowuje go dla każdego użytkownika.

## Użytkownicy

Tylko wersja webowa (administratorzy): dodawaj użytkowników, aktualizuj dane, resetuj hasła, usuwaj konta.

## Konfiguracja API

Skonfiguruj tylko tych dostawców, których używasz: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Lokalny LLM** (podstawowy URL dla Ollama, LM Studio, llama.cpp lub podobnych) oraz opcjonalny niestandardowy dostawca zgodny z OpenAI.

**Wersja webowa (administrator):** klucze pochodzą ze zmiennych środowiskowych — ta strona pokazuje, które są ustawione i pozwala na **Testowanie**. Uruchom ponownie po zmianie zmiennych środowiskowych. Zobacz [Konfiguracja](/docs/configuration/).

**Komputer stacjonarny:** wprowadź klucze (lub URL lokalnego LLM) i **Zapisz** / **Edytuj** / **Testuj**. Klucze są przechowywane w postaci zaszyfrowanej; nie możesz wyświetlić bieżącej wartości, możesz ją tylko zastąpić.

:::tip
Nie potrzebujesz płatnego klucza, aby zacząć: użyj darmowych modeli OpenRouter, innych darmowych dostawców lub lokalnego serwera zgodnego z OpenAI, takiego jak [Ollama](https://ollama.com), LM Studio lub llama.cpp (np. `translategemma:4b`).
:::

## Informacje

Nazwa aplikacji, wersja, data kompilacji, licencja, informacje o stronach trzecich i link do repozytorium.
