---
translation_last_updated: '2026-03-31T22:57:24.407Z'
source_file_mtime: '2026-03-31T22:20:13.182Z'
source_file_hash: bf6416a9ca259a19
translation_language: jv
source_file_path: README.md
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tabel Isi**

- [Tangkapan Layar](#screenshots)
- [Tabel Isi](#table-of-contents)
- [Mulai Cepat](#quick-start)
- [Instalasi](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Ngonfigurasi zona wektu](#configuring-the-timezone)
- [Entuk kunci API OpenRouter](#getting-an-openrouter-api-key)
- [Konfigurasi lan lingkungan](#configuration-and-environment)
- [Pangembangan lan arsitektur](#development-and-architecture)
- [Laporan masalah](#reporting-issues)
- [Penafian](#disclaimer)
- [Lisensi](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

**Macca ing basa liya:**
[Inggris (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [Inggris (AS)](README.en-US.md) · [Filipina](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)

> **Catetan babagan terjemahan UI lan dokumentasi:** Kabeh basa antarmuka kajaba Inggris (UK) asli
> diterjemahake nggunakake model AI; basa bisa ora pas utawa ngandhut kesalahan.

## Tangkapan Layar

**Pilih basa**

Pemilih basa

**Terjemahna**

Terjemahna

**Transformasi - editor prompt**

Transformasi - éditor prompt

**Dasbor**

Ringkesan dasbor — panggunaan

**Riwayat**

Riwayat

**Setelan - pilihan model**

Setelan - pilihan model

## Tabel Isi

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

## Mulai Cepat

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

> ℹ️ **CATETAN**  
>
> Ing Docker, kredensial LLM diatur nganggo variabel lingkungan kaya `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (ora ing UI web). Ing desktop (Electron) sampeyan ngonfigurasi kunci ing **Setelan → API**.

**Windows**

Unduh `Transrewrt Setup x.y.z.exe` paling anyar saka [Rilis](https://github.com/wsj-br/transrewrt/releases), jalankan installer, banjur start saka menu Start utawa shortcut desktop. Lebokno kunci API sampeyan ing **Setelan → API**. Sampeyan kudu konfigurasi paling ora siji panyedhiya, OpenRouter umum kanggo model gratis.

**Linux**

Unduh `.AppImage` kanggo CPU sampeyan saka [Rilis](https://github.com/wsj-br/transrewrt/releases) (`x64` kanggo PC umum, `arm64` kanggo piranti ARM akeh, kalebu Raspberry Pi 4+), banjur:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Lebokno kunci API sampeyan ing **Setelan → API**. Sampeyan kudu konfigurasi paling ora siji panyedhiya, OpenRouter umum kanggo model gratis.

**Pesen konsol:** Build Linux sing dikemas (`x64` lan `arm64` AppImages) ngeyel peringatan deprekasi Node ing terminal (kayata modul bawaan `punycode`). Yen Chromium munculake kesalahan GPU / EGL kaya “GLES3 ora didhukung” nanging aplikasi tetep mlaku, sampeyan bisa mungkem kanthi mateni akselerasi hardware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Iku lumaku uga ing amd64; ganti jeneng file supaya cocog karo unduhan sampeyan. Deleng [Instalasi → Linux (Electron)](#linux-electron) kanggo rincian luwih lengkap.

Ing Debian/Ubuntu sampeyan bisa uga butuh pustaka **runtime** tambahan sing dikarepake Chromium (asring wis ana ing desktop lengkap). Gunakna **`libnotify4`** kanggo notifikasi desktop—**ora** `libnotify-dev` (iku kanggo mbangun software, ora kanggo ngurusi AppImage sing dikemas):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

Gambar minimal utawa kustom isih bisa gagal amarga `.so` ilang; instal paket sing dijenengi ing kesalahan (ekstra umum: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Sawetara lingkungan butuh FUSE kanggo ngurusi AppImages (contone `libfuse2` ing Ubuntu 22.04+), utawa gunakna `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

Deleng [Instalasi → Linux](#linux-electron) kanggo ringkesan sing padha.

> ℹ️ **CATETAN**  
>
> macOS saiki durung didhukung. Transrewrt kasedhiya kanggo Windows, Linux, lan Docker.

Sak wise app mbukak, delok **[Pandhu Panganggo](USER-GUIDE.jv.md)** kanggo sinau cara ngelemahake, nulis ulang, lan transformasi teks, ngatur prompt, lan konfigurasi model.

## Instalasi

### Windows (Electron)

- Unduh installer paling anyar saka [Rilis](https://github.com/wsj-br/transrewrt/releases).
- Jalankan `.exe` lan ikuti installer.
- Eksekusi pisanan: start app saka menu Start utawa shortcut desktop.

> ℹ️ **CATETAN**  
>
> Windows bisa uga nuduhake siji saka peringatan keamanan iki (normal kanggo aplikasi sing ora ditandatangani/independen):
>
> - **User Account Control (UAC)**: "Apa sampeyan arep ngidini aplikasi iki saka penerbit sing ora dingerteni kanggo ngganti piranti sampeyan?" → Klik **Ya**.
> - **Microsoft Defender SmartScreen**: "Windows nglindhungi PC sampeyan" → Klik **Info liyane** → **Jalankan tetep**.
>
> Iki kedadeyan amarga aplikasi ora ditandatangani déning Microsoft utawa penerbit utama—aman yen diunduh saka rilis GitHub resmi kita
>  (verifikasi checksum SHA256 ing ngisor iki).

### Linux (Electron)

- Undhuh `.AppImage` sing cocog (`x64` utawa `arm64`) saka [Rilis](https://github.com/wsj-br/transrewrt/releases).
- Jalanke: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` ing x86_64/amd64, utawa gunakake jeneng berkas `...-arm64.AppImage` ing ARM64.
- **Pustaka runtime Debian/Ubuntu** (Electron/Chromium; padha karo [Mulai Cepet → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — gunakake **`libnotify4`**, dudu `libnotify-dev`. Ing sistem minimal, instal `.so` sing ilang sing dilaporake ing terminal; add-on kaya `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2` asring dibutuhake. AppImage bisa uga mbutuhake `libfuse2` (Ubuntu 22.04+) utawa `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`.
- **Pesen GPU:** Chromium bisa uga nglacak kesalahan inisialisasi GPU utawa EGL ing sawetara sistem (utamane ARM); aplikasi isih bisa mlaku kanthi normal. Kanggo ngindhari pesen kasebut, jalanke kanthi akselerasi hardware mati: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (utawa jeneng berkas `arm64` sampeyan).

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

## Entuk kunci API OpenRouter

Transrewrt ndhukung akeh panyedhiya AI. [OpenRouter](https://openrouter.ai) pilihan populer amarga nggabungake akeh model ing siji kunci lan nawakake model gratis.

1. Daftar utawa mlebu ing [openrouter.ai](https://openrouter.ai).
2. Buka kaca [Kunci](https://openrouter.ai/keys) lan gawe kunci anyar (jenengi, lan opsional atur watesan kredit). Sampeyan bisa nggunakake model gratis tanpa nambah kredit.
3. **Desktop (Electron):** tempel kunci ing **Setelan → API**. **Docker:** atur variabel lingkungan kaya `OPENROUTER_API_KEY` (deleng [Mulai Cepet](#quick-start)).

Aja nggunakake model **Body Builder** OpenRouter (`[openrouter/bodybuilder](https://openrouter.ai/openrouter/bodybuilder)`) kanggo terjemahna, tulis ulang, utawa transformasi: iku maringi muatan JSON panjaluk, dudu teks rampung kanggo tugas kasebut. Deleng [Setelan → Model](USER-GUIDE.jv.md#models) ing Pandhuan Panganggo.

Sampeyan uga bisa nggunakake panyedhiya liya (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) utawa mlakuake model lokal karo [Ollama](https://ollama.com). Deleng [Konfigurasi](#configuration-and-environment) kanggo daptar lengkap panyedhiya sing didhukung lan variabel lingkungan.

> ⚠️ **PERINGATAN**  
>
> Yen sampeyan nggunakake Ollama saka piranti, wadah, utawa layanan liyane, elinga kanggo ngonfigurasi Ollama supaya ngidini sambungan eksternal (dudu mung localhost).

Kanggo watesan, BYOK, lan liya-liyane, deleng [otentikasi OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

## Konfigurasi lan lingkungan

**Lokasi file konfigurasi**

| Penyebaran           | Lokasi konfigurasi                                 |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (gunakake volume kanggo nyimpen) |

**Variabel lingkungan** (khusus web/Docker; Electron nggunakake file konfigurasi lokal)

| Variabel             | Asali                   | Katerangan                                                                                                                 |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `PORT`               | `5000`                  | Port pendengar server                                                                                                       |
| `CONFIG_PATH`        | `/app/data/config.json` | Path menyang berkas konfigurasi                                                                                             |
| `TZ`                 | `Europe/London`         | Zona wektu IANA kanggo wektu sisih server (logging, lsp.); UI isih nututi browser. Deleng [Docker → zona wektu](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(kosong)*              | Kunci API OpenRouter                                                                                                        |
| `OPENAI_API_KEY`     | *(kosong)*              | Kunci API OpenAI                                                                                                            |
| `CEREBRAS_API_KEY`   | *(kosong)*              | Kunci API Cerebras                                                                                                          |
| `ANTHROPIC_API_KEY`  | *(kosong)*              | Kunci API Anthropic                                                                                                         |
| `GOOGLE_API_KEY`     | *(kosong)*              | Kunci API Google Gemini                                                                                                     |
| `DEEPSEEK_API_KEY`   | *(kosong)*              | Kunci API DeepSeek                                                                                                          |
| `GROQ_API_KEY`       | *(kosong)*              | Kunci API Groq                                                                                                              |
| `MISTRAL_API_KEY`    | *(kosong)*              | Kunci API Mistral                                                                                                           |
| `OLLAMA_URL`         | *(kosong)*              | URL dhasar Ollama (contone `http://host.docker.internal:11434`)                                                             |
| `XAI_API_KEY`        | *(kosong)*              | Kunci API xAI                                                                                                               |

Konfigurasilah mung penyedia sing digunakake. ID model duwe namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, lsp).

**Tampilan biaya:** OpenRouter mbalikake biaya sing dibayar sacara tepat nalika cocog. Panyedhiya liyane nggunakake **perkiraan** biaya saka rega model umum OpenRouter nalika ana kunci OpenRouter; tanpa iku, biaya non-OpenRouter bisa uga nuduhake `0`. Perkiraan ora dianggep invoice.

**Data lan persistensi:** Kanggo Docker, pasang volume ing `/app/data` supaya `config.json` lan database SQLite tetep ana sawise restart wadah. Tanpa volume, kabeh data ilang nalika wadah mandheg.

**Pangembang:** Sawise narik owah-owahan sing nggantikake konfigurasi kunci tunggal lawas, atur ulang utawa gabungke `data/config.json` karo bentuk standar anyar saka `src/config-defaults/config_default.json` yen file lokal isih nggunakake bidang sing dibusak (`api_key`, `api_url`, opsi proxy).

**Otentikasi web:**

- Admin asali: `admin` / `transrewrt26`.
- Atur pangguna ing **Setelan → Pangguna**.
- Atur ulang sandhi: `docker exec <wadah> reset-web-password '<jeneng pangguna>' '<sandhi anyar>'`
  (saka sumber: `pnpm run reset-web-password -- <jeneng pangguna> <sandhi anyar>`)

> ⚠️ **PERINGATAN**  
>
> Ganti sandi admin baku langsung ing saben host sing bisa diakses liwat jaringan.

Setelan utama (font, model, basa, lsp.) kasedhiya ing Setelan aplikasi.

## Pangembangan lan arsitektur

- **Pangembangan:** Ngatur, mbangun, nguji, lan nyebarake (Electron, Web, Docker) - deleng **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arsitektur lan gambaran sistem:** Struktur folder, tumpukan teknologi, keputusan desain - deleng **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

## Nglaporake masalah

Bukak masalah ing [GitHub](https://github.com/wsj-br/transrewrt/issues). Sertakake platform sampeyan (Windows / Linux / Docker) lan vèrsi aplikasi (katon ing dialog Babagan utawa ing kaca Rilis).

## Penyangkalan

Jeneng produk lan ikon dadi duwèké sing nduwèni lan mung digunakake kanggo tujuan identifikasi. Piranti lunak iki ora afiliasi karo utawa didukung déning merek-merek sing kasebut.

## Lisensi

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
