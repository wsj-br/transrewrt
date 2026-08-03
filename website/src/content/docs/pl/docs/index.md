---
title: Przegląd
description: >-
  Czym jest Transrewrt i jak znaleźć dokumentację dotyczącą instalacji,
  przewodników i ustawień.
---



**Transrewrt** to oparte na sztucznej inteligencji narzędzie tekstowe typu open source do:

- **Tłumaczenia** — między dziesiątkami języków, z automatycznym wykrywaniem źródła i glosariuszami
- **Przepisywania** — poprawiania gramatyki, zwiększania przejrzystości, zmiany tonu lub długości
- **Transformacji** — uruchamiania własnych, niestandardowych promptów AI na dowolnym tekście

Obsługuje wielu dostawców AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, punkty końcowe zgodne z OpenAI oraz lokalne serwery zgodne z OpenAI, takie jak Ollama, LM Studio lub llama.cpp). Uruchom go jako **aplikację desktopową** (Windows / Linux) lub **aplikację webową Docker**.

Twoje klucze, Twoje modele, Twój host — nie ma konta Transrewrt w chmurze.

## Jak zorganizowane jest okno

![Obszar roboczy tłumaczenia](/images/screenshots/pl/translate.png)

- **Pasek boczny** — główna nawigacja: Tłumacz, Przepisz, Przekształć, Pulpit, Historia, Ustawienia (oraz zalogowany użytkownik w wersji webowej).
- **Pasek narzędzi** — tytuł strony, selektor **ustawienia wstępnego** (Łatwy) lub **modelu** (Zaawansowany), **język interfejsu** (ikona globusa; nie zmienia języka tłumaczenia z/na) oraz Pomoc (**?**) prowadząca do tej dokumentacji. Menu ustawień wstępnych/modelu może również **przełączyć na tryb Łatwy/Zaawansowany** (powyżej Otwórz ustawienia).
- **Obszar roboczy** — panele Wejście i Wyjście, z liczbą znaków, czasem, TPS i opcjonalnym kosztem. Pasek akcji pokazuje mały link do **wersji** aplikacji (w prawym dolnym rogu) prowadzący do witryny GitHub Pages.

Domyślnie aplikacja działa w trybie **Łatwym**: wybierz **preset** i **Dostawcę** w Ustawieniach. Przełącz na **Zaawansowany** w [Ustawienia → Ustawienia ogólne](/docs/settings/#general-settings), aby uzyskać pełną listę modeli, lub użyj przełącznika w menu presetów/modeli na pasku narzędzi.

## Rozpocznij

1. [Szybki start](/docs/quick-start/) — zainstaluj wersję desktopową lub uruchom z Dockerem
2. [Klucz API](/docs/api-key/) — połącz darmowy klucz OpenRouter lub innego dostawcę
3. [Konfiguracja](/docs/configuration/) — zmienne środowiskowe, ścieżki konfiguracji, uwierzytelnianie internetowe

## Przewodniki

- [Tłumaczenie tekstu](/docs/translate/)
- [Przepisywanie tekstu](/docs/rewrite/)
- [Transformacja za pomocą promptów](/docs/transform/)
- [Korzystanie z Pulpitu nawigacyjnego](/docs/dashboard/)
- [Przeglądanie historii](/docs/history/)

## Referencje i pomoc

- [Ustawienia](/docs/settings/)
- [Częste problemy](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
