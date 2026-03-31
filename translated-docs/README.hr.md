---
translation_last_updated: '2026-03-31T22:56:58.998Z'
source_file_mtime: '2026-03-31T22:20:13.182Z'
source_file_hash: bf6416a9ca259a19
translation_language: hr
source_file_path: README.md
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Sadržaj**

- [Slike zaslona](#screenshots)
- [Sadržaj](#table-of-contents)
- [Brzi početak](#quick-start)
- [Instalacija](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Konfiguracija vremenske zone](#configuring-the-timezone)
- [Dobivanje OpenRouter API ključa](#getting-an-openrouter-api-key)
- [Konfiguracija i okolina](#configuration-and-environment)
- [Razvoj i arhitektura](#development-and-architecture)
- [Prijavljivanje problema](#reporting-issues)
- [Ograničenje odgovornosti](#disclaimer)
- [Licenca](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

**Pročitajte na drugim jezicima:**
[Engleski (UK)](../README.md) · [Portugalski (BR)](README.pt-BR.md) · [Arapski](README.ar.md) · [Bengalski](README.bn.md) · [Katalonski](README.ca.md) · [Kineski (povezani)](README.zh-CN.md) · [Kineski (tradicionalni)](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Češki](README.cs.md) · [Nizozemski](README.nl.md) · [Engleski (US)](README.en-US.md) · [Filipinski](README.tl.md) · [Francuski](README.fr.md) · [Njemački](README.de.md) · [Grčki](README.el.md) · [Hindi](README.hi.md) · [Mađarski](README.hu.md) · [Talijanski](README.it.md) · [Japanski](README.ja.md) · [Javanski](README.jv.md) · [Korejski](README.ko.md) · [Malezijski](README.ms.md) · [Perzijski](README.fa.md) · [Poljski](README.pl.md) · [Portugalski (PT)](README.pt.md) · [Punjabski](README.pa.md) · [Rumunjski](README.ro.md) · [Ruski](README.ru.md) · [Slovački](README.sk.md) · [Španjolski](README.es.md) · [Svahili](README.sw.md) · [Švedski](README.sv.md) · [Telugu](README.te.md) · [Tajlandski](README.th.md) · [Turski](README.tr.md) · [Ukrajinski](README.uk.md) · [Vijetnamski](README.vi.md)

> **Napomena o prijevodu sučelja i dokumentacije:** Svi jezici sučelja osim izvornog engleskog (UK)
> prevedeni su pomoću AI modela; izrazi mogu biti neprecizni ili sadržavati pogreške.

## Slike zaslona

**Odabir jezika**

Odabir jezika

**Prevedi**

Prevedi

**Transformacija - uređivač upita**

Transformacija - uređivač upita

**Nadzorna ploča**

Sažetak nadzorne ploče — korištenje

**Povijest**

Povijest

**Postavke - odabir modela**

Postavke - odabir modela

## Sadržaj

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

> ℹ️ **NAPOMENA**  
>
> U Dockeru, vjerodajnice za LLM postavljaju se putem varijabli okoline kao što su `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (ne putem web sučelja). Na desktopu (Electron) ključeve konfigurirate u **Postavke → API**.

**Windows**

Preuzmite najnoviju verziju `Transrewrt Setup x.y.z.exe` s [Izdavanja](https://github.com/wsj-br/transrewrt/releases), pokrenite instalaciju, zatim pokrenite aplikaciju preko izbornika Start ili prečaca na radnoj površini. Unesite svoje API ključeve u **Postavke → API**. Potrebno je konfigurirati barem jednog davatelja; OpenRouter je čest izbor za besplatne modele.

**Linux**

Preuzmite `.AppImage` datoteku za vaš procesor s [Izdavanja](https://github.com/wsj-br/transrewrt/releases) (`x64` za tipična računala, `arm64` za mnoge ARM uređaje, uključujući Raspberry Pi 4+), zatim:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Unesite svoje API ključeve u **Postavke → API**. Potrebno je konfigurirati barem jednog davatelja; OpenRouter je čest izbor za besplatne modele.

**Poruke u konzoli:** Pakirane Linux verzije (`x64` i `arm64` AppImages) potiskuju Node upozorenja o zastarjelosti u terminalu (npr. ugrađeni modul `punycode`). Ako Chromium ispisuje GPU / EGL pogreške kao što je „GLES3 nije podržan“, ali aplikacija radi, možete ih ugasiti onemogućavanjem hardverske akceleracije:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

To vrijedi i za amd64; promijenite naziv datoteke kako bi odgovarao vašem preuzimanju. Pogledajte [Instalacija → Linux (Electron)](#linux-electron) za dodatne pojedinosti.

Na Debian/Ubuntu sustavima možda ćete trebati dodatne **runtime** biblioteke koje Chromium očekuje (često već prisutne na potpunim desktop okruženjima). Koristite **`libnotify4`** za obavijesti na radnoj površini—**ne** `libnotify-dev` (to je za izradu softvera, ne za pokretanje pakirane AppImage datoteke):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

Minimalne ili prilagođene slike i dalje mogu završiti s greškom zbog nedostajućeg `.so`; instalirajte paket kojeg greška navodi (češće dodatne opcije: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Neke okoline zahtijevaju FUSE za pokretanje AppImage datoteka (npr. `libfuse2` na Ubuntu 22.04+), ili koristite `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

Pogledajte [Instalacija → Linux](#linux-electron) za isti sažetak.

> ℹ️ **NAPOMENA**  
>
> macOS trenutačno nije podržan. Transrewrt je dostupan za Windows, Linux i Docker.

Kada aplikacija radi, pogledajte **[Vodič za korisnike](USER-GUIDE.hr.md)** kako biste naučili kako prevesti, prepraviti i transformirati tekst, upravljati upitima i konfigurirati modele.

## Instalacija

### Windows (Electron)

- Preuzmite najnoviji instalacijski program s [Izdavanja](https://github.com/wsj-br/transrewrt/releases).
- Pokrenite `.exe` i slijedite upute instalacije.
- Prvi pokret: pokrenite aplikaciju preko izbornika Start ili prečaca na radnoj površini.

> ℹ️ **NAPOMENA**  
>
> Windows može prikazati jedno od ovih upozorenja o sigurnosti (normalno za nepotpisane/neovisne aplikacije):
>
> - **Kontrola računa korisnika (UAC)**: "Želite li dopustiti ovoj aplikaciji nepoznatog izdavača da unese promjene na vašem uređaju?" → Kliknite **Da**.
> - **Microsoft Defender SmartScreen**: "Windows je zaštitio vaše računalo" → Kliknite **Više informacija** → **Ipak pokreni**.
>
> Ovo se događa jer aplikacija nije potpisana od strane Microsofta ili većeg izdavača — sigurna je ako je preuzeta s naših službenih izdanja na GitHubu
>  (provjerite SHA256 izračun ispod).

### Linux (Electron)

- Preuzmite odgovarajući `.AppImage` (`x64` ili `arm64`) s [izdanja](https://github.com/wsj-br/transrewrt/releases).
- Pokrenite: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` na x86_64/amd64, ili koristite datoteku `...-arm64.AppImage` na ARM64.
- **Biblioteke za izvođenje na Debian/Ubuntu** (Electron/Chromium; isto kao u [Brzi početak → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — koristite **`libnotify4`**, a ne `libnotify-dev`. Na minimalnim sustavima instalirajte bilo koje nedostajuće `.so` koje prijavi terminal; dodatne biblioteke kao `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2` često su potrebne. AppImage možda zahtijeva `libfuse2` (Ubuntu 22.04+) ili `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`.
- **GPU poruke:** Chromium može prijavljivati pogreške pri pokretanju GPU-a ili EGL-a na nekim sustavima (posebno ARM); aplikacija i dalje može normalno raditi. Da biste izbjegli te poruke, pokrenite aplikaciju s isključenim hardverskim ubrzanjem: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (ili vašu `arm64` datoteku).

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

### Konfiguracija vremenske zone

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

## Dohvaćanje OpenRouter API ključa

Transrewrt podržava više davatelja umjetne inteligencije. [OpenRouter](https://openrouter.ai) je popularan izbor jer agregira mnoge modele pod jednim ključem i nudi besplatne modele.

1. Registrirajte se ili se prijavite na [openrouter.ai](https://openrouter.ai).
2. Otvorite stranicu [Keys](https://openrouter.ai/keys) i kreirajte novi ključ (dajte mu naziv i po želji postavite ograničenje kredita). Možete koristiti besplatne modele bez dodavanja kredita.
3. **Desktop (Electron):** zalijepite ključeve u **Postavke → API**. **Docker:** postavite varijable okoline kao što je `OPENROUTER_API_KEY` (pogledajte [Quick start](#quick-start)).

Ne koristite OpenRouterov model **Body Builder** (`[openrouter/bodybuilder](https://openrouter.ai/openrouter/bodybuilder)`) za prevođenje, prepravak ili transformaciju: on vraća JSON teret zahtjeva, a ne gotov tekst za te zadatke. Pogledajte [Postavke → Modeli](USER-GUIDE.hr.md#models) u Korisničkom vodiču.

Također možete koristiti druge davatelje (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ili pokretati modele lokalno s [Ollama](https://ollama.com). Pogledajte [Configuration](#configuration-and-environment) za potpun popis podržanih davatelja i varijabli okoline.

> ⚠️ **UPOZORENJE**  
>
> Ako koristite Ollama s drugog uređaja, kontejnera ili usluge, sjetite se konfigurirati Ollama da dopušta vanjske veze (ne samo localhost).

Za ograničenja, BYOK i više informacija, pogledajte [OpenRouter autentifikaciju](https://openrouter.ai/docs/api/reference/authentication).

## Konfiguracija i okruženje

**Lokacije konfiguracijskih datoteka**

| Implementacija         | Lokacija konfiguracije                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (koristite volume za trajnost) |

**Varijable okruženja** (samo za web/Docker; Electron koristi lokalnu konfiguracijsku datoteku)

| Varijabla             | Zadano                 | Opis                                                                                                                 |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `PORT`               | `5000`                  | Priključak na kojem sluša poslužitelj                                                                                                       |
| `CONFIG_PATH`        | `/app/data/config.json` | Put do konfiguracijske datoteke                                                                                                     |
| `TZ`                 | `Europe/London`         | IANA vremenska zona za vrijeme na poslužitelju (zapisivanje itd.); korisničko sučelje i dalje slijedi preglednik. Pogledajte [Docker → vremenska zona](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(prazno)*               | OpenRouter API ključ                                                                                                          |
| `OPENAI_API_KEY`     | *(prazno)*               | OpenAI API ključ                                                                                                              |
| `CEREBRAS_API_KEY`   | *(prazno)*               | Cerebras API ključ                                                                                                            |
| `ANTHROPIC_API_KEY`  | *(prazno)*               | Anthropic API ključ                                                                                                           |
| `GOOGLE_API_KEY`     | *(prazno)*               | Google Gemini API ključ                                                                                                       |
| `DEEPSEEK_API_KEY`   | *(prazno)*               | DeepSeek API ključ                                                                                                            |
| `GROQ_API_KEY`       | *(prazno)*               | Groq API ključ                                                                                                                |
| `MISTRAL_API_KEY`    | *(prazno)*               | Mistral API ključ                                                                                                             |
| `OLLAMA_URL`         | *(prazno)*               | Osnovni URL za Ollama (npr. `http://host.docker.internal:11434`)                                                                  |
| `XAI_API_KEY`        | *(prazno)*               | xAI API ključ                                                                                                                 |

Konfigurirajte samo pružatelje usluga koje koristite. ID-ovi modela su imenski organizirani (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, itd.).

**Prikaz troškova:** OpenRouter vraća točan naplaćeni trošak kad je primjenjivo. Ostali pružatelji koriste **procijenjeni** trošak iz javnih cijena modela OpenRouter-a kada je dostupan OpenRouter ključ; bez njega, trošak za ne-OpenRouter može biti prikazan kao `0`. Procjene nisu računi.

**Podaci i trajnost:** Za Docker, pričvrstite volume na `/app/data` kako bi `config.json` i SQLite baza podataka ostali sačuvani nakon ponovnog pokretanja kontejnera. Bez volumena, svi podaci se gube kada se kontejner zaustavi.

**Programeri:** Nakon preuzimanja promjena koje mijenjaju staru konfiguraciju s jednim ključem, ponovno postavite ili spojite `data/config.json` s novim zadanim oblikom iz `src/config-defaults/config_default.json`, ako vaša lokalna datoteka još uvijek koristi uklonjena polja (`api_key`, `api_url`, proxy opcije).

**Web autentifikacija:**

- Zadani administrator: `admin` / `transrewrt26`.
- Upravljanje korisnicima u **Postavke → Korisnici**.
- Ponovno postavljanje lozinke: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (iz izvornog kôda: `pnpm run reset-web-password -- <username> <new-password>`)

> ⚠️ **UPOZORENJE**  
>
> Odmah promijenite zadanu lozinku administratora na svakom računalu dostupnom putem mreže.

Ključne postavke (font, modeli, jezici, itd.) dostupne su u postavkama aplikacije.

## Razvoj i arhitektura

- **Razvoj:** Postavljanje, izgradnja, testiranje i implementacija (Electron, Web, Docker) - pogledajte **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arhitektura i pregled sustava:** Struktura mapa, tehnološki stog, odluke o dizajnu - pogledajte **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

## Prijava problema

Otvorite problem na [GitHubu](https://github.com/wsj-br/transrewrt/issues). Uključite svoju platformu (Windows / Linux / Docker) i verziju aplikacije (prikazanu u dijalogu O programu ili na stranici izdanja).

## Odricanje od odgovornosti

Imena proizvoda i ikone vlasništvo su njihovih vlasnika i koriste se samo u svrhe identifikacije. Ovaj softver nije povezan s niti ga podržavaju navedene marke.

## Licenca

Autorska prava © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
