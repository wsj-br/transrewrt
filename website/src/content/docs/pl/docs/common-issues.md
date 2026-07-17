---
title: Częste problemy
description: Rozwiązywanie problemów i szybkie wskazówki dotyczące Transrewrt.
---



Jeśli coś nie działa zgodnie z oczekiwaniami, najpierw sprawdź te punkty.

## Aplikacja nie tłumaczy, nie przepisuje ani nie transformuje

Sprawdź, czy:

- wybrano **ustawienie wstępne** (Łatwy) lub **model** (Zaawansowany) na pasku narzędzi
- w trybie **Łatwym** w **Ustawieniach → Ustawienia ogólne** znajduje się **Dostawca** z działającym kluczem (lub adresem URL lokalnego LLM)
- w trybie **Zaawansowanym** w **Ustawieniach → Modele** znajduje się co najmniej jeden model
- konfiguracja API działa (komputer: **Ustawienia → Konfiguracja API → Testuj**)

## Lista modeli jest pusta

W trybie **Łatwym** upewnij się, że **Dostawca** jest ustawiony, a klucze/adresy URL zostały przetestowane. W przypadku **Lokalnego LLM** upewnij się, że serwer lokalny jest uruchomiony, a modele załadowane.

W trybie **Zaawansowanym** otwórz **Ustawienia → Modele**, kliknij **Odśwież** i dodaj modele do **Wybranych modeli**. Opcjonalnie włącz **Tylko darmowe**.

## Zbyt wolno lub zbyt drogo

- Wybierz inne ustawienie wstępne lub model
- Użyj krótszego tekstu wejściowego
- Wyłącz **Tłumaczenie w czasie rzeczywistym podczas pisania** w Ustawieniach ogólnych
- Używaj darmowych modeli do prostych zadań

## Nieprawidłowy język interfejsu

Kliknij ikonę globusa na pasku narzędzi i wybierz swój **Język interfejsu**.

## Tekst jest za mały lub trudny do odczytania

**Ustawienia → Ustawienia ogólne** → zmień **Rodzinę czcionek** i **Rozmiar**.

## Podsumowanie pulpitu nawigacyjnego wygląda na puste

Jest to normalne, jeśli:

- używasz tylko **darmowych modeli** i patrzysz na dane dotyczące **kosztów** (mogą być zerowe); wskaźniki KPI liczby wywołań nadal wymagają danych dla wybranego okresu
- wybrany **filtr czasu** nie obejmuje okresu, w którym wykonywano wywołania — spróbuj wybrać **Wszystkie**

Jeśli wskaźniki KPI nadal wynoszą zero po wybraniu opcji **Wszystkie**, sprawdź [Historię](/docs/history/) lub Pulpit nawigacyjny → **Wszystkie wywołania**.

## Koszt pokazuje „niedostępny” lub wydaje się nieprawidłowy

OpenRouter pokazuje rzeczywiste wydatki, jeśli ma to zastosowanie. W przypadku innych dostawców koszt jest szacowany na podstawie cennika OpenRouter; jeśli żadna cena nie pasuje, koszt jest wyświetlany jako **niedostępny** i nie jest dodawany do sumy.

## Całkowity koszt nie zgadza się z rachunkiem mojego dostawcy

Liczby w aplikacji to **szacunki w celach informacyjnych**, a nie faktury. W przypadku OpenRouter użyj opcji **Ustawienia → Śledzenie kosztów → Synchronizuj z użyciem klucza API**.

## Strona historii brakuje na pasku bocznym

Opcja **Zachowaj historię wykonania** może być wyłączona. Włącz ją w Ustawieniach ogólnych, chyba że historia jest wyłączona przez administratora (`HISTORY_DISABLED` — zobacz [Konfiguracja](/docs/configuration/#privacy-mode)).

## Web: nieoczekiwane przekierowanie do logowania

Twoja sesja mogła wygasnąć. Zaloguj się ponownie. Jeśli zdarza się to często, sprawdź ustawienia czasu życia sesji serwera.

## Administrator sieci: zapomniałem hasła

Jeśli inny administrator może się zalogować, może zresetować hasło w obszarze **Ustawienia → Użytkownicy**. Jeśli nie możesz się zalogować, ale masz dostęp do powłoki:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Domyślna nazwa użytkownika administratora to `admin`. Z repozytorium źródłowego: `pnpm run reset-web-password -- <username> <new-password>`.

## Pulpit nawigacyjny nie pokazuje danych dla innych użytkowników (web)

Tylko **administratorzy** mogą przeglądać innych użytkowników za pomocą filtra **Użytkownik**. Zwykli użytkownicy widzą tylko swoją własną aktywność.

## Zmieniono prompt i utracono edycje

Podczas edytowania promptu Transform kliknij **Zapisz** przed **Powrót do uruchomienia**.

## Szybkie wskazówki

- Zacznij od [Tłumaczenia](/docs/translate/), aby potwierdzić konfigurację przed użyciem funkcji Przepisz lub Przekształć
- Użyj [Przepisz](/docs/rewrite/) do codziennych poprawek sformułowań
- Użyj [Przekształć](/docs/transform/) do powtarzalnych, niestandardowych przepływów pracy
- Pozostań w trybie **Łatwym**, dopóki nie będziesz potrzebować szczegółowych identyfikatorów modeli
- Regularnie eksportuj podpowiedzi, jeśli tworzysz bibliotekę podpowiedzi
- Użyj [Pulpitu nawigacyjnego](/docs/dashboard/) i [Historii](/docs/history/), aby przeglądać użycie i poprzednie uruchomienia

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
