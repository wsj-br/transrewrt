---
translated_at: "2026-03-25T21:14:13.930Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Gabay sa Gumagamit

<br/>

<a id="introduction"></a>
## Panimula

Nakatutulong ang Transrewrt sa paggamit ng teksto sa tatlong pangunahing paraan:

- **Isalin (Translate)** - i-convert ang teksto mula sa isang wika patungo sa isa pa.
- **Muling-isulat (Rewrite)** - baguhin ang pagkakabuo ng teksto sa iba't ibang istilo, tulad ng mas malinaw, mas maikli, o mas pormal.
- **Baguhin (Transform)** - proseso ang teksto gamit ang mga pasadyang AI na tagubilin na tinatawag na "mga prompt".

<br/>

Ipinapaliwanag ng gabay na ito kung paano gamitin ang app kapag nai-install at tumatakbo na ito. Para sa hakbang-hakbang na pag-install, tingnan ang pangunahing **[README](README.tl.md)**.

<br/>

> ℹ️ **TALA**<br/>
> Ang Transrewrt ay magagamit bilang desktop app para sa Windows at Linux, at bilang self-hosted web app. Ang gabay na ito ay nakatuon sa pang-araw-araw na paggamit ng app. Kung ang ilang bahagi ay para lamang sa isang bersyon, ito ay malinaw na minarkahan.

<small>**Basahin sa ibang wika:** [English (UK)](USER-GUIDE.tl.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Tala sa pagsasalin ng UI at dokumentasyon:** Ang lahat ng wika sa interface maliban sa orihinal na English (UK) ay isinalin gamit ang mga AI model; maaaring hindi tumpak o may mga kamalian ang mga salita.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Talaan ng Nilalaman** 

- [Bago mag-umpisa](#before-you-start)
  - [Paano makakuha ng libreng OpenRouter API key (desktop app)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Mga hakbang upang mag-umpisa](#getting-started)
- [Mga pangunahing bahagi ng window](#main-parts-of-the-window)
  - [Sidebar](#sidebar)
  - [Toolbar](#toolbar)
  - [Input at output na panel](#input-and-output-panels)
- [Isalin](#translate)
  - [Isalin ang teksto](#translate-text)
  - [Paggawa ng pagpili ng wika](#language-selection)
  - [Mga kapakipakinabang na setting sa pagsasalin](#helpful-translation-settings)
- [Muling-isulat](#rewrite)
- [Baguhin](#transform)
  - [Patakbuhin ang umiiral nang prompt](#run-an-existing-prompt)
  - [Kung wala pang mga prompt](#if-you-have-no-prompts-yet)
  - [Lumikha agad ng isang prompt](#create-a-prompt-quickly)
  - [I-edit ang isang prompt](#edit-a-prompt)
  - [Subukan ang isang prompt bago gamitin](#test-a-prompt-before-using-it)
- [Dashboard](#dashboard)
  - [I-filter ang datos](#filter-the-data)
  - [Mga tab sa dashboard](#dashboard-tabs)
  - [I-export ang datos](#export-data)
  - [Tanggalin ang naka-imbak na tala para sa isang modelo](#delete-stored-records-for-a-model)
- [Kasaysayan](#history)
  - [I-filter ang datos](#filter-the-data-1)
  - [I-export ang datos sa kasaysayan](#export-history-data)
- [Mga Setting](#settings)
  - [Pangkalahatang setting](#general-settings)
  - [Mga modelo](#models)
  - [Mga wika](#languages)
  - [Pagsusubaybay sa gastos](#cost-tracking)
  - [Mga prompt sa pagbabago](#transform-prompts)
  - [Mga gumagamit](#users)
  - [API config](#api-config)
  - [Tungkol dito](#about)
- [Karaniwang mga isyu](#common-issues)
  - [Hindi nagsasalin, muling-isinusulat o binabago ng app ang teksto](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Walang laman ang listahan ng mga modelo](#the-model-list-is-empty)
  - [Mabagal o sobrang mahal ang resulta](#the-result-is-too-slow-or-too-expensive)
  - [Nakasulat sa maling wika ang interface](#the-interface-is-in-the-wrong-language)
  - [Maliit o mahirap basahin ang teksto](#the-text-is-too-small-or-hard-to-read)
  - [Walang laman ang mga tsart sa dashboard](#dashboard-charts-are-empty)
  - [Nagpapakita ng "hindi available" o mali ang gastos](#cost-shows-not-available-or-seems-wrong)
  - [Hindi tugma ang kabuuang gastos sa bill ng nagbibigay ng serbisyo](#total-cost-does-not-match-my-provider-bill)
  - [Nawawala ang page ng Kasaysayan sa sidebar](#the-history-page-is-missing-from-the-sidebar)
  - [Web app: biglang naililigaw sa login page](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Walang datos para sa ibang gumagamit ang dashboard (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Nabago ko ang isang prompt at nawala ang mga pag-edit](#i-changed-a-prompt-and-lost-the-edits)
- [Mga mabilis na tip](#quick-tips)
- [Paalala](#disclaimer)
- [Lisensya](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Bago mag-umpisa

Para gamitin ang Transrewrt, kailangan mo ng access sa kahit isang AI provider. Ang mga suportadong provider ay: [OpenRouter](https://openrouter.ai) (na nag-aagregate ng maraming modelo), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, at [Ollama](https://ollama.com) para sa mga lokal na modelo.

Hindi mo kailangang pumili ng bayad na modelo upang simulan. Kapag inilagay mo na ang iyong OpenRouter API key, awtomatikong pinapagana ng app ang isang built-in na **libre** OpenRouter option. Pinapayagan ka nitong magsimulang mag-salin, muling-isulat, at baguhin ang teksto agad. Bilang alternatibo, maaari mo ring makuha ang libreng API key mula sa Cerebras, Google, Groq, o Mistral AI.

Mas payak na sabihin:

- Ang isang **modelo** ay ang AI engine na gumaganap ng gawain. Ang mga modelo ay nakalista na may **naka-prefix na provider** (halimbawa: `openrouter/…`, `openai/…`, `ollama/…`).
- Ang isang **API key** (o para sa Ollama, ang **base URL**) ang ginagamit ng app upang maabot ang provider.

Kung gumagamit ka ng **desktop app**, maglagay ng mga key sa [**Settings** > **API Config**](#api-config) para sa bawat ginagamit mong provider. Para sa OpenRouter lamang, tingnan ang [Paano makakuha ng API key](#how-to-get-an-api-key-desktop-app) sa ibaba. Kung ayaw mong gamitin ang API key, maaari mong i-install ang Ollama (mula sa [ollama.com](https://ollama.com)) at gamitin ang lokal na modelo, tulad ng `translategemma:4b`.

Kung gumagamit ka ng **web version**, ang server owner ang nagko-configure ng mga provider gamit ang environment variables, kaya hindi mo maaaring diretsahang ilagay ang mga API key sa loob ng application.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Paano makakuha ng libreng OpenRouter API key (desktop app)

Kung gumagamit ka ng desktop app, sundin ang mga hakbang na ito:

1. Pumunta sa [OpenRouter](https://openrouter.ai) sa iyong web browser.
2. Gumawa ng account o mag-sign in.
3. Buksan ang pahina ng [Keys](https://openrouter.ai/keys).
4. I-click ang button para lumikha ng bagong API key.
5. Bigyan ng pangalan ang key upang madaling makilala sa hinaharap.
6. Kopyahin ang bagong API key.
7. Bumalik sa Transrewrt at buksan ang **Settings** > **API Config**.
8. I-paste ang key sa **OpenRouter API key** (sa ilalim ng **Settings** > **API Config**).
9. I-click ang **Test OpenRouter key** upang tiyakin na gumagana ito.

<br/><br/>

<a id="getting-started"></a>
## Pagsisimula

Kung ito ang iyong unang pagkakataon na gumamit ng Transrewrt, sundin ang sumusunod na pagkakasunod-sunod:

1. Buksan ang app.
2. Pumili ng **wika ng Interface** mula sa icon ng mundo kung kinakailangan.
3. Kung gumagamit ka ng **desktop app**, buksan ang [**Settings** > **API Config**](#api-config), maglagay ng API key para sa kahit isang provider (halimbawa: OpenRouter), at i-click ang **Test** upang i-verify kung gumagana.
4. Buksan ang [**Settings** > **Models**](#models) at magdagdag ng isa o higit pang modelo sa **Selected Models**.
5. Buksan ang [**Settings** > **Languages**](#languages) at pumili ng iyong **Mga Top na wika** kung gusto mong unahin ang iyong mga pinakaginagamit na wika.
6. Pumunta sa **Translate** at gawin ang simpleng pagsasalin upang kumpirmahin na gumagana ang lahat.
7. Kapag gumana na, subukan ang **Rewrite** at pagkatapos ay ang **Transform**.

Mahalaga ang pagkakasunod-sunod na ito. Ito ay maiiwasan ang pinakakaraniwang problema sa unang paggamit: subukang patakbuhin ang isang gawain bago pa man may gumaganang API connection o napiling modelo ang app.

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

Gamitin ang sidebar upang makagalaw sa loob ng app. Maaari mong ilipat sa tabi ang sidebar para mas maraming espasyo sa pamamagitan ng pag-click sa icon sa tabi ng logo ng app.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/tl/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Translate</strong> – buksan ang workspace para sa pagsasalin.</li><br/>
        <li><strong>Rewrite</strong> – buksan ang workspace para sa pagkopya ulit.</li><br/>
        <li><strong>Transform</strong> – buksan ang workspace para sa custom na prompt.</li><br/>
        <li><strong>Dashboard</strong> – ipinapakita ang impormasyon tungkol sa paggamit at gastos.</li><br/>
        <li><strong>Settings</strong> – buksan ang panel ng mga setting.</li><br/>
        <li><strong>History</strong> – ipinapakita ang kasaysayan ng paggamit kasama ang input at output na teksto.</li><br/>
        <li><strong>User</strong> – ipinapakita ang username ng naka-log in na user (web lamang).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Toolbar

Ang toolbar ay bahagyang nagbabago depende sa kung nasaan ka sa app.

- Sa kaliwa, ipinapakita nito ang pangalan ng kasalukuyang pahina.
- Sa kanan, ipinapakita nito ang **pang-selector ng modelo** at ang **kontrol ng wika ng interface**.

Ang **pang-selector ng modelo** ay nagbibigay-daan sa iyo na pumili kung aling AI engine ang gagamitin para sa kasalukuyang gawain.

  ![Model selector](../images/screenshots/tl/model-selector.png)

Maaaring hindi lagi available ang ilang libreng modelo—kung minsan ay offline ang mga ito o may limitasyon sa paggamit. Kung mangyari ito, awtomatikong alisin ng app ang naturang modelo sa iyong listahan ng available. Para kontrolin kung aling mga modelo ang lilitaw, pumunta sa [**Settings** > **Models**](#models) at i-edit ang iyong listahan ng modelo.  
Maaari mo ring buksan nang direkta ang mga setting ng modelo sa pamamagitan ng pag-click sa icon ng provider sa kaliwa ng pangalan ng modelo sa toolbar.

<br/>

Ang **ikon ng mundo + code ng wika** ay nagbabago sa wika ng interface ng app, tulad ng mga menu at button. Hindi nito binabago ang mga wikang ginagamit sa pagsasalin sa **Translate**.

  ![Interface language selector](../images/screenshots/tl/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Mga panel ng input at output

Karamihan sa mga workspace ay gumagamit ng kaliwang panel na **Input** at kanang panel na **Output**.

Ang bawat panel ay nagpapakita rin ng:

| **Input**                                                          | **Output**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Bilang ng karakter <br/>- Bilang ng salita <br/>- Bilang ng talata   <br/> | - Gaano katagal ang gawain<br/>- **TPS** (tokens kada segundo)<br/>- Bilang ng karakter, salita, at talata<br/>- Ang modelo na ginamit |


Kung nagtatanong ka tungkol sa mga teknikal na termino:

- Ang **Token** ay nangangahulugang maliit na bahagi ng teksto. Maaari mong iisipin ito bilang bahagi ng isang salita o maikling salita.
- Ang **TPS** ay nangangahulugang kung ilang mga bahagi ng teksto ang na-process ng modelo kada segundo.

<br/>

Maaari mo ring subaybayan ang gastos ng bawat operasyon (kung available) at ang kabuuang gastos, sa pamamagitan ng pag-activate ng opsyon na `Show cost information on the actions` sa [**Settings** > **General settings**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Salin

Gumamit ng **Translate** kapag nais mong i-convert ang teksto mula sa isang wika papunta sa isa pa.

![Translate workspace](../images/screenshots/tl/translate.png)

<br/>

<a id="translate-text"></a>
### I-salin ang teksto

1. Buksan ang **Translate**.
2. Pumili ng wika sa **From**.
3. Pumili ng wika sa **To**.
4. Pumili ng modelo sa toolbar.
5. I-type o i-paste ang teksto sa **Input**.
6. Pindutin ang **Translate**.
7. Basahin ang resulta sa **Output**.
8. Gamitin ang button na copy kung gusto mong kopyahin ang resulta.

<br/>

<a id="language-selection"></a>
### Pagpili ng wika

- Maaaring tiyak na wika o **Detect Language** ang **From**.
- Ang **To** ay ang wika kung saan mo gustong lumabas ang resulta.

Ang iyong napiling **Top languages** ay lilitaw sa tuktok ng listahan. Maaari mong itakda ang mga ito sa [**Settings** > **Languages**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Mga kapaki-pakinabang na setting sa pagsasalin

Sa [**Settings** > **General Settings**](#general-settings), maaari mong baguhin kung paano gumagana ang pagsasalin:

- Ang **Auto-translate on paste** ay mang-aactivate ng pagsasalin pagkatapos mong i-paste ang teksto.
- Ang **Auto-copy result to clipboard** ay kukuhanin nang awtomatiko ang resulta pagkatapos ng matagumpay na pagsasalin.
- Ang **Real-time translation (while typing)** ay mang-aactivate ng pagsasalin habang nagta-type ka.
- Ang **Timeout (ms)** ay nagko-control kung gaano katagal hihintayin ng app bago mag-run ng real-time translation.
- Ang **Enter** ay nagdi-determine kung ano ang mangyayari kapag pinindot mo ang `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Muling Isulat

Gamitin ang **Rewrite** kapag gusto mong mapabuti ang pagkakasulat nang hindi binabago ang pangunahing kahulugan.

![Rewrite workspace](../images/screenshots/tl/rewrite.png)

Mainam ito para sa:

- pag-aayos ng pagbaybay at gramatika
- paggawa ng teksto na mas malinaw
- paggawa ng teksto na mas pormal o mas di-pormal
- pagpapahabang o pagpapaikli ng teksto
- pagpapataas ng antas ng teknikalidad ng teksto

<br/>

> 💡 **TIP**<br/>
> Kapag gumamit ka ng mode na "**Check Spelling & Grammar**", lilitaw ang button na `Show changes` sa output panel.
> I-click ang button na ito para i-toggle ang display ng mga pagkakamali, na nagpapakita o nagtatago sa mga partikular na pagbabago sa iyong teksto.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Ibigay ang Bagong Anyo

Gumamit ng **Ibigay ang Bagong Anyo** kapag gusto mong sundin ng AI ang isang pasadyang set ng mga tagubilin.

![Ibigay ang Bagong Anyo workspace](../images/screenshots/tl/transform.png)

Ito ang pinaka-malayang bahagi ng app. Maaari mo itong gamitin sa mga gawain tulad ng:

- pagbuod ng mga tala
- pagpapaganda ng isang payak na teksto upang maging isang mahusay na email
- pagkuha ng mga pangunahing punto
- pagbabago ng teksto sa isang tiyak na format
- anumang iba pang pasadyang gawain sa input na teksto

<br/>

<a id="run-an-existing-prompt"></a>
### Patakbuhin ang umiiral na prompt

1. Buksan ang **Ibigay ang Bagong Anyo**.
2. Pumili ng isang prompt mula sa listahan ng mga prompt.
3. Kung may lumitaw na kahon para sa **Wika ng Layunin**, pumili ng wika kung kailangan mo.
4. I-type o i-paste ang teksto sa **Input**.
5. I-click ang **Ibigay ang Bagong Anyo**.
6. Basahin ang resulta sa **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Kung wala ka pang mga prompt

Kung walang laman ang iyong listahan ng mga prompt, i-click ang **Ikarga ang mga halimbawang prompt**. Dadagdagan nito ang mga halimbawa na kasama na sa app upang mabilis mong masimulan.

<br/>

> ℹ️ **TALA**<br/>
> Ang mga halimbawang prompt ay nasa Ingles. Pagkatapos mong i-load ang mga ito, maaari mong i-edit ang isang prompt at gamitin ang **Isalin ang prompt** para maisalin ito sa iyong wika.

<br/>

<a id="create-a-prompt-quickly"></a>
### Gumawa ng prompt nang mabilis

Ang pinakamabilis na paraan para lumikha ng prompt ay:

1. I-click ang **Bagong prompt**.
2. I-click ang **Bumuo ng prompt**.
3. Ilarawan kung ano ang nais mong gawin ng prompt.
4. Pumili ng isang modelo.
5. Hayaan ang app na lumikha ng isang draft para sa iyo.
6. Suriin ang draft at i-click ang **I-save**.

![Bumuo ng prompt](../images/screenshots/tl/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### I-edit ang isang prompt

Kapag gumagawa o nag-eedit ka ng prompt, ang editor ay lilitaw sa kaliwa at isang lugar para subukan ang prompt nasa kanan.

![Ibigay ang Bagong Anyo prompt editor](../images/screenshots/tl/transform-prompt-edit.png)

Ang mga pangunahing field ay:

- **Pangalan ng prompt**: ang pangalan na ipinapakita sa listahan ng mga prompt.
- **Mga tagubilin sa prompt (opsyonal)**: isang maikling tulong na ipinapakita sa user kapag tinatakbo ang prompt.
- **Tungkulin ng Modelo**: ang pangkalahatang papel na iginagawad sa AI, tulad ng 'Ikaw ay isang kapaki-pakinabang na katulong.'
- **Mga Tagubilin sa Modelo (isa bawat hanay)**: ang tiyak na mga alituntunin na gusto mong sundin ng AI.
- **Paglalarawan ng output**: isang maikling salita na naglalarawan sa resulta, tulad ng 'buod' o 'muling pagsulat'.
- **Temperature (0.0 → 1.0)**: kung paano kumikilos ang modelo; tingnan sa ibaba.
- **Magtanong para sa wika ng layunin**: nagdaragdag ng pumili ng wika ng layunin kapag pinatatakbo ang prompt.

Kung bago sa iyo ang teknikal na terminong **Temperature**, isipin mo ito nang ganito:

- Ang **mas mababa** ang temperatura ay nagbibigay ng mas matatag at mas maasahan na mga resulta.
- Ang **mas mataas** ang temperatura ay nagbibigay ng mas maraming pagkakaiba at malikhain.

Maaari mo ring gamitin ang:

- **`Bumuo ng prompt`** upang lumikha ng bagong draft mula sa simpleng paglalarawan
- **`Pahusayin ang prompt`** upang mapabuti ang umiiral nang prompt
- **`Isalin ang prompt`** upang maisalin ang mga field ng prompt

<br/>

> ⚠️ **BABAALA**<br/>
> I-click ang **`I-Save`** bago mo i-click ang **`Bumalik sa Pagpatakbo`**. Kung babalik ka nang walang pag-save, mawawala ang iyong mga pagbabago.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Subukan ang prompt bago gamitin

Ang panel ng pagsusuri sa kanan ay nagbibigay-daan sa iyo na subukan ang iyong prompt gamit ang sample na teksto bago mo ito gamitin sa araw-araw na gawain.

Makakatulong ito kapag:

- bumubuo ka ng bagong prompt
- ihahambing mo ang dalawang bersyon ng isang prompt
- nais mong suriin ang tono, haba, o format ng output

<br/>

> ℹ️ **TALA**<br/>
> Maaari mong i-export at i-import ang mga nai-save na prompt sa [**Mga Setting** > **Mga Transform na Prompt**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Dashboard

Gumamit ng **Dashboard** upang makita kung gaano mo ginagamit ang app at kung magkano ang gastos nito (para sa mga bayad na modelo).

![Buod ng Dashboard](../images/screenshots/tl/dashboard-summary.png)


<br/>

> ℹ️ **TALA**<br/>
> Kung gumagamit ka lamang ng libreng modelo, walang laman ang mga graph na may kinalaman sa gastos.

<br/>

<a id="filter-the-data"></a>
### I-filter ang mga datos

Gumamit ng mga pindutan ng filter sa itaas upang baguhin ang saklaw ng oras.

![Mga filter ng Dashboard](../images/screenshots/tl/dashboard-filter.png)

<br/>

> ℹ️ **TALA**<br/>
> Ang filter na **User** ay nakikita lamang ng mga administrator sa bersyon sa web. Ang karaniwang mga user ay hindi makakakita ng filter na ito, at hindi rin ito available sa desktop app.

<br/>

<a id="dashboard-tabs"></a>

### Mga tab ng Dashboard

- Ang **Buod** ay nagbibigay ng pangkalahatang-ideya tungkol sa paggamit at gastos.
- Ang **Ayos sa Paggamit** ay nagpapakita ng mga gawain na pinaghiwalay ayon sa wika ng pagsasalin, mode ng pagbabago, at prompt para sa pagbabago.
- Ang **Ayos sa Modelo** ay nagpapakita kung anong mga modelo ang iyong ginamit at kung magkano ang kanilang gastos.
- Ang **Ayos sa Araw** ay nagtatampok ng kabuuang gastos bawat araw.
- Ang **Lahat ng Tawag** ay nagpapakita ng kompletong kasaysayan ng mga tawag at nagbibigay-daan sa iyo na i-export ito.

<br/>

<a id="export-data"></a>
### I-export ang datos

Ang mga talahanayan sa dashboard ay maaaring mag-export ng datos sa:

- **JSON**
- **CSV**
- **XLSX**

Makakatulong ito kung gusto mong tingnan ang mga gawain nang hindi nakakabit sa app o kung ibabahagi mo ang isang ulat.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Burahin ang naka-imbak na tala para sa isang modelo

Sa **Ayos sa Modelo** o **Lahat ng Tawag**, maaari mong alisin ang naka-imbak na tala para sa isang modelo sa pamamagitan ng pag-click sa “trash bin” na icon.

> ⚠️ **BABALA**<br/>
> Ang pagbura sa naka-imbak na tala ay hindi maiuulit. Gamitin lamang ito kung sigurado ka nang hindi mo na kailangan ang kasaysayang iyon.

Para i-delete ang lahat ng datos o alisin ang mga tala batay sa kanilang edad, pumunta sa [**Settings** > **Cost Tracking**](#cost-tracking). Doon makikita mo ang mga opsyon para i-delete ang lahat ng naka-imbak na datos o mga datos na mas matanda kaysa isang tiyak na petsa.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Kasaysayan

I-click ang **Kasaysayan** para makita ang kasaysayan ng iyong mga gawain sa loob ng **Transrewrt**, kasama ang input at output ng bawat operasyon. 

![Pahina ng Kasaysayan](../images/screenshots/tl/history.png)

<br/>

<a id="filter-the-history"></a>
### Pag-filter sa datos

Gumagamit ang **Kasaysayan** ng parehong mga filter tulad ng **Dashboard** pahina. Gamitin mo ang mga ito para pumili ng saklaw ng oras.

![Mga filter sa Dashboard](../images/screenshots/tl/dashboard-filter.png)

<br/>

> ℹ️ **PAUNAWA**<br/>
> Ang filter na **User** ay nakikita lamang ng mga administrador sa web na bersyon. Hindi ito makikita ng karaniwang gumagamit, at wala ito sa desktop app.

<br/>

<a id="export-history-data"></a>
### I-export ang datos ng kasaysayan

Ang pahina ng kasaysayan ay maaaring mag-export ng nafilter na datos sa:

- **JSON**
- **CSV**
- **XLSX**

Makakatulong ito kung gusto mong suriin ang mga gawain nang palabas sa app o ibahagi ang isang ulat.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Mga Setting

Buksan ang **Mga Setting** mula sa sidebar para i-customise ang pagkiyos ng app.

Ang mga magagamit na tab ay nakadepende sa platform at sa iyong tungkulin:

  | Tab               | Desktop | Web (admin) | Web (karaniwang gumagamit) |
  |-------------------|:-------:|:-----------:|:--------------------------:|
  | Mga Pangkalahatang Setting  |   oo   |     oo     |        oo         |
  | Mga Modelo            |   oo   |     oo     |        oo         |
  | Mga Wika         |   oo   |     oo     |        oo         |
  | Pagsubaybay sa Gastos     |   oo   |     oo     |         —          |
  | Mga Prompt sa Pagbabago |   oo   |     oo     |        oo         |
  | Mga Gumagamit             |    —    |     oo     |         —          |
  | API Config        |   oo   |     oo     |         —          |
  | Tungkol            |   oo   |     oo     |        oo         |

<br/>

> ℹ️ **PAUNAWA**<br/>
> Sa bersyon ng web, bawat gumagamit ay may sariling configuration. Ang mga setting tulad ng napiling modelo, wika, pangkalahatang opsyon, at mga prompt sa pagbabago ay iniimbak bawat gumagamit. Ang anumang pagbabago mo ay hindi makaapekto sa ibang mga gumagamit.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Mga pangkalahatang setting

Gamitin ang **Mga Pangkalahatang Setting** para kontrolin ang pag-uugali ng pagpi-print, kung iniimbak ang detalye ng pagpapatakbo para sa **Kasaysayan**, at sa hitsura ng interface.

**Pag-uugali**

- **Pag-uugali ng ENTER** ay pipili kung ang `Enter` ay papatakbuhin ang gawain o mag-i-insert ng bagong linya.
- **Auto-salin kapag binibihis** ay magsisimulang isalin agad-agad pagkalagay mo ng teksto.
- **Auto-kopya ng resulta sa clipboard** ay awtomatikong kukuhanin ang matagumpay na resulta.
- **Real-time na pagsasalin (habang nagta-type)** ay isinasalin habang ikaw ay nagta-type.
- **Timeout (ms)** ay nagtatakda ng oras ng paghihintay para sa real-time na pagsasalin.

**Kasaysayan**

- **Ipanatili ang kasaysayan ng pagpapatakbo** ay nagkukontrol kung ang bawat salin, pagbabago, at pagbabago ng prompt ay mag-iimbak ng **input at output na teksto** para sa [**Kasaysayan**](#history) sa sidebar. Ang pag-off dito ay magtatanong ng kumpirmasyon; kung ikukumpirma mo, ang mga naka-imbak na teksto ng kasaysayan ay tatanggalin mula sa database.
- **Tanggalin ang datos ng kasaysayan** ay nagbibigay-daan na alisin ang mga naka-imbak na teksto batay sa edad (hal. mas matanda kaysa ilang buwan, o **lahat ng datos (linisin)**) gamit ang **Tanggalin ang datos**. Limitado lang ito sa mga na-save na teksto ng pagpapatakbo para sa tignan sa **Kasaysayan**; **hindi** ito tinatanggal ang datos tungkol sa gastos o kabuuang paggamit. Para alisin o putulin ang datos ng **gastos**, gamitin ang [**Settings** > **Cost Tracking**](#cost-tracking).

**Hitsura**

- **Ipakita ang impormasyon ng gastos sa mga gawain** ay kinokontrol ang pagpapakita ng gastos bawat operasyon (kung available) at kabuuang gastos sa mga panel ng output para sa Salin, Pagbabago, at Pagbabago ng tekstura.
- **Cost fraction digits** ay nagbabago kung paano ipapakita ang mga desimal ng gastos.
- **Web lang:** **ipakita ang margin sa paligid ng app** ay nagdadagdag ng extra na puwang paligid ng interface.
- **Pamilya ng Font** ay nagbabago sa font ng teksto sa mga panel.
- **Laki** ay nagbabago sa laki ng font.


<br/>

<a id="models"></a>

### Mga Modelo

Gamitin ang **Mga Setting** > **Mga Modelo** upang pumili kung aling mga modelo ang lalabas sa toolbar.

![Mga tab ng mga setting ng modelo](../images/screenshots/tl/settings-models.png)

Ang pahina ay may dalawang listahan:

- **Mga Available na Modelo** sa kaliwa
- **Mga Napiling Modelo** sa kanan

Kasama ang mga kapaki-pakinabang na kontrol tulad ng:

- **Hanapin ang mga modelo...** upang hanapin ang isang modelo batay sa pangalan
- Mga **chip ng Provider** upang paikliin ang listahan sa isang engine (OpenRouter, OpenAI, Ollama, …)
- **Libre Lamang** upang ipakita ang mga libreng modelo lamang
- **I-refresh** upang i-load muli ang listahan
- **Palawakin Lahat** at **I-collapse Lahat** kapag nagso-sort ayon sa provider

Ang mga id ng modelo ay kasama ang prefix ng provider (halimbawa `openrouter/…` laban sa `openai/…`). Ang mga badge tulad ng **OpenAI (OpenRouter)** laban sa **OpenAI (direkta)** ay nagpapakita kung paano na-ruroute ang trapiko.

> ℹ️ **PAUNAWA**<br/>
> Ang **OpenRouter Body Builder** (`openrouter/bodybuilder`) ay isang router model, hindi isang pangkalahatang chat model: ang kanyang tugon ay JSON na naglalarawan sa OpenRouter API request bodies (halimbawa ay isang `requests` array na may `model` at `messages`). Kung gagamitin mo ito para sa **Isalin**, **Muling Isulat**, o **Baguhin**, ipapakita ng output panel ang JSON sa halip na natapos na teksto. Pumili ng normal na text model para sa mga gawaing ito. Tingnan ang [pahina ng Body Builder model](https://openrouter.ai/openrouter/bodybuilder) sa OpenRouter.

Mga Aksyon:

 - Para magdagdag ng isang modelo, i-click ang **Idagdag** o kahit saan sa entri.

 - Para tanggalin ang isang modelo, i-click ang **X** sa tabi nito sa **Mga Napiling Modelo** o **Napili** sa entri sa Mga Available na Modelo.

 - Para i-clear ang listahan, i-click ang **Huwag Piliin ang Lahat**. Ang kailangang libreng modelo ay mananatili pa rin sa listahan.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Kung hindi mo agad gustong magdagdag ng credits sa OpenRouter, magsimula sa pamamagitan ng pag-activate ng **Libre Lamang** at pumili ng mga libreng modelo (walang kinakailangang credit card). Maaari mo ring gamitin ang Ollama upang patakbuhin ang mga modelo nang lokal nang walang anumang API key.

<br/>

<a id="languages"></a>
### Mga Wika

Gamitin ang **Mga Setting** > **Mga Wika** upang ayusin ang mga listahan ng wika na ginagamit sa app.

- Ang **Mga Nangungunang Wika** ay nakapirmi sa tuktok ng mga listahan ng wika sa **Isalin** at **Baguhin**.
- Ang **Pasadyang Wika** ay nagbibigay-daan upang magdagdag ng wika na hindi kasama sa listahan.

Kung magdagdag ka ng pasadyang wika, ito ay lalabas sa mga selector ng wika kasama ang mga built-in na opsyon.

<br/>

<a id="cost-tracking"></a>
### Pagsubaybay sa Gastos

Gamitin ang **Mga Setting** > **Pagsubaybay sa Gastos** upang pamahalaan ang impormasyon ng gastos.

- **Kabuuang Gastos** ay nagpapakita ng kabuuang running total.
- **Kopyahin ang Halaga** ay kumokopya sa kabuuan sa clipboard.
- **I-reset ang Gastos** ay ini-reset ang naka-imbak na kabuuan sa zero.
- **I-sync ang Gastos sa Paggamit ng API Key** ay nagtatakda sa kabuuan upang tumugma sa paggamit na iniulat ng iyong OpenRouter account (OpenRouter lamang).
- **Paggamit ng API Key** ay nagpapakita ng mga detalye ng OpenRouter, kung available.
- **Tanggalin ang datos ng gastos** ay tinatanggal ang lahat ng datos, o mga entry lamang na mas matanda kaysa sa napiling petsa.

**Pagsubaybay sa gastos:** Kapag gumagamit ka ng mga modelo ng OpenRouter, ipinapakita ng app ang iyong aktwal na paggamit at paggastos batay sa impormasyon ng gastos mula sa OpenRouter. Para sa lahat ng iba pang mga provider, hinuhulaan ng app ang mga gastos gamit ang mga presyo na inilathala ng OpenRouter; kung hindi available ang presyo, baka zero ang pagtatantiya.

<br/>

> ℹ️ **PAUNAWA**<br/>
> **Lahat ng mga halaga ng gastos ay mga pagtatantiya lamang para sa iyong sanggunian, hindi opisyales na pahayag ng singil.**

<br/>

> ⚠️ **BABALA**<br/>
> Ang pagtanggal ng datos ay hindi maibabalik. Bago tanggalin, siguraduhin na i-back up ang iyong datos o i-export ito sa pamamagitan ng [**Kasaysayan**](#history) o [**Dashboard** > **Lahat ng Tawag**](#dashboard-tabs), kung hindi man ito ay mawawala na permanente. Ang lahat ng kasaysayan ng input/output na kaugnay sa bawat entry ng tawag sa API ay matatanggal din.

<br/>

<a id="transform-prompts"></a>
### Mga prompt sa Pagbabagong-anyo

Gamitin ang **Mga Setting** > **Mga Prompt sa Pagbabago** para pamahalaan ang mga prompt nang sabay-sabay.

Maaari mong:

- suriin ang mga naka-save mong prompt
- tanggalin ang mga prompt
- i-import ang mga prompt mula sa isang file
- i-export ang mga prompt para sa backup o pagbabahagi

<br/>

<a id="users"></a>
### Mga Gumagamit

Gamitin ang **Mga Gumagamit** upang pamahalaan ang mga account ng gumagamit sa web na bersyon. Maaari kang magdagdag ng mga gumagamit, i-update ang kanilang mga detalye, i-reset ang mga password, at tanggalin ang mga account.

<br/>

<a id="api-config"></a>
### Pagsasaayos ng API

Ang mga suportadong provider ay: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, at **Ollama** (mga lokal na modelo sa pamamagitan ng base URL). Kailangan mo lamang i-configure ang mga provider na ginagamit mo.

**Web application: administrator lamang**

Ang mga API key ay ini-configure sa pamamagitan ng system o Docker environment variables — hindi ito ini-enter sa web UI. Ang pahinang ito ay nagpapakita kung aling mga provider ang may naka-configure na key at nagbibigay-daan sa iyo na subukan ang bawat isa sa pamamagitan ng pag-click sa pindutang **`Subukan`**.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Upang baguhin ang isang API key, i-update ang environment variable sa iyong sistema o pagsasaayos ng Docker at i-restart ang server o container.

<br/>

**Desktop application**

Gamitin ang **API Config** upang mag-imbak ng mga API key para sa bawat gumagamit na provider. Para sa Ollama, ipasok ang **base URL** sa halip na isang API key.

<br/>

> 💡 **Tip** <br/>
> Kung hindi mo gustong gumamit ng API key o magbayad para sa paggamit, maaari kang [i-download ang Ollama](https://ollama.com) at patakbuhin ang mga modelo (tulad ng `translategemma:4b`) nang lokal sa iyong makina nang libre. Bilang kahalili, maaari kang gumawa ng libreng OpenRouter account (walang kinakailangang credit card) upang gamitin ang kanilang libreng mga modelo, o kumuha ng libreng API key mula sa Cerebras, Google, Groq, o Mistral AI.

<br/>

- Magdagdag lamang ng mga provider na kailangan mo. Sa **Mga Setting** > **Mga Modelo**, ang bawat id ng modelo ay nagsisimula sa provider (halimbawa `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Upang magdagdag ng isang API key, ipasok ang halaga sa text field at i-click ang **`I-save`**. Upang palitan ang umiiral na key, i-click ang **`I-edit`**. Upang i-verify na gumagana ang key, i-click ang **`Subukan`**. Para sa Ollama base URL, laging i-click ang **`Subukan`** upang i-check ang koneksyon.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Hindi mo maaaring tingnan ang kasalukuyang halaga ng isang API key. Maaari mo lamang palitan ito gamit ang pindutang **`I-edit`**.
> Ang mga API key ay naka-imbak nang naka-encrypt sa pagsasaayos.

<br/>

<a id="about"></a>

### Tungkol

Ang tab na **Tungkol** ay nagpapakita ng:

- pangalan ng app
- numero ng bersyon
- petsa ng pagbuo
- link sa repository ng proyekto

<br/><br/>

<a id="common-issues"></a>
## Karaniwang Isyu

Kung may isyu sa pag-andar, suriin muna ang mga sumusunod.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Hindi maipapapalit, maipapalit ang salita, o baguhin ang teksto ang app

Suriin ang mga sumusunod:

- napili mo ang isang modelo sa toolbar
- may kahit isang modelo sa [**Mga Setting** > **Mga Modelo**](#models)
- gumagana ang iyong API setup

Kung gumagamit ka ng desktop app:

1. Buksan ang [**Mga Setting** > **API Config**](#api-config).
2. Tiyaking may nakasave nang kahit isang API key.
3. I-click ang **Test** sa tabi ng provider upang kumpirmahin na gumagana ang key.

<br/>

<a id="the-model-list-is-empty"></a>
### Walang laman ang listahan ng modelo

Buksan ang [**Mga Setting** > **Mga Modelo**](#models) at i-click ang **I-refresh**.

Kung kinakailangan:

- maghanap ng modelo
- i-on ang **Free Only**
- idagdag ang kahit isang modelo sa **Napiling Mga Modelo**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Mabagal o mahal ang resulta

Subukan ang isa o higit pa sa mga sumusunod:

- pumili ng ibang modelo
- gumamit ng mas maikling input
- i-off ang **Real-time translation (habang nagtatatype)** sa [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings)
- gamitin ang libreng mga modelo para sa simpleng mga gawain (tingnan [Mga Modelo](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Hindi tamang wika ang interface

I-click ang icon ng mundo sa [toolbar](#toolbar) at pumili ng iyong gusto **wika ng interface**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Napakaliit o mahirap basahin ng teksto

Buksan ang [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings) at baguhin:

- **Pamilya ng Font**
- **Sukat**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Walang laman ang mga graph sa dashboard

Normal ito kapag:

- gumagamit ka lamang ng **libreng mga modelo** (ang graph ng gastos ay blanko)
- ang napiling **time filter** ay hindi sumasaklaw sa panahon kung kailan nagsagawa ng mga tawag — subukan ang **Lahat** upang suriin

Kung patuloy na walang laman ang mga graph pagkatapos piliin ang **Lahat**, kumpirmahin kung nakalista ang mga tawag sa [**Kasaysayan**](#history) o sa tab na **Lahat ng Tawag**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Nagpapakita ng "hindi available" o mukhang mali ang gastos

Kapag gumagamit ka ng mga modelo sa pamamagitan ng **OpenRouter**, ipinapakita ng app ang tunay mong ginastos na iniulat ng OpenRouter.

Para sa **mga ibang provider** (OpenAI direct, Anthropic direct, atbp.), ang gastos ay isang pagtataya batay sa mga nai-publish na presyo ng OpenRouter. Kung walang tumutugmang presyo para sa isang modelo, ang gastos ay ipapakita bilang **hindi available** at hindi idaragdag sa kabuuang gastos mo.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Hindi tugma ang kabuuang gastos sa bill ng aking provider

Ang lahat ng halaga ng gastos sa app ay mga **pagtataya para sa reperensya lamang**, at hindi opisyales na pahayag ng singil.

Upang ilapit ang kabuuan sa tunay mong ginastos sa OpenRouter, buksan ang [**Mga Setting** > **Cost Tracking**](#cost-tracking) at i-click ang **Sync with API key usage**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Nawawala ang pahina ng History sa tabi

Maaaring **hindi pinagana ang pag-iimbak ng kasaysayan ng pagpapalit**. Buksan ang [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings) at paganahin ito. Tandaan na ang pag-on dito ay hindi ibabalik ang mga dating inalis na datos ng kasaysayan.

<br/>

<a id="web-app-session-expired"></a>
### Web app: inilipat papunta sa pahina ng pag-login nang hindi inaasahan

Maaaring natapos ang session mo. Muling mag-login. Kung madalas nangyari ito, suriin ang configuration ng server para sa mga setting ng haba ng session.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Walang datos ang dashboard para sa ibang user (web)

Tanging ang **mga administrator** lamang ang maaaring tingnan ang datos ng lahat ng user sa pamamagitan ng **User filter**. Ang karaniwang user ay nakikita lamang ang kanilang sariling gawain bilang disenyo.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Binago ko ang prompt at nawala ang mga pag-edit

Kapag nag-e-edit ng prompt, siguraduhing i-click **I-save** bago i-click ang **Bumalik sa Run**.

<br/><br/>

<a id="quick-tips"></a>
## Mga Mabilis na Tip

- Simulan sa [**Isalin**](#translate) upang masiguro na gumagana ang iyong setup bago lumipat sa [**Muling-isulat**](#rewrite) o [**Baguhin**](#transform).
- Gamitin ang [**Muling-isulat**](#rewrite) para sa pang-araw-araw na pagpapabuti sa mga salita.
- Gamitin ang [**Baguhin**](#transform) kailangan mo ng paulit-ulit na workflow para sa isang tiyak na gawain.
- Gamitin ang [**Dashboard**](#dashboard) kung gusto mong subaybayan ang paggamit at gastos.
- Gamitin ang [**Kasaysayan**](#history) upang repasuhin ang nakaraang operasyon at ang buong input/output nito.
- I-export ang mga prompt nang regular kung nagtatayo ka ng library ng mga prompt na gusto mong panatilihing ligtas (tingnan [Mga Transform na Prompt](#transform-prompts)) o kung gusto mong ibahagi sa iba.

<br/><br/>

<a id="disclaimer"></a>

## Paunawa

Ang mga pangalan ng produkto at mga icon ay pag-aari ng kaukulang may-ari at ginagamit lamang para sa layuning pagkilala. Ang software na ito ay hindi kaugnay o pinagkakatiwalaan ng anumang mga brand na binanggit.

<br/><br/>

<a id="license"></a>
## Lisensya

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)