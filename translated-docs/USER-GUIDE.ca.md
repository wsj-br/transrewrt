---
translated_at: "2026-03-15T22:05:44.671Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Guia d'usuari de Transrewrt

<br />

<a id="introduction"></a>
## Introducció

Transrewrt t'ajuda a treballar amb el text de tres maneres principals:

- **Translate** - converteix text d'un idioma a un altre.
- **Rewrite** - reescriu el text amb un estil diferent, com a més clar, més curt o més formal.
- **Transform** - processa text mitjançant instruccions personalitzades d'IA anomenades *prompts*.

<br />

Aquesta guia explica com utilitzar l'aplicació una vegada instal·lada i en funcionament. Per a les passes d'instal·lació, vegeu el [README](../README.md) principal.

<br />

> ℹ️ **NOTA**<br/>
> Transrewrt està disponible com a aplicació d'escriptori per a Windows i Linux, i com a aplicació web auto-allotjada. Aquesta guia se centra en l'ús diari de l'aplicació. Allà on alguna cosa només s'apliqui a una versió, es marca clarament.

<small>**Llegiu en altres idiomes:** [Anglès (Regne Unit)](../USER-GUIDE.md) · [Portuguès (BR)](USER-GUIDE.pt-BR.md) · [Àrab](USER-GUIDE.ar.md) · [Bangla](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Croata](USER-GUIDE.hr.md) · [Txec](USER-GUIDE.cs.md) · [Neerlandès](USER-GUIDE.nl.md) · [Anglès (EUA)](USER-GUIDE.en-US.md) · [Filipí](USER-GUIDE.tl.md) · [Francès](USER-GUIDE.fr.md) · [Alemany](USER-GUIDE.de.md) · [Grec](USER-GUIDE.el.md) · [Hindi](USER-GUIDE.hi.md) · [Hongarès](USER-GUIDE.hu.md) · [Italià](USER-GUIDE.it.md) · [Japonès](USER-GUIDE.ja.md) · [Javanès](USER-GUIDE.jv.md) · [Coreà](USER-GUIDE.ko.md) · [Malai](USER-GUIDE.ms.md) · [Persa](USER-GUIDE.fa.md) · [Polonès](USER-GUIDE.pl.md) · [Portuguès (PT)](USER-GUIDE.pt.md) · [Panjabi](USER-GUIDE.pa.md) · [Romanès](USER-GUIDE.ro.md) · [Rus](USER-GUIDE.ru.md) · [Eslovac](USER-GUIDE.sk.md) · [Espanyol](USER-GUIDE.es.md) · [Swahili](USER-GUIDE.sw.md) · [Suec](USER-GUIDE.sv.md) · [Telugu](USER-GUIDE.te.md) · [Thai](USER-GUIDE.th.md) · [Turc](USER-GUIDE.tr.md) · [Ucraïnès](USER-GUIDE.uk.md) · [Vietnamita](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Índex**

- [Abans de començar](#abans-de-començar)
  - [Com obtenir una clau API (aplicació d'escriptori)](#com-obtenir-una-clau-api-aplicacio-d-escriptori)
- [Primers passos](#primers-passos)
- [Parts principals de la finestra](#parts-principals-de-la-finestra)
  - [Barra lateral](#barra-lateral)
  - [Barra d'eines](#barra-d-eines)
  - [Panells d'entrada i sortida](#panells-d-entrada-i-sortida)
- [Traduir](#traduir)
  - [Traduir text](#traduir-text)
  - [Selecció d'idioma](#seleccio-d-idioma)
  - [Configuració de traducció útil](#configuracio-de-traduccio-util)
  - [Dreceres de teclat](#dreceres-de-teclat)
- [Reescriure](#reescriure)
  - [Reescriure text](#reescriure-text)
- [Transformar](#transformar)
  - [Executar un *prompt* existent](#executar-un-prompt-existent)
  - [Si encara no tens *prompts*](#si-encara-no-tens-prompts)
  - [Crear un *prompt* ràpidament](#crear-un-prompt-rapidament)
  - [Editar un *prompt*](#editar-un-prompt)
  - [Provar un *prompt* abans d'utilitzar-lo](#provar-un-prompt-abans-d-utilitzar-lo)
  - [Gestionar *prompts* desats](#gestionar-prompts-desats)
- [Tauler de control](#tauler-de-control)
  - [Filtrar les dades](#filtrar-les-dades)
  - [Pestanyes del tauler de control](#pestanyes-del-tauler-de-control)
  - [Exportar dades](#exportar-dades)
  - [Eliminar registres emmagatzemats per a un model](#eliminar-registres-emmagatzemats-per-a-un-model)
- [Configuració](#configuracio)
  - [Configuració general](#configuracio-general)
  - [Models](#models)
  - [Idiomes](#idiomes)
  - [Seguintiment de costos](#seguintiment-de-costos)
  - [Prompts de transformació](#prompts-de-transformacio)
  - [Usuaris](#usuaris)
  - [Configuració de l'API](#configuracio-de-l-api)
  - [Quant a](#quant-a)
- [Problemes comuns](#problemes-comuns)
  - [L'aplicació no traduirà, reescriurà ni transformarà text](#l-aplicacio-no-traduira-reescriura-ni-transformara-text)
  - [La llista de models està buida](#la-llista-de-models-esta-buida)
  - [El resultat és massa lent o massa car](#el-resultat-esa-massa-lent-o-massa-car)
  - [La interfície està en l'idioma equivocat](#la-interfcie-esta-en-l-idioma-equivocat)
  - [El text és massa petit o difícil de llegir](#el-text-esa-massa-petit-o-dificil-de-llegir)
  - [He canviat un *prompt* i he perdut les edicions](#he-canviat-un-prompt-i-he-perdut-les-edicions)
- [Consells ràpids](#consells-rapids)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="abans-de-començar"></a>

## Abans de començar

Per utilitzar Transrewrt, necessites accedir al servei d'IA a través d'OpenRouter.

No cal triar un model de pagament abans de començar. L'aplicació sempre inclou un model **gratuït** integrat, així que per a un ús normal és suficient per començar a traduir, reescriure i transformar text.

En llenguatge senzill:

- Un **model** és el motor d'IA que realitza la feina.
- Una **clau API** són les teves credencials d'accés personals per a aquest servei.

Si utilitzes l'aplicació **d'escriptori**, necessitaràs una clau API. Per a passos detallats, consulta [Com obtenir una clau API](#how-to-get-an-api-key-desktop-app) a continuació. En resum: crea un compte a [OpenRouter](https://openrouter.ai), obre la pàgina de [Claus](https://openrouter.ai/keys), crea una nova clau i enganxa-la a [**Configuració** > **Configuració API**](#api-config) a Transrewrt.

Si utilitzes la **versió web**, normalment el propietari del servidor ho configura per tu, així que normalment no necessitaràs introduir una clau API tu mateix.

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### Com obtenir una clau API (aplicació d'escriptori)

Si utilitzes l'aplicació d'escriptori, segueix aquests passos:

1. Ves a [OpenRouter](https://openrouter.ai) al teu navegador web.
2. Crea un compte o inicia sessió.
3. Obre la pàgina de [Claus](https://openrouter.ai/keys).
4. Fes clic al botó per crear una nova clau API.
5. Posa un nom a la clau perquè puguis reconèixer-la més tard.
6. Copia la nova clau API.
7. Torna a Transrewrt i obre **Configuració** > **Configuració API**.
8. Enganxa la clau al camp **Clau API d'OpenRouter**.
9. Fes clic a **Prova la configuració de la API** per assegurar-te que funciona.

> ℹ️ **NOTA**<br/>
> Pots començar amb la ruta gratuïta d'OpenRouter o amb qualsevol dels altres models gratuïts disponibles. En molts casos, això és suficient per començar a utilitzar Transrewrt sense triar un model de pagament.

<br /><br />

<a id="getting-started"></a>
## Primeres passes

Si és la primera vegada que utilitzes Transrewrt, segueix aquest ordre:

1. Obre l'aplicació.
2. Tria el teu **idioma d'interfície** des de l'icona del globus si cal.
3. Si estàs a l'aplicació **d'escriptori**, obre [**Configuració** > **Configuració API**](#api-config), enganxa la teva clau API d'OpenRouter i fes clic a **Prova la configuració de la API**.
4. Obre [**Configuració** > **Models**](#models) i afegeix un o més models a **Models seleccionats**.
5. Obre [**Configuració** > **Idiomes**](#languages) i tria els teus **Idiomes principals** si vols que els idiomes que més utilitzes apareguin primer.
6. Vés a **Traduir** i executa una traducció senzilla per confirmar que tot funciona.
7. Un cop això funcioni, prova **Reescriure** i després **Transformar**.

Aquest ordre importa. Evita el problema més comú al primer ús: intentar executar una tasca abans que l'aplicació tingui una connexió API funcional o un model seleccionat.

<br /><br />

<a id="main-parts-of-the-window"></a>
## Parts principals de la finestra

L'aplicació està dividida en tres àrees principals:

- La **barra lateral** a l'esquerra.
- La **barra d'eines** a la part superior.
- L'**àrea de treball** al centre.

<br />

<a id="sidebar"></a>
### Barra lateral

Utilitza la barra lateral per moure't per l'aplicació:

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/ca/sidebar.png" alt="Barra lateral de l'aplicació" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Traduir</strong> obre l'espai de treball de traducció.</li>
        <li><strong>Reescriure</strong> obre l'espai de treball de reescriptura.</li>
        <li><strong>Transformar</strong> obre l'espai de treball de prompt personalitzat.</li>
        <li><strong>Tauler</strong> mostra informació d'ús i cost.</li>
        <li><strong>Configuració</strong> obre el panell de configuració.</li>
        <li><strong>Usuari</strong> mostra el nom d'usuari de l'usuari connectat (només web).</li>
      </ul>
      <br />
      <p>També pots col·lapsar la barra lateral per tenir més espai fent clic a la icona al costat del logotip de l'aplicació.</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### Barra d'eines

La barra d'eines canvia lleugerament depenent d'on et trobis a l'aplicació.

- A l'esquerra, mostra el nom de la pàgina actual.
- A la dreta, mostra el **selector de models** i el control d'**idioma d'interfície**.

El **selector de models** et permet triar quin motor d'IA utilitzar per a la tasca actual.

  ![Selector de models](../images/screenshots/ca/model-selector.png)

> ℹ️ **NOTA**<br/>
> Alguns models gratuïts poden deixar de funcionar temporalment si no estan disponibles o han arribat al límit d'ús. Si això passa, l'aplicació eliminarà automàticament aquest model de la teva llista.


El **globus + codi d'idioma** canvia l'idioma de la interfície de l'aplicació, com ara menús i botons. **No** canvia els idiomes de traducció utilitzats a **Traduir**.

  ![Selector d'idioma d'interfície](../images/screenshots/ca/language-selector.png)

<br />

<a id="input-and-output-panels"></a>

### Panells d'entrada i sortida

La majoria d'espais de treball utilitzen un panell **Entrada** a l'esquerra i un panell **Sortida** a la dreta.

El panell **Entrada** mostra:

- Recompte de caràcters
- Recompte de paraules
- Recompte de paràgrafs

El panell **Sortida** pot mostrar:

- Quant de temps ha trigat la tasca
- El cost d'aquesta tasca
- El teu cost total acumulat
- **TPS** (tokens per segon), que és una mesura senzilla de velocitat
- Recomptes de caràcters, paraules i paràgrafs
- El model utilitzat

Si et pregunties sobre els termes tècnics:

- **Token** significa un petit fragment de text. En pots pensar com a part d'una paraula o una paraula curta.
- **TPS** significa quants d'aquests fragments de text ha processat el model cada segon.

<br /><br />

<a id="translate"></a>
## Traduïr

Utilitza **Traduïr** quan vols convertir text d'un idioma a un altre.

![Espai de treball de traducció](../images/screenshots/ca/translate.png)

<br />

<a id="translate-text"></a>
### Traduir text

1. Obre **Traduïr**.
2. Escull un idioma a **De**.
3. Escull un idioma a **A**.
4. Escull un model a la barra d'eines.
5. Escriu o enganxa text a **Entrada**.
6. Fes clic a **Traduïr**.
7. Llegeix el resultat a **Sortida**.
8. Utilitza el botó de còpia si vols copiar el resultat.

<br />

<a id="language-selection"></a>
### Selecció d'idioma

- **De** pot ser un idioma específic o **Detecta idioma**.
- **A** és l'idioma en què vols el resultat.

Els teus **Idiomes principals** seleccionats apareixen a la part superior de la llista. Pots establir-los a [**Configuració** > **Idiomes**](#languages).

<br />

<a id="helpful-translation-settings"></a>
### Configuració útil per a traducció

A [**Configuració** > **Configuració general**](#general-settings), pots canviar com es comporta la traducció:

- **Traducció automàtica en enganxar** executa una traducció tan bon punt enganxes text.
- **Copia automàtica del resultat al porta-retalls** copia el resultat automàticament després d'una execució exitosa.
- **Traducció en temps real (mentre s'escriu)** executa traduccions mentre escrius.
- **Temps d'espera (ms)** controla quant de temps l'aplicació espera abans d'executar una traducció en temps real.

<br />

<a id="keyboard-shortcuts"></a>
### Dreceres de teclat

A [**Configuració** > **Configuració general**](#general-settings), **Comportament per a ENTER** controla què passa quan pressiones Enter:

- **Enter** pot executar la tasca i **Shift+Enter** pot afegir una línia nova.
- O l'aplicació pot fer el contrari.

La drecera actual també es mostra al botó **Traduïr**.

<br /><br />

<a id="rewrite"></a>
## Reescriure

Utilitza **Reescriure** quan vols millorar la redacció sense canviar el significat principal.

![Espai de treball de reescriptura](../images/screenshots/ca/rewrite.png)

Això és útil per a:

- corregir ortografia i gramàtica
- fer el text més clar
- fer el text més formal o més informal
- abreujar o expandir text
- fer que el text soni més tècnic

<br />

<a id="rewrite-text"></a>
### Reescriure text

1. Obre **Reescriure**.
2. Escull un **Mode**.
3. Escull un model a la barra d'eines.
4. Escriu o enganxa text a **Entrada**.
5. Fes clic a **Reescriure**.
6. Revisa el resultat a **Sortida**.

El mateix comportament de la tecla Enter descrit a [**Traduïr**](#keyboard-shortcuts) també s'aplica aquí.

<br /><br />

<a id="transform"></a>
## Transformar

Utilitza **Transformar** quan vols que la IA segueixi un conjunt personalitzat d'instruccions.

![Espai de treball de transformació](../images/screenshots/ca/transform.png)

Aquesta és l'àrea més flexible de l'aplicació. Pots utilitzar-la per a tasques com ara:

- resumir notes
- convertir text aspre en un correu electrònic polits
- extreure punts clau
- convertir text en un format específic

<br />

<a id="run-an-existing-prompt"></a>
### Executar un prompt existent

1. Obre **Transformar**.
2. Escull un prompt de la llista de prompts.
3. Si apareix un quadre d'idioma **Destí**, escull un idioma si en vols.
4. Escriu o enganxa text a **Entrada**.
5. Fes clic a **Transformar**.
6. Llegeix el resultat a **Sortida**.

<br />

<a id="if-you-have-no-prompts-yet"></a>
### Si encara no tens prompts

Si la teva llista de prompts està buida, fes clic a **Carrega prompts d'exemple**. Això afegeix exemples integrats perquè puguis començar ràpidament.

> ℹ️ **NOTA**<br/>
> Els prompts d'exemple es provideixen en anglès. Després de carregar-los, pots editar un prompt i utilitzar **Traduïr prompt** si vols adaptar el text del prompt per a un altre idioma.

<br />

<a id="create-a-prompt-quickly"></a>

### Crea un prompt ràpidament

La manera més ràpida de crear un prompt és:

1. Feu clic a **New prompt**.
2. Feu clic a **Generate prompt**.
3. Descriu què vols que faci el prompt.
4. Trieu un model.
5. Deixa que l'aplicació cree un esborrany per a tu.
6. Reviseu l'esborrany i feu clic a **Desa**.

![Genera prompt](../images/screenshots/ca/transform-generate.png)

<br />

### Edita un prompt

Quan creeu o editeu un prompt, l'editor apareix a l'esquerra i l'àrea de prova apareix a la dreta.

![Editor de prompt de transformació](../images/screenshots/ca/transform-prompt-edit.png)

Els camps principals són:

- **Nom del prompt**: el nom que es mostra a la llista de prompts.
- **Instruccions del prompt (opcional)**: una pista curta que es mostra a l'usuari quan s'executa el prompt.
- **Rol del model**: el rol general assignat a la IA, per exemple 'Ets un assistent útil.'
- **Instruccions del model (una per línia)**: les regles específiques que vulguis que l'IA segueixi.
- **Descripció de la sortida**: una paraula curta que descriu el resultat, per exemple 'resum' o 'reescriptura'.
- **Temperatura (0.0 → 1.0)**: un control lliscant de creativitat.
- **Demana idioma de destí**: afegeix un selector d'idioma de destí quan s'executa el prompt.

Si el terme tècnic **Temperatura** és nou per a tu, pensa en això:

- Una **menor** temperatura dóna resultats més estables i previsibles.
- Una **major** temperatura dóna més varietat i creativitat.

També pots utilitzar:

- **`Generate prompt`** per crear un nou esborrany a partir d'una descripció simple
- **`Improve prompt`** per millorar un prompt existent
- **`Translate prompt`** per traduir els camps del prompt

> ⚠️ **ADVERTÈNCIA**<br/>
> Feu clic a **`Save`** abans de fer clic a **`Back to Run`**. Si torneu sense desar, es perdran els canvis.

<br />

<a id="test-a-prompt-before-using-it"></a>
### Prova un prompt abans d'utilitzar-lo

El panell de prova a la dreta permet provar el prompt amb text d'exemple abans d'utilitzar-lo en el treball diari.

Això és útil quan:

- estàs construint un prompt nou
- estàs comparant dues versions d'un prompt
- vols comprovar el to, la longitud o el format de sortida

<br />

<a id="manage-saved-prompts"></a>
### Gestiona els prompts desats

Per gestionar els prompts desats en un sol lloc, obre [**Configuració** > **Transforma prompts**](#transform-prompts).

Allà pots:

- llistar i eliminar els teus prompts
- exportar prompts com a **JSON**, **CSV** o **XLSX**
- importar prompts des d'un fitxer

<br /><br />

## Tauler de control

Utilitza el **Tauler de control** per veure quant estàs utilitzant l'aplicació i quant costa.

![Resum del tauler de control](../images/screenshots/ca/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### Filtra les dades

Utilitza els botons de filtre a la part superior per canviar l'interval de temps.

![Filtres del tauler de control](../images/screenshots/ca/dashboard-filter.png)

> ℹ️ **NOTA**<br/>
> A la versió web, els administradors també poden veure un filtre **Usuari**. Això permet canviar entre **Tots els usuaris** i un usuari individual.

<br />

<a id="dashboard-tabs"></a>
### Pestanyes del tauler de control

- **Resum** us dóna una visió general de l'ús i el cost.
- **Per ús** desglossa l'activitat per idioma de traducció, mode de reescriptura i prompt de transformació.
- **Per model** mostra quins models heu utilitzat i quant han costat.
- **Per dia** mostra totals diaris.
- **Totes les trucades** mostra l'historial complet de trucades i permet exportar-lo.

<br />

<a id="export-data"></a>
### Exporta dades

Les taules del tauler de control poden exportar dades en:

- **JSON**
- **CSV**
- **XLSX**

Això és útil si vols revisar l'activitat fora de l'aplicació o compartir un informe.

<br />

<a id="delete-stored-records-for-a-model"></a>
### Elimina els registres emmagatzemats per a un model

A **Per model** o **Totes les trucades**, podeu eliminar registres emmagatzemats per a un model.

> ⚠️ **ADVERTÈNCIA**<br/>
> Eliminar registres emmagatzemats no es pot desfer. Només utilitzeu aquesta opció si esteu segur que ja no necessiteu aquest historial.

Per eliminar totes les dades o eliminar registres segons la seva antiguitat, aneu a [**Configuració** > **Seguiment de costos**](#cost-tracking). Allà trobareu opcions per eliminar totes les dades emmagatzemades o només les dades més antigues que una certa data.

<br /><br />

<a id="settings"></a>
## Configuració

Obriu **Configuració** des de la barra lateral per personalitzar com es comporta l'aplicació.

Les pestanyes disponibles poden variar:

- **Configuració d'API** només està disponible a l'aplicació d'escriptori.
- **Usuaris** només està disponible a l'aplicació web i només per a administradors.

<br />

<a id="general-settings"></a>
### Configuració general

### Configuració general

Utilitza **Configuració General** per controlar el comportament de tecleig i l'aparença.

**Comportament**

- **Comportament per a ENTER** tria si Enter executa la tasca o insereix una línia nova.
- **Traduir automàticament en enganxar** inicia la traducció tan aviat com enganxis text.
- **Copiar el resultat automàticament al porta-retalls** copia els resultats satisfactoris automàticament.
- **Traducció en temps real (mentre es tecleja)** tradueix mentre escriu.
- **Temps d'espera (ms)** estableix el temps d'espera per a la traducció en temps real.

**Aparença**

- **Xifres decimals del cost** canvia com es mostren els decimals del cost.
- **Família de fonts** canvia la font de escritura en els panells de text.
- **Mida** canvia la mida de la font.
- **Només web:** **mostrar un marge al voltant de l'aplicació** afegeix espai addicional al voltant de la interfície.

<br />

<a id="models"></a>
### Models

Utilitza **Configuració** > **Models** per triar quins models apareixen a la barra d'eines.

![Pestanya Models de Configuració](../images/screenshots/ca/settings-models.png)

La pàgina té dues llistes:

- **Models disponibles** a l'esquerra
- **Models seleccionats** a la dreta

Els controls útils inclouen:

- **Cercar models...** per trobar un model pel seu nom
- **Només gratuïts** per mostrar només models gratuïts
- **Refrescar** per recarregar la llista
- **Expandir tot** i **Col·lapsar tot** quan s'està ordenant per proveïdor

Per afegir un model, feu clic a **Afegeix**.

Per eliminar un model, feu clic a la **X** al seu costat a **Models seleccionats**.

Per buidar la llista, feu clic a **Desselecciona'n tots**. El model gratuït obligatori romandrà a la llista.

> ℹ️ **NOTA**<br/>
> Si no vols afegir crèdits a OpenRouter immediatament, comença per activar **Només gratuïts** i triar els models gratuïts.

<br />

<a id="languages"></a>
### Idiomes

Utilitza **Configuració** > **Idiomes** per organitzar les llistes d'idiomes utilitzades a l'aplicació.

- **Idiomes principals** es fixen a prop de la part superior de les llistes d'idiomes a **Tradueix** i **Transforma**.
- **Idioma personalitzat** permet afegir un idioma que no està a la llista integrada.

Si afegeixes un idioma personalitzat, apareixerà als selectors d'idioma al costat de les opcions integrades.

<br />

<a id="cost-tracking"></a>
### Seguiment de costos

Utilitza **Configuració** > **Seguiment de Costos** per gestionar la informació de costos.

- **Cost Total** mostra el total acumulatiu.
- **Copiar Valor** copia el total al porta-retalls.
- **Reiniciar Cost** restableix el total emmagatzemat a zero.
- **Sincronitzar amb l'ús de la clau API** estableix el total per coincidir amb l'ús informat per OpenRouter.
- **Ús de Clau API** mostra els detalls d'ús, si estan disponibles.
- **Eliminar dades de cost** elimina totes les dades, o només les entrades anteriors a una data seleccionada.

> ⚠️ **AVÍS**<br/>
> L'eliminació de dades no es pot desfer. Abans d'eliminar, assegura't de fer una còpia de seguretat o exportar les teves dades via [**Dashboard** > **Totes les Trucades**](#dashboard-tabs], en cas contrari es perdran permanentment.

<br />

<a id="transform-prompts"></a>
### Prompts de transformació

Utilitza **Configuració** > **Prompts de Transformació** per gestionar prompts de forma massiva.

Pots:

- revisar els teus prompts desats
- eliminar prompts
- importar prompts des d'un fitxer
- exportar prompts per a còpia de seguretat o per compartir

<br />

<a id="users"></a>
### Usuaris

**Només web - només per a administradors**

Utilitza **Usuaris** per gestionar comptes d'usuari a la versió web. Pots afegir usuaris, actualitzar els seus detalls, restablir contrasenyes i eliminar comptes.

<br />

<a id="api-config"></a>
### Configuració d'API

**Només escriptori**

Utilitza **Configuració d'API** per connectar l'aplicació d'escriptori a OpenRouter o a un proxy de Transrewrt.

- **Clau API d'OpenRouter** és on enganxes la teva clau.
- **URL de la API** és l'adreça del servei. Deixa-ho al valor per defecte tret que t'hagin donat un diferent.
- **Utilitzar Proxy de Transrewrt** encamina les sol·licituds a través d'un servei de proxy en lloc de directament a OpenRouter.
- **Seed de Clau** apareix quan l'opció de proxy està activada.
- **Provar la Configuració d'API** comprova si la configuració actual funciona.

Per a passos detallats sobre com obtenir la teva clau API, consulta [Com obtenir una clau API](#com-obtenir-una-clau-api-escriptori) a dalt.

> ℹ️ **NOTA**<br/>
> Si no estàs segur del que signifiquen **URL de la API**, **Utilitzar Proxy de Transrewrt** o **Seed de Clau**, deixa'ls sense canvis i utilitza la configuració per defecte d'OpenRouter. Més informació sobre el proxy està disponible al [repositori de Transrewrt Proxy](https://github.com/wsj-br/transrewrt-proxy).


<br />

<a id="about"></a>

### Quant a

La pestanya **Quant a** mostra:

- el nom de l'aplicació
- el número de versió
- la data de construcció
- un enllaç al repositori del projecte

<br /><br />

<a id="common-issues"></a>
## Problemes comuns

Si alguna cosa no funciona com s'espera, comproveu primer els punts següents.

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### L'aplicació no traduirà, reescriurà ni transformarà el text

Comproveu que:

- hàgiu seleccionat un model a la barra d'eines
- almenys un model està llistat a [**Configuració** > **Models**](#models)
- la vostra configuració d'API funciona

Si utilitzeu l'aplicació d'escriptori:

1. Obriu [**Configuració** > **Configuració d'API**](#api-config).
2. Comproveu que la vostra clau d'API està desada.
3. Feu clic a **Prova la configuració d'API**.

<br />

<a id="the-model-list-is-empty"></a>
### La llista de models està buida

Obriu [**Configuració** > **Models**](#models) i feu clic a **Refresca**.

Si cal:

- cerqueu un model
- activeu **Només gratuïts**
- afegiu un o més models a **Models seleccionats**

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### El resultat és massa lent o massa car

Proveu un o més d'aquests:

- trieu un model diferent
- utilitzeu una entrada més curta
- desactiveu **Traducció en temps real (mentre s'escriu)** a [**Configuració** > **Configuració general**](#general-settings)
- utilitzeu models gratuïts per a tasques senzilles (vegeu [Models](#models))

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### La interfície està en una llengua incorrecta

Feu clic a la icona del globus a la [barra d'eines](#toolbar) i trieu la **Llengua de la interfície** preferida.

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### El text és massa petit o difícil de llegir

Obriu [**Configuració** > **Configuració general**](#general-settings) i canvieu:

- **Família de fonts**
- **Mida**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### He canviat un prompt i he perdut les edicions

En editar un prompt, feu sempre clic a **Desa** abans de fer clic a **Torna a Executar**.

<br /><br />

<a id="quick-tips"></a>
## Consells ràpids

- Comenceu amb [**Tradueix**](#translate) per assegurar-vos que la configuració funciona abans de passar a [**Reescriu**](#rewrite) o [**Transforma**](#transform).
- Utilitzeu [**Reescriu**](#rewrite) per a millores de redacció diàries.
- Utilitzeu [**Transforma**](#transform) quan necessiteu un flux de treball repetible per a una tasca específica.
- Utilitzeu el [**Tauler**](#dashboard) si voleu tenir control sobre l'ús i el cost.
- Exporteu els prompts regularment si creeu una biblioteca de prompts que voleu mantenir segura (vegeu [Prompts de Transformació](#transform-prompts)).

<br /><br />

<a id="disclaimer"></a>
## Avís legal

Els noms i icones dels productes pertanyen als seus respectius propietaris i s'utilitzen amb finalitats d'identificació únicament. Aquest programari no està afiliat ni recomanat per cap de les marques mencionades.

<br /><br />

<a id="license"></a>
## Llicència

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)