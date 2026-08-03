---
title: Início rápido
description: Instale o Transrewrt no Windows ou Linux, ou execute o aplicativo web Docker.
---



Escolha o caminho que melhor se adapta a você. Todos são gratuitos e de código aberto (Apache 2.0).

## Docker (aplicativo web)

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-api-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Substitua `PROVIDER_API_KEY` pela variável do seu provedor (por exemplo, `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `XIA_API_KEY`, ...) e defina seu valor. Veja a lista completa em [Configuração](/docs/configuration/#environment-variables-web--docker).

Em seguida, abra [http://localhost:5000](http://localhost:5000) e **altere a senha de administrador padrão** antes de expor o serviço.

:::tip
No Docker, as credenciais LLM são definidas com variáveis de ambiente (por exemplo, `PROVIDER_API_KEY`). Elas **não** são inseridas na interface do usuário da web. No desktop, você configura as chaves em **Configurações → Configuração da API**.
:::

### Docker Compose

```bash
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys, or use a `.env` file. Set TZ if needed.
docker compose -f transrewrt.yml up -d
```

## Windows

1. Baixe o `Transrewrt Setup x.y.z.exe` mais recente em [Lançamentos](https://github.com/wsj-br/transrewrt/releases).
2. Execute o instalador.
3. Abra o aplicativo e insira as chaves da API em **Configurações → Configuração da API**. Configure pelo menos um provedor; o OpenRouter é uma escolha comum para modelos gratuitos.

:::note
O Windows pode exibir avisos do UAC ou SmartScreen ao instalar o aplicativo. É seguro instalar se você o baixar da página oficial do GitHub Releases. Clique em "Mais informações" e "Executar mesmo assim" para instalar.
:::

## Linux

Baixe o `.AppImage` para sua CPU em [Lançamentos](https://github.com/wsj-br/transrewrt/releases) (`x64` ou `arm64`, incluindo Raspberry Pi 4+):

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Insira as chaves da API em **Configurações → Configuração da API**.

Se o Chromium imprimir erros de GPU / EGL, mas o aplicativo funcionar, você pode desativar a aceleração de hardware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

:::note
O macOS não é atualmente suportado. O Transrewrt está disponível para Windows, Linux e Docker.
:::

## Atualizando

- **Windows** — baixe o `Transrewrt Setup x.y.z.exe` mais recente em [Lançamentos](https://github.com/wsj-br/transrewrt/releases) e execute-o. As configurações e os dados são mantidos.
- **Linux** — baixe o `.AppImage` mais recente e substitua o arquivo antigo. As configurações e os dados são mantidos.
- **Docker** — puxe a nova imagem e recrie o contêiner. Os dados persistem no volume `/app/data`:

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest
docker stop transrewrt && docker rm transrewrt
# then run the same `docker run` command as above
# or, with Docker Compose:
docker compose -f transrewrt.yml pull && docker compose -f transrewrt.yml up -d
```

## Próximos passos

1. [Obtenha uma chave de API](/docs/api-key/)
2. Execute uma tradução simples para confirmar que tudo funciona
3. Leia os guias [Traduzir](/docs/translate/), [Reescrever](/docs/rewrite/) e [Transformar](/docs/transform/)
