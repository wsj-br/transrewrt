---
title: Nastavení
description: >-
  Stručný přehled pro Obecné, Modely, Jazyky, Slovník, Náklady, Transformace,
  Uživatelé, API a O aplikaci.
---



Otevřete **Nastavení** z postranního panelu a přizpůsobte si chování aplikace.

| Karta | Desktop | Web (administrátor) | Web (uživatel) | Poznámky |
| --- | :---: | :---: | :---: | --- |
| Obecná nastavení | ano | ano | ano | Zahrnuje **Zkušenosti s AI** (Snadné / Pokročilé) |
| Modely | ano | ano | ano | Pouze když je **Zkušenosti s AI** **Pokročilé** |
| Jazyky | ano | ano | ano | |
| Sledování nákladů | ano | ano | — | |
| Transformace | ano | ano | ano | Hromadný import/export promptů |
| Slovník | ano | ano | ano | Páry termínů pro překlad |
| Uživatelé | — | ano | — | |
| Konfigurace API | ano | ano | — | |
| O aplikaci | ano | ano | ano | |

V režimu **Snadné** vyberte AI pomocí předvoleb na panelu nástrojů a **Poskytovatele** v Obecných nastaveních; karta **Modely** je skrytá.

:::note
Ve webové verzi má každý uživatel svou vlastní konfiguraci (zkušenosti s AI, poskytovatel, modely/předvolby, jazyky, možnosti, prompty). Změny neovlivňují ostatní uživatele.
:::

## Obecná nastavení

![Karta Nastavení Obecná nastavení](/images/screenshots/cs/settings-general.png)

**Zkušenosti s AI**

- **Snadné** (výchozí): vyberte **Poskytovatele**. Cloudoví poskytovatelé používají předvolby na panelu nástrojů. **Lokální LLM** místo toho vypisuje nainstalované lokální modely. **Obnovit katalog předvoleb** načte nejnovější seznam předvoleb z repozitáře projektu.
  - **Zdarma (OpenRouter)** — bezplatná možnost směrovaná na dostupné bezplatné modely; kvalita a dostupnost se mohou lišit
  - **Standardní** — lehký a nákladově efektivní; nejlepší pro krátké texty, rychlé návrhy a vysoký objem použití
  - **Pokročilé** — vysoce přesný model pro komplexní nebo nuancovaný obsah, za vyšší cenu
  - **Technické** — vyladěno pro kód, API, vývojářskou dokumentaci a strukturovaný obsah; zachovává formátování a terminologii
- **Pokročilé**: vyberte modely na panelu nástrojů; spravujte seznam pod [Modely](#models).

Můžete také přepínat Snadné ↔ Pokročilé z nabídky předvoleb/modelů na panelu nástrojů (**Přepnout do režimu Snadné/Pokročilé**, nad Otevřít nastavení).

**Vzhled** — motiv; **Zobrazit informace o nákladech u akcí**; **Počet desetinných míst u nákladů**; okraj kolem aplikace pouze na webu; **Rodina písma** a **Velikost**.

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

- **Dostupné modely** (vlevo) a **Vybrané modely** (vpravo)
- Hledat, čipy **Poskytovatel**, **Pouze zdarma**, **Obnovit**, Rozbalit/Sbalit vše
- ID modelů používají předponu poskytovatele (`openrouter/…`, `openai/…`, `local/…`, …)

:::tip
Nepoužívejte OpenRouter **Body Builder** (`openrouter/bodybuilder`) pro překlad, přepis nebo transformaci – vrací datové části požadavků JSON, nikoli hotový text.
:::

Přidat pomocí **Přidat**; odebrat pomocí **X**. Bezplatný model OpenRouter je volitelný — vybrané modely mohou být prázdné. Odebrání posledního modelu z panelu nástrojů otevře **Nastavení → Modely**. Pokud se aktuální model stane nedostupným, aplikace vybere další model v seznamu namísto vynucení bezplatného modelu.

## Jazyky

- **Nejpoužívanější jazyky** — připnuté blízko horní části seznamů jazyků v Překladu a Transformaci
- **Vlastní jazyk** — přidat jazyk chybějící v vestavěném seznamu

## Sledování nákladů

- **Celkové náklady**, **Kopírovat hodnotu**, **Resetovat náklady**
- **Synchronizovat s využitím API klíče** — sladit s využitím účtu OpenRouter (pouze OpenRouter)
- **Využití API klíče** — podrobnosti OpenRouter, pokud jsou k dispozici
- **Smazat data o nákladech** — všechna data nebo záznamy starší než určité datum

OpenRouter zobrazuje skutečné účtované náklady, pokud je to relevantní; ostatní poskytovatelé používají odhady z cen OpenRouter. Odhady nejsou faktury.

:::caution
Smazání dat o nákladech nelze vrátit zpět. Nejprve exportujte přes Historii nebo Dashboard → Všechna volání, pokud potřebujete zálohu. Související historie vstupu/výstupu pro tato volání API je také odstraněna.
:::

## Transformace

Hromadná správa výzev: kontrola, smazání, import, export a načtení ukázkových výzev.

## Glosář

Spravujte páry termínů aplikované během [překladu](/docs/translate/#use-the-glossary). Každý termín má zdrojový/cílový jazyk a zdrojový/cílový text.

- Přidat pomocí spodního řádku a **+**
- Filtrovat podle jazyků nebo textu
- Import/export CSV nebo XLSX; stáhnout prázdné šablony

Desktop ukládá glosář lokálně; web ho ukládá pro každého uživatele.

## Uživatelé

Pouze web (administrátoři):

- Přidávat uživatele, aktualizovat údaje, resetovat hesla, mazat účty
- **Časový limit relace** — jak dlouho trvá přihlášení (1 hodina až 7 dní); změny se vztahují pouze na nová přihlášení
- **Zrušit relace** — okamžitě odhlásit uživatele ze všech zařízení

Každý přihlášený uživatel (včetně neadministrátorů) si může změnit své vlastní heslo nebo se odhlásit z uživatelského menu ve spodní části postranního panelu.

## Konfigurace API

Konfigurujte pouze poskytovatele, které používáte: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Local LLM** (základní URL pro Ollama, LM Studio, llama.cpp nebo podobné) a volitelného vlastního poskytovatele kompatibilního s OpenAI.

**Web (administrátor):** klíče pocházejí z proměnných prostředí – tato stránka ukazuje, které jsou nastaveny, a umožňuje vám **Testovat**. Po změně proměnných prostředí restartujte. Viz [Konfigurace](/docs/configuration/).

**Desktop:** zadejte klíče (nebo URL Local LLM) a **Uložit** / **Upravit** / **Testovat**. Klíče jsou uloženy šifrovaně; aktuální hodnotu nelze zobrazit, pouze ji nahradit.

:::tip
K zahájení není potřeba žádný placený klíč: použijte bezplatné modely OpenRouter, jiné bezplatné poskytovatele nebo lokální server kompatibilní s OpenAI, jako je [Ollama](https://ollama.com), LM Studio nebo llama.cpp (např. `translategemma:4b`).
:::

## O aplikaci

Název aplikace, verze, datum sestavení, licence, oznámení třetích stran a odkaz na úložiště.
