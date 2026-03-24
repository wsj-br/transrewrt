---
translated_at: "2026-03-24T01:14:47.789Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Guia d'usuari

<br/>

<a id="introduction"></a>
## Introducció

Transrewrt us ajuda a treballar amb text de tres maneres principals:

- **Traduir** - convertir text d'un idioma a un altre.
- **Reescriure** - reformular el text en un estil diferent, com ara més clar, més curt o més formal.
- **Transformar** - processar text utilitzant instruccions d'IA personalitzades anomenades "prompts".

<br/>

Aquesta guia explica com utilitzar l'aplicació un cop instal·lada i en marxa. Per als passos d'instal·lació, consulteu el fitxer **[README](README.ca.md)** principal.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt està disponible com a aplicació d'escriptori per a Windows i Linux, i com a aplicació web autoallotjada. Aquesta guia es centra en l'ús diari de l'aplicació. Quan alguna cosa només s'aplica a una versió, es marca clarament.

<small>**Llegiu en altres idiomes:** [English (UK)](USER-GUIDE.ca.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Taula de continguts**

- [Abans de començar](#abans-de-començar)
  - [Com obtenir una clau d'API gratuïta d'OpenRouter (aplicació d'escriptori)](#com-obtenir-una-clau-dapi-gratuïta-dopenrouter-aplicació-descriptori)
- [Primers passos](#primers-passos)
- [Parts principals de la finestra](#parts-principals-de-la-finestra)
  - [Barra lateral](#barra-lateral)
  - [Barra d'eines](#barra-deines)
  - [Panells d'entrada i sortida](#panells-dentrada-i-sortida)
- [Traduir](#traduir)
  - [Traduir text](#traduir-text)
  - [Selecció d'idioma](#selecció-didioma)
  - [Ajusts útils de traducció](#ajusts-útils-de-traducció)
  - [Dreceres de teclat](#dreceres-de-teclat)
- [Reescriure](#reescriure)
  - [Reescriure text](#reescriure-text)
- [Transformar](#transformar)
  - [Executar un "prompt" existent](#executar-un-prompt-existent)
  - [Si encara no en tens cap "prompt"](#si-encara-no-en-tens-cap-prompt)
  - [Crear un "prompt" ràpidament](#crear-un-prompt-ràpidament)
  - [Editar un "prompt"](#editar-un-prompt)
  - [Provar un "prompt" abans d'utilitzar-lo](#provar-un-prompt-abans-dutilitzar-lo)
  - [Gestionar els "prompts" desats](#gestionar-els-prompts-desats)
- [Tauler](#tauler)
  - [Filtrar les dades](#filtrar-les-dades)
  - [Pestanyes del tauler](#pestanyes-del-tauler)
  - [Exportar dades](#exportar-dades)
  - [Eliminar registres emmagatzemats per un model](#eliminar-registres-emmagatzemats-per-un-model)
- [Historial](#historial)
  - [Filtrar les dades](#filtrar-les-dades-1)
  - [Exportar dades de l'historial](#exportar-dades-de-lhistorial)
- [Configuració](#configuració)
  - [Ajusts generals](#ajusts-generals)
  - [Models](#models)
  - [Idiomes](#idiomes)
  - [Seguiment de costos](#seguiment-de-costos)
  - [Prompts de transformació](#prompts-de-transformació)
  - [Usuaris](#usuaris)
  - [Configuració de l'API](#configuració-de-lapi)
  - [Quant a](#quant-a)
- [Problemes habituals](#problemes-habituals)
  - [L'aplicació no tradueix, reescriu ni transforma el text](#laplicació-no-tradueix-reescriu-ni-transforma-el-text)
  - [La llista de models està buida](#la-llista-de-models-està-buida)
  - [El resultat és massa lent o massa car](#el-resultat-és-massa-lent-o-massa-car)
  - [La interfície està en l'idioma incorrecte](#la-interfície-està-en-lidioma-incorrecte)
  - [El text és massa petit o difícil de llegir](#el-text-és-massa-petit-o-difícil-de-llegir)
  - [Els gràfics del tauler estan buits](#els-gràfics-del-tauler-estan-buits)
  - [El cost mostra "no disponible" o sembla incorrecte](#el-cost-mostra-no-disponible-o-sembla-incorrecte)
  - [El cost total no coincideix amb la meva factura del proveïdor](#el-cost-total-no-coincideix-amb-la-meva-factura-del-proveïdor)
  - [La pàgina d'historial no apareix a la barra lateral](#la-pàgina-dhistorial-no-apareix-a-la-barra-lateral)
  - [Aplicació web: redirigit inesperadament a la pàgina de connexió](#aplicació-web-redirigit-inesperadament-a-la-pàgina-de-conexió)
  - [El tauler no mostra dades d'altres usuaris (web)](#el-tauler-no-mostra-dades-daltres-usuaris-web)
  - [He modificat un "prompt" i he perdut els canvis](#he-modificat-un-prompt-i-he-perdut-els-canvis)
- [Consells ràpids](#consells-ràpids)
- [Avís legal](#avís-legal)
- [Llicència](#llicència)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Abans de començar

Per utilitzar Transrewrt, necessiteu accés a com a mínim un proveïdor d'IA. Els proveïdors compatibles són: [OpenRouter](https://openrouter.ai) (que agrega molts models), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI i [Ollama](https://ollama.com) per a models locals.

No cal que seleccioneu un model de pagament per començar. Tan aviat com afegiu la vostra clau API d'OpenRouter, l'aplicació habilita automàticament una opció **gratuïta** integrada d'OpenRouter. Això us permet començar a traduir, reescriure i transformar text immediatament.

En paraules senzilles:

- Un **model** és el motor d'IA que fa la feina. Els models es llisten amb un **prefix del proveïdor** (per exemple `openrouter/…`, `openai/…`, `ollama/…`).
- Una **clau API** (o, per a Ollama, una **URL base**) és com arriba l'aplicació a aquest proveïdor.

Si esteu utilitzant l'**aplicació d'escriptori**, afegiu claus a [**Configuració** > **Config. API**](#api-config) per a cada proveïdor que utilitzeu. Per utilitzar només OpenRouter, vegeu [Com obtenir una clau API](#how-to-get-an-api-key-desktop-app) més avall. Si no voleu utilitzar una clau API, podeu instal·lar Ollama (des de [ollama.com](https://ollama.com)) i utilitzar models locals.

Si esteu utilitzant la **versió web**, el propietari del servidor configura els proveïdors amb variables d'entorn, per tant normalment no haureu d'introduir vosaltres mateixos les claus API.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Com obtenir una clau API gratuïta d'OpenRouter (aplicació d'escriptori)

Si esteu usant l'aplicació d'escriptori, seguiu aquests passos:

1. Aneu a [OpenRouter](https://openrouter.ai) amb el vostre navegador web.
2. Creeu un compte o inicieu sessió.
3. Obriu la pàgina [Keys](https://openrouter.ai/keys).
4. Feu clic al botó per crear una nova clau API.
5. Doneu un nom a la clau per poder-la reconèixer més endavant.
6. Copieu la nova clau API.
7. Torneu a Transrewrt i obriu **Configuració** > **Config. API**.
8. Enganxeu la clau a **Clau API d'OpenRouter** (sota **Configuració** > **Config. API**).
9. Feu clic a **Provar la clau d'OpenRouter** per assegurar-vos que funciona.

<br/>

> ℹ️ **NOTA**<br/>
> Podeu començar amb la ruta gratuïta d'OpenRouter o amb qualsevol dels altres models gratuïts disponibles sense afegir una targeta de crèdit. En molts casos, això és suficient per començar a utilitzar Transrewrt sense haver de triar un model de pagament. Alternativament, podeu usar Ollama per executar models localment sense cap clau API.

<br/><br/>

<a id="getting-started"></a>
## Primers passos

Si és la primera vegada que utilitzeu Transrewrt, seguiu aquest ordre:

1. Obriu l'aplicació.
2. Trieu el vostre **idioma d'interfície** des de la icona del globus si cal.
3. Si esteu a l'**aplicació d'escriptori**, obriu [**Configuració** > **Config. API**](#api-config), afegiu una clau API per a almenys un proveïdor (per exemple OpenRouter) i feu clic a **Provar** per verificar que funciona.
4. Obriu [**Configuració** > **Models**](#models) i afegiu un o més models a **Models seleccionats**.
5. Obriu [**Configuració** > **Idiomes**](#languages) i trieu els vostres **Idiomes principals** si voleu que els vostres idiomes més utilitzats apareguin primer.
6. Aneu a **Traduir** i feu una traducció senzilla per confirmar que tot funciona.
7. Un cop això funcioni, proveu **Reescriure** i després **Transformar**.

L'ordre és important. Això evita el problema més comú en l'ús inicial: intentar fer una tasca abans que l'aplicació tingui una connexió API funcional o un model seleccionat.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Parts principals de la finestra

L'aplicació es divideix en tres àrees principals:

- La **barra lateral** a l'esquerra.
- La **barra d'eines** a dalt.
- L'àrea de **treball** al centre.

<br/>

<a id="sidebar"></a>
### Barra lateral

Utilitzeu la barra lateral per desplaçar-vos per l'aplicació. Podeu col·lapsar la barra lateral per tenir més espai clicant a la icona al costat del logotip de l'aplicació.

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
        <li><strong>Reescriure</strong> obre l'àrea de treball de reescritura.</li><br/>
        <li><strong>Transformar</strong> obre l'àrea de treball de prompts personalitzats.</li><br/>
        <li><strong>Quadre de comandament</strong> mostra informació sobre ús i costos.</li><br/>
        <li><strong>Configuració</strong> obre el panell de configuració.</li><br/>
        <li><strong>Historial</strong> mostra l'historial d'ús amb el text d'entrada i de sortida.</li><br/>
        <li><strong>Usuari</strong> mostra el nom d'usuari de l'usuari connectat (només versió web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barra d'eines

La barra d'eines canvia lleugerament segons on es trobi dins l'aplicació.

- A l'esquerra, mostra el nom de la pàgina actual.
- A la dreta, mostra el **selector de models** i el control de l'**idioma de la interfície**.

El **selector de models** et permet triar quin motor d'IA utilitzar per a la tasca actual.

  ![Selector de models](../images/screenshots/ca/model-selector.png)

> ℹ️ **NOTA**<br/>
> Alguns models gratuïts potser no sempre estan disponibles: de tant en tant estan desconnectats o tenen un límit d'ús. Si això passa, l'aplicació eliminarà automàticament aquest model de la teva llista disponible.<br/>
> Per controlar quins models apareixen, ves a [**Configuració** > **Models**](#models) i edita la llista de models. 
> També pots obrir directament la configuració del model fent clic a la icona del proveïdor a l'esquerra del nom del model a la barra d'eines.

<br/>

La **icona de món + codi d'idioma** canvia l'idioma de la interfície de l'aplicació, com ara els menús i botons. No canvia els idiomes de traducció utilitzats a **Traduir**.

  ![Selector d'idioma de la interfície](../images/screenshots/ca/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panells d'entrada i sortida

La majoria d'espais de treball utilitzen un panell d'**Entrada** a l'esquerra i un panell de **Sortida** a la dreta.

El panell d'**Entrada** mostra:

- El recompte de caràcters
- El recompte de paraules
- El recompte de paràgrafs

El panell de **Sortida** pot mostrar:

- El temps que ha trigat la tasca
- El cost d'aquesta tasca (si està disponible)
- El cost acumulat total
- **TPS** (tokens per segon)
- El recompte de caràcters, paraules i paràgrafs
- El model utilitzat

Si tens dubtes amb els termes tècnics:

- **Token** vol dir un petit fragment de text. Es pot pensar com una part d'una paraula o una paraula curta.
- **TPS** vol dir quants d'aquests fragments de text ha processat el model cada segon.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Traduir

Utilitza **Traduir** quan vulguis convertir un text d'un idioma a un altre.

![Espai de treball de traducció](../images/screenshots/ca/translate.png)

<br/>

<a id="translate-text"></a>
### Traduir text

1. Obre **Traduir**.
2. Tria un idioma a **De**.
3. Tria un idioma a **A**.
4. Tria un model a la barra d'eines.
5. Escriu o enganxa el text a l'**Entrada**.
6. Fes clic a **Traduir**.
7. Llegeix el resultat a la **Sortida**.
8. Utilitza el botó de còpia si vols copiar el resultat.

<br/>

<a id="language-selection"></a>
### Selecció d'idioma

- **De** pot ser un idioma específic o **Detectar idioma**.
- **A** és l'idioma en què vols que sigui el resultat.

Els teus **Idiomes preferits** seleccionats apareixen al capdavant de la llista. Pots configurar-los a [**Configuració** > **Idiomes**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Opcions útils de traducció

A [**Configuració** > **Configuració general**](#general-settings), pots canviar el comportament de la traducció:

- **Traduir automàticament en enganxar** fa una traducció tan aviat com enganxis el text.
- **Copiar automàticament el resultat al porta-retalls** copia el resultat automàticament després d'una execució exitosa.
- **Traducció en temps real (mentre s'escriu)** fa traduccions mentre escrius.
- **Temps d'espera (ms)** controla quant temps espera l'aplicació abans de fer una traducció en temps real.

<br/>

<a id="keyboard-shortcuts"></a>
### Dreceres de teclat

A [**Configuració** > **Configuració general**](#general-settings), **Comportament de la tecla RETORN** controla què passa quan prems `Enter`:

- **Enter** pot executar la tasca i **Majúscules+Enter** pot afegir una línia nova.
- O bé l'aplicació pot fer el contrari.

El mode actual també es mostra al botó **Traduir**.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Reescriure

Utilitza **Reescriure** quan vulguis millorar l'expressió sense canviar-ne el significat principal.

![Espai de treball de reescriptura](../images/screenshots/ca/rewrite.png)

Això és útil per:

- corregir l'ortografia i la gramàtica
- fer el text més clar
- fer el text més formal o més informal
- resumir o ampliar el text
- fer que el text sembli més tècnic

<br/>

<a id="rewrite-text"></a>

### Reescriu text

1. Obre **Reescriptura**.
2. Tria un **Mode**.
3. Tria un model a la barra d'eines.
4. Escriu o enganxa el text a **Entrada**.
5. Fes clic a **Reescriu**.
6. Revisa el resultat a **Sortida**.

El mateix comportament de la tecla Entrar descrit a [**Traduir**](#keyboard-shortcuts) també s'aplica aquí.

<br/>

> 💡 **TIP**<br/>
> Quan utilitzes el mode "**Comprova ortografia i gramàtica**", apareix un botó `Mostra canvis` al panell de sortida.
> Fes clic en aquest botó per activar o desactivar la visualització de les correccions, mostrant o ocultant els canvis específics fets al teu text.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## Transforma

Utilitza **Transforma** quan vulguis que la IA segueixi un conjunt d'instruccions personalitzades.

![Espai de treball de Transforma](../images/screenshots/ca/transform.png)

Aquesta és l'àrea més flexible de l'aplicació. Pots utilitzar-la per fer tasques com ara:

- resumir notes
- convertir text rudimentari en un correu ben elaborat
- extreure punts clau
- convertir text en un format específic

<br/>

<a id="run-an-existing-prompt"></a>
### Executa una instrucció existent

1. Obre **Transforma**.
2. Tria una instrucció de la llista d'instruccions.
3. Si apareix un camp d'idioma **Destí**, tria un idioma si ho desitges.
4. Escriu o enganxa el text a **Entrada**.
5. Fes clic a **Transforma**.
6. Llegeix el resultat a **Sortida**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Si encara no tens cap instrucció

Si la llista d'instruccions està buida, fes clic a **Carrega instruccions d'exemple**. Això afegirà exemples integrats perquè puguis començar ràpidament.

<br/>

> ℹ️ **NOTA**<br/>
> Les instruccions d'exemple es proporcionen en anglès. Després de carregar-les, pots editar una instrucció i utilitzar **Tradueix instrucció** per traduir-la al teu idioma.

<br/>

<a id="create-a-prompt-quickly"></a>
### Crea una instrucció ràpidament

La manera més ràpida de crear una instrucció és:

1. Fes clic a **Nova instrucció**.
2. Fes clic a **Genera instrucció**.
3. Descriu què vols que faci l'instrucció.
4. Tria un model.
5. Deixa que l'aplicació creï un esborrany per tu.
6. Revisa l'esborrany i fes clic a **Desa**.

![Genera instrucció](../images/screenshots/ca/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Edita una instrucció

Quan crees o edits una instrucció, l'editor apareix a l'esquerra i una àrea de proves apareix a la dreta.

![Editor d'instruccions de Transforma](../images/screenshots/ca/transform-prompt-edit.png)

Els camps principals són:

- **Nom de l'instrucció**: el nom que es mostra a la llista d'instruccions.
- **Instruccions de l'instrucció (opcional)**: una breu ajuda que es mostra a l'usuari quan s'executa l'instrucció.
- **Rol del model**: el rol general assignat a la IA, com ara 'Ets un assistent útil.'
- **Instruccions del model (una per línia)**: les regles específiques que vols que segueixi la IA.
- **Descripció de la sortida**: una paraula breu que descriu el resultat, com ara 'resum' o 'reescriptura'.
- **Temperatura (0,0 → 1,0)**: com es comportarà el model; vegeu més avall.
- **Demana idioma de destinació**: afegeix un selector d'idioma quan s'executa l'instrucció.

Si el terme tècnic **Temperatura** et resulta nou, pensa-hi així:

- Una **temperatura més baixa** dóna resultats més estables i previsibles.
- Una **temperatura més alta** dóna més varietat i creativitat.

També pots utilitzar:

- **`Genera instrucció`** per crear un nou esborrany a partir d'una descripció simple
- **`Millora instrucció`** per perfeccionar una instrucció existent
- **`Tradueix instrucció`** per traduir els camps de l'instrucció

<br/>

> ⚠️ **ADVERTÈNCIA**<br/>
> Fes clic a **`Desa`** abans de fer clic a **`Torna a_executar`**. Si tornes enrere sense desar, es perdran els canvis.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Prova una instrucció abans d'utilitzar-la

El panell de proves de la dreta t'ajuda a provar la instrucció amb text d'exemple abans d'utilitzar-la en el treball diari.

Això és útil quan:

- estàs creant una nova instrucció
- estàs comparant dues versions d'una instrucció
- vols comprovar el to, la longitud o el format de la sortida

<br/>

<a id="manage-saved-prompts"></a>
### Gestiona les instruccions desades

Per gestionar totes les instruccions desades en un mateix lloc, obriu [**Configuració** > **Instruccions de Transforma**](#transform-prompts).

Allà pots:

- llistar i esborrar les teves instruccions
- exportar instruccions com a **JSON**, **CSV** o **XLSX**
- importar instruccions des d'un fitxer

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Taulell de control

Utilitzeu el **taulell de control** per veure quant esteu utilitzant l'aplicació i quin cost té (per als models de pagament).

![Resum del taulell de control](../images/screenshots/ca/dashboard-summary.png)


<br/>

> ℹ️ **NOTA**<br/>
> Si només utilitzeu models gratuïts, els gràfics relacionats amb el cost estaran buits.

<br/>

<a id="filter-the-data"></a>
### Filtrar les dades

Utilitzeu els botons de filtre de dalt per canviar l'interval de temps.

![Filtra els taulells de control](../images/screenshots/ca/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> El filtre **Usuari** només és visible per als administradors en la versió web. Els usuaris habituals no veuran aquest filtre, i no està disponible en l'aplicació d'escriptori.

<br/>

<a id="dashboard-tabs"></a>
### Pestanyes del taulell de control

- **Resum** us ofereix una visió general de l'ús i del cost.
- **Per ús** desglossa l'activitat per idioma de traducció, mode de reescriptura i indicació de transformació.
- **Per model** mostra quins models heu utilitzat i el cost que han tingut.
- **Per dia** mostra els totals diaris.
- **Tots els càrrecs** mostra l'historial complet de trucades i us permet exportar-lo.

<br/>

<a id="export-data"></a>
### Exportar dades

Les taules del taulell de control poden exportar les dades en:

- **JSON**
- **CSV**
- **XLSX**

Això és útil si voleu revisar l'activitat fora de l'aplicació o compartir un informe.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Eliminar registres emmagatzemats d'un model

A **Per model** o **Tots els càrrecs**, podeu eliminar els registres emmagatzemats d'un model fent clic a la icona de "papelera".

> ⚠️ **ADVERTÈNCIA**<br/>
> L'eliminació de registres emmagatzemats no es pot desfer. Utilitzeu aquesta opció només si esteu segur que ja no necessiteu aquest historial.

Per eliminar totes les dades o suprimir registres segons la seva antiguitat, aneu a [**Configuració** > **Seguiment de costos**](#cost-tracking). Allà trobareu opcions per eliminar totes les dades emmagatzemades o només les dades anteriors a una data determinada.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Historial

Feu clic a **Historial** per veure l'historial de les vostres accions dins de **Transrewrt**, incloent les entrades i sortides de cada operació.

![Pàgina d'historial](../images/screenshots/ca/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrar l'historial

**Historial** utilitza els mateixos filtres que la pàgina del **taulell de control**. Utilitzeu-los per seleccionar l'interval de temps.

![Filtra els taulells de control](../images/screenshots/ca/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> El filtre **Usuari** només és visible per als administradors en la versió web. Els usuaris habituals no veuran aquest filtre, i no està disponible en l'aplicació d'escriptori.

<br/>

<a id="export-history-data"></a>
### Exportar dades de l'historial

La pàgina d'historial pot exportar les dades filtrades en:

- **JSON**
- **CSV**
- **XLSX**

Això és útil si voleu revisar l'activitat fora de l'aplicació o compartir un informe.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Configuració

Obriu la **configuració** des del lateral per personalitzar el comportament de l'aplicació.

Les pestanyes disponibles depenen de la plataforma i del vostre rol:

  | Pestanya               | Escriptori | Web (admin) | Web (usuari habitual) |
  |------------------------|:----------:|:-----------:|:---------------------:|
  | Configuració general   |    sí      |     sí      |          sí            |
  | Models                 |    sí      |     sí      |          sí            |
  | Idiomes                |    sí      |     sí      |          sí            |
  | Seguiment de costos    |    sí      |     sí      |           —            |
  | Indicacions de transformació | sí  |     sí      |          sí            |
  | Usuaris                |     —      |     sí      |           —            |
  | Configuració API       |    sí      |     sí      |           —            |
  | Quant a                |    sí      |     sí      |          sí            |

<br/>

> ℹ️ **NOTA**<br/>
> A la versió web, cada usuari té la seva pròpia configuració. Ajustos com els models seleccionats, idiomes, opcions generals i indicacions de transformació es desen per usuari. Els canvis que feu no afecten als altres usuaris.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Configuració general

Utilitzeu la **Configuració general** per controlar el comportament de mecanografia, si s’emmagatzemen detalls d’execució a l’**Historial** i l’aparença.

**Comportament**

- **Comportament de la tecla ENTRAR** determina si `Entrar` executa la tasca o insereix una línia nova.
- **Traducció automàtica en enganxar** comença la traducció tan bon punt enganxeu text.
- **Copia automàtica del resultat al portaobjectes** copia els resultats amb èxit automàticament.
- **Traducció en temps real (mentre escriu)** tradueix mentre escriviu.
- **Temps d’espera (ms)** estableix el temps d’espera per a la traducció en temps real.

**Historial**

- **Mantenir historial d'execució** controla si cada traducció, reescriptura i transformació emmagatzema el **text d'entrada i de sortida** per a la vista d’[**Historial**](#history) del lateral. Desactivar-ho demana confirmació; si hi esteu d’acord, el text emmagatzemat s’eliminarà de la base de dades.
- **Eliminar dades de l'historial** permet eliminar textos emmagatzemats per edat (per exemple, més antics que uns quants mesos, o **totes les dades (esborrar)**) mitjançant **Eliminar dades**. Això només afecta el text d’execució desat per a la vista d’**Historial**; **no** elimina els costos ni els totals d’ús. Per eliminar o reduir les dades de **cost**, utilitzeu [**Configuració** > **Seguiment de costos**](#cost-tracking).

**Aparença**

- **Xifres decimals del cost** canvia com es mostren els decimals del cost.
- **Només web:** **mostrar un marge al voltant de l'aplicació** afegeix espai addicional al voltant de la interfície.
- **Família de lletra** canvia la lletra dels panells de text.
- **Mida** canvia la mida de la lletra.


<br/>

<a id="models"></a>
### Models

Utilitzeu **Configuració** > **Models** per triar quins models apareixen a la barra d’eines.

![Pestanya Models de la configuració](../images/screenshots/ca/settings-models.png)

La pàgina té dues llistes:

- **Models disponibles** a l’esquerra
- **Models seleccionats** a la dreta

Els controls útils inclouen:

- **Cercar models...** per trobar un model pel nom
- Xips de **Proveïdor** per ajustar la llista a un motor (OpenRouter, OpenAI, Ollama, …)
- **Només gratuïts** per mostrar només models gratuïts
- **Actualitzar** per tornar a carregar la llista
- **Expandir tot** i **Plegar tot** quan ordeneu per proveïdor

Les identificacions dels models inclouen el prefix del proveïdor (per exemple `openrouter/…` vs `openai/…`). Insígnies com **OpenAI (OpenRouter)** vs **OpenAI (directe)** mostren com es dirigeix el trànsit.

Accions:

 - Per afegir un model, feu clic a **Afegir** o a qualsevol lloc de l’entrada.

 - Per eliminar un model, feu clic a **X** al costat a **Models seleccionats** o a **Seleccionat** a l'entrada de Models disponibles.

 - Per esborrar la llista, feu clic a **Deseleccionar tot**. El model gratuït necessari es mantindrà a la llista.

<br/>

> ℹ️ **NOTA**<br/>
> Si no voleu afegir crèdits a OpenRouter immediatament, comenceu activant **Només gratuïts** i triant els models gratuïts (no cal targeta de crèdit). També podeu utilitzar Ollama per executar models localment sense cap clau d'API.

<br/>

<a id="languages"></a>
### Idiomes

Utilitzeu **Configuració** > **Idiomes** per organitzar les llistes d’idiomes utilitzades a l’aplicació.

- Els **Idiomes principals** es claven prop del principi de les llistes d’idiomes a **Traduir** i **Transformar**.
- **Idioma personalitzat** us permet afegir un idioma que no estigui a la llista integrada.

Si afegiu un idioma personalitzat, apareixerà als selectors d’idioma al costat de les opcions integrades.

<br/>

<a id="cost-tracking"></a>
### Seguiment de costos

Utilitzeu **Configuració** > **Seguiment de costos** per gestionar la informació de costos.

- **Cost total** mostra el total acumulat.
- **Copiar valor** copia el total al portaobjectes.
- **Reiniciar cost** estableix el total emmagatzemat a zero.
- **Sincronitzar amb l’ús de la clau d’API** iguala el total amb l’ús informat per el vostre compte OpenRouter (només OpenRouter).
- **Ús de la clau d’API** mostra els detalls d’ús d’OpenRouter, si estan disponibles.
- **Eliminar dades de cost** elimina totes les dades o només les entrades més antigues que una data seleccionada.

**Seguiment de costos:** Quan utilitzeu models OpenRouter, l’aplicació mostra el vostre ús i despesa reals basats en dades d’OpenRouter. Per a tots els altres proveïdors, l’aplicació estima els costos mitjançant preus publicats per OpenRouter; si no hi ha preu disponible, l’estimació pot ser zero.

<br/>

> ℹ️ **NOTA**<br/>
> Totes les xifres de cost són estimacions només per a la vostra referència, no són factures oficials.


<br/>

> ⚠️ **AVÍS**<br/>
> L’eliminació de dades no es pot desfer. Abans d’eliminar, assegureu-vos de fer una còpia de seguretat de les vostres dades o d’exportar-les mitjançant [**Tauler** > **Totes les crides**](#dashboard-tabs), en cas contrari es perdran permanentment. <br/> 
> També s’eliminarà tot l’historial relacionat amb cada entrada de crida a l’API.


<br/>

<a id="transform-prompts"></a>

### Transformar indicacions

Utilitzeu **Configuració** > **Transformar indicacions** per gestionar les indicacions en bloc.

Podeu:

- revisar les indicacions desades
- eliminar indicacions
- importar indicacions des d’un fitxer
- exportar indicacions per fer-ne còpia de seguretat o compartir-les

<br/>

<a id="users"></a>
### Usuaris

**Web: només administrador**

Utilitzeu **Usuaris** per gestionar comptes d'usuari a la versió web. Podeu afegir usuaris, actualitzar-ne les dades, restablir contrasenyes i eliminar comptes.

<br/>

<a id="api-config"></a>
### Configuració de l'API

Els proveïdors admesos són: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, i **Ollama** (models locals mitjançant una URL base). Només cal que configureu els proveïdors que utilitzeu.

**Aplicació web: només administrador**

Les claus d'API es configuren mitjançant variables d'entorn del sistema o de Docker – no s’introdueixen a la interfície web. Aquesta pàgina mostra quins proveïdors tenen una clau configurada i us permet comprovar-los fent clic al botó **`Prova`**.

<br/>

> ℹ️ **NOTA**<br/>
> Per canviar una clau d'API, actualitzeu la variable d'entorn a la configuració del sistema o de Docker i reinicieu el servidor o el contenidor.

<br/>

**Aplicació d'escriptori**

Utilitzeu **Configuració de l'API** per desar claus d'API per a cada proveïdor que utilitzeu. Per a Ollama, introduïu l'**URL base** en lloc d'una clau d'API.


<br/>

> 💡 **Consell** <br/>
> Si no voleu utilitzar una clau d'API ni pagar per l'ús, podeu [descarregar Ollama](https://ollama.com) i executar models localment al vostre ordinador gratuïtament. Alternativament, podeu crear un compte gratuït a OpenRouter (sense necessitat de targeta de crèdit) per utilitzar els seus models gratuïts.

- Afegiu només els proveïdors que necessiteu. A **Configuració** > **Models**, cada identificador de model comença amb el proveïdor (per exemple `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Per afegir una clau d'API, escriviu el valor al camp de text i feu clic a **`Desa`**. Per substituir una clau existent, feu clic a **`Edita`**. Per comprovar si una clau funciona, feu clic a **`Prova`**.

<br/>

> ℹ️ **NOTA**<br/>
> No podeu veure el valor actual d'una clau d'API. Només podeu substituir-la mitjançant el botó **`Edita`**.
> Les claus d'API es desen xifrades al fitxer de configuració.

<br/>

Per obtenir passos detallats sobre com obtenir una clau OpenRouter, consulteu [Com obtenir una clau d'API](#how-to-get-an-api-key-desktop-app) anteriorment.

<br/>

<a id="about"></a>
### Quant a

La pestanya **Quant a** mostra:

- el nom de l’aplicació
- el número de versió
- la data de compilació
- un enllaç al repositori del projecte

<br/><br/>

<a id="common-issues"></a>
## Problemes habituals

Si alguna cosa no funciona com s’espera, comproveu primer els punts següents.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### L'aplicació no tradueix, reescriu ni transforma el text

Comproveu que:

- heu seleccionat un model a la barra d'eines
- com a mínim un model apareix a [**Configuració** > **Models**](#models)
- la vostra configuració d'API funciona

Si esteu utilitzant l'aplicació d'escriptori:

1. Obriu [**Configuració** > **Configuració de l'API**](#api-config).
2. Comproveu que s'hagi desat almenys una clau d'API.
3. Feu clic a **Prova** al costat del proveïdor per confirmar que la clau funciona.

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

Proveu una o més de les opcions següents:

- trieu un model diferent
- utilitzeu una entrada més curta
- desactiveu la **Traducció en temps real (mentre s'escriu)** a [**Configuració** > **Configuració general**](#general-settings)
- utilitzeu models gratuïts per a tasques senzilles (vegeu [Models](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### La interfície està en l'idioma incorrecte

Feu clic a la icona de globus a la [barra d'eines](#toolbar) i trieu el vostre **Idioma de la interfície** preferit.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### El text és massa petit o difícil de llegir

Obriu [**Configuració** > **Configuració general**](#general-settings) i canvieu:

- **Tipus de lletra**
- **Mida**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Els gràfics del tauler estan buits

Això és normal si:

- només utilitzeu **models gratuïts** (els gràfics de cost romandran buits)
- el **filtre de temps** seleccionat no inclou el període en què es van fer les crides – intenteu **Tots** per comprovar-ho

Si els gràfics segueixen buits després de seleccionar **Tots**, comproveu que les crides apareguin a la **Història** o a la pestanya **Totes les crides**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### El cost mostra "no disponible" o sembla incorrecte

Quan utilitzeu models a través d'**OpenRouter**, l'aplicació mostra el cost real que informa OpenRouter.

Per a **altres proveïdors** (OpenAI directe, Anthropic directe, etc.), el cost es calcula a partir de les dades de preus publicades per OpenRouter. Si no es troba un preu que coincideixi amb un model, el cost apareixerà com a **no disponible** i no s'afegirà al total acumulat.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### El cost total no coincideix amb la meva factura del proveïdor

Tots els costos mostrats a l'aplicació són **estimacions només a títol orientatiu**, no són factures oficials.

Per ajustar el total al vostre cost real amb OpenRouter, obriu [**Configuració** > **Seguiment de costos**](#cost-tracking) i feu clic a **Sincronitzar amb l'ús de la clau API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### La pàgina d'Historial no apareix a la barra lateral

L'opció **Mantenir l'historial d'execució** pot estar desactivada. Obriu [**Configuració** > **Configuració general**](#general-settings) i activeu-la. Tingueu en compte que activar-la no recupera les dades d'historial esborrades prèviament.

<br/>

<a id="web-app-session-expired"></a>
### Aplicació web: redirigit inesperadament a la pàgina d'inici de sessió

La vostra sessió pot haver expirat. Torneu a iniciar la sessió. Si això ocorre sovint, comproveu la configuració del servidor sobre la durada de sessió.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### El quadre de comandament no mostra dades d'altres usuaris (web)

Només els **administradors** poden visualitzar les dades de tots els usuaris mitjançant el filtre **Usuari**. Per disseny, els usuaris normals només veuen la seva pròpia activitat.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### He modificat un indicador i he perdut els canvis

Quan editeu un indicador, sempre heu de fer clic a **Desa** abans de fer clic a **Torna a l'execució**.

<br/><br/>

<a id="quick-tips"></a>
## Consells ràpids

- Comenceu amb [**Tradueix**](#translate) per assegurar-vos que la configuració funciona abans de passar a [**Reescriu**](#rewrite) o [**Transforma**](#transform).
- Utilitzeu [**Reescriu**](#rewrite) per millorar el redactat en tasques habituals.
- Utilitzeu [**Transforma**](#transform) quan necessiteu un flux de treball reproductible per a una tasca específica.
- Utilitzeu [**Quadre de comandament**](#dashboard) si voleu controlar l'ús i el cost.
- Utilitzeu [**Historial**](#history) per revisar operacions anteriors i els seus textos complets d'entrada i sortida.
- Exporteu els indicadors regularment si esteu creant una biblioteca d'indicadors que vulgueu conservar (vegeu [Transforma indicadors](#transform-prompts)) o si voleu compartir-los amb altres.

<br/><br/>

<a id="disclaimer"></a>
## Avís legal

Noms i icones de productes pertanyen als seus respectius propietaris i s'utilitzen només amb finalitats d'identificació. Aquest programari no està afiliat ni endossat per cap de les marques esmentades.

<br/><br/>

<a id="license"></a>
## Llicència

Copyright © 2026 Waldemar Scudeller Jr.

[Llicència Apache 2.0](LICENSE)