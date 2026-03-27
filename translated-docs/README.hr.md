---
translated_at: "2026-03-27T23:08:35.318Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logotip" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Verzija"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licenca: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Alatom koji koristi umjetnu inteligenciju za obradu teksta: prevodite između jezika, prepisujte u različitim stilovima i transformirajte prilagođenim upitima – koristeći više davatelja usluga umjetne inteligencije (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI i lokalni Ollama). Radi kao desktop aplikacija (Electron) ili samo-hostirana web aplikacija (Docker).

- **Prijevod** — između desetakaka jezika, s automatskom detekcijom izvornog jezika
- **Prepisi** — ispravi gramatiku, poboljšaj jasnoću, formalni/neformalni, skrati, proširi, tehnički
- **Transformiraj** — prilagođeni upiti AI; stvaranje i upravljanje upitima, izborno ciljani jezik po upitu
- **Povijest** — puna povijest izvršenja s ulaznim/izlaznim tekstom, filtriranjem i mogućnošću izvoza
- **Modeli i trošak** — odabir modela od bilo kojeg konfiguriranog davatelja; nadzorne ploče troškova i korištenja s dnevnim zapisima, sažecima po modelu/operaciji/danu
- **Korisničko sučelje** — višejezično sučelje (30+ jezika, podrška za RTL), fontovi, ...
- **Web način rada** — podrška za više korisnika s administratorskim ulogama
- **Desktop** — Electron aplikacija za Windows i Linux
- **Samo-hostirano** — Docker slika za amd64 i arm64 (spreman za Raspberry Pi)

Nakon instalacije, pogledajte **[Vodič za korisnike](USER-GUIDE.hr.md)** za sveobuhvatan prikaz svih značajki.

<small>**Pročitajte na drugim jezicima:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Napomena o prijevodima korisničkog sučelja i dokumentacije:** Svi jezici sučelja osim izvornog engleskog (UK)
> su prevedeni pomoću AI modela; riječi mogu biti neprecizne ili sadržavati pogreške.

</small>

<br/>

<a id="screenshots"></a>

## Snimke zaslona

**Odabir jezika**

![Odabir jezika](../images/screenshots/hr/language-selector.png)

**Prijevod**

![Prijevod](../images/screenshots/hr/translate.png)

**Transformacije – uređivač upita**

![Transformacije – uređivač upita](../images/screenshots/hr/transform-prompt-edit.png)

**Nadzorna ploča**

![Nadzorna ploča](../images/screenshots/hr/dashboard-summary.png)

**Povijest**

![Povijest](../images/screenshots/hr/history.png)

**Postavke – odabir modela**

![Postavke – odabir modela](../images/screenshots/hr/settings-models.png)

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
- [Konfiguracija i okruženje](#configuration-and-environment)
- [Razvoj i arhitektura](#development-and-architecture)
- [Izdavanje verzija i oznake](#releases-and-tags)
- [Doprinos](#contributing)
- [Zaključak](#disclaimer)
- [Licenca](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Brzi početak

**Docker (preporučeno za samostalno hostingovanje)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Zamijenite `sk-or-your-key` s vašim [OpenRouter API ključem](https://openrouter.ai/keys) (ili postavite ključeve drugih provajdera; pogledajte [Konfiguraciju](#configuration-and-environment)). Otvorite [http://localhost:5000](http://localhost:5000) i promijenite zadani administratorski lozinku prije nego što servis bude dostupan izvana.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Kod Dockera, vjerodajnice za LLM postavljaju se putem varijabli okoline kao što su `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (ne preko web sučelja). Kod desktop verzije (Electron) ključeve konfigurirate u **Postavke → API**.

<br/>

**Windows**

Preuzmite najnoviju verziju `Transrewrt Setup x.y.z.exe` s [izdanja (Releases)](https://github.com/wsj-br/transrewrt/releases), pokrenite instalacijski program, a zatim pokrenite aplikaciju preko izbornika Start ili prečaca na radnoj površini. Unesite svoje API ključeve u **Postavke → API**. Potrebno je konfigurirati barem jednog pružatelja usluga; OpenRouter je često korišten za besplatne modele.

<br/>

**Linux**

Preuzmite `.AppImage` datoteku za svoj CPU s [izdanja (Releases)](https://github.com/wsj-br/transrewrt/releases) (`x64` za uobičajena računala, `arm64` za ARM uređaje uključujući Raspberry Pi 4+), a zatim:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Unesite svoje API ključeve u **Postavke → API**. Potrebno je konfigurirati barem jednog pružatelja usluga; OpenRouter je često korišten za besplatne modele.

Na Debian/Ubuntu sustavima možda ćete prvo trebati instalirati dodatne ovisnosti:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Detaljne informacije pogledajte u odjeljku [Instalacija → Linux](#linux-electron).

<br/>

> ℹ️ **NAPOMENA**<br/>
> Trenutačno nije podržan macOS. Transrewrt je dostupan za Windows, Linux i Docker.

<br/>

Kada aplikacija počne raditi, pogledajte **[Vodič za korisnike (User Guide)](USER-GUIDE.hr.md)** kako biste naučili kako prevesti, prepisati i transformirati tekst, upravljati upitima i konfigurirati modele.

<br/><br/>

<a id="installation"></a>

## Instalacija

<a id="windows-electron"></a>
### Windows (Electron)

- Preuzmite najnoviju instalacijsku datoteku s [Izdavanja](https://github.com/wsj-br/transrewrt/releases).
- Pokrenite `.exe` datoteku i slijedite upute instalacije.
- Prvi pokretanje: pokrenite aplikaciju iz izbornika Start ili prečaca na radnoj površini.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Preuzmite odgovarajuću `.AppImage` datoteku (`x64` ili `arm64`) s [Izdavanja](https://github.com/wsj-br/transrewrt/releases).
- Pokretanje: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` za x86_64/amd64, ili koristite datoteku `...-arm64.AppImage` za ARM64.
- Dodatne ovisnosti (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Više informacija pogledajte u [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Preuzmite: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Postavite najmanje jedan ključ davatelja usluge putem okoline (npr. `OPENROUTER_API_KEY` za OpenRouter). Prosljedite varijable s `-e` ili putem `docker compose` / `.env` kako tajne ne bi bile ugrađene u sliku.
- Ključevi davatelja usluga **ne unose se** u web sučelje; poslužitelj ih čita iz okoline.

Primjer - nazvani volumen za trajnost (OpenRouter ključ putem env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

ili ako više volite koristiti Docker Compose, koristite:

# preuzimanje datoteke za sastavljanje
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# uredi datoteku kako bi dodao API ključeve
vi transrewrt.yml
# pokreni kontejner
docker compose -f transrewrt.yml up -d
```

<br/>

| Opcija   | Opis                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Port     | `5000` (mapiraj s `-p 5000:5000`)                                                                                                       |
| Spremnik | Montiraj `/app/data` za trajno pohranjivanje konfiguracije i baze podataka                                                                                  |
| Varijable okoline | `PORT`, `CONFIG_PATH`, te ključevi za LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - pogledaj [Konfiguracija](#configuration-and-environment) |

Za izgradnju i pokretanje iz izvornog kôda: `docker compose up --build -d` ili `pnpm docker:up` - pogledaj [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Dobivanje OpenRouter API ključa

Transrewrt podržava više AI davatelja usluga. [OpenRouter](https://openrouter.ai) je popularan izbor jer grupira mnoge modele pod jednim ključem te nudi besplatne modele.

1. Registrirajte se ili prijavite na [openrouter.ai](https://openrouter.ai).
2. Otvorite stranicu [Keys](https://openrouter.ai/keys) i stvorite novi ključ (dodijelite mu naziv i po želji postavite ograničenje kredita). Možete koristiti besplatne modele bez dodavanja kredita.
3. **Desktop (Electron):** zalijepite ključeve u **Postavke → API**. **Docker:** postavite varijable okruženja poput `OPENROUTER_API_KEY` (vidi [Brzi početak](#quick-start)).

Nemojte koristiti OpenRouterov model **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) za prijevod, prepisivanje ili transformaciju: taj model vraća JSON pakete zahtjeva, a ne gotov tekst za te zadatke. Pogledajte [Postavke → Modeli](USER-GUIDE.hr.md#models) u Vodiču za korisnike.

Također možete koristiti druge davatelje usluga (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ili pokretati modele lokalno s [Ollama](https://ollama.com). Potpunu listu podržanih davatelja usluga i varijabli okruženja pogledajte u odjeljku [Konfiguracija](#configuration-and-environment).

> ⚠️ **UPOZORENJE**<br/>
> Ako koristite Ollama s drugog uređaja, spremnika ili usluge, sjetite se konfigurirati Ollam-u tako da dopušta vanjske veze (ne samo lokalne veze).

Informacije o ograničenjima, BYOK-u i ostalom dostupne su na [OpenRouter autentifikacija](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Konfiguracija i okruženje

**Lokacije konfiguracijskih datoteka**

| Implementacija     | Lokacija konfiguracije                                   |
| ------------------ | -------------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                                  |
| Electron (Linux)   | `~/.config/transrewrt/`                                  |
| Web / Docker       | `/app/data/config.json` (koristite glas da biste sačuvali podatke) |

<br/>

**Varijable okruženja** (samo za web/Docker; Electron koristi lokalnu konfiguracijsku datoteku)

| Varijabla          | Zadano                  | Opis |
| ------------------ | ----------------------- | ---- |
| `PORT`             | `5000`                  | Port na kojemu sluša poslužitelj |
| `CONFIG_PATH`      | `/app/data/config.json` | Put do konfiguracijske datoteke |
| `OPENROUTER_API_KEY` | *(prazno)*               | OpenRouter API ključ |
| `OPENAI_API_KEY`     | *(prazno)*               | OpenAI API ključ |
| `CEREBRAS_API_KEY`   | *(prazno)*               | Cerebras API ključ |
| `ANTHROPIC_API_KEY`  | *(prazno)*               | Anthropic API ključ |
| `GOOGLE_API_KEY`     | *(prazno)*               | Google Gemini API ključ |
| `DEEPSEEK_API_KEY`   | *(prazno)*               | DeepSeek API ključ |
| `GROQ_API_KEY`       | *(prazno)*               | Groq API ključ |
| `MISTRAL_API_KEY`    | *(prazno)*               | Mistral API ključ |
| `OLLAMA_URL`     | *(prazno)*               | Temeljni URL za Ollama (npr. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(prazno)*               | xAI API ključ |

Konfigurirajte samo pružatelje usluga koje koristite. ID-ovi modela su imenski organizirani (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, itd.).

**Prikaz troškova:** OpenRouter vraća točan naplaćeni iznos kad god je to moguće. Ostali pružatelji koriste **procijenjene** troškove iz javnih cijena modela na OpenRouteru ako je dostupan OpenRouter ključ; ako nije, troškovi za pružatelje osim OpenRoutera mogu se prikazati kao `0`. Procjene nisu računi.

<br/>

**Podaci i trajnost:** Za Docker, priključite glas na `/app/data` kako bi `config.json` i SQLite baza podataka ostali sačuvani i nakon ponovnog pokretanja spremnika. Bez glasa, svi podaci će biti izgubljeni kada se spremnik zaustavi.

**Za programere:** Nakon preuzimanja promjena koje mijenjaju staru konfiguraciju s jednim ključem, resetirajte ili spojite `data/config.json` s novim zadanim oblikom iz `src/config-defaults/config_default.json` ako vaša lokalna datoteka i dalje koristi uklonjena polja (`api_key`, `api_url`, opcije proxyja).

<br/>

**Web autentikacija:**

- Zadani administrator: `admin` / `transrewrt26`.
- Upravljanje korisnicima: **Postavke → Korisnici**.
- Resetiranje lozinke: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (iz izvora: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **UPOZORENJE**<br/>
> Odmah promijenite zadano korisničko ime i lozinku administratora na bilo kojem hostu koji je dostupan preko mreže.

<br/>

Postavke poput fonta, modela, jezika itd. dostupne su u Postavkama aplikacije.

<br/><br/>

<a id="development-and-architecture"></a>

## Razvoj i arhitektura

- **Razvoj:** Postavljanje, kompilacija, testiranje i implementacija (Electron, Web, Docker) – pogledajte **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Pregled arhitekture i sustava:** Struktura mapa, tehnološki stog, dizajnerske odluke – pogledajte **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Izdavanje verzija i oznake

- **Git oznake** `v`* (npr. `v1.0.10`) pokreću [radni tijek izdavanja](.github/workflows/release.yml). **GitHub verzije** prilažu Windows instalacijski program (`.exe`) i Linux AppImage datoteke (**x64** i **arm64**).
- **Docker slike** objavljuju se na `ghcr.io/wsj-br/transrewrt`. Oznake slike odgovaraju Git verziji (npr. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) plus oznaka `latest`. Višestruki arhitektonski okviri: `linux/amd64` i `linux/arm64` (npr. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Doprinos

1. Forkajte spremište.
2. Stvorite granu za značajku: `git checkout -b feature/my-feature`
3. Fiksirajte svoje promjene s jasnom porukom.
4. Objavite promjene i otvorite Zahtjev za spajanje na `main`.

Molimo poštivanje postojećeg stila koda te testiranje promjena u Electron i web načinu rada prije slanja. Pogledajte [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) za upute o kompilaciji i testiranju.

<br/>

**Prijavljivanje problema:** Otvorite problem na [GitHub-u](https://github.com/wsj-br/transrewrt/issues). Uključite svoju platformu (Windows / Linux / Docker) i verziju aplikacije (prikazano u dijalogu O programu ili na stranici verzija).

<br/><br/>

<a id="disclaimer"></a>

## Ograničenje odgovornosti

Nazivi proizvoda i ikone pripadaju svojim vlasnicima i koriste se isključivo u svrhu identifikacije. Ovaj softver nije u vezi niti ga ne podržava niti jedan od spomenutih brendova.

<br/><br/>

<a id="license"></a>
## Licenca

Autorska prava © 2026 Waldemar Scudeller Jr.

[Apache licenca 2.0](LICENSE)