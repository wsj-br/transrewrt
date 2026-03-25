---
translated_at: "2026-03-25T21:02:55.603Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Guia de l'usuari

<br/>

<a id="introduction"></a>
## Introducció

Transrewrt us ajuda a treballar amb text de tres maneres principals:

- **Traduir** - convertir text d'un idioma a un altre.
- **Reescriure** - reformular el text amb un estil diferent, com ara més clar, més curt o més formal.
- **Transformar** - processar text mitjançant instruccions d'IA personalitzades anomenades patrons.

<br/>

Aquesta guia explica com utilitzar l'aplicació un cop instal·lada i en funcionament. Per obtenir detalls sobre la instal·lació, consulteu el fitxer **[README](README.ca.md)** principal.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt està disponible com a aplicació d'escriptori per a Windows i Linux, i com a aplicació web autoallotjada. Aquesta guia es centra en l'ús diari de l'aplicació. Quan alguna funcionalitat només s'aplica a una versió, això es marca clarament.

<small>**Llegeix en altres idiomes:** [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Nota sobre les traduccions de la interfície i la documentació:** Tots els idiomes de la interfície, excepte l'anglès original (UK), 
> s'han traduït mitjançant models d'IA; la redacció pot ser imprecisa o contenir errors.

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
  - [Ajusts útils de traducció](#helpful-translation-settings)
- [Reescriure](#rewrite)
- [Transformar](#transform)
  - [Executar un patró existent](#run-an-existing-prompt)
  - [Si encara no teniu cap patró](#if-you-have-no-prompts-yet)
  - [Crear un patró ràpidament](#create-a-prompt-quickly)
  - [Editar un patró](#edit-a-prompt)
  - [Provar un patró abans d'usar-lo](#test-a-prompt-before-using-it)
- [Tauler de control](#dashboard)
  - [Filtrar les dades](#filter-the-data)
  - [Fitxes del tauler de control](#dashboard-tabs)
  - [Exportar dades](#export-data)
  - [Eliminar registres emmagatzemats per a un model](#delete-stored-records-for-a-model)
- [Historial](#history)
  - [Filtrar les dades](#filter-the-data-1)
  - [Exportar les dades de l'historial](#export-history-data)
- [Configuració](#settings)
  - [Configuració general](#general-settings)
  - [Models](#models)
  - [Idiomes](#languages)
  - [Seguiment de costos](#cost-tracking)
  - [Patrons de transformació](#transform-prompts)
  - [Usuaris](#users)
  - [Configuració d'API](#api-config)
  - [Quant a](#about)
- [Problemes habituals](#common-issues)
  - [L'aplicació no tradueix, reescriu ni transforma el text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [La llista de models és buida](#the-model-list-is-empty)
  - [El resultat és massa lent o massa car](#the-result-is-too-slow-or-too-expensive)
  - [La interfície està en l'idioma incorrecte](#the-interface-is-in-the-wrong-language)
  - [El text és massa petit o difícil de llegir](#the-text-is-too-small-or-hard-to-read)
  - [Els gràfics del tauler de control estan buits](#dashboard-charts-are-empty)
  - [El cost mostra «no disponible» o sembla incorrecte](#cost-shows-not-available-or-seems-wrong)
  - [El cost total no coincideix amb la factura del proveïdor](#total-cost-does-not-match-my-provider-bill)
  - [La pàgina d'historial no apareix a la barra lateral](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicació web: redirigit inesperadament a la pàgina d'inici de sessió](#web-app-redirected-to-the-login-page-unexpectedly)
  - [El tauler de control no mostra dades d'altres usuaris (web)](#dashboard-shows-no-data-for-other-users-web)
  - [He canviat un patró i he perdut les edicions](#i-changed-a-prompt-and-lost-the-edits)
- [Consells ràpids](#quick-tips)
- [Avís legal](#disclaimer)
- [Llicència](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Abans de començar

Per utilitzar Transrewrt, necessiteu accés a com a mínim un proveïdor d'IA. Els proveïdors compatibles són: [OpenRouter](https://openrouter.ai) (que agrega molts models), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras i [Ollama](https://ollama.com) per a models locals.

No cal que seleccioneu un model de pagament per començar. En quant afegiu la vostra clau d'API d'OpenRouter, l'aplicació habilita automàticament una opció integrada **gratuita** d'OpenRouter. Això us permet començar a traduir, reescriure i transformar text immediatament. Alternativament, també podeu obtenir una clau d'API gratuïta de Cerebras, Google, Groq o Mistral AI.

En paraules senzilles:

- Un **model** és el motor d'IA que fa la feina. Els models es mostren amb un **prefix del proveïdor** (per exemple `openrouter/…`, `openai/…`, `ollama/…`).
- Una **clau d'API** (o, per a Ollama, una **URL base**) és com l'aplicació contacta amb aquest proveïdor.

Si esteu utilitzant l'**aplicació d'escriptori**, afegiu les claus a [**Configuració** > **Configuració d'API**](#api-config) per a cada proveïdor que utilitzeu. Per a ús només amb OpenRouter, consulteu a sota [Com obtenir una clau d'API](#how-to-get-an-api-key-desktop-app). Si no voleu utilitzar una clau d'API, podeu instal·lar Ollama (des de [ollama.com](https://ollama.com)) i utilitzar models locals en lloc, com ara `translategemma:4b`.

Si esteu utilitzant la **versió web**, el propietari del servidor configura els proveïdors mitjançant variables d'entorn, així que no podreu introduir claus d'API directament a l'aplicació.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Com obtenir una clau d'API gratuïta d'OpenRouter (aplicació d'escriptori)

Si esteu utilitzant l'aplicació d'escriptori, seguiu aquests passos:

1. Accediu a [OpenRouter](https://openrouter.ai) amb el vostre navegador web.
2. Creeu un compte o inicieu sessió.
3. Obriu la pàgina de [Claves](https://openrouter.ai/keys).
4. Feu clic al botó per crear una nova clau d'API.
5. Doneu un nom a la clau per poder-la identificar més endavant.
6. Copieu la nova clau d'API.
7. Torneu a Transrewrt i obriu **Configuració** > **Configuració d'API**.
8. Enganxeu la clau a **Clau d'API d'OpenRouter** (sota **Configuració** > **Configuració d'API**).
9. Feu clic a **Prova la clau d'OpenRouter** per assegurar-vos que funciona.

<br/><br/>

<a id="getting-started"></a>
## Començar

Si és la primera vegada que utilitzeu Transrewrt, seguiu aquest ordre:

1. Obriu l'aplicació.
2. Trieu el **llengua de la interfície** des de la icona del globus si és necessari.
3. Si esteu utilitzant l'**aplicació d'escriptori**, obriu [**Configuració** > **Configuració d'API**](#api-config), afegiu una clau d'API d'almenys un proveïdor (per exemple OpenRouter) i feu clic a **Prova** per verificar que funcioni.
4. Obriu [**Configuració** > **Models**](#models) i afegiu un o més models a **Models seleccionats**.
5. Obriu [**Configuració** > **Idiomes**](#languages) i trieu els **Idiomes principals** si voleu que els vostres idiomes més utilitzats apareguin els primers.
6. Aneu a **Traduir** i feu una traducció senzilla per confirmar que tot funciona.
7. Un cop funcioni això, proveu **Reescriure** i després **Transformar**.

Aquest ordre és important. Evita el problema més habitual en primer ús: intentar executar una tasca abans que l'aplicació tingui una connexió d'API funcional o un model seleccionat.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Parts principals de la finestra

L'aplicació està dividida en tres àrees principals:

- La **barra lateral** a l'esquerra.
- La **barra d'eines** a la part superior.
- L'**àrea de treball** al centre.

<br/>

<a id="sidebar"></a>
### Barra lateral

Utilitzeu la barra lateral per navegar per l'aplicació. Podeu col·lapsar la barra lateral per obtenir més espai fent clic a la icona al costat del logotip de l'aplicació.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/ca/sidebar.png" alt="Barra lateral de l'aplicació" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Traduir</strong> obre l'àrea de treball de traducció.</li><br/>
        <li><strong>Reescriure</strong> obre l'àrea de treball de reescriptura.</li><br/>
        <li><strong>Transformar</strong> obre l'àrea de treball de missatge personalitzat.</li><br/>
        <li><strong>Panell</strong> mostra informació sobre l'ús i el cost.</li><br/>
        <li><strong>Configuració</strong> obre el panell de configuració.</li><br/>
        <li><strong>Historial</strong> mostra l'historial d'ús amb el text d'entrada i sortida.</li><br/>
        <li><strong>Usuari</strong> mostra el nom d'usuari de la persona connectada (només web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barra d'eines

La barra d'eines canvia lleugerament segons on es trobi a l'aplicació.

- A l'esquerra, mostra el nom de la pàgina actual.
- A la dreta, mostra el **selector de models** i el control de l'**idioma de la interfície**.

El **selector de models** permet escollir quin motor d'IA utilitzar per a la tasca actual.

  ![Selector de models](../images/screenshots/ca/model-selector.png)

Alguns models gratuïts poden no estar sempre disponibles: de tant en tant poden estar desconnectats o tenir un límit d'ús. Si això passa, l'aplicació eliminarà automàticament aquest model de la llista disponible. Per controlar quins models apareixen, aneu a [**Configuració** > **Models**](#models) i editeu la vostra llista de models. 
També podeu obrir la configuració del model directament fent clic a la icona del proveïdor situada a l'esquerra del nom del model a la barra d'eines.

<br/>

La **icona de globus terraqüi + codi d'idioma** canvia l'idioma de la interfície de l'aplicació, com ara menús i botons. **No** canvia els idiomes de traducció utilitzats a **Traduir**.

  ![Selector d'idioma de la interfície](../images/screenshots/ca/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panells d'entrada i sortida

La majoria d'espais de treball utilitzen un panell d' **Entrada** al costat esquerre i un panell de **Sortida** al costat dret.

Cada panell també mostra:

| **Entrada**                                                         | **Sortida**                                                                                                                  |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Comptador de caràcters <br/>- Comptador de paraules <br/>- Comptador de paràgrafs <br/> | - Temps que ha trigat la tasca<br/>- **TPS** (tokens per segon)<br/>- Comptadors de caràcters, paraules i paràgrafs<br/>- El model utilitzat |


Si us interessen els termes tècnics:

- **Token** vol dir un fragment petit de text. Podeu pensar-hi com una part d'una paraula o una paraula curta.
- **TPS** vol dir quants d'aquests fragments de text ha processat el model cada segon.

<br/>

També podeu supervisar el cost de cada operació (si està disponible) i el cost total, activant l'opció `Mostra informació de cost en les accions` a [**Configuració** > **Configuració general**](#general-settings). 
 
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
2. Trieu un idioma a **Des de**.
3. Trieu un idioma a **A**.
4. Trieu un model a la barra d'eines.
5. Escriviu o enganxeu el text a l' **Entrada**.
6. Feu clic a **Traduir**.
7. Llegiu el resultat a la **Sortida**.
8. Utilitzeu el botó de còpia si voleu copiar el resultat.

<br/>

<a id="language-selection"></a>
### Selecció d'idioma

- **Des de** pot ser un idioma específic o **Detectar idioma**.
- **A** és l'idioma en què voleu obtenir el resultat.

Els vostres **Idiomes preferits** seleccionats apareixen al principi de la llista. Podeu definir-los a [**Configuració** > **Idiomes**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Opcions útils de traducció

A [**Configuració** > **Configuració general**](#general-settings), podeu canviar el comportament de la traducció:

- **Traduir automàticament en enganxar** executa una traducció tan aviat com enganxeu un text.
- **Copiar automàticament el resultat al porta-retalls** copia el resultat automàticament després d'una execució amb èxit.
- **Traducció en temps real (mentre escriviu)** fa traduccions mentre escriviu.
- **Temps d'espera (ms)** controla quant temps espera l'aplicació abans d'executar una traducció en temps real.
- **Entrar** controla què passa quan premeu `Entrar`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Reescriure

Utilitzeu **Reescriure** quan vulgueu millorar l'expressió sense canviar-ne el significat principal.

![Espai de treball de reescriptura](../images/screenshots/ca/rewrite.png)

Això és útil per:

- corregir errors d'ortografia i gramàtica
- fer més clar el text
- fer el text més formal o menys formal
- resumir o ampliar un text
- fer que el text sembli més tècnic

<br/>

> 💡 **CONSCELL**<br/>
> Quan utilitzeu el mode "**Comprovar ortografia i gramàtica**", apareix un botó `Mostra canvis` al panell de sortida.
> Feu clic en aquest botó per alternar la visualització de les correccions, mostrant o amagant els canvis específics fets al vostre text.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transforma

Utilitza **Transforma** quan vulguis que la IA segueixi un conjunt d'instruccions personalitzades.

![Espai de treball de Transforma](../images/screenshots/ca/transform.png)

Aquest és l'àrea més flexible de l'aplicació. Pots utilitzar-la per a tasques com ara:

- resumir notes
- convertir textos en brut en correus polits
- extreure punts clau
- convertir textos a un format específic
- qualsevol altra activitat personalitzada amb el text d'entrada

<br/>

<a id="run-an-existing-prompt"></a>
### Executa una instrucció existent

1. Obre **Transforma**.
2. Tria una instrucció de la llista d'instruccions.
3. Si apareix un quadre d'idioma de **Destinació**, tria un idioma si ho desitges.
4. Escriu o enganxa text a **Entrada**.
5. Fes clic a **Transforma**.
6. Llegeix el resultat a **Sortida**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Si encara no tens cap instrucció

Si la llista d'instruccions està buida, fes clic a **Carrega instruccions d'exemple**. Això afegeix exemples integrats perquè puguis començar ràpidament.

<br/>

> ℹ️ **NOTA**<br/>
> Les instruccions d'exemple es proporcionen en anglès. Després de carregar-les, pots editar una instrucció i fer servir **Traduir instrucció** per traduir-la al teu idioma.

<br/>

<a id="create-a-prompt-quickly"></a>
### Crea una instrucció ràpidament

La manera més ràpida de crear una instrucció és:

1. Fes clic a **Nova instrucció**.
2. Fes clic a **Genera instrucció**.
3. Descriu què vols que faci la instrucció.
4. Tria un model.
5. Deixa que l'aplicació creï un esborrany per tu.
6. Revisa l'esborrany i fes clic a **Desa**.

![Genera instrucció](../images/screenshots/ca/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Edita una instrucció

Quan crees o edits una instrucció, l'editor apareix a l'esquerra i una zona de proves apareix a la dreta.

![Editor d'instruccions de Transforma](../images/screenshots/ca/transform-prompt-edit.png)

Els camps principals són:

- **Nom de la instrucció**: el nom que es mostra a la llista d'instruccions.
- **Instruccions de la instrucció (opcional)**: una breu pista mostrada a l'usuari quan s'executa la instrucció.
- **Paper de la IA**: el paper general assignat a la IA, com ara «Ets un assistent útil.»
- **Instruccions de la IA (una per línia)**: les regles específiques que vols que la IA segueixi.
- **Descripció de la sortida**: una paraula breu que descriu el resultat, com ara «resum» o «reescrita».
- **Temperatura (0.0 → 1.0)**: com es comportarà el model; vegeu més avall.
- **Demana idioma de destinació**: afegeix un selector d'idioma de destinació quan s'executa la instrucció.

Si el terme tècnic **Temperatura** és nou per a tu, pensa-hi d'aquesta manera:

- Una **temperatura més baixa** produeix resultats més estables i previsibles.
- Una **temperatura més alta** produeix més varietat i creativitat.

També pots utilitzar:

- **`Genera instrucció`** per crear un nou esborrany a partir d'una descripció simple
- **`Millora instrucció`** per perfeccionar una instrucció existent
- **`Tradueix instrucció`** per traduir els camps de la instrucció

<br/>

> ⚠️ **ADVERTÈNCIA**<br/>
> Fes clic a **`Desa`** abans de fer clic a **`Torna a Executar`**. Si tornes enrere sense desar, es perdran els canvis.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Prova una instrucció abans d'utilitzar-la

El panell de proves de la dreta et permet provar la teva instrucció amb un text d'exemple abans d'utilitzar-la en el treball diari.

Això és útil quan:

- estàs creant una nova instrucció
- estàs comparant dues versions d'una instrucció
- vols comprovar el to, la llargada o el format de la sortida

<br/>

> ℹ️ **NOTA**<br/>
> Pots exportar i importar instruccions desades a [**Configuració** > **Instruccions de Transforma**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Taulell

Utilitza **Taulell** per veure quant estàs utilitzant l'aplicació i quin és el seu cost (per a models de pagament).

![Resum del taulell](../images/screenshots/ca/dashboard-summary.png)


<br/>

> ℹ️ **NOTA**<br/>
> Si només utilitzes models gratuïts, els gràfics relacionats amb el cost estaran buits.

<br/>

<a id="filter-the-data"></a>
### Filtra les dades

Utilitza els botons de filtre a la part superior per canviar l'interval de temps.

![Filtres del taulell](../images/screenshots/ca/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> El filtre de **Usuari** només és visible per als administradors a la versió web. Els usuaris normals no veuran aquest filtre, i no està disponible a l'aplicació d'escriptori.

<br/>

<a id="dashboard-tabs"></a>

### Pestanyes del tauler de control

- **Resum** et dóna una visió general de l'ús i el cost.
- **Per ús** detalla l'activitat segons l'idioma de traducció, el mode de reexpressió i el prompt de transformació.
- **Per model** mostra quins models has utilitzat i el seu cost.
- **Per dia** mostra els totals diaris.
- **Tots els crides** mostra tot l'historial de crides i et permet exportar-lo.

<br/>

<a id="export-data"></a>
### Exportar dades

Les taules del tauler de control poden exportar les dades en:

- **JSON**
- **CSV**
- **XLSX**

Això és útil si vols revisar l'activitat fora de l'aplicació o compartir un informe.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Eliminar registres emmagatzemats d'un model

A **Per model** o **Tots els crides**, pots eliminar els registres emmagatzemats d'un model clicant a la icona de "paperera".

> ⚠️ **AVÍS**<br/>
> L'eliminació dels registres emmagatzemats és irreversible. Utilitza-ho només si estàs segur que ja no necessites aquest historial.

Per eliminar totes les dades o suprimir registres segons l'antiguitat, ves a [**Configuració** > **Seguiment de costos**](#cost-tracking). Allà trobaràs opcions per eliminar totes les dades emmagatzemades o únicament les dades anteriors a una data determinada.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Historial

Clica a **Historial** per veure l'historial de les teves accions dins de **Transrewrt**, incloent-hi l'entrada i la sortida de cada operació.

![Pàgina d'historial](../images/screenshots/ca/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrar les dades

**Historial** utilitza els mateixos filtres que la pàgina **Tauler de control**. Usa'ls per seleccionar l'interval de temps.

![Filtres del tauler de control](../images/screenshots/ca/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> El filtre **Usuari** només és visible per als administradors a la versió web. Els usuaris normals no veuran aquest filtre, i tampoc està disponible a l'aplicació d'escriptori.

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

  | Pestanya               | Escriptori | Web (admin) | Web (usuari normal) |
  |------------------------|:----------:|:-----------:|:-------------------:|
  | Configuració general   |    sí     |     sí      |         sí          |
  | Models                 |    sí     |     sí      |         sí          |
  | Idiomes                |    sí     |     sí      |         sí          |
  | Seguiment de costos    |    sí     |     sí      |          —          |
  | Prompts de transformació |    sí   |     sí      |         sí          |
  | Usuaris                |     —     |     sí      |          —          |
  | Configuració d'API     |    sí     |     sí      |          —          |
  | Quant a                |    sí     |     sí      |         sí          |

<br/>

> ℹ️ **NOTA**<br/>
> A la versió web, cada usuari té la seva pròpia configuració. Paràmetres com els models seleccionats, idiomes, opcions generals i prompts de transformació es desen per a cada usuari. Els canvis que facis no afecten els altres usuaris.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Configuració general

Utilitza **Configuració general** per controlar el comportament del teclat, si les dades d'execució s'emmagatzemen a l'**Historial** i l'aspecte visual.

**Comportament**

- **Comportament de la tecla ENTER** determina si `Entrar` executa la tasca o insereix una línia nova.
- **Traduir automàticament en enganxar** comença la traducció tan aviat com enganxes text.
- **Copiar automàticament el resultat al porta-retalls** copia els resultats correctes automàticament.
- **Traducció en temps real (mentre teclejes)** tradueix mentre escrius.
- **Temps d'espera (ms)** estableix el temps d'espera per a la traducció en temps real.

**Historial**

- **Mantenir l'historial d'execució** controla si cada traducció, reescriptura i transformació emmagatzema el **text d'entrada i sortida** per a la visualització de l'**Historial** de la barra lateral. Desactivar-ho demana confirmació; si confirmes, el text emmagatzemat de l'historial s'eliminarà de la base de dades.
- **Eliminar dades de l'historial** et permet eliminar text emmagatzemat segons l'antiguitat (per exemple, més vell que uns quants mesos, o **totes les dades (netejar)**) mitjançant **Eliminar dades**. Aquesta opció només afecta el text desat de les executions visualitzat a **Historial**; **no** elimina els totals de cost ni d'ús. Per eliminar o reduir les dades de **cost**, utilitza [**Configuració** > **Seguiment de costos**](#cost-tracking).

**Aspecte**

- **Mostrar informació de cost a les accions** controla la visualització del cost per operació (si està disponible) i del cost total als panells de sortida de Traduir, Reescriure i Transformar.
- **Xifres decimals del cost** canvia com es mostren els decimals del cost.
- **Només web:** **mostrar un marge al voltant de l'aplicació** afegeix espai addicional al voltant de la interfície.
- **Tipus de lletra** canvia la font del text als panells de text.
- **Mida** canvia la mida de la font.

<br/>

<a id="models"></a>

### Models

Utilitza **Configuració** > **Models** per triar quins models apareixen a la barra d'eines.

![Configuració de models](../images/screenshots/ca/settings-models.png)

La pàgina té dues llistes:

- **Models disponibles** a l'esquerra
- **Models seleccionats** a la dreta

Els controls útils inclouen:

- **Cercar models...** per trobar un model pel nom
- Les fitxes de **Proveïdor** per reduir la llista a un motor concret (OpenRouter, OpenAI, Ollama, …)
- **Només gratuïts** per mostrar només els models gratuïts
- **Actualitzar** per tornar a carregar la llista
- **Expandir tot** i **Reduir tot** quan ordeneu per proveïdor

Els identificadors del model inclouen el prefix del proveïdor (per exemple `openrouter/…` vs `openai/…`). Les insígnies com ara **OpenAI (OpenRouter)** vs **OpenAI (directe)** mostren com s'enruta el tràfic.

> ℹ️ **NOTA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) és un model router, no un model de xat general: la seva resposta és JSON que descriu els cossos de les sol·licituds de l'API OpenRouter (per exemple un array `requests` amb `model` i `messages`). Si l'utilitzeu per **Traduir**, **Reescriure** o **Transformar**, el panell de sortida mostrarà aquest JSON en comptes del text finalitzat. Trieu un model de text normal per a aquestes tasques. Vegeu la [pàgina del model Body Builder](https://openrouter.ai/openrouter/bodybuilder) a OpenRouter.

Accions:

 - Per afegir un model, feu clic a **Afegir** o en qualsevol lloc de l'entrada.

 - Per eliminar un model, feu clic a **X** al costat en **Models seleccionats** o a **Seleccionat** a l'entrada en Models disponibles.

 - Per netejar la llista, feu clic a **Deseleccionar-ho tot**. El model gratuït obligatori romandrà a la llista.

<br/>

> ℹ️ **NOTA**<br/>
> Si no voleu afegir crèdits a OpenRouter ara mateix, comenceu activant **Només gratuïts** i triant els models gratuïts (no es requereix targeta de crèdit). També podeu utilitzar Ollama per executar models localment sense cap clau d'API.

<br/>

<a id="languages"></a>
### Idiomes

Utilitza **Configuració** > **Idiomes** per organitzar les llistes d'idiomes utilitzades a l'aplicació.

- Els **idiomes principals** es fixen a la part superior de les llistes d'idiomes a **Traduir** i **Transformar**.
- L'**idioma personalitzat** us permet afegir un idioma que no sigui a la llista incorporada.

Si afegiu un idioma personalitzat, apareixerà als selectors d'idioma juntament amb les opcions predefinides.

<br/>

<a id="cost-tracking"></a>
### Seguiment de costos

Utilitza **Configuració** > **Seguiment de costos** per gestionar la informació de costos.

- **Cost total** mostra el total acumulat.
- **Copiar valor** copia el total al porta-retalls.
- **Restablir cost** reinicia el total emmagatzemat a zero.
- **Sincronitzar amb l'ús de la clau API** estableix el total perquè coincideixi amb l'ús registrat pel vostre compte OpenRouter (només OpenRouter).
- **Ús de la clau API** mostra els detalls d'ús d'OpenRouter, si estan disponibles.
- **Eliminar dades de cost** elimina totes les dades, o només les entrades anteriors a una data seleccionada.

**Seguiment de costos:** Quan utilitzeu models OpenRouter, l'aplicació mostra el vostre ús real i despesa basats en la informació de cost d'OpenRouter. Per a tots els altres proveïdors, l'aplicació estima els costos utilitzant els preus publicats per OpenRouter; si no hi ha preu disponible, l'estimació pot ser zero.

<br/>

> ℹ️ **NOTA**<br/>
> Totes les xifres de cost són estimacions només per a la vostra referència, no són factures oficials.

<br/>

> ⚠️ **AVÍS**<br/>
> La supressió de dades no es pot desfer. Abans d'eliminar, assegureu-vos de fer una còpia de seguretat de les vostres dades o d'exportar-les mitjançant [**Historial**](#history) 
> o [**Tauler** > **Tots els trucs**](#dashboard-tabs), ja que en cas contrari es perdran permanentment. 
> Tota la història d'entrada/sortida relacionada amb cada entrada de trucada d'API també s'eliminarà.

<br/>

<a id="transform-prompts"></a>
### Prompts de transformació

Utilitza **Configuració** > **Prompts de transformació** per gestionar els prompts en bloc.

Podeu:

- revisar els vostres prompts desats
- eliminar prompts
- importar prompts des d'un fitxer
- exportar prompts per fer-ne còpia de seguretat o compartir-los

<br/>

<a id="users"></a>
### Usuaris

Utilitza **Usuaris** per gestionar comptes d'usuari a la versió web. Podeu afegir usuaris, actualitzar-ne les dades, restablir contrasenyes i eliminar comptes.

<br/>

<a id="api-config"></a>
### Configuració d'API

Els proveïdors compatibles són: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras i **Ollama** (models locals mitjançant una URL base). Només cal configurar els proveïdors que utilitzeu.

**Aplicació web: només administradors**

Les claus d'API es configuren mitjançant variables d'entorn del sistema o de Docker — no s'introdueixen a la interfície web. Aquesta pàgina mostra quins proveïdors tenen una clau configurada i us permet provar cadascun prement el botó **`Test`**.

<br/>

> ℹ️ **NOTA**<br/>
> Per canviar una clau d'API, actualitzeu la variable d'entorn a la vostra configuració del sistema o de Docker i reinicieu el servidor o el contenidor.

<br/>

**Aplicació d'escriptori**

Utilitza **Configuració d'API** per desar claus d'API per a cada proveïdor que utilitzeu. Per a Ollama, introduïu l'**URL base** en comptes d'una clau d'API.

<br/>

> 💡 **Consell** <br/>
> Si no voleu utilitzar una clau d'API ni pagar per l'ús, podeu [descarregar Ollama](https://ollama.com) i executar models (com `translategemma:4b`) localment al vostre ordinador gratuïtament. Alternativament, podeu crear un compte gratuït a OpenRouter (sense targeta de crèdit) per utilitzar els seus models gratuïts, o obtenir una clau d'API gratuïta de Cerebras, Google, Groq o Mistral AI.

<br/>

- Afegiu només els proveïdors que necessiteu. A **Configuració** > **Models**, cada identificador de model comença amb el proveïdor (per exemple `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Per afegir una clau d'API, introduïu el valor al camp de text i feu clic a **`Desar`**. Per substituir una clau existent, feu clic a **`Editar`**. Per comprovar que una clau funciona, feu clic a **`Provar`**. Per a l'URL base d'Ollama, feu sempre clic a **`Provar`** per comprovar la connexió.

<br/>

> ℹ️ **NOTA**<br/>
> No podeu veure el valor actual d'una clau d'API. Només podeu substituir-la utilitzant el botó **`Editar`**.
> Les claus d'API es desen xifrades a la configuració.

<br/>

<a id="about"></a>

### Quant a

La pestanya **Quant a** mostra:

- el nom de l'aplicació
- el número de versió
- la data de compilació
- un enllaç al dipòsit del projecte

<br/><br/>

<a id="common-issues"></a>
## Problemes freqüents

Si alguna cosa no funciona com s'espera, primer comproveu aquests punts.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### L'aplicació no tradueix, reescriu ni transforma text

Comproveu que:

- heu seleccionat un model a la barra d'eines
- almenys un model estigui llistat a [**Configuració** > **Models**](#models)
- la vostra configuració d'API funciona

Si esteu utilitzant l'aplicació d'escriptori:

1. Obriu [**Configuració** > **Configuració d'API**](#api-config).
2. Comproveu que s'hagi desat almenys una clau d'API.
3. Feu clic a **Provar** al costat del proveïdor per confirmar que la clau funciona.

<br/>

<a id="the-model-list-is-empty"></a>
### La llista de models està buida

Obriu [**Configuració** > **Models**](#models) i feu clic a **Actualitza**.

Si cal:

- cerqueu un model
- activeu **Només gratuïts**
- afegiu un o més models als **Models seleccionats**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### El resultat és massa lent o massa costós

Proveu una o diverses d’aquestes opcions:

- trieu un model diferent
- utilitzeu una entrada més curta
- desactiveu la **Traducció en temps real (mentre s'escriu)** a [**Configuració** > **Configuració general**](#general-settings)
- utilitzeu models gratuïts per a tasques senzilles (vegeu [Models](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### La interfície està en l'idioma incorrecte

Feu clic a la icona del globus a la [barra d'eines](#toolbar) i trieu el vostre **Idioma de la interfície** preferit.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### El text és massa petit o difícil de llegir

Obriu [**Configuració** > **Configuració general**](#general-settings) i canvieu:

- **Familia de lletra**
- **Mida**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Els gràfics del quadre de control estan buits

Això és normal si:

- només utilitzeu **models gratuïts** (els gràfics de costs estaràn buits)
- el **filtre de temps** seleccionat no cobreix el període en què es van fer les crides — proveu **Tots** per comprovar-ho

Si els gràfics segueixen buits després de seleccionar **Tots**, confirmeu que les crides apareixen a la pestanya [**Historial**](#history) o a la pestanya **Totes les crides**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### El cost mostra "no disponible" o sembla incorrecte

Quan utilitzeu models a través d'**OpenRouter**, l'aplicació mostra la despesa real informada per OpenRouter.

Per a **altres proveïdors** (OpenAI directe, Anthropic directe, etc.), el cost és una estimació basada en les dades de preus publicades per OpenRouter. Si no es troba un preu coincident per a un model, el cost apareixerà com a **no disponible** i no s'afegirà al vostre total acumulat.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### El cost total no coincideix amb la meva factura del proveïdor

Totes les xifres de cost a l'aplicació són **estimacions només a efectes de referència**, no documents oficials de facturació.

Perquè el total s'acosti més a la vostra despesa real d'OpenRouter, obriu [**Configuració** > **Seguiment de costos**](#cost-tracking) i feu clic a **Sincronitza amb l'ús de la clau d'API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### La pàgina d'historial no apareix a la barra lateral

L'opció **Mantingueu l'historial d'execució** pot estar desactivada. Obriu [**Configuració** > **Configuració general**](#general-settings) i activeu-la. Tingueu en compte que activar-la no restaura les dades d'historial esborrades prèviament.

<br/>

<a id="web-app-session-expired"></a>
### Aplicació web: es redirigeix a la pàgina d'inici de sessió sense avís

La vostra sessió pot haver caducat. Inicieu sessió de nou. Si passa sovint, comproveu la configuració del servidor respecte als ajustos de durada de la sessió.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### El quadre de control no mostra dades d'altres usuaris (web)

Només els **administradors** poden veure les dades de tots els usuaris mitjançant el filtre **Usuari**. Per disseny, els usuaris habituals només veuen la seva pròpia activitat.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### He canviat una instrucció i he perdut les edicions

Sempre que editeu una instrucció, feu clic a **Desa** abans de fer clic a **Torna a executar**.

<br/><br/>

<a id="quick-tips"></a>
## Consells ràpids

- Comenceu amb [**Traduir**](#translate) per assegurar-vos que la vostra configuració funciona abans de passar a [**Reescriure**](#rewrite) o [**Transformar**](#transform).
- Utilitzeu [**Reescriure**](#rewrite) per a millorar el text habitual.
- Utilitzeu [**Transformar**](#transform) quan necessiteu un flux de treball repetible per a una tasca específica.
- Utilitzeu [**Quadre de control**](#dashboard) si voleu fer un seguiment de l'ús i del cost.
- Utilitzeu [**Historial**](#history) per revisar operacions anteriors i el text complet d'entrada i sortida.
- Exporteu les instruccions regularment si esteu creant una biblioteca d'instruccions que voleu conservar segura (vegeu [Instruccions de transformació](#transform-prompts)) o si voleu compartir-les amb altres.

<br/><br/>

<a id="disclaimer"></a>

## Avís legal

els noms i icones dels productes pertanyen als seus respectius propietaris i s'utilitzen només amb finalitats d'identificació. Aquest programari no està afiliat ni endosat per cap de les marques esmentades.

<br/><br/>

<a id="license"></a>
## Llicència

Copyright © 2026 Waldemar Scudeller Jr.

[Llicència Apache 2.0](LICENSE)