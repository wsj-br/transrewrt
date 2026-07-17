---
title: Kľúč API
description: >-
  Získajte bezplatný kľúč API OpenRouter a pripojte ďalších poskytovateľov AI k
  Transrewrt.
translation_last_updated: '2026-07-17T21:14:48.629Z'
source_file_mtime: '2026-07-17T14:58:48.569Z'
source_file_hash: 540c5b2b785355828a421293195b23c2fec98502888d607638fbb33f93970a2a
translation_language: sk
source_file_path: src/content/docs/docs/api-key.md
translation_models:
  - google/gemini-2.5-flash
  - meta-llama/llama-3.3-70b-instruct
---



Transrewrt potrebuje prístup aspoň k jednému poskytovateľovi AI. Na začiatok **nepotrebujete** platený model: OpenRouter ponúka bezplatné modely po pridaní kľúča a niekoľko ďalších poskytovateľov tiež ponúka bezplatné úrovne.

Podporovaní poskytovatelia zahŕňajú [OpenRouter](https://openrouter.ai), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, akýkoľvek OpenAI-kompatibilný koncový bod a lokálne OpenAI-kompatibilné servery (Ollama, LM Studio, llama.cpp a podobne).

## Jednoduché vs. pokročilé

- **Ľahký** režim (predvolený): vyberte **predvolenú** hodnotu (Free (OpenRouter), Standard, Advanced alebo Technical) mapovanú na **poskytovateľa**. Zobrazia sa len predvolené hodnoty s mapovaním pre aktuálneho poskytovateľa.
- **Pokročilý** režim: vyberte modely priamo. ID modelov používajú prefix poskytovateľa (napríklad `openrouter/…`, `openai/…`, `local/…`).

## Bezplatný kľúč OpenRouter (desktop)

1. Prejdite na [openrouter.ai](https://openrouter.ai) a zaregistrujte sa alebo sa prihláste.
2. Otvorte stránku [Kľúče](https://openrouter.ai/keys) a vytvorte nový kľúč (pomenujte ho; voliteľný kreditný limit). Bez pridania kreditu môžete používať bezplatné modely.
3. V Transrewrt otvorte **Nastavenia → Konfigurácia API**, vložte kľúč do poľa **Kľúč API OpenRouter** a kliknite na **Testovať kľúč OpenRouter**.

:::caution
Nepoužívajte model **Body Builder** od OpenRouter (`openrouter/bodybuilder`) na preklad, prepis alebo transformáciu – vracia JSON požiadavky, nie dokončený text.
:::

## Ďalšie bezplatné možnosti

Bezplatné kľúče API môžete získať aj od spoločností Cerebras, Google, Groq, Mistral AI alebo [NVIDIA](https://build.nvidia.com/) (API kompatibilné s OpenAI), prípadne spustiť modely lokálne pomocou Ollama, LM Studio, llama.cpp alebo iného servera kompatibilného s OpenAI (napríklad `translategemma:4b` cez Ollama). Nastavte základnú URL adresu lokálneho LLM na úplnú základnú adresu API (vrátane cesty, napr. `http://localhost:11434/v1`) v Nastaveniach (desktop) alebo `LOCAL_LLM_URL` (Docker).

:::caution
Ak používate lokálny LLM server z iného zariadenia alebo kontajnera, nakonfigurujte ho tak, aby umožňoval externé pripojenia (nie len localhost-only).
:::

## Docker / web

Nastavte kľúče poskytovateľa ako **premenné prostredia** na serveri (napríklad `PROVIDER_API_KEY`). Používatelia nemôžu zadávať kľúče do používateľského rozhrania prehliadača. Pozrite si [Konfigurácia](/docs/configuration/).

## Kontrolný zoznam prvého spustenia

1. Otvorte aplikáciu a v prípade potreby nastavte **Jazyk rozhrania**.
2. Pridajte a otestujte aspoň jeden kľúč poskytovateľa (desktop) alebo potvrďte, že server má kľúče prostredia (web).
3. V režime **Jednoduché** vyberte **Poskytovateľa** vo Všeobecných nastaveniach; v režime **Pokročilé** pridajte modely v časti **Nastavenia → Modely**.
4. Na karte **Preložiť** vyberte predvoľbu alebo model a spustite krátky test – pozrite si [Preklad textu](/docs/translate/).
