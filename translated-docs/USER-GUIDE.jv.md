---
translation_last_updated: '2026-04-27T11:41:50.613Z'
source_file_mtime: '2026-04-27T11:40:03.716Z'
source_file_hash: 3ef12cc6f8f767a9d46f42d5aa1574d8a35bd929e8f910c43d72dd46dd68033d
translation_language: jv
source_file_path: USER-GUIDE.md
translation_models:
  - openai/gpt-4o-mini
  - qwen/qwen3-235b-a22b-2507
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Pandhuan Pangguna

<br/>

<a id="introduction"></a>
## Pambuka

Transrewrt mbantu sampeyan ngolah tèks kanthi telung cara utama:

- **Terjemahake** - ngowahi tèks saka siji basa menyang basa liya.
- **Tulis ulang** - ngowahi gaya tèks kanthi cara liya, kaya luwih cetha, luwih cendhak, utawa luwih formal.
- **Ubah** - ngolah tèks nggunakake instruksi AI khusus sing diarani prompt.

<br/>

Pandhuan iki nerangake carane nggunakake aplikasi sawise diinstal lan diaktifake. Kanggo langkah instalasi, deleng **[README](README.jv.md)** utama.

<br/>

> ℹ️ **CATETAN**<br/>
> Transrewrt kasedhiya minangka aplikasi desktop kanggo Windows lan Linux, lan minangka aplikasi web kanggo dhewe. Pandhuan iki fokus marang panggunaan saben dina aplikasi kasebut. Yen ana sing mung lumrah kanggo siji versi, bakal ditandhani kanthi cetha.

<small>**Macaa ing basa liya:** </small>

<small id="lang-list">[English](../USER-GUIDE.md) · [Português (BR)](./USER-GUIDE.pt-BR.md) · [العربية](./USER-GUIDE.ar.md) · [বাংলা](./USER-GUIDE.bn.md) · [Català](./USER-GUIDE.ca.md) · [中文 (中国大陆)](./USER-GUIDE.zh-CN.md) · [中文 (台灣)](./USER-GUIDE.zh-TW.md) · [Hrvatski](./USER-GUIDE.hr.md) · [Čeština](./USER-GUIDE.cs.md) · [Nederlands](./USER-GUIDE.nl.md) · [English](./USER-GUIDE.en-US.md) · [Tagalog](./USER-GUIDE.tl.md) · [Français](./USER-GUIDE.fr.md) · [Deutsch](./USER-GUIDE.de.md) · [Ελληνικά](./USER-GUIDE.el.md) · [हिन्दी](./USER-GUIDE.hi.md) · [Magyar](./USER-GUIDE.hu.md) · [Italiano](./USER-GUIDE.it.md) · [日本語](./USER-GUIDE.ja.md) · [한국어](./USER-GUIDE.ko.md) · [Bahasa Melayu](./USER-GUIDE.ms.md) · [فارسی](./USER-GUIDE.fa.md) · [Polski](./USER-GUIDE.pl.md) · [Basa Jawa](./USER-GUIDE.jv.md) · [Português](./USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](./USER-GUIDE.pa.md) · [Română](./USER-GUIDE.ro.md) · [Русский](./USER-GUIDE.ru.md) · [Slovenčina](./USER-GUIDE.sk.md) · [Español](./USER-GUIDE.es.md) · [Kiswahili](./USER-GUIDE.sw.md) · [Svenska](./USER-GUIDE.sv.md) · [తెలుగు](./USER-GUIDE.te.md) · [ไทย](./USER-GUIDE.th.md) · [Türkçe](./USER-GUIDE.tr.md) · [Українська](./USER-GUIDE.uk.md) · [Tiếng Việt](./USER-GUIDE.vi.md)</small>

<small>

> **Cathetan bab terjemahan UI lan dokumentasi:** Kabeh basa antarmuka kajaba Basa Inggris (UK) asli 
> diterjemahake nggunakake model AI; ukara bisa ora tepat utawa ngemot kesalahan.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tabel Isi**

- [Sadurunge miwiti](#before-you-start)
  - [Carane entuk kunci API OpenRouter gratis (aplikasi desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Mulai](#getting-started)
- [Bagéyan utama jendhela](#main-parts-of-the-window)
  - [Sidebar](#sidebar)
  - [Toolbar](#toolbar)
  - [Panel input lan output](#input-and-output-panels)
- [Terjemahan](#translate)
  - [Terjemahake tèks](#translate-text)
  - [Pilihan basa](#language-selection)
  - [Setelan terjemahan sing migunani](#helpful-translation-settings)
- [Tulis ulang](#rewrite)
- [Ubah](#transform)
  - [Jalankan prompt sing wis ana](#run-an-existing-prompt)
  - [Yen durung duwe prompt](#if-you-have-no-prompts-yet)
  - [Gawe prompt kanthi cepet](#create-a-prompt-quickly)
  - [Sunting prompt](#edit-a-prompt)
  - [Tes prompt sadurunge digunakake](#test-a-prompt-before-using-it)
- [Dasbor](#dashboard)
  - [Saring data](#filter-the-data)
  - [Tab dasbor](#dashboard-tabs)
  - [Ekspor data](#export-data)
  - [Hapus rekaman sing disimpen kanggo model](#delete-stored-records-for-a-model)
- [Riwayat](#history)
  - [Saring data](#filter-the-data-1)
  - [Ekspor data riwayat](#export-history-data)
- [Setelan](#settings)
  - [Setelan umum](#general-settings)
  - [Model](#models)
  - [Basa](#languages)
  - [Pelacakan biaya](#cost-tracking)
  - [Prompt transformasi](#transform-prompts)
  - [Pangguna](#users)
  - [Konfigurasi API](#api-config)
  - [Tentang](#about)
- [Masalah umum](#common-issues)
  - [Aplikasi ora bisa menerjemahake, nulis ulang, utawa ngowahi tèks](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Dhaptar model kosong](#the-model-list-is-empty)
  - [Asilé alon utawa larang banget](#the-result-is-too-slow-or-too-expensive)
  - [Antarmuka nggunakake basa sing salah](#the-interface-is-in-the-wrong-language)
  - [Tèks katon cilik utawa angel diwaca](#the-text-is-too-small-or-hard-to-read)
  - [Grafik dasbor kosong](#dashboard-charts-are-empty)
  - [Biaya nuduhake "ora kasedhiya" utawa katon salah](#cost-shows-not-available-or-seems-wrong)
  - [Total biaya ora cocog karo tagihan panyedhiya](#total-cost-does-not-match-my-provider-bill)
  - [Kaca Riwayat ilang saka sidebar](#the-history-page-is-missing-from-the-sidebar)
  - [Aplikasi web: dialihake menyang kaca login kanthi ora dikarepake](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Admin web: lali utawa ilang sandhi](#web-admin-forgot-or-lost-a-password)
  - [Dasbor ora nuduhake data kanggo pangguna liya (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Aku ngowahi prompt lan kehilangan suntingan](#i-changed-a-prompt-and-lost-the-edits)
- [Tip cepet](#quick-tips)
- [Penafian](#disclaimer)
- [Lisensi](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Sadurunge miwiti

Kanggo nggunakake Transrewrt, sampeyan kudu duwe akses menyang paling sethithik siji panyedhiya AI. Panyedhiya sing didhukung yaiku: [OpenRouter](https://openrouter.ai) (sing nggabungake akeh model), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, lan [Ollama](https://ollama.com) kanggo model lokal.

Sampeyan ora kudu milih model bayar kanggo miwiti. Sawise sampeyan nambahake kunci API OpenRouter, aplikasi sacara otomatis ngaktifake pilihan OpenRouter **gratis** sing wis diintegrasikake. Iki ngidini sampeyan langsung miwiti nindakake terjemahan, nulis ulang, lan ngowahi teks. Alternatif, sampeyan uga bisa entuk kunci API gratis saka Cerebras, Google, Groq, utawa Mistral AI.

Ing basa sing gampang dimengerti:

- Sawijining **model** yaiku mesin AI sing nindakake tugas. Model kasebut dicantumake nganggo **prefiks panyedhiya** (contone `openrouter/…`, `openai/…`, `ollama/…`).
- Sawijining **kunci API** (utawa, kanggo Ollama, **URL dhasar**) yaiku cara aplikasi ngakses panyedhiya kasebut.

Yen sampeyan nggunakake **aplikasi desktop**, tambahake kunci ing [**Setelan** > **Konfigurasi API**](#api-config) kanggo saben panyedhiya sing digunakake. Kanggo panggunaan OpenRouter mung, deleng [Cara entuk kunci API](#how-to-get-an-api-key-desktop-app) ing ngisor iki. Yen sampeyan ora pengin nggunakake kunci API, sampeyan bisa nginstal Ollama (saka [ollama.com](https://ollama.com)) lan nggunakake model lokal minangka gantine, kaya contone `translategemma:4b`.

Yen sampeyan nggunakake **versi web**, pemilik server ngonfigurasi panyedhiya nganggo variabel lingkungan, dadi sampeyan ora bisa ngetik kunci API langsung ing aplikasi.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cara entuk kunci API OpenRouter gratis (aplikasi desktop)

Yen sampeyan nggunakake aplikasi desktop, tindakake langkah-langkah iki:

1. Bukak [OpenRouter](https://openrouter.ai) ing panjelajah web sampeyan.
2. Gawe akun utawa mlebu.
3. Bukak kaca [Keys](https://openrouter.ai/keys).
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
3. Yen sampeyan nggunakake **aplikasi desktop**, buka [**Setelan** > **Konfigurasi API**](#api-config), tambahake kunci API kanggo paling sethithik siji panyedhiya (contone OpenRouter), lan klik **Tes** kanggo mastekake bisa digunakake.
4. Bukak [**Setelan** > **Model**](#models) lan tambahake siji utawa luwih model menyang **Model Dipilih**.
5. Bukak [**Setelan** > **Basa**](#languages) lan pilih **Basa utama** sampeyan yen pengin basa sing paling asring digunakake katon dhisik.
6. Pergi menyang **Terjemahake** lan jalanake terjemahan sederhana kanggo mastekake kabeh bisa digunakake.
7. Sawise iku bisa digunakake, coba **Tulis ulang** lan banjur **Ubah**.

Urutan iki penting. Iki nyegah masalah paling umum nalika nggunakake pisanan: nyoba nindakake tugas sadurunge aplikasi duwe koneksi API sing bisa digunakake utawa model sing dipilih.

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

Gunakake sidebar kanggo pindhah-pindah ing aplikasi. Sampeyan bisa nutup sidebar kanggo entuk ruang luwih akeh kanthi klik ikon ing samping logo aplikasi.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/jv/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Terjemahake</strong> mbukak workspace terjemahan.</li><br/>
        <li><strong>Tulis ulang</strong> mbukak workspace panulisan maneh.</li><br/>
        <li><strong>Ubah</strong> mbukak workspace prompt khusus.</li><br/>
        <li><strong>Dasbor</strong> nuduhake informasi panggunaan lan biaya.</li><br/>
        <li><strong>Setelan</strong> mbukak panel setelan.</li><br/>
        <li><strong>Riwayat</strong> nuduhake riwayat panggunaan bebarengan teks input lan output</li><br/>
        <li><strong>Pangguna</strong> nuduhake jeneng pangguna sing lagi mlebu (khusus web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Toolbar

Toolbar owah-owahan sithik gumantung saka lokasi sampeyan ing aplikasi.

- Ing sisih kiwa, nuduhake jeneng kaca saiki.
- Ing sisih tengen, nuduhake **pemilih model** lan kontrol **Basa antarmuka**.

Pemilih **model** ngidini sampeyan milih mesin AI sing arep digunakake kanggo tugas saiki.

![Model selector](../images/screenshots/jv/model-selector.png)

Sawetara model gratis bisa uga ora tansah kasedhiya—kadhangkala offline utawa duwe watesan panggunaan. Yen iki kedadeyan, aplikasi bakal sacara otomatis mbusak model kasebut saka dhaptar sing kasedhiya. Kanggo ngontrol model sing katon, menyang [**Setelan** > **Model**](#models) lan sunting dhaptar model sampeyan. 
 Sampeyan uga bisa mbukak setelan model langsung kanthi klik ikon panyedhiya ing sisih kiwa jeneng model ing toolbar.

<br/>

Ikon **globe + kode basa** ngowahi basa antarmuka aplikasi, kayata menu lan tombol. Iku ora **ngganti** basa terjemahan sing digunakake ing **Terjemahake**.

![Interface language selector](../images/screenshots/jv/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panel Input lan output

Kebanyakan workspace nggunakake panel **Input** ing kiwa lan panel **Output** ing tengen.

Saben panel uga nuduhake:

| **Input**                                                          | **Output**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Jumlah karakter <br/>- Jumlah tembung <br/>- Jumlah paragraf   <br/> | - Durasi tugas<br/>- **TPS** (token saben detik)<br/>- Jumlah karakter, tembung, lan paragraf<br/>- Model sing digunakake |

Yen sampeyan mikir babagan istilah teknis:

- **Token** tegese potongan cilik teks. Sampeyan bisa nganggep minangka bagean tembung utawa tembung cendhak.
- **TPS** tegese jumlah potongan teks sing diolah model saben detik.

<br/>

Sampeyan uga bisa ngawasi biaya saben operasi (yen kasedhiya) lan total biaya, kanthi ngaktifake pilihan `Show cost information on the actions` ing [**Setelan** > **Setelan Umum**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Terjemahake

Gunakake **Terjemahake** nalika sampeyan pengin ngowahi teks saka siji basa menyang basa liyane.

![Translate workspace](../images/screenshots/jv/translate.png)

<br/>

<a id="translate-text"></a>
### Terjemahake teks

1. Buka **Terjemahake**.
2. Pilih basa ing **Saka**.
3. Pilih basa ing **Menyang**.
4. Pilih model ing toolbar.
5. Ketik utawa tempel teks menyang **Input**.
6. Klik **Terjemahake**.
7. Maca asil ing **Output**.
8. Gunakake tombol salin menawa sampeyan pengin nyalin asil.

<br/>

<a id="language-selection"></a>
### Pemilihan basa

- **From** bisa dadi basa tartamtu utawa **Deteksi Basa**.
- **To** yaiku basa sing pengin digunakake kanggo asil.

**Basa Atas** sing dipilih katon ing bagéan ndhuwur dhaptar. Sampeyan bisa ngatur iki ing [**Setelan** > **Basa**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Setelan terjemahan sing migunani

Ing [**Setelan** > **Setelan Umum**](#general-settings), sampeyan bisa ngganti cara terjemahan ditindakake:

- **Otomatis nerjemahake nalika nempel** nglakokake terjemahan sawise sampeyan nempel teks.
- **Salin otomatis asil menyang clipboard** nyalin asil sacara otomatis sawise proses rampung.
- **Terjemahan real-time (nalika ngetik)** nglakokake terjemahan nalika sampeyan ngetik.
- **Timeout (ms)** ngatur suwe aplikasi nunggu sadurunge nglakokake terjemahan real-time.
- **Enter** ngatur apa sing kedadeyan nalika sampeyan menek `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Tulis ulang

Gunakake **Tulis ulang** nalika sampeyan pengin nambahi gaya basa tanpa ngganti teges utama.

![Rewrite workspace](../images/screenshots/jv/rewrite.png)

Iki migunani kanggo:

- ngoreksi ejaan lan tata basa (**Periksa Ejaan & Tata Bahasa**)
- njalari teks luwih cetha (**Improve Clarity**)
- sawetara versi tulisan sing béda ing siji proses (**Versi Alternatif**)
- njalari teks luwih resmi utawa luwih santai (**Formal** / **Informal**)
- ngendhakake utawa nembahake teks (**Ngendhakake** / **Nembahake**)
- njalari teks kaya luwih teknis (**Jadine Teknis**)

<br/>

> 💡 **TIP**<br/>
> Nalika sampeyan nggunakake modus "**Periksa Ejaan & Tata Bahasa**", sawijining saklar **Tampilake owah-owahan** katon ing panel output (sebelah **Salin**).
> Aktifake utawa mateni kanggo nuduhake utawa ndhelikake koreksi tartamtu sing diaplikasikake marang teks sampeyan.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Ubah

Gunakake **Ubah** nalika sampeyan pengin AI nututi dhaptar instruksi khusus.

![Transform workspace](../images/screenshots/jv/transform.png)

Iki yaiku bagéan paling fleksibel saka aplikasi. Sampeyan bisa nggunakake kanggo tugas-tugas kaya:

- ringkesan cathetan
- ngowahi teks kasar dadi email sing rapi
- mbukak poin-poin penting
- ngowahi teks dadi format tartamtu
- utawa kegiatan khusus liyane karo teks input

<br/>

<a id="run-an-existing-prompt"></a>
### Jalanke prompt sing ana

1. Buka **Ubah**.
2. Pilih prompt saka dhaftar prompt.
3. Yen kotak **Sasaran** basa muncul, pilih basa yen perlu.
4. Ketik utawa tempelna teks menyang **Input**.
5. Klik **Ubah**.
6. Deleng asilé ing **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Yen durung duwé prompt

Yen dhaptar prompt sampeyan kosong, klik **Muat contoh prompt** ing ruang Transform. Kontrol sing padha tansah kasedhiya ing [**Setelan** > **Prompt Transformasi**](#transform-prompts) ing baris ekspor/impor. Keduanya nambah conto bawaan supaya sampeyan bisa miwiti kanthi cepet.

<br/>

> ℹ️ **CATETAN**<br/>
> Contoh prompt diwenehake ing basa Inggris. Sawise muat, sampeyan bisa nyunting prompt lan nggunakake **Terjemahkan prompt** kanggo menerjemahakéé menyang basa Anda.

<br/>

<a id="create-a-prompt-quickly"></a>
### Gawe prompt kanthi cepet

Cara paling cepet kanggo nggawe prompt yaiku:

1. Klik **New prompt**.
2. Klik **Generate prompt**.
3. Jelasken apa sing pengin dilakokne dening prompt kasebut.
4. Pilih model.
5. Biyarkan aplikasi nggawe rancangan kanggo sampeyan.
6. Tinjau rancangan kasebut lan klik **Simpen**.

![Generate prompt](../images/screenshots/jv/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Sunting prompt

Sawisé sampeyan nggawe utawa nyunting prompt, éditor bakal muncul ing sisih kiwa lan wilayah tes bakal muncul ing sisih tengen.

![Transform prompt editor](../images/screenshots/jv/transform-prompt-edit.png)

Bidang utama yaiku:

- **Jeneng prompt**: jeneng sing ditampilake ing dhaftar prompt.
- **Instruksi prompt (opsional)**: cathetan cendhak sing ditampilake marang pangguna nalika njalankan prompt.
- **Peran Model**: peran kabeh sing diwenehake marang AI, kayata 'Sampeyan minangka asisten sing mbantu.'
- **Instruksi Model (siji saben baris)**: aturan khusus sing sampeyan pengin AI tundhuk.
- **Deskripsi output**: tembung cendhak kanggo nggambarake asilé, kayata 'ringkasan' utawa 'tulis ulang'.
- **Suhu (0.0 → 1.0)**: cara model bakal tumindak; deleng ing ngisor iki.
- **Mlayu basa sasaran**: nambah pamilih basa sasaran nalika prompt dijalanake.

Yen istilah teknis **Suhu** iku anyar kanggo sampeyan, pikirake kaya ngene:

- **Suhu** sing luwih rendah menehi asil sing luwih tetep lan bisa diprediksi.
- **Suhu** sing luwih dhuwur menehi macem-macem lan kreativitas sing luwih akeh.

Sampeyan uga bisa nggunakake:

- **`Generate prompt`** kanggo nggawe rancangan anyar saka jlentrehan cendhak
- **`Improve prompt`** kanggo nyempurnakake prompt sing wis ana
- **`Translate prompt`** kanggo menerjemahaké bidang prompt

<br/>

> ⚠️ **PÈRINGATAN**<br/>
> Klik **`Save`** sadurungé klik **`Back to Run`**. Yen sampeyan bali tanpa nyimpen, owah-owahane bakal ilang.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Tes prompt sakdurunge digunakake

Panel tes ing sisih tengen ngidini sampeyan nyoba prompt sampeyan nganggo teks conto sadurunge digunakake ing karya saben dina.

Iki migunani nalika:

- sampeyan lagi nyusun prompt anyar
- sampeyan lagi mbandhingake rong versi prompt
- sampeyan pengin mriksa nada, dawa, utawa format output

<br/>

> ℹ️ **CATETAN**<br/>
> Sampeyan bisa ngekspor lan ngimpor prompt sing wis disimpen ing [**Setelan** > **Prompt Transformasi**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Dasbor

Gunakake **Dasbor** kanggo ndeleng sepira akeh sampeyan nggunakake aplikasi lan biayane (kanggo model bayar).

![Dashboard summary](../images/screenshots/jv/dashboard-summary.png)

<br/>

> ℹ️ **CATETAN**<br/>
> Yen sampeyan mung nggunakake model **gratis**, jumlah **biaya** bisa nol lan ringkesan sing fokus marang biaya bisa katon kosong. Ing **Ringkasan**, **Panggunaan sakawit wektu** lan **Panggunaan miturut model** isih nuduhake **jumlah panggilan** (terjemah, tulis ulang, lan ubah) nalika ana aktivitas ing periode sing dipilih.

<br/>

<a id="filter-the-data"></a>
### Saring data

Gunakake tombol saringan ing ndhuwur kanggo ngganti wektu rentang.

![Dashboard filters](../images/screenshots/jv/dashboard-filter.png)

<br/>

> ℹ️ **CATETAN**<br/>
> Saringan **Pangguna** mung katon kanggo administrator ing versi web. Pangguna biasa ora bakal ndeleng saringan iki, lan ora kasedhiya ing aplikasi desktop.

<br/>

<a id="dashboard-tabs"></a>
### Tab Dasbor

- **Ringkasan** menehi gambaran umum babagan panggunaan lan biaya. Kalebu **Panggunaan sakawit wektu** (jumlah **panggilan** kumulatif ditumpuk saben dina kanggo terjemah, tulis ulang, lan ubah) lan **Panggunaan miturut model** (total **panggilan saben model**, kalebu transformasi).
- **Dhèk Panggunaan** ngurai aktivitas miturut basa terjemahan, modus tulis ulang, lan prompt transformasi.
- **Dhèk Model** nuduhake model apa wae sing digunakake lan biayane.
- **Dhèk Dina** nuduhake total saben dina.
- **Kabeh Panggilan** nuduhake riwayat panggilan lengkap lan ngidini sampeyan ngekspor.

<br/>

<a id="export-data"></a>
### Ekspor data

Tabel dasbor bisa ngekspor data ing:

- **JSON**
- **CSV**
- **XLSX**

Iki migunani yen sampeyan pengin ngevaluasi aktivitas njaba aplikasi utawa bareng laporan.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Hapus rekaman sing disimpen kanggo model

Ing **Dhèk Model** utawa **Kabeh Panggilan**, sampeyan bisa mbusak rekaman sing disimpen kanggo model kanthi klik ikon "tempa sampah".

> ⚠️ **PERINGATAN**<br/>
> Mbusekake rekaman sing disimpen ora bisa dibatalake. Gunakake mung yen yakin yen sampeyan ora butuh riwayat kuwi maneh.

Kanggo ngapus kabeh data utawa mbusak rekaman berdasar umur, menyang [**Setelan** > **Pelacakan Biaya**](#cost-tracking). Kene sampeyan bakal nemokake pilihan kanggo ngapus kabeh data sing disimpen utawa mung data sing umure luwih tuwa tinimbang tanggal tartamtu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Riwayat

Klik **Riwayat** kanggo ndeleng riwayat tindakan sampeyan ing **Transrewrt**, kalebu input lan output saben operasi.

![History page](../images/screenshots/jv/history.png)

<br/>

<a id="filter-the-history"></a>
### Saringan data

**Riwayat** nggunakake saringan sing padha karo kaca **Dasbor**. Gunakake kanggo milih rentang wektu.

![Dashboard filters](../images/screenshots/jv/dashboard-filter.png)

<br/>

> ℹ️ **CATETAN**<br/>
> Saringan **Pangguna** mung katon kanggo administrator ing versi web. Pangguna biasa ora bakal ndeleng saringan iki, lan ora kasedhiya ing aplikasi desktop.

<br/>

<a id="export-history-data"></a>
### Ekspor data riwayat

Kaca riwayat bisa mengekspor data sing disaring menyang:

- **JSON**
- **CSV**
- **XLSX**

Iki migunani yen sampeyan pengin ngevaluasi aktivitas njaba aplikasi utawa bareng laporan.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Setelan

Bukak **Setelan** saka sidebar kanggo ngatur cara aplikasi dianggo.

Tab sing kasedhiya gumantung marang platform lan peran sampeyan:

| Tab               | Desktop | Web (admin) | Web (pangguna biasa) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Setelan Umum  |   ya   |     ya     |        ya         |
  | Model            |   ya   |     ya     |        ya         |
  | Basa         |   ya   |     ya     |        ya         |
  | Pelacakan Biaya     |   ya   |     ya     |         -          |
  | Prompt transformasi |   ya   |     ya     |        ya         |
  | Pangguna             |    -    |     ya     |         -          |
  | Konfigurasi API        |   ya   |     ya     |         -          |
  | Tentang             |   ya   |     ya     |        ya         |

<br/>

> ℹ️ **CATETAN**<br/>
> Ing versi web, saben pangguna duwe konfigurasine dhewe. Setelan kaya model sing dipilih, basa, opsi umum, lan prompt transformasi disimpen saben pangguna. Owah-owahan sing sampeyan gawe ora mangaruhi pangguna liya.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Setelan Umum

Gunakake **Setelan Umum** kanggo ngatur perilaku ngetik, nentukake apa rincian eksekusi disimpen kanggo **Riwayat**, lan penampilan.

**Perilaku**

- **Perilaku kanggo ENTER** milih apa `Enter` ngeksekusi tugas utawa nambah baris anyar.
- **Otomatis nerjemahake nalika nempel** miwiti terjemahan sawise sampeyan nempelake teks.
- **Salin otomatis asil menyang clipboard** nyalin asil sing sukses sacara otomatis.
- **Terjemahan real-time (nalika ngetik)** menerjemahake nalika sampeyan ngetik.
- **Timeout (ms)** nentukan wektu tunggu kanggo terjemahan real-time.

**Riwayat**

- **Simpen riwayat eksekusi** ngatur apa saben terjemahan, tulis ulang, lan transformasi nyimpen **teks input lan output** kanggo tampilan [**Riwayat**](#history) ing sisih. Mateni fitur iki bakal takon konfirmasi; yen sampeyan konfirmasi, teks riwayat sing disimpen bakal dihapus saka database.
- **Hapus data riwayat** ngidini sampeyan mbusak teks sing disimpen miturut umur (contone sing wis tuwa saka sawetara wulan, utawa **kabeh data (bener-bener resik)**) nggunakake **Hapus data**. Iki mung mangaruhi teks eksekusi sing disimpen kanggo tampilan **Riwayat**; iki **ora** nghapus total biaya utawa data panggunaan. Kanggo mbusak utawa ngurangi data **biaya**, gunakake [**Setelan** > **Pelacakan Biaya**](#cost-tracking).

**Penampilan**

- **Tampilake informasi biaya ing tindakan** ngatur tampilan biaya saben operasi (yen kasedhiya) lan total biaya ing panel output Terjemahan, Tulis Ulang, lan Transformasi.
- **Digit pecahan biaya** ngganti cara tampilan desimal biaya.
- **Khusus web:** **tampilake margin ing sakeliling aplikasi** nambah ruang ekstra ing sakeliling antarmuka.
- **Famili Font** ngganti font tulisan ing panel teks.
- **Ukuran** ngganti ukuran font.

**Cadangan Konfigurasi**

- **Sertakake data panggunaan ing cadangan** - yen diaktifake, ZIP uga ngandhut riwayat eksekusi lan data panjalukan API. 
- **Cadangan konfigurasi** - nggawe siji file ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` ing UTC kanthi standar) kanthi `config.json`, `state.json`, tombol enkripsi opsional, pangguna, pilihan, prompt khusus, lan data panggunaan yen sampeyan milih. Sawise cadangan rampung, konfirmasi nuduhake jeneng file sing disimpen.
- **Pulihake saka cadangan** - mbukak **dialog konfirmasi dhisik**. Pilih file ZIP cadangan ing jero dialog (**Browse** / pemilih file utawa drag-and-drop yen didhukung), banjur priksa pilihan:
  - **Pulihake data panggunaan** - ngimpor panggunaan/riwayat saka ZIP nalika dicadangke kanthi sertakake panggunaan; tinggalake mati yen sampeyan mung pengin setelan lan prompt.
  - **Bersihke data panggunaan lawas sadurunge dipulihke** - mbusak panggunaan/riwayat sing ana ing instalasi iki sadurunge nerapake cadangan (opsional; gunakake nalika sampeyan pengin ngganti kanthi resik).

Cadangan sing digawe ing versi web utawa desktop bisa dipulihake ing versi liyane. Nalika mulihake cadangan desktop ing versi web, datane bakal dipulihake menyang pangguna administrator.

<br/>

<a id="models"></a>
### Model

Gunakake **Setelan** > **Model** kanggo milih model sing katon ing toolbar.

![Settings Models tab](../images/screenshots/jv/settings-models.png)

Kaca iki duwe loro dhaptar:

- **Model Kasedhiya** ing sisih kiwa
- **Model Dipilih** ing sisih tengen

Kontrol sing migunani kalebu:

- **Goleki model...** kanggo nemokake model miturut jeneng
- Chip **Panyedhiya** kanggo mungkasi dhaptar dadi siji mesin (OpenRouter, OpenAI, Ollama, …)
- **Mung Gratis** kanggo nuduhake mung model gratis
- **Segari** kanggo ngunggah maneh dhaptar
- **Bukak Kabeh** lan **Tutup Kabeh** nalika sampeyan nyusun miturut panyedhiya

ID model kalebu awalan panyedhiya (contone `openrouter/…` vs `openai/…`). Lencana kaya **OpenAI (OpenRouter)** vs **OpenAI (langsung)** nuduhake carane lalu lintas dikirim.

> ℹ️ **CATETAN**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) iku model router, dudu model chat umum: wangsulane yaiku JSON sing njlentrehake awak permintaan API OpenRouter (contone larik `requests` kanthi `model` lan `messages`). Yen sampeyan nggunakake kanggo **Terjemahake**, **Tulis ulang**, utawa **Ubah**, panel output bakal nuduhake JSON kuwi tinimbang teks rampung. Pilih model teks biasa kanggo tugas kasebut. Deleng [kaca model Body Builder](https://openrouter.ai/openrouter/bodybuilder) ing OpenRouter.

Tindakan:

- Kanggo nambah model, klik **Tambah** utawa ing endi wae ing entri kasebut.

- Kanggo mbusak model, klik **X** ing sisih **Model Dipilih** utawa **Dipilih** ing entri dhaptar Model Kasedhiya.

- Kanggo mbusak dhaptar, klik **Batal Pilih Kabeh**. Model gratis sing dibutuhake bakal tetep ana ing dhaptar.

<br/>

> ℹ️ **CATETAN**<br/>
> Yen sampeyan ora pengin nambah kredit menyang OpenRouter langsung, wiwiti kanthi ngaktifake **Mung Gratis** lan milih model gratis (ora perlu kartu kredit). Sampeyan uga bisa nggunakake Ollama kanggo njalankan model lokal tanpa kunci API.

<br/>

<a id="languages"></a>
### Basa

Gunakake **Setelan** > **Basa** kanggo ngatur dhaptar basa sing digunakake ing aplikasi.

- **Basa utama** dikunci ing pucuk dhaptar basa ing **Terjemahake** lan **Ubah**.
- **Basa kustom** ngidini sampeyan nambah basa sing ora ana ing dhaptar bawaan.

Yen sampeyan nambah basa kustom, bakal katon ing pamilah basa bebarengan karo pilihan bawaan.

<br/>

<a id="cost-tracking"></a>
### Pelacakan biaya

Gunakake **Setelan** > **Pelacakan Biaya** kanggo ngatur informasi biaya.

- **Total Biaya** nuduhake total sing terus tambah.
- **Salin Nilai** nyalin total menyang clipboard.
- **Atur Ulang Biaya** mbaleni total sing disimpen dadi nol.
- **Sinkronake karo panggunaan kunci API** ngatur total supaya cocog karo panggunaan sing dilaporake dening akun OpenRouter sampeyan (mung OpenRouter).
- **Panggunaan Kunci API** nuduhake rincian panggunaan OpenRouter, yen kasedhiya.
- **Hapus data biaya** mbusak kabeh data, utawa mung entri sing luwih tuwa tinimbang tanggal sing dipilih.

**Pelacakan biaya:** Nalika sampeyan nggunakake model OpenRouter, aplikasi nuduhake panggunaan lan pengeluaran nyata sampeyan adhedhasar informasi biaya saka OpenRouter. Kanggo kabeh panyedhiya liyane, aplikasi ngira-ngira biaya nggunakake rega sing diterbitake dening OpenRouter, yen rega ora kasedhiya, perkiraan bisa waé nol.

<br/>

> ℹ️ **CATETAN**<br/>
> **Kabeh angka biaya mung perkiraan kanggo referensi sampeyan waé, dudu pernyataan tagihan resmi.**

<br/>

> ⚠️ **PERINGATAN**<br/>
> Panghapusan data ora bisa dibatalake. Sadurunge mbusak, pastekake kanggo nyadhiyakake cadangan data sampeyan utawa ekspor liwat [**Riwayat**](#history) 
> utawa [**Dasbor** > **Kabeh pangelingan API**](#dashboard-tabs), yen ora bakal ilang permanen. 
> Kabeh riwayat input/output sing ana gandhengane karo saben entri pangelingan API uga bakal dihapus.

<br/>

<a id="transform-prompts"></a>
### Prompt transformasi

Gunakake **Setelan** > **Prompt Transformasi** kanggo ngatur prompt sacara massal.

Sampeyan bisa:

- mariksa prompt sing wis disimpen
- mbusak prompt
- ngimpor prompt saka file
- mengekspor prompt kanggo cadangan utawa dibagi
- muat contoh prompt menyang dhaptar prompt

<br/>

<a id="users"></a>
### Pangguna

Gunakake **Pangguna** kanggo ngatur akun pangguna ing versi web. Sampeyan bisa nambah pangguna, nganyari rincian, ngreset sandhi, lan mbusak akun.

<br/>

<a id="api-config"></a>
### Konfigurasi API

Panyedhiya sing didhukung yaiku: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, lan **Ollama** (model lokal liwat URL dhasar). Sampeyan mung kudu ngonfigurasi panyedhiya sing digunakake.

**Aplikasi web: mung administrator**

Kunci API dikonfigurasi liwat variabel lingkungan sistem utawa Docker - ora dimasukkan ing antarmuka web. Kaca iki nuduhake panyedhiya sing duwe kunci dikonfigurasi lan ngidini sampeyan nguji saben kunci kanthi klik tombol **`Test`**.

<br/>

> ℹ️ **CATETAN**<br/>
> Kanggo ngganti kunci API, ganti variabel lingkungan ing konfigurasi sistem utawa Docker lan restart server utawa wadah.

> ℹ️ **CATETAN**<br/>
> **Cadangan Konfigurasi** (deleng [**Setelan Umum** → Cadangan Konfigurasi](#general-settings)) bisa nemplak kunci panyedhiya sing wis **diselesaikan** ing jero `config.json` ZIP. Nggawe cadangan ZIP iki ora **nyalin** kunci menyang file konfigurasi permanen server - kunci aktif isih saka lingkungan lan status file sing dijelasake kono.

<br/>

**Aplikasi desktop**

Gunakake **Konfigurasi API** kanggo nyimpen kunci API kanggo saben panyedhiya sing digunakake. Kanggo Ollama, ketik **URL dhasar** tinimbang kunci API.

<br/>

> 💡 **Tip** <br/>
> Yen sampeyan ora pengin nggunakake kunci API utawa mbayar panggunaan, sampeyan bisa [ngunduh Ollama](https://ollama.com) lan mlakuake model (kaya `translategemma:4b`) sacara lokal ing mesin sampeyan kanthi gratis. Alternatif liya, sampeyan bisa nggawe akun OpenRouter gratis (ora perlu kartu kredit) kanggo nggunakake model gratis, utawa entuk kunci API gratis saka Cerebras, Google, Groq, utawa Mistral AI.

<br/>

- Tambahake mung panyedhiya sing dibutuhake. Ing **Setelan** > **Model**, saben ID model diwiwiti karo panyedhiya (contone `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Kanggo nambah kunci API, ketik nilai ing kolom teks lan klik **`Save`**. Kanggo ngganti kunci sing ana, klik **`Edit`**. Kanggo mriksa manawa kunci bisa digunakake, klik **`Test`**. Kanggo URL dhasar Ollama, tansah klik **`Test`** kanggo mriksa koneksi.

<br/>

> ℹ️ **CATETAN**<br/>
> Sampeyan ora bisa ndeleng nilai saiki saka kunci API. Sampeyan mung bisa nggantina nggunakake tombol **`Edit`**.
> Kunci API disimpen kanthi dienkripsi ing konfigurasi.

<br/>

<a id="about"></a>
### Tentang

Tab **Tentang** nampilake:

- jeneng aplikasi
- nomor versi
- tanggal gawe
- tautan menyang repositori proyek

<br/><br/>

<a id="common-issues"></a>
## Masalah umum

Yen ana sing ora mlaku kaya sing dikarepake, priksa dhisik poin-poin ing ngisor iki.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikasi ora bisa menerjemahake, nulis ulang, utawa ngowahi teks

Priksa manawa:

- panjenengan wis milih model ing bilah gawe
- paling ora siji model katon ing [**Setelan** > **Model**](#models)
- setelan API panjenengan wis mlaku kanthi bener

Yen panjenengan nggunakake aplikasi desktop:

1. Buka [**Setelan** > **Konfigurasi API**](#api-config).
2. Priksa manawa paling ora siji kunci API wis disimpen.
3. Klik **Tes** ing samping panyedhiya kanggo mastekake yen kuncine bisa digunakake.

<br/>

<a id="the-model-list-is-empty"></a>
### Dhaftar model kosong

Bukak [**Setelan** > **Model**](#models) lan klik **Segari**.

Yen perlu:

- goleki model
- aktifake **Mung Gratis**
- tambah siji utawa luwih model menyang **Model Dipilih**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Asilé terlalu lambat utawa larang

Coba siji utawa luwih saka iki:

- pilih model liya
- gunakake input sing luwih cendhak
- mateni **Terjemahan real-time (nalika ngetik)** ing [**Setelan** > **Setelan Umum**](#general-settings)
- gunakake model gratis kanggo tugas sederhana (deleng [Model](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Antarmukane nganggo basa sing salah

Klik ikon globe ing [bilah gawe](#toolbar) lan pilih **Basa antarmuka** sing panjenengan kei.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Teks terlalu cilik utawa angel diwaca

Bukak [**Setelan** > **Setelan Umum**](#general-settings) lan ganti:

- **Jeneng Font**
- **Ukuran**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Grafik Dasbor kosong

Iki normal yen:

- sampeyan mung nggunakake **model gratis** lan sampeyan ndeleng angka **biaya** (iku bisa nol); grafik jumlah panggilan **usage** ing **Ringkasan** isih kudu data saka periode sing dipilih
- **saringan wektu** sing dipilih ora nutupi periode nalika panggilan dilakokake - coba **Kabeh** kanggo mriksa

Yen grafik isih kosong sawise milih **Kabeh**, pastekan yen panggilan katon ing [**Riwayat**](#history) utawa ing tab **Kabeh Panggilan**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Biaya nuduhake "ora kasedhiya" utawa katon salah

Ketika sampeyan nggunakake model liwat **OpenRouter**, aplikasi nuduhake pengeluaran nyata sing dilaporake dening OpenRouter.

Kanggo **panyedhiya liya** (OpenAI langsung, Anthropic langsung, lsp.), biaya diperkirakake saka data rega sing diterbitake dening OpenRouter. Yen ora ditemokake rega sing cocog kanggo model, biaya bakal katon minangka **ora kasedhiya** lan ora bakal ditambahake menyang total sampeyan.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Total biaya ora cocog karo tagihan panyedhiya sampeyan

Kabeh angka biaya ing aplikasi iki **diperkirakake mung kanggo referensi**, dudu pernyataan tagihan resmi.

Kanggo njaluk total luwih cedhak karo pengeluaran OpenRouter nyata sampeyan, bukak [**Setelan** > **Pelacakan Biaya**](#cost-tracking) lan klik **Sinkronake karo panggunaan kunci API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Kaca Riwayat ilang saka sisih

**Simpen riwayat eksekusi** bisa uga mati. Bukak [**Setelan** > **Setelan Umum**](#general-settings) lan aktifake. Cathetan yen ngaktifake ora bakal mbalekake data riwayat sing wis dihapus sadurunge.

<br/>

<a id="web-app-session-expired"></a>
### Aplikasi web: dialihake menyang kaca login kanthi ora dikarepake

Sesi sampeyan bisa uga wis kadaluan. Mlebu maneh. Yen kerep kedadeyan, priksa konfigurasi server kanggo setelan umur sesi.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Admin web: lali utawa ilang sandhi

Iki ditrapake kanggo aplikasi web **sing di-host dhewe** (Docker), dudu aplikasi desktop (Electron).

- Yen administrator liyane isih bisa mlebu, dheweke bisa mbukak [**Setelan** > **Pangguna**](#users), pilih akun, lan atur **sandi anyar** ana.
- Yen sampeyan **terkunci metu** nanging duwe **akses shell** menyang mesin utawa wadah, atur maneh sandhi nganggo piranti bantuan sing dikirim karo gambar (ganti `transrewrt` yen sampeyan ngowahi jeneng asli, lan gunakna tanda kutip kanggo sandhi yen ngandhut spasi utawa karakter khusus):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Jeneng pangguna admin asli yaiku `admin` yen sampeyan durung tau nggawe akun liyane. Nalika sampeyan mung mlebokake siji argumen, iku dianggep minangka sandi anyar kanggo `admin`.

Yen sampeyan mlaku saka **cek sumber** tinimbang Docker, gunakna:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

Skrip nganyari rekam pangguna ing database SQLite (lan bisa nggawe `admin` pangguna yen ilang). Sawise direset, mlebu nganggo sandi anyar.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Dasbor nuduhake ora ana data kanggo pangguna liya (web)

Mung **administrator** sing bisa ndeleng data saka kabeh pangguna liwat saringan **Pangguna**. Pangguna biasa mung weruh aktivitas dhewe miturut rancangan.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Aku ngganti prompt lan kehilangan suntingan

Kala ngowahi prompt, tansah klik **Simpen** sadurunge klik **Mundur menyang Run**.

<br/><br/>

<a id="quick-tips"></a>
## Tip cepet

- Mulai karo [**Terjemahake**](#translate) kanggo mastekake yen setelan sampeyan wis mlaku sadurunge pindha menyang [**Tulis ulang**](#rewrite) utawa [**Ubah**](#transform).
- Gunakake [**Tulis ulang**](#rewrite) kanggo pangowahan basa saben dina.
- Gunakake [**Ubah**](#transform) nalika sampeyan butuh alur kerja sing bisa diulang kanggo tugas tartamtu.
- Gunakake [**Dasbor**](#dashboard) yen sampeyan pengin ngawasi panggunaan lan biaya.
- Gunakake [**Riwayat**](#history) kanggo nimbang operasi kepungkur lan teks input/output lengkap.
- Ekspor prompt kanthi rutin yen sampeyan lagi mbangun perpustakaan prompt sing pengin disimpen aman (deleng [Prompt transformasi](#transform-prompts)) utawa yen sampeyan pengin nuduhake karo liyane.

<br/><br/>

<a id="disclaimer"></a>
## Penafian

Nama produk lan ikon milik pemiliké dhéwé lan digunakaké mung kanggo tujuan identifikasi. Software iki ora duwé hubungan utawa disetujui déning merek-merek sing dijelasaké.

<br/><br/>

<a id="license"></a>
## Lisensi

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
