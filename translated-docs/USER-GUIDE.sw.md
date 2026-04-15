---
translation_last_updated: '2026-04-15T22:30:32.297Z'
source_file_mtime: '2026-04-15T00:50:00.594Z'
source_file_hash: 3135daa3d29833b16bfbc0c51fa256454e681576435898527cc7914fbaddf5be
translation_language: sw
source_file_path: USER-GUIDE.md
translation_models:
  - deepseek/deepseek-v3.2
  - openai/gpt-4o-mini
  - qwen/qwen3-235b-a22b-2507
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Mwongozo wa Mtumiaji

<br/>

<a id="introduction"></a>
## Utangulizi

Transrewrt unasaidia kufanya kazi na maandishi kwa njia tatu kuu:

- **Tafsiri** - badilisha maandishi kutoka lugha moja hadi nyingine.
- **Andika upya** - fomu upya maandishi kwa mtindo tofauti, kama vile wazi zaidi, fupi zaidi, au rasmi zaidi.
- **Badilisha** - usimamize maandishi kwa maelekezo maalum ya AI inayoitwa manukuu.

<br/>

Mwongozo huu unaelezea jinsi ya kutumia programu baada ya kupakia na kuanza kufanya kazi. Kwa hatua za kufafanua, tazama **[README](README.sw.md)** kuu.

<br/>

> ℹ️ **KODI**<br/>
> Transrewrt inapatikana kama programu ya kompyuta kwa Windows na Linux, na kama programu binafsi ya wavuti. Mwongozo huu unazingatia matumizi ya kila siku ya programu. Ambapo kitu kinafanana na toleo moja tu, kinaoneshwa kwa wazi.

<small>**Soma kwa lugha nyingine:** </small>

<small id="lang-list">[English](../USER-GUIDE.md) · [Português (BR)](./USER-GUIDE.pt-BR.md) · [العربية](./USER-GUIDE.ar.md) · [বাংলা](./USER-GUIDE.bn.md) · [Català](./USER-GUIDE.ca.md) · [中文 (中国大陆)](./USER-GUIDE.zh-CN.md) · [中文 (台灣)](./USER-GUIDE.zh-TW.md) · [Hrvatski](./USER-GUIDE.hr.md) · [Čeština](./USER-GUIDE.cs.md) · [Nederlands](./USER-GUIDE.nl.md) · [English](./USER-GUIDE.en-US.md) · [Tagalog](./USER-GUIDE.tl.md) · [Français](./USER-GUIDE.fr.md) · [Deutsch](./USER-GUIDE.de.md) · [Ελληνικά](./USER-GUIDE.el.md) · [हिन्दी](./USER-GUIDE.hi.md) · [Magyar](./USER-GUIDE.hu.md) · [Italiano](./USER-GUIDE.it.md) · [日本語](./USER-GUIDE.ja.md) · [jv](./USER-GUIDE.jv.md) · [한국어](./USER-GUIDE.ko.md) · [Bahasa Melayu](./USER-GUIDE.ms.md) · [فارسی](./USER-GUIDE.fa.md) · [Polski](./USER-GUIDE.pl.md) · [Português](./USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](./USER-GUIDE.pa.md) · [Română](./USER-GUIDE.ro.md) · [Русский](./USER-GUIDE.ru.md) · [Slovenčina](./USER-GUIDE.sk.md) · [Español](./USER-GUIDE.es.md) · [Kiswahili](./USER-GUIDE.sw.md) · [Svenska](./USER-GUIDE.sv.md) · [తెలుగు](./USER-GUIDE.te.md) · [ไทย](./USER-GUIDE.th.md) · [Türkçe](./USER-GUIDE.tr.md) · [Українська](./USER-GUIDE.uk.md) · [Tiếng Việt](./USER-GUIDE.vi.md)</small>

<small>

> **Kumbusho la tafsiri za UI na ya ushauri:** Lugha zote za kipengele cha mtumiaji isipokuwa Kiingereza (UK) 
> zimeletwa kwa kutumia mifano ya AI; maandishi yanaweza kuwa si sahihi au kuwa na makosa.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Orodha ya Mada**

- [Kabla ya kuanza](#before-you-start)
  - [Jinsi ya kupata ufunguo wa API wa OpenRouter bila malipo (programu ya kompyuta)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Anza kutumia](#getting-started)
- [Sehemu kuu za dirisha](#main-parts-of-the-window)
  - [Upau wa upande](#sidebar)
  - [Upau wa zana](#toolbar)
  - [Sehemu za pembejeo na pato](#input-and-output-panels)
- [Tafsiri](#translate)
  - [Tafsiri maandishi](#translate-text)
  - [Uchaguzi wa lugha](#language-selection)
  - [Mipangilio muhimu ya tafsiri](#helpful-translation-settings)
- [Andika upya](#rewrite)
- [Badilisha](#transform)
  - [Imba mandhari iliyopo](#run-an-existing-prompt)
  - [Ikiwa bado huna mandhari](#if-you-have-no-prompts-yet)
  - [Tengeneza mandhari haraka](#create-a-prompt-quickly)
  - [Hariri mandhari](#edit-a-prompt)
  - [Jaribu mandhari kabla ya kutumia](#test-a-prompt-before-using-it)
- [Ubao](#dashboard)
  - [Chuja data](#filter-the-data)
  - [Vidole vya ubao](#dashboard-tabs)
  - [Toa data](#export-data)
  - [Futa rekodi zilizohifadhiwa kwa kifaa](#delete-stored-records-for-a-model)
- [Historia](#history)
  - [Chuja data](#filter-the-data-1)
  - [Toa data ya historia](#export-history-data)
- [Mipangilio](#settings)
  - [Mipangilio ya ujumla](#general-settings)
  - [Mifano](#models)
  - [Lugha](#languages)
  - [Ufuatiliaji wa gharama](#cost-tracking)
  - [Maagizo ya ubadilishaji](#transform-prompts)
  - [Watumiaji](#users)
  - [Mipangilio ya API](#api-config)
  - [Kuhusu](#about)
- [Matatizo ya kawaida](#common-issues)
  - [Programu haiwezi kutafsiri, kuandika upya, au kubadilisha maandishi](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Orodha ya mifano ni tupu](#the-model-list-is-empty)
  - [Matokeo ni ya polepole au ghali sana](#the-result-is-too-slow-or-too-expensive)
  - [Kiongozi kinavyotumika hakiko](#the-interface-is-in-the-wrong-language)
  - [Maandishi ni madogo mno au vigumu kusoma](#the-text-is-too-small-or-hard-to-read)
  - [Grafu za ubao ni tupu](#dashboard-charts-are-empty)
  - [Gharama inaonesha "haiupatikani" au inaonekana si sahihi](#cost-shows-not-available-or-seems-wrong)
  - [Gharama jumla haifanani na bili yangu ya mtoa huduma](#total-cost-does-not-match-my-provider-bill)
  - [Ukurasa wa Historia umepotea kutoka upau wa upande](#the-history-page-is-missing-from-the-sidebar)
  - [Programu ya wavuti: unarudiwa kwenye ukurasa wa kuingia kwa makosa](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Msimamizi wa wavuti: umesahau au umepoteza nenosiri](#web-admin-forgot-or-lost-a-password)
  - [Ubao hautaoneshesha data kwa watumiaji wengine (wavuti)](#dashboard-shows-no-data-for-other-users-web)
  - [Nimebadilisha mandhari na kusahau mabadiliko](#i-changed-a-prompt-and-lost-the-edits)
- [Vidokezo vya haraka](#quick-tips)
- [Kanuni](#disclaimer)
- [Leseni](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Kabla ya kuanza

Ili kutumia Transrewrt, unahitaji upatikanaji wa mtoa huduma ya AI angalau mmoja. Watu wanaoweza kutoa huduma wanaohusishwa ni: [OpenRouter](https://openrouter.ai) (ambayo inakusanya mifano mingi), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, na [Ollama](https://ollama.com) kwa mifano ya kijitihima.

Huna hitaji kuchagua kifaa kinacholipwa ili kuanza. Mara tu unapoweka ufunguo wako wa OpenRouter API, programu hutoa kiotomatiki kipengele cha **bure** cha OpenRouter. Hii inakuruhusu uanze kutafsiri, kuandika upya, na kubadili maandishi mara moja. Kama mbadala, unaweza pia kupata ufunguo wa API bila malipo kutoka kwa Cerebras, Google, Groq, au Mistral AI.

Kwa lugha rahisi:

- **Kifaa** ni injini ya AI inayofanya kazi. Mifano inaorodheshwa pamoja na **kiambishi cha mtoa huduma** (kwa mfano `openrouter/…`, `openai/…`, `ollama/…`).
- **Ufunguo wa API** (au, kwa Ollama, **URL ya msingi**) ni njia programu inayotumia kupata mtoa huduma.

Kama unatumia **programu ya kompyuta**, weka ufunguo katika [**Mipangilio** > **Mipangilio ya API**](#api-config) kwa kila mtoa unayotumia. Kwa matumizi ya OpenRouter pekee, tazama [Jinsi ya kupata ufunguo wa API](#how-to-get-an-api-key-desktop-app) chini. Kama hutaki kutumia ufunguo wa API, unaweza kusakinisha Ollama (kutoka [ollama.com](https://ollama.com)) na kutumia mifano ya kijitihima badala yake, kama vile `translategemma:4b`.

Kama unatumia **toleo la wavuti**, mwenye mzunguko humpanga mtoa huduma kwa kutumia vigezo vya mazingira, kwa hivyo huwezi kuingiza ufunguo wa API moja kwa moja katika programu.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Jinsi ya kupata bango la API ya OpenRouter bila malipo (programu ya kompyuta)

Kama unatumia programu ya kompyuta, fuata hatua hizi:

1. Nenda kwenye [OpenRouter](https://openrouter.ai) kwenye kivinjari chako cha wavuti.
2. Unda akaunti au ingia.
3. Fungua ukurasa wa [Vifunguo](https://openrouter.ai/keys).
4. Bonyeza kitufe cha kutengeneza bango jipya la API.
5. Toa jina kwa bango ili ulikize kama ulivyoleta baadaye.
6. Nakili bango jipya la API.
7. Rudi kwenye Transrewrt na fungua **Mipangilio** > **Mipangilio ya API**.
8. Bindisha bango kwenye **Bango la OpenRouter API** (chini ya **Mipangilio** > **Mipangilio ya API**).
9. Bonyeza **Jaribu bango la OpenRouter** ili uhakikishe linafanya kazi.

<br/><br/>

<a id="getting-started"></a>
## Anza kazi

Kama ni mara ya kwanza unayotumia Transrewrt, fuata mpangilio huu:

1. Fungua programu.
2. Chagua **lugha yako ya kuingiza** kutoka kwenye ikoni ya dunia ikiwa inahitajika.
3. Ikiwa umepakia **programu ya kompyuta**, fungua [**Mipangilio** > **Mipangilio ya API**](#api-config), ongeza ufunguo wa API kwa ajili ya mtoa angalau mmoja (kama mfano OpenRouter), na bofya **Jaribu** ili uhakikishe inafanya kazi.
4. Fungua [**Mipangilio** > **Mifano**](#models) na ongeza kifaa au vifaa viwili au zaidi kwenye **Vifaa Vilivyotumika**.
5. Fungua [**Mipangilio** > **Lugha**](#languages) na chagua **Lugha zako kuu** ikiwa unataka kuleta kwanza kile unachotumia mara kwa mara.
6. Nenda kwenye **Tafsiri** na simamia tafsiri rahisi ili uhakikishe kila kitu kinavyofanya kazi.
7. Baada ya kufanikisha hatua hii, jaribu **Andika upya** kisha **Badilisha**.

Mpangilio huu una maana. Unaondoa tatizo la kawaida la kwanza: kujaribu kufanya kazi kabla ya programu kuna muunganisho wa API unaofanya kazi au kifaa kilichochaguliwa.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Sehemu kuu za dirisha

Programu imegawanywa katika sehemu tatu kuu:

- **Orodha ya upande** upande wa kushoto.
- **Barua pepe** juu.
- **Eneo la kazi** katikati.

<br/>

<a id="sidebar"></a>
### Upau wa Kando

Tumia upau wa kando ili kuhamia katika programu. Unaweza kuficha upau wa kando kupata nafasi zaidi kwa kubonyeza kielelezo karibu na nembo ya programu.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/sw/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Tafsiri</strong> inafungua eneo la kazi la tafsiri.</li><br/>
        <li><strong>Andika upya</strong> inafungua eneo la kazi la kuandika upya.</li><br/>
        <li><strong>Badilisha</strong> inafungua eneo la kazi la mandhari maalum.</li><br/>
        <li><strong>Dashibodi</strong> inaonyesha taarifa za matumizi na gharama.</li><br/>
        <li><strong>Mipangilio</strong> inafungua ubao wa mipangilio.</li><br/>
        <li><strong>Historia</strong> inaonyesha historia ya matumizi pamoja na maandishi ya pembejeo na pato</li><br/>
        <li><strong>Mtumiaji</strong> inaonyesha jina la mtumiaji ambaye amewasilishwa (web tu).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Barua za Zana

Barua za zana zinabadilika kidogo kulingana na unapokuwako katika programu.

- Upande wa kushoto, inaonyesha jina la ukurasa wa sasa.
- Upande wa kulia, inaonyesha kichagua **kifaa** na kitendaji cha **Lugha ya kuingiza**.

Kichagua **kifaa** kinaonesha uchaguzi wa injini ya AI itakayotumika kwa kazi ya sasa.

![Model selector](../images/screenshots/sw/model-selector.png)

Baadhi ya mifano isiyo ya malipo inaweza kuwa haijawezekana kila wakati—wakati mwingine yanaweza kuwa mbali au kuwa na kikomo cha matumizi. Ikiwa hivi kinatokea, programu itawasilisha kifaa hicho kutoka kwenye orodha yako inayopatikana. Kudhibiti mifano inayotazamia, nenda kwenye [**Mipangilio** > **Mifano**](#models) na hariri orodha yako ya mifano. 
Unaweza pia kufungua mipangilio ya kifaa moja kwa moja kwa kubonyeza kipengele cha mtoa huduma upande wa kushoto wa jina la kifaa kwenye barua za zana.

<br/>

Picha ya **duara ya dunia + msimbo wa lugha** inabadilisha lugha ya kuingiza ya programu, kama vile menyu na vitufe. Hai **babadilishi** lugha za tafsiri zinazotumika katika **Tafsiri**.

![Interface language selector](../images/screenshots/sw/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Sehemu za pembejeo na pato

Sehemu zote zinatumia upande wa kushoto wa **Pembejeo** na upande wa kulia wa **Pato**.

Kila ubao pia unaonyesha:

| **Pembejeo**                                                          | **Pato**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Idadi ya herufi <br/>- Idadi ya maneno <br/>- Idadi ya mifanuko   <br/> | - Muda ulichotumika kufanya kazi<br/>- **TPS** (alama kwa sekunde)<br/>- Idadi za herufi, maneno, na mifanuko<br/>- Kifaa kilichotumika |

Kama unaulizwa kuhusu maneno ya kiufundi:

- **Alama** inamaanisha kipande kidogo cha maandishi. Unaweza kufikiria kama sehemu ya neno au neno fupi.
- **TPS** inamaanisha idadi ya kipande hicho cha maandishi ambacho kifaa kimechakata kwa kila sekunde.

<br/>

Unaweza pia kufuatilia gharama ya kila shughuli (kama inapatikana) na gharama jumla, kizima chaguo `Show cost information on the actions` kwenye [**Mipangilio** > **Mipangilio ya Ujumla**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Tafsiri

Tumia **Tafsiri** unapotaka kubadili maandishi kutoka kwa lugha moja hadi nyingine.

![Translate workspace](../images/screenshots/sw/translate.png)

<br/>

<a id="translate-text"></a>
### Tafsiri maandishi

1. Fungua **Tafsiri**.
2. Chagua lugha kwenye **Kutoka**.
3. Chagua lugha kwenye **Kwenda**.
4. Chagua kifaa kwenye barua za kizimizi.
5. Andika au bindisha maandishi kwenye **Pembejeo**.
6. Bonyeza **Tafsiri**.
7. Soma matokeo kwenye **Pato**.
8. Tumia kitufe cha nakili ikiwa unataka kunakili matokeo.

<br/>

<a id="language-selection"></a>
### Uchaguzi wa Lugha

- **Kutoka** inaweza kuwa lugha maalum au **Sajili Lugha**.
- **Kwenda** ni lugha unayotaka matokeo yakuwe mahali pana.

**Lugha bora** zilizochaguliwa zinaonekana juu ya orodha. Unaweza kuziweka katika [**Mipangilio** > **Lugha**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Mipangilio muhimu ya tafsiri

Katika [**Mipangilio** > **Mipangilio ya Ujumla**](#general-settings), unaweza kubadilisha jinsi tafsiri inavyofanya kazi:

- **Tafsiri otomatiki kwa kubatika** inatumia tafsiri mara moja unapotia maandishi.
- **Nakili otomatiki matokeo kwenye ubao wa kunakili** inanakili matokeo otomatiki baada ya kushindwa kikamilifu.
- **Tafsiri ya wakati halisi (wakati unapoweka)** inatumia tafsiri wakati unapoweka.
- **Wakati uliopita (ms)** huchukua muda ambao programu inasubiri kabla ya kutekeleza tafsiri ya wakati halisi.
- **Enter** huchukua jambo linalotokea unapotapeli `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Andika upya

Tumia **Andika upya** unapohitaji kuboresha maneno bila kubadilisha maana kuu.

![Rewrite workspace](../images/screenshots/sw/rewrite.png)

Hii ni muhimu kwa ajili ya:

- kurekebisha silabi na sarufi (**Angalia Silabi na Sarufi**)
- kufanya maandishi iwe wazi zaidi (**Boresha Uwazi**)
- toleo mbadala tofauti kadhaa katika kipindi kimoja (**Toleo mbadala**)
- kufanya maandishi iwe rasmi zaidi au si rasmi (**Rasmi** / **Si rasmi**)
- kufupisha au kupanua maandishi (**Fupisha** / **Panua**)
- kufanya maandishi iwe kiasi cha kiufundi zaidi (**Fanya Kiufundi**)

<br/>

> 💡 **SAAHALA**<br/>
> Unapotumia kipindi cha "**Angalia Silabi na Sarufi**", kubswitcha cha **Onyesha mabadiliko** kinaonekana kwenye ubao wa pato (karibu na **Nakili**).
> Washa au zima ili kuonesha au kuficha makosa maalum uliyosahihisha kwenye maandishi yako.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Badilisha

Tumia **Badilisha** unapotaka AI kufuata orodha maalum ya maelekezo.

![Transform workspace](../images/screenshots/sw/transform.png)

Hii ni eneo lenye uwezo wa kubadilika zaidi katika programu. Unaweza kutumia kwa kazi kama vile:

- kufupisha maelezo
- kubadilisha maandishi ya kioo kuwa barua pepe iliyosafishwa
- kutoa pointi muhimu
- kubadilisha maandishi kwa muundo maalum
- shughuli yoyote nyingine maalum yenye maandishi ya kuingiza

<br/>

<a id="run-an-existing-prompt"></a>
### Endesha mandhari ya kuwepo

1. Fungua **Badilisha**.
2. Chagua mandhari kutoka kwenye orodha ya mandhari.
3. Ikiwa kisanduku cha **Lengo** la lugha kinaonekana, chagua lugha ikiwa unataka moja.
4. Andika au bindisha maandishi kwenye **Pembejeo**.
5. Bonyeza **Badilisha**.
6. Soma matokeo katika **Pato**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Ikiwa bado huna mandhari

Ikiwa orodha yako ya mandhari ni tupu, bofya **Pakia mchuzi mfano** kwenye eneo la kazi la Badilisha. Kitendakazi hicho kiko mara kwa mara kwenye [**Mipangilio** > **Maagizo ya ubadilishaji**](#transform-prompts) kwenye safu ya toa/kuleta. Vyote viwili vinaongeza mifano ili uanze haraka.

<br/>

> ℹ️ **KODI**<br/>
> Mandhari ya mfano hutolewa kwa Kiingereza. Baada ya kupakia, unaweza kuhariri mandhari na kutumia **Tafsiri maagizo** kutafsiri kwa lugha yako.

<br/>

<a id="create-a-prompt-quickly"></a>
### Tengeneza mandhari haraka

Njia ya haraka zaidi ya kutengeneza mandhari ni:

1. Bonyeza **Mandhari mpya**.  
2. Bonyeza **Zalisha ombi**.  
3. Eleza unachotaka mandhari ifanye.  
4. Chagua kifaa.  
5. Acha programu itengeneze rasimu kwa ajili yako.  
6. Kagua rasimu na bonyeza **Hifadhi**.

![Generate prompt](../images/screenshots/sw/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Hariri mandhari

Unapofanya kazi ya kutengeneza au kuhariri mandhari, mhariri anaonekana kushoto na eneo la jaribio linaonekana kulia.

![Transform prompt editor](../images/screenshots/sw/transform-prompt-edit.png)

Sehemu kuu ni:

- **Jina la mandhari**: jina linaloonyeshwa katika orodha ya mandhari.
- **Maelekezo ya mandhari (si lazima)**: kidokezo fupi kinachoonyeshwa kwa mtumiaji wakati wa kuendesha mandhari.
- **Wajibu wa mfumo**: wajibu wote uliopeanwa kwa AI, kama vile 'Wewe ni msaidizi mwenye kusaidia.'
- **Maelekezo ya mfumo (moja kwa mstari)**: kanuni maalum unazotaka AI kuzifuata.
- **Maelezo ya pato**: neno fupi linaloelezea matokeo, kama vile 'muhtasari' au 'andika upya'.
- **Joto (0.0 → 1.0)**: jinsi kifaa kitavyojiendelea; angalia hapa chini.
- **Ulizie lugha ya kianzia**: huongeza kichaguzi cha lugha ya mpangilio wakati mandhari inaendeshwa.

Ikiwa istilahi ya kiufundi **Joto** ni mpya kwako, fikiria kama hivi:

- **Joto la chini** hutoa matokeo thabiti zaidi, yanayotabirika zaidi.
- **Joto la juu** hutoa anuwai na ubunifu zaidi.

Unaweza pia kutumia:

- **`Generate prompt`** kutengeneza rasimu mpya kutoka kwa maelezo rahisi
- **`Improve prompt`** kuboresha mandhari yako ya sasa
- **`Translate prompt`** kufanya tafsiri ya sehemu za mandhari

<br/>

> ⚠️ **ONDOA**<br/>
> Bonyeza **`Save`** kabla ya kubonyeza **`Back to Run`**. Ikiwa utarudi bila kuhifadhi, mabadiliko yako yatapotea.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Jaribu mandhari kabla ya kuiutilia

Ubao wa majaribio wa upande wa kulia unakuruhusu kujaribu mandhari yako kwa maandishi ya sampuli kabla ya kuiutilia kazi ya kila siku.

Hii ni muhimu wakati:

- unajenga mandhari mpya  
- unalinganisha toleo mbili za mandhari  
- unataka kuangalia sauti, urefu, au muundo wa pato

<br/>

> ℹ️ **KUMBUKUMBU**<br/>  
> Unaweza kutoa na kuingiza mandhari zilizohifadhiwa katika [**Mipangilio** > **Maagizo ya ubadilishaji**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>  
## Ubao

Tumia **Ubao** kuona ni kiasi gani unavyotumia programu na ni gharama gani (kwa mifano ya kulipia).

![Dashboard summary](../images/screenshots/sw/dashboard-summary.png)

<br/>

> ℹ️ **KUMBUKUMBU**<br/>  
> Ikiwa unatumia tu mifano **bure**, kiasi cha **gharama** kinaweza kuwa sifuri na muhtasari unaozingatia gharama unaweza kuonekana kuwa tupu. Katika **Muhtasari**, **Matumizi kwa muda** na **Matumizi kwa kifaa** bado yanaonyesha **idadi ya maombi** (tafsiri, andika upya, na badilisha) unapokuwa na shughuli katika kipindi kilichochaguliwa.

<br/>

<a id="filter-the-data"></a>
### Chuja data

Tumia vitufe vya kuchuja juu ili ubadilishe kipindi cha wakati.

![Dashboard filters](../images/screenshots/sw/dashboard-filter.png)

<br/>

> ℹ️ **KUWAZA**<br/>
> Kichujio cha **Mtumiaji** kinaonekana kwa wakidhi tu toleo la wavuti. Watumiaji wa kawaida hawataiona kichujio hiki, wala hakipatikani katika programu ya kompyuta.

<br/>

<a id="dashboard-tabs"></a>
### Vichupo vya ubao

- **Muhtasari** unapata maelezo ya jumla ya matumizi na gharama. Inajumuisha **Matumizi kwa muda** (idadi ya **maombi** iliyopigwa kwa siku kwa tafsiri, kuandika upya, na ubadilishaji) na **Matumizi kwa kifaa** (jumla ya **maombi kwa kila kifaa**, ikiwemo ubadilishaji).
- **Kwa Matumizi** inaweka shughuli kulingana na lugha ya tafsiri, hali ya kuandika upya, na maombi ya ubadilishaji.
- **Kwa Mitindo** inaonesha vipi kifaa ulichotumia na gharama zake.
- **Kwa Siku** inaonesha jumla za kila siku.
- **Maombi Yote** inaonesha historia kamili ya maombi na kukuruhusu kuipitisha.

<br/>

<a id="export-data"></a>
### Toa data

Vitabu vya ubao vinaweza kutoa data katika:

- **JSON**
- **CSV**
- **XLSX**

Hii ni muhimu ikiwa unataka kuchunguza shughuli nje ya programu au kushiriki ripoti.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Futa rekodi zilizohifadhiwa kwa ajili ya kifaa

Katika **Kwa Mitindo** au **Maombi Yote**, unaweza kuondoa rekodi zilizohifadhiwa kwa kifaa kwa kubonyeza kwenye ikoni ya "kisanduku cha taka".

> ⚠️ **ONSWA**<br/>
> Kufuta rekodi zilizohifadhiwa haziiwezekani kuzirudia. Tumia hii tu kama una uhakika kwamba hakuna hitaji tena kwa historia hiyo.

Ili kufuta data yote au kuondoa rekodi kulingana na umri wao, nenda kwenye [**Mipangilio** > **Ufuatiliaji wa Gharama**](#cost-tracking). Pale utapata chaguzi za kufuta data yote iliyohifadhiwa au tu data iliyopita tarehe fulani.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Historia

Bonyeza kwenye **Historia** ili uone historia ya vitendo vyako ndani ya **Transrewrt**, ikiwemo pembejeo na pato la kila shughuli.

![History page](../images/screenshots/sw/history.png)

<br/>

<a id="filter-the-history"></a>
### Chuja data

**Historia** hutumia vichujio vilevile ukurasa wa **Ubao**. Tumia kuchagua kipindi cha wakati.

![Dashboard filters](../images/screenshots/sw/dashboard-filter.png)

<br/>

> ℹ️ **KUWAZA**<br/>
> Kichujio cha **Mtumiaji** kinaonekana kwa wakidhi tu toleo la wavuti. Watumiaji wa kawaida hawataiona kichujio hiki, wala hakipatikani katika programu ya kompyuta.

<br/>

<a id="export-history-data"></a>
###  Toa data ya historia

Ukurasa wa historia unaweza kutoa data iliyochujwa katika:

- **JSON**
- **CSV**
- **XLSX**

Hii ni muhimu ikiwa unataka kuchunguza shughuli nje ya programu au kushiriki ripoti.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Mipangilio

Fungua **Mipangilio** kutoka kwenye upau wa upande ili kufanya mpangilio wa tabia ya programu.

Vidole vilivyo available vinategemea jukwaa na wajibu wako:

| Kichwa cha ukurasa | Kideskuti | Mtandao (msimamizi) | Mtandao (mtumiaji wa kawaida) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Mipangilio ya Ujumla  |   ndio   |     ndio     |        ndio         |
  | Mifano            |   ndio   |     ndio     |        ndio         |
  | Lugha         |   ndio   |     ndio     |        ndio         |
  | Ufuatiliaji wa Gharama     |   ndio   |     ndio     |         -          |
  | Maagizo ya ubadilishaji |   ndio   |     ndio     |        ndio         |
  | Watumiaji             |    -    |     ndio     |         -          |
  | Mipangilio ya API        |   ndio   |     ndio     |         -          |
  | Kuhusu             |   ndio   |     ndio     |        ndio         |

<br/>

> ℹ️ **KODHI**<br/>
> Katika toleo la wavuti, kila mtumiaji ana mipangilio yake mwenyewe. Mipangilio kama vile mifano iliyochaguliwa, lugha, chaguzi za ujumla, na maagizo ya ubadilishaji hutunzwa kwa kila mtumiaji. Mabadiliko unayoyafanya hayathiri watumiaji wengine.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Mipangilio ya ujumla

Tumia **Mipangilio ya Ujumla** kupima tabia ya kuandika, je, maelezo ya utekelezaji hutunzwa kwa **Historia**, na muonekano.

**Tabia**

- **Tabia kwa ENTER** huchagua ikiwa `Enter` itatekeleza kazi au itaingiza mstari mpya.
- **Tafsiri otomatiki kwa kubatika** huanza tafsiri mara tu unapobatika maandishi.
- **Nakili otomatiki matokeo kwenye ubao wa kunakili** huinakili matokeo yaliyofanikiwa kiotomatiki.
- **Tafsiri ya wakati halisi (wakati unapoweka)** hutafsiri wakati unapoweka.
- **Muda wa kusubiri (ms)** huweka muda wa kusubiri kwa tafsiri ya wakati halisi.

**Historia**

- **Hifadhi kumbukumbu za utekelezaji** hudhibiti ikiwa kila tafsiri, andika upya, na badilisha huhifadhi **maandishi ya pembejeo na pato** kwa mtazamo wa upande [**Historia**](#history). Kuiwasha inauliza uthibitisho; ukithibitisha, maandishi ya kumbukumbu yaliyohifadhiwa huondolewa kwenye hifadhidata.
- **Futa data ya kumbukumbu** hukuruhusu kuondoa maandishi yaliyohifadhiwa kwa umri (kwa mfana zamani zaidi ya miezi michache, au **data yote (wazi)**) kwa kutumia **Futa data**. Hiyo huathiri tu maandishi yaliyohifadhiwa ya utekelezaji kwa mtazamo wa **Historia**; haifuti **gharama** au jumla za matumizi. Ili kuondoa au kupunguza data ya **gharama**, tumia [**Mipangilio** > **Ufuatiliaji wa Gharama**](#cost-tracking).

**Muonekano**

- **Onyesha taarifa za gharama kwenye vitendo** hudhibiti onyesho la gharama kwa kila operesheni (ikiwa inapatikana) na gharama jumla kwenye paneli za pato za Tafsiri, Andika upya, na Badilisha.
- **Tarakimu za sehemu ya gharama** hubadilisha jinsi desimali za gharama zinaonyeshwa.
- **Wavuti pekee:** **onyesha eneo la kipimo karibu na programu** huongeza nafasi ya ziada karibu na kiolesura.
- **Familia ya Herufi** hubadilisha herufi ya kuandika kwenye paneli za maandishi.
- **Ukubwa** hubadilisha ukubwa wa herufi.

**Usimbaji wa Usanidi**

- **Jumuisha data ya matumizi kwenye usalama** - ikiwa imeamilishwa, ZIP pia ina historia ya utekelezaji na data ya maombi ya API. 
- **Sanidi Usimbaji** - inaunda ZIP moja (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` katika UTC kwa chaguomsingi) yenye `config.json`, `state.json`, ufunguo wa usimbaji wa si lazima, watumiaji, mapendeleo, maagizo ya desturi, na data ya matumizi ikiwa umekubali. Baada ya usimbaji wa mafanikio, uthibitisho unakusanya jina la faili iliyohifadhiwa.
- **Rudi kutoka kwenye usimbaji** - inafungua **mchanganyiko wa uthibitisho kwanza**. Chagua faili ya usimbaji ya ZIP ndani ya mchanganyiko (**Chunguza** / kibonyeza cha faili au drag-and-drop pale ambapo kimepatikana), kisha hakikisha chaguzi zifuatazo:
  - **Rejesha data ya matumizi** - ingiza data/historia kutoka kwenye ZIP wakati iliposimbuliwa pamoja na matumizi; usiiondoe ikiwa unataka tu mipangilio na maagizo.
  - **Futa data ya zamani kabla ya kurejesha** - ondoa matumizi/historia yasiyopatikana kwenye usanidi huu kabla ya kutumia usimbuaji (si lazima; tumia wakati unataka badiliko safi).

Usimbuaji uliotengenezwa kwenye tovuti au tovuti ya kompyuta inaweza kurudishwa kwenye jingine. Wakati wa kurudisha usimbuaji wa kompyuta kwenye tovuti, data itarudiwa kwa mtumiaji msimamizi.

<br/>

<a id="models"></a>
### Mifano

Tumia **Mipangilio** > **Mifano** kuchagua ambayo mifano itaonekana kwenye barua pepe.

![Settings Models tab](../images/screenshots/sw/settings-models.png)

Ukurasa una orodha mbili:

- **Vifaa Vinavyopatikana** upande wa kushoto  
- **Vifaa Vilivyotumika** upande wa kulia

Vidhibiti vinavyofaa ni pamoja na:

- **Tafuta vifaa...** ili kupata kifaa kwa jina  
- **Mtoa huduma** chips ili kupunguza orodha hadi injini moja (OpenRouter, OpenAI, Ollama, …)  
- **Bure Tu** kuonyesha mifano ya bure pekee  
- **Sasisha** ili kupakia orodha upya  
- **Panua Yote** na **Funga Yote** unapokuwa unachuja kwa mtoa huduma

Vitambulisho vya mifano vinajumuisha kiambishi cha mtoa huduma (kwa mfano `openrouter/…` dhidi ya `openai/…`). Alama kama **OpenAI (OpenRouter)** dhidi ya **OpenAI (moja kwa moja)** zinaonyesha jinsi trafiki inavyosambazwa.

> ℹ️ **KUMBUKUMBU**<br/>  
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) ni mfano wa router, si mfano wa mazungumzo ya jumla: jibu lake ni JSON linaloelezea maombi ya API ya OpenRouter (kwa mfano array ya `requests` yenye `model` na `messages`). Ikiwa utalitumia kwa **Tafsiri**, **Andika upya**, au **Badilisha**, paneli ya pato itaonyesha JSON hiyo badala ya maandiko yaliyokamilika. Chagua mfano wa maandiko ya kawaida kwa kazi hizo. Tazama [ukurasa wa mfano wa Body Builder](https://openrouter.ai/openrouter/bodybuilder) kwenye OpenRouter.

Vitendo:

- Ili kuongeza kifaa, bonyeza **Ongeza** au mahali popote katika kuingia.

- Ili kauondoa kifaa, bonyeza **X** karibu nao katika **Vifaa Vilivyotumika** au **Imetumia** kwenye kuingia katika Vifaa Vinavyopatikana.

- Ili usafishe orodha, bonyeza **Ondoa Yote**. Kifaa cha bure kinachotakiwa kitabaki katika orodha.

<br/>

> ℹ️ **MUHIMU**<br/>
> Ikiwa hutaki kuongeza mikopo kwa OpenRouter mara moja, anza kuziruhusu **Bure Tu** na kuchagua mifano ya bure (bosi la kadi ya mkopo haikotakiwa). Pia unaweza kutumia Ollama kupima mifano lokalini bila ufunguo wowote wa API.

<br/>

<a id="languages"></a>
### Lugha

Tumia **Mipangilio** > **Lugha** ili kuratibu orodha za lugha zilizotumika katika programu.

- **Lugha kuu** zinawekwa karibu juu ya orodha za lugha katika **Tafsiri** na **Badilisha**.
- **Lugha ya desturi** inaruhusu kuongeza lugha ambayo haiko kwenye orodha iliyotengenezwa awali.

Ikiwa umeweka lugha ya desturi, itaonekana kwenye kichagua cha lugha pamoja na chaguzi zilizotengenezwa awali.

<br/>

<a id="cost-tracking"></a>
### Ufuatiliaji wa Gharama

Tumia **Mipangilio** > **Ufuatiliaji wa Gharama** kudumisha habari za gharama.

- **Gharama Jumla** inaonyesha jumla ya kusonga.
- **Nakili Thamani** inanakili jumla kwenye ubao wa kunakili.
- **Weka upya Gharama** inaweka upya jumla iliyohifadhiwa kuwa sifuri.
- **Fumeni na matumizi ya ufunguo wa API** inaweka jumla iwe sawa na matumizi yanayotolewa na akaunti yako ya OpenRouter (OpenRouter tu).
- **Matumizi ya Ufunguo wa API** inaonyesha maelezo ya matumizi ya OpenRouter, ikiwa yanapatikana.
- **Futa data ya gharama** inaondoa data yote, au tu maingizo ya zamani kuliko tarehe iliyochaguliwa.

**Ufuatiliaji wa gharama:** Unapotumia mifano ya OpenRouter, programu inaonyesha matumizi yako halisi na matumizi yako kulingana na habari za gharama kutoka kwa OpenRouter. Kwa watoa wote wengine, programu inahesabu gharama kwa kutumia bei zilizotolewa na OpenRouter, ikiwa bei haiapatikani, hesabu inaweza kuwa sifuri.

<br/>

> ℹ️ **MUHIMU**<br/>
>  **Nambari zote za gharama ni mizani kwa ajili ya kurejelea tu, si katika kibali rasmi cha malipo.**

<br/>

> ⚠️ **ONDOA**<br/>
> Futa data haiwezi kurudishwa. Kabla ya kufuta, hakikisha umehifadhi data yako au umwiaga kwa [**Historia**](#history) 
> au [**Ubao** > **Maombi Yote**](#dashboard-tabs), kama hayo hayatofauti data itapotea milele. 
> Historia yote ya pembejeo/pato inayohusiana na kila maombi ya API pia itafutwa.

<br/>

<a id="transform-prompts"></a>
### Maagizo ya ubadilishaji

Tumia **Mipangilio** > **Maagizo ya ubadilishaji** kudumisha mandhari kwa wingi.

Unaweza:

- kagua mandhari yako yaliyohifadhiwa
- kufuta mandhari
- kuingiza mandhari kutoka kwenye faili
- toa mandhari kwa ajili ya usimamizi au kushiriki
- pakia mchuzi mfano kwenye orodha ya mandhari

<br/>

<a id="users"></a>
### Watumiaji

Tumia **Watumiaji** kusimamia akaunti za mtumiaji katika toleo la wavuti. Unaweza kuongeza watumiaji, kusasisha maelezo yao, kurekebisha nywila, na kufuta akaunti.

<br/>

<a id="api-config"></a>  
### Mipangilio ya API

Watoa huduma wanaoungwa mkono ni: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, na **Ollama** (mifano ya kijitihima kupitia URL ya msingi). Unahitaji tu kusanidi watoa huduma unayotumia.

**Programu ya wavuti: msimamizi pekee**

Mfunguo wa API unasanidiwa kupitia mfumo au mabadiliko ya mazingira ya Docker - hayataandikwa katika UI ya wavuti. Ukurasa huu unaonyesha ni watoa huduma gani wanafunguo zilizosanidiwa na unaruhusu kujaribu kila mmoja kwa kubofya kitufe cha **`Test`**.

<br/>

> ℹ️ **KUMBUKUMBU**<br/>
> Ili kubadilisha funguo ya API, sasisha mabadiliko ya mazingira katika mfumo wako au usanidi wa Docker na uanzishe tena seva au kontena.

> ℹ️ **KUMBUKUMBU**<br/>
> **Usimbaji wa Usanidi** (angalia [**Mipangilio ya Ujumla** → Usimbaji wa Usanidi](#general-settings)) unaweza kuingiza funguo za mtoa huduma **zilizotatuliwa** ndani ya ZIP’s `config.json`. Kurejesha ZIP hiyo **hakuna** nakala ya funguo hizo kurudi kwenye faili ya usanidi iliyohifadhiwa ya seva - funguo za moja kwa moja bado zinatoka kwenye mazingira na hali ya faili iliyopo kama ilivyoelezwa hapo.

<br/>

**Programu ya Desktop**

Tumia **Mipangilio ya API** kuhifadhi funguo za API kwa kila mtoa huduma unayemtumia. Kwa Ollama, ingiza **URL ya msingi** badala ya funguo ya API.

<br/>

> 💡 **Kidokezo** <br/>
> Ikiwa hutaki kutumia funguo ya API au kulipa kwa matumizi, unaweza [kupakua Ollama](https://ollama.com) na kuendesha mifano (kama `translategemma:4b`) kwenye mashine yako bure. Vinginevyo, unaweza kutengeneza akaunti ya bure ya OpenRouter (hakuna kadi ya mkopo inahitajika) ili kutumia mifano yao ya bure, au kupata funguo ya bure ya API kutoka Cerebras, Google, Groq, au Mistral AI.

<br/>

- Ongeza tu watoa huduma ambao unahitaji. Katika **Mipangilio** > **Mifano**, kitambulisho cha kila kifaa kinaanza na mtoa huduma (kwa mfano `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Ili uongeze ufunguo wa API, weka thamani katika kisanduku cha maandishi na bonyeza **`Save`**. Ili ubadilishe ufunguo uliopo, bonyeza **`Edit`**. Ili uthibitishie kuwa ufunguo unafanya kazi, bonyeza **`Test`**. Kwa URL ya msingi wa Ollama, bonyeza daima **`Test`** ili uangalie muunganisho.

<br/>

> ℹ️ **KUMBUKA**<br/>
> Huwezi kuona thamani ya sasa ya ufunguo wa API. Unaweza tu kubadilisha kwa kutumia kitufe cha **`Edit`**.
> Ufunguo wa API unahifadhiwa kama siri katika usanidi.

<br/>

<a id="about"></a>
### Kuhusu

Lipu ya **Kuhusu** inaonyesha:

- jina la programu
- nambari ya toleo
- tarehe ya uundaji
- kiungo cha depo ya mradi

<br/><br/>

<a id="common-issues"></a>
## Matatizo ya kawaida

Kama kitu chochote hakifanya kazi kama inavyotarajiwa, angalia kwanza pointi zifuatazo.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Programu haiwezi kufanya tafsiri, kuandika upya, au kubadilisha maandishi

Angalia kwamba:

- umekagua kifaa katika barua ya kizimizi
- kifaa kimoja angalau kimeorodheshwa katika [**Mipangilio** > **Mifano**](#models)
- mpangilio wako wa API unafanya kazi

Kama unatumia programu ya kompyuta:

1. Fungua [**Mipangilio** > **Mipangilio ya API**](#api-config).
2. Hakikisha kuwa ugaaji mmoja angalau umehifadhiwa.
3. Bonyeza **Jaribu** karibu na mtoa huduma ili uhakikie kuwa ugaaji unafanya kazi.

<br/>

<a id="the-model-list-is-empty"></a>
### Orodha ya mifano ni tupu

Fungua [**Mipangilio** > **Mifano**](#models) na bofya **Sasisha**.

Ikiwa inahitajika:

- tafuta kifaa
- washia **Bure Tu**
- ongeza kifaa kimoja au zaidi kwa **Vifaa Vilivyotumika**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Matokeo ni polepole sana au ya gharama kubwa

Jaribu moja au zaidi ya haya:

- chagua kifaa tofauti
- tumia pembejeo fupi
- zima **Tafsiri ya wakati halisi (wakati unapoweka)** katika [**Mipangilio** > **Mipangilio ya Ujumla**](#general-settings)
- tumia mifano ya bure kwa kazi rahisi (angalia [Mifano](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Kionyesho kiko kwa lugha ya mbaya

Bonyeza ikoni ya dunia kwenye [kisanduku cha vifaa](#toolbar) ukachague **Lugha ya kuingiza** yako inayopendelea.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Maandishi ni ndogo mno au vigumu kusoma

Fungua [**Mipangilio** > **Mipangilio ya Ujumla**](#general-settings) na ubadilishe:

- **Familia ya Fonti**
- **Ukubwa**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Michoro ya Ubao ni tupu

Hii ni kawaida ikiwa:

- unatumia tu **mifano ya bure** na unatazama takwimu za **gharama** (zinaweza kuwa sifuri); michoro ya idadi ya **maombi** ya matumizi kwenye **Muhtasari** bado inahitaji data kutoka kipindi kilichochaguliwa
- **chuja cha muda** kilichochaguliwa hakifuniki kipindi ambapo maombi yalifanywa - jaribu **Yote** kuangalia

Ikiwa michoro bado ni tupu baada ya kuchagua **Yote**, hakikisha kuwa maombi yanaonekana kwenye [**Historia**](#history) au kwenye kichupo cha **Maombi Yote**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Gharama inaonyesha "haipatikani" au inaonekana kuwa na makosa

Unapotumia mifano kupitia **OpenRouter**, programu inaonyesha matumizi yako halisi yanayotolewa na OpenRouter.

Kwa **watoa huduma wengine** (OpenAI moja kwa moja, Anthropic moja kwa moja, n.k.), gharama inazamiwa kutokana na data ya bei iliyochapishwa na OpenRouter. Ikiwa bei inayolingana haijapatikana kwa kifaa, gharama itaonekana kama **haipatikani** na hautajumuishwa katika jumla yako inayotokana.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Gharama jumla hailingani na bili yangu ya mtoa huduma

Nambari zote za gharama katika programu ni **mizani kwa ajili ya marejeleo tu**, si katika kauli rasmi za bili.

Ili kufanya jumla kuwa karibu zaidi na matumizi yako halisi ya OpenRouter, fungua [**Mipangilio** > **Ufuatiliaji wa Gharama**](#cost-tracking) na bofya **Fumeni na matumizi ya ufunguo wa API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Ukurasa wa Historia umekosekana kutoka kwenye upau wa upande

**Hifadhi kumbukumbu za utekelezaji** inaweza kuwa imezimwa. Fungua [**Mipangilio** > **Mipangilio ya Ujumla**](#general-settings) kuiwezesha. Kumbuka kwamba kuwasha haiwezi kurudisha data ya historia iliyofutwa awali.

<br/>

<a id="web-app-session-expired"></a>
### Programu ya wavuti: umemwagwa karibu ukurasa wa kuingia kwa usalama

Kikao chako kikaweza kumalizika. Ingia tena. Ikiwa hutokea mara kwa mara, angalia mpangilio wa seva kwa vitambulisho vya muda wa kikao.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Msimamizi wa wavuti: umesahau au umepoteza nenosiri

Hii inatumika kwa programu ya wavuti ya **kujitegemea** (Docker), si programu ya mezani (Electron).

- Ikiwa msimamizi mwingine bado anaweza kuingia, anaweza kufungua [**Mipangilio** > **Watumiaji**](#users), kuchagua akaunti, na kuweka **nenosiri jipya** pale.
- Ikiwa umekuwa **umefungwa nje** lakini una **ufikiaji wa shell** kwenye kifaa au chombo, weka upya nenosiri kwa kutumia msaidizi ambao unakamilika pamoja na picha (badilisha `transrewrt` ikiwa unabadilisha jina la chaguomsingi, na weka maandishi ya nenosiri kati ya alama za nukuu ikiwa ina nafasi au herufi za maalum):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Jina la msingi la mtumiaji wa msimamizi ni `admin` ikiwa haujamwumba watumiaji wengine. Unapowapa hoja moja tu, itazamiwa kama nenosiri jipya kwa `admin`.

Ikiwa unachimba kutoka kwa **kukagua chanzo** badala ya Docker, tumia:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Betri inasasisha rekodi ya mtumiaji kwenye hifadhidata ya SQLite (na inaweza kuunda mtumiaji `admin` ikiwa umekuwa umesahaulika). Baada ya kuweka upya, ingia kwa kutumia nenosiri jipya.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Ubao unawasilisha hakuna data kwa watumiaji wengine (web)

**Wakidhi** tu wanaweza kuangalia data kutoka kwa watumiaji wote kupitia kichujio cha **Mtumiaji**. Watumiaji wa kawaida wanaweza kuona shughuli zao pekee kama ilivyoratifiwa.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Nimabadilisha mandhari na kusahau mabadiliko

Unapowahi kuhariri mandhari, daima bonyeza **Hifadhi** kabla ya bonyeza **Rudi kwenye Run**.

<br/><br/>

<a id="quick-tips"></a>
## Vidokezo vya haraka

- Anza kwa [**Tafsiri**](#translate) ili uhakikishe kuwa mpangilio wako unafanya kazi kabla hujisugua kwenye [**Andika upya**](#rewrite) au [**Badilisha**](#transform).
- Tumia [**Andika upya**](#rewrite) kwa maboresho ya maneno ya kila siku.
- Tumia [**Badilisha**](#transform) unapohitaji mtiririko wa kazi unaopaswa kurudia kwa kazi fulani.
- Tumia [**Ubao**](#dashboard) ikiwa unataka kuangalia matumizi na gharama.
- Tumia [**Historia**](#history) kupitia kazi zilizopita na maandishi yake kamili ya pembejeo/maandishi ya pato.
- Toa mandhari kila wakati ikiwa unajenga maktaba ya mandhari ambayo unataka kuihifadhi salama (tazama [Maagizo ya ubadilishaji](#transform-prompts)) au ikiwa unataka kushiriki na wengine.

<br/><br/>

<a id="disclaimer"></a>
## Kukopa dhima

Majina ya bidhaa na ishara husidhimana na wamiliki wake na hutumika kwa kutambua tu. Programu hii haifananishi na chakula kimepokelewa na lolote la vipengele vilivyoleta.

<br/><br/>

<a id="license"></a>
## Leseni

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
