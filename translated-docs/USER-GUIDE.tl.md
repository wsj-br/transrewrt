---
translated_at: "2026-03-24T01:23:01.974Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Gabay sa Gumagamit

<br/>

<a id="introduction"></a>
## Panimula

Tinutulungan ka ng Transrewrt na magtrabaho sa teksto sa tatlong pangunahing paraan:

- **Isalin** - i-convert ang teksto mula sa isang wika patungo sa isa pa.
- **Muling isulat** - baguhin ang paraan ng pagkaka-parafrase sa teksto, tulad ng mas malinaw, mas maikli, o mas pormal.
- **Baguhin** - i-proseso ang teksto gamit ang mga pasadyang AI na tagubilin na tinatawag na mga prompt.

<br/>

Ipapaliwanag ng gabay na ito kung paano gamitin ang app kapag nainstall at tumatakbo na ito. Para sa mga hakbang sa pag-install, tingnan ang pangunahing **[README](README.tl.md)**.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Magagamit ang Transrewrt bilang desktop app para sa Windows at Linux, at bilang isang self-hosted web app. Tumutuon ang gabay na ito sa pang-araw-araw na paggamit ng app. Kung may kinalaman lamang ang isang bagay sa isang bersyon, malinaw itong tinatak.

<small>**Basahin sa ibang mga wika:** [English (UK)](USER-GUIDE.tl.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Talamang ng Nilalaman** 

- [Bago simulan](#bago-simulan)
  - [Paano makakuha ng libreng OpenRouter API key (desktop app)](#paano-makakuha-ng-libreng-openrouter-api-key-desktop-app)
- [Magsimula na](#magsimula-na)
- [Mga pangunahing bahagi ng window](#mga-pangunahing-bahagi-ng-window)
  - [Sidebar](#sidebar)
  - [Toolbar](#toolbar)
  - [Mga panel para sa input at output](#mga-panel-para-sa-input-at-output)
- [Isalin](#isalin)
  - [Isalin ang teksto](#isalin-ang-teksto)
  - [Pagpili ng wika](#pagpili-ng-wika)
  - [Makakatulong na mga setting sa pagsasalin](#makakatulong-na-mga-setting-sa-pagsasalin)
  - [Mga keyboard shortcut](#mga-keyboard-shortcut)
- [Muling Isulat](#muling-isulat)
  - [Muling isulat ang teksto](#muling-isulat-ang-teksto)
- [Baguhin](#baguhin)
  - [I-run ang umiiral nang prompt](#i-run-ang-umiiral-nang-prompt)
  - [Kung wala ka pang mga prompt](#kung-wala-ka-pang-mga-prompt)
  - [Gumawa ng prompt nang mabilisan](#gumawa-ng-prompt-nang-mabilisan)
  - [I-edit ang prompt](#i-edit-ang-prompt)
  - [Subukan ang prompt bago gamitin](#subukan-ang-prompt-bago-gamitin)
  - [Pamahalaan ang naka-save na mga prompt](#pamahalaan-ang-naka-save-na-mga-prompt)
- [Dashboard](#dashboard)
  - [I-filter ang data](#i-filter-ang-data)
  - [Mga tab sa dashboard](#mga-tab-sa-dashboard)
  - [I-export ang data](#i-export-ang-data)
  - [Tanggalin ang naka-imbak na mga tala para sa modelo](#tanggalin-ang-naka-imbak-na-mga-tala-para-sa-modelo)
- [Kasaysayan](#kasaysayan)
  - [I-filter ang data](#i-filter-ang-data-1)
  - [I-export ang data sa kasaysayan](#i-export-ang-data-sa-kasaysayan)
- [Mga Setting](#mga-setting)
  - [Mga pangkalahatang setting](#mga-pangkalahatang-setting)
  - [Mga modelo](#mga-modelo)
  - [Mga wika](#mga-wika)
  - [Pagsubaybay sa gastos](#pagsubaybay-sa-gastos)
  - [Mga prompt sa pagbabago](#mga-prompt-sa-pagbabago)
  - [Mga gumagamit](#mga-gumagamit)
  - [Pag-setup ng API](#pag-setup-ng-api)
  - [Tungkol dito](#tungkol-dito)
- [Karaniwang Suliranin](#karaniwang-suliranin)
  - [Hindi mailipat, muling maisulat, o mabagoh ang teksto ng app](#hindi-mailipat-muling-maisulat-o-mabagoh-ang-teksto-ng-app)
  - [Walang laman ang listahan ng modelo](#walang-laman-ang-listahan-ng-modelo)
  - [Masyadong dahan-dahan o mahal ang resulta](#masyadong-dahan-dahan-o-mahal-ang-resulta)
  - [Nasa maling wika ang interface](#nasa-maling-wika-ang-interface)
  - [Maliit o mahirap basahin ang teksto](#maliit-o-mahirap-basahin-ang-teksto)
  - [Walang laman ang mga graph sa dashboard](#walang-laman-ang-mga-graph-sa-dashboard)
  - [Nagpapakita ng "hindi available" o mali ang gastos](#nagpapakita-ng-hindi-available-o-mali-ang-gastos)
  - [Hindi tugma ang kabuuang gastos sa bill ng aking provider](#hindi-tugma-ang-kabuuang-gastos-sa-bill-ng-aking-provider)
  - [Nawawala ang pahina ng Kasaysayan sa sidebar](#nawawala-ang-pahina-ng-kasaysayan-sa-sidebar)
  - [Web app: biglang nailigaw sa pahina ng login](#web-app-biglang-inailigaw-sa-pahina-ng-login)
  - [Walang data para sa ibang user ang ipinapakita ng dashboard (web)](#walang-data-para-sa-ibang-user-ang-iphone-indicates-dashboard-web)
  - [Nagbago ako ng prompt at nawala ang edits](#nagbago-ako-ng-prompt-at-nawala-ang-edits)
- [Mga Mabilis na Tip](#mga-mabilis-na-tip)
- [Pahina sa Pagtatanggi](#pahina-sa-pagtatanggi)
- [Lisensya](#lisensya)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Bago magsimula

Para gamitin ang Transrewrt, kailangan mo ng access sa kahit isang AI provider. Ang mga suportadong provider ay: [OpenRouter](https://openrouter.ai) (nagpopondok ng maraming modelo), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, at [Ollama](https://ollama.com) para sa lokal na modelo.

Hindi mo kailangang pumili ng bayad na modelo para magsimula. Pagkatapos mong idagdag ang iyong OpenRouter API key, awtomatikong pinapagana ng app ang isang naka-built-in na **libre** na OpenRouter option. Nito, maaari ka nang magsimulang sumalin, muling isulat, at baguhin ang teksto.

Nang mas madaling salita:

- Ang isang **modelo** ay ang AI engine na gumaganap ng trabaho. Ang mga modelo ay nakalista na may **prefix ng provider** (halimbawa `openrouter/…`, `openai/…`, `ollama/…`).
- Ang isang **API key** (o para sa Ollama, ang **base URL**) ay ang paraan ng app para makontak ang provider.

Kung gumagamit ka ng **desktop app**, magdagdag ng mga key sa [**Mga Setting** > **Pangkahayag ng API**](#api-config) para sa bawat provider na gagamitin mo. Para sa paggamit ng OpenRouter lamang, tingnan ang [Paano makakuha ng API key](#how-to-get-an-api-key-desktop-app) sa ibaba. Kung ayaw mong gamitin ang API key, maaari mong i-install ang Ollama (mula sa [ollama.com](https://ollama.com)) at gamitin ang lokal na modelo.

Kung gumagamit ka ng **web na bersyon**, ang server owner ang nagko-configure ng mga provider gamit ang mga environment variable, kaya hindi mo kailangang maglagay ng API key.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Paano makakuha ng libreng OpenRouter API key (desktop app)

Kung gumagamit ka ng desktop app, sundin ang mga hakbang na ito:

1. Pumunta sa [OpenRouter](https://openrouter.ai) gamit ang iyong web browser.
2. Gumawa ng account o mag-sign in.
3. Buksan ang pahina ng [Mga Key](https://openrouter.ai/keys).
4. I-click ang button para gumawa ng bagong API key.
5. Bigyan mo ng pangalan ang key para maalala mo ito sa susunod.
6. Kopyahin ang bagong API key.
7. Bumalik sa Transrewrt at buksan ang **Mga Setting** > **Pangkahayag ng API**.
8. I-paste ang key sa **OpenRouter API key** (sa ilalim ng **Mga Setting** > **Pangkahayag ng API**).
9. I-click ang **Subukan ang OpenRouter key** upang masiguro na gumagana ito.

<br/>

> ℹ️ **TANDAAN**<br/>
> Maaari kang magsimula sa libreng ruta ng OpenRouter o anumang iba pang libreng modelo nang walang pagdagdag ng credit card. Sa maraming kaso, sapat na iyon para magsimulang gamitin ang Transrewrt nang hindi pa pumipili ng bayad na modelo. Bilang kahalili, maaari mong gamitin ang Ollama upang patakbuhin ang mga modelo nang lokal nang walang anumang API key.

<br/><br/>

<a id="getting-started"></a>
## Simula

Kung ito ang unang pagkakataon mong gamitin ang Transrewrt, sundin mo ang pagkakasunud-sunod na ito:

1. Bungkalin ang app.
2. Pumili ng iyong **wika sa interface** sa pamamagitan ng icon ng mundo kung kinakailangan.
3. Kung nasa **desktop app** ka, buksan mo ang [**Settings** > **API Config**](#api-config), magdagdag ng API key para sa kahit isang provider (halimbawa ang OpenRouter), at i-click ang **Test** upang paganahin na gumagana ito.
4. Buksan ang [**Settings** > **Mga Modelo**](#models) at idagdag ang isa o higit pang modelo sa **Mga Piniling Modelo**.
5. Buksan ang [**Settings** > **Mga Wika**](#languages) at pumili ng iyong **Nangungunang mga wika** kung gusto mong lumabas muna ang iyong pinakaginagamit na mga wika.
6. Pumunta sa **Isalin** at i-run ang simpleng pagsasalin upang kumpirmahin na gumagana ang lahat.
7. Kapag gumana na, subukan ang **Muling Isulat** at pagkatapos ay ang **Baguhin**.

Mahalaga ang pagkakasunud-sunod na ito. Pinipigilan nito ang pinakakaraniwang problema, ang pagsubok na gawin ang isang gawain bago pa gumagana ang API connection o ang napiling modelo.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Mga pangunahing bahagi ng window

Hinati ang app sa tatlong pangunahing bahagi:

- Ang **sidebar** sa kaliwa.
- Ang **toolbar** sa itaas.
- Ang **work area** sa gitna.

<br/>

<a id="sidebar"></a>
### Sidebar

Gumamit ng sidebar upang maggalaw sa loob ng app. Maaari mong ikulong ang sidebar para magkaroon ng mas maraming puwang sa pamamagitan ng pag-click sa icon katabi ng logo ng app.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/tl/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Isalin</strong> ay bubukas sa workspace ng pagsasalin.</li><br/>
        <li><strong>Muling Isulat</strong> ay bubukas sa workspace ng pagkakasulat muli.</li><br/>
        <li><strong>Baguhin</strong> ay bubukas sa workspace ng pasadyang prompt.</li><br/>
        <li><strong>Dashboard</strong> ay nagpapakita ng impormasyon tungkol sa paggamit at gastos.</li><br/>
        <li><strong>Mga Setting</strong> ay bubukas sa panel ng mga setting.</li><br/>
        <li><strong>Kasaysayan</strong> ay nagpapakita ng kasaysayan ng paggamit na may input at output na teksto</li><br/>
        <li><strong>User</strong> ay nagpapakita ng username ng naka-log-in na user (sa web lamang).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Toolbar

Ang toolbar ay kaunti lamang nagbago depende sa kung saan ka nasa loob ng app.

- Sa kaliwa, ipinapakita nito ang pangalan ng kasalukuyang pahina.
- Sa kanan, ipinapakita nito ang **pumili ng modelo** at kontrol para sa **Wika ng Interface**.

Ang **pumili ng modelo** ay nagbibigay-daan sa iyo na pumili kung aling AI engine ang gagamitin para sa kasalukuyang gawain.

  ![Pumili ng modelo](../images/screenshots/tl/model-selector.png)

> ℹ️ **TALA**<br/>
> Ang ilang libreng modelo ay hindi laging available—minsa'y offline sila o may limitasyon sa paggamit. Kung mangyari ito, awtomatikong aalisin ng app ang modelong ito sa iyong listahan.<br/>
> Para kontrolin kung aling mga modelo ang makikita, pumunta sa [**Settings** > **Models**](#models) at baguhin ang iyong listahan ng modelo. 
> Maaari mo ring buksan nang direkta ang mga setting ng modelo sa pamamagitan ng pag-click sa icon ng provider sa kaliwa ng pangalan ng modelo sa toolbar.

<br/>

Ang **globe icon + wika code** ay nagbabago ng wika ng interface ng app, tulad ng mga menu at button. Hindi nito binabago ang mga wikang isinasalin sa **Salin**.

  ![Pumili ng wika ng interface](../images/screenshots/tl/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Input at output panels

Karamihan sa mga workspace ay gumagamit ng nasa kaliwang **Input** panel at nasa kanang **Output** panel.

Ang **Input** panel ay nagpapakita ng:

- Bilang ng karakter
- Bilang ng salita
- Bilang ng talata

Ang **Output** panel ay maaaring magpakita ng:

- Suhulon kung gaano katagal ang gawain
- Ang gastos ng gawain (kung available)
- Kabuuang gastos mo
- **TPS** (mga token kada segundo)
- Bilang ng karakter, salita, at talata
- Ang modelo na ginamit

Kung naiisip mo ang mga teknikal na termino:

- **Token** ay nangangahulugang isang maliit na bahagi ng teksto. Maaari mong isipin ito bilang bahagi ng isang salita o isang maikling salita.
- **TPS** ay nangangahulugan ng kung gaano karaming mga bahaging teksto ang naproseso ng modelo sa bawat segundo.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Isalin

Gamitin ang **Isalin** kapag gusto mong i-convert ang isang teksto mula sa isang wika patungo sa isa pa.

![Salin workspace](../images/screenshots/tl/translate.png)

<br/>

<a id="translate-text"></a>
### Isalin ang teksto

1. Buhayin ang **Salin**.
2. Pumili ng wika sa **Mula sa**.
3. Pumili ng wika sa **Patungo sa**.
4. Pumili ng modelo sa toolbar.
5. I-type o i-paste ang teksto sa **Input**.
6. I-click ang **Isalin**.
7. Basahin ang resulta sa **Output**.
8. Gamitin ang pindutan ng kopya kung gusto mong kopyahin ang resulta.

<br/>

<a id="language-selection"></a>
### Pagpili ng wika

- **Mula sa** ay maaaring partikular na wika o **Tukuyin ang Wika**.
- **Patungo sa** ay ang wika na gusto mong maging resulta.

Ang napiling iyong **Nangungunang mga wika** ay lilitaw sa tuktok ng listahan. Maaari mong itakda ito sa [**Settings** > **Languages**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Mga kapaki-pakinabang na setting sa pagsasalin

Sa [**Settings** > **General Settings**](#general-settings), maaari mong baguhin kung paano gumagana ang pagsasalin:

- **Awtomatikong isalin kapag kinopya** ay magpapatakbo ng pagsasalin ng agad kapag ikaw ay nakapag-paste ng teksto.
- **Awtomatikong kopyahin ang resulta sa clipboard** ay awtomatikong kokopyahin ang resulta pagkatapos ng matagumpay na pagpapatakbo.
- **Real-time na pagsasalin (habang nagtatype)** ay magpapatakbo ng pagsasalin habang nagtatatype ka.
- **Timeout (ms)** ay kontrol kung gaano katagal maghihintay ang app bago magpatakbo ng real-time na pagsasalin.

<br/>

<a id="keyboard-shortcuts"></a>
### Mga keyboard shortcut

Sa [**Settings** > **General Settings**](#general-settings), ang **Pag-uugali para sa ENTER** ay kontrolin kung ano ang mangyayari kapag pinindot mo ang `Enter`:

- Ang **Enter** ay maaaring magpatakbo ng gawain at ang **Shift+Enter** ay maaaring magdagdag ng bagong linya.
- O kaya maaaring gawin ng app ang kabaligtaran.

Ipapakita rin ang kasalukuyang mode sa **Salin** na pindutan.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Muling-isulat

Gamitin ang **Muling-isulat** kapag gusto mong mapabuti ang pagkakasulat nang hindi binabago ang pangunahing kahulugan.

![Rewrite workspace](../images/screenshots/tl/rewrite.png)

Makakatulong ito sa:

- pag-ayos ng pagbaybay at gramatika
- paggawa ng teksto na mas malinaw
- paggawa ng teksto na mas pormal o di-pormal
- pagliit o pagpapalawak ng teksto
- paggawa ng teksto na mas mukhang teknikal

<br/>

<a id="rewrite-text"></a>

### Muling isulat ang teksto

1. Buksan ang **Muling Isulat (Rewrite)**.
2. Pumili ng **Paraan (Mode)**.
3. Pumili ng isang modelo sa toolbar.
4. I-type o i-paste ang teksto sa **Input**.
5. I-click ang **Muling Isulat (Rewrite)**.
6. Suriin ang resulta sa **Output**.

Gumagana rin dito ang parehong Enter key na nabanggit sa [**Isalin (Translate)**](#keyboard-shortcuts).

<br/>

> 💡 **TIP**<br/>
> Kapag ginamit mo ang "**I-check ang Eja at Bantas**" na paraan, lumilitaw ang pindutan na `Ipakita ang mga pagbabago` sa output panel.
> I-click ang pindutang ito para ipakita o itago ang mga partikular na pagbabago sa iyong teksto.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## Baguhin (Transform)

Gumamit ng **Baguhin (Transform)** kapag gusto mong sundin ng AI ang isang pasadyang set ng mga tagubilin.

![Baguhin (Transform) workspace](../images/screenshots/tl/transform.png)

Ito ang pinakamalayang bahagi ng app. Maaari mo itong gamitin sa mga gawain tulad ng:

- pagsusuma ng mga tala
- pagbabago ng mga di-pormal na teksto sa nakahanay na email
- pagkuha ng mga pangunahing punto
- pagbabago ng teksto sa isang tiyak na format

<br/>

<a id="run-an-existing-prompt"></a>
### Patakbuhin ang umiiral nang prompt

1. Buksan ang **Baguhin (Transform)**.
2. Pumili ng isang prompt mula sa listahan ng prompt.
3. Kung lumitaw ang **Target** na kahon ng wika, pumili ng wika kung gusto mo.
4. I-type o i-paste ang teksto sa **Input**.
5. I-click ang **Baguhin (Transform)**.
6. Basahin ang resulta sa **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Kung wala pang anumang prompt

Kung walang laman ang iyong listahan ng prompt, i-click ang **Mag-load ng mga halimbawang prompt**. Idaragdag nito ang mga built-in halimbawa para mabilis kang makapagsimula.

<br/>

> ℹ️ **TANDAAN**<br/>
> Ang mga halimbawang prompt ay ibinibigay sa wikang Ingles. Matapos maidagdag ang mga ito, maaari mong baguhin ang isang prompt at gamitin ang **Isalin ang Prompt** upang isalin ito sa iyong wika.

<br/>

<a id="create-a-prompt-quickly"></a>
### Gumawa ng prompt nang mabilisan

Pinakamabilis na paraan para gumawa ng prompt:

1. I-click ang **Bagong Prompt**.
2. I-click ang **Bumuo ng Prompt**.
3. Ipaliwanag kung ano ang nais mong gawin ng prompt.
4. Pumili ng isang modelo.
5. Hayaan ang app na bumuo ng draft para sa iyo.
6. Suriin ang draft at i-click ang **I-save**.

![Bumuo ng Prompt](../images/screenshots/tl/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### I-edit ang isang prompt

Kapag gumawa o gumawa ng prompt, lumilitaw ang editor sa kaliwa at ang test area naman sa kanan.

![Baguhin (Transform) prompt editor](../images/screenshots/tl/transform-prompt-edit.png)

Ang mga pangunahing field ay:

- **Pangalan ng prompt**: ang pangalan na ipinapakita sa listahan ng prompt.
- **Mga Tagubilin sa Prompt (opsyonal)**: maikling tulong na ipinapakita sa user kapag pinapagana ang prompt.
- **Tungkulin ng Modelo**: ang pangkalahatang papel na nakatalaga sa AI, tulad ng 'Ikaw ay isang mapaglingkod na kasamahan.'
- **Mga Tagubilin sa Modelo (isa bawat linya)**: mga tiyak na alituntunin na dapat sundin ng AI.
- **Deskripsyon ng Output**: maikling salita na naglalarawan sa resulta, tulad ng 'buod' o 'muling pagsusulat'.
- **Temperature (0.0 → 1.0)**: kung paano kikilos ang modelo; tingnan sa ibaba.
- **Humingi ng wika ng target**: idinadagdag ang selector ng wika ng target kapag pinapagana ang prompt.

Kung bago sa iyo ang teknikal na terminong **Temperature**, isipin mo ito:

- Ang **mas mababang** temperature ay nagbibigay ng mas matatag at higit na maasahang resultado.
- Ang **mas mataas** na temperature ay nagbibigay ng mas maraming pagkakaiba at pagkamalikhain.

Maaari mo ring gamitin:

- **`Bumuo ng Prompt`** upang lumikha ng bagong draft mula sa simpleng deskripsyon
- **`Pabutihin ang Prompt`** upang paunlarin ang umiiral na prompt
- **`Isalin ang Prompt`** upang isalin ang mga field ng prompt

<br/>

> ⚠️ **BABALA**<br/>
> I-click ang **`I-save`** bago pindutin ang **`Bumalik sa Paggawa`**. Kung babalik ka nang hindi iyon iko-save, mawawala ang iyong mga pagbabago.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Subukan ang prompt bago gamitin

Ang test panel sa kanan ay nagbibigay-daan sa iyo na subukan ang iyong prompt gamit ang sample na teksto bago gamitin ito sa araw-araw na trabaho.

Makakatulong ito kapag:

- gumagawa ka ng bagong prompt
- inihahambing mo ang dalawang bersyon ng prompt
- gusto mong suriin ang tono, haba, o format ng output

<br/>

<a id="manage-saved-prompts"></a>
### Pamahalaan ang mga na-save na prompt

Para pamahalaan ang mga na-save na prompt sa isang lugar, buksan ang [**Mga Setting** > **Mga Prompt sa Pagbabago (Transform Prompts)**](#transform-prompts).

Doon, maaari mong:

- tingnan at tanggalin ang iyong mga prompt
- ilabas ang mga prompt bilang **JSON**, **CSV**, o **XLSX**
- i-import ang mga prompt mula sa isang file

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Dashboard

Gumamit ng **Dashboard** upang makita kung gaano karaming beses mo ginagamit ang app at kung magkano ang gastos nito (para sa mga bayad na modelo).

![Buod ng Dashboard](../images/screenshots/tl/dashboard-summary.png)


<br/>

> ℹ️ **TALA**<br/>
> Kung gumagamit ka lamang ng libreng mga modelo, ang mga tsart na may kinalaman sa gastos ay magiging blangko.

<br/>

<a id="filter-the-data"></a>
### I-filter ang data

Gumamit ng mga pindutan ng filter sa itaas upang baguhin ang saklaw ng oras.

![Mga filter ng Dashboard](../images/screenshots/tl/dashboard-filter.png)

<br/>

> ℹ️ **TALA**<br/>
> Ang filter na **User** ay nakikita lamang ng mga administrator sa bersyon ng web. Hindi makikita ng karaniwang gumagamit ang filter na ito, at hindi ito available sa desktop app.

<br/>

<a id="dashboard-tabs"></a>
### Mga tab ng Dashboard

- Ang **Summary** ay nagbibigay ng pangkalahatang-ideya tungkol sa paggamit at gastos.
- Ang **By Usage** ay nagpapakita ng detalye batay sa wika ng pagsasalin, rewrite mode, at transform prompt.
- Ang **By Model** ay nagpapakita kung aling mga modelo ang iyong ginamit at kung magkano ang gastos nito.
- Ang **By Day** ay nagpapakita ng kabuuang araw-araw.
- Ang **All Calls** ay nagpapakita ng kompletong kasaysayan ng mga tawag at nagbibigay-daan upang i-export ito.

<br/>

<a id="export-data"></a>
### I-export ang data

Maaaring i-export ng mga table sa dashboard ang data sa:

- **JSON**
- **CSV**
- **XLSX**

Makakatulong ito kung gusto mong suriin ang aktibidad sa labas ng app o ibahagi ang isang ulat.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Alisin ang naka-imbak na tala para sa isang modelo

Sa **By Model** o **All Calls**, maaari mong alisin ang naka-imbak na mga tala para sa isang modelo sa pamamagitan ng pag-click sa icon na "basurahan".

> ⚠️ **BABALA**<br/>
> Hindi maibabalik ang pag-alis ng naka-imbak na tala. Gamitin lamang ito kung sigurado kang hindi mo na kailangan ang kasaysayang iyon.

Upang tanggalin ang lahat ng data o alisin ang mga tala batay sa kanilang petsa, pumunta sa [**Settings** > **Cost Tracking**](#cost-tracking). Doon makikita mo ang mga opsyon para i-delete ang lahat ng naka-imbak na data o mga datos na mas matanda kaysa isang tiyak na petsa.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Kasaysayan

I-click ang **History** upang makita ang kasaysayan ng iyong mga aksyon sa loob ng **Transrewrt**, kabilang ang input at output ng bawat operasyon.

![Pahina ng History](../images/screenshots/tl/history.png)

<br/>

<a id="filter-the-history"></a>
### I-filter ang kasaysayan

Ginagamit ng **History** ang parehong mga filter ng pahina ng **Dashboard**. Gamitin mo ito upang piliin ang saklaw ng oras.

![Mga filter ng Dashboard](../images/screenshots/tl/dashboard-filter.png)

<br/>

> ℹ️ **TALA**<br/>
> Ang filter na **User** ay nakikita lamang ng mga administrator sa bersyon ng web. Hindi makikita ng karaniwang gumagamit ang filter na ito, at hindi ito available sa desktop app.

<br/>

<a id="export-history-data"></a>
### I-export ang data ng kasaysayan

Maaaring i-export ng pahina ng History ang nafilter na datos sa:

- **JSON**
- **CSV**
- **XLSX**

Makakatulong ito kung gusto mong suriin ang aktibidad sa labas ng app o ibahagi ang isang ulat.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Mga Setting

Buksan ang **Settings** mula sa sidebar upang ipasadya kung paano gumagana ang app.

Ang mga available na tab ay nakadepende sa platform at sa iyong tungkulin:

  | Tab               | Desktop | Web (admin) | Web (karaniwang gumagamit) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | General Settings  |   yes   |     yes     |        yes         |
  | Models            |   yes   |     yes     |        yes         |
  | Languages         |   yes   |     yes     |        yes         |
  | Cost Tracking     |   yes   |     yes     |         —          |
  | Transform Prompts |   yes   |     yes     |        yes         |
  | Users             |    —    |     yes     |         —          |
  | API Config        |   yes   |     yes     |         —          |
  | About             |   yes   |     yes     |        yes         |

<br/>

> ℹ️ **TALA**<br/>
> Sa bersyon ng web, bawat gumagamit ay may sariling configuration. Ang mga setting tulad ng napiling modelo, mga wika, pangkalahatang opsyon, at mga transform prompt ay iniimbak bawat gumagamit. Hindi maapektuhan ng mga pagbabagong ginawa mo ang iba pang mga gumagamit.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Pangkalahatang mga Setting

Gumamit ng **Pangkalahatang Mga Setting** para kontrolin ang pag-uugali sa pag-type, kung ang mga detalye ng pagpapatakbo ay iniimbak para sa **Kasaysayan**, at ang hitsura.

**Pag-uugali**

- **Pag-uugali para sa ENTER** ang pumipili kung ang `Enter` ay papatakbuhin ang gawain o mag-i-insert ng bagong linya.
- **Awtomatikong isalin sa pag-paste** ay nagsisimulang isalin agad-agad kapag kumopya ka ng teksto.
- **Awtomatikong i-copy ang resulta sa clipboard** ay awtomatikong kinokopya ang matagumpay na resulta.
- **Pagsasalin sa totoong oras (habang nag-tatype)** ay nagsasalin habang ikaw ay nagtatype.
- **Timeout (ms)** ay nakakustisya ng oras na hintayin para sa pagsasaling real-time.

**Kasaysayan**

- **Ipinagkakapalit ang kasaysayan ng pagpapatakbo** ay kontrol kung ang bawat isalin, muling pagsulat, at pagbabago ay nag-iimbak ng **input at output na teksto** para sa [**Kasaysayan**](#history) sa sidebar. Kung ito ay i-off, magtatanong muna para sa kumpirmasyon; kung ikaw ay kumumpirma, aalisin ang naka-imbak na teksto ng kasaysayan mula sa database.
- **Tanggalin ang datos ng kasaysayan** ay nagpapahintulot sa iyo na alisin ang naka-imbak na teksto batay sa edad (halimbawa, mga ilang buwan ang nakararaan, o **lahat ng data (malinis)**) gamit ang **Tanggalin ang Data**. Ito ay **tanging tumutugon** sa naka-save na teksto ng pagpapatakbo para sa **Kasaysayan**; _hindi_ ito tinatanggal ang kabuuang gastos o paggamit. Para alisin o bawasan ang **gastos**, gamitin ang [**Mga Setting** > **Pagsusubaybay sa Gastos**](#cost-tracking).

**Hitsura**

- **Mga digit sa bahaging gastos** ay nagbabago kung paano ipinapakita ang mga desimal sa gastos.
- **Para lang sa Web:** **ipakita ang margin sa paligid ng app** ay nagdaragdag ng karagdagang puwang sa paligid ng interface.
- **Pamilya ng Font** ay nagbabago sa font ng pag-type sa mga panel ng teksto.
- **Laki** ay nagbabago sa laki ng font.

<br/>

<a id="models"></a>
### Mga Modelo

Gamitin ang **Mga Setting** > **Mga Modelo** para pumili kung aling mga modelo ang lilitaw sa toolbar.

![Settings Models tab](../images/screenshots/tl/settings-models.png)

May dalawang listahan ang pahina:

- **Mga Available na Modelo** sa kaliwa
- **Napiling Mga Modelo** sa kanan

Kasama sa mga kapaki-pakinabang na kontrol:

- **Hanapin ang mga modelo...** para hanapin ang isang modelo batay sa pangalan
- Mga **Provider** chips para i-narrow ang listahan sa isang engine (OpenRouter, OpenAI, Ollama, ...)
- **Free Lamang** para ipakita ang mga libreng modelo lamang
- **I-refresh** para i-reload ang listahan
- **I-expand Lahat** at **I-collapse Lahat** kapag nagso-sort ayon sa provider

Ang mga model ID ay kasama ang provider prefix (halimbawa `openrouter/...` vs `openai/...`). Ang mga badge tulad ng **OpenAI (OpenRouter)** laban sa **OpenAI (direkta)** ay nagpapakita kung paano na-roroute ang trapiko.

Mga Aksyon:

 - Para magdagdag ng modelo, i-click ang **Idagdag** o kahit saan sa entry.

 - Para matanggal ang isang modelo, i-click ang **X** sa tabi nito sa **Napiling Mga Modelo** o **Napili** sa entry sa Mga Available na Modelo.

 - Para mai-clear ang listahan, i-click ang **Huwag Piliin ang Lahat**. Ang kailangang libreng modelo ay mananatili sa listahan.

<br/>

> ℹ️ **TANDAAN**<br/>
> Kung hindi mo gustong magdagdag ng credit agad sa OpenRouter, simulan na i-enable ang **Libre Lamang** at piliin ang mga walang bayad na modelo (walang credit card ang kailangan). Puwede ka ring gumamit ng Ollama para patatakbo ang mga modelo nang lokal nang walang anumang API key.

<br/>

<a id="languages"></a>
### Mga Wika

Gamitin ang **Mga Setting** > **Mga Wika** para ayusin ang mga listahan ng wika na ginagamit sa app.

- **Mga Nangungunang Wika** ay naka-pin malapit sa itaas ng mga listahan ng wika sa **Isalin** at **Baguhin**.
- **Pasadyang Wika** ay nagpapahintulot sa iyo na magdagdag ng wika na hindi kasama sa default na listahan.

Kung magdagdag ka ng isang pasadyang wika, lilitaw ito sa mga pumili ng wika kasama ang mga naka-build-in na opsyon.

<br/>

<a id="cost-tracking"></a>
### Pagsusubaybay sa Gastos

Gamitin ang **Mga Setting** > **Pagsusubaybay sa Gastos** para pamahalaan ang impormasyon sa gastos.

- **Kabuuang Gastos** ay nagpapakita ng kabuuang patuloy.
- **Kopyahin ang Halaga** ay kinokopya ang kabuuan sa clipboard.
- **I-reset ang Gastos** ay nai-reset ang naka-imbak na kabuuan sa zero.
- **I-sync ang Gastos sa API Key Usage** ay nagtatakda ng kabuuan upang tumugma sa paggamit na naiulat ng iyong OpenRouter account (OpenRouter lamang).
- **Paggamit ng API Key** ay nagpapakita ng detalye ng paggamit ng OpenRouter, kung available.
- **Tanggalin ang datos ng gastos** ay nag-aalis ng lahat ng datos, o tanging mga entry na mas lumang kaysa sa napiling petsa.

**Pagsusubaybay sa Gastos:** Kapag gumagamit ka ng mga modelo ng OpenRouter, ipinapakita ng app ang iyong aktwal na paggamit at gastusin batay sa mga datos mula sa OpenRouter. Para sa lahat ng iba pang mga provider, sinusuri ng app ang mga gastos gamit ang mga presyo na inilathala ng OpenRouter; kung hindi available ang presyo, maaaring maging zero ang pagtatantiya.

<br/>

> ℹ️ **TANDAAN**<br/>
> Ang **lahat ng mga numero ng gastos ay mga pagtatantiya lamang para sa iyong pagbabase, hindi opisyal na pahayag ng pagbili.**

<br/>

> ⚠️ **BABAALA**<br/>
> Ang pagtanggal ng datos ay hindi maisasagawa muli. Bago tanggalin, siguraduhing i-back up ang iyong datos o i-export ito sa pamamagitan ng [**Dashboard** > **Lahat ng Tawag**](#dashboard-tabs), kung hindi ay mawawala ito nang permanente. <br/>
> Ang lahat ng kasaysayan na may kinalaman sa bawat API call entry ay matatanggal din.

<br/>

<a id="transform-prompts"></a>

### I-transform ang mga prompt

Gumamit ng **Mga Setting** > **I-transform ang mga Prompt** para pamahalaan ang mga prompt nang sabay-sabay.

Maaari mong:

- suriin ang mga na-save mong prompt
- tanggalin ang mga prompt
- i-import ang mga prompt mula sa isang file
- i-export ang mga prompt para i-backup o i-share

<br/>

<a id="users"></a>
### Mga User

**Web: tagapangasiwa lamang**

Gumamit ng **Mga User** para pamahalaan ang mga user account sa bersyon ng web. Maaari kang magdagdag ng mga user, i-update ang kanilang mga detalye, i-reset ang mga password, at tanggalin ang mga account.

<br/>

<a id="api-config"></a>
### Konpigurasyon ng API

Ang mga suportadong provider ay: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, at **Ollama** (mga lokal na modelo sa pamamagitan ng base URL). Kailangan mo lang i-configure ang mga provider na gagamitin mo.

**Aplikasyon sa web: tagapangasiwa lamang**

Ang mga API key ay ini-configure sa pamamagitan ng mga system o Docker environment variables — hindi ito i-type sa web UI. Pinapakita ng pahinang ito kung aling mga provider ang may nakakonfigurang key at hinahayaan ka nitong subukan ang bawat isa sa pamamagitan ng pag-click sa pindutang **`Test`**.

<br/>

> ℹ️ **TANDAAN**<br/>
> Para baguhin ang isang API key, i-update mo ang environment variable sa iyong system o konpigurasyon ng Docker at i-restart ang server o container.

<br/>

**Aplikasyon sa desktop**

Gumamit ng **API Config** para iimbak ang mga API key para sa bawat provider na ginagamit mo. Para sa Ollama, i-type ang **base URL** sa halip na isang API key.


<br/>

> 💡 **Tip** <br/>
> Kung ayaw mong magamit ang isang API key o magbayad para sa paggamit, maaari kang [i-download ang Ollama](https://ollama.com) at i-run ang mga modelo nang lokal sa iyong makina nang libre. Bilang kahalili, maaari mong likhain ang isang libreng OpenRouter account (walang kinakailangang credit card) para gamitin ang kanilang libreng mga modelo.

- Magdagdag lamang ng mga provider na kailangan mo. Sa **Mga Setting** > **Mga Modelo**, ang bawat model id ay nagsisimula sa provider (halimbawa `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Para magdagdag ng isang API key, i-type mo ang halaga sa text field at i-click ang **`I-save`**. Para palitan ang umiiral nang key, i-click ang **`I-edit`**. Para i-check kung gumagana ang isang key, i-click ang **`Subukan`**.

<br/>

> ℹ️ **TANDAAN**<br/>
> Hindi mo makikita ang kasalukuyang halaga ng isang API key. Maaari mo lamang itong palitan gamit ang pindutang **`I-edit`**.
> Ang mga API key ay iniimbak nang naka-encrypt sa configuration file.

<br/>

Para sa detalyadong hakbang kung paano makakuha ng isang OpenRouter key, tingnan ang [Paano makakuha ng isang API key](#how-to-get-an-api-key-desktop-app) sa itaas.



<br/>

<a id="about"></a>
### Tungkol

Ipapakita ng tab na **Tungkol**:

- ang pangalan ng app
- ang numero ng bersyon
- petsa ng build
- link sa repository ng proyekto

<br/><br/>

<a id="common-issues"></a>
## Karaniwang mga isyu

Kung may hindi gumagana ayon sa inaasahan, una nang tingnan ang mga sumusunod.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Hindi naisasalin, ini-rerewrite, o i-tratransform ng app ang teksto

Suriin ang mga sumusunod:

- pinili mo na ang modelo sa toolbar
- nakalista ang kahit isang modelo sa [**Mga Setting** > **Mga Modelo**](#models)
- gumagana ang iyong API setup

Kung gumagamit ka ng desktop app:

1. Buksan ang [**Mga Setting** > **API Config**](#api-config).
2. Siguraduhing naka-save na ang kahit isang API key.
3. I-click ang **Subukan** sa tabi ng provider para kumpirmahing gumagana ang key.

<br/>

<a id="the-model-list-is-empty"></a>
### Walang laman ang listahan ng modelo

Buksan ang [**Mga Setting** > **Mga Modelo**](#models) at i-click ang **I-refresh**.

Kung kinakailangan:

- maghanap ng isang modelo
- i-on ang **Libre Lamang**
- magdagdag ng isa o higit pang modelo sa **Mga Napiling Modelo**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Mabagal o masyadong mahal ang resulta

Subukan ang isa o higit pang mga sumusunod:

- pumili ng ibang modelo
- gumamit ng mas maikling input
- i-off ang **Real-time na pagsasalin (habang nag-type)** sa [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings)
- gamitin ang mga libreng modelo para sa mga simpleng gawain (tingnan ang [Mga Modelo](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Hindi tamang wika ang ginagamit sa interface

I-click ang icon ng mundo sa [toolbar](#toolbar) at pumili ng iyong gustong **Wika sa Interface**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Napakaliit o mahirap basahin ang teksto

Buksan ang [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings) at baguhin ang:

- **Pamilya ng Font**
- **Laki**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Walang laman ang mga chart sa dashboard

Normal ito kung:

- gamit mo lamang ang **mga libreng modelo** (maga-magkakawala ang mga cost chart)
- ang napiling **filter sa oras** ay hindi sakop ang panahon kung kailan ginawa ang mga tawag — subukan ang **Lahat** para i-check

Kung wala pa rin ang mga chart pagkatapos piliin ang **Lahat**, kumpirmahing lumilitaw ang mga tawag sa [**Kasaysayan**](#history) o sa tab na **Lahat ng Tawag**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Ang gastos ay "hindi available" o mukhang mali

Kapag gumagamit ka ng mga modelo sa pamamagitan ng **OpenRouter**, ipinapakita ng app ang aktwal mong gastusin na iniulat ng OpenRouter.

Para sa **mga ibang provider** (OpenAI direktang, Anthropic direktang, atbp.), tinataya ang gastos batay sa mga presyong inilathala ng OpenRouter. Kung walang nahanap na tumutugmang presyo para sa isang modelo, ang gastos ay ipapakitang **hindi available** at hindi isasanib sa kabuuang gastos mo.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Ang kabuuang gastos ay hindi tugma sa bill ng aking provider

Ang lahat ng mga halaga ng gastos sa app ay **mga tinatayang halaga para sa reperensya lamang**, at hindi opisyal na mga pahayag ng pagbibilang.

Upang palapit na gawing tugma ang kabuuan sa iyong aktwal na gastos sa OpenRouter, buksan ang [**Mga Setting** > **Pagsasailalim ng Gastos**](#cost-tracking) at pindutin ang **I-sync sa paggamit ng API key**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Nawawala ang History page sa sidebar

Maaaring naka-off ang **Panatilihin ang kasaysayan ng pagpapatakbo**. Buksan ang [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings) at i-enable ito. Tandaan na ang pag-on dito ay hindi naibabalik ang dating natanggal na data ng kasaysayan.

<br/>

<a id="web-app-session-expired"></a>
### Web app: biglang binalik sa page ng pag-login

Maaaring lumagpas sa oras ang sesyon mo. Mag-login muli. Kung madalas itong nangyayari, suriin ang server configuration para sa mga setting ng haba ng sesyon.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Walang data na ipinapakita ang dashboard para sa ibang gumagamit (web)

Tanging ang **mga administrador** ang nakakakita ng data mula sa lahat ng gumagamit gamit ang filter na **Gumagamit**. Awtomatikong nakakakita ang karaniwang gumagamit lamang sa kanilang sariling gawain.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Nabago ko ang prompt at nawala ang mga pag-edit

Kapag nag-e-edit ng prompt, palaging pindutin ang **I-save** bago pindutin ang **Bumalik sa Run**.

<br/><br/>

<a id="quick-tips"></a>
## Mga mabilis na tips

- Magsimula sa [**Isalin**](#translate) upang matiyak na gumagana ang iyong setup bago ka lumipat sa [**Muling-isulat**](#rewrite) o [**Baguhin**](#transform).
- Gamitin ang [**Muling-isulat**](#rewrite) para sa pang-araw-araw na pagpapabuti ng mga salita.
- Gamitin ang [**Baguhin**](#transform) kapag kailangan mo ng paulit-ulit na workflow para sa isang partikular na gawain.
- Gamitin ang [**Dashboard**](#dashboard) kung nais mong bantayan ang paggamit at gastos.
- Gamitin ang [**Kasaysayan**](#history) upang suriin ang mga nakaraang operasyon at ang buong input/output text nito.
- I-export ang mga prompt nang regular kung gumagawa ka ng aklatan ng mga prompt na nais mong mapagkatiwalaan (tingnan ang [Baguhin ang mga Prompt](#transform-prompts)) o kung ibabahagi mo ito sa iba.

<br/><br/>

<a id="disclaimer"></a>
## Paunawa

Ang mga pangalan at mga icon ng produkto ay pag-aari ng kani-kanilang may-ari at ginagamit lamang para sa pagkilala. Ang software na ito ay hindi kaugnay o sinusuportahan ng alinman sa mga nabanggit na tatak.

<br/><br/>

<a id="license"></a>
## Lisensya

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)