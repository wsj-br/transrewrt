---
title: Tłumacz tekst
description: >-
  Konwertuj tekst między językami, używaj słownika i dopracowuj wyniki za pomocą
  funkcji Parafrazuj.
---



Użyj funkcji **Tłumacz**, aby konwertować tekst z jednego języka na inny.

![Obszar roboczy tłumaczenia](/images/screenshots/pl/translate.png)

## Wymagania wstępne

- Co najmniej jeden klucz dostawcy (pulpit) lub klucz środowiska serwera (sieć) — zobacz [Klucz API](/docs/api-key/)
- **Preset** (łatwy) lub **model** (zaawansowany) wybrany na pasku narzędzi

## Tłumacz tekst

1. Otwórz **Tłumacz** na pasku bocznym.
2. Wybierz język w polu **Z** (lub **Wykryj język**).
3. Wybierz język w polu **Na**.
4. Wybierz preset lub model na pasku narzędzi.
5. Wpisz lub wklej tekst w polu **Wejście**.
6. Kliknij **Tłumacz**.
7. Przeczytaj wynik w polu **Wyjście**, a następnie skopiuj, jeśli to konieczne.

**Najpopularniejsze języki** pojawiają się na początku list — ustaw je w [Ustawienia → Języki](/docs/settings/#languages).

## Przydatne ustawienia

W [Ustawienia → Ustawienia ogólne](/docs/settings/#general-settings):

- **Automatyczne wykonanie po wklejeniu** — uruchamia się natychmiast po wklejeniu
- **Automatyczne kopiowanie wyniku do schowka** — kopiuje po pomyślnym uruchomieniu
- **Tłumaczenie w czasie rzeczywistym podczas pisania** — uruchamia się podczas pisania (może zwiększyć koszty)
- **Limit czasu (ms)** — czas oczekiwania przed uruchomieniem w czasie rzeczywistym
- **Zachowanie dla klawisza ENTER** — czy klawisz Enter uruchamia zadanie, czy wstawia nową linię

## Układ i klawiatura

- **Przełącznik układu** — przyciski nad panelami przełączają między układami wejścia/wyjścia **obok siebie** i **ułożonymi w stos**. Wybór dotyczy funkcji Tłumacz, Przepisz i Przekształć i jest zapamiętywany na tym urządzeniu.
- **Enter** lub **Shift+Enter** uruchamia zadanie, w zależności od **Zachowania dla klawisza ENTER** (patrz wyżej).
- **Escape** czyści panel wejścia (lub najpierw zamyka otwarte menu lub okno dialogowe).

## Dopracuj tłumaczenie

Po pomyślnym uruchomieniu, obok selektora **Na:** pojawia się **Parafrazuj…** i rozwijana lista wersji:

1. **Parafrazuj…** (brak wyboru) — kolejne pełne tłumaczenie tego samego tekstu wejściowego. Do **pięciu** wersji; model widzi poprzednie wersje, więc sformułowanie może się różnić. Kliknij **Zatrzymaj tłumaczenie**, aby anulować trwające parafrazowanie.
2. **Alternatywy słów** — wybierz słowa lub krótką frazę, a następnie kliknij prawym przyciskiem myszy lub **Parafrazuj…**. Wybierz alternatywę, aby zastąpić zakres (może się nieco poszerzyć dla gramatyki). Przy pięciu wersjach aktualizowana jest tylko wersja 5.
3. Każde żądanie parafrazowania lub alternatyw ponownie wykorzystuje model i może zwiększyć koszty.

## Użyj słownika

**Słownik** to pary terminów źródłowych/docelowych dla pary języków. Po włączeniu pasujące terminy są wysyłane do modelu, dzięki czemu preferowane sformułowanie pozostaje spójne.

1. Włącz **Słownik** w panelu wprowadzania.
2. Tłumacz jak zwykle — terminy dla tej pary **Z** / **Na** zostaną zastosowane automatycznie.
3. Kliknij **Dodaj do słownika** (obok **Z:**), aby szybko dodać nową parę.
4. Zarządzaj wszystkimi terminami w [Ustawienia → Słownik](/docs/settings/#glossary).

:::note
Terminy słownikowe są dopasowywane według pary językowej. Nie można ich używać z opcją **Wykryj język** jako językiem źródłowym.
:::

## Następne kroki

- [Przepisz tekst](/docs/rewrite/)
- [Przekształć za pomocą podpowiedzi](/docs/transform/)
- [Częste problemy](/docs/common-issues/)
