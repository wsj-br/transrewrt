---
title: Preložiť text
description: Preložte text medzi jazykmi, použite glosár a upravené výsledky s Rephrase.
---



Použite **Preložiť**, aby ste preložili text z jedného jazyka do druhého.

![Preložiť pracovný priestor](/images/screenshots/sk/translate.png)

## Predpoklady

- Aspoň jeden poskytovateľský kľúč (desktop) alebo serverový env kľúč (web) — pozri [API kľúč](/docs/api-key/)
- **Preset** (Ľahký) alebo **model** (Pokročilý) vybraný v paneli nástrojov

## Preložiť text

1. Otvorte **Preložiť** v bočnom paneli.
2. Vyberte jazyk v **Z** (alebo **Zistite jazyk**).
3. Vyberte jazyk v **Do**.
4. Vyberte preset alebo model v paneli nástrojov.
5. Zadajte alebo vložte text do **Vstup**.
6. Kliknite **Preložiť**.
7. Čítajte výsledok v **Výstup**, potom skopírujte ak je potreba.

**Hlavné jazyky** sa zobrazujú najskôr v zoznamoch — nastavte ich v [Nastavenia → Jazyky](/docs/settings/#languages).

## Užitočné nastavenia

V [Nastavenia → Všeobecné nastavenia](/docs/settings/#general-settings):

- **Automatické spustenie pri vkladaní** — spustí sa okamžite po vkladaní
- **Automatické kopírovanie výsledku do schránky** — kopíruje po úspešnom spustení
- **Preklad v reálnom čase počas písania** — spustí sa počas písania (môže zvyšovať náklady)
- **Časový limit (ms)** — čakajte pred spustením v reálnom čase
- **Správanie pri ENTER** — či Enter spustí úlohu alebo vloží nový riadok

## Upraviť preklad

Po úspešnom spustení sa zobrazí **Rephrase…** a rozbaľovacie menu vedľa **Do:** selektora:

1. **Rephrase…** (žiadna výber) — ďalší plný preklad rovnakého vstupu. Maximálne **päť** verzií; model vidí predchádzajúce verzie, takže sa môže líšiť slovná zásoba. Kliknite **Stop Translate**, aby ste zrušili bežiace rephrasovanie.
2. **Alternatívy slov** — vyberte slová alebo krátky výraz, potom kliknite pravým tlačidlom alebo **Rephrase…**. Vyberte alternatívu, ktorá nahradí daný úsek (môže sa míľne rozšíriť pre gramatiku). Pri piatich verziách sa aktualizuje len verzia 5.
3. Každá žiadosť o rephrasovanie alebo alternatívy používa model znovu a môže pridať náklady.

## Použite glosár

**Glossár** je zber párov zdrojových a cieľových termínov pre jazykový pár. Keď je povolený, zhodné termíny sa odosielajú modelu, aby sa zachovala konzistentnosť preferovaného slovného použitia.

1. Zapnite **Glosár** v vstupnom paneli.
2. Preložte ako obvykle — termíny pre daný **Z** / **Do** pár sa aplikujú automaticky.
3. Kliknite **Pridať do glosáru** (vedľa **Z:**), aby ste rýchlo zachytili nový pár.
4. Spravujte všetky termíny v [Nastavenia → Glosár](/docs/settings/#glossary).

:::note
Termíny glosára sa zhodujú podľa jazykového páru. Nemožno ich použiť s možnosťou **Detect Language** ako zdrojom.
:::

## Ďalšie kroky

- [Prepísať text](/docs/rewrite/)
- [Transformovať pomocou výziev](/docs/transform/)
- [Bežné problémy](/docs/common-issues/)
