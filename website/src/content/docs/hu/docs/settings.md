---
title: Beállítások
description: >-
  Tömör összefoglaló az Általános, Modellek, Nyelvek, Szószedet, Költség,
  Átalakítás, Felhasználók, API és Névjegy beállításokról.
---



Nyissa meg a **Beállítások** menüt az oldalsávon, hogy testre szabhassa az alkalmazás működését.

| Lap | Asztali | Web (admin) | Web (felhasználó) | Megjegyzések |
| --- | :---: | :---: | :---: | --- |
| Általános beállítások | ✓ | ✓ | ✓ | Tartalmazza az **AI élményt** (Egyszerű / Haladó) |
| Modellek | ✓ | ✓ | ✓ | Csak akkor, ha az **AI élmény** **Haladó** |
| Nyelvek | ✓ | ✓ | ✓ | |
| Költségkövetés | ✓ | ✓ | — | |
| Átalakítás | ✓ | ✓ | ✓ | Promptok tömeges importálása/exportálása |
| Szószedet | ✓ | ✓ | ✓ | Fordítási kifejezéspárok |
| Felhasználók | — | ✓ | — | |
| API konfiguráció | ✓ | ✓ | — | |
| Névjegy | ✓ | ✓ | ✓ | |

**Egyszerű** módban válassza ki az AI-t az eszköztárban lévő előbeállítások és az Általános beállításokban lévő **Szolgáltató** segítségével; a **Modellek** lap rejtve van.

:::note
A webes verzióban minden felhasználónak saját konfigurációja van (AI élmény, szolgáltató, modellek/előbeállítások, nyelvek, opciók, promptok). A változtatások nem érintik a többi felhasználót.
:::

## Általános beállítások

![Beállítások Általános beállítások lap](/images/screenshots/hu/settings-general.png)

**AI élmény**

- **Egyszerű** (alapértelmezett): válasszon egy **Szolgáltatót**. A felhőszolgáltatók az eszköztár előbeállításait használják. A **Helyi LLM** ehelyett a telepített helyi modelleket listázza. Az **Előbeállítások katalógusának frissítése** lekéri a legújabb előbeállítási listát a projekt adattárából.
  - **Ingyenes (OpenRouter)** — ingyenes opció, amely elérhető ingyenes modellekhez irányít; a minőség és az elérhetőség változhat
  - **Standard** — könnyű és költséghatékony; a legjobb rövid szövegekhez, gyors vázlatokhoz és nagy volumenű használathoz
  - **Haladó** — nagy pontosságú modell komplex vagy árnyalt tartalomhoz, magasabb költséggel
  - **Technikai** — kódhoz, API-khoz, fejlesztői dokumentációkhoz és strukturált tartalomhoz hangolva; megőrzi a formázást és a terminológiát
- **Haladó**: válasszon modelleket az eszköztárban; kezelje a listát a [Modellek](#models) alatt.

Az Egyszerű ↔ Haladó mód között az eszköztár előbeállítás/modell menüjéből is válthat (**Váltás Egyszerű/Haladó módra**, a Beállítások megnyitása felett).

**Megjelenés** — Téma; **Költséginformációk megjelenítése a műveleteken**; **Költségtörtrészek**; csak webes margó az alkalmazás körül; **Betűtípus** és **Méret**.

**Viselkedés** — **ENTER viselkedése**; **Automatikus végrehajtás beillesztéskor**; **Eredmény automatikus másolása vágólapra**; **Valós idejű fordítás gépelés közben**; **Időtúllépés (ms)**.

**Előzmények**

- **Végrehajtási előzmények megőrzése** — bemenet/kimenet tárolása az [Előzmények](/docs/history/) nézethez. Kikapcsoláskor megerősítést kér, és eltávolíthatja a tárolt szöveget. Ha *rendszergazda által letiltva* címkével van ellátva, az `HISTORY_DISABLED` be van állítva — lásd a [Konfigurációt](/docs/configuration/#privacy-mode).
- **Előzményadatok törlése** — tárolt szöveg eltávolítása kor szerint vagy az összes törlése. **Nem** törli a teljes költségeket (ehhez használja a Költségkövetést).

**Konfiguráció biztonsági mentése** (asztali és webes rendszergazdák)

- Opcionális **Használati adatok belefoglalása a biztonsági mentésbe**
- **Konfiguráció biztonsági mentése** — ZIP fájl konfigurációval, állapottal, felhasználókkal, beállításokkal, promptokkal és opcionális használati adatokkal
- **Visszaállítás biztonsági mentésből** — megerősítő párbeszédpanel opciókkal az adatok visszaállítására és/vagy törlésére

A biztonsági mentések mozgathatók asztali és webes környezetek között; asztali biztonsági mentés visszaállítása weben az adatokat a rendszergazdai felhasználóra alkalmazza.

## Modellek

Csak **Haladó** módban érhető el.

- **Elérhető modellek** (balra) és **Kiválasztott modellek** (jobbra)
- Keresés, **Szolgáltató** chipek, **Csak ingyenes**, **Frissítés**, Összes kibontása/összecsukása
- A modellazonosítók szolgáltatói előtagot használnak (`openrouter/…`, `openai/…`, `local/…`, …)

:::tip
Ne használja az OpenRouter **Body Builder** (`openrouter/bodybuilder`) funkcióját fordításhoz, átíráshoz vagy átalakításhoz – az JSON kérés-adatcsomagokat ad vissza, nem kész szöveget.
:::

Hozzáadás a **Hozzáadás** gombbal; eltávolítás az **X** gombbal. Az OpenRouter ingyenes modellje opcionális – a kiválasztott modellek üresek is lehetnek. Az utolsó modell eltávolítása az eszköztárról megnyitja a **Beállítások → Modellek** menüt. Ha az aktuális modell elérhetetlenné válik, az alkalmazás a lista következő modelljét választja az ingyenes modell kényszerítése helyett.

## Nyelvek

- **Leggyakoribb nyelvek** — a fordítási és átalakítási nyelvi listák tetején rögzítve
- **Egyéni nyelv** — a beépített listából hiányzó nyelv hozzáadása

## Költségkövetés

- **Összköltség**, **Érték másolása**, **Költség visszaállítása**
- **Szinkronizálás API kulcs használattal** — igazítás az OpenRouter fiókhasználathoz (csak OpenRouter)
- **API kulcs használat** — OpenRouter részletek, ha elérhetőek
- **Költségadatok törlése** — minden adat vagy egy adott dátumnál régebbi bejegyzések

Az OpenRouter a ténylegesen számlázott költséget mutatja, ha alkalmazható; más szolgáltatók az OpenRouter árazásából származó becsléseket használnak. A becslések nem számlák.

:::caution
A költségadatok törlése nem vonható vissza. Ha szüksége van biztonsági mentésre, először exportálja az előzményekből vagy a műszerfalról → Összes hívásból. Az API-hívásokhoz kapcsolódó bemeneti/kimeneti előzmények is eltávolításra kerülnek.
:::

## Átalakítás

Promptok tömeges kezelése: áttekintés, törlés, importálás, exportálás és mintapromptok betöltése.

## Szószedet

A [fordítás](/docs/translate/#use-the-glossary) során alkalmazott kifejezéspárok kezelése. Minden kifejezésnek van forrás/célnyelve és forrás/célszövege.

- Hozzáadás az alsó soron és a **+** gombbal
- Szűrés nyelvek vagy szöveg alapján
- CSV vagy XLSX importálása/exportálása; üres sablonok letöltése

Az asztali alkalmazás helyben tárolja a szószedetet; a webes alkalmazás felhasználónként tárolja.

## Felhasználók

Csak web (adminok):

- Felhasználók hozzáadása, adatok frissítése, jelszavak visszaállítása, fiókok törlése
- **Munkamenet időtúllépés** — meddig tart egy bejelentkezés (1 órától 7 napig); a változások csak az új bejelentkezésekre vonatkoznak
- **Munkamenetek visszavonása** — egy felhasználó azonnali kijelentkeztetése az összes eszközről

Minden bejelentkezett felhasználó (beleértve a nem adminokat is) megváltoztathatja saját jelszavát vagy kijelentkezhet az oldalsáv alján található felhasználói menüből.

## API-konfiguráció

Csak az Ön által használt szolgáltatókat konfigurálja: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Helyi LLM** (alap URL Ollama, LM Studio, llama.cpp, vagy hasonló számára), és egy opcionális egyéni OpenAI-kompatibilis szolgáltató.

**Web (admin):** a kulcsok környezeti változókból származnak — ez az oldal megmutatja, melyek vannak beállítva, és lehetővé teszi a **Tesztelést**. Indítsa újra a környezeti változók megváltoztatása után. Lásd: [Konfiguráció](/docs/configuration/).

**Asztali alkalmazás:** írja be a kulcsokat (vagy a Helyi LLM URL-t), majd **Mentés** / **Szerkesztés** / **Tesztelés**. A kulcsok titkosítva tárolódnak; nem tekintheti meg az aktuális értéket, csak felülírhatja.

:::tip
Nincs szükség fizetős kulcsra az induláshoz: használjon ingyenes OpenRouter modelleket, más ingyenes szintű szolgáltatókat, vagy egy helyi OpenAI-kompatibilis szervert, mint például az [Ollama](https://ollama.com), LM Studio, vagy llama.cpp (pl. `translategemma:4b`).
:::

## Névjegy

Alkalmazás neve, verziója, build dátuma, licenc, harmadik féltől származó értesítések és adattár linkje.
