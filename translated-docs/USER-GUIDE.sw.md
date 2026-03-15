---
translated_at: "2026-03-15T22:28:47.207Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Diginiti la Mtumiaji wa Transrewrt

<br />

<a id="introduction"></a>
## Utangulizi

Transrewrt inakusaidia kushughulikia maandishi kwa njia kuu tatu:

- **Tafsiri** - badilisha maandishi kutoka lugha moja hadi nyingine.
- **Andika upya** - panga maandishi kwa mtindo tofauti, kama wazi, mfupi, au rasmi zaidi.
- **Badilisha** - chakata maandishi kwa kutumia maelekezo maalum ya AI yanayoitwa *prompts*.

<br />

Kiadili hiki kinaeleza jinsi ya kutumia programu baada ya kusanidi na kuwasha. Kwa hatua za usanidi, angalia [README](../README.md) kuu.

<br />

> ℹ️ **KUMBUKA**<br/>
> Transrewrt inapatikana kama programu ya dawati kwa Windows na Linux, na kama programu ya mtandao inayojitegemea. Kiadili hiki kinazingatia matumizi ya kila siku ya programu. Ambapo kitu kinatumika kwa toleo moja tu, kinatajwa wazi.

<small>**Soma kwa lugha zingine:** [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Yaliyomo** 

- [Kabla ya kuanza](#before-you-start)
  - [Jinsi ya kupata kifungo cha API (programu ya dawati)](#how-to-get-an-api-key-desktop-app)
- [Kuanza](#getting-started)
- [Sehemu kuu za dirisha](#main-parts-of-the-window)
  - [Bara mdogo](#sidebar)
  - [Bara za zana](#toolbar)
  - [Mabwawa ya kiingizo na matokeo](#input-and-output-panels)
- [Tafsiri](#translate)
  - [Tafsiri maandishi](#translate-text)
  - [Uchaguzi wa lugha](#language-selection)
  - [Mipangilio ya tafsiri ya faida](#helpful-translation-settings)
  - [Vifungo vya kipanya](#keyboard-shortcuts)
- [Andika upya](#rewrite)
  - [Andika maandishi upya](#rewrite-text)
- [Badilisha](#transform)
  - [Fanya *prompt* iliyopo](#run-an-existing-prompt)
  - [Kama bado huna *prompts*](#if-you-have-no-prompts-yet)
  - [Unda *prompt* haraka](#create-a-prompt-quickly)
  - [Hariri *prompt*](#edit-a-prompt)
  - [Jaribu *prompt* kabla ya kuitumia](#test-a-prompt-before-using-it)
  - [Dhibiti *prompts* zilizohifadhiwa](#manage-saved-prompts)
- [Dashibodi](#dashboard)
  - [Chuja data](#filter-the-data)
  - [Vichwa vya dashibodi](#dashboard-tabs)
  - [Hamisha data nje](#export-data)
  - [Futa rekodi zilizohifadhi kwa ajili ya modeli](#delete-stored-records-for-a-model)
- [Mipangilio](#settings)
  - [Mipangilio ya jumla](#general-settings)
  - [Modeli](#models)
  - [Lugha](#languages)
  - [Ufuatiliaji wa gharama](#cost-tracking)
  - [Maombi ya kubadilisha](#transform-prompts)
  - [Watumiaji](#users)
  - [Uasanidi wa API](#api-config)
  - [Kuhusu](#about)
- [Matatizo ya kawaida](#common-issues)
  - [Programu haitatafsiri, kuandika upya, wala kubadilisha maandishi](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Orodha ya modeli iko tupu](#the-model-list-is-empty)
  - [Matokeo yanapwaa au yanagharimu kupita kiasi](#the-result-is-too-slow-or-too-expensive)
  - [Kiolesura kiko kwa lugha isiyofaa](#the-interface-is-in-the-wrong-language)
  - [Maandishi ni madogo sana au ni magumu kusoma](#the-text-is-too-small-or-hard-to-read)
  - [Nilibadilisha *prompt* na nikapoteza mabadiliko](#i-changed-a-prompt-and-lost-the-edits)
- [Vidokezo vya haraka](#quick-tips)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="before-you-start"></a>

## Kabla ya kuanza

Kutumia Transrewrt, unahitaji ufikiaji wa huduma ya AI kupitia OpenRouter.

Hihitaji kuchagua mfano wa kulipwa kabla ya kuanza. Programu ina daima mfano wa bure uliojumuishwa, kwa hivyo kwa matumizi ya kawaida, yatosha kuanza kutafsiri, kurudia andika, na kubadilisha maandishi.

Kwa lugha rahisi:

- **Mfano** ni injini ya AI ambayo hufanya kazi.
- **Ufunguo wa API** ni kredenshi yako ya binafsi ya ufikiaji kwa ajili ya huduma hiyo.

Ikiwa unatumia **programu ya mezani**, utahitaji ufunguo wa API. Kwa maelezo ya kina, angalia [Jinsi ya kupata ufunguo wa API](#how-to-get-an-api-key-desktop-app) hapa chini. Kwa ufupi: unda akaunti kwenye [OpenRouter](https://openrouter.ai), fungua ukurasa wa [Ufunguo](https://openrouter.ai/keys), unda ufunguo mpya, na uandike kwenye [**Mipangilio** > **Uwezo wa API**](#api-config) kwenye Transrewrt.

Ikiwa unatumia **toleo la mtandaoni**, mmiliki wa seva kwa kawaida huweka hii kwa ajili yako, kwa hivyo kwa kawaida hutaki kujazisha ufunguo wa API wewe mwenyewe.

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### Jinsi ya kupata ufunguo wa API (programu ya mezani)

Ikiwa unatumia programu ya mezani, fuata hatua hizi:

1. Nenda kwenye [OpenRouter](https://openrouter.ai) kwenye kivinjari chako cha mtandao.
2. Unda akaunti au ingia.
3. Fungua ukurasa wa [Ufunguo](https://openrouter.ai/keys).
4. Bonyeza kwenye kitufe cha kuunda ufunguo mpya wa API.
5. Toa ufunguo huo jina ili uweze kulitambua baadaye.
6. Nakili ufunguo mpya wa API.
7. Rudi kwenye Transrewrt na fungua **Mipangilio** > **Uwezo wa API**.
8. Andika ufunguo huo kwenye **Ufunguo wa API wa OpenRouter**.
9. Bonyeza **Jaribu Uwezo wa API** ili uhakikisha unaofanya kazi.

> ℹ️ **TAHIDI**<br/>
> Unaweza kuanza na njia ya bure ya OpenRouter au yeyote kati ya mifano mingine ya bure inayopatikana. Katika hali nyingi, yatosha kuanza kutumia Transrewrt bila kuchagua mfano wa kulipwa.

<br /><br />

<a id="getting-started"></a>
## Kuanza

Ikiwa hii ni mara yako ya kwanza kutumia Transrewrt, fuata mpangilio huu:

1. Fungua programu.
2. Chagua **Lugha ya Kiolesura** kutoka kwenye alama ya ulimwengu ikiwa inahitajika.
3. Ikiwa uko kwenye ** programu ya mezani**,fungua [**Mipangilio** > **Uwezo wa API**](#api-config), andika ufunguo wako wa API wa OpenRouter, na bonyeza **Jaribu Uwezo wa API**.
4. Fungua [**Mipangilio** > **Mifano**](#models) na uongeze mifano moja au zaidi kwenye **Mifano Iliyochaguliwa**.
5. Fungua [**Mipangilio** > **Lugha**](#languages) na uchague **Lugha Zaidi Zinazotumika** ikiwa unataka lugha zako zinazotumika zaidi kuonekana kwanza.
6. Nenda kwenye **Tafsiri** na utekeleze tafsiri rahisi ili kuthibitisha kila kitu kinatoka.
7. Mara hiyo ifanyike, jaribu **Rudia Andika** kisha **Badilisha**.

Mpangilio huu una manufaa. Huzuia tatizo la kawaida la matumizi ya kwanza: kujaribu kaz kabla ya programu kuwa na uhusiano wa API unaofanya kazi au mfano uliochaguliwa.

<br /><br />

<a id="main-parts-of-the-window"></a>
## Sehemu Kuu za Dirisha

Programu imegawanywa katika maeneo makuu matatu:

- **Mtaa upande** kushoto.
- **Kifaa cha kazi** juu.
- **Eneo la kazi** katikati.

<br />

<a id="sidebar"></a>
### Mtaa Upande

Tumia mtaa upande kuzunguka programu:

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/sw/sidebar.png" alt="Mtaa Upande wa Programu" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Tafsiri</strong> hufungua eneo la kazi la kutafsiri.</li>
        <li><strong>Rudia Andika</strong> hufungua eneo la kazi la kurudia andika.</li>
        <li><strong>Badilisha</strong> hufungua eneo la kazi la maelekezo ya kinafsu.</li>
        <li><strong>Dashbodi</strong> inaonyesha habari za matumizi na gharama.</li>
        <li><strong>Mipangilio</strong> hufungua jukwaa la mipangilio.</li>
        <li><strong>Mtumiaji</strong> inaonyesha jina la mtumiaji aliyeingia (mtandaoni pekee).</li>
      </ul>
      <br />
      <p>Unaweza pia kufunga mtaa upande kwa ajili ya nafasi zaidi kwa kubonyeza alama iko karibu na alama ya programu.</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### Kifaa Cha Kazi

Kifaa cha kazi kinabadilika kidogo kulingana na wapi uko kwenye programu.

- Kushoto, kinaonyesha jina la ukurasa unao sasa.
- Kulia, kinaonyeswa **kichaguzi cha mfano** na **udhibiti wa Lugha ya Kiolesura**.

**Kichaguzi cha mfano** kinakuwezesha kuchagua injini gani ya AI utakayotumia kwa ajili ya kazi ya sasa.

  ![Kichaguzi cha mfano](../images/screenshots/sw/model-selector.png)

> ℹ️ **TAHIDI**<br/>
> Baadhi ya mifano ya bure inaweza kusitwa kwa muda ikiwa haipatikani au zimefikia kikomo cha matumizi. Ikiwa hii itatokea, programu itaondoa mfano huo kwenye orodha yako kiotomatiki.


**Alama ya ulimwengu + namba ya lugha** hubadilisha lugha ya kiolesura ya programu, kama vile menyu na vitufe. **Hai** badilishi lugha za tafsiri zinazotumika kwenye **Tafsiri**.

  ![Kichaguzi cha Lugha ya Kiolesura](../images/screenshots/sw/language-selector.png)

<br />

<a id="input-and-output-panels"></a>

### Vifaa vya kuingiza na kutolea

Sehemu nyingi za kazi hutumia kifaa cha **Kuingiza** kushoto na kifaa cha **Kutolea** kulia.

Kifaa cha **Kuingiza** kinaonyesha:

- Idadi ya herufi
- Idadi ya maneno
- Idadi ya vifungu

Kifaa cha **Kutolea** kinaweza kuonyesha:

- Muda uliotumika kwa kazi hiyo
- Gharama ya kazi hiyo
- Jumla ya gharama yako inayokuwapo
- **TPS** (vifungu kwa sekunde), ambayo ni kipimo rahisi cha kasi
- Idadi ya herufi, maneno, na vifungu
- Mfumo uliotumika

Kama una mafunzo kuhusu maneno ya kiufundi:

- **Token** (kifungu) ina maanisha kipande kidogo cha maandishi. Unaweza kuifikiria kama sehemu ya neno au neno fupi.
- **TPS** ina maanisha ni vifungu vingapi vya maandishi mfumo ulivyochakata kwa sekunde.

<br /><br />

<a id="translate"></a>
## Tafsiri

Tumia **Tafsiri** unapotaka kubadilisha maandishi kutoka lugha moja hadi nyingine.

![Sehemu ya kazi ya Tafsiri](../images/screenshots/sw/translate.png)

<br />

<a id="translate-text"></a>
### Tafsiri maandishi

1. Fungua **Tafsiri**.
2. Chagua lugha katika **Kutoka**.
3. Chagua lugha katika **Kwa**.
4. Chagua mfumo kwenye kifaa cha vifaa.
5. Andika au bandika maandishi ndani ya **Kuingiza**.
6. Bonyeza **Tafsiri**.
7. Soma matokeo katika **Kutolea**.
8. Tumia kifungo cha kunakili kama unataka kunakili matokeo.

<br />

<a id="language-selection"></a>
### Uchaguzi wa lugha

- **Kutoka** inaweza kuwa lugha maalumu au **Ugundua Lua**.
- **Kwa** ni lugha unayotaka matokeo kuwa nayo.

Lugha zako ulizochagua za **Lugha kuu** zinaonekana juu ya orodha. Unaweza kuweka hizi kwenye [**Mipangilio** > **Lugha**](#languages).

<br />

<a id="helpful-translation-settings"></a>
### Mipangilio ya tafsiri yenye faida

Kwenye [**Mipangilio** > **Mipangilio ya Jumla**](#general-settings), unaweza kubadilisha jinsi tafsiri inavyotendea:

- **Tafsiri otomatiki kwa kuandika** inafanya tafsiri mara baada ya ukuandike maandishi.
- **Nakili matokeo otomatiki kwenye ubao wa kunakili** inanakili matokeo otomatiki baada ya kufanya kazi kwa mafanikio.
- **Tafsiri ya wakati halisi (wakati wa kuandika)** inafanya tafsiri wakati wa kuandika.
- **Muda wa kusubiri (ms)** unadhibiti kiasi cha muda ambayo programu inasubira kabla ya kufanya tafsiri ya wakati halisi.

<br />

<a id="keyboard-shortcuts"></a>
### Vifupo vya kibodi

Kwenye [**Mipangilio** > **Mipangilio ya Jumla**](#general-settings), **Mwenendo wa ENTER** unadhibiti kitatokea nini unapobonyeza Enter:

- **Enter** inaweza kufanya kazi na **Shift+Enter** inaweza kuongeza mstari mpya.
- Au programu inaweza kufanya mbalimbali.

Kifupo cha sasa kinaonekana pia kwenye kifungo cha **Tafsiri**.

<br /><br />

<a id="rewrite"></a>
## Andaa upya

Tumia **Andaa upya** unapotaka kuboresha matumizi ya maneno bila kubadilisha maana kuu.

![Sehemu ya kazi ya Andaa upya](../images/screenshots/sw/rewrite.png)

Hii ni muhimu kwa:

- kusahihisha tahajia na sarufi
- kufanya maandishi wazi zaidi
- kufanya maandishi rasmi zaidi au wasio rasmi
- kufupisha au kupanua maandishi
- kufanya maandishi kisikilizwe kiufundishaji zaidi

<br />

<a id="rewrite-text"></a>
### Andaa upya maandishi

1. Fungua **Andaa upya**.
2. Chagua **Mwenendo**.
3. Chagua mfumo kwenye kifaa cha vifaa.
4. Andika au bandika maandishi ndani ya **Kuingiza**.
5. Bonyeza **Andaa upya**.
6. Angalia matokeo katika **Kutolea**.


Mwenendo sawa wa kifungo cha Enter unaotajwa katika [**Tafsiri**](#keyboard-shortcuts) unatumika pia hapa.

<br /><br />

<a id="transform"></a>
## Badilisha

Tumia **Badilisha** unapotaka AI ifuate maelekezo ya kawaida yako mwenyewe.

![Sehemu ya kazi ya Badilisha](../images/screenshots/sw/transform.png)

Hii ni sehemu yenye uwezo wa kipekee zaidi ya programu. Unaweza kuitumia kwa kazi kama:

- kupamba muhtasari wa maelezo
- kubadilisha maandishi yasiyoyatengenezwa kuwa barua iliyopangwa vizuri
- kuchukua pointi muhimu
- kubadilisha maandishi kuwa muundo maalumu

<br />

<a id="run-an-existing-prompt"></a>
### Fanya ombi lililoopo

1. Fungua **Badilisha**.
2. Chagua ombi kutoka kwenye orodha ya maelezo.
3. Ikiwa kuna kifungo cha lugha ** Lengo** kinachojitokeza, chagua lugha kama unataka moja.
4. Andika au bandika maandishi ndani ya **Kuingiza**.
5. Bonyeza **Badilisha**.
6. Soma matokeo katika **Kutolea**.

<br />

<a id="if-you-have-no-prompts-yet"></a>
### Ikiwa huna maelezo bado

Ikiwa orodha yako ya maelezo ni tupu, bonyeza **Pakia maelezo ya mfano**. Hii inaongeza mifano ya kiamoji ili uanze haraka.

> ℹ️ **KUMBUKA**<br/>
> Maelezo ya mfano yanapewa kwa Kiingereza. Baada ya kuyapakia, unaweza kuhariri ombi na kutumia **Tafsiri ombi** kama unataka kubadilisha maandishi ya ombi kwa lugha nyingine.

<br />

<a id="create-a-prompt-quickly"></a>

### Unda agizo haraka

Njia ya haraka zaidi ya kuunda agizo ni:

1. Bonyeza **Agizo Jipya**.
2. Bonyeza **`Generate prompt`**.
3. Eleza unachotaka agizo lifanye.
4. Chagua mfano.
5. Ruusu programu itengeneze draft kwa ajili yako.
6. Angalia draft na bonyeza **`Save`**.

![Tengeneza agizo](../images/screenshots/sw/transform-generate.png)

<br />

### Hariri agizo

Unapounda au kuhariri agizo, kihariri hujitokeza kushoto na eneo la jaribio kukulia.

![Kihariri cha agizo cha kubadilisha](../images/screenshots/sw/transform-prompt-edit.png)

Sehemu kuu ni:

- **Jina la agizo**: jina linaloonekana kwenye orodha ya agizo.
- **Maelekezo ya agizo (si lazima)**: kidokezo kifupi kinachoonyeshwa kwa mtumiaji wakati wa kufanya agizo.
- **Wajibu wa Mfano**: jukumu la jumla lililowekwa kwa AI, kama vile 'Wewe ni msaidizi msaidizi.'
- **Maelekezo ya Mfano (moja kwa mstari)**: sheria maalum unazotaka AI zifuate.
- **Maelezo ya matokeo**: neno fupi linaloeleza matokeo, kama vile 'muhtasari' au 'andika upya'.
- **Temperature (0.0 → 1.0)**: kipimo cha ubunifu.
- **Ask for target language**: ongeza kichagua lugha lengwa wakati wa kufanya agizo.

Kama istilahi ya kiufundi **Temperature** ipya kwako, fikiria kama hii:

- **Temperature ya chini** hutoa matokeo thabiti na yanayotarajiwa zaidi.
- **Temperature ya juu** hutoa awingi na ubunifu zaidi.

Unaweza pia kutumia:

- **`Generate prompt`** kuunda draft mpya kutoka kwa maelezo rahisi
- **`Improve prompt`** kuboresha agizo lililoopo
- **`Translate prompt`** kutafsiri maeneo ya agizo

> ⚠️ **TAHADARI**<br/>
> Bonyeza **`Save`** kabla ya bonyeza **`Back to Run`**. Kwa kurudi bila kuhifadhi, mabadiliko yakoyatapotea.

<br />

<a id="test-a-prompt-before-using-it"></a>
### Jaribu agizo kabla ya kuitumia

Paneli ya jaribio kushulia hukuruhusu kujara agizo lako na maandishi ya mfano kabla ya kuitumia kazini za kila siku.

Hii ni muhimu wakati:

- unajenga agizo jipya
- unalinganisha toleo mbili za agizo
- unataka kuangalia mlingu, urefu, au muundo wa matokeo

<br />

<a id="manage-saved-prompts"></a>
### Dhibiti agizo zilizohifadhiwa

Ili kudhibiti agizo zilizohifadhiwa kwa sehemu moja, fungua [**Mipangilio** > **Transform Prompts**](#transform-prompts).

Huko unaweza:

- orodhesha na ufute agizo zako
- uagize agizo kama **JSON**, **CSV**, au **XLSX**
- uingize agizo kutoka kwa faili

<br /><br />

## Dashibodi

Tumia **Dashibodi** kuona kiasi unachotumia programu na gharama yake.

![Muhtasari wa Dashibodi](../images/screenshots/sw/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### Chuja data

Tumia vitufe vya chuja juu ili kubadilisha mzunguko wa wakati.

![Vichujio vya Dashibodi](../images/screenshots/sw/dashboard-filter.png)

> ℹ️ **KUMBUKA**<br/>
> Katika toleo la mtandao, wasimamizi wanaweza pia kuona kichujio cha **Mtumiaji**. Hiki kinawaruhusu kubadilisha kati ya **Watumiaji wote** na mtumiaji binafsi.

<br />

<a id="dashboard-tabs"></a>
### Vichwa vya Dashibodi

- **Muhtasari** hukupa muhtasari wa matumizi na gharama.
- **Kwa Matumizi** inagawa shughuli kulingana na lugha ya tafsiri, modi ya kuandika upya, na agizo la kubadilisha.
- **Kwa Mfano** inaonyesa ni mifano gani uliyotumia na gharama zake.
- **Kwa Siku** inaonyesa jumla za kila siku.
- **Simu Zote** inaonyesa historia kamili ya simu na inakuruhusu kuagiza.

<br />

<a id="export-data"></a>
### Agiza data

Meza za dashibodi zinaweza kuagiza data katika:

- **JSON**
- **CSV**
- **XLSX**

Hii ni muhimu ikiwa unataka kutathmini shughuli nje ya programu au shirikisha ripoti.

<br />

<a id="delete-stored-records-for-a-model"></a>
### Futa rekodi zilizohifadhiwa kwa mfano

Katika **Kwa Mfano** au **Simu Zote**, unaweza kufuta rekodi zilizohifadhiwa kwa mfano.

> ⚠️ **TAHADARI**<br/>
> Kufuta rekodi zilizohifadhiwa hakiwezi kurejeswa. Tumia hii tu ikiwa uhakika hutahitaji historia tena.

Ili kufuta data zote au ufute rekodi kulingana na umri wao, nenda kwa [**Mipangilio** > **Ufuatiliaji wa Gharama**](#cost-tracking). Huko utapata chaguzi za kufuta data zote zilizohifadhiwa au tu data zilizo za kale zaidi ya tarehe fulani.

<br /><br />

<a id="settings"></a>
## Mipangilio

Fungua **Mipangilio** kutoka kwenye upande wa kando ili kubadilisha jinsi programu inavyotenda.

Vichwa vinavyopatikana vinaweza kutofautiana:

- **Uasanidi wa API** upatikana tu katika programu ya dawati.
- **Watumiaji** upatikana tu kat programu ya mtandao, na tu kwa wasimamizi.

<br />

<a id="general-settings"></a>

### Misingi ya jumla

Tumia **Misingi ya Jumla** kudhibiti tabia ya kuandika na muonekano.

**Tabia**

- **Mwenendo wa ENTER** kuchagua kama Enter inateua kazi au kuongeza mstari mpya.
- **Tafsiri otomatiki kwa kubandika** anza tafsiri mara baada ya kubandika maandishi.
- **Nakili matokeo otomatiki kwenye clipboard** nakili matokeo yanayofanikiwa otomatiki.
- **Tafsiri ya wakati wa kweli (wakati wa kuandika)** tafsiri wakati unapoandika.
- **Muda wa kusubiri (ms)** kuweka muda wa kusubiri kwa tafsiri ya wakati wa kweli.

**Muonekano**

- **Desimali za sehemu ya gharama** inabadilisha jinsi desimali za gharama zinavyovonekana.
- ** familia ya Font** inabadilisha fonti ya kuandika kwenye mipini ya maandishi.
- **Ukubwa** inabadilisha ukubwa wa fonti.
- **Web peke:** **onesha ukingo kuzunguka programu** kuongeza nafasi kuzunguka kiolesura.

<br />

<a id="models"></a>
### Moda

Tumia **Misingi** > **Moda** kuchagua moda zipo zitaonekana kwenye baa ya vifaa.

![Kichwa cha Misingi ya Moda](../images/screenshots/sw/settings-models.png)

Ukurasa una orodha mbili:

- **Moda zinazopatikana** upande wa kushoto
- **Moda zilizochaguliwa** upande wa kulia

Vidhibiti muhimu ni pamoja na:

- **Tafuta moda...** kupata moda kwa jina
- **Free pekee** kuonyesha moda za bure pekee
- **Raisa** kupakia orodha upya
- **Panua Zote** na **Funga Zote** unapopanga kulingana na mtayaji

Kujumlisha moda, bofya **Ongeza**.

Kutengua moda, bofya **X** karibu nayo kwenye **Moda Zilizochaguliwa**.

Kusafisha orodha, bofya **Safi zote**. Moda ya bure inayohitajika italibaki kwenye orodha.

> ℹ️ **KUMBUKA**<br/>
> Usikuhitaji kuongeza mkopo kwa OpenRouter mara moja, anza kwa kuwezesha **Free pekee** na kuchagua moda za bure.

<br />

<a id="languages"></a>
### Lugha

Tumia **Misingi** > **Lugha** kupanga orodha za lugha zinazotumika kwenye programu.

- **Lugha za kilele** zinafungwa karibu na kilele cha orodha za lugha kwenye **Tafsiri** na **Badilisha**.
- **Lugha ya kienyeji** kukusaidia kuongeza lugha ambayo ipo kwenye orodha ya kawaida.

Ukiongeza lugha ya kienyeji, itaonekana kwenye vichaguzi wa lugha pamoja na chaguzi za kawaida.

<br />

<a id="cost-tracking"></a>
### Ufuatiliaji wa gharama

Tumia **Misingi** > **Ufuatiliaji wa Gharama** kudhibiti taarifa ya gharama.

- **Jumla ya Gharama** inaonyesha jumla inayokwenda.
- **Nakili Thamani** inakopia jumla kwenye clipboard.
- **Weka Upya Gharama** inarudisha jumla iliyohifadhiwa kuwa sifuri.
- **Landanisha na matumizi ya kifungu cha API** inaweka jumla kuendana na matumizi yanayotajwa na OpenRouter.
- **Matumizi ya Kifungu cha API** inaonyesha maelezo ya matumizi, kama zipo.
- **Futa data ya gharama** inafuta data zote, au tu maingizo yanayopita tarehe iliyochaguliwa.

> ⚠️ **ONYO**<br/>
> Ufutaji wa data hauwezi kutekelezwa. Kabla ya kufuta, hakikisha unahifadhi data yako au kuyabarua kupitia [**Dashibodi** > **Wito Wote**](#dashboard-tabs), vinginevyo itapotea kabisa.

<br />

<a id="transform-prompts"></a>
### Amri za kubadilisha

Tumia **Misingi** > **Amri za Kubadilisha** kudhibiti amri kwa wingi.

Unaweza:

- kagua amri zako zilizohifadhiwa
- kufuta amri
- kuingiza amri kutoka faili
- kutoa amri kwa ajili ya uhifadhi au ushirikiano

<br />

<a id="users"></a>
### Watumiaji

**Web peke - msimamizi pekee**

Tumia **Watumiaji** kudhibiti akaunti za watumiaji kwenye toleo la web. Unaweza kuongeza watumiaji, kusasisha maelezo yao, kuweka tena nenosiri, na kufuta akaunti.

<br />

<a id="api-config"></a>
### Uasanidi wa API

**Desktop pekee**

Tumia **Uasanidi wa API** kuunganisha programu ya desktop na OpenRouter au Transrewrt proxy.

- **Kifungu cha API cha OpenRouter** ndipo unapobandisha kifungu chako.
- **URL ya API** ni anwani ya huduma. Acha ipo chaguo-msingi isipokuwa umewekwa tofauti.
- **Tumia Transrewrt Proxy** inapotuma maombi kupitia huduma ya proxy badala ya moja kwa moja kwenda OpenRouter.
- **Begu la Ufunguo** hinaonekana wakati chaguo la proxy limewezeshwa.
- **Pima Uasanidi wa API** inangalia kama mpangilio wa sasa unafanya kazi.

Kwa maelezo ya kina kuhusu jinsi ya kupata kifungu chako cha API, angalia [Jinsi ya kupata kifungu cha API](#how-to-get-an-api-key-desktop-app) hapo juu.

> ℹ️ **KUMBUKA**<br/>
> Usipokuwa na uhakika wa maana ya **URL ya API**, **Tumia Transrewrt Proxy**, au **Begu la Ufunguo**, acha zisibadiliwe na tumia upangilio wa chaguo-msingi wa OpenRouter. Maelezo zaidi kuhusu proxy yapatikana kwenye [Hifadhi ya Transrewrt Proxy](https://github.com/wsj-br/transrewrt-proxy).

### Kuhusu

Kichwa cha **Kuhusu** kinaonyesha:

- jina la programu
- nambaya toleo
- tarehe ya ujenzi
- kiungo kwa hazina ya mradi

<br /><br />

<a id="common-issues"></a>
## Matatizo ya kawaida

Kama kitu hakifanyi kazi kama inavyotarajiwa, angalia pointi hizi kwanza.

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### programu haitafsiri, kuandika upya, au kubadilisha maandishi

Hakikisha kwamba:

- umechagua modeli katika kibao cha vifaa
- angalau modeli moja inaorodheshwa katika [**Mipangilio** > **Modeli**](#models)
- usanidi wako wa API unafanya kazi

Ikic user Desktop app:

1. Fungua [**Mipangilio** > **Usanidi wa API**](#api-config).
2. Hakikisha ufunguo wako wa umehifadhiwa API.
3. Bonyeza **Jaribu Usanidi wa API**.

<br />

<a id="the-model-list-is-empty"></a>
### Orodha ya modeli ni tupu

Fungua [**Mipangilio** > **Modeli**](#models) na ubonyeze **Rejesha/Refresh**.

Kama inahitajika:

- tafuta modeli
-985 wezesha **Ukusanyaji Usio na malipo/Free Only**
- ongeza modeli moja au zaidi kwenye **Modeli Zilizochaguliwa/Selected Models**

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Matokeo ni polepole sana au ghali sana

Jaribu moja au zaidi ya hizi:

- chagua modeli tofauti
- tumia pembejeo fupi zaidi
- zimua **Ufafanuzi wa Muda Halisi ( Wakati wa kuandika)** katika [**Mipangilio ya Jumla** > **Mipangilio ya Jumla**](#general-settings)
- tumia modeli za bure kwa kazi rahisi (angalia [Modeli](#models))

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### Kiolesura/Interfeysi kiko kwenye lugha isiyo sahihi

Bonyeza alama ya usio katika [kibao cha vifaa](#toolbar) na uchague **Lugha ya Kiolesura** unayopendelea.

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Maandishi ni madogo sana au yanuguvya kusoma

Fungua [**Mipangilio ya Jumla**](#general-settings) na badilisha:

- **Jina la Fonti/Fonts**
- **Saizi**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Nilibadilisha ombi/mtaalamu na kupoteza marekebisho

Unapobadilisha ombi, bwonyeza **Hifadhi** kabla ya kubonyeza **Rudi kwenye Endesha/Run**.

<br /><br />

<a id="quick-tips"></a>
## Vidokezo vya haraka

- Anza na [**Tafsiri**](#translate) ili kuhakikisha usanidi wako unafanya kazi kabla ya kuendelea kwa [**Andika Upya/Rewrite**](#rewrite) au [**Badilisha/Transform**](#transform).
- Tumia [**Andika Upya/Rewrite**](#rewrite) kwa maboresho ya matumizi ya kila siku.
- Tumia [**Badilisha/Transform**](#transform) unapohitaji mzunguko wa kazi unaorudia kwa kazi maalum.
- Tumia [**Dashibodi/Dashboard**](#dashboard) ukihitaji kufuatilia matumizi na gharama.
- Tuma nje maombi mara kwa mara ukijenga maktaba ya maombi unayotaka kulinda (angalia [Badilisha Maombi/Transform Prompts](#transform-prompts)).

<br /><br />

<a id="disclaimer"></a>
## Taarifa ya kuwajibika/Disclaimer

Majina ya mali na alama za kijamii ni mali ya wamiliki wao na hutumika kwa madhumuni ya kutambua tu. Programu hii haijashirikiana wala kuthibitishwa na chi mmoja wa alama zilizotajwa.

<br /><br />

<a id="license"></a>
## Leseni

 hakimiliki © 2026 Waldemar Scudeller Jr.

[Leseni ya Apache 2.0](LICENSE)