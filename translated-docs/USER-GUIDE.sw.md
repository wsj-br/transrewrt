---
translation_last_updated: '2026-05-27T22:12:03.121Z'
source_file_mtime: '2026-05-27T22:00:37.048Z'
source_file_hash: d579a314d0937a8c924a4bbd0739fe45cf76ee2cf38c17a17a3047c57951ef16
translation_language: sw
source_file_path: USER-GUIDE.md
translation_models:
  - qwen/qwen3-235b-a22b-2507
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Mwongozo wa Mtumiaji

<br/>

<a id="introduction"></a>
## Utangulizi

Transrewrt unakusaidia kufanya kazi na maandishi kwa njia tatu kuu:

- **Tafsiri** - badilisha maandishi kutoka lugha moja hadi nyingine.
- **Andika upya** - andika upya maandishi kwa mtindo tofauti, kama vile wazi zaidi, fupi zaidi, au rasmi zaidi.
- **Badilisha** - usimamizi wa maandishi kwa kutumia maelekezo maalum ya AI yanayoitwa manukuu.

Kwa chaguo-msingi, programu inatumia **Rahisi** namweo: unachagua **vitanzandiko** (kwa mfano Bure (OpenRouter), Kawaida, Ubinafsi, au Teknikali) na **mtoa huduma** katika Mipangilio, bila kuchagua ID za mfumo. Badilisha kwenda **Ubinafsi** katika [**Mipangilio** > **Mipangilio ya kawaida**](#general-settings) ikiwa unataka orodha ya kihistoria ya mifumo kutoka [**Mipangilio** > **Mifano**](#models).

<br/>

Mwongozo huu unaelezea jinsi ya kutumia programu baada ya kupakia na kuinua. Kwa maelekezo ya usanidi, tazama [**README**](README.sw.md) kuu.

<br/>

> ℹ️ **KUMBUKA**<br/>
> Transrewrt inapatikana kama programu ya kompyuta kwa Windows na Linux, pia kama programu ya wavuti inayohifadhiwa na mtumiaji mwenyewe. Mwongozo huu unazingatia matumizi ya kila siku ya programu. Lengo la kila kitu kinachotumika kwa toleo moja tu, limealikwa wazi.

<small>**Soma kwa lugha nyingine:** </small>
<small id="lang-list">[English (GB)](../USER-GUIDE.md) · [Português (Brasil)](./USER-GUIDE.pt-BR.md) · [العربية](./USER-GUIDE.ar.md) · [বাংলা](./USER-GUIDE.bn.md) · [Català](./USER-GUIDE.ca.md) · [中文 (中国大陆)](./USER-GUIDE.zh-CN.md) · [中文 (台灣)](./USER-GUIDE.zh-TW.md) · [Hrvatski](./USER-GUIDE.hr.md) · [Čeština](./USER-GUIDE.cs.md) · [Nederlands](./USER-GUIDE.nl.md) · [English (US)](./USER-GUIDE.en-US.md) · [Tagalog](./USER-GUIDE.tl.md) · [Français](./USER-GUIDE.fr.md) · [Deutsch](./USER-GUIDE.de.md) · [Ελληνικά](./USER-GUIDE.el.md) · [हिन्दी](./USER-GUIDE.hi.md) · [Magyar](./USER-GUIDE.hu.md) · [Italiano](./USER-GUIDE.it.md) · [日本語](./USER-GUIDE.ja.md) · [한국어](./USER-GUIDE.ko.md) · [Bahasa Melayu](./USER-GUIDE.ms.md) · [فارسی](./USER-GUIDE.fa.md) · [Polski](./USER-GUIDE.pl.md) · [Basa Jawa](./USER-GUIDE.jv.md) · [Português](./USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](./USER-GUIDE.pa.md) · [Română](./USER-GUIDE.ro.md) · [Русский](./USER-GUIDE.ru.md) · [Slovenčina](./USER-GUIDE.sk.md) · [Español](./USER-GUIDE.es.md) · [Kiswahili](./USER-GUIDE.sw.md) · [Svenska](./USER-GUIDE.sv.md) · [తెలుగు](./USER-GUIDE.te.md) · [ไทย](./USER-GUIDE.th.md) · [Türkçe](./USER-GUIDE.tr.md) · [Українська](./USER-GUIDE.uk.md) · [Tiếng Việt](./USER-GUIDE.vi.md)</small>

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
- [Anza kufanya kazi](#getting-started)
- [Sehemu kuu za dirisha](#main-parts-of-the-window)
  - [Upau wa upande](#sidebar)
  - [Barua ya zana](#toolbar)
  - [Sehemu za kuingiza na pato](#input-and-output-panels)
- [Tafsiri](#translate)
  - [Tafsiri maandishi](#translate-text)
  - [Uchaguzi wa lugha](#language-selection)
  - [Mipangilio muhimu ya tafsiri](#helpful-translation-settings)
- [Andika upya](#rewrite)
- [Badilisha](#transform)
  - [Imba maagizo yaliyopo](#run-an-existing-prompt)
  - [Kama bado huna maagizo](#if-you-have-no-prompts-yet)
  - [Tengeneza maagizo haraka](#create-a-prompt-quickly)
  - [Hariri maagizo](#edit-a-prompt)
  - [Jaribu maagizo kabla ya kutumia](#test-a-prompt-before-using-it)
- [Dashibodi](#dashboard)
  - [Chuja data](#filter-the-data)
  - [Vidole vya dashibodi](#dashboard-tabs)
  - [Tuma data nje](#export-data)
  - [Futa rekodi zilizohifadhiwa kwa ajili ya mfumo](#delete-stored-records-for-a-model)
- [Historia](#history)
  - [Chuja historia](#filter-the-history)
  - [Tuma data ya historia nje](#export-history-data)
- [Mipangilio](#settings)
  - [Mipangilio ya kawaida](#general-settings)
  - [Mifano](#models)
  - [Lugha](#languages)
  - [Ufuatiliaji wa gharama](#cost-tracking)
  - [Badilisha (tabu ya mipangilio)](#transform-settings-tab)
  - [Watumiaji](#users)
  - [Mipangilio ya API](#api-config)
  - [Kuhusu](#about)
- [Matatizo ya kawaida](#common-issues)
  - [Programu haiwezi kutafsiri, kuandika upya, au kubadilisha maandishi](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Orodha ya mifano ni tupu](#the-model-list-is-empty)
  - [Matokeo ni ya polepole au ghali sana](#the-result-is-too-slow-or-too-expensive)
  - [Ukurasa umewekwa kwa lugha mbaya](#the-interface-is-in-the-wrong-language)
  - [Maandishi ni ndogo sana au vigumu kusoma](#the-text-is-too-small-or-hard-to-read)
  - [Muhtasari wa dashibodi unaonekana tupu](#dashboard-summary-looks-empty)
  - [Gharama inaonyesha "haiapatikani" au inaonekana si sahihi](#cost-shows-not-available-or-seems-wrong)
  - [Jumla ya gharama haifanani na bili yangu ya mtoa huduma](#total-cost-does-not-match-my-provider-bill)
  - [Ukurasa wa Historia umepotea kutoka upau wa upande](#the-history-page-is-missing-from-the-sidebar)
  - [Programu ya wavuti: umebwakiwa kurudi ukurasa wa kuingia kwa usahihi](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Msimamizi wa wavuti: umesahau au umepoteza nenosiri](#web-admin-forgot-or-lost-a-password)
  - [Dashibodi haionyesi data kwa watumiaji wengine (wavuti)](#dashboard-shows-no-data-for-other-users-web)
  - [Nimebadilisha maagizo na kusahau mabadiliko](#i-changed-a-prompt-and-lost-the-edits)
- [Vidokezo haraka](#quick-tips)
- [Kujitolewa](#disclaimer)
- [Leseni](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Kabla ya kuanza

Ili kutumia Transrewrt, unahitaji ufikiaji kwa mtoa huduma yoyote moja ya AI. Matoa wa kusaidiwa ni: [OpenRouter](https://openrouter.ai) (ambayo inakusanya mifano mingi), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, na [Ollama](https://ollama.com) kwa mifano ya wahali.

Hauhitaji kuchagua mfumo wa malipo ili kuanza. Mara tu unapoweka ujuzi wako wa OpenRouter API, programu hutoa chaguo cha **bure** cha OpenRouter kiotomatiki. Hii inakuruhusu kuanza kufanya tafsiri, kuandika upya, na kubadilisha maandishi mara moja. Kama mbadala, unaweza pia kupata ujuzi wa API wa bure kutoka Cerebras, Google, Groq, au Mistral AI.

Kwa maneno rahisi:

- Katika njia ya **Rahisi**, **vitanzandiko** (Bure (OpenRouter), Kikweli, Ubinafsi, au Teknolojia) inahusishwa na mfumo kwa **mtoa huduma** ulichochagua (OpenRouter, OpenAI, Ollama, na wengine). Tu vitanzandiko ambavyo vina uhusiano na mtoa huduma wa sasa vinavyotazamia kwenye barua za kizazi. Unachagua vitanzandiko kwenye Tafsiri, Andika upya, na Badilisha.
- Katika njia ya **Ubinafsi**, **mfumo** ni injini ya AI unayochagua moja kwa moja. Kitambulisho cha mfumo kina **ufupisho wa mtoa huduma** (kama mfano `openrouter/…`, `openai/…`, `ollama/…`).
- **Ufunguo wa API** (au, kwa ajili ya Ollama, **URL ya msingi**) ni njia ambavyo programu inapata mtoa huduma huyo.

Ikiwa unatumia **programu ya mezani**, ongeza funguo katika [**Mipangilio** > **Mipangilio ya API**](#api-config) kwa kila mtoa huduma unayotumia. Kwa matumizi ya OpenRouter pekee, tazama [Jinsi ya kupata funguo la API la OpenRouter bila malipo](#how-to-get-a-free-openrouter-api-key-desktop-app) chini. Ikiwa hutaki kutumia funguo la API, unaweza kusakinisha Ollama (kutoka [ollama.com](https://ollama.com)) na kutumia mifano ya wahali badala, kama vile `translategemma:4b`.

Ikiwa unatumia **toleo la wavuti**, mwenye server anawezesha matoa huduma kwa kutumia vigezo vya mazingira, kwa hivyo huwezi kuingiza ujuzi wa API moja kwa moja katika programu.

<br/>

<a id="how-to-get-a-free-openrouter-api-key-desktop-app"></a>
### Jinsi ya kupata funguo la API la OpenRouter bila malipo (programu ya mezani)

Ikiwa unatumia programu ya kompyuta, fuata hatua hizi:

1. Nenda kwa [OpenRouter](https://openrouter.ai) kwenye kivinjari chako cha wavuti.
2. Unda akaunti au ingia.
3. Fungua ukurasa wa [Ujuzi](https://openrouter.ai/keys).
4. Bonyeza kitufe cha kuunda ujuzi mpya wa API.
5. Toa jina kwa ujuzi ili uweze kumtambua baadaye.
6. Nakili ujuzi mpya wa API.
7. Rudi kwenye Transrewrt na fungua **Mipangilio** > **Mipangilio ya API**.
8. Bandika ujuzi kwenye **Ujuzi wa OpenRouter API** (chini ya **Mipangilio** > **Mipangilio ya API**).
9. Bonyeza **Jaribu ujuzi wa OpenRouter** kuhakikisha unafanya kazi.

<br/><br/>

<a id="getting-started"></a>
## Anza kazi

Ikiwa ni mara ya kwanza unayotumia Transrewrt, fuata mpangilio huu:

1. Fungua programu.
2. Chagua **Lugha ya kuingiza** kwenye ikoni ya dunia ikiwa inahitajika.
3. Ikiwa umepokea **programu ya kompyuta**, fungua [**Mipangilio** > **Mipangilio ya API**](#api-config), ongeza funguo la API kwa angalau mtoa huduma mmoja (kama vile OpenRouter), na bofya **Jaribu** kuthibitisha linafanya kazi.
4. Fungua [**Mipangilio** > **Mipangilio ya kawaida**](#general-settings). Katika namweo ya **Rahisi** (chaguomsingi), chagua **Mtoa huduma** ambao amepewa funguo. Katika namweo ya **Ubinafsi**, fungua [**Mipangilio** > **Mifano**](#models) na ongeza mfumo au zaidi kwenye **Mifumo Iliyochaguliwa**.
5. Katika **Tafsiri**, chagua **vitanzandiko** (Rahisi) au **mfumo** (Ubinafsi) kwenye barua za kushirikiana.
6. Fungua [**Mipangilio** > **Lugha**](#languages) na chagua **Lugha zako zilizopendwa** ikiwa unataka kuwa zile zinazotumika mara kwa mara zionekane kwanza.
7. Fanya tafsiri rahisi ili kuthibitisha kila kitu kinavyofanya kazi, kisha jaribu **Andika upya** na **Badilisha**.

Mpangilio huu una maana. Unauzuia tatizo la kawaida la matumizi ya kwanza: kujaribu kutekeleza kazi kabla programu iko na muunganisho wa API unaofanya kazi au vitanzandiko/mfumo umechaguliwa.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Sehemu kuu za dirisha

Programu imegawanywa katika sehemu tatu kuu:

- **Orodha ya upande** upande wa kushoto.
- **Barua pepe ya juu** juu.
- **Eneo la kazi** katikati.

<br/>

<a id="sidebar"></a>
### Upau wa Kando

Tumia upau wa kando ili kuhamia kati ya programu. Unaweza kuficha upau wa kando kwa ajili ya nafasi zaidi kwa kubonyeza ikoni karibu na nembo ya programu.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/sw/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Tafsiri</strong> hufungua eneo la kazi la tafsiri.</li><br/>
        <li><strong>Andika upya</strong> hufungua eneo la kazi la kuandika upya.</li><br/>
        <li><strong>Badilisha</strong> hufungua eneo la kazi ya maagizo maalum.</li><br/>
        <li><strong>Dashibodi</strong> inaonesha taarifa za matumizi na gharama.</li><br/>
        <li><strong>Mipangilio</strong> hufungua ubao wa mipangilio.</li><br/>
        <li><strong>Historia</strong> inaonesha historia ya matumizi pamoja na maandishi ya kuingiza na pato</li><br/>
        <li><strong>Mtumiaji</strong> inaonesha jina la mtumiaji ambaye amewasilishwa (kwa wavuti tu).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Barua za Zana

Barua za zana zinabadilika kidogo kulingana na unapokuwa ndani ya programu.

- Upande wa kushoto, inaonyesha jina la ukurasa wa sasa.
- Upande wa kulia, inaonyesha kichagua **vitanzandiko au mfumo** na kitendaji cha **Lugha ya kuingiza**.

Katika namweo la **Rahisi**, barua pepe inaonyesha kichagua cha **vitanzandiko** kinachojumuisha vitanzandiko vilivyowekwa **Bure (OpenRouter)**, **Kawaida**, **Ubinafsi**, na **Teknikali**. Vitanzandiko vinavyotazamika vinategemea **Mtoa huduma** uliochaguliwa katika [**Mipangilio** > **Mipangilio ya kawaida**](#general-settings)—kwa mfano, **Bure (OpenRouter)** inatazamika tu ikiwa mtoa huduma ni OpenRouter. Ikiwa **Mtoa huduma** ni **Ollama**, barua pepe inaonyesha mifumo uliyowekwa wahali badala ya vitanzandiko.

Katika namweo la **Ubinafsi**, **kudhibiti cha mfumo** kukuwezesha kuchagua injini gani ya AI utakayotumia kwa kazi ya sasa.

![Model selector](../images/screenshots/sw/preset-selector.png)

Katika namweo ya Ubinafsi, mifumo fulani isiyo ya malipo inaweza isipatikana mara kwa mara—inaweza kuwa imesimama au imefikia kikomo cha matumizi. Programu inaweza kuondoa mfumo huo kutoka kwenye orodha yako kiotomatiki. Ili udhibiti mifumo yanayotazamika, nenda kwenye [**Mipangilio** > **Mifano**](#models). Unaweza kufungua mipangilio ya mfumo kutoka kwenye ikoni ya mtoa huduma upande wa kushoto wa jina la mfumo kwenye barua ya zana.

<br/>

Ikoni ya **dunduma + msimbo wa lugha** inabadilisha lugha ya kuingiza ya programu, kama vile menyu na vitufe. Hai**badilishi** lugha za tafsiri zinazotumika katika **Tafsiri**.

![Interface language selector](../images/screenshots/sw/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Vipande vya kuingiza na pato

Sehemu kubwa ya maeneo ya kazi hutumia **Kuingiza** kwenye upande wa kushoto na **Pato** kwenye upande wa kulia.

Kila kipande pia kinaonesha:

| **Kuingiza**                                                          | **Pato**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Hesabu ya herufi <br/>- Hesabu ya maneno <br/>- Hesabu ya mstari <br/> | - Muda uliotumika kufanya kazi<br/>- **TPS** (vichwa kwa sekunde)<br/>- Hesabu za herufi, maneno, na mistari<br/>- Mfumo uliotumika |

Ikiwa unaulizwa kuhusu maneno ya kiufundi:

- **Vichwa** inamaanisha kipande kidogo cha maandishi. Unaweza kufikiria kama sehemu ya neno au neno fupi.
- **TPS** inamaanisha idadi ya vipande vya maandishi ambavyo mfumo umewasilimia kwa kila sekunde.

<br/>

Unaweza pia kufuatilia gharama ya kila kitendo (ikiwa inapatikana) na jumla ya gharama, kwa kuwasha chaguo `Show cost information on the actions` kwenye [**Mipangilio** > **Mipangilio ya kawaida**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Tafsiri

Tumia **Tafsiri** unapotaka kubadilisha maandishi kutoka kwa lugha moja hadi nyingine.

![Translate workspace](../images/screenshots/sw/translate.png)

<br/>

<a id="translate-text"></a>
### Tafsiri maandishi

1. Fungua **Tafsiri**.
2. Chagua lugha katika **Kutoka**.
3. Chagua lugha katika **Kwenda**.
4. Chagua vitanzandiko (Rahisi) au mfumo (Ubinafsi) kwenye barua za kushirikiana.
5. Weka maandishi kwenye **Kuingiza** au bandika.
6. Bonyeza **Tafsiri**.
7. Soma matokeo kwenye **Pato**.
8. Tumia kitufe cha kunakili ikiwa unataka kunakili matokeo.

<br/>

<a id="language-selection"></a>
### Uchaguzi wa lugha

- **Kutoka** inaweza kuwa lugha fulani au **Sajiri Lugha**.
- **Kwenda** ni lugha unayotaka matokeo yakuwe mahali pana.

Lugha zako zilizo **Imechaguliwa** zinarudi juu ya orodha. Unaweza zifafanua katika [**Mipangilio** > **Lugha**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Mipangilio muhimu ya tafsiri

Katika [**Mipangilio** > **Mipangilio ya kawaida**](#general-settings), unaweza badilisha namna tafsiri inavyofanya kazi:

- **Tafsiri moja kwa moja baada ya kunakili** inatumia tafsiri mara tu unapotumia maandishi.
- **Nakili moja kwa moja matokeo kwenye ubao wa kunakili** inanakili matokeo moja kwa moja baada ya kufanikisha tafsiri.
- **Tafsiri ya wakati wowote (wakati wa kuandika)** inatumia tafsiri wakati unapoandika.
- **Wakati uliochukua (ms)** unadhibiti muda ambao programu inasubiri kabla ya kutekeleza tafsiri ya wakati wowote.
- **Tabia kwa ENTER** inadhibiti kinachotokea unapobonyeza `Enter`:
  - **Enter** inatumia tafsiri au andika upya (chaguo-msingi).
  - **Shift + Enter** inatumia tafsiri au andika upya; **Enter** pekee inaweka mstari mpya.

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Andika upya

Tumia **Andika upya** unapotaka kuboresha maneno bila kubadilisha maana kuu.

![Rewrite workspace](../images/screenshots/sw/rewrite.png)

Hii ni muhimu kwa:

- kusahihisha silabi na sarufi (**Angalia Silabi na Sarufi**)
- kufanya maandishi iwe wazi zaidi (**Boresha Uwazi**)
- mabadiliko tofauti mengi kwa mara moja (**Toleo mbadala**)
- kufanya maandishi iwe rasmi zaidi au si rasmi zaidi (**Fanya Rasmi** / **Fanya Si Rasmi**)
- kufupisha au kuzidisha maandishi (**Fupisha** / **Panua**)
- kufanya maandishi iseme kama ni kitekniki zaidi (**Fanya Kitekniki**)

<br/>

> 💡 **SUGGESTIONI**<br/>
> Unapotumia njia ya "**Angalia Silabi na Sarufi**", kivinjari cha **Onyesha mabadiliko** kinaonekana kwenye panel ya pato (karibu na **Nakili**).
> Weka juu au chini ili kuonesha au kuficha usahihisho uliofanyika kwenye maandishi yako.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Badilisha

Tumia **Badilisha** unapotaka AI kufuata maelekezo maalum.

![Transform workspace](../images/screenshots/sw/transform.png)

Hii ni sehemu yenye uwezo mkubwa zaidi ya programu. Unaweza kutumia kwa kazi kama vile:

- kufupisha maelezo
- kubadilisha maandishi ya kawaida kuwa barua pepe iliyosahihishwa
- kutoa pointi muhimu
- kubadilisha maandishi kwenye muundo fulani
- shughuli yoyote nyingine maalum na maandishi ya kuingiza

<br/>

<a id="run-an-existing-prompt"></a>
### Tekeleza maagizo uliyo yana

1. Fungua **Badilisha**.
2. Chagua maagizo kutoka kwenye orodha ya maagizo.
3. Ikiwa kisanduku cha **Lengo** la lugha kinavyotazamika, chagua lugha ikiwa unataka.
4. Andika au bandika maandishi kwenye **Kuingiza**.
5. Bonyeza **Badilisha**.
6. Soma matokeo kwenye **Pato**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Kama bado huna maagizo

Ikiwa orodha yako ya maagizo ni tupu, bofya **Pakia maagizo ya mfano** kwenye eneo la kazi la Badilisha. Kudhibiti huko kiko mara kwa mara katika [**Mipangilio** > **Badilisha**](#transform-settings) kwenye safu ya upelelezi/upelelezi. Vyote viwili vinaweka mifano iliyotengenezwa ili uanze haraka.

<br/>

> ℹ️ **KUMBUKA**<br/>
> Maagizo ya mfano hutolewa kwa Kiingereza. Baada ya kupakia, unaweza kuhariri maagizo na kutumia **Tafsiri maagizo** kutafsiri kwa lugha yako.

<br/>

<a id="create-a-prompt-quickly"></a>
### Tengeneza maagizo haraka

Njia ya haraka ya kutengeneza maagizo ni:

1. Bonyeza **Maagizo mapya**.
2. Bonyeza **Zalisha maagizo**.
3. Eleza unachotaka maagizo yaweke kufanya.
4. Chagua vitanzandiko (Rahisi) au mfumo (Ubinafsi).
5. Weka programu iundae rasimu kwako.
6. Soma rasimu na bonyeza **Hifadhi**.

![Generate prompt](../images/screenshots/sw/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Hariri maagizo

Unapotengeneza au kuhariri maagizo, kihariri kinaonekana upande wa kushoto na eneo la kujaribu kinaonekana upande wa kulia.

![Transform prompt editor](../images/screenshots/sw/transform-prompt-edit.png)

Sehemu kuu ni:

- **Jina la maagizo**: jina linaloonekana kwenye orodha ya maagizo.
- **Maelekezo ya maagizo (si muhimu)**: maelekezo mafupi yanayooneshwa kwa mtumiaji wakati wa kuendesha maagizo.
- **Jukumu la mfumo**: jukumu jumla uliopewa kwa AI, kama vile 'Wewe ni msaada mwema.'
- **Maelekezo ya mfumo (moja kwa mstari)**: sheria maalum unayotaka AI kuzifuate.
- **Maelezo ya pato**: neno fupi unaoelezea matokeo, kama vile 'muhtasari' au 'andika upya'.
- **Joto (0.0 → 1.0)**: namna ambavyo mfumo utashughulika; angalia chini.
- **Waulize kuhusu lugha ya lengo**: inaongeza kichagua cha lugha ya lengo wakati maagizo yanapokimbia.

Ikiwa terminologia ya kiufundi **Joto** ni mpya kwako, fikiria kama ifuatavyo:

- **Joto** dogo linatoa matokeo ya thabiti zaidi, yanayotabiriwa kwa urahisi.
- **Joto** kubwa linatoa ubunifu na tofauti zaidi.

Unaweza pia kutumia:

- `Generate prompt` kutengeneza rasimu mpya kutoka kwa maelezo rahisi
- `Improve prompt` kuboresha maagizo yaliyopo
- `Translate prompt` kutafsiri sehemu za maagizo

<br/>

> ⚠️ **ONYO**<br/>
> Bonyeza `Save` kabla ya kubonyeza `Back to Run`. Ikiwa utorudi bila kuhifadhi, mabadiliko yako yatapotea.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Jaribu maagizo kabla ya kutumia

Paneli ya jaribio kulia inaruhusu kujaribu maagizo yako kwa maandishi ya sampuli kabla ya kutumia katika kazi ya kila siku.

Hii ni muhimu wakati:

- unapounda maagizo mapya
- unakilinganisha toleo mbili za maagizo
- unataka kuchagua tone, urefu, au muundo wa pato

<br/>

> ℹ️ **MUHIMU**<br/>
> Unaweza kutoa na kuleta maagizo uliyohifadhiwa katika [**Mipangilio** > **Badilisha**](#transform-settings).

Unapoitumia **Zalisha maagizo**, **Sahihisha maagizo**, au **Tafsiri maagizo** katika kihariri cha maagizo, namweo la **Rahisi** linatoa kichagua vitanzandiko kama kinachotolewa katika Tafsiri na Andika upya; namweo la **Ubinafsi** linatumia orodha ya mifano.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Dashibodi

Tumia **Dashibodi** kuona kiasi cha kutumia programu na gharama zake (kwa mifano ya malipo).

![Dashboard summary](../images/screenshots/sw/dashboard-summary.png)

<br/>

> ℹ️ **KODI**<br/>
> Ikiwa hutumia tu mifumo **bure**, kiasi cha **gharama** kinaenda kuwa sifuri na vipengele vya utendaji vinavyoelekezwa kwenye gharama vinaweza kuonekana tupu. Lengo la **Muhtasari** bado linawasilishwa kwa idadi ya vito kwa tafsiri, kuandika upya, na kubadilisha ikiwa kuna shughuli kwenye kipindi kilichochaguliwa.

<br/>

<a id="filter-the-data"></a>
### Chuja data

Tumia vitufe vya kuchuja juu ili ubadilishe kipindi cha wakati.

![Dashboard filters](../images/screenshots/sw/dashboard-filter.png)

<br/>

> ℹ️ **KUMBUKA**<br/>
> Chujua cha **Mtumiaji** kinawezekana tu kuonekana na wale wanaowasilishi kwa tovuti. Watumiaji wa kawaida hawataiona chujuzi hiki, wala hakikupatikana katika programu ya kompyuta.

<br/>

<a id="dashboard-tabs"></a>
### Vichupo vya dashibodi

- **Muhtasari** unawasilisha kadi za vipengele vya utendaji: jumla ya gharama, mifumo iliyotumika, idadi ya vito kwa kila njia na gharama (pamoja na asilimia ya jumla ya vito), wastani wa gharama kwa kila kito, wastani wa TPS, na mifumo mitatu ya kwanza kwa idadi ya vito.
- **Kwa mfano** unoripoti kila mfumo kwa jumla ya vito, jumla ya gharama, na wastani wa TPS; panua safu ili kupata kigawo kwa tafsiri, kuandika upya, na kubadilisha.
- **Wito wote** unawasilishwa kikumbukumbu cha vito vyote (kwa kurasa kwenye mazingira ya upana, kwa kadi kwenye skrini za upana mdogo) na kukuruhusu kutoa.

<br/>

<a id="export-data"></a>
### Toa data

Vitabu vya dashibodi vinaweza kutolewa kama:

- **JSON**
- **CSV**
- **XLSX**

Hii ni muhimu ikiwa unataka kuchunguza shughuli nje ya programu au kushiriki ripoti.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Futa rekodi zilizohifadhiwa kwa mfano

Katika **Kwa Mfano** au **Wito Wote**, unaweza kutoa rekodi zilizohifadhiwa kwa mfano kwa kubonyeza kwenye ikoni ya "kisanduku cha taka".

> ⚠️ **ONDOA**<br/>
> Kufuta rekodi zilizohifadhiwa haipaswi kurudishwa. Tumia hii tu ikiwa una uhakika kwamba hakuna hitaji tena kwa historia hiyo.

Ili kufuta data yote au kauya rekodi kulingana na umri wao, nenda kwenye [**Mipangilio** > **Ufuatiliaji wa Gharama**](#cost-tracking). Pale utapata chaguo la kufuta data yote iliyohifadhiwa au tu data iliyopita tarehe fulani.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Historia

Bonyeza kwenye **Historia** ili uone rekodi ya vitendo vyako ndani ya **Transrewrt**, ikiwa ni pamoja na kuingiza na pato la kila shughuli.

![History page](../images/screenshots/sw/history.png)

<br/>

<a id="filter-the-history"></a>
### Chuja historia

**Historia** hutumia vichujio vya muda sawa kama ukurasa wa **Dashibodi**.

![Dashboard filters](../images/screenshots/sw/dashboard-filter.png)

<br/>

> ℹ️ **KODI**<br/>
> Katika **programu ya wavuti**, kila mtu (pamoja na wale wenye mamlaka) anaweza kuona tu historia yake ya utekelezaji. Kichuja cha **Mtumiaji** kwenye **Dashibodi** kimeundwa kwa wale wenye mamlaka ili kuchambua matumizi na gharama kwa akaunti zote; hakitumike kwenye **Historia**.

<br/>

<a id="export-history-data"></a>
### Pato la data ya historia

Ukurasa wa historia unaweza kutolewa data iliyochujwa kwa:

- **JSON**
- **CSV**
- **XLSX**

Hii ni muhimu ikiwa unataka kuchunguza shughuli nje ya programu au kushiriki ripoti.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Mipangilio

Fungua **Mipangilio** kutoka kwenye upau wa upande ili kubadilisha namna programu inavyofanya kazi.

Vidole vilivyonapatikana vinategemea jukwaa na jukumu lako:

| Kichupo            | Kompyuta | Wavuti (msimamizi) | Wavuti (mtumiaji wa kawaida) | Maelezo                                        |
  |------------------|:-------:|:-----------:|:------------------:|----------------------------------------------|
  | Mipangilio ya Kawaida |   ndio   |     ndio     |        ndio         | Inajumuisha **Uzoefu wa AI** (Rahisi / Ubinafsi) |
  | Mifano           |   ndio   |     ndio     |        ndio         | Tu wakati **Uzoefu wa AI** ni **Ubinafsi** |
  | Lugha            |   ndio   |     ndio     |        ndio         |                                              |
  | Ufuatiliaji wa Gharama    |   ndio   |     ndio     |         -          |                                              |
  | Badilisha        |   ndio   |     ndio     |        ndio         | Kuingiza/kutoa kwa wingi kwa maagizo ya ubadilishaji      |
  | Watumiaji        |    -    |     ndio     |         -          |                                              |
  | Mipangilio ya API       |   ndio   |     ndio     |         -          |                                              |
  | Kuhusu            |   ndio   |     ndio     |        ndio         |                                              |

Katika namweo la **Rahisi**, uteuzi wa mfumo unafanyika kupitia vitanzandiko kwenye barua pepe na **Mtoa huduma** katika Mipangilio ya Kawaida; lebo ya **Mifano** imefichwa.

<br/>

> ℹ️ **TANGAZO**<br/>
> Katika toleo la wavuti, kila mtumiaji ana mpangilio wake. Mipangilio kama vile uzoefu wa AI, mtoa huduma, mifumo au vitanzandiko vilivyochaguliwa, lugha, chaguo za kawaida, na maagizo ya ubadilishaji yanahifadhiwa kwa kila mtumiaji. Mabadiliko unayofanya hayathiri watumiaji wengine.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Mipangilio ya kawaida

Tumia **Mipangilio ya Kawaida** kupitia tabia ya kuandika, kama taarifa za utekelezaji zinahifadhiwa kwa ajili ya **Historia**, muonekano, na jinsi unavyochagua AI kwa Tafsiri, Andika upya, na Badilisha.

**Uzoefu wa AI**

- **Rahisi** (chaguo-msingi): chagua **Mtoa huduma** (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, au Ollama). Watoa huduma wa mawingu wanatumia vitanzandiko vilivyowekwa kwenye barua pepe. **Ollama** inaonyesha mifumo iliyosakinishwa kwenye kifaa chako badala ya vitanzandiko. Katika namweo la Rahisi, **Orodha ya vitanzandiko** inaonyesha toleo la orodha na wakati wa sasisho la mwisho; bofya **Sasisha orodha ya vitanzandiko** kupokea orodha ya hivi karibuni ya vitanzandiko kutoka kwenye hazina ya mradi (programu pia inachunguza kwa muda wa muda wa nyuma). 
- **Ubinafsi**: chagua mifumo moja kwa moja kwenye barua pepe; usimamie orodha chini ya [**Mipangilio** > **Mifano**](#models).

Katika **programu ya wavuti**, matoa yanayotazamika yanategemea bango la API zilizowekwa katika mazingira ya seva. Katika **programu ya kompyuta**, weka bango kwenye [**Mipangilio ya API**](#api-config).

**Tabia**

- **Tabia kwa ENTER** chagua kama `Enter` inatumia kazi au inaweka mstari mpya.
- **Tafsiri moja kwa moja baada ya kunakili** inanashia tafsiri mara tuunakili maandishi.
- **Nakili moja kwa moja matokeo kwenye ubao wa kunakili** inanakili matokeo yanayofanikiwa moja kwa moja.
- **Tafsiri ya wakati wa kweli (wakati wa kuandika)** inatafsiri wakati unapoandika.
- **Wakati usio (ms)** hufafanua muda wa kusubiri kwa ajili ya tafsiri ya wakati wa kweli.

**Historia**

- **Hifadhi historia ya utekelezaji** inaendeleza kama kila tafsiri, andika upya, na ubadilishaji unahifadhi **maandishi ya kuingiza na pato** kwa ajili ya onyesho la upande wa upande wa [**Historia**](#history). Kuzima kinauliza kuthibitisha; kama utathibitisha, data ya historia iliyohifadhiwa itafutwa kutoka kwenye hifadhidata. Kama lebo inaonyesha *imezimwa na msimamizi*, kiolesura chako kina `HISTORY_DISABLED` kilichowekwa mazingira (tazama [README](README.sw.md#configuration-and-environment)); huwezi kurudisha historia tena kutoka kwenye UI.
- **Futa data ya historia** inaruhusu kufuta maandishi yaliyohifadhiwa kulingana na umri (kwa mfano, zilizopita muda wa miezi kadhaa, au **data yote (wazi)**) kwa kutumia **Futa data**. Hii inaathiri tu maandishi ya utekelezaji yaliyohifadhiwa kwa ajili ya onyesho la **Historia**; haina **fanya** kufuta data ya gharama au jumla la matumizi. Ili kufuta au kupunguza data ya **gharama**, tumia [**Mipangilio** > **Ufuatiliaji wa Gharama**](#cost-tracking).

**Muonekano**

- **Muonekano** unabadilisha kati ya mwanga, giza, na muonekano wa mfumo.
- **Onyesha taarifa za gharama kwenye vitendo** inadhibiti kuonyeshwa kwa gharama kwa kila kitendo (ikiwa inapatikana) na jumla ya gharama kwenye paneli za pato za Tafsiri, Andika upya, na Badilisha.
- **Tarakimu za sehemu ya gharama** zinabadilisha jinsi tarakimu za desimali za gharama zinavyoonyeshwa.
- **Kwa wavuti tu:** **onyesha mpaka karibu na programu** inaongeza nafasi ziada karibu na kiolesura.
- **Familia ya fonti** inabadilisha fonti ya maandishi kwenye paneli za maandishi.
- **Ukubwa** unabadilisha ukubwa wa fonti.

**Usimbaji wa Usanidi** (kwa watumiaji wa programu ya mezani na maarufu wa wavuti tu)

- **Jumuisha data ya matumizi kwenye usimbaji** - ikiwa imewezeshwa, ZIP pia ina historia ya utekelezaji na data ya maombi ya API.
- **Usimbaji wa usanidi** - hundua ZIP moja (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` kwa UTC kwa chaguo-msingi) yenye `config.json`, `state.json`, ufunguo wa usimbaji wa sihi, watumiaji, mapendeleo, maagizo ya desturi, na data ya matumizi ikiwa umekubali. Baada ya usimbaji wa mafanikio, uthibitishaji unaonyesha jina la faili iliyohifadhiwa.
- **Weka upya kutoka kwenye usimbaji** - hufungua **mchemchela wa uthibitishaji kwanza**. Chagua faili ya ZIP ya usimbaji ndani ya mchemchela (**Chunguza** / kichujio cha faili au buruta-na-angusha pale inapotumika), kisha ukagua chaguzi:
  - **Rejesha data ya matumizi** - ingiza data ya matumizi/historia kutoka kwenye ZIP wakati iliposimwa ikiwa ilisimwa pamoja na matumizi; wachikie ikiwa unataka mipangilio na maagizo tu.
  - **Futa data ya zamani kabla ya kurudisha** - ondoa matumizi/historia yaliyopo kwenye uwekaji huu kabla ya kutumia usimbaji (si lazima; tumia wakati unataka badilika safi).

Usimbaji ulioundwa kwenye toleo la wavuti au desktopi unaweza kuwekwa upya kwenye jingine. Wakati wa kuweka upya usimbaji wa desktopi kwenye toleo la wavuti, data itawekwa upya kwa mtumiaji wa msimamizi.

<br/>

<a id="models"></a>
### Mifano

Lipu hii inapatikana tu wakati **Uzoefu wa AI** umewekwa kuwa **Ubinafsi** kwenye [**Mipangilio ya Kawaida**](#general-settings). Tumia **Mipangilio** > **Mifano** kuchagua mifumo itakayotazamwa kwenye barua pepe.

![Settings Models tab](../images/screenshots/sw/settings-general.png)

Ukurasa una orodha mbili:

- **Mifumo inayotolewa** upande wa kushoto
- **Mifumo Iliyochaguliwa** upande wa kulia

Vitawala vinavyotumika vinajumuisha:

- **Tafuta mifumo...** kupata mfumo kwa jina
- **Mtoa huduma** kuchuja orodha kwa injini moja (OpenRouter, OpenAI, Ollama, …)
- **Bure Pekee** kuonyesha mifumo tu ya bure
- **Sasisha** kupakia upya orodha
- **Panua Zote** na **Punguza Zote** unapopanga kwa mtoa huduma

Vitambaa vya mfumo vina jina la mtoa (kama vile `openrouter/…` vs `openai/…`). Alama kama vile **OpenAI (OpenRouter)** vs **OpenAI (moja kwa moja)** zinaonesha jinsi mawasiliano yanavyotumia njia.

> ℹ️ **KUWAZUA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) ni mfumo wa kuzungumza, si mfumo wa mazungumzo kawaida: majibu yake ni JSON inyonyesha mwili wa ombi la OpenRouter API (kama vile `requests` array yenye `model` na `messages`). Ikiwa hutumia kwa **Tafsiri**, **Andika upya**, au **Badilisha**, ubao wa pato utaonyesha JSON badala ya maandishi yaliyotimia. Chagua mfumo wa maandishi wa kawaida kwa zoezi hizo. Angalia [ukurasa wa mfumo wa Body Builder](https://openrouter.ai/openrouter/bodybuilder) kwenye OpenRouter.

Vitendo:

- Kuongeza mfumo, bofya **Ongeza** au mahali popote kwenye kuingia.

- Kutoa mfumo, bofya **X** karibu nao kwenye **Mifumo Iliyochaguliwa** au **Imechaguliwa** kwenye kuingia katika Mifumo inayotolewa.

- Kufuta orodha, bofya **Ondoa Yote**. Mfumo wa bure unaohitajika utabaki orodhani.

<br/>

> ℹ️ **KUWAZUA**<br/>
> Ikiwa hutaki kuongeza mikopo kwenye OpenRouter mara moja, anza kwa kuwezesha **Bure Pekee** na kuchagua mifumo ya bure (bosi la kadi ya mkopo haikohi). Pia unaweza kutumia Ollama kuendesha mifumo kivinjani bila kitufe chochote cha API.

<br/>

<a id="languages"></a>
### Lugha

Tumia **Mipangilio** > **Lugha** kusaidia kusaidia orodha ya lugha zilizotumika katika programu.

- **Lugha kuu** zinawekwa karibu juu ya orodha ya lugha katika **Tafsiri** na **Badilisha**.
- **Lugha ya desturi** inaruhusu kuongeza lugha ambayo haiko kwenye orodha iliyotengenezwa.

Ikiwa ungeza lugha ya desturi, itaonekana kwenye kichagua cha lugha pamoja na chaguo iliyotengenezwa.

<br/>

<a id="cost-tracking"></a>
### Ufuatiliaji wa gharama

Tumia **Mipangilio** > **Ufuatiliaji wa Gharama** kudhibiti taarifa za gharama.

- **Jumla ya Gharama** inaonesha jumla inayotokana.
- **Nakili Thamani** inanakili jumla kwenye ubao wa kunakili.
- **Weka upya Gharama** inaweka upya jumla iliyohifadhiwa kuwa sifuri.
- **Sawazisha na matumizi ya kitufe cha API** inaweka jumla sawa na matumizi yanayotajwa na akaunti yako ya OpenRouter (OpenRouter pekee).
- **Matumizi ya Kitufe cha API** inaonesha maelezo ya matumizi ya OpenRouter, ikiwa yanapatikana.
- **Futa data ya gharama** inafuta data zote, au tu vingine vilivopita tarehe iliyochaguliwa.

**Ufuatiliaji wa gharama:** Unapoitumia mifumo ya OpenRouter, programu inaonesha matumizi yako halisi na matumizi kulingana na taarifa ya gharama kutoka OpenRouter. Kwa mtoa wengine wote, programu inahesabu gharama kwa kutumia bei zilizotolewa na OpenRouter, ikiwa bei haipo, hesabu inaweza kuwa sifuri.

<br/>

> ℹ️ **KUWAZUA**<br/>
> **Nambari zote za gharama ni makadirio tu kwa ajili ya kurejelea kwako, si katika taarifa rasmi za malipo.**

<br/>

> ⚠️ **ONDOA**<br/>
> Futa data haipaswi kurejea. Kabla ya kufuta, hakikisha umehifadhi data yako au umtumie [**Historia**](#history)
> au [**Dashibodi** > **Wito wote**](#dashboard-tabs), kama hayo yatapotea mara kwa mara.
> Historia yote ya kuingiza/pato inayohusiana na kila kuingia cha API pia itafutwa.

<br/>

<a id="transform-settings"></a>
### Badilisha (lango la mipangilio)

Tumia **Mipangilio** > **Badilisha** kudhibiti maagizo kwa wingi.

Unaweza:

- tathmini maagizo yako yaliyohifadhiwa
- futa maagizo
- ingiza maagizo kutoka kwenye faili
- toa maagizo kwa ajili ya usimamizi au kushiriki
- pakia maagizo ya mfano kwenye orodha ya maagizo

<br/>

<a id="users"></a>
### Watumiaji

Tumia **Watumiaji** kudumisha akaunti za watumiaji katika toleo la wavuti. Unaweza ongeza watumiaji, kuboresha maelezo yao, kurudisha nywila, na kufuta akaunti.

<br/>

<a id="api-config"></a>
### Mipangilio ya API

Watoa huduma wafanyakazi ni: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, na **Ollama** (mifumo ya wahali kupitia URL ya msingi). Unahitaji kusanidi tu watoa ambao unawatumia.

**Programu ya wavuti: kwa msimamizi tu**

Vifunguo vya API vinawekwa kupitia vigezo vya mazingira ya mfumo au Docker - havijawekwa katika UI ya wavuti. Ukurasa huu unawasilisha watoa ambao vifunguo vimeanzishwa na kukuruhusu kujaribu kila kimoja kwa kubonyeza kitufe cha `Test`.

<br/>

> ℹ️ **KUMBUKA**<br/>
> Kugeuza funguo la API, hariri kigezo cha mazingira katika mfumo wako au usanidi wa Docker na uanzishe upya seva au chombo.

<br/>

> ℹ️ **KUMBUKA**<br/>
> **Usimbaji wa usanidi** (tazama [**Mipangilio ya kawaida** → Usimbaji wa usanidi](#general-settings)) unaweza kujumuisha vitufe vya **kutatua** vya mtoa huduma ndani ya `config.json` ya ZIP. Kurudisha ZIP hiyo **hakurudishi** vitufe hivyo nyuma kwenye faili ya usanidi wa seva iliyotunzwa - vitufe vya sasa bado vinatoka kwenye mazingira na hali ya faili iliyopo kama ilivyoelezwa pale.

<br/>

**Programu ya kompyuta**

Tumia **Mipangilio ya API** kuhifadhi vifunguo vya API kwa kila mtoa unaotumia. Kwa Ollama, weka **URL ya msingi** badala ya funguo la API.

<br/>

> 💡 **Shauri** <br/>
> Ikiwa hutaki kutumia funguo la API au kulipa matumizi, unaweza [pakuza Ollama](https://ollama.com) na kuendesha mifumo (kama vile `translategemma:4b`) kwenye kompyuta yako bila malipo. Pia, unaweza kuunda akaunti ya bure ya OpenRouter (bila kadi ya mkopo) kutumia mifumo yao ya bure, au kupata funguo la API bila malipo kutoka Cerebras, Google, Groq, au Mistral AI.

<br/>

- Ongeza watoa wote ambao unawahitaji. Katika **Mipangilio** > **Mifano**, kitambulisho cha kila mfumo kinaanza na mtoa (kama vile `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Ili kuongeza funguo la API, weka thamani kwenye kikopo cha maandishi na ubonyeze `Save`. Ili kubadilisha funguo uliopo, bonyeza `Edit`. Ili kuthibitisha kwamba funguo linafanya kazi, bonyeza `Test`. Kwa URL ya msingi wa Ollama, bonyeza daima `Test` kuchunguza muunganisho.

<br/>

> ℹ️ **KUMBUKA**<br/>
> Huwezi kuona thamani ya sasa ya funguo la API. Unaweza tu kubadilisha kwa kutumia kitufe cha `Edit`.
> Vifunguo vya API vinahifadhiwa kama siri katika usanidi.

<br/>

<a id="about"></a>
### Kuhusu

Lipu ya **Kuhusu** inaonyesha:

- jina la programu na kichwa cha kuzindua
- nambari ya toleo na tarehe ya jengo
- taarifa za leseni na hakimiliki, pamoja na kiungo cha kufungua **Majumuisho ya pili**
- kiungo cha hazina ya mradi

<br/><br/>

<a id="common-issues"></a>
## Matatizo ya kawaida

Ikiwa kitu chochote hakifanya kazi kama inavyotarajiwa, angalia kwanza mambo yafuatayo.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Programu haiwezi kufanya tafsiri, kuandika upya, au kubadilisha maandishi

Angalia kwamba:

- umechagua **vitanzandiko** (Rahisi) au **mfumo** (Ubinafsi) kwenye barua za kushirikiana
- katika namweo la **Rahisi**, [**Mipangilio** > **Mipangilio ya kawaida**](#general-settings) ina **Mtoa huduma** wenye funguo inayofanya kazi (au anwani ya Ollama) na vitanzandiko vimoja kwa ajili ya mtoa huduma huyo
- katika namweo la **Ubinafsi**, mfumo moja au zaidi umewekwa orodhani kwenye [**Mipangilio** > **Mifano**](#models)
- mpangilio wako wa API unafanya kazi

Ikiwa hutumia programu ya desktop:

1. Fungua [**Mipangilio** > **Mipangilio ya API**](#api-config).
2. Angalia kuwa unaokhi kimoja cha API umepokelezwa.
3. Bofya **Jaribu** karibu na mtoa huduma ili kuthibitisha kuwa uokhi unafanya kazi.

<br/>

<a id="the-model-list-is-empty"></a>
### Orodha ya mifumo ni tupu

Katika njia ya **Rahisi**, fungua [**Mipangilio** > **Mipangilio ya Kawaida**](#general-settings), thibitisha kwamba **Mtoa Huduma** umewekwa, na ongeza au jaribu ufunguo kwenye [**Mipangilio ya API**](#api-config) (kwa kompyuta) au ulizie msimamizi wako (kwa wavuti). Kwa ajili ya **Ollama**, fanya **Jaribu** kwenye anwani ya msingi na uhakikishe mifumo imepakia kwenye kompyuta yako.

Katika njia ya **Ubinafsi**, fungua [**Mipangilio** > **Mifano**](#models) na bofya **Sasisha**. Ikiwa inahitajika, tafuta mfumo, weka **Bure Pekee** iweze kufanya kazi, na ongeza mifumo kwenye **Mifumo Iliyochaguliwa**.

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Matokeo ni ya polepole au ghali sana

Jaribu moja au zaidi ya haya:

- chagua vitanzandiko tofauti (Rahisi) au mfumo (Ubinafsi)
- tumia kuingiza fupi
- zima **Tafsiri ya wakati mmoja (wakati wa kuandika)** kwenye [**Mipangilio** > **Mipangilio ya kawaida**](#general-settings)
- tumia mifano ya bure kwa kazi rahisi (tazama [Mifano](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Kiolesura kimeandikwa kwa lugha mbaya

Bofya pasi ya dunia barabarani [toolbar](#toolbar) na chagua **Lugha ya kuingiza** unayopendelea.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Maandishi ni madogo sana au vigumu kusoma

Fungua [**Mipangilio** > **Mipangilio ya kawaida**](#general-settings) na badilisha:

- **Familia ya Font**
- **Ukubwa**

<br/>

<a id="dashboard-summary-looks-empty"></a>
### Muhtasari wa Dashibodi unaonekana tupu

Hii ni kawaida ikiwa:

- hutumii tu **mifumo bila malipo** na unatazama takwimu za **gharama** (zinafanya kuwa sifuri); viashiria vya idadi ya wito kwenye **Muhtasari** bado vinahitaji data kutoka kipindi kilichochaguliwa
- **chujio cha wakati** kilichochaguliwa hakikidhi kipindi ambapo vituo vilifanyika — jaribu **Wote** ili uangalie

Ikiwa viashiria bado ni sifuri baada ya kuchagua **Wote**, thibitisha kwamba vituo vinavyotazamwa vinapatikana kwenye [**Historia**](#history) au kwenye kichupo cha **Vituo Vote**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Gharama inaonyesha "haiapatikani" au inaonekana si sahihi

Unapotumia mifano kupitia **OpenRouter**, programu inaonyesha matumizi yako halisi yanayotolewa na OpenRouter.

Kwa **watoa huduma wengine** (OpenAI moja kwa moja, Anthropic moja kwa moja, n.k.), gharama imehesabiwa kwa kutumia takwimu za bei zilizotolewa na OpenRouter. Ikiwa hakuna bei inayolingana imetambuliwa kwa mfumo fulani, gharama itaonekana kama **haiapatikani** na hautajumuishwa kwenye jumla yako.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Jumla ya gharama haifanani na bili yangu kutoka kwa mtoa huduma

Takwimu zote za gharama katika programu ni **matarajio tu kwa kurejelea**, sio taarifa rasmi za bili.

Ili kufanya jumla iwe karibu zaidi na matumizi yako halisi ya OpenRouter, fungua [**Mipangilio** > **Ufuatiliaji wa Gharama**](#cost-tracking) na bofya **Sawazisha na matumizi ya kitufe cha API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Ukurasa wa Historia umekosekana kutoka kwenye upande

**Hifadhi historia ya utekelezaji** inaweza kuwa imezimwa. Fungua [**Mipangilio** > **Mipangilio ya Kawaida**](#general-settings) na wezesha isipokuwa historia iwe *imezimwa na msimamizi* (`HISTORY_DISABLED` katika mazingira — tazama [README](README.sw.md#configuration-and-environment)). Kuwezesha historia haifanyi kurudisha maandishi yaliyofutwa awali.

<br/>

<a id="web-app-session-expired"></a>
### Programu ya wavuti: umerejelewa kwenye ukurasa wa kuingia kwa njia isiyotarajiwa

Kikao chako kikaweza kuisha muda wake. Ingia tena. Ikiwa hutokea mara kwa mara, angalia mpangilio wa seva kwa vitambulisho vya muda wa kikao.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Msimamizi wa wavuti: umesahau au umepoteza nenosiri

Hii inatumika kwa **programu ya wavuti inayotunzwa mwenyewe** (Docker), si programu ya desktop (Electron).

- Ikiwa msimamizi mwingine bado anaweza kuingia, anaweza kufungua [**Mipangilio** > **Watumiaji**](#users), kuchagua akaunti, na kuweka **siri mpya** pale.
- Ikiwa umekuwa **umezimwa** lakini una **ufikiaji wa shell** kwenye kifaa au chombo, rudisha nenosiri kwa kutumia kisaidizi ambacho kinatokea pamoja na picha (badilisha `transrewrt` ikiwa ubadilisha jina la chaguomsingi, na weka maandishi ya nenosiri ikiwa ina nafasi au herufi za maalum):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Jina la msimamizi wa chaguomsingi ni `admin` ikiwa hujawahi kuunda akaunti zingine. Unapotumia hoja moja tu, inashikilwa kama siri mpya kwa `admin`.

Ikiwa unatumia kutoka kwenye **kupakia chanzo** badala ya Docker, tumia:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Skripti inasasisha rekodi ya mtumiaji kwenye hifadhidata ya SQLite (na inaweza kuunda `admin` mtumiaji kama hakipo). Baada ya kuweka upya, ingia kwa siri mpya.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Dashibodi haionyesi data kwa watumiaji wengine (wavuti)

**Wakidhi** tu wanaweza kuangalia data kutoka kwa watumiaji wote kupitia chujuzi cha **Mtumiaji**. Watumiaji wa kawaida wanaweza kuona shughuli zao pekee kama ilivyowekwa.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Nimabadilisha maagizo na nikapoteza mabadiliko

Unapotahiri maagizo, daima bonyeza **Hifadhi** kabla ya kubonyeza **Rudi kwenye Ukimbia**.

<br/><br/>

<a id="quick-tips"></a>
## Vidokezo vya haraka

- Anza na [**Tafsiri**](#translate) kuhakikisha mpangilio wako unafanya kazi kabla ya kuendelea kwenda [**Andika upya**](#rewrite) au [**Badilisha**](#transform).
- Tumia [**Andika upya**](#rewrite) kwa maboresho ya maneno ya kila siku.
- Tumia [**Badilisha**](#transform) unapotaka mtiririko wa kazi unaweza kurudia kwa kazi maalum.
- Tumia [**Dashibodi**](#dashboard) ikiwa unataka kuangalia matumizi na gharama.
- Tumia [**Historia**](#history) kupitia vitendo vya awali na maandishi yao kamili ya kuingiza/ya pato.
- Tolea maagizo kila wakati ikiwa unajenga maktaba ya maagizo ambayo unataka kuihifadhi salama (tazama [Badilisha](#transform)) au ikiwa unataka kushiriki na wengine.
- Baki kwenye njia ya **Rahisi** mpaka utakapohitaji udhibiti wa karibu zaidi juu ya ID za mifumo; badilisha kwenye **Ubinafsi** wakati umekwisha kujua mifumo unayotaka.

<br/><br/>

<a id="disclaimer"></a>
## Kukopa dhima

Majina ya bidhaa na ishara husidhimana na wamiliki wake na hutumika kwa kutambua tu. Programu hii haifananishi na chakula kimepokelewa na lolote la vipengele vilivyoleta.

<br/><br/>

<a id="license"></a>
## Leseni

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
