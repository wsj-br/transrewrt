---
title: Διαμόρφωση
description: >-
  Θέσεις αρχείων διαμόρφωσης, μεταβλητές περιβάλλοντος Docker, λειτουργία
  απορρήτου και έλεγχος ταυτότητας ιστού.
translation_last_updated: '2026-07-17T21:14:41.689Z'
source_file_mtime: '2026-07-17T14:43:44.727Z'
source_file_hash: 8c3b2c00eddcee7693d66c5f5955c2d2186e55de630886446764bc6b798f05b5
translation_language: el
source_file_path: src/content/docs/docs/configuration.md
translation_models:
  - google/gemini-2.5-flash
---



## Θέσεις αρχείων διαμόρφωσης

| Ανάπτυξη | Θέση διαμόρφωσης |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (χρησιμοποιήστε έναν τόμο για διατήρηση) |

## Μεταβλητές περιβάλλοντος (web / Docker)

Το Electron χρησιμοποιεί το τοπικό αρχείο διαμόρφωσης. Μόνο για τον διακομιστή web/Docker:

| Μεταβλητή | Περιγραφή |
| --- | --- |
| `PORT` | Θύρα ακρόασης διακομιστή (προεπιλογή `5000`) |
| `CONFIG_PATH` | Διαδρομή προς το αρχείο διαμόρφωσης (προεπιλογή `/app/data/config.json`) |
| `TZ` | Ζώνη ώρας για την ώρα από την πλευρά του διακομιστή (προεπιλογή `Europe/London`) |
| `HISTORY_DISABLED` | Απενεργοποίηση ιστορικού εκτέλεσης (`true` / `1`) |
| `OPENROUTER_API_KEY` | Κλειδί API OpenRouter |
| `OPENAI_API_KEY` | Κλειδί API OpenAI |
| `CEREBRAS_API_KEY` | Κλειδί API Cerebras |
| `ANTHROPIC_API_KEY` | Κλειδί API Anthropic |
| `GOOGLE_API_KEY` | Κλειδί API Google Gemini |
| `DEEPSEEK_API_KEY` | Κλειδί API DeepSeek |
| `GROQ_API_KEY` | Κλειδί API Groq |
| `MISTRAL_API_KEY` | Κλειδί API Mistral |
| `LOCAL_LLM_URL` | Πλήρης διεύθυνση URL βάσης API συμβατή με OpenAI για έναν τοπικό διακομιστή (συμπεριλάβετε τη διαδρομή, π.χ. Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | Κλειδί API xAI |
| `NVIDIA_API_KEY` | Κλειδί API NVIDIA |
| `ALIBABA_API_KEY` | Κλειδί API Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | Κλειδί API apikey.fun |
| `CUSTOM_PROVIDER_NAME` | Όνομα εμφάνισης για έναν προσαρμοσμένο πάροχο συμβατό με το OpenAI |
| `CUSTOM_PROVIDER_URL` | Βασική διεύθυνση URL για έναν προσαρμοσμένο πάροχο συμβατό με το OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | Κλειδί API για τον προσαρμοσμένο πάροχο |

Και οι τρεις μεταβλητές `CUSTOM_PROVIDER_*` απαιτούνται κατά τη χρήση ενός προσαρμοσμένου τελικού σημείου. Τα μοντέλα εμφανίζονται σε λειτουργία **Advanced** ως `{providerName}/…`.

## Λειτουργία απορρήτου

Ορίστε το `HISTORY_DISABLED` σε `true` ή `1` στη διαδικασία διακομιστή web/Docker και/ή στην κύρια διαδικασία Electron για να απενεργοποιήσετε αναγκαστικά το ιστορικό ανεξάρτητα από το `config.json` ή τις προτιμήσεις ανά χρήστη. Αυτό απενεργοποιεί την αποθήκευση του ιστορικού εισόδου/εξόδου, κλειδώνει τις **Ρυθμίσεις → Γενικές Ρυθμίσεις → Ιστορικό** και αποκλείει τα API που σχετίζονται με το Ιστορικό.

## Διατήρηση δεδομένων (Docker)

Προσαρτήστε έναν τόμο στο `/app/data`, ώστε το `config.json` και η βάση δεδομένων SQLite να επιβιώσουν από τις επανεκκινήσεις του κοντέινερ. Χωρίς τόμο, τα δεδομένα χάνονται όταν το κοντέινερ σταματήσει.

## Έλεγχος ταυτότητας ιστού

- Προεπιλεγμένος διαχειριστής: `admin` / `transrewrt26`
- Διαχείριση χρηστών στις **Ρυθμίσεις → Χρήστες**
- Επαναφορά κωδικού πρόσβασης:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Αλλάξτε τον προεπιλεγμένο κωδικό πρόσβασης διαχειριστή αμέσως σε οποιονδήποτε προσβάσιμο μέσω δικτύου κεντρικό υπολογιστή.
:::

## Εμφάνιση κόστους

Το OpenRouter επιστρέφει το ακριβές χρεωμένο κόστος όταν ισχύει. Άλλοι πάροχοι χρησιμοποιούν **εκτιμώμενο** κόστος από τη δημόσια τιμολόγηση μοντέλων του OpenRouter όταν είναι διαθέσιμο ένα κλειδί OpenRouter. Οι εκτιμήσεις δεν είναι τιμολόγια.

Για το περιβάλλον εργασίας χρήστη των Ρυθμίσεων (γραμματοσειρές, μοντέλα, ιστορικό, αντίγραφα ασφαλείας), ανατρέξτε στις [Ρυθμίσεις](/docs/settings/).
