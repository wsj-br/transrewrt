---
title: Nastavenia
description: >-
  Stručný prehľad pre Všeobecné, Modely, Jazyky, Glosár, Náklady, Transformácia,
  Používatelia, API a O aplikácii.
---



Otvorte **Nastavenia** z bočného panela, aby ste si prispôsobili správanie aplikácie.

| Karta | Počítač | Web (správca) | Web (používateľ) | Poznámky |
| --- | :---: | :---: | :---: | --- |
| Všeobecné nastavenia | ✓ | ✓ | ✓ | Zahŕňa **skúsenosti s AI** (jednoduché / pokročilé) |
| Modely | ✓ | ✓ | ✓ | Len ak sú **skúsenosti s AI** **pokročilé** |
| Jazyky | ✓ | ✓ | ✓ | |
| Sledovanie nákladov | ✓ | ✓ | — | |
| Transformovať | ✓ | ✓ | ✓ | Hromadný import/export výziev |
| Glosár | ✓ | ✓ | ✓ | Páry výrazov pre preklad |
| Používatelia | — | ✓ | — | |
| Konfigurácia API | ✓ | ✓ | — | |
| O aplikácii | ✓ | ✓ | ✓ | |

V režime **Jednoduché** vyberte AI pomocou predvolieb na paneli nástrojov a **Poskytovateľa** vo Všeobecných nastaveniach; karta **Modely** je skrytá.

:::note
Vo webovej verzii má každý používateľ vlastnú konfiguráciu (AI skúsenosti, poskytovateľ, modely/predvoľby, jazyky, možnosti, výzvy). Zmeny neovplyvňujú ostatných používateľov.
:::

## Všeobecné nastavenia

![Karta Nastavenia Všeobecné nastavenia](/images/screenshots/sk/settings-general.png)

**AI skúsenosti**

- **Jednoduché** (predvolené): vyberte **Poskytovateľa**. Poskytovatelia cloudu používajú predvoľby panela nástrojov. **Lokálne LLM** namiesto toho uvádza nainštalované lokálne modely. **Obnoviť katalóg predvolieb** načíta najnovší zoznam predvolieb z úložiska projektu.
  - **Bezplatné (OpenRouter)** — bezplatná možnosť smerovaná na dostupné bezplatné modely; kvalita a dostupnosť sa môžu líšiť
  - **Štandardné** — ľahké a nákladovo efektívne; najlepšie pre krátke texty, rýchle návrhy a vysokobjemové použitie
  - **Pokročilé** — vysoko presný model pre komplexný alebo nuansovaný obsah, za vyššiu cenu
  - **Technické** — vyladené pre kód, API, dokumentáciu pre vývojárov a štruktúrovaný obsah; zachováva formátovanie a terminológiu
- **Pokročilé**: vyberte modely na paneli nástrojov; spravujte zoznam pod [Modely](#models).

Môžete tiež prepínať Jednoduché ↔ Pokročilé z ponuky predvolieb/modelov panela nástrojov (**Prepnúť do režimu Jednoduché/Pokročilé**, nad Otvoriť nastavenia).

**Vzhľad** — Téma; **Zobraziť informácie o nákladoch pri akciách**; **Počet desatinných miest pre náklady**; okraj okolo aplikácie len pre web; **Rodina písma** a **Veľkosť**.

**Správanie** — **Správanie pre ENTER**; **Automatické spustenie pri vložení**; **Automatické kopírovanie výsledku do schránky**; **Preklad v reálnom čase počas písania**; **Časový limit (ms)**.

**História**

- **Uchovávať históriu vykonávania** — ukladá vstup/výstup pre zobrazenie [História](/docs/history/). Vypnutie vyžaduje potvrdenie a môže odstrániť uložený text. Ak je označené ako *zakázané administrátorom*, je nastavené `HISTORY_DISABLED` — pozrite si [Konfigurácia](/docs/configuration/#privacy-mode).
- **Vymazať údaje histórie** — odstráni uložený text podľa veku alebo vymaže všetko. **Neodstraňuje** celkové náklady (na to použite Sledovanie nákladov).

**Záloha konfigurácie** (administrátori pre desktop a web)

- Voliteľné **Zahrnúť údaje o používaní do zálohy**
- **Zálohovať konfiguráciu** — ZIP s konfiguráciou, stavom, používateľmi, preferenciami, výzvami a voliteľnými údajmi o používaní
- **Obnoviť zo zálohy** — potvrdzovací dialóg s možnosťami obnovenia a/alebo vymazania údajov o používaní

Zálohy sa môžu presúvať medzi desktopom a webom; obnovenie zálohy z desktopu na webe aplikuje údaje na administrátorského používateľa.

## Modely

Dostupné len v režime **Pokročilé**.

- **Dostupné modely** (vľavo) a **Vybrané modely** (vpravo)
- Vyhľadávanie, čipy **Poskytovateľ**, **Len zadarmo**, **Obnoviť**, Rozbaliť/Zbaliť všetko
- ID modelov používajú predponu poskytovateľa (`openrouter/…`, `openai/…`, `local/…`, …)

:::tip
Nepoužívajte OpenRouter **Body Builder** (`openrouter/bodybuilder`) pre funkcie Preložiť, Prepísať alebo Transformovať – vracia JSON dátové časti požiadaviek, nie hotový text.
:::

Pridajte pomocou **Pridať**; odstráňte pomocou **X**. Bezplatný model OpenRouter je voliteľný — vybrané modely môžu byť prázdne. Odstránenie posledného modelu z panela nástrojov otvorí **Nastavenia → Modely**. Ak sa aktuálny model stane nedostupným, aplikácia namiesto vynútenia bezplatného modelu vyberie ďalší model v zozname.

## Jazyky

- **Najpoužívanejšie jazyky** — pripnuté blízko hornej časti zoznamov jazykov v Preklade a Transformácii
- **Vlastný jazyk** — pridajte jazyk, ktorý chýba vo vstavanom zozname

## Sledovanie nákladov

- **Celkové náklady**, **Kopírovať hodnotu**, **Resetovať náklady**
- **Synchronizovať s používaním kľúča API** — zosúladiť s používaním účtu OpenRouter (len OpenRouter)
- **Používanie kľúča API** — podrobnosti OpenRouter, ak sú k dispozícii
- **Vymazať údaje o nákladoch** — všetky údaje alebo záznamy staršie ako určitý dátum

OpenRouter zobrazuje skutočné fakturované náklady, ak je to relevantné; ostatní poskytovatelia používajú odhady z cenníka OpenRouter. Odhady nie sú faktúry.

:::caution
Vymazanie údajov o nákladoch sa nedá vrátiť späť. Ak potrebujete zálohu, najprv exportujte cez Históriu alebo Panel → Všetky volania. Súvisiaca história vstupov/výstupov pre tieto volania API sa tiež odstráni.
:::

## Transformácia

Hromadná správa výziev: kontrola, odstránenie, import, export a načítanie vzorových výziev.

## Glosár

Spravujte páry výrazov použitých počas [prekladu](/docs/translate/#use-the-glossary). Každý výraz má zdrojový/cieľový jazyk a zdrojový/cieľový text.

- Pridajte pomocou spodného riadku a **+**
- Filtrujte podľa jazykov alebo textu
- Import/export CSV alebo XLSX; stiahnite prázdne šablóny

Desktop ukladá glosár lokálne; web ho ukladá pre každého používateľa.

## Používatelia

Len web (správcovia):

- Pridávať používateľov, aktualizovať podrobnosti, resetovať heslá, mazať účty
- **Časový limit relácie** — ako dlho trvá prihlásenie (1 hodina až 7 dní); zmeny sa vzťahujú len na nové prihlásenia
- **Zrušiť relácie** — okamžite odhlásiť používateľa zo všetkých zariadení

Každý prihlásený používateľ (vrátane ne-správcov) si môže zmeniť svoje vlastné heslo alebo sa odhlásiť z používateľského menu v spodnej časti bočného panela.

## Konfigurácia API

Nakonfigurujte len poskytovateľov, ktorých používate: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Local LLM** (základná URL pre Ollama, LM Studio, llama.cpp alebo podobné) a voliteľný vlastný poskytovateľ kompatibilný s OpenAI.

**Web (správca):** kľúče pochádzajú z premenných prostredia — táto stránka ukazuje, ktoré sú nastavené a umožňuje vám ich **otestovať**. Po zmene premenných prostredia reštartujte. Pozrite si [Konfigurácia](/docs/configuration/).

**Desktop:** zadajte kľúče (alebo URL Local LLM) a **Uložiť** / **Upraviť** / **Testovať**. Kľúče sú uložené šifrovane; nemôžete zobraziť aktuálnu hodnotu, len ju nahradiť.

:::tip
Na začiatok nie je potrebný platený kľúč: použite bezplatné modely OpenRouter, iných poskytovateľov s bezplatnou úrovňou alebo lokálny server kompatibilný s OpenAI, ako napríklad [Ollama](https://ollama.com), LM Studio alebo llama.cpp (napr. `translategemma:4b`).
:::

## O aplikácii

Názov aplikácie, verzia, dátum zostavenia, licencia, oznámenia tretích strán a odkaz na úložisko.
