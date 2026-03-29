---
translated_at: "2026-03-29T01:55:03.484Z"
source_hash: "8981b8db163153bfc443046fa20a49b33c92b9feebdee302f6ef60852f273472"
source_mtime: "2026-03-29T01:41:58.368Z"
model: "qwen/qwen3-235b-a22b-2507"
---
![banner di Transrewrt](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>

# Guida Utente

<br/>

<a id="introduction"></a>

## Introduzione

Transrewrt ti aiuta a lavorare con il testo in tre modi principali:

- **Traduci** - converti il testo da una lingua all'altra.
- **Riformula** - rielabora il testo in uno stile diverso, ad esempio più chiaro, più breve o più formale.
- **Trasforma** - elabora il testo utilizzando istruzioni personalizzate basate sull'intelligenza artificiale, chiamate prompt.

<br/>

Questa guida spiega come utilizzare l'app una volta installata e avviata. Per le istruzioni di installazione, consulta il file **[README](README.it.md)** principale.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt è disponibile come app desktop per Windows e Linux, e come app web autosufficiente. Questa guida si concentra sull'uso quotidiano dell'app. Quando qualcosa si applica solo a una specifica versione, ciò è chiaramente indicato.

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](translated-docs/US

ER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Portoghese (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Rumeno](USER-GUIDE.ro.md) · [Russo](USER-GUIDE.ru.md) · [Slovacco](USER-GUIDE.sk.md) · [Spagnolo](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Sveco](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [Thai](USER-GUIDE.th.md) · [Turco](USER-GUIDE.tr.md) · [Ucraino](USER-GUIDE.uk.md) · [Vietnamita](USER-GUIDE.vi.md)</small>

<small>

> **Nota sulle traduzioni dell'interfaccia utente e della documentazione:** Tutte le lingue dell'interfaccia, tranne l'originale inglese (GB), 
> sono state tradotte utilizzando modelli di intelligenza artificiale; il testo potrebbe essere impreciso o contenere errori.

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
- [Traduci](#translate)
  - [Traduci testo](#translate-text)
  - [Selezione della lingua](#language-selection)
  - [Impostazioni utili per la traduzione](#helpful-translation-settings)
- [Riformula](#rewrite)
- [Trasforma](#transform)
  - [Esegui un prompt esistente](#run-an-existing-prompt)
  - [Se non hai ancora prompt](#if-you-have-no-prompts-yet)
  - [Crea rapidamente un prompt](#create-a-prompt-quickly)
  - [Modifica un prompt](#edit-a-prompt)
  - [Prova un prompt prima di utilizzarlo](#test-a-prompt-before-using-it)
- [Cruscotto](#dashboard)
  - [Filtra i dati](#filter-the-data)
  - [Schede del cruscotto](#dashboard-tabs)
  - [Esporta dati](#export-data)

- [Elimina i record salvati per un modello](#delete-stored-records-for-a-model)
- [Cronologia](#history)
  - [Filtra i dati](#filter-the-data-1)
  - [Esporta i dati della cronologia](#export-history-data)
- [Impostazioni](#settings)
  - [Impostazioni generali](#general-settings)
  - [Modelli](#models)
  - [Lingue](#languages)
  - [Tracciamento costi](#cost-tracking)
  - [Trasforma prompt](#transform-prompts)
  - [Utenti](#users)
  - [Configurazione API](#api-config)
  - [Informazioni](#about)
- [Problemi comuni](#common-issues)
  - [L'app non traduce, riscrive o trasforma il testo](#the-app-will-not-translate-rewrite-or-transform-text)
  - [L'elenco dei modelli è vuoto](#the-model-list-is-empty)
  - [Il risultato è troppo lento o troppo costoso](#the-result-is-too-slow-or-too-expensive)
  - [L'interfaccia è nella lingua sbagliata](#the-interface-is-in-the-wrong-language)
  - [Il testo è troppo piccolo o difficile da leggere](#the-text-is-too-small-or-hard-to-read)
  - [I grafici della bacheca sono vuoti](#dashboard-charts-are-empty)

- [Il costo mostra "non disponibile" o sembra errato](#cost-shows-not-available-or-seems-wrong)
  - [Il costo totale non corrisponde al conto del mio fornitore](#total-cost-does-not-match-my-provider-bill)
  - [La pagina Cronologia manca dalla barra laterale](#the-history-page-is-missing-from-the-sidebar)
  - [App web: reindirizzato alla pagina di accesso inaspettatamente](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Amministratore web: dimenticata o persa una password](#web-admin-forgot-or-lost-a-password)
  - [La dashboard non mostra dati per altri utenti (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Ho modificato un prompt e ho perso le modifiche](#i-changed-a-prompt-and-lost-the-edits)
- [Consigli rapidi](#quick-tips)
- [Disclaimer](#disclaimer)
- [Licenza](#license)

<!-- END doctoc generato TOC si prega di mantenere questo commento per consentire l'aggiornamento automatico -->

<br/><br/>

<a id="before-you-start"></a>

## Prima di iniziare

Per utilizzare Transrewrt, è necessario avere accesso ad almeno un provider di intelligenza artificiale. I provider supportati sono: [OpenRouter](https://openrouter.ai) (che aggrega molti modelli), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e [Ollama](https://ollama.com) per modelli locali.

Non è necessario scegliere un modello a pagamento per iniziare. Non appena aggiungi la tua chiave API di OpenRouter, l'app abilita automaticamente un'opzione **gratuita** integrata di OpenRouter. Questo ti permette di iniziare subito a tradurre, riformulare e trasformare il testo. In alternativa, puoi ottenere gratuitamente una chiave API da Cerebras, Google, Groq o Mistral AI.

In termini semplici:

- Un **modello** è il motore AI che esegue il lavoro. I modelli sono elencati con un **prefisso del provider** (ad esempio `openrouter/…`, `openai/…`, `ollama/…`).
- Una **chiave API** (o, per Ollama, un **URL di base**) è il modo in cui l'app raggiunge il provider.

Se utilizzi l'**app desktop**, aggiungi le chiavi in [**Impostazioni** > **Configurazione API**](#api-config) per ogni provider che utilizzi. Se utilizzi solo OpenRouter, consulta la sezione [Come ottenere una chiave API](#how-to-get-an-api-key-desktop-app) più in basso. Se non desideri utilizzare una chiave API, puoi installare Ollama (da [ollama.com](https://ollama.com)) e usare modelli locali, come ad esempio `translategemma:4b`.

Se utilizzi la **versione web**, il proprietario del server configura i provider tramite variabili d'ambiente, quindi non puoi inserire direttamente le chiavi API nell'applicazione.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### Come ottenere una chiave API OpenRouter gratuita (app desktop)

Se stai utilizzando l'app desktop, segui questi passaggi:

1. Vai su [OpenRouter](https://openrouter.ai) dal tuo browser web.
2. Crea un account o accedi.
3. Apri la pagina [Keys](https://openrouter.ai/keys).
4. Clicca sul pulsante per creare una nuova chiave API.
5. Assegna un nome alla chiave in modo da poterla riconoscere successivamente.
6. Copia la nuova chiave API.
7. Torna su Transrewrt e apri **Impostazioni** > **Configurazione API**.
8. Incolla la chiave nel campo **Chiave API OpenRouter** (in **Impostazioni** > **Configurazione API**).
9. Clicca su **Prova chiave OpenRouter** per verificare che funzioni.

<br/><br/>

<a id="getting-started"></a>

## Primi passi

Se è la prima volta che utilizzi Transrewrt, segui questi passaggi nell'ordine indicato:

1. Apri l'applicazione.
2. Se necessario, scegli la tua **lingua dell'interfaccia** dall'icona del globo.
3. Se stai utilizzando l'**app desktop**, apri [**Impostazioni** > **Configurazione API**](#api-config), aggiungi una chiave API per almeno un fornitore (ad esempio OpenRouter) e clicca su **Prova** per verificare che funzioni.
4. Apri [**Impostazioni** > **Modelli**](#models) e aggiungi uno o più modelli alla sezione **Modelli selezionati**.
5. Apri [**Impostazioni** > **Lingue**](#languages) e scegli le tue **Lingue principali**, se desideri che le lingue usate più di frequente appaiano per prime.
6. Vai su **Traduci** ed esegui una traduzione semplice per verificare che tutto funzioni correttamente.
7. Una volta verificato, prova **Riformula** e successivamente **Trasforma**.

L'ordine è importante. In questo modo si evita il problema più comune all'uso iniziale: tentare di eseguire un'operazione prima che l'app abbia una connessione API funzionante o un modello selezionato.

<br/><br/>

<a id="main-parts-of-the-window"></a>

## Parti principali della finestra

L'applicazione è suddivisa in tre aree principali:

- La **barra laterale** a sinistra.
- La **barra degli strumenti** in alto.
- L'**area di lavoro** al centro.

<br/>

<a id="sidebar"></a>

### Barra laterale

Utilizza la barra laterale per spostarti all'interno dell'app. Puoi comprimere la barra laterale per ottenere più spazio, cliccando sull'icona accanto al logo dell'app.

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
        <li><strong>Riformula</strong> apre l'area di lavoro per la riscrittura.</li><br/>
        <li><strong>Trasforma</strong> apre l'area di lavoro con prompt personalizzati.</li><br/>
        <li><strong>Dashboard</strong> mostra informazioni sull'utilizzo e sui costi.</li><br/>
        <li><strong>Impostazioni</strong> apre il pannello delle impostazioni.</li><br/>
        <li><strong>Cronologia</strong> mostra la cronologia delle attività con il testo inserito e quello generato.</li><br/>
        <li><strong>Utente</strong> mostra il nome dell'utente connesso (solo web).</li>
      </ul>

</td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barra degli strumenti

La barra degli strumenti cambia leggermente a seconda della posizione all'interno dell'app.

- A sinistra, viene mostrato il nome della pagina corrente.
- A destra, sono presenti il **selettore del modello** e il controllo per la **lingua dell'interfaccia**.

Il **selettore del modello** permette di scegliere quale motore AI utilizzare per l'attività corrente.

  ![Selettore del modello](../images/screenshots/it/model-selector.png)

Alcuni modelli gratuiti potrebbero non essere sempre disponibili — a volte sono offline o hanno un limite di utilizzo. In tal caso, l'app rimuoverà automaticamente quel modello dall'elenco disponibile. Per gestire quali modelli visualizzare, vai in [**Impostazioni** > **Modelli**](#models) e modifica l'elenco dei modelli.  
È inoltre possibile aprire direttamente le impostazioni del modello cliccando sull'icona del fornitore a sinistra del nome del modello nella barra degli strumenti.

<br/>

L'**icona del globo + il codice della lingua** consente di cambiare la lingua dell'interfaccia dell'app, come menu e pulsanti. **Non** modifica invece le lingue di traduzione utilizzate in **Traduci**.

![Selettore della lingua dell'interfaccia](../images/screenshots/it/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Pannelli di input e output

La maggior parte degli ambienti di lavoro utilizza un pannello **Input** a sinistra e un pannello **Output** a destra.

Ogni pannello mostra inoltre:

| **Input**                                                          | **Output**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Conteggio dei caratteri <br/>- Conteggio delle parole <br/>- Conteggio dei paragrafi   <br/> | - Durata dell'attività<br/>- **TPS** (token al secondo)<br/>- Conteggi di caratteri, parole e paragrafi<br/>- Il modello utilizzato |

Se ti stai chiedendo cosa significano i termini tecnici:

- **Token** indica un piccolo frammento di testo. Puoi pensarlo come a una parte di parola o una parola breve.
- **TPS** indica quanti di questi frammenti di testo il modello elabora ogni secondo.

<br/>

Puoi inoltre monitorare il costo di ciascuna operazione (se disponibile) e il costo totale, abilitando l'opzione `Mostra informazioni sui costi nelle azioni` in [**Impostazioni** > **Impostazioni generali**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>

## Traduci

Usa **Traduci** quando vuoi convertire un testo da una lingua all'altra.

![Area di lavoro Traduci](../images/screenshots/it/translate.png)

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
- **A** è la lingua in cui vuoi ottenere il risultato.

Le tue **Lingue principali** selezionate appariranno in alto nell'elenco. Puoi impostarle in [**Impostazioni** > **Lingue**](#languages).

<br/>

<a id="helpful-translation-settings"></a>

### Impostazioni utili per la traduzione

In [**Impostazioni** > **Impostazioni generali**](#general-settings), puoi modificare il comportamento della traduzione:

- **Traduzione automatica al momento dell'incolla**: avvia una traduzione non appena incolli del testo.
- **Copia automatica del risultato negli appunti**: copia automaticamente il risultato dopo un'esecuzione completata con successo.
- **Traduzione in tempo reale (durante la digitazione)**: esegue la traduzione mentre stai digitando.
- **Timeout (ms)**: imposta per quanto tempo l'applicazione attende prima di eseguire una traduzione in tempo reale.
- **Invio (Enter)**: determina cosa accade quando premi `Invio`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Riformulazione

Usa **Riformulazione** quando desideri migliorare l'espressione senza cambiarne il significato principale.

![Area di lavoro Riformulazione](../images/screenshots/it/rewrite.png)

Questa funzione è utile per:

- correggere ortografia e grammatica (**Controlla ortografia e grammatica**)
- rendere il testo più chiaro (**Migliora la chiarezza**)
- ottenere diverse riformulazioni distinte in un'unica esecuzione (**Versioni alternative**)
- rendere il testo più formale o informale (**Formale** / **Informale**)
- accorciare o espandere il testo (**Accorcia** / **Espandi**)
- rendere il testo più tecnico (**Rendi tecnico**)

<br/>

> 💡 **CONSIGLIO**<br/>
> Quando utilizzi la modalità "**Controlla ortografia e grammatica**", nel pannello di output appare un interruttore **Mostra modifiche** (accanto a **Copia**).
> Attivalo o disattivalo per mostrare o nascondere le correzioni specifiche applicate al tuo testo.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Trasforma

Usa **Trasforma** quando desideri che l'intelligenza artificiale segua un insieme personalizzato di istruzioni.

![Area di lavoro Trasforma](../images/screenshots/it/transform.png)

Questa è l'area dell'applicazione più flessibile. Puoi utilizzarla per attività come:

- riassumere appunti
- trasformare un testo grezzo in un'email raffinata
- estrarre i punti chiave
- convertire un testo in un formato specifico
- qualsiasi altra attività personalizzata sul testo di input

<br/>

<a id="run-an-existing-prompt"></a>

### Eseguire un prompt esistente

1. Apri **Transform**.
2. Scegli un prompt dall'elenco dei prompt.
3. Se appare una casella **Lingua di destinazione**, seleziona una lingua, se desiderata.
4. Digita o incolla del testo nell'**Input**.
5. Fai clic su **Transform**.
6. Leggi il risultato nell'**Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Se non hai ancora prompt

Se l'elenco dei prompt è vuoto, fai clic su **Carica prompt di esempio** nell'area di lavoro Transform. Lo stesso pulsante è sempre disponibile in [**Impostazioni** > **Prompt di Transform**](#transform-prompts), sulla riga di esportazione/importazione. Entrambi aggiungono esempi predefiniti in modo da poter iniziare rapidamente.

<br/>

> ℹ️ **NOTA**<br/>
> I prompt di esempio sono forniti in inglese. Dopo averli caricati, puoi modificare un prompt e utilizzare **Traduci prompt** per tradurlo nella tua lingua.

<br/>

<a id="create-a-prompt-quickly"></a>

### Creare un prompt rapidamente

Il modo più veloce per creare un prompt è:

1. Fare clic su **Nuovo prompt**.
2. Fare clic su **Genera prompt**.
3. Descrivere cosa si desidera che faccia il prompt.
4. Scegliere un modello.
5. Lasciare che l'app crei una bozza per te.
6. Rivedere la bozza e fare clic su **Salva**.

![Genera prompt](../images/screenshots/it/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### Modifica un prompt

Quando crei o modifichi un prompt, l'editor viene visualizzato sulla sinistra e un'area di prova appare sulla destra.

![Editor del prompt di trasformazione](../images/screenshots/it/transform-prompt-edit.png)

I campi principali sono:

- **Nome del prompt**: il nome visualizzato nell'elenco dei prompt.
- **Istruzioni del prompt (opzionale)**: un breve suggerimento mostrato all'utente durante l'esecuzione del prompt.
- **Ruolo del modello**: il ruolo generale assegnato all'IA, ad esempio "Sei un assistente utile".
- **Istruzioni del modello (una per riga)**: le regole specifiche che desideri che l'IA segua.
- **Descrizione dell'output**: una breve parola che descrive il risultato, ad esempio "riassunto" o "riscrittura".
- **Temperatura (0,0 → 1,0)**: il comportamento che assumerà il modello; vedi sotto.
- **Chiedi la lingua di destinazione**: aggiunge un selettore della lingua di destinazione quando il prompt viene eseguito.

Se il termine tecnico **Temperatura** è nuovo per te, pensalo in questo modo:

- Una temperatura **più bassa** produce risultati più stabili e prevedibili.

- Una temperatura **più alta** offre maggiore varietà e creatività.

Puoi anche utilizzare:

- **`Genera prompt`** per creare una nuova bozza a partire da una semplice descrizione
- **`Migliora prompt`** per perfezionare un prompt esistente
- **`Traduci prompt`** per tradurre i campi del prompt

<br/>

> ⚠️ **ATTENZIONE**<br/>
> Fai clic su **`Salva`** prima di fare clic su **`Torna all'esecuzione`**. Se torni indietro senza salvare, le tue modifiche andranno perse.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Prova un prompt prima di utilizzarlo

Il pannello di prova a destra ti consente di testare il tuo prompt con un testo di esempio prima di utilizzarlo nel lavoro quotidiano.

Questa funzione è utile quando:

- stai creando un nuovo prompt
- stai confrontando due versioni di un prompt
- desideri verificare tono, lunghezza o formato dell'output

<br/>

> ℹ️ **NOTA**<br/>
> Puoi esportare e importare i prompt salvati in [**Impostazioni** > **Transform Prompts**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Dashboard

Utilizza il **Dashboard** per vedere quanto stai utilizzando l'app e quanto ti costa (per i modelli a pagamento).

![Riepilogo Dashboard](../images/screenshots/it/dashboard-summary.png)


<br/>

> ℹ️ **NOTA**<br/>
> Se utilizzi soltanto modelli **gratuiti**, gli importi dei **costi** potrebbero essere pari a zero e i riepiloghi basati sui costi potrebbero apparire vuoti. Nella sezione **Riepilogo**, **Utilizzo nel tempo** e **Utilizzo per modello** vengono comunque mostrati il **numero di chiamate** (traduci, riscrivi e trasforma) qualora ci siano attività nel periodo selezionato.

<br/>

<a id="filter-the-data"></a>

### Filtrare i dati

Utilizza i pulsanti di filtro nella parte superiore per modificare l'intervallo temporale.

![Filtri del cruscotto](../images/screenshots/it/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> Il filtro **Utente** è visibile solo agli amministratori nella versione web. Gli utenti normali non vedranno questo filtro, che inoltre non è disponibile nell'app desktop.

<br/>

<a id="dashboard-tabs"></a>

### Schede del cruscotto

- **Riepilogo** fornisce una panoramica sull'utilizzo e sui costi. Include un grafico **Utilizzo nel tempo** (numero cumulativo suddiviso per giorno in forma di stack per le chiamate di traduzione, riscrittura e trasformazione) e **Utilizzo per modello** (numero totale di **chiamate per modello**, inclusa la trasformazione).
- **Per utilizzo** suddivide l'attività per lingua di traduzione, modalità di riscrittura e prompt di trasformazione.
- **Per modello** mostra i modelli utilizzati e i relativi costi.
- **Per giorno** mostra i totali giornalieri.
- **Tutte le chiamate** mostra la cronologia completa delle chiamate e consente di esportarla.

<br/>

<a id="export-data"></a>

### Esporta dati

Le tabelle del cruscotto possono esportare i dati in:

- **JSON**
- **CSV**
- **XLSX**

Questa funzionalità è utile se desideri esaminare l'attività al di fuori dell'applicazione o condividere un rapporto.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Eliminare i record memorizzati per un modello

In **Per modello** o **Tutte le chiamate**, puoi rimuovere i record memorizzati per un modello facendo clic sull'icona del "cestino".

> ⚠️ **ATTENZIONE**<br/>
> L'eliminazione dei record memorizzati non può essere annullata. Utilizza questa funzione solo se sei sicuro di non aver più bisogno di questa cronologia.

Per eliminare tutti i dati o rimuovere i record in base alla loro data, vai su [**Impostazioni** > **Tracciamento costi**](#cost-tracking). Lì troverai le opzioni per eliminare tutti i dati memorizzati o soltanto quelli più vecchi di una determinata data.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Cronologia

Fai clic su **Cronologia** per visualizzare la cronologia delle tue azioni all'interno di **Transrewrt**, inclusi l'input e l'output di ogni operazione.

![Pagina della cronologia](../images/screenshots/it/history.png)

<br/>

<a id="filter-the-history"></a>

### Filtrare i dati

La sezione **Cronologia** utilizza gli stessi filtri della pagina **Dashboard**. Usali per selezionare l'intervallo temporale.

![Filtri della dashboard](../images/screenshots/it/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> Il filtro **Utente** è visibile solo agli amministratori nella versione web. Gli utenti normali non vedranno questo filtro, che inoltre non è disponibile nell'app desktop.

<br/>

<a id="export-history-data"></a>

###  Esportare i dati della cronologia

La pagina della cronologia permette di esportare i dati filtrati nei seguenti formati:

- **JSON**
- **CSV**
- **XLSX**

Questa funzione è utile se si desidera esaminare l'attività al di fuori dell'app o condividere un rapporto.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>

## Impostazioni

Apri **Impostazioni** dalla barra laterale per personalizzare il comportamento dell'app.

Le schede disponibili dipendono dalla piattaforma e dal tuo ruolo:

| Scheda | Desktop | Web (amministratore) | Web (utente normale) |
|--------|:-------:|:--------------------:|:-------------------:|
| Impostazioni generali | sì | sì | sì |
| Modelli | sì | sì | sì |
| Lingue | sì | sì | sì |
| Monitoraggio costi | sì | sì | — |
| Modifica prompt | sì | sì | sì |
| Utenti | — | sì | — |
| Configurazione API | sì | sì | — |
| Informazioni | sì | sì | sì |

<br/>

> ℹ️ **NOTA**<br/>
> Nella versione web, ogni utente ha la propria configurazione. Impostazioni come modelli selezionati, lingue, opzioni generali e prompt di trasformazione vengono salvate per ogni singolo utente. Le modifiche che apporti non influiscono sugli altri utenti.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Impostazioni generali

Utilizza **Impostazioni generali** per controllare il comportamento della digitazione, se i dettagli di esecuzione vengono salvati nella **Cronologia** e l'aspetto visivo.

**Comportamento**

- **Comportamento del tasto INVIO** consente di scegliere se `Invio` esegue l'operazione oppure inserisce una nuova riga.
- **Auto-traduzione al ritaglio** avvia la traduzione non appena incolli del testo.
- **Copia automatica del risultato negli appunti** copia automaticamente i risultati con successo.
- **Traduzione in tempo reale (durante la digitazione)** traduce mentre digiti.
- **Timeout (ms)** imposta il tempo di attesa per la traduzione in tempo reale.

**Cronologia**

- **Conserva la cronologia delle esecuzioni** stabilisce se ogni traduzione, riscrittura e trasformazione debba salvare il **testo di input e di output** per la visualizzazione della [**Cronologia**](#history) nel pannello laterale. Disattivandola verrà richiesta una conferma; in caso positivo, il testo cronologico salvato verrà rimosso dal database.

- **Elimina dati cronologici** ti consente di rimuovere il testo memorizzato in base all'età (ad esempio, più vecchio di alcuni mesi, oppure **tutti i dati (cancellazione totale)**) utilizzando **Elimina dati**. Questa funzione interessa soltanto il testo salvato nella vista **Cronologia**; **non** cancella i totali relativi ai costi o all'utilizzo. Per rimuovere o ridurre i dati relativi ai **costi**, utilizza [**Impostazioni** > **Tracciamento costi**](#cost-tracking).

**Aspetto**

- **Mostra informazioni sui costi nelle azioni** controlla la visualizzazione del costo per operazione (se disponibile) e del costo totale nei pannelli di output di Traduci, Riformula e Trasforma.
- **Cifre decimali per i costi** modifica la visualizzazione delle cifre decimali nei costi.
- **Solo per web:** **mostra un margine attorno all'app** aggiunge spazio extra attorno all'interfaccia.
- **Famiglia caratteri** modifica il carattere utilizzato nei pannelli di testo.
- **Dimensione** modifica la dimensione del carattere.

**Backup della configurazione**

- **Includi dati di utilizzo nel backup** — quando attivata, il file ZIP contiene anche la cronologia delle esecuzioni e i dati delle chiamate API.

- **Backup della configurazione** — crea un singolo file ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` di default in UTC) contenente `config.json`, `state.json`, chiave di crittografia opzionale, utenti, preferenze, prompt personalizzati e dati di utilizzo se hai scelto di includerli. Dopo un backup riuscito, una conferma mostrerà il nome del file salvato.
- **Ripristina da backup** — apre prima una **finestra di dialogo di conferma**. Scegli il file ZIP del backup all'interno della finestra (**Sfoglia** / selettore file oppure trascina e rilascia, dove supportato), quindi verifica le opzioni:
  - **Ripristina i dati di utilizzo** — importa l'utilizzo/cronologia dal file ZIP se era stato effettuato il backup includendo i dati di utilizzo; lascia disattivata questa opzione se desideri ripristinare solo impostazioni e prompt.
  - **Elimina i vecchi dati di utilizzo prima del ripristino** — rimuove l'utilizzo/cronologia esistente su questa installazione prima di applicare il backup (opzionale; utilizzalo quando desideri un rimpiazzo pulito).

I backup creati nella versione web o desktop possono essere ripristinati nell'altra. Quando si ripristina un backup desktop nella versione web, i dati verranno ripristinati nell'utente amministratore.


<br/>

<a id="models"></a>

### Modelli

Utilizza **Impostazioni** > **Modelli** per scegliere quali modelli vengono visualizzati nella barra degli strumenti.

![Scheda Modelli delle Impostazioni](../images/screenshots/it/settings-models.png)

La pagina contiene due elenchi:

- **Modelli disponibili** a sinistra
- **Modelli selezionati** a destra

I controlli utili includono:

- **Cerca modelli...** per trovare un modello per nome
- Le etichette **Provider** per restringere l'elenco a un singolo motore (OpenRouter, OpenAI, Ollama, …)
- **Solo gratuiti** per mostrare solo i modelli gratuiti
- **Aggiorna** per ricaricare l'elenco
- **Espandi tutto** e **Comprimi tutto** quando si ordina per provider

Gli ID dei modelli includono il prefisso del provider (ad esempio `openrouter/…` rispetto a `openai/…`). Badge come **OpenAI (OpenRouter)** rispetto a **OpenAI (diretto)** indicano come viene instradato il traffico.

> ℹ️ **NOTA**<br/>

> **OpenRouter Body Builder** (`openrouter/bodybuilder`) è un modello router, non un modello di chat generale: la sua risposta è un JSON che descrive i corpi delle richieste all'API OpenRouter (ad esempio un array `requests` con `model` e `messages`). Se lo utilizzi per **Tradurre**, **Riformulare** o **Trasformare**, il pannello di output mostrerà tale JSON invece del testo finito. Scegli un normale modello di testo per queste attività. Consulta la [pagina del modello Body Builder](https://openrouter.ai/openrouter/bodybuilder) su OpenRouter.

Azioni:

 - Per aggiungere un modello, fai clic su **Aggiungi** o in qualsiasi punto della voce.

 - Per rimuovere un modello, fai clic su **X** accanto ad esso in **Modelli selezionati** o su **Selezionato** nella voce dei modelli disponibili.

 - Per svuotare l'elenco, fai clic su **Deseleziona tutti**. Il modello gratuito richiesto rimarrà nell'elenco.

<br/>

> ℹ️ **NOTA**<br/>

> Se non vuoi aggiungere credito a OpenRouter subito, inizia abilitando **Solo gratuito** e scegliendo i modelli gratuiti (nessuna carta di credito richiesta). Puoi inoltre utilizzare Ollama per eseguire modelli in locale senza alcuna chiave API.

<br/>

<a id="languages"></a>

### Lingue

Utilizza **Impostazioni** > **Lingue** per organizzare gli elenchi di lingue utilizzati nell'app.

- Le **lingue principali** vengono fissate in alto negli elenchi delle lingue in **Traduci** e **Trasforma**.
- La **lingua personalizzata** ti consente di aggiungere una lingua che non è presente nell'elenco predefinito.

Se aggiungi una lingua personalizzata, essa apparirà nei selettori di lingua insieme alle opzioni predefinite.

<br/>

<a id="cost-tracking"></a>

### Monitoraggio dei costi

Utilizza **Impostazioni** > **Monitoraggio costi** per gestire le informazioni sui costi.

- **Costo totale** mostra il totale accumulato.
- **Copia valore** copia il totale negli appunti.
- **Reimposta costo** imposta nuovamente il totale memorizzato a zero.
- **Sincronizza con l'utilizzo della chiave API** imposta il totale in modo che corrisponda all'utilizzo indicato dal tuo account OpenRouter (solo OpenRouter).
- **Utilizzo chiave API** mostra i dettagli sull'utilizzo di OpenRouter, se disponibili.
- **Elimina dati sui costi** rimuove tutti i dati oppure soltanto le voci anteriori a una data selezionata.

**Monitoraggio dei costi:** Quando utilizzi modelli OpenRouter, l'app mostra il tuo effettivo utilizzo e la spesa effettiva basandosi sulle informazioni di costo fornite da OpenRouter. Per tutti gli altri provider, l'app stima i costi utilizzando i prezzi pubblicati da OpenRouter; se un prezzo non è disponibile, la stima potrebbe essere zero.

<br/>

> ℹ️ **NOTA**<br/>
> **Tutte le cifre relative ai costi sono stime fornite esclusivamente a scopo informativo e non costituiscono bollette ufficiali.**

<br/>

> ⚠️ **AVVISO**<br/>

> L'eliminazione dei dati non può essere annullata. Prima di procedere con l'eliminazione, assicurati di eseguire il backup dei tuoi dati o di esportarli tramite [**Cronologia**](#history) 
> o [**Dashboard** > **Tutte le chiamate**](#dashboard-tabs), altrimenti andranno persi permanentemente. 
> Verrà eliminata anche tutta la cronologia di input/output relativa a ogni voce di chiamata API.


<br/>

<a id="transform-prompts"></a>

### Trasforma prompt

Usa **Impostazioni** > **Trasforma prompt** per gestire i prompt in blocco.

Puoi:

- visualizzare i tuoi prompt salvati
- eliminare prompt
- importare prompt da un file
- esportare prompt per il backup o la condivisione
- caricare prompt di esempio nell'elenco dei prompt

<br/>

<a id="users"></a>

### Utenti

Utilizza **Utenti** per gestire gli account utente nella versione web. Puoi aggiungere utenti, aggiornare i loro dati, reimpostare le password ed eliminare gli account.

<br/>

<a id="api-config"></a>

### Configurazione API

I provider supportati sono: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e **Ollama** (modelli locali tramite un URL di base). È necessario configurare solo i provider che si intendono utilizzare.

**Applicazione web: solo amministratore**

Le chiavi API vengono configurate tramite variabili d'ambiente di sistema o Docker — non vengono inserite nell'interfaccia web. Questa pagina mostra quali provider hanno una chiave configurata e permette di testarli cliccando sul pulsante **`Test`**.

<br/>

> ℹ️ **NOTA**<br/>
> Per modificare una chiave API, aggiornare la variabile d'ambiente nella configurazione di sistema o Docker e riavviare il server o il contenitore.

> ℹ️ **NOTA**<br/>

> **Backup della configurazione** (vedi [**Impostazioni generali** → Backup della configurazione](#general-settings)) possono incorporare all'interno del file `config.json` nel file ZIP le chiavi fornitore **risolte**. Il ripristino di questo ZIP **non** copia tali chiavi nel file di configurazione persistente del server — le chiavi attive provengono comunque dall'ambiente e dallo stato del file esistente, come descritto in quella sezione.

<br/>

**Applicazione desktop**

Usa **Configurazione API** per memorizzare le chiavi API per ciascun fornitore che utilizzi. Per Ollama, inserisci l'**URL di base** invece di una chiave API.


<br/>

> 💡 **Suggerimento** <br/>
> Se non desideri utilizzare una chiave API o pagare per l'utilizzo, puoi [scaricare Ollama](https://ollama.com) ed eseguire modelli (ad esempio `translategemma:4b`) gratuitamente in locale sul tuo computer. In alternativa, puoi creare un account gratuito su OpenRouter (nessuna carta di credito richiesta) per utilizzare i loro modelli gratuiti, oppure ottenere una chiave API gratuita da Cerebras, Google, Groq o Mistral AI.

<br/>

- Aggiungi solo i provider necessari. In **Impostazioni** > **Modelli**, ogni ID modello inizia con il nome del provider (ad esempio `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Per aggiungere una chiave API, inserisci il valore nel campo di testo e clicca su **`Salva`**. Per sostituire una chiave esistente, clicca su **`Modifica`**. Per verificare che una chiave funzioni, clicca su **`Prova`**. Per l'URL di base di Ollama, clicca sempre su **`Prova`** per verificare la connessione.

<br/>

> ℹ️ **NOTA**<br/>
> Non puoi visualizzare il valore attuale di una chiave API. Puoi solo sostituirla utilizzando il pulsante **`Modifica`**.
> Le chiavi API vengono memorizzate crittografate nella configurazione.

<br/>

<a id="about"></a>

### Informazioni

La scheda **Informazioni** mostra:

- il nome dell'app
- il numero di versione
- la data di compilazione
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
- sia presente almeno un modello in [**Impostazioni** > **Modelli**](#models)
- la tua configurazione API funzioni correttamente

Se stai utilizzando l'app desktop:

1. Apri [**Impostazioni** > **Configurazione API**](#api-config).
2. Verifica che sia stata salvata almeno una chiave API.
3. Fai clic su **Test** accanto al fornitore per confermare che la chiave funzioni.

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

### Il risultato è troppo lento o troppo costoso

Prova una o più delle seguenti soluzioni:

- scegli un modello diverso
- utilizza un input più breve
- disattiva la **Traduzione in tempo reale (durante la digitazione)** in [**Impostazioni** > **Impostazioni generali**](#general-settings)
- utilizza modelli gratuiti per compiti semplici (vedi [Modelli](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### L'interfaccia è nella lingua sbagliata

Fai clic sull'icona del globo nella [barra degli strumenti](#toolbar) e seleziona la **lingua dell'interfaccia** desiderata.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>

### Il testo è troppo piccolo o difficile da leggere

Apri [**Impostazioni** > **Impostazioni generali**](#general-settings) e modifica:

- **Famiglia del carattere**
- **Dimensione**

<br/>

<a id="dashboard-charts-are-empty"></a>

### I grafici della bacheca sono vuoti

Questo è normale se:

- utilizzi solo **modelli gratuiti** e stai visualizzando i dati relativi ai **costi** (possono essere pari a zero); i grafici con il numero di chiamate in **Riepilogo** necessitano comunque di dati relativi al periodo selezionato
- il **filtro temporale** selezionato non include il periodo in cui sono state effettuate le chiamate — prova con **Tutto** per verificare

Se i grafici rimangono vuoti dopo aver selezionato **Tutto**, verifica che le chiamate siano presenti nella sezione [**Cronologia**](#history) o nella scheda **Tutte le chiamate**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Il costo mostra "non disponibile" o sembra errato

Quando utilizzi modelli attraverso **OpenRouter**, l'applicazione mostra la spesa effettiva riportata da OpenRouter.

Per **altri provider** (OpenAI diretto, Anthropic diretto, ecc.), il costo è stimato in base ai dati tariffari pubblicati da OpenRouter. Se non viene trovato un prezzo corrispondente per un modello, il costo verrà visualizzato come **non disponibile** e non verrà aggiunto al totale cumulativo.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### Il costo totale non corrisponde al conto del mio fornitore

Tutte le cifre relative ai costi nell'app sono **stime fornite solo a titolo informativo**, non rappresentano fatturazioni ufficiali.

Per avvicinare il totale alla tua spesa reale su OpenRouter, apri [**Impostazioni** > **Tracciamento costi**](#cost-tracking) e fai clic su **Sincronizza con l'utilizzo della chiave API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### La pagina Cronologia è assente nella barra laterale

L'opzione **Mantieni la cronologia delle esecuzioni** potrebbe essere disattivata. Apri [**Impostazioni** > **Impostazioni generali**](#general-settings) e attivala. Tieni presente che l'attivazione non recupera i dati della cronologia precedentemente eliminati.

<br/>

<a id="web-app-session-expired"></a>

### Applicazione web: reindirizzamento imprevisto alla pagina di accesso

La tua sessione potrebbe essere scaduta. Effettua nuovamente l'accesso. Se il problema si verifica frequentemente, verifica la configurazione del server riguardo le impostazioni di durata della sessione.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Amministrazione web: password dimenticata o smarrita

Questa procedura si applica all'**applicazione web autogestita** (Docker), non all'app desktop (Electron).

- Se un altro amministratore può ancora accedere, può aprire [**Impostazioni** > **Utenti**](#users), selezionare l'account e impostare una **nuova password**.
- Se sei **bloccato fuori** ma hai **accesso shell** alla macchina o al contenitore, reimposta la password utilizzando lo script fornito nell'immagine (sostituisci `transrewrt` se hai modificato il nome predefinito, e racchiudi tra virgolette la password se contiene spazi o caratteri speciali):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Il nome utente predefinito dell'amministratore è `admin`, se non hai mai creato altri account. Quando viene fornito un solo argomento, questo viene considerato come la nuova password per l'utente `admin`.

Se stai eseguendo l'app da un **codice sorgente clonato** invece che da Docker, utilizza:

```bash
pnpm run reset-web-password -- <username> <new-password>

Lo script aggiorna il record dell'utente nel database SQLite (e può creare l'utente `admin` se mancante). Dopo il reset, accedi con la nuova password.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### Il cruscotto non mostra dati per altri utenti (web)

Solo gli **amministratori** possono visualizzare i dati di tutti gli utenti tramite il filtro **Utente**. Gli utenti normali vedono solo la propria attività per impostazione predefinita.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### Ho modificato un prompt e ho perso le modifiche

Quando si modifica un prompt, fare sempre clic su **Salva** prima di cliccare su **Torna all'esecuzione**.

<br/><br/>

<a id="quick-tips"></a>

## Consigli rapidi

- Inizia con [**Traduci**](#translate) per assicurarti che la configurazione funzioni correttamente prima di passare a [**Riformula**](#rewrite) o [**Trasforma**](#transform).
- Usa [**Riformula**](#rewrite) per miglioramenti quotidiani del testo.
- Usa [**Trasforma**](#transform) quando hai bisogno di un flusso di lavoro ripetibile per un compito specifico.
- Usa [**Dashboard**](#dashboard) se desideri monitorare l'utilizzo e i costi.
- Usa [**Cronologia**](#history) per rivedere le operazioni passate e il testo completo di input/output.
- Esporta regolarmente i prompt se stai creando una libreria di prompt da conservare in sicurezza (vedi [Prompt di trasformazione](#transform-prompts)) o se desideri condividerla con altri.

<br/><br/>

<a id="disclaimer"></a>

## Dichiarazione di non responsabilità

I nomi dei prodotti e le icone appartengono ai rispettivi proprietari e sono utilizzati esclusivamente a scopo identificativo. Questo software non è affiliato né sponsorizzato da nessuno dei marchi menzionati.

<br/><br/>

<a id="license"></a>

## Licenza

Copyright © 2026 Waldemar Scudeller Jr.

[Licenza Apache 2.0](LICENSE)