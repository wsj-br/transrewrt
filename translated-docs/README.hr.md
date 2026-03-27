---
translated_at: "2026-03-26T00:27:13.338Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logo" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Verzija"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licenca: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Alat za obradu teksta snажen umjetnom inteligencijom: prevođenje između jezika, prepisivanje u različitim stilovima i transformacija pomoću prilagođenih upita — koristeći više pružatelja umjetne inteligencije (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI i lokalni Ollama). Radi kao aplikacija za radnu površinu (Electron) ili samo-pohranjena web aplikacija (Docker).

- **Prevođenje** — između desetak jezika, s automatskom detekcijom izvornog jezika
- **Prepisi** — ispravi gramatiku, poboljšaj jasnoću, formalno/neformalno, skrati, proširi, tehnički stil
- **Transformiraj** — prilagođeni AI upiti; stvori i upravljaj upitima, po želji odaberi ciljani jezik za svaki upit
- **Povijest** — potpuna povijest obrade s ulaznim/izlaznim tekstovima, filtriranjem i izvozom
- **Modeli i trošak** — odaberite modele iz bilo kojeg konfiguriranog pružatelja; nadzorna ploča za troškove i korištenje s zapisima, sažecima po modelu/operaciji/danu
- **Sučelje** — višejezično sučelje (30+ jezika, podrška za RTL), fontovi, ...
- **Web način** — podrška za više korisnika s ulogama administratora
- **Radna površina** — Electron aplikacija za Windows i Linux
- **Samo-pohrana** — Docker slika za amd64 i arm64 (spremna za Raspberry Pi)

Nakon instalacije, pogledajte **[Vodič za korisnike](USER-GUIDE.hr.md)** za potpuni prikaz svih značajki.

<small>**Pročitajte na drugim jezicima:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Napomena o prijevodu sučelja i dokumentacije:** Svi jezici sučelja osim izvornog engleskog (UK)
> prijeđeni su pomoću modela umjetne inteligencije; izrazi mogu biti neprecizni ili sadržavati pogreške.

</small>

<br/>

<a id="screenshots"></a>
## Slike zaslona

**Odabir jezika**

![Odabir jezika](../images/screenshots/hr/language-selector.png)

**Prijevod**

![Prijevod](../images/screenshots/hr/translate.png)

**Transformiranje - urednik upita**

![Transformiranje - urednik upita](../images/screenshots/hr/transform-prompt-edit.png)

**Nadzorna ploča**

![Nadzorna ploča za troškove](../images/screenshots/hr/dashboard-summary.png)

**Povijest**

![Povijest](../images/screenshots/hr/history.png)

**Postavke - odabir modela**

![Postavke - odabir modela](../images/screenshots/hr/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Sadržaj

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Brzi početak](#quick-start)
- [Instalacija](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Dobivanje OpenRouter API ključa](#getting-an-openrouter-api-key)
- [Konfiguracija i okolina](#configuration-and-environment)
- [Razvoj i arhitektura](#development-and-architecture)
- [Izdani i oznake](#releases-and-tags)
- [Doprinos](#contributing)
- [Odgovornost](#disclaimer)
- [Licenca](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Brzi početak

**Docker (preporučeno za samostalno hostiranje)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Zamijenite `sk-or-your-key` s vašim [OpenRouter API ključem](https://openrouter.ai/keys) (ili postavite ključeve drugih davatelja usluga; pogledajte [Konfiguracija](#configuration-and-environment)). Otvorite [http://localhost:5000](http://localhost:5000) i promijenite zadano administratorsko lozinku prije nego što izložite uslugu.

<br/>

> ℹ️ **BILJEŠKA**<br/>
> U Dockery, vjerodajnice za LLM postavljaju se kroz varijable okoline poput `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (ne putem web sučelja). Na desktopu (Electron) ključeve konfigurirate putem **Postavke → API**.

<br/>

**Windows**

Preuzmite najnoviju datoteku `Transrewrt Setup x.y.z.exe` s [izdanja](https://github.com/wsj-br/transrewrt/releases), pokrenite instalacijski program, a zatim pokrenite aplikaciju iz izbornika Start ili prečaca na radnoj površini. Unesite svoje API ključeve u **Postavke → API**. Morate konfigurirati barem jednog davatelja usluga; OpenRouter je čest izbor za besplatne modele.

<br/>

**Linux**

Preuzmite `.AppImage` datoteku za svoj procesor s [izdanja](https://github.com/wsj-br/transrewrt/releases) (`x64` za uobičajena računala, `arm64` za mnoge ARM uređaje, uključujući Raspberry Pi 4+), zatim:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Unesite svoje API ključeve u **Postavke → API**. Morate konfigurirati barem jednog davatelja usluga; OpenRouter je čest izbor za besplatne modele.

Na Debian/Ubuntu sustavima možda ćete prvo morati instalirati dodatne ovisnosti:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Detaljnije informacije potražite u [Instalacija → Linux](#linux-electron).

<br/>

> ℹ️ **BILJEŠKA**<br/>
> Trenutačno macOS nije podržan. Transrewrt je dostupan za Windows, Linux i Docker.

<br/>

Kada se aplikacija pokrene, pogledajte [**Vodič za korisnike**](USER-GUIDE.hr.md) kako biste naučili prevoditi, prepisivati i transformirati tekst, upravljati upitima te konfigurirati modele.

<br/><br/>

<a id="installation"></a>
## Instalacija

<a id="windows-electron"></a>
### Windows (Electron)

- Preuzmite najnoviji instalacijski program s [izdanja](https://github.com/wsj-br/transrewrt/releases).
- Pokrenite `.exe` datoteku i slijedite upute instalacijskog programa.
- Prvi pokret: pokrenite aplikaciju iz izbornika Start ili prečaca na radnoj površini.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Preuzmite odgovarajuću `.AppImage` datoteku (`x64` ili `arm64`) s [izdanja](https://github.com/wsj-br/transrewrt/releases).
- Pokrenite: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` na x86_64/amd64, ili upotrijebite naziv datoteke `...-arm64.AppImage` na ARM64.
- Dodatne ovisnosti (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Dodatne informacije potražite u [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Preuzmite sliku: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Postavite barem jedan ključ davatelja usluge putem okolišnih varijabli (npr. `OPENROUTER_API_KEY` za OpenRouter). Prosljedite varijable s `-e` ili kroz `docker compose` / `.env`, kako se tajni ne bi ugradili u sliku.
- Ključevi davatelja usluga **se ne unose** putem web sučelja; poslužitelj ih čita iz okoline.

Primjer - imenovani volumen za trajnost (OpenRouter ključ putem varijable okoline):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opcija   | Opis                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Port     | `5000` (mapirajte s `-p 5000:5000`)                                                                              |
| Volumen  | Montirajte `/app/data` za trajnost postavki i baze podataka                                                         |
| Var. okoline | `PORT`, `CONFIG_PATH`, te ključevi za LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - pogledajte [Konfiguracija](#configuration-and-environment) |

Za izgradnju i pokretanje iz izvornog kôda: `docker compose up --build -d` ili `pnpm docker:up` - pogledajte [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Dobivanje OpenRouter API ključa

Transrewrt podržava više davatelja AI usluga. [OpenRouter](https://openrouter.ai) je popularan izbor jer nudi pristup mnogim modelima putem jednog ključa i uključuje besplatne modele.

1. Registrirajte se ili se prijavite na [openrouter.ai](https://openrouter.ai).
2. Otvorite stranicu [Keys](https://openrouter.ai/keys) i kreirajte novi ključ (dodijelite mu naziv i po želji postavite ograničenje kredita). Možete koristiti besplatne modele bez dodavanja kredita.
3. **Računalo (Electron):** zalijepite ključeve u **Postavke → API**. **Docker:** postavite varijable okruženja kao što je `OPENROUTER_API_KEY` (pogledajte [Brzi početak](#quick-start)).

Ne koristite OpenRouter-ov model **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) za prevođenje, prepisivanje ili transformaciju: on vraća JSON pakete zahtjeva, a ne gotov tekst za te zadatke. Više pogledajte u [Postavke → Modeli](USER-GUIDE.hr.md#models) u Priručniku za korisnike.

Također možete koristiti i druge davatelje usluga (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ili lokalno pokretati modele s [Ollama](https://ollama.com). Pogledajte [Konfiguracija](#configuration-and-environment) za potpuni popis podržanih davatelja usluga i varijabli okruženja.

> ⚠️ **UPOZORENJE**<br/>
> Ako koristite Ollama s drugog uređaja, kontejnera ili usluge, ne zaboravite konfigurirati Ollama tako da dopušta vanjske veze (ne samo lokalne veze).

Više o ograničenjima, vlastitim ključevima (BYOK) i drugom pogledajte na [OpenRouter autentifikacija](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguracija i okruženje

**Lokacije konfiguracijskih datoteka**

| Implementacija     | Lokacija konfiguracije                         |
| ------------------ | ---------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                        |
| Electron (Linux)   | `~/.config/transrewrt/`                        |
| Web / Docker       | `/app/data/config.json` (koristite volumen za trajnost) |

<br/>

**Varijable okruženja** (samo web/Docker; Electron koristi lokalnu konfiguracijsku datoteku)

| Varijabla            | Zadano                    | Opis |
| -------------------- | ------------------------- | ---- |
| `PORT`               | `5000`                    | Port na kojem sluša poslužitelj |
| `CONFIG_PATH`        | `/app/data/config.json`   | Put do konfiguracijske datoteke |
| `OPENROUTER_API_KEY`     | *(prazno)*                | OpenRouter API ključ |
| `OPENAI_API_KEY`         | *(prazno)*                | OpenAI API ključ |
| `CEREBRAS_API_KEY`       | *(prazno)*                | Cerebras API ključ |
| `ANTHROPIC_API_KEY`      | *(prazno)*                | Anthropic API ključ |
| `GOOGLE_API_KEY`         | *(prazno)*                | Google Gemini API ključ |
| `DEEPSEEK_API_KEY`       | *(prazno)*                | DeepSeek API ključ |
| `GROQ_API_KEY`           | *(prazno)*                | Groq API ključ |
| `MISTRAL_API_KEY`        | *(prazno)*                | Mistral API ključ |
| `OLLAMA_URL`         | *(prazno)*                | Osnovni URL za Ollamu (npr. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`            | *(prazno)*                | xAI API ključ |

Konfigurirajte samo davatelje usluga koje koristite. ID-ovi modela koriste imenske prostore (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, itd.).

**Prikaz troškova:** OpenRouter vraća točne naplaćene troškove kad god je to moguće. Ostali davatelji koriste **procijenjene** troškove iz javnih cijena modela OpenRoutera ako je dostupan OpenRouter ključ; bez njega, troškovi za ne-OpenRouter izvore mogu se prikazati kao `0`. Procjene nisu računi.

<br/>

**Podaci i trajnost:** Za Docker postavite volumen na `/app/data` kako bi se `config.json` i SQLite baza podataka čuvali nakon ponovnog pokretanja kontejnera. Bez volumena, svi podaci će biti izgubljeni kada se kontejner zaustavi.

**Razvijatelji:** Nakon ažuriranja koja mijenjaju staru konfiguraciju s jednim ključem, ponovo postavite ili sjedinite `data/config.json` s novim zadanim oblikom iz `src/config-defaults/config_default.json` ako vaša lokalna datoteka još uvijek koristi uklonjena polja (`api_key`, `api_url`, opcije proxyja).

<br/>

**Web autentifikacija:**

- Zadani administrator: `admin` / `transrewrt26`.
- Upravljajte korisnicima u **Postavke → Korisnici**.
- Ponovno postavite lozinku: `docker exec <kontejner> reset-web-password '<korisničko ime>' '<nova lozinka>'`
  (iz izvorne kôde: `pnpm run reset-web-password -- <korisničko ime> <nova lozinka>`)

<br/>

> ⚠️ **UPOZORENJE**<br/>
> Promijenite zadane lozinke administratora čim aplikacija bude dostupna na mreži.

<br/>

Glavne postavke (font, modeli, jezici itd.) dostupne su unutar aplikacije u Postavkama.

<br/><br/>

<a id="development-and-architecture"></a>

## Razvoj i arhitektura

- **Razvoj:** Postavljanje, kompiliranje, testiranje i objavljivanje (Electron, Web, Docker) - pogledajte **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arhitektura i pregled sustava:** Struktura mapa, tehnološki stack, odluke o dizajnu - pogledajte **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Izdanja i oznake

- **Git oznake** `v`* (npr. `v1.0.10`) pokreću [tijek rada objave](.github/workflows/release.yml). **GitHub izdanja** prilažu Windows instalacijski program (`.exe`) i Linux AppImage datoteke (**x64** i **arm64**).
- **Docker slike** se objavljuju na `ghcr.io/wsj-br/transrewrt`. Oznake slika odgovaraju Git verziji (npr. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) te dodatno `latest`. Višestruki arhitekturi: `linux/amd64` i `linux/arm64` (npr. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Doprinos

1. Napravite forku repozitorija.
2. Stvorite granu za značajku: `git checkout -b feature/my-feature`
3. Pošaljite svoje izmjene s jasnom porukom.
4. Pritisnite i otvorite Pull Request prema `main`.

Pratite postojeći stil kôda i testirajte svoje izmjene u Electron i web načinima prije slanja. Vidi [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) za upute za izgradnju i testiranje.

<br/>

**Prijavljivanje problema:** Otvorite problem na [GitHubu](https://github.com/wsj-br/transrewrt/issues). Navedite platformu (Windows / Linux / Docker) i verziju aplikacije (prikazano u dijalogu "O programu" ili na stranici izdanja).

<br/><br/>

<a id="disclaimer"></a>
## Ograničenje odgovornosti

Nazivi i ikone proizvoda pripadaju svojim vlasnicima i koriste se isključivo u svrhu prepoznavanja. Ovaj softver nije u vezi s navedenim brendovima, niti im je odobren.

<br/><br/>

<a id="license"></a>
## Licenca

Autorsko pravo © 2026 Waldemar Scudeller Jr.

[Apache licenca 2.0](LICENSE)