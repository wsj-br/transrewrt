---
title: Bežné problémy
description: Riešenie problémov a rýchle tipy pre Transrewrt.
---



Ak niečo nefunguje podľa očakávania, najprv skontrolujte tieto body.

## Aplikácia neprekladá, neprepisuje ani netransformuje

Skontrolujte, či:

- ste vybrali **predvoľbu** (Jednoduché) alebo **model** (Pokročilé) na paneli nástrojov
- v režime **Jednoduché** má **Nastavenia → Všeobecné nastavenia** **poskytovateľa** s funkčným kľúčom (alebo URL lokálneho LLM)
- v režime **Pokročilé** je na paneli nástrojov vybraný model (prázdny zoznam je povolený, ale na spustenie potrebujete aspoň jeden model v **Nastavenia → Modely**)
- vaše nastavenie API funguje (desktop: **Nastavenia → Konfigurácia API → Test**)

## Zoznam modelov je prázdny

V režime **Jednoduché** potvrďte, že je nastavený **Poskytovateľ** a kľúče/URL sú otestované. Pre **Lokálny LLM** sa uistite, že váš lokálny server beží a modely sú načítané.

V režime **Pokročilé** môžu byť vybrané modely prázdne. Otvorte **Nastavenia → Modely**, kliknite na **Obnoviť** a pridajte modely do **Vybraných modelov**. Voliteľne zapnite **Len bezplatné**. Odstránenie posledného modelu z panela nástrojov tiež otvorí Nastavenia → Modely.

## Príliš pomalé alebo príliš drahé

- Vyberte inú predvoľbu alebo model
- Použite kratší vstup
- Vypnite **Preklad v reálnom čase počas písania** vo Všeobecných nastaveniach
- Používajte bezplatné modely pre jednoduché úlohy

## Nesprávny jazyk rozhrania

Kliknite na ikonu glóbusu na paneli nástrojov a vyberte si **Jazyk rozhrania**.

## Text je príliš malý alebo ťažko čitateľný

**Nastavenia → Všeobecné nastavenia** → zmeňte **Rodinu písma** a **Veľkosť**.

## Súhrn na hlavnom paneli vyzerá prázdny

To je normálne, ak:

- používate iba **bezplatné modely** a pozeráte sa na údaje o **nákladoch** (môžu byť nulové); KPI počtu volaní stále potrebujú údaje za vybrané obdobie
- vybraný **časový filter** nepokrýva čas, kedy boli volania uskutočnené – skúste **Všetky**

Ak sú KPI po **Všetkých** stále nulové, skontrolujte [Históriu](/docs/history/) alebo Hlavný panel → **Všetky volania**.

## Náklady ukazujú „nie sú k dispozícii“ alebo sa zdajú nesprávne

OpenRouter zobrazuje skutočné výdavky, ak sú relevantné. Pre ostatných poskytovateľov sa náklady odhadujú z cien OpenRouter; ak sa žiadna cena nezhoduje, náklady sa zobrazia ako **nie sú k dispozícii** a nepridajú sa k celkovej sume.

## Celkové náklady sa nezhodujú s mojím účtom od poskytovateľa

Údaje v aplikácii sú **odhadmi pre referenciu**, nie faktúrami. Pre OpenRouter použite **Nastavenia → Sledovanie nákladov → Synchronizovať s používaním API kľúča**.

## Stránka História chýba v bočnom paneli

Možno je vypnutá možnosť **Ponechať históriu vykonávania**. Povoľte ju vo Všeobecných nastaveniach, pokiaľ história nie je zakázaná administrátorom (`HISTORY_DISABLED` — pozrite [Konfigurácia](/docs/configuration/#privacy-mode)).

## Web: neočakávané presmerovanie na prihlásenie

Vaša relácia mohla vypršať. Prihláste sa znova. Ak sa to stáva často, požiadajte administrátora, aby zvýšil **Časový limit relácie** v časti [Nastavenia → Používatelia](/docs/settings/#users) (administrátor vám tiež mohol zrušiť relácie).

## Webový administrátor: zabudnuté heslo

Ak sa môže prihlásiť iný administrátor, môže resetovať heslo v časti **Nastavenia → Používatelia**. Ak ste zablokovaní, ale máte prístup k shellu:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Predvolené používateľské meno administrátora je `admin`. Z pôvodného úložiska: `pnpm run reset-web-password -- <username> <new-password>`.

## Dashboard nezobrazuje žiadne údaje pre ostatných používateľov (web)

Iba **administrátori** môžu prezerať ostatných používateľov pomocou filtra **Používateľ**. Bežní používatelia vidia iba svoju vlastnú aktivitu.

## Zmenil som výzvu a stratil úpravy

Pri úprave výzvy Transform kliknite na **Uložiť** pred **Späť na spustenie**.

## Rýchle tipy

- Začnite s [Preložiť](/docs/translate/), aby ste potvrdili svoje nastavenie pred Prepisom alebo Transformáciou
- Použite [Prepísať](/docs/rewrite/) na každodenné zlepšenie formulácie
- Použite [Transformovať](/docs/transform/) pre opakovateľné vlastné pracovné postupy
- Zostaňte v režime **Jednoduchý**, kým nebudete potrebovať podrobné ID modelov
- Pravidelne exportujte výzvy, ak vytvárate knižnicu výziev
- Použite [Dashboard](/docs/dashboard/) a [Históriu](/docs/history/) na kontrolu používania a minulých spustení

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
