---
title: Przegląd
description: >-
  Czym jest Transrewrt i jak znaleźć dokumentację dotyczącą instalacji,
  przewodników i ustawień.
translation_last_updated: '2026-07-17T21:14:47.292Z'
source_file_mtime: '2026-07-17T14:36:51.471Z'
source_file_hash: 6dfcf9cb19e3422d75511ecc06eda72e014214c3e34d95f7fec6d8a05c01896f
translation_language: pl
source_file_path: src/content/docs/docs/index.md
translation_models:
  - google/gemini-2.5-flash
---



**Transrewrt** to oparte na sztucznej inteligencji narzędzie tekstowe typu open source, służące do:

- **Tłumaczenia** — pomiędzy dziesiątkami języków, z automatycznym wykrywaniem źródła i glosariuszami
- **Przepisywania** — poprawiania gramatyki, zwiększania przejrzystości, zmiany tonu lub długości
- **Transformacji** — uruchamiania własnych niestandardowych podpowiedzi AI na dowolnym tekście

Obsługuje wielu dostawców AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, punkty końcowe zgodne z OpenAI oraz lokalne serwery zgodne z OpenAI, takie jak Ollama, LM Studio lub llama.cpp). Uruchom ją jako **aplikację desktopową** (Windows / Linux) lub **samodzielnie hostowaną aplikację webową** (Docker).

Twoje klucze, Twoje modele, Twój host — nie ma konta Transrewrt w chmurze.

## Jak zorganizowane jest okno

- **Pasek boczny** — Tłumacz, Przepisz, Przekształć, Pulpit nawigacyjny, Historia, Ustawienia (oraz zalogowany użytkownik w wersji webowej)
- **Pasek narzędzi** — tytuł strony, selektor **ustawienia wstępnego** (Łatwy) lub **modelu** (Zaawansowany) oraz **Język interfejsu** (ikona globusa; nie zmienia języka tłumaczenia z/na)
- **Obszar roboczy** — panele Wejście i Wyjście z licznikami, czasem, TPS i opcjonalnym kosztem

Domyślnie aplikacja działa w trybie **Łatwym**: wybierz **ustawienie wstępne** i **Dostawcę** w Ustawieniach. Przełącz na tryb **Zaawansowany** w [Ustawienia → Ustawienia ogólne](/docs/settings/#general-settings), aby uzyskać pełną listę modeli.

## Rozpocznij

1. [Szybki start](/docs/quick-start/) — zainstaluj wersję desktopową lub uruchom z Dockerem
2. [Klucz API](/docs/api-key/) — podłącz darmowy klucz OpenRouter lub innego dostawcę
3. [Konfiguracja](/docs/configuration/) — zmienne środowiskowe, ścieżki konfiguracji, uwierzytelnianie webowe

## Przewodniki

- [Tłumaczenie tekstu](/docs/translate/)
- [Przepisywanie tekstu](/docs/rewrite/)
- [Przekształcanie za pomocą promptów](/docs/transform/)
- [Korzystanie z Pulpitu nawigacyjnego](/docs/dashboard/)
- [Przeglądanie historii](/docs/history/)

## Materiały referencyjne i pomoc

- [Ustawienia](/docs/settings/)
- [Częste problemy](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
