---
title: Tłumacz tekst
description: >-
  Konwertuj tekst między językami, używaj glosariusza i dopracowuj wyniki za
  pomocą funkcji Parafrazuj.
translation_last_updated: '2026-07-17T21:14:47.496Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: ace9ad02a7dc82bf08090597c56e7cc82324e6250beab93fc2dbeaeed8b91675
translation_language: pl
source_file_path: src/content/docs/docs/translate.md
translation_models:
  - google/gemini-2.5-flash
---



Użyj funkcji **Tłumacz**, aby przekonwertować tekst z jednego języka na inny.

![Przetłumacz obszar roboczy](/images/screenshots/pl/translate.png)

## Wymagania wstępne

- Co najmniej jeden klucz dostawcy (pulpit) lub klucz środowiska serwera (sieć) — zobacz [klucz API](/docs/api-key/)
- **Ustawienie wstępne** (Łatwe) lub **model** (Zaawansowane) wybrane na pasku narzędzi

## Tłumacz tekst

1. Otwórz **Tłumacz** na pasku bocznym.
2. Wybierz język w polu **Z** (lub **Wykryj język**).
3. Wybierz język w polu **Na**.
4. Wybierz ustawienie wstępne lub model na pasku narzędzi.
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
- **Zachowanie dla ENTER** — czy Enter uruchamia zadanie, czy wstawia nową linię

## Dopracuj tłumaczenie

Po pomyślnym uruchomieniu obok selektora **Na:** pojawiają się **Parafrazuj…** i rozwijana lista wersji:

1. **Parafrazuj…** (brak wyboru) — kolejne pełne tłumaczenie tego samego tekstu wejściowego. Do **pięciu** wersji; model widzi poprzednie wersje, więc sformułowanie może się różnić. Kliknij **Zatrzymaj tłumaczenie**, aby anulować trwające parafrazowanie.
2. **Alternatywy słów** — wybierz słowa lub krótką frazę, a następnie kliknij prawym przyciskiem myszy lub **Parafrazuj…**. Wybierz alternatywę, aby zastąpić zakres (może się nieznacznie poszerzyć ze względu na gramatykę). W przypadku pięciu wersji aktualizowana jest tylko wersja 5.
3. Każde żądanie parafrazowania lub alternatyw ponownie wykorzystuje model i może zwiększyć koszty.

## Użyj glosariusza

**Glosariusz** to pary terminów źródłowych/docelowych dla pary języków. Po włączeniu pasujące terminy są wysyłane do modelu, dzięki czemu preferowane sformułowanie pozostaje spójne.

1. Włącz **Glosariusz** w panelu wejściowym.
2. Tłumacz jak zwykle — terminy dla tej pary **Z** / **Na** są stosowane automatycznie.
3. Kliknij **Dodaj do glosariusza** (obok **Z:**), aby szybko dodać nową parę.
4. Zarządzaj wszystkimi terminami w [Ustawienia → Glosariusz](/docs/settings/#glossary).

:::note
Terminy słownikowe są dopasowywane według pary językowej. Nie można ich używać z opcją **Wykryj język** jako źródłem.
:::

## Następne kroki

- [Przepisz tekst](/docs/rewrite/)
- [Przekształć za pomocą podpowiedzi](/docs/transform/)
- [Częste problemy](/docs/common-issues/)
