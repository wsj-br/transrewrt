---
title: A műszerfal használata
description: >-
  Tekintse át a használatot, a költségeket és a hívásnaplókat – szűrje,
  exportálja és kezelje a tárolt rekordokat.
translation_last_updated: '2026-07-17T21:14:45.337Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 689c93c2517f806f7976d570b4fc86d30ca048ce906d982429b985ad06dd9250
translation_language: hu
source_file_path: src/content/docs/docs/dashboard.md
translation_models:
  - google/gemini-2.5-flash
---



A **Műszerfal** segítségével megtekintheti, mennyire használja az alkalmazást, és mennyibe kerül (fizetős modellek esetén).

![Műszerfal összefoglaló](/images/screenshots/hu/dashboard-summary.png)

:::note
Ha csak **ingyenes** modelleket használ, a költségösszegek nullák lehetnek. A **Összefoglaló** hívásszám-KPI-jeihez továbbra is szükség van tevékenységre a kiválasztott időszakban.
:::

## Az adatok szűrése

A szűrőgombokkal módosíthatja az időtartományt.

:::note
A **Felhasználó** szűrő csak a webes verzió rendszergazdái számára látható. Asztali gépen nem érhető el.
:::

## Lapok

- **Összefoglaló** – KPI-k: teljes költség, használt modellek, módok szerinti hívásszám és költség, átlagos költség hívásonként, átlagos TPS, a legtöbb hívást generáló modellek
- **Modell szerint** – modellenkénti hívások, költség és TPS; bontsa ki a sort a módok szerinti bontáshoz
- **Összes hívás** – teljes hívásnapló (lapozva vagy kártyákon) exportálással

## Adatok exportálása

Exportálja a táblázatokat **JSON**, **CSV** vagy **XLSX** formátumban.

## Tárolt rekordok törlése egy modellhez

A **Modell szerint** vagy **Összes hívás** lapon a kuka ikonnal távolíthatja el a rekordokat egy modellhez.

:::caution
A törlés nem vonható vissza. Az életkor szerinti törléshez vagy az összes költségadat törléséhez használja a [Beállítások → Költségkövetés](/docs/settings/#cost-tracking) menüpontot.
:::

## Következő lépések

- [Böngészési előzmények](/docs/history/)
- [Beállítások](/docs/settings/)
- [Gyakori problémák](/docs/common-issues/)
