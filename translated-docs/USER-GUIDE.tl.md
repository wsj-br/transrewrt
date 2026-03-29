---
translated_at: "2026-03-29T01:53:04.905Z"
source_hash: "8981b8db163153bfc443046fa20a49b33c92b9feebdee302f6ef60852f273472"
source_mtime: "2026-03-29T01:41:58.368Z"
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>

# Gabay sa Gumagamit

<br/>

<a id="introduction"></a>

## Introduksyon

Tinutulungan ka ng Transrewrt na magtrabaho sa teksto sa tatlong pangunahing paraan:

- **Isalin** - i-convert ang teksto mula sa isang wika patungo sa isa pa.
- **Muling-isulat** - baguhin ang pananalita ng teksto sa ibang estilo, tulad ng mas malinaw, mas maikli, o mas pormal.
- **Baguhin** - i-proseso ang teksto gamit ang mga pasadyang AI na tagubilin na tinatawag na mga prompt.

<br/>

Ipapaliwanag ng gabay na ito kung paano gamitin ang app kapag naka-install at tumatakbo na ito. Para sa mga hakbang sa pag-install, tingnan ang pangunahing **[README](README.tl.md)**.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Ang Transrewrt ay magagamit bilang desktop app para sa Windows at Linux, at bilang isang self-hosted na web app. Tinitiyak ng gabay na ito ang pang-araw-araw na paggamit ng app. Kung may tampok na para lamang sa isang bersyon, ito ay malinaw na nakamarkahan.

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](translated-docs/US

ER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Paalala sa mga salin ng UI at dokumentasyon:** Ang lahat ng mga wika ng interface maliban sa orihinal na Ingles (UK)
> ay isinalin gamit ang mga modelo ng AI; ang paggamit ng mga salita ay maaaring hindi tumpak o may mga kamalian.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Talahanayan ng mga Nilalaman**

- [Bago mag-umpisa](#before-you-start)
  - [Paano makakuha ng libreng OpenRouter API key (desktop app)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Mga hakbang sa pagsisimula](#getting-started)
- [Mga pangunahing bahagi ng window](#main-parts-of-the-window)
  - [Sidebar](#sidebar)
  - [Toolbar](#toolbar)
  - [Input at output panels](#input-and-output-panels)
- [Isalin](#translate)
  - [Salin ang teksto](#translate-text)
  - [Pagpili ng wika](#language-selection)
  - [Makakatulong na mga setting sa pagsasalin](#helpful-translation-settings)
- [Isulat muli](#rewrite)
- [Baguhin](#transform)
  - [Patakbuhin ang isang umiiral nang prompt](#run-an-existing-prompt)
  - [Kung wala ka pang mga prompt](#if-you-have-no-prompts-yet)
  - [Gumawa ng prompt nang mabilisan](#create-a-prompt-quickly)
  - [I-edit ang isang prompt](#edit-a-prompt)
  - [Subukan ang prompt bago gamitin](#test-a-prompt-before-using-it)
- [Dashboard](#dashboard)
  - [I-filter ang datos](#filter-the-data)
  - [Mga tab ng dashboard](#dashboard-tabs)
  - [I-export ang datos](#export-data)

- [Tanggalin ang mga nakaimbak na tala para sa isang modelo](#delete-stored-records-for-a-model)
- [Kasaysayan](#history)
  - [I-filter ang data](#filter-the-data-1)
  - [I-export ang data ng kasaysayan](#export-history-data)
- [Mga Setting](#settings)
  - [Pangkalahatang setting](#general-settings)
  - [Mga modelo](#models)
  - [Mga wika](#languages)
  - [Pagsusubay sa gastos](#cost-tracking)
  - [Baguhin ang mga prompt](#transform-prompts)
  - [Mga gumagamit](#users)
  - [API config](#api-config)
  - [Tungkol dito](#about)
- [Karaniwang isyu](#common-issues)
  - [Hindi nagsasalin, nagrere-rewrite, o nagtatransform ang app ng teksto](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Walang laman ang listahan ng modelo](#the-model-list-is-empty)
  - [Mabagal o sobrang mahal ang resulta](#the-result-is-too-slow-or-too-expensive)
  - [Nakasulat sa maling wika ang interface](#the-interface-is-in-the-wrong-language)
  - [Masyadong maliit o mahirap basahin ang teksto](#the-text-is-too-small-or-hard-to-read)
  - [Walang laman ang mga graph sa dashboard](#dashboard-charts-are-empty)

- [Nagpapakita ang gastos bilang "hindi available" o mukhang mali](#cost-shows-not-available-or-seems-wrong)
  - [Hindi tugma ang kabuuang gastos sa bill ng aking provider](#total-cost-does-not-match-my-provider-bill)
  - [Nawawala ang History page sa sidebar](#the-history-page-is-missing-from-the-sidebar)
  - [Web app: biglang naililigaw sa login page](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Web admin: nakalimutan o nawala ang password](#web-admin-forgot-or-lost-a-password)
  - [Walang data na ipinapakita ang dashboard para sa ibang user (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Nagbago ako ng prompt at nawala ang mga binago](#i-changed-a-prompt-and-lost-the-edits)
- [Mga mabilis na tip](#quick-tips)
- [Paalala](#disclaimer)
- [Lisensya](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Bago mo simulan

Para magamit ang Transrewrt, kakailanganin mo ng access sa kahit isang AI provider. Ang mga suportadong provider ay: [OpenRouter](https://openrouter.ai) (nagtataglay ng maraming mga modelo), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, at [Ollama](https://ollama.com) para sa mga lokal na modelo.

Hindi mo kailangang piliin ang bayad na modelo upang makapagsimula. Sa sandaling idagdag mo ang iyong OpenRouter API key, awtomatikong pinapagana ng app ang isang naka-imbak na **libreng** opsyon ng OpenRouter. Pinapayagan ka nitong agad na mag-simulang mag-salin, muling isulat, at baguhin ang teksto. Bilang kahalili, maaari ka ring makakuha ng libreng API key mula sa Cerebras, Google, Groq, o Mistral AI.

Sa payak na salita:

- Ang isang **modelo** ay ang AI engine na gumaganap ng gawain. Ang mga modelo ay nakalista kasama ang **prefix ng provider** (halimbawa `openrouter/…`, `openai/…`, `ollama/…`).
- Ang isang **API key** (o, para sa Ollama, ang isang **base URL**) ang paraan kung paano nakikipag-ugnayan ang app sa provider na iyon.

Kung gumagamit ka ng **desktop app**, magdagdag ng mga key sa [**Settings** > **API Config**](#api-config) para sa bawat provider na iyong ginagamit. Para sa OpenRouter lamang, tingnan ang [Paano makakuha ng API key](#how-to-get-an-api-key-desktop-app) sa ibaba. Kung ayaw mong gamitin ang API key, maaari mong i-install ang Ollama (mula sa [ollama.com](https://ollama.com)) at gamitin ang lokal na mga modelo, tulad ng `translategemma:4b`.

Kung gumagamit ka ng **web version**, ang server owner ang nagko-configure ng mga provider gamit ang environment variables, kaya hindi mo mai-e-enter nang direkta ang mga API key sa loob ng application.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### Paano makakuha ng libreng OpenRouter API key (desktop app)

Kung gumagamit ka ng desktop app, sundin ang mga sumusunod na hakbang:

1. Pumunta sa [OpenRouter](https://openrouter.ai) gamit ang iyong web browser.
2. Gumawa ng account o mag-sign in.
3. Buksan ang pahina ng [Mga Susi (Keys)](https://openrouter.ai/keys).
4. I-click ang button para lumikha ng bagong API key.
5. Bigyan ng pangalan ang key para madaling makilala sa hinaharap.
6. Kopyahin ang bagong API key.
7. Bumalik sa Transrewrt at buksan ang **Settings** > **API Config**.
8. I-paste ang key sa **OpenRouter API key** (sa ilalim ng **Settings** > **API Config**).
9. I-click ang **Test OpenRouter key** upang tiyakin na gumagana ito.

<br/><br/>

<a id="getting-started"></a>

## Simula

Kung ito ang iyong unang pagkakataon na gumamit ng Transrewrt, sundin ang sumusunod na pagkakasunod-sunod:

1. Buksan ang app.
2. Piliin ang iyong **wika ng interface** mula sa icon ng mundo kung kinakailangan.
3. Kung gumagamit ka ng **desktop app**, buksan ang [**Settings** > **API Config**](#api-config), magdagdag ng API key para sa kahit isang provider (tulad ng OpenRouter), at i-click ang **Test** upang i-verify kung gumagana ito.
4. Buksan ang [**Settings** > **Models**](#models) at magdagdag ng isang o higit pang modelo sa **Selected Models**.
5. Buksan ang [**Settings** > **Languages**](#languages) at pumili ng iyong **nangungunang mga wika** kung gusto mong maunang lumabas ang iyong mga madalas gamitin na wika.
6. Pumunta sa **Translate** at gawin ang isang simpleng pagsasalin upang i-kumpirma na gumagana ang lahat.
7. Kapag gumana na, subukan ang **Rewrite** at pagkatapos ay ang **Transform**.

Mahalaga ang pagkakasunud-sunod na ito. Ito ay maiiwasan ang pinakakaraniwang problema sa unang paggamit: sinusubukan gawin ang isang gawain bago pa man nabuo ang isang gumaganang koneksyon sa API o napili ang isang modelo.

<br/><br/>

<a id="main-parts-of-the-window"></a>

## Mga pangunahing bahagi ng window

Hinati ang app sa tatlong pangunahing lugar:

- Ang **sidebar** sa kaliwa.
- Ang **toolbar** sa itaas.
- Ang **work area** sa gitna.

<br/>

<a id="sidebar"></a>

### Tabla

Gumamit ng tabla upang maglipat-lipat sa loob ng aplikasyon. Maaari mong i-collapse ang tabla para sa mas lalong puwang sa pamamagitan ng pag-click sa icon na nasa tabi ng logo ng aplikasyon.

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
        <li><strong>Isulat muli</strong> ay nagbubukas ng workspace para sa pagpapalit-lipat ng salita.</li><br/>
        <li><strong>Ibahin</strong> ay nagbubukas ng workspace para sa pasadyang prompt.</li><br/>
        <li><strong>Dashboard</strong> ay nagpapakita ng impormasyon tungkol sa paggamit at gastos.</li><br/>
        <li><strong>Mga Setting</strong> ay nagbubukas ng panel ng mga setting.</li><br/>
        <li><strong>Kasaysayan</strong> ay nagpapakita ng kasaysayan ng paggamit kasama ang input at output na teksto.</li><br/>
        <li><strong>User</strong> ay nagpapakita ng username ng naka-sign in na user (sa web lamang).</li>
      </ul>

</td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Toolbar

Ang toolbar ay kaunti lamang nagbabago depende sa kung saan ka sa app.

- Sa kaliwa, ipinapakita nito ang pangalan ng kasalukuyang pahina.
- Sa kanan, ipinapakita nito ang **pumili ng modelo** at ang kontrol ng **wika ng interface**.

Ang **pumili ng modelo** ay nagbibigay-daan sa iyo na pumili kung aling AI engine ang gagamitin para sa kasalukuyang gawain.

  ![Pumili ng modelo](../images/screenshots/tl/model-selector.png)

Maaaring hindi laging available ang ilang libreng modelo—kung minsan ay offline ang mga ito o may limitasyon sa paggamit. Kung mangyayari ito, awtomatikong aalisin ng app ang modelo sa iyong listahan ng available. Upang kontrolin kung aling mga modelo ang lilitaw, pumunta sa [**Mga Setting** > **Mga Modelo**](#models) at i-edit ang iyong listahan ng modelo. Maaari mo ring buksan nang direkta ang mga setting ng modelo sa pamamagitan ng pag-click sa icon ng provider sa kaliwa ng pangalan ng modelo sa toolbar.

<br/>

Ang **icon ng mundo + code ng wika** ay nagbabago sa wikang ginagamit sa interface ng app, tulad ng mga menu at pindutan. Hindi nito binabago ang mga wikang isinasalin sa **Pagsasalin**.

![Tagapili ng wika ng interface](../images/screenshots/tl/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Mga panel ng Input at Output

Karamihan sa mga workspace ay gumagamit ng nasa kaliwang **Input** panel at nasa kanang **Output** panel.

Ang bawat panel ay nagpapakita rin ng:

| **Input**                                                          | **Output**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Bilang ng karakter <br/>- Bilang ng salita <br/>- Bilang ng talata   <br/> | - Tagal bago natapos ang gawain<br/>- **TPS** (mga token kada segundo)<br/>- Bilang ng karakter, salita, at talata<br/>- Gamit na modelo |

Kung nagtatanong ka tungkol sa mga teknikal na termino:

- Ang **Token** ay nangangahulugang maliit na bahagi ng teksto. Maaari mong iisipin ito bilang bahagi ng isang salita o isang maikling salita.
- Ang **TPS** ay ang bilang ng mga bahaging ito ng teksto na naproseso ng modelo sa bawat segundo.

<br/>

Maaari mo ring masubaybayan ang gastos ng bawat operasyon (kung available) at ang kabuuang gastos, sa pamamagitan ng pag-activate ng opsyon na `Ipakita ang impormasyon sa gastos sa mga aksyon` sa [**Mga Setting** > **Pangkalahatang Setting**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>

## Isalin

Gumamit ng **Isalin** kapag nais mong i-convert ang teksto mula sa isang wika patungo sa isa pa.

![Sala ng pagsasalin](../images/screenshots/tl/translate.png)

<br/>

<a id="translate-text"></a>

### Ipatupad ang Teksto

1. Buksan ang **Ipatupad**.
2. Piliin ang wika sa **Mula**.
3. Piliin ang wika sa **Patungo**.
4. Piliin ang modelo sa toolbar.
5. I-type o i-paste ang teksto sa **Input**.
6. I-click ang **Ipatupad**.
7. Basahin ang resulta sa **Output**.
8. Gamitin ang pindutan ng kopya kung gusto mong kopyahin ang resulta.

<br/>

<a id="language-selection"></a>

### Pagpili ng Wika

- Ang **Mula sa** ay maaaring isang tiyak na wika o **Tukuyin ang Wika**.
- Ang **Patungo sa** ay ang wika na gusto mong gamitin para sa resulta.

Ang iyong napiling **Mga Nangungunang Wika** ay lilitaw sa tuktok ng listahan. Maaari mong itakda ang mga ito sa [**Mga Setting** > **Mga Wika**](#languages).

<br/>

<a id="helpful-translation-settings"></a>

### Mga kapaki-pakinabang na pagtatakda sa pagsasalin

Sa [**Mga Pagtatakda** > **Mga Pangkalahatang Pagtatakda**](#general-settings), maaari mong baguhin ang pag-uugali ng pagsasalin:

- **Awto-salin kapag idinikit** ay nagpapatakbo ng pagsasalin pagdaka't ididikit ang teksto.
- **Kopyahin awtomatikong resulta sa clipboard** ay kumokopya ng resulta nang awtomatiko pagkatapos ng matagumpay na pagpapatakbo.
- **Real-time na pagsasalin (habang tinatype)** ay nagpapatakbo ng pagsasalin habang ikaw ay nagtatype.
- **Timeout (ms)** ay nagko-control kung gaano katagal hihintayin ng app bago ipatakbo ang real-time na pagsasalin.
- **Enter** ay nagde-determine kung ano ang mangyayari kapag pinindot mo ang `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Muling Pagsulat

Gamitin ang **Muling Pagsulat** kapag gusto mong mapabuti ang pagkakasulat nang hindi binabago ang pangunahing kahulugan.

![Lugar ng gawaing Muling Pagsulat](../images/screenshots/tl/rewrite.png)

Kasangkapan ito para sa:

- pagwawasto sa pagbaybay at balarila (**Suriin ang Pagbaybay at Balarila**)
- paglilinaw sa teksto (**Mapabilis ang Linaw**)
- iba't ibang anyo ng pagsasalaysay sa isang pagkakataon (**Mga alternatibong bersyon**)
- pagpapormal o pagpapadiwa ng teksto (**Pormal** / **Di-pormal**)
- pagpapahigpit o pagpapalawak ng teksto (**Pahabain** / **Palawakin**)
- pagpapadalas ng tono ng teknikal sa teksto (**Gawing Teknikal**)

<br/>

> 💡 **TIP**<br/>
> Kapag ginamit mo ang "**Suriin ang Pagbaybay at Balarila**" na mode, lilitaw ang isang switch na **Ipakita ang mga pagbabago** sa output panel (nakalapit sa **Kopyahin**). 
> I-on o i-off ito para ipakita o itago ang tiyak na mga pagwasto na isinagawa sa iyong teksto.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## I-transform

Gumamit ng **I-transform** kapag gusto mong sundin ng AI ang isang pasadyang set ng mga tagubilin.

![Transform workspace](../images/screenshots/tl/transform.png)

Ito ang pinakamalawak na lugar sa app. Maaari mo itong gamitin para sa mga gawain tulad ng:

- pagbuod ng mga tala
- pagpapaganda ng isang di-gaanong maayos na teksto upang maging isang mahusay na email
- pagkuha ng mga mahahalagang punto
- pag-convert ng teksto sa isang tiyak na format
- anumang iba pang pasadyang gawain sa input na teksto

<br/>

<a id="run-an-existing-prompt"></a>

### Patakbuhin ang isang umiiral na prompt

1. Buhayin ang **I-Transform**.
2. Piliin ang isang prompt mula sa listahan ng mga prompt.
3. Kung lumitaw ang **Target** na kahon ng wika, pumili ng isang wika kung kailangan mo.
4. I-type o i-paste ang teksto sa **Input**.
5. I-click ang **I-Transform**.
6. Basahin ang resulta sa **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Kung wala pa kang mga prompt

Kung walang laman ang iyong listahan ng prompt, i-click ang **Mag-load ng mga sampol ng prompt** sa workspace ng Transform. Laging available ang kontrol na ito sa [**Mga Setting** > **Mga Prompt sa Pagbabago**](#transform-prompts) sa hilis ng i-export/i-import. Parehong magdadagdag ito ng mga halimbawang naka-embed upang mabilis mong masimulan.

<br/>

> ℹ️ **TANDAAN**<br/>
> Ang mga sampol ng prompt ay ibinibigay sa Ingles. Pagkatapos i-load ang mga ito, maaari mong i-edit ang isang prompt at gamitin ang **Isalin ang prompt** upang maisalin ito sa iyong wika.

<br/>

<a id="create-a-prompt-quickly"></a>

### Gumawa ng prompt nang mabilisan

Ang pinakamabilis na paraan para gumawa ng prompt ay:

1. I-click ang **New prompt**.
2. I-click ang **Generate prompt**.
3. Ilarawan kung ano ang gusto mong gawin ng prompt.
4. Pumili ng isang modelo.
5. Hayaan ang app na lumikha ng draft para sa iyo.
6. Suriin ang draft at i-click ang **Save**.

![Generate prompt](../images/screenshots/tl/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### I-edit ang isang prompt

Kapag gumawa o nag-edit ka ng isang prompt, ang editor ay lilitaw sa kaliwa at ang test area naman ay lilitaw sa kanan.

![Transform prompt editor](../images/screenshots/tl/transform-prompt-edit.png)

Ang pangunahing mga field ay ang mga sumusunod:

- **Pangalan ng prompt**: ang pangalan na ipinapakita sa listahan ng mga prompt.
- **Mga tagubilin sa prompt (opsyonal)**: maikling tulong na ipinapakita sa gumagamit kapag pinapatakbo ang prompt.
- **Model Role**: ang pangkalahatang papel na ibinibigay sa AI, halimbawa, 'Ikaw ay isang kapaki-pakinabang na tagatulong.'
- **Mga tagubilin sa model (isa bawat hanay)**: mga tiyak na alituntunin na nais mong sundin ng AI.
- **Paglalarawan ng output**: maikling salita na naglalarawan sa resulta, tulad ng 'buod' o 'muling pagsulat'.
- **Temperature (0.0 → 1.0)**: ang paraan kung paano kumilos ang modelo; tingnan sa ibaba.
- **Humingi ng wikang tutunguhan (target language)**: nagdaragdag ng selector para sa target na wika kapag pinapatakbo ang prompt.

Kung bago sa iyo ang teknikal na terminong **Temperature**, isipin mo ito sa ganitong paraan:

- Ang **mas mababang** temperature ay nagbibigay ng mas matatag at mas mahuhulaang resulta.

- Ang **mas mataas** na temperatura ay nagbibigay ng higit na pagkakaiba-iba at pagkamalikhain.

Maaari mo ring gamitin:

- **`Generate prompt`** upang lumikha ng bagong draft mula sa isang simpleng deskripsyon
- **`Improve prompt`** upang mapakinis ang isang umiiral na prompt
- **`Translate prompt`** upang isalin ang mga field ng prompt

<br/>

> ⚠️ **BABAALA**<br/>
> I-click ang **`Save`** bago i-click ang **`Back to Run`**. Kung babalik ka nang hindi iyon ini-save, mawawala ang iyong mga pagbabago.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Subukan ang isang prompt bago gamitin

Ang panel ng pagsubok sa kanan ay nagbibigay-daan sa iyo na subukan ang iyong prompt gamit ang sample na teksto bago mo ito gamitin sa pang-araw-araw na gawain.

Nakakatulong ito kung:

- gumagawa ka ng bagong prompt
- inihahambing mo ang dalawang bersyon ng isang prompt
- nais mong suriin ang tono, haba, o format ng output

<br/>

> ℹ️ **PAUNAWA**<br/>
> Maaari mong i-export at i-import ang mga nai-save na prompt sa [**Mga Setting** > **I-transform ang mga Prompt**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Dashboard

Gamitin ang **Dashboard** upang makita kung gaano karami ang iyong paggamit sa app at kung magkano ang gastos nito (para sa mga bayad na modelo).

![Buod ng Dashboard](../images/screenshots/tl/dashboard-summary.png)


<br/>

> ℹ️ **PAUNAWA**<br/>
> Kung gumagamit ka lamang ng mga **libreng** modelo, maaaring zero ang mga halaga ng **gastos** at maaaring walang laman ang mga buod na nakatuon sa gastos. Sa **Buod**, **Gamit sa Paglipas ng Panahon**, at **Gamit Ayon sa Modelo** ay ipinapakita pa rin ang **bilang ng mga tawag** (isalin, muling isulat, at i-transform) kapag mayroon kang gawain sa napiling panahon.

<br/>

<a id="filter-the-data"></a>

### Mag-filter sa data

Gamitin ang mga pindutan ng filter sa itaas para baguhin ang sakop ng oras.

![Mga filter ng Dashboard](../images/screenshots/tl/dashboard-filter.png)

<br/>

> ℹ️ **PAUNAWA**<br/>
> Ang filter na **User** ay nakikita lamang ng mga administrador sa web version. Ang mga karaniwang user ay hindi makakakita ng filter na ito, at hindi ito available sa desktop app.

<br/>

<a id="dashboard-tabs"></a>

### Mga tab sa Dashboard

- Ang **Buod** ay nagbibigay sa iyo ng pangkalahatang-ideya tungkol sa paggamit at gastos. Kasama rito ang **Paggamit sa Paglipas ng Panahon** (pinagsama-samang **bilang ng mga tawag** bawat araw para sa pagsasalin, pagpapalit, at pagbabago) at **Paggamit Ayon sa Modelo** (kabuuang **mga tawag bawat modelo**, kabilang ang transform).
- Ang **Ayon sa Paggamit** ay naghihiwalay ng mga gawain batay sa wikang isinasalin, mode ng pagpapalit, at prompt sa pagbabago.
- Ang **Ayon sa Modelo** ay nagpapakita kung aling mga modelo ang iyong ginamit at kung magkano ang gastos nito.
- Ang **Ayon sa Araw** ay nagpapakita ng kabuuang pang-araw.
- Ang **Lahat ng Tawag** ay nagpapakita ng buong kasaysayan ng mga tawag at nagbibigay-daan sa iyo na i-export ito.

<br/>

<a id="export-data"></a>

### I-export ang data

Ang mga tabla sa dashboard ay maaaring mag-export ng data sa:

- **JSON**
- **CSV**
- **XLSX**

May kapakinabangan ito kung nais mong suriin ang aktibidad nang hindi gumagamit ng app o ikauhugnay ang isang ulat.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Bura ang naka-imbak na mga tala para sa isang modelo

Sa **Sa pamamagitan ng Modelo** o **Lahat ng Tawag**, maaari mong alisin ang mga naka-imbak na tala para sa isang modelo sa pamamagitan ng pag-click sa icon ng "basurahan".

> ⚠️ **BABAЛА**<br/>
> Ang pagbura ng mga naka-imbak na tala ay hindi na maibabalik. Gamitin lamang ito kung sigurado kang hindi mo na kailangan ang kasaysayang iyon.

Para mabura ang lahat ng data o alisin ang mga tala batay sa edad nito, pumunta sa [**Mga Setting** > **Cost Tracking**](#cost-tracking). Doon makikita mo ang mga opsyon para burahin ang lahat ng naka-imbak na data o mga datang mas lumang isang tiyak na petsa.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Kasaysayan

I-click ang **Kasaysayan** upang tingnan ang kasaysayan ng iyong mga aksyon sa loob ng **Transrewrt**, kasama ang input at output ng bawat operasyon.

![Pahina ng Kasaysayan](../images/screenshots/tl/history.png)

<br/>

<a id="filter-the-history"></a>

### I-filter ang data

Ginagamit ng **History** ang parehong mga filter sa pahina ng **Dashboard**. Gamitin ito upang pumili ng saklaw ng oras.

![Mga filter ng dashboard](../images/screenshots/tl/dashboard-filter.png)

<br/>

> ℹ️ **PAUNAWA**<br/>
> Ang pagpipilian na **User** ay nakikita lamang ng mga administrator sa web na bersyon. Ang karaniwang mga gumagamit ay hindi makakakita ng filter na ito, at hindi ito available sa desktop app.

<br/>

<a id="export-history-data"></a>

### I-export ang data ng kasaysayan

Ang pahina ng kasaysayan ay maaaring i-export ang nafilter na data sa:

- **JSON**
- **CSV**
- **XLSX**

Makakatulong ito kung gusto mong suriin ang aktibidad nang hindi gamit ang app o kung iba-share mo ang isang ulat.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>

## Mga Setting

Buksan ang **Mga Setting** mula sa tabilugan upang i-customize kung paano kumikilos ang app.

Ang mga available na tab ay nakadepende sa platform at sa iyong tungkulin:

| Tab | Desktop | Web (admin) | Web (karaniwang gumagamit) |
|-------------------|:-------:|:-----------:|:------------------:|
| Pangkalahatang Mga Setting |   oo   |     oo     |        oo         |
| Mga Modelo |   oo   |     oo     |        oo         |
| Mga Wika |   oo   |     oo     |        oo         |
| Pagsusubaybay ng Gastos |   oo   |     oo     |         —          |
| Mga Prompt ng Pagbabago |   oo   |     oo     |        oo         |
| Mga Gumagamit |    —    |     oo     |         —          |
| Pagkonpigura ng API |   oo   |     oo     |         —          |
| Tungkol Dito |   oo   |     oo     |        oo         |

<br/>

> ℹ️ **PAUNAWA**<br/>
> Sa bersyon ng web, ang bawat user ay may sariling configuration. Ang mga setting katulad ng napiling mga modelo, wika, pangkalahatang opsyon, at mga transform prompt ay iniimbak bawat user. Ang mga pagbabagong ginawa mo ay hindi nakakaapekto sa ibang mga user.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Pangkalahatang mga setting

Gamitin ang **Pangkalahatang mga Setting** para kontrolin ang pag-uugali ng pag-type, kung ang mga detalye ng pagpapagana ay iniimbak para sa **Kasaysayan**, at hitsura.

**Pag-uugali**

- **Pag-uugali para sa ENTER** ay pipili kung ang `Enter` ay magpapatakbo sa gawain o mag-i-insert ng bagong linya.
- **Auto-isalin sa paste** ay magsisimula sa pagsasalin pagkatapos mong i-paste ang teksto.
- **Kopyahin ang resulta sa clipboard nang automatiko** ay kino-kopya ang matagumpay na mga resulta nang automatiko.
- **Real-time na pagsasalin (habang nagtatatype)** ay nagsasalin habang nagtatatype ka.
- **Timeout (ms)** ay nagtatakda ng oras ng paghihintay para sa real-time na pagsasalin.

**Kasaysayan**

- **I-imbak ang kasaysayan ng pagpapagana** ay kontrola kung ang bawat isalin, muling pagsulat, at pagbabago ay mag-iimbak ng **input at output na teksto** para sa tabilugan na tingin ng [**Kasaysayan**](#history). Ang pag-off nito ay magtatanong ng kumpirmasyon; kung ikaw ay kumpirmado, ang naka-imbak na teksto ng kasaysayan ay aalisin mula sa database.

- **Tanggalin ang datos ng kasaysayan** ay nagpapahintulot sa iyo na alisin ang naka-imbak na teksto batay sa edad (halimbawa, mas matanda kaysa ilang buwan, o **lahat ng data (maalis)**) gamit ang **Tanggalin ang data**. Nakakaapekto lamang ito sa naka-save na teksto ng pagpapatakbo para sa **Kasaysayan**; **hindi** ito tinatanggal ang kabuuang gastos o paggamit. Upang alisin o bawasan ang datos ng **gastos**, gamitin ang [**Mga Setting** > **Pagsundan ang Gastos**](#cost-tracking).

**Hitsura**

- **Ipakita ang impormasyon ng gastos sa mga aksyon** ay kontrola ang pagpapakita ng gastos bawat operasyon (kung magagamit) at kabuuang gastos sa mga panel ng output ng Salin, Muling Pagsulat, at Pagbabago.
- **Mga digit sa bahaging desimal ng gastos** ay nagbabago sa paraan ng pagpapakita ng desimal sa gastos.
- **Para sa web lamang:** **ipakita ang margin sa paligid ng app** ay nagdaragdag ng karagdagang espasyo sa paligid ng interface.
- **Pamilya ng Font** ay nagbabago ng font ng teksto sa mga panel.
- **Laki** ay nagbabago ng sukat ng font.

**Backup ng Konpigurasyon**

- **Isama ang datos ng paggamit sa backup** — kapag naka-enable, ang ZIP ay naglalaman din ng kasaysayan ng pagpapatakbo at datos ng tawag sa API.

- **I-backup ang paglilinaw** — gumagawa ng isang ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` oras ng UTC bilang default) na naglalaman ng `config.json`, `state.json`, opsional na encryption key, mga user, mga kagustuhan, mga pasadyang prompt, at data ng paggamit kung naisama mo ito. Kapag matagumpay ang backup, ipapakita ang pangalan ng file na nai-save.
- **I-restore mula sa backup** — magbubukas muna ng **dialogo ng kumpirmasyon**. Pumili ng backup ZIP sa loob ng dialogo (**Mag-browse** / file picker o i-drag at i-drop kung suportado), pagkatapos ay suriin ang mga opsyon:
  - **I-restore ang data ng paggamit** — i-import ang paggamit/kasaysayan mula sa ZIP kapag isinama ito nang na-backup; huwag piliin kung gusto mo lang ang mga setting at mga prompt.
  - **Tanggalin ang lumang data ng paggamit bago i-restore** — alisin ang umiiral na paggamit/kasaysayan sa pag-install na ito bago ilapat ang backup (opsyonal; gamitin kapag gusto mo ng malinis na palitan).

Maaaring i-restore sa kabilang bersyon ang mga backup na ginawa sa web o bersyon sa desktop. Kapag ina-restore ang backup mula sa desktop sa bersyon sa web, ang data ay ma-i-restore sa administrator user.


<br/>

<a id="models"></a>

### Mga Modelo

Gamitin ang **Settings** > **Mga Modelo** upang pumili kung aling mga modelo ang lilitaw sa toolbar.

![Settings Models tab](../images/screenshots/tl/settings-models.png)

Ang pahina ay may dalawang listahan:

- **Mga Available na Modelo** sa kaliwa
- **Mga Napiling Modelo** sa kanan

Kasama sa mga kapaki-pakinabang na kontrol ang:

- **Hanapin ang mga modelo...** para mahanap ang isang modelo batay sa pangalan
- Mga **chip ng Provider** upang mas mapalitan ang listahan sa isang engine (OpenRouter, OpenAI, Ollama, …)
- **Tanging Libre Lamang** upang ipakita ang mga modelo na walang bayad
- **I-refresh** upang i-reload ang listahan
- **Palawakin Lahat** at **I-collapse Lahat** habang pinag-uuri-uri mo ayon sa provider

Ang mga model ID ay may kasamang prefix ng provider (halimbawa `openrouter/…` laban sa `openai/…`). Ang mga badge tulad ng **OpenAI (OpenRouter)** laban sa **OpenAI (direct)** ay nagpapakita kung paano dinidirekta ang trapiko.

> ℹ️ **PAUNAWA**<br/>

> **OpenRouter Body Builder** (`openrouter/bodybuilder`) ay isang modelo ng router, hindi isang pangkalahatang chat model: ang sagot nito ay JSON na naglalarawan sa mga OpenRouter API request body (halimbawa, isang `requests` array na may `model` at `messages`). Kung gagamitin mo ito sa **Pagsasalin**, **Paggawa Ulang**, o **Pagbabago**, ipapakita ng output panel ang JSON na iyon imbes na tapos na teksto. Pumili ng karaniwang text model para sa mga gawaing ito. Tingnan ang [pahina ng Body Builder model](https://openrouter.ai/openrouter/bodybuilder) sa OpenRouter.

Mga Aksyon:

 - Para magdagdag ng modelo, pindutin ang **Idagdag** o kahit saan sa entry.

 - Para alisin ang modelo, pindutin ang **X** sa tabi nito sa **Napiling Mga Modelo** o **Napili** sa entry sa Mga Magagamit na Modelo.

 - Para mai-clear ang listahan, pindutin ang **Huwag Piliin Lahat**. Ang kailangang libreng modelo ay mananatili sa listahan.

<br/>

> ℹ️ **PAUNAWA**<br/>

> Kung hindi mo gustong idagdag agad ang mga credit sa OpenRouter, magsimula sa pamamagitan ng pag-enable sa **Free Lang** at pumili ng mga libreng modelo (walang kailangang credit card). Maaari mo ring gamitin ang Ollama upang patakbuhin ang mga modelo nang lokal nang walang anumang API key.

<br/>

<a id="languages"></a>

### Mga Wika

Gamitin ang **Mga Setting** > **Mga Wika** upang ayusin ang mga listahan ng wika na ginagamit sa app.

- Ang **Mga nangungunang wika** ay nakapirmi malapit sa tuktok ng mga listahan ng wika sa **Isalin** at **Baguhin**.
- Ang **Pasadyang wika** ay nagbibigay-daan sa iyo na magdagdag ng wika na hindi kasama sa nakapirming listahan.

Kung magdadagdag ka ng pasadyang wika, lilitaw ito sa mga pumipili ng wika kasama ang mga nakapirming opsyon.

<br/>

<a id="cost-tracking"></a>

### Pagsusubaybay sa Gastos

Gamitin ang **Mga Nilo-load** > **Pagsusubaybay sa Gastos** upang pamahalaan ang impormasyon tungkol sa gastos.

- Ang **Kabuuang Gastos** ay nagpapakita ng kabuuang bilang habang nagkakaroon ng transaksyon.
- Ang **Kopyahin ang Halaga** ay kinokopya ang kabuuan sa clipboard.
- Ang **I-reset ang Gastos** ay pinapanumbalik ang naitabing kabuuan sa sero.
- Ang **I-sync sa paggamit ng API key** ay nagtatakda sa kabuuan upang tumugma sa ulat ng paggamit ng iyong OpenRouter account (OpenRouter lamang).
- Ang **Paggamit ng API Key** ay nagpapakita ng detalye ng paggamit sa OpenRouter, kung magagamit.
- Ang **Tanggalin ang datos ng gastos** ay nagtatanggal sa lahat ng datos, o mga entry lamang na mas matanda sa napiling petsa.

**Pagsusubaybay sa Gastos:** Kapag gumagamit ka ng mga modelo sa OpenRouter, ipinapakita ng app ang iyong aktuwal na paggamit at gastusin batay sa impormasyon ng gastos mula sa OpenRouter. Para sa lahat ng iba pang mga provider, hinuhulaan ng app ang gastos gamit ang mga presyo na inilathala ng OpenRouter; kung hindi available ang presyo, maaaring sero ang hula.

<br/>

> ℹ️ **PAUNAWA**<br/>
>  **Lahat ng mga halaga ng gastos ay mga pagtataya lamang para sa iyong kaalaman, hindi opisyal na pahayag ng bayad.**


<br/>

> ⚠️ **BABALA**<br/>

> Hindi maibabalik ang pagbura ng data. Bago burahin, siguraduhing na-back up mo na ang data o ini-export ito sa pamamagitan ng [**History**](#history) o [**Dashboard** > **All Calls**](#dashboard-tabs), dahil kung hindi, magiging permanente itong mawawala. Ang lahat ng kasaysayan ng input/output na may kinalaman sa bawat API call entry ay mabubura rin.


<br/>

<a id="transform-prompts"></a>

### Baguhin ang mga prompt

Gamitin ang **Settings** > **Transform Prompts** upang pamahalaan nang sabay-sabay ang mga prompt.

Maaari mong:

- suriin ang mga nai-save mong prompt
- tanggalin ang mga prompt
- i-import ang mga prompt mula sa isang file
- i-export ang mga prompt para sa backup o pagbabahagi
- i-load ang mga halimbawang prompt sa listahan ng mga prompt

<br/>

<a id="users"></a>

### Mga User

Gamitin ang **Mga User** para panghawakan ang mga user account sa web na bersyon. Maaari mong idagdag ang mga user, i-update ang kanilang mga detalye, i-reset ang mga password, at tanggalin ang mga account.

<br/>

<a id="api-config"></a>

### Pagkakumpigura ng API

Ang mga sumusuportang tagapagbigay ay: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, at **Ollama** (mga lokal na modelo sa pamamagitan ng base URL). Kailangan mo lamang ikumpigura ang mga tagapagbigay na gagamitin mo.

**Aplikasyong web: mga tagapangasiwa lamang**

Ang mga API key ay ikukumpigura sa pamamagitan ng system o Docker environment variables — hindi ito isinasagot sa web UI. Pinapakita ng pahinang ito kung aling mga tagapagbigay ang may naka-configure na key at nagbibigay-daan sa iyo na subukan ang bawat isa sa pamamagitan ng pag-click sa pindutang **`Test`**.

<br/>

> ℹ️ **TANDAAN**<br/>
> Upang baguhin ang isang API key, i-update ang environment variable sa iyong system o Docker configuration at i-restart ang server o container.

> ℹ️ **TANDAAN**<br/>

> **Mga backup ng konpigurasyon** (tingnan ang [**Mga pangkalahatang setting** → Backup ng Konpigurasyon](#general-settings)) ay maaaring maglaman ng **nare-resolve** na mga susi ng provider sa loob ng `config.json` ng ZIP. Ang pag-re-restore ng ZIP na ito ay **hindi** kino-copy ang mga susi pabalik sa naka-save na config file ng server — ang mga aktibong susi ay galing pa rin sa environment at umiiral na file state gaya ng inilarawan doon.

<br/>

**Desktop application**

Gumamit ng **API Config** para iimbak ang mga API key para sa bawat provider na iyong ginagamit. Para sa Ollama, ipasok ang **base URL** imbes na isang API key.


<br/>

> 💡 **Tip** <br/>
> Kung hindi mo gustong gumamit ng API key o magbayad para sa paggamit, maaari mong [i-download ang Ollama](https://ollama.com) at i-run ang mga modelo (tulad ng `translategemma:4b`) nang lokal sa iyong computer nang libre. Bilang kahalili, maaari kang gumawa ng libreng OpenRouter account (walang kinakailangang credit card) para gamitin ang kanilang mga libreng modelo, o kumuha ng libreng API key mula sa Cerebras, Google, Groq, o Mistral AI.

<br/>

- Magdagdag lamang ng mga provider na kailangan mo. Sa **Mga Setting** > **Mga Modelo**, ang bawat model ID ay nagsisimula sa provider (halimbawa `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Para magdagdag ng API key, ipasok ang halaga sa text field at i-click ang **`I-save`**. Para palitan ang isang umiiral nang key, i-click ang **`I-edit`**. Para i-verify kung gumagana ang key, i-click ang **`Subukan`**. Para sa Ollama base URL, i-click palagi ang **`Subukan`** upang suriin ang koneksyon.

<br/>

> ℹ️ **PAUNAWA**<br/>
> Hindi mo maaaring makita ang kasalukuyang halaga ng isang API key. Maaari mo lamang itong palitan gamit ang pindutan na **`I-edit`**.
> Ang mga API key ay naka-imbak nang naka-encrypt sa configuration.

<br/>

<a id="about"></a>

### Tungkol sa

Ipakikita ng tab na **Tungkol sa**:

- ang pangalan ng aplikasyon
- ang numero ng bersyon
- ang petsa ng pagbuo
- isang link sa imbakan ng proyekto

<br/><br/>

<a id="common-issues"></a>

## Karaniwang isyu

Kung may bagay na hindi gumagana gaya ng inaasahan, suriin muna ang mga sumusunod na puntos.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>

### Ang app ay hindi magbabalangkas, magsusulat muli, o babaguhin ang teksto

Suriin ang mga sumusunod:

- tinitiyak na mayroon kang napiling modelo sa toolbar
- mayroon kahit isang modelo na nakalista sa [**Mga Setting** > **Mga Modelo**](#models)
- gumagana ang iyong API setup

Kung gumagamit ka ng desktop app:

1. Buksan ang [**Mga Setting** > **API Config**](#api-config).
2. Tiyakin na naka-save na ang kahit isang API key.
3. I-click ang **Test** sa tabi ng provider upang kumpirmahin na gumagana ang key.

<br/>

<a id="the-model-list-is-empty"></a>

### Walang laman ang listahan ng modelo

Buksan ang [**Mga Setting** > **Mga Modelo**](#models) at pindutin ang **I-refresh**.

Kung kinakailangan:

- maghanap ng isang modelo
- i-on ang **Libre Lamang**
- magdagdag ng isang o higit pang mga modelo sa **Mga Napiling Modelo**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>

### Mabagal o mahal na mahal ang resulta

Subukan ang isa o higit pang mga sumusunod:

- pumili ng iba pang modelo
- gumamit ng maikling input
- i-off ang **Real-time na pagsasalin (habang maya typing)** sa [**Settings** > **General Settings**](#general-settings)
- gamitin ang libreng modelo para sa mga simpleng gawain (tingnan ang [Mga Modelo](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### nasa maling wika ang interface

I-click ang icon ng mundo sa [toolbar](#toolbar) at pumili ng iyong nais na **wika para sa interface**.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>

### Masyadong maliit o mahirap basahin ang teksto

Buksan ang [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings) at baguhin ang:

- **Pamilya ng Font**
- **Laki**

<br/>

<a id="dashboard-charts-are-empty"></a>

### Walang laman ang mga tsart sa Dashboard

Normal lang ito kung:

- gumagamit ka lamang ng **mga libreng modelo** at tinitingnan mo ang mga numero sa **gastos** (maaaring zero ang halaga nito); kailangan pa ng data mula sa napiling panahon ang mga tsart ng bilang ng paggamit sa **Buod**
- hindi sumasakop ang napiling **filter ng oras** sa panahon kung kailan isinagawa ang mga tawag — subukang piliin ang **Lahat** para makita

Kung patuloy na walang laman ang mga tsart pagkatapos piliin ang **Lahat**, kumpirminin kung may mga tawag na nakalista sa [**Kasaysayan**](#history) o sa tab na **Lahat ng Tawag**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Ang gastos ay "hindi available" o mukhang mali

Kapag gumagamit ka ng mga modelo sa pamamagitan ng **OpenRouter**, ipinapakita ng app ang aktuwal mong ginastos na iniulat ng OpenRouter.

Para sa **mga ibang provider** (tulad ng direktang OpenAI, direktang Anthropic, atbp.), ang gastos ay tinataya batay sa datos ng presyo na inilathala ng OpenRouter. Kung hindi mahanap ang tumutugma sa presyo para sa isang modelo, ang gastos ay lilitaw bilang **hindi available** at hindi idaragdag sa kabuuang balanse mo.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### Ang kabuuang gastos ay hindi tugma sa bill ng provider ko

Lahat ng mga figure ng gastos sa app ay **mga tinatayang halaga para sa reperensya lamang**, hindi opisyal na pahayag ng singil.

Para mapalapit ang kabuuang halaga sa iyong aktwal na gastos sa OpenRouter, buksan ang [**Mga Setting** > **Cost Tracking**](#cost-tracking) at i-click ang **I-sync sa paggamit ng API key**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### Nawawala ang pahina ng Kasaysayan sa sidebar

Maaaring na-off ang **Panatilihing kasaysayan ng pagpapatupad**. Buksan ang [**Mga Setting** > **Mga Pangkalahatang Setting**](#general-settings) at i-on ito. Tandaan na ang pag-on nito ay hindi maibabalik ang mga dati nang tanggalin na kasaysayan. 

<br/>

<a id="web-app-session-expired"></a>

### Web app: nawala sa iyo sa pahina ng pag-login nang hindi inaasahan

Maaaring nag-expire na ang iyong sesyon. Muling mag-login. Kung madalas itong nangyayari, suriin ang configuration ng server para sa mga setting ng haba ng sesyon.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Web admin: nakalimutan o nawala ang password

Ito ay nalalapat sa **self-hosted na web app** (Docker), hindi sa desktop (Electron) na app.

- Kung may iba pang administrator na maaari pa ring mag-sign in, maaari nilang buksan ang [**Mga Setting** > **Mga Gumagamit**](#users), piliin ang account, at itakda ang **bagong password** doon.
- Kung ikaw ay **nakapagtanong** na ngunit may **shell access** ka pa rin sa machine o container, i-reset ang password gamit ang helper na kasama ng imahe (palitan ang `transrewrt` kung binago mo ang default na pangalan, at isama sa quote ang password kung ito ay may espasyo o espesyal na karakter):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Ang default na pangalan ng admin ay `admin` kung hindi ka pa gumawa ng ibang account. Kapag naglagay ka lamang ng isang argumento, ito ay kinikilala bilang bagong password para sa `admin`.

Kung pinapatakbo mo ito mula sa **source checkout** imbes na Docker, gamitin ang:

```bash
pnpm run reset-web-password -- <username> <new-password>

Nag-a-update ang script sa user record sa SQLite database (at maaari itong lumikha ng `admin` user kung wala ito). Matapos ang pag-reset, mag-sign in gamit ang bagong password.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### Walang ipinapakitang data ang Dashboard para sa ibang mga user (web)

Tanging ang mga **administrador** lamang ang makakakita ng data mula sa lahat ng user sa pamamagitan ng **User** na filter. Ang mga karaniwang user ay nakakakita lamang ng kanilang sariling aktibidad ayon sa disenyo.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### Nagbago ako ng prompt at nawala ang mga edit

Kapag nag-e-edit ng isang prompt, tiyak na i-click ang **I-save** bago pindutin ang **Bumalik sa Run**.

<br/><br/>

<a id="quick-tips"></a>

## Mga mabilis na tip

- Magsimula sa [**Isalin**](#translate) upang mapagsigurado na gumagana ang iyong pag-setup bago lumipat sa [**Muling Isulat**](#rewrite) o [**Baguhin**](#transform).
- Gamitin ang [**Muling Isulat**](#rewrite) para sa pang-araw-araw na pagpapabuti ng mga salita.
- Gamitin ang [**Baguhin**](#transform) kapag kailangan mo ng mapapaulit-ulit na proseso para sa tiyak na gawain.
- Gamitin ang [**Dashboard**](#dashboard) kung nais mong bantayan ang paggamit at gastos.
- Gamitin ang [**Kasaysayan**](#history) upang suriin ang mga nakaraang operasyon at ang buong input/output na teksto nito.
- I-export ang mga prompt nang regular kung gumagawa ka ng aklatan ng mga prompt na nais mong mapanatiling ligtas (tingnan ang [Mga Prompt sa Pagbabago](#transform-prompts)) o kung ibabahagi mo ito sa iba.

<br/><br/>

<a id="disclaimer"></a>

## Pagtatatuwa

Ang mga pangalan at mga logo ng produkto ay pagmamay-ari ng kani-kanilang may-ari at ginagamit lamang para sa layuning pagkilala. Ang software na ito ay hindi kaugnay o pinagkakatiwalaan ng anumang mga brand na nabanggit.

<br/><br/>

<a id="license"></a>

## Lisensya

Copyright © 2026 Waldemar Scudeller Jr.

[Lisensya ng Apache 2.0](LICENSE)