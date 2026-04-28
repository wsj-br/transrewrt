---
translation_last_updated: '2026-04-28T00:51:14.802Z'
source_file_mtime: '2026-04-27T17:00:19.020Z'
source_file_hash: 253d03c03bd028d8119ce13e1d810e974a386f3e98054a9e750d5ecfbf1c76d0
translation_language: tl
source_file_path: USER-GUIDE.md
translation_models:
  - qwen/qwen3-235b-a22b-2507
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Gabay sa Gumagamit

<br/>

<a id="introduction"></a>
## Panimula

Tinutulungan ka ng Transrewrt na gumana sa teksto sa tatlong pangunahing paraan:

- **Isalin** - i-convert ang teksto mula sa isang wika patungo sa isa pa.
- **Rewrite** - i-rephrase ang teksto sa ibang istilo, tulad ng mas malinaw, mas maikli, o mas pormal.
- **Transform** - i-proseso ang teksto gamit ang mga pasadyang AI instruction na tinatawag na mga prompt.

<br/>

Inilalarawan ng gabay na ito kung paano gamitin ang app kapag naka-install at tumatakbo na ito. Para sa mga hakbang sa pag-install, tingnan ang pangunahing **[README](README.tl.md)**.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Ang Transrewrt ay magagamit bilang desktop app para sa Windows at Linux, at bilang self-hosted web app. Tumutuon ang gabay na ito sa pang-araw-araw na paggamit ng app. Kung may isang bagay na nalalapat lamang sa isang bersyon, malinaw itong minarkahan.

<small>**Basahin sa ibang mga wika:** </small>
<small id="lang-list">[English (GB)](../USER-GUIDE.md) · [Português (Brasil)](./USER-GUIDE.pt-BR.md) · [العربية](./USER-GUIDE.ar.md) · [বাংলা](./USER-GUIDE.bn.md) · [Català](./USER-GUIDE.ca.md) · [中文 (中国大陆)](./USER-GUIDE.zh-CN.md) · [中文 (台灣)](./USER-GUIDE.zh-TW.md) · [Hrvatski](./USER-GUIDE.hr.md) · [Čeština](./USER-GUIDE.cs.md) · [Nederlands](./USER-GUIDE.nl.md) · [English (US)](./USER-GUIDE.en-US.md) · [Tagalog](./USER-GUIDE.tl.md) · [Français](./USER-GUIDE.fr.md) · [Deutsch](./USER-GUIDE.de.md) · [Ελληνικά](./USER-GUIDE.el.md) · [हिन्दी](./USER-GUIDE.hi.md) · [Magyar](./USER-GUIDE.hu.md) · [Italiano](./USER-GUIDE.it.md) · [日本語](./USER-GUIDE.ja.md) · [한국어](./USER-GUIDE.ko.md) · [Bahasa Melayu](./USER-GUIDE.ms.md) · [فارسی](./USER-GUIDE.fa.md) · [Polski](./USER-GUIDE.pl.md) · [Basa Jawa](./USER-GUIDE.jv.md) · [Português](./USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](./USER-GUIDE.pa.md) · [Română](./USER-GUIDE.ro.md) · [Русский](./USER-GUIDE.ru.md) · [Slovenčina](./USER-GUIDE.sk.md) · [Español](./USER-GUIDE.es.md) · [Kiswahili](./USER-GUIDE.sw.md) · [Svenska](./USER-GUIDE.sv.md) · [తెలుగు](./USER-GUIDE.te.md) · [ไทย](./USER-GUIDE.th.md) · [Türkçe](./USER-GUIDE.tr.md) · [Українська](./USER-GUIDE.uk.md) · [Tiếng Việt](./USER-GUIDE.vi.md)</small>

<small>

> **Tala sa mga pagsasalin ng UI at dokumentasyon:** Ang lahat ng mga wika sa interface maliban sa orihinal na English (UK) 
> ay isinalin gamit ang mga AI model; maaaring hindi tumpak o may mga kamalian ang mga salin.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Talahanayan ng mga Nilalaman**

- [Bago magsimula](#before-you-start)
  - [Paano makakuha ng libreng OpenRouter API key (desktop app)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Mga simula](#getting-started)
- [Mga pangunahing bahagi ng window](#main-parts-of-the-window)
  - [Sidebar](#sidebar)
  - [Toolbar](#toolbar)
  - [Input at output panels](#input-and-output-panels)
- [Isalin](#translate)
  - [Isalin ang teksto](#translate-text)
  - [Pagpili ng wika](#language-selection)
  - [Mga kapaki-pakinabang na setting sa pagsasalin](#helpful-translation-settings)
- [I-rewrite](#rewrite)
- [I-transform](#transform)
  - [Patakbuhin ang umiiral nang prompt](#run-an-existing-prompt)
  - [Kung wala ka pang mga prompt](#if-you-have-no-prompts-yet)
  - [Gumawa ng prompt nang mabilisan](#create-a-prompt-quickly)
  - [I-edit ang prompt](#edit-a-prompt)
  - [Subukan ang prompt bago gamitin](#test-a-prompt-before-using-it)
- [Dashboard](#dashboard)
  - [I-filter ang data](#filter-the-data)
  - [Mga tab ng dashboard](#dashboard-tabs)
  - [I-export ang data](#export-data)
  - [Tanggalin ang naka-imbak na tala para sa isang modelo](#delete-stored-records-for-a-model)
- [Kasaysayan](#history)
  - [I-filter ang data](#filter-the-data-1)
  - [I-export ang data ng kasaysayan](#export-history-data)
- [Mga Setting](#settings)
  - [Pangkalahatang setting](#general-settings)
  - [Mga modelo](#models)
  - [Mga wika](#languages)
  - [Pagsusubay sa gastos](#cost-tracking)
  - [Mga prompt sa pagbabago](#transform-prompts)
  - [Mga user](#users)
  - [Config ng API](#api-config)
  - [Tungkol dito](#about)
- [Karaniwang isyu](#common-issues)
  - [Hindi nasisimulan ng app ang pagsasalin, pag-rewrite, o pagbabago ng teksto](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Walang laman ang listahan ng modelo](#the-model-list-is-empty)
  - [Mabagal o mahal ang resulta](#the-result-is-too-slow-or-too-expensive)
  - [Maling wika ang ginagamit sa interface](#the-interface-is-in-the-wrong-language)
  - [Maliit o mahirap basahin ang teksto](#the-text-is-too-small-or-hard-to-read)
  - [Walang laman ang mga graph sa dashboard](#dashboard-charts-are-empty)
  - [Nagpapakita ng "hindi available" ang gastos o mukhang mali](#cost-shows-not-available-or-seems-wrong)
  - [Hindi tugma ang kabuuang gastos sa bill ng provider](#total-cost-does-not-match-my-provider-bill)
  - [Nawawala ang History page sa sidebar](#the-history-page-is-missing-from-the-sidebar)
  - [Web app: biglang naililigaw sa login page](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Web admin: nakalimutan o nawala ang password](#web-admin-forgot-or-lost-a-password)
  - [Walang data para sa ibang user ang ipinapakita ng dashboard (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Binago ko ang isang prompt at nawala ang mga pag-edit](#i-changed-a-prompt-and-lost-the-edits)
- [Mga mabilis na tip](#quick-tips)
- [Paunawa](#disclaimer)
- [Lisensya](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Bago ka magsimula

Para magamit ang Transrewrt, kailangan mo ng access sa kahit isang AI provider. Ang mga suportadong provider ay: [OpenRouter](https://openrouter.ai) (na nag-aagregate ng maraming mga modelo), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, at [Ollama](https://ollama.com) para sa mga lokal na modelo.

Hindi mo kailangang pumili ng bayad na modelo para magsimula. Sa sandaling idagdag mo ang iyong OpenRouter API key, awtomatikong pinapagana ng app ang isang built-in na **libre** na OpenRouter option. Pinapayagan ka nitong magsimulang mag-translate, mag-rewrite, at mag-transform ng teksto agad. Bilang kahalili, maaari mo ring makuha ang libreng API key mula sa Cerebras, Google, Groq, o Mistral AI.

Sa simpleng salita:

- Ang isang **modelo** ay ang AI engine na gumagawa ng trabaho. Ang mga modelo ay nakalista na may **prefix ng provider** (halimbawa `openrouter/…`, `openai/…`, `ollama/…`).
- Ang isang **API key** (o, para sa Ollama, isang **base URL**) ay ang paraan kung paano maabot ng app ang provider.

Kung gumagamit ka ng **desktop app**, magdagdag ng mga key sa [**Settings** > **API Config**](#api-config) para sa bawat provider na iyong ginagamit. Para sa OpenRouter lamang, tingnan ang [Paano makakuha ng API key](#how-to-get-an-api-key-desktop-app) sa ibaba. Kung hindi mo gustong gamitin ang API key, maaari mong i-install ang Ollama (mula sa [ollama.com](https://ollama.com)) at gamitin ang mga lokal na modelo sa halip, tulad ng `translategemma:4b`.

Kung gumagamit ka ng **web version**, ang server owner ang nagko-configure ng mga provider gamit ang environment variables, kaya hindi mo maaaring direkta i-input ang mga API key sa application.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Paano makakuha ng libreng OpenRouter API key (desktop app)

Kung gumagamit ka ng desktop app, sundin ang mga hakbang na ito:

1. Pumunta sa [OpenRouter](https://openrouter.ai) sa iyong web browser.
2. Gumawa ng account o mag-sign in.
3. Buksan ang pahina ng [Mga Key](https://openrouter.ai/keys).
4. I-click ang button para lumikha ng bagong API key.
5. Bigyan ng pangalan ang key para madaling makilala sa susunod.
6. Kopyahin ang bagong API key.
7. Bumalik sa Transrewrt at buksan ang **Settings** > **API Config**.
8. I-paste ang key sa **OpenRouter API key** (sa ilalim ng **Settings** > **API Config**).
9. I-click ang **Test OpenRouter key** upang matiyak na gumagana ito.

<br/><br/>

<a id="getting-started"></a>
## Mga Simula

Kung ito ang iyong unang pagkakataon na gumamit ng Transrewrt, sundin ang pagkakasunod-sunod na ito:

1. Buksan ang app.
2. Piliin ang iyong **wika ng interface** mula sa icon ng mundo kung kinakailangan.
3. Kung gumagamit ka ng **desktop app**, buksan ang [**Settings** > **API Config**](#api-config), magdagdag ng API key para sa kahit isang provider (halimbawa OpenRouter), at i-click ang **Test** upang i-verify kung gumagana.
4. Buksan ang [**Settings** > **Models**](#models) at magdagdag ng isa o higit pang modelo sa **Selected Models**.
5. Buksan ang [**Settings** > **Languages**](#languages) at piliin ang iyong **Nangungunang mga wika** kung gusto mong unahin ang mga karaniwang gamitin mong wika.
6. Pumunta sa **Translate** at patakbuhin ang simpleng pagsasalin upang kumpirmahin na gumagana ang lahat.
7. Kapag gumana na, subukan ang **Rewrite** at pagkatapos ay **Transform**.

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

Gamitin ang sidebar upang mag-navigate sa loob ng app. Maaari mong i-collapse ang sidebar para mas maraming espasyo sa pamamagitan ng pag-click sa icon na katabi ng logo ng app.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/tl/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Isalin</strong> ay nagbubukas ng workspace para sa pagsasalin.</li><br/>
        <li><strong>Rewrite</strong> ay nagbubukas ng workspace para sa pag-rewriting.</li><br/>
        <li><strong>Transform</strong> ay nagbubukas ng workspace para sa custom prompt.</li><br/>
        <li><strong>Dashboard</strong> ay nagpapakita ng impormasyon tungkol sa paggamit at gastos.</li><br/>
        <li><strong>Mga Setting</strong> ay nagbubukas ng panel ng mga setting.</li><br/>
        <li><strong>Kasaysayan</strong> ay nagpapakita ng kasaysayan ng paggamit kasama ang input at tekstong output</li><br/>
        <li><strong>User</strong> ay nagpapakita ng username ng naka-log in na user (web lang).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Toolbar

Bahagyang nagbabago ang toolbar depende sa kung nasaan ka sa loob ng app.

- Sa kaliwa, ipinapakita nito ang pangalan ng kasalukuyang pahina.
- Sa kanan, ipinapakita nito ang **model selector** at ang kontrol para sa **Lengguwahe ng Interface**.

Ang **model selector** ay nagbibigay-daan sa iyo na pumili kung aling AI engine ang gagamitin para sa kasalukuyang gawain.

![Model selector](../images/screenshots/tl/model-selector.png)

Maaaring hindi laging available ang ilang libreng modelo—kung minsan ay offline ito o may limitasyon sa paggamit. Kung mangyari ito, awtomatikong aalisin ng app ang modelo mula sa iyong listahan ng available. Para kontrolin kung aling mga modelo ang lilitaw, pumunta sa [**Settings** > **Models**](#models) at i-edit ang iyong listahan ng modelo. 
Maaari mo ring buksan nang direkta ang mga setting ng modelo sa pamamagitan ng pag-click sa icon ng provider sa kaliwa ng pangalan ng modelo sa toolbar.

<br/>

Ang **ikon ng mundo + code ng wika** ay nagbabago sa lengguwahe ng interface ng app, tulad ng mga menu at mga button. Ito ay **hindi** nagbabago sa mga wikang ginagamit sa **Translation**.

![Interface language selector](../images/screenshots/tl/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Mga panel ng Input at Output

Karamihan sa mga workspace ay gumagamit ng **Input** panel sa kaliwa at **Output** panel sa kanan.

Ipapakita rin ng bawat panel ang:

| **Input**                                                          | **Output**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Bilang ng karakter <br/>- Bilang ng salita <br/>- Bilang ng talata   <br/> | - Gaano katagal ang gawain<br/>- **TPS** (mga token bawat segundo)<br/>- Bilang ng karakter, salita, at talata<br/>- Ang modelo na ginamit |

Kung nagtatanong ka tungkol sa mga teknikal na termino:

- Ang **Token** ay nangangahulugang maliit na bahagi ng teksto. Maaari mong iisipin ito bilang bahagi ng salita o isang maikling salita.
- Ang **TPS** ay nangangahulugang kung ilang mga bahagi ng teksto ang naproseso ng modelo bawat segundo.

<br/>

Maaari mo ring subaybayan ang gastos ng bawat operasyon (kung available) at ang kabuuang gastos, sa pamamagitan ng pag-enable ng opsyon `Show cost information on the actions` sa [**Settings** > **General settings**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Isalin

Gamitin ang **Translate** kapag nais mong i-convert ang teksto mula sa isang wika patungo sa isa pa.

![Translate workspace](../images/screenshots/tl/translate.png)

<br/>

<a id="translate-text"></a>
### Isalin ang teksto

1. Buksan ang **Translate**.
2. Pumili ng wika sa **From**.
3. Pumili ng wika sa **To**.
4. Pumili ng modelo sa toolbar.
5. I-type o i-paste ang teksto sa **Input**.
6. I-click ang **Translate**.
7. Basahin ang resulta sa **Output**.
8. Gamitin ang button na copy kung gusto mong kopyahin ang resulta.

<br/>

<a id="language-selection"></a>
### Pagpili ng wika

- Ang **From** ay maaaring tiyak na wika o **Detect Language**.
- Ang **To** ay ang wika kung saan gusto mo ang resulta.

Ang iyong napiling **Top languages** ay lilitaw sa tuktok ng listahan. Maaari mong itakda ang mga ito sa [**Settings** > **Languages**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Mga kapaki-pakinabang na setting sa pagsasalin

Sa [**Settings** > **General Settings**](#general-settings), maaari mong baguhin kung paano gumagana ang pagsasalin:

- **Awtomatikong isalin sa pag-paste** ay nagpapatakbo ng pagsasalin kaagad pagkatapos i-paste ang teksto.
- **Awtomatikong kopyahin ang resulta sa clipboard** ay awtomatikong kinokopya ang resulta pagkatapos ng matagumpay na pagpapatakbo.
- **Real-time na pagsasalin (habang nagtatatype)** ay nagpapatakbo ng pagsasalin habang nagtatatype ka.
- **Timeout (ms)** ay kontrol kung gaano katagal hihintayin ng app bago magpatakbo ng real-time na pagsasalin.
- **Enter** ay kontrol kung ano ang mangyayari kapag pinindot mo ang `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Rewrite

Gamitin ang **Rewrite** kapag gusto mong mapabuti ang pagkakasulat nang hindi binabago ang pangunahing kahulugan.

![Rewrite workspace](../images/screenshots/tl/rewrite.png)

Makakatulong ito para sa:

- pagwawasto ng pagbaybay at gramatika (**Suriin ang Pagbaybay at Gramatika**)
- paggawa ng teksto na mas malinaw (**Pabutihin ang Linaw**)
- ilang iba't ibang pagpapahayag sa isang pagpapatakbo (**Mga Alternatibong Bersyon**)
- paggawa ng teksto na mas pormal o mas impormal (**Pormal** / **Impormal**)
- pagpapahaba o pagpapaikli ng teksto (**Iikli** / **Palawakin**)
- paggawa ng teksto na mas teknikal (**Gawing Teknikal**)

<br/>

> 💡 **TIP**<br/>
> Kapag ginamit mo ang "**Suriin ang Baybay at Balarila**" na paraan, lumilitaw ang isang **Ipakita ang mga pagbabago** na switch sa output panel (sa tabi ng **Kopyahin**).
> I-on o i-off ito upang ipakita o itago ang mga tiyak na pagkukumpuni na isinagawa sa iyong teksto.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Transform

Gamitin ang **Transform** kapag gusto mong sundin ng AI ang isang pasadyang hanay ng mga panuto.

![Transform workspace](../images/screenshots/tl/transform.png)

Ito ang pinakamalayang bahagi ng app. Maaari mo itong gamitin para sa mga gawain tulad ng:

- pagsusummarize ng mga tala
- pagbabago ng hilaw na teksto sa isang napak polished na email
- pagkuha ng mga pangunahing punto
- pag-convert ng teksto sa isang tiyak na format
- anumang iba pang pasadyang gawain sa input na teksto

<br/>

<a id="run-an-existing-prompt"></a>
### Patakbuhin ang umiiral na prompt

1. Buksan ang **I-transform**.
2. Pumili ng prompt mula sa listahan ng prompt.
3. Kung lumitaw ang **Wika ng Target**, pumili ng wika kung gusto mo.
4. I-type o i-paste ang teksto sa **Input**.
5. I-click ang **I-transform**.
6. Basahin ang resulta sa **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Kung wala ka pang mga prompt

Kung walang laman ang iyong listahan ng prompt, i-click ang **I-load ang sample prompts** sa Transform workspace. Laging available ang kontrol na ito sa [**Mga Setting** > **Mga transform prompt**](#transform-prompts) sa hilera ng export/import. Parehong idinaragdag ng mga ito ang mga built-in na halimbawa upang mabilis mong masimulan.

<br/>

> ℹ️ **NOTE**<br/>
> Ang mga sample prompt ay ibinibigay sa Ingles. Matapos i-load ang mga ito, maaari mong i-edit ang isang prompt at gamitin ang **Isalin ang prompt** upang isalin ito sa iyong wika.

<br/>

<a id="create-a-prompt-quickly"></a>
### Lumikha ng prompt nang mabilis

Ang pinakamabilis na paraan para lumikha ng prompt ay:

1. I-click ang **Bagong prompt**.
2. I-click ang **Bumuo ng prompt**.
3. Ilarawan kung ano ang gusto mong gawin ng prompt.
4. Pumili ng modelo.
5. Hayaan ang app na lumikha ng draft para sa iyo.
6. Suriin ang draft at i-click ang **I-save**.

![Generate prompt](../images/screenshots/tl/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### I-edit ang isang prompt

Kapag lumilikha o nag-eedit ka ng isang prompt, ang editor ay lilitaw sa kaliwa at ang test area ay lilitaw sa kanan.

![Transform prompt editor](../images/screenshots/tl/transform-prompt-edit.png)

Ang pangunahing mga field ay:

- **Pangalan ng Prompt**: ang pangalan na ipinapakita sa listahan ng prompt.
- **Mga Tagubilin sa Prompt (opsyonal)**: maikling tulong na ipinapakita sa user kapag pinapatakbo ang prompt.
- **Papel ng Modelo**: ang pangkalahatang papel na itinalaga sa AI, tulad ng 'Ikaw ay isang kapaki-pakinabang na tagatulong.'
- **Mga Tagubilin sa Modelo (isa bawat hanay)**: mga tiyak na alituntunin na gusto mong sundin ng AI.
- **Deskripsyon ng Output**: maikling salita na naglalarawan sa resulta, tulad ng 'buod' o 'muling pagsulat'.
- **Temperature (0.0 → 1.0)**: kung paano kumikilos ang modelo; tingnan sa ibaba.
- **Humingi ng wika ng target**: nagdadagdag ng selector ng wika ng target kapag pinapatakbo ang prompt.

Kung bago sa iyo ang teknikal na terminong **Temperatura**, isipin mo ito nang ganito:

- Ang **mas mababa** na temperatura ay nagbibigay ng mas matatag at higit na maasahang resulta.
- Ang **mas mataas** na temperatura ay nagbibigay ng higit na iba't-iba at malikhain.

Maaari mo ring gamitin:

- **`Generate prompt`** upang lumikha ng bagong draft mula sa isang simpleng deskripsyon
- **`Improve prompt`** upang i-refine ang isang umiiral nang prompt
- **`Translate prompt`** upang isalin ang mga field ng prompt

<br/>

> ⚠️ **BABAALA**<br/>
> I-click ang **`Save`** bago i-click ang **`Back to Run`**. Kung babalik ka nang hindi ikinukunserva, mawawala ang iyong mga pagbabago.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Subukan ang prompt bago gamitin

Ang test panel sa kanan ay nagbibigay-daan sa iyo na subukan ang iyong prompt gamit ang sample text bago mo ito gamitin sa pang-araw-araw na gawain.

Makakatulong ito kapag:

- gumagawa ka ng bagong prompt
- inihahambing mo ang dalawang bersyon ng isang prompt
- nais mong suriin ang tono, haba, o format ng output

<br/>

> ℹ️ **TALA**<br/>
> Maaari mong i-export at i-import ang mga naka-save na prompt sa [**Mga Setting** > **Mga transform prompt**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Dashboard

Gamitin ang **Dashboard** upang makita kung gaano karami ang iyong paggamit sa app at kung magkano ang gastos nito (para sa mga bayad na modelo).

![Dashboard summary](../images/screenshots/tl/dashboard-summary.png)

<br/>

> ℹ️ **TALA**<br/>
> Kung gumagamit ka lamang ng **libre** na mga modelo, maaaring zero ang mga halaga ng **gastos** at maaaring walang laman ang mga buod na nakatuon sa gastos. Sa **Buod**, ipinapakita pa rin ng **Paggamit sa paglipas ng panahon** at **Paggamit ayon sa modelo** ang **bilang ng mga tawag** (isalin, i-rewrite, at i-transform) kapag may aktibidad ka sa napiling panahon.

<br/>

<a id="filter-the-data"></a>
### I-filter ang data

Gamitin ang mga button ng filter sa itaas upang baguhin ang saklaw ng oras.

![Dashboard filters](../images/screenshots/tl/dashboard-filter.png)

<br/>

> ℹ️ **PAUNAWA**<br/>
> Ang **User** na filter ay nakikita lamang ng mga administrator sa web na bersyon. Ang karaniwang mga user ay hindi makakakita ng filter na ito, at hindi ito available sa desktop app.

<br/>

<a id="dashboard-tabs"></a>
### Mga tab ng Dashboard

- **Buod** ay nagbibigay ng pangkalahatang-ideya ng paggamit at gastos. Kasama rito ang **Paggamit sa Paglipas ng Panahon** (stacked cumulative **bilang ng mga tawag** bawat araw para sa salin, muling pagsulat, at i-transform) at **Paggamit Ayon sa Modelo** (kabuuang **mga tawag bawat modelo**, kasama ang i-transform).
- **Ayon sa Paggamit** ay hinahati ang aktibidad ayon sa wika ng pagsasalin, mode ng muling pagsulat, at prompt sa pagbabago.
- **Ayon sa Modelo** ay nagpapakita kung aling mga modelo ang ginamit mo at kung magkano ang gastos nito.
- **Ayon sa Araw** ay nagpapakita ng kabuuang araw-araw.
- **Lahat ng Tawag** ay nagpapakita ng buong kasaysayan ng mga tawag at nagbibigay-daan upang i-export ito.

<br/>

<a id="export-data"></a>
### I-export ang data

Ang mga table sa dashboard ay maaaring i-export ang data sa:

- **JSON**
- **CSV**
- **XLSX**

Makakatulong ito kung gusto mong suriin ang aktibidad sa labas ng app o i-share ang isang report.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Tanggalin ang naka-imbak na mga tala para sa isang modelo

Sa **Ayon sa Model** o **Lahat ng Call**, maaari mong alisin ang naka-imbak na mga tala para sa isang modelo sa pamamagitan ng pag-click sa icon ng "trash bin".

> ⚠️ **BABAALA**<br/>
> Ang pagtanggal ng naka-imbak na mga tala ay hindi na maibabalik. Gamitin lamang ito kung sigurado ka na hindi mo na kailangan ang kasaysayang iyon.

Para tanggalin ang lahat ng data o alisin ang mga tala batay sa kanilang edad, pumunta sa [**Mga Setting** > **Pagsusubaybay ng Gastos**](#cost-tracking). Doon makikita mo ang mga opsyon para tanggalin ang lahat ng naka-imbak na data o mga data na mas matanda sa isang tiyak na petsa.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Kasaysayan

I-click ang **Kasaysayan** para makita ang kasaysayan ng iyong mga aksyon sa loob ng **Transrewrt**, kasama ang input at output ng bawat operasyon.

![History page](../images/screenshots/tl/history.png)

<br/>

<a id="filter-the-history"></a>
### I-filter ang data

Ginagamit ng **Kasaysayan** ang parehong mga filter tulad ng **Dashboard** na pahina. Gamitin ang mga ito para piliin ang saklaw ng oras.

![Dashboard filters](../images/screenshots/tl/dashboard-filter.png)

<br/>

> ℹ️ **PAUNAWA**<br/>
> Ang **User** na filter ay nakikita lamang ng mga administrator sa web na bersyon. Ang karaniwang mga user ay hindi makakakita ng filter na ito, at hindi ito available sa desktop app.

<br/>

<a id="export-history-data"></a>
### I-export ang data ng kasaysayan

Ang pahina ng kasaysayan ay maaaring i-export ang nafilter na data sa:

- **JSON**
- **CSV**
- **XLSX**

Makakatulong ito kung gusto mong suriin ang aktibidad sa labas ng app o i-share ang isang report.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Mga Setting

Buksan ang **Mga Setting** mula sa sidebar upang i-customize kung paano gumagana ang app.

Ang mga available na tab ay nakadepende sa platform at sa iyong papel:

| Tab               | Desktop | Web (admin) | Web (karaniwang user) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Mga Pangkalahatang Setting  |   oo   |     oo     |        oo         |
  | Mga Modelo            |   oo   |     oo     |        oo         |
  | Mga Wika         |   oo   |     oo     |        oo         |
  | Pagsusubayay ng Gastos     |   oo   |     oo     |         -          |
  | Mga Prompt sa Pagbabago |   oo   |     oo     |        oo         |
  | Mga User             |    -    |     oo     |         -          |
  | API Config        |   oo   |     oo     |         -          |
  | Tungkol Sa        |   oo   |     oo     |        oo         |

<br/>

> ℹ️ **PAUNAWA**<br/>
> Sa web version, ang bawat user ay may sariling configuration. Ang mga setting tulad ng napiling mga modelo, mga wika, pangkalahatang opsyon, at mga transform prompt ay iniimbak bawat user. Ang mga pagbabagong ginawa mo ay hindi nakakaapekto sa ibang mga user.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Mga pangkalahatang setting

Gamitin ang **Mga Pangkalahatang Setting** upang kontrolin ang pag-uugali sa pagta-type, kung iniimbak ang mga detalye ng pagpapatupad para sa **Kasaysayan**, at hitsura.

**Pag-uugali**

- **Pag-uugali para sa ENTER** ay pipiliin kung `Enter` ay ipapatakbo ang gawain o mag-i-insert ng bagong linya.
- **Auto-isalin kapag kinopya** ay magsisimula ng pagsasalin pagkatapos mong i-paste ang teksto.
- **Kopyahin ang resulta sa clipboard nang awtomatiko** ay awtomatikong kinokopya ang matagumpay na resulta.
- **Real-time na pagsasalin (habang nagtatype)** ay nagsasalin habang nagtatatype.
- **Timeout (ms)** ay nagtatakda ng oras ng paghihintay para sa real-time na pagsasalin.

**Kasaysayan**

- Ang **Panatilihin ang kasaysayan ng pagpapatupad** ay kontrola kung ang bawat isalin, i-rewrite, at i-transform ay mag-iimbak ng **input at output na teksto** para sa [**Kasaysayan**](#history) sa sidebar. Ang pag-off nito ay hihingi ng kumpirmasyon; kung ikaw ay pumayag, ang naka-imbak na teksto ng kasaysayan ay tatanggalin mula sa database.
- Ang **Tanggalin ang data ng kasaysayan** ay nagbibigay-daan sa iyo na alisin ang naka-imbak na teksto batay sa edad (halimbawa, mas matanda kaysa ilang buwan, o **lahat ng data (clear)**) gamit ang **Tanggalin data**. Ito ay apektado lamang ang naka-save na teksto ng pagpapatupad para sa **Kasaysayan** view; ito ay **hindi** tinatanggal ang kabuuang gastos o data ng paggamit. Upang alisin o bawasan ang data ng **gastos**, gamitin ang [**Mga Setting** > **Pagsusubaybay ng Gastos**](#cost-tracking).

**Hitsura**

- **Ipakita ang impormasyon ng gastos sa mga aksyon** ay kinokontrol ang pagpapakita ng gastos bawat operasyon (kung available) at kabuuang gastos sa mga panel ng Translate, Rewrite, at Transform.
- **Cost fraction digits** ay nagbabago kung paano ipapakita ang decimal sa gastos.
- **Web lang:** **magpakita ng margin sa paligid ng app** ay nagdaragdag ng ekstrang espasyo sa paligid ng interface.
- **Font Family** ay nagbabago ng font ng teksto sa mga panel.
- **Laki** ay nagbabago ng laki ng font.

**Backup ng Konfigurasyon**

- **Isama ang usage data sa backup** - kapag naka-enable, ang ZIP ay naglalaman din ng kasaysayan ng paggamit at data ng API call. 
- **I-backup ang configuration** - lumilikha ng isang ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` sa UTC bilang default) na may `config.json`, `state.json`, opsyonal na encryption key, mga user, mga kagustuhan, custom prompts, at usage data kung pinili mo ito. Matapos ang matagumpay na backup, ang kumpirmasyon ay nagpapakita ng pangalan ng naka-save na file.
- **I-restore mula sa backup** - binubuksan ang **dialogo ng kumpirmasyon muna**. Pumili ng backup ZIP sa loob ng dialog (**Browse** / file picker o drag-and-drop kung suportado), pagkatapos ay suriin ang mga opsyon:
  - **I-restore ang usage data** - i-import ang usage/history mula sa ZIP kapag na-backup ito na may kasamang usage; huwag i-enable kung gusto mo lang ng mga setting at prompts.
  - **Tanggalin ang lumang usage data bago i-restore** - alisin ang umiiral na usage/history sa kasalukuyang pag-install bago ilapat ang backup (opsyonal; gamitin kapag gusto mo ng malinis na palitan).

Ang mga backup na nilikha sa alinman sa web o desktop version ay maaaring ibalik sa kabilang bersyon. Kapag ibinabalik ang desktop backup sa web version, ang data ay maibabalik sa administrator user.

<br/>

<a id="models"></a>
### Mga Modelo

Gamitin ang **Mga Setting** > **Mga Modelo** upang pumili kung aling mga modelo ang lilitaw sa toolbar.

![Settings Models tab](../images/screenshots/tl/settings-models.png)

Ang pahina ay may dalawang listahan:

- **Mga Available na Modelo** sa kaliwa
- **Mga Napiling Modelo** sa kanan

Kasama sa mga kapaki-pakinabang na kontrol ang:

- **Hanapin ang mga modelo...** para makahanap ng modelo batay sa pangalan
- **Provider** chips para i-narrow ang listahan sa isang engine (OpenRouter, OpenAI, Ollama, …)
- **Free Only** para ipakita lamang ang libreng mga modelo
- **I-refresh** para i-reload ang listahan
- **Palawakin Lahat** at **I-collapse Lahat** kapag nagso-sort ka ayon sa provider

Ang mga model id ay may kasamang provider prefix (halimbawa `openrouter/…` laban sa `openai/…`). Ang mga badge tulad ng **OpenAI (OpenRouter)** laban sa **OpenAI (direkta)** ay nagpapakita kung paano na-reroute ang trapiko.

> ℹ️ **PAUNAWA**<br/>
> Ang **OpenRouter Body Builder** (`openrouter/bodybuilder`) ay isang router model, hindi isang pangkalahatang chat model: ang kanyang tugon ay JSON na naglalarawan ng OpenRouter API request bodies (halimbawa ay isang `requests` array na may `model` at `messages`). Kung gagamitin mo ito para sa **Isalin**, **Rewrite**, o **Transform**, ang output panel ay magpapakita ng JSON na iyon imbes na tapos nang teksto. Pumili ng normal na text model para sa mga gawaing ito. Tingnan ang [Body Builder model page](https://openrouter.ai/openrouter/bodybuilder) sa OpenRouter.

Mga Aksyon:

- Para magdagdag ng modelo, i-click ang **Idagdag** o kahit saan sa entry.

- Para alisin ang modelo, i-click ang **X** sa tabi nito sa **Mga Napiling Modelo** o ang **Napili** sa entry sa Mga Available na Modelo.

- Para i-clear ang listahan, i-click ang **I-unmark Lahat**. Ang kinakailangang libreng modelo ay mananatili sa listahan.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Kung hindi mo nais idagdag agad ang credits sa OpenRouter, magsimula sa pamamagitan ng pag-enable ng **Libre Lang** at pumili ng mga libreng modelo (walang credit card required). Maaari mo ring gamitin ang Ollama para patakbuhin ang mga modelo nang lokal nang walang anumang API key.

<br/>

<a id="languages"></a>
### Mga Wika

Gamitin ang **Mga Setting** > **Mga Wika** para ayusin ang mga listahan ng wika na ginagamit sa app.

- Ang **Mga nangungunang wika** ay nakapirmi malapit sa tuktok ng mga listahan ng wika sa **Isalin** at **Transform**.
- Ang **Custom language** ay nagbibigay-daan sa iyo na magdagdag ng wika na hindi kasama sa built-in list.

Kung magdadagdag ka ng custom na wika, lilitaw ito sa mga selector ng wika kasama ang mga built-in na opsyon.

<br/>

<a id="cost-tracking"></a>
### Pagsusubaybay ng Gastos

Gamitin ang **Mga Setting** > **Pagsusubaybay ng Gastos** para pamahalaan ang impormasyon ng gastos.

- **Kabuuang Gastos** ay nagpapakita ng running total.
- **Kopyahin ang Halaga** ay kinokopya ang kabuuan sa clipboard.
- **I-reset ang Gastos** ay nagre-reset ng naka-store na kabuuan patungo sa zero.
- **I-sync ang gastos sa API key usage** ay nagse-set ng kabuuan upang tumugma sa usage na iniulat ng iyong OpenRouter account (OpenRouter lang).
- **API Key Usage** ay nagpapakita ng detalye ng OpenRouter usage, kung available.
- **Tanggalin ang cost data** ay tinatanggal ang lahat ng data, o mga entry na mas matanda sa napiling petsa lamang.

**Pagsusubaybay ng Gastos:** Kapag gumagamit ka ng OpenRouter models, ipinapakita ng app ang iyong aktwal na paggamit at gastusin batay sa impormasyon ng gastos mula sa OpenRouter. Para sa lahat ng iba pang provider, hinuhulaan ng app ang mga gastos gamit ang mga presyo na inilathala ng OpenRouter; kung hindi available ang presyo, maaaring zero ang pagtatantiya.

<br/>

> ℹ️ **PAUNAWA**<br/>
>  **Lahat ng mga numero ng gastos ay mga pagtatantiya para sa iyong sanggunian lamang, hindi opisyal na billing statement.**

<br/>

> ⚠️ **BABALA**<br/>
> Ang pagtanggal ng data ay hindi na maibabalik. Bago tanggalin, siguraduhing i-back up ang iyong data o i-export ito sa pamamagitan ng [**Kasaysayan**](#history)
> o [**Dashboard** > **Lahat ng Call**](#dashboard-tabs), kung hindi man ay mawawala ito ng permanente.
> Ang lahat ng input/output history na nauugnay sa bawat API call entry ay tatanggalin din.

<br/>

<a id="transform-prompts"></a>
### Mga transform prompt

Gamitin ang **Mga Setting** > **Mga Transform Prompt** para pamahalaan ang mga prompt nang masinsinan.

Maaari mong:

- suriin ang iyong mga naka-save na prompt
- tanggalin ang mga prompt
- i-import ang mga prompt mula sa file
- i-export ang mga prompt para sa backup o pagbabahagi
- i-load ang sample prompts sa listahan ng prompt

<br/>

<a id="users"></a>
### Mga User

Gamitin ang **Mga User** para pamahalaan ang mga user account sa web version. Maaari kang magdagdag ng mga user, i-update ang kanilang detalye, i-reset ang password, at tanggalin ang mga account.

<br/>

<a id="api-config"></a>
### Config ng API

Ang mga suportadong provider ay: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, at **Ollama** (mga lokal na modelo sa pamamagitan ng base URL). Kailangan mo lamang i-configure ang mga provider na ginagamit mo.

**Web application: administrator lamang**

Ang mga API key ay ini-configure sa pamamagitan ng system o Docker environment variables – hindi ito inilalagay sa web UI. Ang pahinang ito ay nagpapakita kung aling mga provider ang may naka-configure na key at nagbibigay-daan sa iyo na subukan ang bawat isa sa pamamagitan ng pag-click sa pindutan na **`Test`**.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Para baguhin ang isang API key, i-update ang environment variable sa iyong system o Docker configuration at i-restart ang server o container.

> ℹ️ **PAUNAWA**<br/>
> Ang **mga backup ng konfigurasyon** (tingnan ang [**Mga Pangkalahatang Setting** → Backup ng Konfigurasyon](#general-settings)) ay maaaring isama ang **nare-resolve** na mga key ng provider sa loob ng `config.json` ng ZIP. Ang pag-re-restore ng ZIP na ito ay **hindi** kinokopya ang mga key na iyon pabalik sa config file ng server – ang live keys ay nagmumula pa rin sa environment at umiiral na file state gaya ng inilarawan doon.

<br/>

**Desktop application**

Gamitin ang **Config ng API** para iimbak ang mga API key para sa bawat provider na ginagamit mo. Para sa Ollama, ilagay ang **base URL** imbes na isang API key.

<br/>

> 💡 **Tip** <br/>
> Kung ayaw mong gamitin ang isang API key o magbayad para sa paggamit, maaari kang [i-download ang Ollama](https://ollama.com) at patakbuhin ang mga modelo (tulad ng `translategemma:4b`) nang lokal sa iyong makina nang libre. Bilang kahalili, maaari kang lumikha ng libreng OpenRouter account (walang kailangang credit card) para gamitin ang kanilang libreng mga modelo, o kumuha ng libreng API key mula sa Cerebras, Google, Groq, o Mistral AI.

<br/>

- Idagdag lamang ang mga provider na kailangan mo. Sa **Mga Setting** > **Mga Modelo**, ang bawat model id ay nagsisimula sa provider (halimbawa `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Para magdagdag ng API key, ipasok ang halaga sa text field at i-click ang **`Save`**. Para palitan ang umiiral na key, i-click ang **`Edit`**. Para i-verify na gumagana ang key, i-click ang **`Test`**. Para sa Ollama base URL, i-click palagi ang **`Test`** upang suriin ang koneksyon.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Hindi mo maaaring makita ang kasalukuyang halaga ng isang API key. Maaari mo lamang itong palitan gamit ang pindutan na **`Edit`**.
> Ang mga API key ay iniimbak nang naka-encrypt sa configuration.

<br/>

<a id="about"></a>
### Tungkol sa

Ang tab na **Tungkol sa** ay nagpapakita ng:

- pangalan ng app
- numero ng bersyon
- petsa ng build
- link sa repository ng proyekto

<br/><br/>

<a id="common-issues"></a>
## Karaniwang isyu

Kung may bagay na hindi gumagana ayon sa inaasahan, suriin muna ang mga sumusunod.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Hindi maisasalin, i-rewrite, o i-transform ang teksto

Suriin na:

- napili mo ang isang modelo sa toolbar
- nakalista ang kahit isang modelo sa [**Mga Setting** > **Mga Modelo**](#models)
- gumagana ang iyong API setup

Kung gumagamit ka ng desktop app:

1. Buksan ang [**Mga Setting** > **Config ng API**](#api-config).
2. Suriin na naka-save ang kahit isang API key.
3. I-click ang **Subukan** sa tabi ng provider upang kumpirmahin na gumagana ang key.

<br/>

<a id="the-model-list-is-empty"></a>
### Walang laman ang listahan ng modelo

Buksan ang [**Mga Setting** > **Mga Modelo**](#models) at i-click ang **I-refresh**.

Kung kinakailangan:

- maghanap ng isang modelo
- i-on ang **Libre Lang**
- idagdag ang isa o higit pang mga modelo sa **Mga Napiling Modelo**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Masyadong mabagal o mahal ang resulta

Subukan ang isa o higit pang mga sumusunod:

- pumili ng ibang modelo
- gumamit ng mas maikling input
- i-off ang **Real-time translation (habang nagta-type)** sa [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings)
- gamitin ang libreng mga modelo para sa mga simpleng gawain (tingnan ang [Mga Modelo](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Mali ang lengguwahe ng interface

I-click ang icon ng mundo sa [toolbar](#toolbar) at pumili ng iyong nais na **Lengguwahe ng Interface**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Masyadong maliit o mahirap basahin ang teksto

Buksan ang [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings) at baguhin:

- **Pamilya ng Font**
- **Laki**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Walang laman ang mga chart sa Dashboard

Normal lang ito kung:

- gumagamit ka lamang ng **libreng mga modelo** at tinitingnan mo ang mga numero sa **gastos** (maaaring zero ang halaga); kailangan pa rin ng data ang mga chart ng bilang ng **mga tawag** sa **Buod** mula sa napiling panahon
- ang napiling **filter ng oras** ay hindi sumasakop sa panahon kung kailan isinagawa ang mga tawag - subukan ang **Lahat** upang suriin

Kung wala pa ring laman ang mga chart kahit pagkatapos piliin ang **Lahat**, kumpirmahin kung may mga tawag na nakalista sa [**Kasaysayan**](#history) o sa tab na **Lahat ng Call**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Nagpapakita ang gastos ng "hindi available" o tila mali

Kapag gumagamit ka ng mga modelo sa pamamagitan ng **OpenRouter**, ipinapakita ng app ang aktuwal mong gastusin na iniulat ng OpenRouter.

Para sa **mga ibang provider** (OpenAI direkta, Anthropic direkta, atbp.), ang gastos ay tinataya batay sa mga datos ng presyo na inilathala ng OpenRouter. Kung walang tugmang presyo na nakita para sa isang modelo, ang gastos ay magpapakita bilang **hindi available** at hindi idaragdag sa iyong kabuuang gastos.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Hindi tugma ang kabuuang gastos sa bill ng aking provider

Lahat ng numero ng gastos sa app ay **tinataya para sa reperensya lamang**, hindi opisyal na mga pahayag sa pagbubuwis.

Upang gawing mas malapit ang kabuuan sa iyong tunay na gastusin sa OpenRouter, buksan ang [**Mga Setting** > **Pagsusubaybay ng Gastos**](#cost-tracking) at i-click ang **I-sync sa paggamit ng API key**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Nawala ang pahina ng Kasaysayan sa sidebar

Maaaring naka-off ang **Panatilihin ang kasaysayan ng pagpapatupad**. Buksan ang [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings) at i-enable ito. Tandaan na ang pag-on nito ay hindi ibabalik ang dati nang nabura na data ng kasaysayan.

<br/>

<a id="web-app-session-expired"></a>
### Web app: biglang nailihis sa pahina ng login

Maaaring natapos na ang iyong sesyon. Mag-login muli. Kung madalas itong nangyayari, suriin ang configuration ng server para sa mga setting ng haba ng sesyon.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Web admin: nakalimutan o nawala ang password

Ito ay para sa **web app na self-hosted** (Docker), hindi sa desktop (Electron) app.

- Kung may iba pang administrator na makakapag-sign in, maaari nilang buksan ang [**Mga Setting** > **Mga User**](#users), piliin ang account, at itakda ang **bagong password** doon.
- Kung ikaw ay **naka-lock out** ngunit may **access sa shell** sa makina o container, i-reset ang password gamit ang helper na kasama sa imahe (palitan ang `transrewrt` kung binago mo ang default na pangalan, at i-quote ang password kung may espasyo o espesyal na karakter):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Ang default na admin username ay `admin` kung hindi ka pa gumawa ng ibang account. Kapag nagbigay ka lamang ng isang argumento, ito ay itinuturing na bagong password para sa `admin`.

Kung gagamitin mo ito mula sa isang **source checkout** imbes na Docker, gamitin ang:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Ang script ay nag-uupdate sa user record sa SQLite database (at maaaring likhain ang `admin` user kung kulang ito). Matapos i-reset, mag-sign in gamit ang bagong password.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Walang data ang Dashboard para sa ibang mga user (web)

Tanging ang mga **administrators** lamang ang makakakita ng data mula sa lahat ng user sa pamamagitan ng **User** filter. Ang mga regular na user ay nakakakita lamang ng kanilang sariling aktibidad ayon sa disenyo.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Binago ko ang isang prompt at nawala ang mga edit

Kapag nag-eedit ng isang prompt, i-click **I-save** bago i-click ang **Bumalik sa Run**.

<br/><br/>

<a id="quick-tips"></a>
## Mga mabilis na tip

- Magsimula sa [**Isalin**](#translate) upang matiyak na gumagana ang iyong setup bago ka lumipat sa [**I-revise**](#rewrite) o [**I-transform**](#transform).
- Gamitin ang [**I-revise**](#rewrite) para sa pang-araw-araw na pagpapabuti ng mga salita.
- Gamitin ang [**I-transform**](#transform) kapag kailangan mo ng paulit-ulit na workflow para sa isang tiyak na gawain.
- Gamitin ang [**Dashboard**](#dashboard) kung gusto mong bantayan ang usage at gastos.
- Gamitin ang [**Kasaysayan**](#history) upang suriin ang mga nakaraang operasyon at ang buong input/output text.
- I-export ang mga prompt nang regular kung gumagawa ka ng prompt library na gusto mong mapanatiling ligtas (tingnan ang [Transform Prompts](#transform-prompts)) o kung ibabahagi mo ito sa iba.

<br/><br/>

<a id="disclaimer"></a>
## Paalala

Ang mga pangalan ng produkto at icon ay pagmamay-ari ng kanilang mga respektibong may-ari at ginagamit lamang para sa identification. Ang software na ito ay hindi konektado o iniindorso ng anumang mga banggit na brand.

<br/><br/>

<a id="license"></a>
## Lisensya

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
