---
title: Vanliga problem
description: Felsökning och snabba tips för Transrewrt.
---



Om något inte fungerar som förväntat, kontrollera dessa punkter först.

## Appen översätter, skriver om eller transformerar inte

Kontrollera att:

- du har valt en **förinställning** (Enkel) eller **modell** (Avancerad) i verktygsfältet
- i **Enkelt** läge har **Inställningar → Allmänna inställningar** en **Leverantör** med en fungerande nyckel (eller lokal LLM-URL)
- i **Avancerat** läge listas minst en modell under **Inställningar → Modeller**
- din API-konfiguration fungerar (skrivbord: **Inställningar → API-konfiguration → Testa**)

## Modellistan är tom

I **Enkelt** läge, bekräfta att **Leverantör** är inställd och att nycklar/URL:er är testade. För **Lokal LLM**, se till att din lokala server körs och att modeller är laddade.

I **Avancerat** läge, öppna **Inställningar → Modeller**, klicka på **Uppdatera** och lägg till modeller i **Valda modeller**. Du kan också aktivera **Endast gratis**.

## För långsamt eller för dyrt

- Välj en annan förinställning eller modell
- Använd kortare indata
- Stäng av **Realtidsöversättning under skrivning** i Allmänna inställningar
- Använd gratis modeller för enkla uppgifter

## Fel gränssnittsspråk

Klicka på jordglobsikonen i verktygsfältet och välj ditt **Gränssnittsspråk**.

## Texten är för liten eller svår att läsa

**Inställningar → Allmänna inställningar** → ändra **Teckensnittsfamilj** och **Storlek**.

## Kontrollpanelens sammanfattning ser tom ut

Detta är normalt om:

- du bara använder **gratismodeller** och tittar på **kostnadssiffror** (de kan vara noll); KPI:er för antal anrop behöver fortfarande data för den valda perioden
- det valda **tidsfiltret** inte täcker när anrop gjordes – prova **Alla**

Om KPI:er fortfarande är noll efter **Alla**, kontrollera [Historik](/docs/history/) eller Kontrollpanel → **Alla anrop**.

## Kostnaden visar "inte tillgänglig" eller verkar felaktig

OpenRouter visar faktiska utgifter när det är tillämpligt. För andra leverantörer uppskattas kostnaden från OpenRouters prissättning; om inget pris matchar, visas kostnaden som **inte tillgänglig** och läggs inte till i totalen.

## Total kostnad matchar inte min leverantörsfaktura

Siffrorna i appen är **uppskattningar för referens**, inte fakturor. För OpenRouter, använd **Inställningar → Kostnadsspårning → Synkronisera med API-nyckelanvändning**.

## Historiksidan saknas i sidofältet

**Behåll exekveringshistorik** kan vara avstängd. Aktivera den i Allmänna inställningar om inte historiken är inaktiverad av administratören (`HISTORY_DISABLED` – se [Konfiguration](/docs/configuration/#privacy-mode)).

## Webb: oväntat omdirigerad till inloggning

Din session kan ha löpt ut. Logga in igen. Om det händer ofta, kontrollera serverns sessionstidsinställningar.

## Webbadmin: glömt lösenord

Om en annan administratör kan logga in kan de återställa lösenordet under **Inställningar → Användare**. Om du är utelåst men har skalåtkomst:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Standardanvändarnamnet för administratör är `admin`. Från en källutcheckning: `pnpm run reset-web-password -- <username> <new-password>`.

## Kontrollpanelen visar inga data för andra användare (webb)

Endast **administratörer** kan se andra användare via filtret **Användare**. Vanliga användare ser endast sin egen aktivitet.

## Ändrade en prompt och förlorade redigeringar

När du redigerar en Transform-prompt, klicka på **Spara** innan **Tillbaka till Kör**.

## Snabba tips

- Börja med [Översätt](/docs/translate/) för att bekräfta din inställning innan Omskrivning eller Transformering
- Använd [Omskrivning](/docs/rewrite/) för vardagliga förbättringar av formuleringar
- Använd [Transformera](/docs/transform/) för repeterbara anpassade arbetsflöden
- Stanna i läget **Enkel** tills du behöver detaljerade modell-ID:n
- Exportera prompter regelbundet om du bygger ett promptbibliotek
- Använd [Kontrollpanelen](/docs/dashboard/) och [Historik](/docs/history/) för att granska användning och tidigare körningar

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
