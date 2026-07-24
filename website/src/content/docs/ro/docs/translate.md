---
title: Traduceți textul
description: >-
  Convertiți textul între limbi, utilizați glosarul și rafinați rezultatele cu
  Rephrase.
---



Utilizați **Traducere** pentru a converti textul dintr-o limbă în alta.

![Spațiul de lucru Traducere](/images/screenshots/ro/translate.png)

## Condiții prealabile

- Cel puțin o cheie de furnizor (desktop) sau o cheie de mediu de server (web) — consultați [cheia API](/docs/api-key/)
- O **presetare** (Ușor) sau un **model** (Avansat) selectat în bara de instrumente

## Traduceți textul

1. Deschideți **Traducere** în bara laterală.
2. Alegeți o limbă în **De la** (sau **Detectare limbă**).
3. Alegeți o limbă în **Către**.
4. Alegeți o presetare sau un model din bara de instrumente.
5. Introduceți sau lipiți text în **Intrare**.
6. Faceți clic pe **Traducere**.
7. Citiți rezultatul în **Ieșire**, apoi copiați dacă este necesar.

**Limbile de top** apar primele în liste — setați-le sub [Setări → Limbi](/docs/settings/#languages).

## Setări utile

În [Setări → Setări generale](/docs/settings/#general-settings):

- **Executare automată la lipire** — se execută imediat ce lipiți
- **Copiere automată a rezultatului în clipboard** — copiază după o execuție reușită
- **Traducere în timp real în timpul tastării** — se execută în timp ce tastați (poate crește costul)
- **Timp de expirare (ms)** — așteptați înainte de o execuție în timp real
- **Comportament pentru ENTER** — dacă Enter execută sarcina sau inserează o linie nouă

## Aspect și tastatură

- **Comutare aspect** — butoanele de deasupra panourilor comută între aspectele de intrare/ieșire **alăturate** și **suprapuse**. Alegerea se aplică la Traducere, Rescriere și Transformare și este reținută pe acest dispozitiv.
- **Enter** sau **Shift+Enter** execută sarcina, în funcție de **Comportament pentru ENTER** (vezi mai sus).
- **Escape** șterge panoul de intrare (sau închide mai întâi un meniu sau o casetă de dialog deschisă).

## Rafinați o traducere

După o execuție reușită, **Reformulare…** și un meniu derulant de versiuni apar lângă selectorul **Către:**:

1. **Reformulare…** (fără selecție) — o altă traducere completă a aceleiași intrări. Până la **cinci** versiuni; modelul vede versiunile anterioare, astfel încât formularea poate diferi. Faceți clic pe **Oprire traducere** pentru a anula o reformulare în curs.
2. **Alternative de cuvinte** — selectați cuvinte sau o frază scurtă, apoi faceți clic dreapta sau **Reformulare…**. Alegeți o alternativă pentru a înlocui secțiunea (se poate extinde ușor pentru gramatică). La cinci versiuni, doar versiunea 5 este actualizată.
3. Fiecare solicitare de reformulare sau de alternative utilizează din nou modelul și poate adăuga costuri.

## Utilizați glosarul

Un **glosar** este o pereche de termeni sursă/țintă pentru o pereche de limbi. Când este activat, termenii potriviți sunt trimiși modelului, astfel încât formularea preferată să rămână consecventă.

1. Activați **Glosarul** în panoul de intrare.
2. Traduceți ca de obicei — termenii pentru perechea **De la** / **Către** se aplică automat.
3. Faceți clic pe **Adaugă în glosar** (lângă **De la:**) pentru a captura rapid o pereche nouă.
4. Gestionați toți termenii în [Setări → Glosar](/docs/settings/#glossary).

:::note
Termenii din glosar sunt potriviți după perechea de limbi. Aceștia nu pot fi utilizați cu **Detectează limba** ca sursă.
:::

## Pașii următori

- [Rescrieți textul](/docs/rewrite/)
- [Transformați cu prompturi](/docs/transform/)
- [Probleme comune](/docs/common-issues/)
