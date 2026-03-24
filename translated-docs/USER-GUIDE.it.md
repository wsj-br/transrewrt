---
translated_at: "2026-03-24T01:49:59.151Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Guida utente

<br/>

<a id="introduction"></a>
## Introduzione

Transrewrt ti aiuta a lavorare con il testo in tre modi principali:

- **Tradurre** - convertire il testo da una lingua a un'altra.
- **Riformulare** - riproporre il testo in uno stile diverso, ad esempio più chiaro, più breve o più formale.
- **Trasformare** - elaborare il testo utilizzando istruzioni personalizzate basate sull'intelligenza artificiale, chiamate prompt.

<br/>

Questa guida spiega come utilizzare l'app una volta installata ed eseguita. Per le istruzioni di installazione, consulta il file **[README](README.it.md)** principale.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt è disponibile come app desktop per Windows e Linux e come app web ospitata autonomamente. Questa guida si concentra sull'utilizzo quotidiano dell'app. Quando qualcosa riguarda solo una versione specifica, è indicato chiaramente.

<small>**Leggi in altre lingue:** [English (UK)](USER-GUIDE.it.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Indice**

- [Prima di iniziare](#before-you-start)
  - [Come ottenere una chiave API gratuita di OpenRouter (app desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Iniziare](#getting-started)
- [Parti principali della finestra](#main-parts-of-the-window)
  - [Barra laterale](#sidebar)
  - [Barra degli strumenti](#toolbar)
  - [Pannelli di input e output](#input-and-output-panels)
- [Tradurre](#translate)
  - [Tradurre il testo](#translate-text)
  - [Selezione della lingua](#language-selection)
  - [Impostazioni utili per la traduzione](#helpful-translation-settings)
  - [Scorciatoie da tastiera](#keyboard-shortcuts)
- [Riformulare](#rewrite)
  - [Riformulare il testo](#rewrite-text)
- [Trasformare](#transform)
  - [Eseguire un prompt esistente](#run-an-existing-prompt)
  - [Se non hai ancora nessun prompt](#if-you-have-no-prompts-yet)
  - [Creare rapidamente un prompt](#create-a-prompt-quickly)
  - [Modificare un prompt](#edit-a-prompt)
  - [Provare un prompt prima dell'uso](#test-a-prompt-before-using-it)
  - [Gestire i prompt salvati](#manage-saved-prompts)
- [Dashboard](#dashboard)
  - [Filtra i dati](#filter-the-data)
  - [Schede della dashboard](#dashboard-tabs)
  - [Esporta i dati](#export-data)
  - [Elimina i record memorizzati per un modello](#delete-stored-records-for-a-model)
- [Cronologia](#history)
  - [Filtra i dati](#filter-the-data-1)
  - [Esporta i dati della cronologia](#export-history-data)
- [Impostazioni](#settings)
  - [Impostazioni generali](#general-settings)
  - [Modelli](#models)
  - [Lingue](#languages)
  - [Monitoraggio dei costi](#cost-tracking)
  - [Prompt di trasformazione](#transform-prompts)
  - [Utenti](#users)
  - [Configurazione API](#api-config)
  - [Informazioni](#about)
- [Problemi comuni](#common-issues)
  - [L'app non traduce, riformula o trasforma il testo](#the-app-will-not-translate-rewrite-or-transform-text)
  - [L'elenco dei modelli è vuoto](#the-model-list-is-empty)
  - [Il risultato è troppo lento o troppo costoso](#the-result-is-too-slow-or-too-expensive)
  - [L'interfaccia è nella lingua sbagliata](#the-interface-is-in-the-wrong-language)
  - [Il testo è troppo piccolo o difficile da leggere](#the-text-is-too-small-or-hard-to-read)
  - [I grafici della dashboard sono vuoti](#dashboard-charts-are-empty)
  - [Il costo mostra "non disponibile" o sembra errato](#cost-shows-not-available-or-seems-wrong)
  - [Il costo totale non corrisponde al conto del fornitore](#total-cost-does-not-match-my-provider-bill)
  - [La pagina Cronologia manca dalla barra laterale](#the-history-page-is-missing-from-the-sidebar)
  - [App web: reindirizzato alla pagina di accesso inaspettatamente](#web-app-redirected-to-the-login-page-unexpectedly)
  - [La dashboard non mostra dati per altri utenti (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Ho modificato un prompt e perso le modifiche](#i-changed-a-prompt-and-lost-the-edits)
- [Consigli rapidi](#quick-tips)
- [Avviso legale](#disclaimer)
- [Licenza](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Prima di iniziare

Per usare Transrewrt, hai bisogno dell'accesso ad almeno un fornitore di intelligenza artificiale. I fornitori supportati sono: [OpenRouter](https://openrouter.ai) (che aggrega molti modelli), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e [Ollama](https://ollama.com) per modelli locali.

Non è necessario selezionare un modello a pagamento per iniziare. Non appena aggiungi la tua chiave API OpenRouter, l'app abilita automaticamente un'opzione **gratuita** integrata di OpenRouter. Ciò ti permette di iniziare immediatamente a tradurre, riscrivere e trasformare il testo.

In termini semplici:

- Un **modello** è il motore AI che svolge il lavoro. I modelli vengono elencati con un **prefisso del fornitore** (ad esempio `openrouter/…`, `openai/…`, `ollama/…`).
- Una **chiave API** (oppure, per Ollama, un **URL di base**) è il modo in cui l'app raggiunge quel fornitore.

Se stai usando l'**app desktop**, aggiungi le chiavi in [**Impostazioni** > **Configurazione API**](#api-config) per ciascun fornitore che utilizzi. Per l'uso solo con OpenRouter, vedi [Come ottenere una chiave API](#how-to-get-an-api-key-desktop-app) di seguito. Se non vuoi usare una chiave API, puoi installare Ollama (da [ollama.com](https://ollama.com)) e usare modelli locali al posto di quelli in rete.

Se stai usando la **versione web**, il proprietario del server configura i fornitori tramite variabili d'ambiente, quindi normalmente non dovrai inserire personalmente le chiavi API.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Come ottenere una chiave API OpenRouter gratuita (app desktop)

Se stai usando l'app desktop, segui questi passaggi:

1. Vai su [OpenRouter](https://openrouter.ai) con il tuo browser web.
2. Crea un account o accedi.
3. Apri la pagina [Chiavi](https://openrouter.ai/keys).
4. Fai clic sul pulsante per creare una nuova chiave API.
5. Assegna un nome alla chiave in modo da poterla riconoscere in seguito.
6. Copia la nuova chiave API.
7. Torna a Transrewrt e apri **Impostazioni** > **Configurazione API**.
8. Incolla la chiave nel campo **Chiave API OpenRouter** (sotto **Impostazioni** > **Configurazione API**).
9. Fai clic su **Prova chiave OpenRouter** per verificare che funzioni.

<br/>

> ℹ️ **NOTA**<br/>
> Puoi iniziare utilizzando il percorso gratuito di OpenRouter o uno qualsiasi degli altri modelli gratuiti disponibili, senza dover aggiungere una carta di credito. In molti casi, questo è sufficiente per iniziare a usare Transrewrt senza dover scegliere un modello a pagamento. In alternativa, puoi usare Ollama per eseguire modelli in locale senza alcuna chiave API.

<br/><br/>

<a id="getting-started"></a>
## Per iniziare

Se è la prima volta che usi Transrewrt, segui questo ordine:

1. Apri l'app.
2. Se necessario, scegli la tua **lingua dell'interfaccia** cliccando sull'icona del globo.
3. Se stai usando l'**app desktop**, apri [**Impostazioni** > **Configurazione API**](#api-config), aggiungi una chiave API per almeno un fornitore (ad esempio OpenRouter) e fai clic su **Prova** per verificarne il funzionamento.
4. Apri [**Impostazioni** > **Modelli**](#models) e aggiungi uno o più modelli alla sezione **Modelli selezionati**.
5. Apri [**Impostazioni** > **Lingue**](#languages) e scegli le tue **Lingue principali**, se vuoi che le lingue usate più di frequente appaiano per prime.
6. Vai su **Traduci** ed esegui una traduzione semplice per verificare che tutto funzioni correttamente.
7. Una volta confermato, prova **Riscrivi** e poi **Trasforma**.

L'ordine è importante. Evita il problema più comune all'uso iniziale: tentare di eseguire un'operazione prima che l'app abbia una connessione API funzionante o un modello selezionato.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Parti principali della finestra

L'app è suddivisa in tre aree principali:

- La **barra laterale** a sinistra.
- La **barra degli strumenti** nella parte superiore.
- L'**area di lavoro** al centro.

<br/>

<a id="sidebar"></a>
### Barra laterale

Usa la barra laterale per spostarti all'interno dell'app. Puoi ridurre la barra laterale per guadagnare spazio, cliccando sull'icona accanto al logo dell'app.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/it/sidebar.png" alt="Barra laterale dell'applicazione" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Traduci</strong> apre l'area di lavoro per la traduzione.</li><br/>
        <li><strong>Riscrivi</strong> apre l'area di lavoro per la riscrittura.</li><br/>
        <li><strong>Trasforma</strong> apre l'area di lavoro per i prompt personalizzati.</li><br/>
        <li><strong>Dashboard</strong> mostra informazioni sull'utilizzo e sui costi.</li><br/>
        <li><strong>Impostazioni</strong> apre il pannello delle impostazioni.</li><br/>
        <li><strong>Cronologia</strong> mostra la cronologia delle attività con testo inserito e risultato ottenuto.</li><br/>
        <li><strong>Utente</strong> mostra il nome dell'utente connesso (solo nella versione web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barra degli strumenti

La barra degli strumenti cambia leggermente a seconda della posizione nell'app.

- A sinistra mostra il nome della pagina corrente.
- A destra mostra il **selettore del modello** e il controllo della **lingua dell'interfaccia**.

Il **selettore del modello** ti permette di scegliere quale motore IA utilizzare per il compito corrente.

  ![Selettore del modello](../images/screenshots/it/model-selector.png)

> ℹ️ **NOTA**<br/>
> Alcuni modelli gratuiti potrebbero non essere sempre disponibili: a volte sono offline o hanno un limite di utilizzo. In tal caso, l'app rimuoverà automaticamente quel modello dall'elenco disponibile.<br/>
> Per controllare quali modelli vengono visualizzati, vai su [**Impostazioni** > **Modelli**](#models) e modifica il tuo elenco di modelli. 
> Puoi anche aprire le impostazioni del modello direttamente cliccando sull'icona del fornitore a sinistra del nome del modello sulla barra degli strumenti.

<br/>

L'**icona del globo + codice della lingua** cambia la lingua dell'interfaccia dell'app, come menu e pulsanti. Non modifica invece le lingue di traduzione utilizzate in **Traduci**.

  ![Selettore della lingua dell'interfaccia](../images/screenshots/it/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Pannelli di input e output

La maggior parte degli spazi di lavoro utilizza un pannello **Input** a sinistra e un pannello **Output** a destra.

Il pannello **Input** mostra:

- Numero di caratteri
- Numero di parole
- Numero di paragrafi

Il pannello **Output** può mostrare:

- Durata dell'operazione
- Costo dell'operazione (se disponibile)
- Costo totale cumulativo
- **TPS** (token al secondo)
- Numero di caratteri, parole e paragrafi
- Il modello utilizzato

Se ti stai chiedendo cosa significano i termini tecnici:

- **Token** indica un frammento di testo di piccole dimensioni. Puoi pensarci come a una parte di parola o a una parola breve.
- **TPS** indica quanti di questi frammenti di testo il modello ha elaborato ogni secondo.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Traduci

Utilizza **Traduci** quando desideri convertire del testo da una lingua all'altra.

![Spazio di lavoro Traduci](../images/screenshots/it/translate.png)

<br/>

<a id="translate-text"></a>
### Tradurre il testo

1. Apri **Traduci**.
2. Scegli una lingua in **Da**.
3. Scegli una lingua in **A**.
4. Scegli un modello nella barra degli strumenti.
5. Digita o incolla del testo nel campo **Input**.
6. Clicca su **Traduci**.
7. Leggi il risultato nel campo **Output**.
8. Usa il pulsante di copia se desideri copiare il risultato.

<br/>

<a id="language-selection"></a>
### Selezione della lingua

- **Da** può essere una lingua specifica o **Rileva lingua**.
- **A** è la lingua in cui vuoi ottenere il risultato.

Le tue **Lingue principali** selezionate appaiono in alto nella lista. Puoi impostarle in [**Impostazioni** > **Lingue**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Impostazioni utili per la traduzione

In [**Impostazioni** > **Impostazioni generali**](#general-settings), puoi modificare il comportamento della traduzione:

- **Traduci automaticamente al momento dell'incollamento** esegue immediatamente una traduzione non appena incolli del testo.
- **Copia automaticamente il risultato negli appunti** copia automaticamente il risultato al termine di una traduzione riuscita.
- **Traduzione in tempo reale (durante la digitazione)** esegue traduzioni mentre digiti.
- **Timeout (ms)** determina per quanto tempo l'app attende prima di eseguire una traduzione in tempo reale.

<br/>

<a id="keyboard-shortcuts"></a>
### Scorciatoie da tastiera

In [**Impostazioni** > **Impostazioni generali**](#general-settings), l'opzione **Comportamento del tasto INVIO** regola cosa accade quando premi `Invio`:

- **Invio** può eseguire l'operazione e **Maiusc+Invio** può inserire una nuova riga.
- Oppure l'app può fare l'opposto.

La modalità corrente viene mostrata anche sul pulsante **Traduci**.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Riformula

Utilizza **Riformula** quando desideri migliorare il testo senza cambiarne il significato principale.

![Spazio di lavoro Riformula](../images/screenshots/it/rewrite.png)

Questo è utile per:

- correggere errori ortografici e grammaticali
- rendere il testo più chiaro
- rendere il testo più formale o informale
- accorciare o espandere il testo
- rendere il testo più tecnico

<br/>

<a id="rewrite-text"></a>

### Riscrivere il testo

1. Apri **Riscrivi**.
2. Scegli una **Modalità**.
3. Scegli un modello nella barra degli strumenti.
4. Digita o incolla del testo nell'area **Input**.
5. Fai clic su **Riscrivi**.
6. Esamina il risultato nell'area **Output**.

Anche qui vale lo stesso comportamento del tasto Invio descritto in [**Traduci**](#keyboard-shortcuts).

<br/>

> 💡 **CONSIGLIO**<br/>
> Quando utilizzi la modalità "**Controllo ortografico e grammaticale**", nel pannello di output appare un pulsante `Mostra modifiche`.
> Fai clic su questo pulsante per alternare la visualizzazione delle correzioni, mostrando o nascondendo i cambiamenti specifici apportati al testo.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## Trasforma

Utilizza **Trasforma** quando vuoi che l'IA segua un insieme personalizzato di istruzioni.

![Area di lavoro Trasforma](../images/screenshots/it/transform.png)

Questa è l'area dell'applicazione più flessibile. Puoi usarla per eseguire attività come:

- riassumere appunti
- trasformare un testo grezzo in un'email curata
- estrarre punti chiave
- convertire un testo in un formato specifico

<br/>

<a id="run-an-existing-prompt"></a>
### Eseguire un prompt esistente

1. Apri **Trasforma**.
2. Scegli un prompt dall'elenco dei prompt.
3. Se appare un campo per la **Lingua di destinazione**, seleziona una lingua, se necessario.
4. Digita o incolla del testo nell'area **Input**.
5. Fai clic su **Trasforma**.
6. Leggi il risultato nell'area **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Se non hai ancora nessun prompt

Se l'elenco dei prompt è vuoto, fai clic su **Carica prompt di esempio**. Verranno aggiunti esempi predefiniti che ti permetteranno di iniziare rapidamente.

<br/>

> ℹ️ **NOTA**<br/>
> I prompt di esempio sono forniti in inglese. Dopo averli caricati, puoi modificare un prompt e usare **Traduci prompt** per tradurlo nella tua lingua.

<br/>

<a id="create-a-prompt-quickly"></a>
### Creare rapidamente un prompt

Il modo più veloce per creare un prompt è il seguente:

1. Fai clic su **Nuovo prompt**.
2. Fai clic su **Genera prompt**.
3. Descrivi cosa deve fare il prompt.
4. Scegli un modello.
5. Lascia che l'app crei una bozza per te.
6. Esamina la bozza e fai clic su **Salva**.

![Genera prompt](../images/screenshots/it/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Modificare un prompt

Quando crei o modifichi un prompt, l'editor appare sulla sinistra e un'area di prova appare sulla destra.

![Editor di prompt Trasforma](../images/screenshots/it/transform-prompt-edit.png)

I campi principali sono:

- **Nome del prompt**: il nome visualizzato nell'elenco dei prompt.
- **Istruzioni per il prompt (facoltativo)**: un breve suggerimento mostrato all'utente durante l'esecuzione del prompt.
- **Ruolo del modello**: il ruolo generale assegnato all'IA, ad esempio 'Sei un assistente utile.'
- **Istruzioni per il modello (una per riga)**: le regole specifiche che l'IA deve seguire.
- **Descrizione output**: una breve parola che descrive il risultato, come 'riassunto' oppure 'riscrittura'.
- **Temperatura (0,0 → 1,0)**: il comportamento del modello; vedi sotto.
- **Chiedi lingua di destinazione**: aggiunge un selettore della lingua di destinazione quando il prompt viene eseguito.

Se il termine tecnico **Temperatura** ti è nuovo, pensalo in questo modo:

- Una **temperatura più bassa** produce risultati più stabili e prevedibili.
- Una **temperatura più alta** produce maggiore varietà e creatività.

Puoi anche utilizzare:

- **`Genera prompt`** per creare una nuova bozza da una semplice descrizione
- **`Migliora prompt`** per affinare un prompt esistente
- **`Traduci prompt`** per tradurre i campi del prompt

<br/>

> ⚠️ **ATTENZIONE**<br/>
> Fai clic su **`Salva`** prima di fare clic su **`Torna all'esecuzione`**. Se torni indietro senza salvare, le modifiche andranno perse.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Prova un prompt prima di utilizzarlo

Il pannello di prova a destra ti permette di testare il prompt con un testo di esempio prima di usarlo nel lavoro quotidiano.

Ciò risulta utile quando:

- stai creando un nuovo prompt
- stai confrontando due versioni di uno stesso prompt
- vuoi verificare il tono, la lunghezza o il formato dell'output

<br/>

<a id="manage-saved-prompts"></a>
### Gestire i prompt salvati

Per gestire tutti i prompt salvati in un unico posto, apri [**Impostazioni** > **Prompt Trasforma**](#transform-prompts).

Qui puoi:

- elencare ed eliminare i tuoi prompt
- esportare i prompt in formato **JSON**, **CSV** oppure **XLSX**
- importare prompt da un file

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Dashboard

Utilizza **Dashboard** per vedere quanto stai utilizzando l'app e quanto ti costa (per i modelli a pagamento).

![Riepilogo del dashboard](../images/screenshots/it/dashboard-summary.png)


<br/>

> ℹ️ **NOTA**<br/>
> Se utilizzi soltanto modelli gratuiti, i grafici relativi ai costi saranno vuoti.

<br/>

<a id="filter-the-data"></a>
### Filtrare i dati

Utilizza i pulsanti di filtro nella parte superiore per modificare l'intervallo temporale.

![Filtri del dashboard](../images/screenshots/it/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> Il filtro **Utente** è visibile solo agli amministratori nella versione web. Gli utenti standard non vedranno questo filtro, e non è disponibile nell'app desktop.

<br/>

<a id="dashboard-tabs"></a>
### Schede del dashboard

- **Riepilogo** fornisce una panoramica sull'utilizzo e sui costi.
- **Per utilizzo** suddivide l'attività per lingua di traduzione, modalità di riscrittura e prompt di trasformazione.
- **Per modello** mostra quali modelli hai utilizzato e quanto ti sono costati.
- **Per giorno** mostra i totali giornalieri.
- **Tutte le chiamate** mostra la cronologia completa delle chiamate e ti permette di esportarla.

<br/>

<a id="export-data"></a>
### Esportare i dati

Le tabelle del dashboard possono esportare i dati nei seguenti formati:

- **JSON**
- **CSV**
- **XLSX**

Questa funzione è utile se vuoi esaminare le attività al di fuori dell'app o condividere un rapporto.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Eliminare i record memorizzati per un modello

Nella sezione **Per modello** o **Tutte le chiamate**, puoi rimuovere i record memorizzati per un modello cliccando sull'icona del "cestino".

> ⚠️ **ATTENZIONE**<br/>
> L'eliminazione dei record memorizzati non può essere annullata. Utilizza questa funzione solo se sei sicuro di non aver più bisogno di quella cronologia.

Per eliminare tutti i dati o rimuovere i record in base alla loro data, vai a [**Impostazioni** > **Tracciamento costi**](#cost-tracking). Lì troverai le opzioni per eliminare tutti i dati memorizzati o soltanto quelli anteriori a una certa data.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Cronologia

Clicca su **Cronologia** per visualizzare la cronologia delle tue azioni all'interno di **Transrewrt**, inclusi input e output di ogni operazione.

![Pagina cronologia](../images/screenshots/it/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrare la cronologia

La **Cronologia** utilizza gli stessi filtri della pagina **Dashboard**. Usali per selezionare l'intervallo temporale.

![Filtri del dashboard](../images/screenshots/it/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> Il filtro **Utente** è visibile solo agli amministratori nella versione web. Gli utenti standard non vedranno questo filtro, e non è disponibile nell'app desktop.

<br/>

<a id="export-history-data"></a>
###  Esportare i dati della cronologia

La pagina della cronologia può esportare i dati filtrati nei seguenti formati:

- **JSON**
- **CSV**
- **XLSX**

Questa funzione è utile se vuoi esaminare le attività al di fuori dell'app o condividere un rapporto.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Impostazioni

Apri **Impostazioni** dalla barra laterale per personalizzare il comportamento dell'app.

Le schede disponibili dipendono dalla piattaforma e dal tuo ruolo:

  | Scheda                 | Desktop | Web (amministratore) | Web (utente standard) |
  |------------------------|:-------:|:---------------------:|:---------------------:|
  | Impostazioni generali  |   sì    |          sì           |           sì          |
  | Modelli                |   sì    |          sì           |           sì          |
  | Lingue                 |   sì    |          sì           |           sì          |
  | Tracciamento costi     |   sì    |          sì           |            —          |
  | Prompt di trasformazione | sì  |          sì           |           sì          |
  | Utenti                 |    —    |          sì           |            —          |
  | Configurazione API     |   sì    |          sì           |            —          |
  | Informazioni           |   sì    |          sì           |           sì          |

<br/>

> ℹ️ **NOTA**<br/>
> Nella versione web, ogni utente ha la propria configurazione. Impostazioni come modelli selezionati, lingue, opzioni generali e prompt di trasformazione sono memorizzate per utente. Le modifiche che apporti non influiscono sugli altri utenti.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Impostazioni generali

Utilizza **Impostazioni generali** per controllare il comportamento della digitazione, se i dettagli delle operazioni vengono salvati in **Cronologia**, e l'aspetto dell'app.

**Comportamento**

- **Comportamento del tasto INVIO** determina se `Invio` esegue l'operazione o va a capo.
- **Auto-traduzione al momento dell'incollamento** avvia la traduzione non appena incolli del testo.
- **Copia automaticamente il risultato negli appunti** copia automaticamente i risultati con successo.
- **Traduzione in tempo reale (durante la digitazione)** traduce mentre digiti.
- **Timeout (ms)** imposta il tempo di attesa per la traduzione in tempo reale.

**Cronologia**

- **Conserva la cronologia delle operazioni** determina se ogni traduzione, riscrittura e trasformazione salvino il **testo in input e output** per la vista laterale [**Cronologia**](#history). Disattivandolo verrà richiesta una conferma; in caso di conferma, il testo della cronologia verrà rimosso dal database.
- **Elimina dati cronologia** ti permette di rimuovere i testi salvati in base all'età (ad esempio, più vecchi di alcuni mesi, oppure **tutti i dati (azzera)**) usando **Elimina dati**. Questo influisce solo sul testo delle operazioni salvate nella vista **Cronologia**; **non** elimina i totali di costi o utilizzi. Per rimuovere o ridurre i dati relativi ai **costi**, utilizza [**Impostazioni** > **Monitoraggio costi**](#cost-tracking).

**Aspetto**

- **Decimali costi** modifica il numero di cifre decimali visualizzate per i costi.
- **Solo web:** **mostra un margine attorno all'app** aggiunge spazio extra intorno all'interfaccia.
- **Famiglia carattere** modifica il tipo di carattere nei riquadri di testo.
- **Dimensione** modifica la dimensione del carattere.


<br/>

<a id="models"></a>
### Modelli

Utilizza **Impostazioni** > **Modelli** per scegliere quali modelli appariranno nella barra degli strumenti.

![Scheda Modelli impostazioni](../images/screenshots/it/settings-models.png)

La pagina mostra due elenchi:

- **Modelli disponibili** a sinistra
- **Modelli selezionati** a destra

Tra i controlli utili ci sono:

- **Cerca modelli...** per trovare un modello per nome
- **Etichette fornitore** per filtrare l'elenco per singolo motore (OpenRouter, OpenAI, Ollama, …)
- **Solo gratuiti** per mostrare soltanto i modelli gratuiti
- **Aggiorna** per ricaricare l'elenco
- **Espandi tutto** e **Comprimi tutto** quando si ordina per fornitore

Gli ID dei modelli includono il prefisso del fornitore (ad esempio `openrouter/…` rispetto a `openai/…`). Badge come **OpenAI (OpenRouter)** rispetto a **OpenAI (diretto)** indicano come viene instradato il traffico.

Azioni:

 - Per aggiungere un modello, fai clic su **Aggiungi** o ovunque nella voce elenco.

 - Per rimuoverne uno, fai clic su **X** accanto al modello in **Modelli selezionati** o su **Selezionato** nella voce corrispondente in Modelli disponibili.

 - Per svuotare l'elenco, fai clic su **Deseleziona tutti**. Il modello gratuito obbligatorio rimarrà comunque nell'elenco.

<br/>

> ℹ️ **NOTA**<br/>
> Se non desideri aggiungere crediti a OpenRouter subito, inizia abilitando **Solo gratuiti** e scegliendo i modelli gratuiti (nessuna carta di credito richiesta). Puoi anche usare Ollama per eseguire modelli in locale senza alcuna chiave API.

<br/>

<a id="languages"></a>
### Lingue

Utilizza **Impostazioni** > **Lingue** per organizzare gli elenchi di lingue utilizzati nell'app.

- **Lingue principali** vengono fissate in alto negli elenchi delle lingue in **Traduci** e **Trasforma**.
- **Lingua personalizzata** ti permette di aggiungere una lingua non presente nell'elenco predefinito.

Se aggiungi una lingua personalizzata, apparirà nei menu a tendina delle lingue insieme alle opzioni predefinite.

<br/>

<a id="cost-tracking"></a>
### Monitoraggio costi

Utilizza **Impostazioni** > **Monitoraggio costi** per gestire le informazioni sui costi.

- **Costo totale** mostra il totale cumulativo.
- **Copia valore** copia il totale negli appunti.
- **Azzera costo** reimposta il totale registrato a zero.
- **Sincronizza con l'utilizzo della chiave API** imposta il totale in modo che corrisponda all'utilizzo riportato dal tuo account OpenRouter (solo OpenRouter).
- **Utilizzo chiave API** mostra i dettagli sull'utilizzo OpenRouter, se disponibili.
- **Elimina dati costi** rimuove tutti i dati, oppure solo quelli anteriori a una determinata data.

**Monitoraggio costi:** Quando utilizzi modelli OpenRouter, l'app mostra il tuo utilizzo e costo effettivi in base ai dati di OpenRouter. Per tutti gli altri provider, l'app calcola un costo stimato basandosi sui prezzi pubblicati da OpenRouter. Se un prezzo non è disponibile, la stima potrebbe essere zero.

<br/>

> ℹ️ **NOTA**<br/>
> Tutte le cifre relative ai costi sono stime fornite solo a scopo informativo, non costituiscono bollette ufficiali.


<br/>

> ⚠️ **ATTENZIONE**<br/>
> L'eliminazione dei dati è irreversibile. Prima di cancellare, assicurati di effettuare un backup dei tuoi dati o di esportarli tramite [**Cruscotto** > **Tutte le chiamate**](#dashboard-tabs), altrimenti saranno persi in modo definitivo. <br/> 
> Verrà eliminata anche tutta la cronologia associata a ogni voce di chiamata API.


<br/>

<a id="transform-prompts"></a>

### Trasforma prompt

Utilizza **Impostazioni** > **Trasforma prompt** per gestire i prompt in blocco.

Puoi:

- rivedere i prompt salvati
- eliminare prompt
- importare prompt da un file
- esportare prompt per il backup o la condivisione

<br/>

<a id="users"></a>
### Utenti

**Web: solo amministratore**

Utilizza **Utenti** per gestire gli account utente nella versione web. Puoi aggiungere utenti, aggiornarne i dettagli, reimpostare le password ed eliminare account.

<br/>

<a id="api-config"></a>
### Configurazione API

I provider supportati sono: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e **Ollama** (modelli locali tramite un URL di base). Devi configurare solo i provider che utilizzi.

**Applicazione web: solo amministratore**

Le chiavi API sono configurate tramite variabili d'ambiente di sistema o Docker — non vengono inserite nell'interfaccia web. Questa pagina mostra quali provider hanno una chiave configurata e ti permette di testarli cliccando sul pulsante **`Test`**.

<br/>

> ℹ️ **NOTA**<br/>
> Per modificare una chiave API, aggiorna la variabile d'ambiente nella configurazione del sistema o di Docker e riavvia il server o il contenitore.

<br/>

**Applicazione desktop**

Utilizza **Configurazione API** per memorizzare le chiavi API per ciascun provider utilizzato. Per Ollama, inserisci l'**URL di base** invece di una chiave API.


<br/>

> 💡 **Suggerimento** <br/>
> Se non desideri utilizzare una chiave API o pagare per l'uso, puoi [scaricare Ollama](https://ollama.com) ed eseguire modelli localmente sul tuo computer gratuitamente. In alternativa, puoi creare un account OpenRouter gratuito (senza carta di credito) per utilizzare i loro modelli gratuiti.

- Aggiungi solo i provider di cui hai bisogno. In **Impostazioni** > **Modelli**, ogni ID modello inizia con il provider (ad esempio `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Per aggiungere una chiave API, digita il valore nel campo di testo e clicca su **`Salva`**. Per sostituire una chiave esistente, clicca su **`Modifica`**. Per verificare che una chiave funzioni, clicca su **`Test`**.

<br/>

> ℹ️ **NOTA**<br/>
> Non puoi visualizzare il valore corrente di una chiave API. Puoi solo sostituirla utilizzando il pulsante **`Modifica`**.
> Le chiavi API sono memorizzate cifrate nel file di configurazione.

<br/>

Per istruzioni dettagliate su come ottenere una chiave OpenRouter, vedi [Come ottenere una chiave API](#how-to-get-an-api-key-desktop-app) sopra.



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

Se qualcosa non funziona come previsto, verifica innanzitutto i seguenti punti.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### L'app non traduce, riscrive o trasforma il testo

Verifica che:

- tu abbia selezionato un modello nella barra degli strumenti
- almeno un modello sia presente in [**Impostazioni** > **Modelli**](#models)
- la configurazione API funzioni

Se utilizzi l'app desktop:

1. Apri [**Impostazioni** > **Configurazione API**](#api-config).
2. Verifica che almeno una chiave API sia salvata.
3. Clicca su **Test** accanto al provider per confermare che la chiave funzioni.

<br/>

<a id="the-model-list-is-empty"></a>
### L'elenco dei modelli è vuoto

Apri [**Impostazioni** > **Modelli**](#models) e clicca su **Aggiorna**.

Se necessario:

- cerca un modello
- attiva **Solo gratuiti**
- aggiungi uno o più modelli a **Modelli selezionati**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Il risultato è troppo lento o costoso

Prova una o più di queste opzioni:

- scegli un modello diverso
- usa un input più breve
- disattiva **Traduzione in tempo reale (durante la digitazione)** in [**Impostazioni** > **Impostazioni generali**](#general-settings)
- usa modelli gratuiti per compiti semplici (vedi [Modelli](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### L'interfaccia è nella lingua sbagliata

Clicca sull'icona del globo nella [barra degli strumenti](#toolbar) e seleziona la **Lingua dell'interfaccia** desiderata.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Il testo è troppo piccolo o difficile da leggere

Apri [**Impostazioni** > **Impostazioni generali**](#general-settings) e modifica:

- **Famiglia caratteri**
- **Dimensione**

<br/>

<a id="dashboard-charts-are-empty"></a>
### I grafici del cruscotto sono vuoti

Questo è normale se:

- utilizzi solo **modelli gratuiti** (i grafici dei costi saranno vuoti)
- il **filtro temporale** selezionato non include il periodo in cui sono state effettuate le chiamate — prova **Tutto** per verificare

Se i grafici restano vuoti dopo aver selezionato **Tutto**, conferma che le chiamate compaiano nella sezione [**Storico**](#history) o nella scheda **Tutte le chiamate**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Il costo mostra "non disponibile" o sembra errato

Quando utilizzi modelli tramite **OpenRouter**, l'app mostra la spesa effettiva comunicata da OpenRouter.

Per **altri provider** (OpenAI diretto, Anthropic diretto, ecc.), il costo è stimato in base ai dati tariffari pubblicati da OpenRouter. Se non viene trovato un prezzo corrispondente per un modello, il costo verrà visualizzato come **non disponibile** e non sarà aggiunto al totale cumulativo.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Il costo totale non corrisponde al mio conto del fornitore

Tutte le cifre relative ai costi nell'app sono **stime solo indicative**, non rappresentano fatture ufficiali.

Per avvicinare il totale alla spesa effettiva su OpenRouter, apri [**Impostazioni** > **Tracciamento costi**](#cost-tracking) e clicca su **Sincronizza con l'utilizzo della chiave API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### La pagina Cronologia non appare nella barra laterale

L'opzione **Mantieni la cronologia delle esecuzioni** potrebbe essere disattivata. Apri [**Impostazioni** > **Impostazioni generali**](#general-settings) e attivala. Tieni presente che l'attivazione non recupera i dati della cronologia precedentemente eliminati.

<br/>

<a id="web-app-session-expired"></a>
### App web: reindirizzamento imprevisto alla pagina di accesso

La sessione potrebbe essere scaduta. Accedi nuovamente. Se il problema si ripete frequentemente, controlla la configurazione del server riguardo le impostazioni della durata della sessione.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### La bacheca non mostra dati di altri utenti (web)

Solo gli **amministratori** possono visualizzare i dati di tutti gli utenti tramite il filtro **Utente**. Gli utenti standard vedono solo la propria attività, come previsto dal design.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Ho modificato un prompt e ho perso le modifiche

Quando modifichi un prompt, fai sempre clic su **Salva** prima di cliccare su **Torna all'esecuzione**.

<br/><br/>

<a id="quick-tips"></a>
## Suggerimenti rapidi

- Inizia con [**Traduci**](#translate) per verificare che la configurazione funzioni prima di passare a [**Riscrivi**](#rewrite) o [**Trasforma**](#transform).
- Usa [**Riscrivi**](#rewrite) per miglioramenti quotidiani del testo.
- Usa [**Trasforma**](#transform) quando hai bisogno di un flusso di lavoro ripetibile per un compito specifico.
- Usa [**Bacheca**](#dashboard) se desideri monitorare utilizzo e costi.
- Usa [**Cronologia**](#history) per rivedere operazioni passate e i relativi testi completi di input/output.
- Esporta regolarmente i prompt se stai creando una libreria che vuoi conservare al sicuro (vedi [Transform Prompts](#transform-prompts)) o se desideri condividerla con altri.

<br/><br/>

<a id="disclaimer"></a>
## Avviso legale

I nomi dei prodotti e le icone appartengono ai rispettivi proprietari e sono utilizzati solo a scopo identificativo. Questo software non è affiliato né sponsorizzato da nessuno dei marchi menzionati.

<br/><br/>

<a id="license"></a>
## Licenza

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)