---
translated_at: "2026-03-27T23:10:38.377Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
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

Alat tèks bertenaga AI: nerjemahake marang basa liya, nulis ulang nganggo gaya beda, lan ngowahi nganggo dhawuh khusus—nggunakake macem-macem panyedhiya AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, lan Ollama lokal). Bisa dijalanke minangka aplikasi desktop (Electron) utawa aplikasi web kanggo hosting dhéwé (Docker).

- **Terjemah** — antar puluhan basa, nganggo pangawikan sumber otomatis
- **Nulis ulang** — ndandani tata basa, nambah kliritas, formal/informal, ngpendekake, nambani, teknis
- **Ngowahi** — dhawuh AI khusus; gawe lan ngatur dhawuh, pilihan basa tujuan saben dhawuh
- **Riwayat** — riwayat kabèh pelaksanaan kalebu tèks input/output, filter, lan ekspor
- **Model & biaya** — pilih model saka saben panyedhiya sing dikonfigurasi; dasbor biaya lan panggunaan nganggo log, ringkesan déning model/operasi/dina
- **UI** — antarbejag basa (30+ basa, dhukungan RTL), aksara, ...
- **Modus Web** — dhukungan multi-panganggo nganggo peran admin
- **Desktop** — aplikasi Electron kanggo Windows lan Linux
- **Hosting dhéwé** — gambar Docker kanggo amd64 & arm64 (siap kanggo Raspberry Pi)

Sawisé diinstal, mangga deleng **[Pandhuan Pangguna](USER-GUIDE.jv.md)** kanggo pandhuan lengkap babagan kabèh fitur.

<small>**Maca nganggo basa liya:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Cathetan bab terjemahan UI lan dhisiksan:** Kabèh basa antarmuka, kajaba asline bhs. Inggris (UK)
> dialihaké nganggo model AI; tembung-tembung bisa ora pas utawa isine kesalahan.

</small>

<br/>

<a id="screenshots"></a>

## Gambar Tangkapan

**Pemilih basa**

![Pemilih basa](../images/screenshots/jv/language-selector.png)

**Terjemahakeun**

![Terjemahakeun](../images/screenshots/jv/translate.png)

**Transformasi - édhor pitakonan**

![Transformasi - édhor pitakonan](../images/screenshots/jv/transform-prompt-edit.png)

**Dasbor**

![Dasbor biaya](../images/screenshots/jv/dashboard-summary.png)

**Riwayat**

![Riwayat](../images/screenshots/jv/history.png)

**Setélan - panentuan modhèl**

![Setélan - panentuan modhèl](../images/screenshots/jv/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Tabel Isi

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Miwiti kanthi cepet](#quick-start)
- [Instalasi](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Entuk konci API OpenRouter](#getting-an-openrouter-api-key)
- [Konfigurasi lan lingkungan](#configuration-and-environment)
- [Pangembangan lan arsitektur](#development-and-architecture)
- [Rilis lan tag](#releases-and-tags)
- [Kontribusi](#contributing)
- [Penafian](#disclaimer)
- [Lisensi](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Punteling Mlebu

**Docker (disarankan kanggo self-hosting)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Ganti `sk-or-your-key` nganggo [kunci API OpenRouter](https://openrouter.ai/keys) sampeyan (utawa atur kunci provider liyane; deleng [Konfigurasi](#configuration-and-environment)). Bukak [http://localhost:5000](http://localhost:5000) lan owah sandhi admin asli sadurunge ngekspose layanan kasebut.

<br/>

> ℹ️ **CATETAN**<br/>
> Ing Docker, kredensial LLM diatur nganggo variabel lingkungan kaya `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (ora ing antarmuka web). Ing desktop (Electron) sampeyan ngonfigurasi kunci ing **Setelan → API**.

<br/>

**Windows**

Undhuh `Transrewrt Setup x.y.z.exe` paling anyar saka [Rilis](https://github.com/wsj-br/transrewrt/releases), jalanke piranti instalasi, banjur wiwiti saka menu Start utawa pintasan desktop. Lebokna kunci API sampeyan ing **Setelan → API**. Sampeyan kudu ngrampungake paling ora siji provider, OpenRouter umum digunakake kanggo model gratis.

<br/>

**Linux**

Undhuh `.AppImage` kanggo CPU sampeyan saka [Rilis](https://github.com/wsj-br/transrewrt/releases) (`x64` kanggo PC biasane, `arm64` kanggo piranti ARM akeh, kalebu Raspberry Pi 4+), banjur:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Lebokna kunci API sampeyan ing **Setelan → API**. Sampeyan kudu ngrampungake paling ora siji provider, OpenRouter umum digunakake kanggo model gratis.

Ing Debian/Ubuntu sampeyan kudu nginstal dependensi tambahan dhisik:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Deleng [Instalasi → Linux](#linux-electron) kanggo rincian.

<br/>

> ℹ️ **CATETAN**<br/>
> macOS saiki ora didhukung. Transrewrt kasedhiya kanggo Windows, Linux, lan Docker.

<br/>

Sawise aplikasi dijalanake, deleng **[Pandhuan Pangguna](USER-GUIDE.jv.md)** kanggo sinau cara menerjemahake, nulis maneh, lan ngowahi teks, ngatur prompt, lan ngonfigurasi model.

<br/><br/>

<a id="installation"></a>

## Instalasi

<a id="windows-electron"></a>
### Windows (Electron)

- Unduh file instalasi paling anyar saka [Rilis](https://github.com/wsj-br/transrewrt/releases).
- Jalanke file `.exe` lan tindakake pandhuan instalasi.
- Jalanke sing kapisan: miwiti aplikasi saka menu Start utawa pintasan desktop.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Unduh `.AppImage` sing cocog (`x64` utawa `arm64`) saka [Rilis](https://github.com/wsj-br/transrewrt/releases).
- Jalanke: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` ing x86_64/amd64, utawa gunakake jeneng file `...-arm64.AppImage` kanggo ARM64.
- Piranti tambahan (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Deleng [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kanggo informasi liyane.

<br/>

<a id="docker"></a>
### Docker

- Tarik: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Setel paling ora siji kunci provider liwat lingkungan (contone `OPENROUTER_API_KEY` kanggo OpenRouter). Lewati variabel nganggo `-e` utawa `docker compose` / `.env` supaya rahasia ora ditanam ing gambar.
- Kunci provider **ora** diinput ing antarmuka web; server maca saka lingkungan.

Contoh - volume dijenengi kanggo persistensi (kunci OpenRouter liwat env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

utawa yen sampeyan milih nggunakake Docker Compose, gunakake:

# unduh file compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# sunting file kanggo nambahi API_KEYS
vi transrewrt.yml
# miwiti wadah
docker compose -f transrewrt.yml up -d
```

<br/>

| Pilihan  | Katerangan                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Port     | `5000` (petakake nganggo `-p 5000:5000`)                                                                                               |
| Volume   | Mount `/app/data` kanggo konfigurasi lan daya tahan database                                                                            |
| Variabel lingkungan | `PORT`, `CONFIG_PATH`, lan kunci LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - deleng [Konfigurasi](#configuration-and-environment) |

Kanggo mbangun lan mbukak saka sumber: `docker compose up --build -d` utawa `pnpm docker:up` - deleng [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Entuk Kunci API OpenRouter

Transrewrt ndhukung akeh penyedia AI. [OpenRouter](https://openrouter.ai) pilihan populer amarga nggabungake akeh modhèl ing siji kunci lan nawakake modhèl gratis.

1. Daftar utawa mlebu ing [openrouter.ai](https://openrouter.ai).
2. Buka kaca [Keys](https://openrouter.ai/keys) lan gawe kunci anyar (jenengi, lan opsional atur watesan kredit). Sampeyan bisa migunakake modhèl gratis tanpa nambah kredit.
3. **Desktop (Electron):** tempel kuncine ing **Setelan → API**. **Docker:** atur variabel lingkungan (env) kaya `OPENROUTER_API_KEY` (delengen [Mulai Gancang](#quick-start)).

Aja nggunakake modhèl **Body Builder** OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) kanggo nerjemahake, nulis maneh, utawa ngowahi: modhèl iki maringi muatan permintaan JSON, dudu teks rampung kanggo tugas-tugas kasebut. Deleng [Setelan → Modhèl](USER-GUIDE.jv.md#models) ing Pandhuan Pangguna.

Sampeyan uga bisa migunakake penyedia liyane (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) utawa jalanake modhèl lokal nganggo [Ollama](https://ollama.com). Deleng [Konfigurasi](#configuration-and-environment) kanggo daftar lengkap penyedia lan variabel lingkungan sing didhukung.

> ⚠️ **PANGATEN**<br/>
> Yen sampeyan nggunakake Ollama saka piranti, wadah, utawa layanan liya, eling konfigurasia Ollama kanggo ngidini sambungan eksternal (ora mung localhost).

Kanggo watesan, BYOK, lan liya-liyane, deleng [otentikasi OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Konfigurasi lan lingkungan

**Lokasi berkas konfigurasi**

| Penyebaran         | Lokasi konfigurasi                                |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gunakna volume kanggo njaga data tetep ana) |

<br/>

**Variabel lingkungan** (khusus web/Docker; Electron nggunakna berkas konfigurasi lokal)

| Variabel         | Gawan baku               | Katerangan |
| ---------------- | ------------------------ | ----------- |
| `PORT`           | `5000`                   | Port pendengean server |
| `CONFIG_PATH`    | `/app/data/config.json`  | Jalur menyang berkas konfigurasi |
| `OPENROUTER_API_KEY` | *(kosong)*               | Kunci API OpenRouter |
| `OPENAI_API_KEY`     | *(kosong)*               | Kunci API OpenAI |
| `CEREBRAS_API_KEY`   | *(kosong)*               | Kunci API Cerebras |
| `ANTHROPIC_API_KEY`  | *(kosong)*               | Kunci API Anthropic |
| `GOOGLE_API_KEY`     | *(kosong)*               | Kunci API Google Gemini |
| `DEEPSEEK_API_KEY`   | *(kosong)*               | Kunci API DeepSeek |
| `GROQ_API_KEY`       | *(kosong)*               | Kunci API Groq |
| `MISTRAL_API_KEY`    | *(kosong)*               | Kunci API Mistral |
| `OLLAMA_URL`     | *(kosong)*               | URL dhasar Ollama (contone: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(kosong)*               | Kunci API xAI |

Konfigurasina mung panyedhiya sing digunakna. ID model duwe ruang jeneng (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, lsp).

**Tampilan biaya:** OpenRouter maringi biaya sing dibayar sacara presisi yen cocog. Panyedhiya liyane nggunakna biaya **perkiraan** saka rega model umum OpenRouter yen kunci OpenRouter kasedhiya; tanpa kuwi, biaya non-OpenRouter bisa muncul minangka `0`. Perkiraan ora dadi invoice.

<br/>

**Data lan panyebaran:** Kanggo Docker, pasang volume ana `/app/data` supaya `config.json` lan database SQLite tetep ana sawise container diwiwiti maneh. Tanpa volume, kabeh data ilang nalika container mandheg.

**Pangembang:** Sawise njupuk owah-owahan sing ngganti konfigurasi kunci tunggal lawas, reset utawa gabung `data/config.json` karo bentuk baku anyar saka `src/config-defaults/config_default.json` menawa berkas lokal isih nggunakna bidang sing dihapus (`api_key`, `api_url`, opsi proxy).

<br/>

**Otentikasi web:**

- Admin gawan baku: `admin` / `transrewrt26`.
- Atur pangguna ana **Setelan → Pangguna**.
- Reset sandhi: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (saka sumber: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **PERINGATAN**<br/>
> Ganti cepet-cepet sandhi admin baku ing saben host sing bisa diakses liwat jaringan.

<br/>

Setelan penting (huruf, model, basa, lsp.) kasedhiya ana Setelan aplikasi.

<br/><br/>

<a id="development-and-architecture"></a>

## Pangembangan lan arsitektur

- **Pangembangan:** Ngatur, mbangun, ngujicoba, lan nuduhake (Electron, Web, Docker) - deleng **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Gambaran arsitektur lan sistem:** Struktur folder, tumpukan teknologi, keputusan desain - deleng **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Rilis lan tag

- **Tag Git** `v`* (contone `v1.0.10`) nguji [alur kerja rilis](.github/workflows/release.yml). **GitHub Releases** nempel installer Windows (`.exe`) lan AppImage Linux (**x64** lan **arm64**).
- **Citra Docker** dikirim menyang `ghcr.io/wsj-br/transrewrt`. Tag citra nyocokake versi Git (contone `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) ditambah `latest`. Multi-arsitektur: `linux/amd64` lan `linux/arm64` (contone Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Kontribusi

1. Salin repositori.
2. Gawe cabang fitur: `git checkout -b feature/fitur_saya`
3. Commit owah-owahanmu nganggo pesen cetha.
4. Push lan buka Permintaan Tarik (Pull Request) marang `main`.

Monggo ikuti gaya kode sing wis ana lan uji owah-owahanmu ing mode Electron lan web sadurunge dikirim. Deleng [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kanggo petunjuk mbangun lan ngujicoba.

<br/>

**Dolanan masalah:** Buka isu ing [GitHub](https://github.com/wsj-br/transrewrt/issues). Sertakake platform sampeyan (Windows / Linux / Docker) lan versi app (katon ing dialog Tentang utawa ing kaca Rilis).

<br/><br/>

<a id="disclaimer"></a>

## Pernyatahan

Jeneng lan ikon produk milik para pemiliké dhéwé lan mung digunakaké kanggo tujuan identifikasi. Piranti lunak iki ora duwé hubungan utawa disetujoni déning mérek-mérek sing disebutaké.

<br/><br/>

<a id="license"></a>
## Lisen

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Lisensi Apache 2.0](LICENSE)