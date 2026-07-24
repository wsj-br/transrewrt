---
title: Prezentare generală
description: >-
  Ce este Transrewrt și cum să găsești documente de instalare, ghiduri și
  setări.
---



**Transrewrt** este un instrument text open-source bazat pe inteligență artificială pentru:

- **Traducere** — între zeci de limbi, cu detectare automată a sursei și glosare
- **Rescriere** — corectarea gramaticii, îmbunătățirea clarității, schimbarea tonului sau a lungimii
- **Transformare** — rularea propriilor prompturi AI personalizate pe orice text

Suportă mulți furnizori de AI (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, endpoint-uri compatibile OpenAI și servere locale compatibile OpenAI, cum ar fi Ollama, LM Studio sau llama.cpp). Rulează-l ca o **aplicație desktop** (Windows / Linux) sau o **aplicație web auto-găzduită** (Docker).

Cheile tale, modelele tale, gazda ta — nu există un cont Transrewrt în cloud.

## Cum este organizată fereastra

![Spațiul de lucru Traducere](/images/screenshots/ro/translate.png)

- **Bara laterală** — navigarea principală: Traducere, Rescriere, Transformare, Tablou de bord, Istoric, Setări (și utilizatorul conectat pe web).
- **Bara de instrumente** — titlul paginii, selectorul de **presetare** (Ușor) sau de **model** (Avansat), **Limba interfeței** (pictograma glob; nu modifică Traducere din/în) și Ajutor (**?**) care face legătura cu aceste documente. Meniul de presetări/modele poate, de asemenea, **Comuta la modul Ușor/Avansat** (deasupra Deschidere Setări).
- **Zona de lucru** — panourile de Intrare și Ieșire, cu numărători, timp, TPS și cost opțional. Bara de acțiuni afișează un mic link de **versiune** a aplicației (dreapta jos) către site-ul GitHub Pages.

În mod implicit, aplicația rulează în modul **Ușor**: alege o **presetare** și un **Furnizor** în Setări. Comută la **Avansat** sub [Setări → Setări generale](/docs/settings/#general-settings) pentru o listă completă de modele sau utilizează comutatorul din meniul presetări/model al barei de instrumente.

## Primii pași

1. [Pornire rapidă](/docs/quick-start/) — instalează desktop sau rulează cu Docker
2. [Cheie API](/docs/api-key/) — conectează o cheie OpenRouter gratuită sau un alt furnizor
3. [Configurare](/docs/configuration/) — variabile de mediu, căi de configurare, autentificare web

## Ghiduri

- [Traducere text](/docs/translate/)
- [Rescriere text](/docs/rewrite/)
- [Transformare cu prompturi](/docs/transform/)
- [Utilizarea tabloului de bord](/docs/dashboard/)
- [Răsfoiește istoricul](/docs/history/)

## Referințe și ajutor

- [Setări](/docs/settings/)
- [Probleme comune](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
