---
title: Transformace pomocí výzev
description: >-
  Spouštějte vlastní pokyny AI – vytvářejte, upravujte, testujte a spravujte
  výzvy Transform.
translation_last_updated: '2026-07-17T14:58:55.335Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 07b5d140803063510c7c9fecf67a2f99e3aab3040116733a3126939b0c82e16e
translation_language: cs
source_file_path: src/content/docs/docs/transform.md
translation_models:
  - google/gemini-2.5-flash
---



Použijte **Transformaci**, když chcete, aby AI následovala vlastní pokyny – shrnula, vylepšila e-mail, extrahovala klíčové body, přeformátovala text nebo jakýkoli pracovní postup, který definujete.

![Pracovní prostor Transformace](/images/screenshots/cs/transform.png)

## Spuštění existující výzvy

1. Otevřete **Transformaci**.
2. Vyberte výzvu ze seznamu.
3. Pokud se zobrazí pole jazyka **Z**, nastavte jazyk, pokud ho chcete.
4. Napište nebo vložte text do **Vstupu**.
5. Klikněte na **Transformovat**.
6. Přečtěte si výsledek ve **Výstupu**.

## Načtení ukázkových výzev

Pokud je seznam prázdný, klikněte na **Načíst ukázkové výzvy** v pracovním prostoru Transformace (k dispozici také pod [Nastavení → Transformace](/docs/settings/#transform)). Ukázky jsou v angličtině; po načtení upravte výzvu a v případě potřeby použijte **Přeložit výzvu**.

## Vytvoření výzvy

1. Klikněte na **Nová výzva**.
2. Klikněte na **Generovat výzvu**.
3. Popište, co má výzva dělat.
4. Vyberte předvolbu (Snadné) nebo model (Pokročilé).
5. Zkontrolujte návrh a klikněte na **Uložit**.

## Úprava výzvy

Editor je vlevo; testovací oblast je vpravo.

![Editor výzev Transformace](/images/screenshots/cs/transform-prompt-edit.png)

Hlavní pole:

- **Název výzvy** – zobrazeno v seznamu výzev
- **Pokyny k výzvě (volitelné)** – krátká nápověda při spouštění výzvy
- **Role modelu** – celková role pro AI
- **Pokyny modelu (jeden na řádek)** – pravidla, která je třeba dodržovat
- **Popis výstupu** – krátký popisek výsledku (např. shrnuto)
- **Teplota (0,0 → 1,0)** – nižší je stabilnější; vyšší je rozmanitější
- **Požádat o cílový jazyk** – přidá výběr jazyka při spouštění

Pomocníci: **Generovat výzvu**, **Vylepšit výzvu**, **Přeložit výzvu** (Snadné používá předvolby; Pokročilé používá seznam modelů).

:::caution
Před **Zpět na Spustit** klikněte na **Uložit**. Návrat bez uložení zahodí úpravy.
:::

## Testování před každodenním použitím

Při vytváření nebo porovnávání výzev použijte pravý testovací panel s ukázkovým textem.

Hromadný export a import výzev najdete v části [Nastavení → Transformace](/docs/settings/#transform).

## Další kroky

- [Nastavení](/docs/settings/)
- [Historie procházení](/docs/history/)
- [Běžné problémy](/docs/common-issues/)
