![Transrewrt szalaghirdetés](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Felhasználói útmutató

<br/>

<a id="introduction"></a>
## Bevezetés

A Transrewrt három fő módon segít a szöveggel való munkában:

- **Fordítás** – szöveg átalakítása egyik nyelvről a másikra.
- **Átírás** – szöveg újrafogalmazása más stílusban, például érthetőbben, rövidebben vagy formálisabban.
- **Átalakítás** – szöveg feldolgozása egyéni MI-utasításokkal, amelyeket utasításoknak (promptoknak) nevezünk.

Alapértelmezés szerint az alkalmazás **Egyszerű** módban fut: kiválaszt egy **előbeállítást** (például Ingyenes (OpenRouter), Alapértelmezett, Haladó vagy Műszaki) és egy **szolgáltatót** a Beállításokban, anélkül, hogy modellazonosítókat választana. Váltson **Haladó** módra a [**Beállítások** > **Általános beállítások**](#general-settings) menüpontban, ha a klasszikus modelllistát szeretné használni a [**Beállítások** > **Modellek**](#models) menüpontban.

<br/>

Ez az útmutató azt ismerteti, hogyan használható az alkalmazás telepítés és indítás után. A telepítési lépésekért lásd a fő [**README**](README.hu.md) fájlt.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A Transrewrt elérhető asztali alkalmazásként Windows és Linux rendszerekre, valamint önkiszolgáló webalkalmazásként. Ez az útmutató az alkalmazás mindennapi használatára koncentrál. Ha valami csak egy verzióra vonatkozik, azt egyértelműen megjelöljük.

<small>**Olvassa más nyelveken:** </small>
<small id="lang-list">[English (UK)](../USER-GUIDE.md) · [Português (Brasil)](./USER-GUIDE.pt-BR.md) · [العربية](./USER-GUIDE.ar.md) · [বাংলা](./USER-GUIDE.bn.md) · [Català](./USER-GUIDE.ca.md) · [简体中文](./USER-GUIDE.zh-Hans.md) · [繁體中文](./USER-GUIDE.zh-Hant.md) · [Hrvatski](./USER-GUIDE.hr.md) · [Čeština](./USER-GUIDE.cs.md) · [Nederlands](./USER-GUIDE.nl.md) · [English (US)](./USER-GUIDE.en-US.md) · [Tagalog](./USER-GUIDE.tl.md) · [Français](./USER-GUIDE.fr.md) · [Deutsch](./USER-GUIDE.de.md) · [Ελληνικά](./USER-GUIDE.el.md) · [Hindi (Roman)](./USER-GUIDE.hi-Latn.md) · [Magyar](./USER-GUIDE.hu.md) · [Italiano](./USER-GUIDE.it.md) · [日本語](./USER-GUIDE.ja.md) · [한국어](./USER-GUIDE.ko.md) · [Bahasa Melayu](./USER-GUIDE.ms.md) · [فارسی](./USER-GUIDE.fa.md) · [Polski](./USER-GUIDE.pl.md) · [Basa Jawa](./USER-GUIDE.jv.md) · [Português](./USER-GUIDE.pt.md) · [پنجابی](./USER-GUIDE.pa-PK.md) · [Română](./USER-GUIDE.ro.md) · [Русский](./USER-GUIDE.ru.md) · [Slovenčina](./USER-GUIDE.sk.md) · [Español](./USER-GUIDE.es.md) · [Kiswahili](./USER-GUIDE.sw.md) · [Svenska](./USER-GUIDE.sv.md) · [తెలుగు](./USER-GUIDE.te.md) · [ไทย](./USER-GUIDE.th.md) · [Türkçe](./USER-GUIDE.tr.md) · [Українська](./USER-GUIDE.uk.md) · [Tiếng Việt](./USER-GUIDE.vi.md)</small>

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
  - [Nyelv kiválasztása](#language-selection)
  - [Hasznos fordítási beállítások](#helpful-translation-settings)
  - [A fordítás finomítása](#refining-your-translation)
  - [A szószedet használata](#using-the-glossary)
- [Átírás](#rewrite)
  - [Szöveg átírása](#rewrite-text)
  - [Az átírás finomítása](#refining-your-rewrite)
- [Átalakítás](#transform)
  - [Meglévő kérés futtatása](#run-an-existing-prompt)
  - [Ha még nincsenek kérései](#if-you-have-no-prompts-yet)
  - [Gyors kérés létrehozása](#create-a-prompt-quickly)
  - [Kérés szerkesztése](#edit-a-prompt)
  - [Kérés tesztelése használat előtt](#test-a-prompt-before-using-it)
- [Irányítópult](#dashboard)
  - [Adatok szűrése](#filter-the-data)
  - [Irányítópult lapok](#dashboard-tabs)
  - [Adatok exportálása](#export-data)
  - [Tárolt rekordok törlése egy modellhez](#delete-stored-records-for-a-model)
- [Előzmények](#history)
  - [Előzmények szűrése](#filter-the-history)
  - [Előzményadatok exportálása](#export-history-data)
- [Beállítások](#settings)
  - [Általános beállítások](#general-settings)
  - [Modellek](#models)
  - [Nyelvek](#languages)
  - [Költségkövetés](#cost-tracking)
  - [Átalakítás (beállítások lap)](#transform-settings-tab)
  - [Szószedet (beállítások lap)](#glossary-settings-tab)
  - [Felhasználók](#users)
  - [API konfiguráció](#api-config)
  - [Névjegy](#about)
- [Gyakori problémák](#common-issues)
  - [Az alkalmazás nem fordít, ír át vagy alakít át szöveget](#the-app-will-not-translate-rewrite-or-transform-text)
  - [A modelllista üres](#the-model-list-is-empty)
  - [Az eredmény túl lassú vagy túl drága](#the-result-is-too-slow-or-too-expensive)
  - [A felület rossz nyelven van](#the-interface-is-in-the-wrong-language)
  - [A szöveg túl kicsi vagy nehezen olvasható](#the-text-is-too-small-or-hard-to-read)
  - [Az irányítópult összefoglalója üresnek tűnik](#dashboard-summary-looks-empty)
  - [A költség „nem elérhető” vagy hibásnak tűnik](#cost-shows-not-available-or-seems-wrong)
  - [A teljes költség nem egyezik a szolgáltatói számlámmal](#total-cost-does-not-match-my-provider-bill)
  - [Az előzmények oldal hiányzik az oldalsávból](#the-history-page-is-missing-from-the-sidebar)
  - [Webes alkalmazás: váratlanul átirányított a bejelentkezési oldalra](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Webes admin: elfelejtett vagy elvesztett jelszó](#web-admin-forgot-or-lost-a-password)
  - [Az irányítópult nem mutat adatokat más felhasználók számára (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Megváltoztattam egy kérést és elvesztettem a szerkesztéseket](#i-changed-a-prompt-and-lost-the-edits)
- [Gyors tippek](#quick-tips)
- [Jogi nyilatkozat](#disclaimer)
- [Licenc](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Előkészületek

A Transrewrt használatához legalább egy AI-szolgáltatóhoz kell hozzáférnie. A támogatott szolgáltatók: [OpenRouter](https://openrouter.ai) (amely sok modellt összesít), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, bármely OpenAI-kompatibilis szolgáltató és a [Ollama](https://ollama.com) helyi modellekhez.

Nem kell fizetős modellt választania a kezdéshez. Amint hozzáadja az OpenRouter API-kulcsát, az alkalmazás automatikusan engedélyez egy beépített, **ingyenes** OpenRouter opciót. Ez lehetővé teszi a szöveg azonnali fordítását, átírását és átalakítását. Alternatív megoldásként ingyenes API-kulcsot szerezhet a Cerebrastól, a Google-tól, a Groqtól, a Mistral AI-tól vagy a [NVIDIA](https://build.nvidia.com/) (OpenAI-kompatibilis API) szolgáltatótól.

Egyszerű szavakkal:

- **Egyszerű** módban egy **előbeállítás** (Ingyenes (OpenRouter), Alapértelmezett, Haladó vagy Műszaki) leképeződik egy modellre a kiválasztott **szolgáltatónál** (OpenRouter, OpenAI, Ollama és mások). Csak azok az előbeállítások jelennek meg az eszköztáron, amelyek rendelkeznek leképezéssel az aktuális szolgáltatóhoz. Az előbeállítást a Fordítás, Átírás és Átalakítás funkcióknál választhatja ki.
- **Haladó** módban a **modell** az az AI-motor, amelyet közvetlenül választ ki. A modellazonosítók **szolgáltató előtagot** használnak (például `openrouter/…`, `openai/…`, `ollama/…`).
- Egy **API-kulcs** (vagy Ollama esetén egy **alap URL**) az, amellyel az alkalmazás eléri a szolgáltatót.

Ha az **asztali alkalmazást** használja, adja hozzá az API-kulcsokat a használt szolgáltatókhoz a [**Beállítások** > **API beállítások**](#api-config) menüpontban. Csak OpenRouter használata esetén lásd alább: [Hogyan szerezhetek ingyenes OpenRouter API kulcsot](#how-to-get-a-free-openrouter-api-key-desktop-app). Ha nem szeretne API kulcsot használni, telepítheti az Ollamát (az [ollama.com](https://ollama.com) oldalról) és helyi modelleket használhat helyette, például a `translategemma:4b` modellt.

Ha a **webes verziót** használod, a szerver üzemeltetője konfigurálja a szolgáltatókat környezeti változók segítségével, így nem tudsz közvetlenül API-kulcsokat megadni az alkalmazásban.

<br/>

<a id="how-to-get-a-free-openrouter-api-key-desktop-app"></a>
### Hogyan szerezhetek ingyenes OpenRouter API kulcsot (asztali alkalmazás)

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

1. Nyissa meg az alkalmazást.
2. Ha szükséges, válassza ki a **Felület nyelvét** a földgömb ikonról.
3. Ha **asztali alkalmazást** használ, nyissa meg a [**Beállítások** > **API beállítások**](#api-config) menüpontot, adjon hozzá API kulcsot legalább egy szolgáltatóhoz (például OpenRouter), majd kattintson a **Teszt** gombra az ellenőrzéshez.
4. Nyissa meg a [**Beállítások** > **Általános beállítások**](#general-settings) menüpontot. **Egyszerű** módban (alapértelmezett) válasszon egy **Szolgáltatót**, amelyhez konfigurált kulcs tartozik. **Haladó** módban nyissa meg a [**Beállítások** > **Modellek**](#models) menüpontot, és adjon hozzá egy vagy több modellt a **Kiválasztott modellekhez**.
5. A **Fordítás** funkcióban válasszon egy **előbeállítást** (Egyszerű) vagy egy **modellt** (Haladó) az eszköztáron.
6. Nyissa meg a [**Beállítások** > **Nyelvek**](#languages) menüt, és válassza ki a **Legfontosabb nyelveket**, ha a leggyakrabban használt nyelvei elől jelenjenek meg.
7. Futtasson egy egyszerű fordítást az ellenőrzéshez, majd próbálja ki az **Átírás** és **Átalakítás** funkciókat.

Ez a sorrend fontos. Ez megelőzi a leggyakoribb első használatkor jelentkező problémát: megpróbál futtatni egy feladatot, mielőtt az alkalmazás rendelkezne működő API-kapcsolattal vagy kiválasztott előbeállítással/modelllel.

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
- Jobb oldalon megjelenik a **kiválasztott előbeállítás vagy modell** és a **Felület nyelve** vezérlő.

Az **Egyszerű** módban az eszköztár egy **előbeállítás-kiválasztót** jelenít meg a beépített **Ingyenes (OpenRouter)**, **Alapértelmezett**, **Haladó** és **Műszaki** előbeállításokkal. Az előbeállítások megjelenése attól függ, hogy melyik **Szolgáltatót** választotta a [**Beállítások** > **Általános beállítások**](#general-settings) menüpontban – például az **Ingyenes (OpenRouter)** csak akkor jelenik meg, ha a szolgáltató az OpenRouter. Ha a **Szolgáltató** az **Ollama**, akkor az eszköztár a gépén telepített helyi modelleket jeleníti meg az előbeállítások helyett.

**Haladó** módban a **modellkiválasztó** lehetővé teszi, hogy kiválassza, melyik AI-motort használja az aktuális feladathoz.

![Modellválasztó](../images/screenshots/hu/preset-selector.png)

Haladó módban egyes ingyenes modellek nem mindig érhetők el – leállhatnak vagy elérhetik a használati korlátot. Az alkalmazás automatikusan eltávolíthatja a modellt a listáról. A megjelenő modellek szabályozásához látogasson el a [**Beállítások** > **Modellek**](#models) menüpontba. A modellbeállításokat megnyithatja a szolgáltató ikonra kattintva a modell neve mellett az eszköztáron.

<br/>

A **földgömb ikon + nyelvkód** megváltoztatja az alkalmazás felületi nyelvét, például a menükét és gombokét. Ez **nem** változtatja meg a **Fordítás** funkcióban használt fordítási nyelveket.

![Felület nyelvének választója](../images/screenshots/hu/language-selector.png)

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

![Fordítási munkaterület](../images/screenshots/hu/translate.png)

<br/>

<a id="translate-text"></a>
### Szöveg fordítása

1. Nyissa meg a **Fordítás** funkciót.
2. Válasszon nyelvet a **Honnan** mezőben.
3. Válasszon nyelvet a **Hova** mezőben.
4. Válasszon előbeállítást (Egyszerű) vagy modellt (Haladó) az eszköztáron.
5. Írja be vagy illessze be a szöveget a(z) **Bemenet** mezőbe.
6. Kattintson a(z) **Fordítás** gombra.
7. Olvassa el az eredményt a(z) **Kimenet** mezőben.
8. Használja a másolás gombot, ha másolni szeretné az eredményt.
9. Opcionálisan finomíthatja az eredményt a **Hozzáadás…** vagy szószók alternatívák segítségével — lásd [A fordítás finomítása](#refining-translation).

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

- **Automatikus végrehajtás beillesztéskor** a fordítást azonnal végrehajtja, amint beilleszt egy szöveget.
- **Eredmény automatikus másolása a vágólapra** automatikusan másolja az eredményt egy sikeres futás után.
- **Valós idejű fordítás gépelés közben** (⚠️ Ez növelheti a használati költségeket) a gépelés közben végzi a fordításokat.
- **Időtúllépés (ms)** szabályozza, hogy mennyi ideig vár az alkalmazás, mielőtt valós idejű fordítást végez.
- **Viselkedés a következőhöz: ENTER** azt választja meg, hogy `Enter` végrehajtja-e a feladatot, vagy új sort illeszt be:
  - **Enter** végrehajtja a fordítást vagy az átírást (alapértelmezett).
  - **Shift + Enter** végrehajtja a fordítást vagy az átírást; sima **Enter** új sort illeszt be.

<br/>

<a id="refining-translation"></a>
### A fordítás finomítása

Sikeres fordítás után a **Hozzáadás…** és a verzió legördülő menü megjelenik a kimeneti fejlécben, a **Cél:** nyelvválasztó mellett. Itt finomíthatja az eredményt:

1. **Átfogalmazás…** — ha nincs szöveg kiválasztva a kimenetben, akkor a modell egy másik teljes fordítást ad ugyanarról a bemenetről, eltérő megfogalmazással. A modell megkapja az összes már meglévő verziót, így az új megfogalmazás mindegyiktől eltérhet. Legfeljebb **öt** verziót tárolhat, és a verzió legördülő menüben válthat közöttük. Ha szöveg van kiválasztva, az **Átfogalmazás…** a kiválasztás közelében megnyitja a szóalternatívákat (ugyanaz, mint a jobb kattintás). Kiválasztás nélkül az **Átfogalmazás…** letiltásra kerül, amint eléri az öt verziót; kiválasztással öt verziónál is működik (csak szóalternatívák, az 5. verzió frissítése). Amíg egy teljes átfogalmazás fut, kattintson a **Fordítás leállítása** gombra a megszakításhoz; a kimenet visszatér arra a verzióra, amely az átfogalmazás megkezdésekor aktív volt.
2. **Szóalternatívák** — válasszon ki egy vagy több szót vagy egy rövid kifejezést a kimenetben (ha csak egy szó egy részét választja ki, az alkalmazás kiterjeszti a kiválasztást a teljes szavakra), majd kattintson a jobb gombbal vagy az **Átfogalmazás…** gombra. Egy rövid alternatív lista jelenik meg a kiválasztás közelében; kattintson az egyikre a cseréhez. Minden opció kissé szélesebb tartományt cserélhet le, mint a kiválasztás (például egy szomszédos elöljárószót vagy névelőt), így a mondat nyelvtanilag helyes marad. Ha kevesebb mint öt verziója van, a szerkesztett kimenet új verzióként kerül mentésre; öt verziónál csak az **5. verzió** frissül. Jobb kattintás kiválasztás nélkül kiválasztja a kurzor alatti szót (vagy nem csinál semmit, ha nincs ott szó). Nyomja meg az **Esc** billentyűt, vagy kattintson a lista kívülre a megszakításhoz a kimenet megváltoztatása nélkül.
3. **Költségek** — minden teljes **Átfogalmazás…** (nincs kiválasztás) és minden szóalternatíva kérés újra használja a modellt, és növelheti a használati költséget (ugyanúgy, mint egy normál fordítási futtatás).

<br/>

<a id="using-the-glossary"></a>
### A szószedet használata

A **szószedet** forrás/cél kifejezéspárok listája egy adott nyelvpárhoz. Amikor a szószedet be van kapcsolva, a Transrewrt elküldi a megfelelő kifejezéseket a modellnek, így az Ön által preferált megfogalmazás következetes marad a fordítások során (például egy terméknév, egy márkanév vagy egy olyan munkakör, amelyet mindig ugyanúgy kell fordítani).

A használatához a **Fordítás** oldalon:

1. Kapcsolja be a **Szószedet** kapcsolót a beviteli panelen (az automatikus végrehajtás és az automatikus másolás kapcsolók mellett).
2. Válassza ki a **Forrás** és **Cél** nyelveket, és fordítson a szokásos módon. Az ehhez a nyelvpárhoz mentett kifejezések automatikusan alkalmazásra kerülnek.
3. Új pár rögzítéséhez kattintson a **Hozzáadás a szószedethez** gombra (a **Forrás:** nyelvválasztó mellett). Az ablak előre ki lesz töltve az aktuális nyelveivel, így csak a **forráskifejezést** és a **célkifejezést** kell megadnia.
4. Használja a **Szószedet** hivatkozást a kimeneti láblécben (vagy a párbeszédablakon belüli **Szószedet kezelése** hivatkozást), hogy a [**Beállítások** > **Szószedet**](#glossary-settings) oldalra ugorjon, és áttekintse az összes kifejezését.

A kifejezéseket a [**Beállítások** > **Szószedet**](#glossary-settings) lapon adhatja hozzá, szerkesztheti, importálhatja és exportálhatja — lásd alább.

<br/>

> ℹ️ **JEGYZET**<br/>
> A szószedet kifejezései **nyelv páronként** kerülnek egyeztetésre, így az angol → francia nyelvekre mentett kifejezés nem kerül alkalmazásra angol → német fordítás esetén. A szószedet nem használható a **Nyelv felismerése** funkcióval forrásként, mert a kifejezések egyeztetéséhez specifikus forrásnyelvre van szükség.

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Átírás

Használja az **Átírás** funkciót, ha a fő jelentés megváltoztatása nélkül szeretné javítani a megfogalmazást. A szöveg ugyanazon a nyelven marad (nem fordítódik le).

![Átírási munkaterület](../images/screenshots/hu/rewrite.png)

Ez akkor hasznos, ha:

- helyesírás- és nyelvtanjavítás (**Helyesírás- és nyelvtanellenőrzés**)
- szöveg tisztábbá tétele (**Tisztaság javítása**)
- több különböző átfogalmazás egy futtatásban (**Alternatív verziók**)
- szöveg formálisabbá vagy informálisabbá tétele (**Formálisra alakítás** / **Informálisra alakítás**)
- rövidebbé vagy hosszabbá szeretné tenni a szöveget (**Rövidítés** / **Bővítés**)
- műszakibbá szeretné tenni a szöveget (**Műszaki megfogalmazás**)

<br/>

<a id="rewrite-text"></a>
### Szöveg átírása

1. Nyissa meg az **Átírás** funkciót.
2. Válasszon egy **Módot** (például **Érthetőség javítása** vagy **Formális stílus**).
3. Opcionálisan állítsa be a **Forrás:** nyelvet a szöveg nyelvére (vagy hagyja **Nyelv felismerése** beállításon).
4. Gépelje be vagy illessze be a szöveget a **Bemenet** mezőbe.
5. Kattintson az **Átírás** gombra.
6. Olvassa el az eredményt a **Kimenet** mezőben.
7. Opcionálisan finomíthatja az eredményt az **Átír…** vagy a szóalternatívák segítségével – lásd [Az átírás finomítása](#refining-rewrite).

<br/>

> 💡 **TIPP**<br/>
> Ha a "**Helyesírás- és nyelvtanellenőrzés**" módot használja, a kimeneti panelen megjelenik egy **Változások megjelenítése** kapcsoló (a **Másolás** mellett).
> Kapcsolja be vagy ki, hogy láthatóvá vagy elrejtetté tegye a szövegre alkalmazott konkrét javításokat.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Az **Alternatív változatok** átírási mód több átfogalmazást ad vissza **egy** futtatás során, a kimenetben `----` karakterrel elválasztva. Ez eltér az **Átír…** funkciótól, amely idővel verzióelőzményeket épít (kattintásonként egy új változatot). Lásd [Az átírás finomítása](#refining-rewrite).

<br/>

<a id="refining-rewrite"></a>
### Az átírás finomítása

Sikeres átírás után az **Átír…** és a verzió legördülő menü megjelenik a munkaterület kimeneti oldalán (felosztott elrendezésben a kimeneti oszlop feletti felső eszköztárban, a futtatási metrikák mellett; egymásra helyezett elrendezésben a kimeneti panel felett a **Forrás:** mellett). Itt finomíthatja az eredményt – ugyanaz az elv, mint a [Fordítás finomítása](#refining-translation) esetében, de a szöveg ugyanazon a nyelven marad, és megtartja az aktuális átírási **Módot**:

1. **Átír…** – ha nincs kijelölve szöveg a kimenetben, akkor azonos bemenet újabb teljes átírását kapja, eltérő megfogalmazással, továbbra is alkalmazva a kiválasztott módot (például érthetőbb, rövidebb vagy formálisabb). A modell minden már meglévő verziót megkap, így az új megfogalmazás eltérhet mindegyiktől. Legfeljebb **öt** verziót tárolhat, és válthat közöttük a verzió legördülő menüben. Ha szöveg van kijelölve, az **Átír…** a kijelölés közelében nyitja meg a szóalternatívákat (ugyanaz, mint a jobb kattintás). Kijelölés nélkül az **Átír…** letiltásra kerül, amint eléri az öt verziót; kijelöléssel öt verziónál is működik (csak szóalternatívák, az 5. verzió frissítése). Amíg egy teljes átírás fut, kattintson az **Átírás leállítása** gombra a megszakításhoz; a kimenet visszatér arra a verzióra, amely aktív volt az átírás megkezdésekor.
2. **Szóalternatívák** – jelöljön ki egy vagy több szót vagy egy rövid kifejezést a kimenetben (ha csak egy szó egy részét jelöli ki, az alkalmazás kiterjeszti a kijelölést a teljes szavakra), majd kattintson jobb gombbal vagy az **Átír…** gombra. Egy rövid alternatívalista jelenik meg a kijelölés közelében; kattintson az egyikre a cseréhez. Minden opció kissé szélesebb szakaszt is helyettesíthet, mint a kijelölés, hogy a mondat nyelvtanilag helyes maradjon. Ha kevesebb mint öt verziója van, a szerkesztett kimenet új verzióként mentésre kerül; öt verziónál csak az **5. verzió** frissül. Jobb kattintás kijelölés nélkül kijelöli a kurzor alatti szót (vagy nem csinál semmit, ha nincs ott szó). Nyomja meg az **Esc** billentyűt, vagy kattintson a lista kívülre a megszakításhoz a kimenet megváltoztatása nélkül.
3. **Költségek** – minden teljes **Átír…** (nincs kijelölés) és minden szóalternatíva-kérés újra felhasználja a modellt, és növelheti a használati költségeket (ugyanúgy, mint egy normál átírási futtatás).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Átalakítás

Használja az **Átalakítás** funkciót, ha azt szeretné, hogy a MI egy egyéni utasításkészletet kövessen.

![Átalakítási munkaterület](../images/screenshots/hu/transform.png)

Ez az alkalmazás legrugalmazabb része. Ilyen feladatokra használható, mint:

- jegyzetek összegzése
- durva szöveg átalakítása kifinomult e-mailré
- kulcsfontosságú pontok kinyerése
- szöveg átalakítása adott formátumba
- bármilyen egyéni feladat a bemeneti szöveggel

<br/>

<a id="run-an-existing-prompt"></a>
### Létező parancs futtatása

1. Nyisd meg a **Átalakítás**-t.
2. Válassz egy kérést a kéréslistából.
3. Ha megjelenik egy **Nyelv** doboz, válassz egy nyelvet, ha szeretnél.
4. Írj vagy illessz be szöveget a **Bemenet**-be.
5. Kattintson az **Átalakítás** gombra.
6. Olvassa el az eredményt a(z) **Kimenet** mezőben.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Ha még nincsenek promptjai

Ha a promptlistája üres, kattintson a **Mintapromptok betöltése** gombra az Átalakítás munkaterületen. Ugyanez a lehetőség mindig elérhető a [**Beállítások** > **Átalakítás**](#transform-settings) menüpontban az exportálás/importálás sorában. Mindkettő beépített példákat ad hozzá, így gyorsan elkezdheti.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A mintapromptok angol nyelven kerülnek biztosításra. A betöltésük után szerkesztheti a promptot, és használhatja a(z) **Prompt lefordítása** funkciót, hogy lefordítsa az Ön nyelvére.

<br/>

<a id="create-a-prompt-quickly"></a>
### Gyorsan létrehozhat egy promptot

A legrövidebb út egy prompt létrehozásához:

1. Kattintson az **Új parancs** gombra.
2. Kattintson a **Parancs létrehozása** gombra.
3. Írja le, mit szeretne, hogy a parancs csináljon.
4. Válasszon előbeállítást (Egyszerű) vagy modellt (Haladó).
5. Hagyja, hogy az alkalmazás létrehozzon egy vázlatot.
6. Ellenőrizze a vázlatot, majd kattintson a **Mentés** gombra.

![Prompt generálása](../images/screenshots/hu/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Prompt szerkesztése

Amikor létrehoz vagy szerkeszt egy promptot, a szerkesztő a bal oldalon jelenik meg, a jobb oldalon pedig egy teszterület.

![Prompt szerkesztő átalakítása](../images/screenshots/hu/transform-prompt-edit.png)

A fő mezők a következők:

- **Parancs neve**: a név, amely a parancslistában megjelenik.
- **Parancs utasításai (nem kötelező)**: egy rövid útmutató, amely a felhasználó számára jelenik meg a prompt futtatásakor.
- **Modell szerepe**: az AI-nek kiosztott általános szerep, például: „Hasznos asszisztens vagyok.”
- **Modell utasításai (soronként egy)**: azok a konkrét szabályok, amelyeket az MI-nek követnie kell.
- **Kimeneti leírás (pl. átalakított, összefoglalt, stb.)**: egy rövid szó, amely leírja az eredményt.
- **Hőmérséklet (0.0 → 1.0)**: hogyan fog viselkedni a modell; lásd alább.
- **Kérj cél nyelvet**: nyelvválasztót ad hozzá, amikor a kérést végrehajtják.
Ha a technikai kifejezés **Hőmérséklet** új számodra, így gondolj rá:

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
> A mentett promptokat exportálhatja és importálhatja a [**Beállítások** > **Átalakítás**](#transform-settings) menüpontban.

Amikor a **Parancs létrehozása**, **Parancs javítása** vagy **Prompt lefordítása** funkciókat használja a prompt szerkesztőben, az **Egyszerű** mód ugyanazt az előbeállítás-választót kínálja, mint a Fordítás és Átírás; a **Haladó** mód pedig a modelllistát használja.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Irányítópult

Az **Irányítópult** használatával nyomon követheti, mennyit használja az alkalmazást, és mennyibe kerül az (fizetős modellek esetén).

![Irányítópult összefoglaló](../images/screenshots/hu/dashboard-summary.png)

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Ha csak **ingyenes** modelleket használ, a **költség** összege nulla lehet, és a költségközpontú KPI-k üresen jelenhetnek meg. A **Összegzés** fül továbbra is megjeleníti a fordítási, átírási és átalakítási hívások számát, ha volt tevékenység a kiválasztott időszakban.

<br/>

<a id="filter-the-data"></a>
### Adatok szűrése

A szűrési gombokkal a tetején módosíthatja az időtartományt.

![Irányítópult szűrők](../images/screenshots/hu/dashboard-filter.png)

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A **Felhasználó** szűrő csak az adminisztrátorok számára látható a webes verzióban. A rendes felhasználók nem látják ezt a szűrőt, és az asztali alkalmazásban sem érhető el.

<br/>

<a id="dashboard-tabs"></a>
### Irányítópult fülek

- A **Összegzés** KPI-kártyákat jelenít meg: teljes költség, használt modellek, mód szerinti hívásszám és költség (az összes hívás arányában), átlagos költség hívásonként, átlagos TPS, valamint a három leggyakrabban használt modell hívásszám alapján.
- A **Modell szerint** fül felsorolja az egyes modelleket a teljes hívásszámmal, teljes költséggel és átlagos TPS-sel; bontsa ki egy sor részletezését a fordítási, átírási és átalakítási tevékenységekhez.
- Az **Összes hívás** fül megjeleníti a teljes hívásnaplót (lapozható széles elrendezéseken, kártyák keskeny képernyőkön), és lehetővé teszi annak exportálását.

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

![Előzmények oldal](../images/screenshots/hu/history.png)

<br/>

<a id="filter-the-history"></a>
### Az előzmények szűrése

A **Előzmények** ugyanazokat az időtartomány-szűrőket használja, mint az **Irányítópult** oldal.

![Irányítópult szűrők](../images/screenshots/hu/dashboard-filter.png)

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A **webalkalmazásban** mindenki (az adminisztrátorok is) csak a saját végrehajtási előzményeit látja. A **Felhasználó** szűrő az **Irányítópulton** az adminisztrátorok számára szolgál a fiókok közötti használat és költség áttekintéséhez; ez nem vonatkozik az **Előzményekre**.

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

| Fül              | Asztali | Web (admin) | Web (rendes felhasználó) | Megjegyzések                                        |
  |------------------|:-------:|:-----------:|:------------------:|----------------------------------------------|
  | Általános beállítások |   igen   |     igen     |        igen         | Tartalmazza az **AI-élményt** (Egyszerű / Haladó) |
  | Modellek           |   igen   |     igen     |        igen         | Csak akkor, ha az **AI-élmény** **Haladó** |
  | Nyelvek        |   igen   |     igen     |        igen         |                                              |
  | Költségkövetés    |   igen   |     igen     |         -          |                                              |
  | Átalakítás        |   igen   |     igen     |        igen         | Kötegelt import/export az átalakítási promptokhoz      |
  | Szószedet         |   igen   |     igen     |        igen         | Kifejezéspárok alkalmazva a fordítás során        |
  | Felhasználók            |    -    |     igen     |         -          |                                              |
  | API beállítások       |   igen   |     igen     |         -          |                                              |
  | Névjegy            |   igen   |     igen     |        igen         |                                              |

Az **Egyszerű** módban a modellkiválasztás az eszköztár előbeállításai és a **Szolgáltató** az Általános beállításokban történik; a **Modellek** fül rejtett.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A webes verzióban minden felhasználó saját konfigurációval rendelkezik. Az AI-élmény, szolgáltató, kiválasztott modellek vagy előbeállítások, nyelvek, általános beállítások és átalakítási promptok beállításai felhasználónként kerülnek tárolásra. Az Ön által végzett változtatások nem befolyásolják más felhasználók beállításait.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Általános beállítások

Az **Általános beállítások** használatával szabályozhatja a gépelés működését, hogy tárolják-e a végrehajtási részleteket az **Előzmények** számára, a megjelenést, valamint azt, hogyan választja ki a mesterséges intelligenciát a Fordításhoz, Átíráshoz és Átalakításhoz.

**AI-élmény**

- **Egyszerű** (alapértelmezett): válasszon egy **Szolgáltatót** (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras vagy Ollama). A felhőalapú szolgáltatók az eszköztár beépített előbeállításait használják. Az **Ollama** a gépén telepített modelleket jeleníti meg az előbeállítások helyett. Az Egyszerű módban az **Előbeállítások katalógusa** megjeleníti a katalógus verzióját és az utolsó frissítés idejét; kattintson az **Előbeállítások katalógusának frissítése** gombra a legfrissebb előbeállításlista letöltéséhez a projekt adattárából (az alkalmazás szintén rendszeresen ellenőrzi a frissítéseket a háttérben).
- **Haladó**: válasszon egyedi modelleket az eszköztáron; kezelje a listát a [**Beállítások** > **Modellek**](#models) menüpontban.

**Megjelenés**

- A **Téma** vált a világos, sötét és rendszer szerinti megjelenés között.
- A **Költséginformációk megjelenítése a műveleteken** szabályozza az egyes műveletek költségének (ha elérhető) és a teljes költségnek a megjelenítését a Fordítás, Átírás és Átalakítás kimeneti paneljein.
- A **Költség tizedesjegyek száma** módosítja a költségek tizedesjegyeinek megjelenítését.
- **Csak webes verzió:** a **margó megjelenítése az alkalmazás körül** további teret ad az interfész körül.
- A **Betűtípus** módosítja a szövegpanelek betűtípusát.
- A **Méret** módosítja a betűméretet.

**Működés**

- **Viselkedés a következőhöz: ENTER** azt választja meg, hogy `Enter` végrehajtja-e a feladatot, vagy új sort illeszt be.
- **Automatikus végrehajtás beillesztéskor** elindítja a fordítást, amint beilleszt egy szöveget.
- **Eredmény automatikus másolása a vágólapra** automatikusan másolja a sikeres eredményeket.
- **Valós idejű fordítás gépelés közben** (⚠️ Ez növelheti a használati költségeket) fordít, miközben gépelsz.
- **Időtúllépés (ms)** beállítja a várakozási időt a valós idejű fordításhoz.

**Előzmények**

- **Előzmények megőrzése** szabályozza, hogy a fordítási, átírási és átalakítási műveletek **bemeneti és kimeneti szövegét** tárolják-e az oldalsáv [**Előzmények**](#history) nézete számára. Ha kikapcsolja, megerősítést kér; ha megerősíti, a tárolt előzmények szövege eltávolításra kerül az adatbázisból. Ha a címke *letiltva az adminisztrátor által* állapotot mutatja, az alkalmazás környezetében a `HISTORY_DISABLED` beállítás aktív (lásd a [README](README.hu.md#configuration-and-environment) fájlt); ebben az esetben az előzményeket nem lehet a felhasználói felületről újra engedélyezni.
- **Előzményadatok törlése** lehetővé teszi a tárolt szövegek kor szerinti eltávolítását (például néhány hónapnál régebbi vagy **összes adat (törlés)**) a **Adatok törlése** funkcióval. Ez csak a **Előzmények** nézethez mentett végrehajtási szövegeket érinti; **nem** törli a költség- vagy használati összesítéseket. A **költség** adatok eltávolításához vagy csökkentéséhez használja az [**Beállítások** > **Költségkövetés**](#cost-tracking) lehetőséget.

**Konfiguráció biztonsági mentése** (asztali alkalmazás és webadminisztrátorok számára)
- **Használati adatok szerepeljenek a biztonsági mentésben** - ha engedélyezve van, a ZIP tartalmazza a végrehajtási előzményeket és az API hívási adatokat is.
- **Konfiguráció biztonsági mentése** - létrehoz egyetlen ZIP-et (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` helyi időben) `config.json`, `state.json`, opcionális titkosítási kulcs, felhasználók, preferenciák, egyedi kérések és használati adatok, ha beleegyeztél. Sikeres biztonsági mentés után a megerősítés megjeleníti a mentett fájl nevét.
- **Visszaállítás biztonsági mentésből** - először megnyit egy **megerősítő párbeszédet**. Válaszd ki a biztonsági mentés ZIP fájlt a párbeszédablakban (**Böngészés** / fájl kiválasztó vagy húzd és ejtsd, ahol támogatott), majd nézd át az opciókat:
  - **Használati adatok visszaállítása** - importálja a használati/előtörténetet a ZIP-ből, amikor azt használati adatokkal mentették; hagyd ki, ha csak a beállításokat és kéréseket szeretnéd.
  - **Régi használati adatok törlése a visszaállítás előtt** - távolítsd el a meglévő használati/előtörténetet ezen az installáción, mielőtt alkalmaznád a biztonsági mentést (opcionális; használd, amikor tiszta cserét szeretnél).
A webes vagy asztali verzióban készült biztonsági mentések visszaállíthatók a másikban. Amikor asztali biztonsági mentést állítasz vissza a webes verzióban, az adatok az adminisztrátor felhasználóhoz lesznek visszaállítva.

<br/>

<a id="models"></a>
### Modellek

Ez a fül csak akkor érhető el, ha az **AI-élmény** beállítása **Haladó** az [**Általános beállítások**](#general-settings) menüben. A **Beállítások** > **Modellek** menüpont használatával választhatja ki, mely modellek jelenjenek meg az eszköztáron.

![Beállítások Modellek lap](../images/screenshots/hu/settings-general.png)

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

<a id="transform-settings"></a>
### Átalakítás (beállítások fül)

A **Beállítások** > **Átalakítás** menüpont használatával tömegesen kezelheti a parancsokat.

Lehetőségei:

- áttekintheti a mentett promptokat
- törölhet promptokat
- importálhat promptokat fájlból
- exportálhat promptokat biztonsági mentéshez vagy megosztáshoz
- mintapromptok betöltése a promptlista számára

<br/>

<a id="glossary-settings"></a>
### Szószedet (beállítások lap)

Használja a **Beállítások** > **Szószedet** menüpontot a fordítás során alkalmazott kifejezés­párok kezeléséhez (lásd: [A szószedet használata](#using-the-glossary)). Minden kifejezésnek van **forrásnyelve**, **célnyelve**, **forráskifejezése** és **célkifejezése**.

Lehetőségei:

- **Kifejezés hozzáadása** — töltse ki az űrlapot az űrlap alján (válassza ki a nyelveket, írja be a forrás- és célkifejezéseket), majd kattintson a **+** gombra.
- **Kifejezések keresése** — szűrje a listát **forrásnyelv**, **célnyelv** vagy szabad **szöveg** alapján; kattintson a **Szűrők törlése** gombra az alaphelyzetbe állításhoz.
- **Kifejezés törlése** — kattintson a kuka ikonra a sorában.
- **Importálás** — kifejezések betöltése `.csv`, `.xlsx` vagy `.xls` fájlból. A fájlnak tartalmaznia kell a következő oszlopokat: `source_language`, `target_language`, `source_text` és `target_text`.
- **Exportálás CSV** / **Exportálás XLSX** formátumban — töltse le az összes kifejezést biztonsági mentéshez vagy megosztáshoz.
- **Sablon CSV** / **Sablon XLSX** — töltse le az üres fájlt a megfelelő oszlopfejlécekkel, amelyet kitölthet és importálhat.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Az **asztali alkalmazásban** a szószedet helyileg van tárolva. A **webes verzióban** minden felhasználó rendelkezik saját szószedettel, így az Ön kifejezései nem befolyásolják a többi felhasználót.

<br/>

<a id="users"></a>
### Felhasználók

A **Felhasználók** elem használatával kezelheti a felhasználói fiókokat a webes verzióban. Hozzáadhat felhasználókat, frissítheti adataikat, visszaállíthatja jelszavukat, és törölheti a fiókokat.

<br/>

<a id="api-config"></a>
### API beállítások

A támogatott szolgáltatók: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Ollama** (helyi modellek alap URL-en keresztül), és egy opcionális **egyedi OpenAI-kompatibilis szolgáltató** (név, URL és API kulcs — csak Haladó módban). Csak a használt szolgáltatókat kell konfigurálnia.

**Webalkalmazás: csak rendszergazda**

Az API-kulcsokat rendszer- vagy Docker-környezeti változókon keresztül konfigurálja – nem a webes felületen kell megadni őket. Az egyedi szolgáltatóhoz állítsa be a `CUSTOM_PROVIDER_NAME`, `CUSTOM_PROVIDER_URL` és `CUSTOM_PROVIDER_API_KEY` értékeket (mindhárom kötelező). Ez az oldal mutatja, hogy mely szolgáltatókhoz van kulcs konfigurálva, és lehetővé teszi mindegyik tesztelését a `Test` gombra kattintva.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> API-kulcs módosításához frissítse a környezeti változót a rendszerében vagy Docker-konfigurációjában, majd indítsa újra a szervert vagy a konténert.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> A **Konfiguráció biztonsági mentése** (lásd: [**Általános beállítások** → Konfiguráció biztonsági mentése](#general-settings)) beágyazhatja a **feloldott** szolgáltatói kulcsokat a ZIP-fájl `config.json` részébe. A ZIP visszaállítása **nem** másolja vissza ezeket a kulcsokat a szerver konfigurációs fájljába – az érvényes kulcsok továbbra is a környezetből és a meglévő fájlállapotból származnak, ahogyan ott le van írva.

<br/>

**Asztali alkalmazás**

Használja az **API konfigurációt** az egyes használt szolgáltatók API kulcsainak tárolására. Az Ollama esetében az API kulcs helyett adja meg az **alap URL-t**. Egy egyedi OpenAI-kompatibilis szolgáltatóhoz (nem a beépített listában szereplő végpontok, például egy önállóan üzemeltetett szerver vagy átjáró) adjon meg egy **szolgáltatónevet**, egy **alap URL-t** (például `https://my-llm.example.com/v1`) és egy **API kulcsot**; mindhárom kötelező. Az URL és a név inline szerkeszthető; az API kulcs cseréjéhez használja a **Szerkesztés** gombot. Az egyedi szolgáltató modelljei csak **Haladó** módban jelennek meg (Beállítások → Modellek).

<br/>

> 💡 **Tipp** <br/>
> Ha nem szeretne API-kulcsot használni vagy fizetni a használatért, letöltheti az [Ollama](https://ollama.com) programot, és ingyenesen futtathat modelleket (például `translategemma:4b`) helyben a gépén. Alternatív megoldásként létrehozhat egy ingyenes OpenRouter fiókot (nem szükséges hitelkártya) az ingyenes modelljeik használatához, vagy szerezhet ingyenes API-kulcsot a Cerebrastól, a Google-tól, a Groqtól, a Mistral AI-tól vagy a [NVIDIA](https://build.nvidia.com/) szolgáltatótól.

<br/>

- Csak a szükséges szolgáltatókat adja hozzá. A **Beállítások** > **Modellek** részben minden modell azonosítója a szolgáltatóval kezdődik (például `openrouter/openrouter/free`, `openai/gpt-4o`, `nvidia/nvidia/nemotron-nano-3-30b-a3b`, `ollama/llama3`, `MyProvider/…` egy `MyProvider` nevű egyedi végponthoz).

API-kulcs hozzáadásához írja be az értéket a szövegmezőbe, majd kattintson a `Save` gombra. Már meglévő kulcs lecseréléséhez kattintson a `Edit` gombra. A kulcs működésének ellenőrzéséhez kattintson a `Test` gombra. Az Ollama alap URL-je esetében mindig kattintson a `Test` gombra a kapcsolat ellenőrzéséhez.

<br/>

> ℹ️ **MEGJEGYZÉS**<br/>
> Jelenleg nem tekintheti meg az API-kulcs aktuális értékét. Csak a `Edit` gomb használatával cserélheti le.
> Az API-kulcsok titkosítva kerülnek tárolásra a konfigurációban.

<br/>

<a id="about"></a>
### Névjegy

A(z) **Névjegy** fül megjeleníti:

- az alkalmazás neve és mottója
- a verziószám és a build dátuma
- licenc- és szerzői jogi információk, valamint hivatkozás a **Harmadik fél jogi nyilatkozatai** megnyitásához
- hivatkozás a projekt adattárához

<br/><br/>

<a id="common-issues"></a>
## Gyakori problémák

Ha valami nem úgy működik, ahogy várná, először ellenőrizze az alábbi pontokat.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Az alkalmazás nem fordít, átír vagy alakít át szöveget

Ellenőrizze, hogy:

- kiválasztott egy **előbeállítást** (Egyszerű) vagy egy **modellt** (Haladó) az eszköztáron
- az **Egyszerű** módban a [**Beállítások** > **Általános beállítások**](#general-settings) menüpontban egy **Szolgáltató** van kiválasztva, amelyhez működő kulcs (vagy Ollama URL) tartozik, és legalább egy előbeállítás elérhető az adott szolgáltatóhoz
- a **Haladó** módban legalább egy modell szerepel a [**Beállítások** > **Modellek**](#models) menüpontban
- az API-beállítások működnek

Ha az asztali alkalmazást használja:

1. Nyissa meg a [**Beállítások** > **API beállítások**](#api-config) menüt.
2. Ellenőrizze, hogy legalább egy API-kulcs el van-e mentve.
3. Kattintson a szolgáltató melletti **Teszt** gombra, hogy megerősítse a kulcs működését.

<br/>

<a id="the-model-list-is-empty"></a>
### A modelllista üres

**Egyszerű** módban nyissa meg az [**Beállítások** > **Általános beállítások**](#general-settings) menüt, ellenőrizze, hogy a **Szolgáltató** be van-e állítva, majd adjon hozzá vagy teszteljen kulcsokat az [**API beállítások**](#api-config) menüben (asztali verzió) vagy kérje az adminisztrátorát (webes verzió). Az **Ollama** esetében futtassa a **Tesztet** az alap URL-en, és győződjön meg arról, hogy a modellek helyileg telepítve vannak.

**Haladó** módban nyissa meg az [**Beállítások** > **Modellek**](#models) menüt, és kattintson a **Frissítés** gombra. Ha szükséges, keressen modellt, kapcsolja be a **Csak ingyenes** lehetőséget, és adjon hozzá modelleket a **Kiválasztott modellek** listához.

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Az eredmény túl lassú vagy túl költséges

Próbálja ki az alábbiak egyikét vagy többjét:

- válassz egy másik előbeállítást (Egyszerű) vagy modellt (Haladó)
- használj rövidebb bemenetet
- kapcsold ki a **Valós idejű fordítást gépelés közben** a [**Beállítások** > **Általános beállítások**](#general-settings)
- használj ingyenes modelleket egyszerű feladatokhoz (lásd [Modellek](#models))
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

<a id="dashboard-summary-looks-empty"></a>
### Az Irányítópult összegzése üresnek tűnik

Ez normális, ha:

- csak **ingyenes modelleket** használ, és **költség** adatokat néz (ezek lehetnek nulla); a **Összegzés** nézetbeli hívásszám KPI-khoz továbbra is szükség van az adott időszak adataira
- a kiválasztott **időszűrő** nem fedi le a hívások idejét – próbálja ki az **Összes** lehetőséget ellenőrzéshez

Ha a KPI-k továbbra is nullák az **Összes** kiválasztása után, ellenőrizze, hogy a hívások megjelennek-e az [**Előzmények**](#history) menüben vagy az **Összes hívás** fülön.

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

Lehetséges, hogy a **Előzmények megőrzése** kikapcsolva van. Nyissa meg az [**Beállítások** > **Általános beállítások**](#general-settings) menüt, és engedélyezze, kivéve ha az előzmények *letiltva az adminisztrátor által* (a környezetben a `HISTORY_DISABLED` beállítás aktív – lásd a [README](README.hu.md#configuration-and-environment) fájlt). Az előzmények bekapcsolása nem állítja vissza a korábban törölt szövegeket.

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
- Használja az [**Előzményeket**](#history) a korábbi műveletek és a teljes bemeneti/kimeneti szöveg áttekintéséhez.
- Rendszeresen exportálja a parancsokat, ha olyan parancskönyvtárat készít, amelyet biztonságban szeretne tartani (lásd: [Átalakítás](#transform)), vagy ha meg szeretné osztani másokkal.
- Maradjon **Egyszerű** módban, amíg nincs szüksége részletes szabályozásra a modellazonosítók tekintetében; váltson **Haladó** módra, ha már tudja, mely modelleket szeretné használni.

<br/><br/>

<a id="disclaimer"></a>
## Felelősségkizárás

A terméknevek és ikonok a jogosultak tulajdonát képezik, kizárólag azonosítási célokra használjuk őket. Ez a szoftver nem kapcsolódik a megemlített márkákhoz, és azok nem is támogatják azt.

<br/><br/>

<a id="license"></a>
## Licenc

Szerzői jog © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
