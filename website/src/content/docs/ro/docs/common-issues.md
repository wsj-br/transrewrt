---
title: Probleme comune
description: Depanare și sfaturi rapide pentru Transrewrt.
---



Dacă ceva nu funcționează conform așteptărilor, verificați mai întâi aceste puncte.

## Aplicația nu traduce, rescrie sau transformă

Verificați dacă:

- ați selectat o **presetare** (Ușor) sau un **model** (Avansat) în bara de instrumente
- în modul **Ușor**, **Setări → Setări generale** are un **Furnizor** cu o cheie funcțională (sau URL LLM local)
- în modul **Avansat**, un model este selectat în bara de instrumente (o listă goală este permisă, dar aveți nevoie de cel puțin un model în **Setări → Modele** pentru a rula)
- configurarea API-ului dvs. funcționează (desktop: **Setări → Configurare API → Testare**)

## Lista de modele este goală

În modul **Ușor**, confirmați că **Furnizorul** este setat și cheile/URL-urile sunt testate. Pentru **LLM local**, asigurați-vă că serverul dvs. local rulează și că modelele sunt încărcate.

În modul **Avansat**, modelele selectate pot fi goale. Deschideți **Setări → Modele**, faceți clic pe **Reîmprospătare** și adăugați modele la **Modele selectate**. Opțional, activați **Doar gratuit**. Eliminarea ultimului model din bara de instrumente deschide, de asemenea, Setări → Modele.

## Prea lent sau prea scump

- Alegeți o presetare sau un model diferit
- Utilizați o intrare mai scurtă
- Dezactivați **Traducere în timp real în timpul tastării** în Setări generale
- Utilizați modele gratuite pentru sarcini simple

## Limbă interfață greșită

Faceți clic pe pictograma globului din bara de instrumente și alegeți **Limba interfeței**.

## Text prea mic sau greu de citit

**Setări → Setări generale** → modificați **Familia de fonturi** și **Dimensiunea**.

## Sumarul tabloului de bord pare gol

Acest lucru este normal dacă:

- utilizați doar **modele gratuite** și vă uitați la cifrele de **cost** (pot fi zero); indicatorii cheie de performanță pentru numărul de apeluri au nevoie în continuare de date pentru perioada selectată
- **filtrul de timp** selectat nu acoperă momentul în care au fost efectuate apelurile — încercați **Toate**

Dacă indicatorii cheie de performanță sunt încă zero după **Toate**, verificați [Istoric](/docs/history/) sau Tabloul de bord → **Toate apelurile**.

## Costul afișează „indisponibil” sau pare greșit

OpenRouter afișează cheltuielile reale, acolo unde este cazul. Pentru alți furnizori, costul este estimat pe baza prețurilor OpenRouter; dacă nu se potrivește niciun preț, costul este afișat ca **indisponibil** și nu este adăugat la total.

## Costul total nu se potrivește cu factura furnizorului meu

Cifrele din aplicație sunt **estimări de referință**, nu facturi. Pentru OpenRouter, utilizați **Setări → Urmărire costuri → Sincronizare cu utilizarea cheii API**.

## Pagina Istoric lipsește din bara laterală

Este posibil ca opțiunea **Păstrare istoric execuție** să fie dezactivată. Activați-o în Setări generale, cu excepția cazului în care istoricul este dezactivat de administrator (`HISTORY_DISABLED` — consultați [Configurare](/docs/configuration/#privacy-mode)).

## Web: redirecționat la autentificare în mod neașteptat

Sesiunea dvs. ar fi putut expira. Conectați-vă din nou. Dacă acest lucru se întâmplă des, cereți unui administrator să mărească **Timpul de expirare a sesiunii** sub [Setări → Utilizatori](/docs/settings/#users) (un administrator ar fi putut, de asemenea, să vă revoce sesiunile).

## Administrator web: am uitat parola

Dacă un alt administrator se poate conecta, acesta poate reseta parola sub **Setări → Utilizatori**. Dacă sunteți blocat, dar aveți acces la shell:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Numele de utilizator implicit al administratorului este `admin`. Dintr-o verificare a sursei: `pnpm run reset-web-password -- <username> <new-password>`.

## Tabloul de bord nu afișează date pentru alți utilizatori (web)

Doar **administratorii** pot vizualiza alți utilizatori prin filtrul **Utilizator**. Utilizatorii obișnuiți văd doar propria activitate.

## Am modificat o solicitare și am pierdut modificările

Când editați o solicitare de transformare, faceți clic pe **Salvare** înainte de **Înapoi la rulare**.

## Sfaturi rapide

- Începeți cu [Traducere](/docs/translate/) pentru a confirma configurarea înainte de Rescriere sau Transformare
- Utilizați [Rescriere](/docs/rewrite/) pentru îmbunătățiri zilnice ale formulării
- Utilizați [Transformare](/docs/transform/) pentru fluxuri de lucru personalizate repetabile
- Rămâneți în modul **Ușor** până când aveți nevoie de ID-uri de model detaliate
- Exportați solicitările în mod regulat dacă construiți o bibliotecă de solicitări
- Utilizați [Tabloul de bord](/docs/dashboard/) și [Istoric](/docs/history/) pentru a revizui utilizarea și rulările anterioare

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
