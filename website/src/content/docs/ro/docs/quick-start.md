---
title: Pornire rapidă
description: >-
  Instalați Transrewrt pe Windows sau Linux, sau rulați aplicația web Docker
  auto-găzduită.
---



Alegeți calea care vi se potrivește. Toate sunt gratuite și open source (Apache 2.0).

## Docker (web auto-găzduit)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Înlocuiți `PROVIDER_API_KEY` cu variabila pentru furnizorul dvs. (de exemplu `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `XIA_API_KEY`, ...) și setați-i valoarea. Consultați lista completă în [Configurație](/docs/configuration/#environment-variables-web--docker).

Apoi deschideți [http://localhost:5000](http://localhost:5000) și **schimbați parola de administrator implicită** înainte de a expune serviciul.

:::tip
În Docker, acreditările LLM sunt setate cu variabile de mediu (de exemplu, `PROVIDER_API_KEY`). Acestea **nu** sunt introduse în interfața web. Pe desktop, configurați cheile în **Settings → API Config**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Descărcați cel mai recent `Transrewrt Setup x.y.z.exe` de la [Lansări](https://github.com/wsj-br/transrewrt/releases).
2. Rulați programul de instalare.
3. Deschideți aplicația și introduceți cheile API în **Setări → Configurare API**. Configurați cel puțin un furnizor; OpenRouter este o alegere comună pentru modele gratuite.

:::note
Windows poate afișa avertismente UAC sau SmartScreen la instalarea aplicației. Este sigur să o instalați dacă o descărcați de pe pagina oficială GitHub Releases. Faceți clic pe „Mai multe informații” și „Rulează oricum” pentru a instala.
:::

## Linux

Descărcați `.AppImage` pentru CPU-ul dvs. de la [Lansări](https://github.com/wsj-br/transrewrt/releases) (`x64` sau `arm64`, inclusiv Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Introduceți cheile API în **Setări → Configurare API**.

Dacă Chromium afișează erori GPU / EGL, dar aplicația funcționează, puteți dezactiva accelerarea hardware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
macOS nu este acceptat în prezent. Transrewrt este disponibil pentru Windows, Linux și Docker.
:::

## Actualizare

- **Windows** — descărcați noul `Transrewrt Setup x.y.z.exe` de la [Lansări](https://github.com/wsj-br/transrewrt/releases) și rulați-l. Setările și datele sunt păstrate.
- **Linux** — descărcați noul `.AppImage` și înlocuiți fișierul vechi. Setările și datele sunt păstrate.
- **Docker** — extrageți noua imagine și recreați containerul. Datele persistă în volumul `/app/data`:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## Pașii următori

1. [Obțineți o cheie API](/docs/api-key/)
2. Rulați o traducere simplă pentru a confirma că totul funcționează
3. Citiți ghidurile [Traducere](/docs/translate/), [Rescriere](/docs/rewrite/) și [Transformare](/docs/transform/)
