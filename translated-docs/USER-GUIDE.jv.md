---
translated_at: "2026-03-25T21:35:48.104Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt panil](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Pandhuan Pangguna

<br/>

<a id="introduction"></a>
## Pangantar

Transrewrt mbantu sampeyan nggarap tèks ing telung cara utama:

- **Terjemahake** - ngowahi tèks saka siji basa menyang basa liyane.
- **Nulis maneh** - ngganti gaya tèks, contone luwih cetha, luwih petak, utawa luwih resmi.
- **Ngowahi** - ngolah tèks nganggo instruksi AI khusus sing diarani petunjuk (prompts).

<br/>

Pandhuan iki nerangake carane nggunakake aplikasi sawise dipasang lan diurutake. Kanggo langkah-langkah instalasi, mangga deleng **[README](README.jv.md)** utama.

<br/>

> ℹ️ **CATETAN**<br/>
> Transrewrt ana ing wujud aplikasi desktop kanggo Windows lan Linux, lan minangka aplikasi web kanggo dhewe. Pandhuan iki fokus marang panggunaan saben dina aplikasi kasebut. Yen ana sing mung ditrapake kanggo siji versi, bakal dicethakake kanthi cetha.

<small>**Macang ing basa liya:** [English (UK)](USER-GUIDE.jv.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](translated-docs/USER-GUIDe
</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tabel Isi** 

- [Sadurunge miwiti](#before-you-start)
  - [Cara entuk kunci API OpenRouter gratis (aplikasi desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Mulai nggunakake](#getting-started)
- [Bagian utama jendhela](#main-parts-of-the-window)
  - [Side bar](#sidebar)
  - [Toolbar](#toolbar)
  - [Panel input lan output](#input-and-output-panels)
- [Terjemah](#translate)
  - [Terjemahake tèks](#translate-text)
  - [Pemilihan basa](#language-selection)
  - [Setelan terjemahan sing migunani](#helpful-translation-settings)
- [Nulismaneh](#rewrite)
- [Ngowahi](#transform)
  - [Jalankan prompt sing ana](#run-an-existing-prompt)
  - [Yen durung duwe prompt](#if-you-have-no-prompts-yet)
  - [Gawe prompt kanthi cepet](#create-a-prompt-quickly)
  - [Sunting prompt](#edit-a-prompt)
  - [Uji prompt sadurunge digunakake](#test-a-prompt-before-using-it)
- [Dasbor](#dashboard)
  - [Saring data](#filter-the-data)
  - [Tab dasbor](#dashboard-tabs)
  - [Ekspor data](#export-data)
  - [Busak cathetan sing disimpen kanggo model tartamtu](#delete-stored-records-for-a-model)
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
  - [Aplikasi ora bisa nerjemahake, nulis maneh, utawa ngowahi tèks](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Dhaptar model kosong](#the-model-list-is-empty)
  - [Asilé mlaku alon utawa larang banget](#the-result-is-too-slow-or-too-expensive)
  - [Antarmuka ing basa sing salah](#the-interface-is-in-the-wrong-language)
  - [Tèks terlalu cilik utawa angel diwaca](#the-text-is-too-small-or-hard-to-read)
  - [Grafik dasbor kosong](#dashboard-charts-are-empty)
  - [Biaya nuduhake "ora kasedhiya" utawa katon salah](#cost-shows-not-available-or-seems-wrong)
  - [Total biaya ora cocog karo tagihan penyedia](#total-cost-does-not-match-my-provider-bill)
  - [Kaca Riwayat ilang saka side bar](#the-history-page-is-missing-from-the-sidebar)
  - [Aplikasi web: diarahake maneh menyang kaca login kanthi ora dikarepaké](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Dasbor ora nuduhake data kanggo pangguna liya (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Aku ngowahi prompt nanging isine ilang](#i-changed-a-prompt-and-lost-the-edits)
- [Tip cepet](#quick-tips)
- [Peringatan](#disclaimer)
- [Lisensi](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Sadurunge miwiti

Kanggo nggunakake Transrewrt, sampeyan kudu duwe akses menyang paling ora siji penyedia AI. Para penyedia sing didhukung yaiku: [OpenRouter](https://openrouter.ai) (kang nggabungake akeh model), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, lan [Ollama](https://ollama.com) kanggo model lokal.

Sampeyan ora perlu milih model bayar kanggo miwiti. Sawise nambahake kunci API OpenRouter, aplikasi kanthi otomatis ngaktifake pilihan **gratis** OpenRouter sing wis di-integrasikake. Iki ngidini sampeyan langsung miwiti terjemahan, panulisan maneh, lan ngowahi teks. Liyane, sampeyan uga bisa entuk kunci API gratis saka Cerebras, Google, Groq, utawa Mistral AI.

Ing basa sing gampang:

- Sawijining **model** yaiku mesin AI sing nglakoni tugas. Model-model dicantumake nganggo awalan **penyedia** (contone `openrouter/…`, `openai/…`, `ollama/…`).
- Sawijining **kunci API** (utawa kanggo Ollama, **URL dhasar**) yaiku cara aplikasi bisa ngubungi penyedia kasebut.

Yen sampeyan nggunakake **aplikasi desktop**, tambahake kunci ing [**Setelan** > **Konfigurasi API**](#api-config) kanggo saben penyedia sing digunakake. Kanggo panggunaan OpenRouter mung, deleng [Cara entuk kunci API](#how-to-get-an-api-key-desktop-app) ing ngisor iki. Yen sampeyan ora pengin nggunakake kunci API, sampeyan bisa nginstal Ollama (saka [ollama.com](https://ollama.com)) lan nggunakake model lokal, kaya waé `translategemma:4b`.

Yen sampeyan nggunakake **versi wèb**, pemilik server sing nyetel penyedia nggunakake variabel lingkungan, dadi sampeyan ora bisa ngetik kunci API langsung ing aplikasi.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cara entuk kunci API OpenRouter gratis (aplikasi desktop)

Yen sampeyan nggunakake aplikasi desktop, tindakake langkah-langkah iki:

1. Bukak [OpenRouter](https://openrouter.ai) ing panyungsep wèb sampeyan.
2. Gawe akun utawa mlebu.
3. Bukak kaca [Keys](https://openrouter.ai/keys).
4. Klik tombol kanggo nggawe kunci API anyar.
5. Beri jeneng kunci supaya bisa dikenali mengko.
6. Salin kunci API anyar kasebut.
7. Balia menyang Transrewrt lan mbukak **Setelan** > **Konfigurasi API**.
8. Tempel kunci kasebut ing **Kunci API OpenRouter** (ing ngisor **Setelan** > **Konfigurasi API**).
9. Klik **Tes kunci OpenRouter** kanggo mastekake manawa kunci kasebut bisa digunakake.

<br/><br/>

<a id="getting-started"></a>
## Miwiti

Yen iki wektu pisanan sampeyan nggunakake Transrewrt, tindakake urutan iki:

1. Buka aplikasine.
2. Pilih **basa antarmuka** saka ikon globe yèn perlu.
3. Yen sampeyan nggunakake **aplikasi desktop**, bukak [**Setelan** > **Konfigurasi API**](#api-config), tambah kunci API kanggo paling ora siji penyedia (contone OpenRouter), lan klik **Tes** kanggo ngonfirmasi yèn bisa digunakake.
4. Bukak [**Setelan** > **Model**](#models) lan tambah siji utawa luwih model menyang **Model sing Dipilih**.
5. Bukak [**Setelan** > **Basa**](#languages) lan pilih **Basa Utama** sampeyan, yen sampeyan pengin basa sing paling asring digunakake katon dhisik.
6. Pergi menyang **Terjemahan** lan jalanake terjemahan sederhana kanggo ngonfirmasi kabeh bisa digunakake.
7. Sawise iku bisa digunakake, coba **Nulis Maneh** banjur **Ngowahi**.

Urutan iki penting. Iki nglindhungi saka masalah umum pisanan nggunakake: nyoba nglakoni tugas sadurunge aplikasi duwe sambungan API utawa model sing dipilih.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Bagian utama jendhela

Aplikasi dibagi dadi telung wilayah utama:

- **Sidebar** ing sisih kiwa.
- **Toolbar** ing ngisor.
- **Wiyar pagawean** ing tengah.

<br/>

<a id="sidebar"></a>
### Sidebar

Gunakake sidebar kanggo pindhah-pindhah ing aplikasi. Sampeyan bisa nutup sidebar kanggo goleki ruang luwih akeh kanthi ngklik ikon ing sabrang logo aplikasi.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/jv/sidebar.png" alt="Sidebar Aplikasi" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Terjemahan</strong> mbukak wilayah kerja terjemahan.</li><br/>
        <li><strong>Nulis Maneh</strong> mbukak wilayah kerja panulisan maneh.</li><br/>
        <li><strong>Ngowahi</strong> mbukak wilayah kerja petunjuk kustom.</li><br/>
        <li><strong>Dasbor</strong> nuduhake informasi panggunaan lan biaya.</li><br/>
        <li><strong>Setelan</strong> mbukak panel setelan.</li><br/>
        <li><strong>Riwayat</strong> nuduhake riwayat panggunaan kalebu teks input lan output.</li><br/>
        <li><strong>Pangguna</strong> nuduhake jeneng pangguna sing lagi mlebu (mung versi wèb).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Gawan Atas

Gawan ndhuwur owah-owahan manut saka taman ngendi sampeyan nalika nglebokake app.

- Ing sisih kiwa, nuduhake jeneng kaca saiki.
- Ing sisih tengen, nuduhake **pemilih model** lan tombol **Basa Antarmuka**.

**Pemilih model** ngidini sampeyan milih mesin AI endi sing bakal digunakake kanggo tugas saiki.

  ![Pemilih model](../images/screenshots/jv/model-selector.png)

Sawetara model gratis bisa uga ora ana saben-saben—kadhangkala mlebu offline utawa duwe batas panggunaan. Mesthi wae, app bakal sacara otomatis mbusak model iku saka dhaptar sing kasedhiya. Kanggo ngontrol model-endi sing muncul, menyang [**Setelane** > **Model**](#models) lan owahi dhaptar model sampeyan. 
Sampeyan uga bisa mbukak setelan model langsung kanthi klik ikon penyedia ana ngisor kiwa jeneng model ing gawan ndhuwur.

<br/>

Ikone **globe + kode basa** ngowahi basa antarmuka app, dudu menu lan tombol. Iki ora ngganti basa terjemahan sing digunakake ing **Terjemahan**.

  ![Pemilih basa antarmuka](../images/screenshots/jv/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panel input lan output

Kabeh workspace biasane nggunakake panel **Input** kiwa lan panel **Output** tengen.

Sing saben panel uga nuduhake:

| **Input**                                                          | **Output**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Jumlah karakter<br/>- Jumlah tembung <br/>- Jumlah paragraf   <br/> | - Durasi tugas<br/>- **TPS** (token saben detik)<br/>- Jumlah karakter, tembung, lan paragraf<br/>- Model sing digunakake |


Yen sampeyan penasaran karo istilah teknise:

- **Token** tegese cekelan cilik saka teks. Sampeyan bisa mikir iku minangka bagéyan tembung utawa tembung cekak.
- **TPS** tegese pirang token teks sing diolah dening model saben detik.

<br/>

Sampeyan uga bisa ngawasi biaya saben operasi (yen kasedhiya) lan total biaya, kanthi mbukak pilihan `Tuduhna informasi biaya ing tindakan` ing [**Setelane** > **Setelan Umum**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Terjemahan

Gunakake **Terjemahan** nalika sampeyan pengin ngedol teks saka siji basa menyang basa liyane.

![Workspace Terjemahan](../images/screenshots/jv/translate.png)

<br/>

<a id="translate-text"></a>
### Terjemahake Teks

1. Bukak **Terjemahan**.
2. Pilih basa ing **Saka**.
3. Pilih basa ing **Menyang**.
4. Pilih model ing gawan atases.
5. Ketik utawa tempel teks menyang **Input**.
6. Klik **Terjemahkan**.
7. Maca asil ing **Output**.
8. Gunakake tombol salin nalika pengin nyalin asil.

<br/>

<a id="language-selection"></a>
### Pemilihan Basa

- **Saka** bisa dadi basa tartamtu utawa **Deteksi Basa**.
- **Menyang** iku basa sing pengin sampeyan minangka asil.

**Basa utama** sing dipilih muncul ing bagéyan atas dhaptar. Sampeyan bisa ngatur iki ing [**Setelan** > **Basa**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Setelan terjemahan sing migunani

Ing [**Setelan** > **Setelan Umum**](#general-settings), sampeyan bisa ngowahi cara pangoprasiane terjemahan:

- **Terjemahan otomatis nalika nempel** bakal nglakokake terjemahan sawise sampeyan nempel teks.
- **Salin asil menyang papan nempel otomatis** nyalin asil sacara otomatis sawise tugas rampung.
- **Terjemahan riel-time (nalika ngetik)** nlakokake terjemahan nalika sampeyan ngetik.
- **Batas wektu (ms)** nguwasani suwe app nunggu sadurunge nglakokake terjemahan riel-time.
- **Enter** nguwasani apa sing kelakon nalika sampeyan tekan `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Tulis Maneh

Gunakake **Nulis Maneh** nalika sampeyan pengin ngganti gaya basa tanpa ngowahi tegese utama.

![Workspace Nulis Maneh](../images/screenshots/jv/rewrite.png)

Iki migunani kanggo:

- mbenakake ejaan lan tata basa
- nggawe teks luwih resik
- nggawe teks luwih resmi utawa kurang resmi
- ngendhakake utawa mbukak teks
- nggawe teks kaya luwih teknis

<br/>

> 💡 **WENING**<br/>
> Nalika sampeyan nggunakake mode "**Mriksa Ejaan & Tata Basa**", tombol `Tuduhna owah-owahan` muncul ing panel output.
> Klik tombol iku kanggo mangkat/mengunci tampilan koreksine, munculake utawa ndhelikake owah-owahan tartamtu sing dipigunakake ing teks sampeyan.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Ngowahi

Gunakake **Ngowahi** nalika sampeyan pengin AI nglakoni sétya dhéwé.

![Bidang kerja Ngowahi](../images/screenshots/jv/transform.png)

Iki minangka bagéyan aplikasi sing paling fleksibel. Sampeyan bisa nggunakake kanggo tugas-tugas kaya:

- maringkat cathetan
- ngowahi tèks kasar dadi email sing rapi
- ngekstrak titik-titik utama
- ngowahi tèks dadi format tartamtu
- kabeh kagiatan sétya liya karo tèks input

<br/>

<a id="run-an-existing-prompt"></a>
### Mlakokake prompt sing ana

1. Bukak **Ngowahi**.
2. Pilih prompt saka dhaptar prompt.
3. Yen kotak basa **Sasaran** metokake, pilih basa menawa dikarepake.
4. Ketik utawa tancepake tèks menyang **Input**.
5. Klik **Ngowahi**.
6. Maca asilé ing **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Menawa durung duwé prompt

Yen dhaptar prompt sampeyan kosong, klik **Miwiti conto prompt**. Iki nambahaké conto sing wis dijupuk supaya sampeyan bisa miwiti kanthi cepet.

<br/>

> ℹ️ **CATETAN**<br/>
> Conto prompt diwènèhaké ing basa Inggris. Sawisé diwaca, sampeyan bisa nyunting prompt lan nggunakake **Terjemahaké prompt** kanggo ngowahi menyang basa sampeyan.

<br/>

<a id="create-a-prompt-quickly"></a>
### Gawe prompt kanthi cepet

Cara paling cepet kanggo gawé prompt yaiku:

1. Klik **Prompt éwan**.
2. Klik **Gawé prompt**.
3. Jlèntrèhaké apa sing dijaluk saka prompt kasebut.
4. Pilih modhèl.
5. Biyèn aplikasi gawé rancangan kanggo sampeyan.
6. Priksa rancangane lan klik **Simpen**.

![Gawe prompt](../images/screenshots/jv/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Nyunting prompt

Nalika sampeyan gawé utawa nyunting prompt, éditoré metokake ing kiwa lan wewengkon uji coba muncul ing tengen.

![Éditor prompt Ngowahi](../images/screenshots/jv/transform-prompt-edit.png)

Bidang utamane yaiku:

- **Jeneng prompt**: jeneng sing ditampilake ing dhaptar prompt.
- **Petunjuk prompt (opsional)**: pratandha cendhak sing ditampilake marang panganggo nalika mlakokake prompt.
- **Peran Modhèl**: peran utama sing dipasrahake marang AI, kaya 'Sampeyan asistèn sing mbantu.'
- **Petunjuk Modhèl (siji saben baris)**: aturan khusus sing dijaluk AI diikuti.
- **Pratélék asil**: tembung cendhak sing njlèntrèhaké asilé, kaya 'ringkesan' utawa 'nulis manèh'.
- **Suhu (0.0 → 1.0)**: carane modhèl bakal tumindak; deleng ngisor iki.
- **Njaluk basa sasaran**: nambahaké pamilah basa sasaran nalika ngeksekusi prompt.

Yen istilah téknis **Suhu** anyar kanggo sampeyan, pikirke kaya:

- Suhu **luwih rendah** menehi asil sing luwih tetep lan luwih bisa diprediksi.
- Suhu **luwih dhuwur** menehi macem-macem lan kreatifitas liyane.

Sampeyan uga bisa nggunakake:

- **`Gawé prompt`** kanggo gawé rancangan anyar saka pratélan sederhana
- **`Mbenakake prompt`** kanggo ngrapike prompt sing ana
- **`Terjemahaké prompt`** kanggo nglebokake lapangan prompt

<br/>

> ⚠️ **PÉRINGATAN**<br/>
> Klik **`Simpen`** sadurungé sampeyan klik **`Bali menyang Mlaku`**. Yen bali tanpa nyimpen, owah-owahane bakal ilang.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Uji coba prompt sadurungé digunakake

Panel uji coba ing tengen mbisakake sampeyan nyoba prompt karo tèks conto sadurungé digunakake ing karya saben dina.

Iki migunani nalika:

- sampeyan lagi nggawé prompt anyar
- sampeyan lagi ngbandhingake loro vèrsi prompt
- sampeyan pengin mriksa nada, dawa, utawa format asil

<br/>

> ℹ️ **CATETAN**<br/>
> Sampeyan bisa ngekspor lan ngimpor prompt sing wis disimpen ing [**Setélan** > **Prompt Ngowahi**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Dhasbor

Gunakake **Dhasbor** kanggo ndeleng sepira akeh sampeyan nggunakake aplikasi lan rega (kanggo modhèl mbayar).

![Ringkesan Dhasbor](../images/screenshots/jv/dashboard-summary.png)


<br/>

> ℹ️ **CATETAN**<br/>
> Yen mung nggunakake modhèl gratis, chart sing ana gandhèngan karo rega bakal kosong. 

<br/>

<a id="filter-the-data"></a>
### Saring data

Gunakake tombol saring ing ndhuwur kanggo ngowahi rentang wektu.

![Saringan Dhasbor](../images/screenshots/jv/dashboard-filter.png)

<br/>

> ℹ️ **CATETAN**<br/>
> Saringan **Panganggo** mung katon kanggo administrator ing versi wéb. Panganggo biasa ora bakal weruh saringan iki, lan ora kasedhiya ing aplikasi dhésktop.

<br/>

<a id="dashboard-tabs"></a>

### Tab Buku Induk

- **Ringkasan** menehi tinjauan babagan panggunaan lan biaya.
- **Dening Panggunaan** mbagi aktivitas miturut basa penerjemahan, mode nerulis maneh, lan prompt owah-owahan.
- **Dening Model** nuduhake model sing digunakake lan biaya saben.
- **Dening Dina** nuduhake total saben dina.
- **Kabeh Panggilan** nuduhake riwayat panjalukan lengkap lan ngidinake ekspor data.

<br/>

<a id="export-data"></a>
### Ekspor data

Tabel buku induk bisa ngekspor data ing:

- **JSON**
- **CSV**
- **XLSX**

Fitur iki migunani menawa sampeyan pengin mariksani aktivitas di luar aplikasi utawa nuduhake laporan.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Busak rekaman sing disimpen kanggo model

Ing **Dening Model** utawa **Kabeh Panggilan**, sampeyan bisa mbusak rekaman sing disimpen kanggo model kanthi klik ikon "tempahe sampah".

> ⚠️ **PERINGATAN**<br/>
> Mbusek rekaman sing disimpen ora bisa dibatalake. Gunakna mung yen yakin yen riwayat kuwi ora dibutuhake maneh.

Kanggo mbusak kabeh data utawa mbusak rekaman adhedhasar umur data, menyang [**Setelan** > **Pelacakan Biaya**](#cost-tracking). Kene sampeyan bakal nemokake pilihan kanggo mbusak kabeh data sing disimpen utawa mung data sing umure luwih tuwa tinimbang tanggal tartamtu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Riwayat

Klik **Riwayat** kanggo ndeleng riwayat tindakan sampeyan ing **Transrewrt**, kalebu input lan output saben operasi.

![Kaca Riwayat](../images/screenshots/jv/history.png)

<br/>

<a id="filter-the-history"></a>
### Saring data

**Riwayat** nggunakake filter sing padha karo kaca **Buku Induk**. Gunakna kanggo milih wektu tampilan.

![Filter Buku Induk](../images/screenshots/jv/dashboard-filter.png)

<br/>

> ℹ️ **CATETAN**<br/>
> Filter **Pangguna** mung katon kanggo administrator ing versi web. Pangguna biasa ora bakal weruh filter iki, lan ora kasedhiya ing aplikasi desktop.

<br/>

<a id="export-history-data"></a>
### Ekspor data riwayat

Kaca riwayat bisa ngekspor data sing disaring ing:

- **JSON**
- **CSV**
- **XLSX**

Fitur iki migunani menawa sampeyan pengin mariksani aktivitas di luar aplikasi utawa nuduhake laporan.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Setelan

Bukak **Setelan** saka sisih kanggo nemtokake cara aplikasi dirancang.

Tab sing kasedhiya gumantung marang platform lan peran sampeyan:

  | Tab               | Desktop | Web (admin) | Web (pangguna biasa) |
  |-------------------|:-------:|:-----------:|:--------------------:|
  | Setelan Umum      |   ya    |     ya      |          ya          |
  | Model             |   ya    |     ya      |          ya          |
  | Basa              |   ya    |     ya      |          ya          |
  | Pelacakan Biaya   |   ya    |     ya      |           —          |
  | Prompt Owah-owahan|   ya    |     ya      |          ya          |
  | Pangguna          |    —    |     ya      |           —          |
  | Konfigurasi API   |   ya    |     ya      |           —          |
  | Mengenai          |   ya    |     ya      |          ya          |

<br/>

> ℹ️ **CATETAN**<br/>
> Ing versi web, saben pangguna duwe konfigurasi dhewe. Setelan kaya model, basa, pilihan umum, lan prompt owah-owahan disimpen saben pangguna. Owah-owahan sing digawe ora mengaruhi pangguna liyane.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Setelan umum

Gunakna **Setelan Umum** kanggo ngatur tumindak nalika ngetik, apakah rincian eksekusi disimpen kanggo **Riwayat**, lan tampilan.

**Tumindak**

- **Tumindak ENTER** milih apa `Enter` ngrunekake tugas utawa ngetik baris anyar.
- **Terjemahan otomatis nalika nyandhang** miwiti penerjemahan nalika sampeyan nyandhang teks.
- **Nyalin otomatis asil menyang clipboard** nyalin asil sing sukses sacara otomatis.
- **Penerjemahan nyata (nalika ngetik)** menerjemahake semono ngetik.
- **Wektu tunggu (ms)** ngatur wektu tunggu kanggo terjemahan nyata.

**Riwayat**

- **Simpen riwayat eksekusi** ngatur apa saben penerjemahan, nulis maneh, lan ngowahi nyimpen teks **input lan output** kanggo tampilan [**Riwayat**](#history) ing sisih. Mateni fitur iki bakal njaluk konfirmasi; menawa disetujui, teks riwayat sing disimpen bakal dihapus saka basis data.
- **Busak data riwayat** ngidinake sampeyan mbusak teks sing disimpen adhedhasar umur (contone sing umure luwih saka sawetara wulan, utawa **kabeh data (bening)**) nggunakake **Busak data**. Iki namung mengaruhi teks eksekusi sing disimpen kanggo tampilan **Riwayat**; **ora** mbusak total biaya utawa panggunaan. Kanggo mbusak utawa ngrusak data **biaya**, gunakna [**Setelan** > **Pelacakan Biaya**](#cost-tracking).

**Penampilan**

- **Tampilake informasi biaya ing tindakan** ngatur tampilan biaya saben operasi (yen kasedhiya) lan total biaya ing panel output Terjemahake, Nulis Maneh, lan Ngowahi.
- **Digit pecahan biaya** ngganti cara tampilan angka desimal biaya.
- **Kanggo web mung:** **tampilake pinggiran ing saubengé aplikasi** nambah ruang ekstra ing saubengé antarmuka.
- **Kulawarga Aksara** ngganti jinis huruf ing panel teks.
- **Ukuran** ngganti ukuran huruf.


<br/>

<a id="models"></a>

### Model

Gunakake **Setelan** > **Model** kanggo milih model sing katon ing toolbar.

![Setelan tab Model](../images/screenshots/jv/settings-models.png)

Kaca iki duwe rong dhaptar:

- **Model sing Kasedhiya** ing sisih kiwa
- **Model sing Dipilih** ing sisih tengen

Kontrol sing migunani kalebu:

- **Golek model...** kanggo nemokake model miturut jeneng
- **Chip Provider** kanggo mungkasi dhaptar dadi siji mesin (OpenRouter, OpenAI, Ollama, …)
- **Gratis Mung** kanggo nuduhake mung model gratis
- **Segerake** kanggo ngunggah maneh dhaptar
- **Bukak Kabeh** lan **Tutup Kabeh** nalika ngurutake miturut provider

ID model kalebu awalan provider (contone `openrouter/…` vs `openai/…`). Badge kaya **OpenAI (OpenRouter)** vs **OpenAI (langsung)** nuduhake carane lalu lintas dikirim.

> ℹ️ **CATETAN**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) iku model router, dudu model chat umum: wangsulane yaiku JSON sing nggambarake badan panjaluk API OpenRouter (contone array `requests` karo `model` lan `messages`). Yen digunakake kanggo **Terjemahake**, **Tulis Maneh**, utawa **Ubang**, panel metu bakal nuduhake JSON kuwi tinimbang teks rampung. Pilih model teks biasa kanggo tugas-tugas kasebut. Delengen [kaca model Body Builder](https://openrouter.ai/openrouter/bodybuilder) ing OpenRouter.

Tindakan:

 - Kanggo nambah model, klik **Tambah** utawa ing endi wae ing entri.

 - Kanggo mbusak model, klik **X** ing sabanjure ing **Model Sing Dipilih** utawa **Dipilih** ing entri ing Model Kasedhiya.

 - Kanggo mbusak dhaptar, klik **Batal Pilih kabeh**. Model gratis sing dibutuhake bakal tetep ana ing dhaptar.

<br/>

> ℹ️ **CATETAN**<br/>
> Yen sampeyan ora pengin nambah kredit menyang OpenRouter langsung, wiwiti kanthi ngaktifake **Mung Gratis** lan milih model gratis (ora perlu kartu kredit). Sampeyan uga bisa nggunakake Ollama kanggo ngjalanake model lokal tanpa kunci API.

<br/>

<a id="languages"></a>
### Basa

Gunakake **Setelan** > **Basa** kanggo ngatur dhaptar basa sing digunakake ing aplikasi.

- **Basa utama** dikaitake ing pucuk dhaptar basa ing **Terjemahake** lan **Ubang**.
- **Basa khusus** ngidini sampeyan nambah basa sing ora kasebut ing dhaptar bawaan.

Yen sampeyan nambah basa khusus, basa kasebut bakal katon ing pamilih basa bebarengan karo pilihan bawaan.

<br/>

<a id="cost-tracking"></a>
### Pelacakan biaya

Gunakake **Setelan** > **Pelacakan Biaya** kanggo ngatur informasi biaya.

- **Total Biaya** nuduhake total nganti saiki.
- **Salin Nilai** nyalin total menyang clipboard.
- **Setel Ulang Biaya** ngreset total nyimpen dadi nol.
- **Sinkronake karo panggunaan kunci API** nyetel total supaya cocog karo panggunaan sing dilapurake dening akun OpenRouter sampeyan (mung OpenRouter).
- **Panggunaan Kunci API** nuduhake rincian panggunaan OpenRouter, yen kasedhiya.
- **Hapus data biaya** mbusak kabeh data, utawa mung entri sing luwih tuwa saka tanggal sing dipilih.

**Pelacakan biaya:** Nalika sampeyan nggunakake model OpenRouter, aplikasi nuduhake panggunaan lan mbuwang biaya sabeneripun adhedhasar informasi biaya saka OpenRouter. Kanggo kabeh provider liyane, aplikasi ngira-ngira biaya nggunakake rega sing diterbitake dening OpenRouter, yen rega ora kasedhiya, perkiraan kasebut bisa uga nol.

<br/>

> ℹ️ **CATETAN**<br/>
> **Saben nilai biaya mung perkiraan kanggo referensi sampeyan dhewe wae, dudu panyataan tagihan resmi.**


<br/>

> ⚠️ **PERINGATAN**<br/>
> Panghapusan data ora bisa dibatalake. Sadurunge mbusak, pasthekake kanggo nyadhiyakake cadangan data utawa ekspor liwat [**Riwayat**](#history) utawa [**Dasbor** > **Kabeh Panjaluk**](#dashboard-tabs), yen ora data bakal ilang permanen. Kabeh riwayat input/ouput sing gegandhengan karo saben entri panjaluk API uga bakal dihapus.

<br/>

<a id="transform-prompts"></a>
### Prompt Ubahe

Gunakake **Setelan** > **Prompt Ubahe** kanggo ngatur prompt ing massa.

Sampeyan bisa:

- nimbang prompt sing disimpen
- mbusak prompt
- ngimpor prompt saka berkas
- mengekspor prompt kanggo cadangan utawa dienggo bareng

<br/>

<a id="users"></a>
### Pangguna

Gunakake **Pangguna** kanggo ngatur akun pangguna ing versi web. Sampeyan bisa nambah pangguna, nganyari rinciane, ngeset maneh sandhi, lan mbusak akun.

<br/>

<a id="api-config"></a>
### Konfigurasi API

Provider sing didhukung yaiku: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, lan **Ollama** (model lokal liwat URL dhasar). Sampeyan mung kudu ngonfigurasi provider sing digunakake.

**Aplikasi web: mung admin**

Kunci API dikonfigurasi liwat variabel lingkungan sistem utawa Docker — ora dimasukkan ing UI web. Kaca iki nuduhake provider sing duwe kunci dikonfigurasi lan ngidini sampeyan nyoba saben kanthi klik tombol **`Test`**.

<br/>

> ℹ️ **CATETAN**<br/>
> Kanggo ngganti kunci API, owahi variabel lingkungan ing konfigurasi sistem utawa Docker lan restart server utawa wadah.

<br/>

**Aplikasi desktop**

Gunakake **Konfigurasi API** kanggo nyimpen kunci API kanggo saben provider sing digunakake. Kanggo Ollama, lebokna **URL dhasar** tinimbang kunci API.


<br/>

> 💡 **Tip** <br/>
> Yen sampeyan ora pengin nggunakake kunci API utawa mbayar panggunaan, sampeyan bisa [unduh Ollama](https://ollama.com) lan nggulung model (kaya `translategemma:4b`) lokal ing mesin sampeyan gratis. Alternatif, sampeyan bisa nggawe akun OpenRouter gratis (ora perlu kartu kredit) kanggo nggunakake model gratis, utawa entuk kunci API gratis saka Cerebras, Google, Groq, utawa Mistral AI.

<br/>

- Tambahake mung provider sing dibutuhake. Ing **Setelan** > **Model**, saben id model diwiwiti karo provider (contone `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Kanggo nambah kunci API, lebokna nilai ing kotak teks lan klik **`Simpen`**. Kanggo ngganti kunci sing ana, klik **`Sunting`**. Kanggo ngonfirmasi yen kunci bisa digunakake, klik **`Tes`**. Kanggo URL dhasar Ollama, tansah klik **`Tes`** kanggo mriksa koneksi.

<br/>

> ℹ️ **CATETAN**<br/>
> Sampeyan ora bisa ndeleng nilai kunci API sing saiki. Sampeyan mung bisa nggantine nggunakake tombol **`Sunting`**. 
> Kunci API disimpen kanthi dienkripsi ing konfigurasi.

<br/>

<a id="about"></a>

### Ngenani

Tab **Ngenani** nampilaké:

- jeneng aplikasi
- nomor vèrsi
- tanggal pangoprasian
- pranala menyang repositori proyèk

<br/><br/>

<a id="common-issues"></a>
## Masalah umum

Yèn ana sing ora mlaku kaya sing dikarepake, priksa poin-poin ing ngisor iki luwih dhisik.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikasi ora nindakake penerjemahan, nulis maneh, utawa ngowahi tèks

Priksa menawa:

- panjenengan wis milih modhèl ing bilah gawan
- paling ora siji modhèl kasebut ana ing [**Setelan** > **Modhèl**](#models)
- tataan API panjenengan wis mlaku kanthi bener

Yèn nggunakake aplikasi desktop:

1. Lakokna [**Setelan** > **Konfigurasi API**](#api-config).
2. Priksa manawa paling ora siji kunci API wis disimpen.
3. Klik **Uji** sakamping panyedhiya kanggo mastekake yèn kunciné wis mlaku.

<br/>

<a id="the-model-list-is-empty"></a>
### Dhaftar modhèl kosong

Bukak [**Setelan** > **Modhèl**](#models) lan klik **Ségarake**.

Yèn perlu:

- goleki modhèl
- aktifake **Mung Gratis**
- tambahaké sawiji utawa luwih modhèl menyang **Modhèl sing Dipilih**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Asilé mbokmenawa mblabar utawa larang banget

Coba salah siji utawa kabèh cara ing ngisor iki:

- pilih modhèl liya
- gunakaké input sing luwih cendhak
- mateni **Terjemahan Real-time (nalika ngetik)** ing [**Setelan** > **Setelan Umum**](#general-settings)
- gunakaké modhèl gratis kanggo tugas sederhana (deleng [Modhèl](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Antarmuka nganggo basa sing ora kena

Klik ikon globe ing [bilah gawan](#toolbar) lan pilih **Basa Antarmuka** sing diidèni.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Tèks-é kecil banget utawa angel diwaca

Bukak [**Setelan** > **Setelan Umum**](#general-settings) lan owahi:

- **Jinis Huruf**
- **Ukuran**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Grafik Dhasbor kosong

Iki lumrah yèn:

- panjenengan mung nggunakake **modhèl gratis** (grafik biaya bakal kosong)
- **saringan wektu** sing dipilih ora nyakup periode nalika ana panggilan — coba **Kabèh** kanggo priksa

Yèn grafik isih kosong sawisé milih **Kabèh**, mastekake yèn ana panggilan sing katon ing [**Riwayat**](#history) utawa ing tab **Kabèh Panggilan**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Biaya nuduhaké "ora kasedhiya" utawa rada salah

Yèn nggunakake modhèl liwat **OpenRouter**, aplikasi nuduhaké dana nyata sing dilapuraké déning OpenRouter.

Kanggo **panyedhiya liya** (OpenAI langsung, Anthropic langsung, dst.), biaya diestimasi saka data rega sing diterbitaké déning OpenRouter. Yèn ora ana rega sing cocog kanggo modhèl kasebut, biayane bakal nuduhaké **ora kasedhiya** lan ora ditambahaké menyang total mburiné.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Total biaya ora cocog karo tagihan panyedhiyane

Saben angka biaya ing aplikasi iki mung **dugaan minangka rujukan**, dudu laporan tagihan resmi.

Kanggo entuk total sing luwih cedhak karo panggilaan OpenRouter sing nyata, bukak [**Setelan** > **Pelacakan Biaya**](#cost-tracking) lan klik **Sinkronake karo panggunaan kunci API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Kaca Riwayat ilang saka bilah sisih

**Simpen riwayat eksekusi** mbokmenawa wis dipatèni. Bukak [**Setelan** > **Setelan Umum**](#general-settings) lan aktifna. Dicathet yèn nyaktifaké ora bakal mulihaké data riwayat sing wis diilangké sadurungé.

<br/>

<a id="web-app-session-expired"></a>
### Aplikasi web: dialihaké menyang kaca login kanthi ora dikarepake

Sesi panjenengan mbokmenawa wis kadaluarwektu. Mlebu manèh. Yèn kerep kedaden, priksa konfigurasi server kanggo setelan urip sesi.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Dhasbor ora nuduhaké data kanggo panganggo liyané (web)

Mung **administrator** sing bisa ndeleng data kabèh panganggo liwat saringan **Panganggo**. Panganggo biasa mung weruh aktivitas dhéwé miturut rancangane.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Aku ngowahi prompt lan editan ilang

Sawisé nyunting prompt, tansah klik **Simpen** sadurungé klik **Bali menyang Run**.

<br/><br/>

<a id="quick-tips"></a>
## Tip cepet

- Miwiti karo [**Terjemahake**](#translate) kanggo mastekake yèn tataan panjenengan bisa mlaku sadurungé pindah menyang [**Tulis Maneh**](#rewrite) utawa [**Ngowahi**](#transform).
- Gunakaké [**Tulis Maneh**](#rewrite) kanggo pencerahan tèks saben dina.
- Gunakaké [**Ngowahi**](#transform) nalika panjenengan perlu alur kerja sing bisa diulang kanggo tugas tartamtu.
- Gunakaké [**Dhasbor**](#dashboard) yèn panjenengan pengin ngawasi panggunaan lan biaya.
- Gunakaké [**Riwayat**](#history) kanggo nela asil operasi kepungkur lan tèks lengkap input/ouput-é.
- Ekspor prompt kanthi rutin yèn panjenengan nggawe pusthaka prompt sing pengin disimpen aman (deleng [Transformasi Prompt](#transform-prompts)) utawa yèn panjenengan pengin barengké karo liyané.

<br/><br/>

<a id="disclaimer"></a>

## Panyedhiyaa

Jeneng lan ikon produk milik saka pemiliké dhéwé lan mung dienggo kanggo tujuan idhèntifikasi. Saperangan piranti lunak iki ora ana hubungané utawa ora direkomendasi déning merek-merek sing wis disebutaké.

<br/><br/>

<a id="license"></a>
## LiseNSi

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Lisensi Apache 2.0](LICENSE)