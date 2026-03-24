---
translated_at: "2026-03-24T01:39:28.365Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Λογότυπο Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Έκδοση"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Άδεια: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Πλατφόρμα">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Εργαλείο κειμένου με υποστήριξη Τεχνητής Νοημοσύνης: μεταφράζετε σε διάφορες γλώσσες, αναδιατυπώστε με διαφορετικούς τρόπους, και μετασχηματίστε χρησιμοποιώντας προσαρμοσμένες ερωτήσεις — μέσω πολλαπλών παρόχων ΤΝ (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, και τοπικό Ollama). Λειτουργεί ως εφαρμογή υπολογιστή (Electron) ή ως εφαρμογή δικτύου αυτο-εγκατάστασης (Docker).

- **Μετάφραση** — μεταξύ δεκάδων γλωσσών, με αυτόματη ανίχνευση πηγής
- **Αναδιατύπωση** — διόρθωση γραμματικής, βελτίωση σαφήνειας, τυπική/άτυπη έκφραση, συντόμευση, επέκταση, τεχνική γλώσσα
- **Μετασχηματισμός** — προσαρμοσμένες ερωτήσεις ΤΝ· δημιουργία και διαχείριση ερωτήσεων, προαιρετική επιλογή γλώσσας στόχου ανά ερώτηση
- **Ιστορικό** — πλήρες ιστορικό εκτελέσεων με εισόδους/εξόδους, φίλτρα και δυνατότητα εξαγωγής
- **Μοντέλα και κόστος** — επιλέξτε μοντέλα από οποιονδήποτε διαμορφωμένο πάροχο· πίνακας κόστους με καταγραφή σε SQLite, περιλήψεις ανά μοντέλο/πράξη/ημέρα
- **Διεπαφή** — πολυγλωσσική διεπαφή (30+ γλώσσες, υποστήριξη RTL), γραμματοσειρές, ...
- **Λειτουργία δικτύου** — υποστήριξη πολλαπλών χρηστών με ρόλους διαχείρισης· οι κωδικοί API παραμένουν στον εξυπηρετητή και δεν εκτίθενται στο πρόγραμμα περιήγησης
- **Εφαρμογή υπολογιστή** — εφαρμογή Electron για Windows και Linux
- **Αυτο-εγκατάσταση** — εικόνα Docker για amd64 & arm64 (έτοιμη για Raspberry Pi)

Μετά την εγκατάσταση, δείτε το **[Εγχειρίδιο Χρήστη](USER-GUIDE.el.md)** για πλήρη ξενάγηση σε όλες τις λειτουργίες.

<small>**Διαβάστε σε άλλες γλώσσες:** [English (UK)](README.el.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>



<br/>

**Σημείωση για τις μεταφράσεις διεπαφής και εγχειριδίων:** Όλες οι γλώσσες διεπαφής εκτός της αγγλικής (ΗΒ) μεταφράστηκαν με χρήση μοντέλων ΤΝ· δεν αποκλείεται η χρήση ανακριβούς διατύπωσης ή το σφάλμα.



<a id="screenshots"></a>
## Στιγμιότυπα οθόνης

**Επιλογέας γλώσσας**

![Επιλογέας γλώσσας](../images/screenshots/el/language-selector.png)

**Μετάφραση**

![Μετάφραση](../images/screenshots/el/translate.png)

**Μετασχηματισμός - επεξεργασία ερώτησης**

![Μετασχηματισμός - επεξεργασία ερώτησης](../images/screenshots/el/transform-prompt-edit.png)

**Πίνακας ελέγχου**

![Πίνακας ελέγχου κόστους](../images/screenshots/el/dashboard-summary.png)

**Ιστορικό**

![Ιστορικό](../images/screenshots/el/history.png)

**Ρυθμίσεις - επιλογή μοντέλου**

![Ρυθμίσεις - επιλογή μοντέλου](../images/screenshots/el/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Πίνακας περιεχομένων

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
- [Γρήγορη έναρξη](#quick-start)
- [Εγκατάσταση](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Λήψη κλειδιού OpenRouter API](#getting-an-openrouter-api-key)
- [Διαμόρφωση και περιβάλλον](#configuration-and-environment)
- [Ανάπτυξη και αρχιτεκτονική](#development-and-architecture)
- [Εκδόσεις και ετικέτες](#releases-and-tags)
- [Συμμετοχή](#contributing)
- [Αποποίηση ευθυνών](#disclaimer)
- [Άδεια](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Γρήγορη έναρξη

**Docker (προτείνεται για αυτο-εγκατάσταση)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Αντικαταστήστε το `sk-or-your-key` με το [κλειδί API του OpenRouter](https://openrouter.ai/keys) (ή ορίστε κλειδιά άλλων παρόχων· δείτε [Διαμόρφωση](#configuration-and-environment)). Ανοίξτε το [http://localhost:5000](http://localhost:5000) και αλλάξτε τον προεπιλεγμένο κωδικό διαχειριστή πριν εκθέσετε την υπηρεσία.

<br/>

> ℹ️ **ΣΗΜΕΙΩΣΗ**<br/>
> Στο Docker, τα πιστοποιητικά LLM ορίζονται μέσω μεταβλητών περιβάλλοντος όπως `OPENROUTER_KEY`, `OPENAI_KEY`, … (όχι μέσω γραφικού περιβάλλοντος). Στην έκδοση για υπολογιστή (Electron) ορίζετε τα κλειδιά στο **Ρυθμίσεις → API**.

<br/>

**Windows**

Κατεβάστε το τελευταίο `Transrewrt Setup x.y.z.exe` από τις [Εκδόσεις](https://github.com/wsj-br/transrewrt/releases), εκτελέστε τον εγκαταστάτη και εκκινήστε την εφαρμογή μέσω του μενού Έναρξη ή συντόμευσης επιφάνειας εργασίας. Εισάγετε τα κλειδιά API σας στο **Ρυθμίσεις → API**. Θα πρέπει να ρυθμίσετε τουλάχιστον έναν πάροχο· ο OpenRouter είναι συνηθισμένος για δωρεάν μοντέλα.

<br/>

**Linux**

Κατεβάστε το `.AppImage` από τις [Εκδόσεις](https://github.com/wsj-br/transrewrt/releases), στη συνέχεια:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Εισάγετε τα κλειδιά API σας στο **Ρυθμίσεις → API**. Θα πρέπει να ρυθμίσετε τουλάχιστον έναν πάροχο· ο OpenRouter είναι συνηθισμένος για δωρεάν μοντέλα.

Σε Debian/Ubuntu ίσως χρειαστεί να εγκαταστήσετε επιπλέον εξαρτήσεις:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Δείτε [Εγκατάσταση → Linux](#linux-electron) για λεπτομέρειες.

<br/>

> ℹ️ **ΣΗΜΕΙΩΣΗ**<br/>
> Το macOS δεν υποστηρίζεται προς το παρόν. Το Transrewrt είναι διαθέσιμο για Windows, Linux και Docker.

<br/>

Μόλις τρέχει η εφαρμογή, δείτε το **[Οδηγό Χρήστη](USER-GUIDE.el.md)** για να μάθετε πώς να μεταφράζετε, ξαναγράφετε και μετασχηματίζετε κείμενο, να διαχειρίζεστε ενέργειες και να ρυθμίζετε μοντέλα.

<br/><br/>

<a id="installation"></a>
## Εγκατάσταση

<a id="windows-electron"></a>
### Windows (Electron)

- Κατεβάστε τον τελευταίο εγκαταστάτη από τις [Εκδόσεις](https://github.com/wsj-br/transrewrt/releases).
- Εκτελέστε το `.exe` και ακολουθήστε τις οδηγίες εγκατάστασης.
- Πρώτη εκκίνηση: ξεκινήστε την εφαρμογή από το μενού Έναρξη ή τη συντόμευση.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Κατεβάστε το `.AppImage` από τις [Εκδόσεις](https://github.com/wsj-br/transrewrt/releases).
- Εκτελέστε: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Επιπλέον εξαρτήσεις (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Δείτε [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) για περισσότερες πληροφορίες.

<br/>

<a id="docker"></a>
### Docker

- Κατεβάστε: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Ορίστε τουλάχιστον ένα κλειδί παρόχου μέσω μεταβλητής περιβάλλοντος (π.χ. `OPENROUTER_KEY` για OpenRouter). Περάστε μεταβλητές με `-e` ή `docker compose` / `.env` ώστε οι μυστικές πληροφορίες να μην ενσωματωθούν στην εικόνα.
- Τα κλειδιά παρόχου **δεν** εισάγονται μέσω γραφικού περιβάλλοντος· ο διακομιστής τα διαβάζει από το περιβάλλον.

Παράδειγμα - χρήση ονομασμένου τόμου για διατήρηση δεδομένων (κλειδί OpenRouter μέσω περιβάλλοντος):

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
| Θύρα     | `5000` (απεικόνιση με `-p 5000:5000`)                                                                              |
| Τόμος   | Σύνδεση `/app/data` για διατήρηση ρυθμίσεων και βάσης δεδομένων                                                         |
| Μεταβλητές περιβάλλοντος | `PORT`, `CONFIG_PATH`, κα πλειδιά LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - δείτε [Διαμόρφωση](#configuration-and-environment) |

Για δημιουργία και εκκίνηση από πηγαίο κώδικα: `docker compose up --build -d` ή `pnpm docker:up` - δείτε [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Λήψη κλειδιού OpenRouter API

Το Transrewrt υποστηρίζει πολλά παρόχα ΤΝ. Η [OpenRouter](https://openrouter.ai) είναι δημοφιλής επιλογή, καθώς συγκεντρώνει πολλά μοντέλα υπό ένα κλειδί και προσφέρει δωρεάν μοντέλα.

1. Εγγραφείτε ή συνδεθείτε στη διεύθυνση [openrouter.ai](https://openrouter.ai).
2. Ανοίξτε τη σελίδα [Keys](https://openrouter.ai/keys) και δημιουργήστε ένα νέο κλειδί (δώστε του όνομα και προαιρετικά ορίστε όριο πιστωτικού). Μπορείτε να χρησιμοποιήσετε δωρεάν μοντέλα χωρίς να προσθέσετε πίστωση.
3. **Επιτραπέζια (Electron):** επικολλήστε τα κλειδιά στο **Ρυθμίσεις → API**. **Docker:** ορίστε μεταβλητές περιβάλλοντος όπως `OPENROUTER_KEY` (δείτε [Γρήγορη έναρξη](#quick-start)).

Μπορείτε επίσης να χρησιμοποιήσετε και άλλους παρόχους (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) ή να τρέχετε μοντέλα τοπικά με [Ollama](https://ollama.com). Δείτε την ενότητα [Διαμόρφωση](#configuration-and-environment) για την πλήρη λίστα των υποστηριζόμενων παρόχων και τις μεταβλητές περιβάλλοντος.

Για περιορισμούς, BYOK και άλλα, δείτε το [Πιστοποίηση OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Διαμόρφωση και περιβάλλον

**Τοποθεσίες αρχείου διαμόρφωσης**

| Εγκατάσταση         | Τοποθεσία διαμόρφωσης                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Ιστός / Docker       | `/app/data/config.json` (χρησιμοποιήστε τόμο για διατήρηση) |

<br/>

**Μεταβλητές περιβάλλοντος** (μόνο για ιστό/Docker· το Electron χρησιμοποιεί το τοπικό αρχείο διαμόρφωσης)

| Μεταβλητή         | Προεπιλογή                 | Περιγραφή |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Θύρα ακρόασης του διακομιστή |
| `CONFIG_PATH`    | `/app/data/config.json` | Διαδρομή προς το αρχείο διαμόρφωσης |
| `OPENROUTER_KEY` | *(κενό)*               | Κλειδί API OpenRouter |
| `OPENAI_KEY`     | *(κενό)*               | Κλειδί API OpenAI |
| `ANTHROPIC_KEY`  | *(κενό)*               | Κλειδί API Anthropic |
| `GOOGLE_KEY`     | *(κενό)*               | Κλειδί API Google Gemini |
| `DEEPSEEK_KEY`   | *(κενό)*               | Κλειδί API DeepSeek |
| `GROQ_KEY`       | *(κενό)*               | Κλειδί API Groq |
| `MISTRAL_KEY`    | *(κενό)*               | Κλειδί API Mistral |
| `OLLAMA_URL`     | *(κενό)*               | Βασικό URL Ollama (π.χ. `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(κενό)*               | Κλειδί API xAI |

Διαμόρφωση μόνο για τους παρόχους που χρησιμοποιείτε. Τα αναγνωριστικά μοντέλων είναι ονοματοχώροι (`openrouter/…`, `openai/…`, `ollama/…`, κ.λπ.).

**Εμφάνιση κόστους:** Η OpenRouter επιστρέφει το ακριβές χρεωστέο κόστος, όταν εφαρμόζεται. Άλλοι πάροχοι χρησιμοποιούν **εκτιμώμενο** κόστος από τη δημόσια τιμολογία μοντέλων της OpenRouter όταν υπάρχει διαθέσιμο κλειδί OpenRouter· χωρίς αυτό, το κόστος μη OpenRouter ενδέχεται να εμφανίζεται ως `0`. Οι εκτιμήσεις δεν είναι τιμολόγια.

<br/>

**Δεδομένα και διατήρηση:** Για το Docker, συνδέστε έναν τόμο στο `/app/data` ώστε το `config.json` και η βάση δεδομένων SQLite να διατηρούνται κατά την επανεκκίνηση του container. Χωρίς τόμο, όλα τα δεδομένα χάνονται όταν το container σταματήσει.

**Προγραμματιστές:** Αφού κατεβάσετε αλλαγές που αντικαθιστούν την παλιά διαμόρφωση με ένα μόνο κλειδί, επαναφέρετε ή συγχωνεύστε το `data/config.json` με τη νέα προεπιλεγμένη μορφή από το `src/config-defaults/config_default.json`, αν το τοπικό σας αρχείο χρησιμοποιεί ακόμη αφαιρεθέντα πεδία (`api_key`, `api_url`, επιλογές proxy).

<br/>

**Πιστοποίηση ιστού:**

- Προεπιλεγμένος διαχειριστής: `admin` / `transrewrt26`.
- Διαχειρίζεστε χρήστες στο **Ρυθμίσεις → Χρήστες**.
- Επαναφορά κωδικού πρόσβασης: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (από πηγή: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ΠΡΟΕΙΔΟΠΟΙΗΣΗ**<br/>
> Αλλάξτε αμέσως τον προεπιλεγμένο κωδικό διαχειριστή σε κάθε κεντρικό υπολογιστή που μπορεί να προσβαστεί από το δίκτυο.

<br/>

Οι βασικές ρυθμίσεις (γραμματοσειρά, μοντέλα, γλώσσες, κ.λπ.) είναι διαθέσιμες στις Ρυθμίσεις της εφαρμογής.

<br/><br/>

<a id="development-and-architecture"></a>
## Προγραμματισμός και αρχιτεκτονική

- **Προγραμματισμός:** Ρύθμιση, δημιουργία, δοκιμή και ανάπτυξη (Electron, Ιστός, Docker) – δείτε **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Αρχιτεκτονική και επισκόπηση συστήματος:** Δομή φακέλων, τεχνολογικό stack, σχεδιαστικές αποφάσεις – δείτε **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Εκδόσεις και ετικέτες

- Οι **ετικέτες Git** με τη μορφή `v`* (π.χ. `v1.0.10`) ενεργοποιούν τη διαδικασία [έκδοσης (release workflow)](.github/workflows/release.yml). Οι **GitHub εκδόσεις (GitHub Releases)** συνοδεύονται από το πρόγραμμα εγκατάστασης για Windows (`.exe`) και το AppImage για Linux.
- **Εικόνες Docker** δημοσιεύονται στο `ghcr.io/wsj-br/transrewrt`. Οι ετικέτες των εικόνων αντιστοιχούν στην έκδοση Git (π.χ. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`), καθώς και η ετικέτα `latest`. Πολλαπλή αρχιτεκτονική: `linux/amd64` και `linux/arm64` (π.χ. για Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Συμμετοχή

1. Κάντε φάρκο (fork) το αποθετήριο.
2. Δημιουργήστε κλάδο χαρακτηριστικού: `git checkout -b feature/my-feature`
3. Εφαρμόστε τις αλλαγές σας με ένα σαφές μήνυμα.
4. Αναβάστε (push) και δημιουργήστε Αίτημα Αναχώρησης (Pull Request) προς το `main`.

Παρακαλούμε ακολουθήστε το υπάρχον ύφος κώδικα και δοκιμάστε τις αλλαγές σας και στη λειτουργία Electron και στην κανονική ιστοσελίδα πριν την υποβολή. Δείτε [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) για οδηγίες δημιουργίας και δοκιμών.

<br/>

**Αναφορά προβλημάτων:** Ανοίξτε θέμα (issue) στο [GitHub](https://github.com/wsj-br/transrewrt/issues). Συμπεριλάβετε την πλατφόρμα σας (Windows / Linux / Docker) και την έκδοση της εφαρμογής (που εμφανίζεται στο παράθυρο "Σχετικά" ή στη σελίδα εκδόσεων).

<br/><br/>

<a id="disclaimer"></a>
## Αποποίηση ευθυνών

Τα ονόματα και τα εικονίδια προϊόντων ανήκουν στους αντίστοιχους ιδιοκτήτες τους και χρησιμοποιούνται αποκλειστικά για σκοπούς αναγνώρισης. Αυτό το λογισμικό δεν έχει καμία σχέση με κανένα από τα αναφερόμενα προϊόντα ούτε τυγχάνει έγκρισής τους.

<br/><br/>

<a id="license"></a>
## Άδεια χρήσης

Πνευματικά δικαιώματα © 2026 Waldemar Scudeller Jr.

[Άδεια Apache 2.0](LICENSE)