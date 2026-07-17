---
title: Átalakítás promptokkal
description: >-
  Egyéni AI-utasítások futtatása – átalakító promptok létrehozása, szerkesztése,
  tesztelése és kezelése.
translation_last_updated: '2026-07-17T14:58:59.879Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 07b5d140803063510c7c9fecf67a2f99e3aab3040116733a3126939b0c82e16e
translation_language: hu
source_file_path: src/content/docs/docs/transform.md
translation_models:
  - google/gemini-2.5-flash
---



A **Transform** funkciót akkor használja, ha azt szeretné, hogy az AI egyéni utasításokat kövessen – például összefoglaljon, finomítson egy e-mailt, kinyerjen kulcsfontosságú pontokat, újraformázza a szöveget, vagy bármilyen más, Ön által definiált munkafolyamatot hajtson végre.

![Átalakítás munkaterület](/images/screenshots/hu/transform.png)

## Meglévő prompt futtatása

1. Nyissa meg a **Transform** funkciót.
2. Válasszon egy promptot a listából.
3. Ha megjelenik egy **Forrásnyelv** mező, állítson be egy nyelvet, ha szeretne.
4. Írja be vagy illessze be a szöveget az **Input** mezőbe.
5. Kattintson a **Transform** gombra.
6. Olvassa el az eredményt az **Output** mezőben.

## Minta promptok betöltése

Ha a lista üres, kattintson a **Minta promptok betöltése** gombra az Átalakítás munkaterületen (ez a [Beállítások → Átalakítás](/docs/settings/#transform) menüpont alatt is elérhető). A minták angol nyelvűek; betöltés után szerkessze a promptot, és szükség esetén használja a **Prompt fordítása** funkciót.

## Prompt létrehozása

1. Kattintson az **Új prompt** gombra.
2. Kattintson a **Prompt generálása** gombra.
3. Írja le, mit szeretne, hogy a prompt tegyen.
4. Válasszon egy előbeállítást (Egyszerű) vagy modellt (Haladó).
5. Tekintse át a vázlatot, majd kattintson a **Mentés** gombra.

## Prompt szerkesztése

A szerkesztő balra, a tesztterület jobbra található.

![Átalakítás prompt szerkesztő](/images/screenshots/hu/transform-prompt-edit.png)

Fő mezők:

- **Prompt neve** – a prompt listában jelenik meg
- **Prompt utasítások (opcionális)** – rövid tipp a prompt futtatásakor
- **Modell szerepe** – az AI általános szerepe
- **Modell utasítások (soronként egy)** – követendő szabályok
- **Kimenet leírása** – rövid címke az eredményhez (pl. összefoglalva)
- **Hőmérséklet (0.0 → 1.0)** – alacsonyabb érték stabilabb; magasabb érték változatosabb
- **Célnyelv kérése** – nyelvi választót ad hozzá a futtatáskor

Segítők: **Prompt generálása**, **Prompt javítása**, **Prompt fordítása** (az Egyszerű előbeállításokat használ; a Haladó a modelllistát).

:::caution
Kattintson a **Mentés** gombra, mielőtt visszatérne a **Vissza a futtatáshoz** gombra. A mentés nélküli visszatérés elveti a szerkesztéseket.
:::

## Tesztelés mindennapi használat előtt

A jobb oldali tesztpanelt használja mintaszöveggel a promptok összeállításakor vagy összehasonlításakor.

Promptok tömeges exportálása és importálása a [Beállítások → Átalakítás](/docs/settings/#transform) menüpont alatt.

## Következő lépések

- [Beállítások](/docs/settings/)
- [Böngészési előzmények](/docs/history/)
- [Gyakori problémák](/docs/common-issues/)
