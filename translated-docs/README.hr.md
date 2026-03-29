---
translation_last_updated: '2026-03-29T20:53:13.423Z'
source_file_mtime: '2026-03-29T01:54:18.655Z'
source_file_hash: 27ed6c4cec02f5e6
translation_language: hr
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Verzija"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licenca: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Alat za obradu teksta s AI-om: prevođenje između jezika, prepisivanje u različitim stilovima i transformacija pomoću prilagođenih upita — koristeći više davatelja AI-a (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI i lokalni Ollama). Radi kao aplikacija za računalo (Electron) ili samoposlužena web aplikacija (Docker).

- **Prevedi** — između desetaka jezika, s automatskom detekcijom izvornog jezika
- **Prepravak** — ispravljanje gramatike, poboljšanje jasnoće, formalni/neformalni stil, skraćivanje, proširivanje, tehnički sadržaj
- **Transformacija** — prilagođeni AI upiti; stvaranje i upravljanje upitima, opcionalni ciljni jezik po upitu
- **Povijest** — potpuna povijest izvršavanja s unosom/izlaznim tekstom, filtriranjem i izvozom
- **Modeli i trošak** — odabir modela od bilo kojeg konfiguriranog davatelja; nadzorna ploča za troškove i korištenje s dnevnikom, sažecima po modelu/postupku/danu
- **Sučelje** — višejezično sučelje (30+ jezika, podrška za RTL), fontovi, ...
- **Web način** — podrška za više korisnika s administratorskim ulogama
- **Računalo** — Electron aplikacija za Windows i Linux
- **Samoposluženje** — Docker slika za amd64 i arm64 (spremno za Raspberry Pi)

Nakon instalacije, pogledajte **[Vodič za korisnike](USER-GUIDE.hr.md)** za potpuni pregled svih značajki.

<small>**Pročitajte na drugim jezicima:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Napomena o prijevodu sučelja i dokumentacije:** Svi jezici sučelja osim izvornog engleskog (UK)
> prevedeni su pomoću AI modela; izrazi mogu biti neprecizni ili sadržavati pogreške.

</small>

<br/>

<a id="screenshots"></a>
## Slike zaslona

**Odabir jezika**

![Language selector](../images/screenshots/hr/language-selector.png)

**Prevedi**

![Translate](../images/screenshots/hr/translate.png)

**Transformacija - uređivač upita**

![Transform - prompt editor](../images/screenshots/hr/transform-prompt-edit.png)

**Nadzorna ploča**

![Dashboard summary — usage](../images/screenshots/hr/dashboard-summary.png)

**Povijest**

![History](../images/screenshots/hr/history.png)

**Postavke - odabir modela**

![Settings - model selection](../images/screenshots/hr/settings-models.png)

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
  - [Konfiguracija vremenske zone](#configuring-the-timezone)
- [Dobivanje OpenRouter API ključa](#getting-an-openrouter-api-key)
- [Konfiguracija i okruženje](#configuration-and-environment)
- [Razvoj i arhitektura](#development-and-architecture)
- [Prijavljivanje problema](#reporting-issues)
- [Ograničenje odgovornosti](#disclaimer)
- [Licenca](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Brzi početak

**Docker (preporučeno za samostalno hostovanje)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Zamijenite `sk-or-your-key` s vašim [OpenRouter API ključem](https://openrouter.ai/keys) (ili postavite ključeve drugih davatelja; pogledajte [Konfiguracija](#configuration-and-environment)). Otvorite [http://localhost:5000](http://localhost:5000) i promijenite zadanu administratorsku lozinku prije nego što usluga bude dostupna izvana.

<br/>

> ℹ️ **NAPOMENA**<br/>
> U Dockeru, vjerodajnice za LLM postavljaju se putem varijabli okruženja poput `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (ne putem web sučelja). Na desktopu (Electron) ključeve konfigurirate u **Postavke → API**.

<br/>

**Windows**

Preuzmite najnoviju verziju `Transrewrt Setup x.y.z.exe` s [Izdavanja](https://github.com/wsj-br/transrewrt/releases), pokrenite instalaciju, zatim pokrenite aplikaciju preko izbornika Start ili prečaca na radnoj površini. Unesite svoje API ključeve u **Postavke → API**. Potrebno je konfigurirati barem jednog davatelja; OpenRouter je čest izbor za besplatne modele.

<br/>

**Linux**

Preuzmite `.AppImage` datoteku za vaš procesor s [Izdavanja](https://github.com/wsj-br/transrewrt/releases) (`x64` za tipična računala, `arm64` za mnoge ARM uređaje, uključujući Raspberry Pi 4+), zatim:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Unesite svoje API ključeve u **Postavke → API**. Potrebno je konfigurirati barem jednog davatelja; OpenRouter je čest izbor za besplatne modele.

Na Debian/Ubuntu sustavima možda ćete prvo morati instalirati dodatne ovisnosti:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Detalje potražite u [Instalacija → Linux](#linux-electron).

<br/>

> ℹ️ **NAPOMENA**<br/>
> Trenutno nije podržan macOS. Transrewrt je dostupan za Windows, Linux i Docker.

<br/>

Kada aplikacija radi, pogledajte **[Vodič za korisnike](USER-GUIDE.hr.md)** kako biste naučili kako prevesti, prepraviti i transformirati tekst, upravljati upitima i konfigurirati modele.

<br/><br/>

<a id="installation"></a>
## Instalacija

<a id="windows-electron"></a>
### Windows (Electron)

- Preuzmite najnoviji instalacijski program s [Izdavanja](https://github.com/wsj-br/transrewrt/releases).
- Pokrenite `.exe` i slijedite upute instalacije.
- Prvi pokret: pokrenite aplikaciju preko izbornika Start ili prečaca na radnoj površini.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Windows može prikazati jedno od sljedećih upozorenja o sigurnosti (normalno za nepotpisane/neovisne aplikacije):
>   - **Kontrola računa korisnika (UAC)**: „Želite li dopustiti ovoj aplikaciji nepoznatog izdavača da unese promjene na vašem uređaju?“ → Kliknite **Da**.
>   - **Microsoft Defender SmartScreen**: „Windows je zaštitio vaše računalo“ → Kliknite **Više informacija** → **Ipak pokreni**.
>
> Ovo se događa jer aplikacija nije potpisana od strane Microsofta ili većeg izdavača — sigurna je ako je preuzeta s naših službenih GitHub izdanja
>  (provjerite SHA256 kontrolni zbroj u nastavku).

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Preuzmite odgovarajući `.AppImage` (`x64` ili `arm64`) s [Releases](https://github.com/wsj-br/transrewrt/releases).
- Pokrenite: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` na x86_64/amd64, ili koristite datoteku `...-arm64.AppImage` na ARM64.
- Dodatne ovisnosti (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Više informacija potražite u [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>
### Docker

- Preuzmite: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Postavite barem jedan ključ davatelja putem okoline (npr. `OPENROUTER_API_KEY` za OpenRouter). Prosljedite varijable s `-e` ili putem `docker compose` / `.env` kako tajne ne bi bile ugrađene u sliku.
- Ključevi davatelja **nisu** uneseni u web sučelje; poslužitelj ih čita iz okoline.

Primjer – imenovani volumen za trajnost (OpenRouter ključ putem env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

ili ako preferirate korištenje Docker Compose, koristite:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Pogledajte [Configuration](#configuration-and-environment) za sve varijable okoline, kao što su `PORT`, `CONFIG_PATH`, `TZ` i ključevi LLM-a (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>
### Konfiguriranje vremenske zone

Datum i vrijeme korisničkog sučelja aplikacije slijede **preglednikovu** lokalizaciju i vremensku zonu. Za **poslužiteljsko** ponašanje (zapisivanje i slično), spremnik koristi varijablu okoline `TZ`. Zadano je `TZ=Europe/London`.

Da biste koristili drugu vremensku zonu, postavite `TZ` u svoju datoteku Compose, npr.:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Ili prosljedite prilikom pokretanja spremnika (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Na mnogim Linux hostovima možete kopirati naziv vremenske zone sustava s:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Popis valjanih naziva vremenskih zona održava se u [tz bazi podataka](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Dohvaćanje OpenRouter API ključa

Transrewrt podržava više davatelja umjetne inteligencije. [OpenRouter](https://openrouter.ai) je popularan izbor jer agregira mnoge modele pod jednim ključem i nudi besplatne modele.

1. Registrirajte se ili se prijavite na [openrouter.ai](https://openrouter.ai).
2. Otvorite stranicu [Keys](https://openrouter.ai/keys) i kreirajte novi ključ (dajte mu naziv i po želji postavite ograničenje kredita). Možete koristiti besplatne modele bez dodavanja kredita.
3. **Desktop (Electron):** zalijepite ključeve u **Postavke → API**. **Docker:** postavite varijable okoline kao što je `OPENROUTER_API_KEY` (pogledajte [Quick start](#quick-start)).

Ne koristite OpenRouterov model **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) za prevođenje, prepravak ili transformaciju: on vraća JSON teret zahtjeva, a ne gotov tekst za te zadatke. Pogledajte [Postavke → Modeli](USER-GUIDE.hr.md#models) u Korisničkom vodiču.

Također možete koristiti druge davatelje (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ili pokretati modele lokalno s [Ollama](https://ollama.com). Pogledajte [Configuration](#configuration-and-environment) za potpun popis podržanih davatelja i varijabli okoline.

> ⚠️ **UPOZORENJE**<br/>
> Ako koristite Ollama s drugog uređaja, spremnika ili usluge, zapamtite konfigurirati Ollama da dopušta vanjske veze (ne samo localhost).

Za ograničenja, BYOK i više informacija, pogledajte [OpenRouter autentifikaciju](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Konfiguracija i okruženje

**Lokacije konfiguracijskih datoteka**

| Implementacija         | Lokacija konfiguracije                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (koristite volume za trajnost) |

<br/>

**Varijable okruženja** (samo za web/Docker; Electron koristi lokalnu konfiguracijsku datoteku)

| Varijabla         | Zadano                 | Opis |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Port na kojem sluša poslužitelj |
| `CONFIG_PATH`    | `/app/data/config.json` | Put do konfiguracijske datoteke |
| `TZ`             | `Europe/London`         | IANA vremenska zona za serversko vrijeme (prijave, itd.); korisnički sučelje i dalje slijedi preglednik. Pogledajte [Docker → vremenska zona](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(prazno)*               | OpenRouter API ključ |
| `OPENAI_API_KEY`     | *(prazno)*               | OpenAI API ključ |
| `CEREBRAS_API_KEY`   | *(prazno)*               | Cerebras API ključ |
| `ANTHROPIC_API_KEY`  | *(prazno)*               | Anthropic API ključ |
| `GOOGLE_API_KEY`     | *(prazno)*               | Google Gemini API ključ |
| `DEEPSEEK_API_KEY`   | *(prazno)*               | DeepSeek API ključ |
| `GROQ_API_KEY`       | *(prazno)*               | Groq API ključ |
| `MISTRAL_API_KEY`    | *(prazno)*               | Mistral API ključ |
| `OLLAMA_URL`     | *(prazno)*               | Osnovni URL za Ollama (npr. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(prazno)*               | xAI API ključ |

Konfigurirajte samo pružatelje usluga koje koristite. ID-ovi modela su imenski organizirani (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, itd.).

**Prikaz troškova:** OpenRouter vraća točan naplaćeni trošak kad je primjenjivo. Ostali pružatelji koriste **procijenjeni** trošak iz javnih cijena modela OpenRouter-a kada je dostupan OpenRouter ključ; bez njega, trošak za ne-OpenRouter može biti prikazan kao `0`. Procjene nisu računi.

<br/>

**Podaci i trajnost:** Za Docker, pričvrstite volume na `/app/data` kako bi `config.json` i SQLite baza podataka ostali sačuvani nakon ponovnog pokretanja kontejnera. Bez volumena, svi podaci se gube kada se kontejner zaustavi.

**Programeri:** Nakon preuzimanja promjena koje mijenjaju staru konfiguraciju s jednim ključem, ponovno postavite ili spojite `data/config.json` s novim zadanim oblikom iz `src/config-defaults/config_default.json`, ako vaša lokalna datoteka još uvijek koristi uklonjena polja (`api_key`, `api_url`, proxy opcije).

<br/>

**Web autentifikacija:**

- Zadani administrator: `admin` / `transrewrt26`.
- Upravljanje korisnicima u **Postavke → Korisnici**.
- Ponovno postavljanje lozinke: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (iz izvornog kôda: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **UPOZORENJE**<br/>
> Odmah promijenite zadani administratorski lozinku na svakom hostu dostupnom preko mreže.

<br/>

Ključne postavke (font, modeli, jezici, itd.) dostupne su u postavkama aplikacije.

<br/><br/>

<a id="development-and-architecture"></a>
## Razvoj i arhitektura

- **Razvoj:** Postavljanje, izgradnja, testiranje i implementacija (Electron, Web, Docker) - pogledajte **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arhitektura i pregled sustava:** Struktura mapa, tehnološki stog, odluke o dizajnu - pogledajte **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Prijavljivanje problema

Otvorite problem na [GitHubu](https://github.com/wsj-br/transrewrt/issues). Uključite svoju platformu (Windows / Linux / Docker) i verziju aplikacije (prikazanu u dijalogu O programu ili na stranici izdanja).

<br/><br/>

<a id="disclaimer"></a>
## Odricanje od odgovornosti

Imena proizvoda i ikone vlasništvo su njihovih vlasnika i koriste se samo u svrhe identifikacije. Ovaj softver nije povezan s niti ga podržavaju navedene marke.

<br/><br/>

<a id="license"></a>
## Licenca

Autorska prava © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)
