---
title: Transformácia pomocou výziev
description: >-
  Spúšťajte vlastné pokyny AI — vytvárajte, upravujte, testujte a spravujte
  výzvy Transform.
translation_last_updated: '2026-07-17T14:59:04.567Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: 07b5d140803063510c7c9fecf67a2f99e3aab3040116733a3126939b0c82e16e
translation_language: sk
source_file_path: src/content/docs/docs/transform.md
translation_models:
  - google/gemini-2.5-flash
---



Použite **Transformovať**, keď chcete, aby AI postupovala podľa vlastných pokynov — zhrnula, vylepšila e-mail, extrahovala kľúčové body, preformátovala text alebo akýkoľvek pracovný postup, ktorý definujete.

![Pracovný priestor Transform](/images/screenshots/sk/transform.png)

## Spustenie existujúcej výzvy

1. Otvorte **Transformovať**.
2. Zo zoznamu vyberte výzvu.
3. Ak sa zobrazí pole jazyka **Z**, nastavte jazyk, ak ho chcete.
4. Zadajte alebo prilepte text do **Vstupu**.
5. Kliknite na **Transformovať**.
6. Prečítajte si výsledok vo **Výstupe**.

## Načítanie vzorových výziev

Ak je zoznam prázdny, kliknite na **Načítať vzorové výzvy** v pracovnom priestore Transform (dostupné aj v časti [Nastavenia → Transformovať](/docs/settings/#transform)). Vzorky sú v angličtine; po načítaní upravte výzvu a v prípade potreby použite **Preložiť výzvu**.

## Vytvorenie výzvy

1. Kliknite na **Nová výzva**.
2. Kliknite na **Generovať výzvu**.
3. Popíšte, čo má výzva robiť.
4. Vyberte predvoľbu (Jednoduché) alebo model (Pokročilé).
5. Skontrolujte návrh a kliknite na **Uložiť**.

## Úprava výzvy

Editor je vľavo; testovacia oblasť je vpravo.

![Editor výziev Transform](/images/screenshots/sk/transform-prompt-edit.png)

Hlavné polia:

- **Názov výzvy** — zobrazený v zozname výziev
- **Pokyny k výzve (voliteľné)** — krátka nápoveda pri spúšťaní výzvy
- **Rola modelu** — celková rola pre AI
- **Pokyny modelu (jeden na riadok)** — pravidlá, ktoré treba dodržiavať
- **Popis výstupu** — krátky štítok pre výsledok (napr. zhrnuté)
- **Teplota (0,0 → 1,0)** — nižšia je stabilnejšia; vyššia je rozmanitejšia
- **Požiadať o cieľový jazyk** — pridá výber jazyka pri spúšťaní

Pomocníci: **Generovať výzvu**, **Vylepšiť výzvu**, **Preložiť výzvu** (Jednoduché používa predvoľby; Pokročilé používa zoznam modelov).

:::caution
Pred **Späť na spustenie** kliknite na **Uložiť**. Návrat bez uloženia zahodí úpravy.
:::

## Testovanie pred každodenným použitím

Pri vytváraní alebo porovnávaní výziev použite pravý testovací panel s ukážkovým textom.

Exportujte a importujte výzvy hromadne v časti [Nastavenia → Transformácia](/docs/settings/#transform).

## Ďalšie kroky

- [Nastavenia](/docs/settings/)
- [Prehliadať históriu](/docs/history/)
- [Bežné problémy](/docs/common-issues/)
