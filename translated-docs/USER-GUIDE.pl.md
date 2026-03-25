---
translated_at: "2026-03-25T21:41:49.173Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt baner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Przewodnik użytkownika

<br/>

<a id="introduction"></a>
## Wprowadzenie

Transrewrt pomaga w pracy z tekstem na trzy główne sposoby:

- **Tłumaczenie** — konwersja tekstu z jednego języka na drugi.
- **Przepisywanie** — zmiana stylu tekstu, na przykład na bardziej zrozumiały, krótszy lub formalny.
- **Transformacja** — przetwarzanie tekstu przy użyciu niestandardowych instrukcji dla sztucznej inteligencji, nazywanych promptami.

<br/>

Niniejszy przewodnik wyjaśnia, jak korzystać z aplikacji po jej zainstalowaniu i uruchomieniu. Kroki instalacyjne opisane są w głównym pliku **[README](README.pl.md)**.

<br/>

> ℹ️ **UWAGA**<br/>
> Transrewrt jest dostępny jako aplikacja komputerowa dla systemów Windows i Linux oraz jako samodzielnie hostowana aplikacja internetowa. Niniejszy przewodnik koncentruje się na codziennym użytkowaniu aplikacji. Gdy dana funkcja dotyczy wyłącznie jednej wersji, zostaje to wyraźnie zaznaczone.

<small>**Przeczytaj w innych językach:** [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Uwaga dotycząca tłumaczeń interfejsu i dokumentacji:** Wszystkie języki interfejsu z wyjątkiem oryginalnego angielskiego (Wielka Brytania) zostały przetłumaczone za pomocą modeli AI; sformułowania mogą być niedokładne lub zawierać błędy.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Spis treści** 

- [Zanim rozpoczniesz](#before-you-start)
  - [Jak uzyskać bezpłatny klucz API OpenRouter (aplikacja komputerowa)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Pierwsze kroki](#getting-started)
- [Główne elementy okna](#main-parts-of-the-window)
  - [Pasek boczny](#sidebar)
  - [Pasek narzędzi](#toolbar)
  - [Panele wejściowy i wyjściowy](#input-and-output-panels)
- [Tłumaczenie](#translate)
  - [Tłumaczenie tekstu](#translate-text)
  - [Wybór języka](#language-selection)
  - [Przydatne ustawienia tłumaczenia](#helpful-translation-settings)
- [Przepisywanie](#rewrite)
- [Transformacja](#transform)
  - [Uruchamianie istniejącego promptu](#run-an-existing-prompt)
  - [Jeśli nie masz jeszcze żadnych promptów](#if-you-have-no-prompts-yet)
  - [Szybkie tworzenie promptu](#create-a-prompt-quickly)
  - [Edycja promptu](#edit-a-prompt)
  - [Testowanie promptu przed użyciem](#test-a-prompt-before-using-it)
- [Kokpit](#dashboard)
  - [Filtrowanie danych](#filter-the-data)
  - [Karty kokpitu](#dashboard-tabs)
  - [Eksportowanie danych](#export-data)
  - [Usuwanie zapisanych rekordów dla modelu](#delete-stored-records-for-a-model)
- [Historia](#history)
  - [Filtrowanie danych](#filter-the-data-1)
  - [Eksportowanie danych historii](#export-history-data)
- [Ustawienia](#settings)
  - [Ustawienia ogólne](#general-settings)
  - [Modele](#models)
  - [Języki](#languages)
  - [Śledzenie kosztów](#cost-tracking)
  - [Prompty transformacyjne](#transform-prompts)
  - [Użytkownicy](#users)
  - [Konfiguracja API](#api-config)
  - [O programie](#about)
- [Typowe problemy](#common-issues)
  - [Aplikacja nie tłumaczy, nie przepisuje ani nie przekształca tekstu](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Lista modeli jest pusta](#the-model-list-is-empty)
  - [Wynik jest zbyt wolny lub zbyt kosztowny](#the-result-is-too-slow-or-too-expensive)
  - [Interfejs jest w niewłaściwym języku](#the-interface-is-in-the-wrong-language)
  - [Tekst jest zbyt mały lub trudny do odczytania](#the-text-is-too-small-or-hard-to-read)
  - [Wykresy w kokpicie są puste](#dashboard-charts-are-empty)
  - [Koszt pokazuje „niedostępny” lub wydaje się błędny](#cost-shows-not-available-or-seems-wrong)
  - [Całkowity koszt nie zgadza się z rachunkiem dostawcy](#total-cost-does-not-match-my-provider-bill)
  - [Strona Historia nie pojawia się na pasku bocznym](#the-history-page-is-missing-from-the-sidebar)
  - [Aplikacja internetowa: niespodziewane przekierowanie na stronę logowania](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Kokpit nie pokazuje danych dla innych użytkowników (wersja internetowa)](#dashboard-shows-no-data-for-other-users-web)
  - [Zmieniłem prompt i straciłem edycje](#i-changed-a-prompt-and-lost-the-edits)
- [Szybkie wskazówki](#quick-tips)
- [Zastrzeżenie](#disclaimer)
- [Licencja](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Zanim zaczniesz

Aby korzystać z Transrewrt, musisz mieć dostęp do co najmniej jednego dostawcy AI. Obsługiwane dostawcy to: [OpenRouter](https://openrouter.ai) (agregujący wiele modeli), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras oraz [Ollama](https://ollama.com) dla modeli lokalnych.

Nie musisz wybierać płatnego modelu, aby rozpocząć. Gdy tylko dodasz swój klucz API OpenRouter, aplikacja automatycznie aktywuje wbudowaną **bezpłatną** opcję OpenRouter. Dzięki temu możesz od razu zacząć tłumaczyć, przepisywać i przekształcać tekst. Alternatywnie możesz również uzyskać bezpłatny klucz API od Cerebras, Google, Groq lub Mistral AI.

Innymi słowy:

- **Model** to silnik AI, który wykonuje pracę. Modele są wymieniane z prefiksem **dostawcy** (na przykład `openrouter/…`, `openai/…`, `ollama/…`).
- **Klucz API** (lub w przypadku Ollama, **podstawowy adres URL**) to sposób, w jaki aplikacja łączy się z danym dostawcą.

Jeśli korzystasz z **aplikacji komputerowej**, dodaj klucze w zakładce [**Ustawienia** > **Konfiguracja API**](#api-config) dla każdego dostawcy, którego używasz. W przypadku korzystania wyłącznie z OpenRouter, zobacz poniższej sekcji [Jak uzyskać klucz API](#how-to-get-an-api-key-desktop-app). Jeśli nie chcesz używać klucza API, możesz zainstalować Ollama (ze strony [ollama.com](https://ollama.com)) i korzystać z modeli lokalnych, takich jak `translategemma:4b`.

Jeśli używasz **wersji webowej**, administrator serwera konfiguruje dostawców za pomocą zmiennych środowiskowych, więc nie możesz wprowadzać kluczy API bezpośrednio w aplikacji.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Jak uzyskać bezpłatny klucz API OpenRouter (aplikacja komputerowa)

Jeśli korzystasz z aplikacji komputerowej, postępuj zgodnie z poniższymi krokami:

1. Otwórz stronę [OpenRouter](https://openrouter.ai) w przeglądarce internetowej.
2. Utwórz konto lub zaloguj się.
3. Przejdź na stronę [Klucze](https://openrouter.ai/keys).
4. Kliknij przycisk, aby utworzyć nowy klucz API.
5. Nadaj kluczowi nazwę, która pozwoli Ci go później rozpoznać.
6. Skopiuj nowy klucz API.
7. Wróć do Transrewrt i otwórz **Ustawienia** > **Konfiguracja API**.
8. Wklej klucz w polu **Klucz API OpenRouter** (w sekcji **Ustawienia** > **Konfiguracja API**).
9. Kliknij **Testuj klucz OpenRouter**, aby upewnić się, że działa poprawnie.

<br/><br/>

<a id="getting-started"></a>
## Pierwsze kroki

Jeśli pierwszy raz korzystasz z Transrewrt, postępuj zgodnie z tą kolejnością:

1. Otwórz aplikację.
2. Jeśli trzeba, wybierz język interfejsu za pomocą ikony globusa.
3. Jeśli korzystasz z **aplikacji komputerowej**, otwórz [**Ustawienia** > **Konfiguracja API**](#api-config), dodaj klucz API co najmniej dla jednego dostawcy (na przykład OpenRouter) i kliknij **Testuj**, aby potwierdzić jego działanie.
4. Otwórz [**Ustawienia** > **Modele**](#models) i dodaj jeden lub więcej modeli do sekcji **Wybrane modele**.
5. Otwórz [**Ustawienia** > **Języki**](#languages) i wybierz **Główne języki**, jeśli chcesz, aby Twoje najczęściej używane języki wyświetlały się na górze.
6. Przejdź do zakładki **Tłumacz** i przeprowadź proste tłumaczenie, aby potwierdzić, że wszystko działa poprawnie.
7. Gdy wszystko zadziała, wypróbuj funkcje **Przepisz** i następnie **Przekształć**.

Ta kolejność ma znaczenie. Zapobiega ona najczęściej występującemu problemowi podczas pierwszego użycia: próbie uruchomienia zadania przed nawiązaniem poprawnego połączenia API lub wybraniem modelu.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Główne części okna

Aplikacja składa się z trzech głównych obszarów:

- **Pasek boczny** po lewej stronie.
- **Pasek narzędzi** u góry.
- **Obszar roboczy** na środku.

<br/>

<a id="sidebar"></a>
### Pasek boczny

Za pomocą paska bocznego poruszasz się po aplikacji. Możesz go zwinąć, klikając ikonę obok logotypu aplikacji, by uzyskać więcej miejsca.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/pl/sidebar.png" alt="Pasek boczny aplikacji" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Tłumacz</strong> otwiera obszar pracy tłumaczenia.</li><br/>
        <li><strong>Przepisz</strong> otwiera obszar pracy do przepisywania tekstu.</li><br/>
        <li><strong>Przekształć</strong> otwiera obszar pracy z niestandardowym promptem.</li><br/>
        <li><strong>Panel</strong> pokazuje informacje o zużyciu i kosztach.</li><br/>
        <li><strong>Ustawienia</strong> otwiera panel ustawień.</li><br/>
        <li><strong>Historia</strong> pokazuje historię użycia, łącznie z tekstami wejściowymi i wyjściowymi.</li><br/>
        <li><strong>Użytkownik</strong> pokazuje nazwę zalogowanego użytkownika (tylko w wersji webowej).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Pasek narzędzi

Pasek narzędzi nieznacznie zmienia się w zależności od tego, gdzie jesteś w aplikacji.

- Po lewej stronie wyświetla nazwę bieżącej strony.
- Po prawej stronie znajduje się **selektor modelu** oraz kontrolka **języka interfejsu**.

**Selektor modelu** pozwala wybrać silnik AI, którego chcesz użyć do bieżącego zadania.

  ![Selektor modelu](../images/screenshots/pl/model-selector.png)

Niektóre darmowe modele mogą nie być zawsze dostępne — czasem są wyłączone lub mają ograniczenie użycia. W takim przypadku aplikacja automatycznie usunie ten model z listy dostępnych. Aby kontrolować, które modele się pojawiają, przejdź do [**Ustawienia** > **Modele**](#models) i edytuj swoją listę modeli. Możesz również otworzyć ustawienia modelu bezpośrednio, klikając ikonę dostawcy po lewej stronie nazwy modelu na pasku narzędziowym.

<br/>

**Ikona kuli ziemskiej + kod języka** zmienia język interfejsu aplikacji, np. menu i przyciski. **Nie zmienia** to języków tłumaczenia używanych w funkcji **Tłumacz**.

  ![Selektor języka interfejsu](../images/screenshots/pl/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panele wejściowy i wyjściowy

Większość obszarów roboczych korzysta z lewego panelu **Wejściowego** i prawego panelu **Wyjściowego**.

Każdy panel wyświetla również:

| **Wejście**                                                          | **Wyjście**                                                                                                                  |
|----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| - Liczbę znaków <br/>- Liczbę słów <br/>- Liczbę akapitów         | - Czas trwania zadania<br/>- **TPS** (tokeny na sekundę)<br/>- Liczba znaków, słów i akapitów<br/>- Użyty model |


Jeśli zastanawiasz się nad pojęciami technicznymi:

- **Token** to mały fragment tekstu. Można go traktować jako część słowa lub krótkie słowo.
- **TPS** oznacza liczbę takich fragmentów tekstu przetwarzanych przez model na sekundę.

<br/>

Można również monitorować koszt każdej operacji (jeśli dostępny) oraz łączny koszt, włączając opcję `Pokaż informacje o kosztach operacji` w [**Ustawienia** > **Ustawienia ogólne**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Tłumacz

Użyj **Tłumacza**, gdy chcesz przetłumaczyć tekst z jednego języka na inny.

![Obszar roboczy Tłumacz](../images/screenshots/pl/translate.png)

<br/>

<a id="translate-text"></a>
### Tłumaczenie tekstu

1. Otwórz **Tłumacz**.
2. Wybierz język w polu **Z**.
3. Wybierz język w polu **Na**.
4. Wybierz model na pasku narzędziowym.
5. Wpisz lub wklej tekst w polu **Wejście**.
6. Kliknij **Tłumacz**.
7. Przeczytaj wynik w polu **Wyjście**.
8. Skorzystaj z przycisku kopiowania, jeśli chcesz skopiować wynik.

<br/>

<a id="language-selection"></a>
### Wybór języka

- **Z** może oznaczać konkretny język lub **Wykryj język**.
- **Na** to język, w którym chcesz otrzymać wynik.

Wybrane **Najważniejsze języki** pojawiają się na górze listy. Można je ustawić w [**Ustawienia** > **Języki**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Przydatne ustawienia tłumaczenia

W [**Ustawienia** > **Ustawienia ogólne**](#general-settings) możesz zmienić sposób działania tłumaczenia:

- **Automatyczne tłumaczenie po wklejeniu** uruchamia tłumaczenie natychmiast po wklejeniu tekstu.
- **Automatyczne kopiowanie wyniku do schowka** kopiuje wynik automatycznie po pomyślnym tłumaczeniu.
- **Tłumaczenie w czasie rzeczywistym (podczas pisania)** uruchamia tłumaczenia, gdy wpisujesz tekst.
- **Limit czasu (ms)** kontroluje, jak długo aplikacja czeka przed uruchomieniem tłumaczenia w czasie rzeczywistym.
- **Enter** określa działanie po naciśnięciu klawisza `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Poprawa

Użyj **Poprawy**, gdy chcesz ulepszyć sformułowanie bez zmiany głównej treści.

![Obszar roboczy Poprawa](../images/screenshots/pl/rewrite.png)

To przydatne do:

- poprawiania pisowni i gramatyki
- klarowania tekstu
- nadawania tekstowi charakteru bardziej formalnego lub mniej formalnego
- skracania lub wydłużania tekstu
- czynienia tekstu bardziej technicznym

<br/>

> 💡 **WSKAZÓWKA**<br/>
> Gdy używasz trybu "**Sprawdź pisownię i gramatykę**", w panelu wyjściowym pojawi się przycisk `Pokaż zmiany`.
> Kliknij ten przycisk, aby przełączyć pokazywanie poprawek, pokazując lub ukrywając konkretne zmiany wprowadzone w twoim tekście.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Przekształć

Użyj opcji **Przekształć**, gdy chcesz, aby sztuczna inteligencja wykonała działania zgodnie z Twoimi niestandardowymi instrukcjami.

![Pracownia Przekształć](../images/screenshots/pl/transform.png)

To najbardziej elastyczna część aplikacji. Możesz jej użyć do zadań takich jak:

- podsumowywanie notatek
- zamiana szkiców tekstu na dopracowaną wiadomość e-mail
- wyciąganie kluczowych punktów
- konwersja tekstu do określonego formatu
- wszelkie inne niestandardowe działania na tekście wejściowym

<br/>

<a id="run-an-existing-prompt"></a>
### Uruchom istniejący prompt

1. Otwórz **Przekształć**.
2. Wybierz prompt z listy promptów.
3. Jeśli pojawi się pole **Język docelowy**, wybierz język (opcjonalnie).
4. Wpisz lub wklej tekst w polu **Wejście**.
5. Kliknij **Przekształć**.
6. Przeczytaj wynik w polu **Wyjście**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Jeśli jeszcze nie masz promptów

Jeśli Twoja lista promptów jest pusta, kliknij **Załaduj przykładowe prompty**. Doda to wbudowane przykłady, dzięki czemu szybciej rozpoczniesz pracę.

<br/>

> ℹ️ **UWAGA**<br/>
> Przykładowe prompty są dostarczane w języku angielskim. Po ich załadowaniu możesz edytować prompt i użyć opcji **Tłumacz prompt**, aby przetłumaczyć go na swój język.

<br/>

<a id="create-a-prompt-quickly"></a>
### Szybkie tworzenie promptu

Najszybszy sposób na utworzenie promptu:

1. Kliknij **Nowy prompt**.
2. Kliknij **Wygeneruj prompt**.
3. Opisz, co ma robić prompt.
4. Wybierz model.
5. Pozwól aplikacji utworzyć wersję roboczą.
6. Sprawdź wersję roboczą i kliknij **Zapisz**.

![Wygeneruj prompt](../images/screenshots/pl/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Edytuj prompt

Po utworzeniu lub edycji promptu edytor pojawia się po lewej stronie, a po prawej pojawia się obszar testowy.

![Edytor promptów w Przekształć](../images/screenshots/pl/transform-prompt-edit.png)

Główne pola to:

- **Nazwa promptu**: nazwa wyświetlana na liście promptów.
- **Instrukcje do promptu (opcjonalne)**: krótki opis pomocniczy wyświetlany użytkownikowi podczas uruchamiania promptu.
- **Rola modelu**: ogólna rola przypisana do AI, np. „Jesteś pomocnym asystentem”.
- **Instrukcje dla modelu (po jednej w wierszu)**: konkretne reguły, których ma przestrzegać AI.
- **Opis wyniku**: krótkie określenie wyniku, np. „podsumowanie” lub „przepisanie”.
- **Temperatura (0,0 → 1,0)**: sposób działania modelu — zobacz niżej.
- **Zapytaj o język docelowy**: dodaje selektor języka docelowego przy uruchamianiu promptu.

Jeśli termin **Temperatura** jest Ci obcy, wyobraź go sobie w taki sposób:

- **Niższa** temperatura daje bardziej stabilne i przewidywalne wyniki.
- **Wyższa** temperatura daje większą różnorodność i kreatywność.

Możesz także użyć:

- **`Wygeneruj prompt`**, aby utworzyć nową wersję roboczą na podstawie prostego opisu
- **`Ulepsz prompt`**, aby dopracować istniejący prompt
- **`Tłumacz prompt`**, aby przetłumaczyć pola promptu

<br/>

> ⚠️ **OSTRZEŻENIE**<br/>
> Kliknij **`Zapisz`** przed kliknięciem **`Wróć do uruchomienia`**. Jeśli opuścisz ekran bez zapisania, wszystkie zmiany zostaną utracone.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Przetestuj prompt przed użyciem

Panel testowy po prawej stronie pozwala sprawdzić działanie promptu na przykładowym tekście, zanim zaczniesz go używać w codziennej pracy.

To przydatne, gdy:

- tworzysz nowy prompt
- porównujesz dwie wersje promptu
- chcesz sprawdzić ton, długość lub format wyniku

<br/>

> ℹ️ **UWAGA**<br/>
> Możesz eksportować i importować zapisane prompty w zakładce [**Ustawienia** > **Prompty w Przekształć**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Panel główny

Użyj opcji **Panel główny**, aby sprawdzić, jak intensywnie korzystasz z aplikacji i jakie ponosisz koszty (dla modeli płatnych).

![Podsumowanie panelu głównego](../images/screenshots/pl/dashboard-summary.png)


<br/>

> ℹ️ **UWAGA**<br/>
> Jeśli używasz wyłącznie modeli darmowych, wykresy związane z kosztami będą puste. 

<br/>

<a id="filter-the-data"></a>
### Filtrowanie danych

Użyj przycisków filtra u góry, aby zmienić zakres czasu.

![Filtry panelu głównego](../images/screenshots/pl/dashboard-filter.png)

<br/>

> ℹ️ **UWAGA**<br/>
> Filtr **Użytkownik** jest widoczny tylko administratorom w wersji internetowej. Zwykli użytkownicy nie widzą tego filtra, a w aplikacji komputerowej nie jest on dostępny.

<br/>

<a id="dashboard-tabs"></a>

### Zakładki pulpitu

- **Podsumowanie** pokazuje przegląd wykorzystania i kosztów.
- **Według użycia** dzieli aktywność według języka tłumaczenia, trybu przepisywania i użytych zachęt przekształceń.
- **Według modelu** pokazuje, których modeli użyto oraz ile one kosztowały.
- **Według dnia** przedstawia dzienne podsumowania.
- **Wszystkie zapytania** pokazuje pełną historię zapytań i pozwala ją wyeksportować.

<br/>

<a id="export-data"></a>
### Eksport danych

Tabele na pulpicie pozwalają wyeksportować dane w formatach:

- **JSON**
- **CSV**
- **XLSX**

Jest to przydatne, jeśli chcesz przeanalizować aktywność poza aplikacją lub udostępnić raport.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Usuwanie zapisanych rekordów dla modelu

W zakładkach **Według modelu** lub **Wszystkie zapytania** możesz usunąć zapisane rekordy dla modelu, klikając ikonę „kosza”.

> ⚠️ **OSTRZEŻENIE**<br/>
> Usunięcie zapisanych rekordów jest nieodwracalne. Używaj tej opcji tylko wtedy, gdy na pewno nie potrzebujesz już tej historii.

Aby usunąć wszystkie dane lub usunąć rekordy na podstawie ich wieku, przejdź do [**Ustawienia** > **Śledzenie kosztów**](#cost-tracking). Tam znajdziesz opcje usunięcia wszystkich zapisanych danych lub tylko tych starszych niż określona data.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Historia

Kliknij **Historia**, aby zobaczyć historię swoich działań wewnątrz **Transrewrt**, w tym dane wejściowe i wyjściowe każdej operacji.

![Strona Historia](../images/screenshots/pl/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrowanie danych

**Historia** używa tych samych filtrów co strona **Pulpit**. Skorzystaj z nich, aby wybrać zakres czasu.

![Filtry pulpitu](../images/screenshots/pl/dashboard-filter.png)

<br/>

> ℹ️ **UWAGA**<br/>
> Filtr **Użytkownik** jest widoczny wyłącznie administratorom w wersji internetowej. Zwykli użytkownicy nie będą widzieć tego filtra, a w aplikacji komputerowej filtr ten nie jest dostępny.

<br/>

<a id="export-history-data"></a>
### Eksport danych historii

Strona historii pozwala wyeksportować przefiltrowane dane w formatach:

- **JSON**
- **CSV**
- **XLSX**

Jest to przydatne, jeśli chcesz przeanalizować aktywność poza aplikacją lub udostępnić raport.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Ustawienia

Otwórz **Ustawienia** z bocznego paska, aby dostosować zachowanie aplikacji.

Dostępne zakładki zależą od platformy i Twojej roli:

  | Zakładka                  | Komputerowa | Internetowa (admin) | Internetowa (zwykły użytkownik) |
  |---------------------------|:-----------:|:-------------------:|:-------------------------------:|
  | Ustawienia ogólne         |     tak     |         tak         |               tak               |
  | Modele                    |     tak     |         tak         |               tak               |
  | Języki                    |     tak     |         tak         |               tak               |
  | Śledzenie kosztów         |     tak     |         tak         |                —                |
  | Zachęty przekształceń     |     tak     |         tak         |               tak               |
  | Użytkownicy               |      —      |         tak         |                —                |
  | Konfiguracja API          |     tak     |         tak         |                —                |
  | Informacje                |     tak     |         tak         |               tak               |

<br/>

> ℹ️ **UWAGA**<br/>
> W wersji internetowej każdy użytkownik ma własną konfigurację. Ustawienia takie jak wybrane modele, języki, opcje ogólne i zachęty przekształceń są przechowywane oddzielnie dla każdego użytkownika. Wprowadzone przez Ciebie zmiany nie wpływają na innych użytkowników.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Ustawienia ogólne

Użyj **Ustawień ogólnych**, aby kontrolować zachowanie pisania, czy dane wykonywania są zapisywane w **Historii** oraz wygląd aplikacji.

**Zachowanie**

- **Zachowanie klawisza ENTER** umożliwia wybór, czy naciśnięcie `Enter` uruchamia zadanie czy wstawia nową linię.
- **Automatyczne tłumaczenie po wklejeniu** uruchamia tłumaczenie zaraz po wklejeniu tekstu.
- **Automatyczne kopiowanie wyniku do schowka** automatycznie kopiuje pomyślne wyniki.
- **Tłumaczenie w czasie rzeczywistym (podczas pisania)** tłumaczy tekst w trakcie pisania.
- **Limit czasu (ms)** ustawia czas oczekiwania na tłumaczenie w czasie rzeczywistym.

**Historia**

- **Zapisuj historię wykonywania** określa, czy każde tłumaczenie, przepisywanie i przekształcanie ma przechowywać **tekst wejściowy i wyjściowy** do widoku [**Historia**](#history) w pasku bocznym. Wyłączenie tej opcji wymaga potwierdzenia; po potwierdzeniu zapisany tekst historii zostanie usunięty z bazy danych.
- **Usuń dane historii** pozwala usunąć zapisany tekst według wieku (na przykład starsze niż kilka miesięcy lub **wszystkie dane (wyczyść)**) za pomocą przycisku **Usuń dane**. Dotyczy to wyłącznie zapisanego tekstu wykonania dla widoku **Historia**; **nie** usuwa danych dotyczących kosztów ani podsumowań użycia. Aby usunąć lub ograniczyć dane dotyczące **kosztów**, użyj [**Ustawienia** > **Śledzenie kosztów**](#cost-tracking).

**Wygląd**

- **Wyświetlaj informacje o kosztach w akcjach** kontroluje wyświetlanie kosztu operacji (jeśli jest dostępny) oraz łącznego kosztu na panelach wyników Tłumaczenia, Przepisywania i Przekształcania.
- **Liczba cyfr po przecinku dla kosztów** zmienia sposób wyświetlania ułamków dziesiętnych kosztów.
- **Tylko w wersji internetowej:** **pokaż margines wokół aplikacji** dodaje dodatkową przestrzeń wokół interfejsu.
- **Rodzaj czcionki** zmienia czcionkę w panelach tekstowych.
- **Rozmiar** zmienia rozmiar czcionki.


<br/>

<a id="models"></a>

### Modele

Użyj opcji **Ustawienia** > **Modele**, aby wybrać, które modele będą wyświetlane na pasku narzędziowym.

![Karta Modeli w ustawieniach](../images/screenshots/pl/settings-models.png)

Strona zawiera dwie listy:

- **Dostępne modele** po lewej stronie
- **Wybrane modele** po prawej stronie

Przydatne elementy sterujące to m.in.:

- **Wyszukaj modele...** – aby znaleźć model po nazwie
- **Etykiety dostawców** – aby zawęzić listę do jednego silnika (OpenRouter, OpenAI, Ollama itd.)
- **Tylko darmowe** – aby wyświetlić tylko darmowe modele
- **Odśwież** – aby ponownie załadować listę
- **Rozwiń wszystko** i **Zwiń wszystko** – przy sortowaniu według dostawcy

Identyfikatory modeli zawierają prefiks dostawcy (na przykład `openrouter/…` lub `openai/…`). Etykiety takie jak **OpenAI (OpenRouter)** i **OpenAI (direct)** wskazują, w jaki sposób kierowany jest ruch.

> ℹ️ **UWAGA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) to model-router, a nie ogólny model czatu: jego odpowiedź to dane w formacie JSON opisujące treści żądań API OpenRouter (na przykład tablicę `requests` zawierającą `model` i `messages`). Jeśli użyjesz go do **Tłumaczenia**, **Przepisania** lub **Transformacji**, w okienku wyjściowym zamiast gotowego tekstu zobaczysz właśnie ten kod JSON. W przypadku tych zadań wybierz normalny model tekstowy. Szczegóły znajdziesz na [stronie modelu Body Builder](https://openrouter.ai/openrouter/bodybuilder) w OpenRouter.

Dostępne działania:

- Aby dodać model, kliknij **Dodaj** lub dowolne miejsce w pozycji.
- Aby usunąć model, kliknij **X** obok niego w sekcji **Wybrane modele** lub przycisk **Wybrany** na pozycji w liście Dostępne Modele.
- Aby wyczyścić listę, kliknij **Odznacz wszystkie**. Wymagany darmowy model pozostanie na liście.

<br/>

> ℹ️ **UWAGA**<br/>
> Jeśli nie chcesz od razu doładowywać środków na konto OpenRouter, zacznij od włączenia opcji **Tylko darmowe** i wybrania darmowych modeli (nie wymagają karty kredytowej). Możesz również użyć Ollama, by uruchamiać modele lokalnie bez klucza API.

<br/>

<a id="languages"></a>
### Języki

Użyj **Ustawienia** > **Języki**, aby uporządkować listy języków używane w aplikacji.

- **Najważniejsze języki** są przypięte u góry listy języków w opcjach **Tłumacz** i **Przekształć**.
- **Własny język** pozwala dodać język, którego nie ma na wbudowanej liście.

Jeśli dodasz własny język, pojawi się on w selektorach języków obok standardowych opcji.

<br/>

<a id="cost-tracking"></a>
### Śledzenie kosztów

Użyj **Ustawienia** > **Śledzenie kosztów**, aby zarządzać danymi dotyczącymi wydatków.

- **Całkowity koszt** pokazuje bieżącą sumę.
- **Kopiuj wartość** – kopiuje całkowitą wartość do schowka.
- **Zresetuj koszt** – ustawia zapisaną sumę na zero.
- **Synchronizuj z wykorzystaniem klucza API** – ustawia całkowitą wartość zgodnie z użyciem zgłoszonym przez Twoje konto OpenRouter (tylko OpenRouter).
- **Wykorzystanie klucza API** – pokazuje szczegółowe informacje o zużyciu OpenRouter, jeśli są dostępne.
- **Usuń dane o kosztach** – usuwa wszystkie dane lub tylko te starsze niż wybrana data.

**Śledzenie kosztów:** Podczas korzystania z modeli OpenRouter aplikacja pokazuje rzeczywiste zużycie i wydatki na podstawie informacji o cenach z OpenRouter. W przypadku innych dostawców aplikacja szacuje koszty, korzystając z cen opublikowanych przez OpenRouter. Jeśli cena jest niedostępna, szacunek może wynosić zero.

<br/>

> ℹ️ **UWAGA**<br/>
>  **Wszystkie dane dotyczące kosztów są jedynie szacunkowe i przeznaczone wyłącznie do celów informacyjnych, a nie jako oficjalne rozliczenia.**


<br/>

> ⚠️ **OSTRZEŻENIE**<br/>
> Usunięcie danych jest nieodwracalne. Przed usunięciem upewnij się, że utworzyłeś kopię zapasową danych lub wyeksportowałeś je przez zakładkę [**Historia**](#history) 
> albo [**Panel główny** > **Wszystkie wywołania**](#dashboard-tabs), inaczej zostaną trwale utracone. 
> Zostaną również usunięte wszystkie historie danych wejściowych i wyjściowych powiązane z każdym wpisem wywołania API.

<br/>

<a id="transform-prompts"></a>
### Wzorce transformacji

Użyj **Ustawienia** > **Wzorce transformacji**, aby zarządzać podpowiedziami zbiorowo.

Możesz:

- przeglądać zapisane wzorce
- usuwać wzorce
- importować wzorce z pliku
- eksportować wzorce w celu tworzenia kopii zapasowej lub udostępniania

<br/>

<a id="users"></a>
### Użytkownicy

Użyj opcji **Użytkownicy**, aby zarządzać kontami użytkowników w wersji internetowej. Możesz dodawać użytkowników, aktualizować ich dane, resetować hasła oraz usuwać konta.

<br/>

<a id="api-config"></a>
### Konfiguracja API

Obsługiwane dostawcy: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras oraz **Ollama** (modele lokalne poprzez podstawowy adres URL). Należy skonfigurować jedynie tych dostawców, których zamierzasz używać.

**Aplikacja internetowa: tylko administrator**

Klucze API są konfigurowane za pomocą zmiennych środowiskowych systemu lub Dockera — nie są wprowadzane w interfejsie WWW. Na tej stronie widać, które dostawcy mają skonfigurowany klucz, a każdy z nich można przetestować, klikając przycisk **`Testuj`**.

<br/>

> ℹ️ **UWAGA**<br/>
> Aby zmienić klucz API, zaktualizuj zmienną środowiskową w konfiguracji systemu lub Dockera i ponownie uruchom serwer lub kontener.

<br/>

**Aplikacja komputerowa**

Użyj **Konfiguracji API**, aby zapisać klucze API dla każdego dostawcy, którego używasz. W przypadku Ollama wpisz **podstawowy adres URL** zamiast klucza API.

<br/>

> 💡 **Wskazówka** <br/>
> Jeśli nie chcesz używać klucza API ani płacić za zasoby, możesz [pobrać Ollama](https://ollama.com) i uruchamiać tam modele (np. `translategemma:4b`) lokalnie na swoim komputerze całkowicie бесплатно. Alternatywnie możesz założyć darmowe konto OpenRouter (nie wymaga karty kredytowej), by korzystać z ich darmowych modeli, lub uzyskać darmowy klucz API od Cerebras, Google, Groq, albo Mistral AI.

<br/>

- Dodaj tylko tych dostawców, których potrzebujesz. W **Ustawieniach** > **Modele** każdy identyfikator modelu zaczyna się od nazwy dostawcy (np. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Aby dodać klucz API, wpisz jego wartość w polu tekstowym i kliknij **`Zapisz`**. Aby zastąpić istniejący klucz, kliknij **`Edytuj`**. Aby sprawdzić, czy klucz działa, kliknij **`Testuj`**. W przypadku podstawowego adresu URL Ollama zawsze kliknij **`Testuj`**, aby zweryfikować połączenie.

<br/>

> ℹ️ **UWAGA**<br/>
> Nie możesz zobaczyć aktualnej wartości klucza API. Możesz jedynie zastąpić go przy użyciu przycisku **`Edytuj`**.
> Klucze API są przechowywane w postaci zaszyfrowanej w konfiguracji.

<br/>

<a id="about"></a>

### Informacje

Na karcie **Informacje** wyświetlana jest:

- nazwa aplikacji
- numer wersji
- data kompilacji
- link do repozytorium projektu

<br/><br/>

<a id="common-issues"></a>
## Typowe problemy

Jeśli coś nie działa zgodnie z oczekiwaniami, najpierw sprawdź poniższe punkty.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikacja nie tłumaczy, nie przepisuje ani nie przekształca tekstu

Sprawdź, czy:

- wybrano model na pasku narzędziowym
- co najmniej jeden model znajduje się na liście w [**Ustawienia** > **Modele**](#models)
- konfiguracja API działa poprawnie

Jeśli używasz aplikacji desktopowej:

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
- dodaj jeden lub więcej modeli do **Wybrane modele**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Wynik jest zbyt powolny lub zbyt drogi

Spróbuj jednej lub więcej z poniższych czynności:

- wybierz inny model
- użyj krótszego tekstu wejściowego
- wyłącz opcję **Tłumaczenie w czasie rzeczywistym (podczas pisania)** w [**Ustawienia** > **Ustawienia ogólne**](#general-settings)
- używaj darmowych modeli do prostych zadań (zobacz [Modele](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Interfejs wyświetla się w niewłaściwym języku

Kliknij ikonę globusa na [pasku narzędzi](#toolbar) i wybierz preferowany **język interfejsu**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Tekst jest zbyt mały lub trudny do odczytania

Otwórz [**Ustawienia** > **Ustawienia ogólne**](#general-settings) i zmień:

- **Rodzina czcionki**
- **Rozmiar**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Wykresy na pulpicie są puste

To jest normalne, gdy:

- używasz wyłącznie **darmowych modeli** (wykresy kosztów będą puste)
- wybrany **filtr czasu** nie obejmuje okresu, w którym wykonywane były żądania — spróbuj ustawić **Wszystkie**, aby sprawdzić

Jeśli po wybraniu **Wszystkie** wykresy nadal są puste, sprawdź, czy wywołania pojawiają się na karcie [**Historia**](#history) lub w zakładce **Wszystkie wywołania**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Koszt pokazuje „nie dostępny” lub wygląda podejrzanie

Gdy korzystasz z modeli przez **OpenRouter**, aplikacja pokazuje rzeczywisty koszt raportowany przez OpenRouter.

W przypadku **innych dostawców** (OpenAI bezpośrednio, Anthropic bezpośrednio itp.), koszt jest szacowany na podstawie danych cenowych opublikowanych przez OpenRouter. Jeżeli dla modelu nie znaleziono odpowiadającej ceny, koszt będzie wyświetlany jako **nie dostępny** i nie zostanie dodany do całkowitego wyniku.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Łączny koszt nie zgadza się z rachunkiem dostawcy

Wszystkie dane dotyczące kosztów w aplikacji to **szacunki wyłącznie do celów informacyjnych**, a nie oficjalne rachunki.

Aby łączna suma była bliższa rzeczywistemu wydatkowi w OpenRouter, otwórz [**Ustawienia** > **Śledzenie kosztów**](#cost-tracking) i kliknij **Synchronizuj z użyciem klucza API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Strona Historia nie pojawia się w bocznym menu

Opcja **Zachowaj historię wykonań** może być wyłączona. Otwórz [**Ustawienia** > **Ustawienia ogólne**](#general-settings) i włącz ją. Zauważ, że włączenie tej opcji nie przywraca danych historycznych usuniętych wcześniej.

<br/>

<a id="web-app-session-expired"></a>
### Aplikacja internetowa: niespodziewanie przekierowuje do strony logowania

Twoja sesja mogła wygasnąć. Zaloguj się ponownie. Jeśli to się powtarza, sprawdź konfigurację serwera i czas trwania sesji.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Pulpit nie wyświetla danych innych użytkowników (wersja internetowa)

Tylko **administratorzy** mogą wyświetlać dane wszystkich użytkowników za pomocą filtru **Użytkownik**. Zwykli użytkownicy widzą wyłącznie swoją własną aktywność – jest to zamierzone zachowanie.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Zmieniłem prompt i straciłem edycje

Podczas edycji promptu zawsze kliknij **Zapisz**, zanim przejdziesz do **Powrót do działania**.

<br/><br/>

<a id="quick-tips"></a>
## Szybkie wskazówki

- Rozpocznij od [**Tłumaczenia**](#translate), aby upewnić się, że konfiguracja działa, zanim przejdziesz do [**Przepisywania**](#rewrite) lub [**Przekształcania**](#transform).
- Używaj [**Przepisywania**](#rewrite) do codziennych ulepszeń sformułowań.
- Używaj [**Przekształcania**](#transform), gdy potrzebujesz powtarzalnego przepływu pracy dla konkretnego zadania.
- Korzystaj z [**Pulpitu**](#dashboard), aby śledzić zużycie i koszty.
- Wykorzystuj [**Historię**](#history), by przeglądać poprzednie operacje razem z pełnym tekstem wejściowym i wyjściowym.
- Regularnie eksportuj prompty, jeśli tworzysz bibliotekę, którą chcesz zabezpieczyć (zobacz [Prompty do przekształcania](#transform-prompts)), lub jeśli chcesz ją udostępnić innym.

<br/><br/>

<a id="disclaimer"></a>

## Zrzeczenie odpowiedzialności

Nazwy produktów i ikony należą do ich odpowiednich właścicieli i są używane wyłącznie w celach identyfikacyjnych. Oprogramowanie to nie jest powiązane ani zalecane przez żadne z wymienionych marek.

<br/><br/>

<a id="license"></a>
## Licencja

Prawa autorskie © 2026 Waldemar Scudeller Jr.

[Licencja Apache 2.0](LICENSE)