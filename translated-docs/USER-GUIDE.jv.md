---
translated_at: "2026-03-24T01:54:02.579Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Pudhak Panganggo

<br/>

<a id="introduction"></a>
## Pambukuan

Transrewrt mbantu sampeyan damel kaliyan tèks kanthi telung cara utama:

- **Terjemahake** - ngowahi tèks saka siji basa menyang basa liya.
- **Nulis maneh** - nyusun maneh tèks nganggo gaya liyane, kayata lewih cetha, ringkes, utawa luwih formil.
- **Ngowahi** - ngolah tèks nganggo instruksi AI kustom sing diarani prompt.

<br/>

Pandhuan iki nerangake carane nggunakake aplikasi sawise diinstal lan diuripake. Kanggo langkah instalasi, deleng **[README](README.jv.md)** utama.

<br/>

> ℹ️ **CATETAN**<br/>
> Transrewrt kasedhiya minangka aplikasi desktop kanggo Windows lan Linux, lan minangka aplikasi web sing bisa dipasang dhéwé. Pandhuan iki marèntahake panggunaan saben dina aplikasi kasebut. Ing endi ana sing mung madheg salah siji versi, diandharake kanthi jelas.

<small>**Mbacane ing basa liya:** [English (UK)](USER-GUIDE.jv.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Dhaftar Isi** 

- [Sawise miwiti](#before-you-start)
  - [Carane entuk OpenRouter API key gratis (aplikasi desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Miwiti](#getting-started)
- [Bagéyan utama jendhela](#main-parts-of-the-window)
  - [Sidebar](#sidebar)
  - [Toolbar](#toolbar)
  - [Panel input lan output](#input-and-output-panels)
- [Terjemahan](#translate)
  - [Terjemahake tèks](#translate-text)
  - [Pemilihan basa](#language-selection)
  - [Setelan terjemahan sing migunani](#helpful-translation-settings)
  - [Pintasan keyboard](#keyboard-shortcuts)
- [Nulis manèh](#rewrite)
  - [Nulis manèh tèks](#rewrite-text)
- [Ngowahi](#transform)
  - [Jalokne prompt sing wis ana](#run-an-existing-prompt)
  - [Yen durung duwe prompt](#if-you-have-no-prompts-yet)
  - [Gawe prompt kanthi cepet](#create-a-prompt-quickly)
  - [Sunting prompt](#edit-a-prompt)
  - [Tes prompt sakdurunge digunakake](#test-a-prompt-before-using-it)
  - [Atur prompt sing disimpen](#manage-saved-prompts)
- [Dasbor](#dashboard)
  - [Saring data](#filter-the-data)
  - [Tab dasbor](#dashboard-tabs)
  - [Ekspor data](#export-data)
  - [Hapus rékord sing disimpen kanggo model](#delete-stored-records-for-a-model)
- [Riwayat](#history)
  - [Saring data](#filter-the-data-1)
  - [Ekspor data riwayat](#export-history-data)
- [Setelan](#settings)
  - [Setelan umum](#general-settings)
  - [Model](#models)
  - [Basa](#languages)
  - [Pelacakan biaya](#cost-tracking)
  - [Prompt transformasi](#transform-prompts)
  - [Panganggo](#users)
  - [Konfigurasi API](#api-config)
  - [Tentang](#about)
- [Masalah umum](#common-issues)
  - [Aplikasi ora bisa menerjemah, nulis maneh, utawa ngowahi tèks](#the-app-will-not-translate-rewrite-or-transform-text)
  - [Dhaftar model kosong](#the-model-list-is-empty)
  - [Asilé kerep lelet utawa larang regane](#the-result-is-too-slow-or-too-expensive)
  - [Antarmuka nganggo basa sing salah](#the-interface-is-in-the-wrong-language)
  - [Tèks terlalu cilik utawa angel diwaca](#the-text-is-too-small-or-hard-to-read)
  - [Grafik dasbor kosong](#dashboard-charts-are-empty)
  - [Biaya nuduhake "ora kasedhiya" utawa katon salah](#cost-shows-not-available-or-seems-wrong)
  - [Total biaya ora cocog karo tagihan provider kula](#total-cost-does-not-match-my-provider-bill)
  - [Kaca Riwayat ilang saka sidebar](#the-history-page-is-missing-from-the-sidebar)
  - [Aplikasi web: dialihake menyang kaca login kanthi ora diduga](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Dasbor ora nuduhake data kanggo panganggo liya (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Kula ngowahi prompt lan ilang suntingane](#i-changed-a-prompt-and-lost-the-edits)
- [Tip cepet](#quick-tips)
- [Pernyatan penyangkalan](#disclaimer)
- [Lisensi](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Sak durunge miwiti

Kanggo nganggo Transrewrt, panjenengan kudu duwe akses menyang paling ora siji penyedia AI. Penyedia sing didhukung yaiku: [OpenRouter](https://openrouter.ai) (kang nggabungake akeh model), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, lan [Ollama](https://ollama.com) kanggo model lokal.

Panjenengan ora perlu milih model bayar kanggo miwiti. Sawise nambahake API key OpenRouter, aplikasi kanthi otomatis ngaktifake pilihan OpenRouter **gratis** sing wis diintegrasikake. Iki ngidini panjenengan langsung miwiti nerjemahake, nulis maneh, lan ngowahi teks.

Jalaran basa sing gampang:

- Sawijining **model** yaiku mesin AI sing nindakake tugas. Model kasebut ditampilake karo awalan **penyedia** (contone `openrouter/…`, `openai/…`, `ollama/…`).
- Sawijining **API key** (utawa, kanggo Ollama, sawijining **base URL**) iku cara aplikasi ngakses penyedia kasebut.

Yen panjenengan nggunakake **aplikasi desktop**, tambahake kunci ing [**Setelan** > **API Config**](#api-config) kanggo saben penyedia sing digunakake. Kanggo panggunaan mung OpenRouter, deleng [Cara njaluk API key](#how-to-get-an-api-key-desktop-app) ing ngisor iki. Yen panjenengan ora pengin nggunakake API key, panjenengan bisa nginstal Ollama (saka [ollama.com](https://ollama.com)) lan nggunakake model lokal minangka gantine.

Yen panjenengan nggunakake **versi web**, pemilik server ngonfigurasi penyedia nggunakake variabel lingkungan, dadi biasane panjenengan ora kudu ngetik API key dhewe.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cara njaluk API key OpenRouter gratis (aplikasi desktop)

Yen panjenengan nggunakake aplikasi desktop, tindakake langkah-langkah ing ngisor iki:

1. Bukak [OpenRouter](https://openrouter.ai) ing browser web panjenengan.
2. Gawe akun utawa mlebu.
3. Bukak kaca [Keys](https://openrouter.ai/keys).
4. Klik tombol kanggo nggawe API key anyar.
5. Beri jeneng kanggo key kasebut supaya bisa dikenali mengko.
6. Salin API key anyar kasebut.
7. Baler menyang Transrewrt lan mbukak **Setelan** > **API Config**.
8. Tempelake key kasebut menyang **OpenRouter API key** (ing ngisor **Setelan** > **API Config**).
9. Klik **Test OpenRouter key** kanggo mastekake manawa iku bisa digunakake.

<br/>

> ℹ️ **CATETAN**<br/>
> Panjenengan bisa miwiti nganggo rute gratis OpenRouter utawa model gratis liyane tanpa nambah kertu kredit. Ing akeh kasus, iku cukup kanggo miwiti nggunakake Transrewrt tanpa milih model bayar. Sabaliké, panjenengan bisa nggunakake Ollama kanggo ngoperasikake model lokal tanpa API key apa wae.

<br/><br/>

<a id="getting-started"></a>
## Miwiti

Yen iki wektu pisanan panjenengan nggunakake Transrewrt, tindakake urutan iki:

1. Bukak aplikasi.
2. Pilih **Basa Antarmuka** panjenengan saka ikon globe yuswa yen perlu.
3. Menawa panjenengan nggunakake **aplikasi desktop**, mbukak [**Setelan** > **API Config**](#api-config), tambahake API key kanggo paling ora siji penyedia (contone OpenRouter), lan klik **Tes** kanggo ngonfirmasi manawa bisa digunakake.
4. Bukak [**Setelan** > **Model**](#models) lan tambahake siji utawa luwih model menyang **Model sing Dipilih**.
5. Bukak [**Setelan** > **Basa**](#languages) lan pilih **Basa utama** panjenengan menawa panjenengan pengin basa sing paling asring digunakake ditampilake dhisikan.
6. Menyang **Terjemahan** lan jalanake terjemahan sederhana kanggo ngonfirmasi kabeh bisa digunakake.
7. Sawise iku bisa digunakake, coba **Nulis Maneh** lan banjur **Ngowahi**.

Urutan iki penting. Iki mencegah masalah sing paling umum nalika nggunakake pisanan: nyoba ngajalani tugas sadurunge aplikasi duwe sambungan API sing bisa digunakake utawa model sing dipilih.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Bagéyan utama jendhela

Aplikasi dibagi dadi telung bagéyan utama:

- **Sidebar** ing sisih kiwa.
- **Toolbar** ing sisih ndhuwur.
- **Wiyangan karya** ing tengah.

<br/>

<a id="sidebar"></a>
### Sidebar

Gunakake sidebar kanggo pindhah-pindah ing aplikasi. Panjenengan bisa nutup sidebar kanggo entuk ruangan tambahan kanthi ngklik ikon ing samping logo aplikasi.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/jv/sidebar.png" alt="Application Sidebar" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Terjemahan</strong> mbukak workspace terjemahan.</li><br/>
        <li><strong>Nulis Maneh</strong> mbukak workspace nulis maneh.</li><br/>
        <li><strong>Ngowahi</strong> mbukak workspace prompt khusus.</li><br/>
        <li><strong>Dasbor</strong> nuduhake informasi panggunaan lan biaya.</li><br/>
        <li><strong>Setelan</strong> mbukak panel setelan.</li><br/>
        <li><strong>Sejarah</strong> nuduhake riwayat panggunaan karo teks input lan output</li><br/>
        <li><strong>Pangguna</strong> nuduhake jeneng pangguna sing lagi mlebu (mung versi web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Gawan Pamriksan

Gawan pamriksan owah sithik tergantung neng ngendi panjenengan ana ing app kasebut.

- Neng kiwo, nuduhake jeneng kaca saiki.
- Neng tengen, nuduhake **pemilih model** lan kontrol **basa antarmuka**.

**Pemilih model** ngidinake panjenengan milih mesin AI endi sing digunakake kanggo tugas saiki.

  ![Pemilih model](../images/screenshots/jv/model-selector.png)

> ℹ️ **CATETAN**<br/>
> Sawetara model gratis bisa uga ora tansah kasedhiya—kadhangkala mati utawa duwe wates panggunaan. Yen iki kedadeyan, app bakal sacara otomatis mbusak model kasebut saka dhaptar panjenengan sing kasedhiya.<br/>
> Kanggo ngatur model sing muncul, menyang [**Setelan** > **Model**](#models) lan sunting dhaptar model panjenengan. 
> Panjenengan uga bisa mbukak setelan model langsung kanthi klik ikon penyedia ing kiwo jeneng model ing gawan pamriksan.

<br/>

**Ikon globe + kode basa** owah basa antarmuka app, kaya menu lan tombol. Iki **ora** ngowahi basa terjemahan sing digunakake ing **Terjemah**.

  ![Pemilih basa antarmuka](../images/screenshots/jv/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Panel input lan output

Kabeh workspace nggunakake panel kiwo **Input** lan panel tengen **Output**.

Panel **Input** nuduhake:

- Jumlah aksara
- Jumlah tembung
- Jumlah paragraf

Panel **Output** bisa nuduhake:

- Durasi tugas
- Biaya tugas kasebut (yen kasedhiya)
- Jumlah total biaya sing lagi mlaku
- **TPS** (token saben detik)
- Jumlah aksara, tembung, lan paragraf
- Model sing digunakake

Yen panjenengan mangu babagan istilah teknis:

- **Token** tegese potongan cilik teks. Panjenengan bisa mikir minangka bagéyan tembung utawa tembung cendhak.
- **TPS** tegese jumlah potongan teks kasebut sing diolah saben detik.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Terjemah

Gunakake **Terjemah** nalika panjenengan arep ngowahi teks saka siji basa menyang basa liyane.

![Workspace Terjemah](../images/screenshots/jv/translate.png)

<br/>

<a id="translate-text"></a>
### Terjemahake Teks

1. Buke **Terjemah**.
2. Pilih basa ing **Saka**.
3. Pilih basa ing **Menyang**.
4. Pilih model ing gawan pamriksan.
5. Ketik utawa temporokake teks menyang **Input**.
6. Klik **Terjemah**.
7. Maca asilé ing **Output**.
8. Gunakake tombol salin yen panjenengan arep nyalin asilé.

<br/>

<a id="language-selection"></a>
### Pemilihan Basa

- **Saka** bisa uga basa tartamtu utawa **Deteksi Basa**.
- **Menyang** iku basa sing panjenengan kekarepan kanggo asilé.

**Basa ndhuwur** sing dipilih bakal muncul ing bagéyan ndhuwur dhaptar. Panjenengan bisa ngatur iku ing [**Setelan** > **Basa**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Setelan terjemahan sing mbantu

Ing [**Setelan** > **Setelan Umum**](#general-settings), panjenengan bisa ngowahi cara terjemahan dipigunakake:

- **Terjemah otomatis nalika nyelot** nglakokake terjemahan sewetara panjenengan nyelot teks.
- **Salin asil otomatis menyang clipboard** nyalin asilé sacara otomatis sawise tugas rampung.
- **Terjemah nyata (nalika mengetik)** nglakokake terjemahan nalika panjenengan ketik.
- **Wates wektu (ms)** ngatur suwe wektu app nunggu sadurunge nglakokake terjemah nyata.

<br/>

<a id="keyboard-shortcuts"></a>
### Pintasan keyboard

Ing [**Setelan** > **Setelan Umum**](#general-settings), **Perilaku ENTER** ngatur apa sing kelakon nalika panjenengan tekan tombol `Enter`:

- **Enter** bisa nglanggar tugas lan **Shift+Enter** bisa nambah baris anyar.
- Utawa app bisa nglakokake balesané.

Mode saiki uga ditampilake ing tombol **Terjemah**.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Tulis Maneh

Gunakake **Tulis Maneh** nalika panjenengan arep ngowahi gaya basa tanpa ngowahi teges utamane.

![Workspace Tulis Maneh](../images/screenshots/jv/rewrite.png)

Iki migunani kanggo:

- nyarasake ejaan lan tata basa
- nggawe teks luwih cetha
- nggawe teks luwih formal utawa luwih kurang formal
- ngemot utawa memper teks
- nggawe teks kaya luwih teknis

<br/>

<a id="rewrite-text"></a>

### Tulis maneh Teks

1. Buka **Tulis maneh**.
2. Pilih siji **Modha**.
3. Pilih modhèl ing bilah asta.
4. Ketik utawa tmpelna teks ing **Input**.
5. Klik **Tulis maneh**.
6. Priksa hasilé ing **Output**.


Périlaku tombol Enter sing dijelasaké ing [**Terjemahake**](#keyboard-shortcuts) uga berlaku ing kene.

<br/>

> 💡 **SARAN**<br/>
> Nalika nganggo modha "**Cek Ejaan & Tata Basa**", tombol `Tunjukna owah-owahan` metune ing panel output.
> Klik tombol iki kanggo ngalihaké tampilan koreksi, nlusur utawa nutupi owah-owahan khusus sing ditindakaké marang teks panjenengan.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Transformasi

Gunakna **Transformasi** nalika panjenengan pengin AI nututi instruksi sing digawe dhéwé.

![Workspace Transformasi](../images/screenshots/jv/transform.png)

Iki minangka bagéyan paling fleksibel saka aplikasi. Panjenengan bisa nggunakna kanggo tugas-tugas kaya:

- ngrekap cathetan
- ngowahi teks mentah dadi e-mail sing rapi
- ngèkstrak poin utama
- ngowahi teks dadi format tartamtu

<br/>

<a id="run-an-existing-prompt"></a>
### Jalanake Cithakan sing Durung Ana

1. Buka **Transformasi**.
2. Pilih siji cithakan saka dhaptar cithakan.
3. Yen kotak **Basa Sasaran** metune, pilih basa yen dimaksudaké.
4. Ketik utawa tmpelna teks ing **Input**.
5. Klik **Transformasi**.
6. Waca asilé ing **Output**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Yen durung ana Cithakan

Yen dhaptar cithakan panjenengan kosong, klik **Muat Cithakan Contoh**. Iki nambahaké conto bawaan supaya panjenengan bisa miwiti kanthi cepet.

<br/>

> ℹ️ **CATETAN**<br/>
> Cithakan contoh diwènèhaké ing basa Inggris. Sawisé diunduh, panjenengan bisa nyunting cithakan lan nggunakna **Terjemahake Cithakan** kanggo menterjemahakéé dadi basa panjenengan.

<br/>

<a id="create-a-prompt-quickly"></a>
### Gawe Cithakan kanthi Cepet

Cara paling cepet nggawe cithakan yaiku:

1. Klik **Cithakan Anyar**.
2. Klik **Gawe Cithakan**.
3. Jlèntrèhan apa sing panjenengan arep supaya cithakan bisa digunakaké.
4. Pilih modhèl.
5. Biyènna aplikasi nggawe rancangan kanggo panjenengan.
6. Priksa rancangane lan klik **Simpen**.

![Gawe Cithakan](../images/screenshots/jv/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Sunting Cithakan

Nalika panjenengan nggawé utawa nyunting cithakan, panel éditor metune ing kiwa lan wilayah uji coba metune ing tengen.

![Editor cithakan Transformasi](../images/screenshots/jv/transform-prompt-edit.png)

Régahe utama yakuwi:

- **Jeneng Cithakan**: jeneng sing dipétakna ing dhaptar cithakan.
- **Instruksi Cithakan (opsional)**: cathetan cendhèk sing nuduhaké pangguna nalika mlakuaké cithakan.
- **Peran Modhèl**: peran umum sing diwenehaké marang AI, kaya 'Panjenengan asistèn sing migunani.'
- **Instruksi Modhèl (siji saben baris)**: aturan khusus sing pengin AI nututi.
- **Diskripsi Output**: tembung cendhèk sing njelasna asilé, kaya 'ringkesan' utawa 'ditulis maneh'.
- **Temperatur (0.0 → 1.0)**: carané modhèl bakal tumindak; deleng ing ngisor.
- **Takoni basa sasaran**: nambah pilihan basa sasaran nalika cithakan dijalanaké.

Yen istilah téknis **Temperatur** anyar kanggo panjenengan, pikirna kaya ngéné:

- Temperatur **luwih murah** maringi asil sing luwih stabil lan prediktif.
- Temperatur **luwih dhuwur** maringi varian lan kreativitas luwih akeh.

Panjenengan uga bisa nggunakna:

- **`Gawe Cithakan`** kanggo nggawe rancangan anyar saka jlasan cendhèk
- **`Improve prompt`** kanggo mbenakna cithakan sing durung ana
- **`Terjemahake cithakan`** kanggo menterjemahaké isine cithakan

<br/>

> ⚠️ **PERINGATAN**<br/>
> Klik **`Simpen`** sadurunge klik **`Bali menyang Jalanaké`**. Yen bali tanpa nyimpen, owah-owahane bakal ilang.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Uji Cithakan sadurung digunakaké

Panel uji coba ing sisih tengen ngidini panjenengan nyoba cithakan kanthi teks conto sadurung digunakaké ing panggunaan saben dina.

Iki migunani nalika:

- nggawé cithakan anyar
- mbandhingaké loro vèrsi cithakan
- priksa nada, dawa, utawa format asil

<br/>

<a id="manage-saved-prompts"></a>
### Atur Cithakan Sing Disimpen

Kanggo ngatur cithakan sing disimpen ing sak panggonan, buka [**Setélan** > **Cithakan Transformasi**](#transform-prompts).

Ing kana panjenengan bisa:

- ndaftar lan mbusak cithakan
- èkspor cithakan dadi **JSON**, **CSV**, utawa **XLSX**
- impor cithakan saka file

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>

## Dashboard

Gunakake **Dashboard** kanggo ndeleng sapa akeh nggunakake aplikasi lan biayane (kanggo model sing dibayar).

![Ringkesan Dashboard](../images/screenshots/jv/dashboard-summary.png)


<br/>

> ℹ️ **CATETAN**<br/>
> Yen mung nggunakake model gratis, grafik sing ana gandhenge biaya bakal kosong. 

<br/>

<a id="filter-the-data"></a>
### Saring data

Gunakake tombol saring ing ndhuwur kanggo ngowahi wates wektu.

![Saringan Dashboard](../images/screenshots/jv/dashboard-filter.png)

<br/>

> ℹ️ **CATETAN**<br/>
> Saringan **Pangguna** mung katon kanggo administrator ing versi web. Pangguna biasa ora bakal weruh saringan iki, lan ora kasedhiya ing aplikasi desktop.

<br/>

<a id="dashboard-tabs"></a>
### Tab Dashboard

- **Ringkesan** menehi gambaran umum babagan panggunaan lan biaya.
- **Dhéwékané Panggunaan** mecaki aktivitas miturut basa terjemahan, modus nulis maneh, lan prompt transformasi.
- **Dhéwékané Model** nuduhake model apa sing digunakake lan biayane.
- **Dhéwékané Dina** nuduhake total saben dina.
- **Kabeh Pemanggilan** nuduhake riwayat pemanggilan kanthi lengkap lan ngidini ekspor.

<br/>

<a id="export-data"></a>
### Ekspor data

Tabel dashboard bisa ngekspor data ing:

- **JSON**
- **CSV**
- **XLSX**

Iki migunani yen pengin nimbang aktivitas njaban aplikasi utawa barengake laporan.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Hapus cathetan sing disimpen kanggo model

Ing **Dhéwékané Model** utawa **Kabeh Pemanggilan**, sampeyan bisa mbusak cathetan sing disimpen kanggo model kanthi klik ikon "tempuran sampah".

> ⚠️ **PANGECERAN**<br/>
> Mbusak cathetan sing disimpen ora bisa dibatalake. Gunakake mung yen yakin ora butuh riwayat kuwi maneh.

Kanggo mbusak kabeh data utawa mbatesi cathetan adhedhasar umure, menyang [**Setelan** > **Pelacakan Biaya**](#cost-tracking). Kana sampeyan bakal nemokake pilihan kanggo mbusak kabeh data sing disimpen utawa mung data sing umure luwih tuwa tinimbang tanggal tartamtu.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Riwayat

Klik **Riwayat** kanggo ndeleng riwayat tumindak sampeyan ing **Transrewrt**, kalebu input lan output saben operasi.

![Kaca Riwayat](../images/screenshots/jv/history.png)

<br/>

<a id="filter-the-history"></a>
### Saring riwayat

**Riwayat** nggunakake saringan sing padha karo kaca **Dashboard**. Gunakake kanggo milih wates wektu.

![Saringan Dashboard](../images/screenshots/jv/dashboard-filter.png)

<br/>

> ℹ️ **CATETAN**<br/>
> Saringan **Pangguna** mung katon kanggo administrator ing versi web. Pangguna biasa ora bakal weruh saringan iki, lan ora kasedhiya ing aplikasi desktop.

<br/>

<a id="export-history-data"></a>
### Ekspor data riwayat

Kaca riwayat bisa ngekspor data sing wis disaring ing:

- **JSON**
- **CSV**
- **XLSX**

Iki migunani yen pengin nimbang aktivitas njaban aplikasi utawa barengake laporan.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Setelan

Bukak **Setelan** saka sisi pinggir kanggo nyesuaikan cara aplikasi kepribaden.

Tab sing kasedhiya gumantung marang platform lan peran sampeyan:

  | Tab               | Desktop | Web (admin) | Web (pangguna biasa) |
  |-------------------|:-------:|:-----------:|:------------------:|
  | Setelan Umum      |   ya    |     ya      |        ya          |
  | Model             |   ya    |     ya      |        ya          |
  | Basa              |   ya    |     ya      |        ya          |
  | Pelacakan Biaya   |   ya    |     ya      |         —          |
  | Prompt Transformasi |   ya    |     ya      |        ya          |
  | Pangguna          |    —    |     ya      |         —          |
  | Konfigurasi API   |   ya    |     ya      |         —          |
  | Ngenani           |   ya    |     ya      |        ya          |

<br/>

> ℹ️ **CATETAN**<br/>
> Ing versi web, saben pangguna nduweni konfigurasi dhéwé. Setelan kaya model sing dipilih, basa, pilihan umum, lan prompt transformasi disimpen saben pangguna. Owah-owahan sing sampeyan gawe ora mangaruhi pangguna liyane.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Setelan Umum

Gunakake **Setelan Umum** kanggo ngontrol perilaku ngetik, nemtokake apa rincian eksekusi disimpen kanggo **Riwayat**, lan tampilan.

**Perilaku**

- **Perilaku ENTER** nemtokake apa `Enter` bakal mlakuake tugas utawa nambah baris anyar.
- **Terjemah otomatis nalika nempel** miwiti terjemahan sawise sampeyan nempelake teks.
- **Nyalin hasil otomatis menyang clipboard** nyalin hasil sing sukses sacara otomatis.
- **Terjemahan langsung (saat ngetik)** menerjemahake samasa sampeyan ngetik.
- **Batas wektu (ms)** nemtokake wektu tunggu kanggo terjemahan langsung.

**Riwayat**

- **Simpen riwayat eksekusi** ngontrol apa saben terjemahan, panulisan maneh, lan transformasi nyimpen **teks input lan output** kanggo tampilan [**Riwayat**](#history) ing sisih. Mateni fitur iki bakal njaluk konfirmasi; yen sampeyan konfirmasi, teks riwayat sing disimpen bakal dihapus saka database.
- **Hapus data riwayat** ngidinake sampeyan ngilangi teks sing disimpen berdasar umur (kayata sing umure luwih saka sawetara wulan, utawa **kabeh data (kosongke)**) nggunakake **Hapus data**. Iki mung mengaruhi teks eksekusi sing disimpen kanggo tampilan **Riwayat**; iki **ora** ngilangi total biaya utawa panggunaan. Kanggo ngilangi utawa ngurangi data **biaya**, gunakake [**Setelan** > **Lacak Biaya**](#cost-tracking).

**Tampilan**

- **Jumlah digit desimal biaya** ngganti cara nggambarake angka desimal biaya.
- **Khusus web:** **tampilake margin ing sakeliling aplikasi** nambahake spasi tambahan ing sakeliling antarmuka.
- **Famili Font** ngganti font tulisan ing panel teks.
- **Ukuran** ngganti ukuran font.

<br/>

<a id="models"></a>
### Model

Gunakake **Setelan** > **Model** kanggo milih model sing arep ditampilake ing bilah alat.

![Tab Model Setelan](../images/screenshots/jv/settings-models.png)

Kaca iki duwe rong dhaptar:

- **Model sing Tersedia** ing sisih kiwa
- **Model sing Dipilih** ing sisih tengen

Kontrol sing migunani kalebu:

- **Golek model...** kanggo nemokake model miturut jeneng
- **Chip Provider** kanggo mamerake dhaptar karo siji mesin (OpenRouter, OpenAI, Ollama, …)
- **Mung Gratis** kanggo mamerake mung model gratis
- **Refresh** kanggo mbukak maneh dhaptar
- **Bukak Kabeh** lan **Tutup Kabeh** nalika sampeyan ngurutake miturut provider

ID model kalebu awalan provider (kayata `openrouter/…` vs `openai/…`). Badge kaya **OpenAI (OpenRouter)** vs **OpenAI (langsung)** nuduhake carane lalu lintas dikirim.

Tindakan:

 - Kanggo nambah model, klik **Tambah** utawa ing endi wae ing entri.

 - Kanggo ngilangi model, klik **X** ing sisih entri ing **Model Sing Dipilih** utawa **Dipilih** ing entri ing Model Yang Tersedia.

 - Kanggo mbusak dhaptar, klik **Batal Pilih Kabeh**. Model gratis sing dibutuhake tetep ing dhaptar.

<br/>

> ℹ️ **CATETAN**<br/>
> Yen sampeyan ora arep nambah kredit menyang OpenRouter langsung, miwit kanthi ngaktifake **Mung Gratis** lan milih model gratis (ora perlu kartu kredit). Sampeyan uga bisa nggunakake Ollama kanggo mlakuake model lokal tanpa kunci API apa wae.

<br/>

<a id="languages"></a>
### Basa

Gunakake **Setelan** > **Basa** kanggo ngatur dhaptar basa sing digunakake ing aplikasi.

- **Basa utama** dikancing ing pucuk dhaptar basa ing **Terjemahan** lan **Transformasi**.
- **Basa khusus** ngidinake sampeyan nambah basa sing ora kasebut ing dhaptar bawaan.

Yen sampeyan nambah basa khusus, basa iku bakal ditampilake ing pamilah basa bebarengan karo pilihan bawaan.

<br/>

<a id="cost-tracking"></a>
### Lacak Biaya

Gunakake **Setelan** > **Lacak Biaya** kanggo ngatur informasi biaya.

- **Biaya Total** nuduhake total sing lagi mlaku.
- **Salin Nilai** nyalin total menyang clipboard.
- **Setel Ulang Biaya** mbalekake total sing disimpen dadi nol.
- **Sinkronake karo panggunaan kunci API** ngeset total supaya cocog karo panggunaan sing dilaporake dening akun OpenRouter sampeyan (khusus OpenRouter).
- **Panggunaan Kunci API** nuduhake rincian panggunaan OpenRouter, yen ana.
- **Hapus data biaya** mbusak kabeh data, utawa mung entri sing umure luwih saka tanggal sing dipilih.

**Lacak biaya:** Nalika sampeyan nggunakake model OpenRouter, aplikasi nuduhake panggunaan lan pengeluaran nyata sampeyan adhedhasar data saka OpenRouter. Kanggo kabeh provider liyane, aplikasi ngira-ngira biaya nggunakake rega sing diterbitake dening OpenRouter, yen rega ora ana, taksirane bisa nol.

<br/>

> ℹ️ **CATETAN**<br/>
> **Saben angka biaya mung taksiran kanggo referensi sampeyan dhewe, dudu panyatahan tagihan resmi.**

<br/>

> ⚠️ **PERINGATAN**<br/>
> Panghapusan data ora bisa dibatalake. Sadurunge mbusak, priksa manawa sampeyan wis nggawe cadangan data utawa ngekspor liwat [**Dasbor** > **Kabeh Panggilan**](#dashboard-tabs), yen ora, data bakal ilang permanen. <br/> 
> Kabeh riwayat sing ana gandhengane karo saben entri panggilan API uga bakal dihapus.

<br/>

<a id="transform-prompts"></a>

### Ngowahi Prompt

Gunakake **Setelan** > **Ngowahi Prompt** kanggo ngatur prompt kanthi massal.

Sampeyan bisa:

- ndeleng maneh prompt sing wis disimpen
- ngapus prompt
- ngimpor prompt saka file
- nyebarake prompt kanggo cadangan utawa dibagi

<br/>

<a id="users"></a>
### Pangguna

**Web: mung administrator**

Gunakake **Pangguna** kanggo ngatur akun pangguna ing versi web. Sampeyan bisa nambah pangguna, ngupdate rinciane, ngreset sandi, lan ngapus akun.

<br/>

<a id="api-config"></a>
### Setelan API

Panyedhiya sing didhukung kalebu: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, lan **Ollama** (model lokal liwat URL dhasar). Sampeyan mung perlu ngonfigurasi panyedhiya sing digunakake.

**Aplikasi web: mung administrator**

Kunci API dikonfigurasi liwat variabel lingkungan sistem utawa Docker — ora dimasukkan ing antarmuka web. Kaca iki nuduhake panyedhiya sing duwe kunci dikonfigurasi lan ngidini sampeyan nguji saben liwat nglikir tombol **`Uji`**.

<br/>

> ℹ️ **CATETAN**<br/>
> Kanggo ngganti kunci API, owahi variabel lingkungan ing konfigurasi sistem utawa Docker lan restart server utawa wadah.

<br/>

**Aplikasi desktop**

Gunakake **Setelan API** kanggo nyimpen kunci API kanggo saben panyedhiya sing digunakake. Kanggo Ollama, ketik **URL dhasar** nanging ora kunci API.

<br/>

> 💡 **Tip** <br/>
> Yen sampeyan ora pengin nggunakake kunci API utawa mbayar panggunaan, sampeyan bisa [ndownload Ollama](https://ollama.com) lan mlakuake model sacara lokal ing komputer gratis. Utawa, sampeyan bisa gawe akun OpenRouter gratis (ora perlu kartu kredit) kanggo nggunakake model gratis ingkang ana.

- Tambahake mung panyedhiya sing dibutuhake. Ing **Setelan** > **Model**, saben id model diwiwiti karo panyedhiya (contone `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Kanggo nambah kunci API, ketik nilaine ing kotak teks lan klik **`Simpen`**. Kanggo ngganti kunci sing ana, klik **`Sunting`**. Kanggo mriksa apa kunci bisa digunakake, klik **`Uji`**.

<br/>

> ℹ️ **CATETAN**<br/>
> Sampeyan ora bisa ndeleng nilai kunci API saiki. Sampeyan mung bisa nggantine nggunakake tombol **`Sunting`**.
> Kunci API disimpen sacara dienkripsi ing file konfigurasi.

<br/>

Kanggo langkah rinci babagan entuk kunci OpenRouter, deleng [Carane entuk kunci API](#how-to-get-an-api-key-desktop-app) ing ndhuwur.

<br/>

<a id="about"></a>
### Mengenai

Tab **Mengenai** nuduhake:

- jeneng aplikasi
- nomor versi
- tanggal dibangun
- tautan menyang repositori proyek

<br/><br/>

<a id="common-issues"></a>
## Masalah Umum

Yen ana sing ora diarani, priksa poin-poin ing ngisor iki dhisik.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikasi ora bisa ngeterjemahake, nulis maneh, utawa ngowahi teks

Priksa:

- sampeyan wis milih model ing bilah alat
- paling ora siji model katon ing [**Setelan** > **Model**](#models)
- setelan API sampeyan bisa digunakake

Yen sampeyan nggunakake aplikasi desktop:

1. Buka [**Setelan** > **Setelan API**](#api-config).
2. Priksa apa paling ora siji kunci API wis disimpen.
3. Klik **Uji** ing sisih panyedhiya kanggo konfirmasi kunci bisa digunakake.

<br/>

<a id="the-model-list-is-empty"></a>
### Dhaftar model kosong

Buka [**Setelan** > **Model**](#models) lan klik **Segarake**.

Yen perlu:

- goleki model
- aktifake **Mung Gratis**
- tambahake siji utawa luwih model menyang **Model Dipilih**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Asilipun terlalu alon utawa larang

Coba salah siji utawa luwih cara ing ngisor iki:

- pilih model liya
- gunakake input pendek
- mateni **Terjemahan Real-time (saat ngetik)** ing [**Setelan** > **Setelan Umum**](#general-settings)
- gunakake model gratis kanggo tugas dhasar (deleng [Model](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### Antarmukane nganggo basa sing salah

Klik ikon globe ing [bilah alat](#toolbar) lan pilih **Basa Antarmuka** pilihan sampeyan.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Teksipun terlalu cilik utawa angel dibaca

Buka [**Setelan** > **Setelan Umum**](#general-settings) lan owahi:

- **Kulawarga Huruf**
- **Ukuran**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Grafik dashboard kosong

Iki normal yen:

- sampeyan mung nggunakake **model gratis** (grafik biaya bakal kosong)
- **saringan wektu** sing dipilih ora nutup periode nalika dipanggil — coba **Kabeh** kanggo mriksa

Yen grafik isih kosong sawise milih **Kabeh**, konfirmasi apa ana panggilan katon ing [**Riwayat**](#history) utawa ing tab **Kabeh Panggilan**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Rega nuduhake "ora kasedhiya" utawa rasane salah

Ketika nggunakake model liwat **OpenRouter**, aplikasi nuduhake rega panganggoan nyata sing dilaporake dening OpenRouter.

Kanggo **panyedhiya liya** (OpenAI langsung, Anthropic langsung, lsp.), rega diira-ira adhedhasar data rega sing diterbitake déning OpenRouter. Yen ora ana rega sing cocog kanggo model tartamtu, rega bakal nuduhake **ora kasedhiya** lan ora diitung ing total panganggoan.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### Total biaya ora cocog karo tagihan panyedhiya kula

Saben angka rega ing aplikasi iki mung **perkiraan kanggo referensi**, dudu panyataan tagihan resmi.

Kanggo nyedhiyakake total rega sing luwih cedhak karo panganggoan OpenRouter nyata, bukak [**Setelan** > **Pelacakan Biaya**](#cost-tracking) lan klik **Sinkronake karo panganggoan kunci API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### Kaca Riwayat ilang saka bilah sisih

Pilihan **nyimpen riwayat eksekusi** bisa uga mati. Buka [**Setelan** > **Setelan Umum**](#general-settings) lan aktifake. Catheten yen ngaktifake pilihan iki ora bakal ngembalike data riwayat sing tau dihapus.

<br/>

<a id="web-app-session-expired"></a>
### Aplikasi web: dialihake menyang kaca login kanthi ora dikarepake

Sesi panjenengan bisa uga wis kadaluarwewakilan. Login maneh. Yen kasebut kedadeyan kanthi rutin, priksa konfigurasi server kanggo setelan umur sesi.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### Dashboard ora nuduhake data kanggo pangguna liya (web)

Mung **administrator** sing bisa ndeleng data kabeh pangguna nganggo filter **Pangguna**. Pangguna biasa mung weruh aktivitas dhewe, kaya dirancang.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Aku ngowahi prompt lan kejiret owah-owahane

Nalika nyunting prompt, tetep klik **Simpen** sadurunge klik **Bali menyang Jalanake**.

<br/><br/>

<a id="quick-tips"></a>
## Piranti Kilat

- Miwiti karo [**Terjemahake**](#translate) kanggo mastekake setelan panjenengan wis siap sakdurunge mlebu [**Nulis Maneh**](#rewrite) utawa [**Ngowahi**](#transform).
- Gunakake [**Nulis Maneh**](#rewrite) kanggo perbaikan ukara saben dina.
- Gunakake [**Ngowahi**](#transform) nalika panjenengan butuh alur kerja sing bisa diulang kanggo tugas tartamtu.
- Gunakake [**Dasbor**](#dashboard) yen panjenengan pengin ngawasi panggunaan lan rega.
- Gunakake [**Riwayat**](#history) kanggo nimbang operasi lawas lan teks input/output lengkap.
- Ekspor prompt kanthi rutin yen panjenengan nggawe pustaka prompt sing pengin disimpen karo aman (deleng [Ngowahi Prompt](#transform-prompts)) utawa yen panjenengan pengin barengake karo liyane.

<br/><br/>

<a id="disclaimer"></a>
## Penafian

Jeneng lan ikon produk duwe hak milik para pemiliké dhéwé lan mung dienggo minangka identifikasi. Aplikasi iki ora kalebu afiliasi utawa disetujui déning merk sing disebutake.

<br/><br/>

<a id="license"></a>
## Lisensi

Hak Cipta © 2026 Waldemar Scudeller Jr.

[Lisensi Apache 2.0](LICENSE)