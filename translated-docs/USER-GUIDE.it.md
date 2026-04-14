---
translation_last_updated: '2026-03-31T22:57:30.575Z'
source_file_mtime: '2026-03-30T09:57:25.622Z'
source_file_hash: e1b91eca0124d467
translation_language: it
source_file_path: USER-GUIDE.md
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Guida Utente

<br/>

<a id="introduction"></a>
## Introduzione

Transrewrt ti aiuta a lavorare con il testo in tre modi principali:

- **Traduci** - convertire il testo da una lingua all'altra.
- **Riscrittura** - riformulare il testo in uno stile diverso, ad esempio più chiaro, più breve o più formale.
- **Trasformazione** - elaborare il testo utilizzando istruzioni personalizzate basate sull'intelligenza artificiale chiamate prompt.

<br/>

Questa guida spiega come utilizzare l'app una volta installata ed eseguita. Per i passaggi di installazione, consulta il file **[README](README.it.md)** principale.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt è disponibile come app desktop per Windows e Linux e come app web self-hosted. Questa guida si concentra sull'uso quotidiano dell'app. Quando qualcosa si applica solo a una versione, è chiaramente indicato.

<small>**Leggi in altre lingue:** </small>
<small id="lang-list">[English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Nota sulle traduzioni dell'interfaccia e della documentazione:** Tutte le lingue dell'interfaccia, eccetto l'originale Inglese (UK),
> sono state tradotte utilizzando modelli di IA; il testo potrebbe essere impreciso o contenere errori.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Indice**

- [Prima di iniziare](#before-you-start)
  - [Come ottenere una chiave API OpenRouter gratuita (app desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Per cominciare](#getting-started)
- [Parti principali della finestra](#main-parts-of-the-window)
  - [Barra laterale](#sidebar)
  - [Barra degli strumenti](#toolbar)
  - [Pannelli di input e output](#input-and-output-panels)
- [Traduzione](#translate)
  - [Tradurre il testo](#translate-text)
  - [Selezione della lingua](#language-selection)
  - [Impostazioni utili per la traduzione](#helpful-translation-settings)
- [Riscrittura](#rewrite)
- [Trasformazione](#transform)
  - [Eseguire un prompt esistente](#run-an-existing-prompt)
  - [Se non hai ancora prompt](#if-you-have-no-prompts-yet)
  - [Creare rapidamente un prompt](#create-a-prompt-quickly)
  - [Modificare un prompt](#edit-a-prompt)
  - [Testare un prompt prima di usarlo](#test-a-prompt-before-using-it)
- [Dashboard](#dashboard)
  - [Filtrare i dati](#filter-the-data)
  - [Schede della dashboard](#dashboard-tabs)
  - [Esportare i dati](#export-data)
  - [Eliminare i record memorizzati per un modello](#delete-stored-records-for-a-model)
- [Cronologia](#history)
  - [Filtrare i dati](#filter-the-data-1)
  - [Esportare i dati della cronologia](#export-history-data)
- [Impostazioni](#settings)
  - [Impostazioni generali](#general-settings)
  - [Modelli](#models)
  - [Lingue](#languages)
  - [Tracciamento Costi](#cost-tracking)
  - [Prompt di trasformazione](#transform-prompts)
  - [Utenti](#users)
  - [Configurazione API](#api-config)
  - [Informazioni](#about)
- [Problemi comuni](#common-issues)
  - [L'app non traduce, riscrive o trasforma il testo](#the-app-will-not-translate-rewrite-or-transform-text)
  - [La lista dei modelli è vuota](#the-model-list-is-empty)
  - [Il risultato è troppo lento o troppo costoso](#the-result-is-too-slow-or-too-expensive)
  - [L'interfaccia è nella lingua sbagliata](#the-interface-is-in-the-wrong-language)
  - [Il testo è troppo piccolo o difficile da leggere](#the-text-is-too-small-or-hard-to-read)
  - [I grafici della dashboard sono vuoti](#dashboard-charts-are-empty)
  - [Il costo mostra "non disponibile" o sembra errato](#cost-shows-not-available-or-seems-wrong)
  - [Il costo totale non corrisponde al mio conto del provider](#total-cost-does-not-match-my-provider-bill)
  - [La pagina Cronologia manca nella barra laterale](#the-history-page-is-missing-from-the-sidebar)
  - [App web: reindirizzamento imprevisto alla pagina di accesso](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Amministratore web: password dimenticata o persa](#web-admin-forgot-or-lost-a-password)
  - [La dashboard non mostra dati per altri utenti (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Ho modificato un prompt e ho perso le modifiche](#i-changed-a-prompt-and-lost-the-edits)
- [Suggerimenti rapidi](#quick-tips)
- [Avviso legale](#disclaimer)
- [Licenza](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Prima di iniziare

Per utilizzare Transrewrt, è necessario accedere ad almeno un provider di intelligenza artificiale. I provider supportati sono: [OpenRouter](https://openrouter.ai) (che aggrega molti modelli), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e [Ollama](https://ollama.com) per modelli locali.

Non è necessario selezionare un modello a pagamento per iniziare. Non appena aggiungi la tua chiave API di OpenRouter, l'app abilita automaticamente un'opzione **gratuita** integrata di OpenRouter. Ciò ti consente di iniziare immediatamente a tradurre, riscrivere e trasformare il testo. In alternativa, puoi ottenere gratuitamente una chiave API da Cerebras, Google, Groq o Mistral AI.

In termini semplici:

- Un **modello** è il motore di intelligenza artificiale che svolge il lavoro. I modelli sono elencati con un **prefisso del provider** (ad esempio `openrouter/…`, `openai/…`, `ollama/…`).
- Una **chiave API** (o, per Ollama, un **URL di base**) è il modo in cui l'app raggiunge quel provider.

Se stai utilizzando l'**app desktop**, aggiungi le chiavi in [**Impostazioni** > **Configurazione API**](#api-config) per ciascun provider che utilizzi. Per un utilizzo esclusivo di OpenRouter, consulta [Come ottenere una chiave API](#how-to-get-an-api-key-desktop-app) di seguito. Se non desideri utilizzare una chiave API, puoi installare Ollama (da [ollama.com](https://ollama.com)) e usare modelli locali al posto, come ad esempio `translategemma:4b`.

Se stai utilizzando la **versione web**, il proprietario del server configura i provider tramite variabili d'ambiente, quindi non puoi inserire direttamente le chiavi API nell'applicazione.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Come ottenere una chiave API gratuita di OpenRouter (app desktop)

Se stai utilizzando l'app desktop, segui questi passaggi:

1. Vai su [OpenRouter](https://openrouter.ai) con il tuo browser web.
2. Crea un account o effettua l'accesso.
3. Apri la pagina [Chiavi](https://openrouter.ai/keys).
4. Clicca sul pulsante per creare una nuova chiave API.
5. Assegna un nome alla chiave in modo da poterla riconoscere in seguito.
6. Copia la nuova chiave API.
7. Torna a Transrewrt e apri **Impostazioni** > **Configurazione API**.
8. Incolla la chiave nel campo **Chiave API OpenRouter** (sotto **Impostazioni** > **Configurazione API**).
9. Clicca su **Testa chiave OpenRouter** per assicurarti che funzioni.

<br/><br/>

<a id="getting-started"></a>
## Iniziare

Se è la prima volta che utilizzi Transrewrt, segui questo ordine:

1. Apri l'app.
2. Se necessario, scegli la tua **Lingua interfaccia** dall'icona del globo.
3. Se utilizzi l'**app desktop**, apri [**Impostazioni** > **Configurazione API**](#api-config), aggiungi una chiave API per almeno un provider (ad esempio OpenRouter) e clicca su **Test** per verificarne il funzionamento.
4. Apri [**Impostazioni** > **Modelli**](#models) e aggiungi uno o più modelli ai **Modelli selezionati**.
5. Apri [**Impostazioni** > **Lingue**](#languages) e scegli le tue **Lingue principali** se desideri che le lingue più utilizzate appaiano per prime.
6. Vai su **Traduci** ed esegui una semplice traduzione per confermare che tutto funzioni correttamente.
7. Una volta verificato, prova **Riscrittura** e poi **Trasformazione**.

Questo ordine è importante. Evita il problema più comune all'uso iniziale: tentare di eseguire un'attività prima che l'app abbia una connessione API funzionante o un modello selezionato.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Parti principali della finestra

L'app è suddivisa in tre aree principali:

- La **barra laterale** a sinistra.
- La **barra degli strumenti** in alto.
- L'**area di lavoro** al centro.

<br/>

<a id="sidebar"></a>
### Barra laterale

Utilizza la barra laterale per spostarti all'interno dell'app. Puoi ridurre la barra laterale per guadagnare spazio cliccando sull'icona accanto al logo dell'app.

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
        <li><strong>Riscrittura</strong> apre l'area di lavoro per la riscrittura.</li><br/>
        <li><strong>Trasformazione</strong> apre l'area di lavoro per prompt personalizzati.</li><br/>
        <li><strong>Dashboard</strong> mostra informazioni sull'utilizzo e sui costi.</li><br/>
        <li><strong>Impostazioni</strong> apre il pannello delle impostazioni.</li><br/>
        <li><strong>Cronologia</strong> mostra la cronologia di utilizzo con il testo in input e output</li><br/>
        <li><strong>Utente</strong> mostra il nome utente dell'utente connesso (solo web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Barra degli strumenti

La barra degli strumenti cambia leggermente a seconda della posizione all'interno dell'app.

- A sinistra, mostra il nome della pagina corrente.
- A destra, mostra il **selettore del modello** e il controllo della **Lingua interfaccia**.

Il **selettore del modello** ti permette di scegliere quale motore AI utilizzare per l'attività corrente.

![Model selector](../images/screenshots/it/model-selector.png)

Alcuni modelli gratuiti potrebbero non essere sempre disponibili: a volte sono offline o hanno un limite di utilizzo. In questo caso, l'app rimuoverà automaticamente quel modello dall'elenco disponibile. Per gestire i modelli visualizzati, vai a [**Impostazioni** > **Modelli**](#models) e modifica la tua lista di modelli.
Puoi anche aprire direttamente le impostazioni del modello cliccando sull'icona del provider a sinistra del nome del modello nella barra degli strumenti.

<br/>

L'**icona del globo + codice lingua** cambia la lingua dell'interfaccia dell'app, come menu e pulsanti. **Non** modifica invece le lingue di traduzione utilizzate in **Traduci**.

![Interface language selector](../images/screenshots/it/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Pannelli di Input e Output

La maggior parte degli ambienti di lavoro utilizza un pannello **Input** a sinistra e un pannello **Output** a destra.

Ogni pannello mostra inoltre:

| **Input**                                                          | **Output**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Conteggio caratteri <br/>- Conteggio parole <br/>- Conteggio paragrafi   <br/> | - Tempo impiegato per l'operazione<br/>- **TPS** (tokens al secondo)<br/>- Conteggi di caratteri, parole e paragrafi<br/>- Il modello utilizzato |

Se ti stai chiedendo il significato dei termini tecnici:

- **Token** indica un piccolo frammento di testo. Puoi pensarlo come una parte di parola o una parola breve.
- **TPS** indica quanti di questi frammenti di testo il modello ha elaborato ogni secondo.

<br/>

Puoi inoltre monitorare il costo di ogni operazione (se disponibile) e il costo totale, abilitando l'opzione `Mostra informazioni sui costi nelle azioni` in [**Impostazioni** > **Impostazioni generali**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Traduci

Usa **Traduci** quando desideri convertire un testo da una lingua all'altra.

![Translate workspace](../images/screenshots/it/translate.png)

<br/>

<a id="translate-text"></a>
### Tradurre il testo

1. Apri **Traduci**.
2. Scegli una lingua in **Da**.
3. Scegli una lingua in **A**.
4. Scegli un modello nella barra degli strumenti.
5. Digita o incolla il testo in **Input**.
6. Clicca su **Traduci**.
7. Leggi il risultato in **Output**.
8. Usa il pulsante di copia se desideri copiare il risultato.

<br/>

<a id="language-selection"></a>
### Selezione della lingua

- **Da** può essere una lingua specifica o **Rileva lingua**.
- **A** è la lingua in cui desideri ottenere il risultato.

Le tue **Lingue preferite** selezionate appaiono in alto nell'elenco. Puoi impostarle in [**Impostazioni** > **Lingue**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Impostazioni utili per la traduzione

In [**Impostazioni** > **Impostazioni generali**](#general-settings), puoi modificare il comportamento della traduzione:

- **Traduci automaticamente al incolla** esegue una traduzione non appena incolli del testo.
- **Copia automatica risultato negli appunti** copia automaticamente il risultato dopo un'esecuzione riuscita.
- **Traduzione in tempo reale (durante la digitazione)** esegue le traduzioni mentre digiti.
- **Timeout (ms)** regola il tempo di attesa dell'app prima di avviare una traduzione in tempo reale.
- **Enter** controlla cosa accade quando premi `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Riscrittura

Usa **Riscrittura** quando desideri migliorare la formulazione senza cambiarne il significato principale.

![Rewrite workspace](../images/screenshots/it/rewrite.png)

Questa funzione è utile per:

- correggere ortografia e grammatica (**Controllo ortografia e grammatica**)
- rendere il testo più chiaro (**Migliora chiarezza**)
- ottenere diverse riformulazioni in un'unica esecuzione (**Versioni alternative**)
- rendere il testo più formale o informale (**Formale** / **Informale**)
- accorciare o espandere il testo (**Accorcia** / **Espandi**)
- rendere il testo più tecnico (**Rendi tecnico**)

<br/>

> 💡 **CONSIGLIO**<br/>
> Quando utilizzi la modalità "**Controllo ortografia e grammatica**", nel pannello di output appare un interruttore **Mostra modifiche** (accanto a **Copia**).
> Attivalo o disattivalo per mostrare o nascondere le correzioni specifiche applicate al testo.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Trasformazione

Usa **Trasformazione** quando vuoi che l'IA segua un insieme personalizzato di istruzioni.

![Transform workspace](../images/screenshots/it/transform.png)

Questa è l'area più flessibile dell'app. Puoi utilizzarla per attività come:

- riassumere appunti
- trasformare un testo grezzo in un'email curata
- estrarre i punti chiave
- convertire il testo in un formato specifico
- qualsiasi altra attività personalizzata sul testo in ingresso

<br/>

<a id="run-an-existing-prompt"></a>
### Esegui un prompt esistente

1. Apri **Trasformazione**.
2. Scegli un prompt dall'elenco dei prompt.
3. Se appare un campo **Destinazione**, seleziona una lingua se desiderata.
4. Digita o incolla il testo in **Input**.
5. Clicca su **Trasforma**.
6. Leggi il risultato in **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Se non hai ancora prompt

Se l'elenco dei prompt è vuoto, clicca su **Carica prompt di esempio** nell'area di lavoro Trasformazione. Lo stesso pulsante è sempre disponibile in [**Impostazioni** > **Prompt di trasformazione**](#transform-prompts) sulla riga di esportazione/importazione. Entrambi aggiungono esempi predefiniti per iniziare rapidamente.

<br/>

> ℹ️ **NOTA**<br/>
> I prompt di esempio sono forniti in inglese. Dopo averli caricati, puoi modificarne uno e usare **Traduci prompt** per tradurlo nella tua lingua.

<br/>

<a id="create-a-prompt-quickly"></a>
### Crea rapidamente un prompt

Il modo più veloce per creare un prompt è:

1. Clicca su **Nuovo prompt**.
2. Clicca su **Genera prompt**.
3. Descrivi cosa deve fare il prompt.
4. Scegli un modello.
5. Lascia che l'app crei una bozza per te.
6. Rivedi la bozza e clicca su **Salva**.

![Generate prompt](../images/screenshots/it/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Modifica un prompt

Quando crei o modifichi un prompt, l'editor appare a sinistra e un'area di test appare a destra.

![Transform prompt editor](../images/screenshots/it/transform-prompt-edit.png)

I campi principali sono:

- **Nome prompt**: il nome visualizzato nell'elenco dei prompt.
- **Istruzioni del prompt (facoltativo)**: un breve suggerimento mostrato all'utente durante l'esecuzione del prompt.
- **Ruolo del modello**: il ruolo generale assegnato all'IA, ad esempio 'Sei un assistente utile.'
- **Istruzioni del modello (una per riga)**: le regole specifiche che desideri che l'IA segua.
- **Descrizione output**: una breve parola che descrive il risultato, ad esempio 'riepilogo' o 'riscrittura'.
- **Temperatura (0,0 → 1,0)**: il comportamento del modello; vedi sotto.
- **Chiedi la lingua di destinazione**: aggiunge un selettore della lingua di destinazione quando il prompt viene eseguito.

Se il termine tecnico **Temperatura** è nuovo per te, pensalo in questo modo:

- Una **temperatura più bassa** produce risultati più stabili e prevedibili.
- Una **temperatura più alta** produce maggiore varietà e creatività.

Puoi anche utilizzare:

- **`Genera prompt`** per creare una nuova bozza a partire da una semplice descrizione
- **`Migliora prompt`** per perfezionare un prompt esistente
- **`Traduci prompt`** per tradurre i campi del prompt

<br/>

> ⚠️ **AVVISO**<br/>
> Fai clic su **`Salva`** prima di fare clic su **`Torna all'esecuzione`**. Se torni indietro senza salvare, le modifiche andranno perse.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Prova un prompt prima di utilizzarlo

Il pannello di test a destra ti consente di provare il tuo prompt con un testo di esempio prima di utilizzarlo nel lavoro quotidiano.

Questo è utile quando:

- stai creando un nuovo prompt
- stai confrontando due versioni di un prompt
- desideri verificare tono, lunghezza o formato dell'output

<br/>

> ℹ️ **NOTA**<br/>
> Puoi esportare e importare i prompt salvati in [**Impostazioni** > **Prompt di trasformazione**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Dashboard

Utilizza **Dashboard** per vedere quanto stai utilizzando l'app e quanto ti costa (per i modelli a pagamento).

![Dashboard summary](../images/screenshots/it/dashboard-summary.png)

<br/>

> ℹ️ **NOTA**<br/>
> Se utilizzi solo modelli **gratuiti**, gli importi del **costo** potrebbero essere zero e i riepiloghi incentrati sul costo potrebbero apparire vuoti. In **Riepilogo**, **Uso nel tempo** e **Uso per modello** vengono comunque mostrati i **numeri di chiamate** (traduci, riscrivi e trasforma) quando hai attività nel periodo selezionato.

<br/>

<a id="filter-the-data"></a>
### Filtra i dati

Utilizza i pulsanti di filtro nella parte superiore per modificare l'intervallo temporale.

![Dashboard filters](../images/screenshots/it/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> Il filtro **Utente** è visibile solo agli amministratori nella versione web. Gli utenti normali non vedranno questo filtro, che non è disponibile nell'app desktop.

<br/>

<a id="dashboard-tabs"></a>
### Schede del Dashboard

- **Riepilogo** fornisce una panoramica sull'utilizzo e sui costi. Include **Uso nel tempo** (chiamate cumulative suddivise per giorno per traduzione, riscrittura e trasformazione) e **Uso per modello** (chiamate totali per modello, inclusa la trasformazione).
- **Per utilizzo** suddivide l'attività per lingua di traduzione, modalità di riscrittura e prompt di trasformazione.
- **Per modello** mostra quali modelli sono stati utilizzati e i relativi costi.
- **Per giorno** mostra i totali giornalieri.
- **Tutte le chiamate** mostra la cronologia completa delle chiamate e consente di esportarla.

<br/>

<a id="export-data"></a>
### Esporta dati

Le tabelle del dashboard possono esportare i dati in:

- **JSON**
- **CSV**
- **XLSX**

Questa funzione è utile se si desidera esaminare l'attività al di fuori dell'app o condividere un report.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Elimina i record memorizzati per un modello

In **Per modello** o **Tutte le chiamate**, è possibile rimuovere i record memorizzati per un modello facendo clic sull'icona del "cestino".

> ⚠️ **AVVISO**<br/>
> L'eliminazione dei record memorizzati non può essere annullata. Utilizzare questa funzione solo se si è certi di non aver più bisogno di quella cronologia.

Per eliminare tutti i dati o rimuovere i record in base alla loro data, vai a [**Impostazioni** > **Tracciamento Costi**](#cost-tracking). Lì troverai le opzioni per eliminare tutti i dati memorizzati o solo quelli anteriori a una certa data.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Cronologia

Fai clic su **Cronologia** per visualizzare la cronologia delle tue azioni all'interno di **Transrewrt**, inclusi input e output di ogni operazione.

![History page](../images/screenshots/it/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtra i dati

**Cronologia** utilizza gli stessi filtri della pagina **Dashboard**. Usali per selezionare l'intervallo di tempo.

![Dashboard filters](../images/screenshots/it/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> Il filtro **Utente** è visibile solo agli amministratori nella versione web. Gli utenti normali non vedranno questo filtro, che non è disponibile nell'app desktop.

<br/>

<a id="export-history-data"></a>
### Esporta i dati della cronologia

La pagina della cronologia può esportare i dati filtrati in:

- **JSON**
- **CSV**
- **XLSX**

Questa funzione è utile se si desidera esaminare l'attività al di fuori dell'app o condividere un report.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Impostazioni

Apri **Impostazioni** dalla barra laterale per personalizzare il comportamento dell'app.

Le schede disponibili dipendono dalla piattaforma e dal tuo ruolo:

| Scheda               | Desktop | Web (amministratore) | Web (utente normale) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Impostazioni generali  |   sì   |     sì     |        sì         |
  | Modelli            |   sì   |     sì     |        sì         |
  | Lingue         |   sì   |     sì     |        sì         |
  | Tracciamento Costi     |   sì   |     sì     |         -          |
  | Prompt di trasformazione |   sì   |     sì     |        sì         |
  | Utenti             |    -    |     sì     |         -          |
  | Configurazione API        |   sì   |     sì     |         -          |
  | Informazioni             |   sì   |     sì     |        sì         |

<br/>

> ℹ️ **NOTA**<br/>
> Nella versione web, ogni utente ha la propria configurazione. Impostazioni come modelli selezionati, lingue, opzioni generali e prompt di trasformazione sono memorizzate per ogni utente. Le modifiche che apporti non influiscono sugli altri utenti.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Impostazioni generali

Utilizza **Impostazioni generali** per controllare il comportamento durante la digitazione, se i dettagli di esecuzione vengono memorizzati nella **Cronologia** e l'aspetto.

**Comportamento**

- **Comportamento per INVIO** sceglie se `Invio` esegue l'operazione o inserisce una nuova riga.
- **Traduci automaticamente al incolla** avvia la traduzione non appena incolli del testo.
- **Copia automatica risultato negli appunti** copia automaticamente i risultati con successo.
- **Traduzione in tempo reale (durante la digitazione)** traduce mentre digiti.
- **Timeout (ms)** imposta il tempo di attesa per la traduzione in tempo reale.

**Cronologia**

- **Mantieni cronologia di esecuzione** controlla se ogni operazione di traduzione, riscrittura e trasformazione memorizza **testo in input e output** per la vista [**Cronologia**](#history) nella barra laterale. Disattivandola verrà richiesta una conferma; se confermi, il testo della cronologia memorizzato verrà rimosso dal database.
- **Elimina dati della cronologia** ti permette di rimuovere il testo memorizzato in base all'età (ad esempio, più vecchio di alcuni mesi, o **tutti i dati (cancella)**) utilizzando **Elimina dati**. Questo influisce solo sul testo delle esecuzioni salvato per la vista **Cronologia**; **non** elimina i totali di costo o utilizzo. Per rimuovere o ridurre i dati dei **costi**, utilizza [**Impostazioni** > **Tracciamento Costi**](#cost-tracking).

**Aspetto**

- **Mostra informazioni sui costi nelle azioni** controlla la visualizzazione del costo per operazione (se disponibile) e del costo totale nei pannelli di output di Traduci, Riscrivi e Trasforma.
- **Cifre decimali costo** modifica la visualizzazione delle cifre decimali del costo.
- **Solo web:** **mostra un margine attorno all'app** aggiunge spazio extra attorno all'interfaccia.
- **Famiglia caratteri** modifica il carattere di scrittura nei pannelli di testo.
- **Dimensione** modifica la dimensione del carattere.

**Backup della configurazione**

- **Includi i dati di utilizzo nel backup** - se abilitato, il file ZIP contiene anche cronologia delle esecuzioni e dati sulle chiamate API.
- **Esegui backup della configurazione** - crea un singolo file ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` in UTC per impostazione predefinita) contenente `config.json`, `state.json`, chiave di crittografia opzionale, utenti, preferenze, prompt personalizzati e dati di utilizzo se hai scelto di includerli. Al termine del backup, la conferma mostra il nome del file salvato.
- **Ripristina dal backup** - apre prima una **finestra di conferma**. Scegli il file ZIP del backup all'interno della finestra (**Sfoglia** / selettore file o trascina e rilascia, se supportato), quindi verifica le opzioni:
  - **Ripristina i dati di utilizzo** - importa utilizzo/cronologia dal file ZIP se era stato eseguito il backup con i dati di utilizzo inclusi; lascia disattivato se desideri solo impostazioni e prompt.
  - **Elimina i vecchi dati di utilizzo prima del ripristino** - rimuove i dati di utilizzo/cronologia esistenti su questa installazione prima di applicare il backup (opzionale; utilizzalo quando desideri un rimpiazzo pulito).

I backup creati nella versione web o desktop possono essere ripristinati nell'altra. Quando si ripristina un backup desktop nella versione web, i dati verranno ripristinati per l'utente amministratore.

<br/>

<a id="models"></a>
### Modelli

Utilizza **Impostazioni** > **Modelli** per scegliere quali modelli vengono visualizzati nella barra degli strumenti.

![Settings Models tab](../images/screenshots/it/settings-models.png)

La pagina contiene due elenchi:

- **Modelli Disponibili** a sinistra
- **Modelli selezionati** a destra

I controlli utili includono:

- **Cerca modelli...** per trovare un modello per nome
- Schede **Provider** per restringere l'elenco a un motore specifico (OpenRouter, OpenAI, Ollama, …)
- **Solo Gratuiti** per mostrare solo i modelli gratuiti
- **Aggiorna** per ricaricare l'elenco
- **Espandi Tutto** e **Comprimi tutto** quando si ordina per provider

Gli ID del modello includono il prefisso del provider (ad esempio `openrouter/…` vs `openai/…`). Badge come **OpenAI (OpenRouter)** vs **OpenAI (diretto)** mostrano come viene instradato il traffico.

> ℹ️ **NOTA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) è un modello router, non un modello di chat generale: la sua risposta è JSON che descrive i corpi delle richieste all'API OpenRouter (ad esempio un array `requests` con `model` e `messages`). Se lo utilizzi per **Traduci**, **Riscrittura** o **Trasformazione**, il pannello di output mostrerà quel JSON invece del testo finito. Scegli un modello di testo normale per queste attività. Consulta la [pagina del modello Body Builder](https://openrouter.ai/openrouter/bodybuilder) su OpenRouter.

Azioni:

- Per aggiungere un modello, fai clic su **Aggiungi** o ovunque nella voce.

- Per rimuovere un modello, fai clic su **X** accanto ad esso in **Modelli selezionati** o su **Selezionato** nella voce dei Modelli disponibili.

- Per cancellare l'elenco, fai clic su **Deseleziona tutto**. Il modello gratuito obbligatorio rimarrà nell'elenco.

<br/>

> ℹ️ **NOTA**<br/>
> Se non desideri aggiungere crediti a OpenRouter immediatamente, inizia abilitando **Solo Gratuiti** e scegliendo i modelli gratuiti (nessuna carta di credito richiesta). Puoi anche usare Ollama per eseguire modelli localmente senza alcuna chiave API.

<br/>

<a id="languages"></a>
### Lingue

Usa **Impostazioni** > **Lingue** per organizzare gli elenchi di lingue utilizzati nell'app.

- Le **lingue principali** sono fissate in alto negli elenchi di lingua in **Traduci** e **Trasformazione**.
- La **lingua personalizzata** ti permette di aggiungere una lingua non presente nell'elenco integrato.

Se aggiungi una lingua personalizzata, essa apparirà nei selettori di lingua insieme alle opzioni predefinite.

<br/>

<a id="cost-tracking"></a>
### Tracciamento Costi

Usa **Impostazioni** > **Tracciamento Costi** per gestire le informazioni sui costi.

- **Costo totale** mostra il totale cumulativo.
- **Copia Valore** copia il totale negli appunti.
- **Reimposta costo** reimposta il totale memorizzato a zero.
- **Sincronizza con utilizzo chiave API** imposta il totale in base all'utilizzo riportato dal tuo account OpenRouter (solo OpenRouter).
- **Utilizzo chiave API** mostra i dettagli di utilizzo di OpenRouter, se disponibili.
- **Elimina dati di costo** rimuove tutti i dati, oppure solo le voci più vecchie di una data selezionata.

**Tracciamento costi:** Quando utilizzi modelli OpenRouter, l'app mostra il tuo utilizzo effettivo e la spesa basandosi sulle informazioni di costo di OpenRouter. Per tutti gli altri provider, l'app stima i costi utilizzando i prezzi pubblicati da OpenRouter; se un prezzo non è disponibile, la stima potrebbe essere zero.

<br/>

> ℹ️ **NOTA**<br/>
> Tutte le cifre relative ai costi sono stime solo a scopo informativo, non costituiscono fatturazione ufficiale.

<br/>

> ⚠️ **ATTENZIONE**<br/>
> L'eliminazione dei dati non può essere annullata. Prima di eliminare, assicurati di fare un backup dei tuoi dati o di esportarli tramite [**Cronologia**](#history)
> o [**Dashboard** > **Tutte le chiamate**](#dashboard-tabs), altrimenti andranno persi definitivamente.
> Tutta la cronologia di input/output relativa a ogni voce della chiamata API verrà eliminata.

<br/>

<a id="transform-prompts"></a>
### Prompt di trasformazione

Usa **Impostazioni** > **Prompt di trasformazione** per gestire i prompt in blocco.

Puoi:

- rivedi i prompt salvati
- elimina prompt
- importa prompt da un file
- esporta prompt per il backup o la condivisione
- carica prompt di esempio nell'elenco dei prompt

<br/>

<a id="users"></a>
### Utenti

Usa **Utenti** per gestire gli account utente nella versione web. Puoi aggiungere utenti, aggiornare i loro dati, reimpostare le password ed eliminare account.

<br/>

<a id="api-config"></a>
### Configurazione API

I provider supportati sono: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e **Ollama** (modelli locali tramite un URL base). Devi configurare solo i provider che utilizzi.

**Applicazione web: solo amministratore**

Le chiavi API vengono configurate tramite variabili d'ambiente di sistema o Docker - non vengono inserite nell'interfaccia web. Questa pagina mostra per quali provider è stata configurata una chiave e ti permette di testarli cliccando sul pulsante **`Test`**.

<br/>

> ℹ️ **NOTA**<br/>
> Per modificare una chiave API, aggiorna la variabile d'ambiente nella configurazione del sistema o di Docker e riavvia il server o il contenitore.

> ℹ️ **NOTA**<br/>
> I **backup della configurazione** (vedi [**Impostazioni generali** → Backup della configurazione](#general-settings)) possono incorporare chiavi provider **risolte** all'interno del file `config.json` contenuto nel file ZIP. Il ripristino di tale file ZIP **non** copia nuovamente tali chiavi nel file di configurazione persistente del server - le chiavi attive provengono comunque dall'ambiente e dallo stato del file esistente come descritto lì.

<br/>

**Applicazione desktop**

Usa **Configurazione API** per memorizzare le chiavi API per ciascun provider utilizzato. Per Ollama, inserisci l'**URL base** invece di una chiave API.

<br/>

> 💡 **Suggerimento** <br/>
> Se non desideri utilizzare una chiave API o pagare per l'utilizzo, puoi [scaricare Ollama](https://ollama.com) ed eseguire modelli (come `translategemma:4b`) gratuitamente in locale sul tuo computer. In alternativa, puoi creare un account OpenRouter gratuito (senza carta di credito) per utilizzare i loro modelli gratuiti, oppure ottenere una chiave API gratuita da Cerebras, Google, Groq o Mistral AI.

<br/>

- Aggiungi solo i provider necessari. In **Impostazioni** > **Modelli**, ogni ID modello inizia con il provider (ad esempio `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Per aggiungere una chiave API, inserisci il valore nel campo di testo e clicca su **`Salva`**. Per sostituire una chiave esistente, clicca su **`Modifica`**. Per verificare che una chiave funzioni, clicca su **`Test`**. Per l'URL base di Ollama, clicca sempre su **`Test`** per verificare la connessione.

<br/>

> ℹ️ **NOTA**<br/>
> Non puoi visualizzare il valore attuale di una chiave API. Puoi solo sostituirla utilizzando il pulsante **`Modifica`**.
> Le chiavi API sono memorizzate in forma crittografata nella configurazione.

<br/>

<a id="about"></a>
### Informazioni

La scheda **Informazioni** mostra:

- il nome dell'app
- il numero di versione
- la data di build
- un link al repository del progetto

<br/><br/>

<a id="common-issues"></a>
## Problemi comuni

Se qualcosa non funziona come previsto, controlla innanzitutto i seguenti punti.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### L'app non tradurrà, riscriverà o trasformerà il testo

Verifica che:

- tu abbia selezionato un modello nella barra degli strumenti
- almeno un modello sia elencato in [**Impostazioni** > **Modelli**](#models)
- la configurazione API sia funzionante

Se stai utilizzando l'app desktop:

1. Apri [**Impostazioni** > **Configurazione API**](#api-config).
2. Verifica che almeno una chiave API sia salvata.
3. Fai clic su **Test** accanto al provider per confermare che la chiave funzioni.

<br/>

<a id="the-model-list-is-empty"></a>
### L'elenco dei modelli è vuoto

Apri [**Impostazioni** > **Modelli**](#models) e fai clic su **Aggiorna**.

Se necessario:

- cerca un modello
- attiva **Solo Gratuiti**
- aggiungi uno o più modelli a **Modelli selezionati**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Il risultato è troppo lento o troppo costoso

Prova una o più delle seguenti opzioni:

- scegli un modello diverso
- utilizza un input più breve
- disattiva **Traduzione in tempo reale (durante la digitazione)** in [**Impostazioni** > **Impostazioni generali**](#general-settings)
- utilizza modelli gratuiti per compiti semplici (vedi [Modelli](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### L'interfaccia è in una lingua errata

Fai clic sull'icona del globo nella [barra degli strumenti](#toolbar) e scegli la tua **Lingua interfaccia** preferita.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Il testo è troppo piccolo o difficile da leggere

Apri [**Impostazioni** > **Impostazioni generali**](#general-settings) e modifica:

- **Famiglia carattere**
- **Dimensione**

<br/>

<a id="dashboard-charts-are-empty"></a>
### I grafici della Dashboard sono vuoti

Questo è normale se:

- utilizzi solo **modelli gratuiti** e stai visualizzando le cifre relative al **costo** (potrebbero essere zero); i grafici del numero di chiamate in **Riepilogo** necessitano comunque di dati relativi al periodo selezionato
- il **filtro temporale** selezionato non include il periodo in cui sono state effettuate le chiamate - prova con **Tutto** per verificare

Se i grafici sono ancora vuoti dopo aver selezionato **Tutto**, verifica che le chiamate appaiano in [**Cronologia**](#history) o nella scheda **Tutte le chiamate**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Il costo mostra "non disponibile" o sembra errato

Quando utilizzi modelli tramite **OpenRouter**, l'app mostra la spesa effettiva riportata da OpenRouter.

Per **altri provider** (OpenAI diretto, Anthropic diretto, ecc.), il costo è stimato in base ai dati di prezzo pubblicati da OpenRouter. Se non viene trovato un prezzo corrispondente per un modello, il costo verrà visualizzato come **non disponibile** e non verrà aggiunto al totale cumulativo.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Il costo totale non corrisponde alla fattura del provider

Tutte le cifre relative ai costi nell'app sono **stime a solo scopo informativo**, non rappresentano fatture ufficiali.

Per avvicinare il totale alla spesa effettiva su OpenRouter, apri [**Impostazioni** > **Tracciamento Costi**](#cost-tracking) e fai clic su **Sincronizza con utilizzo chiave API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### La pagina Cronologia manca nella barra laterale

L'opzione **Mantieni cronologia di esecuzione** potrebbe essere disattivata. Apri [**Impostazioni** > **Impostazioni generali**](#general-settings) e attivala. Nota che l'attivazione non ripristina i dati della cronologia precedentemente eliminati.

<br/>

<a id="web-app-session-expired"></a>
### App web: reindirizzato alla pagina di accesso inaspettatamente

La sessione potrebbe essere scaduta. Accedi nuovamente. Se accade frequentemente, verifica la configurazione del server per le impostazioni della durata della sessione.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Amministratore web: dimenticata o persa la password

Questo si applica all'**app web self-hosted** (Docker), non all'app desktop (Electron).

- Se un altro amministratore può ancora accedere, può aprire [**Impostazioni** > **Utenti**](#users), selezionare l'account e impostare una **nuova password** lì.
- Se sei **bloccato fuori** ma hai **accesso shell** alla macchina o al contenitore, reimposta la password con l'helper fornito nell'immagine (sostituisci `transrewrt` se hai modificato il nome predefinito, e racchiudi tra virgolette la password se contiene spazi o caratteri speciali):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Il nome utente predefinito per l'amministratore è `admin` se non hai mai creato altri account. Quando passi un solo argomento, questo viene trattato come la nuova password per `admin`.

Se esegui da un **checkout sorgente** invece che da Docker, usa:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Lo script aggiorna il record utente nel database SQLite (e può creare l'utente `admin` se mancante). Dopo il reset, accedi con la nuova password.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### La Dashboard non mostra dati per altri utenti (web)

Solo gli **amministratori** possono visualizzare i dati di tutti gli utenti tramite il filtro **Utente**. Gli utenti normali vedono solo la propria attività per design.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Ho modificato un prompt e ho perso le modifiche

Quando modifichi un prompt, fai sempre clic su **Salva** prima di fare clic su **Torna a Esecuzione**.

<br/><br/>

<a id="quick-tips"></a>
## Suggerimenti rapidi

- Inizia con [**Traduci**](#translate) per assicurarti che la tua configurazione funzioni prima di passare a [**Riscrittura**](#rewrite) o [**Trasformazione**](#transform).
- Usa [**Riscrittura**](#rewrite) per migliorare quotidianamente il testo.
- Usa [**Trasformazione**](#transform) quando hai bisogno di un flusso di lavoro ripetibile per un compito specifico.
- Usa [**Dashboard**](#dashboard) se desideri monitorare l'utilizzo e il costo.
- Usa [**Cronologia**](#history) per rivedere le operazioni passate e il relativo testo completo di input/output.
- Esporta regolarmente i prompt se stai creando una libreria di prompt che desideri mantenere al sicuro (vedi [Prompt di trasformazione](#transform-prompts)) o se desideri condividerla con altri.

<br/><br/>

<a id="disclaimer"></a>
## Dichiarazione di non responsabilità

I nomi dei prodotti e le icone appartengono ai rispettivi proprietari e sono utilizzati solo a scopo identificativo. Questo software non è affiliato né approvato da nessuno dei marchi menzionati.

<br/><br/>

<a id="license"></a>
## Licenza

Diritti d'autore © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
