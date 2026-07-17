---
title: Nastavenia
description: >-
  Stručný prehľad pre Všeobecné, Modely, Jazyky, Glosár, Náklady, Transformácia,
  Používatelia, API a O aplikácii.
translation_last_updated: '2026-07-17T21:14:49.250Z'
source_file_mtime: '2026-07-17T14:37:21.849Z'
source_file_hash: 492e5fd37f4a6b282502282d4f2728047a0d09ae8c30334b3c8388a5ce6e9f68
translation_language: sk
source_file_path: src/content/docs/docs/settings.md
translation_models:
  - google/gemini-2.5-flash
---



Otvorte **Nastavenia** z bočného panela a prispôsobte si správanie aplikácie.

| Karta | Desktop | Web (správca) | Web (používateľ) | Poznámky |
| --- | :---: | :---: | :---: | --- |
| Všeobecné nastavenia | áno | áno | áno | Zahŕňa **AI skúsenosti** (Jednoduché / Pokročilé) |
| Modely | áno | áno | áno | Len ak sú **AI skúsenosti** **Pokročilé** |
| Jazyky | áno | áno | áno | |
| Sledovanie nákladov | áno | áno | — | |
| Transformácia | áno | áno | áno | Hromadný import/export výziev |
| Glosár | áno | áno | áno | Páry výrazov pre preklad |
| Používatelia | — | áno | — | |
| Konfigurácia API | áno | áno | — | |
| O aplikácii | áno | áno | áno | |

V režime **Jednoduché** vyberte AI pomocou predvolieb na paneli nástrojov a **Poskytovateľa** vo Všeobecných nastaveniach; karta **Modely** je skrytá.

:::notePoznámka
Vo webovej verzii má každý používateľ vlastnú konfiguráciu (AI skúsenosti, poskytovateľ, modely/predvoľby, jazyky, možnosti, výzvy). Zmeny neovplyvňujú ostatných používateľov.
:::

## Všeobecné nastavenia

**AI skúsenosti**

- **Jednoduché** (predvolené): vyberte **poskytovateľa**. Poskytovatelia cloudu používajú predvoľby panela nástrojov (**Bezplatné (OpenRouter)**, **Štandardné**, **Pokročilé**, **Technické**). **Lokálny LLM** namiesto toho uvádza nainštalované lokálne modely. **Obnoviť katalóg predvolieb** načíta najnovší zoznam predvolieb z úložiska projektu.
- **Pokročilé**: vyberte modely na paneli nástrojov; spravujte zoznam v časti [Modely](#models).

**Vzhľad** — Téma; **Zobraziť informácie o nákladoch pri akciách**; **Počet desatinných miest nákladov**; okraj okolo aplikácie len pre web; **Rodina písma** a **Veľkosť**.

**Správanie** — **Správanie pre ENTER**; **Automatické spustenie pri vložení**; **Automatické kopírovanie výsledku do schránky**; **Preklad v reálnom čase počas písania**; **Časový limit (ms)**.

**História**

- **Zachovať históriu vykonávania** — uložiť vstup/výstup pre zobrazenie [História](/docs/history/). Vypnutie vyžaduje potvrdenie a môže odstrániť uložený text. Ak je označené ako *zakázané administrátorom*, je nastavené `HISTORY_DISABLED` — pozrite si [Konfigurácia](/docs/configuration/#privacy-mode).
- **Vymazať údaje histórie** — odstrániť uložený text podľa veku alebo vymazať všetko. **Neodstraňuje** celkové náklady (na to použite Sledovanie nákladov).

**Záloha konfigurácie** (správcovia desktopu a webu)

- Voliteľné **Zahrnúť údaje o používaní do zálohy**
- **Zálohovať konfiguráciu** — ZIP s konfiguráciou, stavom, používateľmi, preferenciami, výzvami a voliteľnými údajmi o používaní
- **Obnoviť zo zálohy** — potvrdzovací dialóg s možnosťami obnovenia a/alebo vymazania údajov o používaní

Zálohy sa môžu presúvať medzi desktopom a webom; obnovenie zálohy desktopu na webe aplikuje údaje na používateľa administrátora.

## Modely

Dostupné iba v režime **Pokročilé**.

![Karta Nastavenia Modely](/images/screenshots/sk/settings-general.png)

- **Dostupné modely** (vľavo) a **Vybrané modely** (vpravo)
- Vyhľadávanie, čipy **Poskytovateľ**, **Len bezplatné**, **Obnoviť**, Rozbaliť/Zbaliť všetko
- ID modelov používajú predponu poskytovateľa (`openrouter/…`, `openai/…`, `local/…`, …)

:::caution
Nepoužívajte OpenRouter **Body Builder** (`openrouter/bodybuilder`) pre Preklad, Prepis alebo Transformáciu — vracia JSON požiadavky, nie hotový text.
:::

Pridať pomocou **Pridať**; odstrániť pomocou **X**. **Zrušiť výber všetkých** ponechá požadovaný bezplatný model.

## Jazyky

- **Najpoužívanejšie jazyky** — pripnuté blízko hornej časti zoznamov jazykov v Preklade a Transformácii
- **Vlastný jazyk** — pridajte jazyk, ktorý chýba v vstavanom zozname

## Sledovanie nákladov

- **Celkové náklady**, **Kopírovať hodnotu**, **Resetovať náklady**
- **Synchronizovať s používaním kľúča API** — zosúladiť s používaním účtu OpenRouter (iba OpenRouter)
- **Používanie kľúča API** — podrobnosti OpenRouter, ak sú k dispozícii
- **Vymazať údaje o nákladoch** — všetky údaje alebo záznamy staršie ako dátum

OpenRouter zobrazuje skutočné fakturované náklady, ak je to relevantné; iní poskytovatelia používajú odhady z cien OpenRouter. Odhady nie sú faktúry.

:::caution
Vymazanie údajov o nákladoch sa nedá vrátiť späť. Ak potrebujete zálohu, najprv exportujte cez Históriu alebo Panel → Všetky volania. Súvisiaca história vstupov/výstupov pre tieto volania API sa tiež odstráni.
:::

## Transformovať

Hromadná správa výziev: kontrola, odstránenie, import, export a načítanie vzorových výziev.

## Slovník

Spravujte páry výrazov aplikované počas [prekladu](/docs/translate/#use-the-glossary). Každý výraz má zdrojový/cieľový jazyk a zdrojový/cieľový text.

- Pridajte pomocou spodného riadku a **+**
- Filtrujte podľa jazykov alebo textu
- Import/export CSV alebo XLSX; stiahnite prázdne šablóny

Desktop ukladá glosár lokálne; web ho ukladá pre každého používateľa.

## Používatelia

Len web (správcovia): pridávanie používateľov, aktualizácia podrobností, resetovanie hesiel, mazanie účtov.

## Konfigurácia API

Nakonfigurujte iba poskytovateľov, ktorých používate: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Lokálny LLM** (základná URL pre Ollama, LM Studio, llama.cpp alebo podobné) a voliteľný vlastný poskytovateľ kompatibilný s OpenAI.

**Web (správca):** kľúče pochádzajú z premenných prostredia – táto stránka ukazuje, ktoré sú nastavené a umožňuje vám ich **otestovať**. Po zmene premenných prostredia reštartujte. Pozrite si [Konfiguráciu](/docs/configuration/).

**Desktop:** zadajte kľúče (alebo URL lokálneho LLM) a **Uložiť** / **Upraviť** / **Testovať**. Kľúče sú uložené šifrovane; aktuálnu hodnotu nemôžete zobraziť, iba ju nahradiť.

:::tip
Na začiatok nie je potrebný platený kľúč: použite bezplatné modely OpenRouter, iných poskytovateľov s bezplatnou úrovňou alebo lokálny server kompatibilný s OpenAI, ako sú [Ollama](https://ollama.com), LM Studio alebo llama.cpp (napr. `translategemma:4b`).
:::

## O aplikácii

Názov aplikácie, verzia, dátum zostavenia, licencia, oznámenia tretích strán a odkaz na úložisko.
