---
translated_at: "2026-03-26T00:51:39.679Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo Transrewrt" lebar="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Versi"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lesen: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Alat teks berasaskan AI: terjemah antara bahasa, tulis semula dalam gaya berbeza, dan ubah suai dengan arahan tersuai — menggunakan pelbagai penyedia AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, dan Ollama tempatan). Berjalan sebagai apl desktop (Electron) atau apl web yang dihos sendiri (Docker).

- **Terjemah** — antara puluhan bahasa, dengan pengesanan sumber automatik
- **Tulis Semula** — betulkan tatabahasa, tingkatkan kefahaman, gaya formal/tidak formal, pendekkan, panjangkan, teknikal
- **Transformasi** — arahan AI tersuai; cipta dan urus arahan, bahasa sasaran boleh dipilih mengikut arahan
- **Sejarah** — sejarah pelaksanaan penuh dengan teks input/output, penapisan dan eksport
- **Model & kos** — pilih model daripada mana-mana penyedia yang dikonfigurasikan; papan pemuka kos dan penggunaan dengan log, ringkasan mengikut model/operasi/hari
- **UI** — antara muka pelbagai bahasa (lebih 30 bahasa, sokongan RTL), fon, ...
- **Mod Web** — sokongan pelbagai pengguna dengan peranan pentadbir
- **Desktop** — apl Electron untuk Windows dan Linux
- **Dihos Sendiri** — imej Docker untuk amd64 & arm64 (bersedia untuk Raspberry Pi)

Selepas pemasangan, rujuk **[Panduan Pengguna](USER-GUIDE.ms.md)** untuk panduan lengkap semua ciri.

<small>**Baca dalam bahasa lain:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Nota mengenai terjemahan UI dan dokumentasi:** Semua bahasa antara muka kecuali bahasa asal English (UK)
> diterjemah menggunakan model AI; perkataan mungkin kurang tepat atau mengandungi ralat.

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

**Papan Pemuka**

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


- [Mula pantas](#quick-start)
- [Pemasangan](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Mendapatkan kunci API OpenRouter](#getting-an-openrouter-api-key)
- [Konfigurasi dan persekitaran](#configuration-and-environment)
- [Pembangunan dan arkitektur](#development-and-architecture)
- [Versi dan tanda](#releases-and-tags)
- [Menyumbang](#contributing)
- [Penafian](#disclaimer)
- [Lesen](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Mula pantas

**Docker (disyorkan untuk penyertaan sendiri)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Gantikan `sk-or-your-key` dengan kunci [API OpenRouter](https://openrouter.ai/keys) anda (atau tetapkan kunci penyedia lain; lihat [Konfigurasi](#configuration-and-environment)). Buka [http://localhost:5000](http://localhost:5000) dan tukar kata laluan pentadbir lalai sebelum mendedahkan perkhidmatan.

<br/>

> ℹ️ **NOTA**<br/>
> Dalam Docker, kredensial LLM ditetapkan menggunakan pemboleh ubah persekitaran seperti `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (bukan dalam UI sesawang). Pada versi desktop (Electron), anda mengkonfigurasi kunci di **Tetapan → API**.

<br/>

**Windows**

Muat turun fail pemasangan terkini `Transrewrt Setup x.y.z.exe` daripada [Versi](https://github.com/wsj-br/transrewrt/releases), jalankan pemasangan, kemudian lancarkan menerusi menu Start atau pautan pintas desktop. Masukkan kunci API anda di **Tetapan → API**. Anda perlu mengkonfigurasi sekurang-kurangnya satu penyedia, OpenRouter biasa digunakan untuk model percuma.

<br/>

**Linux**

Muat turun `.AppImage` mengikut CPU anda daripada [Versi](https://github.com/wsj-br/transrewrt/releases) (`x64` untuk komputer biasa, `arm64` untuk peranti ARM seperti Raspberry Pi 4+), kemudian:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Masukkan kunci API di **Tetapan → API**. Anda perlu mengkonfigurasi sekurang-kurangnya satu penyedia, OpenRouter biasa digunakan untuk model percuma.

Di Debian/Ubuntu, anda mungkin perlu pasang pergantungan tambahan terlebih dahulu:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Rujuk [Pemasangan → Linux](#linux-electron) untuk maklumat lanjut.

<br/>

> ℹ️ **NOTA**<br/>
> macOS buat masa ini tidak disokong. Transrewrt tersedia untuk Windows, Linux, dan Docker.

<br/>

Selepas aplikasi berjalan, lihat **[Panduan Pengguna](USER-GUIDE.ms.md)** untuk mempelajari cara menterjemah, menulis semula, dan menjana teks, menguruskan arahan, serta mengkonfigurasi model.

<br/><br/>

<a id="installation"></a>
## Pemasangan

<a id="windows-electron"></a>
### Windows (Electron)

- Muat turun pemasang terkini dari [Versi](https://github.com/wsj-br/transrewrt/releases).
- Jalankan fail `.exe` dan ikut arahan pemasangan.
- Permulaan pertama: mulakan aplikasi menerusi menu Start atau pautan pintas desktop.

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

- Tarik: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Tetapkan sekurang-kurangnya satu kunci penyedia melalui persekitaran (contohnya `OPENROUTER_KEY` untuk OpenRouter). Hantar pemboleh ubah dengan `-e` atau `docker compose` / `.env` supaya rahsia tidak disematkan ke dalam imej.
- Kunci penyedia **tidak** dimasukkan dalam UI sesawang; pelayan membacanya daripada persekitaran.

Contoh - volum bernama untuk kekal (kunci OpenRouter melalui env):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Pilihan   | Perihalan                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (padankan dengan `-p 5000:5000`)                                                                              |
| Volum   | Pasang `/app/data` untuk konfigurasi dan kekal pangkalan data                                                         |
| Pemboleh ubah persekitaran | `PORT`, `CONFIG_PATH`, ditambah kunci LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - rujuk [Konfigurasi](#configuration-and-environment) |

Untuk membina dan menjalankan daripada sumber: `docker compose up --build -d` atau `pnpm docker:up` - rujuk [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Mencari kunci API OpenRouter

Transrewrt menyokong banyak penyedia AI. [OpenRouter](https://openrouter.ai) merupakan pilihan popular kerana ia menggabungkan pelbagai model di bawah satu kunci dan menawarkan model percuma.

1. Daftar atau log masuk di [openrouter.ai](https://openrouter.ai).
2. Buka halaman [Keys](https://openrouter.ai/keys) dan buat kunci baharu (beri nama, dan secara pilihan tetapkan had kredit). Anda boleh menggunakan model percuma tanpa menambah kredit.
3. **Desktop (Electron):** tampal kunci di **Tetapan → API**. **Docker:** tetapkan pemboleh ubah alam (env vars) seperti `OPENROUTER_KEY` (lihat [Permulaan cepat](#quick-start)).

Jangan gunakan model **Body Builder** OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) untuk terjemahan, penulisan semula, atau transformasi: ia mengembalikan beban permintaan JSON, bukan teks lengkap bagi tugas-tugas tersebut. Lihat [Tetapan → Model](USER-GUIDE.ms.md#models) dalam Panduan Pengguna.

Anda juga boleh menggunakan penyedia lain (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) atau jalankan model secara tempatan dengan [Ollama](https://ollama.com). Lihat [Konfigurasi](#configuration-and-environment) untuk senarai penuh penyedia yang disokong dan pemboleh ubah alam.

> ⚠️ **AMARAN**<br/>
> Jika anda menggunakan Ollama dari peranti lain, bekas (container) atau perkhidmatan lain, pastikan Ollama dikonfigurasi untuk membenarkan sambungan luaran (bukan localhost sahaja).


Untuk had, BYOK, dan lain-lain, lihat [Pengesahan OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfigurasi dan persekitaran

**Lokasi fail konfigurasi**

| Pemasangan         | Lokasi konfigurasi                                 |
| ------------------ | --------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                             |
| Electron (Linux)   | `~/.config/transrewrt/`                             |
| Web / Docker       | `/app/data/config.json` (gunakan isi padu untuk menyimpannya) |

<br/>

**Pemboleh ubah persekitaran** (hanya web/Docker; Electron menggunakan fail konfigurasi tempatan)

| Pemboleh ubah        | Lalai                   | Perihalan |
| -------------------- | ----------------------- | --------- |
| `PORT`               | `5000`                  | Pelabuhan pelayan yang sedang mendengar |
| `CONFIG_PATH`        | `/app/data/config.json` | Laluan ke fail konfigurasi |
| `OPENROUTER_KEY`     | *(kosong)*              | Kunci API OpenRouter |
| `OPENAI_KEY`         | *(kosong)*              | Kunci API OpenAI |
| `CEREBRAS_KEY`       | *(kosong)*              | Kunci API Cerebras |
| `ANTHROPIC_KEY`      | *(kosong)*              | Kunci API Anthropic |
| `GOOGLE_KEY`         | *(kosong)*              | Kunci API Google Gemini |
| `DEEPSEEK_KEY`       | *(kosong)*              | Kunci API DeepSeek |
| `GROQ_KEY`           | *(kosong)*              | Kunci API Groq |
| `MISTRAL_KEY`        | *(kosong)*              | Kunci API Mistral |
| `OLLAMA_URL`         | *(kosong)*              | URL asas Ollama (cth. `http://host.docker.internal:11434`) |
| `XAI_KEY`            | *(kosong)*              | Kunci API xAI |

Konfigurasikan hanya penyedia yang anda gunakan. ID model menggunakan ruang nama (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, dsb.).

**Paparan kos:** OpenRouter mengembalikan kos yang dikenakan dengan tepat jika berkaitan. Penyedia lain menggunakan kos **anggaran** daripada penetapan harga model awam OpenRouter jika kunci OpenRouter tersedia; jika tidak, kos bukan OpenRouter mungkin dipaparkan sebagai `0`. Anggaran ini bukan invois.

<br/>

**Data dan kekal lamaan (persistence):** Untuk Docker, kaitkan isi padu di `/app/data` supaya `config.json` dan pangkalan data SQLite kekal semasa bekas dimulakan semula. Tanpa isi padu, semua data akan hilang apabila bekas dihentikan.

**Pembangun:** Selepas menarik perubahan yang menggantikan konfigurasi kunci tunggal lama, tetapkan semula atau gabung `data/config.json` dengan bentuk lalai baharu daripada `src/config-defaults/config_default.json` jika fail tempatan anda masih menggunakan medan yang dibuang (`api_key`, `api_url`, pilihan proksi).

<br/>

**Pengesahan web:**

- Pentadbir lalai: `admin` / `transrewrt26`.
- Urus pengguna di **Tetapan → Pengguna**.
- Tetap semula kata laluan: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (daripada sumber: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **AMARAN**<br/>
> Tukar kata laluan pentadbir lalai segera pada mana-mana hos yang boleh diakses melalui rangkaian.

<br/>

Tetapan utama (fon, model, bahasa, dsb.) boleh didapati dalam Tetapan aplikasi.

<br/><br/>

<a id="development-and-architecture"></a>

## Pembangunan dan arkitektur

- **Pembangunan:** Persediaan, bina, uji, dan sebarkan (Electron, Web, Docker) - lihat **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Gambaran arkitektur dan sistem:** Struktur folder, stak teknologi, keputusan rekabentuk - lihat **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Versi dan tag

- **Tag Git** `v`* (contohnya `v1.0.10`) mencetuskan [alur kerja versi](.github/workflows/release.yml). **GitHub Releases** melampirkan pemasang Windows (`.exe`) dan AppImage Linux (**x64** dan **arm64**).
- **Imej Docker** diterbitkan ke `ghcr.io/wsj-br/transrewrt`. Tag imej sepadan dengan versi Git (contohnya `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) ditambah `latest`. Multi-arkitektur: `linux/amd64` dan `linux/arm64` (contohnya Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Carian Sumbangan

1. Bahagikan repositori.
2. Cipta cawangan ciri: `git checkout -b feature/ciri-saya`
3. Buat commit perubahan anda dengan mesej yang jelas.
4. Tolak dan buka Permintaan Tarik (Pull Request) terhadap `main`.

Sila ikuti gaya kod sedia ada dan uji perubahan anda dalam kedua-dua mod Electron dan web sebelum hantar. Rujuk [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) untuk arahan membina dan menguji.

<br/>

**Melapor isu:** Buka isu di [GitHub](https://github.com/wsj-br/transrewrt/issues). Sertakan platform anda (Windows / Linux / Docker) dan versi aplikasi (ditunjukkan dalam dialog Perihal atau di halaman Releases).

<br/><br/>

<a id="disclaimer"></a>
## Penafian

Nama dan ikon produk adalah milik pemilik masing-masing dan digunakan untuk tujuan pengenalan sahaja. Perisian ini tidak berafiliasi atau disokong oleh mana-mana jenama yang disebutkan.

<br/><br/>

<a id="license"></a>
## Lesen

Hakcipta © 2026 Waldemar Scudeller Jr.

[Lesen Apache 2.0](LICENSE)