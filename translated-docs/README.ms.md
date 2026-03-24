---
translated_at: "2026-03-24T01:58:20.267Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Versi"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lesen: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Alat teks berkuasa AI: terjemah antara bahasa, tulis semula dalam gaya berbeza, dan ubah suai dengan arahan tersuai — menggunakan pelbagai pembekal AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, dan Ollama tempatan). Berjalan sebagai aplikasi desktop (Electron) atau aplikasi web tersendiri (Docker).

- **Terjemah** — antara puluhan bahasa, dengan pengesanan sumber automatik
- **Tulis semula** — betulkan tatabahasa, tingkatkan kejelasan, formal/tidak formal, pendekkan, panjangkan, teknikal
- **Ubah suai** — arahan AI tersuai; cipta dan urus arahan, bahasa sasaran pilihan mengikut arahan
- **Sejarah** — sejarah penuh pelaksanaan dengan teks input/output, penapisan, dan eksport
- **Model & kos** — pilih model daripada mana-mana pembekal yang dikonfigurasikan; papan pemuka kos dengan log SQLite, ringkasan mengikut model/operasi/hari
- **UI** — antara muka pelbagai bahasa (30+ bahasa, sokongan RTL), fon, ...
- **Mod Web** — sokongan pengguna pelbagai dengan peranan pentadbir; kunci API kekal di pihak pelayan, tidak pernah didedahkan kepada penyemak imbas
- **Desktop** — aplikasi Electron untuk Windows dan Linux
- **Tersendiri** — imej Docker untuk amd64 & arm64 (sedia untuk Raspberry Pi)

Selepas pemasangan, rujuk **[Panduan Pengguna](USER-GUIDE.ms.md)** untuk penerangan lengkap semua ciri.

<small>**Baca dalam bahasa lain:** [English (UK)](README.ms.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<br/>

**Nota mengenai terjemahan UI dan dokumen:** Semua bahasa antara muka kecuali Bahasa Inggeris (UK) diterjemahkan menggunakan model AI; perkataan mungkin tidak tepat atau mengandungi ralat.

<a id="screenshots"></a>
## Tangkapan Skrin

**Pemilih bahasa**

![Pemilih bahasa](../images/screenshots/ms/language-selector.png)

**Terjemah**

![Terjemah](../images/screenshots/ms/translate.png)

**Ubah suai - editor arahan**

![Ubah suai - editor arahan](../images/screenshots/ms/transform-prompt-edit.png)

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

- [Permulaan pantas](#quick-start)
- [Pemasangan](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Mendapatkan kunci API OpenRouter](#getting-an-openrouter-api-key)
- [Konfigurasi dan persekitaran](#configuration-and-environment)
- [Pembangunan dan arsitektur](#development-and-architecture)
- [Versi dan tanda](#releases-and-tags)
- [Sumbangan](#contributing)
- [Penafian](#disclaimer)
- [Lesen](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Permulaan pantas

**Docker (digalakkan untuk hos kendiri)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Gantikan `sk-or-your-key` dengan [kunci API OpenRouter](https://openrouter.ai/keys) anda (atau tetapkan kunci penyedia lain; lihat [Konfigurasi](#configuration-and-environment)). Buka [http://localhost:5000](http://localhost:5000) dan ubah kata laluan pentadbir lalai sebelum mendedahkan perkhidmatan.

<br/>

> ℹ️ **NOTA**<br/>
> Dalam Docker, kredensial LLM ditetapkan melalui pemboleh ubah persekitaran seperti `OPENROUTER_KEY`, `OPENAI_KEY`, … (bukan dalam UI sesawang). Pada desktop (Electron), anda konfigurasikan kunci di **Tetapan → API**.

<br/>

**Windows**

Muat turun `Transrewrt Setup x.y.z.exe` terkini dari [Versi](https://github.com/wsj-br/transrewrt/releases), jalankan pemasang, kemudian mulakan melalui menu Mulakan atau pintasan desktop. Masukkan kunci API anda di **Tetapan → API**. Anda perlu mengkonfigurasikan sekurang-kurangnya satu penyedia, OpenRouter adalah biasa untuk model percuma.

<br/>

**Linux**

Muat turun fail `.AppImage` dari [Versi](https://github.com/wsj-br/transrewrt/releases), kemudian:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Masukkan kunci API anda di **Tetapan → API**. Anda perlu mengkonfigurasikan sekurang-kurangnya satu penyedia, OpenRouter adalah biasa untuk model percuma.

Pada Debian/Ubuntu, anda mungkin perlu memasang sumber tambahan terlebih dahulu:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Lihat [Pemasangan → Linux](#linux-electron) untuk maklumat lanjut.

<br/>

> ℹ️ **NOTA**<br/>
> macOS tidak disokong buat masa ini. Transrewrt tersedia untuk Windows, Linux, dan Docker.

<br/>

Apabila aplikasi berjalan, rujuk **[Panduan Pengguna](USER-GUIDE.ms.md)** untuk mengetahui cara menterjemah, menulis semula, dan menjana semula teks, menguruskan arahan, serta mengkonfigurasi model.

<br/><br/>

<a id="installation"></a>
## Pemasangan

<a id="windows-electron"></a>
### Windows (Electron)

- Muat turun pemasang terkini dari [Versi](https://github.com/wsj-br/transrewrt/releases).
- Jalankan fail `.exe` dan ikuti arahan pemasangan.
- Untuk kali pertama: mulakan aplikasi melalui menu Mulakan atau pintasan desktop.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Muat turun fail `.AppImage` dari [Versi](https://github.com/wsj-br/transrewrt/releases).
- Jalankan: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Sumber tambahan (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Rujuk [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) untuk maklumat lanjut.

<br/>

<a id="docker"></a>
### Docker

- Muat turun: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Tetapkan sekurang-kurangnya satu kunci penyedia melalui persekitaran (contohnya `OPENROUTER_KEY` untuk OpenRouter). Hantar pemboleh ubah dengan `-e` atau `docker compose` / `.env` supaya rahsia tidak termaktub dalam imej.
- Kunci penyedia **tidak** dimasukkan dalam UI sesawang; pelayan membacanya daripada persekitaran.

Contoh - isipadu bernama untuk kekal (kunci OpenRouter melalui env):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Pilihan   | Penerangan                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (peta dengan `-p 5000:5000`)                                                                          |
| Isipadu   | Kaitkan `/app/data` untuk kekekalan konfigurasi dan pangkalan data                                             |
| Pemboleh ubah persekitaran | `PORT`, `CONFIG_PATH`, ditambah kunci LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - lihat [Konfigurasi](#configuration-and-environment) |

Untuk bina dan jalankan dari sumber: `docker compose up --build -d` atau `pnpm docker:up` - lihat [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Mendapatkan kunci API OpenRouter

Transrewrt menyokong banyak penyedia AI. [OpenRouter](https://openrouter.ai) adalah pilihan yang popular kerana ia menggabungkan banyak model di bawah satu kunci dan menawarkan model percuma.

1. Daftar atau log masuk di [openrouter.ai](https://openrouter.ai).
2. Buka halaman [Keys](https://openrouter.ai/keys) dan cipta kunci baharu (berikan nama, dan secara pilihan tetapkan had kredit). Anda boleh menggunakan model percuma tanpa menambah kredit.
3. **Desktop (Electron):** tampal kunci dalam **Settings → API**. **Docker:** tetapkan pemboleh ubah persekitaran seperti `OPENROUTER_KEY` (lihat [Quick start](#quick-start)).

Anda juga boleh menggunakan penyedia lain (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) atau jalankan model secara setempat dengan [Ollama](https://ollama.com). Lihat [Configuration](#configuration-and-environment) untuk senarai penuh penyedia yang disokong dan pemboleh ubah persekitaran.

Untuk had, BYOK, dan maklumat lanjut, lihat [pengesahan OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfigurasi dan persekitaran

**Lokasi fail konfigurasi**

| Pemasangan         | Lokasi konfigurasi                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gunakan volume untuk kekal) |

<br/>

**Pemboleh ubah persekitaran** (untuk web/Docker sahaja; Electron menggunakan fail konfigurasi setempat)

| Pemboleh ubah         | Lalai                 | Penerangan |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Port pendengar pelayan |
| `CONFIG_PATH`    | `/app/data/config.json` | Laluan ke fail konfigurasi |
| `OPENROUTER_KEY` | *(kosong)*               | Kunci API OpenRouter |
| `OPENAI_KEY`     | *(kosong)*               | Kunci API OpenAI |
| `ANTHROPIC_KEY`  | *(kosong)*               | Kunci API Anthropic |
| `GOOGLE_KEY`     | *(kosong)*               | Kunci API Google Gemini |
| `DEEPSEEK_KEY`   | *(kosong)*               | Kunci API DeepSeek |
| `GROQ_KEY`       | *(kosong)*               | Kunci API Groq |
| `MISTRAL_KEY`    | *(kosong)*               | Kunci API Mistral |
| `OLLAMA_URL`     | *(kosong)*               | URL asas Ollama (contoh: `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(kosong)*               | Kunci API xAI |

Konfigurasikan hanya penyedia yang anda gunakan. ID model menggunakan ruang nama (`openrouter/…`, `openai/…`, `ollama/…`, dsb.).

**Paparan kos:** OpenRouter akan memulangkan kos yang dikenakan secara tepat apabila bersesuaian. Penyedia lain menggunakan kos **anggaran** daripada harga model awam OpenRouter jika kunci OpenRouter ada; tanpa kunci tersebut, kos bukan OpenRouter mungkin dipaparkan sebagai `0`. Anggaran ini bukan invois.

<br/>

**Data dan kekalan:** Untuk Docker, pasang volume pada `/app/data` supaya `config.json` dan pangkalan data SQLite dikekalkan walaupun bekas (container) dimulakan semula. Tanpa volume, semua data akan hilang apabila bekas berhenti.

**Pemaju:** Selepas menarik perubahan yang menggantikan konfigurasi kunci tunggal lama, set semula atau gabungkan `data/config.json` dengan bentuk lalai baharu dari `src/config-defaults/config_default.json` jika fail setempat anda masih menggunakan medan yang telah dibuang (`api_key`, `api_url`, pilihan proksi).

<br/>

**Pengesahan web:**

- Pentadbir lalai: `admin` / `transrewrt26`.
- Urus pengguna di **Settings → Users**.
- Set semula kata laluan: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (daripada sumber: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **AMARAN**<br/>
> Tukar kata laluan pentadbir lalai segera pada sebarang hos yang boleh dicapai melalui rangkaian.

<br/>

Tetapan utama (fon, model, bahasa, dsb.) boleh didapati di Bahagian Tetapan aplikasi.

<br/><br/>

<a id="development-and-architecture"></a>
## Pembangunan dan seni bina

- **Pembangunan:** Persediaan, bina, uji, dan sebarkan (Electron, Web, Docker) - lihat **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Gambaran keseluruhan seni bina dan sistem:** Struktur folder, gudang teknologi, keputusan reka bentuk - lihat **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Pelepasan dan tag

- **Tag Git** `v`* (contohnya `v1.0.10`) memulakan [alur kerja pelepasan](.github/workflows/release.yml). **Pelesan GitHub** akan melampirkan pemasang Windows (`.exe`) dan AppImage untuk Linux.
- **Imej Docker** diterbitkan ke `ghcr.io/wsj-br/transrewrt`. Tag imej sepadan dengan versi Git (contohnya `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) ditambah `latest`. Banyak arkitek: `linux/amd64` dan `linux/arm64` (contohnya Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Menyumbang

1. Bahagikan repositori.
2. Cipta cabang ciri: `git checkout -b feature/my-feature`
3. Muatkan perubahan anda dengan mesej yang jelas.
4. Tolak dan buka Permintaan Tarik (Pull Request) terhadap `main`.

Sila ikuti gaya kod yang sedia ada dan uji perubahan anda dalam kedua-dua mod Electron dan web sebelum membuat hantaran. Rujuk [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) untuk arahan membina dan menguji.

<br/>

**Melaporkan isu:** Buka isu di [GitHub](https://github.com/wsj-br/transrewrt/issues). Sertakan platform anda (Windows / Linux / Docker) dan versi aplikasi (ditunjukkan dalam dialog Tentang atau pada halaman Pelepasan).

<br/><br/>

<a id="disclaimer"></a>
## Penafian

Nama dan ikon produk adalah hak milik pemilik masing-masing dan digunakan semata-mata untuk tujuan pengenalan. Perisian ini tidak dikaitkan atau disokong oleh mana-mana jenama yang disebutkan.

<br/><br/>

<a id="license"></a>
## Lesen

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Lesen Apache 2.0](LICENSE)