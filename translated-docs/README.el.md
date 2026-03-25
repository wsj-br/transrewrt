---
translated_at: "2026-03-25T22:13:18.495Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Λογότυπο Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Έκδοση"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Άδεια: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Πλατφόρμα">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Εργαλείο κειμένου με υποστήριξη τεχνητής νοημοσύνης: μετάφραση μεταξύ γλωσσών, αναδιατύπωση σε διαφορετικά ύφη και μετασχηματισμός με προσαρμοσμένες ερωτήσεις — χρησιμοποιώντας πολλαπλούς παρόχους τεχνητής νοημοσύνης (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI και τοπικό Ollama). Λειτουργεί ως εφαρμογή επιφάνειας εργασίας (Electron) ή ως εγκατεστημένη σε server ιστοεφαρμογή (Docker).

- **Μετάφραση** — μεταξύ δεκάδων γλωσσών, με αυτόματη ανίχνευση πηγαίας γλώσσας
- **Αναδιατύπωση** — διόρθωση γραμματικής, βελτίωση της σαφήνειας, τυπική/άτυπη έκφραση, συντομεύσεις, επεκτάσεις, τεχνική γλώσσα
- **Μετασχηματισμός** — προσαρμοσμένες ερωτήσεις τεχνητής νοημοσύνης· παραγωγή και διαχείριση ερωτήσεων, προαιρετική στόχος γλώσσα ανά ερώτηση
- **Ιστορικό** — πλήρες ιστορικό εκτέλεσης με είσοδο/έξοδο κειμένου, φιλτράρισμα και εξαγωγή
- **Μοντέλα & κόστος** — επιλέξτε μοντέλα από κάθε διαμορφωμένο πάροχο· πίνακες ελέγχου κόστους και χρήσης με καταγραφές, περιλήψεις ανά μοντέλο/λειτουργία/ημέρα
- **Διεπαφή χρήστη** — πολύγλωσση διεπαφή (πάνω από 30 γλώσσες, υποστήριξη RTL), γραμματοσειρές κ.λπ.
- **Λειτουργία ιστοσελίδας** — υποστήριξη πολλαπλών χρηστών με διοικητικούς ρόλους
- **Επιφάνειας εργασίας** — εφαρμογή Electron για Windows και Linux
- **Εγκατεστημένη σε server** — εικόνα Docker για amd64 & arm64 (έτοιμη για Raspberry Pi)

Μετά την εγκατάσταση, ανατρέξτε στο **[Εγχειρίδιο Χρήστη](USER-GUIDE.el.md)** για πλήρη καθοδήγηση προς όλα τα χαρακτηριστικά.

<small>**Διαβάστε σε άλλες γλώσσες:** [English (UK)](README.el.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Σημείωση σχετικά με τις μεταφράσεις της διεπαφής και της τεκμηρίωσης:** Όλες οι γλώσσες διεπαφής, εκτός από τα αρχικά Αγγλικά (UK),
> μεταφράστηκαν με χρήση μοντέλων τεχνητής νοημοσύνης· η διατύπωση μπορεί να είναι ακριβής ή να περιέχει λάθη.

</small>

<br/>

<a id="screenshots"></a>
## Στιγμιότυπα

**Επιλογέας γλώσσας**

![Επιλογέας γλώσσας](../images/screenshots/el/language-selector.png)

**Μετάφραση**

![Μετάφραση](../images/screenshots/el/translate.png)

**Μετασχηματισμός - επεξεργασία ερώτησης**

![Μετασχηματισμός - επεξεργασία ερώτησης](../images/screenshots/el/transform-prompt-edit.png)

**Πίνακας Ελέγχου**

![Πίνακας κόστους](../images/screenshots/el/dashboard-summary.png)

**Ιστορικό**

![Ιστορικό](../images/screenshots/el/history.png)

**Ρυθμίσεις - επιλογή μοντέλου**

![Ρυθμίσεις - επιλογή μοντέλου](../images/screenshots/el/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Πίνακας Περιεχομένων

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Γρήγορη Εκκίνηση](#quick-start)
- [Εγκατάσταση](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Λήψη κλειδιού OpenRouter API](#getting-an-openrouter-api-key)
- [Ρύθμιση και περιβάλλον](#configuration-and-environment)
- [Ανάπτυξη και αρχιτεκτονική](#development-and-architecture)
- [Εκδόσεις και ετικέτες](#releases-and-tags)
- [Συνεισφορά](#contributing)
- [Αποποίηση ευθυνών](#disclaimer)
- [Άδεια χρήσης](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Γρήγορη Εκκίνηση

**Docker (συνιστάται για εγκατάσταση σε δικό σας διακομιστή)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Αντικαταστήστε το `sk-or-your-key` με το [κλειδί OpenRouter API](https://openrouter.ai/keys) σας (ή ρυθμίστε κλειδιά άλλων παρόχων· δείτε [Ρύθμιση](#configuration-and-environment)). Ανοίξτε το [http://localhost:5000](http://localhost:5000) και αλλάξτε τον προεπιλεγμένο κωδικό διαχειριστή πριν εκθέσετε την υπηρεσία.

<br/>

> ℹ️ **ΣΗΜΕΙΩΣΗ**<br/>
> Στο Docker, τα στοιχεία πρόσβασης σε μοντέλα πληροφοριών (LLM) ορίζονται μέσω μεταβλητών περιβάλλοντος όπως `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (όχι μέσω του γραφικού περιβάλλοντος). Στην εφαρμογή γραφείου (Electron), οι παράμετροι ορίζονται στο **Ρυθμίσεις → API**.

<br/>

**Windows**

Κατεβάστε το τελευταίο `Transrewrt Setup x.y.z.exe` από την ενότητα [Εκδόσεις](https://github.com/wsj-br/transrewrt/releases), εκτελέστε τον εγκαταστάτη και ξεκινήστε την εφαρμογή από το μενού Έναρξη ή τη συντόμευση στην επιφάνεια εργασίας. Εισαγάγετε τα κλειδιά API σας στο **Ρυθμίσεις → API**. Πρέπει να ρυθμίσετε τουλάχιστον έναν πάροχο· η OpenRouter είναι δημοφιλής για δωρεάν μοντέλα.

<br/>

**Linux**

Κατεβάστε το `.AppImage` για τον επεξεργαστή σας από την ενότητα [Εκδόσεις](https://github.com/wsj-br/transrewrt/releases) (`x64` για συνήθη PC, `arm64` για πολλές συσκευές ARM, συμπεριλαμβανομένου του Raspberry Pi 4+), και στη συνέχεια:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Εισαγάγετε τα κλειδιά API σας στο **Ρυθμίσεις → API**. Πρέπει να ρυθμίσετε τουλάχιστον έναν πάροχο· η OpenRouter είναι δημοφιλής για δωρεάν μοντέλα.

Σε Debian/Ubuntu μπορεί να χρειαστεί να εγκαταστήσετε πρόσθετες εξαρτήσεις:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Δείτε [Εγκατάσταση → Linux](#linux-electron) για λεπτομέρειες.

<br/>

> ℹ️ **ΣΗΜΕΙΩΣΗ**<br/>
> Το macOS δεν υποστηρίζεται αυτή τη στιγμή. Το Transrewrt είναι διαθέσιμο για Windows, Linux και Docker.

<br/>

Όταν η εφαρμογή τρέχει, ανατρέξτε στον **[Οδηγό Χρήστη](USER-GUIDE.el.md)** για να μάθετε πώς να μεταφράζετε, περιγράφετε και μετασχηματίζετε κείμενο, να διαχειρίζεστε ερωτήματα και να ρυθμίζετε μοντέλα.

<br/><br/>

<a id="installation"></a>
## Εγκατάσταση

<a id="windows-electron"></a>
### Windows (Electron)

- Κατεβάστε τον τελευταίο εγκαταστάτη από την ενότητα [Εκδόσεις](https://github.com/wsj-br/transrewrt/releases).
- Εκτελέστε το `.exe` αρχείο και ακολουθήστε τις οδηγίες εγκατάστασης.
- Πρώτη εκκίνηση: ξεκινήστε την εφαρμογή από το μενού Έναρξη ή τη συντόμευση στην επιφάνεια εργασίας.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Κατεβάστε το κατάλληλο `.AppImage` αρχείο (`x64` ή `arm64`) από την ενότητα [Εκδόσεις](https://github.com/wsj-br/transrewrt/releases).
- Εκτελέστε `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` για x86_64/amd64, ή χρησιμοποιήστε το αρχείο `...-arm64.AppImage` για ARM64.
- Πρόσθετες εξαρτήσεις (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Δείτε [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) για περισσότερες πληροφορίες.

<br/>

<a id="docker"></a>
### Docker

- Λήψη: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Ορίστε τουλάχιστον ένα κλειδί παρόχου μέσω μεταβλητής περιβάλλοντος (π.χ. `OPENROUTER_KEY` για OpenRouter). Περάστε μεταβλητές με `-e` ή `docker compose` / `.env`, ώστε τα μυστικά να μην ενσωματώνονται στην εικόνα.
- Τα κλειδιά παρόχου **δεν** εισάγονται στο γραφικό περιβάλλον· ο διακομιστής τα διαβάζει από το περιβάλλον.

Παράδειγμα - όνομα περιστατικού για διαρκής αποθήκευση (κλειδί OpenRouter μέσω env):

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
| Θύρα     | `5000` (χρησιμοποιείστε `-p 5000:5000` για απεικόνιση)                                                        |
| Τόμος   | Προσάψτε το `/app/data` για διαρκή αποθήκευση ρυθμίσεων και βάσης δεδομένων                                                           |
| Μεταβλητές περιβάλλοντος | `PORT`, `CONFIG_PATH`, και κλειδιά LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - δείτε [Ρύθμιση](#configuration-and-environment) |

Για δημιουργία και εκκίνηση από πηγή: `docker compose up --build -d` ή `pnpm docker:up` - δείτε [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Απόκτηση κλειδιού OpenRouter API

Το Transrewrt υποστηρίζει πολλούς πάροχους ΤΝ. Το [OpenRouter](https://openrouter.ai) είναι δημοφιλής επιλογή, καθώς συγκεντρώνει πολλά μοντέλα υπό ένα κλειδί και προσφέρει δωρεάν μοντέλα.

1. Εγγραφείτε ή συνδεθείτε στη διεύθυνση [openrouter.ai](https://openrouter.ai).
2. Ανοίξτε τη σελίδα [Keys](https://openrouter.ai/keys) και δημιουργήστε ένα νέο κλειδί (δώστε του όνομα, και προαιρετικά ορίστε όριο πιστωτικού). Μπορείτε να χρησιμοποιήσετε δωρεάν μοντέλα χωρίς να προσθέσετε πίστωση.
3. **Για υπολογιστή (Electron):** επικολλήστε τα κλειδιά στο **Ρυθμίσεις → API**. **Για Docker:** ορίστε μεταβλητές περιβάλλοντος όπως το `OPENROUTER_KEY` (δείτε [Γρήγορη εκκίνηση](#quick-start)).

Μη χρησιμοποιείτε το μοντέλο **Body Builder** του OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) για μετάφραση, αναδιατύπωση ή μετασχηματισμό: επιστρέφει JSON φορτία αιτημάτων, όχι το τελικό κείμενο για αυτές τις εργασίες. Δείτε [Ρυθμίσεις → Μοντέλα](USER-GUIDE.el.md#models) στον Οδηγό Χρήστη.

Μπορείτε επίσης να χρησιμοποιήσετε και άλλους παρόχους (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ή να εκτελέσετε μοντέλα τοπικά με το [Ollama](https://ollama.com). Δείτε το [Ρυθμίσεις](#configuration-and-environment) για την πλήρη λίστα υποστηριζόμενων παρόχων και μεταβλητών περιβάλλοντος.

> ⚠️ **ΠΡΟΕΙΔΟΠΟΙΗΣΗ**<br/>
> Αν χρησιμοποιείτε το Ollama από άλλη συσκευή, container ή υπηρεσία, θυμηθείτε να το ρυθμίσετε έτσι ώστε να επιτρέπει εξωτερικές συνδέσεις (όχι μόνο localhost).


Για όρια, BYOK, και περισσότερα, δείτε [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Διαμόρφωση και περιβάλλον

**Τοποθεσίες αρχείων ρυθμίσεων**

| Εγκατάσταση         | Τοποθεσία ρυθμίσεων                                |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Ιστός / Docker     | `/app/data/config.json` (χρησιμοποιήστε volume για να μείνει) |

<br/>

**Μεταβλητές περιβάλλοντος** (μόνο ιστός/Docker· το Electron χρησιμοποιεί το τοπικό αρχείο ρυθμίσεων)

| Μεταβλητή         | Προεπιλογή                 | Περιγραφή |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Θύρα ακρόασης του διακομιστή |
| `CONFIG_PATH`    | `/app/data/config.json` | Διαδρομή προς το αρχείο ρυθμίσεων |
| `OPENROUTER_KEY` | *(κενό)*                 | Κλειδί API OpenRouter |
| `OPENAI_KEY`     | *(κενό)*                 | Κλειδί API OpenAI |
| `CEREBRAS_KEY`   | *(κενό)*                 | Κλειδί API Cerebras |
| `ANTHROPIC_KEY`  | *(κενό)*                 | Κλειδί API Anthropic |
| `GOOGLE_KEY`     | *(κενό)*                 | Κλειδί API Google Gemini |
| `DEEPSEEK_KEY`   | *(κενό)*                 | Κλειδί API DeepSeek |
| `GROQ_KEY`       | *(κενό)*                 | Κλειδί API Groq |
| `MISTRAL_KEY`    | *(κενό)*                 | Κλειδί API Mistral |
| `OLLAMA_URL`     | *(κενό)*                 | Βασική διεύθυνση URL Ollama (π.χ. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(κενό)*                 | Κλειδί API xAI |

Ρυθμίζετε μόνο τους παρόχους που χρησιμοποιείτε. Τα αναγνωριστικά μοντέλων έχουν ονοματοχώρο (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, κ.λπ.).

**Προβολή κόστους:** Το OpenRouter επιστρέφει το ακριβές χρεωστό ποσό όπου αυτό ισχύει. Για τους υπόλοιπους παρόχους χρησιμοποιείται **εκτίμηση** κόστους βάσει της δημόσιας τιμολόγησης μοντέλων του OpenRouter, όταν υπάρχει κλειδί OpenRouter· αν όχι, το κόστος παρόχων εκτός OpenRouter ίσως εμφανίζεται ως `0`. Οι εκτιμήσεις δεν είναι τιμολόγια.

<br/>

**Δεδομένα και διαρκής αποθήκευση:** Για το Docker, συνδέστε ένα volume στο `/app/data`, ώστε το `config.json` και η βάση δεδομένων SQLite να διατηρούνται μετά από επανεκκινήσεις container. Χωρίς volume, χάνονται όλα τα δεδομένα όταν σταματάει το container.

**Για προγραμματιστές:** Αφού κατεβάσετε αλλαγές που αντικαθιστούν την παλιά διαμόρφωση ενός μόνο κλειδιού, εκκαθαρίστε ή συγχωνεύστε το `data/config.json` με τη νέα προεπιλεγμένη δομή από το `src/config-defaults/config_default.json`, αν το τοπικό σας αρχείο χρησιμοποιεί ακόμα πεδία που αφαιρέθηκαν (`api_key`, `api_url`, επιλογές proxy).

<br/>

**Πιστοποίηση ιστού:**

- Προεπιλεγμένος διαχειριστής: `admin` / `transrewrt26`.
- Διαχειριστείτε χρήστες στο **Ρυθμίσεις → Χρήστες**.
- Επαναφορά κωδικού: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (από πηγή: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ΠΡΟΕΙΔΟΠΟΙΗΣΗ**<br/>
> Αλλάξτε άμεσα τον προεπιλεγμένο κωδικό διαχειριστή σε κάθε υπολογιστή που είναι προσβάσιμος από δίκτυο.

<br/>

Βασικές ρυθμίσεις (γραμματοσειρά, μοντέλα, γλώσσες, κ.λπ.) είναι διαθέσιμες στις Ρυθμίσεις της εφαρμογής.

<br/><br/>

<a id="development-and-architecture"></a>

## Ανάπτυξη και αρχιτεκτονική

- **Ανάπτυξη:** Εγκατάσταση, δημιουργία, δοκιμές και ανάπτυξη (Electron, Web, Docker) - δείτε **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Αρχιτεκτονική και επισκόπηση συστήματος:** Δομή φακέλων, τεχνολογικό στοίβα, αποφάσεις σχεδιασμού - δείτε **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Εκδόσεις και ετικέτες

- Οι **ετικέτες Git** `v`* (π.χ. `v1.0.10`) ενεργοποιούν τη [διαδικασία εκδόσεως](.github/workflows/release.yml). Οι **Εκδόσεις GitHub** συνδέουν τον εγκαταστάτη για Windows (`.exe`) και τα AppImage για Linux (**x64** και **arm64**).
- Οι **εικόνες Docker** δημοσιεύονται στο `ghcr.io/wsj-br/transrewrt`. Οι ετικέτες εικόνων ταιριάζουν με την έκδοση Git (π.χ. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) καθώς και την `latest`. Πολλαπλή αρχιτεκτονική: `linux/amd64` και `linux/arm64` (π.χ. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Συνεισφορά

1. Δημιουργήστε διάκλαδο του αποθετηρίου.
2. Δημιουργήστε μια κλάδο χαρακτηριστικού: `git checkout -b feature/το-χαρακτηριστικό-μου`
3. Καταχωρήστε τις αλλαγές σας με ένα σαφές μήνυμα.
4. Σπρώξτε και ανοίξτε ένα Αίτημα Συγχώνευσης (Pull Request) προς το `main`.

Παρακαλείσθε να ακολουθείτε τον υπάρχοντα κώδικα στυλ και να δοκιμάσετε τις αλλαγές σας και στις δύο λειτουργίες Electron και web πριν την υποβολή. Δείτε το [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) για οδηγίες δημιουργίας και δοκιμών.

<br/>

**Αναφορά προβλημάτων:** Ανοίξτε ένα θέμα (issue) στο [GitHub](https://github.com/wsj-br/transrewrt/issues). Περιλάβετε την πλατφόρμα σας (Windows / Linux / Docker) και την έκδοση της εφαρμογής (φαίνεται στο παράθυρο «Σχετικά» ή στη σελίδα Εκδόσεων).

<br/><br/>

<a id="disclaimer"></a>
## Αποποίηση ευθυνών

Τα ονόματα και τα εικονίδια προϊόντων ανήκουν στους αντίστοιχους ιδιοκτήτες τους και χρησιμοποιούνται αποκλειστικά για σκοπούς αναγνώρισης. Αυτό το λογισμικό δεν σχετίζεται ούτε εγκρίνεται από καμία από τις αναφερόμενες μάρκες.

<br/><br/>

<a id="license"></a>
## Άδεια χρήσης

Πνευματική ιδιοκτησία © 2026 Waldemar Scudeller Jr.

[Άδεια Apache 2.0](LICENSE)