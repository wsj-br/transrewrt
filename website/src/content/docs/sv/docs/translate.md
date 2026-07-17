---
title: Översätt text
description: >-
  Konvertera text mellan språk, använd ordlistan och förfina resultat med
  Omformulera.
---



Använd **Översätt** för att konvertera text från ett språk till ett annat.

![Översätt arbetsyta](/images/screenshots/sv/translate.png)

## Förutsättningar

- Minst en leverantörsnyckel (skrivbord) eller servermiljönyckel (webb) – se [API-nyckel](/docs/api-key/)
- En **förinställning** (Enkel) eller **modell** (Avancerad) vald i verktygsfältet

## Översätt text

1. Öppna **Översätt** i sidofältet.
2. Välj ett språk i **Från** (eller **Identifiera språk**).
3. Välj ett språk i **Till**.
4. Välj en förinställning eller modell i verktygsfältet.
5. Skriv eller klistra in text i **Indata**.
6. Klicka på **Översätt**.
7. Läs resultatet i **Utdata** och kopiera vid behov.

**Toppspråk** visas först i listorna – ställ in dem under [Inställningar → Språk](/docs/settings/#languages).

## Användbara inställningar

I [Inställningar → Allmänna inställningar](/docs/settings/#general-settings):

- **Kör automatiskt vid inklistring** – körs så snart du klistrar in
- **Kopiera resultat automatiskt till urklipp** – kopierar efter en lyckad körning
- **Realtidsöversättning medan du skriver** – körs medan du skriver (kan öka kostnaden)
- **Tidsgräns (ms)** – vänta innan en realtidskörning
- **Beteende för ENTER** – om Enter kör uppgiften eller infogar en ny rad

## Förfina en översättning

Efter en lyckad körning visas **Omformulera…** och en versionsrullgardinsmeny bredvid väljaren **Till:**:

1. **Omformulera…** (inget val) – en annan fullständig översättning av samma indata. Upp till **fem** versioner; modellen ser tidigare versioner så formuleringen kan skilja sig. Klicka på **Stoppa översättning** för att avbryta en pågående omformulering.
2. **Ordalternativ** – välj ord eller en kort fras, högerklicka sedan eller **Omformulera…**. Välj ett alternativ för att ersätta spannet (kan vidgas något för grammatik). Vid fem versioner uppdateras endast version 5.
3. Varje omformulering eller begäran om alternativ använder modellen igen och kan medföra kostnad.

## Använd ordlistan

En **ordlista** är käll-/måltermpar för ett språkpar. När den är aktiverad skickas matchande termer till modellen så att den föredragna formuleringen förblir konsekvent.

1. Slå på **Ordlista** i inmatningspanelen.
2. Översätt som vanligt – termer för det **Från** / **Till**-paret tillämpas automatiskt.
3. Klicka på **Lägg till i ordlista** (bredvid **Från:**) för att snabbt fånga ett nytt par.
4. Hantera alla termer i [Inställningar → Ordlista](/docs/settings/#glossary).

:::note
Ordlistetermer matchas efter språkpar. De kan inte användas med **Identifiera språk** som källa.
:::

## Nästa steg

- [Skriv om text](/docs/rewrite/)
- [Transformera med prompter](/docs/transform/)
- [Vanliga problem](/docs/common-issues/)
