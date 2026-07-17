---
title: Používanie Dashboardu
description: >-
  Prezerajte si záznamy o používaní, nákladoch a volaniach – filtrujte,
  exportujte a spravujte uložené záznamy.
translation_last_updated: '2026-07-17T21:14:48.789Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 689c93c2517f806f7976d570b4fc86d30ca048ce906d982429b985ad06dd9250
translation_language: sk
source_file_path: src/content/docs/docs/dashboard.md
translation_models:
  - google/gemini-2.5-flash
---



Použite **Dashboard** na zistenie, koľko aplikáciu používate a aké sú náklady (pre platené modely).

![Súhrn Dashboardu](/images/screenshots/sk/dashboard-summary.png)

:::note
Ak používate iba **bezplatné** modely, sumy nákladov môžu byť nulové. KPI počtu volaní v časti **Súhrn** stále potrebujú aktivitu vo vybranom období.
:::

## Filtrovanie údajov

Použite tlačidlá filtra v hornej časti na zmenu časového rozsahu.

:::note
Filter **Používateľ** je viditeľný iba pre administrátorov vo webovej verzii. Nie je dostupný na počítači.
:::

## Karty

- **Súhrn** — KPI: celkové náklady, použité modely, počty volaní a náklady na režim, priemerné náklady na volanie, priemerné TPS, najlepšie modely podľa počtu volaní
- **Podľa modelu** — volania, náklady a TPS na model; rozbaľte riadok pre rozpis režimov
- **Všetky volania** — úplný denník volaní (stránkovaný alebo karty) s exportom

## Export údajov

Exportujte tabuľky ako **JSON**, **CSV** alebo **XLSX**.

## Odstránenie uložených záznamov pre model

V časti **Podľa modelu** alebo **Všetky volania** použite ikonu koša na odstránenie záznamov pre model.

:::caution
Odstránenie nemožno vrátiť späť. Ak chcete odstrániť podľa veku alebo vymazať všetky údaje o nákladoch, použite [Nastavenia → Sledovanie nákladov](/docs/settings/#cost-tracking).
:::

## Ďalšie kroky

- [Prehliadať históriu](/docs/history/)
- [Nastavenia](/docs/settings/)
- [Časté problémy](/docs/common-issues/)
