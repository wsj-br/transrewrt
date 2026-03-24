---
translated_at: "2026-03-24T01:09:43.708Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Transrewrt logo" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Verzija"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licenca: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Alati za tekst temeljen na umjetnoj inteligenciji: prevođenje među jezicima, prepisivanje u različitim stilovima i transformacija pomoću prilagođenih upita — koristeći više AI pružatelja usluga (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI i lokalni Ollama). Radi kao aplikacija za računalo (Electron) ili samostalna web aplikacija (Docker).

- **Prijevod** — među desetak jezika, s automatskom detekcijom izvornog jezika
- **Prepisi** — popravljanje gramatike, poboljšanje jasnoće, formalno/neformalno, skraćivanje, proširivanje, tehnički stil
- **Transformiraj** — prilagođeni upiti za AI; stvaranje i upravljanje upitima, mogućnost odabira ciljnog jezika za svaki upit
- **Povijest** — potpuna povijest izvršavanja s ulaznim/izlaznim tekstovima, filtriranjem i izvozom
- **Modeli i troškovi** — odabir modela iz bilo kojeg konfiguriranog pružatelja; nadzorna ploča s troškovima s dnevnim zapisima u SQLite, sažecima po modelu/operaciji/danu
- **Korisnički sučelje** — višejezično sučelje (preko 30 jezika, podrška za RTL), fontovi, ...
- **Web način rada** — podrška za više korisnika s administratorskim ulogama; ključevi API-a ostaju na poslužitelju i nikada se ne izlažu pregledniku
- **Aplikacija za računalo** — Electron aplikacija za Windows i Linux
- **Samostalno hostirano** — Docker slika za amd64 i arm64 (spremno za Raspberry Pi)

Nakon instalacije, pogledajte **[Vodič za korisnike](USER-GUIDE.hr.md)** za detaljno upute o svim značajkama.

<small>**Pročitaj na drugim jezicima:** [Engleski (UK)](README.hr.md) · [Portugalski (BR)](README.pt-BR.md) · [Arapski](README.ar.md) · [Bengalski](README.bn.md) · [Katalonski](README.ca.md) · [Kineski (pojednostavljeni)](README.zh-CN.md) · [Kineski (tradicionalni)](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Češki](README.cs.md) · [Nizozemski](README.nl.md) · [Engleski (SAD)](README.en-US.md) · [Filipinski](README.tl.md) · [Francuski](README.fr.md) · [Njemački](README.de.md) · [Grčki](README.el.md) · [Hindu](README.hi.md) · [Mađarski](README.hu.md) · [Talijanski](README.it.md) · [Japanski](README.ja.md) · [Javanski](README.jv.md) · [Korejski](README.ko.md) · [Malezijski](README.ms.md) · [Perzijski](README.fa.md) · [Poljski](README.pl.md) · [Portugalski (PT)](README.pt.md) · [Punjabski](README.pa.md) · [Rumunjski](README.ro.md) · [Ruski](README.ru.md) · [Slovački](README.sk.md) · [Španjolski](README.es.md) · [Svahili](README.sw.md) · [Švedski](README.sv.md) · [Telugu](README.te.md) · [Tajlandski](README.th.md) · [Turski](README.tr.md) · [Ukrajinski](README.uk.md) · [Vijetnamski](README.vi.md)</small>


<br/>

**Napomena o prijevodima sučelja i dokumentacije:** Svi su prijevodi korisničkog sučelja osim engleskog (UK) izvedeni pomoću modela umjetne inteligencije; formulacije mogu biti neprecizne ili sadržavati pogreške.



<a id="screenshots"></a>
## Slike ekrana

**Odabir jezika**

![Odabir jezika](../images/screenshots/hr/language-selector.png)

**Prijevod**

![Prijevod](../images/screenshots/hr/translate.png)

**Transformiraj - uređivač upita**

![Transformiraj - uređivač upita](../images/screenshots/hr/transform-prompt-edit.png)

**Nadzorna ploča**

![Nadzorna ploča s troškovima](../images/screenshots/hr/dashboard-summary.png)

**Povijest**

![Povijest](../images/screenshots/hr/history.png)

**Postavke - odabir modela**

![Postavke - odabir modela](../images/screenshots/hr/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Sadržaj

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Brzi start](#brzi-start)
- [Instalacija](#instalacija)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Dobivanje OpenRouter API ključa](#dobivanje-openrouter-api-ključa)
- [Konfiguracija i okruženje](#konfiguracija-i-okruženje)
- [Razvoj i arhitektura](#razvoj-i-arhitektura)
- [Verzije i oznake](#verzije-i-oznake)
- [Doprinos](#doprinos)
- [Ograničenje odgovornosti](#ograničenje-odgovornosti)
- [Licenca](#licenca)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Brzi start

**Docker (preporučeno za samostalno hostanje)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Zamijenite `sk-or-your-key` svojim [OpenRouter API ključem](https://openrouter.ai/keys) (ili postavite ključeve drugih davatelja usluga; pogledajte [Konfiguracija](#konfiguracija-i-okruženje)). Otvorite [http://localhost:5000](http://localhost:5000) i promijenite zadani administratorski lozinku prije nego što servis otvorite vanjskom pristupu.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Kod Dockera, vjerodajnice za LLM postavljaju se pomoću varijabli okruženja kao što su `OPENROUTER_KEY`, `OPENAI_KEY`, … (ne putem web sučelja). Na desktopu (Electron) ključeve konfigurirate u odjeljku **Postavke → API**.

<br/>

**Windows**

Preuzmite najnoviju verziju `Transrewrt Setup x.y.z.exe` s [Releases](https://github.com/wsj-br/transrewrt/releases), pokrenite instalacijski program, a zatim pokrenite aplikaciju putem izbornika Start ili prečaca na radnoj površini. Unesite svoje API ključeve u **Postavke → API**. Potrebno je konfigurirati barem jednog davatelja usluga; OpenRouter je uobičajen za besplatne modele.

<br/>

**Linux**

Preuzmite datoteku `.AppImage` s [Releases](https://github.com/wsj-br/transrewrt/releases), zatim:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Unesite svoje API ključeve u **Postavke → API**. Potrebno je konfigurirati barem jednog davatelja usluga; OpenRouter je uobičajen za besplatne modele.

Na Debian/Ubuntu sustavima možda ćete najprije morati instalirati dodatne ovisnosti:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Pogledajte [Instalacija → Linux](#linux-electron) za detalje.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Trenutačno se macOS ne podržava. Transrewrt je dostupan za Windows, Linux i Docker.

<br/>

Kada aplikacija bude pokrenuta, pogledajte **[Vodič za korisnike](USER-GUIDE.hr.md)** kako biste naučili prevoditi, prepisivati i transformirati tekst, upravljati upitima i konfigurirati modele.

<br/><br/>

<a id="installation"></a>
## Instalacija

<a id="windows-electron"></a>
### Windows (Electron)

- Preuzmite najnoviji instalacijski program s [Releases](https://github.com/wsj-br/transrewrt/releases).
- Pokrenite `.exe` datoteku i slijedite upute instalacije.
- Prvi pokret: pokrenite aplikaciju iz izbornika Start ili prečaca na radnoj površini.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Preuzmite `.AppImage` datoteku s [Releases](https://github.com/wsj-br/transrewrt/releases).
- Pokrenite: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Dodatne ovisnosti (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Dodatne informacije potražite u [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Preuzimanje: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Postavite barem jedan ključ davatelja usluge putem okruženja (npr. `OPENROUTER_KEY` za OpenRouter). Proslijedite varijable putem `-e` ili `docker compose` / `.env` kako tajni podaci ne bi bili ugrađeni u sliku.
- Ključevi davatelja usluga **ne** unose se putem web sučelja; server ih čita iz okruženja.

Primjer - imenovani volumen za očuvanje podataka (OpenRouter ključ preko okruženja):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opcija     | Opis                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------- |
| Port       | `5000` (preslikajte s `-p 5000:5000`)                                                                  |
| Volumen    | Montirajte `/app/data` za očuvanje postavki i baze podataka                                             |
| Var. okruženja | `PORT`, `CONFIG_PATH`, te LLM ključevi (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - pogledajte [Konfiguracija](#konfiguracija-i-okruženje) |

Da biste izgradili i pokrenuli iz izvornog kôda: `docker compose up --build -d` ili `pnpm docker:up` - pogledajte [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Dobivanje OpenRouter API ključa

Transrewrt podržava više davatelja umjetne inteligencije. [OpenRouter](https://openrouter.ai) je popularan izbor jer objedinjuje mnogo modela pod jednim ključem i nudi besplatne modele.

1. Registrirajte se ili prijavite na [openrouter.ai](https://openrouter.ai).
2. Otvorite stranicu [Keys](https://openrouter.ai/keys) i stvorite novi ključ (dajte mu ime, po želji postavite i ograničenje kredita). Možete koristiti besplatne modele bez dodavanja kredita.
3. **Računalo (Electron):** zalijepite ključeve u **Postavke → API**. **Docker:** postavite env varijable kao što je `OPENROUTER_KEY` (pogledajte [Brzi početak](#quick-start)).

Također možete koristiti i druge davatelje usluga (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) ili pokretati modele lokalno putem [Ollame](https://ollama.com). Pogledajte [Konfiguracija](#configuration-and-environment) za potpun popis podržanih davatelja i varijabli okoline.

Za ograničenja, BYOK i više informacija, pogledajte [OpenRouter autentifikaciju](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguracija i okolina

**Lokacije konfiguracijske datoteke**

| Implementacija        | Lokacija konfiguracije                                |
| --------------------- | ----------------------------------------------------- |
| Electron (Windows)    | `%APPDATA%\transrewrt\`                               |
| Electron (Linux)      | `~/.config/transrewrt/`                               |
| Web / Docker          | `/app/data/config.json` (koristite volumen za trajnost) |

<br/>

**Varijable okoline** (samo web/Docker; Electron koristi lokalnu konfiguracijsku datoteku)

| Varijabla          | Zadano                  | Opis |
| ------------------ | ----------------------- | ---- |
| `PORT`             | `5000`                  | Mjesto na kojem sluša poslužitelj |
| `CONFIG_PATH`      | `/app/data/config.json` | Put do konfiguracijske datoteke |
| `OPENROUTER_KEY`   | *(prazno)*              | OpenRouter API ključ |
| `OPENAI_KEY`       | *(prazno)*              | OpenAI API ključ |
| `ANTHROPIC_KEY`    | *(prazno)*              | Anthropic API ključ |
| `GOOGLE_KEY`       | *(prazno)*              | Google Gemini API ključ |
| `DEEPSEEK_KEY`     | *(prazno)*              | DeepSeek API ključ |
| `GROQ_KEY`         | *(prazno)*              | Groq API ključ |
| `MISTRAL_KEY`      | *(prazno)*              | Mistral API ključ |
| `OLLAMA_URL`       | *(prazno)*              | Osnovni URL Ollame (npr. `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(prazno)*              | xAI API ključ |

Konfigurirajte samo davatelje koje koristite. ID-ovi modela su imenski organizirani (`openrouter/…`, `openai/…`, `ollama/…`, itd.).

**Prikaz cijene:** OpenRouter vraća točno naplaćivano iznos kad god je to moguće. Ostali davatelji koriste **procijenjenu** cijenu iz javne cjenovne liste modela s OpenRoutra ako je dostupan OpenRouter ključ; bez njega, trošak za druge davatelje može se prikazati kao `0`. Procjene nisu računi.

<br/>

**Podaci i trajnost:** Za Docker, montirajte volumen na `/app/data` kako bi `config.json` i SQLite baza podataka ostali sačuvani i nakon ponovnog pokretanja kontejnera. Bez volumena, svi podaci će biti izgubljeni nakon zaustavljanja kontejnera.

**Za razvijatelje:** Nakon preuzimanja promjena kojima se zamjenjuje stara konfiguracija sa pojedinačnim ključem, resetirajte ili spojite `data/config.json` s novim zadanom strukturom iz `src/config-defaults/config_default.json`, ako vaša lokalna datoteka još uvijek koristi maknuta polja (`api_key`, `api_url`, opcije proxyja).

<br/>

**Web autentifikacija:**

- Zadani administrator: `admin` / `transrewrt26`.
- Upravljanje korisnicima u **Postavke → Korisnici**.
- Ponovno postavi lozinku: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (iz izvora: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **UPOZORENJE**<br/>
> Odmah promijenite zadanu administratorsku lozinku na svakom računalu dostupnom putem mreže.

<br/>

Osnovne postavke (font, modeli, jezici itd.) dostupne su unutar aplikacije u Postavkama.

<br/><br/>

<a id="development-and-architecture"></a>
## Razvoj i arhitektura

- **Razvoj:** Postavljanje, kompilacija, testiranje i implementacija (Electron, Web, Docker) - pogledajte **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arhitektura i pregled sustava:** Struktura mapa, tehnološki stack, projektne odluke - pogledajte **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Izdanja i oznake

- **Git oznake** `v`* (npr. `v1.0.10`) pokreću [workflow objave](.github/workflows/release.yml). **GitHub objave** prilažu Windows instalacijski program (`.exe`) i Linux AppImage.
- **Docker slike** objavljuju se na `ghcr.io/wsj-br/transrewrt`. Oznake slika odgovaraju Git inačici (npr. `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) te dodatno uključuju `latest`. Višestruka arhitektura: `linux/amd64` i `linux/arm64` (npr. Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Suradnja

1. Forkajte repozitorij.
2. Stvorite granu za novu značajku: `git checkout -b feature/svojstvo`
3. Potvrdite svoje izmjene s jasnom porukom.
4. Pritisnite (push) i otvorite zahtjev za spajanje (Pull Request) u odnosu na `main`.

Molimo da slijedite postojeći stil koda i testirate svoje izmjene u oba načina rada – Electron i web – prije slanja. Pogledajte [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) za upute oko izrade i testiranja.

<br/>

**Prijavljivanje problema:** Otvorite problem na [GitHubu](https://github.com/wsj-br/transrewrt/issues). Navedite svoju platformu (Windows / Linux / Docker) i verziju aplikacije (prikazana u About dijaloškom okviru ili na stranici objava).

<br/><br/>

<a id="disclaimer"></a>
## Odricanje od odgovornosti

Imena proizvoda i ikone pripadaju svojim vlasnicima i koriste se isključivo u svrhe identifikacije. Ovaj softver nije povezan s bilo kojim od spomenutih brendova niti je od njih odobren.

<br/><br/>

<a id="license"></a>
## Licenca

Autorska prava © 2026 Waldemar Scudeller Jr.

[Apache licenca 2.0](LICENSE)