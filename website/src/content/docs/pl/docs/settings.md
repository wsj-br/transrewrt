---
title: Ustawienia
description: >-
  Kompaktowe odniesienie do ustawień ogólnych, modeli, języków, słownika,
  kosztów, transformacji, użytkowników, API i informacji „O programie”.
---



Otwórz **Ustawienia** z paska bocznego, aby dostosować zachowanie aplikacji.

| Zakładka | Komputer | Sieć (administrator) | Sieć (użytkownik) | Uwagi |
| --- | :---: | :---: | :---: | --- |
| Ustawienia ogólne | tak | tak | tak | Zawiera **Doświadczenie AI** (Łatwe / Zaawansowane) |
| Modele | tak | tak | tak | Tylko gdy **Doświadczenie AI** jest **Zaawansowane** |
| Języki | tak | tak | tak | |
| Śledzenie kosztów | tak | tak | — | |
| Transformacja | tak | tak | tak | Masowy import/eksport podpowiedzi |
| Słownik | tak | tak | tak | Pary terminów do tłumaczenia |
| Użytkownicy | — | tak | — | |
| Konfiguracja API | tak | tak | — | |
| O programie | tak | tak | tak | |

W trybie **Łatwym** wybierz AI za pomocą ustawień wstępnych na pasku narzędzi i **Dostawcę** w Ustawieniach ogólnych; zakładka **Modele** jest ukryta.

:::note
W wersji internetowej każdy użytkownik ma własną konfigurację (doświadczenie AI, dostawca, modele/ustawienia wstępne, języki, opcje, podpowiedzi). Zmiany nie wpływają na innych użytkowników.
:::

## Ustawienia ogólne

![Zakładka Ustawienia ogólne](/images/screenshots/pl/settings-general.png)

**Doświadczenie AI**

- **Łatwe** (domyślne): wybierz **Dostawcę**. Dostawcy chmurowi używają ustawień wstępnych paska narzędzi. **Lokalny LLM** zamiast tego wyświetla listę zainstalowanych modeli lokalnych. **Odśwież katalog ustawień wstępnych** pobiera najnowszą listę ustawień wstępnych z repozytorium projektu.
  - **Darmowe (OpenRouter)** — opcja bezpłatna, kierowana do dostępnych darmowych modeli; jakość i dostępność mogą się różnić
  - **Standardowe** — lekkie i ekonomiczne; najlepsze do krótkich tekstów, szybkich szkiców i intensywnego użytkowania
  - **Zaawansowane** — model o wysokiej dokładności do złożonych lub niuansowych treści, za wyższą cenę
  - **Techniczne** — dostosowane do kodu, API, dokumentacji deweloperskiej i treści strukturalnych; zachowuje formatowanie i terminologię
- **Zaawansowane**: wybierz modele na pasku narzędzi; zarządzaj listą w [Modelach](#models).

Możesz również przełączać tryb Łatwy ↔ Zaawansowany z menu ustawień wstępnych/modeli na pasku narzędzi (**Przełącz na tryb Łatwy/Zaawansowany**, powyżej Otwórz Ustawienia).

**Wygląd** — Motyw; **Pokaż informacje o kosztach w działaniach**; **Liczba cyfr po przecinku dla kosztów**; margines wokół aplikacji tylko w wersji webowej; **Rodzina czcionek** i **Rozmiar**.

**Zachowanie** — **Zachowanie dla klawisza ENTER**; **Automatyczne wykonanie po wklejeniu**; **Automatyczne kopiowanie wyniku do schowka**; **Tłumaczenie w czasie rzeczywistym podczas pisania**; **Limit czasu (ms)**.

**Historia**

- **Zachowaj historię wykonania** — przechowuj dane wejściowe/wyjściowe dla widoku [Historia](/docs/history/). Wyłączenie wymaga potwierdzenia i może usunąć przechowywany tekst. Jeśli jest oznaczone jako *wyłączone przez administratora*, ustawione jest `HISTORY_DISABLED` — zobacz [Konfiguracja](/docs/configuration/#privacy-mode).
- **Usuń dane historii** — usuń przechowywany tekst według wieku lub wyczyść wszystko. **Nie** usuwa sum kosztów (do tego służy Śledzenie kosztów).

**Kopia zapasowa konfiguracji** (administratorzy desktopowi i webowi)

- Opcjonalnie **Dołącz dane użycia do kopii zapasowej**
- **Kopia zapasowa konfiguracji** — ZIP z konfiguracją, stanem, użytkownikami, preferencjami, promptami i opcjonalnymi danymi użycia
- **Przywróć z kopii zapasowej** — okno dialogowe potwierdzenia z opcjami przywracania i/lub czyszczenia danych użycia

Kopie zapasowe mogą być przenoszone między wersją desktopową a webową; przywracanie kopii zapasowej z wersji desktopowej w wersji webowej stosuje dane do użytkownika administratora.

## Modele

Dostępne tylko w trybie **Zaawansowanym**.

- **Dostępne modele** (lewa strona) i **Wybrane modele** (prawa strona)
- Wyszukiwanie, etykiety **Dostawca**, **Tylko darmowe**, **Odśwież**, Rozwiń/Zwiń wszystko
- Identyfikatory modeli używają prefiksu dostawcy (`openrouter/…`, `openai/…`, `local/…`, …)

:::tip
Nie używaj OpenRouter **Body Builder** (`openrouter/bodybuilder`) do tłumaczenia, przepisywania ani transformacji — zwraca on ładunki żądań JSON, a nie gotowy tekst.
:::

Dodaj za pomocą **Dodaj**; usuń za pomocą **X**. Darmowy model OpenRouter jest opcjonalny — wybrane modele mogą być puste. Usunięcie ostatniego modelu z paska narzędzi otwiera **Ustawienia → Modele**. Jeśli bieżący model stanie się niedostępny, aplikacja wybierze następny model z listy zamiast wymuszać darmowy model.

## Języki

- **Najpopularniejsze języki** — przypięte blisko góry list języków w Tłumaczeniu i Transformacji
- **Język niestandardowy** — dodaj język brakujący na wbudowanej liście

## Śledzenie kosztów

- **Całkowity koszt**, **Kopiuj wartość**, **Resetuj koszt**
- **Synchronizuj z użyciem klucza API** — dopasuj do użycia konta OpenRouter (tylko OpenRouter)
- **Użycie klucza API** — szczegóły OpenRouter, gdy dostępne
- **Usuń dane kosztów** — wszystkie dane lub wpisy starsze niż określona data

OpenRouter pokazuje rzeczywisty naliczony koszt, gdy ma to zastosowanie; inni dostawcy używają szacunków z cennika OpenRouter. Szacunki nie są fakturami.

:::caution
Usunięcia danych kosztów nie można cofnąć. Najpierw wyeksportuj dane za pośrednictwem Historii lub Pulpitu → Wszystkie połączenia, jeśli potrzebujesz kopii zapasowej. Powiązana historia wejść/wyjść dla tych wywołań API również zostanie usunięta.
:::

## Transformacja

Zbiorcze zarządzanie promptami: przeglądanie, usuwanie, importowanie, eksportowanie i ładowanie przykładowych promptów.

## Słownik

Zarządzaj parami terminów stosowanymi podczas [tłumaczenia](/docs/translate/#use-the-glossary). Każdy termin ma język źródłowy/docelowy oraz tekst źródłowy/docelowy.

- Dodaj za pomocą dolnego wiersza i **+**
- Filtruj według języków lub tekstu
- Importuj/eksportuj CSV lub XLSX; pobierz puste szablony

Wersja desktopowa przechowuje słownik lokalnie; wersja webowa przechowuje go dla każdego użytkownika.

## Użytkownicy

Tylko wersja webowa (administratorzy):

- Dodawaj użytkowników, aktualizuj dane, resetuj hasła, usuwaj konta
- **Limit czasu sesji** — jak długo trwa logowanie (od 1 godziny do 7 dni); zmiany dotyczą tylko nowych logowań
- **Unieważnij sesje** — natychmiast wyloguj użytkownika ze wszystkich urządzeń

Każdy zalogowany użytkownik (w tym nie-administratorzy) może zmienić swoje hasło lub wylogować się z menu użytkownika na dole paska bocznego.

## Konfiguracja API

Skonfiguruj tylko używanych dostawców: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Lokalny LLM** (podstawowy URL dla Ollama, LM Studio, llama.cpp lub podobnych) oraz opcjonalnego niestandardowego dostawcę kompatybilnego z OpenAI.

**Wersja webowa (administrator):** klucze pochodzą ze zmiennych środowiskowych — ta strona pokazuje, które są ustawione i pozwala na **Testowanie**. Uruchom ponownie po zmianie zmiennych środowiskowych. Zobacz [Konfiguracja](/docs/configuration/).

**Wersja desktopowa:** wprowadź klucze (lub URL lokalnego LLM) i **Zapisz** / **Edytuj** / **Testuj**. Klucze są przechowywane zaszyfrowane; nie możesz wyświetlić bieżącej wartości, możesz ją tylko zastąpić.

:::tip
Do rozpoczęcia nie jest potrzebny płatny klucz: użyj darmowych modeli OpenRouter, innych dostawców z darmową warstwą lub lokalnego serwera kompatybilnego z OpenAI, takiego jak [Ollama](https://ollama.com), LM Studio lub llama.cpp (np. `translategemma:4b`).
:::

## Informacje

Nazwa aplikacji, wersja, data kompilacji, licencja, informacje o stronach trzecich i link do repozytorium.
