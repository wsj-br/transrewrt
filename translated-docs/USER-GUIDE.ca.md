---
translation_last_updated: '2026-04-28T00:50:41.138Z'
source_file_mtime: '2026-04-27T17:00:19.020Z'
source_file_hash: 253d03c03bd028d8119ce13e1d810e974a386f3e98054a9e750d5ecfbf1c76d0
translation_language: ca
source_file_path: USER-GUIDE.md
translation_models:
  - qwen/qwen3-235b-a22b-2507
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Guia d'usuari

<br/>

<a id="introduction"></a>
## Introducció

Transrewrt us ajuda a treballar amb text de tres maneres principals:

- **Tradueix** - converteix text d'un idioma a un altre.
- **Reescriptura** - reformula el text amb un estil diferent, com ara més clar, més curt o més formal.
- **Transformació** - processa text mitjançant instruccions d'IA personalitzades anomenades prompts.

<br/>

Aquesta guia explica com utilitzar l'aplicació un cop instal·lada i en funcionament. Per als passos d'instal·lació, consulteu el **[README](README.ca.md)** principal.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt està disponible com a aplicació d'escriptori per a Windows i Linux, i com a aplicació web autoallotjada. Aquesta guia es centra en l'ús diari de l'aplicació. Quan alguna cosa només s'aplica a una versió, està clarament marcat.

<small>**Llegeix en altres idiomes:** </small>
<small id="lang-list">[English (GB)](../USER-GUIDE.md) · [Português (Brasil)](./USER-GUIDE.pt-BR.md) · [العربية](./USER-GUIDE.ar.md) · [বাংলা](./USER-GUIDE.bn.md) · [Català](./USER-GUIDE.ca.md) · [中文 (中国大陆)](./USER-GUIDE.zh-CN.md) · [中文 (台灣)](./USER-GUIDE.zh-TW.md) · [Hrvatski](./USER-GUIDE.hr.md) · [Čeština](./USER-GUIDE.cs.md) · [Nederlands](./USER-GUIDE.nl.md) · [English (US)](./USER-GUIDE.en-US.md) · [Tagalog](./USER-GUIDE.tl.md) · [Français](./USER-GUIDE.fr.md) · [Deutsch](./USER-GUIDE.de.md) · [Ελληνικά](./USER-GUIDE.el.md) · [हिन्दी](./USER-GUIDE.hi.md) · [Magyar](./USER-GUIDE.hu.md) · [Italiano](./USER-GUIDE.it.md) · [日本語](./USER-GUIDE.ja.md) · [한국어](./USER-GUIDE.ko.md) · [Bahasa Melayu](./USER-GUIDE.ms.md) · [فارسی](./USER-GUIDE.fa.md) · [Polski](./USER-GUIDE.pl.md) · [Basa Jawa](./USER-GUIDE.jv.md) · [Português](./USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](./USER-GUIDE.pa.md) · [Română](./USER-GUIDE.ro.md) · [Русский](./USER-GUIDE.ru.md) · [Slovenčina](./USER-GUIDE.sk.md) · [Español](./USER-GUIDE.es.md) · [Kiswahili](./USER-GUIDE.sw.md) · [Svenska](./USER-GUIDE.sv.md) · [తెలుగు](./USER-GUIDE.te.md) · [ไทย](./USER-GUIDE.th.md) · [Türkçe](./USER-GUIDE.tr.md) · [Українська](./USER-GUIDE.uk.md) · [Tiếng Việt](./USER-GUIDE.vi.md)</small>

<small>

> **Nota sobre les traduccions de la interfície i la documentació:** Tots els idiomes de la interfície excepte l'anglès original (UK)
> s'han traduït mitjançant models d'IA; l'expressió pot ser imprecisa o contenir errors.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Taula de continguts**

- [Abans de començar](#before-you-start)
  - [Com obtenir una clau API gratuïta d'OpenRouter (aplicació d'escriptori)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Primers passos](#getting-started)
- [Parts principals de la finestra](#main-parts-of-the-window)
  - [Barra lateral](#sidebar)
  - [Barra d'eines](#toolbar)
  - [Panells d'entrada i sortida](#input-and-output-panels)
- [Traduir](#translate)
  - [Traduir text](#translate-text)
  - [Selecció d'idioma](#language-selection)
  - [Configuracions útils de traducció](#helpful-translation-settings)
- [Reescriure](#rewrite)
- [Transformar](#transform)
  - [Executar una indicació existent](#run-an-existing-prompt)
  - [Si encara no teniu indicacions](#if-you-have-no-prompts-yet)
  - [Crear una indicació ràpidament](#create-a-prompt-quickly)
  - [Editar una indicació](#edit-a-prompt)
  - [Provar una indicació abans d'utilitzar-la](#test-a-prompt-before-using-it)
- [Tauler de control](#dashboard)
  - [Filtrar les dades](#filter-the-data)
  - [Pestanyes del tauler de control](#dashboard-tabs)
  - [Exportar dades](#export-data)
  - [Eliminar registres emmagatzemats per a un model](#delete-stored-records-for-a-model)
- [Historial](#history)
  - [Filtrar les dades](#filter-the-data-1)
  - [Exportar dades de l'historial](#export-history-data)
- [Configuració](#settings)
  - [Configuració general](#general-settings)
  - [Models](#models)
  - [Idiomes](#languages)
  - [Seguiment de costos](#cost-tracking)
  - [Indicacions de transformació](#transform-prompts)
  - [Usuaris](#users)
  - [Configuració d'API](#api-config)
  - [Quant a](#about)
- [Problemes habituals](#common-issues)
  - [L'aplicació no tradueix, reescriu ni transforma el text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [La llista de models està buida](#the-model-list-is-empty)
  - [El resultat és massa lent o massa car](#the-result-is-too-slow-or-too-expensive)
  - [La interfície està en l'idioma incorrecte](#the-interface-is-in-the-wrong-language)
  - [El text és massa petit o difícil de llegir](#the-text-is-too-small-or-hard-to-read)
  - [Els gràfics del tauler de control estan buits](#dashboard-charts-are-empty)
  - [El cost mostra "no disponible" o sembla incorrecte](#cost-shows-not-available-or-seems-wrong)
  - [El cost total no coincideix amb la meva factura del proveïdor](#total-cost-does-not-match-my-provider-bill)
  - [La pàgina d'historial no apareix a la barra lateral](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicació web: redirigit inesperadament a la pàgina d'inici de sessió](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Administrador web: he oblidat o perdut la contrasenya](#web-admin-forgot-or-lost-a-password)
  - [El tauler de control no mostra dades d'altres usuaris (web)](#dashboard-shows-no-data-for-other-users-web)
  - [He canviat una indicació i he perdut les edicions](#i-changed-a-prompt-and-lost-the-edits)
- [Consells ràpids](#quick-tips)
- [Avís legal](#disclaimer)
- [Llicència](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Abans de començar

Per utilitzar Transrewrt, necessiteu accés a com a mínim un proveïdor d'IA. Els proveïdors compatibles són: [OpenRouter](https://openrouter.ai) (que agrega molts models), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, i [Ollama](https://ollama.com) per a models locals.

No cal que seleccioneu un model de pagament per començar. Tan aviat com afegiu la vostra clau API d'OpenRouter, l'aplicació habilita automàticament una opció integrada d'**OpenRouter gratuïta**. Això us permet començar a traduir, reescriure i transformar text immediatament. Alternativament, també podeu obtenir una clau API gratuïta de Cerebras, Google, Groq o Mistral AI.

En paraules senzilles:

- Un **model** és el motor d'IA que fa la feina. Els models es llisten amb un **prefix del proveïdor** (per exemple `openrouter/…`, `openai/…`, `ollama/…`).
- Una **clau API** (o, per a Ollama, una **URL base**) és com l'aplicació accedeix a aquest proveïdor.

Si esteu utilitzant l'**aplicació d'escriptori**, afegiu claus a [**Configuració** > **Configuració de l'API**](#api-config) per a cada proveïdor que utilitzeu. Per a ús exclusiu d'OpenRouter, vegeu [Com obtenir una clau API](#how-to-get-an-api-key-desktop-app) a continuació. Si no voleu utilitzar una clau API, podeu instal·lar Ollama (des de [ollama.com](https://ollama.com)) i utilitzar models locals en lloc d'això, com ara `translategemma:4b`.

Si esteu utilitzant la **versió web**, l'administrador del servidor configura els proveïdors amb variables d'entorn, per tant no podeu introduir claus API directament a l'aplicació.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Com obtenir una clau API gratuïta d'OpenRouter (aplicació d'escriptori)

Si esteu utilitzant l'aplicació d'escriptori, seguiu aquests passos:

1. Aneu a [OpenRouter](https://openrouter.ai) amb el vostre navegador web.
2. Creeu un compte o inicieu sessió.
3. Obriu la pàgina de [Claus](https://openrouter.ai/keys).
4. Feu clic al botó per crear una nova clau API.
5. Doneu un nom a la clau per poder-la reconèixer més tard.
6. Copieu la nova clau API.
7. Torneu a Transrewrt i obriu **Configuració** > **Configuració d'API**.
8. Enganxeu la clau a **Clau API d'OpenRouter** (sota **Configuració** > **Configuració d'API**).
9. Feu clic a **Provar la clau d'OpenRouter** per assegurar-vos que funciona.

<br/><br/>

<a id="getting-started"></a>
## Primers passos

Si és la primera vegada que utilitzeu Transrewrt, seguiu aquest ordre:

1. Obriu l'aplicació.
2. Trieu el vostre **idioma d'interfície** a partir de la icona del globus si és necessari.
3. Si esteu utilitzant l'**aplicació d'escriptori**, obriu [**Configuració** > **Configuració d'API**](#api-config), afegiu una clau API d'almenys un proveïdor (per exemple, OpenRouter) i feu clic a **Provar** per verificar que funciona.
4. Obriu [**Configuració** > **Models**](#models) i afegiu un o més models a **Models seleccionats**.
5. Obriu [**Configuració** > **Idiomes**](#languages) i trieu els vostres **Idiomes preferits** si voleu que els idiomes que més utilitzeu apareguin primers.
6. Aneu a **Traduir** i executeu una traducció senzilla per confirmar que tot funciona.
7. Un cop funcioni, proveu **Reescriure** i després **Transformar**.

Aquest ordre és important. Evita el problema més comú en el primer ús: intentar executar una tasca abans que l'aplicació tingui una connexió API funcional o un model seleccionat.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Parts principals de la finestra

L'aplicació està dividida en tres àrees principals:

- L'**barra lateral** a l'esquerra.
- La **barra d'eines** a la part superior.
- L'**àrea de treball** al centre.

<br/>

<a id="sidebar"></a>
### Barra lateral

Utilitzeu la barra lateral per desplaçar-vos per l'aplicació. Podeu col·lapsar la barra lateral per tenir més espai fent clic a la icona al costat del logotip de l'aplicació.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/ca/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Tradueix</strong> obre l'àrea de treball de traducció.</li><br/>
        <li><strong>Reescriptura</strong> obre l'àrea de treball de reescriptura.</li><br/>
        <li><strong>Transformació</strong> obre l'àrea de treball de prompt personalitzat.</li><br/>
        <li><strong>Tauler</strong> mostra informació d'ús i cost.</li><br/>
        <li><strong>Configuració</strong> obre el panell de configuració.</li><br/>
        <li><strong>Historial</strong> mostra l'historial d'ús amb el text d'entrada i de sortida</li><br/>
        <li><strong>Usuari</strong> mostra el nom d'usuari de l'usuari registrat (només web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Barra d'eines

La barra d'eines canvia lleugerament segons on esteu a l'aplicació.

- A l'esquerra, mostra el nom de la pàgina actual.
- A la dreta, mostra el **selector de model** i el control de **Idioma de la interfície**.

El **selector de model** us permet triar quin motor d'IA utilitzar per a la tasca actual.

![Model selector](../images/screenshots/ca/model-selector.png)

Alguns models gratuïts poden no estar sempre disponibles; de tant en tant estan fora de línia o tenen un límit d'ús. Si això passa, l'aplicació eliminarà automàticament aquest model de la vostra llista disponible. Per controlar quins models apareixen, aneu a [**Configuració** > **Models**](#models) i editeu la vostra llista de models. 
També podeu obrir directament la configuració del model fent clic a la icona del proveïdor a l'esquerra del nom del model a la barra d'eines.

<br/>

La **icona de globus terraqüi + codi d'idioma** canvia l'idioma de la interfície de l'aplicació, com ara menús i botons. **No** canvia els idiomes de traducció utilitzats a **Tradueix**.

![Interface language selector](../images/screenshots/ca/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panells d'entrada i sortida

La majoria d'espais de treball utilitzen un panell d'**Entrada** a l'esquerra i un panell de **Sortida** a la dreta.

Cada panell també mostra:

| **Entrada**                                                          | **Sortida**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Comptador de caràcters <br/>- Comptador de paraules <br/>- Comptador de paràgrafs   <br/> | - Quant de temps ha trigat la tasca<br/>- **TPS** (fitxes per segon)<br/>- Comptadors de caràcters, paraules i paràgrafs<br/>- El model utilitzat |

Si us pregunteu sobre els termes tècnics:

- **Fitxa** vol dir un fragment petit de text. Podeu pensar-hi com a part d'una paraula o una paraula curta.
- **TPS** vol dir quantes d'aquestes fragments de text ha processat el model cada segon.

<br/>

També podeu controlar el cost de cada operació (si està disponible) i el cost total, activant l'opció `Show cost information on the actions` a [**Configuració** > **Configuració General**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Tradueix

Utilitzeu **Tradueix** quan vulgueu convertir text d'un idioma a un altre.

![Translate workspace](../images/screenshots/ca/translate.png)

<br/>

<a id="translate-text"></a>
### Traduir text

1. Obriu **Traduir**.
2. Trieu un idioma a **Des de**.
3. Trieu un idioma a **A**.
4. Trieu un model a la barra d'eines.
5. Escriviu o enganxeu text a **Entrada**.
6. Feu clic a **Traduir**.
7. Llegiu el resultat a **Sortida**.
8. Utilitzeu el botó de còpia si voleu copiar el resultat.

<br/>

<a id="language-selection"></a>
### Selecció d'idioma

- **De** pot ser un idioma específic o **Detectar idioma**.
- **A** és l'idioma en què voleu el resultat.

Els vostres **Idiomes principals** seleccionats apareixen a la part superior de la llista. Podeu definir-los a [**Configuració** > **Idiomes**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Configuració útil de traducció

A [**Configuració** > **Configuració General**](#general-settings), podeu canviar el comportament de la traducció:

- **Traducció automàtica en enganxar** executa una traducció tan bon punt enganxeu text.
- **Còpia automàtica del resultat al porta-retalls** copia el resultat automàticament després d'una execució correcta.
- **Traducció en temps real (mentre s'escriu)** executa traduccions mentre escriviu.
- **Temps d'espera (ms)** controla quant de temps espera l'aplicació abans d'executar una traducció en temps real.
- **Enter** controla què passa quan premeu `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Reescriptura

Utilitzeu la **Reescriptura** quan vulgueu millorar l'expressió sense canviar el significat principal.

![Rewrite workspace](../images/screenshots/ca/rewrite.png)

Això és útil per a:

- correcció d'ortografia i gramàtica (**Comprovar ortografia i gramàtica**)
- millora de la claredat del text (**Millorar la claredat**)
- diverses reformulacions diferents en una sola execució (**Versions alternatives**)
- fer el text més formal o menys formal (**Formal** / **Informal**)
- escurçar o ampliar el text (**Escurçar** / **Ampliar**)
- fer que el text sembli més tècnic (**Fer tècnic**)

<br/>

> 💡 **TIP**<br/>
> Quan utilitzeu el mode "**Comprova l'ortografia i la gramàtica**", apareix un interruptor **Mostra els canvis** al tauler de sortida (al costat de **Copia**).
> Activeu-lo o desactiveu-lo per mostrar o amagar les correccions específiques aplicades al vostre text.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Transformació

Utilitzeu la **Transformació** quan vulgueu que la IA segueixi un conjunt d'instruccions personalitzat.

![Transform workspace](../images/screenshots/ca/transform.png)

Aquesta és l'àrea més flexible de l'aplicació. Podeu utilitzar-la per a tasques com ara:

- resumir notes
- convertir text brut en un correu electrònic polítmic
- extreure punts clau
- convertir text en un format específic
- qualsevol altra activitat personalitzada amb el text d'entrada

<br/>

<a id="run-an-existing-prompt"></a>
### Executar un prompt existent

1. Obriu **Transformar**.
2. Trieu una indicació de la llista d'indicacions.
3. Si apareix un quadre d'**Idioma de destinació**, trieu un idioma si en voleu un.
4. Escriviu o enganxeu text a **Entrada**.
5. Feu clic a **Transformar**.
6. Llegiu el resultat a **Sortida**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Si encara no teniu cap prompt

Si la vostra llista de prompts està buida, feu clic a **Carrega els exemples de prompts** a l'espai de treball de Transformació. El mateix control sempre està disponible a [**Configuració** > **Prompts de transformació**](#transform-prompts) a la fila d'exportació/importació. Tots dos afegiran exemples integrats perquè pugueu començar ràpidament.

<br/>

> ℹ️ **NOTA**<br/>
> Els prompts d'exemple es proporcionen en anglès. Després de carregar-los, podeu editar un prompt i utilitzar **Traduir la indicació** per traduir-lo al vostre idioma.

<br/>

<a id="create-a-prompt-quickly"></a>
### Crea un prompt ràpidament

La manera més ràpida de crear un prompt és:

1. Feu clic a **Nova indicació**.
2. Feu clic a **Generar indicació**.
3. Descriviu què voleu que faci la indicació.
4. Trieu un model.
5. Deixeu que l'aplicació us creï un esborrany.
6. Reviseu l'esborrany i feu clic a **Desar**.

![Generate prompt](../images/screenshots/ca/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Edita un prompt

Quan creeu o editeu un prompt, l'editor apareix a l'esquerra i una àrea de prova apareix a la dreta.

![Transform prompt editor](../images/screenshots/ca/transform-prompt-edit.png)

Els camps principals són:

- **Nom de la indicació**: el nom que es mostra a la llista d'indicacions.
- **Instruccions de la indicació (opcional)**: una breu ajuda que es mostra a l'usuari quan s'executa la indicació.
- **Rol del model**: el rol general assignat a la IA, com ara 'Ets un assistent útil.'
- **Instruccions del model (una per línia)**: les regles específiques que voleu que segueixi la IA.
- **Descripció de la sortida**: una paraula breu que descriu el resultat, com ara 'resum' o 'reescritura'.
- **Temperatura (0,0 → 1,0)**: com es comportarà el model; vegeu més avall.
- **Demana l'idioma de destinació**: afegeix un selector d'idioma de destinació quan s'executa la indicació.

Si el terme tècnic **Temperatura** és nou per a vostè, pensi-hi d'aquesta manera:

- Una **temperatura** més baixa dóna resultats més estables i previsibles.
- Una **temperatura** més alta dóna més varietat i creativitat.

També podeu utilitzar:

- **`Generate prompt`** per crear un nou esborrany a partir d'una descripció senzilla
- **`Improve prompt`** per perfeccionar un prompt existent
- **`Translate prompt`** per traduir els camps del prompt

<br/>

> ⚠️ **ADVERTÈNCIA**<br/>
> Feu clic a **`Save`** abans de fer clic a **`Back to Run`**. Si torneu enrere sense desar, es perdran els canvis.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Prova un prompt abans d'utilitzar-lo

El tauler de prova de la dreta us permet provar el vostre prompt amb text de mostra abans d'utilitzar-lo en la feina diària.

Això és útil quan:

- esteu creant un nou prompt
- esteu comparant dues versions d'un prompt
- voleu comprovar el to, la longitud o el format de la sortida

<br/>

> ℹ️ **NOTA**<br/>
> Podeu exportar i importar prompts desats a [**Configuració** > **Prompts de transformació**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Tauler

Utilitzeu **Tauler** per veure quant esteu utilitzant l'aplicació i quin és el cost (per als models de pagament).

![Dashboard summary](../images/screenshots/ca/dashboard-summary.png)

<br/>

> ℹ️ **NOTA**<br/>
> Si només utilitzeu models **gratuïts**, les quantitats de **cost** poden ser zero i els resums centrats en el cost poden semblar buits. A **Resum**, **Ús amb el temps** i **Ús per model** encara es mostren els **nombres de trucades** (traduir, reescriure i transformar) quan tingueu activitat en el període seleccionat.

<br/>

<a id="filter-the-data"></a>
### Filtra les dades

Utilitzeu els botons de filtre de la part superior per canviar l'interval de temps.

![Dashboard filters](../images/screenshots/ca/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> El filtre **Usuari** només és visible per als administradors a la versió web. Els usuaris normals no veuran aquest filtre, i no està disponible a l'aplicació d'escriptori.

<br/>

<a id="dashboard-tabs"></a>
### Pestanyes del tauler

- **Resum** us ofereix una visió general de l'ús i el cost. Inclou un gràfic d'**Ús al llarg del temps** (**comptes acumulatius superposats** de trucades per dia per a traduir, reescriure i transformar) i **Ús per model** (**trucades totals per model**, incloent transformar).
- **Per ús** desglossa l'activitat per idioma de traducció, mode de reescritura i indicació de transformació.
- **Per model** mostra quins models heu utilitzat i quant han costat.
- **Per dia** mostra els totals diaris.
- **Totes les trucades** mostra l'historial complet de trucades i us permet exportar-lo.

<br/>

<a id="export-data"></a>
### Exportar dades

Les taules del tauler poden exportar dades en:

- **JSON**
- **CSV**
- **XLSX**

Això és útil si vols revisar l'activitat fora de l'aplicació o compartir un informe.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Esborrar registres emmagatzemats d'un model

A **Per model** o **Totes les crides**, podeu eliminar els registres emmagatzemats d'un model fent clic a la icona de "paperera".

> ⚠️ **ADVERTÈNCIA**<br/>
> L'eliminació de registres emmagatzemats no es pot desfer. Només utilitzeu aquesta opció si esteu segur que ja no necessiteu aquest historial.

Per esborrar totes les dades o eliminar registres segons la seva antiguitat, aneu a [**Configuració** > **Seguiment de costos**](#cost-tracking). Allà trobareu opcions per esborrar totes les dades emmagatzemades o només les dades anteriors a una data determinada.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Historial

Feu clic a **Historial** per veure l'historial de les vostres accions dins de **Transrewrt**, incloent-hi l'entrada i la sortida de cada operació.

![History page](../images/screenshots/ca/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrar les dades

**Historial** utilitza els mateixos filtres que la pàgina **Tauler**. Utilitzeu-los per seleccionar el rang de temps.

![Dashboard filters](../images/screenshots/ca/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> El filtre **Usuari** només és visible per als administradors a la versió web. Els usuaris normals no veuran aquest filtre, i no està disponible a l'aplicació d'escriptori.

<br/>

<a id="export-history-data"></a>
### Exportar dades de l'historial

La pàgina d'historial pot exportar les dades filtrades en:

- **JSON**
- **CSV**
- **XLSX**

Això és útil si vols revisar l'activitat fora de l'aplicació o compartir un informe.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Configuració

Obre **Configuració** des del lateral per personalitzar el comportament de l'aplicació.

Les pestanyes disponibles depenen de la plataforma i del teu rol:

| Pestanya               | Ordinador | Web (administrador) | Web (usuari normal) |
  |------------------------|:-------:|:-------------------:|:-------------------:|
  | Configuració general   |   sí    |         sí          |         sí          |
  | Models                 |   sí    |         sí          |         sí          |
  | Idiomes                |   sí    |         sí          |         sí          |
  | Seguiment de costos    |   sí    |         sí          |         -           |
  | Indicacions de transformació |   sí    |         sí          |         sí          |
  | Usuaris                |    -    |         sí          |         -           |
  | Configuració de l'API        |   sí   |     sí     |         -          |
  | Quant a             |   sí   |     sí     |        sí         |

<br/>

> ℹ️ **NOTA**<br/>
> A la versió web, cada usuari té la seva pròpia configuració. Opcions com els models seleccionats, idiomes, opcions generals i els prompts de transformació es desen per usuari. Els canvis que facis no afecten als altres usuaris.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Configuració general

Utilitza **Configuració general** per controlar el comportament en escriure, si es desen els detalls d'execució per a l'**Historial** i l'aparença.

**Comportament**

- **Comportament de la tecla ENTRAR** determina si `Enter` executa la tasca o insereix una nova línia.
- **Traducció automàtica en enganxar** inicia la traducció tan bon punt enganxeu text.
- **Còpia automàtica del resultat al porta-retalls** copia els resultats correctes automàticament.
- **Traducció en temps real (mentre s'escriu)** tradueix mentre escriviu.
- **Temps d'espera (ms)** estableix el temps d'espera per a la traducció en temps real.

**Historial**

- **Mantenir l'historial d'execució** controla si cada traducció, reescriptura i transformació desa el **text d'entrada i de sortida** per a la vista lateral d'**[Historial](#history)**. Desactivar-ho demana confirmació; si confirmes, el text emmagatzemat s'elimina de la base de dades.
- **Eliminar les dades de l'historial** et permet eliminar el text emmagatzemat segons l'antiguitat (per exemple, més antic que uns quants mesos, o **totes les dades (netejar)**) mitjançant **Esborra dades**. Això només afecta el text d'execució desat per a la vista d'**Historial**; **no** elimina els totals de cost ni d'ús. Per eliminar o retallar dades de **cost**, utilitza [**Configuració** > **Seguiment de costos**](#cost-tracking).

**Aparença**

- **Mostra la informació de cost en les accions** controla la visualització del cost per operació (si està disponible) i el cost total als panells de sortida de Traduir, Reescriure i Transformar.
- **Xifres decimals del cost** canvia com es mostren els decimals del cost.
- **Només web:** **mostra un marge al voltant de l'aplicació** afegeix espai addicional al voltant de la interfície.
- **Familia de tipus de lletra** canvia el tipus de lletra dels panells de text.
- **Mida** canvia la mida del tipus de lletra.

**Còpia de seguretat de la configuració**

- **Inclou dades d'ús en la còpia de seguretat** - quan està activat, el ZIP també conté l'historial d'execució i dades de crides a l'API. 
- **Còpia de seguretat de la configuració** - crea un únic ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` en UTC per defecte) amb `config.json`, `state.json`, clau d'encriptació opcional, usuaris, preferències, indicacions personalitzades i dades d'ús si ho heu habilitat. Després d'una còpia de seguretat correcta, la confirmació mostra el nom del fitxer desat.
- **Restaura des de còpia de seguretat** - obre primer un **diàleg de confirmació**. Trieu el fitxer ZIP de còpia de seguretat dins del diàleg (**Navega** / selector de fitxers o arrossega i deixa anar on sigui compatible), després reviseu les opcions:
  - **Restaura les dades d'ús** - importa l'ús/historial del ZIP quan es va fer la còpia amb les dades d'ús incloses; deixeu-ho desactivat si només voleu configuracions i indicacions.
  - **Esborra les dades d'ús antigues abans de restaurar** - elimina l'ús/historial existent en aquesta instal·lació abans d'aplicar la còpia de seguretat (opcional; utilitzeu-ho quan vulgueu un reemplaçament net).

Les còpies de seguretat creades tant a la versió web com d'escriptori es poden restaurar a l'altra. En restaurar una còpia de seguretat d'escriptori a la versió web, les dades es restauraran a l'usuari administrador.

<br/>

<a id="models"></a>
### Models

Utilitza **Configuració** > **Models** per triar quins models apareixen a la barra d'eines.

![Settings Models tab](../images/screenshots/ca/settings-models.png)

La pàgina té dues llistes:

- **Models disponibles** a l'esquerra
- **Models seleccionats** a la dreta

Els controls útils inclouen:

- **Cerca models...** per trobar un model pel nom
- **Xips de Proveïdor** per reduir la llista a un motor (OpenRouter, OpenAI, Ollama, …)
- **Només gratuïts** per mostrar només models gratuïts
- **Actualitza** per tornar a carregar la llista
- **Expandeix-ho tot** i **Redueix-ho tot** quan esteu ordenant per proveïdor

Els identificadors de model inclouen el prefix del proveïdor (per exemple `openrouter/…` vs `openai/…`). Les insígnies com **OpenAI (OpenRouter)** vs **OpenAI (direct)** mostren com s'enruta el trànsit.

> ℹ️ **NOTA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) és un model de ruteig, no un model de xat general: la seva resposta és JSON que descriu els cossos de les sol·licituds de l'API d'OpenRouter (per exemple un array `requests` amb `model` i `messages`). Si l'utilitzeu per a **Tradueix**, **Reescriptura** o **Transformació**, el tauler de sortida mostrarà aquest JSON en lloc del text finalitzat. Trieu un model de text normal per a aquestes tasques. Consulteu la [pàgina del model Body Builder](https://openrouter.ai/openrouter/bodybuilder) a OpenRouter.

Accions:

- Per afegir un model, feu clic a **Afegir** o en qualsevol lloc de l'entrada.

- Per eliminar un model, feu clic a **X** al costat del model a **Models seleccionats** o a **Seleccionat** a l'entrada a Models disponibles.

- Per esborrar la llista, feu clic a **Desseleccionar-ho tot**. El model gratuït obligatori romandrà a la llista.

<br/>

> ℹ️ **NOTA**<br/>
> Si no voleu afegir crèdits a OpenRouter immediatament, comenceu activant **Només gratuïts** i trieu els models gratuïts (no es requereix targeta de crèdit). També podeu utilitzar Ollama per executar models localment sense cap clau API.

<br/>

<a id="languages"></a>
### Idiomes

Utilitzeu **Configuració** > **Idiomes** per organitzar les llistes d'idiomes utilitzades a l'aplicació.

- Els **idiomes principals** estan fixats prop del principi de les llistes d'idiomes a **Tradueix** i **Transformació**.
- **Idioma personalitzat** us permet afegir un idioma que no estigui a la llista integrada.

Si afegiu un idioma personalitzat, apareixerà als selectors d'idioma al costat de les opcions integrades.

<br/>

<a id="cost-tracking"></a>
### Seguiment de costos

Utilitzeu **Configuració** > **Seguiment de costos** per gestionar la informació de costos.

- **Cost total** mostra el total acumulat.
- **Copia el valor** copia el total al porta-retalls.
- **Reinicia el cost** reinicia el total emmagatzemat a zero.
- **Sincronitza amb l'ús de la clau API** estableix el total perquè coincideixi amb l'ús informat per la vostra compte OpenRouter (només OpenRouter).
- **Ús de la clau API** mostra detalls d'ús d'OpenRouter, si estan disponibles.
- **Esborra les dades de cost** elimina totes les dades, o només les entrades anteriors a una data seleccionada.

**Seguiment de costos:** Quan utilitzeu models d'OpenRouter, l'aplicació mostra l'ús real i el desemborsament basat en la informació de costos d'OpenRouter. Per a tots els altres proveïdors, l'aplicació estima els costos utilitzant els preus publicats per OpenRouter; si no està disponible un preu, l'estimació pot ser zero.

<br/>

> ℹ️ **NOTA**<br/>
>  **Totes les xifres de cost són estimacions només per a la vostra referència, no són factures oficials.**

<br/>

> ⚠️ **AVÍS**<br/>
> L'eliminació de dades no es pot desfer. Abans d'esborrar, assegureu-vos de fer una còpia de seguretat o exportar les dades mitjançant [**Historial**](#history)
> o [**Tauler** > **Totes les crides**](#dashboard-tabs); si no, es perdran permanentment.
> Tota l'historia d'entrada/sortida relacionada amb cada entrada de crida API també s'esborrarà.

<br/>

<a id="transform-prompts"></a>
### Prompts de transformació

Utilitzeu **Configuració** > **Prompts de transformació** per gestionar els prompts en bloc.

Podeu:

- reviseu les indicacions desades
- esborreu indicacions
- importeu indicacions des d'un fitxer
- exporteu indicacions per fer-ne còpia de seguretat o compartir-les
- carregueu indicacions de mostra a la llista d'indicacions

<br/>

<a id="users"></a>
### Usuaris

Utilitzeu **Usuaris** per gestionar comptes d'usuari a la versió web. Podeu afegir usuaris, actualitzar-ne les dades, restablir contrasenyes i esborrar comptes.

<br/>

<a id="api-config"></a>
### Configuració de l'API

Els proveïdors compatibles són: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, i **Ollama** (models locals mitjançant una URL base). Només cal que configureu els proveïdors que utilitzeu.

**Aplicació web: només administrador**

Les claus API es configuren mitjançant variables d'entorn del sistema o de Docker; no s'introdueixen a la interfície web. Aquesta pàgina mostra quins proveïdors tenen una clau configurada i us permet provar-los fent clic al botó **`Test`**.

<br/>

> ℹ️ **NOTA**<br/>
> Per canviar una clau API, actualitzeu la variable d'entorn a la configuració del sistema o de Docker i reinicieu el servidor o el contenidor.

> ℹ️ **NOTA**<br/>
> Les **còpies de seguretat de la configuració** (vegeu [**Configuració General** → Còpia de seguretat de la configuració](#general-settings)) poden incloure claus de proveïdor **resoltes** dins el fitxer `config.json` del ZIP. Restaurar aquest ZIP **no** copia aquestes claus al fitxer de configuració persistent del servidor; les claus actives continuen provinent de l'entorn i de l'estat del fitxer existent, tal com s'indica allà.

<br/>

**Aplicació d'escriptori**

Utilitzeu **Configuració de l'API** per desar les claus API de cada proveïdor que utilitzeu. Per a Ollama, introduïu l'**URL base** en lloc d'una clau API.

<br/>

> 💡 **Consell** <br/>
> Si no voleu utilitzar una clau API ni pagar per l'ús, podeu [descarregar Ollama](https://ollama.com) i executar models (com ara `translategemma:4b`) localment al vostre ordinador de forma gratuïta. Alternativament, podeu crear un compte gratuït a OpenRouter (sense necessitat de targeta de crèdit) per utilitzar els seus models gratuïts, o obtenir una clau API gratuïta de Cerebras, Google, Groq o Mistral AI.

<br/>

- Afegiu només els proveïdors que necessiteu. A **Configuració** > **Models**, cada identificador de model comença amb el proveïdor (per exemple `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Per afegir una clau API, introduïu el valor al camp de text i feu clic a **`Save`**. Per substituir una clau existent, feu clic a **`Edit`**. Per verificar que una clau funciona, feu clic a **`Test`**. Per a l'URL base d'Ollama, sempre feu clic a **`Test`** per comprovar la connexió.

<br/>

> ℹ️ **NOTA**<br/>
> No podeu veure el valor actual d'una clau API. Només podeu substituir-la utilitzant el botó **`Edit`**.
> Les claus API es desen xifrades a la configuració.

<br/>

<a id="about"></a>
### Quant a

La pestanya **Quant a** mostra:

- el nom de l'aplicació
- el número de versió
- la data de compilació
- un enllaç al repositori del projecte

<br/><br/>

<a id="common-issues"></a>
## Problemes freqüents

Si alguna cosa no funciona com s'espera, comproveu primer els punts següents.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### L'aplicació no tradueix, reescriu ni transforma el text

Comproveu que:

- hagueu seleccionat un model a la barra d'eines
- almenys un model aparegui a [**Configuració** > **Models**](#models)
- la configuració de l'API funcioni

Si esteu utilitzant l'aplicació d'escriptori:

1. Obriu [**Configuració** > **Configuració de l'API**](#api-config).
2. Comproveu que s'hagi desat almenys una clau d'API.
3. Feu clic a **Prova** al costat del proveïdor per confirmar que la clau funcioni.

<br/>

<a id="the-model-list-is-empty"></a>
### La llista de models està buida

Obriu [**Configuració** > **Models**](#models) i feu clic a **Actualitza**.

Si cal:

- cerqueu un model
- activeu **Només gratuïts**
- afegiu un o més models a **Models seleccionats**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### El resultat és massa lent o massa car

Proveu una o més d'aquestes opcions:

- trieu un model diferent
- utilitzeu una entrada més curta
- desactiveu la **Traducció en temps real (mentre s'escriu)** a [**Configuració** > **Configuració General**](#general-settings)
- utilitzeu models gratuïts per a tasques senzilles (vegeu [Models](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### La interfície està en l'idioma incorrecte

Feu clic a la icona del globus a la [barra d'eines](#toolbar) i trieu el vostre **Idioma de la interfície** preferit.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### El text és massa petit o difícil de llegir

Obre [**Configuració** > **Configuració General**](#general-settings) i canvia:

- **Familia de tipus de lletra**
- **Mida**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Els gràfics del tauler estan buits

Això és normal si:

- només utilitzes **models gratuïts** i estàs consultant les xifres de **cost** (poden ser zero); els gràfics de recompte de trucades d'**ús** a la pestanya **Resum** encara necessiten dades del període seleccionat
- el **filtre de temps** seleccionat no inclou el període en què es van fer les trucades: prova amb **Tots** per comprovar-ho

Si els gràfics continuen buits després de seleccionar **Tots**, comprova que les trucades apareixen a [**Historial**](#history) o a la pestanya **Totes les crides**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### El cost mostra «no disponible» o sembla incorrecte

Quan utilitzes models a través d'**OpenRouter**, l'aplicació mostra la despesa real informada per OpenRouter.

Per a **altres proveïdors** (OpenAI directe, Anthropic directe, etc.), el cost s'estima a partir de les dades de preus publicades per OpenRouter. Si no es troba un preu coincident per a un model, el cost apareixerà com a **no disponible** i no s'afegirà al total acumulat.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### El cost total no coincideix amb la meva factura del proveïdor

Totes les xifres de cost a l'aplicació són **estimacions només a efectes de referència**, no són factures oficials.

Perquè el total s'acosti més a la despesa real d'OpenRouter, obre [**Configuració** > **Seguiment de costos**](#cost-tracking) i fes clic a **Sincronitza amb l'ús de la clau API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### La pàgina d'historial no apareix a la barra lateral

Potser l'opció **Mantenir l'historial d'execució** està desactivada. Obre [**Configuració** > **Configuració General**](#general-settings) i actívala. Tingues en compte que activar-la no restaura les dades d'historial eliminades prèviament.

<br/>

<a id="web-app-session-expired"></a>
### Aplicació web: redirigit inesperadament a la pàgina d'inici de sessió

La teva sessió pot haver expirat. Torna a iniciar sessió. Si passa sovint, comprova la configuració del servidor per als paràmetres de durada de la sessió.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Administrador web: has oblidat o perdut la contrasenya

Això s'aplica a l'**aplicació web autoallotjada** (Docker), no a l'aplicació d'escriptori (Electron).

- Si un altre administrador encara pot iniciar sessió, pot obrir [**Configuració** > **Usuaris**](#users), seleccionar el compte i establir una **contrasenya nova** allà.
- Si estàs **bloquejat** però tens **accés shell** a la màquina o al contenidor, reinicia la contrasenya amb l'eina auxiliar que ve amb la imatge (substitueix `transrewrt` si has canviat el nom per defecte, i posa entre cometes la contrasenya si conté espais o caràcters especials):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

El nom d'usuari per defecte és `admin` si mai has creat altres comptes. Quan passes només un argument, es tracta com la contrasenya nova per a `admin`.

Si executeu des d'un **source checkout** en comptes de Docker, utilitzeu:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

L'script actualitza el registre d'usuari a la base de dades SQLite (i pot crear l'usuari `admin` si falta). Després de restablir, inicieu sessió amb la contrasenya nova.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### El tauler no mostra dades per a altres usuaris (web)

Només els **administradors** poden veure dades de tots els usuaris mitjançant el filtre **Usuari**. Els usuaris normals veuen només la seva pròpia activitat per disseny.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### He canviat un prompt i he perdut les edicions

Quan editeu un prompt, feu sempre clic a **Desa** abans de fer clic a **Tornar a Executar**.

<br/><br/>

<a id="quick-tips"></a>
## Consells ràpids

- Comenceu amb [**Traduir**](#translate) per assegurar-vos que la configuració funciona abans de passar a [**Reescriure**](#rewrite) o [**Transformar**](#transform).
- Utilitzeu [**Reescriure**](#rewrite) per millorar el text en l'ús diari.
- Utilitzeu [**Transformar**](#transform) quan necessiteu un flux de treball reutilitzable per a una tasca específica.
- Utilitzeu [**Tauler**](#dashboard) si voleu fer un seguiment de l'ús i el cost.
- Utilitzeu [**Historial**](#history) per revisar operacions anteriors i el text complet d'entrada/sortida.
- Exporteu regularment les indicacions si esteu creant una biblioteca d'indicacions que voleu conservar (vegeu [Indicacions de Transformació](#transform-prompts)) o si voleu compartir-les amb altres.

<br/><br/>

<a id="disclaimer"></a>
## Avís legal

Els noms dels productes i les icones pertanyen als seus respectius propietaris i s'utilitzen únicament amb finalitats d'identificació. Aquest programari no està afiliat ni patrocinat per cap de les marques esmentades.

<br/><br/>

<a id="license"></a>
## Llicència

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
