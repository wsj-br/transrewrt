---
title: Přeložit text
description: >-
  Převádějte text mezi jazyky, používejte glosář a upřesňujte výsledky pomocí
  funkce Přeformulovat.
translation_last_updated: '2026-07-17T14:58:55.529Z'
source_file_mtime: '2026-07-17T11:53:39.333Z'
source_file_hash: ace9ad02a7dc82bf08090597c56e7cc82324e6250beab93fc2dbeaeed8b91675
translation_language: cs
source_file_path: src/content/docs/docs/translate.md
translation_models:
  - google/gemini-2.5-flash
---



Použijte **Přeložit** k převodu textu z jednoho jazyka do druhého.

![Přeložit pracovní prostor](/images/screenshots/cs/translate.png)

## Předpoklady

- Alespoň jeden klíč poskytovatele (desktop) nebo klíč serverového prostředí (web) – viz [API klíč](/docs/api-key/)
- V panelu nástrojů je vybrána **předvolba** (Snadné) nebo **model** (Pokročilé)

## Přeložit text

1. Otevřete **Přeložit** v postranním panelu.
2. Vyberte jazyk v poli **Z** (nebo **Detekovat jazyk**).
3. Vyberte jazyk v poli **Do**.
4. Vyberte předvolbu nebo model v panelu nástrojů.
5. Napište nebo vložte text do pole **Vstup**.
6. Klikněte na **Přeložit**.
7. Přečtěte si výsledek v poli **Výstup** a v případě potřeby jej zkopírujte.

**Nejpoužívanější jazyky** se zobrazují na začátku seznamů – nastavte je v [Nastavení → Jazyky](/docs/settings/#languages).

## Užitečná nastavení

V [Nastavení → Obecná nastavení](/docs/settings/#general-settings):

- **Automatické spuštění po vložení** – spustí se ihned po vložení
- **Automatické kopírování výsledku do schránky** – zkopíruje se po úspěšném spuštění
- **Překlad v reálném čase během psaní** – spouští se během psaní (může zvýšit náklady)
- **Časový limit (ms)** – čekání před spuštěním v reálném čase
- **Chování pro ENTER** – zda Enter spustí úlohu nebo vloží nový řádek

## Upřesnit překlad

Po úspěšném spuštění se vedle selektoru **Do:** zobrazí **Přeformulovat…** a rozbalovací nabídka verzí:

1. **Přeformulovat…** (bez výběru) – další úplný překlad stejného vstupu. Až **pět** verzí; model vidí předchozí verze, takže se formulace může lišit. Kliknutím na **Zastavit překlad** zrušíte probíhající přeformulování.
2. **Alternativy slov** – vyberte slova nebo krátkou frázi, poté klikněněte pravým tlačítkem nebo na **Přeformulovat…**. Vyberte alternativu, která nahradí rozsah (může se mírně rozšířit kvůli gramatice). U pěti verzí se aktualizuje pouze verze 5.
3. Každá žádost o přeformulování nebo alternativy znovu použije model a může zvýšit náklady.

## Použití glosáře

**Glosář** je dvojice zdrojových/cílových termínů pro jazykový pár. Když je povolen, odpovídající termíny se odesílají do modelu, takže preferovaná formulace zůstává konzistentní.

1. Zapněte **Glosář** v vstupním panelu.
2. Překládejte jako obvykle – termíny pro daný pár **Z** / **Do** se aplikují automaticky.
3. Klikněte na **Přidat do glosáře** (vedle **Z:**) pro rychlé zachycení nového páru.
4. Spravujte všechny termíny v [Nastavení → Glosář](/docs/settings/#glossary).

:::note
Termíny glosáře jsou porovnávány podle jazykového páru. Nelze je použít s funkcí **Detekovat jazyk** jako zdroj.
:::

## Další kroky

- [Přepsat text](/docs/rewrite/)
- [Transformovat pomocí výzev](/docs/transform/)
- [Běžné problémy](/docs/common-issues/)
