---
translated_at: "2026-03-29T01:55:05.164Z"
source_hash: "8981b8db163153bfc443046fa20a49b33c92b9feebdee302f6ef60852f273472"
source_mtime: "2026-03-29T01:41:58.368Z"
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt logo](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>

# Felhasználói útmutató

<br/>

<a id="introduction"></a>

## Bevezetés

A Transrewrt három fő módon segít szövegekkel dolgozni:

- **Fordítás** – szöveg átalakítása egyik nyelvről a másikra.
- **Újrafogalmazás** – szöveg újra fogalmazása más stílusban, például világosabban, rövidebben vagy formálisabban.
- **Átalakítás** – szöveg feldolgozása egyéni mesterséges intelligencia-utasításokkal, amelyeket „promptoknak” nevezünk.

<br/>

Ez az útmutató azt magyarázza el, hogyan kell használni az alkalmazást telepítés és indítás után. A telepítési lépésekért tekintsd meg a fő **[README](README.hu.md)** fájlt.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A Transrewrt elérhető asztali alkalmazásként Windows és Linux rendszerre, illetve önállóan üzemeltethető webalkalmazásként. Ez az útmutató az alkalmazás mindennapi használatára koncentrál. Ha egy adott információ csak az egyik változatra vonatkozik, akkor azt egyértelműen megjelöltük.

<small>**Más nyelveken olvasható:** </small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Megjegyzés a felhasználói felület és a dokumentáció fordításához:** A felhasználói felület minden nyelvi változatát, kivéve az eredeti brit angolt, 
> MI-modell segítségével fordítottuk le; a szöveg lehet pontatlan vagy tartalmazhat hibákat.

</small>

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
  - [Nyelvválasztás](#language-selection)
  - [Hasznos fordítási beállítások](#helpful-translation-settings)
- [Átírás](#rewrite)
- [Átalakítás](#transform)
  - [Meglévő prompt futtatása](#run-an-existing-prompt)
  - [Ha még nincs promptod](#if-you-have-no-prompts-yet)
  - [Gyorsan új prompt készítése](#create-a-prompt-quickly)
  - [Prompt szerkesztése](#edit-a-prompt)
  - [Prompt kipróbálása használat előtt](#test-a-prompt-before-using-it)
- [Műszerfal](#dashboard)
  - [Adatok szűrése](#filter-the-data)
  - [Fülek a műszerfalon](#dashboard-tabs)
  - [Adatok exportálása](#export-data)

- [Tárolt rekordok törlése egy modellhez](#delete-stored-records-for-a-model)
- [Előzmények](#history)
  - [Adatok szűrése](#filter-the-data-1)
  - [Előzmények exportálása](#export-history-data)
- [Beállítások](#settings)
  - [Általános beállítások](#general-settings)
  - [Modellek](#models)
  - [Nyelvek](#languages)
  - [Költségkövetés](#cost-tracking)
  - [Parancsok átalakítása](#transform-prompts)
  - [Felhasználók](#users)
  - [API beállítások](#api-config)
  - [Névjegy](#about)
- [Gyakori problémák](#common-issues)
  - [Az alkalmazás nem fordít, átír vagy alakít át szöveget](#the-app-will-not-translate-rewrite-or-transform-text)
  - [A modelllista üres](#the-model-list-is-empty)
  - [Az eredmény túl lassú vagy túl drága](#the-result-is-too-slow-or-too-expensive)
  - [Az interfész hibás nyelven jelenik meg](#the-interface-is-in-the-wrong-language)
  - [A szöveg túl kicsi vagy nehezen olvasható](#the-text-is-too-small-or-hard-to-read)
  - [Az irányítópult diagramjai üresek](#dashboard-charts-are-empty)

- [A költség „nem érhető el” vagy helytelennek tűnik](#cost-shows-not-available-or-seems-wrong)
  - [A teljes költség nem egyezik meg a szolgáltató számlájával](#total-cost-does-not-match-my-provider-bill)
  - [Az előzmények oldal hiányzik az oldalsávon](#the-history-page-is-missing-from-the-sidebar)
  - [Webalkalmazás: váratlanul a bejelentkezési oldalra irányít át](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Webes admin: elfelejtettem vagy elvesztettem a jelszavam](#web-admin-forgot-or-lost-a-password)
  - [Az irányítópult nem jelenít meg adatokat más felhasználókról (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Módosítottam egy promptot, és elvesztek a változtatások](#i-changed-a-prompt-and-lost-the-edits)
- [Gyors tippek](#quick-tips)
- [Jognyilatkozat](#disclaimer)
- [Licenc](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Kezdés előtt

A Transrewrt használatához legalább egy AI-szolgáltatóhoz hozzáférésre van szükséged. A támogatott szolgáltatók: [OpenRouter](https://openrouter.ai) (amely több modellt is összegyűjt), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, valamint [Ollama](https://ollama.com) helyi modellekhez.

Nem szükséges fizetős modellt választani az induláshoz. Amint hozzáadod az OpenRouter API-kulcsodat, az alkalmazás automatikusan engedélyez egy beépített **ingyenes** OpenRouter lehetőséget. Ez lehetővé teszi, hogy azonnal elkezdhesd a szövegek fordítását, átírását és átalakítását. Másik lehetőségként ingyenes API-kulcsot kaphatsz a Cerebras, a Google, a Groq vagy a Mistral AI oldaláról.

Egyszerű nyelven:

- Egy **modell** az az AI-motor, amely elvégzi a feladatot. A modelleket **szolgáltatói előtaggal** soroljuk fel (például `openrouter/…`, `openai/…`, `ollama/…`).
- Egy **API-kulcs** (vagy Ollama esetén egy **alap URL**) az az eszköz, melyen keresztül az alkalmazás eléri a szolgáltatót.

Ha a **desktop alkalmazást** használja, adja hozzá a kulcsokat a [**Beállítások** > **API konfiguráció**](#api-config) menüpontban minden olyan szolgáltatóhoz, amelyet használ. Ha kizárólag az OpenRouter-t használja, tekintse meg az alábbi [Hogyan szerezhetek be API kulcsot](#how-to-get-an-api-key-desktop-app) című szakaszt. Ha nem szeretne API kulcsot használni, telepítheti az Ollama-t ([ollama.com](https://ollama.com)) és helyi modelleket használhat, például a `translategemma:4b` modellt.

Ha a **webes verziót** használja, a szerver üzemeltetője állítja be a szolgáltatókat környezeti változók segítségével, ezért közvetlenül az alkalmazásban nem adhat meg API kulcsokat.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### Ingyenes OpenRouter API-kulcs beszerzése (asztali alkalmazás)

Ha asztali alkalmazást használsz, kövesd az alábbi lépéseket:

1. Látogasd meg a [OpenRouter](https://openrouter.ai) oldalt webes böngészőben.
2. Hozz létre egy fiókot, vagy jelentkezz be.
3. Nyisd meg a [Kulcsok](https://openrouter.ai/keys) oldalt.
4. Kattints a gombra, hogy új API-kulcsot hozz létre.
5. Adj névvel a kulcsnak, hogy később felismerd.
6. Másold ki az új API-kulcsot.
7. Térj vissza a Transrewrt alkalmazáshoz, és nyisd meg a **Beállítások** > **API beállítások** menüpontot.
8. Illeszd be a kulcsot az **OpenRouter API-kulcs** mezőbe (a **Beállítások** > **API beállítások** alatt).
9. Kattints a **OpenRouter kulcs tesztelése** gombra, hogy ellenőrizd, működik-e.

<br/><br/>

<a id="getting-started"></a>

## Első lépések

Ha most használja először a Transrewrt alkalmazást, kövesse az alábbi sorrendet:

1. Nyissa meg az alkalmazást.
2. Szükség esetén válassza ki a **Felhasználói felület nyelvét** a földgömb ikonon keresztül.
3. Ha az **asztali alkalmazást** használja, nyissa meg a [**Beállítások** > **API konfiguráció**](#api-config) menüpontot, adjon hozzá legalább egy szolgáltatóhoz tartozó API-kulcsot (például OpenRouter), majd kattintson a **Teszt** gombra a működés ellenőrzéséhez.
4. Nyissa meg a [**Beállítások** > **Modellek**](#models) menüpontot, és adjon hozzá egy vagy több modellt a **Kiválasztott modellek** közé.
5. Nyissa meg a [**Beállítások** > **Nyelvek**](#languages) menüpontot, és válassza ki a **Leggyakrabban használt nyelveket**, ha azokat szeretné elsőként látni.
6. Lépjen a **Fordítás** fülre, és végezzen el egy egyszerű fordítást az ellenőrzéshez.
7. Ha ez sikeres volt, próbálja ki a **Átírás** majd a **Átalakítás** funkciót.

Ez a sorrend fontos. Elkerülhető így a leggyakoribb első használatkor fellépő probléma: feladat indítása azelőtt, hogy az alkalmazásnak működőképes API-kapcsolata vagy kiválasztott modellje lenne.

<br/><br/>

<a id="main-parts-of-the-window"></a>

## Az ablak fő részei

Az alkalmazás három fő területre oszlik:

- A bal oldalon található **oldalsáv**.
- A felső részen lévő **eszköztár**.
- A középső **munkaterület**.

<br/>

<a id="sidebar"></a>

### Oldalsáv

Az oldalsáv használatával navigálhat az alkalmazásban. Az oldalsáv összezárható a több helyérték érdekében az alkalmazás ikonjának melletti ikonra kattintva.

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
        <li><strong>Átírás</strong> megnyitja az átírási munkaterületet.</li><br/>
        <li><strong>Átalakítás</strong> megnyitja az egyéni prompt munkaterületet.</li><br/>
        <li><strong>Vezérlőpult</strong> megjeleníti a használati és költséginformációkat.</li><br/>
        <li><strong>Beállítások</strong> megnyitja a beállítások panelt.</li><br/>
        <li><strong>Előzmények</strong> megjeleníti a használati előzményeket a bemeneti és kimeneti szövegekkel.</li><br/>
        <li><strong>Felhasználó</strong> megjeleníti a bejelentkezett felhasználó nevét (csak webes verzióban).</li>
      </ul>

</td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Eszköztár

Az eszköztár kis mértékben megváltozik attól függően, hogy hol tart a felhasználó az alkalmazásban.

- Bal oldalon megjelenik az aktuális oldal neve.
- Jobb oldalon megjelenik a **modellszelektor** és az **Interfésenyelv** vezérlő.

A **modellszelektor** lehetővé teszi, hogy kiválassza, melyik MI motort használja az aktuális feladathoz.

  ![Modellszelektor](../images/screenshots/hu/model-selector.png)

Egyes ingyenes modellek nem mindig érhetők el – előfordulhat, hogy éppen offline állapotban vannak, vagy elértek egy használati korlátot. Ilyen esetben az alkalmazás automatikusan eltávolítja az adott modellt a választhatók listájáról. Ha szabályozni szeretné, mely modellek jelenjenek meg, látogasson el a [**Beállítások** > **Modellek**](#models) menüpontra, és szerkessze modelllistáját.  
A modellbeállításokat közvetlenül is megnyithatja a sávban a modell neve melletti szolgáltató ikonra kattintva.

<br/>

A **földgolyó ikon + nyelvkód** az alkalmazás felhasználói felületének nyelvét váltja (például menük, gombok). Ez **nem** befolyásolja a **Fordítás** funkcióban használt fordítási nyelveket.

![Felület nyelv kiválasztó](../images/screenshots/hu/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Bemeneti és kimeneti panel

A legtöbb munkaterület bal oldali **Bemeneti** panelt és jobb oldali **Kimeneti** panelt használ.

Minden panel az alábbiakat is megjeleníti:

| **Bemenet**                                                          | **Kimenet**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Karakterek száma <br/>- Szavak száma <br/>- Bekezdések száma   <br/> | - A feladat elvégzéséhez szükséges idő<br/>- **TPS** (tokenek másodpercenként)<br/>- Karakterek, szavak és bekezdések száma<br/>- A használt modell |

Ha a technikai kifejezések érdeklik:

- A **token** egy kis szövegdarabot jelent. Elképzelhető úgy, mint egy szó része vagy egy rövid szó.
- A **TPS** azt jelenti, hogy a modell másodpercenként hány ilyen szövegrészt dolgozott fel.

<br/>

A műveletek költségét (ha elérhető) és az összesített költséget is figyelemmel kísérheti, ha engedélyezi a [Beállítások > Általános beállítások](#general-settings) menüpontban a „Költséginformációk megjelenítése a műveleteknél” lehetőséget.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>

## Fordítás

A **Fordítás** funkció használatával konvertálhat szöveget egyik nyelvről a másikra.

![Fordítás munkaterület](../images/screenshots/hu/translate.png)

<br/>

<a id="translate-text"></a>

### Szöveg lefordítása

1. Nyissa meg a **Lefordítás** lehetőséget.
2. Válasszon nyelvet a **Honnan** mezőnél.
3. Válasszon nyelvet a **Hova** mezőnél.
4. Válasszon modellt az eszköztárból.
5. Írja be vagy illessze be a szöveget a **Bemenetbe**.
6. Kattintson a **Lefordítás** gombra.
7. Olvassa el az eredményt a **Kimenetben**.
8. Használja a másolás gombot, ha szeretné másolni az eredményt.

<br/>

<a id="language-selection"></a>

### Nyelvválasztás

- A **Forrás** lehet egy adott nyelv vagy **Nyelvfelismerés**.
- A **Cél** a nyelv, amelyre le szeretné fordítani a szöveget.

A kiválasztott **kedvenc nyelvek** a lista tetején jelennek meg. Ezeket állíthatja a [**Beállítások** > **Nyelvek**](#languages) menüpontban.

<br/>

<a id="helpful-translation-settings"></a>

### Hasznos fordítási beállítások

A [**Beállítások** > **Általános beállítások**](#general-settings) menüpontban megváltoztathatja a fordítás működését:

- **Automatikus lefordítás beillesztéskor**: a szöveg beillesztésekor azonnal fut le a fordítás.
- **Eredmény automatikus másolása a vágólapra**: sikeres futtatás után az eredményt automatikusan a vágólapra másolja.
- **Valós idejű fordítás (gépelés közben)**: a gépelés közben fut le a fordítás.
- **Időtúllépés (ms)**: meghatározza, hogy mennyi ideig várjon az alkalmazás a valós idejű fordítás elindítása előtt.
- **Enter**: meghatározza, mi történjen az `Enter` billentyű lenyomásakor:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Újraírás

Használja az **Újraírás** funkciót, ha javítani szeretné a szöveg fogalmazását anélkül, hogy megváltoztatná a fő jelentést.

![Újraírás munkaterület](../images/screenshots/hu/rewrite.png)

Ez akkor hasznos, ha:

- helyesírási és nyelvtani hibákat szeretne javítani (**Helyesírás- és nyelvtan-ellenőrzés**)
- világosabbá szeretné tenni a szöveget (**Világosabbá tétel**)
- több különböző átfogalmazást szeretne egyszerre (**Alternatív változatok**)
- formálisabbá vagy társasági stílusúbbá szeretné tenni a szöveget (**Formális** / **Társasági**)
- rövidebbé vagy hosszabbá szeretné tenni a szöveget (**Rövidítés** / **Kiterjesztés**)
- technikaiabb hatásúvá szeretné tenni a szöveget (**Technikaiabbá tétel**)

<br/>

> 💡 **TIPP**<br/>
> Ha a "**Helyesírás- és nyelvtan-ellenőrzés**" módot választja, a kimeneti panelen megjelenik egy **Változások megjelenítése** kapcsoló (a **Másolás** mellett).
> Kapcsolja be vagy ki, hogy láthatóvá vagy rejtetté tegye a szövegre alkalmazott konkrét javításokat.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Átalakítás

Használja az **Átalakítás** funkciót, ha azt szeretné, hogy a mesterséges intelligencia egyéni utasításokat kövessen.

![Átalakítás munkaterület](../images/screenshots/hu/transform.png)

Ez az alkalmazás legrugalmasabb része. Az alábbi feladatokhoz használható:

- jegyzetek összegzése
- durva szöveg átalakítása professzionális e-mailré
- kulcsfontosságú pontok kinyerése
- szöveg átalakítása bizonyos formátumba
- bármilyen egyéni feladat a bemeneti szöveggel

<br/>

<a id="run-an-existing-prompt"></a>

### Meglévő prompt futtatása

1. Nyissa meg a **Transzformáció** lehetőséget.
2. Válasszon ki egy promptot a promptlista listából.
3. Ha megjelenik egy **Cél** nyelv mező, válasszon nyelvet, ha szeretne.
4. Írjon be szöveget vagy illessze be a **Bemenet** mezőbe.
5. Kattintson a **Transzformáció** gombra.
6. Olvassa el az eredményt a **Kimenet** mezőben.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Ha még nincsenek prompok

Ha a promptjainak listája üres, kattintson a **Mintapromtok betöltése** gombra a Transzformálás munkaterületen. Ugyanez az elem mindig elérhető a [**Beállítások** > **Transzformációs promtok**](#transform-prompts) menüpontban az exportálás/importálás sorában. Mindkettő beépített példákat ad hozzá, így gyorsan elkezdheti a munkát.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A mintapromtok angol nyelven érhetők el. A betöltésük után bármelyik promptot szerkesztheti, majd használja a **Prompt lefordítása** funkciót, hogy lefordítsa a saját nyelvére.

<br/>

<a id="create-a-prompt-quickly"></a>

### Gyorsan létrehozhat egy promptot

A prompt létrehozásának leggyorsabb módja:

1. Kattintson az **Új prompt** lehetőségre.
2. Kattintson a **Prompt generálása** lehetőségre.
3. Írja le, mit szeretne, hogy a prompt csináljon.
4. Válasszon egy modellt.
5. Hagyja, hogy az alkalmazás vázlatot készítsen önnek.
6. Tekintse át a vázlatot, és kattintson a **Mentés** gombra.

![Prompt generálása](../images/screenshots/hu/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### Parancs módosítása

Ha létrehoz vagy módosít egy parancsot, az szerkesztő a bal oldalon jelenik meg, a tesztterület pedig a jobb oldalon.

![Átalakító parancsszerkesztő](../images/screenshots/hu/transform-prompt-edit.png)

A fő mezők a következők:

- **Parancs neve**: a parancslistában megjelenő név.
- **Parancs utasításai (opcionális)**: egy rövid útmutató, amely megjelenik a felhasználónak a parancs futtatásakor.
- **Modellszerep**: az AI-nak rendelt alapvető szerepkör, például: „Hasznos segéd vagyok.”
- **Modellutasítások (soronként egy)**: azok a konkrét szabályok, amelyeket az AI-nek követnie kell.
- **Kimenet leírása**: a végeredményt röviden jellemző szó, például „összefoglalás” vagy „újraírás”.
- **Hőmérséklet (0,0 → 1,0)**: a modell működési stílusa; lásd lentebb.
- **Célnyelv megadásának kérése**: célnyelv-választó mezőt ad hozzá a parancs futtatásakor.

Ha a **Hőmérséklet** technikai fogalma új számodra, képzelj rá így:

- Az **alacsonyabb** hőmérséklet stabilabb, kiszámíthatóbb eredményeket eredményez.

- A **magasabb** hőmérséklet több változatosságot és kreativitást eredményez.

Használhatja még:

- A **`Prompt generálása`** funkciót, hogy új vázlatot készítsen egy egyszerű leírásból
- Az **`Prompt javítása`** funkciót, hogy finomítsa a meglévő promptot
- A **`Prompt fordítása`** funkciót, hogy lefordítsa a prompt mezőket

<br/>

> ⚠️ **FIGYELEM**<br/>
> Kattintson a **`Mentés`** gombra, mielőtt a **`Vissza a Futtatáshoz`** lehetőségre kattint. Ha mentés nélkül tér vissza, a módosításai elvesznek.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Kipróbálhatja a promptot a használata előtt

A jobb oldali tesztpanel segítségével kipróbálhatja a promptot mintaszöveggel, mielőtt mindennapi munkájában használná.

Ez akkor hasznos, ha:

- új promptot készít
- két promptverziót hasonlít össze
- ellenőrizni szeretné a hangnemet, a hosszt vagy a kimeneti formátumot

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A mentett promptokat exportálhatja és importálhatja a [**Beállítások** > **Átalakítási promptok**](#transform-prompts) menüpontban.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Vezérlőpult

Használja a **Vezérlőpultot** annak megtekintéséhez, mennyit használja az alkalmazást, és mennyibe kerül az (fizetős modellek esetén).

![Vezérlőpult összefoglaló](../images/screenshots/hu/dashboard-summary.png)


<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Ha csak **ingyenes** modelleket használ, a **költség** értéke lehet nulla, és a költségekre fókuszáló összesítések üresen jelenhetnek meg. Az **Összegzés**, **Használat időbeli alakulása** és **Használat modellenként** továbbra is megjeleníti a **hívások számát** (fordítás, átírás és átalakítás), ha történt tevékenység a kiválasztott időszakban.

<br/>

<a id="filter-the-data"></a>

### Adatok szűrése

A felső szűrőgombok használatával változtathatja meg az időtartományt.

![Irányítópult szűrői](../images/screenshots/hu/dashboard-filter.png)

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A **Felhasználó** szűrő csak az adminisztrátorok számára látható a webes verzióban. A rendes felhasználók nem látják ezt a szűrőt, és az asztali alkalmazásban sem érhető el.

<br/>

<a id="dashboard-tabs"></a>

### Irányítópult fülek

- A **Összegzés** áttekintést nyújt a használatról és a költségekről. Tartalmaz egy **Használat időbeli alakulását** (napi szintű, halmozott **hívásszámok** a fordítás, átírás és átalakítás tekintetében), valamint **Használat modellenként** (összes **hívás modellenként**, beleértve az átalakítást is).
- A **Használat szerint** fül részletesen megjeleníti a tevékenységet a fordítási nyelvek, átírási módok és átalakítási utasítások szerint.
- A **Modell szerint** fül mutatja, mely modelleket használta, és azok mennyibe kerültek.
- A **Naponta** fül napi összesítéseket mutat.
- Az **Összes hívás** fül a teljes hívási előzményeket jeleníti meg, és lehetővé teszi azok exportálását.

<br/>

<a id="export-data"></a>

### Adatok exportálása

Az irányítópult táblái adatokat exportálhatnak a következő formátumokban:

- **JSON**
- **CSV**
- **XLSX**

Ez akkor hasznos, ha az alkalmazáson kívül szeretné ellenőrizni a tevékenységeket, vagy meg szeretne osztani egy kimutatást.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Eltárolt rekordok törlése egy modellhez

A **Modell szerint** vagy az **Összes hívás** nézetben eltávolíthatja egy modellhez tartozó eltárolt rekordokat a „kukára” kattintva.

> ⚠️ **FIGYELMEZTETÉS**<br/>
> Az eltárolt rekordok törlése visszafordíthatatlan. Csak akkor használja ezt, ha biztosan nincs többé szüksége az adott előzményekre.

Ha az összes adatot törölni kívánja, vagy csak az adott kort meghaladó rekordokat, lépjen a [**Beállítások** > **Költségkövetés**](#cost-tracking) menüponthoz. Itt lehetősége van az összes tárolt adat törlésére, vagy csak az egy adott dátumnál régebbi adatok eltávolítására.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Előzmények

Kattintson az **Előzmények** elemre a **Transrewrt** programon belüli műveleteinek előzményeinek megtekintéséhez, beleértve minden művelet bemenetét és kimenetét.

![Előzmények oldal](../images/screenshots/hu/history.png)

<br/>

<a id="filter-the-history"></a>

### Adatok szűrése

A **Történet** ugyanazokat a szűrőket használja, mint a **Műszerfal** oldal. Használja ezeket a szűrőket az időintervallum kiválasztásához.

![Műszerfal szűrők](../images/screenshots/hu/dashboard-filter.png)

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A **Felhasználó** szűrő csak az adminisztrátorok számára látható a webes verzióban. A rendes felhasználók nem látják ezt a szűrőt, és az asztali alkalmazásban sem érhető el.

<br/>

<a id="export-history-data"></a>

### Előzmények adatainak exportálása

Az előzmények oldal exportálhatja a szűrt adatokat a következő formátumokban:

- **JSON**
- **CSV**
- **XLSX**

Ez akkor hasznos, ha az alkalmazáson kívül szeretnéd áttekinteni a tevékenységeket, vagy meg szeretnél osztani egy jelentést.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>

## Beállítások

Nyissa meg az **Állításokat** az oldalsávon, hogy testre szabja az alkalmazás működését.

A rendelkezésre álló fülek az Ön platformjától és szerepkörétől függenek:

| Fül               | Asztali | Web (admin) | Web (rendes felhasználó) |
|-------------------|:-------:|:-----------:|:------------------------:|
| Általános beállítások | igen | igen | igen |
| Modellek            | igen | igen | igen |
| Nyelvek             | igen | igen | igen |
| Költségkövetés      | igen | igen | — |
| Átalakító promptok  | igen | igen | igen |
| Felhasználók        | — | igen | — |
| API beállítások     | igen | igen | — |
| Névjegy             | igen | igen | igen |

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A webes verzióban minden felhasználó rendelkezik saját konfigurációval. A kiválasztott modellek, nyelvek, általános beállítások és átalakítási utasítások felhasználónként kerülnek tárolásra. Az Ön által végzett módosítások nem befolyásolják más felhasználók beállításait.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Általános beállítások

Az **Általános beállításokkal** szabályozhatja a gépelés viselkedését, hogy a végrehajtási részleteket mentse-e az **Előzményekbe**, valamint a megjelenését.

**Viselkedés**

- Az **ENTER viselkedése** határozza meg, hogy az `Enter` billentyű futtassa a feladatot vagy új sort szúrjon be.
- A **Beillesztéskor automatikus fordítás** a szöveg beillesztésekor azonnal elindítja a fordítást.
- A **Fordítási eredmény automatikus másolása a vágólapra** sikeres fordítás esetén automatikusan másolja az eredményt.
- Az **Istenségben történő fordítás (gépelés közben)** a gépelés közben fordít.
- Az **Időtúllépés (ms)** beállítja a várakozási időt az azonos idejű fordításhoz.

**Előzmények**

- Az **Végrehajtási előzmények megtartása** meghatározza, hogy minden fordítás, átírás és átalakítás eltárolja-e a **bemeneti és kimeneti szöveget** az oldalsávon található [**Előzmények**](#history) nézet számára. Ha ezt kikapcsolja, megerősítést fog kérni; ha megerősíti, a tárolt előzmények szövege el lesz távolítva az adatbázisból.

- Az **Előzmények törlése** lehetővé teszi a tárolt szövegek kor alapján történő eltávolítását (például néhány hónapnál régebbi, vagy **az összes adat (teljes törlés)**) a **Adatok törlése** funkció segítségével. Ez kizárólag a **Történet** nézetben mentett végrehajtási szövegeket érinti; **nem** törli a költség- vagy használati összesítést. A **költség** adatok eltávolításához vagy csökkentéséhez használja a [**Beállítások** > **Költség követés**](#cost-tracking) lehetőséget.

**Megjelenés**

- Az **Műveletekhez költséginformáció megjelenítése** vezérli az egységenkénti költség (ha elérhető) és az összes költség megjelenítését a Fordítás, Átírás és Átalakítás kimeneti paneljein.
- A **Költség tizedesjegyek száma** megváltoztatja a költségek tizedes értékeinek megjelenítését.
- **Csak webes verzió:** az **alkalmazás körüli margó megjelenítése** további térközt ad a felület köré.
- A **Betűtípus** megváltoztatja a szövegdobozokban használt írásstílust.
- A **Méret** megváltoztatja a betűméretet.

**Beállítások biztonsági mentése**

- **Használati adatok belefoglalása a mentésbe** — ha engedélyezve van, a ZIP fájl a végrehajtási előzményeket és az API hívások adatait is tartalmazza.

- **Biztonsági mentés készítése** — egyetlen ZIP fájlt hoz létre (`transrewrt-config-backup-ÉÉÉÉ-HH-NN_ÓÓPHMP.zip`, alapértelmezés szerint UTC időzónában) a következőkkel: `config.json`, `state.json`, opcionális titkosítási kulcs, felhasználók, beállítások, egyéni utasítások (promptok) és használati adatok (ha ezt választotta). Sikeres mentés után megerősítésként megjelenik a mentett fájl neve.
- **Visszaállítás biztonsági mentésből** — először egy **megerősítő párbeszédablak** nyílik meg. Válassza ki a mentési ZIP fájlt az ablakon belül (**Tallózás** / fájlválasztó vagy fogd és vidd, ahol támogatott), majd tekintse át a beállításokat:
  - **Használati adatok visszaállítása** — importálja a használati adatokat/történetet a ZIP-ből, ha mentéskor ezek is belekerültek; hagyja érintetlenül, ha csak a beállításokat és promptokat szeretné visszaállítani.
  - **Régi használati adatok törlése visszaállítás előtt** — eltávolítja a jelenlegi telepítésen lévő meglévő használati adatokat/történetet a mentés alkalmazása előtt (nem kötelező; akkor hasznos, ha teljesen újra szeretné cserélni az adatokat).

A webes vagy asztali verzióban készített mentések a másik verzióban is visszaállíthatók. Amikor egy asztali mentést állít vissza a webes verzióban, az adatok az adminisztrátori felhasználóhoz kerülnek visszaállításra.


<br/>

<a id="models"></a>

### Modellek

A **Beállítások** > **Modellek** menüpontban választhatja ki, mely modellek jelenjenek meg az eszköztáron.

![Beállítások – Modellek fül](../images/screenshots/hu/settings-models.png)

Az oldal két listából áll:

- **Elérhető modellek** – bal oldalon
- **Kiválasztott modellek** – jobb oldalon

Hasznos vezérlők:

- **Modellek keresése...** – modell neve alapján
- **Szolgáltató** címkék – a lista szűkítése egyetlen motorra (OpenRouter, OpenAI, Ollama, …)
- **Csak ingyenesek** – kizárólag ingyenes modellek megjelenítése
- **Frissítés** – lista újratöltése
- **Összes kibontása** és **Összes összecsukása** – amikor szolgáltató szerint rendez
 
A modell azonosítók tartalmazzák a szolgáltató előtagját (például `openrouter/…` vagy `openai/…`). Címkék, mint például az **OpenAI (OpenRouter)**, vagy az **OpenAI (közvetlen)** jelzik, hogyan irányul a forgalom.

> ℹ️ **MEGJEGYZÉS**<br/>

> **OpenRouter Body Builder** (`openrouter/bodybuilder`) egy útválasztási modell, nem általános csevegési modell: a válasza egy JSON, amely az OpenRouter API kérési törzseit írja le (például egy `requests` tömb `model` és `messages` mezőkkel). Ha ezt modellt használja **Fordításra**, **Átírásra** vagy **Átalakításra**, akkor a kimeneti panel ezt a JSON-t fogja megjeleníteni, nem pedig kész szöveget. Az ilyen feladatokhoz válasszon normál szöveges modellt. Részletekért lásd az [OpenRouteron a Body Builder modell oldalát](https://openrouter.ai/openrouter/bodybuilder).

Műveletek:

 - Modell hozzáadásához kattintson az **Hozzáadás** gombra, vagy bárhová az adott sornak a mezőjébe.

 - Modell eltávolításához kattintson a mellette lévő **X** gombra a **Kiválasztott modellek** között, vagy az **Elérhető modellek** listában a bejegyzésnél a **Kiválasztott** mezőre.

 - A lista törléséhez kattintson a **Kiválasztás megszüntetése** gombra. A kötelező ingyenes modell a listában marad.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>

> Ha nem szeretne azonnal hitelt felvenni az OpenRouter számára, először engedélyezze a **Csak ingyenes** lehetőséget, és válassza ki az ingyenes modelleket (hitelkártya nélkül). Használhatja az Ollama-t is, hogy modelleket futtasson helyben API-kulcs nélkül.

<br/>

<a id="languages"></a>

### Nyelvek

Használd a **Beállítások** > **Nyelvek** lehetőséget az alkalmazás nyelvlistáinak rendezéséhez.

- A **kedvenc nyelveket** a rendszer rögzíti a **Fordítás** és az **Átalakítás** nyelvlistáinak tetejéhez.
- A **saját nyelvvel** hozzáadhatsz egy, a beépített listán nem szereplő nyelvet.

Ha saját nyelvet adsz hozzá, az megjelenik a nyelvválasztókban a beépített lehetőségek mellett.

<br/>

<a id="cost-tracking"></a>

### Költségek nyomon követése

Használd a **Beállítások** > **Költségek nyomon követése** lehetőséget a költséginformációk kezeléséhez.

- A **Teljes költség** a jelenlegi összesített értéket mutatja.
- **Érték másolása** a teljes összeget a vágólapra másolja.
- **Költség visszaállítása** az eltárolt összeget nullára állítja vissza.
- **Szinkronizálás az API-kulcs használatával** az eltárolt összeget az OpenRouter fiókodban jelentett használattal igazítja össze (csak OpenRouter esetén).
- **API-kulcs használat** megjeleníti az OpenRouter használat részleteit, ha rendelkezésre áll.
- **Költségadatok törlése** az összes adatot törli, vagy csupán a kiválasztott dátumnál régebbi bejegyzéseket.

**Költségek nyomon követése:** Ha OpenRouter modelleket használsz, az alkalmazás az OpenRouter adatai alapján jeleníti meg a tényleges használatot és költségeket. Más szolgáltatók esetén az alkalmazás az OpenRouter által közzétett árak alapján becsli a költségeket. Ha egy adott modell ára nincs megadva, az becslés nullás lehet.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> **Minden költségadat csak tájékoztató jellegű becslés, nem hivatalos számlázási kimutatás.**

<br/>

> ⚠️ **FIGYELMEZTETÉS**<br/>

> Az adatok törlése visszafordíthatatlan. A törlés előtt győződjön meg arról, hogy biztonsági másolatot készített az adatairól, vagy exportálta őket a [**Előzmények**](#history) lehetőséggel, illetve a [**Irányítópult** > **Összes hívás**](#dashboard-tabs) menüpontban, különben az adatok véglegesen elvesznek.  
> Minden API-hívási bejegyzéssel kapcsolatos bemeneti és kimeneti előzmény is törlődni fog.


<br/>

<a id="transform-prompts"></a>

### Parancsok átalakítása

A mentett parancsok tömeges kezeléséhez használja a **Beállítások** > **Parancsok átalakítása** lehetőséget.

A következő műveletek végezhetők el:

- mentett parancsok áttekintése
- parancsok törlése
- parancsok importálása fájlból
- parancsok exportálása biztonsági mentéshez vagy megosztáshoz
- mintaparancsok betöltése a parancslista frissítéséhez

<br/>

<a id="users"></a>

### Felhasználók

Használja a **Felhasználók** menüpontot a felhasználói fiókok kezeléséhez a webes verzióban. Hozzáadhat felhasználókat, frissítheti adataikat, visszaállíthatja jelszavukat, illetve törölheti fiókjaikat.

<br/>

<a id="api-config"></a>

### API konfiguráció

Az támogatott szolgáltatók: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, és **Ollama** (helyi modellek alap URL-en keresztül). Csak azokat a szolgáltatókat kell konfigurálnia, amelyeket használ.

**Webalkalmazás: csak rendszergazdának**

Az API kulcsokat a rendszer- vagy Docker környezeti változókon keresztül kell beállítani – nem a webes felhasználói felületen adhatók meg. Ez az oldal megmutatja, hogy mely szolgáltatókhoz van konfigurálva API kulcs, és lehetővé teszi azok tesztelését a **`Teszt`** gombra kattintva.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Ha API kulcsot szeretne megváltoztatni, frissítse a környezeti változót a rendszerében vagy a Docker konfigurációjában, majd indítsa újra a szervert vagy a konténert.

> ℹ️ **MEGJEGYZÉS**<br/>

> **Konfigurációs biztonsági mentések** (lásd: [**Általános beállítások** → Konfiguráció mentése](#general-settings)) beágyazhatják a **feloldott** szolgáltatói kulcsokat a ZIP `config.json` fájljába. Ennek a ZIP-nek a visszaállítása **nem** másolja vissza ezeket a kulcsokat a szerver mentett konfigurációs fájljába – a jelenlegi kulcsok továbbra is a környezetből és a meglévő fájllétesítményből származnak, ahogyan ott le van írva.

<br/>

**Asztali alkalmazás**

Használja az **API-beállításokat** az Ön által használt minden szolgáltató API-kulcsainak tárolásához. Ollama esetén adja meg az **alap URL-t** API-kulcs helyett.

<br/>

> 💡 **Tipp** <br/>
> Ha nem szeretne API-kulcsot használni, vagy fizetni a használatért, letöltheti és helyben futtathatja az [Ollama-t](https://ollama.com) (például a `translategemma:4b` modellt) a gépén ingyen. Alternatív megoldásként ingyenes OpenRouter fiókot hozhat létre (bankszámlakártya nélkül), hogy az ingyenes modelleiket használhassa, vagy ingyenes API-kulcsot szerezhet a Cerebras, Google, Groq vagy Mistral AI oldaláról.

<br/>

- Csak a szükséges szolgáltatókat adja hozzá. A **Beállítások** > **Modellek** menüpontban minden modellazonosító a szolgáltatónál kezdődik (például `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Egy API-kulcs hozzáadásához írja be az értéket a szövegmezőbe, majd kattintson a **`Mentés`** gombra. Egy meglévő kulcs lecseréléséhez kattintson az **`Szerkesztés`** gombra. Annak ellenőrzéséhez, hogy egy kulcs működőképes-e, kattintson a **`Teszt`** gombra. Az Ollama alap URL-címéhez mindig kattintson a **`Teszt`** gombra a kapcsolat ellenőrzéséhez.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Az API-kulcs jelenlegi értékét nem lehet megtekinteni. Csak az **`Szerkesztés`** gomb használatával lehet lecserélni.
> Az API-kulcsok titkosítva kerülnek tárolásra a konfigurációban.

<br/>

<a id="about"></a>

### Névjegy

A **Névjegy** lap a következőket mutatja:

- az alkalmazás nevét
- a verziószámot
- a fordítás dátumát
- egy hivatkozást a projektenkénti tárhelyre

<br/><br/>

<a id="common-issues"></a>

## Gyakori problémák

Ha valami nem úgy működik, ahogy várná, ellenőrizze először a következő pontokat.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>

### Az alkalmazás nem fordítja le, nem írja át vagy nem alakítja át a szöveget

Ellenőrizze a következőket:

- kiválasztott egy modellt az eszköztárból
- legalább egy modell szerepel a [**Beállítások** > **Modellek**](#models) menüpontban
- az API-beállításai működnek

Ha az asztali alkalmazást használja:

1. Nyissa meg a [**Beállítások** > **API-beállítás**](#api-config) menüpontot.
2. Ellenőrizze, hogy legalább egy API-kulcs el van-e mentve.
3. Kattintson a szolgáltató melletti **Teszt** gombra, hogy ellenőrizze, működik-e a kulcs.

<br/>

<a id="the-model-list-is-empty"></a>

### A modelllista üres

Nyissa meg a [**Beállítások** > **Modellek**](#models) menüpontot, majd kattintson a **Frissítés** gombra.

Ha szükséges:

- keressen egy modellt
- kapcsolja be az **Csak ingyenes** lehetőséget
- adjon hozzá egy vagy több modellt a **Kiválasztott modellekhez**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>

### Az eredmény túl lassú vagy túl költséges

Próbálja ki a következők egyikét vagy többjét:

- válasszon másik modellt
- használjon rövidebb bemenetet
- kapcsolja ki a **Valós idejű fordítás (gépelés közben)** funkciót a [**Beállítások** > **Általános beállítások**](#general-settings) menüpontban
- egyszerű feladatokhoz használjon ingyenes modelleket (lásd: [Modellek](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### A felület rossz nyelven jelenik meg

Kattintson a földgömb ikonra az [eszköztáron](#toolbar) és válassza ki a kívánt **Felület nyelvét**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>

### A szöveg túl kicsi vagy nehezen olvasható

Nyissa meg a [**Beállítások** > **Általános beállítások**](#general-settings) menüpontot, és módosítsa a következőket:

- **Betűtípus**
- **Méret**

<br/>

<a id="dashboard-charts-are-empty"></a>

### Az irányítópult diagramjai üresek

Ez normális, ha:

- kizárólag **ingyenes modelleket** használsz, és a **költségre** vonatkozó adatokat nézed (az érték lehet nulla); a **Használat** hívásszám-diagramjai a **Összegzés** fülön még mindig szükségük van az adott időszakra vonatkozó adatokra
- a kiválasztott **időszűrő** nem fedi le a hívások idejét – próbáld meg az **Összes** lehetőséget ellenőrzés céljából

Ha a diagramok továbbra is üresek az **Összes** kiválasztása után, ellenőrizd, hogy megjelennek-e a hívások az [**Előzmények**](#history) vagy az **Összes hívás** fülön.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### A költség „nem elérhető” vagy helytelennek tűnik

Amikor **OpenRouter** segítségével használ modelleket, az alkalmazás az OpenRouter által jelentett tényleges kiadását jeleníti meg.

**Más szolgáltatók** (közvetlen OpenAI, közvetlen Anthropic stb.) esetén a költség az OpenRouter által közzétett áradatak alapján történik becslés. Ha egy modellhez nem található megfelelő ár, a költség **nem elérhetőként** jelenik meg, és nem kerül hozzáadásra a folyó összköltséghez.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### Az összes költség nem egyezik az elszámoló számlámmal

Az alkalmazásban szereplő költségek **csak tájékoztató jellegű becslések**, nem hivatalos számlák.

Ahhoz, hogy az összeg közelebb kerüljön a valós OpenRouter-költségeihez, nyissa meg a [**Beállítások** > **Költségkövetés**](#cost-tracking) menüpontot, majd kattintson az **Szinkronizálás az API-kulcs használatával** lehetőségre.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### Az előzmények oldal hiányzik az oldalsávon

A **Végrehajtási előzmények megtartása** funkció lehetséges, hogy ki van kapcsolva. Nyissa meg a [**Beállítások** > **Általános beállítások**](#general-settings) menüpontot, és engedélyezze ezt a funkciót. Figyelje meg, hogy a bekapcsolás nem állítja vissza a korábban törölt előzményeket.

<br/>

<a id="web-app-session-expired"></a>

### Webalkalmazás: váratlanul átirányítva a bejelentkezési oldalra

A munkamenete lejárhatott. Jelentkezzen be újra. Ha gyakran előfordul, ellenőrizze a szerver konfigurációját a munkamenet élettartam beállításai tekintetében.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Webes admin: elfelejtett vagy elveszített jelszó

Ez a **saját szerveren futó webes alkalmazásra** (Docker) vonatkozik, nem az asztali (Electron) alkalmazásra.

- Ha egy másik rendszergazda még be tud jelentkezni, az megnyithatja a [**Beállítások** > **Felhasználók**](#users) menüpontot, kiválaszthatja a fiókot, és ott **új jelszót** állíthat be.
- Ha **kizárták** magát, de van **shell-hozzáférése** a géphez vagy a tárolóhoz, akkor állítsa vissza a jelszót a képhez mellékelt segédprogrammal (cserélje le a `transrewrt` nevet, ha módosította az alapértelmezett nevet, és idézőjelek közé tegye a jelszót, ha szóközt vagy speciális karaktert tartalmaz):

```bash
docker exec transrewrt reset-web-password '<felhasználónév>' '<új-jelszó>'
```

Ha soha nem hozott létre más fiókot, az alapértelmezett admin felhasználónév az `admin`. Ha csak egy argumentumot ad meg, akkor az az `admin` új jelszavaként lesz értelmezve.

Ha **forráskódból** futtatja az alkalmazást Docker helyett, ezt használja:

```bash
pnpm run reset-web-password -- <felhasználónév> <új-jelszó>

A szkript frissíti a felhasználói adatokat az SQLite adatbázisban (és létrehozhatja az `admin` felhasználót, ha az hiányzik). A visszaállítás után jelentkezzen be az új jelszóval.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### Irányítópult nem jelenít meg adatokat más felhasználók esetén (web)

Csak az **adminisztrátorok** tekinthetik meg minden felhasználó adatait a **Felhasználó** szűrőn keresztül. A hagyományos felhasználók szándékosan csak a saját tevékenységüket látják.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### Módosítottam egy promptot, de elveszítettem a változtatásokat

Amikor egy promptot szerkesztesz, mindig kattints a **Mentés** gombra, mielőtt a **Vissza a futtatáshoz** lehetőségre kattintanál.

<br/><br/>

<a id="quick-tips"></a>

## Gyors tippek

- Kezdje a [**Fordítás**](#translate) funkcióval annak ellenőrzéséhez, hogy a beállítás megfelelően működik, mielőtt a [**Átírás**](#rewrite) vagy a [**Átalakítás**](#transform) funkcióhoz lépne.
- Használja a [**Átírás**](#rewrite) funkciót mindennapi szövegjavításokhoz.
- Használja a [**Átalakítás**](#transform) funkciót, ha ismételhető munkafolyamatra van szüksége egy adott feladathoz.
- Használja a [**Irányítópulton**](#dashboard) annak nyomon követésére, hogy mennyit használja a szolgáltatást, és mennyibe kerül.
- Használja az [**Előzmények**](#history) funkciót, ha korábbi műveleteket és a teljes bemeneti/kimeneti szöveget szeretné megtekinteni.
- Rendszeresen exportálja az utasításokat, ha prompt-gyűjteményt készít, amelyet biztonságban szeretne tartani (lásd: [Átalakítási Promptok](#transform-prompts)), vagy ha meg szeretné osztani másokkal.

<br/><br/>

<a id="disclaimer"></a>

## Felhasználási nyilatkozat

A terméknevek és ikonok a jogosult tulajdonában állnak, és kizárólag azonosítási céllal használatosak. Ez a szoftver nem kapcsolódik közvetlenül vagy közvetve az említett márkákhoz, és azok nem is támogatják azt.

<br/><br/>

<a id="license"></a>

## Licenc

Copyright © 2026 Waldemar Scudeller Jr.

[Apache Licenc 2.0](LICENSE)