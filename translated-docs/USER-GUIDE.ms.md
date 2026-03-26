---
translated_at: "2026-03-26T00:53:36.225Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
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
- **Tulis semula** - menulis semula teks dengan gaya berbeza, seperti lebih jelas, ringkas, atau lebih formal.
- **Transformasi** - memproses teks menggunakan arahan AI tersuai yang dikenali sebagai petua.

<br/>

Panduan ini menerangkan cara menggunakan aplikasi setelah ia dipasang dan dijalankan. Untuk langkah-langkah pemasangan, lihat **[README](README.ms.md)** utama.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt boleh didapati sebagai aplikasi desktop untuk Windows dan Linux, serta aplikasi web yang disediakan sendiri. Panduan ini memfokuskan kepada penggunaan harian aplikasi. Di mana sesuatu fungsi hanya berlaku kepada satu versi, ia akan ditandakan dengan jelas.

<small>**Baca dalam bahasa lain:** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Nota tentang terjemahan UI dan dokumen:** Semua bahasa antara muka selain Bahasa Inggeris (UK) asal 
> diterjemahkan menggunakan model AI; perkataan yang digunakan mungkin kurang tepat atau terdapat kesilapan.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Jadual Kandungan** 

- [Sebelum bermula](#before-you-start)
  - [Cara mendapatkan kunci API OpenRouter percuma (aplikasi desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Permulaan](#getting-started)
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
  - [Jalankan petua yang sedia ada](#run-an-existing-prompt)
  - [Jika tiada petua lagi](#if-you-have-no-prompts-yet)
  - [Cipta petua dengan cepat](#create-a-prompt-quickly)
  - [Sunting petua](#edit-a-prompt)
  - [Uji petua sebelum menggunakannya](#test-a-prompt-before-using-it)
- [Papan pemuka](#dashboard)
  - [Tapis data](#filter-the-data)
  - [Tab papan pemuka](#dashboard-tabs)
  - [Eksport data](#export-data)
  - [Padam rekod yang disimpan untuk model](#delete-stored-records-for-a-model)
- [Sejarah](#history)
  - [Tapis data](#filter-the-data-1)
  - [Eksport data sejarah](#export-history-data)
- [Tetapan](#settings)
  - [Tetapan am](#general-settings)
  - [Model](#models)
  - [Bahasa](#languages)
  - [Pengesanan kos](#cost-tracking)
  - [Petua transformasi](#transform-prompts)
  - [Pengguna](#users)
  - [Konfigurasi API](#api-config)
  - [Tentang](#about)
- [Isu lazim](#common-issues)
  - [Aplikasi tidak menterjemah, menulis semula, atau mengubah bentuk teks](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Senarai model kosong](#the-model-list-is-empty)
  - [Keputusan terlalu perlahan atau terlalu mahal](#the-result-is-too-slow-or-too-expensive)
  - [Antara muka dalam bahasa yang salah](#the-interface-is-in-the-wrong-language)
  - [Teks terlalu kecil atau sukar dibaca](#the-text-is-too-small-or-hard-to-read)
  - [Carta papan pemuka kosong](#dashboard-charts-are-empty)
  - [Kos menunjukkan "tidak tersedia" atau kelihatan salah](#cost-shows-not-available-or-seems-wrong)
  - [Jumlah kos tidak sepadan dengan bil penyedia saya](#total-cost-does-not-match-my-provider-bill)
  - [Halaman Sejarah tiada dalam bar sisi](#the-history-page-is-missing-from-the-sidebar)
  - [Aplikasi web: dialihkan ke halaman log masuk secara tidak dijangka](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Papan pemuka tidak memaparkan data pengguna lain (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Saya mengubah petua dan kehilangan suntingan](#i-changed-a-prompt-and-lost-the-edits)
- [Petua pantas](#quick-tips)
- [Penafian](#disclaimer)
- [Lesen](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Sebelum anda bermula

Untuk menggunakan Transrewrt, anda perlu akses kepada sekurang-kurangnya satu penyedia AI. Penyedia yang disokong termasuk: [OpenRouter](https://openrouter.ai) (yang menggabungkan banyak model), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, dan [Ollama](https://ollama.com) untuk model tempatan.

Anda tidak perlu memilih model bayaran untuk bermula. Segera selepas menambah kunci API OpenRouter anda, aplikasi secara automatik membolehkan pilihan OpenRouter **percuma** terbina dalam. Ini membolehkan anda mula menterjemah, menulis semula, dan menukar teks serta-merta. Sebagai alternatif, anda juga boleh mendapatkan kunci API percuma daripada Cerebras, Google, Groq, atau Mistral AI.

Dalam bahasa biasa:

- **Model** ialah enjin AI yang melakukan kerja. Model disenaraikan dengan awalan **penyedia** (contohnya `openrouter/…`, `openai/…`, `ollama/…`).
- **Kunci API** (atau, untuk Ollama, **URL asas**) ialah cara aplikasi menghubungi penyedia itu.

Jika anda menggunakan **aplikasi desktop**, tambah kunci di [**Tetapan** > **Konfigurasi API**](#api-config) bagi setiap penyedia yang digunakan. Untuk penggunaan OpenRouter sahaja, lihat [Cara mendapatkan kunci API](#how-to-get-an-api-key-desktop-app) di bawah. Jika anda tidak mahu menggunakan kunci API, anda boleh memasang Ollama (daripada [ollama.com](https://ollama.com)) dan menggunakan model tempatan sebagai ganti, seperti `translategemma:4b`.

Jika anda menggunakan **versi web**, pemilik pelayan mengkonfigurasi penyedia menggunakan pemboleh ubah persekitaran, jadi anda tidak boleh memasukkan kunci API secara langsung dalam aplikasi.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cara mendapatkan kunci API OpenRouter percuma (aplikasi desktop)

Jika anda menggunakan aplikasi desktop, ikuti langkah-langkah berikut:

1. Pergi ke [OpenRouter](https://openrouter.ai) dalam pelayar sesawang anda.
2. Cipta akaun atau log masuk.
3. Buka halaman [Keys](https://openrouter.ai/keys).
4. Klik butang untuk mencipta kunci API baru.
5. Beri nama kepada kunci tersebut supaya anda dapat mengenal pastinya nanti.
6. Salin kunci API yang baharu.
7. Kembali ke Transrewrt dan buka **Tetapan** > **Konfigurasi API**.
8. Tampal kunci ke dalam **Kunci API OpenRouter** (di bawah **Tetapan** > **Konfigurasi API**).
9. Klik **Uji kunci OpenRouter** untuk memastikan ia berfungsi.

<br/><br/>

<a id="getting-started"></a>
## Memulakan

Jika ini kali pertama anda menggunakan Transrewrt, ikuti susunan berikut:

1. Buka aplikasi.
2. Pilih **Bahasa antara muka** anda daripada ikon globe jika perlu.
3. Jika anda menggunakan **aplikasi desktop**, buka [**Tetapan** > **Konfigurasi API**](#api-config), tambah kunci API untuk sekurang-kurangnya satu penyedia (contohnya OpenRouter), dan klik **Uji** untuk mengesahkan ia berfungsi.
4. Buka [**Tetapan** > **Model**](#models) dan tambah satu atau lebih model ke **Model Terpilih**.
5. Buka [**Tetapan** > **Bahasa**](#languages) dan pilih **Bahasa utama** anda jika anda mahu bahasa yang paling kerap digunakan muncul dahulu.
6. Pergi ke **Terjemah** dan jalankan terjemahan mudah untuk mengesahkan segala-galanya berfungsi.
7. Apabila berjaya, cuba **Tulis Semula** dan kemudian **Tukar**.

Susunan ini penting. Ia mengelakkan masalah pertama yang biasa berlaku: mencuba menjalankan tugas sebelum aplikasi mempunyai sambungan API yang berfungsi atau model yang dipilih.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Bahagian utama tetingkap

Aplikasi ini dibahagikan kepada tiga kawasan utama:

- **Bar sisi** di sebelah kiri.
- **Palang alat** di bahagian atas.
- **Kawasan kerja** di tengah.

<br/>

<a id="sidebar"></a>
### Bar Sisi

Gunakan bar sisi untuk bergerak di sekitar aplikasi. Anda boleh merendahkan bar sisi untuk mendapatkan lebih banyak ruang dengan mengklik ikon di sebelah logo aplikasi.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/ms/sidebar.png" alt="Bar Sisi Aplikasi" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Terjemah</strong> membuka ruang kerja terjemahan.</li><br/>
        <li><strong>Tulis Semula</strong> membuka ruang kerja penulisan semula.</li><br/>
        <li><strong>Tukar</strong> membuka ruang kerja arahan tersuai.</li><br/>
        <li><strong>Papan Pemuka</strong> menunjukkan maklumat penggunaan dan kos.</li><br/>
        <li><strong>Tetapan</strong> membuka panel tetapan.</li><br/>
        <li><strong>Sejarah</strong> menunjukkan sejarah penggunaan berserta teks input dan output</li><br/>
        <li><strong>Pengguna</strong> menunjukkan nama pengguna yang sedang log masuk (versi web sahaja).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Bar Alat

Bar alat berubah sedikit bergantung kepada lokasi anda dalam aplikasi.

- Di sebelah kiri, ia menunjukkan nama halaman semasa.
- Di sebelah kanan, ia menunjukkan **pemilih model** dan kawalan **Bahasa Antaramuka**.

**Pemilih model** membolehkan anda memilih enjin AI yang digunakan untuk tugas semasa.

  ![Pemilih model](../images/screenshots/ms/model-selector.png)

Sesetengah model percuma mungkin tidak sentiasa tersedia—kadangkala ia sedang luar talian atau mempunyai had penggunaan. Jika ini berlaku, aplikasi akan secara automatik mengalih keluar model tersebut daripada senarai anda. Untuk mengawal model yang dipaparkan, pergi ke [**Tetapan** > **Model**](#models) dan edit senarai model anda.
Anda juga boleh membuka tetapan model secara terus dengan mengklik ikon penyedia di sebelah kiri nama model dalam bar alat.

<br/>

**Ikon globe + kod bahasa** menukar bahasa antaramuka aplikasi, seperti menu dan butang. Ia **tidak** menukar bahasa terjemahan yang digunakan dalam **Terjemah**.

  ![Pemilih bahasa antaramuka](../images/screenshots/ms/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panel input dan output

Kebanyakan ruang kerja menggunakan panel **Input** di sebelah kiri dan panel **Output** di sebelah kanan.

Setiap panel juga memaparkan:

| **Input**                                                             | **Output**                                                                                                                      |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| - Jumlah aksara <br/>- Jumlah perkataan <br/>- Jumlah perenggan   <br/> | - Tempoh penyiapan tugas<br/>- **TPS** (token per saat)<br/>- Jumlah aksara, perkataan, dan perenggan<br/>- Model yang digunakan |


Jika anda tertanya-tanya tentang istilah teknikal:

- **Token** bermaksud serpihan teks yang kecil. Anda boleh memikirkannya sebagai sebahagian daripada perkataan atau perkataan pendek.
- **TPS** bermaksud berapa banyak serpihan teks yang diproses oleh model setiap saat.

<br/>

Anda juga boleh memantau kos bagi setiap operasi (jika tersedia) dan jumlah kos dengan mengaktifkan pilihan `Papar maklumat kos pada tindakan` di [**Tetapan** > **Tetapan Umum**](#general-settings). 

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Terjemah

Gunakan **Terjemah** apabila anda ingin menukar teks daripada satu bahasa ke bahasa lain.

![Ruang kerja Terjemah](../images/screenshots/ms/translate.png)

<br/>

<a id="translate-text"></a>
### Terjemahkan teks

1. Buka **Terjemah**.
2. Pilih bahasa di **Dari**.
3. Pilih bahasa di **Ke**.
4. Pilih model dalam bar alat.
5. Taip atau tampal teks ke dalam **Input**.
6. Klik **Terjemah**.
7. Baca hasilnya di **Output**.
8. Gunakan butang salin jika anda mahu menyalin hasil.

<br/>

<a id="language-selection"></a>
### Pemilihan bahasa

- **Dari** boleh menjadi bahasa khusus atau **Kesan Bahasa**.
- **Ke** ialah bahasa yang anda mahu hasilnya.

**Bahasa Utama** yang dipilih akan dipaparkan di bahagian atas senarai. Anda boleh menetapkannya di [**Tetapan** > **Bahasa**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Tetapan terjemahan berguna

Di [**Tetapan** > **Tetapan Umum**](#general-settings), anda boleh menukar cara terjemahan berfungsi:

- **Terjemah automatik apabila tampal** menjalankan terjemahan sebaik sahaja anda menampal teks.
- **Salin hasil ke papan keratan secara automatik** menyalin hasil secara automatik selepas terjemahan berjaya.
- **Terjemahan masa nyata (semasa menaip)** menjalankan terjemahan semasa anda menaip.
- **Tempoh tamat (ms)** mengawal berapa lama aplikasi menunggu sebelum menjalankan terjemahan masa nyata.
- **Enter** mengawal apa yang berlaku apabila anda menekan `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Tulis Semula

Gunakan **Tulis Semula** apabila anda ingin memperbaiki perkataan tanpa mengubah makna utama.

![Ruang kerja Tulis Semula](../images/screenshots/ms/rewrite.png)

Ini berguna untuk:

- membetulkan ejaan dan tatabahasa
- menjadikan teks lebih jelas
- menjadikan teks lebih formal atau kurang formal
- memendekkan atau memanjangkan teks
- menjadikan teks lebih teknikal

<br/>

> 💡 **PETUA**<br/>
> Apabila anda menggunakan mod "**Semak Ejaan & Tatabahasa**", butang `Tunjukkan perubahan` akan muncul di panel output.
> Klik butang ini untuk menukar paparan pembetulan, sama ada menunjukkan atau menyembunyikan perubahan khusus yang dibuat kepada teks anda.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transform

Gunakan **Transform** apabila anda mahu AI mengikuti satu set arahan tersuai.

![Ruang kerja Transform](../images/screenshots/ms/transform.png)

Ini adalah kawasan paling fleksibel dalam aplikasi. Anda boleh menggunakannya untuk tugas seperti:

- merumuskan nota
- menukar teks kasar kepada e-mel yang lengkap
- mengekstrak titik utama
- menukar teks kepada format tertentu
- sebarang aktiviti tersuai lain dengan teks input

<br/>

<a id="run-an-existing-prompt"></a>
### Jalankan arahan sedia ada

1. Buka **Transform**.
2. Pilih arahan daripada senarai arahan.
3. Jika kotak **Bahasa Sasaran** muncul, pilih bahasa jika diperlukan.
4. Taip atau tampal teks ke dalam **Input**.
5. Klik **Transform**.
6. Baca hasilnya di **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Jika anda belum mempunyai arahan

Jika senarai arahan anda kosong, klik **Muat arahan sampel**. Ini akan menambah contoh terbina dalam supaya anda boleh mula dengan cepat.

<br/>

> ℹ️ **NOTA**<br/>
> Arahan sampel disediakan dalam Bahasa Inggeris. Selepas dimuatkan, anda boleh mengedit arahan dan gunakan **Terjemah arahan** untuk menterjemahkannya ke dalam bahasa anda.

<br/>

<a id="create-a-prompt-quickly"></a>
### Cipta arahan dengan pantas

Cara terpantas untuk mencipta arahan ialah:

1. Klik **Arahan Baharu**.
2. Klik **Jana arahan**.
3. Huraikan apa yang anda mahu arahan itu lakukan.
4. Pilih model.
5. Biarkan aplikasi menjana draf untuk anda.
6. Semak draf tersebut dan klik **Simpan**.

![Jana arahan](../images/screenshots/ms/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Edit arahan

Apabila anda mencipta atau mengedit arahan, editor akan muncul di sebelah kiri dan kawasan ujian akan muncul di sebelah kanan.

![Editor arahan Transform](../images/screenshots/ms/transform-prompt-edit.png)

Medan utama adalah:

- **Nama arahan**: nama yang dipaparkan dalam senarai arahan.
- **Arahan arahan (pilihan)**: petua ringkas yang dipaparkan kepada pengguna apabila menjalankan arahan.
- **Peranan Model**: peranan keseluruhan yang diberikan kepada AI, seperti 'Anda adalah pembantu yang membantu.'
- **Arahan Model (satu per baris)**: peraturan khusus yang anda mahu AI ikuti.
- **Penerangan Output**: perkataan ringkas yang menerangkan keputusan, seperti 'ringkasan' atau 'tulis semula'.
- **Suhu (0.0 → 1.0)**: bagaimana model akan berkelakuan; lihat di bawah.
- **Minta bahasa sasaran**: menambah pemilih bahasa sasaran apabila arahan dijalankan.

Jika istilah teknikal **Suhu** adalah baru kepada anda, fahaminya seperti berikut:

- **Suhu yang lebih rendah** memberikan keputusan yang lebih stabil dan boleh diramal.
- **Suhu yang lebih tinggi** memberikan lebih variasi dan kreativiti.

Anda juga boleh gunakan:

- **`Jana arahan`** untuk mencipta draf baharu daripada huraian ringkas
- **`Baik pulih arahan`** untuk menambah baik arahan sedia ada
- **`Terjemah arahan`** untuk menterjemahkan medan arahan

<br/>

> ⚠️ **AMARAN**<br/>
> Klik **`Simpan`** sebelum klik **`Kembali ke Larian`**. Jika anda kembali tanpa menyimpan, perubahan anda akan hilang.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Uji arahan sebelum menggunakannya

Panel ujian di sebelah kanan membolehkan anda mencuba arahan anda dengan teks sampel sebelum menggunakannya dalam kerja harian.

Ini berguna apabila:

- anda sedang membina arahan baharu
- anda sedang membandingkan dua versi arahan
- anda mahu menyemak ton, panjang atau format output

<br/>

> ℹ️ **NOTA**<br/>
> Anda boleh mengeksport dan mengimport arahan yang disimpan di [**Tetapan** > **Arahan Transform**](#transform-prompts).

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

Gunakan butang penapis di bahagian atas untuk mengubah julat masa.

![Penapis Papan Pemuka](../images/screenshots/ms/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> Penapis **Pengguna** hanya kelihatan kepada pentadbir dalam versi web. Pengguna biasa tidak dapat melihat penapis ini, dan ia tidak tersedia dalam aplikasi desktop.

<br/>

<a id="dashboard-tabs"></a>

### Tab Papan Pemuka

- **Ringkasan** memberikan gambaran keseluruhan tentang penggunaan dan kos.
- **Mengikut Penggunaan** membahagikan aktiviti mengikut bahasa terjemahan, mod tulis semula, dan petua transformasi.
- **Mengikut Model** menunjukkan model-model yang anda gunakan dan kos masing-masing.
- **Mengikut Hari** menunjukkan jumlah harian.
- **Semua Panggilan** menunjukkan sejarah panggilan penuh dan membolehkan anda mengeksportnya.

<br/>

<a id="export-data"></a>
### Eksport data

Jadual-jadual papan pemuka boleh mengeksport data dalam format:

- **JSON**
- **CSV**
- **XLSX**

Ini berguna jika anda ingin meninjau aktiviti di luar aplikasi tersebut atau berkongsi laporan.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Padam rekod tersimpan untuk model

Di bawah **Mengikut Model** atau **Semua Panggilan**, anda boleh mengalih keluar rekod tersimpan bagi model dengan mengklik ikon "tong sampah".

> ⚠️ **AMARAN**<br/>
> Penghapusan rekod yang disimpan tidak boleh ditarik balik. Gunakan fungsi ini hanya jika anda pasti tidak memerlukan sejarah tersebut lagi.

Untuk memadam semua data atau mengalih keluar rekod berdasarkan usia, pergi ke [**Tetapan** > **Penjejakan Kos**](#cost-tracking). Di sana, anda akan dapati pilihan untuk padam semua data tersimpan atau hanya data yang lebih lama daripada tarikh tertentu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Sejarah

Klik pada **Sejarah** untuk melihat rekod tindakan anda dalam **Transrewrt**, termasuk input dan output bagi setiap operasi.

![Halaman Sejarah](../images/screenshots/ms/history.png)

<br/>

<a id="filter-the-history"></a>
### Tapis data

**Sejarah** menggunakan penapis yang sama seperti halaman **Papan Pemuka**. Gunakannya untuk memilih julat masa.

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

Ciri ini berguna jika anda ingin meninjau aktiviti di luar aplikasi atau berkongsi laporan.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Tetapan

Buka **Tetapan** daripada bar sisi untuk menyesuaikan kelakuan aplikasi.

Tab yang tersedia bergantung kepada platform dan peranan anda:

  | Tab               | Desktop | Web (pentadbir) | Web (pengguna biasa) |
  |-------------------|:-------:|:---------------:|:--------------------:|
  | Tetapan Umum      |   ya    |       ya        |          ya          |
  | Model             |   ya    |       ya        |          ya          |
  | Bahasa            |   ya    |       ya        |          ya          |
  | Penjejakan Kos    |   ya    |       ya        |           —          |
  | Petua Transformasi|   ya    |       ya        |          ya          |
  | Pengguna          |    —    |       ya        |           —          |
  | Konfigurasi API   |   ya    |       ya        |           —          |
  | Perihal           |   ya    |       ya        |          ya          |

<br/>

> ℹ️ **NOTA**<br/>
> Dalam versi web, setiap pengguna mempunyai konfigurasinya sendiri. Tetapan seperti model dipilih, bahasa, pilihan umum, dan petua transformasi disimpan per pengguna. Perubahan yang anda buat tidak menjejaskan pengguna lain.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Tetapan Umum

Gunakan **Tetapan Umum** untuk mengawal tingkah laku menaip, sama ada butiran pelaksanaan disimpan untuk **Sejarah**, dan rupa bentuk antara muka.

**Tingkah Laku**

- **Tingkah laku ENTER** memilih sama ada `Enter` melaksanakan tugas atau menyisipkan baris baru.
- **Terjemah automatik semasa tampal** memulakan terjemahan sebaik sahaja anda menampal teks.
- **Salin hasil ke papan keratan secara automatik** menyalin hasil yang berjaya secara automatik.
- **Terjemahan masa sebenar (semasa menaip)** menterjemah ketika anda menaip.
- **Had masa (ms)** menetapkan tempoh tunggu untuk terjemahan masa sebenar.

**Sejarah**

- **Simpan sejarah pelaksanaan** mengawal sama ada setiap terjemahan, penulisan semula, dan transformasi menyimpan **teks input dan output** untuk paparan [**Sejarah**](#history) di bar sisi. Mematikannya akan meminta pengesahan; jika anda mengesahkannya, teks sejarah yang disimpan akan dipadamkan dari pangkalan data.
- **Padam data sejarah** membolehkan anda mengalih keluar teks tersimpan mengikut umur (contohnya, lebih daripada beberapa bulan, atau **semua data (bersihkan)**) menggunakan **Padam data**. Fungsi ini hanya menjejaskan teks pelaksanaan yang telah disimpan untuk paparan **Sejarah**; ia **tidak** memadamkan jumlah kos atau penggunaan. Untuk mengalih keluar atau memotong data **kos**, gunakan [**Tetapan** > **Penjejakan Kos**](#cost-tracking).

**Rupa Bentuk**

- **Tunjukkan maklumat kos pada tindakan** mengawal paparan kos setiap operasi (jika tersedia) dan jumlah kos pada panel keluaran Terjemah, Tulis Semula, dan Transform.
- **Perpuluhan digit kos** mengubah cara perpuluhan kos dipaparkan.
- **Untuk web sahaja:** **tunjukkan jarak tepi di sekeliling aplikasi** menambah ruang tambahan di sekeliling antara muka.
- **Fon** mengubah fon penulisan pada panel teks.
- **Saiz** mengubah saiz fon.

<br/>

<a id="models"></a>

### Model

Gunakan **Tetapan** > **Model** untuk memilih model yang muncul pada bar alat.

![Tab Model Tetapan](../images/screenshots/ms/settings-models.png)

Halaman ini mempunyai dua senarai:

- **Model Tersedia** di sebelah kiri
- **Model Dipilih** di sebelah kanan

Kawalan berguna termasuk:

- **Cari model...** untuk mencari model berdasarkan nama
- Kepingan **Penyedia** untuk mengecilkan senarai kepada enjin tertentu (OpenRouter, OpenAI, Ollama, …)
- **Percuma Sahaja** untuk menunjukkan model percuma sahaja
- **Segarkan** untuk memuat semula senarai
- **Kembangkan Semua** dan **Runtuhkan Semua** apabila menyusun mengikut penyedia

ID model termasuk awalan penyedia (contohnya `openrouter/…` vs `openai/…`). Lencana seperti **OpenAI (OpenRouter)** vs **OpenAI (langsung)** menunjukkan cara lalu lintas dihantar.

> ℹ️ **NOTA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) adalah model penghala, bukan model sembang umum: balasannya adalah JSON yang menerangkan badan permintaan API OpenRouter (contohnya tatasusunan `requests` dengan `model` dan `messages`). Jika digunakan untuk **Terjemah**, **Tulis Semula**, atau **Transform**, panel keluaran akan menunjukkan JSON itu bukannya teks siap. Pilih model teks biasa untuk tugas-tugas ini. Rujuk [laman model Body Builder](https://openrouter.ai/openrouter/bodybuilder) di OpenRouter.

Tindakan:

 - Untuk menambah model, klik **Tambah** atau mana-mana bahagian entri tersebut.

 - Untuk mengalih keluar model, klik **X** bersebelahan dalam **Model Dipilih** atau **Dipilih** pada entri di Model Tersedia.

 - Untuk mengosongkan senarai, klik **Nyahpilih semua**. Model percuma yang diperlukan akan kekal dalam senarai.

<br/>

> ℹ️ **NOTA**<br/>
> Jika anda tidak mahu menambah kredit ke OpenRouter serta-merta, mulakan dengan mengaktifkan **Percuma Sahaja** dan memilih model-model percuma (tiada kad kredit diperlukan). Anda juga boleh gunakan Ollama untuk menjalankan model secara tempatan tanpa kunci API.

<br/>

<a id="languages"></a>
### Bahasa

Gunakan **Tetapan** > **Bahasa** untuk menyusun senarai bahasa yang digunakan dalam aplikasi.

- **Bahasa Utama** dipasak berhampiran bahagian atas senarai bahasa dalam **Terjemah** dan **Transform**.
- **Bahasa suai** membolehkan anda menambah bahasa yang tiada dalam senarai sedia ada.

Jika anda menambah bahasa suai, ia akan muncul dalam pemilih bahasa bersama pilihan binaan.

<br/>

<a id="cost-tracking"></a>
### Penjejakan kos

Gunakan **Tetapan** > **Penjejakan Kos** untuk mengurus maklumat kos.

- **Jumlah Kos** menunjukkan jumlah terkini.
- **Salin Nilai** menyalin jumlah ke dalam papan keratan.
- **Tetap Semula Kos** menetapkan semula jumlah yang disimpan kepada sifar.
- **Sinkron dengan penggunaan kunci API** menetapkan jumlah agar sepadan dengan penggunaan yang dilaporkan oleh akaun OpenRouter anda (OpenRouter sahaja).
- **Penggunaan Kunci API** menunjukkan butiran penggunaan OpenRouter, jika tersedia.
- **Padam data kos** mengalih keluar semua data, atau hanya kemasukan yang lebih lama daripada tarikh yang dipilih.


 **Penjejakan kos:** Apabila anda menggunakan model OpenRouter, aplikasi menunjukkan penggunaan dan perbelanjaan sebenar berdasarkan maklumat kos daripada OpenRouter. Untuk semua penyedia lain, aplikasi menganggar kos menggunakan harga yang diterbitkan oleh OpenRouter; jika tiada harga tersedia, anggaran mungkin sifar.

<br/>

> ℹ️ **NOTA**<br/>
>  **Semua angka kos hanyalah anggaran untuk rujukan anda sahaja, bukan penyata bil rasmi.**


<br/>

> ⚠️ **AMARAN**<br/>
> Pemadaman data tidak boleh diterbalikkan. Sebelum memadam, pastikan untuk membuat sandaran data anda atau mengeksportnya melalui [**Sejarah**](#history) 
> atau [**Papan Pemuka** > **Semua Panggilan**](#dashboard-tabs), jika tidak data akan hilang kekal. 
> Semua sejarah input/output yang berkaitan dengan setiap entri panggilan API juga akan dipadam.

<br/>

<a id="transform-prompts"></a>
### Prompt Transform

Gunakan **Tetapan** > **Prompt Transform** untuk mengurus prompt secara pukal.

Anda boleh:

- menyemak semula prompt tersimpan anda
- memadam prompt
- mengimport prompt daripada fail
- mengeksport prompt untuk sandaran atau perkongsian

<br/>

<a id="users"></a>
### Pengguna

Gunakan **Pengguna** untuk mengurus akaun pengguna dalam versi web. Anda boleh menambah pengguna, mengemaskini butiran mereka, menetapkan semula kata laluan, dan memadam akaun.

<br/>

<a id="api-config"></a>
### Konfigurasi API

Penyedia yang disokong termasuk: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, dan **Ollama** (model tempatan melalui URL asas). Anda hanya perlu mengkonfigur penyedia yang anda gunakan.

**Aplikasi web: pentadbir sahaja**

Kunci API dikonfigurasi melalui pemboleh ubah persekitaran sistem atau Docker — ia tidak dimasukkan dalam UI web. Halaman ini menunjukkan penyedia mana yang mempunyai kunci dikonfigurasi dan membolehkan anda menguji setiap satu dengan mengklik butang **`Uji`**.

<br/>

> ℹ️ **NOTA**<br/>
> Untuk menukar kunci API, kemas kini pemboleh ubah persekitaran dalam konfigurasi sistem atau Docker anda dan mulakan semula pelayan atau bekas.

<br/>

**Aplikasi desktop**

Gunakan **Konfigurasi API** untuk menyimpan kunci API bagi setiap penyedia yang digunakan. Untuk Ollama, masukkan **URL asas** sebagai ganti kunci API.

<br/>

> 💡 **Petua** <br/>
> Jika anda tidak mahu menggunakan kunci API atau membayar penggunaan, anda boleh [muat turun Ollama](https://ollama.com) dan jalankan model (seperti `translategemma:4b`) secara tempatan pada komputer anda secara percuma. Sebagai alternatif, anda boleh membuat akaun OpenRouter percuma (tiada kad kredit diperlukan) untuk menggunakan model percuma mereka, atau memperoleh kunci API percuma daripada Cerebras, Google, Groq, atau Mistral AI.

<br/>

- Tambahkan hanya penyedia yang anda perlukan. Dalam **Tetapan** > **Model**, setiap id model bermula dengan penyedia (contohnya `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Untuk menambah kunci API, masukkan nilai dalam ruangan teks dan klik **`Simpan`**. Untuk menggantikan kunci sedia ada, klik **`Edit`**. Untuk mengesahkan kunci berfungsi, klik **`Uji`**. Bagi URL asas Ollama, sentiasa klik **`Uji`** untuk menyemak sambungan.

<br/>

> ℹ️ **NOTA**<br/>
> Anda tidak boleh melihat nilai kini kunci API. Anda hanya boleh menggantikannya menggunakan butang **`Edit`**.
> Kunci API disimpan dalam bentuk disulit dalam konfigurasi.

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

Jika sesuatu tidak berfungsi seperti dijangkakan, semak dahulu perkara berikut.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikasi tidak menterjemah, menulis semula, atau mengubah teks

Semak bahawa:

- anda telah memilih model pada bar alat
- sekurang-kurangnya satu model disenaraikan dalam [**Tetapan** > **Model**](#models)
- susunan API anda berfungsi

Jika anda menggunakan aplikasi desktop:

1. Buka [**Tetapan** > **Konfigurasi API**](#api-config).
2. Pastikan sekurang-kurangnya satu kunci API telah disimpan.
3. Klik **Uji** di sebelah penyedia untuk mengesahkan kunci berfungsi.

<br/>

<a id="the-model-list-is-empty"></a>
### Senarai model kosong

Buka [**Tetapan** > **Model**](#models) dan klik **Segarkan**.

Jika perlu:

- cari model
- dayakan **Percuma Sahaja**
- tambah satu atau lebih model ke **Model Terpilih**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Keputusan terlalu perlahan atau terlalu mahal

Cuba salah satu atau lebih perkara berikut:

- pilih model yang berbeza
- gunakan input yang lebih pendek
- matikan **Penterjemahan masa sebenar (semasa menaip)** dalam [**Tetapan** > **Tetapan Umum**](#general-settings)
- gunakan model percuma untuk tugas ringkas (rujuk [Model](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Antara muka dalam bahasa yang salah

Klik ikon globe pada [bar alat](#toolbar) dan pilih **Bahasa Antara Muka** yang anda kehendaki.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Teks terlalu kecil atau sukar dibaca

Buka [**Tetapan** > **Tetapan Umum**](#general-settings) dan ubah:

- **Familia Fon**
- **Saiz**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Carta papan pemuka kosong

Ini adalah normal jika:

- anda hanya menggunakan **model percuma** (carta kos akan kosong)
- **penapis masa** terpilih tidak merangkumi tempoh panggilan dibuat — cuba **Semua** untuk menyemak

Jika carta tetap kosong selepas memilih **Semua**, pastikan panggilan wujud di [**Sejarah**](#history) atau pada tab **Semua Panggilan**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Kos dipaparkan sebagai "tidak tersedia" atau kelihatan salah

Apabila anda menggunakan model melalui **OpenRouter**, aplikasi akan memaparkan perbelanjaan sebenar yang dilaporkan oleh OpenRouter.

Untuk **penyedia lain** (OpenAI langsung, Anthropic langsung, dll.), kos dianggarkan berdasarkan data harga yang diterbitkan oleh OpenRouter. Jika tiada harga yang sepadan dijumpai untuk sesuatu model, kos akan dipaparkan sebagai **tidak tersedia** dan tidak akan dimasukkan ke dalam jumlah terkini anda.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Jumlah kos tidak sepadan dengan bil penyedia saya

Semua nilai kos dalam aplikasi ini adalah **anggaran rujukan sahaja**, bukan penyata rasmi bil.

Untuk membuat jumlah hampir dengan perbelanjaan OpenRouter sebenar anda, buka [**Tetapan** > **Pengesanan Kos**](#cost-tracking) dan klik **Sejajar dengan penggunaan kunci API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Halaman Sejarah tiada pada bar sisi

**Simpan sejarah pelaksanaan** mungkin dimatikan. Buka [**Tetapan** > **Tetapan Umum**](#general-settings) dan dayakannya. Perhatikan bahawa menyalahkannya tidak akan memulihkan data sejarah yang telah dipadamkan sebelum ini.

<br/>

<a id="web-app-session-expired"></a>
### Aplikasi web: diarahkan semula ke halaman log masuk secara tidak dijangka

Sesi anda mungkin telah tamat tempoh. Log masuk semula. Jika ini berlaku kerap, semak konfigurasi pelayan untuk tetapan tempoh sesi.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Papan pemuka tidak memaparkan data untuk pengguna lain (web)

Hanya **pentadbir** yang boleh melihat data semua pengguna melalui penapis **Pengguna**. Pengguna biasa hanya melihat aktiviti mereka sendiri seperti yang direka.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Saya menukar arahan dan kehilangan suntingan

Apabila menyunting arahan, sentiasa klik **Simpan** sebelum klik **Kembali ke Jalan**.

<br/><br/>

<a id="quick-tips"></a>
## Petua Pantas

- Mula dengan [**Terjemah**](#translate) untuk memastikan konfigurasi anda berfungsi sebelum beralih ke [**Tulis Semula**](#rewrite) atau [**Ukur Semula**](#transform).
- Gunakan [**Tulis Semula**](#rewrite) untuk penyempurnaan perkataan harian.
- Gunakan [**Ukur Semula**](#transform) apabila memerlukan alur kerja yang boleh diulang untuk tugas khusus.
- Gunakan [**Papan Pemuka**](#dashboard) jika anda ingin memantau penggunaan dan kos.
- Gunakan [**Sejarah**](#history) untuk meninjau operasi lampau dan teks input/output penuh mereka.
- Eksport arahan secara berkala jika anda membina perpustakaan arahan yang ingin diselamatkan (rujuk [Ubah Arahan](#transform-prompts)) atau jika ingin dikongsi dengan orang lain.

<br/><br/>

<a id="disclaimer"></a>

## Penafian

Nama dan ikon produk adalah milik pemilik masing-masing dan digunakan semata-mata untuk tujuan pengenalan. Perisian ini tidak berkaitan atau disokong oleh mana-mana jenama yang disebutkan.

<br/><br/>

<a id="license"></a>
## Lesen

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Lesen Apache 2.0](LICENSE)