---
translated_at: "2026-03-29T01:56:26.163Z"
source_hash: "8981b8db163153bfc443046fa20a49b33c92b9feebdee302f6ef60852f273472"
source_mtime: "2026-03-29T01:41:58.368Z"
model: "qwen/qwen3-235b-a22b-2507"
---
![Bango la Transrewrt](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>

# Mwongozo wa Mtumiaji

<br/>

<a id="introduction"></a>

## Utangulizi

Transrewrt husaidia kufanya kazi na maandishi kwa njia tatu kuu:

- **Tafsiri** - badilisha maandishi kutoka lugha moja hadi nyingine.
- **Andika upya** - fupisha maandishi kwa mtindo tofauti, kama vile wazi zaidi, fupi au rasmi zaidi.
- **Badilisha** - shughulisha maandishi kwa maelekezo ya AI maalum inayoitwa vifunendo.

<br/>

Mwongozo huu unaeleza jinsi ya kutumia programu mara tu ipo imeinstalishwa na inavyofanya kazi. Kwa hatua za uwekaji, tazama kichwa kikuu **[README](README.sw.md)**.

<br/>

> ℹ️ **FAHARINI**<br/>
> Transrewrt ipatikana kama programu ya kompyuta ya mezani ya Windows na Linux, na kama programu ya wavuti inayostiriwa kibinafsi. Mwongozo huu unaokusanya kwenye matumizi ya kila siku ya programu. Panapowezekana kwa kitengo kimoja tu, kina waziwa kwa uwazi.

<small>Soma kwa lugha nyingine: </small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Kisa cha tafsiri za UI na vifunzo:** Lugha zote za kipejawe bila Ingereza (UK) tafsiri zimefanyika kwa kutumia vitu vya AI; maneno yanaweza kuwa ya kubadilika au kuwa yenye makosa.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Orodha ya Mada**

- [Kabla ya kuanzia](#before-you-start)
  - [Jinsi ya kupata ufunguo wa API wa OpenRouter bila malipo (programu ya kompyuta)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Kuanza kazi](#getting-started)
- [Visawe vya kuliko vya dirisha](#main-parts-of-the-window)
  - [Upau wa kando](#sidebar)
  - [Upau wa wagatekezi](#toolbar)
  - [Sehemu za kuingiza na kutolewa](#input-and-output-panels)
- [Tafsiri](#translate)
  - [Tafsiri maandishi](#translate-text)
  - [Uchaguzi wa lugha](#language-selection)
  - [Mipangilio muhimu ya tafsiri](#helpful-translation-settings)
- [Andika upya](#rewrite)
- [Badilisha](#transform)
  - [Chimbua maelekezo ya awali](#run-an-existing-prompt)
  - [Ikiwa bado huna maelekezo](#if-you-have-no-prompts-yet)
  - [Unda maelekezo haraka](#create-a-prompt-quickly)
  - [Hariri maelekezo](#edit-a-prompt)
  - [Jaribu maelekezo kabla ya kutumia](#test-a-prompt-before-using-it)
- [Dasibodi](#dashboard)
  - [Chuja data](#filter-the-data)
  - [Vidole vya dasibodi](#dashboard-tabs)
  - [Badilisha data nje](#export-data)

- [Futa urekodi uliowekwa kwa ajili ya mfano](#delete-stored-records-for-a-model)
- [Historia](#history)
  - [Chuja data](#filter-the-data-1)
  - [Weka data ya historia nje](#export-history-data)
- [Mipangilio](#settings)
  - [Mipangilio ya kujenga](#general-settings)
  - [Mifano](#models)
  - [Lugha](#languages)
  - [Kukagua gharama](#cost-tracking)
  - [Badili manenoshehele](#transform-prompts)
  - [Watumizi](#users)
  - [Mipangilio ya API](#api-config)
  - [Kuhusu](#about)
- [Matatizo ya kawaida](#common-issues)
  - [Programu haiwezi kutafsiri, kuandika upya, au kubadili maandishi](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Orodha ya mifano ni tupu](#the-model-list-is-empty)
  - [Matokeo ni ya polepole sana au ghali sana](#the-result-is-too-slow-or-too-expensive)
  - [Kiolesura kiko kwa lugha mbaya](#the-interface-is-in-the-wrong-language)
  - [Maandishi ni madogo sana au magumu kusoma](#the-text-is-too-small-or-hard-to-read)
  - [Grafu za dashibodi ni tupu](#dashboard-charts-are-empty)

- [Gharama inaonyesha "hairi patikana" au inaonekana si sahihi](#cost-shows-not-available-or-seems-wrong)
  - [Jumla ya gharama haifanani na bili yangu kutoka mtoa](#total-cost-does-not-match-my-provider-bill)
  - [Ukurasa wa Historia umepotea kutoka kwenye upau wa upande](#the-history-page-is-missing-from-the-sidebar)
  - [Programu ya wavuti: nimetumwa nyuma kwenye ukurasa wa kuingia bila matarajio](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Panja ya wavuti: nimemsahau au kumwacha neno la siri](#web-admin-forgot-or-lost-a-password)
  - [Dasibodi haionyeshi data kwa watumiaji wengine (wavuti)](#dashboard-shows-no-data-for-other-users-web)
  - [Nimebadilisha taarifa na kumwacha kurekebisha](#i-changed-a-prompt-and-lost-the-edits)
- [Vidokezo vya haraka](#quick-tips)
- [Kumbusho](#disclaimer)
- [Leseni](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Kabla ya kuanza

Ili kutumia Transrewrt, unahitaji ufikiaji kwa muhimiliki angalau mmoja wa AI. Mawasiliano yanayoidhinishwa ni: [OpenRouter](https://openrouter.ai) (yenye kusanya mifumo mingi), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, na [Ollama](https://ollama.com) kwa mifumo ya wa lokal.

Huna hitaji kuchagua mfumo umebebaye ili kuanza. Mara tu ongezapo ufunguo wako wa API wa OpenRouter, programu huwezesha chaguo cha **bepesi** ya OpenRouter inayotumiwa kutoka kwa mbele. Hii inakuruhusu uanze kubadilisha, kuandika upya, na kubadili maandishi mara moja. Pia, unaweza kupata ufunguo wa API bila malipo kutoka kwa Cerebras, Google, Groq, au Mistral AI.

Lugha rahisi:

- **Mfumo** ni injini ya AI inayofanya kazi. Mifumo inaorodheshwa ina **kibambo cha mtoaji** (kwa mfano `openrouter/…`, `openai/…`, `ollama/…`).
- **Ufunguo wa API** (au, kwa Ollama, **anwani ya msingi**) ni namna ambavyo programu hufikia mtoaji huyo.

Ikiwa utatumia **programu ya eneo la kibodi**, ongeza ufuatiliaji [**Mipangilio** > **Usanidi wa API**](#api-config) kwa kila mtoa utakayatumia. Kwa matumizi ya OpenRouter peke yake, angalia [Jinsi ya kupata ufuatiliaji wa API](#how-to-get-an-api-key-desktop-app) hapa chini. Ikiwa hutaki kutumia ufuatiliaji wa API, unawezaje kupakia Ollama (kutoka [ollama.com](https://ollama.com)) na kutumia maktaba mahali, kama vile `translategemma:4b`.

Ikiwa utatumia **toleo la wavuti**, sasa mamiliki wa seva hutayarisha mitole wa kutumia kigezo cha mazingira, kwa hivyo hutawezi kuingiza ufuatiliaji wa API moja kwa moja katika programu.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### Jinsi ya kupata ufunguo wa API wa bure wa OpenRouter (programu ya kompyuta)

Kama kutumia programu ya kompyuta, fuata hatua hizi:

1. Nenda kwa [OpenRouter](https://openrouter.ai) katika kivinjari chako cha wavuti.
2. Unda akaunti au ingia.
3. Fungua ukurasa wa [Ufunguo](https://openrouter.ai/keys).
4. Bonyeza kitufe cha kuunda ufunguo mpya wa API.
5. Toa jina kwa ufunguo ili uweze kumtambua baadaye.
6. Nakili ufunguo mpya wa API.
7. Rudia kwa Transrewrt na ufungue **Mipangilio** > **Chujio cha API**.
8. Wanganya ufunguo kwenye **Ufunguo wa OpenRouter API** (chini ya **Mipangilio** > **Chujio cha API**).
9. Bonyeza **Jaribu ufunguo wa OpenRouter** ili kuhakikisha unavyofanya kazi.

<br/><br/>

<a id="getting-started"></a>

## Anza kufanya kazi

Kama ni mara ya kwanza unapotumia Transrewrt, fuata mpangilio huu:

1. Fungua programu.
2. Chagua **Lugha ya kujisambazaji** kutoka kwenye alama ya dunia ikiwa inahitajika.
3. Ikiwa uko kwenye **programu ya kompyuta**, fungua [**Mipangilio** > **Umsimbajiri wa API**](#api-config), weka ufunguo wa API kwa angalau mtoa mmoja (kama vile OpenRouter), kisha boleza **Jaribu** ili uhakikishe unavyofanya kazi.
4. Fungua [**Mipangilio** > **Vijenzi**](#models) na ongeza moja au zaidi vya vijenzi kwenye **Vijenzi Vilivyochaguliwa**.
5. Fungua [**Mipangilio** > **Vilangu**](#languages) na chagua **Vilangu vyako vya juu** ikiwa unataka vialivyo vikipendwa vioneekane kwanza.
6. Nenda kwenye **Tafsiri** kisha uwashe tafsiri rahisi ili uhakikishe kila kitu kinachofanya kazi.
7. Baada tu kuna kazi, jaribu **Andika upya** halafu **Badilisha**.

Mpangilio huu una umuhimu. Unasaidia kuzuia tatizo la kawaida zaidi la watumiaji wapya: kujaribu kufanya kazi kabla hajapata usambazishaji wa API unaozifanyia kazi au mjadala uliopaswa kuchaguliwa.

<br/><br/>

<a id="main-parts-of-the-window"></a>

## Sehemu kuu za dirisha

Programu imegawanywa katika sehemu tatu kuu:

- **Upau wa upande** upande wa kushoto.
- **Upau wa kiolesura** kwenye juu.
- **Eneo la kazi** katikati.

<br/>

<a id="sidebar"></a>

### Upau wa Kando

Tumia upau wa kando kutembea kati ya programu. Unaweza kupiga upau huo kando ili uhifadhi nafasi kwa kubonyeza kwenye ikoni inayopakana na logo la programu.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/sw/sidebar.png" alt="Upau wa Programu" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Hamisha</strong> hununua sehemu ya kazi ya kutafsiri.</li><br/>
        <li><strong>Andika tena</strong> hununua sehemu ya kazi ya kuandika upya.</li><br/>
        <li><strong>Badilisha</strong> hununua sehemu ya kazi ya orodha maalum.</li><br/>
        <li><strong>Boksi Kuu</strong> inaonesha ujumbe na maelezo ya gharama.</li><br/>
        <li><strong>Mipangilio</strong> hununua ubao wa mipangilio.</li><br/>
        <li><strong>Historia</strong> inaonesha historia ya matumizi pamoja na maandishi ya pembe niliyopokea na kupokea.</li><br/>
        <li><strong>Mtumiaji</strong> unaoneshesha jina la mtumiaji mwenyeangaliwa (kwa wavuti tu).</li>
      </ul>

</td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barua za Kazi

Barua za kazi inabadilika kidogo kulingana na unapokuwako katika programu.

- Upande wa kushoto, inaonesha jina la ukurasa wa sasa.
- Upande wa kulia, inaonesha **chaguo la mfumo** na kitendawili cha **Lugha ya Mzungumzaji**.

**Chaguo la mfumo** linaruhusu kuchagua injini gani ya AI itumike kwa kazi ya sasa.

  ![Chaguo la mfumo](../images/screenshots/sw/model-selector.png)

Baadhi ya mifumo isiyo ya malipo inaweza kuwa hakipatikani mara kwa mara—wakati mwingine yanaweza kuwa mbali au kuna kikomo cha matumizi. Kama hivyo kitakapotokea, programu itaweka moduli hiyo kutoka kwenye orodha yako. Kudhibiti mifumo ambayo inaonekana, nenda kwenye [**Mipangilio** > **Mifumo**](#models) na hariri orodha yako ya mifumo.
Pia unaweza kufungua mipangilio ya mfumo moja kwa moja kwa kubonyeza kwenye alama ya mtoa upande wa kushoto wa jina la mfumo barua ya kazi.

<br/>

**Alama ya dunia + msimbo wa lugha** inabedeli lugha ya kuingiliana kama vile menyu na vitufe. Hai **babadilishi** lugha za tafsiri zinazotumika katika **Tafsiri**.

![Kichujio cha lugha ya kuingiza](../images/screenshots/sw/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Vipande vya Kuingiza na Vatolower

Sehemu zaidi za kazi zinaipokea vipande vya **Kuingiza** vya upande wa kushoto na vipande vya **Vatolower** vya upande wa kulia.

Kila kipande pia kinaonesha:

| **Kipimo**                                                          | **Matokeo**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Idadi ya herufi <br/>- Idadi ya maneno <br/>- Idadi ya mifani   <br/> | - Muda uliopotea katika kazi<br/>- **TPS** (alama kwa sekunde)<br/>- Idadi za herufi, maneno, na mifani<br/>- Mfumo uliotumika |

Ukisikitika kuhusu istilahi za kisayansi:

- **Token** inamaanisha kipande kifupi cha maandishi. Unaweza kufikiri kuwa ni sehemu ya neno au neno fupi.
- **TPS** inamaanisha idadi ya vipande vya maandishi ambavyo mfumo umavitibu kwa sekunde moja.

<br/>

Pia unaweza kufuatilia gharama ya kila kitendo (kama inapatikana) na jumla ya gharama, kiajiri chaguo cha `Onyesha habari za gharama kwenye vitendo` kwenye [**Mipangilio** > **Mipangilio ya Jumla**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>

## Tafsiri

Tumia **Tafsiri** unapokipenda kubadilisha maandishi kutoka kwa lugha moja hadi nyingine.

![Eneo la kazi la Tafsiri](../images/screenshots/sw/translate.png)

<br/>

<a id="translate-text"></a>

### Tafsiri maandishi

1. Fungua **Tafsiri**.
2. Chagua lugha katika **Kutoka**.
3. Chagua lugha katika **Kwenda**.
4. Chagua mfumo katika orodha ya zana.
5. Andika au unguse maandishi kwenye **Kuingiza**.
6. Bofya **Tafsiri**.
7. Soma matokeo kwenye **Kutolewa**.
8. Tumia kitufe cha nakili ikiwa unataka nakili matokeo.

<br/>

<a id="language-selection"></a>

### Uchaguzi wa lugha

- **Kutoka** unaweza kuwa lugha fulani ama **Gundua Lugha**.
- **Kwenda** ni ile lugha ambayo unataka matokeo kuwa.

**Lugha za juu** zilizochaguliwa zinaonekana juu ya orodha. Unaweza kuziweka katika [**Mipangilio** > **Lugha**](#languages).

<br/>

<a id="helpful-translation-settings"></a>

### Mikonfigurisho muhimu ya kutafsiri

Katika [**Mipangilio** > **Mipangilio ya Jumla**](#general-settings), unaweza kubadilisha jinsi utaratibu wa kutafsiri unavyofanya kazi:

- **Kutafsiri otomatiki baada ya kunakili** hutekeleza tafsiri mara baada ya kunakili maandishi.
- **Nakili matokeo kiotomatiki kwa ubao wa kunakili** hunakili matokeo otomatiki baada ya kutekeleza kwa mafanikio.
- **Utaratibu wa tafsiri wa wakati halisi (wakati wa kuandika)** utekeleza tafsiri wakati ukiandika.
- **Wakati uliopotea (ms)** umeangazia ni kiasi gani programu inasubiri kabla ya kutekeleza tafsiri ya wakati halisi.
- **Enter** umeangazia kinachotokea wakati kubonyeza `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Andika upya

Tumia **Andika upya** unapotaka kuboresha maneno bila kubadilisha maana kuu.

![Eneo la kazi la Andika upya](../images/screenshots/sw/rewrite.png)

Hii inasaidia katika:

- kurekebisha silabi na sarufi (**Angalia Silabi na Sarufi**)
- kufanya maandishi iwe wazi zaidi (**Bofya Wazi**)
- mifano tofauti mbalimbali kwa mara moja (**Toleo la kibadilisho**)
- kufanya maandishi iwe ya rasmi au ya kawaida zaidi (**Ya rasmi** / **Isiyo ya rasmi**)
- kufupisha au kuzidisha maandishi (**Fupisha** / **Zidisha**)
- kufanya maandishi iseme kama ya kiufundi zaidi (**Fanya Kiufundi**)

<br/>

> 💡 **SIKUO**<br/>
> Unapotumia hali ya "**Angalia Silabi na Sarufi**," kitenge cha **Onyesha mabadiliko** huonekana katika ukurasa wa matokeo (karibu na **Nakili**).
> Washa au zima ili kuonesha au kuficha mikosoro maalum iliyotumika kwenye maandishako.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Badilisha

Tumia **Badilisha** unapozipenda AI kufuata maelekezo ya desturi.

![Eneo la kazi la Badilisha](../images/screenshots/sw/transform.png)

Hapa ni sehemu mwenye uwezo mkubwa wa uvumbuzi wa programu hii. Unaweza kutumia kwa kazi kama vile:

- kufupisha maelezo
- kubadilisha maandishi ya awali kuwa barua pepe iliyo sawa
- kutoa pointi muhimu
- kubadilisha maandishi kwa muundo maalum
- au shughuli zozote nyingine zenye desturi kwa maandishi ya kuingiza

<br/>

<a id="run-an-existing-prompt"></a>

### Kuridhisha kauli uliopo

1. Fungua **Badilisha**.
2. Chagua kauli kutoka kwenye orodha ya kauli.
3. Ikiwapo kisanduku cha lugha ya **Lengo** kinatokea, chagua lugha ikiwa unataka.
4. Andika au fungua maandishi kwenye sehemu ya **Kuingiza**.
5. Bonyeza **Badilisha**.
6. Soma matokeo kwenye **Kutolewa**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Kama bado huna maagizo

Kama orodha yako ya maagizo ni tupu, bofya **Pakia maagizo ya sampuli** kwenye eneo la kazi la Badilisha. Kitendio kimojikina kiko mara kwa mara katika [**Mipangilio** > **Badilisha Maagizo**](#transform-prompts) kwenye safu ya uhamisho/uhifadhi. Wote wanaweka mfano unaosaidia kuanza haraka.

<br/>

> ℹ️ **KUREFU**<br/>
> Maagizo ya sampuli yanatolewa kwa Kiingereza. Baada ya kupakia, unaweza kuhariri maagizo na kutumia **Tafsiri maagizo** ikiongeza kwa lugha yako.

<br/>

<a id="create-a-prompt-quickly"></a>

### Unda kauli haraka

Njia ya haraka ya kuunda kauli ni:

1. Bonyeza **Kauli mpya**.
2. Bonyeza **Zalisha kauli**.
3. Eleza unachotaka kauli iongeze kufanya.
4. Chagua mfano.
5. Weka programu ijenze rasimu.
6. Somo rasimu na ubonyeze **Hifadhi**.

![Zalisha kauli](../images/screenshots/sw/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### Hariri maneno ya mwitongo

Unapotengeneza au kuhariri maneno ya mwitongo, kijiditisha kinaonekana upande wa kushoto na eneo la majaribio linaonekana upande wa kulia.

![Kijiditishi cha maneno ya muundo](../images/screenshots/sw/transform-prompt-edit.png)

Sehemu kuu ni:

- **Jina la maneno ya mwitongo**: jina linaloonekana katika orodha ya maneno ya mwitongo.
- **Maagizo ya maneno ya mwitongo (ya si lazima)**: maelekezo mafupi yanayowasilishwa kwa mtumiaji wakati maneno ya mwitongo yanapotumika.
- **Jukumu la mfumo**: jukumu kizima kilichotolewa kwa AI, kama vile 'Wewe ni msaidizi wa manufaa.'
- **Maagizo ya mfumo (moja kwa kila mstari)**: sheria maalum unazotaka AI kuitumikia.
- **Maelezo ya pato**: neno fupi unaoelezea matokeo, kama vile 'muhtasari' au 'andika upya'.
- **Weka (0.0 → 1.0)**: namna ambavyo mfumo utavayojitokeza; angalia chini.
- **Omba lugha ya malenga**: inaongeza kichagua cha lugha ya malenga wakati maneno ya mwitongo yanapotumika.

Kama maneno ya kisayansi ya **Weka** hayajawezekani kwako, fikiria kama ifuatavyo:

- **Weka** duni husababisha matokeo ya mara kwa mara yenye thabiti zaidi.

- **Wakati mwingine** wa juu unatoa tofauti na ubunifu zaidi.

Unaweza pia kutumia:

- **`Generate prompt`** kutengeneza mkusanyiko mpya kutoka kwa maelezo rahisi
- **`Improve prompt`** kupititi kisa kizima kilichopo
- **`Translate prompt`** kutafsiri masimbo ya wasifu

<br/>

> ⚠️ **ONYO!**<br/>
> Bonyeza **`Save`** kabla ya ubonyeze **`Back to Run`**. Ikiwa utarudi bila kuhifadhi, mabadiliko yako yatakuwa ni mapema.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Jaribu kishwamba kabla ya kutumia

Uwanja wa kujaribu wa upande wa kulia unakuruhusu ukajaribu kishwamba chako kwa maandishi ya mfano kabla ya kuchukua matumizi yake katika kazi ya kila siku.

Huu ni muhimu wakati:

- Una jenga kishwamba kipya
- Una linganisha toleo mbili ya kishwamba
- Unataka kuangalia mdundo, urefu, au muundo wa pato

<br/>

> ℹ️ **KODHI**<br/>
> Unaweza kutosha na kuleta kishwamba ulichopokea kwenye [**Mipangilio** > **Badilisha Kishwamba**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Dashibodi

Tumia **Dashibodi** kuona jinsi kiasi cha kutumia programu hii na gharama inayotokana na matumizi (kwa mikakati ya kulipia).

![Muhtasari wa dashibodi](../images/screenshots/sw/dashboard-summary.png)


<br/>

> ℹ️ **KUIDHINI**<br/>
> Kama hutumii tu mikakati ya **bure**, kiasi cha **gharama** kilichobadilishwa kwa zero na muhtasari unaotokana na gharama unaweza kuonekana kuwa tupu. Katika **Muhtasari**, **Matumizi kwa wakati** na **Matumizi kwa kimoja cha mfumo** bado huoneshesha **idadi ya matamko** (tafsiri, uandishi upya, na ubadilishaji) lini umeshatumia katika kipindi ulichochagua.

<br/>

<a id="filter-the-data"></a>

### Chuja data

Tumia vitufe vya kuchuja juu ili ubadilishe mkato wa muda.

![Vichujio vya dashibodi](../images/screenshots/sw/dashboard-filter.png)

<br/>

> ℹ️ **KUREMA**<br/>
> Kichujio cha **Mtumiaji** kinaonekana tu kwa wasimamizi katika toleo la wavuti. Watumiaji wa kawaida hawataiona kichujio hicho, wala hakipatikani katika programu ya kompyuta.

<br/>

<a id="dashboard-tabs"></a>

### Vitalu vya ukurasa wa ukaguzi

- **Muhtasari** unapaswa muonekano wa ujumla wa matumizi na gharama. Una kifurushi cha **Matumizi kulingana na wakati** (idadi ya watu waliosajiliwa kwa kila siku kwa kutafsiri, kuandika upya, na kubadili) na **Matumizi kulingana na mfumo** (jumla ya **maombi kwa kila mfumo**, ikiwemo ubadilishaji).
- **Kulingana na matumizi** kugawanya shughuli kwa kila lugha ya kutafsiri, njia ya kuandika upya, na maombi ya ubadilishaji.
- **Kulingana na mfumo** inaonyesha ambao mifumo umeyatumia na gharama zao.
- **Kwa siku** inaonyesha jumla kwa kila siku.
- **Vituko vyote** vinaonyesha historia kamili ya vituko na kupewa uwezo wa kuisafirisha.

<br/>

<a id="export-data"></a>

### Weka data

Vipande vya dashibodi vinaweza toa data katika:

- **JSON**
- **CSV**
- **XLSX**

Hii ni muhimu ikiwa unataka kuangalia shughuli nje ya programu au kushiriki ripoti.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Futa rekodi zilizohifadhiwa kwa ajili ya mudhau

Katika **Kwa Mudhau** au **Wito Wote**, unaweza kufuta rekodi zilizohifadhiwa kwa ajili ya mudhau kwa kuwasiliana na ikoni ya "kisanduku cha taka".

> ⚠️ **ONDOA**<br/>
> Kufuta rekodi zilizohifadhiwa haipatikani tena. Tumia hii tu kama ujasamehau kwamba hakuna hitaji la historia hiyo tena.

Kama unataka kufuta data yote au kutosha rekodi kulingana na umri wao, nenda kwenye [**Mipangilio** > **Ufuatiliaji wa Gharama**](#cost-tracking). Pale utanapata chaguo la kufuta data yote iliyohifadhiwa au tu data ya kiepochani mwaka fulani.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Historia

Bonyeza **Historia** ili uone orodha ya vitendo vyako vilivyofanyika katika **Transrewrt**, ikiwa ni pamoja na vituo vya kuingiza na vya kutolewa kwa kila kitendo.

![Ukurasa wa Historia](../images/screenshots/sw/history.png)

<br/>

<a id="filter-the-history"></a>

### Chuja data

**Historia** hutumia vichujio vilevile kama ukurasa wa **Bodi ya Uaribishaji**. Vitumie kuchagua kipindi cha muda.

![Vichujio vya Bodi ya Uaribishaji](../images/screenshots/sw/dashboard-filter.png)

<br/>

> ℹ️ **KUMBUKA**<br/>
> Kichujio cha **Mtumiaji** kinaonekana tu kwa wasimamizi toka katika toleo la wavuti. Watumiaji wa kawaida hawataiona kichujio hiki, wala hakipatikani katika programu ya kompyuta.

<br/>

<a id="export-history-data"></a>

###  Rekodi taarifa za muda uliopita

Ukurasa wa historia unaweza kutolea data iliyochujwa katika:

- **JSON**
- **CSV**
- **XLSX**

Hii ni faidha ikiwa unataka kupitia shughuli nje ya programu au kushiriki ripoti.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>

## Mipangilio

Fungua **Mipangilio** kutoka kwenye orodha ya upande ili kubadilisha njia ambavyo programu inavyofanya kazi.

Vidansi vinavyopatikana vinategemea jukwaa na jukumu lako:
<small id="lang-list">Language: <a href="#introduction" style="font-weight: bold;">English</a> | <a href="#introduction-AR" style="font-weight: normal;">العربية</a> | <a href="#introduction-ES" style="font-weight: normal;">Español</a> | <a href="#introduction-PT" style="font-weight: normal;">Português</a> | <a href="#introduction-RU" style="font-weight: normal;">Русский</a> | <a href="#introduction-ZH" style="font-weight: normal;">简体中文</a> | <a href="#introduction-TR" style="font-weight: normal;">Türkçe</a> | <a href="#introduction-JA" style="font-weight: normal;">日本語</a> | <a href="#introduction-DE" style="font-weight: normal;">Deutsch</a> | <a href="#introduction-FR" style="font-weight: normal;">Français</a> | <a href="#introduction-IND" style="font-weight: normal;">Indonesia</a> | <a href="#introduction-KO" style="font-weight: normal;">한국어</a> | <a href="#introduction-VI" style="font-weight: normal;">Tiếng Việt</a> | <a href="#introduction-SW" style="font-weight: normal;">Kiswahili</a> | <a href="#introduction-ML" style="font-weight: normal;">മലയാളം</a></small>

| Tab | Desktop | Web (msimamizi) | Web (mtumiaji wa kawaida) |  
|-------------------|:-------:|:-----------:|:------------------:|  
| Mipangilio Mihirizi | yes | yes | yes |  
| Models | yes | yes | yes |  
| Lugha | yes | yes | yes |  
| Usimamizi wa Gharama | yes | yes | — |  
| Badilisha Maneno ya Kuwajibika | yes | yes | yes |  
| Watumiaji | — | yes | — |  
| Mipangilio ya API | yes | yes | — |  
| Kuhusu | yes | yes | yes |

<br/>

> ℹ️ **KUMBUKA**<br/>
> Tovuti ya mtandalo, kila mtumiaji ana mpangilio wake mwenyewe. Mipangilio kama vile vitu vya uchaguzi, lugha, chaguzi jumla na maelekezo ya ubadilishaji hifadhiwa kwa kila mtumiaji. Mabadiliko unayoyatoa hautathiri watumiaji wengine.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Mizigo ya kawaida

Tumia **Mizigo ya Kawaida** kupiga wazo kuhusu tabia ya kuandika, kama maelezo ya utekelezaji hutengenezwa kwa ajili ya **Historia**, na maonekano.

**Tabia**

- **Tabia ya ENTER** inachagua kama `Enter` itabonyeza kazi au itaweka mstari mpya.
- **Tafsiri otomatiki wakati wa kunakili** huanza tafsiri mara baada tu unaponakili maandishi.
- **Nakili matokeo otomatiki kwenye ubao wa kunakili** inanyakili matokeo yanayofanikiwa otomatiki.
- **Tafsiri ya wakati halisi (wakati unaotumaandika)** hufanya tafsiri wakati unaotumaandika.
- **Muda umelipita (ms)** husanidi wakati wa subira kwa tafsiri ya wakati halisi.

**Historia**

- **Hifadhi historia ya utekelezaji** huamua kama kila tafsiri, kuandika upya, na kubadilisha hutengeneza **maandishi ya kuingiza na ya pato** kwa ajili ya kuonekana kwenye upande wa [**Historia**](#history). Kuzima hii kuhitaji uthibitishaji; kama utathibitisha, maandishi yatengenezwayo ya historia hutolewa kutoka kwenye hifadhidata.

- **Futa historia ya taarifa** inawezesha kuondoa maandishi yaliyohifadhiwa kulingana na umri wake (kama vile zaidi ya muda fulani, au **taarifa zote (wazi)**) kwa kutumia **Futa taarifa**. Hii inaathiri tu maandishi yaliyohifadhiwa kwa ajili ya kuonekana kwa **Historia**; **haiathiri** jumla ya gharama au matumizi. Kufuta ama kupunguza taarifa za **gharama**, tumia [**Mipangilio** > **Kufuatia Gharama**](#cost-tracking).

**Muonekano**

- **Onyesha habari za gharama kwenye vitendo** hurithishia kuonekana kwa gharama kwa kila kitendo (iwezekanavyo) na jumla ya gharama kwenye sehemu za Tafsiri, Andika upya na Badilisha.
- **Nambari za sehemu za kumi za gharama** zinabadilisha nambari za kumi za kutazamia kwa gharama.
- **Kwa wavuti tu:** **onyesha umba wa sehemu kuzunguka programu** linawezesha nafasi ya ziada kuzunguka kiolesura cha maandalizi.
- **Kabila la Herufi** kubadilisha akrabu ya maandishi kwenye sehemu za maandishi.
- **Ukubwa** unabadilisha ukubwa wa herufi.

**Usimamizi wa Nakala ya Upenjizi**

- **Jumuisha taarifa za matumizi kwenye nakala** — unapotupwa, ZIP pia ina historia ya utekelezaji na taarifa za maombi ya API.

- **Weka usanidi** — huundia ZIP moja (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` kwa UTC kwa chaguo-msingi) yenye `config.json`, `state.json`, ufunguo wa usimbaji usio lazima, watumiaji, mapendekezo, mirongo e maarufu, na data ya matumizi ikiwa umekibofya. Baada ya kuweka usanidi, uthibitisho unaonesha jina la faili uliyosafisha.
- **Rudisha kutoka kwa usanidi** — huwezesha kwanza **mazungumzo ya uthibitisho**. Chagua faili ya ZIP ya usanidi ndani ya mazungumzo (**Tazama** / kichujio cha faili au buruta-na-anza ambako umesinghawishwa), kisha hakiki chaguo:
  - **Rudisha data ya matumizi** — ingiza data/historia kutoka kwa ZIP pale iliposafishwa ikiwa ilisajiliwa pamoja na data ya matumizi; usisajili ikiwa unataka tu usanidi na michoro.
  - **Futa data ya matumizi ya zamani kabla ya kurudisha** — ondoa data/historia ya sasa kwenye ubonyezi huu kabla ya kutumia usanidi (si lazima; tumia pale unapohitaji bandika safi).

Ukurasa uliotengenezwa kwenye tovuti au tovuti ya desktop unaweza kutolewa kwenye tena. Wakati wa kurudi ukurasa uliotolewa wa desktop kwenye tovuti, data itarudiwa kwenye mtumiaji mpendezo.  

<br/>  

<a id="models"></a>

### Modeli

Tumia **Mipangilio** > **Modeli** kuchagua modeli zipi zitakazoonekana kwenye orodha ya kizazi.

![Sikwati ya Mipangilio ya Modeli](../images/screenshots/sw/settings-models.png)

Ukurasa una orodha mbili:

- **Modeli Zilizopatikana** upande wa kushoto
- **Modeli Zilizochaguliwa** upande wa kulia

Vituo vya matumizi vinajumuisha:

- **Tafuta modeli...** kuchagua modeli kwa jina
- Vichipu vya **Mtoa Huduma** kupunguza orodha kwa injini moja (OpenRouter, OpenAI, Ollama, …)
- **Taslimu Tu** kuonyesha modeli za bure tu
- **Sasisha** kupakua upya orodha
- **Panua Zote** na **Punguza Zote** unapotakata kwa mtoa huduma

Vitambaa vya modeli viwemo amsingi wa mtoa huduma (kama vile `openrouter/…` vs `openai/…`). Viwato kama **OpenAI (OpenRouter)** k contra **OpenAI (moja kwa moja)** vinawasilisha jinsi ya usafiri wa mawasiliano.

> ℹ️ **KODI**<br/>

> **OpenRouter Body Builder** (`openrouter/bodybuilder`) ni mfumo wa kuchagua njia, si mfumo wa mazungumzo ya kawaida: majibu yake ni JSON inayoelezea maombi ya OpenRouter API (kama mfano, safu ya `requests` yenye `model` na `messages`). Ikiwa utatumia kwa **Tafsiri**, **Andika upya**, au **Badilisha**, sanduku la matokeo litasema hilo JSON badala ya maandishi yaliyotimia. Chagua mfumo wa maandishi wa kawaida kwa kazi hizo. Angalia [ukurasa wa mfumo wa Body Builder](https://openrouter.ai/openrouter/bodybuilder) kwenye OpenRouter.

Vitendo:

 - Ili ongeza mfumo, bofya **Ongeza** au mahali popote katika kiolesura.

 - Ili usireje mfumo, bofya **X** karibu nalo katika **Mifumo iliyochaguliwa** au **Imechaguliwa** kwenye kiolesura cha Mifumo Inayopatikana.

 - Ili ufute orodha, bofya **Bofya yote**. Mfumo wa bure unaoahitika utabaki kwenye orodha.

<br/>

> ℹ️ **TAARIFA**<br/>

> Ikiwa huwezi kupenda kuongeza mikopo kwa OpenRouter mara moja, anza kuvyunza **Bure Pekee** na kuchagua lahaja zenye uwezo wa bure (hakuna kadi ya mkopo inayohitajika). Pia unaweza kutumia Ollama kuteka lahaja kwa ndani bila kupata ufunguo wowote wa API.

<br/>

<a id="languages"></a>

### Lugha

Tumia **Mipangilio** > **Lugha** kusafisha orodha za lugha zilizotumiwa katika programu.

- **Lugha kuu** zinawekwa karibu juu ya orodha ya lugha katika **Tafsiri** na **Badili**.
- **Lugha ya mteja** inaruhusu kuongeza lugha ambayo haiko katika orodha iliyotengenezwa awali.

Ikiwa ungeongeza lugha ya mteja, itaonekana kwenye kichagua cha lugha pamoja na chaguo iliyotengenezwa.

<br/>

<a id="cost-tracking"></a>

### Kukumbusha malipo

Tumia **Mipangilio** > **Kukumbusha malipo** kutumikia habari ya malipo.

- **Jumla ya Gharama** inaonyesha jumla ya sasa.
- **Nakili Thamani** inanakili jumla kwa wadhifa.
- **Washa upya Gharama** husawazisha jumla iliyohifadhiwa kuwa sifuri.
- **Fanya usawazi na matumizi ya bango la API** husawazisha jumla ili iwe sawa na matumizi yanayotolewa na akaunti yako ya OpenRouter (kwa OpenRouter tu).
- **Matumizi ya Bango la API** inaonyesha maelezo ya matumizi ya OpenRouter, ikiwa yapatikana.
- **Futa data ya malipo** huondoa data zote, au tu maingizo ya karibu zaidi ya tarehe iliyochaguliwa.

**Kukumbusha malipo:** Wakati unapotumia modeli za OpenRouter, programu inaonyesha matumizi yako halisi na matumizi yako kulingana na habari za gharama kutoka kwa OpenRouter. Kwa watoa wote wengine, programu husanidi gharama kwa kutumia bei iliyotolewa na OpenRouter, ikiwa bei haijapatikana, sanidi uwezekano kuwa sifuri.

<br/>

> ℹ️ **TAARIFA**<br/>
> **Takwimu zote za gharama ni sanadi kwa ajili ya maelekezo yako tu, si kama katika kriko la bili rasmi.**


<br/>

> ⚠️ **ONDOA**<br/>

> Ufafanuzi wa data hautaweza kurekebishwa. Kabla ya kufuta, hakikisha umebakipu data yako au umoija kwa njia ya [**Historia**](#history)  
> au [**Ubao** > **Maombi Yote**](#dashboard-tabs), ikiwa hakuna itafutwa milele.  
> Historia yote ya pembejeo/patiko inayohusiana na kila kuingia kwa API itafutwa pia.


<br/>

<a id="transform-prompts"></a>

### Badili vigezo

Tumia **Mipangilio** > **Badili Vigezo** kudumisha vigezo kwa wingi.

Unaweza:

- angalia vigezo ulivyovitiwa
- futa vigezo
- paia vigezo kutoka kwenye faili
- paki vigezo kwa ajili ya usalama au kushiriki
- pakia vigezo vya sampuli kwenye orodha ya vigezo

<br/>

<a id="users"></a>

### Watumiaji

Tumia **Watumiaji** kudhibiti akaunti za watumiaji katika toleo la wavuti. Unaweza kuongeza watumiaji, kusasisha maelezo yao, kurudisha nywila, na kufuta akaunti.

<br/>

<a id="api-config"></a>

### Usanidi wa API

Watoa huduma wamesaidi ni: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, na **Ollama** (mifumo ya kijiji kupitia anwani ya msingi). Unahitaji kusaidia tu watoto wa kampuni ambao utatumia.

**Programu ya wavuti: kwa msimamizi pekee**

Vifunguo vya API vinasaidiwa kupitia kutofautiana na mazingira ya mfumo au Docker — havijawekwa katika kiolesura cha wavuti. Ukurasa huu hufafanua wafanyabiashara ambao wana funguo uliowekwa na kukuruhusu kupima kila mmoja kwa kubonyeza kitufe cha **`Pima`**.

<br/>

> ℹ️ **KODI**<br/>
> Kubadilisha funguo la API, fashe kuhusu mazingira katika ukaguzi wako wa mfumo au Docker na uanzishe upya kwenye kihifadhi au chombo.

> ℹ️ **KODI**<br/>

> **Usimamizi wa usaliti wa usanidi** (angalia [**Mipangilio ya kawaida** → Usaliti wa Usanidi](#general-settings)) unaweza kuchukua **ufunguo uliokamilika** wa mtoa ndani ya faili ya `config.json` ya ZIP. Kurudisha kile ZIP hakikamilishwi kuchukua hizo funguo zilizotumika nyuma kwenye faili ya usanidi kusisitizwa na serveri — funguo zilizotumika bado vinakuja kutoka kwa mazingira na hali ya faili iliyopo kama ilivyo eleweka huko.

<br/>

**Programu ya darasa**

Tumia **Usanidi wa API** kuweka funguo la API kwa kila mtoa unaotumia. Kwa ajili ya Ollama, ingiza **URL ya msingi** badala ya funguo la API.


<br/>

> 💡 **Shauri** <br/>
> Kama hutaka kutumia funguo la API au kulipa kwa matumizi, unaweza [pakuza Ollama](https://ollama.com) na kutumia modeli (kama vile `translategemma:4b`) vinavyotumika mahali pa kawaida wa kifaa chako kwa bure. Vichwa kingine, unaweza kuunda akaunti ya bure ya OpenRouter (bosi ya kadi ya kikopeshi kimepewa) kutumia modeli yao ya bure, au kupata funguo la API bure kutoka kwa Cerebras, Google, Groq, au Mistral AI.

<br/>

- Ongeza watoa ambao unahitaji tu. Katika **Mipangilio** > **Mifumo**, kila kitambulisho cha mfumo huanzia na mtoa (kama mfano `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Ili uongeze upishi wa API, weka thamani kwenye ukurasa wa maandishi na bonyeza **`Hifadhi`**. Ili ubadilishe upishi uliopo, bonyeza **`Hariri`**. Ili uthibitishie kwamba upishi umefanya kazi, bonyeza **`Jaribu`**. Kwa anwani msingi ya Ollama, daima bonyeza **`Jaribu`** kuthibitisha muunganisho.

<br/>

> ℹ️ **TAARIFA**<br/>
> Huwezi kuona thamani ya sasa ya upishi wa API. Unaweza kubadilisha tu kwa kutumia kitufe cha **`Hariri`**.
> Upishi wa API hifadhiwa kama mrizi (encrypted) katika usanidi.

<br/>

<a id="about"></a>

### Kuhusu

Lipu la **Kuhusu** linawakilisha:

- jina la programu  
- nambari ya toleo  
- tarehe ya undarishi  
- kiungo cha depo ya miradi

<br/><br/>

<a id="common-issues"></a>

## Maswali yanayowakabiliwa mara kwa mara

Kama kitu kimoja hakikifanya kazi kama inavyotarajiwa, angalia mambo yafuatayo kwanza.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>

### Programu hautarasa, kubadilisha, au kugeuza maandishi

Angalia kwamba:

- umekagua kiusudiwa juu ya alama
- kiusudiwa angalau kimoja umelistejwa kwenye [**Mipangilio** > **Viusudi**](#models)
- mpangilio wako wa API unafanya kazi

Ikiwa unatumia programu ya eneo:

1. Fungua [**Mipangilio** > **Mpangilio wa API**](#api-config).
2. Angalia kuwa ufunguo mmoja wa API umehifadhiwa.
3. Bofya **Jaribu** pembeni mwa msaidizi ili uhakikishe kuwa ufunguo unafanya kazi.

<br/>

<a id="the-model-list-is-empty"></a>

### Orodha ya modeli ni tupu

Fungua [**Mipangilio** > **Modeli**](#models) kisha bofya **Sasisha**.

Ikiwa inahitajika:

- tafuta modeli moja
- weka **Bure Pekee** kugawa kazi
- ongeza modeli moja au zaidi kwenye **Modeli Zilizochaguliwa**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>

### Matokeo ni yasiyofaa kiasi au ghali sana

Jaribu moja au zaidi ya hizi:

- chagua mfumo tofauti
- tumia pembejeo fupi
- zima kutafsiri kwa wakati mmoja (wakati unapotayarisha) katika [**Mipangilio** > **Mipangilio ya Jumla**](#general-settings)
- tumia mfumo bure kwa kazi rahisi (tazama [Mifumo](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### Kiolesura ni kwa lugha mbaya

Bonyeza ikoni ya duara la dunia kwenye [shafu ya zana](#toolbar) na uchague **lugha ya kiolesura** unayopendelea.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>

### Maandishi ni machafuo au yanashindikiwa kusomwa

Fungua [**Mipangilio** > **Mipangilio ya Jumla**](#general-settings) na badilisha:

- **Familia ya Fonti**
- **Safu**

<br/>

<a id="dashboard-charts-are-empty"></a>

### Grafu za dashibodi zipo wazi

Hii ni ya kawaida ikiwa:

- hutumia tu **mifano ya bure** na unatazamia takwimu ya **gharama** (zinafika kuwa sifuri); grafu za nambari za matamishi katika **Muhtasari** bado zinahitaji data kutoka kipindi ulichochaguliwa
- **chaguo cha wakati** uliochaguliwa haluki kipindi ambacho matamishi yamefanyika — jaribu **Wote** kuchunguza

Ikiwa grafu bado zipo wazi baada ya kuchagua **Wote**, hakikisha kuwa matamishi yanaonekana katika [**Historia**](#history) au kwenye karatasi ya **Matamishi Yote**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Gharama inaoneshwa kama "haiapatikani" au inaonekana si sahihi

Wakati unapotumia modeli kupitia **OpenRouter**, programu inakurasa gharama halisi uliyotumia kama ilivyoripotiwa na OpenRouter.

Kwa **watoa huduma wengine** (OpenAI moja kwa moja, Anthropic moja kwa moja, nk), gharama ni tahasini kutokana na data ya bei iliyochapishwa na OpenRouter. Ikiwa bei kamili haijapatikana kwa modeli fulani, gharama itaonekana kama **haiapatikani** na haitajumuishwa katika jumla yako inayotokana.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### Jumla ya gharama haifanani na bili yangu ya mtoa huduma

Nambari zote za gharama katika programu ni **maziwa tu kwa ajili ya urejezi**, si katika sentensi rasmi za malipo.

Ili kufanya jumla iwe karibu zaidi na matumizi yako halisi ya OpenRouter, fungua [**Mipangilio** > **Kufuatilia Gharama**](#cost-tracking) na bofya **Sawazisha na matumizi ya ufunguo wa API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### Ukurasa wa Historia umekosekana kutoka kwenye upande wa wavuli

**Hifadhi historia ya utekelezaji** inaweza kuwa imezimwa. Fungua [**Mipangilio** > **Mipangilio ya Jumla**](#general-settings) kuyawezesha. Angalia kwamba ukionyesha hauwezi kurudisha data za historia zilizofutwa awali.

<br/>

<a id="web-app-session-expired"></a>

### Programu ya wavuti: umebonyezwa ukurasa wa kuingia mara mbali

Ukandikishi wako unaweza kuwa ameisha muda wake. Ingia tena. Ikihitaji mara kwa mara, angalia mipangilio ya seva kwa muda wa ukandikishi.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Msimamizi wa wavuti: umesahau au kupoteza nenosiri

Hii inahusika **programu ya wavuti inayotunzwa mwenyewe** (Docker), si programu ya mezani (Electron).

- Ikiwa msimamizi mwingine bado anaweza kuingia, anaweza kufungua [**Mipangilio** > **Watumiaji**](#users), kuchagua akaunti, na kuweka **nenosiri jipya** pale.
- Ikiwa umekataliwa lakini una **ufikiaji wa shell** kwenye kifaa au chombo, zima tena nenosiri kwa kusaidizi ambao unakibeba pamoja na piktura (badilisha `transrewrt` ikiwa umebadili jina la msingi, na ubaini nenosiri ikiwa lina nafasi au herufi maalum):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Jina la msimamizi wa msingi ni `admin` ikiwa hujawahi kujitengeneza akaunti zingine. Unapowapa hoja moja tu, itachukuliwa kuwa ni nenosiri jipya kwa `admin`.

Ikiwa unatumia kutoka kwa **kujilipua chanzo** badala ya Docker, tumia:

```bash
pnpm run reset-web-password -- <username> <new-password>

Skripti hii inasasisha rekodi ya mtumiaji kwenye hifadhidata ya SQLite (na inaweza kuunda mtumiaji wa `admin` kama hakipo). Baada ya kuweka upya, uingie kwa siri mpya.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### Dashibodi haina data kwa watu wengine (wavuti)

Tunapaswa **waendesha** tu ambao wanaweza kuona data kutoka kwa watumiaji wote kupitia kichujio cha **Mtumiaji**. Watumiaji wa kawaida wanaweza kuona shughuli zao pekee kama ilivyo mpango.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### Nabadilisha taaluma na kuishindua kazi ya haraka

Unapotediti taaluma, usisahau kubonyeza **Hifadhi** kabla hujabonyeza **Rudi Kuzinisha**.

<br/><br/>

<a id="quick-tips"></a>

## Vidokezo vya haraka

- Anza na [**Tafsiri**](#translate) kuhakikisha kuwa utayarajio wako umefanya kazi kabla huchukue [**Andika upya**](#rewrite) au [**Badilisha**](#transform).
- Tumia [**Andika upya**](#rewrite) kwa vitenzi vya kila siku kuboresha.
- Tumia [**Badilisha**](#transform) unapohitaji mtiririko wa kazi unaweza kurudia kwa kazi maalum.
- Tumia [**Dashibodi**](#dashboard) iwapo unataka kutazama matumizi na gharama.
- Tumia [**Historia**](#history) kuchunguza vitendo vya mbali na maandishi yao kamili ya pembe za pembe (input/output).
- Weka nje vitusho mara kwa mara ikiwa unajenga maktaba ya vitusho ambavyo unataka kuhifadhi (tazama [Vitusho vya Badilisha](#transform-prompts)) au ukitaka kushiriki na wengine.

<br/><br/>

<a id="disclaimer"></a>

## Hakuna Kuhusu Hilo

Majina na alama za bidhaa ni mali ya wamiliki wao wa kila moja na hutumiwa tu kwa madhumuni ya utambulisho. Programu hii haionekani pamoja na walemavu ama haiwasidi kwa namna yoyote kama ilivyoandikwa hapo juu.

<br/><br/>

<a id="license"></a>

## Leseni

Copyright © 2026 Waldemar Scudeller Jr.

[Leseni ya Apache 2.0](LICENSE)