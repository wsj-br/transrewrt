---
translated_at: "2026-03-25T22:08:02.366Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo do Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Versão"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licença: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plataforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Ferramenta de texto com IA: traduza entre idiomas, reescreva em diferentes estilos e transforme com instruções personalizadas — usando múltiplos provedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama local). Executa como aplicativo desktop (Electron) ou aplicativo web autohospedado (Docker).

- **Traduzir** — entre dezenas de idiomas, com detecção automática da língua de origem
- **Reescrever** — corrigir gramática, melhorar clareza, formal/informal, encurtar, expandir, técnico
- **Transformar** — instruções personalizadas de IA; criar e gerenciar instruções, idioma de destino opcional por instrução
- **Histórico** — histórico completo de execuções com texto de entrada/saída, filtros e exportação
- **Modelos e custos** — escolha modelos de qualquer provedor configurado; painéis de custo e uso com log, resumos por modelo/operação/dia
- **Interface** — interface multilíngue (30+ idiomas, suporte a RTL), fontes, ...
- **Modo web** — suporte a múltiplos usuários com funções de administrador
- **Desktop** — aplicativo Electron para Windows e Linux
- **Autohospedado** — imagem Docker para amd64 e arm64 (pronto para Raspberry Pi)

Após a instalação, consulte o **[Guia do Usuário](USER-GUIDE.pt-BR.md)** para um passo a passo completo sobre todos os recursos.

<small>**Leia em outros idiomas:** [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Observação sobre traduções da interface e documentação:** Todos os idiomas da interface, exceto o inglês original (UK),
> foram traduzidos usando modelos de IA; a redação pode ser imprecisa ou conter erros.

</small>

<br/>

<a id="screenshots"></a>
## Capturas de tela

**Seletor de idioma**

![Seletor de idioma](../images/screenshots/pt-BR/language-selector.png)

**Traduzir**

![Traduzir](../images/screenshots/pt-BR/translate.png)

**Transformar - editor de instruções**

![Transformar - editor de instruções](../images/screenshots/pt-BR/transform-prompt-edit.png)

**Painel**

![Painel de custos](../images/screenshots/pt-BR/dashboard-summary.png)

**Histórico**

![Histórico](../images/screenshots/pt-BR/history.png)

**Configurações - seleção de modelos**

![Configurações - seleção de modelos](../images/screenshots/pt-BR/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Índice

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Primeiros passos](#primeiros-passos)
- [Instalação](#instalação)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Obtendo uma chave da API OpenRouter](#obtendo-uma-chave-da-api-openrouter)
- [Configuração e ambiente](#configuração-e-ambiente)
- [Desenvolvimento e arquitetura](#desenvolvimento-e-arquitetura)
- [Versões e tags](#versões-e-tags)
- [Contribuindo](#contribuindo)
- [Aviso legal](#aviso-legal)
- [Licença](#licença)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="primeiros-passos"></a>
## Primeiros passos

**Docker (recomendado para autohospedagem)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Substitua `sk-or-your-key` pela sua [chave da API OpenRouter](https://openrouter.ai/keys) (ou defina chaves de outros provedores; veja [Configuração](#configuração-e-ambiente)). Abra [http://localhost:5000](http://localhost:5000) e altere a senha padrão do administrador antes de expor o serviço.

<br/>

> ℹ️ **NOTA**<br/>
> No Docker, as credenciais do LLM são definidas por meio de variáveis de ambiente como `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (não na interface web). No desktop (Electron), você configura as chaves em **Configurações → API**.

<br/>

**Windows**

Baixe o instalador mais recente `Transrewrt Setup x.y.z.exe` em [Versões](https://github.com/wsj-br/transrewrt/releases), execute o instalador e depois inicie o aplicativo pelo menu Iniciar ou atalho na área de trabalho. Insira suas chaves de API em **Configurações → API**. Você precisa configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

<br/>

**Linux**

Baixe o `.AppImage` compatível com sua CPU em [Versões](https://github.com/wsj-br/transrewrt/releases) (`x64` para PCs típicos, `arm64` para muitos dispositivos ARM, incluindo Raspberry Pi 4+), depois:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Insira suas chaves de API em **Configurações → API**. Você precisa configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

No Debian/Ubuntu, talvez seja necessário instalar dependências adicionais primeiro:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Veja [Instalação → Linux](#linux-electron) para detalhes.

<br/>

> ℹ️ **NOTA**<br/>
> macOS não é atualmente suportado. O Transrewrt está disponível para Windows, Linux e Docker.

<br/>

Uma vez que o aplicativo esteja em execução, consulte o **[Guia do Usuário](USER-GUIDE.pt-BR.md)** para aprender como traduzir, reescrever e transformar textos, gerenciar prompts e configurar modelos.

<br/><br/>

<a id="instalação"></a>
## Instalação

<a id="windows-electron"></a>
### Windows (Electron)

- Baixe o instalador mais recente em [Versões](https://github.com/wsj-br/transrewrt/releases).
- Execute o `.exe` e siga as instruções do instalador.
- Na primeira execução: inicie o aplicativo pelo menu Iniciar ou por um atalho na área de trabalho.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Baixe o `.AppImage` correspondente (`x64` ou `arm64`) em [Versões](https://github.com/wsj-br/transrewrt/releases).
- Execute: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` em x86_64/amd64, ou use o nome do arquivo `...-arm64.AppImage` em ARM64.
- Dependências extras (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para mais informações.

<br/>

<a id="docker"></a>
### Docker

- Baixe a imagem: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Defina pelo menos uma chave de provedor por meio de variáveis de ambiente (por exemplo `OPENROUTER_KEY` para OpenRouter). Passe variáveis com `-e` ou via `docker compose` / `.env` para que segredos não sejam incorporados à imagem.
- As chaves de provedores **não** são inseridas na interface web; o servidor as lê a partir do ambiente.

Exemplo - volume nomeado para persistência (chave OpenRouter via variável de ambiente):

```bash
OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opção    | Descrição                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Porta    | `5000` (mapeie com `-p 5000:5000`)                                                                           |
| Volume   | Monte `/app/data` para persistência de configuração e banco de dados                                          |
| Variáveis de ambiente | `PORT`, `CONFIG_PATH`, além das chaves LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - veja [Configuração](#configuração-e-ambiente) |

Para construir e executar a partir do código-fonte: `docker compose up --build -d` ou `pnpm docker:up` - veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="obtendo-uma-chave-da-api-openrouter"></a>

## Obtendo uma chave de API do OpenRouter

O Transrewrt suporta múltiplos provedores de IA. [OpenRouter](https://openrouter.ai) é uma escolha popular porque reúne muitos modelos sob uma única chave e oferece modelos gratuitos.

1. Inscreva-se ou entre em [openrouter.ai](https://openrouter.ai).
2. Acesse a página [Keys](https://openrouter.ai/keys) e crie uma nova chave (dê um nome e, opcionalmente, defina um limite de crédito). Você pode usar modelos gratuitos sem adicionar crédito.
3. **Desktop (Electron):** cole as chaves em **Configurações → API**. **Docker:** defina variáveis de ambiente como `OPENROUTER_KEY` (veja [Início rápido](#quick-start)).

Não use o modelo **Body Builder** do OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) para traduzir, reescrever ou transformar: ele retorna cargas de solicitação JSON, não o texto completo para essas tarefas. Veja [Configurações → Modelos](USER-GUIDE.pt-BR.md#models) no Guia do Usuário.

Você também pode usar outros provedores (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ou executar modelos localmente com [Ollama](https://ollama.com). Veja [Configuração](#configuration-and-environment) para a lista completa de provedores suportados e variáveis de ambiente.

> ⚠️ **ATENÇÃO**<br/>
> Se você estiver usando Ollama de outro dispositivo, contêiner ou serviço, lembre-se de configurar o Ollama para permitir conexões externas (não apenas localhost).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuração e ambiente

**Localização dos arquivos de configuração**

| Implantação        | Local da configuração                           |
| ------------------ | ----------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                         |
| Electron (Linux)   | `~/.config/transrewrt/`                         |
| Web / Docker       | `/app/data/config.json` (use um volume para manter) |

<br/>

**Variáveis de ambiente** (somente web/Docker; o Electron usa o arquivo de configuração local)

| Variável         | Padrão                  | Descrição |
| ---------------- | ----------------------- | --------- |
| `PORT`           | `5000`                  | Porta de escuta do servidor |
| `CONFIG_PATH`    | `/app/data/config.json` | Caminho para o arquivo de configuração |
| `OPENROUTER_KEY` | *(vazio)*               | Chave da API OpenRouter |
| `OPENAI_KEY`     | *(vazio)*               | Chave da API OpenAI |
| `CEREBRAS_KEY`   | *(vazio)*               | Chave da API Cerebras |
| `ANTHROPIC_KEY`  | *(vazio)*               | Chave da API Anthropic |
| `GOOGLE_KEY`     | *(vazio)*               | Chave da API Gemini do Google |
| `DEEPSEEK_KEY`   | *(vazio)*               | Chave da API DeepSeek |
| `GROQ_KEY`       | *(vazio)*               | Chave da API Groq |
| `MISTRAL_KEY`    | *(vazio)*               | Chave da API Mistral |
| `OLLAMA_URL`     | *(vazio)*               | URL base do Ollama (ex: `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(vazio)*               | Chave da API xAI |

Configure apenas os provedores que você utilizar. Os IDs dos modelos são organizados por namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Exibição de custos:** O OpenRouter retorna o custo exato cobrado quando aplicável. Outros provedores usam um custo **estimado** com base nos preços públicos dos modelos do OpenRouter, quando uma chave OpenRouter estiver disponível; sem ela, o custo de provedores não OpenRouter pode aparecer como `0`. As estimativas não são faturas.

<br/>

**Dados e persistência:** Para o Docker, monte um volume em `/app/data` para que o `config.json` e o banco de dados SQLite persistam após reinicializações do contêiner. Sem um volume, todos os dados serão perdidos quando o contêiner for interrompido.

**Desenvolvedores:** Após atualizar alterações que substituam a antiga configuração de chave única, redefina ou una o `data/config.json` com a nova estrutura padrão de `src/config-defaults/config_default.json`, caso o arquivo local ainda use campos removidos (`api_key`, `api_url`, opções de proxy).

<br/>

**Autenticação na web:**

- Administrador padrão: `admin` / `transrewrt26`.
- Gerencie usuários em **Configurações → Usuários**.
- Redefina uma senha: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (a partir do código-fonte: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ATENÇÃO**<br/>
> Altere imediatamente a senha padrão do administrador em qualquer host acessível por rede.

<br/>

Configurações principais (fonte, modelos, idiomas, etc.) estão disponíveis nas Configurações do aplicativo.

<br/><br/>

<a id="development-and-architecture"></a>

## Desenvolvimento e arquitetura

- **Desenvolvimento:** Configuração, compilação, testes e implantação (Electron, Web, Docker) - veja **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arquitetura e visão geral do sistema:** Estrutura de pastas, pilha tecnológica, decisões de design - veja **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Lançamentos e tags

- **Tags Git** `v*` (por exemplo, `v1.0.10`) disparam o [fluxo de trabalho de lançamento](.github/workflows/release.yml). As **Publicações no GitHub** incluem o instalador do Windows (`.exe`) e os AppImages do Linux (**x64** e **arm64**).
- **Imagens Docker** são publicadas em `ghcr.io/wsj-br/transrewrt`. As tags das imagens coincidem com a versão do Git (por exemplo, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) além da tag `latest`. Multiplataforma: `linux/amd64` e `linux/arm64` (por exemplo, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Como contribuir

1. Faça um fork do repositório.
2. Crie um ramo de funcionalidade: `git checkout -b feature/minha-funcionalidade`
3. Comite suas alterações com uma mensagem clara.
4. Faça push e abra um Pull Request para o `main`.

Siga o estilo de código existente e teste suas alterações nos modos Electron e web antes de enviar. Veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para instruções de compilação e testes.

<br/>

**Relatando problemas:** Abra uma issue no [GitHub](https://github.com/wsj-br/transrewrt/issues). Inclua sua plataforma (Windows / Linux / Docker) e a versão do aplicativo (exibida na janela "Sobre" ou na página de Lançamentos).

<br/><br/>

<a id="disclaimer"></a>
## Aviso legal

Nomes e ícones de produtos pertencem aos seus respectivos proprietários e são usados apenas para fins de identificação. Este software não é afiliado nem endossado por nenhuma das marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licença

Direitos autorais © 2026 Waldemar Scudeller Jr.

[Licença Apache 2.0](LICENSE)