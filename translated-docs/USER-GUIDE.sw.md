---
translated_at: "2026-03-26T01:08:05.653Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt bendera](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Mwongozo wa Mtumiaji

<br/>

<a id="introduction"></a>
## Utangulizi

Transrewrt unasaidia kufanya kazi na maandishi kwa njia tatu kuu:

- **Tafsiri** - badilisha maandishi kutoka lugha moja hadi nyingine.
- **Andika upya** - toa maandishi kwa mtindo mwingine, kama vile kufanya iwe wazi zaidi, fupi zaidi, au rasmi zaidi.
- **Badilisha** - shughulikia maandishi kwa maelekezo maalum ya AI yanayoitwa vihamishi.

<br/>

Mwongozo huu unaelezea jinsi ya kutumia programu baada ya kuisakinisha na ianzishwe. Kipindi cha kusakinisha kinapatikana kwenye **[README](README.sw.md)** kuu.

<br/>

> ℹ️ **DARAKISHA**<br/>
> Transrewrt unapatikana kama programu ya kompyuta kwa Windows na Linux, pia kama programu binafsi ya wavuti. Mwongozo huu unazingatia matumizi ya kila siku ya programu. Wakati kitu kiko tu katika toleo moja, kinaashiria wazi.

<small>**Soma kwa lugha zingine:** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Darakisha kuhusu tafsiri za UI na ukaguzi:** Lugha zote za mfumo binafsi b except the original English (UK) 
> zilitafsiriwa kwa kutumia vitendaji vya AI; maneno yanaweza kuwa mabivu au kuwa na makosa.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Jedwali la Yaliyomo** 

- [Kabla ya kuanza](#before-you-start)
  - [Jinsi ya kupata ufunguo wa OpenRouter API isiyo na malipo (programu ya kompyuta)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Anza kufanya](#getting-started)
- [Sehemu kuu za dangalizi](#main-parts-of-the-window)
  - [Upau wa kuwepo](#sidebar)
  - [Upau wa zana](#toolbar)
  - [Sehemu za kuingiza na kutolewa](#input-and-output-panels)
- [Tafsiri](#translate)
  - [Tafsiri maandishi](#translate-text)
  - [Chaguo la lugha](#language-selection)
  - [Mipangilio muhimu ya tafsiri](#helpful-translation-settings)
- [Andika upya](#rewrite)
- [Badilisha](#transform)
  - [Soma vihamishi vilivyopo](#run-an-existing-prompt)
  - [Kama hakuna vihamishi bado](#if-you-have-no-prompts-yet)
  - [Unda vihamishi haraka](#create-a-prompt-quickly)
  - [Hariri vihamishi](#edit-a-prompt)
  - [Jaribu vihamishi kabla ya kutumia](#test-a-prompt-before-using-it)
- [Dashibodi](#dashboard)
  - [Pataki data](#filter-the-data)
  - [Vidaka vya dashibodi](#dashboard-tabs)
  - [Toa data nje](#export-data)
  - [Futa rekodi zilizohifadhiwa kwa ajili ya mfano](#delete-stored-records-for-a-model)
- [Historia](#history)
  - [Chuja data](#filter-the-data-1)
  - [Toa historia data nje](#export-history-data)
- [Mipangilio](#settings)
  - [Mipangilio ya jumla](#general-settings)
  - [Mifano](#models)
  - [Lugha](#languages)
  - [Kufuatilia gharama](#cost-tracking)
  - [Vihamishi vya kubadilisha](#transform-prompts)
  - [Watumiaji](#users)
  - [Usanidi wa API](#api-config)
  - [Kuhusu](#about)
- [Matatizo ya kawaida](#common-issues)
  - [Programu haiwezi kutafsiri, kuandika upya, au kubadilisha maandishi](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Orodha ya mfano ni tupu](#the-model-list-is-empty)
  - [Matokeo ni ya polepole au ghali sana](#the-result-is-too-slow-or-too-expensive)
  - [Ungu ni kwa lugha batili](#the-interface-is-in-the-wrong-language)
  - [Maandishi ni madogo mno au vigumu kusoma](#the-text-is-too-small-or-hard-to-read)
  - [Michartu ya dashibodi ni tupu](#dashboard-charts-are-empty)
  - [Gharama inaonyesha "haiapatikani" au inaonekana batili](#cost-shows-not-available-or-seems-wrong)
  - [Jumla ya gharama haiendani na bili yangu kutoka msambaza](#total-cost-does-not-match-my-provider-bill)
  - [Ukurasa wa historia umekosekana kwenye upau wa kunako](#the-history-page-is-missing-from-the-sidebar)
  - [Programu ya wavuti: umebwerezwa kwenye ukurasa wa kuingia kwa usahihi](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Dashibodi haioneshi data kwa watumiaji wengine (wavuti)](#dashboard-shows-no-data-for-other-users-web)
  - [Nimebadilisha vihamishi, nikapoteza mabadiliko](#i-changed-a-prompt-and-lost-the-edits)
- [Vidokezo vya haraka](#quick-tips)
- [Tahadhari](#disclaimer)
- [Leseni](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Kabla ya kuanza

Ili kutumia Transrewrt, unahitaji ufikiaji wa angalau moja kwa moja kwa mtoa AI. Watoa wafanyakazi wafakiwa ni: [OpenRouter](https://openrouter.ai) (ambao unajumuisha mifumo mingi), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, na [Ollama](https://ollama.com) kwa mifumo ya wima.

Hauhitaji kuchagua mfumo bora ili kuanza. Mara baada tu toweze ufikia API yako ya OpenRouter, programu huamsha otomatiki kipengele cha **bure** cha OpenRouter. Hii inaruhusu uanze mara moja kutafsiri, kuandika upya, na kubadilisha maandishi. Kama bura, unaweza pia kupata ufikiaji bora kutoka Cerebras, Google, Groq, au Mistral AI.

Kwa maneno rahisi:

- **Mfumo** ni injini ya AI inayofanya kazi. Mifumo inaorodheshwa na **ugani wa mtoa** (kama vile `openrouter/…`, `openai/…`, `ollama/…`).
- **Ufunguo wa API** (au, kwa ajili ya Ollama, **URL msingi**) ni njia ambayo programu huifiki watoa.

Ikiwa unatumia **programu ya kompyuta**, ongeza ufunguo katika [**Mipangilio** > **Uthibitishaji wa API**](#api-config) kwa kila mtoa unachotumia. Kwa matumizi ya OpenRouter pekee, tazama [Jinsi ya kupata ufunguo wa API](#how-to-get-an-api-key-desktop-app) chini. Ikiwa hutaki kutumia ufunguo wa API, unaweza kusakinisha Ollama (kutoka [ollama.com](https://ollama.com)) na kubadilisha mifumo ya wima badala yake, kama vile `translategemma:4b`.

Ikiwa unatumia **toleo la wavuti**, mmiliki wa seva anaweka watoto kwa vigezo vya mazingira, kwa hivyo hutaweza kuingiza ufunguo wa API moja kwa moja kwenye programu.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Jinsi ya kupata ufunguo bora wa OpenRouter API (programu ya kompyuta)

Ikiwa unatumia programu ya kompyuta, fuata hatua hizi:

1. Nenda kwenye [OpenRouter](https://openrouter.ai) kwenye kivinjari chako cha wavuti.
2. Unda akaunti au ingia.
3. Fungua ukurasa wa [Ufunguo](https://openrouter.ai/keys).
4. Bonyeza kitufe cha kuunda ufunguo mpya wa API.
5. Mpa ufunguo jina ili utambue baadaye.
6. Nakili ufunguo mpya unaofungua.
7. Rudi kwenye Transrewrt na fungua **Mipangilio** > **Uthibitishaji wa API**.
8. Weka ufunguo katika **Ufunguo wa API wa OpenRouter** (chini ya **Mipangilio** > **Uthibitishaji wa API**).
9. Bonyeza **Jaribu ufunguo wa OpenRouter** ili uhakikie linavyofanya kazi.

<br/><br/>

<a id="getting-started"></a>
## Kuanza

Ikiwa hii ni mara ya kwanza unayotumia Transrewrt, fuata mpangilio huu:

1. Fungua programu.
2. Chagua **lugha ya kuingiza** kwenye ikoni ya dunia kama inahitajika.
3. Ikiwa uko kwenye **programu ya kompyuta**, fungua [**Mipangilio** > **Uthibitishaji wa API**](#api-config), ongeza ufunguo wa API kwa angalau mtoa mmoja (kama vile OpenRouter), na bonyeza **Jaribu** kuhakikia linavyofanya kazi.
4. Fungua [**Mipangilio** > **Mifumo**](#models) na ongeza zaidi ya mmoja wa mifumo kwenye **Mifumo Ilimewachagua**.
5. Fungua [**Mipangilio** > **Lugha**](#languages) na chagua **Lugha Zetu** kama unataka kuziweza kiongozi kwa matumizi yako ya kawaida.
6. Nenda kwenye **Tafsiri** na uendeshe tafsiri rahisi ili uhakikie kila kitu kinafanya kazi.
7. Mara baada ya kufanya kazi hiyo, jaribu **Andika upya** kisha **Badilisha**.

Mpangilio huu ni muhimu. Unauzu tatizo la kawaida zaidi la kuanza kizazi: kupanga wito kabla ya programu kuwa na uhusiano wa API unaofanya kazi ama mfumo uliochaguliwa.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Sehemu kuu za dirisha

Programu imegawanywa katika maeneo matatu kuu:

- **Barua ya upande** upande wa kushoto.
- **Kivinjari cha juu** kwenye juu.
- **Eneo la kazi** katikati.

<br/>

<a id="sidebar"></a>
### Barua ya upande

Tumia orodha ya upande ili kuhamia programu. Unaweza kuficha orodha ya upande ili upate nafasi zaidi kwa kubonyeza ikoni karibu na logo la programu.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/sw/sidebar.png" alt="Orodha ya programu" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Tafsiri</strong> inafungua eneo la kazi la kutafsiri.</li><br/>
        <li><strong>Andika upya</strong> inafungua eneo la kazi la kurahisisha upya.</li><br/>
        <li><strong>Badilisha</strong> inafungua eneo la kazi ya kipele cha kibinafsi.</li><br/>
        <li><strong>Bodi</strong> inaoneshesha habari za matumizi na gharama.</li><br/>
        <li><strong>Mipangilio</strong> inafungua ubao wa mipangilio.</li><br/>
        <li><strong>Historia</strong> inaoneshesha historia ya matumizi pamoja na maandishi ya pembeji na ya toka.</li><br/>
        <li><strong>Mtumiaji</strong> inaoneshesha jina la mtumiaji aliyewasilishwa (kwa toleo la wavuti pekee).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barua pepe

Barua pepe inabadilika kidogo kulingana na unakokwenda katika programu.

- Upande wa kushoto, inaonesha jina la ukurasa sasa.
- Upande wa kulia, inaonesha **kichagua cha kifaa** na kitufe cha **lugha ya kuingiza**.

**Kichagua cha kifaa** kikuruhusu kuchagua kifaa cha AI gani kutumia kwa ajili ya kazi ya sasa.

  ![Kichagua cha kifaa](../images/screenshots/sw/model-selector.png)

 Baadhi ya mikondo isiyo ya malipo inaweza si kipatikanaji daima—wakati mwingine haya ni mbali au yanazo mipaka ya matumizi. Ikiwa hivi kitatokea, programu itamchora kifaa kimoja hicho kutoka kwenye orodha yako inayopatikana. Ili udhibiti mikondo itakayotazama, kwenda kwenye [**Mipangilio** > **Mikondo**](#models) na hariri orodha yako ya mikondo. 
 Unapweza pia kufungua mipangilio ya kifaa moja kwa moja kwa kupiga kwenye piktografi ya mtoa kushoto cha jina la kifaa barua pepe.

<br/>

**Piktografi ya ua + msimbo wa lugha** inabadilisha lugha ya kuingiza programu, kama vile menyu na vitufe. Hai**badilishi** lugha za kutafsiri zinazotumiwa kwenye **Tafsiri**.

  ![Kichagua cha lugha ya kuingiza](../images/screenshots/sw/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Vipande vya kuingiza na kutolewa

Sehemu kubwa ya eneo la kazi inatumia **Kuingiza** kushoto na **Kutolewa** upande wa kulia.

Kila kipande pia kinaonesha:

| **Kuingiza**                                                          | **Kutolewa**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Hesabu ya herufi <br/>- Hesabu ya maneno <br/>- Hesabu ya mifundo   <br/> | - Muda uliopotea na kazi ilikamilika<br/>- **TPS** (vipande vya herufi kwa sekunde)<br/>- Hesabu za herufi, maneno, na mifundo<br/>- Kifaa kilichotumika |


Ikiwa unaulizwa namna maneno ya kiufundi:

- **Kipande (Token)** inamaanisha sehemu ndogo ya maandishi. Unaweza kufikiria kama sehemu ya neno au neno fupi.
- **TPS** inamaanisha vipande vingapi vya maandishi kifaa kimechakata kila sekunde.

<br/>

Unapweza pia kufuatilia gharama ya kila kitendo (ikiwa iwapo) na gharama ya jumla, kumaonesha chaguo `Onesha habari za gharama kwenye vitendo` katika [**Mipangilio** > **Mipangilio ya kawaida**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Tafsiri

Tumia **Tafsiri** unapokipenda kubadilisha maandishi kutoka lugha moja hadi nyingine.

![Eneo la kazi la kutafsiri](../images/screenshots/sw/translate.png)

<br/>

<a id="translate-text"></a>
### Tafsiri maandishi

1. Fungua **Tafsiri**.
2. Chagua lugha kwenye **Kutoka**.
3. Chagua lugha kwenye **Kwenda**.
4. Chagua kifaa katika barua pepe.
5. Andika au pashta maandishi kwenye **Kuingiza**.
6. Bonyeza **Tafsiri**.
7. Soma matokeo katika **Kutolewa**.
8. Tumia kitufe cha nakili ikiwa unataka kunakili matokeo.

<br/>

<a id="language-selection"></a>
### Uchaguzi wa lugha

- **Kutoka** kimaanisha lugha maalum au **Gundua Lugha**.
- **Kwenda** ni lugha ambayo unataka matokeo kuwepo.

**Lugha bora** zilizochaguliwa zinatoka juu zaidi ya orodha. Unaweza ziweke kwenye [**Mipangilio** > **Lugha**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Mipangilio muhimu ya kutafsiri

Katika [**Mipangilio** > **Mipangilio ya kawaida**](#general-settings), unaweza kubadilisha jinsi kutafsiri kinavyofanya kazi:

- **Tafsiri otomatiki baada ya kunakili** hutafsiri mara moja unapokipashta maandishi.
- **Nakili otomatiki matokeo kwenye ubao wa kunakiliwa** hunakili matokeo moja kwa moja baada ya kumalizika kikamilifu.
- **Tafsiri wa wakati (wakati wa kuandika)** hutafsiri wakati unaowandika.
- **Muda uliopita (ms)** unadamu muda maelfu ambalo programu inasubiri kabla ya kutafsiri kwa wakati.
- **Enter** inadamu kinachotokea unapopiga `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Andika tena

Tumia **Andika tena** unapokipenda kuboresha maneno bila kubadilisha maana kuu.

![Eneo la kazi la kuandika tena](../images/screenshots/sw/rewrite.png)

Hii ni muhimu kwa:

- kurekebisha maandishi na nyakati
- kuifanya maandishi wazi zaidi
- kuifanya maandishi rasmi zaidi au mbele ya rasmi
- kufupisha au kuspana maandishi
- kuifanya maandishi kuisikia kama ni ya kiufundi zaidi

<br/>

> 💡 **SIRORO**<br/>
> Unapowatumia "**Angalia Maandishi & Nyakati**" mode, kitufe cha `Onesha mabadiliko` kitatokea kwenye panel ya kutolewa.
> Bofya kitufe hicho ili kubadili uonyeshaji wa mabadiliko, kuonesha au kuficha mabadiliko maalum yaliyofanyika kwenye maandishi yako.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Badaisha

Tumia **Badaisha** unapotaka AI kufuata maelekezo maalum.

![Eneo la kazi la Badaisha](../images/screenshots/sw/transform.png)

Huu ni sehemu inayowezesha zaidi katika programu. Unaweza kuitumia kwa kazi kama vile:

- kufupisha maoni
- kubadili maandishi ya msingi kuwa barua pepe iliyosahihisha
- kutoa pointi muhimu
- kubadili maandishi kwa muundo maalum
- au shughuli zingine zilizo na maelekezo maalum kwa maandishi ya kuingiza

<br/>

<a id="run-an-existing-prompt"></a>
### Chagua maelekezo yaliyopo

1. Fungua **Badaisha**.
2. Chagua maelekezo kutoka kwenye orodha ya maelekezo.
3. Ikiwa kisanduku cha lugha ya **Lengo** kitatokea, chagua lugha kama unataka.
4. Andika au gumulia maandishi kwenye **Kuingiza**.
5. Bonyeza **Badaisha**.
6. Soma matokeo kwenye **Toka**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Ikiwa bado huna maelekezo

Ikiwa orodha yako ya maelekezo ni wazi, bofya **Pakia maelekezo ya mfano**. Hii itatumia mifano inayomo kama baadhi ya maelekezo ili uanze haraka.

<br/>

> ℹ️ **KUMBUKA**<br/>
> Maelekezo ya mfano hutolewa kwa Kiingereza. Baada ya kupakia, unaweza kuhariri maelekezo na kubonyeza **Tafsiri maelekezo** ili yasawiriwe kwa lugha yako.

<br/>

<a id="create-a-prompt-quickly"></a>
### Unda maelekezo kwa njia ya haraka

Jinsi ya haraka zaidi ya kujenga maelekezo ni kama ifuatavyo:

1. Bonyeza **Maelekezo Mapya**.
2. Bonyeza **Kujenga maelekezo**.
3. Eleza unachotaka maelekezo kufanya.
4. Chagua mfumo.
5. Weka programu ijenge mikopo.
6. Imbaga mikopo na ubonyeze **Hifadhi**.

![Kujenga maelekezo](../images/screenshots/sw/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Hariri maelekezo

Unapotengeneza au kuhariri maelekezo, kipengele cha kuhariri kitatokea upande wa kushoto na eneo la kujaribu kitatokea upande wa kulia.

![Kipengele cha kuhariri maelekezo](../images/screenshots/sw/transform-prompt-edit.png)

Sehemu kuu ni:

- **Jina la maelekezo**: jina linaloonekana kwenye orodha ya maelekezo.
- **Maelekezo ya maelekezo (ya si lazima)**: maelezo machache yanayoonjewa kwa mtumiaji wakati wa kutumia maelekezo.
- **Wajibu wa mfumo**: jukumu jumla uliohamishiwa kwa AI, kama vile 'Wewe ni msaidizi wa unachoweza kumsaidia'.
- **Maelekezo ya mfumo (moja kwa mstari)**: sheria maalum ambazo unataka AI kufuata.
- **Maelezo ya takwimu**: maneno machache yaliyoonyesha matokeo, kama vile 'ufupisho' au 'kandishi upya'.
- **Wastani (0.0 → 1.0)**: mwelekeo ambao mfumo utafanya kazi; angalia chini.
- **Ulishe lugha ya lengo**: unaweza kutoa kisanduku cha kuchagua lugha ya lengo wakati maelekezo yanachaguliwa.

Ikiwa termu ya kiufundi **Wastani** ni mpya kwako, fikiria kama ifuatavyo:

- Wastani **wa chini** unaosesha matokeo yenye kudumu na uwezekanaji wa kudumu.
- Wastani **wa juu** unaosesha ubunifu na ubunifu zaidi.

Unaweza pia kutumia:

- **`Kujenga maelekezo`** kuunda mikopo mpya kutoka kwa maelezo rahisi
- **`Kuboresha maelekezo`** kuhariri maelekezo yaliyopo
- **`Tafsiri maelekezo`** kusawiri maelekezo

<br/>

> ⚠️ **ONYO**<br/>
> Bonyeza **`Hifadhi`** kabla ya ubonyeze **`Rudi kwenye Kujaribu`**. Ikiwa utarudi pasipo kuhifadhi, mabadiliko yako yatakwama.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Jaribu maelekezo kabla ya kuitumia

Paneli ya jaribio ya kulia inakuruhusu ujaribu maelekezo na maandishi ya sampli kabla ya kuwaitumia kwenye kazi yako ya kila siku.

Hii inafaa kwa wakati:

- unapo kujenga maelekezo mapya
- unapo kulinganisha toleo mbili ya maagizo
- unapopenda kuangalia sauti, urefu, au muundo wa matokeo

<br/>

> ℹ️ **KUMBUKA**<br/>
> Unaweza kutoa maagizo uliyohifadhi na kuvitolewa [**Mipangilio** > **Maelekezo ya Badiliko**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Dashibodi

Tumia **Dashibodi** ile usione kiasi ambacho umeitumia programu na gharama iliyo (kwa mifundi inayopewa kwa malipo).

![Muhtasari wa Dashibodi](../images/screenshots/sw/dashboard-summary.png)


<br/>

> ℹ️ **KUMBUKA**<br/>
> Ikiwa hutumia tu mifumo bila malipo, micharti inayohusiana na malipo itakuwa iko wazi. 

<br/>

<a id="filter-the-data"></a>
### Chuja data

Tumia vittoni vya kuchuja juu kulindua kipindi.

![Vichusho vya Dashibodi](../images/screenshots/sw/dashboard-filter.png)

<br/>

> ℹ️ **KUMBUKA**<br/>
> Kichusho cha **Mtumiaji** kinaonekana kwa wabalozi tu katika ukurasa wa wavuti. Watumiaji wa kawaida hawataiona kichusho hiki, wala hakipatikani katika programu ya kompyuta.

<br/>

<a id="dashboard-tabs"></a>

### Vichupo vya Dashibodi

- **Muhtasari** unapatia maelezo ya ujumla juu ya matumizi na gharama.
- **Kwa matumizi** huonesha shughuli kulingana na lugha ya tafsiri, njia ya kuandika upya, na maagizo ya kubadilisha.
- **Kwa mudhuli** inaonyesha madhuli uliyotumia na gharama zao.
- **Kwa siku** inaonyesha jumla kwa kila siku.
- **Maombi yote** inaonyesha historia kamili ya maombi na kukuruhusu kuisafirisha.

<br/>

<a id="export-data"></a>
### Wasilisha data

Vitabu vya dashibodi vinaweza kusafirisha data kwenye:

- **JSON**
- **CSV**
- **XLSX**

Huweza kutosha kama ungependa kuchambua shughuli nje ya programu au kugawana ripoti.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Futa rekodi zilizohifadhiwa kwa ajili ya mudhuli

Katika **Kwa mudhuli** au **Maombi yote**, unaweza kufuta rekodi zilizohifadhiwa kwa mudhuli kwa kubonyeza kwenye ikoni ya "kikombe cha mbali".

> ⚠️ **ONDOA**<br/>
> Umefuta rekodi zilizohifadhiwa kwa muda hauwezi kurejea tena. Tumia hili tu ikiwa una uhakika kwamba hakuna hitaji la tena kwa historia hiyo.

Iwapo ungependa kufuta data yote au kufuta rekodi kulingana na umri wao, nenda kwenye [**Mipangilio** > **Ufuatiliaji wa gharama**](#cost-tracking). Humo utapata chaguo la kufuta data yote au data pekee ambayo imeisha kabla ya tarehe fulani.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Historia

Bonyeza **Historia** ili uone historia ya vitendo vyako ndani ya **Transrewrt**, vinavyojumuisha maingizo na putao kwa kila kitendo. 

![Ukurasa wa historia](../images/screenshots/sw/history.png)

<br/>

<a id="filter-the-history"></a>
### Chuja data

**Historia** hutumia vichujio vilevile vilivyonatumika kwenye ukurasa wa **Dashibodi**. Tumia kuchagua muda uliohitajika.

![Vichujio vya dashibodi](../images/screenshots/sw/dashboard-filter.png)

<br/>

> ℹ️ **KUMBUKA**<br/>
> Kichujio cha **Mtumiaji** kinaonekana tu kwa wasimamizi katika toleo la wavuti. Watu watawala hawataiona hicho kichuo, na hakitawekwa katika toleo la kompyuta.

<br/>

<a id="export-history-data"></a>
### Wasilisha data ya historia

Ukurasa wa historia unaweza kusafirisha data iliyochujwa kwa:

- **JSON**
- **CSV**
- **XLSX**

Huweza kutosha kama ungependa kuchambua shughuli nje ya programu au kugawana ripoti.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Mipangilio

Fungua **Mipangilio** kutoka upande wa kuwanda ili kumiridhisha namna programu inavyofanya kazi.

Vichupo vinavyopatikana vinategemea jukwaa na wajibu wako:

  | Kichupo             | Kompyuta | Wavuti (msimamizi) | Wavuti (mtumiaji wa kawaida) |
  |---------------------|:--------:|:------------------:|:----------------------------:|
  | Mipangilio ya jumla |   ndio   |       ndio         |             ndio             |
  | Madhuli             |   ndio   |       ndio         |             ndio             |
  | Milango             |   ndio   |       ndio         |             ndio             |
  | Ufuatiliaji wa Gharama |   ndio   |       ndio         |              —               |
  | Maagizo ya Ubadilishaji |   ndio   |       ndio         |             ndio             |
  | Watumiaji           |    —     |       ndio         |              —               |
  | Mfumo wa API        |   ndio   |       ndio         |              —               |
  | Kuhusu              |   ndio   |       ndio         |             ndio             |

<br/>

> ℹ️ **KUMBUKA**<br/>
> Katika toleo la wavuti, kila mtumiaji ana mipangilio yake mwenyewe. Mipangilio kama haya kama madhuli yanayochaguliwa, milango, chaguzi za jumla, na maagizo ya kubadilisha huwekwa kwa kila mtumiaji. Mabadiliko ambayo utayafanya hayataathiri watumiaji wengine.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Mipangilio ya jumla

Tumia **Mipangilio ya jumla** kudhibiti tabia ya kuandika, kama maelezo ya utekelezaji yanahifadhiwa kwa ajili ya [**Historia**](#history), na muonekano.

**Tabia**

- **Tabia ya ENTER** inachagua kama `Enter` inaanzisha kazi au inaweka mkono mpya.
- **Tafsiri otomatiki baada ya kunakili** inaanzisha tafsiri mara tu unaposhtakila maandishi.
- **Nakili matokeo kiotomatiki kwenye ubao wa kunakili** hukopi matokeo yasiyofeli kiotomatiki.
- **Tafsiri kwa wakati (wakati unapoandika)** inatafsiri wakati unapoandika.
- **Muda uliopotea (ms)** unaweka muda wa subira kwa tafsiri kwa wakati.

**Historia**

- **Hifadhi historia ya utekelezaji** hudhibiti kama tafsiri kila moja, kuandika upya, na kubadilisha hutambua **maingizo na putao** kwa mtazamo wa **Historia** upande wa kuwanda. Kuitua huku huomba uthibitishaji; ikiwa unakubali, historia iliyohifadhiwa itafutwa kutoka kwenye hifadhidata.
- **Futa data ya historia** inakuruhusu kufuta maandishi yaliyohifadhiwa kulingana na umri (kama vile yale ambayo yameisha zaidi ya miezi kadhaa, au **data yote (wafuta wote)**) kwa kutumia **Futa data**. Kinaathiri tu maandishi yaliyohifadhiwa kwa mtazamo wa **Historia**; **hailifute** data za gharama au jumla za matumizi. Kufuta au kupunguza data ya **gharama**, tumia [**Mipangilio** > **Ufuatiliaji wa gharama**](#cost-tracking).

**Muonekano**

- **Onyesha habari za gharama kwenye vitendo** hudhibiti kuonekana kwa gharama kwa kila kitendo (kama ipo) na kiasi kikuu cha gharama kwenye sehemu za Tafsiri, Andika upya, na Badilisha.
- **Tarfasu kwa sehemu namba za kumi** inabadili namna inavyoonekana sehemu namba za kumi za gharama.
- **Kwa wavuti peke:** **onyesha umbo la pande kuzunguka programu** inaongeza nafasi zaidi kuzunguka kiolesura.
- **Aina ya fonti** inabadilisha fonti ya maandishi kwenye vichupo vya maandishi.
- **Ukubwa** unabadilisha ukubwa wa fonti.

<br/>

<a id="models"></a>

### Mifumo

Tumia **Mipangilio** > **Mifumo** kupitia kuchagua mifumo inayotazamika kwenye wibike.

![Ukurasa wa Mifumo wa Mipangilio](../images/screenshots/sw/settings-models.png)

Ukurasa una orodha mbili:

- **Mifumo Inayopatikana** upande wa kushoto
- **Mifumo Imekatishwa** upande wa kulia

Vituo vinavyotumika vya kutosha ni:

- **Tafuta mifumo...** kupata mfumo kwa jina
- Vitambaa vya **Mtoa Huduma** kupunguza orodha mpaka kwenye injini moja (OpenRouter, OpenAI, Ollama, …)
- **Bure Tu** kusitisha mifumo tu yanayopatikana kwa bure
- **Sasisha** kupakia upya orodha
- **Panua Zote** na **Punguza Zote** unapokipanga kwa kuzingatia mtoa huduma

Vitambaa vya mfumo vina pamoja sifa ya mtoaji (kama vile `openrouter/…` vs `openai/…`). Vitambaa kama vile **OpenAI (OpenRouter)** vs **OpenAI (moja kwa moja)** vinawasilisha jinsi taarifa inavyotumia.

> ℹ️ **TAARIFA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) ni mfumo wa kupangia njia (router model), si mfumo wa kuzungumza wa kawaida: mchango wake ni JSON unaodhibitisha mwili wa ombi la OpenRouter API (kama vile safu ya `requests` yenye `model` na `messages`). Ikiwa hutumia kwa **Tafsiri**, **Andika Upya**, au **Badilisha**, panel ya matokeo itaonyesha JSON badala ya maandishi yaliyotimia. Chagua mfumo wa maandishi wa kawaida kwa zingineo hizo. Angalia [ukurasa wa mfumo wa Body Builder](https://openrouter.ai/openrouter/bodybuilder) kwenye OpenRouter.

Mahusiano:

 - Ili ongeza mfumo, bofya **Ongeza** au sehemu yoyote katika kiolesura.

 - Ili kuchukua mfumo, bofya **X** karibu nao kwenye **Mifumo Imekatishwa** au **Imekatishwa** kwenye kiolesura kwenye Orodha ya Mifumo Inayopatikana.

 - Kufuta orodha, bofya **Zima Zote**. Mfumo wa bure unaotakiwa utabaki kwenye orodha.

<br/>

> ℹ️ **TAARIFA**<br/>
> Ikiwa hutaki kuongeza sarafu kwenye OpenRouter mara moja, anza kwa kipongozi **Bure Tu** na kuchagua mifumo ya bure (bila karatasi ya mkopo). Unaweza pia kutumia Ollama kupima mifumo kwenye kifaa chako bila uhakiki wa API.

<br/>

<a id="languages"></a>
### Lugha

Tumia **Mipangilio** > **Lugha** kusaidia kupanga orodha za lugha zinazotumika katika programu.

- **Lugha Kuu** zinabakia juu zaidi ya orodha za lugha katika **Tafsiri** na **Badilisha**.
- **Lugha ya mtumiaji** inaruhusu kuongeza lugha ambayo haipo kwenye orodha ya awali.

Ikiwa unageuza lugha ya mtumiaji, itaonekana kwenye kipengele cha kuchagua lugha pamoja na chaguo asili.

<br/>

<a id="cost-tracking"></a>
### Kufuatilia gharama

Tumia **Mipangilio** > **Kufuatilia Gharama** kudhibiti taarifa za gharama.

- **Gharama Jumla** inaonyesha kiasi kikamilifu.
- **Nakili Thamani** hukopia jumla kwenye burahini.
- **Weka Upya Gharama** huhuru jumla iliyohifadhiwa mpaka sifuri.
- **Samaharisho na matumizi ya uhakiki wa API** huweka jumla inafanana na matumizi yanayoripotiwa na akaunti yako ya OpenRouter (kwa OpenRouter tu).
- **Matumizi ya uhakiki wa API** inaonyesha maelezo ya matumizi ya OpenRouter, iwapo yanapatikana.
- **Futa data ya gharama** huondoa data zote, au maingizo tu yanayopitia tarehe iliyochaguliwa.

**Kufuatilia gharama:** Unapotumia mifumo ya OpenRouter, programu inaonyesha matumizi yako halisi na shilingi kulingana taarifa ya gharama kutoka kwa OpenRouter. Kwa watoa wengine wote, programu inahesabu gharama kwa kusaidia bei zilizochapishwa na OpenRouter, ikiwa bei haipo, hesabu inaweza kuwa sifuri.

<br/>

> ℹ️ **TAARIFA**<br/>
> **Nambari zote za gharama ni mahesabu tu ya maelekezo yako tu, si usimamizi wa malipo halisi.**


<br/>

> ⚠️ **ONYO**<br/>
> Uondoke wa data hautakiwa. Kabla ya kufuta, hakikisha umehifadhi data yako au kuikomoa kupitia [**Historia**](#history) 
> au [**Dashibodi** > **Matambo Yote**](#dashboard-tabs), toka hapo itapotea kwa milele.
> Historia yote ya kuingilisha/kutolewa inayohusiana kila kiolesura cha simu ya API pia itafutwa.

<br/>

<a id="transform-prompts"></a>
### Maandiko ya Badilisha

Tumia **Mipangilio** > **Maandishi ya Badilisha** kudhibiti maagizo kwa wingi.

Unaweza:

- kuchunguza maagizo yako ya kushughulika
- kuondoa maagizo
- kuagiza maagizo kutoka kwenye faili
- kutoa maagizo kwa ajili ya kushughulika au kushiriki

<br/>

<a id="users"></a>
### Watumiaji

Tumia **Watumiaji** kudhibiti akaunti za mtumiaji kwenye toleo la wavuti. Unaweza kuongeza watumiaji, kusasisha maelezo yao, kuweka upya nywila, na kufuta akaunti.

<br/>

<a id="api-config"></a>
### Mipangilio ya API

Watoa husaidiwa ni: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, na **Ollama** (mifumo ya kawaida kupitia URL ya msingi). Unahitaji kupanga watoa wanaotumia tu.

**Programu ya wavuti: kwa msimamizi tu**

Maneno ya siri ya API yanapangwa kupitia mazingira ya mfumo au ya Docker — hayawekwi kwenye UI ya wavuti. Ukurasa huu unaonyesha mtoa ambaye amepangiwa siri na kuchukua uwezo wa kujaribu kila moja kwa kubofya kitufe cha **`Jaribu`**.

<br/>

> ℹ️ **TAARIFA**<br/>
> Ili kubadili siri ya API, wasilisha kivinjari cha mazingira kwenye mfumo wako au mpangilio wa Docker na uanzishe upya seva au chombo.

<br/>

**Programu ya kompyuta**

Tumia **Mipangilio ya API** kuhifadhi maneno ya siri ya API kwa kila mtoa unayotumia. Kwa Ollama, weka **URL ya Msingi** badala ya siri ya API.

<br/>

> 💡 **Shauri** <br/>
> Ikiwa hutaki kuweka siri ya API au kulipa kwa matumizi, unaweza [pakua Ollama](https://ollama.com) na kuendesha mifumo (kama vile `translategemma:4b`) kwenye kompyuta yako kwa bure. Pia, unaweza kutengeneza akaunti ya OpenRouter isiyo ya malipo (bila karatasi ya mkopo) kupima mifumo yao ya bure, au kupata siri ya API ya bure kutoka Cerebras, Google, Groq, au Mistral AI.

<br/>

- Ongeza watoa wanaobidi tu. Katika **Mipangilio** > **Mifumo**, kitambulisho cha kila mfumo kinaanza kwa mtoa (kama vile `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Ili kuongeza siri ya API, weka thamani katika uga wa maandishi na bofya **`Hifadhi`**. Ili kubadilisha siri inayopatikana, bofya **`Hariri`**. Ili uhakikie kwamba siri inafanya kazi, bofya **`Jaribu`**. Kwa Ollama URL ya msingi, daima bofya **`Jaribu`** kuchunguza muunganisho.

<br/>

> ℹ️ **TAARIFA**<br/>
> Hautaki kuona thamani ya sasa ya siri ya API. Unaweza tu kubadilisha kwa kubonyeza kitufe cha **`Hariri`**.
> Maneno ya siri ya API yanahifadhiwa kwa usalama kwenye mpangilio.

<br/>

<a id="about"></a>

### Kuhusu

Lipu ya **Kuhusu** inaonyesha:

- jina la programu
- nambari ya toleo
- tarehe ya uundaji
- kiungo cha hifadhi ya mradi

<br/><br/>

<a id="common-issues"></a>
## Maswali yanayowashughulikia wengi

Ikiwa kitu hakifanyika kama inavyotarajiwa, tafadhali hakikisha vitu vifuatavyo kwanza.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Programu haiwezi kutafsiri, kuandika upya, au kubadili maandishi

Hakikisha:

- umekagua modeli katika kiolesura cha juu (toolbar)
- modeli angalau moja imeorodheshwa kwenye [**Mipangilio** > **Modeli**](#models)
- mpangilio wako wa API unaendelea kweli

Ikiwa unatumia programu ya mezani (desktop app):

1. Fungua [**Mipangilio** > **Mpangilio wa API**](#api-config).
2. Hakikisha makini angoro angalau moja yamehifadhiwa.
3. Bonyeza **Jaribu** kando ya mtoa huo ili uthibitishie makini yafanya kazi.

<br/>

<a id="the-model-list-is-empty"></a>
### Orodha ya modeli inaonekana tupu

Fungua [**Mipangilio** > **Modeli**](#models) na bonyeza **Sasisha**.

Ikiwa inahitaji:

- tafuta modeli fulani
- wezesha **Bure Tu**
- ongeza modeli moja au zaidi kwenye **Modeli Zilizochaguliwa**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Matokeo ni yafupi sana au ghali sana

Jaribu moja au zaidi ya hizi:

- chagua modeli tofauti
- tumia maandishi mafupi zaidi
- zima **Tafsiri ya wakati wote (wakati wa kuandika)** kwenye [**Mipangilio** > **Mipangilio Mawasiliano**](#general-settings)
- tumia modeli bila malipo kwa kazi rahisi (tazama [Modeli](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Kwenye mstari wa programu kimebeba lugha mbaya

Bonyeza ikoni ya dunia katika [kiolesura cha juu](#toolbar) na uchague **Lugha ya Mstari** utakayoipenda.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Maandishi ni madogo sana au yanashindwa kusomeshwa

Fungua [**Mipangilio** > **Mipangilio Mawasiliano**](#general-settings) na ubadilishe:

- **Familia ya Fonti**
- **Ukubwa**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Mchoro wa ubalo (dashboard) unaonekana tupu

Hii ni kawaida ikiwa:

- hutumia tu **modeli bila malipo** (michoro ya gharama itaonekana tupu)
- **kiolesura cha wakati** kilichochaguliwa hakikidhi kipindi ambapo mauzo yalifanyika — jaribu **Wote** kuelewa

Ikiwa michoro bado inaonekana tupu baada ya kuchagua **Wote**, hakikisha mauzo yamenionekana kwenye [**Historia**](#history) au kwenye kiolesura cha **Mauzo Yote**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Gharama inaonekana kama “haiapatikani” au inaonekana si sahihi

Wakati unapotumia modeli kupitia **OpenRouter**, programu inaonesha matumizi yako halisi yanayotokana na OpenRouter.

Kwa **wasaidizi wengine** (OpenAI moja kwa moja, Anthropic moja kwa moja, n.k.), gharama inahesabiwa kutoka kwa data ya bei iliyotolewa na OpenRouter. Ikiwa bei sio inayolingana haijapatikana kwa modeli fulani, gharama itaonekana kama **haiapatikani** na haitajumuishwa kwenye kiasi chako kinachotokana.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Jumla ya gharama haifanani na bill ya mtoa wangu

Nambari zote za gharama katika programu ni **makadirio ya rejeu**, si katika kipaumbele halisi.

Ili kufanya jumla kuwa karibu zaidi na matumizi yako halisi ya OpenRouter, fungua [**Mipangilio** > **Ufuatiliaji wa Gharama**](#cost-tracking) na bonyeza **Sawaza na matumizi ya ungoro wa API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Ukurasa wa Historia unakosekana kwenye upande wa kushoto

**Baki makumbusho ya utekelezaji** yanaweza kuwa zimezimwa. Fungua [**Mipangilio** > **Mipangilio Mawasiliano**](#general-settings) na ziwezesha. Kumbuka kwamba ukizifanya, data iliyotolewa kabla hayawezi kurudi.

<br/>

<a id="web-app-session-expired"></a>
### Programu ya wavuti: imegeuzia ukurasa wa kuingia bila kutarajia

Idadi yako inaweza kukauka. Ingia tena. Ikiwa inatokea mara kwa mara, hakikisha mpangilio wa seva kwa vitendo vya muda wa idadi.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Ubalo hauna taarifa kwa wanachama wengine (wavuti)

Tu **wamamishi** waweza kuona data ya watumiaji wote kupitia kiolesura cha **Mtumiaji**. Watumiaji wa kawaida wanaweza kuona tu shughuli zao kwa mfumo.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Nilibadilisha maagizo na nikakosa mabadiliko yangu

Wakati unabadilisha maagizo, daima bonyeza **Hifadhi** kabla ya kubonyeza **Rudi kwenye utekelezaji**.

<br/><br/>

<a id="quick-tips"></a>
## Vidokezo vya haraka

- Anza na [**Tafsiri**](#translate) ili uuhakikishie mpangilio wako unafanya kazi kabla ya kuenda mbele kwenda [**Andika upya**](#rewrite) au [**Badili**](#transform).
- Tumia [**Andika upya**](#rewrite) kuboresha maneno ya kila siku.
- Tumia [**Badili**](#transform) wakati unahitaji mchakato ulioendelea kwa kazi mahususi.
- Tumia [**Ubalo**](#dashboard) ikiwa unataka kuangalia matumizi na gharama.
- Tumia [**Historia**](#history) kupitia mazungumzo yaliyopita na maandishi yake yote ya ukurasa wa kwanza na ya mwisho.
- Pungua maagizo kila wakati ukiundia maktaba ya maagizo ambayo unataka kuihifadhi salama (tazama [Maagizo ya Badili](#transform-prompts)) au ukipenda kushiriki na wengine.

<br/><br/>

<a id="disclaimer"></a>

## Tahadhari

Majina na alama za bidhaa ni milipu ya wenye milipaka yao na hutumika kwa lengo la utambulisho tu. Programu hii haifungami na chakula wala kubaliwa na kampuni yoyote ya kubainishwa.

<br/><br/>

<a id="license"></a>
## Leseni

Haki za kuchapisha © 2026 Waldemar Scudeller Jr.

[Leseni ya Apache 2.0](LICENSE)