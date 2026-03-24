---
translated_at: "2026-03-24T01:51:51.964Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt logó](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Felhasználói útmutató

<br/>

<a id="introduction"></a>
## Bevezetés

A Transrewrt a szöveggel való munkavégzést három fő módon segíti:

- **Fordítás** – szöveg átalakítása egyik nyelvről a másikra.
- **Átírás** – szöveg átfogalmazása más stílusban, például érthetőbben, rövidebben vagy formálisabban.
- **Átalakítás** – szöveg feldolgozása egyedi mesterséges intelligencia utasításokkal, amelyeket promptoknak nevezünk.

<br/>

Ez az útmutató a program használatát ismerteti telepítést és indítást követően. A telepítési lépéseket a fő **[README](README.hu.md)** tartalmazza.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A Transrewrt elérhető asztali alkalmazásként Windows és Linux rendszerekre, valamint saját kiszolgálón futtatható webes alkalmazásként. Ez az útmutató a mindennapi használatra koncentrál. Amikor egy funkció csak egy verzióra vonatkozik, azt egyértelműen jelöljük.

<small>**Más nyelveken olvasható:** [English (UK)](USER-GUIDE.hu.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tartalomjegyzék** 

- [Előkészületek](#before-you-start)
  - [Hogyan szerezzünk ingyenes OpenRouter API kulcsot (asztali alkalmazás)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Első lépések](#getting-started)
- [Az ablak fő részei](#main-parts-of-the-window)
  - [Oldalsáv](#sidebar)
  - [Eszköztár](#toolbar)
  - [Bemeneti és kimeneti panel](#input-and-output-panels)
- [Fordítás](#translate)
  - [Szöveg fordítása](#translate-text)
  - [Nyelv kiválasztása](#language-selection)
  - [Hasznos beállítások a fordításhoz](#helpful-translation-settings)
  - [Gyorsbillentyűk](#keyboard-shortcuts)
- [Átírás](#rewrite)
  - [Szöveg átírása](#rewrite-text)
- [Átalakítás](#transform)
  - [Létező prompt futtatása](#run-an-existing-prompt)
  - [Ha még nincsenek promptjai](#if-you-have-no-prompts-yet)
  - [Gyors prompt létrehozása](#create-a-prompt-quickly)
  - [Prompt szerkesztése](#edit-a-prompt)
  - [Prompt tesztelése használat előtt](#test-a-prompt-before-using-it)
  - [Mentett promptok kezelése](#manage-saved-prompts)
- [Irányítópult](#dashboard)
  - [Adatok szűrése](#filter-the-data)
  - [Fülek az irányítópulton](#dashboard-tabs)
  - [Adatok exportálása](#export-data)
  - [Tárolt rekordok törlése egy modellhez](#delete-stored-records-for-a-model)
- [Előzmények](#history)
  - [Adatok szűrése](#filter-the-data-1)
  - [Előzmények exportálása](#export-history-data)
- [Beállítások](#settings)
  - [Általános beállítások](#general-settings)
  - [Modellek](#models)
  - [Nyelvek](#languages)
  - [Költségek követése](#cost-tracking)
  - [Átalakító promptok](#transform-prompts)
  - [Felhasználók](#users)
  - [API beállítások](#api-config)
  - [Névjegy](#about)
- [Gyakori hibák](#common-issues)
  - [Az alkalmazás nem tud fordítani, átírni vagy átalakítani](#the-app-will-not-translate-rewrite-or-transform-text)
  - [A modelllista üres](#the-model-list-is-empty)
  - [Az eredmény túl lassú vagy túl költséges](#the-result-is-too-slow-or-too-expensive)
  - [A felület hibás nyelven jelenik meg](#the-interface-is-in-the-wrong-language)
  - [A szöveg túl kicsi vagy nehezen olvasható](#the-text-is-too-small-or-hard-to-read)
  - [Az irányítópult diagramjai üresek](#dashboard-charts-are-empty)
  - [A költség „nem elérhető” vagy hibásnak tűnik](#cost-shows-not-available-or-seems-wrong)
  - [Az összesített költség nem egyezik meg az elszámolással](#total-cost-does-not-match-my-provider-bill)
  - [Az előzmények oldal hiányzik az oldalsávról](#the-history-page-is-missing-from-the-sidebar)
  - [Webalkalmazás: váratlanul a bejelentkezési oldalra irányít át](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Az irányítópult nem mutat adatot más felhasználók számára (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Egy promptot megváltoztattam, és elveszítettem a módosításokat](#i-changed-a-prompt-and-lost-the-edits)
- [Gyors tippek](#quick-tips)
- [Felelősségvállalás kizárása](#disclaimer)
- [Licenc](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Előkészületek

A Transrewrt használatához szükség van legalább egy Mesterséges Intelligencia szolgáltatóhoz való hozzáférésre. A támogatott szolgáltatók: [OpenRouter](https://openrouter.ai) (amely számos modellt egyesít), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, és [Ollama](https://ollama.com) helyi modellekhez.

Nem szükséges fizetős modellt kiválasztania az induláshoz. Amint hozzáadja az OpenRouter API kulcsát, az alkalmazás automatikusan engedélyez egy beépített **ingyenes** OpenRouter lehetőséget. Ez lehetővé teszi azonnali szintű szövegfordítást, átírást és átalakítást.

Egyszerű szavakkal:

- Egy **modell** az az MI motor, amely elvégzi a munkát. A modelleket **szolgáltató előtaggal** soroljuk fel (például `openrouter/…`, `openai/…`, `ollama/…`).
- Egy **API kulcs** (vagy Ollama esetében egy **alap URL**) az, amellyel az alkalmazás kapcsolatot létesít a szolgáltatóval.

Ha az **asztali alkalmazást** használja, adja hozzá minden használt szolgáltatóhoz az API kulcsot a [**Beállítások** > **API Konfiguráció**](#api-config) menüpontban. Csak OpenRouter használata esetén olvassa el alább az [API kulcs beszerzésének módját](#how-to-get-an-api-key-desktop-app). Ha nem szeretne API kulcsot használni, telepíthet Ollamát ([ollama.com](https://ollama.com) oldalról), és helyben futó modelleket használhat.

Ha a **webes verziót** használja, akkor a szerver üzemeltetője konfigurálja a szolgáltatókat környezeti változók segítségével, ezért általában ön nem ad meg API kulcsokat.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Hogyan szerezhetek ingyenes OpenRouter API kulcsot (asztali alkalmazás)

Ha az asztali alkalmazást használja, kövesse az alábbi lépéseket:

1. Nyissa meg a [OpenRouter](https://openrouter.ai) oldalt a webböngészőjében.
2. Hozzon létre egy fiókot, vagy jelentkezzen be.
3. Nyissa meg a [Kulcsok](https://openrouter.ai/keys) oldalt.
4. Kattintson a gombra új API kulcs létrehozásához.
5. Adjon nevet a kulcsnak, hogy később felismerje.
6. Másolja ki az új API kulcsot.
7. Térjen vissza a Transrewrt-hez, és nyissa meg a **Beállítások** > **API Konfiguráció** menüt.
8. Illessze be a kulcsot az **OpenRouter API kulcs** mezőbe (**Beállítások** > **API Konfiguráció** alatt).
9. Kattintson a **Teszt OpenRouter kulcs** gombra, hogy ellenőrizze a működését.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Indulhat az OpenRouter ingyenes útvonalával vagy az elérhető többi ingyenes modellel úgy, hogy nem ad meg hitelkártyát. Sok esetben ez elegendő ahhoz, hogy elkezdje a Transrewrt használatát anélkül, hogy fizetős modellt választana. Alternatívaként használhat Ollamát, hogy modelleket futtasson helyben, API kulcs nélkül.

<br/><br/>

<a id="getting-started"></a>
## Első lépések

Ha először használja a Transrewrt-et, kövesse az alábbi sorrendet:

1. Indítsa el az alkalmazást.
2. Ha szükséges, válassza ki az **Interfész nyelvét** a világgömb ikonon keresztül.
3. Ha az **asztali alkalmazást** használja, nyissa meg a [**Beállítások** > **API Konfiguráció**](#api-config) menüt, adjon hozzá legalább egy szolgáltatóhoz API kulcsot (például OpenRouter), majd kattintson a **Teszt** gombra az ellenőrzéshez.
4. Nyissa meg a [**Beállítások** > **Modellek**](#models) menüt, és adjon hozzá egy vagy több modellt a **Kiválasztott modellek** listához.
5. Nyissa meg a [**Beállítások** > **Nyelvek**](#languages) menüt, és válassza ki a **Fő nyelveket**, ha szeretné, hogy a gyakran használt nyelvek elől szerepeljenek.
6. Lépjen a **Fordítás** menüre, és hajtson végre egy egyszerű fordítást, hogy ellenőrizze a működést.
7. Amint ez működik, próbálja ki az **Átírás**, majd a **Átalakítás** funkciót.

Ez a sorrend fontos. Megelőzi az első használat gyakori hibáit: munka elindítása az alkalmazás működő API kapcsolata vagy kiválasztott modellje nélkül.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Az ablak fő részei

Az alkalmazás három fő részre oszlik:

- A bal oldalon a **oldalsáv**.
- A tetején a **eszköztár**.
- A középső részen a **munkaterület**.

<br/>

<a id="sidebar"></a>
### Oldalsáv

Az oldalsáv segítségével navigálhat az alkalmazásban. Az oldalsáv összezárható a több helyért az alkalmazás logóját követő ikonra kattintva.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/hu/sidebar.png" alt="Alkalmazás oldalsáv" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Fordítás</strong> a fordítási munkaterületet nyitja meg.</li><br/>
        <li><strong>Átírás</strong> az átírási munkaterületet nyitja meg.</li><br/>
        <li><strong>Átalakítás</strong> a személyre szabott utasítási munkaterületet nyitja meg.</li><br/>
        <li><strong>Irányítópult</strong> mutatja a használati és költséginformációkat.</li><br/>
        <li><strong>Beállítások</strong> megnyitja a beállítás panelt.</li><br/>
        <li><strong>Előzmények</strong> megjeleníti az elvégzett műveletek előzményeit, a bevitt és a kimenő szövegekkel együtt.</li><br/>
        <li><strong>Felhasználó</strong> megjeleníti a bejelentkezett felhasználó nevét (csak webes verzió).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Eszköztár

Az eszköztár kis mértékben megváltozik attól függően, hogy éppen hol tartózkodik az alkalmazásban.

- Bal oldalon megjelenik az aktuális oldal neve.
- Jobb oldalon a **modellválasztó** és az **interfésznnyelv-választó** elemek láthatók.

A **modellválasztó** segítségével kiválaszthatja, hogy melyik MI-motor legyen használva az aktuális feladat végrehajtásához.

  ![Modellválasztó](../images/screenshots/hu/model-selector.png)

> ℹ️ **MEGJEGYZÉS**<br/>
> Néhány ingyenes modell esetleg nem mindig érhető el – néha karbantartás alatt állnak, vagy fogyasztási korlátot alkalmaznak. Ha ilyesmi történik, az alkalmazás automatikusan eltávolítja az adott modellt a listáról.<br/>
> A megjelenő modellek beállításához menjen a [**Beállítások** > **Modellek**](#models) opcióra, és szerkessze modelllistáját. 
> A modellbeállításokat közvetlenül a modell neve melletti szolgáltató ikonra kattintva is megnyithatja az eszköztáron.

<br/>

A **földgolyó ikon + nyelvkód** megváltoztatja az alkalmazás felhasználói felületének nyelvét (pl. menük, gombok). Ez **nem befolyásolja** a használt fordítási nyelveket a **Fordítás** funkcióban.

  ![Interfésznnyelv-választó](../images/screenshots/hu/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Input (bemeneti) és Output (kimeneti) panel

A legtöbb munkaterület bal oldalon található **Input** és jobb oldali **Output** panelt használ.

Az **Input** panel a következőt jeleníti meg:

- Karakterek száma
- Szavak száma
- Bekezdések száma

Az **Output** panel a következőket jelenítheti meg:

- A feladat elvégzéséhez szükséges idő
- A feladat költsége (ha elérhető)
- A teljes felhasználói költség
- **TPS** (tokenek száma másodpercenként)
- Karakterek, szavak és bekezdések száma
- A használt modell

Ha kíváncsi a technikai kifejezésekre:

- **Token**: egy kis szövegrészlet. Egy szó részeként vagy egy rövid szóként is értelmezhető.
- **TPS**: azt jelenti, hogy hány ilyen szövegrészletet dolgoz fel a modell másodpercenként.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Fordítás

Használja a **Fordítás** funkciót, ha szöveget szeretne átalakítani egyik nyelvről a másikra.

![Fordítás munkaterület](../images/screenshots/hu/translate.png)

<br/>

<a id="translate-text"></a>
### Szöveg fordítása

1. Nyissa meg a **Fordítás** lehetőséget.
2. Válasszon nyelvet a **Fel** mezőben.
3. Válasszon nyelvet a **Ide** mezőben.
4. Válasszon modellt az eszköztáron.
5. Írja be vagy másolja be a szöveget az **Input** mezőbe.
6. Kattintson a **Fordítás** gombra.
7. Olvassa el az eredményt az **Output** mezőben.
8. Használja a másolás gombot, ha szeretné az eredményt másolni.

<br/>

<a id="language-selection"></a>
### Nyelvválasztás

- A **Fel** lehet egy konkrét nyelv, vagy **Nyelvfelderítés**.
- Az **Ide** az a nyelv, amelyre a szöveget le szeretné fordítani.

A kiválasztott **Legfelső nyelvek** a lista tetején jelennek meg. Ezeket a [**Beállítások** > **Nyelvek**](#languages) menüpontban állíthatja be.

<br/>

<a id="helpful-translation-settings"></a>
### Hasznos fordítási beállítások

A [**Beállítások** > **Általános beállítások**](#general-settings) menüben megváltoztathatja a fordítás működési módját:

- **Automatikus fordítás beillesztéskor**: a szöveg beillesztésekor azonnal lefordítja a szöveget.
- **Eredmény másolása a vágólapra automatikusan**: az eredmény másolását automatikusan elvégzi sikeres fordítás után.
- **Valós idejű fordítás (írás közben)**: írás közben folyamatosan fordítja a szöveget.
- **Időtúllépés (ms)**: szabályozza, mennyi ideig várjon az alkalmazás a valós idejű fordítás elindítása előtt.

<br/>

<a id="keyboard-shortcuts"></a>
### Billentyűparancsok

A [**Beállítások** > **Általános beállítások**](#general-settings) menüben a **ENTER működése** határozza meg, mi történik, ha lenyomja az `Enter` billentyűt:

- Az **Enter** elvégzi a feladatot, míg a **Shift+Enter** új sort szúr be.
- Vagy az alkalmazás megfordítja a működést.

A jelenlegi mód az éppen használt **Fordítás** gombon is látható.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Újraírás

Használja az **Újraírás** funkciót, ha a szöveg megfogalmazását szeretné javítani anélkül, hogy a fő jelentést megváltoztatná.

![Újraírás munkaterület](../images/screenshots/hu/rewrite.png)

Ez hasznos lehet:

- helyesírás- és nyelvtanjavításra
- szöveg világosabbá tételére
- szöveg formálisabbá vagy kevésbé formálisabbá tételére
- szöveg rövidítésére vagy bővítésére
- szöveg technikásabb hangnemre alakítására

<br/>

<a id="rewrite-text"></a>

### Szöveg átírása

1. Nyissa meg a **Átírás** funkciót.
2. Válasszon egy **Módot**.
3. Válasszon ki egy modellt az eszköztárból.
4. Írja be vagy illessze be a szöveget a **Bemenet** mezőbe.
5. Kattintson az **Átírás** gombra.
6. Nézze át az eredményt a **Kimenet** mezőben.

Ugyanez az Enter billentyű működése, amelyet a [**Fordítás**](#keyboard-shortcuts) részben leírtunk, itt is érvényes.

<br/>

> 💡 **TIPP**<br/>
> Ha a "**Helyesírás- és nyelvtanellenőrzés**" módot használja, egy `Módosítások megjelenítése` gomb jelenik meg a kimeneti panelen.
> A gombra kattintva kapcsolhatja a javítások megjelenítését, így láthatóvá vagy elrejthetővé válnak a szövegében végzett konkrét változtatások.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## Átalakítás

Használja az **Átalakítás** funkciót, ha azt szeretné, hogy a MI egyéni utasításokat kövessen.

![Átalakítás munkaterület](../images/screenshots/hu/transform.png)

Ez az alkalmazás legrugalmatosabb része. Ilyen feladatokra használható például:

- jegyzetek összegzése
- durva szöveg finom, megmunkált e-mailré alakítása
- kulcspontok kinyerése
- szöveg átalakítása adott formátumba

<br/>

<a id="run-an-existing-prompt"></a>
### Létező utasítás futtatása

1. Nyissa meg az **Átalakítás** funkciót.
2. Válasszon ki egy utasítást az utasításlistából.
3. Ha megjelenik egy **Cél** nyelv mező, válasszon nyelvet, ha szükséges.
4. Írja be vagy illessze be a szöveget a **Bemenet** mezőbe.
5. Kattintson az **Átalakítás** gombra.
6. Olvassa el az eredményt a **Kimenet** mezőben.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Ha még nincsenek utasításai

Ha az utasításlistája üres, kattintson a **Minta utasítások betöltése** gombra. Ezzel beépített példák kerülnek hozzáadásra, így gyorsan elkezdheti a munkát.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A mintautasítások angol nyelven érhetők el. A betöltés után szerkesztheti az utasítást, és használhatja a **Utasítás fordítása** funkciót, hogy lefordítsa saját nyelvére.

<br/>

<a id="create-a-prompt-quickly"></a>
### Gyorsan készítsen egy utasítást

A leggyorsabb módszer utasítás létrehozására:

1. Kattintson az **Új utasítás** gombra.
2. Kattintson a **Utasítás generálása** gombra.
3. Írja le, mit szeretne, hogy az utasítás csináljon.
4. Válasszon modellt.
5. Hagyja, hogy az alkalmazás elkészítse az utasítás vázlatát.
6. Nézze át a vázlatot, majd kattintson a **Mentés** gombra.

![Utasítás generálása](../images/screenshots/hu/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### U tasítás szerkesztése

Amikor létrehoz vagy szerkeszt egy utasítást, a szerkesztő a bal oldalon jelenik meg, a jobb oldalon pedig egy tesztelési terület.

![Átalakítás utasításszerkesztő](../images/screenshots/hu/transform-prompt-edit.png)

A fő mezők:

- **Utasítás neve**: a név, amely megjelenik az utasításlistában.
- **Utasítás útmutatója (nem kötelező)**: rövid súgószöveg, amely megjelenik a felhasználónak az utasítás futtatásakor.
- **Modell szerepe**: a mesterséges intelligenciának rendelt általános szerep, például „Te egy segítőkész asszisztens vagy.”
- **Modell utasításai (soronként egy)**: azok a konkrét szabályok, amelyeket a MI-nek követnie kell.
- **Kimenet leírása**: a kimenet rövid jellemzése, például „összegzés” vagy „újraírás”.
- **Hőmérséklet (0,0 → 1,0)**: a modell működése; lásd alább.
- **Célnyelv kérése**: nyelvválasztót ad hozzá az utasítás futtatásakor.

Ha számára új a **Hőmérséklet** technikai fogalma, képzelje el így:

- Egy **alacsonyabb** hőmérséklet stabilabb, kiszámíthatóbb eredményeket ad.
- Egy **magasabb** hőmérséklet változatosabb és kreatívabb kimenetet eredményez.

Használhat még:

- **`Utasítás generálása`**, hogy egyszerű leírásból új vázlatot hozzon létre
- **`Utasítás javítása`**, hogy megtisztítsa a meglévő utasítást
- **`Utasítás fordítása`**, hogy lefordítsa az utasítás mezőit

<br/>

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Kattintson a **`Mentés`** gombra, mielőtt a **`Vissza a futtatáshoz`** lehetőségre kattintana. Ha visszamegy mentés nélkül, a változtatásai elvesznek.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Tesztelje az utasítást használat előtt

A jobb oldali tesztpanellel kipróbálhatja az utasítását mintaszöveggel, mielőtt napi használatra használná.

Ez akkor hasznos, ha:

- új utasítást készít
- két változatot hasonlít össze
- a stílust, a hosszúságot vagy a kimeneti formátumot szeretné ellenőrizni

<br/>

<a id="manage-saved-prompts"></a>
### Mentett utasítások kezelése

A mentett utasítások központi kezeléséhez nyissa meg: [**Beállítások** > **Átalakítás utasítások**](#transform-prompts).

Itt:

- listázhatja és törölheti utasításait
- exportálhatja az utasításokat **JSON**, **CSV** vagy **XLSX** formátumban
- importálhat utasításokat fájlból

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Irányítópult

Az **Irányítópult** használatával nyomon követheti, mennyit használja az alkalmazást, és mennyibe kerül az (a fizetős modellek esetében).

![Irányítópult összegzés](../images/screenshots/hu/dashboard-summary.png)


<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Ha csak ingyenes modelleket használ, a költségekkel kapcsolatos diagramok üresek lesznek.

<br/>

<a id="filter-the-data"></a>
### Adat szűrése

A szűréshez használja a felső részen található szűrőgombokat, hogy módosítsa az időtartományt.

![Irányítópult szűrők](../images/screenshots/hu/dashboard-filter.png)

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A **Felhasználó** szűrő csak az adminisztrátorok számára látható a webes verzióban. A hagyományos felhasználók nem látják ezt a szűrőt, és az asztali alkalmazásban sem érhető el.

<br/>

<a id="dashboard-tabs"></a>
### Irányítópult fülek

- Az **Összegzés** általános áttekintést nyújt a használatról és a költségekről.
- **Használat szerint** nyelvi fordításonként, átírás módokonként és átalakítási sablononként bontja az adatokat.
- **Modell szerint** megjeleníti, mely modelleket használta, és azok mennyibe kerültek.
- **Naponként** a napi összesített értékeket jeleníti meg.
- **Összes hívás** az összes hívásról nyújt részletes naplót, és lehetővé teszi exportálását.

<br/>

<a id="export-data"></a>
### Adatok exportálása

Az irányítópult tábláiból az alábbi formátumokban exportálható az adat:

- **JSON**
- **CSV**
- **XLSX**

Ez akkor hasznos, ha az alkalmazáson kívül is át szeretné tekinteni a tevékenységet, vagy meg szeretne osztani egy jelentést.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Modellhez tartozó tárolt rekordok törlése

A **Modell szerint** vagy **Összes hívás** fülön törölheti egy adott modell tárolt rekordjait a „kukára” kattintva.

> ⚠️ **FIGYELEM**<br/>
> A tárolt rekordok törlése visszavonhatatlan. Csak akkor használja ezt, ha biztos benne, hogy többé nem szükséges az adott előzmény.

Az összes adat törléséhez, vagy csak a meghatározott kor szerinti adatok törléséhez látogasson el a [**Beállítások** > **Költségnkövetés**](#cost-tracking) menüpontra. Ott találhatók azok a beállítások, amelyekkel törölheti az összes tárolt adatot, vagy csak az adott dátumnál régebbi adatokat.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Előzmények

Kattintson az **Előzmények** pontra, hogy megtekintse a **Transrewrt** belső tevékenységeinek naplóját, beleértve az egyes műveletek bemeneti és kimeneti adatait.

![Előzmények oldal](../images/screenshots/hu/history.png)

<br/>

<a id="filter-the-history"></a>
### Az előzmények szűrése

Az **Előzmények** ugyanazokat a szűrőket használják, mint az **Irányítópult** oldal. Használja ezeket az időtartomány kiválasztásához.

![Irányítópult szűrők](../images/screenshots/hu/dashboard-filter.png)

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A **Felhasználó** szűrő csak az adminisztrátorok számára látható a webes verzióban. A hagyományos felhasználók nem látják ezt a szűrőt, és az asztali alkalmazásban sem érhető el.

<br/>

<a id="export-history-data"></a>
### Előzményadatok exportálása

Az előzmények oldalról szűrt adatok exportálhatók a következő formátumokban:

- **JSON**
- **CSV**
- **XLSX**

Ez akkor hasznos, ha az alkalmazáson kívül is át szeretné tekinteni a tevékenységet, vagy meg szeretne osztani egy jelentést.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Beállítások

Nyissa meg a **Beállításokat** az oldalsávon, hogy testre szabja az alkalmazás működését.

A rendelkezésre álló fülek függnek a platformtól és a felhasználói szerepkörtől:

  | Fül               | Asztali | Web (admin) | Web (rendszeres felhasználó) |
  |-------------------|:-------:|:-----------:|:----------------------------:|
  | Általános beállítások |   igen   |     igen     |            igen               |
  | Modellek            |   igen   |     igen     |            igen               |
  | Nyelvek             |   igen   |     igen     |            igen               |
  | Költségkövetés      |   igen   |     igen     |             —                 |
  | Átalakítási sablonok |   igen   |     igen     |            igen               |
  | Felhasználók        |    —    |     igen     |             —                 |
  | API konfiguráció    |   igen   |     igen     |             —                 |
  | Névjegy             |   igen   |     igen     |            igen               |

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A webes verzióban minden felhasználó saját konfigurációval rendelkezik. A kiválasztott modellek, nyelvek, általános beállítások és átalakítási sablonok a rendszerben felhasználónként kerülnek tárolásra. A módosításai nem hatnak más felhasználók beállításaira.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Általános beállítások

Az **Általános beállítások** segítségével szabályozhatja a gépelés viselkedését, hogy eldöntse, tárolja-e az **Előzmények** megjelenítéséhez a végrehajtási részleteket, valamint befolyásolhatja a kinézetet.

**Viselkedés**

- **ENTER viselkedése** kiválasztja, hogy az `Enter` billentyű futtassa-e a feladatot, vagy új sort kezdjen.
- **Automatikus lefordítás beillesztéskor** azonnal elindítja a lefordítást, amint szöveget illeszt be.
- **Eredmény automatikus másolása a vágólapra** automatikusan másolja a sikeres eredményeket.
- **Valós idejű fordítás (gépelés közben)** gépelés közben fordít.
- **Időtúllépés (ms)** beállítja a várakozási időt a valós idejű fordításhoz.

**Előzmények**

- **Végrehajtási előzmények megőrzése** dönti el, hogy minden lefordítás, átírás és átalakítás elmenti-e a **bemeneti és kimeneti szöveget** az oldalsávon megjelenő [**Előzmények**](#history) nézethez. Ha kikapcsolja, megerősítést kér; ha megerősíti, a tárolt előzmények szövege eltávolításra kerül az adatbázisból.
- **Előzményadatok törlése** lehetővé teszi a tárolt szöveg törlését kor alapján (pl. néhány hónapnál régebbi, vagy **összes adat (törlés)**) a **Töröl adatokat** beállítással. Ez csak a mentett végrehajtási szövegre vonatkozik az **Előzmények** nézethez; **nem** törli a költség- vagy használati összesítőket. A **költség**adatok eltávolításához vagy csonkolásához használja a [**Beállítások** > **Költségnyilvántartás**](#cost-tracking) lehetőséget.

**Kinézet**

- **Költségtörtek számjegyei** megváltoztatja, hogyan jelennek meg a költségadatok tizedesjegyei.
- **Csak webes:** **távolság kialakítása az alkalmazás köré** extra teret ad az interfész körül.
- **Betűtípus** megváltoztatja a betűtípust a szövegdobozokban.
- **Méret** megváltoztatja a betűméretet.


<br/>

<a id="models"></a>
### Modellek

A **Beállítások** > **Modellek** segítségével választhatja ki, hogy mely modellek jelenjenek meg az eszköztáron.

![Beállítások – Modellek lap](../images/screenshots/hu/settings-models.png)

Az oldalon két lista található:

- **Elérhető modellek** a bal oldalon
- **Kiválasztott modellek** a jobb oldalon

Hasznos vezérlők:

- **Modellek keresése...** név alapján keresi meg a modelleket
- **Szolgáltató** címkék az egyik motorra (OpenRouter, OpenAI, Ollama, …) szűkítik a listát
- **Csak ingyenes** csak az ingyenes modelleket jeleníti meg
- **Frissítés** újratölti a listát
- **Összes kibontása** és **Összes összehúzása**, amikor szolgáltató szerint rendez

A modell-azonosítók tartalmazzák a szolgáltató előtagját (pl. `openrouter/…` és `openai/…`). Jelzések, mint **OpenAI (OpenRouter)** vagy **OpenAI (közvetlen)** mutatják, hogyan irányítják a forgalmat.

Műveletek:

 - Modell hozzáadásához kattintson a **Hozzáadás** gombra vagy bárhova a bejegyzésen belül.

 - Modell eltávolításához kattintson az **X**-re a modell mellett a **Kiválasztott modellekben** vagy az **Elérhető modellek** bejegyzésénél a **Kiválasztott** felirat mellett.

 - A lista törléséhez kattintson a **Kijelölés megszüntetése** gombra. A szükséges ingyenes modell megmarad a listában.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Ha nem szeretne azonnal krediteket hozzáadni az OpenRouterhez, kezdje azzal, hogy engedélyezi az **Csak ingyenes** funkciót, és válassza ki az ingyenes modelleket (bankkártya nélkül). Használhatja az Ollama-t is, hogy helyileg futtasson modelleket API-kulcs nélkül.

<br/>

<a id="languages"></a>
### Nyelvek

Használja a **Beállítások** > **Nyelvek** lehetőséget, hogy szervezze a domban használt nyelvlistákat.

- **Legfontosabb nyelvek** kitűzött helyen jelennek meg a nyelvlista tetején a **Fordítás** és **Átalakítás** funkciókban.
- **Egyéni nyelv** segítségével hozzáadhat olyan nyelvet, amely nincs a beépített listában.

Ha hozzáad egy egyéni nyelvet, az megjelenik a nyelvkiegészítőkben a beépített lehetőségek mellett.

<br/>

<a id="cost-tracking"></a>
### Költségnyilvántartás

Használja a **Beállítások** > **Költségnyilvántartás** lehetőséget a költségek kezeléséhez.

- **Teljes költség** megjeleníti a folyamatos összesítést.
- **Érték másolása** másolja az összesítést a vágólapra.
- **Költség visszaállítása** nullázza a tárolt értéket.
- **Szinkronizálás az API-kulcs használatával** az összesítést az OpenRouter fiókja által jelentett használattal állítja egybe (csak OpenRouter).
- **API-kulcs használata** megjeleníti az OpenRouter-használat részleteit, ha elérhető.
- **Költségadatok törlése** az összes adatot eltávolítja, vagy csak a kijelölt dátumnál régebbieket.

 **Költségek nyomon követése:** Ha OpenRouter modelleket használ, az alkalmazás a valós használatot és kiadásokat mutatja az OpenRouter adatai alapján. Minden más szolgáltató esetében az alkalmazás az OpenRouter által közzétett árak alapján becsüli a költségeket. Ha nincs elérhető ár, a becslés nulla is lehet.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> **Minden költségadat csak tájékoztató jellegű, nem hivatalos számlázási kimutatás.**


<br/>

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Az adattörlés visszavonhatatlan. Adattörlés előtt mindenképpen készítsen biztonsági másolatot vagy exportálja az adatait a [**Irányítópult** > **Minden hívás**](#dashboard-tabs) menüponton keresztül, különben véglegesen elvesznek.<br/>
> Az egyes API-hívásokhoz tartozó minden előzmény is törölve lesz.


<br/>

<a id="transform-prompts"></a>

### Utasítások átalakítása

Használd az **Beállítások** > **Átalakított utasítások** lehetőséget, hogy tömeges műveleteket hajts végre az utasításokon.

Ezeket teheted meg:

- áttekinted a mentett utasításokat
- töröld az utasításokat
- importáld az utasításokat fájlból
- exportáld az utasításokat biztonsági mentéshez vagy megosztáshoz

<br/>

<a id="users"></a>
### Felhasználók

**Webes verzió: kizárólag rendszergazda számára**

A **Felhasználók** funkcióval kezelheted a felhasználói fiókokat a webes verzióban. Hozzáadhatsz felhasználókat, módosíthatod az adataikat, visszaállíthatod a jelszavukat, illetve törölheted a fiókjaikat.

<br/>

<a id="api-config"></a>
### API-beállítások

A támogatott szolgáltatók: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI és **Ollama** (helyi modellek alap URL-en keresztül). Csak az általad használt szolgáltatókat kell konfigurálnod.

**Webes alkalmazás: kizárólag rendszergazda számára**

Az API-kulcsokat a rendszer vagy Docker környezeti változókon keresztül kell beállítani — azokat nem a webes felületen adod meg. Ez az oldal megmutatja, mely szolgáltatóknál lett kulcs beállítva, és lehetővé teszi, hogy minden egyes szolgáltatót kipróbálhass a **`Teszt`** gombra kattintva.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> API-kulcs módosításához frissítened kell a környezeti változót a rendszeredben vagy a Docker konfigurációdban, majd újra kell indítani a szervert vagy a konténert.

<br/>

**Asztali alkalmazás**

Az **API-beállítások** használatával mentheted el az általad használt szolgáltatók API-kulcsait. Az Ollama esetén az API-kulcs helyett adj meg egy **alap URL-t**.

<br/>

> 💡 **Tipp** <br/>
> Ha nem szeretnél API-kulcsot használni vagy költséget fizetni, akkor [letöltheted az Ollama-t](https://ollama.com) és ingyen futtathatsz modelleket a saját gépeden. Másik lehetőséget egy ingyenes OpenRouter fiók létrehozása (bankkártya nélkül), így akár a szabadon elérhető modelleiket is használhatod.

- Csak azokat a szolgáltatókat add hozzá, amelyekre szükséged van. A **Beállítások** > **Modellek** alatt minden modell azonosítója a szolgáltató nevével kezdődik (pl. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

API-kulcs hozzáadásához írd be az értéket a szövegmezőbe és kattints a **`Mentés`** gombra. Már meglévő kulcs esetén kattints a **`Szerkesztés`** lehetőségre. A működés teszteléséhez kattints a **`Teszt`** gombra.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A jelenlegi API-kulcs értékét nem láthatod. Csak a **`Szerkesztés`** gomb segítségével cserélheted le.
> Az API-kulcsok titkosítva kerülnek tárolásra a konfigurációs fájlban.

<br/>

A részletes lépésekért az OpenRouter kulcs megszerzéséhez lásd: [API-kulcs beszerzése](#how-to-get-an-api-key-desktop-app) fentebb.

<br/>

<a id="about"></a>
### Névjegy

Az **Névjegy** fül a következőket jeleníti meg:

- az alkalmazás nevét
- a verziószámot
- a fordítás dátumát
- egy hivatkozást a projekt adattárához

<br/><br/>

<a id="common-issues"></a>
## Gyakori problémák

Ha valami nem úgy működik, ahogyan várnád, akkor ellenőrizd először az alábbi dolgokat.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Az alkalmazás nem fordít át, írja át vagy alakítja át a szöveget

Ellenőrizd, hogy:

- kiválasztottál egy modellt az eszköztáron
- legalább egy modell szerepel a [**Beállítások** > **Modellek**](#models) ablakban
- az API-beállításaid működnek

Asztali alkalmazás használatakor:

1. Nyisd meg a [**Beállítások** > **API Config**](#api-config) menüpontot.
2. Ellenőrizd, hogy legalább egy API-kulcs el lett-e mentve.
3. Kattints a **Teszt** gombra a szolgáltató mellett, hogy ellenőrizd a kulcs működését.

<br/>

<a id="the-model-list-is-empty"></a>
### A modellek listája üres

Nyisd meg a [**Beállítások** > **Modellek**](#models) menüt, és kattints a **Frissítés** gombra.

Szükség esetén:

- keress modellt
- kapcsold be a **Csak ingyenes** opciót
- adj hozzá egy vagy több modellt a **Kiválasztott modellekhez**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Az eredmény túl lassú vagy túl költséges

Próbálj ki ezek közül egyet vagy többet:

- válassz másik modellt
- használj rövidebb bemenetet
- kapcsold ki az **Irány azonnali lefordítása (gépelés közben)** lehetőséget a [**Beállítások** > **Általános beállítások**](#general-settings) menüben
- egyszerű feladatokhoz használj ingyenes modelleket (lásd: [Modellek](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Az felhasználói felület hibás nyelven jelenik meg

Kattints a gombra az [eszköztárban](#toolbar) és válaszd ki a kívánt **Felhasználói felület nyelvét**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### A szöveg túl kicsi vagy nehezen olvasható

Nyisd meg a [**Beállítások** > **Általános beállítások**](#general-settings) menüt, és módosítsd a következőket:

- **Betűtípus**
- **Méret**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Az irányítópult diagramjai üresek

Ez normális akkor, ha:

- csak **ingyenes modelleket** használsz (a költségek diagramjai üresek lesznek)
- a kiválasztott **időszűrő** nem fedi le az adott időszakot, amikor lekérések történtek — próbáld meg a **Minden** lehetőséget

Ha a diagramok továbbra is üresek a **Minden** kiválasztása után, győződj meg arról, hogy a hívások szerepelnek az [**Előzmények**](#history) vagy az **Összes hívás** fülön.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### A költség "nem elérhető" vagy helytelennek tűnik

Ha **OpenRouter**-en keresztül használ modelleket, az alkalmazás a OpenRouter által jelentett tényleges költségeket jeleníti meg.

**Más szolgáltatók** (OpenAI közvetlenül, Anthropic közvetlenül stb.) esetén a költséget az OpenRouter által közzétett árazási adatok alapján becsüljük. Ha egy modellhez nem található megfelelő ár, a költség **nem elérhetőként** fog megjelenni, és nem kerül hozzáadásra a folyó összesítéshez.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Az összesített költség nem egyezik meg a szolgáltató számlájával

Az alkalmazásban megjelenő összes költségadat **csak tájékoztató jellegű becslés**, nem hivatalos számla.

Ahhoz, hogy a teljesített összeg közelebb kerüljön a tényleges OpenRouter kiadásához, nyissa meg a [**Beállítások** > **Költségkövetés**](#cost-tracking) menüpontot, és kattintson a **Szinkronizálás az API-kulcs-használattal** lehetőségre.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Az Előzmények oldal hiányzik az oldalsávban

Lehetséges, hogy a **végrehajtási előzmények mentése** ki van kapcsolva. Nyissa meg a [**Beállítások** > **Általános beállítások**](#general-settings) menüt, és engedélyezze. Figyelem: a bekapcsolás nem állítja vissza a korábban törölt előzmények adatait.

<br/>

<a id="web-app-session-expired"></a>
### Webalkalmazás: váratlanul átirányítva a bejelentkező oldalra

Lehet, hogy lejárt a munkamenete. Jelentkezzen be újra. Ha gyakran történik meg, ellenőrizze a kiszolgáló beállításait a munkamenet élettartamával kapcsolatban.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Az irányítópult nem jelenít meg adatot más felhasználókról (web)

Csak az **adminisztrátorok** láthatnak adatokat minden felhasználóról a **Felhasználó** szűrőn keresztül. A rendes felhasználók csak a saját tevékenységüket látják – ez a funkció működési elve.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Módosítottam egy promptot, de elvesztek a változtatások

Amikor egy promptot szerkeszt, mindig kattintson a **Mentés** gombra, mielőtt a **Vissza a futtatáshoz** lehetőségre kattint.

<br/><br/>

<a id="quick-tips"></a>
## Gyors tippek

- Kezdje a [**Fordítás**](#translate) funkcióval annak ellenőrzéséhez, hogy a beállítás megfelelően működik, mielőtt áttér a [**Átírás**](#rewrite) vagy a [**Átalakítás**](#transform) funkciókra.
- Használja az [**Átírás**](#rewrite) funkciót mindennapi szövegfejlesztésre.
- Használja a [**Átalakítás**](#transform) funkciót, ha ismételhető munkafolyamatra van szüksége egy adott feladat elvégzéséhez.
- Használja a [**Irányítópultot**](#dashboard), ha nyomon akarja követni a használatot és a költségeket.
- Használja az [**Előzményeket**](#history) a korábbi műveletek és teljes bemeneti/kimeneti szövegek áttekintéséhez.
- Rendszeresen exportálja a promptokat, ha olyan promptkódot épít fel, amelyet biztonságban szeretne tartani (lásd: [Promptok átalakítása](#transform-prompts)), vagy ha meg szeretné osztani másokkal.

<br/><br/>

<a id="disclaimer"></a>
## Felelősségkizárás

A terméknevek és ikonok a hozzájuk tartozó tulajdonosok tulajdona, kizárólag azonosítási célból használjuk őket. Ez a szoftver semmilyen kapcsolatban nem áll a felsorolt márkákkal, és azok nem is támogatják azt.

<br/><br/>

<a id="license"></a>
## Licenc

Szerzői jog © 2026 Waldemar Scudeller Jr.

[Apache Licenc 2.0](LICENSE)