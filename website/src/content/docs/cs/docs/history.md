---
title: Procházet historii
description: >-
  Zkontrolujte minulé spuštění překladu, přepsání a transformace s úplným
  vstupním a výstupním textem.
translation_last_updated: '2026-07-17T21:14:42.174Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 79c4a60a79491755299b9de8c5e8f0945ccc6d0b32743e1682fede521dade7fa
translation_language: cs
source_file_path: src/content/docs/docs/history.md
translation_models:
  - google/gemini-2.5-flash
---



Otevřete **Historii** a zobrazte minulé operace, včetně vstupu a výstupu každého spuštění.

![Stránka Historie](/images/screenshots/cs/history.png)

Historie používá stejné filtry časového rozsahu jako [Řídicí panel](/docs/dashboard/).

:::note
Ve **webové aplikaci** každý (včetně administrátorů) vidí pouze svou vlastní historii spuštění. Filtr **Uživatel** na řídicím panelu se zde neuplatňuje.
{{ADM_ADM_END_0}}

## Export

Exportujte filtrovaný seznam jako **JSON**, **CSV** nebo **XLSX**.

## Pokud historie chybí

Možná je vypnutá volba **Udržovat historii spuštění**. Povolte ji v [Nastavení → Obecná nastavení](/docs/settings/#general-settings), pokud administrátor nenastavil `HISTORY_DISABLED` – viz [Konfigurace](/docs/configuration/#privacy-mode).

## Další kroky

- [Použít řídicí panel](/docs/dashboard/)
- [Nastavení](/docs/settings/)
- [Běžné problémy](/docs/common-issues/)
