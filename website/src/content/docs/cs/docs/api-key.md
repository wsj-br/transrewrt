---
title: Klíč API
description: >-
  Získejte bezplatný klíč API OpenRouter a připojte další poskytovatele AI k
  Transrewrt.
translation_last_updated: '2026-07-17T14:58:53.851Z'
source_file_mtime: '2026-07-17T14:58:48.569Z'
source_file_hash: 540c5b2b785355828a421293195b23c2fec98502888d607638fbb33f93970a2a
translation_language: cs
source_file_path: src/content/docs/docs/api-key.md
translation_models:
  - google/gemini-2.5-flash
---



Transrewrt potřebuje přístup alespoň k jednomu poskytovateli AI. K zahájení **nepotřebujete** placený model: OpenRouter nabízí bezplatné modely po přidání klíče a několik dalších poskytovatelů také nabízí bezplatné úrovně.

Mezi podporované poskytovatele patří [OpenRouter](https://openrouter.ai), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, jakýkoli koncový bod kompatibilní s OpenAI a lokální servery kompatibilní s OpenAI (Ollama, LM Studio, llama.cpp a podobné).

## Snadné vs. pokročilé

- Režim **Easy** (výchozí): vyberte **předvolbu** (Free (OpenRouter), Standard, Advanced nebo Technical) namapovanou na **poskytovatele**. Zobrazí se pouze předvolby s mapováním pro aktuálního poskytovatele.
- Režim **Advanced**: vybírejte modely přímo. ID modelů používají předponu poskytovatele (například `openrouter/…`, `openai/…`, `local/…`).

## Bezplatný klíč OpenRouter (desktop)

1. Přejděte na [openrouter.ai](https://openrouter.ai) a zaregistrujte se nebo se přihlaste.
2. Otevřete stránku [Klíče](https://openrouter.ai/keys) a vytvořte nový klíč (pojmenujte jej; volitelný kreditní limit). Bez přidání kreditu můžete používat bezplatné modely.
3. V Transrewrt otevřete **Nastavení → Konfigurace API**, vložte klíč do **Klíč API OpenRouter** a klikněte na **Testovat klíč OpenRouter**.

:::caution
Nepoužívejte model **Body Builder** (`openrouter/bodybuilder`) od OpenRouter pro překlad, přepis nebo transformaci – vrací JSON datové části požadavků, nikoli dokončený text.
:::

## Další bezplatné možnosti

Bezplatné klíče API můžete také získat od společností Cerebras, Google, Groq, Mistral AI nebo [NVIDIA](https://build.nvidia.com/) (API kompatibilní s OpenAI), nebo spouštět modely lokálně pomocí Ollama, LM Studio, llama.cpp nebo jiného serveru kompatibilního s OpenAI (například `translategemma:4b` přes Ollama). Nastavte základní URL místního LLM na plnou základní adresu API (včetně cesty, např. `http://localhost:11434/v1`) v Nastavení (desktop) nebo `LOCAL_LLM_URL` (Docker).

:::caution
Pokud používáte lokální LLM server z jiného zařízení nebo kontejneru, nakonfigurujte jej tak, aby umožňoval externí připojení (ne pouze localhost).
:::

## Docker / web

Nastavte klíče poskytovatele jako **proměnné prostředí** na serveru (například `PROVIDER_API_KEY`). Uživatelé nemohou zadávat klíče do uživatelského rozhraní prohlížeče. Viz [Konfigurace](/docs/configuration/).

## Kontrolní seznam pro první spuštění

1. Otevřete aplikaci a v případě potřeby nastavte **Jazyk rozhraní**.
2. Přidejte a otestujte alespoň jeden klíč poskytovatele (desktop) nebo ověřte, že server má klíče prostředí (web).
3. V režimu **Easy** zvolte **Poskytovatele** v Obecném nastavení; v režimu **Advanced** přidejte modely pod **Nastavení → Modely**.
4. Na kartě **Přeložit** vyberte předvolbu nebo model a spusťte krátký test – viz [Překlad textu](/docs/translate/).
