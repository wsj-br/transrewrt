---
translated_at: "2026-03-26T00:47:15.100Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logo" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Versi"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lisensi: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Piranti teks kanthi tenaga AI: nerjemahake antar basa, nulis ulang kanthi gaya beda, lan ngowahi nganggo prompt khusus — nggunakake pirang-pirang penyedia AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, lan Ollama lokal). Jalan minangka aplikasi desktop (Electron) utawa aplikasi web sing dijejaki dhewe (Docker).

- **Nerjemahake** — antar puluhan basa, kanthi deteksi otomatis sumber
- **Nulis ulang** — ngoreksi tata basa, ningkatake kasarjane, formal/informal, mungkile, nambahi, teknis
- **Ngowahi** — prompt AI khusus; nggawe lan ngatur prompt, pilihan basa tujuan saben prompt
- **Riwayat** — riwayat pelaksanaan lengkap kanthi teks input/ouput, penyaringan, lan ekspor
- **Model lan biaya** — pilih model saka penyedia sing dikonfigurasi; dashboard biaya lan panggunaan kanthi log, ringkesan miturut model/operasi/dina
- **UI** — antarmuka multibahasa (30+ basa, nyengkuyung RTL), font, ...
- **Modha web** — dhukungan multi-panganggo kanthi peran admin
- **Desktop** — aplikasi Electron kanggo Windows lan Linux
- **Dijejaki dhewe** — gambar Docker kanggo amd64 & arm64 (siap kanggo Raspberry Pi)

Sawise dipasang, deleng **[Pandhuan Panganggo](USER-GUIDE.jv.md)** kanggo pandhuan lengkap kabeh fitur.

<small>**Waca ing basa liyane:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Cathetan bab terjemahan UI lan dokumentasi:** Kabeh basa antarmuka sanalika basa asliné Inggris (UK)
> diterjemahaké nggunakake model AI; ukara bisa ora tepat utawa ngandhut késalahan.

</small>

<br/>

<a id="screenshots"></a>
## Tangkapan layar

**Pemilih basa**

![Pemilih basa](../images/screenshots/jv/language-selector.png)

**Nerjemahake**

![Nerjemahake](../images/screenshots/jv/translate.png)

**Ngowahi - panyunting prompt**

![Ngowahi - panyunting prompt](../images/screenshots/jv/transform-prompt-edit.png)

**Dashboard**

![Dashboard biaya](../images/screenshots/jv/dashboard-summary.png)

**Riwayat**

![Riwayat](../images/screenshots/jv/history.png)

**Setelan - pilihan model**

![Setelan - pilihan model](../images/screenshots/jv/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Daftra Isi

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Mlebu cepet](#quick-start)
- [Instalasi](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Entuk kunci API OpenRouter](#getting-an-openrouter-api-key)
- [Konfigurasi lan lingkungan](#configuration-and-environment)
- [Pengembangan lan arsitektur](#development-and-architecture)
- [Rilis lan tag](#releases-and-tags)
- [Kontribusi](#contributing)
- [Penyangkalan](#disclaimer)
- [Lisensi](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Mlebu cepet

**Docker (disarankan kanggo njaga dhewe)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Ganti `sk-or-your-key` nganggo [kunci API OpenRouter](https://openrouter.ai/keys) sampeyan (utawa atur kunci penyedia liyane; deleng [Konfigurasi](#configuration-and-environment)). Bukak [http://localhost:5000](http://localhost:5000) lan ganti sandhi admin asline sadurunge ngekspos layanan kasebut.

<br/>

> ℹ️ **CATETAN**<br/>
> Ing Docker, kredensial LLM diatur nganggo variabel lingkungan kaya `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (ora ing UI web). Ing desktop (Electron) sampeyan ngatur kunci ing **Setelan → API**.

<br/>

**Windows**

Unduh `Transrewrt Setup x.y.z.exe` paling anyar saka [Rilis](https://github.com/wsj-br/transrewrt/releases), jalanen installer, banjur miwiti saka menu Start utawa pintasan desktop. Masukkan kunci API sampeyan ing **Setelan → API**. Sampeyan kudu ngonfigurasi paling ora siji penyedia, OpenRouter umum digunakake kanggo model gratis.

<br/>

**Linux**

Unduh `.AppImage` kanggo CPU sampeyan saka [Rilis](https://github.com/wsj-br/transrewrt/releases) (`x64` kanggo PC umum, `arm64` kanggo piranti ARM akeh, kalebu Raspberry Pi 4+), banjur:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Masukkan kunci API sampeyan ing **Setelan → API**. Sampeyan kudu ngonfigurasi paling ora siji penyedia, OpenRouter umum digunakake kanggo model gratis.

Ing Debian/Ubuntu sampeyan perlu nginstal dependensi tambahan dhisik:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Deleng [Instalasi → Linux](#linux-electron) kanggo rincian.

<br/>

> ℹ️ **CATETAN**<br/>
> macOS durung didhukung saiki. Transrewrt kasedhiya kanggo Windows, Linux, lan Docker.

<br/>

Sawise aplikasi dijalanke, deleng **[Pandhuan Pangguna](USER-GUIDE.jv.md)** kanggo mangerteni carane nerjemahake, nulis maneh, lan ngowahi tèks, ngatur prompt, lan ngonfigurasi model.

<br/><br/>

<a id="installation"></a>
## Instalasi

<a id="windows-electron"></a>
### Windows (Electron)

- Unduh installer paling anyar saka [Rilis](https://github.com/wsj-br/transrewrt/releases).
- Jalanen file `.exe` lan tindakake installer.
- Mbukak pisanan: miwiti aplikasi saka menu Start utawa pintasan desktop. 

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Unduh `.AppImage` sing cocog (`x64` utawa `arm64`) saka [Rilis](https://github.com/wsj-br/transrewrt/releases).
- Jalanen: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` ing x86_64/amd64, utawa gunakna jeneng file `...-arm64.AppImage` ing ARM64.
- Dependensi tambahan (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Deleng [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kanggo informasi liyane.

<br/>

<a id="docker"></a>
### Docker

- Ambil: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Atur paling ora siji kunci penyedia liwat lingkungan (contone `OPENROUTER_API_KEY` kanggo OpenRouter). Lulus variabel nganggo `-e` utawa `docker compose` / `.env` supaya rahasia ora kalebu ing gambar.
- Kunci penyedia **ora** dimasukkan ing UI web; server maca saka lingkungan.

Conto - volume dijenengi kanggo persistensi (kunci OpenRouter liwat env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Pilihan  | Katerangan                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (petakake nganggo `-p 5000:5000`)                                                                              |
| Volume   | Mount `/app/data` kanggo persistensi konfigurasi lan basis data                                                         |
| Variabel lingkungan | `PORT`, `CONFIG_PATH`, ditambah kunci LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - deleng [Konfigurasi](#configuration-and-environment) |

Kanggo mbangun lan jalanake saka sumber: `docker compose up --build -d` utawa `pnpm docker:up` - deleng [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Entuk Kunci API OpenRouter

Transrewrt nyengkuyung akèh penyedia AI. [OpenRouter](https://openrouter.ai) minangka pilihan sing populer amarga munggahaké akeh model ing siji kunci lan nawakaké model gratis.

1. Daftar utawa mlebu ing [openrouter.ai](https://openrouter.ai).
2. Bukak kaca [Keys](https://openrouter.ai/keys) lan gawé kunci énggal (jenengi, lan pilihan atur watesan kredit). Sampeyan bisa migunakaké model gratis tanpa nambahi kredit.
3. **Desktop (Electron):** Tempel kunci ing **Setelan → API**. **Docker:** Atur variabel lingkungan kaya `OPENROUTER_API_KEY` (deleng [Miwiti Cepet](#quick-start)).

Aja nggunakake model **Body Builder** OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) kanggo terjemahan, nulis maneh, utawa transformasi: model iki maringi muatan jeneng panjaluk JSON, bukan teks rampung kanggo tugas-tugas kasebut. Deleng [Setelan → Model](USER-GUIDE.jv.md#models) ing Pandhuan Panganggo.

Sampeyan uga bisa nggunakake penyedia liya (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) utawa mlakuake model lokal kanthi [Ollama](https://ollama.com). Deleng [Konfigurasi](#configuration-and-environment) kanggo daftar lengkap penyedia sing didhukung lan variabel lingkungan.

> ⚠️ **PÉRINGATAN**<br/>
> Yèn sampeyan nggunakake Ollama saka piranti, wadah, utawa layanan liya, eling konfigurasia Ollama kanggo ngidinake sambungan eksternal (dudu mung localhost).

Deleng [otentikasi OpenRouter](https://openrouter.ai/docs/api/reference/authentication) kanggo watesan, BYOK (Bring Your Own Key), lan liya-liyané.

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfigurasi lan lingkungan

**Lokasi berkas konfigurasi**

| Deploy             | Lokasi konfigurasi                             |
| ------------------ | ---------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                        |
| Electron (Linux)   | `~/.config/transrewrt/`                        |
| Web / Docker       | `/app/data/config.json` (nggunakake volume kanggo nyimpen) |

<br/>

**Variabel lingkungan** (mung kanggo web/Docker; Electron nggunakake berkas konfigurasi lokal)

| Variabel           | Asali                   | Katerangan |
| ------------------ | ----------------------- | ----------- |
| `PORT`            | `5000`                  | Port peladen |
| `CONFIG_PATH`     | `/app/data/config.json` | Path menyang berkas konfigurasi |
| `OPENROUTER_API_KEY`  | *(kosong)*              | Kunci API OpenRouter |
| `OPENAI_API_KEY`      | *(kosong)*              | Kunci API OpenAI |
| `CEREBRAS_API_KEY`    | *(kosong)*              | Kunci API Cerebras |
| `ANTHROPIC_API_KEY`   | *(kosong)*              | Kunci API Anthropic |
| `GOOGLE_API_KEY`      | *(kosong)*              | Kunci API Google Gemini |
| `DEEPSEEK_API_KEY`    | *(kosong)*              | Kunci API DeepSeek |
| `GROQ_API_KEY`        | *(kosong)*              | Kunci API Groq |
| `MISTRAL_API_KEY`     | *(kosong)*              | Kunci API Mistral |
| `OLLAMA_URL`      | *(kosong)*              | URL dhasar Ollama (contone `http://host.docker.internal:11434`) |
| `XAI_API_KEY`         | *(kosong)*              | Kunci API xAI |

Konfigurasia mung penyedia sing digunakaké. ID model duwé ruang jeneng (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, lsp.).

**Tampilan biaya:** OpenRouter mulihaké biaya sajatine yen cocog. Penyedia liyane migunakaké biaya **perkiraan** saka rega model OpenRouter umum nalika ana kunci OpenRouter; yen ora, biaya non-OpenRouter bisa ditampilaké minangka `0`. Perkiraan ora minangka invoice.

<br/>

**Data lan kelestarian:** Kanggo Docker, pasang volume ing `/app/data` supaya `config.json` lan database SQLite tetep ana sawise wadah diuripake maneh. Tanpa volume, kabeh data ilang nalika wadah mandheg.

**Panembang:** Sawise narik owah-owahan sing nggantikake konfigurasi kunci tunggal lawas, reset utawa gabung `data/config.json` karo bentuk standar anyar saka `src/config-defaults/config_default.json` yèn berkas lokal isih nggunakake kolom sing dihapus (`api_key`, `api_url`, opsi proxy).

<br/>

**Otentikasi Web:**

- Admin asali: `admin` / `transrewrt26`.
- Atur pangguna ing **Setelan → Pangguna**.
- Reset sandhi: `docker exec <wadah> reset-web-password '<jeneng pangguna>' '<sandhi anyar>'`
  (saka sumber: `pnpm run reset-web-password -- <jeneng pangguna> <sandhi anyar>`)

<br/>

> ⚠️ **PÉRINGATAN**<br/>
> Gantos langsung sandhi admin asli ing saben host sing bisa diakses jaringan.

<br/>

Setelan utama (font, model, basa, lsp.) kasedhiya ing Setelan aplikasi.

<br/><br/>

<a id="development-and-architecture"></a>

## Pangembangan lan arsitektur

- **Pangembangan:** Ngatur, mbangun, nguji, lan ngedeploy (Electron, Web, Docker) - deleng **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Gambaran arsitektur lan sistem:** Struktur folder, tumpukan teknologi, sawetara keputusan rancangan - deleng **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Rilis lan tag

- **Tag Git** `v`* (contone, `v1.0.10`) ngaktifake [alur kerja rilis](.github/workflows/release.yml). **GitHub Releases** nyertakake installer Windows (`.exe`) lan AppImage Linux (**x64** lan **arm64**).
- **Cithakan Docker** diterbitake menyang `ghcr.io/wsj-br/transrewrt`. Tag cithakan pas karo versi Git (contone `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) ditambah tag `latest`. Multi-arsitektur: `linux/amd64` lan `linux/arm64` (kayata Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Kontribusi

1. Salin repositori.
2. Gawe cabang fitur: `git checkout -b feature/my-feature`
3. Simpen owah-owahanmu kanthi pesen sing jelas.
4. Push lan mbukak Permintaan Tarik (Pull Request) marang `main`.

Monggo nututi gaya koding sing wis ana lan nyoba owah-owahanmu ing loro-liyane mode Electron lan web sadurunge ngirim. Deleng [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kanggo instruksi mbangun lan nguji.

<br/>

**Dolan masalah:** Buka isu ing [GitHub](https://github.com/wsj-br/transrewrt/issues). Sertakake platformmu (Windows / Linux / Docker) lan versi aplikasi (katon ing dialog About utawa ing kaca Rilis).

<br/><br/>

<a id="disclaimer"></a>
## Kabebasan Gugatan

Jeneng produk lan ikon kepunyèn pemiliké dhéwé lan mung digunakaké kanggo tujuan identifikasi. Piranti lunak iki ora ana gandhèngan utawa ora direkomendasikaké déning salah siji merek sing disebutake.

<br/><br/>

<a id="license"></a>
## Lisensi

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Lisensi Apache 2.0](LICENSE)