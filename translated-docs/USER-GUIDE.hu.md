---
translated_at: "2026-03-15T22:17:26.209Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Transrewrt Felhasználói Kézikönyv

<br />

<a id="introduction"></a>
## Bevezetés

A Transrewrt három fő módon segít a szövegekkel dolgozni:

- **Fordítás** - szöveg átalakítása egyik nyelvről a másikra.
- **Átformálás** - szöveg újraírása más stílusban, például világosabb, rövidebb vagy formálisabb.
- **Átalakítás** - szöveg feldolgozása egyéni AI utasításokkal, úgynevezett promptokkal.

<br />

Ez az útmutató bemutatja, hogyan kell használni az alkalmazást, miután az telepítve és fut. A telepítési lépésekért lásd a fő [README](../README.md) fájlt.

<br />

> ℹ️ **MEGJEGYZÉS**<br/>
> A Transrewrt asztali alkalmazásként elérhető Windows és Linux rendszerekre, és önfuttató webalkalmazásként is. Ez az útmutató az alkalmazás mindennapi használatára összpontosít. Ha valami csak egy változatra vonatkozik, az egyértelműen jelölt.

<small>**Olvasd más nyelveken:** [Angol (Egyesült Királyság)](../USER-GUIDE.md) · [Portugál (Brazília)](USER-GUIDE.pt-BR.md) · [Arab](USER-GUIDE.ar.md) · [Bengál](USER-GUIDE.bn.md) · [Katalán](USER-GUIDE.ca.md) · [Egyszerűsített kínai](USER-GUIDE.zh-CN.md) · [Hagyományos kínai](USER-GUIDE.zh-TW.md) · [Horvát](USER-GUIDE.hr.md) · [Cseh](USER-GUIDE.cs.md) · [Holland](USER-GUIDE.nl.md) · [Angol (Egyesült Államok)](USER-GUIDE.en-US.md) · [Fülöp](USER-GUIDE.tl.md) · [Francia](USER-GUIDE.fr.md) · [Német](USER-GUIDE.de.md) · [Görög](USER-GUIDE.el.md) · [Hindi](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Olasz](USER-GUIDE.it.md) · [Japán](USER-GUIDE.ja.md) · [Jáva](USER-GUIDE.jv.md) · [Koreai](USER-GUIDE.ko.md) · [Maláj](USER-GUIDE.ms.md) · [Perzsa](USER-GUIDE.fa.md) · [Lengyel](USER-GUIDE.pl.md) · [Portugál (Portugália)](USER-GUIDE.pt.md) · [Pandzsábi](USER-GUIDE.pa.md) · [Román](USER-GUIDE.ro.md) · [Orosz](USER-GUIDE.ru.md) · [Szlovák](USER-GUIDE.sk.md) · [Spanyol](USER-GUIDE.es.md) · [Szuahéli](USER-GUIDE.sw.md) · [Svéd](USER-GUIDE.sv.md) · [Telugu](USER-GUIDE.te.md) · [Thai](USER-GUIDE.th.md) · [Török](USER-GUIDE.tr.md) · [Ukrán](USER-GUIDE.uk.md) · [Vietnam](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tartalomjegyzék** 

- [Kezdés előtt](#before-you-start)
  - [Hogyan kell API kulcsot szerezni (asztali alkalmazás)](#how-to-get-an-api-key-desktop-app)
- [Első lépések](#getting-started)
- [A fő ablak részei](#main-parts-of-the-window)
  - [Oldalsáv](#sidebar)
  - [Eszköztár](#toolbar)
  - [Beviteli és kimeneti panelek](#input-and-output-panels)
- [Fordítás](#translate)
  - [Szöveg fordítása](#translate-text)
  - [Nyelvválasztás](#language-selection)
  - [Hasznos fordítási beállítások](#helpful-translation-settings)
  - [Gyorsbillentyűk](#keyboard-shortcuts)
- [Átformálás](#rewrite)
  - [Szöveg átformálása](#rewrite-text)
- [Átalakítás](#transform)
  - [Meglévő prompt futtatása](#run-an-existing-prompt)
  - [Ha még nincsenek promptok](#if-you-have-no-prompts-yet)
  - [Prompt gyors létrehozása](#create-a-prompt-quickly)
  - [Prompt szerkesztése](#edit-a-prompt)
  - [Prompt tesztelése használat előtt](#test-a-prompt-before-using-it)
  - [Mentett promptok kezelése](#manage-saved-prompts)
- [Vezérlőpult](#dashboard)
  - [Adatok szűrése](#filter-the-data)
  - [Vezérlőpult fülek](#dashboard-tabs)
  - [Adatok exportálása](#export-data)
  - [Modell adatainak törlése](#delete-stored-records-for-a-model)
- [Beállítások](#settings)
  - [Általános beállítások](#general-settings)
  - [Modellek](#models)
  - [Nyelvek](#languages)
  - [Költségek követése](#cost-tracking)
  - [Átalakítási promptok](#transform-prompts)
  - [Felhasználók](#users)
  - [API beállítás](#api-config)
  - [Névjegy](#about)
- [Gyakori problémák](#common-issues)
  - [Az alkalmazás nem fogja lefordítani, átformálni vagy átalakítani a szöveget](#the-app-will-not-translate-rewrite-or-transform-text)
  - [A modell lista üres](#the-model-list-is-empty)
  - [Az eredmény túl lassú vagy túl drága](#the-result-is-too-slow-or-too-expensive)
  - [A felület rossz nyelven van](#the-interface-is-in-the-wrong-language)
  - [A szöveg túl kicsi vagy nehéz elolvasni](#the-text-is-too-small-or-hard-to-read)
  - [Megváltoztattam egy promptot és elvesztettem a módosításokat](#i-changed-a-prompt-and-lost-the-edits)
- [Gyakori tippek](#quick-tips)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="before-you-start"></a>

## Mielőtt hozzákezd

A Transrewrt használatához hozzáférésre van szüksége az OpenRouterön keresztül elérhető AI szolgáltatáshoz.

Nem kell fizetős modellt választania, mielőtt hozzákezd. Az alkalmazás mindig tartalmaz egy beépített **ingyenes** modellt, így a szokásos használathoz ez elegendő a szövek fordításához, átírásához és átalakításához.

Egyszerűen:

- A **modell** az a mesterséges intelligencia, amely elvégzi a munkát.
- Az **API kulcs** a szolgáltatás személyes hozzáférési hitelesítő adata.

Ha **asztali alkalmazást** használ, API kulcsra lesz szüksége. Részletes lépésekért lásd alább: [How to get an API key](#how-to-get-an-api-key-desktop-app). Összefoglalva: hozzon létre egy fiókot a [OpenRouter](https://openrouter.ai) oldalon, nyissa meg a [Keys](https://openrouter.ai/keys) oldalt, hozzon létre egy új kulcsot, és illessze be a Transrewrt [**Beállítások** > **API Config**](#api-config) menüjébe.

Ha **webes verziót** használ, a szerver készítője általában beállítja, így általában nem kell saját maga beírnia API kulcsot.

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### API kulcs beszerzése (asztali alkalmazás)

Ha asztali alkalmazást használ, kövesse ezeket a lépéseket:

1. Nyissa meg a [OpenRouter](https://openrouter.ai) oldalt böngészőben.
2. Hozzon létre egy fiókot, vagy jelentkezzen be.
3. Nyissa meg a [Keys](https://openrouter.ai/keys) oldalt.
4. Kattintson a gombra új API kulcs létrehozásához.
5. Adjon nevet a kulcsnak, hogy később megismerhesse.
6. Másolja ki az új API kulcsot.
7. Térjen vissza a Transrewrt-hez, és nyissa meg a **Beállítások** > **API Config** menüpontot.
8. Illessze be a kulcsot az **OpenRouter API Key** mezőbe.
9. Kattintson a **Test API Configuration** gombra, hogy ellenőrizze, működik-e.

> ℹ️ **MEGJEGYZÉS**<br/>
> Kezdheti az OpenRouter ingyenes útvonalával, vagy bármelyik más elérhető ingyenes modellel. Sok esetben ez elegendő a Transrewrt használatba kezdéshez, fizetős modell kiválasztása nélkül.

<br /><br />

<a id="getting-started"></a>
## Első lépések

Ha először használja a Transrewrt-t, kövesse ezt a sorrendet:

1. Nyissa meg az alkalmazást.
2. Válassza ki a **Felület nyelvét** a földgömb ikonból, ha szükséges.
3. Ha **asztali alkalmazást** használ, nyissa meg a [**Beállítások** > **API Config**](#api-config) menüpontot, illessze be az OpenRouter API kulcsát, és kattintson a **Test API Configuration** gombra.
4. Nyissa meg a [**Beállítások** > **Models**](#models) menüpontot, és adjon hozzá egy vagy több modellt a **Kiválasztott modellek** listához.
5. Nyissa meg a [**Beállítások** > **Languages**](#languages) menüpontot, és válassza ki a **Fő nyelv**eket, ha azt szeretné, hogy a legtöbbször használt nyelvek legyenek elsőként.
6. Lépjen a **Fordítás** részre, és futtasson egy egyszerű fordítást, hogy ellenőrizze, minden működik.
7. Ha ez működik, próbálja ki az **Átírás** és majd az **Átalakítás** funkciókat.

Ez a sorrend fontos. Megakadályozza a leggyakoribb első használati problémát: egy feladat futtatása, mielőtt az alkalmazásnak működő API kapcsolata vagy kiválasztott modellje lenne.

<br /><br />

<a id="main-parts-of-the-window"></a>
## Az ablak fő részei

Az alkalmazás három fő területre oszlik:

- A **oldalsáv** a bal oldalon.
- Az **eszköztár** felül.
- A **munkaterület** a középső részén.

<br />

<a id="sidebar"></a>
### Oldalsáv

Használja az oldalsávot az alkalmazásban való navigáláshoz:

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/hu/sidebar.png" alt="Alkalmazás oldalsáv" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Translate</strong> megnyitja a fordító munkaterületet.</li>
        <li><strong>Rewrite</strong> megnyitja az átírás munkaterületet.</li>
        <li><strong>Transform</strong> megnyitja az egyéni parancssor munkaterületet.</li>
        <li><strong>Dashboard</strong> megjeleníti a használati és költséginformációkat.</li>
        <li><strong>Settings</strong> megnyitja a beállítások panelt.</li>
        <li><strong>User</strong> megjeleníti a bejelentkezett felhasználónevét (csak webes verzió).</li>
      </ul>
      <br />
      <p>Az oldalsávot További térhöz bezárhatja az alkalmazás emblémája melletti ikonra kattintva.</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### Eszköztár

Az eszköztár enyhén változik attól függően, hogy hol jár az alkalmazásban.

- Baloldalon megjeleníti az aktuális oldal nevét.
- Jobboldalon megjeleníti a **modellválasztót** és a **Felület nyelvének** vezérlőjét.

A **modellválasztó** lehetővé teszi, hogy kiválassza, melyik AI motort használja az aktuális feladathoz.

  ![Model selector](../images/screenshots/hu/model-selector.png)

> ℹ️ **MEGJEGYZÉS**<br/>
> Egyes ingyenes modellek ideiglenesen leállhatnak, ha nem érhetők el, vagy elérték a használati korlátot. Ha ez történik, az alkalmazás automatikusan eltávolítja a modellt a listáról.

A **földgömb ikon + nyelvi kód** megváltoztatja az alkalmazás felületi nyelvét, mint például a menüket és a gombokat. **NEM** változtatja aFordítás területen használt fordítási nyelveket.

  ![Interface language selector](../images/screenshots/hu/language-selector.png)

<br />

<a id="input-and-output-panels"></a>

### Beviteli és Kimeneti panelek

A legtöbb munkaterület bal oldali **Beviteli** panelt és jobb oldali **Kimeneti** panelt használ.

A **Beviteli** panel mutatja:

- Karakterek száma
- Szavak száma
- Bekezdések száma

A **Kimeneti** panel mutathatja:

- Mennyi ideig tartott a feladat
- A feladat költsége
- A futó összes költség
- **TPS** (token másodpercenként), ami egy egyszerű sebességmérő
- Karakter-, szó- és bekezdésszám
- A használt modell

Ha a műszaki kifejezéseket érdeklik:

- **Token** egy kis szövegrész. Olyan képzelhető, mint egy szó egy része vagy egy rövid szó.
- **TPS** azt jelenti, hogy hány ilyen szövegrészt dolgozott fel a modell másodpercenként.

<br /><br />

<a id="translate"></a>
## Fordítás

Használja a **Fordítás** lehetőséget, ha szöveget szeretne egyik nyelvről másikra átalakítani.

![Fordítás munkaterület](../images/screenshots/hu/translate.png)

<br />

<a id="translate-text"></a>
### Szöveg fordítása

1. Nyissa meg a **Fordítás** lehetőséget.
2. Válasszon egy nyelvet a **Feladó** mezőben.
3. Válasszon egy nyelvet a **Címzett** mezőben.
4. Válasszon egy modellt az eszköztárban.
5. Gépeljen vagy illesszen be szöveget a **Beviteli** panelbe.
6. Kattintson a **Fordítás** gombra.
7. Olvassa az eredményt a **Kimeneti** panelen.
8. Használja a másolás gombot, ha szeretné menteni az eredményt.

<br />

<a id="language-selection"></a>
### Nyelv kiválasztása

- **Feladó** lehet egy konkrét nyelv vagy **Nyelv felismerése**.
- **Címzett** az a nyelv, amire az eredményt kéri.

A kiválasztott **Gyakori nyelvek** a lista tetején jelennek meg. Ezeket a [**Beállítások** > **Nyelvek**](#languages) menüpontban állíthatja be.

<br />

<a id="helpful-translation-settings"></a>
### Hasznos fordítással kapcsolatos beállítások

A [**Beállítások** > **Általános beállítások**](#general-settings) menüpontban módosíthatja a fordítás viselkedését:

- **Automatikus fordítás beillesztéskor** elindítja a fordítást, amint beilleszt a szöveget.
- **Eredmény automatikus másolása a vágólapra** automatikusan másolja az eredményt egy sikeres futtatás után.
- **Valós idejű fordítás (gépelés közben)** futtatja a fordítást, amíg gépel.
- **Várakozási idő (ms)** szabályozza, hogy az alkalmazás mennyi ideig vár a valós idejű fordítás futtatása előtt.

<br />

<a id="keyboard-shortcuts"></a>
### Gyorsbillentyűk

A [**Beállítások** > **Általános beállítások**](#general-settings) menüpontban az **ENTER viselkedése** szabályozza, mi történik az ENTER lenyomásakor:

- **ENTER** futtathatja a feladatot és **SHIFT+ENTER** új sorokat adhat.
- Vagy az alkalmazás megfordíthatja ezt.

Az aktuális gyorsbillentyű a **Fordítás** gombban is megjelenik.

<br /><br />

<a id="rewrite"></a>
## Átírás

Használja az **Átírás** lehetőséget, ha a szöveg kifejezésmódját szeretné javítani a fő jelentés megváltoztatása nélkül.

![Átírás munkaterület](../images/screenshots/hu/rewrite.png)

Ez hasznos:

- helyesírási és nyelvhelyes hibák javításához
- a szöveg érthetőbbé tétele
- a szöveg formálisabbá vagy informálisabbá tétele
- a szöveg lerövidítése vagy bővítése
- a szöveg technikásabbá tétele

<br />

<a id="rewrite-text"></a>
### Szöveg átírása

1. Nyissa meg az **Átírás** lehetőséget.
2. Válasszon egy **Módot**.
3. Válasszon egy modellt az eszköztárban.
4. Gépeljen vagy illesszen be szöveget a **Beviteli** panelbe.
5. Kattintson az **Átírás** gombra.
6. Vizsgálja át az eredményt a **Kimeneti** panelen.

Az [**Fordítás**](#keyboard-shortcuts) részben leírt ENTER viselkedés itt is érvényes.

<br /><br />

<a id="transform"></a>
## Átalakítás

Használja az **Átalakítás** lehetőséget, ha szeretné, hogy az AI egyéni utasítások szerint végezzen munkát.

![Átalakítás munkaterület](../images/screenshots/hu/transform.png)

Ez az alkalmazás legrugalmasabb része. Olyan feladatokra használható, mint:

- jegyzetek összefoglalása
- vázlatos szöveg átalakítása finomított e-mailté
- kulcspontok kinyerése
- szöveg átalakítása egy adott formátumba

<br />

<a id="run-an-existing-prompt"></a>
### Új parancs futtatása

1. Nyissa meg az **Átalakítás** lehetőséget.
2. Válasszon egy parancsot a parancslistából.
3. Ha egy **Célnyelv** mező jelenik meg, válasszon nyelvet, ha szeretné.
4. Gépeljen vagy illesszen be szöveget a **Beviteli** panelbe.
5. Kattintson az **Átalakítás** gombra.
6. Olvassa az eredményt a **Kimeneti** panelen.

<br />

<a id="if-you-have-no-prompts-yet"></a>
### Ha még nincsenek parancsai

Ha a parancslistája üres, kattintson a **Minta parancsok betöltése** gombra. Ez hozzáadja a beépített példákat, hogy gyorsan elkezdhesse.

> ℹ️ **MEGJEGYZÉS**<br/>
> A minta parancsok angolul érhetők el. Betöltésük után szerkesztheti egy parancsot és használhatja a **Parancs fordítása** lehetőséget, ha a parancsszöveget egy másik nyelvre szeretné adaptálni.

<br />

<a id="create-a-prompt-quickly"></a>

### Prompt gyors létrehozása

A prompt leggyorsabb létrehozási módja:

1. Kattints az **Új prompt** gombra.
2. Kattints a **Prompt generálása** gombra.
3. Írd le, hogy mire szeretnéd, hogy a prompt megfeleljen.
4. Válassz modellt.
5. Hagyd, hogy az alkalmazás egy vázlatot készítsen.
6. Nézd át a vázlatot és kattints a **Mentés** gombra.

![Prompt generálása](../images/screenshots/hu/transform-generate.png)


<br />

### Prompt szerkesztése

Amikor létrehozol vagy szerkesztesz egy promptot, a szerkesztő a bal oldalon jelenik meg, és a teszt terület a jobb oldalon.

![Transzformálási prompt szerkesztő](../images/screenshots/hu/transform-prompt-edit.png)

A Fő mezők:

- **Prompt neve**: a prompt listában megjelenő név.
- **Prompt utasítások (opcionális)**: egy rövid tipp, ami megjelenik a felhasználónak a prompt futtatásakor.
- **Modell szerep**: az AI-hoz rendelt általános szerep, például 'Te egy segítő asszisztens vagy.'
- **Modell utasítások (soronként egy)**: a specifikus szabályok, amiket szeretnél, hogy az AI kövessen.
- **Kimenet leírása**: egy rövid szó, ami leírja az eredményt, például 'összegzés' vagy 'átírás'.
- **Hőmérséklet (0.0 → 1.0)**: egy kreativitás csúszka.
- **Kérdezd meg a célnyelvet**: hozzáad egy célnyelv választót, amikor a promptot futtatod.

Ha a **Hőmérséklet** technikai fogalom új neked, gondold így:

- Egy **alacsonyabb** hőmérséklet stabilabb, megjósolhatóbb eredményeket ad.
- Egy **magasabb** hőmérséklet több változatosságot és kreativitást ad.

Használhatod továbbá:

- **`Generate prompt`** egy új vázlat létrehozásához egy egyszerű leírásból.
- **`Improve prompt`** egy meglévő prompt finomításához.
- **`Translate prompt`** a prompt mezőinek lefordításához.

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Kattints a **`Save`** gombra, mielőtt a **`Back to Run`** gombra kattintanál. Ha mentés nélkül visszatérsz, a változtatások elvesznek.

<br />

<a id="test-a-prompt-before-using-it"></a>
### Prompt tesztelése használat előtt

A jobb oldali teszt panel lehetővé teszi, hogy kipróbáld a promptot minta szöveggel, mielőtt napi munkában használnád.

Ez hasznos, amikor:

- új promptot építesz
- két prompt verziót hasonlítsz össze
- ellenőrizni szeretnéd a hangvételt, a hosszt vagy a kimeneti formátumot

<br />

<a id="manage-saved-prompts"></a>
### Mentett promptok kezelése

A mentett promptok egy helyen való kezeléséhez nyisd meg a [**Beállítások** > **Transzformálási promptok**](#transform-prompts) lehetőséget.

Ott a következőket teheted:

- listázni és törölni a promptjaidat
- exportálni a promptokat **JSON**, **CSV** vagy **XLSX** formátumban
- importálni promptokat egy fájlból

<br /><br />

## Vezérlőpult

Használd a **Vezérlőpult**-ot, hogy lásd, mennyire használod az alkalmazást és mennyibe kerül.

![Vezérlőpult összefoglaló](../images/screenshots/hu/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### Adatok szűrése

Használd a felső szűrőgombokat az időtartomány megváltoztatásához.

![Vezérlőpult szűrők](../images/screenshots/hu/dashboard-filter.png)

> ℹ️ **MEGJEGYZÉS**<br/>
> A web verzióban a rendszergazdák láthatnak egy **Felhasználó** szűrőt is. Ez lehetővé teszi, hogy váltani tudjanak az **Összes felhasználó** és egy egyedi felhasználó között.

<br />

<a id="dashboard-tabs"></a>
### Vezérlőpult fülök

- **Összefoglaló** áttekintést ad a használatról és a költségekről.
- **Használat szerint** bontja le a tevékenységet a fordításhoz tartozó nyelv, az átírási mód és a transzformálási prompt alapján.
- **Modell szerint** megmutatja, hogy mely modelleket használtad és mennyibe kerültek.
- **Nap szerint** megmutatja a napi összegeket.
- **Összes hívás** megmutatja a teljes hívás előzményeket és lehetővé teszi az exportálásukat.

<br />

<a id="export-data"></a>
### Adatok exportálása

A vezérlőpult táblázatok adatokat exportálnak a következő formátumokban:

- **JSON**
- **CSV**
- **XLSX**

Ez hasznos, ha meg szeretnéd tekinteni a tevékenységet az alkalmazáson kívül vagy megosztani egy jelentést.

<br />

<a id="delete-stored-records-for-a-model"></a>
### Egy modell tárolt rekordjainak törlése

A **Modell szerint** vagy **Összes hívás** nézetben eltávolíthatod egy modell tárolt rekordjait.

> ⚠️ **FIGYELMEZTETÉS**<br/>
> A tárolt rekordok törlése nem vonható vissza. Csak akkor használd, ha biztos vagy abban, hogy már nincs szükséged arra az előzményre.

Az összes adat törléséhez vagy a rekordok koruk alapján történő eltávolításához lépj a [**Beállítások** > **Követésnyilvántartás**](#cost-tracking) menüpontra. Ott megtalálod az összes tárolt adat törlésének vagy csak egy adott dátumnál régebbi adatok törlésének opcióit.

<br /><br />

<a id="settings"></a>
## Beállítások

Nyisd meg a **Beállításokat** az oldalsávból, hogy személyre szabd az alkalmazás működését.

Az elérhető lapok változhatnak:

- **API konfiguráció** csak az asztali alkalmazásban érhető el.
- **Felhasználók** csak a web alkalmazásban és csak rendszergazdák számára érhető el.

<br />

<a id="general-settings"></a>

### Általános beállítások

Használd az **Általános beállításokat** a gépelési viselkedés és a megjelenés szabályozásához.

**Viselkedés**

- **ENTER viselkedése** kiválasztja, hogy az Enter futtatja-e a feladatot vagy új sort beszúr.
- **Automatikus fordítás beillesztéskor** elindítja a fordítást, amint beillesztesz szöveget.
- **Eredmény automatikus másolása a vágólapra** automatikusan másolja a sikeres eredményeket.
- **Valós idejű fordítás (gépelés közben)** lefordítja, amíg gépelsz.
- **Várakozási idő (ms)** beállítja a várakozási időt a valós idejű fordításra.

**Megjelenés**

- **Költség törtrészek száma** megváltoztatja, hogy a költség törtrészei hogyan jelenjenek meg.
- **Betűtípus** megváltoztatja az író betűtípust a szövegpaneleken.
- **Méret** megváltoztatja a betűméretet.
- **Csak web:** **margó mutatása az alkalmazás körül** extra teret ad a felület körül.

<br />

<a id="models"></a>
### Modellek

Használd a **Beállítások** > **Modellek** menüt a modellválasztó eszköztárban megjelenő modellek kiválasztásához.

![Beállítások Modellek lap](../images/screenshots/hu/settings-models.png)

Az oldal két listát tartalmaz:

- **Elérhető modellek** a bal oldalon
- **Kiválasztott modellek** a jobb oldalon

Hasznos vezérlők:

- **Modellek keresése...** modell kereséséhez név alapján
- **Csak ingyenesek** csak az ingyenes modellek megjelenítéséhez
- **Frissítés** a lista újratöltéséhez
- **Összes kinyitása** és **Összes becsukása**, ha szolgáltatók szerint rendezel

Modell hozzáadásához kattints az **Hozzáadás** gombra.

Modell eltávolításához kattints az **X**-re a **Kiválasztott modellek** listában.

A lista törléséhez kattints a **Összes kijelölése törlése** gombra. A szükséges ingyenes modell a listában marad.

> ℹ️ **MEGJEGYZÉS**<br/>
> Ha nem szeretnél azonnal hitelt felvenni az OpenRouter-en, kezdd azzal, hogy bekapcsolod a **Csak ingyenesek** opciót és kiválasztod az ingyenes modelleket.

<br />

<a id="languages"></a>
### Nyelvek

Használd a **Beállítások** > **Nyelvek** menüt az alkalmazásban használt nyelvlisták rendezéséhez.

- **Kiemelt nyelvek** a nyelvlisták tetejére vannak rögzítve a **Fordítás** és **Transzformáció** funkciókban.
- **Egyéni nyelv** lehetővé teszi olyan nyelv hozzáadását, ami nincs a beépített listában.

Ha hozzáadsz egy egyéni nyelvet, az megjelenik a nyelvválasztóban a beépított lehetőségekkel együtt.

<br />

<a id="cost-tracking"></a>
### Költséggyakorlás

Használd a **Beállítások** > **Költséggyakorlás** menüt a költséginformációk kezeléséhez.

- **Teljes költség** mutatja a futó összeget.
- **Érték másolása** másolja az összeget a vágólapra.
- **Költség visszaállítása** nullázza a tárolt összeget.
- **Szinkronizálás API-kulcs használattal** beállítja az összeget, hogy megfeleljen az OpenRouter által jelentett használatnak.
- **API-kulcs használat** mutatja a használati részleteket, ha elérhető.
- **Költségadatok törlése** eltávolítja az összes adatot, vagy csak a kiválasztott dátumnál régebbi bejegyzéseket.

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Az adattörlés nem vonható vissza. Törlés előtt biztonságítsd az adataidat vagy exportáld őket a [**Vezérlőpult** > **Minden hívás**](#dashboard-tabs) segítségével, különben véglegesen elvesznek.

<br />

<a id="transform-prompts"></a>
### Transzformációs promptok

Használd a **Beállítások** > **Transzformációs promptok** menüt a promptok tömeges kezeléséhez.

Lehetséges:

- elmentett promptok áttekintése
- promptok törlése
- promptok importálása fájlból
- promptok exportálása biztonsági mentésre vagy megosztásra

<br />

<a id="users"></a>
### Felhasználók

**Csak web - csak adminisztrátor**

Használd a **Felhasználók** lehetőséget a felhasználói fiókok kezeléséhez a webes verzióban. Felhasználókat adhatsz hozzá, frissítheted az adataikat, visszaállíthatod a jelszavikat és törölheted a fiókokat.

<br />

<a id="api-config"></a>
### API beállítás

**Csak asztali**

Használd az **API beállítás** lehetőséget az asztali alkalmazás csatlakoztatásához az OpenRouter-hez vagy egy Transrewrt proxy-hoz.

- **OpenRouter API kulcs** ide illeszd be a kulcsodat.
- **API URL** a szolgáltatás címe. Hagyd alapértelmezettnek, kivéve ha más címet adtak meg.
- **Használj Transrewrt Proxy-t** az kéréseket egy proxy szolgáltatáson keresztül irányítja, nem közvetlenül az OpenRouter-hez.
- **Kulcs mag** akkor jelenik meg, ha a proxy opció engedélyezve van.
- **API konfiguráció tesztelése** ellenőrzi, hogy a jelenlegi beállítás működik-e.

Részletes lépések az API kulcs megszerzéséhoz: lásd [API kulcs beszerzése](#how-to-get-an-api-key-desktop-app) fent.

> ℹ️ **MEGJEGYZÉS**<br/>
> Ha nem vagy biztos, hogy mit jelentenek az **API URL**, **Használj Transrewrt Proxy-t** vagy **Kulcs mag**, hagyd őket változatlanul és használd az alapértelmezett OpenRouter beállítást. További információ a proxy-ról a [Transrewrt Proxy repository](https://github.com/wsj-br/transrewrt-proxy) oldalon található.

<br />

<a id="about"></a>

### Tudnivalók

Az **Tudnivalók** lap mutatja:

- az alkalmazás nevét
- a verziószámot
- a build dátumot
- egy hivatkozást a projekt repositoryjához

<br /><br />

<a id="common-issues"></a>
## Gyakori problémák

Ha valami nem úgy működik, mint amit elvárna, először ellenőrizze a következő pontokat.

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Az alkalmazás nem fordít, nem átrendez, és nem alakít át szöveget

Ellenőrizze, hogy:

- kiválasztott egy modellt az eszköztárban
- legalább egy model szerepel a [**Beállítások** > **Modellek**](#models) listában
- az API beállításai működnek

Ha az asztali alkalmazást használja:

1. Nyissa meg a [**Beállítások** > **API konfiguráció**](#api-config) menüpontot.
2. Ellenőrizze, hogy mentette-e az API kulcsát.
3. Kattintson az **API konfiguráció tesztelése** gombra.

<br />

<a id="the-model-list-is-empty"></a>
### A modelllista üres

Nyissa meg a [**Beállítások** > **Modellek**](#models) menüpontot és kattintson a **Frissítés** gombra.

Ha szükséges:

- keressen egy modellt
- kapcsolja be a **Csak ingyenes** opciót
- adjon hozzá egy vagy több modellt a **Kiválasztott modellek** listához

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Az eredmény túl lassú vagy túl drága

Próbálja ki az alábbiak egyikét vagy többjét:

- válasszon egy másik modellt
- használjon rövidebb bemenetet
- kapcsolja ki a **Valós idejű fordításhoz (gépelés közben)** opciót a [**Beállítások** > **Általános beállítások**](#general-settings) alatt
- használjon ingyenes modellek egyszerű feladatokhoz (lásd a [Modellek](#models) részt)

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### A felület rossz nyelvű

Kattintson a globus ikonra az [eszköztárban](#toolbar) és válassza ki a kívánt **Felület nyelvét**.

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### A szöveg túl kicsi vagy nehéz olvasni

Nyissa meg a [**Beállítások** > **Általános beállítások**](#general-settings) menüpontot és módosítsa a következőket:

- **Betűtípus**
- **Méret**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Megváltoztattam egy promptot és elvesztettem a szerkesztéseket

Prompt szerkesztésekor mindig kattintson a **Mentés** gombra, mielőtt rákattintana a **Vissza a futtatáshoz** gombra.

<br /><br />

<a id="quick-tips"></a>
## Gyors tippek

- Kezdje a [**Fordítás**](#translate) funkcióval, hogy biztosan működjön a beállítás, mielőtt tovább lép a [**Átrendezés**](#rewrite) vagy [**Átalakítás**](#transform) funkciókra.
- Használja az [**Átrendezés**](#rewrite) funkciót a mindennapi szövegkifejezések javítására.
- Használja az [**Átalakítás**](#transform) funkciót, ha ismétlődő munkafolyamatra van szüksége egy adott feladathoz.
- Használja a [**Vezérlőpult**](#dashboard) funkciót, ha szeretné nyomon követni a használatot és a költségeket.
- Exportálja rendszeresen a promptokat, ha biztonsági mentést készít egy prompt könyvtárról (lásd az [Átalakítás promptok](#transform-prompts) részt).

<br /><br />

<a id="disclaimer"></a>
## Felelősségkizárás

A terméknevek és ikonok a megfelelő tulajdonosoké, és csak azonosítási célokra szolgálnak. Ez a szoftver nem áll kapcsolatban a felsorolt márkákkal, és nincs jóváhagyva általuk.

<br /><br />

<a id="license"></a>
## Licenc

Szerzői jog © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)