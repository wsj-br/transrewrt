---
translated_at: "2026-03-15T22:19:41.888Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Przewodnik użytkownika Transrewrt

<br />

<a id="introduction"></a>
## Wprowadzenie

Transrewrt pomaga w pracy z tekstem na trzy główne sposoby:

- **Tłumacz** - zamieniaj tekst z jednego języka na inny.
- **Przepisz** - przeformułuj tekst w innym stylu, takim jak bardziej zwięzły, krótszy lub bardziej formalny.
- **Przekształć** - przetwarzaj tekst za pomocą własnych poleceń AI zwanych promptami.

<br />

Ten przewodnik wyjaśnia, jak korzystać z aplikacji po jej zainstalowaniu i uruchomieniu. Aby zapoznać się z instrukcjami instalacji, zobacz główny plik [README](../README.md).

<br />

> ℹ️ **UWAGA**<br/>
> Transrewrt jest dostępny jako aplikacja desktopowa dla systemów Windows i Linux oraz jako samodzielnie hostowana aplikacja webowa. Ten przewodnik koncentruje się na codziennym użytkowaniu aplikacji. W miejscach, gdzie coś dotyczy tylko jednej wersji, jest to wyraźnie zaznaczone.

<small>**Przeczytaj w innych językach:** [angielski (Wielka Brytania)](../USER-GUIDE.md) · [portugalski (Brazylia)](USER-GUIDE.pt-BR.md) · [arabski](USER-GUIDE.ar.md) · [bengalski](USER-GUIDE.bn.md) · [kataloński](USER-GUIDE.ca.md) · [chiński uproszczony](USER-GUIDE.zh-CN.md) · [chiński tradycyjny](USER-GUIDE.zh-TW.md) · [chorwacki](USER-GUIDE.hr.md) · [czeski](USER-GUIDE.cs.md) · [niderlandzki](USER-GUIDE.nl.md) · [angielski (USA)](USER-GUIDE.en-US.md) · [filipiński](USER-GUIDE.tl.md) · [francuski](USER-GUIDE.fr.md) · [niemiecki](USER-GUIDE.de.md) · [grecki](USER-GUIDE.el.md) · [hindi](USER-GUIDE.hi.md) · [węgierski](USER-GUIDE.hu.md) · [włoski](USER-GUIDE.it.md) · [japoński](USER-GUIDE.ja.md) · [jawajski](USER-GUIDE.jv.md) · [koreański](USER-GUIDE.ko.md) · [malajski](USER-GUIDE.ms.md) · [perski](USER-GUIDE.fa.md) · [polski](USER-GUIDE.pl.md) · [portugalski (Portugalia)](USER-GUIDE.pt.md) · [pendżabski](USER-GUIDE.pa.md) · [rumuński](USER-GUIDE.ro.md) · [rosyjski](USER-GUIDE.ru.md) · [słowacki](USER-GUIDE.sk.md) · [hiszpański](USER-GUIDE.es.md) · [suahili](USER-GUIDE.sw.md) · [szwedzki](USER-GUIDE.sv.md) · [telugu](USER-GUIDE.te.md) · [tajski](USER-GUIDE.th.md) · [turecki](USER-GUIDE.tr.md) · [ukraiński](USER-GUIDE.uk.md) · [wietnamski](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Spis treści** 

- [Przed rozpoczęciem](#przed-rozpoczęciem)
  - [Jak uzyskać klucz API (aplikacja desktopowa)](#jak-uzyskać-klucz-api-aplikacja-desktopowa)
- [Rozpoczęcie pracy](#rozpoczęcie-pracy)
- [Główne części okna](#główne-części-okna)
  - [Pasek boczny](#pasek-boczny)
  - [Pasek narzędzi](#pasek-narzędzi)
  - [Panele wejścia i wyjścia](#panele-wejścia-i-wyjścia)
- [Tłumacz](#tłumacz)
  - [Przetłumacz tekst](#przetłumacz-tekst)
  - [Wybór języka](#wybór-języka)
  - [Przydatne ustawienia tłumaczenia](#przydatne-ustawienia-tłumaczenia)
  - [Skróty klawiaturowe](#skróty-klawiaturowe)
- [Przepisz](#przepisz)
  - [Przepisz tekst](#przepisz-tekst)
- [Przekształć](#przekształć)
  - [Uruchom istniejący prompt](#uruchom-istniejący-prompt)
  - [Jeśli nie masz jeszcze promptów](#jeśli-nie-masz-jeszcze-promptów)
  - [Utwórz prompt szybko](#utwórz-prompt-szybko)
  - [Edytuj prompt](#edytuj-prompt)
  - [Przetestuj prompt przed użyciem](#przetestuj-prompt-przed-użyciem)
  - [Zarządzaj zapisanymi promptami](#zarządzaj-zapisanymi-promptami)
- [Pulpit nawigacyjny](#pulpit-nawigacyjny)
  - [Filtruj dane](#filtruj-dane)
  - [Karty pulpitu nawigacyjnego](#karty-pulpitu-nawigacyjnego)
  - [Eksportuj dane](#eksportuj-dane)
  - [Usuń zapisane rekordy dla modelu](#usuń-zapisane-rekordy-dla-modelu)
- [Ustawienia](#ustawienia)
  - [Ustawienia ogólne](#ustawienia-ogólne)
  - [Modele](#modele)
  - [Języki](#języki)
  - [Śledzenie kosztów](#śledzenie-kosztów)
  - [Prompty przekształcania](#prompty-przekształcania)
  - [Użytkownicy](#użytkownicy)
  - [Konfiguracja API](#konfiguracja-api)
  - [O aplikacji](#o-aplikacji)
- [Typowe problemy](#typowe-problemy)
  - [Aplikacja nie tłumaczy, nie przepisuje ani nie przekształca tekstu](#aplikacja-nie-tłumaczy-nie-przepisuje-ani-nie-przekształca-tekstu)
  - [Lista modeli jest pusta](#lista-modeli-jest-pusta)
  - [Wynik jest zbyt wolny lub zbyt drogi](#wynik-jest-zbyt-wolny-lub-zbyt-drogi)
  - [Interfejs jest w złym języku](#interfejs-jest-w-złym-języku)
  - [Tekst jest zbyt mały lub trudny do odczytania](#tekst-jest-zbyt-mały-lub-trudny-do-odczytania)
  - [Zmieniłem prompt i utraciłem edycje](#zmieniłem-prompt-i-utraciłem-edycje)
- [Szybkie wskazówki](#szybkie-wskazówki)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="before-you-start"></a>

## Przed rozpoczęciem

Aby korzystać z Transrewrt, potrzebujesz dostępu do usługi AI za pośrednictwem OpenRouter.

Nie musisz wybierać płatnego modelu przed rozpoczęciem. Aplikacja zawsze zawiera wbudowany **darmowy** model, więc w normalnym użytkowaniu wystarczy on do rozpoczęcia tłumaczenia, przepisywania i przekształcania tekstu.

Po prostu:

- **Model** to silnik AI, który wykonuje pracę.
- **Klucz API** to Twoje osobiste poświadczenie dostępu do tej usługi.

Jeśli używasz **aplikacji desktopowej**, będziesz potrzebować klucza API. Szczegółowe kroki znajdziesz poniżej w sekcji [Jak uzyskać klucz API](#jak-uzyskać-klucz-api-desktop-app). W skrócie: utwórz konto na [OpenRouter](https://openrouter.ai), otwórz stronę [Klucze](https://openrouter.ai/keys), utwórz nowy klucz i wklej go w [**Ustawienia** > **Konfiguracja API**](#api-config) w Transrewrt.

Jeśli używasz **wersji webowej**, właściciel serwera zwykle konfiguruje to za Ciebie, więc zwykle nie musisz sam wprowadzać klucza API.

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### Jak uzyskać klucz API (aplikacja desktopowa)

Jeśli używasz aplikacji desktopowej, wykonaj następujące kroki:

1. Przejdź do [OpenRouter](https://openrouter.ai) w przeglądarce internetowej.
2. Utwórz konto lub zaloguj się.
3. Otwórz stronę [Klucze](https://openrouter.ai/keys).
4. Kliknij przycisk, aby utworzyć nowy klucz API.
5. Nadaj kluczowi nazwę, abyś mógł go później rozpoznać.
6. Skopiuj nowy klucz API.
7. Wróć do Transrewrt i otwórz **Ustawienia** > **Konfiguracja API**.
8. Wklej klucz w polu **OpenRouter API Key**.
9. Kliknij **Test API Configuration**, aby sprawdzić, czy działa.

> ℹ️ **UWAGA**<br/>
> Możesz zacząć od darmowej trasy OpenRouter lub dowolnego z innych dostępnych darmowych modeli. W wielu przypadkach to wystarczy, aby zacząć używać Transrewrt bez wyboru modelu płatnego.

<br /><br />

<a id="getting-started"></a>
## Rozpoczęcie pracy

Jeśli używasz Transrewrt po raz pierwszy, postępuj w tej kolejności:

1. Otwórz aplikację.
2. Wybierz **język interfejsu** z ikony globu, jeśli to konieczne.
3. Jeśli używasz **aplikacji desktopowej**, otwórz [**Ustawienia** > **Konfiguracja API**](#api-config), wklej swój klucz API OpenRouter i kliknij **Test API Configuration**.
4. Otwórz [**Ustawienia** > **Modele**](#models) i dodaj jeden lub więcej modeli do **Wybrane modele**.
5. Otwórz [**Ustawienia** > **Języki**](#languages) i wybierz **Najczęściej używane języki**, jeśli chcesz, aby najczęściej używane języki pojawiały się pierwsze.
6. Przejdź do **Tłumacz** i wykonaj proste tłumaczenie, aby potwierdzić, że wszystko działa.
7. Gdy to zadziała, wypróbuj **Przepisz**, a następnie **Przekształć**.

Ta kolejność ma znaczenie. Zapobiega najczęstszym problemom przy pierwszym użyciu: próbie wykonania zadania, zanim aplikacja ma działające połączenie API lub wybrany model.

<br /><br />

<a id="main-parts-of-the-window"></a>
## Główne części okna

Aplikacja jest podzielona na trzy główne obszary:

- **Boczny pasek** po lewej stronie.
- **Pasek narzędzi** u góry.
- **Obszar pracy** w centrum.

<br />

<a id="sidebar"></a>
### Boczny pasek

Używaj bocznego paska, aby poruszać się po aplikacji:

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/pl/sidebar.png" alt="Boczny pasek aplikacji" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Tłumacz</strong> otwiera obszar pracy tłumaczenia.</li>
        <li><strong>Przepisz</strong> otwiera obszar pracy przepisywania.</li>
        <li><strong>Przekształć</strong> otwiera obszar pracy niestandardowych poleceń.</li>
        <li><strong>Panel</strong> pokazuje informacje o użyciu i kosztach.</li>
        <li><strong>Ustawienia</strong> otwiera panel ustawień.</li>
        <li><strong>Użytkownik</strong> pokazuje nazwę użytkownika zalogowanego użytkownika (tylko wersja web).</li>
      </ul>
      <br />
      <p>Możesz także zwinąć boczny pasek, aby zyskać więcej miejsca, klikając ikonę obok logo aplikacji.</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### Pasek narzędzi

Pasek narzędzi zmienia się nieco w zależności od tego, gdzie jesteś w aplikacji.

- Po lewej stronie pokazuje nazwę bieżącej strony.
- Po prawej stronie pokazuje **selektor modelu** i kontrolkę **języka interfejsu**.

**Selektor modelu** pozwala wybrać, który silnik AI użyć do bieżącego zadania.

  ![Selektor modelu](../images/screenshots/pl/model-selector.png)

> ℹ️ **UWAGA**<br/>
> Niektóre darmowe modele mogą przestać działać tymczasowo, jeśli są niedostępne lub osiągnęły limit użycia. Jeśli tak się stanie, aplikacja automatycznie usunie ten model z Twojej listy.


**Ikona globu + kod języka** zmienia język interfejsu aplikacji, taki jak menu i przyciski. **Nie** zmienia języków tłumaczenia używanych w **Tłumaczu**.

  ![Selektor języka interfejsu](../images/screenshots/pl/language-selector.png)

<br />

<a id="input-and-output-panels"></a>

### Panele wejścia i wyjścia

Większość obszarów roboczych używa lewego panelu **Wejście** i prawego panelu **Wyjście**.

Panel **Wejście** pokazuje:

- Liczbę znaków
- Liczbę słów
- Liczbę akapitów

Panel **Wyjście** może pokazywać:

- Czas, jaki zadanie zajęło
- Koszt tego zadania
- Swój sumaryczny koszt
- **TPS** (tokeny na sekundę), czyli prosta miara prędkości
- Liczbę znaków, słów i akapitów
- Użyty model

Jeśli zastanawiasz się nad terminami technicznymi:

- **Token** oznacza mały kawałek tekstu. Można myśleć o nim jako część słowa lub krótkie słowo.
- **TPS** oznacza, ile z tych kawałków tekstu model przetworzył na sekundę.

<br /><br />

<a id="translate"></a>
## Tłumacz

Użyj **Tłumacz**, gdy chcesz przekonwertować tekst z jednego języka na drugi.

![Obszar roboczy Tłumacz](../images/screenshots/pl/translate.png)

<br />

<a id="translate-text"></a>
### Tłumacz tekst

1. Otwórz **Tłumacz**.
2. Wybierz język w **Z**.
3. Wybierz język w **Na**.
4. Wybierz model w pasku narzędzi.
5. Wpisz lub wklej tekst do **Wejście**.
6. Kliknij **Tłumacz**.
7. Przeczytaj wynik w **Wyjście**.
8. Użyj przycisku kopiowania, jeśli chcesz skopiować wynik.

<br />

<a id="language-selection"></a>
### Wybór języka

- **Z** może być określonym językiem lub **Wykryj język**.
- **Na** to język, w którym chcesz uzyskać wynik.

Twój wybrany **Ulubione języki** pojawia się na górze listy. Możesz je ustawić w [**Ustawienia** > **Języki**](#languages).

<br />

<a id="helpful-translation-settings"></a>
### Przydatne ustawienia tłumaczenia

W [**Ustawienia** > **Ustawienia ogólne**](#general-settings), możesz zmienić zachowanie tłumaczenia:

- **Automatyczne tłumaczenie po wklejeniu** uruchamia tłumaczenie zaraz po wklejeniu tekstu.
- **Automatyczne kopiowanie wyniku do schowka** kopiuje wynik automatycznie po pomyślnym zakończeniu.
- **Tłumaczenie w czasie rzeczywistym (podczas pisania)** uruchamia tłumaczenia w trakcie pisania.
- **Czas oczekiwania (ms)** kontroluje, jak długo aplikacja czeka przed uruchomieniem tłumaczenia w czasie rzeczywistym.

<br />

<a id="keyboard-shortcuts"></a>
### Skróty klawiaturowe

W [**Ustawienia** > **Ustawienia ogólne**](#general-settings), **Zachowanie przy ENTER** kontroluje, co się dzieje po naciśnięciu Enter:

- **Enter** może uruchomić zadanie, a **Shift+Enter** dodać nową linię.
- Lub aplikacja może robić odwrotnie.

Aktualny skrót jest również wyświetlany na przycisku **Tłumacz**.

<br /><br />

<a id="rewrite"></a>
## Przepisuj

Użyj **Przepisuj**, gdy chcesz poprawić sformułowanie bez zmiany głównego znaczenia.

![Obszar roboczy Przepisuj](../images/screenshots/pl/rewrite.png)

Jest to przydatne do:

- naprawiania pisowni i gramatyki
- uczynienia tekstu jaśniejszym
- uczynienia tekstu bardziej formalnego lub mniej formalnego
- skracania lub rozszerzania tekstu
- uczynienia tekstu bardziej technicznym

<br />

<a id="rewrite-text"></a>
### Przepisz tekst

1. Otwórz **Przepisuj**.
2. Wybierz **Tryb**.
3. Wybierz model w pasku narzędzi.
4. Wpisz lub wklej tekst do **Wejście**.
5. Kliknij **Przepisuj**.
6. Przejrzyj wynik w **Wyjście**.

To samo zachowanie klawisza Enter opisane w [**Tłumacz**](#keyboard-shortcuts) dotyczy również tego miejsca.

<br /><br />

<a id="transform"></a>
## Transformuj

Użyj **Transformuj**, gdy chcesz, aby AI postępowało zgodnie z niestandardowym zestawem instrukcji.

![Obszar roboczy Transformuj](../images/screenshots/pl/transform.png)

To jest najbardziej elastyczny obszar aplikacji. Możesz go użyć do zadań takich jak:

- streszczenie notatek
- zmiana zgrubnego tekstu w dopracowanego e-maila
- wyodrębnianie kluczowych punktów
- konwersja tekstu do określonego formatu

<br />

<a id="run-an-existing-prompt"></a>
### Uruchom istniejący prompt

1. Otwórz **Transformuj**.
2. Wybierz prompt z listy promptów.
3. Jeśli pojawia się pole **Język docelowy**, wybierz język, jeśli chcesz.
4. Wpisz lub wklej tekst do **Wejście**.
5. Kliknij **Transformuj**.
6. Przeczytaj wynik w **Wyjście**.

<br />

<a id="if-you-have-no-prompts-yet"></a>
### Jeśli nie masz jeszcze promptów

Jeśli twoja lista promptów jest pusta, kliknij **Załaduj przykładowe prompty**. To dodaje wbudowane przykłady, abyś mógł szybko zacząć.

> ℹ️ **UWAGA**<br/>
> Przykładowe prompty są dostarczane po angielsku. Po ich załadowaniu możesz edytować prompt i użyć **Przetłumacz prompt**, jeśli chcesz dostosować tekst promptu dla innego języka.

<br />

<a id="create-a-prompt-quickly"></a>

### Szybkie utworzenie promptu

Najszybszy sposób na utworzenie promptu:

1. Kliknij **Nowy prompt**.
2. Kliknij **Generuj prompt**.
3. Opisz, co ma robić prompt.
4. Wybierz model.
5. Pozwól aplikacji utworzyć szkic.
6. Przejrzyj szkic i kliknij **Zapisz**.

![Generuj prompt](../images/screenshots/pl/transform-generate.png)


<br />

### Edycja promptu

Podczas tworzenia lub edycji promptu edytor pojawia się po lewej stronie, a panel testowy po prawej.

![Edytor promptu Transform](../images/screenshots/pl/transform-prompt-edit.png)

Główne pola to:

- **Nazwa promptu**: nazwa wyświetlana na liście promptów.
- **Instrukcje promptu (opcjonalnie)**: krótka podpowiedź wyświetlana użytkownikowi przy uruchomieniu promptu.
- **Rola modelu**: ogólna rola przypisana do AI, np. 'Jesteś pomocnym asystentem.'
- **Instrukcje modelu (jedna w każdym wierszu)**: konkretne zasady, które mają być przestrzegane przez AI.
- **Opis wyniku**: krótkie słowo opisujące rezultat, np. 'podsumowanie' lub 'przepisanie'.
- **Temperatura (0.0 → 1.0)**: suwak kreatywności.
- **Żądaj języka docelowego**: dodaje selektor języka docelowego przy uruchamianiu promptu.

Jeśli termin **Temperatura** jest dla Ciebie nowy, pomyśl o tym tak:

- **Niższa** temperatura daje bardziej stabilne, przewidywalne wyniki.
- **Wyższa** temperatura daje większą różnorodność i kreatywność.

Możesz również użyć:

- **`Generuj prompt`** do utworzenia nowego szkicu z prostej opisu
- **`Ulepsz prompt`** do udoskonalenia istniejącego promptu
- **`Przetłumacz prompt`** do przetłumaczenia pól promptu

> ⚠️ **OSTRZEŻENIE**<br/>
> Kliknij **`Zapisz`** zanim klikniesz **`Powrót do uruchamiania`**. Jeśli wrócisz bez zapisania, Twoje zmiany zostaną utracone.

<br />

<a id="test-a-prompt-before-using-it"></a>
### Przetestuj prompt przed użyciem

Panel testowy po prawej stronie pozwala wypróbować prompt z przykładowym tekstem, zanim użyjesz go w codziennej pracy.

Jest to przydatne, gdy:

- tworzysz nowy prompt
- porównujesz dwie wersje promptu
- chcesz sprawdzić ton, długość lub format wyniku

<br />

<a id="manage-saved-prompts"></a>
### Zarządzaj zapisanymi promptami

Aby zarządzać zapisanymi promptami w jednym miejscu, otwórz [**Ustawienia** > **Prompty Transform**](#transform-prompts).

Tam możesz:

- wyświetlić i usuwać swoje prompty
- eksportować prompty jako **JSON**, **CSV** lub **XLSX**
- importować prompty z pliku

<br /><br />

## Pulpit nawigacyjny

Użyj **Pulpit nawigacyjny**, aby zobaczyć, jak często używasz aplikacji i jakie są koszty.

![Podsumowanie pulpitu nawigacyjnego](../images/screenshots/pl/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### Filtruj dane

Użyj przycisków filtru na górze, aby zmienić zakres czasu.

![Filtry pulpitu nawigacyjnego](../images/screenshots/pl/dashboard-filter.png)

> ℹ️ **UWAGA**<br/>
> W wersji internetowej administratorzy mogą również zobaczyć filtr **Użytkownik**. Pozwala on przełączać się między **Wszyscy użytkownicy** a pojedynczym użytkownikiem.

<br />

<a id="dashboard-tabs"></a>
### Karty pulpitu nawigacyjnego

- **Podsumowanie** daje ogólny przegląd użycia i kosztów.
- **Według użycia** rozbija aktywność według języka tłumaczenia, trybu przepisywania i promptu transform.
- **Według modelu** pokazuje, które modele były używane i jakie miały koszty.
- **Według dnia** pokazuje dzienne sumy.
- **Wszystkie wywołania** pokazuje pełną historię wywołań i pozwala na jej eksport.

<br />

<a id="export-data"></a>
### Eksportuj dane

Tabele pulpitu nawigacyjnego mogą eksportować dane w formatach:

- **JSON**
- **CSV**
- **XLSX**

Jest to przydatne, jeśli chcesz przejrzeć aktywność poza aplikacją lub udostępnić raport.

<br />

<a id="delete-stored-records-for-a-model"></a>
### Usuń zapisane rekordy dla modelu

W **Według modelu** lub **Wszystkie wywołania** możesz usunąć zapisane rekordy dla modelu.

> ⚠️ **OSTRZEŻENIE**<br/>
> Usunięcie zapisanych rekordów nie może zostać cofnięte. Używaj tej opcji tylko, jeśli jesteś pewien, że nie potrzebujesz już tej historii.

Aby usunąć wszystkie dane lub usuwać rekordy na podstawie ich wieku, przejdź do [**Ustawienia** > **Śledzenie kosztów**](#cost-tracking). Tam znajdziesz opcje usuwania wszystkich zapisanych danych lub tylko danych starszych niż określona data.

<br /><br />

<a id="settings"></a>
## Ustawienia

Otwórz **Ustawienia** z paska bocznego, aby dostosować sposób działania aplikacji.

Dostępne karty mogą się różnić:

- **Konfiguracja API** jest dostępna tylko w aplikacji desktopowej.
- **Użytkownicy** jest dostępne tylko w aplikacji internetowej i tylko dla administratorów.

<br />

<a id="general-settings"></a>

### Ustawienia ogólne

Użyj **Ustawień ogólnych**, aby kontrolować zachowanie pisania i wygląd.

**Zachowanie**

- **Zachowanie dla ENTER** wybiera, czy Enter uruchomi zadanie, czy wstawi nową linię.
- **Tłumacz automatycznie po wklejeniu** rozpoczyna tłumaczenie zaraz po wklejeniu tekstu.
- **Kopiuj wynik automatycznie do schowka** automatycznie kopiuje pomyślne wyniki.
- **Tłumaczenie w czasie rzeczywistym (podczas pisania)** tłumaczy w miarę pisania.
- **Czas oczekiwania (ms)** ustawia czas oczekiwania na tłumaczenie w czasie rzeczywistym.

**Wygląd**

- **Cyfr części ułamkowych kosztu** zmienia sposób wyświetlania dziesiętnych części kosztu.
- **Czcionka** zmienia czcionkę używaną w panelach tekstowych.
- **Rozmiar** zmienia rozmiar czcionki.
- **Tylko web:** **pokaż margines wokół aplikacji** dodaje dodatkową przestrzeń wokół interfejsu.

<br />

<a id="models"></a>
### Modele

Użyj **Ustawienia** > **Modele**, aby wybrać, które modele pojawią się na pasku narzędzi.

![ Zakładka Modele w ustawieniach](../images/screenshots/pl/settings-models.png)

Strona posiada dwie listy:

- **Dostępne modele** po lewej stronie
- **Wybrane modele** po prawej stronie

Przydatne sterowania obejmują:

- **Wyszukaj modele...** aby znaleźć model po nazwie
- **Tylko darmowe** aby pokazać tylko darmowe modele
- **Odśwież** aby przeładować listę
- **Rozwiń wszystko** i **Zwiń wszystko** podczas sortowania według dostawcy

Aby dodać model, kliknij **Dodaj**.

Aby usunąć model, kliknij **X** obok niego w **Wybranych modelach**.

Aby wyczyścić listę, kliknij **Usuń zaznaczenie ze wszystkich**. Wymagany darmowy model pozostanie na liście.

> ℹ️ **UWAGA**<br/>
> Jeśli nie chcesz natychmiast doładować kredytów w OpenRouter, zacznij od włączenia **Tylko darmowe** i wybrania darmowych modeli.

<br />

<a id="languages"></a>
### Języki

Użyj **Ustawienia** > **Języki**, aby zorganizować listy językowe używane w aplikacji.

- **Języki górne** są przypięte w górnej części list językowych w **Tłumaczeniu** i **Transformacji**.
- **Niestandardowy język** pozwala dodać język, którego nie ma na wbudowanej liście.

Jeśli dodasz niestandardowy język, pojawi się w selektorach językowych obok wbudowanych opcji.

<br />

<a id="cost-tracking"></a>
### Śledzenie kosztów

Użyj **Ustawienia** > **Śledzenie kosztów**, aby zarządzać informacjami o kosztach.

- **Całkowity koszt** pokazuje bieżącą sumę.
- **Kopiuj wartość** kopiuje sumę do schowka.
- **Resetuj koszt** ustawia przechowywaną sumę na zero.
- **Synchronizuj z użyciem klucza API** ustawia sumę, aby odpowiadała użyciu zgłoszonym przez OpenRouter.
- **Użycie klucza API** pokazuje szczegóły użycia, jeśli są dostępne.
- **Usuń dane kosztów** usuwa wszystkie dane lub tylko wpisy starsze niż wybrana data.

> ⚠️ **OSTRZEŻENIE**<br/>
> Usunięcie danych nie można cofnąć. Przed usunięciem upewnij się, że dane zostały zbackupowane lub wyeksportowane przez [**Paneł sterowania** > **Wszystkie wezwania**](#dashboard-tabs), w przeciwnym razie zostaną one utracone na stałe.

<br />

<a id="transform-prompts"></a>
### Prompty transformacji

Użyj **Ustawienia** > **Prompty transformacji**, aby zarządzać promptami masowo.

Możesz:

- przejrzeć zapisane prompty
- usunąć prompty
- zaimportować prompty z pliku
- wyeksportować prompty do backupu lub udostępnienia

<br />

<a id="users"></a>
### Użytkownicy

**Tylko web - tylko administrator**

Użyj **Użytkownicy**, aby zarządzać kontami użytkowników w wersji web. Możesz dodawać użytkowników, aktualizować ich dane, resetować hasła i usuwać konta.

<br />

<a id="api-config"></a>
### Konfiguracja API

**Tylko desktop**

Użyj **Konfiguracji API**, aby połączyć aplikację desktop z OpenRouter lub z proxy Transrewrt.

- **Klucz API OpenRouter** to miejsce, gdzie wklejasz swój klucz.
- **URL API** to adres usługi. Pozostaw to na domyślnym, chyba że otrzymałeś inny.
- **Użyj proxy Transrewrt** kieruje żądania przez usługę proxy zamiast bezpośrednio do OpenRouter.
- **Ziarno klucza** pojawia się, gdy opcja proxy jest włączona.
- **Przetestuj konfigurację API** sprawdza, czy bieżąca konfiguracja działa.

Aby uzyskać szczegółowe kroki dotyczące uzyskania klucza API, zobacz [Jak uzyskać klucz API](#jak-uzyska%C5%82-klucz-api-desktop-app) powyżej.

> ℹ️ **UWAGA**<br/>
> Jeśli nie jesteś pewien, co oznaczają **URL API**, **Użyj proxy Transrewrt** lub **Ziarno klucza**, pozostaw je niezmienione i użyj domyślnej konfiguracji OpenRouter. Więcej informacji o proxy jest dostępnych w repozytorium [Transrewrt Proxy](https://github.com/wsj-br/transrewrt-proxy).


<br />

<a id="about"></a>

### Informacje

Karta **Informacje** pokazuje:

- nazwę aplikacji
- numer wersji
- datę kompilacji
- link do repozytorium projektu

<br /><br />

<a id="common-issues"></a>
## Typowe problemy

Jeśli coś nie działa zgodnie z oczekiwaniami, sprawdź najpierw następujące punkty.

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikacja nie będzie tłumaczyć, przepisywać ani przekształcać tekstu

Sprawdź, czy:

- wybrałeś model na pasku narzędzi
- przynajmniej jeden model jest wymieniony w [**Ustawienia** > **Modele**](#models)
- Twoja konfiguracja API działa

Jeśli używasz aplikacji desktopowej:

1. Otwórz [**Ustawienia** > **Konfiguracja API**](#api-config).
2. Sprawdź, czy klucz API jest zapisany.
3. Kliknij **Przetestuj konfigurację API**.

<br />

<a id="the-model-list-is-empty"></a>
### Lista modeli jest pusta

Otwórz [**Ustawienia** > **Modele**](#models) i kliknij **Odśwież**.

W razie potrzeby:

- wyszukaj model
- włącz **Tylko darmowe**
- dodaj jeden lub więcej modeli do **Wybranych modeli**

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Wynik jest zbyt wolny lub zbyt drogi

Wypróbuj jedno lub więcej z tych rozwiązań:

- wybierz inny model
- użyj krótszego wejścia
- wyłącz **Tłumaczenie w czasie rzeczywistym (podczas pisania)** w [**Ustawienia** > **Ustawienia ogólne**](#general-settings)
- używaj darmowych modeli do prostych zadań (patrz [Modele](#models))

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### Interfejs jest w złym języku

Kliknij ikonę globu na [pasku narzędzi](#toolbar) i wybierz preferowany **Język interfejsu**.

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Tekst jest zbyt mały lub trudny do odczytania

Otwórz [**Ustawienia** > **Ustawienia ogólne**](#general-settings) i zmień:

- **Czcionkę**
- **Rozmiar**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Zmieniłem prompt i straciłem edycje

Podczas edycji prompta zawsze kliknij **Zapisz** przed kliknięciem **Powrót do uruchomienia**.

<br /><br />

<a id="quick-tips"></a>
## Szybkie porady

- Zacznij od [**Tłumaczenia**](#translate), aby upewnić się, że konfiguracja działa, zanim przejdziesz do [**Przepisywania**](#rewrite) lub [**Przekształcania**](#transform).
- Używaj [**Przepisywania**](#rewrite) do codziennego poprawiania sformułowań.
- Używaj [**Przekształcania**](#transform), gdy potrzebujesz powtarzalnego workflow dla konkretnego zadania.
- Używaj [**Panelu sterowania**](#dashboard), jeśli chcesz śledzić użycie i koszt.
- Eksportuj prompty regularnie, jeśli budujesz bibliotekę promptów, którą chcesz zabezpieczyć (patrz [Prompty przekształceń](#transform-prompts)).

<br /><br />

<a id="disclaimer"></a>
## Zastrzeżenie

Nazwy produktów i ikony należą do ich właścicieli i są używane wyłącznie w celach identyfikacyjnych. To oprogramowanie nie jest powiązane ani nie jest popierane przez żadną z wymienionych marek.

<br /><br />

<a id="license"></a>
## Licencja

Copyright © 2026 Waldemar Scudeller Jr.

[Licencja Apache 2.0](LICENSE)