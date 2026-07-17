---
title: Klucz API
description: >-
  Uzyskaj darmowy klucz API OpenRouter i połącz innych dostawców AI z
  Transrewrt.
---



Transrewrt potrzebuje dostępu do co najmniej jednego dostawcy AI. Do rozpoczęcia **nie** potrzebujesz płatnego modelu: OpenRouter oferuje darmowe modele po dodaniu klucza, a kilku innych dostawców również oferuje darmowe poziomy.

Obsługiwani dostawcy obejmują [OpenRouter](https://openrouter.ai), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, każdy kompatybilny z OpenAI punkt końcowy oraz serwery lokalne kompatybilne z OpenAI (Ollama, LM Studio, llama.cpp i podobne).

## Łatwy vs Zaawansowany

- Tryb **łatwy** (domyślny): wybierz **wstępnie ustawiony** (Bezpłatny (OpenRouter), Standardowy, Zaawansowany lub Techniczny) przypisany do **dostawcy**. Wyświetlane są tylko wstępnie ustawione opcje z mapowaniem dla bieżącego dostawcy.
- Tryb **zaawansowany**: wybierz modele bezpośrednio. Identyfikatory modeli używają prefiksu dostawcy (na przykład `openrouter/…`, `openai/…`, `local/…`).

## Darmowy klucz OpenRouter (komputer stacjonarny)

1. Przejdź do [openrouter.ai](https://openrouter.ai) i zarejestruj się lub zaloguj.
2. Otwórz stronę [Klucze](https://openrouter.ai/keys) i utwórz nowy klucz (nazwij go; opcjonalny limit kredytu). Możesz używać darmowych modeli bez dodawania kredytu.
3. W Transrewrt otwórz **Ustawienia → Konfiguracja API**, wklej klucz do **Klucz API OpenRouter** i kliknij **Testuj klucz OpenRouter**.

:::caution
Nie używaj modelu **Body Builder** OpenRouter (`openrouter/bodybuilder`) do tłumaczenia, przepisywania ani transformacji — zwraca on ładunki żądań JSON, a nie ukończony tekst.
:::

## Inne darmowe opcje

Możesz również uzyskać bezpłatne klucze API od Cerebras, Google, Groq, Mistral AI lub [NVIDIA](https://build.nvidia.com/) (API zgodne z OpenAI) albo uruchomić modele lokalnie za pomocą Ollama, LM Studio, llama.cpp lub innego serwera zgodnego z OpenAI (na przykład `translategemma:4b` za pośrednictwem Ollama). Ustaw podstawowy adres URL lokalnego LLM na pełną bazę API (uwzględnij ścieżkę, np. `http://localhost:11434/v1`) w Ustawieniach (wersja desktopowa) lub `LOCAL_LLM_URL` (Docker).

:::caution
Jeśli używasz serwera LLM lokalnego z innego urządzenia lub kontenera, skonfiguruj go w celu zezwolenia na połączenia zewnętrzne (nie tylko localhost).
:::

## Docker / web

Ustaw klucze dostawcy jako **zmienne środowiskowe** na serwerze (na przykład `PROVIDER_API_KEY`). Użytkownicy nie mogą wpisywać kluczy do interfejsu przeglądarki. Zobacz [Konfiguracja](/docs/configuration/).

## Lista kontrolna pierwszego uruchomienia

1. Otwórz aplikację i w razie potrzeby ustaw **Język interfejsu**.
2. Dodaj i przetestuj co najmniej jeden klucz dostawcy (na komputerze) lub upewnij się, że serwer ma klucze środowiskowe (w sieci).
3. W trybie **Łatwym** wybierz **Dostawcę** w Ustawieniach ogólnych; w trybie **Zaawansowanym** dodaj modele w **Ustawieniach → Modele**.
4. W sekcji **Tłumacz** wybierz ustawienie wstępne lub model i uruchom krótki test — zobacz [Tłumaczenie tekstu](/docs/translate/).
