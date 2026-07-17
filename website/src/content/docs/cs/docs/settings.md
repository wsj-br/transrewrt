---
title: Nastavení
description: >-
  Stručná reference pro Obecné, Modely, Jazyky, Glosář, Náklady, Transformace,
  Uživatelé, API a O aplikaci.
---



Otevřete **Nastavení** z postranního panelu a přizpůsobte si chování aplikace.

| Karta | Desktop | Web (administrátor) | Web (uživatel) | Poznámky |
| --- | :---: | :---: | :---: | --- |
| Obecná nastavení | ano | ano | ano | Zahrnuje **Zkušenosti s AI** (Snadné / Pokročilé) |
| Modely | ano | ano | ano | Pouze pokud je **Zkušenosti s AI** nastaveno na **Pokročilé** |
| Jazyky | ano | ano | ano | |
| Sledování nákladů | ano | ano | — | |
| Transformace | ano | ano | ano | Hromadný import/export promptů |
| Glosář | ano | ano | ano | Páry termínů pro překlad |
| Uživatelé | — | ano | — | |
| Konfigurace API | ano | ano | — | |
| O aplikaci | ano | ano | ano | |

V režimu **Snadné** vyberte AI pomocí předvoleb na panelu nástrojů a **Poskytovatele** v Obecných nastaveních; karta **Modely** je skrytá.

:::note
Ve webové verzi má každý uživatel svou vlastní konfiguraci (zkušenosti s AI, poskytovatel, modely/předvolby, jazyky, možnosti, prompty). Změny neovlivňují ostatní uživatele.
:::

## Obecná nastavení

**Zkušenosti s AI**

- **Jednoduché** (výchozí): zvolte **Poskytovatele**. Cloudoví poskytovatelé používají předvolby nástrojové lišty (**Zdarma (OpenRouter)**, **Standard**, **Pokročilé**, **Technické**). **Místní LLM** zobrazuje nainstalované místní modely. **Aktualizovat katalog předvoleb** načte nejnovější seznam předvoleb z repozitáře projektu.
- **Pokročilé**: zvolte modely v nástrojové liště; spravujte seznam v [Modelech](#models).

**Vzhled** — Téma; **Zobrazit informace o nákladech u akcí**; **Desetinná místa nákladů**; okraj kolem aplikace pouze pro web; **Rodina písem** a **Velikost**.

**Chování** — **Chování pro ENTER**; **Automatické spuštění při vložení**; **Automatické kopírování výsledku do schránky**; **Překlad v reálném čase během psaní**; **Časový limit (ms)**.

**Historie**

- **Uchovávat historii spuštění** — ukládat vstup/výstup pro zobrazení [Historie](/docs/history/). Vypnutí vyžaduje potvrzení a může odstranit uložený text. Pokud je označeno jako *zakázáno administrátorem*, je nastaveno `HISTORY_DISABLED` — viz [Konfigurace](/docs/configuration/#privacy-mode).
- **Smazat data historie** — odstranit uložený text podle stáří nebo vymazat vše. **Nemaže** celkové náklady (k tomu použijte Sledování nákladů).

**Záloha konfigurace** (administrátoři desktopu a webu)

- Volitelné **Zahrnout data o používání do zálohy**
- **Zálohovat konfiguraci** — ZIP s konfigurací, stavem, uživateli, preferencemi, výzvami a volitelnými daty o používání
- **Obnovit ze zálohy** — potvrzovací dialog s možnostmi obnovení a/nebo vymazání dat o používání

Zálohy lze přesouvat mezi desktopem a webem; obnovení desktopové zálohy na webu aplikuje data na uživatele administrátora.

## Modely

Dostupné pouze v režimu **Pokročilé**.

![Karta Nastavení Modely](/images/screenshots/cs/settings-general.png)

- **Dostupné modely** (vlevo) a **Vybrané modely** (vpravo)
- Vyhledávání, **Poskytovatel** čipů, **Pouze zdarma**, **Aktualizovat**, Rozbalit/Sbalit vše
- Identifikátory modelů používají předponu poskytovatele (`openrouter/…`, `openai/…`, `local/…`, …)

:::caution
Nepoužívejte OpenRouter **Body Builder** (`openrouter/bodybuilder`) pro Překlad, Přepis nebo Transformaci — vrací JSON request payloady, nikoli hotový text.
:::

Přidat pomocí **Přidat**; odebrat pomocí **X**. **Zrušit výběr všeho** ponechá požadovaný bezplatný model.

## Jazyky

- **Nejpoužívanější jazyky** — připnuté blízko horní části seznamů jazyků v Překladu a Transformaci
- **Vlastní jazyk** — přidat jazyk chybějící v předdefinovaném seznamu

## Sledování nákladů

- **Celkové náklady**, **Kopírovat hodnotu**, **Resetovat náklady**
- **Synchronizovat s využitím API klíče** — sladit s využitím účtu OpenRouter (pouze OpenRouter)
- **Využití API klíče** — podrobnosti OpenRouter, pokud jsou k dispozici
- **Smazat data o nákladech** — všechna data nebo záznamy starší než určité datum

OpenRouter zobrazuje skutečné účtované náklady, pokud je to relevantní; ostatní poskytovatelé používají odhady z cen OpenRouter. Odhady nejsou faktury.

:::caution
Smazání dat o nákladech nelze vrátit zpět. Pokud potřebujete zálohu, nejprve exportujte přes Historii nebo Dashboard → Všechna volání. Související historie vstupu/výstupu pro tato volání API je také odstraněna.
:::

## Transformovat

Hromadná správa výzev: kontrola, smazání, import, export a načtení ukázkových výzev.

## Glosář

Spravujte páry termínů aplikované během [překladu](/docs/translate/#use-the-glossary). Každý termín má zdrojový/cílový jazyk a zdrojový/cílový text.

- Přidat pomocí spodního řádku a **+**
- Filtrovat podle jazyků nebo textu
- Import/export CSV nebo XLSX; stáhnout prázdné šablony

Desktop ukládá glosář lokálně; web ho ukládá pro každého uživatele.

## Uživatelé

Pouze web (administrátoři): přidávání uživatelů, aktualizace podrobností, resetování hesel, mazání účtů.

## Konfigurace API

Konfigurujte pouze poskytovatele, které používáte: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Místní LLM** (základní URL pro Ollama, LM Studio, llama.cpp, nebo podobné), a volitelného vlastního poskytovatele kompatibilního s OpenAI.

**Web (administrátor):** klíče pocházejí z proměnných prostředí – tato stránka ukazuje, které jsou nastaveny, a umožňuje vám je **Testovat**. Po změně proměnných prostředí restartujte. Viz [Konfigurace](/docs/configuration/).

**Desktop:** zadejte klíče (nebo URL Místního LLM) a **Uložit** / **Upravit** / **Otestovat**. Klíče jsou uloženy zašifrované; nelze zobrazit aktuální hodnotu, pouze ji nahradit.

:::tip
Žádný placený klíč není nutný pro spuštění: použijte bezplatné modely OpenRouter, jiné poskytovatele s bezplatnou úrovní, nebo místního server kompatibilního s OpenAI, jako je [Ollama](https://ollama.com), LM Studio, nebo llama.cpp (například `translategemma:4b`).
:::

## O aplikaci

Název aplikace, verze, datum sestavení, licence, oznámení třetích stran a odkaz na repozitář.
