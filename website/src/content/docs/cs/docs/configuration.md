---
title: Konfigurace
description: >-
  Umístění konfiguračních souborů, proměnné prostředí Docker, režim soukromí a
  webová autentizace.
---



## Umístění konfiguračních souborů

| Nasazení | Umístění konfigurace |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (pro trvalost použijte svazek) |

## Proměnné prostředí (web / Docker)

Electron používá lokální konfigurační soubor. Pouze pro webový/Docker server:

| Proměnná | Popis |
| --- | --- |
| `PORT` | Port, na kterém server naslouchá (výchozí `5000`) |
| `CONFIG_PATH` | Cesta ke konfiguračnímu souboru (výchozí `/app/data/config.json`) |
| `TZ` | Časové pásmo pro čas na straně serveru (výchozí `Europe/London`) |
| `HISTORY_DISABLED` | Vynutit vypnutí historie spuštění (`true` / `1`) |
| `OPENROUTER_API_KEY` | Klíč API OpenRouter |
| `OPENAI_API_KEY` | Klíč API OpenAI |
| `CEREBRAS_API_KEY` | Klíč API Cerebras |
| `ANTHROPIC_API_KEY` | Klíč API Anthropic |
| `GOOGLE_API_KEY` | Klíč API Google Gemini |
| `DEEPSEEK_API_KEY` | Klíč API DeepSeek |
| `GROQ_API_KEY` | Klíč API Groq |
| `MISTRAL_API_KEY` | Klíč API Mistral |
| `LOCAL_LLM_URL` | Úplná základní adresa URL rozhraní API kompatibilního s OpenAI pro lokální server (zahrňte cestu, např. Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | Klíč API xAI |
| `NVIDIA_API_KEY` | Klíč API NVIDIA |
| `ALIBABA_API_KEY` | Klíč API Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | Klíč API apikey.fun |
| `CUSTOM_PROVIDER_NAME` | Zobrazovaný název pro vlastního poskytovatele kompatibilního s OpenAI |
| `CUSTOM_PROVIDER_URL` | Základní URL pro vlastního poskytovatele kompatibilního s OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | Klíč API pro vlastního poskytovatele |

Všechny tři proměnné `CUSTOM_PROVIDER_*` jsou vyžadovány při použití vlastního koncového bodu. Modely se zobrazují v režimu **Pokročilé** jako `{providerName}/…`.

## Režim soukromí

Nastavte `HISTORY_DISABLED` na `true` nebo `1` v procesu webového/Docker serveru a/nebo v hlavním procesu Electron, abyste vynutili vypnutí historie bez ohledu na `config.json` nebo preference jednotlivých uživatelů. Tím se zakáže ukládání historie vstupů/výstupů, uzamkne se **Nastavení → Obecná nastavení → Historie** a zablokují se API související s historií.

## Trvalost dat (Docker)

Připojte svazek na `/app/data`, aby `config.json` a databáze SQLite přežily restarty kontejneru. Bez svazku se data ztratí, když se kontejner zastaví.

## Webové ověřování

- Výchozí administrátor: `admin` / `transrewrt26`
- Správa uživatelů v **Nastavení → Uživatelé**
- Resetování hesla:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Okamžitě změňte výchozí heslo administrátora na jakémkoli síťově dostupném hostiteli.
:::

## Zobrazení nákladů

OpenRouter vrací přesné účtované náklady, pokud je to možné. Ostatní poskytovatelé používají **odhadované** náklady z veřejných cen modelů OpenRouter, pokud je k dispozici klíč OpenRouter. Odhady nejsou faktury.

Nastavení uživatelského rozhraní (písma, modely, historie, zálohy) naleznete v části [Nastavení](/docs/settings/).
