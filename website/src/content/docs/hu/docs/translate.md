---
title: Szöveg fordítása
description: >-
  Szöveg konvertálása nyelvek között, szószedet használata és az eredmények
  finomítása az Átfogalmazás funkcióval.
---



A **Fordítás** funkcióval szöveget konvertálhat egyik nyelvről a másikra.

![Fordítási munkaterület](/images/screenshots/hu/translate.png)

## Előfeltételek

- Legalább egy szolgáltatói kulcs (asztali) vagy szerver környezeti kulcs (web) – lásd [API kulcs](/docs/api-key/)
- Egy **előbeállítás** (Egyszerű) vagy **modell** (Haladó) kiválasztva az eszköztáron

## Szöveg fordítása

1. Nyissa meg a **Fordítás** funkciót az oldalsávon.
2. Válasszon nyelvet a **Forrás** (vagy **Nyelv felismerése**) mezőben.
3. Válasszon nyelvet a **Cél** mezőben.
4. Válasszon előbeállítást vagy modellt az eszköztáron.
5. Írja be vagy illessze be a szöveget az **Bemenet** mezőbe.
6. Kattintson a **Fordítás** gombra.
7. Olvassa el az eredményt az **Kimenet** mezőben, majd szükség esetén másolja ki.

A **Leggyakoribb nyelvek** jelennek meg először a listákban – ezeket a [Beállítások → Nyelvek](/docs/settings/#languages) menüpontban állíthatja be.

## Hasznos beállítások

A [Beállítások → Általános beállítások](/docs/settings/#general-settings) menüpontban:

- **Automatikus végrehajtás beillesztéskor** – azonnal fut, amint beilleszti
- **Eredmény automatikus másolása vágólapra** – sikeres futtatás után másolja
- **Valós idejű fordítás gépelés közben** – gépelés közben fut (növelheti a költségeket)
- **Időtúllépés (ms)** – várakozás valós idejű futtatás előtt
- **ENTER viselkedése** – az Enter futtatja-e a feladatot, vagy új sort szúr be

## Elrendezés és billentyűzet

- **Elrendezés váltó** – a panelek feletti gombok váltanak a **egymás melletti** és a **halmozott** bemeneti/kimeneti elrendezések között. A választás a Fordításra, Átírásra és Átalakításra vonatkozik, és megjegyzi az eszközön.
- Az **Enter** vagy a **Shift+Enter** futtatja a feladatot, az **ENTER viselkedése** beállítástól függően (lásd fent).
- Az **Escape** törli a Bemenet panelt (vagy először bezár egy nyitott menüt vagy párbeszédpanelt).

## Fordítás finomítása

Sikeres futtatás után az **Átfogalmazás…** és egy verzió legördülő menü jelenik meg a **Cél:** választó mellett:

1. **Átfogalmazás…** (nincs kiválasztás) – ugyanazon bemenet egy másik teljes fordítása. Legfeljebb **öt** verzió; a modell látja a korábbi verziókat, így a megfogalmazás eltérhet. Kattintson a **Fordítás leállítása** gombra a futó átfogalmazás megszakításához.
2. **Szóalternatívák** – válasszon ki szavakat vagy egy rövid kifejezést, majd kattintson jobb gombbal vagy az **Átfogalmazás…** gombra. Válasszon egy alternatívát a szakasz cseréjéhez (a nyelvtan miatt kissé szélesedhet). Öt verziónál csak az 5. verzió frissül.
3. Minden átfogalmazási vagy alternatív kérés újra használja a modellt, és növelheti a költségeket.

## Szószedet használata

A **szószedet** forrás/cél kifejezéspárokat tartalmaz egy nyelvpárhoz. Ha engedélyezve van, a megfelelő kifejezések elküldésre kerülnek a modellnek, így a preferált megfogalmazás konzisztens marad.

1. Kapcsolja be a **Szószedet** funkciót a beviteli panelen.
2. Fordítson a szokásos módon – az adott **Forrás** / **Cél** párhoz tartozó kifejezések automatikusan alkalmazásra kerülnek.
3. Kattintson a **Hozzáadás a szószedethez** gombra (a **Forrás:** mellett), hogy gyorsan rögzítsen egy új párt.
4. Az összes kifejezést a [Beállítások → Szószedet](/docs/settings/#glossary) menüpontban kezelheti.

:::note
A szószedet kifejezések nyelvi párok szerint egyeznek. Nem használhatók a **Nyelv felismerése** funkcióval forrásként.
:::

## Következő lépések

- [Szöveg átírása](/docs/rewrite/)
- [Átalakítás promptokkal](/docs/transform/)
- [Gyakori problémák](/docs/common-issues/)
