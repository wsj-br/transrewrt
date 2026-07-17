---
title: Início rápido
description: >-
  Instale o Transrewrt no Windows ou Linux, ou execute o aplicativo web Docker
  auto-hospedado.
translation_last_updated: '2026-07-17T14:58:59.906Z'
source_file_mtime: '2026-07-17T14:55:54.211Z'
source_file_hash: 6eb0ab579b445d9c4d39567ef44ee3333f57285c5c2b8dd072de6355182f849f
translation_language: pt-BR
source_file_path: src/content/docs/docs/quick-start.md
translation_models:
  - google/gemini-2.5-flash
---



Escolha o caminho que melhor se adapta a você. Todos são gratuitos e de código aberto (Apache 2.0).

## Docker (web auto-hospedado)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

PROVIDER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Substitua `PROVIDER_API_KEY=sk-or-your-key` pela sua chave de API do provedor escolhido (veja as opções suportadas em [Configuração](/docs/configuration/)).

Em seguida, abra [http://localhost:5000](http://localhost:5000) e **altere a senha de administrador padrão** antes de expor o serviço.

:::caution
No Docker, as credenciais LLM são definidas com variáveis de ambiente (por exemplo, `PROVIDER_API_KEY`). Elas **não** são inseridas na interface do usuário da web. No desktop, você configura as chaves em **Configurações → API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Baixe o `Transrewrt Setup x.y.z.exe` mais recente em [Releases](https://github.com/wsj-br/transrewrt/releases).
2. Execute o instalador.
3. Abra o aplicativo e insira as chaves de API em **Configurações → API**. Configure pelo menos um provedor; o OpenRouter é uma escolha comum para modelos gratuitos.

:::note
O Windows pode exibir avisos de UAC ou SmartScreen para aplicativos independentes não assinados. Prefira downloads da página oficial do GitHub Releases e verifique os checksums quando publicados.
:::

## Linux

Baixe o `.AppImage` para sua CPU em [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` ou `arm64`, incluindo Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Insira as chaves de API em **Configurações → API**.

Se o Chromium imprimir erros de GPU / EGL, mas o aplicativo funcionar, você pode desativar a aceleração de hardware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
O macOS não é atualmente suportado. O Transrewrt está disponível para Windows, Linux e Docker.
:::

## Próximos passos

1. [Obtenha uma chave de API](/docs/api-key/)
2. Execute uma tradução simples para confirmar que tudo funciona
3. Leia os guias [Traduzir](/docs/translate/), [Reescrever](/docs/rewrite/) e [Transformar](/docs/transform/)
