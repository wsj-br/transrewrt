---
title: Klucz API
description: >-
  Połącz Transrewrt z wybranym dostawcą AI, dodając klucz API, lub zamiast tego
  użyj modelu lokalnego.
---



Transrewrt nie zawiera własnej sztucznej inteligencji — wysyła Twój tekst do wybranego przez Ciebie dostawcy AI. Aby połączyć się z dostawcą, dodajesz **klucz API**: prywatny kod, wydany przez dostawcę, który działa jak hasło do jego usługi. Na początek potrzebujesz tylko **jednego** dostawcy i nie musisz płacić: kilku dostawców oferuje darmowe modele lub darmowe poziomy, a także możesz uruchamiać modele na własnym komputerze bez żadnego klucza.

Obsługiwani dostawcy to OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, dowolny punkt końcowy zgodny z OpenAI oraz lokalne serwery zgodne z OpenAI (Ollama, LM Studio, llama.cpp i podobne).

## Krok 1 — Wybierz dostawcę

Działa każdy obsługiwany dostawca. Jeśli nie masz pewności, którego wybrać:

- **Darmowy na początek**: OpenRouter, Google Gemini, Groq, Mistral, Cerebras i NVIDIA oferują darmowe modele lub darmowe poziomy.
- **Masz już konto?** Jeśli używasz już OpenAI, Anthropic lub innego obsługiwanego dostawcy, możesz po prostu ponownie użyć tego konta.
- **Wolisz trzymać wszystko na własnym komputerze?** Pomiń całkowicie klucz i zamiast tego użyj [modelu lokalnego](#using-a-local-model-instead-no-api-key).

## Krok 2 — Utwórz klucz API

Dokładne kroki różnią się nieco w zależności od dostawcy, ale schemat jest wszędzie taki sam:

1. Zarejestruj się lub zaloguj na stronie internetowej dostawcy. W Transrewrt w **Ustawienia → Konfiguracja API** każdy dostawca ma link **Otwórz stronę dostawcy**, który przeniesie Cię we właściwe miejsce.
2. Znajdź stronę **Klucze API** (czasami w sekcji konto, pulpit nawigacyjny lub ustawienia programisty) i utwórz nowy klucz. Niektórzy dostawcy proszą o nazwanie klucza lub ustawienie limitu wydatków — oba są opcjonalne.
3. Skopiuj klucz. Jest to długi ciąg liter i cyfr, często zaczynający się od czegoś w rodzaju `sk-`.

:::note
Traktuj klucz API jak hasło: nie udostępniaj go, nie publikuj ani nie wysyłaj nikomu. Jeśli klucz wycieknie, usuń go na stronie dostawcy i utwórz nowy.
:::

## Krok 3 — Dodaj i przetestuj klucz (komputer stacjonarny)

1. W Transrewrt otwórz **Ustawienia → Konfiguracja API**.
2. Wklej klucz w polu dla swojego dostawcy (na przykład **Klucz API Google Gemini**) i zapisz go.
3. Kliknij **Testuj** obok pola, aby potwierdzić, że klucz działa.

Po pomyślnym zakończeniu testu jesteś gotowy — wybierz tego dostawcę na ekranie głównym i rozpocznij tłumaczenie.

## Używanie modelu lokalnego zamiast (bez klucza API)

Możesz uruchamiać modele na własnym komputerze za pomocą Ollama, LM Studio, llama.cpp lub innego serwera zgodnego z OpenAI (na przykład `google/gemma-4-e2b` za pośrednictwem LM Studio). Nic nie opuszcza Twojej maszyny i nie jest potrzebny żaden klucz API.

Aby połączyć jeden, ustaw podstawowy adres URL lokalnego LLM na pełną bazę API, włączając ścieżkę — na przykład `http://localhost:11434/v1`. Na komputerze stacjonarnym ustaw to w **Ustawienia → Konfiguracja API**; w Dockerze zamiast tego ustaw zmienną środowiskową `LOCAL_LLM_URL`.

:::tip
Jeśli używasz lokalnego serwera LLM z innego urządzenia lub kontenera, skonfiguruj go tak, aby zezwalał na połączenia zewnętrzne (nie tylko localhost).
:::

## Docker / web

Jeśli używasz Transrewrt w przeglądarce, klucze są zarządzane przez osobę obsługującą serwer, a nie wpisywane w interfejsie użytkownika przeglądarki. Administrator ustawia klucze dostawcy jako **zmienne środowiskowe** na serwerze (na przykład `PROVIDER_API_KEY`) — zobacz [Konfiguracja](/docs/configuration/).

## Lista kontrolna pierwszego uruchomienia

1. Otwórz aplikację i w razie potrzeby ustaw **Język interfejsu**.
2. Dodaj i przetestuj co najmniej jeden klucz dostawcy — lub skonfiguruj model lokalny (komputer stacjonarny), lub potwierdź, że serwer ma klucze środowiskowe (internet).
3. W trybie **Łatwy** wybierz **Dostawcę** w Ustawieniach ogólnych; w trybie **Zaawansowany** dodaj modele w **Ustawienia → Modele** — zobacz [Ustawienia](/docs/settings/#general-settings) dla obu trybów.
4. Na stronie **Tłumacz** wybierz ustawienie wstępne lub model i uruchom krótki test — zobacz [Tłumaczenie tekstu](/docs/translate/).

## Jeśli coś nie działa

- **Test klucza kończy się niepowodzeniem**: sprawdź, czy klucz został skopiowany w całości (bez spacji przed i po) i czy nie został usunięty lub wyłączony na stronie dostawcy.
- **Tłumaczenia kończą się niepowodzeniem z powodu błędu limitu lub kredytu**: darmowe poziomy mają dzienne lub miesięczne limity; poczekaj, przełącz się na innego darmowego dostawcę lub dodaj kredyt.
- **W trybie łatwym nie pojawia się żaden dostawca**: otwórz **Ustawienia → Konfiguracja API** i upewnij się, że skonfigurowano i przetestowano co najmniej jeden klucz (lub adres URL lokalnego LLM).

Więcej pomocy: [Częste problemy](/docs/common-issues/).
