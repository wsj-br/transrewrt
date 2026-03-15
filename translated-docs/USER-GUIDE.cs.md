---
translated_at: "2026-03-15T22:09:53.378Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Transrewrt – Uživatelská příručka

<br />

<a id="introduction"></a>
## Úvod

Transrewrt vám pomůže pracovat s textem třemi hlavními způsoby:

- **Překládat** – konvertovat text z jednoho jazyka do jiného.
- **Přepisovat** – přefázi text do jiného stylu, například jasnějšího, kratšího nebo formálnějšího.
- **Transformovat** – zpracovat text pomocí vlastních AI instrukcí, tzv. promptů (dotazů).

<br />

Tato příručka vysvětluje, jak aplikaci používat poté, co je nainstalovaná a spuštěná. Postupy pro instalaci naleznete v hlavním souboru [README](../README.md).

<br />

> ℹ️ **POZNÁMKA**<br/>
> Transrewrt je dostupná jako desktopová aplikace pro Windows a Linux a jako samostatně hostovaná webová aplikace. Tato příručka se zaměřuje na každodenní používání aplikace. Pokud platí něco pouze pro jednu verzi, je to jasně označeno.

<small>**Přečtěte si v jiných jazycích:** [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Obsah** 

- [Než začnete](#nez-začnete)
  - [Jak získat API klíč (desktopová aplikace)](#jak-získat-api-klíč-desktopová-aplikace)
- [Začínáme](#začínáme)
- [Hlavní části okna](#hlavní-části-okna)
  - [Postranní panel](#postranní-panel)
  - [Panel nástrojů](#panel-nástrojů)
  - [Vstupní a výstupní panely](#vstupní-a-výstupní-panely)
- [Překladem](#překladem)
  - [Překlad textu](#překlad-textu)
  - [Výběr jazyka](#výběr-jazyka)
  - [Užitečné nastavení překladu](#užitečné-nastavení-překladu)
  - [Klávesové zkratky](#klávesové-zkratky)
- [Přepis](#přepis)
  - [Přepis textu](#přepis-textu)
- [Transformace](#transformace)
  - [Spuštění existujícího promptu](#spuštění-existujícího-promptu)
  - [Pokud zatím nemáte žádné prompty](#pokud-zatím-nemáte-žádné-prompty)
  - [Rychlé vytvoření promptu](#rychl%C3%A9-vytvo%C5%99en%C3%AD-promptu)
  - [Úprava promptu](#úprava-promptu)
  - [Testování promptu před použitím](#testování-promptu-před-pou%C5%99it%C3%ADm)
  - [Správa uložených promptů](#správa-uložených-promptů)
- [Řídicí panel](#řídicí-panel)
  - [Filtrování dat](#filtrování-dat)
  - [Karty řídicího panelu](#karty-řídicího-panelu)
  - [Export dat](#export-dat)
  - [Smazání uložených záznamů pro model](#smazání-uložených-záznamů-pro-model)
- [Nastavení](#nastavení)
  - [Obecná nastavení](#obecná-nastavení)
  - [Modely](#modely)
  - [Jazyky](#jazyky)
  - [Sledování nákladů](#sledování-nákladů)
  - [Transformační prompty](#transformační-prompty)
  - [Uživatelé](#uživatelé)
  - [Konfigurace API](#konfigurace-api)
  - [O aplikaci](#o-aplikaci)
- [Běžné problémy](#běžné-problémy)
  - [Aplikace nebude překládat, přepisovat ani transformovat text](#aplikace-nebude-p%C5%99ekl%C3%A1dat-p%C5%99episovat-ni-transformovat-text)
  - [Seznam modelů je prázdný](#seznam-modelů-je-prázdný)
  - [Výsledek je příliš pomalý nebo příliš drahý](#výsledek-je-p%C5%99%C3%ADli%C5%A1-pomal%C3%BD-nebo-p%C5%99%C3%ADli%C5%A1-drah%C3%BD)
  - [Rozhraní je v nesprávném jazyce](#rozhran%C3%AD-je-v-nesprávném-jazyce)
  - [Text je příliš malý nebo špatně čitelný](#text-je-p%C5%99%C3%ADli%C5%A1-mal%C3%BD-nebo-%C5%A1patn%C4%9B-%C4%8Diteln%C3%BD)
  - [Změnil jsem prompt a ztratil jsem úpravy](#změnil-jsem-prompt-a-ztratil-jsem-%C3%BApravy)
- [Rychlé tipy](#rychl%C3%A9-tipy)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="before-you-start"></a>

## Než začnete

Chcete-li používat Transrewrt, potřebujete přístup k AI službě přes OpenRouter.

Než začnete, nemusíte si vybírat placený model. Aplikace vždy zahrnuje vestavěný **bezplatný** model, takže pro běžné použití je to dostatečné pro začátek překládání, přepisování a transformování textu.

Zjednodušeně:

- **Model** je AI engine, který práci dělá.
- **API klíč** je vaše osobní přístupové pověření pro tuto službu.

Pokud používáte **desktopovou aplikaci**, budete potřebovat API klíč. Podrobný postup najdete v [Jak získat API klíč (desktopová aplikace)](#jak-získat-api-klíč-desktopová-aplikace) níže. V krátkosti: vytvořte účet na [OpenRouter](https://openrouter.ai), otevřete stránku [Klíče](https://openrouter.ai/keys), vytvořte nový klíč a vložte jej do [**Nastavení** > **Konfigurace API**](#konfigurace-api) v Transrewrt.

Pokud používáte **webovou verzi**, majitel serveru to obvykle nastaví za vás, takže vám normálně nebude nutné zadávat API klíč sami.

<br />

<a id="jak-získat-api-klíč-desktopová-aplikace"></a>
### Jak získat API klíč (desktopová aplikace)

Pokud používáte desktopovou aplikaci, postupujte takto:

1. Přejděte v prohlížeči na [OpenRouter](https://openrouter.ai).
2. Vytvořte účet nebo se přihlaste.
3. Otevřete stránku [Klíče](https://openrouter.ai/keys).
4. Kliknutím vytvořte nový API klíč.
5. Pojmenujte klíč, abyste ho později rozpoznali.
6. Zkopírujte nový API klíč.
7. Vraťte se do Transrewrt a otevřete **Nastavení** > **Konfigurace API**.
8. Vložte klíč do **API klíč OpenRouter**.
9. Klikněte na **Testovat konfiguraci API**, aby jste se ujistili, že funguje.

> ℹ️ **POZNÁMKA**<br/>
> Můžete začít s bezplatným režimem OpenRouter nebo s jinými bezplatnými modely. V mnoha případech to stačí pro začátek používání Transrewrt, aniž byste museli vybírat placený model.

<br /><br />

<a id="getting-started"></a>
## Začínáme

Pokud používáte Transrewrt poprvé, postupujte v tomto pořadí:

1. Otevřete aplikaci.
2. Vyberte si **jazyk rozhraní** z ikony glóbu, pokud je potřeba.
3. Pokud jste na **desktopové aplikaci**, otevřete [**Nastavení** > **Konfigurace API**](#konfigurace-api), vložte svůj OpenRouter API klíč a klikněte na **Testovat konfiguraci API**.
4. Otevřete [**Nastavení** > **Modely**](#modely) a přidejte jeden nebo více modelů do **Vybrané modely**.
5. Otevřete [**Nastavení** > **Jazyky**](#jazyky) a vyberte si **Hlavní jazyky**, pokud chcete, aby se vaše nejpoužívanější jazyky objevovaly na prvním místě.
6. Přejděte do **Přeložit** a proveďte jednoduchý překlad pro potvrzení, že vše funguje.
7. Když to funguje, zkuste **Přepsat** a poté **Transformovat**.

Toto pořadí je důležité. Zabraňuje nejčastějšímu problému při prvním použití: pokusu o spuštění úkolu, než aplikace má funkční API připojení nebo vybraný model.

<br /><br />

<a id="main-parts-of-the-window"></a>
## Hlavní části okna

Aplikace je rozdělena do tří hlavních oblastí:

- **Postranní panel** na levé straně.
- **Nástrojová lišta** nahoře.
- **Pracovní plocha** uprostřed.

<br />

<a id="sidebar"></a>
### Postranní panel

Používejte postranní panel pro pohyb v aplikaci:

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/cs/sidebar.png" alt="Aplikační postranní panel" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Přeložit</strong> otevře pracovní prostor pro překlad.</li>
        <li><strong>Přepsat</strong> otevře pracovní prostor pro přepisování.</li>
        <li><strong>Transformovat</strong> otevře pracovní prostor pro vlastní výzvu.</li>
        <li><strong>Přehled</strong> zobrazuje informace o využití a nákladech.</li>
        <li><strong>Nastavení</strong> otevře panel nastavení.</li>
        <li><strong>Uživatel</strong> zobrazuje uživatelské jméno přihlášeného uživatele (jen web).</li>
      </ul>
      <br />
      <p>Postranní panel můžete také sbalit pro více místa kliknutím na ikonu vedle loga aplikace.</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### Nástrojová lišta

Nástrojová lišta se lehce mění v závislosti na tom, kde se v aplikaci nacházíte.

- Vlevo zobrazuje aktuální název stránky.
- Vpravo zobrazuje **výběr modelu** a ovládací prvek **jazyk rozhraní**.

**Výběr modelu** vám umožňuje zvolit, který AI engine chcete použít pro aktuální úkol.

  ![Výběr modelu](../images/screenshots/cs/model-selector.png)

> ℹ️ **POZNÁMKA**<br/>
> Některé bezplatné modely mohou dočasně přestat fungovat, pokud jsou nedostupné nebo dosáhly limitu použití. Pokud se to stane, aplikace automaticky odstraní takový model z vašeho seznamu.

**Ikona glóbu + kód jazyka** mění jazyk rozhraní aplikace, jako jsou nabídky a tlačítka. **Nezměňuje** jazyky použitých v **Přeložit**.

  ![Výběr jazyka rozhraní](../images/screenshots/cs/language-selector.png)

<br />

<a id="input-and-output-panels"></a>

### Panely vstupu a výstupu

Většina pracovních prostorů pouvá levý panel **Vstup** a pravý panel **Výstup**.

Panel **Vstup** zobrazuje:

- Počet znaků
- Počet slov
- Počet odstavců

Panel **Výstup** může zobrazovat:

- Jak dlouho úloha trvala
- Náklady na tuto úlohu
- Vaše celkové náklady (běžící součet)
- **TPS** (tokenů za sekundu), což je jednoduchá míra rychlosti
- Počet znaků, slov a odstavců
- Použitý model

Pokud vás technické termíny zajímají:

- **Token** znamená malý kousek textu. Můžete si ho představit jako část slova nebo krátké slovo.
- **TPS** znamená, kolik takových textových kousků model zpracoval za sekundu.

<br /><br />

<a id="translate"></a>
## Překladač

Použijte **Překladač**, když chcete převést text z jednoho jazyka do druhého.

![Pracovní prostor Překladače](../images/screenshots/cs/translate.png)

<br />

<a id="translate-text"></a>
### Překlad textu

1. Otevřete **Překladač**.
2. Zvolte jazyk v **Z**.
3. Zvolte jazyk v **Do**.
4. Zvolte model na panelu nástrojů.
5. Zadejte nebo vložte text do **Vstupu**.
6. Klikněte na **Přeložit**.
7. Přečtěte si výsledek ve **Výstupu**.
8. Pokud chcete výsledek zkopírovat, použijte tlačítko pro kopírování.

<br />

<a id="language-selection"></a>
### Výběr jazyka

- **Z** může být konkrétní jazyk nebo **Detekovat jazyk**.
- **Do** je jazyk, do kterého chcete výsledek.

Váš vybraný seznam **Hlavní jazyky** se zobrazí nahoře. Můžete je nastavit v [**Nastavení** > **Jazyky**](#languages).

<br />

<a id="helpful-translation-settings"></a>
### Užitečné nastavení překladu

V [**Nastavení** > **Obecná nastavení**](#general-settings) můžete změnit chování překladu:

- **Automatický překlad při vkládání** spustí překlad hned, jak vložíte text.
- **Automatické kopírování výsledku do schránky** automaticky zkopíruje výsledek po úspěšném dokončení.
- **Překlad v reálném čase (během psaní)** spouští překlady, zatímco píšete.
- **Časový limit (ms)** určuje, jak dlouho aplikace čeká, než spustí překlad v reálném čase.

<br />

<a id="keyboard-shortcuts"></a>
### Klávesové zkratky

V [**Nastavení** > **Obecná nastavení**](#general-settings) nastavení **Chování klávesy ENTER** určuje, co se stane, když stisknete Enter:

- **Enter** může spustit úlohu a **Shift+Enter** může přidat nový řádek.
- Nebo aplikace může dělat opak.

Aktuální zkratka je také zobrazena na tlačítku **Přeložit**.

<br /><br />

<a id="rewrite"></a>
## Přebízení

Použijte **Přebízení**, když chcete vylepšit wording bez změny hlavního smyslu.

![Pracovní prostor Přebízení](../images/screenshots/cs/rewrite.png)

To je užitečné pro:

- opravu pravopisu a gramatiky
- zpřehlednění textu
- zpřísnění nebo uvolnění textu
- zkrácení nebo rozšíření textu
- znění textu více technicky

<br />

<a id="rewrite-text"></a>
### Přebízení textu

1. Otevřete **Přebízení**.
2. Zvolte **Režim**.
3. Zvolte model na panelu nástrojů.
4. Zadejte nebo vložte text do **Vstupu**.
5. Klikněte na **Přebít**.
6. Projděte si výsledek ve **Výstupu**.

Stejné chování klávesy Enter, jak je popsáno v [**Překladač**](#keyboard-shortcuts), platí i zde.

<br /><br />

<a id="transform"></a>
## Transformace

Použijte **Transformaci**, když chcete, aby AI postupovala podle vlastních pokynů.

![Pracovní prostor Transformace](../images/screenshots/cs/transform.png)

Toto je nejflexibilnější oblast aplikace. Můžete ji použít pro úkoly, jako:

- shrnutí poznámek
- přepracování drsného textu na odolný e-mail
- extrakce klíčových bodů
- převod textu do konkrétního formátu

<br />

<a id="run-an-existing-prompt"></a>
### Spuštění existující výzvy (promptu)

1. Otevřete **Transformaci**.
2. Zvolte výzvu ze seznamu výzev.
3. Pokud se objeví pole **Cílový jazyk**, zvolte jazyk, pokud chcete.
4. Zadejte nebo vložte text do **Vstupu**.
5. Klikněte na **Transformovat**.
6. Přečtěte si výsledek ve **Výstupu**.

<br />

<a id="if-you-have-no-prompts-yet"></a>
### Pokud nemáte zatím žádné výzvy

Pokud je váš seznam výzev prázdný, klikněte na **Načíst ukázkové výzvy**. To přidá vestavěné příklady, takže můžete začít rychle.

> ℹ️ **POZNÁMKA**<br/>
> Ukázkové výzvy jsou poskytovány v angličtině. Po jejich načtení můžete výzvu upravit a použít **Přeložit výzvu**, pokud chcete přizpůsobit text výzvy pro jiný jazyk.

<br />

<a id="create-a-prompt-quickly"></a>

### Vytvořit prompt rychle

Nejrychlejší způsob, jak vytvořit prompt, je:

1. Klikněte na **Nový prompt**.
2. Klikněte na **Generovat prompt**.
3. Popište, co má prompt dělat.
4. Zvolte model.
5. Nechte aplikaci vytvořit návrh za vás.
6. Zkontrolujte návrh a klikněte na **Uložit**.

![Generovat prompt](../images/screenshots/cs/transform-generate.png)

<br />

### Upravit prompt

Při vytváření nebo úpravě promptu se Editor objeví vlevo a zkušební oblast vpravo.

![Editor promptu Transform](../images/screenshots/cs/transform-prompt-edit.png)

Hlavní oblasti jsou:

- **Název promptu**: název zobrazený v seznamu promptů.
- **Pokyny k promptu (volitelné)**: krátká nápověda zobrazená uživateli při spuštění promptu.
- **Role modelu**: celková role přiřazená AI, například 'You are a helpful assistant.'
- **Pokyny pro model (jeden na řádek)**: konkrétní pravidla, která chcete, aby AI dodržovalo.
- **Popis výstupu**: krátké slovo popisující výsledek, například 'shrnutí' nebo 'přepsání'.
- **Teplota (0.0 → 1.0)**: posuvník kreativity.
- **Požádat o cílový jazyk**: přidává During spuštění promptu se přidá Selektor cílového jazyka.

Pokud je pro vás technický termín **Teplota** nový, představte si to takto:

- **Nižší** teplota dává stabilnější, předvídatelnější výsledky.
- **Vyšší** teplota dává větší rozmanitost a kreativitu.

Můžete také použít:

- **`Generovat prompt`** k vytvoření nového návrhů ze jednoduchého popisu
- **`Vylepšit prompt`** k upřesnění existujícího promptu
- **`Přeložit prompt`** k přeložení polí promptu

> ⚠️ **UPOZORNĚNÍ**<br/>
> Klikněte na **`Uložit`** před kliknutím na **`Zpět na spuštění`**. Pokud se vrátíte bez uložení, vaše změny budou ztraceny.

<br />

<a id="test-a-prompt-before-using-it"></a>
### Otestovat prompt před použitím

Zkušební panel vpravo vám umožní vyzkoušet váš prompt s vzorovým textem, než ho použijete v každodenní práci.

To je užitečné, když:

- vytváříte nový prompt
- porovnáváte dvě verze promptu
- chcete zkontrolovat tón, délku nebo formát výstupu

<br />

<a id="manage-saved-prompts"></a>
### Správa uložených promptů

Pro správu uložených promptů na jednom místě otevřete [**Nastavení** > **Transformovat prompty**](#transform-prompts).

Tam můžete:

- vypsat a odstranit vaše prompty
- exportovat prompty jako **JSON**, **CSV** nebo **XLSX**
- importovat prompty ze souboru

<br /><br />

## Ovládací panel

Použijte **Ovládací panel** pro zobrazení, jak moc aplikaci používáte a co vás to stojí.

![Souhrn ovládacího panelu](../images/screenshots/cs/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### Filtrovat data

Použijte tlačítka filtrů nahoře pro změnu časového rozsahu.

![Filtry ovládacího panelu](../images/screenshots/cs/dashboard-filter.png)

> ℹ️ **POZNÁMKA**<br/>
> Ve webové verzi mohou správci také vidět filtr **Uživatel**. To jim umožňuje přepínat mezi **Všichni uživatelé** a konkrétním uživatelem.

<br />

<a id="dashboard-tabs"></a>
### Karty ovládacího panelu

- **Souhrn** vám dá přehled o využití a nákladech.
- **Podle využití** rozebírá aktivitu podle jazyka překladu, režimu přepisu a transformačního promptu.
- **Podle modelu** ukazuje, které modely jste použili a kolik vás stály.
- **Podle dne** ukazuje denní součty.
- **Všechna volání** ukazuje celou historii volání a umožňuje ji exportovat.

<br />

<a id="export-data"></a>
### Export dat

Tabulky ovládacího panelu mohou exportovat data v:

- **JSON**
- **CSV**
- **XLSX**

To je užitečné, pokud chcete zkontrolovat aktivitu mimo aplikaci nebo sdílet report.

<br />

<a id="delete-stored-records-for-a-model"></a>
### Smazat uložené záznamy pro model

V **Podle modelu** nebo **Všechna volání** můžete odstranit uložené záznamy pro model.

> ⚠️ **UPOZORNĚNÍ**<br/>
> Mazání uložených záznamů nelze vrátit. Použijte to pouze, pokud jste si jisti, že už tuto historii nepotřebujete.

Pokud chcete smazat všechna data nebo odstranit záznamy na základě jejich stáří, přejděte na [**Nastavení** > **Sledování nákladů**](#cost-tracking). Tam najdete možnosti smazat všechna uložená data nebo pouze data starší než určité datum.

<br /><br />

<a id="settings"></a>
## Nastavení

Otevřete **Nastavení** z postranního panelu pro přizpůsobení chování aplikace.

Dostupné karty se mohou lišit:

- **Konfigurace API** je dostupná pouze v desktopové aplikaci.
- **Uživatelé** je dostupné pouze ve webové aplikaci a pouze pro správce.

<br />

<a id="general-settings"></a>

### Obecná nastavení

Pomocí **Obecných nastavení** můžete řídit chování při psaní a vzhled.

**Chování**

- **Chování při stisknutí Enter** určuje, zda Enter spustí úkol nebo vloží nový řádek.
- **Automatický překlad při vložení** spustí překlad okamžitě po vložení textu.
- **Automatické kopírování výsledku do schránky** automaticky zkopíruje úspěšné výsledky.
- **Překlad v reálném čase (během psaní)** překládá během psaní.
- **Časový limit (ms)** nastavuje dobu čekání pro překlad v reálném čase.

**Vzhled**

- **Počet desetinných míst u nákladů** mění zobrazení desetinných míst nákladů.
- **Rodina písma** mění písmo používané v textových panelech.
- **Velikost** mění velikost písmene.
- **Pouze pro web:** **Zobrazit okraj kolem aplikace** přidává dodatečný prostor kolem rozhraní.

<br />

<a id="models"></a>
### Modely

Pomocí **Nastavení** > **Modely** vyberete, které modely se zobrazí na panelu nástrojů.

![Karta Modely v nastavení](../images/screenshots/cs/settings-models.png)

Stránka obsahuje dva seznamy:

- **Dostupné modely** vlevo
- **Vybrané modely** vpravo

Užitečné ovládací prvky zahrnují:

- **Hledat modely...** pro vyhledání modelu podle názvu
- **Pouze zdarma** pro zobrazení pouze bezplatných modelů
- **Obnovit** pro aktualizaci seznamu
- **Rozbalit vše** a **Sbalit vše** při řazení podle poskytovatele

Pro přidání modelu klikněte na **Přidat**.

Pro odstranění modelu klikněte na **X** vedle něj v **Vybraných modelech**.

Pro vyčištění seznamu klikněte na **Zrušit výběr všech**. Požadovaný bezplatný model zůstane v seznamu.

> ℹ️ **POZNÁMKA**<br/>
> Pokud nechcete okamžitě přidat kredity na OpenRouter, začněte povolením **Pouze zdarma** a výběrem bezplatných modelů.

<br />

<a id="languages"></a>
### Jazyky

Pomocí **Nastavení** > **Jazyky** můžete organizovat jazykové seznamy používané v aplikaci.

- **Nejpoužívanější jazyky** jsou připnuté nahoře v jazykových seznamech v **Přeložit** a **Transformovat**.
- **Vlastní jazyk** umožňuje přidat jazyk, který není v předdefinovaném seznamu.

Pokud přidáte vlastní jazyk, objeví se ve selektorech jazyků spolu s předdefinovanými možnostmi.

<br />

<a id="cost-tracking"></a>
### Sledování nákladů

Pomocí **Nastavení** > **Sledování nákladů** můžete spravovat informace o nákladech.

- **Celkové náklady** ukazují aktuální součet.
- **Kopírovat hodnotu** zkopíruje celkovou hodnotu do schránky.
- **Resetovat náklady** resetuje uložený součet na nulu.
- **Synchronizovat s použitím API klíče** nastavuje celkový součet tak, aby odpovídal využití hlášenému OpenRouter.
- **Využití API klíče** ukazuje podrobnosti o využití, jsou-li k dispozici.
- **Odstranit data o nákladech** odstraní všechna data nebo pouze záznamy starší než vybrané datum.

> ⚠️ **VAROVÁNÍ**<br/>
> Odstranění dat nelze vrátit. Před odstraněním se ujistěte, že jste svá data zálohovali nebo exportovali přes [**Ovládací panel** > **Všechna volání**](#dashboard-tabs), jinak budou trvale ztracena.

<br />

<a id="transform-prompts"></a>
### Transformační výzvy

Pomocí **Nastavení** > **Transformační výzvy** můžete hromadně spravovat výzvy.

Můžete:

- prohlížet si uložené výzvy
- mazat výzvy
- importovat výzvy ze souboru
- exportovat výzvy pro zálohování nebo sdílení

<br />

<a id="users"></a>
### Uživatelé

**Pouze pro web - pouze pro správce**

Pomocí **Uživatelů** můžete spravovat uživatelské účty ve webové verzi. Můžete přidávat uživatele, aktualizovat jejich údaje, resetovat hesla a mazat účty.

<br />

<a id="api-config"></a>
### Konfigurace API

**Pouze pro desktop**

Pomocí **Konfigurace API** můžete připojit desktopovou aplikaci k OpenRouter nebo k Transrewrt proxy.

- **OpenRouter API klíč** je místo, kam vložíte svůj klíč.
- **API URL** je adresa služby. Ponechte výchozí, pokud vám nebyla poskytnuta jiná.
- **Použít Transrewrt Proxy** směruje požadavky přes proxy službu místo přímého připojení k OpenRouter.
- **Klíčové semínko** se zobrazí, když je povolena možnost proxy.
- **Otestovat konfiguraci API** zkontroluje, zda aktuální nastavení funguje.

Podrobný postup získání API klíče najdete v sekci [Jak získat API klíč](#how-to-get-an-api-key-desktop-app) výše.

> ℹ️ **POZNÁMKA**<br/>
> Pokud si nejste jisti, co znamená **API URL**, **Použít Transrewrt Proxy** nebo **Klíčové semínko**, ponechte je beze změny a použijte výchozí nastavení OpenRouter. Více informací o proxy najdete v [Transrewrt Proxy repozitář](https://github.com/wsj-br/transrewrt-proxy).


<br />

<a id="about"></a>

### O aplikaci

Karta **O aplikaci** zobrazuje:

- název aplikace
- číslo verze
- datum sestavení
- odkaz na repozitář projektu

<br /><br />

<a id="common-issues"></a>
## Běžné problémy

Pokud něco nefunguje podle očekávání, zkontrolujte nejprve následující body.

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikace nepřekládá, přepisuje ani nemění text

Zkontrolujte, zda:

- jste vybrali model v panelu nástrojů
- je v [**Nastavení** > **Modely**](#models) uveden alespoň jeden model
- vaše API nastavení funguje

Pokud používáte desktopovou aplikaci:

1. Otevřete [**Nastavení** > **Konfigurace API**](#api-config).
2. Zkontrolujte, zda je váš API klíč uložen.
3. Klikněte na **Otestovat konfiguraci API**.

<br />

<a id="the-model-list-is-empty"></a>
### Seznam modelů je prázdný

Otevřete [**Nastavení** > **Modely**](#models) a klikněte na **Aktualizovat**.

V případě potřeby:

- vyhledejte model
- zapněte **Pouze zdarma**
- přidejte jeden nebo více modelů do **Vybrané modely**

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Výsledek je příliš pomalý nebo příliš drahý

Zkuste jeden nebo více z následujících kroků:

- zvolte jiný model
- použijte kratší vstup
- vypněte **Překlad v reálném čase (během psaní)** v [**Nastavení** > **Obecná nastavení**](#general-settings)
- pro jednoduché úkoly použijte bezplatné modely (viz [Modely](#models))

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### Rozhraní je v nesprávném jazyce

Klikněte na ikonu glóbu v [panelu nástrojů](#toolbar) a zvolte preferovaný **Jazyk rozhraní**.

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Text je příliš malý nebo těžko čitelný

Otevřete [**Nastavení** > **Obecná nastavení**](#general-settings) a změňte:

- **Rodina písma**
- **Velikost**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Změnil jsem výzvu a ztratil jsem úpravy

Při úpravě výzvy vždy klikněte na **Uložit** před kliknutím na **Zpět ke spuštění**.

<br /><br />

<a id="quick-tips"></a>
## Rychlé tipy

- Začněte s [**Překladem**](#translate), abyste se ujistili, že vaše nastavení funguje, než přejdete k [**Přepisu**](#rewrite) nebo [**Transformaci**](#transform).
- Použijte [**Přepis**](#rewrite) pro každodenní vylepšení formulace.
- Použijte [**Transformaci**](#transform), když potřebujete opakovatelný pracovní postup pro konkrétní úkol.
- Použijte [**Dashboard**](#dashboard), pokud chcete sledovat využití a náklady.
- Pravidelně exportujte výzvy, pokud vytváříte knihovnu výzev, kterou chcete bezpečně uchovat (viz **Transformovat výzvy**).

<br /><br />

<a id="disclaimer"></a>
## Právní upozornění

Názvy produktů a ikony patří jejich příslušným vlastníkům a jsou použity pouze pro účely identifikace. Tento software není přidružen ani schválen žádnou z uvedených značek.

<br /><br />

<a id="license"></a>
## Licence

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)