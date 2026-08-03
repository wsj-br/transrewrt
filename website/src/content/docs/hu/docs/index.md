---
title: Áttekintés
description: >-
  Mi az a Transrewrt, és hogyan találhat telepítési útmutatókat és beállítási
  dokumentációkat.
---



A **Transrewrt** egy nyílt forráskódú, mesterséges intelligencia alapú szöveges eszköz a következőkhöz:

- **Fordítás** – nyelvek tucatjai között, automatikus forrásfelismeréssel és szószedetekkel
- **Átírás** – nyelvtani hibák javítása, egyértelműség javítása, hangnem vagy hosszúság megváltoztatása
- **Átalakítás** – saját egyéni mesterséges intelligencia promptok futtatása bármilyen szövegen

Számos AI-szolgáltatót támogat (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, OpenAI-kompatibilis végpontok, és helyi OpenAI-kompatibilis szerverek, mint például az Ollama, LM Studio vagy llama.cpp). Futtassa **asztali alkalmazásként** (Windows / Linux) vagy **Docker webalkalmazásként**.

Az Ön kulcsai, az Ön modelljei, az Ön hosztja – nincs Transrewrt felhőfiók.

## Az ablak felépítése

![Fordítási munkaterület](/images/screenshots/hu/translate.png)

- **Oldalsáv** – a fő navigáció: Fordítás, Átírás, Átalakítás, Irányítópult, Előzmények, Beállítások (és a bejelentkezett felhasználó a weben).
- **Eszköztár** – az oldal címe, az **előbeállítás** (Egyszerű) vagy a **modell** (Haladó) választó, az **interfész nyelve** (földgömb ikon; nem változtatja meg a Fordítás innen/ide nyelvet), és a Súgó (**?**), amely ezekre a dokumentumokra mutat. Az előbeállítás/modell menüben lehetőség van az **Egyszerű/Haladó módra váltásra** is (a Beállítások megnyitása felett).
- **Munkaterület** – a Bemeneti és Kimeneti panelek, számlálókkal, időzítéssel, TPS-sel és opcionális költséggel. Az akciósáv egy kis alkalmazás **verzió** linket (jobbra lent) mutat a GitHub Pages oldalra.

Alapértelmezés szerint az alkalmazás **Egyszerű** módban fut: válasszon egy **előbeállítást** és egy **Szolgáltatót** a Beállításokban. Váltson **Haladó** módra a [Beállítások → Általános beállítások](/docs/settings/#general-settings) alatt a teljes modelllista megtekintéséhez, vagy használja az eszköztár előbeállítás/modell menüjében található kapcsolót.

## Első lépések

1. [Gyorsindítás](/docs/quick-start/) – asztali telepítés vagy futtatás Dockerrel
2. [API kulcs](/docs/api-key/) – ingyenes OpenRouter kulcs vagy más szolgáltató csatlakoztatása
3. [Konfiguráció](/docs/configuration/) – környezeti változók, konfigurációs útvonalak, webes hitelesítés

## Útmutatók

- [Szöveg fordítása](/docs/translate/)
- [Szöveg átírása](/docs/rewrite/)
- [Átalakítás promptokkal](/docs/transform/)
- [Az irányítópult használata](/docs/dashboard/)
- [Előzmények böngészése](/docs/history/)

## Referencia és súgó

- [Beállítások](/docs/settings/)
- [Gyakori problémák](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
