---
title: Előzmények böngészése
description: >-
  Tekintse át a korábbi fordítási, átírási és átalakítási futtatásokat a teljes
  bemeneti és kimeneti szöveggel.
translation_last_updated: '2026-07-17T14:58:59.420Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 79c4a60a79491755299b9de8c5e8f0945ccc6d0b32743e1682fede521dade7fa
translation_language: hu
source_file_path: src/content/docs/docs/history.md
translation_models:
  - google/gemini-2.5-flash
---



Nyissa meg az **Előzmények** menüpontot a korábbi műveletek megtekintéséhez, beleértve az egyes futtatások bemenetét és kimenetét.

![Előzmények oldal](/images/screenshots/hu/history.png)

Az Előzmények ugyanazokat az időtartomány-szűrőket használja, mint az [Irányítópult](/docs/dashboard/).

:::note
A **webalkalmazásban** mindenki (beleértve az adminisztrátorokat is) csak a saját végrehajtási előzményeit látja. Az Irányítópult **Felhasználó** szűrője itt nem alkalmazható.
:::

## Exportálás

Exportálja a szűrt listát **JSON**, **CSV** vagy **XLSX** formátumban.

## Ha hiányzik az előzmények

Lehet, hogy a **Végrehajtási előzmények megőrzése** ki van kapcsolva. Engedélyezze a [Beállítások → Általános beállítások](/docs/settings/#general-settings) menüpontban, hacsak az adminisztrátor nem állította be az `HISTORY_DISABLED` opciót – lásd a [Konfiguráció](/docs/configuration/#privacy-mode) részt.

## Következő lépések

- [Az irányítópult használata](/docs/dashboard/)
- [Beállítások](/docs/settings/)
- [Gyakori problémák](/docs/common-issues/)
