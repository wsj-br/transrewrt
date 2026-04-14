---
translation_last_updated: '2026-03-31T22:57:41.016Z'
source_file_mtime: '2026-03-30T09:57:25.622Z'
source_file_hash: e1b91eca0124d467
translation_language: pl
source_file_path: USER-GUIDE.md
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Przewodnik użytkownika

<br/>

<a id="introduction"></a>
## Wprowadzenie

Transrewrt pomaga w pracy z tekstem na trzy główne sposoby:

- **Przetłumacz** – przekonwertuj tekst z jednego języka na inny.
- **Przeformułowanie** – przeformułuj tekst w inny sposób, np. jaśniej, krócej lub bardziej formalnie.
- **Transformacja** – przetwarzaj tekst za pomocą niestandardowych instrukcji AI zwanych promptami.

<br/>

Ten przewodnik wyjaśnia, jak korzystać z aplikacji po jej zainstalowaniu i uruchomieniu. Aby uzyskać instrukcje instalacji, zobacz główny plik **[README](README.pl.md)**.

<br/>

> ℹ️ **UWAGA**<br/>
> Transrewrt jest dostępny jako aplikacja desktopowa dla systemów Windows i Linux oraz jako samodzielnie hostowana aplikacja internetowa. Ten przewodnik koncentruje się na codziennym użytkowaniu aplikacji. Gdy dana funkcja dotyczy tylko jednej wersji, jest to wyraźnie zaznaczone.

<small>**Przeczytaj w innych językach:** </small>
<small id="lang-list">[English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small></small>

> **Uwaga dotycząca tłumaczeń interfejsu i dokumentacji:** Wszystkie języki interfejsu oprócz oryginalnego angielskiego (Wielka Brytania) zostały przetłumaczone przy użyciu modeli AI; sformułowania mogą być niedokładne lub zawierać błędy.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Spis treści**

- [Przed rozpoczęciem](#before-you-start)
  - [Jak uzyskać bezpłatny klucz API OpenRouter (aplikacja desktopowa)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Rozpoczęcie pracy](#getting-started)
- [Główne elementy okna](#main-parts-of-the-window)
  - [Pasek boczny](#sidebar)
  - [Pasek narzędzi](#toolbar)
  - [Panele wejściowy i wyjściowy](#input-and-output-panels)
- [Tłumaczenie](#translate)
  - [Przetłumacz tekst](#translate-text)
  - [Wybór języka](#language-selection)
  - [Przydatne ustawienia tłumaczenia](#helpful-translation-settings)
- [Przeformułowanie](#rewrite)
- [Transformacja](#transform)
  - [Uruchom istniejący prompt](#run-an-existing-prompt)
  - [Jeśli nie masz jeszcze żadnych promptów](#if-you-have-no-prompts-yet)
  - [Szybkie utworzenie promptu](#create-a-prompt-quickly)
  - [Edytuj prompt](#edit-a-prompt)
  - [Przetestuj prompt przed użyciem](#test-a-prompt-before-using-it)
- [Panel](#dashboard)
  - [Filtruj dane](#filter-the-data)
  - [Karty panelu](#dashboard-tabs)
  - [Eksportuj dane](#export-data)
  - [Usuń zapisane rekordy dla modelu](#delete-stored-records-for-a-model)
- [Historia](#history)
  - [Filtruj dane](#filter-the-data-1)
  - [Eksportuj dane historii](#export-history-data)
- [Ustawienia](#settings)
  - [Ustawienia ogólne](#general-settings)
  - [Modele](#models)
  - [Języki](#languages)
  - [Śledzenie kosztów](#cost-tracking)
  - [Prompty transformacji](#transform-prompts)
  - [Użytkownicy](#users)
  - [Konfiguracja API](#api-config)
  - [O programie](#about)
- [Częste problemy](#common-issues)
  - [Aplikacja nie tłumaczy, nie przeformułowuje ani nie przekształca tekstu](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Lista modeli jest pusta](#the-model-list-is-empty)
  - [Wynik jest zbyt powolny lub zbyt kosztowny](#the-result-is-too-slow-or-too-expensive)
  - [Interfejs jest w niewłaściwym języku](#the-interface-is-in-the-wrong-language)
  - [Tekst jest zbyt mały lub trudny do odczytania](#the-text-is-too-small-or-hard-to-read)
  - [Wykresy na panelu są puste](#dashboard-charts-are-empty)
  - [Koszt pokazuje „nie dostępny” lub wydaje się błędny](#cost-shows-not-available-or-seems-wrong)
  - [Całkowity koszt nie zgadza się z rachunkiem dostawcy](#total-cost-does-not-match-my-provider-bill)
  - [Strona Historia brakuje na pasku bocznym](#the-history-page-is-missing-from-the-sidebar)
  - [Aplikacja internetowa: niespodziewane przekierowanie do strony logowania](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Administrator aplikacji internetowej: zapomniałem lub zgubiłem hasło](#web-admin-forgot-or-lost-a-password)
  - [Panel nie pokazuje danych innych użytkowników (wersja internetowa)](#dashboard-shows-no-data-for-other-users-web)
  - [Zmieniłem prompt i straciłem edycje](#i-changed-a-prompt-and-lost-the-edits)
- [Szybkie wskazówki](#quick-tips)
- [Zrzeczenie odpowiedzialności](#disclaimer)
- [Licencja](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Zanim zaczniesz

Aby korzystać z Transrewrt, musisz mieć dostęp do co najmniej jednego dostawcy AI. Obsługiwani dostawcy to: [OpenRouter](https://openrouter.ai) (agregujący wiele modeli), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras oraz [Ollama](https://ollama.com) dla modeli lokalnych.

Nie musisz wybierać płatnego modelu, aby rozpocząć. Gdy tylko dodasz swój klucz API OpenRouter, aplikacja automatycznie aktywuje wbudowaną **bezpłatną** opcję OpenRouter. Dzięki temu możesz od razu rozpocząć tłumaczenie, przeformułowywanie i transformację tekstu. Alternatywnie możesz również uzyskać bezpłatny klucz API od Cerebras, Google, Groq lub Mistral AI.

Prościej mówiąc:

- **Model** to silnik AI, który wykonuje pracę. Modele są wymieniane z **przedrostkiem dostawcy** (na przykład `openrouter/…`, `openai/…`, `ollama/…`).
- **Klucz API** (lub w przypadku Ollama – **podstawowy adres URL**) umożliwia aplikacji połączenie się z danym dostawcą.

Jeśli korzystasz z **aplikacji komputerowej**, dodaj klucze w sekcji [**Ustawienia** > **Konfiguracja API**](#api-config) dla każdego dostawcy, którego używasz. W przypadku korzystania wyłącznie z OpenRouter, zobacz poniżej sekcję [Jak uzyskać klucz API](#how-to-get-an-api-key-desktop-app). Jeśli nie chcesz używać klucza API, możesz zainstalować Ollama (ze strony [ollama.com](https://ollama.com)) i korzystać z modeli lokalnych, takich jak `translategemma:4b`.

Jeśli korzystasz z **wersji internetowej**, właściciel serwera konfiguruje dostawców za pomocą zmiennych środowiskowych, więc nie możesz bezpośrednio wprowadzić kluczy API w aplikacji.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Jak uzyskać bezpłatny klucz API OpenRouter (aplikacja komputerowa)

Jeśli korzystasz z aplikacji komputerowej, wykonaj następujące kroki:

1. Przejdź do [OpenRouter](https://openrouter.ai) w przeglądarce internetowej.
2. Utwórz konto lub zaloguj się.
3. Otwórz stronę [Keys](https://openrouter.ai/keys).
4. Kliknij przycisk, aby utworzyć nowy klucz API.
5. Nadaj kluczowi nazwę, dzięki której będziesz mógł go później rozpoznać.
6. Skopiuj nowy klucz API.
7. Wróć do Transrewrt i otwórz **Ustawienia** > **Konfiguracja API**.
8. Wklej klucz do pola **OpenRouter API key** (w sekcji **Ustawienia** > **Konfiguracja API**).
9. Kliknij **Test OpenRouter key**, aby upewnić się, że działa poprawnie.

<br/><br/>

<a id="getting-started"></a>
## Pierwsze kroki

Jeśli po raz pierwszy korzystasz z Transrewrt, postępuj zgodnie z poniższą kolejnością:

1. Otwórz aplikację.
2. W razie potrzeby wybierz **Język interfejsu** z ikony globusa.
3. Jeśli korzystasz z **aplikacji komputerowej**, otwórz [**Ustawienia** > **Konfiguracja API**](#api-config), dodaj klucz API dla co najmniej jednego dostawcy (na przykład OpenRouter) i kliknij **Test**, aby zweryfikować jego działanie.
4. Otwórz [**Ustawienia** > **Modele**](#models) i dodaj jeden lub więcej modeli do sekcji **Wybrane modele**.
5. Otwórz [**Ustawienia** > **Języki**](#languages) i wybierz **Najważniejsze języki**, jeśli chcesz, by najczęściej używane języki pojawiały się na górze.
6. Przejdź do **Tłumaczenie** i wykonaj proste tłumaczenie, aby potwierdzić, że wszystko działa.
7. Gdy to zadziała, wypróbuj **Przeformułowanie**, a następnie **Transformację**.

Kolejność ma znaczenie. Zapobiega to najczęstszemu problemowi przy pierwszym użyciu: próbie uruchomienia zadania przed nawiązaniem działającego połączenia API lub wybraniem modelu.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Główne części okna

Aplikacja składa się z trzech głównych obszarów:

- **Pasek boczny** po lewej stronie.
- **Pasek narzędzi** u góry.
- **Obszar roboczy** w środku.

<br/>

<a id="sidebar"></a>
### Pasek boczny

Użyj paska bocznego, aby poruszać się po aplikacji. Możesz zwinąć pasek boczny, klikając ikonę obok logo aplikacji, aby uzyskać więcej miejsca.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/pl/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Tłumaczenie</strong> otwiera obszar roboczy do tłumaczenia.</li><br/>
        <li><strong>Przeformułowanie</strong> otwiera obszar roboczy do przeformułowania.</li><br/>
        <li><strong>Transformacja</strong> otwiera obszar roboczy z niestandardowym promptem.</li><br/>
        <li><strong>Panel główny</strong> pokazuje informacje o zużyciu i kosztach.</li><br/>
        <li><strong>Ustawienia</strong> otwiera panel ustawień.</li><br/>
        <li><strong>Historia</strong> pokazuje historię użycia wraz z tekstem wejściowym i wynikowym</li><br/>
        <li><strong>Użytkownik</strong> pokazuje nazwę zalogowanego użytkownika (tylko w wersji internetowej).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Pasek narzędzi

Pasek narzędzi nieznacznie zmienia się w zależności od tego, gdzie znajdujesz się w aplikacji.

- Po lewej stronie wyświetla się nazwa bieżącej strony.
- Po prawej stronie znajdują się **selektor modelu** oraz kontrolka **Język interfejsu**.

**Selektor modelu** pozwala wybrać silnik AI, który ma zostać użyty do bieżącego zadania.

![Model selector](../images/screenshots/pl/model-selector.png)

Niektóre modele bezpłatne mogą nie być zawsze dostępne - czasem są wyłączone lub mają ograniczenie użycia. W takim przypadku aplikacja automatycznie usunie ten model z listy dostępnych. Aby kontrolować, które modele się pojawiają, przejdź do [**Ustawienia** > **Modele**](#models) i edytuj swoją listę modeli.
Możesz również otworzyć ustawienia modelu bezpośrednio, klikając ikonę dostawcy po lewej stronie nazwy modelu na pasku narzędzi.

<br/>

**Ikona globusa + kod języka** zmienia język interfejsu aplikacji, np. menu i przyciski. **Nie** zmienia to języków tłumaczenia używanych w zakładce **Przetłumacz**.

![Interface language selector](../images/screenshots/pl/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panele wejścia i wyjścia

Większość obszarów roboczych używa lewego panelu **Wejście** i prawego panelu **Wynik**.

Każdy panel wyświetla również:

| **Wejście**                                                          | **Wynik**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Liczbę znaków <br/>- Liczbę słów <br/>- Liczbę akapitów   <br/> | - Czas trwania zadania<br/>- **TPS** (tokeny na sekundę)<br/>- Liczbę znaków, słów i akapitów<br/>- Użyty model |

Jeśli zastanawiasz się nad terminologią techniczną:

- **Token** oznacza mały fragment tekstu. Można o nim myśleć jako o części słowa lub krótkim słowie.
- **TPS** oznacza, ile takich fragmentów tekstu model przetwarzał na sekundę.

<br/>

Możesz również monitorować koszt każdej operacji (jeśli dostępny) oraz koszt całkowity, włączając opcję `Pokaż informacje o koszcie operacji` w [**Ustawienia** > **Ustawienia ogólne**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Przetłumacz

Użyj opcji **Przetłumacz**, gdy chcesz przetłumaczyć tekst z jednego języka na inny.

![Translate workspace](../images/screenshots/pl/translate.png)

<br/>

<a id="translate-text"></a>
### Tłumaczenie tekstu

1. Otwórz **Przetłumacz**.
2. Wybierz język w polu **Z**.
3. Wybierz język w polu **Na**.
4. Wybierz model na pasku narzędzi.
5. Wpisz lub wklej tekst w polu **Wejście**.
6. Kliknij **Przetłumacz**.
7. Przeczytaj wynik w polu **Wynik**.
8. Skorzystaj z przycisku kopiowania, jeśli chcesz skopiować wynik.

<br/>

<a id="language-selection"></a>
### Wybór języka

- **Z** może być konkretnym językiem lub opcją **Wykryj język**.
- **Na** to język, na który chcesz przetłumaczyć tekst.

Twoje wybrane **Najważniejsze języki** pojawiają się na górze listy. Możesz je ustawić w [**Ustawienia** > **Języki**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Przydatne ustawienia tłumaczenia

W [**Ustawieniach** > **Ustawienia ogólne**](#general-settings) możesz zmienić sposób działania tłumaczenia:

- **Automatyczne tłumaczenie po wklejeniu** uruchamia tłumaczenie zaraz po wklejeniu tekstu.
- **Automatyczne kopiowanie wyniku do schowka** automatycznie kopiuje wynik po pomyślnym wykonaniu.
- **Tłumaczenie w czasie rzeczywistym (podczas pisania)** uruchamia tłumaczenia podczas pisania.
- **Limit czasu (ms)** kontroluje, jak długo aplikacja czeka przed uruchomieniem tłumaczenia w czasie rzeczywistym.
- **Enter** określa, co dzieje się po naciśnięciu `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Przeformułowanie

Użyj opcji **Przeformułowanie**, gdy chcesz poprawić sformułowanie bez zmiany głównej treści.

![Rewrite workspace](../images/screenshots/pl/rewrite.png)

To przydatne do:

- poprawiania pisowni i gramatyki (**Sprawdź pisownię i gramatykę**)
- poprawiania jasności tekstu (**Popraw jasność**)
- uzyskiwania kilku różnych wersji przeformułowania w jednym przebiegu (**Wersje alternatywne**)
- nadawania tekstowi charakteru bardziej formalnego lub mniej formalnego (**Formalny** / **Nieformalny**)
- skracania lub rozszerzania tekstu (**Skróć** / **Rozwiń**)
- nadawania tekstowi charakteru bardziej technicznego (**Zmień na techniczny**)

<br/>

> 💡 **PORADA**<br/>
> Gdy używasz trybu „**Sprawdź pisownię i gramatykę**”, w panelu wyników (obok przycisku **Kopiuj**) pojawia się przełącznik **Pokaż zmiany**.
> Włącz lub wyłącz go, aby pokazać lub ukryć konkretne poprawki wprowadzone w tekście.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Transformacja

Użyj opcji **Transformacja**, gdy chcesz, by AI wykonała zadanie zgodnie z niestandardowym zestawem instrukcji.

![Transform workspace](../images/screenshots/pl/transform.png)

To najbardziej elastyczna część aplikacji. Możesz jej użyć do zadań takich jak:

- podsumowywanie notatek
- zamiana surowego tekstu na dopracowaną wiadomość e-mail
- wyciąganie kluczowych punktów
- konwertowanie tekstu do określonego formatu
- dowolne inne niestandardowe działania na tekście wejściowym

<br/>

<a id="run-an-existing-prompt"></a>
### Uruchom istniejący prompt

1. Otwórz **Transformację**.
2. Wybierz prompt z listy promptów.
3. Jeśli pojawi się pole **Cel**, wybierz język, jeśli chcesz.
4. Wpisz lub wklej tekst do pola **Wejście**.
5. Kliknij **Transformuj**.
6. Przeczytaj wynik w polu **Wynik**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Jeśli nie masz jeszcze żadnych promptów

Jeśli lista promptów jest pusta, kliknij przycisk **Załaduj przykładowe prompty** w obszarze pracy Transformacji. Ta sama opcja jest zawsze dostępna w [**Ustawieniach** > **Prompty transformacji**](#transform-prompts) w wierszu eksportu/importu. Oba sposoby dodają wbudowane przykłady, dzięki czemu możesz szybko rozpocząć pracę.

<br/>

> ℹ️ **UWAGA**<br/>
> Przykładowe prompty są dostępne w języku angielskim. Po ich załadowaniu możesz edytować prompt i użyć opcji **Przetłumacz zachętę**, aby przetłumaczyć go na twój język.

<br/>

<a id="create-a-prompt-quickly"></a>
### Szybkie utworzenie promptu

Najszybszy sposób na utworzenie promptu to:

1. Kliknij **Nowy prompt**.
2. Kliknij **Wygeneruj zachętę**.
3. Opisz, co ma robić prompt.
4. Wybierz model.
5. Pozwól aplikacji utworzyć wersję roboczą.
6. Przejrzyj wersję roboczą i kliknij **Zapisz**.

![Generate prompt](../images/screenshots/pl/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Edytuj prompt

Po utworzeniu lub edycji promptu edytor pojawia się po lewej stronie, a po prawej pojawia się obszar testowy.

![Transform prompt editor](../images/screenshots/pl/transform-prompt-edit.png)

Główne pola to:

- **Nazwa promptu**: nazwa wyświetlana na liście promptów.
- **Instrukcje promptu (opcjonalne)**: krótki komunikat wyświetlany użytkownikowi podczas uruchamiania promptu.
- **Rola modelu**: ogólna rola przypisana AI, np. „Jesteś pomocnym asystentem”.
- **Instrukcje modelu (jedna na linię)**: konkretne zasady, których ma przestrzegać AI.
- **Opis wyniku**: krótkie słowo opisujące wynik, np. „podsumowanie” lub „przeformułowanie”.
- **Temperatura (0,0 → 1,0)**: sposób działania modelu; zobacz poniżej.
- **Pytaj o język docelowy**: dodaje selektor języka docelowego podczas uruchamiania promptu.

Jeśli termin techniczny **Temperatura** jest dla Ciebie nowy, pomyśl o tym w ten sposób:

- **Niższa** temperatura daje bardziej stabilne i przewidywalne wyniki.
- **Wyższa** temperatura daje większą różnorodność i kreatywność.

Możesz również użyć:

- **`Wygeneruj prompt`**, aby utworzyć nowy szkic na podstawie prostego opisu
- **`Ulepsz prompt`**, aby dopracować istniejący prompt
- **`Przetłumacz prompt`**, aby przetłumaczyć pola promptu

<br/>

> ⚠️ **OSTRZEŻENIE**<br/>
> Kliknij **`Zapisz`**, zanim klikniesz **`Wróć do uruchomienia`**. Jeśli wrócisz bez zapisywania, zmiany zostaną utracone.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Przetestuj prompt przed użyciem

Panel testowy po prawej stronie pozwala wypróbować prompt z przykładowym tekstem przed jego użyciem w codziennej pracy.

To przydatne, gdy:

- tworzysz nowy prompt
- porównujesz dwie wersje promptu
- chcesz sprawdzić ton, długość lub format wyniku

<br/>

> ℹ️ **UWAGA**<br/>
> Możesz eksportować i importować zapisane prompty w sekcji [**Ustawienia** > **Prompty transformacji**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Panel

Użyj **Panelu**, aby zobaczyć, jak intensywnie korzystasz z aplikacji i jakie są jej koszty (dla modeli płatnych).

![Dashboard summary](../images/screenshots/pl/dashboard-summary.png)

<br/>

> ℹ️ **UWAGA**<br/>
> Jeśli używasz wyłącznie **bezpłatnych** modeli, kwoty **kosztów** mogą być zerowe, a podsumowania skupione na kosztach mogą wyglądać pusto. Na karcie **Podsumowanie**, **Wykorzystanie w czasie** i **Wykorzystanie według modelu** nadal pokazują **liczbę wywołań** (przetłumacz, przeformułuj, transformuj), jeśli miało miejsce działanie w wybranym okresie.

<br/>

<a id="filter-the-data"></a>
### Filtruj dane

Użyj przycisków filtrów u góry, aby zmienić zakres czasu.

![Dashboard filters](../images/screenshots/pl/dashboard-filter.png)

<br/>

> ℹ️ **UWAGA**<br/>
> Filtr **Użytkownik** jest widoczny tylko administratorom w wersji internetowej. Zwykli użytkownicy nie widzą tego filtra, a w aplikacji komputerowej nie jest on dostępny.

<br/>

<a id="dashboard-tabs"></a>
### Karty panelu

- **Podsumowanie** pokazuje przegląd wykorzystania i kosztów. Zawiera sekcję **Wykorzystanie w czasie** (stosowane skumulowane **liczby wywołań** według dnia dla tłumaczenia, przepisywania i transformacji) oraz **Wykorzystanie według modelu** (łącznie **wywołania na model**, w tym transformacja).
- **Wg użycia** dzieli aktywność według języka tłumaczenia, trybu przepisywania i promptu transformacji.
- **Wg modelu** pokazuje, których modeli użyto i ile one kosztowały.
- **Wg dnia** pokazuje dzienne sumy.
- **Wszystkie wywołania** pokazuje pełną historię wywołań i pozwala ją wyeksportować.

<br/>

<a id="export-data"></a>
### Eksport danych

Tabele na panelu mogą eksportować dane w formatach:

- **JSON**
- **CSV**
- **XLSX**

Jest to przydatne, jeśli chcesz przeanalizować aktywność poza aplikacją lub udostępnić raport.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Usuwanie zapisanych rekordów dla modelu

W sekcjach **Wg modelu** lub **Wszystkie wywołania** możesz usunąć zapisane rekordy dla modelu, klikając ikonę „kosza”.

> ⚠️ **OSTRZEŻENIE**<br/>
> Usunięcie zapisanych rekordów jest nieodwracalne. Używaj tej opcji tylko wtedy, gdy jesteś pewien, że nie potrzebujesz już tej historii.

Aby usunąć wszystkie dane lub usunąć rekordy na podstawie ich wieku, przejdź do [**Ustawienia** > **Śledzenie kosztów**](#cost-tracking). Tam znajdziesz opcje usunięcia wszystkich zapisanych danych lub tylko danych starszych niż określona data.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Historia

Kliknij **Historia**, aby zobaczyć historię swoich działań w aplikacji **Transrewrt**, w tym wejście i wynik każdej operacji.

![History page](../images/screenshots/pl/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtruj dane

**Historia** używa tych samych filtrów co strona **Panel**. Użyj ich, aby wybrać zakres czasu.

![Dashboard filters](../images/screenshots/pl/dashboard-filter.png)

<br/>

> ℹ️ **UWAGA**<br/>
> Filtr **Użytkownik** jest widoczny tylko administratorom w wersji internetowej. Zwykli użytkownicy nie widzą tego filtra, a w aplikacji komputerowej nie jest on dostępny.

<br/>

<a id="export-history-data"></a>
### Eksport danych historii

Strona historii może eksportować przefiltrowane dane w formatach:

- **JSON**
- **CSV**
- **XLSX**

Jest to przydatne, jeśli chcesz przeanalizować aktywność poza aplikacją lub udostępnić raport.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Ustawienia

Otwórz **Ustawienia** z paska bocznego, aby dostosować sposób działania aplikacji.

Dostępne karty zależą od platformy i Twojej roli:

| Karta               | Komputer | Internet (administrator) | Internet (zwykły użytkownik) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Ustawienia ogólne  |   tak   |     tak     |        tak         |
  | Modele            |   tak   |     tak     |        tak         |
  | Języki         |   tak   |     tak     |        tak         |
  | Śledzenie kosztów     |   tak   |     tak     |         -          |
  | Prompty transformacji |   tak   |     tak     |        tak         |
  | Użytkownicy             |    -    |     tak     |         -          |
  | Konfiguracja API        |   tak   |     tak     |         -          |
  | O programie             |   tak   |     tak     |        tak         |

<br/>

> ℹ️ **UWAGA**<br/>
> W wersji internetowej każdy użytkownik ma własną konfigurację. Ustawienia takie jak wybrane modele, języki, opcje ogólne i prompty transformacji są przechowywane osobno dla każdego użytkownika. Wprowadzone przez Ciebie zmiany nie wpływają na innych użytkowników.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Ustawienia ogólne

Użyj **Ustawień ogólnych**, aby kontrolować zachowanie podczas pisania, czy szczegóły wykonywania są przechowywane w **Historii** oraz wygląd aplikacji.

**Zachowanie**

- **Zachowanie dla ENTER** określa, czy klawisz `Enter` uruchamia zadanie, czy wstawia nową linię.
- **Automatyczne tłumaczenie po wklejeniu** uruchamia tłumaczenie natychmiast po wklejeniu tekstu.
- **Automatyczne kopiowanie wyniku do schowka** automatycznie kopiuje pomyślne wyniki.
- **Tłumaczenie w czasie rzeczywistym (podczas pisania)** tłumaczy tekst podczas pisania.
- **Limit czasu (ms)** ustawia czas oczekiwania na tłumaczenie w czasie rzeczywistym.

**Historia**

- **Zachowaj historię wykonania** kontroluje, czy każde tłumaczenie, przeformułowanie i transformacja zapisują **tekst wejściowy i wyjściowy** do widoku [**Historia**](#history) w pasku bocznym. Wyłączenie tej opcji spowoduje wyświetlenie potwierdzenia; jeśli potwierdzisz, zapisany tekst historii zostanie usunięty z bazy danych.
- **Usuń dane historii** pozwala usunąć zapisane teksty według wieku (na przykład starsze niż kilka miesięcy lub **wszystkie dane (wyczyść)**) za pomocą przycisku **Usuń dane**. Dotyczy to wyłącznie zapisanego tekstu wykonania dla widoku **Historia**; **nie** powoduje usunięcia danych dotyczących kosztów lub łącznych danych użycia. Aby usunąć lub skrócić dane dotyczące **kosztu**, skorzystaj z [**Ustawienia** > **Śledzenie kosztów**](#cost-tracking).

**Wygląd**

- **Pokaż informacje o kosztach na akcjach** kontroluje wyświetlanie kosztu na operację (jeśli dostępne) oraz całkowitego kosztu na panelach wyników Tłumaczenia, Przeformułowania i Transformacji.
- **Liczba cyfr po przecinku w koszcie** zmienia sposób wyświetlania miejsc dziesiętnych kosztu.
- **Tylko internet:** **pokaż margines wokół aplikacji** dodaje dodatkową przestrzeń wokół interfejsu.
- **Rodzina czcionek** zmienia czcionkę w panelach tekstowych.
- **Rozmiar** zmienia rozmiar czcionki.

**Kopia zapasowa konfiguracji**

- **Uwzględnij dane dotyczące użycia w kopii zapasowej** - po włączeniu plik ZIP zawiera również historię wykonania i dane wywołań API.
- **Utwórz kopię zapasową konfiguracji** - tworzy pojedynczy plik ZIP (`transrewrt-config-backup-RRRR-MM-DD_GGMMSS.zip` domyślnie w czasie UTC) zawierający `config.json`, `state.json`, opcjonalny klucz szyfrowania, użytkowników, preferencje, niestandardowe prompty oraz dane użycia, jeśli zostały wybrane. Po pomyślnej kopii zapasowej potwierdzenie pokazuje nazwę zapisanego pliku.
- **Przywróć z kopii zapasowej** - najpierw otwiera **okno potwierdzenia**. Wybierz plik kopii zapasowej ZIP w oknie dialogowym (**Przeglądaj** / selektor plików lub przeciągnij i upuść, tam gdzie to możliwe), a następnie przejrzyj opcje:
  - **Przywróć dane dotyczące użycia** - importuje dane użycia/historii z pliku ZIP, jeśli zostały one uwzględnione podczas tworzenia kopii zapasowej; pozostaw wyłączone, jeśli chcesz tylko ustawienia i prompty.
  - **Wyczyść stare dane dotyczące użycia przed przywróceniem** - usuwa istniejące dane użycia/historię w tej instalacji przed zastosowaniem kopii zapasowej (opcjonalne; użyj, gdy chcesz wykonać czyste zastąpienie).

Kopie zapasowe utworzone w wersji internetowej lub komputerowej można przywrócić w drugiej wersji. Przy przywracaniu kopii zapasowej komputerowej w wersji internetowej dane zostaną przywrócone do użytkownika administratora.

<br/>

<a id="models"></a>
### Modele

Użyj **Ustawienia** > **Modele**, aby wybrać, które modele będą wyświetlane na pasku narzędzi.

![Settings Models tab](../images/screenshots/pl/settings-models.png)

Strona zawiera dwie listy:

- **Dostępne modele** po lewej stronie
- **Wybrane modele** po prawej stronie

Przydatne kontrolki obejmują:

- **Szukaj modeli...** aby znaleźć model po nazwie
- **Dostawca** - filtry do zawężenia listy do jednego silnika (OpenRouter, OpenAI, Ollama, …)
- **Tylko darmowe** aby wyświetlić tylko darmowe modele
- **Odśwież** aby ponownie załadować listę
- **Rozwiń wszystko** i **Zwiń wszystko** podczas sortowania według dostawcy

Identyfikatory modeli zawierają prefiks dostawcy (na przykład `openrouter/…` vs `openai/…`). Odznaki, takie jak **OpenAI (OpenRouter)** vs **OpenAI (bezpośredni)**, pokazują, jak kierowany jest ruch.

> ℹ️ **UWAGA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) to model routera, a nie ogólny model czatu: jego odpowiedź to JSON opisujący ciała żądań API OpenRouter (na przykład tablica `requests` z polami `model` i `messages`). Jeśli użyjesz go do **Przetłumacz**, **Przeformułowanie** lub **Transformacja**, panel wyników pokaże ten JSON zamiast gotowego tekstu. Wybierz normalny model tekstowy do tych zadań. Zobacz [stronę modelu Body Builder](https://openrouter.ai/openrouter/bodybuilder) na OpenRouter.

Działania:

- Aby dodać model, kliknij **Dodaj** lub w dowolne miejsce wpisu.

- Aby usunąć model, kliknij **X** obok niego w sekcji **Wybrane modele** lub **Zaznaczone** w wpisie Dostępne modele.

- Aby wyczyścić listę, kliknij **Odznacz wszystko**. Wymagany model darmowy pozostanie na liście.

<br/>

> ℹ️ **UWAGA**<br/>
> Jeśli nie chcesz od razu doładowywać środków na OpenRouter, zacznij od włączenia opcji **Tylko darmowe** i wybierz modele darmowe (nie wymagają karty kredytowej). Możesz również użyć Ollama, aby uruchamiać modele lokalnie bez klucza API.

<br/>

<a id="languages"></a>
### Języki

Użyj **Ustawienia** > **Języki**, aby zarządzać listami języków używanymi w aplikacji.

- **Najważniejsze języki** są przypięte u góry list języków w **Przetłumacz** i **Transformacja**.
- **Język niestandardowy** pozwala dodać język, którego nie ma na wbudowanej liście.

Jeśli dodasz język niestandardowy, pojawi się on w selektorach języków obok wbudowanych opcji.

<br/>

<a id="cost-tracking"></a>
### Śledzenie kosztów

Użyj **Ustawienia** > **Śledzenie kosztów**, aby zarządzać informacjami o kosztach.

- **Koszt całkowity** pokazuje bieżącą sumę.
- **Kopiuj wartość** kopiuje sumę do schowka.
- **Resetuj koszt** ustawia zapisaną sumę na zero.
- **Synchronizuj z użyciem klucza API** ustawia sumę zgodnie z użyciem zgłoszonym przez Twoje konto OpenRouter (tylko OpenRouter).
- **Użycie klucza API** pokazuje szczegółowe informacje o użyciu OpenRouter, jeśli są dostępne.
- **Usuń dane kosztów** usuwa wszystkie dane lub tylko wpisy starsze niż wybrana data.

**Śledzenie kosztów:** Gdy używasz modeli OpenRouter, aplikacja pokazuje rzeczywiste użycie i wydatki na podstawie danych kosztów z OpenRouter. Dla wszystkich innych dostawców aplikacja szacuje koszty na podstawie cen opublikowanych przez OpenRouter; jeśli cena jest niedostępna, szacunek może wynosić zero.

<br/>

> ℹ️ **UWAGA**<br/>
> Wszystkie dane dotyczące kosztów są szacunkowe i podane wyłącznie w celach informacyjnych, nie stanowią oficjalnych rachunków.

<br/>

> ⚠️ **OSTRZEŻENIE**<br/>
> Usunięcie danych jest nieodwracalne. Przed usunięciem upewnij się, że zapiszesz swoje dane lub wyeksportujesz je przez [**Historia**](#history)
> lub [**Panel** > **Wszystkie wywołania**](#dashboard-tabs), w przeciwnym razie zostaną trwale utracone.
> Wszystkie historie wejścia/wyjścia powiązane z każdym wpisem wywołania API zostaną również usunięte.

<br/>

<a id="transform-prompts"></a>
### Prompty transformacji

Użyj **Ustawienia** > **Prompty transformacji**, aby zarządzać promptami zbiorowo.

Możesz:

- przejrzyj zapisane prompty
- usuń prompty
- zaimportuj prompty z pliku
- wyeksportuj prompty w celu utworzenia kopii zapasowej lub udostępnienia
- załaduj przykładowe prompty do listy promptów

<br/>

<a id="users"></a>
### Użytkownicy

Użyj opcji **Użytkownicy**, aby zarządzać kontami użytkowników w wersji internetowej. Możesz dodawać użytkowników, aktualizować ich dane, resetować hasła oraz usuwać konta.

<br/>

<a id="api-config"></a>
### Konfiguracja API

Obsługiwani dostawcy to: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras oraz **Ollama** (modele lokalne poprzez podstawowy adres URL). Należy skonfigurować wyłącznie tych dostawców, których zamierzasz używać.

**Aplikacja internetowa: tylko administrator**

Klucze API są konfigurowane za pomocą zmiennych środowiskowych systemu lub Dockera - nie są wprowadzane w interfejsie WWW. Na tej stronie możesz zobaczyć, dla których dostawców skonfigurowano klucz, oraz przetestować każdego z nich, klikając przycisk **`Testuj`**.

<br/>

> ℹ️ **UWAGA**<br/>
> Aby zmienić klucz API, zaktualizuj zmienną środowiskową w konfiguracji systemu lub Dockera i uruchom ponownie serwer lub kontener.

> ℹ️ **UWAGA**<br/>
> **Kopie zapasowe konfiguracji** (zobacz [**Ustawienia ogólne** → Kopia zapasowa konfiguracji](#general-settings)) mogą zawierać **rozwiązane** klucze dostawcy w pliku `config.json` wewnątrz archiwum ZIP. Przywrócenie tego archiwum ZIP **nie** kopiuje tych kluczy z powrotem do pliku konfiguracyjnego serwera - aktywne klucze nadal pochodzą ze zmiennych środowiskowych i istniejącego stanu pliku, jak opisano powyżej.

<br/>

**Aplikacja komputerowa**

Użyj opcji **Konfiguracja API**, aby przechowywać klucze API dla każdego dostawcy, którego używasz. W przypadku Ollama wprowadź **podstawowy adres URL** zamiast klucza API.

<br/>

> 💡 **Wskazówka** <br/>
> Jeśli nie chcesz używać klucza API ani płacić za korzystanie, możesz [pobrać Ollama](https://ollama.com) i uruchamiać modele (np. `translategemma:4b`) lokalnie na swoim komputerze całkowicie za darmo. Alternatywnie możesz utworzyć darmowe konto OpenRouter (bez podawania danych karty kredytowej), aby korzystać z ich darmowych modeli, lub uzyskać darmowy klucz API od Cerebras, Google, Groq lub Mistral AI.

<br/>

- Dodawaj wyłącznie tych dostawców, których potrzebujesz. W sekcji **Ustawienia** > **Modele**, każdy identyfikator modelu zaczyna się od nazwy dostawcy (np. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Aby dodać klucz API, wprowadź wartość w polu tekstowym i kliknij **`Zapisz`**. Aby zastąpić istniejący klucz, kliknij **`Edytuj`**. Aby sprawdzić, czy klucz działa poprawnie, kliknij **`Testuj`**. W przypadku podstawowego adresu URL Ollama zawsze klikaj **`Testuj`**, aby sprawdzić połączenie.

<br/>

> ℹ️ **UWAGA**<br/>
> Nie możesz zobaczyć aktualnej wartości klucza API. Możesz go tylko zastąpić, używając przycisku **`Edytuj`**.
> Klucze API są przechowywane w formie zaszyfrowanej w konfiguracji.

<br/>

<a id="about"></a>
### O programie

Karta **O programie** pokazuje:

- nazwę aplikacji
- numer wersji
- datę kompilacji
- link do repozytorium projektu

<br/><br/>

<a id="common-issues"></a>
## Typowe problemy

Jeśli coś nie działa zgodnie z oczekiwaniami, sprawdź najpierw następujące kwestie.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikacja nie będzie tłumaczyć, przeformułowywać ani transformować tekstu

Sprawdź, czy:

- wybrałeś model na pasku narzędziowym
- co najmniej jeden model znajduje się na liście w sekcji [**Ustawienia** > **Modele**](#models)
- konfiguracja API działa poprawnie

Jeśli korzystasz z aplikacji desktopowej:

1. Otwórz [**Ustawienia** > **Konfiguracja API**](#api-config).
2. Sprawdź, czy co najmniej jeden klucz API został zapisany.
3. Kliknij **Testuj** obok dostawcy, aby potwierdzić działanie klucza.

<br/>

<a id="the-model-list-is-empty"></a>
### Lista modeli jest pusta

Otwórz [**Ustawienia** > **Modele**](#models) i kliknij **Odśwież**.

W razie potrzeby:

- wyszukaj model
- włącz opcję **Tylko darmowe**
- dodaj jeden lub więcej modeli do sekcji **Wybrane modele**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Wynik jest zbyt powolny lub zbyt kosztowny

Wypróbuj jedną lub więcej z poniższych opcji:

- wybierz inny model
- użyj krótszego tekstu wejściowego
- wyłącz opcję **Tłumaczenie w czasie rzeczywistym (podczas pisania)** w sekcji [**Ustawienia** > **Ustawienia ogólne**](#general-settings)
- korzystaj z darmowych modeli do prostych zadań (zobacz [Modele](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Interfejs jest w niewłaściwym języku

Kliknij ikonę globusa na [pasku narzędziowym](#toolbar) i wybierz preferowany **Język interfejsu**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Tekst jest zbyt mały lub trudny do odczytania

Otwórz [**Ustawienia** > **Ustawienia ogólne**](#general-settings) i zmień:

- **Rodzina czcionki**
- **Rozmiar**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Wykresy na panelu są puste

Jest to normalne, jeśli:

- korzystasz wyłącznie z **darmowych modeli** i analizujesz dane dotyczące **kosztów** (mogą one wynosić zero); wykresy liczby **wywołań** w zakładce **Podsumowanie** nadal wymagają danych z wybranego okresu
- wybrany **filtr czasu** nie obejmuje okresu, w którym miały miejsce wywołania - spróbuj opcji **Wszystko**, aby sprawdzić

Jeśli wykresy nadal są puste po wybraniu opcji **Wszystko**, upewnij się, że wywołania pojawiają się w sekcji [**Historia**](#history) lub na karcie **Wszystkie wywołania**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Koszt pokazuje „nie dostępny” lub wydaje się nieprawidłowy

Gdy korzystasz z modeli przez **OpenRouter**, aplikacja pokazuje rzeczywiste wydatki raportowane przez OpenRouter.

W przypadku **innych dostawców** (OpenAI bezpośredni, Anthropic bezpośredni itp.) koszt jest szacowany na podstawie danych cenowych opublikowanych przez OpenRouter. Jeśli nie zostanie znaleziona odpowiednia cena dla modelu, koszt będzie wyświetlany jako **nie dostępny** i nie zostanie dodany do całkowitego sumowania.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Koszt całkowity nie zgadza się z rachunkiem dostawcy

Wszystkie wartości kosztów w aplikacji są **szacunkowe i podane wyłącznie w celach informacyjnych**, a nie stanowią oficjalnych rachunków.

Aby przybliżyć całkowity koszt do rzeczywistych wydatków w OpenRouter, otwórz [**Ustawienia** > **Śledzenie kosztów**](#cost-tracking) i kliknij **Synchronizuj z użyciem klucza API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Strona Historia brakuje w pasku bocznym

Opcja **Zachowaj historię wykonania** może być wyłączona. Otwórz [**Ustawienia** > **Ustawienia ogólne**](#general-settings) i ją włącz. Pamiętaj, że jej włączenie nie przywraca wcześniej usuniętych danych historii.

<br/>

<a id="web-app-session-expired"></a>
### Aplikacja internetowa: nieoczekiwanie przekierowuje do strony logowania

Twoja sesja mogła wygasnąć. Zaloguj się ponownie. Jeśli problem występuje często, sprawdź konfigurację serwera dotyczącą ustawień czasu trwania sesji.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Administrator w wersji internetowej: zapomniałem lub zgubiłem hasło

Dotyczy to **samodzielnie hostowanej aplikacji internetowej** (Docker), a nie aplikacji desktopowej (Electron).

- Jeśli inny administrator może się nadal zalogować, może przejść do [**Ustawienia** > **Użytkownicy**](#users), wybrać konto i ustawić tam **nowe hasło**.
- Jeśli jesteś **zablokowany**, ale masz dostęp **shell** do maszyny lub kontenera, zresetuj hasło za pomocą narzędzia dostarczanego razem z obrazem (zamień `transrewrt`, jeśli zmieniłeś domyślną nazwę, i ujmij hasło w cudzysłów, jeśli zawiera spacje lub znaki specjalne):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Domyślna nazwa użytkownika administratora to `admin`, jeśli nigdy nie utworzono innych kont. Gdy podasz tylko jeden argument, jest on traktowany jako nowe hasło dla konta `admin`.

Jeśli korzystasz z **kopii źródłowej** zamiast Dockera, użyj:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Skrypt aktualizuje rekord użytkownika w bazie danych SQLite (i może utworzyć użytkownika `admin`, jeśli go nie ma). Po zresetowaniu zaloguj się przy użyciu nowego hasła.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Na panelu nie ma danych innych użytkowników (wersja internetowa)

Tylko **administratorzy** mogą przeglądać dane wszystkich użytkowników za pomocą filtra **Użytkownik**. Zwykli użytkownicy widzą wyłącznie swoją własną aktywność - to zamierzone zachowanie.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Zmieniłem prompt i straciłem edycje

Podczas edytowania prompta zawsze kliknij **Zapisz**, zanim przejdziesz do opcji **Powrót do uruchomienia**.

<br/><br/>

<a id="quick-tips"></a>
## Szybkie wskazówki

- Zacznij od [**Przetłumacz**](#translate), aby upewnić się, że Twoja konfiguracja działa, zanim przejdziesz do [**Przeformułowanie**](#rewrite) lub [**Transformacja**](#transform).
- Użyj [**Przeformułowanie**](#rewrite), aby poprawić sformułowania w codziennym użytkowaniu.
- Skorzystaj z [**Transformacja**](#transform), gdy potrzebujesz powtarzalnego przepływu pracy dla konkretnego zadania.
- Użyj [**Panel**](#dashboard), jeśli chcesz monitorować zużycie i koszt.
- Skorzystaj z [**Historia**](#history), aby przejrzeć poprzednie operacje wraz z pełnym tekstem wejściowym i wyjściowym.
- Regularnie eksportuj prompty, jeśli tworzysz bibliotekę promptów, którą chcesz zabezpieczyć (zobacz [Prompty transformacji](#transform-prompts)) lub chcesz ją udostępnić innym.

<br/><br/>

<a id="disclaimer"></a>
## Zrzeczenie odpowiedzialności

Nazwy produktów i ikony należą do ich właścicieli i są używane wyłącznie w celach identyfikacyjnych. To oprogramowanie nie jest powiązane z wymienionymi markami ani przez nie wspierane.

<br/><br/>

<a id="license"></a>
## Licencja

Prawa autorskie © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
