---
translation_last_updated: '2026-03-31T22:57:32.845Z'
source_file_mtime: '2026-03-31T22:20:13.182Z'
source_file_hash: bf6416a9ca259a19
translation_language: ms
source_file_path: README.md
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Jadual Kandungan**

- [Tangkapan Skrin](#screenshots)
- [Jadual Kandungan](#table-of-contents)
- [Mula Pantas](#quick-start)
- [Pemasangan](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Mengkonfigurasi zon masa](#configuring-the-timezone)
- [Mendapatkan kunci API OpenRouter](#getting-an-openrouter-api-key)
- [Konfigurasi dan persekitaran](#configuration-and-environment)
- [Pembangunan dan arsitektur](#development-and-architecture)
- [Melapor isu](#reporting-issues)
- [Penafian](#disclaimer)
- [Lesen](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Alat teks berkuasa AI: terjemah antara bahasa, tulis semula dalam gaya berbeza, dan transformasi dengan prompt tersuai — menggunakan pelbagai penyedia AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, dan Ollama tempatan). Berjalan sebagai aplikasi desktop (Electron) atau aplikasi web sendiri (Docker).

- **Terjemah** — antara puluhan bahasa, dengan pengesanan sumber automatik
- **Tulis Semula** — betulkan tatabahasa, tingkatkan kejelasan, formal/tidak formal, pendekkan, kembangkan, teknikal
- **Transformasi** — prompt AI tersuai; cipta dan urus prompt, bahasa sasaran pilihan mengikut prompt
- **Sejarah** — sejarah pelaksanaan penuh dengan teks input/output, penapisan, dan eksport
- **Model & kos** — pilih model daripada mana-mana penyedia yang dikonfigurasi; papan pemuka kos dan penggunaan dengan log, ringkasan mengikut model/operasi/hari
- **UI** — antara muka pelbagai bahasa (30+ bahasa, sokongan RTL), fon, ...
- **Mod Web** — sokongan pelbagai pengguna dengan peranan pentadbir
- **Desktop** — aplikasi Electron untuk Windows dan Linux
- **Sendiri (Self-hosted)** — imej Docker untuk amd64 & arm64 (sedia untuk Raspberry Pi)

Selepas pemasangan, rujuk **[Panduan Pengguna](USER-GUIDE.ms.md)** untuk penerangan lengkap semua ciri.

**Baca dalam bahasa lain:**
[Bahasa Inggeris (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [Bahasa Inggeris (AS)](README.en-US.md) · [Bahasa Filipina](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)

> **Nota mengenai terjemahan UI dan dokumentasi:** Semua bahasa antara muka kecuali asal Bahasa Inggeris (UK)
> diterjemahkan menggunakan model AI; perkataan mungkin tidak tepat atau mengandungi ralat.

## Tangkapan Skrin

**Pemilih bahasa**

Pemilih bahasa

**Terjemah**

Terjemah

**Transformasi - editor prompt**

Transformasi - editor prompt

**Papan Pemuka**

Ringkasan Papan Pemuka — penggunaan

**Sejarah**

Sejarah

**Tetapan - pemilihan model**

Tetapan - pemilihan model

## Jadual Kandungan

- [Permulaan pantas](#quick-start)
- [Pemasangan](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Mengkonfigurasi zon waktu](#configuring-the-timezone)
- [Mendapatkan kunci API OpenRouter](#getting-an-openrouter-api-key)
- [Konfigurasi dan persekitaran](#configuration-and-environment)
- [Pembangunan dan arkitektur](#development-and-architecture)
- [Melapor isu](#reporting-issues)
- [Penafian](#disclaimer)
- [Lesen](#license)

## Mula Pantas

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

> ℹ️ **NOTA**  
>
> Dalam Docker, kredensial LLM ditetapkan dengan pemboleh ubah persekitaran seperti `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (bukan dalam UI web). Pada desktop (Electron), anda mengkonfigurasi kunci di **Tetapan → API**.

**Windows**

Muat turun `Transrewrt Setup x.y.z.exe` terkini dari [Releases](https://github.com/wsj-br/transrewrt/releases), jalankan pemasang, kemudian mulakan dari menu Start atau pintasan desktop. Masukkan kunci API anda di **Tetapan → API**. Anda perlu mengkonfigurasi sekurang-kurangnya satu penyedia, OpenRouter adalah biasa digunakan untuk model percuma.

**Linux**

Muat turun `.AppImage` untuk CPU anda dari [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` untuk PC biasa, `arm64` untuk banyak peranti ARM, termasuk Raspberry Pi 4+), kemudian:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Masukkan kunci API anda di **Tetapan → API**. Anda perlu mengkonfigurasi sekurang-kurangnya satu penyedia, OpenRouter adalah biasa digunakan untuk model percuma.

**Mesej konsol:** Binaan Linux yang dibungkus (`x64` dan `arm64` AppImages) menekan amaran penyingkiran Node dalam terminal (contohnya modul binaan `punycode`). Jika Chromium mencetak ralat GPU / EGL seperti “GLES3 tidak disokong” tetapi aplikasi berfungsi, anda boleh membisukan ralat tersebut dengan melumpuhkan pecutan perkakasan:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Ini juga terpakai pada amd64; ubah nama fail untuk sepadan dengan muat turun anda. Rujuk [Pemasangan → Linux (Electron)](#linux-electron) untuk maklumat lanjut.

Pada Debian/Ubuntu, anda mungkin memerlukan pustaka **runtime** tambahan yang dijangka oleh Chromium (kerapkali sudah sedia ada pada desktop penuh). Gunakan **`libnotify4`** untuk pemberitahuan desktop—**bukan** `libnotify-dev` (ia adalah untuk membina perisian, bukan untuk menjalankan AppImage yang dibungkus):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

Imej minima atau tersuai mungkin masih gagal dengan fail `.so` yang hilang; pasang pakej yang dinamakan dalam ralat tersebut (tambahan biasa: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Sesetengah persekitaran memerlukan FUSE untuk menjalankan AppImages (contohnya `libfuse2` pada Ubuntu 22.04+), atau gunakan `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

Rujuk [Pemasangan → Linux](#linux-electron) untuk ringkasan yang sama.

> ℹ️ **NOTA**  
>
> macOS tidak disokong buat masa ini. Transrewrt tersedia untuk Windows, Linux, dan Docker.

Apabila aplikasi berjalan, lihat **[Panduan Pengguna](USER-GUIDE.ms.md)** untuk mempelajari cara menterjemah, menulis semula, dan mengubah teks, menguruskan arahan, serta mengkonfigurasi model.

## Pemasangan

### Windows (Electron)

- Muat turun pemasang terkini dari [Releases](https://github.com/wsj-br/transrewrt/releases).
- Jalankan fail `.exe` dan ikuti pemasangan.
- Pada permulaan pertama: mulakan aplikasi dari menu Start atau pintasan desktop.

> ℹ️ **NOTA**  
>
> Windows mungkin memaparkan salah satu amaran keselamatan ini (biasa untuk aplikasi tanpa tanda tangan/pengguna bebas):
>
> - **Kawalan Akaun Pengguna (UAC)**: "Adakah anda mahu membenarkan aplikasi ini daripada penerbit tidak dikenali membuat perubahan pada peranti anda?" → Klik **Ya**.
> - **Microsoft Defender SmartScreen**: "Windows telah melindungi PC anda" → Klik **Maklumat lanjut** → **Jalankan sahaja**.
>
> Ini berlaku kerana aplikasi tersebut tidak ditandatangani oleh Microsoft atau penerbit besar—ia selamat jika dimuat turun daripada pelepasan rasmi GitHub kami
>  (sahkan checksum SHA256 di bawah).

### Linux (Electron)

- Muat turun `.AppImage` yang sepadan (`x64` atau `arm64`) daripada [Pelepasan](https://github.com/wsj-br/transrewrt/releases).
- Jalankan: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` pada x86_64/amd64, atau gunakan nama fail `...-arm64.AppImage` pada ARM64.
- **Pustaka runtime Debian/Ubuntu** (Electron/Chromium; sama seperti [Permulaan pantas → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — gunakan **`libnotify4`**, bukan `libnotify-dev`. Pada sistem minimum, pasang mana-mana `.so` yang hilang yang dilaporkan di terminal; tambahan seperti `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2` biasanya diperlukan. AppImage mungkin memerlukan `libfuse2` (Ubuntu 22.04+) atau `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`.
- **Mesej GPU:** Chromium mungkin mencatat ralat penginisialan GPU atau EGL pada sesetengah sistem (terutamanya ARM); aplikasi masih boleh berjalan seperti biasa. Untuk mengelakkan mesej tersebut, jalankan dengan pecutan perkakasan dimatikan: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (atau nama fail `arm64` anda).

### Docker

- Tarik: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Tetapkan sekurang-kurangnya satu kunci penyedia melalui persekitaran (contohnya `OPENROUTER_API_KEY` untuk OpenRouter). Hantar pemboleh ubah dengan `-e` atau `docker compose` / `.env` supaya rahsia tidak disemat ke dalam imej.
- Kunci penyedia **tidak** dimasukkan dalam UI web; pelayan membacanya daripada persekitaran.

Contoh - volum bernama untuk kekal (kunci OpenRouter melalui env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

atau jika anda lebih suka menggunakan Docker Compose, gunakan:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Rujuk [Configuration](#configuration-and-environment) untuk semua pemboleh ubah persekitaran, seperti `PORT`, `CONFIG_PATH`, `TZ`, dan kunci LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

### Mengkonfigurasikan zon masa

Tarikh dan masa antara muka pengguna mengikut zon waktu dan setempat **pelayar**. Untuk tingkah laku **sisi pelayan** (log dan sebagainya), bekas menggunakan pemboleh ubah persekitaran `TZ`. Lalai ialah `TZ=Europe/London`.

Untuk menggunakan zon waktu lain, tetapkan `TZ` dalam fail Compose anda, contohnya:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Atau hantarnya semasa menjalankan bekas (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Pada banyak hos Linux, anda boleh salin nama zon waktu sistem dengan:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Senarai nama zon waktu yang sah diselenggara dalam [pangkalan data tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

## Mendapatkan kunci API OpenRouter

Transrewrt menyokong banyak penyedia AI. [OpenRouter](https://openrouter.ai) merupakan pilihan popular kerana menggabungkan banyak model di bawah satu kunci dan menawarkan model percuma.

1. Daftar atau log masuk di [openrouter.ai](https://openrouter.ai).
2. Buka halaman [Keys](https://openrouter.ai/keys) dan cipta kunci baharu (beri nama, dan secara pilihan tetapkan had kredit). Anda boleh gunakan model percuma tanpa menambah kredit.
3. **Desktop (Electron):** tampal kunci di **Tetapan → API**. **Docker:** tetapkan pemboleh ubah persekitaran seperti `OPENROUTER_API_KEY` (rujuk [Quick start](#quick-start)).

Jangan gunakan model **Body Builder** OpenRouter (`[openrouter/bodybuilder](https://openrouter.ai/openrouter/bodybuilder)`) untuk terjemah, tulis semula, atau transformasi: ia mengembalikan muatan permintaan JSON, bukan teks lengkap untuk tugas-tugas tersebut. Rujuk [Tetapan → Model](USER-GUIDE.ms.md#models) dalam Panduan Pengguna.

Anda juga boleh gunakan penyedia lain (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) atau jalankan model secara tempatan dengan [Ollama](https://ollama.com). Rujuk [Configuration](#configuration-and-environment) untuk senarai penuh penyedia yang disokong dan pemboleh ubah persekitaran.

> ⚠️ **AMARAN**  
>
> Jika anda menggunakan Ollama daripada peranti, bekas, atau perkhidmatan lain, ingat untuk mengkonfigurasi Ollama agar membenarkan sambungan luaran (bukan hanya localhost).

Untuk had, BYOK, dan lain-lain, lihat [pengesahan OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

## Konfigurasi dan persekitaran

**Lokasi fail konfigurasi**

| Pelaksanaan         | Lokasi konfigurasi                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gunakan isi padu untuk kekal) |

**Pemboleh ubah persekitaran** (web/Docker sahaja; Electron menggunakan fail konfigurasi tempatan)

| Pemboleh ubah             | Lalai                 | Penerangan                                                                                                                 |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `PORT`               | `5000`                  | Port pelayan mendengar                                                                                                       |
| `CONFIG_PATH`        | `/app/data/config.json` | Laluan ke fail konfigurasi                                                                                                     |
| `TZ`                 | `Europe/London`         | Zon masa IANA untuk masa sisi pelayan (log, dsb.); UI masih mengikut pelayar. Rujuk [Docker → zon masa](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(kosong)*               | Kunci API OpenRouter                                                                                                          |
| `OPENAI_API_KEY`     | *(kosong)*               | Kunci API OpenAI                                                                                                              |
| `CEREBRAS_API_KEY`   | *(kosong)*               | Kunci API Cerebras                                                                                                            |
| `ANTHROPIC_API_KEY`  | *(kosong)*               | Kunci API Anthropic                                                                                                           |
| `GOOGLE_API_KEY`     | *(kosong)*               | Kunci API Google Gemini                                                                                                       |
| `DEEPSEEK_API_KEY`   | *(kosong)*               | Kunci API DeepSeek                                                                                                            |
| `GROQ_API_KEY`       | *(kosong)*               | Kunci API Groq                                                                                                                |
| `MISTRAL_API_KEY`    | *(kosong)*               | Kunci API Mistral                                                                                                             |
| `OLLAMA_URL`         | *(kosong)*               | URL asas Ollama (contoh: `http://host.docker.internal:11434`)                                                                  |
| `XAI_API_KEY`        | *(kosong)*               | Kunci API xAI                                                                                                                 |

Konfigurasikan hanya penyedia yang anda gunakan. ID model mempunyai ruang nama (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, dsb.).

**Paparan kos:** OpenRouter mengembalikan kos yang dikenakan secara tepat apabila berkaitan. Penyedia lain menggunakan kos **anggaran** daripada penetapan harga model awam OpenRouter jika kunci OpenRouter tersedia; jika tidak, kos bukan OpenRouter mungkin dipaparkan sebagai `0`. Anggaran bukan invois.

**Data dan kekalan:** Untuk Docker, pasang isi padu di `/app/data` supaya `config.json` dan pangkalan data SQLite kekal merentasi permulaan semula bekas. Tanpa isi padu, semua data hilang apabila bekas berhenti.

**Pembangun:** Selepas menarik perubahan yang menggantikan konfigurasi kunci tunggal lama, tetapkan semula atau gabungkan `data/config.json` dengan bentuk lalai baharu daripada `src/config-defaults/config_default.json` jika fail tempatan anda masih menggunakan medan yang telah dibuang (`api_key`, `api_url`, pilihan proksi).

**Pengesahan web:**

- Pentadbir lalai: `admin` / `transrewrt26`.
- Urus pengguna di **Tetapan → Pengguna**.
- Tetapkan semula kata laluan: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (daripada sumber: `pnpm run reset-web-password -- <username> <new-password>`)

> ⚠️ **AMARAN**  
>
> Tukar kata laluan pentadbir lalai segera pada sebarang hos yang boleh dicapai melalui rangkaian.

Tetapan utama (fon, model, bahasa, dsb.) boleh didapati dalam Tetapan aplikasi.

## Pembangunan dan arsitektur

- **Pembangunan:** Persediaan, binaan, ujian, dan pelaksanaan (Electron, Web, Docker) - lihat **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Gambaran seni bina dan sistem:** Struktur folder, gudang teknologi, keputusan rekabentuk - lihat **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

## Melapor isu

Buka isu di [GitHub](https://github.com/wsj-br/transrewrt/issues). Sertakan platform anda (Windows / Linux / Docker) dan versi aplikasi (ditunjukkan dalam dialog Perihal atau di halaman Releases).

## Penafian

Nama produk dan ikon adalah milik pemilik masing-masing dan digunakan untuk tujuan pengenalan sahaja. Perisian ini tidak berkaitan dengan atau disokong oleh mana-mana jenama yang disebutkan.

## Lesen

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
