---
translated_at: "2026-03-27T23:12:54.622Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
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

Alat teks berasaskan AI: terjemah antara bahasa, tulis semula dalam gaya berbeza, dan ubah suai dengan arahan tersuai — menggunakan pelbagai pembekal AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, dan Ollama tempatan). Boleh berjalan sebagai aplikasi desktop (Electron) atau aplikasi web yang dihos sendiri (Docker).

- **Terjemah** — antara puluhan bahasa, dengan pengesanan sumber automatik
- **Tulis Semula** — betulkan tatabahasa, tingkatkan kejelasan, formal/tidak formal, ringkaskan, kembangkan, teknikal
- **Ubah Suai** — arahan AI tersuai; cipta dan urus arahan, bahasa sasaran pilihan mengikut arahan
- **Sejarah** — sejarah pelaksanaan penuh dengan teks input/output, penapisan, dan eksport
- **Model & kos** — pilih model daripada mana-mana pembekal yang dikonfigurasi; papan pemuka kos dan penggunaan dengan log, ringkasan mengikut model/operasi/hari
- **UI** — antara muka pelbagai bahasa (30+ bahasa, sokongan RTL), fon, ...
- **Mod Web** — sokongan pelbagai pengguna dengan peranan pentadbir
- **Desktop** — aplikasi Electron untuk Windows dan Linux
- **DiHos Sendiri** — imej Docker untuk amd64 & arm64 (sedia untuk Raspberry Pi)

Sebaik sahaja dipasang, rujuk **[Panduan Pengguna](USER-GUIDE.ms.md)** untuk panduan lengkap semua ciri.

<small>**Baca dalam bahasa lain:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Nota mengenai terjemahan UI dan dokumentasi:** Semua bahasa antaramuka kecuali Bahasa Inggeris (UK) asal 
> diterjemahkan menggunakan model AI; perkataan yang digunakan mungkin tidak tepat atau mengandungi ralat.

</small>

<br/>

<a id="screenshots"></a>

## Tangkapan Skrin

**Pemilih bahasa**

![Pemilih bahasa](../images/screenshots/ms/language-selector.png)

**Terjemah**

![Terjemah](../images/screenshots/ms/translate.png)

**Transformasi - editor petunjuk**

![Transformasi - editor petunjuk](../images/screenshots/ms/transform-prompt-edit.png)

**Papan Pemuka**

![Papan pemuka kos](../images/screenshots/ms/dashboard-summary.png)

**Sejarah**

![Sejarah](../images/screenshots/ms/history.png)

**Tetapan - pemilihan model**

![Tetapan - pemilihan model](../images/screenshots/ms/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Kandungan

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
- [Kemaskini dan tanda](#releases-and-tags)
- [Menyumbang](#contributing)
- [Penafian](#disclaimer)
- [Lesen](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Permulaan cepat

**Docker (disyorkan untuk penyediaan sendiri)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Gantikan `sk-or-your-key` dengan [kunci API OpenRouter](https://openrouter.ai/keys) anda (atau tetapkan kunci penyedia lain; lihat [Konfigurasi](#configuration-and-environment)). Buka [http://localhost:5000](http://localhost:5000) dan tukar kata laluan pentadbir lalai sebelum mendedahkan perkhidmatan.

<br/>

> ℹ️ **NOTA**<br/>
> Dalam Docker, kredensial LLM ditetapkan melalui pemboleh ubah persekitaran seperti `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (bukan dalam UI web). Pada desktop (Electron), anda mengkonfigurasi kunci di **Tetapan → API**.

<br/>

**Windows**

Muat turun `Transrewrt Setup x.y.z.exe` terkini dari [Releases](https://github.com/wsj-br/transrewrt/releases), jalankan pemasang, kemudian lancarkan melalui menu Start atau pintasan desktop. Masukkan kunci API anda di **Tetapan → API**. Anda perlu mengkonfigurasi sekurang-kurangnya satu penyedia, OpenRouter biasa digunakan untuk model percuma.

<br/>

**Linux**

Muat turun `.AppImage` untuk CPU anda dari [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` untuk PC biasa, `arm64` untuk kebanyakan peranti ARM, termasuk Raspberry Pi 4+), kemudian:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Masukkan kunci API anda di **Tetapan → API**. Anda perlu mengkonfigurasi sekurang-kurangnya satu penyedia, OpenRouter biasa digunakan untuk model percuma.

Di Debian/Ubuntu, anda mungkin perlu memasang dependensi tambahan dahulu:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Rujuk [Pemasangan → Linux](#linux-electron) untuk maklumat lanjut.

<br/>

> ℹ️ **NOTA**<br/>
> macOS buat masa ini tidak disokong. Transrewrt boleh digunakan untuk Windows, Linux, dan Docker.

<br/>

Setelah aplikasi berjalan, rujuk **[Panduan Pengguna](USER-GUIDE.ms.md)** untuk mempelajari cara menterjemah, menulis semula, dan mengubah teks, menguruskan arahan, serta mengkonfigurasi model.

<br/><br/>

<a id="installation"></a>

## Pemasangan

<a id="windows-electron"></a>
### Windows (Electron)

- Muat turun pemasang terkini daripada [Releases](https://github.com/wsj-br/transrewrt/releases).
- Jalankan fail `.exe` dan ikuti arahan pemasang.
- Pusingan pertama: mulakan aplikasi daripada menu Start atau pintasan desktop.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Muat turun `.AppImage` yang sepadan (`x64` atau `arm64`) daripada [Releases](https://github.com/wsj-br/transrewrt/releases).
- Jalankan: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` untuk x86_64/amd64, atau gunakan nama fail `...-arm64.AppImage` untuk ARM64.
- Kependaman tambahan (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Rujuk [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) untuk maklumat lanjut.

<br/>

<a id="docker"></a>
### Docker

- Tarik: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Tetapkan sekurang-kurangnya satu kunci penyedia melalui persekitaran (contohnya `OPENROUTER_API_KEY` untuk OpenRouter). Luluskan pemboleh ubah dengan `-e` atau `docker compose` / `.env` supaya kunci rahsia tidak terbina ke dalam imej.
- Kunci penyedia **tidak** dimasukkan dalam antara muka web; pelayan membacanya daripada persekitaran.

Contoh - isi padu bernama untuk kekal (kunci OpenRouter melalui env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

atau jika anda lebih suka menggunakan Docker Compose, gunakan:

# muat turun fail compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit fail untuk tambah API_KEYS
vi transrewrt.yml
# mulakan bekas
docker compose -f transrewrt.yml up -d
```

<br/>

| Pilihan  | Penerangan                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Port     | `5000` (peta dengan `-p 5000:5000`)                                                                                                       |
| Volume   | Pasang `/app/data` untuk kekal-config dan pangkalan data                                                                                  |
| Pemboleh ubah alam sekitar | `PORT`, `CONFIG_PATH`, ditambah kunci LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - lihat [Konfigurasi](#configuration-and-environment) |

Untuk membina dan menjalankan dari sumber: `docker compose up --build -d` atau `pnpm docker:up` - lihat [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Mendapatkan kunci API OpenRouter

Transrewrt menyokong banyak pembekal AI. [OpenRouter](https://openrouter.ai) adalah pilihan popular kerana menggabungkan banyak model dalam satu kunci dan menawarkan model percuma.

1. Daftar atau log masuk di [openrouter.ai](https://openrouter.ai).
2. Buka halaman [Keys](https://openrouter.ai/keys) dan buat kunci baharu (beri nama, dan tetapkan had kredit sekiranya diperlukan). Anda boleh menggunakan model percuma tanpa perlu menambah kredit.
3. **Desktop (Electron):** tampal kunci di **Tetapan → API**. **Docker:** tetapkan pemboleh ubah persekitaran seperti `OPENROUTER_API_KEY` (rujuk [Permulaan pantas](#quick-start)).

Jangan guna model **Body Builder** OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) untuk terjemah, ulang tulis, atau transformasi: ia hanya mengembalikan muatan permintaan JSON, bukan teks lengkap untuk tugas-tugas tersebut. Rujuk [Tetapan → Model](USER-GUIDE.ms.md#models) dalam Panduan Pengguna.

Anda juga boleh gunakan pembekal lain (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) atau jalankan model secara tempatan dengan [Ollama](https://ollama.com). Rujuk [Konfigurasi](#configuration-and-environment) untuk senarai penuh pembekal yang disokong serta pemboleh ubah persekitaran.

> ⚠️ **AMARAN**<br/>
> Jika anda menggunakan Ollama dari peranti, bekas, atau perkhidmatan lain, pastikan Ollama dikonfigurasikan untuk membenarkan sambungan luaran (bukan hanya localhost).

Untuk had penggunaan, BYOK, dan maklumat lanjut, sila rujuk [pengesahan OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Konfigurasi dan persekitaran

**Lokasi fail konfigurasi**

| Pelaksanaan         | Lokasi konfigurasi                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gunakan isi untuk mengekalkan) |

<br/>

**Pemboleh ubah persekitaran** (hanya web/Docker; Electron menggunakan fail konfigurasi tempatan)

| Pemboleh ubah         | Lalai                 | Penerangan |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Pelabuhan pelayan |
| `CONFIG_PATH`    | `/app/data/config.json` | Laluan ke fail konfigurasi |
| `OPENROUTER_API_KEY` | *(kosong)*               | Kunci API OpenRouter |
| `OPENAI_API_KEY`     | *(kosong)*               | Kunci API OpenAI |
| `CEREBRAS_API_KEY`   | *(kosong)*               | Kunci API Cerebras |
| `ANTHROPIC_API_KEY`  | *(kosong)*               | Kunci API Anthropic |
| `GOOGLE_API_KEY`     | *(kosong)*               | Kunci API Google Gemini |
| `DEEPSEEK_API_KEY`   | *(kosong)*               | Kunci API DeepSeek |
| `GROQ_API_KEY`       | *(kosong)*               | Kunci API Groq |
| `MISTRAL_API_KEY`    | *(kosong)*               | Kunci API Mistral |
| `OLLAMA_URL`     | *(kosong)*               | URL asas Ollama (contohnya `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(kosong)*               | Kunci API xAI |

Konfigurasi hanya penyedia yang anda gunakan. ID model mempunyai namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, dsb.).

**Paparan kos:** OpenRouter mengembalikan kos yang dikenakan secara tepat apabila berkaitan. Penyedia lain menggunakan kos **anggaran** daripada penetapan harga model awam OpenRouter jika kunci OpenRouter tersedia; tanpanya, kos bukan-OpenRouter mungkin dipaparkan sebagai `0`. Anggaran bukan invois.

<br/>

**Data dan kekal:** Untuk Docker, pasang isi di `/app/data` supaya `config.json` dan pangkalan data SQLite kekal antara pelaksanaan semula bekas. Tanpa isi, semua data hilang apabila bekas berhenti.

**Pembangun:** Selepas menarik perubahan yang menggantikan konfigurasi kunci tunggal lama, tetapkan semula atau gabungkan `data/config.json` dengan bentuk lalai baharu daripada `src/config-defaults/config_default.json` jika fail tempatan anda masih menggunakan medan yang telah dibuang (`api_key`, `api_url`, pilihan proksi).

<br/>

**Pengesahan web:**

- Pentadbir lalai: `admin` / `transrewrt26`.
- Urus pengguna di **Tetapan → Pengguna**.
- Tetapkan semula kata laluan: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (daripada sumber: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **AMARAN**<br/>
> Ubah kata laluan pentadbir lalai dengan serta-merta pada sebarang hos yang boleh dicapai melalui rangkaian.

<br/>

Tetapan utama (fon, model, bahasa, dsb.) boleh didapati dalam Tetapan aplikasi.

<br/><br/>

<a id="development-and-architecture"></a>

## Pembangunan dan senibina

- **Pembangunan:** Persediaan, bina, uji, dan sebarkan (Electron, Web, Docker) - lihat **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Gambaran keseluruhan senibina dan sistem:** Struktur folder, tumpukan teknologi, keputusan reka bentuk - lihat **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Versi dan tag

- **Tag Git** `v`* (contohnya `v1.0.10`) akan mencetuskan [alur kerja versi](.github/workflows/release.yml). **Versi GitHub** akan melampirkan pemasang Windows (`.exe`) dan fail AppImage Linux (**x64** dan **arm64**).
- **Imej Docker** diterbitkan ke `ghcr.io/wsj-br/transrewrt`. Tag imej sepadan dengan versi Git (contohnya `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) ditambah `latest`. Berbilang arkitek: `linux/amd64` dan `linux/arm64` (contohnya Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Sumbangan

1. Klon repositori ini.
2. Cipta cawangan ciri: `git checkout -b feature/ciri-saya`
3. Buat commit perubahan anda dengan mesej yang jelas.
4. Dorong (push) dan buka Permintaan Tarik (Pull Request) terhadap `main`.

Sila ikuti gaya kod sedia ada dan uji perubahan anda dalam kedua-dua mod Electron dan web sebelum hantar. Rujuk [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) untuk arahan membina dan menguji.

<br/>

**Melapor isu:** Buka satu isu di [GitHub](https://github.com/wsj-br/transrewrt/issues). Sertakan platform anda (Windows / Linux / Docker) dan versi aplikasi (ditunjukkan dalam dialog Tentang atau pada halaman Versi).

<br/><br/>

<a id="disclaimer"></a>

## Penafian

Nama produk dan ikon milik kepada pemilik masing-masing dan digunakan semata-mata untuk tujuan pengenalan. Perisian ini tidak dikaitkan atau disokong oleh mana-mana jenama yang disebutkan.

<br/><br/>

<a id="license"></a>
## Lesen

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Lesen Apache 2.0](LICENSE)