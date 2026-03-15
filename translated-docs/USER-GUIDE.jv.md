---
translated_at: "2026-03-15T22:16:45.955Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Panduan Nggunakake Transrewrt

<br />

<a id="introduction"></a>
## Pengantar

Transrewrt mbantu sampeyan nggunakake teks ing telung cara utama:

- **Terjemah** - ngowahi teks saka basa siji menyang basa liyane.
- **Nulis Ulang** - ngowahi gaya teks, kayata luwih jelas, luwih cendhek, utawa luwih resmi.
- **Transformasi** - ngrampungake teks nggunakake parenteh AI sing dicekleng nuli diarani prompt.

<br />

Panduan iki nerangake carane nggunakake applikasi sawise dipasang lan dijalankan. Kanggo langkah-langkah instalasi, delok [README](../README.md) utama.

<br />

> ℹ️ **CATETAN**<br/>
> Transrewrt disedhiakake minangka aplikasi desktop kanggo Windows lan Linux, lan minangka aplikasi web sing di-host dhewe. Pandhu iki nfokusake panggunaan sapaa-hari-piye. Yen ana sing mung keliar kanggo sawijining versi, mesthi dil marking.

<small>**Waca ing basa liyane:** [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Isine Kabeh** 

- [Sakdurunge_miwiti](#sakdurunge-miwiti)
  - [Kepiye njaluk API key (aplikasi desktop)](#kepiye-njaluk-api-key-aplikasi-desktop)
- [Miwi](#miwi)
- [Bagean utama jendela](#bagean-utama-jendela)
  - [Sidebar](#sidebar)
  - [Toolbar](#toolbar)
  - [Panel input lan output](#panel-input-lan-output)
- [Terjemah](#terjemah)
  - [Terjemah teks](#terjemah-teks)
  - [Pilihan basa](#pilihan-basa)
  - [Setelan terjemah sing migunani](#setelan-terjemah-sing-migunani)
  - [Shortcut keyboard](#shortcut-keyboard)
- [Nulis Ulang](#nulis-ulang)
  - [Nulis ulang teks](#nulis-ulang-teks)
- [Transformasi](#transformasi)
  - [Jalnake prompt sing ana](#jalnake-prompt-sing-ana)
  - [Yen sampeyan durung entek prompt](#yen-sampeyan-durung-entek-prompt)
  - [Nggawe prompt kanthi cepet](#nggawe-prompt-kanthi-cepet)
  - [Sunting prompt](#sunting-prompt)
  - [Ngasih prompt sakdurunge dienggo](#ngasih-prompt-sakdurunge-dienggo)
  - [Naté prompt sing disimpen](#naté-prompt-sing-disimpen)
- [Dashboard](#dashboard)
  - [Saring data](#saring-data)
  - [Tab dashboard](#tab-dashboard)
  - [Ekspor data](#ekspor-data)
  - [Mbusak catetan stored kanggo model](#mbusak-catetan-stored-kanggo-model)
- [Setelan](#setelan)
  - [Setelan umum](#setelan-umum)
  - [Model](#model)
  - [Basa](#basa)
  - [N Lacak biaya](#n-lacak-biaya)
  - [Prompt transformasi](#prompt-transformasi)
  - [Panganggo](#panganggo)
  - [Konfigurasi API](#konfigurasi-api)
  - [Kabar](#kabar)
- [Masalah umum](#masalah-umum)
  - [Aplikasi kancing ora malih terjemah, nulis ulang, utawa transformasi teks](#aplikasi-kancing-ora-malih-terjemah-nulis-ulang-utawa-transformasi-teks)
  - [Daftar model kothong](#daftar-model-kothong)
  - [Hasile alon utawa larang banget](#hasile-alon-utawa-larang-banget)
  - [Antaramuka salah basa](#antaramuka-salah-basa)
  - [Teks too cilik utawa angel dibaca](#teks-too-cilik-utawa-ngel-dibaca)
  - [Aku ngganti prompt lan ilang edits](#aku-ngganti-prompt-lan-ilang-edits)
- [Tip Cepet](#tip-cepet)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="sakdurunge-miwiti"></a>

## Sadurunge Mawai

Kanggo nggunakake Transrewrt, sampeyan butuh akses menyang layanan AI liwat OpenRouter.

Sampeyan ora perlu milih model sing dibayar sadurunge wiwit. Aplikasi Louise ngemot model **gratis** sing built-in, mula kanggo penggunaan normal iki cukup kanggo wiwit nerjemahake, nulis uli, lan owah-owah teks.

Ing basa sing gampang:

- **Model** yaiku mesin AI sing nglakoni lukah.
- **Kunci API** yaiku kredensial akses pribadi sampeyan kanggo layanan kasebut.

Menawi sampeyan nggunakake **aplikasi desktop**, sampeyan butuh kunci API. Kanggo langkah-langkah sing rinci, delok [Cara nggoleki kunci API](#how-to-get-an-api-key-desktop-app) ing ngisor iki. Cukup cerak: nggawé akun ing [OpenRouter](https://openrouter.ai), bukak kaca [Kunci](https://openrouter.ai/keys), nggawé kunci anyar, lan temenake marang [**Setelan** > **Konfigurasi API**](#api-config) ing Transrewrt.

Menawi sampeyan nggunakake **versi web**, pemilik server biasane nge-set iki kanggo sampeyan, mulane sampeyan ora lumrah butih ngInput kunci API dhewe.

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### Cara nggoleki kunci API (aplikasi desktop)

Menawi sampeyan nggunakake aplikasi desktop, upgrade iki:

1. Tumut ing [OpenRouter](https://openrouter.ai) ing browser web sampeyan.
2. Nggawé akun utawa mlebu.
3. Bukak kaca [Kunci](https://openrouter.ai/keys).
4. Klik tombol kanggo nggawé kunci API anyar.
5. Wenehi jeneng kanggo kunci supaya sampeyan bisa ngerteni kuncing.
6. Salin kunci API anyar.
7. Mbalik marang Transrewrt lan bukak **Setelan** > **Konfigurasi API**.
8. Temenake kunci marang **Kunci API OpenRouter**.
9. Klik **Coba Konfigurasi API** kanggo mamasthekake yen works.

> ℹ️ **CATETAN**<br/>
> Sampeyan bisa wiwit dengan rute gratis OpenRouter utawa models gratis liyane sing ana. Ing kasus kasus, iku cukup kanggo wiwit nggunakake Transrewrt tanpa milih model sing dibayar.

<br /><br />

<a id="getting-started"></a>
## Miwiti

Menawa iki pisanan sampeyan nggunakake Transrewrt, upgrade iki ing urutan iki:

1. Bukak aplikasi.
2. Pilih **Basa Antarmuka** saka ikon globe menawa dibutuhake.
3. Menawi sampeyan ing **aplikasi desktop**, bukak [**Setelan** > **Konfigurasi API**](#api-config), temenake kunci API OpenRouter sampeyan, lan klik **Coba Konfigurasi API**.
4. Bukak [**Setelan** > **Model**](#models) lan tambahake siji utawa luwih models marang **Model sing Dipilih**.
5. Bukak [**Setelan** > **Basa**](#languages) lan pilih **Basa Pilihan** menawa sampeyan pengin basa sing paling akses muncul pisan.
6. Menyang **Translate** lan lakuake terjemahan sederhana kanggo ngketheuake kabeh lagi cara.
7. Sak wise iki works, coba **Rewrite** lan banjure **Transform**.

Urutan iki pentene. Mbandelaka masalah umum pisanan: nyoba nglakoni tugas sak before aplikasi duwe koneksi API sing bekerja utawa model sing dipilih.

<br /><br />

<a id="main-parts-of-the-window"></a>
## Bagian-bagian utama jendela

Aplikasi Louise dibagi dadi telung area utama:

- **Bar pinggir** ing kiwa.
- **Toolbar** ing ndhuwur.
- **Area kerja** ing tengah.

<br />

<a id="sidebar"></a>
### Sidebar

Gunaake bar pinggir kanggo pindah-pindah ing aplikasi:

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/jv/sidebar.png" alt="Bar Pinggir Aplikasi" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Translate</strong> mbukak ruang kerja terjemahan.</li>
        <li><strong>Rewrite</strong> mbukak ruang kerja nulis uli.</li>
        <li><strong>Transform</strong> mbukak ruang kerja prompt istimewa.</li>
        <li><strong>Dashboard</strong> nedahke informasi panggunaan lan biaya.</li>
        <li><strong>Settings</strong> mbukak panel setelan.</li>
        <li><strong>User</strong> nedahke jeneng panganggo sing mlebu (web wae).</li>
      </ul>
      <br />
      <p>Sampeyan uga bisa dhasarake bar pinggir kanggo nambahake lampihipun ngilik ikon ing side logo aplikasi.</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### Toolbar

Toolbar owah-owahan Setitik gumantung ing endi sampeyan ing aplikasi.

- Ing kiwa, nedahke jeneng kaca saiki.
- Ing tengen, nedahke **pemilih model** lan kontrol **Basa Antarmuka**.

**Pemilih model** ngidini sampeyan ngpilih mesin AI kanggo tugas saiki.

  ![Pemilih Model](../images/screenshots/jv/model-selector.png)

> ℹ️ **CATETAN**<br/>
> Ana model gratis sing bisa mandheg kerja sawetara wektu menawa ora bisa diakses utawa wis tekan batas panggunaan. Menawa iki kedadean, aplikasi bakal mbusak model kasebut saka daftar sampeyan otomatis.


**Ikon globe + kode basa** ngowahi basa antarmuka aplikasi, contone menu lan tombol. Ora **ngowahi** basa terjemahan sing digunakake ing **Translate**.

  ![Pemilih Basa Antarmuka](../images/screenshots/jv/language-selector.png)

<br />

<a id="input-and-output-panels"></a>
### Panel Input lan Output

### Panel Input lan Output

Umume, workspace nggunakaké panel **Input** ing kaping lan panel **Output** ing pangenan.

Panel **Input** nampilaké:

- Jumlah karakter
- Jumlah tembung
- Jumlah paragraph

Panel **Output** bisa nampilaké:

- Pirang dawa wektuné karga
- Biaya kanggo karga kuwi
- Biaya total kang Sampeyan enték
- **TPS** (tokens per second), sing dadi ukuran kecepatan sederhana
- Jumlah karakter, tembung, lan paragraph
- Model sing digunakaké

Yen sampeyan pengin ngerti istilah teknis:

- **Token** tegese potongan teks cilik. Sampeyan bisa ng赣ini dadi bagean saka tembung utawa tembung cendhek.
- **TPS** tegese pirang potongan teks kuwi sing diproses model saben detiké.

<br /><br />

<a id="translate"></a>
## Translate

Guna **Translate** yen sampeyan pengin ngganti teks saka sawijining basa menyang basa liyane.

![Translate workspace](../images/screenshots/jv/translate.png)

<br />

<a id="translate-text"></a>
### Ngganti teks

1. Buka **Translate**.
2. Pilih basa ing **Dawané** (From).
3. Pilih basa ing **Mlebu** (To).
4. Pilih model ing toolbar.
5. Ketik utawa paste teks ing **Input**.
6. Klik **Translate**.
7. Woco hasilan ing **Output**.
8. Nggunaaké tombol copy yen pengin nyalin hasilan.

<br />

<a id="language-selection"></a>
### Seleksi basa

- **From** bisa basa tartamtu utawa **Detect Language**.
- **To** basa sing dikarepaké hasilé.

Basa **Top languages** sing dipilih bakal katon ing pucuk daftar. Sampeyan bisa nge-set dhisènt ing [**Settings** > **Languages**](#languages).

<br />

<a id="helpful-translation-settings"></a>
### Setelan terjemahan sing migunani

Ing [**Settings** > **General Settings**](#general-settings), sampeyan bisa ngganti carané terjemahan:

- **Auto-translate on paste** nglakukaké terjemahan straight sawisé paste teks.
- **Auto-copy result to clipboard** otomatis nyalin hasil sawisé sukses.
- **Real-time translation (while typing)** nglakukaké terjemahan nalika Sampeyan ngetik.
- **Timeout (ms)** ngatur pirang lama app ngentèni sakéné nglakukaké terjemahan real-time.

<br />

<a id="keyboard-shortcuts"></a>
### Pinten keyboard

Ing [**Settings** > **General Settings**](#general-settings), **Behaviour for ENTER** ngatur sing kasil tekan Enter:

- **Enter** bisa nglakukaké karga lan **Shift+Enter** bisa nambahi baris anyar.
- Utawa app nglakoni kebalikane.

Pinten tekan saiki katon uga ing tombol **Translate**.

<br /><br />

<a id="rewrite"></a>
## Rewrite

Guna **Rewrite** yen pengin ng optimalake wacana tanpa ngganti teges pokok.

![Rewrite workspace](../images/screenshots/jv/rewrite.png)

Iki migunani kanggo:

- mbeneraké ejaan lan tata basa
- dadi wacana sing jelas
- dadi wacana sing luwih formal utawa luwih informal
## nggotong-gotong utawa nggedhek-gedhekake teks
- dadi wacana sing katon luwih teknis

<br />

<a id="rewrite-text"></a>
### Nulis ulang teks

1. Buka **Rewrite**.
2. Pilih **Mode**.
3. Pilih model ing toolbar.
4. Ketik utawa paste teks ing **Input**.
5. Klik **Rewrite**.
6. Woco hasilan ing **Output**.

Prilkhu kanthi tombol Enter sing diarani ing [**Translate**](#keyboard-shortcuts) uga laku ing kéné.

<br /><br />

<a id="transform"></a>
## Transform

Guna **Transform** yen pengin AI nglakoni instruksi custom.

![Transform workspace](../images/screenshots/jv/transform.png)

Iki èlmu paling fleksibel ing app. Sampeyan bisa nggunakaké kanggo karga kaya:

## mbrasusta catetan
- ngowahi teks kasar dadi email sing apik
- ngambèl poin kunci
- ngowahi teks menyang format tartamtu

<br />

<a id="run-an-existing-prompt"></a>
### Njaluk prompt sing wis ana

1. Buka **Transform**.
2. Pilih prompt saka daftar prompt.
3. Yen kotak **Target** basa katon, pilih basa yen pengin ana.
4. Ketik utawa paste teks ing **Input**.
5. Klik **Transform**.
6. Woco hasilan ing **Output**.

<br />

<a id="if-you-have-no-prompts-yet"></a>
### Yen prompt Sampeyan kosong

Yen daftar prompt kosong, klik **Load sample prompts**. Iki nambah miseka conto kanggo miwiti cepet.

> ℹ️ **NOTE**<br/>
> Prompt conto disedhiya ing basa Inggris. Sawisé dimuat, sampeyan bisa nyunting prompt lan nggunaaké **Translate prompt** kanggo nglokalken prompt basal liyané.

<br />

<a id="create-a-prompt-quickly"></a>

### Nggawe prompt kanthi cepet

Cara paling cepet nggawe prompt yaiku:

1. Klik **Prompt anyar**.
2. Klik **Nggawe prompt**.
3. J毛笔aken apa sing karepake prompt kuwi nindakake.
4. Pilih model.
5. Apl ngatur draft kanggo kowe.
6. Delih draft lan klik **Simpen**.

![Nggawe prompt](../images/screenshots/jv/transform-generate.png)


<br />

### Nyunting prompt

Nalika nggawe utawa nyunting prompt, editor katon nang kiwa lan area panggihan katon nang tengen.

![Editor prompt Transform](../images/screenshots/jv/transform-prompt-edit.png)

Lapangan-lapangan utamane:

- **Jeneng prompt**: jeneng sing katon ing daftar prompt.
- **Panduan prompt (opsional)**: petunjukcek sing katon marang panjaluk nalika njaluk prompt.
- **Peran Model**: peran umum sing diwenehake marang AI, contone 'Kowe asisten sing mbantu.'
- **Instruksi Model (siji pep carpenter)**: aturan-aturane spesifik sing dadi karepake AI.
- **Katrangan output**: tembung cekak sing narjana asil, contone 'ringkasan' utawa 'rewrite'.
- **Suhu (0.0 → 1.0)**: penggeser kreativitas.
- **Panjaluk basa tujuan**: nambahne pilihane basa tujuan nalika prompt dijalani.

Menawa istilah teknis **Suhu** anyar kanggo kowe, simpen kayaiki:

- **Suhu** sing **lengas** asil sing lurus lan bisa diprediksi.
- **Suhu** sing **bandhog** asil sing variety lan kreatif.

Kowe uga bisa nggunakake:

- **`Nggawe prompt`** kanggo nggawe draft anyar saka katrangan sederhana
- **`Nyariki prompt`** kanggo ndandani prompt sing ana
- **`Terjemah prompt`** kanggo nerjemahake lapangan prompt

> ⚠️ **WARNING**<br/>
> Klik **`Simpen`** sak durunge klik **`Balik nang Run`**. Menawa balik tanpa nyimpen, owah-owahanmu ilang.

<br />

<a id="test-a-prompt-before-using-it"></a>
### Nguji prompt sak durunge nggunakake

Panel panggihen nang tengen ngidini kowe nyoba prompt karo teks conto sak durunge nggunakake ing kaharusan workman.

Iki migunani nalika:

- kowe nggawe prompt anyar
- kowe nggolongake rong versi prompt
- kowe pengin pariksa nada, panjang, utawa format output

<br />

<a id="manage-saved-prompts"></a>
### Nylidiki prompt sing wis disimpen

Kanggo nylidiki prompt sing wis disimpen ing papan siji, bukak [**Setelan** > **Prompt Transform**](#transform-prompts).

Nang kono kowe bisa:

- nata lan mbusak prompt-prompmu
- ekspor prompt minangka **JSON**, **CSV**, utawa **XLSX**
- inporm prompt saka file

<br /><br />

## Dasbor

Gunakake **Dasbor** kanggo ndeleng pira-pira panggunaan app lan moyangane.

![Ringkasan Dasbor](../images/screenshots/jv/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### Nyaring data

Gunakake tombol filter nang duwur kanggo owah rentang wektu.

![Filter Dasbor](../images/screenshots/jv/dashboard-filter.png)

> ℹ️ **NOTE**<br/>
> Ing versi web, administrator uga bisa duwe filter **Panganggo**. Iki ngidini panjalukake antarane **Kabeh panganggo** lan panganggo sorang-sorang.

<br />

<a id="dashboard-tabs"></a>
### Tab Dasbor

- **Ringkasan** maringke gambaran umum panggunaan lan biaya.
- **Dados Panggunaan** nggulungake aktivitas miturut basa terjemahan, mode rewrite, lan prompt transform.
- **Miturut Model** nampilake model-model sing digunakake lan biayane.
- **Miturut Dina** nampilake total saben dina.
- **Kabeh Panggonan** nampilake jujutan panggonan kapenuh lan ngidini ekspor.

<br />

<a id="export-data"></a>
### Ekspor data

Tabel dasbor bisa ekspor data ing:

- **JSON**
- **CSV**
- **XLSX**

Iki migunani menawa kowe pengin review aktivitas njaba app utawa ngbagi laporan.

<br />

<a id="delete-stored-records-for-a-model"></a>
### Mbusak record sing disimpen kanggo model

Ing **Miturut Model** utawa **Kabeh Panggonan**, kowe bisa mbusak record-record sing disimpen kanggo model.

> ⚠️ **WARNING**<br/>
> Mbusak record sing disimpen ora bisa dibatalake. Nggunakake menawa kowe yakin ora butuh riwayat iki.

Kanggo mbusak kabeh data utawa mbusak record miturut umure, menyanga [**Setelan** > **Pelacakan Biaya**](#cost-tracking). Nang kono kowe bakal nemu opsi kanggo mbusak kabeh data sing disimpen utawa mung data sing luwih tuwa saka tanggal tartamtu.

<br /><br />

<a id="settings"></a>
## Setelan

Bukak **Setelan** saka sidebar kanggo nata carane urip app.

Tab-tab sing kasedya bisa beda-beda:

- **Konfigurasi API** mung kasedya ing aplikasi desktop.
- **Panganggo** mung kasedya ing app web, lan mung kanggo administrator.

<br />

<a id="general-settings"></a>

### Setélan Umumé

Anggo **Setélan Umumé** kanggo ngatur tumindak ngetik lan rupan.

**Tumindak**

- **Tindakake ENTER** milih nèpun Enter ngelakoni tugas utawa nyelehake baris anyar.
- **Terjemahan otomatis rika nempel** miwiti terjemahan langsung rika nempel teks.
- **Salin hasil otomatis menyang papan klip** nge-*copy* hasil sing成功 otomatis.
- **Terjemahan wetime (nalika ngetik)** nerjemahake nalika ngetik.
- **Waktu tunggu (ms)** ngorbat wektu ngenteni kanggo terjemahan wetime.

**Rupan**

- **Angka pecahan biaya** ngowahi carané desimal biaya dipézéntah.
- **Kluwarganing Lelisan** ngowahi lélér写下 nanging teks.
- **Ukurane** ngowahi ukuran lélér.
- **Mung Web:** **tampilkan margi theiring aplikasi** nambahke ruang theiring antarmuka.

<br />

<a id="models"></a>
### Model-model

Anggo **Setélan** > **Model** kanggo milih model-model sing katon ing toolbar.

![Tab Model Setélan](../images/screenshots/jv/settings-models.png

Kaca iki duwé daftar loro:

- **Model-model Tersedia** ing kiwa
- **Model-model Dipilih** ing tengen

Kontrol sing migunani kalebu:

- **Goleki model...** kanggo goleki model miturut jeneng
- **Mung Gratis** kanggo nuju tunjuk model gratis mung
- **Anyarkan** kanggo ngDownload manèke daftar
- **Jabar Kabeh** lan **C撺lup Kabeh** rika lagi aturing miturut penyedia

Kanggo nambah model, klik **Tambah**.

Kanggo mbuwang model, klik **X** ing côtéé ne ing **Model-model Dipilih**.

Kanggo mbusak daftar, klik **Ora pilih siji**. Model gratis sing dibutuhake bakal tetep ing daftar.

> ℹ️ **CATETAN**<br/>
> Menawa sampeyan ora arep nambah kredit menyang OpenRouter sakaliké, miwitibling mbusak **Mung Gratis** lan milih model gratis.

<br />

<a id="languages"></a>
### Basa-basa

Anggo **Setélan** > **Basa** kanggo ngatur daftar basa sing digunakake ing aplikasi.

- **Basa_unik** disimpen cedhak ing sawétaning daftar basa ing **Terjemah** lan **Transformasi**.
- **Basa custom** ngijiné sampeyan nambah basa sing ora ana ing daftar bawaan.

Menawa sampeyan nambah basa custom, bisa katon ing pilihan basa bareng karo opsi-opsi bawaan.

<br />

<a id="cost-tracking"></a>
### Ngincer biaya

Anggo **Setélan** > **Ngincer Biaya** kanggo ngatur informasi biaya.

- **Total Biaya** nampilaké total gumeleng.
- **Salin Nilai** nge-*copy* total menyang papan klip.
- **Reset Biaya** nge-reset total sing disimpen dadi nol.
- **Sinkronisasi karo panganggo API key** netepke total padha karo panganggo sing dilaporke dening OpenRouter.
- **Panganggo API Key** nampilaké detail panganggo, yen ana.
- **Busak data biaya** mbusak kabeh data, utawa mung entri-entri sing luwih tuwa tinimbang tanggal sing dipilih.

> ⚠️ **WÉWÉDINÉ**<br/>
> Pangapusan data ora bisa dibatalaken. Sak Before ngapus, pastike backup data utawa ekspor liwat [**Dashboard** > **Kabeh Call**](#dashboard-tabs), aja nganti ilang saklawase.

<br />

<a id="transform-prompts"></a>
### Prompt Transformasi

Anggo **Setélan** > **Prompt Transformasi** kanggo ngatur prompt prompt secara massal.

Sampeyan saged:

- nebéni prompt sing uwis disimpen
- mbusak prompt
- ngimpor prompt saka file
- ngékspor prompt kanggo backup utawa nyebarake

<br />

<a id="users"></a>
### Panganggo

**Mung Web - mung administrator**

Anggo **Panganggo** kanggo ngatur akun panganggo ing versi web. Sampeyan saged nambah panganggo, ngdw/update detailé, ngatur ulang sandhi, lan mbusak akun.

<br />

<a id="api-config"></a>
### Konfigurasi API

**Mung Desktop**

Anggo **Konfigurasi API** kanggo nyambung aplikasi desktop menyang OpenRouter utawa menyang proksi Transrewrt.

- **API Key OpenRouter** papan kanggo nempel kunci sampeyan.
- **URL API** alamat layanan. Tokinggo akademikke default kecuali sampeyan diwenehke sing liya.
- **Gunoake Proksi Transrewrt** nggantung petugas ngliwati layanan proksi tinimbang langsung menyang OpenRouter.
- **Biji Kunci** katon nalika opsi proksi diaktifke.
- **Ngecek Konfigurasi API** nggeh kontröl nèpun setélan saiki李克 working.

Kanggo langkah-langkah detail nggo entuk API key sampeyan, deloken [Cara entuk API key](#cara-entuk-api-key-desktop-app) ing ndhuwur.

> ℹ️ **CATETAN**<br/>
> Menawa sampeyan ora yakin **URL API**, **Gunoake Proksi Transrewrt**, utawa **Biji Kunci** tegese, tidinggo tahan lan nggo setup OpenRouter default. Informasi liyane babagan proksi katon ing [Repositori Proksi Transrewrt](https://github.com/wsj-br/transrewrt-proxy).


<br />

<a id="about"></a>

### Babagan

Tab **Babagan** nuduhake:

- jeneng aplikasi
- nomor versi
- tanggal build
- pranala menyang repositori proyek

<br /><br />

<a id="common-issues"></a>
## Masalah umum

Menawa sawijining perkara ora mlaku kaya sing dikarepake, priksaèlain-titik ingisor pisan.

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### Aplikasi ora bisa nerjemahake, ngramegu, utawa ngowahi teks

Priksa manawa:

- sampeyan wis milih model ing **dharat**
- paling ora siji model katon ing [**Setelan** > **Model**](#models)
- setelan API sampeyan lagi mlaku

Menowe sampeyan nganggo aplikasi desktop:

1. Buak [**Setelan** > **Konfig API**](#api-config).
2. Priksa manawa kunci API sampeyan wis disimpen.
3. Klik **Coba Konfig API**.

<br />

<a id="the-model-list-is-empty"></a>
### Dhaptar model kosong

Buak [**Setelan** > **Model**](#models) lan klik **Anyarkan**.

Menawa dibutuhake:

- goleki model
- piliha **Mung Gratis**
- tambah siji utawa luwih model menyang **Model Sing Dipilih**

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### Hasilé alon banget utawa laras banget

Coba siji utawa luwih saka iki:

- pilih model sing berbeda
- gunakake input sing kurang
- pateni **Terjemahan langsung (nalika ngetik)** ing [**Setelan** > **Setelan Umum**](#general-settings)
- gunakake model gratis kanggo tugas-tugas sederhana (delok [Model](#models))

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### Antarmuka ana ing basa sing salah

Klik ikon bola donya ing [dharat](#toolbar) lan pilih **Basa antarmuka** sing sampeyan选择.

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### Tèksé cilik banget utawa angel dibasa

Buak [**Setelan** > **Setelan Umum**](#general-settings) lan owahi:

- **Keluarga Font**
- **Ukuran**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Aku ngganti prompt lan ilang paninggalan

Nalika ngedit prompt, tansah klik **Simpen** sakdurunge klik **Mbalik Menyang Laku**.

<br /><br />

<a id="quick-tips"></a>
## Tips Cepet

- Wiwit karo [**Terjemah**](#translate) kanggo mastèkakè setelan sampeyan mlaku sakdurunge albo mlaku menyang [**Parafras**](#rewrite) utawa [**Transformasi**](#transform).
- Gunakake [**Parafras**](#rewrite) kanggo panyantepan ukara sadina-dina.
- Gunakake [**Transformasi**](#transform) nalika sampeyan butuh alur kerja sing bisa diulang-ulang kanggo tugas tartamtu.
- Gunakake [**Dashboard**](#dashboard) yen sampeyan pengen ngawasi panggunaan lan biaya.
- Ekspor prompts kanthi teratur yen sampeyan mbangun pustaka prompt sing pengen.disimpen kanthi aman (delok [Transformasi Prompt](#transform-prompts)).

<br /><br />

<a id="disclaimer"></a>
## Penegasan

Jeneng produk lan ikon kuwaning sing duwe lan digunakake mung kanggo tujuan identifikasi. Perangkat lunak iki ora terafiliasi utawa didakwa dening merek sing disebut.

<br /><br />

<a id="license"></a>
## Lisensi

Hak cipta © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)