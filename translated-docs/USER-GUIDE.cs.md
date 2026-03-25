---
translated_at: "2026-03-25T21:09:25.621Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Uživatelská příručka

<br/>

<a id="introduction"></a>
## Úvod

Transrewrt vám pomáhá pracovat s textem třemi hlavními způsoby:

- **Překlad** – převést text z jednoho jazyka do druhého.
- **Přepsání** – přeformulovat text do jiného stylu, např. jasnějšího, stručnějšího nebo formálnějšího.
- **Transformace** – zpracovat text pomocí vlastních pokynů pro umělou inteligenci, kterým říkáme prompty.

<br/>

Tato příručka vysvětluje, jak aplikaci používat, když je již nainstalována a spuštěná. Kroky k instalaci naleznete v hlavním souboru **[README](README.cs.md)**.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Transrewrt je k dispozici jako desktopová aplikace pro Windows a Linux a také jako webová aplikace, kterou si můžete provozovat sami. Tato příručka se zaměřuje na běžné používání aplikace. Pokud něco platí pouze pro jednu verzi, je to jasně označeno.

<small>**Přečtěte si v jiných jazycích:** [English (UK)](USER-GUIDE.cs.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Poznámka k překladům uživatelského rozhraní a dokumentace:** Všechny jazyky rozhraní s výjimkou původního angličtiny (UK) byly přeloženy pomocí modelů umělé inteligence; použitá terminologie může být nepřesná nebo obsahovat chyby.

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
- [Přepsání](#rewrite)
- [Transformace](#transform)
  - [Spouštění existujícího promptu](#run-an-existing-prompt)
  - [Pokud zatím žádné prompty nemáte](#if-you-have-no-prompts-yet)
  - [Rychlé vytvoření promptu](#create-a-prompt-quickly)
  - [Úprava promptu](#edit-a-prompt)
  - [Otestování promptu před použitím](#test-a-prompt-before-using-it)
- [Informační panel](#dashboard)
  - [Filtrování dat](#filter-the-data)
  - [Karty informačního panelu](#dashboard-tabs)
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
  - [Aplikace nepřekládá, nepřepisuje ani netransformuje text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Seznam modelů je prázdný](#the-model-list-is-empty)
  - [Výsledky jsou příliš pomalé nebo drahé](#the-result-is-too-slow-or-too-expensive)
  - [Rozhraní je v nesprávném jazyce](#the-interface-is-in-the-wrong-language)
  - [Text je příliš malý nebo špatně čitelný](#the-text-is-too-small-or-hard-to-read)
  - [Grafy na informačním panelu jsou prázdné](#dashboard-charts-are-empty)
  - [Náklady ukazují „není k dispozici“ nebo se zdají chybné](#cost-shows-not-available-or-seems-wrong)
  - [Celkové náklady neodpovídají fakturaci poskytovatele](#total-cost-does-not-match-my-provider-bill)
  - [Stránka Historie chybí v bočním panelu](#the-history-page-is-missing-from-the-sidebar)
  - [Webová aplikace: neočekávaně přesměrováno na přihlašovací stránku](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Informační panel nezobrazuje data ostatních uživatelů (webová verze)](#dashboard-shows-no-data-for-other-users-web)
  - [Změnil jsem prompt a úpravy jsem ztratil](#i-changed-a-prompt-and-lost-the-edits)
- [Rychlé tipy](#quick-tips)
- [Zřeknutí se odpovědnosti](#disclaimer)
- [Licence](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Než začnete

Pro používání aplikace Transrewrt potřebujete přístup k alespoň jedné AI platformě. Podporované platformy jsou: [OpenRouter](https://openrouter.ai) (která agreguje mnoho modelů), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras a [Ollama](https://ollama.com) pro místní modely.

Nemusíte vybírat placený model, abyste mohli začít. Jakmile přidáte svůj klíč OpenRouter API, aplikace automaticky povolí vestavěnou **bezplatnou** možnost OpenRouter. To vám umožňuje okamžitě začít s překládáním, přepisováním a transformací textu. Alternativně si můžete získat bezplatný klíč API od Cerebras, Google, Groq nebo Mistral AI.

Jednoduše řečeno:

- **Model** je AI jádro, které vykonává práci. Modely jsou uvedeny s **předponou poskytovatele** (například `openrouter/…`, `openai/…`, `ollama/…`).
- **Klíč API** (nebo ve případě Ollamy **základní adresa URL**) je prostředek, jak aplikace komunikuje s daným poskytovatelem.

Pokud používáte **desktopovou aplikaci**, přidejte klíče na stránce [**Nastavení** > **Konfigurace API**](#api-config) pro každého poskytovatele, kterého chcete používat. Pokud chcete používat pouze OpenRouter, viz dále [Jak získat klíč API](#how-to-get-an-api-key-desktop-app). Pokud nechcete používat klíč API, můžete nainstalovat Ollamu (z [ollama.com](https://ollama.com)) a používat místní modely, například `translategemma:4b`.

Pokud používáte **webovou verzi**, správce serveru nakonfiguruje poskytovatele pomocí proměnných prostředí, takže nemůžete přímo zadat klíče API v aplikaci.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Jak získat bezplatný klíč OpenRouter API (desktopová aplikace)

Pokud používáte desktopovou aplikaci, postupujte následovně:

1. Přejděte na stránku [OpenRouter](https://openrouter.ai) ve svém webovém prohlížeči.
2. Vytvořte si účet nebo se přihlaste.
3. Otevřete stránku [Klíče](https://openrouter.ai/keys).
4. Klikněte na tlačítko pro vytvoření nového klíče API.
5. Dejte klíči název, abyste jej mohli později rozpoznat.
6. Zkopírujte nový klíč API.
7. Vraťte se do aplikace Transrewrt a otevřete **Nastavení** > **Konfigurace API**.
8. Vložte klíč do pole **OpenRouter klíč API** (v sekci **Nastavení** > **Konfigurace API**).
9. Klikněte na **Otestovat klíč OpenRouter**, abyste ověřili jeho funkčnost.

<br/><br/>

<a id="getting-started"></a>
## Začínáme

Pokud používáte Transrewrt poprvé, postupujte v tomto pořadí:

1. Otevřete aplikaci.
2. Pokud je to potřeba, pomocí ikony koule vyberte svůj **jazyk rozhraní**.
3. Pokud používáte **desktopovou aplikaci**, otevřete [**Nastavení** > **Konfigurace API**](#api-config), přidejte klíč API alespoň pro jednoho poskytovatele (např. OpenRouter) a kliknutím na **Test** ověřte, že vše funguje.
4. Otevřete [**Nastavení** > **Modely**](#models) a přidejte jeden nebo více modelů do sekce **Vybrané modely**.
5. Otevřete [**Nastavení** > **Jazyky**](#languages) a vyberte své **Nejdůležitější jazyky**, pokud chcete, aby se vaše nejpoužívanější jazyky zobrazovaly na prvních místech.
6. Přejděte na **Překlad** a proveďte jednoduchý překlad, abyste ověřili, že vše funguje.
7. Jakmile bude vše správně fungovat, zkuste **Přepsat** a následně **Transformovat**.

Toto pořadí je důležité. Zabraňuje tak nejčastějšímu problému při prvním použití: spuštění úkolu dříve, než má aplikace funkční připojení přes API nebo vybraný model.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Hlavní části okna

Aplikace je rozdělena do tří hlavních oblastí:

- Levý **postranní panel**.
- Horní **panel nástrojů**.
- Středová **pracovní oblast**.

<br/>

<a id="sidebar"></a>
### Postranní panel

Postranní panel použijete k pohybu v aplikaci. Panel můžete skrýt, abyste získali více prostoru, stačí kliknout na ikonu vedle loga aplikace.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/cs/sidebar.png" alt="Panel aplikace" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Překlad</strong> otevře pracovní prostor pro překlad.</li><br/>
        <li><strong>Přepsat</strong> otevře pracovní prostor pro přepisování textu.</li><br/>
        <li><strong>Transformace</strong> otevře pracovní prostor pro vlastní výzvy (prompty).</li><br/>
        <li><strong>Dashboard</strong> zobrazuje informace o využití a nákladech.</li><br/>
        <li><strong>Nastavení</strong> otevře panel nastavení.</li><br/>
        <li><strong>Historie</strong> ukazuje historii použití včetně vstupního a výstupního textu.</li><br/>
        <li><strong>Uživatel</strong> zobrazuje uživatelské jméno přihlášeného uživatele (pouze na webu).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Panel nástrojů

Panel nástrojů se mírně liší v závislosti na tom, kde se v aplikaci nacházíte.

- Vlevo zobrazuje název aktuální stránky.
- Vpravo zobrazuje **výběr modelu** a ovládání **jazyka rozhraní**.

**Výběr modelu** vám umožňuje zvolit, který AI model použijete pro aktuální úlohu.

  ![Výběr modelu](../images/screenshots/cs/model-selector.png)

Některé bezplatné modely nemusí být stále dostupné – občas jsou nedostupné nebo mají omezené využití. Pokud k tomu dojde, aplikace tento model automaticky odstraní ze seznamu dostupných modelů. Chcete-li ovlivnit, které modely se zobrazují, přejděte do [**Nastavení** > **Modely**](#models) a upravte seznam modelů. 
Nastavení modelu můžete otevřít také kliknutím na ikonu poskytovatele vlevo od názvu modelu v panelu nástrojů.

<br/>

**Ikona zeměkoule + kód jazyka** změní jazyk rozhraní aplikace, například nabídek a tlačítek. **Nemění** jazyky používané v nástroji **Překlad**.

  ![Výběr jazyka rozhraní](../images/screenshots/cs/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Vstupní a výstupní panely

Většina pracovních prostorů používá levý **Vstupní** panel a pravý **Výstupní** panel.

Každý panel navíc zobrazuje:

| **Vstup**                                                          | **Výstup**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Počet znaků <br/>- Počet slov <br/>- Počet odstavců      <br/> | - Trvání úlohy<br/>- **TPS** (tokenů za sekundu)<br/>- Počty znaků, slov a odstavců<br/>- Použitý model |


Pokud se zajímáte o technické termíny:

- **Token** znamená malý úsek textu. Můžete si jej představit jako část slova nebo krátké slovo.
- **TPS** značí počet těchto textových úseků, které model zpracoval každou sekundu.

<br/>

Můžete také sledovat náklady jednotlivých operací (pokud jsou k dispozici) a celkové náklady, a to povolením možnosti `Zobrazit informace o nákladech u akcí` v části [**Nastavení** > **Obecná nastavení**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Překlad

Použijte **Překlad**, když chcete převést text z jednoho jazyka do druhého.

![Pracovní prostor Překladu](../images/screenshots/cs/translate.png)

<br/>

<a id="translate-text"></a>
### Překlad textu

1. Otevřete **Překlad**.
2. Vyberte jazyk v položce **Z**.
3. Vyberte jazyk v položce **Do**.
4. Vyberte model v panelu nástrojů.
5. Napište nebo vložte text do **Vstupu**.
6. Klikněte na **Přeložit**.
7. Přečtěte si výsledek ve **Výstupu**.
8. Použijte tlačítko pro kopírování, chcete-li výsledek zkopírovat.

<br/>

<a id="language-selection"></a>
### Výběr jazyka

- **Z** může být konkrétní jazyk nebo možnost **Detekovat jazyk**.
- **Do** je jazyk, do kterého chcete výsledek překladu.

Vaše vybrané **Nejčastější jazyky** se zobrazí v horní části seznamu. Můžete je nastavit v části [**Nastavení** > **Jazyky**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Užitečná nastavení překladu

V části [**Nastavení** > **Obecná nastavení**](#general-settings) můžete změnit chování překladu:

- **Automatický překlad po vložení** spustí překlad ihned po vložení textu.
- **Automatické kopírování výsledku do schránky** automaticky zkopíruje výsledek po úspěšném dokončení.
- **Překlad v reálném čase (během psaní)** spouští překlady během psaní.
- **Časový limit (ms)** určuje, jak dlouho aplikace čeká před spuštěním překladu v reálném čase.
- **Enter** určuje, co se stane po stisknutí klávesy `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Přepsání

Použijte **Přepsání**, když chcete zlepšit formulaci textu bez změny hlavního významu.

![Pracovní prostor Přepsání](../images/screenshots/cs/rewrite.png)

To je užitečné pro:

- opravu pravopisu a gramatiky
- zpřehlednění textu
- formálnější nebo neformálnější styl
- zkrácení nebo rozšíření textu
- udělání textu techničtějšího

<br/>

> 💡 **TIP**<br/>
> Pokud používáte režim "**Kontrola pravopisu a gramatiky**", zobrazí se ve výstupním panelu tlačítko `Zobrazit změny`.
> Kliknutím na toto tlačítko přepínáte zobrazení oprav a můžete tak vidět nebo skrýt konkrétní změny ve svém textu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformace

Použijte **Transformaci**, když chcete, aby následoval umělou inteligenci vlastní sadu pokynů.

![Pracovní prostor Transformace](../images/screenshots/cs/transform.png)

Toto je nejpružnější část aplikace. Můžete ji využít například k těmto úkolům:

- shrnutí poznámek
- proměně hrubého textu na dokončený e-mail
- extrakce klíčových bodů
- převodu textu do určitého formátu
- jakékoli jiné vlastní úloze s vstupním textem

<br/>

<a id="run-an-existing-prompt"></a>
### Spuštění existujícího výzvu

1. Otevřete **Transformaci**.
2. Vyberte výzvu ze seznamu výzev.
3. Pokud se zobrazí pole **Cílový** jazyk, zvolte jazyk, pokud jej potřebujete.
4. Do pole **Vstup** napište nebo vložte text.
5. Klikněte na **Transformovat**.
6. Přečtěte si výsledek v části **Výstup**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Pokud zatím nemáte žádné výzvy

Pokud je váš seznam výzev prázdný, klikněte na **Načíst ukázkové výzvy**. Tím se přidají vestavěné příklady, abyste mohli začít rychle.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Ukázkové výzvy jsou poskytovány v angličtině. Po jejich načtení můžete výzvu upravit a využít **Přeložit výzvu**, abyste ji přeložili do svého jazyka.

<br/>

<a id="create-a-prompt-quickly"></a>
### Rychlé vytvoření výzvy

Nejrychlejší způsob, jak vytvořit výzvu:

1. Klikněte na **Nový výzva**.
2. Klikněte na **Vygenerovat výzvu**.
3. Popište, co má výzva dělat.
4. Vyberte model.
5. Nechte aplikaci vytvořit návrh pro vás.
6. Zkontrolujte návrh a klikněte na **Uložit**.

![Vygenerovat výzvu](../images/screenshots/cs/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Úprava výzvy

Při vytváření nebo úpravě výzvy se vlevo zobrazí editor a vpravo panel pro testování.

![Editor výzvy Transformace](../images/screenshots/cs/transform-prompt-edit.png)

Hlavní pole jsou:

- **Název výzvy**: název zobrazený v seznamu výzev.
- **Pokyň pro výzvu (nepovinné)**: krátká nápověda zobrazená uživateli při spouštění výzvy.
- **Role modelu**: celková role přiřazená umělé inteligenci, např. „Jsi užitečný asistent.“
- **Instrukce modelu (jedna na řádek)**: konkrétní pravidla, která má umělá inteligence dodržovat.
- **Popis výstupu**: krátké slovo popisující výsledek, např. „shrnutí“ nebo „přepsání“.
- **Teplota (0,0 → 1,0)**: způsob chování modelu; viz níže.
- **Poptat cílový jazyk**: přidá výběr cílového jazyka při spuštění výzvy.

Pokud je pro vás technický termín **Teplota** nový, představte si to následovně:

- **Nižší** teplota dává stabilnější, předvídatelnější výsledky.
- **Vyšší** teplota zvyšuje rozmanitost a kreativitu.

Dále můžete použít také:

- **`Vygenerovat výzvu`** k vytvoření nového návrhu z jednoduchého popisu
- **`Vylepšit výzvu`** k zdokonalení stávající výzvy
- **`Přeložit výzvu`** k překladu polí výzvy

<br/>

> ⚠️ **VAROVÁNÍ**<br/>
> Klikněte na **`Uložit`**, než kliknete na **`Zpět na spuštění`**. Pokud vrátíte bez uložení, změny budou ztraceny.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Otestujte si výzvu před použitím

Testovací panel napravo vám umožňuje vyzkoušet výzvu na ukázkovém textu, než ji použijete v běžné práci.

To se hodí, když:

- vytváříte novou výzvu
- porovnáváte dvě verze výzvy
- chcete zkontrolovat tón, délku nebo formát výstupu

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Uložené výzvy můžete exportovat a importovat v části [**Nastavení** > **Výzvy pro transformaci**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Nástěnka

Použijte **Nástěnku**, chcete-li sledovat, jak moc aplikaci používáte, a kolik vás to stojí (pro placené modely).

![Přehled nástěnky](../images/screenshots/cs/dashboard-summary.png)


<br/>

> ℹ️ **POZNÁMKA**<br/>
> Pokud používáte pouze bezplatné modely, grafy související s náklady budou prázdné. 

<br/>

<a id="filter-the-data"></a>
### Filtrování dat

Pomocí tlačítek filtru nahoře změňte časové období.

![Filtry nástěnky](../images/screenshots/cs/dashboard-filter.png)

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Filtr **Uživatel** je ve webové verzi viditelný pouze pro administrátory. Běžní uživatelé tento filtr neuvidí a ve verzi pro desktop není k dispozici.

<br/>

<a id="dashboard-tabs"></a>

### Karty nástěnky

- **Souhrn** vám poskytne přehled využití a nákladů.
- **Podle využití** rozděluje aktivitu podle jazyka překladu, režimu přepisování a vstupních výzev.
- **Podle modelu** ukazuje, které modely jste použili a kolik vás stály.
- **Podle dne** zobrazuje denní celky.
- **Všechna volání** zobrazuje úplný záznam volání a umožňuje jej exportovat.

<br/>

<a id="export-data"></a>
### Export dat

Z tabulek nástěnky je možné exportovat data ve formátech:

- **JSON**
- **CSV**
- **XLSX**

Toto je užitečné, chcete-li sledovat činnost mimo aplikaci nebo sdílet zprávu.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Smazání uložených záznamů pro model

Na kartě **Podle modelu** nebo **Všechna volání** můžete odstranit uložené záznamy pro daný model kliknutím na ikonu „koše“.

> ⚠️ **VAROVÁNÍ**<br/>
> Mazání uložených záznamů nelze vrátit zpět. Používejte to pouze, pokud jste si jisti, že historii již nepotřebujete.

Chcete-li smazat všechna data nebo odstranit záznamy podle jejich stáří, přejděte do [**Nastavení** > **Sledování nákladů**](#cost-tracking). Tam najdete možnosti smazat všechna uložená data nebo pouze data starší než určité datum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Historie

Kliknutím na **Historii** zobrazíte záznam vašich akcí v aplikaci **Transrewrt**, včetně vstupu a výstupu každé operace.

![Stránka Historie](../images/screenshots/cs/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrování dat

**Historie** používá stejné filtry jako stránka **Nástěnka**. Pomocí nich můžete vybrat časové rozpětí.

![Filtry nástěnky](../images/screenshots/cs/dashboard-filter.png)

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Filtr **Uživatel** je ve webové verzi viditelný pouze pro administrátory. Běžní uživatelé tento filtr neuvidí a v desktopové aplikaci není k dispozici.

<br/>

<a id="export-history-data"></a>
### Export historických dat

Stránka Historie umožňuje exportovat filtrovaná data ve formátech:

- **JSON**
- **CSV**
- **XLSX**

To je užitečné, chcete-li kontrolu činnosti provádět mimo aplikaci nebo sdílet zprávu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Nastavení

Otevřete **Nastavení** z bočního panelu a upravte chování aplikace.

Dostupné karty závisí na platformě a vaší roli:

  | Karta               | Desktop | Web (admin) | Web (běžný uživatel) |
  |-------------------|:-------::|:----------------:------------------:|
  | Obecná nastavení  |   ano   |     ano     |        ano         |
  | Modely            |   ano   |     ano     |        ano         |
  | Jazyky            |   ano   |     ano     |        ano         |
  | Sledování nákladů     |   ano   |     ano     |         —          |
  | Vstupní výzvy |   ano   |     ano     |        ano         |
  | Uživatelé             |    —    |     ano     |         —          |
  | Nastavení API        |   ano   |     ano     |         —          |
  | O aplikaci             |   ano   |     ano     |        ano         |

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Ve webové verzi má každý uživatel své vlastní nastavení. Nastavení, jako jsou vybrané modely, jazyky, obecné možnosti a transformační výzvy, jsou uložena pro každého uživatele zvlášť. Změny, které provedete, neovlivní ostatní uživatele.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Obecná nastavení

Pomocí **Obecná nastavení** ovládejte chování při psaní, zda jsou pro **Historii** ukládány podrobnosti o provedení a vzhled aplikace.

**Chování**

- **Chování klávesy ENTER** umožňuje zvolit, zda `Enter` spustí úlohu nebo vloží nový řádek.
- **Automatický překlad po vložení** spustí překlad hned po vložení textu.
- **Automatické kopírování výsledku do schránky** automaticky kopíruje úspěšné výsledky.
- **Překlad v reálném čase (během psaní)** překládá text, zatímco píšete.
- **Časový limit (ms)** nastavuje prodlevu pro překlad v reálném čase.

**Historie**

- **Zachovat historii spuštění** určuje, zda jsou pro jednotlivé překlady, přepisování a transformace ukládány **vstupní a výstupní texty** do zobrazení [**Historie**](#history) v bočním panelu. Při vypnutí je vyžadováno potvrzení; pokud potvrdíte, texty uložené v historii jsou odstraně z databáze.
- **Smazání historických dat** umožňuje odstranit uložený text podle stáří (např. starší než několik měsíců nebo **všechna data (vymazat)**) pomocí **Smazat data**. Toto ovlivňuje pouze uložený text pro zobrazení **Historie**; **neodstraňuje** takto údaje o nákladech nebo celkové využití. Pro odstranění nebo vyčištění dat o **nákladech** použijte [**Nastavení** > **Sledování nákladů**](#cost-tracking).

**Vzhled**

- **Zobrazit informace o nákladech u akcí** řídí zobrazení nákladů za operaci (pokud jsou k dispozici) a celkového nákladu na výstupních panelech pro Přeložit, Přepsat a Transformovat.
- **Počet desetinných míst ceny** mění počet desetinných míst zobrazovaných u ceny.
- **Pouze web:** **zobrazit okraj kolem aplikace** přidává dodatečný prostor kolem rozhraní.
- **Typ písma** změní písmo v textových panelech.
- **Velikost** mění velikost písma.


<br/>

<a id="models"></a>

### Modely

Použijte **Nastavení** > **Modely** k výběru modelů, které se zobrazí na panelu nástrojů.

![Karta modely v nastavení](../images/screenshots/cs/settings-models.png)

Stránka obsahuje dva seznamy:

- **Dostupné modely** vlevo
- **Vybrané modely** vpravo

Užitečné ovládací prvky zahrnují:

- **Vyhledat modely...** pro nalezení modelu podle názvu
- **Štítky poskytovatelů** pro omezení seznamu na jednoho poskytovatele (OpenRouter, OpenAI, Ollama, …)
- **Pouze zdarma** pro zobrazení jen bezplatných modelů
- **Obnovit** k opětovnému načtení seznamu
- **Rozbalit vše** a **Sbalit vše** při řazení podle poskytovatele

ID modelů obsahují předponu poskytovatele (např. `openrouter/…` vs. `openai/…`). Odlišné nálepky, např. **OpenAI (OpenRouter)** vs. **OpenAI (přímo)**, ukazují způsob směrování provozu.

> ℹ️ **POZNÁMKA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) je směrovací model, ne obecný chatovací model: jeho odpověď je ve formátu JSON a popisuje těla požadavků API OpenRouter (např. pole `requests` s `model` a `messages`). Pokud jej použijete pro funkce **Překlad**, **Přepisování** nebo **Transformaci**, výstupní panel zobrazí JSON místo hotového textu. Pro tyto úkoly zvolte normální textový model. Viz [stránka modelu Body Builder](https://openrouter.ai/openrouter/bodybuilder) na OpenRouter.

Akce:

 - Chcete-li model přidat, klikněte na **Přidat** nebo kamkoli do položky.

 - Chcete-li model odebrat, klikněte na **X** vedle něj v seznamu **Vybrané modely** nebo na možnost **Vybráno** u položky v seznamu dostupných modelů.

 - Chcete-li seznam vymazat, klikněte na **Zrušit všechny výběry**. Povinný bezplatný model v seznamu zůstane.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Pokud si nepřejete okamžitě přidávat kredity na OpenRouter, začněte zapnutím volby **Pouze zdarma** a výběrem bezplatných modelů (bez platby kartou). Modely také můžete spouštět lokálně přes Ollama, aniž byste potřebovali klíč API.

<br/>

<a id="languages"></a>
### Jazyky

Použijte **Nastavení** > **Jazyky** ke správě seznamů jazyků používaných v aplikaci.

- **Nejčastější jazyky** jsou připnuty těsně nad horní část seznamů jazyků v režimech **Překlad** a **Transformace**.
- **Vlastní jazyk** umožňuje přidat jazyk, který není ve vestavěném seznamu.

Pokud přidáte vlastní jazyk, zobrazí se v nabídkách výběru jazyků spolu se zbývajícími možnostmi.

<br/>

<a id="cost-tracking"></a>
### Sledování nákladů

Použijte **Nastavení** > **Sledování nákladů** ke správě informací o nákladech.

- **Celkové náklady** zobrazují aktuální součet.
- **Kopírovat hodnotu** zkopíruje celkovou částku do schránky.
- **Resetovat náklady** nastaví uložený součet na nulu.
- **Synchronizovat s využitím klíče API** nastaví celkový součet podle údajů o využití hlášených vaším účtem OpenRouter (pouze OpenRouter).
- **Využití klíče API** zobrazí podrobnosti o využití OpenRouter, pokud jsou k dispozici.
- **Smazat data o nákladech** odstraní všechna data, nebo pouze záznamy starší než zvolené datum.


**Sledování nákladů:** Když používáte modely OpenRouter, aplikace zobrazuje skutečné využití a výdaje založené na informacích o nákladech od OpenRouter. Pro všechny ostatní poskytovatele aplikace odhaduje náklady na základě cen zveřejněných OpenRouter; pokud není cena k dispozici, odhad může být nulový.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> **Všechny údaje o nákladech jsou pouze orientační a slouží pouze pro informační účely, nejedná se o oficiální fakturační účet.**


<br/>

> ⚠️ **VAROVÁNÍ**<br/>
> Smazání dat nelze vrátit zpět. Před vymazáním si prosím zálohujte svá data nebo je exportujte prostřednictvím [**Historie**](#history) 
> nebo [**Nabídky** > **Všechna volání**](#dashboard-tabs), jinak budou trvale ztracena. 
> Spolu s každým záznamem volání API budou smazána také všechna související záznamy vstupních a výstupních dat.

<br/>

<a id="transform-prompts"></a>
### Transformační prompty

Použijte **Nastavení** > **Transformační prompty** k hromadné správě výzev.

Můžete:

- prohlížet uložené prompty
- odstraňovat prompty
- importovat prompty ze souboru
- exportovat prompty pro zálohu nebo sdílení

<br/>

<a id="users"></a>
### Uživatelé

Použijte funkci **Uživatelé** ke správě uživatelských účtů ve webové verzi. Můžete přidávat uživatele, aktualizovat jejich údaje, resetovat hesla a mazat účty.

<br/>

<a id="api-config"></a>
### Konfigurace API

Podporovaní poskytovatelé jsou: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras a **Ollama** (lokální modely přes základní URL). Konfiguruje se pouze poskytovatel, kterého používáte.

**Webová aplikace: pouze pro správce**

Klíče API jsou nakonfigurovány prostřednictvím systémových nebo Docker proměnných prostředí – nejsou zadávány do webového rozhraní. Tato stránka ukazuje, pro které poskytovatele je klíč nakonfigurován, a umožňuje jej otestovat kliknutím na tlačítko **`Test`**.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Chcete-li změnit klíč API, aktualizujte příslušnou proměnnou prostředí ve svém systému nebo v konfiguraci Dockeru a restartujte server nebo kontejner.

<br/>

**Desktopová aplikace**

Použijte **Nastavení API** k uložení klíčů API pro každého poskytovatele, kterého používáte. Pro Ollama zadejte namísto klíče API **základní URL**.

<br/>

> 💡 **Tip** <br/>
> Pokud nechcete používat klíč API ani platit za využití, můžete [stáhnout Ollama](https://ollama.com) a lokálně spouštět modely (jako např. `translategemma:4b`) zdarma. Alternativně můžete vytvořit bezplatný účet OpenRouter (bez platební karty) pro využití jejich bezplatných modelů nebo získat bezplatný klíč API od Cerebras, Google, Groq nebo Mistral AI.

<br/>

- Přidejte pouze ty poskytovatele, které potřebujete. V části **Nastavení** > **Modely** začíná každé ID modelu názvem poskytovatele (např. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Chcete-li přidat klíč API, zadejte hodnotu do textového pole a klikněte na **`Uložit`**. Chcete-li nahradit stávající klíč, klikněte na **`Upravit`**. K ověření, že klíč funguje, klikněte na **`Test`**. U základní URL pro Ollama vždy klepněte na **`Test`**, abyste zkontrolovali připojení.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Aktuální hodnotu klíče API nemůžete zobrazit. Můžete jej pouze nahradit pomocí tlačítka **`Upravit`**.
> Klíče API jsou v konfiguraci uloženy šifrovaně.

<br/>

<a id="about"></a>

### O aplikaci

Karta **O aplikaci** zobrazuje:

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
- je správně nastavené vaše API

Pokud používáte desktopovou aplikaci:

1. Otevřete [**Nastavení** > **Konfigurace API**](#api-config).
2. Zkontrolujte, zda je uložen alespoň jeden API klíč.
3. Klikněte na **Test** vedle poskytovatele a ověřte, že klíč funguje.

<br/>

<a id="the-model-list-is-empty"></a>
### Seznam modelů je prázdný

Otevřete [**Nastavení** > **Modely**](#models) a klikněte na **Obnovit**.

V případě potřeby:

- vyhledejte model
- zapněte možnost **Pouze zdarma**
- přidejte jeden nebo více modelů do sekce **Vybrané modely**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Výsledek je příliš pomalý nebo příliš drahý

Zkuste jednu nebo více následujících věcí:

- vyberte jiný model
- použijte kratší vstup
- vypněte možnost **Překlad v reálném čase (během psaní)** v části [**Nastavení** > **Obecná nastavení**](#general-settings)
- pro jednoduché úkoly použijte modely zdarma (viz [Modely](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Rozhraní je v nesprávném jazyce

Klikněte na ikonu zeměkoule na [panelu nástrojů](#toolbar) a vyberte si požadovaný **jazyk rozhraní**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Text je příliš malý nebo špatně čitelný

Otevřete [**Nastavení** > **Obecná nastavení**](#general-settings) a změňte:

- **Typ písma**
- **Velikost**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Grafy na nástěnce jsou prázdné

To je běžné, pokud:

- používáte pouze **modely zdarma** (grafy nákladů budou prázdné)
- vybraný **časový filtr** nezahrnuje období, kdy byly požadavky vytvořeny – zkuste **Vše** pro ověření

Pokud jsou grafy stále prázdné i po výběru **Vše**, ověřte, zda se volání zobrazují ve [**Výpisech**](#history) nebo na kartě **Všechna volání**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Náklady zobrazují „nedostupné“ nebo se zdají být nesprávné

Pokud používáte modely prostřednictvím **OpenRouter**, aplikace zobrazuje vaše skutečné výdaje hlášené OpenRouter.

U **ostatních poskytovatelů** (OpenAI přímo, Anthropic přímo atd.) jsou náklady odhadovány na základě cenových údajů zveřejněných OpenRouter. Pokud pro model neexistuje odpovídající cena, náklady budou označeny jako **nedostupné** a nebudou připočítány do celkové částky.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Celkové náklady neodpovídají mým účtům u poskytovatele

Všechny údaje o nákladech v aplikaci jsou **pouze orientační odhady**, nikoli oficiální fakturační vyúčtování.

Chcete-li, aby se celková částka blíže shodovala se skutečnými výdaji na OpenRouter, otevřete [**Nastavení** > **Sledování nákladů**](#cost-tracking) a klikněte na **Synchronizovat s využitím API klíče**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Stránka Výpisy chybí v postranním panelu

Možnost **Uchovávat historii spuštění** může být vypnutá. Otevřete [**Nastavení** > **Obecná nastavení**](#general-settings) a zapněte ji. Upozorňujeme, že zapnutí této funkce neobnoví již smazaná historická data.

<br/>

<a id="web-app-session-expired"></a>
### Webová aplikace: nečekaně přesměrována na přihlašovací stránku

Relace mohla vypršet. Přihlaste se znovu. Pokud se problém stává často, zkontrolujte konfiguraci serveru, zejména nastavení doby životnosti relace.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Nástěnka nezobrazuje data ostatních uživatelů (webová verze)

Pouze **administrátoři** mohou přes filtr **Uživatel** zobrazovat data všech uživatelů. Běžní uživatelé z důvodu návrhu vidí pouze vlastní aktivitu.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Změnil jsem prompt a ztratil úpravy

Při úpravě promptu vždy klikněte na **Uložit**, než přejdete na **Zpět ke spuštění**.

<br/><br/>

<a id="quick-tips"></a>
## Rychlé tipy

- Začněte s [**Překladem**](#translate), abyste ověřili, že je vaše nastavení v pořádku, než přejdete k [**Přepisu**](#rewrite) nebo [**Transformaci**](#transform).
- Používejte [**Přepis**](#rewrite) pro každodenní zlepšování textu.
- Používejte [**Transformaci**](#transform), pokud potřebujete opakovatelný pracovní postup pro konkrétní úkol.
- Pomocí [**Nástěnky**](#dashboard) sledujte využití a náklady.
- Používejte [**Výpisy**](#history) k revizi minulých operací a jejich plného vstupního i výstupního textu.
- Pravidelně exportujte prompty, pokud si budujete knihovnu promptů, kterou chcete uchovat, (viz [Transformační prompty](#transform-prompts)) nebo ji chcete sdílet s ostatními.

<br/><br/>

<a id="disclaimer"></a>

## Zřeknutí se zodpovědnosti

Názvy produktů a ikony patří příslušným vlastníkům a jsou použity pouze pro identifikační účely. Tento software není spojen s žádnou z uvedených značek a není jejich oficiálně podporován.

<br/><br/>

<a id="license"></a>
## Licence

Autorská práva © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)