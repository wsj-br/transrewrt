---
title: Beállítások
description: >-
  Tömör összefoglaló az Általános, Modellek, Nyelvek, Szószedet, Költség,
  Átalakítás, Felhasználók, API és Névjegy beállításokról.
translation_last_updated: '2026-07-17T14:58:59.739Z'
source_file_mtime: '2026-07-17T14:37:21.849Z'
source_file_hash: 492e5fd37f4a6b282502282d4f2728047a0d09ae8c30334b3c8388a5ce6e9f68
translation_language: hu
source_file_path: src/content/docs/docs/settings.md
translation_models:
  - google/gemini-2.5-flash
---



Nyissa meg a **Beállítások** menüt az oldalsávból az alkalmazás viselkedésének testreszabásához.

| Lap | Asztali | Web (admin) | Web (felhasználó) | Megjegyzések |
| --- | :---: | :---: | :---: | --- |
| Általános beállítások | igen | igen | igen | Tartalmazza az **AI élményt** (Egyszerű / Haladó) |
| Modellek | igen | igen | igen | Csak akkor, ha az **AI élmény** **Haladó** |
| Nyelvek | igen | igen | igen | |
| Költségkövetés | igen | igen | — | |
| Átalakítás | igen | igen | igen | Promptok tömeges importálása/exportálása |
| Szószedet | igen | igen | igen | Fordításhoz használt kifejezéspárok |
| Felhasználók | — | igen | — | |
| API konfiguráció | igen | igen | — | |
| Névjegy | igen | igen | igen | |

**Egyszerű** módban válassza ki az AI-t az eszköztárban lévő előbeállítások és az Általános beállítások **Szolgáltató** menüpontja segítségével; a **Modellek** lap rejtve van.

:::note
A webes verzióban minden felhasználónak saját konfigurációja van (AI élmény, szolgáltató, modellek/előbeállítások, nyelvek, opciók, promptok). A változtatások nem érintik a többi felhasználót.
:::

## Általános beállítások

**AI élmény**

- **Egyszerű** (alapértelmezett): válasszon egy **szolgáltatót**. A felhőszolgáltatók eszköztár-előbeállításokat használnak (**Ingyenes (OpenRouter)**, **Standard**, **Haladó**, **Technikai**). A **Helyi LLM** ehelyett a telepített helyi modelleket listázza. A **Frissítési előbeállítások katalógusa** lekéri a legújabb előbeállítási listát a projekt adattárából.
- **Haladó**: válassza ki a modelleket az eszköztáron; kezelje a listát a [Modellek](#models) alatt.

**Megjelenés** — Téma; **Költséginformáció megjelenítése a műveleteknél**; **Költségtörtszámjegyek**; csak weben elérhető margó az alkalmazás körül; **Betűtípus** és **Méret**.

**Viselkedés** — **Viselkedés az ENTER billentyűre**; **Automatikus végrehajtás beillesztéskor**; **Eredmény automatikus másolása vágólapra**; **Valós idejű fordítás gépelés közben**; **Időtúllépés (ms)**.

**Előzmények**

- **Végrehajtási előzmények megőrzése** — bemenet/kimenet tárolása az [Előzmények](/docs/history/) nézethez. A kikapcsolás megerősítést kér, és eltávolíthatja a tárolt szöveget. Ha *rendszergazda által letiltva* felirattal van ellátva, az `HISTORY_DISABLED` be van állítva – lásd: [Konfiguráció](/docs/configuration/#privacy-mode).
- **Előzményadatok törlése** — a tárolt szöveg eltávolítása kor szerint vagy az összes törlése. **Nem** törli a költségösszegeket (ehhez használja a Költségkövetést).

**Konfiguráció biztonsági mentése** (asztali és webes rendszergazdák)

- Opcionális **Használati adatok felvétele a biztonsági mentésbe**
- **Konfiguráció biztonsági mentése** — ZIP fájl konfigurációval, állapottal, felhasználókkal, beállításokkal, promptokkal és opcionális használati adatokkal
- **Visszaállítás biztonsági mentésből** — megerősítő párbeszédpanel a visszaállítási és/vagy használati adatok törlésének opcióival

A biztonsági mentések mozgathatók asztali és webes környezet között; az asztali biztonsági mentés visszaállítása a weben az adatokat a rendszergazda felhasználóra alkalmazza.

## Modellek

Csak **Haladó** módban érhető el.

![Beállítások Modellek lap](/images/screenshots/hu/settings-general.png)

- **Elérhető modellek** (balra) és **Kiválasztott modellek** (jobbra)
- Keresés, **Szolgáltató** chipek, **Csak ingyenes**, **Frissítés**, Összes kibontása/összecsukása
- A modellazonosítók szolgáltatói előtagot használnak (`openrouter/…`, `openai/…`, `local/…`, …)

:::caution
Ne használja az OpenRouter **Body Builder** (`openrouter/bodybuilder`) funkcióját fordításhoz, átíráshoz vagy átalakításhoz – JSON kérés-válaszokat ad vissza, nem kész szöveget.
:::

Hozzáadás **Hozzáadás** gombbal; eltávolítás **X** gombbal. Az **Összes kijelölés megszüntetése** megtartja a szükséges ingyenes modellt.

## Nyelvek

- **Leggyakoribb nyelvek** — a fordítási és átalakítási nyelvi listák tetején rögzítve
- **Egyéni nyelv** — adjon hozzá egy nyelvet, amely hiányzik a beépített listából

## Költségkövetés

- **Összköltség**, **Érték másolása**, **Költség visszaállítása**
- **Szinkronizálás API kulcs használattal** — igazítás az OpenRouter fiókhasználathoz (csak OpenRouter)
- **API kulcs használat** — OpenRouter részletek, ha elérhetőek
- **Költségadatok törlése** — minden adat vagy egy adott dátumnál régebbi bejegyzések

Az OpenRouter a ténylegesen számlázott költséget mutatja, ha alkalmazható; más szolgáltatók az OpenRouter árazásából származó becsléseket használnak. A becslések nem számlák.

:::caution
A költségadatok törlése nem vonható vissza. Ha szüksége van biztonsági mentésre, először exportálja az Előzmények vagy az Irányítópult → Összes hívás menüpontból. Az API-hívásokhoz kapcsolódó bemeneti/kimeneti előzmények is törlődnek.
:::

## Átalakítás

Tömeges promptkezelés: áttekintés, törlés, importálás, exportálás és mintapromptok betöltése.

## Szójegyzék

A [fordítás](/docs/translate/#use-the-glossary) során alkalmazott kifejezéspárok kezelése. Minden kifejezésnek van forrás/cél nyelve és forrás/cél szövege.

- Hozzáadás az alsó soron keresztül és a **+** jellel
- Szűrés nyelvek vagy szöveg alapján
- CSV vagy XLSX importálása/exportálása; üres sablonok letöltése

Az asztali alkalmazás helyben tárolja a szószedetet; a webes alkalmazás felhasználónként tárolja.

## Felhasználók

Csak webes (adminok): felhasználók hozzáadása, adatok frissítése, jelszavak visszaállítása, fiókok törlése.

## API konfiguráció

Csak azokat a szolgáltatókat konfigurálja, amelyeket használ: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Helyi LLM** (alap URL az Ollama, LM Studio, llama.cpp vagy hasonló számára), és egy opcionális egyéni OpenAI-kompatibilis szolgáltató.

**Web (admin):** a kulcsok környezeti változókból származnak – ez az oldal megmutatja, melyek vannak beállítva, és lehetővé teszi a **Tesztelést**. A környezeti változók módosítása után indítsa újra. Lásd: [Konfiguráció](/docs/configuration/).

**Asztali:** adja meg a kulcsokat (vagy a Helyi LLM URL-t), majd **Mentés** / **Szerkesztés** / **Tesztelés**. A kulcsok titkosítva tárolódnak; az aktuális értéket nem tekintheti meg, csak lecserélheti.

:::tip
Nincs szükség fizetős kulcsra az induláshoz: használjon ingyenes OpenRouter modelleket, más ingyenes szintű szolgáltatókat, vagy egy helyi OpenAI-kompatibilis szervert, mint például az [Ollama](https://ollama.com), az LM Studio vagy a llama.cpp (pl. `translategemma:4b`).
:::

## Névjegy

Alkalmazás neve, verziója, build dátuma, licenc, harmadik féltől származó értesítések és adattár linkje.
