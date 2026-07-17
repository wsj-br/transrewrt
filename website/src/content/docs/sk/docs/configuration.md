---
title: Konfigurácia
description: >-
  Umiestnenia konfiguračných súborov, premenné prostredia Docker, režim súkromia
  a webová autentifikácia.
translation_last_updated: '2026-07-17T14:59:02.936Z'
source_file_mtime: '2026-07-17T14:43:44.727Z'
source_file_hash: 8c3b2c00eddcee7693d66c5f5955c2d2186e55de630886446764bc6b798f05b5
translation_language: sk
source_file_path: src/content/docs/docs/configuration.md
translation_models:
  - google/gemini-2.5-flash
---



## Umiestnenia konfiguračných súborov

| Nasadenie | Umiestnenie konfigurácie |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (na trvalé uloženie použite zväzok) |

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
| `DEEPSEEK_API_KEY` | API kľúč DeepSeek |
| `GROQ_API_KEY` | API kľúč Groq |
| `MISTRAL_API_KEY` | API kľúč Mistral |
| `LOCAL_LLM_URL` | Úplná základná adresa URL rozhrania API kompatibilného s OpenAI pre lokálny server (zahrňte cestu, napr. Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | Kľúč API xAI |
| `NVIDIA_API_KEY` | Kľúč API NVIDIA |
| `ALIBABA_API_KEY` | Kľúč API Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | Kľúč API apikey.fun |
| `CUSTOM_PROVIDER_NAME` | Zobrazovaný názov pre vlastného poskytovateľa kompatibilného s OpenAI |
| `CUSTOM_PROVIDER_URL` | Základná URL adresa pre vlastného poskytovateľa kompatibilného s OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | Kľúč API pre vlastného poskytovateľa |

Všetky tri premenné `CUSTOM_PROVIDER_*` sú povinné pri použití vlastného koncového bodu. Modely sa zobrazujú v režime **Rozšírené** ako `{providerName}/…`.

## Režim súkromia

Nastavte `HISTORY_DISABLED` na `true` alebo `1` v procese webového/Docker servera a/alebo v hlavnom procese Electron, aby sa vynútilo vypnutie histórie bez ohľadu na `config.json` alebo preferencie jednotlivých používateľov. Tým sa zakáže ukladanie histórie vstupov/výstupov, uzamkne sa **Nastavenia → Všeobecné nastavenia → História** a zablokujú sa rozhrania API súvisiace s históriou.

## Trvalosť dát (Docker)

Pripojte zväzok na `/app/data`, aby `config.json` a databáza SQLite prežili reštarty kontajnera. Bez zväzku sa dáta stratia po zastavení kontajnera.

## Webové overovanie

- Predvolený správca: `admin` / `transrewrt26`
- Správa používateľov v **Nastavenia → Používatelia**
- Resetovanie hesla:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Okamžite zmeňte predvolené heslo správcu na akomkoľvek hostiteľovi prístupnom zo siete.
:::

## Zobrazenie nákladov

OpenRouter vracia presné účtované náklady, ak je to relevantné. Ostatní poskytovatelia používajú **odhadované** náklady z verejných cien modelov OpenRouter, ak je k dispozícii kľúč OpenRouter. Odhady nie sú faktúry.

Používateľské rozhranie nastavení (písma, modely, história, zálohy) nájdete v časti [Nastavenia](/docs/settings/).
