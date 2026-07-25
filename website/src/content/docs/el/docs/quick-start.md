---
title: Γρήγορη εκκίνηση
description: >-
  Εγκαταστήστε το Transrewrt σε Windows ή Linux, ή εκτελέστε την
  αυτο-φιλοξενούμενη εφαρμογή web Docker.
---



Επιλέξτε τη διαδρομή που σας ταιριάζει. Όλες είναι δωρεάν και ανοιχτού κώδικα (Apache 2.0).

## Docker (αυτο-φιλοξενούμενο web)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Αντικαταστήστε το `PROVIDER_API_KEY` με τη μεταβλητή για τον πάροχό σας (για παράδειγμα `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `XIA_API_KEY`, ...) και ορίστε την τιμή του. Δείτε την πλήρη λίστα στην ενότητα [Διαμόρφωση](/docs/configuration/#environment-variables-web--docker).

Στη συνέχεια, ανοίξτε το [http://localhost:5000](http://localhost:5000) και **αλλάξτε τον προεπιλεγμένο κωδικό πρόσβασης διαχειριστή** πριν εκθέσετε την υπηρεσία.

:::tip
Στο Docker, τα διαπιστευτήρια LLM ορίζονται με μεταβλητές περιβάλλοντος (για παράδειγμα `PROVIDER_API_KEY`). **Δεν** καταχωρούνται στο περιβάλλον εργασίας χρήστη ιστού. Στην επιφάνεια εργασίας, διαμορφώνετε τα κλειδιά στις **Ρυθμίσεις → Διαμόρφωση API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Κατεβάστε το πιο πρόσφατο `Transrewrt Setup x.y.z.exe` από τις [Εκδόσεις](https://github.com/wsj-br/transrewrt/releases).
2. Εκτελέστε το πρόγραμμα εγκατάστασης.
3. Ανοίξτε την εφαρμογή και εισαγάγετε τα κλειδιά API στις **Ρυθμίσεις → Διαμόρφωση API**. Διαμορφώστε τουλάχιστον έναν πάροχο. Το OpenRouter είναι μια κοινή επιλογή για δωρεάν μοντέλα.

:::note
Τα Windows ενδέχεται να εμφανίσουν προειδοποιήσεις UAC ή SmartScreen κατά την εγκατάσταση της εφαρμογής. Είναι ασφαλές να την εγκαταστήσετε εάν την κατεβάσετε από την επίσημη σελίδα GitHub Releases. Κάντε κλικ στο «Περισσότερες πληροφορίες» και «Εκτέλεση ούτως ή άλλως» για να την εγκαταστήσετε.
:::

## Linux

Κατεβάστε το `.AppImage` για την CPU σας από τις [Εκδόσεις](https://github.com/wsj-br/transrewrt/releases) (`x64` ή `arm64`, συμπεριλαμβανομένου του Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Εισαγάγετε τα κλειδιά API στις **Ρυθμίσεις → Διαμόρφωση API**.

Εάν το Chromium εμφανίζει σφάλματα GPU / EGL αλλά η εφαρμογή λειτουργεί, μπορείτε να απενεργοποιήσετε την επιτάχυνση υλικού:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
Το macOS δεν υποστηρίζεται επί του παρόντος. Το Transrewrt είναι διαθέσιμο για Windows, Linux και Docker.
:::

## Ενημέρωση

- **Windows** — κατεβάστε το νεότερο `Transrewrt Setup x.y.z.exe` από τις [Εκδόσεις](https://github.com/wsj-br/transrewrt/releases) και εκτελέστε το. Οι ρυθμίσεις και τα δεδομένα διατηρούνται.
- **Linux** — κατεβάστε το νεότερο `.AppImage` και αντικαταστήστε το παλιό αρχείο. Οι ρυθμίσεις και τα δεδομένα διατηρούνται.
- **Docker** — τραβήξτε τη νέα εικόνα και δημιουργήστε ξανά το κοντέινερ. Τα δεδομένα παραμένουν στον τόμο `/app/data`:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## Επόμενα βήματα

1. [Αποκτήστε ένα κλειδί API](/docs/api-key/)
2. Εκτελέστε μια απλή μετάφραση για να επιβεβαιώσετε ότι όλα λειτουργούν
3. Διαβάστε τους οδηγούς [Μετάφραση](/docs/translate/), [Επανεγγραφή](/docs/rewrite/) και [Μετασχηματισμός](/docs/transform/)
