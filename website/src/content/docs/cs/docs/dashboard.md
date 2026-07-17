---
title: Použít řídicí panel
description: >-
  Zkontrolujte využití, náklady a protokoly volání – filtrujte, exportujte a
  spravujte uložené záznamy.
translation_last_updated: '2026-07-17T21:14:42.122Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 689c93c2517f806f7976d570b4fc86d30ca048ce906d982429b985ad06dd9250
translation_language: cs
source_file_path: src/content/docs/docs/dashboard.md
translation_models:
  - google/gemini-2.5-flash
---



Použijte **řídicí panel** k zobrazení, kolik aplikaci používáte a jaké jsou náklady (u placených modelů).

![Souhrn řídicího panelu](/images/screenshots/cs/dashboard-summary.png)

:::note
Pokud používáte pouze **bezplatné** modely, částky nákladů mohou být nulové. KPI počtu volání v části **Souhrn** stále vyžadují aktivitu ve vybraném období.
:::

## Filtrování dat

Pomocí tlačítek filtru nahoře změňte časové rozmezí.

:::note
Filtr **Uživatel** je viditelný pouze pro administrátory ve webové verzi. Není k dispozici na počítači.
:::

## Záložky

- **Souhrn** – KPI: celkové náklady, použité modely, počet volání a náklady na režim, průměrné náklady na volání, průměrné TPS, nejlepší modely podle počtu volání
- **Podle modelu** – volání, náklady a TPS na model; rozbalte řádek pro rozpis režimu
- **Všechna volání** – úplný protokol volání (stránkovaný nebo karty) s exportem

## Export dat

Exportujte tabulky jako **JSON**, **CSV** nebo **XLSX**.

## Smazání uložených záznamů pro model

V části **Podle modelu** nebo **Všechna volání** použijte ikonu koše k odstranění záznamů pro model.

:::caution
Smazání nelze vrátit zpět. Chcete-li smazat podle stáří nebo vymazat všechna data o nákladech, použijte [Nastavení → Sledování nákladů](/docs/settings/#cost-tracking).
:::

## Další kroky

- [Procházet historii](/docs/history/)
- [Nastavení](/docs/settings/)
- [Běžné problémy](/docs/common-issues/)
