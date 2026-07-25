---
title: Konfigurace
description: >-
  Umístění konfiguračních souborů, proměnné prostředí Docker, režim soukromí a
  webové ověřování.
---



## Umístění konfiguračních souborů

| Nasazení | Složka dat |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/` (pro trvalost použijte svazek) |

Datová složka obsahuje vše, co stojí za zálohování:

- `config.json` – nastavení a (desktopové) šifrované klíče API
- `state.json` – naposledy použité jazyky, model a stav zobrazení
- `presets.json` – katalog předvoleb Easy-mode v mezipaměti
- `transrewrt.db` – databáze SQLite s historií, náklady, výzvami, glosářem a (webovými) uživateli

Přenosnou záložní složku ZIP můžete také vytvořit z aplikace – viz [Nastavení → Obecná nastavení](/docs/settings/#general-settings).

## Trvalost dat (Docker)

Připojte svazek na `/app/data`, aby konfigurační soubory a databáze SQLite (viz [Umístění konfiguračních souborů](#config-file-locations)) přežily restarty kontejneru. Bez svazku se data ztratí, když se kontejner zastaví.

## Proměnné prostředí (web / Docker)

Electron používá lokální konfigurační soubor. Pouze pro webový/Docker server:

| Proměnná | Popis |
| --- | --- |
| `PORT` | Port pro naslouchání serveru (výchozí `5000`) |
| `CONFIG_PATH` | Cesta ke konfiguračnímu souboru (výchozí `/app/data/config.json`) |
| `TZ` | Časové pásmo pro čas na straně serveru (výchozí `Europe/London`) |
| `HISTORY_DISABLED` | Vynutit vypnutí historie provádění (`true` / `1`) |
| `OPENROUTER_API_KEY` | Klíč API OpenRouter |
| `OPENAI_API_KEY` | Klíč API OpenAI |
| `CEREBRAS_API_KEY` | Klíč API Cerebras |
| `ANTHROPIC_API_KEY` | Klíč API Anthropic |
| `GOOGLE_API_KEY` | Klíč API Google Gemini |
| `DEEPSEEK_API_KEY` | DeepSeek API klíč |
| `GROQ_API_KEY` | Groq API klíč |
| `MISTRAL_API_KEY` | Mistral API klíč |
| `LOCAL_LLM_URL` | Úplná základní adresa URL rozhraní API kompatibilního s OpenAI pro místní server, včetně cesty (například Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | xAI API klíč |
| `NVIDIA_API_KEY` | NVIDIA API klíč |
| `ALIBABA_API_KEY` | Alibaba Cloud (DashScope) API klíč |
| `APIFUN_API_KEY` | apikey.fun API klíč |
| `CUSTOM_PROVIDER_NAME` | Zobrazovaný název pro vlastního poskytovatele kompatibilního s OpenAI |
| `CUSTOM_PROVIDER_URL` | Základní adresa URL pro vlastního poskytovatele kompatibilního s OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | API klíč pro vlastního poskytovatele |

Všechny tři proměnné `CUSTOM_PROVIDER_*` jsou vyžadovány při použití vlastního koncového bodu. Modely se zobrazují v režimu **Advanced** jako `{providerName}/…`.

## Proměnné prostředí (desktop)

| Proměnná | Popis |
| --- | --- |
| `TRANSREWRT_DISABLE_GPU` | Nastavte na `1` pro zakázání hardwarové akcelerace (užitečné, když Chromium tiskne chyby GPU / EGL na Linuxu) |
| `HISTORY_DISABLED` | Vynucené vypnutí historie spuštění (`true` / `1`) – viz [Režim soukromí](#privacy-mode) |

## Režim soukromí

Nastavte `HISTORY_DISABLED` na `true` nebo `1` v procesu webového/Docker serveru a/nebo v hlavním procesu Electron, abyste vynutili vypnutí historie bez ohledu na `config.json` nebo uživatelské preference. Tím se zakáže ukládání historie vstupů/výstupů, uzamkne se **Nastavení → Obecná nastavení → Historie** a zablokují se API související s historií.

## Webová autentizace

- Výchozí administrátor: `admin` / `transrewrt26`
- Správa uživatelů, časového limitu relace a zrušení relace v **Nastavení → Uživatelé** – viz [Nastavení](/docs/settings/#users)
- Každý přihlášený uživatel si může změnit své heslo nebo se odhlásit z uživatelské nabídky ve spodní části postranního panelu
- Resetování hesla:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Okamžitě změňte výchozí heslo administrátora na jakémkoli síťově dostupném hostiteli.
:::

:::caution
Server komunikuje pomocí prostého HTTP. Pokud jej vystavíte mimo localhost nebo důvěryhodnou síť, umístěte jej za reverzní proxy s HTTPS (například Caddy, nginx nebo Traefik), aby hesla a text nebyly odesílány v nešifrované podobě.
:::

## Zobrazení nákladů

OpenRouter vrací přesné účtované náklady, pokud je to možné. Ostatní poskytovatelé používají **odhadované** náklady z veřejných cen modelů OpenRouter, pokud je k dispozici klíč OpenRouter. Odhady nejsou faktury.

Pro uživatelské rozhraní nastavení (písma, modely, historie, zálohy) viz [Nastavení](/docs/settings/).
