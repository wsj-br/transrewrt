---
title: Korzystanie z pulpitu nawigacyjnego
description: >-
  Przeglądaj użycie, koszty i dzienniki połączeń — filtruj, eksportuj i
  zarządzaj przechowywanymi rekordami.
---



Użyj **Pulpitu nawigacyjnego**, aby zobaczyć, ile używasz aplikacji i ile to kosztuje (w przypadku płatnych modeli).

![Podsumowanie pulpitu nawigacyjnego](/images/screenshots/pl/dashboard-summary.png)

:::note
Kwoty kosztów mogą być wyświetlane jako **0 USD**, jeśli używasz bezpłatnych modeli, dostawca nie obsługuje śledzenia kosztów lub używasz lokalnego LLM. Wskaźniki KPI liczby wywołań w sekcji **Podsumowanie** odzwierciedlają rzeczywiste użycie niezależnie od tego — są równe zero tylko wtedy, gdy w wybranym okresie nie było żadnej aktywności.
:::

## Filtrowanie danych

Użyj przycisków filtra u góry, aby zmienić zakres czasu.

Filtr **Użytkownik** jest widoczny tylko dla administratorów w wersji internetowej; nie jest dostępny na komputerach stacjonarnych.

## Zakładki

- **Podsumowanie** — KPI: całkowity koszt, użyte modele, liczba połączeń i koszt na tryb, średni koszt na połączenie, średnia liczba TPS, najlepsze modele według liczby połączeń
- **Według modelu** — połączenia, koszt i TPS na model; rozwiń wiersz, aby uzyskać podział według trybu
- **Wszystkie połączenia** — pełny dziennik połączeń (stronicowany lub w kartach) z eksportem

## Eksport danych

Eksportuj tabele jako **JSON**, **CSV** lub **XLSX**.

## Usuwanie przechowywanych rekordów dla modelu

W sekcji **Według modelu** lub **Wszystkie połączenia** użyj ikony kosza, aby usunąć rekordy dla modelu.

:::caution
Usunięcia nie można cofnąć. Aby usunąć według wieku lub wyczyścić wszystkie dane kosztów, użyj [Ustawienia → Śledzenie kosztów](/docs/settings/#cost-tracking).
:::

## Następne kroki

- [Przeglądaj historię](/docs/history/)
- [Ustawienia](/docs/settings/)
- [Częste problemy](/docs/common-issues/)
