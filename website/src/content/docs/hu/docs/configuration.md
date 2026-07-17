---
title: Konfiguráció
description: >-
  Konfigurációs fájl helyei, Docker környezeti változók, adatvédelmi mód és
  webes hitelesítés.
---



## Konfigurációs fájl helyei

| Telepítés | Konfiguráció helye |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (kötet használata az állandósításhoz) |

## Környezeti változók (web / Docker)

Az Electron a helyi konfigurációs fájlt használja. Csak a web/Docker szerverhez:

| Változó | Leírás |
| --- | --- |
| `PORT` | Szerver figyelési portja (alapértelmezett `5000`) |
| `CONFIG_PATH` | A konfigurációs fájl elérési útja (alapértelmezett `/app/data/config.json`) |
| `TZ` | Időzóna a szerveroldali időhöz (alapértelmezett `Europe/London`) |
| `HISTORY_DISABLED` | Végrehajtási előzmények kikapcsolásának kényszerítése (`true` / `1`) |
| `OPENROUTER_API_KEY` | OpenRouter API kulcs |
| `OPENAI_API_KEY` | OpenAI API kulcs |
| `CEREBRAS_API_KEY` | Cerebras API kulcs |
| `ANTHROPIC_API_KEY` | Anthropic API kulcs |
| `GOOGLE_API_KEY` | Google Gemini API kulcs |
| `DEEPSEEK_API_KEY` | DeepSeek API kulcs |
| `GROQ_API_KEY` | Groq API kulcs |
| `MISTRAL_API_KEY` | Mistral API kulcs |
| `LOCAL_LLM_URL` | Helyi szerver teljes OpenAI-kompatibilis API alap URL-je (tartalmazza az elérési utat, pl. Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | xAI API kulcs |
| `NVIDIA_API_KEY` | NVIDIA API kulcs |
| `ALIBABA_API_KEY` | Alibaba Cloud (DashScope) API kulcs |
| `APIFUN_API_KEY` | apikey.fun API kulcs |
| `CUSTOM_PROVIDER_NAME` | Megjelenítendő név egyéni, OpenAI-kompatibilis szolgáltatóhoz |
| `CUSTOM_PROVIDER_URL` | Alap URL egyéni, OpenAI-kompatibilis szolgáltatóhoz |
| `CUSTOM_PROVIDER_API_KEY` | API kulcs az egyéni szolgáltatóhoz |

Mindhárom `CUSTOM_PROVIDER_*` változó szükséges egyéni végpont használatakor. A modellek **Haladó** módban `{providerName}/…` néven jelennek meg.

## Adatvédelmi mód

Állítsa be a `HISTORY_DISABLED` értéket `true` vagy `1` értékre a web/Docker szerverfolyamaton és/vagy az Electron főfolyamaton, hogy a történeti adatok tárolása kikapcsolásra kerüljön, függetlenül a `config.json` beállítástól vagy a felhasználónkénti preferenciáktól. Ez letiltja a bemeneti/kimeneti történet tárolását, zárolja a **Beállítások → Általános beállítások → Előzmények** menüpontot, és blokkolja az előzményekkel kapcsolatos API-kat.

## Adatmegőrzés (Docker)

Csatlakoztasson egy kötetet a `/app/data` helyre, hogy a `config.json` és az SQLite adatbázis túlélje a tároló újraindítását. Kötet nélkül az adatok elvesznek, amikor a tároló leáll.

## Webes hitelesítés

- Alapértelmezett admin: `admin` / `transrewrt26`
- Felhasználók kezelése a **Beállítások → Felhasználók** menüpontban
- Jelszó visszaállítása:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Azonnal változtassa meg az alapértelmezett admin jelszót bármely hálózaton elérhető gazdagépen.
:::

## Költségmegjelenítés

Az OpenRouter pontosan számlázott költséget ad vissza, ha alkalmazható. Más szolgáltatók **becsült** költséget használnak az OpenRouter nyilvános modellárai alapján, ha elérhető OpenRouter kulcs. A becslések nem számlák.

A beállítások felhasználói felületéhez (betűtípusok, modellek, előzmények, biztonsági mentések) lásd a [Beállítások](/docs/settings/) részt.
