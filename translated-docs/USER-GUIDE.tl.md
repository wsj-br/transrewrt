---
translation_last_updated: '2026-05-03T19:24:33.250Z'
source_file_mtime: '2026-05-03T18:57:44.574Z'
source_file_hash: 344c54a3a014452fb149b427480e26d09bb25eb0b408f4c2006d55ba1255579b
translation_language: tl
source_file_path: USER-GUIDE.md
translation_models:
  - anthropic/claude-3.5-haiku
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
- **Muling isulat** - i-parafrase ang teksto sa ibang estilo, tulad ng mas malinaw, mas maikli, o mas pormal.
- **Baguhin** - i-proseso ang teksto gamit ang mga pasadyang AI na tagubilin na tinatawag na mga prompt.

<br/>

Ipinaliliwanag ng gabay na ito kung paano gamitin ang app kapag naka-install at tumatakbo na ito. Para sa mga hakbang sa pag-install, tingnan ang pangunahing [**README**](README.tl.md).

<br/>

> ℹ️ **PAUNAWA**<br/>
> Ang Transrewrt ay magagamit bilang desktop app para sa Windows at Linux, at bilang self-hosted web app. Tinitiyak ng gabay na ito ang pang-araw-araw na paggamit ng app. Kung may bagay na nalalapat lamang sa isang bersyon, malinaw itong nakamarkahan.

<small>**Basahin sa ibang mga wika:** </small>
<small id="lang-list">[English (GB)](../USER-GUIDE.md) · [Português (Brasil)](./USER-GUIDE.pt-BR.md) · [العربية](./USER-GUIDE.ar.md) · [বাংলা](./USER-GUIDE.bn.md) · [Català](./USER-GUIDE.ca.md) · [中文 (中国大陆)](./USER-GUIDE.zh-CN.md) · [中文 (台灣)](./USER-GUIDE.zh-TW.md) · [Hrvatski](./USER-GUIDE.hr.md) · [Čeština](./USER-GUIDE.cs.md) · [Nederlands](./USER-GUIDE.nl.md) · [English (US)](./USER-GUIDE.en-US.md) · [Tagalog](./USER-GUIDE.tl.md) · [Français](./USER-GUIDE.fr.md) · [Deutsch](./USER-GUIDE.de.md) · [Ελληνικά](./USER-GUIDE.el.md) · [हिन्दी](./USER-GUIDE.hi.md) · [Magyar](./USER-GUIDE.hu.md) · [Italiano](./USER-GUIDE.it.md) · [日本語](./USER-GUIDE.ja.md) · [한국어](./USER-GUIDE.ko.md) · [Bahasa Melayu](./USER-GUIDE.ms.md) · [فارسی](./USER-GUIDE.fa.md) · [Polski](./USER-GUIDE.pl.md) · [Basa Jawa](./USER-GUIDE.jv.md) · [Português](./USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](./USER-GUIDE.pa.md) · [Română](./USER-GUIDE.ro.md) · [Русский](./USER-GUIDE.ru.md) · [Slovenčina](./USER-GUIDE.sk.md) · [Español](./USER-GUIDE.es.md) · [Kiswahili](./USER-GUIDE.sw.md) · [Svenska](./USER-GUIDE.sv.md) · [తెలుగు](./USER-GUIDE.te.md) · [ไทย](./USER-GUIDE.th.md) · [Türkçe](./USER-GUIDE.tr.md) · [Українська](./USER-GUIDE.uk.md) · [Tiếng Việt](./USER-GUIDE.vi.md)</small>

<small>

> **Tala sa mga pagsasalin ng UI at dokumentasyon:** Ang lahat ng mga wika sa interface maliban sa orihinal na English (UK) 
> ay isinalin gamit ang mga AI model; maaaring hindi tumpak o may mga kamalian ang mga salin.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Talaan ng Nilalaman**

- [Bago ka magsimula](#before-you-start)
  - [Paano makakuha ng libreng OpenRouter API key (desktop app)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Mga unang hakbang](#getting-started)
- [Mga pangunahing bahagi ng window](#main-parts-of-the-window)
  - [Sidebar](#sidebar)
  - [Toolbar](#toolbar)
  - [Input at output panels](#input-and-output-panels)
- [Pagsasalin](#translate)
  - [Isalin ang teksto](#translate-text)
  - [Pagpili ng wika](#language-selection)
  - [Mga kapaki-pakinabang na setting sa pagsasalin](#helpful-translation-settings)
- [Muling isulat](#rewrite)
- [Baguhin](#transform)
  - [Patakbuhin ang umiiral na prompt](#run-an-existing-prompt)
  - [Kung wala pang prompts](#if-you-have-no-prompts-yet)
  - [Gawin agad ang isang prompt](#create-a-prompt-quickly)
  - [I-edit ang isang prompt](#edit-a-prompt)
  - [Subukan ang prompt bago gamitin](#test-a-prompt-before-using-it)
- [Dashboard](#dashboard)
  - [I-filter ang data](#filter-the-data)
  - [Mga tab ng Dashboard](#dashboard-tabs)
  - [I-export ang data](#export-data)
  - [Tanggalin ang naka-imbak na tala para sa isang modelo](#delete-stored-records-for-a-model)
- [Kasaysayan](#history)
  - [I-filter ang kasaysayan](#filter-the-history)
  - [I-export ang data ng kasaysayan](#export-history-data)
- [Mga Setting](#settings)
  - [Mga Pangkalahatang Setting](#general-settings)
  - [Mga Modelo](#models)
  - [Mga Wika](#languages)
  - [Pagsusubaybay ng Gastos](#cost-tracking)
  - [Mga prompt sa pagbabago](#transform-prompts)
  - [Mga Gumagamit](#users)
  - [Config ng API](#api-config)
  - [Tungkol dito](#about)
- [Karaniwang isyu](#common-issues)
  - [Hindi maisasalin, muling maisusulat, o mababagong teksto ng app](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Walang laman ang listahan ng modelo](#the-model-list-is-empty)
  - [Mabagal o mahal ang resulta](#the-result-is-too-slow-or-too-expensive)
  - [Maling wika ang nasa interface](#the-interface-is-in-the-wrong-language)
  - [Masyadong maliit o mahirap basahin ang teksto](#the-text-is-too-small-or-hard-to-read)
  - [Walang laman ang mga graph sa Dashboard](#dashboard-charts-are-empty)
  - [Nagpapakita ang gastos ng "not available" o mali ang tingin](#cost-shows-not-available-or-seems-wrong)
  - [Hindi tugma ang kabuuang gastos sa bill ng provider](#total-cost-does-not-match-my-provider-bill)
  - [Nawawala ang History page sa sidebar](#the-history-page-is-missing-from-the-sidebar)
  - [Web app: biglang naililigaw sa login page](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Web admin: nakalimutan o nawala ang password](#web-admin-forgot-or-lost-a-password)
  - [Walang data para sa ibang user ang ipinapakita ng Dashboard (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Nagbago ako ng prompt at nawala ang mga edit](#i-changed-a-prompt-and-lost-the-edits)
- [Mga mabilis na tip](#quick-tips)
- [Paunawa](#disclaimer)
- [Lisensya](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Bago magsimula

Para magamit ang Transrewrt, kailangan mo ng access sa kahit isang AI provider. Ang mga suportadong provider ay: [OpenRouter](https://openrouter.ai) (na nag-aagregate ng maraming modelo), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, at [Ollama](https://ollama.com) para sa mga lokal na modelo.

Hindi mo kailangang pumili ng bayad na modelo upang magsimula. Sa sandaling idagdag mo ang iyong OpenRouter API key, awtomatikong pinapagana ng app ang isang naka-embed na **libre** na opsyon ng OpenRouter. Nito ay pinapayagan kang magsimulang mag-isalin, muling isulat, at baguhin ang teksto agad. Bilang kahalili, maaari mo ring makuha ang isang libreng API key mula sa Cerebras, Google, Groq, o Mistral AI.

Sa madaling salita:

- Ang isang **modelo** ay ang AI engine na gumagawa ng trabaho. Ang mga modelo ay nakalista na may **prefix ng provider** (halimbawa `openrouter/…`, `openai/…`, `ollama/…`).
- Ang isang **API key** (o, para sa Ollama, ang isang **base URL**) ay ang paraan kung paano maabot ng app ang provider na iyon.

Kung gumagamit ka ng **desktop app**, idagdag ang mga key sa [**Mga Setting** > **Config ng API**](#api-config) para sa bawat provider na gagamitin mo. Para sa paggamit lamang ng OpenRouter, tingnan ang [Paano makakuha ng API key](#how-to-get-an-api-key-desktop-app) sa ibaba. Kung ayaw mong gamitin ang API key, maaari mong i-install ang Ollama (mula sa [ollama.com](https://ollama.com)) at gamitin ang mga lokal na modelo, tulad ng `translategemma:4b`.

Kung gumagamit ka ng **web version**, ang server owner ang nagko-configure ng mga provider gamit ang environment variables, kaya hindi mo direktang ma-enter ang mga API key sa loob ng application.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Paano makakuha ng libreng OpenRouter API key (desktop app)

Kung gumagamit ka ng desktop app, sundin ang mga hakbang na ito:

1. Pumunta sa [OpenRouter](https://openrouter.ai) sa iyong web browser.
2. Gumawa ng account o mag-sign in.
3. Buksan ang pahina ng [Keys](https://openrouter.ai/keys).
4. I-click ang button para lumikha ng bagong API key.
5. Bigyan mo ng pangalan ang key para ma-recognize mo ito sa susunod.
6. Kopyahin ang bagong API key.
7. Bumalik sa Transrewrt at buksan ang **Mga Setting** > **Config ng API**.
8. I-paste ang key sa **OpenRouter API key** (sa ilalim ng **Mga Setting** > **Config ng API**).
9. I-click ang **Subukan ang OpenRouter key** upang matiyak na gumagana ito.

<br/><br/>

<a id="getting-started"></a>
## Mga Simula

Kung ito ang iyong unang pagkakataon na gumamit ng Transrewrt, sundin ang pagkakasunod-sunod na ito:

1. Buksan ang app.
2. Pumili ng iyong **Wika ng interface** mula sa icon ng mundo kung kinakailangan.
3. Kung nasa **desktop app** ka, buksan ang [**Mga Setting** > **Config ng API**](#api-config), idagdag ang API key para sa kahit isang provider (halimbawa OpenRouter), at i-click ang **Subukan** upang i-verify na gumagana ito.
4. Buksan ang [**Mga Setting** > **Mga Modelo**](#models) at idagdag ang isa o higit pang mga modelo sa **Mga Napiling Modelo**.
5. Buksan ang [**Mga Setting** > **Mga Wika**](#languages) at pumili ng iyong **Nangungunang mga wika** kung gusto mong lumabas muna ang iyong mga madalas gamitin na wika.
6. Pumunta sa **Isalin** at patakbuhin ang isang simpleng pagsasalin upang i-verify na gumagana ang lahat.
7. Kapag gumana na, subukan ang **Muling isulat** at pagkatapos ay ang **Baguhin**.

Mahalaga ang pagkakasunod-sunod na ito. Ito ay nagpipigil sa pinakakaraniwang problema sa unang paggamit: sinusubukan na patakbuhin ang isang gawain bago pa man may gumaganang API connection o napiling modelo ang app.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Mga pangunahing bahagi ng window

Ang app ay nahahati sa tatlong pangunahing bahagi:

- Ang **sidebar** sa kaliwa.
- Ang **toolbar** sa itaas.
- Ang **work area** sa gitna.

<br/>

<a id="sidebar"></a>
### Sidebar

Gamitin ang sidebar para mag-navigate sa app. Maaari mong i-collapse ang sidebar para mas maraming espasyo sa pamamagitan ng pag-click sa icon na nasa tabi ng logo ng app.

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
        <li><strong>Muling isulat</strong> ay nagbubukas ng workspace para sa pag-rewriting.</li><br/>
        <li><strong>Baguhin</strong> ay nagbubukas ng workspace para sa custom prompt.</li><br/>
        <li><strong>Dashboard</strong> ay nagpapakita ng impormasyon tungkol sa paggamit at gastos.</li><br/>
        <li><strong>Mga Setting</strong> ay nagbubukas ng panel ng mga setting.</li><br/>
        <li><strong>Kasaysayan</strong> ay nagpapakita ng kasaysayan ng paggamit kasama ang input at output na teksto</li><br/>
        <li><strong>User</strong> ay nagpapakita ng username ng naka-log in na user (web lang).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Toolbar

Kaunti lamang nagbabago ang toolbar depende sa kung saan ka sa loob ng app.

- Sa kaliwa, ipinapakita nito ang pangalan ng kasalukuyang pahina.
- Sa kanan, ipinapakita nito ang **model selector** at ang kontrol para sa **Wika ng interface**.

Ang **model selector** ay nagbibigay-daan sa iyo na pumili kung aling AI engine ang gagamitin para sa kasalukuyang gawain.

![Model selector](../images/screenshots/tl/model-selector.png)

Maaaring hindi lagi magagamit ang ilang libreng modelo—minsan ay offline ito o may limitasyon sa paggamit. Kung mangyari ito, awtomatikong aalisin ng app ang modelo mula sa iyong listahan ng magagamit. Para kontrolin kung aling mga modelo ang lilitaw, pumunta sa [**Mga Setting** > **Mga Modelo**](#models) at i-edit ang iyong listahan ng modelo.
 Maaari mo ring buksan nang direkta ang mga setting ng modelo sa pamamagitan ng pag-click sa icon ng provider sa kaliwa ng pangalan ng modelo sa toolbar.

<br/>

Ang **icon + language code** ay nagbabago ng wika ng interface ng app, tulad ng mga menu at mga button. Ito ay **hindi** nagbabago ng mga wika ng pagsasalin na ginagamit sa **Isalin**.

![Interface language selector](../images/screenshots/tl/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Mga panel ng Input at Output

Karamihan sa mga workspace ay gumagamit ng **Input** panel sa kaliwa at **Output** panel sa kanan.

Ang bawat panel ay nagpapakita rin ng:

| **Input**                                                          | **Output**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Bilang ng karakter <br/>- Bilang ng salita <br/>- Bilang ng talata   <br/> | - Gaano katagal ang gawain<br/>- **TPS** (mga token bawat segundo)<br/>- Bilang ng karakter, salita, at talata<br/>- Ang modelo na ginamit |

Kung nagtatanong ka tungkol sa mga teknikal na termino:

- Ang **token** ay nangangahulugang maliit na bahagi ng teksto. Maaari mo itong iisipin bilang bahagi ng salita o maikling salita.
- Ang **TPS** ay nangangahulugang bilang ng mga bahaging teksto na naproseso ng modelo bawat segundo.

<br/>

Maaari mo ring subaybayan ang gastos ng bawat operasyon (kung magagamit) at ang kabuuang gastos, sa pamamagitan ng pag-enable ng opsyon na `Show cost information on the actions` sa [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Isalin

Gamitin ang **Isalin** kapag nais mong i-convert ang teksto mula sa isang wika patungo sa isa pa.

![Translate workspace](../images/screenshots/tl/translate.png)

<br/>

<a id="translate-text"></a>
### I-salin ang teksto

1. Buksan ang **Isalin**.
2. Pumili ng wika sa **Mula sa**.
3. Pumili ng wika sa **Patungo sa**.
4. Pumili ng modelo sa toolbar.
5. I-type o i-paste ang teksto sa **Input**.
6. I-click ang **Translate**.
7. Basahin ang resulta sa **Output**.
8. Gamitin ang button na kopya kung gusto mong kopyahin ang resulta.

<br/>

<a id="language-selection"></a>
### Pagpili ng wika

- Maaaring tiyak na wika ang **From** o **Detect Language**.
- Ang **To** ay ang wika kung saan gusto mong isalin ang resulta.

Ang iyong napiling **Top languages** ay lilitaw sa tuktok ng listahan. Maaari mong itakda ang mga ito sa [**Settings** > **Languages**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Mga kapaki-pakinabang na setting sa pagsasalin

Sa [**Settings** > **General Settings**](#general-settings), maaari mong baguhin kung paano gumagana ang pagsasalin:

- **Auto-translate on paste** ay nagsasagawa ng pagsasalin agad-agad kapag pinaste mo ang teksto.
- **Auto-copy result to clipboard** ay awtomatikong kumokopya ng resulta pagkatapos ng matagumpay na pagsasalin.
- **Real-time translation (habang nagta-type)** ay nagsasalin habang nagta-type ka.
- **Timeout (ms)** ay nagtatakda kung gaano katagal hihintayin ng app bago magsagawa ng real-time na pagsasalin.
- Ang **Enter** ay nagkokontrol kung ano ang mangyayari kapag pinindot mo ang `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Muling isulat

Gamitin ang **Rewrite** kapag gusto mong mapabuti ang pagkakasulat nang hindi binabago ang pangunahing kahulugan.

![Rewrite workspace](../images/screenshots/tl/rewrite.png)

Makakatulong ito sa:

- pagtama sa eja at balarila (**Check Spelling & Grammar**)
- pagpapalinaw ng teksto (**Improve Clarity**)
- maramihang iba't ibang pagbabago sa isang pagkakataon (**Alternative versions**)
- pagpapormal o pagpapadiwa ng teksto (**Formal** / **Informal**)
- pagpapaiikli o pagpapalawak ng teksto (**Shorten** / **Expand**)
- pagpaparami ng tono ng teksto na teknikal (**Make Technical**)

<br/>

> 💡 **TIP**<br/>
> Kapag ginamit mo ang mode na "**Check Spelling & Grammar**", lumilitaw ang switch na **Show changes** sa output panel (nakalapit sa **Copy**).
> I-on o i-off ito upang ipakita o itago ang mga tiyak na pagkakamali na tinamaan sa iyong teksto.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Baguhin

Gamitin ang **Transform** kapag gusto mong sundin ng AI ang isang pasadyang hanay ng mga tagubilin.

![Transform workspace](../images/screenshots/tl/transform.png)

Ito ang pinakamalawak na bahagi ng app. Maaari mo itong gamitin para sa mga gawain tulad ng:

- pagbuod ng mga tala
- pagbabago ng hilaw na teksto sa isang maayos na email
- pagkuha ng mga pangunahing punto
- pagbabago ng teksto sa isang tiyak na format
- anumang iba pang pasadyang gawain sa input na teksto

<br/>

<a id="run-an-existing-prompt"></a>
### Patakbuhin ang umiiral na prompt

1. Buksan ang **Baguhin**.
2. Pumili ng isang prompt mula sa listahan ng prompt.
3. Kung lumitaw ang kahon ng **Destinasyon** na wika, pumili ng wika kung gusto mo.
4. I-type o i-paste ang teksto sa loob ng **Input**.
5. I-click ang **Baguhin**.
6. Basahin ang resulta sa **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Kung wala ka pang mga prompt

Kung walang laman ang iyong listahan ng prompt, i-click ang **I-load ang mga sample prompt** sa workspace ng Baguhin. Laging magagamit ang kontrol na ito sa [**Mga Setting** > **Mga prompt sa pagbabago**](#transform-prompts) sa hilera ng export/import. Parehong nagdadagdag ng mga halimbawang naka-embed upang mabilis kang makapagsimula.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Ang mga sample na prompt ay ibinibigay sa Ingles. Matapos i-load ang mga ito, maaari mong i-edit ang isang prompt at gamitin ang **Isalin ang prompt** upang isalin ito sa iyong wika.

<br/>

<a id="create-a-prompt-quickly"></a>
### Mabilisang gumawa ng prompt

Ang pinakamabilis na paraan para gumawa ng prompt ay:

1. I-click ang **Bagong prompt**.
2. I-click ang **Bumuo ng prompt**.
3. Ilarawan kung ano ang gusto mong gawin ng prompt.
4. Pumili ng isang modelo.
5. Hayaan ang app na lumikha ng draft para sa iyo.
6. Suriin ang draft at i-click ang **I-save**.

![Generate prompt](../images/screenshots/tl/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### I-edit ang isang prompt

Kapag gumawa o nag-edit ka ng prompt, ang editor ay lilitaw sa kaliwa at ang test area ay lilitaw sa kanan.

![Transform prompt editor](../images/screenshots/tl/transform-prompt-edit.png)

Ang pangunahing mga field ay:

- **Pangalan ng prompt**: ang pangalan na ipinapakita sa listahan ng prompt.
- **Mga tagubilin sa prompt (opsyonal)**: maikling tulong na ipinapakita sa user kapag pinapatakbo ang prompt.
- **Tungkulin ng Modelo**: ang pangkalahatang tungkulin na itinakda sa AI, tulad ng 'Ikaw ay isang mapaglingkod na katulong.'
- **Mga Tagubilin sa Modelo (isa bawat hanay)**: ang tiyak na mga alituntunin na gusto mong sundin ng AI.
- **Deskripsyon ng output**: maikling salita na naglalarawan sa resulta, tulad ng 'buod' o 'muling isulat'.
- **Temperature (0.0 → 1.0)**: kung paano kikilos ang modelo; tingnan sa ibaba.
- **Humiling ng wika ng destinasyon**: nagdadagdag ng selector ng wika ng destinasyon kapag pinapatakbo ang prompt.

Kung bago sa iyo ang teknikal na terminong **Temperature**, isipin mo ito nang ganito:

- Ang **mas mababang** temperature ay nagbibigay ng mas matatag at higit na nakaplanong resulta.
- Ang **mas mataas** na temperature ay nagbibigay ng higit na iba't-iba at malikhain.

Maaari mo ring gamitin:

- `Generate prompt` upang lumikha ng bagong draft mula sa simpleng paglalarawan
- `Improve prompt` upang palinawin ang umiiral na prompt
- `Translate prompt` upang isalin ang mga field ng prompt

<br/>

> ⚠️ **BABAALA**<br/>
> I-click ang `Save` bago i-click ang `Back to Run`. Kung babalik ka nang hindi i-save, mawawala ang iyong mga pagbabago.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Subukan ang prompt bago gamitin

Ang test panel sa kanan ay nagbibigay-daan upang subukan ang iyong prompt gamit ang sample text bago mo ito gamitin sa pang-araw-araw na gawain.

Makakatulong ito kapag:

- gumagawa ka ng bagong prompt
- inihahambing mo ang dalawang bersyon ng isang prompt
- nais mong suriin ang tono, haba, o format ng output

<br/>

> ℹ️ **NOTE**<br/>
> Maaari mong i-export at i-import ang mga naka-save na prompt sa [**Settings** > **Transform Prompts**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Dashboard

Gamitin ang **Dashboard** upang makita kung gaano karami ang iyong paggamit sa app at kung magkano ang gastos nito (para sa mga bayad na modelo).

![Dashboard summary](../images/screenshots/tl/dashboard-summary.png)

<br/>

> ℹ️ **NOTE**<br/>
> Kung gumagamit ka lamang ng **libre**ng mga modelo, maaaring zero ang halaga ng **gastos** at maaaring walang laman ang mga buod na nakatuon sa gastos. Sa **Buod**, ipinapakita pa rin ang **bilang ng mga tawag** (pagsasalin, pagpapalit, at pagbabago) sa **Paggamit sa paglipas ng panahon** at **Paggamit ayon sa modelo** kapag may aktibidad ka sa napiling panahon.

<br/>

<a id="filter-the-data"></a>
### I-filter ang data

Gamitin ang mga filter button sa itaas upang baguhin ang saklaw ng oras.

![Dashboard filters](../images/screenshots/tl/dashboard-filter.png)

<br/>

> ℹ️ **PAUNAWA**<br/>
> Ang filter na **User** ay nakikita lamang ng mga admin sa web na bersyon. Ang mga regular na user ay hindi makakakita ng filter na ito, at hindi ito available sa desktop app.

<br/>

<a id="dashboard-tabs"></a>
### Mga tab ng Dashboard

- Ang **Buod** ay nagbibigay ng pangkalahatang-ideya tungkol sa paggamit at gastos. Kasama rito ang **Paggamit sa paglipas ng panahon** (naka-stack na kumulatibong **bilang ng mga tawag** bawat araw para sa pagsasalin, pagpapalit, at pagbabago) at **Paggamit ayon sa modelo** (kabuuang **mga tawag bawat modelo**, kasama ang pagbabago).
- Ang **Ayos ng Paggamit** ay naghihiwalay ng aktibidad ayon sa wika ng pagsasalin, mode ng pagpapalit, at prompt sa pagbabago.
- Ang **Ayos ng Modelo** ay nagpapakita kung aling mga modelo ang iyong ginamit at kung magkano ang gastos nito.
- Ang **Ayos ng Araw** ay nagpapakita ng kabuuang pang-araw-araw.
- Ang **Lahat ng Tawag** ay nagpapakita ng buong kasaysayan ng mga tawag at nagbibigay-daan upang i-export ito.

<br/>

<a id="export-data"></a>
### I-export ang data

Maaaring i-export ng mga table sa dashboard ang data sa:

- **JSON**
- **CSV**
- **XLSX**

Makakatulong ito kung gusto mong suriin ang aktibidad sa labas ng app o ibahagi ang isang report.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Tanggalin ang naka-imbak na mga tala para sa isang modelo

Sa **Ayos ng Modelo** o **Lahat ng Tawag**, maaari mong alisin ang naka-imbak na mga tala para sa isang modelo sa pamamagitan ng pag-click sa icon ng "trash bin".

> ⚠️ **WARNING**<br/>
> Ang pagtanggal ng naka-imbak na mga tala ay hindi na maibabalik. Gamitin lamang ito kung sigurado ka na hindi mo na kailangan ang kasaysayang iyon.

Para tanggalin ang lahat ng data o alisin ang mga tala batay sa kanilang edad, pumunta sa [**Mga Setting** > **Pagsusubaybay ng Gastos**](#cost-tracking). Doon makikita mo ang mga opsyon para tanggalin ang lahat ng naka-imbak na data o mga datang mas matanda kaysa sa tiyak na petsa.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Kasaysayan

I-click ang **Kasaysayan** para tingnan ang kasaysayan ng iyong mga aksyon sa loob ng **Transrewrt**, kasama ang input at output ng bawat operasyon.

![History page](../images/screenshots/tl/history.png)

<br/>

<a id="filter-the-history"></a>
### I-filter ang kasaysayan

Gumagamit ang **Kasaysayan** ng mga parehong filter tulad ng sa pahina ng **Dashboard**. Gamitin mo ito para piliin ang saklaw ng oras.

![Dashboard filters](../images/screenshots/tl/dashboard-filter.png)

<br/>

> ℹ️ **PAUNAWA**<br/>
> Ang filter na **User** ay nakikita lamang ng mga admin sa web na bersyon. Ang mga regular na user ay hindi makakakita ng filter na ito, at hindi ito available sa desktop app.

<br/>

<a id="export-history-data"></a>
### I-export ang data ng kasaysayan

Ang pahina ng kasaysayan ay maaaring i-export ang nafilter na data sa:

- **JSON**
- **CSV**
- **XLSX**

Makakatulong ito kung gusto mong suriin ang aktibidad sa labas ng app o ibahagi ang isang report.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Mga Setting

Buksan ang **Mga Setting** mula sa sidebar para i-customize kung paano kumikilos ang app.

Ang mga available na tab ay nakadepende sa platform at sa iyong tungkulin:

| Tab               | Desktop | Web (admin) | Web (regular user) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | General Settings  |   Oo   |     Oo     |        Oo         |
  | Models            |   Oo   |     Oo     |        Oo         |
  | Languages         |   Oo   |     Oo     |        Oo         |
  | Cost Tracking     |   Oo   |     Oo     |         -          |
  | Transform Prompts |   Oo   |     Oo     |        Oo         |
  | Users             |    -    |     Oo     |         -          |
  | API Config        |   Oo   |     Oo     |         -          |
  | Tungkol dito             |   oo   |     oo     |        oo         |

<br/>

> ℹ️ **PAUNAWA**<br/>
> Sa web version, ang bawat user ay may sariling configuration. Ang mga setting tulad ng napiling mga modelo, mga wika, pangkalahatang opsyon, at mga prompt sa pagbabago ay iniimbak bawat user. Ang mga pagbabagong ginawa mo ay hindi nakakaapekto sa ibang mga gumagamit.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Mga Pangkalahatang Setting

Gamitin ang **Mga Pangkalahatang Setting** upang kontrolin ang pag-uugali sa pag-type, kung iniimbak ang mga detalye ng pagpapatakbo para sa **Kasaysayan**, at hitsura.

**Pag-uugali**

- Ang **Pag-uugali para sa ENTER** ay nagpapasya kung ang `Enter` ay papatakbo sa gawain o mag-i-insert ng bagong linya.
- Ang **Auto-translate kapag pinaste** ay nagsisimula ng pagsasalin pagkatapos mong i-paste ang teksto.
- Ang **I-copy nang awtomatiko ang resulta sa clipboard** ay awtomatikong kumokopya sa matagumpay na resulta.
- Ang **Real-time na pagsasalin (habang nagtatype)** ay nagsasalin habang nagtatype ka.
- Ang **Timeout (ms)** ay nagtatakda ng oras ng paghihintay para sa real-time na pagsasalin.

**Kasaysayan**

- Ang **Panatilihin ang kasaysayan ng pagpapatakbo** ay kontrola kung ang bawat pagsasalin, muling pagsulat, at pagbabago ay mag-iimbak ng **input at output na teksto** para sa [**Kasaysayan**](#history) sa sidebar. Ang pag-off nito ay magtatanong ng kumpirmasyon; kung ikaw ay kumpirmado, ang naka-imbak na teksto ng kasaysayan ay tatanggalin sa database.
- Ang **Tanggalin ang data ng kasaysayan** ay nagbibigay-daan sa iyo na alisin ang naka-imbak na teksto batay sa edad (halimbawa, mas matanda kaysa ilang buwan, o **lahat ng data (linisin)**) gamit ang **Tanggalin ang data**. Ito ay nakakaapekto lamang sa naka-save na teksto ng pagpapatakbo para sa **Kasaysayan**; hindi ito **tinatanggal** ang kabuuang gastos o datos ng paggamit. Para alisin o bawasan ang data ng **gastos**, gamitin ang [**Mga Setting** > **Pagsusubaybay ng Gastos**](#cost-tracking).

**Hitsura**

- Ang **Ipakita ang impormasyon ng gastos sa mga aksyon** ay kontrola ang display ng gastos bawat operasyon (kung available) at ang kabuuang gastos sa mga panel ng output ng Pagsasalin, Muling Pagsulat, at Pagbabago.
- Ang **Cost fraction digits** ay nagbabago kung paano ipinapakita ang mga desimal sa gastos.
- **Web lang:** Ang **magpakita ng margin sa paligid ng app** ay nagdaragdag ng ekstrang espasyo sa paligid ng interface.
- Ang **Font Family** ay nagbabago sa font ng teksto sa mga panel ng teksto.
- Ang **Size** ay nagbabago sa laki ng font.

**Backup ng Configuration**

- **Isama ang data ng paggamit sa backup** - kapag naka-enable, ang ZIP ay naglalaman din ng kasaysayan ng pagpapatakbo at data ng API call.
- **I-backup ang configuration** - gumagawa ng isang ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` sa UTC bilang default) na naglalaman ng `config.json`, `state.json`, opsyonal na encryption key, mga gumagamit, mga kagustuhan, mga custom na prompt, at data ng paggamit kung pinili mo ito. Matapos ang matagumpay na backup, ang kumpirmasyon ay nagpapakita ng pangalan ng naka-save na file.
- **I-restore mula sa backup** - binubuksan muna ang **dialog ng kumpirmasyon**. Piliin ang backup ZIP sa loob ng dialog (**Browse** / file picker o drag-and-drop kung suportado), pagkatapos ay suriin ang mga opsyon:
  - **Ibalik ang data ng paggamit** - i-import ang data ng paggamit/kasaysayan mula sa ZIP kapag ito ay na-backup na kasama ang paggamit; huwag i-enable kung gusto mo lamang ang mga setting at prompt.
  - **Tanggalin ang lumang data ng paggamit bago ibalik** - alisin ang umiiral na data ng paggamit/kasaysayan sa install na ito bago ilapat ang backup (opsyonal; gamitin kapag gusto mong malinis na palitan).

Ang mga backup na nilikha sa web o desktop version ay maaaring i-restore sa kabilang bersyon. Kapag ini-restore ang desktop backup sa web version, ang data ay mai-restore sa administrator user.

<br/>

<a id="models"></a>
### Mga Modelo

Gamitin ang **Mga Setting** > **Mga Modelo** upang pumili kung aling mga modelo ang lilitaw sa toolbar.

![Settings Models tab](../images/screenshots/tl/settings-models.png)

Ang pahina ay may dalawang listahan:

- **Mga Available na Modelo** sa kaliwa
- **Mga Napiling Modelo** sa kanan

Kabilang sa mga kapaki-pakinabang na kontrol:

- **Hanapin ang mga modelo...** upang makita ang modelo batay sa pangalan
- **Provider** chips upang paikliin ang listahan sa isang engine (OpenRouter, OpenAI, Ollama, …)
- **Tanging Libre Lang** upang ipakita lamang ang mga libreng modelo
- **I-refresh** upang i-reload ang listahan
- **Palawakin Lahat** at **I-collapse Lahat** kapag nagso-sort ka ayon sa provider

Ang mga model id ay may kasamang prefix ng provider (halimbawa `openrouter/…` laban sa `openai/…`). Ang mga badge tulad ng **OpenAI (OpenRouter)** laban sa **OpenAI (direkta)** ay nagpapakita kung paano na-reroute ang trapiko.

> ℹ️ **PAUNAWA**<br/>
> Ang **OpenRouter Body Builder** (`openrouter/bodybuilder`) ay isang router model, hindi isang pangkalahatang chat model: ang sagot nito ay JSON na naglalarawan sa OpenRouter API request bodies (halimbawa ay isang `requests` array na may `model` at `messages`). Kung gagamitin mo ito para sa **Isalin**, **Muling isulat**, o **Baguhin**, ang output panel ay magpapakita ng JSON na iyon imbes na tapos na teksto. Pumili ng normal na text model para sa mga gawaing ito. Tingnan ang [pahina ng Body Builder model](https://openrouter.ai/openrouter/bodybuilder) sa OpenRouter.

Mga Aksyon:

- Para idagdag ang isang modelo, i-click ang **Idagdag** o kahit saan sa entry.

- Para alisin ang isang modelo, i-click ang **X** sa tabi nito sa **Mga Napiling Modelo** o **Napili** sa entry sa Mga Available na Modelo.

- Para i-clear ang listahan, i-click ang **Huwag Piliin ang Lahat**. Ang kinakailangang libreng modelo ay mananatili sa listahan.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Kung ayaw mo pang idagdag ang credits sa OpenRouter agad, magsimula sa pamamagitan ng pag-enable ng **Tanging Libre Lang** at pumili ng mga libreng modelo (walang credit card ang kailangan). Maaari mo ring gamitin ang Ollama upang i-run ang mga modelo nang lokal nang walang anumang API key.

<br/>

<a id="languages"></a>
### Mga Wika

Gamitin ang **Mga Setting** > **Mga Wika** upang ayusin ang mga listahan ng wika na ginagamit sa app.

- Ang **Mga Nangungunang wika** ay nakapirmi malapit sa tuktok ng mga listahan ng wika sa **Isalin** at **Baguhin**.
- Ang **Custom na Wika** ay nagbibigay-daan sa iyo na magdagdag ng wika na wala sa built-in na listahan.

Kung magdadagdag ka ng custom na wika, lilitaw ito sa mga selector ng wika kasama ang mga built-in na opsyon.

<br/>

<a id="cost-tracking"></a>
### Pagsusubaybay ng Gastos

Gamitin ang **Mga Setting** > **Pagsusubaybay ng Gastos** upang pamahalaan ang impormasyon ng gastos.

- Ang **Kabuuang Gastos** ay nagpapakita ng kabuuang running total.
- Ang **Kopyahin ang Halaga** ay kinokopya ang kabuuan sa clipboard.
- Ang **I-reset ang Gastos** ay i-reset ang naitagong kabuuan patungo sa zero.
- Ang **Isabay sa paggamit ng API key** ay nagtatakda sa kabuuan upang tugma sa paggamit na na-report ng iyong OpenRouter account (OpenRouter lamang).
- Ang **Paggamit ng API Key** ay nagpapakita ng detalye ng paggamit sa OpenRouter, kung available.
- Ang **Tanggalin ang data ng gastos** ay tinatanggal ang lahat ng data, o mga entry na mas matanda sa napiling petsa lamang.

**Pagsusubaybay ng gastos:** Kapag gumagamit ka ng mga modelo ng OpenRouter, ipinapakita ng app ang iyong aktuwal na paggamit at paggastos batay sa impormasyon ng gastos mula sa OpenRouter. Para sa lahat ng iba pang provider, tinataya ng app ang mga gastos gamit ang mga presyo na inilathala ng OpenRouter; kung hindi available ang presyo, maaaring zero ang tantiya.

<br/>

> ℹ️ **PAUNAWA**<br/>
> **Ang lahat ng mga pigura ng gastos ay mga tantiya lamang para sa iyong sanggunian, hindi opisyal na mga pahayag sa pagbili.**

<br/>

> ⚠️ **BABAALA**<br/>
> Ang pagtanggal ng data ay hindi na maibabalik. Bago tanggalin, siguraduhing i-back up ang iyong data o i-export ito sa pamamagitan ng [**Kasaysayan**](#history)
> o [**Dashboard** > **Lahat ng Tawag**](#dashboard-tabs), kung hindi man ay mawawala ito nang permanente.
> Ang lahat ng kasaysayan ng input/output na nauugnay sa bawat entry ng API call ay matatanggal din.

<br/>

<a id="transform-prompts"></a>
### Mga prompt sa pagbabago

Gamitin ang **Mga Setting** > **Mga prompt sa pagbabago** para pamahalaan ang mga prompt nang buo.

Maaari mong:

- suriin ang mga na-save mong prompt
- tanggalin ang mga prompt
- i-import ang mga prompt mula sa isang file
- i-export ang mga prompt para sa backup o pagbabahagi
- i-load ang mga sample prompt sa listahan ng prompt

<br/>

<a id="users"></a>
### Mga Gumagamit

Gamitin ang **Mga Gumagamit** para pamahalaan ang mga user account sa web na bersyon. Maaari kang magdagdag ng mga user, i-update ang kanilang detalye, i-reset ang password, at tanggalin ang mga account.

<br/>

<a id="api-config"></a>
### Config ng API

Ang mga suportadong provider ay: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, at **Ollama** (lokal na mga modelo sa pamamagitan ng base URL). Kailangan mo lamang i-configure ang mga provider na iyong gagamitin.

**Web application: administrator lamang**

Ang mga API key ay ini-configure sa pamamagitan ng system o Docker environment variables – hindi ito isinasagot sa web UI. Ang pahinang ito ay nagpapakita kung aling mga provider ang may naka-configure na key at nagbibigay-daan sa iyo na subukan ang bawat isa sa pamamagitan ng pag-click sa button na `Test`.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Para baguhin ang isang API key, i-update ang environment variable sa iyong system o Docker configuration at i-restart ang server o container.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Ang **Backup ng Configuration** (tingnan ang [**Mga Pangkalahatang Setting** → Backup ng Configuration](#general-settings)) ay maaaring isama ang **nare-resolve** na mga key ng provider sa loob ng `config.json` ng ZIP. Ang pag-re-restore ng ZIP na ito ay **hindi** kinokopya ang mga key na iyon pabalik sa naka-save na config file ng server – ang mga live key ay patuloy na nagmumula sa environment at umiiral na file state gaya ng inilarawan doon.

<br/>

**Desktop application**

Gamitin ang **Config ng API** para iimbak ang mga API key para sa bawat provider na iyong ginagamit. Para sa Ollama, ipasok ang **base URL** sa halip na isang API key.

<br/>

> 💡 **Tip** <br/>
> Kung ayaw mong gamitin ang isang API key o magbayad para sa paggamit, maaari kang [i-download ang Ollama](https://ollama.com) at patakbuhin ang mga modelo (tulad ng `translategemma:4b`) nang lokal sa iyong makina nang libre. Bilang kahalili, maaari kang gumawa ng libreng OpenRouter account (walang kailangang credit card) para gamitin ang kanilang libreng mga modelo, o kumuha ng libreng API key mula sa Cerebras, Google, Groq, o Mistral AI.

<br/>

- Magdagdag lamang ng mga provider na kailangan mo. Sa **Mga Setting** > **Mga Modelo**, ang bawat model ID ay nagsisimula sa provider (halimbawa `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Para magdagdag ng API key, ilagay ang halaga sa text field at i-click ang `Save`. Para palitan ang umiiral na key, i-click ang `Edit`. Para i-verify kung gumagana ang key, i-click ang `Test`. Para sa Ollama base URL, i-click palagi ang `Test` upang suriin ang koneksyon.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Hindi mo maaaring makita ang kasalukuyang halaga ng isang API key. Maaari mo lamang itong palitan gamit ang button na `Edit`.
> Ang mga API key ay iniimbak nang naka-encrypt sa configuration.

<br/>

<a id="about"></a>
### Tungkol dito

Ipapakita ng tab na **Tungkol dito**:

- ang pangalan ng app
- ang numero ng bersyon
- ang petsa ng build
- isang link sa repository ng proyekto

<br/><br/>

<a id="common-issues"></a>
## Karaniwang isyu

Kung may bagay na hindi gumagana ayon sa inaasahan, suriin muna ang mga sumusunod.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Hindi nagsasalin, muling isinusulat, o binabago ng app ang teksto

Suriin na:

- may napiling modelo sa toolbar
- nakalista ang kahit isang modelo sa [**Mga Setting** > **Mga Modelo**](#models)
- gumagana ang iyong setup ng API

Kung gumagamit ka ng desktop app:

1. Buksan ang [**Mga Setting** > **Config ng API**](#api-config).
2. Tiyaking may naka-save nang kahit isang API key.
3. I-click ang **Subukan** sa tabi ng provider upang kumpirmahin na gumagana ang key.

<br/>

<a id="the-model-list-is-empty"></a>
### Walang laman ang listahan ng modelo

Buksan ang [**Mga Setting** > **Mga Modelo**](#models) at i-click ang **I-refresh**.

Kung kinakailangan:

- maghanap ng isang modelo
- i-on ang **Tanging Libre Lang**
- idagdag ang isa o higit pang mga modelo sa **Mga Napiling Modelo**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Masyadong mabagal o mahal ang resulta

Subukan ang isa o higit pa sa mga sumusunod:

- pumili ng ibang modelo
- gumamit ng mas maikling input
- patayin ang **Real-time na pagsasalin (habang nagta-type)** sa [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings)
- gamitin ang libreng mga modelo para sa mga simpleng gawain (tingnan ang [Mga Modelo](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Hindi tamang wika ang ginagamit sa interface

I-click ang icon ng mundo sa [toolbar](#toolbar) at pumili ng iyong nais na **Wika ng interface**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Masyadong maliit o mahirap basahin ang teksto

Buksan ang [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings) at baguhin ang:

- **Pamilya ng Font**
- **Laki**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Ang mga graph sa Dashboard ay walang laman

Ito ay normal kung:

- gumagamit ka lamang ng **libreng mga modelo** at tinitingnan mo ang mga pigura ng **gastos** (maaaring zero ang halaga); kailangan pa rin ng data ang mga graph ng bilang ng **paggamit** sa **Buod** mula sa napiling panahon
- ang napiling **filter ng oras** ay hindi sakop ang panahon kung kailan isinagawa ang mga tawag - subukang piliin ang **Lahat** upang suriin

Kung ang mga graph ay walang laman pa rin pagkatapos piliin ang **Lahat**, kumpirmahin na lumilitaw ang mga tawag sa [**Kasaysayan**](#history) o sa tab na **Lahat ng Tawag**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Ang gastos ay nagpapakita ng "hindi magagamit" o tila mali

Kapag gumagamit ka ng mga modelo sa pamamagitan ng **OpenRouter**, ipinapakita ng app ang aktuwal mong gastusin na iniulat ng OpenRouter.

Para sa **mga ibang provider** (OpenAI direkta, Anthropic direkta, atbp.), tinataya ang gastos batay sa datos ng presyo na inilathala ng OpenRouter. Kung walang tugmang presyo na natagpuan para sa isang modelo, ipapakita ito bilang **hindi magagamit** at hindi idaragdag sa kabuuang gastos mo.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Hindi tugma ang kabuuang gastos sa bill ng aking provider

Ang lahat ng pigura ng gastos sa app ay **mga tinatayang halaga para sa reperensya lamang**, hindi opisyal na pahayag ng singil.

Upang mapalapit ang kabuuan sa iyong aktuwal na gastusin sa OpenRouter, buksan ang [**Mga Setting** > **Pagsusubaybay ng Gastos**](#cost-tracking) at i-click ang **Isabay sa paggamit ng API key**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Nawawala ang History page sa sidebar

Maaaring naka-off ang **Panatilihin ang kasaysayan ng pagpapatakbo**. Buksan ang [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings) at i-enable ito. Tandaan na ang pag-on nito ay hindi ibabalik ang dati nang nawalang data ng kasaysayan.

<br/>

<a id="web-app-session-expired"></a>
### Web app: biglang na-redirect sa login page

Maaaring natapos na ang session mo. Mag-login muli. Kung madalas itong nangyayari, suriin ang server configuration para sa mga setting ng haba ng session.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Web admin: nakalimutan o nawala ang password

Ito ay para sa **web app na self-hosted** (Docker), hindi sa desktop (Electron) app.

- Kung may iba pang administrator na makakapag-sign in, maaari nilang buksan ang [**Mga Setting** > **Mga Gumagamit**](#users), piliin ang account, at itakda ang **bagong password** doon.
- Kung ikaw ay **naka-lock out** ngunit may **shell access** sa machine o container, i-reset ang password gamit ang helper na kasama sa imahe (palitan ang `transrewrt` kung binago mo ang default na pangalan, at i-quote ang password kung may espasyo o espesyal na karakter ito):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Ang default na admin username ay `admin` kung hindi ka pa naglalikha ng ibang account. Kapag nagbigay ka lamang ng isang argumento, ito ay itinuturing na bagong password para sa `admin`.

Kung tumatakbo ka mula sa **source checkout** imbes na Docker, gamitin ang:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Ang script ay nag-update sa talaan ng user sa SQLite database (at maaaring lumikha ng `admin` user kung kulang ito). Pagkatapos i-reset, mag-sign in gamit ang bagong password.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Walang data ang Dashboard para sa ibang user (web)

Tanging ang mga **administrator** lamang ang makakakita ng data mula sa lahat ng user sa pamamagitan ng **User** na filter. Ang karaniwang user ay nakakakita lamang ng kanilang sariling gawain ayon sa disenyo.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Binago ko ang isang prompt at nawala ang mga pag-edit

Kapag nag-e-edit ng prompt, i-click palagi ang **I-save** bago i-click ang **Bumalik sa Run**.

<br/><br/>

<a id="quick-tips"></a>
## Mga mabilis na tip

- Magsimula sa [**Isalin**](#translate) upang matiyak na gumagana ang iyong setup bago ka magpatuloy sa [**Muling isulat**](#rewrite) o [**Baguhin**](#transform).
- Gamitin ang [**Muling isulat**](#rewrite) para sa pang-araw-araw na pagpapabuti ng mga salita.
- Gamitin ang [**Baguhin**](#transform) kapag kailangan mo ng paulit-ulit na workflow para sa isang tiyak na gawain.
- Gamitin ang [**Dashboard**](#dashboard) kung gusto mong bantayan ang paggamit at gastos.
- Gamitin ang [**Kasaysayan**](#history) upang suriin ang mga nakaraang operasyon at ang buong input/output text nito.
- I-export ang mga prompt nang regular kung gumagawa ka ng isang library ng mga prompt na nais mong mapanatiling ligtas (tingnan ang [Mga prompt sa pagbabago](#transform-prompts)) o kung nais mong ibahagi ito sa iba.

<br/><br/>

<a id="disclaimer"></a>
## Paalala

Ang mga pangalan ng produkto at icon ay pagmamay-ari ng kanilang mga respektibong may-ari at ginagamit lamang para sa identification. Ang software na ito ay hindi konektado o iniindorso ng anumang mga banggit na brand.

<br/><br/>

<a id="license"></a>
## Lisensya

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
