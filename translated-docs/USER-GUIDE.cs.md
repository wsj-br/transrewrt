---
translation_last_updated: '2026-03-30T00:46:01.255Z'
source_file_mtime: '2026-03-30T00:37:44.601Z'
source_file_hash: e1b91eca0124d467
translation_language: cs
source_file_path: USER-GUIDE.md
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Uživatelská příručka

<br/>

<a id="introduction"></a>
## Úvod

Transrewrt vám pomáhá pracovat s textem třemi hlavními způsoby:

- **Přeložit** – převést text z jednoho jazyka do druhého.
- **Přepis** – přeformulovat text v jiném stylu, například jasnějším, kratším nebo formálnějším.
- **Transformace** – zpracovat text pomocí vlastních pokynů pro umělou inteligenci, tzv. promptů.

<br/>

Tato příručka vysvětluje, jak aplikaci používat po její instalaci a spuštění. Kroky k instalaci naleznete v hlavním souboru **[README](README.cs.md)**.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Transrewrt je dostupný jako desktopová aplikace pro Windows a Linux a také jako samostatně hostovaná webová aplikace. Tato příručka se zaměřuje na běžné používání aplikace. Pokud se některá informace týká pouze jedné verze, je to jasně uvedeno.

<small>**Přečtěte si v jiných jazycích:** </small>
<small id="lang-list">[English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Poznámka k překladům uživatelského rozhraní a dokumentace:** Všechny jazyky rozhraní kromě původní angličtiny (UK)
> byly přeloženy pomocí modelů AI; formulace mohou být nepřesné nebo obsahovat chyby.

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
  - [Užitečná nastavení překladu](#helpful-translation-settings)
- [Přepis](#rewrite)
- [Transformace](#transform)
  - [Spustit existující prompt](#run-an-existing-prompt)
  - [Pokud ještě nemáte žádné prompty](#if-you-have-no-prompts-yet)
  - [Rychle vytvořit prompt](#create-a-prompt-quickly)
  - [Upravit prompt](#edit-a-prompt)
  - [Otestovat prompt před použitím](#test-a-prompt-before-using-it)
- [Dashboard](#dashboard)
  - [Filtrování dat](#filter-the-data)
  - [Záložky dashboardu](#dashboard-tabs)
  - [Export dat](#export-data)
  - [Smazat uložené záznamy pro model](#delete-stored-records-for-a-model)
- [Historie](#history)
  - [Filtrování dat](#filter-the-data-1)
  - [Exportovat data historie](#export-history-data)
- [Nastavení](#settings)
  - [Obecné nastavení](#general-settings)
  - [Modely](#models)
  - [Jazyky](#languages)
  - [Sledování nákladů](#cost-tracking)
  - [Transformační výzvy](#transform-prompts)
  - [Uživatelé](#users)
  - [Konfigurace API](#api-config)
  - [O aplikaci](#about)
- [Běžné problémy](#common-issues)
  - [Aplikace nepřekládá, nepřepisuje ani netransformuje text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Seznam modelů je prázdný](#the-model-list-is-empty)
  - [Výsledek je příliš pomalý nebo příliš drahý](#the-result-is-too-slow-or-too-expensive)
  - [Rozhraní je v nesprávném jazyce](#the-interface-is-in-the-wrong-language)
  - [Text je příliš malý nebo špatně čitelný](#the-text-is-too-small-or-hard-to-read)
  - [Grafy na dashboardu jsou prázdné](#dashboard-charts-are-empty)
  - [Cena zobrazuje „nedostupné“ nebo se zdá být chybná](#cost-shows-not-available-or-seems-wrong)
  - [Celková cena neodpovídá účtu poskytovatele](#total-cost-does-not-match-my-provider-bill)
  - [Stránka Historie chybí v bočním panelu](#the-history-page-is-missing-from-the-sidebar)
  - [Webová aplikace: neočekávaně přesměrováno na přihlašovací stránku](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Webový správce: zapomenuté nebo ztracené heslo](#web-admin-forgot-or-lost-a-password)
  - [Dashboard nezobrazuje data pro ostatní uživatele (webová verze)](#dashboard-shows-no-data-for-other-users-web)
  - [Změnil jsem prompt a ztratil úpravy](#i-changed-a-prompt-and-lost-the-edits)
- [Rychlé tipy](#quick-tips)
- [Zřeknutí se zodpovědnosti](#disclaimer)
- [Licence](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Než začnete

Chcete-li používat Transrewrt, potřebujete přístup alespoň k jednomu poskytovateli AI. Podporovaní poskytovatelé jsou: [OpenRouter](https://openrouter.ai) (který agreguje mnoho modelů), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras a [Ollama](https://ollama.com) pro lokální modely.

Nemusíte vybírat placený model, abyste mohli začít. Jakmile přidáte svůj klíč OpenRouter API, aplikace automaticky aktivuje vestavěnou **zdarma** možnost OpenRouter. To vám umožní okamžitě začít s překladem, přepisováním a transformací textu. Alternativně můžete získat bezplatný klíč API také od Cerebras, Google, Groq nebo Mistral AI.

Jednoduše řečeno:

- **Model** je AI modul, který provádí práci. Modely jsou uvedeny s **předponou poskytovatele** (například `openrouter/…`, `openai/…`, `ollama/…`).
- **Klíč API** (nebo u Ollama **základní URL**) je způsob, jakým aplikace komunikuje s daným poskytovatelem.

Pokud používáte **desktopovou aplikaci**, přidejte klíče v části [**Nastavení** > **Konfigurace API**](#api-config) pro každého poskytovatele, kterého používáte. Pokud používáte pouze OpenRouter, viz níže [Jak získat klíč API](#how-to-get-an-api-key-desktop-app). Pokud nechcete používat klíč API, můžete nainstalovat Ollama (z [ollama.com](https://ollama.com)) a používat místo toho lokální modely, například `translategemma:4b`.

Pokud používáte **webovou verzi**, poskytovatele nakonfiguruje vlastník serveru pomocí proměnných prostředí, takže nemůžete klíče API zadat přímo v aplikaci.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Jak získat bezplatný klíč OpenRouter API (desktopová aplikace)

Pokud používáte desktopovou aplikaci, postupujte podle následujících kroků:

1. Otevřete [OpenRouter](https://openrouter.ai) ve webovém prohlížeči.
2. Vytvořte si účet nebo se přihlaste.
3. Otevřete stránku [Klíče](https://openrouter.ai/keys).
4. Klikněte na tlačítko pro vytvoření nového klíče API.
5. Zadejte klíči název, abyste ho mohli později rozpoznat.
6. Zkopírujte nový klíč API.
7. Vraťte se do Transrewrt a otevřete **Nastavení** > **Konfigurace API**.
8. Vložte klíč do pole **OpenRouter klíč API** (v části **Nastavení** > **Konfigurace API**).
9. Klikněte na **Testovat klíč OpenRouter**, abyste ověřili, že funguje.

<br/><br/>

<a id="getting-started"></a>
## Začínáme

Pokud používáte Transrewrt poprvé, postupujte v tomto pořadí:

1. Otevřete aplikaci.
2. V případě potřeby vyberte svůj **jazyk rozhraní** pomocí ikony s globem.
3. Pokud používáte **desktopovou aplikaci**, otevřete [**Nastavení** > **Konfigurace API**](#api-config), přidejte klíč API alespoň pro jednoho poskytovatele (například OpenRouter) a klikněte na **Test**, abyste ověřili, že funguje.
4. Otevřete [**Nastavení** > **Modely**](#models) a přidejte jeden nebo více modelů do **Vybraných modelů**.
5. Otevřete [**Nastavení** > **Jazyky**](#languages) a vyberte své **Nejčastější jazyky**, pokud chcete, aby se vaše nejčastěji používané jazyky zobrazovaly jako první.
6. Přejděte do **Překlad** a spusťte jednoduchý překlad, abyste ověřili, že vše funguje.
7. Jakmile to bude fungovat, zkuste **Přepis** a poté **Transformaci**.

Toto pořadí je důležité. Zabraňuje tak nejčastějšímu problému při prvním použití: spuštění úkolu před tím, než má aplikace funkční připojení API nebo vybraný model.

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

Boční panel použijte k pohybu v aplikaci. Boční panel můžete skrýt, abyste získali více místa – klikněte na ikonu vedle loga aplikace.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/cs/sidebar.png" alt="Boční panel aplikace" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Překlad</strong> otevře pracovní prostor pro překlad.</li><br/>
        <li><strong>Přepis</strong> otevře pracovní prostor pro přepisování.</li><br/>
        <li><strong>Transformace</strong> otevře pracovní prostor pro vlastní prompt.</li><br/>
        <li><strong>Dashboard</strong> zobrazuje informace o využití a nákladech.</li><br/>
        <li><strong>Nastavení</strong> otevře panel nastavení.</li><br/>
        <li><strong>Historie</strong> zobrazuje historii použití včetně vstupního a výstupního textu.</li><br/>
        <li><strong>Uživatel</strong> zobrazuje uživatelské jméno přihlášeného uživatele (pouze webová verze).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Panel nástrojů

Panel nástrojů se mírně liší v závislosti na tom, kde se v aplikaci nacházíte.

- Vlevo zobrazuje název aktuální stránky.
- Vpravo zobrazuje **výběr modelu** a ovládání **Jazyka rozhraní**.

**Výběr modelu** vám umožňuje zvolit, který AI model použijete pro aktuální úkol.

![Model selector](../images/screenshots/cs/model-selector.png)

Některé modely zdarma nemusí být vždy dostupné – někdy jsou offline nebo mají omezení využití. Pokud k tomu dojde, aplikace tento model automaticky odstraní ze seznamu dostupných. Chcete-li ovlivnit, které modely se zobrazují, přejděte do [**Nastavení** > **Modely**](#models) a upravte svůj seznam modelů.
Modely můžete také otevřít přímo kliknutím na ikonu poskytovatele vlevo od názvu modelu na panelu nástrojů.

<br/>

**Ikona světa + kód jazyka** změní jazyk uživatelského rozhraní aplikace, například nabídek a tlačítek. **Nezmění** však jazyky používané v nástroji **Přeložit**.

![Interface language selector](../images/screenshots/cs/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panely pro vstup a výstup

Většina pracovních prostorů používá levý panel **Vstup** a pravý panel **Výstup**.

Každý panel také zobrazuje:

| **Vstup**                                                          | **Výstup**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Počet znaků <br/>- Počet slov <br/>- Počet odstavců   <br/> | - Doba trvání úkolu<br/>- **TPS** (tokeny za sekundu)<br/>- Počty znaků, slov a odstavců<br/>- Použitý model |

Pokud se zajímáte o technické termíny:

- **Token** znamená malý úsek textu. Můžete si jej představit jako část slova nebo krátké slovo.
- **TPS** znamená, kolik těchto textových úseků model zpracoval za sekundu.

<br/>

Můžete také sledovat náklady každé operace (pokud jsou k dispozici) a celkové náklady, a to povolením možnosti `Zobrazit informace o nákladech u akcí` v části [**Nastavení** > **Obecné nastavení**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Přeložit

Použijte **Přeložit**, když chcete převést text z jednoho jazyka do druhého.

![Translate workspace](../images/screenshots/cs/translate.png)

<br/>

<a id="translate-text"></a>
### Překlad textu

1. Otevřete **Přeložit**.
2. Vyberte jazyk ve **Z**.
3. Vyberte jazyk v **Do**.
4. Vyberte model na panelu nástrojů.
5. Napište nebo vložte text do **Vstupu**.
6. Klikněte na **Přeložit**.
7. Přečtěte si výsledek ve **Výstupu**.
8. Použijte tlačítko kopírování, pokud chcete výsledek zkopírovat.

<br/>

<a id="language-selection"></a>
### Výběr jazyka

- **Z** může být konkrétní jazyk nebo **Detekovat jazyk**.
- **Do** je jazyk, do kterého chcete výsledek přeložit.

Vaše vybrané **Nejčastější jazyky** se zobrazí v horní části seznamu. Tyto jazyky můžete nastavit v [**Nastavení** > **Jazyky**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Užitečná nastavení překladu

V části [**Nastavení** > **Obecné nastavení**](#general-settings) můžete změnit chování překladu:

- **Automaticky překládat při vložení** spustí překlad ihned po vložení textu.
- **Automaticky zkopírovat výsledek do schránky** zkopíruje výsledek automaticky po úspěšném dokončení.
- **Překlad v reálném čase (během psaní)** spouští překlady během psaní.
- **Časový limit (ms)** určuje, jak dlouho aplikace čeká před spuštěním překladu v reálném čase.
- **Enter** určuje, co se stane po stisknutí klávesy `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Přepis

Použijte **Přepis**, pokud chcete zlepšit formulaci, aniž byste změnili hlavní význam.

![Rewrite workspace](../images/screenshots/cs/rewrite.png)

To je užitečné pro:

- opravu pravopisu a gramatiky (**Zkontrolovat pravopis a gramatiku**)
- zlepšení srozumitelnosti (**Zlepšit srozumitelnost**)
- několik různých reformulací najednou (**Alternativní verze**)
- formalizaci nebo neformální styl textu (**Formální** / **Neformální**)
- zkrácení nebo rozšíření textu (**Zkrátit** / **Rozšířit**)
- udělání textu techničtějšího (**Udělat technický**)

<br/>

> 💡 **TIP**<br/>
> Když použijete režim „**Zkontrolovat pravopis a gramatiku**“, v panelu výstupu (vedle **Kopírovat**) se objeví přepínač **Zobrazit změny**.
> Zapněte nebo vypněte jej, abyste zobrazili nebo skryli konkrétní opravy provedené v textu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Transformace

Použijte **Transformaci**, pokud chcete, aby AI následovala vlastní sadu instrukcí.

![Transform workspace](../images/screenshots/cs/transform.png)

Toto je nejpružnější část aplikace. Můžete ji použít například pro:

- shrnutí poznámek
- převod hrubého textu na dokonalý e-mail
- extrakci klíčových bodů
- převod textu do konkrétního formátu
- jakoukoli jinou vlastní činnost s vstupním textem

<br/>

<a id="run-an-existing-prompt"></a>
### Spustit existující prompt

1. Otevřete **Transformaci**.
2. Vyberte prompt ze seznamu prompty.
3. Pokud se objeví pole **Cíl**, vyberte jazyk, pokud jej chcete.
4. Napište nebo vložte text do pole **Vstup**.
5. Klikněte na **Transformovat**.
6. Přečtěte si výsledek v části **Výstup**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Pokud ještě žádné prompty nemáte

Pokud je váš seznam prompty prázdný, klikněte na **Načíst ukázkové prompty** v pracovní ploše Transformace. Stejné tlačítko je vždy k dispozici v části [**Nastavení** > **Transformační výzvy**](#transform-prompts) na řádku pro export/import. Oba postupy přidají vestavěné ukázky, abyste mohli rychle začít.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Ukázkové prompty jsou poskytovány v angličtině. Po jejich načtení můžete prompt upravit a použít **Přeložit výzvu**, abyste jej přeložili do svého jazyka.

<br/>

<a id="create-a-prompt-quickly"></a>
### Rychle vytvořit prompt

Nejrychlejší způsob, jak vytvořit prompt, je:

1. Klikněte na **Nový prompt**.
2. Klikněte na **Vygenerovat výzvu**.
3. Popište, co má prompt dělat.
4. Vyberte model.
5. Nechte aplikaci vytvořit koncept.
6. Zkontrolujte koncept a klikněte na **Uložit**.

![Generate prompt](../images/screenshots/cs/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Upravit výzvu

Když vytváříte nebo upravujete výzvu, zobrazí se editor vlevo a vpravo se objeví testovací oblast.

![Transform prompt editor](../images/screenshots/cs/transform-prompt-edit.png)

Hlavní pole jsou:

- **Název výzvy**: název zobrazený v seznamu výzev.
- **Instrukce výzvy (volitelné)**: krátká nápověda zobrazená uživateli při spuštění výzvy.
- **Role modelu**: celková role přiřazená AI, například „Jsi užitečný asistent.“
- **Instrukce modelu (jedna na řádek)**: konkrétní pravidla, která má AI dodržovat.
- **Popis výstupu**: krátké slovo popisující výsledek, například „přehled“ nebo „přepis“.
- **Teplota (0,0 → 1,0)**: způsob chování modelu; viz níže.
- **Zeptat se na cílový jazyk**: přidá výběr cílového jazyka při spuštění výzvy.

Pokud je pro vás technický termín **Teplota** nový, představte si to následovně:

- **Nižší** teplota dává stabilnější a předvídatelnější výsledky.
- **Vyšší** teplota dává větší rozmanitost a kreativitu.

Můžete také použít:

- **`Vygenerovat výzvu`** pro vytvoření nového návrhu z jednoduchého popisu
- **`Vylepšit výzvu`** pro zdokonalení stávající výzvy
- **`Přeložit výzvu`** pro překlad polí výzvy

<br/>

> ⚠️ **UPOZORNĚNÍ**<br/>
> Klikněte na **`Uložit`**, než kliknete na **`Zpět ke spuštění`**. Pokud se vrátíte zpět bez uložení, změny budou ztraceny.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Před použitím otestujte výzvu

Testovací panel vpravo vám umožňuje vyzkoušet si výzvu s ukázkovým textem, než ji začnete používat v běžné práci.

To je užitečné, když:

- vytváříte novou výzvu
- porovnáváte dvě verze výzvy
- chcete zkontrolovat tón, délku nebo formát výstupu

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Uložené výzvy můžete exportovat a importovat v části [**Nastavení** > **Transformační výzvy**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Dashboard

Použijte **Dashboard** k zobrazení informací o využití aplikace a nákladech (pro placené modely).

![Dashboard summary](../images/screenshots/cs/dashboard-summary.png)

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Pokud používáte pouze **zdarma** dostupné modely, částky **ceny** mohou být nulové a souhrny zaměřené na náklady mohou vypadat prázdně. Na kartě **Přehled**, **Využití v čase** a **Využití podle modelu** jsou však stále zobrazeny **počty volání** (překlad, přepis a transformace), pokud máte v zvoleném období nějakou aktivitu.

<br/>

<a id="filter-the-data"></a>
### Filtrování dat

Použijte tlačítka filtru nahoře k změně časového rozsahu.

![Dashboard filters](../images/screenshots/cs/dashboard-filter.png)

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Filtr **Uživatel** je ve webové verzi viditelný pouze pro administrátory. Běžní uživatelé tento filtr neuvidí a v desktopové aplikaci není k dispozici.

<br/>

<a id="dashboard-tabs"></a>
### Záložky Dashboardu

- **Přehled** poskytuje přehled o využití a nákladech. Zahrnuje **Využití v čase** (násobné kumulativní **počty volání** podle dnů pro překlad, přepis a transformaci) a **Využití podle modelu** (celkový počet **volání podle modelu**, včetně transformace).
- **Podle využití** rozděluje aktivitu podle jazyka překladu, režimu přepisu a promptu transformace.
- **Podle modelu** ukazuje, které modely jste použili a kolik vás stály.
- **Podle dne** zobrazuje denní součty.
- **Všechna volání** zobrazuje kompletní historii volání a umožňuje její export.

<br/>

<a id="export-data"></a>
### Export dat

Tabulky na Dashboardu mohou exportovat data ve formátech:

- **JSON**
- **CSV**
- **XLSX**

To je užitečné, pokud chcete aktivitu kontrolovat mimo aplikaci nebo sdílet sestavu.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Smazání uložených záznamů pro model

Na kartě **Podle modelu** nebo **Všechna volání** můžete odstranit uložené záznamy pro model kliknutím na ikonu „koše“.

> ⚠️ **UPOZORNĚNÍ**<br/>
> Smazání uložených záznamů nelze vrátit zpět. Používejte pouze tehdy, jste-li si jisti, že historii již nepotřebujete.

Chcete-li smazat všechna data nebo odstranit záznamy podle jejich stáří, přejděte do [**Nastavení** > **Sledování nákladů**](#cost-tracking). Tam najdete možnosti smazat všechna uložená data nebo pouze data starší než určité datum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Historie

Kliknutím na **Historie** zobrazíte historii vašich akcí v aplikaci **Transrewrt**, včetně vstupu a výstupu každé operace.

![History page](../images/screenshots/cs/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrování dat

**Historie** používá stejné filtry jako stránka **Dashboard**. Použijte je k výběru časového rozsahu.

![Dashboard filters](../images/screenshots/cs/dashboard-filter.png)

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Filtr **Uživatel** je ve webové verzi viditelný pouze pro administrátory. Běžní uživatelé tento filtr neuvidí a v desktopové aplikaci není k dispozici.

<br/>

<a id="export-history-data"></a>
### Export dat historie

Stránka historie může exportovat filtrovaná data ve formátech:

- **JSON**
- **CSV**
- **XLSX**

To je užitečné, pokud chcete aktivitu kontrolovat mimo aplikaci nebo sdílet sestavu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Nastavení

Otevřete **Nastavení** na bočním panelu a přizpůsobte si chování aplikace.

Dostupné karty závisí na platformě a vaší roli:

| Karta               | Desktop | Web (správce) | Web (běžný uživatel) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Obecné nastavení  |   ano   |     ano     |        ano         |
  | Modely            |   ano   |     ano     |        ano         |
  | Jazyky            |   ano   |     ano     |        ano         |
  | Sledování nákladů |   ano   |     ano     |         —          |
  | Transformační výzvy |   ano   |     ano     |        ano         |
  | Uživatelé         |    —    |     ano     |         —          |
  | Konfigurace API   |   ano   |     ano     |         —          |
  | O aplikaci        |   ano   |     ano     |        ano         |

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Ve webové verzi má každý uživatel vlastní konfiguraci. Nastavení jako vybrané modely, jazyky, obecné možnosti a transformační výzvy jsou uložena pro každého uživatele zvlášť. Změny, které provedete, neovlivní ostatní uživatele.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Obecné nastavení

Použijte **Obecné nastavení** k ovládání chování při psaní, ukládání podrobností spuštění pro **Historii** a vzhledu.

**Chování**

- **Chování pro ENTER** určuje, zda `Enter` spustí úlohu nebo vloží nový řádek.
- **Automaticky překládat při vložení** spustí překlad ihned po vložení textu.
- **Automaticky zkopírovat výsledek do schránky** automaticky zkopíruje úspěšné výsledky.
- **Překlad v reálném čase (během psaní)** překládá během psaní.
- **Časový limit (ms)** nastaví dobu čekání pro překlad v reálném čase.

**Historie**

- **Ponechat historii spouštění** určuje, zda každý překlad, přepis a transformace uloží **vstupní a výstupní text** pro zobrazení [**Historie**](#history) na bočním panelu. Vypnutí této funkce vyžaduje potvrzení; pokud potvrdíte, uložený text historie bude odstraněn z databáze.
- **Smazat data historie** umožňuje odstranit uložený text podle stáří (např. starší než několik měsíců, nebo **všechna data (vymazat)**) pomocí tlačítka **Smazat data**. Toto ovlivňuje pouze uložený text spuštění pro zobrazení **Historie**; **neodstraňuje** celkové náklady nebo údaje o využití. Chcete-li odstranit nebo zkrátit data o **nákladech**, použijte [**Nastavení** > **Sledování nákladů**](#cost-tracking).

**Vzhled**

- **Zobrazit informace o nákladech u akcí** ovládá zobrazení nákladů za operaci (pokud jsou k dispozici) a celkových nákladů na panelech výstupu pro **Přeložit**, **Přepis** a **Transformace**.
- **Desetinná místa pro cenu** mění způsob zobrazení desetinných míst ceny.
- **Pouze web:** **zobrazit okraj kolem aplikace** přidává dodatečný prostor kolem rozhraní.
- **Rodina písma** mění písmo v textových panelech.
- **Velikost** mění velikost písma.

**Zálohování konfigurace**

- **Zahrnout data o využití do zálohy** – pokud je povoleno, obsahuje ZIP také historii spuštění a data volání API.
- **Zálohovat konfiguraci** – vytvoří jeden soubor ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` ve výchozím nastavení v UTC) s `config.json`, `state.json`, volitelným šifrovacím klíčem, uživateli, preferencemi, vlastními výzvami a daty o využití, pokud jste to povolili. Po úspěšné záloze potvrzení zobrazí název uloženého souboru.
- **Obnovit ze zálohy** – nejprve otevře **potvrzovací dialog**. Vyberte soubor zálohy ZIP v dialogu (**Procházet** / výběr souboru nebo přetažení, pokud je podporováno), poté zkontrolujte možnosti:
  - **Obnovit data o využití** – importuje data o využití/historii ze zálohy ZIP, pokud byla záloha vytvořena s daty o využití; nezaškrtněte, pokud chcete pouze nastavení a výzvy.
  - **Smazat stará data o využití před obnovením** – odstraní stávající data o využití/historii v této instalaci před použitím zálohy (volitelné; použijte, pokud chcete čistou náhradu).

Zálohy vytvořené ve webové nebo desktopové verzi lze obnovit v druhé verzi. Při obnově desktopové zálohy ve webové verzi budou data obnovena pro uživatele správce.

<br/>

<a id="models"></a>
### Modely

Použijte **Nastavení** > **Modely** k výběru modelů, které se zobrazí na panelu nástrojů.

![Settings Models tab](../images/screenshots/cs/settings-models.png)

Stránka obsahuje dva seznamy:

- **Dostupné modely** vlevo
- **Vybrané modely** vpravo

Užitečné ovládací prvky zahrnují:

- **Hledat modely...** pro vyhledání modelu podle názvu
- **Poskytovatel** filtry pro omezení seznamu na jeden engine (OpenRouter, OpenAI, Ollama, …)
- **Pouze zdarma** pro zobrazení pouze bezplatných modelů
- **Obnovit** pro opětovné načtení seznamu
- **Rozbalit vše** a **Sbalit vše** při řazení podle poskytovatele

ID modelů zahrnují předponu poskytovatele (například `openrouter/…` vs `openai/…`). Odznáčky jako **OpenAI (OpenRouter)** vs **OpenAI (přímé)** ukazují, jak je provoz směrován.

> ℹ️ **POZNÁMKA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) je směrovací model, nikoli obecný chatovací model: jeho odpověď je ve formátu JSON, který popisuje těla požadavků OpenRouter API (například pole `requests` s `model` a `messages`). Pokud jej použijete pro **Přeložit**, **Přepis** nebo **Transformaci**, panel výstupu zobrazí tento JSON místo dokončeného textu. Pro tyto úkoly zvolte běžný textový model. Viz [stránka modelu Body Builder](https://openrouter.ai/openrouter/bodybuilder) na OpenRouter.

Akce:

- Chcete-li přidat model, klikněte na **Přidat** nebo kamkoli do položky.

- Chcete-li odebrat model, klikněte na **X** vedle něj ve **Vybraných modelech** nebo na **Vybráno** u položky v Dostupných modelech.

- Chcete-li vymazat seznam, klikněte na **Zrušit výběr**. Povinný bezplatný model zůstane v seznamu.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Pokud nechcete okamžitě přidat kredity na OpenRouter, začněte tím, že povolíte **Pouze zdarma** a vyberete bezplatné modely (není vyžadována platební karta). Můžete také použít Ollama ke spuštění modelů lokálně bez jakéhokoli API klíče.

<br/>

<a id="languages"></a>
### Jazyky

Použijte **Nastavení** > **Jazyky** k organizaci seznamů jazyků používaných v aplikaci.

- **Nejčastější jazyky** jsou připíchnuty v horní části seznamů jazyků v **Překladu** a **Transformaci**.
- **Vlastní jazyk** vám umožňuje přidat jazyk, který není v předdefinovaném seznamu.

Pokud přidáte vlastní jazyk, zobrazí se ve výběru jazyků spolu s vestavěnými možnostmi.

<br/>

<a id="cost-tracking"></a>
### Sledování nákladů

Použijte **Nastavení** > **Sledování nákladů** ke správě informací o nákladech.

- **Celková cena** zobrazuje běžící součet.
- **Kopírovat hodnotu** zkopíruje celkovou částku do schránky.
- **Resetovat náklady** nastaví uložený součet na nulu.
- **Synchronizovat s využitím API klíče** nastaví celkovou částku podle využití hlášeného vaším účtem OpenRouter (pouze OpenRouter).
- **Využití API klíče** zobrazí podrobnosti o využití OpenRouter, pokud jsou k dispozici.
- **Smazat data o nákladech** odstraní všechna data nebo pouze záznamy starší než vybrané datum.

**Sledování nákladů:** Když používáte modely OpenRouter, aplikace zobrazuje vaše skutečné využití a výdaje na základě informací o nákladech od OpenRouter. U všech ostatních poskytovatelů aplikace odhaduje náklady pomocí cen zveřejněných OpenRouter; pokud není cena k dispozici, odhad může být nulový.

<br/>

> ℹ️ **POZNÁMKA**<br/>
>  **Všechny částky jsou pouze orientační a slouží pouze pro vaši informaci, nejedná se o oficiální fakturační údaje.**

<br/>

> ⚠️ **UPOZORNĚNÍ**<br/>
> Odstranění dat nelze vrátit zpět. Před smazáním si ujistěte, že si data zálohujete nebo exportujete přes [**Historii**](#history)
> nebo [**Dashboard** > **Všechna volání**](#dashboard-tabs), jinak budou trvale ztracena.
> Bude také smazána veškerá historie vstupů/výstupů související s každým záznamem volání API.

<br/>

<a id="transform-prompts"></a>
### Transformační výzvy

Použijte **Nastavení** > **Transformační výzvy** ke správě výzev hromadně.

Můžete:

- prohlédnout si uložené prompty
- smazat prompty
- importovat prompty ze souboru
- exportovat prompty pro zálohování nebo sdílení
- načíst ukázkové prompty do seznamu promptů

<br/>

<a id="users"></a>
### Uživatelé

Použijte **Uživatelé** ke správě uživatelských účtů ve webové verzi. Můžete přidávat uživatele, aktualizovat jejich údaje, resetovat hesla a mazat účty.

<br/>

<a id="api-config"></a>
### Konfigurace API

Podporovaní poskytovatelé jsou: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras a **Ollama** (lokální modely přes základní URL). Stačí nakonfigurovat pouze ty poskytovatele, které používáte.

**Webová aplikace: pouze pro správce**

Klíče API se konfigurují prostřednictvím systémových nebo Dockerových proměnných prostředí – nezadávají se do webového uživatelského rozhraní. Tato stránka ukazuje, u kterých poskytovatelů je klíč nakonfigurován, a umožňuje vám každý otestovat kliknutím na tlačítko **`Test`**.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Chcete-li změnit klíč API, aktualizujte proměnnou prostředí ve svém systému nebo v konfiguraci Dockeru a restartujte server nebo kontejner.

> ℹ️ **POZNÁMKA**<br/>
> **Zálohy konfigurace** (viz [**Obecné nastavení** → Zálohování konfigurace](#general-settings)) mohou vložit **rozbalené** klíče poskytovatelů do souboru `config.json` uvnitř ZIPu. Obnovení tohoto ZIPu **nekopíruje** tyto klíče zpět do konfiguračního souboru serveru – aktuální klíče stále pocházejí z prostředí a existujícího stavu souboru, jak je popsáno výše.

<br/>

**Desktopová aplikace**

Použijte **Konfiguraci API** k uložení klíčů API pro každého poskytovatele, kterého používáte. Pro Ollamu zadejte místo klíče API **základní URL**.

<br/>

> 💡 **Tip** <br/>
> Pokud nechcete používat klíč API nebo platit za využití služby, můžete [stáhnout Ollamu](https://ollama.com) a spouštět modely (např. `translategemma:4b`) zdarma lokálně na svém počítači. Alternativně můžete vytvořit bezplatný účet OpenRouter (bez platební karty) pro použití jejich zdarma modelů nebo získat bezplatný klíč API od Cerebras, Google, Groq nebo Mistral AI.

<br/>

- Přidejte pouze poskytovatele, které potřebujete. V části **Nastavení** > **Modely** začíná každé ID modelu názvem poskytovatele (např. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Chcete-li přidat klíč API, zadejte hodnotu do textového pole a klikněte na **`Uložit`**. Chcete-li nahradit stávající klíč, klikněte na **`Upravit`**. Chcete-li ověřit, že klíč funguje, klikněte na **`Test`**. U základní URL Ollamy vždy klikněte na **`Test`**, abyste ověřili připojení.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Aktuální hodnotu klíče API nemůžete zobrazit. Můžete ho pouze nahradit pomocí tlačítka **`Upravit`**.
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
### Aplikace nebude překládat, přepisovat ani transformovat text

Zkontrolujte, že:

- jste vybrali model v panelu nástrojů
- je alespoň jeden model uveden v části [**Nastavení** > **Modely**](#models)
- vaše nastavení API funguje

Pokud používáte desktopovou aplikaci:

1. Otevřete [**Nastavení** > **Konfigurace API**](#api-config).
2. Zkontrolujte, že je uložen alespoň jeden klíč API.
3. Klikněte na **Test** vedle poskytovatele, abyste potvrdili, že klíč funguje.

<br/>

<a id="the-model-list-is-empty"></a>
### Seznam modelů je prázdný

Otevřete [**Nastavení** > **Modely**](#models) a klikněte na **Obnovit**.

V případě potřeby:

- vyhledejte model
- zapněte možnost **Pouze zdarma**
- přidejte jeden nebo více modelů do **Vybraných modelů**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Výsledek je příliš pomalý nebo příliš drahý

Vyzkoušejte jednu nebo více z následujících možností:

- vyberte jiný model
- použijte kratší vstup
- vypněte možnost **Překlad v reálném čase (během psaní)** v části [**Nastavení** > **Obecné nastavení**](#general-settings)
- používejte zdarma dostupné modely pro jednoduché úkoly (viz [Modely](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Rozhraní je v nesprávném jazyce

Klikněte na ikonu zeměkoule v [panelu nástrojů](#toolbar) a vyberte požadovaný **Jazyk rozhraní**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Text je příliš malý nebo špatně čitelný

Otevřete [**Nastavení** > **Obecné nastavení**](#general-settings) a změňte:

- **Rodinu písma**
- **Velikost**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Grafy v Dashboardu jsou prázdné

To je normální, pokud:

- používáte pouze **zdarma dostupné modely** a sledujete údaje o **ceně** (mohou být nulové); grafy počtu volání v části **Přehled** stále potřebují data z vybraného období
- vybraný **časový filtr** nezahrnuje období, kdy byla volání provedena – zkuste **Vše**, abyste zkontrolovali

Pokud jsou grafy stále prázdné po výběru **Vše**, potvrďte, že volání se zobrazují v části [**Historie**](#history) nebo na kartě **Všechna volání**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Cena ukazuje „není k dispozici“ nebo se zdá být nesprávná

Když používáte modely prostřednictvím **OpenRouter**, aplikace zobrazuje skutečné výdaje hlášené OpenRouterem.

U **ostatních poskytovatelů** (OpenAI přímé, Anthropic přímé atd.) je cena odhadována na základě cenových údajů zveřejněných OpenRouterem. Pokud pro model neexistuje odpovídající cena, bude cena uvedena jako **není k dispozici** a nebude přičtena k běžícímu celkovému součtu.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Celková cena neodpovídá mému účtu od poskytovatele

Všechny údaje o nákladech v aplikaci jsou **odhadové a určené pouze pro informaci**, nejedná se o oficiální fakturační údaje.

Chcete-li, aby se celková částka více přiblížila skutečným výdajům na OpenRouteru, otevřete [**Nastavení** > **Sledování nákladů**](#cost-tracking) a klikněte na **Synchronizovat s využitím API klíče**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Stránka Historie chybí na bočním panelu

Možnost **Ponechat historii spouštění** může být vypnutá. Otevřete [**Nastavení** > **Obecné nastavení**](#general-settings) a tuto možnost povolte. Všimněte si, že její zapnutí neobnoví dříve smazaná data historie.

<br/>

<a id="web-app-session-expired"></a>
### Webová aplikace: nečekaně přesměrováno na přihlašovací stránku

Vaše relace mohla vypršet. Přihlaste se znovu. Pokud se to děje často, zkontrolujte nastavení konfigurace serveru týkající se doby trvání relace.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Webový správce: zapomenuté nebo ztracené heslo

Toto se týká **samostatně hostované webové aplikace** (Docker), nikoli desktopové aplikace (Electron).

- Pokud se může stále přihlásit jiný správce, může otevřít [**Nastavení** > **Uživatelé**](#users), vybrat účet a nastavit tam **nové heslo**.
- Pokud jste **zablokováni**, ale máte **přístup k shellu** stroje nebo kontejneru, obnovte heslo pomocí nástroje dodávaného s imagí (nahraďte `transrewrt`, pokud změníte výchozí název, a uvozujte heslo, pokud obsahuje mezery nebo speciální znaky):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Výchozí uživatelské jméno správce je `admin`, pokud jste nikdy nevytvořili jiné účty. Když zadáte pouze jeden argument, je považován za nové heslo pro `admin`.

Pokud spouštíte aplikaci z **lokálního zdrojového kódu** místo Dockeru, použijte:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Skript aktualizuje záznam uživatele v databázi SQLite (a může vytvořit uživatele `admin`, pokud chybí). Po obnovení se přihlaste s novým heslem.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Dashboard nezobrazuje data pro ostatní uživatele (web)

Pouze **správci** mohou zobrazit data všech uživatelů pomocí filtru **Uživatel**. Běžní uživatelé vidí pouze svou vlastní aktivitu, což je zamýšlené chování.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Změnil jsem prompt a ztratil jsem úpravy

Při úpravě promptu vždy klikněte na **Uložit**, než kliknete na **Zpět na běh**.

<br/><br/>

<a id="quick-tips"></a>
## Rychlé tipy

- Začněte s [**Přeložit**](#translate), abyste ověřili, že je vše správně nastaveno, než přejdete k [**Přepis**](#rewrite) nebo [**Transformace**](#transform).
- Použijte [**Přepis**](#rewrite) pro každodenní vylepšování formulací.
- Použijte [**Transformace**](#transform), když potřebujete opakovatelný pracovní postup pro konkrétní úkol.
- Použijte [**Dashboard**](#dashboard), pokud chcete sledovat využití a cenu.
- Použijte [**Historie**](#history) k prohlížení minulých operací a jejich úplného vstupního a výstupního textu.
- Pravidelně exportujte prompty, pokud vytváříte knihovnu promptů, kterou chcete uchovat v bezpečí (viz [Transformační výzvy](#transform-prompts)), nebo ji chcete sdílet s ostatními.

<br/><br/>

<a id="disclaimer"></a>
## Zřeknutí se zodpovědnosti

Názvy produktů a ikony patří jejich příslušným vlastníkům a používají se pouze pro účely identifikace. Tento software není spojen s žádnými z uvedených značek ani jimi není schválen.

<br/><br/>

<a id="license"></a>
## Licence

Autorská práva © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
