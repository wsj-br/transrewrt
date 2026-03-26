---
translated_at: "2026-03-26T00:34:42.370Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Uživatelská příručka

<br/>

<a id="introduction"></a>
## Úvod

Transrewrt vám pomáhá pracovat s textem třemi hlavními způsoby:

- **Překlad** – převod textu z jednoho jazyka do druhého.
- **Přeformulování** – přeformulování textu v jiném stylu, například jasnějším, kratším nebo formálnějším.
- **Transformace** – zpracování textu pomocí vlastních pokynů pro umělou inteligenci, které se nazývají prompty.

<br/>

Tato příručka vysvětluje, jak aplikaci používat, jakmile je nainstalována a spuštěná. Postupy k instalaci jsou popsány v hlavním souboru **[README](README.cs.md)**.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Transrewrt je dostupný jako desktopová aplikace pro Windows a Linux a také jako webová aplikace pro vlastní hostování. Tato příručka se zaměřuje na běžné používání aplikace. Kde se něco vztahuje pouze na jednu verzi, je to jasně označeno.

<small>**Přečtěte si v jiných jazycích:** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Poznámka k překladům uživatelského rozhraní a dokumentace:** Všechny jazyky uživatelského rozhraní kromě původního angličtiny (UK)
> byly přeloženy pomocí modelů umělé inteligence; formulace mohou být nepřesné nebo obsahovat chyby.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Obsah** 

- [Než začnete](#before-you-start)
  - [Jak získat bezplatný klíč OpenRouter API (desktopová aplikace)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Začínáme](#getting-started)
- [Hlavní části okna](#main-parts-of-the-window)
  - [Boční panel](#sidebar)
  - [Panel nástrojů](#toolbar)
  - [Vstupní a výstupní panely](#input-and-output-panels)
- [Překlad](#translate)
  - [Překlad textu](#translate-text)
  - [Výběr jazyka](#language-selection)
  - [Užitečná nastavení pro překlad](#helpful-translation-settings)
- [Přeformulování](#rewrite)
- [Transformace](#transform)
  - [Spustit existující prompt](#run-an-existing-prompt)
  - [Pokud nemáte žádné prompty](#if-you-have-no-prompts-yet)
  - [Rychlé vytvoření promptu](#create-a-prompt-quickly)
  - [Úprava promptu](#edit-a-prompt)
  - [Otestování promptu před použitím](#test-a-prompt-before-using-it)
- [Řídicí panel](#dashboard)
  - [Filtrování dat](#filter-the-data)
  - [Karty řídicího panelu](#dashboard-tabs)
  - [Export dat](#export-data)
  - [Smazání uložených záznamů pro model](#delete-stored-records-for-a-model)
- [Historie](#history)
  - [Filtrování dat](#filter-the-data-1)
  - [Export historických dat](#export-history-data)
- [Nastavení](#settings)
  - [Obecná nastavení](#general-settings)
  - [Modely](#models)
  - [Jazyky](#languages)
  - [Sledování nákladů](#cost-tracking)
  - [Transformační prompty](#transform-prompts)
  - [Uživatelé](#users)
  - [Konfigurace API](#api-config)
  - [O aplikaci](#about)
- [Běžné problémy](#common-issues)
  - [Aplikace nepřekládá, nepřeformulovává ani netransformuje text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Seznam modelů je prázdný](#the-model-list-is-empty)
  - [Výsledky jsou příliš pomalé nebo příliš drahé](#the-result-is-too-slow-or-too-expensive)
  - [Rozhraní je v špatném jazyce](#the-interface-is-in-the-wrong-language)
  - [Text je příliš malý nebo špatně čitelný](#the-text-is-too-small-or-hard-to-read)
  - [Grafy na řídicím panelu jsou prázdné](#dashboard-charts-are-empty)
  - [Náklady zobrazují „nedostupné“ nebo vypadají chybně](#cost-shows-not-available-or-seems-wrong)
  - [Celkové náklady neodpovídají fakturaci poskytovatele](#total-cost-does-not-match-my-provider-bill)
  - [Stránka Historie chybí v bočním panelu](#the-history-page-is-missing-from-the-sidebar)
  - [Webová aplikace: neočekávaně přesměrována na přihlašovací stránku](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Řídicí panel nezobrazuje data jiných uživatelů (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Změnil jsem prompt a ztratil jsem úpravy](#i-changed-a-prompt-and-lost-the-edits)
- [Rychlé tipy](#quick-tips)
- [Právní upozornění](#disclaimer)
- [Licence](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Než začnete

Chcete-li používat Transrewrt, potřebujete přístup alespoň k jednomu poskytovateli umělé inteligence. Podporované poskytovatele jsou: [OpenRouter](https://openrouter.ai) (který agreguje mnoho modelů), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras a [Ollama](https://ollama.com) pro místní modely.

Pro začátek nemusíte vybírat placený model. Jakmile přidáte svůj klíč OpenRouter API, aplikace automaticky aktivuje vestavěnou **bezplatnou** možnost OpenRouter. To vám umožňuje okamžitě začít s překládáním, přepisováním a transformací textu. Alternativně můžete získat bezplatný klíč API také od Cerebras, Google, Groq nebo Mistral AI.

Jednoduše řečeno:

- **Model** je umělá inteligence, která provádí práci. Modely jsou uváděny s **předponou poskytovatele** (například `openrouter/…`, `openai/…`, `ollama/…`).
- **Klíč API** (nebo u Ollama **základní adresa URL**) slouží aplikaci k připojení k příslušnému poskytovateli.

Pokud používáte **desktopovou aplikaci**, přidejte klíče v části [**Nastavení** > **Konfigurace API**](#api-config) pro každého používaného poskytovatele. Pokud chcete používat pouze OpenRouter, níže si přečtěte část [Jak získat klíč API](#how-to-get-an-api-key-desktop-app). Pokud nechcete používat klíč API, můžete nainstalovat Ollama (z [ollama.com](https://ollama.com)) a používat místní modely, např. `translategemma:4b`.

Pokud používáte **webovou verzi**, poskytovatele nastavuje vlastník serveru prostřednictvím proměnných prostředí, takže klíče API nemůžete zadávat přímo v aplikaci.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Jak získat bezplatný klíč OpenRouter API (desktopová aplikace)

Pokud používáte desktopovou aplikaci, postupujte podle těchto kroků:

1. Otevřete [OpenRouter](https://openrouter.ai) ve svém webovém prohlížeči.
2. Vytvořte si účet nebo se přihlaste.
3. Otevřete stránku [Keys](https://openrouter.ai/keys).
4. Klikněte na tlačítko pro vytvoření nového klíče API.
5. Dejte klíči název, pod kterým ho budete později poznávat.
6. Zkopírujte nový klíč API.
7. Vraťte se do Transrewrt a otevřete **Nastavení** > **Konfigurace API**.
8. Vložte klíč do pole **OpenRouter klíč API** (v části **Nastavení** > **Konfigurace API**).
9. Klikněte na **Otestovat klíč OpenRouter**, aby se ověřilo, že funguje.

<br/><br/>

<a id="getting-started"></a>
## Začínáme

Pokud používáte Transrewrt poprvé, postupujte v tomto pořadí:

1. Otevřete aplikaci.
2. Pokud budete chtít, vyberte svůj **jazyk rozhraní** pomocí ikony s globem.
3. Pokud používáte **desktopovou aplikaci**, otevřete [**Nastavení** > **Konfigurace API**](#api-config), přidejte klíč API alespoň pro jednoho poskytovatele (např. OpenRouter) a klikněte na **Test**, abyste ověřili, že funguje.
4. Otevřete [**Nastavení** > **Modely**](#models) a přidejte jeden nebo více modelů do části **Vybrané modely**.
5. Otevřete [**Nastavení **(**Vybrané jazyky**) začnou se zobrazovat jako první.
6. Přejděte na **Přeložit** a proveďte jednoduchý překlad, abyste ověřili, že vše funguje.
7. Jakmile to bude fungovat, vyzkoušejte **Přepsat** a poté **Transformovat**.

Toto pořadí je důležité. Zabraňuje tak nejčastějšímu problému u nových uživatelů: pokusu o spuštění úkolu před tím, než aplikace má funkční připojení API nebo vybraný model.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Hlavní části okna

Aplikace je rozdělena do tří hlavních oblastí:

- **Boční lišta** vlevo.
- **Panel nástrojů** nahoře.
- **Pracovní oblast** uprostřed.

<br/>

<a id="sidebar"></a>
### Boční lišta

Boční lištu použijte k pohybu v rámci aplikace. Boční lištu můžete skrýt, pokud chcete více místa – stačí kliknout na ikonu vedle loga aplikace.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/cs/sidebar.png" alt="Boční lišta aplikace" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Přeložit</strong> otevírá pracovní prostor pro překlad.</li><br/>
        <li><strong>Přepsat</strong> otevírá pracovní prostor pro přepisování.</li><br/>
        <li><strong>Transformovat</strong> otevírá pracovní prostor pro vlastní výzvy.</li><br/>
        <li><strong>Dashboard</strong> zobrazuje informace o využití a nákladech.</li><br/>
        <li><strong>Nastavení</strong> otevírá panel nastavení.</li><br/>
        <li><strong>Historie</strong> zobrazuje historii použití včetně vstupního a výstupního textu.</li><br/>
        <li><strong>Uživatel</strong> zobrazuje uživatelské jméno přihlášeného uživatele (pouze ve webové verzi).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Panel nástrojů

Panel nástrojů se mírně liší podle toho, kde se v aplikaci nacházíte.

- Vlevo zobrazuje název aktuální stránky.
- Vpravo zobrazuje **výběr modelu** a ovládací prvek **jazyka rozhraní**.

**Výběr modelu** umožňuje zvolit, který AI model bude použit pro aktuální úlohu.

  ![Výběr modelu](../images/screenshots/cs/model-selector.png)

Některé bezplatné modely nemusí být vždy k dispozici – někdy mohou být nedostupné nebo mají omezené využití. Pokud k tomu dojde, aplikace model automaticky odstraní z dostupných možností. Chcete-li řídit, které modely se zobrazují, přejděte do [**Nastavení** > **Modely**](#models) a upravte seznam modelů.  
Nastavení modelu můžete otevřít také kliknutím na ikonu poskytovatele vlevo od názvu modelu na panelu nástrojů.

<br/>

**Ikona světa + kód jazyka** změní jazyk uživatelského rozhraní, jako jsou nabídky a tlačítka. **Nezmění** ale překladové jazyky používané v režimu **Překladač**.

  ![Volič jazyka rozhraní](../images/screenshots/cs/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Vstupní a výstupní panel

Většina pracovních prostorů používá levý **vstupní panel** a pravý **výstupní panel**.

Každý panel zobrazuje také:

| **Vstup**                                                          | **Výstup**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Počet znaků <br/>- Počet slov <br/>- Počet odstavců       <br/> | - Doba trvání úlohy<br/>- **TPS** (tokenů za sekundu)<br/>- Počty znaků, slov a odstavců<br/>- Použitý model |


Pokud se zajímáte o technické termíny:

- **Token** znamená malý blok textu. Můžete si to představit jako část slova nebo krátké slovo.
- **TPS** znamená, kolik těchto textových bloků model zpracoval za sekundu.

<br/>

Můžete také sledovat náklady jednotlivých operací (pokud jsou dostupné) a celkové náklady, a to za povolení možnosti `Zobrazit informace o nákladech u akcí` v sekci [**Nastavení** > **Obecná nastavení**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Překladač

Použijte **Překladač**, když chcete převést text z jednoho jazyka do druhého.

![Pracovní prostor Překladač](../images/screenshots/cs/translate.png)

<br/>

<a id="translate-text"></a>
### Překlad textu

1. Otevřete **Překladač**.
2. Vyberte jazyk v poli **Z**.
3. Vyberte jazyk v poli **Do**.
4. Vyberte model v panelu nástrojů.
5. Napište nebo vložte text do pole **Vstup**.
6. Klikněte na **Přeložit**.
7. Přečtěte si výsledek ve **Výstupu**.
8. Pokud si chcete výsledek zkopírovat, použijte tlačítko pro kopírování.

<br/>

<a id="language-selection"></a>
### Výběr jazyka

- **Z** může být konkrétní jazyk nebo možnost **Rozpoznat jazyk**.
- **Do** je jazyk, do kterého chcete text přeložit.

Vaše vybrané **Oblíbené jazyky** se zobrazí na začátku seznamu. Můžete je nastavit v [**Nastavení** > **Jazyky**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Užitečná nastavení překladu

V sekci [**Nastavení** > **Obecná nastavení**](#general-settings) můžete změnit chování překladu:

- **Automatický překlad po vložení** spustí překlad ihned po vložení textu.
- **Automatické kopírování výsledku do schránky** automaticky zkopíruje výsledek po úspěšném překladu.
- **Překlad v reálném čase (během psaní)** spouští překlady během psaní textu.
- **Časový limit (ms)** nastavuje, jak dlouho aplikace počká, než spustí překlad v reálném čase.
- **Enter** určuje, co se stane po stisknutí klávesy `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Přepsat

Použijte **Přepsat**, když chcete zlepšit formulaci textu, aniž byste změnili jeho hlavní význam.

![Pracovní prostor Přepsat](../images/screenshots/cs/rewrite.png)

To je užitečné pro:

- opravu pravopisu a gramatiky
- zpřehlednění textu
- formálnější nebo neformálnější styl
- zkrácení nebo rozšíření textu
- udělání textu techničtějšího

<br/>

> 💡 **TIP**<br/>
> Když používáte režim "**Zkontrolovat pravopis a gramatiku**", zobrazí se ve výstupním panelu tlačítko `Zobrazit změny`.  
> Kliknutím na toto tlačítko přepnete zobrazení oprav, které ukáže nebo skryje konkrétní změny provedené ve vašem textu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformace

Použijte **Transformaci**, když chcete, aby umělá inteligence postupovala podle vašich vlastních pokynů.

![Pracovní prostor Transformace](../images/screenshots/cs/transform.png)

Toto je nejpružnější část aplikace. Můžete ji použít například k těmto úkolům:

- shrnutí poznámek
- převedení hrubého textu na upravený e-mail
- extrakci klíčových bodů
- převodu textu do konkrétního formátu
- jakékoli jiné vlastní úpravě vstupního textu

<br/>

<a id="run-an-existing-prompt"></a>
### Spuštění existujícího promptu

1. Otevřete **Transformaci**.
2. Vyberte prompt ze seznamu promptů.
3. Pokud se objeví pole **Cílový jazyk**, vyberte si jazyk.
4. Do pole **Vstup** napište nebo vložte text.
5. Klikněte na **Transformace**.
6. Výsledek si přečtěte v poli **Výstup**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Pokud ještě žádné prompty nemáte

Pokud je váš seznam promptů prázdný, klikněte na **Načíst ukázkové prompty**. Tím se přidají předdefinované ukázky, abyste mohli rychle začít.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Ukázkové prompty jsou poskytovány pouze v angličtině. Po jejich načtení si můžete prompt upravit a pomocí funkce **Přeložit prompt** převést do svého jazyka.

<br/>

<a id="create-a-prompt-quickly"></a>
### Rychlé vytvoření promptu

Nejrychlejší způsob, jak vytvořit nový prompt:

1. Klikněte na **Nový prompt**.
2. Klikněte na **Vygenerovat prompt**.
3. Popište, co má tento prompt dělat.
4. Vyberte model.
5. Nechte aplikaci vytvořit koncept pro vás.
6. Prohlédněte si koncept a klikněte na **Uložit**.

![Vygenerovat prompt](../images/screenshots/cs/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Úprava promptu

Při vytváření nebo úpravě promptu se na levé straně zobrazí editor a napravo testovací oblast.

![Editor promptu v Transformaci](../images/screenshots/cs/transform-prompt-edit.png)

Hlavní pole jsou:

- **Název promptu**: název, který se zobrazí v seznamu promptů.
- **Pokyny pro prompt (volitelné)**: krátká nápověda uživateli při spouštění promptu.
- **Role modelu**: celková role přiřazená AI, například „Jsi užitečný asistent.“
- **Pokyny pro model (jeden na řádek)**: konkrétní pravidla, která má AI dodržet.
- **Popis výstupu**: krátké slovo popisující výsledek, například „shrnutí“ nebo „přepsání“.
- **Teplota (0,0 → 1,0)**: chování modelu; viz níže.
- **Požadovat cílový jazyk**: přidá výběr cílového jazyka při spouštění promptu.

Pokud pro vás termín **Teplota** není známý, můžete o něm uvažovat takto:

- **Nižší** hodnota teploty znamená stálejší a předvídatelnější výsledky.
- **Vyšší** hodnota teploty poskytne větší rozmanitost a kreativitu.

Můžete také využít:

- **`Vygenerovat prompt`** – pokud chcete vytvořit koncept na základě jednoduchého popisu
- **`Vylepšit prompt`** – k vylepšení existujícího promptu
- **`Přeložit prompt`** – k přeložení polí promptu

<br/>

> ⚠️ **UPOZORNĚNÍ**<br/>
> Před kliknutím na **`Zpět ke spuštění`** klikněte na **`Uložit`**. Pokud se vrátíte zpět bez uložení, změny budou ztraceny.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Otestujte prompt před použitím

Testovací panel napravo vám umožňuje vyzkoušet svůj prompt s ukázkovým textem, ještě než jej budete používat běžně.

To je užitečné, když:

- vytváříte nový prompt
- porovnáváte dvě verze promptu
- chcete zkontrolovat tón, délku nebo formát výstupu

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Uložené prompty můžete exportovat a importovat v části [**Nastavení** > **Transformační prompty**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Nástěnka

Použijte **Nástěnku**, abyste viděli, jak intenzivně aplikaci používáte a kolik vás to stojí (u placených modelů).

![Přehled nástěnky](../images/screenshots/cs/dashboard-summary.png)


<br/>

> ℹ️ **POZNÁMKA**<br/>
> Pokud používáte pouze bezplatné modely, grafy týkající se nákladů budou prázdné.

<br/>

<a id="filter-the-data"></a>
### Filtrování dat

K změně časového rozsahu použijte tlačítka filtrů nahoře.

![Filtry nástěnky](../images/screenshots/cs/dashboard-filter.png)

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Filtr **Uživatel** je ve webové verzi viditelný pouze pro správce. Běžní uživatelé tento filtr neuvidí a v desktopové aplikaci není k dispozici.

<br/>

<a id="dashboard-tabs"></a>

### Karty nastění

- **Přehled** poskytuje přehled využití a nákladů.
- **Podle využití** rozděluje aktivitu podle překladatelského jazyka, režimu přepsání a vstupních pokynů.
- **Podle modelu** zobrazuje, které modely jste použili a kolik vás stály.
- **Podle dne** zobrazuje denní celky.
- **Všechna volání** zobrazuje kompletní historii volání a umožňuje ji exportovat.

<br/>

<a id="export-data"></a>
### Export dat

Z tabulek na přehledovém panelu lze exportovat data v následujících formátech:

- **JSON**
- **CSV**
- **XLSX**

Tato funkce je vhodná, pokud chcete prověřovat aktivitu mimo aplikaci nebo sdílet report.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Smazání uložených záznamů pro model

Na kartách **Podle modelu** nebo **Všechna volání** můžete odstranit uložené záznamy pro konkrétní model kliknutím na ikonu "koše".

> ⚠️ **UPOZORNĚNÍ**<br/>
> Smazání uložených záznamů nelze vrátit zpět. Používejte tuto funkci jen tehdy, když jste si jisti, že historii již nepotřebujete.

Chcete-li smazat všechna data nebo odstranit záznamy podle jejich stáří, přejděte do části [**Nastavení** > **Sledování nákladů**](#cost-tracking). Tam naleznete možnosti smazat všechna uložená data nebo pouze data starší než určité datum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Historie

Kliknutím na **Historii** zobrazíte záznamy svých akcí v aplikaci **Transrewrt**, včetně vstupu a výstupu každé operace.

![Stránka historie](../images/screenshots/cs/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrování dat

**Historie** používá stejné filtry jako stránka **Přehled**. Použijte je k výběru časového rozsahu.

![Filtry přehledu](../images/screenshots/cs/dashboard-filter.png)

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Filtrování podle **Uživatele** je ve webové verzi viditelné pouze pro správce. Běžní uživatelé tento filtr nevidí a ve stolní aplikaci není k dispozici.

<br/>

<a id="export-history-data"></a>
### Export dat historie

Stránka historie umožňuje export vyfiltrovaných dat v následujících formátech:

- **JSON**
- **CSV**
- **XLSX**

Tato funkce je vhodná, pokud chcete prověřovat aktivitu mimo aplikaci nebo sdílet report.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Nastavení

Nastavení otevřete na bočním panelu a přizpůsobte tak chování aplikace.

Dostupné karty závisí na platformě a vaší roli:

  | Karta               | Desktop | Web (správce) | Web (běžný uživatel) |
  |-------------------|:-------:|:-------------:|:--------------------:|
  | Obecná nastavení  |   ano   |      ano      |          ano         |
  | Modely            |   ano   |      ano      |          ano         |
  | Jazyky            |   ano   |      ano      |          ano         |
  | Sledování nákladů |   ano   |      ano      |           —          |
  | Transformační pokyny  |   ano   |      ano      |          ano         |
  | Uživatelé         |    —    |      ano      |           —          |
  | Nastavení API     |   ano   |      ano      |           —          |
  | O aplikaci        |   ano   |      ano      |          ano         |

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Ve webové verzi má každý uživatel svou vlastní konfiguraci. Nastavení jako vybrané modely, jazyky, obecné volby a transformační pokyny jsou uložena pro každého uživatele zvlášť. Změny, které provedete, neovlivní ostatní uživatele.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Obecná nastavení

Používejte **Obecná nastavení** ke kontrole chování při psaní, k určení, zda jsou uložené podrobnosti spuštění v části **Historie**, a k úpravě vzhledu.

**Chování**

- **Chování klávesy ENTER** určuje, zda `Enter` spustí úlohu nebo vloží nový řádek.
- **Automatický překlad při vkládání** spustí překlad ihned po vložení textu.
- **Automatické kopírování výsledku do schránky** automaticky zkopíruje úspěšné výsledky.
- **Překlad v reálném čase (během psaní)** překládá text během psaní.
- **Časový limit (ms)** nastavuje dobu čekání pro překlad v reálném čase.

**Historie**

- **Uchovávat historii spuštění** určuje, zda každý překlad, přepsání a transformace budou ukládat **vstupní a výstupní text** pro zobrazení [**Historie**](#history) na bočním panelu. Vypnutí této funkce vyžaduje potvrzení; pokud potvrdíte, bude uložený text historie odstraněn z databáze.
- **Vymazat data historie** umožňuje odstranit uložený text podle stáří (např. starší než pár měsíců nebo **všechny údaje (vyprázdnit)**) pomocí **Vymazat data**. Ovlivní to pouze uložený text spuštění pro zobrazení **Historie**; neodstraní to **náklady ani údaje o využití**. Pro odstranění nebo omezení **nákladových** dat použijte [**Nastavení** > **Sledování nákladů**](#cost-tracking).

**Vzhled**

- **Zobrazit informace o nákladech u akcí** ovlivňuje zobrazení nákladů za operaci (pokud jsou k dispozici) a celkových nákladů na panelech výstupu pro Překlad, Přepsání a Transformaci.
- **Počet desetinných míst pro náklady** mění způsob zobrazení desetinných míst pro náklady.
- **Pouze web:** **zobrazit okraj kolem aplikace** přidává dodatečný prostor kolem rozhraní.
- **Rodina písma** mění písmo použité v textových panelech.
- **Velikost** mění velikost písma.

<br/>

<a id="models"></a>

### Modely

Pomocí **Nastavení** > **Modely** vyberte, které modely se zobrazí na panelu nástrojů.

![Záložka Nastavení modelů](../images/screenshots/cs/settings-models.png)

Stránka obsahuje dva seznamy:

- **Dostupné modely** vlevo
- **Vybrané modely** vpravo

Užitečné ovládací prvky zahrnují:

- **Hledat modely...** pro vyhledání modelu podle názvu
- **Štítky poskytovatele** pro omezení seznamu na jednoho dodavatele (OpenRouter, OpenAI, Ollama, …)
- **Pouze zdarma** pro zobrazení pouze bezplatných modelů
- **Obnovit** pro opětovné načtení seznamu
- **Rozbalit vše** a **Sbalit vše**, pokud třídíte podle poskytovatele

ID modelů obsahuje předponu poskytovatele (např. `openrouter/…` oproti `openai/…`). Označení, jako např. **OpenAI (OpenRouter)** oproti **OpenAI (přímo)**, uvádí, jak je přenos směrován.

> ℹ️ **POZNÁMKA**<br/>
> Model **OpenRouter Body Builder** (`openrouter/bodybuilder`) je model směrovače, nikoli obecný čtovací model: jeho odpověď je ve formátu JSON, který popisuje těla požadavků rozhraní OpenRouter API (např. pole `requests` s `model` a `messages`). Pokud ho použijete pro funkce **Překlad**, **Přepsání** nebo **Transformace**, bude výstupní panel zobrazovat právě tento JSON místo hotového textu. Pro tyto úlohy si zvolte běžný textový model. Více informací na [stránce modelu Body Builder](https://openrouter.ai/openrouter/bodybuilder) na OpenRouter.

Akce:

- Chcete-li model přidat, klikněte na **Přidat** nebo kdekoli do položky.

- Chcete-li model odebrat, klikněte na **X** vedle něj v seznamu **Vybrané modely** nebo na **Vybrat** v položce v sekci Dostupné modely.

- Chcete-li vyprázdnit seznam, klikněte na **Zrušit všechny výběry**. Povinný bezplatný model zůstane v seznamu.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Pokud si nechcete hned přidávat kredity na OpenRouter, začněte tím, že povolíte možnost **Pouze zdarma** a vyberete si bezplatné modely (bez nutnosti platební karty). Kromě toho můžete použít Ollamu ke spuštění modelů místně bez jakéhokoli klíče API.

<br/>

<a id="languages"></a>
### Jazyky

Pomocí **Nastavení** > **Jazyky** můžete upravovat seznamy jazyků používané v aplikaci.

- **Nejčastější jazyky** jsou připíchnuty nahoře seznamu jazyků ve funkcích **Překlad** a **Transformace**.
- **Vlastní jazyk** vám umožní přidat jazyk, který není ve výchozím seznamu.

Pokud přidáte vlastní jazyk, zobrazí se v selektorech jazyků spolu s předdefinovanými volbami.

<br/>

<a id="cost-tracking"></a>
### Sledování nákladů

Pomocí **Nastavení** > **Sledování nákladů** můžete spravovat informace o nákladech.

- **Celkové náklady** zobrazují aktuální součet.
- **Kopírovat hodnotu** zkopíruje celkovou částku do schránky.
- **Vynulovat náklady** nastaví uložený součet na nulu.
- **Synchronizace s využitím klíče API** nastaví součet tak, aby odpovídal využití hlášenému vaším účtem OpenRouter (pouze OpenRouter).
- **Využití klíče API** zobrazí detaily využití OpenRouter, pokud je to k dispozici.
- **Smazat data nákladů** odstraní všechna data nebo jen ty starší než vybrané datum.

**Sledování nákladů:** Když používáte modely OpenRouter, aplikace zobrazí skutečné využití a výdaje na základě informací o nákladech od OpenRouter. U všech ostatních poskytovatelů aplikace odhaduje náklady na základě cen zveřejněných OpenRouter; pokud není cena dostupná, odhad může být nulový.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> **Všechny finanční údaje jsou orientační a určené pouze pro vaši informaci; nejedná se o oficiální fakturační doklady.**


<br/>

> ⚠️ **UPOZORNĚNÍ**<br/>
> Smazání dat nelze vrátit zpět. Před smazáním si nezapomeňte data zálohovat nebo exportovat prostřednictvím [**Historie**](#history) 
> nebo [**Nástěnky** > **Všechny volání**](#dashboard-tabs), jinak budou trvale ztracena. 
> Také bude smazána veškerá historie vstupů a výstupů souvisejících s každým záznamem volání API.

<br/>

<a id="transform-prompts"></a>
### Předvolby pro transformace

Pomocí **Nastavení** > **Předvolby transformací** lze spravovat předvolby hromadně.

Můžete:

- procházet uložené předvolby
- odstraňovat předvolby
- importovat předvolby ze souboru
- exportovat předvolby pro zálohování nebo sdílení

<br/>

<a id="users"></a>
### Uživatelé

Pomocí **Uživatelé** můžete spravovat uživatelské účty ve webové verzi. Můžete přidávat uživatele, aktualizovat jejich údaje, resetovat hesla a mazat účty.

<br/>

<a id="api-config"></a>
### Konfigurace API

Podporovaní poskytovatelé jsou: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras a **Ollama** (místní modely pomocí základní adresy URL). Stačí nakonfigurovat pouze ty poskytovatele, které používáte.

**Webová aplikace: pouze pro správce**

Klíče API jsou nastaveny prostřednictvím systémových nebo Docker environmentálních proměnných – nezadávají se do webového rozhraní. Tato stránka ukazuje, pro které poskytovatele je klíč nakonfigurován, a umožňuje otestovat každého z nich kliknutím na tlačítko **`Test`**.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Chcete-li změnit klíč API, upravte příslušnou proměnnou prostředí ve své systémové nebo Docker konfiguraci a restartujte server nebo kontejner.

<br/>

**Desktopová aplikace**

Pomocí **Konfigurace API** si můžete uložit klíče API pro každého poskytovatele, kterého používáte. Pro Ollamu zadejte namísto klíče **základní adresu URL**.

<br/>

> 💡 **Tip** <br/>
> Pokud si nepřejete používat klíč API nebo platit za využití, můžete [stáhnout Ollamu](https://ollama.com) a místně spouštět modely (např. `translategemma:4b`) zdarma. Alternativně můžete vytvořit bezplatný účet na OpenRouter (bez platební karty) a používat jejich bezplatné modely nebo získat bezplatný klíč API od Cerebras, Google, Groq nebo Mistral AI.

<br/>

- Přidejte pouze poskytovatele, které potřebujete. V části **Nastavení** > **Modely** každé ID modelu začíná názvem poskytovatele (např. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Chcete-li přidat klíč API, zadejte hodnotu do textového pole a klepněte na **`Uložit`**. Chcete-li nahradit existující klíč, klikněte na **`Upravit`**. Chcete-li ověřit, že klíč funguje, klepněte na **`Test`**. U základní adresy URL Ollamy vždy klikněte na **`Test`**, abyste ověřili připojení.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Aktuální hodnotu klíče API nelze zobrazit. Lze jej pouze nahradit pomocí tlačítka **`Upravit`**.
> Klíče API jsou uloženy šifrovaně v konfiguraci.

<br/>

<a id="about"></a>

### O aplikaci

Záložka **O aplikaci** zobrazuje:

- název aplikace
- číslo verze
- datum sestavení
- odkaz na repozitář projektu

<br/><br/>

<a id="common-issues"></a>
## Běžné problémy

Pokud něco nefunguje podle očekávání, nejprve zkontrolujte následující body.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikace nepřekládá, nepřepisuje ani nemění text

Zkontrolujte, zda:

- jste vybrali model na panelu nástrojů
- je alespoň jeden model uveden v části [**Nastavení** > **Modely**](#models)
- funguje vaše nastavení rozhraní API

Pokud používáte desktopovou aplikaci:

1. Otevřete [**Nastavení** > **Nastavení API**](#api-config).
2. Ověřte, že je uložen alespoň jeden klíč API.
3. Klikněte na **Test** vedle poskytovatele, abyste ověřili, že klíč funguje.

<br/>

<a id="the-model-list-is-empty"></a>
### Seznam modelů je prázdný

Otevřete [**Nastavení** > **Modely**](#models) a klikněte na **Aktualizovat**.

Je-li třeba:

- vyhledejte model
- zapněte **Pouze zdarma**
- přidejte jeden nebo více modelů do části **Vybrané modely**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Výsledek je příliš pomalý nebo drahý

Vyzkoušejte jednu nebo více z těchto možností:

- vyberte jiný model
- použijte kratší vstup
- vypněte **Překlad v reálném čase (během psaní)** v části [**Nastavení** > **Obecná nastavení**](#general-settings)
- používejte bezplatné modely pro jednoduché úkoly (viz [Modely](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Rozhraní je v nesprávném jazyce

Klikněte na ikonu zeměkoule na [panelu nástrojů](#toolbar) a zvolte požadovaný **Jazyk rozhraní**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Text je příliš malý nebo špatně čitelný

Otevřete [**Nastavení** > **Obecná nastavení**](#general-settings) a změňte:

- **Rodina písma**
- **Velikost**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Grafy na Panelu jsou prázdné

Toto je normální, pokud:

- používáte pouze **bezplatné modely** (grafy nákladů budou prázdné)
- zvolený **filtr času** nezahrnuje období, kdy byly volání uskutečněna — zkuste **Všechny**, abyste si to ověřili

Pokud jsou grafy stále prázdné i po výběru **Všechny**, ověřte, že se volání objevují na stránce [**Historie**](#history) nebo na záložce **Všechna volání**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Náklady zobrazují „nedostupné“ nebo se jeví jako nesprávné

Při použití modelů přes **OpenRouter** aplikace zobrazuje skutečné výdaje nahlášené OpenRouter.

U **ostatních poskytovatelů** (OpenAI přímo, Anthropic přímo atd.) jsou náklady odhadovány na základě cen, které zveřejňuje OpenRouter. Pokud pro daný model neexistuje shoda v ceně, náklady budou uvedeny jako **nedostupné** a nebudou zahrnuty do celkového součtu.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Celkové náklady neodpovídají účtu poskytovatele

Všechna čísla nákladů v aplikaci jsou **pouze orientační odhady**, nikoli oficiální faktury.

Chcete-li, aby celkový součet lépe odpovídal vašim skutečným výdajům na OpenRouter, otevřete [**Nastavení** > **Sledování nákladů**](#cost-tracking) a klikněte na **Synchronizovat s využitím klíče API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Stránka Historie chybí v postranním panelu

Možná je vypnuto **Uchovávání historie spuštění**. Otevřete [**Nastavení** > **Obecná nastavení**](#general-settings) a zapněte tuto možnost. Všimněte si, že její zapnutí neobnoví dříve smazaná data historie.

<br/>

<a id="web-app-session-expired"></a>
### Webová aplikace: nečekaně přesměrováno na přihlašovací stránku

Vaše relace mohla vypršet. Přihlaste se znovu. Pokud se to děje často, zkontrolujte nastavení serveru pro délku trvání relace.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Panel nezobrazuje data ostatních uživatelů (webová verze)

Pouze **správci** mohou všechny uživatele zobrazit prostřednictvím filtru **Uživatel**. Běžní uživatelé podle návrhu vidí pouze vlastní aktivitu.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Změnil jsem výzvu a ztratil jsem úpravy

Při úpravě výzvy vždy klikněte na **Uložit** předtím, než kliknete na **Zpět ke spuštění**.

<br/><br/>

<a id="quick-tips"></a>
## Rychlé tipy

- Začněte s [**Překladem**](#translate), abyste ověřili, že vaše nastavení funguje, než přejdete k [**Přepisu**](#rewrite) nebo [**Transformaci**](#transform).
- Používejte [**Přepis**](#rewrite) pro každodenní zlepšování textu.
- Používejte [**Transformaci**](#transform), když potřebujete opakovatelný pracovní postup pro konkrétní úkol.
- Používejte [**Panel**](#dashboard), pokud chcete sledovat využití a náklady.
- Používejte [**Historii**](#history) k prohlížení minulých akcí a plného vstupního a výstupního textu.
- Pravidelně exportujte výzvy, pokud vytváříte knihovnu výzev, kterou chcete bezpečně uchovávat (viz [Transformační výzvy](#transform-prompts)) nebo ji chcete sdílet s ostatními.

<br/><br/>

<a id="disclaimer"></a>

## Zřeknutí se nároků

Názvy produktů a ikony patří jejich příslušným majitelům a používají se výhradně pro identifikační účely. Tento software není spojen s žádnou z zmíněných značek a není jejich podporován.

<br/><br/>

<a id="license"></a>
## Licence

Autorská práva © 2026 Waldemar Scudeller Jr.

[Apache Licence 2.0](LICENSE)