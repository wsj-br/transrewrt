---
translation_last_updated: '2026-06-02T15:31:11.727Z'
source_file_mtime: '2026-06-02T15:30:03.287Z'
source_file_hash: be3f9b67527af4a76a7271c81f0a2da3ac4ae613e81dd07786d01ee40eb7df57
translation_language: ms
source_file_path: README.md
translation_models:
  - qwen/qwen3-235b-a22b-2507
  - qwen/qwen3.6-35b-a3b
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.3.5-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Alat teks bertenaga AI: terjemah antara bahasa, tulis semula dalam gaya berbeza, dan transformasi dengan prompt tersuai — menggunakan pelbagai penyedia AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, dan Ollama tempatan). Berjalan sebagai aplikasi desktop (Electron) atau aplikasi web yang dihos sendiri (Docker).

- **Terjemahkan** - antara puluhan bahasa, dengan pengesanan sumber automatik
- **Tulis semula** - betulkan tatabahasa, tingkatkan kejelasan, formal/tidak formal, ringkaskan, kembangkan, teknikal
- **Transformasikan** - arahan AI tersuai; cipta dan urus arahan, bahasa sasaran pilihan mengikut arahan
- **Sejarah** - sejarah pelaksanaan penuh dengan teks input/output, penapisan, dan eksport
- **Mudah & Lanjutan** - Mod Mudah (lalai): tetapan prapasang terpilih mengikut penyedia (**Percuma (OpenRouter)**, **Piawai**, **Lanjutan**, **Teknikal**; hanya tetapan prapasang dengan pemetaan untuk penyedia terpilih yang dipaparkan) tanpa memilih ID model; Mod Lanjutan: senarai penuh model daripada penyedia yang telah dikonfigurasikan
- **Model & kos** - papan pemuka kos dan penggunaan (Ringkasan, Mengikut Model, Semua Panggilan) dengan fungsi eksport; OpenRouter menunjukkan perbelanjaan sebenar, penyedia lain menggunakan anggaran
- **UI** - antara muka pelbagai bahasa (30+ bahasa, sokongan RTL), fon, ...
- **Mod Web** - sokongan pengguna pelbagai dengan peranan pentadbir
- **Desktop** - Aplikasi Electron untuk Windows dan Linux
- **Swasta** - Imej Docker untuk amd64 & arm64 (sedia untuk Raspberry Pi)

Selepas dipasang, rujuk [**Panduan Pengguna**](USER-GUIDE.ms.md) untuk penerangan lengkap semua ciri.

<small>**Baca dalam bahasa lain:** </small>
<small id="lang-list">[English (GB)](../README.md) · [Português (Brasil)](./README.pt-BR.md) · [العربية](./README.ar.md) · [বাংলা](./README.bn.md) · [Català](./README.ca.md) · [中文 (中国大陆)](./README.zh-CN.md) · [中文 (台灣)](./README.zh-TW.md) · [Hrvatski](./README.hr.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [English (US)](./README.en-US.md) · [Tagalog](./README.tl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Bahasa Melayu](./README.ms.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Basa Jawa](./README.jv.md) · [Português](./README.pt.md) · [ਪੰਜਾਬੀ](./README.pa.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Kiswahili](./README.sw.md) · [Svenska](./README.sv.md) · [తెలుగు](./README.te.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

<small>

> **Nota mengenai terjemahan UI dan dokumentasi:** Semua bahasa antara muka kecuali Bahasa Inggeris (UK) asal 
> diterjemahkan menggunakan model AI; perkataan mungkin tidak tepat atau mengandungi ralat.

</small>

<br/>

<a id="table-of-contents"></a>
## Jadual Kandungan

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Tangkapan skrin](#screenshots)
- [Mula cepat](#quick-start)
- [Dapatkan kunci API OpenRouter](#getting-an-openrouter-api-key)
- [Konfigurasi dan persekitaran](#configuration-and-environment)
- [Pembangunan dan arsitektur](#development-and-architecture)
- [Laporkan isu](#reporting-issues)
- [Penafian](#disclaimer)
- [Lesen](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## Tangkapan Skrin

**Pemilih bahasa**

![Language selector](../images/screenshots/ms/language-selector.png)

**Terjemah**

![Translate](../images/screenshots/ms/translate.png)

**Transformasi - editor prompt**

![Transform - prompt editor](../images/screenshots/ms/transform-prompt-edit.png)

**Papan Pemuka**

![Dashboard summary - usage](../images/screenshots/ms/dashboard-summary.png)

**Sejarah**

![History](../images/screenshots/ms/history.png)

**Tetapan - pemilihan model**

![Settings - model selection](../images/screenshots/ms/settings-general.png)

<br/><br/>

<a id="quick-start"></a>
## Permulaan pantas

<details>
<summary><b>Docker (disyorkan untuk penyediaan sendiri)</b></summary>

<a id="docker"></a>

<br/>

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Gantikan `sk-or-your-key` dengan kunci API [OpenRouter](https://openrouter.ai/keys) anda (atau tetapkan kunci penyedia lain; lihat [Konfigurasi](#configuration-and-environment)). Buka [http://localhost:5000](http://localhost:5000) dan tukar kata laluan pentadbir lalai sebelum mendedahkan perkhidmatan.

Tetapkan sekurang-kurangnya satu kunci penyedia melalui persekitaran (contohnya `OPENROUTER_API_KEY` untuk OpenRouter). Hantarkan pemboleh ubah dengan `-e` atau `docker compose` / `.env` supaya rahsia tidak terbina ke dalam imej. Kunci penyedia **tidak** dimasukkan dalam UI web; pelayan membacanya daripada persekitaran.

<br/>

> ℹ️ **NOTA**<br/>
> Dalam Docker, kredensial LLM ditetapkan dengan pemboleh ubah persekitaran seperti `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (bukan dalam UI web). Pada desktop (Electron), anda mengkonfigurasi kunci di **Tetapan → API**.

<br/>

Atau gunakan Docker Compose:

```bash
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Lihat [Konfigurasi](#configuration-and-environment) untuk semua pemboleh ubah persekitaran, seperti `PORT`, `CONFIG_PATH`, `TZ`, dan kunci LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

</details>

<br/>

<details>
<summary><b>Zon waktu pelayan (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

Tarikh dan masa antara muka pengguna aplikasi mengikut lokalisasi dan zon waktu **pelayar**. Untuk tingkah laku **sisi pelayan** (log dan sebagainya), bekas menggunakan pemboleh ubah persekitaran `TZ`. Lalainya ialah `TZ=Europe/London`.

Untuk menggunakan zon waktu lain, tetapkan `TZ` dalam fail Compose anda, contohnya:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Atau hantarkannya semasa menjalankan bekas (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Pada kebanyakan hos Linux, anda boleh salin nama zon waktu sistem dengan:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Senarai nama zon waktu yang sah diselenggara dalam [pangkalan data tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- Muat turun `Transrewrt Setup x.y.z.exe` terkini daripada [Releases](https://github.com/wsj-br/transrewrt/releases).
- Jalankan `.exe` dan ikuti pemasang.
- Permulaan pertama: mulakan aplikasi daripada menu Start atau pintasan desktop.
- Masukkan kunci API anda di **Tetapan → API**. Anda perlu mengkonfigur sekurang-kurangnya satu penyedia; OpenRouter biasa digunakan untuk model percuma.

<br/>

> ℹ️ **NOTA**<br/>
> Windows mungkin memaparkan salah satu amaran keselamatan ini (biasa untuk aplikasi tanpa tanda/indie):
>   - **Kawalan Akaun Pengguna (UAC)**: "Adakah anda mahu membenarkan aplikasi daripada penerbit tidak dikenali membuat perubahan pada peranti anda?" → Klik **Ya**.
>   - **Microsoft Defender SmartScreen**: "Windows melindungi PC anda" → Klik **Maklumat lanjut** → **Jalankan sahaja**.
>
> Ini berlaku kerana aplikasi tidak ditandatangani oleh Microsoft atau penerbit besar—ia selamat jika dimuat turun daripada pelepasan GitHub rasmi kami (sahkan checksum pada halaman [Releases](https://github.com/wsj-br/transrewrt/releases) bersama setiap aset).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

Muat turun `.AppImage` untuk CPU anda daripada [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` untuk PC biasa, `arm64` untuk banyak peranti ARM, termasuk Raspberry Pi 4+), kemudian:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Pada x86_64/amd64 gunakan nama fail `x64`; pada ARM64 gunakan nama `...-arm64.AppImage`.

Masukkan kunci API anda di **Tetapan → API**. Anda perlu mengkonfigurasi sekurang-kurangnya satu penyedia; OpenRouter biasa digunakan untuk model percuma.

**Mesej konsol:** Binaan Linux yang dibungkus (`x64` dan `arm64` AppImages) menekan amaran penyahgunaan Node di terminal (contohnya modul terbina dalam `punycode`). Jika Chromium mencetak ralat GPU / EGL seperti “GLES3 tidak disokong” tetapi aplikasi berfungsi, anda boleh membisukan ralat tersebut dengan melumpuhkan pecutan perkakasan:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Ini juga digunakan pada amd64; ubah nama fail mengikut muat turun anda.

Pada Debian/Ubuntu, anda mungkin memerlukan pustaka **runtime** tambahan yang diperlukan oleh Chromium (ini biasanya sudah hadir pada pemasangan desktop penuh). Jalankan arahan di bawah jika perlu:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

gantikan `libasound2t64` dengan `libasound2` untuk `arm64`. Pemasangan minimum atau tersuai mungkin masih gagal dengan fail `.so` hilang. Pasang pakej yang dinamakan dalam mesej ralat (tambahan biasa: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Dalam sesetengah persekitaran, anda mungkin perlu menjalankan aplikasi menggunakan `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **NOTA**<br/>
> macOS tidak disokong buat masa ini. Transrewrt tersedia untuk Windows, Linux, dan Docker.

</details>

<br/>

Setelah aplikasi berjalan, rujuk [**Panduan Pengguna**](USER-GUIDE.ms.md) untuk mempelajari cara menterjemahkan, menulis semula, dan mengubah teks, mengurus arahan, serta mengkonfigurasi model.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Dapatkan kunci API OpenRouter

Transrewrt menyokong banyak penyedia AI. [OpenRouter](https://openrouter.ai) adalah pilihan popular kerana menggabungkan banyak model di bawah satu kunci dan menawarkan model percuma.

1. Daftar atau log masuk di [openrouter.ai](https://openrouter.ai).
2. Buka halaman [Keys](https://openrouter.ai/keys) dan cipta kunci baharu (beri nama, dan secara pilihan tetapkan had kredit). Anda boleh gunakan model percuma tanpa menambah kredit.
3. **Desktop (Electron):** tampal kunci di **Tetapan → API**. **Docker:** tetapkan pemboleh ubah env seperti `OPENROUTER_API_KEY` (rujuk [Permulaan Pantas](#quick-start)).

Jangan gunakan model **Body Builder** OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) untuk terjemah, tulis semula, atau transformasi: ia mengembalikan muatan permintaan JSON, bukan teks siap untuk tugas-tugas tersebut. Rujuk [Tetapan → Model](USER-GUIDE.ms.md#models) dalam Panduan Pengguna.

Anda juga boleh gunakan penyedia lain (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) atau jalankan model secara tempatan dengan [Ollama](https://ollama.com). Rujuk [Konfigurasi](#configuration-and-environment) untuk senarai penuh penyedia yang disokong dan pemboleh ubah persekitaran.

</br>

> ⚠️ **AMARAN**<br/>
> Jika anda menggunakan Ollama daripada peranti, bekas, atau perkhidmatan lain, pastikan Ollama dikonfigurasikan untuk membenarkan sambungan luaran (bukan localhost sahaja).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfigurasi dan persekitaran

</br>

**Lokasi fail konfigurasi**

| Pemasangan         | Lokasi konfigurasi                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gunakan volum untuk kekal) |

<br/>

**Pemboleh ubah persekitaran** (web/Docker sahaja; Electron menggunakan fail konfigurasi tempatan)

| Pemboleh ubah             | Penerangan                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | Port pendengaran pelayan (lalai ke `5000`)                                  |
| `CONFIG_PATH`        | Laluan ke fail konfigurasi (lalai ke `/app/data/config.json`)                |
| `TZ`                 | zon masa untuk masa sisi pelayan (log, dll.) (lalai ke `Europe/London`) |
| `HISTORY_DISABLED`   | Paksa sejarah pelaksanaan dimatikan (pilihan, lalai kepada `false`)                  |
| `OPENROUTER_API_KEY` | Kunci API OpenRouter                                                           |
| `OPENAI_API_KEY`     | Kunci API OpenAI                                                               |
| `CEREBRAS_API_KEY`   | Kunci API Cerebras                                                             |
| `ANTHROPIC_API_KEY`  | Kunci API Anthropic                                                            |
| `GOOGLE_API_KEY`     | Kunci API Google Gemini                                                        |
| `DEEPSEEK_API_KEY`   | Kunci API DeepSeek                                                             |
| `GROQ_API_KEY`       | Kunci API Groq                                                                 |
| `MISTRAL_API_KEY`    | Kunci API Mistral                                                              |
| `OLLAMA_URL`         | URL asas Ollama (contoh: `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | kunci API xAI                                                                  |

**Mod privasi:** Untuk memaksa pemecatan pengesanan sejarah tanpa mengira `config.json` atau keutamaan pengguna, tetapkan `HISTORY_DISABLED` kepada `true` atau `1` (tidak sensitif kepada huruf besar/kecil) untuk proses **pelayan web/Docker** dan/atau proses utama **Electron desktop** (contohnya persekitaran sistem atau pelancar — bukan hanya perender). Ini melumpuhkan penyimpanan sejarah input/output, mengunci **Tetapan → Tetapan Umum → Sejarah**, dan menyekat API berkaitan Sejarah.

Konfigur hanya penyedia yang anda gunakan. ID model mempunyai namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, dll.).

**Paparan kos:** OpenRouter mengembalikan kos yang dikenakan secara tepat apabila berkaitan. Penyedia lain menggunakan kos **anggaran** daripada penetapan harga model awam OpenRouter apabila kunci OpenRouter tersedia; tanpanya, kos bukan OpenRouter mungkin dipaparkan sebagai `0`. Anggaran bukan invois.

<br/>

**Data dan kekalan:** Untuk Docker, pasang isi padu di `/app/data` supaya `config.json` dan pangkalan data SQLite kekal merentasi permulaan semula bekas. Tanpa isi padu, semua data hilang apabila bekas berhenti.

<br/>

**Pengesahan web:**

- Pentadbir lalai: `admin` / `transrewrt26`.
- Urus pengguna di **Tetapan → Pengguna**.
- Tetapkan semula kata laluan: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **AMARAN**<br/>
> Tukar kata laluan pentadbir lalai secepat mungkin pada mana-mana hos yang boleh dicapai melalui rangkaian.

<br/>

Tetapan utama (fon, model, bahasa, dll.) boleh didapati dalam Tetapan aplikasi.

<br/><br/>

<a id="development-and-architecture"></a>
## Pembangunan dan seni bina

- **Pembangunan:** Persediaan, binaan, ujian, dan pemasangan (Electron, Web, Docker) - rujuk [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).
- **Gambaran sistem dan arkitektur:** Struktur folder, gudang teknologi, keputusan rekabentuk - rujuk [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md).

<br/><br/>

<a id="reporting-issues"></a>
## Melapor isu

Buka isu di [GitHub](https://github.com/wsj-br/transrewrt/issues). Sertakan platform anda (Windows / Linux / Docker) dan versi aplikasi (ditunjukkan dalam dialog Perihal atau di halaman Releases).

<br/><br/>

<a id="disclaimer"></a>
## Penafian

Nama produk dan ikon adalah milik pemilik masing-masing dan digunakan untuk tujuan pengenalan sahaja. Perisian ini tidak berkaitan dengan atau disokong oleh mana-mana jenama yang disebutkan.

<br/><br/>

<a id="license"></a>
## Lesen

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
