---
title: Běžné problémy
description: Odstraňování problémů a rychlé tipy pro Transrewrt.
---



Pokud něco nefunguje podle očekávání, zkontrolujte nejprve tyto body.

## Aplikace nepřekládá, nepřepisuje ani netransformuje

Zkontrolujte, zda:

- jste vybrali **předvolbu** (Snadné) nebo **model** (Pokročilé) na panelu nástrojů
- v režimu **Snadné** má **Nastavení → Obecná nastavení** **poskytovatele** s funkčním klíčem (nebo URL místního LLM)
- v režimu **Pokročilé** je na panelu nástrojů vybrán model (prázdný seznam je povolen, ale pro spuštění potřebujete alespoň jeden model v **Nastavení → Modely**)
- vaše nastavení API funguje (desktop: **Nastavení → Konfigurace API → Test**)

## Seznam modelů je prázdný

V režimu **Snadné** potvrďte, že je nastaven **Poskytovatel** a klíče/URL jsou otestovány. Pro **Místní LLM** se ujistěte, že je spuštěn váš lokální server a modely jsou načteny.

V režimu **Pokročilé** mohou být vybrané modely prázdné. Otevřete **Nastavení → Modely**, klikněte na **Obnovit** a přidejte modely do **Vybraných modelů**. Volitelně zapněte **Pouze zdarma**. Odebrání posledního modelu z panelu nástrojů také otevře Nastavení → Modely.

## Příliš pomalé nebo příliš drahé

- Zvolte jinou předvolbu nebo model
- Použijte kratší vstup
- Vypněte **Překlad v reálném čase při psaní** v Obecných nastaveních
- Pro jednoduché úkoly použijte bezplatné modely

## Špatný jazyk rozhraní

Klikněte na ikonu zeměkoule na panelu nástrojů a zvolte svůj **Jazyk rozhraní**.

## Text je příliš malý nebo špatně čitelný

**Nastavení → Obecná nastavení** → změňte **Rodinu písma** a **Velikost**.

## Souhrn panelu vypadá prázdný

To je normální, pokud:

- používáte pouze **bezplatné modely** a díváte se na údaje o **nákladech** (mohou být nulové); KPI počtu volání stále potřebují data pro vybrané období
- vybraný **časový filtr** nepokrývá dobu, kdy byla volání provedena – zkuste **Vše**

Pokud jsou KPI po **Vše** stále nulové, zkontrolujte [Historii](/docs/history/) nebo Panel → **Všechna volání**.

## Náklady ukazují „není k dispozici“ nebo se zdají být chybné

OpenRouter zobrazuje skutečné výdaje, pokud je to relevantní. U ostatních poskytovatelů je cena odhadována z cen OpenRouter; pokud se žádná cena neshoduje, zobrazí se cena jako **není k dispozici** a není přičtena k celkové částce.

## Celkové náklady neodpovídají mému vyúčtování od poskytovatele

Čísla v aplikaci jsou **odhadem pro referenci**, nikoli faktury. Pro OpenRouter použijte **Nastavení → Sledování nákladů → Synchronizovat s využitím API klíče**.

## Stránka Historie chybí v postranním panelu

Možná je vypnuta možnost **Uchovat historii spuštění**. Povolte ji v obecných nastaveních, pokud historie není zakázána administrátorem (`HISTORY_DISABLED` – viz [Konfigurace](/docs/configuration/#privacy-mode)).

## Web: neočekávaně přesměrováno na přihlášení

Vaše relace možná vypršela. Přihlaste se znovu. Pokud se to stává často, požádejte administrátora, aby zvýšil **Časový limit relace** v [Nastavení → Uživatelé](/docs/settings/#users) (administrátor mohl také zrušit vaše relace).

## Webový administrátor: zapomenuté heslo

Pokud se může přihlásit jiný administrátor, může resetovat heslo v **Nastavení → Uživatelé**. Pokud jste zablokováni, ale máte přístup k shellu:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Výchozí uživatelské jméno administrátora je `admin`. Z výchozího umístění: `pnpm run reset-web-password -- <username> <new-password>`.

## Dashboard nezobrazuje data pro ostatní uživatele (web)

Pouze **administrátoři** mohou zobrazit ostatní uživatele pomocí filtru **Uživatel**. Běžní uživatelé vidí pouze svou vlastní aktivitu.

## Změnil jsem výzvu a ztratil úpravy

Při úpravě výzvy Transform klikněte na **Uložit** před **Zpět na spuštění**.

## Rychlé tipy

- Začněte s [Přeložit](/docs/translate/), abyste potvrdili nastavení před Přepsáním nebo Transformací
- Použijte [Přepsat](/docs/rewrite/) pro každodenní vylepšení formulace
- Použijte [Transformovat](/docs/transform/) pro opakovatelné vlastní pracovní postupy
- Zůstaňte v režimu **Snadné**, dokud nebudete potřebovat jemně odlišená ID modelů
- Pravidelně exportujte výzvy, pokud vytváříte knihovnu výzev
- Použijte [Dashboard](/docs/dashboard/) a [Historii](/docs/history/) k přezkoumání využití a minulých spuštění

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
