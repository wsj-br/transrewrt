---
title: API kulcs
description: >-
  Csatlakoztassa a Transrewrt-t egy tetszőleges AI-szolgáltatóhoz egy API-kulcs
  hozzáadásával, vagy használjon helyi modellt.
---



A Transrewrt nem tartalmaz saját AI-t – a szöveget az Ön által választott AI-szolgáltatóhoz küldi. Egy szolgáltató csatlakoztatásához hozzá kell adnia egy **API-kulcsot**: egy privát kódot, amelyet a szolgáltató bocsát ki, és amely jelszóként működik a szolgáltatásukhoz. A kezdéshez csak **egy** szolgáltatóra van szüksége, és nem kell fizetnie: több szolgáltató kínál ingyenes modelleket vagy ingyenes szinteket, és modelleket futtathat saját számítógépén is, kulcs nélkül.

A támogatott szolgáltatók közé tartozik az OpenRouter, az OpenAI, az Anthropic, a Google Gemini, a DeepSeek, a Groq, a Mistral, az xAI, a Cerebras, az NVIDIA, az Alibaba Cloud, az apikey.fun, bármely OpenAI-kompatibilis végpont, és a helyi OpenAI-kompatibilis szerverek (Ollama, LM Studio, llama.cpp és hasonlók).

## 1. lépés – Válasszon szolgáltatót

Bármely támogatott szolgáltató működik. Ha nem biztos benne, melyiket válassza:

- **Ingyenesen indítható**: Az OpenRouter, a Google Gemini, a Groq, a Mistral, a Cerebras és az NVIDIA mind ingyenes modelleket vagy ingyenes szinteket kínálnak.
- **Már van fiókja?** Ha már használja az OpenAI-t, az Anthropic-ot vagy más támogatott szolgáltatót, egyszerűen újra felhasználhatja azt a fiókot.
- **Inkább mindent a saját számítógépén tartana?** Hagyja ki teljesen a kulcsot, és használjon [helyi modellt](#using-a-local-model-instead-no-api-key) helyette.

## 2. lépés – API-kulcs létrehozása

A pontos lépések szolgáltatónként kissé eltérnek, de a minta mindenhol ugyanaz:

1. Regisztráljon vagy jelentkezzen be a szolgáltató weboldalán. A Transrewrt **Beállítások → API konfiguráció** menüjében minden szolgáltatóhoz tartozik egy **Szolgáltató weboldalának megnyitása** link, amely a megfelelő helyre viszi.
2. Keresse meg az **API-kulcsok** oldalt (néha a fiók, irányítópult vagy fejlesztői beállítások alatt), és hozzon létre egy új kulcsot. Néhány szolgáltató megkérdezi, hogy nevezze el a kulcsot, vagy állítson be költési korlátot – mindkettő opcionális.
3. Másolja ki a kulcsot. Ez egy hosszú betű- és számsorozat, gyakran valami olyasmivel kezdődik, mint `sk-`.

:::note
Az API-kulcsot jelszóként kell kezelni: ne ossza meg, ne tegye közzé, és ne küldje el senkinek. Ha egy kulcs kiszivárog, törölje a szolgáltató webhelyén, és hozzon létre egy újat.
:::

## 3. lépés – A kulcs hozzáadása és tesztelése (asztali)

1. A Transrewrt-ben nyissa meg a **Beállítások → API konfiguráció** menüpontot.
2. Illessze be a kulcsot a szolgáltatójának megfelelő mezőbe (például **Google Gemini API kulcs**), és mentse el.
3. Kattintson a mező melletti **Teszt** gombra a kulcs működésének ellenőrzéséhez.

Amint a teszt sikeres, készen áll – válassza ki azt a szolgáltatót a főképernyőn, és kezdje el a fordítást.

## Helyi modell használata (API-kulcs nélkül)

Futtathat modelleket a saját számítógépén Ollama, LM Studio, llama.cpp vagy más OpenAI-kompatibilis szerver segítségével (például `google/gemma-4-e2b` az LM Studio-n keresztül). Semmi sem hagyja el a gépét, és nincs szükség API-kulcsra.

A csatlakoztatáshoz állítsa be a Helyi LLM alap URL-jét a teljes API alapra, beleértve az elérési utat is – például `http://localhost:11434/v1`. Asztali gépen ezt a **Beállítások → API konfiguráció** menüpontban állítsa be; Docker esetén ehelyett az `LOCAL_LLM_URL` környezeti változót állítsa be.

:::tip
Ha egy másik eszközről vagy tárolóból használ helyi LLM-szervert, konfigurálja úgy, hogy engedélyezze a külső kapcsolatokat (ne csak a localhostot).
:::

## Docker / web

Ha böngészőben használja a Transrewrt-t, a kulcsokat az kezeli, aki a szervert futtatja, nem pedig a böngésző felhasználói felületén kell beírni. Az adminisztrátor a szolgáltatói kulcsokat **környezeti változókként** állítja be a szerveren (például `PROVIDER_API_KEY`) – lásd: [Konfiguráció](/docs/configuration/).

## Első futtatás ellenőrzőlista

1. Nyissa meg az alkalmazást, és szükség esetén állítsa be az **Interfész nyelvét**.
2. Adjon hozzá és teszteljen legalább egy szolgáltatói kulcsot – vagy konfiguráljon egy helyi modellt (asztali), vagy ellenőrizze, hogy a szerveren vannak-e környezeti kulcsok (web).
3. **Egyszerű** módban válasszon egy **Szolgáltatót** az Általános beállításokban; **Haladó** módban adjon hozzá modelleket a **Beállítások → Modellek** alatt – lásd a [Beállítások](/docs/settings/#general-settings) részt a két módhoz.
4. A **Fordítás** oldalon válasszon egy előbeállítást vagy modellt, és futtasson egy rövid tesztet – lásd: [Szöveg fordítása](/docs/translate/).

## Ha valami nem működik

- **A kulcsteszt sikertelen**: ellenőrizze, hogy a kulcs teljes egészében át lett-e másolva (nincsenek szóközök előtte vagy utána), és hogy nem lett-e törölve vagy letiltva a szolgáltató webhelyén.
- **A fordítások kvóta- vagy hitelhibával meghiúsulnak**: az ingyenes szintek napi vagy havi korlátokkal rendelkeznek; várjon, váltson másik ingyenes szolgáltatóra, vagy adjon hozzá hitelt.
- **Nincs szolgáltató az Egyszerű módban**: nyissa meg a **Beállítások → API konfiguráció** menüpontot, és ellenőrizze, hogy legalább egy kulcs (vagy a Helyi LLM URL) konfigurálva és tesztelve van-e.

További segítség: [Gyakori problémák](/docs/common-issues/).
