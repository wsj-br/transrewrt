---
title: Átalakítás promptokkal
description: >-
  Egyéni AI-utasítások futtatása – átalakító promptok létrehozása, szerkesztése,
  tesztelése és kezelése.
---



A **Transform** funkciót akkor használja, ha azt szeretné, hogy az AI egyéni utasításokat kövessen – összefoglaljon, finomítson egy e-mailt, kinyerjen kulcsfontosságú pontokat, újraformázza a szöveget, vagy bármilyen munkafolyamatot, amit Ön definiál.

![Átalakítás munkaterület](/images/screenshots/hu/transform.png)

## Meglévő prompt futtatása

1. Nyissa meg az **Átalakítás** funkciót.
2. Válasszon egy promptot a listából.
3. Ha megjelenik egy **Forrás** nyelvi mező, állítson be egy nyelvet, ha szeretne.
4. Írja be vagy illessze be a szöveget az **Input** mezőbe.
5. Kattintson az **Átalakítás** gombra.
6. Olvassa el az eredményt az **Output** mezőben.

Az [elrendezés váltó és a billentyűparancsok](/docs/translate/#layout-and-keyboard) ugyanúgy működnek, mint a Fordítás funkcióban.

## Minta promptok betöltése

Ha a lista üres, kattintson a **Minta promptok betöltése** gombra az Átalakítás munkaterületen (ez a [Beállítások → Átalakítás](/docs/settings/#transform) menüpont alatt is elérhető). A minták angol nyelvűek; betöltés után szerkessze a promptot, és szükség esetén használja a **Prompt fordítása** funkciót.

## Prompt létrehozása

1. Kattintson az **Új prompt** gombra.
2. Kattintson a **Prompt generálása** gombra.
3. Írja le, mit szeretne, hogy a prompt tegyen.
4. Válasszon egy előre beállított értéket (Egyszerű) vagy modellt (Haladó).
5. Tekintse át a vázlatot, majd kattintson a **Mentés** gombra.

## Prompt szerkesztése

A szerkesztő bal oldalon található; a tesztterület jobb oldalon van.

![Átalakítás prompt szerkesztő](/images/screenshots/hu/transform-prompt-edit.png)

Fő mezők:

- **Prompt neve** – megjelenik a prompt listában
- **Prompt utasítások (opcionális)** – rövid tipp a prompt futtatásakor
- **Modell szerepe** – az AI általános szerepe
- **Modell utasítások (soronként egy)** – követendő szabályok
- **Kimenet leírása** – rövid címke az eredményhez (pl. összefoglalva)
- **Hőmérséklet (0.0 → 1.0)** – alacsonyabb érték stabilabb; magasabb érték változatosabb
- **Célnyelv kérése** – nyelvi választót ad hozzá a futtatáskor

Segítők: **Prompt generálása**, **Prompt javítása**, **Prompt fordítása** (az Egyszerű előre beállított értékeket használ; a Haladó a modelllistát).

:::caution
Kattintson a **Mentés** gombra, mielőtt visszatérne a **Vissza a futtatáshoz** opcióhoz. Mentés nélküli visszatérés esetén a szerkesztések elvesznek.
:::

## Tesztelés mindennapi használat előtt

A jobb oldali tesztpanelt használja mintaszöveggel a promptok összeállításakor vagy összehasonlításakor.

A promptok tömeges exportálása és importálása a [Beállítások → Átalakítás](/docs/settings/#transform) menüpont alatt történik.

## Következő lépések

- [Beállítások](/docs/settings/)
- [Böngészési előzmények](/docs/history/)
- [Gyakori problémák](/docs/common-issues/)
