---
title: Áttekintés
description: >-
  Mi az a Transrewrt, és hogyan találhat telepítési útmutatókat és beállítási
  dokumentumokat.
translation_last_updated: '2026-07-17T21:14:45.413Z'
source_file_mtime: '2026-07-17T14:36:51.471Z'
source_file_hash: 6dfcf9cb19e3422d75511ecc06eda72e014214c3e34d95f7fec6d8a05c01896f
translation_language: hu
source_file_path: src/content/docs/docs/index.md
translation_models:
  - google/gemini-2.5-flash
---



A **Transrewrt** egy nyílt forráskódú, mesterséges intelligencia alapú szöveges eszköz a következőkhöz:

- **Fordítás** – több tucat nyelv között, automatikus forrásfelismeréssel és szószedetekkel
- **Átírás** – nyelvtani hibák javítása, érthetőség javítása, hangnem vagy hosszúság módosítása
- **Átalakítás** – saját egyéni mesterséges intelligencia parancsok futtatása bármilyen szövegen

Számos AI-szolgáltatót támogat (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, OpenAI-kompatibilis végpontok, és helyi OpenAI-kompatibilis szerverek, mint például az Ollama, LM Studio vagy llama.cpp). Futtatható **asztali alkalmazásként** (Windows / Linux) vagy **saját üzemeltetésű webalkalmazásként** (Docker).

Az Ön kulcsai, az Ön modelljei, az Ön hosztja – nincs Transrewrt felhőfiók.

## Az ablak felépítése

- **Oldalsáv** — Fordítás, Átírás, Átalakítás, Irányítópult, Előzmények, Beállítások (és a bejelentkezett felhasználó a weben)
- **Eszköztár** — oldal címe, **előbeállítás** (Egyszerű) vagy **modell** (Haladó) választó, és **Felület nyelve** (földgömb ikon; nem változtatja meg a Fordítás innen/ide nyelvet)
- **Munkaterület** — Bemeneti és Kimeneti panelek számlálókkal, időzítéssel, TPS-sel és opcionális költséggel

Alapértelmezés szerint az alkalmazás **Egyszerű** módban fut: válasszon egy **előbeállítást** és egy **Szolgáltatót** a Beállításokban. Váltson **Haladó** módra a [Beállítások → Általános beállítások](/docs/settings/#general-settings) alatt a teljes modelllista megtekintéséhez.

## Első lépések

1. [Gyorsindítás](/docs/quick-start/) — telepítse az asztali verziót, vagy futtassa Dockerrel
2. [API kulcs](/docs/api-key/) — csatlakoztasson egy ingyenes OpenRouter kulcsot vagy más szolgáltatót
3. [Konfiguráció](/docs/configuration/) — környezeti változók, konfigurációs útvonalak, webes hitelesítés

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
