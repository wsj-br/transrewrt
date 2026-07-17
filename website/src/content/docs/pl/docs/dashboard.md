---
title: Użyj pulpitu nawigacyjnego
description: >-
  Przeglądaj użycie, koszty i dzienniki połączeń — filtruj, eksportuj i
  zarządzaj zapisanymi rekordami.
translation_last_updated: '2026-07-17T21:14:47.217Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 689c93c2517f806f7976d570b4fc86d30ca048ce906d982429b985ad06dd9250
translation_language: pl
source_file_path: src/content/docs/docs/dashboard.md
translation_models:
  - google/gemini-2.5-flash
---



Użyj **Pulpitu nawigacyjnego**, aby sprawdzić, w jakim stopniu korzystasz z aplikacji i jakie są związane z tym koszty (w przypadku płatnych modeli).

![Podsumowanie pulpitu nawigacyjnego](/images/screenshots/pl/dashboard-summary.png)

:::note
Jeśli używasz tylko **bezpłatnych** modeli, kwoty kosztów mogą wynosić zero. Wskaźniki KPI dotyczące liczby połączeń w sekcji **Podsumowanie** nadal wymagają aktywności w wybranym okresie.
:::

## Filtruj dane

Użyj przycisków filtra u góry, aby zmienić zakres czasu.

:::note
Filtr **Użytkownik** jest widoczny tylko dla administratorów w wersji internetowej. Nie jest dostępny na komputerach stacjonarnych.
:::

## Zakładki

- **Podsumowanie** — wskaźniki KPI: całkowity koszt, używane modele, liczba połączeń i koszt na tryb, średni koszt na połączenie, średnia liczba transakcji na sekundę (TPS), najlepsze modele według liczby połączeń
- **Według modelu** — połączenia, koszt i TPS na model; rozwiń wiersz, aby uzyskać podział według trybu
- **Wszystkie połączenia** — pełny dziennik połączeń (stronicowany lub w postaci kart) z eksportem

## Eksportuj dane

Eksportuj tabele jako **JSON**, **CSV** lub **XLSX**.

## Usuń zapisane rekordy dla modelu

W sekcji **Według modelu** lub **Wszystkie połączenia** użyj ikony kosza, aby usunąć rekordy dla modelu.

:::caution
Usunięcia nie można cofnąć. Aby usunąć dane według wieku lub wyczyścić wszystkie dane kosztów, użyj opcji [Ustawienia → Śledzenie kosztów](/docs/settings/#cost-tracking).
:::

## Następne kroki

- [Przeglądaj historię](/docs/history/)
- [Ustawienia](/docs/settings/)
- [Częste problemy](/docs/common-issues/)
