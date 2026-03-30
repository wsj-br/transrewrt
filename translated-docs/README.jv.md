---
translation_last_updated: '2026-03-30T00:46:14.109Z'
source_file_mtime: '2026-03-29T23:51:36.506Z'
source_file_hash: fa17b974cbf42a93
translation_language: jv
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Banner Transrewrt"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Vèrsi"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Lisensi: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Piranti teks dibantu AI: terjemahna antar basa, tulis ulang kanthi gaya sing beda, lan transformasi kanthi prompt custom — nggunakake panyedhiya AI akeh (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, lan lokal Ollama). Mligi dadi aplikasi desktop (Electron) utawa aplikasi web sing di-host dhewe (Docker).

- **Terjemahna** — antar puluhan basa, kanthi deteksi sumber otomatis
- **Tulis Ulang** — ndandani Tata Basa, ningkatake kejelasan, formal/informal, cekakke, ambakke, teknis
- **Transformasi** — prompt AI custom; gawe lan atur prompt, basa target opsional saben prompt
- **Riwayat** — riwayat eksekusi lengkap karo teks input/output, filter, lan ekspor
- **Model & biaya** — pilih model saka panyedhiya sing dikonfigurasi; dasbor biaya lan panggunaan karo log, ringkasan miturut model/operasi/dina
- **UI** — antarmuka multilingual (30+ basa, dukungan RTL), font, ...
- **Mode web** — dukungan multi-pangguna karo peran admin
- **Desktop** — aplikasi Electron kanggo Windows lan Linux
- **Di-host dhewe** — image Docker kanggo amd64 & arm64 (siap Raspberry Pi)

Sawise dipasang, delok **[Panduan Panganggo](USER-GUIDE.jv.md)** kanggo panduan lengkap kabeh fitur.

<small>**Basa ing basa liya:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Catetan babagan terjemahan UI lan dokumentasi:** Kabeh basa antarmuka kajaba Inggris (UK) asli
> diterjemahake nggunakake model AI; basa bisa ora pas utawa ngandhut kesalahan.

</small>

<br/>

<a id="screenshots"></a>
## Tangkepan layar

**Pilih basa**

![Language selector](../images/screenshots/jv/language-selector.png)

**Terjemahna**

![Translate](../images/screenshots/jv/translate.png)

**Transformasi - editor prompt**

![Transform - prompt editor](../images/screenshots/jv/transform-prompt-edit.png)

**Dasbor**

![Dashboard summary — usage](../images/screenshots/jv/dashboard-summary.png)

**Riwayat**

![History](../images/screenshots/jv/history.png)

**Setelan - pilihan model**

![Settings - model selection](../images/screenshots/jv/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Daftar Isi

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Miwiti cepet](#quick-start)
- [Instalasi](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Ngonfigurasi zona wektu](#configuring-the-timezone)
- [Njaluk kunci API OpenRouter](#getting-an-openrouter-api-key)
- [Konfigurasi lan lingkungan](#configuration-and-environment)
- [Pengembangan lan arsitektur](#development-and-architecture)
- [Nglaporake masalah](#reporting-issues)
- [Penafian](#disclaimer)
- [Lisensi](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Miwiti cepet

**Docker (disarankan kanggo dihost dhewe)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Ganti `sk-or-your-key` karo [kunci API OpenRouter](https://openrouter.ai/keys)) (atau setel kunci panyedhiya liya; delok [Konfigurasi](#configuration-and-environment)). Buka [http://localhost:5000](http://localhost:5000) lan owahi sandi admin standar sak durunge ngekspos layanan.

<br/>

> ℹ️ **CATETAN**<br/>
> Ing Docker, kredensial LLM disetel kanthi variabel lingkungan kaya `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (ora ing UI web). Ing desktop (Electron) sampeyan konfigurasi kunci ing **Setelan → API**.

<br/>

**Windows**

Unduh `Transrewrt Setup x.y.z.exe` paling anyar saka [Rilis](https://github.com/wsj-br/transrewrt/releases), jalankan installer, banjur start saka menu Start utawa shortcut desktop. Lebokno kunci API sampeyan ing **Setelan → API**. Sampeyan kudu konfigurasi paling ora siji panyedhiya, OpenRouter umum kanggo model gratis.

<br/>

**Linux**

Unduh `.AppImage` kanggo CPU sampeyan saka [Rilis](https://github.com/wsj-br/transrewrt/releases) (`x64` kanggo PC umum, `arm64` kanggo piranti ARM akeh, kalebu Raspberry Pi 4+), banjur:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Lebokno kunci API sampeyan ing **Setelan → API**. Sampeyan kudu konfigurasi paling ora siji panyedhiya, OpenRouter umum kanggo model gratis.

Ing Debian/Ubuntu sampeyan bisa butuh instal dependensi tambahan dhisik:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Delok [Instalasi → Linux](#linux-electron) kanggo rincian.

<br/>

> ℹ️ **CATETAN**<br/>
> macOS saiki durung didhukung. Transrewrt tersedia kanggo Windows, Linux, lan Docker.

<br/>

Sak wise app mbukak, delok **[Pandhu Panganggo](USER-GUIDE.jv.md)** kanggo sinau cara ngelemahake, nulis ulang, lan transformasi teks, ngatur prompt, lan konfigurasi model.

<br/><br/>

<a id="installation"></a>
## Instalasi

<a id="windows-electron"></a>
### Windows (Electron)

- Unduh installer paling anyar saka [Rilis](https://github.com/wsj-br/transrewrt/releases).
- Jalankan `.exe` lan ikuti installer.
- Eksekusi pisanan: start app saka menu Start utawa shortcut desktop.

<br/>

> ℹ️ **CATETAN**<br/>
> Windows bisa nampilkan siji saka peringatan keamanan iki (normal kanggo app ora ditandatangani/indie):
>   - **User Account Control (UAC)**: "Apa sampeyan pengin ngidini app saka penerbit sing ora dikenal ngganti setting ing perangkat sampeyan?" → Klik **Ya**.
>   - **Microsoft Defender SmartScreen**: "Windows nglindungi PC sampeyan" → Klik **Info liyane** → **Jalankan**.
>
> Iki kedade amarga app ora ditandatangani dening Microsoft utawa penerbit gedhe—aman menawa diundh saka rilis GitHub resmi kita
>  (verifikasi checksum SHA256 ngisor iki).

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Unduh `.AppImage` sing cocog (`x64` utawa `arm64`) saka [Rilis](https://github.com/wsj-br/transrewrt/releases).
- Jalanke: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` ing x86_64/amd64, utawa gunakake jeneng file `...-arm64.AppImage` ing ARM64.
- Katergantungan tambahan (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Deleng [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) kanggo informasi liyane.

<br/>

<a id="docker"></a>
### Docker

- Tarik: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Atur paling ora siji kunci panyedhiya liwat lingkungan (contone `OPENROUTER_API_KEY` kanggo OpenRouter). Lulus variabel karo `-e` utawa `docker compose` / `.env` supaya rahasia ora dikebak dadi gambar.
- Kunci panyedhiya **ora** dimasukkan ing antarmuka web; server maca saka lingkungan.

Conto - volume jeneng kanggo persistensi (kunci OpenRouter liwat env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

utawa yen sampeyan luwih seneng nggunakake Docker Compose, gunakake:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Deleng [Konfigurasi](#configuration-and-environment) kanggo kabeh variabel lingkungan, kaya `PORT`, `CONFIG_PATH`, `TZ`, lan kunci LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>
### Ngatur zona wektu

Tanggal lan wektu antarmuka panganggo aplikasi nututi **browser** lan zona wektu. Kanggo tumindak **sisi server** (logging lan liya-liyane), wadah nggunakake variabel lingkungan `TZ`. Asline yaiku `TZ=Europe/London`.

Kanggo nggunakake zona wektu liya, atur `TZ` ing file Compose sampeyan, contone:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Utawa lewati nalika nglakokake wadah (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Ing akeh host Linux sampeyan bisa nyalin jeneng zona wektu sistem karo:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Daptar jeneng zona wektu sing sah dipertahankan ing [basis data tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Entuk kunci API OpenRouter

Transrewrt ndhukung akeh panyedhiya AI. [OpenRouter](https://openrouter.ai) pilihan populer amarga nggabungake akeh model ing siji kunci lan nawakake model gratis.

1. Daftar utawa mlebu ing [openrouter.ai](https://openrouter.ai).
2. Buka kaca [Kunci](https://openrouter.ai/keys) lan gawe kunci anyar (jenengi, lan opsional atur watesan kredit). Sampeyan bisa nggunakake model gratis tanpa nambah kredit.
3. **Desktop (Electron):** tempel kunci ing **Setelan → API**. **Docker:** atur variabel lingkungan kaya `OPENROUTER_API_KEY` (deleng [Mulai Cepet](#quick-start)).

Aja nggunakake model **Body Builder** OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) kanggo terjemahna, tulis ulang, utawa transformasi: iku maringi muatan JSON, ora teks rampung kanggo tugas kasebut. Deleng [Setelan → Model](USER-GUIDE.jv.md#models) ing Pandhuan Panganggo.

Sampeyan uga bisa nggunakake panyedhiya liya (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) utawa mlakuake model lokal karo [Ollama](https://ollama.com). Deleng [Konfigurasi](#configuration-and-environment) kanggo daptar lengkap panyedhiya sing didhukung lan variabel lingkungan.

> ⚠️ **PERINGATAN**<br/>
> Yen sampeyan nggunakake Ollama saka piranti, wadah, utawa layanan liya, eling konfigurasi Ollama kanggo ngidini sambungan eksternal (ora mung localhost).

Kanggo watesan, BYOK, lan liya-liyane, deleng [otentikasi OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfigurasi lan lingkungan

**Lokasi file konfigurasi**

| Penyebaran           | Lokasi konfigurasi                                 |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gunakake volume kanggo nyimpen) |

<br/>

**Variabel lingkungan** (khusus web/Docker; Electron nggunakake file konfigurasi lokal)

| Variabel             | Asali                   | Katerangan |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Port pendengar server |
| `CONFIG_PATH`    | `/app/data/config.json` | Path menyang file konfigurasi |
| `TZ`             | `Europe/London`         | Zona wektu IANA kanggo wektu sisi server (logging, lsp.); UI isih nututi browser. Deleng [Docker → zona wektu](#docker-timezone) |
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

Konfigurasilah mung penyedia sing digunakake. ID model duwe namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, lsp).

**Tampilan biaya:** OpenRouter mbalikake biaya sing dibayar sacara tepat nalika cocog. Panyedhiya liyane nggunakake **perkiraan** biaya saka rega model umum OpenRouter nalika ana kunci OpenRouter; tanpa iku, biaya non-OpenRouter bisa uga nuduhake `0`. Perkiraan ora dianggep invoice.

<br/>

**Data lan persistensi:** Kanggo Docker, pasang volume ing `/app/data` supaya `config.json` lan database SQLite tetep ana sawise restart wadah. Tanpa volume, kabeh data ilang nalika wadah mandheg.

**Pangembang:** Sawise narik owah-owahan sing nggantikake konfigurasi kunci tunggal lawas, atur ulang utawa gabungke `data/config.json` karo bentuk standar anyar saka `src/config-defaults/config_default.json` yen file lokal isih nggunakake bidang sing dibusak (`api_key`, `api_url`, opsi proxy).

<br/>

**Otentikasi web:**

- Admin asali: `admin` / `transrewrt26`.
- Atur pangguna ing **Setelan → Pangguna**.
- Atur ulang sandhi: `docker exec <wadah> reset-web-password '<jeneng pangguna>' '<sandhi anyar>'`
  (saka sumber: `pnpm run reset-web-password -- <jeneng pangguna> <sandhi anyar>`)

<br/>

> ⚠️ **PERINGATAN**<br/>
> Ganti sandhi admin asali sacara langsung ing saben host sing bisa diakses jaringan.

<br/>

Setelan utama (font, model, basa, lsp.) kasedhiya ing Setelan aplikasi.

<br/><br/>

<a id="development-and-architecture"></a>
## Pangembangan lan arsitektur

- **Pangembangan:** Ngatur, mbangun, nguji, lan nyebarake (Electron, Web, Docker) - deleng **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
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
## Linsènsi

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
