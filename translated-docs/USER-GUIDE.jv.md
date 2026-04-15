---
translation_last_updated: '2026-04-15T22:29:54.526Z'
source_file_mtime: '2026-04-15T00:50:00.594Z'
source_file_hash: 3135daa3d29833b16bfbc0c51fa256454e681576435898527cc7914fbaddf5be
translation_language: jv
source_file_path: USER-GUIDE.md
translation_models:
  - deepseek/deepseek-v3.2
  - openai/gpt-4o-mini
  - qwen/qwen3-235b-a22b-2507
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Pandhuan Panganggo

<br/>

<a id="introduction"></a>
## Pambuka

Transrewrt mbantu sampeyan ngolah tèks kanthi telung cara utama:

- **Terjemahan** - ngowahi tèks saka siji basa menyang basa liya.
- **Tulis Ulang** - ngowahi gaya tèks, kayata luwih cetha, luwih cendhak, utawa luwih resmi.
- **Transformasi** - ngolah tèks nganggo instruksi AI khusus sing diarani prompt.

<br/>

Pandhuan iki nerangake carane nggunakake aplikasi sawise diinstal lan dijalanke. Kanggo langkah instalasi, deleng **[README](README.jv.md)** utama.

<br/>

> ℹ️ **CATETAN**<br/>
> Transrewrt kasedhiya minangka aplikasi desktop kanggo Windows lan Linux, lan minangka aplikasi web sing bisa dipasang dhewe. Pandhuan iki fokus marang panggunaan saben dina aplikasi kasebut. Yen ana fitur sing mung ana ing siji versi, bakal diandharake kanthi jelas.

<small>**Macca ing basa liya:** </small>

<small id="lang-list">[English](../USER-GUIDE.md) · [Português (BR)](./USER-GUIDE.pt-BR.md) · [العربية](./USER-GUIDE.ar.md) · [বাংলা](./USER-GUIDE.bn.md) · [Català](./USER-GUIDE.ca.md) · [中文 (中国大陆)](./USER-GUIDE.zh-CN.md) · [中文 (台灣)](./USER-GUIDE.zh-TW.md) · [Hrvatski](./USER-GUIDE.hr.md) · [Čeština](./USER-GUIDE.cs.md) · [Nederlands](./USER-GUIDE.nl.md) · [English](./USER-GUIDE.en-US.md) · [Tagalog](./USER-GUIDE.tl.md) · [Français](./USER-GUIDE.fr.md) · [Deutsch](./USER-GUIDE.de.md) · [Ελληνικά](./USER-GUIDE.el.md) · [हिन्दी](./USER-GUIDE.hi.md) · [Magyar](./USER-GUIDE.hu.md) · [Italiano](./USER-GUIDE.it.md) · [日本語](./USER-GUIDE.ja.md) · [jv](./USER-GUIDE.jv.md) · [한국어](./USER-GUIDE.ko.md) · [Bahasa Melayu](./USER-GUIDE.ms.md) · [فارسی](./USER-GUIDE.fa.md) · [Polski](./USER-GUIDE.pl.md) · [Português](./USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](./USER-GUIDE.pa.md) · [Română](./USER-GUIDE.ro.md) · [Русский](./USER-GUIDE.ru.md) · [Slovenčina](./USER-GUIDE.sk.md) · [Español](./USER-GUIDE.es.md) · [Kiswahili](./USER-GUIDE.sw.md) · [Svenska](./USER-GUIDE.sv.md) · [తెలుగు](./USER-GUIDE.te.md) · [ไทย](./USER-GUIDE.th.md) · [Türkçe](./USER-GUIDE.tr.md) · [Українська](./USER-GUIDE.uk.md) · [Tiếng Việt](./USER-GUIDE.vi.md)</small>

<small>

> **Cathetan bab terjemahan UI lan dokumentasi:** Kabeh basa antarmuka kajaba Basa Inggris (UK) asli 
> diterjemahna nggunakake model AI; tembung-tembung bisa ora tepat utawa ngandhut kesalahan.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tabel Isi**

- [Sadurunge miwiti](#before-you-start)
  - [Carane entuk kunci API OpenRouter gratis (aplikasi desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Mulai nggunakake](#getting-started)
- [Bagéan utama jendhela](#main-parts-of-the-window)
  - [Sidebar](#sidebar)
  - [Toolbar](#toolbar)
  - [Panel input lan output](#input-and-output-panels)
- [Terjemahna](#translate)
  - [Terjemahna tèks](#translate-text)
  - [Pilihan basa](#language-selection)
  - [Setelan terjemahan sing migunani](#helpful-translation-settings)
- [Tulis Ulang](#rewrite)
- [Transformasi](#transform)
  - [Jalankan prompt sing wis ana](#run-an-existing-prompt)
  - [Yen durung duwe prompt](#if-you-have-no-prompts-yet)
  - [Gawe prompt kanthi cepet](#create-a-prompt-quickly)
  - [Sunting prompt](#edit-a-prompt)
  - [Tes prompt sadurunge digunakake](#test-a-prompt-before-using-it)
- [Dasbor](#dashboard)
  - [Filter data](#filter-the-data)
  - [Tab dasbor](#dashboard-tabs)
  - [Ekspor data](#export-data)
  - [Busak rekaman sing disimpen kanggo model](#delete-stored-records-for-a-model)
- [Riwayat](#history)
  - [Filter data](#filter-the-data-1)
  - [Ekspor data riwayat](#export-history-data)
- [Setelan](#settings)
  - [Setelan Umum](#general-settings)
  - [Model](#models)
  - [Basa](#languages)
  - [Pelacakan Biaya](#cost-tracking)
  - [Prompt transformasi](#transform-prompts)
  - [Pangguna](#users)
  - [Konfigurasi API](#api-config)
  - [Babagan](#about)
- [Masalah umum](#common-issues)
  - [Aplikasi ora bisa menerjemah, nulis ulang, utawa ngolah tèks](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Dhaptar model kosong](#the-model-list-is-empty)
  - [Asilé alon utawa larang banget](#the-result-is-too-slow-or-too-expensive)
  - [Antarmuka nganggo basa sing salah](#the-interface-is-in-the-wrong-language)
  - [Tèks cilik banget utawa angel diwaca](#the-text-is-too-small-or-hard-to-read)
  - [Grafik dasbor kosong](#dashboard-charts-are-empty)
  - [Biaya nuduhake "ora kasedhiya" utawa katon salah](#cost-shows-not-available-or-seems-wrong)
  - [Total biaya ora cocog karo tagihan panyedhiya](#total-cost-does-not-match-my-provider-bill)
  - [Kaca Riwayat ilang saka sidebar](#the-history-page-is-missing-from-the-sidebar)
  - [Aplikasi web: dialihake menyang kaca login kanthi ora dikarepake](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Admin web: lali utawa ilang sandhi](#web-admin-forgot-or-lost-a-password)
  - [Dasbor ora nuduhake data kanggo pangguna liya (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Aku ngowahi prompt lan ilang suntingan](#i-changed-a-prompt-and-lost-the-edits)
- [Tip cepet](#quick-tips)
- [Penafian](#disclaimer)
- [Lisensi](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Sadurunge miwiti

Kanggo nggunakake Transrewrt, sampeyan kudu duwe akses menyang paling ora siji panyedhiya AI. Panyedhiya sing didhukung yaiku: [OpenRouter](https://openrouter.ai) (sing nggabungake akeh model), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, lan [Ollama](https://ollama.com) kanggo model lokal.

Sampeyan ora kudu milih model bayar kanggo miwiti. Sawise nambahake kunci API OpenRouter, aplikasi sacara otomatis ngaktifake pilihan OpenRouter **gratis** sing wis diintegrasikake. Iki ngidini sampeyan langsung miwiti menerjemah, nulis ulang, lan ngowahi tèks. Alternatif, sampeyan uga bisa entuk kunci API gratis saka Cerebras, Google, Groq, utawa Mistral AI.

Ing basa sing luwih gampang:

- **Model** yaiku mesin AI sing nindakake tugas. Model dicantumake nganggo **awalan panyedhiya** (contone `openrouter/…`, `openai/…`, `ollama/…`).
- **Kunci API** (utawa kanggo Ollama, **URL dhasar**) yaiku cara aplikasi ngakses panyedhiya kasebut.

Yen sampeyan nggunakake **aplikasi desktop**, tambahake kunci ing [**Setelan** > **Konfigurasi API**](#api-config) kanggo saben panyedhiya sing digunakake. Kanggo panggunaan mung OpenRouter, deleng [Cara entuk kunci API](#how-to-get-an-api-key-desktop-app) ing ngisor iki. Yen sampeyan ora pengin nggunakake kunci API, sampeyan bisa nginstal Ollama (saka [ollama.com](https://ollama.com)) lan nggunakake model lokal tinimbang model online, kaya `translategemma:4b`.

Yen sampeyan nggunakake **versi web**, pemilik server ngonfigurasi panyedhiya nganggo variabel lingkungan, dadi sampeyan ora bisa ngisi kunci API langsung ing aplikasi.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cara entuk kunci API OpenRouter gratis (aplikasi desktop)

Yen sampeyan nggunakake aplikasi desktop, tindakake langkah-langkah iki:

1. Bukak [OpenRouter](https://openrouter.ai) ing peramban web sampeyan.
2. Gawe akun utawa mlebu.
3. Bukak kaca [Kunci](https://openrouter.ai/keys).
4. Klik tombol kanggo nggawe kunci API anyar.
5. Beri jeneng kanggo kunci supaya bisa dikenali mengko.
6. Salin kunci API anyar kasebut.
7. Balia menyang Transrewrt lan buka **Setelan** > **Konfigurasi API**.
8. Tempel kunci kasebut menyang **kunci API OpenRouter** (ing ngisor **Setelan** > **Konfigurasi API**).
9. Klik **Tes kunci OpenRouter** kanggo mastekake yen iku bisa digunakake.

<br/><br/>

<a id="getting-started"></a>
## Miwiti

Yen iki wektu pisanan sampeyan nggunakake Transrewrt, tindakake urutan iki:

1. Bukak aplikasi.
2. Pilih **Basa antarmuka** sampeyan saka ikon globe yen perlu.
3. Yen sampeyan nggunakake **aplikasi desktop**, buka [**Setelan** > **Konfigurasi API**](#api-config), tambah kunci API kanggo paling ora siji panyedhiya (contone OpenRouter), lan klik **Tes** kanggo mastekake bisa digunakake.
4. Bukak [**Setelan** > **Model**](#models) lan tambah siji utawa luwih model menyang **Model Sing Dipilih**.
5. Bukak [**Setelan** > **Basa**](#languages) lan pilih **Basa utama** sampeyan yen pengin basa sing paling asring digunakake katon dhisik.
6. Pergi menyang **Terjemahna** lan jalanke terjemahan sederhana kanggo mastekake kabeh bisa digunakake.
7. Sawise iku bisa digunakake, cobalah **Tulis Ulang** banjur **Transformasi**.

Urutan iki penting. Iki nyegah masalah paling umum nalika nggunakake pertama kali: nyoba nglakokake tugas sadurunge aplikasi duwe sambungan API sing bisa digunakake utawa model sing dipilih.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Bagéyan utama jendhela

Aplikasi dibagi dadi telung bagéyan utama:

- **Sidebar** ing sisih kiwa.
- **Toolbar** ing sisih ndhuwur.
- **Area kerja** ing tengah.

<br/>

<a id="sidebar"></a>
### Sidebar

Gunakake sidebar kanggo pindhah-pindah ing aplikasi. Sampeyan bisa nutupi sidebar kanggo entuk ruang luwih kanthi klik ikon ing samping logo aplikasi.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/jv/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Terjemahna</strong> mbukak workspace terjemahan.</li><br/>
        <li><strong>Tulis Ulang</strong> mbukak workspace panulisan ulang.</li><br/>
        <li><strong>Transformasi</strong> mbukak workspace prompt kustom.</li><br/>
        <li><strong>Dashboard</strong> nuduhake informasi panggunaan lan biaya.</li><br/>
        <li><strong>Setelan</strong> mbukak panel setelan.</li><br/>
        <li><strong>Riwayat</strong> nuduhake riwayat panggunaan kanthi input lan output teks</li><br/>
        <li><strong>Panganggo</strong> nuduhake jeneng pangguna sing lagi mlebu (mung versi web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Toolbar

Toolbar owah sithik gumantung saka ngendi sampeyan ana ing aplikasi.

- Ing sisih kiwa, nuduhake jeneng kaca saiki.
- Ing sisih tengen, nuduhake **pemilih model** lan kontrol **Basa antarmuka**.

**Pemilih model** ngidini sampeyan milih mesin AI sing arep digunakake kanggo tugas saiki.

![Model selector](../images/screenshots/jv/model-selector.png)

Sawetara model gratis bisa uga ora tansah kasedhiya—kadhangkala offline utawa duwe watesan panggunaan. Yen iki kedadeyan, aplikasi bakal sacara otomatis mbusak model kasebut saka dhaftar sing kasedhiya. Kanggo ngontrol model sing katon, menyang [**Setelan** > **Model**](#models) lan sunting dhaftar model sampeyan. 
 Sampeyan uga bisa mbukak setelan model langsung kanthi klik ikon panyedhiya ing sisih kiwa jeneng model ing toolbar.

<br/>

Ikon **globe + kode basa** ngganti basa antarmuka aplikasi, kayata menu lan tombol. Iki **ora** ngganti basa terjemahan sing digunakake ing **Terjemahan**.

![Interface language selector](../images/screenshots/jv/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panel Input lan output

Umume area kerja nggunakake panel **Input** ing kiwa lan panel **Output** ing tengen.

Saben panel uga nuduhake:

| **Input**                                                          | **Output**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Jumlah karakter <br/>- Jumlah tembung <br/>- Jumlah paragraf   <br/> | - Suwene tugas sing ditindakake<br/>- **TPS** (token per detik)<br/>- Jumlah karakter, tembung, lan paragraf<br/>- Model sing digunakake |

Yen sampeyan penasaran babagan istilah teknis:

- **Token** tegese potongan cilik teks. Sampeyan bisa mikir minangka bagian saka tembung utawa tembung sing cendhak.
- **TPS** tegese saben detik, model ngolah pirang potongan teks kasebut.

<br/>

Sampeyan uga bisa ngawasi biaya saben operasi (yen kasedhiya) lan total biaya, kanthi ngaktifake opsi `Show cost information on the actions` ing [**Setelan** > **Setelan Umum**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Terjemahan

Gunakake **Terjemahan** nalika sampeyan pengin ngowahi teks saka siji basa menyang basa liyane.

![Translate workspace](../images/screenshots/jv/translate.png)

<br/>

<a id="translate-text"></a>
### Terjemahna teks

1. Bukak **Terjemahan**.
2. Pilih basa ing **Saka**.
3. Pilih basa ing **Menyang**.
4. Pilih model ing toolbar.
5. Ketik utawa tempel teks menyang **Input**.
6. Klik **Terjemahna**.
7. Waca asil ing **Output**.
8. Gunakake tombol salin yen sampeyan pengin nyalin asil.

<br/>

<a id="language-selection"></a>
### Pilihan basa

- **Saka** bisa dadi basa tartamtu utawa **Deteksi Basa**.
- **Menyang** yaiku basa sing dikarepake kanggo asil.

**Basa Paling Atas** sing sampeyan pilih bakal katon ing ndhuwur dhaptar. Sampeyan bisa nyetel iki ing [**Setelan** > **Basa**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Setelan terjemahan sing migunani

Ing [**Setelan** > **Setelan Umum**](#general-settings), sampeyan bisa ngganti cara terjemahan tumindak:

- **Otomatis nerjemahake nalika tempel** nglakokake terjemahan sanalika sampeyan nempel teks.
- **Otomatis nyalin asil menyang clipboard** nyalin asil kanthi otomatis sawise nglakokake kanthi sukses.
- **Terjemahan langsung (nalika ngetik)** nglakokake terjemahan nalika sampeyan ngetik.
- **Timeout (ms)** ngontrol suwene aplikasi ngenteni sadurunge nglakokake terjemahan langsung.
- **Enter** ngontrol apa sing kedadeyan nalika sampeyan mencet `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Tulis Ulang

Gunakake **Tulis Ulang** nalika sampeyan pengin ningkatake tembung tanpa ngganti makna utama.

![Rewrite workspace](../images/screenshots/jv/rewrite.png)

Iki migunani kanggo:

- mbenakake ejaan lan tata basa (**Priksa Ejaan & Tata Basa**)
- ndadekake teks luwih cetha (**Ningkatake Kejelasan**)
- sawetara reformulasi sing beda ing siji jalan (**Versi alternatif**)
- ndadekake teks luwih formal utawa luwih informal (**Formal** / **Informal**)
- mungkasi utawa mbabarake teks (**Cekakke** / **Ambakke**)
- ndadekake teks kaya luwih teknis (**Gawe Teknis**)

<br/>

> 💡 **TIP**<br/>
> Nalika panjenengan nggunakake modus "**Priksa Ejaan & Tata Basa**", sawijining saklar **Tampilkan owahan.** katon ing panel output (sabenjuré **Salin**).
> Aktifake utawa mateni kanggo nuduhake utawa ndhelikake koreksi tartamtu sing diterapake ing teks panjenengan.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Transformasi

Gunakake **Transformasi** nalika panjenengan pengin AI ngetutake set instruksi sing disesuaikan.

![Transform workspace](../images/screenshots/jv/transform.png)

Iki minangka wilayah paling fleksibel ing aplikasi. Panjenengan bisa nggunakake kanggo tugas-tugas kaya:

- nggawe ringkesan cathetan
- ngowahi teks kasar dadi email sing rapi
- nggegawa poin utama
- ngowahi teks dadi format tartamtu
- kabeh kegiatan khusus liyane karo teks input

<br/>

<a id="run-an-existing-prompt"></a>
### Jalanke prompt sing ana

1. Buka **Transformasi**.
2. Pilih prompt saka dhaptar prompt.
3. Yen katon kotak **Sasaran** basa, pilih basa yen panjenengan pengin.
4. Ketik utawa tempel teks menyang **Input**.
5. Klik **Transformasi**.
6. Maca asilé ing **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Yen panjenengan durung duwe prompt

Yen dhaptar prompt panjenengan kosong, klik **Muat conto prompt** ing workspace Transformasi. Kontrol sing padha iku tansah kasedhiya ing [**Setelan** > **Prompt Transformasi**](#transform-prompts) ing baris ekspor/impor. Kalorone nambah conto sing wis diintegrasikake supaya panjenengan bisa miwiti kanthi cepet.

<br/>

> ℹ️ **CATETAN**<br/>
> Conto prompt diwenehake ing basa Inggris. Sawise dimuat, panjenengan bisa nyunting prompt lan nggunakake **Terjemahake dhawuh** kanggo menerjemahaké menyang basa panjenengan.

<br/>

<a id="create-a-prompt-quickly"></a>
### Gawe prompt kanthi cepet

Cara paling cepet kanggo gawe prompt yaiku:

1. Klik **Prompt anyar**.
2. Klik **Gawe prompt**.
3. Jlentrehna apa sing panjenengan pengin prompt iku lakoni.
4. Pilih model.
5. Biyaraké aplikasi nggawe rancangan kanggo panjenengan.
6. Priksa rancangane lan klik **Simpen**.

![Generate prompt](../images/screenshots/jv/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Sunting prompt

Nalika panjenengan gawe utawa nyunting prompt, editor katon ing kiwa lan wilayah tes katon ing tengen.

![Transform prompt editor](../images/screenshots/jv/transform-prompt-edit.png)

Bidang utama yaiku:

- **Jeneng prompt**: jeneng sing katon ing dhaptar prompt.
- **Instruksi prompt (opsional)**: cathetan cendhak sing ditampilake menyang panganggo nalika mlakuake prompt.
- **Peran Model**: peran kabeh sing diparingake marang AI, kaya 'Panjenengan minangka asisten sing mbantu.'
- **Instruksi Model (siji saben baris)**: aturan tartamtu sing panjenengan pengin AI ngetutake.
- **Deskripsi output**: tembung cendhak sing njlentrehake asilé, kaya 'ringkesan' utawa 'tulis ulang'.
- **Suhu (0.0 → 1.0)**: carane model bakal tumindak; deleng ing ngisor iki.
- **Takon basa tujuan**: nambah pamilah basa tujuan nalika prompt dijalanke.

Yen istilah teknis **Temperatur** anyar kanggo panjenengan, pikirake kaya iki:

- Temperatur sing **luwih rendah** menehi asil sing luwih mantep lan prediktif.
- Temperatur sing **luwih dhuwur** menehi variasi lan kreativitas sing luwih akeh.

Sampeyan uga bisa nggunakake:

- **`Generate prompt`** kanggo gawe draf anyar saka katerangan sing prasaja
- **`Improve prompt`** kanggo nyempurnakake prompt sing wis ana
- **`Translate prompt`** kanggo nerjemahaké bidang prompt

<br/>

> ⚠️ **PERINGATAN**<br/>
> Klik **`Save`** sadurunge sampeyan klik **`Back to Run`**. Yen sampeyan bali tanpa nyimpen, owah-owahane bakal ilang.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Tes prompt sadurunge digunakake

Panel tes ing tengen ngidini sampeyan nyoba prompt kanthi teks conto sadurunge digunakake ing karya saben dina.

Iki migunani nalika:

- sampeyan lagi gawe prompt anyar
- sampeyan lagi mbandhingake loro vèrsi prompt
- sampeyan pengin mriksa nada, dawa, utawa format output

<br/>

> ℹ️ **CATETAN**<br/>
> Sampeyan bisa ngekspor lan ngimpor prompt sing wis disimpen ing [**Setelan** > **Prompt transformasi**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Dasbor

Gunakna **Dasbor** kanggo ndeleng sepira akeh sampeyan nggunakake aplikasi lan biayane (kanggo model berbayar).

![Dashboard summary](../images/screenshots/jv/dashboard-summary.png)

<br/>

> ℹ️ **CATETAN**<br/>
> Yen sampeyan mung nggunakake model **gratis**, jumlah **biaya** bisa nol lan ringkesan sing fokus marang biaya bisa katon kosong. Ing **Ringkesan**, **Panggunan ngliwati wektu** lan **Panggunan miturut model** isih nuduhake **jumlah panggilan** (terjemahan, tulis ulang, lan transformasi) nalika ana aktivitas ing periode sing dipilih.

<br/>

<a id="filter-the-data"></a>
### Filter data

Gunakna tombol filter ing ndhuwur kanggo ngganti wektu jangka.

![Dashboard filters](../images/screenshots/jv/dashboard-filter.png)

<br/>

> ℹ️ **CATETAN**<br/>
> Filter **Panganggo** mung katon kanggo administrator ing versi web. Pangguna biasa ora bakal ndeleng filter iki, lan ora kasedhiya ing aplikasi desktop.

<br/>

<a id="dashboard-tabs"></a>
### Tab Dasbor

- **Ringkesan** menehi gambaran umum babagan panggunaan lan biaya. Kalebu **Panggunan ngliwati wektu** (jumlah **panggilan** kumulatif sing diumpetake saben dina kanggo terjemahan, tulis ulang, lan transformasi) lan **Panggunan miturut model** (total **panggilan saben model**, kalebu transformasi).
- **Miturut Panggunaan** ngurai aktivitas miturut basa terjemahan, mode tulis ulang, lan prompt transformasi.
- **Miturut Model** nuduhake model apa wae sing digunakake lan biayane.
- **Miturut Dina** nuduhake total saben dina.
- **Kabeh Panggilan** nuduhake riwayat panggilan lengkap lan ngidini sampeyan ngekspor.

<br/>

<a id="export-data"></a>
### Ekspor data

Tabel dasbor bisa ngekspor data ing:

- **JSON**
- **CSV**
- **XLSX**

Iki migunani yen sampeyan pengin ngecek kabeh aktivitas di njaba aplikasi utawa barengen laporan.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Busak rekaman sing disimpen kanggo model

Ing **Miturut Model** utawa **Kabeh Panggilan**, sampeyan bisa mbusak rekaman sing disimpen kanggo model kanthi klik ikon "tempurung sampah".

> ⚠️ **PERINGATAN**<br/>
> Mbusek rekaman sing disimpen ora bisa dibatalake. Mung digunakake yen sampeyan yakin ora butuh riwayat kasebut maneh.

Kanggo mbusak kabeh data utawa mbusak rekaman adhedhasar umure, menyang [**Setelan** > **Pelacakan Biaya**](#cost-tracking). Ana sampeyan bakal nemokake pilihan kanggo mbusak kabeh data sing disimpen utawa mung data sing umure luwih tuwa tinimbang tanggal tartamtu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Riwayat

Klik **Riwayat** kanggo ndeleng riwayat tumindak sampeyan ing jero **Transrewrt**, kalebu input lan output saben operasi.

![History page](../images/screenshots/jv/history.png)

<br/>

<a id="filter-the-history"></a>
### Filter data

**Riwayat** nggunakake filter sing padha karo kaca **Dasbor**. Gunakake kanggo milih rentang wektu.

![Dashboard filters](../images/screenshots/jv/dashboard-filter.png)

<br/>

> ℹ️ **CATETAN**<br/>
> Filter **Panganggo** mung katon kanggo administrator ing versi web. Pangguna biasa ora bakal ndeleng filter iki, lan ora kasedhiya ing aplikasi desktop.

<br/>

<a id="export-history-data"></a>
### Ekspor data riwayat

Kaca riwayat bisa mengekspor data sing difilter ing:

- **JSON**
- **CSV**
- **XLSX**

Iki migunani yen sampeyan pengin ngecek kabeh aktivitas di njaba aplikasi utawa barengen laporan.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Setelan

Bukak **Setelan** saka sisih pinggir kanggo ngatur cara aplikasi dianggo.

Tab sing kasedhiya gumantung marang platform lan peran sampeyan:

| Tab               | Desktop | Web (admin) | Web (regular user) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | General Settings  |   ya   |     ya     |        ya         |
  | Models            |   ya   |     ya     |        ya         |
  | Languages         |   ya   |     ya     |        ya         |
  | Cost Tracking     |   ya   |     ya     |         -          |
  | Transform Prompts |   ya   |     ya     |        ya         |
  | Users             |    -    |     ya     |         -          |
  | API Config        |   ya   |     ya     |         -          |
  | About             |   ya   |     ya     |        ya         |

<br/>

> ℹ️ **CATETAN**<br/>
> Ing versi web, saben pangguna duwe konfigurasi dhewe. Setelan kaya model sing dipilih, basa, pilihan umum, lan prompt transformasi disimpen saben pangguna. Owah-owahan sing sampeyan gawe ora mangaruhi pangguna liyane.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Setelan Umum

Gunakake **Setelan Umum** kanggo ngontrol tumindak ngetik, apa rincian eksekusi disimpen kanggo **Riwayat**, lan tampilan.

**Tumindak**

- **Tumindak kanggo ENTER** milih apa `Enter` mbukak tugas utawa nambah baris anyar.
- **Otomatis nerjemahake nalika tempel** miwiti terjemahan sawise sampeyan nempel teks.
- **Otomatis nyalin asil menyang clipboard** nyalin asil sing sukses kanthi otomatis.
- **Terjemahan langsung (nalika ngetik)** nerjemahake nalika sampeyan ngetik.
- **Timeout (ms)** nyetel wektu tunggu kanggo terjemahan langsung.

**Riwayat**

- **Simpen riwayat eksekusi** ngontrol apa saben terjemahan, tulis ulang, lan transformasi nyimpen **teks input lan output** kanggo tampilan sidebar [**Riwayat**](#history). Mateni iki njaluk konfirmasi; yen sampeyan ngonfirmasi, teks riwayat sing disimpen bakal dicopot saka basis data.
- **Hapus data riwayat** ngidini sampeyan mbusak teks sing disimpen miturut umur (contone luwih lawas saka sawetara wulan, utawa **kabèh data (resiki)**) nggunakake **Busak data**. Iki mung mengaruhi teks eksekusi sing disimpen kanggo tampilan **Riwayat**; ora **ora** mbusak total biaya utawa panggunaan. Kanggo mbusak utawa nyuda data **biaya**, gunakake [**Setelan** > **Pelacakan Biaya**](#cost-tracking).

**Tampilan**

- **Tuduhna informasi rega ing tindakan** ngontrol tampilan biaya saben operasi (yen kasedhiya) lan total biaya ing panel output Terjemah, Tulis Ulang, lan Transformasi.
- **Digit pecahan biaya** ngganti cara desimal biaya ditampilake.
- **Web mung:** **tampilake margin ing sakubenge app** nambah ruang ekstra ing sakubenge antarmuka.
- **Keluarga Font** ngganti font tulisan ing panel teks.
- **Ukuran** ngganti ukuran font.

**Cadangan Konfigurasi**

- **Sertakake data panggunaan ing cadangan** - nalika diaktifake, ZIP uga ngemot riwayat eksekusi lan data panggilan API. 
- **Cadangan konfigurasi** - nggawe ZIP siji (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` ing UTC kanthi standar) kanthi `config.json`, `state.json`, kunci enkripsi opsional, pangguna, preferensi, prompt kustom, lan data panggunaan yen sampeyan milih. Sawise cadangan sukses, konfirmasi nuduhake jeneng file sing disimpen.
- **Pulihake saka cadangan** - mbukak **dialog konfirmasi dhisik**. Pilih ZIP cadangan ing jero dialog (**Telusuri** / pemilih file utawa seret lan lepas ing ngendi didhukung), banjur tinjau opsi:
  - **Pulihake data panggunaan** - ngimpor panggunaan/riwayat saka ZIP nalika dicadangkan kanthi panggunaan kalebu; tinggalake mati yen sampeyan mung pengin setelan lan prompt.
  - **Bersihake data panggunaan lawas sadurunge dipulihake** - mbusak panggunaan/riwayat sing ana ing instalasi iki sadurunge nerapake cadangan (opsional; gunakake nalika sampeyan pengin ganti resik).

Cadangan sing digawe ing versi web utawa desktop bisa dipulihake ing liyane. Nalika pulihake cadangan desktop ing versi web, data bakal dipulihake menyang pangguna administrator.

<br/>

<a id="models"></a>
### Model

Gunakake **Setelan** > **Model** kanggo milih model sing muncul ing toolbar.

![Settings Models tab](../images/screenshots/jv/settings-models.png)

Kaca iki duwe loro dhaptar:

- **Model Sing Kasedhiya** ing kiwa
- **Model Sing Dipilih** ing tengen

Kontrol sing migunani kalebu:

- **Goleki model...** kanggo nemokake model miturut jeneng
- **Panyedhiya** chips kanggo nyepetake dhaptar menyang siji mesin (OpenRouter, OpenAI, Ollama, …)
- **Gratis Wae** kanggo nuduhake model gratis wae
- **Refresh** kanggo muat ulang dhaptar
- **Bukak Kabeh** lan **Ciutna Kabeh** nalika sampeyan nyortir miturut panyedhiya

Id model kalebu prefiks panyedhiya (contone `openrouter/…` vs `openai/…`). Lencana kaya **OpenAI (OpenRouter)** vs **OpenAI (langsung)** nuduhake carane lalu lintas dialokasikan.

> ℹ️ **CATETAN**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) yaiku model router, dudu model obrolan umum: baline yaiku JSON sing nerangake badan panjalukan API OpenRouter (contone array `requests` kanthi `model` lan `messages`). Yen sampeyan nggunakake kanggo **Terjemah**, **Tulis Ulang**, utawa **Transformasi**, panel output bakal nuduhake JSON kasebut tinimbang teks rampung. Pilih model teks normal kanggo tugas kasebut. Deleng [kaca model Body Builder](https://openrouter.ai/openrouter/bodybuilder) ing OpenRouter.

Tindakan:

- Kanggo nambah model, klik **Tambah** utawa ing ngendi wae ing entri.

- Kanggo mbusak model, klik **X** ing jejere ing **Model Sing Dipilih** utawa **Dipilih** ing entri ing Model Sing Kasedhiya.

- Kanggo ngresiki daftar, klik **Batal Pilih Kabeh**. Model gratis sing dibutuhake bakal tetep ana ing daftar.

<br/>

> ℹ️ **CATETAN**<br/>
> Yen sampeyan ora pengin langsung nambah kredit menyang OpenRouter, wiwiti kanthi ngaktifake **Gratis Wae** lan milih model gratis (ora mbutuhake kartu kredit). Sampeyan uga bisa nggunakake Ollama kanggo mbukak model lokal tanpa kunci API.

<br/>

<a id="languages"></a>
### Basa

Gunakake **Setelan** > **Basa** kanggo ngatur daftar basa sing digunakake ing aplikasi.

- **Basa ndhuwur** dipasang ing ndhuwur daftar basa ing **Terjemahna** lan **Transformasi**.
- **Basa Kustom** ngidini sampeyan nambah basa sing ora ana ing daftar bawaan.

Yen sampeyan nambah basa kustom, bakal katon ing pilihan basa bebarengan karo opsi bawaan.

<br/>

<a id="cost-tracking"></a>
### Pelacakan Biaya

Gunakake **Setelan** > **Pelacakan Biaya** kanggo ngatur informasi biaya.

- **Total Biaya** nuduhake total sing lagi mlaku.
- **Salin Nilai** nyalin total menyang clipboard.
- **Reset Biaya** ngreset total sing disimpen dadi nol.
- **Sinkronake karo panggunaan kunci API** nyetel total supaya cocog karo panggunaan sing dilaporake dening akun OpenRouter sampeyan (mung OpenRouter).
- **Panggunaan API Key** nuduhake rincian panggunaan OpenRouter, yen kasedhiya.
- **Busak data biaya** mbusak kabeh data, utawa mung entri sing luwih tuwa tinimbang tanggal sing dipilih.

**Pelacakan Biaya:** Nalika sampeyan nggunakake model OpenRouter, aplikasi nuduhake panggunaan lan pengeluaran nyata sampeyan adhedhasar informasi biaya saka OpenRouter. Kanggo kabeh penyedia liyane, aplikasi ngira biaya nggunakake rega sing diterbitake dening OpenRouter, yen rega ora kasedhiya, perkiraan bisa dadi nol.

<br/>

> ℹ️ **CATETAN**<br/>
>  **Kabeh angka biaya mung perkiraan kanggo referensi sampeyan, dudu statement tagihan resmi.**

<br/>

> ⚠️ **PITUTUR**<br/>
> Penghapusan data ora bisa dibatalake. Sadurunge mbusak, pastikan kanggo nyadhiyakake data utawa ekspor liwat [**Riwayat**](#history) 
> utawa [**Dasbor** > **Kabeh Panggilan**](#dashboard-tabs), yen ora bakal ilang permanen. 
> Kabeh riwayat input/output sing gegandhengan karo saben entri panggilan API uga bakal dibusak.

<br/>

<a id="transform-prompts"></a>
### Prompt transformasi

Gunakake **Setelan** > **Prompt transformasi** kanggo ngatur prompt kanthi akeh.

Sampeyan bisa:

- mriksa prompt sing disimpen
- mbusak prompt
- ngimpor prompt saka file
- ngekspor prompt kanggo cadangan utawa nuduhake
- muat conto prompt menyang daftar prompt

<br/>

<a id="users"></a>
### Pangguna

Gunakake **Pangguna** kanggo ngatur akun panganggo ing vèrsi web. Sampeyan bisa nambah panganggo, nganyari rinciane, reset sandhi, lan mbusak akun.

<br/>

<a id="api-config"></a>
### Konfigurasi API

Penyedia sing didhukung yaiku: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, lan **Ollama** (model lokal liwat URL dhasar). Sampeyan mung kudu ngonfigurasi penyedia sing digunakake.

**Aplikasi web: mung kanggo administrator**

Kunci API dikonfigurasi liwat variabel lingkungan sistem utawa Docker - ora dimasukkan ing antarmuka pangguna web. Kaca iki nuduhake panyedhiya sing duwe kunci dikonfigurasi lan ngidini sampeyan nyoba saben kunci kanthi klik tombol **`Test`**.

<br/>

> ℹ️ **CATETAN**<br/>
> Kanggo ngganti kunci API, pembarui variabel lingkungan ing konfigurasi sistem utawa Docker sampeyan lan restart server utawa wadah.

> ℹ️ **CATETAN**<br/>
> **Cadangan Konfigurasi** (deleng [**Setelan Umum** → Cadangan Konfigurasi](#general-settings)) bisa nemplak kunci panyedhiya sing wis **diselesaikan** ing jero `config.json` ZIP. Mbalekake ZIP kasebut ora **nyalin** kunci-kunci iku bali menyang file konfigurasi sing disimpen ing server - kunci aktif isih dijupuk saka lingkungan lan status file sing ana kaya sing dijelasake ing kana.

<br/>

**Aplikasi desktop**

Gunakake **Konfigurasi API** kanggo nyimpen kunci API kanggo saben panyedhiya sing digunakake. Kanggo Ollama, lebokake **URL dhasar** tinimbang kunci API.

<br/>

> 💡 **Tip** <br/>
> Yen sampeyan ora pengin nggunakake kunci API utawa mbayar panggunaan, sampeyan bisa [ndownload Ollama](https://ollama.com) lan nggunakake model (kaya `translategemma:4b`) sacara lokal ing mesin sampeyan kanthi gratis. Alternatif liya, sampeyan bisa gawe akun OpenRouter gratis (ora perlu kartu kredit) kanggo nggunakake model gratis, utawa entuk kunci API gratis saka Cerebras, Google, Groq, utawa Mistral AI.

<br/>

- Tambah mung panyedhiya sing dibutuhake. Ing **Setelan** > **Model**, saben id model diwiwiti karo panyedhiya (contone `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Kanggo nambah kunci API, lebokake nilai ing kolom teks lan klik **`Save`**. Kanggo ngganti kunci sing ana, klik **`Edit`**. Kanggo mriksa manawa kunci bisa digunakake, klik **`Test`**. Kanggo URL dhasar Ollama, tansah klik **`Test`** kanggo mriksa koneksi.

<br/>

> ℹ️ **CATETAN**<br/>
> Sampeyan ora bisa ndeleng nilai saiki saka kunci API. Sampeyan mung bisa nggantina nganggo tombol **`Edit`**.
> Kunci API disimpen kanthi dienkripsi ing konfigurasi.

<br/>

<a id="about"></a>
### Babagan

Tab **Babagan** nuduhake:

- jeneng aplikasi
- nomor vèrsi
- tanggal build
- pranala menyang repositori proyek

<br/><br/>

<a id="common-issues"></a>
## Masalah umum

Yen ana sing ora bisa digunakake kanthi diarepake, priksa dhisikan poin-poin ing ngisor iki.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikasi ora bisa nindakake terjemahna, nulis ulang, utawa transformasi teks

Priksa manawa:

- sampeyan wis milih model ing toolbar
- paling ora siji model kasebut ana ing [**Setelan** > **Model**](#models)
- setelan API sampeyan bisa digunakake

Yen sampeyan nggunakake aplikasi desktop:

1. Buka [**Setelan** > **Konfigurasi API**](#api-config).
2. Priksa manawa paling ora siji kunci API wis disimpen.
3. Klik **Tes** ing samping panyedhiya kanggo mastekake manawa kunci bisa digunakake.

<br/>

<a id="the-model-list-is-empty"></a>
### Daftar model kosong

Bukak [**Setelan** > **Model**](#models) lan klik **Refresh**.

Yen perlu:

- golek model
- uripake **Gratis Wae**
- tambahake siji utawa luwih model menyang **Model Sing Dipilih**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Asil kasebut kesusu utawa larang banget

Coba siji utawa luwih saka iki:

- pilih model liya
- gunakake input sing luwih cendhek
- mateni **Terjemahan langsung (nalika ngetik)** ing [**Setelan** > **Setelan Umum**](#general-settings)
- gunakake model gratis kanggo tugas sederhana (deleng [Model](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Antarmuka ing basa sing salah

Klik ikon globe ing [toolbar](#toolbar) lan pilih **Basa antarmuka** sing disenengi.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Tulisane cilik banget utawa angel diwaca

Bukak [**Setelan** > **Setelan Umum**](#general-settings) lan ganti:

- **Font Family**
- **Size**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Grafik Dasbor kosong

Iki normal yen:

- sampeyan mung nggunakake **model gratis** lan sampeyan ndeleng angka **biaya** (bisa uga nol); grafik jumlah panggilan **panggunaan** ing **Ringkesan** isih butuh data saka periode sing dipilih
- **filter wektu** sing dipilih ora nyakup periode nalika panggilan digawe - coba **Kabeh** kanggo mriksa

Yen grafik isih kosong sawise milih **Kabeh**, konfirmasi yen panggilan katon ing [**Riwayat**](#history) utawa ing tab **Kabeh Panggilan**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Biaya nuduhake "ora kasedhiya" utawa katon salah

Nalika sampeyan nggunakake model liwat **OpenRouter**, aplikasi nuduhake pengeluaran nyata sampeyan sing dilaporake dening OpenRouter.

Kanggo **panyedhiya liyane** (OpenAI langsung, Anthropic langsung, lsp.), biaya diperkirake saka data rega sing diterbitake dening OpenRouter. Yen ora ana rega sing cocog kanggo model, biaya bakal katon minangka **ora kasedhiya** lan ora bakal ditambahake menyang total sampeyan.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Total Biaya ora cocog karo tagihan panyedhiya

Angka biaya kabeh ing aplikasi iki **mung perkiraan kanggo referensi**, dudu pernyataan tagihan resmi.

Kanggo njaluk total luwih cedhak karo pengeluaran OpenRouter nyata sampeyan, bukak [**Setelan** > **Pelacakan Biaya**](#cost-tracking) lan klik **Sinkronake karo panggunaan kunci API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Kaca Riwayat ilang saka sisi bar

**Simpen riwayat eksekusi.** bisa uga dimateni. Buka [**Setelan** > **Setelan Umum**](#general-settings) lan aktifake. Dicathet yen ngaktifake ora bakal mulihake data riwayat sing wis dihapus sadurunge.

<br/>

<a id="web-app-session-expired"></a>
### Aplikasi web: dialihake menyang kaca login kanthi ora dikarepake

Sesi sampeyan bisa uga wis kadaluarwarsa. Mlebu maneh. Yen kerep kedadeyan, priksa konfigurasi server kanggo setelan umur sesi.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Admin web: lali utawa ilang sandhi

Iki ditrapake kanggo aplikasi web **sing di-host dhewe** (Docker), dudu aplikasi desktop (Electron).

- Yen administrator liyane isih bisa mlebu, dheweke bisa mbukak [**Setelan** > **Pangguna**](#users), pilih akun, lan atur **sandi anyar** ing kana.
- Yen sampeyan **terkunci metu** nanging duwe **akses shell** menyang mesin utawa wadah, atur maneh sandhi nganggo piranti bantuan sing dikirim bareng gambar kasebut (ganti `transrewrt` yen sampeyan ngowahi jeneng asli, lan gunakake tanda kutip kanggo sandhi yen ngandhut spasi utawa karakter khusus):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Jeneng pangguna admin asli yaiku `admin` yen sampeyan durung tau gawe akun liyane. Yen sampeyan mung mlebokake siji argumen, iku bakal dianggep minangka sandi anyar kanggo `admin`.

Yen sampeyan mlaku saka **cek sumber** tinimbang Docker, gunakna:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Naskah ngowahi rekam pangguna ing database SQLite (lan bisa gawe pangguna `admin` yen durung ana). Sawise ngreset, mlebu nganggo sandi anyar.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Dasbor ora nuduhake data kanggo pangguna liyane (web)

Mung **administrator** sing bisa ndeleng data kabeh pangguna liwat filter **Panganggo**. Pangguna biasa mung ndeleng aktivitas dhewe miturut rancangan.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Aku ngowahi prompt lan ilang suntingan

Saat nyunting prompt, tansah klik **Simpen** sadurunge klik **Bali menyang Run**.

<br/><br/>

<a id="quick-tips"></a>
## Tip Cepet

- Miwiti karo [**Terjemahna**](#translate) kanggo mastekake yen setelan sampeyan wis siap sadurunge pindha menyang [**Tulis Ulang**](#rewrite) utawa [**Transformasi**](#transform).
- Gunakna [**Tulis Ulang**](#rewrite) kanggo perbaikan basa saben dina.
- Gunakna [**Transformasi**](#transform) nalika sampeyan butuh alur kerja sing bisa diulang kanggo tugas tartamtu.
- Gunakna [**Dasbor**](#dashboard) yen sampeyan pengin ngawasi panggunaan lan biaya.
- Gunakna [**Riwayat**](#history) kanggo nimbang operasi lawas lan teks input/output lengkap.
- Ekspor prompt kanthi rutin yen sampeyan lagi gawe perpustakaan prompt sing pengin disimpen kanthi aman (deleng [Prompt transformasi](#transform-prompts)) utawa yen sampeyan pengin nuduhake karo liyane.

<br/><br/>

<a id="disclaimer"></a>
## Penafian

Jeneng produk lan ikon dadi duwèké sing nduwèni lan mung digunakake kanggo tujuan identifikasi. Piranti lunak iki ora afiliasi karo utawa didukung déning merek-merek sing kasebut.

<br/><br/>

<a id="license"></a>
## Lisènsi

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
