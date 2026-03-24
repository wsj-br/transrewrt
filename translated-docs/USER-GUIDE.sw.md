---
translated_at: "2026-03-24T03:22:40.858Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Jukwaa la Transrewrt](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Mwongozo wa Mtumiaji

<br/>

<a id="introduction"></a>
## Utangulizi

Transrewrt unakusaidia kufanya kazi na maandishi katika njia tatu kuu:

- **Tafsiri** - Badilisha maandishi kutoka lugha moja kwenda lingine.
- **Andika upya** - Fafanua upya maandishi kwa mtindo tofauti, kama vile wazi zaidi, fupi zaidi, au rasmi zaidi.
- **Badilisha** - Shiriki maandishi kwa maelekezo maalum ya AI yanayoitwa maombi.

<br/>

Mwongozo huu unaelezea jinsi ya kutumia programu baada ya kupakia na kuanza kuyatumia. Kwa maelezo ya usanidi, tazama **[README](README.sw.md)** kuu.

<br/>

> ℹ️ **TENGA**<br/>
> Transrewrt ipatikana kama programu ya kompyuta kwa ajili ya Windows na Linux, pia kama programu ya wavuti inayohifadhiwa na mtumiaji. Mwongozo huu unazingatia matumizi ya kila siku ya programu. Ambapo jambo linatumika kwa tofauti kwa tofauti kwa tofauti, limeonyeshwa kwa wazi.

<small>**Soma kwa lugha nyingine:** [Kiingereza (UK)](USER-GUIDE.sw.md) · [Kiporotugali (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [Kichina (Rahisi)](USER-GUIDE.zh-CN.md) · [Kichina (Kitambulisho)](USER-GUIDE.zh-TW.md) · [Kihoratia](USER-GUIDE.hr.md) · [Kicheko](USER-GUIDE.cs.md) · [Kiholanzi](USER-GUIDE.nl.md) · [Kiingereza (AS)](USER-GUIDE.en-US.md) · [Kifulipino](USER-GUIDE.tl.md) · [Kifaransa](USER-GUIDE.fr.md) · [Kijerumani](USER-GUIDE.de.md) · [Kigiriki](USER-GUIDE.el.md) · [Kihindi](USER-GUIDE.hi.md) · [Kihungari](USER-GUIDE.hu.md) · [Kiitaliano](USER-GUIDE.it.md) · [Kijapani](USER-GUIDE.ja.md) · [Kijava](USER-GUIDE.jv.md) · [Kikorea](USER-GUIDE.ko.md) · [Kimalay](USER-GUIDE.ms.md) · [Kipaini](USER-GUIDE.fa.md) · [Kipolisi](USER-GUIDE.pl.md) · [Kiporotugali (PT)](USER-GUIDE.pt.md) · [Punjabi](USER-GUIDE.pa.md) · [Kiauria](USER-GUIDE.ro.md) · [Kirusi](USER-GUIDE.ru.md) · [Kislovakia](USER-GUIDE.sk.md) · [Kihispania](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Kiswidi](USER-GUIDE.sv.md) · [Telugu](USER-GUIDE.te.md) · [Kithai](USER-GUIDE.th.md) · [Kituruki](USER-GUIDE.tr.md) · [Kiumbaki](USER-GUIDE.uk.md) · [Kivietinamu](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Orodha ya Maudhui** 

- [Kabla hujianza](#before-you-start)
  - [Jinsi ya kupata bango la OpenRouter API bila malipo (programu ya kompyuta)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Kuanza](#getting-started)
- [Sehemu kuu za dirisha](#main-parts-of-the-window)
  - [Upande wa kando](#sidebar)
  - [Kanda ya vifaa](#toolbar)
  - [Paneri za kuingiza na kutolewa](#input-and-output-panels)
- [Tafsiri](#translate)
  - [Tafsiri maandishi](#translate-text)
  - [Uchaguzi wa lugha](#language-selection)
  - [Mipangilio muhimu ya tafsiri](#helpful-translation-settings)
  - [Vifupisho vya kitufe](#keyboard-shortcuts)
- [Andika upya](#rewrite)
  - [Andika maandishi upya](#rewrite-text)
- [Badilisha](#transform)
  - [Endesha maombi yaliyopo](#run-an-existing-prompt)
  - [Kama bado hukuna maombi](#if-you-have-no-prompts-yet)
  - [Unda maombi haraka](#create-a-prompt-quickly)
  - [Hariri maombi](#edit-a-prompt)
  - [Jaribu maombi kabla ya kutumia](#test-a-prompt-before-using-it)
  - [Dumisha maombi yaliyohifadhiwa](#manage-saved-prompts)
- [Dashibodi](#dashboard)
  - [Chuja data](#filter-the-data)
  - [Vidole vya dashibodi](#dashboard-tabs)
  - [Hamisha data nje](#export-data)
  - [Futa rekodi zilizohifadhiwa kwa ajili ya mfano](#delete-stored-records-for-a-model)
- [Historia](#history)
  - [Chuja data](#filter-the-data-1)
  - [Hamisha data ya historia nje](#export-history-data)
- [Mipangilio](#settings)
  - [Mipangilio ya jumla](#general-settings)
  - [Mifano](#models)
  - [Lugha](#languages)
  - [Kukusbia gharama](#cost-tracking)
  - [Maombi ya ubadilishaji](#transform-prompts)
  - [Watumiaji](#users)
  - [Usanidi wa API](#api-config)
  - [Kuhusu](#about)
- [Matatizo ya kawaida](#common-issues)
  - [Programu haiwezi kutafsiri, kuandikia upya, au kubadilisha maandishi](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Orodha ya mfano ni tupu](#the-model-list-is-empty)
  - [Matokeo ni ya kiwango cha polepole au ghali sana](#the-result-is-too-slow-or-too-expensive)
  - [Uangalizi una lugha batili](#the-interface-is-in-the-wrong-language)
  - [Maandishi ni ya kipato kivicho au vigumu kusoma](#the-text-is-too-small-or-hard-to-read)
  - [Michartu ya dashibodi ni tupu](#dashboard-charts-are-empty)
  - [Gharama inaonyesha "bila taarifa" au inaonekana si sahihi](#cost-shows-not-available-or-seems-wrong)
  - [Jumla ya gharama haiwezi kulingana na malipo yako ya mtoa huduma](#total-cost-does-not-match-my-provider-bill)
  - [Ukurasa wa Historia umepotea kutoka upande wa kando](#the-history-page-is-missing-from-the-sidebar)
  - [Programu ya wavuti: unatumiwa upya kwa ukurasa wa kuingia bila sababu](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Dashibodi haionyeshi data ya watumiaji wengine (wavuti)](#dashboard-shows-no-data-for-other-users-web)
  - [Nimebadilisha maombi na kusahau mabadiliko](#i-changed-a-prompt-and-lost-the-edits)
- [Vidokezo vya haraka](#quick-tips)
- [Hitimisho](#disclaimer)
- [Leseni](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Kabla ya kuanza

Ili kutumia Transrewrt, unahitaji upatikanaji wa angalau moja kwa moja cha mtoa AI. Watoa wa kusaidia ni: [OpenRouter](https://openrouter.ai) (ambapo moduli mengi zinapatikana), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, na [Ollama](https://ollama.com) kwa ajili ya moduli ya kijiji.

Huenda hautahitaji kuchagua muduli wa kodi ili kuweza kuanza. Mara tu unapoweka ufunguo wako wa OpenRouter API, programu huwezesha chaguo binafsi **bure** cha OpenRouter. Hii inakuruhusu uanze haraka kutafsiri, kuandika upya, na kubadili maandishi.

Kwa lugha rahisi:

- **Mfumo** ni injini ya AI inayofanya kazi. Mifumo inaorodheshwa pamoja na **kifupisho cha mtoa** (k.m. `openrouter/…`, `openai/…`, `ollama/…`).
- **Ufunguo wa API** (au kwa Ollama, **anwani ya msingi URL**) ni jinsi maombi huwasiliana na mtoa.

Ikiwa unatumia **programu ya mezani**, uongeze ufunwawa kwenye [**Mipangilio** > **Mipangilio ya API**](#api-config) kwa kila mtoa unaoumatumia. Kwa matumizi ya OpenRouter pekee, tazama [Jinsi ya kupata ufunguo wa API](#how-to-get-an-api-key-desktop-app) chini. Ikiwa hutaki kutumia ufunguo wa API, unaweza kusakinisha Ollama (kutoka [ollama.com](https://ollama.com)) na kutumia moduli ya kijijini.

Ikiwa unatumia **toleo la wavuti**, mwenye serbara anawezesha watengenezaji kupitia kigezo cha mazingira, hivyo kawaida huwezi kuweka ufunwao wa API wenyewe.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Jinsi ya kupata ufunguo wa OpenRouter API (programu ya mezani)

Ikiwa unatumia programu ya mezani, fuata hatua hizi:

1. Nenda kwenye [OpenRouter](https://openrouter.ai) kwenye kivinjari chako cha wavuti.
2. Unda akaunti au ingia.
3. Fungua ukurasa wa [Ufunguo](https://openrouter.ai/keys).
4. Bonyeza kitufe cha kujenga ufunguo mpya wa API.
5. Upatie jina ufunwao ili uweze kumtambua baadaye.
6. Nakili ufunwao mpya wa API.
7. Rudi kwenye Transrewrt na fungua **Mipangilio** > **Mipangilio ya API**.
8. Weka ufunwao kwenye **Ufunguo wa OpenRouter API** (chini ya **Mipangilio** > **Mipangilio ya API**).
9. Bonyeza **Jaribu ufunwao wa OpenRouter** ili uhakikishe unafanya kazi.

<br/>

> ℹ️ **KODI**<br/>
> Unaweza kuanza na njia isiyo ya malipo ya OpenRouter au kati ya moduli mengine ya bure bila kuongeza kadi ya mkopo. Katika kesi nyingi, hii inasokoa uwezo wa kuanza kutumia Transrewrt bila kuchagua mifumo ya kodi. Pia, unaweza kutumia Ollama kutumia moduli kijijini bila ufunwao wowote wa API.

<br/><br/>

<a id="getting-started"></a>
## Kuanza

Ikiwa ni mara ya kwanza unayotumia Transrewrt, fuata mpangilio huu:

1. Fungua programu.
2. Chagua **Lugha ya kuingiza** kwenye alama ya dunia kama inahitajika.
3. Ikiwa unatumia **programu ya mezani**, fungua [**Mipangilio** > **Mipangilio ya API**](#api-config), ongeza ufunwao wa API kwa angalau mmoja wa watoa (k.m. OpenRouter), kisha bonyeza **Jaribu** ili uhakikishe unafanya kazi.
4. Fungua [**Mipangilio** > **Mifumo**](#models) na ongeza mifumo moja au zaidi kwenye **Mifumo iliyochaguliwa**.
5. Fungua [**Mipangilio** > **Lugha**](#languages) na chagua **Lugha za juu** zako ikiwa unataka kama kiongozi zinapaswaje kuonekana.
6. Nenda kwenye **Tafsiri** kisha uendeleze tafsiri rahisi ili uhakikishe kila kitu kinaendelea kama inavyostahili.
7. Mara hii inafanya kazi, jaribu **Andika upya** kisha **Badili**.

Mpangilio huu ni muhimu. Unasaidia kuzuia tatizo la kawaida la kuanza kutumia programu: kujaribu kufanya kazi kabla ya programu kuwa na muunganisho wa API unaofanya kazi au mfumo uliochaguliwa.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Sehemu kuu za kikabati

Programu imegawanywa katika sehemu tatu kuu:

- **Upau wa kando** upande wa kushoto.
- **Upau wa juu** wa juu.
- **Eneo la kazi** katikati.

<br/>

<a id="sidebar"></a>
### Upau wa kando

Tumia upau wa kando uingie programu. Unaweza kumwaga upau huo kwa ajili ya nafasi zaidi kwa kubonyeza kielelezo kando ya alama ya programu.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/sw/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Tafsiri</strong> hufungua kazi ya tafsiri.</li><br/>
        <li><strong>Andika upya</strong> hufungua kazi ya kuandika upya maandishi.</li><br/>
        <li><strong>Badili</strong> hufungua kazi ya kikwazo cha wa kibinafsi.</li><br/>
        <li><strong>Dashboard</strong> huonyesha maelezo ya matumizi na gharama.</li><br/>
        <li><strong>Mipangilio</strong> hufungua paneli ya mipangilio.</li><br/>
        <li><strong>Historia</strong> huonyesha historia ya matumizi ikiwa na maandishi ya kuingiza na ya pato.</li><br/>
        <li><strong>mtumiaji</strong> huonyesha jina la mtumiaji mwenye kuingia (wa wavuti tu).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barua za Kizazi

Barua za kizazi hubadilika kidogo kulingana na unapo katika programu.

- Upande wa kushoto, inaonyesha jina la ukurasa sasa.
- Upande wa kulia, inaonyesha **chaguo la mfumo** na kitendaji cha **Lugha ya Kuingiza**.

**Chaguo la mfumo** linaruhusu kuchagua injini ya AI itakayotumika kwa kazi ya sasa.

  ![Chaguo la mfumo](../images/screenshots/sw/model-selector.png)

> ℹ️ **KIDHIMI**<br/>
> Baadhi ya vitanzwe vya bure vinaweza kuwepo tu kwa wakati mwingine—mara nyingi vinapopoteza mtiririko au kuwa na mipaka ya matumizi. Wakati huo hutokea, programu itawacha otomatiki hiyo mfumo kutoka orodha yako inayopatikana.<br/>
> Udhibiti ambavyo vitanzwe unavyotaka vivepo, nenda kwenye [**Mipangilio** > **Vitanzwe**](#models) na hariri orodha yako ya vitanzwe.  
> Pia unaweza wazi mipangilio ya mfumo moja kwa moja kwa kubonyeza kibonyeza cha mtoaji kilichopo upande wa kushoto wa jina la mfumo katika barua za kizazi.

<br/>

**Ikoni ya Dunia + msimbo wa lugha** inabadilisha lugha ya kuingiza kwa programu, kama vile menyu na vitufe. Hu **siyo** badilisha vya lugha vinavyotumika kwenye **Tafsiri**.

  ![Kichujio cha lugha ya kuingiza](../images/screenshots/sw/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Sanduku la Kuingiza na la Patikanalo

Eneo kila la kazi linatumia **Input** (sanduku la kuingiza) upande wa kushoto na **Output** (sanduku la patikanalo) upande wa kulia.

Sanduku la **Input** linaonyesha:

- Hesabu ya herufi
- Hesabu ya maneno
- Hesabu ya maraupishi

Sanduku la **Output** linaweza kuonyesha:

- Muda ulichotumika kwa kazi husika
- Gharama ya kazi husika (kama inapatikana)
- Jumla yako ya deni
- **TPS** (vigezo kwa sekunde)
- Hesabu za herufi, maneno, na maraupishi
- Mfumo uliotumika

Kama unashangaa kuhusu istilahi za kiufundi:

- **Token** inamaanisha kipande kidogo cha maandishi. Unaweza kufikiria kuwa ni sehemu ya neno au neno fupi.
- **TPS** inamaanisha idadi gani ya vipande vya maandishi vimechakazwa kila sekunde na mfumo.

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
4. Chagua mfumo katika iliyo barani za kizazi.
5. Andika au pandisha maandishi kwenye **Input**.
6. Bonyeza **Tafsiri**.
7. Soma matokeo katika **Output**.
8. Tumia kitufe cha nakili ikiwa unataka nakili matokeo.

<br/>

<a id="language-selection"></a>
### Uchaguzi wa lugha

- **Kutoka** inaweza kuwa lugha maalum au **Gundua Lugha**.
- **Kwenda** ni lugha unayotaka matokeo kuiweka.

Vilivyo chaguliwa **vya juu vya lugha** vinaonekana juu ya orodha. Unaweza kuweka haya kwenye [**Mipangilio** > **Lugha**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Mipangilio muhimu ya kutafsiri

Katika [**Mipangilio** > **Mipangilio ya Jumla**](#general-settings), unaweza badilisha namna utakavyotafsiri:

- **Tafsiri otomatiki baada ya kupandisha** inatumia tafsiri mara tu wakati unapopandisha maandishi.
- **Nakili otomatiki matokeo kwenye ubao wa kunakili** inanakili matokeo moja kwa moja baada ya kufanikisha kazi.
- **Tafsiri ya wakati wowote (wakati unapowekaandikia)** inatumia tafsiri wakati unapowekaandikia.
- **Muda uliopotea (ms)** huuawira muda programu inawasilishwa kabla ya kuanza tafsiri ya wakati wowote.

<br/>

<a id="keyboard-shortcuts"></a>
### Mafupisho ya kitufe cha kibodi

Katika [**Mipangilio** > **Mipangilio ya Jumla**](#general-settings), **Kitendaji cha ENTER** kinawalisha kitu kinachotokea wakati unapobonyeza `Enter`:

- **Enter** kinaweza kuteka kazi na **Shift+Enter** kionekane mstari mpya.
- Au programu inaweza kufanya kinyume cha hicho.

Namna ya sasa pia inawakilishwa kwenye kitufe cha **Tafsiri**.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Andika upya

Tumia **Andika upya** unapokipenda kuboresha maneno bila kubadilisha maana kuu.

![Eneo la kazi la kuandika upya](../images/screenshots/sw/rewrite.png)

Hii ni muhimu kwa:

- kurekebisha matini na sarufi
- kuifanya maandishi iwe wazi zaidi
- kuifanya maandishi iwe rasmi zaidi au pana rasmi
- kupunguza au kuongeza maandishi
- kuifanya maandishi ionekane kiufundi zaidi

<br/>

<a id="rewrite-text"></a>

### Andika upya maandishi

1. Fungua **Andika upya**.
2. Chagua **Kielelezo**.
3. Chagua mfumo katika orodha ya vifaa.
4. Andika amaunge maandishi katika **Kiputacho**.
5. Bonyeza **Andika upya**.
6. Somo matokeo katika sehemu ya **Patikanavyo**.

Sivyo kama tabia ya ufunguo wa "Enter" imetajwa kwenye [**Tafsiri**](#keyboard-shortcuts), inatumika pia hapa.

<br/>

> 💡 **UELEKEZO**<br/>
> Unapotumia kielelezo cha "**Angalia Silabi & Sarufi**", kitufe cha `Onyesha mabadiliko` kinaonekana katika panel ya patikanavyo.
> Bonyeza kitufe hiki kubadili kuonyesha ama kuficha mabadiliko fulani yaliyofanywa kwenye maandishako.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## Badilisha

Tumia **Badilisha** unapotaka AI kufuata maelekezo maalum ambayo umeiandaa wewe mwenyewe.

![Sehemu ya kazi ya Badilisha](../images/screenshots/sw/transform.png)

Hii ndiyo sehemu ya programu yenye utulivu zaidi. Unaweza kutumia kwa ajili ya kazi kama vile:

- kufupisha maelezo
- kubadili maandishi ya muda kwa barua pekee ya sahihi
- kutoa mahitaji makuu
- kubadili maandishi kwa muundo maalum

<br/>

<a id="run-an-existing-prompt"></a>
### Endesha wito uliowezeshwa awali

1. Fungua **Badilisha**.
2. Chagua wito kutoka kwenye orodha ya vituo.
3. Kama kisanduku cha **Lugha ya Pato** kinaonekana, chagua lugha ukitaka.
4. Andika amaunge maandishi katika sehemu ya **Kiputacho**.
5. Bonyeza **Badilisha**.
6. Soma matokeo katika sehemu ya **Patikanavyo**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Kama bado huna vituo

Kama orodha yako ya vituo ni tupu, bofya **Pakia vituo vya sura**. Hii inaongeza mfano wa vituo ili uanze haraka.

<br/>

> ℹ️ **TAARIFA**<br/>
> Vituo vya sura vinapatikana Kiarabu. Baada ya kuyapakia, unaweza kuhariri wito na kutumia **Tafsiri wito** kuihamisha kwenye lugha yako.

<br/>

<a id="create-a-prompt-quickly"></a>
### Unda wito haraka

Njia ya nyakati kwa undoa wito ni:

1. Bofya **Wito jipya**.
2. Bofya **Zalisha wito**.
3. Eleza unachotaka wito kufanya.
4. Chagua mfumo.
5. Ruhusu programu kuunda rasimu kwako.
6. Soma rasimu na ubonyeze **Hifadhi**.

![Zalisha wito](../images/screenshots/sw/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Hariri wito

Unapotengeneza au kuhariri wito, mkahawa unavyotoka upande wa kushoto na eneo la jaribio linavyotoka upande wa kulia.

![Mhariri wa wito wa Badilisha](../images/screenshots/sw/transform-prompt-edit.png)

Sehemu kuu ni:

- **Jina la wito**: jina linaloonekana katika orodha ya vituo.
- **Maelekezo ya wito (si lazima)**: kishaufu mfupi inayoonshwa kwa mtumiaji wakati matokeo yanaponaswa kupakuliwa.
- **Jukumu la mfumo**: jukumu kikubwa kilichotolewa kwa AI, kama vile 'Wewe ni msaaidizi mwema.'
- **Maelekezo ya mfumo (moja kwa mstari)**: sheria maalum unayotaka AI kuzisikiliza.
- **Maelezo ya pato**: neno mfupi unaolieleza matokeo, kama vile 'muhtasari' au 'andikisha upya'.
- **Wakati (0.0 → 1.0)**: jinsi ambavyo mfumo utakavyoshughulikia; uone chini.
- **Omba lugha ya kipo**: inaongeza kichagua cha lugha ya kipo unapotumia wito.

Ikiwa terminologia ya kiufundi "**Wakati**" haijulikani kwako, uiangalie kama hivi:

- **Wakati wa chini** unapatoa matokeo sawa na yanayotabiriwa zaidi.
- **Wakati wa juu** unapatoa upande na ubunifu zaidi.

Unaweza pia kutumia:

- **`Zalisha wito`** kuzalisha rasimu mpya kutoka kwa maelezo rahisi
- **`Sawazisha wito`** kuboresha wito uliopo
- **`Tafsiri wito`** kubadili uleli wa wito

<br/>

> ⚠️ **ONYO**<br/>
> Bonyeza **`Hifadhi`** kabla ya ubonyeze **`Rudi kwenye Endesha`**. Kama urudi bila kuhifadhi, mabadiliko yako yataharibika.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Jaribu wito kabla ya kuitumia

Eneo la jaribio la kulia linakufanya ujaribu wito wako kwa maandishi ya sura kabla ya kuitumia kazi za kila siku.

Hii inatumika wakati:

- unakibuni wito mpya
- unakilinganisha toleo mbili mbalimbali za wito
- unataka kuchagua mtindo, urefu, au muundo wa pato

<br/>

<a id="manage-saved-prompts"></a>
### Dhibiti vituo vilivyohifadhiwa

Ili udhibiti vituo uliovihifadhi mahali moja, fungua [**Mipangilio** > **Vituo vya Badilisha**](#transform-prompts).

Kule unaweza:

- orodhesha na kufuta vituo vyako
- epotea vituo kama **JSON**, **CSV**, au **XLSX**
- ingizia vituo kutoka kwenye faili

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Dashibodi

Tumia **Dashibodi** ili uone kiasi gani unachotumia programu na gharama inayotokana na matumizi yake (kwa modeli zinazolipwa).

![Muhtasari wa dashibodi](../images/screenshots/sw/dashboard-summary.png)


<br/>

> ℹ️ **TANGAZO**<br/>
> Kama hutumii modeli buni tu, grafu zinazohusiana na gharama zitakuwa tupu.

<br/>

<a id="filter-the-data"></a>
### Chuja data

Tumia vitanzi vya kuchuja juu ili ubadilishe aina ya muda.

![Vichuja vya dashibodi](../images/screenshots/sw/dashboard-filter.png)

<br/>

> ℹ️ **TANGAZO**<br/>
> Kichuja cha **Mtumiaji** kinaonekana kwa wakala pekee katika toleo la wavuti. Watumiaji watawala hawataiona kio chaka, na hakikisha kipo katika toleo la programu ya kompyuta.

<br/>

<a id="dashboard-tabs"></a>
### Vichupo vya dashibodi

- **Muhtasari** unakupa mjadala wa jumla wa matumizi na gharama.
- **Kwa Matumizi** hunaweka shughuli kwa lugha ya kutafsiri, njia ya kuandika upya, na maagizo ya ubadilishaji.
- **Kwa Mfumo** hulishtaki kwa namna unavyomatumia mfumo fulani na gharama zinazohusiana nao.
- **Kwa Siku** hunasaajili jumla za kila siku.
- **Maombi Yote** hunasaajili historia kamili ya maombi na kukuruhusu uifunike.

<br/>

<a id="export-data"></a>
### Ifunike data

Vitabu vya dashibodi vinafungua uwezo wa kufungua data kwa:

- **JSON**
- **CSV**
- **XLSX**

Hii ina faida kama ungependa kuchunguza matumizi nje ya programu au kushiriki ripoti.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Futa rekodi zilizohifadhiwa kwa ajili ya modeli moja

Katika **Kwa Mfumo** au **Maombi Yote**, unaweza kufuta rekodi zilizohifadhiwa kwa mfumo fulani kwa kubonyeza kiocha cha "kisanduku cha taka".

> ⚠️ **ONDOA**<br/>
> Kufuta rekodi zilizohifadhiwa haikupaswa kuruhusiwa. Tumia kio hicho tu kama una uhakika kwamba hutahitaji tena historia hiyo.

Ikiwa ungependa kufuta data yote au kufuta rekodi kulingana na umri wake, nenda kwenye [**Mipangilio** > **Ufuatiliaji wa Gharama**](#cost-tracking). Kuna chaguo la kufuta data yote au data ambayo imezidi tarehe fulani.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Historia

Bonyeza **Historia** ili uone matumizi yako ndani ya **Transrewrt**, pamoja na vigezo vya kuingilia na vya kutolewa kwa kila operesheni.

![Ukurasa wa historia](../images/screenshots/sw/history.png)

<br/>

<a id="filter-the-history"></a>
### Chujia historia

**Historia** inatumia vichujo vilevile vinavyotumika kwenye ukurasa wa **Dashibodi**. Tumia vikio hicho ili uchague aina ya muda.

![Vichuja vya dashibodi](../images/screenshots/sw/dashboard-filter.png)

<br/>

> ℹ️ **TANGAZO**<br/>
> Kichuja cha **Mtumiaji** kinaonekana kwa wakala pekee katika toleo la wavuti. Watumiaji watawala hawataiona kio chaka, na hakikisha kipo katika toleo la programu ya kompyuta.

<br/>

<a id="export-history-data"></a>
### Ifunike data ya historia

Ukurasa wa historia una uwezo wa kufungua data iliyochujwa kwa:

- **JSON**
- **CSV**
- **XLSX**

Hii ina faida kama ungependa kuchunguza matumizi nje ya programu au kushiriki ripoti.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Mipangilio

Fungua **Mipangilio** kutoka upande ili uweke namna programu inavyofanya kazi.

Vichupo vilivyonunuliwa vinategemea jukwaa na wajibu wako:

  | Kichupo               | Kompyuta | Wavuti (wakala) | Wavuti (mtumiaji wa kawaida) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Mipangilio Mjumla  |   ndiyo   |     ndiyo     |        ndiyo         |
  | Modeli            |   ndiyo   |     ndiyo     |        ndiyo         |
  | Lugha         |   ndiyo   |     ndiyo     |        ndiyo         |
  | Ufuatiliaji wa Gharama     |   ndiyo   |     ndiyo     |         —          |
  | Maagizo ya Ubabadilishaji |   ndiyo   |     ndiyo     |        ndiyo         |
  | Watumiaji             |    —    |     ndiyo     |         —          |
  | Mipangilio ya API        |   ndiyo   |     ndiyo     |         —          |
  | Kuhusu             |   ndiyo   |     ndiyo     |        ndiyo         |

<br/>

> ℹ️ **TANGAZO**<br/>
> Katika toleo la wavuti, kila mtumiaji ana mpangilio wake wake. Mipangilio kama vile modeli zilizochaguliwa, lugha, chaguo jumla, na maagizo ya ubadilishaji huwekwa kwa mtumiaji kwa mtumiaji. Mabadiliko unayofanya hayawapaswi kuharibu kwa watumiaji wengine.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Mipangilio ya kawaida

Tumia **Mipangilio ya Kawaida** kupiga moja wema wa kuingia, kama taarifa za utekelezaji hutengenezwa kwa ajili ya **Historia**, na muonekano.

**Tabia**

- **Tabia ya ENTER** inachagua kama `Enter` itatumia kazi au kuweka mstari mpya.
- **Tafsiri otomatiki baada ya kunakili** huanza kufanya tafsiri mara tu unakibunia maandishi.
- ** Nakili otomatiki matokeo kwenye ubao wa kunakili** inanakili matokeo ya mafanikio kibao cha kunakili kiotomatiki.
- **Tafsiri ya wakati halisi (wakati wa kuandika)** inafanya tafsiri wakati unaoweka.
- **Muda uliopita (ms)** unaweka wakati wa subira kwa tafsiri ya wakati halisi.

**Historia**

- **Weka historia ya utekelezaji** inaudhi kama tafsiri, ubadilishaji, na kubadilisha husimamia **maandishi ya kuingiza na ya pato** kwa ajili ya kuchanganuzi cha upande wa [**Historia**](#history). Kuzima kufanya utoe uthibitishaji; ikiwa utathibitisha, maandishi yaliyotengenezwa yanatawaliwa kwenye hifadhi. 
- **Futa data ya historia** inaruhusu kufuta maandishi yaliyotengenezwa kwa umri (kwa mfano hayo ziliyopita mwezi, au **data yote (futa)**) kwa kutumia **Futa data**. Kinaathiri tu maandishi yaliyohifadhiwa kwa ajili ya kuchanganza **Historia**; HAIWAFUTI magharama au jumla ya matumizi. Ili kufuta au kupata **data ya gharama**, tumia [**Mipangilio** > **Ufuatiliaji wa Gharama**](#cost-tracking).

**Muonekano**

- **Tarakimu za sehemu ya gharama** zinabadilisha namna tarakimu za desimali za gharama zinavyoonyeshwa.
- **Kwa wavuti tu:** **onyesha umbali karibu na programu** inaongeza nafasi zaidi karibu na kiolesura.
- **Familia ya Fonti** inabadilisha fonti ya kuandika kwenye panel za maandishi.
- **Ukubwa** unabadilisha ukubwa wa fonti.

<br/>

<a id="models"></a>
### Mifumo

Tumia **Mipangilio** > **Mifumo** kuchagua mifumo itakayotolewa kwenye barua za zana.

![Kichupo cha mipangilio ya mifumo](../images/screenshots/sw/settings-models.png)

Ukurasa una orodha mbili:

- **Mifumo iliyopatikana** upande wa kushoto
- **Mifumo iliyochaguliwa** upande wa kulia

Vitawala muhimu vinajumuisha:

- **Tafuta mifumo...** kupata mfumo kwa jina
- **Vichipu vya Mpaji** kupunguza orodha kwa injini moja (OpenRouter, OpenAI, Ollama, …)
- **Tu ya bure** kuonyesha mifumo tu ya bure
- **Pakia upya** kupakia tena orodha
- **Panua Zote** na **Punguza Zote** wakati unapowasilisha kwa mpaji

Vitambaa vya mfumo vinajumuisha kiambishi cha mpaji (kwa mfano `openrouter/…` vs `openai/…`). Alama kama vile **OpenAI (OpenRouter)** vs **OpenAI (direct)** zinaonyesha namna mtiririko unapobadilishwa.

Vitendo:

 - Ili kuongeza mfumo, boleza **Ongeza** au mahali popote katika kichwa.

 - Ili kufuta mfumo, boleza **X** kama karibu na kichwa katika **Mifumo iliyochaguliwa** au **Iliyochaguliwa** kwenye kichwa katika Mifumo iliyopatikana.

 - Ili kufuta orodha, boleza **Bofya zote**. Mfumo wa bure unaozahiri utabaki orodhini.

<br/>

> ℹ️ **MUHIMU**<br/>
> Kama huwezi kuongeza mkopo kwenye OpenRouter mara moja, anza kuzima **Tu ya bure** na kuchagua mifumo ya bure (bosi wa mkopo hauchohitajika). Unaweza pia kutumia Ollama kuendesha mifumo karibu bila uangalizi wowote wa API.

<br/>

<a id="languages"></a>
### Lugha

Tumia **Mipangilio** > **Lugha** kupanga orodha za lugha zilizotumiwa katika programu.

- **Lugha kuu** zinapewa eneo karibu na juu ya orodha za lugha kwa **Tafsiri** na **Tanzu**.
- **Lugha maalum** inaruhusu kuongeza lugha ambayo haipo kwenye orodha iliyotengenezwa.

Kama ungeongeza lugha maalum, itaonekana katika kitchora cha lugha pamoja na chaguo zilizotengenezwa.

<br/>

<a id="cost-tracking"></a>
### Ufuatiliaji wa gharama

Tumia **Mipangilio** > **Ufuatiliaji wa gharama** kuuhakikia taarifa ya gharama.

- **Jumla ya Gharama** inaonyesha jumla.
- **Nakili Thamani** inanakili jumla kwenye ubao wa kunakili.
- **Washa upya Gharama** inawasha upya jumla iliyotengenezwa hadi sifuri.
- **Sawazisha na matumizi ya uangalizi wa API** kusawazisha jumla iwe sawa na matumizi yanayoripotiwa na akaunti yako ya OpenRouter (kwa OpenRouter tu).
- **Matumizi ya Uangalizi wa API** inaonyesha maelezo ya matumizi ya OpenRouter, ikiwa yanapatikana.
- **Futa data ya gharama** inafuta data yote, au tu viungo vilivyozidi tarehe iliyochaguliwa.


 **Ufuatiliaji wa gharama:** Unapotumia mifumo ya OpenRouter, programu inaonyesha matumizi yako halisi na matumizi kulingana na taarifa kutoka OpenRouter. Kwa wao wengine wote, programu inasubiri gharama kwa kutumia bei zilizotolewa na OpenRouter, ikiwa bei haiapatikani, tabia inaweza kuwa sifuri.

<br/>

> ℹ️ **MUHIMU**<br/>
> **Nambari zote za gharama ni takwimu za takriban kwa ajili ya kuelekeza tu, si katika katiba ya bili rasmi.**


<br/>

> ⚠️ **ONDOA**<br/>
> Futa data haipo kurejea. Kabla ya kufuta, hakikisha kuwa umefanya nakala ya data yako au kuifunua kupitia [**Dashibodi** > **Maombi Yote**](#dashboard-tabs), kama hakuna itafutwa kabisa. <br/>
> Historia yote inayohusiana kila kiolezo cha maombi ya API pia itafutwa.


<br/>

<a id="transform-prompts"></a>

### Badilisha maneno ya awali

Tumia **Mipangilio** > **Badilisha Maneno ya Awali** kudumisha maneno ya awali kwa wingi.

Unaweza:

- kagua maneno yako yaliyohifadhiwa
- kufuta maneno
- kuleta maneno kutoka kwenye faili
- kutoa maneno kwa ajili ya usalazi au kuwawasilisha wengine

<br/>

<a id="users"></a>
### Watumiaji

**Tovuti: utawala pekee**

Tumia **Watumiaji** kudumisha akaunti za watumiaji katika tovuti. Unaweza kuongeza watumiaji, kubadili maelezo yao, kurudisha nywila, na kufuta akaunti.

<br/>

<a id="api-config"></a>
### Mipangilio ya API

Mtoa wafadhili wafikia ni: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, na **Ollama** (modeli ya kijiji kupitia anwani ya msingi ya URL). Unahitaji mpangilio wa mtoa ambaye unaotumia tu.

**Programu ya wavuti: utawala pekee**

Mifuni ya API yanawekwa kupitia mvirongoji wa mfumo au wa Docker — hayuwezi kuandikwa kwenye mdomo wa wavuti. Ukurasa huu unaonyesha mtoaji ambaye ameweka ufunguo na kukuwezesha kumjaribu kwa kubonyeza kitufe cha **`Jaribu`**.

<br/>

> ℹ️ **TAARIFA**<br/>
> Ili kubadili ufunguo wa API, badilisha mvirongoji katika mfumo wako au mazingira ya Docker na uanze upya seva au chombo.

<br/>

**Programu ya kompyuta**

Tumia **Mipangilio ya API** kuhifadhi ufunguo wa API kwa kila mtoa unaotumia. Kwa Ollama, ingiza **Anwani ya Msingi** badala ya ufunguo wa API.

<br/>

> 💡 **Shauri** <br/>
> Ikiwa si unataka kutumia ufunguo wa API au kulipa matumizi, unaweza [pakua Ollama](https://ollama.com) na kusimamia modeli kijijini kwenye kompyuta yako bure. Kama mbadala, unaweza kuunda akaunti ya OpenRouter isiyo na malipo (bila kadi ya mkopo) kupata modeli yao ya bure.

- Ongeza tu mtoaji ambaye unahitaji. Katika **Mipangilio** > **Modeli**, kitambulisho cha kila modeli kinaanza na mtoa (k.m. `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Kuweka ufunguo wa API, andika thamani katika ukurasa wa maandishi na ubonyeze **`Hifadhi`**. Ikiwa unataka ubadilishe ufunguo uliopokelewa, ubonyeze **`Hariri`**. Ikiwa unataka kuchunguza kazi ya ufunguo, ubonyeze **`Jaribu`**.

<br/>

> ℹ️ **TAARIFA**<br/>
> Huwezi kuona thamani sasa ya ufunguo wa API. Unaweza tu kuubadilisha kwa kubonyeza kitufe cha **`Hariri`**.
> Mifuni ya API huhifadhiwa kwa njia ya kificho kwenye faili ya mpangilio.

<br/>

Kwa maelekezo kamili kuhusu kujipatia mufuni wa OpenRouter, tazama [Jinsi ya kupata ufunguo wa API](#how-to-get-an-api-key-desktop-app) hapo juu.

<br/>

<a id="about"></a>
### Kuhusu

Layihata ya **Kuhusu** inaonesha:

- jina la programu
- nambari ya toleo
- tarehe ya uundaji
- kiungo kwa depo la mradi

<br/><br/>

<a id="common-issues"></a>
## Masuala ya Kawaida

Ikiwa kitu hakikamiliki kama ilivyotarajiwa, angalia pointi zifuatazo kwanza.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Programu haitafsiri, hairudishi, wala haiabadilishi maandishi

Angalia kwamba:

- umechagua modeli katika kiolesura cha zana
- modeli moja angalau imeorodheshwa katika [**Mipangilio** > **Modeli**](#models)
- mpangilio wako wa API umeamilika

Ikiwa unatumia programu ya kompyuta:

1. Fungua [**Mipangilio** > **Mipangilio ya API**](#api-config).
2. Angalia kwamba ufunguo wa API moja angalau umehifadhiwa.
3. Ubonyeze **Jaribu** karibu na mtoa ili kuthibitisha kazi ya ufunguo.

<br/>

<a id="the-model-list-is-empty"></a>
### Orodha ya modeli ni tupu

Fungua [**Mipangilio** > **Modeli**](#models) na ubonyeze **Pakua upya**.

Ikiwa inahitajika:

- tafuta modeli
- weka **Bure Tu** iweze matumizi
- ongeza modeli moja au zaidi kwenye **Modeli Iliyochaguliwa**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Matokeo ni ya kiasi cha polepole au ghali sana

Jaribu moja au zaidi ya haya:

- chagua modeli tofauti
- tumia maandishi mafupi
- zima **Uwasilishaji wa wakati halisi (wakati wa kuandika)** kwenye [**Mipangilio** > **Mipangilio ya Jumla**](#general-settings)
- tumia modeli ya bure kwa kazi rahisi (tazama [Modeli](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Utambulisho wa programu umewekwa kwenye lugha mbaya

Bonyeza alama ya dunia kwenye [kiolesura cha zana](#toolbar) na chagua **Lugha ya Utambulisho** unayopendelea.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Maandishi ni machana au magumu sana kusoma

Fungua [**Mipangilio** > **Mipangilio ya Jumla**](#general-settings) na ubadilishe:

- **Familia ya Fonti**
- **Ukubwa**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Grafu za ubao ni tupu

Hii ni kawaida ikiwa:

- hutumia tu **modeli za bure** (grafu za gharama zitakuwa tupu)
- **shati la wakati** limechaguliwa ambalo halijafiki kipindi ambapo mafoni yamefanyika — jaribu **Wote** kuchunguza

Ikiwa grafu bado ni tupu baada ya kuchagua **Wote**, thibitisha kwamba mafoni yameonekana kwenye [**Historia**](#history) au katika layihata ya **Mafoni Yote**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Gharama inaonyesha "haiapatikani" au inaonekana si sahihi

Unapotumia moduli kupitia **OpenRouter**, programu inakusakinisha matumizi yako halisi ambayo OpenRouter ametaja.

Kwa ajili ya **wauguzi wengine** (OpenAI moja kwa moja, Anthropic moja kwa moja, n.k.), gharama imehesabiwa kutokana na takwimu za bei zilizotolewa na OpenRouter. Ikiwa bei isiyo na kulinganisha imetajwa kwa moduli fulani, gharama itaonekana kama **haiapatikani** na haitajumuishwa katika jumla yako inayotendelea.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Jumla ya gharama hailingani na bili yangu ya mtoa huduma

Takwimu zote za gharama katika programu ni **takwimu za kujisakinisha kwa ajili ya urejezi tu**, si kama taarifa rasmi za bili.

Ili kuwakilisha jumla karibu na matumizi yako halisi ya OpenRouter, fungua [**Mipangilio** > **Kufuatilia Gharama**](#cost-tracking) na bofya **Sambaza na matumizi ya Key ya API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Ukurasa wa Historia unakosekana kutoka kwenye upande wa kushoto

**Kudumisha historia ya utekelezaji** unaweza kuwa umezimwa. Fungua [**Mipangilio** > **Mipangilio ya Jumla**](#general-settings) na washa. Angalia kwamba ukizifanya hivi hutarejesha data ya historiya iliyofutwa awali.

<br/>

<a id="web-app-session-expired"></a>
### Programu ya wavuti: imeelekeza upya kwenye ukurasa wa kuingia kwa njia isiyotarajiwa

Ukumbusho wako unaweza kuwa umeshakwisha. Ingia tena. Ikiwa huendelea kutokea mara kwa mara, angalia mipangilio ya seva kwa uwezo wa muda wa ukumbusho.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Dashibodi haionyeshi data kwa watumiaji wengine (wavuti)

Tu **wavaraa** wana uwezo wa kuangalia data ya watumiaji wote kupitia chaguzi cha **Mtu Binafsi**. Watumiaji wa kawaida wanaweza kuiona tu shughuli zao kwa mfano fulani.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Nimebadilisha mchango na kumpoteza marekebisho

Unapobadilisha mchango, hakikisha umebonyeza **Hifadhi** kabla hujabofya **Rudi kwenye Utekelezaji**.

<br/><br/>

<a id="quick-tips"></a>
## Ushauri wa haraka

- Anaanza na [**Tafsiri**](#translate) kuhakikisha mipangilio yako imefanya kazi kabla hujirudishiwe kwa [**Andika upya**](#rewrite) au [**Badilisha**](#transform).
- Tumia [**Andika upya**](#rewrite) kwa usahihisho wa maneno kila siku.
- Tumia [**Badilisha**](#transform) unapohitaji mtindo endelevu wa kazi kwa ajili ya kazi fulani.
- Tumia [**Dashibodi**](#dashboard) ikiwa unataka kuangalia matumizi na gharama.
- Tumia [**Historia**](#history) kupitia kazi zilizopita na maandishi yake kamili ya kuingiza/kuondoa.
- Thibitisha mchango kila wakati kama umejenga maktaba ya mchango ambayo unataka kuilinda (tazama [Mchango Badilika](#transform-prompts)) au unataka kushiriki wenye wengine.

<br/><br/>

<a id="disclaimer"></a>
## Toa dhima

Majina na alama za bidhaa ni mali ya wamiliki wao kwa mtiririko wake na hutumiwa kwa lengo la kutambulisha tu. Programu hii haishirikiana na, wala haimidhinishwa na, chanya kama chote cha watu wanaoyajumuza.

<br/><br/>

<a id="license"></a>
## Leseni

Copyright © 2026 Waldemar Scudeller Jr.

[Leseni ya Apache 2.0](LICENSE)