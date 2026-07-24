---
title: Přeložit text
description: >-
  Převádějte text mezi jazyky, používejte glosář a upřesňujte výsledky pomocí
  funkce Přeformulovat.
---



Použijte **Přeložit** k převodu textu z jednoho jazyka do druhého.

![Pracovní prostor pro překlad](/images/screenshots/cs/translate.png)

## Předpoklady

- Alespoň jeden klíč poskytovatele (desktop) nebo klíč prostředí serveru (web) – viz [API klíč](/docs/api-key/)
- V panelu nástrojů vybrána **předvolba** (Snadné) nebo **model** (Pokročilé)

## Přeložit text

1. Otevřete **Přeložit** na postranním panelu.
2. Zvolte jazyk v poli **Z** (nebo **Detekovat jazyk**).
3. Zvolte jazyk v poli **Do**.
4. Zvolte předvolbu nebo model v panelu nástrojů.
5. Napište nebo vložte text do pole **Vstup**.
6. Klikněte na **Přeložit**.
7. Přečtěte si výsledek v poli **Výstup** a v případě potřeby jej zkopírujte.

**Nejpoužívanější jazyky** se zobrazují na začátku seznamů – nastavte je v [Nastavení → Jazyky](/docs/settings/#languages).

## Užitečná nastavení

V [Nastavení → Obecná nastavení](/docs/settings/#general-settings):

- **Automatické spuštění při vložení** – spustí se ihned po vložení
- **Automatické kopírování výsledku do schránky** – zkopíruje se po úspěšném spuštění
- **Překlad v reálném čase během psaní** – spustí se během psaní (může zvýšit náklady)
- **Časový limit (ms)** – čekání před spuštěním v reálném čase
- **Chování pro ENTER** – zda Enter spustí úlohu nebo vloží nový řádek

## Rozložení a klávesnice

- **Přepínač rozložení** – tlačítka nad panely přepínají mezi rozložením Vstup/Výstup **vedle sebe** a **pod sebou**. Volba se vztahuje na Překlad, Přepsání a Transformaci a je zapamatována na tomto zařízení.
- **Enter** nebo **Shift+Enter** spustí úlohu, v závislosti na **Chování pro ENTER** (viz výše).
- **Escape** vymaže vstupní panel (nebo nejprve zavře otevřené menu či dialog).

## Upřesnit překlad

Po úspěšném spuštění se vedle selektoru **Do:** objeví **Přeformulovat…** a rozbalovací nabídka verzí:

1. **Přeformulovat…** (bez výběru) – další úplný překlad stejného vstupu. Až **pět** verzí; model vidí předchozí verze, takže se formulace může lišit. Kliknutím na **Zastavit překlad** zrušíte probíhající přeformulování.
2. **Alternativy slov** – vyberte slova nebo krátkou frázi, poté klikněte pravým tlačítkem nebo na **Přeformulovat…**. Vyberte alternativu, která nahradí rozsah (může se mírně rozšířit kvůli gramatice). U pěti verzí se aktualizuje pouze verze 5.
3. Každé přeformulování nebo požadavek na alternativy znovu použije model a může zvýšit náklady.

## Použití glosáře

**Glosář** je dvojice zdrojových/cílových termínů pro jazykový pár. Je-li povolen, odpovídající termíny jsou odeslány modelu, takže preferovaná formulace zůstává konzistentní.

1. Zapněte **Slovník** na vstupním panelu.
2. Překládejte jako obvykle – termíny pro daný pár **Z** / **Do** se aplikují automaticky.
3. Kliknutím na **Přidat do slovníku** (vedle **Z:**) rychle zachytíte nový pár.
4. Spravujte všechny termíny v [Nastavení → Slovník](/docs/settings/#glossary).

:::note
Termíny slovníku jsou přiřazeny podle jazykového páru. Nelze je použít s **Rozpoznat jazyk** jako zdroj.
:::

## Další kroky

- [Přepsat text](/docs/rewrite/)
- [Transformovat pomocí výzev](/docs/transform/)
- [Běžné problémy](/docs/common-issues/)
