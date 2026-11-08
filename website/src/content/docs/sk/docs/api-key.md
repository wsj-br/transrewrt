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

1. Zaregistrujte sa alebo sa prihláste na webovej stránke poskytovateľa. V časti **Nastavenia → Konfigurácia API** v aplikácii Transrewrt má každý poskytovateľ odkaz **Otvoriť webovú stránku poskytovateľa**, ktorý vás presmeruje na správne miesto.
2. Nájdite stránku **Kľúče API** (niekedy v nastaveniach účtu, ovládacieho panela alebo vývojára) a vytvorte nový kľúč. Niektorí poskytovatelia vás požiadajú o pomenovanie kľúča alebo nastavenie limitu výdavkov – obe sú voliteľné.
3. Skopírujte kľúč. Je to dlhý reťazec písmen a číslic, často začínajúci niečím ako `sk-`.

:::note
S kľúčom API zaobchádzajte ako s heslom: nezdieľajte ho, nezverejňujte ho ani ho nikomu neposielajte. Ak kľúč unikne, odstráňte ho na webovej lokalite poskytovateľa a vytvorte nový.
:::

## Krok 3 – Pridajte a otestujte kľúč (desktop)

1. V aplikácii Transrewrt otvorte **Nastavenia → Konfigurácia API**.
2. Vložte kľúč do poľa pre vášho poskytovateľa (napríklad **Kľúč API Google Gemini**) a uložte ho.
3. Kliknutím na **Testovať** vedľa poľa potvrďte, že kľúč funguje.

Akonáhle test uspeje, ste pripravení – vyberte si tohto poskytovateľa na hlavnej obrazovke a začnite prekladať.

## Používanie lokálneho modelu namiesto toho (bez kľúča API)

Modely môžete spúšťať na vlastnom počítači pomocou Ollama, LM Studio, llama.cpp alebo iného servera kompatibilného s OpenAI (napríklad `google/gemma-4-e2b` cez LM Studio). Nič neopustí váš počítač a nie je potrebný žiadny kľúč API.

Ak chcete pripojiť jeden, nastavte Základnú URL adresu lokálneho LLM na úplnú základnú adresu API vrátane cesty – napríklad `http://localhost:11434/v1`. Na počítači to nastavte v časti **Nastavenia → Konfigurácia API**; v Docker namiesto toho nastavte premennú prostredia `LOCAL_LLM_URL`.

:::tip
Ak používate lokálny server LLM z iného zariadenia alebo kontajnera, nakonfigurujte ho tak, aby umožňoval externé pripojenia (nie iba localhost).
:::

## Docker / web

Ak používate Transrewrt v prehliadači, kľúče spravuje ten, kto prevádzkuje server, nie sú zadávané do používateľského rozhrania prehliadača. Administrátor nastavuje kľúče poskytovateľa ako **premenné prostredia** na serveri (napríklad `PROVIDER_API_KEY`) – pozrite si [Configuration](/docs/configuration/).

## Kontrolný zoznam prvého spustenia

1. Otvorte aplikáciu a v prípade potreby nastavte **Jazyk rozhrania**.
2. Pridajte a otestujte aspoň jeden kľúč poskytovateľa – alebo nakonfigurujte lokálny model (počítač), alebo potvrďte, že server má kľúče prostredia (web).
3. V režime **Jednoduché** vyberte **Poskytovateľa** vo Všeobecných nastaveniach; v režime **Pokročilé** pridajte modely v časti **Nastavenia → Modely** – pozrite si [Nastavenia](/docs/settings/#general-settings) pre oba režimy.
4. Na karte **Preložiť** vyberte predvoľbu alebo model a spustite krátky test – pozrite si [Preložiť text](/docs/translate/).

## Ak niečo nefunguje

- **Test kľúča zlyhá**: skontrolujte, či bol kľúč skopírovaný celý (bez medzier pred alebo za) a či nebol odstránený alebo zakázaný na webovej stránke poskytovateľa.
- **Preklady zlyhajú s chybou kvóty alebo kreditu**: bezplatné úrovne majú denné alebo mesačné limity; počkajte, prejdite na iného bezplatného poskytovateľa alebo pridajte kredit.
- **V jednoduchom režime sa nezobrazuje žiadny poskytovateľ**: otvorte **Nastavenia → Konfigurácia API** a skontrolujte, či je nakonfigurovaný a otestovaný aspoň jeden kľúč (alebo URL lokálneho LLM).

Ďalšia pomoc: [Časté problémy](/docs/common-issues/).
