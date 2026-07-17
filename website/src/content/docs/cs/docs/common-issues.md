---
title: Běžné problémy
description: Odstraňování problémů a rychlé tipy pro Transrewrt.
translation_last_updated: '2026-07-17T14:58:54.053Z'
source_file_mtime: '2026-07-17T14:37:17.841Z'
source_file_hash: d60d2f0d1e9289639fd72ad478b6756e4638dce77acf7d2d1795a37653a97f17
translation_language: cs
source_file_path: src/content/docs/docs/common-issues.md
translation_models:
  - google/gemini-2.5-flash
---



Pokud něco nefunguje podle očekávání, zkontrolujte nejprve tyto body.

## Aplikace nepřekládá, nepřepisuje ani netransformuje

Zkontrolujte, zda:

- na panelu nástrojů jste vybrali **předvolbu** (Snadné) nebo **model** (Pokročilé)
- v režimu **Snadné** má **Nastavení → Obecná nastavení** **poskytovatele** s funkčním klíčem (nebo URL místního LLM)
- v režimu **Pokročilé** je v **Nastavení → Modely** uveden alespoň jeden model
- vaše nastavení API funguje (desktop: **Nastavení → Konfigurace API → Test**)

## Seznam modelů je prázdný

V režimu **Snadné** ověřte, že je nastaven **Poskytovatel** a že jsou klíče/URL otestovány. Pro **Místní LLM** se ujistěte, že je spuštěn váš lokální server a že jsou načteny modely.

V režimu **Pokročilé** otevřete **Nastavení → Modely**, klikněte na **Obnovit** a přidejte modely do **Vybraných modelů**. Volitelně zapněte **Pouze zdarma**.

## Příliš pomalé nebo příliš drahé

- Zvolte jinou předvolbu nebo model
- Použijte kratší vstup
- Vypněte **Překlad v reálném čase během psaní** v Obecných nastaveních
- Pro jednoduché úkoly použijte bezplatné modely

## Špatný jazyk rozhraní

Klikněte na ikonu glóbu na panelu nástrojů a vyberte svůj **Jazyk rozhraní**.

## Text je příliš malý nebo špatně čitelný

**Nastavení → Obecná nastavení** → změňte **Rodinu písma** a **Velikost**.

## Souhrn na řídicím panelu vypadá prázdný

To je normální, pokud:

- používáte pouze **bezplatné modely** a díváte se na údaje o **nákladech** (mohou být nulové); KPI počtu volání stále potřebují data pro vybrané období
- vybraný **časový filtr** nepokrývá dobu, kdy byla volání provedena — zkuste **Vše**

Pokud jsou KPI stále nulové po **Vše**, zkontrolujte [Historii](/docs/history/) nebo Řídicí panel → **Všechna volání**.

## Náklady ukazují „není k dispozici“ nebo se zdají být chybné

OpenRouter zobrazuje skutečné výdaje, pokud jsou relevantní. U ostatních poskytovatelů se náklady odhadují z cen OpenRouter; pokud se žádná cena neshoduje, náklady se zobrazí jako **není k dispozici** a nejsou přičteny k celkové částce.

## Celkové náklady neodpovídají mému účtu poskytovatele

Čísla v aplikaci jsou **odhadem pro referenci**, nikoli faktury. Pro OpenRouter použijte **Nastavení → Sledování nákladů → Synchronizovat s využitím API klíče**.

## Stránka historie chybí v postranním panelu

**Ponechat historii provádění** může být vypnuto. Povolte ji v Obecných nastaveních, pokud historie není zakázána administrátorem (`HISTORY_DISABLED` — viz [Konfigurace](/docs/configuration/#privacy-mode)).

## Web: neočekávané přesměrování na přihlášení

Vaše relace mohla vypršet. Přihlaste se znovu. Pokud se to stává často, zkontrolujte nastavení životnosti serverové relace.

## Webový administrátor: zapomenuté heslo

Pokud se může přihlásit jiný administrátor, může resetovat heslo v části **Nastavení → Uživatelé**. Pokud jste zablokováni, ale máte přístup k shellu:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Výchozí uživatelské jméno administrátora je `admin`. Z pokladny zdroje: `pnpm run reset-web-password -- <username> <new-password>`.

## Řídicí panel nezobrazuje data pro ostatní uživatele (web)

Pouze **administrátoři** mohou prohlížet ostatní uživatele pomocí filtru **Uživatel**. Běžní uživatelé vidí pouze svou vlastní aktivitu.

## Změnili jste výzvu a ztratili úpravy

Při úpravě výzvy Transform klikněte na **Uložit** před **Zpět na Spustit**.

## Rychlé tipy

- Začněte s [Překladem](/docs/translate/), abyste potvrdili své nastavení před Přepsáním nebo Transformací
- Použijte [Přepsat](/docs/rewrite/) pro každodenní vylepšení formulace
- Použijte [Transformovat](/docs/transform/) pro opakovatelné vlastní pracovní postupy
- Zůstaňte v režimu **Snadné**, dokud nebudete potřebovat podrobné ID modelů
- Pravidelně exportujte výzvy, pokud vytváříte knihovnu výzev
- Použijte [Řídicí panel](/docs/dashboard/) a [Historii](/docs/history/) k přezkoumání využití a minulých spuštění

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
