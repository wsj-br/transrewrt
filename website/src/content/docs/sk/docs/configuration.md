---
title: Konfigurácia
description: >-
  Umiestnenia konfiguračných súborov, premenné prostredia Docker, režim súkromia
  a webová autentifikácia.
---



## Umiestnenia konfiguračných súborov

| Nasadenie | Priečinok s dátami |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/` (na trvalé uloženie použite zväzok) |

Priečinok s dátami obsahuje všetko, čo stojí za zálohovanie:

- `config.json` — nastavenia a (desktopové) šifrované API kľúče
- `state.json` — naposledy použité jazyky, model a stav zobrazenia
- `presets.json` — katalóg predvolieb Easy-mode v cache
- `transrewrt.db` — databáza SQLite s históriou, nákladmi, výzvami, glosárom a (webovými) používateľmi

Prenosnú zálohu ZIP môžete vytvoriť aj z aplikácie – pozrite si [Nastavenia → Všeobecné nastavenia](/docs/settings/#general-settings).

## Trvalosť dát (Docker)

Pripojte zväzok na `/app/data`, aby konfiguračné súbory a databáza SQLite (pozrite si [Umiestnenia konfiguračných súborov](#config-file-locations)) prežili reštarty kontajnera. Bez zväzku sa dáta stratia po zastavení kontajnera.

## Premenné prostredia (web / Docker)

Electron používa lokálny konfiguračný súbor. Len pre webový/Docker server:

| Premenná | Popis |
| --- | --- |
| `PORT` | Port, na ktorom server počúva (predvolené `5000`) |
| `CONFIG_PATH` | Cesta ku konfiguračnému súboru (predvolené `/app/data/config.json`) |
| `TZ` | Časové pásmo pre čas na strane servera (predvolené `Europe/London`) |
| `HISTORY_DISABLED` | Vynútiť vypnutie histórie vykonávania (`true` / `1`) |
| `OPENROUTER_API_KEY` | API kľúč OpenRouter |
| `OPENAI_API_KEY` | API kľúč OpenAI |
| `CEREBRAS_API_KEY` | API kľúč Cerebras |
| `ANTHROPIC_API_KEY` | API kľúč Anthropic |
| `GOOGLE_API_KEY` | API kľúč Google Gemini |
| `DEEPSEEK_API_KEY` | DeepSeek API kľúč |
| `GROQ_API_KEY` | Groq API kľúč |
| `MISTRAL_API_KEY` | Mistral API kľúč |
| `LOCAL_LLM_URL` | Úplná základná adresa URL API kompatibilná s OpenAI pre lokálny server vrátane cesty (napríklad Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | xAI API kľúč |
| `NVIDIA_API_KEY` | NVIDIA API kľúč |
| `ALIBABA_API_KEY` | Alibaba Cloud (DashScope) API kľúč |
| `APIFUN_API_KEY` | apikey.fun API kľúč |
| `CUSTOM_PROVIDER_NAME` | Zobrazovaný názov pre vlastného poskytovateľa kompatibilného s OpenAI |
| `CUSTOM_PROVIDER_URL` | Základná adresa URL pre vlastného poskytovateľa kompatibilného s OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | API kľúč pre vlastného poskytovateľa |

Všetky tri premenné `CUSTOM_PROVIDER_*` sú povinné pri použití vlastného koncového bodu. Modely sa zobrazujú v režime **Rozšírené** ako `{providerName}/…`.

## Premenné prostredia (desktop)

| Premenná | Popis |
| --- | --- |
| `TRANSREWRT_DISABLE_GPU` | Nastavte na `1` pre vypnutie hardvérovej akcelerácie (užitočné, keď Chromium tlačí chyby GPU / EGL na Linuxe) |
| `HISTORY_DISABLED` | Vynútiť vypnutie histórie vykonávania (`true` / `1`) – pozrite si [Režim súkromia](#privacy-mode) |

## Režim súkromia

Nastavte `HISTORY_DISABLED` na `true` alebo `1` v procese webového/Docker servera a/alebo v hlavnom procese Electronu, aby ste vynútili vypnutie histórie bez ohľadu na `config.json` alebo preferencie jednotlivých používateľov. Tým sa zakáže ukladanie histórie vstupov/výstupov, uzamkne sa **Nastavenia → Všeobecné nastavenia → História** a zablokujú sa API súvisiace s históriou.

## Webová autentifikácia

- Predvolený správca: `admin` / `transrewrt26`
- Spravujte používateľov, časový limit relácie a zrušenie relácie v časti **Nastavenia → Používatelia** — pozrite si [Nastavenia](/docs/settings/#users)
- Každý prihlásený používateľ si môže zmeniť svoje heslo alebo sa odhlásiť z používateľského menu v spodnej časti bočného panela
- Obnovenie hesla:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Okamžite zmeňte predvolené heslo správcu na akomkoľvek hostiteľovi dostupnom v sieti.
:::

:::caution
Server komunikuje prostredníctvom nešifrovaného HTTP. Ak ho vystavíte mimo localhostu alebo dôveryhodnej siete, umiestnite ho za reverzný proxy server s HTTPS (napríklad Caddy, nginx alebo Traefik), aby sa heslá a text neposielali v nešifrovanej podobe.
:::

## Zobrazenie nákladov

OpenRouter vracia presné fakturované náklady, ak sú k dispozícii. Ostatní poskytovatelia používajú **odhadované** náklady z verejných cien modelov OpenRouter, ak je k dispozícii kľúč OpenRouter. Odhady nie sú faktúry.

Pre používateľské rozhranie nastavení (písma, modely, história, zálohy) pozrite [Nastavenia](/docs/settings/).
