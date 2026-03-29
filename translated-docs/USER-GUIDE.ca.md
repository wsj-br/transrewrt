---
translated_at: "2026-03-29T01:42:56.962Z"
source_hash: "8981b8db163153bfc443046fa20a49b33c92b9feebdee302f6ef60852f273472"
source_mtime: "2026-03-29T01:41:58.368Z"
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>

# Guia d'usuari

<br/>

<a id="introduction"></a>

## Introducció

Transrewrt t'ajuda a treballar amb text de tres formes principals:

- **Traduir** - convertir text d'un idioma a un altre.
- **Reescriure** - reformular el text en un estil diferent, com ara més clar, més concís o més formal.
- **Transformar** - processar text utilitzant instruccions d'IA personalitzades anomenades indicacions (*prompts*).

<br/>

Aquesta guia explica com utilitzar l'aplicació un cop instal·lada i en funcionament. Per als passos d'instal·lació, consulteu el **[README](README.ca.md)** principal.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt està disponible com a aplicació d'escriptori per a Windows i Linux, i com a aplicació web autoallotjada. Aquesta guia es centra en l'ús diari de l'aplicació. Quan alguna funcionalitat només s'aplica a una versió, s'indica clarament.

<small>**Llegir en altres idiomes:** </small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Nota sobre les traduccions de la interfície i la documentació:** Tots els idiomes de la interfície, excepte l'anglès original (UK), 
> s'han traduït mitjançant models d'intel·ligència artificial; la redacció pot ser imprecisa o contenir errors.

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
  - [Executar una indicació existent](#run-an-existing-prompt)
  - [Si encara no tens cap indicació](#if-you-have-no-prompts-yet)
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
  - [Exportar les dades de l'historial](#export-history-data)
- [Configuració](#settings)
  - [Configuració general](#general-settings)
  - [Models](#models)
  - [Idiomes](#languages)
  - [Seguiment de costos](#cost-tracking)
  - [Transformar indicacions](#transform-prompts)
  - [Usuaris](#users)
  - [Configuració de l'API](#api-config)
  - [Quant a](#about)
- [Problemes freqüents](#common-issues)
  - [L'aplicació no tradueix, reescriu ni transforma el text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [La llista de models està buida](#the-model-list-is-empty)
  - [El resultat és massa lent o massa car](#the-result-is-too-slow-or-too-expensive)
  - [La interfície està en l'idioma incorrecte](#the-interface-is-in-the-wrong-language)
  - [El text és massa petit o difícil de llegir](#the-text-is-too-small-or-hard-to-read)
  - [Els gràfics del panell estan buits](#dashboard-charts-are-empty)

- [El cost mostra "no disponible" o sembla incorrecte](#cost-shows-not-available-or-seems-wrong)
  - [El cost total no coincideix amb la factura del proveïdor](#total-cost-does-not-match-my-provider-bill)
  - [La pàgina d'Historial no apareix a la barra lateral](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicació web: redirigit inesperadament a la pàgina d'inici de sessió](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Administrador web: oblidat o perdut la contrasenya](#web-admin-forgot-or-lost-a-password)
  - [El tauler no mostra dades per a altres usuaris (web)](#dashboard-shows-no-data-for-other-users-web)
  - [He canviat una indicació i he perdut les edicions](#i-changed-a-prompt-and-lost-the-edits)
- [Consells ràpids](#quick-tips)
- [Avís legal](#disclaimer)
- [Llicència](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Abans de començar

Per utilitzar Transrewrt, necessiteu accés a, com a mínim, un proveïdor d'IA. Els proveïdors compatibles són: [OpenRouter](https://openrouter.ai) (que agrega molts models), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras i [Ollama](https://ollama.com) per a models locals.

No necessiteu seleccionar un model de pagament per començar. Apenes afegiu la vostra clau d'API d'OpenRouter, l'aplicació habilita automàticament una opció d'**OpenRouter gratuïta** integrada. Això us permet començar a traduir, reescriure i transformar textos immediatament. Alternativament, també podeu obtenir una clau d'API gratuïta de Cerebras, Google, Groq o Mistral AI.

En paraules senzilles:

- Un **model** és el motor d'IA que fa la feina. Els models es mostren amb un **prefix del proveïdor** (per exemple `openrouter/…`, `openai/…`, `ollama/…`).
- Una **clau d'API** (o, per a Ollama, una **URL base**) és la manera que l'aplicació utilitza per accedir al proveïdor.

Si esteu utilitzant l'**aplicació d'escriptori**, afegiu claus a [**Configuració** > **Configuració d'API**](#api-config) per a cada proveïdor que utilitzeu. Si només utilitzeu OpenRouter, consulteu [Com obtenir una clau d'API](#how-to-get-an-api-key-desktop-app) a continuació. Si no voleu utilitzar una clau d'API, podeu instal·lar Ollama (des de [ollama.com](https://ollama.com)) i utilitzar models locals, com ara `translategemma:4b`.

Si esteu utilitzant la **versió web**, l'administrador del servidor configura els proveïdors mitjançant variables d'entorn, per tant no podeu introduir claus d'API directament a l'aplicació.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### Com obtenir una clau API gratuïta d'OpenRouter (aplicació d'escriptori)

Si utilitzeu l'aplicació d'escriptori, seguiu aquests passos:

1. Aneu a [OpenRouter](https://openrouter.ai) amb el vostre navegador web.
2. Creeu un compte o inicieu sessió.
3. Obriu la pàgina de [Keys](https://openrouter.ai/keys).
4. Feu clic al botó per crear una nova clau API.
5. Doneu un nom a la clau perquè la pugueu reconèixer més endavant.
6. Copieu la nova clau API.
7. Torneu a Transrewrt i obriu **Configuració** > **Configuració de l'API**.
8. Enganxeu la clau a **Clau API d'OpenRouter** (sota **Configuració** > **Configuració de l'API**).
9. Feu clic a **Provar la clau d'OpenRouter** per assegurar-vos que funciona.

<br/><br/>

<a id="getting-started"></a>

## Primers passos

Si és la primera vegada que utilitzeu Transrewrt, seguiu aquest ordre:

1. Obriu l'aplicació.
2. Trieu el vostre **idioma d'interfície** des de la icona del globus si és necessari.
3. Si esteu utilitzant l'**aplicació d'escriptori**, obriu [**Configuració** > **Configuració d'API**](#api-config), afegiu una clau d'API d'almenys un proveïdor (per exemple OpenRouter) i feu clic a **Prova** per verificar que funciona.
4. Obriu [**Configuració** > **Models**](#models) i afegiu un o més models a **Models seleccionats**.
5. Obriu [**Configuració** > **Idiomes**](#languages) i trieu els vostres **Idiomes preferits** si voleu que els idiomes que més utilitzeu apareguin en primer lloc.
6. Vés a **Traduir** i feu una traducció senzilla per confirmar que tot funciona.
7. Un cop funcioni, proveu **Reescriure** i després **Transformar**.

Aquest ordre és important. Evita el problema més habitual en el primer ús: intentar executar una tasca abans que l'aplicació tingui una connexió d'API funcional o un model seleccionat.

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

Utilitzeu la barra lateral per desplaçar-vos per l'aplicació. Podeu col·lapsar la barra lateral per tenir més espai fent clic a la icona al costat del logotip de l'aplicació.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/ca/sidebar.png" alt="Barra lateral de l'aplicació" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Traduir</strong> obre l'espai de treball de traducció.</li><br/>
        <li><strong>Reescriure</strong> obre l'espai de treball de reescriptura.</li><br/>
        <li><strong>Transformar</strong> obre l'espai de treball amb indicacions personalitzades.</li><br/>
        <li><strong>Dashboard</strong> mostra informació d'ús i de cost.</li><br/>
        <li><strong>Configuració</strong> obre el tauler de configuració.</li><br/>
        <li><strong>Historial</strong> mostra l'historial d'ús amb el text d'entrada i el de sortida.</li><br/>
        <li><strong>Usuari</strong> mostra el nom d'usuari de la persona identificada (només a la versió web).</li>
      </ul>

</td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barra d'eines

La barra d'eines canvia lleugerament segons on es trobi a l'aplicació.

- A l'esquerra, mostra el nom de la pàgina actual.
- A la dreta, mostra el **selector de models** i el control d'**Idioma de la interfície**.

El **selector de models** permet escollir quin motor d'IA utilitzar per a la tasca actual.

  ![Selector de models](../images/screenshots/ca/model-selector.png)

Alguns models gratuïts poden no estar sempre disponibles: de tant en tant poden estar fora de línia o tenir un límit d'ús. Si això passa, l'aplicació eliminarà automàticament aquest model de la llista disponible. Per controlar quins models apareixen, aneu a [**Configuració** > **Models**](#models) i editeu la vostra llista de models. 
També podeu obrir la configuració del model directament prement a la icona del proveïdor situada a l'esquerra del nom del model a la barra d'eines.

<br/>

La **icona de globus + codi d'idioma** canvia l'idioma de la interfície de l'aplicació, com ara els menús i els botons. **No** canvia els idiomes de traducció utilitzats a **Traduir**.

![Selector d'idioma de la interfície](../images/screenshots/ca/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Panells d'entrada i sortida

La majoria d'espais de treball utilitzen un panell d'**Entrada** a l'esquerra i un panell de **Sortida** a la dreta.

Cada panell mostra a més:

| **Entrada**                                                              | **Sortida**                                                                                                                            |
|--------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| - Nombre de caràcters <br/>- Nombre de paraules <br/>- Nombre de paràgrafs <br/> | - Quant de temps ha trigat la tasca<br/>- **TPS** (tokens per segon)<br/>- Nombre de caràcters, paraules i paràgrafs<br/>- El model utilitzat |


Si us pregunteu què signifiquen els termes tècnics:

- **Token** vol dir un tros petit de text. Es pot entendre com una part d'una paraula o una paraula curta.
- **TPS** vol dir quants d'aquests trossos de text ha processat el model cada segon.

<br/>

També podeu supervisar el cost de cada operació (si està disponible) i el cost total, activant l'opció `Mostra informació sobre costos a les accions` a [**Configuració** > **Configuració general**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>

## Tradueix

Utilitza **Tradueix** quan vulguis convertir text d’un idioma a un altre.

![Espai de treball de Tradueix](../images/screenshots/ca/translate.png)

<br/>

<a id="translate-text"></a>

### Traduir text

1. Obriu **Traduir**.
2. Trieu un idioma a **Des de**.
3. Trieu un idioma a **Cap a**.
4. Trieu un model a la barra d'eines.
5. Escriviu o enganxeu el text a l'**Entrada**.
6. Feu clic a **Traduir**.
7. Llegiu el resultat a la **Sortida**.
8. Utilitzeu el botó de copiar si voleu copiar el resultat.

<br/>

<a id="language-selection"></a>

### Selecció d'idioma

- **Des de** pot ser un idioma concret o **Detectar idioma**.
- **Cap a** és l'idioma en què voleu obtenir el resultat.

Els **Idiomes principals** seleccionats apareixen a la part superior de la llista. Podeu configurar-los a [**Configuració** > **Idiomes**](#languages).

<br/>

<a id="helpful-translation-settings"></a>

### Configuració útil de traducció

A [**Configuració** > **Configuració general**](#general-settings), podeu canviar el comportament de la traducció:

- **Traducció automàtica en enganxar** fa una traducció tan aviat com enganxeu text.
- **Copia automàtica del resultat al porta-retalls** copia el resultat automàticament després d’una traducció amb èxit.
- **Traducció en temps real (mientras s'escriu)** fa traduccions mentre esteu escrivint.
- **Temps d’espera (ms)** controla quant de temps espera l’aplicació abans de fer una traducció en temps real.
- **Entrar** controla què passa quan premeu `Entrar`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Torna a redactar

Utilitza **Torna a redactar** quan vulguis millorar l'expressió sense canviar el significat principal.

![Espai de treball de tornar a redactar](../images/screenshots/ca/rewrite.png)

Això és útil per:

- corregir l'ortografia i la gramàtica (**Comprova l'ortografia i la gramàtica**)
- fer el text més clar (**Millora la claredat**)
- obtenir diverses reformulacions diferents en una sola execució (**Versions alternatives**)
- fer el text més formal o menys formal (**Formal** / **Informal**)
- escurçar o ampliar el text (**Escurça** / **Amplia**)
- fer que el text soni més tècnicament (**Fes-lo tècnic**)

<br/>

> 💡 **CONSELL**<br/>
> Quan utilitzes el mode "**Comprova l'ortografia i la gramàtica**", apareix un interruptor **Mostra canvis** al quadre de sortida (al costat de **Copia**).
> Activa-ho o desactiva-ho per mostrar o ocultar les correccions específiques aplicades al teu text.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transforma

Utilitzeu **Transforma** quan vulgueu que la IA segueixi un conjunt personalitzat d'instruccions.

![Espai de treball de Transforma](../images/screenshots/ca/transform.png)

Aquesta és l'àrea més flexible de l'aplicació. Podeu utilitzar-la per a tasques com ara:

- resumir notes
- convertir textos rudimentaris en correus electrònics elaborats
- extreure punts clau
- convertir textos a un format específic
- qualsevol altra activitat personalitzada amb el text d'entrada

<br/>

<a id="run-an-existing-prompt"></a>

### Executa un indicador existent

1. Obre **Transformar**.
2. Tria un indicador de la llista d'indicadors.
3. Si apareix un requadre d'idioma **Destí**, tria un idioma si ho desitges.
4. Escriu o enganxa el text a **Entrada**.
5. Fes clic a **Transformar**.
6. Llegeix el resultat a **Sortida**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Si encara no tens cap indicació

Si la llista d'indicacions està buida, feu clic a **Carrega indicacions d'exemple** a l'àrea de treball de Transform. El mateix control sempre estarà disponible a [**Configuració** > **Indicacions de Transformació**](#transform-prompts) a la fila d'importació/exportació. Tots dos afegiran exemples integrats perquè pugueu començar ràpidament.

<br/>

> ℹ️ **NOTA**<br/>
> Les indicacions d'exemple es proporcionen en anglès. Després de carregar-les, podeu editar una indicació i fer servir **Traduir indicació** per traduir-la al vostre idioma.

<br/>

<a id="create-a-prompt-quickly"></a>

### Crea un avís ràpidament

La manera més ràpida de crear un avís és:

1. Feu clic a **Nou avís**.
2. Feu clic a **Genera avís**.
3. Descriviu què voleu que faci l'avís.
4. Trieu un model.
5. Deixeu que l'aplicació creï un esborrany per vosaltres.
6. Reviseu l'esborrany i feu clic a **Desa**.

![Genera avís](../images/screenshots/ca/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### Edita una indicació

Quan creeu o editeu una indicació, l'editor apareix a l'esquerra i una àrea de proves apareix a la dreta.

![Editor d'indicacions de Transform](../images/screenshots/ca/transform-prompt-edit.png)

Els camps principals són:

- **Nom de la indicació**: el nom que es mostra a la llista d'indicacions.
- **Instruccions de la indicació (opcional)**: una pista curta que es mostra a l'usuari quan s'executa la indicació.
- **Paper del model**: el paper general assignat a la IA, com ara «Ets un assistent útil.»
- **Instruccions del model (una per línia)**: les normes específiques que voleu que segueixi la IA.
- **Descripció de la sortida**: una paraula curta que descriu el resultat, com ara «resum» o «reescritura».
- **Temperatura (0,0 → 1,0)**: com es comportarà el model; vegeu més avall.
- **Demana l'idioma de destinació**: afegeix un selector d'idioma de destinació quan s'executa la indicació.

Si el terme tècnic **Temperatura** és nou per a vostè, pensi-hi així:

- Una temperatura **més baixa** produeix resultats més estables i previsibles.

- Una temperatura **més elevada** dona més varietat i creativitat.

També podeu utilitzar:

- **`Generar indicació`** per crear un nou esborrany a partir d'una descripció senzilla
- **`Millorar indicació`** per perfeccionar una indicació existent
- **`Traduir indicació`** per traduir els camps de la indicació

<br/>

> ⚠️ **ADVERTÈNCIA**<br/>
> Feu clic a **`Desar`** abans de fer clic a **`Tornar a Executar`**. Si torneu enrere sense desar, es perdran els canvis.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Prova un qüestionari abans d'utilitzar-lo

El quadre de prova de la dreta et permet provar el teu qüestionari amb text de mostra abans d'utilitzar-lo en el treball diari.

Això és útil quan:

- estàs creant un nou qüestionari
- estàs comparant dues versions d’un qüestionari
- vols comprovar el to, la longitud o el format de la sortida

<br/>

> ℹ️ **NOTA**<br/>
> Pots exportar i importar qüestionaris desats a [**Configuració** > **Transformar qüestionaris**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Tauler de control

Utilitzeu el **Tauler de control** per veure quant esteu utilitzant l'aplicació i quin és el cost (per als models de pagament).

![Resum del tauler de control](../images/screenshots/ca/dashboard-summary.png)


<br/>

> ℹ️ **NOTA**<br/>
> Si només utilitzeu models **gratuïts**, les quantitats de **cost** poden ser zero i els resums centrats en el cost poden semblar buits. Als apartats **Resum**, **Ús al llarg del temps** i **Ús per model** encara es mostren el **nombre de trucades** (traduir, reescriure i transformar) quan hi ha activitat en el període seleccionat.

<br/>

<a id="filter-the-data"></a>

### Filtra les dades

Utilitza els botons de filtre de dalt per canviar el rang de temps.

![Filtres del tauler de control](../images/screenshots/ca/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> El filtre **Usuari** només és visible pels administradors a la versió web. Els usuaris habituals no veuran aquest filtre, i no està disponible a l'aplicació d'escriptori.

<br/>

<a id="dashboard-tabs"></a>

### Pestanyes del tauler de control

- **Resum** et dóna una visió general de l'ús i el cost. Inclou un gràfic d'**Ús al llarg del temps** (suma acumulada de **crides diàries** per traduir, reescriure i transformar) i d'**Ús per model** (**crides totals per model**, incloent-hi transformacions).
- **Per ús** desglossa l'activitat per idioma de traducció, mode de reescriptura i indicació de transformació.
- **Per model** mostra quins models has utilitzat i el seu cost.
- **Per dia** mostra els totals diaris.
- **Totes les crides** mostra l'historial complet de crides i t'hi permet exportar-lo.

<br/>

<a id="export-data"></a>

### Exportar dades

Les taules del quadre de comandament poden exportar dades en:

- **JSON**
- **CSV**
- **XLSX**

Això és útil si vols revisar l'activitat fora de l'aplicació o compartir un informe.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Eliminar registres emmagatzemats per un model

A **Per model** o **Totes les crides**, pots eliminar els registres emmagatzemats per un model fent clic a la icona de "paperera".

> ⚠️ **ADVERTÈNCIA**<br/>
> L'eliminació dels registres emmagatzemats no es pot desfer. Utilitza aquesta opció només si estàs segur que ja no necessites aquest historial.

Per esborrar totes les dades o suprimir registres en funció de la seva antiguitat, ves a [**Configuració** > **Seguiment de costos**](#cost-tracking). Allà trobaràs opcions per eliminar totes les dades emmagatzemades o només les dades anteriors a una data determinada.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Històric

Feu clic a **Històric** per veure l'historial d'accions dins de **Transrewrt**, incloent-hi les entrades i sortides de cada operació.

![Pàgina d'històric](../images/screenshots/ca/history.png)

<br/>

<a id="filter-the-history"></a>

### Filtra les dades

La **Història** utilitza els mateixos filtres que la pàgina del **Panell**. Utilitzeu-los per seleccionar el rang de temps.

![Filtres del panell](../images/screenshots/ca/dashboard-filter.png)

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

Obre **Configuració** al lateral per personalitzar el comportament de l'aplicació.

Les pestanyes disponibles depenen de la plataforma i del vostre rol:

  | Pestanya            | Escriptori | Web (admin) | Web (usuari habitual) |
  |---------------------|:----------:|:-----------:|:---------------------:|
  | Configuració general|     sí     |      sí     |          sí           |
  | Models              |     sí     |      sí     |          sí           |
  | Idiomes             |     sí     |      sí     |          sí           |
  | Seguiment de costos |     sí     |      sí     |            —          |
  | Prompts de transformació |  sí  |      sí     |          sí           |
  | Usuaris             |     —      |      sí     |            —          |
  | Configuració API    |     sí     |      sí     |            —          |
  | Quant a             |     sí     |      sí     |          sí           |

<br/>

> ℹ️ **NOTA**<br/>

> A la versió web, cada usuari té la seva pròpia configuració. La configuració com els models seleccionats, els idiomes, les opcions generals i els indicadors de transformació es desen per usuari. Els canvis que feu no afecten altres usuaris.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Configuració general

Utilitzeu la **Configuració general** per controlar el comportament mentre escriviu, si les dades d'execució s'emmagatzemen al **Historial** i l'aparença.

**Comportament**

- **Comportament del botó ENTER** permet triar si `Enter` executa la tasca o insereix una nova línia.
- **Traducció automàtica en enganxar** inicia la traducció tan aviat com enganxeu text.
- **Còpia automàtica del resultat al porta-retalls** copia automàticament els resultats exitosos.
- **Traducció en temps real (mentre s'escriu)** tradueix mentre esteu escrivint.
- **Temps d'espera (ms)** estableix el temps d'espera per a la traducció en temps real.

**Historial**

- **Conservar l'historial d'execucions** controla si cada traducció, reescritura i transformació emmagatzema el **text d'entrada i de sortida** per a la visualització del costat [**Historial**](#history). Desactivar-ho demana confirmació; si confirmeu, el text de l'historial emmagatzemat s'eliminarà de la base de dades.

- **Eliminar dades de l'historial** permet eliminar text emmagatzemat segons l'antiguitat (per exemple, més antics que uns mesos, o **totes les dades (neteja)**) utilitzant **Eliminar dades**. Això només afecta el text d'execució desat a la vista d'**Historial**; **no** elimina els costos ni els totals d'ús. Per eliminar o retallar dades de **cost**, utilitzeu [**Configuració** > **Seguiment de costos**](#cost-tracking).

**Aparença**

- **Mostra la informació de cost a les accions** controla la visualització del cost per operació (si està disponible) i el cost total als panells de sortida de Traduir, Reescriure i Transformar.
- **Xifres decimals del cost** canvia la manera com es mostren els decimals del cost.
- **Només web:** **mostra un marge al voltant de l'aplicació** afegeix espai addicional al voltant de la interfície.
- **Família de tipus de lletra** canvia la tipografia dels panells de text.
- **Mida** canvia la mida del tipus de lletra.

**Còpia de seguretat de la configuració**

- **Inclou dades d'ús a la còpia de seguretat** — quan està activada, el fitxer ZIP també conté l'historial d'execucions i les dades de crides a l'API.

- **Còpia de seguretat de la configuració** — crea un únic fitxer ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` a UTC per defecte) que inclou `config.json`, `state.json`, la clau d'encriptació opcional, usuaris, preferències, indicacions personalitzades i dades d'ús si heu activat aquesta opció. Després d'una còpia de seguretat correcta, es mostra una confirmació amb el nom del fitxer desat.
- **Restaurar des de la còpia de seguretat** — obre primer un **diàleg de confirmació**. Trieu el fitxer ZIP de la còpia de seguretat dins del diàleg (**Navegar** / selector de fitxers o arrossegar i deixar anar on sigui compatible) i, a continuació, reviseu les opcions:
  - **Restaurar les dades d'ús** — importa l'ús/històric del ZIP si es va fer la còpia de seguretat amb les dades d'ús incloses; desactiveu-ho si voleu només la configuració i les indicacions.
  - **Eliminar les dades d'ús antigues abans de restaurar** — suprimeix l'històric/ús existent en aquesta instància abans d'aplicar la còpia de seguretat (opcional; utilitzeu-ho quan vulgueu una substitució neta).

Les còpies de seguretat creades en la versió web o d'escriptori es poden restaurar a l'altre. Quan es restaura una còpia de seguretat d'escriptori a la versió web, les dades es restauraran a l'usuari administrador.


<br/>

<a id="models"></a>

### Models

Utilitzeu **Configuració** > **Models** per triar quins models apareixen a la barra d'eines.

![Configuració, pestanya Models](../images/screenshots/ca/settings-model cmake.png)

La pàgina té dues llistes:

- **Models disponibles** a l'esquerra
- **Models seleccionats** a la dreta

Els controls útils inclouen:

- **Cerca models...** per trobar un model pel nom
- Gots de **Proveïdor** per reduir la llista a un motor (OpenRouter, OpenAI, Ollama, …)
- Només **Gratuïts** per mostrar només models gratuïts
- **Actualitza** per tornar a carregar la llista
- **Expandeix tot** i **Col·lapsa tot** quan esteu ordenant per proveïdor

Les IDs dels models inclouen el prefix del proveïdor (per exemple `openrouter/…` vs `openai/…`). Les insígnies com ara **OpenAI (OpenRouter)** vs **OpenAI (directe)** mostren com es dirigeix el trànsit.

> ℹ️ **NOTA**<br/>

> **OpenRouter Body Builder** (`openrouter/bodybuilder`) és un model de router, no un model de xat general: la seva resposta és un JSON que descriu els cossos de les sol·licituds de l'API d'OpenRouter (per exemple, un array `requests` amb `model` i `messages`). Si l'uses per a **Traduir**, **Reescriure** o **Transformar**, el panell de sortida mostrarà aquest JSON en lloc del text finalitzat. Trieu un model de text normal per a aquestes tasques. Consulteu la [pàgina del model Body Builder](https://openrouter.ai/openrouter/bodybuilder) a OpenRouter.

Accions:

 - Per afegir un model, feu clic a **Afegir** o en qualsevol lloc de l'entrada.

 - Per eliminar un model, feu clic a la **X** al costat del model a **Models seleccionats** o a **Seleccionat** a l'entrada als Models disponibles.

 - Per buidar la llista, feu clic a **Deseleccionar tots**. El model gratuït obligatori romandrà a la llista.

<br/>

> ℹ️ **NOTA**<br/>

> Si no vols afegir crèdits a OpenRouter de seguida, comença activant **Només gratuït** i triant els models gratuïts (no cal targeta de crèdit). També pots utilitzar Ollama per executar models localment sense cap clau d'API.

<br/>

<a id="languages"></a>

### Idiomes

Utilitzeu **Configuració** > **Idiomes** per organitzar les llistes d'idiomes utilitzades a l'aplicació.

- Els **Idiomes principals** es fixen a prop del principi de les llistes d'idiomes a **Traduir** i **Transformar**.
- L'**idioma personalitzat** us permet afegir un idioma que no estigui a la llista integrada.

Si afegiu un idioma personalitzat, apareixerà als selectors d'idioma junts amb les opcions integrades.

<br/>

<a id="cost-tracking"></a>

### Seguiment de costos

Utilitzeu **Configuració** > **Seguiment de Costos** per gestionar la informació de costos.

- **Cost Total** mostra el total acumulat.
- **Copiar Valor** copia el total al porta-retalls.
- **Restablir Cost** reinicia el total emmagatzemat a zero.
- **Sincronitzar amb l'ús de la clau API** estableix el total perquè coincideixi amb l'ús reportat pel vostre compte OpenRouter (només OpenRouter).
- **Ús de la Clau API** mostra els detalls d'ús d'OpenRouter, si estan disponibles.
- **Eliminar dades de cost** elimina totes les dades o només les entrades més antigues que una data seleccionada.


**Seguiment de costos:** Quan utilitzeu models d'OpenRouter, l'aplicació mostra el vostre ús real i despeses basades en informació de costos d'OpenRouter. Per a tots els altres proveïdors, l'aplicació estima els costos utilitzant els preus publicats per OpenRouter; si no hi ha preu disponible, l'estimació pot ser zero.

<br/>

> ℹ️ **NOTA**<br/>
> **Totes les xifres de cost són estimacions només per a la vostra referència, no són extracts oficials de facturació.**


<br/>

> ⚠️ **ADVERTÈNCIA**<br/>

> La supressió de dades no es pot desfer. Abans d'esborrar, assegureu-vos de fer una còpia de seguretat de les vostres dades o exportar-les mitjançant [**Historial**](#history) 
> o [**Tauler** > **Totes les crides**](#dashboard-tabs); en cas contrari, es perdran permanentment. 
> Tot l'historial d'entrada/sortida relacionat amb cada entrada de crida a l'API també serà esborrat.


<br/>

<a id="transform-prompts"></a>

### Transformar indicacions

Utilitzeu **Configuració** > **Transformar indicacions** per gestionar les indicacions massivament.

Podeu:

- revisar les indicacions desades
- suprimir indicacions
- importar indicacions des d'un fitxer
- exportar indicacions per fer còpies de seguretat o compartir-les
- carregar indicacions de mostra a la llista d'indicacions

<br/>

<a id="users"></a>

### Usuaris

Utilitzeu **Usuaris** per gestionar comptes d'usuari a la versió web. Podeu afegir usuaris, actualitzar-ne les dades, restablir contrasenyes i eliminar comptes.

<br/>

<a id="api-config"></a>

### Configuració de l'API

Els proveïdors compatibles són: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, i **Ollama** (models locals mitjançant una URL base). Només cal configurar els proveïdors que utilitzeu.

**Aplicació web: només administrador**

Les claus d'API es configuren mitjançant variables d'entorn del sistema o de Docker — no es poden introduir a la interfície web. Aquesta pàgina mostra quins proveïdors tenen una clau configurada i us permet provar cadascun fent clic al botó **`Provar`**.

<br/>

> ℹ️ **NOTA**<br/>
> Per canviar una clau d'API, actualitzeu la variable d'entorn a la configuració del sistema o de Docker i reinicieu el servidor o el contenidor.

> ℹ️ **NOTA**<br/>

> **Còpies de seguretat de la configuració** (vegeu [**Configuració general** → Còpia de seguretat de la configuració](#general-settings)) poden incloure claus de proveïdors **resoltes** dins del `config.json` del fitxer ZIP. La restauració d’aquest ZIP **no** copia aquestes claus de tornada al fitxer de configuració emmagatzemat al servidor — les claus actives provenen de l'entorn i de l'estat actual del fitxer tal com es descriu allà.

<br/>

**Aplicació d'escriptori**

Utilitzeu **Configuració d'API** per desar les claus d'API de cada proveïdor que utilitzeu. Per a Ollama, introduïu l'**URL base** en lloc d'una clau d'API.


<br/>

> 💡 **Consell** <br/>
> Si no voleu utilitzar una clau d'API ni pagar per l'ús, podeu [descarregar Ollama](https://ollama.com) i executar models (com ara `translategemma:4b`) localment al vostre ordinador de manera gratuïta. Alternativament, podeu crear un compte gratuït a OpenRouter (sense necessitat de targeta de crèdit) per utilitzar els seus models gratuïts o obtenir una clau d'API gratuïta de Cerebras, Google, Groq o Mistral AI.

<br/>

- Afegeix només els proveïdors que necessitis. A **Configuració** > **Models**, cada identificador de model comença amb el proveïdor (per exemple `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Per afegir una clau API, introdueix el valor al camp de text i clica a **`Desa`**. Per substituir una clau existent, clica a **`Edita`**. Per comprovar que una clau funcioni, clica a **`Prova`**. Pel URL base d'Ollama, sempre clica a **`Prova`** per verificar la connexió.

<br/>

> ℹ️ **NOTA**<br/>
> No pots veure el valor actual d'una clau API. Només pots substituir-la utilitzant el botó **`Edita`**.
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

## Problemes habituals

Si alguna cosa no funciona com s'esperava, comproveu primer els següents punts.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>

### L'aplicació no traduirà, reescriurà ni transformarà el text

Comproveu que:

- heu seleccionat un model a la barra d'eines
- almenys un model apareix a [**Configuració** > **Models**](#models)
- la vostra configuració d'API funciona correctament

Si esteu utilitzant l'aplicació d'escriptori:

1. Obriu [**Configuració** > **Configuració d'API**](#api-config).
2. Comproveu que s'hagi desat com a mínim una clau d'API.
3. Feu clic a **Provar** al costat del proveïdor per confirmar que la clau funciona.

<br/>

<a id="the-model-list-is-empty"></a>

### La llista de models és buida

Obre [**Configuració** > **Models**](#models) i fes clic a **Actualitza**.

Si és necessari:

- cerca un model
- activa **Només gratuïts**
- afegeix un o més models a **Models seleccionats**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>

### El resultat és massa lent o massa car

Prova una o diverses d’aquestes solucions:

- tria un model diferent
- utilitza una entrada més curta
- desactiva la **Traducció en temps real (durant l’escriptura)** a [**Ajustos** > **Ajustos generals**](#general-settings)
- utilitza models gratuïts per a tasques senzilles (vegeu [Models](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### La interfície està en l'idioma equivocat

Feu clic a la icona del globus terraqüi a la [barra d'eines](#toolbar) i trieu el vostre **Idioma de la interfície** preferit.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>

### El text és massa petit o difícil de llegir

Obre [**Configuració** > **Configuració general**](#general-settings) i canvia:

- **Familia de la font**
- **Mida**

<br/>

<a id="dashboard-charts-are-empty"></a>

### Els gràfics del tauler estan buits

Això és normal si:

- només utilitzes **models gratuïts** i estàs consultant les xifres de **cost** (poden ser zero); els gràfics de recompte d'ús a **Resum** encara necessiten dades del període seleccionat
- el **filtre de temps** seleccionat no inclou el període en què es van fer les crides — prova amb **Tot** per comprovar-ho

Si els gràfics continuen buits després de seleccionar **Tot**, comprova que les crides apareixen a la secció [**Historial**](#history) o a la pestanya **Totes les crides**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### El cost mostra "no disponible" o sembla incorrecte

Quan utilitzeu models a través d'**OpenRouter**, l'aplicació mostra el cost real informat per OpenRouter.

Pel que fa a **altres proveïdors** (OpenAI directe, Anthropic directe, etc.), el cost es calcula a partir de dades de preus publicades per OpenRouter. Si no es troba un preu coincident per a un model, el cost apareixerà com a **no disponible** i no s'afegirà al total acumulat.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### El cost total no coincideix amb la factura del proveïdor

Totes les xifres de cost a l'aplicació són **estimacions només informatives**, no són factures oficials.

Per ajustar el total al que realment has gastat a OpenRouter, obre [**Ajustos** > **Seguiment de costos**](#cost-tracking) i fes clic a **Sincronitzar amb l'ús de la clau API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### La pàgina d'Historial falta al costat

L'opció **Conservar l'historial d'execució** pot estar desactivada. Obriu [**Configuració** > **Configuració general**](#general-settings) i activeu-la. Tingueu en compte que activar-la no restaura les dades d'historial esborrades anteriorment.

<br/>

<a id="web-app-session-expired"></a>

### Aplicació web: redirigida a la pàgina d'inici de sessió inesperadament

La vostra sessió pot haver expirat. Inicieu sessió de nou. Si això passa sovint, comproveu la configuració del servidor respecte al temps de vida de la sessió.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Administrador web: contrasenya oblidada o perduda

Això s'aplica a l'**aplicació web autoallotjada** (Docker), no a l'aplicació d’escriptori (Electron).

- Si un altre administrador encara pot iniciar sessió, pot obrir [**Configuració** > **Usuaris**](#users), seleccionar el compte i establir una **nova contrasenya** allà.
- Si esteu **bloquejats** però teniu **accés shell** a la màquina o al contenidor, restabliu la contrasenya mitjançant l'eina d'ajuda inclosa a la imatge (substituïu `transrewrt` si heu canviat el nom per defecte, i poseu entre cometes la contrasenya si conté espais o caràcters especials):

```bash
docker exec transrewrt reset-web-password '<nom d'usuari>' '<nova contrasenya>'
```

El nom d'usuari per defecte és `admin` si no heu creat cap altre compte. Quan només es passa un argument, aquest es tracta com la nova contrasenya per a `admin`.

Si executeu des d'un **codi font clonat** en comptes de Docker, utilitzeu:

```bash
pnpm run reset-web-password -- <nom d'usuari> <nova contrasenya>

L'script actualitza el registre d'usuari a la base de dades SQLite (i pot crear l'usuari `admin` si falta). Després de restablir, inicieu sessió amb la nova contrasenya.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### El tauler no mostra dades d'altres usuaris (web)

Només els **administradors** poden veure les dades de tots els usuaris mitjançant el filtre **Usuari**. Per disseny, els usuaris normals només veuen la seva pròpia activitat.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### He canviat una indicació i he perdut els canvis

Quan editis una indicació, fes sempre clic a **Desa** abans de fer clic a **Torna a Executar**.

<br/><br/>

<a id="quick-tips"></a>

## Consells ràpids

- Comenceu amb [**Traduir**](#translate) per assegurar-vos que la configuració funciona abans de passar a [**Reescriure**](#rewrite) o a [**Transformar**](#transform).
- Feu servir [**Reescriure**](#rewrite) per millorar quotidianament la redacció.
- Feu servir [**Transformar**](#transform) quan necessiteu un flux de treball reutilitzable per a una tasca específica.
- Feu servir el [**Tauler**](#dashboard) si voleu controlar l'ús i el cost.
- Feu servir l'**[Historial](#history)** per revisar operacions anteriors i els seus textos complets d'entrada i sortida.
- Exporteu regularment els prompts si esteu creant una biblioteca de prompts que voleu mantenir segura (vegeu [Prompts de transformació](#transform-prompts)) o si voleu compartirla amb altres.

<br/><br/>

<a id="disclaimer"></a>

## Avís legal

Noms i icones dels productes pertanyen als seus respectius propietaris i s'utilitzen només amb finalitats d'identificació. Aquest programari no està vinculat ni avalat per cap de les marques esmentades.

<br/><br/>

<a id="license"></a>

## Llicència

Copyright © 2026 Waldemar Scudeller Jr.

[Llicència Apache 2.0](LICENSE)