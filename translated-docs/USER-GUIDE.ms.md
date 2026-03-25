---
translated_at: "2026-03-25T21:44:17.795Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Panduan Pengguna

<br/>

<a id="introduction"></a>
## Pengenalan

Transrewrt membantu anda bekerja dengan teks dalam tiga cara utama:

- **Terjemah** - menukar teks dari satu bahasa ke bahasa lain.
- **Tulis semula** - mengungkapkan semula teks dalam gaya yang berbeza, seperti lebih jelas, lebih ringkas atau lebih formal.
- **Transformasi** - memproses teks menggunakan arahan AI tersuai yang dikenali sebagai prompt.

<br/>

Panduan ini menjelaskan cara menggunakan aplikasi setelah ia dipasang dan berjalan. Untuk langkah-langkah pemasangan, lihat **[README](README.ms.md)** utama.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt boleh didapati sebagai aplikasi desktop untuk Windows dan Linux, serta aplikasi web yang boleh dihos sendiri. Panduan ini menumpukan kepada penggunaan harian aplikasi. Di mana sesuatu hanya terpakai kepada satu versi, ia akan ditandai dengan jelas.

<small>**Baca dalam bahasa lain:** [English (UK)](USER-GUIDE.ms.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Nota mengenai terjemahan UI dan dokumentasi:** Semua bahasa antara muka kecuali Bahasa Inggeris (UK) asal 
> diterjemahkan menggunakan model AI; kata-kata mungkin tidak tepat atau terdapat ralat.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Jadual Kandungan** 

- [Sebelum bermula](#before-you-start)
  - [Cara mendapatkan kunci API OpenRouter percuma (aplikasi desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Memulakan](#getting-started)
- [Bahagian utama tetingkap](#main-parts-of-the-window)
  - [Bar sisi](#sidebar)
  - [Bar alat](#toolbar)
  - [Panel input dan output](#input-and-output-panels)
- [Terjemah](#translate)
  - [Terjemahkan teks](#translate-text)
  - [Pemilihan bahasa](#language-selection)
  - [Tetapan terjemahan yang berguna](#helpful-translation-settings)
- [Tulis semula](#rewrite)
- [Transformasi](#transform)
  - [Jalankan prompt sedia ada](#run-an-existing-prompt)
  - [Jika anda belum mempunyai prompt](#if-you-have-no-prompts-yet)
  - [Cipta prompt dengan cepat](#create-a-prompt-quickly)
  - [Edit prompt](#edit-a-prompt)
  - [Uji prompt sebelum menggunakannya](#test-a-prompt-before-using-it)
- [Papan Pemuka](#dashboard)
  - [Tapis data](#filter-the-data)
  - [Tab papan pemuka](#dashboard-tabs)
  - [Eksport data](#export-data)
  - [Padam rekod yang disimpan untuk model](#delete-stored-records-for-a-model)
- [Sejarah](#history)
  - [Tapis data](#filter-the-data-1)
  - [Eksport data sejarah](#export-history-data)
- [Tetapan](#settings)
  - [Tetapan umum](#general-settings)
  - [Model](#models)
  - [Bahasa](#languages)
  - [Pengesanan kos](#cost-tracking)
  - [Prompt transformasi](#transform-prompts)
  - [Pengguna](#users)
  - [Konfigurasi API](#api-config)
  - [Mengenai](#about)
- [Isu biasa](#common-issues)
  - [Aplikasi tidak menterjemah, menulis semula atau mengubah suai teks](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Senarai model kosong](#the-model-list-is-empty)
  - [Keputusan terlalu perlahan atau terlalu mahal](#the-result-is-too-slow-or-too-expensive)
  - [Antara muka dalam bahasa yang salah](#the-interface-is-in-the-wrong-language)
  - [Teks terlalu kecil atau sukar dibaca](#the-text-is-too-small-or-hard-to-read)
  - [Carta papan pemuka kosong](#dashboard-charts-are-empty)
  - [Kos menunjukkan "tidak tersedia" atau kelihatan salah](#cost-shows-not-available-or-seems-wrong)
  - [Jumlah kos tidak sepadan dengan bil penyedia saya](#total-cost-does-not-match-my-provider-bill)
  - [Halaman Sejarah tiada di bar sisi](#the-history-page-is-missing-from-the-sidebar)
  - [Aplikasi web: dialihkan ke halaman log masuk secara tidak dijangka](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Papan pemuka tidak menunjukkan data untuk pengguna lain (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Saya mengubah prompt dan kehilangan suntingan](#i-changed-a-prompt-and-lost-the-edits)
- [Petua pantas](#quick-tips)
- [Penafian](#disclaimer)
- [Lesen](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Sebelum bermula

Untuk menggunakan Transrewrt, anda perlu akses kepada sekurang-kurangnya satu penyedia AI. Penyedia yang disokong ialah: [OpenRouter](https://openrouter.ai) (yang menggabungkan banyak model), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, dan [Ollama](https://ollama.com) untuk model tempatan.

Anda tidak perlu memilih model berbayar untuk bermula. Segera selepas anda menambah kunci API OpenRouter, aplikasi tersebut secara automatik akan mengaktifkan pilihan OpenRouter **percuma** terbina dalam. Ini membolehkan anda mula menterjemah, menulis semula, dan mengubah teks serta-merta. Sebagai alternatif, anda juga boleh mendapatkan kunci API percuma daripada Cerebras, Google, Groq, atau Mistral AI.

Secara ringkas:

- **Model** ialah enjin AI yang melakukan kerja. Model disenaraikan bersama awalan **penyedia** (contohnya `openrouter/…`, `openai/…`, `ollama/…`).
- **Kunci API** (atau untuk Ollama, **URL asas**) ialah cara aplikasi menghubungi penyedia tersebut.

Jika anda menggunakan **aplikasi desktop**, tambah kunci pada [**Tetapan** > **Konfigurasi API**](#api-config) untuk setiap penyedia yang digunakan. Untuk penggunaan OpenRouter sahaja, rujuk [Cara mendapatkan kunci API](#how-to-get-an-api-key-desktop-app) di bawah. Jika anda tidak mahu menggunakan kunci API, anda boleh memasang Ollama (dari [ollama.com](https://ollama.com)) dan menggunakan model tempatan, seperti `translategemma:4b`.

Sekiranya anda menggunakan **versi web**, pemilik pelayan mengkonfigurasikan penyedia menggunakan pemboleh ubah persekitaran, jadi anda tidak dapat memasukkan kunci API secara langsung dalam aplikasi.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cara mendapatkan kunci API OpenRouter percuma (aplikasi desktop)

Jika anda menggunakan aplikasi desktop, ikuti langkah-langkah berikut:

1. Pergi ke [OpenRouter](https://openrouter.ai) dalam pelayar web anda.
2. Daftar akaun atau log masuk.
3. Buka halaman [Keys](https://openrouter.ai/keys).
4. Klik butang untuk membuat kunci API baru.
5. Berikan nama kepada kunci agar anda dapat mengenal pastinya kelak.
6. Salin kunci API yang baharu.
7. Kembali ke Transrewrt dan buka **Tetapan** > **Konfigurasi API**.
8. Tampal kunci tersebut ke ruangan **Kunci API OpenRouter** (di bawah **Tetapan** > **Konfigurasi API**).
9. Klik **Uji kunci OpenRouter** untuk memastikan ia berfungsi.

<br/><br/>

<a id="getting-started"></a>
## Memulakan penggunaan

Jika ini kali pertama anda menggunakan Transrewrt, ikuti urutan berikut:

1. Buka aplikasi.
2. Pilih **Bahasa antara muka** anda daripada ikon globe, jika perlu.
3. Jika anda menggunakan **aplikasi desktop**, buka [**Tetapan** > **Konfigurasi API**](#api-config), tambah kunci API untuk sekurang-kurangnya satu penyedia (contohnya OpenRouter), dan klik **Uji** untuk mengesahkannya berfungsi.
4. Buka [**Tetapan** > **Model**](#models) dan tambah satu atau lebih model ke **Model terpilih**.
5. Buka [**Tetapan** > **Bahasa**](#languages) dan pilih **Bahasa utama** anda jika anda mahu bahasa yang paling kerap digunakan muncul dahulu.
6. Pergi ke **Terjemah** dan jalankan terjemahan mudah untuk mengesahkan semuanya berfungsi.
7. Apabila berjaya, cuba **Tulis Semula** kemudian **Transformasi**.

Urutan ini penting. Ia mengelakkan masalah biasa pengguna baru: cuba menjalankan tugas sebelum aplikasi mempunyai sambungan API yang aktif atau model terpilih.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Bahagian utama tetingkap

Aplikasi dibahagikan kepada tiga kawasan utama:

- **Sidebar** di sebelah kiri.
- **Bar alat** di bahagian atas.
- **Kawasan kerja** di tengah.

<br/>

<a id="sidebar"></a>
### Sidebar

Gunakan sidebar untuk bergerak di sekitar aplikasi. Anda boleh meruntuhkan sidebar untuk mendapatkan lebih banyak ruang dengan mengklik ikon sebelah logo aplikasi.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/ms/sidebar.png" alt="Sidebar Aplikasi" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Terjemah</strong> membuka ruang kerja penterjemahan.</li><br/>
        <li><strong>Tulis Semula</strong> membuka ruang kerja penulisan semula.</li><br/>
        <li><strong>Transformasi</strong> membuka ruang kerja arahan khusus.</li><br/>
        <li><strong>Papan Pemuka</strong> memaparkan maklumat penggunaan dan kos.</li><br/>
        <li><strong>Tetapan</strong> membuka panel tetapan.</li><br/>
        <li><strong>Sejarah</strong> memaparkan sejarah penggunaan bersama teks input dan output.</li><br/>
        <li><strong>Pengguna</strong> memaparkan nama pengguna yang telah log masuk (versi web sahaja).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Bar Alat

Bar alat berubah sedikit bergantung kepada lokasi anda dalam aplikasi.

- Di bahagian kiri, ia menunjukkan nama halaman semasa.
- Di bahagian kanan, ia menunjukkan **pemilih model** dan kawalan **Bahasa Antaramuka**.

**Pemilih model** membolehkan anda memilih enjin AI yang digunakan untuk tugas semasa.

  ![Pemilih model](../images/screenshots/ms/model-selector.png)

Sesetengah model percuma mungkin tidak sentiasa tersedia—ada kalanya ia sedang luar talian atau telah mencapai had penggunaan. Jika ini berlaku, aplikasi akan secara automatik mengalih keluar model tersebut daripada senarai anda yang tersedia. Untuk mengawal model yang dipaparkan, pergi ke [**Tetapan** > **Model**](#models) dan edit senarai model anda. 
Anda juga boleh membuka tetapan model secara langsung dengan mengklik ikon penyedia di sebelah kiri nama model dalam bar alat.

<br/>

**Ikon glob + kod bahasa** menukar bahasa antaramuka aplikasi, seperti menu dan butang. Ia **tidak** menukar bahasa terjemahan yang digunakan dalam **Terjemahkan**.

  ![Pemilih bahasa antaramuka](../images/screenshots/ms/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panel input dan output

Kebanyakan ruang kerja menggunakan panel **Input** di sebelah kiri dan panel **Output** di sebelah kanan.

Setiap panel juga memaparkan:

| **Input**                                                          | **Output**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Kiraan aksara <br/>- Kiraan perkataan <br/>- Kiraan perenggan   <br/> | - Tempoh tugas<br/>- **TPS** (token per saat)<br/>- Kiraan aksara, perkataan, dan perenggan<br/>- Model yang digunakan |


Jika anda ingin tahu tentang istilah teknikal:

- **Token** bermaksud bahagian teks yang kecil. Anda boleh anggap ia sebagai sebahagian daripada perkataan atau perkataan pendek.
- **TPS** bermaksud bilangan bahagian teks tersebut yang diproses oleh model setiap saat.

<br/>

Anda juga boleh memantau kos setiap operasi (jika tersedia) dan jumlah kos, dengan mengaktifkan pilihan `Papar maklumat kos pada tindakan` di [**Tetapan** > **Tetapan Umum**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Terjemahkan

Gunakan **Terjemahkan** apabila anda mahu menukar teks daripada satu bahasa ke bahasa lain.

![Ruang kerja Terjemahkan](../images/screenshots/ms/translate.png)

<br/>

<a id="translate-text"></a>
### Terjemahkan teks

1. Buka **Terjemahkan**.
2. Pilih bahasa dalam **Dari**.
3. Pilih bahasa dalam **Ke**.
4. Pilih model dalam bar alat.
5. Taip atau tampal teks ke dalam **Input**.
6. Klik **Terjemahkan**.
7. Baca hasilnya di **Output**.
8. Gunakan butang salin jika anda mahu menyalin hasilnya.

<br/>

<a id="language-selection"></a>
### Pemilihan bahasa

- **Dari** boleh menjadi bahasa khusus atau **Mengesan Bahasa**.
- **Ke** ialah bahasa yang anda mahu hasilnya disediakan.

**Bahasa Atas** anda yang dipilih akan muncul di bahagian atas senarai. Anda boleh menetapkannya dalam [**Tetapan** > **Bahasa**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Tetapan terjemahan yang berguna

Dalam [**Tetapan** > **Tetapan Umum**](#general-settings), anda boleh menukar kelakuan terjemahan:

- **Terjemah automatik semasa tampal** akan mula menterjemah sebaik sahaja anda menampal teks.
- **Salin hasil ke papan keratan secara automatik** akan menyalin hasil secara automatik selepas berjaya dijalankan.
- **Terjemahan masa nyata (semasa menaip)** akan menterjemah semasa anda menaip.
- **Tempoh tamat (ms)** mengawal berapa lama aplikasi menunggu sebelum menjalankan terjemahan masa nyata.
- **Enter** mengawal apa yang berlaku apabila anda menekan `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Tulis Semula

Gunakan **Tulis Semula** apabila anda mahu memperbaiki gaya penulisan tanpa mengubah maksud utama.

![Ruang kerja Tulis Semula](../images/screenshots/ms/rewrite.png)

Ini berguna untuk:

- membetulkan ejaan dan tatabahasa
- menjadikan teks lebih jelas
- menjadikan teks lebih formal atau kurang formal
- memendekkan atau memanjangkan teks
- menjadikan teks lebih teknikal

<br/>

> 💡 **PETUA**<br/>
> Apabila anda menggunakan mod "**Semak Ejaan & Tatabahasa**", butang `Papar perubahan` akan muncul dalam panel output.
> Klik butang ini untuk mendayakan atau menyembunyikan paparan pembetulan, menunjukkan atau menyembunyikan perubahan khusus yang dibuat pada teks anda.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformasi

Gunakan **Transformasi** apabila anda ingin AI mengikuti satu set arahan tersuai.

![Ruang kerja Transformasi](../images/screenshots/ms/transform.png)

Ini adalah kawasan paling fleksibel dalam aplikasi. Anda boleh menggunakannya untuk tugas-tugas seperti:

- merumuskan nota
- menukar teks kasar kepada e-mel yang lebih kemas
- mengekstrak mata utama
- menukar teks ke format tertentu
- sebarang aktiviti tersuai lain dengan teks input

<br/>

<a id="run-an-existing-prompt"></a>
### Jalankan arahan sedia ada

1. Buka **Transformasi**.
2. Pilih satu arahan daripada senarai arahan.
3. Jika kotak **Bahasa Sasaran** muncul, pilih bahasa jika anda mahukannya.
4. Taip atau tampal teks ke dalam **Input**.
5. Klik **Transformasi**.
6. Baca hasilnya di **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Jika anda belum mempunyai arahan

Jika senarai arahan anda kosong, klik **Muat arahan sampel**. Ini akan menambahkan contoh binaan supaya anda boleh mula dengan pantas.

<br/>

> ℹ️ **NOTA**<br/>
> Arahan sampel disediakan dalam Bahasa Inggeris. Selepas memuatnya, anda boleh sunting arahan dan gunakan **Terjemah arahan** untuk menterjemahkannya ke dalam bahasa anda.

<br/>

<a id="create-a-prompt-quickly"></a>
### Cipta arahan dengan cepat

Cara terpantas untuk mencipta arahan ialah:

1. Klik **Arahan Baharu**.
2. Klik **Jana arahan**.
3. Terangkan apa yang anda mahu arahan itu lakukan.
4. Pilih satu model.
5. Biarkan aplikasi mencipta satu draf untuk anda.
6. Semak draf tersebut dan klik **Simpan**.

![Jana arahan](../images/screenshots/ms/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Sunting arahan

Apabila anda mencipta atau menyunting arahan, editor akan muncul di sebelah kiri dan kawasan ujian akan muncul di sebelah kanan.

![Editor arahan Transformasi](../images/screenshots/ms/transform-prompt-edit.png)

Medan utama termasuk:

- **Nama arahan**: nama yang dipaparkan dalam senarai arahan.
- **Arahan arahan (pilihan)**: petua ringkas yang dipaparkan kepada pengguna apabila menjalankan arahan.
- **Peranan Model**: peranan keseluruhan yang diberikan kepada AI, seperti 'Anda seorang pembantu yang membantu.'
- **Arahan Model (satu per baris)**: peraturan khusus yang anda mahu AI patuhi.
- **Huraian output**: perkataan ringkas yang menerangkan hasilnya, seperti 'ringkasan' atau 'tulis semula'.
- **Suhu (0.0 → 1.0)**: cara model akan berkelakuan; lihat di bawah.
- **Minta bahasa sasaran**: menambah pemilih bahasa sasaran apabila arahan dijalankan.

Jika istilah teknikal **Suhu** belum pernah anda dengar sebelum ini, fahamkan seperti berikut:

- **Suhu yang lebih rendah** memberikan hasil yang lebih stabil dan mudah diramal.
- **Suhu yang lebih tinggi** memberikan lebih pelbagai dan kreativiti.

Anda juga boleh gunakan:

- **`Jana arahan`** untuk mencipta draf baharu daripada huraian ringkas
- **`Tingkatkan arahan`** untuk membaik pulih arahan sedia ada
- **`Terjemah arahan`** untuk menterjemah medan arahan

<br/>

> ⚠️ **AMARAN**<br/>
> Klik **`Simpan`** sebelum klik **`Kembali ke Larian`**. Jika anda kembali tanpa menyimpan, perubahan anda akan hilang.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Uji arahan sebelum menggunakannya

Panel ujian di sebelah kanan membolehkan anda mencuba arahan dengan teks sampel sebelum menggunakannya dalam kerja seharian.

Ini berguna apabila:

- anda sedang membina arahan baharu
- anda sedang membandingkan dua versi arahan
- anda ingin menyemak nada, panjang, atau format output

<br/>

> ℹ️ **NOTA**<br/>
> Anda boleh mengeksport dan mengimport arahan yang disimpan di [**Tetapan** > **Arahan Transformasi**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Papan Pemuka

Gunakan **Papan Pemuka** untuk melihat sejauh mana anda menggunakan aplikasi ini dan berapa kosnya (untuk model berbayar).

![Ringkasan Papan Pemuka](../images/screenshots/ms/dashboard-summary.png)


<br/>

> ℹ️ **NOTA**<br/>
> Jika anda hanya menggunakan model percuma, carta berkaitan kos akan kosong.

<br/>

<a id="filter-the-data"></a>
### Tapis data

Gunakan butang penapis di bahagian atas untuk menukar julat masa.

![Penapis Papan Pemuka](../images/screenshots/ms/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> Penapis **Pengguna** hanya kelihatan kepada pentadbir dalam versi web. Pengguna biasa tidak akan melihat penapis ini, dan ia tidak tersedia dalam aplikasi desktop.

<br/>

<a id="dashboard-tabs"></a>

### Tab Papan Pemuka

- **Ringkasan** memberikan gambaran keseluruhan mengenai penggunaan dan kos.
- **Mengikut Penggunaan** membahagikan aktiviti berdasarkan bahasa terjemahan, mod tulis semula, dan promp transformasi.
- **Mengikut Model** menunjukkan model yang anda gunakan dan kos yang dikenakan.
- **Mengikut Hari** menunjukkan jumlah harian.
- **Semua Panggilan** menunjukkan sejarah panggilan penuh dan membolehkan anda mengeksportnya.

<br/>

<a id="export-data"></a>
### Eksport data

Jadual papan pemuka boleh mengeksport data dalam format:

- **JSON**
- **CSV**
- **XLSX**

Fungsi ini berguna jika anda ingin meninjau aktiviti di luar aplikasi atau berkongsi laporan.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Padam rekod tersimpan untuk model

Di bahagian **Mengikut Model** atau **Semua Panggilan**, anda boleh mengalih keluar rekod tersimpan bagi sesuatu model dengan mengklik ikon "tong sampah".

> ⚠️ **AMARAN**<br/>
> Penghapusan rekod tersimpan adalah tidak boleh ditarik balik. Gunakan hanya jika anda pasti tidak lagi memerlukan sejarah tersebut.

Untuk memadam semua data atau mengalih keluar rekod berdasarkan tempoh usia, pergi ke [**Tetapan** > **Pengesanan Kos**](#cost-tracking). Di sana anda akan menjumpai pilihan untuk memadam semua data tersimpan atau hanya data yang lebih lama daripada tarikh tertentu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Sejarah

Klik pada **Sejarah** untuk melihat rekod tindakan anda di dalam **Transrewrt**, termasuk input dan output bagi setiap operasi.

![Halaman Sejarah](../images/screenshots/ms/history.png)

<br/>

<a id="filter-the-history"></a>
### Tapis data

**Sejarah** menggunakan penapis yang sama seperti halaman **Papan Pemuka**. Gunakan penapis ini untuk memilih julat masa.

![Penapis Papan Pemuka](../images/screenshots/ms/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> Penapis **Pengguna** hanya kelihatan kepada pentadbir dalam versi web. Pengguna biasa tidak akan melihat penapis ini, dan ia tidak tersedia dalam aplikasi desktop.

<br/>

<a id="export-history-data"></a>
### Eksport data sejarah

Halaman sejarah boleh mengeksport data yang telah ditapis dalam format:

- **JSON**
- **CSV**
- **XLSX**

Fungsi ini berguna jika anda ingin meninjau aktiviti di luar aplikasi atau berkongsi laporan.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Tetapan

Buka **Tetapan** daripada bar sisi untuk menyesuaikan perlakuan aplikasi.

Tab yang tersedia bergantung kepada platform dan peranan anda:

  | Tab               | Desktop | Web (pentadbir) | Web (pengguna biasa) |
  |-------------------|:-------:|:---------------:|:--------------------:|
  | Tetapan Umum      |   ya    |       ya        |          ya          |
  | Model             |   ya    |       ya        |          ya          |
  | Bahasa            |   ya    |       ya        |          ya          |
  | Pengesanan Kos    |   ya    |       ya        |           —          |
  | Promp Transformasi|   ya    |       ya        |          ya          |
  | Pengguna          |    —    |       ya        |           —          |
  | Konfigurasi API   |   ya    |       ya        |           —          |
  | Mengenai          |   ya    |       ya        |          ya          |

<br/>

> ℹ️ **NOTA**<br/>
> Dalam versi web, setiap pengguna mempunyai konfigurasinya sendiri. Tetapan seperti model terpilih, bahasa, pilihan umum, dan promp transformasi disimpan mengikut pengguna. Perubahan yang anda buat tidak akan memberi kesan kepada pengguna lain.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Tetapan Umum

Gunakan **Tetapan Umum** untuk mengawal tingkah laku menaip, sama ada butiran pelaksanaan disimpan untuk **Sejarah**, dan rupa bentuk antara muka.

**Tingkah Laku**

- **Tingkah laku untuk ENTER** menentukan sama ada `Enter` melaksanakan tugas atau memasukkan baris baru.
- **Terjemah automatik semasa tampal** memulakan terjemahan sebaik sahaja anda menampal teks.
- **Salin hasil ke papan keratan secara automatik** menyalin hasil berjaya dengan serta-merta.
- **Terjemahan masa nyata (sementara menaip)** menterjemah sementara anda menaip.
- **Tempoh tamat (ms)** menetapkan masa tunggu untuk terjemahan masa nyata.

**Sejarah**

- **Simpan sejarah pelaksanaan** mengawal sama ada setiap operasi terjemahan, penulisan semula, dan transformasi menyimpan **teks input dan output** untuk paparan [**Sejarah**](#history) di bar sisi. Mematikan fungsi ini akan meminta pengesahan; jika anda mengesahkannya, teks sejarah yang disimpan akan dipadam daripada pangkalan data.
- **Padam data sejarah** membolehkan anda mengalih keluar teks yang disimpan berdasarkan usia (contohnya lebih daripada beberapa bulan, atau **semua data (kosongkan)**) menggunakan **Padam data**. Ini hanya mempengaruhi teks pelaksanaan yang disimpan bagi paparan **Sejarah**; ia **tidak** memadam jumlah kos atau penggunaan. Untuk memadam atau memangkas data **kos**, gunakan [**Tetapan** > **Pengesanan Kos**](#cost-tracking).

**Rupa Bentuk**

- **Tunjukkan maklumat kos pada tindakan** mengawal paparan kos setiap operasi (jika tersedia) dan jumlah kos pada panel output Terjemah, Tulis Semula, dan Transform.
- **Perpuluhan kos** menukar cara perpuluhan kos dipaparkan.
- **Versi web sahaja:** **tunjukkan margin di sekeliling aplikasi** menambah ruang tambahan di sekeliling antara muka.
- **Famili Fon** menukar fon penulisan dalam panel teks.
- **Saiz** menukar saiz fon.


<br/>

<a id="models"></a>

### Model

Gunakan **Tetapan** > **Model** untuk memilih model yang muncul pada bar alat.

![Tab Model Tetapan](../images/screenshots/ms/settings-models.png)

Halaman ini mempunyai dua senarai:

- **Model Tersedia** di sebelah kiri
- **Model Terpilih** di sebelah kanan

Kawalan berguna termasuk:

- **Cari model...** untuk mencari model mengikut nama
- **Chip Penyedia** untuk mengecilkan senarai kepada enjin tertentu (OpenRouter, OpenAI, Ollama, …)
- **Percuma Sahaja** untuk menunjukkan model yang percuma sahaja
- **Segar Semula** untuk memuat semula senarai
- **Kembangkan Semua** dan **Runtuhkan Semua** apabila menyusun mengikut penyedia

ID model termasuk awalan penyedia (contohnya `openrouter/…` berbanding `openai/…`). Lencana seperti **OpenAI (OpenRouter)** berbanding **OpenAI (langsung)** menunjukkan cara lalu lintas dihantar.

> ℹ️ **CATATAN**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) adalah model penghala, bukan model sembang umum: balasannya adalah JSON yang menerangkan badan permintaan API OpenRouter (contohnya tatasusunan `requests` dengan `model` dan `messages`). Jika anda menggunakannya untuk **Terjemah**, **Tulis Semula**, atau **Transform**, panel keluaran akan menunjukkan JSON berkenaan dan bukannya teks siap. Pilih model teks biasa untuk tugas-tugas ini. Lihat [halaman model Body Builder](https://openrouter.ai/openrouter/bodybuilder) di OpenRouter.

Tindakan:

 - Untuk menambah model, klik **Tambah** atau mana-mana bahagian entri tersebut.

 - Untuk mengalih keluar model, klik **X** di sebelahnya dalam **Model Terpilih** atau **Terpilih** pada entri dalam Model Tersedia.

 - Untuk memadam senarai, klik **Nyahpilih semua**. Model percuma wajib akan kekal dalam senarai.

<br/>

> ℹ️ **CATATAN**<br/>
> Jika anda tidak mahu menambah kredit ke OpenRouter serta-merta, mulakan dengan mengaktifkan **Percuma Sahaja** dan pilih model percuma (tiada kad kredit diperlukan). Anda juga boleh menggunakan Ollama untuk menjalankan model secara tempatan tanpa sebarang kunci API.

<br/>

<a id="languages"></a>
### Bahasa

Gunakan **Tetapan** > **Bahasa** untuk menyusun senarai bahasa yang digunakan dalam aplikasi.

- **Bahasa utama** dikimpalkan berhampiran bahagian atas senarai bahasa dalam **Terjemah** dan **Transform**.
- **Bahasa tersuai** membolehkan anda menambah bahasa yang tidak terdapat dalam senarai terbina dalam.

Jika anda menambah bahasa tersuai, ia akan muncul dalam pemilih bahasa bersama pilihan terbina dalam.

<br/>

<a id="cost-tracking"></a>
### Penjejakan Kos

Gunakan **Tetapan** > **Penjejakan Kos** untuk mengurus maklumat kos.

- **Jumlah Kos** menunjukkan jumlah terkumpul.
- **Salin Nilai** menyalin jumlah ke papan keratan.
- **Tetap Semula Kos** menetapkan semula jumlah disimpan kepada sifar.
- **Sinkron dengan penggunaan kunci API** menetapkan jumlah agar sepadan dengan penggunaan yang dilaporkan oleh akaun OpenRouter anda (OpenRouter sahaja).
- **Penggunaan Kunci API** menunjukkan butiran penggunaan OpenRouter, jika tersedia.
- **Padam data kos** membuang semua data, atau hanya kemasukan yang lebih lama daripada tarikh yang dipilih.

**Penjejakan kos:** Apabila anda menggunakan model OpenRouter, aplikasi menunjukkan penggunaan dan perbelanjaan sebenar anda berdasarkan maklumat kos daripada OpenRouter. Untuk semua penyedia lain, aplikasi menganggarkan kos menggunakan harga yang diterbitkan oleh OpenRouter; jika harga tidak tersedia, anggaran mungkin bernilai sifar.

<br/>

> ℹ️ **CATATAN**<br/>
> Semua angka kos adalah anggaran untuk rujukan anda sahaja, bukan penyata bil rasmi.

<br/>

> ⚠️ **AMARAN**<br/>
> Pemadaman data tidak boleh ditarik balik. Sebelum memadam, pastikan untuk membuat sandaran data anda atau mengeksportnya melalui [**Sejarah**](#history) 
> atau [**Papan Pemuka** > **Semua Panggilan**](#dashboard-tabs), jika tidak data akan hilang selama-lamanya.
> Semua sejarah input/output berkaitan setiap entri panggilan API juga akan dipadam.

<br/>

<a id="transform-prompts"></a>
### Prompt Transformasi

Gunakan **Tetapan** > **Prompt Transformasi** untuk mengurus prompt secara pukal.

Anda boleh:

- mengkaji prompt tersimpan anda
- memadam prompt
- import prompt daripada fail
- eksport prompt untuk sandaran atau perkongsian

<br/>

<a id="users"></a>
### Pengguna

Gunakan **Pengguna** untuk mengurus akaun pengguna dalam versi web. Anda boleh menambah pengguna, mengemas kini butiran mereka, menetap semula kata laluan, dan memadam akaun.

<br/>

<a id="api-config"></a>
### Konfigurasi API

Penyedia yang disokong termasuk: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, dan **Ollama** (model tempatan melalui URL asas). Anda hanya perlu mengkonfigurasi penyedia yang digunakan.

**Aplikasi web: pentadbir sahaja**

Kunci API dikonfigurasikan melalui pemboleh ubah persekitaran sistem atau Docker — ia tidak dimasukkan dalam UI web. Halaman ini menunjukkan penyedia mana yang mempunyai kunci dikonfigurasikan dan membolehkan anda menguji setiap satu dengan klik butang **`Uji`**.

<br/>

> ℹ️ **CATATAN**<br/>
> Untuk menukar kunci API, kemaskini pemboleh ubah persekitaran dalam konfigurasi sistem atau Docker anda dan mulakan semula pelayan atau bekas.

<br/>

**Aplikasi desktop**

Gunakan **Konfigurasi API** untuk menyimpan kunci API bagi setiap penyedia yang digunakan. Untuk Ollama, masukkan **URL asas** sebagai ganti kunci API.

<br/>

> 💡 **Petua** <br/>
> Jika anda tidak mahu menggunakan kunci API atau membayar penggunaan, anda boleh [muat turun Ollama](https://ollama.com) dan jalankan model (seperti `translategemma:4b`) secara tempatan pada komputer anda secara percuma. Sebagai alternatif, anda boleh buat akaun OpenRouter percuma (tiada kad kredit diperlukan) untuk menggunakan model percuma mereka, atau dapatkan kunci API percuma daripada Cerebras, Google, Groq, atau Mistral AI.

<br/>

- Tambah hanya penyedia yang diperlukan. Dalam **Tetapan** > **Model**, setiap id model bermula dengan penyedia (contohnya `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Untuk menambah kunci API, masukkan nilai dalam medan teks dan klik **`Simpan`**. Untuk menggantikan kunci sedia ada, klik **`Sunting`**. Untuk mengesahkan kunci berfungsi, klik **`Uji`**. Untuk URL asas Ollama, sentiasa klik **`Uji`** untuk memeriksa sambungan.

<br/>

> ℹ️ **CATATAN**<br/>
> Anda tidak boleh melihat nilai semasa bagi kunci API. Anda hanya boleh menggantikannya menggunakan butang **`Sunting`**.
> Kunci API disimpan dalam bentuk disulitkan dalam konfigurasi.

<br/>

<a id="about"></a>

### Mengenai

Tab **Mengenai** menunjukkan:

- nama aplikasi
- nombor versi
- tarikh binaan
- pautan ke repositori projek

<br/><br/>

<a id="common-issues"></a>
## Isu Lazim

Jika sesuatu tidak berfungsi seperti yang dijangkakan, semak perkara berikut dahulu.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikasi tidak menterjemah, menulis semula, atau mengubah teks

Semak bahawa:

- anda telah memilih model di bar alat
- sekurang-kurangnya satu model disenaraikan dalam [**Tetapan** > **Model**](#models)
- susunan API anda berfungsi

Jika anda menggunakan aplikasi desktop:

1. Buka [**Tetapan** > **Konfigurasi API**](#api-config).
2. Pastikan sekurang-kurangnya satu kunci API telah disimpan.
3. Klik **Uji** di sebelah penyedia untuk mengesahkan kunci berfungsi.

<br/>

<a id="the-model-list-is-empty"></a>
### Senarai model kosong

Buka [**Tetapan** > **Model**](#models) dan klik **Muat Semula**.

Jika perlu:

- cari model
- dayakan **Percuma Sahaja**
- tambah satu atau lebih model ke **Model Terpilih**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Keputusan terlalu perlahan atau terlalu mahal

Cuba salah satu atau lebih perkara berikut:

- pilih model lain
- gunakan input yang lebih pendek
- matikan **Terjemahan masa sebenar (semasa menaip)** di [**Tetapan** > **Tetapan Umum**](#general-settings)
- gunakan model percuma untuk tugas mudah (lihat [Model](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Antara muka dalam bahasa yang salah

Klik ikon globe di [bar alat](#toolbar) dan pilih **Bahasa Antara Muka** yang anda kehendaki.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Teks terlalu kecil atau sukar dibaca

Buka [**Tetapan** > **Tetapan Umum**](#general-settings) dan ubah:

- **Familai Fon**
- **Saiz**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Carta papan pemuka kosong

Ini adalah perkara biasa jika:

- anda hanya menggunakan **model percuma** (carta kos akan kosong)
- **penapis masa** terpilih tidak merangkumi tempoh panggilan dilakukan — cuba **Semua** untuk menyemak

Jika carta masih kosong selepas memilih **Semua**, pastikan panggilan muncul di [**Sejarah**](#history) atau di tab **Semua Panggilan**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Kos menunjukkan "tidak tersedia" atau kelihatan salah

Apabila anda menggunakan model melalui **OpenRouter**, aplikasi akan menunjukkan perbelanjaan sebenar yang dilaporkan oleh OpenRouter.

Untuk **penyedia lain** (OpenAI langsung, Anthropic langsung, dll.), kos diedarkan daripada data harga yang diterbitkan oleh OpenRouter. Jika tiada harga sepadan dijumpai untuk model tersebut, kos akan dipaparkan sebagai **tidak tersedia** dan tidak akan ditambah ke jumlah terkini anda.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Jumlah kos tidak sepadan dengan bil penyedia saya

Semua angka kos dalam aplikasi ini adalah **anggaran rujukan sahaja**, bukan penyata bil Rasmi.

Untuk membuat jumlah ini lebih hampir dengan perbelanjaan OpenRouter sebenar anda, buka [**Tetapan** > **Pengesanan Kos**](#cost-tracking) dan klik **Sejajar dengan penggunaan kunci API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Halaman Sejarah tiada di bar sisi

**Simpan sejarah pelaksanaan** mungkin dimatikan. Buka [**Tetapan** > **Tetapan Umum**](#general-settings) dan dayakan fungsi tersebut. Perhatikan bahawa menghidupkannya tidak akan memulihkan data sejarah yang sebelum ini telah dipadam.

<br/>

<a id="web-app-session-expired"></a>
### Aplikasi Web: diarahkan semula ke halaman log masuk tanpa disangka

Sesi anda mungkin telah tamat tempoh. Log masuk semula. Jika ini berlaku kerap, semak konfigurasi pelayan untuk tetapan tempoh hayat sesi.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Papan pemuka tidak menunjukkan data untuk pengguna lain (web)

Hanya **pentadbir** yang boleh melihat data semua pengguna melalui penapis **Pengguna**. Pengguna biasa hanya dapat melihat aktiviti mereka sendiri, seperti yang dirancang.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Saya mengubah prompt dan kehilangan suntingan

Semasa mengedit prompt, sentiasa klik **Simpan** sebelum klik **Kembali ke Laksana**.

<br/><br/>

<a id="quick-tips"></a>
## Petua Pantas

- Mulakan dengan [**Terjemah**](#translate) untuk memastikan susunan anda berfungsi sebelum beralih ke [**Tulis Semula**](#rewrite) atau [**Ubahsuai**](#transform).
- Gunakan [**Tulis Semula**](#rewrite) untuk penambahbaikan perkataan harian biasa.
- Gunakan [**Ubahsuai**](#transform) apabila anda memerlukan alur kerja yang boleh diulang untuk tugas tertentu.
- Gunakan [**Papan Pemuka**](#dashboard) jika anda ingin memantau penggunaan dan kos.
- Gunakan [**Sejarah**](#history) untuk mengkaji semula operasi terdahulu bersama teks input/output penuh.
- Eksport prompt secara berkala jika anda membina perpustakaan prompt yang ingin diselamatkan (lihat [Ubahsuai Prompt](#transform-prompts)) atau jika anda ingin perkongsian dengan orang lain.

<br/><br/>

<a id="disclaimer"></a>

## Penafian

Nama dan ikon produk adalah milik pemilik masing-masing dan digunakan semata-mata untuk tujuan pengenalan. Perisian ini tidak berkaitan atau disokong oleh mana-mana jenama yang disebutkan.

<br/><br/>

<a id="license"></a>
## Lesen

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Lesen Apache 2.0](LICENSE)