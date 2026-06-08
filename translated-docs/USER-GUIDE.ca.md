![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Guia d'usuari

<br/>

<a id="introduction"></a>
## Introducció

Transrewrt us ajuda a treballar amb text de tres maneres principals:

- **Traduir** - convertir text d'un idioma a un altre.
- **Reescriure** - reformular el text en un estil diferent, com ara més clar, més breu o més formal.
- **Transformar** - processar text mitjançant instruccions personalitzades d'intel·ligència artificial anomenades indicacions.

Per defecte, l'aplicació s'executa en mode **Fàcil**: esculls una **preconfiguració** (per exemple, Gratuït (OpenRouter), Estàndard, Avançat o Tècnic) i un **proveïdor** a la Configuració, sense triar identificadors de model. Canvia a **Avançat** a [**Configuració** > **Configuració general**](#general-settings) si vols la llista de models clàssica de [**Configuració** > **Models**](#models).

<br/>

Aquesta guia explica com utilitzar l'aplicació un cop instal·lada i en execució. Per als passos d'instal·lació, consulteu el [**README**](README.ca.md) principal.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt està disponible com a aplicació d'escriptori per a Windows i Linux, i com a aplicació web autoallotjada. Aquesta guia es centra en l'ús diari de l'aplicació. Quan alguna cosa només s'aplica a una versió, es marca clarament.

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
  - [Tradueix text](#translate-text)
  - [Selecció d'idioma](#language-selection)
  - [Configuracions de traducció útils](#helpful-translation-settings)
  - [Refinant la teva traducció](#refining-translation)
- [Reescriptura](#rewrite)
- [Transformació](#transform)
  - [Executa un indicador existent](#run-an-existing-prompt)
  - [Si encara no tens indicadors](#if-you-have-no-prompts-yet)
  - [Crea un indicador ràpidament](#create-a-prompt-quickly)
  - [Edita un indicador](#edit-a-prompt)
  - [Prova un indicador abans d'utilitzar-lo](#test-a-prompt-before-using-it)
- [Tauler de control](#dashboard)
  - [Filtra les dades](#filter-the-data)
  - [Pestanyes del tauler de control](#dashboard-tabs)
  - [Exporta dades](#export-data)
  - [Elimina registres emmagatzemats per a un model](#delete-stored-records-for-a-model)
- [Historial](#history)
  - [Filtra l'historial](#filter-the-history)
  - [Exporta dades de l'historial](#export-history-data)
- [Configuració](#settings)
  - [Configuració general](#general-settings)
  - [Models](#models)
  - [Idiomes](#languages)
  - [Seguiment de costos](#cost-tracking)
  - [Transformació (pestanya de configuració)](#transform-settings-tab)
  - [Usuaris](#users)
  - [Configuració de l'API](#api-config)
  - [Quant a](#about)
- [Problemes comuns](#common-issues)
  - [L'aplicació no tradueix, reescriu o transforma text](#the-app-will-not-translate-rewrite-or-transform-text)
  - [La llista de models està buida](#the-model-list-is-empty)
  - [El resultat és massa lent o massa car](#the-result-is-too-slow-or-too-expensive)
  - [La interfície està en l'idioma incorrecte](#the-interface-is-in-the-wrong-language)
  - [El text és massa petit o difícil de llegir](#the-text-is-too-small-or-hard-to-read)
  - [El resum del tauler de control sembla buit](#dashboard-summary-looks-empty)
  - [El cost mostra "no disponible" o sembla incorrecte](#cost-shows-not-available-or-seems-wrong)
  - [El cost total no coincideix amb la factura del meu proveïdor](#total-cost-does-not-match-my-provider-bill)
  - [La pàgina d'historial falta de la barra lateral](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicació web: redirigit a la pàgina d'inici de sessió inesperadament](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Administrador web: he oblidat o he perdut una contrasenya](#web-admin-forgot-or-lost-a-password)
  - [El tauler de control no mostra dades per a altres usuaris (web)](#dashboard-shows-no-data-for-other-users-web)
  - [He canviat un indicador i he perdut les edicions](#i-changed-a-prompt-and-lost-the-edits)
- [Consells ràpids](#quick-tips)
- [Renúncia](#disclaimer)
- [Llicència](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Abans de començar

Per utilitzar Transrewrt, necessiteu accés a com a mínim un proveïdor d'IA. Els proveïdors compatibles són: [OpenRouter](https://openrouter.ai) (que agrega molts models), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras i [Ollama](https://ollama.com) per a models locals.

No cal que seleccioneu un model de pagament per començar. Tan aviat com afegiu la vostra clau API d'OpenRouter, l'aplicació habilita automàticament una opció **gratuïta** integrada d'OpenRouter. Això us permet començar a traduir, reescriure i transformar text immediatament. Alternativament, també podeu obtenir una clau API gratuïta de Cerebras, Google, Groq o Mistral AI.

En paraules senzilles:

- En mode **Fàcil**, un **predeterminat** (Gratuït (OpenRouter), Estàndard, Avançat o Tècnic) es correspon a un model del **proveïdor** seleccionat (OpenRouter, OpenAI, Ollama i altres). Només apareixen al barra d'eines els predeterminats que tenen una assignació per al proveïdor actual. Seleccioneu el predeterminat a Traduir, Reescriure i Transformar.
- En mode **Avançat**, un **model** és el motor d'IA que trieu directament. Els IDs de model utilitzen un **prefix del proveïdor** (per exemple `openrouter/…`, `openai/…`, `ollama/…`).
- Una **clau API** (o, per a Ollama, una **URL base**) és com l'aplicació accedeix al proveïdor.

Si estàs utilitzant l'**aplicació d'escriptori**, afegeix claus a [**Configuració** > **Configuració de l'API**](#api-config) per a cada proveïdor que utilitzis. Per a ús exclusiu d'OpenRouter, consulta [Com obtenir una clau d'API gratuïta d'OpenRouter](#how-to-get-a-free-openrouter-api-key-desktop-app) a continuació. Si no vols utilitzar una clau d'API, pots instal·lar Ollama (des de [ollama.com](https://ollama.com)) i utilitzar models locals en el seu lloc, com `translategemma:4b`.

Si esteu utilitzant la **versió web**, el propietari del servidor configura els proveïdors amb variables d'entorn, per tant no podeu introduir claus API directament a l'aplicació.

<br/>

<a id="how-to-get-a-free-openrouter-api-key-desktop-app"></a>
### Com obtenir una clau d'API gratuïta d'OpenRouter (aplicació d'escriptori)

Si esteu utilitzant l'aplicació d'escriptori, seguiu aquests passos:

1. Aniu a [OpenRouter](https://openrouter.ai) amb el vostre navegador web.
2. Creeu un compte o inicieu sessió.
3. Obriu la pàgina de [Claus](https://openrouter.ai/keys).
4. Feu clic al botó per crear una nova clau API.
5. Doneu un nom a la clau per poder-la reconèixer més tard.
6. Copieu la nova clau API.
7. Torneu a Transrewrt i obriu **Configuració** > **Configuració de l'API**.
8. Enganxeu la clau a **Clau API d'OpenRouter** (sota **Configuració** > **Configuració de l'API**).
9. Feu clic a **Prova la clau d'OpenRouter** per assegurar-vos que funciona.

<br/><br/>

<a id="getting-started"></a>
## Primers passos

Si és la primera vegada que utilitzeu Transrewrt, seguiu aquest ordre:

1. Obriu l'aplicació.
2. Trieu el vostre **Idioma de la interfície** des de la icona del globus si cal.
3. Si esteu a l'**aplicació d'escriptori**, obriu [**Configuració** > **Configuració de l'API**](#api-config), afegiu una clau API per a almenys un proveïdor (per exemple OpenRouter) i feu clic a **Prova** per verificar que funcioni.
4. Obriu [**Configuració** > **Configuració general**](#general-settings). En mode **Fàcil** (per defecte), trieu un **Proveïdor** que tingui una clau configurada. En mode **Avançat**, obriu [**Configuració** > **Models**](#models) i afegiu un o més models a **Models seleccionats**.
5. A **Traduir**, seleccioneu un **predeterminat** (Fàcil) o **model** (Avançat) a la barra d'eines.
6. Obriu [**Configuració** > **Idiomes**](#languages) i trieu els vostres **Idiomes principals** si voleu que els idiomes més utilitzats apareguin primers.
7. Feu una traducció senzilla per confirmar que tot funciona, després proveu **Reescriure** i **Transformar**.

Aquest ordre és important. Evita el problema més comú en el primer ús: intentar executar una tasca abans que l'aplicació tingui una connexió API funcional o un predeterminat/model seleccionat.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Parts principals de la finestra

L'aplicació es divideix en tres àrees principals:

- La **barra lateral** de l'esquerra.
- La **barra d'eines** superior.
- L'**àrea de treball** del centre.

<br/>

<a id="sidebar"></a>
### Barra lateral

Utilitzeu la barra lateral per desplaçar-vos per l'aplicació. Podeu col·lapsar la barra lateral per obtenir més espai fent clic a la icona al costat del logotip de l'aplicació.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/ca/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Traduir</strong> obre l'àrea de treball de traducció.</li><br/>
        <li><strong>Reescriure</strong> obre l'àrea de treball de reescriptura.</li><br/>
        <li><strong>Transformar</strong> obre l'àrea de treball d'indicadors personalitzats.</li><br/>
        <li><strong>Tauler</strong> mostra la informació d'ús i cost.</li><br/>
        <li><strong>Configuració</strong> obre el quadre de configuració.</li><br/>
        <li><strong>Historial</strong> mostra l'historial d'ús amb el text d'entrada i de sortida</li><br/>
        <li><strong>Usuari</strong> mostra el nom d'usuari de l'usuari connectat (només web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Barra d'eines

La barra d'eines canvia lleugerament segons on esteu a l'aplicació.

- A l'esquerra, mostra el nom de la pàgina actual.
- A la dreta, mostra el selector de **predeterminat o model** i el control d'**Idioma de la interfície**.

En mode **Fàcil**, la barra d'eines mostra un **selector de predeterminats** amb els predeterminats integrats **Gratuït (OpenRouter)**, **Estàndard**, **Avançat** i **Tècnic**. Els predeterminats que apareixen depenen del **Proveïdor** seleccionat a [**Configuració** > **Configuració general**](#general-settings); per exemple, **Gratuït (OpenRouter)** només apareix quan el proveïdor és OpenRouter. Si el **Proveïdor** és **Ollama**, la barra d'eines mostra els models locals instal·lats en comptes dels predeterminats.

En mode **Avançat**, el selector de **model** us permet triar quin motor d'IA utilitzar per a la tasca actual.

![Model selector](../images/screenshots/ca/preset-selector.png)

En mode Avançat, alguns models gratuïts poden no estar sempre disponibles: poden estar desconnectats o haver assolit un límit d'ús. L'aplicació pot eliminar automàticament aquest model de la vostra llista. Per controlar quins models apareixen, aneu a [**Configuració** > **Models**](#models). Podeu obrir la configuració del model des de la icona del proveïdor a l'esquerra del nom del model a la barra d'eines.

<br/>

La **icona de globus terraqüi + codi d'idioma** canvia l'idioma de la interfície de l'aplicació, com ara menús i botons. **No** canvia els idiomes de traducció utilitzats a **Traduir**.

![Interface language selector](../images/screenshots/ca/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panells d'entrada i sortida

La majoria d'àrees de treball utilitzen un panell d'**Entrada** a l'esquerra i un panell de **Sortida** a la dreta.

Cada panell també mostra:

| **Entrada**                                                          | **Sortida**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Comptador de caràcters <br/>- Comptador de paraules <br/>- Comptador de paràgrafs   <br/> | - Temps que ha trigat la tasca<br/>- **TPS** (tokens per segon)<br/>- Comptadors de caràcters, paraules i paràgrafs<br/>- El model utilitzat |

Si us pregunteu sobre els termes tècnics:

- **Token** vol dir un fragment petit de text. Podeu pensar-hi com a part d'una paraula o una paraula curta.
- **TPS** vol dir quants d'aquests fragments de text ha processat el model cada segon.

<br/>

També podeu controlar el cost de cada operació (si està disponible) i el cost total, activant l'opció `Show cost information on the actions` a [**Configuració** > **Configuració general**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Traduir

Utilitzeu **Traduir** quan vulgueu convertir text d'un idioma a un altre.

![Translate workspace](../images/screenshots/ca/translate.png)

<br/>

<a id="translate-text"></a>
### Traduir text

1. Obriu **Traduir**.
2. Trieu un idioma a **Des de**.
3. Trieu un idioma a **A**.
4. Seleccioneu un predeterminat (Fàcil) o model (Avançat) a la barra d'eines.
5. Escriviu o enganxeu text a **Entrada**.
6. Feu clic a **Traduir**.
7. Llegiu el resultat a **Sortida**.
8. Utilitzeu el botó de còpia si voleu copiar el resultat.
9. Opcionalment refina el resultat amb **Reformula…** o alternatives de paraules — vegeu [Refinant la vostra traducció](#refining-translation).

<br/>

<a id="language-selection"></a>
### Selecció d'idioma

- **From** pot ser un idioma específic o **Detectar idioma**.
- **To** és l'idioma en què voleu el resultat.

Els vostres **Idiomes preferits** seleccionats apareixen a la part superior de la llista. Podeu configurar-los a [**Configuració** > **Idiomes**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Configuració útil de traducció

A [**Configuració** > **Configuració general**](#general-settings), podeu canviar el comportament de la traducció:

- **Executar automàticament en enganxar** executa una traducció tan aviat com enganxes text.
- **Copiar automàticament el resultat al porta-retalls** copia el resultat automàticament després d'una execució exitosa.
- **Traducció en temps real mentre escrius** (⚠️ Això pot augmentar els costos d'ús) executa traduccions mentre escrius.
- **Temps d'espera (ms)** controla quant de temps l'aplicació espera abans d'executar una traducció en temps real.
- **Comportament per a ENTER** tria si `Enter` executa la tasca o insereix una nova línia:
  - **Enter** executa traduir o reescriptura (per defecte).
  - **Shift + Enter** executa traduir o reescriptura; **Enter** normal insereix una nova línia.

<br/>

<a id="refining-translation"></a>
### Refinant la teva traducció

Després d'una traducció exitosa, **Reformula…** i el menú desplegable de versió apareixen a la capçalera de sortida, al costat del selector de llengua **A:**. Podeu refinar el resultat allí:

1. **Reformula…** — sense text seleccionat a la sortida, obtindreu una altra traducció completa de la mateixa entrada amb una redacció diferent. El model rep cada versió que ja teniu, de manera que la nova redacció pot diferir de totes elles. Podeu emmagatzemar fins a **cinc** versions i canviar entre elles al menú desplegable de versió. Amb text seleccionat, **Reformula…** obre alternatives de paraules a prop de la selecció (igual que fer clic amb el botó dret). Sense una selecció, **Reformula…** es desactiva un cop arribeu a cinc versions; amb una selecció, encara funciona amb cinc versions (alternatives de paraules només, actualitzant la versió 5). Mentre s'està executant una reformulació completa, feu clic a **Atura Traducció** per cancel·lar; la sortida torna a la versió que estava activa quan va començar la reformulació.
2. **Alternatives de paraules** — seleccioneu una o més paraules o una frase curta a la sortida (si seleccioneu només part d'una paraula, l'aplicació amplia la selecció a paraules completes), després feu clic amb el botó dret o feu clic a **Reformula…**. Apareix una llista curta d'alternatives a prop de la selecció; feu clic a una per substituir-la. Cada opció pot substituir un rang lleugerament més ampli que la vostra selecció (per exemple, una preposició o article adjacent) de manera que la frase es mantingui gramatical. Si teniu menys de cinc versions, la sortida editada es guarda com una nova versió; amb cinc versions, només es actualitza **la versió 5**. Fer clic amb el botó dret sense selecció no fa res. Premeu **Esc** o feu clic fora de la llista per cancel·lar sense canviar la sortida.
3. **Costos** — cada **Reformula…** completa (sense selecció) i cada sol·licitud d'alternativa de paraules utilitza el model novament i pot afegir-se al cost d'ús (igual que una execució de traducció normal).

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Reescriure

Utilitzeu **Reescriure** quan vulgueu millorar l'expressió sense canviar el significat principal.

![Rewrite workspace](../images/screenshots/ca/rewrite.png)

Això és útil per:

- corregir ortografia i gramàtica (**Comprovar ortografia i gramàtica**)
- fer el text més clar (**Millorar la claredat**)
- diverses reformulacions distintes en una sola execució (**Versions alternatives**)
- fer el text més formal o més informal (**Fer formal** / **Fer informal**)
- escurçar o ampliar el text (**Escurçar** / **Ampliar**)
- fer que el text sembli més tècnic (**Fer tècnic**)

<br/>

> 💡 **TIP**<br/>
> Quan utilitzeu el mode "**Comprovar ortografia i gramàtica**", apareix un interruptor **Mostra els canvis** al tauler de sortida (al costat de **Copiar**).
> Activeu-lo o desactiveu-lo per mostrar o amagar les correccions específiques aplicades al vostre text.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Transformar

Utilitzeu **Transformar** quan vulgueu que la IA segueixi un conjunt personalitzat d'instruccions.

![Transform workspace](../images/screenshots/ca/transform.png)

Aquesta és l'àrea més flexible de l'aplicació. Podeu utilitzar-la per a tasques com:

- resumir notes
- convertir text brut en un correu electrònic polítmic
- extreure punts clau
- convertir text en un format específic
- qualsevol altra activitat personalitzada amb el text d'entrada

<br/>

<a id="run-an-existing-prompt"></a>
### Executar un indicador existent

1. Obre **Transformació**.
2. Tria un indicador de la llista d'indicadors.
3. Si apareix una caixa de llengua **De**, tria una llengua si en vols una.
4. Escriu o enganxa text a **Entrada**.
5. Feu clic a **Transformar**.
6. Llegiu el resultat a **Sortida**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Si encara no tens indicadors

Si la vostra llista d'indicadors està buida, feu clic a **Carrega exemples de prompts** a l'àrea de treball de Transformar. El mateix control sempre està disponible a [**Configuració** > **Transformar**](#transform-settings) a la fila d'exportació/importació. Tots dos afegiran exemples integrats perquè pugueu començar ràpidament.

<br/>

> ℹ️ **NOTA**<br/>
> Els exemples d'indicadors es proporcionen en anglès. Després de carregar-los, podeu editar un indicador i utilitzar **Traduir prompt** per traduir-lo al vostre idioma.

<br/>

<a id="create-a-prompt-quickly"></a>
### Crea un indicador ràpidament

La manera més ràpida de crear un indicador és:

1. Feu clic a **Indicador nou**.
2. Feu clic a **Genera un indicador**.
3. Descriviu què voleu que faci l'indicador.
4. Trieu un predeterminat (Fàcil) o model (Avançat).
5. Deixa que l'aplicació creï un esborrany per a tu.
6. Revisa l'esborrany i fes clic a **Desa**.

![Generate prompt](../images/screenshots/ca/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Edita un indicador

Quan crees o editis un indicador, l'editor apareix a l'esquerra i una àrea de prova apareix a la dreta.

![Transform prompt editor](../images/screenshots/ca/transform-prompt-edit.png)

Els camps principals són:

- **Nom de l'indicador**: el nom que es mostra a la llista d'indicadors.
- **Instruccions de l'indicador (opcional)**: una breu pista que es mostra a l'usuari quan s'executa l'indicador.
- **Rol del model**: el rol general assignat a la IA, com ara «Ets un assistent útil.»
- **Instruccions del model (una per línia)**: les regles específiques que voleu que segueixi la IA.
- **Descripció de la sortida (p. ex. transformat, resumit, etc.)**: una paraula curta que descriu el resultat.
- **Temperatura (0,0 → 1,0)**: com es comportarà el model; vegeu a continuació.
- **Preguntar per la llengua de destí**: afegeix un selector de llengua quan s'executa l'indicador.
Si el terme tècnic **Temperatura** és nou per a tu, pensa en ell així:

- Una **temperatura més baixa** dóna resultats més estables i previsibles.
- Una **temperatura més alta** dóna més varietat i creativitat.

També pots utilitzar:

- `Generate prompt` per crear un esborrany nou a partir d'una descripció simple
- `Improve prompt` per perfeccionar un indicador existent
- `Translate prompt` per traduir els camps de l'indicador

<br/>

> ⚠️ **ADVERTÈNCIA**<br/>
> Fes clic a `Save` abans de fer clic a `Back to Run`. Si tornes enrere sense desar, es perdran els canvis.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Prova un indicador abans d'utilitzar-lo

El tauler de proves de la dreta us permet provar l'indicador amb text de mostra abans d'utilitzar-lo en el treball diari.

Això és útil quan:

- esteu creant un indicador nou
- esteu comparant dues versions d'un indicador
- voleu comprovar el to, la longitud o el format de sortida

<br/>

> ℹ️ **NOTA**<br/>
> Podeu exportar i importar indicadors desats a [**Configuració** > **Transformar**](#transform-settings).

Quan utilitzeu **Genera un indicador**, **Millora l'indicador** o **Traduir prompt** a l'editor d'indicadors, el mode **Fàcil** ofereix el mateix selector de preconfiguracions que a Traduir i Reescriure; el mode **Avançat** utilitza la llista de models.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Tauler

Utilitzeu el **Tauler** per veure quant esteu utilitzant l'aplicació i quin és el cost (per als models de pagament).

![Dashboard summary](../images/screenshots/ca/dashboard-summary.png)

<br/>

> ℹ️ **NOTA**<br/>
> Si només utilitzeu models **gratuïts**, els importants de **cost** poden ser zero i els KPI centrats en el cost poden semblar buits. La pestanya **Resum** encara mostra el nombre de trucades per a traduir, reescriure i transformar quan hi ha activitat en el període seleccionat.

<br/>

<a id="filter-the-data"></a>
### Filtrar les dades

Utilitzeu els botons de filtre de la part superior per canviar l'interval de temps.

![Dashboard filters](../images/screenshots/ca/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> El filtre **Usuari** només és visible per als administradors a la versió web. Els usuaris habituals no veuran aquest filtre, i no està disponible a l'aplicació d'escriptori.

<br/>

<a id="dashboard-tabs"></a>
### Pestanyes del tauler

- **Resum** mostra targetes KPI: cost total, models utilitzats, nombre de trucades per mode i cost (amb percentatge del total de trucades), cost mitjà per trucada, TPS mitjà i els tres models principals segons el nombre de trucades.
- **Per model** llista cada model amb trucades totals, cost total i TPS mitjà; amplieu una fila per obtenir un desglossament per traduir, reescriure i transformar.
- **Tots els trucades** mostra el registre complet de trucades (paginat en dissenys amplis, targetes en pantalles estretes) i permet exportar-lo.

<br/>

<a id="export-data"></a>
### Exportar dades

Les taules del tauler poden exportar dades en:

- **JSON**
- **CSV**
- **XLSX**

Això és útil si voleu revisar l'activitat fora de l'aplicació o compartir un informe.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Esborrar registres desats d'un model

A **Per model** o **Totes les trucades**, podeu eliminar els registres desats d'un model fent clic a la icona de "papellera".

> ⚠️ **ADVERTÈNCIA**<br/>
> L'eliminació de registres desats no es pot desfer. Només utilitzeu aquesta opció si esteu segur que ja no necessiteu aquest historial.

Per esborrar totes les dades o eliminar registres segons la seva antiguitat, aneu a [**Configuració** > **Seguiment de costos**](#cost-tracking). Allà trobareu opcions per esborrar totes les dades emmagatzemades o només les dades anteriors a una data determinada.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Historial

Feu clic a **Historial** per veure l'historial de les vostres accions dins de **Transrewrt**, incloent-hi l'entrada i la sortida de cada operació.

![History page](../images/screenshots/ca/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtre l'historial

**Historial** utilitza els mateixos filtres de rang horari que la pàgina del **Tauler**.

![Dashboard filters](../images/screenshots/ca/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> A l'**aplicació web**, tothom (inclosos els administradors) només veu el seu propi historial d'execució. El filtre **Usuari** al **Tauler** serveix als administradors per revisar l'ús i el cost entre comptes; no s'aplica a **Historial**.

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

Obriu **Configuració** des del lateral per personalitzar el comportament de l'aplicació.

Les pestanyes disponibles depenen de la plataforma i del vostre rol:

| Pestanya | Escriptori | Web (administrador) | Web (usuari habitual) | Notes |
|------------------|:-------:|:-----------:|:------------------:|----------------------------------------------|
| Configuració general | sí | sí | sí | Inclou **experiència amb IA** (Fàcil / Avançat) |
  | Models           |   sí   |     sí     |        sí         | Només quan **l'experiència amb IA** és **Avançat** |
  | Idiomes         |   sí   |     sí     |        sí         | |
  | Seguiment de costos     |   sí   |     sí     |         -          | |
  | Transformar         |   sí   |     sí     |        sí         | Importació/exportació massiva d'indicacions de transformació |
  | Usuaris             |    -    |     sí     |         -          | |
  | Configuració de l'API        |   sí   |     sí     |         -          | |
  | Quant a             |   sí   |     sí     |        sí         | |

En mode **Fàcil**, la selecció del model es fa mitjançant predeterminats a la barra d'eines i el **Proveïdor** a la Configuració general; la pestanya **Models** està oculta.

<br/>

> ℹ️ **NOTA**<br/>
> A la versió web, cada usuari té la seva pròpia configuració. La configuració com l'experiència amb IA, el proveïdor, els models o predeterminats seleccionats, idiomes, opcions generals i indicacions de transformació es desen per a cada usuari. Els canvis que feu no afecten altres usuaris.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Configuració general

Utilitzeu **Configuració general** per controlar el comportament de l'escriptura, si es desen els detalls d'execució per a **Historial**, l'aparença i com seleccioneu la IA per a Traduir, Reescriure i Transformar.

**Experiència amb IA**

- **Fàcil** (per defecte): trieu un **Proveïdor** (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras o Ollama). Els proveïdors en núvol utilitzen els predeterminats integrats a la barra d'eines. **Ollama** mostra els models instal·lats al vostre ordinador en comptes dels predeterminats. En mode Fàcil, el **Catàleg de preconfiguracions** mostra la versió del catàleg i l'hora de la darrera actualització; feu clic a **Actualitzar el catàleg de preconfiguracions** per obtenir la llista més recent de predeterminats des del repositori del projecte (l'aplicació també comprova periòdicament en segon pla).
- **Avançat**: trieu models individuals a la barra d'eines; gestioneu la llista a [**Configuració** > **Models**](#models).

**Aparença**

- **Tema** canvia entre aparença clara, fosca i del sistema.
- **Mostrar informació de cost en les accions** controla la visualització del cost per operació (si està disponible) i el cost total als panells de sortida de Traduir, Reescriure i Transformar.
- **Dígits decimals del cost** canvia com es mostren els decimals del cost.
- **Només web:** **mostrar un marge al voltant de l'aplicació** afegeix espai addicional al voltant de la interfície.
- **Tipus de lletra** canvia la font d'escriptura als panells de text.
- **Mida** canvia la mida de la font.

**Comportament**

- **Comportament per a ENTER** tria si `Enter` executa la tasca o insereix una nova línia.
- **Executar automàticament en enganxar** comença la traducció tan aviat com enganxes text.
- **Copiar automàticament el resultat al porta-retalls** copia els resultats exitosos automàticament.
- **Traducció en temps real mentre escrius** (⚠️ Això pot augmentar els costos d'ús) tradueix mentre escrius.
- **Temps d'espera (ms)** estableix el temps d'espera per a la traducció en temps real.

**Historial**

- **Mantenir l'historial d'execució** controla si cada traducció, reescriptura i transformació desa **text d'entrada i de sortida** per a la vista [**Historial**](#history) a la barra lateral. Desactivar-ho demana confirmació; si confirmeu, el text de l'historial desat s'elimina de la base de dades. Si l'etiqueta mostra *desactivat per l'administrador*, la vostra instal·lació té `HISTORY_DISABLED` establert a l'entorn (vegeu el [README](README.ca.md#configuration-and-environment)); no podeu tornar a activar l'historial des de la interfície d'usuari.
- **Eliminar dades d'historial** us permet eliminar el text desat segons l'antiguitat (per exemple, més antic de pocs mesos, o **totes les dades (esborrar)**) mitjançant **Eliminar dades**. Això només afecta el text d'execució desat per a la vista **Historial**; **no** elimina els totals de cost o ús. Per eliminar o retallar dades de **cost**, utilitzeu [**Configuració** > **Seguiment de costos**](#cost-tracking).

**Còpia de seguretat de la configuració** (només per a administradors d'aplicacions d'escriptori i web)
- **Incloure les dades d'ús a la còpia de seguretat** - quan està habilitat, el ZIP també conté l'historial d'execució i les dades de trucades API.
- **Fer còpia de seguretat de la configuració** - crea un únic ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` en hora local) amb `config.json`, `state.json`, clau de xifratge opcional, usuaris, preferències, indicadors personalitzats i dades d'ús si t'has inscrit. Després d'una còpia de seguretat exitosa, la confirmació mostra el nom del fitxer desat.
- **Restaurar des de la còpia de seguretat** - obre primer un **diàleg de confirmació**. Tria el ZIP de còpia de seguretat dins del diàleg (**Navegar** / selector de fitxers o arrossegar i deixar anar on sigui compatible), després revisa les opcions:
  - **Restaurar les dades d'ús** - importa l'ús/historial del ZIP quan es va fer la còpia de seguretat amb l'ús inclòs; deixa-ho desmarcat si només vols configuracions i indicadors.
  - **Esborrar les dades d'ús antigues abans de restaurar** - elimina l'ús/historial existent en aquesta instal·lació abans d'aplicar la còpia de seguretat (opcional; utilitza-ho quan vulguis un reemplaçament net).
Les còpies de seguretat creades tant en la versió web com en la d'escriptori es poden restaurar en l'altra. Quan es restaura una còpia de seguretat d'escriptori en la versió web, les dades es restauraran a l'usuari administrador.

<br/>

<a id="models"></a>
### Models

Aquesta pestanya només està disponible quan l'**experiència amb IA** està establerta a **Avançat** a [**Configuració general**](#general-settings). Utilitzeu **Configuració** > **Models** per triar quins models apareixen a la barra d'eines.

![Settings Models tab](../images/screenshots/ca/settings-general.png)

La pàgina té dues llistes:

- **Models disponibles** a l'esquerra
- **Models seleccionats** a la dreta

Els controls útils inclouen:

- **Cerca models...** per trobar un model pel nom
- Xips de **Proveïdor** per reduir la llista a un motor (OpenRouter, OpenAI, Ollama, …)
- **Només gratuïts** per mostrar només models gratuïts
- **Actualitza** per tornar a carregar la llista
- **Expandeix-ho tot** i **Redueix-ho tot** quan estigueu ordenant per proveïdor

Els identificadors del model inclouen el prefix del proveïdor (per exemple `openrouter/…` vs `openai/…`). Les insígnies com **OpenAI (OpenRouter)** vs **OpenAI (directe)** mostren com s'enrutat el tràfic.

> ℹ️ **NOTA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) és un model enrutador, no un model de xat general: la seva resposta és JSON que descriu els cossos de les sol·licituds de l'API d'OpenRouter (per exemple un array `requests` amb `model` i `messages`). Si l'utilitzeu per a **Traduir**, **Reescriure** o **Transformar**, el panell de sortida mostrarà aquest JSON en lloc del text finalitzat. Trieu un model de text normal per a aquestes tasques. Consulteu la [pàgina del model Body Builder](https://openrouter.ai/openrouter/bodybuilder) a OpenRouter.

Accions:

- Per afegir un model, feu clic a **Afegeix** o a qualsevol lloc de l'entrada.

- Per eliminar un model, feu clic a **X** al costat a **Models seleccionats** o a **Seleccionat** a l'entrada a Models disponibles.

- Per netejar la llista, feu clic a **Desselecciona-ho tot**. El model gratuït obligatori romandrà a la llista.

<br/>

> ℹ️ **NOTA**<br/>
> Si no voleu afegir crèdits a OpenRouter immediatament, comenceu activant **Només gratuïts** i triant els models gratuïts (no es requereix targeta de crèdit). També podeu utilitzar Ollama per executar models localment sense cap clau API.

<br/>

<a id="languages"></a>
### Idiomes

Utilitzeu **Configuració** > **Idiomes** per organitzar les llistes d'idiomes utilitzades a l'aplicació.

- Els **idiomes principals** es fixen a la part superior de les llistes d'idiomes a **Traduir** i **Transformar**.
- **Idioma personalitzat** us permet afegir un idioma que no està a la llista integrada.

Si afegiu un idioma personalitzat, apareixerà als selectors d'idioma al costat de les opcions integrades.

<br/>

<a id="cost-tracking"></a>
### Seguiment de costos

Utilitzeu **Configuració** > **Seguiment de costos** per gestionar la informació de costos.

- **Cost total** mostra el total acumulat.
- **Copia el valor** copia el total al porta-retalls.
- **Restablir cost** reinicia el total emmagatzemat a zero.
- **Sincronitza amb l'ús de la clau API** estableix el total perquè coincideixi amb l'ús informat pel vostre compte OpenRouter (només OpenRouter).
- **Ús de la clau API** mostra detalls d'ús d'OpenRouter, si estan disponibles.
- **Eliminar dades de cost** elimina totes les dades o només les entrades anteriors a una data seleccionada.

**Seguiment de costos:** Quan utilitzeu models OpenRouter, l'aplicació mostra l'ús real i els gastos basats en la informació de costos d'OpenRouter. Per a tots els altres proveïdors, l'aplicació estima els costos utilitzant els preus publicats per OpenRouter; si no hi ha preu disponible, l'estimació pot ser zero.

<br/>

> ℹ️ **NOTA**<br/>
>  **Totes les xifres de cost són estimacions només per a la vostra referència, no són facturacions oficials.**

<br/>

> ⚠️ **ADVERTÈNCIA**<br/>
> La supressió de dades no es pot desfer. Abans d'eliminar, assegureu-vos de fer una còpia de seguretat de les dades o exportar-les mitjançant [**Historial**](#history) 
> o [**Tauler** > **Tots els trucades**](#dashboard-tabs), altrament es perdran permanentment. 
> Tota la història d'entrada/sortida relacionada amb cada entrada de trucada API també s'eliminarà.

<br/>

<a id="transform-settings"></a>
### Transformar (pestanya de configuració)

Utilitzeu **Configuració** > **Transformar** per gestionar indicadors en bloc.

Pots:

- revisar les indicacions desades
- esborrar indicacions
- importar indicacions des d’un fitxer
- exportar indicacions per fer-ne còpies de seguretat o compartir-les
- carregar exemples d'indicacions a la llista d'indicacions

<br/>

<a id="users"></a>
### Usuaris

Utilitza **Usuaris** per gestionar comptes d'usuari a la versió web. Pots afegir usuaris, actualitzar-ne les dades, restablir contrasenyes i esborrar comptes.

<br/>

<a id="api-config"></a>
### Configuració de l'API

Els proveïdors compatibles són: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras i **Ollama** (models locals mitjançant una URL base). Només cal que configureu els proveïdors que utilitzeu.

**Aplicació web: només administrador**

Les claus API es configuren mitjançant variables d'entorn del sistema o de Docker; no s'introdueixen a la interfície web. Aquesta pàgina mostra quins proveïdors tenen una clau configurada i us permet provar cadascun fent clic al botó `Test`.

<br/>

> ℹ️ **NOTA**<br/>
> Per canviar una clau API, actualitzeu la variable d'entorn a la vostra configuració del sistema o de Docker i reinicieu el servidor o el contenidor.

<br/>

> ℹ️ **NOTA**<br/>
> Les **còpies de seguretat de la configuració** (vegeu [**Configuració general** → Còpia de seguretat de la configuració](#general-settings)) poden incloure claus de proveïdor **resoltes** dins del `config.json` del ZIP. Restaurar aquest ZIP **no** copia aquestes claus al fitxer de configuració persistent del servidor; les claus actives continuen venint de l'entorn i de l'estat del fitxer existent, tal com s'explica allà.

<br/>

**Aplicació d'escriptori**

Utilitza **Configuració de l'API** per desar les claus API de cada proveïdor que utilitzis. Per a Ollama, introdueix l'**URL base** en lloc d'una clau API.

<br/>

> 💡 **Consell** <br/>
> Si no vols utilitzar una clau API ni pagar per l'ús, pots [descarregar Ollama](https://ollama.com) i executar models (com ara `translategemma:4b`) localment al teu ordinador de forma gratuïta. Alternativament, pots crear un compte gratuït a OpenRouter (sense necessitat de targeta de crèdit) per utilitzar els seus models gratuïts, o obtenir una clau API gratuïta de Cerebras, Google, Groq o Mistral AI.

<br/>

- Afegeix només els proveïdors que necessites. A **Configuració** > **Models**, cada ID de model comença amb el proveïdor (per exemple `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Per afegir una clau API, introdueix el valor al camp de text i fes clic a `Save`. Per substituir una clau existent, fes clic a `Edit`. Per verificar que una clau funciona, fes clic a `Test`. Per a l'URL base d'Ollama, sempre fes clic a `Test` per comprovar la connexió.

<br/>

> ℹ️ **NOTA**<br/>
> No pots veure el valor actual d'una clau API. Només pots substituir-la utilitzant el botó `Edit`.
> Les claus API es desen xifrades a la configuració.

<br/>

<a id="about"></a>
### Quant a

La pestanya **Quant a** mostra:

- el nom de l'aplicació i el lema
- el número de versió i la data de compilació
- informació de llicència i drets d'autor, amb un enllaç per obrir **Avisos de tercers**
- un enllaç al repositori del projecte

<br/><br/>

<a id="common-issues"></a>
## Problemes freqüents

Si alguna cosa no funciona com s'espera, comproveu primer els punts següents.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### L'aplicació no tradueix, reescriu ni transforma el text

Comproveu que:

- heu seleccionat un **predeterminat** (Fàcil) o **model** (Avançat) a la barra d'eines
- en mode **Fàcil**, [**Configuració** > **Configuració general**](#general-settings) té un **Proveïdor** amb una clau vàlida (o URL d'Ollama) i com a mínim un predeterminat per a aquest proveïdor
- en mode **Avançat**, hi ha com a mínim un model a la llista a [**Configuració** > **Models**](#models)
- la vostra configuració d'API funciona

Si esteu utilitzant l'aplicació d'escriptori:

1. Obriu [**Configuració** > **Configuració de l'API**](#api-config).
2. Comproveu que s'hagi desat almenys una clau d'API.
3. Feu clic a **Prova** al costat del proveïdor per confirmar que la clau funciona.

<br/>

<a id="the-model-list-is-empty"></a>
### La llista de models està buida

En mode **Fàcil**, obriu [**Configuració** > **Configuració general**](#general-settings), assegureu-vos que el **proveïdor** estigui configurat i afegiu o proveu claus a [**Configuració de l'API**](#api-config) (escriptori) o consulteu al vostre administrador (web). Per a **Ollama**, executeu la **Prova** a l'URL base i assegureu-vos que els models estan instal·lats localment.

En mode **Avançat**, obriu [**Configuració** > **Models**](#models) i feu clic a **Actualitza**. Si cal, cerqueu un model, activeu **Només gratuïts** i afegiu models a **Models seleccionats**.

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### El resultat és massa lent o massa car

Proveu una o més d'aquestes opcions:

- tria un preset diferent (Fàcil) o model (Avançat)
- utilitza una entrada més curta
- desactiva **Traducció en temps real mentre escrius** a [**Configuració** > **Configuració general**](#general-settings)
- utilitza models gratuïts per a tasques simples (vegeu [Models](#models))
<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### La interfície està en l'idioma incorrecte

Feu clic a la icona del globus a la [barra d'eines](#toolbar) i trieu el vostre **Idioma de la interfície** preferit.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### El text és massa petit o difícil de llegir

Obriu [**Configuració** > **Configuració general**](#general-settings) i canvieu:

- **Familia de tipus de lletra**
- **Mida**

<br/>

<a id="dashboard-summary-looks-empty"></a>
### El resum del tauler sembla buit

Això és normal si:

- només utilitzeu **models gratuïts** i esteu consultant les dades de **cost** (poden ser zero); els KPI de nombre de trucades al **Resum** encara necessiten dades del període seleccionat
- el **filtre de temps** seleccionat no cobreix el període en què es van fer les trucades: proveu amb **Tot** per comprovar-ho

Si els KPI segueixen sent zero després de seleccionar **Tot**, comproveu que les trucades apareguin a [**Historial**](#history) o a la pestanya **Totes les trucades**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### El cost mostra «no disponible» o sembla incorrecte

Quan utilitzeu models a través d'**OpenRouter**, l'aplicació mostra la despesa real informada per OpenRouter.

Per a **altres proveïdors** (OpenAI directe, Anthropic directe, etc.), el cost s'estima a partir de les dades de preus publicades per OpenRouter. Si no es troba un preu coincident per a un model, el cost apareixerà com a **no disponible** i no s'afegirà al vostre total acumulat.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### El cost total no coincideix amb la meva factura del proveïdor

Totes les xifres de cost a l'aplicació són **estimacions només com a referència**, no són factures oficials.

Perquè el total s'acosti més a la despesa real d'OpenRouter, obriu [**Configuració** > **Seguiment de costos**](#cost-tracking) i feu clic a **Sincronitza amb l'ús de la clau API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### La pàgina d'historial no apareix a la barra lateral

**Mantenir l'historial d'execució** pot estar desactivat. Obriu [**Configuració** > **Configuració general**](#general-settings) i activeu-ho llevat que l'historial estigui *desactivat per l'administrador* (`HISTORY_DISABLED` a l'entorn — consulteu el [README](README.ca.md#configuration-and-environment)). Activar l'historial no restaura el text suprimit prèviament.

<br/>

<a id="web-app-session-expired"></a>
### Aplicació web: redirigit inesperadament a la pàgina d'inici de sessió

La vostra sessió pot haver expirat. Inicieu sessió de nou. Si passa sovint, comproveu la configuració del servidor per als paràmetres de durada de la sessió.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Administrador web: he oblidat o perdut la contrasenya

Això s'aplica a l'**aplicació web autoallotjada** (Docker), no a l'aplicació d'escriptori (Electron).

- Si un altre administrador encara pot iniciar sessió, pot obrir [**Configuració** > **Usuaris**](#users), seleccionar el compte i establir una **nova contrasenya** allà.
- Si esteu **bloquejat** però teniu **accés shell** a la màquina o al contenidor, restabliu la contrasenya amb l'eina auxiliar que ve amb la imatge (substituïu `transrewrt` si heu canviat el nom per defecte, i posa entre cometes la contrasenya si conté espais o caràcters especials):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

El nom d'usuari per defecte és `admin` si mai heu creat altres comptes. Quan passeeu només un argument, es tracta com la nova contrasenya per a `admin`.

Si executeu des d'un **codi font clonat** en comptes de Docker, utilitzeu:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

L'script actualitza el registre d'usuari a la base de dades SQLite (i pot crear l'usuari `admin` si falta). Després de restablir, inicieu sessió amb la nova contrasenya.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### El tauler no mostra dades per a altres usuaris (web)

Només els **administradors** poden veure les dades de tots els usuaris mitjançant el filtre **Usuari**. Per disseny, els usuaris normals només veuen la seva pròpia activitat.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### He canviat un indicador i he perdut les edicions

Quan editeu un indicador, feu sempre clic a **Desa** abans de fer clic a **Torna a Executar**.

<br/><br/>

<a id="quick-tips"></a>
## Consells ràpids

- Comenceu amb [**Traduir**](#translate) per assegurar-vos que la configuració funciona abans de passar a [**Reescriure**](#rewrite) o [**Transformar**](#transform).
- Utilitzeu [**Reescriure**](#rewrite) per a millores habituals del text.
- Utilitzeu [**Transformar**](#transform) quan necessiteu un flux de treball reutilitzable per a una tasca específica.
- Utilitzeu [**Tauler**](#dashboard) si voleu controlar l'ús i el cost.
- Utilitzeu [**Historial**](#history) per revisar operacions anteriors i el text complet d'entrada i sortida.
- Exporteu els indicadors regularment si esteu creant una biblioteca d'indicadors que voleu mantenir segura (vegeu [Transformar](#transform)) o si desitgeu compartirla amb altres.
- Mantingueu el mode **Fàcil** fins que necessiteu un control detallat sobre els IDs del model; canvieu a **Avançat** quan ja sapigueu quins models voleu.

<br/><br/>

<a id="disclaimer"></a>
## Avís legal

Els noms dels productes i les icones pertanyen als seus respectius propietaris i s'utilitzen únicament amb finalitats d'identificació. Aquest programari no està afiliat ni patrocinat per cap de les marques esmentades.

<br/><br/>

<a id="license"></a>
## Llicència

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
