---
translated_at: "2026-03-29T01:55:23.932Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Piranti téks kanthi daya AI: ngalih basa, nulis maneh gaya béda, lan ngowahi kanthi petunjuk kustom — nganggo pirang-pirang panyedhiya AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, lan Ollama lokal). Jalan minangka aplikasi desktop (Electron) utawa aplikasi web dhéwé (Docker).

- **Terjemahake** — antara puluhan basa, nganggo pendhètèkan sumber otomatis
- **Nulis Maneh** — memperbaiki tata basa, ningkatake kapraosingan, formal/tidak formal, ngpendekake, ngembangake, teknis
- **Ngowahi** — dhawuh AI khusus; gawe lan ngatur dhawuh, basa tujuan opsional saben dhawuh
- **Riwayat** — riwayat eksekusi lengkap karo tèks input/output, penyaringan, lan ekspor
- **Model & biaya** — pilih model saka penyedia sing wis dikonfigurasi; dasbor biaya lan panggunaan karo log, ringkesan miturut model/operasi/dina
- **UI** — antarmuka multibasa (30+ basa, dhukungan RTL), font, ...
- **Modha Web** — dhukungan multi-panganggo karo peran admin
- **Desktop** — aplikasi Electron kanggo Windows lan Linux
- **Swaradaya** — gambar Docker kanggo amd64 & arm64 (siap digunakake ing Raspberry Pi)

Sawisé dipasang, deleng **[Pandhuan Panganggo](USER-GUIDE.jv.md)** kanggo panjelasan lengkap babagan kabeh fitur.

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](translated-docs/README

E.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Cathetan babagan terjemahan UI lan dokumentasi:** Kabèh basa antarmuka kajaba Basa Indonésia asli 
> diterjemahaké nggunakaké modhel AI; kapacaké kiasane kurang cetha utawa ngemot klasa.

</small>

<br/>

<a id="screenshots"></a>

## Tangkapan Layar

**Pemilih basa**

![Pemilih basa](../images/screenshots/jv/language-selector.png)

**Terjemahakeun**

![Terjemahakeun](../images/screenshots/jv/translate.png)

**Transform - editor dhawuh**

![Transform - editor dhawuh](../images/screenshots/jv/transform-prompt-edit.png)

**Dasbor**

![Ringkesan dasbor — panggunaan](../images/screenshots/jv/dashboard-summary.png)

**Riwayat**

![Riwayat](../images/screenshots/jv/history.png)

**Setelan - pilihan model**

![Setelan - pilihan model](../images/screenshots/jv/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Tabel Isi

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Mulai Cepet](#quick-start)
- [Instalasi](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Ngatur Zona Waktu](#configuring-the-timezone)
- [Entuk Kunci API OpenRouter](#getting-an-openrouter-api-key)
- [Konfigurasi lan Lingkungan](#configuration-and-environment)
- [Pengembangan lan Arsitektur](#development-and-architecture)
- [Nglaporake Masalah](#reporting-issues)
- [Peringatan](#disclaimer)
- [Lisensi](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Wiwitan Cepet

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

Gantilah `sk-or-your-key` nganggo [kunci API OpenRouter](https://openrouter.ai/keys) (utawa setel kunci provider liya; deleng [Konfigurasi](#configuration-and-environment)). Bukak [http://localhost:5000](http://localhost:5000) lan ganti sandhi admin baku sadurunge ngekspor layanan kasebut.

<br/>

> ℹ️ **CATETAN**<br/>
> Ing Docker, kredensial LLM diatur nganggo variabel lingkungan kaya `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (ora ing antarmuka web). Ing desktop (Electron) sampeyan ngonfigurasi kunci ing **Setelan → API**.

<br/>

**Windows**

Undhuwuhana `Transrewrt Setup x.y.z.exe` paling anyar saka [Rilis](https://github.com/wsj-br/transrewrt/releases), jalanen file instalasi, banjur bukak saka menu Start utawa shortcut desktop. Lebokna kunci API sampeyan nang **Setelan → API**. Sampeyan kudu ngonfigurasi paling ora siji penyedia, OpenRouter minangka panyedhiya umum kanggo model gratis.

<br/>

**Linux**

Undhuwuhana `.AppImage` kanggo CPU sampeyan saka [Rilis](https://github.com/wsj-br/transrewrt/releases) (`x64` kanggo PC biasa, `arm64` kanggo piranti ARM akeh, kalebu Raspberry Pi 4+), banjur:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Lebokna kunci API sampeyan nang **Setelan → API**. Sampeyan kudu ngonfigurasi paling ora siji penyedia, OpenRouter minangka panyedhiya umum kanggo model gratis.

Nang Debian/Ubuntu sampeyan kena mbutuhake instalasi dependensi tambahan dhisik:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Delengen [Instalasi → Linux](#linux-electron) kanggo rincian.

<br/>

> ℹ️ **CATHETAN**<br/>

> macOS durung didhukung saiki. Transrewrt kasedhiya kanggo Windows, Linux, lan Docker.

<br/>

Sawise aplikasi diwiwiti, mangga deleng **[Pandhuan Panganggo](USER-GUIDE.jv.md)** kanggo sinau carane ngeser, nulis maneh, lan ngowahi teks, ngatur prompt, lan ngatur model.

<br/><br/>

<a id="installation"></a>

## Pemasangan

<a id="windows-electron"></a>

### Windows (Electron)

- Undhuh installer paling anyar saka [Rilis](https://github.com/wsj-br/transrewrt/releases).
- Jalanke file `.exe` lan tindakake pandhuan instalasi.
- Jalankake pisanan: bukak aplikasi saka menu Start utawa shortcut ing desktop.

<br/>

> ℹ️ **CATETAN**<br/>
> Windows bisa uga nuduhake salah siji peringatan keamanan iki (normal kanggo aplikasi sing ora ditandatangani/indepen):
>   - **User Account Control (UAC)**: "Apa sampeyan ngidini aplikasi saka penerbit sing ora dingerteni ngganti piranti sampeyan?" → Klik **Ya**.
>   - **Microsoft Defender SmartScreen**: "Windows melindungi PC sampeyan" → Klik **Info liyane** → **Tetep dijalanke**.
>
> Iki kedaden amarga aplikasi ora ditandatangani dening Microsoft utawa penerbit utama—mripat aman yen diundhuh saka rilis resmi GitHub kita
>  (verifikasi checksum SHA256 di ngisor iki).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- Unduh berkas `.AppImage` sing cocog (`x64` utawa `arm64`) saka [Rilis](https://github.com/wsj-br/transrewrt/releases).
- Jalankan: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` ing x86_64/amd64, utawa gunakake jeneng berkas `...-arm64.AppImage` ing ARM64.
- Katergantungan tambahan (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Delengen [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kanggo informasi liyane.

<br/>

<a id="docker"></a>

### Docker

- Tarik: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Atur sahiji kunci provider liwat lingkungan (contone `OPENROUTER_API_KEY` kanggo OpenRouter). Leluri variabel nganggo `-e` utawa `docker compose` / `.env` supaya rahasia ora dimasukkan ing gambar.
- Kunci provider **ora** dimasukkan ing UI web; server maca saka lingkungan.

Conto - volume kanthi jeneng kanggo persistensi (kunci OpenRouter liwat env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

utawa yen sampeyan milih nggunakake Docker Compose, gunakna:

```
# unduh berkas compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# sunting berkas kanggo nambah API_KEYS lan sesuaikan zona wektu (TZ)
vi transrewrt.yml
# miwiti wadah
docker compose -f transrewrt.yml up -d

Delengen [Konfigurasi](#configuration-and-environment) kanggo kabeh variabel lingkungan, kaya `PORT`, `CONFIG_PATH`, `TZ`, lan kunci LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>

### Ngatur Zona Waktu

Tanggal lan wektu antarmuka panganggo aplikasi ngikutke **browser** lan zona wektune. Kanggo prilakune **server-sisi** (logging lan liya-liyane), wadah nggunakake variabel lingkungan `TZ`. Sacara padhet, `TZ=Europe/London`.

Kanggo nggunakake zona wektu liya, atur `TZ` ing berkas Compose, contone:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Utawa lewati nalika mlayokke wadah (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Ing akeh host Linux, sampeyan bisa nyalin jeneng zona wektu sistem nganggo:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Dhaftar jeneng zona wektu sing sah ana ing [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Entuk Kunci API OpenRouter

Transrewrt ndhukung sawetara panyedhiya AI. [OpenRouter](https://openrouter.ai) minangka pilihan sing populer amarga nggabungake akeh model ing siji kunci lan nyedhiyakake model gratis.

1. Daftar utawa mlebu ing [openrouter.ai](https://openrouter.ai).
2. Buka kaca [Keys](https://openrouter.ai/keys) lan gawe kunci anyar (kasih jeneng, lan opsional atur watesan kredit). Sampeyan bisa nggunakake model gratis tanpa nambah kredit.
3. **Desktop (Electron):** tempel kunci ing **Settings → API**. **Docker:** atur variabel lingkungan (env vars) kaya `OPENROUTER_API_KEY` (deleng [Quick start](#quick-start)).

Aja nggunakake model **Body Builder** saka OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) kanggo nerjemah, nulis maneh, utawa ngowahi: model iki mung maringi muatan JSON permintaan, dudu teks rampung kanggo tugas-tugas kasebut. Deleng [Settings → Models](USER-GUIDE.jv.md#models) ing Pandhuan Pangguna.

Sampeyan uga bisa nggunakake provider liyane (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) utawa njalankan model lokal kanthi [Ollama](https://ollama.com). Delengen [Konfigurasi](#configuration-and-environment) kanggo dhaftar lengkap provider sing didhukung lan variabel lingkungan.

> ⚠️ **PERINGATAN**<br/>
> Yen sampeyan nggunakake Ollama saka piranti, wadah, utawa layanan liyane, elinga ngonfigurasi Ollama supaya ngidini sambungan eksternal (ora mung localhost).

Kanggo watesan, BYOK, lan liya-liyane, deleng [otentikasi OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Konfigurasi lan lingkungan

**Lokasi berkas konfigurasi**

| Panggonan         | Lokasi Konfigurasi                                   |
| ----------------- | ---------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                              |
| Electron (Linux)   | `~/.config/transrewrt/`                              |
| Web / Docker       | `/app/data/config.json` (nggunakake volume kanggo nyimpen) |

<br/>

**Variabel lingkungan** (web/Docker mung; Electron migunakake file konfigurasi lokal)

| Variabel         | Gawan                     | Katerangan |
| ---------------- | ------------------------- | ---------- |
| `PORT`           | `5000`                    | Port pawala saka server |
| `CONFIG_PATH`    | `/app/data/config.json`   | Dalan menyang berkas konfigurasi |
| `TZ`             | `Europe/London`           | Zona wektu IANA kanggo wektu sisih server (log, lsp.); UI isih nututi browser. Deleng [Docker → zona wektu](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(kosong)*             | Kunci API OpenRouter |
| `OPENAI_API_KEY`     | *(kosong)*             | Kunci API OpenAI |
| `CEREBRAS_API_KEY`   | *(kosong)*             | Kunci API Cerebras |
| `ANTHROPIC_API_KEY`  | *(kosong)*             | Kunci API Anthropic |
| `GOOGLE_API_KEY`     | *(kosong)*             | Kunci API Google Gemini |
| `DEEPSEEK_API_KEY`   | *(kosong)*             | Kunci API DeepSeek |
| `GROQ_API_KEY`       | *(kosong)*             | Kunci API Groq |
| `MISTRAL_API_KEY`    | *(kosong)*             | Kunci API Mistral |
| `OLLAMA_URL`     | *(kosong)*               | URL dhasar Ollama (contone `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(kosong)*             | Kunci API xAI |

Atur mung provider sing digunakake. ID modhèl wis di-ngaran-ruang (`openrouter/...`, `openai/...`, `cerebras/...`, `ollama/...`, lsp).

**Tampilan biaya:** OpenRouter maringi biaya tagihan nyata yen bisa. Provider liya nggunakake biaya **perkiraan** saka regane modhèl umum OpenRouter menawa ana kunci OpenRouter; tanpa kuwi, biaya non-OpenRouter bisa ditampilake minangka `0`. Perkiraan ora kalebu tagihan.

<br/>

**Data lan persistensi:** Kanggo Docker, pasang volume ing `/app/data` supaya `config.json` lan database SQLite tetep urip sawise wadah diuripake maneh. Tanpa volume, kabeh data ilang nalika wadah mandheg.

**Pangembang:** Sawise narik owah-owahan sing nggantikake konfigurasi kunci-tunggal lawas, atur ulang utawa gabungke `data/config.json` karo bentuk standar anyar saka `src/config-defaults/config_default.json` yen berkas lokal isih nggunakake lapangan sing wis dihapus (`api_key`, `api_url`, opsi proxy).

<br/>

**Otentikasi web:**

- Admin standar: `admin` / `transrewrt26`.
- Atur pangguna ing **Setelan → Pangguna**.

- Ngganti tembung sandhi: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (saka sumber: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **PERINGATAN**<br/>
> Ganti tembung sandhi admin asli kanthi cepet ing saben host sing bisa diakses liwat jaringan.

<br/>

Setelan penting (aksara, model, basa, lsp.) bisa diakses liwat Setelan aplikasi.

<br/><br/>

<a id="development-and-architecture"></a>

## Pangembangan lan arsitektur

- **Pangembangan:** Ngatur, nggawe, nguji, lan nyebarke (Electron, Web, Docker) - delengen **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arsitektur lan gambaran sistem:** Struktur folder, tumpukan teknologi, keputusan desain - delengen **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## Nglaporke masalah

Bukak masalah ana [GitHub](https://github.com/wsj-br/transrewrt/issues). Sertakake platform panjenengan (Windows / Linux / Docker) lan versi aplikasi (katon ana dialog Babagan utawa ana kaca Rilis).

<br/><br/>

<a id="disclaimer"></a>

## Pringatan

Jeneng lan ikon produk duweke pemiliké dhéwé lan digunakaké mung kanggo tujuan identifikasi. Piranti lunak iki ora duwé hubungan utawa didhukung déning salah siji merek sing disebutaké.

<br/><br/>

<a id="license"></a>

## Lirisèn

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Lirisèn Apache 2.0](LICENSE)