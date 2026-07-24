---
title: Vanliga problem
description: Felsökning och snabba tips för Transrewrt.
---



Om något inte fungerar som förväntat, kontrollera dessa punkter först.

## Appen översätter, skriver om eller transformerar inte

Kontrollera att:

- du har valt en **förinställning** (Enkel) eller **modell** (Avancerad) i verktygsfältet
- i **Enkelt** läge har **Inställningar → Allmänna inställningar** en **Leverantör** med en fungerande nyckel (eller Lokal LLM-URL)
- i **Avancerat** läge är en modell vald i verktygsfältet (en tom lista är tillåten, men du behöver minst en modell i **Inställningar → Modeller** för att köra)
- din API-inställning fungerar (skrivbord: **Inställningar → API-konfiguration → Testa**)

## Modellistan är tom

I **Enkelt** läge, bekräfta att **Leverantör** är inställd och att nycklar/URL:er är testade. För **Lokal LLM**, se till att din lokala server körs och att modeller är laddade.

I **Avancerat** läge kan valda modeller vara tomma. Öppna **Inställningar → Modeller**, klicka på **Uppdatera** och lägg till modeller i **Valda modeller**. Du kan också aktivera **Endast gratis**. Om du tar bort den sista modellen i verktygsfältet öppnas också Inställningar → Modeller.

## För långsamt eller för dyrt

- Välj en annan förinställning eller modell
- Använd kortare indata
- Stäng av **Realtidsöversättning medan du skriver** i Allmänna inställningar
- Använd gratismodeller för enkla uppgifter

## Fel gränssnittsspråk

Klicka på jordglobsikonen i verktygsfältet och välj ditt **Gränssnittsspråk**.

## Texten är för liten eller svår att läsa

**Inställningar → Allmänna inställningar** → ändra **Teckensnittsfamilj** och **Storlek**.

## Dashboard-sammanfattningen ser tom ut

Detta är normalt om:

- du bara använder **gratismodeller** och du tittar på **kostnadssiffror** (de kan vara noll); KPI:er för samtalsantal behöver fortfarande data för den valda perioden
- det valda **tidsfiltret** inte täcker när samtal gjordes – prova **Alla**

Om KPI:er fortfarande är noll efter **Alla**, kontrollera [Historik](/docs/history/) eller Dashboard → **Alla samtal**.

## Kostnaden visar "inte tillgänglig" eller verkar felaktig

OpenRouter visar faktisk förbrukning när det är tillämpligt. För andra leverantörer uppskattas kostnaden utifrån OpenRouter-prissättning; om inget pris matchar visas kostnaden som **inte tillgänglig** och läggs inte till i totalsumman.

## Total kostnad matchar inte min leverantörsfaktura

Siffrorna i appen är **uppskattningar för referens**, inte fakturor. För OpenRouter, använd **Inställningar → Kostnadsspårning → Synkronisera med API-nyckelanvändning**.

## Historiksidan saknas i sidofältet

**Behåll körningshistorik** kan vara avstängd. Aktivera den i Allmänna inställningar om inte historik är inaktiverad av administratören (`HISTORY_DISABLED` – se [Konfiguration](/docs/configuration/#privacy-mode)).

## Webb: omdirigerad till inloggning oväntat

Din session kan ha löpt ut. Logga in igen. Om det händer ofta, be en administratör att öka **Session Timeout** under [Inställningar → Användare](/docs/settings/#users) (en administratör kan också ha återkallat dina sessioner).

## Webbadmin: glömt lösenord

Om en annan administratör kan logga in kan de återställa lösenordet under **Inställningar → Användare**. Om du är utelåst men har skalåtkomst:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Standardadministratörsanvändarnamnet är `admin`. Från en källutcheckning: `pnpm run reset-web-password -- <username> <new-password>`.

## Kontrollpanelen visar inga data för andra användare (webb)

Endast **administratörer** kan visa andra användare via filtret **Användare**. Vanliga användare ser endast sin egen aktivitet.

## Ändrade en prompt och förlorade redigeringar

När du redigerar en Transform-prompt, klicka på **Spara** innan **Tillbaka till körning**.

## Snabba tips

- Börja med [Översätt](/docs/translate/) för att bekräfta din inställning innan Omskrivning eller Transformering
- Använd [Omskrivning](/docs/rewrite/) för vardagliga förbättringar av formuleringar
- Använd [Transformering](/docs/transform/) för repeterbara anpassade arbetsflöden
- Stanna i läget **Enkelt** tills du behöver detaljerade modell-ID:n
- Exportera prompter regelbundet om du bygger ett promptbibliotek
- Använd [Kontrollpanelen](/docs/dashboard/) och [Historik](/docs/history/) för att granska användning och tidigare körningar

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
