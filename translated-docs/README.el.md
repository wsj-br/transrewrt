<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.2-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

Εργαλείο κειμένου με τεχνητή νοημοσύνη: **μετάφραση**, **επαναγραφή** και **μετασχηματισμός** με προσαρμοσμένες προτροπές — χρησιμοποιώντας τους δικούς σας παρόχους τεχνητής νοημοσύνης (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, τελικά σημεία συμβατά με OpenAI και τοπικούς διακομιστές συμβατούς με OpenAI όπως Ollama, LM Studio ή llama.cpp). Εφαρμογή επιφάνειας εργασίας (Windows / Linux) ή αυτο-φιλοξενούμενη εφαρμογή web (Docker). Χωρίς λογαριασμό Transrewrt cloud.

| | |
| --- | --- |
| **Μετάφραση** | Δεκάδες γλώσσες, αυτόματη ανίχνευση, γλωσσάρια, βελτίωση με Επαναδιατύπωση |
| **Επαναγραφή** | Σαφήνεια, τόνος, μήκος, ορθογραφία & γραμματική — ίδια γλώσσα |
| **Μετασχηματισμός** | Προσαρμοσμένες προτροπές AI που δημιουργείτε, επεξεργάζεστε και επαναχρησιμοποιείτε |
| **Ανάπτυξη** | Electron desktop ή Docker web (amd64 & arm64) |
| **Κλειδιά** | Οι πάροχοί σας, ο οικοδεσπότης σας — Εύκολες προεπιλογές ή λίστα μοντέλων για Προχωρημένους |

![Μετάφραση](../images/screenshots/el/translate.png)

<small>**Διαβάστε σε άλλες γλώσσες:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## Γρήγορη εκκίνηση

**Docker**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Ανοίξτε το [http://localhost:5000](http://localhost:5000) και αλλάξτε τον προεπιλεγμένο κωδικό πρόσβασης διαχειριστή. Τα κλειδιά παρόχου ορίζονται μέσω μεταβλητών περιβάλλοντος (όχι μέσω του περιβάλλοντος χρήστη web).

**Windows** — Κατεβάστε το `Transrewrt Setup x.y.z.exe` από τις [Εκδόσεις](https://github.com/wsj-br/transrewrt/releases), εγκαταστήστε το και, στη συνέχεια, προσθέστε κλειδιά στις **Ρυθμίσεις → API**.

**Linux** — Κατεβάστε το `.AppImage` από τις [Εκδόσεις](https://github.com/wsj-br/transrewrt/releases), και στη συνέχεια:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Λεπτομέρειες πλατφόρμας (Compose, SmartScreen, apt libs, GPU flags, ζώνη ώρας): [Έγγραφα γρήγορης εκκίνησης](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## Τεκμηρίωση

Πλήρης τεκμηρίωση προϊόντος (εγκατάσταση, κλειδιά API, οδηγοί, ρυθμίσεις, αντιμετώπιση προβλημάτων):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [Κλειδί API](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [Διαμόρφωση](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [Μετάφραση](https://wsj-br.github.io/transrewrt/docs/translate/) · [Επαναγραφή](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [Μετασχηματισμός](https://wsj-br.github.io/transrewrt/docs/transform/)
- [Κοινά προβλήματα](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## Ανάπτυξη

- Ρύθμιση, κατασκευή, δοκιμή, ανάπτυξη: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- Επισκόπηση αρχιτεκτονικής: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## Υποστήριξη

Ανοίξτε ένα ζήτημα στο [GitHub](https://github.com/wsj-br/transrewrt/issues). Συμπεριλάβετε την πλατφόρμα σας (Windows / Linux / Docker) και την έκδοση της εφαρμογής (διάλογος Σχετικά ή σελίδα Εκδόσεων).

## Ευχαριστίες

Οι προτάσεις προεπιλογών λειτουργίας "Εύκολο" στον επεξεργαστή προεπιλογών χρησιμοποιούν δημόσια δεδομένα αξιολόγησης από:

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [Artificial Analysis](https://artificialanalysis.ai/) (απαιτείται αναφορά πηγής για δεδομένα API)

Οι άδειες εξαρτήσεων τρίτων και αυτές οι ειδοποιήσεις πηγής δεδομένων παρατίθενται στο [NOTICES](../NOTICES).

## Άδεια

Πνευματικά δικαιώματα © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)

Τα ονόματα και τα εικονίδια των προϊόντων ανήκουν στους αντίστοιχους κατόχους τους και χρησιμοποιούνται μόνο για αναγνώριση. Αυτό το λογισμικό δεν είναι συνδεδεμένο ούτε υποστηρίζεται από αυτές τις επωνυμίες.

<small>

> **Σημείωση για τις μεταφράσεις UI και τεκμηρίωσης:** Όλες οι διεπαφές και γλώσσες τεκμηρίωσης εκτός από τα 
> αρχικά αγγλικά μεταφράστηκαν χρησιμοποιώντας μοντέλα AI με [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/);
> η λέξη μπορεί να είναι ακατάλληλη ή να περιέχει λάθη.

</small>
