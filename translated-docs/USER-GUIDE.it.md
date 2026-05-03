---
translation_last_updated: '2026-05-03T19:09:27.352Z'
source_file_mtime: '2026-05-03T18:57:44.574Z'
source_file_hash: 344c54a3a014452fb149b427480e26d09bb25eb0b408f4c2006d55ba1255579b
translation_language: it
source_file_path: USER-GUIDE.md
translation_models:
  - openai/gpt-4o-mini
  - qwen/qwen3-235b-a22b-2507
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Guida utente

<br/>

<a id="introduction"></a>
## Introduzione

Transrewrt ti aiuta a lavorare con il testo in tre modi principali:

- **Traduci** - converti il testo da una lingua all'altra.
- **Riscrivi** - riformula il testo in uno stile diverso, ad esempio più chiaro, più breve o più formale.
- **Trasforma** - elabora il testo utilizzando istruzioni personalizzate basate sull'intelligenza artificiale chiamate prompt.

<br/>

Questa guida spiega come utilizzare l'app una volta installata ed eseguita. Per i passaggi di installazione, consultare il file [**README**](README.it.md) principale.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt è disponibile come app desktop per Windows e Linux e come app web self-hosted. Questa guida si concentra sull'uso quotidiano dell'app. Quando qualcosa si applica solo a una versione, è chiaramente indicato.

<small>**Leggi in altre lingue:** </small>
<small id="lang-list">[English (GB)](../USER-GUIDE.md) · [Português (Brasil)](./USER-GUIDE.pt-BR.md) · [العربية](./USER-GUIDE.ar.md) · [বাংলা](./USER-GUIDE.bn.md) · [Català](./USER-GUIDE.ca.md) · [中文 (中国大陆)](./USER-GUIDE.zh-CN.md) · [中文 (台灣)](./USER-GUIDE.zh-TW.md) · [Hrvatski](./USER-GUIDE.hr.md) · [Čeština](./USER-GUIDE.cs.md) · [Nederlands](./USER-GUIDE.nl.md) · [English (US)](./USER-GUIDE.en-US.md) · [Tagalog](./USER-GUIDE.tl.md) · [Français](./USER-GUIDE.fr.md) · [Deutsch](./USER-GUIDE.de.md) · [Ελληνικά](./USER-GUIDE.el.md) · [हिन्दी](./USER-GUIDE.hi.md) · [Magyar](./USER-GUIDE.hu.md) · [Italiano](./USER-GUIDE.it.md) · [日本語](./USER-GUIDE.ja.md) · [한국어](./USER-GUIDE.ko.md) · [Bahasa Melayu](./USER-GUIDE.ms.md) · [فارسی](./USER-GUIDE.fa.md) · [Polski](./USER-GUIDE.pl.md) · [Basa Jawa](./USER-GUIDE.jv.md) · [Português](./USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](./USER-GUIDE.pa.md) · [Română](./USER-GUIDE.ro.md) · [Русский](./USER-GUIDE.ru.md) · [Slovenčina](./USER-GUIDE.sk.md) · [Español](./USER-GUIDE.es.md) · [Kiswahili](./USER-GUIDE.sw.md) · [Svenska](./USER-GUIDE.sv.md) · [తెలుగు](./USER-GUIDE.te.md) · [ไทย](./USER-GUIDE.th.md) · [Türkçe](./USER-GUIDE.tr.md) · [Українська](./USER-GUIDE.uk.md) · [Tiếng Việt](./USER-GUIDE.vi.md)</small>

<small>

> **Nota sulle traduzioni dell'interfaccia e della documentazione:** Tutte le lingue dell'interfaccia, eccetto l'inglese (GB) originale, 
> sono state tradotte mediante modelli di intelligenza artificiale; il testo potrebbe essere impreciso o contenere errori.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Indice**

- [Prima di iniziare](#before-you-start)
  - [Come ottenere una chiave API OpenRouter gratuita (app desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Per iniziare](#getting-started)
- [Parti principali della finestra](#main-parts-of-the-window)
  - [Barra laterale](#sidebar)
  - [Barra degli strumenti](#toolbar)
  - [Pannelli di input e output](#input-and-output-panels)
- [Traduci](#translate)
  - [Traduci testo](#translate-text)
  - [Selezione della lingua](#language-selection)
  - [Impostazioni utili per la traduzione](#helpful-translation-settings)
- [Riscrivi](#rewrite)
- [Trasforma](#transform)
  - [Esegui un prompt esistente](#run-an-existing-prompt)
  - [Se non hai ancora prompt](#if-you-have-no-prompts-yet)
  - [Crea rapidamente un prompt](#create-a-prompt-quickly)
  - [Modifica un prompt](#edit-a-prompt)
  - [Prova un prompt prima di usarlo](#test-a-prompt-before-using-it)
- [Dashboard](#dashboard)
  - [Filtra i dati](#filter-the-data)
  - [Schede della dashboard](#dashboard-tabs)
  - [Esporta dati](#export-data)
  - [Elimina i record memorizzati per un modello](#delete-stored-records-for-a-model)
- [Cronologia](#history)
  - [Filtra la cronologia](#filter-the-history)
  - [Esporta dati della cronologia](#export-history-data)
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
  - [Il risultato è troppo lento o troppo costoso](#the-result-is-too-slow-or-too-expensive)
  - [L'interfaccia è nella lingua sbagliata](#the-interface-is-in-the-wrong-language)
  - [Il testo è troppo piccolo o difficile da leggere](#the-text-is-too-small-or-hard-to-read)
  - [I grafici della dashboard sono vuoti](#dashboard-charts-are-empty)
  - [Il costo mostra "non disponibile" o sembra errato](#cost-shows-not-available-or-seems-wrong)
  - [Il costo totale non corrisponde al mio conto del provider](#total-cost-does-not-match-my-provider-bill)
  - [La pagina Cronologia manca nella barra laterale](#the-history-page-is-missing-from-the-sidebar)
  - [App web: reindirizzato alla pagina di accesso inaspettatamente](#web-app-redirected-to-the-login-page-unexpectedly)
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

Non è necessario selezionare un modello a pagamento per iniziare. Non appena aggiungi la tua chiave API di OpenRouter, l'app abilita automaticamente un'opzione **gratuita** integrata di OpenRouter. Ciò ti permette di iniziare subito a tradurre, riscrivere e trasformare il testo. In alternativa, puoi ottenere gratuitamente una chiave API da Cerebras, Google, Groq o Mistral AI.

In termini semplici:

- Un **modello** è il motore AI che svolge il lavoro. I modelli sono elencati con un **prefisso del provider** (ad esempio `openrouter/…`, `openai/…`, `ollama/…`).
- Una **chiave API** (o, per Ollama, un **URL di base**) è il modo in cui l'app raggiunge il provider.

Se stai utilizzando l'**app desktop**, aggiungi le chiavi in [**Impostazioni** > **Configurazione API**](#api-config) per ogni provider che utilizzi. Per l'uso esclusivo di OpenRouter, consulta [Come ottenere una chiave API](#how-to-get-an-api-key-desktop-app) di seguito. Se non desideri utilizzare una chiave API, puoi installare Ollama (da [ollama.com](https://ollama.com)) e usare modelli locali, come `translategemma:4b`.

Se stai utilizzando la **versione web**, il proprietario del server configura i provider tramite variabili d'ambiente, quindi non puoi inserire direttamente le chiavi API nell'applicazione.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Come ottenere una chiave API gratuita di OpenRouter (app desktop)

Se stai utilizzando l'app desktop, segui questi passaggi:

1. Vai su [OpenRouter](https://openrouter.ai) dal tuo browser web.
2. Crea un account o accedi.
3. Apri la pagina [Keys](https://openrouter.ai/keys).
4. Clicca sul pulsante per creare una nuova chiave API.
5. Assegna un nome alla chiave in modo da poterla riconoscere in seguito.
6. Copia la nuova chiave API.
7. Torna a Transrewrt e apri **Impostazioni** > **Configurazione API**.
8. Incolla la chiave nel campo **OpenRouter API key** (sotto **Impostazioni** > **Configurazione API**).
9. Clicca su **Test OpenRouter key** per verificare che funzioni.

<br/><br/>

<a id="getting-started"></a>
## Per iniziare

Se è la prima volta che utilizzi Transrewrt, segui questo ordine:

1. Apri l'app.
2. Se necessario, scegli la tua **Lingua dell'interfaccia** dall'icona del globo.
3. Se utilizzi l'**app desktop**, apri [**Impostazioni** > **Configurazione API**](#api-config), aggiungi una chiave API per almeno un provider (ad esempio OpenRouter) e clicca su **Test** per verificarne il funzionamento.
4. Apri [**Impostazioni** > **Modelli**](#models) e aggiungi uno o più modelli ai **Modelli selezionati**.
5. Apri [**Impostazioni** > **Lingue**](#languages) e scegli le tue **Lingue principali** se desideri che le lingue più utilizzate appaiano per prime.
6. Vai su **Traduci** ed esegui una traduzione semplice per verificare che tutto funzioni correttamente.
7. Una volta verificato, prova **Riscrivi** e poi **Trasforma**.

Questo ordine è importante. Evita il problema più comune per i nuovi utenti: tentare di eseguire un'attività prima che l'app abbia una connessione API funzionante o un modello selezionato.

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

Usa la barra laterale per spostarti all'interno dell'app. Puoi comprimere la barra laterale per ottenere più spazio cliccando sull'icona accanto al logo dell'app.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/it/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Traduci</strong> apre l'area di lavoro di traduzione.</li><br/>
        <li><strong>Riscrivi</strong> apre l'area di lavoro di riscrittura.</li><br/>
        <li><strong>Trasforma</strong> apre l'area di lavoro con prompt personalizzato.</li><br/>
        <li><strong>Dashboard</strong> mostra informazioni sull'utilizzo e sui costi.</li><br/>
        <li><strong>Impostazioni</strong> apre il pannello delle impostazioni.</li><br/>
        <li><strong>Cronologia</strong> mostra la cronologia di utilizzo con il testo in input e in output</li><br/>
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
- A destra, mostra il **selettore del modello** e il controllo della **Lingua dell'interfaccia**.

Il **selettore del modello** ti permette di scegliere quale motore AI utilizzare per l'attività corrente.

![Model selector](../images/screenshots/it/model-selector.png)

Alcuni modelli gratuiti potrebbero non essere sempre disponibili: a volte sono offline o hanno un limite di utilizzo. In questo caso, l'app rimuoverà automaticamente quel modello dall'elenco disponibile. Per controllare quali modelli vengono visualizzati, vai a [**Impostazioni** > **Modelli**](#models) e modifica la tua lista di modelli.
 Puoi anche aprire direttamente le impostazioni del modello cliccando sull'icona del provider a sinistra del nome del modello nella barra degli strumenti.

<br/>

L'**icona del globo + codice della lingua** modifica la lingua dell'interfaccia dell'app, come menu e pulsanti. **Non** modifica le lingue di traduzione utilizzate in **Traduci**.

![Interface language selector](../images/screenshots/it/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Pannelli di input e output

La maggior parte delle aree di lavoro utilizza un pannello **Input** a sinistra e un pannello **Output** a destra.

Ogni pannello mostra inoltre:

| **Input**                                                          | **Output**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Conteggio caratteri <br/>- Conteggio parole <br/>- Conteggio paragrafi   <br/> | - Tempo impiegato per l'operazione<br/>- **TPS** (token al secondo)<br/>- Conteggi di caratteri, parole e paragrafi<br/>- Modello utilizzato |

Se hai dubbi sui termini tecnici:

- **Token** indica un frammento di testo. Puoi pensarlo come una parte di parola o una parola breve.
- **TPS** indica quanti di questi frammenti di testo il modello ha elaborato ogni secondo.

<br/>

Puoi inoltre monitorare il costo di ogni operazione (se disponibile) e il costo totale, abilitando l'opzione `Show cost information on the actions` in [**Impostazioni** > **Impostazioni generali**](#general-settings).

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
5. Digita o incolla del testo in **Input**.
6. Fai clic su **Traduci**.
7. Leggi il risultato in **Output**.
8. Usa il pulsante di copia se desideri copiare il risultato.

<br/>

<a id="language-selection"></a>
### Selezione della lingua

- **Da** può essere una lingua specifica o **Rileva lingua**.
- **A** è la lingua in cui vuoi ottenere il risultato.

Le tue **Lingue principali** selezionate appaiono in alto nell'elenco. Puoi impostarle in [**Impostazioni** > **Lingue**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Impostazioni utili per la traduzione

In [**Impostazioni** > **Impostazioni generali**](#general-settings), puoi modificare il comportamento della traduzione:

- **Traduzione automatica al momento dell'incolla** esegue automaticamente una traduzione non appena incolli del testo.
- **Copia automaticamente il risultato negli appunti** copia automaticamente il risultato al termine dell'elaborazione.
- **Traduzione in tempo reale (durante la digitazione)** esegue traduzioni mentre digiti.
- **Timeout (ms)** regola per quanto tempo l'app attende prima di eseguire una traduzione in tempo reale.
- **Invio** controlla cosa accade quando premi `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Riscrivi

Usa **Riscrivi** quando desideri migliorare l'espressione senza cambiarne il significato principale.

![Rewrite workspace](../images/screenshots/it/rewrite.png)

Questa funzione è utile per:

- correggere ortografia e grammatica (**Controllo ortografico e grammaticale**)
- rendere il testo più chiaro (**Migliora chiarezza**)
- ottenere diverse riformulazioni distinte in un'unica esecuzione (**Versioni alternative**)
- rendere il testo più formale o meno formale (**Formale** / **Informale**)
- accorciare o espandere il testo (**Accorcia** / **Espandi**)
- rendere il testo più tecnico (**Rendi tecnico**)

<br/>

> 💡 **CONSIGLIO**<br/>
> Quando utilizzi la modalità "**Controllo ortografico e grammaticale**", nel pannello di output appare un interruttore **Mostra modifiche** (accanto a **Copia**).
> Attivalo o disattivalo per mostrare o nascondere le correzioni specifiche applicate al testo.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Trasforma

Usa **Trasforma** quando desideri che l'IA segua un insieme personalizzato di istruzioni.

![Transform workspace](../images/screenshots/it/transform.png)

Questa è l'area più flessibile dell'app. Puoi utilizzarla per attività come:

- riassumere appunti
- trasformare un testo grezzo in un'email curata
- estrarre i punti chiave
- convertire il testo in un formato specifico
- qualsiasi altra attività personalizzata sul testo in input

<br/>

<a id="run-an-existing-prompt"></a>
### Esegui un prompt esistente

1. Apri **Trasforma**.
2. Scegli un prompt dall'elenco dei prompt.
3. Se appare una casella per la lingua **Destinazione**, scegli una lingua se lo desideri.
4. Digita o incolla il testo in **Input**.
5. Fai clic su **Trasforma**.
6. Leggi il risultato in **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Se non hai ancora prompt

Se l'elenco dei tuoi prompt è vuoto, fai clic su **Carica prompt di esempio** nell'area di lavoro Trasforma. Lo stesso controllo è sempre disponibile in [**Impostazioni** > **Prompt di Trasformazione**](#transform-prompts) nella riga di esportazione/importazione. Entrambi aggiungono esempi predefiniti in modo da poter iniziare rapidamente.

<br/>

> ℹ️ **NOTA**<br/>
> I prompt di esempio sono forniti in inglese. Dopo averli caricati, puoi modificare un prompt e utilizzare **Traduci prompt** per tradurlo nella tua lingua.

<br/>

<a id="create-a-prompt-quickly"></a>
### Crea un prompt rapidamente

Il modo più veloce per creare un prompt è:

1. Fai clic su **Nuovo prompt**.
2. Fai clic su **Genera prompt**.
3. Descrivi cosa vuoi che il prompt faccia.
4. Scegli un modello.
5. Lascia che l'app crei una bozza per te.
6. Rivedi la bozza e fai clic su **Salva**.

![Generate prompt](../images/screenshots/it/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Modifica un prompt

Quando crei o modifichi un prompt, l'editor appare a sinistra e un'area di test appare a destra.

![Transform prompt editor](../images/screenshots/it/transform-prompt-edit.png)

I campi principali sono:

- **Nome del prompt**: il nome mostrato nell'elenco dei prompt.
- **Istruzioni del prompt (opzionale)**: un breve suggerimento visualizzato all'utente durante l'esecuzione del prompt.
- **Ruolo del modello**: il ruolo generale assegnato all'IA, come 'Sei un assistente utile.'
- **Istruzioni del modello (una per riga)**: le regole specifiche che desideri che l'IA segua.
- **Descrizione output**: una parola breve che descrive il risultato, come 'riepilogo' o 'riscrivi'.
- **Temperatura (0,0 → 1,0)**: come si comporterà il modello; vedi sotto.
- **Chiedi la lingua di destinazione**: aggiunge un selettore di lingua di destinazione quando il prompt viene eseguito.

Se il termine tecnico **Temperatura** è nuovo per te, pensalo in questo modo:

- Una temperatura **più bassa** fornisce risultati più stabili e prevedibili.
- Una temperatura **più alta** offre maggiore varietà e creatività.

Puoi anche utilizzare:

- `Generate prompt` per creare una nuova bozza da una descrizione semplice
- `Improve prompt` per affinare un prompt esistente
- `Translate prompt` per tradurre i campi del prompt

<br/>

> ⚠️ **ATTENZIONE**<br/>
> Fai clic su `Save` prima di fare clic su `Back to Run`. Se torni indietro senza salvare, le tue modifiche andranno perse.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Testa un prompt prima di usarlo

Il pannello di test a destra ti consente di provare il tuo prompt con un testo di esempio prima di utilizzarlo nel lavoro quotidiano.

Questo è utile quando:

- stai creando un nuovo prompt
- stai confrontando due versioni di un prompt
- desideri verificare il tono, la lunghezza o il formato dell'output

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
> Se utilizzi solo modelli **gratuiti**, gli importi del **costo** potrebbero essere zero e i riepiloghi basati sui costi potrebbero apparire vuoti. In **Riepilogo**, **Utilizzo nel tempo** e **Utilizzo per modello** mostrano comunque il **numero di chiamate** (traduci, riscrivi e trasforma) quando hai attività nel periodo selezionato.

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
### Schede della Dashboard

- **Riepilogo** fornisce una panoramica dell'utilizzo e del costo. Include **Utilizzo nel tempo** (numero cumulativo di **chiamate** giornaliere suddivise per traduzione, riscrittura e trasformazione) e **Utilizzo per modello** (totale **chiamate per modello**, inclusa la trasformazione).
- **Per utilizzo** suddivide l'attività per lingua di traduzione, modalità di riscrittura e prompt di trasformazione.
- **Per modello** mostra quali modelli hai utilizzato e quanto ti sono costati.
- **Per giorno** mostra i totali giornalieri.
- **Tutte le chiamate** mostra la cronologia completa delle chiamate e ti consente di esportarla.

<br/>

<a id="export-data"></a>
### Esporta dati

Le tabelle della dashboard possono esportare i dati nei formati:

- **JSON**
- **CSV**
- **XLSX**

Questa funzione è utile se desideri esaminare l'attività al di fuori dell'app o condividere un rapporto.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Elimina i record memorizzati per un modello

In **Per modello** o **Tutte le chiamate**, puoi rimuovere i record memorizzati per un modello facendo clic sull'icona del "cestino".

> ⚠️ **ATTENZIONE**<br/>
> L'eliminazione dei record memorizzati non può essere annullata. Utilizza questa funzione solo se sei sicuro di non aver più bisogno di quella cronologia.

Per eliminare tutti i dati o rimuovere i record in base alla loro età, vai a [**Impostazioni** > **Monitoraggio costi**](#cost-tracking). Lì troverai le opzioni per eliminare tutti i dati archiviati o solo i dati più vecchi di una certa data.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Cronologia

Fai clic su **Cronologia** per visualizzare la cronologia delle tue azioni all'interno di **Transrewrt**, inclusi l'input e l'output di ogni operazione.

![History page](../images/screenshots/it/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtra la cronologia

**Cronologia** utilizza gli stessi filtri della pagina **Dashboard**. Usali per selezionare l'intervallo di tempo.

![Dashboard filters](../images/screenshots/it/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> Il filtro **Utente** è visibile solo agli amministratori nella versione web. Gli utenti normali non vedranno questo filtro, che non è disponibile nell'app desktop.

<br/>

<a id="export-history-data"></a>
### Esporta i dati della cronologia

La pagina della cronologia può esportare i dati filtrati nei seguenti formati:

- **JSON**
- **CSV**
- **XLSX**

Questa funzione è utile se desideri esaminare l'attività al di fuori dell'app o condividere un rapporto.

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
  | Monitoraggio costi     |   sì   |     sì     |         -          |
  | Prompt di trasformazione |   sì   |     sì     |        sì         |
  | Utenti             |    -    |     sì     |         -          |
  | Configurazione API        |   sì   |     sì     |         -          |
  | Informazioni             |   sì   |     sì     |        sì         |

<br/>

> ℹ️ **NOTA**<br/>
> Nella versione web, ogni utente ha la propria configurazione. Impostazioni come modelli selezionati, lingue, opzioni generali e prompt di trasformazione sono memorizzate per singolo utente. Le modifiche che apporti non influiscono sugli altri utenti.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Impostazioni generali

Usa **Impostazioni generali** per controllare il comportamento della tastiera, se i dettagli di esecuzione vengono salvati nella **Cronologia** e l'aspetto.

**Comportamento**

- **Comportamento per ENTER** consente di scegliere se `Enter` esegue l'attività o inserisce una nuova riga.
- **Traduzione automatica al momento dell'incolla** avvia la traduzione non appena incolli del testo.
- **Copia automaticamente il risultato negli appunti** copia automaticamente i risultati riusciti.
- **Traduzione in tempo reale (durante la digitazione)** traduce mentre digiti.
- **Timeout (ms)** imposta il tempo di attesa per la traduzione in tempo reale.

**Cronologia**

- **Mantieni la cronologia di esecuzione** controlla se ogni operazione di traduzione, riscrittura e trasformazione memorizzi il **testo in input e output** per la visualizzazione della [**Cronologia**](#history) nel pannello laterale. Disattivandola verrà richiesta una conferma; se confermi, il testo della cronologia salvato verrà rimosso dal database.
- **Elimina dati cronologia** ti permette di rimuovere il testo memorizzato in base all'età (ad esempio più vecchio di alcuni mesi, o **tutti i dati (cancella)**) usando **Elimina dati**. Questo influisce solo sul testo di esecuzione salvato per la vista **Cronologia**; **non** elimina i totali relativi a costi o utilizzo. Per rimuovere o ridurre i dati relativi ai **costi**, usa [**Impostazioni** > **Monitoraggio costi**](#cost-tracking).

**Aspetto**

- **Mostra informazioni sui costi nelle azioni** controlla la visualizzazione del costo per operazione (se disponibile) e del costo totale nei pannelli di output di Traduci, Riscrivi e Trasforma.
- **Cifre decimali del costo** modifica la visualizzazione delle cifre decimali del costo.
- **Solo web:** **mostra un margine intorno all'app** aggiunge spazio extra intorno all'interfaccia.
- **Famiglia caratteri** modifica il carattere utilizzato nei pannelli di testo.
- **Dimensione** modifica la dimensione del carattere.

**Backup configurazione**

- **Includi i dati di utilizzo nel backup** - se abilitato, il file ZIP contiene anche la cronologia di esecuzione e i dati delle chiamate API.
- **Esegui backup configurazione** - crea un singolo file ZIP (di default `transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` in UTC) contenente `config.json`, `state.json`, chiave di crittografia opzionale, utenti, preferenze, prompt personalizzati e dati di utilizzo se hai scelto di includerli. Al termine del backup, la conferma mostra il nome del file salvato.
- **Ripristina da backup** - apre prima un **dialogo di conferma**. Scegli il file ZIP di backup all'interno del dialogo (**Sfoglia** / selettore file o trascinamento, dove supportato), quindi verifica le opzioni:
  - **Ripristina i dati di utilizzo** - importa dati di utilizzo/cronologia dal file ZIP se era stato eseguito il backup includendo i dati di utilizzo; lascia disattivato se desideri solo impostazioni e prompt.
  - **Cancella i vecchi dati di utilizzo prima del ripristino** - rimuove i dati di utilizzo/cronologia esistenti su questa installazione prima di applicare il backup (opzionale; utilizza quando desideri un rimpiazzo pulito).

I backup creati nella versione web o desktop possono essere ripristinati nell'altra. Quando si ripristina un backup desktop nella versione web, i dati verranno ripristinati per l'utente amministratore.

<br/>

<a id="models"></a>
### Modelli

Usa **Impostazioni** > **Modelli** per scegliere quali modelli vengono visualizzati nella barra degli strumenti.

![Settings Models tab](../images/screenshots/it/settings-models.png)

La pagina contiene due elenchi:

- **Modelli disponibili** a sinistra
- **Modelli selezionati** a destra

I controlli utili includono:

- **Cerca modelli...** per trovare un modello per nome
- **Provider** per restringere l'elenco a un motore (OpenRouter, OpenAI, Ollama, …)
- **Solo gratuiti** per mostrare solo i modelli gratuiti
- **Aggiorna** per ricaricare l'elenco
- **Espandi tutto** e **Comprimi tutto** quando ordini per provider

Gli ID dei modelli includono il prefisso del provider (ad esempio `openrouter/…` rispetto a `openai/…`). Badge come **OpenAI (OpenRouter)** rispetto a **OpenAI (diretto)** indicano come viene instradato il traffico.

> ℹ️ **NOTA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) è un modello router, non un modello di chat generale: la sua risposta è JSON che descrive i corpi delle richieste all'API OpenRouter (ad esempio un array `requests` con `model` e `messages`). Se lo usi per **Traduci**, **Riscrivi** o **Trasforma**, il pannello di output mostrerà quel JSON invece del testo finito. Scegli un modello di testo normale per queste attività. Consulta la [pagina del modello Body Builder](https://openrouter.ai/openrouter/bodybuilder) su OpenRouter.

Azioni:

- Per aggiungere un modello, fai clic su **Aggiungi** o ovunque nella voce.

- Per rimuovere un modello, fai clic su **X** accanto ad esso in **Modelli selezionati** o su **Selezionati** nella voce nei Modelli disponibili.

- Per cancellare l'elenco, fai clic su **Deseleziona tutto**. Il modello gratuito obbligatorio rimarrà nell'elenco.

<br/>

> ℹ️ **NOTA**<br/>
> Se non desideri aggiungere crediti a OpenRouter immediatamente, inizia abilitando **Solo gratuiti** e scegliendo i modelli gratuiti (nessuna carta di credito richiesta). Puoi anche usare Ollama per eseguire modelli in locale senza alcuna chiave API.

<br/>

<a id="languages"></a>
### Lingue

Usa **Impostazioni** > **Lingue** per organizzare gli elenchi di lingue utilizzati nell'app.

- Le **lingue principali** sono fissate in alto negli elenchi di lingue in **Traduci** e **Trasforma**.
- **Linguaggio personalizzato** ti permette di aggiungere una lingua non presente nell'elenco predefinito.

Se aggiungi una lingua personalizzata, essa apparirà nei selettori di lingua insieme alle opzioni predefinite.

<br/>

<a id="cost-tracking"></a>
### Monitoraggio costi

Usa **Impostazioni** > **Monitoraggio costi** per gestire le informazioni sui costi.

- **Costo totale** mostra il totale aggiornato.
- **Copia valore** copia il totale negli appunti.
- **Reimposta costo** reimposta il totale memorizzato a zero.
- **Sincronizza con l'utilizzo della chiave API** imposta il totale in base all'utilizzo riportato dal tuo account OpenRouter (solo OpenRouter).
- **Utilizzo chiave API** mostra i dettagli di utilizzo di OpenRouter, se disponibili.
- **Elimina dati sui costi** rimuove tutti i dati o solo le voci anteriori alla data selezionata.

**Monitoraggio costi:** Quando utilizzi modelli OpenRouter, l'app mostra il tuo utilizzo effettivo e le spese basandosi sulle informazioni di costo di OpenRouter. Per tutti gli altri provider, l'app stima i costi utilizzando i prezzi pubblicati da OpenRouter; se un prezzo non è disponibile, la stima potrebbe essere zero.

<br/>

> ℹ️ **NOTA**<br/>
> **Tutte le cifre relative ai costi sono stime solo a scopo informativo, non costituiscono fatture ufficiali.**

<br/>

> ⚠️ **ATTENZIONE**<br/>
> L'eliminazione dei dati non può essere annullata. Prima di eliminare, assicurati di eseguire il backup dei tuoi dati o di esportarli tramite [**Cronologia**](#history)
> o [**Dashboard** > **Tutte le chiamate**](#dashboard-tabs), altrimenti andranno persi definitivamente.
> Tutta la cronologia di input/output relativa a ogni voce della chiamata API verrà eliminata.

<br/>

<a id="transform-prompts"></a>
### Prompt di trasformazione

Usa **Impostazioni** > **Prompt di trasformazione** per gestire i prompt in blocco.

Puoi:

- visualizzare i prompt salvati
- eliminare prompt
- importare prompt da un file
- esportare prompt per il backup o da condividere
- caricare prompt di esempio nell'elenco dei prompt

<br/>

<a id="users"></a>
### Utenti

Usa **Utenti** per gestire gli account utente nella versione web. Puoi aggiungere utenti, aggiornarne i dettagli, reimpostare le password ed eliminare account.

<br/>

<a id="api-config"></a>
### Configurazione API

I provider supportati sono: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e **Ollama** (modelli locali tramite un URL base). Devi configurare solo i provider che utilizzi.

**Applicazione web: solo amministratore**

Le chiavi API sono configurate tramite variabili d'ambiente di sistema o Docker: non vengono inserite nell'interfaccia web. Questa pagina mostra per quali provider è stata configurata una chiave e ti permette di testarli cliccando sul pulsante `Test`.

<br/>

> ℹ️ **NOTA**<br/>
> Per modificare una chiave API, aggiorna la variabile d'ambiente nella configurazione del sistema o di Docker e riavvia il server o il contenitore.

<br/>

> ℹ️ **NOTA**<br/>
> I **backup della configurazione** (vedi [**Impostazioni generali** → Backup configurazione](#general-settings)) possono incorporare chiavi provider **risolte** all'interno del file `config.json` del file ZIP. Il ripristino di quel file ZIP **non** copia tali chiavi nel file di configurazione persistente del server: le chiavi attive provengono comunque dall'ambiente e dallo stato del file esistente, come descritto lì.

<br/>

**Applicazione desktop**

Usa **Configurazione API** per memorizzare le chiavi API per ciascun provider utilizzato. Per Ollama, inserisci l'**URL base** invece di una chiave API.

<br/>

> 💡 **Suggerimento** <br/>
> Se non desideri utilizzare una chiave API o pagare per l'utilizzo, puoi [scaricare Ollama](https://ollama.com) ed eseguire modelli (come `translategemma:4b`) localmente sul tuo computer gratuitamente. In alternativa, puoi creare un account OpenRouter gratuito (senza carta di credito) per utilizzare i loro modelli gratuiti, oppure ottenere una chiave API gratuita da Cerebras, Google, Groq o Mistral AI.

<br/>

- Aggiungi solo i provider necessari. In **Impostazioni** > **Modelli**, ogni ID modello inizia con il provider (ad esempio `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Per aggiungere una chiave API, inserisci il valore nel campo di testo e clicca su `Save`. Per sostituire una chiave esistente, clicca su `Edit`. Per verificare che una chiave funzioni, clicca su `Test`. Per l'URL base di Ollama, clicca sempre su `Test` per verificare la connessione.

<br/>

> ℹ️ **NOTA**<br/>
> Non puoi visualizzare il valore attuale di una chiave API. Puoi solo sostituirla utilizzando il pulsante `Edit`.
> Le chiavi API sono memorizzate in forma crittografata nella configurazione.

<br/>

<a id="about"></a>
### Informazioni

La scheda **Informazioni** mostra:

- il nome dell'app
- il numero di versione
- la data di build
- un collegamento al repository del progetto

<br/><br/>

<a id="common-issues"></a>
## Problemi comuni

Se qualcosa non funziona come previsto, controlla innanzitutto i seguenti punti.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### L'app non traduce, riscrive o trasforma il testo

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
- attiva **Solo gratuiti**
- aggiungi uno o più modelli a **Modelli selezionati**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Il risultato è troppo lento o troppo costoso

Prova una o più delle seguenti azioni:

- scegli un modello diverso
- utilizza un input più breve
- disattiva **Traduzione in tempo reale (durante la digitazione)** in [**Impostazioni** > **Impostazioni generali**](#general-settings)
- utilizza modelli gratuiti per compiti semplici (vedi [Modelli](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### L'interfaccia è nella lingua sbagliata

Fai clic sull'icona del globo nella [barra degli strumenti](#toolbar) e scegli la **Lingua dell'interfaccia** desiderata.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Il testo è troppo piccolo o difficile da leggere

Apri [**Impostazioni** > **Impostazioni generali**](#general-settings) e modifica:

- **Famiglia di caratteri**
- **Dimensione**

<br/>

<a id="dashboard-charts-are-empty"></a>
### I grafici della Dashboard sono vuoti

Questo è normale se:

- utilizzi solo **modelli gratuiti** e stai visualizzando i dati relativi al **costo** (potrebbero essere zero); i grafici del numero di **utilizzo** delle chiamate nella scheda **Riepilogo** necessitano comunque di dati del periodo selezionato
- il **filtro temporale** selezionato non include il periodo in cui sono state effettuate le chiamate: prova con **Tutto** per verificare

Se i grafici risultano ancora vuoti dopo aver selezionato **Tutto**, verifica che le chiamate siano presenti nella sezione [**Cronologia**](#history) o nella scheda **Tutte le chiamate**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Il costo mostra "non disponibile" o sembra errato

Quando utilizzi modelli tramite **OpenRouter**, l'app mostra la spesa effettiva riportata da OpenRouter.

Per **altri provider** (OpenAI diretto, Anthropic diretto, ecc.), il costo è stimato in base ai dati tariffari pubblicati da OpenRouter. Se non viene trovato un prezzo corrispondente per un modello, il costo verrà visualizzato come **non disponibile** e non sarà aggiunto al totale cumulativo.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Il costo totale non corrisponde alla fattura del provider

Tutte le cifre relative ai costi nell'app sono **stime a solo scopo informativo**, non rappresentano fatture ufficiali.

Per avvicinare il totale alla spesa effettiva su OpenRouter, apri [**Impostazioni** > **Monitoraggio costi**](#cost-tracking) e clicca su **Sincronizza con l'utilizzo della chiave API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### La pagina Cronologia manca nella barra laterale

Potrebbe essere disattivata l'opzione **Mantieni la cronologia di esecuzione**. Apri [**Impostazioni** > **Impostazioni generali**](#general-settings) e abilitala. Nota che l'attivazione non ripristina i dati della cronologia precedentemente eliminati.

<br/>

<a id="web-app-session-expired"></a>
### App web: reindirizzamento imprevisto alla pagina di accesso

La sessione potrebbe essere scaduta. Accedi nuovamente. Se il problema si verifica frequentemente, verifica la configurazione del server per le impostazioni della durata della sessione.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Amministrazione web: password dimenticata o persa

Questo si applica all'**app web self-hosted** (Docker), non all'app desktop (Electron).

- Se un altro amministratore può ancora accedere, può aprire [**Impostazioni** > **Utenti**](#users), selezionare l'account e impostare una **nuova password**.
- Se sei **bloccato fuori** ma hai **accesso shell** alla macchina o al container, reimposta la password utilizzando l'helper fornito con l'immagine (sostituisci `transrewrt` se hai modificato il nome predefinito, e racchiudi tra virgolette la password se contiene spazi o caratteri speciali):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Il nome utente predefinito dell'amministratore è `admin` se non hai mai creato altri account. Quando viene fornito un solo argomento, viene trattato come nuova password per `admin`.

Se esegui da un **checkout del codice sorgente** invece che da Docker, utilizza:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Lo script aggiorna il record utente nel database SQLite (e può creare l'utente `admin` se mancante). Dopo il ripristino, accedi con la nuova password.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### La Dashboard non mostra dati per altri utenti (web)

Solo gli **amministratori** possono visualizzare i dati di tutti gli utenti tramite il filtro **Utente**. Per impostazione progettata, gli utenti normali vedono solo la propria attività.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Ho modificato un prompt e ho perso le modifiche

Quando modifichi un prompt, fai sempre clic su **Salva** prima di fare clic su **Torna a Esegui**.

<br/><br/>

<a id="quick-tips"></a>
## Suggerimenti rapidi

- Inizia con [**Traduci**](#translate) per assicurarti che la configurazione funzioni prima di passare a [**Riscrivi**](#rewrite) o [**Trasforma**](#transform).
- Usa [**Riscrivi**](#rewrite) per migliorare quotidianamente il testo.
- Usa [**Trasforma**](#transform) quando hai bisogno di un flusso di lavoro ripetibile per un compito specifico.
- Usa [**Dashboard**](#dashboard) se desideri monitorare l'utilizzo e il costo.
- Usa [**Cronologia**](#history) per rivedere le operazioni precedenti e il testo completo di input/output.
- Esporta i prompt regolarmente se stai creando una libreria di prompt che desideri mantenere al sicuro (vedi [Prompt di trasformazione](#transform-prompts)) o se desideri condividerla con altri.

<br/><br/>

<a id="disclaimer"></a>
## Dichiarazione di non responsabilità

I nomi dei prodotti e le icone appartengono ai rispettivi proprietari e sono utilizzati solo a scopo identificativo. Questo software non è affiliato né approvato da nessuno dei marchi menzionati.

<br/><br/>

<a id="license"></a>
## Licenza

Diritti d'autore © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
