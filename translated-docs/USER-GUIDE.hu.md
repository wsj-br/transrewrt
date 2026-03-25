---
translated_at: "2026-03-25T21:37:40.267Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt címsor](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Felhasználói kézikönyv

<br/>

<a id="introduction"></a>
## Bevezetés

A Transrewrt három fő módon segíthet a szövegek kezelésében:

- **Fordítás** – szöveg átalakítása egyik nyelvről a másikra.
- **Átírás** – szöveg újraformázása más stílusban, például érthetőbben, rövidebben vagy formálisabban.
- **Átalakítás** – szövegek kézi utasításokkal (ún. promptokkal) történő feldolgozása mesterséges intelligencia segítségével.

<br/>

Ez az útmutató azt ismerteti, hogyan használható az alkalmazás telepítés és indítás után. A telepítési lépésekhez lásd a fő **[README](README.hu.md)** fájlt.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A Transrewrt elérhető asztali alkalmazásként Windows és Linux rendszerekhez, valamint önkiszolgáló webalkalmazásként. Ez az útmutató az alkalmazás mindennapi használatára fókuszál. Ha valamely funkció csak egyik verzióra vonatkozik, azt külön megjelöljük.

<small>**Más nyelveken olvasható:** [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Megjegyzés a felhasználói felület és a dokumentáció fordításához:** A felhasználói felület minden nyelvet, kivéve az eredeti angol (UK) verziót, mesterséges intelligenciás modellekkel fordítottuk le; ezért a szövegek pontatlanságot vagy hibákat is tartalmazhatnak.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tartalomjegyzék** 

- [Előkészületek](#before-you-start)
  - [Hogyan szerezzünk ingyenes OpenRouter API-kulcsot (asztali alkalmazás)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Első lépések](#getting-started)
- [Az ablak fő részei](#main-parts-of-the-window)
  - [Oldalsó sáv](#sidebar)
  - [Eszköztár](#toolbar)
  - [Bemeneti és kimeneti panel](#input-and-output-panels)
- [Fordítás](#translate)
  - [Szöveg fordítása](#translate-text)
  - [Nyelvválasztás](#language-selection)
  - [Hasznos beállítások a fordításhoz](#helpful-translation-settings)
- [Átírás](#rewrite)
- [Átalakítás](#transform)
  - [Létező prompt futtatása](#run-an-existing-prompt)
  - [Ha még nincsenek promptok](#if-you-have-no-prompts-yet)
  - [Gyorsan új prompt létrehozása](#create-a-prompt-quickly)
  - [Prompt szerkesztése](#edit-a-prompt)
  - [Prompt kipróbálása használat előtt](#test-a-prompt-before-using-it)
- [Irányítópult](#dashboard)
  - [Adatok szűrése](#filter-the-data)
  - [Fülek az irányítópulton](#dashboard-tabs)
  - [Adatok exportálása](#export-data)
  - [Tárolt adatok törlése modellhez](#delete-stored-records-for-a-model)
- [Előzmények](#history)
  - [Adatok szűrése](#filter-the-data-1)
  - [Előzményadatok exportálása](#export-history-data)
- [Beállítások](#settings)
  - [Általános beállítások](#general-settings)
  - [Modellek](#models)
  - [Nyelvek](#languages)
  - [Költségkövetés](#cost-tracking)
  - [Átalakító promptok](#transform-prompts)
  - [Felhasználók](#users)
  - [API-beállítások](#api-config)
  - [Névjegy](#about)
- [Gyakori problémák](#common-issues)
  - [Az alkalmazás nem végez fordítást, átírást vagy átalakítást](#the-app-will-not-translate-rewrite-or-transform-text)
  - [A modelllista üres](#the-model-list-is-empty)
  - [Az eredmény túl lassú vagy túl költséges](#the-result-is-too-slow-or-too-expensive)
  - [A felület hibás nyelven jelenik meg](#the-interface-is-in-the-wrong-language)
  - [A szöveg túl kicsi vagy nehezen olvasható](#the-text-is-too-small-or-hard-to-read)
  - [Az irányítópult diagramjai üresek](#dashboard-charts-are-empty)
  - [A költség "nem elérhető" vagy hibásnak tűnik](#cost-shows-not-available-or-seems-wrong)
  - [A teljes költség nem egyezik meg a szolgáltatói számlával](#total-cost-does-not-match-my-provider-bill)
  - [Az Előzmények oldal hiányzik az oldalsó sávból](#the-history-page-is-missing-from-the-sidebar)
  - [Webalkalmazás: váratlanul a bejelentkező oldalra irányít át](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Az irányítópult nem mutat adatokat más felhasználókról (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Egy promptot módosítottam, de elveszítettem a változtatásokat](#i-changed-a-prompt-and-lost-the-edits)
- [Gyors tippek](#quick-tips)
- [Jogi nyilatkozat](#disclaimer)
- [Licenc](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Kezdés előtt

A Transrewrt használatához legalább egy MI-szolgáltatóhoz kell hozzáférnie. A támogatott szolgáltatók: [OpenRouter](https://openrouter.ai) (amely sok modellt egyesít), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, és helyi modellekhez a [Ollama](https://ollama.com).

Nem szükséges fizetős modellt választania az indításhoz. Ahogy hozzáadja az OpenRouter API-kulcsát, az alkalmazás automatikusan engedélyezi a beépített **ingyenes** OpenRouter lehetőséget. Ez lehetővé teszi, hogy azonnal elkezdje a szövegek lefordítását, átírását és átalakítását. Alternatívaként ingyenes API-kulcsot kaphat a Cerebras, Google, Groq vagy Mistral AI szolgáltatóktól is.

Egyszerű nyelven:

- Egy **modell** az a MI-motor, amely elvégzi a munkát. A modelleket egy **szolgáltató előtaggal** soroljuk fel (például `openrouter/…`, `openai/…`, `ollama/…`).
- Egy **API-kulcs** (vagy Ollama esetén egy **alap URL**) az, amellyel az alkalmazás eléri a szolgáltatót.

Ha az **asztali alkalmazást** használja, adja hozzá az API-kulcsokat [**Beállítások** > **API-konfiguráció**](#api-config) menüpontban az Ön által használt egyes szolgáltatókhoz. Ha csak OpenRoutert használ, tekintse meg az alábbi [API-kulcs beszerzése](#how-to-get-an-api-key-desktop-app) utasításokat. Ha nem szeretne API-kulcsot használni, telepíthet Ollamát (az [ollama.com](https://ollama.com) oldalról) és helyi modelleket használhat, például a `translategemma:4b`-t.

Ha a **webes verziót** használja, akkor a kiszolgálótulajdonos környezeti változókkel konfigurálja a szolgáltatókat, ezért közvetlenül az alkalmazásban nem adhat meg API-kulcsokat.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Ingyenes OpenRouter API-kulcs beszerzése (asztali alkalmazás)

Ha az asztali alkalmazást használja, kövesse az alábbi lépéseket:

1. Látogasson el a [OpenRouter](https://openrouter.ai) oldalra webböngészőjében.
2. Hozzon létre egy fiókot vagy jelentkezzen be.
3. Nyissa meg a [Kulcsok](https://openrouter.ai/keys) oldalt.
4. Kattintson az új API-kulcs létrehozásához szükséges gombra.
5. Adjon egy nevet a kulcsnak, hogy később felismerje.
6. Másolja ki az új API-kulcsot.
7. Térjen vissza a Transrewrt alkalmazáshoz, majd nyissa meg a **Beállítások** > **API-konfiguráció** lehetőséget.
8. Illessze be a kulcsot az **OpenRouter API-kulcs** mezőbe (**Beállítások** > **API-konfiguráció**).
9. Kattintson a **OpenRouter kulcs tesztelése** gombra, hogy ellenőrizze az érvényességét.

<br/><br/>

<a id="getting-started"></a>
## Első lépések

Ha először használja a Transrewrt-t, kövesse az alábbi sorrendet:

1. Indítsa el az alkalmazást.
2. Ha szükséges, válassza ki a **Felhasználói felület nyelvét** a földgömb ikonról.
3. Ha az **asztali alkalmazást** használja, nyissa meg a [**Beállítások** > **API-konfiguráció**](#api-config) lehetőséget, adjon hozzá legalább egy szolgáltatóhoz API-kulcsot (például OpenRouter), majd kattintson a **Teszt** gombra az ellenőrzéshez.
4. Nyissa meg a [**Beállítások** > **Modellek**](#models) menüpontot, és adjon hozzá egy vagy több modellt a **Kiválasztott modellekhez**.
5. Nyissa meg a [**Beállítások** > **Nyelvek**](#languages) menüt, és válassza ki a **Legfontosabb nyelveket**, ha a gyakran használt nyelvei elsőként szeretné látni.
6. Menjen a **Fordítás** művelethez, és hajtson végre egy egyszerű fordítást, hogy ellenőrizze, minden megfelelően működik-e.
7. Ha ez sikerült, próbálja ki az **Átírás** és azután a **Átalakítás** lehetőségeket.

Ennek a sorrendnek jelentősége van. Megelőzi a leggyakoribb első használatkor jelentkező problémát: hogy feladat futtatására kísérelné meg, mielőtt az alkalmazásnak működő API-kapcsolata vagy kiválasztott modellje lenne.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Az ablak fő részei

Az alkalmazás három fő részre oszlik:

- A bal oldalon lévő **oldalsáv**.
- A tetején lévő **eszköztár**.
- A középső **munkaterület**.

<br/>

<a id="sidebar"></a>
### Oldalsáv

Az oldalsáv segítségével mozoghat az alkalmazásban. Az oldalsáv összezárható, hogy több helyet kapjon, ehhez kattintson az alkalmazáslogó melletti ikonra.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/hu/sidebar.png" alt="Alkalmazás oldalsáv" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Fordítás</strong> megnyitja a fordítási munkaterületet.</li><br/>
        <li><strong>Átírás</strong> megnyitja az újraírási munkaterületet.</li><br/>
        <li><strong>Átalakítás</strong> megnyitja az egyéni prompt munkaterületet.</li><br/>
        <li><strong>Irányítópult</strong> megjeleníti a felhasználási és költséginformációkat.</li><br/>
        <li><strong>Beállítások</strong> megnyitja a beállítások panelt.</li><br/>
        <li><strong>Előzmények</strong> megjeleníti a használati előzményeket a bemeneti és kimeneti szöveggel</li><br/>
        <li><strong>Felhasználó</strong> megjeleníti a bejelentkezett felhasználó nevét (csak webes verzió).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Eszköztár

Az eszköztár kis mértékben megváltozik attól függően, hogy hol tartózkodik az alkalmazásban.

- A bal oldalon az aktuális oldal neve jelenik meg.
- A jobb oldalon a **modellválasztó** és az **interfésznyselv** beállítás található.

A **modellválasztó** segítségével kiválaszthatja, hogy melyik MI motort használja az aktuális feladathoz.

  ![Modellválasztó](../images/screenshots/hu/model-selector.png)

Egyes ingyenes modellek nem minden esetben érhetőek el – előfordulhat, hogy éppen offline állapotban vannak, vagy használati korlátot értek el. Ha ilyesmi történik, az alkalmazás automatikusan eltávolítja az adott modellt a rendelkezésére álló lista elemei közül. A megjelenő modellek ellenőrzéséhez lépjen a [**Beállítások > Modellek**](#models) menüponthoz, és szerkessze modelllistáját.  
A modellbeállításokat közvetlenül is megnyithatja a modell neve melletti szolgáltató ikonra kattintva az eszköztáron.

<br/>

A **földgömb ikon + nyelvi kód** az alkalmazás felhasználói felületének nyelvét változtatja meg, például a menükét és gombokét. **Nem** befolyásolja a fordításhoz használt nyelveket a **Fordítás** funkcióban.

  ![Nyelvválasztó az interfészhez](../images/screenshots/hu/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Bemeneti és kimeneti panel

A legtöbb munkaterület bal oldalon található **Bemeneti** és jobb oldalon lévő **Kimeneti** panelt használ.

Mindegyik panel az alábbiakat is mutatja:

| **Bemenet**                                                          | **Kimenet**                                                                                                                  |
|----------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| - Karakterek száma <br/>- Szavak száma <br/>- Bekezdések száma    | - A feladat végrehajtásához szükséges idő <br/>- **TPS** (tokenek másodpercenként) <br/>- Karakter-, szó- és bekezdésszámok <br/>- A használt modell |


Ha technikai kifejezések zavarnak:

- **Token** egy kis szövegrészletet jelent. Képzeljen el egy részét egy szónak, vagy egy rövid szót.
- **TPS**: egy másodperc alatt feldolgozott szövegrészletek száma.

<br/>

A műveletenkénti költséget (ha elérhető), valamint az összesített költséget is figyelemmel kísérheti, ha engedélyezi a `Műveletek költségeinek megjelenítése` opciót a [**Beállítások > Általános beállítások**](#general-settings) menüpontban.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Fordítás

Használja a **Fordítás** funkciót, amikor szöveget szeretne konvertálni egyik nyelvről a másikra.

![Fordítás munkaterület](../images/screenshots/hu/translate.png)

<br/>

<a id="translate-text"></a>
### Szöveg fordítása

1. Nyissa meg a **Fordítás** lehetőséget.
2. Válasszon nyelvet a **Forrás** mezőben.
3. Válasszon nyelvet a **Cél** mezőben.
4. Válasszon modellt az eszköztáron.
5. Írjon be szöveget, vagy illessze be a **Bemeneti mezőbe**.
6. Kattintson a **Fordítás** gombra.
7. Olvassa el az eredményt a **Kimenetben**.
8. Használja a másolás gombot, ha másolni szeretné az eredményt.

<br/>

<a id="language-selection"></a>
### Nyelvválasztás

- A **Forrás** lehet egy adott nyelv, vagy a **Nyelv felismerése** opció.
- A **Cél** az a nyelv, amelyre le szeretné fordítani a szöveget.

A kiválasztott **Legfontosabb nyelvek** a lista tetején jelennek meg. Ezeket beállíthatja a [**Beállítások > Nyelvek**](#languages) menüpontban.

<br/>

<a id="helpful-translation-settings"></a>
### Hasznos fordítási beállítások

A [**Beállítások > Általános beállítások**](#general-settings) menüpontban módosíthatja a fordítás működését:

- A **Fordítás illesztéskor automatikusan** bekapcsolása esetén a fordítás akkor indul el, amikor szöveget illeszt be.
- A **Másolás az eredményről a vágólapra automatikusan** beállítás az eredményt automatikusan a vágólapra másolja sikeres végrehajtás után.
- Az **Azonnali fordítás (írás közben)** lehetővé teszi a fordítást gépelés közben.
- A **Időtúllépés (ms)** azt szabályozza, mennyi ideig várjon az alkalmazás az azonnali fordítás elindítása előtt.
- A **Enter** határozza meg, mi történjen az `Enter` billentyű megnyomásakor:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Újraírás

Használja az **Újraírás** funkciót, ha szeretné javítani a szöveg megfogalmazását, anélkül hogy megváltoztatná az alapvető jelentését.

![Újraírás munkaterület](../images/screenshots/hu/rewrite.png)

Ez az alábbi esetekben hasznos:

- helyesírási és nyelvtani hibák javítása
- a szöveg érthetőbbé tétele
- a szöveg formálisabbá vagy laza, informálisabbá tétele
- a szöveg lerövidítése vagy bővítése
- a szöveg technikaiabbá tétele

<br/>

> 💡 **TIPP**<br/>
> Ha a "**Helyesírás és nyelvtan ellenőrzése**" üzemmódot használja, a kimeneti panelen megjelenik a `Változások megjelenítése` gomb.
> Kattintson erre a gombra, hogy kapcsolja a javítások megjelenítését, és így mutassa vagy rejtse el a szöveggel kapcsolatos konkrét módosításokat.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Átalakítás

Használja az **Átalakítás** funkciót, ha azt szeretné, hogy a mesterséges intelligencia egyéni utasításokat kövessen.

![Átalakítás munkaterület](../images/screenshots/hu/transform.png)

Ez az alkalmazás legtöbbféleképpen használható része. Olyan feladatokra használható, mint:

- jegyzetek összegzése
- vázlatos szöveg finomítása professzionális e-mail-lé
- kulcsfontosságú pontok kinyerése
- szöveg átalakítása meghatározott formátumba
- bármilyen más szövegfeldolgozó egyéni tevékenység

<br/>

<a id="run-an-existing-prompt"></a>
### Meglévő utasítás futtatása

1. Nyissa meg az **Átalakítás** funkciót.
2. Válasszon ki egy utasítást az utasításlistából.
3. Ha megjelenik a **Cél** nyelv mező, válasszon ki egy nyelvet, ha szeretne.
4. Írja be vagy másolja be a szöveget az **Eredeti szöveg** mezőbe.
5. Kattintson az **Átalakítás** gombra.
6. Olvassa el az eredményt a **Kimenet** mezőben.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Ha még nincsenek utasításai

Ha az utasításlistája üres, kattintson a **Minta utasítások betöltése** lehetőségre. Ez hozzáad beépített példákat, így gyorsan elkezdheti a használatot.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A mintautasítások angol nyelven kerülnek megadásra. A betöltés után bármelyik utasítást szerkesztheti, majd a **Lekérés lefordítása** funkcióval átfordíthatja saját nyelvére.

<br/>

<a id="create-a-prompt-quickly"></a>
### Új utasítás gyors létrehozása

A leghatékonyabb módja egy új utasítás létrehozására:

1. Kattintson az **Új utasítás** gombra.
2. Kattintson a **Lekérés generálása** gombra.
3. Írja le, mit szeretne, hogy az utasítás elvégezzen.
4. Válasszon ki egy modellt.
5. Hagyja, hogy az alkalmazás vázlatot készítsen Önnek.
6. Nézze át a vázlatot, majd kattintson a **Mentés** gombra.

![Lekérés generálása](../images/screenshots/hu/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Utasítás szerkesztése

Amikor létrehoz vagy szerkeszt egy utasítást, a szerkesztő a bal oldalon jelenik meg, egy tesztpanel pedig a jobb oldalon.

![Átalakítás utasításszerkesztő](../images/screenshots/hu/transform-prompt-edit.png)

A fő mezők a következők:

- **Utasítás neve**: a neve, amely megjelenik az utasításlistában.
- **Utasítás részletei (nem kötelező)**: egy rövid tipp, amely megjelenik a felhasználónak az utasítás futtatásánál.
- **Modell szerepe**: a mesterséges intelligencia által betöltendő szerep, például „Hasznos segéd vagyok.”
- **Modell utasításai (soronként egy)**: azok az adott szabályok, amelyeket a MI-nek követnie kell.
- **Kimenet leírása**: egy rövid szó, amely az eredményt írja le, például „összegzés” vagy „újrafogalmazás”.
- **Hőmérséklet (0,0 → 1,0)**: a modell viselkedésének mértéke; lásd alább.
- **Cél nyelv kérése**: nyelvválasztó mezőt ad az utasításhoz futtatáskor.

Ha az ismeretlen technikai kifejezés a **Hőmérséklet**, akkor így értelmezheti:

- Az **alacsonyabb** hőmérséklet stabilabb, megjósolhatóbb eredményt eredményez.
- A **magasabb** hőmérséklet több változatosságot és kreativitást eredményez.

Használható még:

- **`Lekérés generálása`**, hogy új vázlatot hozzon létre egyszerű leírásból
- **`Lekérés fejlesztése`**, hogy meglévő utasítást finomítson
- **`Lekérés lefordítása`**, hogy az utasítás mezőit lefordítsa

<br/>

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Kattintson a **`Mentés`** gombra, mielőtt a **`Vissza a Futtatáshoz`** gombra kattint. Ha mentés nélkül tér vissza, a változtatások elvésznek.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Teszteljen egy utasítást használat előtt

A jobb oldali tesztpanel lehetővé teszi, hogy próbaverzióban kipróbálja az utasítását, még mielőtt teljes munkaidőben alkalmazná.

Akkor hasznos, ha:

- új utasítást készít
- két utasításváltozatot hasonlít össze
- hangnemet, hosszt vagy kimeneti formátumot szeretne ellenőrizni

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Exportálhatja és importálhatja a mentett utasításokat a [**Beállítások** > **Átalakítás utasítások**](#transform-prompts) menüpont alatt.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Vezérlőpult

Használja a **Vezérlőpultot**, hogy követhesse az alkalmazás felhasználását és a költségeket (f fizetős modellek esetén).

![Vezérlőpult összefoglaló](../images/screenshots/hu/dashboard-summary.png)


<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Ha csak ingyenes modelleket használ, a költségekkel kapcsolatos diagramok üresek maradnak.

<br/>

<a id="filter-the-data"></a>
### Adatok szűrése

A felső szűrőgombokkal módosíthatja az időintervallumot.

![Vezérlőpult szűrők](../images/screenshots/hu/dashboard-filter.png)

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A **Felhasználó** szűrő csak a webes verzióban lévő rendszergazdák számára látható. A rendes felhasználók nem látják ezt a szűrőt, és az asztali alkalmazásban sem érhető el.

<br/>

<a id="dashboard-tabs"></a>

### Irányítópult fülek

- A **Összegzés** áttekintést nyújt a használatról és a költségekről.
- Az **Usage szerint** fül a tevékenységet lebontja fordítási nyelvenként, átírási módonként és átalakítási sablononként.
- A **Model szerint** fül megjeleníti, mely modelleket használtad, és azok mennyibe kerültek.
- A **Nap szerint** fül napi összesítéseket mutat.
- Az **Összes hívás** fül a teljes hívásnaplót jeleníti meg, és lehetővé teszi annak exportálását.

<br/>

<a id="export-data"></a>
### Adatok exportálása

Az irányítópult táblái exportálhatják az adatokat a következő formátumokban:

- **JSON**
- **CSV**
- **XLSX**

Ez akkor hasznos, ha az alkalmazáson kívül szeretné ellenőrizni a tevékenységet, vagy ha szeretne megosztani egy jelentést.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Modellhez tartozó mentett rekordok törlése

A **Model szerint** vagy az **Összes hívás** fülön eltávolíthatja adott modellhez tartozó mentett rekordokat a "kukára" kattintva.

> ⚠️ **FIGYELEM**<br/>
> A mentett rekordok törlése visszavonhatatlan. Csak akkor használja ezt, ha biztosan már nincs szüksége a történetre.

Az összes adat törléséhez vagy a lejárt rekordok eltávolításához lépjen a [**Beállítások** > **Költségkövetés**](#cost-tracking) menüponthoz. Itt talál lehetőséget arra, hogy törölje az összes tárolt adatot, vagy csak a meghatározott dátumnál idősebb adatokat.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Előzmények

Kattintson az **Előzmények** elemre a **Transrewrt** belüli műveletei előzményeinek megtekintéséhez, beleértve az egyes műveletek bemeneti és kimeneti adatait.

![Előzmények oldal](../images/screenshots/hu/history.png)

<br/>

<a id="filter-the-history"></a>
### Adatok szűrése

Az **Előzmények** ugyanazokat a szűrőket használja, mint az **Irányítópult** oldal. Használja őket az időtartomány kiválasztásához.

![Irányítópult szűrők](../images/screenshots/hu/dashboard-filter.png)

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A **Felhasználó** szűrő csak az internetes verzióban látható az adminisztrátorok számára. Átlagos felhasználók nem látják ezt a szűrőt, és az asztali alkalmazásban sem érhető el.

<br/>

<a id="export-history-data"></a>
### Előzmények adatainak exportálása

Az előzmények oldal exportálhatja a szűrt adatokat a következő formátumokban:

- **JSON**
- **CSV**
- **XLSX**

Ez akkor hasznos, ha az alkalmazáson kívül szeretné ellenőrizni a tevékenységet, vagy ha szeretne megosztani egy jelentést.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Beállítások

Nyissa meg a **Beállításokat** az oldalsávon, hogy testre szabja az alkalmazás viselkedését.

A rendelkezésre álló fülek a platformtól és a szerepkörétől függnek:

  | Fül               | Asztali | Web (admin) | Web (átlagos felhasználó) |
  |-------------------|:-------:|:-----------:|:------------------------:|
  | Általános beállítások  |   igen   |     igen     |           igen             |
  | Modellek            |   igen   |     igen     |           igen             |
  | Nyelvek             |   igen   |     igen     |           igen             |
  | Költségkövetés      |   igen   |     igen     |            —               |
  | Átalakítási sablonok |   igen   |     igen     |           igen             |
  | Felhasználók        |    —    |     igen     |            —               |
  | API Beállítások     |   igen   |     igen     |            —               |
  | Névjegy             |   igen   |     igen     |           igen             |

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A webes verzióban minden felhasználó saját beállításokkal rendelkezik. A kiválasztott modellek, nyelvek, általános beállítások és átalakítási sablonok felhasználónként kerülnek tárolásra. A végzett módosítások nem befolyásolják más felhasználók beállításait.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Általános beállítások

Az **Általános beállítások** segítségével szabályozhatja a gépelés viselkedését, hogy a végrehajtási részletek tárolásra kerüljenek-e az **Előzmények** számára, valamint megjelenési beállításokat állíthat be.

**Viselkedés**

- A **ENTER viselkedése** határozza meg, hogy az `Enter` gomb végrehajtja-e a feladatot vagy új sort szúr be.
- **Automatikus fordítás beillesztéskor**: a szöveg beillesztésekor azonnal elindítja a fordítást.
- **Eredmény automatikus másolása a vágólapra**: sikeres eredmény esetén automatikusan másolja az eredményt a vágólapra.
- **Valós idejű fordítás (gépelés közben)**: gépelés közben fordít.
- **Időtúllépés (ms)**: beállítja az időtartamot a valós idejű fordításhoz.

**Előzmények**

- **Műveletelőzmények megőrzése**: szabályozza, hogy a fordítási, átírási és átalakítási műveletek bemeneti és kimeneti szövegét tárolja-e az oldalsáv [**Előzmények**](#history) nézete számára. Ha kikapcsolja, megerősítést kér; ha megerősíti, a tárolt előzmények szövege törlődik az adatbázisból.
- **Előzményadatok törlése**: lehetővé teszi a tárolt szöveg törlését kor alapján (például néhány hónapnál régebbi, vagy **az összes adat törlése (teljesen)**) a **Törlés adatok** gomb használatával. Ez csak a mentett végrehajtási szöveget érinti az **Előzmények** nézethez; **nem** törlődnek a költségek vagy használati összesítések. A **költség**adatok törléséhez vagy csonkolásához használja a [**Beállítások** > **Költségkövetés**](#cost-tracking) lehetőséget.

**Megjelenés**

- **Költséginformációk megjelenítése a műveleteknél**: szabályozza a műveletenkénti költségek (ha elérhető), illetve a teljes költség megjelenését a Fordítás, Átírás és Átalakítás kimeneti paneljein.
- **Költség tizedesjegyek száma**: módosítja a költségek tizedesjegyek megjelenítését.
- **Csak weben:** **távolság a program szélei között** további teret ad az interfész körül.
- **Betűtípus**: megváltoztatja a szövegpanelek betűtípusát.
- **Méret**: megváltoztatja a betűméretet.

<br/>

<a id="models"></a>

### Modellek

Használja a **Beállítások** > **Modellek** menüpontot ahhoz, hogy kiválassza, mely modellek jelenjenek meg az eszköztáron.

![Beállítások: Modellek lap](../images/screenshots/hu/settings-models.png)

Az oldal két listát jelenít meg:

- **Elérhető modellek** (bal oldalon)
- **Kiválasztott modellek** (jobb oldalon)

Hasznos vezérlőelemek:

- **Modellek keresése...** név alapján
- **Szolgáltató** címkék a listának szűkítéséhez egyetlen motorra (OpenRouter, OpenAI, Ollama, stb.)
- **Csak ingyenes** csak az ingyenes modelleket jeleníti meg
- **Frissítés** újratölti a listát
- **Összes kibontása** és **Összes összecsukása**, ha szolgáltató szerint rendez
 
A modellek azonosítói tartalmazzák a szolgáltató előtagját (például `openrouter/…` vs `openai/…`). Címkék, mint például **OpenAI (OpenRouter)** és **OpenAI (közvetlen)** megmutatják, hogyan irányítják a forgalmat.

> ℹ️ **MEGJEGYZÉS**<br/>
> Az **OpenRouter Body Builder** (`openrouter/bodybuilder`) egy útválasztó modell, nem általános csevegőmodell: az OpenRouter API kérés törzsét adja vissza JSON formátumban (például egy `requests` tömb `model` és `messages` mezőkkel). Ha ezt a modellt használja **Fordításra**, **Átírásra** vagy **Átalakításra**, a kimeneti ablakban ezt a JSON-t fogja látni, nem pedig kész szöveget. Ezen feladatokhoz válasszon normál szöveges modellt. További információ az OpenRouter [Body Builder modell oldalán](https://openrouter.ai/openrouter/bodybuilder).

Műveletek:

 - Egy modell hozzáadásához kattintson a **Hozzáadás** gombra, vagy bárhova az adott sorba.

 - Egy modell eltávolításához kattintson az **X** ikonra a **Kiválasztott modellek** mellett, vagy a **Kiválasztott** jelzésre az Elérhető modellek listájában.

 - A lista törléséhez kattintson **Összes kiválasztás megszüntetése**. A szükséges ingyenes modell ekkor is megmarad a listán.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Ha nem szeretne azonnal hiteleket hozzáadni az OpenRouter fiókjához, kezdje az **Csak ingyenes** lehetőség engedélyezésével, és válassza ki az ingyenes modelleket (bankkártya nélkül is használhatók). Az Ollama segítségével helyileg is futtathat modelleket API-kulcs nélkül.

<br/>

<a id="languages"></a>
### Nyelvek

Használja a **Beállítások** > **Nyelvek** menüpontot a nyelvi listák rendszerezésére az alkalmazásban.

- **Leggyakoribb nyelvek** legfelül maradnak a nyelvi listákban a **Fordítás** és **Átalakítás** részeknél.
- **Egyéni nyelv** lehetővé teszi, hogy olyan nyelvet adjon hozzá, amely nincs a beépített listában.

Ha egyéni nyelvet ad hozzá, az meg fog jelenni a nyelvválasztókban a beépített lehetőségek mellett.

<br/>

<a id="cost-tracking"></a>
### Költségkövetés

Használja a **Beállítások** > **Költségkövetés** menüpontot a költséginformációk kezeléséhez.

- **Teljes költség** megjeleníti a futó összeget.
- **Érték másolása** a vágólapra másolja az összeget.
- **Költség nullázása** a tárolt összeget nullára állítja.
- **Szinkronizálás az API-kulcs használattal** a teljes költséget az OpenRouter fiókja által jelentett felhasználáshoz igazítja (csak OpenRouter).
- **API-kulcs használat** megjeleníti az OpenRouter használat részleteit, ha elérhető.
- **Költségadatok törlése** az összes adatot törli, vagy csak az adott dátumnál régebbi bejegyzéseket.

**Költségkövetés**: Ha OpenRouter modelleket használ, az alkalmazás a valós felhasználást és kiadásokat jeleníti meg az OpenRouter által megadott költségadatok alapján. Minden más szolgáltató esetén az alkalmazás az OpenRouter által közzétett árak alapján becsli a költségeket; ha nincs elérhető ár, a becslés lehet nulla.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> **Minden költségadat csak tájékoztató jellegű becslés, nem hivatalos számlázási kimutatás.**

<br/>

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Az adatok törlése végleges, nem vonható vissza. A törlés előtt készítsen biztonsági másolatot, vagy exportálja az adatait a [**Előzmények**](#history) vagy a [**Műszerfal** > **Minden hívás**](#dashboard-tabs) menüponton keresztül, különben az adatok örökre elvesznek. Az egyes API-hívásokhoz kapcsolódó minden bemeneti és kimeneti előzmény is törlődik.

<br/>

<a id="transform-prompts"></a>
### Átalakító promptok

Használja a **Beállítások** > **Átalakító promptok** menüpontot a promptok tömeges kezeléséhez.

Lehetőségei:

- Mentett promptjai áttekintése
- Promptok törlése
- Promptok importálása fájlból
- Promptok exportálása biztonsági mentéshez vagy megosztáshoz

<br/>

<a id="users"></a>
### Felhasználók

A **Felhasználók** lehetőséggel webes verzióban kezelheti a felhasználói fiókokat. Felhasználókat adhat hozzá, frissítheti az adataikat, visszaállíthatja a jelszavaikat, és törölheti a fiókokat.

<br/>

<a id="api-config"></a>
### API-beállítás

A támogatott szolgáltatók: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, valamint **Ollama** (helyi modellek alap URL-cím segítségével). Csak azokat a szolgáltatókat kell beállítania, amelyeket használ.

**Webes alkalmazás: csak rendszergazdák számára**

Az API-kulcsokat rendszer- vagy Docker-környezeti változókban kell beállítani – a webes felületen nem lehet manuálisan megadni őket. Ezen az oldalon látható, mely szolgáltatóknak van beállított kulcsa, és az egyes szolgáltatók tesztelhetők a **`Teszt`** gomb megnyomásával.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Egy API-kulcs módosításához frissítenie kell a környezeti változót a rendszerében vagy a Docker-konfigurációban, majd újra kell indítania a szervert vagy a tárolót.

<br/>

**Asztali alkalmazás**

Használja az **API-beállítás** lehetőséget az egyes szolgáltatók API-kulcsainak tárolásához. Az Ollama esetén nem API-kulcsot, hanem a **bázis URL-címet** kell megadni.

<br/>

> 💡 **Tipp** <br/>
> Ha nem szeretne API-kulcsot használni vagy fizetni a használatért, letöltheti az [Ollama](https://ollama.com) programot, és futtathat modelljeit (pl. `translategemma:4b`) ingyen a gépén. Másik lehetőségként regisztrálhat ingyenes OpenRouter-fiókot (bankkártya nélkül), és használhatja az ingyenes modelleiket, vagy kérhet ingyenes API-kulcsot a Cerebras-tól, Google-tól, Groq-tól vagy a Mistral AI-tól.

<br/>

- Csak azokat a szolgáltatókat adjon hozzá, amelyekre szüksége van. A **Beállítások** > **Modellek** menüben minden modell azonosítója a szolgáltató nevével kezdődik (például `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

API-kulcs hozzáadásához írja be az értékét a szövegdobozba, és kattintson a **`Mentés`** gombra. Egy meglévő kulcs lecseréléséhez kattintson **`Szerkesztés`**. Annak ellenőrzéséhez, hogy a kulcs megfelelően működik-e, kattintson a **`Teszt`** gombra. Az Ollama bázis URL-je esetében mindig kattintson a **`Teszt`** gombra a kapcsolat ellenőrzéséhez.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A jelenlegi API-kulcs értékét nem tekintheti meg. Csupán a **`Szerkesztés`** gomb használatával cserélheti le.
> Az API-kulcsok titkosítva kerülnek tárolásra a beállításokban.

<br/>

<a id="about"></a>

### Névjegy

Az **Névjegy** fül a következőket jeleníti meg:

- az alkalmazás nevét
- a verziószámot
- a build dátumát
- egy hivatkozást a projekt adattárához

<br/><br/>

<a id="common-issues"></a>
## Gyakori problémák

Ha valami nem úgy működik, ahogy várná, először nézze át az alábbi pontokat.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Az alkalmazás nem fordít, nem írja újra vagy alakítja át a szöveget

Ellenőrizze, hogy:

- kiválasztott-e egy modellt az eszköztáron
- legalább egy modell szerepel-e a [**Beállítások** > **Modellek**](#models) menüpontban
- az API-beállítás megfelelően működik-e

Ha az asztali alkalmazást használja:

1. Nyissa meg a [**Beállítások** > **API konfiguráció**](#api-config) menüt.
2. Ellenőrizze, hogy legalább egy API-kulcs el van-e mentve.
3. Kattintson a szolgáltatónál található **Teszt** gombra, hogy megerősítse a kulcs működését.

<br/>

<a id="the-model-list-is-empty"></a>
### A modelllista üres

Nyissa meg a [**Beállítások** > **Modellek**](#models) menüt, és kattintson a **Frissítés** gombra.

Ha szükséges:

- keressen egy modellt
- kapcsolja be az **Csak ingyenes** opciót
- adjon hozzá egy vagy több modellt a **Kiválasztott modellekhez**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Az eredmény túl lassú vagy túl költséges

Próbálja ki az alábbiak bármelyikét:

- válasszon másik modellt
- használjon rövidebb bemenetet
- kapcsolja ki a **Valós idejű fordítás (beírás közben)** funkciót a [**Beállítások** > **Általános beállítások**](#general-settings) menüpontban
- használjon ingyenes modelleket egyszerű feladatokhoz (lásd: [Modellek](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Az interfész rossz nyelven jelenik meg

Kattintson a világtérkép ikonra az [eszköztáron](#toolbar), és válassza ki a kívánt **Interfésznnyelvet**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### A szöveg túl kicsi vagy nehéz olvasni

Nyissa meg a [**Beállítások** > **Általános beállítások**](#general-settings) menüt, és módosítsa a következőket:

- **Betűtípus**
- **Méret**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Az irányítópult diagramjai üresek

Ez normális, ha:

- csak **ingyenes modelleket** használ (az árakat tartalmazó diagramok üresek maradnak)
- a kiválasztott **időszűrő** nem fedi le azokat az időszakokat, amikor kérelmeket küldtek – próbálja ki az **Összes** lehetőséget ellenőrzés céljából

Ha a diagramok továbbra is üresek az **Összes** kiválasztása után is, ellenőrizze, hogy megjelenik-e hívás a [**Előzmények**](#history) menüben vagy az **Összes hívás** fülön.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Az ár "nem elérhető" vagy helytelennek tűnik

Ha **OpenRouter** segítségével használ modelleket, az alkalmazás az OpenRouter által jelentett tényleges kiadását jeleníti meg.

Más szolgáltatók (OpenAI közvetlen kapcsolaton, Anthropic közvetlenül stb.) esetén az ár a nyilvánosan elérhető, OpenRouter által közzétett árlista alapján becsült. Ha egy modellhez nem található megfelelő ár, akkor a költség **nem elérhetőként** jelenik meg, és nem kerül be a teljes összegbe.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### A teljes költség nem egyezik meg a szolgáltató számlájával

Az alkalmazásban megjelenő költségek mind **csak tájékoztató jellegű becslések**, nem hivatalos számlák.

Ahhoz, hogy a teljes költség közelebb kerüljön a tényleges OpenRouter költségekhez, nyissa meg a [**Beállítások** > **Költségkövetés**](#cost-tracking) menüt, és kattintson **Szinkronizálás az API-kulcs használatával**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Az Előzmények oldal hiányzik az oldalsávban

A **Végrehajtási előzmények megőrzése** lehetőség ki lehet kapcsolva. Nyissa meg a [**Beállítások** > **Általános beállítások**](#general-settings) menüt, és kapcsolja be. Figyelje meg, hogy a bekapcsolás nem állítja vissza a korábban törölt előzmények adatait.

<br/>

<a id="web-app-session-expired"></a>
### Webalkalmazás: váratlanul a bejelentkezési oldalra kerül átirányítva

A munkamenete lejárt. Jelentkezzen be újra. Ha gyakran fordul elő, ellenőrizze a kiszolgáló beállításait a munkamenet élettartamával kapcsolatban.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Az irányítópult nem jelenít meg adatokat más felhasználókról (web)

Csak az **adminisztrátorok** tekinthetnek meg adatokat minden felhasználóról a **Felhasználó** szűrő segítségével. A rendes felhasználók csak a saját tevékenységüket látják, ez a szabály megvalósítása.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Módosítottam egy promptot, és elveszítettem a módosításokat

Amikor egy promptot szerkeszt, mindig kattintson a **Mentés** gombra, mielőtt a **Vissza a végrehajtáshoz** gombra kattint.

<br/><br/>

<a id="quick-tips"></a>
## Gyors tippek

- Indításként használja a [**Fordítás**](#translate) funkciót annak ellenőrzésére, hogy a beállításaink működnek-e, mielőtt a [**Átírás**](#rewrite) vagy [**Átalakítás**](#transform) funkciókat használná.
- Használja az [**Átírás**](#rewrite) funkciót mindennapi szövegfejlesztésre.
- Használja az [**Átalakítás**](#transform) funkciót, ha ismétlődő munkafolyamatra van szüksége egy adott feladathoz.
- Használja az [**Irányítópult**](#dashboard) funkciót, ha nyomon kívánja követni a használatot és a költségeket.
- Használja az [**Előzmények**](#history) funkciót a korábbi műveletek és a teljes bemeneti/kimeneti szöveg felülvizsgálatához.
- Rendszeresen exportálja a promptokat, ha olyan könyvtárat épít fel, amelyet biztonságban szeretne őrizni (lásd: [Átalakító promptok](#transform-prompts)) vagy ha másokkal szeretné megosztani.

<br/><br/>

<a id="disclaimer"></a>

## Felelősségkizárás

A terméknevek és ikonok a megfelelő tulajdonosaikhoz tartoznak, és kizárólag azonosítási célokra használjuk őket. Ez a szoftver független a fent említett márkáktól, és azok nem állnak semmilyen kapcsolatban vele, sem támogatják azt.

<br/><br/>

<a id="license"></a>
## Licenc

Szerzői jog © 2026 Waldemar Scudeller Jr.

[Apache Licenc 2.0](LICENSE)