---
translated_at: "2026-03-26T00:52:51.622Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt baner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Przewodnik użytkownika

<br/>

<a id="introduction"></a>
## Wprowadzenie

Transrewrt ułatwia pracę z tekstem na trzy główne sposoby:

- **Tłumacz** – przekształć tekst z jednego języka na inny.
- **Przepisz** – sformułuj tekst na nowo w różnym stylu, np. klarowniej, krócej lub bardziej formalnie.
- **Przekształć** – przetwórz tekst przy użyciu niestandardowych instrukcji sztucznej inteligencji zwanych promtami.

<br/>

Ten przewodnik wyjaśnia, jak korzystać z aplikacji po jej zainstalowaniu i uruchomieniu. Instrukcje dotyczące instalacji znajdują się w głównym pliku **[README](README.pl.md)**.

<br/>

> ℹ️ **UWAGA**<br/>
> Transrewrt jest dostępny jako aplikacja desktopowa dla systemów Windows i Linux, a także jako hostowana wersja internetowa. Niniejszy przewodnik skupia się na codziennym użytkowaniu aplikacji. Gdy dana funkcjonalność dotyczy wyłącznie jednej wersji, została odpowiednio oznaczona.

<small>**Przeczytaj w innych językach:** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Uwaga dotycząca tłumaczeń interfejsu i dokumentacji:** Wszystkie języki interfejsu oprócz oryginalnego angielskiego (UK) zostały przetłumaczone za pomocą modeli AI; język może być nieprecyzyjny lub zawierać błędy.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Spis treści** 

- [Przed rozpoczęciem](#before-you-start)
  - [Jak uzyskać darmowy klucz API OpenRouter (aplikacja desktopowa)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Rozpoczęcie pracy](#getting-started)
- [Główne części okna](#main-parts-of-the-window)
  - [Pasek boczny](#sidebar)
  - [Pasek narzędzi](#toolbar)
  - [Obszary wejścia i wyjścia](#input-and-output-panels)
- [Tłumaczenie](#translate)
  - [Tłumaczenie tekstu](#translate-text)
  - [Wybór języka](#language-selection)
  - [Przydatne ustawienia tłumaczenia](#helpful-translation-settings)
- [Przepisywanie](#rewrite)
- [Przekształcanie](#transform)
  - [Uruchamianie istniejącego promtu](#run-an-existing-prompt)
  - [Jeśli nie masz jeszcze promtów](#if-you-have-no-prompts-yet)
  - [Szybkie tworzenie promtu](#create-a-prompt-quickly)
  - [Edycja promtu](#edit-a-prompt)
  - [Testowanie promtu przed użyciem](#test-a-prompt-before-using-it)
- [Pulpit](#dashboard)
  - [Filtrowanie danych](#filter-the-data)
  - [Zakładki pulpitu](#dashboard-tabs)
  - [Eksport danych](#export-data)
  - [Usuwanie zapisanych rekordów dla modelu](#delete-stored-records-for-a-model)
- [Historia](#history)
  - [Filtrowanie danych](#filter-the-data-1)
  - [Eksport danych historii](#export-history-data)
- [Ustawienia](#settings)
  - [Ustawienia ogólne](#general-settings)
  - [Modele](#models)
  - [Języki](#languages)
  - [Śledzenie kosztów](#cost-tracking)
  - [Promty przekształcania](#transform-prompts)
  - [Użytkownicy](#users)
  - [Konfiguracja API](#api-config)
  - [O programie](#about)
- [Typowe problemy](#common-issues)
  - [Aplikacja nie tłumaczy, nie przepisuje ani nie przekształca tekstu](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Lista modeli jest pusta](#the-model-list-is-empty)
  - [Wynik jest zbyt powolny lub zbyt kosztowny](#the-result-is-too-slow-or-too-expensive)
  - [Interfejs wyświetlany jest w niewłaściwym języku](#the-interface-is-in-the-wrong-language)
  - [Tekst jest zbyt mały lub trudny do odczytania](#the-text-is-too-small-or-hard-to-read)
  - [Wykresy na pulpicie są puste](#dashboard-charts-are-empty)
  - [Koszt wyświetla „niedostępny” lub wydaje się niepoprawny](#cost-shows-not-available-or-seems-wrong)
  - [Łączny koszt nie zgadza się z rachunkiem dostawcy](#total-cost-does-not-match-my-provider-bill)
  - [Strona Historia brakuje na pasku bocznym](#the-history-page-is-missing-from-the-sidebar)
  - [Aplikacja internetowa: nieoczekiwane przekierowanie do strony logowania](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Pulpit nie pokazuje danych innych użytkowników (wersja internetowa)](#dashboard-shows-no-data-for-other-users-web)
  - [Zmieniłem promt i straciłem edycje](#i-changed-a-prompt-and-lost-the-edits)
- [Szybkie wskazówki](#quick-tips)
- [Zrzeczenie odpowiedzialności](#disclaimer)
- [Licencja](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Zanim zaczniesz

Aby korzystać z Transrewrt, musisz mieć dostęp do co najmniej jednego dostawcy AI. Obsługiwani dostawcy to: [OpenRouter](https://openrouter.ai) (agregujący wiele modeli), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras oraz [Ollama](https://ollama.com) dla modeli lokalnych.

Nie musisz wybierać modelu płatnego, aby rozpocząć. Gdy tylko dodasz swój klucz API OpenRouter, aplikacja automatycznie włącza wbudowaną **bezpłatną** opcję OpenRouter. Dzięki temu możesz natychmiast rozpocząć tłumaczenie, przepisywanie i przekształcanie tekstu. Alternatywnie możesz również uzyskać bezpłatny klucz API od Cerebras, Google, Groq albo Mistral AI.

Prościej mówiąc:

- **Model** to silnik AI, który wykonuje pracę. Modele są wyświetlane z **prefiksem dostawcy** (na przykład `openrouter/…`, `openai/…`, `ollama/…`).
- **Klucz API** (albo dla Ollama, **podstawowy adres URL**) to sposób, w jaki aplikacja komunikuje się z dostawcą.

Jeśli korzystasz z **aplikacji komputerowej**, dodaj klucze w sekcji [**Ustawienia** > **Konfiguracja API**](#api-config) dla każdego używanego dostawcy. W przypadku korzystania wyłącznie z OpenRouter, zobacz [Jak uzyskać klucz API](#how-to-get-an-api-key-desktop-app) poniżej. Jeśli nie chcesz korzystać z klucza API, możesz zainstalować Ollama (ze strony [ollama.com](https://ollama.com)) i używać lokalnych modeli, takich jak `translategemma:4b`.

Jeśli korzystasz z **wersji internetowej**, właściciel serwera konfiguruje dostawców za pomocą zmiennych środowiskowych, więc nie możesz wpisywać kluczy API bezpośrednio w aplikacji.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Jak uzyskać bezpłatny klucz API OpenRouter (aplikacja komputerowa)

Jeśli korzystasz z aplikacji komputerowej, wykonaj następujące kroki:

1. Wejdź do [OpenRouter](https://openrouter.ai) za pomocą przeglądarki internetowej.
2. Utwórz konto lub zaloguj się.
3. Otwórz stronę [Klucze](https://openrouter.ai/keys).
4. Kliknij przycisk, aby utworzyć nowy klucz API.
5. Nadaj kluczowi nazwę, dzięki której będziesz go mógł rozpoznać później.
6. Skopiuj nowy klucz API.
7. Wróć do Transrewrt i otwórz **Ustawienia** > **Konfiguracja API**.
8. Wklej klucz do pola **Klucz API OpenRouter** (w sekcji **Ustawienia** > **Konfiguracja API**).
9. Kliknij **Przetestuj klucz OpenRouter**, aby upewnić się, że działa.

<br/><br/>

<a id="getting-started"></a>
## Rozpoczynanie pracy

Jeśli używasz po raz pierwszy Transrewrt, postępuj zgodnie z tymi krokami:

1. Otwórz aplikację.
2. Wybierz swój **język interfejsu** z ikony globusa, jeśli jest to konieczne.
3. Jeśli korzystasz z **aplikacji komputerowej**, otwórz [**Ustawienia** > **Konfiguracja API**](#api-config), dodaj klucz API dla co najmniej jednego dostawcy (np. OpenRouter) i kliknij **Testuj**, aby zweryfikować działanie.
4. Otwórz [**Ustawienia** > **Modele**](#models) i dodaj jeden lub więcej modeli do sekcji **Wybrane modele**.
5. Otwórz [**Ustawienia** > **Języki**](#languages) i wybierz swoje **Najważniejsze języki**, jeśli chcesz, aby najczęściej używane języki pojawiały się na górze listy.
6. Przejdź do **Tłumacz** i przeprowadź proste tłumaczenie, aby potwierdzić, że wszystko działa.
7. Po tym, spróbuj **Przepisz** i następnie **Przekształć**.

Ta kolejność ma znaczenie. Pomaga to uniknąć najczęstszych problemów podczas pierwszego użycia: próby wykonania zadania przed ustawieniem działającego połączenia API lub wybrania modelu.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Główne części okna

Aplikacja dzieli się na trzy główne obszary:

- **Słup boczny** po lewej stronie.
- **Pasek narzędzi** u góry.
- **Obszar roboczy** w środku.

<br/>

<a id="sidebar"></a>
### Słup boczny

Użyj bocznego słupa, aby poruszać się po aplikacji. Możesz go zminimalizować, klikając ikonę obok logo aplikacji, aby uzyskać więcej miejsca.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/pl/sidebar.png" alt="Słup boczny aplikacji" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Tłumacz</strong> otwiera obszar roboczy tłumaczenia.</li><br/>
        <li><strong>Przepisz</strong> otwiera obszar roboczy edycji tekstu.</li><br/>
        <li><strong>Przekształć</strong> otwiera obszar roboczy niestandardowej instrukcji (promptu).</li><br/>
        <li><strong>Pulpit</strong> pokazuje informacje o użyciu i kosztach.</li><br/>
        <li><strong>Ustawienia</strong> otwiera panel ustawień.</li><br/>
        <li><strong>Historia</strong> pokazuje historię użycia wraz z tekstem wejściowym i wyjściowym.</li><br/>
        <li><strong>Użytkownik</strong> pokazuje nazwę zalogowanego użytkownika (tylko w wersji internetowej).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Pasek narzędzi

Pasek narzędzi zmienia się nieco w zależności od tego, gdzie się znajdujesz w aplikacji.

- Po lewej stronie pokazana jest nazwa bieżącej strony.
- Po prawej stronie znajduje się **wybór modelu** oraz kontrolka **języka interfejsu**.

**Wybór modelu** pozwala wybrać, jakiego silnika AI chcesz użyć w danej chwili.

  ![Wybór modelu](../images/screenshots/pl/model-selector.png)

Niektóre darmowe modele mogą nie zawsze być dostępne – czasem są wyłączone lub mają ograniczone wykorzystanie. W takim przypadku aplikacja automatycznie usunie taki model z listy dostępnych. Aby kontrolować, które modele się pojawiają, przejdź do [**Ustawienia** > **Modele**](#models) i zmodyfikuj swoją listę. Możesz również otworzyć ustawienia modelu bezpośrednio, klikając ikonę dostawcy po lewej stronie nazwy modelu na pasku narzędzi.

<br/>

Ikona **globusa + kod języka** pozwala zmienić język interfejsu aplikacji (takich elementów jak menu i przyciski). Nie zmienia to **języków tłumaczenia** używanych w zakładce **Tłumacz**.

  ![Wybór języka interfejsu](../images/screenshots/pl/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Obszary wejściowy i wyjściowy

Większość obszarów roboczych korzysta z lewego **obszaru wejściowego** oraz prawego **obszaru wyjściowego**.

Każdy obszar pokazuje również:

| **Wejściowy**                                                           | **Wyjściowy**                                                                                                                 |
|-------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| - Liczbę znaków <br/>- Liczb pack słów <br/>- Liczba akapitów  <br/>    | - Czas wykonania zadania<br/>- **TPS** (tokeny na sekundę)<br/>- Liczba znaków, słów i akapitów<br/>- Użyty model           |


Jeśli zastanawiasz się nad terminologią techniczną:

- **Token** oznacza niewielki fragment tekstu. Można to sobie wyobrazić jako część słowa lub krótkie słowo.
- **TPS** oznacza liczbę takich fragmentów tekstu przetworzonych przez model w ciągu jednej sekundy.

<br/>

Możesz również monitorować koszt każdej operacji (jeśli disponível) oraz łączny koszt, włączając opcję `Pokaż informacje o kosztach akcji` w [**Ustawienia** > **Ustawienia ogólne**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Tłumacz

Użyj funkcji **Tłumacz**, gdy chcesz przetłumaczyć tekst z jednego języka na inny.

![Obszar roboczy Tłumacza](../images/screenshots/pl/translate.png)

<br/>

<a id="translate-text"></a>
### Tłumaczenie tekstu

1. Otwórz **Tłumacz**.
2. Wybierz język w polu **Z**.
3. Wybierz język w polu **Na**.
4. Wybierz model na pasku narzędzi.
5. Wpisz lub wklej tekst do obszaru **Wejściowego**.
6. Kliknij **Przetłumacz**.
7. Przeczytaj wynik w obszarze **Wyjściowym**.
8. Skorzystaj z przycisku kopiowania, jeśli chcesz skopiować wynik.

<br/>

<a id="language-selection"></a>
### Wybór języka

- **Z** może być konkretnym językiem lub opcją **Wykryj język**.
- **Na** to język, do którego chcesz przetłumaczyć.

Twoje wybrane **Ulubione języki** pojawiają się u góry listy. Możesz je ustawić w [**Ustawienia** > **Języki**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Przydatne ustawienia tłumaczenia

W [**Ustawienia** > **Ustawienia ogólne**](#general-settings) możesz zmienić sposób działania tłumaczenia:

- **Automatyczne tłumaczenie po wklejeniu** uruchamia tłumaczenie natychmiast po wklejeniu tekstu.
- **Automatyczne kopiowanie wyniku do schowka** kopiuje wynik automatycznie po pomyślnym tłumaczeniu.
- **Tłumaczenie w czasie rzeczywistym (podczas pisania)** uruchamia tłumaczenie na bieżąco, podczas redagowania tekstu.
- **Limit czasowy (ms)** określa, jak długo aplikacja czeka, zanim uruchomi tłumaczenie w czasie rzeczywistym.
- **Enter** kontroluje, co się dzieje po wciśnięciu klawisza `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Popraw

Użyj **Popraw**, gdy chcesz ulepszyć styl tekstu, nie zmieniając jego głównego znaczenia.

![Obszar roboczy Popraw](../images/screenshots/pl/rewrite.png)

To przydatne przy:

- naprawianiu błędów ortograficznych i gramatycznych
- czyszczeniu i jasności tekstu
- nadawaniu mu bardziej formalnego lub potocznego charakteru
- skracaniu lub rozszerzaniu tekstu
- nadawaniu mu bardziej technicznego brzmienia

<br/>

> 💡 **Wskazówka**<br/>
> Gdy korzystasz z trybu "**Sprawdź pisownię i gramatykę**", w panelu wyjściowym pojawia się przycisk `Pokaż zmiany`. Kliknij ten przycisk, aby przełączać wyświetlanie poprawek – pokazywać lub ukrywać konkretne zmiany wprowadzone w twoim tekście.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>

## Przekształć

Użyj opcji **Przekształć**, gdy chcesz, by sztuczna inteligencja wykonała zadanie zgodnie z własnym zestawem instrukcji.

![Przestrzeń robocza Przekształć](../images/screenshots/pl/transform.png)

To najbardziej elastyczna część aplikacji. Możesz używać jej do zadań takich jak:

- podsumowywanie notatek
- zamiana szkiców tekstu na dopracowaną wiadomość e-mail
- wyciąganie kluczowych punktów
- konwersja tekstu do określonego formatu
- inne niestandardowe czynności na tekście wejściowym

<br/>

<a id="run-an-existing-prompt"></a>
### Uruchom istniejący prompt

1. Otwórz **Przekształć**.
2. Wybierz prompt z listy promptów.
3. Jeśli pojawi się pole **Język docelowy**, wybierz język, jeśli chcesz.
4. Wpisz lub wklej tekst do pola **Wejście**.
5. Kliknij **Przekształć**.
6. Przeczytaj wynik w polu **Wyjście**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Jeśli jeszcze nie masz żadnych promptów

Jeśli lista promptów jest pusta, kliknij **Załaduj przykładowe prompty**. Spowoduje to dodanie wbudowanych przykładów, dzięki czemu możesz szybko rozpocząć pracę.

<br/>

> ℹ️ **UWAGA**<br/>
> Przykładowe prompty są dostarczane w języku angielskim. Po załadowaniu możesz edytować prompt i użyć opcji **Tłumacz prompt**, aby przetłumaczyć go na swój język.

<br/>

<a id="create-a-prompt-quickly"></a>
### Szybkie tworzenie promptu

Najszybszy sposób na stworzenie promptu to:

1. Kliknij **Nowy prompt**.
2. Kliknij **Wygeneruj prompt**.
3. Opisz, co ma robić prompt.
4. Wybierz model.
5. Pozwól aplikacji stworzyć wersję roboczą.
6. Przejrzyj wersję i kliknij **Zapisz**.

![Wygeneruj prompt](../images/screenshots/pl/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Edytowanie promptu

Gdy tworzysz lub edytujesz prompt, edytor pojawia się po lewej stronie, a po prawej pojawia się obszar testowy.

![Edytor promptu w Przekształć](../images/screenshots/pl/transform-prompt-edit.png)

Główne pola to:

- **Nazwa promptu**: nazwa pokazywana na liście promptów.
- **Instrukcje promptu (opcjonalne)**: krótki komentarz wyświetlany użytkownikowi podczas uruchamiania promptu.
- **Rola modelu**: ogólna rola przypisana do AI, np. „Masz być pomocnym asystentem.”
- **Instrukcje modelu (po jednej w wierszu)**: konkretne zasady, których AI ma przestrzegać.
- **Opis wyniku**: krótki opis efektu, np. „podsumowanie” lub „przepisanie”.
- **Temperatura (0,0 → 1,0)**: sposób działania modelu; zobacz poniżej.
- **Zapytaj o język docelowy**: dodaje selektor języka docelowego podczas uruchamiania promptu.

Jeśli pojęcie techniczne **Temperatura** jest dla ciebie nowe, pomyśl o tym tak:

- **Niższa** temperatura daje bardziej stabilne i przewidywalne wyniki.
- **Wyższa** temperatura daje większą różnorodność i kreatywność.

Możesz również użyć:

- **`Wygeneruj prompt`**, aby utworzyć nową wersję roboczą na podstawie prostego opisu
- **`Ulepsz prompt`**, aby poprawić istniejący prompt
- **`Tłumacz prompt`**, aby przetłumaczyć pola promptu

<br/>

> ⚠️ **OSTRZEŻENIE**<br/>
> Kliknij **`Zapisz`**, zanim klikniesz **`Wróć do uruchamiania`**. Jeśli wrócisz bez zapisania, Twoje zmiany zostaną utracone.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Przetestuj prompt przed użyciem

Panel testowy po prawej stronie pozwala wypróbować prompt przy użyciu przykładowego tekstu przed wykorzystaniem go w codziennej pracy.

Jest to przydatne wtedy, gdy:

- tworzysz nowy prompt
- porównujesz dwie wersje promptu
- chcesz sprawdzić ton, długość lub format wyniku

<br/>

> ℹ️ **UWAGA**<br/>
> Możesz eksportować i importować zapisane prompty w sekcji [**Ustawienia** > **Prompty Przekształć**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Panel główny

Użyj opcji **Panel główny**, aby zobaczyć, w jakim stopniu korzystasz z aplikacji i jakie to ponosisz koszty (dla płatnych modeli).

![Podsumowanie panelu głównego](../images/screenshots/pl/dashboard-summary.png)


<br/>

> ℹ️ **UWAGA**<br/>
> Jeśli używasz wyłącznie modeli darmowych, wykresy dotyczące kosztów będą puste.

<br/>

<a id="filter-the-data"></a>
### Filtruj dane

Użyj przycisków filtrów u góry, aby zmienić zakres czasu.

![Filtry panelu głównego](../images/screenshots/pl/dashboard-filter.png)

<br/>

> ℹ️ **UWAGA**<br/>
> Filtr **Użytkownik** jest widoczny tylko dla administratorów w wersji internetowej. Zwykli użytkownicy nie będą widzieć tego filtra, a w aplikacji desktopowej filtr ten jest niedostępny.

<br/>

<a id="dashboard-tabs"></a>

### Karty pulpitu

- **Podsumowanie** daje przegląd wykorzystania i kosztów.
- **Według użycia** dzieli aktywność według języka tłumaczenia, trybu przepisywania oraz wykorzystanych zachęt transformacyjnych.
- **Według modelu** pokazuje, których modeli użyto oraz jakie one kosztowały.
- **Według dnia** przedstawia dzienne sumy.
- **Wszystkie wywołania** pokazuje pełen dziennik wywołań i pozwala go wyeksportować.

<br/>

<a id="export-data"></a>
### Eksport danych

Za pomocą tabel na pulpicie można wyeksportować dane w formacie:

- **JSON**
- **CSV**
- **XLSX**

Jest to przydatne, jeśli chcesz przeanalizować aktywność poza aplikacją lub udostępnić raport.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Usuwanie zapisanych rekordów dla modelu

W zakładkach **Według modelu** lub **Wszystkie wywołania** możesz usunąć zapisane rekordy dla danego modelu, klikając ikonę „kosza”.

> ⚠️ **OSTRZEŻENIE**<br/>
> Usunięcie zapisanych rekordów jest nieodwracalne. Używaj tej funkcji tylko wtedy, gdy jesteś pewien, że nie potrzebujesz już tej historii.

Aby usunąć wszystkie dane lub rekordy według wieku, przejdź do [**Ustawienia** > **Śledzenie kosztów**](#cost-tracking). Tam znajdziesz opcje usuwania wszystkich danych lub wyłącznie danych starszych od określonej daty.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Historia

Kliknij **Historia**, aby zobaczyć historię Twoich działań wewnątrz **Transrewrt**, w tym dane wejściowe i wyjściowe każdej operacji.

![Strona Historia](../images/screenshots/pl/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrowanie danych

**Historia** korzysta z tych samych filtrów co strona **Pulpit**. Użyj ich, aby wybrać zakres czasowy.

![Filtry pulpitu](../images/screenshots/pl/dashboard-filter.png)

<br/>

> ℹ️ **UWAGA**<br/>
> Filtr **Użytkownik** jest widoczny tylko administratorom w wersji internetowej. Zwykli użytkownicy nie widzą tego filtra, a w aplikacji komputerowej nie jest on dostępny.

<br/>

<a id="export-history-data"></a>
### Eksport danych historii

Strona Historia może wyeksportować przefiltrowane dane w formatach:

- **JSON**
- **CSV**
- **XLSX**

Jest to przydatne, jeśli chcesz przeanalizować aktywność poza aplikacją lub udostępnić raport.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Ustawienia

Otwórz **Ustawienia** z bocznego panelu, aby dostosować działanie aplikacji.

Dostępne zakładki zależą od platformy i Twojej roli:

  | Zakładka               | Wersja komputerowa | Wersja internetowa (admin) | Wersja internetowa (zwykły użytkownik) |
  |------------------------|:------------------:|:--------------------------:|:--------------------------------------:|
  | Ustawienia ogólne      |        tak         |             tak             |                   tak                   |
  | Modele                 |        tak         |             tak             |                   tak                   |
  | Języki                 |        tak         |             tak             |                   tak                   |
  | Śledzenie kosztów      |        tak         |             tak             |                    —                    |
  | Zachęty transformacyjne|        tak         |             tak             |                   tak                   |
  | Użytkownicy            |         —          |             tak             |                    —                    |
  | Konfiguracja API       |        tak         |             tak             |                    —                    |
  | O programie            |        tak         |             tak             |                   tak                   |

<br/>

> ℹ️ **UWAGA**<br/>
> W wersji internetowej każdy użytkownik ma własną konfigurację. Takie ustawienia jak wybrane modele, języki, opcje ogólne i zachęty transformacyjne są zapisywane osobno dla każdego użytkownika. Wprowadzone przez ciebie zmiany nie wpływają na innych użytkowników.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Ustawienia ogólne

Użyj zakładki **Ustawienia ogólne**, aby kontrolować zachowanie podczas pisania, czy szczegóły wykonywania są zapisywane w **Historii** oraz wygląd aplikacji.

**Zachowanie**

- **Działanie klawisza ENTER** określa, czy klawisz `Enter` uruchamia zadanie, czy wstawia nową linię.
- **Automatyczne tłumaczenie po wklejeniu** uruchamia tłumaczenie zaraz po wklejeniu tekstu.
- **Automatyczne kopiowanie wyniku do schowka** automatycznie kopiuje pomyślne wyniki.
- **Tłumaczenie w czasie rzeczywistym (podczas pisania)** tłumaczy tekst w chwili wpisywania.
- **Limit czasu (ms)** ustawia czas oczekiwania na tłumaczenie w czasie rzeczywistym.

**Historia**

- **Zachowaj historię wykonywania** określa, czy każde tłumaczenie, przepisywanie i transformacja powinny zapisywać **tekst wejściowy i wyjściowy** do widoku [**Historia**](#history) w panelu bocznym. Wyłączenie tej opcji spowoduje pytanie o potwierdzenie; po potwierdzeniu zapisany tekst historii zostanie usunięty z bazy danych.
- **Usuń dane historii** pozwala usunąć zapisany tekst według czasu jego powstania (np. starsze niż kilka miesięcy lub **wszystkie dane (wyczyść)**) przy użyciu opcji **Usuń dane**. Ta funkcja dotyczy wyłącznie zapisanego tekstu dla widoku **Historia**; **nie** powoduje usunięcia danych kosztów lub sum użycia. Aby usunąć lub zmniejszyć dane o **kosztach**, skorzystaj z [**Ustawienia** > **Śledzenie kosztów**](#cost-tracking).

**Wygląd**

- **Wyświetl informacje o kosztach na akcjach** kontroluje wyświetlanie kosztu na operację (jeśli dostępne) i całkowitego kosztu na panelach wyników Tłumacz, Przepisz i Przekształć.
- **Liczba cyfr ułamkowych kosztu** zmienia sposób wyświetlania miejsc dziesiętnych kosztu.
- **Tylko wersja internetowa:** **pokaż margines wokół aplikacji** dodaje dodatkową przestrzeń wokół interfejsu.
- **Rodzina czcionek** zmienia czcionkę w panelach tekstowych.
- **Rozmiar** zmienia rozmiar czcionki.


<br/>

<a id="models"></a>

### Modele

Użyj **Ustawienia** > **Modele**, aby wybrać, które modele będą wyświetlane na pasku narzędzi.

![Zakładka Ustawienia - Modele](../images/screenshots/pl/settings-models.png)

Strona zawiera dwie listy:

- **Dostępne modele** po lewej stronie
- **Wybrane modele** po prawej stronie

Przydatne elementy sterujące to:

- **Wyszukaj modele...** – aby znaleźć model według nazwy
- „Chipsy” **Dostawcy**, aby zawęzić listę do jednego silnika (OpenRouter, OpenAI, Ollama, …)
- **Tylko darmowe** – aby wyświetlić jedynie darmowe modele
- **Odśwież**, aby ponownie załadować listę
- **Rozwiń wszystko** i **Zwiń wszystko** – przy sortowaniu według dostawcy

Identyfikatory modeli zawierają prefiks dostawcy (np. `openrouter/…` vs `openai/…`). Etykiety, takie jak **OpenAI (OpenRouter)** vs **OpenAI (bezpośrednio)**, pokazują sposób kierowania ruchu.

> ℹ️ **UWAGA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) to model-router, a nie ogólny model do czatu: jego odpowiedź to dane JSON opisujące ciała żądań API OpenRouter (np. tablica `requests` z `model` i `messages`). Jeśli użyjesz go do opcji **Tłumacz**, **Przepisz** lub **Przekształć**, panel wyników pokaże ten kod JSON zamiast gotowego tekstu. Wybierz normalny tekstowy model na te zadania. Zobacz [stronę modelu Body Builder](https://openrouter.ai/openrouter/bodybuilder) na OpenRouter.

Działania:

 - Aby dodać model, kliknij **Dodaj** lub dowolne miejsce w pozycji.

 - Aby usunąć model, kliknij **X** obok niego w **Wybrane modele** lub **Wybrany** w pozycji na liście Dostępne modele.

 - Aby wyczyścić listę, kliknij **Odznacz wszystkie**. Wymagany darmowy model pozostanie na liście.

<br/>

> ℹ️ **UWAGA**<br/>
> Jeśli nie chcesz od razu dodawać środków na OpenRouter, zacznij od włączenia opcji **Tylko darmowe** i wybierz darmowe modele (nie wymaga podania karty kredytowej). Możesz również używać Ollama, aby uruchamiać modele lokalnie bez klucza API.

<br/>

<a id="languages"></a>
### Języki

Użyj **Ustawienia** > **Języki**, aby zarządzać listami języków używanymi w aplikacji.

- **Najważniejsze języki** są przypięte na górze list języków w opcjach **Tłumacz** i **Przekształć**.
- **Język niestandardowy** pozwala dodać język nieobecny na wbudowanej liście.

Po dodaniu języka niestandardowego pojawi się on na listach wyboru języka obok wbudowanych opcji.

<br/>

<a id="cost-tracking"></a>
### Śledzenie kosztów

Użyj **Ustawienia** > **Śledzenie kosztów**, aby zarządzać informacjami o kosztach.

- **Całkowity koszt** pokazuje aktualny podsumowany koszt.
- **Kopiuj wartość** kopiuje ten podsumowany koszt do schowka.
- **Zeruj koszt** resetuje zapisaną wartość do zera.
- **Synchronizuj z użyciem klucza API** ustawia całkowitą wartość zgodnie z raportowanym zużyciem konta OpenRouter (tylko OpenRouter).
- **Użycie klucza API** pokazuje szczegóły zużycia OpenRouter, jeśli dostępne.
- **Usuń dane o kosztach** usuwa wszystkie dane lub tylko te starsze niż wybrana data.

**Śledzenie kosztów:** Gdy korzystasz z modeli OpenRouter, aplikacja pokazuje rzeczywiste zużycie i wydatki na podstawie informacji o kosztach z OpenRouter. Dla wszystkich innych dostawców aplikacja szacuje koszty na podstawie cen opublikowanych przez OpenRouter; jeśli cena jest niedostępna, szacowany koszt może wynosić zero.

<br/>

> ℹ️ **UWAGA**<br/>
> **Wszystkie kwoty są szacunkowe i podane wyłącznie w celach informacyjnych — nie stanowią oficjalnych faktur ani rachunków.**


<br/>

> ⚠️ **OSTRZEŻENIE**<br/>
> Usunięcie danych jest nieodwracalne. Przed usunięciem upewnij się, że masz kopię zapasową lub wyeksportuj dane za pomocą [**Historii**](#history) lub [**Pulpitu nawigacyjnego** > **Wszystkie wywołania**](#dashboard-tabs), w przeciwnym razie zostaną trwale utracone. Cała historia wejść/wyjść związana z każdym wpisem wywołania API zostanie również usunięta.

<br/>

<a id="transform-prompts"></a>
### Wzorce przekształcania

Użyj **Ustawienia** > **Wzorce przekształcania**, aby zarządzać wzorcami zbiorowo.

Możesz:

- przeglądać zapisane wzorce
- usuwać wzorce
- importować wzorce z pliku
- eksportować wzorce na potrzeby kopii zapasowych lub udostępniania

<br/>

<a id="users"></a>
### Użytkownicy

Użyj pozycji **Użytkownicy**, aby zarządzać kontami w wersji internetowej. Możesz dodawać użytkowników, aktualizować ich dane, resetować hasła i usuwać konta.

<br/>

<a id="api-config"></a>
### Konfiguracja API

Obsługiwani dostawcy to: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras oraz **Ollama** (modele lokalne przez podstawowy URL). Należy konfigurować jedynie tych dostawców, których chcesz używać.

**Aplikacja internetowa: tylko administrator**

Klucze API są konfigurowane przez zmienne środowiskowe systemu lub Dockera — nie są wprowadzane przez interfejs webowy. Na tej stronie możesz zobaczyć, które dostawcy mają skonfigurowany klucz, oraz przetestować każdego, klikając przycisk **`Testuj`**.

<br/>

> ℹ️ **UWAGA**<br/>
> Aby zmienić klucz API, zaktualizuj zmienną środowiskową w konfiguracji systemu lub Dockera i ponownie uruchom serwer lub kontener.

<br/>

**Aplikacja komputerowa**

Użyj **Konfiguracja API**, aby zapisać klucze API dla każdego dostawcy, którego używasz. Dla Ollama wprowadź **podstawowy URL** zamiast klucza API.

<br/>

> 💡 **Porada** <br/>
> Jeśli nie chcesz używać klucza API ani płacić za zużycie, możesz [pobrać Ollama](https://ollama.com) i uruchamiać modele (np. `translategemma:4b`) lokalnie na swoim komputerze całkowicie za darmo. Alternatywnie możesz założyć darmowe konto na OpenRouter (bez konieczności podawania karty kredytowej), aby korzystać z darmowych modeli, lub uzyskać darmowy klucz API od Cerebras, Google, Groq lub Mistral AI.

<br/>

- Dodawaj tylko tych dostawców, których potrzebujesz. W **Ustawieniach** > **Modele**, każdy identyfikator modelu zaczyna się od nazwy dostawcy (np. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Aby dodać klucz API, wpisz jego wartość w polu tekstowym i kliknij **`Zapisz`**. Aby zastąpić istniejący klucz, kliknij **`Edytuj`**. Aby sprawdzić działanie klucza, kliknij **`Testuj`**. W przypadku podstawowego URL Ollama zawsze kliknij **`Testuj`**, aby sprawdzić połączenie.

<br/>

> ℹ️ **UWAGA**<br/>
> Nie możesz zobaczyć bieżącej wartości klucza API. Możesz go tylko zastąpić, używając przycisku **`Edytuj`**.
> Klucze API są przechowywane w postaci zaszyfrowanej w konfiguracji.

<br/>

<a id="about"></a>

### Informacje

Zakładka **Informacje** pokazuje:

- nazwę aplikacji
- numer wersji
- datę kompilacji
- link do repozytorium projektu

<br/><br/>

<a id="common-issues"></a>
## Częste problemy

Jeśli coś nie działa zgodnie z oczekiwaniami, najpierw sprawdź poniższe punkty.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikacja nie tłumaczy, nie przepisuje ani nie przekształca tekstu

Sprawdź, czy:

- wybrałeś model w pasku narzędziowym
- przynajmniej jeden model znajduje się na liście w [**Ustawienia** > **Modele**](#models)
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
- dodaj jeden lub więcej modeli do **Wybrane modele**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Wynik jest zbyt powolny lub zbyt drogi

Wypróbuj co najmniej jedną z tych opcji:

- wybierz inny model
- skróć treść wprowadzanego tekstu
- wyłącz **Tłumaczenie w czasie rzeczywistym (podczas pisania)** w [**Ustawienia** > **Ustawienia ogólne**](#general-settings)
- użyj darmowych modeli do prostych zadań (zobacz [Modele](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Interfejs wyświetla się w niewłaściwym języku

Kliknij ikonę globusa w [pasku narzędzi](#toolbar) i wybierz preferowany **język interfejsu**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Tekst jest zbyt mały lub trudny do odczytania

Otwórz [**Ustawienia** > **Ustawienia ogólne**](#general-settings) i zmień:

- **Rodzina czcionki**
- **Rozmiar**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Wykresy na pulpicie są puste

Jest to normalne, gdy:

- używasz tylko **modeli darmowych** (wykresy kosztów będą puste)
- wybrany **filtr czasowy** nie obejmuje okresu, w którym wykonano połączenia — spróbuj ustawienia **Wszystkie**, aby sprawdzić

Jeśli wykresy nadal są puste po wybraniu opcji **Wszystkie**, upewnij się, że połączenia pojawiają się w zakładce [**Historia**](#history) lub **Wszystkie połączenia**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Koszt wyświetla „nie dostępny” lub wygląda na nieprawidłowy

Jeśli korzystasz z modeli przez **OpenRouter**, aplikacja pokazuje rzeczywiste wydatki raportowane przez OpenRouter.

W przypadku **innych dostawców** (OpenAI bezpośrednio, Anthropic bezpośrednio itp.) koszt jest szacowany na podstawie danych cenowych udostępnionych przez OpenRouter. Jeśli nie znajdzie się pasującej ceny dla modelu, koszt ukaże się jako **nie dostępny** i nie zostanie dodany do całkowitego sumowania.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Całkowity koszt nie zgadza się z rachunkiem dostawcy

Wszystkie wartości kosztów w aplikacji to **szacunki wyłącznie do celów informacyjnych**, a nie oficjalne rachunki rozliczeniowe.

Aby przybliżyć całkowity koszt rzeczywistym wydatkom w OpenRouter, otwórz [**Ustawienia** > **Śledzenie kosztów**](#cost-tracking) i kliknij **Synchronizuj z użyciem klucza API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Strona Historia brakuje w pasku bocznym

Opcja **Zachowaj historię wykonania** może być wyłączona. Otwórz [**Ustawienia** > **Ustawienia ogólne**](#general-settings) i włącz ją. Uwaga: włączenie tej opcji nie przywraca wcześniej usuniętych danych historii.

<br/>

<a id="web-app-session-expired"></a>
### Aplikacja internetowa: nieoczekiwanie przekierowuje do strony logowania

Twoja sesja mogła upłynąć. Zaloguj się ponownie. Jeśli dzieje się to często, sprawdź konfigurację serwera pod kątem ustawień czasu trwania sesji.

<br/>

<a id="dashboard-shows-no-data-for-for-other-users"></a>
### Pulpit nie pokazuje danych innych użytkowników (wersja internetowa)

Tylko **administratorzy** mogą wyświetlać dane wszystkich użytkowników za pomocą filtra **Użytkownik**. Zwykli użytkownicy widzą tylko swoje aktywności — to zaplanowane działanie systemu.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Zmieniłem prompt i straciłem edycje

Podczas edycji promptu zawsze klikaj **Zapisz**, zanim klikniesz **Powrót do uruchomienia**.

<br/><br/>

<a id="quick-tips"></a>
## Szybkie wskazówki

- Zacznij od [**Tłumaczenia**](#translate), aby upewnić się, że twoja konfiguracja działa, zanim przejdziesz do [**Przepisywania**](#rewrite) lub [**Transformacji**](#transform).
- Używaj [**Przepisywania**](#rewrite) do codziennych poprawek sformułowań.
- Używaj [**Transformacji**](#transform), gdy potrzebujesz powtarzalnego procesu dla konkretnego zadania.
- Używaj [**Pulpitu**](#dashboard), aby nadzorować użycie i koszty.
- Wykorzystaj [**Historię**](#history), aby przejrzeć poprzednie operacje i pełne teksty wejściowe/wyjściowe.
- Regularnie eksportuj prompty, jeśli tworzysz bibliotekę promptów, którą chcesz bezpiecznie przechowywać (zobacz [Prompty do transformacji](#transform-prompts)) lub chcesz ją udostępnić innym.

<br/><br/>

<a id="disclaimer"></a>

## Zrzeczenie odpowiedzialności

Nazwy produktów i ikony należą do ich odpowiednich właścicieli i są używane wyłącznie w celach identyfikacyjnych. Oprogramowanie to nie jest powiązane z żadnym z wymienionych marek ani nie jest przez nie zaopiniowane.

<br/><br/>

<a id="license"></a>
## Licencja

Prawa autorskie © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)