---
translated_at: "2026-03-25T22:20:23.250Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="logo Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Versi"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lisensi: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Alat teks kanthi daya AI: ngalih basa, nulis ulang gaya beda, lan ngowahi nganggo prompt kustom — nggunakake pirang-pirang penyedia AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, lan Ollama lokal). Bisa dijalanake minangka aplikasi desktop (Electron) utawa aplikasi web kanggo dipasang piyambak (Docker).

- **Terjemah** — antara puluhan basa, nganggo deteksi sumber otomatis
- **Nulis Ulang** — perbaiki tata basa, tingkatake kapracayan, formal/informal, nggawe cendhak, mbabarake, teknis
- **Ngowahi** — prompt AI kustom; gawe lan atur prompt, pilihan basa tujuan saben prompt
- **Riwayat** — riwayat lengkap eksekusi kanthi teks input/output, saringan, lan ekspor
- **Model & biaya** — pilih model saka sembarang penyedia sing wis dikonfigurasi; papan kontrol biaya lan panggunaan kanthi log, ringkesan miturut model/operasi/hari
- **UI** — antarmuka multibasa (30+ basa, dhukungan RTL), font, ...
- **Mode Web** — dhukungan pangguna akeh kanthi peran admin
- **Desktop** — aplikasi Electron kanggo Windows lan Linux
- **Panggonan dhewe** — gambar Docker kanggo amd64 & arm64 (siap digunakake ing Raspberry Pi)

Sawise dipasang, deleng **[Pandhuan Pangguna](USER-GUIDE.jv.md)** kanggo penjelajahan lengkap kabeh fitur.

<small>**Macca ing basa liya:** [English (UK)](README.jv.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Cathetan babagan penerjemahan UI lan dokumen:** Kabeh basa antarmuka kajaba asline, English (UK), 
> diterjemahaké nggunakake model AI; tembung-tembung bisa kurang precisi utawa ngandhut kesa salah.

</small>

<br/>

<a id="screenshots"></a>
## Tangkapan Layar

**Pemilih basa**

![Pemilih basa](../images/screenshots/jv/language-selector.png)

**Terjemah**

![Terjemah](../images/screenshots/jv/translate.png)

**Ngowahi - panyunting prompt**

![Ngowahi - panyunting prompt](../images/screenshots/jv/transform-prompt-edit.png)

**Dasbor**

![Dasbor biaya](../images/screenshots/jv/dashboard-summary.png)

**Riwayat**

![Riwayat](../images/screenshots/jv/history.png)

**Setelan - pamilihan model**

![Setelan - pamilihan model](../images/screenshots/jv/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Tabel Isi

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Panduan Cepet](#quick-start)
- [Instalasi](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Ngoleh Kunci API OpenRouter](#getting-an-openrouter-api-key)
- [Konfigurasi lan lingkungan](#configuration-and-environment)
- [Pengembangan lan arsitektur](#development-and-architecture)
- [Rilis lan tag](#releases-and-tags)
- [Kontribusi](#contributing)
- [Penafian](#disclaimer)
- [Lisensi](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Panduan Cepet

**Docker (direkomendasikake kanggo self-hosting)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Ganti `sk-or-your-key` nganggo [kunci API OpenRouter](https://openrouter.ai/keys) (utawa setel kunci penyedia liyane; deleng [Konfigurasi](#configuration-and-environment)). Bukak [http://localhost:5000](http://localhost:5000) lan ganti sandhi admin baku sadurunge layanan dibukak.

<br/>

> ℹ️ **CATETAN**<br/>
> Ing Docker, kredensial LLM diatur nganggo variabel lingkungan kayata `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (ora ing antarmuka web). Ing desktop (Electron) sampeyan ngonfigurasi kunci ing **Setelan → API**.

<br/>

**Windows**

Unduh berkas `Transrewrt Setup x.y.z.exe` paling anyar saka [Rilis](https://github.com/wsj-br/transrewrt/releases), jalanke instalasi, banjur bukak saka menu Start utawa shortcut desktop. Masukkan kunci API sampeyan ing **Setelan → API**. Sampeyan kudu ngonfigurasi paling ora siji penyedia, OpenRouter biasane digunakake kanggo model gratis.

<br/>

**Linux**

Unduh `.AppImage` kanggo CPU sampeyan saka [Rilis](https://github.com/wsj-br/transrewrt/releases) (`x64` kanggo PC biasa, `arm64` kanggo piranti ARM, kalebu Raspberry Pi 4+), banjur:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Masukkan kunci API sampeyan ing **Setelan → API**. Sampeyan kudu ngonfigurasi paling ora siji penyedia, OpenRouter biasane digunakake kanggo model gratis.

Ing Debian/Ubuntu, sampeyan kudu nginstal dependensi tambahan dhisik:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Deleng [Instalasi → Linux](#linux-electron) kanggo rincian.

<br/>

> ℹ️ **CATETAN**<br/>
> macOS durung didhukung. Transrewrt kasedhiya kanggo Windows, Linux, lan Docker.

<br/>

Sawise aplikasi diuripake, deleng **[Pandhuan Pangguna](USER-GUIDE.jv.md)** kanggo sinau carane nerjemahake, nulis maneh, lan ngowahi teks, ngatur prompt, lan ngonfigurasi model.

<br/><br/>

<a id="installation"></a>
## Instalasi

<a id="windows-electron"></a>
### Windows (Electron)

- Unduh instalasi paling anyar saka [Rilis](https://github.com/wsj-br/transrewrt/releases).
- Jalanke berkas `.exe` lan tindakake proses instalasi.
- Pertama mbukak: miwiti aplikasi saka menu Start utawa shortcut desktop. 

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Unduh `.AppImage` sing cocog (`x64` utawa `arm64`) saka [Rilis](https://github.com/wsj-br/transrewrt/releases).
- Jalanke: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` ing x86_64/amd64, utawa gunakake jeneng berkas `...-arm64.AppImage` ing ARM64.
- Dependensi tambahan (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Deleng [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kanggo informasi liyane.

<br/>

<a id="docker"></a>
### Docker

- Ambil: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Atur paling ora siji kunci penyedia liwat lingkungan (contone `OPENROUTER_KEY` kanggo OpenRouter). Oper variabel karo `-e` utawa `docker compose` / `.env` supaya rahasia ora dikode dadi bagéan saka gambar.
- Kunci penyedia **ora** dimasukkan ing antarmuka web; server maca saka lingkungan.

Conto - volume mawa jeneng kanggo persistensi (kunci OpenRouter liwat env):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opsi   | Katerangan                                                                                                   |
| ------ | ------------------------------------------------------------------------------------------------------------- |
| Port   | `5000` (peta nganggo `-p 5000:5000`)                                                                          |
| Volume | Mount `/app/data` kanggo keberlanjutan konfigurasi lan database                                               |
| Variabel lingkungan | `PORT`, `CONFIG_PATH`, lan kunci LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - deleng [Konfigurasi](#configuration-and-environment) |

Kanggo mbangun lan nguripake saka sumber: `docker compose up --build -d` utawa `pnpm docker:up` - deleng [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Entuk Kunci API OpenRouter

Transrewrt ndhukung pirang-pirang penyedia AI. [OpenRouter](https://openrouter.ai) minangka pilihan populer amarga nggabungake akeh model ing siji kunci lan nawakake model gratis.

1. Mlebu utawa mlebu menyang [openrouter.ai](https://openrouter.ai).
2. Buka kaca [Keys](https://openrouter.ai/keys) lan gawe kunci anyar (kasih jeneng, lan opsional atur watesan kredit). Sampeyan bisa nggunakake model gratis tanpa nambah kredit.
3. **Desktop (Electron):** tempel kuncine ing **Settings → API**. **Docker:** atur variabel lingkungan kaya `OPENROUTER_KEY` (deleng [Quick start](#quick-start)).

Aja nggunakake model **Body Builder** OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) kanggo ngedol, nulis maneh, utawa ngedol: model iki maringi muatan permintaan JSON, dudu teks rampung kanggo tugas-tugas kasebut. Deleng [Settings → Models](USER-GUIDE.jv.md#models) ing Pandhuan Panganggo.

Sampeyan uga bisa nggunakke penyedia liya (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) utawa mlakuake model lokal nganggo [Ollama](https://ollama.com). Deleng [Konfigurasi](#configuration-and-environment) kanggo daftar lengkap penyedia sing didhukung lan variabel lingkungan.

> ⚠️ **PERINGATAN**<br/>
> Yen sampeyan nggunakake Ollama saka piranti, wadah, utawa layanan liya, eling konfigurasi Ollama supaya ngidini sambungan eksternal (dudu mung localhost).

Deleng [OpenRouter authentication](https://openrouter.ai/docs/api/reference/authentication) kanggo informasi watesan, BYOK, lan liyane.

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfigurasi lan lingkungan

**Lokasi berkas konfigurasi**

| Penyebaran        | Lokasi konfigurasi                                 |
| ------------------ | --------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                             |
| Electron (Linux)   | `~/.config/transrewrt/`                             |
| Web / Docker       | `/app/data/config.json` (gunakake volume kanggo ngawetake) |

<br/>

**Variabel lingkungan** (web/Docker mung; Electron nggunakake berkas konfigurasi lokal)

| Variabel         | Asal                  | Katerangan |
| ---------------- | --------------------- | ---------- |
| `PORT`           | `5000`                | Port pendenge server |
| `CONFIG_PATH`    | `/app/data/config.json` | Path menyang berkas konfigurasi |
| `OPENROUTER_KEY` | *(kosong)*            | Kunci API OpenRouter |
| `OPENAI_KEY`     | *(kosong)*            | Kunci API OpenAI |
| `CEREBRAS_KEY`   | *(kosong)*            | Kunci API Cerebras |
| `ANTHROPIC_KEY`  | *(kosong)*            | Kunci API Anthropic |
| `GOOGLE_KEY`     | *(kosong)*            | Kunci API Google Gemini |
| `DEEPSEEK_KEY`   | *(kosong)*            | Kunci API DeepSeek |
| `GROQ_KEY`       | *(kosong)*            | Kunci API Groq |
| `MISTRAL_KEY`    | *(kosong)*            | Kunci API Mistral |
| `OLLAMA_URL`     | *(kosong)*            | URL dhasar Ollama (contone `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(kosong)*            | Kunci API xAI |

Konfigurasine mung penyedia sing sampeyan panganggo. ID model duwe namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, lsp.).

**Tampilan biaya:** OpenRouter maringi biaya sing dibayar kanthi tepat yen bisa digunakake. Penyedia liya nggunakake biaya **perkiraan** saka rega model umum OpenRouter yen ana kunci OpenRouter; tanpa iki, biaya non-OpenRouter bisa katon minangka `0`. Perkiraan ora kalebu invoice.

<br/>

**Data lan persistensi:** Kanggo Docker, pasang volume ing `/app/data` supaya `config.json` lan database SQLite tetep ana sawise wadah diuripake maneh. Tanpa volume, kabeh data bakal ilang nalika wadah mati.

**Pangembang:** Sawise narik owah-owahan sing nggantikake konfigurasi kunci tunggal lawas, setel maneh utawa gabungke `data/config.json` karo bentuk standar anyar saka `src/config-defaults/config_default.json` yen berkas lokal isih nganggo bidang sing wis dibusek (`api_key`, `api_url`, opsi proxy).

<br/>

**Autentikasi web:**

- Admin standar: `admin` / `transrewrt26`.
- Atur pangguna ing **Settings → Users**.
- Reset sandhi: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (saka sumber: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **PERINGATAN**<br/>
> Ganti sakcepete sandhi admin standar ing saben host sing bisa diakses liwat jaringan.

<br/>

Setelan penting (font, model, basa, lsp.) ana ing Setelan aplikasi.

<br/><br/>

<a id="development-and-architecture"></a>

## Pangembangan lan arsitektur

- **Pangembangan:** Setup, nggawe, nguji, lan ngunggah (Electron, Web, Docker) - delengen **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Gambaran arsitektur lan sistem:** Struktur folder, tumpukan teknologi, keputusan desain - delengen **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Rilisan lan tag

- **Tag Git** `v`* (contone `v1.0.10`) ngaktifake [alur kerja rilis](.github/workflows/release.yml). **Rilisan GitHub** nyertakake installer Windows (`.exe`) lan AppImage Linux (**x64** lan **arm64**).
- **Gambar Docker** dipublikasikake menyang `ghcr.io/wsj-br/transrewrt`. Tag gambar cocog karo versi Git (contone `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) ditambah `latest`. Multi-arsitektur: `linux/amd64` lan `linux/arm64` (contone Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Kontribusi

1. Salin repositori.
2. Gawe cabang fitur: `git checkout -b feature/fitur-ku`
3. Commit owahane kanthi pesen sing jelas.
4. Push lan buka Permintaan Tarik (Pull Request) marang `main`.

Monggo tindakake gaya kode sing ana lan uji owahanmu ing mode Electron lan web sakdurunge dikirim. Deleng [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kanggo pandhuan nggawe lan nguji.

<br/>

**Dolanan masalah:** Buka masalah ing [GitHub](https://github.com/wsj-br/transrewrt/issues). Sertakake platform (Windows / Linux / Docker) lan versi aplikasi (katon ing dialog Tentang utawa kaca Rilis).

<br/><br/>

<a id="disclaimer"></a>
## Penyangkalan

Jeneng produk lan ikon duweni pemilik dhewe-dhewe lan mung digunakake kanggo keperluan identifikasi. Piranti lunak iki ora duwe hubungan utawa direkomendasi dening merk sing dijupuk.

<br/><br/>

<a id="license"></a>
## Lisensi

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Lisensi Apache 2.0](LICENSE)