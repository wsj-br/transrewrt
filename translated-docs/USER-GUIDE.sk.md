---
translated_at: "2026-03-15T22:30:24.968Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Transrewrt – Používateľská príručka

<br />

<a id="introduction"></a>
## Úvod

Transrewrt vám pomôže pracovať s textom tromi hlavnými spôsobmi:

- **Preložiť** – premeniť text z jedného jazyka na iný.
- **Prepísať** – prepísať text iným štýlom, napríklad jasnejším, kratším alebo formálnejším.
- **Transformovať** – spracovať text pomocou vlastných AI pokynov nazývaných prompty.

<br />

Táto príručka vysvetľuje, ako používať aplikáciu po jej inštalácii a spustení. Kroky inštalácie nájdete v hlavnom [README](../README.md).

<br />

> ℹ️ **POZNÁMKA**<br/>
> Transrewrt je dostupná ako desktopová aplikácia pre Windows a Linux a ako samohostočná webová aplikácia. Táto príruča sa zameriava na každodenné používanie aplikácie. kde sa niečo vzťahuje iba na jednu verziu, je to jasne označené.

<small>**Čítajte v iných jazykoch:** [Angličtina (UK)](../USER-GUIDE.md) · [Portugalčina (BR)](USER-GUIDE.pt-BR.md) · [Arabčina](USER-GUIDE.ar.md) · [Benglčina](USER-GUIDE.bn.md) · [Katalánčina](USER-GUIDE.ca.md) · [Čínština (zjedn.)](USER-GUIDE.zh-CN.md) · [Čínština (trad.)](USER-GUIDE.zh-TW.md) · [Chorvátčina](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Holandčina](USER-GUIDE.nl.md) · [Angličtina (US)](USER-GUIDE.en-US.md) · [Filipínčina](USER-GUIDE.tl.md) · [Francúzština](USER-GUIDE.fr.md) · [Nemčina](USER-GUIDE.de.md) · [Gréčtina](USER-GUIDE.el.md) · [Hindčina](USER-GUIDE.hi.md) · [Maďarčina](USER-GUIDE.hu.md) · [Taliančina](USER-GUIDE.it.md) · [Japončina](USER-GUIDE.ja.md) · [Jávčina](USER-GUIDE.jv.md) · [Kórejčina](USER-GUIDE.ko.md) · [Malajčina](USER-GUIDE.ms.md) · [Perzština](USER-GUIDE.fa.md) · [Poľština](USER-GUIDE.pl.md) · [Portugalčina (PT)](USER-GUIDE.pt.md) · [Pandžábčina](USER-GUIDE.pa.md) · [Rumunčina](USER-GUIDE.ro.md) · [Ruština](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Španielčina](USER-GUIDE.es.md) · [Svahilčina](USER-GUIDE.sw.md) · [Švédčina](USER-GUIDE.sv.md) · [Telugčina](USER-GUIDE.te.md) · [Thajčina](USER-GUIDE.th.md) · [Turečtina](USER-GUIDE.tr.md) · [Ukrajinčina](USER-GUIDE.uk.md) · [Vietnamčina](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Obsah**

- [Pred začiatkom](#pred-začiatkom)
  - [Ako získať API kľúč (desktopová aplikácia)](#ako-získavať-api-kľúč-desktopová-aplikácia)
- [Začíname](#začíname)
- [Hlavné časti okna](#hlavné-časti-okna)
  - [Bočný panel](#bočný-panel)
  - [Panel nástrojov](#panel-nástrojov)
  - [Vstupný a výstupný panel](#vstupný-a-výstupný-panel)
- [Preložiť](#preložiť)
  - [Preloženie textu](#preloženie-textu)
  - [Výber jazyka](#výber-jazyka)
  - [Užitočné nastavenia prekladu](#užitočné-nastavenia-prekladu)
  - [Klávesové skratky](#klávesové-skratky)
- [Prepísať](#prepísať)
  - [Prepísanie textu](#prepísanie-textu)
- [Transformovať](#transformovať)
  - [Spustiť existujúci prompt](#spustiť-existujúci-prompt)
  - [Ak ešte nemáte žiadne prompty](#ak-ešte-nemáte-žiadne-prompty)
  - [Rýchlo vytvoriť prompt](#rýchlo-vytvoriť-prompt)
  - [Upraviť prompt](#upraviť-prompt)
  - [Otestovať prompt pred použitím](#otestovať-prompt-pred-použitím)
  - [Správa uložených promptov](#správa-uložených-promptov)
- [Ovládací panel](#ovládací-panel)
  - [Filtrovanie údajov](#filtrovanie-údajov)
  - [Nástenky ovládacieho panelu](#nástenky-ovládacieho-panela)
  - [Export údajov](#export-údajov)
  - [Vymazať uložené záznamy pre model](#vymazať-uložené-záznamy-pre-model)
- [Nastavenia](#nastavenia)
  - [Všeobecné nastavenia](#všeobecné-nastavenia)
  - [Modely](#modely)
  - [Jazyky](#jazyky)
  - [Sledovanie nákladov](#sledovanie-nákladov)
  - [Transformačné prompty](#transformačné-prompty)
  - [Používatelia](#používatelia)
  - [Konfigurácia API](#konfigurácia-api)
  - [O aplikácii](#o-aplikácii)
- [Bežné problémy](#bežné-problémy)
  - [Aplikácia nebude preložiť, prepísať ani transformovať text](#aplikácia-nebude-preložiť-prepísať-ani-transformovať-text)
  - [Zoznam modelov je prázdny](#zoznam-modelov-je-prázdny)
  - [Výsledok je príliš pomalý alebo drahý](#výsledok-je-príliš-pomalý-alebo-drahý)
  - [Rozhranie je v nesprávnom jazyku](#rozhranie-je-v-nesprávnom-jazyku)
  - [Text je príliš malý alebo ťažko čitateľný](#text-je-príliš-malý-alebo-ťažko-čitateľný)
  - [Zmenil som prompt a stratil som úpravy](#zmenil-som-prompt-a-stratil-som-úpravy)
- [Rýchle tipy](#rýchle-tipy)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="pred-začiatkom"></a>

## Predtým než začnete

Na používanie Transrewrt potrebujete prístup k AI službe cez OpenRouter.

Pred začiatkom vám nie je potrebné vybrať platený model. Aplikácia vždy obsahuje zabudovaný **bezplatný** model, takže na bežné použitie to stačí na preklad, prepisovanie a transformáciu textu.

V jednoduchom jazyku:

- **Model** je AI engine, ktorý vykonáva prácu.
- **API kľúč** je vaša osobná prístupová poverenie pre túto službu.

Ak používate **desktopovú aplikáciu**, bude vám potrebný API kľúč. Podrobné kroky nájdete nižšie v časti [Ako získať API kľúč](#how-to-get-an-api-key-desktop-app). V skratke: vytvorte si účet na [OpenRouter](https://openrouter.ai), otvorte stránku [Keys](https://openrouter.ai/keys), vytvorte nový kľúč a vložte ho do [**Nastavenia** > **API Konfigurácia**](#api-config) v Transrewrt.

Ak používate **webovú verziu**, vlastník servera to zvyčajne nastaví za vás, takže vám normálne nemusíte vkladať API kľúč.

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### Ako získať API kľúč (desktopová aplikácia)

Ak používate desktopovú aplikáciu, postupujte podľa týchto krokov:

1. Prejdite na [OpenRouter](https://openrouter.ai) vo svojom webovom prehliadači.
2. Vytvorte si účet alebo sa prihláste.
3. Otvorte stránku [Keys](https://openrouter.ai/keys).
4. Kliknite na tlačidlo na vytvorenie nového API kľúča.
5. Pomenujte kľúč tak, aby ste ho neskôr poznali.
6. Skopírujte nový API kľúč.
7. Vráťte sa do Transrewrt a otvorte **Nastavenia** > **API Konfigurácia**.
8. Vložte kľúč do **OpenRouter API Key**.
9. Kliknite na **Test API Konfigurácie** a overte, či funguje.

> ℹ️ **POZNÁMKA**<br/>
> Môžete začať s bezplatnou cestou OpenRouter alebo ľubovoľným z ďalších dostupných bezplatných modelov. V mnohých prípadoch to stačí na začiatok používania Transrewrt bez výberu plateného modelu.

<br /><br />

<a id="getting-started"></a>
## Začíname

Ak to je váš prvýkrát používanie Transrewrt, postupujte v tomto poradí:

1. Otvorte aplikáciu.
2. Pri potrebe si vyberte **Jazyk rozhrania** z ikony glóbusu.
3. Ak ste na **desktopovej aplikácii**, otvorte [**Nastavenia** > **API Konfigurácia**](#api-config), vložte váš OpenRouter API kľúč a kliknite na **Test API Konfigurácie**.
4. Otvorte [**Nastavenia** > **Modely**](#models) a pridajte jeden alebo viac modelov do **Vybrané modely**.
5. Otvorte [**Nastavenia** > **Jazyky**](#languages) a vyberte svoje **Hlavné jazyky**, ak chcete, aby sa najpoužívanejšie jazyky zobrazovali ako prvé.
6. Prejdite na **Preklad** a spustite jednoduchý preklad na overenie, či všetko funguje.
7. Keď to funguje, skúste **Prepísať** a potom **Transformovať**.

Toto poradie je dôležité. Zabraňuje najčastejšiemu problému pri prvom použití: pokusu o spustenie úlohy skôr, ako má aplikácia fungujúce API spojenie alebo vybraný model.

<br /><br />

<a id="main-parts-of-the-window"></a>
## Hlavné časti okna

Aplikácia je rozdelená do troch hlavných oblastí:

- **Bočný panel** na ľavej strane.
- **Nástrojový panel** v hornej časti.
- **Pracovná oblasť** v strede.

<br />

<a id="sidebar"></a>
### Bočný panel

Použite bočný panel na pohyb v rámci aplikácie:

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/sk/sidebar.png" alt="Bočný panel aplikácie" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Preklad</strong> otvára pracovisko prekladu.</li>
        <li><strong>Prepísanie</strong> otvára pracovisko prepisu.</li>
        <li><strong>Transformácia</strong> otvára pracovisko pre vlastné príkazy.</li>
        <li><strong>Dashboard</strong> zobrazuje informácie o použití a nákladoch.</li>
        <li><strong>Nastavenia</strong> otvára panel nastavení.</li>
        <li><strong>Používateľ</strong> zobrazuje používateľské meno prihláseného používateľa (len web).</li>
      </ul>
      <br />
      <p>Bočný panel môžete tiež zbaliť pre viac miesta kliknutím na ikonu vedľa loga aplikácie.</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### Nástrojový panel

Nástrojový panel sa mierne mení v závislosti od toho, kde sa v aplikácii nachádzate.

- Vľavo zobrazuje názov aktuálnej stránky.
- Vpravo zobrazuje **výber modelu** a ovládanie **Jazyk rozhrania**.

**Výber modelu** vám umožňuje vybrať, ktorý AI engine použiť pre aktuálnu úlohu.

  ![Výber modelu](../images/screenshots/sk/model-selector.png)

> ℹ️ **POZNÁMKA**<br/>
> Niektoré bezplatné modely môžu dočasne prestať fungovať, ak sú nedostupné alebo dosiahli limit použitia. Ak sa tak stane, aplikácia automaticky odstráni ten model z vášho zoznamu.

**Ikona glóbusu + kód jazyka** mení jazyk rozhrania aplikácie, ako súpony a tlačidlá. **Nezmení** jazyky používané v **Preklade**.

  ![Výber jazyka rozhrania](../images/screenshots/sk/language-selector.png)

<br />

<a id="input-and-output-panels"></a>

### Vstupné a výstupné panely

Väčšina pracovných priestorov používa ľavý panel **Vstup** a pravý panel **Výstup**.

Panel **Vstup** zobrazuje:

- Počet znakov
- Počet slov
- Počet odstavcov

Panel **Výstup** môže zobrazovať:

- Dĺžku trvania úlohy
- Náklady na danú úlohu
- Vaše celkové náklady
- **TPS** (tokenov za sekundu), čo je jednoduchý miera rýchlosti
- Počty znakov, slov a odstavcov
- Použitý model

Ak vás zaujímajú technické termíny:

- **Token** znamená malý kus textu. Môžete ho predstavovať ako časť slova alebo krátke slovo.
- **TPS** znamená, koľko takýchto textových kusov model spracoval za sekundu.

<br /><br />

<a id="translate"></a>
## Prekladať

Použite **Prekladať**, keď chcete previesť text z jedného jazyka do druhého.

![Pracovný priestor Prekladať](../images/screenshots/sk/translate.png)

<br />

<a id="translate-text"></a>
### Prekladanie textu

1. Otvorte **Prekladať**.
2. Vyberte jazyk v poli **Z**.
3. Vyberte jazyk v poli **Do**.
4. Vyberte model na paneli nástrojov.
5. Zadajte alebo vložte text do poľa **Vstup**.
6. Kliknite na **Prekladať**.
7. Prečítajte výsledok v poli **Výstup**.
8. Použite tlačidlo na kopírovanie, ak chcete skopírovať výsledok.

<br />

<a id="language-selection"></a>
### Voľba jazyka

- Pole **Z** môže byť konkrétny jazyk alebo **Zistiť jazyk**.
- Pole **Do** je jazyk, do ktorého chcete preložiť výsledok.

Vami vybrané **Hlavné jazyky** sa zobrazia na vrchu zoznamu. Môžete ich nastaviť v [**Nastavenia** > **Jazyky**](#languages).

<br />

<a id="helpful-translation-settings"></a>
### Nápomocné nastavenia prekladu

V [**Nastavenia** > **Všeobecné nastavenia**](#general-settings) môžete zmeniť správanie prekladu:

- **Automatický preklad pri vložení** spustí preklad hneď po vložení textu.
- **Automatické kopírovanie výsledku do schránky** skopíruje výsledok automaticky po úspešnom preklade.
- **Preklad v reálnom čase (počas písania)** spúšťa preklady počas písania.
- **Časový limit (ms)** určuje, ako dlho aplikácia čaká pred spustením prekladu v reálnom čase.

<br />

<a id="keyboard-shortcuts"></a>
### Klávesové skratky

V [**Nastavenia** > **Všeobecné nastavenia**](#general-settings) položka **Správanie pre kláves ENTER** určuje, čo sa stane, keď stlačíte Enter:

- Stlačenie **Enter** môže spustiť úlohu a **Shift+Enter** môže vložiť nový riadok.
- Alebo aplikácia môže konať opačne.

Aktuálna skratka je tiež zobrazená na tlačidle **Prekladať**.

<br /><br />

<a id="rewrite"></a>
## Preformulovať

Použite **Preformulovať**, keď chcete vylepšiť znenie bez zmeny hlavného významu.

![Pracovný priestor Preformulovať](../images/screenshots/sk/rewrite.png)

Toto je užitočné na:

- opravu pravopisu a gramatiky
- vyjasnenie textu
- dosiahnutie formálnejšieho alebo menej formálneho tónu
- skrátenie alebo rozšírenie textu
- aby text znel technickejšie

<br />

<a id="rewrite-text"></a>
### Preformulovanie textu

1. Otvorte **Preformulovať**.
2. Vyberte **Režim**.
3. Vyberte model na paneli nástrojov.
4. Zadajte alebo vložte text do poľa **Vstup**.
5. Kliknite na **Preformulovať**.
6. Skontrolujte výsledok v poli **Výstup**.

Rovnaké správanie klávesu Enter, ako je popísané v časti [**Prekladať**](#keyboard-shortcuts), platí aj tu.

<br /><br />

<a id="transform"></a>
## Transformovať

Použite **Transformovať**, keď chcete, aby AI postupovala podľa vlastných pokynov.

![Pracovný priestor Transformovať](../images/screenshots/sk/transform.png)

Toto je najflexibilnejšia časť aplikácie. Môžete ju použiť na úlohy, ako sú:

- sumarizácia poznámok
- premenovanie hrubého textu na dôkladne spísaný e-mail
- extrakcia kľúčových bodov
- konverzia textu do špecifického formátu

<br />

<a id="run-an-existing-prompt"></a>
### Spustenie existujúceho výzvy (prompt)

1. Otvorte **Transformovať**.
2. Vyberte výzvu zo zoznamu výziev.
3. Ak sa zobrazí pole **Cieľový jazyk**, vyberte jazyk, ak ho chcete.
4. Zadajte alebo vložte text do poľa **Vstup**.
5. Kliknite na **Transformovať**.
6. Prečítajte výsledok v poli **Výstup**.

<br />

<a id="if-you-have-no-prompts-yet"></a>
### Ak ešte nemáte žiadne výzvy

Ak je váš zoznam výziev prázdny, kliknite na **Načítať vzorové výzvy**. Toto pridá vstavané príklady, aby ste mohli rýchlo začať.

> ℹ️ **POZNÁMKA**<br/>
> Vzorové výzvy sú poskytnuté v angličtine. Po ich načítaní môžete výzvu upraviť a použiť **Prekladať výzvu**, ak chcete prispôsobiť text výzvy pre iný jazyk.

<br />

<a id="create-a-prompt-quickly"></a>

### Rýchlo vytvoriť prompt

Najrýchlejšia cesta, ako vytvoriť prompt:

1. Kliknite na **Nový prompt**.
2. Kliknite na **Generovať prompt**.
3. Opíšte, čo má prompt urobiť.
4. Vyberte model.
5. Nechajte aplikáciu vytvoriť návrh.
6. Skontrolujte návrh a kliknite na **Uložiť**.

![Generovať prompt](../images/screenshots/sk/transform-generate.png)

<br />

### Upraviť prompt

Keď vytvoríte alebo upravíte prompt, editor sa zobrazí na ľavej strane a testovacia oblasť na pravej.

![Editor transformácie promptu](../images/screenshots/sk/transform-prompt-edit.png)

Hlavné polia sú:

- **Názov promptu**: názov zobrazený v zozname promptov.
- **Inštrukcie k promptu (voliteľné)**: krátka nápoveda zobrazená používateľovi pri spustení promptu.
- **Rola modelu**: celková rola priradená AI, napríklad 'You are a helpful assistant.'
- **Inštrukcie modelu (jedna na riadok)**: konkrétne pravidlá, ktoré má AI dodržiavať.
- **Opis výstupu**: krátke slovo popisujúce výsledok, napríklad 'summary' alebo 'rewrite'.
- **Teplota (0.0 → 1.0)**: posuvník kreativity.
- **Pýtať na cieľový jazyk**: pridá výber cieľového jazyka pri spustení promptu.

Ak je technický termín **Teplota** pre vás nový, predstavte si ho takto:

- **Nižšia** teplota dáva stabilnejšie, predvídateľnejšie výsledky.
- **Vyššia** teplota dáva viac rôznorodosti a kreativity.

Môžete tiež použiť:

- **`Generovať prompt`** na vytvorenie nového návrhu z jednoduchého opisu
- **`Vylepšiť prompt`** na vylepšenie existujúceho promptu
- **`Preložiť prompt`** na preklad polí promptu

> ⚠️ **VAROVANIE**<br/>
> Kliknite na **`Uložiť`** skôr, než kliknete na **`Späť na Spustenie`**. Ak sa vrátime bez uloženia, vaše zmeny budú stratené.

<br />

<a id="test-a-prompt-before-using-it"></a>
### Otestovať prompt pred použitím

Testovací panel na pravej strane vám umožní vyskúšať váš prompt s testovacím textom, skôr ako ho použijete v bežnej práci.

To je užitočné, keď:

- vytvárate nový prompt
- porovnáte dve verzie promptu
- chcete skontrolovať tón, dĺžku alebo formát výstupu

<br />

<a id="manage-saved-prompts"></a>
### Spravovať uložené prompty

Na spravovanie uložených promptov na jednom mieste otvorte [**Nastavenia** > **Transformácie promptov**](#transform-prompts).

Tam môžete:

- zobraziť a odstrániť vaše prompty
- exportovať prompty ako **JSON**, **CSV** alebo **XLSX**
- importovať prompty zo súboru

<br /><br />

## Dashboard

Použite **Dashboard** na zobrazenie, ako veľa aplikáciu používate a čo to stojí.

![Súhrn dashboardu](../images/screenshots/sk/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### Filtrovať údaje

Použite tlačidlá filtrov na vrchu na zmenu časového rozsahu.

![Filtre dashboardu](../images/screenshots/sk/dashboard-filter.png)

> ℹ️ **POZNÁMKA**<br/>
> Vo webovej verzii môžu administrátori vidieť aj filter **Používateľ**. To im umožňuje prepínať medzi **Všetci používatelia** a konkrétnym používateľom.

<br />

<a id="dashboard-tabs"></a>
### Karty dashboardu

- **Súhrn** poskytuje prehľad o použití a nákladoch.
- **Podľa použitia** rozkladá aktivitu podľa prekladacieho jazyka, režimu prepisu a transform promptu.
- **Podľa modelu** zobrazuje, ktoré modely ste použili a aké sú ich náklady.
- **Podľa dňa** zobrazuje denné celky.
- **Všetky volania** zobrazuje kompletnú históriu volaní a umožňuje jej export.

<br />

<a id="export-data"></a>
### Export údajov

Tabuľky dashboardu môžu exportovať údaje v:

- **JSON**
- **CSV**
- **XLSX**

To je užitočné, ak chcete skontrolovať aktivitu mimo aplikácie alebo zdieľať správu.

<br />

<a id="delete-stored-records-for-a-model"></a>
### Odstrániť uložené záznamy pre model

V **Podľa modelu** alebo **Všetky volania** môžete odstrániť uložené záznamy pre model.

> ⚠️ **VAROVANIE**<br/>
> Odstránenie uložených záznamov sa nedá vrátiť. Použite to iba ak ste si istí, že túto históriu už nepotrebujete.

Ak chcete odstrániť všetky údaje alebo odstrániť záznamy podľa ich veku, prejdite na [**Nastavenia** > **Sledovanie nákladov**](#cost-tracking). Tam nájdete možnosti odstrániť všetky uložené údaje alebo len údaje staršie ako určité dátum.

<br /><br />

<a id="settings"></a>
## Nastavenia

Otvorte **Nastavenia** z bočného panela na prispôsobenie správania aplikácie.

Dostupné karty sa môžu líšiť:

- **Konfigurácia API** je dostupná len v desktopovej aplikácii.
- **Používatelia** je dostupné len vo webovej aplikácii a len pre administrátorov.

<br />

<a id="general-settings"></a>

### Všeobecné nastavenia

Použite **Všeobecné nastavenia** na kontrolu správania pri písaní a vzhľadu.

**Správanie**

- **Správanie pre ENTER** určuje, či Enter spustí úlohu alebo vloží nový riadok.
- **Automatický preklad pri vložení** spustí preklad hneď po vložení textu.
- **Automatické kopírovanie výsledku do schránky** automaticky kopíruje úspešné výsledky.
- **Preklad v reálnom čase (počas písania)** prekladá počas písania.
- **Časový limit (ms)** nastavuje čas čakania na preklad v reálnom čase.

**Vzhľad**

- **Počet desatinných miest nákladov** mení, ako sa zobrazujú desatinné miesta nákladov.
- **Rodina písiem** mení písmo v textových paneloch.
- **Veľkosť** mení veľkosť písma.
- **Iba pre web:** **zobraziť okraj okolo aplikácie** pridá extra priestor okolo rozhrania.

<br />

<a id="models"></a>
### Modely

Použite **Nastavenia** > **Modely** na výber modelov, ktoré sa zobrazia na paneli nástrojov.

![Karta Modely v Nastaveniach](../images/screenshots/sk/settings-models.png)

Stránka má dva zoznamy:

- **Dostupné modely** naľavo
- **Vybrané modely** napravo

Užitočné ovládacie prvky zahŕňajú:

- **Hľadať modely...** na nájdenie modelu podľa mena
- **Iba bezplatné** na zobrazenie len bezplatných modelov
- **Obnoviť** na opätovné načítanie zoznamu
- **Rozbaliť všetko** a **Zbaliť všetko**, keď triedenie podľa poskytovateľa

Na pridanie modelu kliknite **Pridať**.

Na odstránenie modelu kliknite **X** vedľa neho v **Vybrané modely**.

Na vyčistenie zoznamu kliknite **Zrušiť výber všetkých**. Požadovaný bezplatný model zostane v zozname.

> ℹ️ **POZNÁMKA**<br/>
> Ak nechcete ihneď pridať kredity do OpenRouter, začnite povolením **Iba bezplatné** a výberom bezplatných modelov.

<br />

<a id="languages"></a>
### Jazyky

Použite **Nastavenia** > **Jazyky** na organizáciu zoznamov jazykov používaných v aplikácii.

- **Hlavné jazyky** sú pripnuté blízko vrchu zoznamov jazykov v **Preklade** a **Transformácii**.
- **Vlastný jazyk** umožňuje pridať jazyk, ktorý nie je v predvolenom zozname.

Ak pridáte vlastný jazyk, objaví sa vo výberoch jazykov vedľa predvolených možností.

<br />

<a id="cost-tracking"></a>
### Sledovanie nákladov

Použite **Nastavenia** > **Sledovanie nákladov** na správu informácií o nákladoch.

- **Celkový náklad** zobrazuje aktuálny súčet.
- **Kopírovať hodnotu** kopíruje súčet do schránky.
- **Resetovať náklad** resetuje uložený súčet na nulu.
- **Synchronizovať s použitím API kľúča** nastaví súčet tak, aby zodpovedal používaniu oznámenému OpenRouter.
- **Použitie API kľúča** zobrazuje podrobnosti o použití, ak sú dostupné.
- **Vymazať údaje o nákladoch** odstráni všetky údaje, alebo len záznamy staršie ako vybraný dátum.

> ⚠️ **VAROVANIE**<br/>
> Vymazanie údajov sa nedá vrátiť. Pred vymazaním sa uistite, že zálohujete údaje alebo ich exportujete cez [**Tabuľa** > **Všetky hovory**](#dashboard-tabs), inak budú navždy stratené.

<br />

<a id="transform-prompts"></a>
### Výzvy transformácie

Použite **Nastavenia** > **Výzvy transformácie** na hromadnú správu výziev.

Môžete:

- skontrolovať uložené výzvy
- odstrániť výzvy
- importovať výzvy zo súboru
- exportovať výzvy na zálohu alebo zdieľanie

<br />

<a id="users"></a>
### Používatelia

**Iba pre web - iba pre administrátora**

Použite **Používatelia** na správu účtov používateľov vo webovej verzii. Môžete pridávať používateľov, aktualizovať ich údaje, resetovať heslá a odstraňovať účty.

<br />

<a id="api-config"></a>
### Konfigurácia API

**Iba pre desktop**

Použite **Konfigurácia API** na pripojenie desktopovej aplikácie k OpenRouter alebo k Transrewrt proxy.

- **OpenRouter API kľúč** je miesto, kde vložíte svoj kľúč.
- **API URL** je adresa služby. Ponechajte to na predvolenom nastavení, pokiaľ vám nebola poskytnutá iná.
- **Použiť Transrewrt Proxy** smeruje požiadavky cez proxy službu namiesto priameho prístupu k OpenRouter.
- **Kľúčový seed** sa zobrazí, keď je povolená možnosť proxy.
- **Testovať konfiguráciu API** skontroluje, či aktuálne nastavenie funguje.

Pre podrobné kroky na získanie vášho API kľúča, pozrite [**Tabuľa** > **Všetky hovory**](#how-to-get-an-api-key-desktop-app) vyššie.

> ℹ️ **POZNÁMKA**<br/>
> Ak si nie ste istí, čo znamená **API URL**, **Použiť Transrewrt Proxy** alebo **Kľúčový seed**, ponechajte ich bez zmeny a použite predvolené nastavenie OpenRouter. Viac informácií o proxy je dostupných v [Transrewrt Proxy repozitár](https://github.com/wsj-br/transrewrt-proxy).

<br />

<a id="about"></a>

### O programe

Karta **O programe** zobrazuje:

- názov aplikácie
- číslo verzie
- dátum zostavy
- odkaz na repozitár projektu

<br /><br />

<a id="common-issues"></a>
## Čo robiť, keď niečo nefunguje

Ak niečo nefunguje podľa očakávania, skontrolujte najprv tieto body.

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikácia neprekladá, prepíše ani neprevádza text

Skontrolujte, že:

- v paneli nástrojov ste vybrali model
- v [**Nastavenia** > **Modely**](#models) je uvedený aspoň jeden model
- funguje vaše nastavenie API

Ak používate desktopovú aplikáciu:

1. Otvorte [**Nastavenia** > **Konfigurácia API**](#api-config).
2. Skontrolujte, či je uložený váš kľúč API.
3. Kliknite na **Otestovať konfiguráciu API**.

<br />

<a id="the-model-list-is-empty"></a>
### Zoznam modelov je prázdny

Otvorte [**Nastavenia** > **Modely**](#models) a kliknite na **Obnoviť**.

Ak je to potrebné:

- vyhľadajte model
- zapnite **Iba bezplatné**
- pridajte jeden alebo viac modelov do **Vybraných modelov**

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Výsledok je príliš pomalý alebo drahý

Vyskúšajte jednu alebo viac z týchto možností:

- vyberte iný model
- použite kratší vstup
- vypnite **Preklad v reálnom čase (počas písania)** v [**Nastavenia** > **Všeobecné nastavenia**](#general-settings)
- použite bezplatné modely pre jednoduché úlohy (pozri [Modely](#models))

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### Rozhranie je v zlom jazyku

Kliknite na ikonu glóbu v [paneli nástrojov](#toolbar) a vyberte váš uprednostňovaný **Jazyk rozhrania**.

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Text je príliš malý alebo ťažko čitateľný

Otvorte [**Nastavenia** > **Všeobecné nastavenia**](#general-settings) a zmeňte:

- **Rodina písiem**
- **Veľkosť**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Zmenil som výzvu a stratím úpravy

Pri úprave výzvy vždy kliknite na **Uložiť** pred kliknutím na **Späť na Spustenie**.

<br /><br />

<a id="quick-tips"></a>
## Rýchle tipy

- Začnite s [**Prekladom**](#translate), aby ste overili, že vaše nastavenie funguje, než prejdete k [**Prepisu**](#rewrite) alebo [**Transformácii**](#transform).
- Použite [**Prepis**](#rewrite) na každodenné vylepšenia formulácie.
- Použite [**Transformáciu**](#transform), keď potrebujete opakovateľný workflow pre konkrétnu úlohu.
- Použite [**Tabuľu**](#dashboard), ak chcete sledovať využitie a náklady.
- Pravidelne exportujte výzvy, ak vytvárate knižnicu výziev, ktorú chcete bezpečne uchovávať (pozri [Transformovať výzvy](#transform-prompts)).

<br /><br />

<a id="disclaimer"></a>
## Vylúčenie zodpovednosti

Názvy produktov a ikony patria ich príslušným vlastníkom a sú použité len na účely identifikácie. Tento softvér nie je spojený s ani schválený žadnou z uvedených značiek.

<br /><br />

<a id="license"></a>
## Licencia

Autorské práva © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)