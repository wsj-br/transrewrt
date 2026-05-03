---
translation_last_updated: '2026-05-02T22:39:45.291Z'
source_file_mtime: '2026-05-02T22:14:02.511Z'
source_file_hash: 524b4199c6c41f6d98b1e30eee56343fe40727471d8cdceb0e7fcc9dfb275e9a
translation_language: hu
source_file_path: USER-GUIDE.md
translation_models:
  - openai/gpt-4o-mini
  - openai/gpt-5.3-codex
  - qwen/qwen3-235b-a22b-2507
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Felhasználói útmutató

<br/>

<a id="introduction"></a>
## Bevezetés

A Transrewrt három fő módon segít a szöveggel való munkában:

- Fordítás** - szöveg fordítása egyik nyelvről a másikra.
- **Átírás** - szöveg újrafogalmazása más stílusban, például érthetőbben, rövidebben vagy formálisabban.
- **Átalakítás** - szöveg feldolgozása egyéni, promptoknak nevezett AI-utasításokkal.

<br/>

Ez az útmutató azt ismerteti, hogyan használható az alkalmazás telepítés és indítás után. A telepítési lépésekért lásd a fő [**README**](README.hu.md) fájlt.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A Transrewrt elérhető asztali alkalmazásként Windows és Linux rendszerekre, valamint önkiszolgáló webalkalmazásként. Ez az útmutató az alkalmazás mindennapi használatára koncentrál. Ha valami csak egy verzióra vonatkozik, azt egyértelműen megjelöljük.

<small>**Olvassa más nyelveken:** </small>
<small id="lang-list">[English (GB)](../USER-GUIDE.md) · [Português (Brasil)](./USER-GUIDE.pt-BR.md) · [العربية](./USER-GUIDE.ar.md) · [বাংলা](./USER-GUIDE.bn.md) · [Català](./USER-GUIDE.ca.md) · [中文 (中国大陆)](./USER-GUIDE.zh-CN.md) · [中文 (台灣)](./USER-GUIDE.zh-TW.md) · [Hrvatski](./USER-GUIDE.hr.md) · [Čeština](./USER-GUIDE.cs.md) · [Nederlands](./USER-GUIDE.nl.md) · [English (US)](./USER-GUIDE.en-US.md) · [Tagalog](./USER-GUIDE.tl.md) · [Français](./USER-GUIDE.fr.md) · [Deutsch](./USER-GUIDE.de.md) · [Ελληνικά](./USER-GUIDE.el.md) · [हिन्दी](./USER-GUIDE.hi.md) · [Magyar](./USER-GUIDE.hu.md) · [Italiano](./USER-GUIDE.it.md) · [日本語](./USER-GUIDE.ja.md) · [한국어](./USER-GUIDE.ko.md) · [Bahasa Melayu](./USER-GUIDE.ms.md) · [فارسی](./USER-GUIDE.fa.md) · [Polski](./USER-GUIDE.pl.md) · [Basa Jawa](./USER-GUIDE.jv.md) · [Português](./USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](./USER-GUIDE.pa.md) · [Română](./USER-GUIDE.ro.md) · [Русский](./USER-GUIDE.ru.md) · [Slovenčina](./USER-GUIDE.sk.md) · [Español](./USER-GUIDE.es.md) · [Kiswahili](./USER-GUIDE.sw.md) · [Svenska](./USER-GUIDE.sv.md) · [తెలుగు](./USER-GUIDE.te.md) · [ไทย](./USER-GUIDE.th.md) · [Türkçe](./USER-GUIDE.tr.md) · [Українська](./USER-GUIDE.uk.md) · [Tiếng Việt](./USER-GUIDE.vi.md)</small>

<small>

> **Megjegyzés a felhasználói felület és a dokumentáció fordításához:** Az angol (UK) eredeti nyelvén kívül minden felületi nyelvet MI-modellekkel fordítottunk; a megfogalmazás pontatlan lehet vagy tartalmazhat hibákat.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tartalomjegyzék**

- [Előkészületek](#before-you-start)
  - [Hogyan szerezzünk ingyenes OpenRouter API-kulcsot (asztali alkalmazás)](#how-to-get-a-free-openrouter-api-key-desktop-app)
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
  - [Meglévő prompt futtatása](#run-an-existing-prompt)
  - [Ha még nincsenek promptjai](#if-you-have-no-prompts-yet)
  - [Gyorsan új prompt létrehozása](#create-a-prompt-quickly)
  - [Prompt szerkesztése](#edit-a-prompt)
  - [Prompt tesztelése használat előtt](#test-a-prompt-before-using-it)
- [Irányítópult](#dashboard)
  - [Adatok szűrése](#filter-the-data)
  - [Irányítópult fülei](#dashboard-tabs)
  - [Adatok exportálása](#export-data)
  - [Rekordok törlése egy modellhez](#delete-stored-records-for-a-model)
- [Előzmények](#history)
  - [Előzmények szűrése](#filter-the-history)
  - [Előzményadatok exportálása](#export-history-data)
- [Beállítások](#settings)
  - [Általános beállítások](#general-settings)
  - [Modellek](#models)
  - [Nyelvek](#languages)
  - [Költségkövetés](#cost-tracking)
  - [Átalakítási promptok](#transform-prompts)
  - [Felhasználók](#users)
  - [API beállítások](#api-config)
  - [Névjegy](#about)
- [Gyakori problémák](#common-issues)
  - [Az alkalmazás nem fordít, ír át vagy alakít át szöveget](#the-app-will-not-translate-rewrite-or-transform-text)
  - [A modelllista üres](#the-model-list-is-empty)
  - [Az eredmény túl lassú vagy túl költséges](#the-result-is-too-slow-or-too-expensive)
  - [A felület rossz nyelven jelenik meg](#the-interface-is-in-the-wrong-language)
  - [A szöveg túl kicsi vagy nehezen olvasható](#the-text-is-too-small-or-hard-to-read)
  - [Az irányítópult diagramjai üresek](#dashboard-charts-are-empty)
  - [A költség „nem elérhető” vagy helytelennek tűnik](#cost-shows-not-available-or-seems-wrong)
  - [A teljes költség nem egyezik a szolgáltató számlájával](#total-cost-does-not-match-my-provider-bill)
  - [Az Előzmények oldal hiányzik az oldalsávon](#the-history-page-is-missing-from-the-sidebar)
  - [Webalkalmazás: váratlanul a bejelentkező oldalra irányít](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Webes admin: elfelejtett vagy elveszett jelszó](#web-admin-forgot-or-lost-a-password)
  - [Az irányítópult nem mutat adatot más felhasználókról (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Módosítottam egy promptot, és elvesztek a változtatások](#i-changed-a-prompt-and-lost-the-edits)
- [Gyors tippek](#quick-tips)
- [Felelősség kizárása](#disclaimer)
- [Licenc](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Előkészületek

A Transrewrt használatához legalább egy AI-szolgáltatóhoz kell hozzáférésed. A támogatott szolgáltatók: [OpenRouter](https://openrouter.ai) (amely sok modellt egyesít), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras és [Ollama](https://ollama.com) helyi modellekhez.

Nem szükséges fizetős modellt választanod az induláshoz. Amint hozzáadod az OpenRouter API-kulcsodat, az alkalmazás automatikusan engedélyez egy beépített **ingyenes** OpenRouter lehetőséget. Ez lehetővé teszi, hogy azonnal elkezdhesd a szövegek fordítását, átírását és átalakítását. Alternatív megoldásként ingyenes API-kulcsot kaphatsz a Cerebras, Google, Groq vagy Mistral AI szolgáltatóktól is.

Egyszerű szavakkal:

- Egy **modell** az az AI-motor, amely elvégzi a munkát. A modelleket egy **szolgáltató előtaggal** soroljuk fel (például `openrouter/…`, `openai/…`, `ollama/…`).
- Egy **API-kulcs** (vagy Ollama esetén egy **alap URL**) az, amellyel az alkalmazás eléri a szolgáltatót.

Ha a **desktop alkalmazást** használod, add hozzá az API-kulcsokat a használt szolgáltatókhoz [**Beállítások** > **API beállítások**](#api-config) menüpontban. Ha csak OpenRouter-t használsz, lásd alább: [Hogyan szerezz be egy API-kulcsot](#how-to-get-an-api-key-desktop-app). Ha nem szeretnél API-kulcsot használni, telepítheted az Ollama-t ([ollama.com](https://ollama.com) címről) és helyi modelleket használhatsz, például `translategemma:4b`.

Ha a **webes verziót** használod, a szerver üzemeltetője konfigurálja a szolgáltatókat környezeti változók segítségével, így nem tudsz közvetlenül API-kulcsokat megadni az alkalmazásban.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Ingyenes OpenRouter API-kulcs beszerzése (desktop alkalmazás)

Ha a desktop alkalmazást használod, kövesd az alábbi lépéseket:

1. Látogass el a [OpenRouter](https://openrouter.ai) oldalra a webböngésződben.
2. Hozz létre egy fiókot, vagy jelentkezz be.
3. Nyisd meg a [Kulcsok](https://openrouter.ai/keys) oldalt.
4. Kattints a gombra, hogy új API-kulcsot hozz létre.
5. Addj meg egy nevet a kulcsnak, hogy később felismerd.
6. Másold ki az új API-kulcsot.
7. Térj vissza a Transrewrt-hez, és nyisd meg a **Beállítások** > **API beállítások** menüpontot.
8. Illeszd be a kulcsot az **OpenRouter API-kulcs** mezőbe (**Beállítások** > **API beállítások** alatt).
9. Kattints a **Teszt OpenRouter kulcs** gombra, hogy ellenőrizd, működik-e.

<br/><br/>

<a id="getting-started"></a>
## Első lépések

Ha először használod a Transrewrt-et, kövesd az alábbi sorrendet:

1. Indítsd el az alkalmazást.
2. Ha szükséges, válaszd ki a **Felület nyelvét** a földgömb ikonról.
3. Ha a **desktop alkalmazást** használod, nyisd meg [**Beállítások** > **API beállítások**](#api-config) menüpontot, adj hozzá legalább egy szolgáltatóhoz API-kulcsot (például OpenRouter), majd kattints a **Teszt** gombra az ellenőrzéshez.
4. Nyisd meg [**Beállítások** > **Modellek**](#models) menüpontot, és adj hozzá egy vagy több modellt a **Kiválasztott modellek** közé.
5. Nyisd meg [**Beállítások** > **Nyelvek**](#languages) menüpontot, és állítsd be a **Leggyakrabban használt nyelveidet**, ha szeretnéd, hogy ezek a nyelvek elől jelenjenek meg.
6. Lépj a **Fordítás** fülre, és végezz el egy egyszerű fordítást az ellenőrzéshez.
7. Ha ez működik, próbáld ki a **Átírás** és majd a **Átalakítás** funkciót.

Ez a sorrend fontos. Ez megelőzi a leggyakoribb kezdői problémát: egy feladat elindítását mielőtt az alkalmazásnak működő API-kapcsolata vagy kiválasztott modellje lenne.

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

Az oldalsáv segítségével navigálhat az alkalmazásban. Az oldalsáv összecsukható a több helyért, ha rákattint az alkalmazás logójának jobb oldalán lévő ikonra.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/hu/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Fordítás</strong> megnyitja a fordítási munkateret.</li><br/>
        <li><strong>Átírás</strong> megnyitja az átírási munkateret.</li><br/>
        <li><strong>Átalakítás</strong> megnyitja az egyéni parancs munkateret.</li><br/>
        <li><strong>Irányítópult</strong> megjeleníti a használati és költséginformációkat.</li><br/>
        <li><strong>Beállítások</strong> megnyitja a beállítások panelt.</li><br/>
        <li><strong>Előzmények</strong> megjeleníti a használati előzményeket a bemeneti és kimeneti szöveggel együtt</li><br/>
        <li><strong>Felhasználó</strong> megjeleníti a bejelentkezett felhasználó nevét (csak webes verzióban).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Eszköztár

Az eszköztár kicsit megváltozik attól függően, hogy hol tartózkodik az alkalmazásban.

- Bal oldalon megjelenik az aktuális oldal neve.
- Jobb oldalon a **modellválasztó** és a **Felület nyelve** vezérlő látható.

A **modellválasztó** segítségével kiválaszthatja, hogy melyik MI-motort használja az aktuális feladathoz.

![Model selector](../images/screenshots/hu/model-selector.png)

Egyes ingyenes modellek nem mindig elérhetők – néha kapcsolat nélkül vannak, vagy korlátozott a használatuk. Ha ez történik, az alkalmazás automatikusan eltávolítja a modellt az elérhető listáról. A megjelenő modellek szabályozásához lépjen a [**Beállítások** > **Modellek**](#models) menüponthoz, és szerkessze a modelllistáját.
 A modellbeállításokat közvetlenül is megnyithatja, ha rákattint a szolgáltató ikonjára a modell neve mellett az eszköztáron.

<br/>

A **földgömb ikon + nyelvkód** megváltoztatja az alkalmazás felületi nyelvét, például a menükét és gombokét. Ez **nem** változtatja meg a **Fordítás** funkcióban használt fordítási nyelveket.

![Interface language selector](../images/screenshots/hu/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Bemeneti és kimeneti panel

A legtöbb munkaterület bal oldali **Bemenet** és jobb oldali **Kimenet** panelt használ.

Minden panel továbbá megjeleníti:

| **Bemenet**                                                          | **Kimenet**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Karakterszám <br/>- Szavak száma <br/>- Bekezdések száma   <br/> | - A feladat végrehajtásához szükséges idő<br/>- **TPS** (token másodpercenként)<br/>- Karakterek, szavak és bekezdések száma<br/>- A használt modell |

Ha a technikai kifejezések jelentése érdekli:

- **Token** egy kis szövegrészletet jelent. Gondolhat rá úgy, mint egy szó részére vagy egy rövid szóra.
- **TPS** azt jelenti, hogy a modell másodpercenként hány ilyen szövegrészletet dolgozott fel.

<br/>

A műveletek költségét (ha elérhető) és a teljes költséget is figyelemmel kísérheti, ha engedélyezi a `Show cost information on the actions` lehetőséget a [**Beállítások** > **Általános beállítások**](#general-settings) menüpontban.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Fordítás

A **Fordítás** funkciót akkor használja, ha szöveget szeretne átalakítani egyik nyelvről a másikra.

![Translate workspace](../images/screenshots/hu/translate.png)

<br/>

<a id="translate-text"></a>
### Szöveg fordítása

1. Nyissa meg a **Fordítás** funkciót.
2. Válasszon nyelvet a **Honnan** mezőben.
3. Válasszon nyelvet a **Hova** mezőben.
4. Válasszon modellt az eszköztárból.
5. Írja be vagy illessze be a szöveget a(z) **Bemenet** mezőbe.
6. Kattintson a(z) **Fordítás** gombra.
7. Olvassa el az eredményt a(z) **Kimenet** mezőben.
8. Használja a másolás gombot, ha másolni szeretné az eredményt.

<br/>

<a id="language-selection"></a>
### Nyelvkiválasztás

- A **Forrás** lehet egy adott nyelv vagy **Nyelvfelismerés**.
- A **Cél** az a nyelv, amelyre le szeretné fordítani a szöveget.

A kiválasztott **Fő nyelvek** a lista tetején jelennek meg. Ezeket a [**Beállítások** > **Nyelvek**](#languages) menüben állíthatja be.

<br/>

<a id="helpful-translation-settings"></a>
### Hasznos fordítási beállítások

A [**Beállítások** > **Általános beállítások**](#general-settings) menüben testreszabhatja a fordítás működését:

- A **Fordítás beillesztéskor** automatikusan lefordítja a beillesztett szöveget.
- Az **Eredmény automatikus másolása a vágólapra** az eredményt automatikusan másolja a vágólapra a sikeres fordítás után.
- Az **Igény szerinti fordítás (gépelés közben)** a gépelés közben folyamatosan fordít.
- Az **Időtúllépés (ms)** határozza meg, mennyi ideig vár az alkalmazás az igény szerinti fordítás elindítása előtt.
- Az **Enter** határozza meg, mi történjen az `Enter` billentyű lenyomásakor:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Átírás

Használja az **Átírás** funkciót, ha a szöveg jelentésének megőrzése mellett javítani szeretne a megfogalmazáson.

![Rewrite workspace](../images/screenshots/hu/rewrite.png)

Ez akkor hasznos, ha:

- helyesírási és nyelvtani hibákat szeretne javítani (**Helyesírás- és nyelvtanellenőrzés**)
- világosabbá szeretné tenni a szöveget (**Tisztaság javítása**)
- több különböző átfogalmazást szeretne egyszerre (**Alternatív verziók**)
- formálisabbá vagy informálisabbá szeretné tenni a szöveget (**Formális** / **Informális**)
- rövidebbé vagy hosszabbá szeretné tenni a szöveget (**Rövidítés** / **Bővítés**)
- műszakibbá szeretné tenni a szöveget (**Műszaki megfogalmazás**)

<br/>

> 💡 **TIPP**<br/>
> Ha a "**Helyesírás- és nyelvtanellenőrzés**" módot használja, a kimeneti panelen megjelenik egy **Változások megjelenítése** kapcsoló (a **Másolás** mellett).
> Kapcsolja be vagy ki, hogy láthatóvá vagy elrejtetté tegye a szövegre alkalmazott konkrét javításokat.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Átalakítás

Használja az **Átalakítás** funkciót, ha azt szeretné, hogy a MI egy egyéni utasításkészletet kövessen.

![Transform workspace](../images/screenshots/hu/transform.png)

Ez az alkalmazás legrugalmazabb része. Ilyen feladatokra használható, mint:

- jegyzetek összegzése
- durva szöveg átalakítása kifinomult e-mailré
- kulcsfontosságú pontok kinyerése
- szöveg átalakítása adott formátumba
- bármilyen egyéni feladat a bemeneti szöveggel

<br/>

<a id="run-an-existing-prompt"></a>
### Létező parancs futtatása

1. Nyissa meg a(z) **Átalakítás** funkciót.
2. Válasszon egy parancsot a parancslista közül.
3. Ha megjelenik egy **Cél** nyelv mező, válasszon nyelvet, ha szeretne.
4. Írjon be szöveget, vagy illessze be a(z) **Bemenet** mezőbe.
5. Kattintson az **Átalakítás** gombra.
6. Olvassa el az eredményt a(z) **Kimenet** mezőben.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Ha még nincsenek promptjai

Ha a parancslistája üres, kattintson a **Mintapromptok betöltése** gombra az Átalakítás munkaterületen. Ugyanez az elem mindig elérhető a [**Beállítások** > **Átalakítási promptok**](#transform-prompts) menüpontban az exportálás/importálás sorában. Mindkettő beépített példákat ad hozzá, így gyorsan elkezdheti.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A mintapromptok angol nyelven kerülnek biztosításra. A betöltésük után szerkesztheti a promptot, és használhatja a(z) **Prompt lefordítása** funkciót, hogy lefordítsa az Ön nyelvére.

<br/>

<a id="create-a-prompt-quickly"></a>
### Gyorsan létrehozhat egy promptot

A legrövidebb út egy prompt létrehozásához:

1. Kattintson a **Új parancs** gombra.
2. Kattintson a **Parancs létrehozása** gombra.
3. Írja le, mit szeretne, hogy a parancs csináljon.
4. Válasszon egy modellt.
5. Hagyja, hogy az alkalmazás létrehozzon egy vázlatot.
6. Ellenőrizze a vázlatot, majd kattintson a **Mentés** gombra.

![Generate prompt](../images/screenshots/hu/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Prompt szerkesztése

Amikor létrehoz vagy szerkeszt egy promptot, a szerkesztő a bal oldalon jelenik meg, a jobb oldalon pedig egy teszterület.

![Transform prompt editor](../images/screenshots/hu/transform-prompt-edit.png)

A fő mezők a következők:

- **Parancs neve**: a név, amely a parancslistában megjelenik.
- **Parancs utasításai (nem kötelező)**: egy rövid útmutató, amely a felhasználó számára jelenik meg a prompt futtatásakor.
- **Modell szerepe**: az AI-nek kiosztott általános szerep, például: „Hasznos asszisztens vagyok.”
- **Modell utasításai (soronként egy)**: azok a konkrét szabályok, amelyeket az MI-nek követnie kell.
- **Kimenet leírása**: egy rövid szó, amely az eredményt írja le, például „összegzés” vagy „átírás”.
- **Hőmérséklet (0,0 → 1,0)**: a modell viselkedését határozza meg; lásd lentebb.
- **Nyelv kérése célként**: nyelvválasztó mezőt ad hozzá, amikor a prompt fut.

Ha az **Hőmérséklet** technikai kifejezés új Önnek, képzelje el így:

- Az **alacsonyabb** hőmérséklet stabilabb, kiszámíthatóbb eredményeket ad.
- A **magasabb** hőmérséklet nagyobb változatosságot és kreativitást eredményez.

Használhatja továbbá:

- `Generate prompt` egy új vázlat létrehozásához egyszerű leírásból
- `Improve prompt` egy meglévő prompt finomhangolásához
- `Translate prompt` a prompt mezők lefordításához

<br/>

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Kattintson `Save` először, mielőtt `Back to Run`-re kattintana. Ha visszalép mentés nélkül, a módosításai elvesznek.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Tesztelje a promptot használat előtt

A jobb oldali tesztpanel segítségével kipróbálhatja a parancsot mintaszöveggel, mielőtt mindennapi munkája során használná.

Ez akkor hasznos, ha:

- új parancsot készít
- két parancsverziót hasonlít össze
- ellenőrizni szeretné a stílust, hosszúságot vagy a kimeneti formátumot

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A mentett promptokat exportálni és importálni lehet a [**Beállítások** > **Átalakítási promptok**](#transform-prompts) menüpontban.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Irányítópult

Az **Irányítópult** használatával nyomon követheti, mennyit használja az alkalmazást, és mennyibe kerül az (fizetős modellek esetén).

![Dashboard summary](../images/screenshots/hu/dashboard-summary.png)

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Ha csak **ingyenes** modelleket használ, a **költség** értéke nulla lehet, és a költségközpontú összegzések üresen jelenhetnek meg. A **Összegzés** lapon az **Időbeli használat** és a **Használat modell szerint** továbbra is megjeleníti a **hívások számát** (fordítás, átírás és átalakítás), ha volt tevékenység a kiválasztott időszakban.

<br/>

<a id="filter-the-data"></a>
### Adatok szűrése

A szűrési gombokkal a tetején módosíthatja az időtartományt.

![Dashboard filters](../images/screenshots/hu/dashboard-filter.png)

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A **Felhasználó** szűrő csak az adminisztrátorok számára látható a webes verzióban. A rendes felhasználók nem látják ezt a szűrőt, és az asztali alkalmazásban sem érhető el.

<br/>

<a id="dashboard-tabs"></a>
### Irányítópult fülek

- Az **Összegzés** áttekintést nyújt a használatról és a költségekről. Tartalmazza az **Időbeli használatot** (napi halmozott **hívásszámok** fordítás, átírás és átalakítás szerint) és a **Használat modell szerint** (összes **hívás modellenként**, beleértve az átalakítást).
- A **Használat szerint** a tevékenységet a fordítási nyelv, az átírás módja és az átalakítási prompt szerint bontja le.
- A **Modell szerint** megjeleníti, mely modelleket használta és mennyibe kerültek.
- A **Nap szerint** napi összesítéseket mutat.
- Az **Összes hívás** megjeleníti a teljes híváselőzményt, és lehetővé teszi annak exportálását.

<br/>

<a id="export-data"></a>
### Adatok exportálása

Az irányítópult táblázatai adataikat exportálhatják a következő formátumokban:

- **JSON**
- **CSV**
- **XLSX**

Ez akkor hasznos, ha az alkalmazáson kívül szeretné áttekinteni a tevékenységet, vagy meg szeretne osztani egy jelentést.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Tárolt rekordok törlése modell szerint

A **Modell szerint** vagy az **Összes hívás** nézetben eltávolíthatja egy modellhez tartozó tárolt rekordokat a „kukára” ikonra kattintva.

> ⚠️ **FIGYELMEZTETÉS**<br/>
> A tárolt rekordok törlése végleges. Csak akkor használja ezt, ha biztosan nincs szüksége többé az előzményekre.

Az összes adat törléséhez vagy a rekordok koruk alapján történő eltávolításához lépjen a [**Beállítások** > **Költségkövetés**](#cost-tracking) menüponthoz. Itt lehetősége van az összes tárolt adat törlésére, vagy csak az adott dátumnál régebbi adatok törlésére.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Előzmények

Kattintson az **Előzmények** elemre a **Transrewrt** alkalmazáson belüli műveletei előzményeinek megtekintéséhez, beleértve minden művelet bemenetét és kimenetét.

![History page](../images/screenshots/hu/history.png)

<br/>

<a id="filter-the-history"></a>
### Az előzmények szűrése

Az **Előzmények** ugyanazokat a szűrőket használják, mint az **Irányítópult** oldal. Használja ezeket a szűrőket az időtartomány kiválasztásához.

![Dashboard filters](../images/screenshots/hu/dashboard-filter.png)

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A **Felhasználó** szűrő csak az adminisztrátorok számára látható a webes verzióban. A rendes felhasználók nem látják ezt a szűrőt, és az asztali alkalmazásban sem érhető el.

<br/>

<a id="export-history-data"></a>
### Előzményadatok exportálása

Az előzmények oldalról a szűrt adatok exportálhatók a következő formátumokban:

- **JSON**
- **CSV**
- **XLSX**

Ez akkor hasznos, ha az alkalmazáson kívül szeretné áttekinteni a tevékenységet, vagy meg szeretne osztani egy jelentést.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Beállítások

Nyissa meg a **Beállításokat** az oldalsávban, hogy testre szabja az alkalmazás működését.

A rendelkezésre álló fülek a platformtól és a szerepkörtől függnek:

| Fül               | Asztali | Web (admin) | Web (rendes felhasználó) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Általános beállítások  |   igen   |     igen     |        igen         |
  | Modellek            |   igen   |     igen     |        igen         |
  | Nyelvek         |   igen   |     igen     |        igen         |
  | Költségkövetés     |   igen   |     igen     |         -          |
  | Átalakítási promptok |   igen   |     igen     |        igen         |
  | Felhasználók             |    -    |     igen     |         -          |
  | API beállítások        |   igen   |     igen     |         -          |
  | Névjegy             |   igen   |     igen     |        igen         |

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A webes verzióban minden felhasználó saját konfigurációval rendelkezik. A kiválasztott modellek, nyelvek, általános beállítások és átalakítási promptok felhasználónként kerülnek tárolásra. A módosítások, amelyeket végrehajtasz, nem befolyásolják más felhasználók beállításait.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Általános beállítások

Az **Általános beállítások** használatával szabályozhatod a gépelés működését, hogy az **Előzmények** számára tárolódnak-e az végrehajtási részletek, valamint a megjelenést.

**Működés**

- **ENTER működése** határozza meg, hogy az `Enter` végrehajtja-e a feladatot, vagy új sort szúr be.
- **Automatikus fordítás beillesztéskor** a szöveg beillesztésekor azonnal elindítja a fordítást.
- **Eredmény automatikus másolása a vágólapra** sikeres eredményeket automatikusan másol a vágólapra.
- **Valós idejű fordítás (gépelés közben)** gépelés közben fordít.
- **Időtúllépés (ms)** beállítja a várakozási időt a valós idejű fordításhoz.

**Előzmények**

- **Előzmények megőrzése** szabályozza, hogy a fordítás, átírás és átalakítás minden egyes esetén tárolódjon-e a **bemeneti és kimeneti szöveg** az oldalsávon található [**Előzmények**](#history) nézethez. A kikapcsolás megerősítést kér; ha megerősíted, a tárolt előzmények szövege eltávolításra kerül az adatbázisból.
- **Előzményadatok törlése** lehetővé teszi a tárolt szöveg kor alapján történő eltávolítását (például néhány hónapnál régebbi, vagy **összes adat (törlés)**) a **Adatok törlése** funkcióval. Ez csak a mentett végrehajtási szöveget érinti az **Előzmények** nézethez; **nem** törli a költség- vagy használati összesítőket. A **költség** adatok eltávolításához vagy csökkentéséhez használd a [**Beállítások** > **Költségkövetés**](#cost-tracking) lehetőséget.

**Megjelenés**

- **Költséginformációk megjelenítése a műveleteken** szabályozza az egyes műveletek költségének (ha elérhető) és a teljes költségnek a megjelenítését a Fordítás, Átírás és Átalakítás kimeneti paneljein.
- **Költség tizedesjegyek száma** módosítja a költségek tizedesjegyeinek megjelenítését.
- **Csak web:** **margó megjelenítése az alkalmazás körül** extra teret ad az interfész körül.
- **Betűtípus** módosítja a szövegpanelek betűtípusát.
- **Méret** módosítja a betűméretet.

**Konfiguráció biztonsági mentése**

- **Használati adatok belefoglalása a biztonsági másolatba** – ha engedélyezve van, a ZIP fájl tartalmazza az előzményeket és az API-hívások adatait is.
- **Konfiguráció biztonsági mentése** – egyetlen ZIP fájlt hoz létre (alapértelmezés szerint `transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` UTC-ben), amely tartalmazza a `config.json`, `state.json`, opcionális titkosítási kulcsot, felhasználókat, beállításokat, egyéni promptokat, valamint a használati adatokat, ha ezt választottad. A sikeres biztonsági mentés után a megerősítés megjeleníti a mentett fájl nevét.
- **Visszaállítás biztonsági másolatból** – először egy **megerősítő párbeszédablakot** nyit meg. Válaszd ki a biztonsági mentés ZIP fájlját a párbeszédablakban (**Tallózás** / fájlválasztó vagy fogd és vidd, ahol támogatott), majd tekintsd át a beállításokat:
  - **Használati adatok visszaállítása** – importálja a használati/előzményadatokat a ZIP-ből, ha a biztonsági mentés során a használati adatok is be lettek foglalva; hagyd kikapcsolva, ha csak a beállításokat és promptokat szeretnéd visszaállítani.
  - **Régi használati adatok törlése a visszaállítás előtt** – eltávolítja a jelenlegi telepítésben lévő meglévő használati/előzményadatokat a biztonsági másolat alkalmazása előtt (nem kötelező; akkor használd, ha tiszta csere szükséges).

A webes vagy asztali verzióban készült biztonsági másolatokat a másik verzióban is vissza lehet állítani. Ha asztali biztonsági másolatot állítasz vissza a webes verzióban, az adatok az adminisztrátor felhasználóhoz kerülnek visszaállításra.

<br/>

<a id="models"></a>
### Modellek

A **Beállítások** > **Modellek** használatával választhatod ki, mely modellek jelenjenek meg az eszköztáron.

![Settings Models tab](../images/screenshots/hu/settings-models.png)

Az oldal két listát tartalmaz:

- **Elérhető modellek** bal oldalon
- **Kiválasztott modellek** jobb oldalon

Hasznos vezérlők közé tartoznak:

- **Modellek keresése...** név alapján
- **Szolgáltató** címkék a listának egyetlen motorra (OpenRouter, OpenAI, Ollama, …) szűkítéséhez
- **Csak ingyenes** a csak ingyenes modellek megjelenítéséhez
- **Frissítés** a lista újratöltéséhez
- **Összes kibontása** és **Összes behajtása**, amikor szolgáltató szerint rendez.

A modellazonosítók tartalmazzák a szolgáltató előtagját (például `openrouter/…` vs `openai/…`). A jelvények, mint például **OpenAI (OpenRouter)** vs **OpenAI (közvetlen)**, azt mutatják, hogyan irányul a forgalom.

> ℹ️ **MEGJEGYZÉS**<br/>
> A **OpenRouter Body Builder** (`openrouter/bodybuilder`) egy útválasztó modell, nem általános csevegési modell: a válasza JSON, amely az OpenRouter API-kérelmek törzsét írja le (például egy `requests` tömb `model` és `messages` mezőkkel). Ha **Fordítás**, **Átírás** vagy **Átalakítás** céljára használja, a kimeneti panel ezt a JSON-t fogja megjeleníteni, nem a kész szöveget. Válasszon normál szöveges modellt ezekhez a feladatokhoz. Lásd a [Body Builder modell oldalát](https://openrouter.ai/openrouter/bodybuilder) az OpenRouter oldalán.

Műveletek:

- Modell hozzáadásához kattintson a **Hozzáadás** gombra, vagy bárhová a bejegyzésben.

- A modell eltávolításához kattintson az **X** gombra mellette a **Kiválasztott modellek** vagy a **Kiválasztva** bejegyzésnél az Elérhető modellekben.

- A lista törléséhez kattintson a **Összes kiválasztás megszüntetése** gombra. A szükséges ingyenes modell a listában marad.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Ha nem szeretne azonnal hitelt felvenni az OpenRouter számlájára, kezdje a **Csak ingyenes** funkció engedélyezésével, és válassza ki az ingyenes modelleket (bankkártya nélkül). Használhatja az Ollama-t is, hogy modelleket futtasson helyileg API-kulcs nélkül.

<br/>

<a id="languages"></a>
### Nyelvek

Használja a **Beállítások** > **Nyelvek** lehetőséget a nyelvi listák szervezéséhez az alkalmazásban.

- A **Legfontosabb nyelvek** a **Fordítás** és **Átalakítás** nyelvi listáinak tetejére rögzítettek.
- Az **Egyéni nyelv** lehetővé teszi, hogy hozzáadjon egy nyelvet, amely nincs a beépített listában.

Ha egyéni nyelvet ad hozzá, az megjelenik a nyelvválasztókban a beépített lehetőségek mellett.

<br/>

<a id="cost-tracking"></a>
### Költségkövetés

Használja a **Beállítások** > **Költségkövetés** lehetőséget a költséginformációk kezeléséhez.

- A **Teljes költség** a futó összeget mutatja.
- Az **Érték másolása** a teljes összeget a vágólapra másolja.
- A **Költség visszaállítása** a tárolt összeget nullára állítja vissza.
- Az **Szinkronizálás az API-kulcs használatával** a teljes összeget az OpenRouter fiókja által jelentett használattal egyezteti (csak OpenRouter).
- Az **API-kulcs használata** az OpenRouter használati adatait jeleníti meg, ha elérhető.
- A **Költségadatok törlése** minden adatot eltávolít, vagy csak a kiválasztott dátumnál régebbi bejegyzéseket.

**Költségkövetés:** Ha OpenRouter modelleket használ, az alkalmazás a tényleges használatot és kiadásokat jeleníti meg az OpenRouter által szolgáltatott költséginformációk alapján. Minden más szolgáltató esetében az alkalmazás az OpenRouter által közzétett árak alapján becsli a költségeket; ha ár nem érhető el, a becslés nulla lehet.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> **Minden költségadat csak tájékoztató jellegű becslés, nem hivatalos számlázási kimutatás.**

<br/>

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Az adatok törlése visszafordíthatatlan. Az adatok törlése előtt készítsen biztonsági másolatot, vagy exportálja azokat a [**Előzmények**](#history)
> vagy az [**Irányítópult** > **Összes hívás**](#dashboard-tabs) menüponton keresztül, különben az adatok véglegesen elvesznek.
> Az egyes API-hívásokhoz kapcsolódó összes bemeneti/kimeneti előzmény is törlődni fog.

<br/>

<a id="transform-prompts"></a>
### Átalakítási promptok

A **Beállítások** > **Átalakítási promptok** lehetőséget használva tömegesen kezelheti a promptokat.

Lehetőségei:

- áttekintheti a mentett promptokat
- törölhet promptokat
- importálhat promptokat fájlból
- exportálhat promptokat biztonsági mentéshez vagy megosztáshoz
- mintapromptok betöltése a promptlista számára

<br/>

<a id="users"></a>
### Felhasználók

A **Felhasználók** elem használatával kezelheti a felhasználói fiókokat a webes verzióban. Hozzáadhat felhasználókat, frissítheti adataikat, visszaállíthatja jelszavukat, és törölheti a fiókokat.

<br/>

<a id="api-config"></a>
### API beállítások

A támogatott szolgáltatók: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, és **Ollama** (helyi modellek alap URL címen keresztül). Csak azokat a szolgáltatókat kell beállítania, amelyeket használ.

**Webalkalmazás: csak rendszergazda**

Az API-kulcsokat a rendszer- vagy Docker-környezeti változókban kell beállítani – nem a webes felületen adja meg őket. Ez az oldal megjeleníti, hogy mely szolgáltatókhoz van kulcs beállítva, és lehetővé teszi az egyes szolgáltatók tesztelését a `Test` gombra kattintva.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> API-kulcs módosításához frissítse a környezeti változót a rendszerében vagy Docker-konfigurációjában, majd indítsa újra a szervert vagy a konténert.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A **Konfiguráció biztonsági mentése** (lásd: [**Általános beállítások** → Konfiguráció biztonsági mentése](#general-settings)) beágyazhatja a **feloldott** szolgáltatói kulcsokat a ZIP-fájl `config.json` részébe. A ZIP visszaállítása **nem** másolja vissza ezeket a kulcsokat a szerver konfigurációs fájljába – az érvényes kulcsok továbbra is a környezetből és a meglévő fájlállapotból származnak, ahogyan ott le van írva.

<br/>

**Asztali alkalmazás**

Az **API beállítások** segítségével tárolhatja az egyes használt szolgáltatók API-kulcsait. Az Ollama esetében az API-kulcs helyett adja meg az **alap URL-t**.

<br/>

> 💡 **Tipp** <br/>
> Ha nem szeretne API-kulcsot használni, vagy fizetni a használatért, [tölthet le Ollamát](https://ollama.com), és ingyen futtathat modelleket (például `translategemma:4b`) a saját gépén. Alternatív megoldásként ingyenes OpenRouter-fiókot hozhat létre (bankkártya nélkül), ahol ingyenes modelleket használhat, vagy ingyenes API-kulcsot szerezhet a Cerebras, Google, Groq vagy Mistral AI szolgáltatóktól.

<br/>

- Csak azokat a szolgáltatókat adja hozzá, amelyekre szüksége van. A **Beállítások** > **Modellek** menüpontban minden modellazonosító a szolgáltató nevével kezdődik (például `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

API-kulcs hozzáadásához írja be az értéket a szövegmezőbe, majd kattintson a `Save` gombra. Már meglévő kulcs lecseréléséhez kattintson a `Edit` gombra. A kulcs működésének ellenőrzéséhez kattintson a `Test` gombra. Az Ollama alap URL-je esetében mindig kattintson a `Test` gombra a kapcsolat ellenőrzéséhez.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Jelenleg nem tekintheti meg az API-kulcs aktuális értékét. Csak a `Edit` gomb használatával cserélheti le.
> Az API-kulcsok titkosítva kerülnek tárolásra a konfigurációban.

<br/>

<a id="about"></a>
### Névjegy

A(z) **Névjegy** fül megjeleníti:

- az alkalmazás nevét
- a verziószámot
- a build dátumát
- egy hivatkozást a projekt adattárához

<br/><br/>

<a id="common-issues"></a>
## Gyakori problémák

Ha valami nem úgy működik, ahogy várná, először ellenőrizze az alábbi pontokat.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Az alkalmazás nem fordít, átír vagy alakít át szöveget

Ellenőrizze, hogy:

- kiválasztott egy modellt az eszköztáron
- legalább egy modell szerepel a [**Beállítások** > **Modellek**](#models) menüben
- az API-beállítások megfelelően működnek

Ha az asztali alkalmazást használja:

1. Nyissa meg a [**Beállítások** > **API beállítások**](#api-config) menüt.
2. Ellenőrizze, hogy legalább egy API-kulcs el van-e mentve.
3. Kattintson a szolgáltató melletti **Teszt** gombra, hogy megerősítse a kulcs működését.

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
- kapcsolja ki az **Igény szerinti fordítás (gépelés közben)** funkciót a [**Beállítások** > **Általános beállítások**](#general-settings) menüben
- egyszerű feladatokhoz használjon ingyenes modelleket (lásd: [Modellek](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### A felület rossz nyelven jelenik meg

Kattintson a földgolyó ikonra az [eszköztáron](#toolbar), és válassza ki a kívánt **Felület nyelve** beállítást.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### A szöveg túl kicsi vagy nehezen olvasható

Nyissa meg a [**Beállítások** > **Általános beállítások**](#general-settings) menüt, és módosítsa:

- **Betűcsalád**
- **Méret**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Az irányítópult diagramjai üresek

Ez normális, ha:

- csak **ingyenes modelleket** használsz, és a **költség** adatokat nézed (lehet, hogy nulla); a **hívásszám** diagramok az **Összegzés** lapon továbbra is az adott időszak adatait igénylik
- a kiválasztott **időszűrő** nem fedi le a hívások időszakát – próbáld az **Összes** lehetőséget ellenőrzéshez

Ha a diagramok még mindig üresek az **Összes** kiválasztása után, ellenőrizd, hogy megjelennek-e a hívások az [**Előzmények**](#history) között vagy az **Összes hívás** fülön.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### A költség „nem elérhető” vagy helytelennek tűnik

Ha **OpenRouter** közvetítésével használsz modelleket, az alkalmazás az OpenRouter által jelentett tényleges költséget jeleníti meg.

Más **szolgáltatók** (OpenAI közvetlen, Anthropic közvetlen stb.) esetén a költség az OpenRouter által közzétett árak alapján kerül becslésre. Ha nincs megfelelő ár a modellhez, a költség **nem elérhető** lesz, és nem kerül hozzáadásra a futó összeghez.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### A teljes költség nem egyezik meg a szolgáltató számlájával

Az alkalmazásban szereplő összes költségadat **csak tájékoztató jellegű becslés**, nem hivatalos számla.

Ahhoz, hogy a teljes összeg közelebb kerüljön a tényleges OpenRouter-költségeidhez, nyisd meg a [**Beállítások** > **Költségkövetés**](#cost-tracking) menüpontot, és kattints a **Szinkronizálás az API-kulcs használatával** lehetőségre.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Az Előzmények oldal hiányzik az oldalsávon

Lehetséges, hogy a **előzmények megőrzése** ki van kapcsolva. Nyisd meg a [**Beállítások** > **Általános beállítások**](#general-settings) menüt, és kapcsold be. Figyelem: a bekapcsolás nem állítja vissza a korábban törölt előzményadatokat.

<br/>

<a id="web-app-session-expired"></a>
### Webalkalmazás: váratlanul a bejelentkező oldalra irányít át

Lehet, hogy lejárt a munkameneted. Jelentkezz be újra. Ha gyakran előfordul, ellenőrizd a szerver beállításait a munkamenet élettartamára vonatkozóan.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Webes admin: elfelejtetted vagy elvesztetted a jelszavadat

Ez a **saját gépen futó webalkalmazásra** (Docker) vonatkozik, nem az asztali (Electron) alkalmazásra.

- Ha egy másik adminisztrátor még be tud jelentkezni, az megnyithatja a [**Beállítások** > **Felhasználók**](#users) menüt, kiválaszthatja a fiókot, és ott beállíthat egy **új jelszót**.
- Ha **kizártak**, de van **shell-hozzáférése** a géphez vagy tárolóhoz, akkor a képhez tartozó segédprogrammal állítsd vissza a jelszót (cseréld le `transrewrt`-t, ha módosítottad az alapértelmezett nevet, és idézőjelezd a jelszót, ha szóközt vagy speciális karaktert tartalmaz):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Az alapértelmezett admin felhasználónév `admin`, ha még sosem hoztál létre más fiókot. Ha csak egy argumentumot adsz meg, azt `admin` új jelszavaként kezeli.

Ha **forráskódból** futtatod az alkalmazást Docker helyett, akkor ezt használd:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

A szkript frissíti a felhasználói rekordot az SQLite adatbázisban (és létrehozhatja a `admin` felhasználót, ha az hiányzik). A visszaállítás után jelentkezzen be az új jelszóval.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Az Irányítópult nem jelenít meg adatokat más felhasználók számára (web)

Csak az **adminisztrátorok** tekinthetik meg az összes felhasználó adatait a **Felhasználó** szűrőn keresztül. A rendes felhasználók csak a saját tevékenységüket látják, ez a tervezés része.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Megváltoztattam egy promptot, és elveszítettem a szerkesztéseket

Prompt szerkesztésekor mindig kattintson a **Mentés** gombra, mielőtt a **Vissza a Futtatáshoz** lehetőségre kattintana.

<br/><br/>

<a id="quick-tips"></a>
## Gyors tippek

- Kezdje a [**Fordítás**](#translate) funkcióval annak ellenőrzéséhez, hogy a beállítás megfelelően működik, mielőtt áttér a [**Átírás**](#rewrite) vagy a [**Átalakítás**](#transform) lehetőségre.
- Használja a [**Átírás**](#rewrite) funkciót mindennapi szövegjavításokhoz.
- Használja a [**Átalakítás**](#transform) funkciót, ha ismételhető munkafolyamatot szeretne egy adott feladathoz.
- Használja az [**Irányítópultot**](#dashboard), ha nyomon szeretné követni a használatot és a költségeket.
- Használja az [**Előzményeket](#history) a korábbi műveletek és teljes bemeneti/kimeneti szövegeik áttekintéséhez.
- Rendszeresen exportálja a promptokat, ha olyan promptkönyvtárat épít, amelyet meg szeretne őrizni (lásd: [Átalakítási promptok](#transform-prompts)), vagy ha meg szeretné osztani másokkal.

<br/><br/>

<a id="disclaimer"></a>
## Felelősségkizárás

A terméknevek és ikonok a jogosultak tulajdonát képezik, kizárólag azonosítási célokra használjuk őket. Ez a szoftver nem kapcsolódik a megemlített márkákhoz, és azok nem is támogatják azt.

<br/><br/>

<a id="license"></a>
## Licenc

Szerzői jog © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
