---
title: Γρήγορη εκκίνηση
description: >-
  Εγκαταστήστε το Transrewrt σε Windows ή Linux, ή εκτελέστε την
  αυτο-φιλοξενούμενη εφαρμογή web Docker.
translation_last_updated: '2026-07-17T14:58:55.913Z'
source_file_mtime: '2026-07-17T14:55:54.211Z'
source_file_hash: 6eb0ab579b445d9c4d39567ef44ee3333f57285c5c2b8dd072de6355182f849f
translation_language: el
source_file_path: src/content/docs/docs/quick-start.md
translation_models:
  - google/gemini-2.5-flash
---



Επιλέξτε τη διαδρομή που σας ταιριάζει. Όλες είναι δωρεάν και ανοιχτού κώδικα (Apache 2.0).

## Docker (αυτο-φιλοξενούμενο web)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Αντικαταστήστε το `PROVIDER_API_KEY=sk-or-your-key` με το κλειδί API από τον πάροχο που επιλέξατε (δείτε τις υποστηριζόμενες επιλογές στην ενότητα [Διαμόρφωση](/docs/configuration/)).

Στη συνέχεια, ανοίξτε το [http://localhost:5000](http://localhost:5000) και **αλλάξτε τον προεπιλεγμένο κωδικό πρόσβασης διαχειριστή** πριν εκθέσετε την υπηρεσία.

:::caution
Στο Docker, τα διαπιστευτήρια LLM ορίζονται με μεταβλητές περιβάλλοντος (για παράδειγμα `PROVIDER_API_KEY`). **Δεν** εισάγονται στο περιβάλλον εργασίας χρήστη ιστού. Στην επιφάνεια εργασίας, διαμορφώνετε τα κλειδιά στις **Ρυθμίσεις → API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Κατεβάστε την τελευταία έκδοση `Transrewrt Setup x.y.z.exe` από τις [Εκδόσεις](https://github.com/wsj-br/transrewrt/releases).
2. Εκτελέστε το πρόγραμμα εγκατάστασης.
3. Ανοίξτε την εφαρμογή και εισαγάγετε τα κλειδιά API στις **Ρυθμίσεις → API**. Διαμορφώστε τουλάχιστον έναν πάροχο. Το OpenRouter είναι μια κοινή επιλογή για δωρεάν μοντέλα.

:::note
Τα Windows ενδέχεται να εμφανίσουν προειδοποιήσεις UAC ή SmartScreen για μη υπογεγραμμένες ανεξάρτητες εφαρμογές. Προτιμήστε λήψεις από την επίσημη σελίδα GitHub Releases και επαληθεύστε τα αθροίσματα ελέγχου όταν δημοσιεύονται.
:::

## Linux

Κατεβάστε το `.AppImage` για την CPU σας από τις [Εκδόσεις](https://github.com/wsj-br/transrewrt/releases) (`x64` ή `arm64`, συμπεριλαμβανομένου του Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Εισαγάγετε τα κλειδιά API στις **Ρυθμίσεις → API**.

Εάν το Chromium εμφανίζει σφάλματα GPU / EGL αλλά η εφαρμογή λειτουργεί, μπορείτε να απενεργοποιήσετε την επιτάχυνση υλικού:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
Το macOS δεν υποστηρίζεται επί του παρόντος. Το Transrewrt είναι διαθέσιμο για Windows, Linux και Docker.
:::

## Επόμενα βήματα

1. [Αποκτήστε ένα κλειδί API](/docs/api-key/)
2. Εκτελέστε μια απλή μετάφραση για να επιβεβαιώσετε ότι όλα λειτουργούν
3. Διαβάστε τους οδηγούς [Μετάφραση](/docs/translate/), [Επανεγγραφή](/docs/rewrite/) και [Μετασχηματισμός](/docs/transform/)
