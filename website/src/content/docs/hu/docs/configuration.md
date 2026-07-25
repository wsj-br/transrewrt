---
title: Konfiguráció
description: >-
  Konfigurációs fájl helyei, Docker környezeti változók, adatvédelmi mód és
  webes hitelesítés.
---



## Konfigurációs fájl helyei

| Telepítés | Adatmappa |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/` (kötet használata az állandósághoz) |

Az adatmappa mindent tartalmaz, amit érdemes biztonsági másolatot készíteni róla:

- `config.json` – beállítások és (asztali) titkosított API-kulcsok
- `state.json` – utoljára használt nyelvek, modell és nézetállapot
- `presets.json` – gyorsítótárazott Easy-mód előbeállítások katalógusa
- `transrewrt.db` – SQLite adatbázis előzményekkel, költségekkel, promptokkal, szószedettel és (webes) felhasználókkal

Hordozható biztonsági mentési ZIP-fájlt is létrehozhat az alkalmazásból – lásd: [Beállítások → Általános beállítások](/docs/settings/#general-settings).

## Adatmegőrzés (Docker)

Csatlakoztasson egy kötetet az `/app/data` útvonalra, hogy a konfigurációs fájlok és az SQLite adatbázis (lásd [Konfigurációs fájlok helye](#config-file-locations)) túléljék a tároló újraindítását. Kötet nélkül az adatok elvesznek, amikor a tároló leáll.

## Környezeti változók (web / Docker)

Az Electron a helyi konfigurációs fájlt használja. Csak a web/Docker szerverhez:

| Változó | Leírás |
| --- | --- |
| `PORT` | Szerver figyelési portja (alapértelmezett `5000`) |
| `CONFIG_PATH` | A konfigurációs fájl elérési útja (alapértelmezett `/app/data/config.json`) |
| `TZ` | Időzóna a szerveroldali időhöz (alapértelmezett `Europe/London`) |
| `HISTORY_DISABLED` | Végrehajtási előzmények kikapcsolása (`true` / `1`) |
| `OPENROUTER_API_KEY` | OpenRouter API kulcs |
| `OPENAI_API_KEY` | OpenAI API kulcs |
| `CEREBRAS_API_KEY` | Cerebras API kulcs |
| `ANTHROPIC_API_KEY` | Anthropic API kulcs |
| `GOOGLE_API_KEY` | Google Gemini API kulcs |
| `DEEPSEEK_API_KEY` | DeepSeek API kulcs |
| `GROQ_API_KEY` | Groq API kulcs |
| `MISTRAL_API_KEY` | Mistral API kulcs |
| `LOCAL_LLM_URL` | Teljes OpenAI-kompatibilis API alap URL egy helyi szerverhez, az elérési úttal együtt (például Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | xAI API kulcs |
| `NVIDIA_API_KEY` | NVIDIA API kulcs |
| `ALIBABA_API_KEY` | Alibaba Cloud (DashScope) API kulcs |
| `APIFUN_API_KEY` | apikey.fun API kulcs |
| `CUSTOM_PROVIDER_NAME` | Megjelenítési név egyéni OpenAI-kompatibilis szolgáltatóhoz |
| `CUSTOM_PROVIDER_URL` | Alap URL egyéni OpenAI-kompatibilis szolgáltatóhoz |
| `CUSTOM_PROVIDER_API_KEY` | API kulcs az egyéni szolgáltatóhoz |

Mindhárom `CUSTOM_PROVIDER_*` változó szükséges egyéni végpont használatakor. A modellek **Haladó** módban `{providerName}/…` néven jelennek meg.

## Környezeti változók (asztali)

| Változó | Leírás |
| --- | --- |
| `TRANSREWRT_DISABLE_GPU` | Állítsa `1` értékre a hardveres gyorsítás letiltásához (hasznos, ha a Chromium GPU / EGL hibákat jelez Linuxon) |
| `HISTORY_DISABLED` | Végrehajtási előzmények kikényszerítése (`true` / `1`) – lásd [Adatvédelmi mód](#privacy-mode) |

## Adatvédelmi mód

Állítsa az `HISTORY_DISABLED` változót `true` vagy `1` értékre a web/Docker szerverfolyamaton és/vagy az Electron főfolyamaton, hogy az előzményeket kikényszerítse, függetlenül az `config.json` beállítástól vagy a felhasználói preferenciáktól. Ez letiltja a bemeneti/kimeneti előzmények tárolását, zárolja a **Beállítások → Általános beállítások → Előzmények** menüpontot, és blokkolja az előzményekkel kapcsolatos API-kat.

## Webes hitelesítés

- Alapértelmezett admin: `admin` / `transrewrt26`
- Felhasználók, munkamenet-időtúllépés és munkamenet-visszavonás kezelése a **Beállítások → Felhasználók** menüpontban – lásd: [Beállítások](/docs/settings/#users)
- Minden bejelentkezett felhasználó megváltoztathatja saját jelszavát, vagy kijelentkezhet az oldalsáv alján található felhasználói menüből
- Jelszó visszaállítása:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Azonnal változtassa meg az alapértelmezett admin jelszót bármely hálózaton elérhető gazdagépen.
:::

:::caution
A szerver egyszerű HTTP-n kommunikál. Ha a localhoston vagy egy megbízható hálózaton kívülre is elérhetővé teszi, helyezze HTTPS-t használó fordított proxy mögé (például Caddy, nginx vagy Traefik), hogy a jelszavak és a szövegek ne titkosítatlanul kerüljenek elküldésre.
:::

## Költségmegjelenítés

Az OpenRouter a pontos számlázott költséget adja vissza, ha alkalmazható. Más szolgáltatók az OpenRouter nyilvános modellárazásából származó **becsült** költséget használják, ha OpenRouter kulcs elérhető. A becslések nem számlák.

A Beállítások felhasználói felületéhez (betűtípusok, modellek, előzmények, biztonsági mentések) lásd: [Beállítások](/docs/settings/).
