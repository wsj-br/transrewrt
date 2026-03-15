---
translated_at: "2026-03-15T22:33:41.016Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Transrewrt వాడుక లేఖన వివరణ

<br />

<a id="introduction"></a>
## పరిచయం

Transrewrt మీకు పాఠ్యాలతో మూడు ప్రధాన మార్గాలలో పనిచేయడానికి సహాయపడుతుంది:

- ** అనువదించు ** - ఒక భాష నుండి మరో భాషకు పాఠ్యాన్ని పరివర్తి చేయి.
- ** రీ-రైట్ చేయి ** - పాఠ్యాన్ని వేరే శైలిలో, అTelugunanంగా స్పష్టంగా, చిన్నగా లేదా మరింత అధికారికంగా రీఫ్రేజ్ చేయి.
- ** పరివర్తన ** - ప్రõంట్లుగా అనిపిస్తున్న AI సూచనలను ఉపయోగించి పాఠ్యాన్ని ప్రాసెస్ చేయి.

<br />

ఈ లేఖన వివరణ మీరు అప్లికేషన్‌ను ఇన్‌స్టాల్ చేసి పరిచయం ఇచ్చిన తర్వాత దాని ఉపయోగం వివరిస్తుంది. ఇన్‌స్టాల్ ఎటప్‌ల గురించి, ప్రధాన [README](../README.md) చూడండి.

<br />

> ℹ️ ** గమనిక **<br/>
> Transrewrt Windows మరియు Linux కుడా డెస్క్‌టాప్ యాప్‌గా, మరియు స్వయంచాలకంగా హోస్ట్ చేసిన వెబ్ యాప్‌గా లభ్యం. ఈ లేఖన వివరణ యాప్‌ యొక్క రోజువారీ వాడుకపై దృష్టి సారిస్తుంది. ఏదైనా విషయం ఒక వెర్షన్‌కు మాత్రమే వర్తింతో అయితే, అది స్పష్టంగా చిహ్నించబడింది.

<small>** ఇతర భాషల్లో చదవండి: ** [ఇంగ్లీష్ (యుకే)](../USER-GUIDE.md) · [పోర్చుగీస్ (బి‌ఆర్)](USER-GUIDE.pt-BR.md) · [అరబిక్](USER-GUIDE.ar.md) · [బাংলా](USER-GUIDE.bn.md) · [కాతలాన్](USER-GUIDE.ca.md) · [స Adapter లి చైనీస్](USER-GUIDE.zh-CN.md) · [పరంపర గతాన్ని చైనీస్](USER-GUIDE.zh-TW.md) · [కొరేషియన్](USER-GUIDE.hr.md) · [చెక్](USER-GUIDE.cs.md) · [డచ్](USER-GUIDE.nl.md) · [ఇంగ్లీష్ (ఎస్)](translated-docs/USER-gEL-Script.md) · [ఫిలిప్పీనో](USER-GUIDE.tl.md) · [ఫ్రెంచ్](USER-GUIDE.fr.md) · [జర్మన్](USER-GUIDE.de.md) · [గ్రీక్](USER-GUIDE.el.md) · [హిందీ](USER-GUIDE.hi.md) · [హంగేరియన్](USER-GUIDE.hu.md) · [ఇటాలియన్](USER-GUIDE.it.md) · [జపానీస్](USER-GUIDE.ja.md) · [బాసా జావా](USER-GUIDE.jv.md) · [కోరియన్](USER-GUIDE.ko.md) · [బహాసా మలేయు](USER-GUIDE.ms.md) · [ఫార్సీ](USER-GUIDE.fa.md) · [పోలిష్](USER-GUIDE.pl.md) · [పోర్చుగీస్ (పి‌ిటీ)](USER-GUIDE.pt.md) · [పంజాబీ](USER-GUIDE.pa.md) · [రోమానియన్](USER-GUIDE.ro.md) · [రష్యన్](USER-GUIDE.ru.md) · [స్లోవాక్](USER-GUIDE.sk.md) · [స్పానిష్](USER-GUIDE.es.md) · [కిస్వాహిలీ](USER-GUIDE.sw.md) · [స్వెడిష్](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [థాయ్](USER-GUIDE.th.md) · [టర్కిష్](USER-GUIDE.tr.md) · [యుక్రేనియన్](USER-GUIDE.uk.md) · [వియత్నామీస్](USER-GUIDE.vi.md) </small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents** 

- [Before you start](#before-you-start)
  - [How to get an API key (desktop app)](#how-to-get-an-api-key-desktop-app)
- [Getting started](#getting-started)
- [Main parts of the window](#main-parts-of-the-window)
  - [Sidebar](#sidebar)
  - [Toolbar](#toolbar)
  - [Input and output panels](#input-and-output-panels)
- [Translate](#translate)
  - [Translate text](#translate-text)
  - [Language selection](#language-selection)
  - [Helpful translation settings](#helpful-translation-settings)
  - [Keyboard shortcuts](#keyboard-shortcuts)
- [Rewrite](#rewrite)
  - [Rewrite text](#rewrite-text)
- [Transform](#transform)
  - [Run an existing prompt](#run-an-existing-prompt)
  - [If you have no prompts yet](#if-you-have-no-prompts-yet)
  - [Create a prompt quickly](#create-a-prompt-quickly)
  - [Edit a prompt](#edit-a-prompt)
  - [Test a prompt before using it](#test-a-prompt-before-using-it)
  - [Manage saved prompts](#manage-saved-prompts)
- [Dashboard](#dashboard)
  - [Filter the data](#filter-the-data)
  - [Dashboard tabs](#dashboard-tabs)
  - [Export data](#export-data)
  - [Delete stored records for a model](#delete-stored-records-for-a-model)
- [Settings](#settings)
  - [General settings](#general-settings)
  - [Models](#models)
  - [Languages](#languages)
  - [Cost tracking](#cost-tracking)
  - [Transform prompts](#transform-prompts)
  - [Users](#users)
  - [API config](#api-config)
  - [About](#about)
- [Common issues](#common-issues)
  - [The app will not translate, rewrite, or transform text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [The model list is empty](#the-model-list-is-empty)
  - [The result is too slow or too expensive](#the-result-is-too-slow-or-too-expensive)
  - [The interface is in the wrong language](#the-interface-is-in-the-wrong-language)
  - [The text is too small or hard to read](#the-text-is-too-small-or-hard-to-read)
  - [I changed a prompt and lost the edits](#i-changed-a-prompt-and-lost-the-edits)
- [Quick tips](#quick-tips)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="before-you-start"></a>

## మీరు ప్రారంభం చేసుకోనుటకumpedు

Transrewrt వాడడానికి, మీరు OpenRouter ద్వారా AI సేవకు యాక్సెస్ పొందాలి.

మీరు ప్రారంభం చేసేటప్పుడు ఒక ప్రయోజనకరమైన మోడల్‌ను ఎంచుకోవాల్సిన అవసరం లేదు. యాప్‌లో ఎల్లప్పుడూ బిల్ట్-ఇన్ **ఉచిత** మోడల్ ఉంటుంది, కాబట్టి సాధారణ వినియోగానికి అది మాత్రమే అందరికి తరచుగా పరిగణించాల్సి వస్తుంది.

సరళంగా చెప్పాలంటే:

- ఒక **మోడల్** అనగా పని చేసే AI ఎంజిన్.
- ఒక **API కీ** అనగా ఆ సేవకు మీ వ్యక్తిగత యాక్సెస్ ప్రమాణపత్రం.

మీరు **డెస్క్‌టాప్ యాప్** వాడిస్తే, మీకు ఒక API కీ అవసరం. వివరణాత్మక స్టెప్స్ కోసం, దిగువ ఉన్న [API కీ పొందడం ఎలా](#how-to-get-an-api-key-desktop-app) చూడండి. సారాంశం: [OpenRouter](https://openrouter.ai) లో ఒక అకౌంట్ సృష్టించండి లేదా లాగిన్ అయిన, [Keys](https://openrouter.ai/keys) పేజీని తెరిచి, కొత్త కీని సృష్టించి, అది Transrewrt లో [**Settings** > **API Config**](#api-config) లో పేస్ట్ చేయండి.

మీరు **వెబ్ వెర్షన్** వాడిస్తే, సర్వర్ మాలిక సాధారణంగా దాన్ని మీకు సెట్‑అప్ చేస్తాడు, కాబట్టి మీరు సాధారణంగా మీరే API కీని ఎంటర్ చేయాలnecessity ఉండదు.

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### API కీ పొందడం (డెస్క్‌టాప్ యాప్)

మీరు డెస్క్‌టాప్ యాప్ వాడిస్తే, ఈ స్టెప్స్‌ను అనుసరించండి:

1. మీ వెబ్ బ్రౌజర్‌లో [OpenRouter](https://openrouter.ai)కి వెళ్లండి.
2. ఒక అకౌంట్ సృష్టించండి లేదా లాగిన్ అయinan.
3. [Keys](https://openrouter.ai/keys) పేజీని తెరిచండి.
4. కొత్త API కీ సృష్టించడానికి బటన్‌ని క్లిక్ చేయండి.
5. కీకు ఒక పేరు ఇవ్వండి తద్వారా దాన్ని తరువాత గుర్తించవచ్చు.
6. కొత్త API కీని కాపీ చేయండి.
7. Transrewrt కు తిరిగి వెళ్లి **Settings** > **API Config**ని తెరిచండి.
8. **OpenRouter API Key**లో కీని పేస్ట్ చేయండి.
9. దాని పని చేస్తుందని నిర్ధారించడానికి **Test API Configuration**ని క్లిక్ చేయండి.

> ℹ️ **NOTE**<br/>
> మీరు OpenRouter యొక్క ఉచిత రౌట్‌తో లేదా ఇతర ఉచిత మోడల్స్‌తో మొదలవచ్చు. అనేక సందర్భాలలో, ఇది ప్రయోజనకరమైన మోడల్‌ను ఎంచుకోకుండా Transrewrt వాడటానికి సరిపోతుంది.

<br /><br />

<a id="getting-started"></a>
## ప్రారంభం

ఇది మీరు Transrewrtని మొదటి సారి వాడుతున్నద Statement అయితే, ఈ క్రమాన్ని అనుసరించండి:

1. యాప్‌ని తెరిచండి.
2. మీ **Interface language**ని గ్లోబ్ আইకన్ నుండి అవసరం ఉంటే ఎంచుకోండి.
3. మీరు **డెస్క్‌టాప్ యాప్** పై ఉంటే, [**Settings** > **API Config**](#api-config)ని తెరిచి, మీ OpenRouter API కీని పేస్ట్ చేసి, **Test API Configuration**ని క్లిక్ చేయండి.
4. [**Settings** > **Models**](#models)ని తెరిచి, **Selected Models**కి ఒక్క ogi అல்லது అంతకంటే ఎక్కువ మోడల్స్‌ను జోడించండి.
5. [**Settings** > **Languages**](#languages)ని తెరిచి, మీ అత్యంత వినియోగించే భాషలు మొదట వచ్చేలా ఎంచుకోండి.
6. **Translate**కి వెళ్లి, ఆవశ్యకమైన అన్ని విషయాలు పని చేస్తున్నాయో నిర్ధారించడానికి ఒక సరళమైన అనువాదం నడిపించండి.
7. అది పని చేసిన తరువాత, **Rewrite**ని మరియు తరువాత **Transform**ని వేరifi చేయండి.

ఈ క్రమం ముఖ్యమైనది. ఇది అత్యంత సాధారణ మొదటి-వినియోగ సమస్యను నివారిస్తుంది: యాప్‌కు ఒక పనిచేసే API కనెక్షన్ లేదా ఎంపిక చేసుకున్న మోడల్ ఉండే వ荃 until ఒక టాస్క్‌ను నడుపు ప్రయత్నించడం.

<br /><br />

<a id="main-parts-of-the-window"></a>
## విండో యొక్క ప్రధాన భాగాలు

యాప్ మూడు ప్రధ分担ాలుగా విభజించబడింది:

- ఎడమ వైపు ఉన్న **sidebar**.
- పైభాగంలో ఉన్న **toolbar**.
- మధ్యలో ఉన్న **work area**.

<br />

<a id="sidebar"></a>
### Sidebar

యాప్‌లో నడిచడానికి sidebarని ఉపయోగించండి:

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/te/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Translate</strong> అనువాద వర్క్‌స్పేస్‌ని తెరుస్తుంది.</li>
        <li><strong>Rewrite</strong> రీ-రైటింగ్ వర్క్‌స్పేస్‌ని తెరుస్తుంది.</li>
        <li><strong>Transform</strong> కస్టమ్ ప్రాంప్ట్ వర్క్‌స్పేస్‌ని తెరుస్తుంది.</li>
        <li><strong>Dashboard</strong> వినియోగం మరియు వెలు సమాచారాన్ని చూపుతుంది.</li>
        <li><strong>Settings</strong> సెట్టింగ్స్ ప్యానెల్‌ని తెరుస్తుంది.</li>
        <li><strong>User</strong> లాగిన్ అయిన వినియోగదారు పేరుని చూపుతుంది (వెబ్ మాత్రమే).</li>
      </ul>
      <br />
      <p>మీరు యాప్ లోజో అదన పరిమితి కోసం సైడ్‌బార్‌ను కలిగించుకోవచ్చు, దీని వల్ల యాప్లోజో దాని పక్కకున్న আইకన్‌ను క్లిక్ చేయడం ద్వారా.</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### Toolbar

టూల్‌బార్ మీరు యాప్‌లో ఎక్కడ ఉన్నావో దాదాపు మారుతుంది.

- ఎడమ వైపు, దాని ప్రస్తుత పేజీ పేరుని చూపుతుంది.
- కుడి వైపు, దాని **model selector** మరియు **Interface language** కంట్రోల్‌ని చూపుతుంది.

**model selector** మీకు ప్రస్తుత టాస్క్‌కు ఏ AI ఎంజిన్‌ను ఉపయోగించాలో ఎంచుకోవడానికి సahiustuma.

  ![Model selector](../images/screenshots/te/model-selector.png)

> ℹ️ **NOTE**<br/>
> కొన్ని ఉచిత మోడల్స్ వాటి అందుబాటులో లేక లేదా వాటి వినియోగ పరిమితిని చివరికి చేసుకున్న అయితే, తాత్కాలికంగా పని చేయవు. అది జరిగితే, యాప్ ఆ మోడల్‌ను మీ జాబిలియా నుండి స్వయంగా తీసివేస్తుంది.


<table>
  <tr>
    <td valign="top">
      <img src="../images/screenshots/te/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Translate</strong> అనువాద వర్క్‌స్పేస్‌ని తెరుస్తుంది.</li>
        <li><strong>Rewrite</strong> రీ-రైటింగ్ వర్క్‌స్పేస్‌ని తెరుస్తుంది.</li>
        <li><strong>Transform</strong> కస్టమ్ ప్రాంప్ట్ వర్క్‌స్పేస్‌ని తెరుస్తుంది.</li>
        <li><strong>Dashboard</strong> వినియోగం మరియు వెలు సమాచారాన్ని చూపుతుంది.</li>
        <li><strong>Settings</strong> సెట్టింగ్స్ ప్యానెల్‌ని తెరుస్తుంది.</li>
        <li><strong>User</strong> లాగిన్ అయిన వినియోగదారు పేరుని చూపుతుంది (వెబ్ మాత్రమే).</li>
      </ul>
      <br />
      <p>మీరు యాప్ లోజో అదన పరిమితి కోసం సైడ్‌బార్‌ను కలిగించుకోవచ్చు, దీని వల్ల యాప్లోజో దాని పక్కకున్న আইకన్‌ను క్లిక్ చేయడం ద్వారా.</p>
    </td>
  </tr>
</table>

<br />

<a id="input-and-output-panels"></a>
### ఇన్‌పుట్ & అవుట్‌పుట్ ప్యానెల్స్
ఇవి **పని ప్రాంతంలో** ఉంటాయి, **Translate**, **Rewrite**, మరియు **Transform** సందర్భాలలో. ఒక వైపుకు ఇన్‌పుట్ టెక్స్ట్‌బాక్స్ మరియు మరోవైపుకు అవుట్‌పుట్ టెక్స్ట్‌బాక్స్ ఉంటుంది. మీరు ఇన్‌పుట్‌లో టెక్స్ట్‌ని టైప్ చేసి లేదా పేస్ట్ చేసి, ఆపreshనల్ ఎంపికలETS (ఉదాహరణకు, "Translate to Telugu") ఎంటర్ చేసి లేదా "Go" బటన్‌ను క్లిక్ చేసి దాన్ని ప్రాసెస్ చేయవచ్చు. అవుట్‌పుట్ Ţక్స్‌బాక్స్‌లో ఫలితం ప్రదర్శించబడుతుంది, దాన్ని కాపీ చేయవచ్చు లేదా "Use as Input" బటన్‌ ద్వారా తిరిగి ఇన్‌పుట్‌గా ఉపయోగించవచ్చు. కొన్ని సందర్భాల్లో, మీరు అవుట్‌పుట్‌ను కూడా సన్నివేశించవచ్చు (ఉదా, రెండు భాషల మధ్య అనువాదం).

### ఇన్‌పుట్ మరియు అవుట్‌పుట్ ప్యానెల్లు

అధికంగా వర్క్‌స్పేస్లు ఎడమ వైపు **ఇన్‌పుట్** ప్యానెల్ మరియు కుడి వైపు **అవుట్‌పుట్** ప్యానెల్ ఉపయోగిస్తాయి.

**ఇన్‌పుట్** ప్యానెల్ కింది వానిని ప్రదర్శిస్తుంది:

- అక్షరాల సంఖ్య
- పదాల సంఖ్య
- పేరాల సంఖ్య

**అవుట్‌పుట్** ప్యానెల్ కింది వాటిని కాకుండా చూపవచ్చు:

- పని ఎలా పోయినది
- ఆ పని ఖర్చు
- మీ మొత్తం పరిమాణ ఖర్చు
- **TPS** (టోకెన్లు ప్రతి సెకండ్), ఇది ఒక సరÄalam వేగ గొప్త কল
- అక్షరాల, పదాల, మరియు పేరాల లెక్కలు
- వాడిన మోడల్

మీరు సాంకేతిక పదాలకు ఆసక్తి ఉంటే:

- **టోకెన్** అనగా టెక్స్ట్ యొక్క చిన్న భాగం. మీరు దానిని ఒక పదం యొక్క భాగం లేదా చిన్న పదం అని భావించవచ్చు.
- **TPS** అనగా ఆ టెక్స్ట్ భాగాలను మోడల్ ప్రతి సెకండ్ ఎంత చేరుస్తుంది అని.

<br /><br />

<a id="translate"></a>
## అనువదించండి

**అనువదించండి**ను అనగా టెక్స్ట్ ఒక భాష నుండి మరొక భాషకు పరివర్తనం చేయడానికి వాడండి.

![అనువదన వర్క్‌స్పేస్](../images/screenshots/te/translate.png)

<br />

<a id="translate-text"></a>
### టెక్స్ట్ అనువదించండి

1. **అనువదించడానికి**ను తెరువండి.
2. **నుండి**లో ఒక భాష ఎంచుకోండి.
3. **కు**లో ఒక భాష ఎంచుకోండి.
4. టూల్‌బార్‌లో ఒక మోడల్ ఎంచుకోండి.
5. **ఇన్‌పుట్**లో టెక్స్ట్ టైప్ చేయండి లేదా పేస్ట్ చేయండి.
6. **అనువదించండి** బటన్‌ క్లిక్ చేయండి.
7. **అవుట్‌పుట్**లో ఫలితం చదవండి.
8. మీరు ఫలితాన్ని కాపీ చేయాలనుకొlandsే, కాపీ బటన్‌ను ఉపయోగించండి.

<br />

<a id="language-selection"></a>
### భాష ఎంపిక

- **నుండి** ఒక నిర్దిష్ట భాష లేదా ** భాషను గుర్తించండి** అయ్యేటప్పుడు.
- **కు** అనగా మీరు ఫలితాన్ని కావాలైన భాష.

మీరు ఎంచుకున్న **ప్రధాన భాషలు** లిస్ట్‌ టాప్‌లో కనిపిస్తాయి. మీరు వాటిని [**అమర్పులు** > **భాషలు**](#languages)లో సెట్ చేయవచ్చు.

<br />

<a id="helpful-translation-settings"></a>
### సహాయక అనువద అమర్పులు

[**అమర్పులు** > **సాధారణ అమర్పులు**](#general-settings)లో, మీరు అనువదన వర్తింపు విధానాన్ని మార్చవచ్చు:

- **ఓటో-అనువదన్ ఓన్ పేస్ట్** మీరు టెక్స్ట్ పేస్ట్ చేసిన క్షణమే అనువదన నడిపిస్తుంది.
- **ఓటో-కాపీ రిజాల్ట్ టు క్లిప్‌బోర్డ్** విజయవంతంగా పనిచేసిన తర్వాత ఫలితాన్ని ఆటోమేటిక్‌గా కాపీ చేస్తుంది.
- **రియల్-టైమ్ అనువదన్ (వైల్ టైపింగ్)** మీరు టైప్ చేస్తున్నప్పుడు అనువదన నడిపిస్తుంది.
- **టైమ్‌ఔట్ (మిలీసెకండ్లు)** యాప్ రియల్-టైమ్ అనువదన నడిపించడానికి ఎంత సమయం వేడుకుంటుంది నియంత్రిస్తుంది.

<br />

<a id="keyboard-shortcuts"></a>
### కీబోర్డ్ షార్ట్‌కట్స్

[**అమర్పులు** > **సాధారణ అమర్పులు**](#general-settings)లో, **ENTER కు వివరణ** మీరు Enter కీ నొక్కినప్పుడు జరిగే దానిని నియంత్రిస్తుంది:

- **Enter** పనిని నడిపించవచ్చు మరియు **Shift+Enter** కొత్త లైన్ జోడించవచ్చు.
- లేదా యాప్ విపరీతంగా చేయవచ్చు.

ప్రస్తుత షార్ట్‌కట్ కూడా **అనువదించండి** బటన్‌పై చూపబడుతుంది.

<br /><br />

<a id="rewrite"></a>
## రీరైట్

**రీరైట్**ను అనవసరమైన సంక్లిష్టతలను సరిచేయడానికి వాడండి, అందువల్ల ప్రధాన భావం మాకుండా.

![రీరైట్ వర్క్‌స్పేస్](../images/screenshots/te/rewrite.png)

ఇది ఈ క్రింది కోసం ఉపయోగకరం:

- స్పెలింగ్ మరియు వ్యాకరణ సమస్యలు పరిష్కరించడం
- టెక్స్ట్ మరుగువగా చేయడం
- టెక్స్ట్ మరింత శుభ్రంగా or అఔపచారికంగా చేయడం
- టెక్స్ట్ shorten లేదా విస్తరించడం
- టెక్స్ట్ మరింత సాంకేతికంగా అనిపిస్తుందని చేయడం

<br />

<a id="rewrite-text"></a>
### టెక్స్ట్ రీరైట్ చేయండి

1. **రీరైట్**ను తెరువండి.
2. ఒక **మోడ్** ఎంచుకోండి.
3. టూల్‌బ్యార్‌లో ఒక మోడల్ ఎంచుకోండి.
4. **ఇన్‌పుట్**లో టెక్స్ట్ టైప్ చేయండి లేదా పేస్ట్ చేయండి.
5. **రీరైట్** బటన్‌ క్లిక్ చేయండి.
6. **అవుట్‌పుట్**లో ఫలితాన్ని సమీక్షించండి.

**[అనువదించండి](#keyboard-shortcuts)**లో వివరించిన Enter కీ ప్రవర్తన ఇక్కడ కూడా అమలు చేయబడుతుంది.

<br /><br />

<a id="transform"></a>
## ట్రాన్స్‌ఫార్మ్

**ట్రాన్స్‌ఫార్మ్**ను అనగా AIను కస్టమ్ సూచనల సెట్‌కు అనుగుణంగా ఉంచడానికి వాడండి.

![ట్రాన్స్‌ఫార్మ్ వర్క్‌స్పేస్](../images/screenshots/te/transform.png)

ఇది యాప్‌లో అత్యంత లొజిస్టిక్ ప్రాంతం. మీరు ఈ క్రింది పనులకు దీనిని వాడవచ్చు:

- నోట్స్‌ సారాంశం చేయడం
- దుర్వలీ టెక్స్ట్‌ను పాలిష్డ్ ఇమెయిల్‌గా మార్చడం
- కీ పాయింట్లు ఎక్స్ట్రాక్ట్ చేయడం
- టెక్స్ట్‌ను నిర్దిష్ట ఫార్మాట్‌కు మార్చడం

<br />

<a id="run-an-existing-prompt"></a>
### ప్రస్తుతంగా ఉన్న ప్రాంప్ట్‌ను నడిపించండి

1. **ట్రాన్స్‌ఫార్మ్**ను తెరువండి.
2. ప్రాంప్ట్ లిస్ట్‌ నుండి ఒక ప్రాంప్ట్ ఎంచుకోండి.
3. ఒక **లక్ష్య** భాష బాక్స్ కనిపిస్తే, మీరు కావాలంటే ఒక భాష ఎంచుకోండి.
4. **ఇన్‌పుట్**లో టెక్స్ట్ టైప్ చేయండి లేదా పేస్ట్ చేయండి.
5. **ట్రాన్స్‌ఫార్మ్** బటన్‌ క్లిక్ చేయండి.
6. **అవుట్‌పుట్**లో ఫలితాన్ని చదవండి.

<br />

<a id="if-you-have-no-prompts-yet"></a>
### మీకు ఇప్పటికీ ప్రాంప్ట్లు లేకుంటే

మీ ప్రాంప్ట్ లిస్ట్ ఢాకు పట్టించుకోండి, **Load sample prompts** క్లిక్ చేయండి. ఇది బిల్ట్-ఇన్ ఉదాహరణలను జోడిస్తుంది త్వరగా ప్రారంభించడానికి.

> ℹ️ **NOTE**<br/>
> సాంపుల ప్రాంప్ట్లు ఇంగ్లీష్‌లో అందించబడ్డాయి. వాటిని లోడ్ చేసిన తర్వాత, మీరు ఒక ప్రాంప్ట్‌ను ఎడిట్ చేయవచ్చు మరియు ప్రాంప్ట్ టెక్స్ట్‌ను వేరొక భాష కోసం అనుకూలం చేయాలనుకుంటే **అనువదన ప్రాంప్ట్** వాడండి.

<br />

<a id="create-a-prompt-quickly"></a>

### వేగంగా ప్రాంప్ట్‌ను సృష్టించండి

ప్రాంప్ట్‌ను సృష్టించడానికి అత్యంత వేగవంతమైన మార్గం ఇది:

1. **New prompt** ను నొక్కండి.
2. **Generate prompt** ను నొక్కండి.
3. మీరు ప్రాంప్ట్ ఏమి చేయాలని నిర్వచించండి.
4. మోడల్‌ను ఎంపిక చేయండి.
5. అప్ మీకు ఒక ముందస్తు స్వరూపాన్ని సృష్టించడానికి అనుమతించండి.
6. ముందస్తు స్వరూపాన్ని సమీక్షించి **Save** ను నొక్కండి.

![Generate prompt](../images/screenshots/te/transform-generate.png)


<br />

### ప్రాంప్ట్‌ను సవరించండి

మీరు ప్రాంప్ట్‌ను సృష్టించినప్పుడు లేదా సవరిస్తున్నప్పుడు, ఎడిటర్ ఎడమవైపు మరియు టెస్ట్ ప్రాంతం కొద్దిగా కనిపిస్తుంది.

![Transform prompt editor](../images/screenshots/te/transform-prompt-edit.png)

ప్రధాన ప్స⑂లు:

- **Prompt name**: ప్రాంప్ట్ జాబిలీలో చూపబడే పేరు.
- **Prompt instructions (optional)**: ప్రాంప్ట్‌ను నడిపే సమయంలో వినియోగదారుడికి చూపబడే చిన్న సూచన.
- **Model Role**: AIకి అంకితం చేసిన మొత్తం పాత్ర, ఉదాహరణకు 'You are a helpful assistant.'
- **Model Instructions (one per line)**: మీరు AIకి అనుసరించాలని కోరే నిర్దిష్ట నియమాలు.
- **Output description**: 'summary' లేదా 'rewrite' వంటి ఫలితాన్ని వర్ణించే ఒక చిన్న పదం.
- **Temperature (0.0 → 1.0)**: ఒక సృజనాత్మకత స్లైడర్.
- **Ask for target language**: ప్రాంప్ట్‌ను నడిపే సమయంలో లక్ష్య భాష ఎంపికాన్ని జోడిస్తుంది.

**Temperature** అనే సాంకేతిక పదం మీకు కొత్తదనైతే, దానిని ఇలా భావించండి:

- **lower** తాపमానం ద్వారా నిలకడైన, అంచనావేయబడే ఫలితాలు లభిస్తాయి.
- **higher** తాపమానం ద్వారా ఎక్కువ వైవిధ్యం మరియు సృజనాత్మకత లభిస్తాయి.

 మీరు అదనంగా ఈవి కూడా వాడవచ్చు:

- **`Generate prompt`** సAdhyDescription ద్వారా కొత్త ముందస్తు స్వరూపాన్ని సృష్టించడానికి
- **`Improve prompt`** ఇది ప్రస్తుతamt ప్రాంప్ట్‌ను మెరుగుపరచడానికి
- **`Translate prompt`** ప్రాంప్ట్ ప拜托d⑂లను అనువదించడానికి

> ⚠️ **WARNING**<br/>
> **`Back to Run`** ను నొక్కడానికి ముందు **`Save`** ను నొక్కండి. మీరు సేవ్ చేయకుండా వెనుకęgo, మీ మార్పులు కోల్పోతారు.

<br />

<a id="test-a-prompt-before-using-it"></a>
### మీరు వినియోగించడానికి ముందు ప్రాంప్ట్‌ను పరీక్షించండి

కొద్దిలో ఉన్న టెస్ట్ ప్యానెల్ మీకు రోజువారి పనిలో మీరు ఉపయోగించాలనుకుంటున్న ప్రాంప్ట్‌ను మీదాకు ఉపయోగించడానికి సాధ్యం.

దీని ప్రయోజనం ఉంటుంది:

- మీరు కొత్త ప్రాంప్ట్‌ను నిర్మిస్తున్నప్పుడు
- మీరు ప్రాంప్ట్ యొక్క రెండు అనucersionలను పోల్చుతున్నప్పుడు
- మీరు టోన్, ప荨ength, లేదా అ弹頻 formేట్‌ను తనిఖీ చేయాలనుకుంటున్నప్పుడు

<br />

<a id="manage-saved-prompts"></a>
### సేవ్ చేసిన ప్రాంప్ట్‌ను నిర్వహించండి

ఒకే చోటu సేవ్ చేసిన ప్రాంప్ట్‌ను నిర్వహించడానికి, [**Settings** > **Transform Prompts**](#transform-prompts) ను తెరువండి.

అక్కడ మీరు:

- మీ ప్రాంప్ట్‌లను జాబిలీ చేసి తొలగించవచ్చు
- ప్రాంప్ట్‌లను **JSON**, **CSV**, లేదా **XLSX** గా ఎగzeko చేయవచ్చు
- ఫైల నుండి ప్రాంప్ట్‌లను ఇంపోర్ట్ చేయవచ్చు

<br /><br />

## Dashboard

అప్‌ను పరిమితం ఎంత ఉపయోగిస్తున్నాను మరియు దాని ఖర్చు ఎంత అని తెలుసుకోవడానికి **Dashboard** ను ఉపయోగించండి.

![Dashboard summary](../images/screenshots/te/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### డేటాను ఫిల్టర్ చేయండి

 Hyderabad range మార్చడానికి టాప్‌లో ఉన్న ఫిల్టర్ బటన్‌లను ఉపయోగించండి.

![Dashboard filters](../images/screenshots/te/dashboard-filter.png)

> ℹ️ **NOTE**<br/>
> వెబ్ వర్షన్‌లో, అడ్మినిస్ట్రేటర్లు **User** ఫిల்டర్‌ను కూడా చూడవచ్చు. ఇది వారికి **All users** మరియు వ్యక్తిగత వినియోగదారు మధ్య స్విచ్ చేసే అనుమతి ఇస్తుంది.

<br />

<a id="dashboard-tabs"></a>
### డాష్‌బోర్డ్ ట్యాబ్‌లు

- **Summary** మీకు ఉపయోగం మరియు ఖర్చు పై సంక్షిప్త అవగాహన ఇస్తుంది.
- **By Usage** కార్యకలాపాన్ని అనువదన భాష, రీ-రైట్ మోడ్, మరియు ట్రాన్స్‌ఫార్మ్ ప్రాంప్ట్ ద్వారా విభజిస్తుంది.
- **By Model** మీరు ఏ మోడల్స్‌ను ఉపయోగించ yourselves మరియు వాటి ఖర్చు ఎంత అని చూపుతుంది.
- **By Day** రోజువారి మোট్లను చూపుతుంది.
- **All Calls** పూర్తి కాల్ చరిత్రను చూపుతుంది మరియు దానిని ఎగzeko చేయడానికి అనుమతిస్తుంది.

<br />

<a id="export-data"></a>
### డేటాను ఎగzeko చేయండి

డాష్‌బోర్డ్ టేబుల్స్ డేటాను ఈ రీతులలో ఎగzeko చేయగలవు:

- **JSON**
- **CSV**
- **XLSX**

ఇది మీరు అప్ బయట కార్యకలాపాన్ని సమీక్షించాలనుకుంటున్నప్పుడు లేదా నివేదికను షేర్ చేయాలనుకుంటున్నప్పుడు ఉపయోగకరంగా ఉంటుంది.

<br />

<a id="delete-stored-records-for-a-model"></a>
### మోడల్ కు సంబంధించిన సంకలిత రికార్డులు తొలగించండి

**By Model** లేదా **All Calls** లో, మీరు మోడల్ కు సంబంధించిన సంకలిత రికార్డులను తొలగించవచ్చు.

> ⚠️ **WARNING**<br/>
> సంకలిత రికార్డులను తొలగించడాన్ని పునరుత్పత్తి చేయలేం. దాని చరిత్రును మీరు మరచిపోదు అని నిర్ధారించుకుని మాత్రమే దీనిని వాడండి.

డేటాన్ని తొలగించడానికి లేదా వారిని వారి వయస్సు ఆధారంగా తొలగించడానికి, [**Settings** > **Cost Tracking**](#cost-tracking) కు వెళ్లండి. అక్కడ మీకు అన్ని సంకలిత డేటాను తొలగించే ఎంపికలు లేదా నిర్దిష్ట తేదీ కంటే పాత.datetime డేటాను మాత్రమే తొలగించే ఎంపికలు కనిపిస్తాయి.

<br /><br />

<a id="settings"></a>
## Settings

అప్ పరిణామం ఎలా ఉంటుందో కస్టమైజ్ చేయడానికి సైడ్‌బార్ నుండి **Settings** ను తెరవండి.

అందుబాటులనintage ట్యాబ్‌లు వేర్వేరుగా ఉండవచ్చు:

- **API Config** డెస్క్‌టాప్‌యాప్‌లో మాత్రమే అందుబాటులో ఉంటుంది.
- **Users** వెబ్ యాప్‌లో మాత్రమే అందుబాటులో ఉంటుంది, మరియు అడ్మినిస్ట్రేటర్లకు మాత్రమే.

<br />

<a id="general-settings"></a>

### Allgemeine Einstellungen

Verwenden Sie **Allgemeine Einstellungen**, um das Tippverhalten und das Erscheinungsbild zu steuern.

**Verhalten**

- **Verhalten für ENTER** wählt aus, ob Enter die Aufgabe ausführt oder eine neue Zeile einfügt.
- **Auto-Translate beim Einfügen** startet die Übersetzung, sobald Sie Text einfügen.
- **Auto-Kopieren des Ergebnisses in die Zwischenablage** kopiert erfolgreiche Ergebnisse automatisch.
- **Echtzeit-Übersetzung (während der Eingabe)** übersetzt, während Sie tippen.
- **Timeout (ms)** legt die Wartezeit für die Echtzeit-Übersetzung fest.

**Erscheinungsbild**

- **Kostenbruchziffern** ändert, wie Kosten-Nachkommastellen angezeigt werden.
- **Schriftart** ändert die Schriftart in den Textfeldern.
- **Größe** ändert die Schriftgröße.
- **Nur Web:** **Rand um die App anzeigen** fügt zusätzlichen Platz um die Oberfläche hinzu.

<br />

<a id="models"></a>
### Modelle

Verwenden Sie **Einstellungen** > **Modelle**, um auszuwählen, welche Modelle in der Symbolleiste erscheinen.

![Einstellungen Tab Modelle](../images/screenshots/te/settings-models.png)

Die Seite hat zwei Listen:

- **Verfügbare Modelle** links
- **Ausgewählte Modelle** rechts

Nützliche Steuerelemente umfassen:

- **Modelle suchen...** um ein Modell nach Namen zu finden
- **Nur kostenlos** um nur kostenlose Modelle anzuzeigen
- **Aktualisieren** um die Liste neu zu laden
- **Alle erweitern** und **Alle reduzieren** wenn Sie nach Anbieter sortieren

Um ein Modell hinzuzufügen, klicken Sie auf **Hinzufügen**.

Um ein Modell zu entfernen, klicken Sie auf **X** neben ihm in **Ausgewählte Modelle**.

Um die Liste zu leeren, klicken Sie auf **Alle abwählen**. Das erforderliche kostenlose Modell bleibt in der Liste.

> ℹ️ **HINWEIS**<br/>
> Wenn Sie nicht sofort Credits zu OpenRouter hinzufügen möchten, aktivieren Sie zuerst **Nur kostenlos** und wählen Sie die kostenlosen Modelle.

<br />

<a id="languages"></a>
### Sprachen

Verwenden Sie **Einstellungen** > **Sprachen**, um die in der App verwendeten Sprachlisten zu organisieren.

- **Top-Sprachen** werden oben in den Sprachlisten in **Übersetzen** und **Transformieren** angeheftet.
- **Benutzerdefinierte Sprache** ermöglicht das Hinzufügen einer Sprache, die nicht in der integrierten Liste enthalten ist.

Wenn Sie eine benutzerdefinierte Sprache hinzufügen, erscheint sie neben den integrierten Optionen in den Sprachselektoren.

<br />

<a id="cost-tracking"></a>
### Kostenverfolgung

Verwenden Sie **Einstellungen** > **Kostenverfolgung**, um Kosteninformationen zu verwalten.

- **Gesamtkosten** zeigt die laufende Summe.
- **Wert kopieren** kopiert die Gesamtsumme in die Zwischenablage.
- **Kosten zurücksetzen** setzt die gespeicherte Gesamtsumme auf null zurück.
- **Mit API-Schlüssel-Nutzung synchronisieren** setzt die Gesamtsumme auf die von OpenRouter gemeldete Nutzung.
- **API-Schlüssel-Nutzung** zeigt Nutzungsdetails, falls verfügbar.
- **Kostendaten löschen** entfernt alle Daten oder nur Einträge, die älter als ein ausgewähltes Datum sind.

> ⚠️ **WARNUNG**<br/>
> Datenlöschung kann nicht rückgängig gemacht werden. Sichern Sie Ihre Daten oder exportieren Sie sie über [**Dashboard** > **Alle Aufrufe**](#dashboard-tabs), bevor Sie löschen, da sie sonst dauerhaft verloren gehen.

<br />

<a id="transform-prompts"></a>
### Transform-Prompts

Verwenden Sie **Einstellungen** > **Transform-Prompts**, um Prompts massenweise zu verwalten.

Sie können:

- Ihre gespeicherten Prompts überprüfen
- Prompts löschen
- Prompts aus einer Datei importieren
- Prompts zur Sicherung oder zum Teilen exportieren

<br />

<a id="users"></a>
### Benutzer

**Nur Web - administrator nur**

Verwenden Sie **Benutzer**, um Benutzerkonten in der Webversion zu verwalten. Sie können Benutzer hinzufügen, ihre Details aktualisieren, Passwörter zurücksetzen und Konten löschen.

<br />

<a id="api-config"></a>
### API-Konfiguration

**Nur Desktop**

Verwenden Sie **API-Konfiguration**, um die Desktop-App mit OpenRouter oder einem Transrewrt-Proxy zu verbinden.

- **OpenRouter API-Schlüssel** ist, wo Sie Ihren Schlüssel einfügen.
- **API-URL** ist die Serviceadresse. Lassen Sie dies standardmäßig, es sei denn, Ihnen wurde eine andere gegeben.
- **Transrewrt-Proxy verwenden** leitet Anfragen über einen Proxy-Dienst statt direkt an OpenRouter.
- **Schlüssel-Seed** erscheint, wenn die Proxy-Option aktiviert ist.
- **API-Konfiguration testen** prüft, ob die aktuelle Einrichtung funktioniert.

Ausführliche Schritte zum Erhalten Ihres API-Schlüssels finden Sie oben unter [ Wie erhalte ich einen API-Schlüssel (Desktop-App) ](#how-to-get-an-api-key-desktop-app).

> ℹ️ **HINWEIS**<br/>
> Wenn Sie sich nicht sicher sind, was **API-URL**, **Transrewrt-Proxy verwenden** oder **Schlüssel-Seed** bedeuten, lassen Sie sie unverändert und verwenden Sie die standardmäßige OpenRouter-Einrichtung. Weitere Informationen zum Proxy sind im [Transrewrt-Proxy-Repository](https://github.com/wsj-br/transrewrt-proxy) verfügbar.


<br />

<a id="about"></a>

### గురించి

**గురించి** ట్యాబ్ క్రింది విషయాలను చూపుతుంది:

- అప్లికేషన్ పేరు
- వర్షన్ సంఖ్య
- బిల్డ్ తేదీ
- ప్రాజెక్ట్ రిపోజిటరీకి లింక్

<br /><br />

<a id="common-issues"></a>
## సాధారణ సమస్యలు

మీటలైనది అనుకూలంగా పని చేయకపోతే, మొదట క్రింది పాయింట్లు పరిశీలించండి.

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### అప్లికేషన్ పాఠ్యాన్ని భాషాంతరం, పునర్వ్రాత్తు లేదా పరివర్తన చేయకుండా ఉంటుంది

పరిశీలించండి:

- మీరు టూల్బార్‌లో ఒక మోడల్ ఎంపిక చేసారో
- కనీసం ఒక మోడల్ [**శ్రేణులు > మోడల్స్**](#models)లో పట్టికలో ఉంది
- మీ API సెట్టప్ పని చేస్తుంది

మీరు డెస్క్టాప్ అప్లికేషన్ వాడ్తున్నార诅咒:

1. [**శ్రేణులు > API కాన్ఫిగరేషన్**](#api-config) అవుట్ చేయండి.
2. మీ API కీ సేవ్ చేయబడిందో ధృవీకరించండి.
3. **API కాన్ఫిగరేషన్‌ను పరీక్షించండి** క్లిక్ చేయండి.

<br />

<a id="the-model-list-is-empty"></a>
### మోడల్ జాబిలీ ఖాళీగా ఉంది

[**శ్రేణులు > మోడల్స్**](#models) చేరి **రీఫ్రెష్** క్లిక్ చేయండి.

అవసరమైతే:

- ఒక మోడల్ కోసం శోధించండి
- **కేవలం ఉచితం** ఆన్ చేయండి
- ఒక లేదా అధిక మోడల్స్‌ను **ఎంపికైన మోడల్స్**కి జోడించండి

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### ఫలితం అతి మందగా లేదా అతి ఖర్చుగా ఉంది

ఈలలో ఒకటి లేదా అధికం ప్రయత్నించండి:

- వేరే మోడల్ ఎంచుకోండి
- చిన్న ఇన్పుట్ వాడండి
- [**శ్రేణులు > సాధారణ శ్రేణులు**](#general-settings)లో **రియల్-టైమ్ భాషాంతరం (టైప్ చేస్తున్నప్పుడు)** ఆఫ్ చేయండి
- సులభ పనుల కోసం ఉచిత మోడల్స్ వాడండి ([మోడల్స్](#models) చూడండి)

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### యింటర్‌ఫేస్ తప్పు భాషలో ఉంది

[టూల్బార్](#toolbar)లో గ్లోబ్ আইకాన్ క్లిక్ చేసి మీ ప్రధాన **యింటర్‌ఫేస్ భాష** ఎంచుకోండి.

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### పాఠ్యం అతి చిన్నగా లేదా చదవడానికి కష్టంగా ఉంది

[**శ్రేణులు > సాధారణ శ్రేణులు**](#general-settings) చేరి మార్చండి:

- **ఫాంట్ కుటుంబం**
- **పరిమాణం**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### నేను ఒక ప్రాంప్ట్‌ను మార్చి సవరణలు కోల్పోయాను

ప్రాంప్ట్‌ని సవరించేటప్పుడు, **నడిపిండికి తిరిగి** క్లిక్ చేయగాక **సేవ్** క్లిక్ చేయండి.

<br /><br />

<a id="quick-tips"></a>
## వేగవంతమైన సూచనలు

- మీరు ముందుకు వెళ్లనట్లే మీ సెట్టప్ పని చేస్తుంది అని నిర్ధేశించుకోవడానికి [**భాషాంతరం**](#translate)తో ప్రారంభించండి.
- రోజువారీ పదపరిచయ సవరణల కోసం [**పునర్వ్రాత్తు**](#rewrite) వాడండి.
- నిర్దిష్ట పనికోసం పునరావృత పనిపట్టు అవసరమైనప్పుడు [**పరివర్తన**](#transform) వాడండి.
- వినియోగం మరియు ఖర్చును పర్యవేక్షించడానికి [**డాష్‌బోర్డ్**](#dashboard) వాడండి.
- మీరు భద్రంగా ఉంచాలనుకున్న ప్రాంప్ట్ లైబ్రరీ నిర్మించినప్పుడు ప్రాంప్ట్‌లను నియమితంగా ఎగ్జాక్ట్ చేయండి ([పరివర్తన ప్రాంప్ట్‌లు](#transform-prompts) చూడండి).

<br /><br />

<a id="disclaimer"></a>
## అస్వీకార పత్రం

ఉత్పత్తి పేర్లు మరియు ప్రతీకలు వాటి సంబంధిత యజమానిలో పుడతాయి మరియు మాత్రమే గుర్తింపు ప్రయోజనాలకు వాడతాయి. ఈ సాఫ్ట్‌వేర్ ఎకడైనా ప్రకటించబడిన బ్రాండ్స్‌తో సంబంధించబడినది లేదా వారి మద్దతును పొందలేదు.

<br /><br />

<a id="license"></a>
## లైసెన్స్

కాపీరైట్ © 2026 వల్దెమర్ స్కుడెల్లర్ జూనియర్.

[Apache License 2.0](LICENSE)