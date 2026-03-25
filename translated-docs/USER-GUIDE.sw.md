---
translated_at: "2026-03-25T22:31:18.587Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt bango](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Mwongozo wa Mtumiaji

<br/>

<a id="introduction"></a>
## Utangulizi

Transrewrt unasaidia kufanya kazi na maandishi katika vitri vinnetri vya kuu vitatu:

- **Tafsiri** - badili maandishi kutoka lugha moja kwenda nyingine.
- **Andika upya** - fupisha tena maandishi kwa mtindo tofauti, kama kwa usio wazi zaidi, mfupi zaidi, au rasmi zaidi.
- **Babaki** - shughulikia maandishi kwa maelekezo ya AI maalum yanayoitwa manukato (prompts).

<br/>

Mwongozo huu unaelezea jinsi ya kutumia programu baada ya kupakiwa na inapoendeshwa. Kwa mchakato wa kupakia, tazama kikao cha kuu **[README](README.sw.md)**.

<br/>

> ℹ️ **TANGAZO**<br/>
> Transrewrt unapatikana kama programu ya kompyuta kwa ajili ya Windows na Linux, na kama programu ya wavuti inayohifadhiwa na mtumiaji mwenyewe. Mwongozo huu unazingatia matumizi ya kila siku ya programu. Lengo ambalo linatumika tu kwa toleo moja linashuhudishwa kwa wazi.

<small>**Soma kwa lugha nyingine:** [English (UK)](USER-GUIDE.sw.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Kurasa kuhusu tafsiri za UI na ushahidi:** Lugha zote za kufanya kazi, isipokuwa asili ya Kiingereza (UK) 
> zimekatishwa kwa kutumia moduli za AI; maneno yanaweza kuwa havijafafanuliwa vizuri au kuwa mabaya.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Orodha ya Maudhui** 

- [Kabla ya kuanza](#before-you-start)
  - [Jinsi ya kupata ufunguo wa OpenRouter API bila malipo (programu ya kompyuta)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Kuanza](#getting-started)
- [Sehemu kuu za dirisha](#main-parts-of-the-window)
  - [Barua msingi](#sidebar)
  - [Kanda ya zana](#toolbar)
  - [Sehemu za kuingiza na kutolewa](#input-and-output-panels)
- [Tafsiri](#translate)
  - [Tafsiri maandishi](#translate-text)
  - [Uchaguzi wa lugha](#language-selection)
  - [Mipangilio ya tafsiri inayosaidia](#helpful-translation-settings)
- [Andika upya](#rewrite)
- [Babaki](#transform)
  - [Kimbilia manukato ya awali](#run-an-existing-prompt)
  - [Kama bado hakuna manukato](#if-you-have-no-prompts-yet)
  - [Unda manukato haraka](#create-a-prompt-quickly)
  - [Hariri manukato](#edit-a-prompt)
  - [Jaribu manukato kabla ya kuitumia](#test-a-prompt-before-using-it)
- [Dashibodi](#dashboard)
  - [Chuja data](#filter-the-data)
  - [Vidole vya dashibodi](#dashboard-tabs)
  - [Pake data](#export-data)
  - [Futa rekodi zilizohifadhiwa kwa ajili ya mfumo](#delete-stored-records-for-a-model)
- [Historia](#history)
  - [Chuja data](#filter-the-data-1)
  - [Pake historia ya data](#export-history-data)
- [Mipangilio](#settings)
  - [Mipangilio ya kawaida](#general-settings)
  - [Vifaa](#models)
  - [Lugha](#languages)
  - [Ufuatiliaji wa gharama](#cost-tracking)
  - [Manukato ya kubadili](#transform-prompts)
  - [Watumiaji](#users)
  - [Mipangilio ya API](#api-config)
  - [Kuhusu](#about)
- [Matatizo ya kawaida](#common-issues)
  - [Programu haitafsiri, haarifu au haitumbuishi maandishi](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Orodha ya vifaa ni tupu](#the-model-list-is-empty)
  - [Matokeo ni ya polepole au ghali mno](#the-result-is-too-slow-or-too-expensive)
  - [Kiova ni kwa lugha isiyo ya sahihi](#the-interface-is-in-the-wrong-language)
  - [Maandishi ni madogo sana au magumu kusoma](#the-text-is-too-small-or-hard-to-read)
  - [Matrami ya dashibodi ni yatupu](#dashboard-charts-are-empty)
  - [Gharama inaonesha "haiapatikani" au inaonekana si sahihi](#cost-shows-not-available-or-seems-wrong)
  - [Gharama jumla haiambatani na bili langu la mtoa huduma](#total-cost-does-not-match-my-provider-bill)
  - [Ukurasa wa Historia umepotea kutoka kwenye barua msingi](#the-history-page-is-missing-from-the-sidebar)
  - [Programu ya wavuti: inakwenda kwenye ukurasa wa kuingia bila makini](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Dashibodi haioneshi data kwa watumiaji wengine (wavuti)](#dashboard-shows-no-data-for-other-users-web)
  - [Nimebadilisha manukato na kusahau mabadiliko](#i-changed-a-prompt-and-lost-the-edits)
- [Vidokezo vya haraka](#quick-tips)
- [Kuhakikishia hatuwezi kuwajibika](#disclaimer)
- [Leseni](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Kabla ya kuanza

Ili kutumia Transrewrt, unahitaji ufikiaji kwa kikomo kimoja cha mtoa wa AI. Watoa wa kusaidiwa ni: [OpenRouter](https://openrouter.ai) (ambayo hukusanya modeli nyingi), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, na [Ollama](https://ollama.com) kwa modeli ya kiondoa.

Huwezi hitaji kuchagua mtindo wa kulipwa ili kuanza. Mara tu unapoweka ujuzi wako wa OpenRouter API, programu hutumia moja kwa moja chaguo **bure** cha OpenRouter kilichojengwa. Hii inakuruhusu uanze kutafsiri, kuandika upya, na kubadili maandishi mara moja. Pia, unaweza pata ujuzi wa API bila malipo kutoka kwa Cerebras, Google, Groq, au Mistral AI.

Kwa maneno rahisi:

- **Modeli** ni injini ya AI inayofanya kazi. Modeli zimeorodheshwa kwa **kibichi cha mtoa** (kama vile `openrouter/…`, `openai/…`, `ollama/…`).
- **Ujuzi wa API** (au kwa Ollama, **URL ya msingi**) ni namna programu inavyofikia mtoa huyo.

Ikiwa unatumia **programu ya kompyuta**, weka ujuzi katika [**Mipangilio** > **Ufagilio wa API**](#api-config) kwa kila mtoa unayotumia. Kwa matumizi tu ya OpenRouter, tazama [Jinsi ya kupata ujuzi wa API](#how-to-get-an-api-key-desktop-app) hapa chini. Ikiwa hutaki kutumia ujuzi wa API, unaweza kusakinisha Ollama (kutoka kwa [ollama.com](https://ollama.com)) na katumia modeli ya kiondoa, kama vile `translategemma:4b`.

Ikiwa unatumia **toleo la wavuti**, mwezeshaji wa kivinjari hufanya ufagilio wa watoa kwa kutumia vipandikazi vya mazingira, kwa hivyo huwezi kuingiza vipaji vya API moja kwa moja katika programu.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Jinsi ya kupata ujuzi wa OpenRouter bila malipo (programu ya kompyuta)

Ikiwa unatumia programu ya kompyuta, fuata hatua hizi:

1. Nenda kwa [OpenRouter](https://openrouter.ai) kwenye kivinjari chako.
2. Unda akaunti au ingia.
3. Fungua ukurasa wa [Ujuzi](https://openrouter.ai/keys).
4. Bonyeza kitufe cha kujenga ujuzi mpya wa API.
5. Wapa ujuzi jina ili uweze kumtambua baadaye.
6. Nakili ujuzi mpya.
7. Rudi kwa Transrewrt na fungua **Mipangilio** > **Ufagilio wa API**.
8. Ingiza ujuzi katika sehemu ya **Ujuzi wa OpenRouter API** (chini ya **Mipangilio** > **Ufagilio wa API**).
9. Bonyeza **Jaribu ujuzi wa OpenRouter** kuuhakikishia linavyofanya kazi.

<br/><br/>

<a id="getting-started"></a>
## Anza kutumia

Ikiwa hii ni mara ya kwanza unayotumia Transrewrt, fuata mpangilio huu:

1. Fungua programu.
2. Chagua **Lugha ya Kigeni** kutokana na alama ya dunia ikiwa inahitajika.
3. Ikiwa kwenye **programu ya kompyuta**, fungua [**Mipangilio** > **Ufagilio wa API**](#api-config), weka ujuzi wa API kwa angalau mtoaji mmoja (kama vile OpenRouter), na bonyeza **Jaribu** kuuhakikishia linavyofanya kazi.
4. Fungua [**Mipangilio** > **Modeli**](#models) na ongeza modeli moja au zaidi kwenye **Modeli Iliyochaguliwa**.
5. Fungua [**Mipangilio** > **Lugha**](#languages) na chagua **Lugha Zako Muhimu** ikiwa unataka kuonekana kwanza katika orodha.
6. Nenda kwenye **Tafsiri** na uchague tafsiri rahisi ili uhakikishe kila kitu kinavyofanya kazi.
7. Mara inapotafautiana, jaribu **Andika upya** halafu **Badili**.

Mpangilio huu una maana. Unaokolea tatizo la kawaida la kuanza: kujaribu kufanya kazi kabla ya programu kupata muunganisho wa API wenye ufanisi au kabla ya kuchagua modeli.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Sehemu kuu za dirisha

Programu imegawanyika katika sehemu tatu kuu:

- **Ubao wa upande** wa kushoto.
- **Ubao wa kiolesura** wa juu.
- **Sehemu ya kazi** katikati.

<br/>

<a id="sidebar"></a>
### Ubao wa upande

Tumia ubao wa upande ili kuhamia programu. Unaweza kuficha ubao huo ili uhakikishe nafasi zaidi kwa kubonyeza kitufe karibu na alama ya programu.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/sw/sidebar.png" alt="Ubao wa upande wa programu" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Tafsiri</strong> hufungua eneo la kazi la tafsiri.</li><br/>
        <li><strong>Andika upya</strong> hufungua eneo la kazi la kuandika upya.</li><br/>
        <li><strong>Badilisha</strong> hufungua eneo la kazi ya alama kibinafsi.</li><br/>
        <li><strong>Dashibodi</strong> inaonesha maelezo ya matumizi na gharama.</li><br/>
        <li><strong>Mipangilio</strong> hufungua ubao wa mipangilio.</li><br/>
        <li><strong>Historia</strong> inaonesha historia ya matumizi kwa maandishi ya pembezoni na ya pato</li><br/>
        <li><strong>Mtumiaji</strong> inaonesha jina la mtumiaji iliyesajiliwa (kwa wavuti tu).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Pana la zana
Pana la zana linabadilika kidogo kulingana na unapokuwako katika programu.

- Upande wa kushoto, linaonesha jina la ukurasa wa sasa.
- Upande wa kulia, linaonesha **kuchagua mfumo** na kitendawili cha **Lugha ya kuingiza**.

**Kichagua mfumo** kinaonesha unachotumia injini ya AI kwa kazi ya sasa.

  ![Kichagua mfumo](../images/screenshots/sw/model-selector.png)

Baadhi ya moduli za bure zinaweza kubadilika kama zinapohakika-kwani wakati mwingine zinakuwa zimefungwa au zinazo mpaka wa matumizi. Ikiwa hii itatokea, programu itawekwa moduli hiyo kutoka kwenye orodha yako. Kudhibiti ambazo zinawakilisha, nenda kwenye [**Mipangilio** > **Moduli**](#models) zisahihishe orodha yako ya moduli.
Pia unaweza kufungua mipangilio ya moduli moja kwa moja kwa kubofya kwenye alama ya mtoa haki ya moduli katika pana la zana.

<br/>

**Alama ya dunia + msimbo wa lugha** inabadilisha lugha ya kuingiza kwa programu kama menyu na vitufe. Hai**badilishi** lugha za kutafsiri zinazotumika kwenye **Tafsiri**.

  ![Kichagua lugha ya kuingiza](../images/screenshots/sw/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Vipango vya kuweka na vipango vya kutolewa

Sehemu kubwa ya eneo la kazi inatumia **kuingiza** kwenye upande wa kushoto na **kutolewa** upande wa kulia.

Kila kipango pia kinaonesha:

| **Kuingiza**                                                       | **Kutolewa**                                                                                                                                     |
|--------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| - Hesabu ya herufi <br/>- Hesabu ya maneno <br/>- Hesabu ya kipande cha habari <br/> | - Muda ulichopotea katika kazi<br/>- **TPS** (vitu vya kielelezo kwa sekunde)<br/>- Hesabu za herufi, maneno na kipande cha habari<br/>- Mfumo uliotumika |


Ikiwa unaulizwa kuhusu maneno ya kiufundi:

- **Kitu cha kielelezo** inamaanisha sehemu ndogo ya maandishi. Unaweza kufikiri kuwa ni sehemu ya neno au neno fupi.
- **TPS** inamaanisha jinsi kiasi gani cha sehemu hizi za maandishi ulichopatia mfumo kila sekunde.

<br/>

Unapoweza kuzingatia gharama ya kila shughuli (ikiwa ipatikana) na jumla ya gharama, kuhakikisha chaguo "**Onesha taarifa ya gharama kwenye vitendo**" kwenye [**Mipangilio** > **Mipangilio ya kawaida**](#general-settings). 

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Tafsiri

Tumia **Tafsiri** unapowakariri maandishi kutoka lugha moja hadi nyingine.

![Eneo la kazi la kutafsiri](../images/screenshots/sw/translate.png)

<br/>

<a id="translate-text"></a>
### Tafsiri maandishi

1. Fungua **Tafsiri**.
2. Chagua lugha katika **Kutoka**.
3. Chagua lugha katika **Kwenda**.
4. Chagua mfumo kwenye pana la zana.
5. Andika orudishe maandishi kwenye **Kuingiza**.
6. Bofya **Tafsiri**.
7. Soma matokeo katika **Kutolewa**.
8. Tumia kitufe cha nakala ikiwa unataka kunakili matokeo.

<br/>

<a id="language-selection"></a>
### Kuchagua lugha

- **Kutoka** inaweza kuwa lugha fulani au **Sajiri Lugha**.
- **Kwenda** ni lugha unayotaka matokeo kuwa yake.

**Lughali zilizopendwa** zinazoonekana juu ya orodha. Unaweza kuzipanga hapa kwenye [**Mipangilio** > **Lugha**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Mipangilio muhimu ya kutafsiri

Kwenye [**Mipangilio** > **Mipangilio ya kawaida**](#general-settings), unaweza kubadilisha jinsi kutafsiri kinafanya kazi:

- **Tafsiri moja kwa moja baada ya kunakili** huamsha kutafsiri kama hivi ukisha kunakili maandishi.
- **Nakili matokeo moja kwa moja kwenye kurasa** huzipatiaza matokeo moja kwa moja baada ya kimaisha.
- **Tafsiri ya wakati huo huo (wakati wa kuandika)** huamsha kutafsiri wakati ukiandika.
- **Mpito (ms)** huamua muda ambao programu inasubiri kabla huamsha kutafsiri wakati huo huo.
- **Enter** huamua kinachotokea unapobofya `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Andika upya

Tumia **Andika upya** unapotaka kuboresha maneno bila kubadilisha maana makuu.

![Eneo la kazi la kuandika upya](../images/screenshots/sw/rewrite.png)

Hii inafaa kwa:

- kurekebisha makosa ya kisilinganishi
- kufanya maandishi iwe wazi
- kufanya maandishi iwe rasmi zaidi au isiwe rasmi
- kufupisha au kuongeza maandishi
- kufanya maandishi ionekane iwe kiasi

<br/>

> 💡 **SILISA**<br/>
> Unapotumia "**Angalia Kisilinganishi na Kikejeli**", kitufe cha `Onesha mabadiliko` chazionekana kwenye panapangalia.
> Bofya kitufe hiki kubadilisha uonyeshaji wa mabadiliko, kuonesha au kuficha mabadiliko maalum yaliyofanywa kwa maandishi yako.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Badilisha

Tumia **Badilisha** unapotaka AI kufuata maelekezo ya desturi.

![Eneo la kazi la Badilisha](../images/screenshots/sw/transform.png)

Huu ni sehemu yenye utambuzi zaidi ya programu. Unaweza kutumia kwa vitendo kama vile:

- kufupisha maelezo
- kubadili maandishi ya chwaka kuwa barua pepe iliyosomeshwa
- kutoa maelekezo makuu
- kubadili maandishi kwenye muundo maalumu
- au shughuli zozote nyingine ya desturi kwa maandishi ya kuingiza

<br/>

<a id="run-an-existing-prompt"></a>
### Endesha maelekezo ya mbele

1. Fungua **Badilisha**.
2. Chagua maelekezo kutoka kwenye orodha ya maelekezo.
3. Ikiwa kisanduku cha lugha ya **Kinacholengwa** kimeonekana, uchague lugha ikiwa unataka.
4. Andika au fungua maandishi kwenye **Kuingiza**.
5. Bonyeza **Badilisha**.
6. Soma matokeo kwenye **Tumefutwa**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Ikiwa bado haujapatia maelekezo

Ikiwa orodha yako ya maelekezo ni tupu, bofya **Pakia maelekezo ya sampuli**. Hii inaongeza mifano ili uanze haraka.

<br/>

> ℹ️ **TAARIFA**<br/>
> Maelekezo ya sampuli yapatikana kwa Kiingereza. Baada ya kupakia, unaweza kuhariri maelekezo na kutumia **Tafsiri maelekezo** ili kuyabadili kwa lugha yako.

<br/>

<a id="create-a-prompt-quickly"></a>
### Unda maelekezo haraka

Njia ya haraka ya kuunda maelekezo ni:

1. Bofya **Maelekezo mapya**.
2. Bofya **Zalisha maelekezo**.
3. Eleza unachotaka maelekezo yaweze kufanya.
4. Chagua mfumo.
5. Weka programu iweke wazi maelekezo.
6. Angalia rasimu na bofya **Hifadhi**.

![Zalisha maelekezo](../images/screenshots/sw/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Hariri maelekezo

Unipopokea unavyounda au kuhariri maelekezo, kihariri kinaonekana upande wa kushoto na eneo la mtihani linatokea upande wa kulia.

![Kihariri cha maelekezo ya Badilisha](../images/screenshots/sw/transform-prompt-edit.png)

Sehemu kuu ni:

- **Jina la maelekezo**: jina limechochewa kwenye orodha ya maelekezo.
- **Maagizo ya maelekezo (ya baini)**: ushauri mfupi unochoweshwa mtumiaji wakati anaendesha maelekezo.
- **Jukumu la mfumo**: jukumu mzima umepewa kwa AI, kama vile 'Wewe ni msaidizi wenye msaada.'
- **Maagizo ya mfumo (mamoja kwa mpaka)**: sheria maalumu unazotaka AI kufuata.
- **Maelezo ya pitisho**: neno fupi unaokieleza matokeo, kama vile 'muhtasari' au 'andikisha upya'.
- **Wakati (0.0 → 1.0)**: namna mfumo utakavyoshughulika; tazama chini.
- **Ulizie kuhusu lugha ya kuchukuliwa**: inaongeza chaguzi wa lugha ya kuchukuliwa wakati maelekezo yanapoendeshwa.

Ikiwa terminologia ya kiufundi **Temperature (wakati)** ni mpya kwako, fikiria kama hii:

- **Wakati wa chini** unatoa matokeo yenye ustahimilivu zaidi, yenye kutegemewa zaidi.
- **Wakati wa juu** unatoa ubingu, ucreative zaidi.

Unaweza pia kutumia:

- **`Zalisha maelekezo`** kuunda rasimu mpya kutoka kwenye maelezo rahisi
- **`Sahihisha maelekezo`** kusafisha maelekezo yanayopo
- **`Tafsiri maelekezo`** kutafsiri sehemu za maelekezo

<br/>

> ⚠️ **ONYO**<br/>
> Bofya **`Hifadhi`** kabla ya kubofya **`Rudi kwa Kuanza`**. Ikiwa urudi bila kuweka, mabadiliko yako yatapotea.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Jaribu maelekezo kabla ya kutumia

Paneli ya ujaribio wa upande wa kulia inakuruhusu kujaribu maelekezo yako kwa maandishi ya sampuli kabla ya kuyatumia katika kazi ya kila siku.

Hii ni muhimu unapotaka:

- kuunda maelekezo mapya
- kuulinganisha toleo mbili ya maelekezo
- kuchagua tahawala, urefu, au muundo wa putisho

<br/>

> ℹ️ **TAARIFA**<br/>
> Unaweza kutosha na kuruhusu maelekezo yaliyohifadhiwa katika [**Mipangilio** > **Maelekezo ya Badilisha**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Dashibodi

Tumia **Dashibodi** kuchunguza umuhimu unaoleta programu na kuchimbwa kwake (kwa vifaa vilivyopewa pesa).

![Muhtasari wa dashibodi](../images/screenshots/sw/dashboard-summary.png)


<br/>

> ℹ️ **TAARIFA**<br/>
> Ikiwa hutumii tu vifaa vya bure, michart iyanayosababisha pesa itakuwa tupu. 

<br/>

<a id="filter-the-data"></a>
### Chuja data

Tumia vifungu vya chujia juu ili ubadilishe mkono wa wakati.

![Vichujio vya dashibodi](../images/screenshots/sw/dashboard-filter.png)

<br/>

> ℹ️ **TAARIFA**<br/>
> Kichujio cha **Mtumiaji** kinachowekwa tu kwa wavaziri toka katika toleo la wavuti. Watumiaji wa kawaida hawataiona kichujio hiki, hakitumikii katika programu ya mezani.

<br/>

<a id="dashboard-tabs"></a>

### Sambamba za Dashibodi

- **Muhtasari** unapaswa kipimo kirefu cha matumizi na gharama.
- **Kwa matumizi** kugawanya shughuli kwa lugha ya tafsiri, kipindi cha upya-andika, na maombi ya ubadilishaji.
- **Kwa mfano** unawasilisha wanamathubuti uliyotumia na gharama zake.
- **Kwa siku** unawasilisha jumla za kila siku.
- **Maombi yote** unawasilisha historia kamili ya maombi na kukuza uwezo wa kuisafirisha.

<br/>

<a id="export-data"></a>
### Wasilisha data

Vitabu vya dashibodi vinaweza kusafirisha data katika:

- **JSON**
- **CSV**
- **XLSX**

Yaholela kama unataka kuchambua shughuli nje ya programu au kushiriki taarifa.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Futa rekodi zilizohifadhiwa kwa mfano

Katika **Kwa Mfano** au **Maombi Yote**, unaweza kutoa rekodi zilizohifadhiwa kwa mfano kwa kuwasilisha kwenye ikoni ya "kisafiria".

> ⚠️ **ONYO**<br/>
> Kufuta rekodi zilizohifadhiwa hautabadilishwi. Tumia hili tu kama una uhakika kwamba hisia hiyo hakitarudishwa tena.

Kufuta data yote au kutoa rekodi kulingana na umri wao, nenda kwenye [**Mipangilio** > **Ufuatiliaji wa Gharama**](#cost-tracking). Utapata chaguo la kufuta data yote au tu ya ziada zaidi ya tarehe fulani.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Historia

Wasilisha kwenye **Historia** ili uone historia ya vitendo vyako ndani ya **Transrewrt**, ikiwa ni pamoja maombi na matokeo ya kila operesheni.

![Ukurasa wa historia](../images/screenshots/sw/history.png)

<br/>

<a id="filter-the-history"></a>
### Chuja data

**Historia** hutumia vichujio vyo wote kama vile ukurasa wa **Dashibodi**. Tumia kuchagua kipimo cha muda.

![Vichujio vya dashibodi](../images/screenshots/sw/dashboard-filter.png)

<br/>

> ℹ️ **MUHIMU**<br/>
> Kichujio cha **Mtumiaji** kinaonekana tu kwa wasimamizi toka ukurasa wa wavuti. Watumiaji wa kawaida hutaiona kichujio hiki, na hakipo katika programu ya kompyuta.

<br/>

<a id="export-history-data"></a>
### Wasilisha data ya historia

Ukurasa wa historia unaweza kusafirisha data iliyochujwa katika:

- **JSON**
- **CSV**
- **XLSX**

Yaholela kama unataka kuchambua shughuli nje ya programu au kushiriki ripoti.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Mipangilio

Fungua **Mipangilio** kutoka kwenye upande ili kufanya mpangilio wa namna ambavyo programu inavyofanya kazi.

Sambamba zilizopatikana zinategemea jukwaa na wajibu wako:

  | Sambamba               | Kompyuta | Wavuti (mtumiaji mkuu) | Wavuti (mtumiaji wa kawaida) |
  |------------------------|:--------:|:----------------------:|:----------------------------:|
  | Mipangilio ya Jumla    |   ndiyo  |          ndiyo         |             ndiyo            |
  | Mifano                 |   ndiyo  |          ndiyo         |             ndiyo            |
  | Lugha                  |   ndiyo  |          ndiyo         |             ndiyo            |
  | Ufuatiliaji wa Gharama |   ndiyo  |          ndiyo         |              —               |
  | Maombi ya Ubabadilishaji|   ndiyo  |          ndiyo         |             ndiyo            |
  | Watumiaji              |    —     |          ndiyo         |              —               |
  | Mpangilio wa API       |   ndiyo  |          ndiyo         |              —               |
  | Kuhusu                 |   ndiyo  |          ndiyo         |             ndiyo            |

<br/>

> ℹ️ **MUHIMU**<br/>
> Katika tovuti, kila mtumiaji ana mpangilio wake. Mipangilio kama vile mifano iliyochaguliwa, lugha, chaguzi za jumla, na maombi ya muundo hubadilika kwa kila mtumiaji. Matumizi uliyoyaweka hayawatumia watu wengine.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Mipangilio ya jumla

Tumia **Mipangilio ya jumla** ili udhibiti tabia ya kuingiza maneno, iwapo maelezo ya utekelezaji yahifadhiwa kwa ajili ya [**Historia**](#history), na muonekano.

**Tabia**

- **Tabia ya ENTER** inachagua je `Enter` itaendesha kazi au itaweka mstari mpya.
- **Tafsiri otomatiki baada ya kunakili** husababisha kuanza kufuata haraka unaposalimia maandishi.
- **Nakili moja kwa moja matokeo** hunakili matumizi ya matokeo moja kwa moja.
- **Tafsiri ya wakati wowote (wakati wa kuandika)** hutafsiri wakati unapotaja.
- **Muda wa si habari (ms)** inaweka muda wa kusubiri tafsiri ya wakati wowote.

**Historia**

- **Wasilisha historia ya utekelezaji** inadhibiti iwapo kila tafsiri, kuandika upya, na muundo watahifadhi **maandishi ya miongozo na matokeo** kwa ajili ya miongozo [**Historia**](#history). Ukiondoa kushikilia inauliza uthibitishwe; ikiwa unakubaliana, historia iliyohifadhiwa itasafishwa kutoka kwenye kitabu.
- **Futa data ya historia** inaruhusu kusafisha maandishi iliyohifadhiwa kwa umri (kama vile zaidi ya miezi chache, au **data yote (safisha)**) kwa kutumia **Futa data**. Inaathiri tu maandishi yamehifadhiwa kwa ajili ya historia yasiyoonekana; **haifutii** kiasi cha malipo au gharama. Kufuta au kupunguza data ya **gharama**, tumia [**Mipangilio** > **Ufuatiliaji wa gharama**](#cost-tracking).

**Muonekano**

- **Onyesha maelezo ya gharama kwenye vitendo** inadhibiti kuonekana kwa gharama kwa operesheni (kama ipo) na jumla ya gharama kwenye dashibodi za Tafsiri, Andika upya, na Muundo.
- **Sehemu za gharama** inabadilisha jinsi ya kuonyesha namba za mstari.
- **Wavuti tu:** **onyesha kipenyo karibu na programu** kumeweka nafasi zaidi karibu na kiasi.
- **Wazo la fonti** unabadilisha fonti ya kuandika katika sanduku la maandishi.
- **Ukubwa** unabadilisha ukubwa wa fonti.

<br/>

<a id="models"></a>

### Mifumo

Tumia **Mipangilio** > **Mifumo** kupiua kati ya mifumo itakayotolewa kwenye mwambaa wa zana.

![Sakarani ya Mipangilio ya Mifumo](../images/screenshots/sw/settings-models.png)

Ukurasa una orodha mbili:

- **Mifumo iliyopatikana** upande wa kushoto
- **Mifumo iliyochaguliwa** upande wa kulia

Vituo muhimu ni kama vile:

- **Tafuta mifumo...** kupata mfumo kwa jina lake
- **Panja za mpokeaji** kupunguza orodha kwa injini moja (OpenRouter, OpenAI, Ollama, n.k.)
- **Bure Pekee** kuonyesha mifumo pekee isiyo na malipo
- **Sasisha** kupalua upya orodha
- **Panua Zote** na **Punguza Zote** unapotayarisha kwa mujibu wa mpokeaji

Vitambaa vya mifumo vilivyo na maelezo ya mpokeaji (kama vile `openrouter/...` vs `openai/...`). Vitambaa kama vile **OpenAI (OpenRouter)** k contra **OpenAI (moja kwa moja)** vinawasilishia jinsi ya usafiri wa mawasiliano.

> ℹ️ **TAARIFA**<br/>
> **OpenRouter Mchakato wa Mwili** (`openrouter/bodybuilder`) ni mfumo wa mpangilio, si mfumo wa mazungumzo ya kawaida: majibu yake ni JSON yenye maelezo ya mwili wa ombi la OpenRouter API (kama vile mtandao wa `ombi` unaojumuisha `mfumo` na `ujumbe`). Ikiwa utatumia kwa ajili ya **Tafsiri**, **Andika upya**, au **Badilisha**, sehemu ya matokeo itaonyesha JSON badala ya maandishi yaliyotimia. Chagua mfumo wa maandishi wa kawaida kwa kazi hizo. Angalia [ukurasa wa mfumo wa Body Builder](https://openrouter.ai/openrouter/bodybuilder) kwenye OpenRouter.

Vitendo:

- Kiongeze mfumo, boleza **Ongeza** au mahali popote katika kichwa.

- Kubatiliza mfumo, boleza **X** pamoja na mfumo katika **Mifumo iliyochaguliwa** au **Imechaguliwa** kwenye kichwa katika Mifumo iliyopatikana.

- Kubatiliza orodha nzima, boleza **Batilisha kila kitu**. Mfumo wa bure unaotakiwa utabaki katika orodha.

<br/>

> ℹ️ **TAARIFA**<br/>
> Kama hauhitaji kuongeza mkopo kwenye OpenRouter haraka, anza kuhitimu **Bure Pekee** na kuchagua mifumo isiyo na malipo (hakuna kadi ya sarakani inahitajika). Unapaswa pia kutumia Ollama kuchakata mifumo kwenye kifaa chako bila bila wote ya API.

<br/>

<a id="languages"></a>
### Lugha

Tumia **Mipangilio** > **Lugha** kusimamia orodha za lugha zilizotumika katika programu.

- **Lugha Muhimu** zinawekwa karibu juu ya orodha ya lugha katika **Tafsiri** na **Badilisha**.
- **Lugha ya mtumiaji** inaruhusu kuongeza lugha ambayo hakipo kwenye orodha iliyotumika kwa kawaida.

Ukiweka lugha ya watumiaji, itaonekana katika kichaguzi cha lugha pamoja na chaguo iliyotumika kwa kawaida.

<br/>

<a id="cost-tracking"></a>
### Kufuatilia gharama

Tumia **Mipangilio** > **Kufuatilia Gharama** kusimamia habari za gharama.

- **Jumla ya Gharama** inaonyesha jumla ya awali.
- **Nakili Thamani** inanakili jumla kwenye ubao wa kunakili.
- **Sasisha Gharama** inarudisha jumla iliyohifadhiwa kwenye sifuri.
- **Sawazisha na matumizi ya bango la API** inaweka jumla sawa na matumizi yanayotolewa na akaunti yako ya OpenRouter (Kwa OpenRouter tu).
- **Matumizi ya Bango la API** inaonyesha maelezo ya matumizi ya OpenRouter, ikiwa yanapatikana.
- **Futa data ya gharama** inafuta kila data, au tu maingizo ambayo yametangulia tarehe inayochaguliwa.

**Kufuatilia gharama:** Unapoitumia mifumo ya OpenRouter, programu inaonyesha matumizi yako halisi na matumizi kulingana na taarifa ya gharama kutoka OpenRouter. Kwa wateja wengine wote, programu inathibitisha gharama kwa kutumia bei zilizotolewa na OpenRouter; ikiwa bei haiwezi kupatikana, takwimu inaweza kuwa sifuri.

<br/>

> ℹ️ **TAARIFA**<br/>
> Takwimu zote za gharama ni takwimu za kufikia tu kwa ajili yako; haiwezi kutumika kama kitabu cha bili rasmi.

<br/>

> ⚠️ **SIFA**<br/>
> Kufutwa kwa data hautaondolewa. Kabla ya kufuta, hakikisha umebakipia data yako au umyiweka nje kupitia [**Historia**](#history) au [**Dashibodi** > **Maombi Yote**](#dashboard-tabs), kulikomana kitakalofutwa mara kwa mara. Historia ya maombi yawe yote ya kupokea/kutuma kwa kila kichwa cha ombi cha API pia kitafutwa.

<br/>

<a id="transform-prompts"></a>
### Maagizo ya Badiliko

Tumia **Mipangilio** > **Maagizo ya Badiliko** kusimamia maagizo kwa idadi kubwa.

Unaweza:

- kuangalia maagizo yako yaliyohifadhiwa
- kufuta maagizo
- kuleta maagizo kutoka kwenye faili
- kutafuta maagizo kwa ajili ya kuhifadhi au kugawana

<br/>

<a id="users"></a>
### Watumiaji

Tumia **Watumiaji** kusimamia akaunti za watumiaji katika toleo la wavuti. Unaweza kuongeza watumiaji, kusasisha maelezo yao, kusawazisha maneno ya siri, na kufuta akaunti.

<br/>

<a id="api-config"></a>
### Mpangilio wa API

Wapelelezi waliopokelewa ni: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, na **Ollama** (mifumo ya ndani kupitia anwani ya msingi). Unahitaji tu kufafanua wapelelezi ambao watumia.

**Programu ya wavuti: kwa mrabati tu**

Bango la API linawekwa kupitia mvimendo au kusawazisha kwa mazingira ya Docker — halipandikwa kwenye UI ya wavuti. Ukurasa huu unaonyesha ambao wawasilishaji wana bango lililosawazishwa na kukuwezesha kujaribu kila moja kwa kuboresha kitufe cha **`Jaribu`**.

<br/>

> ℹ️ **TAARIFA**<br/>
> Kubadilisha bango la API, usasishe mvundo wa mazingira kwenye mfumo wako au usanidi wa Docker na uzirejeshe kifunguo au kikabati.

<br/>

**Programu ya computeri**

Tumia **Mpangilio wa API** kuweka bango la API kwa kila mpokeaji ambao unatumia. Kwa ajili ya Ollama, weka **anwani ya msingi** badala ya bango la API.

<br/>

> 💡 **Shauri** <br/>
> Kama hutaki kutumia bango la API au kulipa matumizi, unaweza [pakua Ollama](https://ollama.com) na kuchakata mifumo (kama vile `translategemma:4b`) kwenye kifaa chako bure. Mbali hapo, unaweza kuunda akaundi ya OpenRouter isiyo na malipo (hakuna kadi ya sarakani inahitajika) kutumia mifumo yao isiyo na malipo, au kupata bango la API bure kutoka kwa Cerebras, Google, Groq, au Mistral AI.

<br/>

- Weka tu wapelelezi ambao wanahitajika. Katika **Mipangilio** > **Mifumo**, kitambaa kimoja cha mfumo kinanaza kwa mujibu wa mpokeaji (kama vile `openrouter/openrouter/bure`, `openai/gpt-4o`, `ollama/llama3`).

Kiongeze bango la API, ingiza thamani katika sanduku la maandishi kisha boleza **`Hifadhi`**. Kubadilisha bango lililosakinishwa, boleza **`Hariri`**. Kuthibitisha kwamba bango linafanya kazi, boleza **`Jaribu`**. Kwa ajili ya anwani ya msingi ya Ollama, daima boleza **`Jaribu`** kupima muunganisho.

<br/>

> ℹ️ **TAARIFA**<br/>
> Huwezi kuona thamani ya sasa ya bango la API. Unaweza tu kubadilisha kwa kutumia kitufe cha **`Hariri`**.
> Bangao ya API inahifadhiwa kwenye mfumo uliochokofuaniwa.

<br/>

<a id="about"></a>

### Kuhusu

Lipu ya **Kuhusu** inaonyesha:

- jina la programu
- nambari ya toleo
- tarehe ya kujengwa
- kiungo cha hifadhi ya mradi

<br/><br/>

<a id="common-issues"></a>
## Maswali ya kawaida

Kama kitu hakifanyiwa kama ilivyotarajiwa, angalia mambo yafuatayo kwanza.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Programu haiwezi kutafsiri, kuandika upya, au kubadilisha maandishi

Angalia kwamba:

- umekagua mfumo katika mshipi wa zana
- kuna angalau mfumo mmoja ulioorodheshwa katika [**Mipangilio** > **Mifumo**](#models)
- mpangilio wako wa API una kifanya kazi

Kama unatumia programu ya kompyuta:

1. Fungua [**Mipangilio** > **Mpangilio wa API**](#api-config).
2. Angalia kwamba angalau kinuma cha API kimoja kimehifadhiwa.
3. Bonyeza **Jaribu** kando ya mtoa ili kuthibitisha kwamba kinuma kina kifanya kazi.

<br/>

<a id="the-model-list-is-empty"></a>
### Orodha ya mifumo ni tupu

Fungua [**Mipangilio** > **Mifumo**](#models) na bonyeza **Ponda**.

Ikiwa inahitajika:

- tafuta mfumo
- weka **tu ya bure** iweze kuchaguliwa
- ongeza mfumo moja au zaidi kwenye **Mifumo iliyochaguliwa**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Matokeo ni ya polepole au ghali sana

Jaribu moja au zaidi ya haya:

- chagua mfumo tofauti
- tumia maandishi mafupi
- zima **Ufafanuzi wa wakati halisi (wakati unaposahihisha)** katika [**Mipangilio** > **Mipangilio ya Jumla**](#general-settings)
- tumia mifumo bila malipo kwa kazi rahisi (tazama [Mifumo](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Kiolesura kiko kwa lugha mbaya

Bonyeza kipengele cha dunia mshipi wa zana</a> na uchague **Lugha ya Kiolesura** inayopendelea.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Maandishi ni ya kuchana sana au vigumu kusoma

Fungua [**Mipangilio** > **Mipangilio ya Jumla**](#general-settings) na ubadilishe:

- **Familia ya Fonti**
- **Safi**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Matangazo kwenye dashibodi ni yatupu

Hii ni ya kawaida kama:

- hutumii tu **mifumo ya bure** (matangazo ya gharama yatapata kuwa tupu)
- **kichujio cha wakati** kilichochaguliwa hakifunika kipindi ambacho maombi yalifanywa — jaribu **Wote** kutazama

Kama matangazo bado yako tupu baada ya kuchagua **Wote**, thibitisha kuwa maombi yanaonekana katika [**Historia**](#history) au katika lipu ya **Maombi Yote**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Gharama inaonyesha “haipo” au inaonekana si sahihi

Unapotumia mifumo kupitia **OpenRouter**, programu inaonyesha matumizi yako halisi yanayoripotiwa na OpenRouter.

Kwa **watoto wa mtoa wengine** (OpenAI moja kwa moja, Anthropic moja kwa moja, n.k.), gharama imehesabiwa kwa kusaidia takwimu za bei zilizotolewa na OpenRouter. Ikiwa hakuna bei ya kulinganishwa imetambuliwa kwa mfumo, gharama itaonekana kama **haipo** na hazitaongezwa katika jumla yako.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Jumla ya gharama haifanani na bili yangu ya mtoa

Nambari zote za gharama katika programu ni **mahesabu kwa urahisi tu**, si katika kitabu rasmi cha bili.

Ili kufanya jumla karibu zaidi na matumizi yako halisi ya OpenRouter, fungua [**Mipangilio** > **Ufuatiliaji wa Gharama**](#cost-tracking) na bonyeza **Fananisha na matumizi ya Kinuma cha API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Ukurasa wa Historia unakosekana kwenye upande wa kushoto

**Hifadhi historia ya utekelezaji** kama kumeshazimwa. Fungua [**Mipangilio** > **Mipangilio ya Jumla**](#general-settings) na kumwezesha. Kumbuka kwamba kuwawezesha hakurudushii data ya historia iliyofutwa awali.

<br/>

<a id="web-app-session-expired"></a>
### Programu ya wavuti: umerejelewa kwa ukurasa wa kuingia bila kuchochewa

Kikao chako kilisitishwa. Ingia tena. Ikiwa hutokea mara nyingi, angalia mpangilio wa server kuhusu mipangilio ya muda wa kikao.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Dashibodi haionyeshi data kwa watumiaji wengine (wavuti)

Ni **wasimamizi tu** wanaoweza kuangalia data kutoka kwa watumiaji wote kupitia kikuchizo cha **Mtumiaji**. Watumiaji wa kawaida wanaweza kuona shughuli zao tu kama ilivyo mpangiliwa.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Nimebadilisha kikumbusho na kwishia mabadiliko

Wakati unapobadilisha kikumbusho, wasiwasi kubonyeza **Hifadhi** kabla hujabonyeza **Rudi Nyuma na Kutekeleza**.

<br/><br/>

<a id="quick-tips"></a>
## Vidokezo vya haraka

- Anza na [**Tafsiri**](#translate) kuhakikisha kwamba mpangilio wako una kifanya kazi kabla unaelekea [**Andika Upya**](#rewrite) au [**Badilisha**](#transform).
- Tumia [**Andika Upya**](#rewrite) kwa usahihisho wa maneno ya kila siku.
- Tumia [**Badilisha**](#transform) unapowajibika mtiririko wa kazi unaoendelea kwa kazi fulani.
- Tumia [**Dashibodi**](#dashboard) ikiwa unataka kuangalia matumizi na gharama.
- Tumia [**Historia**](#history) ili kuchunguza utendaji wa awali na maandishi yoyote yote ya kuingiza/kuondoa.
- Weka nje kikumbusho mara kwa mara ikiwa unajenga maktaba ya kikumbusho ambayo unataka kuilinda salama (tazama [Kikumbusho cha Kibadilishi](#transform-prompts)) au ukiwa unataka kushiriki na wengine.

<br/><br/>

<a id="disclaimer"></a>

## Hakuna Malisho

Majina na alama za bidhaa ni mali ya wanamiliki wao wa kisheria na hutumiwa kwa ajili ya ustambulisho pekee. Programu hii haifanyi kazi chini ya kampuni yoyote ya majina iliyotajwa wala haijawahi kupokelewa.

<br/><br/>

<a id="license"></a>
## Leseni

Haki za kuchapisha © 2026 Waldemar Scudeller Jr.

[Lisensi ya Apache 2.0](LICENSE)