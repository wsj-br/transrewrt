---
title: Preložiť text
description: >-
  Prekladajte text medzi jazykmi, používajte glosár a spresňujte výsledky
  pomocou funkcie Preformulovať.
---



Použite funkciu **Preložiť** na preklad textu z jedného jazyka do druhého.

![Pracovný priestor prekladu](/images/screenshots/sk/translate.png)

## Predpoklady

- Aspoň jeden kľúč poskytovateľa (desktop) alebo kľúč prostredia servera (web) — pozrite si [API kľúč](/docs/api-key/)
- V paneli nástrojov vybratá **predvoľba** (Jednoduché) alebo **model** (Pokročilé)

## Preložiť text

1. Otvorte **Preložiť** na bočnom paneli.
2. Vyberte jazyk v poli **Z** (alebo **Rozpoznať jazyk**).
3. Vyberte jazyk v poli **Do**.
4. Vyberte predvoľbu alebo model v paneli nástrojov.
5. Zadajte alebo prilepte text do poľa **Vstup**.
6. Kliknite na **Preložiť**.
7. Prečítajte si výsledok v poli **Výstup** a v prípade potreby ho skopírujte.

**Najpoužívanejšie jazyky** sa zobrazujú ako prvé v zoznamoch — nastavte ich v časti [Nastavenia → Jazyky](/docs/settings/#languages).

## Užitočné nastavenia

V časti [Nastavenia → Všeobecné nastavenia](/docs/settings/#general-settings):

- **Automatické spustenie po prilepení** — spustí sa hneď po prilepení
- **Automatické kopírovanie výsledku do schránky** — skopíruje sa po úspešnom spustení
- **Preklad v reálnom čase počas písania** — spustí sa počas písania (môže zvýšiť náklady)
- **Časový limit (ms)** — počkajte pred spustením v reálnom čase
- **Správanie pre ENTER** — či kláves Enter spustí úlohu alebo vloží nový riadok

## Rozloženie a klávesnica

- **Prepínač rozloženia** — tlačidlá nad panelmi prepínajú medzi **vedľa seba** a **naskladanými** rozloženiami Vstup/Výstup. Voľba sa vzťahuje na Preložiť, Preformulovať a Transformovať a je zapamätaná na tomto zariadení.
- **Enter** alebo **Shift+Enter** spustí úlohu v závislosti od **Správania pre ENTER** (pozri vyššie).
- **Escape** vymaže vstupný panel (alebo najprv zatvorí otvorené menu alebo dialógové okno).

## Spresniť preklad

Po úspešnom spustení sa vedľa selektora **Do:** zobrazí **Preformulovať…** a rozbaľovacia ponuka verzií:

1. **Preformulovať…** (bez výberu) — ďalší úplný preklad rovnakého vstupu. Až **päť** verzií; model vidí predchádzajúce verzie, takže formulácia sa môže líšiť. Kliknutím na **Zastaviť preklad** zrušíte prebiehajúce preformulovanie.
2. **Alternatívy slov** — vyberte slová alebo krátku frázu, potom kliknite pravým tlačidlom myši alebo na **Preformulovať…**. Vyberte alternatívu, ktorá nahradí rozsah (môže sa mierne rozšíriť kvôli gramatike). Pri piatich verziách sa aktualizuje iba verzia 5.
3. Každá požiadavka na preformulovanie alebo alternatívy opäť použije model a môže zvýšiť náklady.

## Použiť glosár

**Glosár** sú páry zdrojových/cieľových výrazov pre jazykový pár. Keď je povolený, zodpovedajúce výrazy sa odošlú do modelu, aby sa zachovala konzistentnosť preferovanej formulácie.

1. Zapnite **Glosár** na vstupnom paneli.
2. Prekladajte ako zvyčajne – termíny pre daný pár **Z** / **Do** sa použijú automaticky.
3. Kliknite na **Pridať do glosára** (vedľa **Z:**), aby ste rýchlo zachytili nový pár.
4. Spravujte všetky termíny v [Nastavenia → Glosár](/docs/settings/#glossary).

:::note
Termíny glosára sa zhodujú podľa jazykového páru. Nemôžu byť použité s **Rozpoznať jazyk** ako zdroj.
:::

## Ďalšie kroky

- [Prepísať text](/docs/rewrite/)
- [Transformovať pomocou výziev](/docs/transform/)
- [Bežné problémy](/docs/common-issues/)
