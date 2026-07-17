---
title: Transformuj za pomocą promptów
description: >-
  Uruchamiaj niestandardowe instrukcje AI — twórz, edytuj, testuj i zarządzaj
  promptami Transform.
translation_last_updated: '2026-07-17T14:58:59.221Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 07b5d140803063510c7c9fecf67a2f99e3aab3040116733a3126939b0c82e16e
translation_language: pl
source_file_path: src/content/docs/docs/transform.md
translation_models:
  - google/gemini-2.5-flash
---



Użyj **Transform**, gdy chcesz, aby AI postępowała zgodnie z niestandardowymi instrukcjami — podsumowywała, dopracowywała e-mail, wyodrębniała kluczowe punkty, zmieniała format tekstu lub wykonywała dowolny zdefiniowany przez Ciebie przepływ pracy.

![Obszar roboczy Transform](/images/screenshots/pl/transform.png)

## Uruchom istniejący prompt

1. Otwórz **Transform**.
2. Wybierz prompt z listy.
3. Jeśli pojawi się pole języka **Od**, ustaw język, jeśli chcesz.
4. Wpisz lub wklej tekst do pola **Wejście**.
5. Kliknij **Transformuj**.
6. Przeczytaj wynik w polu **Wyjście**.

## Załaduj przykładowe prompty

Jeśli lista jest pusta, kliknij **Załaduj przykładowe prompty** w obszarze roboczym Transform (dostępne również w [Ustawienia → Transform](/docs/settings/#transform)). Przykłady są w języku angielskim; po załadowaniu edytuj prompt i użyj **Przetłumacz prompt**, jeśli to konieczne.

## Utwórz prompt

1. Kliknij **Nowy prompt**.
2. Kliknij **Generuj prompt**.
3. Opisz, co ma robić prompt.
4. Wybierz ustawienie wstępne (Łatwe) lub model (Zaawansowane).
5. Przejrzyj szkic i kliknij **Zapisz**.

## Edytuj prompt

Edytor znajduje się po lewej stronie; obszar testowy po prawej.

![Edytor promptów Transform](/images/screenshots/pl/transform-prompt-edit.png)

Główne pola:

- **Nazwa promptu** — wyświetlana na liście promptów
- **Instrukcje promptu (opcjonalnie)** — krótka wskazówka podczas uruchamiania promptu
- **Rola modelu** — ogólna rola dla AI
- **Instrukcje modelu (jedna na wiersz)** — zasady do przestrzegania
- **Opis wyjścia** — krótka etykieta dla wyniku (np. podsumowane)
- **Temperatura (0.0 → 1.0)** — niższa jest stabilniejsza; wyższa jest bardziej zróżnicowana
- **Zapytaj o język docelowy** — dodaje selektor języka podczas uruchamiania

Pomocnicy: **Generuj prompt**, **Ulepsz prompt**, **Przetłumacz prompt** (Łatwe używa ustawień wstępnych; Zaawansowane używa listy modeli).

:::caution
Kliknij **Zapisz** przed **Powrót do uruchamiania**. Powrót bez zapisywania spowoduje odrzucenie zmian.
:::

## Testowanie przed codziennym użyciem

Użyj prawego panelu testowego z przykładowym tekstem podczas tworzenia lub porównywania promptów.

Eksportuj i importuj prompty zbiorczo w [Ustawienia → Transformacja](/docs/settings/#transform).

## Następne kroki

- [Ustawienia](/docs/settings/)
- [Historia przeglądania](/docs/history/)
- [Częste problemy](/docs/common-issues/)
