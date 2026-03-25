---
translated_at: "2026-03-25T22:21:47.915Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Versi"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lesen: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Alat teks berasaskan AI: terjemah antara bahasa, menulis semula gaya berbeza, dan mengubah suai dengan arahan tersuai — menggunakan pelbagai penyedia AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, dan Ollama tempatan). Berjalan sebagai aplikasi desktop (Electron) atau aplikasi web swasterap (Docker).

- **Terjemah** — antara puluhan bahasa, dengan pengesanan sumber automatik
- **Tulis semula** — betulkan tatabahasa, tingkatkan kejelasan, gaya formal/tidak formal, pendekkan, panjangkan, teknikal
- **Ubah suai** — arahan AI tersuai; cipta dan urus arahan, bahasa sasaran pilihan mengikut arahan
- **Sejarah** — rekod pelaksanaan penuh dengan teks input/output, penapisan, dan eksport
- **Model & kos** — pilih model daripada mana-mana penyedia yang dikonfigurasikan; papan pemuka kos dan penggunaan dengan log, ringkasan mengikut model/operasi/hari
- **UI** — antara muka pelbagai bahasa (30+ bahasa, sokongan RTL), fon, ...
- **Mod web** — sokongan pelbagai pengguna dengan peranan pentadbir
- **Desktop** — aplikasi Electron untuk Windows dan Linux
- **Swasterap** — imej Docker untuk amd64 & arm64 (bersedia untuk Raspberry Pi)

Selepas dipasang, rujuk **[Panduan Pengguna](USER-GUIDE.ms.md)** untuk penerangan lengkap semua ciri.

<small>**Baca dalam bahasa lain:** [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Nota mengenai terjemahan UI dan dokumentasi:** Semua bahasa antaramuka kecuali bahasa Inggeris (UK) asal 
> telah diterjemahkan menggunakan model AI; perkataan mungkin kurang tepat atau mengandungi ralat.

</small>

<br/>

<a id="screenshots"></a>
## Tangkapan Skrin

**Pemilih bahasa**

![Pemilih bahasa](../images/screenshots/ms/language-selector.png)

**Terjemah**

![Terjemah](../images/screenshots/ms/translate.png)

**Transformasi - editor arahan**

![Transformasi - editor arahan](../images/screenshots/ms/transform-prompt-edit.png)

**Papan pemuka**

![Papan pemuka kos](../images/screenshots/ms/dashboard-summary.png)

**Sejarah**

![Sejarah](../images/screenshots/ms/history.png)

**Tetapan - pemilihan model**

![Tetapan - pemilihan model](../images/screenshots/ms/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Isi Kandungan

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Pemasangan pantas](#quick-start)
- [Pemasangan](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Mendapatkan kunci API OpenRouter](#getting-an-openrouter-api-key)
- [Konfigurasi dan persekitaran](#configuration-and-environment)
- [Pembangunan dan arsitektur](#development-and-architecture)
- [Versi dan tag](#releases-and-tags)
- [Menyumbang](#contributing)
- [Penafian](#disclaimer)
- [Lesen](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Pemasangan pantas

**Docker (digalakkan untuk penganjikan sendiri)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Gantikan `sk-or-your-key` dengan [kunci API OpenRouter](https://openrouter.ai/keys) anda (atau tetapkan kunci penyedia lain; lihat [Konfigurasi](#configuration-and-environment)). Buka [http://localhost:5000](http://localhost:5000) dan tukar kata laluan pentadbir lalai sebelum mendedahkan perkhidmatan.

<br/>

> ℹ️ **NOTA**<br/>
> Dalam Docker, kredensial LLM ditetapkan menggunakan pemboleh ubah persekitaran seperti `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (bukan dalam UI web). Pada desktop (Electron), anda mengkonfigurasi kunci di **Tetapan → API**.

<br/>

**Windows**

Muat turun `Transrewrt Setup x.y.z.exe` terkini dari [Versi](https://github.com/wsj-br/transrewrt/releases), jalankan pemasang, kemudian mulakan dari menu Mulakan atau pintasan desktop. Masukkan kunci API anda di **Tetapan → API**. Anda perlu mengkonfigurasi sekurang-kurangnya satu penyedia; OpenRouter adalah biasa digunakan untuk model percuma.

<br/>

**Linux**

Muat turun fail `.AppImage` untuk CPU anda dari [Versi](https://github.com/wsj-br/transrewrt/releases) (`x64` untuk PC biasa, `arm64` untuk kebanyakan peranti ARM, termasuk Raspberry Pi 4+), kemudian:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Masukkan kunci API anda di **Tetapan → API**. Anda perlu mengkonfigurasi sekurang-kurangnya satu penyedia; OpenRouter adalah biasa digunakan untuk model percuma.

Pada Debian/Ubuntu, anda mungkin perlu memasang pergantungan tambahan dahulu:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Rujuk [Pemasangan → Linux](#linux-electron) untuk maklumat lanjut.

<br/>

> ℹ️ **NOTA**<br/>
> macOS kini tidak disokong. Transrewrt tersedia untuk Windows, Linux, dan Docker.

<br/>

Apabila aplikasi berjalan, rujuk **[Panduan Pengguna](USER-GUIDE.ms.md)** untuk mempelajari cara menterjemah, menulis semula, dan mengubah teks, menguruskan arahan, serta mengkonfigurasi model.

<br/><br/>

<a id="installation"></a>
## Pemasangan

<a id="windows-electron"></a>
### Windows (Electron)

- Muat turun pemasang terkini dari [Versi](https://github.com/wsj-br/transrewrt/releases).
- Jalankan fail `.exe` dan ikuti arahan pemasang.
- Pusingan pertama: mulakan aplikasi dari menu Mulakan atau pintasan desktop.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Muat turun `.AppImage` yang sesuai (`x64` atau `arm64`) dari [Versi](https://github.com/wsj-br/transrewrt/releases).
- Jalankan: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` pada x86_64/amd64, atau gunakan nama fail `...-arm64.AppImage` pada ARM64.
- Pergantungan tambahan (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Rujuk [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) untuk maklumat lanjut.

<br/>

<a id="docker"></a>
### Docker

- Muat turun: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Tetapkan sekurang-kurangnya satu kunci penyedia melalui persekitaran (contohnya `OPENROUTER_KEY` untuk OpenRouter). Hantar pemboleh ubah dengan `-e` atau gunakan `docker compose` / `.env` supaya rahsia tidak diinkorporasikan ke dalam imej.
- Kunci penyedia **tidak** dimasukkan dalam UI web; pelayan membacanya daripada persekitaran.

Contoh - gunakan volume bernama untuk kekal (kunci OpenRouter melalui env):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Pilihan   | Keterangan                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (peta dengan `-p 5000:5000`)                                                                              |
| Volume   | Pasang `/app/data` untuk kekal konfigurasi dan pangkalan data                                                         |
| Pemboleh ubah persekitaran | `PORT`, `CONFIG_PATH`, serta kunci LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - lihat [Konfigurasi](#configuration-and-environment) |

Untuk bina dan jalankan daripada kod punca: `docker compose up --build -d` atau `pnpm docker:up` - lihat [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Mendapatkan kunci API OpenRouter

Transrewrt menyokong berbagai pembekal AI. [OpenRouter](https://openrouter.ai) adalah pilihan popular kerana menggabungkan banyak model di bawah satu kunci dan menawarkan model percuma.

1. Daftar atau log masuk di [openrouter.ai](https://openrouter.ai).
2. Buka halaman [Keys](https://openrouter.ai/keys) dan cipta kunci baharu (beri nama, dan secara pilihan tetapkan had kredit). Anda boleh menggunakan model percuma tanpa menambah kredit.
3. **Desktop (Electron):** tampal kunci di **Settings → API**. **Docker:** tetapkan pemboleh ubah persekitaran seperti `OPENROUTER_KEY` (lihat [Quick start](#quick-start)).

Jangan gunakan model **Body Builder** OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) untuk terjemah, tulis semula, atau transformasi: ia mengembalikan muatan permintaan JSON, bukan teks siap untuk tugas-tugas tersebut. Lihat [Settings → Models](USER-GUIDE.ms.md#models) dalam Panduan Pengguna.

Anda juga boleh gunakan pembekal lain (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) atau jalankan model secara tempatan dengan [Ollama](https://ollama.com). Lihat [Configuration](#configuration-and-environment) untuk senarai penuh pembekal yang disokong dan pemboleh ubah persekitaran.

> ⚠️ **AMARAN**<br/>
> Jika anda menggunakan Ollama dari peranti, bekas, atau perkhidmatan lain, pastikan Ollama dikonfigurasikan untuk membenarkan sambungan luaran (bukan localhost sahaja).


Untuk had, BYOK, dan lain-lain, lihat [pengesahan OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfigurasi dan persekitaran

**Lokasi fail konfigurasi**

| Pemasangan         | Lokasi konfigurasi                                |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gunakan isi padu untuk mengekalkan data) |

<br/>

**Pemboleh ubah persekitaran** (hanya web/Docker; Electron menggunakan fail konfigurasi tempatan)

| Pemboleh ubah        | Lalai                     | Penerangan |
| -------------------- | ------------------------- | ---------- |
| `PORT`               | `5000`                    | Port pelayan mendengar |
| `CONFIG_PATH`        | `/app/data/config.json`   | Laluan ke fail konfigurasi |
| `OPENROUTER_KEY`     | *(kosong)*                | Kunci API OpenRouter |
| `OPENAI_KEY`         | *(kosong)*                | Kunci API OpenAI |
| `CEREBRAS_KEY`       | *(kosong)*                | Kunci API Cerebras |
| `ANTHROPIC_KEY`      | *(kosong)*                | Kunci API Anthropic |
| `GOOGLE_KEY`         | *(kosong)*                | Kunci API Google Gemini |
| `DEEPSEEK_KEY`       | *(kosong)*                | Kunci API DeepSeek |
| `GROQ_KEY`           | *(kosong)*                | Kunci API Groq |
| `MISTRAL_KEY`        | *(kosong)*                | Kunci API Mistral |
| `OLLAMA_URL`         | *(kosong)*                | URL asas Ollama (contoh: `http://host.docker.internal:11434`) |
| `XAI_KEY`            | *(kosong)*                | Kunci API xAI |

Konfigurasikan hanya pembekal yang anda guna. ID model menggunakan ruang nama (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, dsb.).

**Paparan kos:** OpenRouter mengembalikan kos yang ditanggung secara tepat jika berkenaan. Pembekal lain menggunakan kos **anggaran** dari harga model awam OpenRouter jika kunci OpenRouter tersedia; jika tidak, kos bukan-OpenRouter mungkin dipaparkan sebagai `0`. Anggaran bukan invois.

<br/>

**Data dan kekal data:** Untuk Docker, pasang isi padu di `/app/data` supaya `config.json` dan pangkalan data SQLite kekal wujud selepas bekas dimulakan semula. Tanpa isi padu, semua data akan hilang apabila bekas diberhentikan.

**Pembangun:** Selepas menarik perubahan yang menggantikan konfigurasi kunci tunggal lama, tetapkan semula atau gabungkan `data/config.json` dengan bentuk lalai baharu dari `src/config-defaults/config_default.json` jika fail tempatan anda masih menggunakan medan yang telah dikeluarkan (`api_key`, `api_url`, pilihan proksi).

<br/>

**Pengesahan web:**

- Pentadbir lalai: `admin` / `transrewrt26`.
- Urus pengguna di **Settings → Users**.
- Menetapkan semula kata laluan: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (dari sumber: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **AMARAN**<br/>
> Ubah kata laluan pentadbir lalai segera pada mana-mana hos yang boleh dicapai melalui rangkaian.

<br/>

Tetapan utama (fon, model, bahasa, dsb.) boleh didapati dalam Tetapan aplikasi.

<br/><br/>

<a id="development-and-architecture"></a>

## Pembangunan dan arsitektur

- **Pembangunan:** Persediaan, bina, uji, dan sediakan (Electron, Web, Docker) - lihat **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Gambaran arsitektur dan sistem:** Struktur folder, tumpukan teknologi, keputusan reka bentuk - lihat **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Versi dan tanda

- **Tanda Git** `v`* (contohnya `v1.0.10`) mencetuskan alur kerja [versi](.github/workflows/release.yml). **Versi GitHub** melampirkan pemasang Windows (`.exe`) dan AppImage Linux (**x64** dan **arm64**).
- **Imej Docker** diterbitkan ke `ghcr.io/wsj-br/transrewrt`. Tag imej sepadan dengan versi Git (contohnya `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) ditambah `latest`. Pelbagai-arkitektur: `linux/amd64` dan `linux/arm64` (contohnya Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Sumbangan

1. Buat fork repositori ini.
2. Cipta cabang ciri: `git checkout -b feature/ciri-saya`
3. Buat commit perubahan dengan mesej yang jelas.
4. Tolak dan buka Permintaan Tarik (Pull Request) terhadap `main`.

Sila ikuti gaya kod sedia ada dan uji perubahan anda dalam mod Electron dan web sebelum hantar. Rujuk [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) untuk arahan bina dan uji.

<br/>

**Laporan isu:** Buka isu di [GitHub](https://github.com/wsj-br/transrewrt/issues). Masukkan platform anda (Windows / Linux / Docker) dan versi aplikasi (ditunjukkan dalam dialog Perihal atau pada halaman Versi).

<br/><br/>

<a id="disclaimer"></a>
## Penafian

Nama dan ikon produk adalah milik pemilik masing-masing dan digunakan hanya untuk tujuan pengenalan sahaja. Perisian ini tidak berafiliasi dengan atau disokong oleh mana-mana jenama yang disebutkan.

<br/><br/>

<a id="license"></a>
## Lesen

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Lesen Apache 2.0](LICENSE)