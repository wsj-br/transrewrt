---
translated_at: "2026-03-26T00:49:38.165Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Felhasználói útmutató

<br/>

<a id="introduction"></a>
## Bevezetés

A Transrewrt három fő módon segít a szöveggel való munkában:

- **Fordítás** – szöveg egyik nyelvről másikra alakítása.
- **Átírás** – szöveg újra fogalmazása más stílusban, például érthetőbben, rövidebben vagy formálisabban.
- **Átalakítás** – szöveg feldolgozása egyéni, AI-utasításokkal, melyeket „promptok”-nak nevezünk.

<br/>

Ez az útmutató a telepítést követő használatot mutatja be. A telepítési lépéseket a fő **[README](README.hu.md)** tartalmazza.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A Transrewrt elérhető asztali alkalmazásként Windows és Linux rendszerre, valamint önkiszolgáló (self-hosted) webes alkalmazásként is. Ez az útmutató az alkalmazás mindennapi használatára koncentrál. Ha egy adott funkció csak egy változatra vonatkozik, azt egyértelműen jelöljük.

<small>**Egyéb nyelveken is elolvasható:** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Megjegyzés a felhasználói felület és dokumentációk fordításához:** Az angol (UK) eredeti nyelvén kívül minden más felhasználói felület fordítása mesterséges intelligenciás modellekkel történt, ezért a szövegek lehetnek pontatlanok vagy hibákat tartalmazhatnak.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tartalomjegyzék**

- [Előkészületek](#before-you-start)
  - [Hogyan szerezzünk ingyenes OpenRouter API kulcsot (asztali alkalmazáshoz)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Első lépések](#getting-started)
- [Az ablak fő részei](#main-parts-of-the-window)
  - [Oldalsáv](#sidebar)
  - [Eszköztár](#toolbar)
  - [Bemeneti és kimeneti panel](#input-and-output-panels)
- [Fordítás](#translate)
  - [Szöveg fordítása](#translate-text)
  - [Nyelv kiválasztása](#language-selection)
  - [Hasznos beállítások a fordításhoz](#helpful-translation-settings)
- [Átírás](#rewrite)
- [Átalakítás](#transform)
  - [Meglévő prompt futtatása](#run-an-existing-prompt)
  - [Ha még nincsenek promptjaink](#if-you-have-no-prompts-yet)
  - [Gyors prompt létrehozása](#create-a-prompt-quickly)
  - [Prompt szerkesztése](#edit-a-prompt)
  - [Prompt tesztelése használat előtt](#test-a-prompt-before-using-it)
- [Irányítópult](#dashboard)
  - [Adatok szűrése](#filter-the-data)
  - [Fülek az irányítópulton](#dashboard-tabs)
  - [Adatok exportálása](#export-data)
  - [Rekordok törlése modell szerint](#delete-stored-records-for-a-model)
- [Előzmények](#history)
  - [Adatok szűrése](#filter-the-data-1)
  - [Előzmények exportálása](#export-history-data)
- [Beállítások](#settings)
  - [Általános beállítások](#general-settings)
  - [Modellek](#models)
  - [Nyelvek](#languages)
  - [Költségkövetés](#cost-tracking)
  - [Átalakítási promptok](#transform-prompts)
  - [Felhasználók](#users)
  - [API konfiguráció](#api-config)
  - [Névjegy](#about)
- [Gyakori problémák](#common-issues)
  - [Az alkalmazás nem fordít, nem ír át, vagy nem alakít át szöveget](#the-app-will-not-translate-rewrite-or-transform-text)
  - [A modelllista üres](#the-model-list-is-empty)
  - [A válasz túl lassú vagy túl drága](#the-result-is-too-slow-or-too-expensive)
  - [A felhasználói felület rossz nyelven jelenik meg](#the-interface-is-in-the-wrong-language)
  - [A szöveg túl kicsi vagy nehezen olvasható](#the-text-is-too-small-or-hard-to-read)
  - [Az irányítópult grafikonjai üresek](#dashboard-charts-are-empty)
  - [A költség „nem elérhető” üzenetet mutat, vagy helytelennek tűnik](#cost-shows-not-available-or-seems-wrong)
  - [Az összesített költség nem egyezik meg a szolgáltató számlájával](#total-cost-does-not-match-my-provider-bill)
  - [Az Előzmények oldal hiányzik az oldalsávon](#the-history-page-is-missing-from-the-sidebar)
  - [Webes alkalmazás: váratlanul a bejelentkezési oldalra kerülöm átirányítva](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Az irányítópulton nincs adat más felhasználók számára (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Módosítottam egy promptot, de elveszett a változtatás](#i-changed-a-prompt-and-lost-the-edits)
- [Gyors tippek](#quick-tips)
- [Jognyilatkozat](#disclaimer)
- [Licenc](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Előkészületek

A Transrewrt használatához legalább egy MI-szolgáltatóhoz kell hozzáférésed. A támogatott szolgáltatók: [OpenRouter](https://openrouter.ai) (amely sok modellt egyesít), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, és [Ollama](https://ollama.com) helyi modellekhez.

Nem szükséges fizetős modellt választanod az induláshoz. Amint hozzáadod az OpenRouter API-kulcsodat, az alkalmazás automatikusan engedélyez egy beépített **ingyenes** OpenRouter lehetőséget. Ez lehetővé teszi, hogy azonnal elkezdhesd a szövegek fordítását, újraírását és átalakítását. Másik lehetőségként ingyenes API-kulcsot szerezhet be a Cerebras, a Google, a Groq vagy a Mistral AI szolgáltatóktól is.

Egyszerű nyelven:

- Egy **modell** az az MI-motor, amely elvégzi a munkát. A modelleket egy **szolgáltató előtaggal** soroljuk fel (például `openrouter/…`, `openai/…`, `ollama/…`).
- Egy **API-kulcs** (vagy Ollama esetén egy **alap URL**) az, amellyel az alkalmazás kapcsolódik a szolgáltatóhoz.

Ha a **desktop alkalmazást** használod, add hozzá az API-kulcsokat [**Beállítások** > **API-konfiguráció**](#api-config) részben minden egyes használt szolgáltatóhoz. Ha kizárólag OpenRouter-t használsz, lásd lentebb „Hogyan szerezz be ingyenes OpenRouter API-kulcsot” című fejezetet. Ha nem szeretnél API-kulcsot használni, telepíthetsz Ollamát [ollama.com](https://ollama.com) címről, és helyi modelleket használhatsz, például a `translategemma:4b`-t.

Ha a **webes verziót** használod, a szerver üzemeltetője konfigurálja a szolgáltatókat környezeti változók segítségével, így az alkalmazásban nem tudsz közvetlenül API-kulcsokat megadni.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Hogyan szerezz be ingyenes OpenRouter API-kulcsot (desktop alkalmazás)

Ha a desktop alkalmazást használod, kövesd az alábbi lépéseket:

1. Látogass el a [OpenRouter](https://openrouter.ai) oldalára webböngészőben.
2. Hozz létre fiókot, vagy jelentkezz be.
3. Nyisd meg a [Kulcsok](https://openrouter.ai/keys) oldalt.
4. Kattints a gombra, amellyel új API-kulcsot hozhatsz létre.
5. Addj meg nevet a kulcsnak, hogy később felismerd.
6. Másold ki az új API-kulcsot.
7. Térj vissza a Transrewrt-be, és nyisd meg a **Beállítások** > **API-konfiguráció** menüpontot.
8. Illeszd be a kulcsot a **OpenRouter API-kulcs** mezőbe (**Beállítások** > **API-konfiguráció**).
9. Kattints a **OpenRouter kulcs tesztelése** gombra, hogy ellenőrizd, működik-e.

<br/><br/>

<a id="getting-started"></a>
## Első lépések

Ha most használod először a Transrewrt-ot, kövesd az alábbi sorrendet:

1. Indítsd el az alkalmazást.
2. Szükség esetén válaszd ki az **Interfésznyelvet** a földgömb ikonról.
3. Ha a **desktop alkalmazást** használod, nyisd meg [**Beállítások** > **API-konfiguráció**](#api-config), adj hozzá legalább egy szolgáltatóhoz API-kulcsot (például OpenRouter), majd kattints **Tesztelés**-re az ellenőrzéshez.
4. Nyisd meg [**Beállítások** > **Modellek**](#models) menüpontot, és adj hozzá egy vagy több modellt a **Kiválasztott modellek** részhez.
5. Nyisd meg [**Beállítások** > **Nyelvek**](#languages) menüpontot, és válaszd ki a **Legfontosabb nyelveidet**, ha azt szeretnéd, hogy a leggyakrabban használt nyelveid elől legyenek.
6. Menj a **Fordítás** oldalra, és futtass le egy egyszerű fordítást, hogy ellenőrizd, minden működik-e.
7. Amikor ez működik, próbáld ki a **Újraírás** és azután a **Átalakítás** lehetőséget.

Ez a sorrend fontos. Elkerüli azt a leggyakoribb kezdői problémát, hogy valaki elindít egy feladatot, mielőtt az alkalmazásnak megfelelő API-kapcsolata vagy kiválasztott modellje lenne.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Az ablak fő részei

Az alkalmazás három fő részre oszlik:

- A bal oldalon a **oldalsáv**.
- A tetején az **eszköztár**.
- A középső részben a **munkaterület**.

<br/>

<a id="sidebar"></a>
### Oldalsáv

Az oldalsáv segítségével navigálhatsz az alkalmazásban. Az oldalsáv elrejthető, hogy több hely legyen, ha az alkalmazás logójához tartozó ikonra kattintasz.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/hu/sidebar.png" alt="Alkalmazás oldalsávja" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Fordítás</strong> megnyitja a fordítási munkaterületet.</li><br/>
        <li><strong>Újraírás</strong> megnyitja az újraírási munkaterületet.</li><br/>
        <li><strong>Átalakítás</strong> megnyitja az egyéni prompt munkaterületet.</li><br/>
        <li><strong>Vezérlőpult</strong> megjeleníti a használati és költséginformációkat.</li><br/>
        <li><strong>Beállítások</strong> megnyitja a beállítások panelt.</li><br/>
        <li><strong>Előzmények</strong> megmutatja a használati előzményeket a be- és kimeneti szöveggel</li><br/>
        <li><strong>Felhasználó</strong> megjeleníti a bejelentkezett felhasználó nevét (csak webes verzióban).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Eszköztár

Az eszköztár kicsit megváltozik attól függően, hogy az alkalmazás melyik részén tartasz.

- Bal oldalon az aktuális oldal neve jelenik meg.
- Jobb oldalon a **modellválasztó** és az **Interfésnyelv** szabályozó látható.

A **modellválasztó** lehetővé teszi, hogy kiválaszd, melyik MI-motor legyen használva az aktuális feladathoz.

  ![Modellválasztó](../images/screenshots/hu/model-selector.png)

Néhány ingyenes modell nem mindig elérhető — néha offline állapotban van, vagy korlátozva van a használata. Ha ez történik, az alkalmazás automatikusan eltávolítja a modellt az elérhető listádról. A megjelenő modellek szabályozásához lépj a [**Beállítások** > **Modellek**](#models) menüpontba, és szerkeszd a modelllistádat.  
A modellbeállításokat közvetlenül is megnyithatod, ha a modell neve melletti szolgáltató ikonra kattintasz az eszköztárban.

<br/>

A **gömb ikon + nyelvkód** megváltoztatja az alkalmazás interfésznvét, például a menüket és gombokat. **Nem** változtatja meg a fordításnél használt nyelveket a **Fordítás** funkcióban.

  ![Interfésynelv-választó](../images/screenshots/hu/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Bemeneti és kimeneti panel

A legtöbb munkaterület bal oldalon egy **Bemeneti**, jobb oldalon pedig egy **Kimeneti** panelt használ.

Ezenkívül minden panel a következőt is mutatja:

| **Bemenet**                                                         | **Kimenet**                                                                                                                       |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| - Karakterek száma <br/>- Szavak száma <br/>- Bekezdések száma    | - A feladat végrehajtási ideje<br/>- **TPS** (jel/s másodperc)<br/>- Karakterek, szavak és bekezdések száma<br/>- A használt modell |


Ha a technikai kifejezések érdekelnek:

- **Jel (token)** egy kis szövegrészletet jelent. Gondolj rá úgy, mint egy szó részére vagy egy rövid szóra.
- **TPS** jelenti, hogy másodpercenként hány ilyen szövegrészletet dolgozott fel a modell.

<br/>

Figyelheted a műveletek költségét is (ha elérhető), valamint az összesített költséget, ha engedélyezed a `Költséginformációk megjelenítése a műveleteknél` lehetőséget a [**Beállítások** > **Általános beállítások**](#general-settings) menüben. 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Fordítás

Használd a **Fordítás** funkciót, ha szöveget szeretnél egyik nyelvről a másikra átalakítani.

![Fordítás munkaterület](../images/screenshots/hu/translate.png)

<br/>

<a id="translate-text"></a>
### Szöveg fordítása

1. Nyisd meg a **Fordítás** funkciót.
2. Válassz nyelvet a **Honnan** mezőben.
3. Válassz nyelvet a **Hova** mezőben.
4. Válassz modellt az eszköztárból.
5. Írj vagy másolj be szöveget a **Bemenet** mezőbe.
6. Kattints a **Fordítás** gombra.
7. Olvasd el az eredményt a **Kimenet** mezőben.
8. Használd a másolás gombot, ha az eredményt másolni szeretnéd.

<br/>

<a id="language-selection"></a>
### Nyelvválasztás

- **Honnan** lehet konkrét nyelv vagy **Nyelv felismerése**.
- **Hova** az a nyelv, amelyre a fordítás készül.

A kiválasztott **Legfontosabb nyelveid** a lista tetején jelennek meg. Ezeket a [**Beállítások** > **Nyelvek**](#languages) menüben állíthatod be.

<br/>

<a id="helpful-translation-settings"></a>
### Hasznos fordítási beállítások

A [**Beállítások** > **Általános beállítások**](#general-settings) menüben módosíthatod a fordítás viselkedését:

- **Automatikus fordítás beillesztéskor**: a fordítás azonnal elindul, amint beilleszted a szöveget.
- **Eredmény automatikus másolása a vágólapra**: sikeres művelet után az eredmény automatikusan a vágólapra másolódik.
- **Valós idejű fordítás (gépelés közben)**: a fordítás automatikusan elindul a szöveg gépelése során.
- **Időtúllépés (ms)**: beállítja, hogy mennyi ideig várjon az alkalmazás, mielőtt valós idejű fordítást indít.
- **Enter**: határozza meg, mi történjik, ha megnyomod az `Enter` billentyűt:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Újraírás

Használd az **Újraírás** funkciót, ha a megfogalmazást szeretnéd javítani úgy, hogy közben megtartsd az eredeti értelmet.

![Újraírás munkaterület](../images/screenshots/hu/rewrite.png)

Ez hasznos a következők esetén:

- helyesírási és nyelvhelyességi hibák javítása
- szöveg érthetőbbé tétele
- szöveg formálisabbá vagy kevésbé formálissá tétele  
- szöveg rövidítése vagy kiterjesztése
- szöveg technikásabbá tétele

<br/>

> 💡 **TIPP**<br/>
> Amikor a "**Helyesírás és nyelvhelyesség ellenőrzése**" módot használod, a kimeneti panelben megjelenik egy `Változtatások megjelenítése` gomb.  
> Kattints erre a gombra, hogy kapcsolja a javítások megjelenítését — így megjelennek vagy elrejtődnek a szövegedben tett konkrét változtatások.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Átalakítás

Használja az **Átalakítás** funkciót, ha az MI-nek egyéni utasításokat szeretne adni.

![Átalakítás munkaterület](../images/screenshots/hu/transform.png)

Ez az alkalmazás legrugalmasabb területe. Használhatja olyan feladatokra, mint például:

- jegyzetek összegzése
- nyers szöveg átalakítása kifinomult e-mailré
- kulcsfontosságú pontok kiemelése
- szövegek adott formátumba konvertálása
- bármely egyéb egyéni tevékenység a bemeneti szöveggel

<br/>

<a id="run-an-existing-prompt"></a>
### Létező utasítás futtatása

1. Nyissa meg az **Átalakítás** fület.
2. Válasszon egy utasítást az utasításlista közül.
3. Ha megjelenik egy **Cél** nyelv mező, válasszon nyelvet, ha szeretne.
4. Írjon vagy illesszen be szöveget a **Bemenet** mezőbe.
5. Kattintson az **Átalakítás** gombra.
6. Olvassa el az eredményt az **Eredmény** mezőben.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Ha még nincsenek utasításai

Ha az utasításlistája üres, kattintson a **Mintautasítások betöltése** lehetőségre. Ez beépített példákat ad hozzá, így gyorsan elkezdheti a munkát.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A mintautasítások angol nyelven érhetők el. A betöltésük után szerkesztheti az utasításokat, és **Utasítás fordítása** segítségével lefordíthatja őket a saját nyelvére.

<br/>

<a id="create-a-prompt-quickly"></a>
### Gyorsan új utasítás létrehozása

Az utasítás létrehozásának leggyorsabb módja:

1. Kattintson a **Új utasítás** gombra.
2. Kattintson a **Utasítás generálása** gombra.
3. Írja le, mit szeretne, hogy az utasítás csináljon.
4. Válasszon egy modellt.
5. Hagyja, hogy az alkalmazás elkészítse a vázlatot Önnek.
6. Tekintse át a vázlatot, majd kattintson a **Mentés** gombra.

![Utasítás generálása](../images/screenshots/hu/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Urasítás szerkesztése

Amikor új utasítást hoz létre vagy meglévőt szerkeszt, a szerkesztő a bal oldalon jelenik meg, a jobb oldalon pedig egy teszterület válik láthatóvá.

![Átalakítás utasításszerkesztő](../images/screenshots/hu/transform-prompt-edit.png)

A fő mezők:

- **Utasítás neve**: a név, amely az utasításlistában jelenik meg.
- **Utasítás utasításai (opcionális)**: egy rövid útmutató, amelyet a felhasználó lát, amikor futtatja az utasítást.
- **Modell szerepe**: az MI általános szerepe, például: „Te egy segítőkész asszisztens vagy.”
- **Modell utasításai (soronként egy)**: a konkrét szabályok, amelyeket az MI-nek követnie kell.
- **Kimenet leírása**: egy rövid szó, amely az eredményt írja le, például „összegzés” vagy „újrafogalmazás”.
- **Hőmérséklet (0,0 → 1,0)**: a modell viselkedését befolyásolja; lásd alább.
- **Célnyelv kérése**: a futtatáskor nyelvválasztó mezőt jelenít meg.

Ha az idegen kifejezés **Hőmérséklet** új Önnek, képzelje így:

- Egy **alacsonyabb** hőmérséklet stabilabb, előrejelezhetőbb eredményt ad.
- Egy **magasabb** hőmérséklet változatosabb, kreatívabb eredményt ad.

Használhatja továbbá:

- **`Utasítás generálása`** új vázlat létrehozásához egyszerű leírásból
- **`Utasítás javítása`** meglévő utasítás finomhangolásához
- **`Utasítás fordítása`** az utasítás mezőinek lefordításához

<br/>

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Kattintson a **`Mentés`** gombra a **`Vissza a futtatáshoz`** gomb megnyomása előtt. Ha mentés nélkül tér vissza, a módosításai el fognak veszni.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Urasítás tesztelése használat előtt

A jobb oldali tesztpanel lehetővé teszi, hogy kipróbálja az utasítását mintaszöveggel, mielőtt napi alkalmazásban használja azt.

Ez akkor hasznos, ha:

- új utasítást készít
- két utasításváltozatot szeretne összehasonlítani
- a hangnemet, hosszúságot vagy a kimenet formátumát szeretné ellenőrizni

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Exportálhatja és importálhatja a mentett utasításokat a [**Beállítások** > **Átalakítási utasítások**Beállítjtások** > **Átalakítási utasítások**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Vezérlőpult

Használja a **Vezérlőpultot**, hogy lássa, mennyire használja az alkalmazást, és mennyibe kerül (fizetős modelleknél).

![Vezérlőppult összegzés](../images/screenshots/hu/dashboard-summary.png)


<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Ha csak ingyenes modelleket használ, a költségekkel kapcsolatos diagramok üresek lesznek.

<br/>

<a id="filter-the-data"></a>
### Adatok szűrése

Használja a felső szűrőgombokat az időtartomány megváltoztatásához.

![Vezérlőpult szűrők](../images/screenshots/hu/dashboard-filter.png)

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A **Felhasználó** szűrő csak a webes verzióban lévő adminisztrátorok számára látható. A rendes felhasználók nem látják ezt a szűrőt, és az asztali alkalmazásban sem érhető el.

<br/>

<a id="dashboard-tabs"></a>

### Irányítópult fülek

- A **Összegzés** áttekintést nyújt a használatról és a költségekről.
- A **Felhasználás szerint** a tevékenységet lebontja fordítási nyelv, átírási mód és átalakítási prompt szerint.
- A **Modell szerint** megjeleníti, mely modelleket használta, és azok mennyibe kerültek.
- A **Naponként** napi összesítéseket mutat.
- Az **Összes hívás** a teljes hívásnaplót jeleníti meg, és lehetővé teszi annak exportálását.

<br/>

<a id="export-data"></a>
### Adatok exportálása

Az irányítópult táblái a következő formátumokban exportálhatók:

- **JSON**
- **CSV**
- **XLSX**

Ez akkor praktikus, ha az alkalmazáson kívül szeretné áttekinteni a tevékenységet, vagy meg szeretne osztani egy jelentést.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Tárolt rekordok törlése modell szerint

A **Modell szerint** vagy az **Összes hívás** fülön el tudja távolítani egy adott modellhez tartozó tárolt adatokat a "kukás ikon" megnyomásával.

> ⚠️ **FIGYELEM**<br/>
> A tárolt adatok törlése végleges, nem vonható vissza. Csak akkor használja, ha biztosan nincs szüksége többé az adott előzményre.

Ha az összes adatot szeretné törölni, vagy az adatokat kor alapján szeretné eltávolítani, lépjen a [**Beállítások** > **Költség nyomon követése**](#cost-tracking) menüpontra. Ott megtalálja a beállításokat az összes tárolt adat törlésére, vagy csak az adott időnél régebbi adatokra.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Előzmények

Kattintson az **Előzmények** menüpontra a **Transrewrt** alkalmazáson belüli műveletei előzményeinek megtekintéséhez, beleértve minden művelet bemenetét és kimenetét.

![Előzmények oldal](../images/screenshots/hu/history.png)

<br/>

<a id="filter-the-history"></a>
### Adatok szűrése

Az **Előzmények** ugyanazokat a szűrőket használja, mint az **Irányítópult** oldal. Ezekkel válassza ki az időintervallumot.

![Irányítópult szűrők](../images/screenshots/hu/dashboard-filter.png)

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A **Felhasználó** szűrő csak a webes verzió adminisztrátorai számára látható. A rendes felhasználók nem látják ezt a szűrőt, és az asztali alkalmazásban sem érhető el.

<br/>

<a id="export-history-data"></a>
### Előzmények exportálása

Az előzmények oldal a szűrt adatokat a következő formátumokban tudja exportálni:

- **JSON**
- **CSV**
- **XLSX**

Ez akkor praktikus, ha az alkalmazáson kívül szeretné áttekinteni a tevékenységet, vagy meg szeretne osztani egy jelentést.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Beállítások

Nyissa meg a **Beállítások** menüpontot az oldalsávon az alkalmazás viselkedésének testreszabásához.

A rendelkezésre álló fülek a platformtól és felhasználói szerepkörtől függenek:

  | Fül               | Asztali | Web (admin) | Web (rendes felhasználó) |
  |-------------------|:-------:|:-----------:|:------------------------:|
  | Általános beállítások  |   igen   |     igen     |        igen         |
  | Modellek            |   igen   |     igen     |        igen         |
  | Nyelvek         |   igen   |     igen     |        igen         |
  | Költség nyomon követése     |   igen   |     igen     |         —          |
  | Átalakítási promptok |   igen   |     igen     |        igen         |
  | Felhasználók             |    —    |     igen     |         —          |
  | API beállítások        |   igen   |     igen     |         —          |
  | Névjegy             |   igen   |     igen     |        igen         |

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A webes verzióban minden felhasználó saját konfigurációval rendelkezik. A kiválasztott modellek, nyelvek, általános beállítások és átalakítási promptok felhasználónként kerülnek tárolásra. A beállításokban végzett változtatások csak Önt érintik, harmadik személyek nem érintettek.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Általános beállítások

Az **Általános beállítások** segítségével szabályozható a gépelés működése, hogy tárolódnak-e a végrehajtási részletek az **Előzmények** számára, valamint az alkalmazás megjelenése.

**Működés**

- A **ENTER működése** választja ki, hogy az `Enter` billentyű futtatja-e a feladatot, vagy új sort szúr be.
- **Automatikus fordítás beillesztéskor** a szöveg beillesztésekor azonnal elindítja a fordítást.
- **Eredmény automatikus másolása a vágólapra** az eredményt sikeres végrehajtás után automatikusan másolja a vágólapra.
- **Valós idejű fordítás (gépelés közben)** a gépelés közben fordít.
- **Időtúllépés (ms)** beállítja a várakozási időt a valós idejű fordításhoz.

**Előzmények**

- Az **Végrehajtási előzmények megőrzése** határozza meg, hogy a fordítási, átírási és átalakítási műveletek **bemeneti és kimeneti szövegét** tárolni kell-e az oldalsávon található [**Előzmények**](#history) nézethez. Ha kikapcsolja, megerősítést fog kérni; ha megerősíti, a tárolt előzmények szövege törlődik az adatbázisból.
- Az **Előzményadatok törlése** lehetővé teszi a tárolt szövegek kor alapján történő eltávolítását (például néhány hónapnál régebbiek, vagy **az összes adat (törlés)**) a **Törlési adatok** menüpont használatával. Ez csak a mentett végrehajtási szövegekre vonatkozik az **Előzmények** nézethez; a **költség vagy használati összesítők törlésére nem** vonatkozik. A **költség** adatainak törléséhez vagy rövidítéséhez használja a [**Beállítások** > **Költség nyomon követése**](#cost-tracking) lehetőséget.

**Megjelenés**

- A **Költséginformációk megjelenítése a műveleteknél** szabályozza a műveletenkénti költség (ha rendelkezésre áll) és az összesített költség megjelenítését a Fordítás, Átírás és Átalakítás kimeneti paneljein.
- **Költség tizedesjegyek száma** megváltoztatja a költségszámok tizedesjegyeinek megjelenítését.
- **Csak web:** **margó megjelenítése az alkalmazás körül** extra térrel látja el az alkalmazás felületét.
- **Betűtípus** megváltoztatja a szövegpanelek betűtípusát.
- **Méret** megváltoztatja a betűméretet.


<br/>

<a id="models"></a>

### Modellek

A **Beállítások** > **Modellek** menüpont használatával választhatja ki, mely modellek jelenjenek meg az eszköztáron.

![Beállítások – Modellek lap](../images/screenshots/hu/settings-models.png)

Az oldal két listát tartalmaz:

- **Elérhető modellek** bal oldalon
- **Kiválasztott modellek** jobb oldalon

Hasznos vezérlők:

- **Modellek keresése...** név alapján keres
- **Szolgáltató** címkék, amelyekkel szűkítheti a listát egyetlen motorra (OpenRouter, OpenAI, Ollama, …)
- **Csak ingyenes**, hogy csak az ingyenes modelleket mutassa
- **Frissítés** a lista újratöltéséhez
- **Minden kibontása** és **Minden összecsukása**, amikor szolgáltató szerint rendez

A modellszűrők tartalmazzák a szolgáltató előtagját (pl. `openrouter/…` vagy `openai/…`). Címkék, mint például az **OpenAI (OpenRouter)** vagy **OpenAI (közvetlen)** mutatják, hogyan irányul a forgalom.

> ℹ️ **MEGJEGYZÉS**<br/>
> A **OpenRouter Body Builder** (`openrouter/bodybuilder`) útválasztó modell, nem általános csevegőmodell: a válasza az OpenRouter API kéréstörzseket írja le JSON formátumban (pl. egy `requests` tömb `model` és `messages` mezőkkel). Ha ezt modellt a **Fordítás**, **Átírás** vagy **Átalakítás** funkciókhoz használja, a kimeneti panelen ez a JSON jelenik meg ahelyett, hogy befejezett szöveg lenne. Ezekhez a feladatokhoz válasszon normál szövegalapú modellt. Lásd: [Body Builder modell oldal](https://openrouter.ai/openrouter/bodybuilder) az OpenRouter-en.

Műveletek:

 - Modell hozzáadásához kattintson a **Hozzáadás** gombra, vagy a bejegyzés bármely pontjára.

 - Modell eltávolításához kattintson az **X**-re a **Kiválasztott modellek** mellett, vagy a **Kiválasztott** kapcsolón a modell a megfelelő sávban.

 - A lista törléséhez kattintson a **Kijelölés megszűntetése** gombra. A szükséges ingyenes modell továbbra is a listában marad.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Ha nem szeretne azonnal hitelt vállalni az OpenRouter-nél, először aktiválja a **Csak ingyenes** lehetőséget, és válassza az ingyenes modelleket (bankkártya nélkül is használhatók). Ollama használatával helyben is futtathat modelleket, anélkül, hogy API kulcsra szükség lenne.

<br/>

<a id="languages"></a>
### Nyelvek

A **Beállítások** > **Nyelvek** lehetőséggel kezelheti az alkalmazásban használt nyelvi listákat.

- A **Legfelső nyelvek** fent, a listák tetején rögzítve jelennek meg a **Fordítás** és **Átalakítás** funkciókban.
- **Egyéni nyelv** lehetőséggel hozzáadhat olyan nyelveket, amelyek nincsenek az alapértelmezett listában.

Ha egyéni nyelvet ad hozzá, az megjelenik a nyelvválasztók menüjében az alapnyelvek mellett.

<br/>

<a id="cost-tracking"></a>
### Költségek követése

A **Beállítások** > **Költségek nyomon követése** lehetőséggel kezelheti a költségekre vonatkozó információkat.

- **Teljes költség**: folyamatosan frissített összeg.
- **Érték másolása**: a teljes összeget a vágólapra másolja.
- **Költség alaphelyzetbe állítása**: a tárolt értéket nullára állítja.
- **Szinkronizálás API-kulcs használattal**: az összeg egyeztetése az OpenRouter fiókja által jelentett használattal (csak OpenRouter).
- **API-kulcs használat**: a OpenRouter használatának részletei, ha elérhetők.
- **Költségadatok törlése**: az összes adatot, vagy csak a kiválasztott dátum előttieket eltávolítja.

**Költségek nyomon követése:** Amikor OpenRouter modelleket használ, az alkalmazás a valós felhasználását és költségét mutatja az OpenRouter adatai alapján. Más szolgáltatók esetében az app az OpenRouter által közzétett árak alapján becsli a költségeket. Ha az adott modell ára nem ismert, a becslés lehet nulla.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> **Minden költségadat csak tájékoztató jellegű becslés, nem hivatalos számla.**


<br/>

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Az adatok törlése visszafordíthatatlan. Törlés előtt biztosítsa, hogy mentse vagy exportálja az adatait a [**Előzmények**](#history)
> vagy [**Irányítópult** > **Összes hívás**](#dashboard-tabs) menüben, különben az adatok véglegesen elvesznek.
> Az egyes API hívásokhoz tartozó összes bemeneti/kimeneti előzmény is törlésre kerül.

<br/>

<a id="transform-prompts"></a>
### Átalakítási utasítások

A **Beállítások** > **Átalakítási utasítások** lehetőséggel tömegesen kezelheti az utasításokat.

Lehetősége van:

- mentett utasítások áttekintésére
- utasítások törlésére
- utasítások importálására fájlból
- utasítások exportálására mentés vagy megosztás céljából

<br/>

<a id="users"></a>
### Felhasználók

A webes verzióban a **Felhasználók** lehetőséggel kezelheti a felhasználói fiókokat. Hozzáadhat felhasználókat, frissítheti adataikat, visszaállíthatja jelszavaikat és törölhet fiókokat.

<br/>

<a id="api-config"></a>
### API beállítások

A támogatott szolgáltatók: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, és **Ollama** (helyi modellek egy alap URL-cím használatával). Csak azokat a szolgáltatókat kell beállítania, amelyeket használni kíván.

**Webalkalmazás: csak rendszergazda**

Az API kulcsokat a rendszer- vagy Docker környezeti változók segítségével konfiguráljuk — nem a webes felületen adjuk meg őket. Ez az oldal mutatja, mely szolgáltatók rendelkeznek konfigurált kulccsal, és lehetővé teszi mindegyik tesztelését a **`Teszt`** gombra kattintva.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Egy API kulcs módosításához frissítenie kell a környezeti változót a rendszer- vagy Docker-konfigurációban, majd újra kell indítania a szervert vagy a konténert.

<br/>

**Asztali alkalmazás**

Az **API beállítás** lehetőséggel mentheti az API kulcsokat az egyes használt szolgáltatókhoz. Az Ollama esetében egy **alap URL-t** adjon meg API kulcs helyett.

<br/>

> 💡 **Tipp** <br/>
> Ha nem használna API kulcsot vagy nem szeretne fizetni, [letöltheti az Ollama-t](https://ollama.com) és ingyen futtathat modelleket (pl. `translategemma:4b`) gépének helyi környezetében. Alternatív megoldásként ingyenes OpenRouter fiókot hozhat létre (bankkártya nélkül), és azok ingyenes modelljeit használhatja, vagy ingyenes API kulcsot szerezhet a Cerebras-tól, a Google-től, Groq-tól vagy Mistral AI-től.

<br/>

- Csak azokat a szolgáltatókat adja hozzá, amelyekre szüksége van. A **Beállítások** > **Modellek** beállításnál minden modell azonosítója a szolgáltató nevével kezdődik (pl. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

API kulcs hozzáadásához írja be az értéket a szövegmezőbe, majd kattintson a **`Mentés`** gombra. Már meglévő kulcs cseréjéhez kattintson az **`Szerkesztés`** gombra. A kulcs működésének ellenőrzéséhez kattintson a **`Teszt`** gombra. Ollama alap URL esetén mindig kattintson a **`Teszt`** gombra, hogy ellenőrizze a kapcsolatot.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A jelenlegi API kulcs értékét nem látja. Csak az **`Szerkesztés`** gomb használatával cserélheti le.
> Az API kulcsok titkosítva tárolódnak a konfigurációban.

<br/>

<a id="about"></a>

### Névjegy

A **Névjegy** lap mutatja:

- az alkalmazás nevét
- a verziószámot
- a fordítás dátumát
- egy hivatkozást a projekt adattárához

<br/><br/>

<a id="common-issues"></a>
## Gyakori problémák

Ha valami nem úgy működik, ahogy várná, először ellenőrizze az alábbiakat.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Az alkalmazás nem fordít, nem ír át vagy nem alakít át szöveget

Ellenőrizze, hogy:

- kiválasztott-e egy modellt az eszköztáron
- legalább egy modell szerepel-e a [**Beállítások** > **Modellek**](#models) részben
- az API-beállítás megfelelően működik-e

Ha az asztali alkalmazást használja:

1. Nyissa meg a [**Beállítások** > **API beállítások**](#api-config) menüpontot.
2. Ellenőrizze, hogy legalább egy API-kulcs el van-e mentve.
3. Kattintson a **Teszt** gombra a szolgáltató neve mellett, hogy megerősítse a kulcs működését.

<br/>

<a id="the-model-list-is-empty"></a>
### A modellek listája üres

Nyissa meg a [**Beállítások** > **Modellek**](#models) menüpontot, és kattintson a **Frissítés** gombra.

Ha szükséges:

- keressen egy modellt
- kapcsolja be a **Csak ingyenes** opciót
- adjon hozzá egy vagy több modellt a **Kiválasztott modellek** közé

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Az eredmény túl lassú vagy túl drága

Próbálja ki a következők egyikét vagy többjét:

- válasszon másik modellt
- rövidebb bemeneti szöveget használjon
- kapcsolja ki a **Valós idejű fordítás (írás közben)** opciót a [**Beállítások** > **Általános beállítások**](#general-settings) alatt
- egyszerűbb feladatokhoz használjon ingyenes modelleket (lásd: [Modellek](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### A felület rossz nyelven jelenik meg

Kattintson a földgömb ikonra az [eszköztáron](#toolbar), és válassza ki a kívánt **Felület nyelve** beállítást.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### A szöveg túl kicsi vagy nehezen olvasható

Nyissa meg a [**Beállítások** > **Általános beállítások**](#general-settings) menüpontot, és változtassa meg:

- **Betűtípus**
- **Méret**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Az irányítópult diagramjai üresek

Ez normális, ha:

- csak **ingyenes modelleket** használ (a költségek diagramjai üresek lesznek)
- a kiválasztott **időszűrő** nem fedi le azokat az időszakokat, amikor kérések érkeztek – próbálja a **Mind** beállítást

Ha a diagramok továbbra is üresek a **Mind** kiválasztása után is, ellenőrizze, hogy megjelennek-e a hívások a [**Előzmények**](#history) vagy az **Összes hívás** lapban.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### A költség "nem elérhető" vagy hibásnak tűnik

Ha **OpenRouter** által továbbított modelleket használ, az alkalmazás a OpenRouter által jelentett tényleges költséget jeleníti meg.

**Egyéb szolgáltatók esetén** (közvetlen OpenAI, közvetlen Anthropic stb.) a költség az OpenRouter által közzétett árazási adatok alapján történő becslés. Ha egy modellhez nincs megfelelő ár, a költség **nem elérhető**ként jelenik meg, és nem kerül be a teljes összeg felé.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### A teljes költség nem egyezik a szolgáltatói számlámmal

Az alkalmazásban szereplő összes költségösszeg **csak tájékoztató célú becsült érték**, nem hivatalos számlázási kimutatás.

A teljes költséget közelebb hozva a tényleges OpenRouter-fizetéshez, nyissa meg a [**Beállítások** > **Költségkövetés**](#cost-tracking) menüpontot, és kattintson a **Szinkronizálás az API-kulcs használatával** gombra.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Az Előzmények oldal hiányzik az oldalsávon

Lehetséges, hogy ki van kapcsolva a **Kéréselőzmények megőrzése**. Nyissa meg a [**Beállítások** > **Általános beállítások**](#general-settings) menüpontot, és kapcsolja be. Figyelem: az bekapcsolása nem állítja vissza a korábban törölt előzményeket.

<br/>

<a id="web-app-session-expired"></a>
### Webes alkalmazás: váratlanul átirányítva a bejelentkezési oldalra

A munkamenet lejárhatott. Jelentkezzen be újra. Ha gyakran történik meg, ellenőrizze a szerver beállításait a munkamenet élettartamának konfigurálásához.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Irányítópult nem jelenít meg adatot más felhasználók számára (web)

Csak az **adminisztrátorok** tekinthetik meg minden felhasználó adatait a **Felhasználó** szűrő segítségével. Rendszeres felhasználók csak saját tevékenységeiket láthatják, ez a működés szándékos.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Módosítottam egy utasítást, de elveszítettem a változtatásokat

A prompt szerkesztésekor mindig kattintson **Mentés** gombra, mielőtt a **Vissza a futtatáshoz** lehetőségre kattintana.

<br/><br/>

<a id="quick-tips"></a>
## Gyors tippek

- Kezdje a [**Fordítás**](#translate) használatával, hogy meggyőződjön arról, a beállítás megfelelően működik, mielőtt áttérne az [**Átírásra**](#rewrite) vagy a [**Transzformálásra**](#transform).
- Használja az [**Átírást**](#rewrite) mindennapi szövegjavításokhoz.
- Használja a [**Transzformálást**](#transform), ha ismételhető munkafolyamatot szeretne egy adott feladathoz.
- Használja az [**Irányítópultot**](#dashboard), ha nyomon szeretné követni a használatot és a költségeket.
- Használja az [**Előzményeket**](#history), hogy áttekintse a korábbi műveleteket, beleértve a teljes bemeneti és kimeneti szöveget.
- Rendszeresen exportálja a promptokat, ha promptkönyvtárat épít, amit meg szeretne őrizni (lásd: [Transzformáló promptok](#transform-prompts)) vagy ha másokkal meg szeretné osztani.

<br/><br/>

<a id="disclaimer"></a>

## Felelősségkizárás

A terméknevek és ikonok a jogosultak tulajdonát képezik, és kizárólag azonosítási célokból használatosak. Ez a szoftver nem kapcsolódik egyetlen említett márkához sem, és azok nem is támogatják.

<br/><br/>

<a id="license"></a>
## Licenc

Szerzői jog © 2026 Waldemar Scudeller Jr.

[Apache Licenc 2.0](LICENSE)