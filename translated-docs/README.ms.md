---
translated_at: "2026-03-29T01:55:33.898Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Banner Transrewrt"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Versi"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lesen: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Alat teks bertenaga AI: terjemah antara bahasa, tulis semula dalam gaya berbeza, dan ubah suai dengan arahan tersuai — menggunakan pelbagai penyedia AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, dan Ollama tempatan). Boleh dijalankan sebagai aplikasi desktop (Electron) atau aplikasi web yang dihos sendiri (Docker).

- **Terjemah** — antara beberapa puluh bahasa, dengan pengesanan sumber automatik
- **Tulis Semula** — betulkan tatabahasa, tingkatkan kejelasan, formal/tidak formal, pendekkan, panjangkan, teknikal
- **Transformasi** — arahan AI tersuai; buat dan urus arahan, bahasa sasaran pilihan mengikut arahan
- **Sejarah** — sejarah pelaksanaan penuh dengan teks input/output, penapisan, dan eksport
- **Model & kos** — pilih model daripada mana-mana penyedia yang dikonfigurasikan; papan pemuka kos dan penggunaan dengan log, ringkasan mengikut model/operasi/hari
- **UI** — antara muka pelbagai bahasa (30+ bahasa, sokongan RTL), fon, ...
- **Mod Web** — sokongan pengguna pelbagai dengan peranan pentadbir
- **Aplikasi Desktop** — aplikasi Electron untuk Windows dan Linux
- **Hos Sendiri** — imej Docker untuk amd64 & arm64 (sedia untuk Raspberry Pi)

Selepas pemasangan, rujuk **[Panduan Pengguna](USER-GUIDE.ms.md)** untuk penerangan lengkap semua ciri.

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](translated-docs/README

E.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Catatan mengenai terjemahan UI dan dokumen:** Semua bahasa antara muka selain Bahasa Inggeris (UK) asal 
> diterjemahkan menggunakan model AI; perkataan mungkin tidak tepat atau mengandungi ralat.

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

![Ringkasan papan pemuka — penggunaan](../images/screenshots/ms/dashboard-summary.png)

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
  - [Mengkonfigurasi zon masa](#configuring-the-timezone)
- [Mendapatkan kunci API OpenRouter](#getting-an-openrouter-api-key)
- [Konfigurasi dan persekitaran](#configuration-and-environment)
- [Pembangunan dan arsitektur](#development-and-architecture)
- [Melapor masalah](#reporting-issues)
- [Penafian](#disclaimer)
- [Lesen](#license)
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Mula pantas

**Docker (disyorkan untuk hos kendiri)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Gantikan `sk-or-your-key` dengan kunci API [OpenRouter](https://openrouter.ai/keys) anda (atau tetapkan kunci penyedia lain; lihat [Konfigurasi](#configuration-and-environment)). Buka [http://localhost:5000](http://localhost:5000) dan tukar kata laluan pentadbir lalai sebelum mendedahkan perkhidmatan tersebut.

<br/>

> ℹ️ **PERHATIAN**<br/>
> Dalam Docker, kelayakan LLM ditetapkan melalui pemboleh ubah persekitaran seperti `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (bukan dalam UI web). Pada komputer riba (Electron), anda mengkonfigurasi kunci di **Tetapan → API**.

<br/>

**Windows**

Muat turun `Transrewrt Setup x.y.z.exe` terkini dari [Releases](https://github.com/wsj-br/transrewrt/releases), jalankan pemasang, kemudian lancarkan daripada menu Start atau pintasan desktop. Masukkan kunci API anda di **Tetapan → API**. Anda perlu mengkonfigur sekurang-kurangnya satu penyedia, OpenRouter biasa digunakan untuk model percuma.

<br/>

**Linux**

Muat turun `.AppImage` untuk CPU anda dari [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` untuk PC biasa, `arm64` untuk kebanyakan peranti ARM, termasuk Raspberry Pi 4+), kemudian:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Masukkan kunci API anda di **Tetapan → API**. Anda perlu mengkonfigur sekurang-kurangnya satu penyedia, OpenRouter biasa digunakan untuk model percuma.

Pada Debian/Ubuntu, anda mungkin perlu memasang dependensi tambahan dahulu:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Lihat [Pemasangan → Linux](#linux-electron) untuk maklumat lanjut.

<br/>

> ℹ️ **PERHATIAN**<br/>

> macOS bukan disokong buat masa ini. Transrewrt tersedia untuk Windows, Linux, dan Docker.

<br/>

Apabila aplikasi sedang berjalan, rujuk **[Panduan Pengguna](USER-GUIDE.ms.md)** untuk mempelajari cara menterjemah, menulis semula, dan mengubah teks, menguruskan promp, serta menetapkan model.

<br/><br/>

<a id="installation"></a>

## Pemasangan

<a id="windows-electron"></a>

### Windows (Electron)

- Muat turun pemasang terkini dari [Releases](https://github.com/wsj-br/transrewrt/releases).
- Jalankan fail `.exe` dan ikuti arahan pemasangan.
- Pengepaman pertama: mulakan aplikasi dari menu Start atau pintasan di desktop.

<br/>

> ℹ️ **PERHATIAN**<br/>
> Windows mungkin memaparkan salah satu amaran keselamatan berikut (biasa bagi aplikasi tanpa tanda tangan/pengeluar bebas):
>   - **Kawalan Akaun Pengguna (UAC)**: "Adakah anda mahu membenarkan aplikasi dari penerbit yang tidak dikenali membuat perubahan kepada peranti anda?" → Klik **Ya**.
>   - **Microsoft Defender SmartScreen**: "Windows telah melindungi PC anda" → Klik **Maklumat lanjut** → **Jalankan sahaja**.
>
> Ini berlaku kerana aplikasi ini tidak ditandatangani oleh Microsoft atau penerbit utama—ia selamat jika dimuat turun daripada siaran rasmi GitHub kami
> (sahkan checksum SHA256 di bawah).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- Muat turun `.AppImage` yang sepadan (`x64` atau `arm64`) daripada [Releases](https://github.com/wsj-br/transrewrt/releases).
- Jalankan: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` pada x86_64/amd64, atau gunakan nama fail `...-arm64.AppImage` pada ARM64.
- Tambahan keperluan (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Rujuk [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) untuk maklumat lanjut.

<br/>

<a id="docker"></a>

### Docker

- Tarik: `docker pull ghcr.io/wsj-br/transrewrt:terkini`
- Tetapkan sekurang-kurangnya satu kunci penyedia melalui persekitaran (contohnya `OPENROUTER_API_KEY` untuk OpenRouter). Luluskan pemboleh ubah dengan `-e` atau `docker compose` / `.env` supaya rahsia tidak dimasukkan ke dalam imej.
- Kunci penyedia **tidak** dimasukkan ke dalam UI web; pelayan membacanya dari persekitaran.

Contoh - isi padu bernama untuk kekal (kunci OpenRouter melalui env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

atau jika anda memilih untuk menggunakan Docker Compose, gunakan:

```
# muat turun fail compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit fail untuk menambah API_KEYS dan menetapkan zon masa (TZ)
vi transrewrt.yml
# mulakan bekas
docker compose -f transrewrt.yml up -d

Lihat [Konfigurasi](#configuration-and-environment) untuk semua pemboleh ubah persekitaran, seperti `PORT`, `CONFIG_PATH`, `TZ`, dan kunci LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>

### Mengkonfigurasikan zon waktu

Tarikh dan masa antara muka pengguna aplikasi mengikut zon waktu dan setempat **pelayar**. Bagi tingkah laku **sisi pelayan** (log dan seumpamanya), bekas menggunakan pemboleh ubah persekitaran `TZ`. Lalai adalah `TZ=Europe/London`.

Untuk menggunakan zon waktu lain, tetapkan `TZ` dalam fail Compose anda, sebagai contoh:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Atau hantar semasa melarikan bekas (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Pada kebanyakan hos Linux, anda boleh menyalin nama zon waktu sistem dengan:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Senarai nama zon waktu yang sah diselenggara dalam [pangkalan data tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Mendapatkan kunci API OpenRouter

Transrewrt menyokong banyak penyedia AI. [OpenRouter](https://openrouter.ai) adalah pilihan popular kerana menggabungkan banyak model di bawah satu kunci dan menawarkan model percuma.

1. Daftar atau log masuk di [openrouter.ai](https://openrouter.ai).
2. Buka halaman [Keys](https://openrouter.ai/keys) dan cipta kunci baharu (beri nama, dan tetapkan had kredit secara pilihan). Anda boleh menggunakan model percuma tanpa menambah kredit.
3. **Desktop (Electron):** tampal kunci di **Tetapan → API**. **Docker:** tetapkan pemboleh ubah alam sekitar seperti `OPENROUTER_API_KEY` (rujuk [Mula dengan cepat](#quick-start)).

Jangan gunakan model **Body Builder** OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) untuk terjemahan, menulis semula, atau transformasi: ia mengembalikan muatan permintaan JSON, bukan teks lengkap untuk tugas-tugas tersebut. Rujuk [Tetapan → Model](USER-GUIDE.ms.md#models) dalam Panduan Pengguna.

Anda juga boleh menggunakan penyedia lain (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) atau menjalankan model secara tempatan dengan [Ollama](https://ollama.com). Lihat [Konfigurasi](#configuration-and-environment) untuk senarai penuh penyedia yang disokong dan pemboleh ubah persekitaran.

> ⚠️ **AMARAN**<br/>
> Jika anda menggunakan Ollama dari peranti, bekas, atau perkhidmatan lain, ingat untuk mengkonfigurasi Ollama supaya membenarkan sambungan luaran (bukan hanya localhost).

Untuk had, BYOK, dan lain-lain, lihat [pengesahan OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Konfigurasi dan persekitaran

**Lokasi fail konfigurasi**

| Pelaksanaan         | Lokasi Konfigurasi                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gunakan isi padu untuk kekal) |

<br/>

**Pemboleh ubah persekitaran** (web/Docker sahaja; Electron menggunakan fail konfigurasi tempatan)

| Pemboleh ubah         | Lalai                 | Penerangan |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Port pendengaran pelayan |
| `CONFIG_PATH`    | `/app/data/config.json` | Laluan ke fail konfigurasi |
| `TZ`             | `Europe/London`         | Zon masa IANA untuk masa sisi pelayan (pencatatan log, dsb.); UI masih mengikut pelayar. Lihat [Docker → zon masa](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(kosong)*               | Kunci API OpenRouter |
| `OPENAI_API_KEY`     | *(kosong)*               | Kunci API OpenAI |
| `CEREBRAS_API_KEY`   | *(kosong)*               | Kunci API Cerebras |
| `ANTHROPIC_API_KEY`  | *(kosong)*               | Kunci API Anthropic |
| `GOOGLE_API_KEY`     | *(kosong)*               | Kunci API Google Gemini |
| `DEEPSEEK_API_KEY`   | *(kosong)*               | Kunci API DeepSeek |
| `GROQ_API_KEY`       | *(kosong)*               | Kunci API Groq |
| `MISTRAL_API_KEY`    | *(kosong)*               | Kunci API Mistral |
| `OLLAMA_URL`     | *(kosong)*               | URL asas Ollama (contoh: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(kosong)*               | Kunci API xAI |

Konfigurasikan hanya penyedia yang anda gunakan. ID model mempunyai namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, dsb.).

**Paparan kos:** OpenRouter mengembalikan kos yang dikenakan dengan tepat jika berkaitan. Penyedia lain menggunakan kos **anggaran** daripada penetapan harga model awam OpenRouter bila kunci OpenRouter ada; jika tidak, kos bukan OpenRouter mungkin dipaparkan sebagai `0`. Anggaran bukan invois.

<br/>

**Data dan kekal:** Untuk Docker, pasang satu isipadu pada `/app/data` supaya `config.json` dan pangkalan data SQLite kekal antara permulaan semula bekas. Tanpa isipadu, semua data akan hilang apabila bekas dihentikan.

**Pembangun:** Selepas menarik perubahan yang menggantikan konfigurasi kunci tunggal lama, tetapkan semula atau gabungkan `data/config.json` dengan struktur lalai baharu daripada `src/config-defaults/config_default.json` jika fail tempatan anda masih menggunakan medan yang telah dialih keluar (`api_key`, `api_url`, pilihan proksi).

<br/>

**Pengesahan web:**

- Pentadbir lalai: `admin` / `transrewrt26`.
- Urus pengguna dalam **Tetapan → Pengguna**.

- Tetapkan semula kata laluan: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (dari sumber: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **AMARAN**<br/>
> Ubah kata laluan pentadbir lalai secepat mungkin pada sebarang hos yang boleh diakses melalui rangkaian.

<br/>

Tetapan-tetapan utama (fon, model, bahasa, dll.) boleh didapati dalam Tetapan aplikasi.

<br/><br/>

<a id="development-and-architecture"></a>

## Pembangunan dan arsitektur

- **Pembangunan:** Persediaan, bina, uji, dan sebarkan (Electron, Web, Docker) - lihat **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arsitektur dan gambaran sistem:** Struktur folder, tumpukan teknologi, keputusan rekabentuk - lihat **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## Melaporkan masalah

Buka isu di [GitHub](https://github.com/wsj-br/transrewrt/issues). Sertakan platform anda (Windows / Linux / Docker) dan versi aplikasi (yang dipaparkan dalam dialog Mengenai atau di halaman Versi).

<br/><br/>

<a id="disclaimer"></a>

## Penafian

Nama dan ikon produk adalah milik pemilik masing-masing dan digunakan semata-mata untuk tujuan pengenalan. Perisian ini tidak berafiliasi dengan atau disokong oleh mana-mana jenama yang disebutkan.

<br/><br/>

<a id="license"></a>

## Lesen

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Lesen Apache 2.0](LICENSE)