---
translated_at: "2026-03-26T00:50:08.350Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Pandhuan Panganggo

<br/>

<a id="introduction"></a>
## Panjelasan

Transrewrt mbantu panjenengan ngolah tèks kanthi telung cara utama:

- **Terjemahake** - ngowahi tèks saka basa kawates menyang basa liya.
- **Nulis maneh** - ngowahi gaya tèks kanthi cara liya, kaya sing luwih cetha, luwih cendhak utawa luwih resmi.
- **Ngowahi** - ngolah tèks nggunakake instruksi AI khusus sing diarani prompt.

<br/>

Dokumen iki nerangake cara nggunakake aplikasi sawise diinstal lan diaktifake. Kanggo langkah instalasi, mangga deleng **[README](README.jv.md)** utama.

<br/>

> ℹ️ **CATHETAN**<br/>
> Transrewrt kasedhiya minangka aplikasi desktop kanggo Windows lan Linux, lan minangka aplikasi wèb kanggo dhéwa. Pandhuan iki fokus marang panggunaan saben dina. Yen ana fitur sing mung ana ing salah siji versi, bakal diandharake kanthi jelas.

<small>**Macaa ing basa liya:** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Cathetan bab terjemahan UI lan dokumentasi:** Kabeh basa antarmuka, kajaba bhasa Inggris (UK), 
> diowahi nganggo model AI; tembung-tembug bisa ora cetha utawa ana kasalahan.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tembung Isi** 

- [Sawise miwiti](#before-you-start)
  - [Cara entuk kunci API OpenRouter gratis (aplikasi desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Miwiti](#getting-started)
- [Bagean utama jendhela](#main-parts-of-the-window)
  - [Sidebar](#sidebar)
  - [Toolbar](#toolbar)
  - [Panel input lan output](#input-and-output-panels)
- [Terjemahan](#translate)
  - [Nerjemahake tèks](#translate-text)
  - [Pemilihan basa](#language-selection)
  - [Setelan terjemahan sing migunani](#helpful-translation-settings)
- [Nulis maneh](#rewrite)
- [Ngowahi](#transform)
  - [Jalankan prompt sing ana](#run-an-existing-prompt)
  - [Yen durung duwé prompt](#if-you-have-no-prompts-yet)
  - [Gawe prompt kanthi cepet](#create-a-prompt-quickly)
  - [Sunting prompt](#edit-a-prompt)
  - [Tes prompt sadurungé digunakaké](#test-a-prompt-before-using-it)
- [Dashboard](#dashboard)
  - [Saring data](#filter-the-data)
  - [Tab dashboard](#dashboard-tabs)
  - [Ekspor data](#export-data)
  - [Hapus rékam sing disimpen kanggo model](#delete-stored-records-for-a-model)
- [Riwayat](#history)
  - [Saring data](#filter-the-data-1)
  - [Ekspor data riwayat](#export-history-data)
- [Setelan](#settings)
  - [Setelan umum](#general-settings)
  - [Model](#models)
  - [Basa](#languages)
  - [Pelacakan biaya](#cost-tracking)
  - [Prompt ngowahi](#transform-prompts)
  - [Pangguna](#users)
  - [Konfigurasi API](#api-config)
  - [Tentang](#about)
- [Masalah umum](#common-issues)
  - [Aplikasi ora nerjemahake, nulis maneh, utawa ngowahi tèks](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Dhaptar model kosong](#the-model-list-is-empty)
  - [Asilé kakehan alon utawa larang regane](#the-result-is-too-slow-or-too-expensive)
  - [Antarmuka ing basa sing salah](#the-interface-is-in-the-wrong-language)
  - [Tèks terlalu cilik utawa angel diwaca](#the-text-is-too-small-or-hard-to-read)
  - [Grafik dashboard kosong](#dashboard-charts-are-empty)
  - [Biaya nuduhake "ora kasedhiya" utawa katon salah](#cost-shows-not-available-or-seems-wrong)
  - [Total biaya ora cocog karo tagihan penyedia](#total-cost-does-not-match-my-provider-bill)
  - [Kaca Riwayat ilang saka sidebar](#the-history-page-is-missing-from-the-sidebar)
  - [Aplikasi wèb: dikonco menyang kaca login kanthi ora dikarepake](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Dashboard ora nuduhake data kanggo pangguna liya (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Aku ngowahi prompt nanging ilang owahane](#i-changed-a-prompt-and-lost-the-edits)
- [Tip cepet](#quick-tips)
- [Penyangkalan](#disclaimer)
- [Lisensi](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Sambelum miwiti

Kanggo nganggo Transrewrt, panjenengan kudu duwe akses nang sahiji penyedia AI. Penyedia sing didhukung antara liyane: [OpenRouter](https://openrouter.ai) (kang nggabungake akèh modhèl), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, lan [Ollama](https://ollama.com) kanggo modhèl lokal.

Panjenengan ora kudu milih modhèl bayar kanggo miwiti. Sawisé panjenengan nambahi kunci API OpenRouter, aplikasi kanthi otomatis ngaktifake pilihan **gratis** internal OpenRouter. Iki ngidini panjenengan langsung miwiti penerjemahan, penulisan ulang, lan transformasi teks. Alternatifipun, panjenengan uga bisa entuk kunci API gratis saka Cerebras, Google, Groq, utawa Mistral AI.

Ing basa sing luwih gampang:

- Sawijining **modhèl** iku mesin AI sing ngerjake tugas. Modhèl dicantumake nganggo **prefiks penyedia** (contone `openrouter/…`, `openai/…`, `ollama/…`).
- Sawijining **kunci API** (utawa, kanggo Ollama, **URL dhasar**) minangka cara aplikasi nyambung karo penyedia kasebut.

Menawa panjenengan nggunakake **aplikasi desktop**, tambahna kunci kanthi mlebu menyang [**Setelan** > **Konfigurasi API**](#api-config) kanggo saben penyedia sing digunakake. Kanggo panggunaan OpenRouter mung, mangga deleng [Cara entuk kunci API](#how-to-get-an-api-key-desktop-app) ing ngisor iki. Menawa panjenengan ora pengin nggunakake kunci API, panjenengan bisa nginstal Ollama (saka [ollama.com](https://ollama.com)) lan nggunakake modhèl lokal minangka gantine, kaya conto `translategemma:4b`.

Menawa panjenengan nggunakake **versi web**, pemilik server nyetel penyedia nggunakake variabel lingkungan, dadi panjenengan ora bisa ngetik kunci API langsung ing aplikasi.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cara entuk kunci API OpenRouter gratis (aplikasi desktop)

Menawa panjenengan nggunakake aplikasi desktop, tindakna langkah-langkah iki:

1. Bukak [OpenRouter](https://openrouter.ai) ing jaring panjenengan.
2. Gawe akun utawa mlebu.
3. Bukak kaca [Keys](https://openrouter.ai/keys).
4. Klik tombol kanggo nggawe kunci API anyar.
5. Beri jeneng kunci kasebut supaya panjenengan bisa ngenali kunci iku mengko.
6. Salin kunci API anyar kasebut.
7. Balia menyang Transrewrt lan buka **Setelan** > **Konfigurasi API**.
8. Tempel kunci kasebut menyang **kunci API OpenRouter** (ing ngisor **Setelan** > **Konfigurasi API**).
9. Klik **Uji kunci OpenRouter** kanggo mastekake manawa kunci kasebut bisa digunakake.

<br/><br/>

<a id="getting-started"></a>
## Miwiti

Menawa iki wektu pisanan panjenengan nggunakake Transrewrt, tindakna miturut urutan iki:

1. Bukak aplikasine.
2. Pilih **basane antarmuka** saka ikon globe menawa perlu.
3. Menawa panjenengan nggunakake **aplikasi desktop**, buka [**Setelan** > **Konfigurasi API**](#api-config), tambah kunci API kanggo paling ora siji penyedia (contone OpenRouter), lan klik **Uji** kanggo ngonfirmasi manawa bisa digunakake.
4. Bukak [**Setelan** > **Modhèl**](#models) lan tambah siji utawa luwih modhèl menyang **Modhèl sing Dipilih**.
5. Bukak [**Setelan** > **Basa**](#languages) lan pilih **Basa utama** panjenengan menawa panjenengan pengin basa sing paling asring digunakake katon pisanan.
6. Menyang **Terjemah** lan jalankan terjemahan sing gampang kanggo mastekake kabeh bisa digunakake.
7. Sawise wis bisa, cobanen **Nulis Ulang** banjur **Transformasi**.

Urutan iki penting. Iki nglindhungi saka masalah pisanan sing paling umum: nyoba ngerjake tugas sadurunge aplikasi duwe sambungan API utawa modhèl sing dipilih.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Bagéyan utama jendela

Aplikasi dibagi dadi telung bagéyan utama:

- **Bilik samping** ing sisih kiwa.
- **Bilah alat** ing sisih ndhuwur.
- **Wiyata kerja** ing tengah.

<br/>

<a id="sidebar"></a>
### Bilik Samping

Gunakna bilik samping kanggo pindhah-pindah aplikasi. Panjenengan bisa mbatesi ukuran bilik samping kanggo entuk ruangan luwih akeh kanthi ngklik ikon sajrone logo aplikasi.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/jv/sidebar.png" alt="Bilik Samping Aplikasi" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Terjamah</strong> mbukak ruang kerja penerjemahan.</li><br/>
        <li><strong>Nulis Ulang</strong> mbukak ruang kerja panulisan ulang.</li><br/>
        <li><strong>Transformasi</strong> mbukak ruang kerja prompt kustom.</li><br/>
        <li><strong>Dasbor</strong> nuduhake informasi panggunaan lan biaya.</li><br/>
        <li><strong>Setelan</strong> mbukak panel setelan.</li><br/>
        <li><strong>Sejarah</strong> nuduhake riwayat panggunaan kanthi teks input lan output</li><br/>
        <li><strong>Pangguna</strong> nuduhake jeneng pangguna sing mlebu (khusus web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Bar Gawe

Bar gawe owah udak beda manut panggonan kanggo enggon sampeyan neng app kasebut.

- Nang kiwa, nuduhake jeneng kaca saiki.
- Nang tengen, nuduhake **pemilih model** lan kontrol **basa antarmuka**.

**Pemilih model** ngidini panjenengan milih mesin AI endi sing arep digunakake kanggo tugas saiki.

  ![Pemilih model](../images/screenshots/jv/model-selector.png)

Sawetara model gratis bisa uga ora kasedhiya terus—kadhangkala offline utawa duwe wates panggunaan. Menawa iki kedadeyan, aplikasi bakal sacara otomatis mbusak model kasebut saka dhaftar sing kasedhiya kanggo panjenengan. Kanggo ngontrol model endi sing metu, menyang [**Setelan** > **Model**](#models) lan sunting dhaftar model panjenengan. 
Panjenengan uga bisa mbukak setelan model langsung kanthi klik ikon panyedhiya sing ana ing kiwa jeneng model nang bar gawe.

<br/>

**Ikon globe + kode basa** ngowahi basa antarmuka aplikasi, contone menu lan tombol. Iki ora **ngowahi** basa terjemahan sing digunakake nang **Terjemah**.

  ![Pemilih basa antarmuka](../images/screenshots/jv/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panel input lan ouput

Kebanyakan workspace nggunakake panel **Input** ing sisih kiwa lan panel **Output** ing sisih tengen.

Saben panel uga nuduhake:

| **Input**                                                          | **Output**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Jumlah karakter <br/>- Jumlah tembung <br/>- Jumlah paragraf <br/> | - Suwe tugas dienggo<br/>- **TPS** (token saben detik)<br/>- Jumlah karakter, tembung, lan paragraf<br/>- Model sing digunakake |


Menawa panjenengan penasaran babagan istilah teknis kasebut:

- **Token** tegese irisan cilik teks. Panjenengan bisa mbayangake minangka bagian tembung utawa tembung cendhak.
- **TPS** tegese jumlah irisan teks kasebut sing digawe model saben detik.

<br/>

Panjenengan uga bisa ngawasi biaya saben operasi (menawa kasedhiya) lan biaya total, kanthi mengaktifake opsi `Tuduhna informasi biaya nang tindakan` ing [**Setelan** > **Setelan Umum**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Terjemah

Gunakna **Terjemah** menawa panjenengan arep ngowahi teks saka siji basa menyang basa liyane.

![Workspace Terjemah](../images/screenshots/jv/translate.png)

<br/>

<a id="translate-text"></a>
### Terjemah Teks

1. Buka **Terjemah**.
2. Pilih basa ing **Saka**.
3. Pilih basa ing **Dadi**.
4. Pilih model nang bar gawe.
5. Ketik utawa tempel teks nang **Input**.
6. Klik **Terjemah**.
7. Deleng asil e nang **Output**.
8. Gunakna tombol salin menawa arep nyalin asil kasebut.

<br/>

<a id="language-selection"></a>
### Pemilihan Basa

- **Saka** bisa dadi basa tartamtu utawa **Deteksi Basa**.
- **Dadi** yaiku basa sing arep digunakake kanggo asil.

**Basa utama** panjenengan sing dipilih katon ing pucuk dhaftar. Panjenengan bisa ngatur kasebut ing [**Setelan** > **Basa**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Setelan Terjemah Sing Gunani

Nang [**Setelan** > **Setelan Umum**](#general-settings), panjenengan bisa owah cara kerja terjemahan:

- **Terjemah otomatis nalika nempel** ngajalankan terjemahan sawise panjenengan nempel teks.
- **Salin otomatis asil menyang clipboard** nyalin asil sacara otomatis sawise rampung kanthi sukses.
- **Terjemahan jroning wektu nyata (nalika ngetik)** ngajalankan terjemahan samasa panjenengan ngetik.
- **Wates wektu (ms)** ngatur suwe aplikasi njaluk mungguh sadurunge miwiti terjemahan jroning wektu nyata.
- **Enter** ngatur apa sing kedadeyan nalika panjenengan pencet `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Sulih

Gunakna **Sulih** menawa panjenengan arep ningkatake gaya basa tanpa owah tegese utama.

![Workspace Sulih](../images/screenshots/jv/rewrite.png)

Iki gunane kanggo:

- ngeperake ejaan lan tata basa
- ndadekake teks luwih cetha
- ndadekake teks luwih formal utawa kurang formal
- ningkatake utawa nyingkat teks
- ndadekake teks kaya luwih teknis

<br/>

> 💡 **PITUNJUK**<br/>
> Nalika nggunakna mode "**Mriksa Ejaan & Tata Basa**", tombol `Tudhoaha owah-owahan` metok nang panel output.
> Klik tombol iki kanggo milih nuduhake utawa mbatesi owah-owahan sing dinggo marang teks panjenengan.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformasi

Gunakake **Transformasi** nalika sampeyan pengin AI ngetutake dhaptar instruksi sing disesuaikan.

![Transformasi workspace](../images/screenshots/jv/transform.png)

Iki minangka wilayah paling fleksibel saka aplikasi. Sampeyan bisa nggunakake kanggo tugas-tugas kaya:

- ngurutake cathetan
- ngowahi tulisan kasar dadi email sing rapi
- njupuk poin utama
- ngowahi teks dadi format tartamtu
- aktivitas khusus liyane kanthi teks input

<br/>

<a id="run-an-existing-prompt"></a>
### Jalankan prompt sing ana

1. Bukak **Transformasi**.
2. Pilih prompt saka dhaptar prompt.
3. Yen muncul kotak **Basa Sasaran**, pilih basa yen perlu.
4. Ketik utawa tempel teks ing **Input**.
5. Klik **Transformasi**.
6. Deleng asilé ing **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Yen durung duwe prompt

Yen dhaptar prompt kosong, klik **Muat conto prompt**. Iki nyepetake conto sing disertakake supaya sampeyan bisa miwiti kanthi cepet.

<br/>

> ℹ️ **CATETAN**<br/>
> Conto prompt disedhiyakake ing basa Inggris. Sawise diundhuh, sampeyan bisa ngowahi prompt lan nggunakake **Terjemahake prompt** kanggo menerjemahakéé menyang basa sampeyan.

<br/>

<a id="create-a-prompt-quickly"></a>
### Nggawe prompt kanthi cepet

Cara paling cepet kanggo nggawe prompt yaiku:

1. Klik **Prompt Anyar**.
2. Klik **Gawe Prompt**.
3. Jlentrehaké apa sing dikarepaké kanggo prompt kasebut.
4. Pilih model.
5. Biyarakéné aplikasi gawe rancangan kanggo sampeyan.
6. Priksa rancangane lan klik **Simpen**.

![Gawe Prompt](../images/screenshots/jv/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Ngowahi prompt

Nalika sampeyan nggawe utawa ngowahi prompt, panel panyunting muncul ing sisih kiwa lan wilayah tes muncul ing sisih tengen.

![Panyunting prompt Transformasi](../images/screenshots/jv/transform-prompt-edit.png)

Bidang utama yaiku:

- **Jeneng prompt**: jeneng sing dumadi ing dhaptar prompt.
- **Petunjuk prompt (opsional)**: petunjuk cendhak sing ditampilaké menyang pamenejer nalika mlakuake prompt.
- **Peran Model**: peran umum sing diwenehaké marang AI, kaya 'Sampeyan minangka asisten sing mbantu.'
- **Instruksi Model (siji saben baris)**: aturan khusus sing pengin AI ikuti.
- **Katrangan Output**: tembung cendhak kanggo nglukiskaké asilé, kaya 'ringkesan' utawa 'ditulis maneh'.
- **Suhu (0.0 → 1.0)**: cara model tumindak; deleng ing ngisor.
- **Mlayu basa sasaran**: nambahaké pemilih basa sasaran nalika prompt dijalankan.

Yen istilah teknis **Suhu** anyar kanggo sampeyan, bayangakéné kaya iki:

- Suhu **kurang** menehi asil sing luwih mantep lan bisa dipredheksi.
- Suhu **luwih dhuwur** menehi variasi lan kreativitas sing luwih akeh.

Sampeyan uga bisa nggunakake:

- **`Gawe Prompt`** kanggo nggawe rancangan anyar saka jelasan sederhana
- **`Pangkatahan Prompt`** kanggo nyempurnaké prompt sing wis ana
- **`Terjemahake Prompt`** kanggo menerjemahaké bidang prompt

<br/>

> ⚠️ **PANGEMBALINGAN**<br/>
> Klik **`Simpen`** sadurungé sampeyan klik **`Bali menyang Jalankan`**. Yen sampeyan bali tanpa nyimpen, owah-owahane bakal ilang.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Tes prompt sadurungé digunakaké

Panel tes ing sisih tengen ngidinaké sampeyan nyoba prompt nggunakake teks conto sadurungé digunakaké ing kerja saben dina.

Iki migunani nalika:

- sampeyan lagi nggawe prompt anyar
- sampeyan lagi mbandhingaké loro versi prompt
- sampeyan arep mriksa intonasi, dawa, utawa format output

<br/>

> ℹ️ **CATETAN**<br/>
> Sampeyan bisa ngekspor lan ngimpor prompt sing disimpen ing [**Setelan** > **Prompt Transformasi**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Dasbor

Gunakake **Dasbor** kanggo ndeleng sepira akeh sampeyan migunakaké aplikasi lan regaé (kanggo model bayar).

![Ringkesan Dasbor](../images/screenshots/jv/dashboard-summary.png)


<br/>

> ℹ️ **CATETAN**<br/>
> Yen mung migunakaké model gratis, grafik sing ana gandhèngan karo rega bakal kosong.

<br/>

<a id="filter-the-data"></a>
### Saring data

Gunakake tombol saringan ing ndhuwur kanggo ngowahi wektu.

![Filter Dasbor](../images/screenshots/jv/dashboard-filter.png)

<br/>

> ℹ️ **CATETAN**<br/>
> Filter **Panganggo** mung katon kanggo administrator ing versi web. Pangguna biasa ora ndelok filter iki, lan ora kasedhiya ing aplikasi desktop.

<br/>

<a id="dashboard-tabs"></a>

### Tab Panel

- **Ringkesan** menehi tinjauan babagan panggunaan lan biaya.
- **Dumasar Panggunaan** ngrinci kagiatan miturut basa terjemahan, modhe ngrewang, lan panjaluk owah-owahan.
- **Dumasar Model** nuduhake model apa wae sing digunakake lan biayane.
- **Dumasar Dina** nuduhake total saben dina.
- **Kabeh Panggilan** nuduhake riwayat kabeh panggilan lan ngidinake sampeyan ngekspor data kasebut.

<br/>

<a id="export-data"></a>
### Ekspor data

Tabel panel bisa ngekspor data ing:

- **JSON**
- **CSV**
- **XLSX**

Iki migunani yen sampeyan pengin ngevaluasi kagiatan jroning aplikasi utawa barengake laporan.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Busak cathetan sing disimpen kanggo model

Ing **Dumasar Model** utawa **Kabeh Panggilan**, sampeyan bisa mbusak cathetan sing disimpen kanggo model kanthi klik ikon “tempurung sampeyan”.

> ⚠️ **PERINGATAN**<br/>
> Mbusek cathetan sing disimpen ora bisa dibatalake. Gunakake mung yen sampeyan yakin ora kudu maneh riwayat kasebut.

Kanggo mbusak kabeh data utawa mbusak cathetan dhasar umure, menyang [**Setelan** > **Pelacakan Biaya**](#cost-tracking). Ing kana sampeyan bakal nemokake opsi kanggo mbusak kabeh data sing disimpen utawa mung data sing umure luwih tuwa tinimbang tanggal tartamtu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Riwayat

Klik **Riwayat** kanggo ndeleng riwayat tumindak sampeyan ing jero **Transrewrt**, kalebu input lan output saben operasi.

![Kaca riwayat](../images/screenshots/jv/history.png)

<br/>

<a id="filter-the-history"></a>
### Saring data

**Riwayat** nggunakake filter sing padha karo kaca **Panel**. Gunakake kanggo milih jangkoan wektu.

![Filter panel](../images/screenshots/jv/dashboard-filter.png)

<br/>

> ℹ️ **CATETAN**<br/>
> Filter **Panganggo** mung katon kanggo administrator ing versi web. Pangguna biasa ora bakal ndeleng filter iki, lan filter iki ora kasedhiya ing aplikasi desktop.

<br/>

<a id="export-history-data"></a>
### Ekspor data riwayat

Kaca riwayat bisa ngekspor data sing disaring ing:

- **JSON**
- **CSV**
- **XLSX**

Iki migunani yen sampeyan pengin ngevaluasi kagiatan jroning aplikasi utawa barengake laporan.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Setelan

Bukak **Setelan** saka sisi ngisor kanggo ngonfigurasi cara aplikasi dianggo.

Tab sing kasedhiya gumantung saka platform lan peran sampeyan:

  | Tab               | Desktop | Web (admin) | Web (pengguna biasa) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Setelan Umum      |   ya    |     ya      |        ya          |
  | Model             |   ya    |     ya      |        ya          |
  | Basa              |   ya    |     ya      |        ya          |
  | Pelacakan Biaya   |   ya    |     ya      |         —          |
  | Panjaluk Owah-owahan |   ya    |     ya      |        ya          |
  | Pangguna          |    —    |     ya      |         —          |
  | Konfigurasi API   |   ya    |     ya      |         —          |
  | Babagan           |   ya    |     ya      |        ya          |

<br/>

> ℹ️ **CATETAN**<br/>
> Ing versi web, saben pangguna duwe konfigurasi dhewe. Setelan kaya model dipilih, basa, opsi umum, lan panjaluk owah-owahan disimpen saben pangguna. Owah-owahan sing ditindakake ora mangaruhi pangguna liya.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Setelan Umum

Gunakake **Setelan Umum** kanggo ngontrol perilaku ngetik, apakah rincian eksekusi disimpen kanggo **Riwayat**, lan tampilan.

**Perilaku**

- **Perilaku tombol ENTER** milih apa `Enter` ngleksanani tugas utawa nambah baris anyar.
- **Terjemahan otomatis nalika nempel** ngwiwiti terjemahan sawisé sampeyan nempelake teks.
- **Nyalin hasil otomatis menyang clipboard** nyalin asil sing sukses sacara otomatis.
- **Terjemahan real-time (nalika ngetik)** nerjemahake nalika sampeyan ngetik.
- **Wektu tunggu (ms)** ngatur wektu tunggu kanggo terjemahan real-time.

**Riwayat**

- **Simpen riwayat eksekusi** ngontrol apa saben terjemahan, ngrewang, lan owah-owahan nyimpen **teks input lan output** kanggo penampil [**Riwayat**](#history) ing sisi samping. Mateni fitur iki bakal njaluk konfirmasi; yen sampeyan konfirmasi, teks riwayat sing disimpen bakal dihapus saka database.
- **Penghapusan data riwayat** ngidinake sampeyan mbusak teks sing disimpen dhasar umure (contone sing umure luwih saka sawetara wulan, utawa **kabeh data (bresih)**) nggunakake **Hapus data**. Iki mung mempeng cathetan eksekusi sing disimpen kanggo tampilan **Riwayat**; **ora** mbusak total biaya utawa panggunaan. Kanggo mbusak utawa ngurangi data **biaya**, gunakake [**Setelan** > **Pelacakan Biaya**](#cost-tracking).

**Tampilan**

- **Tuduhna informasi biaya ing tumindak** ngontrol tampilan biaya saben operasi (yen kasedhiya) lan total biaya ing panel output Terjemahan, Ngrewang, lan Owah-owahan.
- **Digit pecahan biaya** ngowahi carane desimal biaya ditampilake.
- **Khusus web:** **tuduhna margin ing sakeliling aplikasi** nambah ruang tambahan ing sakeliling antarmuka.
- **Jinis Huruf** ngowahi jinis huruf ing panel teks.
- **Ukuran** ngowahi ukuran huruf.


<br/>

<a id="models"></a>

### Modhel

Gunakake **Setelan** > **Modhel** kanggo milih modhel sing digunakake ing toolbar.

![Tab Setelan Modhel](../images/screenshots/jv/settings-models.png)

Kaca iki duwe rong daptar:

- **Modhel Sing Kasedhiya** ing kiwa
- **Modhel Sing Dipilih** ing tengen

Kontrol sing migunani kalebu:

- **Goleki modhel...** kanggo mangerteni modhel miturut jenengé
- Chips **Penyedia** kanggo nglarasake daptar dadi siji mesin (OpenRouter, OpenAI, Ollama, …)
- **Mung Gratis** kanggo nuduhake mung modhel gratis
- **Segerake** kanggo ngunggah maneh daptar
- **Bukak Kabeh** lan **Sembunyikake Kabeh** nalika sampeyan ngurutake miturut penyedia

ID modhel kalebu préfiks penyedia (contone `openrouter/…` dibanding `openai/…`). Lencana kaya **OpenAI (OpenRouter)** vs **OpenAI (langsung)** nuduhake carane lalu lintas dikirim.

> ℹ️ **CATETAN**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) minangka modhel router, dudu modhel chatting umum: tanggapane yaiku JSON sing nggambarake isi panjalukan API OpenRouter (contone siji array `requests` kanthi `model` lan `messages`). Yen sampeyan nggunakake kanggo **Terjemahake**, **Tulis Maneh**, utawa **Ubah**, panel output bakal nuduhake JSON kuwi tinimbang tèks rampung. Pilih modhel tèks biasa kanggo tugas-tugas mau. Deleng [kaca modhel Body Builder](https://openrouter.ai/openrouter/bodybuilder) ing OpenRouter.

Tindakan:

 - Kanggo nambah modhel, klik **Tambah** utawa ing ngendi wae ing entri.

 - Kanggo mbusak modhel, klik **X** ing sampingé ing **Modhel Sing Dipilih** utawa **Dipilih** ing entri ing Modhel Sing Kasedhiya.

 - Kanggo mbusak kabeh daptar, klik **Batal Pilih Kabeh**. Modhel gratis sing dibutuhake bakal tetep ana ing daptar.

<br/>

> ℹ️ **CATETAN**<br/>
> Yen sampeyan ora arep nambah kredit langsung menyang OpenRouter, wiwiti kanthi ngaktifake **Mung Gratis** lan milih modhel gratis (ora perlu kartu kredit). Sampeyan uga bisa nggunakake Ollama kanggo mlakuake modhel lokal tanpa kunci API.

<br/>

<a id="languages"></a>
### Basa

Gunakake **Setelan** > **Basa** kanggo ngatur daptar basa sing digunakake ing aplikasi.

- **Basa utama** dicekeli ing mburi ndhuwur daptar basa ing **Terjemahake** lan **Ubah**.
- **Basa khusus** ngidini sampeyan nambah basa sing ora ana ing daptar internal.

Yen sampeyan nambah basa khusus, basa iku bakal metokake ing pamilih basa bebarengan karo pilihan internal.

<br/>

<a id="cost-tracking"></a>
### Pelacakan biaya

Gunakake **Setelan** > **Pelacakan Biaya** kanggo ngatur informasi biaya.

- **Total Biaya** nuduhake total sing terus tambah.
- **Salin Nilai** nyalin total menyang clipboard.
- **Setel Ulang Biaya** ngreset total sing disimpen dadi nol.
- **Sinkronake karo panggunaan kunci API** ngatur total supaya cocog karo panggunaan sing dilapurake déning akun OpenRouter sampeyan (mung kanggo OpenRouter).
- **Panggunaan Kunci API** nuduhake rincian panggunaan OpenRouter, yèn kasedhiya.
- **Hapus dana biaya** mbusak kabeh data, utawa mung entri sing luwih tuwa tinimbang tanggal sing dipilih.

**Pelacakan biaya:** Nalika sampeyan nggunakake modhel OpenRouter, aplikasi nuduhake panggunaan lan pengeluaran nyata adhedhasar informasi biaya saka OpenRouter. Kanggo kabeh penyedia liya, aplikasi mperkirakake biaya nggunakake rega sing diumumaké déning OpenRouter, yèn rega ora kasedhiya, perkiraan bisa waé nol.

<br/>

> ℹ️ **CATETAN**<br/>
> **Saben digit biaya minangka perkiraan mung kanggo referensi sampeyan, dudu peryataan tagihan resmi.**

<br/>

> ⚠️ **PERINGATAN**<br/>
> Panghapusan data ora bisa dibalikake. Sadurunge mbusak, pastekake manawa sampeyan wis nyadhiyakake cadangan data utawa ngekspor liwat [**Riwayat**](#history) 
> utawa [**Dasbor** > **Kabeh Panyambungan**](#dashboard-tabs), yen ora data bakal ilang permanen. 
> Kabeh riwayat input/output sing ana gandhèngané karo saben entri panjalukan API uga bakal dihapus.

<br/>

<a id="transform-prompts"></a>
### Prompt ubah

Gunakake **Setelan** > **Prompt Ubah** kanggo ngatur prompt kanthi massal.

Sampeyan bisa:

- nimbang prompt sing wis disimpen
- mbusak prompt
- ngimpor prompt saka berkas
- mengekspor prompt kanggo cadangan utawa dibagi

<br/>

<a id="users"></a>
### Pamganggo

Gunakake **Pamanggih** kanggo ngatur akun pamanggiha ing versi web. Sampeyan bisa nambah pangguna, ngowahi rinciane, setel ulang sandhi, lan mbusak akun.

<br/>

<a id="api-config"></a>
### Konfigurasi API

Penyedia sing didhukung yaiku: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, lan **Ollama** (modhel lokal liwat URL dhasar). Sampeyan mung perlu ngonfigurasi penyedia sing digunakake.

**Aplikasi web: mung administrator**

Kunci API dikonfigurasi liwat variabel lingkungan sistem utawa Docker — ora dimasukkan ing antarmuka web. Kaca iki nuduhake penyedia sing duwe kunci sing dikonfigurasi lan ngidini sampeyan nguji saben kunci kanthi klik tombol **`Tes`**.

<br/>

> ℹ️ **CATETAN**<br/>
> Kanggo ganti kunci API, pembarui variabel lingkungan ing konfigurasi sistem utawa Docker lan restart server utawa wadhah.

<br/>

**Aplikasi desktop**

Gunakake **Konfigurasi API** kanggo nyimpen kunci API kanggo saben penyedia sing digunakake. Kanggo Ollama, lebokna **URL dhasar** tinimbang kunci API.

<br/>

> 💡 **Trik** <br/>
> Yen sampeyan ora arep nggunakake kunci API utawa mbayar panggunaan, sampeyan bisa [ndownload Ollama](https://ollama.com) lan mlakuake modhel (kayata `translategemma:4b`) lokal ing komputer sampeyan gratis. Alternatif, sampeyan bisa nggawe akun OpenRouter gratis (tanpa kartu kredit dibutuhake) kanggo nggunakake modhel gratisé, utawa entuk kunci API gratis saka Cerebras, Google, Groq, utawa Mistral AI.

<br/>

- Mung tambah penyedia sing dibutuhake. Ing **Setelan** > **Modhel**, saben ID modhel diwiwiti karo penyedia (contone `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Kanggo nambah kunci API, lebokna nilai ing kolom tèks lan klik **`Simpen`**. Kanggo ngganti kunci sing wis ana, klik **`Sunting`**. Kanggo mastekake manawa kunci iku tindhak, klik **`Tes`**. Kanggo URL dhasar Ollama, tansah klik **`Tes`** kanggo mriksa koneksi.

<br/>

> ℹ️ **CATETAN**<br/>
> Sampeyan ora bisa ndeleng nilai saiki saka kunci API. Sampeyan mung bisa nggantine nggunakake tombol **`Sunting`**.  
> Kunci API disimpen kanthi di-enkripsi ing konfigurasi.

<br/>

<a id="about"></a>

### Ngenani

Tab **Ngenani** nuduhake:

- jeneng aplikasi
- nomor versi
- tanggal panggawe
- tautan menyang repositori proyek

<br/><br/>

<a id="common-issues"></a>
## Masalah umum

Yen ana sing ora mlaku sesuai karepmu, priksa dhisik sawetara perkara ing ngisor iki.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikasi ora nerjemahake, nulis maneh, utawa ngowahi teks

Priksa yèn:

- sampeyan wis milih model ing bilah gawé
- paling sethithik siji model katon ing [**Setelan** > **Model**](#models)
- konfigurasi API sampeyan wis mlaku

Yen sampeyan nggunakake aplikasi desktop:

1. Buka [**Setelan** > **Konfigurasi API**](#api-config).
2. Priksa paling ora siji kunci API wis disimpen.
3. Klik **Tes** cedhak penyedia kanggo ngonfirmasi yèn kunciné mlaku.

<br/>

<a id="the-model-list-is-empty"></a>
### Daptar model kosong

Buka [**Setelan** > **Model**](#models) lan klik **Segerake**.

Yen prelu:

- goleki model
- aktifake **Mung Gratis**
- tambah siji utawa luwih model menyang **Model Dipilih**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Asilé kelelan utawa larang banget

Coba salah siji utawa kabeh ing ngisor iki:

- pilih model liya
- gunakake input sing luwih cendhak
- mateni **Terjemahan real-time (saat njupuk)** ing [**Setelan** > **Setelan Umum**](#general-settings)
- gunakake model gratis kanggo tugas sederhana (deleng [Model](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Antarmuka nganggo basa sing salah

Klik ikon globe ing [bilah alat](#toolbar) lan pilih **Basa Antarmuka** favoritmu.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Teks kecil banget utawa angel diwaca

Buka [**Setelan** > **Setelan Umum**](#general-settings) lan owahana:

- **Jinis Huruf**
- **Ukuran**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Grafik Dashboard kosong

Iki normal yen:

- sampeyan mung nggunakake **model gratis** (grafik biaya bakal kosong)
- **filter wektu** sing dipilih ora nutupi periode nalika panjalukan dilakoni — coba **Kabeh** kanggo mriksa

Yen grafik isih kosong sawise milih **Kabeh**, priksa manawa panjalukan katon ing [**Riwayat**](#history) utawa ing tab **Kabeh Panggilan**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Biaya nuduhake "ora kasedhiya" utawa rasaé salah

Sawise sampeyan nggunakake model liwat **OpenRouter**, aplikasi nuduhaké biaya aktual sing dilaporan OpenRouter.

Kanggo **penyedia liya** (OpenAI langsung, Anthropic langsung, lsp), biayane dhitung saka data rega sing diterbitake OpenRouter. Yen ora nemu rega sing pas kanggo model tartamtu, biayane bakal nuduhake **ora kasedhiya** lan ora diitung ing total sampeyan.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Total biaya ora cocog karo tagihan penyedia

Kabeh angka biaya ing aplikasi iki mung **perkiraan minangka referensi**, dudu laporan tagihan resmi.

Kanggo njalari total biaya luwih cedhak karo pengeluaran OpenRouter nyata, buka [**Setelan** > **Pelacakan Biaya**](#cost-tracking) lan klik **Sinkronake karo pamakaian kunci API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Kaca Riwayat ilang saka sisi

Opsi **Simpen riwayat eksekusi** isih mati. Buka [**Setelan** > **Setelan Umum**](#general-settings) lan aktifake. Elinga yèn ngaktifake iki ora bisa mbalekake riwayat sing wis ilang sadurungé.

<br/>

<a id="web-app-session-expired"></a>
### Aplikasi web: dialihake menyang kaca mlebu ora dikarepake

Sesi sampeyan isih kadaluarsa. Mlebu maneh. Yen kerep kedadean, priksa konfigurasi server kanggo setelan umur sesi.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Dashboard ora nuduhake data kanggo pangguna liya (web)

Mung **admin** sing bisa ndelok data kabeh pangguna ngliwati filter **Pangguna**. Pangguna biasa kanthi desain mung ndelok aktivitas dhéwé.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Aku ngowahi isian lan ilang owah-owahane

Sawise ngowahi isian, tansah klik **Simpen** sadurunge klik **Bali menyang Run**.

<br/><br/>

<a id="quick-tips"></a>
## Tip Cepet

- Mula karo [**Terjemahan**](#translate) kanggo mastekake setup sampeyan mlaku sadurunge pindhah menyang [**Nulis Maneh**](#rewrite) utawa [**Ngowahi**](#transform).
- Gunakake [**Nulis Maneh**](#rewrite) kanggo perbaikan basa saben dina.
- Gunakake [**Ngowahi**](#transform) nalika perlu alur kerja sing bisa diulang kanggo tugas tartamtu.
- Gunakake [**Dashboard**](#dashboard) yen sampeyan pengin nglacak panggunaan lan biaya.
- Gunakake [**Riwayat**](#history) kanggo nindakake evaluasi marang operasi lawas lan teks input/output lengkap.
- Ekspor isian kanthi rutin yen sampeyan nduwé perpustakaan isian sing pengin disimpen utawa digunakake bareng karo wong liya. (deleng [Gawe Isian Ngowahi](#transform-prompts))

<br/><br/>

<a id="disclaimer"></a>

## Praméja

Jeneng lan ikon produk duwé dhéwé lan dianggo mung kanggo tujuan idhèntifikasi. Piranti lunak iki ora kalebu utawa didhukung déning merek-merek sing disebutake.

<br/><br/>

<a id="license"></a>
## Linsènsi

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Linsènsi Apache 2.0](LICENSE)