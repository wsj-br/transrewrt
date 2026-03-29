---
translated_at: "2026-03-29T01:55:22.457Z"
source_hash: "8981b8db163153bfc443046fa20a49b33c92b9feebdee302f6ef60852f273472"
source_mtime: "2026-03-29T01:41:58.368Z"
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>

# Pandhuan Pamanggih

<br/>

<a id="introduction"></a>

## Pangantosan

Transrewrt migunani kanggo ngolah tèks kanthi telung cara utama:

- **Terjemahaké** - ngowahi tèks saka siji basa menyang basa liya.
- **Nulis ulang** - ngowahi gaya tèks kanthi cara liya, saperti luwih cetha, luwih ringkes, utawa luwih resmi.
- **Ngowahi** - ngolah tèks nggunakaké dhawuh AI sing bisa disesuaikan sing diarani prompt.

<br/>

Pandhuan iki nerangaké babagan cara nggunakaké aplikasi sawise diinstal lan diaktifkan. Kanggo langkah-langkah instalasi, deleng **[README](README.jv.md)** utama.

<br/>

> ℹ️ **CATETAN**<br/>
> Transrewrt kasedhiya minangka aplikasi desktop kanggo Windows lan Linux, lan minangka aplikasi wèb sing bisa digunakaké dhéwé. Pandhuan iki fokus marang panggunaan sapodhéan. Yèn ana fitur sing mung ana ing siji versi, bakal ditandhani kanthi cetha.

<small>Basa liyane: </small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Cathetan babagan terjemahan UI lan dokumèntasi:** Kabèh basa antarmuka kajaba bhasa Inggris (UK) asli 
> diterjemahake makai modhèl AI; tembungé bisa uga ora cetha utawa ngandhut klasa.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Dhaftar Isi**

- [Sadurungé miwiti](#before-you-start)
  - [Cara entuk kunci API OpenRouter gratis (aplikasi desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Miwiti](#getting-started)
- [Bagéyan utama jendhela](#main-parts-of-the-window)
  - [Sidebar](#sidebar)
  - [Toolbar](#toolbar)
  - [Panel input lan output](#input-and-output-panels)
- [Terjemahaké](#translate)
  - [Terjemahaké têks](#translate-text)
  - [Pilihan basa](#language-selection)
  - [Sètèlan terjemahan sing migunani](#helpful-translation-settings)
- [Nulis manèh](#rewrite)
- [Ngowah](#transform)
  - [Jalankaké prompt sing ana](#run-an-existing-prompt)
  - [Yèn durung duwé prompt](#if-you-have-no-prompts-yet)
  - [Gawé prompt kanthi cepet](#create-a-prompt-quickly)
  - [Sunting prompt](#edit-a-prompt)
  - [Uji coba prompt sasarana nggunakaké](#test-a-prompt-before-using-it)
- [Dashboard](#dashboard)
  - [Saring data](#filter-the-data)
  - [Tab dashboard](#dashboard-tabs)
  - [Ekspor data](#export-data)

- [Mbusak rekam data sing disimpen kanggo model](#delete-stored-records-for-a-model)
- [Riwayat](#history)
  - [Filter datane](#filter-the-data-1)
  - [Ekspor datanen riwayat](#export-history-data)
- [Setelan](#settings)
  - [Setelan umum](#general-settings)
  - [Model](#models)
  - [Basa](#languages)
  - [Pelacakan biaya](#cost-tracking)
  - [Ngowahi prompt](#transform-prompts)
  - [Pangguna](#users)
  - [Konfigurasi API](#api-config)
  - [Tentang](#about)
- [Masalah umum](#common-issues)
  - [Aplikasi ora bakal nenerjemahake, nulis maneh, utawa ngowahi teks](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Dhaptar model kosong](#the-model-list-is-empty)
  - [Hasile dadi alon banget utawa larang banget](#the-result-is-too-slow-or-too-expensive)
  - [Antarmuke nggunakake basa sing salah](#the-interface-is-in-the-wrong-language)
  - [Teks e dadi cilik banget utawa angel diwaca](#the-text-is-too-small-or-hard-to-read)
  - [Grafik dashboard kosong](#dashboard-charts-are-empty)

- [Biaya nuduhake "ora kasedhiya" utawa rasane salah](#cost-shows-not-available-or-seems-wrong)
  - [Total biaya ora cocog karo tagihan penyedia](#total-cost-does-not-match-my-provider-bill)
  - [Kaca Riwayat ilang saka samping](#the-history-page-is-missing-from-the-sidebar)
  - [Aplikasi wèb: dialihake menyang kaca login kanthi ora diarepake](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Web admin: lali utawa ilang sandhi](#web-admin-forgot-or-lost-a-password)
  - [Dasbor ora nuduhake data kanggo pangguna liya (wèb)](#dashboard-shows-no-data-for-other-users-web)
  - [Aku ngowahi pesen lan ilang suntingan](#i-changed-a-prompt-and-lost-the-edits)
- [Petunjuk cepet](#quick-tips)
- [Penyangkalan](#disclaimer)
- [Lisensi](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Sadurunge miwiti

Kanggo nggunakake Transrewrt, sampeyan butuh akses menyang paling ora siji penyedia AI. Penyedia sing didhukung yaiku: [OpenRouter](https://openrouter.ai) (kang nggabungake akeh model), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, lan [Ollama](https://ollama.com) kanggo model lokal.

Sampeyan ora kudu milih model bayaran kanggo miwiti. Bareng sampeyan nambahake kunci API OpenRouter, aplikasi kanthi otomatis nguatake opsi **gratis** OpenRouter sing dibangun. Iki ngidini sampeyan miwiti ngalih basa, nyusun maneh, lan ngowahi tèks kanthi langsung. Alternatifipun, sampeyan uga bisa entuk kunci API gratis saka Cerebras, Google, Groq, utawa Mistral AI.

Ing basa sing luwih gampang:

- Sawijining **model** yaiku mesin AI sing nindakake tugas. Model kasebut didaftar nganggo **awalan penyedia** (kayata `openrouter/…`, `openai/…`, `ollama/…`).
- Sawijining **kunci API** (utawa, kanggo Ollama, **URL dhasar**) yaiku cara aplikasi ngakses penyedia kasebut.

Yen nggunakake **aplikasi desktop**, tambahake kunci ing [**Pengaturan** > **Konfigurasi API**](#api-config) kanggo saben penyedia sing digunakake. Kanggo panggunaan mung OpenRouter, deleng [Carane entuk kunci API](#how-to-get-an-api-key-desktop-app) ing ngisor iki. Yen ora pengin nggunakake kunci API, sampeyan bisa nginstal Ollama (saka [ollama.com](https://ollama.com)) lan nggunakake model lokal, kaya `translategemma:4b`.

Yen nggunakake **versi web**, pemilik server ngonfigurasi penyedia nggunakake variabel lingkungan, dadi sampeyan ora bisa ngisi kunci API langsung ing aplikasi.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### Cara entuk kunci API OpenRouter gratis (app desktop)

Yen sampeyan nggunakake app desktop, tindakake langkah-langkah iki:

1. Bukak [OpenRouter](https://openrouter.ai) ing penjelajah wéb sampeyan.
2. Gawe akun utawa mlebu.
3. Bukak kaca [Keys](https://openrouter.ai/keys).
4. Klik tombol kanggo nggawe kunci API anyar.
5. Beri jeneng kanggo kunci supaya bisa dikenali mengko.
6. Salin kunci API anyar kasebut.
7. Baler menyang Transrewrt lan buka **Setelan** > **Konfigurasi API**.
8. Tempel kunci kasebut ing **Kunci API OpenRouter** (ngisor **Setelan** > **Konfigurasi API**).
9. Klik **Uji kunci OpenRouter** kanggo mastekake yen iku bisa digunakake.

<br/><br/>

<a id="getting-started"></a>

## Wiwitan

Yen iki wektu kapisan panjenengan nggunakake Transrewrt, mangga ikuti urutane kaya mengkene:

1. Bukak aplikasine.
2. Pilih **basa antarmuka** saka ikon globe yen dibutuhake.
3. Yen panjenengan nggunakake **aplikasi desktop**, buka [**Setelan** > **Konfigurasi API**](#api-config), tambahaké kunci API kanggo paling sethithik siji panyedhiya (kaya contohe OpenRouter), lan klik **Tes** kanggo mastekake manawa iki bisa digunakake.
4. Bukaa [**Setelan** > **Model**](#models) lan tambahaké siji utawa luwih model menyang **Model sing Dipilih**.
5. Buka [**Setelan** > **Basa**](#languages) lan pilih **Basa utama** panjenengan yen pengin basa sing asring digunakake nudhi ing dhisik.
6. Menyang **Terjemahake** lan jalankan penerjemahan sing prasaja kanggo ngonfirmasi kabèh bisa digunakake.
7. Sawisé iku bisa, cobanen **Nulis Maning** lan banjur **Ngowahi**.

Urutan iki penting. Iki nyegah masalah sing paling umum nalika nggunakake pertama kali: nyoba ngasilake tugas sadurung aplikasi duwe sambungan API sing bisa digunakake utawa model sing dipilih.

<br/><br/>

<a id="main-parts-of-the-window"></a>

## Bagéyan utama jendhela

Aplikasi iki dipérang dadi tiga bagéyan utama:

- **Sidebar** ing kiwa.
- **Toolbar** ing dhuwur.
- **Wilayah kerja** ing tengah.

<br/>

<a id="sidebar"></a>

### Sampingan

Gunakake sisih sisih kanggo pindhah-pindah aplikasi. Sampeyan bisa mbukak sisih sisih kanggo entuk ruangan luwih akeh kanthi ngklik ikon ing samping logo aplikasi.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/jv/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Terjemahake</strong> mbukak ruangan kerja penterjemahan.</li><br/>
        <li><strong>Ulahe</strong> mbukak ruangan kerja panulisan ulang.</li><br/>
        <li><strong>Transformasi</strong> mbukak ruangan kerja panuntun kustom.</li><br/>
        <li><strong>Dhasbor</strong> nuduhake informasi panggunaan lan biaya.</li><br/>
        <li><strong>Setelan</strong> mbukak panel setelan.</li><br/>
        <li><strong>Sejarah</strong> nuduhake riwayat panggunaan kalebu teks input lan output.</li><br/>
        <li><strong>Panganggo</strong> nuduhake jeneng panganggo sing lagi mlebu (khusus web).</li>
      </ul>

</td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Bilah Alat

Bilah alat owah rada sedhela gumantung saka lokasi panjenengan ing aplikasi.

- Ing sisih kiwa, nuduhake jeneng kaca saiki.
- Ing sisih tengen, nuduhake **pemilih model** lan kontrol **Basa Antarmuka**.

**Pemilih model** ngidinake panjenengan milih mesin AI sing bakal digunakake kanggo tugas saiki.

  ![Pemilih model](../images/screenshots/jv/model-selector.png)

Sawetara model gratis ora tansah kasedhiya—kadhangkala offline utawa duwe watesan panggunaan. Yen iki kedadeyan, aplikasi bakal sacara otomatis mbusak model saka dhaptar panjenengan. Kanggo ngontrol model sing katon, menyang [**Setelan** > **Model**](#models) lan sunting dhaptar model panjenengan. 
Panjenengan uga bisa mbukak setelan model langsung kanthi mbukak ikon penyedia ing sisih kiwa jeneng model ing bilah alat.

<br/>

**Ikon globe lan kode basa** ngowahi basa antarmuka aplikasi, kaya menu lan tombol. Iku ora **ngowahi basa penerjemahan** sing digunakake ing **Terjemahake**.

![Pemilih basa antarmuka](../images/screenshots/jv/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Papan input lan output

Kebanyakan workspace nggunakake papan **Input** ing sisih kiwa lan papan **Output** ing sisih tengen.

Saben papan uga nuduhake:

| **Input**                                                          | **Output**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Jumlah karakter <br/>- Jumlah tembung <br/>- Jumlah paragraf   <br/> | - Durasi pengerjaan tugas<br/>- **TPS** (token saben detik)<br/>- Jumlah karakter, tembung, lan paragraf<br/>- Model sing digunakake |

Yen sampeyan penasaran babagan istilah-istilah teknis:

- **Token** tegese sebagian cilik saka teks. Sampeyan bisa nganggep minangka bagean saka tembung utawa tembung sing cendhak.
- **TPS** tegese ping pira bagean teks kasebut dimroses déning model saben detik.

<br/>

Sampeyan uga bisa ngawasi biaya saben operasi (manawa ana) lan biaya total, kanthi ngaktifake pilihan `Tuduhake informasi biaya ing tindakan` ing [**Setelan** > **Setelan Umum**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>

## Terjemahaké

Gunakaké **Terjemahaké** nalika sampeyan badhe ngowahi tèks saka siji basa menyang basa liya.

![Ruang kerja Terjemahan](../images/screenshots/jv/translate.png)

<br/>

<a id="translate-text"></a>

### Terjemahake Teks

1. Bukak **Terjemahan**.
2. Pilih basa ing **Saka**.
3. Pilih basa ing **Marang**.
4. Pilih model ing bilah alat.
5. Ketik utawa tempel teks menyang **Input**.
6. Klik **Terjemahan**.
7. Maca asilé ing **Output**.
8. Gunaaké tombol salin manawa sampeyan pengin nyalin asilé.

<br/>

<a id="language-selection"></a>

### Pemilihan Basa

- **Saka** bisa uga basa tartamtu utawa **Deteksi Basa**.
- **Marang** yaiku basa sing kokarepake kanggo asilé.

Pilihan **Basa Utama** katon ana ing pucuk dhaptar. Sampeyan bisa ngatur iki ana ing [**Setelan** > **Basa**](#languages).

<br/>

<a id="helpful-translation-settings"></a>

### Setelan panerjemahan sing migunani

Ing [**Setelan** > **Setelan Umum**](#general-settings), sampeyan bisa ngganti cara panerjemahan ditindakake:

- **Terjemahake otomatis nalika paste** bakal nglakokake panerjemahan ing wektu sampeyan nyepak teks.
- **Salin otomatis hasil menyang clipboard** bakal nyalin hasilé sacara otomatis sawisé panerjemahan rampung.
- **Panerjemahan langsung (saat ngetik)** bakal nglakokake panerjemahan nalika sampeyan ngetik.
- **Batas wektu (ms)** ngatur suwe aplikasi ngenteni sadurungé nglakokake panerjemahan langsung.
- **Enter** ngatur apa sing kedadeyan nalika sampeyan menek `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Tulis Maneh

Gunakake **Tulis Maneh** yen arep nyempurnakake tembung tanpa ngganti teges utama.

![Ruang kerja Tulis Maneh](../images/screenshots/jv/rewrite.png)

Fitur iki migunani kanggo:

- nemtokake ejaan lan tata basa (**Periksa Ejaan & Tata Basa**)
- njalari tulisan luwih cetha (**Tingkatake Kabecikan**)
- sawetara variasi kalimat sing béda ing siji jalan (**Versi Alternatif**)
- njalari tulisan luwih resmi utawa kurang resmi (**Resmi** / **Tidak Resmi**)
- ngendhakake utawa mambakake tulisan (**Ngendhakake** / **Mambakake**)
- njalari tulisan kaya luwih teknis (**Gawé Teknis**)

<br/>

> 💡 **CATHETAN**<br/>
> Ndilalah sampeyan nggunakake modus "**Periksa Ejaan & Tata Basa**", tombol **Tuduhna Owah-owahan** bakal metokna panel metu (cédhak **Salin**).
> Pencet on utawa off kanggo nuduhna utawa ndhelikna koreksi khusus sing diaplikasikna marang tulisan sampeyan.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transform

Gunakake **Transform** nalika sampeyan pengin AI ngikutake dhaptar instruksi sing disesuaikan.

![Ruang kerja Transform](../images/screenshots/jv/transform.png)

Iki minangka wilayah aplikasi sing paling fleksibel. Sampeyan bisa nggunakake kanggo tugas-tugas kayata:

- nggambarake cathetan
- ngowahi tulisan kasar dadi email sing resik
- ngunggahake poin-poin penting
- ngowahi teks dadi format tartamtu
- aktivitas kustom liyane karo teks input

<br/>

<a id="run-an-existing-prompt"></a>

### Jalanke prompt sing wis ana

1. Bukak **Transform**.
2. Pilih prompt saka dhaptar prompt.
3. Menawa muncul kotak basa **Target**, pilih basa menawa perlu.
4. Ketik utawa tempelna tèks nang **Input**.
5. Klik **Transform**.
6. Maca asilé nang **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Yen durung duwe prompt

Yen dhaftar promptmu kosong, klik **Carane nduduhake sampel prompt** ing workspace Transform. Kontrol sing padha iku uga kasedhiya ing [**Setelan** > **Transformasi Prompt**](#transform-prompts) ing baris ekspor/impot. Kalorone nambah conto sing wis diintegrasikake supaya sampeyan bisa miwiti kanthi cepet.

<br/>

> ℹ️ **CATATAN**<br/>
> Sampel prompt diwenehake ing basa Inggris. Sawise diunduh, sampeyan bisa ngowahi sawijining prompt lan nggunakake **Terjemahan prompt** kanggo menterjemahake menyang basa sampeyan.

<br/>

<a id="create-a-prompt-quickly"></a>

### Gawe prompt kanthi cepet

Cara paling cepet kanggo gawe prompt yaiku:

1. Klik **New prompt**.
2. Klik **Generate prompt**.
3. Jlentrehake apa sing pengin digawe kanthi prompt kasebut.
4. Pilih model.
5. Biyantu aplikasi nggawe rancangan kanggo sampeyan.
6. Priksa rancangane banjur klik **Save**.

![Generate prompt](../images/screenshots/jv/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### Sunting tembung dhawuh

Nalika sampeyan nggawe utawa nyunting tembung dhawuh, editor bakal katon ana ing kiwa lan wilayah pangujian bakal katon ana ing tengen.

![Editor dhawuh Transformasi](../images/screenshots/jv/transform-prompt-edit.png)

Wiwitane kalebu:

- **Jeneng dhawuh**: jeneng sing ditampilake ing dhaptar dhawuh.
- **Pitunjuk dhawuh (opsional)**: cathetan cendhak sing ditampilake marang pangguna nalika mlakuake dhawuh.
- **Peran Model**: peran umum sing dipasang marang AI, contone 'Sampeyan minangka asisten sing mbantu.'
- **Pitunjuk Model (siji saben baris)**: aturan khusus sing dikarepake AI diikuti.
- **Pitjeran metune**: tembung cendhak sing nerangake asil, contone 'ringkesan' utawa 'ditulis maneh'.
- **Suhu (0.0 → 1.0)**: cara model bakal tumindak; deleng ngisor iki.
- **Takoni basa tujuan**: nambah pamilah basa tujuan nalika dhawuh dijalankan.

Yen istilah teknis **Suhu** anyar kanggo sampeyan, bayangake kaya mangkene:

- **Suhu sing luwih rendah** menehi asil sing luwih tetep lan luwih bisa diprediksi.

- **Suhu sing dhuwur** menehi macem-macem lan kreativitas sing luwih akeh.

Sampeyan uga bisa nggunakake:

- **`Generate prompt`** kanggo nggawe draf anyar saka katerangan sing prasaja
- **`Improve prompt`** kanggo nggawe prompt sing wis ana dadi luwih apik
- **`Translate prompt`** kanggo menerjemahaké bagean-bagean prompt

<br/>

> ⚠️ **PERINGATAN**<br/>
> Klik **`Save`** sakdurunge sampeyan klik **`Back to Run`**. Yen sampeyan bali tanpa nyimpen, owah-owahan sampeyan bakal ilang.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Uji prompt sakdurunge digunakake

Panel tes ing sisih tengen ngidini arep nyoba prompt karo conto tèks sakdurunge nggunakake ing pakaryan saben dina.

Iki migunani nalika:

- sampeyan lagi nggawe prompt anyar
- sampeyan lagi mbandingake rong vèrsi prompt
- sampeyan pengin mriksa swara, dawa, utawa format keluaran

<br/>

> ℹ️ **CATETAN**<br/>
> Sampeyan bisa ngekspor lan ngimpor prompt sing wis disimpen ing [**Setelan** > **Transformasi Prompt**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Dashboard

Gunakake **Dashboard** kanggo ndeleng jumlah panggunaan aplikasi lan biayane (kanggo modhèl sing mbayar).

![Ringkesan Dashboard](../images/screenshots/jv/dashboard-summary.png)


<br/>

> ℹ️ **CATETAN**<br/>
> Yen sampeyan mung nggunakake modhèl **gratis**, jumlah **biaya** bisa nol lan ringkesan sing fokus marang biaya katon kosong. Ing **Ringkesan**, **Panggunaan wektu tindak** lan **Panggunaan déning modhèl** isih nuduhake **jumlah sesambungan** (terjemah, tulis maneh, lan owah bentuk) nalika ana aktivitas ing periode sing dipilih.

<br/>

<a id="filter-the-data"></a>

### Saring data

Gunakake tombol saringan ing ndhuwur kanggo ngowahi rentang wektu.

![Saringan Dashboard](../images/screenshots/jv/dashboard-filter.png)

<br/>

> ℹ️ **CATHETAN**<br/>
> Saringan **Pangguna** mung katon kanggo admin ing versi web. Pangguna biasa ora bakal ndeleng saringan iki, lan ora ana ing aplikasi desktop.

<br/>

<a id="dashboard-tabs"></a>

### Tab Bagan Papan Indikator

- **Ringkesan** menehi tinjauan ngenani panggunaan lan biaya. Kalebu **Panggunaan sepanjange wektu** (jumlah kumulatif tumpuk **jumlah panggilan** saben dina kanggo terjemah, nulis maneh, lan ngowahi) lan **Panggunaan miturut model** (**jumlah panggilan saben model**, kalebu owah-owahan).
- **Dumasar Panggunaan** nerangake aktivitas dumasar marang basa terjemahan, modus nulis maneh, lan prompt owah-owahan.
- **Dumasar Model** nuduhake model apa wae sing digunakake lan biaya saben model kasebut.
- **Dumasar Dina** nuduhake total saben dina.
- **Kabeh Panggilan** nuduhake sejarah panggilan lengkap lan mbukak kacepetan kanggo ekspor.

<br/>

<a id="export-data"></a>

### Ekspor data

Tabel dashboard bisa mengekspor data ing:

- **JSON**
- **CSV**
- **XLSX**

Iki migunani yen arep nimbang aktivitas ing njaba aplikasi utawa barengen laporan.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Mbusak rékor sing disimpen kanggo sawijining model

Ing **By Model** utawa **All Calls**, sampeyan bisa mbusak rékor sing disimpen kanggo sawijining model kanthi ngklik ikon "wadhah sampah".

> ⚠️ **PERINGATAN**<br/>
> Mbusek rékor sing wis disimpen ora bisa dibatalake. Gunakake iki mung menawa sampeyan yakin manawa riwayat kasebut ora dibutuhake maneh.

Kanggo mbusak kabeh data utawa mbusak rékor adhedhasar umuré, menyang [**Settings** > **Cost Tracking**](#cost-tracking). Ing kono sampeyan bakal nemokake pilihan kanggo mbusak kabeh data sing disimpen utawa mung data sing umuré luwih tuwa tinimbang tanggal tartamtu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Sajarah

Klik **Sajarah** kanggo ndeleng sajarah tumindak panjenengan ing **Transrewrt**, kalebu input lan output saben operasi.

![Kaca sajarah](../images/screenshots/jv/history.png)

<br/>

<a id="filter-the-history"></a>

### Saring data

**Sajarah** nggunakake saringan sing padha karo kaca **Dasbor**. Gunakna kanggo milih watesan wektu.

![Saringan dasbor](../images/screenshots/jv/dashboard-filter.png)

<br/>

> ℹ️ **CATETAN**<br/>
> Saringan **Pangguna** mung katon kanggo administrator ing versi web. Pangguna biasa ora bakal ndeleng saringan iki, lan ora kasedhiya ing aplikasi desktop.

<br/>

<a id="export-history-data"></a>

### Ngekspor data riwayat

Kaca riwayat bisa ngekspor data sing difilter dadi:

- **JSON**
- **CSV**
- **XLSX**

Iki migunani yen arep ngevaluasi aktivitas njaba aplikasi utawa barengen laporan.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>

## Setelan

Bukak **Setelan** saka samping kanggo ngatur cara aplikasi bertindak.

Tab sing kasedhiya gumantung ing platform lan peran panjenengan:

| Tab               | Desktop | Web (admin) | Web (pengguna biasa) |
|-------------------|:-------:|:-----------:|:--------------------:|
| Pangaturan Umum   |   ya    |      ya     |          ya          |
| Model             |   ya    |      ya     |          ya          |
| Basa              |   ya    |      ya     |          ya          |
| Pelacakan Biaya   |   ya    |      ya     |          —           |
| Ubah Prompt       |   ya    |      ya     |          ya          |
| Pangguna          |    —    |      ya     |          —           |
| Konfigurasi API   |   ya    |      ya     |          —           |
| Ngenani           |   ya    |      ya     |          ya          |

<br/>

> ℹ️ **CATETAN**<br/>
> Ing vèrsi wèb, saben pangguna duwé konfigurasi dhéwé. Setélan kaya model sing dipilih, basa, opsi umum, lan panyuwunan transformasi disimpen saben pangguna. Owah-owahan sing kokrubah ora mangaruhi pangguna liya.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Setelan Umum

Gunakake **Setelan Umum** kanggo ngontrol pangaturan ngetik, nyimpen rincian eksekusi kanggo **Sajarah**, lan tampilan.

**Perilaku**

- **Perilaku ENTER** milih apa `Enter` njalankan tugas utawa nambah baris anyar.
- **Terjemahake otomatis nalika nempel** miwiti terjemahan sakcepete sawise panjenengan nempelake teks.
- **Salin otomatis asil menyang papan klip** nyalin asil sing sukses sacara otomatis.
- **Terjemahan wektu nyata (kala ngetik)** nerjemahake kala panjenengan ngetik.
- **Wektu habis (ms)** ngatur wektu pangenten kanggo terjemahan wektu nyata.

**Sajarah**

- **Nyimpen sajarah eksekusi** ngontrol apa saben terjemahan, panulisan maneh, lan transformasi nyimpen **teks input lan output** kanggo tampilan sisih [**Sajarah**](#history). Mateni fitur iki bakal takon konfirmasi; menawa panjenengan konfirmasi, teks sajarah sing disimpen bakal dihapus saka database.

- **Hapus data riwayat** ngidinake sampeyan ngilangi tèks sing disimpen miturut umur (contone sing wis lawas saka sawetara wulan, utawa **kabèh data (bener-bener kosong)**) nganggo **Hapus data**. Iki mung ngaruhi tèks eksekusi sing disimpen kanggo tampilan **Riwayat**; iki **ora** ngilangi total biaya utawa panggunaan. Kanggo ngilangi utawa mangan data **biaya**, gunakna [**Setelan** > **Pelacakan Biaya**](#cost-tracking).

**Penampilan**

- **Tampilake informasi biaya ing tindakan** ngontrol penampilan biaya saben operasi (yen kasedhiya) lan total biaya ing panel output Terjemahake, Tulis Maneh, lan Transformasi.
- **Dhigit pecahan biaya** ngganti cara nampilake angka desimal biaya.
- **Khusus web:** **tampilake jarak pinggir ing sakiwa tengene aplikasi** nambah ruwang tambahan ing sakiwa tengen antarmuka.
- **Jinis Huruf** ngganti font tulisan ing panel tèks.
- **Ukuran** ngganti ukuran font.

**Cadangan Konfigurasi**

- **Sertakake data panggunaan ing cadangan** — nalika diaktifake, file ZIP uga ngandhut riwayat eksekusi lan data panjalukan API.

- **Cadangan konfigurasi** — nggawe siji berkas ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` kanthi standar ing UTC) sing kalebu `config.json`, `state.json`, kunci enkripsi opsional, panganggo, pilihan, petunjuk adat, lan data panggunaan yen sampeyan milih kalebu. Sawise cadangan rampung, konfirmasi bakal nuduhake jeneng berkas sing wis disimpen.
- **Mulihake saka cadangan** — mbukak **dialog konfirmasi dhisik**. Pilih berkas ZIP cadangan ana ing jero dialog kasebut (**Jelajah** / pemilih berkas utawa seret-lerem yen didhukung), banjur mariksa pilihan:
  - **Mulihake data panggunaan** — ngimpor panggunaan/riwayat saka ZIP nalika dicadangake kanthi kalebu panggunaan; aja dipilih menawa mung pengin setelan lan petunjuk.
  - **Bersihake data panggunaan lawas sadurunge mulihake** — mbusak panggunaan/riwayat sing ana ing instalasi iki sadurunge nglebokake cadangan (opsional; digunakake nalika pengin ngganti kanthi bersih).

Rekaman sing digawe ing versi web utawa desktop bisa digulihake ing sing liyane. Nalika nggulihake rekaman desktop ing versi web, datane bakal digulihake menyang pangguna admin.


<br/>

<a id="models"></a>

### Model

Gunakake **Setelan** > **Model** kanggo milih model sing dipérang ing bilah alat.

![Tab Model Setelan](../images/screenshots/jv/settings-models.png)

Kaca iki duwe dhaptar loro:

- **Model Sing Kasedhiya** ing sisih kiwa
- **Model Sing Dipilih** ing sisih tengen

Kontrol sing migunani kalebu:

- **Cari model...** kanggo mangerteni model miturut jenengé
- **Chip Panyedhiya** kanggo ngeculaké dhaptar menyang mesin siji (OpenRouter, OpenAI, Ollama, …)
- **Mung Gratis** kanggo nuduhake mung model gratis
- **Segerake** kanggo mbukak maneh dhaptar
- **Bukak Kabeh** lan **Tutup Kabeh** nalika ngurutake miturut panyedhiya

Id model kalebu pratelon panyedhiya (contone `openrouter/…` vs `openai/…`). Lencana kaya **OpenAI (OpenRouter)** vs **OpenAI (langsung)** nuduhake carane lalu lintas dipandu.

> ℹ️ **CATETAN**<br/>

> **Pametung Awak OpenRouter** (`openrouter/bodybuilder`) iku modhel ruter, dudu modhel obrolan umum: wangsulane yaiku JSON sing nerangake awak panjaluk API OpenRouter (contone larik `requests` karo `model` lan `messages`). Yen nggunakake kanggo **Terjemahake**, **Nulis Maneh**, utawa **Ngowahi**, panel kasil bakal nuduhake JSON kasebut tinimbang teks rampung. Pilih modhel teks biasa kanggo tugas-tugas kasebut. Delengen [kaca modhel Body Builder](https://openrouter.ai/openrouter/bodybuilder) ing OpenRouter.

Tindakan:

 - Kanggo nambah modhel, klik **Tambah** utawa ing endi wae ing entri.

 - Kanggo mbusak modhel, klik **X** ing sampingé ing bagéan **Modhel Terpilih** utawa **Terpilih** ing entri Modhel Tersedia.

 - Kanggo mbenerake daftar, klik **Batal Pilih kabeh**. Modhel gratis sing dibutuhake bakal tetep ana ing dhaptar.

<br/>

> ℹ️ **CATHETAN**<br/>

> Yèn sampeyan ora pengin nambahaké kredit menyang OpenRouter sacara langsung, wiwitolah kanthi ngaktifaké **Free Only** lan milih model gratis (ora mbutuhaké kertu kredit). Sampeyan uga bisa nggunakaké Ollama kanggo ngoperasikaké model sacara lokal tanpa kunci API apa wae.

<br/>

<a id="languages"></a>

### Basa

Gunakake **Setelan** > **Basa** kanggo ngatur dhaptar basa sing digunakake ing aplikasi.

- **Basa utama** dipasang cedhak bagéan ndhuwur dhaptar basa ing **Terjemahake** lan **Tukar**.
- **Basa khusus** ngidinake sampeyan nambah basa sing ora ana ing dhaptar bawarna.

Yen sampeyan nambah basa khusus, basa kasebut bakal katon ing pemilih basa bebarengan karo pilihan bawaan.

<br/>

<a id="cost-tracking"></a>

### Pelacakan biaya

Gunakake **Setelan** > **Pemantauan Biaya** kanggo ngatur informasi biaya.

- **Total Biaya** nuduhake jumlah total sing lagi lumaku.
- **Salin Nilai** nyalin jumlah total menyang clipboard.
- **Setel Ulang Biaya** mbatesake maneh jumlah sing disimpen dadi nol.
- **Sinkronake karo panggunaan kunci API** ngganti jumlah supaya cocog karo panggunaan sing dilaporake dening akun OpenRouter (OpenRouter mung).
- **Panggunaan Kunci API** nuduhake rincian panggunaan OpenRouter, yen kasedhiya.
- **Hapus data biaya** mbusak kabeh data, utawa mung entri sing luwih tuwa tinimbang tanggal sing dipilih.


**Pelacakan biaya:** Nalika sampeyan migunakake model OpenRouter, aplikasi nuduhake panggunaan lan pangeluaran nyata adhedhasar informasi biaya saka OpenRouter. Kanggo kabeh penyedia liyane, aplikasi nemtokake perkiraan biaya nggunakake rega sing diterbitake dening OpenRouter, yen rega ora kasedhiya, perkiraan bisa waé nol.

<br/>

> ℹ️ **CATETAN**<br/>
> **Saben angka biaya iku perkiraan mung kanggo pandhuan sampeyan, dudu dhawuh tagihan resmi.**


<br/>

> ⚠️ **PERINGATAN**<br/>

> Mbusek data ora bisa dibaleni maneh. Sadurunge mbusek, pasthike nek data sampéyan wis dicadhangke utawa di ekspor liwat [**Riwayat**](#history)
> utawa [**Dasbor** > **Kabeh Panggilan**](#dashboard-tabs), yen ora data bakal ilang permanen. 
> Kabeh riwayat input/ouput sing nyambung karo saben entri panjaluk API uga bakal dihapus.

<br/>

<a id="transform-prompts"></a>

### Ngowahi prompt

Gunakake **Setelan** > **Ngowahi Prompt** kanggo ngatur prompt sacara masal.

Sampeyan bisa:

- ndeleng maneh prompt sing wis disimpen
- mbusak prompt
- ngimpor prompt saka berkas
- mengekspor prompt kanggo cadangan utawa dibagi
- ngunggah conto prompt menyang dhaptar prompt

<br/>

<a id="users"></a>

### Pangguna

Gunakake **Pangguna** kanggo ngatur akun pangguna ing versi wéb. Sampeyan bisa nambah pangguna, ngénggaliké rinciané, ngreset sandhi, lan mbusak akun.

<br/>

<a id="api-config"></a>

### Konfigurasi API

Panyedia sing didhukung yaiku: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, lan **Ollama** (model lokal liwat URL dhasar). Panjenengan mung kudu ngonfigurasi panyedia sing digunakake.

**Aplikasi web: mung administrator**

Kunci API dikonfigurasi ngalor saka variabel lingkungan sistem utawa Docker — ora dimasukkan ing antarmuka web. Kaca iki nudduhaké panyedia sing duwe kunci sing dikonfigurasi lan ngidini panjenengan nyoba saben siji kanthi klik tombol **`Tes`**.

<br/>

> ℹ️ **CATETAN**<br/>
> Kanggo ngowahi kunci API, perbaharui variabel lingkungan ing konfigurasi sistem utawa Docker panjenengan lan restart server utawa wadhah.

> ℹ️ **CATETAN**<br/>

> **Cadangan konfigurasi** (delengen [**Setelan Umum** → Cadangan Konfigurasi](#general-settings)) bisa nemplek kunci provider sing wis **diselesaikan** ing jero `config.json` saka arsip ZIP. Nggabungake maneh arsip ZIP iki **ora** nyalin maneh kunci-kunci kuwi menyang file konfigurasi server sing disimpen — kunci sing aktif tetep dijupuk saka lingkungan lan status file sing ana kaya sing dijelasake ing kana.

<br/>

**Aplikasi Desktop**

Gunakake **Konfigurasi API** kanggo nyimpen kunci API kanggo saben provider sing digunakake. Kanggo Ollama, ketik **URL dhasar** tinimbang kunci API.

<br/>

> 💡 **Triks** <br/>
> Yen sampeyan ora pengin nggunakake kunci API utawa mbayar panggunaan, sampeyan bisa [ngunduh Ollama](https://ollama.com) lan njalankan model (kayata `translategemma:4b`) sacara lokal ing komputer sampeyan kanthi gratis. Liya cara, sampeyan bisa nggawe akun OpenRouter gratis (ora perlu kartu kredit) kanggo nggunakake model gratisé, utawa entuk kunci API gratis saka Cerebras, Google, Groq, utawa Mistral AI.

<br/>

- Tambahna mung provider sing dibutuhake. Ing **Setelan** > **Model**, saben ID model diwiwiti nganggo provider (contone `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Kanggo nambah kunci API, lebokna nilai nang kolom teks lan klik **`Simpen`**. Kanggo ngganti kunci sing wis ana, klik **`Sunting`**. Kanggo ngonfirmasi manawa kunci iku bisa digunakake, klik **`Tes`**. Kanggo URL dhasar Ollama, tansah klik **`Tes`** kanggo mriksa sambungan.

<br/>

> ℹ️ **CATETAN**<br/>
> Sampeyan ora bisa mirsani nilai saiki saka kunci API. Sampeyan mung bisa nggantina nganggo tombol **`Sunting`**.
> Kunci API disimpen nganggo enkripsi nang konfigurasi.

<br/>

<a id="about"></a>

### Ngenani

Tembung **Ngenani** nuduhaké:

- jeneng aplikasi
- nomor versi
- tanggal panggawéan
- pranala menyang repositori proyek

<br/><br/>

<a id="common-issues"></a>

## Masalah umum

Yèn ana sing ora mlaku kaya jen wis diduga, priksa dhisik bab-bab ing ngisor iki.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>

### Aplikasi ora bakal menerjemahake, nulis maneh, utawa ngowahi tèks

Priksa manawa:

- sampeyan wis milih model ing bilah piranti
- paling ora ana siji model sing dicantumake ing [**Setelan** > **Model**](#models)
- setelan API sampeyan lagi mlaku kanthi apik

Yen sampeyan nggunakake aplikasi dhisik:

1. Bukak [**Setelan** > **Konfigurasi API**](#api-config).
2. Priksa manawa paling ora ana siji kunci API sing wis disimpen.
3. Klik **Tes** ing sabrang penyedia kanggo masthekake yen kunci iku bisa digunakake.

<br/>

<a id="the-model-list-is-empty"></a>

### Daptar model kosong

Bukak [**Setelan** > **Model**](#models) lan klik **Segerakno**.

Yen perlu:

- goleki model
- aktifake **Mung Gratis**
- tambahno siji utawa luwih model menyang **Model sing Dipilih**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>

### Asilé mbèlèng utawa larang banget

Coba siji utawa luwih saka iki:

- pilih model liya
- gunakake input sing luwih cendhak
- mateni **Terjemahan langsung (saat mengetik)** ing [**Setelan** > **Setelan Umum**](#general-settings)
- gunakake model gratis kanggo tugas-tugas gampang (deleng [Model](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### Antarmukaé ana basa sing salah

Klik ikon globe ing [toolbar](#toolbar) lan pilih **Basa antarmuka** kanggo kabehé.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>

### Teksipun kecil utawa mboten gampil dipunmaca

Bukak [**Setelan** > **Setelan Umum**](#general-settings) terus owah:

- **Kulawarga Huruf**
- **Ukuran**

<br/>

<a id="dashboard-charts-are-empty"></a>

### Bagan Dasbor kosong

Iki lumrah yen:

- sampeyan mung nggunakake **model gratis** lan sampeyan ndeleng angka **biaya** (iiki bisa dadi nol); bagan jumlah pangenalan **penggunaan** ing **Ringkesan** isih butuh data saka periode sing dipilih
- **filter wektu** sing dipilih ora nyakup periode nalika pangenalan digawe — coba **Kabeh** kanggo ndeleng

Yen bagan isih kosong sawise milih **Kabeh**, pastekan manawa pangenalan katon ing [**Riwayat**](#history) utawa ing tab **Kabeh Pangenalan**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Biaya nampilaké "ora ana" utawa katon salah

Nalika sampeyan nggunakake model liwat **OpenRouter**, aplikasi bakal nuduhaké pangrogèjan nyata sing dilapuraké déning OpenRouter.

Kanggo **penyedia liya** (OpenAI langsung, Anthropic langsung, lsp.), biaya diperkirakaké saka data rega sing diterbitaké déning OpenRouter. Yèn ora ana rega sing cocog kanggo model tartamtu, biaya bakal katon minangka **ora ana** lan ora bakal dituduhaké ing jumlahe sampeyan.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### Total regane ora cocog karo tagihan penyedia aku

Dudutan rega ing aplikasi iki mung **perkiraan kanggo rujukan wae**, dudu pernyataan bill resmi.

Kanggo nggawé total cedhak karo pengeluaran OpenRoutermu, bukak [**Setelan** > **Pelacakan Biaya**](#cost-tracking) lan klik **Sinkronke karo penggunaan kunci API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### Kaca sjarah ilang saka sisih bilah

**Njaga sjarah eksekusi** bisa uga dimateni. Bukak [**Setriangan** > **Setriangan Umum**](#general-settings) lan aktifake. Dicathet yen ngaktifake ora ngembalike data sjarah sing dicopot sadurungé.

<br/>

<a id="web-app-session-expired"></a>

### Aplikasi wèb: dialihaké menyang kaca login kanthi ora dikarepaké

Sesi panjenengan bisa uga wis kelacen wektune. Deloken manèh. Yèn kajaadian iki kerep dumadi, priksa konfigurasi server kanggo setelan urip sesi.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Panel admin wèb: lali utawa ilang tembung sandhi

Iki lumrah kanggo **app wèb sing dipasang dhéwé** (Docker), ora kanggo app desktop (Electron).

- Yèn administrator liya isih bisa mlebu, dhèwèké bisa mbukak [**Setélan** > **Panganggo**](#users), milih akun, lan ngatur **tembung sandhi anyar** ana.
- Yèn sampeyan **ora bisa mlebu** nanging duwé akses *shell* menyang mesin utawa wadah, atur maneh tembung sandhi nganggo piranti bantuan sing dikirim karo citra (ganti `transrewrt` yèn sampeyan ngganti jeneng asli, lan gunakna tanda kutip yèn tembung sandhi ngandhut spasi utawa karakter khusus):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Jeneng panganggo administrator asli yaiku `admin` yèn sampeyan durung tau nggawé akun liya. Yèn sampeyan mung mènèkake siji argumèn, argumèn kasebut bakal dianggep minangka tembung sandhi anyar kanggo `admin`.

Yèn sampeyan njalankake saka **cekout sumber** tinimbang Docker, gunakna:

```bash
pnpm run reset-web-password -- <username> <new-password>

Scrpté iki ngénggo nganyari rékor panganggo ing database SQLite (lan bisa nggawé panganggo `admin` menawa ilang). Sawisé ngreset, mlebu nganggo sandhi anyar.  

<br/>  

<a id="dashboard-shows-no-data-for-other-users"></a>

### Dasbor ora nuduhake data kanggo pangguna liya (web)

Mung **administrator** sing bisa ndeleng data saka kabeh pangguna liwat saringan **Pangguna**. Pangguna biasa mung weruh aktivitas dhewe miturut rancangane.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### Aku ngowahi dhawuh nanging kehilangan owah-owahané

Nalika ngowahi dhawuh, tansah klik **Simpen** sadurunge klik **Bali menyang Run**.

<br/><br/>

<a id="quick-tips"></a>

## Tipu-cepet

- Mulai karo [**Terjemahaké**](#translate) kanggo mastekake yèn ngaturané wis cocog sakdurungé nglanjutaké marang [**Nulis Manèh**](#rewrite) utawa [**Ngowah**](#transform).
- Gunakaké [**Nulis Manèh**](#rewrite) kanggo pangowahan basa saben dina.
- Gunakaké [**Ngowah**](#transform) nalika perlu alur pagawean sing bisa diulang kanggo tugas tartamtu.
- Gunakaké [**Dasbor**](#dashboard) manawa pengin ngawasi panggunaan lan biaya.
- Gunakaké [**Riwayat**](#history) kanggo nindakaké ulasan tumindak kapungkur lan tèks input/outputé lengkap.
- Ekspor prompt kanthi rutin manawa nduwé perpustakaan prompt sing pengin dipun jaga kaamanané (deleng [Transform Prompts](#transform-prompts)) utawa manawa pengin dienggo bareng karo liyané.

<br/><br/>

<a id="disclaimer"></a>

## Pranyatan

Jeneng lan ikon produk duwéé pemiliké dhéwé lan namung digunakaké kanggo tujuan identifikasi. Piranti lunak iki ora ana gandhèngané utawa ora didhukung déning mércuswaran sing dijenengi.

<br/><br/>

<a id="license"></a>

## Lisensi

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Lisensi Apache 2.0](LICENSE)