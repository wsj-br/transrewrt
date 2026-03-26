---
translated_at: "2026-03-26T00:48:39.675Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Guida Utente

<br/>

<a id="introduction"></a>
## Introduzione

Transrewrt aiuta a lavorare con il testo in tre modi principali:

- **Tradurre** - convertire il testo da una lingua all'altra.
- **Riscrivere** - riformulare il testo in uno stile diverso, ad esempio più chiaro, più breve o più formale.
- **Trasformare** - elaborare il testo usando istruzioni personalizzate basate sull'intelligenza artificiale, chiamate prompt.

<br/>

Questa guida spiega come utilizzare l'app dopo averla installata ed avviata. Per le istruzioni di installazione, consultare il file principale **[README](README.it.md)**.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt è disponibile come app desktop per Windows e Linux, e come app web autogestita. Questa guida si concentra sull'uso quotidiano dell'app. Quando un'informazione si applica solo a una versione, viene chiaramente indicata.

<small><strong>Lingue disponibili:</strong></small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Nota sulle traduzioni dell'interfaccia e della documentazione:** Tutte le lingue dell'interfaccia, ad eccezione dell'inglese (UK) originale, sono state tradotte usando modelli di intelligenza artificiale; il testo potrebbe risultare impreciso o contenere errori.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Indice**

- [Prima di iniziare](#before-you-start)
  - [Come ottenere una chiave API gratuita di OpenRouter (app desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Per cominciare](#getting-started)
- [Parti principali della finestra](#main-parts-of-the-window)
  - [Barra laterale](#sidebar)
  - [Barra degli strumenti](#toolbar)
  - [Pannelli di input e output](#input-and-output-panels)
- [Tradurre](#translate)
  - [Tradurre testo](#translate-text)
  - [Selezione della lingua](#language-selection)
  - [Impostazioni utili per la traduzione](#helpful-translation-settings)
- [Riscrivere](#rewrite)
- [Trasformare](#transform)
  - [Eseguire un prompt esistente](#run-an-existing-prompt)
  - [Se non hai ancora prompt](#if-you-have-no-prompts-yet)
  - [Creare rapidamente un prompt](#create-a-prompt-quickly)
  - [Modificare un prompt](#edit-a-prompt)
  - [Testare un prompt prima di utilizzarlo](#test-a-prompt-before-using-it)
- [Cruscotto](#dashboard)
  - [Filtra i dati](#filter-the-data)
  - [Schede del cruscotto](#dashboard-tabs)
  - [Esportare i dati](#export-data)
  - [Eliminare i record memorizzati per un modello](#delete-stored-records-for-a-model)
- [Cronologia](#history)
  - [Filtra i dati](#filter-the-data-1)
  - [Esporta dati cronologia](#export-history-data)
- [Impostazioni](#settings)
  - [Impostazioni generali](#general-settings)
  - [Modelli](#models)
  - [Lingue](#languages)
  - [Monitoraggio costi](#cost-tracking)
  - [Prompt di trasformazione](#transform-prompts)
  - [Utenti](#users)
  - [Configurazione API](#api-config)
  - [Informazioni](#about)
- [Problemi comuni](#common-issues)
  - [L'app non traduce, riscrive o trasforma il testo](#the-app-will-not-translate-rewrite-or-transform-text)
  - [L'elenco dei modelli è vuoto](#the-model-list-is-empty)
  - [Il risultato è troppo lento o costoso](#the-result-is-too-slow-or-too-expensive)
  - [L'interfaccia è in una lingua errata](#the-interface-is-in-the-wrong-language)
  - [Il testo è troppo piccolo o difficile da leggere](#the-text-is-too-small-or-hard-to-read)
  - [I grafici del cruscotto sono vuoti](#dashboard-charts-are-empty)
  - [Il costo mostra "non disponibile" o sembra errato](#cost-shows-not-available-or-seems-wrong)
  - [Il costo totale non corrisponde al conto del fornitore](#total-cost-does-not-match-my-provider-bill)
  - [La pagina Cronologia manca nella barra laterale](#the-history-page-is-missing-from-the-sidebar)
  - [App web: reindirizzamento inatteso alla pagina di accesso](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Il cruscotto non mostra dati di altri utenti (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Ho modificato un prompt e perso le modifiche](#i-changed-a-prompt-and-lost-the-edits)
- [Suggerimenti veloci](#quick-tips)
- [Dichiarazione di non responsabilità](#disclaimer)
- [Licenza](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Prima di iniziare

Per utilizzare Transrewrt, è necessario avere accesso ad almeno un fornitore di intelligenza artificiale. I fornitori supportati sono: [OpenRouter](https://openrouter.ai) (che aggrega molti modelli), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e [Ollama](https://ollama.com) per modelli locali.

Non è necessario selezionare un modello a pagamento per iniziare. Non appena aggiungerai la tua chiave API di OpenRouter, l'app abiliterà automaticamente un'opzione **gratuita** integrata di OpenRouter. Questo ti permette di iniziare subito a tradurre, riscrivere e trasformare testi. In alternativa, puoi ottenere gratuitamente una chiave API da Cerebras, Google, Groq o Mistral AI.

In parole semplici:

- Un **modello** è il motore di intelligenza artificiale che esegue il lavoro. I modelli sono elencati con un **prefisso del fornitore** (ad esempio `openrouter/…`, `openai/…`, `ollama/…`).
- Una **chiave API** (o, per Ollama, un **URL di base**) è il modo in cui l'app contatta quel fornitore.

Se stai utilizzando l'**app desktop**, aggiungi le chiavi in [**Impostazioni** > **Configurazione API**](#api-config) per ciascun fornitore che utilizzi. Per un uso esclusivo di OpenRouter, consulta qui sotto [Come ottenere una chiave API](#how-to-get-an-api-key-desktop-app). Se invece non vuoi utilizzare una chiave API, puoi installare Ollama (da [ollama.com](https://ollama.com)) e utilizzare modelli locali, come ad esempio `translategemma:4b`.

Se stai utilizzando la **versione web**, il proprietario del server configura i fornitori tramite variabili d'ambiente, quindi non potrai inserire chiavi API direttamente nell'applicazione.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Come ottenere una chiave API gratuita di OpenRouter (app desktop)

Se stai usando l'app desktop, segui questi passaggi:

1. Vai su [OpenRouter](https://openrouter.ai) con il tuo browser web.
2. Crea un account o accedi.
3. Apri la pagina [Chiavi](https://openrouter.ai/keys).
4. Clicca sul pulsante per creare una nuova chiave API.
5. Assegna un nome alla chiave in modo da riconoscerla successivamente.
6. Copia la nuova chiave API.
7. Torna su Transrewrt e apri **Impostazioni** > **Configurazione API**.
8. Incolla la chiave nel campo **Chiave API OpenRouter** (sotto **Impostazioni** > **Configurazione API**).
9. Clicca su **Prova chiave OpenRouter** per verificarne il funzionamento.

<br/><br/>

<a id="getting-started"></a>
## Per cominciare

Se è la prima volta che usi Transrewrt, segui questo ordine:

1. Apri l'app.
2. Se necessario, seleziona la tua **lingua dell'interfaccia** dall'icona del globo.
3. Se stai usando l'**app desktop**, apri [**Impostazioni** > **Configurazione API**](#api-config), aggiungi una chiave API per almeno un fornitore (ad esempio OpenRouter) e clicca su **Prova** per verificarne il funzionamento.
4. Apri [**Impostazioni** > **Modelli**](#models) e aggiungi uno o più modelli alla sezione **Modelli selezionati**.
5. Apri [**Impostazioni** > **Lingue**](#languages) e seleziona le tue **Lingue principali**, se desideri che quelle più usate appaiano per prime.
6. Vai su **Traduci** ed esegui una semplice traduzione per verificare che tutto funzioni correttamente.
7. Una volta verificato, prova **Riscrivi** e poi **Trasforma**.

L'ordine è importante. Aiuta ad evitare il problema più comune per i nuovi utenti: tentare di eseguire un'attività prima che l'app abbia una connessione API funzionante o un modello selezionato.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Parti principali della finestra

L'app è divisa in tre aree principali:

- La **barra laterale** sulla sinistra.
- La **barra degli strumenti** nella parte superiore.
- L'**area di lavoro** al centro.

<br/>

<a id="sidebar"></a>
### Barra laterale

Utilizza la barra laterale per spostarti all'interno dell'app. Puoi ridurla per ottenere più spazio cliccando sull'icona accanto al logo dell'app.

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
        <li><strong>Trasforma</strong> apre l'area di lavoro per prompt personalizzati.</li><br/>
        <li><strong>Cruscotto</strong> mostra informazioni su utilizzo e costi.</li><br/>
        <li><strong>Impostazioni</strong> apre il pannello delle impostazioni.</li><br/>
        <li><strong>Cronologia</strong> mostra la cronologia di utilizzo con testo in ingresso e in uscita.</li><br/>
        <li><strong>Utente</strong> mostra il nome utente dell'utente connesso (solo per la versione web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barra degli strumenti

La barra degli strumenti cambia leggermente a seconda della sezione dell'applicazione in cui ti trovi.

- A sinistra, viene mostrato il nome della pagina corrente.
- A destra, sono presenti il **selettore del modello** e il controllo della **Lingua dell'interfaccia**.

Il **selettore del modello** ti permette di scegliere quale motore di intelligenza artificiale utilizzare per l'attività corrente.

  ![Selettore del modello](../images/screenshots/it/model-selector.png)

Alcuni modelli gratuiti potrebbero non essere sempre disponibili — a volte sono offline o presentano un limite di utilizzo. In questi casi, l'app rimuoverà automaticamente il modello dall'elenco disponibile. Per gestire quali modelli visualizzare, vai su [**Impostazioni** > **Modelli**](#models) e modifica il tuo elenco di modelli.  
Puoi anche aprire direttamente le impostazioni del modello cliccando sull'icona del fornitore a sinistra del nome del modello nella barra degli strumenti.

<br/>

L'**icona del globo + codice lingua** consente di cambiare la lingua dell'interfaccia dell'app (come menu e pulsanti). Questa impostazione **non** modifica le lingue di traduzione utilizzate nella funzione **Traduci**.

  ![Selettore della lingua dell'interfaccia](../images/screenshots/it/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Pannelli di input e output

La maggior parte degli spazi di lavoro utilizza un pannello **Input** a sinistra e un pannello **Output** a destra.

Ogni pannello visualizza inoltre:

| **Input**                                                          | **Output**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Numero di caratteri <br/>- Numero di parole <br/>- Numero di paragrafi   <br/> | - Tempo impiegato per l'attività<br/>- **TPS** (token al secondo)<br/>- Contatori di caratteri, parole e paragrafi<br/>- Modello utilizzato |


Se ti stai chiedendo cosa significano questi termini tecnici:

- **Token** indica un piccolo frammento di testo. Puoi pensarlo come una parte di parola o una parola breve.
- **TPS** indica quanti di questi frammenti di testo il modello elabora ogni secondo.

<br/>

Puoi anche monitorare il costo di ogni operazione (se disponibile) e il costo totale, abilitando l'opzione `Mostra informazioni sui costi nelle azioni` in [**Impostazioni** > **Impostazioni generali**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Traduci

Utilizza **Traduci** quando desideri convertire del testo da una lingua all'altra.

![Area di lavoro Traduci](../images/screenshots/it/translate.png)

<br/>

<a id="translate-text"></a>
### Tradurre del testo

1. Apri **Traduci**.
2. Scegli una lingua in **Da**.
3. Scegli una lingua in **A**.
4. Scegli un modello nella barra degli strumenti.
5. Digita o incolla del testo nel campo **Input**.
6. Clicca su **Traduci**.
7. Leggi il risultato in **Output**.
8. Usa il pulsante di copia se desideri copiare il risultato.

<br/>

<a id="language-selection"></a>
### Selezione della lingua

- **Da** può essere una lingua specifica o **Rileva lingua**.
- **A** è la lingua in cui desideri ottenere il risultato.

Le tue **Lingue principali** selezionate appariranno in cima all'elenco. Puoi impostarle in [**Impostazioni** > **Lingue**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Impostazioni utili per la traduzione

In [**Impostazioni** > **Impostazioni generali**](#general-settings), puoi modificare il comportamento della traduzione:

- **Traduci automaticamente all'incollamento** esegue subito una traduzione non appena incollati del testo.
- **Copia automaticamente il risultato negli appunti** copia il risultato negli appunti al termine dell'operazione.
- **Traduzione in tempo reale (durante la digitazione)** traduce mentre stai scrivendo.
- **Timeout (ms)** determina per quanto tempo l'app attende prima di eseguire una traduzione in tempo reale.
- **Invio (Enter)** determina cosa accade quando premi `Invio`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Riformula

Utilizza **Riformula** quando vuoi migliorare il testo senza cambiarne il significato principale.

![Area di lavoro Riformula](../images/screenshots/it/rewrite.png)

Questa funzione è utile per:

- correggere errori ortografici e grammaticali
- rendere il testo più chiaro
- rendere il testo più formale o informale
- accorciare o espandere il testo
- rendere il testo più tecnico

<br/>

> 💡 **CONSIGLIO**<br/>
> Quando utilizzi la modalità "**Controlla ortografia e grammatica**", nel pannello di output appare un pulsante `Mostra modifiche`.  
> Cliccando su questo pulsante puoi attivare/disattivare la visualizzazione delle correzioni, mostrando o nascondendo le modifiche specifiche apportate al tuo testo.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Trasforma

Usa **Trasforma** quando desideri che l'IA segua un insieme personalizzato di istruzioni.

![Area di lavoro Trasforma](../images/screenshots/it/transform.png)

Questa è l'area dell'app più flessibile. Puoi utilizzarla per attività come:

- riepilogare appunti
- trasformare un testo grezzo in un'email curata
- estrarre punti chiave
- convertire un testo in un formato specifico
- qualsiasi altra attività personalizzata sul testo in ingresso

<br/>

<a id="run-an-existing-prompt"></a>
### Eseguire un prompt esistente

1. Apri **Trasforma**.
2. Scegli un prompt dall'elenco dei prompt.
3. Se appare un campo per la **Lingua di destinazione**, seleziona una lingua, se desiderato.
4. Digita o incolla del testo nel campo **Input**.
5. Clicca su **Trasforma**.
6. Leggi il risultato in **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Se non hai ancora nessun prompt

Se il tuo elenco di prompt è vuoto, clicca su **Carica prompt di esempio**. Verranno aggiunti degli esempi predefiniti per iniziare rapidamente.

<br/>

> ℹ️ **NOTA**<br/>
> I prompt di esempio sono forniti in inglese. Dopo averli caricati, puoi modificare un prompt e usare **Traduci prompt** per tradurlo nella tua lingua.

<br/>

<a id="create-a-prompt-quickly"></a>
### Creare un prompt velocemente

Il modo più rapido per creare un prompt è:

1. Clicca su **Nuovo prompt**.
2. Clicca su **Genera prompt**.
3. Descrivi cosa dev'essere in grado di fare il tuo prompt.
4. Scegli un modello.
5. Lascia che l'app crei una bozza per te.
6. Esamina la bozza e clicca su **Salva**.

![Genera prompt](../images/screenshots/it/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Modificare un prompt

Quando crei o modifichi un prompt, l'editor appare a sinistra e un'area di prova appare a destra.

![Editor dei prompt di Trasforma](../images/screenshots/it/transform-prompt-edit.png)

I campi principali sono:

- **Nome del prompt**: il nome visualizzato nell'elenco dei prompt.
- **Istruzioni per il prompt (opzionale)**: un breve suggerimento mostrato all'utente durante l'esecuzione del prompt.
- **Ruolo del modello**: il ruolo generale assegnato all'IA, ad esempio 'Sei un assistente utile.'
- **Istruzioni del modello (una per riga)**: regole specifiche che l'IA deve seguire.
- **Descrizione dell'output**: una parola breve che descrive il risultato, come 'riassunto' o 'riscrittura'.
- **Temperatura (0,0 → 1,0)**: influenza il comportamento del modello; vedi sotto.
- **Chiedi la lingua di destinazione**: aggiunge un selettore di lingua quando il prompt viene eseguito.

Se il termine tecnico **Temperatura** ti è nuovo, pensalo in questo modo:

- Una **temperatura più bassa** dà risultati più stabili e prevedibili.
- Una **temperatura più alta** dà maggiore varietà e creatività.

Puoi anche usare:

- **`Genera prompt`** per creare una nuova bozza da una semplice descrizione
- **`Migliora prompt`** per perfezionare un prompt esistente
- **`Traduci prompt`** per tradurre i campi del prompt

<br/>

> ⚠️ **ATTENZIONE**<br/>
> Clicca su **`Salva`** prima di cliccare su **`Torna all'esecuzione`**. Se torni indietro senza salvare, le tue modifiche andranno perse.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Prova un prompt prima di usarlo

Il riquadro di prova a destra ti permette di testare il tuo prompt con un testo di esempio prima di usarlo nel lavoro quotidiano.

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

Usa **Dashboard** per vedere quanto stai utilizzando l'app e quanto ti costa (per i modelli a pagamento).

![Riepilogo della Dashboard](../images/screenshots/it/dashboard-summary.png)


<br/>

> ℹ️ **NOTA**<br/>
> Se usi solo modelli gratuiti, i grafici relativi ai costi saranno vuoti.

<br/>

<a id="filter-the-data"></a>
### Filtrare i dati

Utilizza i pulsanti di filtro in alto per modificare l'intervallo temporale.

![Filtri della Dashboard](../images/screenshots/it/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> Il filtro **Utente** è visibile solamente agli amministratori nella versione web. Gli utenti normali non vedranno questo filtro e non è disponibile nell'app desktop.

<br/>

<a id="dashboard-tabs"></a>

### Schede del cruscotto

- **Riepilogo** fornisce una panoramica sull'utilizzo e sui costi.
- **Per utilizzo** suddivide le attività per lingua di traduzione, modalità di riscrittura e prompt di trasformazione.
- **Per modello** mostra quali modelli sono stati utilizzati e i relativi costi.
- **Per giorno** mostra i totali giornalieri.
- **Tutte le chiamate** mostra la cronologia completa delle chiamate e permette di esportarla.

<br/>

<a id="export-data"></a>
### Esportare i dati

Le tabelle del cruscotto possono esportare i dati in:

- **JSON**
- **CSV**
- **XLSX**

Questa funzione è utile se si desidera esaminare le attività al di fuori dell'app o condividere un rapporto.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Eliminare i record archiviati per un modello

Nella sezione **Per modello** o **Tutte le chiamate**, è possibile rimuovere i record archiviati per un modello facendo clic sull'icona del "cestino".

> ⚠️ **AVVISO**<br/>
> L'eliminazione dei record archiviati non può essere annullata. Usare questa opzione solo se si è certi di non aver più bisogno di quella cronologia.

Per eliminare tutti i dati o rimuovere i record in base alla loro data, andare su [**Impostazioni** > **Controllo costi**](#cost-tracking). Lì si trovano le opzioni per cancellare tutti i dati archiviati o soltanto quelli precedenti a una certa data.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Cronologia

Fare clic su **Cronologia** per visualizzare la cronologia delle azioni eseguite in **Transrewrt**, inclusi l'input e l'output di ogni operazione.

![Pagina della cronologia](../images/screenshots/it/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrare i dati

La sezione **Cronologia** utilizza gli stessi filtri della pagina **Cruscotto**. Usali per selezionare l'intervallo temporale.

![Filtri del cruscotto](../images/screenshots/it/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> Il filtro **Utente** è visibile solo agli amministratori nella versione web. Gli utenti normali non vedranno questo filtro, che inoltre non è disponibile nell'app desktop.

<br/>

<a id="export-history-data"></a>
### Esportare i dati della cronologia

La pagina della cronologia può esportare i dati filtrati in:

- **JSON**
- **CSV**
- **XLSX**

Questa funzione è utile per esaminare le attività al di fuori dell'app o condividere un rapporto.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Impostazioni

Aprire **Impostazioni** dalla barra laterale per personalizzare il comportamento dell'app.

Le schede disponibili dipendono dalla piattaforma e dal ruolo:

  | Scheda                     | Desktop | Web (amministratore) | Web (utente normale) |
  |----------------------------|:-------:|:--------------------:|:--------------------:|
  | Impostazioni generali      |   sì    |         sì           |          sì          |
  | Modelli                    |   sì    |         sì           |          sì          |
  | Lingue                     |   sì    |         sì           |          sì          |
  | Controllo costi            |   sì    |         sì           |           —          |
  | Prompt di trasformazione   |   sì    |         sì           |          sì          |
  | Utenti                     |    —    |         sì           |           —          |
  | Configurazione API         |   sì    |         sì           |           —          |
  | Informazioni               |   sì    |         sì           |          sì          |

<br/>

> ℹ️ **NOTA**<br/>
> Nella versione web, ogni utente ha la propria configurazione. Impostazioni come modelli selezionati, lingue, opzioni generali e prompt di trasformazione sono memorizzate per singolo utente. Le modifiche apportate non influenzano gli altri utenti.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Impostazioni generali

Usa **Impostazioni generali** per controllare il comportamento alla tastiera, se i dettagli delle esecuzioni vengano salvati nella **Cronologia** e l'aspetto dell'interfaccia.

**Comportamento**

- **Comportamento del tasto INVIO** determina se `Invio` esegue l'operazione o inserisce una nuova riga.
- **Traduzione automatica al momento dell'incollamento** avvia la traduzione non appena viene incollato del testo.
- **Copia automatica del risultato negli appunti** copia automaticamente i risultati con esito positivo.
- **Traduzione in tempo reale (durante la digitazione)** traduce mentre si digita.
- **Timeout (ms)** imposta il tempo di attesa per la traduzione in tempo reale.

**Cronologia**

- **Conserva la cronologia delle esecuzioni** stabilisce se ogni traduzione, riscrittura e trasformazione debba salvare **il testo di input e output** per la vista laterale [**Cronologia**](#history). Disattivandola verrà richiesta conferma; se la conferma viene data, i testi salvati verranno rimossi dal database.
- **Elimina dati cronologia** permette di rimuovere i testi salvati in base all'età (ad esempio, più vecchi di qualche mese, oppure **tutti i dati (cancella)**) usando **Elimina dati**. Questa azione riguarda solo i testi salvati per la vista **Cronologia**; **non** cancella i totali di costo o di utilizzo. Per rimuovere o ridurre i dati relativi ai **costi**, usare [**Impostazioni** > **Controllo costi**](#cost-tracking).

**Aspetto**

- **Mostra informazioni sui costi nelle azioni** controlla la visualizzazione del costo per operazione (se disponibile) e del costo totale nei pannelli di output di Traduzione, Riscrittura e Trasformazione.
- **Cifre decimali dei costi** modifica la visualizzazione delle cifre decimali del costo.
- **Solo web:** **mostra un margine intorno all'app** aggiunge spazio extra intorno all'interfaccia.
- **Famiglia caratteri** modifica il tipo di carattere nei pannelli di testo.
- **Dimensione** modifica la dimensione del carattere.


<br/>

<a id="models"></a>

### Modelli

Utilizza **Impostazioni** > **Modelli** per scegliere quali modelli vengono visualizzati nella barra degli strumenti.

![Scheda Modelli delle Impostazioni](../images/screenshots/it/settings-models.png)

La pagina contiene due elenchi:

- **Modelli disponibili** a sinistra
- **Modelli selezionati** a destra

I controlli più utili includono:

- **Cerca modelli...** per trovare un modello in base al nome
- Le etichette **Provider** per filtrare l'elenco per un singolo motore (OpenRouter, OpenAI, Ollama, …)
- **Solo gratuiti** per mostrare solo i modelli gratuiti
- **Aggiorna** per ricaricare l'elenco
- **Espandi tutto** e **Comprimi tutto** quando si ordina per provider

Gli ID dei modelli includono il prefisso del provider (ad esempio `openrouter/…` rispetto a `openai/…`). Badge come **OpenAI (OpenRouter)** e **OpenAI (diretto)** indicano come viene instradato il traffico.

> ℹ️ **NOTA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) è un modello router, non un modello generico per chat: la sua risposta è in formato JSON e descrive i corpi delle richieste all'API OpenRouter (ad esempio, un array `requests` con `model` e `messages`). Se lo usi per **Tradurre**, **Riscrivere** o **Trasformare**, il pannello di output mostrerà tale JSON invece del testo finito. Scegli un modello testuale normale per queste attività. Vedi la [pagina del modello Body Builder](https://openrouter.ai/openrouter/bodybuilder) su OpenRouter.

Azioni:

 - Per aggiungere un modello, clicca su **Aggiungi** o ovunque sulla voce del modello.

 - Per rimuovere un modello, clicca su **X** accanto al modello nella lista **Modelli selezionati** oppure su **Selezionato** vicino al modello in **Modelli disponibili**.

 - Per svuotare l'elenco, clicca **Deseleziona tutto**. Il modello gratuito obbligatorio rimarrà comunque nell'elenco.

<br/>

> ℹ️ **NOTA**<br/>
> Se non desideri aggiungere crediti a OpenRouter subito, comincia abilitando **Solo gratuiti** e seleziona i modelli gratuiti (nessuna carta di credito richiesta). Puoi anche usare Ollama per eseguire modelli localmente senza chiave API.

<br/>

<a id="languages"></a>
### Lingue

Utilizza **Impostazioni** > **Lingue** per organizzare gli elenchi di lingue usati nell'app.

- Le **Lingue principali** sono fissate in alto negli elenchi delle lingue in **Traduci** e **Trasforma**.
- Le **Lingue personalizzate** ti permettono di aggiungere una lingua non presente nell'elenco predefinito.

Se aggiungi una lingua personalizzata, apparirà nei selettori di lingua insieme alle opzioni integrate.

<br/>

<a id="cost-tracking"></a>
### Monitoraggio dei costi

Utilizza **Impostazioni** > **Monitoraggio dei costi** per gestire le informazioni sui costi.

- **Costo totale** mostra il totale aggiornato.
- **Copia valore** copia il totale negli appunti.
- **Reimposta costo** ripristina il totale memorizzato a zero.
- **Sincronizza con l'utilizzo della chiave API** imposta il totale in base all'utilizzo riportato dal tuo account OpenRouter (solo OpenRouter).
- **Utilizzo chiave API** mostra i dettagli d'uso di OpenRouter, se disponibili.
- **Elimina dati sui costi** rimuove tutti i dati o solo quelli anteriori a una data selezionata.

**Monitoraggio dei costi:** Quando utilizzi modelli OpenRouter, l'app mostra il tuo utilizzo e la spesa effettivi basati sui dati forniti da OpenRouter. Per tutti gli altri provider, l'app stima i costi in base ai prezzi pubblicati da OpenRouter; se non è disponibile un prezzo, la stima potrebbe essere zero.

<br/>

> ℹ️ **NOTA**<br/>
> Tutte le cifre riportate sono stime fornite a solo scopo informativo, non costituiscono fatture ufficiali.

<br/>

> ⚠️ **AVVISO**<br/>
> L'eliminazione dei dati non può essere annullata. Prima di procedere, assicurati di eseguire il backup dei tuoi dati o di esportarli tramite [**Cronologia**](#history) o [**Dashboard** > **Tutte le chiamate**](#dashboard-tabs); in caso contrario, verranno persi definitivamente. Tutta la cronologia di input/output relativa a ciascuna chiamata API verrà eliminata.

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

I provider supportati sono: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e **Ollama** (modelli locali tramite un URL base). È necessario configurare solo i provider che utilizzi.

**Applicazione web: solo amministratore**

Le chiavi API vengono configurate tramite variabili d'ambiente di sistema o Docker: non vengono inserite nell'interfaccia web. Questa pagina mostra quali provider dispongono di una chiave configurata e ti permette di testarle cliccando sul pulsante **`Test`**.

<br/>

> ℹ️ **NOTA**<br/>
> Per modificare una chiave API, aggiorna la variabile d'ambiente nella configurazione di sistema o Docker e riavvia il server o il container.

<br/>

**Applicazione desktop**

Usa **Configurazione API** per memorizzare le chiavi API per ciascun provider che utilizzi. Per Ollama, inserisci l'**URL base** invece della chiave API.

<br/>

> 💡 **Suggerimento** <br/>
> Se non desideri utilizzare una chiave API o pagare per l'utilizzo, puoi [scaricare Ollama](https://ollama.com) ed eseguire modelli (come `translategemma:4b`) gratuitamente in locale sul tuo computer. In alternativa, puoi creare un account gratuito su OpenRouter (nessuna carta di credito richiesta) per utilizzare i loro modelli gratuiti, oppure ottenere una chiave API gratuita da Cerebras, Google, Groq o Mistral AI.

<br/>

- Aggiungi solo i provider necessari. In **Impostazioni** > **Modelli**, ogni ID modello inizia con il provider (ad esempio `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Per aggiungere una chiave API, inserisci il valore nel campo di testo e clicca su **`Salva`**. Per sostituire una chiave esistente, clicca su **`Modifica`**. Per verificare che una chiave funzioni, clicca su **`Test`**. Per l'URL base di Ollama, clicca sempre su **`Test`** per controllare la connessione.

<br/>

> ℹ️ **NOTA**<br/>
> Non puoi vedere il valore attuale di una chiave API. Puoi solo sostituirla utilizzando il pulsante **`Modifica`**. Le chiavi API vengono memorizzate cifrate nella configurazione.

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
- la configurazione API stia funzionando

Se stai utilizzando l'app desktop:

1. Apri [**Impostazioni** > **Configurazione API**](#api-config).
2. Verifica che sia salvata almeno una chiave API.
3. Clicca su **Test** accanto al provider per confermare che la chiave funzioni.

<br/>

<a id="the-model-list-is-empty"></a>
### La lista dei modelli è vuota

Apri [**Impostazioni** > **Modelli**](#models) e clicca su **Aggiorna**.

Se necessario:

- cerca un modello
- attiva **Solo gratuiti**
- aggiungi uno o più modelli a **Modelli selezionati**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Il risultato è troppo lento o costoso

Prova una o più delle seguenti operazioni:

- scegli un modello diverso
- utilizza un input più breve
- disattiva la **Traduzione in tempo reale (durante la digitazione)** in [**Impostazioni** > **Impostazioni generali**](#general-settings)
- usa modelli gratuiti per compiti semplici (vedi [Modelli](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### L'interfaccia è in una lingua errata

Clicca sull'icona del globo nella [barra degli strumenti](#toolbar) e scegli la tua **Lingua interfaccia** preferita.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Il testo è troppo piccolo o difficile da leggere

Apri [**Impostazioni** > **Impostazioni generali**](#general-settings) e modifica:

- **Famiglia caratteri**
- **Dimensione**

<br/>

<a id="dashboard-charts-are-empty"></a>
### I grafici della dashboard sono vuoti

Questo è normale se:

- utilizzi solo **modelli gratuiti** (i grafici dei costi saranno vuoti)
- il **filtro temporale** selezionato non include il periodo in cui sono state effettuate le chiamate — prova con **Tutto** per verificare

Se i grafici sono ancora vuoti dopo aver selezionato **Tutto**, verifica che le chiamate siano presenti nella sezione [**Cronologia**](#history) o nella scheda **Tutte le chiamate**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Il costo mostra "non disponibile" o sembra errato

Quando utilizzi modelli attraverso **OpenRouter**, l'app mostra la spesa effettiva riportata da OpenRouter.

Per **altri provider** (OpenAI diretto, Anthropic diretto, ecc.), il costo è stimato in base ai dati tariffari pubblicati da OpenRouter. Se non viene trovato un prezzo corrispondente per un modello, il costo apparirà come **non disponibile** e non verrà aggiunto al tuo totale cumulativo.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Il costo totale non corrisponde alla fattura del mio provider

Tutte le cifre relative ai costi nell'app sono **stimate solo a scopo informativo**, non rappresentano fatture ufficiali.

Per avvicinare il totale alla spesa effettiva su OpenRouter, apri [**Impostazioni** > **Tracciamento costi**](#cost-tracking) e clicca su **Sincronizza con l'utilizzo della chiave API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### La pagina Cronologia manca nella barra laterale

L'opzione **Mantieni cronologia esecuzioni** potrebbe essere disattivata. Apri [**Impostazioni** > **Impostazioni generali**](#general-settings) e abilitala. Nota che attivarla non ripristina i dati cronologici precedentemente eliminati.

<br/>

<a id="web-app-session-expired"></a>
### App web: reindirizzamento imprevisto alla pagina di accesso

La sessione potrebbe essere scaduta. Accedi nuovamente. Se il problema si verifica frequentemente, verifica la configurazione del server riguardo le impostazioni della durata della sessione.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### La dashboard non mostra dati di altri utenti (web)

Solo gli **amministratori** possono visualizzare i dati di tutti gli utenti tramite il filtro **Utente**. Gli utenti normali vedono solo la propria attività, per design.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Ho modificato un prompt e ho perso le modifiche

Quando modifichi un prompt, clicca sempre su **Salva** prima di cliccare su **Indietro per eseguire**.

<br/><br/>

<a id="quick-tips"></a>
## Consigli rapidi

- Inizia con [**Traduci**](#translate) per assicurarti che la configurazione funzioni prima di passare a [**Riscrivi**](#rewrite) o [**Trasforma**](#transform).
- Usa [**Riscrivi**](#rewrite) per migliorare il testo nella quotidianità.
- Usa [**Trasforma**](#transform) quando hai bisogno di un flusso di lavoro ripetibile per un compito specifico.
- Usa [**Dashboard**](#dashboard) se desideri tenere d'occhio utilizzo e costi.
- Usa [**Cronologia**](#history) per rivedere le operazioni precedenti e i testi completi di input/output.
- Esporta regolarmente i prompt se stai creando una libreria che desideri mantenere al sicuro (vedi [Prompt di trasformazione](#transform-prompts)) o se vuoi condividerla con altri.

<br/><br/>

<a id="disclaimer"></a>

## Dichiarazione

I nomi e i loghi dei prodotti appartengono ai rispettivi proprietari e sono utilizzati esclusivamente a scopo identificativo. Questo software non è in alcun modo affiliato né supportato da alcuno dei marchi menzionati.

<br/><br/>

<a id="license"></a>
## Licenza

Diritti d'autore © 2026 Waldemar Scudeller Jr.

[Licenza Apache 2.0](LICENSE)