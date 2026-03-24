---
translated_at: "2026-03-24T02:16:57.389Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt baner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Przewodnik użytkownika

<br/>

<a id="introduction"></a>
## Wprowadzenie

Transrewrt pomaga w pracy z tekstem na trzy główne sposoby:

- **Tłumaczenie** – przekształcanie tekstu z jednego języka na inny.
- **Przepisywanie** – formułowanie tekstu na nowo w innym stylu, np. bardziej zrozumiale, zwięźlej lub formaniej.
- **Przekształcanie** – przetwarzanie tekstu za pomocą niestandardowych instrukcji dla AI, nazywanych promptami.

<br/>

Niniejszy przewodnik wyjaśnia, jak korzystać z aplikacji po jej zainstalowaniu i uruchomieniu. Aby dowiedzieć się, jak zainstalować aplikację, zapoznaj się z głównym plikiem **[README](README.pl.md)**.

<br/>

> ℹ️ **UWAGA**<br/>
> Transrewrt jest dostępny jako aplikacja desktopowa dla Windows i Linux oraz jako samodzielnie hostowana aplikacja internetowa. Niniejszy przewodnik koncentruje się na codziennym użytkowaniu aplikacji. Tam, gdzie określona funkcja dotyczy tylko jednej wersji, jest to wyraźnie zaznaczone.

<small>**Przeczytaj w innych językach:** [English (UK)](USER-GUIDE.pl.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Spis treści**

- [Zanim zaczniesz](#before-you-start)
  - [Jak uzyskać bezpłatny klucz API do OpenRouter (aplikacja desktopowa)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Rozpoczęcie pracy](#getting-started)
- [Główne elementy okna](#main-parts-of-the-window)
  - [Pasek boczny](#sidebar)
  - [Pasek narzędzi](#toolbar)
  - [Panele wejściowy i wyjściowy](#input-and-output-panels)
- [Tłumaczenie](#translate)
  - [Tłumaczenie tekstu](#translate-text)
  - [Wybór języka](#language-selection)
  - [Przydatne ustawienia tłumaczenia](#helpful-translation-settings)
  - [Skróty klawiaturowe](#keyboard-shortcuts)
- [Przepisywanie](#rewrite)
  - [Przepisywanie tekstu](#rewrite-text)
- [Przekształcanie](#transform)
  - [Uruchamianie istniejącego promptu](#run-an-existing-prompt)
  - [Jeśli nie masz jeszcze żadnych promptów](#if-you-have-no-prompts-yet)
  - [Szybkie tworzenie promptu](#create-a-prompt-quickly)
  - [Edycja promptu](#edit-a-prompt)
  - [Testowanie promptu przed użyciem](#test-a-prompt-before-using-it)
  - [Zarządzanie zapisanymi promptami](#manage-saved-prompts)
- [Pulpit](#dashboard)
  - [Filtrowanie danych](#filter-the-data)
  - [Zakładki pulpitu](#dashboard-tabs)
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
  - [Prompty przekształcania](#transform-prompts)
  - [Użytkownicy](#users)
  - [Konfiguracja API](#api-config)
  - [O programie](#about)
- [Częste problemy](#common-issues)
  - [Aplikacja nie tłumaczy, nie przepisuje ani nie przekształca tekstu](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Lista modeli jest pusta](#the-model-list-is-empty)
  - [Wyniki są zbyt wolne lub zbyt kosztowne](#the-result-is-too-slow-or-too-expensive)
  - [Interfejs jest w niewłaściwym języku](#the-interface-is-in-the-wrong-language)
  - [Tekst jest zbyt mały lub trudny do odczytania](#the-text-is-too-small-or-hard-to-read)
  - [Wykresy na pulpicie są puste](#dashboard-charts-are-empty)
  - [Koszt wyświetla „nie dostępne” lub wydaje się błędny](#cost-shows-not-available-or-seems-wrong)
  - [Łączny koszt nie zgadza się z rachunkiem dostawcy](#total-cost-does-not-match-my-provider-bill)
  - [Historia nie pojawia się na pasku bocznym](#the-history-page-is-missing-from-the-sidebar)
  - [Aplikacja internetowa: nieoczekiwane przekierowanie do strony logowania](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Pulpit nie pokazuje danych innych użytkowników (wersja internetowa)](#dashboard-shows-no-data-for-other-users-web)
  - [Zmieniłem prompt i utraciłem edycje](#i-changed-a-prompt-and-lost-the-edits)
- [Szybkie porady](#quick-tips)
- [Zrzeczenie odpowiedzialności](#disclaimer)
- [Licencja](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Przed rozpoczęciem

Aby korzystać z Transrewrt, musisz mieć dostęp do co najmniej jednego dostawcy sztucznej inteligencji. Obsługiwani dostawcy to: [OpenRouter](https://openrouter.ai) (agregujący wiele modeli), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI oraz [Ollama](https://ollama.com) do modeli lokalnych.

Nie musisz wybierać modelu płatnego, aby rozpocząć. W chwili dodania klucza API OpenRouter aplikacja automatycznie aktywuje wbudowaną **bezpłatną** opcję OpenRouter. Dzięki temu możesz od razu rozpocząć tłumaczenie, przepisywanie i przekształcanie tekstu.

Prościej mówiąc:

- **Model** to silnik AI wykonujący pracę. Modele są wymieniane z **prefiksem dostawcy** (na przykład `openrouter/…`, `openai/…`, `ollama/…`).
- **Klucz API** (lub w przypadku Ollama – **podstawowy adres URL**) umożliwia aplikacji połączenie się z danym dostawcą.

Jeśli korzystasz z **aplikacji komputerowej**, dodaj klucze w zakładce [**Ustawienia** > **Konfiguracja API**](#api-config) dla każdego używanego dostawcy. Jeśli zamierzasz korzystać wyłącznie z OpenRouter, zobacz poniższą sekcję [Jak uzyskać klucz API (wersja komputerowa)](#how-to-get-an-api-key-desktop-app). Jeśli nie chcesz używać klucza API, możesz zainstalować Ollama (ze strony [ollama.com](https://ollama.com)) i korzystać z lokalnych modeli.

Jeśli korzystasz z **wersji internetowej**, to właściciel serwera konfiguruje dostawców przy użyciu zmiennych środowiskowych, więc zazwyczaj nie musisz samodzielnie wprowadzać kluczy API.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Jak uzyskać bezpłatny klucz API OpenRouter (wersja komputerowa)

Jeśli korzystasz z aplikacji komputerowej, wykonaj następujące kroki:

1. Otwórz w przeglądarce [OpenRouter](https://openrouter.ai).
2. Załóż konto lub zaloguj się.
3. Przejdź do strony [Keys](https://openrouter.ai/keys).
4. Kliknij przycisk, aby utworzyć nowy klucz API.
5. Nadaj kluczowi nazwę, dzięki której łatwiej będzieś go później rozpoznać.
6. Skopiuj nowy klucz API.
7. Wróć do Transrewrt i otwórz zakładkę **Ustawienia** > **Konfiguracja API**.
8. Wklej klucz do pola **OpenRouter API key** (w zakładce **Ustawienia** > **Konfiguracja API**).
9. Kliknij **Test OpenRouter key**, aby się upewnić, że działa poprawnie.

<br/>

> ℹ️ **UWAGA**<br/>
> Możesz rozpocząć korzystanie z bezpłatnej trasy OpenRouter lub innych dostępnych modeli darmowych bez podawania danych karty kredytowej. W wielu przypadkach jest to wystarczające, aby rozpocząć korzystanie z Transrewrt bez wybierania modelu płatnego. Alternatywnie możesz użyć Ollama, by uruchamiać modele lokalnie, bez potrzeby używania klucza API.

<br/><br/>

<a id="getting-started"></a>
## Wprowadzenie

Jeśli korzystasz z Transrewrt po raz pierwszy, postępuj zgodnie z poniższą kolejnością:

1. Otwórz aplikację.
2. W razie potrzeby wybierz język interfejsu za pomocą ikony kuli ziemskiej.
3. Jeśli korzystasz z **aplikacji komputerowej**, otwórz [**Ustawienia** > **Konfiguracja API**](#api-config), dodaj klucz API dla co najmniej jednego dostawcy (na przykład OpenRouter) i kliknij **Test**, aby upewnić się, że działa poprawnie.
4. Otwórz [**Ustawienia** > **Modele**](#models) i dodaj jeden lub więcej modeli do sekcji **Wybrane modele**.
5. Otwórz [**Ustawienia** > **Języki**](#languages) i wybierz **Ulubione języki**, jeśli chcesz, by najczęściej używane języki pojawiały się na liście jako pierwsze.
6. Przejdź do zakładki **Tłumacz** i przeprowadź prostą operację tłumaczenia, aby potwierdzić, że wszystko działa prawidłowo.
7. Gdy tłumaczenie zadziała, wypróbuj funkcję **Przepisz**, a następnie **Przekształć**.

Ta kolejność ma znaczenie. Zapobiega ona najczęstszemu problemowi występującemu podczas pierwszego użycia aplikacji: próbom wykonania zadania przed ustaleniem działającego połączenia API lub wybraniem modelu.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Główne elementy okna

Aplikacja składa się z trzech głównych obszarów:

- **Pasek boczny** po lewej stronie.
- **Pasek narzędzi** u góry.
- **Obszar roboczy** w środku.

<br/>

<a id="sidebar"></a>
### Pasek boczny

Użyj paska bocznego, aby poruszać się po aplikacji. Można go zwinąć w celu uzyskania większej przestrzeni roboczej, klikając ikonę obok logo aplikacji.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/pl/sidebar.png" alt="Pasek boczny aplikacji" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Tłumacz</strong> otwiera obszar pracy dedykowany tłumaczeniu.</li><br/>
        <li><strong>Przepisz</strong> otwiera obszar pracy do przepisywania tekstu.</li><br/>
        <li><strong>Przekształć</strong> otwiera obszar pracy z niestandardowymi monitami.</li><br/>
        <li><strong>Podsumowanie</strong> wyświetla informacje o użyciu i kosztach.</li><br/>
        <li><strong>Ustawienia</strong> otwiera panel ustawień.</li><br/>
        <li><strong>Historia</strong> pokazuje historię użycia razem z wprowadzonym i wygenerowanym tekstem.</li><br/>
        <li><strong>Użytkownik</strong> pokazuje nazwę zalogowanego użytkownika (tylko w wersji internetowej).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Pasek narzędzi

Pasek narzędzi nieznacznie zmienia się w zależności od tego, gdzie znajdujesz się w aplikacji.

- Po lewej stronie wyświetla nazwę bieżącej strony.
- Po prawej stronie znajduje się **selektor modelu** oraz opcja wyboru **języka interfejsu**.

**Selektor modelu** pozwala wybrać silnik AI, którego chcesz użyć do aktualnego zadania.

  ![Selektor modelu](../images/screenshots/pl/model-selector.png)

> ℹ️ **UWAGA**<br/>
> Niektóre darmowe modele mogą nie być zawsze dostępne — czasami są niedostępne lub mają ograniczenia użycia. Jeśli tak się stanie, aplikacja automatycznie usunie ten model z listy dostępnych.<br/>
> Aby kontrolować, które modele się pojawiają, przejdź do [**Ustawień** > **Modele**](#models) i edytuj listę modeli. 
> Możesz również otworzyć ustawienia modelu bezpośrednio, klikając ikonę dostawcy po lewej stronie nazwy modelu na pasku narzędzi.

<br/>

Ikona **globusa i kod języka** zmienia język interfejsu aplikacji, taki jak menu i przyciski. **Nie zmienia** to języków tłumaczenia używanych w funkcji **Tłumacz**.

  ![Selektor języka interfejsu](../images/screenshots/pl/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panele wejściowy i wyjściowy

Większość obszarów roboczych używa lewego panelu **Wejściowego** i prawego panelu **Wyjściowego**.

Panel **Wejściowy** pokazuje:

- Liczbę znaków
- Liczbę słów
- Liczbę akapitów

Panel **Wyjściowy** może pokazywać:

- Jak długo trwało zadanie
- Koszt zadania (jeśli dostępny)
- Łączny koszt bieżący
- **TPS** (tokeny na sekundę)
- Liczbę znaków, słów i akapitów
- Użyty model

Jeśli zastanawiasz się nad technicznymi definicjami:

- **Token** oznacza niewielki fragment tekstu. Można o nim myśleć jako o części słowa lub krótkim słowie.
- **TPS** oznacza, ile takich fragmentów tekstu model przetworzył w ciągu jednej sekundy.

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
5. Wpisz lub wklej tekst w polu **Wejściowym**.
6. Kliknij **Tłumacz**.
7. Przeczytaj wynik w panelu **Wyjściowym**.
8. Skorzystaj z przycisku kopiowania, aby skopiować wynik.

<br/>

<a id="language-selection"></a>
### Wybór języka

- Pole **Z** może zawierać konkretny język lub opcję **Wykryj język**.
- Pole **Na** zawiera język, na który chcesz przetłumaczyć.

Twoje wybrane **Najważniejsze języki** pojawiają się u góry listy. Możesz ustawić je w [**Ustawieniach** > **Języki**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Przydatne ustawienia tłumaczenia

W sekcji [**Ustawienia** > **Ustawienia ogólne**](#general-settings) możesz zmienić sposób działania tłumaczenia:

- **Tłumacz automatycznie po wklejeniu** — rozpoczyna tłumaczenie natychmiast po wklejeniu tekstu.
- **Automatyczne kopiowanie wyniku do schowka** — automatycznie kopiuje wynik po pomyślnym tłumaczeniu.
- **Tłumaczenie w czasie rzeczywistym (podczas pisania)** — tłumaczy tekst w trakcie jego wpisywania.
- **Limit czasu (ms)** — określa, jak długo aplikacja czeka przed uruchomieniem tłumaczenia w czasie rzeczywistym.

<br/>

<a id="keyboard-shortcuts"></a>
### Skróty klawiaturowe

W sekcji [**Ustawienia** > **Ustawienia ogólne**](#general-settings), opcja **Zachowanie klawisza ENTER** określa, co dzieje się po naciśnięciu `Enter`:

- **Enter** może uruchamiać zadanie, a **Shift+Enter** dodawać nową linię.
- Lub aplikacja może działać odwrotnie.

Bieżący tryb jest również wyświetlany na przycisku **Tłumacz**.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Przepisz

Użyj opcji **Przepisz**, gdy chcesz poprawić styl tekstu, nie zmieniając jego głównego znaczenia.

![Obszar roboczy Przepisz](../images/screenshots/pl/rewrite.png)

Przydatne do:

- poprawiania błędów ortograficznych i gramatycznych
- poprawy zrozumiałości tekstu
- uczynienia tekstu bardziej formalnym lub potocznym
- skracania lub rozszerzania tekstu
- nadawania tekstowi bardziej technicznego brzmienia

<br/>

<a id="rewrite-text"></a>

### Przepisz tekst

1. Otwórz **Przepisz**.
2. Wybierz **Tryb**.
3. Wybierz model na pasku narzędziowym.
4. Wpisz lub wklej tekst do pola **Wejście**.
5. Kliknij **Przepisz**.
6. Sprawdź wynik w polu **Wyjście**.

To samo działanie klawisza Enter, opisane w sekcji [**Tłumacz**](#keyboard-shortcuts), dotyczy również tego miejsca.

<br/>

> 💡 **PORADA**<br/>
> Po użyciu trybu „**Sprawdź pisownię i gramatykę**” w panelu wyników pojawia się przycisk „`Pokaż zmiany`”. Kliknij ten przycisk, aby przełączać wyświetlanie poprawek – pokazywać lub ukrywać konkretne zmiany wprowadzone w tekście.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## Przekształć

Użyj funkcji **Przekształć**, gdy chcesz, aby AI wykonała niestandardowy zestaw instrukcji.

![Obszar roboczy Przekształć](../images/screenshots/pl/transform.png)

Jest to najbardziej elastyczna część aplikacji. Można jej użyć do:

- podsumowywania notatek
- przekształcania nieuporządkowanego tekstu na wyszlifowaną wiadomość e-mail
- wyciągania kluczowych punktów
- konwersji tekstu do określonego formatu

<br/>

<a id="run-an-existing-prompt"></a>
### Uruchom istniejącą instrukcję (prompt)

1. Otwórz **Przekształć**.
2. Wybierz instrukcję z listy instrukcji.
3. Jeśli pojawi się pole **Język docelowy**, wybierz język, jeśli tego oczekujesz.
4. Wpiszz lub wklej tekst do pola **Wejście**.
5. Kliknij **Przekształć**.
6. Przeczytaj wynik w polu **Wyjście**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Jeśli jeszcze nie masz żadnych instrukcji

Jeśli lista instrukcji jest pusta, kliknij **Załaduj przykładowe instrukcje**. To doda wbudowane przykłady, dzięki czemu możesz szybko rozpocząć pracę.

<br/>

> ℹ️ **UWAGA**<br/>
> Przykładowe instrukcje są dostarczane w języku angielskim. Po ich załadowaniu możesz edytować instrukcję i skorzystać z opcji **Tłumacz instrukcję**, aby przetłumaczyć ją na swój język.

<br/>

<a id="create-a-prompt-quickly"></a>
### Szybkie tworzenie instrukcji

Najszybszy sposób na utworzenie instrukcji:

1. Kliknij **Nowa instrukcja**.
2. Kliknij **Wygeneruj instrukcję**.
3. Opisz, co powinna robić instrukcja.
4. Wybierz model.
5. Pozwól aplikacji utworzyć wersję roboczą.
6. Sprawdź wersję roboczą i kliknij **Zapisz**.

![Wygeneruj instrukcję](../images/screenshots/pl/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Edycja instrukcji

Po utworzeniu lub edycji instrukcji edytor pojawia się po lewej stronie, a po prawej pojawia się obszar testowy.

![Edytor instrukcji Przekształć](../images/screenshots/pl/transform-prompt-edit.png)

Główne pola to:

- **Nazwa instrukcji**: nazwa wyświetlana na liście instrukcji.
- **Instrukcje (opcjonalne)**: krótki opis wyświetlany użytkownikowi podczas uruchamiania.
- **Rola modelu**: ogólna rola AI, np. „Jesteś pomocnym asystentem”.
- **Instrukcje modelu (jedna na wiersz)**: konkretne zasady, które ma wykonać AI.
- **Opis wyniku**: krótkie słowo opisujące wynik, np. „podsumowanie” lub „przepisanie”.
- **Temperatura (0.0 → 1.0)**: sposób działania modelu; zobacz niżej.
- **Zapytaj o język docelowy**: dodaje selektor języka docelowego podczas uruchamiania instrukcji.

Jeśli termin **Temperatura** jest dla Ciebie nowością, traktuj go tak:

- **Niższa** temperatura daje bardziej stabilne i przewidywalne wyniki.
- **Wyższa** temperatura daje większą różnorodność i kreatywność.

Możesz też wykorzystać:

- **`Wygeneruj instrukcję`**, aby utworzyć projekt z prostego opisu
- **`Ulepsz instrukcję`**, aby doskonalić istniejącą instrukcję
- **`Tłumacz instrukcję`**, aby przetłumaczyć pola instrukcji

<br/>

> ⚠️ **OSTRZEŻENIE**<br/>
> Kliknij **`Zapisz`** przed kliknięciem **`Wróć do działania`**. Jeśli wrócisz bez zapisania, Twoje zmiany zostaną utracone.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Przetestuj instrukcję przed użyciem

Panel testowy po prawej stronie pozwala przetestować instrukcję na przykładowym tekście przed jej użyciem w codziennej pracy.

To przydatne w sytuacji, gdy:

- tworzysz nową instrukcję
- porównujesz dwie wersje instrukcji
- chcesz sprawdzić ton, długość lub format wyniku

<br/>

<a id="manage-saved-prompts"></a>
### Zarządzanie zapisanymi instrukcjami

Aby centralnie zarządzać zapisanymi instrukcjami, otwórz [**Ustawienia** > **Instrukcje Przekształć**](#transform-prompts).

Tam możesz:

- przeglądać i usuwać swoje instrukcje
- eksportować instrukcje jako **JSON**, **CSV** lub **XLSX**
- importować instrukcje z pliku

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Panel główny

Użyj **Panelu głównego**, aby zobaczyć, jak intensywnie korzystasz z aplikacji i jakie są koszty (w przypadku płatnych modeli).

![Podsumowanie panelu głównego](../images/screenshots/pl/dashboard-summary.png)


<br/>

> ℹ️ **UWAGA**<br/>
> Jeśli używasz wyłącznie darmowych modeli, wykresy dotyczące kosztów będą puste.

<br/>

<a id="filter-the-data"></a>
### Filtruj dane

Użyj przycisków filtra u góry, aby zmienić zakres czasu.

![Filtry panelu głównego](../images/screenshots/pl/dashboard-filter.png)

<br/>

> ℹ️ **UWAGA**<br/>
> Filtr **Użytkownik** jest widoczny tylko dla administratorów w wersji internetowej. Zwykli użytkownicy nie widzą tego filtra, a nie jest on również dostępny w aplikacji komputerowej.

<br/>

<a id="dashboard-tabs"></a>
### Zakładki panelu głównego

- **Podsumowanie** pokazuje ogólny przegląd wykorzystania i kosztów.
- **Według użycia** dzieli aktywność według języka tłumaczenia, trybu przepisywania i użytych wskazówek przekształcających.
- **Według modelu** pokazuje, których modeli użyłeś i ile cię to kosztowało.
- **Według dnia** prezentuje dzienne sumy.
- **Wszystkie wywołania** pokazuje pełną historię wywołań i umożliwia jej eksport.

<br/>

<a id="export-data"></a>
### Eksport danych

Z tabel na panelu głównym można eksportować dane w formatach:

- **JSON**
- **CSV**
- **XLSX**

Jest to przydatne, jeśli chcesz przeanalizować swoją aktywność poza aplikacją lub przesłać raport.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Usuwanie zapisanych rekordów dla modelu

Na zakładkach **Według modelu** lub **Wszystkie wywołania** można usunąć zapisane rekordy dla danego modelu, klikając ikonę „kosza”.

> ⚠️ **OSTRZEŻENIE**<br/>
> Usunięcie zapisanych rekordów jest nieodwracalne. Używaj tej funkcji tylko wtedy, gdy na pewno nie potrzebujesz już tej historii.

Aby usunąć wszystkie dane lub rekordy starsze niż dana data, przejdź do sekcji [**Ustawienia** > **Śledzenie kosztów**](#cost-tracking). Tam znajdziesz opcje usunięcia wszystkich zapisanych danych lub tylko danych starszych niż określona data.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Historia

Kliknij **Historia**, aby zobaczyć historię swoich działań w aplikacji **Transrewrt**, w tym dane wejściowe i wyjściowe każdej operacji.

![Strona historii](../images/screenshots/pl/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtruj historię

**Historia** używa tych samych filtrów co strona **Panel główny**. Użyj ich, aby wybrać zakres czasu.

![Filtry panelu głównego](../images/screenshots/pl/dashboard-filter.png)

<br/>

> ℹ️ **UWAGA**<br/>
> Filtr **Użytkownik** jest widoczny tylko dla administratorów w wersji internetowej. Zwykli użytkownicy nie widzą tego filtra, a nie jest on również dostępny w aplikacji komputerowej.

<br/>

<a id="export-history-data"></a>
### Eksport danych historii

Strona historii pozwala wyeksportować przefiltrowane dane w formatach:

- **JSON**
- **CSV**
- **XLSX**

Jest to przydatne, jeśli chcesz przeanalizować swoją aktywność poza aplikacją lub przesłać raport.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Ustawienia

Otwórz **Ustawienia** z paska bocznego, aby dostosować działanie aplikacji.

Dostępne zakładki zależą od platformy i Twojej roli:

  | Zakładka                 | Komputerowa | Wersja internetowa (admin) | Wersja internetowa (użytkownik) |
  |---------------------------|:-----------:|:----------------------------:|:-------------------------------:|
  | Ustawienia ogólne         |     tak     |             tak              |               tak               |
  | Modele                    |     tak     |             tak              |               tak               |
  | Języki                    |     tak     |             tak              |               tak               |
  | Śledzenie kosztów         |     tak     |             tak              |                —                |
  | Wskazówki przekształcające|     tak     |             tak              |               tak               |
  | Użytkownicy               |      —      |             tak              |                —                |
  | Konfiguracja API          |     tak     |             tak              |                —                |
  | Informacje                |     tak     |             tak              |               tak               |

<br/>

> ℹ️ **UWAGA**<br/>
> W wersji internetowej każdy użytkownik ma własną konfigurację. Ustawienia takie jak wybrane modele, języki, opcje ogólne i wskazówki przekształcające są zapisywane osobno dla każdego użytkownika. Wprowadzone przez Ciebie zmiany nie wpływają na innych użytkowników.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Ustawienia ogólne

Użyj opcji **Ustawienia ogólne**, aby skonfigurować zachowanie pisania, przechowywanie szczegółów wykonywania w **Historii** oraz wygląd aplikacji.

**Zachowanie**

- **Zachowanie klawisza ENTER** decyduje, czy klawisz `Enter` uruchamia zadanie, czy wstawia nową linię.
- **Automatyczne tłumaczenie podczas wklejania** uruchamia tłumaczenie natychmiast po wklejeniu tekstu.
- **Automatyczne kopiowanie wyniku do schowka** automatycznie kopiuje wyniki udanej operacji.
- **Tłumaczenie w czasie rzeczywistym (podczas pisania)** tłumaczy tekst natychmiast w trakcie pisania.
- **Czas oczekiwania (ms)** ustawia czas oczekiwania dla tłumaczenia w czasie rzeczywistym.

**Historia**

- **Zapisuj historię wykonania** decyduje, czy każde tłumaczenie, przepisywanie oraz przekształcenie zapisuje **tekst wejściowy i wyjściowy** do widoku bocznego panelu [**Historia**](#history). Wyłączenie tej opcji spowoduje wyświetlenie potwierdzenia; po potwierdzeniu zapisany tekst historii zostanie usunięty z bazy danych.
- **Usuń dane historii** pozwala usunąć zapisane teksty według wieku (np. starsze niż kilka miesięcy lub **wszystkie dane (wyczyść)**) za pomocą przycisku **Usuń dane**. Dotyczy to wyłącznie zapisanego tekstu operacji w widoku **Historia**; **nie** kasuje on całkowitych danych kosztów i zużycia. Aby usunąć lub zredukować dane o **kosztach**, użyj opcji [**Ustawienia** > **Śledzenie kosztów**](#cost-tracking).

**Wygląd**

- **Liczba miejsc po przecinku dla kosztów** zmienia sposób wyświetlania ułamków dziesiętnych kosztów.
- **Tylko w przeglądarce:** **wyświetl margines wokół aplikacji** dodaje dodatkową przestrzeń wokół interfejsu.
- **Rodzina czcionek** zmienia czcionkę w panelach tekstowych.
- **Rozmiar** zmienia rozmiar czcionki.


<br/>

<a id="models"></a>
### Modele

Użyj opcji **Ustawienia** > **Modele**, aby wybrać, które modele będą wyświetlane na pasku narzędzi.

![Zrzut ekranu karty Modeli w ustawieniach](../images/screenshots/pl/settings-models.png)

Strona zawiera dwie listy:

- **Dostępne modele** po lewej stronie
- **Wybrane modele** po prawej stronie

Przydatne funkcje:

- **Wyszukaj modele...**, aby znaleźć model po nazwie
- Kafelki **Dostawcy** umożliwiające zawężenie listy do jednego dostawcy (OpenRouter, OpenAI, Ollama, …)
- **Tylko darmowe**, aby wyświetlić wyłącznie darmowe modele
- **Odśwież**, aby ponownie załadować listę
- **Rozwiń wszystko** i **Zwiń wszystko**, gdy sortujesz według dostawcy

Identyfikatory modeli zawierają prefiks dostawcy (np. `openrouter/…` lub `openai/…`). Odznaki takie jak **OpenAI (OpenRouter)** vs **OpenAI (bezpośrednio)** pokazują, jak kierowane są żądania.

Działania:

- Aby dodać model, kliknij **Dodaj** lub w dowolnym miejscu pozycji.
- Aby usunąć model, kliknij **X** obok niego w **Wybranych modelach** lub przycisk **Wybrany** przy pozycji na liście Dostępne modele.
- Aby wyczyścić listę, kliknij **Odznacz wszystko**. Wymagany darmowy model pozostanie na liście.

<br/>

> ℹ️ **UWAGA**<br/>
> Jeśli nie chcesz od razu doładowywać środków na konto OpenRouter, zacznij od włączenia opcji **Tylko darmowe** i wybrania darmowych modeli (nie wymagają one podania numeru karty kredytowej). Możesz też użyć Ollama, aby uruchamiać modele lokalnie bez klucza API.

<br/>

<a id="languages"></a>
### Języki

Użyj opcji **Ustawienia** > **Języki**, aby zarządzać listami języków używanymi w aplikacji.

- **Najczęściej używane języki** są przypinane na górze list języków w trybach **Tłumaczenie** i **Przekształcanie**.
- **Własny język** pozwala dodać język niewystępujący na wbudowanej liście.

Po dodaniu własnego języka pojawi się on w selektorze języka obok wbudowanych opcji.

<br/>

<a id="cost-tracking"></a>
### Śledzenie kosztów

Użyj opcji **Ustawienia** > **Śledzenie kosztów**, aby zarządzać informacjami o kosztach.

- **Łączny koszt** pokazuje aktualne podsumowanie.
- **Skopiuj wartość** kopiuje łączną kwotę do schowka.
- **Zresetuj koszt** zeruje zapisaną łączną wartość.
- **Synchronizuj z zużyciem klucza API** ustawia łączną wartość na poziom zgodny z danymi zużycia z konta OpenRouter (tylko OpenRouter).
- **Zużycie klucza API** pokazuje szczegóły zużycia OpenRouter, jeśli są dostępne.
- **Usuń dane kosztów** usuwa wszystkie dane lub tylko pozycje starsze niż wybrana data.

**Śledzenie kosztów:** Gdy używasz modeli OpenRouter, aplikacja pokazuje rzeczywiste zużycie i wydatki na podstawie danych z OpenRouter. Dla wszystkich pozostałych dostawców aplikacja oszacowuje koszty, korzystając z cen opublikowanych przez OpenRouter; jeśli cena nie jest dostępna, szacowanie może wynosić zero.

<br/>

> ℹ️ **UWAGA**<br/>
> **Wszystkie wartości kosztów to szacunki wyłącznie dla Twojej informacji, nie są oficjalnymi rachunkami.**


<br/>

> ⚠️ **OSTRZEŻENIE**<br/>
> Usunięcie danych jest nieodwracalne. Przed usunięciem upewnij się, że utworzyłeś kopię zapasową danych lub wyeksportujesz je przez [**Panel kontrolny** > **Wszystkie wywołania**](#dashboard-tabs); w przeciwnym razie zostaną trwale utracone. <br/>
> Cała historia związana z każdym wpisem wywołania API również zostanie usunięta.


<br/>

<a id="transform-prompts"></a>

### Przekształcanie zachęt

Użyj opcji **Ustawienia** > **Przekształć zachęty**, aby zarządzać zachętami zbiorowo.

Możesz:

- przeglądać zapisane zachęty
- usuwać zachęty
- importować zachęty z pliku
- eksportować zachęty w celu tworzenia kopii zapasowych lub udostępniania

<br/>

<a id="users"></a>
### Użytkownicy

**Wersja internetowa: wyłącznie administrator**

Użyj zakładki **Użytkownicy**, aby zarządzać kontami użytkowników w wersji internetowej. Możesz dodawać użytkowników, aktualizować ich dane, resetować hasła oraz usuwać konta.

<br/>

<a id="api-config"></a>
### Konfiguracja API

Obsługiwane dostawcy to: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI oraz **Ollama** (modele lokalne za pośrednictwem podstawowego adresu URL). Należy skonfigurować jedynie tych dostawców, których używasz.

**Aplikacja internetowa: wyłącznie administrator**

Klucze API są konfigurowane za pomocą zmiennych środowiskowych systemu lub Dockera — nie są wprowadzane przez interfejs internetowy. Na tej stronie pokazane jest, dla których dostawców skonfigurowano klucz, a także można przetestować każdego z nich, klikając przycisk **`Testuj`**.

<br/>

> ℹ️ **UWAGA**<br/>
> Aby zmienić klucz API, zaktualizuj zmienną środowiskową w konfiguracji systemu lub Dockera, a następnie uruchom ponownie serwer lub kontener.

<br/>

**Aplikacja komputerowa**

Użyj opcji **Konfiguracja API**, aby przechowywać klucze API dla każdego dostawcy, którego używasz. W przypadku Ollama wpisz **podstawowy adres URL** zamiast klucza API.


<br/>

> 💡 **Wskazówka** <br/>
> Jeśli nie chcesz używać klucza API ani płacić za korzystanie, możesz [pobrać Ollama](https://ollama.com) i uruchamiać modele lokalnie na swoim komputerze całkowicie za darmo. Alternatywnie, możesz założyć darmowe konto OpenRouter (nie wymagane dane karty kredytowej), aby korzystać z ich darmowych modeli.

- Dodaj jedynie tych dostawców, których potrzebujesz. W sekcji **Ustawienia** > **Modele** identyfikator każdego modelu rozpoczyna się od nazwy dostawcy (na przykład `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Aby dodać klucz API, wpisz jego wartość w polu tekstowym i kliknij **`Zapisz`**. Aby zastąpić istniejący klucz, kliknij **`Edytuj`**. Aby sprawdzić, czy klucz działa, kliknij **`Testuj`**.

<br/>

> ℹ️ **UWAGA**<br/>
> Nie możesz zobaczyć aktualnej wartości klucza API. Możesz jedynie zastąpić go za pomocą przycisku **`Edytuj`**.
> Klucze API są przechowywane zaszyfrowane w pliku konfiguracyjnym.

<br/>

Aby uzyskać szczegółowe instrukcje dotyczące uzyskania klucza OpenRouter, zobacz powyżej sekcję [Jak uzyskać klucz API](#how-to-get-an-api-key-desktop-app).

<br/>

<a id="about"></a>
### O programie

Zakładka **O programie** zawiera:

- nazwę aplikacji
- numer wersji
- datę kompilacji
- link do repozytorium projektu

<br/><br/>

<a id="common-issues"></a>
## Częste problemy

Jeśli coś nie działa zgodnie z oczekiwaniami, sprawdź najpierw poniższe punkty.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikacja nie tłumaczy, nie przepisuje ani nie przekształca tekstu

Sprawdź, czy:

- wybrałeś model w pasku narzędziowym
- przynajmniej jeden model znajduje się na liście w sekcji [**Ustawienia** > **Modele**](#models)
- konfiguracja API działa poprawnie

Jeśli korzystasz z aplikacji komputerowej:

1. Otwórz [**Ustawienia** > **Konfiguracja API**](#api-config).
2. Sprawdź, czy przynajmniej jeden klucz API został zapisany.
3. Kliknij **Testuj** obok dostawcy, aby potwierdzić, że klucz działa.

<br/>

<a id="the-model-list-is-empty"></a>
### Lista modeli jest pusta

Otwórz [**Ustawienia** > **Modele**](#models) i kliknij **Odśwież**.

W razie potrzeby:

- wyszukaj model
- włącz opcję **Tylko darmowe**
- dodaj jeden lub więcej modeli do **Wybranych modeli**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Wynik jest zbyt powolny lub zbyt kosztowny

Wypróbuj jedną lub więcej z poniższych opcji:

- wybierz inny model
- skróć wprowadzany tekst
- wyłącz opcję **Tłumaczenie w czasie rzeczywistym (podczas pisania)** w sekcji [**Ustawienia** > **Ustawienia ogólne**](#general-settings)
- użyj darmowych modeli do prostych zadań (zobacz [Modele](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Interfejs jest w niewłaściwym języku

Kliknij ikonę kuli ziemskiej w [pasku narzędzi](#toolbar) i wybierz preferowany **język interfejsu**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Tekst jest zbyt mały lub trudny do odczytania

Otwórz [**Ustawienia** > **Ustawienia ogólne**](#general-settings) i zmień:

- **Rodzina czcionek**
- **Rozmiar**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Wykresy na pulpicie są puste

Jest to normalne, gdy:

- używasz wyłącznie **darmowych modeli** (wykresy kosztów będą puste)
- wybrany **filtr czasu** nie obejmuje okresu, w którym wykonano zapytania — spróbuj ustawić **Wszystkie**, aby sprawdzić

Jeśli wykresy nadal są puste po wybraniu **Wszystkie**, upewnij się, że zapytania pojawiają się w zakładce [**Historia**](#history) lub w zakładce **Wszystkie zapytania**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Koszt pokazuje „nie dostępny” lub wydaje się nieprawidłowy

Gdy korzystasz z modeli za pośrednictwem **OpenRouter**, aplikacja wyświetla rzeczywiste wydatki raportowane przez OpenRouter.

W przypadku **innych dostawców** (OpenAI bezpośrednio, Anthropic bezpośrednio itp.) koszt jest szacowany na podstawie danych cenowych opublikowanych przez OpenRouter. Jeśli nie zostanie znaleziona odpowiednia cena dla modelu, koszt zostanie wyświetlony jako **nie dostępny** i nie zostanie dodany do całkowitego wyniku.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Łączny koszt nie zgadza się z rachunkiem dostawcy

Wszystkie wartości kosztów w aplikacji są **szacunkowe i wyłącznie do celów informacyjnych**, nie stanowią oficjalnych faktur ani rachunków.

Aby zbliżyć całkowity koszt do rzeczywistych wydatków w OpenRouter, otwórz [**Ustawienia** > **Śledzenie kosztów**](#cost-tracking) i kliknij **Synchronizuj z użyciem klucza API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Strona Historia nie pojawia się w pasku bocznym

Funkcja **przechowywania historii wykonań** może być wyłączona. Otwórz [**Ustawienia** > **Ustawienia ogólne**](#general-settings) i włącz tę opcję. Pamiętaj, że jej włączenie nie przywróci wcześniej usuniętych danych historii.

<br/>

<a id="web-app-session-expired"></a>
### Aplikacja internetowa: nieoczekiwane przekierowanie do strony logowania

Twoja sesja mogła wygasnąć. Zaloguj się ponownie. Jeśli to się powtarza, sprawdź konfigurację serwera dotyczącą czasu trwania sesji.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Na tablicy nie ma danych innych użytkowników (wersja internetowa)

Tylko **administratorzy** mogą przeglądać dane wszystkich użytkowników za pomocą filtru **Użytkownik**. Standardowi użytkownicy widzą z założenia wyłącznie swoje własne działania.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Zmieniłem prompt i utraciłem edycje

Podczas edytowania promptu zawsze klikaj **Zapisz**, zanim wybierzesz **Powrót do uruchomienia**.

<br/><br/>

<a id="quick-tips"></a>
## Szybkie wskazówki

- Zacznij od [**Tłumaczenia**](#translate), aby upewnić się, że konfiguracja działa przed przejściem do [**Przepisywania**](#rewrite) lub [**Transformacji**](#transform).
- Korzystaj z [**Przepisywania**](#rewrite) do codziennych poprawek słownictwa.
- Korzystaj z [**Transformacji**](#transform), gdy potrzebujesz powtarzalnego przepływu pracy dla konkretnego zadania.
- Używaj [**Tablicy**](#dashboard), aby monitorować zużycie i koszty.
- Wykorzystuj [**Historię**](#history), aby przeglądać poprzednie operacje wraz z pełnym tekstem wejściowym i wyjściowym.
- Regularnie eksportuj prompty, jeśli tworzysz bibliotekę promptów, którą chcesz zabezpieczyć (zobacz [Przepisywanie promptów](#transform-prompts)) lub chcesz ją udostępnić innym.

<br/><br/>

<a id="disclaimer"></a>
## Ostrzeżenie

Nazwy produktów i ikony należą do odpowiednich właścicieli i są używane wyłącznie w celach identyfikacyjnych. Oprogramowanie to nie jest powiązane ani nie jest wspierane przez żadne z wymienionych marek.

<br/><br/>

<a id="license"></a>
## Licencja

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)