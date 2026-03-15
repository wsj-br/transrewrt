---
translated_at: "2026-03-15T22:21:23.276Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Panduan Pengguna Transrewrt

<br />

<a id="introduction"></a>
## Pengenalan

Transrewrt membantu anda bekerja dengan teks dalam tiga cara utama:

- **Terjemah** - menukar teks dari satu bahasa kepada bahasa lain.
- **Tulis Semula** - menukar gaya teks, seperti lebih jelas, lebih ringkas, atau lebih formal.
- **Transformasi** - memproses teks menggunakan arahan AI tersuai yang dipanggil prompt.

<br />

Panduan ini menjelaskan cara menggunakan aplikasi selepas ia dipasang dan berjalan. Untuk langkah pemasangan, lihat [README](../README.md) utama.

<br />

> ℹ️ **NOTA**<br/>
> Transrewrt tersedia sebagai aplikasi desktop untuk Windows dan Linux, serta aplikasi web yang dihoskan sendiri. Panduan ini berfokus pada penggunaan harian aplikasi. Di mana sesuatu hanya terpakai untuk satu versi, ia ditandakan dengan jelas.

<small>**Baca dalam bahasa lain:** [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Kandungan** 

- [Sebelum anda mula](#before-you-start)
  - [Cara mendapatkan kekunci API (aplikasi desktop)](#how-to-get-an-api-key-desktop-app)
- [Permulaan](#getting-started)
- [Bahagian utama tetingkap](#main-parts-of-the-window)
  - [Bar sisi](#sidebar)
  - [Bar alatan](#toolbar)
  - [Panel input dan output](#input-and-output-panels)
- [Terjemah](#translate)
  - [Terjemah teks](#translate-text)
  - [Pilihan bahasa](#language-selection)
  - [Tetapan terjemah yang membantu](#helpful-translation-settings)
  - [Pintasan papan kekunci](#keyboard-shortcuts)
- [Tulis Semula](#rewrite)
  - [Tulis semula teks](#rewrite-text)
- [Transformasi](#transform)
  - [Jalankan prompt sedia ada](#run-an-existing-prompt)
  - [Jika anda belum mempunyai prompt](#if-you-have-no-prompts-yet)
  - [Cipta prompt dengan cepat](#create-a-prompt-quickly)
  - [Sunting prompt](#edit-a-prompt)
  - [Uji prompt sebelum menggunakannya](#test-a-prompt-before-using-it)
  - [Urus prompt yang disimpan](#manage-saved-prompts)
- [Papan pemuka](#dashboard)
  - [Tapis data](#filter-the-data)
  - [Tab papan pemuka](#dashboard-tabs)
  - [Eksport data](#export-data)
  - [Padam rekod yang disimpan bagi model](#delete-stored-records-for-a-model)
- [Tetapan](#settings)
  - [Tetapan umum](#general-settings)
  - [Model](#models)
  - [Bahasa](#languages)
  - [Penjejakan kos](#cost-tracking)
  - [Prompt transformasi](#transform-prompts)
  - [Pengguna](#users)
  - [Konfigurasi API](#api-config)
  - [Perihal](#about)
- [Masalah biasa](#common-issues)
  - [Aplikasi tidak akan menterjemah, menulis semula, atau mentransformasi teks](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Senarai model kosong](#the-model-list-is-empty)
  - [Hasil terlalu perlahan atau terlalu mahal](#the-result-is-too-slow-or-too-expensive)
  - [Antaramuka berada dalam bahasa yang salah](#the-interface-is-in-the-wrong-language)
  - [Teks terlalu kecil atau sukar dibaca](#the-text-is-too-small-or-hard-to-read)
  - [Saya mengubah prompt dan kehilangan editan](#i-changed-a-prompt-and-lost-the-edits)
- [Pet pantas](#quick-tips)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="before-you-start"></a>

## Sebelum Anda mula

Untuk menggunakan Transrewrt, anda memerlukan akses kepada perkhidmatan AI melalui OpenRouter.

Anda tidak perlu memilih model berbayar sebelum mula. Aplikasi ini sentiasa termasuk model **percuma** terbina dalam, jadi untuk penggunaan biasa, ia cukup untuk mula menerjemah, menulis semula, dan mengubah teks.

Dalam bahasa mudah:

- Sebuah **model** ialah enjin AI yang melakukan kerja.
- Sebuah **kekunci API** ialah kelayakan akses peribadi anda untuk perkhidmatan itu.

Jika anda menggunakan **aplikasi desktop**, anda akan memerlukan kekunci API. Untuk langkah terperinci, lihat [Cara mendapatkan kekunci API](#how-to-get-an-api-key-desktop-app) di bawah. Secara ringkas: buat akaun di [OpenRouter](https://openrouter.ai), buka halaman [Keys](https://openrouter.ai/keys), buat kekunci baharu, dan tampalkan ke dalam [**Tetapan** > **Konfigurasi API**](#api-config) dalam Transrewrt.

Jika anda menggunakan **versi web**, pemilik pelayan biasanya mengkonfigurasikannya untuk anda, jadi biasanya anda tidak perlu memasukkan kekunci API sendiri.

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cara mendapatkan kekunci API (aplikasi desktop)

Jika anda menggunakan aplikasi desktop, ikut langkah ini:

1. Pergi ke [OpenRouter](https://openrouter.ai) dalam pelayar web anda.
2. Buat akaun atau log masuk.
3. Buka halaman [Keys](https://openrouter.ai/keys).
4. Klik butang untuk membuat kekunci API baharu.
5. Beri nama kekunci itu agar anda boleh mengenalinya kemudian.
6. Salin kekunci API baharu.
7. Kembali ke Transrewrt dan buka **Tetapan** > **Konfigurasi API**.
8. Tampal kekunci itu ke dalam **Kekunci API OpenRouter**.
9. Klik **Uji Konfigurasi API** untuk memastikannya berfungsi.

> ℹ️ **NOTA**<br/>
> Anda boleh mula dengan laluan percuma OpenRouter atau sebarang model percuma lain yang tersedia. Dalam kebanyakan kes, itu cukup untuk mula menggunakan Transrewrt tanpa memilih model berbayar.

<br /><br />

<a id="getting-started"></a>
## Bermula

Jika ini kali pertama anda menggunakan Transrewrt, ikut urutan ini:

1. Buka aplikasi.
2. Pilih **bahasa antara muka** anda daripada ikon globe jika perlu.
3. Jika anda berada di **aplikasi desktop**, buka [**Tetapan** > **Konfigurasi API**](#api-config), tampalkan kekunci API OpenRouter anda, dan klik **Uji Konfigurasi API**.
4. Buka [**Tetapan** > **Model**](#models) dan tambah satu atau lebih model ke dalam **Model Terpilih**.
5. Buka [**Tetapan** > **Bahasa**](#languages) dan pilih **Bahasa Teratas** anda jika anda ingin bahasa yang paling sering digunakan muncul pertama.
6. Pergi ke **Translate** dan jalankan terjemahan mudah untuk mengesahkan segala-galanya berfungsi.
7. Selepas itu berfungsi, cuba **Rewrite** kemudian **Transform**.

Urutan ini penting. Ia mengelakkan masalah penggunaan pertama yang paling biasa: cuba menjalankan tugas sebelum aplikasi mempunyai sambungan API yang berfungsi atau model yang dipilih.

<br /><br />

<a id="main-parts-of-the-window"></a>
## Bahagian utama tetingkap

Aplikasi ini dibahagikan kepada tiga bahagian utama:

- **Sidebar** di sebelah kiri.
- **Toolbar** di bahagian atas.
- **Kawasan kerja** di tengah.

<br />

<a id="sidebar"></a>
### Sidebar

Gunakan sidebar untuk bergerak ke seluruh aplikasi:

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/ms/sidebar.png" alt="Sidebar Aplikasi" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Translate</strong> membuka ruang kerja terjemahan.</li>
        <li><strong>Rewrite</strong> membuka ruang kerja penulisan semula.</li>
        <li><strong>Transform</strong> membuka ruang kerja prompt tersuai.</li>
        <li><strong>Papan Pemuka</strong> menunjukkan maklumat penggunaan dan kos.</li>
        <li><strong>Tetapan</strong> membuka panel tetapan.</li>
        <li><strong>Pengguna</strong> menunjukkan nama pengguna yang log masuk (web sahaja).</li>
      </ul>
      <br />
      <p>Anda juga boleh menciutkan sidebar untuk lebih ruang dengan mengklik ikon di sebelah logo aplikasi.</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### Toolbar

Toolbar berubah sedikit bergantung pada di mana anda berada dalam aplikasi.

- Di sebelah kiri, ia menunjukkan nama halaman semasa.
- Di sebelah kanan, ia menunjukkan **pemilih model** dan kawalan **bahasa antara muka**.

**Pemilih model** membolehkan anda memilih enjin AI yang akan digunakan untuk tugas semasa.

  ![Pemilih model](../images/screenshots/ms/model-selector.png)

> ℹ️ **NOTA**<br/>
> Beberapa model percuma mungkin berhenti berfungsi sebentar jika ia tidak tersedia atau telah mencapai had penggunaan. Jika itu berlaku, aplikasi akan mengalih keluar model itu dari senarai anda secara automatik.

**Ikon globe + kod bahasa** mengubah bahasa antara muka aplikasi, seperti menu dan butang. Ia **tidak** mengubah bahasa terjemahan yang digunakan dalam **Translate**.

  ![Pemilih bahasa antara muka](../images/screenshots/ms/language-selector.png)

<br />

<a id="input-and-output-panels"></a>
## Bahagian utama tetingkap

### Panel input dan output

Kebanyakan ruang kerja menggunakan panel **Input** di sebelah kiri dan panel **Output** di sebelah kanan.

Panel **Input** menunjukkan:

- Kiraan aksara
- Kiraan perkataan
- Kiraan perenggan

Panel **Output** boleh menunjukkan:

- Berapa lama tugas diambil
- Kos tugas tersebut
- Jumlah kos berjalan
- **TPS** (token per saat), yang merupakan ukuran kelajuan mudah
- Kiraan aksara, perkataan, dan perenggan
- Model yang digunakan

Jika anda bertanya tentang istilah teknikal:

- **Token** bermaksud potongan teks kecil. Anda boleh fikirkannya sebagai sebahagian daripada perkataan atau perkataan pendek.
- **TPS** bermaksud berapa banyak potongan teks itu diproses oleh model setiap saat.

<br /><br />

<a id="translate"></a>
## Terjemah

Gunakan **Terjemah** apabila anda ingin menukar teks dari satu bahasa ke bahasa lain.

![Ruang kerja Terjemah](../images/screenshots/ms/translate.png)

<br />

<a id="translate-text"></a>
### Terjemah teks

1. Buka **Terjemah**.
2. Pilih bahasa dalam **Dari**.
3. Pilih bahasa dalam **Ke**.
4. Pilih model dalam bar alat.
5. Taip atau tampal teks ke dalam **Input**.
6. Klik **Terjemah**.
7. Baca hasilnya dalam **Output**.
8. Guna butang salin jika anda ingin menyalin hasilnya.

<br />

<a id="language-selection"></a>
### Pilihan bahasa

- **Dari** boleh menjadi bahasa tertentu atau **Deteksi Bahasa**.
- **Ke** ialah bahasa yang anda inginkan untuk hasilnya.

Bahasa **Top Languages** yang dipilih anda akan muncul di senarai. Anda boleh menetapkan ini dalam [**Tetapan** > **Bahasa**](#languages).

<br />

<a id="helpful-translation-settings"></a>
### Tetapan terjemah yang berguna

Dalam [**Tetapan** > **Tetapan Umum**](#general-settings), anda boleh tukar cara terjemah berfungsi:

- **Auto-terjemah upon paste** menjalankan terjemah sebaik sahaja anda menampal teks.
- **Auto-copy result to clipboard** menyalin hasilnya secara automatik selepas berjaya dijalankan.
- **Real-time translation (while typing)** menjalankan terjemah semasa anda menaip.
- **Timeout (ms)** mengawal berapa lama aplikasi menunggu sebelum menjalankan terjemah masa nyata.

<br />

<a id="keyboard-shortcuts"></a>
### Pintasan papan kekunci

Dalam [**Tetapan** > **Tetapan Umum**](#general-settings), **Behaviour for ENTER** mengawal apa yang terjadi apabila anda menekan Enter:

- **Enter** boleh menjalankan tugas dan **Shift+Enter** boleh menambah baris baru.
- Atau aplikasi boleh melakukan sebaliknya.

Pintasan semasa juga ditunjukkan pada butang **Terjemah**.

<br /><br />

<a id="rewrite"></a>
## Tulis Semula

Gunakan **Tulis Semula** apabila anda ingin memperbaiki frasa tanpa mengubah maksud asas.

![Ruang kerja Tulis Semula](../images/screenshots/ms/rewrite.png)

Ini berguna untuk:

- memperbaiki ejaan dan tatabahu
- membuat teks lebih jelas
- membuat teks lebih formal atau lebih informal
- memendekkan atau melanjutkan teks
- membuat teks kedengaran lebih teknikal

<br />

<a id="rewrite-text"></a>
### Tulis semula teks

1. Buka **Tulis Semula**.
2. Pilih **Mode**.
3. Pilih model dalam bar alat.
4. Taip atau tampal teks ke dalam **Input**.
5. Klik **Tulis Semula**.
6. Tinjau hasilnya dalam **Output**.

Perilaku kekunci Enter yang sama yang diterangkan dalam [**Terjemah**](#keyboard-shortcuts) juga terpakai di sini.

<br /><br />

<a id="transform"></a>
## Transform

Gunakan **Transform** apabila anda ingin AI mengikuti set arahan istimewa.

![Ruang kerja Transform](../images/screenshots/ms/transform.png)

Ini adalah bahagian paling fleksibel aplikasi. Anda boleh menggunakannya untuk tugas seperti:

- merumuskan nota
- mengubah teks kasar menjadi e-mel yang polek
- mengekstrak poin penting
- menukar teks kepada format tertentu

<br />

<a id="run-an-existing-prompt"></a>
### Jalankan prompt sedia ada

1. Buka **Transform**.
2. Pilih prompt dari senarai prompt.
3. Jika kotak bahasa **Target** muncul, pilih bahasa jika anda menginginkannya.
4. Taip atau tampal teks ke dalam **Input**.
5. Klik **Transform**.
6. Baca hasilnya dalam **Output**.

<br />

<a id="if-you-have-no-prompts-yet"></a>
### Jika anda masih tiada prompt

Jika senarai prompt anda kosong, klik **Mu sample prompts**. Ini menambah contoh terbina-dalam agar anda boleh Bermula dengan cepat.

> ℹ️ **PERHATIAN**<br/>
> Sample prompt diberikan dalam bahasa Inggeris. Selepas memuatkannya, anda boleh mengedit prompt dan menggunakan **Terjemah prompt** jika anda ingin menyesuaikan teks prompt untuk bahasa lain.

<br />

<a id="create-a-prompt-quickly"></a>

### Cipta prompt dengan cepat

Cara terpantas untuk mencipta prompt adalah:

1. Klik **New prompt**.
2. Klik **Generate prompt**.
3. Terangkan apa yang anda ingin prompt lakukan.
4. Pilih model.
5. Biarkan app mencipta draf untuk anda.
6. Semak draf dan klik **Save**.

![Generate prompt](../images/screenshots/ms/transform-generate.png)


<br />

### Edit prompt

Apabila anda mencipta atau mengedit prompt, penyunting akan muncul di sebelah kiri dan kawasan ujian di sebelah kanan.

![Transform prompt editor](../images/screenshots/ms/transform-prompt-edit.png)

Bidang utamanya adalah:

- **Nama Prompt**: nama yang dipaparkan dalam senarai prompt.
- **Arahan Prompt (pilihan)**: petunjuk Ringkas yang dipaparkan kepada pengguna apabila menjalankan prompt.
- **Peranan Model**: peranan keseluruhan yang diumpukkan kepada AI, seperti 'Anda adalah Pembantu yang membantu.'
- **Arahan Model (satu setiap baris)**: peraturan khusus yang anda ingin AI ikuti.
- **Penerangan output**: sepatah kata ringkas menerangkan hasil, seperti 'ringkasan' atau 'tulis semula'.
- **Suhu (0.0 → 1.0))** tetikus kreativiti.
- **Minta bahasa sasaran**: menambah pemilih bahasa sasaran apabila prompt dijalankan.

Jika istilah teknikal **Suhu** adalah baharu untuk anda, fikirkan seperti ini:

- **Suhu yang lebih RENDAH** memberikan hasil yang lebih mantap dan boleh diramalkan.
- **Suhu yang lebih TINGGI** memberikan lebih banyak variasi dan kreativiti.

Anda juga boleh menggunakan:

- **`Generate prompt`** untuk mencipta draf baharu daripada penerangan ringkas
- **`Improve prompt`** untuk mengoptimumkan prompt sedia ada
- **`Translate prompt`** untuk menerjemahkan bidang prompt

> ⚠️ **AMARAN**<br/>
- Klik **`Save`** sebelum anda klik **`Back to Run`**. Jika anda kembali tanpa menyimpan, perubahan anda akan hilang.

<br />

<a id="test-a-prompt-before-using-it"></a>
### Uji prompt sebelum menggunakannya

Panel ujian di sebelah kanan membolehkan anda mencuba prompt anda dengan teks sampel sebelum menggunakannya dalam kerja harian.

Ini berguna apabila:

- anda membina prompt baharu
- anda membandingkan dua versi prompt
- anda ingin mengeset nada, panjang, atau format output

<br />

<a id="manage-saved-prompts"></a>
### Urus prompt yang disimpan

Untuk mengurus prompt yang disimpan di satu tempat, buka [**Settings** > **Transform Prompts**](#transform-prompts).

Di situ anda boleh:

- senarai dan padam prompt anda
- eksport prompt sebagai **JSON**, **CSV**, atau **XLSX**
- import prompt daripada fail

<br /><br />

## Papan Pemuka

Gunakan **Dashboard** untuk melihat penggunaan app dan kosnya.

![Dashboard summary](../images/screenshots/ms/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### Tapis data

Guna butang penapis di bahagian atas untuk mengubah julat masa.

![Dashboard filters](../images/screenshots/ms/dashboard-filter.png)

> ℹ️ **NOTE**<br/>
- Dalam versi web, pentadbir juga mungkin melihat penapis **Pengguna**. Ini membolehkan mereka bertukar antara **Semua pengguna** dan pengguna individu.

<br />

<a id="dashboard-tabs"></a>
### Tab Dashboard

- **Summary** memberikan gambaran keseluruhan penggunaan dan kos.
- **By Usage** menguraikan aktiviti mengikut bahasa terjemahan, mod tulis semula, dan transform prompt.
- **By Model** menunjukkan model mana yang anda gunakan dan berapa kosnya.
- **By Day** menunjukkan jumlah harian.
- **All Calls** menunjukkan sepenuhnya sejarah panggilan dan membolehkan anda mengeksportnya.

<br />

<a id="export-data"></a>
### Eksport data

Jadual dashboard dapat mengeksport data dalam:

- **JSON**
- **CSV**
- **XLSX**

Ini berguna jika anda ingin mengulas aktiviti di luar app atau berkongsi laporan.

<br />

<a id="delete-stored-records-for-a-model"></a>
### Padam rekod yang disimpan untuk model

Dalam **By Model** atau **All Calls**, anda boleh membuang rekod yang disimpan untuk model.

> ⚠️ **AMARAN**<br/>
- Memadam rekod yang disimpan tidak boleh dibatalkan. Hanya gunakan ini jika anda pasti tidak lagi perlu sejarah tersebut.

Untuk memadam semua data atau membuang rekod berdasarkan usia, pergi ke [**Settings** > **Cost Tracking**](#cost-tracking). Di situ anda akan menemukan pilihan untuk memadam semua data yang disimpan atau hanya data yang lebih lama daripada tarikh tertentu.

<br /><br />

<a id="settings"></a>
## Settings

Buka **Settings** daripada bar tepi untuk menyesuaikan how app berbehave.

Tab yang tersedia mungkin berbeza:

- **API Config** hanya tersedia dalam desktop app.
- **Users** hanya tersedia dalam web app, dan hanya untuk pentadbir.

<br />

<a id="general-settings"></a>

### Tetapan umum

Gunakan **Tetapan Umum** untuk mengawal tingkah laku menaip dan penampilan.

**Tingkah Laku**

- **Tingkah laku untuk ENTER** memilih sama ada Enter menjalankan tugas atau menyisip baris baru.
- **Terjemah auto pada tampalan** memulakan terjemahan sebaik sahaja anda tampal teks.
- **Salin hasil auto ke papan klip** menyalin hasil yang berjaya secara automatik.
- **Terjemah masa sebenar (ketika menaip)** menterjemahkan ketika anda menaip.
- **Masa tamat (ms)** mengtetapkan masa menunggu untuk terjemahan masa sebenar.

**Penampilan**

- **Digit pecahan kos** mengubah cara perpuluhan kos dipaparkan.
- **Keluarga Fon** mengubah fon penulisan dalam panel teks.
- **Saiz** mengubah saiz fon.
- **Web sahaja:** **tunjukkan margin di sekeliling aplikasi** menambah ruang ekstra di sekeliling antaramuka.

<br />

<a id="models"></a>
### Model

Gunakan **Tetapan** > **Model** untuk memilih model mana yang muncul dalam toolbar.

![Tab Models Tetapan](../images/screenshots/ms/settings-models.png)

Halaman tersebut mempunyai dua senarai:

- **Model Tersedia** di sebelah kiri
- **Model Dipilih** di sebelah kanan

Kawalan berguna termasuk:

- **Cari model...** untuk mencari model mengikut nama
- **Percuma Sahaja** untuk menunjukkan hanya model percuma
- **Segar Semula** untuk memuatkan semula senarai
- **Kembangkan Semua** dan **Runtuhkan Semua** apabila anda mengisih mengikut pembekal

Untuk menambah model, klik **Tambah**.

Untuk membuang model, klik **X** bersebelahan dengannya di **Model Dipilih**.

Untuk menyelakkan senarai, klik **Nyahpilih semua**. Model percuma diperlukan akan kekal dalam senarai.

> ℹ️ **CATATAN**<br/>
> Jika anda tidak mahu menambah kredit ke OpenRouter terus, mulakan dengan membenarkan **Percuma Sahaja** dan memilih model percuma.

<br />

<a id="languages"></a>
### Bahasa

Gunakan **Tetapan** > **Bahasa** untuk mengatur senarai bahasa yang digunakan dalam aplikasi.

- **Bahasa pilihan** disemat berdekatan di bahagian atas senarai bahasa dalam **Terjemah** dan **Pertukar**.
- **Bahasa suai** membolehkan anda menambah bahasa yang tidak dalam senarai terbina dalam.

Jika anda menambah bahasa suai, ia muncul dalam pemilih bahasa bersebelahan dengan pilihan terbina dalam.

<br />

<a id="cost-tracking"></a>
### Penjejakan kos

Gunakan **Tetapan** > **Penjejakan Kos** untuk mengurus maklumat kos.

- **Jumlah Kos** menunjukkan jumlah berterusan.
- **Salin Nilai** menyalin jumlah ke papan klip.
- **Tetapkan Semula Kos** mengatur semula jumlah yang disimpan kepada sifar.
- **Segerakkan dengan penggunaan kekunci API** menetapkan jumlah untuk sepadan dengan penggunaan yang dilaporkan oleh OpenRouter.
- **Penggunaan Kekunci API** menunjukkan perincian penggunaan, jika tersedia.
- **Padam data kos** membuang semua data, atau hanya entri yang lebih lama daripada tarikh dipilih.

> ⚠️ **AMARAN**<br/>
> Penentepan data tidak boleh dibatalkan. Sebelum memadam, pastikan anda membuat sandaran data atau mengeksportnya melalui [**Dashboard** > **Segala Panggilan**](#dashboard-tabs), jika tidak ia akan hilang secara kekal.

<br />

<a id="transform-prompts"></a>
### Pertukaran prompt

Gunakan **Tetapan** > **Pertukaran Prompt** untuk mengurus prompt secara pukal.

Anda boleh:

- meninjau prompt yang disimpan
- memadam prompt
- mengimport prompt dari fail
- mengeksport prompt untuk sandaran atau perkongsian

<br />

<a id="users"></a>
### Pengguna

**Web sahaja - pentadbir sahaja**

Gunakan **Pengguna** untuk mengurus akaun pengguna dalam versi web. Anda boleh menambah pengguna, mengemas kini perincian mereka, menetapkan semula kata laluan, dan memadam akaun.

<br />

<a id="api-config"></a>
### Konfigurasi API

**Desktop sahaja**

Gunakan **Konfigurasi API** untuk menyambung aplikasi desktop ke OpenRouter atau kepada proksi Transrewrt.

- **Kekunci API OpenRouter** adalah di mana anda tampal kekunci anda.
- **URL API** adalah alamat perkhidmatan. Tinggalkannya pada Lalai melainkan anda diberi yang berbeza.
- **Gunakan Proksi Transrewrt** mengarahkan permintaan melalui perkhidmatan proksi bukan terus ke OpenRouter.
- **Benih Kekunci** muncul apabila pilihan proksi dibenarkan.
- **Uji Konfigurasi API** memeriksa sama ada tetapan semasa berfungsi.

Untuk langkah terperinci mendapatkan kekunci API anda, lihat [Bagaimana untuk mendapatkan kekunci API](#how-to-get-an-api-key-desktop-app) di atas.

> ℹ️ **CATATAN**<br/>
> Jika anda tidak pasti apa yang dimaksudkan oleh **URL API**, **Gunakan Proksi Transrewrt**, atau **Benih Kekunci**, tinggalkannya tidak diubah dan gunakan tetapan Lalai OpenRouter. Maklumat lanjut tentang proksi tersedia dalam [Repositori Proksi Transrewrt](https://github.com/wsj-br/transrewrt-proxy).


<br />

<a id="about"></a>

### Tentang

Tab **Tentang** menunjukkan:
- nama aplikasi
- nombor versi
- tarikh bina
- pautan ke repositori projek

<br /><br />

<a id="common-issues"></a>
## Masalah lazim

Jika sesuatu tidak berfungsi seperti yang dijangka, semak perkara berikut terlebih dahulu.

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikasi tidak dapat menerjemah, menulis semula, atau mengubah teks

Semak:
- anda telah memilih model dalam palang alat
- sekurang-kurangnya satu model tersenarai dalam [**Tetapan** > **Model**](#models)
- persediaan API anda berfungsi

Jika anda menggunakan aplikasi desktop:

1. Buka [**Tetapan** > **Konfigurasi API**](#api-config).
2. Pastikan kunci API anda disimpan.
3. Klik **Uji Konfigurasi API**.

<br />

<a id="the-model-list-is-empty"></a>
### Senarai model kosong

Buka [**Tetapan** > **Model**](#models) dan klik **Segar Semula**.

Jika diperlukan:
- cari model
- hidupkan **Hanya Percuma**
- tambah satu atau lebih model ke **Model Dipilih**

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Keputusan terlalu perlahan atau terlalu mahal

Cuba satu atau lebih pilihan berikut:
- pilih model yang lain
- guna input yang lebih pendek
- matikan **Terjemahan masa nyata (ketika mengetik)** dalam [**Tetapan** > **Tetapan Am**](#general-settings)
- guna model percuma untuk tugas mudah (lihat [Model](#models))

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### Antaramuka dalam bahasa yang salah

Klik ikon globe di [palang alat](#toolbar) dan pilih **Bahasa antaramuka** yang diingini.

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Teks terlalu kecil atau sukar dibaca

Buka [**Tetapan** > **Tetapan Am**](#general-settings) dan ubah:
- **Keluarga Fon**
- **Saiz**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Saya mengubah prompt dan kehilangan suntingan

Apabila menyunting prompt, selalu klik **Simpan** sebelum mengklik **Kembali ke Jalankan**.

<br /><br />

<a id="quick-tips"></a>
## Petua pantas

- Mulakan dengan [**Terjemah**](#translate) untuk memastikan persediaan anda berfungsi sebelum anda beralih ke [**Tulis Semula**](#rewrite) atau [**Ubah**](#transform).
- Gunakan [**Tulis Semula**](#rewrite) untuk penambahbaikan percakapan harian.
- Gunakan [**Ubah**](#transform) apabila anda memerlukan aliran kerja yang boleh diulang untuk tugas tertentu.
- Gunakan [**Papan Pemuka**](#dashboard) jika anda ingin mengawasi penggunaan dan kos.
- Eksport prompt secara berkala jika anda membina pustaka prompt yang ingin anda selamatkan (lihat [Ubah Prompt](#transform-prompts)).

<br /><br />

<a id="disclaimer"></a>
## Penafian

Nama produk dan ikon adalah hak milik pemilik masing-masing dan digunakan hanya bagi tujuan pengenalan. Perisian ini tidak berafiliasi atau didukung oleh mana-mana jenama yang disebut.

<br /><br />

<a id="license"></a>
## Lesen

Hak cipta © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)