---
translated_at: "2026-03-24T01:47:55.524Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="logo Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Versi"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lisensi: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Piranti tèks kanthi daya AI: nerjemahaké antar basa, nulis manèh gaya béda, lan ngowahi nganggo prompt kustom — kanthi pirang-pirang panyedhiya AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, lan Ollama lokal). Jalan minangka aplikasi desktop (Electron) utawa aplikasi web sing di-host dhéwé (Docker).

- **Nerjemahaké** — antar puluhan basa, kanthi pendeteksian sumber otomatis
- **Nulis manèh** — mbenerake tatakrama, nambahi kabeneran, formal/tak formal, ngringkes, ngembang, teknis
- **Ngganti** — prompt AI kustom; nggawe lan ngatur prompt, basa tujuan opsional saben prompt
- **Sajarah** — sajarah eksekusi lengkap kanthi teks input/output, pelolosan, lan ekspor
- **Model lan biaya** — milih model saka panyedhiya sing dikonfigurasi; dashboard biaya kanthi log SQLite, ringkesan miturut model/operasi/dina
- **UI** — antarmuka multibasa (30+ basa, dhukungan RTL), jinis huruf, ...
- **Mode Web** — dhukungan multi-pangguna kanthi peran admin; kunci API tetep ana ing sisi server, ora terekspos menyang browser
- **Desktop** — aplikasi Electron kanggo Windows lan Linux
- **Sing di-host dhéwé** — gambar Docker kanggo amd64 & arm64 (siape kanggo Raspberry Pi)

Sawisé dipasang, deleng **[Pandhuan Pangguna](USER-GUIDE.jv.md)** kanggo penjelasan lengkap kabeh fitur.

<small>**Macca ing basa liya:** [English (UK)](README.jv.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>


<br/>

**Cathetan bab terjemahan UI lan dokumentasi:** Kabeh basa antarmuka kajaba Basa Inggris (UK) ditrjemahaké nganggo model AI; panganggone tembung bisa uga kurang tepat utawa ngandhut kasalahan.



<a id="screenshots"></a>
## Tangkapan Layar

**Pemilih basa**

![Pemilih basa](../images/screenshots/jv/language-selector.png)

**Nerjemahaké**

![Nerjemahaké](../images/screenshots/jv/translate.png)

**Ngowahi - panyunting prompt**

![Ngowahi - panyunting prompt](../images/screenshots/jv/transform-prompt-edit.png)

**Dashboard**

![Dashboard biaya](../images/screenshots/jv/dashboard-summary.png)

**Sajarah**

![Sajarah](../images/screenshots/jv/history.png)

**Setelan - pilihan model**

![Setelan - pilihan model](../images/screenshots/jv/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Tabel Isi

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Mulai Cepat](#quick-start)
- [Instalasi](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Entuk Kunci API OpenRouter](#getting-an-openrouter-api-key)
- [Konfigurasi lan lingkungan](#configuration-and-environment)
- [Pangembangan lan arsitektur](#development-and-architecture)
- [Rilis lan tag](#releases-and-tags)
- [Kontribusi](#contributing)
- [Penafian](#disclaimer)
- [Lisensi](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Mulai Cepat

**Docker (dianjurake kanggo self-hosting)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Ganti `sk-or-your-key` nganggo [kunci API OpenRouter](https://openrouter.ai/keys) sampeyan (utawa setel kunci penyedia liya; deleng [Konfigurasi](#configuration-and-environment)). Buka [http://localhost:5000](http://localhost:5000) lan ganti sandi admin asli sadurunge ngekspose layanan.

<br/>

> ℹ️ **CATETAN**<br/>
> Ing Docker, kredensial LLM diatur nganggo variabel lingkungan kaya `OPENROUTER_KEY`, `OPENAI_KEY`, … (ora ing antarmuka web). Ing desktop (Electron) sampeyan ngonfigurasi kunci ing **Setelan → API**.

<br/>

**Windows**

Unduh `Transrewrt Setup x.y.z.exe` paling anyar saka [Rilis](https://github.com/wsj-br/transrewrt/releases), jalanake installer, banjur buka saka menu Start utawa pintasan desktop. Masukkan kunci API sampeyan ing **Setelan → API**. Sampeyan kudu ngonfigurasi sethithik dhewe siji penyedia, OpenRouter umume digunakake kanggo model gratis.

<br/>

**Linux**

Unduh file `.AppImage` saka [Rilis](https://github.com/wsj-br/transrewrt/releases), banjur:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Masukkan kunci API sampeyan ing **Setelan → API**. Sampeyan kudu ngonfigurasi sethithik dhewe siji penyedia, OpenRouter umume digunakake kanggo model gratis.

Ing Debian/Ubuntu sampeyan kudu nginstal dependensi tambahan luwih dhisik:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Deleng [Instalasi → Linux](#linux-electron) kanggo rincian.

<br/>

> ℹ️ **CATETAN**<br/>
> macOS durung didhukung. Transrewrt kasedhiya kanggo Windows, Linux, lan Docker.

<br/>

Sawise aplikasi mlaku, deleng **[Pandhuan Pangguna](USER-GUIDE.jv.md)** kanggo sinau cara nerjemahake, nulis maneh, lan ngowahi teks, ngatur prompt, lan ngonfigurasi model.

<br/><br/>

<a id="installation"></a>
## Instalasi

<a id="windows-electron"></a>
### Windows (Electron)

- Unduh installer paling anyar saka [Rilis](https://github.com/wsj-br/transrewrt/releases).
- Jalanake file `.exe` lan tindakake installer.
- Pengalihan pertama: buka aplikasi saka menu Start utawa pintasan desktop.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Unduh file `.AppImage` saka [Rilis](https://github.com/wsj-br/transrewrt/releases).
- Jalanake: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Dependensi tambahan (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Deleng [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kanggo informasi luwih lengkap.

<br/>

<a id="docker"></a>
### Docker

- Tarik: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Setel sethithik dhewe siji kunci penyedia nganggo variabel lingkungan (contone `OPENROUTER_KEY` kanggo OpenRouter). Lewati variabel nganggo `-e` utawa `docker compose` / `.env` supaya rahasia ora kedhedhak ing gambar.
- Kunci penyedia **ora** dimasukkan ing antarmuka web; server maca saka lingkungan.

Conto - volume bernama kanggo persistensi (kunci OpenRouter liwat env):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opsi     | Katerangan                                                                                                |
| -------- | --------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (map nganggo `-p 5000:5000`)                                                                       |
| Volume   | Mount `/app/data` kanggo konfigurasi lan persistensi database                                             |
| Variabel lingkungan | `PORT`, `CONFIG_PATH`, sarta kunci LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - deleng [Konfigurasi](#configuration-and-environment) |

Kanggo mbangun lan mlaku saka sumber: `docker compose up --build -d` utawa `pnpm docker:up` - deleng [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Entuk Kunci API OpenRouter

Transrewrt ndhukung akèh penyedia AI. [OpenRouter](https://openrouter.ai) minangka pilihan populer amarga nggabungake akèh modhèl ing siji kunci lan nawakake modhèl gratis.

1. Daftar utawa mlebu nang [openrouter.ai](https://openrouter.ai).
2. Bukak kaca [Keys](https://openrouter.ai/keys) lan gawe kunci anyar (jenengi, lan opsional atur watesan kredit). Sampeyan bisa nggunakake modhèl gratis tanpa nambah kredit.
3. **Desktop (Electron):** tancepna kunci nang **Setelan → API**. **Docker:** atur variabel lingkungan kaya `OPENROUTER_KEY` (delengen [Mulai Cepet](#quick-start)).

Sampeyan uga bisa nggunakake penyedia liyane (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) utawa njalankan modhèl lokal kanthi [Ollama](https://ollama.com). Delengen [Konfigurasi](#configuration-and-environment) kanggo daftar lengkap penyedia sing didhukung lan variabel lingkungan.

Kanggo watesan, BYOK, lan liyane, delengen [otentikasi OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfigurasi lan lingkungan

**Lokasi berkas konfigurasi**

| Penyebaran         | Lokasi Konfigurasi                             |
| ------------------ | --------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                       |
| Electron (Linux)   | `~/.config/transrewrt/`                       |
| Web / Docker       | `/app/data/config.json` (nggunakna volume supaya tetep ana) |

<br/>

**Variabel lingkungan** (khusus web/Docker saja; Electron nggunakake berkas konfigurasi lokal)

| Variabel         | Asli                 | Katerangan |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Port pendengaran server |
| `CONFIG_PATH`    | `/app/data/config.json` | Path menyang berkas konfigurasi |
| `OPENROUTER_KEY` | *(kosong)*               | Kunci API OpenRouter |
| `OPENAI_KEY`     | *(kosong)*               | Kunci API OpenAI |
| `ANTHROPIC_KEY`  | *(kosong)*               | Kunci API Anthropic |
| `GOOGLE_KEY`     | *(kosong)*               | Kunci API Google Gemini |
| `DEEPSEEK_KEY`   | *(kosong)*               | Kunci API DeepSeek |
| `GROQ_KEY`       | *(kosong)*               | Kunci API Groq |
| `MISTRAL_KEY`    | *(kosong)*               | Kunci API Mistral |
| `OLLAMA_URL`     | *(kosong)*               | URL basis Ollama (contone: `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(kosong)*               | Kunci API xAI |

Konfigurasikna mung penyedia sing digunakna. ID modhèl duwe namespace (`openrouter/…`, `openai/…`, `ollama/…`, lsp).

**Tampilan biaya:** OpenRouter ngetokna biaya sing tepat nalika cocog. Penyedia liyane nggunakna biaya **perkiraan** saka rega modhèl umum OpenRouter yen ana kunci OpenRouter; tanpa kasebut, biaya non-OpenRouter bisa katon minangka `0`. Perkiraan ora padha karo invoice.

<br/>

**Data lan persistensi:** Kanggo Docker, pasang volume nang `/app/data` supaya `config.json` lan database SQLite tetep ana sawise container diuripna maneh. Tanpa volume, kabeh data ilang nalika container dihentekna.

**Para pangembang:** Sawise narik owah-owahan sing nggantikna konfigurasi kunci tunggal lawas, reset utawa gabungna `data/config.json` karo bentuk asli anyar saka `src/config-defaults/config_default.json` yen berkas lokal isih nggunakna bidang sing wis dihapus (`api_key`, `api_url`, opsi proxy).

<br/>

**Otentikasi web:**

- Admin asli: `admin` / `transrewrt26`.
- Atur pangguna nang **Setelan → Pangguna**.
- Reset sandhi: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (saka sumber: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **PERINGATAN**<br/>
> Ganti sandhi admin asli langsung ing host sing bisa diakses jaringan.

<br/>

Setelan penting (font, modhèl, basa, lsp.) bisa diakses nang Setelan aplikasi.

<br/><br/>

<a id="development-and-architecture"></a>
## Pangembangan lan arsitektur

- **Pangembangan:** Ngatur, mbangun, nguji, lan nyebar (Electron, Web, Docker) - deleng **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Gambaran arsitektur lan sistem:** Struktur folder, tumpukan teknologi, keputusan desain - deleng **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Rilis lan tag

- **Tag Git** `v`* (conto: `v1.0.10`) ngaktifake [alur kerja rilis](.github/workflows/release.yml). **Rilis GitHub** nyedhiyakake installer Windows (`.exe`) lan AppImage Linux.
- **Gambar Docker** dikirim menyang `ghcr.io/wsj-br/transrewrt`. Tag gambar cocog karo vèrsi Git (contone `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) ditambah `latest`. Multi-arsitektur: `linux/amd64` lan `linux/arm64` (contone Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Kontribusi

1. Fork repositori kasebut.
2. Gawe cabang fitur: `git checkout -b feature/my-feature`
3. Commit owah-owahan karo pesen kang jelas.
4. Push lan mbukak Pull Request marang `main`.

Mangga ikuti gaya koden sing ana lan uji owah-owahanmu ing mode Electron lan web sadurunge dikirim. Deleng [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kanggo pandhuan nggawe lan nguji.

<br/>

**Laporan masalah:** Buka isyu ing [GitHub](https://github.com/wsj-br/transrewrt/issues). Sertakake platform sampeyan (Windows / Linux / Docker) lan vèrsi app (katon ing dialog About utawa ing kaca Rilis).

<br/><br/>

<a id="disclaimer"></a>
## Penyangkalan

Jeneng produk lan ikon duweke pemilik sing sesuai lan digunakake mung kanggo identifikasi. Piranti lunak iki ora duwe hubungan utawa disetujoni déning merek sing disebutake.

<br/><br/>

<a id="license"></a>
## Lisensi

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Lisensi Apache 2.0](LICENSE)