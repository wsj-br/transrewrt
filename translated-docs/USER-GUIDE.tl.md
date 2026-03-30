---
translation_last_updated: '2026-03-30T00:46:07.115Z'
source_file_mtime: '2026-03-30T00:37:44.601Z'
source_file_hash: e1b91eca0124d467
translation_language: tl
source_file_path: USER-GUIDE.md
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Gabay sa User

<br/>

<a id="introduction"></a>
## Panimula

Tinutulungan ka ng Transrewrt na gumana sa teksto sa tatlong pangunahing paraan:

- **Translation** - i-convert ang teksto mula sa isang wika patungo sa isa pa.
- **Rewrite** - i-rephrase ang teksto sa ibang istilo, tulad ng mas malinaw, mas maikli, o mas pormal.
- **Transform** - i-process ang teksto gamit ang mga custom na AI na mga panuto na tinatawag na mga prompt.

<br/>

Ipapaliwanag ng gabay na ito kung paano gamitin ang app kapag naka-install at tumatakbo na ito. Para sa mga hakbang sa pag-install, tingnan ang pangunahing **[README](README.tl.md)**.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Ang Transrewrt ay available bilang desktop app para sa Windows at Linux, at bilang self-hosted web app. Tinitiyak ng gabay na ito ang pang-araw-araw na paggamit ng app. Kung may bagay na nalalapat lamang sa isang bersyon, malinaw itong naipapakita.

<small>**Basahin sa iba pang mga wika:** </small>
<small id="lang-list">[English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Tala sa pagsasalin ng UI at dokumentasyon:** Ang lahat ng mga wika sa interface maliban sa orihinal na Ingles (UK)
> ay isinalin gamit ang mga modelo ng AI; maaaring hindi tumpak o may mga pagkakamali ang mga salita.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Talaan ng Nilalaman**

- [Bago ka magsimula](#before-you-start)
  - [Paano makakuha ng libreng OpenRouter API key (desktop app)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Mga simula](#getting-started)
- [Mga pangunahing bahagi ng window](#main-parts-of-the-window)
  - [Sidebar](#sidebar)
  - [Toolbar](#toolbar)
  - [Input at output panels](#input-and-output-panels)
- [I-translate](#translate)
  - [I-translate ang teksto](#translate-text)
  - [Pagpili ng wika](#language-selection)
  - [Makakatulong na mga setting sa pag-translate](#helpful-translation-settings)
- [I-revise](#rewrite)
- [I-transform](#transform)
  - [Patakbuhin ang umiiral na prompt](#run-an-existing-prompt)
  - [Kung wala pang prompts](#if-you-have-no-prompts-yet)
  - [Likhain agad ang prompt](#create-a-prompt-quickly)
  - [I-edit ang prompt](#edit-a-prompt)
  - [Subukan ang prompt bago gamitin](#test-a-prompt-before-using-it)
- [Dashboard](#dashboard)
  - [I-filter ang data](#filter-the-data)
  - [Mga tab ng dashboard](#dashboard-tabs)
  - [I-export ang data](#export-data)
  - [Tanggalin ang naka-imbak na mga tala para sa isang modelo](#delete-stored-records-for-a-model)
- [Kasaysayan](#history)
  - [I-filter ang data](#filter-the-data-1)
  - [I-export ang data ng kasaysayan](#export-history-data)
- [Mga Setting](#settings)
  - [Mga pangkalahatang setting](#general-settings)
  - [Mga modelo](#models)
  - [Mga wika](#languages)
  - [Pagsusubaybay ng gastos](#cost-tracking)
  - [Mga transform prompt](#transform-prompts)
  - [Mga user](#users)
  - [Config ng API](#api-config)
  - [Tungkol sa](#about)
- [Karaniwang isyu](#common-issues)
  - [Hindi nagtatranslate, nagre-rewrite, o nagta-transform ang app](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Walang laman ang listahan ng modelo](#the-model-list-is-empty)
  - [Mabagal o mahal ang resulta](#the-result-is-too-slow-or-too-expensive)
  - [Maling wika ang nasa interface](#the-interface-is-in-the-wrong-language)
  - [Maliit o mahirap basahin ang teksto](#the-text-is-too-small-or-hard-to-read)
  - [Walang laman ang mga graph sa dashboard](#dashboard-charts-are-empty)
  - [Nagpapakita ng "hindi available" o mali ang gastos](#cost-shows-not-available-or-seems-wrong)
  - [Hindi tugma ang kabuuang gastos sa bill ng provider](#total-cost-does-not-match-my-provider-bill)
  - [Nawawala ang History page sa sidebar](#the-history-page-is-missing-from-the-sidebar)
  - [Web app: biglang na-redirect sa login page](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Web admin: nakalimutan o nawala ang password](#web-admin-forgot-or-lost-a-password)
  - [Walang data para sa ibang user ang ipinapakita ng dashboard (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Nagbago ako ng prompt at nawala ang mga pag-edit](#i-changed-a-prompt-and-lost-the-edits)
- [Mga mabilis na tip](#quick-tips)
- [Paalala](#disclaimer)
- [Lisensya](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Bago ka magsimula

Para magamit ang Transrewrt, kailangan mo ng access sa kahit isang AI provider. Ang mga suportadong provider ay: [OpenRouter](https://openrouter.ai) (na nag-aagregate ng maraming mga modelo), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, at [Ollama](https://ollama.com) para sa mga lokal na modelo.

Hindi mo kailangang pumili ng bayad na modelo upang magsimula. Agad na idinadagdag ng app ang isang built-in na **libre** na opsyon ng OpenRouter pagkatapos mong idagdag ang iyong OpenRouter API key. Pinapayagan ka nitong magsimulang isalin, i-rewrite, at i-transform ang teksto kaagad. Bilang kahalili, maaari mo ring makuha ang libreng API key mula sa Cerebras, Google, Groq, o Mistral AI.

Sa madaling salita:

- Ang isang **modelo** ay ang AI engine na gumagawa ng trabaho. Ang mga modelo ay nakalista na may **prefix ng provider** (halimbawa `openrouter/…`, `openai/…`, `ollama/…`).
- Ang isang **API key** (o, para sa Ollama, ang isang **base URL**) ang paraan kung paano maabot ng app ang provider.

Kung gumagamit ka ng **desktop app**, idagdag ang mga key sa [**Mga Setting** > **Config ng API**](#api-config) para sa bawat provider na gagamitin mo. Para sa paggamit lamang ng OpenRouter, tingnan ang [Paano makakuha ng API key](#how-to-get-an-api-key-desktop-app) sa ibaba. Kung ayaw mong gamitin ang API key, maaari mong i-install ang Ollama (mula sa [ollama.com](https://ollama.com)) at gamitin ang mga lokal na modelo, tulad ng `translategemma:4b`.

Kung gumagamit ka ng **web version**, ang server owner ang nagko-configure ng mga provider gamit ang environment variables, kaya hindi mo direktang maipapakita ang mga API key sa aplikasyon.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Paano makakuha ng libreng OpenRouter API key (desktop app)

Kung gumagamit ka ng desktop app, sundin ang mga hakbang na ito:

1. Pumunta sa [OpenRouter](https://openrouter.ai) sa iyong web browser.
2. Gumawa ng account o mag-sign in.
3. Buksan ang pahina ng [Mga Key](https://openrouter.ai/keys).
4. I-click ang button para lumikha ng bagong API key.
5. Bigyan ng pangalan ang key para ma-recognize mo ito sa susunod.
6. Kopyahin ang bagong API key.
7. Bumalik sa Transrewrt at buksan ang **Mga Setting** > **Config ng API**.
8. I-paste ang key sa **OpenRouter API key** (sa ilalim ng **Mga Setting** > **Config ng API**).
9. I-click ang **Subukan ang OpenRouter key** upang matiyak na gumagana ito.

<br/><br/>

<a id="getting-started"></a>
## Mga Simula

Kung ito ang unang pagkakataon mong gumamit ng Transrewrt, sundin ang pagkakasunod-sunod na ito:

1. Buksan ang app.
2. Pumili ng iyong **Lengguwahe ng Interface** mula sa icon ng mundo kung kinakailangan.
3. Kung nasa **desktop app** ka, buksan ang [**Mga Setting** > **Config ng API**](#api-config), idagdag ang API key para sa kahit isang provider (halimbawa OpenRouter), at i-click ang **Subukan** upang i-verify na gumagana ito.
4. Buksan ang [**Mga Setting** > **Mga Modelo**](#models) at idagdag ang isa o higit pang mga modelo sa **Mga Napiling Modelo**.
5. Buksan ang [**Mga Setting** > **Mga Wika**](#languages) at pumili ng iyong **Nangungunang mga wika** kung gusto mong ipakita muna ang iyong mga karaniwang ginagamit na wika.
6. Pumunta sa **Isalin** at patakbuhin ang isang simpleng pagsasalin upang kumpirmahin na gumagana ang lahat.
7. Kapag gumana na, subukan ang **Rewrite** at pagkatapos ay **Transform**.

Mahalaga ang pagkakasunod-sunod na ito. Ito ay maiiwasan ang pinakakaraniwang problema sa unang paggamit: sinusubukan na patakbuhin ang isang gawain bago pa man magkaroon ng gumaganang API connection o napiling modelo ang app.

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

Gamitin ang sidebar para maggalaw sa loob ng app. Maaari mong i-collapse ang sidebar para mas maraming espasyo sa pamamagitan ng pag-click sa icon na katabi ng logo ng app.

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
        <li><strong>Rewrite</strong> ay nagbubukas ng workspace para sa pag-rewrite.</li><br/>
        <li><strong>Transform</strong> ay nagbubukas ng custom prompt workspace.</li><br/>
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

Bahagyang nagbabago ang toolbar depende sa kung saan ka sa app.

- Sa kaliwa, ipinapakita nito ang pangalan ng kasalukuyang pahina.
- Sa kanan, ipinapakita nito ang **model selector** at ang kontrol ng **Interface language**.

Ang **model selector** ay nagbibigay-daan sa iyo na pumili kung aling AI engine ang gagamitin para sa kasalukuyang gawain.

![Model selector](../images/screenshots/tl/model-selector.png)

Maaaring hindi laging available ang ilang libreng modelo—minsan ay offline o may limitasyon sa paggamit. Kung mangyari ito, awtomatikong aalisin ng app ang modelong iyon sa iyong listahan ng available. Para kontrolin kung aling mga modelo ang lilitaw, pumunta sa [**Mga Setting** > **Mga Modelo**](#models) at i-edit ang iyong listahan ng modelo.
Maaari mo ring buksan nang direkta ang mga setting ng modelo sa pamamagitan ng pag-click sa icon ng provider sa kaliwa ng pangalan ng modelo sa toolbar.

<br/>

Ang **globe icon + code ng wika** ay nagbabago sa lengguwahe ng interface ng app, tulad ng mga menu at button. Hindi nito binabago ang mga wikang ginagamit sa **Isalin**.

![Interface language selector](../images/screenshots/tl/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Mga panel ng Input at Output

Karamihan sa mga workspace ay gumagamit ng **Input** panel sa kaliwa at **Output** panel sa kanan.

Ipapakita rin ng bawat panel ang:

| **Input**                                                          | **Output**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Bilang ng karakter <br/>- Bilang ng salita <br/>- Bilang ng talata   <br/> | - Gaano katagal bago natapos ang gawain<br/>- **TPS** (mga token bawat segundo)<br/>- Bilang ng karakter, salita, at talata<br/>- Ang modelo na ginamit |

Kung nagtatanong ka tungkol sa mga teknikal na termino:

- Ang **Token** ay nangangahulugang maliit na bahagi ng teksto. Maaari mo itong iisipin bilang bahagi ng isang salita o isang maikling salita.
- Ang **TPS** ay nangangahulugang bilang ng mga bahaging teksto na naproseso ng modelo bawat segundo.

<br/>

Maaari mo ring subaybayan ang gastos ng bawat operasyon (kung available) at ang kabuuang gastos, sa pamamagitan ng pag-enable ng opsyon na `Ipakita ang impormasyon ng gastos sa mga aksyon` sa [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Isalin

Gamitin ang **Isalin** kapag nais mong i-convert ang teksto mula sa isang wika patungo sa isa pa.

![Translate workspace](../images/screenshots/tl/translate.png)

<br/>

<a id="translate-text"></a>
### Isalin ang teksto

1. Buksan ang **Isalin**.
2. Pumili ng wika sa **Mula sa**.
3. Pumili ng wika sa **Patungo sa**.
4. Pumili ng modelo sa toolbar.
5. I-type o i-paste ang teksto sa **Input**.
6. I-click ang **Isalin**.
7. Basahin ang resulta sa **Output**.
8. Gamitin ang button na kopya kung gusto mong kopyahin ang resulta.

<br/>

<a id="language-selection"></a>
### Pagpili ng wika

- Ang **Mula sa** ay maaaring tiyak na wika o **Kilalanin ang Wika**.
- Ang **Patungo sa** ay ang wika kung saan mo gustong lumabas ang resulta.

Ang iyong napiling **Mga Nangungunang Wika** ay lilitaw sa tuktok ng listahan. Maaari mong itakda ang mga ito sa [**Mga Setting** > **Mga Wika**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Mga kapaki-pakinabang na setting sa pagsasalin

Sa [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings), maaari mong baguhin kung paano gumagana ang pagsasalin:

- **Auto-translate kapag nag-paste** – awtomatikong isasalin ang teksto pagkatapos mong i-paste ito.
- **Auto-copy ng result sa clipboard** – awtomatikong kinokopya ang resulta pagkatapos ng matagumpay na pagsasalin.
- **Real-time translation (habang nagta-type)** – patuloy na isinasalin habang nagta-type ka.
- **Timeout (ms)** – nagtatakda kung gaano katagal maghihintay ang app bago isagawa ang real-time na pagsasalin.
- **Enter** – nagtatakda kung ano ang mangyayari kapag pinindot mo ang `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Rewrite

Gamitin ang **Rewrite** kapag gusto mong mapabuti ang pagkakasulat nang hindi binabago ang pangunahing kahulugan.

![Rewrite workspace](../images/screenshots/tl/rewrite.png)

Makakatulong ito sa:

- pag-ayos ng baybay at balarila (**Suriin ang Baybay at Balarila**)
- pagpapalinaw sa teksto (**Pahusayin ang Klaridad**)
- maramihang magkakaibang pagbabago sa isang pagkakataon (**Mga alternatibong bersyon**)
- pagpapormal o pagpapadiwa ng teksto (**Formal** / **Di-pormal**)
- pagpapaikli o pagpapalawak ng teksto (**Magpaikli** / **Palawakin**)
- paggawa ng teksto na mas teknikal (**Gawing Teknikal**)

<br/>

> 💡 **TIP**<br/>
> Kapag ginamit mo ang mode na "**Suriin ang Baybay at Balarila**", lilitaw ang switch na **Ipakita ang mga pagbabago** sa output panel (sa tabi ng **Kopyahin**).
> I-on o i-off ito upang ipakita o itago ang mga partikular na pagkakamali na tinamaan sa iyong teksto.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Transform

Gamitin ang **Transform** kapag gusto mong sundin ng AI ang isang pasadyang hanay ng mga panuto.

![Transform workspace](../images/screenshots/tl/transform.png)

Ito ang pinakamalawak na bahagi ng app. Maaari mo itong gamitin para sa mga gawain tulad ng:

- pagbuod ng mga tala
- paggawa ng isang di-final na teksto tungo sa isang napakisig na email
- pagkuha ng mga pangunahing punto
- pagbabago ng teksto sa isang tiyak na format
- anumang iba pang pasadyang gawain gamit ang input na teksto

<br/>

<a id="run-an-existing-prompt"></a>
### Patakbuhin ang isang umiiral na prompt

1. Buksan ang **Transform**.
2. Pumili ng prompt mula sa listahan ng prompt.
3. Kung lumitaw ang kahon ng **Target** na wika, pumili ng wika kung gusto mo.
4. I-type o i-paste ang teksto sa **Input**.
5. I-click ang **Transform**.
6. Basahin ang resulta sa **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Kung wala ka pang mga prompt

Kung walang laman ang iyong listahan ng prompt, i-click ang **I-load ang sample prompts** sa Transform workspace. Magagamit din palagi ang kontrol na ito sa [**Mga Setting** > **Mga transform prompt**](#transform-prompts) sa row ng export/import. Parehong idinaragdag nito ang mga built-in na halimbawa upang mabilis kang makapagsimula.

<br/>

> ℹ️ **TALA**<br/>
> Ang mga sample prompt ay ibinibigay sa wikang Ingles. Matapos i-load ang mga ito, maaari mong i-edit ang isang prompt at gamitin ang **Isalin ang prompt** upang isalin ito sa iyong wika.

<br/>

<a id="create-a-prompt-quickly"></a>
### Lumikha ng prompt nang mabilis

Ang pinakamabilis na paraan para lumikha ng prompt ay:

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

Kapag lumilikha o nag-eedit ka ng isang prompt, ang editor ay lilitaw sa kaliwa at ang test area ay lilitaw sa kanan.

![Transform prompt editor](../images/screenshots/tl/transform-prompt-edit.png)

Ang pangunahing mga field ay:

- **Pangalan ng prompt**: ang pangalan na ipinapakita sa listahan ng prompt.
- **Mga instruction ng prompt (optional)**: isang maikling tulong na ipinapakita sa user kapag pinapatakbo ang prompt.
- **Role ng Modelo**: ang pangkalahatang papel na ibinigay sa AI, tulad ng 'Ikaw ay isang kapaki-pakinabang na tagatulong.'
- **Mga Instruksyon ng Model (isa sa bawat linya)**: ang mga tiyak na alituntunin na nais mong sundin ng AI.
- **Deskripsyon ng output**: isang maikling salita na naglalarawan sa resulta, tulad ng 'buod' o 'rewrite'.
- **Temperatura (0.0 → 1.0)**: kung paano kumilos ang modelo; tingnan sa ibaba.
- **Hilingin ang target na wika**: nagdaragdag ng selector ng target na wika kapag pinapatakbo ang prompt.

Kung bago sa iyo ang teknikal na terminong **Temperatura**, isipin mo ito nang ganito:

- Ang **mas mababa** na temperatura ay nagbibigay ng mas matatag at higit na maasahang resulta.
- Ang **mas mataas** na temperatura ay nagbibigay ng higit na iba't-iba at malikhaing resulta.

Maaari mo ring gamitin:

- **`Generate prompt`** upang lumikha ng bagong draft mula sa isang simpleng deskripsyon
- **`Improve prompt`** upang palinawin ang umiiral na prompt
- **`Translate prompt`** upang isalin ang mga field ng prompt

<br/>

> ⚠️ **BABAET**<br/>
> I-click ang **`I-save`** bago i-click ang **`Bumalik sa Run`**. Kung babalik ka nang hindi iyon na-save, mawawala ang iyong mga pagbabago.

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
> Maaari mong i-export at i-import ang mga nai-save na prompt sa [**Mga Setting** > **Mga Transform Prompt**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Dashboard

Gamitin ang **Dashboard** upang makita kung gaano karami ang iyong paggamit sa app at kung magkano ang gastos nito (para sa mga bayad na modelo).

![Dashboard summary](../images/screenshots/tl/dashboard-summary.png)

<br/>

> ℹ️ **TALA**<br/>
> Kung gumagamit ka lamang ng **libre**ng mga modelo, maaaring zero ang halaga ng **gastos** at maaaring walang laman ang mga buod na nakatuon sa gastos. Sa **Buod**, **Paggamit sa paglipas ng panahon** at **Paggamit ayon sa modelo** ay ipinapakita pa rin ang **bilang ng mga tawag** (isalin, i-rewrite, at i-transform) kapag may aktibidad ka sa napiling panahon.

<br/>

<a id="filter-the-data"></a>
### I-filter ang data

Gamitin ang mga button ng filter sa itaas upang baguhin ang saklaw ng oras.

![Dashboard filters](../images/screenshots/tl/dashboard-filter.png)

<br/>

> ℹ️ **PAUNAWA**<br/>
> Ang filter na **User** ay nakikita lamang ng mga administrator sa web na bersyon. Hindi makikita ng karaniwang user ang filter na ito, at hindi ito available sa desktop app.

<br/>

<a id="dashboard-tabs"></a>
### Mga tab ng Dashboard

- Ang **Buod** ay nagbibigay sa iyo ng pangkalahatang-ideya tungkol sa paggamit at gastos. Kasama rito ang **Paggamit sa paglipas ng panahon** (nakatambak na kumulatibong **bilang ng mga tawag** kada araw para sa pagsasalin, pagsusulat muli, at pag-transform) at **Paggamit ayon sa modelo** (kabuuang **mga tawag bawat modelo**, kasama ang transform).
- Ang **Ayon sa Paggamit** ay naghihiwalay ng mga gawain ayon sa wika ng pagsasalin, paraan ng pagsusulat muli, at prompt ng transform.
- Ang **Ayon sa Model** ay nagpapakita kung aling mga modelo ang ginamit mo at kung magkano ang gastos nito.
- Ang **Ayon sa Araw** ay nagpapakita ng mga kabuuang araw-araw.
- Ang **Lahat ng Call** ay nagpapakita ng buong kasaysayan ng mga tawag at nagbibigay-daan sa iyo na i-export ito.

<br/>

<a id="export-data"></a>
### I-export ang data

Ang mga table sa dashboard ay maaaring i-export ang data sa:

- **JSON**
- **CSV**
- **XLSX

Makakatulong ito kung gusto mong suriin ang mga gawain sa labas ng app o ibahagi ang isang ulat.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Tanggalin ang naka-imbak na mga tala para sa isang modelo

Sa **Ayon sa Model** o **Lahat ng Call**, maaari mong alisin ang naka-imbak na mga tala para sa isang modelo sa pamamagitan ng pag-click sa icon ng "trash bin".

> ⚠️ **BABAЛАNG**<br/>
> Ang pagtanggal ng naka-imbak na mga tala ay hindi na maibabalik. Gamitin lamang ito kung sigurado ka nang hindi mo na kailangan ang kasaysayang iyon.

Para tanggalin ang lahat ng data o alisin ang mga tala batay sa kanilang edad, pumunta sa [**Mga Setting** > **Pagsusubaybay ng Gastos**](#cost-tracking). Doon makikita mo ang mga opsyon para tanggalin ang lahat ng naka-imbak na data o mga data na mas matanda sa tiyak na petsa.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Kasaysayan

I-click ang **Kasaysayan** upang tingnan ang kasaysayan ng iyong mga aksyon sa loob ng **Transrewrt**, kasama ang input at output ng bawat operasyon.

![History page](../images/screenshots/tl/history.png)

<br/>

<a id="filter-the-history"></a>
### I-filter ang data

Ginagamit ng **Kasaysayan** ang mga parehong filter tulad ng pahina ng **Dashboard**. Gamitin ang mga ito upang piliin ang saklaw ng oras.

![Dashboard filters](../images/screenshots/tl/dashboard-filter.png)

<br/>

> ℹ️ **PAUNAWA**<br/>
> Ang filter na **User** ay nakikita lamang ng mga administrator sa web na bersyon. Hindi makikita ng karaniwang user ang filter na ito, at hindi ito available sa desktop app.

<br/>

<a id="export-history-data"></a>
### I-export ang data ng kasaysayan

Ang pahina ng kasaysayan ay maaaring i-export ang nafilter na data sa:

- **JSON**
- **CSV**
- **XLSX

Makakatulong ito kung gusto mong suriin ang mga gawain sa labas ng app o ibahagi ang isang ulat.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Mga Setting

Buksan ang **Mga Setting** mula sa sidebar upang i-customise kung paano gumagana ang app.

Ang mga available na tab ay nakadepende sa platform at iyong papel:

| Tab               | Desktop | Web (admin) | Web (regular user) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Mga Pangkalahatang Setting  |   Oo   |     Oo     |        Oo         |
  | Mga Modelo            |   Oo   |     Oo     |        Oo         |
  | Mga Wika         |   Oo   |     Oo     |        Oo         |
  | Pagsusubaybay ng Gastos     |   Oo   |     Oo     |         —          |
  | Mga transform prompt |   Oo   |     Oo     |        Oo         |
  | Mga User             |    —    |     Oo     |         —          |
  | Config ng API        |   Oo   |     Oo     |         —          |
  | Tungkol sa             |   Oo   |     Oo     |        Oo         |

<br/>

> ℹ️ **PAUNAWA**<br/>
> Sa web version, ang bawat user ay may sariling konfigurasyon. Ang mga setting tulad ng mga napiling modelo, mga wika, pangkalahatang opsyon, at mga transform prompt ay iniimbak bawat user. Ang mga pagbabagong ginawa mo ay hindi nakakaapekto sa ibang mga user.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Mga pangkalahatang setting

Gamitin ang **Mga Pangkalahatang Setting** upang kontrolin ang pag-uugali sa pag-type, kung iniimbak ang mga detalye ng pagpapatupad para sa **Kasaysayan**, at hitsura.

**Pag-uugali**

- **Pag-uugali para sa ENTER** ay pumipili kung ang `Enter` ay magpapatakbo ng gawain o mag-i-insert ng bagong linya.
- **Auto-translate kapag nag-paste** ay nagsisimulang isalin agad kapag ikaw ay nag-paste ng teksto.
- **Auto-copy ng result sa clipboard** ay awtomatikong kinokopya ang matagumpay na resulta.
- **Real-time translation (habang nagta-type)** ay isinasalin habang nagta-type.
- **Timeout (ms)** ay nagtatakda ng oras ng paghihintay para sa real-time na pagsasalin.

**Kasaysayan**

- **Panatilihin ang kasaysayan ng pagpapatupad** ay kontrola kung ang bawat pagsasalin, pag-rewrite, at pag-transform ay mag-iimbak ng **input at output na teksto** para sa [**Kasaysayan**](#history) sa sidebar. Ang pag-off nito ay magtatanong ng kumpirmasyon; kung ikaw ay kumpirmado, ang naka-imbak na kasaysayan ng teksto ay tatanggalin mula sa database.
- **Tanggalin ang data ng kasaysayan** ay nagbibigay-daan upang alisin ang naka-imbak na teksto batay sa edad (halimbawa, mas matanda kaysa ilang buwan, o **lahat ng data (clear)**) gamit ang **Tanggalin data**. Ito ay apektado lamang ang naka-save na teksto ng pagpapatupad para sa **Kasaysayan** na view; ito ay **hindi** tinatanggal ang gastos o kabuuang paggamit. Para alisin o bawasan ang **gastos** na data, gamitin ang [**Mga Setting** > **Pagsusubaybay ng Gastos**](#cost-tracking).

**Hitsura**

- **Ipakita ang impormasyon ng gastos sa mga aksyon** ay kontrola ang display ng gastos bawat operasyon (kung available) at ang kabuuang gastos sa mga panel ng output ng Pagsasalin, Pag-rewrite, at Pag-transform.
- **Cost fraction digits** ay nagbabago kung paano ipinapakita ang mga desimal sa gastos.
- **Web lang:** **magpakita ng margin sa paligid ng app** ay nagdadagdag ng ekstrang espasyo sa paligid ng interface.
- **Font Family** ay nagbabago ng font ng pagsulat sa mga panel ng teksto.
- **Size** ay nagbabago ng laki ng font.

**Backup ng Konfigurasyon**

- **Isama ang data ng paggamit sa backup** — kapag naka-enable, ang ZIP ay naglalaman din ng kasaysayan ng pagpapatupad at data ng API call. 
- **I-backup ang konfigurasyon** — lumilikha ng isang ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` sa UTC bilang default) na may `config.json`, `state.json`, opsyonal na encryption key, mga user, mga kagustuhan, mga custom prompt, at data ng paggamit kung kasama mo ito. Matapos ang matagumpay na backup, ang kumpirmasyon ay nagpapakita ng pangalan ng naka-save na file.
- **Ibalik mula sa backup** — bubukas muna ang **dialog ng kumpirmasyon**. Piliin ang backup ZIP sa loob ng dialog (**Browse** / file picker o drag-and-drop kung suportado), pagkatapos ay suriin ang mga opsyon:
  - **Ibalik ang data ng paggamit** — i-import ang paggamit/kasaysayan mula sa ZIP kapag ito ay na-backup na kasama ang paggamit; huwag i-enable kung gusto mo lang ang mga setting at prompt.
  - **Tanggalin ang lumang data ng paggamit bago ibalik** — alisin ang umiiral na paggamit/kasaysayan sa install na ito bago ilapat ang backup (opsyonal; gamitin kapag gusto mong malinis na palitan).

Ang mga backup na nilikha sa web o desktop version ay maaaring maibalik sa kabilang bersyon. Kapag ibinabalik ang desktop backup sa web version, ang data ay maibabalik sa administrator user.

<br/>

<a id="models"></a>
### Mga Modelo

Gamitin ang **Mga Setting** > **Mga Modelo** upang pumili kung aling mga modelo ang lilitaw sa toolbar.

![Settings Models tab](../images/screenshots/tl/settings-models.png)

Ang pahina ay may dalawang listahan:

- **Mga Available na Modelo** sa kaliwa
- **Mga Napiling Modelo** sa kanan

Kabilang sa mga kapaki-pakinabang na kontrol ang:

- **Maghanap ng mga modelo...** upang hanapin ang isang modelo batay sa pangalan
- Mga **Provider** chips upang pahusayin ang listahan sa isang engine (OpenRouter, OpenAI, Ollama, …)
- **Libre Lang** upang ipakita lamang ang libreng mga modelo
- **I-refresh** upang i-reload ang listahan
- **Expand Lahat** at **Collapse Lahat** kapag nagso-sort ka ayon sa provider

Ang mga model id ay kasama ang provider prefix (halimbawa `openrouter/…` kumpara sa `openai/…`). Ang mga badge tulad ng **OpenAI (OpenRouter)** kumpara sa **OpenAI (direkta)** ay nagpapakita kung paano na-reroute ang trapiko.

> ℹ️ **PAUNAWA**<br/>
> Ang **OpenRouter Body Builder** (`openrouter/bodybuilder`) ay isang router model, hindi isang pangkalahatang chat model: ang sagot nito ay JSON na naglalarawan sa OpenRouter API request bodies (halimbawa, isang `requests` array na may `model` at `messages`). Kung gagamitin mo ito para sa **Isalin**, **Rewrite**, o **Transform**, ang output panel ay magpapakita ng JSON na iyon imbes na tapos na teksto. Pumili ng normal na text model para sa mga gawaing ito. Tingnan ang [pahina ng Body Builder model](https://openrouter.ai/openrouter/bodybuilder) sa OpenRouter.

Mga Aksyon:

- Para magdagdag ng modelo, i-click ang **Idagdag** o kahit saan sa entry.

- Para alisin ang modelo, i-click ang **X** sa tabi nito sa **Mga Napiling Modelo** o ang **Napili** sa entry sa Mga Available na Modelo.

- Para i-clear ang listahan, i-click ang **I-unmark Lahat**. Ang kinakailangang libreng modelo ay mananatili sa listahan.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Kung hindi mo gustong magdagdag ng credits sa OpenRouter agad, magsimula sa pamamagitan ng pag-enable ng **Libre Lang** at pumili ng mga libreng modelo (walang credit card required). Maaari mo ring gamitin ang Ollama para patakbuhin ang mga modelo nang lokal nang walang anumang API key.

<br/>

<a id="languages"></a>
### Mga Wika

Gamitin ang **Mga Setting** > **Mga Wika** para ayusin ang mga listahan ng wika na ginagamit sa app.

- Ang **Nangungunang mga wika** ay nakapirmi malapit sa tuktok ng mga listahan ng wika sa **Isalin** at **Transform**.
- Ang **Custom Language** ay nagbibigay-daan sa iyo na magdagdag ng wika na hindi kasama sa built-in list.

Kung magdadagdag ka ng custom na wika, lilitaw ito sa mga selector ng wika kasama ang mga built-in na opsyon.

<br/>

<a id="cost-tracking"></a>
### Pagsusubaybay ng Gastos

Gamitin ang **Mga Setting** > **Pagsusubaybay ng Gastos** para pamahalaan ang impormasyon ng gastos.

- Ang **Kabuuang Gastos** ay nagpapakita ng kabuuang running total.
- Ang **Kopyahin ang Halaga** ay kinokopya ang kabuuan sa clipboard.
- Ang **I-reset ang gastos** ay nagre-reset ng naka-imbak na kabuuan patungo sa zero.
- Ang **I-sync sa paggamit ng API key** ay nagse-set sa kabuuan upang tugma sa paggamit na iniulat ng iyong OpenRouter account (OpenRouter lamang).
- Ang **Paggamit ng API Key** ay nagpapakita ng detalye ng paggamit sa OpenRouter, kung available.
- Ang **Burahin data ng gastos** ay tinatanggal ang lahat ng data, o mga entry na mas matanda kaysa sa napiling petsa.

**Pagsusubaybay ng gastos:** Kapag gumagamit ka ng mga modelo ng OpenRouter, ipinapakita ng app ang iyong aktuwal na paggamit at paggastos batay sa impormasyon ng gastos mula sa OpenRouter. Para sa lahat ng iba pang provider, hinuhulaan ng app ang mga gastos gamit ang mga presyo na inilathala ng OpenRouter; kung hindi available ang presyo, maaaring zero ang pagtataya.

<br/>

> ℹ️ **PAUNAWA**<br/>
>  Ang lahat ng mga pigura ng gastos ay mga pagtataya lamang para sa iyong reperensya, hindi opisyal na billing statement.

<br/>

> ⚠️ **BABALA**<br/>
> Ang pagtanggal ng data ay hindi na maibabalik. Bago tanggalin, siguraduhing i-back up ang iyong data o i-export ito sa pamamagitan ng [**Kasaysayan**](#history)
> o [**Dashboard** > **Lahat ng Call**](#dashboard-tabs), kung hindi man ay mawawala ito nang permanente.
> Ang lahat ng kasaysayan ng input/output na nauugnay sa bawat entry ng API call ay matatanggal din.

<br/>

<a id="transform-prompts"></a>
### Mga transform prompt

Gamitin ang **Mga Setting** > **Mga Transform Prompt** para pamahalaan ang mga prompt nang buo.

Maaari mong:

- suriin ang iyong mga naka-save na prompt  
- tanggalin ang mga prompt  
- i-import ang mga prompt mula sa isang file  
- i-export ang mga prompt para sa backup o pagbabahagi  
- i-load ang sample prompts sa listahan ng prompt

<br/>

<a id="users"></a>
### Mga User

Gamitin ang **Mga User** upang pamahalaan ang mga user account sa web na bersyon. Maaari kang magdagdag ng mga user, i-update ang kanilang mga detalye, i-reset ang mga password, at tanggalin ang mga account.

<br/>

<a id="api-config"></a>
### Config ng API

Ang mga suportadong provider ay: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, at **Ollama** (lokal na mga modelo sa pamamagitan ng base URL). Kailangan mo lamang i-configure ang mga provider na ginagamit mo.

**Web application: administrator lamang**

Ang mga API key ay ini-configure sa pamamagitan ng system o Docker environment variables — hindi ito inilalagay sa web UI. Ang pahinang ito ay nagpapakita kung aling mga provider ang may naka-configure na key at nagbibigay-daan sa iyo na subukan ang bawat isa sa pamamagitan ng pag-click sa pindutan na **`Subukan`**.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Upang baguhin ang isang API key, i-update ang environment variable sa iyong system o Docker configuration at i-restart ang server o container.

> ℹ️ **PAUNAWA**<br/>
> Ang **mga backup ng konfigurasyon** (tingnan ang [**Mga Pangkalahatang Setting** → Backup ng Konfigurasyon](#general-settings)) ay maaaring isama ang **nare-resolve** na mga key ng provider sa loob ng `config.json` ng ZIP. Ang pag-restore ng ZIP na iyon ay **hindi** kinokopya ang mga key na iyon pabalik sa naka-save na config file ng server — ang live na key ay patuloy na nagmumula sa environment at umiiral na file state gaya ng inilarawan doon.

<br/>

**Desktop application**

Gamitin ang **Config ng API** upang iimbak ang mga API key para sa bawat provider na ginagamit mo. Para sa Ollama, ipasok ang **base URL** sa halip na isang API key.

<br/>

> 💡 **Tip** <br/>
> Kung ayaw mong gamitin ang isang API key o magbayad para sa paggamit, maaari kang [i-download ang Ollama](https://ollama.com) at patakbuhin ang mga modelo (tulad ng `translategemma:4b`) nang lokal sa iyong makina nang libre. Bilang kahalili, maaari kang lumikha ng libreng OpenRouter account (walang kailangang credit card) upang gamitin ang kanilang libreng mga modelo, o kumuha ng libreng API key mula sa Cerebras, Google, Groq, o Mistral AI.

<br/>

- Idagdag lamang ang mga provider na kailangan mo. Sa **Mga Setting** > **Mga Modelo**, ang bawat modelo ID ay nagsisimula sa provider (halimbawa `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Upang magdagdag ng API key, ipasok ang halaga sa text field at i-click ang **`I-save`**. Upang palitan ang umiiral na key, i-click ang **`I-edit`**. Upang i-verify na gumagana ang isang key, i-click ang **`Subukan`**. Para sa Ollama base URL, i-click **`Subukan`** upang suriin ang koneksyon.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Hindi mo maaaring tingnan ang kasalukuyang halaga ng isang API key. Maaari mo lamang itong palitan gamit ang pindutang **`I-edit`**.
> Ang mga API key ay iniimbak nang naka-encrypt sa konfigurasyon.

<br/>

<a id="about"></a>
### Tungkol sa

Ang tab na **Tungkol sa** ay nagpapakita ng:

- ang pangalan ng app  
- ang numero ng bersyon  
- ang petsa ng build  
- isang link sa repository ng proyekto

<br/><br/>

<a id="common-issues"></a>
## Karaniwang isyu

Kung may bagay na hindi gumagana ayon sa inaasahan, suriin muna ang mga sumusunod na punto.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Hindi isinasalin, nirerewrite, o nililipat ng app ang teksto

Suriin na:

- napili mo ang isang modelo sa toolbar
- nakalista ang kahit isang modelo sa [**Mga Setting** > **Mga Modelo**](#models)
- gumagana ang iyong API setup

Kung gumagamit ka ng desktop app:

1. Buksan ang [**Mga Setting** > **Config ng API**](#api-config).
2. Suriin na naka-save na ang kahit isang API key.
3. I-click ang **Subukan** sa tabi ng provider upang kumpirmahin na gumagana ang key.

<br/>

<a id="the-model-list-is-empty"></a>
### Walang laman ang listahan ng modelo

Buksan ang [**Mga Setting** > **Mga Modelo**](#models) at i-click ang **I-refresh**.

Kung kinakailangan:

- maghanap ng modelo
- i-on ang **Libre Lang**
- idagdag ang isa o higit pang mga modelo sa **Mga Napiling Modelo**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Mabagal o mahal ang resulta

Subukan ang isa o higit pang mga sumusunod:

- pumili ng ibang modelo
- gumamit ng mas maikling input
- patayin ang **Real-time translation (habang nagta-type)** sa [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings)
- gamitin ang libreng mga modelo para sa mga simpleng gawain (tingnan ang [Mga Modelo](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Hindi tamang wika ang interface

I-click ang icon ng mundo sa [toolbar](#toolbar) at pumili ng iyong gustong **Lengguwahe ng Interface**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Napakaliit o mahirap basahin ang teksto

Buksan ang [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings) at baguhin ang:

- **Pamilya ng Font**
- **Laki**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Walang laman ang mga graph sa Dashboard

Normal ito kung:

- gumagamit ka lamang ng **mga libreng modelo** at tinitingnan mo ang mga **gastos** (maaaring zero ang halaga); kailangan pa rin ng data ang mga graph ng bilang ng **mga tawag** sa **Buod** mula sa napiling panahon
- hindi sumasakop ang napiling **filter ng oras** sa panahon kung kailan ginawa ang mga tawag — subukang **Lahat** upang suriin

Kung ang mga chart ay nananatiling walang laman pagkatapos piliin ang **Lahat**, kumpirmahin na lumilitaw ang mga tawag sa [**Kasaysayan**](#history) o sa tab na **Lahat ng Call**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Nagpapakita ang Gastos ng "hindi available" o tila mali

Kapag gumagamit ka ng mga modelo sa pamamagitan ng **OpenRouter**, ipinapakita ng app ang iyong aktuwal na gastusin na iniulat ng OpenRouter.

Para sa **mga ibang provider** (OpenAI direkta, Anthropic direkta, atbp.), ang gastos ay tinataya mula sa mga datos ng presyo na inilathala ng OpenRouter. Kung walang tugmang presyo na nakita para sa isang modelo, ang gastos ay magpapakita bilang **hindi available** at hindi idaragdag sa iyong kabuuang gastos.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Hindi tugma ang kabuuang gastos sa aking bill mula sa provider

Ang lahat ng mga numero ng gastos sa app ay **mga tinatayang halaga para sa reperensya lamang**, hindi opisyal na mga pahayag ng singil.

Upang palapit na ang kabuuan sa iyong tunay na gastusin sa OpenRouter, buksan ang [**Mga Setting** > **Pagsusubaybay ng Gastos**](#cost-tracking) at i-click ang **I-sync sa paggamit ng API key**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Nawawala ang History page sa sidebar

Maaaring naka-off ang **Panatilihin ang kasaysayan ng pagpapatupad**. Buksan ang [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings) at i-enable ito. Tandaan na ang pag-on nito ay hindi ibabalik ang dating na-delete na datos ng kasaysayan.

<br/>

<a id="web-app-session-expired"></a>
### Web app: biglang na-redirect sa login page

Maaaring natime out ang iyong session. Muling mag-login. Kung madalas itong nangyayari, suriin ang server configuration para sa mga setting ng session lifetime.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Web admin: nakalimutan o nawala ang password

Ito ay nalalapat sa **self-hosted web app** (Docker), hindi sa desktop (Electron) app.

- Kung may iba pang administrator na maaari pa ring mag-sign in, maaari nilang buksan ang [**Mga Setting** > **Mga User**](#users), piliin ang account, at itakda ang **bagong password** doon.
- Kung ikaw ay **na-lock out** ngunit may **shell access** sa machine o container, i-reset ang password gamit ang helper na kasama ng image (palitan ang `transrewrt` kung binago mo ang default na pangalan, at i-quote ang password kung ito ay may espasyo o special characters):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Ang default na admin username ay `admin` kung hindi ka pa naglalikha ng ibang account. Kapag nagbigay ka lamang ng isang argumento, ito ay itinuturing na bagong password para sa `admin`.

Kung tumatakbo ka mula sa **source checkout** imbes na Docker, gamitin ang:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Ang script ay nag-u-update sa user record sa SQLite database (at maaaring lumikha ng `admin` user kung wala ito). Matapos i-reset, mag-sign in gamit ang bagong password.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Walang data na ipinapakita ang Dashboard para sa ibang mga user (web)

Ang mga **administrator** lamang ang maaaring tingnan ang data mula sa lahat ng user sa pamamagitan ng **User** filter. Ang regular na mga user ay nakikita lamang ang kanilang sariling aktibidad ayon sa disenyo.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Binago ko ang isang prompt at nawala ang mga pag-edit

Kapag nag-e-edit ng isang prompt, i-click palagi ang **I-save** bago i-click ang **Bumalik sa Run**.

<br/><br/>

<a id="quick-tips"></a>
## Mga mabilis na tip

- Magsimula sa [**Isalin**](#translate) upang matiyak na gumagana ang iyong setup bago lumipat sa [**Rewrite**](#rewrite) o [**Transform**](#transform).
- Gamitin ang [**Rewrite**](#rewrite) para sa pang-araw-araw na pagpapabuti ng mga salita.
- Gamitin ang [**Transform**](#transform) kapag kailangan mo ng paulit-ulit na workflow para sa isang tiyak na gawain.
- Gamitin ang [**Dashboard**](#dashboard) kung nais mong subaybayan ang paggamit at gastos.
- Gamitin ang [**Kasaysayan**](#history) upang suriin ang mga nakaraang operasyon at ang buong input/output na teksto nito.
- I-export ang mga prompt nang regular kung gumagawa ka ng prompt library na nais mong mapanatiling ligtas (tingnan ang [Mga transform prompt](#transform-prompts)) o kung ibabahagi mo ito sa iba.

<br/><br/>

<a id="disclaimer"></a>
## Disclaimer

Ang mga pangalan ng produkto at icon ay pagmamay-ari ng kanilang mga respektibong may-ari at ginagamit lamang para sa identification. Ang software na ito ay hindi konektado o iniindorso ng anumang mga banggit na brand.

<br/><br/>

<a id="license"></a>
## Lisensya

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
