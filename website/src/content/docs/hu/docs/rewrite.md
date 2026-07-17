---
title: Szöveg átírása
description: >-
  A megfogalmazás javítása ugyanazon a nyelven – tisztaság, hangnem, hosszúság,
  nyelvtan és egyebek.
translation_last_updated: '2026-07-17T21:14:45.474Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: ca70a1d16518bb9193c83911bfb7be66b19076c48b914b92aba4e9a17f67740f
translation_language: hu
source_file_path: src/content/docs/docs/rewrite.md
translation_models:
  - google/gemini-2.5-flash
---



Az **Átírás** funkcióval javíthatja a megfogalmazást anélkül, hogy megváltoztatná a fő jelentést. A szöveg ugyanazon a nyelven marad.

![Átírás munkaterület](/images/screenshots/hu/rewrite.png)

Az üzemmódok a következők:

- **Helyesírás és nyelvtan ellenőrzése**
- **Tisztaság javítása**
- **Alternatív változatok** (több átfogalmazás egy futtatásban)
- **Formálisabbá tétel** / **Informálisabbá tétel**
- **Rövidítés** / **Bővítés**
- **Technikaibbá tétel**

## Szöveg átírása

1. Nyissa meg az **Átírás** funkciót.
2. Válasszon egy **Üzemmódot**.
3. Opcionálisan állítsa be a **Forrás** nyelvet a szöveg nyelvére (vagy hagyja az **Nyelv felismerése** beállítást).
4. Írja be vagy illessze be a szöveget az **Bemenet** mezőbe.
5. Kattintson az **Átírás** gombra.
6. Olvassa el az eredményt az **Kimenet** mezőben.

:::tip
A **Helyesírás és nyelvtan ellenőrzése** funkcióban a **Másolás** mellett megjelenik a **Módosítások megjelenítése** kapcsoló. Kapcsolja be vagy ki a javítások megjelenítéséhez vagy elrejtéséhez.
:::

:::note
Az **Alternatív változatok** több átfogalmazást ad vissza **egy** futtatásban, `----` elválasztva. Ez eltér az **Átfogalmazás…** funkciótól, amely idővel verzióelőzményeket épít.
:::

## Átírás finomítása

Sikeres futtatás után az **Átfogalmazás…** és a verzió legördülő menü megjelenik a kimeneti oldalon (ugyanaz az elv, mint a [Fordítás](/docs/translate/#refine-a-translation), de a szöveg ugyanazon a nyelven marad, és megtartja az aktuális **Üzemmódot**):

1. **Átfogalmazás…** (nincs kijelölés) – egy újabb teljes átírás más megfogalmazással. Legfeljebb öt verzió. Kattintson az **Átírás leállítása** gombra a megszakításhoz.
2. **Szóalternatívák** – jelölje ki a szöveget, majd kattintson a jobb gombbal vagy az **Átfogalmazás…** gombra.
3. Minden kérés további használati költséget jelenthet.

## Következő lépések

- [Szöveg fordítása](/docs/translate/)
- [Átalakítás promptokkal](/docs/transform/)
- [Gyakori problémák](/docs/common-issues/)
