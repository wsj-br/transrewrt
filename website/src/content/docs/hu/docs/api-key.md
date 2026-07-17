---
title: API kulcs
description: >-
  Szerezzen ingyenes OpenRouter API kulcsot, és csatlakoztasson más AI
  szolgáltatókat a Transrewrt-hez.
---



A Transrewrt-nek legalább egy AI-szolgáltatóhoz hozzáférésre van szüksége. A kezdéshez **nincs** szüksége fizetős modellre: az OpenRouter ingyenes modelleket kínál a kulcs hozzáadása után, és számos más szolgáltató is kínál ingyenes szinteket.

A támogatott szolgáltatók közé tartozik az [OpenRouter](https://openrouter.ai), az OpenAI, az Anthropic, a Google Gemini, a DeepSeek, a Groq, a Mistral, az xAI, a Cerebras, az NVIDIA, az Alibaba Cloud, az apikey.fun, bármely OpenAI-kompatibilis végpont, és a helyi OpenAI-kompatibilis szerverek (Ollama, LM Studio, llama.cpp és hasonlók).

## Egyszerű vs. Haladó

- **Egyszerű** mód (alapértelmezett): válasszon egy **előbeállítást** (Ingyenes (OpenRouter), Standard, Haladó vagy Technikai), amely egy **szolgáltatóhoz** van rendelve. Csak azok az előbeállítások jelennek meg, amelyek rendelkeznek leképezéssel az aktuális szolgáltatóhoz.
- **Haladó** mód: közvetlenül választhat modelleket. A modellazonosítók szolgáltatói előtagot használnak (például `openrouter/…`, `openai/…`, `local/…`).

## Ingyenes OpenRouter kulcs (asztali)

1. Látogasson el az [openrouter.ai](https://openrouter.ai) oldalra, és regisztráljon vagy jelentkezzen be.
2. Nyissa meg a [Kulcsok](https://openrouter.ai/keys) oldalt, és hozzon létre egy új kulcsot (nevezze el; opcionális hitelkeret). Ingyenes modelleket használhat hitel hozzáadása nélkül.
3. A Transrewrt-ben nyissa meg a **Beállítások → API konfiguráció** menüpontot, illessze be a kulcsot az **OpenRouter API kulcs** mezőbe, majd kattintson az **OpenRouter kulcs tesztelése** gombra.

:::caution
Ne használja az OpenRouter **Body Builder** modelljét (`openrouter/bodybuilder`) fordításra, átírásra vagy átalakításra – az JSON kéréseket ad vissza, nem pedig kész szöveget.
:::

## Egyéb ingyenes lehetőségek

Ingyenes API-kulcsokat szerezhet a Cerebras, a Google, a Groq, a Mistral AI vagy az [NVIDIA](https://build.nvidia.com/) (OpenAI-kompatibilis API) szolgáltatóktól, vagy futtathat modelleket helyben az Ollama, az LM Studio, a llama.cpp vagy egy másik OpenAI-kompatibilis szerver segítségével (például `translategemma:4b` az Ollama-n keresztül). Állítsa be a Helyi LLM alap URL-t a teljes API alapra (beleértve az elérési utat is, pl. `http://localhost:11434/v1`) a Beállításokban (asztali) vagy a `LOCAL_LLM_URL` (Docker) alatt.

:::caution
Ha egy másik eszközről vagy konténerből használ helyi LLM szervert, konfigurálja úgy, hogy engedélyezze a külső kapcsolatokat (ne csak a localhost-ot).
:::

## Docker / web

Állítsa be a szolgáltatói kulcsokat **környezeti változókként** a szerveren (például `PROVIDER_API_KEY`). A felhasználók nem írhatják be a kulcsokat a böngésző felhasználói felületébe. Lásd: [Konfiguráció](/docs/configuration/).

## Első futtatási ellenőrzőlista

1. Nyissa meg az alkalmazást, és szükség esetén állítsa be az **Interfész nyelvét**.
2. Adjon hozzá és teszteljen legalább egy szolgáltatói kulcsot (asztali), vagy ellenőrizze, hogy a szerver rendelkezik-e környezeti kulcsokkal (web).
3. **Egyszerű** módban válasszon egy **Szolgáltatót** az Általános beállításokban; **Haladó** módban adjon hozzá modelleket a **Beállítások → Modellek** alatt.
4. A **Fordítás** lapon válasszon egy előbeállítást vagy modellt, és futtasson egy rövid tesztet – lásd [Szöveg fordítása](/docs/translate/).
