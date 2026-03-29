---
translated_at: "2026-03-29T01:55:32.301Z"
source_hash: "8981b8db163153bfc443046fa20a49b33c92b9feebdee302f6ef60852f273472"
source_mtime: "2026-03-29T01:41:58.368Z"
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
- **Tulis semula** - menggubah semula teks dengan gaya yang berbeza, seperti lebih jelas, lebih ringkas atau lebih formal.
- **Transformasi** - memproses teks menggunakan arahan AI tersuai yang dikenali sebagai "prompts".

<br/>

Panduan ini menerangkan cara menggunakan aplikasi ini setelah ia dipasang dan dijalankan. Untuk langkah-langkah pemasangan, rujuk **[README](README.ms.md)** utama.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt boleh didapati sebagai aplikasi desktop untuk Windows dan Linux, serta sebagai aplikasi web yang dibina sendiri. Panduan ini memberi tumpuan kepada penggunaan harian aplikasi. Di mana sesuatu hanya melibatkan satu versi sahaja, ia akan ditandakan dengan jelas.

<small>**Baca dalam bahasa lain:** </small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Nota mengenai terjemahan UI dan dokumentasi:** Semua bahasa antara muka kecuali bahasa Inggeris (UK) asal 
> diterjemahkan menggunakan model AI; frasa yang digunakan mungkin kurang tepat atau mengandungi ralat.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Jadual Kandungan**

- [Sebelum anda mula](#before-you-start)
  - [Cara mendapatkan kunci API OpenRouter percuma (aplikasi desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Permulaan](#getting-started)
- [Bahagian utama tetingkap](#main-parts-of-the-window)
  - [Bar sisi](#sidebar)
  - [Bar alat](#toolbar)
  - [Panel input dan output](#input-and-output-panels)
- [Terjemah](#translate)
  - [Terjemah teks](#translate-text)
  - [Pemilihan bahasa](#language-selection)
  - [Tetapan terjemahan yang berguna](#helpful-translation-settings)
- [Tulis semula](#rewrite)
- [Transformasi](#transform)
  - [Jalankan arahan sedia ada](#run-an-existing-prompt)
  - [Jika anda belum mempunyai arahan](#if-you-have-no-prompts-yet)
  - [Buat arahan dengan cepat](#create-a-prompt-quickly)
  - [Edit arahan](#edit-a-prompt)
  - [Uji arahan sebelum menggunakannya](#test-a-prompt-before-using-it)
- [Papan pemuka](#dashboard)
  - [Tapis data](#filter-the-data)
  - [Tab papan pemuka](#dashboard-tabs)
  - [Eksport data](#export-data)

- [Padamkan rekod yang disimpan untuk model](#delete-stored-records-for-a-model)
- [Sejarah](#history)
  - [Tapis data](#filter-the-data-1)
  - [Eksport data sejarah](#export-history-data)
- [Tetapan](#settings)
  - [Tetapan umum](#general-settings)
  - [Model](#models)
  - [Bahasa](#languages)
  - [Penjejakan kos](#cost-tracking)
  - [Transformasi promp](#transform-prompts)
  - [Pengguna](#users)
  - [Konfigurasi API](#api-config)
  - [Mengenai](#about)
- [Isu biasa](#common-issues)
  - [Aplikasi tidak menterjemah, menulis semula atau mengubah teks](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Senarai model kosong](#the-model-list-is-empty)
  - [Keputusan terlalu perlahan atau terlalu mahal](#the-result-is-too-slow-or-too-expensive)
  - [Antaramuka menggunakan bahasa yang salah](#the-interface-is-in-the-wrong-language)
  - [Teks terlalu kecil atau sukar dibaca](#the-text-is-too-small-or-hard-to-read)
  - [Carta papan pemuka kosong](#dashboard-charts-are-empty)

- [Kos menunjukkan "tidak tersedia" atau kelihatan salah](#cost-shows-not-available-or-seems-wrong)
  - [Jumlah kos tidak sepadan dengan bil penyedia saya](#total-cost-does-not-match-my-provider-bill)
  - [Halaman Sejarah tiada dalam bar sisi](#the-history-page-is-missing-from-the-sidebar)
  - [Aplikasi web: diarahkan semula ke halaman log masuk secara tidak dijangka](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Pentadbir web: lupa atau hilang kata laluan](#web-admin-forgot-or-lost-a-password)
  - [Papan pemuka tidak menunjukkan data untuk pengguna lain (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Saya menukar satu promp dan kehilangan suntingan tersebut](#i-changed-a-prompt-and-lost-the-edits)
- [Petua Pantas](#quick-tips)
- [Penafian](#disclaimer)
- [Lesen](#license)

<!-- END doctoc generated TOC sila simpan komen di sini untuk membolehkan kemas kini automatik -->

<br/><br/>

<a id="before-you-start"></a>

## Sebelum bermula

Untuk menggunakan Transrewrt, anda perlu akses kepada sekurang-kurangnya satu penyedia AI. Penyedia yang disokong termasuk: [OpenRouter](https://openrouter.ai) (yang menggabungkan banyak model), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, dan [Ollama](https://ollama.com) untuk model tempatan.

Anda tidak perlu memilih model berbayar untuk mula. Segera selepas menambah kunci API OpenRouter anda, aplikasi ini secara automatik mengaktifkan pilihan OpenRouter **percuma** terbina dalam. Ini membolehkan anda mula menterjemah, menulis semula, dan mengubah teks serta-merta. Secara alternatif, anda juga boleh memperoleh kunci API percuma daripada Cerebras, Google, Groq, atau Mistral AI.

Dalam bahasa mudah:

- **Model** adalah enjin AI yang melakukan kerja tersebut. Model disenaraikan dengan **awalan penyedia** (contohnya `openrouter/…`, `openai/…`, `ollama/…`).
- **Kunci API** (atau, bagi Ollama, **URL asas**) adalah cara aplikasi berhubung dengan penyedia itu.

Jika anda menggunakan **aplikasi desktop**, tambahkan kunci dalam [**Tetapan** > **Konfigurasi API**](#api-config) bagi setiap penyedia yang anda gunakan. Untuk penggunaan OpenRouter sahaja, lihat [Cara mendapatkan kunci API](#how-to-get-an-api-key-desktop-app) di bawah. Jika anda tidak mahu menggunakan kunci API, anda boleh memasang Ollama (dari [ollama.com](https://ollama.com)) dan menggunakan model tempatan sebagai gantinya, seperti `translategemma:4b`.

Jika anda menggunakan **versi web**, pemilik pelayan mengkonfigurasikan penyedia menggunakan pemboleh ubah persekitaran, jadi anda tidak boleh memasukkan kunci API secara langsung dalam aplikasi.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### Cara mendapatkan kunci API OpenRouter percuma (aplikasi desktop)

Jika anda menggunakan aplikasi desktop, ikuti langkah-langkah berikut:

1. Pergi ke [OpenRouter](https://openrouter.ai) menggunakan pelayar web anda.
2. Buat akaun atau log masuk.
3. Buka halaman [Kunci](https://openrouter.ai/keys).
4. Klik butang untuk membuat kunci API baharu.
5. Beri nama kepada kunci tersebut supaya anda dapat mengenal pastinya nanti.
6. Salin kunci API yang baharu.
7. Kembali ke Transrewrt dan buka **Tetapan** > **Konfigurasi API**.
8. Tampal kunci ke dalam **Kunci API OpenRouter** (di bawah **Tetapan** > **Konfigurasi API**).
9. Klik **Uji kunci OpenRouter** untuk memastikan ia berfungsi.

<br/><br/>

<a id="getting-started"></a>

## Cara Memulakan

Jika ini kali pertama anda menggunakan Transrewrt, ikuti susunan berikut:

1. Buka aplikasi.
2. Pilih **Bahasa Antaramuka** anda daripada ikon globe jika perlu.
3. Jika anda menggunakan **aplikasi desktop**, buka [**Tetapan** > **Konfigurasi API**](#api-config), tambah kunci API untuk sekurang-kurangnya satu penyedia (contohnya OpenRouter), dan klik **Uji** untuk mengesahkannya berfungsi.
4. Buka [**Tetapan** > **Model**](#models) dan tambah satu atau lebih model ke **Model Terpilih**.
5. Buka [**Tetapan** > **Bahasa**](#languages) dan pilih **Bahasa Utama** anda jika anda mahu bahasa yang paling kerap digunakan muncul dahulu.
6. Pergi ke **Terjemah** dan jalankan terjemahan ringkas untuk mengesahkan semua berfungsi.
7. Sebaik sahaja ia berjaya, cuba **Tulis Semula** dan kemudian **Ubahsuai**.

Susunan ini penting. Ia mengelakkan masalah biasa ketika penggunaan pertama: cuba melaksanakan tugas sebelum aplikasi mempunyai sambungan API yang berfungsi atau model terpilih.

<br/><br/>

<a id="main-parts-of-the-window"></a>

## Bahagian utama tetingkap

Apl ini dibahagikan kepada tiga bahagian utama:

- **Bar sisi** di sebelah kiri.
- **Bar alat** di bahagian atas.
- **Kawasan kerja** di tengah.

<br/>

<a id="sidebar"></a>

### Bar Sisi

Gunakan bar sisi untuk bergerak di dalam aplikasi. Anda boleh meruntuhkan bar sisi untuk mendapatkan lebih banyak ruang dengan mengklik ikon di sebelah logo aplikasi.

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
        <li><strong>Transform</strong> membuka ruang kerja arahan tersuai.</li><br/>
        <li><strong>Dasbor</strong> memaparkan maklumat penggunaan dan kos.</li><br/>
        <li><strong>Tetapan</strong> membuka panel tetapan.</li><br/>
        <li><strong>Sejarah</strong> memaparkan sejarah penggunaan beserta teks input dan output.</li><br/>
        <li><strong>Pengguna</strong> memaparkan nama pengguna yang telah log masuk (versi web sahaja).</li>
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

**Pemilih model** membolehkan anda memilih enjin AI yang akan digunakan bagi tugas semasa.

  ![Pemilih model](../images/screenshots/ms/model-selector.png)

Sesetengah model percuma mungkin tidak sentiasa tersedia—kadangkala ia tidak dalam talian atau mempunyai had penggunaan. Jika ini berlaku, aplikasi akan secara automatik mengalih keluar model tersebut daripada senarai yang tersedia. Untuk mengawal model mana yang dipaparkan, pergi ke [**Tetapan** > **Model**](#models) dan sunting senarai model anda. 
Anda juga boleh membuka tetapan model secara terus dengan mengklik ikon penyedia di sebelah kiri nama model dalam bar alat.

<br/>

**Ikon globe + kod bahasa** mengubah bahasa antaramuka aplikasi, seperti menu dan butang. Ia **tidak** mengubah bahasa terjemahan yang digunakan dalam **Terjemah**.

![Pemilih bahasa antara muka](../images/screenshots/ms/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Panel input dan output

Kebanyakan ruang kerja menggunakan panel **Input** di sebelah kiri dan panel **Output** di sebelah kanan.

Setiap panel juga memaparkan:

| **Input**                                                          | **Output**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Bilangan aksara <br/>- Bilangan perkataan <br/>- Bilangan perenggan | - Tempoh penyiapan tugasan<br/>- **TPS** (token per saat)<br/>- Kiraan aksara, perkataan, dan perenggan<br/>- Model yang digunakan |

Jika anda tertanya-tanya tentang istilah teknikal:

- **Token** bermaksud sebahagian kecil teks. Anda boleh memikirkannya sebagai sebahagian daripada perkataan atau perkataan pendek.
- **TPS** bermaksud berapa banyak bahagian teks tersebut yang diproses oleh model setiap saat.

<br/>

Anda juga boleh memantau kos bagi setiap operasi (jika tersedia) dan jumlah kos, dengan mengaktifkan pilihan `Tunjukkan maklumat kos pada tindakan` di [**Tetapan** > **Tetapan umum**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>

## Terjemah

Gunakan **Terjemah** apabila anda ingin menukar teks dari satu bahasa ke bahasa lain.

![Ruang kerja Terjemah](../images/screenshots/ms/translate.png)

<br/>

<a id="translate-text"></a>

### Terjemah teks

1. Buka **Terjemah**.
2. Pilih bahasa dalam **Dari**.
3. Pilih bahasa dalam **Ke**.
4. Pilih model dalam bar alat.
5. Taip atau tampal teks ke dalam **Input**.
6. Klik **Terjemah**.
7. Baca hasilnya dalam **Output**.
8. Gunakan butang salin jika anda ingin menyalin hasil tersebut.

<br/>

<a id="language-selection"></a>

### Pemilihan bahasa

- **Dari** boleh menjadi bahasa tertentu atau **Kesan Bahasa**.
- **Ke** adalah bahasa yang anda mahu sebagai hasil terjemahan.

**Bahasa utama** yang anda pilih akan muncul di bahagian atas senarai. Anda boleh tetapkan ini di [**Tetapan** > **Bahasa**](#languages).

<br/>

<a id="helpful-translation-settings"></a>

### Tetapan terjemahan yang berguna

Di [**Tetapan** > **Tetapan Umum**](#general-settings), anda boleh mengubah cara terjemahan berkelakuan:

- **Terjemahkan automatik apabila tampal** akan menjalankan terjemahan sebaik sahaja anda tampal teks.
- **Salin hasil ke papan keratan secara automatik** akan menyalin hasil tersebut secara automatik selepas terjemahan berjaya dijalankan.
- **Terjemahan masa sebenar (semasa menaip)** akan menjalankan terjemahan semasa anda menaip.
- **Had masa (ms)** mengawal berapa lama aplikasi menunggu sebelum menjalankan terjemahan masa sebenar.
- **Enter** mengawal apa yang berlaku apabila anda menekan `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Tulis Semula

Gunakan **Tulis Semula** apabila anda ingin memperbaiki perenggan tanpa mengubah makna utamanya.

![Ruang kerja Tulis Semula](../images/screenshots/ms/rewrite.png)

Ciri ini berguna untuk:

- membetulkan ejaan dan tatabahasa (**Periksa Ejaan & Tatabahasa**)
- menjadikan teks lebih jelas (**Tingkatkan Kejelasan**)
- menghasilkan beberapa versi pengolahan yang berbeza dalam satu pusingan (**Versi alternatif**)
- menjadikan teks lebih formal atau kurang formal (**Formal** / **Tidak formal**)
- memendekkan atau memanjangkan teks (**Pendekkan** / **Panjangkan**)
- menjadikan teks lebih teknikal (**Jadikan Teknikal**)

<br/>

> 💡 **PETUA**<br/>
> Apabila anda menggunakan mod "**Periksa Ejaan & Tatabahasa**", suis **Tunjukkan perubahan** akan muncul di panel output (bersebelahan **Salin**).
> Hidupkan atau matikan untuk menunjukkan atau menyembunyikan pembetulan khusus yang dilakukan ke atas teks anda.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformasi

Gunakan **Transformasi** apabila anda ingin AI mengikuti set arahan tersuai.

![Ruang kerja Transformasi](../images/screenshots/ms/transform.png)

Ini adalah kawasan paling fleksibel dalam aplikasi. Anda boleh menggunakannya untuk tugas-tugas seperti:

- meringkaskan nota
- menukar teks kasar kepada e-mel yang tersusun
- mengekstrak titik-titik utama
- menukar teks ke format tertentu
- sebarang aktiviti tersuai lain dengan teks yang dimasukkan

<br/>

<a id="run-an-existing-prompt"></a>

### Jalankan promp sedia ada

1. Buka **Transform**.
2. Pilih satu promp daripada senarai promp.
3. Jika kotak **Bahasa Sasaran** muncul, pilih bahasa jika anda menginginkannya.
4. Taip atau tampal teks ke dalam **Input**.
5. Klik **Transform**.
6. Baca hasilnya dalam **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Jika anda belum mempunyai sebarang promp

Jika senarai promp anda kosong, klik **Muat promp sampel** di ruang kerja Transform. Kawalan yang sama sentiasa tersedia di [**Tetapan** > **Transform Prompts**](#transform-prompts) pada baris eksport/import. Kedua-duanya menambah contoh terbina dalam supaya anda boleh mula dengan cepat.

<br/>

> ℹ️ **NOTA**<br/>
> Promp sampel disediakan dalam bahasa Inggeris. Selepas memuatnya, anda boleh mengedit promp dan gunakan **Terjemah promp** untuk menterjemahkannya ke dalam bahasa anda.

<br/>

<a id="create-a-prompt-quickly"></a>

### Cipta arahan dengan cepat

Cara terpantas untuk mencipta arahan adalah:

1. Klik **Arahan Baharu**.
2. Klik **Jana arahan**.
3. Terangkan apa yang anda mahu arahan itu lakukan.
4. Pilih satu model.
5. Biarkan apl mencipta draf untuk anda.
6. Semak draf tersebut dan klik **Simpan**.

![Jana arahan](../images/screenshots/ms/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### Edit prompt

Apabila anda mencipta atau mengedit prompt, editor akan muncul di sebelah kiri dan kawasan ujian akan muncul di sebelah kanan.

![Editor prompt Transform](../images/screenshots/ms/transform-prompt-edit.png)

Medan utama adalah:

- **Nama prompt**: nama yang dipaparkan dalam senarai prompt.
- **Arahan prompt (pilihan)**: petua ringkas yang dipaparkan kepada pengguna semasa menjalankan prompt.
- **Peranan Model**: peranan umum yang diberikan kepada AI, seperti 'Anda adalah pembantu yang membantu.'
- **Arahan Model (satu setiap baris)**: peraturan khusus yang anda mahu AI ikuti.
- **Penerangan output**: perkataan ringkas yang menerangkan hasil, seperti 'ringkasan' atau 'tulis semula'.
- **Suhu (0.0 → 1.0)**: cara model akan berkelakuan; lihat di bawah.
- **Minta bahasa sasaran**: menambah pemilih bahasa sasaran apabila prompt dijalankan.

Jika istilah teknikal **Suhu** adalah baru bagi anda, fikirkannya seperti berikut:

- **Suhu** yang lebih rendah memberikan hasil yang lebih stabil dan lebih boleh dijangka.

- **Suhu yang lebih tinggi** memberikan lebih banyak variasi dan kreativiti.

Anda juga boleh gunakan:

- **`Jana promp`** untuk mencipta draf baharu daripada huraian ringkas
- **`Tingkatkan promp`** untuk membaik sempurna promp sedia ada
- **`Terjemah promp`** untuk menterjemahkan medan promp

<br/>

> ⚠️ **AMARAN**<br/>
> Klik **`Simpan`** sebelum anda klik **`Kembali ke Larian`**. Jika anda kembali tanpa menyimpan, perubahan anda akan hilang.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Uji petunjuk sebelum menggunakannya

Panel ujian di sebelah kanan membolehkan anda mencuba petunjuk anda dengan teks sampel sebelum menggunakannya dalam kerja harian.

Ini berguna apabila:

- anda sedang membina petunjuk baharu
- anda sedang membandingkan dua versi petunjuk
- anda ingin menyemak nada, panjang, atau format keluaran

<br/>

> ℹ️ **NOTA**<br/>
> Anda boleh mengeksport dan mengimport petunjuk yang disimpan dalam [**Tetapan** > **Petunjuk Transformasi**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Papan Pemuka

Gunakan **Papan Pemuka** untuk melihat sejauh mana anda menggunakan aplikasi ini dan berapa kosnya (untuk model berbayar).

![Ringkasan papan pemuka](../images/screenshots/ms/dashboard-summary.png)


<br/>

> ℹ️ **NOTA**<br/>
> Jika anda hanya menggunakan model **percuma**, jumlah **kos** mungkin sifar dan ringkasan yang berfokuskan kos mungkin kelihatan kosong. Pada **Ringkasan**, **Penggunaan dari masa ke masa** dan **Penggunaan mengikut model** masih menunjukkan **bilangan panggilan** (terjemah, tulis semula, dan transformasi) apabila terdapat aktiviti dalam tempoh yang dipilih.

<br/>

<a id="filter-the-data"></a>

### Tapis data

Gunakan butang penapis di bahagian atas untuk mengubah julat masa.

![Penapis papan pemuka](../images/screenshots/ms/dashboard-filter.png)

<br/>

> ℹ️ **PERHATIAN**<br/>
> Penapis **Pengguna** hanya kelihatan kepada pentadbir dalam versi web. Pengguna biasa tidak akan melihat penapis ini, dan ia tidak tersedia dalam aplikasi desktop.

<br/>

<a id="dashboard-tabs"></a>

### Tab Papan Pemuka

- **Ringkasan** memberikan gambaran keseluruhan tentang penggunaan dan kos. Ia termasuk **Penggunaan dari masa ke masa** (jumlah petikan bertertib secara harian untuk terjemah, tulis semula, dan ubah suai) dan **Penggunaan mengikut model** (jumlah **petikan per model**, termasuk ubah suai).
- **Mengikut Penggunaan** membahagikan aktiviti mengikut bahasa terjemahan, mod tulis semula, dan petua ubah suai.
- **Mengikut Model** menunjukkan model yang anda gunakan dan kos yang terlibat.
- **Mengikut Hari** menunjukkan jumlah harian.
- **Semua Panggilan** menunjukkan sejarah panggilan penuh dan membenarkan anda mengeksportnya.

<br/>

<a id="export-data"></a>

### Eksport data

Jadual-jadual papan pemuka boleh mengeksport data dalam:

- **JSON**
- **CSV**
- **XLSX**

Ini berguna jika anda ingin mengkaji aktiviti di luar aplikasi atau berkongsi laporan.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Padam rekod tersimpan untuk model

Dalam **Mengikut Model** atau **Semua Panggilan**, anda boleh mengalih keluar rekod yang disimpan untuk model dengan mengklik ikon "tong sampah".

> ⚠️ **AMARAN**<br/>
> Pemadaman rekod yang disimpan tidak boleh dianul semula. Gunakan ini hanya jika anda pasti tidak lagi memerlukan sejarah tersebut.

Untuk memadam semua data atau mengalih keluar rekod berdasarkan tempoh masa, pergi ke [**Tetapan** > **Pengesanan Kos**](#cost-tracking). Di sana, anda akan menemui pilihan untuk memadam semua data tersimpan atau hanya data yang lebih lama daripada tarikh tertentu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Sejarah

Klik pada **Sejarah** untuk melihat sejarah tindakan anda di dalam **Transrewrt**, termasuk input dan output bagi setiap operasi.

![Laman Sejarah](../images/screenshots/ms/history.png)

<br/>

<a id="filter-the-history"></a>

### Tapis data

**Sejarah** menggunakan penapis yang sama seperti halaman **Papan Pemuka**. Gunakan penapis ini untuk memilih julat masa.

![Penapis Papan Pemuka](../images/screenshots/ms/dashboard-filter.png)

<br/>

> ℹ️ **PERHATIAN**<br/>
> Penapis **Pengguna** hanya kelihatan kepada pentadbir dalam versi web. Pengguna biasa tidak akan melihat penapis ini, dan penapis ini tidak tersedia dalam aplikasi desktop.

<br/>

<a id="export-history-data"></a>

###  Eksport data sejarah

Halaman sejarah boleh mengeksport data yang ditapis ke dalam:

- **JSON**
- **CSV**
- **XLSX**

Ini berguna jika anda ingin meninjau aktiviti di luar aplikasi atau berkongsi laporan.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>

## Tetapan

Buka **Tetapan** dari bar sisi untuk menyesuaikan cara aplikasi berfungsi.

Tab yang tersedia bergantung pada platform dan peranan anda:

| Tab | Desktop | Web (admin) | Web (pengguna biasa) | 
|-------------------|:-------:|:-----------:|:------------------:| 
| Tetapan Umum | ya | ya | ya | 
| Model | ya | ya | ya | 
| Bahasa | ya | ya | ya | 
| Penjejakan Kos | ya | ya | — | 
| Transformasikan Prompt | ya | ya | ya | 
| Pengguna | — | ya | — | 
| Konfigurasi API | ya | ya | — | 
| Mengenai | ya | ya | ya |

<br/>

> ℹ️ **PERHATIAN**<br/>
> Dalam versi web, setiap pengguna mempunyai konfigurasi tersendiri. Tetapan seperti model yang dipilih, bahasa, pilihan umum, dan petunjuk transform disimpan mengikut pengguna. Perubahan yang anda buat tidak akan menjejaskan pengguna lain.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>

### Tetapan umum

Gunakan **Tetapan Umum** untuk mengawal tingkah laku menaip, sama ada butiran pelaksanaan disimpan untuk **Sejarah**, serta rupa bentuk.

**Tingkah laku**

- **Tingkah laku bagi ENTER** memilih sama ada `Enter` melaksanakan tugas atau memasukkan baris baru.
- **Auto-terjemah semasa tampal** memulakan terjemahan sebaik sahaja anda menampal teks.
- **Salin hasil ke papan keratan secara automatik** menyalin hasil yang berjaya secara automatik.
- **Terjemahan masa nyata (semasa menaip)** menterjemah semasa anda menaip.
- **Tempoh tamat (ms)** menetapkan tempoh tunggu untuk terjemahan masa nyata.

**Sejarah**

- **Simpan sejarah pelaksanaan** mengawal sama ada setiap terjemahan, penyusunan semula dan transformasi menyimpan teks **input dan output** untuk paparan [**Sejarah**](#history) di panel sisi. Mematikan fungsi ini akan meminta pengesahan; jika anda mengesahkannya, teks sejarah yang disimpan akan dikeluarkan dari pangkalan data.

- **Padam data sejarah** membolehkan anda mengalih keluar teks yang disimpan berdasarkan umur (contohnya, yang lebih lama daripada beberapa bulan, atau **semua data (kosongkan)**) menggunakan **Padam data**. Ini hanya mempengaruhi teks pelaksanaan yang disimpan untuk paparan **Sejarah**; ia **tidak** memadamkan jumlah kos atau penggunaan. Untuk mengalih keluar atau memotong data **kos**, gunakan [**Tetapan** > **Pengesanan Kos**](#cost-tracking).

**Rupa Luar**

- **Tunjukkan maklumat kos pada tindakan** mengawal paparan kos setiap operasi (jika tersedia) dan jumlah kos di panel keluaran Terjemah, Tulis Semula, dan Transformasi.
- **Digit pecahan kos** mengubah cara perpuluhan kos dipaparkan.
- **Hanya untuk web:** **tunjukkan jarak tepi di sekeliling aplikasi** menambah ruang tambahan di sekeliling antara muka.
- **Familia Fonth** mengubah fonth penulisan dalam panel teks.
- **Saiz** mengubah saiz fonth.

**Sandalan Konfigurasi**

- **Sertakan data penggunaan dalam sandaran** — apabila didayakan, ZIP juga mengandungi sejarah pelaksanaan dan data panggilan API.

- **Sandar konfigurasi** — mencipta satu fail ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` secara lalai dalam UTC) yang mengandungi `config.json`, `state.json`, kunci penyulitan pilihan, pengguna, keutamaan, arahan tersuai, dan data penggunaan jika anda memilih untuk menyertakannya. Selepas sandaran berjaya, pengesahan akan memaparkan nama fail yang telah disimpan.
- **Pulih dari sandaran** — membuka **dialog pengesahan dahulu**. Pilih fail ZIP sandaran dalam dialog tersebut (**Layari** / pemilih fail atau seret-dan-lepas jika disokong), kemudian semak semula pilihan:
  - **Pulihkan data penggunaan** — import penggunaan/sejarah dari ZIP jika data tersebut disertakan semasa sandaran dibuat; tinggalkan jika anda hanya mahu tetapan dan arahan.
  - **Kosongkan data penggunaan lama sebelum memulihkan** — buang penggunaan/sejarah sedia ada dalam pemasangan ini sebelum memohon sandaran (pilihan; gunakan apabila anda mahu menggantikan secara bersih).

Backup yang dibuat sama ada dalam versi web atau versi desktop boleh dipulihkan dalam versi yang lain. Apabila memulihkan backup desktop dalam versi web, data akan dipulihkan ke pengguna pentadbir.


<br/>

<a id="models"></a>

### Model

Gunakan **Tetapan** > **Model** untuk memilih model yang dipaparkan pada bar alat.

![Tab Model Tetapan](../images/screenshots/ms/settings-models.png)

Halaman ini mempunyai dua senarai:

- **Model Tersedia** di sebelah kiri
- **Model Terpilih** di sebelah kanan

Kawalan berguna termasuk:

- **Cari model...** untuk mencari model mengikut nama
- Keping **Penyedia** untuk mengecilkan senarai kepada enjin tertentu (OpenRouter, OpenAI, Ollama, …)
- **Percuma Sahaja** untuk memaparkan model yang percuma sahaja
- **Segar Semula** untuk memuat semula senarai
- **Kembangkan Semua** dan **Runtuhkan Semua** apabila menyusun mengikut penyedia

ID model termasuk awalan penyedia (contohnya `openrouter/…` berbanding `openai/…`). Lencana seperti **OpenAI (OpenRouter)** berbanding **OpenAI (terus)** menunjukkan bagaimana lalu lintas dihala. 

> ℹ️ **NOTA**<br/>

> **Pembina Badan OpenRouter** (`openrouter/bodybuilder`) adalah model penghala, bukan model perbualan umum: balasannya adalah JSON yang menerangkan badan permintaan API OpenRouter (contohnya tatasusunan `requests` dengan `model` dan `messages`). Jika anda menggunakannya untuk **Terjemah**, **Tulis Semula**, atau **Transform**, panel output akan memaparkan JSON tersebut bukannya teks siap. Pilih model teks biasa untuk tugas-tugas tersebut. Lihat [laman model Body Builder](https://openrouter.ai/openrouter/bodybuilder) di OpenRouter.

Tindakan:

 - Untuk menambah model, klik **Tambah** atau mana-mana di ruangan tersebut.

 - Untuk mengalih keluar model, klik **X** bersebelahan dengannya di **Model Terpilih** atau **Terpilih** pada ruangan Model Tersedia.

 - Untuk memadam senarai, klik **Nyahpilih semua**. Model percuma yang diperlukan akan kekal dalam senarai.

<br/>

> ℹ️ **CATATAN**<br/>

> Jika anda tidak mahu menambah kredit kepada OpenRouter serta-merta, mula-mula aktifkan **Percuma Sahaja** dan pilih model-model percuma (tanpa keperluan kad kredit). Anda juga boleh menggunakan Ollama untuk menjalankan model secara tempatan tanpa sebarang kunci API.

<br/>

<a id="languages"></a>

### Bahasa

Gunakan **Tetapan** > **Bahasa** untuk menyusun senarai bahasa yang digunakan dalam aplikasi.

- **Bahasa utama** dipaparkan di bahagian atas senarai bahasa dalam **Terjemah** dan **Ubahsuai**.
- **Bahasa tersuai** membolehkan anda menambah bahasa yang tidak terdapat dalam senarai asal.

Sekiranya anda menambah bahasa tersuai, ia akan muncul dalam pemilih bahasa bersama-sama dengan pilihan asal.

<br/>

<a id="cost-tracking"></a>

### Penjejakan kos

Gunakan **Tetapan** > **Penjejakan Kos** untuk mengurus maklumat kos.

- **Jumlah Kos** menunjukkan jumlah terkini.
- **Salin Nilai** menyalin jumlah ke papan keratan.
- **Tetap Semula Kos** menetapkan semula jumlah disimpan kepada sifar.
- **Sejajar dengan penggunaan kunci API** menetapkan jumlah agar sepadan dengan penggunaan yang dilaporkan oleh akaun OpenRouter anda (hanya untuk OpenRouter).
- **Penggunaan Kunci API** memaparkan butiran penggunaan OpenRouter, jika tersedia.
- **Padam data kos** mengalih keluar semua data, atau hanya kemasukan yang lebih lama daripada tarikh terpilih.


**Penjejakan kos:** Apabila anda menggunakan model OpenRouter, aplikasi akan memaparkan penggunaan dan perbelanjaan sebenar anda berdasarkan maklumat kos daripada OpenRouter. Bagi semua penyedia lain, aplikasi menganggar kos menggunakan harga yang diterbitkan oleh OpenRouter; jika harga tidak tersedia, anggaran mungkin sifar.

<br/>

> ℹ️ **NOTA**<br/>
> **Semua angka kos adalah anggaran untuk rujukan anda sahaja, bukan penyata bil rasmi.**


<br/>

> ⚠️ **AMARAN**<br/>

> Penghapusan data tidak boleh dibatalkan. Sebelum memadam, pastikan untuk membuat sandaran data atau menerbitkannya melalui [**Sejarah**](#history)
> atau [**Papan Pemuka** > **Semua Panggilan**](#dashboard-tabs), jika tidak, data akan hilang secara kekal.
> Semua sejarah input/output yang berkaitan dengan setiap entri panggilan API juga akan dipadamkan.


<br/>

<a id="transform-prompts"></a>

### Mengubah suai templat

Gunakan **Tetapan** > **Ubah Templat** untuk mengurus templat secara beramai-ramai.

Anda boleh:

- menyemak templat yang telah disimpan
- memadam templat
- mengimport templat daripada fail
- mengeksport templat untuk sandaran atau perkongsian
- memuat templat sampel ke dalam senarai templat

<br/>

<a id="users"></a>

### Pengguna

Gunakan **Pengguna** untuk menguruskan akaun pengguna dalam versi web. Anda boleh menambah pengguna, mengemaskini butiran mereka, menetapkan semula kata laluan, dan memadamkan akaun.

<br/>

<a id="api-config"></a>

### Konfigurasi API

Penyedia yang disokong adalah: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, dan **Ollama** (model tempatan melalui URL asas). Anda hanya perlu mengkonfigurasikan penyedia yang digunakan.

**Aplikasi web: pentadbir sahaja**

Kunci API dikonfigurasikan melalui pemboleh ubah persekitaran sistem atau Docker — kunci ini tidak dimasukkan dalam antara muka web. Halaman ini menunjukkan penyedia mana yang telah dikonfigur dengan kunci, dan membolehkan anda menguji setiap satu dengan mengklik butang **`Uji`**.

<br/>

> ℹ️ **NOTA**<br/>
> Untuk menukar kunci API, kemas kini pemboleh ubah persekitaran dalam konfigurasi sistem atau Docker anda dan mulakan semula pelayan atau bekas.

> ℹ️ **NOTA**<br/>

> **Sandaran konfigurasi** (lihat [**Tetapan Am** → Sandaran Konfigurasi](#general-settings)) boleh menyertakan kekunci penyedia yang **telah diselesaikan** di dalam fail `config.json` ZIP. Membuat semula ZIP tersebut **tidak** menyalin kekunci tersebut kembali ke fail konfigurasi kekal pada pelayan — kekunci aktif masih datang daripada persekitaran dan status fail sedia ada seperti yang diterangkan di sana.

<br/>

**Aplikasi desktop**

Gunakan **Konfigurasi API** untuk menyimpan kekunci API bagi setiap penyedia yang anda gunakan. Untuk Ollama, masukkan **URL asas** sebagai ganti kekunci API.


<br/>

> 💡 **Petua** <br/>
> Jika anda tidak mahu menggunakan kekunci API atau membayar penggunaan, anda boleh [muat turun Ollama](https://ollama.com) dan jalankan model (seperti `translategemma:4b`) secara tempatan pada mesin anda secara percuma. Sebagai alternatif, anda boleh membuat akaun OpenRouter percuma (tanpa keperluan kad kredit) untuk menggunakan model percuma mereka, atau mendapatkan kekunci API percuma daripada Cerebras, Google, Groq, atau Mistral AI.

<br/>

- Tambahkan hanya penyedia yang anda perlukan. Di **Tetapan** > **Model**, setiap ID model bermula dengan penyedia (contohnya `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Untuk menambah kunci API, masukkan nilai dalam ruang teks dan klik **`Simpan`**. Untuk menggantikan kunci sedia ada, klik **`Edit`**. Untuk mengesahkan kunci berfungsi, klik **`Uji`**. Untuk URL asas Ollama, sentiasa klik **`Uji`** untuk memeriksa sambungan.

<br/>

> ℹ️ **NOTA**<br/>
> Anda tidak boleh melihat nilai semasa bagi kunci API. Anda hanya boleh menggantikannya menggunakan butang **`Edit`**.
> Kunci API disimpan secara enkripsi dalam konfigurasi.

<br/>

<a id="about"></a>

### Tentang

Tab **Tentang** menunjukkan:

- nama aplikasi
- nombor versi
- tarikh binaan
- pautan ke repositori projek

<br/><br/>

<a id="common-issues"></a>

## Isu-isu biasa

Jika sesuatu tidak berfungsi seperti yang dijangkakan, sila semak dahulu perkara-perkara berikut.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>

### Aplikasi tidak akan menterjemah, menulis semula, atau menukar teks

Pastikan bahawa:

- anda telah memilih model pada bar alat
- sekurang-kurangnya satu model disenaraikan dalam [**Tetapan** > **Model**](#models)
- konfigurasi API anda berfungsi

Jika anda menggunakan aplikasi desktop:

1. Buka [**Tetapan** > **Konfigurasi API**](#api-config).
2. Pastikan sekurang-kurangnya satu kunci API telah disimpan.
3. Klik **Uji** di sebelah penyedia untuk mengesahkan kunci berfungsi.

<br/>

<a id="the-model-list-is-empty"></a>

### Senarai model adalah kosong

Buka [**Tetapan** > **Model**](#models) dan klik **Segarkan**.

Jika perlu:

- cari model tertentu
- hidupkan **Percuma Sahaja**
- tambah satu atau lebih model ke **Model Terpilih**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>

### Keputusan terlalu perlahan atau terlalu mahal

Cuba satu atau lebih perkara berikut:

- pilih model yang berbeza
- gunakan input yang lebih ringkas
- matikan terjemahan **Secara masa nyata (semasa menaip)** di [**Tetapan** > **Tetapan Umum**](#general-settings)
- gunakan model percuma untuk tugas-tugas mudah (rujuk [Model](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### Antara muka adalah dalam bahasa yang salah

Klik ikon globus di [bar alat](#toolbar) dan pilih **Bahasa antara muka** yang anda kehendaki.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>

### Teks terlalu kecil atau sukar dibaca

Buka [**Tetapan** > **Tetapan Umum**](#general-settings) dan ubah:

- **Famili Fon**
- **Saiz**

<br/>

<a id="dashboard-charts-are-empty"></a>

### Carta papan pemuka adalah kosong

Ini adalah perkara biasa jika:

- anda hanya menggunakan model **percuma** dan sedang melihat angka **kos** (ia mungkin sifar); carta bilangan panggilan **penggunaan** pada **Ringkasan** masih memerlukan data dari tempoh yang dipilih
- penapis **masa** yang dipilih tidak merangkumi tempoh apabila panggilan dibuat — cuba pilih **Semua** untuk menyemak

Jika carta masih kosong selepas memilih **Semua**, pastikan bahawa panggilan kelihatan di [**Sejarah**](#history) atau pada tab **Semua Panggilan**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Kos menunjukkan "tidak tersedia" atau kelihatan salah

Apabila anda menggunakan model melalui **OpenRouter**, aplikasi akan menunjukkan perbelanjaan sebenar yang dilaporkan oleh OpenRouter.

Bagi **penyedia lain** (OpenAI langsung, Anthropic langsung, dll.), kos dikira secara anggaran berdasarkan data harga yang diterbitkan oleh OpenRouter. Jika tiada harga yang sepadan dijumpai untuk model tersebut, kos akan dipaparkan sebagai **tidak tersedia** dan tidak akan dimasukkan ke dalam jumlah perbelanjaan anda.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### Jumlah kos tidak sepadan dengan bil penyedia saya

Semua angka kos dalam aplikasi ini adalah **anggaran untuk tujuan rujukan sahaja**, bukan penyata rasmi.

Untuk membuat jumlah ini lebih mendekati perbelanjaan OpenRouter sebenar anda, buka [**Tetapan** > **Pengesanan Kos**](#cost-tracking) dan klik **Sinergi dengan penggunaan kunci API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### Halaman Sejarah tiada dalam bar sisi

**Simpan sejarah pelaksanaan** mungkin dimatikan. Buka [**Tetapan** > **Tetapan Am**](#general-settings) dan dayakannya. Perhatikan bahawa menghidupkannya tidak memulihkan data sejarah yang telah dipadam sebelum ini.

<br/>

<a id="web-app-session-expired"></a>

### Aplikasi web: diarahkan semula ke halaman log masuk secara tidak dijangka

Sesi anda mungkin telah tamat masa. Sila log masuk semula. Jika ini berlaku kerap, semak konfigurasi pelayan untuk tetapan tempoh hayat sesi.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Pentadbir web: lupa atau hilang kata laluan

Ini hanya terpakai kepada **aplikasi web swasta** (Docker), bukan aplikasi desktop (Electron).

- Jika pentadbir lain masih boleh log masuk, mereka boleh membuka [**Tetapan** > **Pengguna**](#users), pilih akaun tersebut, dan menetapkan **kata laluan baharu** di sana.
- Jika anda **terkunci keluar** tetapi mempunyai **akses shell** kepada mesin atau bekas (container), tetapkan semula kata laluan menggunakan penggera yang disertakan dalam imej (gantikan `transrewrt` jika anda mengubah nama lalai, dan letakkan kata laluan dalam tanda petikan jika mengandungi ruang atau aksara istimewa):

```bash
docker exec transrewrt reset-web-password '<nama-pengguna>' '<kata-laluan-baru>'
```

Nama pengguna pentadbir lalai ialah `admin` jika anda tidak pernah mencipta akaun lain. Apabila hanya satu hujah diberikan, ia akan dianggap sebagai kata laluan baharu untuk `admin`.

Jika anda menjalankannya dari **salinan sumber** dan bukannya Docker, gunakan:

```bash
pnpm run reset-web-password -- <nama-pengguna> <kata-laluan-baru>

Skrip ini mengemaskini rekod pengguna dalam pangkalan data SQLite (dan boleh mencipta pengguna `admin` jika tiada). Selepas menetapkan semula, log masuk dengan kata laluan baharu.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### Papan pemuka tidak menunjukkan data untuk pengguna lain (web)

Hanya **pentadbir** yang boleh melihat data daripada semua pengguna melalui penapis **Pengguna**. Pengguna biasa hanya dapat melihat aktiviti mereka sendiri mengikut rekabentuk.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### Saya mengubah satu promp dan kehilangan suntingan

Apabila mengedit satu promp, sentiasa klik **Simpan** sebelum klik **Kembali untuk Dijalankan**.

<br/><br/>

<a id="quick-tips"></a>

## Petua pantas

- Mulakan dengan [**Terjemah**](#translate) untuk memastikan konfigurasi anda berfungsi sebelum beralih ke [**Tulis Semula**](#rewrite) atau [**Transformasikan**](#transform).
- Gunakan [**Tulis Semula**](#rewrite) untuk penambahbaikan perkataan harian.
- Gunakan [**Transformasikan**](#transform) apabila anda memerlukan alur kerja berulang untuk tugas tertentu.
- Gunakan [**Papan Pemuka**](#dashboard) jika anda ingin memantau penggunaan dan kos.
- Gunakan [**Sejarah**](#history) untuk meninjau operasi lampau beserta teks input/output penuh.
- Eksport arahan secara berkala sekiranya anda membina perpustakaan arahan yang ingin diselamatkan (rujuk [Arahan Transformasi](#transform-prompts)) atau jika anda ingin berkongsi dengannya.

<br/><br/>

<a id="disclaimer"></a>

## Penafian

Nama dan ikon produk adalah milik pemilik masing-masing dan digunakan semata-mata untuk tujuan pengenalan. Perisian ini tidak berafiliasi dengan atau disokong oleh mana-mana jenama yang disebutkan.

<br/><br/>

<a id="license"></a>

## Lesen

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Lesen Apache 2.0](LICENSE)