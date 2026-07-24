---
title: Kľúč API
description: >-
  Pripojte Transrewrt k vami zvolenému poskytovateľovi AI pridaním kľúča API,
  alebo namiesto toho použite lokálny model.
---



Transrewrt neobsahuje vlastnú AI – váš text posiela poskytovateľovi AI, ktorého si vyberiete. Na pripojenie poskytovateľa pridáte **kľúč API**: súkromný kód, vydaný poskytovateľom, ktorý funguje ako heslo pre jeho službu. Na začiatok potrebujete len **jedného** poskytovateľa a nemusíte platiť: niekoľko poskytovateľov ponúka bezplatné modely alebo bezplatné úrovne a modely môžete spúšťať aj na vlastnom počítači bez akéhokoľvek kľúča.

Medzi podporovaných poskytovateľov patria OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, akýkoľvek koncový bod kompatibilný s OpenAI a lokálne servery kompatibilné s OpenAI (Ollama, LM Studio, llama.cpp a podobné).

## Krok 1 – Vyberte si poskytovateľa

Funguje akýkoľvek podporovaný poskytovateľ. Ak si nie ste istí, ktorého si vybrať:

- **Bezplatne na začiatok**: OpenRouter, Google Gemini, Groq, Mistral, Cerebras a NVIDIA ponúkajú bezplatné modely alebo bezplatné úrovne.
- **Už máte účet?** Ak už používate OpenAI, Anthropic alebo iného podporovaného poskytovateľa, môžete jednoducho znova použiť tento účet.
- **Preferujete mať všetko na vlastnom počítači?** Úplne preskočte kľúč a namiesto toho použite [lokálny model](#using-a-local-model-instead-no-api-key).

## Krok 2 – Vytvorte kľúč API

Presné kroky sa mierne líšia v závislosti od poskytovateľa, ale vzor je všade rovnaký:

1. Zaregistrujte sa alebo sa prihláste na webovej stránke poskytovateľa. V Transrewrt v časti **Settings → API Config** má každý poskytovateľ odkaz **Open provider website**, ktorý vás presmeruje na správne miesto.
2. Nájdite stránku **API keys** (niekedy pod nastaveniami účtu, ovládacieho panela alebo vývojára) a vytvorte nový kľúč. Niektorí poskytovatelia vás požiadajú o pomenovanie kľúča alebo nastavenie limitu výdavkov – oboje je voliteľné.
3. Skopírujte kľúč. Je to dlhý reťazec písmen a číslic, často začínajúci niečím ako `sk-`.

:::caution
S kľúčom API zaobchádzajte ako s heslom: nezdieľajte ho, nezverejňujte ho ani ho nikomu neposielajte. Ak kľúč unikne, odstráňte ho na webovej stránke poskytovateľa a vytvorte nový.
:::

## Krok 3 – Pridajte a otestujte kľúč (desktop)

1. V Transrewrt otvorte **Settings → API Config**.
2. Vložte kľúč do poľa pre vášho poskytovateľa (napríklad **Google Gemini API key**) a uložte ho.
3. Kliknite na **Test** vedľa poľa, aby ste potvrdili, že kľúč funguje.

Akonáhle test uspeje, ste pripravení – vyberte si tohto poskytovateľa na hlavnej obrazovke a začnite prekladať.

:::caution
Vyhnite sa modelu **Body Builder** od OpenRouter (`openrouter/bodybuilder`) – vracia JSON požiadavky, nie dokončený text. Pozrite si [Settings → Models](/docs/settings/#models).
:::

## Používanie lokálneho modelu namiesto toho (bez kľúča API)

Modely môžete spúšťať na vlastnom počítači pomocou Ollama, LM Studio, llama.cpp alebo iného servera kompatibilného s OpenAI (napríklad `google/gemma-4-e2b` cez LM Studio). Nič neopustí váš počítač a nie je potrebný žiadny kľúč API.

Ak chcete pripojiť jeden, nastavte základnú URL lokálneho LLM na úplnú základnú URL API, vrátane cesty – napríklad `http://localhost:11434/v1`. Na desktope to nastavte v **Settings → API Config**; na Docker namiesto toho nastavte premennú prostredia `LOCAL_LLM_URL`.

:::caution
Ak používate lokálny server LLM z iného zariadenia alebo kontajnera, nakonfigurujte ho tak, aby umožňoval externé pripojenia (nie iba localhost).
:::

## Docker / web

Ak používate Transrewrt v prehliadači, kľúče spravuje ten, kto prevádzkuje server, nie sú zadávané do používateľského rozhrania prehliadača. Administrátor nastavuje kľúče poskytovateľa ako **premenné prostredia** na serveri (napríklad `PROVIDER_API_KEY`) – pozrite si [Configuration](/docs/configuration/).

## Kontrolný zoznam prvého spustenia

1. Otvorte aplikáciu a v prípade potreby nastavte **Interface language**.
2. Pridajte a otestujte aspoň jeden kľúč poskytovateľa – alebo nakonfigurujte lokálny model (desktop), alebo potvrďte, že server má kľúče prostredia (web).
3. V režime **Easy** vyberte **Provider** v General Settings; v režime **Advanced** pridajte modely pod **Settings → Models** – pozrite si [Settings](/docs/settings/#general-settings) pre oba režimy.
4. Na **Translate** vyberte predvoľbu alebo model a spustite krátky test – pozrite si [Translate text](/docs/translate/).

## Ak niečo nefunguje

- **Test kľúča zlyhá**: skontrolujte, či bol kľúč skopírovaný celý (bez medzier pred alebo za) a či nebol odstránený alebo zakázaný na webovej stránke poskytovateľa.
- **Preklady zlyhajú s chybou kvóty alebo kreditu**: bezplatné úrovne majú denné alebo mesačné limity; počkajte, prejdite na iného bezplatného poskytovateľa alebo pridajte kredit.
- **V jednoduchom režime sa nezobrazuje žiadny poskytovateľ**: otvorte **Nastavenia → Konfigurácia API** a skontrolujte, či je nakonfigurovaný a otestovaný aspoň jeden kľúč (alebo URL lokálneho LLM).

Ďalšia pomoc: [Časté problémy](/docs/common-issues/).
