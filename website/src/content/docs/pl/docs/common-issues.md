---
title: Częste problemy
description: Rozwiązywanie problemów i szybkie porady dotyczące Transrewrt.
---



Jeśli coś nie działa zgodnie z oczekiwaniami, najpierw sprawdź te punkty.

## Aplikacja nie tłumaczy, nie przepisuje ani nie transformuje

Sprawdź, czy:

- wybrano **ustawienie wstępne** (Łatwe) lub **model** (Zaawansowane) na pasku narzędzi
- w trybie **Łatwym** w **Ustawienia → Ustawienia ogólne** jest **Dostawca** z działającym kluczem (lub adresem URL lokalnego LLM)
- w trybie **Zaawansowanym** model jest wybrany na pasku narzędzi (pusta lista jest dozwolona, ale aby uruchomić, potrzebujesz co najmniej jednego modelu w **Ustawienia → Modele**)
- konfiguracja API działa (komputer: **Ustawienia → Konfiguracja API → Testuj**)

## Lista modeli jest pusta

W trybie **Łatwym** upewnij się, że **Dostawca** jest ustawiony, a klucze/adresy URL zostały przetestowane. W przypadku **Lokalnego LLM** upewnij się, że serwer lokalny jest uruchomiony i modele są załadowane.

W trybie **Zaawansowanym** wybrane modele mogą być puste. Otwórz **Ustawienia → Modele**, kliknij **Odśwież** i dodaj modele do **Wybranych modeli**. Opcjonalnie włącz **Tylko darmowe**. Usunięcie ostatniego modelu z paska narzędzi również otwiera Ustawienia → Modele.

## Zbyt wolno lub zbyt drogo

- Wybierz inne ustawienie wstępne lub model
- Użyj krótszego tekstu wejściowego
- Wyłącz **Tłumaczenie w czasie rzeczywistym podczas pisania** w Ustawieniach ogólnych
- Używaj darmowych modeli do prostych zadań

## Niewłaściwy język interfejsu

Kliknij ikonę globusa na pasku narzędzi i wybierz swój **Język interfejsu**.

## Tekst jest za mały lub trudny do odczytania

**Ustawienia → Ustawienia ogólne** → zmień **Rodzinę czcionek** i **Rozmiar**.

## Podsumowanie pulpitu nawigacyjnego wygląda na puste

Jest to normalne, jeśli:

- używasz tylko **darmowych modeli** i patrzysz na dane dotyczące **kosztów** (mogą być zerowe); wskaźniki KPI dotyczące liczby połączeń nadal potrzebują danych za wybrany okres
- wybrany **filtr czasu** nie obejmuje okresu, w którym wykonano połączenia — spróbuj **Wszystkie**

Jeśli wskaźniki KPI nadal wynoszą zero po wybraniu opcji **Wszystkie**, sprawdź [Historię](/docs/history/) lub Pulpit nawigacyjny → **Wszystkie połączenia**.

## Koszt pokazuje „niedostępny” lub wydaje się błędny

OpenRouter pokazuje rzeczywiste wydatki, jeśli ma to zastosowanie. W przypadku innych dostawców koszt jest szacowany na podstawie cennika OpenRouter; jeśli żadna cena nie pasuje, koszt jest wyświetlany jako **niedostępny** i nie jest dodawany do sumy.

## Całkowity koszt nie zgadza się z rachunkiem od mojego dostawcy

Liczby w aplikacji to **szacunki w celach informacyjnych**, a nie faktury. W przypadku OpenRouter użyj opcji **Ustawienia → Śledzenie kosztów → Synchronizuj z użyciem klucza API**.

## Strona historii brakuje na pasku bocznym

Opcja **Zachowaj historię wykonania** może być wyłączona. Włącz ją w Ustawieniach ogólnych, chyba że historia jest wyłączona przez administratora (`HISTORY_DISABLED` — zobacz [Konfiguracja](/docs/configuration/#privacy-mode)).

## Web: nieoczekiwane przekierowanie do logowania

Twoja sesja mogła wygasnąć. Zaloguj się ponownie. Jeśli zdarza się to często, poproś administratora o zwiększenie **Limitu czasu sesji** w [Ustawieniach → Użytkownicy](/docs/settings/#users) (administrator mógł również unieważnić Twoje sesje).

## Administrator sieci: zapomniałem hasła

Jeśli inny administrator może się zalogować, może zresetować hasło w **Ustawieniach → Użytkownicy**. Jeśli jesteś zablokowany, ale masz dostęp do powłoki:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Domyślna nazwa użytkownika administratora to `admin`. Z repozytorium źródłowego: `pnpm run reset-web-password -- <username> <new-password>`.

## Pulpit nawigacyjny nie pokazuje danych dla innych użytkowników (web)

Tylko **administratorzy** mogą przeglądać innych użytkowników za pomocą filtra **Użytkownik**. Zwykli użytkownicy widzą tylko swoją własną aktywność.

## Zmieniłem prompt i straciłem edycje

Podczas edycji promptu Transform kliknij **Zapisz** przed **Powrót do uruchomienia**.

## Szybkie wskazówki

- Zacznij od [Tłumaczenia](/docs/translate/), aby potwierdzić konfigurację przed Przepisywaniem lub Transformacją
- Użyj [Przepisywania](/docs/rewrite/) do codziennych ulepszeń sformułowań
- Użyj [Transformacji](/docs/transform/) do powtarzalnych, niestandardowych przepływów pracy
- Pozostań w trybie **Łatwym**, dopóki nie będziesz potrzebować szczegółowych identyfikatorów modeli
- Regularnie eksportuj prompty, jeśli budujesz bibliotekę promptów
- Użyj [Pulpitu nawigacyjnego](/docs/dashboard/) i [Historii](/docs/history/), aby przeglądać użycie i poprzednie uruchomienia

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
