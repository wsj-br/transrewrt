---
translated_at: "2026-03-26T00:33:01.983Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Gabay sa Gumagamit

<br/>

<a id="introduction"></a>
## Panimula

Tinutulungan ka ng Transrewrt sa paggawa sa teksto sa tatlong pangunahing paraan:

- **Isalin** - i-convert ang teksto mula sa isang wika patungo sa isa pa.
- **Muling-isulat** - i-paraipahayag ang teksto nang may iba't stylistic approach, tulad ng mas malinaw, mas maikli, o mas pormal.
- **Baguhin** - prosesuhin ang teksto gamit ang mga pasadyang AI na tagubilin na tinatawag na mga prompt.

<br/>

Tinatalakay ng gabay na ito kung paano gamitin ang app pagkatapos mong mai-install at mapatakbo ito. Para sa mga hakbang sa pag-install, tingnan ang pangkalahatang **[README](README.tl.md)**.

<br/>

> ℹ️ **TALA**<br/>
> Magagamit ang Transrewrt bilang desktop app para sa Windows at Linux, at bilang isang self-hosted na web app. Naka-focus ang gabay na ito sa pang-araw-araw na paggamit ng app. Ang mga bagay na nalilimita lamang sa isang bersyon ay malinaw na minarkahan.

<small>**Basahin sa iba pang mga wika:** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Tala tungkol sa UI at pagsasalin ng dokumentasyon:** Ang lahat ng mga wika sa interface maliban sa orihinal na English (UK)
> ay isinalin gamit ang mga AI model; ang mga salita ay maaaring hindi tumpak o may mga pagkakamali.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Talaan ng Nilalaman** 

- [Bago simulan](#bago-simulan)
  - [Paano makakakuha ng libreng OpenRouter API key (desktop app)](#paano-makakakuha-ng-libreng-openrouter-api-key-desktop-app)
- [Mga unang hakbang](#mga-unang-hakbang)
- [Pangunahing bahagi ng bintana](#pangunahing-mga-bahagi-ng-bintana)
  - [Sidebar](#sidebar)
  - [Toolbar](#toolbar)
  - [Input at output na panel](#input-at-output-na-panel)
- [Pagsasalin](#pagsasalin)
  - [I-salin ang teksto](#i-salin-ang-teksto)
  - [Paggamit ng wika](#paggamit-ng-wika)
  - [Makakatulong na mga setting sa pagsasalin](#makakatulong-na-mga-setting-sa-pagsasalin)
- [Muling-isulat](#muling-isulat)
- [Baguhin](#baguhin)
  - [Ipagana ang umiiral nang prompt](#ipagana-ang-umiiral-nang-prompt)
  - [Kung wala pa kang prompt](#kung-wala-pa-kang-prompt)
  - [Lumikha ng prompt nang mabilis](#lumikha-ng-prompt-nang-mabilis)
  - [I-edit ang prompt](#i-edit-ang-prompt)
  - [Subukan ang prompt bago gamitin](#subukan-ang-prompt-bago-gamitin)
- [Dashboard](#dashboard)
  - [I-filter ang datos](#i-filter-ang-datos)
  - [Mga tab ng dashboard](#mga-tab-ng-dashboard)
  - [I-export ang datos](#i-export-ang-datos)
  - [Tanggalin ang naka-imbak na tala para sa isang modelo](#tanggalin-ang-naka-imbak-na-tala-para-sa-isang-modelo)
- [Kasaysayan](#kasaysayan)
  - [I-filter ang datos](#i-filter-ang-datos-1)
  - [I-export ang datos ng kasaysayan](#i-export-ang-datos-ng-kasaysayan)
- [Mga Setting](#mga-setting)
  - [Pangkalahatang mga setting](#pangkalahatang-mga-setting)
  - [Mga modelo](#mga-modelo)
  - [Mga wika](#mga-wika)
  - [Pagsubayay sa gastos](#pagsubayay-sa-gastos)
  - [Mga transform prompt](#mga-transform-prompt)
  - [Mga gumagamit](#mga-gumagamit)
  - [I-configure ang API](#i-configure-ang-api)
  - [Tungkol dito](#tungkol-dito)
- [Karaniwang isyu](#karaniwang-isyu)
  - [Hindi nagsasalin, muling-isinusulat, o binabago ng app ang teksto](#hindi-nagsasalin-muling-isinusulat-o-binabago-ng-app-ang-teksto)
  - [Walang lamang listahan ng modelo](#walang-lamang-listahan-ng-modelo)
  - [Masyadong mabagal o mahal ang resulta](#masyadong-mabagal-o-mahal-ang-resulta)
  - [Mali ang wika sa interface](#mali-ang-wika-sa-interface)
  - [Masyadong maliit o mahirap basahin ang teksto](#masyadong-maliit-o-mahirap-basahin-ang-teksto)
  - [Walang laman ang mga graph sa dashboard](#walang-laman-ang-mga-graph-sa-dashboard)
  - [Nagpapakita ang gastos ng "hindi available" o tila mali](#nagpapakita-ang-gastos-ng-hindi-available-o-tila-mali)
  - [Di tugma ang kabuuang gastos sa biniling gasto ng provider ko](#di-tugma-ang-kabuuang-gastos-sa-biniling-gasto-ng-provider-ko)
  - [Nawawala ang History page sa sidebar](#nawawala-ang-history-page-sa-sidebar)
  - [Web app: biglang na-redirect sa login page](#web-app-biglang-na-redirect-sa-login-page)
  - [Walang datos ang dashboard para sa ibang gumagamit (web)](#walang-datos-ang-dashboard-para-sa-ibang-gumagamit-web)
  - [Nagbago ako ng prompt at nawala ang mga pagbabago](#nagbago-ako-ng-prompt-at-nawala-ang-mga-pagbabago)
- [Mga mabilis na tsek](#mga-mabilis-na-tsek)
- [Paunawa](#paunawa)
- [Lisensya](#lisensya)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Bago magsimula

Para gamitin ang Transrewrt, kailangan mo ng access sa kahit isang AI provider. Ang mga sinusuportahang provider ay: [OpenRouter](https://openrouter.ai) (na nagsasama-sama ng maraming modelo), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, at [Ollama](https://ollama.com) para sa mga lokal na modelo.

Hindi mo kailangang pumili ng bayad na modelo upang magsimula. Kapag idinagdag mo na ang iyong OpenRouter API key, awtomatikong pinapagana ng app ang isang **libre** na OpenRouter opsyon. Nito ay makapagsisimula ka nang mag-translate, mag-re-rewrite, at baguhin ang teksto. Bilang kahalili, maaari ka ring kumuha ng libreng API key mula sa Cerebras, Google, Groq, o Mistral AI.

Sa mas simpleng salita:

- Ang **modelo** ay ang AI engine na gumagawa ng trabaho. Ang mga modelo ay nakalista na may **naka-prefix na provider** (halimbawa `openrouter/…`, `openai/…`, `ollama/…`).
- Ang **API key** (o para sa Ollama, ang **base URL**) ang paraan kung paano nakakakonekta ang app sa provider na iyon.

Kung gumagamit ka ng **desktop app**, idagdag ang mga key sa [**Settings** > **API Config**](#api-config) para sa bawat provider na gagamitin mo. Para sa gumagamit lamang ng OpenRouter, tingnan ang [Paano kumuha ng API key](#how-to-get-an-api-key-desktop-app) sa ibaba. Kung ayaw mong gumamit ng API key, maaari mong i-install ang Ollama (mula sa [ollama.com](https://ollama.com)) at gamitin ang lokal na modelo, tulad ng `translategemma:4b`.

Kung gumagamit ka ng **web version**, ang server owner ang nagko-configure ng mga provider gamit ang environment variables, kaya hindi mo maaaring direktang i-input ang API keys sa application.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Paano kumuha ng libreng OpenRouter API key (desktop app)

Kung gumagamit ka ng desktop app, sundin ang mga hakbang na ito:

1. Pumunta sa [OpenRouter](https://openrouter.ai) sa iyong web browser.
2. Gumawa ng account o mag-sign in.
3. Buksan ang pahina ng [Keys](https://openrouter.ai/keys).
4. I-click ang button para lumikha ng bagong API key.
5. Bigyan ng pangalan ang key para madaling makilala sa susunod.
6. Kopyahin ang bagong API key.
7. Bumalik sa Transrewrt at buksan ang **Settings** > **API Config**.
8. I-paste ang key sa **OpenRouter API key** (sa ilalim ng **Settings** > **API Config**).
9. I-click ang **Test OpenRouter key** upang masiguro na gumagana ito.

<br/><br/>

<a id="getting-started"></a>
## Mga Hakbang sa Pagsisimula

Kung ito ang iyong unang pagkakataon na gumamit ng Transrewrt, sundin ang sumusunod na pagkakasunod-sunod:

1. Buksan ang app.
2. Pumili ng iyong **wika ng interface** mula sa icon ng mundo kung kailangan.
3. Kung gumagamit ka ng **desktop app**, buksan ang [**Settings** > **API Config**](#api-config), idagdag ang isang API key para sa kahit isang provider (halimbawa OpenRouter), at i-click ang **Test** upang i-verify kung gumagana.
4. Buksan ang [**Settings** > **Models**](#models) at idagdag ang isa o higit pang modelo sa **Selected Models**.
5. Buksan ang [**Settings** > **Languages**](#languages) at pumili ng iyong **Top languages** kung gusto mong unahin ang iyong mga madalas gamiting wika.
6. Pumunta sa **Translate** at gawin ang isang simpleng pagsasalin upang kumpirmahin na lahat ay gumagana.
7. Kapag gumana na, subukan ang **Rewrite** at pagkatapos ang **Transform**.

Mahalaga ang pagkakasunod-sunod na ito. Ito ay maiiwasan ang pinakakaraniwang problema sa unang paggamit: ang pagsubok na patakbuhin ang isang gawain bago pa naka-set ang koneksyon sa API o bago pa napili ang modelo.

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

Gamitin ang sidebar para lumipat sa loob ng app. Maaari mong i-collapse ang sidebar para mas maraming espasyo sa pamamagitan ng pag-click sa icon na nasa tabi ng logo ng app.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/tl/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Translate</strong> – buksan ang workspace ng pagsasalin.</li><br/>
        <li><strong>Rewrite</strong> – buksan ang workspace ng pagbabago ng teksto.</li><br/>
        <li><strong>Transform</strong> – buksan ang workspace ng custom prompt.</li><br/>
        <li><strong>Dashboard</strong> – nagpapakita ng impormasyon tungkol sa paggamit at gastos.</li><br/>
        <li><strong>Settings</strong> – buksan ang panel ng mga setting.</li><br/>
        <li><strong>History</strong> – nagpapakita ng kasaysayan ng paggamit kabilang ang input at output na teksto.</li><br/>
        <li><strong>User</strong> – nagpapakita ng username ng naka-log in na user (web lang).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Toolbar

Ang toolbar ay kaunti lamang nagbabago depende sa kinatatayuan mo sa application.

- Sa kaliwa, ipinapakita nito ang pangalan ng kasalukuyang pahina.
- Sa kanan, ipinapakita nito ang **pang-selector ng model** at ang kontrol ng **Wika ng Interface**.

Pinapayagan kang pumili kung aling AI engine ang gagamitin sa kasalukuyang gawain ng **pang-selector ng model**.

  ![Pang-selector ng model](../images/screenshots/tl/model-selector.png)

Hindi laging available ang ilang libreng model—maya-maya'y offline sila o may limitasyon sa paggamit. Kung ganito ang mangyari, awtomatikong aalisin ng app ang model na iyon sa iyong listahan ng available. Para kontrolin kung aling mga model ang lalabas, pumunta sa [**Mga Setting** > **Mga Model**](#models) at i-edit ang iyong listahan ng model. 
Maaari mo ring buksan nang diretso ang mga setting ng model sa pamamagitan ng pag-click sa icon ng provider sa kaliwa ng pangalan ng model sa toolbar.

<br/>

Ang **ikon ng mundo + code ng wika** ay nagbabago sa wika ng interface ng app, tulad ng mga menu at button. Hindi nito binabago ang mga wikang ginagamit sa **Pagsasalin**.

  ![Selector ng wika ng interface](../images/screenshots/tl/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Input at output panel

Ang karamihan sa mga workspace ay gumagamit ng **Input** panel sa kaliwa at **Output** panel sa kan kanan.

Ipapakita din ng bawat panel:

| **Input**                                                      | **Output**                                                                                                                  |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Bilang ng karakter <br/>- Bilang ng salita <br/>- Bilang ng talata   <br/> | - Gaano katagal ang gawain<br/>- **TPS** (mga token bawat segundo)<br/>- Bilang ng karakter, salita, at talata<br/>- Ang model na ginamit |


Kung gusto mong malaman ang mga teknikal na termino:

- Ang **Token** ay nangangahulugang maliit na bahagi ng teksto. Maaari mo itong iisipin bilang bahagi ng isang salita o maikling salita.
- Ang **TPS** ay kung gaano karaming mga bahagi ng teksto ang naproseso ng model bawat segundo.

<br/>

Maaari mo ring subaybayan ang gastos sa bawat operasyon (kung available) at ang kabuuang gastos, sa pamamagitan ng pag-enable sa opsyon na `Ipakita ang impormasyon ng gastos sa mga aksyon` sa [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## I-translate

Gamitin ang **I-translate** kapag gusto mong i-convert ang teksto mula sa isang wika patungo sa isa pa.

![Workspace ng pagsasalin](../images/screenshots/tl/translate.png)

<br/>

<a id="translate-text"></a>
### I-translate ang teksto

1. Buksan ang **I-translate**.
2. Pumili ng wika sa **Mula**.
3. Pumili ng wika sa **Patungo sa**.
4. Pumili ng model sa toolbar.
5. I-type o i-paste ang teksto sa **Input**.
6. I-click ang **I-translate**.
7. Basahin ang resulta sa **Output**.
8. Gamitin ang pindutan ng kopya kung gusto mong kopyahin ang resulta.

<br/>

<a id="language-selection"></a>
### Pagpili ng wika

- Ang **Mula** ay maaaring partikular na wika o **Tukuyin ang Wika**.
- Ang **Patungo sa** ay ang wika na gusto mong maging resulta.

Ang iyong napiling **Mga Nangungunang Wika** ay lalabas sa itaas ng listahan. Maaari mong itakda ang mga ito sa [**Mga Setting** > **Mga Wika**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Mga kapaki-pakinabang na setting sa pagsasalin

Sa [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings), maaari mong baguhin kung paano gumagana ang pagsasalin:

- Ang **Awtomatikong i-translate kapag kinopya** ay magpapatakbo ng pagsasalin pagkatapos mong i-paste ang teksto.
- Ang **Awtomatikong ikopya ang resulta sa clipboard** ay ikokopya nang awtomatiko ang resulta pagkatapos ng matagumpay na patakbo.
- Ang **Real-time translation (habang tinatype)** ay magtatranslate habang ikaw ay nagsusulat.
- Ang **Timeout (ms)** ay nakokontrol kung gaano katagal hihintayin ng app bago magpatakbo ng real-time na pagsasalin.
- Ang **Enter** ay nakokontrol kung ano ang mangyayari kapag pinindot mo ang `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Isulat Muli

Gamitin ang **Isulat Muli** kapag gusto mong paunlarin ang paraan ng pagsulat nang hindi binabago ang pangunahing kahulugan.

![Workspace ng pag-rewriting](../images/screenshots/tl/rewrite.png)

Mainam ito para sa:

- pag-ayos ng pagbigkas at grammar
- paggawa ng teksto na mas malinaw
- paggawa ng teksto na mas pormal o hindi pormal
- pagbubuod o palawakin ang teksto
- paggawa ng teksto na mas teknikal

<br/>

> 💡 **TIP**<br/>
> Kapag ginamit mo ang "**Check Spelling & Grammar**" mode, lilitaw ang pindutang `Ipakita ang mga pagbabago` sa output panel.
> I-click ang button na ito para i-toggle ang display ng mga pagkukumpuni, ipapakita o itatago ang partikular na mga pagbabago sa iyong teksto.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Baguhin

Gamitin ang **Baguhin** kapag gusto mong sundin ng AI ang isang pasadyang hanay ng mga tagubilin.

![Workplace ng Baguhin](../images/screenshots/tl/transform.png)

Ito ang pinakamalayang bahagi ng app. Maaari mong gamitin ito sa mga gawain tulad ng:

- pagbuod ng mga tala
- pagbabago ng magulong teksto sa isang mahusay na email
- pagkuha ng mga mahahalagang punto
- pag-convert ng teksto sa tiyak na format
- anumang iba pang pasadyang gawain sa input na teksto

<br/>

<a id="run-an-existing-prompt"></a>
### Patakbuhin ang isang umiiral nang prompt

1. Buksan ang **Baguhin**.
2. Pumili ng isang prompt mula sa listahan ng prompt.
3. Kung lumitaw ang **Wika ng Layunin**, pumili ng wika kung gusto mo.
4. Mag-type o i-paste ang teksto sa **Input**.
5. I-click ang **Baguhin**.
6. Basahin ang resulta sa **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Kung wala ka pang mga prompt

Kung walang laman ang iyong listahan ng prompt, i-click ang **I-load ang mga halimbawang prompt**. Nadaragdagan ito ng mga naka-built-in na halimbawa upang mabilis mong masimulan.

<br/>

> ℹ️ **TALA**<br/>
> Ang mga halimbawang prompt ay nakasulat sa Ingles. Matapos i-load ang mga ito, maaari mong i-edit ang isang prompt at gamitin ang **Isalin ang prompt** upang maisalin ito sa iyong wika.

<br/>

<a id="create-a-prompt-quickly"></a>
### Lumikha ng prompt nang mabilis

Ang pinakamabilis na paraan para lumikha ng isang prompt ay:

1. I-click ang **Bagong prompt**.
2. I-click ang **Bumuo ng prompt**.
3. Ilarawan kung ano ang gusto mong gawin ng prompt.
4. Pumili ng isang modelo.
5. Hayaang bumuo ang app ng draft para sa iyo.
6. I-review ang draft at i-click ang **I-save**.

![Bumuo ng prompt](../images/screenshots/tl/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### I-edit ang isang prompt

Kapag lumilikha o nag-e-edit ka ng isang prompt, ang editor ay lilitaw sa kaliwa at isang panel ng pagsubok ay lilitaw sa kanan.

![Editor ng prompt sa Baguhin](../images/screenshots/tl/transform-prompt-edit.png)

Ang pangunahing mga field ay:

- **Pangalan ng prompt**: ang pangalan na ipinapakita sa listahan ng prompt.
- **Mga tagubilin sa prompt (opsyonal)**: maikling tulong na ipinapakita sa gumagamit kapag pinapatakbo ang prompt.
- **Papel ng modelo**: ang kabuuang papel na itinakda sa AI, tulad ng 'Ikaw ay isang kapaki-pakinabang na katulong.'
- **Mga tagubilin sa modelo (isa bawat hanay)**: mga tiyak na patakaran na gusto mong sundin ng AI.
- **Deskripsyon ng output**: maikling salita na naglalarawan sa resulta, tulad ng 'buod' o 'muling pagsulat'.
- **Temperature (0.0 → 1.0)**: kung paano kumilos ang modelo; tingnan sa ibaba.
- **Tanungin ang wika ng layunin**: nagdadagdag ng selector ng wika sa pagpapatakbo ng prompt.

Kung bago sayo ang teknikal na terminong **Temperature**, isipin ito ganito:

- Ang **mas mababa** na temperature ay nagbibigay ng mas matatag, mas makatwirang resulta.
- Ang **mas mataas** na temperature ay nagbibigay ng mas maraming iba't-ibang at pagkamalikhain.

Maaari mo ring gamitin:

- **`Bumuo ng prompt`** para lumikha ng bagong draft mula sa simpleng deskripsyon
- **`Pahusayin ang prompt`** para baguhin ang isang umiiral na prompt
- **`Isalin ang prompt`** para maisalin ang mga field ng prompt

<br/>

> ⚠️ **BABAЛАAN**<br/>
> I-click ang **`I-save`** bago i-click ang **`Bumalik sa Patakbo`**. Kapag bumalik nang hindi isinave, mawawala ang iyong mga pagbabago.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Subukan muna ang prompt bago gamitin

Pinapayagan ka ng panel ng pagsubok sa kanan na subukan ang prompt kasama ang halimbawang teksto bago mo ito gamitin sa pangkalahatang trabaho.

Magagamit ito kapag:

- gumagawa ka ng bagong prompt
- inihahambing mo ang dalawang bersyon ng prompt
- gusto mong suriin ang tono, haba, o format ng output

<br/>

> ℹ️ **TALA**<br/>
> Maaari mong i-export at i-import ang mga naka-save na prompt sa [**Mga Setting** > **Mga Prompt sa Baguhin**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Dashboard

Gamitin ang **Dashboard** upang makita kung gaano mo ginagamit ang app at magkano ang ginagastos mo (para sa mga bayad na modelo).

![Buod ng Dashboard](../images/screenshots/tl/dashboard-summary.png)


<br/>

> ℹ️ **TALA**<br/>
> Kung ginagamit mo lamang ang libreng mga modelo, ang mga tsart na may kinalaman sa gastos ay magiging blangko. 

<br/>

<a id="filter-the-data"></a>
### I-filter ang data

Gamitin ang mga pindutan ng pag-filter sa itaas para baguhin ang saklaw ng oras.

![Mga filter ng Dashboard](../images/screenshots/tl/dashboard-filter.png)

<br/>

> ℹ️ **TALA**<br/>
> Ang **User** filter ay makikita lamang ng mga admin sa bersyon ng web. Ang karaniwang mga gumagamit ay hindi makakakita nito, at hindi ito magagamit sa desktop app.

<br/>

<a id="dashboard-tabs"></a>

### Mga tab ng Dashboard

- **Buod** ay nagbibigay sa iyo ng pangkalahatang-ideya tungkol sa paggamit at gastos.
- **Ayón sa Gamit** ay naghihiwalay ng mga gawain ayon sa wikang isinalin, paraan ng pagbabago, at mensaheng nagpapagana.
- **Ayón sa Modelo** ay nagpapakita kung aling mga modelo ang ginamit mo at kung magkano ang gastos nito.
- **Ayón sa Araw** ay nagpapakita ng kabuuang gastos bawat araw.
- **Lahat ng Tawag** ay nagpapakita ng kompletong kasaysayan ng mga tawag at nagbibigay-daan sa iyo na i-export ito.

<br/>

<a id="export-data"></a>
### I-export ang data

Ang mga tabla sa dashboard ay maaaring mag-export ng data sa:

- **JSON**
- **CSV**
- **XLSX**

Magagamit ito kung gusto mong suriin ang mga gawain nang hindi nakatutok sa app o i-share ang ulat.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Burahin ang naka-imbak na mga tala para sa isang modelo

Sa **Ayón sa Modelo** o **Lahat ng Tawag**, maaari mong tanggalin ang naka-imbak na mga tala para sa isang modelo sa pamamagitan ng pag-click sa "trash bin" icon.

> ⚠️ **BABAALA**<br/>
> Ang pagtanggal ng naka-imbak na mga tala ay hindi na maibabalik. Gamitin lamang ito kung sigurado ka nang hindi mo na kailangan ang kasaysayang iyon.

Para burahin ang lahat ng data o tanggalin ang mga tala batay sa edad nito, pumunta sa [**Mga Setting** > **Cost Tracking**](#cost-tracking). Doon makikita mo ang opsyon na burahin ang lahat ng naka-imbak na data o ang mga datang mas matanda kaysa sa isang tiyak na petsa.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Kasaysayan

Pindutin ang **Kasaysayan** upang tingnan ang kasaysayan ng iyong mga aksyon sa loob ng **Transrewrt**, kabilang ang input at output ng bawat operasyon.

![Pahina ng Kasaysayan](../images/screenshots/tl/history.png)

<br/>

<a id="filter-the-history"></a>
### I-filter ang data

Ginagamit ng **Kasaysayan** ang mga katulad na filter ng pahina ng **Dashboard**. Gamitin ito upang piliin ang sakop ng oras.

![Mga filter ng Dashboard](../images/screenshots/tl/dashboard-filter.png)

<br/>

> ℹ️ **TALA**<br/>
> Ang filter na **User** ay nakikita lamang ng mga admin sa web na bersyon. Ang karaniwang gumagamit ay hindi makakakita ng filter na ito, at hindi ito available sa desktop na app.

<br/>

<a id="export-history-data"></a>
### I-export ang data ng kasaysayan

Ang pahina ng kasaysayan ay maaaring i-export ang nafilter na datos sa:

- **JSON**
- **CSV**
- **XLSX**

Magagamit ito kung gusto mong suriin ang gawain nang hindi nakatutok sa app o i-share ang isang ulat.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Mga Setting

Buksan ang **Mga Setting** mula sa sidebar upang i-customize ang pag-uugali ng app.

Depende ang mga available na tab sa platform at sa iyong tungkulin:

  | Tab               | Desktop | Web (admin) | Web (karaniwang gumagamit) |
  |-------------------|:-------:|:-----------:|:--------------------------:|
  | Mga Pangkalahatang Setting |   oo   |     oo     |        oo         |
  | Mga Modelo            |   oo   |     oo     |        oo         |
  | Mga Wika         |   oo   |     oo     |        oo         |
  | Cost Tracking     |   oo   |     oo     |         —          |
  | Mga Nagpapagana ng Pagbabago |   oo   |     oo     |        oo         |
  | Mga Gumagamit             |    —    |     oo     |         —          |
  | API Config        |   oo   |     oo     |         —          |
  | Tungkol           |   oo   |     oo     |        oo         |

<br/>

> ℹ️ **TALA**<br/>
> Sa bersyon ng web, bawat gumagamit ay may sariling konpigurasyon. Ang mga setting tulad ng napiling mga modelo, mga wika, pangkalahatang opsyon, at mga nagpapagana ng pagbabago ay iniimbak bawat gumagamit. Ang mga pagbabagong ginawa mo ay hindi makaapekto sa ibang mga gumagamit.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Pangkalahatang mga setting

Gamitin ang **Pangkalahatang Mga Setting** upang kontrolin ang pag-uugali sa pagtatype, kung naka-imbak ang mga detalye ng pagpapagana para sa **Kasaysayan**, at hitsura.

**Uugali**

- **Uugali para sa ENTER** ay nagsisilbing pumili kung ang `Enter` ay magpapatakbo ng gawain o magda-dagdag ng bagong linya.
- **I-translate nang awtomatiko pagkapaste** ay awtomatikong nagtatangka ng pagsasalin pagkatapos i-paste ang teksto.
- **I-copy nang awtomatiko ang resulta sa clipboard** ay awtomatikong kinokopya ang matagumpay na resulta.
- **Real-time na pagsasalin (habang nagta-type)** ay nagsasalin habang nagta-type.
- **Timeout (ms)** ay nagtatakda ng oras na paghihintay para sa real-time na pagsasalin.

**Kasaysayan**

- **Itago ang kasaysayan ng pagpapagana** ay namamahala kung mag-iimbak ba ang **teksto ng input at output** sa bawat pagsasalin, pagbabago, at pagbabagong-anyo para sa view ng [**Kasaysayan**](#history) sa sidebar. Ang pag-disable ay magtatanong ng kumpirmasyon; kapag kinumpirma, tatanggalin ang naka-imbak na teksto ng kasaysayan mula sa database.
- **Tanggalin ang data ng kasaysayan** ay nagbibigay-daan sa iyo na alisin ang naka-imbak na teksto batay sa edad nito (halimbawa, higit sa ilang buwan, o **lahat ng data (linisin)**) gamit ang **Tanggaling ang data**. Limitado ito sa mga naka-save na teksto ng operasyon para sa view ng **Kasaysayan**; **hindi ito** tinatanggal ang kabuuang gastos o datos ng paggamit. Para tanggalin o bawasan ang datos na may **gastos**, gamitin ang [**Mga Setting** > **Cost Tracking**](#cost-tracking).

**Hitsura**

- **Ipakita ang impormasyon ng gastos sa mga aksyon** ay namamahala sa pagpapakita ng gastos bawat operasyon (kung available) at sa kabuuang gastos sa mga panel ng output ng Pagsasalin, Pagbabago, at Pagbabago.
- **Cost fraction digits** ay nagbabago kung paano ipapakita ang mga desimal sa gastos.
- **Web lamang:** **ipakita ang margin sa paligid ng app** ay nagdaragdag ng karagdagang espasyo sa paligid ng interface.
- **Family ng Font** ay nagbabago ng estilo ng letra sa mga panel ng teksto.
- **Laki** ay nagbabago ng laki ng font.

<br/>

<a id="models"></a>

### Mga Modelo

Gamitin ang **Mga Setting** > **Mga Modelo** upang pumili kung aling mga modelo ang lilitaw sa toolbar.

![Settings Models tab](../images/screenshots/tl/settings-models.png)

May dalawang listahan ang pahinang ito:

- **Mga Magagamit na Modelo** sa kaliwa
- **Mga Nipili na Modelo** sa kanan

Kasama sa mga kapaki-pakinabang na kontrol ang:

- **Hanapin ang mga modelo...** upang mahanap ang isang modelo batay sa pangalan
- **Provider** chips upang panghigpitin ang listahan sa isang engine (OpenRouter, OpenAI, Ollama, …)
- **Tanging Libre Lamang** upang ipakita lamang ang mga libreng modelo
- **I-refresh** upang i-reload ang listahan
- **Palawakin Lahat** at **I-collapse Lahat** kapag nagso-sort ka ayon sa provider

Naglalaman ang mga model ID ng prefix ng provider (halimbawa `openrouter/…` kumpara sa `openai/…`). Ang mga badge tulad ng **OpenAI (OpenRouter)** kumpara sa **OpenAI (direkta)** ay nagpapakita kung paano na-reroute ang trapiko.

> ℹ️ **PAUNAWA**<br/>
> Ang **OpenRouter Body Builder** (`openrouter/bodybuilder`) ay isang router model, hindi pangkalahatang chat model: ang sagot nito ay JSON na naglalarawan ng OpenRouter API request bodies (halimbawa ay isang `requests` array na may `model` at `messages`). Kung gagamitin mo ito para sa **Isalin**, **Muling Isulat**, o **Baguhin**, ang output panel ay magpapakita ng JSON na ito imbes na tapos na teksto. Pumili ng normal na text model para sa mga gawaing ito. Tingnan ang [pahina ng Body Builder model](https://openrouter.ai/openrouter/bodybuilder) sa OpenRouter.

Mga Aksyon:

 - Upang magdagdag ng modelo, i-click ang **Idagdag** o kahit saan sa entry.

 - Upang alisin ang modelo, i-click ang **X** sa tabi nito sa **Mga Napiling Modelo** o ang **Napili** sa entry sa Mga Magagamit na Modelo.

 - Upang i-clear ang listahan, i-click ang **Huwag Piliin ang Lahat**. Mananatili ang kailangang libreng modelo sa listahan.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Kung ayaw mong idagdag agad ang mga credit sa OpenRouter, magsimula sa pamamagitan ng pag-activate ng **Tanging Libre Lamang** at pumili ng mga libreng modelo (hindi kailangan ng credit card). Maaari mo ring gamitin ang Ollama upang patakbuhin ang mga modelo nang lokal nang walang API key.

<br/>

<a id="languages"></a>
### Mga Wika

Gamitin ang **Mga Setting** > **Mga Wika** upang ayusin ang mga listahan ng wika na ginagamit sa app.

- Ang **Nangungunang mga wika** ay nakapirmi sa itaas ng mga listahan ng wika sa **Isalin** at **Baguhin**.
- Ang **Pasadyang wika** ay nagbibigay-daan upang magdagdag ng wika na hindi kasama sa built-in na listahan.

Kapag nagdagdag ka ng pasadyang wika, ito ay lilitaw sa mga selector ng wika kasama ng mga built-in na opsyon.

<br/>

<a id="cost-tracking"></a>
### Pagsubaybay sa Gastos

Gamitin ang **Mga Setting** > **Pagsubaybay sa Gastos** upang pamahalaan ang impormasyon sa gastos.

- Ang **Kabuuang Gastos** ay nagpapakita ng kabuuang halaga.
- Ang **Kopyahin ang Halaga** ay kinokopya ang kabuuan sa clipboard.
- Ang **I-reset ang Gastos** ay nag-reset ng nakaimbak na kabuuan sa zero.
- Ang **I-sync sa paggamit ng API key** ay nagse-set ng kabuuan upang tumugma sa paggamit na iniulat ng iyong OpenRouter account (Tanging OpenRouter).
- Ang **Paggamit ng API Key** ay nagpapakita ng detalye ng OpenRouter kung mayroon.
- Ang **I-delete ang datos ng gastos** ay tinatanggal ang lahat ng data, o kaya ay mga entry na mas matanda kaysa sa napiling petsa.


 **Pagsubaybay sa Gastos:** Kapag gumagamit ka ng mga modelo ng OpenRouter, ipinapakita ng app ang aktuwal na paggamit at gastusin mo batay sa impormasyon sa gastos mula sa OpenRouter. Para sa lahat ng iba pang provider, tinataya ng app ang mga gastos gamit ang mga presyo na inilathala ng OpenRouter; kung walang magagamit na presyo, maaaring zero ang tantiya.

<br/>

> ℹ️ **PAUNAWA**<br/>
> **Ang lahat ng mga halagang gastos ay mga tantiya lamang para sa iyong reperensya, at hindi opisyal na mga billing na pahayag.**


<br/>

> ⚠️ **BABALA**<br/>
> Ang pagtanggal ng data ay hindi maibabalik. Bago tanggalin, tiyaking may backup na iyong datos o i-export ito sa pamamagitan ng [**Kasaysayan**](#history) 
> o [**Dashboard** > **Lahat ng Tawag**](#dashboard-tabs), kung hindi man ay mawawala ito nang permanente. 
> Tatanggalin din ang lahat ng kasaysayan ng input/output na kaugnay sa bawat entry ng tawag sa API.

<br/>

<a id="transform-prompts"></a>
### Mga Prompt sa Pagbabago

Gamitin ang **Mga Setting** > **Mga Prompt sa Pagbabago** upang pamahalaan ang mga prompt nang buo.

Maaari mong:

- suriin ang mga naka-save mong prompt
- tanggalin ang mga prompt
- i-import ang mga prompt mula sa file
- i-export ang mga prompt para sa backup o pagbabahagi

<br/>

<a id="users"></a>
### Mga Gumagamit

Gamitin ang **Mga Gumagamit** upang pamahalaan ang mga account ng gumagamit sa bersyon ng web. Maaari mong idagdag ang mga gumagamit, i-update ang kanilang mga detalye, i-reset ang mga password, at tanggalin ang mga account.

<br/>

<a id="api-config"></a>
### API config

Ang mga suportadong provider ay: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, at **Ollama** (mga lokal na modelo sa pamamagitan ng base URL). Kailangan mo lamang i-configure ang mga provider na gagamitin mo.

**Web application: administrator lamang**

Inii-configure ang mga API key sa pamamagitan ng system o Docker environment variables — hindi ito ipinapasok sa web UI. Ipinapakita ng pahinang ito kung aling mga provider ang may naka-configure na key at nagbibigay-daan upang subukan ang bawat isa sa pamamagitan ng pag-click sa pindutang **`Test`**.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Upang baguhin ang isang API key, i-update ang environment variable sa iyong system o Docker configuration at i-restart ang server o container.

<br/>

**Desktop application**

Gamitin ang **API Config** upang iimbak ang mga API key para sa bawat provider na gagamitin mo. Para sa Ollama, ipasok ang **base URL** imbes na API key.

<br/>

> 💡 **Tip** <br/>
> Kung ayaw mong gumamit ng API key o magbayad para sa paggamit, maaari kang [i-download ang Ollama](https://ollama.com) at patakbuhin ang mga modelo (tulad ng `translategemma:4b`) nang lokal sa iyong makina nang libre. Bilang kahalili, maaari kang lumikha ng libreng OpenRouter account (walang kailangan na credit card) upang gamitin ang kanilang libreng mga modelo, o kaya ay kumuha ng libreng API key mula sa Cerebras, Google, Groq, o Mistral AI.

<br/>

- Idagdag lamang ang mga provider na kailangan mo. Sa **Mga Setting** > **Mga Modelo**, ang bawat model id ay nagsisimula sa provider (halimbawa `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Upang magdagdag ng isang API key, ipasok ang halaga sa text field at i-click ang **`I-save`**. Upang palitan ang isang umiiral nang key, i-click ang **`I-edit`**. Upang i-verify na gumagana ang isang key, i-click ang **`Subukan`**. Para sa Ollama base URL, palaging i-click ang **`Subukan`** upang i-check ang koneksyon.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Hindi mo makikita ang kasalukuyang halaga ng isang API key. Maaari mo lamang palitan ito gamit ang pindutang **`I-edit`**.
> Ang mga API key ay iniimbak nang naka-encrypt sa configuration.

<br/>

<a id="about"></a>

### Tungkol sa

Ang pang-ilalim na **Tungkol sa** ay nagpapakita ng:

- pangalan ng app
- numero ng bersyon
- petsa ng paggawa
- link sa repository ng proyekto

<br/><br/>

<a id="common-issues"></a>
## Karaniwang Isyu

Kung may bahagi na hindi gumagana ayon sa inaasahan, suriin muna ang mga sumusunod.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Ang app ay hindi magba-brain, mag-rerewrite, o magpapalit ng teksto

Suriin ang mga sumusunod:

- tinitiyak na may napili ka nang modelo sa toolbar
- may kahit isang modelo na nakalista sa [**Mga Setting** > **Mga Modelo**](#models)
- gumagana ang iyong API setup

Kung gumagamit ka ng desktop app:

1. Buksan ang [**Mga Setting** > **API Config**](#api-config).
2. Tiyakin na may naka-save nang kahit isang API key.
3. I-click ang **Test** sa tabi ng provider para kumpirmahin kung gumagana ang key.

<br/>

<a id="the-model-list-is-empty"></a>
### Walang laman ang listahan ng modelo

Buksan ang [**Mga Setting** > **Mga Modelo**](#models) at i-click ang **Refresh**.

Kung kailangan:

- hanapin ang modelo
- i-on ang **Mga Libre Lang**
- magdagdag ng isang o higit pang modelo sa **Napiling mga Modelo**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Masyadong mabagal o mahal ang resulta

Subukan ang isa o higit pang mga sumusunod:

- pumili ng ibang modelo
- gumamit ng mas maikling input
- i-off ang **Real-time translation (habang tinatype)** sa [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings)
- gamitin ang mga libreng modelo para sa mga simpleng gawain (tingnan ang [Mga Modelo](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Hindi tamang wika ang nasa interface

I-click ang icon ng mundo sa [toolbar](#toolbar) at piliin ang iyong gustong **Wika ng Interface**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Masyadong maliit o mahirap basahin ang teksto

Buksan ang [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings) at baguhin:

- **Pamilya ng Font**
- **Laki**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Walang laman ang mga graph sa dashboard

Normal lang ito kung:

- gumagamit ka lang ng **mga libreng modelo** (magkakawala ang graph ng gastos)
- ang napiling **filter ng oras** ay hindi saklaw sa panahong ginawa ang paggamit — subukan ang **Lahat** para makasiguro

Kung wala pa ring laman ang mga graph kahit napili mo ang **Lahat**, kumpirmahin kung may mga tawag na lumilitaw sa [**Kasaysayan**](#history) o sa pang-ilalim na **Lahat ng Tawag**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Ang gastos ay nagsasabing "hindi available" o tila mali

Kapag gumamit ka ng mga modelo sa pamamagitan ng **OpenRouter**, ipinapakita ng app ang tunay mong ginastos na iniulat ng OpenRouter.

Para sa **mga ibang provider** (OpenAI direktang, Anthropic direktang, atbp.), ang gastos ay hinuhula mula sa mga impormasyon ng presyo na inilathala ng OpenRouter. Kung walang eksaktong presyo ang makita para sa isang modelo, ang gastos ay magpapakita bilang **hindi available** at hindi idaragdag sa kabuuang halaga.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Hindi tugma ang kabuuang gastos sa bill ng provider

Lahat ng bilang ng gastos sa app ay mga **hula lamang para sa reperensya**, hindi opisyales na pahayag sa singilin.

Upang mas palapit na mag-tugma ang kabuuan sa tunay mong ginagastos sa OpenRouter, buksan ang [**Mga Setting** > **Pagsusubaybay ng Gastos**](#cost-tracking) at i-click ang **Sync with API key usage**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Kulang ang History page sa sidebar

Posibleng **hindi pinagana** ang *Keep execution history*. Buksan ang [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings) at i-on ito. Tandaan na hindi na maibabalik ang nakaraang data na nawala kapag ito ay in-on.

<br/>

<a id="web-app-session-expired"></a>
### Web app: biglang binayaran sa login page

Posibleng natapos na ang iyong sesyon. Mag-login ulit. Kung madalas itong nangyayari, suriin ang server configuration para sa mga setting ng haba ng sesyon.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Walang datang ipinapakita ang dashboard para sa ibang user (web)

**Admin lamang** ang may kakayahang tingnan ang datos ng lahat ng user gamit ang **Filter ng User**. Ang mga ordinaryong user ay nakakakita lamang ng kanilang sariling aktibidad bilang disenyo.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Bago ko binago ang prompt, nawala ang mga pag-edit

Kapag nag-e-edit ng prompt, tiyaking i-click ang **I-save** bago pindutin ang **Bumalik sa Run**.

<br/><br/>

<a id="quick-tips"></a>
## Mga Bilis na Tip

- Simulan muna sa [**I-translate**](#translate) upang matiyak na gumagana ang iyong setup bago gumalaw sa [**I-rewrite**](#rewrite) o [**I-transform**](#transform).
- Gamitin ang [**I-rewrite**](#rewrite) para sa pang-araw-araw na pagpapabuti ng mga salita.
- Gamitin ang [**I-transform**](#transform) kapag kailangan mo ng paulit-ulit na proseso para sa isang tiyak na gawain.
- Gamitin ang [**Dashboard**](#dashboard) kung nais mong bantayan ang paggamit at ang gastos.
- Gamitin ang [**Kasaysayan**](#history) para suriin ang mga nakaraang operasyon at ang buong input/output na teksto.
- I-export ang mga prompt nang regular kung nagtatayo ka ng aklatan ng mga prompt na ibibigay mo o nais na itago (tingnan ang [Mga Prompt sa Transform](#transform-prompts)).

<br/><br/>

<a id="disclaimer"></a>

## Paalala

Ang mga pangalan at icon ng produkto ay pag-aari ng kani-kanilang may-ari at ginagamit lamang para sa layuning pagkilala. Ang software na ito ay walang kaugnayan at hindi pinagtitibay ng anumang mga brand na binanggit.

<br/><br/>

<a id="license"></a>
## Lisensya

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)