---
translated_at: "2026-03-29T01:52:51.997Z"
source_hash: "8981b8db163153bfc443046fa20a49b33c92b9feebdee302f6ef60852f273472"
source_mtime: "2026-03-29T01:41:58.368Z"
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
- **Přeformulování** – přepsání textu v odlišném stylu, např. jasnějším, stručnějším či formálnějším.
- **Úprava** – zpracování textu pomocí vlastních pokynů pro umělou inteligenci, tzv. promptů.

<br/>

Tento průvodce vysvětluje, jak aplikaci používat po její instalaci a spuštění. Pokyny k instalaci najdete v hlavním souboru **[README](README.cs.md)**.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Transrewrt je dostupný jako desktopová aplikace pro Windows a Linux a také jako samoobslužná webová aplikace. Tento průvodce se zaměřuje na běžné používání aplikace. Kde se něco týká pouze jedné verze, je to jasně označeno.

<small>**Přečtěte si v jiných jazycích:** </small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Poznámka k překladům uživatelského rozhraní a dokumentace:** Všechny jazykové verze rozhraní kromě původního angličtiny (UK)
> byly přeloženy pomocí AI modelů; slovní vyjádření mohou být nepřesná nebo obsahovat chyby.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Obsah**

- [Než začnete](#before-you-start)
  - [Jak získat zdarma OpenRouter API klíč (desktopová aplikace)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [První kroky](#getting-started)
- [Hlavní části okna](#main-parts-of-the-window)
  - [Boční panel](#sidebar)
  - [Panel nástrojů](#toolbar)
  - [Vstupní a výstupní panely](#input-and-output-panels)
- [Překlad](#translate)
  - [Překlad textu](#translate-text)
  - [Výběr jazyků](#language-selection)
  - [Užitečná nastavení překladu](#helpful-translation-settings)
- [Přepis](#rewrite)
- [Úprava](#transform)
  - [Spustit existující prompt](#run-an-existing-prompt)
  - [Pokud ještě žádné prompty nemáte](#if-you-have-no-prompts-yet)
  - [Rychlé vytvoření promptu](#create-a-prompt-quickly)
  - [Upravit prompt](#edit-a-prompt)
  - [Otestujte prompt před použitím](#test-a-prompt-before-using-it)
- [Přehled](#dashboard)
  - [Filtrování dat](#filter-the-data)
  - [Záložky přehledu](#dashboard-tabs)
  - [Export dat](#export-data)

- [Smazat uložené záznamy pro model](#delete-stored-records-for-a-model)
- [Historie](#history)
  - [Filtrování dat](#filter-the-data-1)
  - [Exportovat data historie](#export-history-data)
- [Nastavení](#settings)
  - [Obecná nastavení](#general-settings)
  - [Modely](#models)
  - [Jazyky](#languages)
  - [Sledování nákladů](#cost-tracking)
  - [Převod vstupních textů](#transform-prompts)
  - [Uživatelé](#users)
  - [Nastavení API](#api-config)
  - [O aplikaci](#about)
- [Běžné problémy](#common-issues)
  - [Aplikace nepřekládá, nepřepisuje ani nemění text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Seznam modelů je prázdný](#the-model-list-is-empty)
  - [Výsledek je příliš pomalý nebo nákladný](#the-result-is-too-slow-or-too-expensive)
  - [Rozhraní je v nesprávném jazyce](#the-interface-is-in-the-wrong-language)
  - [Text je příliš malý nebo špatně čitelný](#the-text-is-too-small-or-hard-to-read)
  - [Grafy na nástěnce jsou prázdné](#dashboard-charts-are-empty)

- [Cena zobrazuje „není k dispozici“ nebo se zdá být chybná](#cost-shows-not-available-or-seems-wrong)
  - [Celková cena neodpovídá účtu od poskytovatele](#total-cost-does-not-match-my-provider-bill)
  - [Stránka Historie chybí v postranním panelu](#the-history-page-is-missing-from-the-sidebar)
  - [Webová aplikace: nečekaně přesměrována na přihlašovací stránku](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Webová správa: zapomenuté nebo ztracené heslo](#web-admin-forgot-or-lost-a-password)
  - [Na nástěnce nejsou zobrazena data ostatních uživatelů (webová verze)](#dashboard-shows-no-data-for-other-users-web)
  - [Změnil jsem výzvu a editace zmizely](#i-changed-a-prompt-and-lost-the-edits)
- [Rychlé tipy](#quick-tips)
- [Zřeknutí odpovědnosti](#disclaimer)
- [Licence](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Než začnete

Pro použití Transrewrt potřebujete přístup alespoň k jednomu poskytovateli umělé inteligence. Podporovaní poskytovatelé jsou: [OpenRouter](https://openrouter.ai) (který agreguje mnoho modelů), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras a [Ollama](https://ollama.com) pro místní modely.

Pro začátek nemusíte vybírat placený model. Jakmile přidáte svůj klíč OpenRouter API, aplikace automaticky aktivuje vestavěnou **bezplatnou** možnost OpenRouter. To vám umožní okamžitě začít s překládáním, přepisováním a transformací textu. Případně můžete získat bezplatný klíč API také od Cerebras, Google, Groq nebo Mistral AI.

Jednoduše řečeno:

- **Model** je motor umělé inteligence, který provádí práci. Modely jsou uvedeny s **předponou poskytovatele** (například `openrouter/…`, `openai/…`, `ollama/…`).
- **Klíč API** (nebo u Ollama **základní URL**) slouží k tomu, aby aplikace mohla komunikovat s daným poskytovatelem.

Pokud používáte **desktopovou aplikaci**, přidejte klíče v části [**Nastavení** > **Konfigurace API**](#api-config) pro každého poskytovatele, kterého používáte. Pokud používáte pouze OpenRouter, podívejte se níže na část [Jak získat klíč API](#how-to-get-an-api-key-desktop-app). Pokud nechcete používat klíč API, můžete nainstalovat Ollama (z [ollama.com](https://ollama.com)) a místo toho používat místní modely, například `translategemma:4b`.

Pokud používáte **webovou verzi**, správce serveru konfiguruje poskytovatele pomocí proměnných prostředí, takže nemůžete klíče API zadat přímo v aplikaci.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### Jak získat bezplatný klíč OpenRouter API (desktopová aplikace)

Pokud používáte desktopovou aplikaci, postupujte podle následujících kroků:

1. Otevřete ve webovém prohlížeči [OpenRouter](https://openrouter.ai).
2. Vytvořte si účet nebo se přihlaste.
3. Otevřete stránku [Keys](https://openrouter.ai/keys).
4. Klikněte na tlačítko pro vytvoření nového klíče API.
5. Zadejte klíči název, abyste jej mohli později rozpoznat.
6. Zkopírujte nový klíč API.
7. Vraťte se do Transrewrt a otevřete **Nastavení** > **Konfigurace API**.
8. Vložte klíč do pole **Klíč OpenRouter API** (v části **Nastavení** > **Konfigurace API**).
9. Klikněte na **Otestovat klíč OpenRouter**, abyste ověřili, že funguje.

<br/><br/>

<a id="getting-started"></a>

## Začínáme

Pokud používáte Transrewrt poprvé, postupujte v tomto pořadí:

1. Spusťte aplikaci.
2. V případě potřeby vyberte svůj **jazyk rozhraní** pomocí ikony zeměkoule.
3. Pokud používáte **desktopovou aplikaci**, otevřete [**Nastavení** > **Konfigurace API**](#api-config), přidejte klíč API alespoň pro jednoho poskytovatele (například OpenRouter) a klepnutím na **Test** ověřte, zda vše funguje.
4. Otevřete [**Nastavení** > **Modely**](#models) a přidejte jeden nebo více modelů do **Vybrané modely**.
5. Otevřete [**Nastavení** > **Jazyky**](#languages) a vyberte své **Nejčastější jazyky**, pokud chcete, aby vaše nejpoužívanější jazyky byly zobrazeny na prvním místě.
6. Přejděte na **Překlad** a spusťte jednoduchý překlad, abyste ověřili, že vše funguje.
7. Jakmile to bude fungovat, zkuste **Přepsat** a poté **Transformovat**.

Toto pořadí je důležité. Zabraňuje nejběžnějšímu problému při prvním použití: spuštění úlohy dříve, než má aplikace funkční připojení přes API nebo vybraný model.

<br/><br/>

<a id="main-parts-of-the-window"></a>

## Hlavní části okna

Aplikace je rozdělena do tří hlavních oblastí:

- **Boční panel** vlevo.
- **Panel nástrojů** nahoře.
- **Pracovní oblast** uprostřed.

<br/>

<a id="sidebar"></a>

### Boční panel

Pomocí bočního panelu se pohybujte v aplikaci. Panel můžete sbalit, čímž získáte více místa – klikněte k tomu na ikonu vedle loga aplikace.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/cs/sidebar.png" alt="Boční panel aplikace" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Přeložit</strong> otevře pracovní prostředí pro překlad.</li><br/>
        <li><strong>Přepsat</strong> otevře pracovní prostředí pro přepis textu.</li><br/>
        <li><strong>Transformovat</strong> otevře pracovní prostředí s vlastním promptem.</li><br/>
        <li><strong>Dashboard</strong> zobrazuje informace o využití a nákladech.</li><br/>
        <li><strong>Nastavení</strong> otevře panel nastavení.</li><br/>
        <li><strong>Historie</strong> zobrazuje historii použití včetně vstupního a výstupního textu.</li><br/>
        <li><strong>Uživatel</strong> zobrazuje uživatelské jméno přihlášeného uživatele (pouze na webu).</li>
      </ul>

</td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Panel nástrojů

Panel nástrojů se mírně mění v závislosti na tom, kde se v aplikaci nacházíte.

- Vlevo zobrazuje název aktuální stránky.
- Vpravo zobrazuje **výběr modelu** a ovládání **jazyka rozhraní**.

**Výběr modelu** umožňuje vybrat, který AI model bude použit pro aktuální úkol.

  ![Výběr modelu](../images/screenshots/cs/model-selector.png)

Některé bezplatné modely nemusí být vždy dostupné – občas jsou offline nebo mají omezení využití. V takovém případě aplikace model automaticky odstraní ze seznamu dostupných modelů. Chcete-li řídit, které modely se zobrazují, přejděte do [**Nastavení** > **Modely**](#models) a upravte svůj seznam modelů. 
Nastavení modelu můžete otevřít také přímo kliknutím na ikonu poskytovatele vlevo od názvu modelu v panelu nástrojů.

<br/>

**Ikona světa a kód jazyka** změní jazyk uživatelského rozhraní aplikace, jako jsou nabídky a tlačítka. Tato volba **nemění** překladové jazyky používané při funkci **Překlad**.

![Výběr jazyka rozhraní](../images/screenshots/cs/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Vstupní a výstupní panely

Většina pracovních prostorů používá levý **vstupní panel** a pravý **výstupní panel**.

Každý panel navíc zobrazuje:

| **Vstup**                                                          | **Výstup**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Počet znaků <br/>- Počet slov <br/>- Počet odstavců         | - Jak dlouho trvalo vykonání úkolu<br/>- **TPS** (tokeny za sekundu)<br/>- Počet znaků, slov a odstavců<br/>- Použitý model |

Pokud se zajímáte o technické termíny:

- **Token** znamená malý blok textu. Můžete si to představit jako část slova nebo krátké slovo.
- **TPS** znamená, kolik těchto bloků textu model zpracuje za sekundu.

<br/>

Můžete také sledovat náklady jednotlivých operací (pokud jsou k dispozici) a celkové náklady, a to povolením možnosti `Zobrazit informace o nákladech u akcí` v části [**Nastavení** > **Obecná nastavení**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>

## Překlad

Použijte **Překlad**, když chcete převést text z jednoho jazyka do druhého.

![Pracovní prostor Překlad](../images/screenshots/cs/translate.png)

<br/>

<a id="translate-text"></a>

### Překlad textu

1. Otevřete **Překlad**.
2. Vyberte jazyk ve **Z**.
3. Vyberte jazyk v **Na**.
4. Vyberte model na panelu nástrojů.
5. Zadejte nebo vložte text do pole **Vstup**.
6. Klikněte na **Překlad**.
7. Přečtěte si výsledek v **Výstupu**.
8. Použijte tlačítko pro kopírování, chcete-li výsledek zkopírovat.

<br/>

<a id="language-selection"></a>

### Výběr jazyka

- Možnost **Z** může být konkrétní jazyk nebo **Detekovat jazyk**.
- Možnost **Do** je cílový jazyk, do kterého chcete text přeložit.

Vámi vybrané **nejvyužívanější jazyky** se zobrazí v horní části seznamu. Tyto jazyky můžete nastavit v části [**Nastavení** > **Jazyky**](#languages).

<br/>

<a id="helpful-translation-settings"></a>

### Užitečná nastavení překladu

V části [**Nastavení** > **Obecná nastavení**](#general-settings) můžete změnit chování překladu:

- **Automatický překlad po vložení** spustí překlad ihned po vložení textu.
- **Automatické kopírování výsledku do schránky** automaticky zkopíruje výsledek po úspěšném překladu.
- **Překlad v reálném čase (během psaní)** provádí překlady, zatímco píšete.
- **Časový limit (ms)** určuje, jak dlouho aplikace čeká před spuštěním překladu v reálném čase.
- **Enter** určuje, co se stane po stisku klávesy `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>

## Přepsat

Použijte funkci **Přepsat**, pokud chcete vylepšit znění textu, aniž byste změnili jeho hlavní význam.

![Pracovní prostředí Přepsat](../images/screenshots/cs/rewrite.png)

Tato funkce je užitečná pro:

- opravu pravopisu a gramatiky (**Zkontrolovat pravopis a gramatiku**)
- zpřehlednění textu (**Zlepšit srozumitelnost**)
- vytvoření několika odlišných znění v jednom kroku (**Alternativní verze**)
- formálnější nebo neformálnější úpravu textu (**Formální** / **Neformální**)
- zkrácení nebo rozšíření textu (**Zkrátit** / **Rozšířit**)
- techničtější znění textu (**Zapracovat odborný styl**)

<br/>

> 💡 **TIP**<br/>
> Při použití režimu "**Zkontrolovat pravopis a gramatiku**" se v panelu s výstupem (vedle tlačítka **Kopírovat**) objeví přepínač **Zobrazit změny**.
> Zapnutím nebo vypnutím tohoto přepínače zobrazíte nebo skryjete konkrétní opravy provedené v textu.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformace

Použijte **Transformaci**, pokud chcete, aby se umělá inteligence řídila vlastní sadou pokynů.

![Pracovní prostor Transformace](../images/screenshots/cs/transform.png)

Jedná se o nejvíce flexibilní část aplikace. Můžete ji využít například k následujícím úkolům:

- shrnutí poznámek
- převedení hrubého textu na upravený e-mail
- extrakce klíčových bodů
- převod textu do konkrétního formátu
- jakékoli jiné vlastní úkony s vstupním textem

<br/>

<a id="run-an-existing-prompt"></a>

### Spuštění existujícího promptu

1. Otevřete **Transformace**.
2. Vyberte prompt ze seznamu promptů.
3. Pokud se objeví pole **Cílový** jazyk, vyberte jazyk, pokud jej chcete.
4. Napište nebo vložte text do pole **Vstup**.
5. Klikněte na **Transformovat**.
6. Výsledek si přečtěte v poli **Výstup**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Pokud ještě nemáte žádné prompty

Pokud je váš seznam promptů prázdný, klikněte v pracovním prostoru Transformace na **Načíst ukázkové prompty**. Stejné tlačítko je vždy k dispozici v části [**Nastavení** > **Prompty pro transformaci**](#transform-prompts) na řádku pro import/export. Obě možnosti přidají integrované ukázky, abyste mohli rychle začít.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Ukázkové prompty jsou k dispozici pouze v angličtině. Po jejich načtení můžete upravit libovolný prompt a použít možnost **Přeložit prompt**, abyste jej převedli do svého jazyka.

<br/>

<a id="create-a-prompt-quickly"></a>

### Rychlé vytvoření výzvu

Nejrychlejší způsob, jak vytvořit výzvu, je:

1. Klikněte na **Nový výzvu**.
2. Klikněte na **Vygenerovat výzvu**.
3. Popište, co má výzva dělat.
4. Vyberte model.
5. Nechte aplikaci vytvořit koncept.
6. Zkontrolujte koncept a klikněte na **Uložit**.

![Vygenerovat výzvu](../images/screenshots/cs/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### Úprava výzvy (promptu)

Po vytvoření nebo úpravě výzvy se textový editor zobrazí vlevo a na pravé straně se zobrazí testovací oblast.

![Editor transformace výzvy](../images/screenshots/cs/transform-prompt-edit.png)

Hlavní položky jsou:

- **Název výzvy**: název zobrazený v seznamu výzev.
- **Instrukce k výzvě (volitelné)**: krátká nápověda zobrazená uživateli při spuštění výzvy.
- **Role modelu**: celková role přidělená umělé inteligenci, například „Jsi užitečný asistent.“
- **Instrukce modelu (jedna na řádek)**: konkrétní pravidla, která má umělá inteligence dodržovat.
- **Popis výstupu**: krátké slovo popisující výsledek, například „souhrn“ nebo „přepsání“.
- **Teplota (0,0 → 1,0)**: chování modelu; viz níže.
- **Vyžádat si cílový jazyk**: při spuštění výzvy se přidá výběr cílového jazyka.

Pokud je pro vás technický pojem **Teplota** nový, představte si to následovně:

- **Nižší** hodnota teploty poskytuje stálejší a předvídatelnější výsledky.

- **Vyšší** teplota poskytuje větší rozmanitost a kreativitu.

Můžete také použít:

- **`Vygenerovat prompt`** pro vytvoření nového návrhu z jednoduchého popisu
- **`Vylepšit prompt`** pro vylepšení stávajícího promptu
- **`Přeložit prompt`** pro překlad polí promptu

<br/>

> ⚠️ **UPOZORNĚNÍ**<br/>
> Klikněte na **`Uložit`**, než kliknete na **`Zpět ke spuštění`**. Pokud se vrátíte zpět bez uložení, vaše změny budou ztraceny.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Otestujte výzvu před jejím použitím

Panel pro testování napravo vám umožňuje vyzkoušet vaši výzvu na ukázkovém textu, než ji budete používat v běžné práci.

To se hodí v těchto případech:

- když vytváříte novou výzvu
- když porovnáváte dvě verze výzvy
- když chcete zkontrolovat tón, délku nebo formát výstupu

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Uložené výzvy můžete exportovat a importovat v části [**Nastavení** > **Transformační výzvy**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Nástrojová tabule

Pomocí **Nástrojové tabule** zjistíte, jak moc aplikaci používáte a kolik vás stojí (pro placené modely).

![Přehled nástrojové tabule](../images/screenshots/cs/dashboard-summary.png)


<br/>

> ℹ️ **POZNÁMKA**<br/>
> Pokud používáte pouze **bezplatné** modely, částky za **náklady** mohou být nulové a shrnutí zaměřená na náklady se mohou jevit jako prázdná. Na kartě **Přehled**, **Využití v čase** a **Využití podle modelu** jsou však stále zobrazeny **počty volání** (překlad, přepsání a úprava), pokud máte během vybraného období nějakou aktivitu.

<br/>

<a id="filter-the-data"></a>

### Filtrování dat

Pomocí tlačítek filtru v horní části změňte časové období.

![Filtry řídicího panelu](../images/screenshots/cs/dashboard-filter.png)

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Filtr **Uživatel** je ve webové verzi viditelný pouze pro administrátory. Běžní uživatelé tento filtr neuvidí a ve stolní aplikaci není k dispozici.

<br/>

<a id="dashboard-tabs"></a>

### Karty nástěnky

- **Přehled** poskytuje ucelený pohled na využití a náklady. Zahrnuje část **Využití v čase** (nastupující kumulativní **počty volání** podle dnů pro překlad, přepisování a transformaci) a část **Využití podle modelu** (celkový počet **volání na model**, včetně transformace).
- **Podle využití** rozčleňuje aktivitu na základě jazyka překladu, režimu přepisování a vstupního textu pro transformaci.
- **Podle modelu** ukazuje, které modely jste použili a kolik vás stály.
- **Podle dne** zobrazuje denní součty.
- **Všechna volání** zobrazuje kompletní historii volání a umožňuje ji exportovat.

<br/>

<a id="export-data"></a>

### Export dat

Dozorčí tabulky umožňují exportovat data v následujících formátech:

- **JSON**
- **CSV**
- **XLSX**

To je užitečné, pokud chcete prohlížet aktivitu mimo aplikaci nebo sdílet sestavu.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Smazání uložených záznamů pro model

V části **Podle modelu** nebo **Všechny volání** můžete odstranit uložené záznamy pro model kliknutím na ikonu „koše“.

> ⚠️ **UPOZORNĚNÍ**<br/>
> Smazání uložených záznamů nelze vrátit zpět. Použijte tuto funkci pouze tehdy, pokud jste si jisti, že historii již nepotřebujete.

Chcete-li smazat všechna data nebo odebrat záznamy podle jejich stáří, přejděte do části [**Nastavení** > **Sledování nákladů**](#cost-tracking). Tam naleznete možnosti smazat všechna uložená data nebo pouze ta starší než určité datum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Historie

Kliknutím na **Historie** zobrazíte záznam vašich akcí v rámci **Transrewrt**, včetně vstupu a výstupu každé operace.

![Stránka Historie](../images/screenshots/cs/history.png)

<br/>

<a id="filter-the-history"></a>

### Filtrování dat

**Historie** používá stejné filtry jako stránka **Dashboard**. Pomocí nich vyberte časové období.

![Filtry Dashboardu](../images/screenshots/cs/dashboard-filter.png)

<br/>

> ℹ️ **Poznámka**<br/>
> Filtr **Uživatel** je webovou verzí viditelný pouze pro administrátory. Běžní uživatelé tento filtr neuvidí a v desktopové aplikaci není dostupný.

<br/>

<a id="export-history-data"></a>

###  Export historických dat

Stránka s historií umožňuje exportovat filtrovaná data v následujících formátech:

- **JSON**
- **CSV**
- **XLSX**

To je užitečné, pokud chcete přezkoumat aktivitu mimo aplikaci nebo sdílet sestavu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>

## Nastavení

Otevřete **Nastavení** na bočním panelu, chcete-li upravit chování aplikace.

Dostupné karty závisí na platformě a vaší roli:

| Karta | Desktop | Web (správce) | Web (běžný uživatel) |
|---|:---:|:---:|:---:|
| Obecné nastavení | ano | ano | ano |
| Modely | ano | ano | ano |
| Jazyky | ano | ano | ano |
| Sledování nákladů | ano | ano | — |
| Transformační výzvy | ano | ano | ano |
| Uživatelé | — | ano | — |
| Konfigurace API | ano | ano | — |
| O aplikaci | ano | ano | ano |

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Ve webové verzi má každý uživatel své vlastní nastavení. Nastavení, jako jsou vybrané modely, jazyky, obecné možnosti a transformační výzvy, jsou uložena pro každého uživatele zvlášť. Změny, které provedete, nemají vliv na ostatní uživatele.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>

### Obecné nastavení

Pomocí **Obecného nastavení** můžete ovlivnit chování při psaní, zda jsou ukládány detaily spuštění do **Historie** a vzhled aplikace.

**Chování**

- **Chování klávesy ENTER** určuje, zda `Enter` spustí úlohu nebo vloží nový řádek.
- **Automatický překlad při vkládání** spustí překlad ihned po vložení textu.
- **Automatické kopírování výsledku do schránky** automaticky kopíruje úspěšné výsledky.
- **Překlad v reálném čase (během psaní)** překládá text během psaní.
- **Časový limit (ms)** nastavuje prodlevu pro překlad v reálném čase.

**Historie**

- **Uchovávat historii spuštění** určuje, zda každý překlad, přepsání a transformace ukládá **vstupní a výstupní text** pro zobrazení v postranním panelu [**Historie**](#history). Vypnutí této funkce vyžaduje potvrzení; pokud potvrdíte, ukládaný text historie bude odstraněn z databáze.

- **Smazání dat historie** vám umožňuje odstranit uložený text podle stáří (např. starší než několik měsíců nebo **veškerá data (vymazat)**) pomocí tlačítka **Smazat data**. Tato funkce ovlivňuje pouze uložený text provedení v sekci **Historie**; **neovlivňuje** celkové náklady a údaje o využití. Chcete-li odstranit nebo oříznout data o **nákladech**, použijte část [**Nastavení** > **Sledování nákladů**](#cost-tracking).

**Vzhled**

- **Zobrazit informace o nákladech u akcí** řídí zobrazení nákladů za operaci (pokud jsou k dispozici) a celkových nákladů v panelech pro výstupy funkcí Přeložit, Přepsat a Transformovat.
- **Počet desetinných míst pro náklady** změní zobrazení desetinných částí nákladů.
- **Pouze pro web:** **zobrazit okraj kolem aplikace** přidává kolem rozhraní dodatečný prostor.
- **Rodina písma** změní písmo v textových panelech.
- **Velikost** změní velikost písma.

**Zálohování konfigurace**

- **Zahrnout data o využití do zálohy** — pokud je tato možnost povolena, ZIP soubor obsahuje také historii provedení a data volání API.

- **Zálohování konfigurace** — vytvoří jediný soubor ZIP (`transrewrt-config-backup-RRRR-MM-DD_HHMMSS.zip`, ve výchozím nastavení v čase UTC) obsahující `config.json`, `state.json`, volitelný šifrovací klíč, uživatele, nastavení, vlastní výzvy a data o používání, pokud jste je povolili. Po úspěšném zálohování se zobrazí potvrzení s názvem uloženého souboru.
- **Obnovení ze zálohy** — nejprve se otevře **potvrzovací dialog**. Vyberte soubor zálohy ZIP uvnitř dialogu (**Procházet** / výběr souboru nebo přetažení, pokud je podporováno) a poté zkontrolujte možnosti:
  - **Obnovit data o používání** — importuje data/historii z ZIPu, bylo-li zálohování provedeno včetně používání; nezaškrtněte, pokud chcete jen nastavení a výzvy.
  - **Vymazat stará data o používání před obnovením** — odebere stávající data/historii v tomto instalovaném systému před aplikováním zálohy (volitelné; použijte, pokud chcete čisté přepsání).

Zálohy vytvořené buď ve webové verzi, nebo na desktopu, lze obnovit i v druhé verzi. Při obnově desktopové zálohy ve webové verzi budou data obnovena u uživatele správce.


<br/>

<a id="models"></a>

### Modely

Pomocí **Nastavení** > **Modely** vyberte, které modely se zobrazí na panelu nástrojů.

![Karta modely v nastavení](../images/screenshots/cs/settings-models.png)

Stránka obsahuje dva seznamy:

- **Dostupné modely** na levé straně
- **Vybrané modely** na pravé straně

Užitečné ovládací prvky zahrnují:

- **Hledat modely...** pro vyhledání modelu podle názvu
- **Čipové filtry poskytovatelů** pro zúžení seznamu na jeden engine (OpenRouter, OpenAI, Ollama, …)
- **Pouze zdarma** pro zobrazení jen bezplatných modelů
- **Obnovit** pro opětovné načtení seznamu
- **Rozbalit vše** a **Sbalit vše** při řazení podle poskytovatele

Identifikátory modelů obsahují předponu poskytovatele (například `openrouter/…` vs `openai/…`). Označení, jako například **OpenAI (OpenRouter)** nebo **OpenAI (přímo)**, ukazují, jakým způsobem je provoz směrován.

> ℹ️ **POZNÁMKA**<br/>

> **OpenRouter Body Builder** (`openrouter/bodybuilder`) je směrovačový model, ne obecný chatovací model: jeho odpověď je ve formátu JSON, který popisuje požadovaná těla požadavků OpenRouter API (například pole `requests` obsahující `model` a `messages`). Pokud jej použijete pro akce **Překlad**, **Přepsání** nebo **Transformaci**, bude v panelu výstupu zobrazen tento JSON namísto hotového textu. Pro tyto úkoly zvolte standardní textový model. Viz [stránka modelu Body Builder](https://openrouter.ai/openrouter/bodybuilder) na OpenRouter.

Akce:

 - Pokud chcete přidat model, klikněte na **Přidat** nebo kamkoliv do příslušného řádku.

 - Pokud chcete odebrat model, klikněte na **X** vedle něj v části **Vybrané modely** nebo **Vybraný** v daném řádku dostupných modelů.

 - Pokud chcete vymazat seznam, klikněte na **Zrušit výběr všech**. Povinný bezplatný model v seznamu zůstane.

<br/>

> ℹ️ **POZNÁMKA**<br/>

> Pokud nechcete okamžitě přidat kredity do OpenRouter, začněte tím, že povolíte **Pouze zdarma** a vyberete modely zdarma (není vyžadována platební karta). Modely můžete spouštět také lokálně pomocí Ollama bez jakéhokoli API klíče.

<br/>

<a id="languages"></a>

### Jazyky

Pomocí **Nastavení** > **Jazyky** můžete upravovat seznamy jazyků používané v aplikaci.

- **Nejvyšší jazyky** jsou připíchnuty v seznamu jazyků v horní části v **Překladu** a **Transformaci**.
- **Vlastní jazyk** umožňuje přidat jazyk, který není ve výchozím seznamu.

Pokud přidáte vlastní jazyk, objeví se ve výběru jazyků spolu s integrovanými možnostmi.

<br/>

<a id="cost-tracking"></a>

### Sledování nákladů

Použijte **Nastavení** > **Sledování nákladů** pro správu informací o nákladech.

- **Celkové náklady** zobrazují běžný součet.
- **Kopírovat hodnotu** zkopíruje celkovou částku do schránky.
- **Vynulovat náklady** nastaví uložený součet na nulu.
- **Synchronizace s využitím klíče API** nastaví celkovou částku podle údajů o využití hlášených vaším účtem OpenRouter (pouze OpenRouter).
- **Využití klíče API** zobrazí podrobnosti o využití OpenRouter, pokud jsou k dispozici.
- **Smazat data o nákladech** odstraní všechna data, nebo pouze záznamy starší než vybrané datum.


**Sledování nákladů:** Když používáte modely OpenRouter, aplikace zobrazuje skutečné využití a výdaje na základě informací o nákladech od OpenRouter. U všech ostatních poskytovatelů aplikace odhaduje náklady pomocí cen zveřejněných společností OpenRouter; pokud cena není k dispozici, odhad může být nula.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> **Všechny částky jsou hrubé odhady určené pouze pro vaši informaci, nejedná se o oficiální fakturační údaje.**


<br/>

> ⚠️ **UPOZORNĚNÍ**<br/>

> Odstranění dat nelze vrátit zpět. Před odstraněním si prosím zazálohujte svá data nebo je exportujte přes [**Historii**](#history) 
> nebo [**Nástěnku** > **Všechny volání**](#dashboard-tabs), jinak budou trvale ztracena. 
> Bude také trvale odstraněna veškerá historie vstupů a výstupů spojená s jednotlivými voláními API.


<br/>

<a id="transform-prompts"></a>

### Úprava výzev

Pomocí **Nastavení** > **Úprava výzev** můžete hromadně spravovat výzvy.

Můžete:

- prohlížet uložené výzvy
- odstraňovat výzvy
- importovat výzvy ze souboru
- exportovat výzvy pro zálohování nebo sdílení
- načíst ukázkové výzvy do seznamu výzev

<br/>

<a id="users"></a>

### Uživatelé

Pomocí **uživatelů** spravujte uživatelské účty ve webové verzi. Můžete přidávat uživatele, aktualizovat jejich údaje, resetovat hesla a odstraňovat účty.

<br/>

<a id="api-config"></a>

### Konfigurace API

Podporovaní poskytovatelé jsou: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras a **Ollama** (lokální modely přes základní URL). Je třeba nakonfigurovat pouze ty poskytovatele, které používáte.

**Webová aplikace: pouze pro správce**

Klíče API se nastavují prostřednictvím systémových nebo Dockerových proměnných prostředí – nezadávají se prostřednictvím webového rozhraní. Tato stránka ukazuje, u kterých poskytovatelů je klíč nakonfigurován, a umožňuje jejich otestování kliknutím na tlačítko **`Test`**.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Chcete-li změnit klíč API, aktualizujte příslušnou proměnnou prostředí ve své systémové nebo Dockerové konfiguraci a restartujte server nebo kontejner.

> ℹ️ **POZNÁMKA**<br/>

> **Zálohy nastavení** (viz [**Obecná nastavení** → Záloha konfigurace](#general-settings)) mohou obsahovat do ZIP souboru ve formátu `config.json` **dosazené** klíče poskytovatelů. Při obnovování takového ZIPu se tyto klíče **nekopírují** zpět do konfiguračního souboru uloženého na serveru – klíče aktivně používané systémem stále pocházejí z prostředí a stávajícího stavu souboru, jak je popsáno výše.

<br/>

**Desktopová aplikace**

Použijte **nastavení API** k uložení API klíčů pro každého poskytovatele, kterého používáte. U Ollama zadejte **základní URL** namísto API klíče.

<br/>

> 💡 **Tip** <br/>
> Pokud nechcete používat API klíč ani platit za využití služby, můžete si [stáhnout Ollama](https://ollama.com) a modely (např. `translategemma:4b`) zdarma spouštět lokálně na svém počítači. Alternativně můžete vytvořit bezplatný účet na OpenRouter (bez nutnosti zadávat údaje o platební kartě) a využívat jejich bezplatné modely, nebo si získat bezplatné API klíče od Cerebras, Google, Groq nebo Mistral AI.

<br/>

- Přidejte pouze ty poskytovatele, které potřebujete. V části **Nastavení** > **Modely** každé ID modelu začíná názvem poskytovatele (např. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Chcete-li přidat klíč API, zadejte hodnotu do textového pole a klikněte na **`Uložit`**. Chcete-li nahradit stávající klíč, klikněte na **`Upravit`**. Chcete-li ověřit, že klíč funguje, klikněte na **`Otestovat`**. U základní URL Ollamy vždy klikněte na **`Otestovat`**, abyste zkontrolovali připojení.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Aktuální hodnotu klíče API nelze zobrazit. Můžete ji pouze nahradit pomocí tlačítka **`Upravit`**.
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

Pokud něco nefunguje tak, jak by mělo, nejprve zkontrolujte následující body.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>

### Aplikace nebude překládat, přepisovat ani upravovat text

Zkontrolujte následující:

- zda jste v panelu nástrojů vybrali model
- zda je alespoň jeden model uveden v části [**Nastavení** > **Modely**](#models)
- zda je správně nastavené vaše API

Pokud používáte desktopovou aplikaci:

1. Otevřete [**Nastavení** > **Konfigurace API**](#api-config).
2. Zkontrolujte, zda je uložen alespoň jeden klíč API.
3. Klepněte na **Test**, čímž ověříte, zda klíč funguje.

<br/>

<a id="the-model-list-is-empty"></a>

### Seznam modelů je prázdný

Otevřete [**Nastavení** > **Modely**](#models) a klikněte na **Obnovit**.

V případě potřeby:

- vyhledejte model
- zapněte možnost **Pouze zdarma**
- přidejte jeden nebo více modelů do části **Vybrané modely**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>

### Výsledek je příliš pomalý nebo příliš nákladný

Vyzkoušejte jednu nebo více z následujících možností:

- vyberte jiný model
- použijte kratší vstup
- vypněte možnost **Překlad v reálném čase (během psaní)** v části [**Nastavení** > **Obecná nastavení**](#general-settings)
- používejte zdarma dostupné modely pro jednoduché úkoly (viz [Modely](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### Rozhraní je v nesprávném jazyce

Klikněte na ikonu světa na [panelu nástrojů](#toolbar) a vyberte si preferovaný **jazyk rozhraní**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>

### Text je příliš malý nebo špatně čitelný

Otevřete [**Nastavení** > **Obecná nastavení**](#general-settings) a změňte:

- **Rodinu písem**
- **Velikost**

<br/>

<a id="dashboard-charts-are-empty"></a>

### Grafy na nástěnce jsou prázdné

To je normální, pokud:

- používáte pouze **bezplatné modely** a sledujete údaje o **nákladech** (mohou být nulové); grafy počtu volání v záložce **Přehled** stále potřebují data z vybraného období
- vybraný **časový filtr** nezahrnuje období, kdy byla volání provedena – zkuste **Vše** pro kontrolu

Pokud jsou grafy stále prázdné po výběru možnosti **Vše**, ověřte, zda se volání zobrazují v části [**Historie**](#history) nebo na záložce **Všechna volání**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Náklady zobrazují „nedostupné“ nebo se jeví jako nesprávné

Když používáte modely prostřednictvím **OpenRouteru**, aplikace zobrazuje skutečné náklady nahlášené OpenRouterem.

U **ostatních poskytovatelů** (přímé OpenAI, přímé Anthropic atd.) jsou náklady odhadovány na základě cenových údajů zveřejněných OpenRouterem. Pokud pro daný model neexistuje odpovídající cena, náklady budou uvedeny jako **nedostupné** a nebudou přičteny k běžícímu celkovému součtu.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### Celkové náklady neodpovídají účtu poskytovatele

Všechny částky uvedené v aplikaci jsou **odhady pouze pro informační účely**, nikoli oficiální fakturační údaje.

Chcete-li, aby celková částka lépe odpovídala vašim skutečným výdajům na OpenRouter, otevřete [**Nastavení** > **Sledování nákladů**](#cost-tracking) a klikněte na **Synchronizovat s využitím API klíče**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### Stránka Historie chybí na postranním panelu

Možnost **Uchovávat historii provádění** může být vypnutá. Otevřete [**Nastavení** > **Obecná nastavení**](#general-settings) a tuto možnost povolte. Upozorňujeme, že zapnutí této funkce neobnoví dříve smazaná data historie.

<br/>

<a id="web-app-session-expired"></a>

### Webová aplikace: nečekaně přesměrováno na přihlašovací stránku

Vaše relace mohla vypršet. Přihlaste se znovu. Pokud se to děje často, zkontrolujte konfiguraci serveru pro nastavení délky životnosti relace.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Webová správa: zapomenuté nebo ztracené heslo

Toto platí pro **webovou aplikaci na vlastním serveru** (Docker), ne pro desktopovou aplikaci (Electron).

- Pokud se může stále přihlásit jiný administrátor, může otevřít [**Nastavení** > **Uživatelé**](#users), vybrat účet a nastavit tam **nové heslo**.
- Pokud jste **zamčeni ven**, ale máte **přístup k shellu** stroje nebo kontejneru, obnovte heslo pomocí nástroje, který je součástí image (nahraďte `transrewrt`, pokud jste změnili výchozí název, a uveďte heslo v uvozovkách, pokud obsahuje mezery nebo speciální znaky):

```bash
docker exec transrewrt reset-web-password '<uživatelské_jméno>' '<nové_heslo>'
```

Výchozí uživatelské jméno administrátora je `admin`, pokud jste nevytvořili žádné jiné účty. Pokud zadáte pouze jeden argument, bude považován za nové heslo uživatele `admin`.

Pokud spouštíte aplikaci z **lokálního zdrojového kódu** místo Dockeru, použijte:

```bash
pnpm run reset-web-password -- <uživatelské_jméno> <nové_heslo>

Skript aktualizuje záznam uživatele v databázi SQLite (a v případě potřeby může vytvořit uživatele `admin`). Po obnovení se přihlaste pomocí nového hesla.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### Na přehledové obrazovce nejsou data pro ostatní uživatele (web)

Pouze **administrátoři** mohou prostřednictvím filtru **Uživatel** zobrazit data všech uživatelů. Běžní uživatelé z důvodu návrhu vidí pouze svou vlastní aktivitu.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### Změnil jsem výzvu a změny jsem ztratil

Při úpravě výzvy vždy klikněte na **Uložit**, než kliknete na **Zpět na spuštění**.

<br/><br/>

<a id="quick-tips"></a>

## Rychlé tipy

- Začněte s funkcí [**Překlad**](#translate), abyste ověřili, že je vše správně nastaveno, než přejdete k [**Přepisu**](#rewrite) nebo [**Transformaci**](#transform).
- Použijte [**Přepis**](#rewrite) pro běžné vylepšení formulací.
- Použijte [**Transformaci**](#transform) tehdy, když potřebujete opakovatelný pracovní postup pro konkrétní úlohu.
- Použijte [**Nástěnku**](#dashboard), pokud chcete sledovat využití a náklady.
- Použijte [**Historii**](#history), abyste si prohlédli předchozí operace i jejich úplný vstupní a výstupní text.
- Pravidelně exportujte vstupní texty (prompty), pokud budujete knihovnu promptů, kterou chcete uchovávat v bezpečí (viz [Transformační prompty](#transform-prompts)) nebo ji chcete sdílet s ostatními.

<br/><br/>

<a id="disclaimer"></a>

## Zřeknutí se odpovědnosti

Názvy produktů a ikony patří příslušným vlastníkům a jsou použity výhradně za účelem identifikace. Tento software nemá žádnou spojitost s uvedenými značkami a není jimi nijak schválen.

<br/><br/>

<a id="license"></a>

## Licence

Autorská práva © 2026 Waldemar Scudeller Jr.

[Licence Apache 2.0](LICENSE)