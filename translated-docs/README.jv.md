---
translation_last_updated: '2026-04-27T00:20:04.192Z'
source_file_mtime: '2026-04-26T18:16:51.217Z'
source_file_hash: 2884acaf6ad14700c49fb45218c88034c13c229575fe804916d7e0e9a6c8adaa
translation_language: jv
source_file_path: README.md
translation_models:
  - qwen/qwen3-235b-a22b-2507
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

Alat teks sing didhukung AI: terjemahna antar basa, tulis ulang gaya beda, lan transformasi nganggo prompt khusus - nggunakake pirang-pirang panyedhiya AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, lan Ollama lokal). Jalan minangka aplikasi desktop (Electron) utawa aplikasi web sing bisa dipasang dhewe (Docker).

- **Terjemahna** - antar puluhan basa, karo deteksi sumber otomatis
- **Tulis Ulang** - perbaiki tata basa, ningkatake kejelasan, formal/informal, cekakke, ambakke, teknis
- **Transformasi** - prompt AI khusus; gawe lan atur prompt, basa target opsional saben prompt
- **Riwayat** - riwayat eksekusi lengkap karo input/output teks, filter, lan ekspor
- **Model & biaya** - pilih model saka panyedhiya sing dikonfigurasi; dasbor biaya lan panggunaan karo log, ringkesan miturut model/operasi/dina
- **UI** - antarmuka multibasa (30+ basa, dhukungan RTL), font, ...
- **Modus Web** - dhukungan multi-panganggo karo peran admin
- **Desktop** - aplikasi Electron kanggo Windows lan Linux
- **Sing bisa dipasang dhewe** - gambar Docker kanggo amd64 & arm64 (siap Raspberry Pi)

Sawise dipasang, deleng **[Pandhuan Panganggo](USER-GUIDE.jv.md)** kanggo pandhuan lengkap kabeh fitur.

<small>**Macca ing basa liya:** </small>

<small id="lang-list">[English](../README.md) · [Português (BR)](./README.pt-BR.md) · [العربية](./README.ar.md) · [বাংলা](./README.bn.md) · [Català](./README.ca.md) · [中文 (中国大陆)](./README.zh-CN.md) · [中文 (台灣)](./README.zh-TW.md) · [Hrvatski](./README.hr.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [English](./README.en-US.md) · [Tagalog](./README.tl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [jv](./README.jv.md) · [한국어](./README.ko.md) · [Bahasa Melayu](./README.ms.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português](./README.pt.md) · [ਪੰਜਾਬੀ](./README.pa.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Kiswahili](./README.sw.md) · [Svenska](./README.sv.md) · [తెలుగు](./README.te.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

<small>

> **Cathetan bab terjemahan UI lan dokumentasi:** Kabeh basa antarmuka kajaba Basa Inggris (UK) asli 
> diterjemahna nggunakake model AI; tembung-tembung bisa ora tepat utawa ngandhut kesalahan.

</small>

<br/>

<a id="table-of-contents"></a>
## Tabel Isi

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Tangkapan Layar](#screenshots)
- [Mulai Cepet](#quick-start)
- [Entuk kunci API OpenRouter](#getting-an-openrouter-api-key)
- [Konfigurasi lan lingkungan](#configuration-and-environment)
- [Pangembangan lan arsitektur](#development-and-architecture)
- [Laporan masalah](#reporting-issues)
- [Penafian](#disclaimer)
- [Lisensi](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## Tangkapan Layar

**Pemilih basa**

![Language selector](../images/screenshots/jv/language-selector.png)

**Terjemahna**

![Translate](../images/screenshots/jv/translate.png)

**Transformasi - editor prompt**

![Transform - prompt editor](../images/screenshots/jv/transform-prompt-edit.png)

**Dasbor**

![Dashboard summary - usage](../images/screenshots/jv/dashboard-summary.png)

**Riwayat**

![History](../images/screenshots/jv/history.png)

**Setelan - pilihan model**

![Settings - model selection](../images/screenshots/jv/settings-models.png)

<br/><br/>

<a id="quick-start"></a>
## Mulai cepet

<details>
<summary><b>Docker (disaranake kanggo self-hosting)</b></summary>

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

Ganti `sk-or-your-key` nganggo [konci API OpenRouter](https://openrouter.ai/keys) (utawa atur konci panyedhiya liyane; deleng [Konfigurasi](#configuration-and-environment)). Bukak [http://localhost:5000](http://localhost:5000) lan ganti sandhi admin baku sadurunge ngekspos layanan kasebut.

Setel paling ora siji konci panyedhiya liwat lingkungan (contone `OPENROUTER_API_KEY` kanggo OpenRouter). Leluri variabel nganggo `-e` utawa `docker compose` / `.env` supaya rahasia ora dikeplok dadi gambar. Konci panyedhiya **ora** diisi ing UI web; server maca saka lingkungan.

<br/>

> ℹ️ **CATETAN**<br/>
> Ing Docker, kredensial LLM diatur nganggo variabel lingkungan kaya `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (ora ing UI web). Ing desktop (Electron) sampeyan ngonfigurasi konci ing **Setelan → API**.

<br/>

Utawa gunakake Docker Compose:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Deleng [Konfigurasi](#configuration-and-environment) kanggo kabeh variabel lingkungan, kaya `PORT`, `CONFIG_PATH`, `TZ`, lan konci LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

</details>

<br/>

<details>
<summary><b>Zona wektu server (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

Tampilan antarmuka panganggo tanggal lan wektu nututi lokal lan zona wektu **browser**. Kanggo tumindak **sisi-server** (logging lan liya-liyane), wadah nggunakake variabel lingkungan `TZ`. Baku yaiku `TZ=Europe/London`.

Kanggo nggunakake zona wektu liya, setel `TZ` ing berkas Compose sampeyan, contone:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Utawa lewati nalika njalankan wadah (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Ing akeh host Linux sampeyan bisa nyalin jeneng zona wektu sistem nganggo:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Daftar jeneng zona wektu sing sah dipertahankan ing [basis data tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- Unduh `Transrewrt Setup x.y.z.exe` paling anyar saka [Rilis](https://github.com/wsj-br/transrewrt/releases).
- Jalanake `.exe` lan tindakake instalasi.
- Jalankan pisanan: miwiti aplikasi saka menu Start utawa pintasan desktop.
- Lebokake konci API sampeyan ing **Setelan → API**. Sampeyan kudu ngonfigurasi paling ora siji panyedhiya; OpenRouter umum digunakake kanggo model gratis.

<br/>

> ℹ️ **CATETAN**<br/>
> Windows bisa nuduhake salah siji peringatan keamanan iki (normal kanggo aplikasi tanpa tanda tangan/indie):
>   - **User Account Control (UAC)**: "Apa sampeyan arep ngidini aplikasi saka penerbit ora dikenal nggawe owahan marang piranti sampeyan?" → Klik **Ya**.
>   - **Microsoft Defender SmartScreen**: "Windows nglindhungi PC sampeyan" → Klik **Info liyane** → **Jalankan tetep wae**.
>
> Iki kedadeyan amarga aplikasi ora ditandatangani dening Microsoft utawa penerbit utama—iki aman yen diunduh saka rilis GitHub resmi kita (verifikasi checksum ing kaca [Rilis](https://github.com/wsj-br/transrewrt/releases) bareng saben aset).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

Unduh `.AppImage` kanggo CPU panjenengan saka [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` kanggo PC biasa, `arm64` kanggo piranti ARM akeh, kalebu Raspberry Pi 4+), banjur:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Ing x86_64/amd64 gunakake jeneng berkas `x64`; ing ARM64 gunakake jeneng `...-arm64.AppImage`.

Lebokna API key panjenengan ing **Setelan → API**. Panjenengan kudu ngonfigurasi paling ora siji panyedhiya; OpenRouter umum digunakake kanggo model gratis.

**Pesen konsol:** Build Linux sing dikemas (`x64` lan `arm64` AppImages) ngeblokir peringatan deprekasi Node ing terminal (kayata modul `punycode` sing dibangun dhewe). Yen Chromium munculake kesalahan GPU / EGL kayata “GLES3 ora didhukung” nanging aplikasi tetep mlaku, panjenengan bisa mateni kanthi mateni akselerasi hardware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Iku ditrapake uga ing amd64; ganti jeneng berkas supaya cocog karo unduhan panjenengan.

Ing Debian/Ubuntu, panjenengan bisa butuh pustaka **runtime** tambahan sing dibutuhake dening Chromium (iki asring wis ana ing instalasi desktop lengkap). Jalanake perintah ing ngisor iki yen perlu:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

ganti `libasound2t64` karo `libasound2` kanggo `arm64`. Instalasi minimal utawa kustom isih bisa gagal karo berkas `.so` sing ilang. Pasang paket kanthi jeneng kaya pesen kesalahan (tambahan umum: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Ing sawetara lingkungan, panjenengan bisa kudu mbukak aplikasi nggunakake `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **CATETAN**<br/>
> macOS saiki durung didhukung. Transrewrt kasedhiya kanggo Windows, Linux, lan Docker.

</details>

<br/>

Sawise aplikasi mlaku, deleng **[Pandhuan Panganggo](USER-GUIDE.jv.md)** kanggo sinau carane nindakake terjemahna, nulis ulang, lan transformasi teks, ngatur prompt, lan ngonfigurasi model.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Entuk kunci API OpenRouter

Transrewrt ndhukung pirang-pirang panyedhiya AI. [OpenRouter](https://openrouter.ai) pilihan populer amarga nggabungake akeh model ing siji kunci lan nawakake model gratis.

1. Daftar utawa mlebu ing [openrouter.ai](https://openrouter.ai).
2. Buka kaca [Keys](https://openrouter.ai/keys) lan gawe kunci anyar (jenengi, lan opsional atur watesan kredit). Panjenengan bisa nggunakake model gratis tanpa nambah kredit.
3. **Desktop (Electron):** tempel kunci ing **Setelan → API**. **Docker:** atur variabel lingkungan kayata `OPENROUTER_API_KEY` (deleng [Quick start](#quick-start)).

Aja nggunakake model **Body Builder** OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) kanggo terjemahna, nulis ulang, utawa transformasi: iku maringi muatan permintaan JSON, dudu teks rampung kanggo tugas kasebut. Deleng [Setelan → Model](USER-GUIDE.jv.md#models) ing Pandhuan Panganggo.

Panjenengan uga bisa nggunakake panyedhiya liyane (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) utawa mbukak model lokal nganggo [Ollama](https://ollama.com). Deleng [Konfigurasi](#configuration-and-environment) kanggo daftar lengkap panyedhiya sing didhukung lan variabel lingkungan.

</br>

> ⚠️ **PERINGATAN**<br/>
> Yen panjenengan nggunakake Ollama saka piranti, wadah, utawa layanan liyane, elinga kanggo ngonfigurasi Ollama supaya ngidini sambungan eksternal (ora mung localhost).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfigurasi lan lingkungan

</br>

**Lokasi berkas konfigurasi**

| Penyebaran         | Lokasi konfigurasi                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gunakake volume kanggo nyimpen) |

<br/>

**Variabel lingkungan** (khusus web/Docker; Electron nggunakake berkas konfigurasi lokal)

| Variabel             | Katerangan                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | Port pendengar server (otomatis dadi `5000`)                                  |
| `CONFIG_PATH`        | Path menyang berkas konfigurasi (otomatis dadi `/app/data/config.json)                 |
| `TZ`                 | timezone for server-side time (logging, etc.) (defaults to  `Europe/London`) |
| `OPENROUTER_API_KEY` | OpenRouter API key                                                           |
| `OPENAI_API_KEY`     | OpenAI API key                                                               |
| `CEREBRAS_API_KEY`   | Cerebras API key                                                             |
| `ANTHROPIC_API_KEY`  | Anthropic API key                                                            |
| `GOOGLE_API_KEY`     | Google Gemini API key                                                        |
| `DEEPSEEK_API_KEY`   | DeepSeek API key                                                             |
| `GROQ_API_KEY`       | Groq API key                                                                 |
| `MISTRAL_API_KEY`    | Mistral API key                                                              |
| `OLLAMA_URL`         | Ollama base URL (e.g. `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | Kunci API xAI                                                                  |

Konfigurasikake mung provider sing digunakake. ID model duwe namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, lsp.).

**Tampilan biaya:** OpenRouter maringi biaya sing dibayar sacara tepat yen bisa. Provider liya nggunakake biaya **perkiraan** saka rega model umum OpenRouter yen ana kunci OpenRouter; tanpa iku, biaya non-OpenRouter bisa katon minangka `0`. Perkiraan ora kalebu invoice.

<br/>

**Data lan persistensi:** Kanggo Docker, pasang volume ing `/app/data` supaya `config.json` lan database SQLite tetep ana sawise restart wadah. Tanpa volume, kabeh data ilang nalika wadah mandheg.

<br/>

**Otentikasi web:**

- Admin baku: `admin` / `transrewrt26`.
- Atur pangguna ing **Setelan → Pangguna**.
- Reset sandhi: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **PERINGATAN**<br/>
> Ganti sandhi admin baku kanthi langsung ing host sing bisa diakses jaringan.

<br/>

Setelan utama (huruf, model, basa, lsp.) kasedhiya ing Setelan aplikasi.

<br/><br/>

<a id="development-and-architecture"></a>
## Pangembangan lan arsitektur

- **Pangembangan:** Siapake, build, tes, lan sebar (Electron, Web, Docker) - deleng **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arsitektur lan gambaran sistem:** Struktur folder, tumpukan teknologi, keputusan desain - deleng **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Pelaporan masalah

Bukak masalah ing [GitHub](https://github.com/wsj-br/transrewrt/issues). Sertakake platform sampeyan (Windows / Linux / Docker) lan vèrsi aplikasi (katon ing dialog Babagan utawa ing kaca Rilis).

<br/><br/>

<a id="disclaimer"></a>
## Penafian

Jeneng produk lan ikon dadi duwèké sing nduwèni lan mung digunakake kanggo tujuan identifikasi. Piranti lunak iki ora afiliasi karo utawa didukung déning merek-merek sing kasebut.

<br/><br/>

<a id="license"></a>
## Lisènsi

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
