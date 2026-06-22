![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# User Guide

<br/>

<a id="introduction"></a>
## Parichay

Transrewrt aapko teen mukhya tareekon se text ke saath kaam karne mein madad karta hai:

- **Anuvaad karein** - ek bhasha se doosri bhasha mein text ko badlein.
- **Phir se likhen** - text ko alag shaili mein phir se likhen, jaise ki adhik spasht, chhota, ya adhik aupcharik.
- **Badlen** - custom AI nirdeshon ka upyog karke text ko process karein jinhe prompts kaha jaata hai.

By default app **Easy** mode mein chalti hai: aap ek **preset** (jaise ki Free (OpenRouter), Standard, Advanced, ya Technical) aur Settings mein ek **provider** chunte hain, bina model IDs chune. Yadi aap [**Settings** > **Models**](#models) se classic model list chahte hain to [**Settings** > **General Settings**](#general-settings) mein **Advanced** par switch karein.

<br/>

Yah guide batati hai ki app install hone aur chalne ke baad uska upyog kaise karein. Installation steps ke liye, mukhya [**README**](README.hi-Latn.md) dekhein.

<br/>

> ℹ️ **NOTE**<br/>
> Transrewrt Windows aur Linux ke liye desktop app ke roop mein, aur ek self-hosted web app ke roop mein uplabdh hai. Yah guide app ke dainik upyog par kendrit hai. Jahan kuch kewal ek version par lagu hota hai, use spasht roop se chihnit kiya gaya hai.

<small>**Anya bhashaon mein padhen:** </small>
<small id="lang-list">[English (UK)](../USER-GUIDE.md) · [Português (Brasil)](./USER-GUIDE.pt-BR.md) · [العربية](./USER-GUIDE.ar.md) · [বাংলা](./USER-GUIDE.bn.md) · [Català](./USER-GUIDE.ca.md) · [简体中文](./USER-GUIDE.zh-Hans.md) · [繁體中文](./USER-GUIDE.zh-Hant.md) · [Hrvatski](./USER-GUIDE.hr.md) · [Čeština](./USER-GUIDE.cs.md) · [Nederlands](./USER-GUIDE.nl.md) · [English (US)](./USER-GUIDE.en-US.md) · [Tagalog](./USER-GUIDE.tl.md) · [Français](./USER-GUIDE.fr.md) · [Deutsch](./USER-GUIDE.de.md) · [Ελληνικά](./USER-GUIDE.el.md) · [Hindi (Roman)](./USER-GUIDE.hi-Latn.md) · [Magyar](./USER-GUIDE.hu.md) · [Italiano](./USER-GUIDE.it.md) · [日本語](./USER-GUIDE.ja.md) · [한국어](./USER-GUIDE.ko.md) · [Bahasa Melayu](./USER-GUIDE.ms.md) · [فارسی](./USER-GUIDE.fa.md) · [Polski](./USER-GUIDE.pl.md) · [Basa Jawa](./USER-GUIDE.jv.md) · [Português](./USER-GUIDE.pt.md) · [پنجابی](./USER-GUIDE.pa-PK.md) · [Română](./USER-GUIDE.ro.md) · [Русский](./USER-GUIDE.ru.md) · [Slovenčina](./USER-GUIDE.sk.md) · [Español](./USER-GUIDE.es.md) · [Kiswahili](./USER-GUIDE.sw.md) · [Svenska](./USER-GUIDE.sv.md) · [తెలుగు](./USER-GUIDE.te.md) · [ไทย](./USER-GUIDE.th.md) · [Türkçe](./USER-GUIDE.tr.md) · [Українська](./USER-GUIDE.uk.md) · [Tiếng Việt](./USER-GUIDE.vi.md)</small>

<small>

> **UI aur documentation anuwadon par dhyan dein:** Original English (UK) ko chhodkar sabhi interface bhashaon ka anuvaad AI models ka upyog karke kiya gaya tha;
> shabdon mein ashuddhi ya galatiyan ho sakti hain.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Vishay Suchi**

- [Shuru karne se pehle](#before-you-start)
  - [Muft OpenRouter API key kaise prapt karein (desktop app)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Shuruat karna](#getting-started)
- [Window ke mukhya bhaag](#main-parts-of-the-window)
  - [Sidebar](#sidebar)
  - [Toolbar](#toolbar)
  - [Input aur output panel](#input-and-output-panels)
- [Anuvaad karein](#translate)
  - [Text ka anuvaad karein](#translate-text)
  - [Bhasha ka chayan](#language-selection)
  - [Madadgar anuvaad settings](#helpful-translation-settings)
  - [Apne anuvaad ko behtar banana](#refining-your-translation)
  - [Shabdakosh ka upyog karna](#using-the-glossary)
- [Phir se likhen](#rewrite)
- [Badlen](#transform)
  - [Ek maujooda prompt chalayein](#run-an-existing-prompt)
  - [Yadi aapke paas abhi tak koi prompt nahin hai](#if-you-have-no-prompts-yet)
  - [Jaldi se ek prompt banayein](#create-a-prompt-quickly)
  - [Ek prompt edit karein](#edit-a-prompt)
  - [Upyog karne se pehle ek prompt ka parikshan karein](#test-a-prompt-before-using-it)
- [Dashboard](#dashboard)
  - [Data ko filter karein](#filter-the-data)
  - [Dashboard tabs](#dashboard-tabs)
  - [Data export karein](#export-data)
  - [Ek model ke liye store kiye gaye records delete karein](#delete-stored-records-for-a-model)
- [Itihaas](#history)
  - [Itihaas ko filter karein](#filter-the-history)
  - [Itihaas data export karein](#export-history-data)
- [Settings](#settings)
  - [Samanya settings](#general-settings)
  - [Models](#models)
  - [Bhashayein](#languages)
  - [Laagat tracking](#cost-tracking)
  - [Badlen (settings tab)](#transform-settings-tab)
  - [Shabdakosh (settings tab)](#glossary-settings-tab)
  - [Upbhokta](#users)
  - [API Config](#api-config)
  - [Baare mein](#about)
- [Aam samasyayein](#common-issues)
  - [App text ka anuvaad, phir se likhna ya badalna nahin karegi](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Model list khaali hai](#the-model-list-is-empty)
  - [Parinaam bahut dheema ya bahut mahanga hai](#the-result-is-too-slow-or-too-expensive)
  - [Interface galat bhasha mein hai](#the-interface-is-in-the-wrong-language)
  - [Text bahut chhota ya padhne mein mushkil hai](#the-text-is-too-small-or-hard-to-read)
  - [Dashboard Saraansh khaali lagta hai](#dashboard-summary-looks-empty)
  - [Laagat "uplabdh nahin" dikhati hai ya galat lagti hai](#cost-shows-not-available-or-seems-wrong)
  - [Kul lagat mere provider bill se mel nahin khati hai](#total-cost-does-not-match-my-provider-bill)
  - [Itihaas page sidebar se gayab hai](#the-history-page-is-missing-from-the-sidebar)
  - [Web app: anapekshit roop se login page par redirect kiya gaya](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Web admin: password bhool gaye ya kho gaya](#web-admin-forgot-or-lost-a-password)
  - [Dashboard mein anya upbhoktaon ke liye koi data nahi dikhta (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Maine ek prompt badla aur edits kho diye](#i-changed-a-prompt-and-lost-the-edits)
- [Turant tips](#quick-tips)
- [Disclaimer](#disclaimer)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Shuru karne se pehle

Transrewrt ka istemal karne ke liye, aapko kam se kam ek AI provider tak pahunchne ki zaroorat hai. Samarthit providers hain: [OpenRouter](https://openrouter.ai) (jo kai models ko aggregate karta hai), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, koi bhi OpenAI-compatible provider, aur [Ollama](https://ollama.com) local models ke liye.

Aapko shuru karne ke liye ek paid model chunne ki aavashyakta nahi hai. Jaise hi aap apni OpenRouter API key jodte hain, app swayam hi ek built-in **muft** OpenRouter vikalp ko saksham kar deta hai. Yah aapko turant text ka anuvaad, phir se likhne aur badalne ki anumati deta hai. Vikalp roop se, aap Cerebras, Google, Groq, Mistral AI, ya [NVIDIA](https://build.nvidia.com/) (OpenAI-compatible API) se bhi ek muft API key prapt kar sakte hain.

Saral shabdon mein:

- **Easy** mode mein, ek **preset** (Muft (OpenRouter), Standard, Unnat, ya Technical) aapke chune hue **provider** (OpenRouter, OpenAI, Ollama, aur anya) ke liye ek model se map karta hai. Toolbar mein keval ve presets dikhai dete hain jinka vartaman provider ke liye mapping hai. Aap Translate, Rewrite, aur Transform par preset chunte hain.
- **Unnat** mode mein, ek **model** vah AI engine hai jise aap seedhe chunte hain. Model ids ek **provider prefix** ka upyog karte hain (jaise `openrouter/…`, `openai/…`, `ollama/…`).
- Ek **API key** (ya, Ollama ke liye, ek **base URL**) vah tareeka hai jisse app us provider tak pahunchta hai.

Yadi aap **desktop app** ka upyog kar rahe hain, to aap upyog kiye jaane wale pratyek provider ke liye [**Settings** > **API Config**](#api-config) mein keys jodein. Keval OpenRouter ke upyog ke liye, neeche [Muft OpenRouter API key kaise prapt karein](#how-to-get-a-free-openrouter-api-key-desktop-app) dekhein. Yadi aap API key ka upyog nahi karna chahte hain, to aap Ollama ( [ollama.com](https://ollama.com) se) install kar sakte hain aur iske bajaye local models ka upyog kar sakte hain, jaise `translategemma:4b`.

Yadi aap **web version** ka upyog kar rahe hain, to server owner environment variables ke saath providers ko configure karta hai, isliye aap application mein seedhe API keys darj nahi kar sakte hain.

<br/>

<a id="how-to-get-a-free-openrouter-api-key-desktop-app"></a>
### Muft OpenRouter API key kaise prapt karein (desktop app)

Yadi aap desktop app ka upyog kar rahe hain, to in charanon ka palan karein:

1. Apne web browser mein [OpenRouter](https://openrouter.ai) par jaayen.
2. Ek account banayein ya sign in karein.
3. [Keys](https://openrouter.ai/keys) page kholein.
4. Nayi API key banane ke liye button par click karein.
5. Key ko ek naam dein taaki aap use baad mein pehchan sakein.
6. Nayi API key copy karein.
7. Transrewrt par wapas jaayen aur **Settings** > **API Config** kholein.
8. Key ko **OpenRouter API key** mein paste karein (**Settings** > **API Config** ke antargat).
9. Yah sunishchit karne ke liye **Test OpenRouter key** par click karein ki yah kaam karta hai.

<br/><br/>

<a id="getting-started"></a>
## Shuruat karna

Yadi aap pehli baar Transrewrt ka upyog kar rahe hain, to is kram ka palan karein:

1. App kholein.
2. Yadi aavashyak ho, to globe icon se apni **Interface bhasha** chunein.
3. Yadi aap **desktop app** par hain, to [**Settings** > **API Config**](#api-config) kholein, kam se kam ek provider (jaise OpenRouter) ke liye ek API key jodein, aur yah jaanchne ke liye **Test** par click karein ki yah kaam karta hai.
4. [**Settings** > **Samanya Settings**](#general-settings) kholein. **Easy** mode (default) mein, ek **Provider** chunein jiske paas ek configured key hai. **Unnat** mode mein, [**Settings** > **Models**](#models) kholein aur **Chune gaye Models** mein ek ya ek se adhik models jodein.
5. **Translate** par, toolbar mein ek **preset** (Easy) ya **model** (Unnat) chunein.
6. [**Settings** > **Bhashayein**](#languages) kholein aur apni **Top languages** chunein yadi aap chahte hain ki aapki sabse adhik upyog ki jaane wali bhashayein pehle dikhai dein.
7. Yah sunishchit karne ke liye ek saral anuvaad chalaayen ki sab kuch kaam kar raha hai, phir **Rewrite** aur **Transform** ka prayog karein.

Yah kram mahatvapurn hai. Yah sabse aam pehli-baar upyog ki samasya ko rokta hai: app ke paas kaam karne wala API connection ya chuna gaya preset/model hone se pehle ek task chalane ki koshish karna.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Window ke mukhya bhaag

App ko teen mukhya kshetron mein baanta gaya hai:

- Baayein taraf **sidebar**.
- Upar **toolbar**.
- Beech mein **work area**.

<br/>

<a id="sidebar"></a>
### Sidebar

App mein ghoomne ke liye sidebar ka upyog karein. Aap app logo ke bagal mein icon par click karke adhik jagah ke liye sidebar ko collapse kar sakte hain.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/hi-Latn/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Anuvaad karein</strong> anuvaad workspace kholta hai.</li><br/>
        <li><strong>Phir se likhen</strong> rewriting workspace kholta hai.</li><br/>
        <li><strong>Badlen</strong> custom prompt workspace kholta hai.</li><br/>
        <li><strong>Dashboard</strong> upyog aur laagat ki jaankari dikhata hai.</li><br/>
        <li><strong>Settings</strong> settings panel kholta hai.</li><br/>
        <li><strong>Itihaas</strong> input aur output text ke saath upyog ka itihaas dikhata hai</li><br/>
        <li><strong>User</strong> logged-in user ka username dikhata hai (keval web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Toolbar

Toolbar thoda badalta hai is baat par nirbhar karta hai ki aap app mein kahan hain.

- Baayein taraf, yeh vartaman page ka naam dikhata hai.
- Daayein taraf, yeh **preset ya model selector** aur **Interface bhasha** control dikhata hai.

**Easy** mode mein, toolbar ek **preset selector** dikhata hai jismein built-in presets **Muft (OpenRouter)**, **Standard**, **Unnat**, aur **Technical** shamil hain. Kaun se presets dikhte hain yeh is baat par nirbhar karta hai ki aapne [**Settings** > **Samanya Settings**](#general-settings) mein kaun sa **Provider** chuna hai—udharan ke liye, **Muft (OpenRouter)** tabhi soochi mein hota hai jab provider OpenRouter ho. Yadi **Provider** **Ollama** hai, to toolbar presets ke bajaye aapke install kiye gaye local models ko soochi mein rakhta hai.

**Unnat** mode mein, **model selector** aapko yeh chunne deta hai ki vartaman karya ke liye kis AI engine ka upyog karna hai.

![Model selector](../images/screenshots/hi-Latn/preset-selector.png)

Unnat mode mein, kuch muft models hamesha uplabdh nahi ho sakte hain—ve offline ho sakte hain ya upyog seema tak pahunch sakte hain. App us model ko aapki soochi se apne aap hata sakta hai. Kaun se models dikhte hain isko niyantrit karne ke liye, [**Settings** > **Models**](#models) par jaayen. Aap toolbar mein model naam ke baayein taraf provider icon se model settings khol sakte hain.

<br/>

**Globe icon + bhasha code** app interface bhasha ko badalta hai, jaise menus aur buttons. Yeh **Anuvaad karein** mein upyog ki jaane wali anuvaad bhashaon ko **nahi** badalta hai.

![Interface language selector](../images/screenshots/hi-Latn/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Input aur output panels

Adhikansh workspaces mein baayein taraf **Input** panel aur daayein taraf **Output** panel ka upyog hota hai.

Har panel yeh bhi dikhata hai:

| **Input**                                                          | **Output**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Aksharon ki sankhya <br/>- Shabdon ki sankhya <br/>- Paragraph ki sankhya   <br/> | - Karya mein laga samay<br/>- **TPS** (tokens prati second)<br/>- Aksharon, shabdon, aur paragraphs ki sankhya<br/>- Upyog kiya gaya model |

Yadi aap takniki shabdon ke baare mein soch rahe hain:

- **Token** ka matlab hai text ka ek chhota sa tukda. Aap ise ek shabd ke hisse ya ek chhote shabd ke roop mein soch sakte hain.
- **TPS** ka matlab hai ki model ne har second mein kitne text ke tukdon ko process kiya.

<br/>

Aap har operation ki laagat (yadi uplabdh ho) aur kul laagat ki bhi nigrani kar sakte hain, [**Settings** > **Samanya settings**](#general-settings) par `Show cost information on the actions` option ko enable karke.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Anuvaad karein

Jab aap text ko ek bhasha se doosri bhasha mein badalna chahte hain, to **Translate** ka upyog karein.

![Translate workspace](../images/screenshots/hi-Latn/translate.png)

<br/>

<a id="translate-text"></a>
### Text ka anuvaad karein

1. **Translate** kholein.
2. **From** mein ek bhasha chunein.
3. **To** mein ek bhasha chunein.
4. Toolbar mein ek preset (Easy) ya model (Advanced) chunein.
5. **Input** mein text type karein ya paste karein.
6. **Translate** par click karein.
7. **Output** mein result padhein.
8. Agar aap result copy karna chahte hain to copy button ka upyog karein.
9. Vikalp roop se **Rephrase…** ya shabd vikalpon ke saath result ko sudharein — dekhein [Apne anuvaad ko sudharna](#refining-translation).

<br/>

<a id="language-selection"></a>
### Bhasha ka chayan

- **From** ek vishisht bhasha ya **Detect Language** ho sakti hai.
- **To** vah bhasha hai jismein aap result chahte hain.

Aapki chuni hui **Top languages** list ke sheersh par dikhai deti hain. Aap inhe [**Settings** > **Languages**](#languages) mein set kar sakte hain.

<br/>

<a id="helpful-translation-settings"></a>
### Madadgar anuvaad settings

[**Settings** > **General Settings**](#general-settings) mein, aap anuvaad ke vyavahar ko badal sakte hain:

- **Auto-execute on paste** jaise hi aap text paste karte hain, anuvaad chala deta hai.
- **Auto-copy result to clipboard** safal run ke baad result ko swatah copy kar deta hai.
- **Real-time translation while typing** (⚠️ Isse upyog laagat badh sakti hai) type karte samay anuvaad chalata hai.
- **Timeout (ms)** niyantrit karta hai ki real-time anuvaad chalane se pehle app kitni der tak intezaar karta hai.
- **Behaviour for ENTER** chunta hai ki `Enter` task chalata hai ya ek nayi line dalta hai:
  - **Enter** anuvaad ya phir se likhne ka kaam karta hai (default).
  - **Shift + Enter** anuvaad ya phir se likhne ka kaam karta hai; keval **Enter** ek nayi line dalta hai.

<br/>

<a id="refining-translation"></a>
### Apne anuvaad ko sudharna

Ek safal anuvaad ke baad, **Rephrase…** aur version dropdown output header mein, **To:** bhasha chayanak ke bagal mein dikhai dete hain. Aap vahan result ko sudhar sakte hain:

1. **Rephrase…** — output mein koi text chuna na hone par, usi input ka ek aur poora anuvaad alag shabdon mein prapt karein. Model aapke paas pahle se maujood har version ko prapt karta hai taki naye shabd un sabhi se alag ho sakein. Aap **paanch** version tak store kar sakte hain aur version dropdown mein unke beech switch kar sakte hain. Text chune hone par, **Rephrase…** chayan ke paas shabd vikalp kholta hai (right-click ke samaan). Chayan ke bina, **Rephrase…** paanch version tak pahunchne par disable ho jata hai; chayan ke saath, yah paanch version par bhi kaam karta hai (keval shabd vikalp, version 5 ko update karte hue). Jab ek poora rephrase chal raha ho, to radd karne ke liye **Stop Translate** par click karein; output us version par laut jata hai jo rephrase shuru hone par sakriya tha.
2. **Shabd vikalp** — output mein ek ya ek se adhik shabd ya ek chhota vakya chunein (agar aap kisi shabd ka keval ek hissa chunte hain, to app chayan ko poore shabdon tak badha deta hai), phir right-click karein ya **Rephrase…** par click karein. Chayan ke paas vikalpon ki ek chhoti list dikhai deti hai; use badalne ke liye ek par click karein. Har vikalp aapke chayan se thoda bada span badal sakta hai (jaise ki ek lagatar preposition ya article) taki vakya vyakaranik roop se sahi rahe. Agar aapke paas paanch se kam version hain, to sampadit output ek naye version ke roop mein save ho jata hai; paanch version par, keval **version 5** update hota hai. Bina chayan ke right-click karne se kuch nahin hota. Output ko badle bina radd karne ke liye **Esc** dabayein ya list ke bahar click karein.
3. **Laagat** — har poora **Rephrase…** (koi chayan nahin) aur har shabd-vikalp anurodh model ka phir se upyog karta hai aur upyog laagat mein jod sakta hai (ek सामान्य anuvaad run ke samaan).

<br/>

<a id="using-the-glossary"></a>
### Glossary ka upyog karna

Ek **glossary** ek vishisht bhasha jodi ke liye source/target shabd jodon ki ek list hai. Jab glossary chalu hoti hai, to Transrewrt milte-julte shabdon ko model mein bhejta hai taki aapki pasandida shabdaavali anuvaadon mein sthir rahe (jaise ki ek product ka naam, ek brand term, ya ek job title jise hamesha ek hi tarike se anuvaad kiya jana chahiye).

**Translate** page par iska upyog karne ke liye:

1. Input panel mein **Glossary** switch (auto-execute aur auto-copy switches ke bagal mein) chalu karein.
2. Apni **From** aur **To** bhashayein chunein aur samanya roop se anuvad karein. Us bhasha jodi ke liye save kiye gaye terms apne aap lagu ho jaate hain.
3. Naya joda turant capture karne ke liye, **Add to Glossary** par click karein (**From:** bhasha selector ke bagal mein). Dialog aapki vartaman bhashaon se pehle se bhara hota hai, isliye aapko sirf **source term** aur **target term** bharna hota hai.
4. Output footer mein **Glossary** link ka upyog karein (ya dialog ke andar **Manage glossary** link ka) [**Settings** > **Glossary**](#glossary-settings) par jaane aur apne sabhi terms ki review karne ke liye.

Aap [**Settings** > **Glossary**](#glossary-settings) tab mein terms add, edit, import aur export karte hain — neeche dekhein.

<br/>

> ℹ️ **NOTE**<br/>
> Glossary terms **bhasha jodi** ke anusaar milte hain, isliye English → French ke liye save kiya gaya term English → German ka anuvad karte samay lagu nahin hota hai. Glossary ka upyog **Detect Language** ke saath source ke roop mein nahin kiya ja sakta hai, kyunki terms milane ke liye ek vishisht source bhasha ki avashyakta hoti hai.

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Rewrite

Jab aap mukhya arth ko badle bina shabdon ko behtar banana chahte hain, to **Rewrite** ka upyog karein.

![Rewrite workspace](../images/screenshots/hi-Latn/rewrite.png)

Yah iske liye upyogi hai:

- vartani aur vyakaran theek karna (**Check Spelling & Grammar**)
- text ko aur spasht banana (**Improve Clarity**)
- ek hi run mein kai alag-alag punargathan (**Alternative versions**)
- text ko adhik aupcharik ya anaupcharik banana (**Make Formal** / **Make Informal**)
- text ko chhota ya vistaar karna (**Shorten** / **Expand**)
- text ko adhik takniki banana (**Make Technical**)

<br/>

> 💡 **TIP**<br/>
> Jab aap "**Check Spelling & Grammar**" mode ka upyog karte hain, to output panel mein ek **Show changes** switch dikhai deta hai (**Copy** ke bagal mein).
> Apne text par lagu kiye gaye vishisht sudharon ko dikhane ya chhupane ke liye ise chalu ya band karein.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Transform

Jab aap chahte hain ki AI nirdeshon ke ek custom set ka palan kare, to **Transform** ka upyog karein.

![Transform workspace](../images/screenshots/hi-Latn/transform.png)

Yah app ka sabse lachila kshetra hai. Aap iska upyog nimnlikhit karyon ke liye kar sakte hain:

- notes ka sankshep karna
- rough text ko ek polished email mein badalna
- mukhya binduon ko nikalna
- text ko ek vishisht format mein badalna
- input text ke saath koi anya custom activity

<br/>

<a id="run-an-existing-prompt"></a>
### Ek maujooda prompt chalayen

1. **Transform** kholein.
2. Prompt list se ek prompt chunein.
3. Yadi ek **From** bhasha box dikhai deta hai, to yadi aap chahte hain to ek bhasha chunein.
4. **Input** mein text type ya paste karein.
5. **Transform** par click karein.
6. **Output** mein parinaam padhein.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Yadi aapke paas abhi tak koi prompt nahin hai

Yadi aapki prompt list khali hai, to Transform workspace mein **Load sample prompts** par click karein. Yahi control hamesha [**Settings** > **Transform**](#transform-settings) mein export/import row par uplabdh hota hai. Dono built-in examples jodte hain taki aap jaldi shuru kar saken.

<br/>

> ℹ️ **NOTE**<br/>
> Sample prompts English mein pradan kiye jaate hain. Unhein load karne ke baad, aap ek prompt ko edit kar sakte hain aur use apni bhasha mein anuvad karne ke liye **Translate prompt** ka upyog kar sakte hain.

<br/>

<a id="create-a-prompt-quickly"></a>
### Ek prompt jaldi se banayein

Ek prompt banane ka sabse tez tareeka hai:

1. **Naya prompt** par click karein.
2. **Prompt generate karen** par click karein.
3. Batayein ki aap prompt se kya karwana chahte hain.
4. Ek preset (Aasaan) ya model (Unnat) chunein.
5. App ko aapke liye ek draft banane dein.
6. Draft ki review karein aur **Save karen** par click karein.

![Generate prompt](../images/screenshots/hi-Latn/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Ek prompt edit karein

Jab aap ek prompt banate ya edit karte hain, to editor baen taraf dikhta hai aur ek parikshan kshetra daen taraf dikhta hai.

![Transform prompt editor](../images/screenshots/hi-Latn/transform-prompt-edit.png)

Mukhya kshetr hain:

- **Prompt ka naam**: prompt suchi mein dikhaya gaya naam.
- **Prompt nirdesh (vaikalpik)**: prompt chalate samay user ko dikhaya gaya ek chhota hint.
- **Model ki bhumika**: AI ko di gayi samagra bhumika, jaise 'Aap ek madadgar sahayak hain.'
- **Model nirdesh (prati line ek)**: vishesh niyam jinhe aap AI ko palan karwana chahte hain.
- **Output vivaran (jaise parivartit, sankshepit, aadi)**: parinaam ka varnan karne wala ek chhota shabd.
- **Temperature (0.0 → 1.0)**: model kaise vyavahar karega; neeche dekhein.
- **Lakshya bhasha ke liye poochhein**: jab prompt chalaya jata hai to ek bhasha chayanakarta jodta hai.
Agar takniki shabd **Tapman** aapke liye naya hai, to ise is tarah sochein:

- Ek **kam** tapman sthir, adhik anumanit parinaam deta hai.
- Ek **adhik** tapman adhik vividhta aur rachnatmakta deta hai.

Aap iska bhi upyog kar sakte hain:

- `Generate prompt` ek saral vivaran se ek naya draft banane ke liye
- `Improve prompt` ek maujooda prompt ko behtar banane ke liye
- `Translate prompt` prompt kshetron ka anuvad karne ke liye

<br/>

> ⚠️ **CHETAVANI**<br/>
> `Save` par click karne se pahle `Back to Run` par click karein. Agar aap save kiye bina wapas jaate hain, to aapke badlav kho jayenge.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Upyog karne se pahle ek prompt ka parikshan karein

Daen taraf ka parikshan panel aapko apne prompt ko din-pratidin ke kaam mein upyog karne se pahle namuna text ke saath try karne deta hai.

Yah tab upyogi hota hai jab:

- aap ek naya prompt bana rahe hain
- aap prompt ke do sanskaranon ki tulna kar rahe hain
- aap tone, lambai, ya output format ki jaanch karna chahte hain

<br/>

> ℹ️ **NOTE**<br/>
> Aap [**Settings** > **Badlen**](#transform-settings) mein save kiye gaye prompts ko export aur import kar sakte hain.

Jab aap prompt editor mein **Prompt generate karen**, **Prompt behtar karein**, ya **Prompt ka anuvad karein** ka upyog karte hain, to **Aasaan** mode Translate aur Rewrite ke samaan preset selector pradan karta hai; **Unnat** mode model suchi ka upyog karta hai.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Dashboard

App ka kitna upyog kar rahe hain aur iski laagat kya hai (paid models ke liye) yeh dekhne ke liye **Dashboard** ka upyog karein.

![Dashboard summary](../images/screenshots/hi-Latn/dashboard-summary.png)

<br/>

> ℹ️ **NOTE**<br/>
> Yadi aap kewal **muft** models ka upyog karte hain, to **laagat** raashi shunya ho sakti hai aur laagat-kendrit KPIs khaali dikh sakte hain. **Saraansh** tab abhi bhi anuvaad, phir se likhen, aur badlen ke liye call counts dikhata hai jab aapke paas chuni hui avadhi mein activity ho.

<br/>

<a id="filter-the-data"></a>
### Data ko Filter karein

Samay seema badalne ke liye upar diye gaye filter buttons ka upyog karein.

![Dashboard filters](../images/screenshots/hi-Latn/dashboard-filter.png)

<br/>

> ℹ️ **NOTE**<br/>
> **User** filter kewal web sanskarana mein prashasakon ko dikhai deta hai. Saamanya upbhoktaon ko yeh filter nahi dikhega, aur yeh desktop app mein uplabdh nahi hai.

<br/>

<a id="dashboard-tabs"></a>
### Dashboard tabs

- **Saraansh** KPI cards dikhata hai: kul laagat, upyog kiye gaye model, prati-mode call counts aur laagat (kul calls ke hisse ke saath), prati call ausat laagat, ausat TPS, aur call count ke anusaar sheersh teen model.
- **Model ke anusaar** har model ko kul calls, kul laagat, aur ausat TPS ke saath soochibaddh karta hai; anuvaad, phir se likhen, aur badlen ke anusaar vishleshan ke liye ek row ka vistaar karein.
- **Sabhi Calls** poora call log dikhata hai (chaude layouts par paginated, sankirn screens par cards) aur aapko ise export karne deta hai.

<br/>

<a id="export-data"></a>
### Data Export karein

Dashboard tables data ko ismein export kar sakte hain:

- **JSON**
- **CSV**
- **XLSX**

Yeh upyogi hai agar aap app ke bahar gatividhi ko samiksha karna chahte hain ya ek report saajha karna chahte hain.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Ek model ke liye store kiye gaye records delete karein

**Model ke anusaar** ya **Sabhi Calls** mein, aap "trash bin" icon par click karke ek model ke liye store kiye gaye records ko hatayein sakte hain.

> ⚠️ **WARNING**<br/>
> Store kiye gaye records ko delete karna undo nahi kiya ja sakta. Iska upyog tabhi karein jab aap nishchit hon ki aapko us itihaas ki ab aur aavashyakta nahi hai.

Sabhi data delete karne ya unki umra ke aadhar par records hatayein ke liye, [**Settings** > **Laagat Tracking**](#cost-tracking) par jaayen. Wahan aapko sabhi store kiye gaye data ko delete karne ya kewal ek nishchit tareekh se purane data ko delete karne ke vikalp milenge.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Itihaas

**Itihaas** par click karein taaki **Transrewrt** ke andar aapki karyavahiyan ka itihaas dekh saken, jismein har operation ka input aur output shaamil hai.

![History page](../images/screenshots/hi-Latn/history.png)

<br/>

<a id="filter-the-history"></a>
### Itihaas ko filter karein

**Itihaas** **Dashboard** page ke samaan samay-seem filters ka upyog karta hai.

![Dashboard filters](../images/screenshots/hi-Latn/dashboard-filter.png)

<br/>

> ℹ️ **NOTE**<br/>
> **web app** mein, har koi (prashasakon sahit) kewal apni execution history dekhta hai. **Dashboard** par **User** filter admins ke liye accounts mein upyog aur laagat ki sameeksha karne ke liye hai; yeh **Itihaas** par laagu nahi hota.

<br/>

<a id="export-history-data"></a>
### Itihaas data ko export karein

Itihaas page par filtered data ko export kar sakte hain:

- **JSON**
- **CSV**
- **XLSX**

Yeh upyogi hai agar aap app ke bahar gatividhi ko samiksha karna chahte hain ya ek report saajha karna chahte hain.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Settings

Sidebar se **Settings** kholein aur app ke vyavahar ko anukoolit karein.

Uplabdh tabs platform aur aapki bhumika par nirbhar karte hain:

| Tab              | Desktop | Web (admin) | Web (regular user) | Notes                                        |
  |------------------|:-------:|:-----------:|:------------------:|----------------------------------------------|
  | Samanya Settings |   yes   |     yes     |        yes         | **AI anubhav** (Aasaan / Unnat) shaamil hai |
  | Models           |   yes   |     yes     |        yes         | Sirf jab **AI anubhav** **Unnat** hai |
  | Bhashayein        |   yes   |     yes     |        yes         |                                              |
  | Laagat Tracking    |   yes   |     yes     |         -          |                                              |
  | Badlen        |   yes   |     yes     |        yes         | Transform prompts ka bulk import/export      |
  | Shabdakosh         |   yes   |     yes     |        yes         | Anuwad ke dauran laagu kiye gaye shabd yugma |
  | Upbhokta            |    -    |     yes     |         -          |                                              |
  | API Config       |   yes   |     yes     |         -          |                                              |
  | Baare mein            |   yes   |     yes     |        yes         |                                              |

**Aasaan** mode mein, model chayan toolbar mein presets ke madhyam se hota hai aur **Provider** Samanya Settings mein; **Models** tab chhupa hota hai.

<br/>

> ℹ️ **NOTE**<br/>
> Web version mein, pratyek user ke paas apna configuration hota hai. AI anubhav, provider, chune gaye models ya presets, bhashayein, samanya vikalp, aur transform prompts pratyek user ke liye sanrakshit hote hain. Aapke dwara kiye gaye badlav anya upbhoktaon ko prabhavit nahin karte hain.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Samanya settings

**Samanya Settings** ka upyog karein typing vyavahar, execution details ko **Itihaas** ke liye sanrakshit karein, dikhava, aur AI ka chayan karein Anuvaad karein, Phir se likhen, aur Badlen ke liye.

**AI anubhav**

- **Aasaan** (default): ek **Provider** chunein (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, ya Ollama). Cloud providers toolbar mein built-in presets ka upyog karte hain. **Ollama** presets ke bajaye aapki machine par install kiye gaye models ko list karta hai. Aasaan mode mein, **Presets catalog** catalog version aur antim update samay dikhata hai; project repository se latest preset list prapt karne ke liye **Refresh presets catalog** par click karein (app background mein bhi samay-samay par check karta hai).
- **Unnat**: toolbar mein alag-alag models chunein; [**Settings** > **Models**](#models) ke antargat list ko manage karein.

**Dikhava**

- **Theme** halka, gehra, aur system dikhava ke beech switch karta hai.
- **Show cost information on the actions** prati operation ki laagat (agar uplabdh ho) aur Translate, Rewrite, aur Transform output panels par kul laagat ke display ko control karta hai.
- **Cost fraction digits** badalta hai ki laagat dashamlav kaise dikhaye jaate hain.
- **Web only:** **app ke charon or ek margin dikhayein** interface ke charon or atirikt jagah jodta hai.
- **Font Family** text panels mein likhne wale font ko badalta hai.
- **Size** font size ko badalta hai.

**Vyavahar**

- **Vyavahar iske liye ENTER** chunta hai ki kya `Enter` task chalata hai ya ek nayi line dalta hai.
- **Paste karne par swatah-execute karein** jaise hi aap text paste karte hain, anuvad shuru kar deta hai.
- **Result ko clipboard par swatah-copy karein** safal results ko swatah copy karta hai.
- **Real-time translation while typing** (⚠️ Isse upyog laagat badh sakti hai) type karte samay anuvad karta hai.
- **Timeout (ms)** real-time translation ke liye intezaar ka samay set karta hai.

**Itihaas**

- **Keep execution history** control karta hai ki kya har translate, rewrite, aur transform sidebar [**History**](#history) view ke liye **input aur output text** store karta hai. Ise band karne par pushti mangi jaati hai; agar aap pushti karte hain, to store kiya gaya history text database se hata diya jaata hai. Agar label *administrator dwara disable kiya gaya* dikhata hai, to aapke install mein environment mein `HISTORY_DISABLED` set hai (dekhein [README](README.hi-Latn.md#configuration-and-environment)); aap UI se history ko wapas chalu nahi kar sakte hain.
- **Delete history data** aapko umra ke hisab se store kiye gaye text ko hatane deta hai (udharan ke liye kuch mahino se purana, ya **sabhi data (saaf karein)**) **Delete data** ka upyog karke. Yah kewal **History** view ke liye save kiye gaye execution text ko prabhavit karta hai; yah laagat ya upyog totals ko delete **nahi** karta hai. **Laagat** data ko hatane ya trim karne ke liye, [**Settings** > **Cost Tracking**](#cost-tracking) ka upyog karein.

**Configuration Backup** (desktop app aur web administrators ke liye hi)
- **Backup mein upyog data shamil karein** - jab enable kiya jaata hai, to ZIP mein execution history aur API call data bhi shamil hota hai.
- **Configuration backup karein** - ek single ZIP banata hai (local time mein `transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip`) jismein `config.json`, `state.json`, optional encryption key, users, preferences, custom prompts, aur upyog data shamil hota hai agar aapne chuna ho. Ek safal backup ke baad, pushti save kiye gaye file naam ko dikhati hai.
- **Backup se restore karein** - pehle ek **confirmation dialog** kholta hai. Dialog ke andar backup ZIP chunein (**Browse** / file picker ya drag-and-drop jahan samarthit ho), phir options ki samiksha karein:
  - **Usage data restore karein** - ZIP se usage/history import karein jab use usage ke saath backup kiya gaya tha; agar aap kewal settings aur prompts chahte hain to ise band rakhein.
  - **Restore karne se pehle purana usage data clear karein** - backup lagu karne se pehle is install par maujood usage/history ko hatayein (optional; jab aap ek saaf replace chahte hain to upyog karein).
Web ya desktop version mein banaye gaye backups ko dusre mein restore kiya ja sakta hai. Web version mein desktop backup restore karte samay, data administrator user ko restore kiya jayega.

<br/>

<a id="models"></a>
### Models

Yah tab kewal tab uplabdh hota hai jab [**General Settings**](#general-settings) mein **AI anubhav** **Unnat** par set ho. Toolbar mein kaun se models dikhenge, yeh chunne ke liye **Settings** > **Models** ka upyog karein.

![Settings Models tab](../images/screenshots/hi-Latn/settings-general.png)

Page mein do lists hain:

- Bayein taraf **Uplabdh Models**
- Dahine taraf **Chune gaye Models**

Upayogi controls mein shamil hain:

- Naam se ek model khojne ke liye **Models khojein...**
- List ko ek engine tak simit karne ke liye **Provider** chips (OpenRouter, OpenAI, Ollama, …)
- Kewal muft models dikhane ke liye **Sirf Free**
- List ko reload karne ke liye **Refresh karein**
- **Sabhi ko Expand karein** aur **Sabhi ko Collapse karein** jab aap provider ke hisaab se sort kar rahe hon

Model IDs mein provider prefix shaamil hota hai (udaaharan ke liye `openrouter/…` vs `openai/…`). **OpenAI (OpenRouter)** vs **OpenAI (direct)** jaise badge dikhaate hain ki traffic kaise route kiya jaata hai.

> ℹ️ **NOTE**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) ek router model hai, na ki ek saamaanya chat model: iska reply JSON hota hai jo OpenRouter API request bodies ka varnan karta hai (udaaharan ke liye `requests` aur `model` ke saath ek `messages` array). Yadi aap iska upyog **Anuvaad karein**, **Phir se likhen**, ya **Badlen** ke liye karte hain, to output panel mein taiyaar text ke bajaay vah JSON dikhega. Un kaaryon ke liye ek saamaanya text model chunein. OpenRouter par [Body Builder model page](https://openrouter.ai/openrouter/bodybuilder) dekhein.

Karyavahiyan:

- Ek model jodne ke liye, **Jodein** par ya entry mein kahin bhi click karein.

- Ek model hatane ke liye, **Chune gaye Models** mein ya Available Models mein entry par **Chuna gaya** ke bagal mein **X** par click karein.

- Soochi saaf karne ke liye, **Sabhi ko hatayein** par click karein. Aavashyak muft model soochi mein bana rahega.

<br/>

> ℹ️ **NOTE**<br/>
> Yadi aap turant OpenRouter mein credit jodna nahin chahte hain, to **Sirf Free** ko enable karke aur muft models chun kar shuru karein (credit card ki aavashyakta nahin). Aap bina kisi API kunji ke models ko sthaaneeya roop se chalaane ke liye Ollama ka bhi upyog kar sakte hain.

<br/>

<a id="languages"></a>
### Bhashayein

App mein upyog ki jaane wali bhasha soochiyon ko vyavasthit karne ke liye **Settings** > **Bhashayein** ka upyog karein.

- **Top languages** ko **Anuvaad karein** aur **Badlen** mein bhasha soochiyon ke sheersh ke paas pin kiya gaya hai.
- **Custom Bhasha** aapko ek aisi bhasha jodne ki anumati deti hai jo built-in soochi mein nahin hai.

Yadi aap ek custom bhasha jodte hain, to yah built-in vikalpon ke saath bhasha chunne walon mein dikhai deti hai.

<br/>

<a id="cost-tracking"></a>
### Laagat Tracking

Laagat jaankari prabandhit karne ke liye **Settings** > **Laagat Tracking** ka upyog karein.

- **Kul lagat** chal rahi kul raashi dikhaata hai.
- **Moolya Copy Karein** kul raashi ko clipboard par copy karta hai.
- **Laagat reset karein** store kiye gaye kul ko shunya par reset karta hai.
- **API kunji upyog ke saath sync karein** kul ko aapke OpenRouter account (sirf OpenRouter) dwara report kiye gaye upyog se milaan karne ke liye set karta hai.
- **API Kunji Upyog** OpenRouter upyog vivaran dikhaata hai, yadi uplabdh ho.
- **Laagat data delete karein** sabhi data ko, ya sirf ek chuni hui tithi se purani entries ko hata deta hai.

**Laagat tracking:** Jab aap OpenRouter models ka upyog karte hain, to app OpenRouter se laagat jaankari ke aadhaar par aapka vaastavik upyog aur kharch dikhaata hai. Anya sabhi providers ke liye, app OpenRouter dwara prakashit keematon ka upyog karke laagat ka anumaan lagaata hai, yadi koi keemat uplabdh nahin hai, to anumaan shunya ho sakta hai.

<br/>

> ℹ️ **NOTE**<br/>
> **Sabhi laagat ke aankade keval aapke sandarbh ke liye anumaan hain, na ki aadhikaarik billing statement.**

<br/>

> ⚠️ **WARNING**<br/>
> Data deletion ko undo nahin kiya ja sakta hai. Delete karne se pehle, apne data ka backup lena ya use [**Itihaas**](#history)
> ya [**Dashboard** > **Sabhi Calls**](#dashboard-tabs) ke maadhyam se export karna sunishchit karein, anyatha vah hamesha ke liye kho jaayega.
> Har API call entry se sambandhit sabhi input/output itihaas bhi delete kar diya jaayega.

<br/>

<a id="transform-settings"></a>
### Badlen (settings tab)

Prompts ko bulk mein manage karne ke liye **Settings** > **Transform** ka upyog karein.

Aap kar sakte hain:

- apne save kiye gaye prompts ki review karein
- prompts delete karein
- ek file se prompts import karein
- backup ya sharing ke liye prompts export karein
- prompt list mein sample prompts load karein

<br/>

<a id="glossary-settings"></a>
### Shabdakosh (settings tab)

Translation ke dauran apply kiye gaye term pairs ko manage karne ke liye **Settings** > **Glossary** ka upyog karein ([Using the glossary](#using-the-glossary) dekhein). Har term mein ek **source language**, **target language**, **source term**, aur **target term** hota hai.

Aap kar sakte hain:

- **Ek term jodein** — table ke bottom mein row bharein (bhashayein chunein, source aur target terms type karein) aur **+** button par click karein.
- **Terms dhundhein** — list ko **Source language**, **Target language**, ya free **text** se filter karein; reset karne ke liye **Clear filters** par click karein.
- **Ek term delete karein** — uski row par trash-bin icon par click karein.
- **Import karein** — `.csv`, `.xlsx`, ya `.xls` file se terms load karein. File mein `source_language`, `target_language`, `source_text`, aur `target_text` columns hone chahiye.
- **CSV Export karein** / **XLSX Export karein** — backup ya sharing ke liye apne sabhi terms download karein.
- **Template CSV** / **Template XLSX** — sahi column headers ke saath ek empty file download karein jise bharkar import kiya ja sake.

<br/>

> ℹ️ **NOTE**<br/>
> **Desktop app** mein, glossary locally store hoti hai. **Web version** mein, har user ki apni glossary hoti hai, isliye aapke terms doosre users ko prabhavit nahi karte.

<br/>

<a id="users"></a>
### Upbhokta

Web version mein user accounts manage karne ke liye **Users** ka upyog karein. Aap users jodein, unke details update karein, passwords reset karein, aur accounts delete karein.

<br/>

<a id="api-config"></a>
### API config

Samarthit providers hain: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **Ollama** (base URL ke dwara local models), aur ek optional **custom OpenAI-compatible provider** (naam, URL, aur API key — kewal Advanced mode mein). Aapko kewal un providers ko configure karne ki zaroorat hai jinhe aap istemal karte hain.

**Web application: keval administrator**

API keys system ya Docker environment variables ke madhyam se configure kiye jaate hain - ve web UI mein enter nahi kiye jaate. Custom provider ke liye, `CUSTOM_PROVIDER_NAME`, `CUSTOM_PROVIDER_URL`, aur `CUSTOM_PROVIDER_API_KEY` set karein (teeno anivarya hain). Yeh page dikhata hai ki kin providers ke paas key configure ki gayi hai aur aapko `Test` button par click karke har ek ka parikshan karne deta hai.

<br/>

> ℹ️ **NOTE**<br/>
> API key badalne ke liye, apne system ya Docker configuration mein environment variable update karein aur server ya container ko restart karein.

<br/>

> ℹ️ **NOTE**<br/>
> **Configuration backups** ([**General settings** → Configuration Backup](#general-settings) dekhein) ZIP ke `config.json` ke andar **resolved** provider keys embed kar sakte hain. Us ZIP ko restore karne se ve keys server ki persisted config file mein wapas copy **nahi** hoti hain - live keys abhi bhi environment aur maujooda file state se aati hain jaisa ki wahan varnit hai.

<br/>

**Desktop application**

Aap jo providers istemal karte hain unke liye API keys store karne hetu **API Config** ka istemal karein. Ollama ke liye, API key ke bajaye **base URL** enter karein. Custom OpenAI-compatible provider (built-in list mein nahi hone wala koi bhi endpoint, jaise ki self-hosted server ya gateway) ke liye, **provider naam**, **base URL** (jaise `https://my-llm.example.com/v1`), aur **API key** enter karein; teeno anivarya hain. URL aur naam inline edit kiye jaate hain; API key ko badalne ke liye **Edit** ka istemal karein. Custom provider models kewal **Advanced** mode mein dikhai dete hain (Settings → Models).

<br/>

> 💡 **Tip** <br/>
> Agar aap API key ka upyog nahi karna chahte hain ya upyog ke liye bhugtan nahi karna chahte hain, to aap [Ollama download](https://ollama.com) kar sakte hain aur models (jaise `translategemma:4b`) ko apni machine par sthaniya roop se muft mein chala sakte hain. Vikalp ke roop mein, aap apne muft models ka upyog karne ke liye ek muft OpenRouter account (credit card ki avashyakta nahi) bana sakte hain, ya Cerebras, Google, Groq, Mistral AI, ya [NVIDIA](https://build.nvidia.com/) se ek muft API key prapt kar sakte hain.

<br/>

- Kewal un providers ko jodein jinaki aapko zaroorat hai. **Settings** > **Models** mein, har model ID provider se shuru hoti hai (udaharan ke liye `openrouter/openrouter/free`, `openai/gpt-4o`, `nvidia/nvidia/nemotron-nano-3-30b-a3b`, `ollama/llama3`, `MyProvider/…` ek custom endpoint `MyProvider` ke liye).

Ek API key jodne ke liye, text field mein value darj karein aur `Save` par click karein. Ek maujooda key ko badalne ke liye, `Edit` par click karein. Yeh satyapit karne ke liye ki ek key kaam kar rahi hai, `Test` par click karein. Ollama base URL ke liye, connection ki jaanch karne ke liye hamesha `Test` par click karein.

<br/>

> ℹ️ **NOTE**<br/>
> Aap API key ka vartaman maan nahi dekh sakte hain. Aap ise sirf `Edit` button ka upyog karke badal sakte hain.
> API keys configuration mein encrypted store ki jaati hain.

<br/>

<a id="about"></a>
### Baare mein

**Baare mein** tab dikhata hai:

- app ka naam aur tagline
- sanskarana sankhya aur nirmaan tithi
- license aur copyright jaankari, **Teesre-paksh ki suchnayein** kholne ke liye ek link ke saath
- project repository ka ek link

<br/><br/>

<a id="common-issues"></a>
## Aam samasyaein

Agar kuch ummeed ke mutabik kaam nahi karta hai, to pehle nimnalikhit binduon ki jaanch karein.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### App text ka anuvaad, phir se likhna, ya badalna nahi karegi

Jaanch karein ki:

- aapne toolbar mein ek **preset** (Easy) ya **model** (Advanced) chuna hai
- **Easy** mode mein, [**Settings** > **General Settings**](#general-settings) mein ek kaam karne wali key (ya Ollama URL) ke saath ek **Provider** hai aur us provider ke liye kam se kam ek preset hai
- **Advanced** mode mein, [**Settings** > **Models**](#models) mein kam se kam ek model soochi mein hai
- aapka API setup kaam kar raha hai

Agar aap desktop app ka upyog kar rahe hain:

1. [**Settings** > **API Config**](#api-config) kholein.
2. Jaanch karein ki kam se kam ek API key save ki gayi hai.
3. Key ke kaam karne ki pushti karne ke liye provider ke bagal mein **Test** par click karein.

<br/>

<a id="the-model-list-is-empty"></a>
### Model soochi khaali hai

**Easy** mode mein, [**Settings** > **General Settings**](#general-settings) kholein, pushti karein ki **Provider** set hai, aur [**API Config**](#api-config) (desktop) mein keys jodein ya test karein ya apne administrator (web) se poochhein. **Ollama** ke liye, base URL par **Test** chalaein aur sunishchit karein ki models sthaniya roop se install hain.

**Advanced** mode mein, [**Settings** > **Models**](#models) kholein aur **Refresh** par click karein. Agar zaroorat ho, to ek model khojein, **Sirf Free** chalu karein, aur **Chune gaye Models** mein models jodein.

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Parinaam bahut dheema ya bahut mahanga hai

Inmein se ek ya ek se adhik prayas karein:

- ek alag preset (Easy) ya model (Advanced) chunen
- ek chhota input upyog karein
- [**Settings** > **General Settings**](#general-settings) mein **Real-time translation while typing** band karein
- saral kaaryon ke liye muft models ka upyog karein ([Models](#models) dekhein)
<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Interface galat bhasha mein hai

[Toolbar](#toolbar) mein globe icon par click karein aur apni pasandeeda **Interface bhasha** chunein.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Text bahut chhota ya padhne mein mushkil hai

Open [**Settings** > **Samanya Settings**](#general-settings) and change:

- **Font Family**
- **Size**

<br/>

<a id="dashboard-summary-looks-empty"></a>
### Dashboard Saraansh khaali dikhta hai

Yeh saamaanya hai agar:

- aap kewal **muft models** ka upyog karte hain aur aap **laagat** ke aankde dekh rahe hain (ve shunya ho sakte hain); **Saraansh** par call-count KPIs ko abhi bhi chune hue samay ki avadhi se data ki zaroorat hai
- chuna gaya **samay filter** us avadhi ko cover nahin karta hai jab calls kiye gaye the — jaanchne ke liye **Sabhi** try karein

Yadi **Sabhi** chunane ke baad bhi KPIs shunya hain, to pushti karein ki calls [**Itihaas**](#history) mein ya **Sabhi Calls** tab mein dikhai dete hain.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Laagat "uplabdh nahin" dikhati hai ya galat lagti hai

Jab aap **OpenRouter** ke madhyam se models ka upyog karte hain, to app OpenRouter dwara report kiye gaye aapke vaastavik kharch ko dikhata hai.

**Any providers** (OpenAI direct, Anthropic direct, aadi) ke liye, laagat OpenRouter dwara prakashit pricing data se anumanit ki jaati hai. Agar kisi model ke liye koi mel khaane waali keemat nahin milti hai, to laagat **uplabdh nahin** ke roop mein dikhai degi aur aapke kul yog mein nahin jodi jaayegi.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Kul laagat mere provider bill se mel nahin khati hai

App mein sabhi laagat ke aankde **kewal sandarbh ke liye anumanit hain**, na ki adhikarik billing statements.

Apne kul ko apne vaastavik OpenRouter kharch ke kareeb laane ke liye, [**Settings** > **Laagat Tracking**](#cost-tracking) kholein aur **API kunji upyog ke saath sync karein** par click karein.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### History page sidebar se gayab hai

**Keep execution history** band kiya ja sakta hai. [**Settings** > **General Settings**](#general-settings) kholein aur ise enable karein jab tak ki history *administrator dwara disable kiya gaya* na ho (environment mein `HISTORY_DISABLED` — [README](README.hi-Latn.md#configuration-and-environment) dekhein). History ko chalu karne se pehle se delete kiya gaya text restore nahi hota hai.

<br/>

<a id="web-app-session-expired"></a>
### Web app: anapekshit roop se login page par redirect kiya gaya

Aapka session time out ho gaya hoga. Phir se login karein. Agar yeh baar-baar hota hai, to session lifetime settings ke liye server configuration jaanchein.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Web admin: password bhool gaye ya kho gaya

Yeh **self-hosted web app** (Docker) par lagu hota hai, desktop (Electron) app par nahi.

- Agar koi dusra Admin abhi bhi sign in kar sakta hai, toh woh [**Settings** > **Users**](#users) khol sakte hain, account chun sakte hain, aur wahan ek **naya password** set kar sakte hain.
- Agar aap **locked out** hain lekin machine ya container tak **shell access** hai, toh image ke saath aane wale helper se password reset karein (agar aap default naam badalte hain toh `transrewrt` ko badal dein, aur agar password mein spaces ya special characters hain toh use quote karein):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Default Admin username `admin` hai agar aapne kabhi doosre accounts nahi banaye hain. Jab aap kewal ek argument pass karte hain, toh use `admin` ke liye naya password mana jata hai.

Agar aap Docker ke bajaye **source checkout** se run karte hain, toh iska upyog karein:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Script SQLite database mein user record ko update karta hai (aur agar `admin` user missing hai toh use bana sakta hai). Reset karne ke baad, naye password ke saath sign in karein.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Dashboard doosre users ke liye koi data nahi dikhata (web)

Kewal **administrators** hi **User** filter ke madhyam se sabhi users ka data dekh sakte hain. Regular users design ke anusaar kewal apni activity dekhte hain.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Maine ek prompt badla aur edits kho diye

Ek prompt ko edit karte samay, **Back to Run** par click karne se pehle hamesha **Save karen** par click karein.

<br/><br/>

<a id="quick-tips"></a>
## Quick tips

- [**Translate**](#translate) se shuru karein yeh sunishchit karne ke liye ki aapka setup kaam karta hai, isse pehle ki aap [**Rewrite**](#rewrite) ya [**Transform**](#transform) par jaayen.
- Rozmarra ke shabdon mein sudhar ke liye [**Rewrite**](#rewrite) ka upyog karein.
- Jab aapko kisi vishesh task ke liye dohrane yogya workflow ki zaroorat ho toh [**Transform**](#transform) ka upyog karein.
- Agar aap upyog aur laagat par nazar rakhna chahte hain toh [**Dashboard**](#dashboard) ka upyog karein.
- Pichle operations aur unke poore input/output text ki review ke liye [**History**](#history) ka upyog karein.
- Agar aap ek prompt library bana rahe hain jise aap surakshit rakhna chahte hain (dekhen [Transform](#transform)) ya agar aap ise doosron ke saath share karna chahte hain toh prompts ko niyamit roop se Export karein.
- **Easy** mode par bane rahen jab tak aapko model IDs par fine-grained control ki zaroorat na ho; **Advanced** par tab switch karein jab aap pehle se hi jante hon ki aap kaun se models chahte hain.

<br/><br/>

<a id="disclaimer"></a>
## Disclaimer

Utpaad ke naam aur icon unke sambandhit malikon ke hain aur keval pehchan ke uddeshya se upyog kiye jaate hain. Yeh software kisi bhi ullekhit brand se sambandhit ya samarthit nahi hai.

<br/><br/>

<a id="license"></a>
## License

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
