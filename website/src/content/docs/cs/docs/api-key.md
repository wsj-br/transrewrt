---
title: Klíč API
description: >-
  Připojte Transrewrt k poskytovateli AI dle vašeho výběru přidáním klíče API,
  nebo místo toho použijte lokální model.
---



Transrewrt neobsahuje vlastní AI – odesílá váš text poskytovateli AI, kterého si vyberete. Pro připojení poskytovatele přidáte **klíč API**: soukromý kód, vydaný poskytovatelem, který funguje jako heslo pro jeho službu. K zahájení potřebujete pouze **jednoho** poskytovatele a nemusíte platit: několik poskytovatelů nabízí bezplatné modely nebo bezplatné úrovně a modely můžete také spouštět na svém vlastním počítači zcela bez klíče.

Mezi podporované poskytovatele patří OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, jakýkoli koncový bod kompatibilní s OpenAI a lokální servery kompatibilní s OpenAI (Ollama, LM Studio, llama.cpp a podobné).

## Krok 1 – Vyberte poskytovatele

Funguje jakýkoli podporovaný poskytovatel. Pokud si nejste jisti, kterého vybrat:

- **Zdarma na začátek**: OpenRouter, Google Gemini, Groq, Mistral, Cerebras a NVIDIA nabízejí bezplatné modely nebo bezplatné úrovně.
- **Už máte účet?** Pokud již používáte OpenAI, Anthropic nebo jiného podporovaného poskytovatele, můžete jednoduše znovu použít tento účet.
- **Dáváte přednost tomu, aby vše zůstalo na vašem vlastním počítači?** Přeskočte klíč úplně a místo toho použijte [lokální model](#using-a-local-model-instead-no-api-key).

## Krok 2 – Vytvořte klíč API

Přesné kroky se u jednotlivých poskytovatelů mírně liší, ale vzor je všude stejný:

1. Zaregistrujte se nebo se přihlaste na webových stránkách poskytovatele. V Transrewrtu v **Nastavení → Konfigurace API** má každý poskytovatel odkaz **Otevřít webové stránky poskytovatele**, který vás zavede na správné místo.
2. Najděte stránku **Klíče API** (někdy pod účtem, řídicím panelem nebo nastavením pro vývojáře) a vytvořte nový klíč. Někteří poskytovatelé vás požádají o pojmenování klíče nebo nastavení limitu útraty – obojí je volitelné.
3. Zkopírujte klíč. Jedná se o dlouhý řetězec písmen a čísel, často začínající něčím jako `sk-`.

:::caution
S klíčem API zacházejte jako s heslem: nesdílejte ho, nezveřejňujte ho ani ho nikomu neposílejte. Pokud klíč unikne, smažte ho na webových stránkách poskytovatele a vytvořte nový.
:::

## Krok 3 – Přidání a testování klíče (desktop)

1. V Transrewrtu otevřete **Nastavení → Konfigurace API**.
2. Vložte klíč do pole pro vašeho poskytovatele (například **Klíč API Google Gemini**) a uložte jej.
3. Klikněte na **Test** vedle pole, abyste potvrdili, že klíč funguje.

Jakmile test uspěje, jste připraveni – vyberte si tohoto poskytovatele na hlavní obrazovce a začněte překládat.

:::caution
Vyhněte se modelu **Body Builder** (`openrouter/bodybuilder`) od OpenRouteru – vrací JSON datové části požadavků, nikoli dokončený text. Viz [Nastavení → Modely](/docs/settings/#models).
:::

## Použití lokálního modelu místo toho (bez klíče API)

Modely můžete spouštět na svém vlastním počítači pomocí Ollamy, LM Studia, llama.cpp nebo jiného serveru kompatibilního s OpenAI (například `google/gemma-4-e2b` přes LM Studio). Nic neopustí váš počítač a není potřeba žádný klíč API.

Pro připojení jednoho nastavte základní URL lokálního LLM na plnou základní API, včetně cesty – například `http://localhost:11434/v1`. Na desktopu to nastavte v **Nastavení → Konfigurace API**; na Dockeru místo toho nastavte proměnnou prostředí `LOCAL_LLM_URL`.

:::caution
Pokud používáte lokální server LLM z jiného zařízení nebo kontejneru, nakonfigurujte jej tak, aby umožňoval externí připojení (ne pouze localhost).
:::

## Docker / web

Pokud používáte Transrewrt v prohlížeči, klíče spravuje ten, kdo provozuje server, nikoli se zadávají do uživatelského rozhraní prohlížeče. Administrátor nastavuje klíče poskytovatele jako **proměnné prostředí** na serveru (například `PROVIDER_API_KEY`) – viz [Konfigurace](/docs/configuration/).

## Kontrolní seznam prvního spuštění

1. Otevřete aplikaci a v případě potřeby nastavte **Jazyk rozhraní**.
2. Přidejte a otestujte alespoň jeden klíč poskytovatele – nebo nakonfigurujte lokální model (desktop), nebo potvrďte, že server má klíče prostředí (web).
3. V režimu **Snadné** vyberte **Poskytovatele** v Obecných nastaveních; v režimu **Pokročilé** přidejte modely pod **Nastavení → Modely** – viz [Nastavení](/docs/settings/#general-settings) pro oba režimy.
4. Na kartě **Přeložit** vyberte předvolbu nebo model a spusťte krátký test – viz [Překlad textu](/docs/translate/).

## Pokud něco nefunguje

- **Test klíče selže**: zkontrolujte, zda byl klíč zkopírován kompletně (bez mezer před nebo za) a zda nebyl na webu poskytovatele smazán nebo deaktivován.
- **Překlady selžou s chybou kvóty nebo kreditu**: bezplatné úrovně mají denní nebo měsíční limity; počkejte, přepněte na jiného bezplatného poskytovatele nebo přidejte kredit.
- **V režimu Easy se nezobrazí žádný poskytovatel**: otevřete **Nastavení → Konfigurace API** a ověřte, že je nakonfigurován a otestován alespoň jeden klíč (nebo URL místního LLM).

Další nápověda: [Běžné problémy](/docs/common-issues/).
