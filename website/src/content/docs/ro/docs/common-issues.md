---
title: Probleme comune
description: Depanare și sfaturi rapide pentru Transrewrt.
translation_last_updated: '2026-07-17T14:59:01.552Z'
source_file_mtime: '2026-07-17T14:37:17.841Z'
source_file_hash: d60d2f0d1e9289639fd72ad478b6756e4638dce77acf7d2d1795a37653a97f17
translation_language: ro
source_file_path: src/content/docs/docs/common-issues.md
translation_models:
  - google/gemini-2.5-flash
---



Dacă ceva nu funcționează conform așteptărilor, verificați mai întâi aceste puncte.

## Aplicația nu traduce, nu rescrie sau nu transformă

Verificați dacă:

- ați selectat o **presetare** (Ușor) sau un **model** (Avansat) în bara de instrumente
- în modul **Ușor**, **Setări → Setări generale** are un **Furnizor** cu o cheie funcțională (sau URL LLM local)
- în modul **Avansat**, cel puțin un model este listat în **Setări → Modele**
- configurarea API-ului funcționează (desktop: **Setări → Configurare API → Testare**)

## Lista de modele este goală

În modul **Ușor**, confirmați că **Furnizorul** este setat și că cheile/URL-urile sunt testate. Pentru **LLM local**, asigurați-vă că serverul local rulează și că modelele sunt încărcate.

În modul **Avansat**, deschideți **Setări → Modele**, faceți clic pe **Reîmprospătare** și adăugați modele la **Modele selectate**. Opțional, activați **Doar gratuit**.

## Prea lent sau prea scump

- Alegeți o altă presetare sau un alt model
- Utilizați o intrare mai scurtă
- Dezactivați **Traducere în timp real în timpul tastării** în Setări generale
- Utilizați modele gratuite pentru sarcini simple

## Limbă interfață greșită

Faceți clic pe pictograma globului din bara de instrumente și alegeți **Limba interfeței**.

## Text prea mic sau greu de citit

**Setări → Setări generale** → modificați **Familia de fonturi** și **Dimensiunea**.

## Rezumatul tabloului de bord pare gol

Acest lucru este normal dacă:

- utilizați doar **modele gratuite** și vă uitați la cifrele de **cost** (acestea pot fi zero); indicatorii cheie de performanță pentru numărul de apeluri necesită în continuare date pentru perioada selectată
- **filtrul de timp** selectat nu acoperă momentul în care au fost efectuate apelurile — încercați **Toate**

Dacă indicatorii cheie de performanță sunt încă zero după **Toate**, verificați [Istoric](/docs/history/) sau Tabloul de bord → **Toate apelurile**.

## Costul afișează „indisponibil” sau pare incorect

OpenRouter afișează cheltuielile reale, atunci când este cazul. Pentru alți furnizori, costul este estimat pe baza prețurilor OpenRouter; dacă nu se potrivește niciun preț, costul este afișat ca **indisponibil** și nu este adăugat la total.

## Costul total nu se potrivește cu factura furnizorului meu

Cifrele din aplicație sunt **estimări pentru referință**, nu facturi. Pentru OpenRouter, utilizați **Setări → Urmărire costuri → Sincronizare cu utilizarea cheii API**.

## Pagina Istoric lipsește din bara laterală

**Păstrarea istoricului execuției** poate fi dezactivată. Activați-o în Setări generale, cu excepția cazului în care istoricul este dezactivat de administrator (`HISTORY_DISABLED` — consultați [Configurare](/docs/configuration/#privacy-mode)).

## Web: redirecționat la autentificare în mod neașteptat

Sesiunea dvs. ar fi putut expira. Conectați-vă din nou. Dacă acest lucru se întâmplă des, verificați setările de durată a sesiunii serverului.

## Administrator web: parolă uitată

Dacă un alt administrator se poate conecta, acesta poate reseta parola în **Setări → Utilizatori**. Dacă sunteți blocat, dar aveți acces la shell:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

Numele de utilizator implicit al administratorului este `admin`. Dintr-o verificare a sursei: `pnpm run reset-web-password -- <username> <new-password>`.

## Tabloul de bord nu afișează date pentru alți utilizatori (web)

Doar **administratorii** pot vizualiza alți utilizatori prin filtrul **Utilizator**. Utilizatorii obișnuiți văd doar propria activitate.

## Ați modificat o solicitare și ați pierdut modificările

Când editați o solicitare de transformare, faceți clic pe **Salvare** înainte de **Înapoi la rulare**.

## Sfaturi rapide

- Începeți cu [Traducere](/docs/translate/) pentru a confirma configurarea înainte de Rescriere sau Transformare
- Utilizați [Rescriere](/docs/rewrite/) pentru îmbunătățiri zilnice ale formulării
- Utilizați [Transformare](/docs/transform/) pentru fluxuri de lucru personalizate repetabile
- Rămâneți în modul **Ușor** până când aveți nevoie de ID-uri de model detaliate
- Exportați prompturile în mod regulat dacă construiți o bibliotecă de prompturi
- Utilizați [Tabloul de bord](/docs/dashboard/) și [Istoric](/docs/history/) pentru a revizui utilizarea și rulările anterioare

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
