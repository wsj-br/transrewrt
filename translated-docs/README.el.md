---
translated_at: "2026-03-27T23:09:32.797Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
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

Εργαλείο κειμένου με υποστήριξη τεχνητής νοημοσύνης: μετάφραση μεταξύ γλωσσών, αναδιατύπωση με διαφορετικούς τρόπους και μετασχηματισμός μέσω προσαρμοσμένων ερωτημάτων — χρησιμοποιώντας πολλαπλούς παρόχους τεχνητής νοημοσύνης (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, και τοπικό Ollama). Λειτουργεί ως εφαρμογή επιφάνειας εργασίας (Electron) ή ως εγκατεστημένη ιστοεφαρμογή (Docker).

- **Μετάφραση** — μεταξύ δεκάδων γλωσσών, με αυτόματη ανίχνευση προέλευσης
- **Αναδιατύπωση** — διόρθωση γραμματικής, βελτίωση της σαφήνειας, επίσημη/ανεπίσημη, συντομότερη, εκτενέστερη, τεχνική
- **Μετασχηματισμός** — προσαρμοσμένα ερωτήματα ΤΝ· δημιουργία και διαχείριση ερωτημάτων, προαιρετική στόχευση γλώσσας ανά ερώτημα
- **Ιστορικό** — πλήρες ιστορικό εκτέλεσης με εισόμενο/εξερχόμενο κείμενο, φίλτρα κι εξαγωγή
- **Μοντέλα & κόστος** — επιλογή μοντέλων από κάθε διαμορφωμένο πάροχο· πίνακες ελέγχου για κόστος και χρήση, με αρχεία καταγραφής και περιλήψεις ανά μοντέλο/λειτουργία/ημέρα
- **Διεπαφή χρήστη** — πολύγλωσση διεπαφή (30+ γλώσσες, υποστήριξη RTL), γραμματοσειρές, ...
- **Λειτουργία ιστού** — υποστήριξη πολλαπλών χρηστών με δικαιώματα διαχειριστή
- **Επιφάνεια εργασίας** — εφαρμογή Electron για Windows και Linux
- **Αυτόνομη εγκατάσταση** — εικόνα Docker για amd64 & arm64 (έτοιμη για Raspberry Pi)

Μετά την εγκατάσταση, ανατρέξτε στο **[Εγχειρίδιο Χρήστη](USER-GUIDE.el.md)** για πλήρη ξενάγηση σε όλες τις λειτουργίες.

<small>**Διαβάστε σε άλλες γλώσσες:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Σημείωση σχετικά με τις μεταφράσεις της διεπαφής και της τεκμηρίωσης:** Όλες οι γλώσσες διεπαφής εκτός από τα αρχικά Αγγλικά (ΗΒ)
> μεταφράστηκαν με τη βοήθεια μοντέλων τεχνητής νοημοσύνης· ενδέχεται οι διατυπώσεις να μην είναι ακριβείς ή να περιέχουν σφάλματα.

</small>

<br/>

<a id="screenshots"></a>

## Στιγμιότυπα οθόνης

**Επιλογέας γλώσσας**

![Επιλογέας γλώσσας](../images/screenshots/el/language-selector.png)

**Μετάφραση**

![Μετάφραση](../images/screenshots/el/translate.png)

**Μετατροπή - επεξεργαστής προτροπών (prompt editor)**

![Μετατροπή - επεξεργαστής προτροπών](../images/screenshots/el/transform-prompt-edit.png)

**Πίνακας εργασιών**

![Πίνακας κόστους](../images/screenshots/el/dashboard-summary.png)

**Ιστορικό**

![Ιστορικό](../images/screenshots/el/history.png)

**Ρυθμίσεις - επιλογή μοντέλου**

![Ρυθμίσεις - επιλογή μοντέλου](../images/screenshots/el/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Περιεχόμενα

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Γρήγορη έναρξη](#quick-start)
- [Εγκατάσταση](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Λήψη κλειδιού API από το OpenRouter](#getting-an-openrouter-api-key)
- [Διαμόρφωση και περιβάλλον](#configuration-and-environment)
- [Ανάπτυξη και αρχιτεκτονική](#development-and-architecture)
- [Εκδόσεις και ετικέτες](#releases-and-tags)
- [Συμβολή](#contributing)
- [Αποποίηση](#disclaimer)
- [Άδεια χρήσης](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Γρήγορη εκκίνηση

**Docker (προτεινόμενο για self-hosting)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Αντικαταστήστε το `sk-or-your-key` με το [κλειδί API του OpenRouter](https://openrouter.ai/keys) (ή ορίστε κλειδιά άλλου παρόχου· δείτε [Διαμόρφωση](#configuration-and-environment)). Ανοίξτε το [http://localhost:5000](http://localhost:5000) και αλλάξτε τον προεπιλεγμένο κωδικό διαχειριστή πριν εκθέσετε την υπηρεσία.

<br/>

> ℹ️ **ΣΗΜΕΙΩΣΗ**<br/>
> Στο Docker, τα πιστοποιητικά του LLM ορίζονται μέσω μεταβλητών περιβάλλοντος όπως `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY` κ.ά. (όχι στο γραφικό περιβάλλον). Σε εφαρμογή επιτραπεζίου (Electron), οι ρυθμίσεις γίνονται στο **Ρυθμίσεις → API**.

<br/>

**Windows**

Κατεβάστε το τελευταίο `Transrewrt Setup x.y.z.exe` από το [Releases](https://github.com/wsj-br/transrewrt/releases), εκτελέστε την εγκατάσταση και ξεκινήστε την εφαρμογή μέσω του μενού Έναρξη ή συντόμευσης επιφάνειας εργασίας. Εισάγετε τα κλειδιά API στο **Ρυθμίσεις → API**. Πρέπει να ρυθμίσετε τουλάχιστον έναν πάροχο· το OpenRouter χρησιμοποιείται συχνά για δωρεάν μοντέλα.

<br/>

**Linux**

Κατεβάστε το `.AppImage` για την CPU σας από το [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` για τυπικούς υπολογιστές, `arm64` για πολλές συσκευές ARM, συμπεριλαμβανομένων των Raspberry Pi 4+), και μετά:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Εισάγετε τα κλειδιά API στο **Ρυθμίσεις → API**. Πρέπει να ρυθμίσετε τουλάχιστον έναν πάροχο· το OpenRouter χρησιμοποιείται συχνά για δωρεάν μοντέλα.

Σε Debian/Ubuntu μπορεί να χρειαστεί να εγκαταστήσετε επιπλέον εξαρτήσεις:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Ανατρέξτε στην ενότητα [Εγκατάσταση → Linux](#linux-electron) για λεπτομέρειες.

<br/>

> ℹ️ **ΣΗΜΕΙΩΣΗ**<br/>
> Το macOS δεν υποστηρίζεται προς το παρόν. Το Transrewrt είναι διαθέσιμο για Windows, Linux και Docker.

<br/>

Αφού η εφαρμογή είναι ενεργή, ανατρέξτε στο **[Οδηγό Χρήστη](USER-GUIDE.el.md)** για να μάθετε πώς να μεταφράζετε, ξαναγράφετε και μετασχηματίζετε κείμενα, να διαχειρίζεστε ερωτήματα και να ρυθμίζετε μοντέλα.

<br/><br/>

<a id="installation"></a>

## Εγκατάσταση

<a id="windows-electron"></a>
### Windows (Electron)

- Κατεβάστε τον τελευταίο εγκαταστάτη από την ενότητα [Releases](https://github.com/wsj-br/transrewrt/releases).
- Εκτελέστε το αρχείο `.exe` και ακολουθήστε τις οδηγίες του εγκαταστάτη.
- Πρώτη εκτέλεση: ξεκινήστε την εφαρμογή από το μενού Έναρξη ή την συντόμευση στην επιφάνεια εργασίας.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Κατεβάστε το κατάλληλο αρχείο `.AppImage` (`x64` ή `arm64`) από την ενότητα [Releases](https://github.com/wsj-br/transrewrt/releases).
- Εκτέλεση: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` για x86_64/amd64, ή χρησιμοποιήστε το όνομα αρχείου `...-arm64.AppImage` για ARM64.
- Επιπλέον εξαρτήσεις (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Δείτε το [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) για περισσότερες πληροφορίες.

<br/>

<a id="docker"></a>
### Docker

- Λήψη: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Ορίστε τουλάχιστον ένα κλειδί παρόχου μέσω περιβάλλοντος (για παράδειγμα `OPENROUTER_API_KEY` για OpenRouter). Περάστε τις μεταβλητές με `-e` ή `docker compose` / `.env`, ώστε τα μυστικά να μην ενσωματώνονται στην εικόνα.
- Τα κλειδιά παρόχων **δεν** εισάγονται στο web UI· ο διακομιστής τα διαβάζει από το περιβάλλον.

Παράδειγμα - ονομασμένος τόμος για διαρκή αποθήκευση (κλειδί OpenRouter μέσω περιβάλλοντος):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

εναλλακτικά, αν προτιμάτε το Docker Compose, χρησιμοποιήστε:

# Λήψη του αρχείου compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Επεξεργασία του αρχείου για προσθήκη των API_KEYS
vi transrewrt.yml
# Εκκίνηση του container
docker compose -f transrewrt.yml up -d
```

<br/>

| Επιλογή   | Περιγραφή                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Θύρα     | `5000` (χαρτογραφείται με `-p 5000:5000`)                                                                                               |
| Τόμος   | Προσάρτηση `/app/data` για διαρκή αποθήκευση ρυθμίσεων και βάσης δεδομένων                                                           |
| Μεταβλητές περιβάλλοντος | `PORT`, `CONFIG_PATH`, καθώς και κλειδιά LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - δείτε [Διαμόρφωση](#configuration-and-environment) |

Για να κατασκευάσετε και να εκτελέσετε από τον πηγαίο κώδικα: `docker compose up --build -d` ή `pnpm docker:up` - δείτε [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Απόκτηση κλειδιού API από το OpenRouter

Το Transrewrt υποστηρίζει πολλά παρόχους ΤΝ. Το [OpenRouter](https://openrouter.ai) είναι μια δημοφιλής επιλογή επειδή συγκεντρώνει πολλά μοντέλα υπό ένα κλειδί και προσφέρει δωρεάν μοντέλα.

1. Εγγραφείτε ή συνδεθείτε στη διεύθυνση [openrouter.ai](https://openrouter.ai).
2. Ανοίξτε τη σελίδα [Keys](https://openrouter.ai/keys) και δημιουργήστε ένα νέο κλειδί (δώστε του όνομα, και προαιρετικά ορίστε όριο πιστωτικού). Μπορείτε να χρησιμοποιήσετε δωρεάν μοντέλα χωρίς να προσθέσετε πίστωση.
3. **Εκδοση Desktop (Electron):** επικολλήστε τα κλειδιά στο **Ρυθμίσεις → API**. **Docker:** ορίστε μεταβλητές περιβάλλοντος όπως `OPENROUTER_API_KEY` (δείτε [Γρήγορη έναρξη](#quick-start)).

Μην χρησιμοποιείτε το μοντέλο **Body Builder** του OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) για μετάφραση, αναδιατύπωση ή μετασχηματισμό: επιστρέφει φορτία αιτημάτων JSON, όχι το ολοκληρωμένο κείμενο για αυτές τις εργασίες. Δείτε [Ρυθμίσεις → Μοντέλα](USER-GUIDE.el.md#models) στον Οδηγό Χρήστη.

Μπορείτε επίσης να χρησιμοποιήσετε άλλους παρόχους (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ή να εκτελέσετε μοντέλα τοπικά με το [Ollama](https://ollama.com). Δείτε την ενότητα [Διαμόρφωση](#configuration-and-environment) για την πλήρη λίστα υποστηριζόμενων παρόχων και μεταβλητών περιβάλλοντος.

> ⚠️ **ΠΡΟΕΙΔΟΠΟΙΗΣΗ**<br/>
> Αν χρησιμοποιείτε το Ollama από άλλη συσκευή, container ή υπηρεσία, θυμηθείτε να το διαμορφώσετε για να επιτρέπει εξωτερικές συνδέσεις (όχι μόνο localhost).


Για περιορισμούς, BYOK και περισσότερα, δείτε [Πιστοποίηση OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Διαμόρφωση και περιβάλλον

**Θέσεις αρχείων διαμόρφωσης**

| Εγκατάσταση         | Θέση διαμόρφωσης                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (χρησιμοποιήστε volume για να διατηρηθούν τα δεδομένα) |

<br/>

**Μεταβλητές περιβάλλοντος** (μόνο για web / Docker· το Electron χρησιμοποιεί το τοπικό αρχείο ρυθμίσεων)

| Μεταβλητή         | Προεπιλογή                 | Περιγραφή |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Θύρα ακρόασης του server |
| `CONFIG_PATH`    | `/app/data/config.json` | Διαδρομή προς το αρχείο διαμόρφωσης |
| `OPENROUTER_API_KEY` | *(κενό)*               | Κλειδί OpenRouter API |
| `OPENAI_API_KEY`     | *(κενό)*               | Κλειδί OpenAI API |
| `CEREBRAS_API_KEY`   | *(κενό)*               | Κλειδί Cerebras API |
| `ANTHROPIC_API_KEY`  | *(κενό)*               | Κλειδί Anthropic API |
| `GOOGLE_API_KEY`     | *(κενό)*               | Κλειδί Google Gemini API |
| `DEEPSEEK_API_KEY`   | *(κενό)*               | Κλειδί DeepSeek API |
| `GROQ_API_KEY`       | *(κενό)*               | Κλειδί Groq API |
| `MISTRAL_API_KEY`    | *(κενό)*               | Κλειδί Mistral API |
| `OLLAMA_URL`     | *(κενό)*               | Βασική διεύθυνση Ollama (π.χ. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(κενό)*               | Κλειδί xAI API |

Να ρυθμίζετε μόνο τους πάροχους που χρησιμοποιείτε. Οι ονομασίες μοντέλων χρησιμοποιούν διαχωριστικά (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, κ.λπ.).

**Εμφάνιση κόστους:** Το OpenRouter επιστρέφει το ακριβές χρεώσιμο κόστος όταν ισχύει. Οι υπόλοιποι πάροχοι χρησιμοποιούν **εκτιμώμενο** κόστος βάσει των δημόσιων τιμών μοντέλων του OpenRouter, εφόσον είναι διαθέσιμο κλειδί OpenRouter· διαφορετικά, το κόστος μη-OpenRouter μπορεί να εμφανίζεται ως `0`. Οι εκτιμήσεις δεν αποτελούν λογαριασμούς.

<br/>

**Δεδομένα και διατήρηση:** Για Docker, προσαρτήστε ένα volume στο `/app/data` για να διατηρηθούν το `config.json` και η βάση δεδομένων SQLite μετά από επανεκκινήσεις του container. Χωρίς volume, όλα τα δεδομένα χάνονται όταν το container σταματήσει.

**Προγραμματιστές:** Μετά τη λήψη αλλαγών που αντικαθιστούν την παλιά ρύθμιση μοναδικού κλειδιού, επαναφέρετε ή συγχωνεύστε το `data/config.json` με τη νέα προεπιλεγμένη δομή από το `src/config-defaults/config_default.json` αν το τοπικό αρχείο σας χρησιμοποιεί ακόμα καταργημένα πεδία (`api_key`, `api_url`, επιλογές proxy).

<br/>

**Πιστοποίηση στο web:**

- Προεπιλεγμένος διαχειριστής: `admin` / `transrewrt26`.
- Διαχειριστείτε τους χρήστες στο **Ρυθμίσεις → Χρήστες**.
- Επαναφορά κωδικού: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (από πηγή: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ΠΡΟΕΙΔΟΠΟΙΗΣΗ**<br/>
> Αλλάξτε άμεσα τον προεπιλεγμένο κωδικό διαχειριστή σε κάθε υπολογιστή που πρόκειται να είναι προσβάσιμος μέσω δικτύου.

<br/>

Βασικές ρυθμίσεις (γραμματοσειρά, μοντέλα, γλώσσες κ.λπ.) είναι διαθέσιμες στις Ρυθμίσεις της εφαρμογής.

<br/><br/>

<a id="development-and-architecture"></a>

## Ανάπτυξη και αρχιτεκτονική

- **Ανάπτυξη:** Ρύθμιση, χτίσιμο, δοκιμή και ανάπτυξη (Electron, Ιστός, Docker) - δείτε **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Αρχιτεκτονική και επισκόπηση συστήματος:** Δομή φακέλων, τεχνολογικό στέκι, αποφάσεις σχεδίασης - δείτε **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Εκδόσεις και ετικέτες

- Οι **ετικέτες Git** `v`* (π.χ. `v1.0.10`) ενεργοποιούν τη ροή εργασιών [έκδοσης](.github/workflows/release.yml). Οι **Εκδόσεις GitHub** συνδέουν τον εγκαταστάτη για Windows (`.exe`) και AppImages για Linux (**x64** και **arm64**).
- Οι **εικόνες Docker** δημοσιεύονται στο `ghcr.io/wsj-br/transrewrt`. Οι ετικέτες εικόνων αντιστοιχούν στην έκδοση Git (π.χ. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) και προστίθεται και η `latest`. Πολλαπλή αρχιτεκτονική: `linux/amd64` και `linux/arm64` (π.χ. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Συνεισφορά

1. Δημιουργήστε διακλάδωση του αποθετηρίου.
2. Δημιουργήστε κλάδο χαρακτηριστικών: `git checkout -b feature/my-feature`
3. Καταχωρήστε τις αλλαγές σας με ξεκάθαρο μήνυμα.
4. Ανεβάστε τις αλλαγές και δημιουργήστε μια Αίτημα Συγχώνευσης (Pull Request) προς το `main`.

Παρακαλούμε να ακολουθείτε το υπάρχον στυλ κώδικα και να δοκιμάζετε τις αλλαγές σας και στη λειτουργία Electron και στην ιστοδικτυακή λειτουργία πριν την υποβολή. Δείτε το [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) για οδηγίες χτίσιμου και δοκιμής.

<br/>

**Αναφορά προβλημάτων:** Ανοίξτε ένα θέμα στο [GitHub](https://github.com/wsj-br/transrewrt/issues). Συμπεριλάβετε την πλατφόρμα σας (Windows / Linux / Docker) και την έκδοση της εφαρμογής (που εμφανίζεται στο παράθυρο Σχετικά ή στη σελίδα Εκδόσεις).

<br/><br/>

<a id="disclaimer"></a>

## Παραίτηση

Τα ονόματα και τα εικονίδια των προϊόντων ανήκουν στους νόμιμους κατόχους τους και χρησιμοποιούνται αποκλειστικά για αναγνώριση. Το παρόν λογισμικό δεν σχετίζεται ούτε εγκρίνεται από οποιαδήποτε από τις αναφερόμενες εταιρείες.

<br/><br/>

<a id="license"></a>
## Άδεια χρήσης

Πνευματική ιδιοκτησία © 2026 Waldemar Scudeller Jr.

[Άδεια Apache 2.0](LICENSE)