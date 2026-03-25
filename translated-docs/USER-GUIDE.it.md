---
translated_at: "2026-03-25T21:35:28.456Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Banner di Transrewrt](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Guida utente

<br/>

<a id="introduction"></a>
## Introduzione

Transrewrt ti aiuta a lavorare con il testo in tre modi principali:

- **Tradurre** - convertire il testo da una lingua all'altra.
- **Riformulare** - riscrivere il testo in uno stile diverso, ad esempio più chiaro, più breve o più formale.
- **Trasformare** - elaborare il testo usando istruzioni personalizzate basate sull'intelligenza artificiale, chiamate prompt.

<br/>

Questa guida spiega come utilizzare l'app una volta installata ed eseguita. Per le istruzioni di installazione, consulta il file **[README](README.it.md)** principale.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt è disponibile come app desktop per Windows e Linux, e come app web autoservita. Questa guida si concentra sull'uso quotidiano dell'app. Quando qualcosa si applica solo a una versione, è chiaramente indicato.

<small>**Leggi in altre lingue:** [English (UK)](USER-GUIDE.it.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Nota sulle traduzioni dell'interfaccia e della documentazione:** Tutte le lingue dell'interfaccia, eccetto l'inglese (UK) originale, sono state tradotte mediante modelli di intelligenza artificiale; il testo potrebbe risultare impreciso o contenere errori.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Indice**

- [Prima di iniziare](#before-you-start)
  - [Come ottenere una chiave API OpenRouter gratuita (app desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Avvio rapido](#getting-started)
- [Parti principali della finestra](#main-parts-of-the-window)
  - [Barra laterale](#sidebar)
  - [Barra degli strumenti](#toolbar)
  - [Pannelli di input e output](#input-and-output-panels)
- [Traduzione](#translate)
  - [Tradurre del testo](#translate-text)
  - [Selezione della lingua](#language-selection)
  - [Impostazioni utili per la traduzione](#helpful-translation-settings)
- [Riformulazione](#rewrite)
- [Trasformazione](#transform)
  - [Eseguire un prompt esistente](#run-an-existing-prompt)
  - [Se non hai ancora prompt](#if-you-have-no-prompts-yet)
  - [Creare rapidamente un prompt](#create-a-prompt-quickly)
  - [Modificare un prompt](#edit-a-prompt)
  - [Testare un prompt prima di utilizzarlo](#test-a-prompt-before-using-it)
- [Dashboard](#dashboard)
  - [Filtra i dati](#filter-the-data)
  - [Schede della dashboard](#dashboard-tabs)
  - [Esporta dati](#export-data)
  - [Eliminare i record memorizzati per un modello](#delete-stored-records-for-a-model)
- [Cronologia](#history)
  - [Filtra i dati](#filter-the-data-1)
  - [Esporta i dati della cronologia](#export-history-data)
- [Impostazioni](#settings)
  - [Impostazioni generali](#general-settings)
  - [Modelli](#models)
  - [Lingue](#languages)
  - [Tracciamento costi](#cost-tracking)
  - [Prompt di trasformazione](#transform-prompts)
  - [Utenti](#users)
  - [Configurazione API](#api-config)
  - [Informazioni](#about)
- [Problemi comuni](#common-issues)
  - [L'app non traduce, riformula o trasforma il testo](#the-app-will-not-translate-rewrite-or-transform-text)
  - [La lista dei modelli è vuota](#the-model-list-is-empty)
  - [Il risultato è troppo lento o troppo costoso](#the-result-is-too-slow-or-too-expensive)
  - [L'interfaccia è nella lingua sbagliata](#the-interface-is-in-the-wrong-language)
  - [Il testo è troppo piccolo o difficile da leggere](#the-text-is-too-small-or-hard-to-read)
  - [I grafici della dashboard sono vuoti](#dashboard-charts-are-empty)
  - [Il costo mostra "non disponibile" o sembra errato](#cost-shows-not-available-or-seems-wrong)
  - [Il costo totale non corrisponde alla fattura del fornitore](#total-cost-does-not-match-my-provider-bill)
  - [La pagina Cronologia manca nella barra laterale](#the-history-page-is-missing-from-the-sidebar)
  - [App web: reindirizzamento imprevisto alla pagina di login](#web-app-redirected-to-the-login-page-unexpectedly)
  - [La dashboard non mostra dati di altri utenti (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Ho modificato un prompt e ho perso le modifiche](#i-changed-a-prompt-and-lost-the-edits)
- [Consigli rapidi](#quick-tips)
- [Avviso legale](#disclaimer)
- [Licenza](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Prima di iniziare

Per utilizzare Transrewrt, è necessario avere accesso ad almeno un fornitore di intelligenza artificiale. I fornitori supportati sono: [OpenRouter](https://openrouter.ai) (che aggrega molti modelli), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e [Ollama](https://ollama.com) per modelli locali.

Non devi scegliere un modello a pagamento per iniziare. Non appena inserirai la tua chiave API di OpenRouter, l'app abiliterà automaticamente un'opzione **gratuita** integrata di OpenRouter. Ciò ti consente di iniziare immediatamente a tradurre, riscrivere e trasformare il testo. In alternativa, puoi ottenere gratuitamente una chiave API da Cerebras, Google, Groq o Mistral AI.

In termini semplici:

- Un **modello** è il motore AI che svolge il lavoro. I modelli vengono elencati con un **prefisso del fornitore** (ad esempio `openrouter/…`, `openai/…`, `ollama/…`).
- Una **chiave API** (oppure, per Ollama, un **URL di base**) è il modo in cui l'app raggiunge il fornitore.

Se stai utilizzando l'**app desktop**, aggiungi le chiavi in [**Impostazioni** > **Configurazione API**](#api-config) per ogni fornitore che utilizzi. Per un uso esclusivo di OpenRouter, vedi [Come ottenere una chiave API](#how-to-get-an-api-key-desktop-app) qui sotto. Se non vuoi utilizzare una chiave API, puoi installare Ollama (da [ollama.com](https://ollama.com)) e usare modelli locali, come ad esempio `translategemma:4b`.

Se stai utilizzando la **versione web**, il proprietario del server configura i fornitori tramite variabili d'ambiente, quindi non potrai inserire direttamente le chiavi API nell'applicazione.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Come ottenere una chiave API gratuita di OpenRouter (app desktop)

Se stai usando l'app desktop, segui questi passaggi:

1. Vai su [OpenRouter](https://openrouter.ai) dal tuo browser web.
2. Crea un account o accedi.
3. Apri la pagina [Chiavi](https://openrouter.ai/keys).
4. Fai clic sul pulsante per creare una nuova chiave API.
5. Assegna un nome alla chiave in modo da poterla riconoscere in seguito.
6. Copia la nuova chiave API.
7. Torna a Transrewrt e apri **Impostazioni** > **Configurazione API**.
8. Incolla la chiave nel campo **Chiave API OpenRouter** (sotto **Impostazioni** > **Configurazione API**).
9. Fai clic su **Prova chiave OpenRouter** per verificare che funzioni.

<br/><br/>

<a id="getting-started"></a>
## Primi passi

Se è la prima volta che usi Transrewrt, segui questo ordine:

1. Apri l'app.
2. Se necessario, scegli la tua **lingua dell'interfaccia** dall'icona del globo.
3. Se utilizzi l'**app desktop**, apri [**Impostazioni** > **Configurazione API**](#api-config), aggiungi una chiave API per almeno un fornitore (ad esempio OpenRouter) e fai clic su **Prova** per verificarne il funzionamento.
4. Apri [**Impostazioni** > **Modelli**](#models) e aggiungi uno o più modelli a **Modelli selezionati**.
5. Apri [**Impostazioni** > **Lingue**](#languages) e seleziona le tue **Lingue principali**, se desideri che le lingue usate più di frequente appaiano per prime.
6. Vai su **Traduci** ed esegui una traduzione semplice per verificare che tutto funzioni.
7. Una volta verificato, prova **Riscrivi** e poi **Trasforma**.

L'ordine è importante. Evita il problema più comune all'uso iniziale: tentare di eseguire un'operazione prima che l'app abbia una connessione API funzionante o un modello selezionato.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Parti principali della finestra

L'app è divisa in tre aree principali:

- La **barra laterale** a sinistra.
- La **barra degli strumenti** in alto.
- L'**area di lavoro** al centro.

<br/>

<a id="sidebar"></a>
### Barra laterale

Usa la barra laterale per spostarti all'interno dell'app. Puoi ridurla per guadagnare spazio facendo clic sull'icona accanto al logo dell'app.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/it/sidebar.png" alt="Barra laterale dell'applicazione" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Traduci</strong> apre l'area di lavoro per le traduzioni.</li><br/>
        <li><strong>Riscrivi</strong> apre l'area di lavoro per la riscrittura.</li><br/>
        <li><strong>Trasforma</strong> apre l'area di lavoro con prompt personalizzati.</li><br/>
        <li><strong>Dashboard</strong> mostra informazioni sull'utilizzo e sui costi.</li><br/>
        <li><strong>Impostazioni</strong> apre il pannello delle impostazioni.</li><br/>
        <li><strong>Cronologia</strong> mostra la cronologia delle attività con il testo in input e output.</li><br/>
        <li><strong>Utente</strong> mostra il nome utente dell'utente collegato (solo versione web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barra degli strumenti

La barra degli strumenti cambia leggermente a seconda della sezione dell'app in cui ci si trova.

- A sinistra, viene mostrato il nome della pagina corrente.
- A destra, sono presenti il **selettore del modello** e il controllo della **lingua dell'interfaccia**.

Il **selettore del modello** consente di scegliere quale motore AI utilizzare per l'attività corrente.

  ![Selettore del modello](../images/screenshots/it/model-selector.png)

Alcuni modelli gratuiti potrebbero non essere sempre disponibili: a volte sono offline o hanno un limite di utilizzo. In questo caso, l'app rimuoverà automaticamente il modello dalla lista disponibile. Per controllare quali modelli visualizzare, vai a [**Impostazioni** > **Modelli**](#models) e modifica l'elenco dei modelli.  
Puoi anche aprire direttamente le impostazioni del modello cliccando sull'icona del provider alla sinistra del nome del modello nella barra degli strumenti.

<br/>

L’**icona del globo + codice della lingua** modifica la lingua dell'interfaccia dell'app, come menu e pulsanti. **Non** modifica le lingue di traduzione utilizzate in **Traduci**.

  ![Selettore della lingua dell'interfaccia](../images/screenshots/it/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Pannelli di input e output

La maggior parte delle aree di lavoro utilizza un pannello **Input** a sinistra e un pannello **Output** a destra.

Ogni pannello mostra inoltre:

| **Input**                                                          | **Output**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Numero di caratteri <br/>- Numero di parole <br/>- Numero di paragrafi   <br/> | - Tempo impiegato per l'operazione<br/>- **TPS** (token al secondo)<br/>- Numero di caratteri, parole e paragrafi<br/>- Modello utilizzato |


Se ti stai chiedendo cosa significano i termini tecnici:

- **Token** indica un piccolo frammento di testo. Puoi considerarlo come una parte di parola o una parola breve.
- **TPS** indica quanti di questi frammenti di testo il modello ha elaborato ogni secondo.

<br/>

Puoi inoltre monitorare il costo di ogni operazione (se disponibile) e il costo totale, abilitando l'opzione `Mostra informazioni sui costi nelle azioni` in [**Impostazioni** > **Impostazioni generali**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Traduci

Utilizza **Traduci** quando desideri convertire del testo da una lingua all'altra.

![Area di lavoro Traduci](../images/screenshots/it/translate.png)

<br/>

<a id="translate-text"></a>
### Tradurre testo

1. Apri **Traduci**.
2. Scegli una lingua in **Da**.
3. Scegli una lingua in **A**.
4. Scegli un modello nella barra degli strumenti.
5. Digita o incolla del testo nel pannello **Input**.
6. Clicca su **Traduci**.
7. Leggi il risultato nel pannello **Output**.
8. Usa il pulsante di copia se desideri copiare il risultato.

<br/>

<a id="language-selection"></a>
### Selezione della lingua

- **Da** può essere una lingua specifica o **Rileva lingua**.
- **A** è la lingua in cui desideri ottenere il risultato.

Le tue **Lingue principali** selezionate appariranno in alto nella lista. Puoi impostarle in [**Impostazioni** > **Lingue**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Impostazioni utili per la traduzione

In [**Impostazioni** > **Impostazioni generali**](#general-settings), puoi modificare il comportamento della traduzione:

- **Traduci automaticamente all'incollamento** avvia una traduzione non appena incolli del testo.
- **Copia automaticamente il risultato negli appunti** copia il risultato automaticamente al termine dell'operazione.
- **Traduzione in tempo reale (durante la digitazione)** avvia traduzioni mentre stai scrivendo.
- **Timeout (ms)** imposta quanto a lungo l'app attende prima di avviare una traduzione in tempo reale.
- **Enter** imposta cosa accade quando premi `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Riscrivi

Utilizza **Riscrivi** quando desideri migliorare l'espressione senza cambiare il significato principale.

![Area di lavoro Riscrivi](../images/screenshots/it/rewrite.png)

Questo strumento è utile per:

- correggere errori ortografici e grammaticali
- rendere il testo più chiaro
- rendere il testo più formale o meno formale
- abbreviare o espandere il testo
- rendere il testo più tecnico

<br/>

> 💡 **SUGGERIMENTO**<br/>
> Quando utilizzi la modalità "**Controlla ortografia e grammatica**", nel pannello di output appare un pulsante `Mostra modifiche`.
> Clicca su questo pulsante per mostrare o nascondere le correzioni, visualizzando o nascondendo i cambiamenti specifici apportati al testo.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Trasforma

Usa **Trasforma** quando desideri che l'intelligenza artificiale segua un insieme personalizzato di istruzioni.

![Area di lavoro Trasforma](../images/screenshots/it/transform.png)

Questa è l'area dell'applicazione più flessibile. Puoi utilizzarla per attività come:

- riassumere appunti
- trasformare un testo grezzo in un'email curata
- estrarre i punti chiave
- convertire un testo in un formato specifico
- qualsiasi altra attività personalizzata sul testo in ingresso

<br/>

<a id="run-an-existing-prompt"></a>
### Eseguire un prompt esistente

1. Apri **Trasforma**.
2. Scegli un prompt dall'elenco dei prompt.
3. Se appare una casella per la lingua **Destinazione**, seleziona una lingua, se desiderato.
4. Digita o incolla del testo nella sezione **Input**.
5. Clicca su **Trasforma**.
6. Leggi il risultato in **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Se non hai ancora prompt

Se il tuo elenco di prompt è vuoto, clicca su **Carica prompt di esempio**. Verranno aggiunti esempi predefiniti, così da poter iniziare rapidamente.

<br/>

> ℹ️ **NOTA**<br/>
> I prompt di esempio sono forniti in inglese. Dopo averli caricati, puoi modificarli e utilizzare **Traduci prompt** per tradurli nella tua lingua.

<br/>

<a id="create-a-prompt-quickly"></a>
### Creare rapidamente un prompt

Il modo più veloce per creare un prompt è:

1. Clicca su **Nuovo prompt**.
2. Clicca su **Genera prompt**.
3. Descrivi cosa deve fare il tuo prompt.
4. Scegli un modello.
5. Lascia che l'app crei una bozza per te.
6. Esamina la bozza e clicca su **Salva**.

![Genera prompt](../images/screenshots/it/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Modifica di un prompt

Quando crei o modifichi un prompt, l'editor appare sulla sinistra e un'area di prova appare sulla destra.

![Editor di prompt in Trasforma](../images/screenshots/it/transform-prompt-edit.png)

I campi principali sono:

- **Nome del prompt**: il nome mostrato nell'elenco dei prompt.
- **Istruzioni del prompt (opzionale)**: un breve suggerimento visualizzato all'utente durante l'esecuzione del prompt.
- **Ruolo del modello**: il ruolo generale assegnato all'intelligenza artificiale, ad esempio 'Sei un assistente utile.'
- **Istruzioni per il modello (una per riga)**: le regole specifiche che vuoi che l'intelligenza artificiale segua.
- **Descrizione dell'output**: una breve parola che descrive il risultato, come 'riassunto' o 'riscritto'.
- **Temperatura (0,0 → 1,0)**: il comportamento del modello; vedi sotto.
- **Chiedi la lingua di destinazione**: aggiunge un selettore della lingua di destinazione quando il prompt viene eseguito.

Se il termine tecnico **Temperatura** è nuovo per te, pensalo in questo modo:

- Una **temperatura più bassa** produce risultati più stabili e prevedibili.
- Una **temperatura più alta** produce maggiore varietà e creatività.

Puoi anche utilizzare:

- **`Genera prompt`** per creare una nuova bozza da una semplice descrizione
- **`Migliora prompt`** per perfezionare un prompt esistente
- **`Traduci prompt`** per tradurre i campi del prompt

<br/>

> ⚠️ **ATTENZIONE**<br/>
> Clicca su **`Salva`** prima di cliccare su **`Indietro per eseguire`**. Se torni indietro senza salvare, le modifiche andranno perse.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Prova un prompt prima di utilizzarlo

Il pannello di prova a destra ti permette di sperimentare il tuo prompt con testi di esempio prima di utilizzarlo nei tuoi lavori quotidiani.

Questo è utile quando:

- stai creando un nuovo prompt
- stai confrontando due versioni di un prompt
- desideri verificare tono, lunghezza o formato dell'output

<br/>

> ℹ️ **NOTA**<br/>
> Puoi esportare e importare i prompt salvati in [**Impostazioni** > **Prompt Trasforma**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Dashboard

Usa **Dashboard** per vedere quanto stai utilizzando l'app e a quale costo (per i modelli a pagamento).

![Riepilogo della Dashboard](../images/screenshots/it/dashboard-summary.png)


<br/>

> ℹ️ **NOTA**<br/>
> Se utilizzi soltanto modelli gratuiti, i grafici relativi ai costi saranno vuoti.

<br/>

<a id="filter-the-data"></a>
### Filtrare i dati

Utilizza i pulsanti di filtro nella parte superiore per modificare l'intervallo temporale.

![Filtri della Dashboard](../images/screenshots/it/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> Il filtro **Utente** è visibile solo agli amministratori nella versione web. Gli utenti ordinari non vedranno questo filtro, e non è disponibile nell'app desktop.

<br/>

<a id="dashboard-tabs"></a>

### Schede del cruscotto

- **Riepilogo** fornisce una panoramica sull'utilizzo e sui costi.
- **Per utilizzo** suddivide le attività per lingua di traduzione, modalità di riscrittura e prompt di trasformazione.
- **Per modello** mostra quali modelli hai utilizzato e quanto ti sono costati.
- **Per giorno** mostra i totali giornalieri.
- **Tutte le chiamate** mostra la cronologia completa delle chiamate e ti permette di esportarla.

<br/>

<a id="export-data"></a>
### Esportare i dati

I dati delle tabelle del cruscotto possono essere esportati nei seguenti formati:

- **JSON**
- **CSV**
- **XLSX**

Questa funzione è utile se desideri esaminare le attività al di fuori dell'app o condividere un rapporto.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Eliminare i record memorizzati per un modello

Nella sezione **Per modello** o **Tutte le chiamate**, puoi rimuovere i record memorizzati per un modello cliccando sull'icona del "cestino".

> ⚠️ **ATTENZIONE**<br/>
> L'eliminazione dei record memorizzati non può essere annullata. Utilizza questa funzione solo se sei sicuro di non aver più bisogno di quella cronologia.

Per eliminare tutti i dati o rimuovere i record in base all'età, vai su [**Impostazioni** > **Tracciamento costi**](#cost-tracking). Lì troverai opzioni per cancellare tutti i dati memorizzati o soltanto quelli più vecchi di una certa data.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Cronologia

Fai clic su **Cronologia** per visualizzare la cronologia delle tue azioni all'interno di **Transrewrt**, inclusi l'input e l'output di ciascuna operazione.

![Pagina Cronologia](../images/screenshots/it/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrare i dati

**Cronologia** utilizza gli stessi filtri della pagina **Cruscotto**. Usali per selezionare l'intervallo temporale.

![Filtri cruscotto](../images/screenshots/it/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> Il filtro **Utente** è visibile solo agli amministratori nella versione web. Gli utenti normali non vedranno questo filtro, e non è disponibile nell'app desktop.

<br/>

<a id="export-history-data"></a>
### Esportare i dati della cronologia

La pagina della cronologia può esportare i dati filtrati nei seguenti formati:

- **JSON**
- **CSV**
- **XLSX**

Questa funzione è utile se desideri esaminare le attività al di fuori dell'app o condividere un rapporto.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Impostazioni

Apri **Impostazioni** dalla barra laterale per personalizzare il comportamento dell'app.

Le schede disponibili dipendono dalla piattaforma e dal tuo ruolo:

  | Scheda                   | Desktop | Web (amministratore) | Web (utente normale) |
  |--------------------------|:-------:|:--------------------:|:--------------------:|
  | Impostazioni generali    |   sì    |         sì           |          sì           |
  | Modelli                  |   sì    |         sì           |          sì           |
  | Lingue                   |   sì    |         sì           |          sì           |
  | Tracciamento costi       |   sì    |         sì           |           —           |
  | Prompt di trasformazione |   sì    |         sì           |          sì           |
  | Utenti                   |    —    |         sì           |           —           |
  | Configurazione API       |   sì    |         sì           |           —           |
  | Informazioni             |   sì    |         sì           |          sì           |

<br/>

> ℹ️ **NOTA**<br/>
> Nella versione web, ogni utente ha la propria configurazione. Impostazioni come modelli selezionati, lingue, opzioni generali e prompt di trasformazione sono memorizzate per singolo utente. Le modifiche che effettui non influenzano gli altri utenti.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Impostazioni generali

Utilizza **Impostazioni generali** per controllare il comportamento della tastiera, se memorizzare i dettagli delle operazioni nella **Cronologia** e l'aspetto dell'interfaccia.

**Comportamento**

- **Comportamento del tasto INVIO** sceglie se `Invio` esegue l'operazione o inserisce una nuova riga.
- **Traduzione automatica su incolla** avvia la traduzione non appena incolli del testo.
- **Copia automatica del risultato negli appunti** copia automaticamente i risultati con esito positivo.
- **Traduzione in tempo reale (durante la digitazione)** traduce mentre digiti.
- **Timeout (ms)** imposta il tempo di attesa per la traduzione in tempo reale.

**Cronologia**

- **Mantieni cronologia esecuzioni** determina se ogni traduzione, riscrittura e trasformazione conservi il **testo di input e output** per la visualizzazione della [**Cronologia**](#history) nella barra laterale. Disattivandola verrà chiesta una conferma; se confermi, il testo della cronologia memorizzato verrà rimosso dal database.
- **Elimina dati cronologia** permette di rimuovere il testo memorizzato in base all'età (ad esempio, più vecchio di alcuni mesi, o **tutti i dati (cancella)**) tramite **Elimina dati**. Questa azione riguarda soltanto il testo delle esecuzioni salvato per la visualizzazione della **Cronologia**; **non** elimina i totali relativi a costi o utilizzo. Per rimuovere o ridurre i dati relativi ai **costi**, utilizza [**Impostazioni** > **Tracciamento costi**](#cost-tracking).

**Aspetto**

- **Mostra informazioni sui costi nelle azioni** controlla la visualizzazione del costo per operazione (se disponibile) e del costo totale nei pannelli di output di Traduzione, Riscrittura e Trasformazione.
- **Cifre decimali del costo** modifica la visualizzazione delle cifre decimali del costo.
- **Solo web:** **mostra un margine intorno all'app** aggiunge spazio extra intorno all'interfaccia.
- **Famiglia del carattere** modifica il tipo di carattere nei pannelli di testo.
- **Dimensione** modifica la dimensione del carattere.

<br/>

<a id="models"></a>

### Modelli

Utilizza **Impostazioni** > **Modelli** per scegliere quali modelli visualizzare nella barra degli strumenti.

![Scheda modelli nelle impostazioni](../images/screenshots/it/settings-models.png)

La pagina presenta due elenchi:

- **Modelli disponibili** a sinistra
- **Modelli selezionati** a destra

Tra i controlli utili ci sono:

- **Cerca modelli...** per trovare un modello per nome
- **Chip Provider** per filtrare l'elenco per singolo motore (OpenRouter, OpenAI, Ollama, …)
- **Solo gratuiti** per mostrare solo i modelli gratuiti
- **Aggiorna** per ricaricare l'elenco
- **Espandi tutto** e **Comprimi tutto** quando ordini per provider

Gli ID dei modelli includono il prefisso del provider (ad esempio `openrouter/…` vs `openai/…`). Badge come **OpenAI (OpenRouter)** vs **OpenAI (diretto)** indicano il percorso del traffico.

> ℹ️ **NOTA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) è un modello router, non un modello di chat generale: la sua risposta è un JSON che descrive il corpo della richiesta all'API OpenRouter (ad esempio un array `requests` con `model` e `messages`). Se lo utilizzi per **Tradurre**, **Riscrivere** o **Trasformare**, il pannello di output mostrerà quel JSON invece di testo finito. Per questi compiti scegli un modello testuale normale. Consulta la [pagina del modello Body Builder](https://openrouter.ai/openrouter/bodybuilder) su OpenRouter.

Azioni:

 - Per aggiungere un modello, clicca su **Aggiungi** o ovunque sulla voce.

 - Per rimuovere un modello, clicca su **X** accanto al modello in **Modelli selezionati** o su **Selezionato** nella voce dei Modelli disponibili.

 - Per svuotare l'elenco, clicca su **Deseleziona tutti**. Il modello gratuito obbligatorio rimarrà nell'elenco.

<br/>

> ℹ️ **NOTA**<br/>
> Se non vuoi aggiungere crediti a OpenRouter immediatamente, inizia abilitando **Solo gratuiti** e scegliendo i modelli gratuiti (nessuna carta di credito richiesta). Puoi anche usare Ollama per eseguire modelli localmente senza nessuna chiave API.

<br/>

<a id="languages"></a>
### Lingue

Usa **Impostazioni** > **Lingue** per organizzare gli elenchi di lingue utilizzati nell'app.

- Le **lingue preferite** vengono fissate in alto negli elenchi di lingue disponibili in **Traduci** e **Trasforma**.
- La **lingua personalizzata** ti permette di aggiungere una lingua non presente nell'elenco predefinito.

Se aggiungi una lingua personalizzata, apparirà nei selettori di lingua insieme alle opzioni predefinite.

<br/>

<a id="cost-tracking"></a>
### Monitoraggio dei costi

Utilizza **Impostazioni** > **Monitoraggio dei costi** per gestire le informazioni sui costi.

- **Costo totale** mostra il totale cumulativo.
- **Copia valore** copia il totale negli appunti.
- **Ripristina costo** reimposta il totale a zero.
- **Sincronizza con l'utilizzo della chiave API** imposta il totale in base all'utilizzo riportato dal tuo account OpenRouter (solo OpenRouter).
- **Utilizzo chiave API** mostra i dettagli di utilizzo OpenRouter, se disponibili.
- **Elimina dati costi** rimuove tutti i dati, oppure solo quelli più vecchi di una data selezionata.

**Monitoraggio costi:** quando utilizzi modelli OpenRouter, l'app mostra il tuo utilizzo reale e le spese basate sulle informazioni di costo di OpenRouter. Per tutti gli altri provider, l'app stima i costi utilizzando i prezzi pubblicati da OpenRouter; se un prezzo non è disponibile, la stima potrebbe essere zero.

<br/>

> ℹ️ **NOTA**<br/>
> **Tutte le cifre relative ai costi sono stime solo a scopo informativo, non costituiscono fatturazione ufficiale.**

<br/>

> ⚠️ **ATTENZIONE**<br/>
> L'eliminazione dei dati non può essere annullata. Prima di eliminare, assicurati di eseguire il backup dei tuoi dati o esportarli tramite [**Cronologia**](#history) 
> o [**Dashboard** > **Tutte le richieste**](#dashboard-tabs), altrimenti andranno perduti definitivamente. 
> Anche tutta la cronologia di input/output relativa a ogni voce di chiamata API verrà eliminata.

<br/>

<a id="transform-prompts"></a>
### Prompt di trasformazione

Utilizza **Impostazioni** > **Prompt di trasformazione** per gestire i prompt in blocco.

Puoi:

- esaminare i prompt salvati
- eliminare prompt
- importare prompt da un file
- esportare prompt per backup o condivisione

<br/>

<a id="users"></a>
### Utenti

Utilizza **Utenti** per gestire gli account utente nella versione web. Puoi aggiungere utenti, aggiornarne i dettagli, reimpostare le password ed eliminare account.

<br/>

<a id="api-config"></a>
### Configurazione API

I provider supportati sono: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e **Ollama** (modelli locali tramite un URL base). Devi configurare solo i provider che utilizzi.

**Applicazione web: solo amministratore**

Le chiavi API vengono configurate tramite variabili d'ambiente di sistema o Docker — non vengono inserite nell'interfaccia web. Questa pagina mostra quali provider hanno una chiave configurata e ti permette di testarne ciascuna cliccando sul pulsante **`Test`**.

<br/>

> ℹ️ **NOTA**<br/>
> Per modificare una chiave API, aggiorna la variabile d'ambiente nella tua configurazione di sistema o Docker e riavvia il server o il contenitore.

<br/>

**Applicazione desktop**

Utilizza **Configurazione API** per memorizzare le chiavi API per ciascun provider utilizzato. Per Ollמון, inserisci l'**URL base** invece di una chiave API.

<br/>

> 💡 **Suggerimento** <br/>
> Se non vuoi usare una chiave API o pagare per l'utilizzo, puoi [scaricare Ollama](https://ollama.com) ed eseguire modelli (ad esempio `modello `translategemma:4b`) localmente sul tuo computer gratuitamente. In alternativa, puoi creare un account gratuito su OpenRouter (nessuna carta di credito richiesta) per usare i loro modelli gratuiti, oppure ottenere una chiave API gratuita da Cerebras, Google, Groq o Mistral AI.

<br/>

- Aggiungi solo i provider che ti servono. In **Impostazioni** > **Modelli**, ogni ID modello inizia col provider (ad esempio `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Per aggiungere una chiave API, inserisci il valore nel campo di testo e clicca su **`Salva`**. Per sostituire una chiave esistente, clicca su **`Modifica`**. Per verificare che una chiave funzioni, clicca su **`Test`**. Per l'URL base di Ollama, clicca sempre su **`Test`** per ver verificare la connessione.

<br/>

> ℹ️ **NOTA**<br/>
> Non puoi vedere il valore attuale di una chiave API. Puoi solo sostituirla utilizzando il pulsante **`Modifica`**.
> Le chiavi API sono memorizzate in forma crittografata nella configurazione.

<br/>

<a id="about"></a>

### Informazioni

La scheda **Informazioni** mostra:

- il nome dell'app
- il numero di versione
- la data di compilazione
- un collegamento al repository del progetto

<br/><br/>

<a id="common-issues"></a>
## Problemi comuni

Se qualcosa non funziona come previsto, verifica prima i seguenti punti.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### L'app non traduce, riscrive o trasforma il testo

Verifica che:

- tu abbia selezionato un modello nella barra degli strumenti
- almeno un modello sia presente in [**Impostazioni** > **Modelli**](#models)
- la configurazione API sia corretta

Se utilizzi l'app desktop:

1. Apri [**Impostazioni** > **Configurazione API**](#api-config).
2. Verifica che sia salvata almeno una chiave API.
3. Fai clic su **Test** accanto al provider per confermare che la chiave funzioni.

<br/>

<a id="the-model-list-is-empty"></a>
### La lista dei modelli è vuota

Apri [**Impostazioni** > **Modelli**](#models) e fai clic su **Aggiorna**.

Se necessario:

- cerca un modello
- attiva **Solo gratuiti**
- aggiungi uno o più modelli ai **Modelli selezionati**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Il risultato è troppo lento o troppo costoso

Prova una o più delle seguenti azioni:

- scegli un modello diverso
- usa un input più breve
- disattiva la **Traduzione in tempo reale (mentre si digita)** in [**Impostazioni** > **Impostazioni generali**](#general-settings)
- utilizza modelli gratuiti per compiti semplici (vedi [Modelli](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### L'interfaccia è nella lingua errata

Fai clic sull'icona del globo nella [barra degli strumenti](#toolbar) e scegli la **Lingua dell'interfaccia** desiderata.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Il testo è troppo piccolo o difficile da leggere

Apri [**Impostazioni** > **Impostazioni generali**](#general-settings) e modifica:

- **Famiglia del carattere**
- **Dimensione**

<br/>

<a id="dashboard-charts-are-empty"></a>
### I grafici del cruscotto sono vuoti

Questo è normale se:

- utilizzi solo **modelli gratuiti** (i grafici dei costi saranno vuoti)
- il **filtro temporale** selezionato non comprende il periodo in cui sono state effettuate le chiamate — prova con **Tutti** per verificare

Se i grafici sono ancora vuoti dopo aver selezionato **Tutti**, verifica che le chiamate siano presenti nella pagina [**Cronologia**](#history) o nella scheda **Tutte le chiamate**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Il costo mostra "non disponibile" o sembra errato

Quando utilizzi modelli tramite **OpenRouter**, l'app mostra la spesa effettiva riportata da OpenRouter.

Per altri **provider** (OpenAI diretto, Anthropic diretto, ecc.), il costo è stimato in base ai prezzi pubblicati da OpenRouter. Se non viene trovato un prezzo corrispondente per un modello, il costo apparirà come **non disponibile** e non verrà aggiunto al tuo totale cumulativo.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Il costo totale non corrisponde alla mia fattura del provider

Tutte le cifre relative ai costi nell'app sono **stime a scopo informativo**, non rappresentano dichiarazioni fatturazione ufficiali.

Per avvicinare il totale alla tua spesa effettiva su OpenRouter, apri [**Impostazioni** > **Tracciamento costi**](#cost-tracking) e fai clic su **Sincronizza con l'uso della chiave API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### La pagina Cronologia manca dalla barra laterale

L'opzione **Mantieni cronologia esecuzioni** potrebbe essere disattivata. Apri [**Impostazioni** > **Impostazioni generali**](#general-settings) e abilitala. Nota che l'attivazione non ripristina i dati della cronologia precedentemente eliminati.

<br/>

<a id="web-app-session-expired"></a>
### App web: reindirizzamento inatteso alla pagina di accesso

La sessione potrebbe essere scaduta. Accedi nuovamente. Se si verifica spesso, controlla la configurazione del server riguardo le impostazioni della durata della sessione.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Il cruscotto non mostra dati per altri utenti (web)

Solo gli **amministratori** possono visualizzare i dati di tutti gli utenti tramite il filtro **Utente**. Gli utenti normali vedono solo la propria attività per impostazione predefinita.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Ho modificato un prompt e ho perso le modifiche

Quando modifichi un prompt, fai sempre clic su **Salva** prima di fare clic su **Torna all'esecuzione**.

<br/><br/>

<a id="quick-tips"></a>
## Suggerimenti rapidi

- Inizia con [**Traduci**](#translate) per verificare che la tua configurazione funzioni prima di passare a [**Riscrivi**](#rewrite) o [**Trasforma**](#transform).
- Usa [**Riscrivi**](#rewrite) per migliorare il testo di tutti i giorni.
- Usa [**Trasforma**](#transform) quando hai bisogno di un flusso di lavoro ripetibile per un compito specifico.
- Usa il [**Cruscotto**](#dashboard) se vuoi monitorare utilizzo e costi.
- Usa la [**Cronologia**](#history) per rivedere operazioni precedenti e i rispettivi testi completi di input/output.
- Esporta regolarmente i prompt se stai creando una libreria di prompt da conservare al sicuro (vedi [Prompt di trasformazione](#transform-prompts)) o se desideri condividerla con altri.

<br/><br/>

<a id="disclaimer"></a>

## Disclaimer

I nomi e i loghi dei prodotti appartengono ai rispettivi proprietari e vengono utilizzati esclusivamente a scopo identificativo. Questo software non è affiliato né sponsorizzato da alcuno dei marchi menzionati.

<br/><br/>

<a id="license"></a>
## Licenza

Copyright © 2026 Waldemar Scudeller Jr.

[Licenza Apache 2.0](LICENSE)