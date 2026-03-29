---
translation_last_updated: '2026-03-29T20:53:29.049Z'
source_file_mtime: '2026-03-29T01:41:58.369Z'
source_file_hash: 418a9aa7293a9fb4
translation_language: hu
source_file_path: USER-GUIDE.md
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Felhasználói útmutató

<br/>

<a id="introduction"></a>
## Bevezetés

A Transrewrt segít a szövegekkel három fő módon dolgozni:

- **Fordítás** – szöveg átalakítása egyik nyelvről a másikra.
- **Átírás** – szöveg újraformázása más stílusban, például érthetőbb, rövidebb vagy formálisabb változatra.
- **Átalakítás** – szöveg feldolgozása egyéni, AI-utasításokkal, amelyeket parancsoknak (promptoknak) nevezünk.

<br/>

Ez az útmutató azt ismerteti, hogyan használható az alkalmazás telepítés és indítás után. A telepítési lépésekért lásd a fő **[README](README.hu.md)** fájlt.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A Transrewrt elérhető asztali alkalmazásként Windows és Linux rendszerekre, valamint önkiszolgáló webalkalmazásként. Ez az útmutató az alkalmazás mindennapi használatára fókuszál. Ha egy adott információ csak egy verzióra vonatkozik, azt egyértelműen megjelöljük.

<small>**Más nyelveken olvasható:** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Megjegyzés a felhasználói felület és a dokumentáció fordításához:** A felhasználói felület minden nyelve, kivéve az eredeti angol (Egyesült Királyság) változatát, mesterséges intelligencia modellekkel lett lefordítva; a szöveg pontatlan vagy hibás lehet.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tartalomjegyzék**

- [Előkészületek](#before-you-start)
  - [Ingyenes OpenRouter API-kulcs beszerzése (asztali alkalmazás)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Első lépések](#getting-started)
- [Az ablak fő részei](#main-parts-of-the-window)
  - [Oldalsáv](#sidebar)
  - [Eszköztár](#toolbar)
  - [Bemeneti és kimeneti panel](#input-and-output-panels)
- [Fordítás](#translate)
  - [Szöveg fordítása](#translate-text)
  - [Nyelvválasztás](#language-selection)
  - [Hasznos fordítási beállítások](#helpful-translation-settings)
- [Átírás](#rewrite)
- [Átalakítás](#transform)
  - [Meglévő parancs futtatása](#run-an-existing-prompt)
  - [Ha még nincsenek parancsai](#if-you-have-no-prompts-yet)
  - [Parancs gyors létrehozása](#create-a-prompt-quickly)
  - [Parancs szerkesztése](#edit-a-prompt)
  - [Parancs tesztelése használat előtt](#test-a-prompt-before-using-it)
- [Műszerfal](#dashboard)
  - [Adatok szűrése](#filter-the-data)
  - [Műszerfal fülei](#dashboard-tabs)
  - [Adatok exportálása](#export-data)
  - [Egy modellhez tartozó tárolt rekordok törlése](#delete-stored-records-for-a-model)
- [Előzmények](#history)
  - [Adatok szűrése](#filter-the-data-1)
  - [Előzmények exportálása](#export-history-data)
- [Beállítások](#settings)
  - [Általános beállítások](#general-settings)
  - [Modellek](#models)
  - [Nyelvek](#languages)
  - [Költségkövetés](#cost-tracking)
  - [Átalakítási sablonok](#transform-prompts)
  - [Felhasználók](#users)
  - [API konfiguráció](#api-config)
  - [Névjegy](#about)
- [Gyakori problémák](#common-issues)
  - [Az alkalmazás nem fordít, nem írja át vagy nem alakítja át a szöveget](#the-app-will-not-translate-rewrite-or-transform-text)
  - [A modelllista üres](#the-model-list-is-empty)
  - [Az eredmény túl lassú vagy túl drága](#the-result-is-too-slow-or-too-expensive)
  - [A felület rossz nyelven jelenik meg](#the-interface-is-in-the-wrong-language)
  - [A szöveg túl kicsi vagy nehezen olvasható](#the-text-is-too-small-or-hard-to-read)
  - [A műszerfal diagramjai üresek](#dashboard-charts-are-empty)
  - [A költség „nem elérhető” vagy helytelennek tűnik](#cost-shows-not-available-or-seems-wrong)
  - [A teljes költség nem egyezik meg a szolgáltató számlájával](#total-cost-does-not-match-my-provider-bill)
  - [Az Előzmények oldal hiányzik az oldalsávon](#the-history-page-is-missing-from-the-sidebar)
  - [Webalkalmazás: váratlanul a bejelentkező oldalra irányít](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Webes admin: elfelejtett vagy elveszett jelszó](#web-admin-forgot-or-lost-a-password)
  - [A műszerfalon más felhasználók adatai nem jelennek meg (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Egy parancsot módosítottam, és elveszítettem a változtatásokat](#i-changed-a-prompt-and-lost-the-edits)
- [Gyors tippek](#quick-tips)
- [Felelősségkizárás](#disclaimer)
- [Licenc](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Kezdés előtt

A Transrewrt használatához legalább egy AI-szolgáltatóhoz kell hozzáférnie. A támogatott szolgáltatók: [OpenRouter](https://openrouter.ai) (amely sok modellt egyesít), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, és [Ollama](https://ollama.com) a helyi modellekhez.

Nem szükséges fizetős modellt választania az indításhoz. Amint hozzáadja az OpenRouter API-kulcsát, az alkalmazás automatikusan engedélyezi a beépített **ingyenes** OpenRouter lehetőséget. Ez lehetővé teszi, hogy azonnal elkezdjen szöveget fordítani, átírni és átalakítani. Másik lehetőségként ingyenes API-kulcsot szerezhet be a Cerebras, Google, Groq vagy Mistral AI szolgáltatóktól.

Egyszerű nyelven:

- Egy **modell** az az AI-motor, amely elvégzi a munkát. A modelleket **szolgáltató előtaggal** soroljuk fel (például `openrouter/…`, `openai/…`, `ollama/…`).
- Egy **API-kulcs** (vagy Ollama esetén egy **alap URL**) az, amellyel az alkalmazás eléri a szolgáltatót.

Ha a **desktop alkalmazást** használja, adja hozzá az API-kulcsokat a használt szolgáltatókhoz a [**Beállítások** > **API konfiguráció**](#api-config) menüpontban. Ha csak OpenRouter-t használ, lásd alább: [Hogyan szerezhetek be API-kulcsot](#how-to-get-an-api-key-desktop-app). Ha nem szeretne API-kulcsot használni, telepítheti az Ollama-t ([ollama.com](https://ollama.com) címről), és helyi modelleket használhat, például a `translategemma:4b`-t.

Ha a **webes verziót** használja, a szerver üzemeltetője konfigurálja a szolgáltatókat környezeti változók segítségével, így nem adhat be közvetlenül API-kulcsokat az alkalmazásban.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Hogyan szerezhetek ingyenes OpenRouter API-kulcsot (desktop alkalmazás)

Ha a desktop alkalmazást használja, kövesse az alábbi lépéseket:

1. Látogasson el a [OpenRouter](https://openrouter.ai) oldalra webböngészőjében.
2. Hozzon létre egy fiókot, vagy jelentkezzen be.
3. Nyissa meg a [Kulcsok](https://openrouter.ai/keys) oldalt.
4. Kattintson a gombra, hogy új API-kulcsot hozzon létre.
5. Adjon nevet a kulcsnak, hogy később felismerje.
6. Másolja ki az új API-kulcsot.
7. Térjen vissza a Transrewrt-be, és nyissa meg a **Beállítások** > **API konfiguráció** menüpontot.
8. Illessze be a kulcsot a **OpenRouter API-kulcs** mezőbe (**Beállítások** > **API konfiguráció** alatt).
9. Kattintson a **OpenRouter kulcs tesztelése** gombra, hogy ellenőrizze, működik-e.

<br/><br/>

<a id="getting-started"></a>
## Első lépések

Ha először használja a Transrewrt-et, kövesse ezt a sorrendet:

1. Nyissa meg az alkalmazást.
2. Szükség esetén válassza ki a **Felület nyelvét** a földgömb ikonról.
3. Ha a **desktop alkalmazást** használja, nyissa meg a [**Beállítások** > **API konfiguráció**](#api-config) menüpontot, adjon hozzá legalább egy szolgáltatóhoz API-kulcsot (például OpenRouter), majd kattintson a **Teszt** gombra az ellenőrzéshez.
4. Nyissa meg a [**Beállítások** > **Modellek**](#models) menüpontot, és adjon hozzá egy vagy több modellt a **Kiválasztott modellek** közé.
5. Nyissa meg a [**Beállítások** > **Nyelvek**](#languages) menüpontot, és válassza ki a **Legfontosabb nyelveket**, ha a leggyakrabban használt nyelvek elsőként jelenjenek meg.
6. Menjen a **Fordítás** fülre, és futtasson egy egyszerű fordítást, hogy megerősítse, minden működik.
7. Ha ez működik, próbálja ki a **Átírás** és majd a **Átalakítás** funkciót.

Ez a sorrend fontos. Ez megelőzi a leggyakoribb kezdői problémát: feladat indítását mielőtt az alkalmazásnak működő API-kapcsolata vagy kiválasztott modellje lenne.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Az ablak fő részei

Az alkalmazás három fő részre oszlik:

- A bal oldalon található **oldalsáv**.
- A tetején lévő **eszköztár**.
- A középső **munkaterület**.

<br/>

<a id="sidebar"></a>
### Oldalsáv

Az oldalsáv segítségével navigálhat az alkalmazásban. Az oldalsáv összecsukható, hogy több helyet szabadítson fel, ehhez kattintson az alkalmazás logójának melletti ikonra.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/hu/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Fordítás</strong> megnyitja a fordítási munkaterületet.</li><br/>
        <li><strong>Átírás</strong> megnyitja az átírási munkaterületet.</li><br/>
        <li><strong>Átalakítás</strong> megnyitja az egyéni parancs munkaterületet.</li><br/>
        <li><strong>Irányítópult</strong> megjeleníti a használati és költséginformációkat.</li><br/>
        <li><strong>Beállítások</strong> megnyitja a beállítások panelt.</li><br/>
        <li><strong>Előzmények</strong> megjeleníti a használati előzményeket a bemeneti és kimeneti szöveggel</li><br/>
        <li><strong>Felhasználó</strong> megjeleníti a bejelentkezett felhasználó felhasználónevét (csak webes verzióban).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Eszköztár

Az eszköztár kicsit megváltozik attól függően, hogy hol tart az alkalmazásban.

- Bal oldalon megjelenik az aktuális oldal neve.
- Jobb oldalon a **modellválasztó** és a **Felület nyelve** vezérlő látható.

A **modellválasztó** lehetővé teszi, hogy kiválassza, melyik MI motort használja az aktuális feladathoz.

![Model selector](../images/screenshots/hu/model-selector.png)

Egyes ingyenes modellek nem mindig érhetők el – néha kapcsolat nélkül vannak, vagy korlátozva van a használatuk. Ha ez történik, az alkalmazás automatikusan eltávolítja a modellt a rendelkezésre álló listáról. A megjelenő modellek szabályozásához menjen a [**Beállítások** > **Modellek**](#models) menüponthoz, és szerkessze a modelllistáját.
A modellbeállításokat közvetlenül is megnyithatja, ha rákattint a szolgáltató ikonjára a modell neve mellett az eszköztáron.

<br/>

A **földgömb ikon + nyelvkód** megváltoztatja az alkalmazás felületi nyelvét, például a menüket és gombokat. Ez **nem** változtatja meg a **Fordítás** funkcióban használt fordítási nyelveket.

![Interface language selector](../images/screenshots/hu/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Bemeneti és kimeneti panel

A legtöbb munkaterület bal oldali **Bemenet** és jobb oldali **Kimenet** panelt használ.

Minden panel a következőket is mutatja:

| **Bemenet**                                                          | **Kimenet**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Karakterek száma <br/>- Szavak száma <br/>- Bekezdések száma   <br/> | - Mennyi ideig tartott a feladat<br/>- **LPS** (tokenek másodpercenként)<br/>- Karakterek, szavak és bekezdések száma<br/>- A használt modell |

Ha a technikai kifejezésekkel kapcsolatban kérdése merül fel:

- **Token** egy kis szövegrészletet jelent. Gondolhat rá úgy, mint egy szó részére vagy egy rövid szóra.
- **LPS** azt jelenti, hogy másodpercenként hány ilyen szövegrészletet dolgozott fel a modell.

<br/>

A műveletek költségét (ha elérhető) és a teljes költséget is figyelemmel kísérheti, ha engedélyezi a `Költséginformációk megjelenítése a műveleteknél` lehetőséget a [**Beállítások** > **Általános beállítások**](#general-settings) menüpontban.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Fordítás

Használja a **Fordítás** funkciót, ha szöveget szeretne egyik nyelvről a másikra átalakítani.

![Translate workspace](../images/screenshots/hu/translate.png)

<br/>

<a id="translate-text"></a>
### Szöveg fordítása

1. Nyissa meg a **Fordítás** funkciót.
2. Válasszon nyelvet a **Honnan** mezőben.
3. Válasszon nyelvet a **Hova** mezőben.
4. Válasszon modellt az eszköztárból.
5. Írja be vagy illessze be a szöveget a **Bemenet** mezőbe.
6. Kattintson a **Fordítás** gombra.
7. Olvassa el az eredményt a **Kimenet** mezőben.
8. Használja a másolás gombot, ha másolni szeretné az eredményt.

<br/>

<a id="language-selection"></a>
### Nyelvválasztás

- **Honnan** lehet konkrét nyelv vagy **Nyelvfelismerés**.
- **Hova** az a nyelv, amelyre az eredményt szeretné fordítani.

A kiválasztott **Legfontosabb nyelvek** a lista tetején jelennek meg. Ezeket beállíthatja a [**Beállítások** > **Nyelvek**](#languages) menüpontban.

<br/>

<a id="helpful-translation-settings"></a>
### Hasznos fordítási beállítások

A [**Beállítások** > **Általános beállítások**](#general-settings) menüpontban módosíthatja a fordítás működését:

- A **Automatikus fordítás beillesztéskor** azonnal lefordítja a beillesztett szöveget.
- Az **Eredmény automatikus másolása a vágólapra** az eredményt automatikusan a vágólapra másolja a sikeres futtatás után.
- A **Valós idejű fordítás (gépelés közben)** gépelés közben futtat fordításokat.
- Az **Időtúllépés (ms)** határozza meg, mennyi ideig várjon az alkalmazás, mielőtt valós idejű fordítást indít.
- Az **Enter** gomb hatására történő műveletet szabályozza:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Átírás

Használja az **Átírás** funkciót, ha a szöveg megfogalmazását szeretné javítani anélkül, hogy megváltoztatná a fő jelentést.

![Rewrite workspace](../images/screenshots/hu/rewrite.png)

Ez akkor hasznos, ha:

- helyesírási és nyelvtani hibákat szeretne javítani (**Helyesírás- és nyelvtanellenőrzés**)
- érthetőbbé szeretné tenni a szöveget (**Érthetőség javítása**)
- több különböző átfogalmazást szeretne egyszerre (**Alternatív változatok**)
- formálisabbá vagy informálisabbá szeretné tenni a szöveget (**Formális** / **Informális**)
- rövidebbé vagy hosszabbá szeretné tenni a szöveget (**Rövidítése** / **Kibontás**)
- technikaiabbá szeretné tenni a szöveget (**Technikai móddá alakítás**)

<br/>

> 💡 **TIPP**<br/>
> Ha a „**Helyesírás- és nyelvtanellenőrzés**” módot választja, akkor a kimeneti panelen megjelenik egy **Változások megjelenítése** kapcsoló (a **Másolás** mellett).
> Kapcsolja be vagy ki, hogy láthatóvá vagy rejtetté tegye a szövegre alkalmazott konkrét javításokat.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Átalakítás

Használja az **Átalakítás** funkciót, ha azt szeretné, hogy a MI egyéni utasításokat kövessen.

![Transform workspace](../images/screenshots/hu/transform.png)

Ez az alkalmazás legrugalmazabb része. Ilyen feladatokra használható, mint:

- jegyzetek összegzése
- durva szöveg átalakítása finomított e-mailré
- kulcsfontosságú pontok kinyerése
- szöveg átalakítása adott formátumba
- bármilyen egyéni feladat a bemeneti szöveggel

<br/>

<a id="run-an-existing-prompt"></a>
### Már meglévő parancs futtatása

1. Nyissa meg az **Átalakítás** funkciót.
2. Válasszon parancsot a parancslista menüből.
3. Ha megjelenik egy **Cél** nyelv mező, válasszon nyelvet, ha szeretne.
4. Írja be vagy illessze be a szöveget a **Bemenet** mezőbe.
5. Kattintson az **Átalakítás** gombra.
6. Olvassa el az eredményt a **Kimenet** mezőben.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Ha még nincsenek parancsai

Ha a parancslistája üres, kattintson az **Átalakítás** munkaterületen a **Mintaparancsok betöltése** gombra. Ugyanez az elem mindig elérhető a [**Beállítások** > **Átalakítási sablonok**](#transform-prompts) menüpontban az exportálás/importálás sorában. Mindkettő beépített példákat ad hozzá, így gyorsan elkezdheti.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A mintaparancsok angol nyelven kerülnek biztosításra. A betöltésük után szerkesztheti a parancsot, és használhatja a **Kérés lefordítása** funkciót, hogy lefordítsa saját nyelvére.

<br/>

<a id="create-a-prompt-quickly"></a>
### Gyorsan hozzon létre egy parancsot

A parancs gyors létrehozásának legegyszerűbb módja:

1. Kattintson az **Új parancs** gombra.
2. Kattintson a **Parancs generálása** gombra.
3. Írja le, mit szeretne, hogy a parancs csináljon.
4. Válasszon modellt.
5. Hagyja, hogy az alkalmazás vázlatot készítsen Önnek.
6. Tekintse át a vázlatot, majd kattintson a **Mentés** gombra.

![Generate prompt](../images/screenshots/hu/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Parancs szerkesztése

Ha létrehoz vagy szerkeszt egy parancsot, a szerkesztő a bal oldalon jelenik meg, a jobb oldalon pedig egy tesztelési terület jelenik meg.

![Transform prompt editor](../images/screenshots/hu/transform-prompt-edit.png)

A fő mezők a következők:

- **Parancs neve**: a parancslistában megjelenő név.
- **Parancs utasításai (nem kötelező)**: rövid útmutató, amely megjelenik a felhasználó számára a parancs futtatásakor.
- **Modell szerepe**: az MI-nek kiosztott általános szerep, például: „Te egy segítőkész asszisztens vagy.”
- **Modell utasításai (soronként egy)**: azok a konkrét szabályok, amelyeket az MI-nek követnie kell.
- **Kimenet leírása**: a kimenetet röviden jellemző szó, például „összegzés” vagy „átírás”.
- **Hőmérséklet (0,0 → 1,0)**: a modell viselkedését befolyásoló érték; lásd lentebb.
- **Célnyelv kérése**: célnyelv-választót ad hozzá a parancs futtatásakor.

Ha az **Hőmérséklet** technikai kifejezés új az Ön számára, képzelje el a következőképpen:

- Az **alacsonyabb** hőmérséklet stabilabb, kiszámíthatóbb eredményeket ad.
- A **magasabb** hőmérséklet változatosabb és kreatívabb eredményeket eredményez.

Használhatja még:

- **`Parancs generálása`** egy új változat létrehozásához egyszerű leírásból
- **`Parancs javítása`** egy meglévő parancs finomhangolásához
- **`Parancs fordítása`** a parancsmezők lefordításához

<br/>

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Kattintson a **`Mentés`** gombra, mielőtt a **`Vissza a futtatáshoz`** gombra kattintana. Ha visszamegy mentés nélkül, a módosításai elvesznek.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Parancs tesztelése használat előtt

A jobb oldali tesztpanel lehetővé teszi, hogy kipróbálja a parancsot mintaszöveggel, mielőtt napi munkája során használná.

Ez akkor hasznos, ha:

- új parancsot készít
- két parancsváltozatot hasonlít össze
- ellenőrizni szeretné a stílust, a hosszúságot vagy a kimenet formátumát

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A mentett parancsokat exportálhatja és importálhatja a [**Beállítások** > **Átalakítási sablonok**](#transform-prompts) menüpontban.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Műszerfal

A **Műszerfal** használatával nyomon követheti, mennyit használja az alkalmazást, és mennyibe kerül (fizetős modellek esetén).

![Dashboard summary](../images/screenshots/hu/dashboard-summary.png)

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Ha csak **ingyenes** modelleket használ, a **költség** értéke nulla lehet, és a költségekre fókuszáló összegzések üresen jelenhetnek meg. A **Összegzés**, **Használat időbeli alakulása** és **Használat modell szerint** füleken továbbra is megjelennek a **hívások száma** (fordítás, átírás és átalakítás), ha tevékenység volt a kiválasztott időszakban.

<br/>

<a id="filter-the-data"></a>
### Adatok szűrése

A szűréshez használja a felső részen található szűrőgombokat az időtartomány módosításához.

![Dashboard filters](../images/screenshots/hu/dashboard-filter.png)

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A **Felhasználó** szűrő csak az adminisztrátorok számára látható a webes verzióban. A rendes felhasználók nem látják ezt a szűrőt, és az asztali alkalmazásban sem érhető el.

<br/>

<a id="dashboard-tabs"></a>
### Műszerfal lapok

- A **Összegzés** áttekintést nyújt a használatról és a költségekről. Tartalmazza a **Használat időbeli alakulása** (napi bontásban halmozott **hívásszámok** fordítás, átírás és átalakítás műveletekhez) és a **Használat modell szerint** (összes **hívás modell szerint**, beleértve az átalakítást) diagramokat.
- A **Használat szerint** a tevékenységet fordítási nyelvek, újraírási módok és átalakítási kérések szerint bontja le.
- A **Modell szerint** megjeleníti, mely modelleket használta, és mennyibe kerültek.
- A **Nap szerint** napi összesítéseket mutat.
- Az **Összes hívás** az összes híváselőzményt megjeleníti, és lehetővé teszi azok exportálását.

<br/>

<a id="export-data"></a>
### Adatok exportálása

A műszerfal táblái a következő formátumokban exportálhatók:

- **JSON**
- **CSV**
- **XLSX**

Ez akkor hasznos, ha az alkalmazáson kívül szeretné átnézni a tevékenységet, vagy meg szeretne osztani egy jelentést.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Tárolt rekordok törlése modell szerint

A **Modell szerint** vagy az **Összes hívás** nézetben eltávolíthatja egy adott modellhez tartozó tárolt rekordokat a „kukára” kattintva.

> ⚠️ **FIGYELMEZTETÉS**<br/>
> A tárolt rekordok törlése végleges, és nem vonható vissza. Csak akkor használja ezt, ha biztosan nincs szüksége többé az előzményekre.

Az összes adat törléséhez vagy az adatok koruk alapján történő eltávolításához látogasson el a [**Beállítások** > **Költségkövetés**](#cost-tracking) oldalra. Ott lehetősége van az összes tárolt adat törlésére, vagy csak az adott dátumnál régebbi adatok eltávolítására.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Előzmények

Kattintson az **Előzmények** elemre a **Transrewrt** belüli műveletei előzményeinek megtekintéséhez, beleértve az egyes műveletek bemenetét és kimenetét.

![History page](../images/screenshots/hu/history.png)

<br/>

<a id="filter-the-history"></a>
### Adatok szűrése

Az **Előzmények** ugyanazokat a szűrőket használja, mint a **Műszerfal** oldal. Használja őket a megfelelő időtartomány kiválasztásához.

![Dashboard filters](../images/screenshots/hu/dashboard-filter.png)

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A **Felhasználó** szűrő csak az adminisztrátorok számára látható a webes verzióban. A rendes felhasználók nem látják ezt a szűrőt, és az asztali alkalmazásban sem érhető el.

<br/>

<a id="export-history-data"></a>
### Előzményadatok exportálása

Az előzmények oldal a szűrt adatokat a következő formátumokban tudja exportálni:

- **JSON**
- **CSV**
- **XLSX**

Ez akkor hasznos, ha az alkalmazáson kívül szeretné átnézni a tevékenységet, vagy meg szeretne osztani egy jelentést.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Beállítások

Nyissa meg a **Beállításokat** az oldalsávon, hogy testre szabja az alkalmazás viselkedését.

A rendelkezésre álló fülek a platformtól és a szerepkörtől függenek:

| Fül               | Asztali | Web (admin) | Web (rendes felhasználó) |
  |-------------------|:-------:|:-----------:|:------------------------:|
  | Általános beállítások  |   igen   |     igen     |        igen         |
  | Modellek            |   igen   |     igen     |        igen         |
  | Nyelvek         |   igen   |     igen     |        igen         |
  | Költségkövetés     |   igen   |     igen     |         —          |
  | Átalakítási sablonok |   igen   |     igen     |        igen         |
  | Felhasználók             |    —    |     igen     |         —          |
  | API konfiguráció        |   igen   |     igen     |         —          |
  | Névjegy             |   igen   |     igen     |        igen         |

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A webes verzióban minden felhasználó saját konfigurációval rendelkezik. A kiválasztott modellek, nyelvek, általános beállítások és átalakítási sablonok felhasználónként kerülnek tárolásra. A módosításai nem befolyásolják más felhasználók beállításait.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Általános beállítások

Az **Általános beállítások** használatával szabályozhatja a gépelés viselkedését, hogy az **Előzmények** számára tárolódnak-e a végrehajtási részletek, valamint a megjelenést.

**Viselkedés**

- A **ENTER viselkedése** határozza meg, hogy az `Enter` gomb futtatja-e a feladatot, vagy új sort szúr be.
- **Automatikus fordítás beillesztéskor** – a szöveg beillesztésekor azonnal elindítja a fordítást.
- **Eredmény automatikus másolása a vágólapra** – sikeres eredményeket automatikusan másol a vágólapra.
- **Valós idejű fordítás (gépelés közben)** – gépelés közben fordít.
- **Időtúllépés (ms)** – beállítja a várakozási időt a valós idejű fordításhoz.

**Előzmények**

- **Végrehajtási előzmények megőrzése** – szabályozza, hogy a fordítás, átírás és átalakítás minden egyes esetében tárolódjon-e a **bemeneti és kimeneti szöveg** az oldalsáv [**Előzmények**](#history) nézete számára. Ha kikapcsolja, megerősítést kér; ha megerősíti, az előzmények szövege eltávolításra kerül az adatbázisból.
- **Előzményadatok törlése** – lehetővé teszi a tárolt szöveg eltávolítását kor alapján (például néhány hónapnál régebbi, vagy **az összes adat (törlés)**) a **Adatok törlése** funkcióval. Ez csak a **Előzmények** nézethez mentett végrehajtási szöveget érinti; **nem** törli a költség- vagy használati összesítőket. A **költség** adatok eltávolításához vagy csökkentéséhez használja a [**Beállítások** > **Költségkövetés**](#cost-tracking) lehetőséget.

**Megjelenés**

- **Költséginformációk megjelenítése a műveleteken** – szabályozza az egyes műveletek költségének (ha elérhető) és a teljes költségnek a megjelenítését a Fordítás, Átírás és Átalakítás kimeneti paneljein.
- **Költség tizedesjegyek száma** – módosítja a költség tizedesjegyeinek megjelenítését.
- **Csak webes verzió:** **margó megjelenítése az alkalmazás körül** – további teret ad az interfész körül.
- **Betűtípus** – megváltoztatja a szövegpanelek betűtípusát.
- **Méret** – megváltoztatja a betűméretet.

**Konfiguráció biztonsági mentése**

- **Használati adatok belefoglalása a biztonsági mentésbe** – ha engedélyezve van, a ZIP fájl tartalmazza az előzményeket és az API hívások adatait is.
- **Konfiguráció mentése biztonsági másolatként** – egyetlen ZIP fájlt hoz létre (`transrewrt-config-backup-ÉÉÉÉ-HH-NN_ÓÓPPMM.zip`, alapértelmezés szerint UTC idő szerint), amely tartalmazza a `config.json`, `state.json`, opcionális titkosítási kulcsot, felhasználókat, beállításokat, egyéni sablonokat, és ha belefoglalta, a használati adatokat is. A sikeres mentés után a megerősítés megjeleníti a mentett fájl nevét.
- **Visszaállítás biztonsági másolatból** – először egy **megerősítő párbeszédablakot** nyit meg. Válassza ki a biztonsági másolat ZIP fájlját a párbeszédablakban (**Tallózás** / fájlválasztó vagy húzd és ejtsd, ahol támogatott), majd tekintse át a beállításokat:
  - **Használati adatok visszaállítása** – a ZIP-ből visszaállítja a használati/előzményadatokat, ha a biztonsági mentés készítésekor ezek be lettek foglalva; hagyja ki, ha csak a beállításokat és sablonokat szeretné.
  - **Régi használati adatok törlése a visszaállítás előtt** – eltávolítja a jelenlegi telepítésben lévő használati/előzményadatokat a biztonsági másolat alkalmazása előtt (nem kötelező; használja, ha tiszta cserét szeretne).

A webes vagy asztali verzióban készült biztonsági másolatokat a másik verzióban is vissza lehet állítani. Ha asztali biztonsági másolatot állít vissza a webes verzióban, az adatok az adminisztrátori felhasználóhoz kerülnek visszaállításra.

<br/>

<a id="models"></a>
### Modellek

Használja a **Beállítások** > **Modellek** lehetőséget a szerszársávon megjelenő modellek kiválasztásához.

![Settings Models tab](../images/screenshots/hu/settings-models.png)

Az oldal két listát tartalmaz:

- **Elérhető modellek** bal oldalon
- **Kiválasztott modellek** jobb oldalon

Hasznos vezérlők közé tartoznak:

- **Modellek keresése...** – modell neve alapján keres
- **Szolgáltató** címkék – szűkíti a listát egy motorra (OpenRouter, OpenAI, Ollama, …)
- **Csak ingyenes** – csak ingyenes modelleket jelenít meg
- **Frissítés** – újratölti a listát
- **Összes kibontása** és **Összes behajtása**, amikor szolgáltató szerint rendez

A modellazonosítók tartalmazzák a szolgáltató előtagját (például `openrouter/…` és `openai/…`). A jelölők, mint például a **OpenAI (OpenRouter)** vagy a **OpenAI (közvetlen)**, azt mutatják, hogyan irányul a forgalom.

> ℹ️ **MEGJEGYZÉS**<br/>
> Az **OpenRouter Body Builder** (`openrouter/bodybuilder`) egy útválasztó modell, nem általános csevegési modell: a válasza JSON formátumú, amely az OpenRouter API kérési törzseit írja le (például egy `requests` tömb `model` és `messages` mezőkkel). Ha **Fordítás**, **Átírás** vagy **Átalakítás** céljára használja, a kimeneti panel ezt a JSON-t fogja megjeleníteni, nem pedig a kész szöveget. Ezekhez a feladatokhoz válasszon normál szöveges modellt. További információkért lásd az [OpenRouter Body Builder modell oldalát](https://openrouter.ai/openrouter/bodybuilder).

Műveletek:

- Modell hozzáadásához kattintson a **Hozzáadás** gombra, vagy bárhová a bejegyzésben.

- Modell eltávolításához kattintson az **X** ikonra a **Kiválasztott modellek** mellett, vagy a **Kiválasztva** opcióra az Elérhető modellek listában.

- A lista törléséhez kattintson a **Kiválasztás törlése** gombra. A szükséges ingyenes modell továbbra is a listában marad.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Ha nem szeretne azonnal hitelt felvenni az OpenRouter számlájára, kezdje a **Csak ingyenes** lehetőség engedélyezésével, és válassza az ingyenes modelleket (bankkártya nélkül is használhatók). Emellett az Ollama használatával helyileg is futtathat modelleket API kulcs nélkül.

<br/>

<a id="languages"></a>
### Nyelvek

Használja a **Beállítások** > **Nyelvek** menüpontot a nyelvlisták kezeléséhez az alkalmazásban.

- A **Legfontosabb nyelvek** a **Fordítás** és **Átalakítás** nyelvlistáinak tetején maradnak rögzítve.
- Az **Egyéni nyelv** lehetővé teszi egy, a beépített listán nem szereplő nyelv hozzáadását.

Ha egyéni nyelvet ad hozzá, az megjelenik a nyelvválasztókban a beépített lehetőségek mellett.

<br/>

<a id="cost-tracking"></a>
### Költségkövetés

Használja a **Beállítások** > **Költségkövetés** menüpontot a költséginformációk kezeléséhez.

- A **Teljes költség** a futó összeget jeleníti meg.
- Az **Érték másolása** a teljes összeget a vágólapra másolja.
- A **Költség alaphelyzetbe állítása** a tárolt összeget nullára állítja vissza.
- A **Szinkronizálás az API kulcs használatával** az összeget az OpenRouter fiókja által jelentett használattal igazítja (csak OpenRouter esetén).
- Az **API kulcs használat** megjeleníti az OpenRouter használat részleteit, ha elérhető.
- A **Költségadatok törlése** az összes adatot eltávolítja, vagy csak a kiválasztott dátumnál régebbi bejegyzéseket.

**Költségkövetés:** Ha OpenRouter modelleket használ, az alkalmazás a tényleges használatot és kiadásokat jeleníti meg az OpenRouter által szolgáltatott költséginformációk alapján. Minden más szolgáltató esetében az alkalmazás az OpenRouter által közzétett árak alapján becsüli a költségeket; ha ár nem érhető el, a becslés nulla lehet.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
>  **Minden költségadat csak tájékoztató jellegű becslés, nem hivatalos számla.**

<br/>

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Az adatok törlése visszafordíthatatlan. A törlés előtt készítsen biztonsági másolatot az adatairól, vagy exportálja azokat a [**Előzmények**](#history) vagy a [**Műszerfal** > **Összes hívás**](#dashboard-tabs) menüponton keresztül, különben az adatok véglegesen elvesznek. 
> Az egyes API hívásokhoz kapcsolódó összes bemeneti/kimeneti előzmény is törlődik.

<br/>

<a id="transform-prompts"></a>
### Átalakítási sablonok

Használja a **Beállítások** > **Átalakítási sablonok** menüpontot a sablonok tömeges kezeléséhez.

Lehetősége van:

- áttekintheti a mentett parancsokat
- törölhet parancsokat
- importálhat parancsokat fájlból
- exportálhat parancsokat biztonsági mentéshez vagy megosztáshoz
- betölthet mintaparancsokat a parancslistába

<br/>

<a id="users"></a>
### Felhasználók

A **Felhasználók** használatával kezelheti a webes verzióban lévő felhasználói fiókokat. Hozzáadhat felhasználókat, frissítheti az adataikat, visszaállíthatja a jelszavaikat, és törölheti a fiókokat.

<br/>

<a id="api-config"></a>
### API konfiguráció

A támogatott szolgáltatók: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras és **Ollama** (helyi modellek alap URL-en keresztül). Csak azokat a szolgáltatókat kell konfigurálnia, amelyeket használ.

**Webalkalmazás: csak rendszergazda**

Az API-kulcsokat a rendszer- vagy Docker-környezeti változókban kell beállítani – a webes felhasználói felületen nem adhatók meg. Ez az oldal megjeleníti, hogy mely szolgáltatóknál van kulcs konfigurálva, és lehetővé teszi mindegyik tesztelését a **`Teszt`** gombra kattintva.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Egy API-kulcs módosításához frissítse a környezeti változót a rendszerében vagy a Docker-konfigurációban, majd indítsa újra a szervert vagy a konténert.

> ℹ️ **MEGJEGYZÉS**<br/>
> A **Konfiguráció biztonsági mentései** ([**Általános beállítások** → Konfiguráció biztonsági mentése](#general-settings) lásd) beágyazhatják a **feloldott** szolgáltatói kulcsokat a ZIP `config.json` fájljába. A ZIP visszaállítása **nem** másolja vissza ezeket a kulcsokat a szerver meglévő konfigurációs fájljába – az éles kulcsok továbbra is a környezetből és a meglévő fájlállapotból származnak, ahogyan ott le van írva.

<br/>

**Asztali alkalmazás**

Használja az **API konfigurációt** az Ön által használt szolgáltatók API-kulcsainak tárolásához. Az Ollama esetében az API-kulcs helyett adja meg az **alap URL-t**.

<br/>

> 💡 **Tipp** <br/>
> Ha nem szeretne API-kulcsot használni, vagy nem szeretne fizetni a használatért, [letöltheti az Ollamát](https://ollama.com) és ingyen futtathat modelleket (például `translategemma:4b`) a saját gépén. Másik lehetőségként ingyenes OpenRouter-fiókot hozhat létre (bankkártya nélkül), és használhatja az ingyenes modelleiket, vagy beszerezhet ingyenes API-kulcsot a Cerebras, Google, Groq vagy Mistral AI szolgáltatóktól.

<br/>

- Csak azokat a szolgáltatókat adja hozzá, amelyekre szüksége van. A **Beállítások** > **Modellek** menüpontban minden modellazonosító a szolgáltató nevével kezdődik (például `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

API-kulcs hozzáadásához írja be az értéket a szövegmezőbe, majd kattintson a **`Mentés`** gombra. Meglévő kulcs lecseréléséhez kattintson az **`Szerkesztés`** gombra. Annak ellenőrzéséhez, hogy egy kulcs működik-e, kattintson a **`Teszt`** gombra. Az Ollama alap URL-jének esetében mindig kattintson a **`Teszt`** gombra a kapcsolat ellenőrzéséhez.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Jelenleg nem tekintheti meg egy API-kulcs aktuális értékét. Csak az **`Szerkesztés`** gomb használatával cserélheti le.
> Az API-kulcsok titkosítva kerülnek tárolásra a konfigurációban.

<br/>

<a id="about"></a>
### Névjegy

A **Névjegy** fül a következőket jeleníti meg:

- az alkalmazás nevét
- a verziószámot
- a készítés dátumát
- egy hivatkozást a projektrepositóriumhoz

<br/><br/>

<a id="common-issues"></a>
## Gyakori problémák

Ha valami nem úgy működik, ahogy várná, először ellenőrizze az alábbi pontokat.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Az alkalmazás nem fogja lefordítani, átírni vagy átalakítani a szöveget

Ellenőrizze a következőket:

- kiválasztott egy modellt az eszköztáron
- legalább egy modell szerepel a [**Beállítások** > **Modellek**](#models) menüpontban
- az API-beállítás működőképes

Ha az asztali alkalmazást használja:

1. Nyissa meg a [**Beállítások** > **API konfiguráció**](#api-config) menüt.
2. Ellenőrizze, hogy legalább egy API-kulcs el van-e mentve.
3. Kattintson a szolgáltatónál található **Teszt** gombra a kulcs működésének megerősítéséhez.

<br/>

<a id="the-model-list-is-empty"></a>
### A modelllista üres

Nyissa meg a [**Beállítások** > **Modellek**](#models) menüt, és kattintson a **Frissítés** gombra.

Ha szükséges:

- keressen egy modellt
- kapcsolja be a **Csak ingyenes** lehetőséget
- adjon hozzá egy vagy több modellt a **Kiválasztott modellek** közé

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Az eredmény túl lassú vagy túl költséges

Próbálja ki az alábbiak egyikét vagy többjét:

- válasszon másik modellt
- használjon rövidebb bemenetet
- kapcsolja ki a **Valós idejű fordítás (gépelés közben)** funkciót a [**Beállítások** > **Általános beállítások**](#general-settings) menüben
- használjon ingyenes modelleket egyszerű feladatokhoz (lásd: [Modellek](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### A felület rossz nyelven jelenik meg

Kattintson a földgömb ikonra az [eszköztáron](#toolbar), és válassza ki a kívánt **Felület nyelvét**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### A szöveg túl kicsi vagy nehezen olvasható

Nyissa meg a [**Beállítások** > **Általános beállítások**](#general-settings) menüt, és módosítsa a következőket:

- **Betűtípus**
- **Méret**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Az irányítópult diagramjai üresek

Ez normális, ha:

- csak **ingyenes modelleket** használ, és **költség** adatokat néz (lehet, hogy nulla); a **hívásszám** diagramok a **Összegzés** lapon még mindig nem rendelkeznek elegendő adattal a kiválasztott időszakból
- a kiválasztott **időszűrő** nem fedi le a hívások időszakát – próbálja ki az **Összes** lehetőséget a ellenőrzéshez

Ha a diagramok továbbra is üresek az **Összes** kiválasztása után, erősítse meg, hogy a hívások megjelennek az [**Előzmények**](#history) vagy az **Összes hívás** fülön.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### A költség „nem elérhető” vagy helytelennek tűnik

Ha **OpenRouter** segítségével használ modelleket, az alkalmazás az OpenRouter által jelentett tényleges költséget jeleníti meg.

**Más szolgáltatók** (közvetlen OpenAI, közvetlen Anthropic stb.) esetén a költség az OpenRouter által közzétett árazási adatok alapján kerül becslésre. Ha nem található ár egy modellhez, a költség **nem elérhetőként** jelenik meg, és nem kerül hozzáadásra a futó összeghez.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### A teljes költség nem egyezik meg a szolgáltató számlájával

Az alkalmazásban szereplő összes költségadat **csak tájékoztató jellegű becslés**, nem hivatalos számla.

Ahhoz, hogy a teljes összeg közelebb kerüljön a tényleges OpenRouter-költséghez, nyissa meg a [**Beállítások** > **Költségkövetés**](#cost-tracking) menüpontot, és kattintson a **Szinkronizálás az API kulcs használatával** lehetőségre.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Az Előzmények oldal hiányzik az oldalsávon

Lehetséges, hogy a **végrehajtási előzmények megőrzése** ki van kapcsolva. Nyissa meg a [**Beállítások** > **Általános beállítások**](#general-settings) menüpontot, és engedélyezze. Figyelem: a bekapcsolás nem állítja vissza a korábban törölt előzményadatokat.

<br/>

<a id="web-app-session-expired"></a>
### Webalkalmazás: váratlanul a bejelentkező oldalra irányít át

Lehet, hogy lejárt a munkamenete. Jelentkezzen be újra. Ha gyakran előfordul, ellenőrizze a szerver konfigurációját a munkamenet élettartamára vonatkozó beállításokkal.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Webes admin: elfelejtette vagy elvesztette a jelszavát

Ez a **saját gépen üzemeltetett webalkalmazásra** (Docker) vonatkozik, nem az asztali (Electron) alkalmazásra.

- Ha egy másik rendszergazda még be tud jelentkezni, az megnyithatja a [**Beállítások** > **Felhasználók**](#users) menüpontot, kiválaszthatja a fiókot, és ott beállíthat egy **új jelszót**.
- Ha **kizárva van**, de **héjhozzáférése** van a géphez vagy a konténerhez, akkor állítsa vissza a jelszót a képhez tartozó segédprogrammal (cserélje le a `transrewrt`-t, ha módosította az alapértelmezett nevet, és idézőjelek közé tegye a jelszót, ha szóközt vagy speciális karaktert tartalmaz):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Az alapértelmezett admin felhasználónév az `admin`, ha még soha nem hozott létre más fiókot. Ha csak egy argumentumot ad meg, azt az `admin` új jelszavaként kezeli.

Ha **forráskód-ből indítja** az alkalmazást Docker helyett, akkor használja ezt:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

A szkript frissíti a felhasználói rekordot az SQLite adatbázisban (és létrehozhatja az `admin` felhasználót, ha az hiányzik). A visszaállítás után jelentkezzen be az új jelszóval.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### A Műszerfal nem jelenít meg adatot más felhasználókról (web)

Csak az **adminisztrátorok** tekinthetik meg az összes felhasználó adatait a **Felhasználó** szűrőn keresztül. A rendes felhasználók csak a saját tevékenységüket látják, ez a tervezett működés.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Módosítottam egy parancsot, és elveszítettem a változtatásokat

A parancs szerkesztésekor mindig kattintson a **Mentés** lehetőségre, mielőtt a **Vissza a Futtatáshoz** gombra kattint.

<br/><br/>

<a id="quick-tips"></a>
## Gyors tippek

- Kezdje a [**Fordítás**](#translate) lehetőséggel annak ellenőrzéséhez, hogy a beállítás megfelelően működik, mielőtt továbblép a [**Átírás**](#rewrite) vagy az [**Átalakítás**](#transform) lehetőségre.
- Használja a [**Átírás**](#rewrite) funkciót mindennapi szövegjavításokhoz.
- Használja az [**Átalakítás**](#transform) funkciót, ha ismételhető munkafolyamatra van szüksége egy adott feladat elvégzéséhez.
- Használja a [**Műszerfal**](#dashboard) lehetőséget, ha nyomon szeretné követni a használatot és a költségeket.
- Használja az [**Előzmények**](#history) funkciót a korábbi műveletek és teljes bemeneti/kimeneti szövegeik áttekintéséhez.
- Rendszeresen exportálja a parancsokat, ha olyan parancs könyvtárat hoz létre, amelyet biztonságban szeretne tartani (lásd: [Átalakítási sablonok](#transform-prompts)), vagy ha meg szeretné osztani másokkal.

<br/><br/>

<a id="disclaimer"></a>
## Felelősségkizárás

A terméknevek és ikonok a jogosultak tulajdonát képezik, kizárólag azonosítási célokra használjuk őket. Ez a szoftver nem kapcsolódik a megemlített márkákhoz, és azok nem is támogatják azt.

<br/><br/>

<a id="license"></a>
## Licenc

Szerzői jog © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)
