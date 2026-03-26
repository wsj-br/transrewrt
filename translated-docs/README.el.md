---
translated_at: "2026-03-26T00:37:53.475Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logo" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Έκδοση"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Άδεια: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Πλατφόρμα">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Εργαλείο κειμένου με ενίσχυση AI: μεταφράζει μεταξύ γλωσσών, ξαναγράφει σε διαφορετικές μορφές και το μετασχηματίζει μέσω προσαρμοσμένων εντολών — με χρήση πολλαπλών παρόχων AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI και τοπικού Ollama). Λειτουργεί ως εφαρμογή γραφείου (Electron) ή ως υποδοχήμενη εφαρμογή ιστού (Docker).

- **Μεταφράστε** — μεταξύ δεκάδων γλωσσών, με αυτόματον εντοπισμό της προέλευσης
- **Ξαναγράψτε** — διορθώστε γραμματική, βελτιώστε την ξεκάθαρη έκφραση, επίσημη/ανεπίσημη, συντομεύστε, επεκτείνετε, τεχνική αναδόμηση
- **Μετασχηματισμός** — προσαρμοσμένες εντολές AI· δημιουργία και διαχείριση εντολών, προαιρετική γλώσσα προορισμού ανά εντολή
- **Ιστορικό** — πλήρες ιστορικό εκτέλεσης με είσοδο/έξοδο κειμένου, φιλτράρισμα και εξαγωγή
- **Μοντέλα και κόστος** — επιλέξτε μοντέλα από όποιαδήποτε ρυθμισμένη πάροχο· ενδεικτικό πίνακα κόστους και χρήσης με αρχείο καταγραφής, συνοψίσεις ανά μοντέλο/λειτουργία/ημέρα
- **Διεπαφή** — πολύγλωσση διεπαφή (πάνω από 30 γλώσσες, υποστήριξη για RTL), γραμματοσειρές, ...
- **Λειτουργία ιστού** — υποστήριξη πολλαπλών χρηστών με ρόλους διαχείρισης
- **Εφαρμογή γραφείου** — εφαρμογή Electron για Windows και Linux
- **Αυτονομία διακομιστή** — εικόνα Docker για amd64 & arm64 (έτοιμη για Raspberry Pi)

Μετά την εγκατάσταση, ανατρέξτε στο **[Οδηγό Χρήσης](USER-GUIDE.el.md)** για πλήρη επίβλεψη όλων των χαρακτηριστικών.

<small>**Διαβάστε σε άλλες γλώσσες:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Σημείωση για τις μεταφράσεις διεπαφής και υλικού:** Όλες οι γλώσσες διεπαφής εκτός από το αρχικό Αγγλικά (ΗΒ)
> μεταφράστηκαν με τη βοήθεια μοντέλων AI· οι διατυπώσεις μπορεί να μην είναι ακριβείς ή να περιλαμβάνουν λάθη.

</small>

<br/>

<a id="screenshots"></a>
## Στιγμιότυπα Οθόνης

**Επιλογή γλώσσας**

![Επιλογή γλώσσας](../images/screenshots/el/language-selector.png)

**Μετάφραση**

![Μετάφραση](../images/screenshots/el/translate.png)

**Μετασχηματισμός - επεξεργαστής εντολών**

![Μετασχηματισμός - επεξεργαστής εντολών](../images/screenshots/el/transform-prompt-edit.png)

**Πίνακας ελέγχου**

![Πίνακας ελέγχου κόστους](../images/screenshots/el/dashboard-summary.png)

**Ιστορικό**

![Ιστορικό](../images/screenshots/el/history.png)

**Ρυθμίσεις - επιλογή μοντέλου**

![Ρυθμίσεις - επιλογή μοντέλου](../images/screenshots/el/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Πίνακας Περιεχομένων

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Γρήγορη εκκίνηση](#quick-start)
- [Εγκατάσταση](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Λήψη κλειδιού OpenRouter API](#getting-an-openrouter-api-key)
- [Διαμόρφωση και περιβάλλον](#configuration-and-environment)
- [Ανάπτυξη και αρχιτεκτονική](#development-and-architecture)
- [Εκδόσεις και ετικέτες](#releases-and-tags)
- [Συνεισφορά](#contributing)
- [Αποποίηση ευθυνών](#disclaimer)
- [Άδεια χρήσης](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Γρήγορη εκκίνηση

**Docker (συνιστάται για αυτοφιλοξενία)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Αντικαταστήστε το `sk-or-your-key` με το [κλειδί OpenRouter API](https://openrouter.ai/keys) σας (ή ρυθμίστε κλειδιά άλλων παρόχων· δείτε [Διαμόρφωση](#configuration-and-environment)). Ανοίξτε το [http://localhost:5000](http://localhost:5000) και αλλάξτε τον προεπιλεγμένο κωδικό διαχειριστή πριν εκθέσετε την υπηρεσία.

<br/>

> ℹ️ **ΣΗΜΕΙΩΣΗ**<br/>
> Στο Docker, τα πιστοποιητικά LLM ορίζονται μέσω μεταβλητών περιβάλλοντος όπως `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (όχι μέσω του περιβάλλοντος εργασίας ιστού). Στον υπολογιστή (Electron), ρυθμίζετε τα κλειδιά στο **Ρυθμίσεις → API**.

<br/>

**Windows**

Κατεβάστε το τελευταίο `Transrewrt Setup x.y.z.exe` από την ενότητα [Εκδόσεις](https://github.com/wsj-br/transrewrt/releases), εκτελέστε το πρόγραμμα εγκατάστασης και μετά ξεκινήστε την εφαρμογή από το μενού Εναρξη ή της συντόμευσης στην επιφάνεια εργασίας. Εισαγάγετε τα κλειδιά API σας στο **Ρυθμίσεις → API**. Πρέπει να ρυθμίσετε τουλάχιστον έναν πάροχο· το OpenRouter είναι συνηθισμένος για δωρεάν μοντέλα.

<br/>

**Linux**

Κατεβάστε το `.AppImage` για την CPU σας από την ενότητα [Εκδόσεις](https://github.com/wsj-br/transrewrt/releases) (`x64` για συνηθισμένους υπολογιστές, `arm64` για πολλές συσκευές ARM, συμπεριλαμβανομένου του Raspberry Pi 4+), και μετά:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Εισάγετε τα κλειδιά API σας στο **Ρυθμίσεις → API**. Πρέπει να ρυθμίσετε τουλάχιστον έναν πάροχο· το OpenRouter είναι συνηθισμένος για δωρεάν μοντέλα.

Σε Debian/Ubuntu, ίσως χρειαστεί να εγκαταστήσετε πρώτα επιπλέον εξαρτήσεις:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Δείτε [Εγκατάσταση → Linux](#linux-electron) για λεπτομέρειες.

<br/>

> ℹ️ **ΣΗΜΕΙΩΣΗ**<br/>
> Δεν υποστηρίζεται προς το παρόν το macOS. Το Transrewrt είναι διαθέσιμο για Windows, Linux και Docker.

<br/>

Όταν η εφαρμογή εκτελείται, ανατρέξτε στο **[Οδηγό Χρήστη](USER-GUIDE.el.md)** για να μάθετε πώς να μεταφράζετε, ξαναγράφετε και να μετασχηματίζετε κείμενα, να διαχειρίζεστε ερωτήματα και να ρυθμίζετε μοντέλα.

<br/><br/>

<a id="installation"></a>
## Εγκατάσταση

<a id="windows-electron"></a>
### Windows (Electron)

- Κατεβάστε το τελευταίο εγκατάσταση από την ενότητα [Εκδόσεις](https://github.com/wsj-br/transrewrt/releases).
- Εκτελέστε το αρχείο `.exe` και ακολουθήστε τις οδηγίες του προγράμματος εγκατάστασης.
- Πρώτη εκτέλεση: ξεκινήστε την εφαρμογή από το μενού Εναρξη ή από την συντόμευση στην επιφάνεια εργασίας.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Κατεβάστε το κατάλληλο `.AppImage` (`x64` ή `arm64`) από την ενότητα [Εκδόσεις](https://github.com/wsj-br/transrewrt/releases).
- Εκτελέστε: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` για x86_64/amd64, ή χρησιμοποιήστε το αρχείο `...-arm64.AppImage` σε ARM64.
- Επιπλέον εξαρτήσεις (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Δείτε [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) για περισσότερες πληροφορίες.

<br/>

<a id="docker"></a>
### Docker

- Λήψη: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Ορίστε τουλάχιστον ένα κλειδί παρόχου μέσω περιβάλλοντος (π.χ. `OPENROUTER_KEY` για το OpenRouter). Περάστε μεταβλητές με `-e` ή χρησιμοποιήστε `docker compose` / `.env` για να μην ενσωματωθούν τα μυστικά στην εικόνα.
- Τα κλειδιά παρόχων **δεν** εισάγονται στο διαδικτυακό περιβάλλον εργασίας· ο διακομιστής τα διαβάζει από το περιβάλλον.

Παράδειγμα: ονομαστή ένωση για διαρκή αποθήκευση (κλειδί OpenRouter μέσω env):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Επιλογή   | Περιγραφή                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Θύρα     | `5000` (χρησιμοποιήστε `-p 5000:5000` για απεικόνιση)                                                                              |
| Ένωση   | Προσαρτήστε το `/app/data` για διατήρηση επιλογών και βάσης δεδομένων                                                         |
| Μεταβλητές περιβάλλοντος | `PORT`, `CONFIG_PATH`, καθώς και κλειδιά LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - δείτε [Διαμόρφωση](#configuration-and-environment) |

Για δημιουργία και εκτέλεση από τον πηγαίο κώδικα: `docker compose up --build -d` ή `pnpm docker:up` - δείτε [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Λήψη κλειδιού API από το OpenRouter

Το Transrewrt υποστηρίζει πολλούς πάροχους τεχνητής νοημοσύνης. Το [OpenRouter](https://openrouter.ai) είναι μια δημοφιλής επιλογή επειδή συγκεντρώνει πολλά μοντέλα υπό ένα κλειδί και προσφέρει δωρεάν μοντέλα.

1. Εγγραφείτε ή συνδεθείτε στη διεύθυνση [openrouter.ai](https://openrouter.ai).
2. Ανοίξτε τη σελίδα [Keys](https://openrouter.ai/keys) και δημιουργήστε ένα νέο κλειδί (δώστε του όνομα και, προαιρετικά, ορίστε όριο πιστωτικού). Μπορείτε να χρησιμοποιήσετε δωρεάν μοντέλα χωρίς να προσθέσετε πίστωση.
3. **Desktop (Electron):** επικολλήστε τα κλειδιά στο **Ρυθμίσεις → API**. **Docker:** ορίστε μεταβλητές περιβάλλοντος όπως το `OPENROUTER_KEY` (δείτε [Γρήγορη έναρξη](#quick-start)).

Μην χρησιμοποιείτε το μοντέλο **Body Builder** του OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) για μετάφραση, αναδιατύπωση ή μετασχηματισμό: επιστρέφει JSON φορτία αιτήσεων, όχι το ολοκληρωμένο κείμενο για αυτές τις εργασίες. Δείτε [Ρυθμίσεις → Μοντέλα](USER-GUIDE.el.md#models) στον Οδηγό Χρήστη.

Μπορείτε επίσης να χρησιμοποιήσετε άλλους παρόχους (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ή να εκτελέσετε μοντέλα τοπικά με το [Ollama](https://ollama.com). Δείτε [Διαμόρφωση](#configuration-and-environment) για την πλήρη λίστα υποστηριζόμενων παρόχων και μεταβλητών περιβάλλοντος.

> ⚠️ **ΠΡΟΣΟΧΗ**<br/>
> Αν χρησιμοποιείτε Ollama από άλλη συσκευή, container ή υπηρεσία, θυμηθείτε να ρυθμίσετε το Ollama να επιτρέπει εξωτερικές συνδέσεις (όχι μόνο localhost).


Για όρια, BYOK και περισσότερα, δείτε [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Διαμόρφωση και περιβάλλον

**Τοποθεσίες αρχείων ρυθμίσεων**

| Εγκατάσταση         | Τοποθεσία ρυθμίσεων                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (χρησιμοποιήστε τόμο για να διαρκέσει) |

<br/>

**Μεταβλητές περιβάλλοντος** (μόνο web/Docker· το Electron χρησιμοποιεί το τοπικό αρχείο ρυθμίσεων)

| Μεταβλητή         | Προεπιλογή                 | Περιγραφή |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Θύρα ακρόασης διακομιστή |
| `CONFIG_PATH`    | `/app/data/config.json` | Διαδρομή προς το αρχείο ρυθμίσεων |
| `OPENROUTER_KEY` | *(κενό)*                 | Κλειδί API OpenRouter |
| `OPENAI_KEY`     | *(κενό)*                 | Κλειδί API OpenAI |
| `CEREBRAS_KEY`   | *(κενό)*                 | Κλειδί API Cerebras |
| `ANTHROPIC_KEY`  | *(κενό)*                 | Κλειδί API Anthropic |
| `GOOGLE_KEY`     | *(κενό)*                 | Κλειδί API Google Gemini |
| `DEEPSEEK_KEY`   | *(κενό)*                 | Κλειδί API DeepSeek |
| `GROQ_KEY`       | *(κενό)*                 | Κλειδί API Groq |
| `MISTRAL_KEY`    | *(κενό)*                 | Κλειδί API Mistral |
| `OLLAMA_URL`     | *(κενό)*                 | Βασικό URL Ollama (π.χ. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(κενό)*                 | Κλειδί API xAI |

Ρυθμίζετε μόνο τους παρόχους που χρησιμοποιείτε. Οι ταυτότητες μοντέλων είναι υπό χώρο ονομάτων (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, κλπ).

**Εμφάνιση κόστους:** Το OpenRouter επιστρέφει το ακριβές χρεωστέο κόστος όποτε ισχύει. Οι άλλοι πάροχοι χρησιμοποιούν **εκτιμώμενο** κόστος από τις δημόσιες τιμές μοντέλων του OpenRouter όταν υπάρχει κλειδί OpenRouter· χωρίς αυτό, το κόστος μη-OpenRouter μπορεί να εμφανίζεται ως `0`. Οι εκτιμήσεις δεν είναι τιμολόγια.

<br/>

**Δεδομένα και διαρκής αποθήκευση:** Για το Docker, προσαρτήστε έναν τόμο στο `/app/data` ώστε το `config.json` και η βάση δεδομένων SQLite να διατηρούνται μετά από επανεκκινήσεις κοντέινερ. Χωρίς τόμο, όλα τα δεδομένα χάνονται όταν σταματήσει το κοντέινερ.

**Προγραμματιστές:** Μετά τη λήψη αλλαγών που αντικαθιστούν την παλιά διαμόρφωση μονού κλειδιού, επαναφέρετε ή συγχωνεύστε το `data/config.json` με το νέο πρότυπο σχήμα από το `src/config-defaults/config_default.json` αν το τοπικό σας αρχείο χρησιμοποιεί ακόμη καταργημένα πεδία (`api_key`, `api_url`, επιλογές proxy).

<br/>

**Web πιστοποίηση:**

- Προεπιλεγμένος διαχειριστής: `admin` / `transrewrt26`.
- Διαχειριστείτε χρήστες στο **Ρυθμίσεις → Χρήστες**.
- Επαναφορά κωδικού: `docker exec <κοντέινερ> reset-web-password '<όνομα-χρήστη>' '<νέος-κωδικός>'`
  (από πηγή: `pnpm run reset-web-password -- <όνομα-χρήστη> <νέος-κωδικός>`)

<br/>

> ⚠️ **ΠΡΟΣΟΧΗ**<br/>
> Αλλάξτε αμέσως τον προεπιλεγμένο κωδικό διαχειριστή σε κάθε υπολογιστή με πρόσβαση στο δίκτυο.

<br/>

Οι βασικές ρυθμίσεις (γραμματοσειρά, μοντέλα, γλώσσες, κλπ.) είναι διαθέσιμες στις Ρυθμίσεις της εφαρμογής.

<br/><br/>

<a id="development-and-architecture"></a>

## Ανάπτυξη και αρχιτεκτονική

- **Ανάπτυξη:** Εγκατάσταση, δημιουργία, δοκιμές και αποτύπωση (Electron, Web, Docker) - δείτε **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Επισκόπηση αρχιτεκτονικής και συστήματος:** Δομή φακέλων, τεχνολογικό στοίβαγμα, σχεδιαστικές αποφάσεις - δείτε **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Εκδόσεις και ετικέτες

- Οι **ετικέτες Git** `v`* (π.χ. `v1.0.10`) ενεργοποιούν τη **ροή εργασίας αποτύπωσης** ([release workflow](.github/workflows/release.yml)). Οι **GitHub Εκδόσεις** περιλαμβάνουν τον εγκαταστάτη για Windows (`.exe`) και AppImages για Linux (**x64** και **arm64**).
- Οι **εικόνες Docker** δημοσιεύονται στο `ghcr.io/wsj-br/transrewrt`. Οι ετικέτες των εικόνων αντιστοιχούν στην έκδοση Git (π.χ. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) καθώς και η ετικέτα `latest`. Πολλαπλή αρχιτεκτονική: `linux/amd64` και `linux/arm64` (π.χ. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Συνεισφορά

1. Δημιουργήστε κλώνο του αποθετηρίου (fork).
2. Δημιουργήστε κλάδο χαρακτηριστικού: `git checkout -b feature/my-feature`
3. Καταχωρίστε τις αλλαγές σας με σαφή μήνυμα.
4. Μεταφορτώστε και δημιουργήστε μια αίτηση ανάληψης (Pull Request) προς τον `main`.

Ακολουθήστε τον υπάρχοντα τρόπο συγγραφής κώδικα και κάντε δοκιμές των αλλαγών σας και στις δύο λειτουργίες Electron και web πριν υποβάλετε. Δείτε το [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) για οδηγίες δημιουργίας και δοκιμών.

<br/>

**Αναφορά προβλημάτων:** Δημιουργήστε ένα ζήτημα (issue) στο [GitHub](https://github.com/wsj-br/transrewrt/issues). Συμπεριλάβετε το λειτουργικό σας σύστημα (Windows / Linux / Docker) και την έκδοση της εφαρμογής (που εμφανίζεται στο παράθυρο "Σχετικά" ή στη σελίδα εκδόσεων).

<br/><br/>

<a id="disclaimer"></a>
## Δήλωση αποποίησης ευθυνών

Τα ονόματα και τα εικονίδια προϊόντων ανήκουν στους αντίστοιχους ιδιοκτήτες τους και χρησιμοποιούνται αποκλειστικά για αναγνώριση. Αυτό το λογισμικό δεν έχει καμία σχέση με τις αναφερόμενες επωνυμίες ούτε υποστηρίζεται από αυτές.

<br/><br/>

<a id="license"></a>
## Άδεια

Πνευματικά δικαιώματα © 2026 Waldemar Scudeller Jr.

[Άδεια Apache 2.0](LICENSE)