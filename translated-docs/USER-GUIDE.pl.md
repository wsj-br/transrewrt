---
translated_at: "2026-03-29T01:55:32.663Z"
source_hash: "8981b8db163153bfc443046fa20a49b33c92b9feebdee302f6ef60852f273472"
source_mtime: "2026-03-29T01:41:58.368Z"
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>

# Przewodnik dla użytkownika

<br/>

<a id="introduction"></a>

## Wprowadzenie

Transrewrt pomaga w pracy z tekstem na trzy główne sposoby:

- **Tłumacz** – konwertuj tekst z jednego języka na inny.
- **Przepisz** – sformułuj tekst na nowo w innym stylu, np. bardziej zrozumiale, zwięźlej lub bardziej oficjalnie.
- **Przekształć** – przetwarzaj tekst za pomocą niestandardowych instrukcji AI zwanych promptami.

<br/>

Ten przewodnik wyjaśnia, jak korzystać z aplikacji po jej zainstalowaniu i uruchomieniu. Aby zapoznać się z instrukcjami instalacji, zapoznaj się z głównym plikiem **[README](README.pl.md)**.

<br/>

> ℹ️ **UWAGA**<br/>
> Transrewrt jest dostępny jako aplikacja desktopowa dla systemów Windows i Linux oraz jako samodzielnie hostowana aplikacja webowa. Ten przewodnik koncentruje się na codziennym użytkowaniu aplikacji. Tam, gdzie coś dotyczy wyłącznie jednej wersji, jest to wyraźnie oznaczone.

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](translated-docs/US

ER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Uwaga dotycząca tłumaczeń interfejsu i dokumentacji:** Wszystkie języki interfejsu inne niż oryginalna wersja angielska (Wielka Brytania)
> zostały przetłumaczone przy użyciu modeli AI; sformułowania mogą być niedokładne lub zawierać błędy.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Spis treści**

- [Zanim zaczniesz](#before-you-start)
  - [Jak uzyskać bezpłatny klucz API OpenRouter (aplikacja desktopowa)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Rozpoczęcie pracy](#getting-started)
- [Główne części okna](#main-parts-of-the-window)
  - [Pasek boczny](#sidebar)
  - [Pasek narzędzi](#toolbar)
  - [Panele wejściowy i wyjściowy](#input-and-output-panels)
- [Tłumaczenie](#translate)
  - [Tłumaczenie tekstu](#translate-text)
  - [Wybór języka](#language-selection)
  - [Przydatne ustawienia tłumaczenia](#helpful-translation-settings)
- [Przepisywanie](#rewrite)
- [Przekształcanie](#transform)
  - [Uruchamianie istniejącego promptu](#run-an-existing-prompt)
  - [Jeśli nie masz jeszcze żadnych promptów](#if-you-have-no-prompts-yet)
  - [Szybkie tworzenie promptu](#create-a-prompt-quickly)
  - [Edycja promptu](#edit-a-prompt)
  - [Testowanie promptu przed użyciem](#test-a-prompt-before-using-it)
- [Pulpit nawigacyjny](#dashboard)
  - [Filtrowanie danych](#filter-the-data)
  - [Karty pulpitu nawigacyjnego](#dashboard-tabs)
  - [Eksport danych](#export-data)

- [Usuń zapisane rekordy dla modelu](#delete-stored-records-for-a-model)
- [Historia](#history)
  - [Filtruj dane](#filter-the-data-1)
  - [Eksportuj dane historii](#export-history-data)
- [Ustawienia](#settings)
  - [Ustawienia ogólne](#general-settings)
  - [Modele](#models)
  - [Języki](#languages)
  - [Śledzenie kosztów](#cost-tracking)
  - [Przekształcanie promptów](#transform-prompts)
  - [Użytkownicy](#users)
  - [Konfiguracja API](#api-config)
  - [O programie](#about)
- [Typowe problemy](#common-issues)
  - [Aplikacja nie tłumaczy, nie przepisuje ani nie przekształca tekstu](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Lista modeli jest pusta](#the-model-list-is-empty)
  - [Wynik jest zbyt powolny lub zbyt drogi](#the-result-is-too-slow-or-too-expensive)
  - [Interfejs jest w niewłaściwym języku](#the-interface-is-in-the-wrong-language)
  - [Tekst jest zbyt mały lub trudny do odczytania](#the-text-is-too-small-or-hard-to-read)
  - [Wykresy na pulpicie są puste](#dashboard-charts-are-empty)

- [Koszt wyświetla się jako „nie dostępny” lub wydaje się nieprawidłowy](#cost-shows-not-available-or-seems-wrong)
  - [Całkowity koszt nie pokrywa się z rachunkiem od dostawcy](#total-cost-does-not-match-my-provider-bill)
  - [Strona Historia brakuje w pasku bocznym](#the-history-page-is-missing-from-the-sidebar)
  - [Aplikacja internetowa: nieoczekiwane przekierowanie do strony logowania](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Administrator internetowy: zapomniano lub utracono hasło](#web-admin-forgot-or-lost-a-password)
  - [Na tablicy nie są wyświetlane dane innych użytkowników (wersja internetowa)](#dashboard-shows-no-data-for-other-users-web)
  - [Zmieniłem/am monit i utracono edycje](#i-changed-a-prompt-and-lost-the-edits)
- [Szybkie wskazówki](#quick-tips)
- [Zastrzeżenie](#disclaimer)
- [Licencja](#license)

<!-- END doctoc wygenerowane TOC, proszę zachować ten komentarz, aby umożliwić automatyczną aktualizację -->

<br/><br/>

<a id="before-you-start"></a>

## Przed rozpoczęciem

Aby korzystać z Transrewrt, potrzebujesz dostępu do co najmniej jednego dostawcy sztucznej inteligencji. Obsługiwani dostawcy to: [OpenRouter](https://openrouter.ai) (agregujący wiele modeli), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras oraz [Ollama](https://ollama.com) dla lokalnych modeli.

Nie musisz wybierać płatnego modelu, aby rozpocząć. Gdy tylko dodasz klucz API OpenRouter, aplikacja automatycznie włącza wbudowaną **bezpłatną** opcję OpenRouter. Umożliwia to natychmiastowe rozpoczęcie tłumaczenia, przepisywania i przekształcania tekstu. Alternatywnie możesz również uzyskać bezpłatny klucz API od Cerebras, Google, Groq lub Mistral AI.

Prościej mówiąc:

- **Model** to silnik AI wykonujący pracę. Modele są wymieniane z **prefiksem dostawcy** (na przykład `openrouter/…`, `openai/…`, `ollama/…`).
- **Klucz API** (lub w przypadku Ollama – **podstawowy adres URL**) to sposób, w jaki aplikacja łączy się z danym dostawcą.

Jeśli korzystasz z **aplikacji desktopowej**, dodaj klucze w sekcji [**Ustawienia** > **Konfiguracja API**](#api-config) dla każdego dostawcy, którego używasz. W przypadku korzystania wyłącznie z OpenRouter, zobacz poniższą sekcję [Jak uzyskać klucz API](#how-to-get-an-api-key-desktop-app). Jeśli nie chcesz korzystać z klucza API, możesz zainstalować Ollama (ze strony [ollama.com](https://ollama.com)) i używać lokalnych modeli, takich jak `translategemma:4b`.

Jeśli korzystasz z **wersji internetowej**, administrator serwera konfiguruje dostawców za pomocą zmiennych środowiskowych, więc nie możesz bezpośrednio wprowadzić kluczy API w aplikacji.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### Jak uzyskać darmowy klucz API OpenRouter (aplikacja desktopowa)

Jeśli korzystasz z aplikacji desktopowej, wykonaj następujące kroki:

1. Przejdź do [OpenRouter](https://openrouter.ai) w przeglądarce internetowej.
2. Utwórz konto lub zaloguj się.
3. Otwórz stronę [Keys](https://openrouter.ai/keys).
4. Kliknij przycisk, aby utworzyć nowy klucz API.
5. Nadaj kluczowi nazwę, dzięki której będziesz mógł go później rozpoznać.
6. Skopiuj nowy klucz API.
7. Wróć do Transrewrt i otwórz **Ustawienia** > **Konfiguracja API**.
8. Wklej klucz w polu **Klucz API OpenRouter** (w sekcji **Ustawienia** > **Konfiguracja API**).
9. Kliknij przycisk **Testuj klucz OpenRouter**, aby upewnić się, że działa.

<br/><br/>

<a id="getting-started"></a>

## Wprowadzenie

Jeśli pierwszy raz korzystasz z Transrewrt, postępuj zgodnie z poniższą kolejnością:

1. Otwórz aplikację.
2. W razie potrzeby wybierz swój **język interfejsu** za pomocą ikony kuli ziemskiej.
3. Jeśli korzystasz z **aplikacji desktopowej**, otwórz [**Ustawienia** > **Konfiguracja API**](#api-config), dodaj klucz API dla co najmniej jednego dostawcy (na przykład OpenRouter) i kliknij **Test**, aby upewnić się, że działa.
4. Otwórz [**Ustawienia** > **Modele**](#models) i dodaj jeden lub więcej modeli do **Wybranych modeli**.
5. Otwórz [**Ustawienia** > **Języki**](#languages) i wybierz swoje **Najważniejsze języki**, jeśli chcesz, by najczęściej używane języki pojawiały się na liście jako pierwsze.
6. Przejdź do **Tłumaczenia** i wykonaj proste tłumaczenie, aby potwierdzić, że wszystko działa.
7. Gdy to zadziała, spróbuj opcji **Przepisz** a następnie **Przekształć**.

Kolejność ma znaczenie. Zapobiega ona najczęstszemu problemowi podczas pierwszego użycia: próbie uruchomienia zadania przed skonfigurowaniem działającego połączenia API lub wybranego modelu.

<br/><br/>

<a id="main-parts-of-the-window"></a>

## Główne części okna

Aplikacja jest podzielona na trzy główne obszary:

- **Pasek boczny** po lewej stronie.
- **Pasek narzędzi** u góry.
- **Obszar roboczy** w środku.

<br/>

<a id="sidebar"></a>

### Pasek boczny

Użyj paska bocznego, aby poruszać się po aplikacji. Możesz go zwinąć, klikając ikonę obok logotypu aplikacji, aby uzyskać więcej miejsca.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/pl/sidebar.png" alt="Pasek boczny aplikacji" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Tłumacz</strong> otwiera obszar roboczy tłumaczenia.</li><br/>
        <li><strong>Przepisz</strong> otwiera obszar roboczy przepisywania.</li><br/>
        <li><strong>Przekształć</strong> otwiera obszar roboczy niestandardowych zachęt.</li><br/>
        <li><strong>Panel</strong> pokazuje informacje o wykorzystaniu i kosztach.</li><br/>
        <li><strong>Ustawienia</strong> otwierają panel ustawień.</li><br/>
        <li><strong>Historia</strong> pokazuje historię użycia wraz z tekstami wejściowymi i wyjściowymi.</li><br/>
        <li><strong>Użytkownik</strong> pokazuje nazwę zalogowanego użytkownika (tylko w wersji internetowej).</li>
      </ul>

</td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Pasek narzędzi

Pasek narzędzi nieznacznie zmienia się w zależności od tego, gdzie jesteś w aplikacji.

- Po lewej stronie wyświetla się nazwa aktualnej strony.
- Po prawej stronie znajdują się **selektor modelu** i kontrolka **języka interfejsu**.

**Selektor modelu** umożliwia wybór silnika AI do bieżącego zadania.

  ![Selektor modelu](../images/screenshots/pl/model-selector.png)

Niektóre darmowe modele mogą nie być zawsze dostępne – czasem są wyłączone lub mają ograniczoną możliwość użytkowania. W takim przypadku aplikacja automatycznie usunie dany model z listy dostępnych. Aby kontrolować, które modele się pojawiają, przejdź do sekcji [**Ustawienia** > **Modele**](#models) i edytuj swoją listę modeli.  
Możesz również otworzyć ustawienia modelu bezpośrednio, klikając ikonę dostawcy znajdującą się po lewej stronie nazwy modelu na pasku narzędzi.

<br/>

**Ikona globusa i kod języka** zmienia język interfejsu aplikacji, np. menu i przyciski. **Nie** zmienia to języków tłumaczenia używanych w trybie **Tłumacz**.

![Wybór języka interfejsu](../images/screenshots/pl/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Okna wejściowe i wyjściowe

Większość obszarów roboczych używa lewego okna **Wejściowego** i prawego okna **Wyjściowego**.

Każde okno wyświetla również:

| **Wejście**                                                          | **Wyjście**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Liczba znaków <br/>- Liczba słów <br/>- Liczba akapitów   <br/> | - Czas trwania zadania<br/>- **TPS** (tokeny na sekundę)<br/>- Liczba znaków, słów i akapitów<br/>- Użyty model |

Jeśli zastanawiasz się nad terminami technicznymi:

- **Token** oznacza niewielki fragment tekstu. Można o nim myśleć jako o części słowa lub krótkim słowie.
- **TPS** oznacza liczbę przetwarzanych fragmentów tekstu przez model na sekundę.

<br/>

Możesz również monitorować koszt każdej operacji (jeśli dostępny) oraz łączny koszt, włączając opcję `Pokaż informacje o kosztach w działaniach` w [**Ustawieniach** > **Ustawienia ogólne**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>

## Tłumacz

Użyj opcji **Tłumacz**, gdy chcesz przetłumaczyć tekst z jednego języka na inny.

![Obszar roboczy Tłumacza](../images/screenshots/pl/translate.png)

<br/>

<a id="translate-text"></a>

### Tłumaczenie tekstu

1. Otwórz **Tłumacz**.
2. Wybierz język w polu **Z**.
3. Wybierz język w polu **Na**.
4. Wybierz model na pasku narzędzi.
5. Wpisz lub wklej tekst w polu **Wejście**.
6. Kliknij **Tłumacz**.
7. Przeczytaj wynik w polu **Wyjście**.
8. Skorzystaj z przycisku kopiowania, jeśli chcesz skopiować wynik.

<br/>

<a id="language-selection"></a>

### Wybór języka

- **Z** może być konkretnym językiem lub **Wykryj język**.
- **Na** to język, w którym chcesz uzyskać wynik.

Wybrane przez Ciebie **Najważniejsze języki** pojawiają się u góry listy. Możesz je ustawić w sekcji [**Ustawienia** > **Języki**](#languages).

<br/>

<a id="helpful-translation-settings"></a>

### Przydatne ustawienia tłumaczenia

W sekcji [**Ustawienia** > **Ustawienia ogólne**](#general-settings) możesz zmienić sposób działania tłumaczenia:

- **Tłumacz automatycznie po wklejeniu** — tłumaczy tekst natychmiast po jego wklejeniu.
- **Kopiuj wynik do schowka automatycznie** — automatycznie kopiuje wynik po pomyślnym tłumaczeniu.
- **Tłumaczenie w czasie rzeczywistym (podczas pisania)** — tłumaczy tekst w trakcie jego wpisywania.
- **Limit czasu (ms)** — określa, jak długo aplikacja czeka przed uruchomieniem tłumaczenia w czasie rzeczywistym.
- **Enter** — określa działanie przycisku `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Przepisz

Użyj opcji **Przepisz**, gdy chcesz poprawić sformułowanie tekstu, nie zmieniając jego głównego znaczenia.

![Przestrzeń robocza Przepisz](../images/screenshots/pl/rewrite.png)

To przydatne w przypadku:

- poprawiania pisowni i gramatyki (**Sprawdź pisownię i gramatykę**)
- poprawiania jasności tekstu (**Popraw czytelność**)
- generowania kilku różnorodnych sformułowań jednorazowo (**Wersje alternatywne**)
- nadawania tekstowi charakteru bardziej formalnego lub mniej formalnego (**Formalny** / **Nieformalny**)
- skracania lub rozbudowywania tekstu (**Skróć** / **Rozszerz**)
- nadawania tekstowi charakteru bardziej technicznego (**Uporządkuj technicznie**)

<br/>

> 💡 **WSKAZÓWKA**<br/>
> Gdy używasz trybu "**Sprawdź pisownię i gramatykę**", w panelu wyników pojawia się przełącznik **Pokaż zmiany** (obok przycisku **Kopiuj**).
> Włącz lub wyłącz go, aby wyświetlić lub ukryć konkretne korekty wprowadzone w tekście.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformacja

Użyj opcji **Transformacja**, gdy chcesz, aby sztuczna inteligencja wykonała niestandardowy zestaw instrukcji.

![Obszar roboczy Transformacji](../images/screenshots/pl/transform.png)

To najbardziej elastyczna część aplikacji. Możesz jej używać do wykonywania takich zadań, jak:

- podsumowywanie notatek
- zamiana nieuporządkowanego tekstu na dopracowaną wiadomość e-mail
- wyodrębnianie kluczowych punktów
- konwersja tekstu do określonego formatu
- wszelkie inne niestandardowe czynności wykonywane na podanym tekście

<br/>

<a id="run-an-existing-prompt"></a>

### Uruchamianie istniejącego promptu

1. Otwórz **Transformuj**.
2. Wybierz prompt z listy promptów.
3. Jeśli pojawi się pole **Język docelowy**, wybierz język, jeśli tego chcesz.
4. Wpisz lub wklej tekst w polu **Wejście**.
5. Kliknij przycisk **Transformuj**.
6. Przeczytaj wynik w polu **Wyjście**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Jeśli nie masz jeszcze żadnych zachęt

Jeśli Twoja lista zachęt jest pusta, kliknij **Załaduj przykładowe zachęty** w obszarze roboczym Transform. Ta sama opcja jest zawsze dostępna w sekcji [**Ustawienia** > **Zachęty transformacji**](#transform-prompts) w wierszu importu/eksportu. Obie opcje dodają przykłady wbudowane, dzięki czemu możesz szybko rozpocząć pracę.

<br/>

> ℹ️ **UWAGA**<br/>
> Przykładowe zachęty są dostarczane po angielsku. Po ich załadowaniu możesz edytować zachętę i skorzystać z opcji **Przetłumacz zachętę**, aby przetłumaczyć ją na swój język.

<br/>

<a id="create-a-prompt-quickly"></a>

### Szybkie tworzenie zachęty

Najszybszy sposób na stworzenie zachęty to:

1. Kliknij przycisk **Nowa zachęta**.
2. Kliknij przycisk **Wygeneruj zachętę**.
3. Opisz, co ma robić zachęta.
4. Wybierz model.
5. Pozwól aplikacji utworzyć szkic.
6. Przejrzyj szkic i kliknij **Zapisz**.

![Wygeneruj zachętę](../images/screenshots/pl/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### Edytowanie zachęty

Gdy tworzysz lub edytujesz zachętę, edytor pojawia się po lewej stronie, a po prawej pojawia się obszar testowy.

![Edytor transformacji zachęty](../images/screenshots/pl/transform-prompt-edit.png)

Główne pola to:

- **Nazwa zachęty**: nazwa wyświetlana na liście zachęt.
- **Instrukcje zachęty (opcjonalne)**: krótki komunikat wyświetlany użytkownikowi podczas uruchamiania zachęty.
- **Rola modelu**: ogólna rola przypisana AI, np. „Jesteś pomocnym asystentem.”
- **Instrukcje modelu (jedna linia – jedna instrukcja)**: konkretne zasady, których ma przestrzegać AI.
- **Opis wyniku**: krótki opis wyniku, np. „streszczenie” lub „przepisanie”.
- **Temperatura (0,0 → 1,0)**: sposób działania modelu; zobacz poniżej.
- **Zapytaj o język docelowy**: dodaje selektor języka docelowego podczas uruchamiania zachęty.

Jeśli pojęcie techniczne **Temperatura** jest dla Ciebie nowe, pomyśl o tym następująco:

- **Niższa** temperatura daje bardziej stałe i przewidywalne wyniki.

- **Wyższa** temperatura daje większą różnorodność i kreatywność.

Możesz także użyć:

- **`Wygeneruj prompt`**, aby utworzyć nowy projekt na podstawie prostego opisu
- **`Ulepsz prompt`**, aby dopracować istniejący prompt
- **`Przetłumacz prompt`**, aby przetłumaczyć pola promptu

<br/>

> ⚠️ **OSTRZEŻENIE**<br/>
> Kliknij **`Zapisz`**, zanim klikniesz **`Powrót do uruchomienia`**. Jeśli wrócisz bez zapisania, Twoje zmiany zostaną utracone.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Przetestuj monit przed jego użyciem

Panel testowy po prawej stronie pozwala wypróbować Twój monit przy użyciu przykładowego tekstu, zanim zaczniesz używać go w codziennej pracy.

Jest to przydatne, gdy:

- tworzysz nowy monit,
- porównujesz dwie wersje jednego promptu,
- chcesz sprawdzić ton, długość lub format wyjścia.

<br/>

> ℹ️ **UWAGA**<br/>
> Możesz eksportować i importować zapisane prompty w sekcji [**Ustawienia** > **Transformuj prompty**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>

## Panel główny

Użyj **Panelu głównego**, aby zobaczyć, w jakim stopniu korzystasz z aplikacji i jakie to ponosi koszty (w przypadku modeli płatnych).

![Podsumowanie panelu głównego](../images/screenshots/pl/dashboard-summary.png)


<br/>

> ℹ️ **UWAGA**<br/>
> Jeśli używasz wyłącznie modeli **darmowych**, kwoty **kosztów** mogą wynosić zero, a podsumowania skupione na kosztach mogą wyglądać pusto. Na kartach **Podsumowanie**, **Użycie w czasie** oraz **Użycie według modelu** nadal wyświetlane są **liczby wywołań** (tłumaczenia, przepisywania i przekształcania), o ile miało miejsce działanie w wybranym okresie.

<br/>

<a id="filter-the-data"></a>

### Filtrowanie danych

Użyj przycisków filtrów u góry, aby zmienić zakres czasu.

![Filtry pulpitu nawigacyjnego](../images/screenshots/pl/dashboard-filter.png)

<br/>

> ℹ️ **UWAGA**<br/>
> Filtr **Użytkownik** jest widoczny tylko dla administratorów w wersji internetowej. Zwykli użytkownicy nie widzą tego filtra, a w aplikacji komputerowej nie jest on dostępny.

<br/>

<a id="dashboard-tabs"></a>

### Karty na tablicy rozdzielczej

- **Podsumowanie** zawiera przegląd wykorzystania i kosztów. Obejmuje **Użycie w czasie** (skumulowane wykresy **liczby wywołań** według dni dla tłumaczeń, przepisywania i transformacji) oraz **Użycie według modelu** (łączna **liczba wywołań według modeli**, w tym transformacja).
- **Według użycia** dzieli aktywności według języka tłumaczenia, trybu przepisywania i polecenia transformacji.
- **Według modelu** pokazuje, których modeli użyto i jakie one kosztowały.
- **Według dnia** przedstawia dzienne podsumowania.
- **Wszystkie wywołania** wyświetla pełny dziennik wywołań i umożliwia jego eksport.

<br/>

<a id="export-data"></a>

### Eksportowanie danych

Tabele w panelu administracyjnym umożliwiają eksport danych w formatach:

- **JSON**
- **CSV**
- **XLSX**

Jest to przydatne, jeśli chcesz przeanalizować aktywność poza aplikacją lub udostępnić raport.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Usuwanie przechowywanych rekordów dla modelu

W sekcji **Według modelu** lub **Wszystkie wywołania** możesz usunąć przechowywane rekordy dla danego modelu, klikając ikonę „kosza”.

> ⚠️ **OSTRZEŻENIE**<br/>
> Usunięcie przechowywanych rekordów jest nieodwracalne. Używaj tej opcji tylko wtedy, gdy jesteś pewien, że nie potrzebujesz już tej historii.

Aby usunąć wszystkie dane lub rekordy na podstawie ich wieku, przejdź do [**Ustawienia** > **Śledzenie kosztów**](#cost-tracking). Znajdziesz tam opcje usuwania wszystkich przechowywanych danych lub tylko tych starszych niż określona data.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Historia

Kliknij **Historia**, aby wyświetlić historię działań wewnątrz **Transrewrt**, w tym dane wejściowe i wyjściowe każdej operacji.

![Strona Historia](../images/screenshots/pl/history.png)

<br/>

<a id="filter-the-history"></a>

### Filtrowanie danych

**Historia** używa tych samych filtrów co strona **Pulpit nawigacyjny**. Użyj ich, aby wybrać zakres czasu.

![Filtry pulpitu nawigacyjnego](../images/screenshots/pl/dashboard-filter.png)

<br/>

> ℹ️ **UWAGA**<br/>
> Filtr **Użytkownik** jest widoczny tylko dla administratorów w wersji internetowej. Zwykli użytkownicy nie widzą tego filtra, a w aplikacji komputerowej nie jest on dostępny.

<br/>

<a id="export-history-data"></a>

### Eksportowanie danych historii

Strona historii umożliwia eksportowanie przefiltrowanych danych w formatach:

- **JSON**
- **CSV**
- **XLSX**

Jest to przydatne, gdy chcesz przejrzeć aktywność poza aplikacją lub udostępnić raport.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>

## Ustawienia

Otwórz **Ustawienia** w bocznym pasku, aby dostosować sposób działania aplikacji.

Dostępne zakładki zależą od platformy i Twojej roli:

| Karta | Komputer stacjonarny | Strona internetowa (administrator) | Strona internetowa (zwykły użytkownik) |
|---|:---:|:---:|:---:|
| Ustawienia ogólne | tak | tak | tak |
| Modele | tak | tak | tak |
| Języki | tak | tak | tak |
| Śledzenie kosztów | tak | tak | — |
| Powiadomienia przekształcające | tak | tak | tak |
| Użytkownicy | — | tak | — |
| Konfiguracja API | tak | tak | — |
| O programie | tak | tak | tak |

<br/>

> ℹ️ **UWAGA**<br/>
> W wersji internetowej każdy użytkownik posiada własną konfigurację. Ustawienia takie jak wybrane modele, języki, opcje ogólne oraz prompty transformacyjne są przechowywane osobno dla każdego użytkownika. Wprowadzone przez Ciebie zmiany nie wpływają na innych użytkowników.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>

### Ustawienia ogólne

Użyj **Ustawień ogólnych**, aby kontrolować zachowanie pisania, czy szczegółowe informacje o działaniach są zapisywane w **Historii**, oraz wygląd aplikacji.

**Zachowanie**

- **Działanie klawisza ENTER** pozwala wybrać, czy klawisz `Enter` uruchamia zadanie, czy wstawia nową linię.
- **Automatyczne tłumaczenie podczas wklejania** uruchamia tłumaczenie natychmiast po wklejeniu tekstu.
- **Automatyczne kopiowanie wyniku do schowka** automatycznie kopiuje pomyślne wyniki.
- **Tłumaczenie w czasie rzeczywistym (podczas pisania)** przetłumacza tekst w miarę jego wpisywania.
- **Limit czasu (ms)** ustawia czas oczekiwania dla tłumaczenia w czasie rzeczywistym.

**Historia**

- **Zachowaj historię działania** decyduje, czy każde tłumaczenie, przepisanie i przekształcenie będzie zapisywać **tekst wejściowy i wyjściowy** w okienku bocznym [**Historia**](#history). Wyłączenie tej opcji spowoduje wyświetlenie prośby o potwierdzenie; po potwierdzeniu zapisany tekst historii zostanie usunięty z bazy danych.

- **Usuwanie danych historii** pozwala usunąć przechowywany tekst według daty utworzenia (np. starsze niż kilka miesięcy lub **wszystkie dane (wyczyść)**) za pomocą przycisku **Usuń dane**. Dotyczy to wyłącznie zapisanego tekstu operacji widocznego w zakładce **Historia**; **nie** powoduje usunięcia danych o kosztach ani całkowitego zużycia. Aby usunąć lub zredukować dane dotyczące **kosztów**, skorzystaj z sekcji [**Ustawienia** > **Śledzenie kosztów**](#cost-tracking).

**Wygląd**

- **Wyświetlanie informacji o kosztach w akcjach** kontroluje widoczność cen za pojedynczą operację (jeśli są dostępne) oraz łącznych kosztów na panelach wyników Tłumaczenia, Przepisania i Transformacji.
- **Liczba cyfr po przecinku w kosztach** zmienia sposób wyświetlania dziesiętnych wartości kosztów.
- **Tylko przeglądarka internetowa:** opcja **dodaj margines wokół aplikacji** powoduje dodanie dodatkowej przestrzeni wokół interfejsu.
- **Rodzina czcionek** zmienia czcionkę używaną w panelach tekstowych.
- **Rozmiar** zmienia wielkość czcionki.

**Kopia zapasowa konfiguracji**

- **Dołącz dane użycia do kopii zapasowej** — po włączeniu tej opcji archiwum ZIP będzie również zawierać historię operacji oraz dane wywołań API.

- **Kopia zapasowa konfiguracji** — tworzy pojedynczy plik ZIP (`transrewrt-config-backup-RRRR-MM-DD_GGMMSS.zip` według UTC domyślnie) zawierający `config.json`, `state.json`, opcjonalny klucz szyfrowania, użytkowników, ustawienia, niestandardowe zachęty oraz dane użycia (jeśli wyraziłeś na to zgodę). Po pomyślnej kopii zapisanej pojawi się potwierdzenie z nazwą zapisanego pliku.
- **Przywrócenie z kopii zapasowej** — otwiera najpierw **okno potwierdzenia**. Wybierz plik ZIP z kopią zapasową w ramach okna (**Przeglądaj** / wybór pliku lub przeciągnij i upuść, tam gdzie obsługiwane), a następnie przejrzyj opcje:
  - **Przywróć dane użycia** — zaimportuj historię/użycie z kopii, jeśli została uwzględniona podczas tworzenia kopii; pozostaw wyłączone, jeśli chcesz tylko przywrócić ustawienia i zachęty.
  - **Wyczyść stare dane użycia przed przywróceniem** — usunięcie istniejącej historii/użycia w tej instalacji przed zastosowaniem kopii (opcjonalne; użyj, gdy chcesz wyczyścić dane i całkowicie je zastąpić).

Kopie zapasowe utworzone w wersji internetowej lub komputerowej mogą być przywracane w wersji przeciwnej. Przy przywracaniu kopii zapasowej komputera w wersji internetowej dane zostaną przywrócone do użytkownika administratora.


<br/>

<a id="models"></a>

### Modele

Użyj opcji **Ustawienia** > **Modele**, aby wybrać, które modele pojawią się na pasku narzędziowym.

![Karta modeli w ustawieniach](../images/screenshots/pl/settings-models.png)

Strona zawiera dwie listy:

- **Dostępne modele** po lewej stronie
- **Wybrane modele** po prawej stronie

Przydatne kontrolki to m.in.:

- **Wyszukaj modele…** – aby znaleźć model po nazwie
- Kafelki **Dostawcy** – aby zawęzić listę do jednego silnika (OpenRouter, OpenAI, Ollama, …)
- **Tylko darmowe** – aby wyświetlić wyłącznie modele darmowe
- **Odśwież** – aby przeładować listę
- **Rozwiń wszystkie** i **Zwiń wszystkie** – podczas sortowania według dostawcy

Identyfikatory modeli zawierają prefiks dostawcy (np. `openrouter/…` lub `openai/…`). Etykiety, takie jak **OpenAI (OpenRouter)** czy **OpenAI (direct)**, informują, w jaki sposób kierowane jest ruch.  

> ℹ️ **UWAGA**<br/>

> **OpenRouter Body Builder** (`openrouter/bodybuilder`) to model routera, a nie ogólny model czatu: jego odpowiedź to JSON opisujący treści żądań API OpenRouter (na przykład tablica `requests` z `model` i `messages`). Jeśli użyjesz go do opcji **Tłumacz**, **Przepisz** lub **Przekształć**, panel wyników wyświetli ten kod JSON zamiast gotowego tekstu. Wybierz normalny model tekstowy do tych zadań. Zobacz [stronę modelu Body Builder](https://openrouter.ai/openrouter/bodybuilder) na OpenRouter.

Działania:

 - Aby dodać model, kliknij **Dodaj** lub w dowolne miejsce w polu wpisu.

 - Aby usunąć model, kliknij **X** obok niego w sekcji **Wybrane modele** lub **Wybrane** w polu dostępnego modelu.

 - Aby wyczyścić listę, kliknij **Odznacz wszystkie**. Wymagany darmowy model pozostanie na liście.

<br/>

> ℹ️ **UWAGA**<br/>

> Jeśli nie chcesz od razu dodawać środków do OpenRouter, rozpocznij od włączenia opcji **Tylko darmowe** i wybierz modele darmowe (nie wymagane dane karty kredytowej). Możesz również użyć Ollama do uruchamiania modeli lokalnie bez klucza API.

<br/>

<a id="languages"></a>

### Języki

Użyj opcji **Ustawienia** > **Języki**, aby zarządzać listami języków używanymi w aplikacji.

- **Najważniejsze języki** są przypinane na samej górze list języków w sekcjach **Tłumaczenie** i **Transformacja**.
- **Własny język** pozwala dodać język, którego nie ma na wbudowanej liście.

Po dodaniu własnego języka pojawi się on w selektorach języków obok domyślnych opcji.

<br/>

<a id="cost-tracking"></a>

### Śledzenie kosztów

Użyj opcji **Ustawienia** > **Śledzenie kosztów**, aby zarządzać informacjami o kosztach.

- **Całkowity koszt** pokazuje bieżącą sumę.
- **Kopiuj wartość** kopiuje łączną kwotę do schowka.
- **Zresetuj koszt** ustawia zapisaną całkowitą kwotę na zero.
- **Synchronizuj z użyciem klucza API** ustawia sumę zgodnie z danymi użycia zgłoszonymi przez Twoje konto OpenRouter (tylko OpenRouter).
- **Użycie klucza API** pokazuje szczegóły użycia OpenRouter, jeśli dostępne.
- **Usuń dane kosztów** usuwa wszystkie dane lub tylko wpisy starsze niż wybrana data.


**Śledzenie kosztów:** Gdy korzystasz z modeli OpenRouter, aplikacja pokazuje rzeczywiste użycie i wydatki na podstawie informacji o kosztach pochodzących z OpenRouter. Dla pozostałych dostawców aplikacja oszacowuje koszty na podstawie cen opublikowanych przez OpenRouter. Jeżeli cena jest niedostępna, oszacowanie może wynosić zero.

<br/>

> ℹ️ **UWAGA**<br/>
> **Wszystkie kwoty są szacunkowe i podane wyłącznie w celach informacyjnych — nie stanowią oficjalnych faktur rozliczeniowych.**


<br/>

> ⚠️ **OSTRZEŻENIE**<br/>

> Usunięcie danych nie może zostać cofnięte. Przed usunięciem upewnij się, że utworzyłeś kopię zapasową danych lub wyeksportuj je poprzez [**Historię**](#history)  
> lub [**Panel** > **Wszystkie połączenia**](#dashboard-tabs), w przeciwnym razie zostaną one trwale utracone.  
> Zostanie również usunięta cała historia wejść i wyjść związana z każdym wpisem wywołania API.


<br/>

<a id="transform-prompts"></a>

### Przekształcanie zachęt

Użyj opcji **Ustawienia** > **Przekształć zachęty**, aby zarządzać zachętami zbiorowo.

Możesz:

- przeglądać zapisane zachęty
- usuwać zachęty
- importować zachęty z pliku
- eksportować zachęty w celu archiwizacji lub udostępniania
- ładować przykładowe zachęty do listy zachęt

<br/>

<a id="users"></a>

### Użytkownicy

Użyj opcji **Użytkownicy**, aby zarządzać kontami użytkowników w wersji internetowej. Możesz dodawać użytkowników, aktualizować ich dane, resetować hasła oraz usuwać konta.

<br/>

<a id="api-config"></a>

### Konfiguracja API

Obsługiwane providery to: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras oraz **Ollama** (modele lokalne poprzez podstawowy URL). Konfiguracja jest wymagana jedynie dla wykorzystywanych przez Ciebie dostawców.

**Aplikacja internetowa: tylko administrator**

Klucze API są konfigurowane za pomocą zmiennych środowiskowych systemu lub Dockera — nie są wprowadzane w interfejsie WWW. Na tej stronie można sprawdzić, które providery mają skonfigurowany klucz, oraz przetestować każdy z nich, klikając przycisk **`Test`**.

<br/>

> ℹ️ **UWAGA**<br/>
> Aby zmienić klucz API, zaktualizuj zmienną środowiskową w konfiguracji systemu lub Dockera i uruchom ponownie serwer lub kontener.

> ℹ️ **UWAGA**<br/>

> **Kopie zapasowe konfiguracji** (zobacz [**Ustawienia ogólne** → Kopia zapasowa konfiguracji](#general-settings)) mogą zawierać **rozwikłane** klucze dostawców wewnątrz pliku `config.json` w archiwum ZIP. Przywrócenie takiego archiwum ZIP **nie** kopiuje tych kluczy z powrotem do pliku konfiguracyjnego serwera — aktywne klucze nadal pochodzą ze środowiska i istniejącego stanu plików, jak opisano wyżej.

<br/>

**Aplikacja desktopowa**

Użyj **Konfiguracji API**, aby przechowywać klucze API dla każdego używanego dostawcy. W przypadku Ollama wprowadź **podstawowy adres URL** zamiast klucza API.


<br/>

> 💡 **Wskazówka** <br/>
> Jeśli nie chcesz używać klucza API ani płacić za wykorzystanie, możesz [pobrać Ollama](https://ollama.com) i uruchamiać modele (takie jak `translategemma:4b`) lokalnie na swoim komputerze całkowicie za darmo. Alternatywnie, możesz utworzyć darmowe konto OpenRouter (bez konieczności podawania danych karty kredytowej), aby korzystać z ich darmowych modeli, lub uzyskać klucz API za darmo od Cerebras, Google, Groq lub Mistral AI.

<br/>

- Dodaj tylko dostawców, których potrzebujesz. W **Ustawieniach** > **Modele** nazwa każdego modelu rozpoczyna się od nazwy dostawcy (na przykład `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Aby dodać klucz API, wpisz jego wartość w polu tekstowym i kliknij **`Zapisz`**. Aby zastąpić istniejący klucz, kliknij **`Edytuj`**. Aby sprawdzić, czy klucz działa, kliknij **`Testuj`**. W przypadku adresu URL podstawowego Ollama zawsze kliknij **`Testuj`**, aby sprawdzić połączenie.

<br/>

> ℹ️ **UWAGA**<br/>
> Nie możesz zobaczyć aktualnej wartości klucza API. Możesz ją jedynie zastąpić, korzystając z przycisku **`Edytuj`**.
> Klucze API są przechowywane w postaci zaszyfrowanej w konfiguracji.

<br/>

<a id="about"></a>

### Informacje

Na karcie **Informacje** wyświetlane są:

- nazwa aplikacji
- numer wersji
- data kompilacji
- link do repozytorium projektu

<br/><br/>

<a id="common-issues"></a>

## Częste problemy

Jeśli coś nie działa tak, jak powinno, najpierw sprawdź następujące punkty.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>

### Aplikacja nie będzie tłumaczyć, przepisywać ani transformować tekstu

Sprawdź, czy:

- wybrano model na pasku narzędziowym,
- przynajmniej jeden model znajduje się na liście w [**Ustawienia** > **Modele**](#models),
- konfiguracja API działa poprawnie.

Jeśli korzystasz z aplikacji na komputer:

1. Otwórz [**Ustawienia** > **Konfiguracja API**](#api-config).
2. Sprawdź, czy co najmniej jeden klucz API został zapisany.
3. Kliknij przycisk **Testuj** obok dostawcy, aby potwierdzić, że klucz działa.

<br/>

<a id="the-model-list-is-empty"></a>

### Lista modeli jest pusta

Otwórz [**Ustawienia** > **Modele**](#models) i kliknij przycisk **Odśwież**.

W razie potrzeby:

- wyszukaj model
- włącz opcję **Tylko darmowe**
- dodaj jeden lub więcej modeli do sekcji **Wybrane modele**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>

### Wynik jest zbyt powolny lub zbyt drogi

Wypróbuj jedną lub więcej z poniższych opcji:

- wybierz inny model
- użyj krótszego tekstu wejściowego
- wyłącz opcję **Tłumaczenie w czasie rzeczywistym (podczas pisania)** w zakładce [**Ustawienia** > **Ustawienia ogólne**](#general-settings)
- używaj darmowych modeli do prostych zadań (zobacz [Modele](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### Interfejs jest w niewłaściwym języku

Kliknij ikonę globusa na [pasku narzędzi](#toolbar) i wybierz preferowany **język interfejsu**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>

### Tekst jest zbyt mały lub trudny do odczytania

Otwórz [**Ustawienia** > **Ustawienia ogólne**](#general-settings) i zmień:

- **Rodzina czcionek**
- **Rozmiar**

<br/>

<a id="dashboard-charts-are-empty"></a>

### Wykresy na pulpicie są puste

To jest normalne, gdy:

- korzystasz wyłącznie z **modeli darmowych** i przeglądasz dane dotyczące **kosztów** (mogą one wynosić zero); wykresy liczby wywołań dotyczących **użycia** w zakładce **Podsumowanie** nadal wymagają danych z wybranego okresu
- wybrany **filtr czasu** nie obejmuje okresu, w którym wykonano wywołania — spróbuj ustawienia **Wszystkie**, aby sprawdzić

Jeśli po wybraniu opcji **Wszystkie** wykresy nadal są puste, upewnij się, że wywołania pojawiają się w zakładce [**Historia**](#history) lub w zakładce **Wszystkie wywołania**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Koszt pokazuje „nie dostępny” lub wydaje się nieprawidłowy

Gdy korzystasz z modeli przez **OpenRouter**, aplikacja pokazuje rzeczywiste wydatki raportowane przez OpenRouter.

W przypadku **innych dostawców** (bezpośrednie OpenAI, bezpośrednie Anthropic itp.) koszt jest szacowany na podstawie danych cenowych publikowanych przez OpenRouter. Jeśli nie zostanie znaleziona odpowiednia cena dla modelu, koszt zostanie wyświetlony jako **nie dostępny** i nie zostanie dodany do całkowitego podsumowania.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### Całkowity koszt nie zgadza się z rachunkiem dostawcy

Wszystkie kwoty kosztów w aplikacji to **szacunki wyłącznie do celów informacyjnych**, a nie oficjalne rachunki.

Aby przybliżyć całkowity koszt rzeczywistym wydatkom w OpenRouter, otwórz [**Ustawienia** > **Śledzenie kosztów**](#cost-tracking) i kliknij **Synchronizuj z wykorzystaniem klucza API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### Strona Historia jest nieobecna w pasku bocznym

Opcja **Zachowuj historię wykonania** może być wyłączona. Otwórz [**Ustawienia** > **Ustawienia ogólne**](#general-settings) i włącz tę opcję. Pamiętaj, że jej włączenie nie przywraca wcześniej usuniętych danych historii.

<br/>

<a id="web-app-session-expired"></a>

### Aplikacja internetowa: nieoczekiwanie przekierowana do strony logowania

Twoja sesja mogła wygasnąć. Zaloguj się ponownie. Jeśli problem występuje często, sprawdź konfigurację serwera pod kątem ustawień czasu trwania sesji.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Panel administracyjny w sieci: zapomnianie lub utracenie hasła

Dotyczy to **samodzielnie hostowanej aplikacji sieciowej** (Docker), a nie aplikacji komputerowej (Electron).

- Jeśli inny administrator może wciąż się zalogować, może przejść do [**Ustawienia** > **Użytkownicy**](#users), wybrać konto i ustawić tam **nowe hasło**.
- Jeśli jesteś **zablokowany**, ale posiadasz dostęp **przez powłokę** do maszyny lub kontenera, zresetuj hasło za pomocą narzędzia dołączanego do obrazu (zamień `transrewrt`, jeśli zmieniłeś nazwę domyślną, a hasło umieść w cudzysłowie, jeśli zawiera spacje lub znaki specjalne):

```bash
docker exec transrewrt reset-web-password '<nazwa-użytkownika>' '<nowe-hasło>'
```

Domyślna nazwa konta administratora to `admin`, jeśli nie utworzyłeś innych kont. Gdy podasz tylko jeden argument, będzie on traktowany jako nowe hasło dla użytkownika `admin`.

Jeśli uruchamiasz aplikację z **kodu źródłowego** zamiast z Docker, użyj:

```bash
pnpm run reset-web-password -- <nazwa-użytkownika> <nowe-hasło>

Skrypt aktualizuje rekord użytkownika w bazie danych SQLite (oraz może utworzyć użytkownika `admin`, jeśli ten brakuje). Po zresetowaniu zaloguj się przy użyciu nowego hasła.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### W kokpicie nie są wyświetlane dane dla innych użytkowników (wersja internetowa)

Tylko **administratorzy** mogą przeglądać dane wszystkich użytkowników za pomocą filtra **Użytkownik**. Zwykli użytkownicy widzą wyłącznie swoje własne działania – jest to zaplanowana funkcja.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### Zmieniłem tekst wskazówki i utraciłem edycje

Podczas edytowania wskazówki zawsze kliknij **Zapisz**, zanim przejdziesz do **Wróć do uruchomienia**.

<br/><br/>

<a id="quick-tips"></a>

## Szybkie wskazówki

- Rozpocznij od [**Tłumaczenia**](#translate), aby upewnić się, że Twoja konfiguracja działa, zanim przejdziesz do [**Przepisywania**](#rewrite) lub [**Przekształcania**](#transform).
- Używaj [**Przepisywania**](#rewrite) do codziennych ulepszeń sformułowań.
- Wykorzystuj [**Przekształcanie**](#transform), gdy potrzebujesz powtarzalnego przepływu pracy dla konkretnego zadania.
- Skorzystaj z [**Panelu kontrolnego**](#dashboard), jeśli chcesz obserwować zużycie i koszty.
- Używaj [**Historii**](#history), aby przejrzeć poprzednie operacje wraz z pełnym tekstem wejściowym i wyjściowym.
- Regularnie eksportuj sugestie (prompty), jeśli budujesz bibliotekę promptów, którą chcesz bezpiecznie przechowywać (zobacz [Prompty przekształcania](#transform-prompts)) lub chcesz ją udostępnić innym.

<br/><br/>

<a id="disclaimer"></a>

## Zastrzeżenie

Nazwy produktów i ikony należą do ich odpowiednich właścicieli i są używane wyłącznie w celach identyfikacyjnych. Oprogramowanie to nie jest powiązane ani zalecane przez żadne z wymienionych marek.

<br/><br/>

<a id="license"></a>

## Licencja

Copyright © 2026 Waldemar Scudeller Jr.

[Licencja Apache w wersji 2.0](LICENSE)