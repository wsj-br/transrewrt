---
title: Časté problémy
description: Riešenie problémov a rýchle tipy pre Transrewrt.
translation_last_updated: '2026-07-17T14:59:02.722Z'
source_file_mtime: '2026-07-17T14:37:17.841Z'
source_file_hash: d60d2f0d1e9289639fd72ad478b6756e4638dce77acf7d2d1795a37653a97f17
translation_language: sk
source_file_path: src/content/docs/docs/common-issues.md
translation_models:
  - google/gemini-2.5-flash
---



Ak niečo nefunguje podľa očakávania, najprv skontrolujte tieto body.

## Aplikácia neprekladá, neprepisuje ani netransformuje

Skontrolujte, či:

- na paneli nástrojov ste vybrali **predvoľbu** (Easy) alebo **model** (Advanced)
- v režime **Easy** má sekcia **Settings → General Settings** nastavený **Provider** s funkčným kľúčom (alebo URL lokálneho LLM)
- v režime **Advanced** je v sekcii **Settings → Models** uvedený aspoň jeden model
- vaše nastavenie API funguje (desktop: **Settings → API Config → Test**)

## Zoznam modelov je prázdny

V režime **Easy** skontrolujte, či je nastavený **Provider** a či sú kľúče/URL otestované. Pre **Local LLM** sa uistite, že váš lokálny server beží a modely sú načítané.

V režime **Pokročilé** otvorte **Nastavenia → Modely**, kliknite na **Obnoviť** a pridajte modely do **Vybraných modelov**. Voliteľne zapnite **Len bezplatné**.

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

Je to normálne, ak:

- používate iba **bezplatné modely** a pozeráte sa na údaje o **nákladoch** (môžu byť nulové); KPI počtu volaní stále potrebujú údaje za vybrané obdobie
- vybraný **časový filter** nepokrýva čas, kedy boli volania uskutočnené – skúste **Všetky**

Ak sú KPI po nastavení na **Všetky** stále nulové, skontrolujte [Históriu](/docs/history/) alebo Hlavný panel → **Všetky volania**.

## Náklady ukazujú „nie sú k dispozícii“ alebo sa zdajú byť nesprávne

OpenRouter zobrazuje skutočné výdavky, ak sú relevantné. Pre ostatných poskytovateľov sa náklady odhadujú z cien OpenRouter; ak sa žiadna cena nezhoduje, náklady sa zobrazia ako **nie sú k dispozícii** a nepridávajú sa k celkovej sume.

## Celkové náklady sa nezhodujú s mojím účtom od poskytovateľa

Údaje v aplikácii sú **odhadmi pre referenciu**, nie faktúrami. Pre OpenRouter použite **Nastavenia → Sledovanie nákladov → Synchronizovať s používaním kľúča API**.

## Stránka histórie chýba na bočnom paneli

Možnosť **Ponechať históriu vykonávania** môže byť vypnutá. Povoľte ju vo Všeobecných nastaveniach, pokiaľ história nie je zakázaná administrátorom (`HISTORY_DISABLED` – pozrite si [Konfigurácia](/docs/configuration/#privacy-mode)).

## Web: neočakávané presmerovanie na prihlásenie

Vaša relácia mohla vypršať. Prihláste sa znova. Ak sa to stáva často, skontrolujte nastavenia životnosti relácie servera.

## Webový administrátor: zabudnuté heslo

Ak sa môže prihlásiť iný správca, môže resetovať heslo v časti **Nastavenia → Používatelia**. Ak ste zablokovaný, ale máte prístup k shellu:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Predvolené používateľské meno správcu je `admin`. Z pokladne zdroja: `pnpm run reset-web-password -- <username> <new-password>`.

## Hlavný panel nezobrazuje žiadne údaje pre ostatných používateľov (web)

Iba **administrátori** môžu prezerať ostatných používateľov pomocou filtra **Používateľ**. Bežní používatelia vidia iba svoju vlastnú aktivitu.

## Zmenili ste výzvu a stratili úpravy

Pri úprave výzvy Transform kliknite na **Uložiť** pred **Späť na spustenie**.

## Rýchle tipy

- Začnite s [Preložiť](/docs/translate/), aby ste potvrdili svoje nastavenie pred Prepisom alebo Transformáciou
- Použite [Prepísať](/docs/rewrite/) na každodenné zlepšenia formulácie
- Použite [Transformovať](/docs/transform/) pre opakovateľné vlastné pracovné postupy
- Zostaňte v režime **Jednoduché**, kým nebudete potrebovať podrobné ID modelov
- Pravidelne exportujte výzvy, ak vytvárate knižnicu výziev
- Používajte [Hlavný panel](/docs/dashboard/) a [Históriu](/docs/history/) na kontrolu používania a minulých spustení

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
