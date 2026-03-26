---
translated_at: "2026-03-26T00:28:42.137Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Guia d'usuari

<br/>

<a id="introduction"></a>
## Introducció

Transrewrt ajuda a treballar amb text de tres maneres principals:

- **Traduir** - convertir text d'un idioma a un altre.
- **Reescriure** - reformular un text en un estil diferent, com més clar, més curt o més formal.
- **Transformar** - processar text mitjançant instruccions personalitzades d'intel·ligència artificial anomenades instruccions (prompts).

<br/>

Aquesta guia explica com utilitzar l'aplicació un cop instal·lada i en execució. Per obtenir instruccions d'instal·lació, consulteu el document **[README](README.ca.md)** principal.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt està disponible com a aplicació d'escriptori per a Windows i Linux, i com a aplicació web autoposada. Aquesta guia es centra en l'ús diari de l'aplicació. Quan alguna característica només s'aplica a una versió, s'indica clarament.

<small>**Llegiu en altres idiomes:** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Nota sobre les traduccions de la interfície i de la documentació:** Tots els idiomes de la interfície excepte l'anglès (UK) original 
> s'han traduït mitjançant models d'intel·ligència artificial; pot haver-hi imprecisions o errors en l'expressió.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Taula de continguts** 

- [Abans de començar](#before-you-start)
  - [Com obtenir una clau d'API gratuïta d'OpenRouter (aplicació d'escriptori)](#how-to-get-a-free-openrouter-api-key-desktop-app)
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
  - [Executar una instrucció existent](#run-an-existing-prompt)
  - [Si encara no teniu cap instrucció](#if-you-have-no-prompts-yet)
  - [Crear una instrucció ràpidament](#create-a-prompt-quickly)
  - [Editar una instrucció](#edit-a-prompt)
  - [Provar una instrucció abans d'utilitzar-la](#test-a-prompt-before-using-it)
- [Tauler de control](#dashboard)
  - [Filtrar les dades](#filter-the-data)
  - [Pestanyes del tauler de control](#dashboard-tabs)
  - [Exportar dades](#export-data)
  - [Eliminar registres emmagatzemats d'un model](#delete-stored-records-for-a-model)
- [Historial](#history)
  - [Filtrar les dades](#filter-the-data-1)
  - [Exportar dades de l'historial](#export-history-data)
- [Configuració](#settings)
  - [Configuració general](#general-settings)
  - [Models](#models)
  - [Idiomes](#languages)
  - [Seguiment de costos](#cost-tracking)
  - [Instruccions de transformació](#transform-prompts)
  - [Usuaris](#users)
  - [Configuració d'API](#api-config)
  - [Quant a](#about)
- [Problemes habituals](#common-issues)
  - [L'aplicació no tradueix, reescriu ni transforma el text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [La llista de models és buida](#the-model-list-is-empty)
  - [El resultat és massa lent o massa car](#the-result-is-too-slow-or-too-expensive)
  - [La interfície està en l'idioma equivocat](#the-interface-is-in-the-wrong-language)
  - [El text és massa petit o difícil de llegir](#the-text-is-too-small-or-hard-to-read)
  - [Els gràfics del tauler de control estan buits](#dashboard-charts-are-empty)
  - [El cost mostra "no disponible" o sembla incorrecte](#cost-shows-not-available-or-seems-wrong)
  - [El cost total no coincideix amb la factura del proveïdor](#total-cost-does-not-match-my-provider-bill)
  - [La pàgina d'historial no apareix a la barra lateral](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicació web: redirecció inesperada a la pàgina d'inici de sessió](#web-app-redirected-to-the-login-page-unexpectedly)
  - [El tauler de control no mostra dades d'altres usuaris (web)](#dashboard-shows-no-data-for-other-users-web)
  - [He modificat una instrucció i he perdut els canvis](#i-changed-a-prompt-and-lost-the-edits)
- [Consells ràpids](#quick-tips)
- [Avís legal](#disclaimer)
- [Llicència](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Abans de començar

Per utilitzar el Transrewrt, necessiteu accés a, com a mínim, un proveïdor d’IA. Els proveïdors compatibles són: [OpenRouter](https://openrouter.ai) (que agrega molts models), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras i [Ollama](https://ollama.com) per a models locals.

No cal que trieu un model de pagament per començar. Apenès afegiu la vostra clau API d’OpenRouter, l’aplicació habilita automàticament una opció **gratuïta** integrada d’OpenRouter. Això us permet començar a traduir, reescriure i transformar textos immediatament. Alternativament, també podeu obtenir una clau API gratuïta de Cerebras, Google, Groq o Mistral AI.

En paraules senzilles:

- Un **model** és el motor d’IA que fa la feina. Els models es mostren amb un **prefix del proveïdor** (per exemple, `openrouter/…`, `openai/…`, `ollama/…`).
- Una **clau API** (o, per a Ollama, una **URL base**) és com l’aplicació s’ajusta a aquest proveïdor.

Si esteu utilitzant l’**aplicació d’escriptori**, afegiu claus a [**Configuració** > **API Config**](#api-config) per a cada proveïdor que utilitzeu. Si només utilitzeu OpenRouter, vegeu [Com obtenir una clau API](#how-to-get-an-api-key-desktop-app) més avall. Si no voleu utilitzar una clau API, podeu instal·lar Ollama (des de [ollama.com](https://ollama.com)) i utilitzar models locals en lloc, com ara `translategemma:4b`.

Si esteu utilitzant la **versió web**, el propietari del servidor configura els proveïdors amb variables d’entorn, per tant no podeu introduir claus API directament a l’aplicació.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Com obtenir una clau API d'OpenRouter gratuïta (aplicació d’escriptori)

Si esteu utilitzant l'aplicació d’escriptori, seguiu aquests passos:

1. Accediu a [OpenRouter](https://openrouter.ai) amb el vostre navegador web.
2. Creeu un compte o inicieu sessió.
3. Obriu la pàgina [Claus](https://openrouter.ai/keys).
4. Feu clic al botó per crear una nova clau API.
5. Assegneu un nom a la clau per poder-la identificar més endavant.
6. Copieu la nova clau API.
7. Torneu al Transrewrt i obriu **Configuració** > **Configuració d’API**.
8. Enganxeu la clau a **Clau API d'OpenRouter** (sota **Configuració** > **Configuració d’API**).
9. Feu clic a **Provar la clau d’OpenRouter** per assegurar-vos que funciona.

<br/><br/>

<a id="getting-started"></a>
## Primeres passes

Si és la primera vegada que utilitzeu el Transrewrt, seguiu aquest ordre:

1. Obriu l’aplicació.
2. Trieu el vostre **idioma d’interfície** de l’icona del món si cal.
3. Si esteu utilitzant l’**aplicació d’escriptori**, obriu [**Configuració** > **Configuració d’API**](#api-config), afegiu una clau API per a almenys un proveïdor (per exemple OpenRouter) i feu clic a **Provar** per verificar que funcioni.
4. Obriu [**Configuració** > **Models**](#models) i afegiu un o més models a **Models seleccionats**.
5. Obriu [**Configuració** > **Idiomes**](#languages) i trieu els vostres **Idiomes principals** si voleu que els idiomes que més utilitzeu apareguin primer.
6. Vés a **Traduir** i feu una traducció senzilla per comprovar que tot funciona.
7. Un cop funcioni, proveu **Reescriure** i després **Transformar**.

Aquest ordre és important. Això evita el problema més habitual en primer ús: intentar executar una tasca abans que l’aplicació tingui una connexió API operativa o un model seleccionat.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Parts principals de la finestra

L’aplicació es divideix en tres àrees principals:

- La **barra lateral** a l’esquerra.
- La **barra d’eines** a la part superior.
- L’**àrea de treball** al centre.

<br/>

<a id="sidebar"></a>
### Barra lateral

Utilitzeu la barra lateral per moure-us per l’aplicació. Podeu col·lapsar la barra lateral per tenir més espai fent clic a la icona al costat del logotip de l’aplicació.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/ca/sidebar.png" alt="Barra lateral de l’aplicació" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Traduir</strong> obre l’espai de treball de traducció.</li><br/>
        <li><strong>Reescriure</strong> obre l’espai de treball de reescriptura.</li><br/>
        <li><strong>Transformar</strong> obre l’espai de treball de missatges personalitzats.</li><br/>
        <li><strong>Dashboard</strong> mostra informació d’ús i costos.</li><br/>
        <li><strong>Configuració</strong> obre el panell de configuració.</li><br/>
        <li><strong>Historial</strong> mostra l'historial d'ús amb el text d'entrada i de sortida</li><br/>
        <li><strong>Usuari</strong> mostra el nom d'usuari de l'usuari identificat (només web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barra d'eines

La barra d'eines canvia lleugerament segons on es trobi a l'aplicació.

- A l'esquerra, mostra el nom de la pàgina actual.
- A la dreta, mostra el **selector de model** i el control d'**Idioma de la interfície**.

El **selector de model** permet triar quin motor d'IA utilitzar per a la tasca actual.

  ![Selector de model](../images/screenshots/ca/model-selector.png)

Alguns models gratuïts potser no estan sempre disponibles: de vegades estan desconnectats o tenen un límit d'ús. Si això passa, l'aplicació eliminarà automàticament aquest model de la llista disponible. Per controlar quins models apareixen, aneu a [**Configuració** > **Models**](#models) i editeu la vostra llista de models.
També podeu obrir la configuració del model directament fent clic a la icona del proveïdor a l'esquerra del nom del model a la barra d'eines.

<br/>

La **icona del globus + codi d'idioma** canvia l'idioma de la interfície de l'aplicació, com ara menús i botons. **No** canvia els idiomes de traducció utilitzats a **Traduir**.

  ![Selector d'idioma de la interfície](../images/screenshots/ca/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panells d'entrada i sortida

La majoria d'espais de treball utilitzen un panell d'**Entrada** esquerre i un panell de **Sortida** dret.

Cada panell també mostra:

| **Entrada**                                                          | **Sortida**                                                                                                                  |
|----------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| - Comptador de caràcters <br/>- Comptador de paraules <br/>- Comptador de paràgrafs   <br/> | - Temps que ha trigat la tasca<br/>- **TPS** (tokens per segon)<br/>- Comptadors de caràcters, paraules i paràgrafs<br/>- El model utilitzat |


Si us interessen els termes tècnics:

- **Token** significa un tros petit de text. Es pot pensar com una part d'una paraula o una paraula curta.
- **TPS** indica quants d'aquests trossos de text processa el model cada segon.

<br/>

També podeu controlar el cost de cada operació (si està disponible) i el cost total, activant l'opció `Mostrar informació de cost en les accions` a [**Configuració** > **Configuració general**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Traduir

Utilitzeu **Traduir** quan vulgueu convertir un text d'un idioma a un altre.

![Espai de treball de traducció](../images/screenshots/ca/translate.png)

<br/>

<a id="translate-text"></a>
### Traduir text

1. Obriu **Traduir**.
2. Trieu un idioma a **De**.
3. Trieu un idioma a **A**.
4. Trieu un model a la barra d'eines.
5. Escriviu o enganxeu el text a **Entrada**.
6. Feu clic a **Traduir**.
7. Llegiu el resultat a **Sortida**.
8. Utilitzeu el botó de còpia si voleu copiar el resultat.

<br/>

<a id="language-selection"></a>
### Selecció d'idioma

- **De** pot ser un idioma específic o **Detectar idioma**.
- **A** és l'idioma en què voleu el resultat.

Els vostres **Idiomes principals** seleccionats apareixen a la part superior de la llista. Podeu establir-los a [**Configuració** > **Idiomes**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Configuració útil de traducció

A [**Configuració** > **Configuració general**](#general-settings), podeu canviar el comportament de la traducció:

- **Traduir automàticament en enganxar** executa una traducció tan bon punt enganxeu text.
- **Copiar automàticament el resultat al porta-retalls** copia el resultat automàticament després d'una execució correcta.
- **Traducció en temps real (mentre escriviu)** executa traduccions mentre escriviu.
- **Temps d'espera (ms)** controla quan espera l'aplicació abans d'executar una traducció en temps real.
- **Enter** controla què passa quan premeu `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Reescriure

Utilitzeu **Reescriure** quan vulgueu millorar l'expressió sense canviar el significat principal.

![Espai de treball de reescritura](../images/screenshots/ca/rewrite.png)

Això és útil per a:

- corregir ortografia i gramàtica
- fer el text més clar
- fer el text més formal o menys formal
- escurçar o allargar el text
- fer que el text sembli més tècnic

<br/>

> 💡 **TIP**<br/>
> Quan utilitzeu el mode "**Corregir ortografia i gramàtica**", apareix un botó `Mostrar canvis` al panell de sortida.
> Feu clic en aquest botó per alternar la visualització de les correccions, mostrant o ocultant els canvis específics fets al vostre text.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>

## Transforma

Utilitzeu **Transforma** quan vulgueu que la IA segueixi un conjunt d'instruccions personalitzat.

![Espai de treball de Transforma](../images/screenshots/ca/transform.png)

Aquesta és l'àrea més flexible de l'aplicació. Podeu utilitzar-la per a tasques com ara:

- resumir notes
- convertir un text brut en un correu electrònic pulit
- extreure punts clau
- convertir text a un format específic
- qualsevol altra activitat personalitzada amb el text d'entrada

<br/>

<a id="run-an-existing-prompt"></a>
### Executa una instrucció existent

1. Obriu **Transforma**.
2. Trieu una instrucció de la llista d'instruccions.
3. Si apareix un quadre de **llengua d'objectiu**, trieu-ne una si ho desitgeu.
4. Escriviu o enganxeu text a **Entrada**.
5. Feu clic a **Transforma**.
6. Llegiu el resultat a **Sortida**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Si encara no teniu instruccions

Si la vostra llista d'instruccions és buida, feu clic a **Carrega instruccions de mostra**. Això afegeix exemples integrats perquè pugueu començar ràpidament.

<br/>

> ℹ️ **NOTA**<br/>
> Les instruccions de mostra es proporcionen en anglès. Després de carregar-les, podeu editar una instrucció i utilitzar **Tradueix instrucció** per traduir-la al vostre idioma.

<br/>

<a id="create-a-prompt-quickly"></a>
### Crea una instrucció ràpidament

La manera més ràpida de crear una instrucció és:

1. Feu clic a **Nova instrucció**.
2. Feu clic a **Genera instrucció**.
3. Descriviu què voleu que faci la instrucció.
4. Trieu un model.
5. Deixeu que l'aplicació us creï un esborrany.
6. Reviseu l'esborrany i feu clic a **Desa**.

![Genera instrucció](../images/screenshots/ca/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Edita una instrucció

Quan creeu o editeu una instrucció, l'editor apareix a l'esquerra i una àrea de proves apareix a la dreta.

![Editor d'instruccions de Transforma](../images/screenshots/ca/transform-prompt-edit.png)

Els camps principals són:

- **Nom de la instrucció**: el nom que es mostra a la llista d'instruccions.
- **Instruccions de la instrucció (opcional)**: una pista breu que es mostra a l'usuari quan s'executa la instrucció.
- **Paper de la IA**: el paper general assignat a la IA, com ara «Tu ets un assistent útil.»
- **Instruccions de la IA (una per línia)**: les regles específiques que voleu que segueixi la IA.
- **Descripció de la sortida**: una paraula breu que descriu el resultat, com ara «resum» o «reescritura».
- **Temperatura (0,0 → 1,0)**: com es comportarà el model; vegeu més avall.
- **Demana llengua d'objectiu**: afegeix un selector de llengua quan s'executa la instrucció.

Si no coneixeu el terme tècnic **Temperatura**, penseu-hi així:

- Una **temperatura més baixa** dona resultats més estables i previsibles.
- Una **temperatura més alta** dona més varietat i creativitat.

També podeu utilitzar:

- **`Genera instrucció`** per crear un esborrany nou a partir d'una descripció senzilla
- **`Millora instrucció`** per perfeccionar una instrucció existent
- **`Tradueix instrucció`** per traduir els camps de la instrucció

<br/>

> ⚠️ **AVÍS**<br/>
> Feu clic a **`Desa`** abans de fer clic a **`Torna a Executar`**. Si retròceu sense desar, es perdran els canvis.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Prova una instrucció abans d'utilitzar-la

El panell de proves de la dreta us permet provar la vostra instrucció amb text de mostra abans d'utilitzar-la en el treball diari.

Això és útil quan:

- esteu creant una nova instrucció
- esteu comparant dues versions d'una instrucció
- voleu comprovar el to, la longitud o el format de la sortida

<br/>

> ℹ️ **NOTA**<br/>
> Podeu exportar i importar instruccions desades a [**Configuració** > **Instruccions de transformació**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Tauler

Utilitzeu **Tauler** per veure quant esteu utilitzant l'aplicació i quin és el cost (per als models de pagament).

![Resum del tauler](../images/screenshots/ca/dashboard-summary.png)

<br/>

> ℹ️ **NOTA**<br/>
> Si només utilitzeu models gratuïts, els gràfics relacionats amb el cost quedaran buits.

<br/>

<a id="filter-the-data"></a>
### Filtra les dades

Utilitzeu els botons de filtre de dalt per canviar l'interval de temps.

![Filtres del tauler](../images/screenshots/ca/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> El filtre **Usuari** només és visible per als administradors en la versió web. Els usuaris normals no veuran aquest filtre, i no està disponible a l'aplicació d'escriptori.

<br/>

<a id="dashboard-tabs"></a>

### Pestanyes del taulell de control

- **Resum** et dóna una visió general de l'ús i del cost.
- **Per ús** detalla l'activitat per idioma de traducció, mode de reescriptura i indicació de transformació.
- **Per model** mostra quins models has utilitzat i quant han costat.
- **Per dia** mostra els totals diaris.
- **Tots els càrrecs** mostra tot l'historial de crides i et permet exportar-lo.

<br/>

<a id="export-data"></a>
### Exportar dades

Les taules del taulell de control poden exportar les dades en:

- **JSON**
- **CSV**
- **XLSX**

Això és útil si vols revisar l'activitat fora de l'aplicació o compartir un informe.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Eliminar registres emmagatzemats per a un model

A **Per model** o **Tots els càrrecs**, pots eliminar els registres emmagatzemats per a un model fent clic a la icona de "paperera".

> ⚠️ **ADVERTÈNCIA**<br/>
> L'eliminació de registres emmagatzemats no es pot desfer. Utilitza aquesta funció només si estàs segur de què ja no necessites aquest historial.

Per esborrar totes les dades o eliminar registres segons la seva antiguitat, ves a [**Configuració** > **Seguiment de costos**](#cost-tracking). Allí trobaràs opcions per eliminar totes les dades emmagatzemades o només les dades anteriors a una data determinada.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Històric

Fes clic a **Històric** per veure l'historial de les teves accions dins de **Transrewrt**, incloent l'entrada i sortida de cada operació.

![Pàgina d'historial](../images/screenshots/ca/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrar les dades

**Històric** utilitza els mateixos filtres que la pàgina **Taulell de control**. Utilitza'ls per seleccionar el rang de temps.

![Filtres del taulell de control](../images/screenshots/ca/dashboard-filter.png)

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

Obre **Configuració** des de la barra lateral per personalitzar el comportament de l'aplicació.

Les pestanyes disponibles depenen de la plataforma i del teu rol:

  | Pestanya                  | Escriptori | Web (admin) | Web (usuari normal) |
  |---------------------------|:----------:|:-----------:|:-------------------:|
  | Configuració general      |     sí     |     sí      |          sí          |
  | Models                    |     sí     |     sí      |          sí          |
  | Idiomes                   |     sí     |     sí      |          sí          |
  | Seguiment de costos       |     sí     |     sí      |           —          |
  | Indicacions de transformació |     sí     |     sí      |          sí          |
  | Usuaris                   |     —      |     sí      |           —          |
  | Configuració d'API        |     sí     |     sí      |           —          |
  | Quant a                   |     sí     |     sí      |          sí          |

<br/>

> ℹ️ **NOTA**<br/>
> A la versió web, cada usuari té la seva pròpia configuració. Paràmetres com els models seleccionats, idiomes, opcions generals i indicacions de transformació s'emmagatzemen per a cada usuari. Els canvis que facis no afecten als altres usuaris.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Configuració general

Utilitza **Configuració general** per controlar el comportament en escriure, si es desen els detalls d'execució per a l'**Historial** i l'aparença.

**Comportament**

- **Comportament de la tecla ENTER** determina si la tecla `Enter` executa la tasca o insereix una línia nova.
- **Traduir automàticament en enganxar** inicia la traducció tan aviat com enganxis text.
- **Copiar automàticament el resultat al porta-retalls** copia automàticament els resultats correctes.
- **Traducció en temps real (mentre esscrius)** tradueix mentre escrius.
- **Temps d'espera (ms)** estableix el temps d'espera per a la traducció en temps real.

**Historial**

- **Mantenir l'historial d'execució** controla si cada traducció, reescriptura i transformació desa el **text d'entrada i de sortida** per a la vista [**Històric**](#history) de la barra lateral. Desactivar aquesta opció demanarà confirmació; si confirmes, el text històric emmagatzemat s'eliminarà de la base de dades.
- **Eliminar dades d'historial** permet eliminar el text desat segons l'antiguitat (per exemple, anterior a uns quants mesos, o **totes les dades (neteja)**) mitjançant **Eliminar dades**. Això només afecta el text d'execució desat per a la vista **Històric**; **no** elimina els costos ni els totals d'ús. Per eliminar o retallar dades de **cost**, utilitza [**Configuració** > **Seguiment de costos**](#cost-tracking).

**Aparença**

- **Mostrar informació de cost a les accions** controla la visualització del cost per operació (si està disponible) i el cost total als panells de sortida de Traduir, Reescriure i Transformar.
- **Xifres decimals del cost** canvia com es mostren els decimals del cost.
- **Només web:** **mostrar un marge al voltant de l'aplicació** afegeix espai extra al voltant de la interfície.
- **Font** canvia la lletra dels panells de text.
- **Mida** canvia la mida de la lletra.


<br/>

<a id="models"></a>

### Models

Utilitza **Configuració** > **Models** per triar quins models apareixen a la barra d'eines.

![Configuració, pestanya de models](../images/screenshots/ca/settings-models.png)

La pàgina té dues llistes:

- **Models disponibles** a l'esquerra
- **Models seleccionats** a la dreta

Els controls útils inclouen:

- **Cercar models...** per trobar un model pel nom
- **Xips de proveïdor** per reduir la llista a un motor (OpenRouter, OpenAI, Ollama, …)
- **Només gratuïts** per mostrar només models gratuïts
- **Actualitzar** per tornar a carregar la llista
- **Expandir tot** i **Recol·lar tot** quan esteu ordenant per proveïdor

Els identificadors de model inclouen el prefix del proveïdor (per exemple `openrouter/…` vs `openai/…`). Les insígnies com ara **OpenAI (OpenRouter)** vs **OpenAI (directe)** indiquen com s'enruta el trànsit.

> ℹ️ **NOTA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) és un model de ràuter, no un model de xat general: la seva resposta és JSON que descriu els cossos de sol·licitud de l'API OpenRouter (per exemple una matriu `requests` amb `model` i `messages`). Si l'utilitzeu per a **Traduir**, **Reescriure** o **Transformar**, el panell de sortida mostrarà aquest JSON en lloc del text acabat. Trieu un model de text normal per a aquestes tasques. Consulteu la [pàgina del model Body Builder](https://openrouter.ai/openrouter/bodybuilder) a OpenRouter.

Accions:

 - Per afegir un model, feu clic a **Afegir** o a qualsevol lloc de l'entrada.

 - Per eliminar un model, feu clic a **X** al costat del seu nom a **Models seleccionats** o a **Seleccionat** a l'entrada dels Models disponibles.

 - Per netejar la llista, feu clic a **Deseleccionar-ho tot**. El model gratuït necessari romandrà a la llista.

<br/>

> ℹ️ **NOTA**<br/>
> Si no voleu afegir crèdits a OpenRouter immediatament, comenceu marcant **Només gratuïts** i triant els models gratuïts (sense targeta de crèdit necessària). També podeu utilitzar Ollama per executar models localment sense cap clau API.

<br/>

<a id="languages"></a>
### Idiomes

Utilitza **Configuració** > **Idiomes** per organitzar les llistes d'idiomes utilitzades a l'aplicació.

- **Els idiomes principals** es fixen prop del principi de les llistes d'idiomes a **Traduir** i **Transformar**.
- **Idioma personalitzat** et permet afegir un idioma que no està a la llista integrada.

Si afegiu un idioma personalitzat, apareixerà als selectors d'idioma al costat de les opcions integrades.

<br/>

<a id="cost-tracking"></a>
### Seguiment de costos

Utilitza **Configuració** > **Seguiment de costos** per gestionar la informació de costos.

- **Cost total** mostra el total acumulat.
- **Copiar valor** copia el total al porta-retalls.
- **Reiniciar cost** reinicia el total emmagatzemat a zero.
- **Sincronitzar amb l’ús de la clau API** estableix el total perquè coincideixi amb l'ús indicat al vostre compte OpenRouter (només OpenRouter).
- **Ús de la clau API** mostra detalls d'ús d'OpenRouter, si estan disponibles.
- **Eliminar dades de cost** elimina totes les dades, o només les entrades anteriors a una data seleccionada.

**Seguiment de costos:** Quan utilitzeu models d'OpenRouter, l'aplicació mostra el vostre ús i despeses reals basades en la informació de cost d'OpenRouter. Per a tots els altres proveïdors, l'aplicació calcula els costos utilitzant els preus publicats per OpenRouter; si no està disponible un preu, l'estimació pot ser zero.

<br/>

> ℹ️ **NOTA**<br/>
> Totes les xifres de cost són estimacions de referència, no factures oficials.

<br/>

> ⚠️ **ADVERTÈNCIA**<br/>
> La supressió de dades no es pot desfer. Abans d’eliminar, assegureu-vos de fer una còpia de seguretat dels vostres dades o exportar-les mitjançant [**Historial**](#history) 
> o [**Taulell** > **Totes les crides**](#dashboard-tabs), altrament es perdran permanentment.
> Tota la història d'entrada/sortida relacionada amb cada entrada de crida API també s'eliminarà.

<br/>

<a id="transform-prompts"></a>
### Prompts de transformació

Utilitza **Configuració** > **Prompts de transformació** per gestionar els prompts en bloc.

Pots:

- revisar els teus prompts desats
- eliminar prompts
- importar prompts des d’un fitxer
- exportar prompts per a còpia de seguretat o compartició

<br/>

<a id="users"></a>
### Usuaris

Utilitza **Usuaris** per gestionar comptes d'usuari a la versió web. Pots afegir usuaris, actualitzar-ne les dades, restablir contrasenyes i eliminar comptes.

<br/>

<a id="api-config"></a>
### Configuració d’API

Els proveïdors compatibles són: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras i **Ollama** (models locals mitjançant una URL base). Només necessites configurar els proveïdors que utilitzis.

**Aplicació web: només administrador**

Les claus d'API es configuren mitjançant variables d'entorn del sistema o de Docker — no s’introdueixen a la interfície web. Aquesta pàgina mostra quins proveïdors tenen una clau configurada i et permet provar cada un fent clic al botó **`Provar`**.

<br/>

> ℹ️ **NOTA**<br/>
> Per canviar una clau d'API, actualitza la variable d'entorn a la configuració del sistema o de Docker i reinicia el servidor o el contenidor.

<br/>

**Aplicació d’escriptori**

Utilitza **Configuració d’API** per desar les claus d'API per a cada proveïdor que utilitzis. Per a Ollama, introdueix l'**URL base** en lloc d'una clau d'API.

<br/>

> 💡 **Consell** <br/>
> Si no vols utilitzar una clau d'API ni pagar per l'ús, pots [descarregar Ollama](https://ollama.com) i executar models (com ara `translategemma:4b`) localment al teu ordinador gratuïtament. Alternativament, pots crear un compte gratuït a OpenRouter (sense targeta de crèdit necessària) per utilitzar els seus models gratuïts, o obtenir una clau d'API gratuïta de Cerebras, Google, Groq o Mistral AI.

<br/>

- Afegeix només els proveïdors que necessitis. A **Configuració** > **Models**, cada identificador de model comença amb el proveïdor (per exemple `openrouter/openrouter/gratuït`, `openai/gpt-4o`, `ollama/llama3`).

Per afegir una clau d'API, introdueix el valor al camp de text i fes clic a **`Desar`**. Per substituir una clau existent, fes clic a **`Editar`**. Per verificar que una clau funciona, fes clic a **`Provar`**. Pel que fa a l'URL base d’Ollama, fes sempre clic a **`Provar`** per comprovar la connexió.

<br/>

> ℹ️ **NOTA**<br/>
> No podeu veure el valor actual d’una clau d'API. Només podeu substituir-la utilitzant el botó **`Editar`**.
> Les claus d’API es desen xifrades a la configuració.

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

Si alguna cosa no funciona com s'espera, comproveu primer els següents punts.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### L'aplicació no tradueix, reescriu ni transforma el text

Comproveu que:

- hàgiu seleccionat un model a la barra d'eines
- almenys un model aparegui a [**Configuració** > **Models**](#models)
- la vostra configuració d'API funciona

Si esteu utilitzant l'aplicació d'escriptori:

1. Obriu [**Configuració** > **Configuració d'API**](#api-config).
2. Comproveu que s'hagi desat almenys una clau d'API.
3. Feu clic a **Prova** al costat del proveïdor per confirmar que la clau funcioni.

<br/>

<a id="the-model-list-is-empty"></a>
### La llista de models està buida

Obriu [**Configuració** > **Models**](#models) i cliqueu **Actualitza**.

Si cal:

- cerqueu un model
- activeu **Només gratuïts**
- afegiu un o més models a **Models seleccionats**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### El resultat és massa lent o massa car

Proveu una o més de les següents opcions:

- trieu un model diferent
- utilitzeu una entrada més curta
- desactiveu **Traducció en temps real (mentre s'escriu)** a [**Configuració** > **Configuració general**](#general-settings)
- utilitzeu models gratuïts per a tasques simples (vegeu [Models](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### La interfície està en l'idioma equivocat

Feu clic a la icona del globus a la [barra d'eines](#toolbar) i trieu el vostre **Idioma de la interfície** preferit.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### El text és massa petit o difícil de llegir

Obriu [**Configuració** > **Configuració general**](#general-settings) i canvieu:

- **Familia de la tipografia**
- **Mida**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Els gràfics del tauler estan buits

Això és normal si:

- només utilitzeu **models gratuïts** (els gràfics de costos estaràn buits)
- el **filtre de temps** seleccionat no inclou el període en què es van fer les crides — proveu amb **Tot** per comprovar

Si els gràfics segueixen buits després de seleccionar **Tot**, confirmeu que apareixen crides a [**Històric**](#history) o a la pestanya **Totes les crides**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### El cost mostra "no disponible" o sembla incorrecte

Quan utilitzeu models a través d'**OpenRouter**, l'aplicació mostra el cost real que informa OpenRouter.

Per als **altres proveïdors** (OpenAI directe, Anthropic directe, etc.), el cost es calcula a partir de les dades de preus publicades per OpenRouter. Si no es troba una tarifa coincident per a un model, el cost apareixerà com a **no disponible** i no es sumarà al vostre total acumulat.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### El cost total no coincideix amb la factura del meu proveïdor

Tots els costos de l'aplicació són **estimacions només a títol informatiu**, no són factures oficials.

Per fer que el total s'acosti més al vostre cost real d'OpenRouter, obriu [**Configuració** > **Seguiment de costos**](#cost-tracking) i feu clic a **Sincronitza amb l'ús de la clau d'API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### La pàgina d'històric no apareix al costat

L'opció **Mantenir l'historial d'execució** pot estar desactivada. Obriu [**Configuració** > **Configuració general**](#general-settings) i activeu-la. Tingueu en compte que activar-ho no recupera les dades d'historial esborrades anteriorment.

<br/>

<a id="web-app-session-expired"></a>
### Aplicació web: redirecció inesperada a la pàgina d'inici de sessió

La vostra sessió pot haver expirat. Inicieu la sessió de nou. Si passa sovint, comproveu la configuració del servidor sobre el temps de vida de les sessions.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### El tauler no mostra dades d'altres usuaris (web)

Només poden visualitzar dades de tots els usuaris mitjançant el **filtre d'Usuari** els **administradors**. Per disseny, els usuaris normals només veuen la seva pròpia activitat.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### He modificat una indicació i he perdut els canvis

Quan editeu una indicació, feu sempre clic a **Desa** abans de fer clic a **Torna a Executar**.

<br/><br/>

<a id="quick-tips"></a>
## Consells ràpids

- Comenceu amb [**Traduir**](#translate) per assegurar-vos que la vostra configuració funciona abans de passar a [**Reescriure**](#rewrite) o [**Transformar**](#transform).
- Utilitzeu [**Reescriure**](#rewrite) per a millores habituals del text.
- Utilitzeu [**Transformar**](#transform) quan necessiteu un procés reiterables per a una tasca específica.
- Utilitzeu [**Tauler**](#dashboard) si voleu fer un seguiment de l'ús i el cost.
- Utilitzeu [**Històric**](#history) per revisar operacions anteriors i el text complet d'entrada i sortida.
- Exporteu regularment les indicacions si esteu creant una biblioteca d'indicacions que voleu conservar (vegeu [Indicacions de transformació](#transform-prompts)) o si voleu compartir-les amb altres.

<br/><br/>

<a id="disclaimer"></a>

## Avís legal

Els noms i les icones dels productes pertanyen als seus respectius propietaris i s'utilitzen només amb finalitats d'identificació. Aquest programari no té cap relació ni està endosat per cap de les marques esmentades.

<br/><br/>

<a id="license"></a>
## Llicència

Copyright © 2026 Waldemar Scudeller Jr.

[Llicència Apache 2.0](LICENSE)