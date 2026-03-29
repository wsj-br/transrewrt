---
translated_at: "2026-03-29T01:54:34.067Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt natpis"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Verzija"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licenca: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Alatom napajani alat za tekst: prevođenje između jezika, prepisivanje u različitim stilovima i transformacija pomoću prilagođenih upita — koristeći više AI pružatelja (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI i lokalni Ollama). Radi kao desktop aplikacija (Electron) ili kao samopokretna web aplikacija (Docker).

- **Prevedi** — između desetak jezika, s automatskim prepoznavanjem izvornog jezika  
- **Prepiši** — ispravi gramatiku, poboljšaj jasnoću, formalni/neformalni ton, skrati, proširi, tehnički sadržaj  
- **Transformiraj** — prilagođene AI upute; stvaranje i upravljanje uputama, neobavezni ciljni jezik po uputi  
- **Povijest** — potpuna povijest izvršavanja s ulaznim/izlaznim tekstom, filtriranjem i mogućnošću izvoza  
- **Modeli i troškovi** — odaberite modele od bilo kojeg konfiguriranog pružatelja; nadzorne ploče za troškove i korištenje s dnevnicima, sažecima po modelu/operaciji/danu  
- **Korisnički interfejs** — višejezični interfejs (30+ jezika, podrška za RTL), fontovi, ...  
- **Web način rada** — podrška za više korisnika s administratorskim ulogama  
- **Radna površina** — Electron aplikacija za Windows i Linux  
- **Samopohaustiranje** — Docker slika za amd64 i arm64 (spremna za Raspberry Pi)  

Nakon instalacije, pogledajte **[Vodič za korisnike](USER-GUIDE.hr.md)** za potpuni prikaz svih značajki.

<small>**Pročitajte na drugim jezicima:** </small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Napomena o prijevodu korisničkog sučelja i dokumentacije:** Svi jezici sučelja osim izvornog engleskog (UK)
> prevedeni su pomoću AI modela; riječi mogu biti neprecizne ili sadržavati pogreške.

</small>

<br/>

<a id="screenshots"></a>

## Snimke zaslona

**Odabir jezika**

![Odabir jezika](../images/screenshots/hr/language-selector.png)

**Prijevod**

![Prijevod](../images/screenshots/hr/translate.png)

**Transformiranje - urednik uputa**

![Transformiranje - urednik upita](../images/screenshots/hr/transform-prompt-edit.png)

**Nadzorna ploča**

![Pregled nadzorne ploče — korištenje](../images/screenshots/hr/dashboard-summary.png)

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
  - [Postavljanje vremenske zone](#configuring-the-timezone)
- [Dobivanje OpenRouter API ključa](#getting-an-openrouter-api-key)
- [Konfiguracija i okolina](#configuration-and-environment)
- [Razvoj i arhitektura](#development-and-architecture)
- [Prijavljivanje problema](#reporting-issues)
- [Odricanje odgovornosti](#disclaimer)
- [Licenca](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>

## Brzi početak

**Docker (preporučuje se za samostalno hostovanje)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Zamijenite `sk-or-your-key` svojim [OpenRouter API ključem](https://openrouter.ai/keys) (ili postavite ključeve drugih davatelja usluga; pogledajte [Konfiguraciju](#konfiguracija-i-okoliš)). Otvorite [http://localhost:5000](http://localhost:5000) i promijenite zadanu administratorsku lozinku prije nego izložite uslugu.

<br/>

> ℹ️ **NAPOMENA**<br/>
> U Dockeru, vjerodajnice za LLM postavljaju se pomoću varijabli okoliša kao što su `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (a ne putem web sučelja). Na radnoj površini (Electron) ključeve konfigurirate u **Postavkama → API**.

<br/>

**Windows**

Preuzmite najnoviju verziju `Transrewrt Setup x.y.z.exe` s [objava](https://github.com/wsj-br/transrewrt/releases), pokrenite instalacijsku datoteku, a zatim pokrenite aplikaciju putem izbornika Start ili prečaca na radnoj površini. Unesite svoje API ključeve u **Postavke → API**. Morate konfigurirati barem jednog davatelja usluga; OpenRouter je čest izbor za besplatne modele.

<br/>

**Linux**

Preuzmite `.AppImage` datoteku za svoj procesor s [objava](https://github.com/wsj-br/transrewrt/releases) (`x64` za uobičajena računala, `arm64` za mnoge ARM uređaje, uključujući Raspberry Pi 4+), zatim:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Unesite svoje API ključeve u **Postavke → API**. Morate konfigurirati barem jednog davatelja usluga; OpenRouter je čest izbor za besplatne modele.

Na Debian/Ubuntu sustavima možda ćete prvo morati instalirati dodatne ovisnosti:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Detalje potražite u poglavlju [Instalacija → Linux](#linux-electron).

<br/>

> ℹ️ **NAPOMENA**<br/>

> Trenutačno, macOS nije podržan. Transrewrt je dostupan za Windows, Linux i Docker.

<br/>

Kada se aplikacija pokrene, pogledajte **[vodič za korisnike](USER-GUIDE.hr.md)** kako biste naučili prevoditi, prepisivati i transformirati tekst, upravljati upitima i konfigurirati modele.

<br/><br/>

<a id="installation"></a>

## Instalacija

<a id="windows-electron"></a>

### Windows (Electron)

- Preuzmite najnoviji instalacijski paket s [izdanja](https://github.com/wsj-br/transrewrt/releases).
- Pokrenite `.exe` datoteku i slijedite upute instalacije.
- Nakon prvog pokretanja: pokrenite aplikaciju iz izbornika Start ili prečaca na radnoj površini.

<br/>

> ℹ️ **NAPOMENA**<br/>
> Windows može prikazati jedno od ovih upozorenja o sigurnosti (normalno za nepotpisane/aplikacije neovisnih autora):
>   - **Kontrola korisničkog računa (UAC)**: "Želite li dopustiti ovoj aplikaciji nepoznatog izdavača da unese promjene na vašem uređaju?" → Kliknite **Da**.
>   - **Microsoft Defender SmartScreen**: "Windows je zaštitio vaše računalo" → Kliknite **Više informacija** → **Ipak pokreni**.
>
> Ovo se događa jer aplikacija nije potpisana od strane Microsofta ili glavnog izdavača — aplikacija je sigurna ako ste je preuzeli s naših službenih izdanja na GitHubu
> (provjerite SHA256 kontrolnu sumu navedenu u nastavku).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- Preuzmite odgovarajuću `.AppImage` datoteku (`x64` ili `arm64`) s [Releases](https://github.com/wsj-br/transrewrt/releases).
- Pokrenite: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` na x86_64/amd64, odnosno koristite naziv datoteke `...-arm64.AppImage` na ARM64.
- Dodatne ovisnosti (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Više informacija potražite u [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/>

<a id="docker"></a>

### Docker

- Preuzimanje: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Postavite barem jedan ključ davatelja usluga putem okoline (npr. `OPENROUTER_API_KEY` za OpenRouter). Prosljedite varijable s `-e` ili koristeći `docker compose` / `.env` kako tajne ne bi bile uklesane u sliku.
- Ključevi davatelja usluga se **ne unose** putem web sučelja; poslužitelj ih čita iz okoline.

Primjer – imenovani volumen za trajnost (ključ za OpenRouter preko varijable okoline):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

ili, ako želite koristiti Docker Compose, upotrijebite:

```
# preuzmite datoteku za sastavljanje
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# uredite datoteku kako biste dodali API_KEYS i prilagodili vremensku zonu (TZ)
vi transrewrt.yml
# pokrenite spremnik
docker compose -f transrewrt.yml up -d

Pogledajte [Konfiguraciju](#configuration-and-environment) za sve varijable okoline, kao što su `PORT`, `CONFIG_PATH`, `TZ` i ključevi za LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>

### Postavljanje vremenske zone

Datum i vrijeme u korisničkom sučelju aplikacije prate **preglednikovu** lokalizaciju i vremensku zonu. Za **poslužiteljsko** ponašanje (prijavljivanje i slično), kontejner koristi varijablu okoline `TZ`. Zadana vrijednost je `TZ=Europe/London`.

Kako biste koristili drugu vremensku zonu, postavite `TZ` u vašu datoteku Compose, na primjer:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Ili je proslijedite prilikom pokretanja kontejnera (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Na mnogim Linux hostovima možete kopirati naziv vremenske zone sustava ovako:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Popis ispravnih naziva vremenskih zona održava se u bazi podataka [tz baze](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedija).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Dobivanje OpenRouter API ključa

Transrewrt podržava više davatelja umjetne inteligencije. [OpenRouter](https://openrouter.ai) je popularan izbor jer kumulira mnoge modele pod jednim ključem i nudi besplatne modele.

1. Registrirajte se ili se prijavite na [openrouter.ai](https://openrouter.ai).
2. Otvorite stranicu [Keys](https://openrouter.ai/keys) i stvorite novi ključ (dodijelite mu ime i po želji postavite ograničenje kredita). Možete koristiti besplatne modele bez dodavanja kredita.
3. **Računalo (Electron):** zalijepite ključeve u **Postavke → API**. **Docker:** postavite varijable okruženja poput `OPENROUTER_API_KEY` (pogledajte [Brzi početak](#quick-start)).

Nemojte koristiti OpenRouterov model **Body Builder** ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) za prevođenje, prepisivanje ili transformaciju: taj model vraća JSON terete zahtjeva, a ne gotov tekst za te zadatke. Pogledajte [Postavke → Modeli](USER-GUIDE.hr.md#models) u korisničkom vodiču.

Možete koristiti i druge davatelje usluga (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ili pokrenuti modele lokalno pomoću [Ollame](https://ollama.com). Potpun popis podržanih davatelja i varijabli okoline dostupan je u odjeljku [Konfiguracija](#configuration-and-environment).

> ⚠️ **UPOZORENJE**<br/>
> Ako koristite Ollamu s drugog uređaja, kontejnera ili usluge, ne zaboravite konfigurirati Ollamu tako da dozvoli vanjske veze (ne samo localhost).

Za informacije o ograničenjima, BYOK-u i drugome, pogledajte [OpenRouter autentifikaciju](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>

## Konfiguracija i okolina

**Lokacije konfiguracijskih datoteka**

| Uređivanje         | Lokacija konfiguracije                             |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (koristite volume za trajnost) |

<br/>

**Varijable okoline** (samo za web/Docker; Electron koristi lokalnu konfiguracijsku datoteku)

| Varijabla         | Zadano                 | Opis |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Vrata na kojima sluša poslužitelj |
| `CONFIG_PATH`    | `/app/data/config.json` | Put do konfiguracijske datoteke |
| `TZ`             | `Europe/London`         | IANA vremenska zona za vrijeme na poslužitelju (zapisi itd.); korisnički sučelje i dalje prati preglednik. Pogledajte [Docker → vremenska zona](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(prazno)*               | OpenRouter API ključ |
| `OPENAI_API_KEY`     | *(prazno)*               | OpenAI API ključ |
| `CEREBRAS_API_KEY`   | *(prazno)*               | Cerebras API ključ |
| `ANTHROPIC_API_KEY`  | *(prazno)*               | Anthropic API ključ |
| `GOOGLE_API_KEY`     | *(prazno)*               | Google Gemini API ključ |
| `DEEPSEEK_API_KEY`   | *(prazno)*               | DeepSeek API ključ |
| `GROQ_API_KEY`       | *(prazno)*               | Groq API ključ |
| `MISTRAL_API_KEY`    | *(prazno)*               | Mistral API ključ |
| `OLLAMA_URL`     | *(prazno)*               | Osnovni URL Ollame (npr. `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(prazno)*               | xAI API ključ |

Konfigurirajte samo davatelje usluga koje koristite. Identifikatori modela imaju imenski prostor (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, itd.).

**Prikaz troškova:** OpenRouter vraća točne naplaćene troškove kad god je to moguće. Ostali davatelji usluga koriste **procijenjene** troškove prema javnim cijenama modela OpenRoutera kada je dostupan ključ OpenRouter; bez njega, troškovi koji nisu OpenRouter mogu se prikazati kao `0`. Procjene nisu računi.

<br/>

**Podaci i trajnost:** Za Docker, pridružite volumen na `/app/data` kako bi `config.json` i baza podataka SQLite ostali sačuvani i nakon ponovnog pokretanja spremnika. Bez volumena, svi podaci se gube kada se spremnik zaustavi.

**Programeri:** Nakon dohvaćanja promjena koje zamjenjuju staru konfiguraciju s jednim ključem, obnovite ili spojite `data/config.json` s novim zadanom strukturom iz `src/config-defaults/config_default.json` ako vaša lokalna datoteka još uvijek koristi uklonjena polja (`api_key`, `api_url`, proxy opcije).

<br/>

**Web autentifikacija:**

- Zadani administrator: `admin` / `transrewrt26`.
- Upravljanje korisnicima u **Postavke → Korisnici**.

- Ponovno postavljanje lozinke: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (iz izvornog koda: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **UPOZORENJE**<br/>
> Odmah promijenite zadanu administratorsku lozinku na svakom hostu koji je dostupan putem mreže.

<br/>

Osnovne postavke (font, modeli, jezici itd.) dostupne su u postavkama aplikacije.

<br/><br/>

<a id="development-and-architecture"></a>

## Razvoj i arhitektura

- **Razvoj:** Postavljanje, kompilacija, testiranje i objavljivanje (Electron, Web, Docker) - pogledajte **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arhitektura i pregled sustava:** Struktura mapa, tehnološki izbor, odluke dizajna - pogledajte **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## Prijavljivanje problema

Otvorite problem na [GitHubu](https://github.com/wsj-br/transrewrt/issues). Navedite vašu platformu (Windows / Linux / Docker) i verziju aplikacije (prikazana u dijalogu O programu ili na stranici Objave).

<br/><br/>

<a id="disclaimer"></a>

## Odricanje odgovornosti

Imena proizvoda i ikone pripadaju njihovim vlasnicima i koriste se isključivo u svrhu identifikacije. Ovaj softver nije povezan niti odobren od strane bilo koje od navedenih marki.

<br/><br/>

<a id="license"></a>

## Licenca

Autorsko pravo © 2026. Waldemar Scudeller Jr.

[Apache licenca 2.0](LICENSE)