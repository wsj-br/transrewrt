---
translated_at: "2026-03-24T01:29:24.432Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
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
- **Přeformulování** – přepsání textu v jiném stylu, např. jasnějším, kratším nebo formálnějším.
- **Transformace** – zpracování textu pomocí vlastních AI pokynů zvaných prompty.

<br/>

Tato příručka vysvětluje, jak aplikaci používat, jakmile je nainstalovaná a spuštěná. Kroky k instalaci naleznete v hlavním souboru **[README](README.cs.md)**.

<br/>

> ℹ️ **Poznámka**<br/>
> Transrewrt je dostupný jako desktopová aplikace pro Windows a Linux a také jako webová aplikace pro vlastní nasazení. Tato příručka se zaměřuje na běžné denní používání aplikace. Pokud se nějaká funkce týká pouze jedné verze, je to u ní jasně uvedeno.

<small>**Přečtěte si v jiných jazycích:** [English (UK)](USER-GUIDE.cs.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Obsah**

- [Než začnete](#before-you-start)
  - [Jak získat bezplatný API klíč OpenRouter (desktopová aplikace)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [První kroky](#getting-started)
- [Hlavní části okna](#main-parts-of-the-window)
  - [Postranní panel](#sidebar)
  - [Panel nástrojů](#toolbar)
  - [Vstupní a výstupní panely](#input-and-output-panels)
- [Překlad](#translate)
  - [Překlad textu](#translate-text)
  - [Výběr jazyka](#language-selection)
  - [Užitečná nastavení překladu](#helpful-translation-settings)
  - [Klávesové zkratky](#keyboard-shortcuts)
- [Přeformulování](#rewrite)
  - [Přeformulování textu](#rewrite-text)
- [Transformace](#transform)
  - [Spustit existující prompt](#run-an-existing-prompt)
  - [Pokud ještě žádné prompty nemáte](#if-you-have-no-prompts-yet)
  - [Rychlé vytvoření promtu](#create-a-prompt-quickly)
  - [Upravení promtu](#edit-a-prompt)
  - [Otestování promtu před použitím](#test-a-prompt-before-using-it)
  - [Správa uložených promptů](#manage-saved-prompts)
- [Nástěnka](#dashboard)
  - [Filtrování dat](#filter-the-data)
  - [Karty nástěnky](#dashboard-tabs)
  - [Export dat](#export-data)
  - [Odstranění uložených záznamů pro model](#delete-stored-records-for-a-model)
- [Historie](#history)
  - [Filtrování dat](#filter-the-data-1)
  - [Export historie](#export-history-data)
- [Nastavení](#settings)
  - [Obecná nastavení](#general-settings)
  - [Modely](#models)
  - [Jazyky](#languages)
  - [Sledování nákladů](#cost-tracking)
  - [Transformační prompty](#transform-prompts)
  - [Uživatelé](#users)
  - [Nastavení API](#api-config)
  - [O aplikaci](#about)
- [Běžné problémy](#common-issues)
  - [Aplikace nepřekládá, nepřeformulovává ani netransformuje text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Seznam modelů je prázdný](#the-model-list-is-empty)
  - [Výsledek je příliš pomalý nebo nákladný](#the-result-is-too-slow-or-too-expensive)
  - [Rozhraní je v nesprávném jazyce](#the-interface-is-in-the-wrong-language)
  - [Text je příliš malý nebo špatně čitelný](#the-text-is-too-small-or-hard-to-read)
  - [Grafy na nástěnce jsou prázdné](#dashboard-charts-are-empty)
  - [Náklady zobrazují „nedostupné“ nebo jsou nesprávné](#cost-shows-not-available-or-seems-wrong)
  - [Celkové náklady neodpovídají účtu poskytovatele](#total-cost-does-not-match-my-provider-bill)
  - [Stránka Historie chybí v postranním panelu](#the-history-page-is-missing-from-the-sidebar)
  - [Webová aplikace: neočekávaně přesměrováno na přihlašovací stránku](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Nástěnka nezobrazuje data ostatních uživatelů (webová verze)](#dashboard-shows-no-data-for-other-users-web)
  - [Změnil jsem prompt a editace jsem ztratil](#i-changed-a-prompt-and-lost-the-edits)
- [Rychlé tipy](#quick-tips)
- [Právní upozornění](#disclaimer)
- [Licence](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Než začnete

Chcete-li používat Transrewrt, potřebujete přístup alespoň k jednomu poskytovateli umělé inteligence. Podporované poskytovatele jsou: [OpenRouter](https://openrouter.ai) (který agreguje mnoho modelů), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI a [Ollama](https://ollama.com) pro lokální modely.

K zahájení nepotřebujete vybírat placený model. Jakmile přidáte svůj klíč k rozhraní OpenRouter API, aplikace automaticky aktivuje vestavěnou **bezplatnou** možnost OpenRouter. To vám umožní okamžitě začít s překladem, přepisováním a transformací textu.

Jednoduše řečeno:

- **Model** je umělá inteligence, která provádí práci. Modely jsou uvedeny s **předponou poskytovatele** (například `openrouter/…`, `openai/…`, `ollama/…`).
- **Klíč API** (nebo v případě Ollamy **základní adresa URL**) je prostředek, jakým aplikace přistupuje k danému poskytovateli.

Pokud používáte **desktopovou aplikaci**, přidejte klíče v části [**Nastavení** > **Konfigurace API**](#api-config) pro každého poskytovatele, kterého používáte. Pokud chcete používat pouze OpenRouter, viz níže [Jak získat klíč API](#how-to-get-an-api-key-desktop-app). Pokud nechcete používat klíč API, můžete nainstalovat Ollamu (ze stránky [ollama.com](https://ollama.com)) a používat místo toho lokální modely.

Pokud používáte **webovou verzi**, jsou poskytovatelé nakonfigurováni vlastníkem serveru pomocí proměnných prostředí, takže obvykle nebudete zadávat klíče API sami.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Jak získat bezplatný klíč OpenRouter API (desktopová aplikace)

Pokud používáte desktopovou aplikaci, postupujte následovně:

1. Otevřete ve svém webovém prohlížeči [OpenRouter](https://openrouter.ai).
2. Vytvořte si účet nebo se přihlaste.
3. Otevřete stránku [Keys](https://openrouter.ai/keys).
4. Klikněte na tlačítko pro vytvoření nového klíče API.
5. Zadejte klíči název, abyste jej mohli později rozpoznat.
6. Zkopírujte nový klíč API.
7. Vraťte se do aplikace Transrewrt a otevřete **Nastavení** > **Konfigurace API**.
8. Vložte klíč do pole **OpenRouter klíč API** (v části **Nastavení** > **Konfigurace API**).
9. Klikněte na **Otestovat klíč OpenRouter**, abyste ověřili, že funguje.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Můžete začít s bezplatnou cestou OpenRouter nebo s jakýmkoli jiným dostupným bezplatným modelem bez nutnosti zadání platební karty. V mnoha případech je to dostatečné k tomu, abyste mohli začít používat aplikaci Transrewrt, aniž byste museli zvolit placený model. Alternativně můžete použít Ollamu ke spuštění modelů lokálně bez jakéhokoli klíče API.

<br/><br/>

<a id="getting-started"></a>
## Začínáme

Pokud používáte Transrewrt poprvé, postupujte v tomto pořadí:

1. Otevřete aplikaci.
2. V případě potřeby vyberte váš **jazyk rozhraní** pomocí ikony koule.
3. Pokud používáte **desktopovou aplikaci**, otevřete [**Nastavení** > **Konfigurace API**](#api-config), přidejte klíč API alespoň pro jednoho poskytovatele (například OpenRouter) a kliknutím na **Test** ověřte, že funguje.
4. Otevřete [**Nastavení** > **Modely**](#models) a přidejte jeden či více modelů do sekce **Vybrané modely**.
5. Otevřete [**Nastavení** > **Jazyky**](#languages) a vyberte si **Nejčastější jazyky**, pokud chcete, aby se vaše nejpoužívanější jazyky zobrazovaly jako první.
6. Přejděte do položky **Překlad** a spusťte jednoduchý překlad, abyste ověřili, zda vše funguje.
7. Jakmile bude vše fungovat, zkuste **Přepsat** a poté **Transformovat**.

Toto pořadí je důležité. Zabraňuje tak nejběžnějšímu problému při prvním použití: spuštění úlohy předtím, než má aplikace funkční připojení přes API nebo vybraný model.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Hlavní části okna

Aplikace je rozdělena na tři hlavní oblasti:

- **Boční panel** vlevo.
- **Lišta nástrojů** nahoře.
- **Pracovní oblast** ve středu.

<br/>

<a id="sidebar"></a>
### Boční panel

Boční panel použijte k pohybu v rámci aplikace. Bohatší pracovní prostor můžete získat sbalením bočního panelu kliknutím na ikonu vedle loga aplikace.

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
        <li><strong>Přepsat</strong> otevře pracovní prostor pro přepisování.</li><br/>
        <li><strong>Transformovat</strong> otevře pracovní prostor pro vlastní prompt.</li><br/>
        <li><strong>Dashboard</strong> zobrazuje informace o využití a nákladech.</li><br/>
        <li><strong>Nastavení</strong> otevře nastavení aplikace.</li><br/>
        <li><strong>Historie</strong> zobrazuje historii využití včetně vstupního a výstupního textu.</li><br/>
        <li><strong>Uživatel</strong> zobrazuje uživatelské jméno přihlášeného uživatele (pouze u webové verze).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Panel nástrojů

Panel nástrojů se mírně liší v závislosti na tom, kde se v aplikaci nacházíte.

- Vlevo zobrazuje název aktuální stránky.
- Vpravo zobrazuje **volbu modelu** a ovládání **jazyka rozhraní**.

**Výběr modelu** vám umožňuje vybrat, který AI model použijete pro aktuální úlohu.

  ![Výběr modelu](../images/screenshots/cs/model-selector.png)

> ℹ️ **POZNÁMKA**<br/>
> Některé bezplatné modely nemusí být vždy dostupné – občas jsou offline nebo mají omezené využití. Pokud k tomu dojde, aplikace tento model automaticky odstraní ze seznamu dostupných.<br/>
> Chcete-li řídit, které modely se zobrazují, přejděte do [**Nastavení** > **Modely**](#models) a upravte si seznam modelů. 
> Nastavení modelu můžete otevřít také přímo kliknutím na ikonu poskytovatele vlevo od názvu modelu v panelu nástrojů.

<br/>

**Ikona zeměkoule a kód jazyka** změní jazyk uživatelského rozhraní, např. nabídek a tlačítek. **Nezmění** to však jazyky používané pro překlad v režimu **Překlad**.

  ![Volič jazyka rozhraní](../images/screenshots/cs/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panely Vstup a Výstup

Většina pracovních prostorů používá levý panel **Vstup** a pravý panel **Výstup**.

Panel **Vstup** zobrazuje:

- Počet znaků
- Počet slov
- Počet odstavců

Panel **Výstup** může zobrazovat:

- Jak dlouho úloha trvala
- Náklady na úlohu (pokud jsou k dispozici)
- Běžný celkový součet nákladů
- **TPS** (tokeny za sekundu)
- Počty znaků, slov a odstavců
- Použitý model

Pokud se ptáte, co technické termíny znamenají:

- **Token** je malý úsek textu. Můžete si to představit jako část slova nebo krátké slovo.
- **TPS** znamená, kolik těchto textových úseků model zpracoval každou sekundu.

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
3. Vyberte jazyk v **Do**.
4. Vyberte model v panelu nástrojů.
5. Napište nebo vložte text do **Vstupu**.
6. Klikněte na **Přeložit**.
7. Přečtěte si výsledek ve **Výstupu**.
8. Pomocí tlačítka kopírování zkopírujte výsledek, pokud ho chcete použít.

<br/>

<a id="language-selection"></a>
### Výběr jazyků

- **Z** může být konkrétní jazyk nebo **Detekovat jazyk**.
- **Do** je jazyk, do kterého chcete převést text.

Vaše vybrané **Nejčastější jazyky** se zobrazí na začátku seznamu. Můžete je nastavit v části [**Nastavení** > **Jazyky**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Užitečná nastavení překladu

V části [**Nastavení** > **Obecná nastavení**](#general-settings) můžete změnit chování překladu:

- **Automatický překlad po vložení** spustí překlad ihned po vložení textu.
- **Automatické kopírování výsledku do schránky** automaticky zkopíruje výsledek po úspěšném provedení.
- **Překlad v reálném čase (během psaní)** spouští překlady, zatímco píšete.
- **Časový limit (ms)** určuje, jak dlouho aplikace počká, než spustí překlad v reálném čase.

<br/>

<a id="keyboard-shortcuts"></a>
### Klávesové zkratky

V části [**Nastavení** > **Obecná nastavení**](#general-settings) určuje položka **Chování klávesy ENTER** akci prováděnou po stisku `Enter`:

- **Enter** spustí úlohu a **Shift+Enter** vloží nový řádek.
- Nebo aplikace může učinit opak.

Aktuální režim je také zobrazen na tlačítku **Přeložit**.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Přepsat

Použijte **Přepsat**, pokud chcete zlepšit formulaci, aniž byste měnili hlavní význam.

![Pracovní prostor Přepsat](../images/screenshots/cs/rewrite.png)

To je užitečné pro:

- opravu pravopisu a gramatiky
- zpřehlednění textu
- formalizaci nebo neformálnější styl textu
- zkracování nebo rozšiřování textu
- učinění textu techničtějším

<br/>

<a id="rewrite-text"></a>

### Přepsání textu

1. Otevřete **Přepsání**.
2. Vyberte **režim**.
3. Vyberte model na panelu nástrojů.
4. Napište nebo vložte text do pole **Vstup**.
5. Klikněte na **Přepsat**.
6. Zkontrolujte výsledek v sekci **Výstup**.

Stejné chování klávesy Enter, jak je popsáno u části [**Překlad**](#keyboard-shortcuts), platí i zde.

<br/>

> 💡 **TIP**<br/>
> Když použijete režim „**Kontrola pravopisu a gramatiky**“, v panelu výstupu se objeví tlačítko `Zobrazit změny`.
> Kliknutím na toto tlačítko přepnete zobrazení oprav a ukážete nebo skryjete konkrétní změny provedené ve vašem textu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## Transformace

Použijte **Transformaci**, když chcete, aby aplikace postupovala podle vlastních pokynů.

![Pracovní prostor Transformace](../images/screenshots/cs/transform.png)

Jedná se o nejpružnější část aplikace. Můžete ji použít například pro:

- shrnutí poznámek
- převod hrubého textu na upravený e-mail
- extrakci klíčových bodů
- převod textu do konkrétního formátu

<br/>

<a id="run-an-existing-prompt"></a>
### Spuštění existujícího promptu

1. Otevřete **Transformaci**.
2. Vyberte prompt ze seznamu promptů.
3. Pokud se objeví pole **Cílový jazyk**, vyberte jazyk, pokud jej chcete zadat.
4. Napište nebo vložte text do pole **Vstup**.
5. Klikněte na **Transformovat**.
6. Přečtěte si výsledek v sekci **Výstup**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Pokud ještě žádné prompty nemáte

Pokud je váš seznam promptů prázdný, klikněte na **Načíst ukázkové prompty**. Tím se přidají vestavěné ukázky, takže si můžete začít hrát ihned.

<br/>

> ℹ️ **Poznámka**<br/>
> Ukázkové prompty jsou poskytnuty v angličtině. Po jejich načtení můžete prompt upravit a použít možnost **Přeložit prompt** k jeho překladu do vašeho jazyka.

<br/>

<a id="create-a-prompt-quickly"></a>
### Rychlé vytvoření promptu

Nejrychlejší způsob, jak vytvořit prompt:

1. Klikněte na **Nový prompt**.
2. Klikněte na **Vygenerovat prompt**.
3. Popište, co má prompt dělat.
4. Vyberte model.
5. Nechejte aplikaci vytvořit návrh pro vás.
6. Prohlédněte si návrh a klikněte na **Uložit**.

![Vygenerovat prompt](../images/screenshots/cs/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Upravení promptu

Když vytváříte nebo upravujete prompt, editor se objeví vlevo a zkušební oblast napravo.

![Editor promptu u transformace](../images/screenshots/cs/transform-prompt-edit.png)

Hlavní pole jsou:

- **Název promptu**: název, který se zobrazuje v seznamu promptů.
- **Pokyny pro prompt (volitelné)**: krátká nápověda, která se zobrazí uživateli při spuštění promptu.
- **Role modelu**: celková role přiřazená AI, například „Jsi užitečný asistent.“
- **Pokyny pro model (jeden na řádek)**: konkrétní pravidla, která má AI dodržovat.
- **Popis výstupu**: krátký název pro popis výsledku, například „shrnutí“ nebo „přepsání“.
- **Teplota (0,0 → 1,0)**: chování modelu; viz níže.
- **Požádat o cílový jazyk**: přidá výběr cílového jazyka při spuštění promptu.

Pokud je pro vás technický pojem **Teplota** nový, můžete o něm přemýšlet takto:

- **Nižší** hodnota teploty vede k rovnoměrnějším a předvídatelnějším výsledkům.
- **Vyšší** hodnota teploty vede k větší rozmanitosti a kreativitě.

Můžete také použít:

- **`Vygenerovat prompt`**, abyste vytvořili nový návrh z jednoduchého popisu.
- **`Vylepšit prompt`**, abyste zlepšili existující prompt.
- **`Přeložit prompt`**, abyste přeložili pole v rámci promptu.

<br/>

> ⚠️ **VAROVÁNÍ**<br/>
> Klikněte na **`Uložit`**, než kliknete na **`Zpět ke spuštění`**. Pokud se vrátíte bez uložení, vaše změny budou ztraceny.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Otestujte prompt před použitím

Zkušební panel napravo vám umožňuje vyzkoušet váš prompt s ukázkovým textem, než jej budete používat ve své každodenní práci.

To je užitečné, když:

- vytváříte nový prompt
- porovnáváte dvě verze jednoho promptu
- chcete zkontrolovat tón, délku nebo formát výstupu

<br/>

<a id="manage-saved-prompts"></a>
### Správa uložených promptů

Chcete-li spravovat uložené prompty na jednom místě, otevřete část [**Nastavení** > **Prompty transformace**](#transform-prompts).

Tam můžete:

- zobrazit a odstranit prompty
- exportovat prompty jako **JSON**, **CSV** nebo **XLSX**
- importovat prompty ze souboru

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Nástěnka

Pomocí **Nástěnky** si můžete prohlédnout, jak intenzivně aplikaci používáte a kolik vás to stojí (pro placené modely).

![Přehled nástěnky](../images/screenshots/cs/dashboard-summary.png)


<br/>

> ℹ️ **POZNÁMKA**<br/>
> Pokud používáte pouze bezplatné modely, grafy týkající se nákladů zůstanou prázdné.

<br/>

<a id="filter-the-data"></a>
### Filtrování dat

Filtrovací tlačítka v horní části slouží ke změně časového rozsahu.

![Filtry nástěnky](../images/screenshots/cs/dashboard-filter.png)

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Filtrovací možnost **Uživatel** je ve webové verzi viditelná pouze pro správce. Běžní uživatelé tento filtr neuvidí a v desktopové aplikaci není k dispozici.

<br/>

<a id="dashboard-tabs"></a>
### Karty nástěnky

- **Přehled** poskytuje shrnutí využití a nákladů.
- **Podle využití** rozděluje aktivitu podle jazyka překladu, režimu přepisu a transformačních výzev.
- **Podle modelu** zobrazuje použité modely a jejich náklady.
- **Podle dne** zobrazuje denní součty.
- **Všechna volání** ukazuje kompletní historii volání a umožňuje ji exportovat.

<br/>

<a id="export-data"></a>
### Export dat

Z tabulek na nástěnce lze exportovat data ve formátech:

- **JSON**
- **CSV**
- **XLSX**

To je užitečné, pokud chcete činnost sledovat mimo aplikaci nebo sdílet sestavu.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Smazání uložených záznamů pro model

Na kartách **Podle modelu** nebo **Všechna volání** můžete odstranit uložené záznamy pro konkrétní model kliknutím na ikonu „koše“.

> ⚠️ **VAROVÁNÍ**<br/>
> Smazání uložených záznamů nelze vrátit zpět. Používejte tuto funkci pouze v případě, že už historii opravdu nepotřebujete.

Chcete-li smazat veškerá data nebo odstranit záznamy podle jejich stáří, přejděte do [**Nastavení** > **Sledování nákladů**](#cost-tracking). Tam naleznete možnosti smazat všechna uložená data nebo pouze data starší než určité datum.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Historie

Kliknutím na **Historie** zobrazíte přehled vašich aktivit v aplikaci **Transrewrt**, včetně vstupních a výstupních dat jednotlivých operací.

![Stránka historie](../images/screenshots/cs/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrování historie

**Historie** používá stejné filtry jako stránka **Nástěnka**. Pomocí nich vyberte časový rozsah.

![Filtry nástěnky](../images/screenshots/cs/dashboard-filter.png)

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Filtrovací možnost **Uživatel** je ve webové verzi viditelná pouze pro správce. Běžní uživatelé tento filtr neuvidí a v desktopové aplikaci není k dispozici.

<br/>

<a id="export-history-data"></a>
### Export dat historie

Stránka historie umožňuje exportovat filtrovaná data ve formátech:

- **JSON**
- **CSV**
- **XLSX**

To je užitečné, pokud chcete činnost sledovat mimo aplikaci nebo sdílet sestavu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Nastavení

Otevřete **Nastavení** v bočním panelu a přizpůsobte si chování aplikace.

Dostupné karty se liší podle platformy a vaší role:

  | Karta               | Desktop | Web (správce) | Web (běžný uživatel) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Obecné nastavení  |   ano   |     ano     |        ano         |
  | Modely            |   ano   |     ano     |        ano         |
  | Jazyky            |   ano   |     ano     |        ano         |
  | Sledování nákladů |   ano   |     ano     |         —          |
  | Transformační výzvy|   ano   |     ano     |        ano         |
  | Uživatelé         |    —    |     ano     |         —          |
  | Konfigurace API   |   ano   |     ano     |         —          |
  | O aplikaci        |   ano   |     ano     |        ano         |

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Ve webové verzi má každý uživatel vlastní nastavení. Nastavení jako vybrané modely, jazyky, obecné volby a transformační výzvy jsou uložena pro každého uživatele zvlášť. Vaše změny tak neovlivní ostatní uživatele.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>

### Obecné nastavení

Pomocí **Obecného nastavení** ovládejte chování při psaní, zda jsou ukládány podrobnosti spuštění do **Historie** a vzhled aplikace.

**Chování**

- **Chování klávesy ENTER** určuje, zda `Enter` spustí úlohu nebo vloží nový řádek.
- **Automatický překlad po vložení** spustí překlad ihned po vložení textu.
- **Automatické kopírování výsledku do schránky** automaticky zkopíruje úspěšné výsledky.
- **Překlad v reálném čase (během psaní)** překládá text během psaní.
- **Časový limit (ms)** nastavuje dobu čekání pro překlad v reálném čase.

**Historie**

- **Uchovávat historii spuštění** určuje, zda každý překlad, přepsání a transformace uloží **vstupní a výstupní text** pro zobrazení v postranním panelu [**Historie**](#history). Vypnutí této funkce vyžaduje potvrzení; pokud potvrdíte, uložené texty historie budou z databáze odstraněny.
- **Odstranit data historie** umožňuje odstranit uložené texty podle stáří (např. starší než několik měsíců nebo **veškerá data (vyprázdnit)**) pomocí tlačítka **Odstranit data**. Toto ovlivní pouze uložené texty spuštění pro zobrazení **Historie**; **neodstraní** tím součty nákladů a využití. Chcete-li odstranit nebo oříznout **data o nákladech**, použijte [**Nastavení** > **Sledování nákladů**](#cost-tracking).

**Vzhled**

- **Desetinná místa nákladů** mění způsob zobrazení desetinných míst nákladů.
- **Pouze pro web:** **zobrazit okraj kolem aplikace** přidává kolem rozhraní dodatečné místo.
- **Rodina písma** mění písmo v textových panelech.
- **Velikost** mění velikost písma.


<br/>

<a id="models"></a>
### Modely

Použijte **Nastavení** > **Modely** k výběru modelů, které se zobrazí v panelu nástrojů.

![Záložka Nastavení modelů](../images/screenshots/cs/settings-models.png)

Stránka obsahuje dva seznamy:

- **Dostupné modely** vlevo
- **Vybrané modely** vpravo

Mezi užitečné prvky patří:

- **Hledat modely...** k vyhledání modelu podle názvu
- **Štítky poskytovatelů** pro zúžení seznamu na jeden engine (OpenRouter, OpenAI, Ollama, …)
- **Pouze zdarma** k zobrazení jen bezplatných modelů
- **Obnovit** k opětovnému načtení seznamu
- **Rozbalit vše** a **Sbalit vše** při řazení podle poskytovatele

ID modelů obsahují předponu poskytovatele (např. `openrouter/…` vs `openai/…`). Označení jako **OpenAI (OpenRouter)** vs **OpenAI (přímo)** ukazují, jak je přesměrována komunikace.

Akce:

 - Chcete-li přidat model, klikněte na **Přidat** nebo kamkoli do položky.

 - Chcete-li model odebrat, klikněte na **X** vedle něj v sekci **Vybrané modely** nebo na **Vybráno** ve výběru dostupných modelů.

 - Chcete-li seznam vyprázdnit, klikněte na **Zrušit výběr všech**. Požadovaný bezplatný model zůstane v seznamu.

<br/>

> ℹ️ **Poznámka**<br/>
> Pokud nechcete hned přidávat kredity na OpenRouter, začněte povolením **Pouze zdarma** a výběrem bezplatných modelů (není potřeba platební karta). Modely můžete také spouštět místně pomocí Ollama bez potřeby klíče API.

<br/>

<a id="languages"></a>
### Jazyky

Použijte **Nastavení** > **Jazyky** k uspořádání seznamů jazyků používaných v aplikaci.

- **Oblíbené jazyky** jsou připnuté v horní části seznamů jazyků při **Překladu** a **Transformaci**.
- **Vlastní jazyk** umožňuje přidat jazyk, který není ve výchozím seznamu.

Přidáním vlastního jazyka se objeví ve výběru jazyků spolu s přednastavenými možnostmi.

<br/>

<a id="cost-tracking"></a>
### Sledování nákladů

Použijte **Nastavení** > **Sledování nákladů** ke správě informací o nákladech.

- **Celkové náklady** zobrazují běžný součet.
- **Kopírovat hodnotu** zkopíruje celkovou částku do schránky.
- **Resetovat náklady** nastaví uložený součet na nulu.
- **Synchronizovat s využitím klíče API** nastaví součet podle využití z vašeho účtu OpenRouter (pouze pro OpenRouter).
- **Využití klíče API** zobrazí podrobnosti o využití OpenRouter, pokud jsou dostupné.
- **Smazat data o nákladech** odebere veškerá data nebo pouze záznamy starší než zvolený datum.

 **Sledování nákladů:** Při používání modelů OpenRouter zobrazí aplikace vaše skutečné využití a výdaje na základě dat z OpenRouter. Pro všechny ostatní poskytovatele aplikace odhaduje náklady pomocí cen uveřejněných OpenRouter; pokud není cena k dispozici, může být odhad nula.

<br/>

> ℹ️ **Poznámka**<br/>
> Všechny údaje o nákladech jsou pouze odhadem pro vaši informaci, nikoli oficiální fakturační účty.

<br/>

> ⚠️ **Varování**<br/>
> Smazání dat nelze vrátit zpět. Před vymazáním se ujistěte, že jste si data zálohovali nebo exportovali přes [**Nástěnku** > **Všechna volání**](#dashboard-tabs), jinak budou trvale ztracena. <br/>
> Bude také vymazána veškerá historie související s každým záznamem volání API.


<br/>

<a id="transform-prompts"></a>

### Transformace výzev

Funkcí **Nastavení** > **Transformovat výzvy** můžete spravovat výzvy hromadně.

Můžete:

- kontrolovat uložené výzvy
- mazat výzvy
- importovat výzvy ze souboru
- exportovat výzvy pro zálohu nebo sdílení

<br/>

<a id="users"></a>
### Uživatelé

**Webová verze: pouze administrátor**

Pomocí položky **Uživatelé** můžete spravovat uživatelské účty ve webové verzi. Můžete přidávat uživatele, aktualizovat jejich údaje, resetovat hesla a mazat účty.

<br/>

<a id="api-config"></a>
### Konfigurace API

Podporovaní poskytovatelé jsou: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI a **Ollama** (lokální modely pomocí základní URL). Konfigurovat je třeba pouze ty poskytovatele, které používáte.

**Webová aplikace: pouze administrátor**

Klíče API jsou nastaveny prostřednictvím systémových nebo Docker environmentálních proměnných – nevkládají se do webového rozhraní. Tato stránka zobrazuje, u kterých poskytovatelů je klíč nakonfigurován, a umožňuje jej otestovat kliknutím na tlačítko **`Test`**.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Chcete-li změnit klíč API, aktualizujte proměnnou prostředí ve vaší systémové nebo Docker konfiguraci a restartujte server nebo kontejner.

<br/>

**Desktopová aplikace**

Použijte **Konfiguraci API** k uložení klíčů API pro každého poskytovatele, kterého používáte. Pro Ollamu zadejte místo klíče API **základní URL**.

<br/>

> 💡 **Tip** <br/>
> Pokud nechcete používat klíč API nebo platit za využití služby, můžete si [stáhnout Ollamu](https://ollama.com) a zdarma spustit modely lokálně na svém počítači. Alternativně si můžete zdarma vytvořit účet na OpenRouter (není potřeba platební karta) a používat jejich bezplatné modely.

- Přidejte pouze poskytovatele, které potřebujete. Ve **V nastavení** > **Modelech** každé ID modelu začíná názvem poskytovatele (např. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

K přidání klíče API zadejte hodnotu do textového pole a klikněte na **`Uložit`**. Chcete-li nahradit existující klíč, klikněte na **`Upravit`**. Chcete-li zkontrolovat, zda klíč funguje, klikněte na **`Test`**.

<br/>

> ℹ️ **POZNÁMKA**<br/>
> Aktuální hodnotu klíče API nelze zobrazit. Můžete ho pouze nahradit pomocí tlačítka **`Upravit`**.
> Klíče API jsou uloženy šifrovaně v konfiguračním souboru.

<br/>

Podrobné pokyny k získání klíče OpenRouter najdete výše v části [Jak získat klíč API](#how-to-get-an-api-key-desktop-app).

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

Pokud něco nefunguje očekávaným způsobem, nejprve zkontrolujte následující body.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikace nepřekládá, nepřepisuje ani netransformuje text

Zkontrolujte, zda:

- jste vybrali model na panelu nástrojů
- je alespoň jeden model uveden v části [**Nastavení** > **Modely**](#models)
- funguje vaše nastavení API

Pokud používáte desktopovou aplikaci:

1. Otevřete [**Nastavení** > **Konfigurace API**](#api-config).
2. Zkontrolujte, zda je uložen alespoň jeden klíč API.
3. Klikněte na tlačítko **Test** vedle poskytovatele a ověřte, jestli klíč funguje.

<br/>

<a id="the-model-list-is-empty"></a>
### Seznam modelů je prázdný

Otevřete [**Nastavení** > **Modely**](#models) a klikněte na **Obnovit**.

V případě potřeby:

- vyhledejte model
- zapněte možnost **Pouze zdarma**
- přidejte jeden či více modelů do **Vybrané modely**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Výsledek je příliš pomalý nebo drahý

Zkuste jednu nebo více těchto kroků:

- vyberte jiný model
- použijte kratší vstupní text
- vypněte **Překlad v reálném čase (během psaní)** v části [**Nastavení** > **Obecná nastavení**](#general-settings)
- pro jednoduché úlohy používejte bezplatné modely (viz [Modely](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Rozhraní je v nesprávném jazyce

Klikněte na ikonu koule v [panelu nástrojů](#toolbar) a vyberte požadovaný **Jazyk rozhraní**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Text je příliš malý nebo špatně čitelný

Otevřete [**Nastavení** > **Obecná nastavení**](#general-settings) a změňte:

- **Rodina písma**
- **Velikost**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Grafy na nástěnce jsou prázdné

To je normální, pokud:

- používáte pouze **bezplatné modely** (grafy nákladů zůstanou prázdné)
- vybraný **časový filtr** nezahrnuje období, kdy byly volání prováděna – zkuste **Všechny**, abyste to zkontrolovali

Pokud jsou grafy i po výběru **Všechny** prázdné, ověřte, zda se volání objevují v části [**Historie**](#history) nebo na kartě **Všechna volání**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Náklady zobrazují „nedostupné“ nebo jsou nesprávné

Když používáte modely prostřednictvím **OpenRouter**, aplikace zobrazuje vaše skutečné výdaje hlášené systémem OpenRouter.

Pro **ostatní poskytovatele** (OpenAI přímo, Anthropic přímo atd.) jsou náklady odhadovány na základě cenových údajů publikovaných OpenRouter. Pokud pro daný model není nalezena odpovídající cena, budou náklady zobrazeny jako **nedostupné** a nebudou připočteny k běžícímu součtu.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Celkové náklady neodpovídají účtu mého poskytovatele

Veškeré údaje o nákladech v aplikaci jsou **pouze orientační odhady**, nikoli oficiální faktury.

Chcete-li, aby celková částka lépe odpovídala vašim skutečným výdajům na OpenRouter, otevřete [**Nastavení** > **Sledování nákladů**](#cost-tracking) a klikněte na **Synchronizovat s využitím API klíče**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Stránka Historie chybí v postranním panelu

Možnost **Uchovávat historii provádění** může být vypnutá. Otevřete [**Nastavení** > **Obecná nastavení**](#general-settings) a aktivujte ji. Všimněte si, že její zapnutí neobnoví dříve smazaná data historie.

<br/>

<a id="web-app-session-expired"></a>
### Webová aplikace: nečekaně přesměrováno na přihlašovací stránku

Vaše relace mohla vypršet. Přihlaste se znovu. Pokud k tomu dochází často, zkontrolujte nastavení serveru týkající se doby trvání relace.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Na přehledu nejsou zobrazena data pro ostatní uživatele (web)

Pouze **administrátoři** mohou prostřednictvím filtru **Uživatel** zobrazit data všech uživatelů. Běžní uživatelé mají podle návrhu přístup pouze ke svým vlastním aktivitám.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Upravil jsem výzvu a ztratil jsem změny

Při úpravě výzvy vždy klikněte na **Uložit**, než kliknete na **Zpět ke spuštění**.

<br/><br/>

<a id="quick-tips"></a>
## Rychlé tipy

- Začněte s [**Překladem**](#translate), abyste ověřili, že je vše správně nastaveno, než pokračujete k [**Přepsání**](#rewrite) nebo [**Transformaci**](#transform).
- Používejte [**Přepsání**](#rewrite) pro každodenní vylepšování textu.
- Používejte [**Transformaci**](#transform), pokud potřebujete opakovatelný pracovní postup pro konkrétní úkol.
- Používejte [**Přehled**](#dashboard), pokud chcete sledovat využití a náklady.
- Používejte [**Historii**](#history), abyste prošli minulé operace a jejich kompletní vstupní a výstupní texty.
- Pravidelně exportujte výzvy, pokud vytváříte knihovnu výzev, kterou chcete bezpečně uložit (viz [Transformace výzev](#transform-prompts)) nebo ji chcete sdílet s ostatními.

<br/><br/>

<a id="disclaimer"></a>
## Zřeknutí se záruk

Názvy produktů a ikony patří jejich příslušným vlastníkům a používají se pouze pro identifikační účely. Tento software není spjat s žádnou z uvedených značek a není jimi nijak doporučován.

<br/><br/>

<a id="license"></a>
## Licence

Autorská práva © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)