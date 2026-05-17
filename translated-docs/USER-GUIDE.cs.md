---
translation_last_updated: '2026-05-17T23:31:51.563Z'
source_file_mtime: '2026-05-17T23:31:33.219Z'
source_file_hash: a95628603ab70243854f610fae2a7ec4ab65da77e12ecf804a519d5bc0698e92
translation_language: cs
source_file_path: USER-GUIDE.md
translation_models:
  - qwen/qwen3-235b-a22b-2507
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Uživatelská příručka

<br/>

<a id="introduction"></a>
## Úvod

Transrewrt vám pomáhá pracovat s textem třemi hlavními způsoby:

- **Překlad** – převod textu z jednoho jazyka do druhého.
- **Přepsat** – přeformulování textu v odlišném stylu, například jasnějším, stručnějším nebo formálnějším.
- **Transformovat** – zpracování textu pomocí vlastních pokynů pro umělou inteligenci, které se nazývají prompty.

Ve výchozím nastavení aplikace běží v režimu **Snadný**: vyberete **dovednost** (například Zdarma, Rychlý nebo Technický) a **poskytovatele** v nastavení, aniž byste museli vybírat ID modelů. Přepněte do režimu **Pokročilý** v části [**Nastavení** > **Obecné nastavení**](#general-settings), pokud chcete klasický seznam modelů z části [**Nastavení** > **Modely**](#models).

<br/>

Tato příručka vysvětluje, jak aplikaci používat po její instalaci a spuštění. Pokyny k instalaci naleznete v hlavním souboru [**README**](README.cs.md).

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Transrewrt je dostupný jako desktopová aplikace pro Windows a Linux a také jako samostatně hostovaná webová aplikace. Tato příručka se zaměřuje na běžné používání aplikace. Pokud něco platí pouze pro jednu verzi, je to jasně označeno.

<small>**Přečtěte si v jiných jazycích:** </small>
<small id="lang-list">[English (GB)](../USER-GUIDE.md) · [Português (Brasil)](./USER-GUIDE.pt-BR.md) · [العربية](./USER-GUIDE.ar.md) · [বাংলা](./USER-GUIDE.bn.md) · [Català](./USER-GUIDE.ca.md) · [中文 (中国大陆)](./USER-GUIDE.zh-CN.md) · [中文 (台灣)](./USER-GUIDE.zh-TW.md) · [Hrvatski](./USER-GUIDE.hr.md) · [Čeština](./USER-GUIDE.cs.md) · [Nederlands](./USER-GUIDE.nl.md) · [English (US)](./USER-GUIDE.en-US.md) · [Tagalog](./USER-GUIDE.tl.md) · [Français](./USER-GUIDE.fr.md) · [Deutsch](./USER-GUIDE.de.md) · [Ελληνικά](./USER-GUIDE.el.md) · [हिन्दी](./USER-GUIDE.hi.md) · [Magyar](./USER-GUIDE.hu.md) · [Italiano](./USER-GUIDE.it.md) · [日本語](./USER-GUIDE.ja.md) · [한국어](./USER-GUIDE.ko.md) · [Bahasa Melayu](./USER-GUIDE.ms.md) · [فارسی](./USER-GUIDE.fa.md) · [Polski](./USER-GUIDE.pl.md) · [Basa Jawa](./USER-GUIDE.jv.md) · [Português](./USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](./USER-GUIDE.pa.md) · [Română](./USER-GUIDE.ro.md) · [Русский](./USER-GUIDE.ru.md) · [Slovenčina](./USER-GUIDE.sk.md) · [Español](./USER-GUIDE.es.md) · [Kiswahili](./USER-GUIDE.sw.md) · [Svenska](./USER-GUIDE.sv.md) · [తెలుగు](./USER-GUIDE.te.md) · [ไทย](./USER-GUIDE.th.md) · [Türkçe](./USER-GUIDE.tr.md) · [Українська](./USER-GUIDE.uk.md) · [Tiếng Việt](./USER-GUIDE.vi.md)</small>

<small>

> **Poznámka k překladům uživatelského rozhraní a dokumentace:** Všechny jazyky rozhraní kromě původního angličtiny (UK)
> byly přeloženy pomocí modelů umělé inteligence; vyjádření může být nepřesné nebo obsahovat chyby.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Obsah**

- [Než začnete](#before-you-start)
  - [Jak získat bezplatný klíč API OpenRouter (desktopová aplikace)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [První kroky](#getting-started)
- [Hlavní části okna](#main-parts-of-the-window)
  - [Boční panel](#sidebar)
  - [Panel nástrojů](#toolbar)
  - [Panely pro vstup a výstup](#input-and-output-panels)
- [Překlad](#translate)
  - [Překlad textu](#translate-text)
  - [Výběr jazyka](#language-selection)
  - [Užitečná nastavení překladu](#helpful-translation-settings)
- [Přepsat](#rewrite)
- [Transformovat](#transform)
  - [Spustit existující výzvu](#run-an-existing-prompt)
  - [Pokud ještě nemáte žádné výzvy](#if-you-have-no-prompts-yet)
  - [Rychlé vytvoření výzvy](#create-a-prompt-quickly)
  - [Upravit výzvu](#edit-a-prompt)
  - [Otestovat výzvu před použitím](#test-a-prompt-before-using-it)
- [Přehled](#dashboard)
  - [Filtrování dat](#filter-the-data)
  - [Karty přehledu](#dashboard-tabs)
  - [Export dat](#export-data)
  - [Odstranit uložené záznamy pro model](#delete-stored-records-for-a-model)
- [Historie](#history)
  - [Filtrování historie](#filter-the-history)
  - [Export dat historie](#export-history-data)
- [Nastavení](#settings)
  - [Obecné nastavení](#general-settings)
  - [Modely](#models)
  - [Jazyky](#languages)
  - [Sledování nákladů](#cost-tracking)
  - [Transformovat (karta nastavení)](#transform-settings)
  - [Uživatelé](#users)
  - [Nastavení API](#api-config)
  - [O aplikaci](#about)
- [Běžné problémy](#common-issues)
  - [Aplikace nepřekládá, nepřepisuje ani netransformuje text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Seznam modelů je prázdný](#the-model-list-is-empty)
  - [Výsledek je příliš pomalý nebo příliš drahý](#the-result-is-too-slow-or-too-expensive)
  - [Rozhraní je v nesprávném jazyce](#the-interface-is-in-the-wrong-language)
  - [Text je příliš malý nebo špatně čitelný](#the-text-is-too-small-or-hard-to-read)
  - [Souhrn na přehledu vypadá prázdně](#dashboard-summary-looks-empty)
  - [Náklady zobrazují „není k dispozici“ nebo se zdají chybné](#cost-shows-not-available-or-seems-wrong)
  - [Celkové náklady neodpovídají mému účtu poskytovatele](#total-cost-does-not-match-my-provider-bill)
  - [Stránka Historie chybí v bočním panelu](#the-history-page-is-missing-from-the-sidebar)
  - [Webová aplikace: neočekávaně přesměrováno na přihlašovací stránku](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Webový správce: zapomenuté nebo ztracené heslo](#web-admin-forgot-or-lost-a-password)
  - [Přehled nezobrazuje data pro ostatní uživatele (webová verze)](#dashboard-shows-no-data-for-other-users-web)
  - [Změnil jsem výzvu a upravy jsem ztratil](#i-changed-a-prompt-and-lost-the-edits)
- [Rychlé tipy](#quick-tips)
- [Právní upozornění](#disclaimer)
- [Licence](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Než začnete

Pro použití aplikace Transrewrt potřebujete přístup alespoň k jednomu poskytovateli umělé inteligence. Podporovaní poskytovatelé jsou: [OpenRouter](https://openrouter.ai) (který agreguje mnoho modelů), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras a [Ollama](https://ollama.com) pro místní modely.

Nemusíte vybírat placený model, abyste mohli začít. Jakmile přidáte svůj klíč OpenRouter API, aplikace automaticky aktivuje vestavěnou **zdarma** možnost OpenRouter. To vám umožní okamžitě začít s překladem, přepisováním a transformací textu. Alternativně můžete získat bezplatný klíč API také od Cerebras, Google, Groq nebo Mistral AI.

Jednoduše řečeno:

- V režimu **Snadný** je **dovednost** přednastavená hodnota (Zdarma, Rychlý, Pokročilý, Technický, Právní), která se mapuje na model pro vybraného **poskytovatele** (OpenRouter, OpenAI, Ollama a další). Dovednost vybíráte na panelu nástrojů v režimech Překlad, Přepsat a Transformovat.
- V režimu **Pokročilý** je **model** AI modul, který vybíráte přímo. ID modelů používají **předponu poskytovatele** (například `openrouter/…`, `openai/…`, `ollama/…`).
- **API klíč** (nebo u Ollama **základní URL**) je způsob, jak aplikace komunikuje s daným poskytovatelem.

Pokud používáte **desktopovou aplikaci**, přidejte klíče v části [**Nastavení** > **Nastavení API**](#api-config) pro každého poskytovatele, kterého používáte. Pokud používáte pouze OpenRouter, viz níže [Jak získat bezplatný API klíč OpenRouter](#how-to-get-an-api-key-desktop-app). Pokud nechcete používat API klíč, můžete nainstalovat Ollama (z [ollama.com](https://ollama.com)) a používat místní modely, například `translategemma:4b`.

Pokud používáte **webovou verzi**, poskytovatele nakonfiguruje správce serveru pomocí proměnných prostředí, takže nemůžete klíče API zadat přímo v aplikaci.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Jak získat bezplatný klíč OpenRouter API (desktopová aplikace)

Pokud používáte desktopovou aplikaci, postupujte podle následujících kroků:

1. Otevřete [OpenRouter](https://openrouter.ai) ve webovém prohlížeči.
2. Vytvořte si účet nebo se přihlaste.
3. Otevřete stránku [Klíče](https://openrouter.ai/keys).
4. Klikněte na tlačítko pro vytvoření nového klíče API.
5. Zadejte název klíče, abyste ho mohli později rozpoznat.
6. Zkopírujte nový klíč API.
7. Vraťte se do aplikace Transrewrt a otevřete **Nastavení** > **Nastavení API**.
8. Vložte klíč do pole **Klíč OpenRouter API** (v části **Nastavení** > **Nastavení API**).
9. Klikněte na **Testovat klíč OpenRouter**, abyste ověřili, že funguje.

<br/><br/>

<a id="getting-started"></a>
## Začínáme

Pokud používáte Transrewrt poprvé, postupujte v tomto pořadí:

1. Otevřete aplikaci.
2. V případě potřeby vyberte svůj **jazyk rozhraní** z ikony zeměkoule.
3. Pokud používáte **desktopovou aplikaci**, otevřete [**Nastavení** > **Nastavení API**](#api-config), přidejte API klíč alespoň pro jednoho poskytovatele (například OpenRouter) a klikněte na **Test**, abyste ověřili, že funguje.
4. Otevřete [**Nastavení** > **Obecné nastavení**](#general-settings). V režimu **Snadný** (výchozí) vyberte **poskytovatele**, který má nakonfigurovaný klíč. V režimu **Pokročilý** otevřete [**Nastavení** > **Modely**](#models) a přidejte jeden nebo více modelů do části **Vybrané modely**.
5. V režimu **Překlad** vyberte **dovednost** (Snadný) nebo **model** (Pokročilý) na panelu nástrojů.
6. Otevřete [**Nastavení** > **Jazyky**](#languages) a vyberte své **nejčastěji používané jazyky**, pokud chcete, aby se vaše oblíbené jazyky zobrazovaly jako první.
7. Spusťte jednoduchý překlad, abyste ověřili, že vše funguje, a poté vyzkoušejte funkce **Přepsat** a **Transformovat**.

Toto pořadí je důležité. Zabraňuje nejčastějšímu problému při prvním použití: spuštění úkolu před tím, než má aplikace funkční připojení přes API nebo vybranou dovednost/model.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Hlavní části okna

Aplikace je rozdělena do tří hlavních oblastí:

- **Boční panel** vlevo.
- **Panel nástrojů** nahoře.
- **Pracovní oblast** uprostřed.

<br/>

<a id="sidebar"></a>
### Postranní panel

Pomocí postranního panelu se pohybujete v aplikaci. Panel můžete sbalit, abyste získali více místa – stačí kliknout na ikonu vedle loga aplikace.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/cs/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Překlad</strong> otevře pracovní prostor pro překlad.</li><br/>
        <li><strong>Přepsat</strong> otevře pracovní prostor pro přepisování textu.</li><br/>
        <li><strong>Transformovat</strong> otevře pracovní prostor s vlastní výzvou.</li><br/>
        <li><strong>Přehled</strong> zobrazuje informace o využití a nákladech.</li><br/>
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

Panel nástrojů se mírně liší v závislosti na tom, kde se v aplikaci nacházíte.

- Vlevo se zobrazuje název aktuální stránky.
- Vpravo se zobrazuje **výběr dovednosti nebo modelu** a ovládání **jazyka rozhraní**.

V režimu **Snadný** zobrazuje panel nástrojů **výběr dovednosti** (Zdarma, Rychlý, Pokročilý, Technický, Právní a podobné předvolby). Dovednosti závisí na **poskytovateli**, kterého jste vybrali v části [**Nastavení** > **Obecné nastavení**](#general-settings). Pokud je **poskytovatel** nastaven na **Ollama**, zobrazí panel nástrojů namísto dovedností vaše nainstalované místní modely.

V režimu **Pokročilý** vám **výběr modelu** umožňuje zvolit, který AI modul použít pro aktuální úkol.

![Model selector](../images/screenshots/cs/model-selector.png)

V pokročilém režimu některé bezplatné modely nemusí být vždy k dispozici – mohou být offline nebo dosáhly limitu využití. Aplikace může tento model automaticky odebrat ze seznamu. Chcete-li ovlivnit, které modely se zobrazují, přejděte do [**Nastavení** > **Modely**](#models). Nastavení modelu můžete otevřít kliknutím na ikonu poskytovatele vlevo od názvu modelu na panelu nástrojů.

<br/>

Ikona **světa + kód jazyka** změní jazyk uživatelského rozhraní, například nabídek a tlačítek. **Neovlivňuje** jazyky použité pro překlad v sekci **Překlad**.

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

Náklady každé operace (pokud jsou k dispozici) a celkové náklady můžete sledovat po povolení možnosti `Show cost information on the actions` v části [**Nastavení** > **Obecné nastavení**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Překlad

Použijte **Překlad**, chcete-li převést text z jednoho jazyka do druhého.

![Translate workspace](../images/screenshots/cs/translate.png)

<br/>

<a id="translate-text"></a>
### Překlad textu

1. Otevřete **Překlad**.
2. Vyberte jazyk ve **Z**.
3. Vyberte jazyk do **Na**.
4. Vyberte dovednost (Snadný) nebo model (Pokročilý) na panelu nástrojů.
5. Zadejte nebo vložte text do **Vstupu**.
6. Klikněte na **Překlad**.
7. Přečtěte si výsledek ve **Výstupu**.
8. Pokud chcete výsledek zkopírovat, použijte tlačítko pro kopírování.

<br/>

<a id="language-selection"></a>
### Výběr jazyka

- **Z** může být konkrétní jazyk nebo **Detekovat jazyk**.
- **Na** je jazyk, do kterého chcete text přeložit.

Vaše vybrané **Nejčastější jazyky** se zobrazí v horní části seznamu. Tyto jazyky můžete nastavit v části [**Nastavení** > **Jazyky**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Užitečná nastavení překladu

V části [**Nastavení** > **Obecné nastavení**](#general-settings) můžete změnit chování překladu:

- **Automatický překlad při vkládání** spustí překlad ihned po vložení textu.
- **Automatické kopírování výsledku do schránky** automaticky zkopíruje výsledek po úspěšném překladu.
- **Překlad v reálném čase (během psaní)** spouští překlady, zatímco píšete.
- **Časový limit (ms)** určuje, jak dlouho aplikace čeká před spuštěním překladu v reálném čase.
- **Enter** určuje, co se stane po stisknutí `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Přepsat

Použijte **Přepsat**, pokud chcete vylepšit formulaci, aniž byste změnili hlavní význam.

![Rewrite workspace](../images/screenshots/cs/rewrite.png)

To je užitečné pro:

- opravu pravopisu a gramatiky (**Kontrolovat pravopis a gramatiku**)
- zlepšení srozumitelnosti textu (**Zlepšit srozumitelnost**)
- vytvoření několika různých přeformulování najednou (**Alternativní verze**)
- udělání textu formálnějšího nebo méně formálního (**Formální** / **Neformální**)
- zkrácení nebo rozšíření textu (**Zkrátit** / **Rozšířit**)
- udělání textu techničtějšího (**Udělat technický**)

<br/>

> 💡 **TIP**<br/>
> Když použijete režim "**Kontrolovat pravopis a gramatiku**", v panelu výstupu se (vedle **Kopírovat**) objeví přepínač **Zobrazit změny**.
> Zapněte nebo vypněte jej, abyste zobrazili nebo skryli konkrétní opravy provedené ve vašem textu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Transformovat

Použijte **Transformovat**, když chcete, aby AI postupovala podle vlastních pokynů.

![Transform workspace](../images/screenshots/cs/transform.png)

Toto je nejpružnější část aplikace. Můžete ji použít například pro:

- shrnutí poznámek
- převod hrubého textu na dokonalý e-mail
- extrakci klíčových bodů
- převod textu do konkrétního formátu
- jakoukoli jinou vlastní úpravu vstupního textu

<br/>

<a id="run-an-existing-prompt"></a>
### Spustit existující výzvu

1. Otevřete **Transformovat**.
2. Vyberte výzvu ze seznamu výzev.
3. Pokud se objeví pole **Cíl** jazyka, vyberte jazyk, pokud ho chcete.
4. Zadejte nebo vložte text do pole **Vstup**.
5. Klikněte na **Transformovat**.
6. Přečtěte si výsledek v **Výstupu**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Pokud ještě žádné výzvy nemáte

Pokud je váš seznam výzev prázdný, klikněte na **Načíst ukázkové výzvy** v pracovním prostoru Transformovat. Stejné tlačítko je vždy k dispozici v části [**Nastavení** > **Transformovat**](#transform-settings) na řádku pro export/import. Oba způsoby přidají vestavěné příklady, abyste mohli rychle začít.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Ukázkové výzvy jsou poskytovány v angličtině. Po jejich načtení můžete výzvu upravit a použít **Přeložit výzvu**, abyste ji přeložili do vašeho jazyka.

<br/>

<a id="create-a-prompt-quickly"></a>
### Rychlé vytvoření výzvy

Nejrychlejší způsob, jak vytvořit výzvu:

1. Klikněte na **Nová výzva**.
2. Klikněte na **Vygenerovat výzvu**.
3. Popište, co má výzva dělat.
4. Vyberte model.
5. Nechte aplikaci vytvořit koncept pro vás.
6. Zkontrolujte koncept a klikněte na **Uložit**.

![Generate prompt](../images/screenshots/cs/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Úprava výzvy

Když vytváříte nebo upravujete výzvu, zobrazí se editor vlevo a vpravo se objeví testovací oblast.

![Transform prompt editor](../images/screenshots/cs/transform-prompt-edit.png)

Hlavní pole jsou:

- **Název výzvy**: název zobrazený v seznamu výzev.
- **Pokyny pro výzvu (volitelné)**: krátká nápověda zobrazená uživateli při spuštění výzvy.
- **Role modelu**: celková role přiřazená umělé inteligenci, například 'Jsi užitečný asistent.'
- **Pokyny modelu (jeden na řádek)**: konkrétní pravidla, která má umělá inteligence dodržovat.
- **Popis výstupu**: krátké slovo popisující výsledek, například 'souhrn' nebo 'přepsání'.
- **Teplota (0,0 → 1,0)**: chování modelu; viz níže.
- **Zeptat se na cílový jazyk**: přidá výběr cílového jazyka při spuštění výzvy.

Pokud pro vás technický termín **Teplota** není známý, představte si to takto:

- **Nižší** teplota dává stálejší a předvídatelnější výsledky.
- **Vyšší** teplota dává větší rozmanitost a kreativitu.

Můžete také použít:

- `Generate prompt` k vytvoření nového konceptu z jednoduchého popisu
- `Improve prompt` k vylepšení existující výzvy
- `Translate prompt` k překladu polí výzvy

<br/>

> ⚠️ **UPOZORNĚNÍ**<br/>
> Klikněte na `Save` před tím, než kliknete na `Back to Run`. Pokud se vrátíte zpět bez uložení, vaše změny budou ztraceny.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Otestujte výzvu před použitím

Panel testování napravo vám umožňuje vyzkoušet si výzvu se vzorovým textem, než ji začnete používat v běžné práci.

To je užitečné v těchto případech:

- když vytváříte novou výzvu
- když porovnáváte dvě verze výzvy
- když chcete zkontrolovat tón, délku nebo formát výstupu

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Uložené výzvy můžete exportovat a importovat v části [**Nastavení** > **Transformovat**](#transform-settings).

Když použijete **Vygenerovat výzvu**, **Vylepšit výzvu** nebo **Přeložit výzvu** v editoru výzev, nabízí režim **Snadný** stejný výběr dovedností jako Překlad a Přepsání; režim **Pokročilý** používá seznam modelů.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Přehled

Použijte **Přehled**, abyste viděli, jak hodně aplikaci používáte a kolik vás to stojí (pro placené modely).

![Dashboard summary](../images/screenshots/cs/dashboard-summary.png)

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Pokud používáte pouze **zdarma** modely, mohou být **náklady** nulové a ukazatele zaměřené na náklady mohou být prázdné. Karta **Souhrn** stále zobrazuje počty volání pro překlad, přepsání a transformaci, pokud došlo k aktivitě ve vybraném období.

<br/>

<a id="filter-the-data"></a>
### Filtrování dat

Pomocí tlačítek filtru nahoře změňte časové období.

![Dashboard filters](../images/screenshots/cs/dashboard-filter.png)

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Filtrování podle **Uživatele** je ve webové verzi viditelné pouze pro správce. Běžní uživatelé tento filtr nevidí a v desktopové aplikaci není k dispozici.

<br/>

<a id="dashboard-tabs"></a>
### Karty přehledu

- **Souhrn** zobrazuje karty s klíčovými ukazateli výkonu: celkové náklady, použité modely, počty volání a náklady podle režimu (včetně podílu na celkovém počtu volání), průměrné náklady na volání, průměrné TPS a tři nejčastěji používané modely podle počtu volání.
- **Podle modelu** uvádí každý model s celkovým počtem volání, celkovými náklady a průměrným TPS; rozbalením řádku získáte rozdělení podle překladu, přepsání a transformace.
- **Všechny volání** zobrazuje kompletní protokol volání (stránkování na širokých rozloženích, karty na úzkých obrazovkách) a umožňuje jeho export.

<br/>

<a id="export-data"></a>
### Export dat

Data z tabulek přehledu lze exportovat ve formátech:

- **JSON**
- **CSV**
- **XLSX**

To je užitečné, pokud chcete provést kontrolu aktivity mimo aplikaci nebo sdílet sestavu.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Odstranění uložených záznamů pro model

V části **Podle modelu** nebo **Všechny volání** můžete odstranit uložené záznamy pro model kliknutím na ikonu „koše“.

> ⚠️ **UPOZORNĚNÍ**<br/>
> Odstranění uložených záznamů nelze vrátit zpět. Používejte to pouze v případě, že jste si jisti, že danou historii již nepotřebujete.

Chcete-li odstranit všechna data nebo záznamy na základě jejich stáří, přejděte do části [**Nastavení** > **Sledování nákladů**](#cost-tracking). Zde naleznete možnosti pro odstranění všech uložených dat nebo pouze dat starších než určité datum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Historie

Kliknutím na **Historie** zobrazíte přehled vašich akcí v aplikaci **Transrewrt**, včetně vstupu a výstupu každé operace.

![History page](../images/screenshots/cs/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrování historie

**Historie** používá stejné filtry časového rozsahu jako stránka **Přehled**.

![Dashboard filters](../images/screenshots/cs/dashboard-filter.png)

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Ve **webové aplikaci** vidí každý (včetně správců) pouze svou vlastní historii spuštění. Filtr **Uživatel** na stránce **Přehled** slouží správcům k přehledu využití a nákladů napříč účty; nevztahuje se na **Historii**.

<br/>

<a id="export-history-data"></a>
### Export dat historie

Stránka historie umožňuje exportovat filtrovaná data do formátů:

- **JSON**
- **CSV**
- **XLSX**

To je užitečné, pokud chcete provést kontrolu aktivity mimo aplikaci nebo sdílet sestavu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Nastavení

Otevřete **Nastavení** na bočním panelu a přizpůsobte chování aplikace.

Dostupné karty závisí na platformě a vaší roli:

| Karta            | Desktop | Web (správce) | Web (běžný uživatel) | Poznámky                                      |
  |------------------|:-------:|:-------------:|:---------------------:|------------------------------------------------|
  | Obecné nastavení |   ano   |      ano      |         ano           | Zahrnuje **AI zkušenost** (Snadný / Pokročilý) |
  | Modely           |   ano   |      ano      |         ano           | Pouze pokud je **AI zkušenost** nastavena na **Pokročilý** |
  | Jazyky         |   ano   |     ano     |        ano         | |
  | Sledování nákladů     |   ano   |     ano     |         -          | |
  | Transformovat         |   ano   |     ano     |        ano         | Hromadný import/export transformačních výzev |
  | Uživatelé             |    -    |     ano     |         -          | |
  | Nastavení API        |   ano   |     ano     |         -          | |
  | O aplikaci             |   ano   |     ano     |        ano         | |

V režimu **Snadný** se výběr modelu provádí prostřednictvím dovedností na panelu nástrojů a **Poskytovatele** v Obecném nastavení; karta **Modely** je skrytá.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Ve webové verzi má každý uživatel svou vlastní konfiguraci. Nastavení jako AI zkušenost, poskytovatel, vybrané modely nebo dovednosti, jazyky, obecné možnosti a transformační výzvy jsou uloženy pro každého uživatele zvlášť. Změny, které provedete, neovlivní ostatní uživatele.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Obecné nastavení

Použijte **Obecné nastavení** k ovládání chování při psaní, zda jsou ukládány podrobnosti spuštění pro **Historii**, vzhledu a způsobu výběru AI pro Překlad, Přepsání a Transformaci.

**AI zkušenost**

- **Snadný** (výchozí): vyberte **Poskytovatele** (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras nebo Ollama). Cloudoví poskytovatelé používají přednastavené sady dovedností na panelu nástrojů. **Ollama** uvádí modely nainstalované na vašem počítači namísto dovedností.
- **Pokročilý**: vybírejte jednotlivé modely na panelu nástrojů; seznam spravujte v části [**Nastavení** > **Modely**](#models).

Ve **webové aplikaci** závisí, které poskytovatele vidíte, na nastavených klíčích API v prostředí serveru. V **desktopové aplikaci** nakonfigurujte klíče v části [**Nastavení API**](#api-config).

**Chování**

- **Chování pro ENTER** určuje, zda `Enter` spustí úlohu nebo vloží nový řádek.
- **Automatický překlad při vkládání** spustí překlad ihned po vložení textu.
- **Automatické kopírování výsledku do schránky** automaticky zkopíruje úspěšné výsledky.
- **Překlad v reálném čase (během psaní)** překládá text během psaní.
- **Časový limit (ms)** nastavuje dobu čekání pro překlad v reálném čase.

**Historie**

- **Uchovávat historii spuštění** určuje, zda se pro každý překlad, přepsání a transformaci ukládají **vstupní a výstupní text** pro zobrazení [**Historie**](#history) na postranním panelu. Vypnutí vyžaduje potvrzení; pokud potvrdíte, uložený text historie bude odstraněn z databáze. Pokud je popisek označen jako *zakázáno správcem*, je ve vaší instalaci nastaveno `HISTORY_DISABLED` v prostředí (viz [README](README.cs.md#configuration-and-environment)); nemůžete historii znovu zapnout přes uživatelské rozhraní.
- **Smazat historická data** vám umožňuje odstranit uložený text podle stáří (např. starší než několik měsíců nebo **všechna data (vymazat)**) pomocí **Smazat data**. To ovlivňuje pouze uložený text spuštění pro zobrazení **Historie**; **neodstraňuje** náklady ani celkové údaje o využití. Chcete-li odstranit nebo zkrátit **nákladová** data, použijte [**Nastavení** > **Sledování nákladů**](#cost-tracking).

**Vzhled**

- **Zobrazovat informace o nákladech u akcí** ovládá zobrazení nákladů za operaci (pokud jsou k dispozici) a celkových nákladů na panelech výstupu pro Překlad, Přepsání a Transformaci.
- **Desetinná místa pro náklady** mění způsob zobrazení desetinných míst nákladů.
- **Pouze web:** **zobrazit okraj kolem aplikace** přidává dodatečný prostor kolem rozhraní.
- **Rodina písem** mění písmo v textových panelech.
- **Velikost** mění velikost písma.

**Zálohování konfigurace**

- **Zahrnout data o využití do zálohy** – pokud je povoleno, obsahuje ZIP také historii spuštění a data volání API.
- **Zálohovat konfiguraci** – vytvoří jeden soubor ZIP (ve výchozím nastavení `transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` ve formátu UTC) s `config.json`, `state.json`, volitelným šifrovacím klíčem, uživateli, preferencemi, vlastními výzvami a daty o využití, pokud jste to povolili. Po úspěšné záloze se zobrazí potvrzení s názvem uloženého souboru.
- **Obnovit ze zálohy** – nejprve otevře **potvrzovací dialog**. Vyberte soubor zálohy ZIP v dialogu (**Procházet** / výběr souboru nebo přetažení, pokud je podporováno) a poté zkontrolujte možnosti:
  - **Obnovit data o využití** – importuje data o využití/historii ze souboru ZIP, pokud byla záloha vytvořena s daty o využití; ponechte vypnuté, pokud chcete pouze nastavení a výzvy.
  - **Vymazat stará data o využití před obnovením** – odstraní stávající data o využití/historii v této instalaci před použitím zálohy (volitelné; použijte, pokud chcete čistou náhradu).

Zálohy vytvořené ve webové nebo desktopové verzi lze obnovit i v druhé verzi. Při obnově desktopové zálohy ve webové verzi budou data obnovena pro uživatele správce.

<br/>

<a id="models"></a>
### Modely

Tato karta je k dispozici pouze v případě, že je v části [**Obecné nastavení**](#general-settings) nastavena možnost **AI zkušenost** na **Pokročilý**. Pomocí **Nastavení** > **Modely** vyberte, které modely se zobrazí na panelu nástrojů.

![Settings Models tab](../images/screenshots/cs/settings-models.png)

Stránka obsahuje dva seznamy:

- **Dostupné modely** vlevo
- **Vybrané modely** vpravo

Užitečné ovládací prvky zahrnují:

- **Hledat modely...** pro vyhledání modelu podle názvu
- **Poskytovatel** pro omezení seznamu na jeden modul (OpenRouter, OpenAI, Ollama, …)
- **Pouze zdarma** pro zobrazení pouze bezplatných modelů
- **Obnovit** pro opětovné načtení seznamu
- **Rozbalit vše** a **Sbalit vše** při řazení podle poskytovatele

ID modelů obsahují předponu poskytovatele (například `openrouter/…` vs `openai/…`). Odznaky jako **OpenAI (OpenRouter)** vs **OpenAI (přímý)** ukazují, jak je provoz směrován.

> ℹ️ **POZNÁMKA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) je směrovací model, nikoli obecný chatovací model: jeho odpověď je JSON, který popisuje těla požadavků OpenRouter API (například pole `requests` s `model` a `messages`). Pokud jej použijete pro **Překlad**, **Přepsat** nebo **Transformovat**, panel výstupu zobrazí tento JSON namísto hotového textu. Pro tyto úkoly zvolte normální textový model. Viz [stránku modelu Body Builder](https://openrouter.ai/openrouter/bodybuilder) na OpenRouter.

Akce:

- Chcete-li přidat model, klikněte na **Přidat** nebo kamkoli do položky.

- Chcete-li model odebrat, klikněte na **X** vedle něj v části **Vybrané modely** nebo na **Vybráno** v položce Dostupné modely.

- Chcete-li vymazat seznam, klikněte na **Zrušit výběr všech**. Požadovaný bezplatný model zůstane v seznamu.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Pokud nechcete okamžitě přidávat kredity na OpenRouter, začněte tím, že povolíte **Pouze zdarma** a vyberete bezplatné modely (není vyžadována platební karta). Můžete také použít Ollama ke spouštění modelů lokálně bez jakéhokoli klíče API.

<br/>

<a id="languages"></a>
### Jazyky

Použijte **Nastavení** > **Jazyky** k uspořádání seznamů jazyků používaných v aplikaci.

- **Nejčastější jazyky** jsou připíchnuty v horní části seznamů jazyků v **Překladu** a **Transformaci**.
- **Vlastní jazyk** vám umožňuje přidat jazyk, který není v vestavěném seznamu.

Pokud přidáte vlastní jazyk, zobrazí se ve výběru jazyků spolu s vestavěnými možnostmi.

<br/>

<a id="cost-tracking"></a>
### Sledování nákladů

Použijte **Nastavení** > **Sledování nákladů** ke správě informací o nákladech.

- **Celkové náklady** zobrazují běžící součet.
- **Kopírovat hodnotu** zkopíruje celkovou částku do schránky.
- **Obnovit náklady** obnoví uložený součet na nulu.
- **Synchronizovat s využitím klíče API** nastaví celkovou částku tak, aby odpovídala využití hlášenému vaším účtem OpenRouter (pouze OpenRouter).
- **Využití klíče API** zobrazuje podrobnosti o využití OpenRouter, pokud jsou k dispozici.
- **Smazat data o nákladech** odstraní všechna data nebo pouze záznamy starší než vybrané datum.

**Sledování nákladů:** Když používáte modely OpenRouter, aplikace zobrazuje skutečné využití a výdaje na základě informací o nákladech od OpenRouter. Pro všechny ostatní poskytovatele aplikace odhaduje náklady pomocí cen zveřejněných OpenRouter; pokud není cena k dispozici, odhad může být nulový.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> **Všechny údaje o nákladech jsou pouze orientační, nejedná se o oficiální fakturační účty.**

<br/>

> ⚠️ **UPOZORNĚNÍ**<br/>
> Odstranění dat nelze vrátit zpět. Před odstraněním si prosím zazálohujte svá data nebo je exportujte přes [**Historie**](#history)
> nebo [**Přehled** > **Všechny volání**](#dashboard-tabs), jinak budou trvale ztracena.
> Bude také trvale odstraněna veškerá historie vstupů/výstupů související s každým záznamem volání API.

<br/>

<a id="transform-settings"></a>
### Transformovat (karta nastavení)

Pomocí **Nastavení** > **Transformovat** můžete hromadně spravovat výzvy.

Můžete:

- prohlížet uložené výzvy
- odstraňovat výzvy
- importovat výzvy ze souboru
- exportovat výzvy pro zálohování nebo sdílení
- načíst ukázkové výzvy do seznamu výzev

<br/>

<a id="users"></a>
### Uživatelé

Použijte **Uživatelé** ke správě uživatelských účtů ve webové verzi. Můžete přidávat uživatele, aktualizovat jejich údaje, resetovat hesla a odstraňovat účty.

<br/>

<a id="api-config"></a>
### Nastavení API

Podporovaní poskytovatelé jsou: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras a **Ollama** (místní modely přes základní adresu URL). Nakonfigurujte pouze ty poskytovatele, které používáte.

**Webová aplikace: pouze pro správce**

API klíče jsou nastaveny prostřednictvím systémových nebo Dockerových proměnných prostředí – nezadávají se ve webovém uživatelském rozhraní. Tato stránka zobrazuje, u kterých poskytovatelů je klíč nakonfigurován, a umožňuje vám každý otestovat kliknutím na tlačítko `Test`.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Chcete-li změnit API klíč, aktualizujte proměnnou prostředí ve své systémové nebo Dockerové konfiguraci a restartujte server nebo kontejner.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> **Zálohování konfigurace** (viz [**Obecné nastavení** → Zálohování konfigurace](#general-settings)) může vložit **rozbalené** klíče poskytovatelů do souboru `config.json` uvnitř ZIPu. Obnovení tohoto ZIPu **nekopíruje** tyto klíče zpět do konfiguračního souboru serveru – aktuální klíče pocházejí stále z prostředí a stávajícího stavu souboru, jak je popsáno výše.

<br/>

**Desktopová aplikace**

Použijte **Nastavení API** k uložení API klíčů pro každého poskytovatele, kterého používáte. Pro Ollamu zadejte místo API klíče **základní adresu URL**.

<br/>

> 💡 **Tip** <br/>
> Pokud nechcete používat API klíč ani platit za využití služby, můžete [stáhnout Ollamu](https://ollama.com) a spouštět modely (například `translategemma:4b`) lokálně na svém počítači zdarma. Alternativně můžete vytvořit bezplatný účet na OpenRouter (bez platební karty) a využívat jejich zdarma dostupné modely, nebo získat bezplatný API klíč od Cerebras, Google, Groq nebo Mistral AI.

<br/>

- Přidávejte pouze poskytovatele, které potřebujete. V části **Nastavení** > **Modely** každé ID modelu začíná názvem poskytovatele (například `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Chcete-li přidat API klíč, zadejte hodnotu do textového pole a klikněte na `Save`. Chcete-li nahradit stávající klíč, klikněte na `Edit`. Chcete-li ověřit, že klíč funguje, klikněte na `Test`. U základní adresy URL Ollamy vždy klikněte na `Test` a ověřte připojení.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Aktuální hodnotu API klíče nelze zobrazit. Můžete ji pouze nahradit pomocí tlačítka `Edit`.
> API klíče jsou uloženy šifrovaně v konfiguraci.

<br/>

<a id="about"></a>
### O aplikaci

Karta **O aplikaci** zobrazuje:

- název aplikace
- číslo verze
- datum sestavení
- odkaz na úložiště projektu

<br/><br/>

<a id="common-issues"></a>
## Běžné problémy

Pokud něco nefunguje podle očekávání, nejprve zkontrolujte následující body.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikace nepřekládá, nepřepisuje ani netransformuje text

Zkontrolujte, zda:

- vybrali jste **dovednost** (Snadný) nebo **model** (Pokročilý) na panelu nástrojů
- v režimu **Snadný** má [**Nastavení** > **Obecné nastavení**](#general-settings) nastaveného **poskytovatele** s platným klíčem (nebo adresou URL Ollamy) a alespoň jednu dovednost pro tohoto poskytovatele
- v režimu **Pokročilý** je alespoň jeden model uveden v části [**Nastavení** > **Modely**](#models)
- vaše nastavení API funguje

Pokud používáte desktopovou aplikaci:

1. Otevřete [**Nastavení** > **Nastavení API**](#api-config).
2. Zkontrolujte, zda je uložen alespoň jeden klíč API.
3. Klikněte na **Test** vedle poskytovatele, abyste ověřili, že klíč funguje.

<br/>

<a id="the-model-list-is-empty"></a>
### Seznam modelů je prázdný

V režimu **Snadný** otevřete [**Nastavení** > **Obecné nastavení**](#general-settings), ověřte nastavení **Poskytovatele** a přidejte nebo otestujte klíče v části [**Nastavení API**](#api-config) (desktop) nebo požádejte svého správce (web). U **Ollamy** spusťte **Test** na základní adrese URL a ujistěte se, že jsou modely nainstalovány místně.

V režimu **Pokročilý** otevřete [**Nastavení** > **Modely**](#models) a klikněte na **Obnovit**. V případě potřeby vyhledejte model, zapněte možnost **Pouze zdarma** a přidejte modely do části **Vybrané modely**.

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Výsledek je příliš pomalý nebo příliš drahý

Vyzkoušejte jednu nebo více z následujících možností:

- vyberte jiný model
- použijte kratší vstup
- vypněte možnost **Překlad v reálném čase (během psaní)** v části [**Nastavení** > **Obecné nastavení**](#general-settings)
- pro jednoduché úkoly použijte modely zdarma (viz [Modely](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Rozhraní je v nesprávném jazyce

Klikněte na ikonu zeměkoule na [panelu nástrojů](#toolbar) a vyberte požadovaný **Jazyk rozhraní**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Text je příliš malý nebo špatně čitelný

Otevřete [**Nastavení** > **Obecné nastavení**](#general-settings) a změňte:

- **Rodina písma**
- **Velikost**

<br/>

<a id="dashboard-summary-looks-empty"></a>
### Přehled na panelu vypadá prázdně

To je normální, pokud:

- používáte pouze **zdarma dostupné modely** a sledujete údaje o **nákladech** (mohou být nulové); ukazatele počtu volání na kartě **Souhrn** stále potřebují data z vybraného období
- vybraný **časový filtr** nezahrnuje období, kdy byla volání provedena – zkuste **Vše** pro kontrolu

Pokud jsou ukazatele stále nulové i po výběru **Vše**, ověřte, zda se volání zobrazují v části [**Historie**](#history) nebo na kartě **Všechny volání**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Náklady zobrazují „nedostupné“ nebo jsou nesprávné

Pokud používáte modely prostřednictvím **OpenRouter**, aplikace zobrazuje skutečné výdaje hlášené OpenRouter.

U **ostatních poskytovatelů** (OpenAI přímý přístup, Anthropic přímý přístup atd.) jsou náklady odhadovány na základě cenových údajů zveřejněných OpenRouter. Pokud pro model neexistuje odpovídající cena, náklady budou uvedeny jako **nedostupné** a nebudou přičteny k běžícímu celkovému součtu.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Celkové náklady neodpovídají účtu od poskytovatele

Všechny údaje o nákladech v aplikaci jsou pouze **odhad pro informační účely**, ne jedná se o oficiální fakturační údaje.

Chcete-li, aby celková částka lépe odpovídala vašim skutečným výdajům na OpenRouter, otevřete [**Nastavení** > **Sledování nákladů**](#cost-tracking) a klikněte na **Synchronizovat s využitím klíče API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Stránka Historie chybí na bočním panelu

Možnost **Uchovávat historii spuštění** může být vypnutá. Otevřete [**Nastavení** > **Obecné nastavení**](#general-settings) a povolte ji, pokud historie není *zakázána správcem* (`HISTORY_DISABLED` v prostředí – viz [README](README.cs.md#configuration-and-environment)). Zapnutí historie neobnoví dříve smazaný text.

<br/>

<a id="web-app-session-expired"></a>
### Webová aplikace: nečekaně přesměrována na přihlašovací stránku

Vaše relace mohla vypršet. Přihlaste se znovu. Pokud se to děje často, zkontrolujte nastavení doby životnosti relace na serveru.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Webový správce: zapomenuté nebo ztracené heslo

Toto platí pro **lokálně hostovanou webovou aplikaci** (Docker), nikoli pro desktopovou aplikaci (Electron).

- Pokud se může jiný správce stále přihlásit, může otevřít [**Nastavení** > **Uživatelé**](#users), vybrat účet a nastavit tam **nové heslo**.
- Pokud jste **zablokováni**, ale máte **přístup k prostředí shellu** stroje nebo kontejneru, obnovte heslo pomocí nástroje dodávaného s imagí (nahraďte `transrewrt`, pokud změníte výchozí název, a uvozujte heslo, pokud obsahuje mezery nebo speciální znaky):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Výchozí uživatelské jméno správce je `admin`, pokud jste nikdy nevytvořili jiné účty. Pokud zadáte pouze jeden argument, bude považován za nové heslo pro `admin`.

Pokud spouštíte aplikaci z **zdrojového kódu** místo z Dockeru, použijte:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Skript aktualizuje záznam uživatele v databázi SQLite (a může vytvořit uživatele `admin`, pokud chybí). Po obnovení se přihlaste pomocí nového hesla.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Přehled nezobrazuje data pro ostatní uživatele (web)

Pouze **administrátoři** mohou zobrazit data všech uživatelů pomocí filtru **Uživatel**. Běžní uživatelé z důvodu návrhu vidí pouze svou vlastní aktivitu.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Změnil jsem výzvu a ztratil úpravy

Při úpravě výzvy vždy klikněte na **Uložit**, než kliknete na **Zpět na Spustit**.

<br/><br/>

<a id="quick-tips"></a>
## Rychlé tipy

- Začněte s [**Překlad**](#translate), abyste ověřili, že je vaše nastavení funkční, než přejdete k [**Přepsat**](#rewrite) nebo [**Transformovat**](#transform).
- Použijte [**Přepsat**](#rewrite) pro každodenní vylepšování formulací.
- Použijte [**Transformovat**](#transform), když potřebujete opakovatelný pracovní postup pro konkrétní úkol.
- Použijte [**Přehled**](#dashboard), pokud chcete sledovat využití a náklady.
- K zobrazení předchozích operací a jejich úplného vstupního/výstupního textu použijte [**Historie**](#history).
- Pravidelně exportujte výzvy, pokud vytváříte knihovnu výzev, kterou chcete uchovat v bezpečí (viz [Transformovat](#transform)), nebo ji chcete sdílet s ostatními.
- Zůstaňte v režimu **Snadný**, dokud nepotřebujete podrobnou kontrolu nad ID modelů; přejděte do režimu **Pokročilý**, až budete vědět, které modely chcete používat.

<br/><br/>

<a id="disclaimer"></a>
## Zřeknutí se záruk

Názvy produktů a ikony patří jejich příslušným vlastníkům a používají se pouze pro účely identifikace. Tento software není spojen s žádnými z uvedených značek ani jimi není schválen.

<br/><br/>

<a id="license"></a>
## Licence

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
