---
translated_at: "2026-03-29T01:54:56.193Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Έκδοση"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Άδεια: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Πλατφόρμα">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Εργαλείο κειμένου με χρήση τεχνητής νοημοσύνης: μεταφράστε σε διάφορες γλώσσες, ξαναγράψτε με διαφορετικές εκφράσεις και μετατρέψτε με προσαρμοσμένες οδηγίες — χρησιμοποιώντας πολλαπλούς παρόχους τεχνητής νοημοσύνης (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, και τοπικό Ollama). Λειτουργεί ως εφαρμογή υπολογιστή (Electron) ή ως υπηρεσία ιστού αυτοδιαχειρίζεται (Docker).

- **Μετάφραση** — μεταξύ δεκάδων γλωσσών, με αυτόματη ανίχνευση πηγής
- **Επανεκκίνηση** — διόρθωση γραμματικής, βελτίωση της σαφήνειας, επίσημα/ανεπίσημα, συντομότερα, εκτεταμένα, τεχνικά
- **Μετασχηματισμός** — προσαρμοσμένες ερωτήσεις ΤΝ· δημιουργία και διαχείριση ερωτήσεων, προαιρετική γλώσσα προορισμού ανά ερώτηση
- **Ιστορικό** — πλήρες ιστορικό εκτέλεσης με είσοδο/έξοδο κειμένου, φιλτράρισμα και εξαγωγή
- **Μοντέλα & κόστος** — επιλογή μοντέλων από οποιονδήποτε διαμορφωμένο πάροχο· πίνακες ελέγχου κόστους και χρήσης με αρχεία καταγραφής, περιλήψεις ανά μοντέλο/λειτουργία/ημέρα
- **Διεπαφή χρήστη (UI)** — πολύγλωσση διεπαφή (30+ γλώσσες, υποστήριξη RTL), γραμματοσειρές, ...
- **Λειτουργία ιστού** — υποστήριξη πολλαπλών χρηστών με ρόλους διαχειριστή
- **Επιτραπέζια** — εφαρμογή Electron για Windows και Linux
- **Επικονδύλωση επιτόπου** — εικόνα Docker για amd64 & arm64 (έτοιμο για Raspberry Pi)

Μετά την εγκατάσταση, ανατρέξτε στον **[Οδηγό Χρήσης](USER-GUIDE.el.md)** για πλήρη ξενάγηση όλων των λειτουργιών.

<small>**Διαβάστε σε άλλες γλώσσες:** </small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

E.pl.md) · [Πορτογαλικά (Πτ)](README.pt.md) · [Παντζάμπι](README.pa.md) · [Ρουμανικά](README.ro.md) · [Ρωσικά](README.ru.md) · [Σλοβακικά](README.sk.md) · [Ισπανικά](README.es.md) · [Σουαχίλι](README.sw.md) · [Σουηδικά](README.sv.md) · [Τελούγκου](README.te.md) · [Θαϊλανδικά](README.th.md) · [Τουρκικά](README.tr.md) · [Ουκρανικά](README.uk.md) · [Βιετναμέζικα](README.vi.md)</small>

<small>

> **Σημείωση σχετικά με τις μεταφράσεις του περιβάλλοντος χρήστη και της τεκμηρίωσης:** Όλες οι γλώσσες διεπαφής, εκτός από τα αρχικά Αγγλικά (ΗΒ),  
> μεταφράστηκαν με χρήση μοντέλων τεχνητής νοημοσύνης· η διατύπωση μπορεί να είναι ανακριβής ή να περιλαμβάνει σφάλματα.

</small>

<br/>

<a id="screenshots"></a>

## Στιγμιότυπα οθόνης

**Επιλογέας γλώσσας**

![Επιλογέας γλώσσας](../images/screenshots/el/language-selector.png)

**Μετάφραση**

![Μετάφραση](../images/screenshots/el/translate.png)

**Μετασχηματισμός - επεξεργασία ερωτήματος**

![Μετασχηματισμός - επεξεργασία ερωτήματος](../images/screenshots/el/transform-prompt-edit.png)

**Επισκόπηση**

![Επισκόπηση — χρήση](../images/screenshots/el/dashboard-summary.png)

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
  - [Διαμόρφωση ζώνης ώρας](#configuring-the-timezone)
- [Λήψη κλειδιού OpenRouter API](#getting-an-openrouter-api-key)
- [Διαμόρφωση και περιβάλλον](#configuration-and-environment)
- [Ανάπτυξη και αρχιτεκτονική](#development-and-architecture)
- [Αναφορά προβλημάτων](#reporting-issues)
- [Αποποίηση ευθυνών](#disclaimer)
- [Άδεια χρήσης](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Γρήγορη έναρξη

**Docker (προτείνεται για αυτο-φιλοξενία)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Αντικαταστήστε το `sk-or-your-key` με το πλήκτρο API σας από το [OpenRouter API key](https://openrouter.ai/keys) (ή ορίστε πλήκτρα άλλων παρόχων· δείτε [Διαμόρφωση](#configuration-and-environment)). Ανοίξτε το [http://localhost:5000](http://localhost:5000) και αλλάξτε τον προεπιλεγμένο κωδικό διαχειριστή πριν εκθέσετε την υπηρεσία.

<br/>

> ℹ️ **ΣΗΜΕΙΩΣΗ**<br/>
> Στο Docker, τα πιστοποιητικά για τα LLM ορίζονται μέσω μεταβλητών περιβάλλοντος όπως `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (όχι μέσω του γραφικού περιβάλλοντος). Σε εφαρμογές επιτραπεζίου (Electron), τα πλήκτρα διαμορφώνονται στο **Ρυθμίσεις → API**.

<br/>

**Windows**

Κατεβάστε το τελευταίο `Transrewrt Setup x.y.z.exe` από την ενότητα [Releases](https://github.com/wsj-br/transrewrt/releases), εκτελέστε το πρόγραμμα εγκατάστασης και ξεκινήστε το από το μενού Έναρξη ή τη συντόμευση της επιφάνειας εργασίας. Εισαγάγετε τα κλειδιά API στην ενότητα **Ρυθμίσεις → API**. Πρέπει να ρυθμίσετε τουλάχιστον ένα πάροχο· ο OpenRouter είναι συνηθισμένη επιλογή για δωρεάν μοντέλα.

<br/>

**Linux**

Κατεβάστε το `.AppImage` που αντιστοιχεί στον επεξεργαστή σας από την ενότητα [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` για τυπικούς υπολογιστές, `arm64` για πολλές συσκευές ARM, συμπεριλαμβανομένων των Raspberry Pi 4+), κατόπιν:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Εισαγάγετε τα κλειδιά API σας στην ενότητα **Ρυθμίσεις → API**. Πρέπει να ρυθμίσετε τουλάχιστον έναν πάροχο· ο OpenRouter είναι συνηθισμένη επιλογή για δωρεάν μοντέλα.

Σε Debian/Ubuntu ενδέχεται να χρειαστεί να εγκαταστήσετε πρώτα επιπλέον εξαρτήσεις:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Δείτε λεπτομέρειες στην ενότητα [Εγκατάσταση → Linux](#linux-electron).

<br/>

> ℹ️ **ΣΗΜΕΙΩΣΗ**<br/>

> Το macOS δεν υποστηρίζεται προς το παρόν. Το Transrewrt είναι διαθέσιμο για Windows, Linux και Docker.

<br/>

Αφού η εφαρμογή εκτελεστεί, δείτε το **[Εγχειρίδιο Χρήστη](USER-GUIDE.el.md)** για να μάθετε πώς να μεταφράζετε, ξαναγράφετε και μετασχηματίζετε κείμενο, να διαχειρίζεστε ερωτήματα και να ρυθμίζετε μοντέλα.

<br/><br/>

<a id="installation"></a>

## Εγκατάσταση

<a id="windows-electron"></a>

### Windows (Electron)

- Κατεβάστε το τελευταίο πρόγραμμα εγκατάστασης από τη σελίδα [Releases](https://github.com/wsj-br/transrewrt/releases).
- Εκτελέστε το αρχείο `.exe` και ακολουθήστε τις οδηγίες του προγράμματος εγκατάστασης.
- Για την πρώτη εκκίνηση: ξεκινήστε την εφαρμογή από το μενού Έναρξη ή από τη συντόμευση στην επιφάνεια εργασίας.

<br/>

> ℹ️ **ΣΗΜΕΙΩΣΗ**<br/>
> Το Windows μπορεί να εμφανίσει μία από τις παρακάτω προειδοποιήσεις ασφαλείας (κανονικό για μη υπογεγραμμένες/ανεξάρτητες εφαρμογές):
>   - **Έλεγχος Λογαριασμού Χρήστη (UAC)**: "Θέλετε να επιτρέψετε σε αυτήν την εφαρμογή από άγνωστο εκδότη να κάνει αλλαγές στη συσκευή σας;" → Κάντε κλικ στο **Ναι**.
>   - **Microsoft Defender SmartScreen**: "Το Windows προστάτεψε τον υπολογιστή σας" → Κάντε κλικ στο **Περισσότερες πληροφορίες** → **Εκτέλεση όλως έτσι**.
>
> Αυτό συμβαίνει επειδή η εφαρμογή δεν έχει υπογραφεί από τη Microsoft ή κάποιον μεγάλο εκδότη — είναι ασφαλής αν έχει ληφθεί από τις επίσημες εκδόσεις μας στο GitHub  
> (επιβεβαιώστε το αθροιστικό ελέγχου SHA256 παρακάτω).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- Κατεβάστε το αντίστοιχο `.AppImage` (`x64` ή `arm64`) από το [Releases](https://github.com/wsj-br/transrewrt/releases).
- Εκτελέστε: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` σε x86_64/amd64, ή χρησιμοποιήστε το όνομα αρχείου `...-arm64.AppImage` σε ARM64.
- Επιπλέον εξαρτήσεις (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Δείτε [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) για περισσότερες πληροφορίες.

<br/>

<a id="docker"></a>

### Docker

- Λήψη: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Ρυθμίστε τουλάχιστον ένα κλειδί παρόχου μέσω περιβάλλοντος (π.χ. `OPENROUTER_API_KEY` για OpenRouter). Περάστε τις μεταβλητές με `-e` ή μέσω `docker compose` / `.env`, ώστε τα μυστικά να μην ενσωματωθούν στην εικόνα.
- Τα κλειδιά παρόχου **δεν** εισάγονται στο διαδικτυακό UI· ο διακομιστής τα διαβάζει από το περιβάλλον.

Παράδειγμα - ονομαστικός τόμος για μόνιμη αποθήκευση (κλειδί OpenRouter μέσω env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

ή, αν προτιμάτε το Docker Compose, χρησιμοποιήστε:

```
# κατεβάστε το αρχείο compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# επεξεργαστείτε το αρχείο για να προσθέσετε τα API_KEYS και να προσαρμόσετε τη ζώνη ώρας (TZ)
vi transrewrt.yml
# εκκινήστε τον διακομιστή
docker compose -f transrewrt.yml up -d

Δείτε [Διαμόρφωση](#configuration-and-environment) για όλες τις μεταβλητές περιβάλλοντος, όπως `PORT`, `CONFIG_PATH`, `TZ` και τα κλειδιά LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, ...).

<a id="configuring-the-timezone"></a>

### Διαμόρφωση της ζώνης ώρας

Η ώρα και η ημερομηνία στο περιβάλλον χρήστη της εφαρμογής ακολουθούν την τοπική ρύθμιση και τη ζώνη ώρας του **προγράμματος περιήγησης**. Για τη **λειτουργία στην πλευρά διακομιστή** (καταγραφή και παρόμοιες λειτουργίες), ο χώρος χρησιμοποιεί τη μεταβλητή περιβάλλοντος `TZ`. Η προεπιλεγμένη τιμή είναι `TZ=Europe/London`.

Για να χρησιμοποιήσετε διαφορετική ζώνη ώρας, ορίστε το `TZ` στο αρχείο Σύνθεσης (Compose), για παράδειγμα:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Ή περάστε το κατά την εκτέλεση του χώρου (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Σε πολλούς κεντρικούς υπολογιστές Linux, μπορείτε να αντιγράψετε το όνομα της ζώνης ώρας του συστήματος χρησιμοποιώντας:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Μια λίστα με έγκυρα ονόματα ζωνών ώρας διατηρείται στη [βάση δεδομένων tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Λήψη κλειδιού OpenRouter API

Το Transrewrt υποστηρίζει πολλά παρόχους τεχνητής νοημοσύνης. Το [OpenRouter](https://openrouter.ai) είναι μια δημοφιλής επιλογή γιατί συγκεντρώνει πολλά μοντέλα υπό ένα κλειδί και προσφέρει δωρεάν μοντέλα.

1. Εγγραφείτε ή συνδεθείτε στο [openrouter.ai](https://openrouter.ai).
2. Ανοίξτε τη σελίδα [Keys](https://openrouter.ai/keys) και δημιουργήστε ένα νέο κλειδί (δώστε του όνομα και προαιρετικά ορίστε όριο πιστωτικού). Μπορείτε να χρησιμοποιήσετε δωρεάν μοντέλα χωρίς να προσθέσετε πίστωση.
3. **Σταθερός (Electron):** επικολλήστε τα κλειδιά στο **Ρυθμίσεις → API**. **Docker:** ορίστε τις μεταβλητές περιβάλλοντος όπως `OPENROUTER_API_KEY` (δείτε [Γρήγορη έναρξη](#quick-start)).

Μη χρησιμοποιείτε το μοντέλο **Body Builder** του OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) για μετάφραση, αναδιατύπωση ή μετασχηματισμό: επιστρέφει φορτία αιτήματος JSON, όχι το ολοκληρωμένο κείμενο για αυτές τις εργασίες. Δείτε [Ρυθμίσεις → Μοντέλα](USER-GUIDE.el.md#models) στον Οδηγό Χρήστη.

Μπορείτε επίσης να χρησιμοποιήσετε άλλους πάροχους (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ή να εκτελέσετε μοντέλα τοπικά με το [Ollama](https://ollama.com). Δείτε το [Διαμόρφωση](#configuration-and-environment) για την πλήρη λίστα των υποστηριζόμενων παρόχων και τις μεταβλητές περιβάλλοντος.

> ⚠️ **ΠΡΟΕΙΔΟΠΟΙΗΣΗ**<br/>
> Αν χρησιμοποιείτε το Ollama από άλλη συσκευή, container ή υπηρεσία, θυμηθείτε να διαμορφώσετε το Ollama για να επιτρέπει εξωτερικές συνδέσεις (όχι μόνο localhost).

Για όρια, BYOK και άλλα, δείτε την [πιστοποίηση OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Διαμόρφωση και περιβάλλον

**Τοποθεσίες αρχείων ρυθμίσεων**

| Εγκατάσταση         | Τοποθεσία ρυθμίσεων                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (χρησιμοποιήστε έναν τόμο για διατήρηση) |

<br/>

**Μεταβλητές περιβάλλοντος** (μόνο για web/Docker· το Electron χρησιμοποιεί το τοπικό αρχείο ρυθμίσεων)

| Μεταβλητή         | Προεπιλογή                 | Περιγραφή |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Θύρα ακρόασης του διακομιστή |
| `CONFIG_PATH`    | `/app/data/config.json` | Διαδρομή προς το αρχείο ρυθμίσεων |
| `TZ`             | `Europe/London`         | Ζώνη ώρας IANA για την ώρα της πλευράς διακομιστή (καταγραφή κ.λπ.); το περιβάλλον χρήστη ακολουθεί ακόμα το πρόγραμμα περιήγησης. Δείτε [Docker → timezone](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(κενό)*               | Κλειδί API OpenRouter |
| `OPENAI_API_KEY`     | *(κενό)*               | Κλειδί API OpenAI |
| `CEREBRAS_API_KEY`   | *(κενό)*               | Κλειδί API Cerebras |
| `ANTHROPIC_API_KEY`  | *(κενό)*               | Κλειδί API Anthropic |
| `GOOGLE_API_KEY`     | *(κενό)*               | Κλειδί API Google Gemini |
| `DEEPSEEK_API_KEY`   | *(κενό)*               | Κλειδί API DeepSeek |
| `GROQ_API_KEY`       | *(κενό)*               | Κλειδί API Groq |
| `MISTRAL_API_KEY`    | *(κενό)*               | Κλειδί API Mistral |
| `OLLAMA_URL`     | *(κενό)*               | Βασικό URL Ollama (π.χ. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(κενό)*               | Κλειδί API xAI |

Ρυθμίστε μόνο τους παρόχους τους οποίους χρησιμοποιείτε. Οι Αναγνωριστικοί προτύπων έχουν το δικό τους χώρο ονομάτων (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, κ.λπ.).

**Προβολή κόστους:** Ο OpenRouter επιστρέφει το ακριβές χρεώσιμο κόστος όταν αυτό ισχύει. Άλλοι πάροχοι χρησιμοποιούν **εκτιμώμενο** κόστος από τη δημόσια τιμολογιακή πολιτική προτύπων του OpenRouter, όταν είναι διαθέσιμο κλειδί OpenRouter· χωρίς αυτό, το κόστος μη OpenRouter ενδέχεται να εμφανίζεται ως `0`. Οι εκτιμήσεις δεν είναι τιμολόγια.

<br/>

**Δεδομένα και διατήρηση:** Για Docker, προσθέστε έναν τόμο στο `/app/data` ώστε το `config.json` και η βάση δεδομένων SQLite να διατηρούνται μετά από επανεκκίνηση του περιέχοντος. Χωρίς τόμο, όλα τα δεδομένα χάνονται όταν το περιέχον σταματάει.

**Προγραμματιστές:** Μετά την απόσυρση αλλαγών που αντικαθιστούν την παλιά διαμόρφωση μονού κλειδιού, επαναφέρετε ή συγχωνεύστε το αρχείο `data/config.json` με το νέο προεπιλεγμένο σχήμα από το `src/config-defaults/config_default.json`, εάν το τοπικό αρχείο σας χρησιμοποιεί ακόμα πεδία που αφαιρέθηκαν (`api_key`, `api_url`, επιλογές proxy).

<br/>

**Πιστοποίηση μέσω ιστού:**

- Προεπιλεγμένος διαχειριστής: `admin` / `transrewrt26`.
- Διαχείριση χρηστών στο **Ρυθμίσεις → Χρήστες**.

- Επαναφορά κωδικού πρόσβασης: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (από τον πηγαϊκό κώδικα: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ΠΡΟΕΙΔΟΠΟΙΗΣΗ**<br/>
> Αλλάξτε αμέσως τον προεπιλεγμένο κωδικό διαχειριστή σε κάθε υπολογιστή που έχει πρόσβαση στο δίκτυο.

<br/>

Οι βασικές ρυθμίσεις (γραμματοσειρά, μοντέλα, γλώσσες κ.λπ.) είναι διαθέσιμες στις Ρυθμίσεις της εφαρμογής.

<br/><br/>

<a id="development-and-architecture"></a>

## Ανάπτυξη και αρχιτεκτονική

- **Ανάπτυξη:** Ρύθμιση, δημιουργία, δοκιμή και ανάπτυξη (Electron, Ιστός, Docker) - δείτε **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Αρχιτεκτονική και επισκόπηση συστήματος:** Δομή φακέλων, τεχνολογική πλατφόρμα, σχεδιαστικές αποφάσεις - δείτε **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## Αναφορά προβλημάτων

Ανοίξτε ένα ζήτημα στο [GitHub](https://github.com/wsj-br/transrewrt/issues). Αναφέρετε την πλατφόρμα σας (Windows / Linux / Docker) και την έκδοση της εφαρμογής (φαίνεται στο παράθυρο Σχετικά ή στη σελίδα Κυκλοφορίες).

<br/><br/>

<a id="disclaimer"></a>

## Αποποίηση

Τα ονόματα προϊόντων και τα εικονίδια ανήκουν στους νόμιμους κατόχους τους και χρησιμοποιούνται αποκλειστικά για αναγνώριση. Το λογισμικό αυτό δεν σχετίζεται ούτε εγκρίνεται από καμία από τις αναφερόμενες μάρκες.

<br/><br/>

<a id="license"></a>

## Άδεια χρήσης

Πνευματική ιδιοκτησία © 2026 Waldemar Scudeller Jr.

[Άδεια Apache 2.0](LICENSE)