---
title: Szöveg fordítása
description: >-
  Szöveg fordítása nyelvek között, szószedet használata és az eredmények
  finomítása az „Átfogalmazás” funkcióval.
translation_last_updated: '2026-07-17T21:14:45.625Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: ace9ad02a7dc82bf08090597c56e7cc82324e6250beab93fc2dbeaeed8b91675
translation_language: hu
source_file_path: src/content/docs/docs/translate.md
translation_models:
  - google/gemini-2.5-flash
---



A **Fordítás** funkcióval fordíthat szöveget egyik nyelvről a másikra.

![Munkaterület fordítása](/images/screenshots/hu/translate.png)

## Előfeltételek

- Legalább egy szolgáltatói kulcs (asztali) vagy szerver környezeti kulcs (web) – lásd: [API-kulcs](/docs/api-key/)
- Egy **előbeállítás** (Egyszerű) vagy **modell** (Haladó) kiválasztva az eszköztáron

## Szöveg fordítása

1. Nyissa meg a **Fordítás** funkciót az oldalsávon.
2. Válasszon nyelvet a **Forrás** (vagy **Nyelv felismerése**) mezőben.
3. Válasszon nyelvet a **Cél** mezőben.
4. Válasszon előbeállítást vagy modellt az eszköztáron.
5. Írja be vagy illessze be a szöveget a **Bemenet** mezőbe.
6. Kattintson a **Fordítás** gombra.
7. Olvassa el az eredményt a **Kimenet** mezőben, majd szükség esetén másolja ki.

A **leggyakrabban használt nyelvek** jelennek meg először a listákban – ezeket a [Beállítások → Nyelvek](/docs/settings/#languages) menüpontban állíthatja be.

## Hasznos beállítások

A [Beállítások → Általános beállítások](/docs/settings/#general-settings) menüpontban:

- **Automatikus végrehajtás beillesztéskor** – azonnal fut, amint beilleszti
- **Eredmény automatikus másolása a vágólapra** – sikeres futtatás után másolja
- **Valós idejű fordítás gépelés közben** – gépelés közben fut (növelheti a költségeket)
- **Időtúllépés (ms)** – ennyit vár a valós idejű futtatás előtt
- **ENTER viselkedése** – az Enter futtatja-e a feladatot, vagy új sort szúr be

## Fordítás finomítása

Sikeres futtatás után a **Átfogalmazás…** és egy verzió legördülő menü jelenik meg a **Cél:** választó mellett:

1. **Átfogalmazás…** (nincs kiválasztva) – azonos bemenet újabb teljes fordítása. Legfeljebb **öt** verzió; a modell látja a korábbi verziókat, így a megfogalmazás eltérhet. Kattintson a **Fordítás leállítása** gombra a futó átfogalmazás megszakításához.
2. **Szóalternatívák** – válasszon ki szavakat vagy egy rövid kifejezést, majd kattintson a jobb gombbal vagy az **Átfogalmazás…** gombra. Válasszon egy alternatívát a szakasz cseréjéhez (a nyelvtan miatt kissé szélesedhet). Öt verzió esetén csak az 5. verzió frissül.
3. Minden átfogalmazási vagy alternatív kérés újra használja a modellt, és költségeket generálhat.

## Szószedet használata

A **szószedet** forrás/cél kifejezéspárokat tartalmaz egy nyelvpárhoz. Ha engedélyezve van, a megfelelő kifejezések elküldésre kerülnek a modellnek, így a preferált megfogalmazás konzisztens marad.

1. Kapcsolja be a **Szószedet** funkciót a beviteli panelen.
2. Fordítson a szokásos módon – az adott **Forrás** / **Cél** párhoz tartozó kifejezések automatikusan alkalmazásra kerülnek.
3. Kattintson a **Hozzáadás a szószedethez** gombra (a **Forrás:** mellett) egy új pár gyors rögzítéséhez.
4. Kezelje az összes kifejezést a [Beállítások → Szószedet](/docs/settings/#glossary) menüpontban.

:::note
A szószedeti kifejezések nyelvpár szerint egyeznek. Nem használhatók a **Nyelv észlelése** funkcióval forrásként.
:::

## Következő lépések

- [Szöveg átírása](/docs/rewrite/)
- [Átalakítás promptokkal](/docs/transform/)
- [Gyakori problémák](/docs/common-issues/)
