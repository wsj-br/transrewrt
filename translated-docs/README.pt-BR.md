---
translated_at: "2026-03-27T22:40:44.164Z"
source_hash: "076eff841a5f0e4f5c43a00dd28f2702bd2dde0602a830890285b5ffdc38ad5a"
source_mtime: "2026-03-27T20:34:13.877Z"
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

Ferramenta de texto com inteligência artificial: traduza entre idiomas, reescreva em diferentes estilos e transforme com instruções personalizadas — utilizando múltiplos provedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama local). Funciona como aplicativo de desktop (Electron) ou aplicativo web autohospedado (Docker).

- **Traduzir** — entre dezenas de idiomas, com detecção automática da língua de origem
- **Reescrever** — corrigir gramática, melhorar clareza, formal/informal, encurtar, expandir, versão técnica
- **Transformar** — instruções personalizadas de IA; crie e gerencie instruções, com idioma de destino opcional por instrução
- **Histórico** — histórico completo de execuções com texto de entrada/saída, filtros e exportação
- **Modelos e custo** — escolha modelos de qualquer provedor configurado; painéis de custo e uso com registros e resumos por modelo/operação/dia
- **Interface** — interface multilíngue (mais de 30 idiomas, suporte a escrita da direita para a esquerda), fontes, ...
- **Modo Web** — suporte multiusuário com funções de administrador
- **Desktop** — aplicativo Electron para Windows e Linux
- **Autohospedado** — imagem Docker para amd64 e arm64 (pronto para Raspberry Pi)

Após a instalação, consulte o **[Guia do Usuário](USER-GUIDE.pt-BR.md)** para um guia detalhado de todas as funcionalidades.

<small>**Leia em outros idiomas:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Observação sobre traduções da interface e da documentação:** Todos os idiomas da interface, exceto o inglês (UK) original, foram traduzidos usando modelos de IA; a redação pode ser imprecisa ou conter erros.

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

- [Início rápido](#início-rápido)
- [Instalação](#instalação)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Obtendo uma chave de API do OpenRouter](#obtendo-uma-chave-de-api-do-openrouter)
- [Configuração e ambiente](#configuração-e-ambiente)
- [Desenvolvimento e arquitetura](#desenvolvimento-e-arquitetura)
- [Publicações e tags](#publicações-e-tags)
- [Contribuição](#contribuição)
- [Aviso legal](#aviso-legal)
- [Licença](#licença)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Início rápido

**Docker (recomendado para autohospedagem)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Substitua `sk-or-your-key` pela sua [chave de API do OpenRouter](https://openrouter.ai/keys) (ou defina chaves de outros provedores; veja [Configuração](#configuração-e-ambiente)). Abra [http://localhost:5000](http://localhost:5000) e altere a senha padrão do administrador antes de expor o serviço.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> No Docker, as credenciais do LLM são definidas com variáveis de ambiente, como `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (não na interface da web). No desktop (Electron), você configura as chaves em **Configurações → API**.

<br/>

**Windows**

Baixe o mais recente `Transrewrt Setup x.y.z.exe` em [Releases](https://github.com/wsj-br/transrewrt/releases), execute o instalador e inicie o aplicativo pelo menu Iniciar ou atalho na área de trabalho. Insira suas chaves de API em **Configurações → API**. Você precisa configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

<br/>

**Linux**

Baixe o `.AppImage` adequado para seu processador em [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` para PCs comuns, `arm64` para dispositivos ARM, incluindo Raspberry Pi 4+), depois:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Insira suas chaves de API em **Configurações → API**. Você precisa configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

No Debian/Ubuntu, talvez seja necessário instalar dependências adicionais antes:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Veja [Instalação → Linux](#linux-electron) para detalhes.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> macOS não é suportado atualmente. Transrewrt está disponível para Windows, Linux e Docker.

<br/>

Quando o aplicativo estiver em execução, consulte o **[Guia do Usuário](USER-GUIDE.pt-BR.md)** para aprender como traduzir, reescrever e transformar textos, gerenciar prompts e configurar modelos.

<br/><br/>

<a id="installation"></a>
## Instalação

<a id="windows-electron"></a>
### Windows (Electron)

- Baixe o instalador mais recente em [Releases](https://github.com/wsj-br/transrewrt/releases).
- Execute o `.exe` e siga as instruções do instalador.
- Na primeira execução: inicie o aplicativo pelo menu Iniciar ou atalho na área de trabalho.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Baixe o `.AppImage` correspondente (`x64` ou `arm64`) em [Releases](https://github.com/wsj-br/transrewrt/releases).
- Execute: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` em x86_64/amd64, ou use o nome de arquivo `...-arm64.AppImage` em ARM64.
- Dependências adicionais (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para mais detalhes.

<br/>

<a id="docker"></a>
### Docker

- Baixe a imagem: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Defina ao menos uma chave do provedor via variável de ambiente (por exemplo, `OPENROUTER_API_KEY` para OpenRouter). Passe as variáveis usando `-e` ou `docker compose` / `.env` para que segredos não estejam embutidos na imagem.
- As chaves dos provedores **não** devem ser inseridas na interface web; o servidor as lê do ambiente.

Exemplo - volume nomeado para persistência (chave OpenRouter via env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

ou, se preferir Docker Compose, use:

# baixar o arquivo compose
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# editar o arquivo para adicionar as API_KEYS
vi transrewrt.yml
# iniciar o contêiner
docker compose -f transrewrt.yml up -d
```

<br/>

| Opção    | Descrição                                                                                                                            |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Porta    | `5000` (mapeie com `-p 5000:5000`)                                                                                                       |
| Volume   | Monte `/app/data` para manter a configuração e o banco de dados                                                                                 |
| Variáveis de ambiente | `PORT`, `CONFIG_PATH`, além das chaves de LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - veja [Configuração](#configuracao-e-ambiente) |

Para construir e executar a partir do código-fonte: `docker compose up --build -d` ou `pnpm docker:up` - veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Como obter uma chave API do OpenRouter

O Transrewrt suporta múltiplos provedores de IA. [OpenRouter](https://openrouter.ai) é uma opção popular porque agrega muitos modelos sob uma única chave e oferece modelos gratuitos.

1. Inscreva-se ou faça login em [openrouter.ai](https://openrouter.ai).
2. Acesse a página [Keys](https://openrouter.ai/keys) e crie uma nova chave (dê um nome e, opcionalmente, defina um limite de crédito). Você pode usar modelos gratuitos sem adicionar créditos.
3. **Desktop (Electron):** cole as chaves em **Configurações → API**. **Docker:** defina variáveis de ambiente como `OPENROUTER_API_KEY` (veja [Início rápido](#inicio-rapido)).

Não use o modelo **Body Builder** do OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) para traduzir, reescrever ou transformar: ele retorna cargas JSON de solicitação, não o texto completo para essas tarefas. Veja [Configurações → Modelos](USER-GUIDE.pt-BR.md#models) no Manual do Usuário.

Você também pode usar outros provedores (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ou executar modelos localmente com [Ollama](https://ollama.com). Veja [Configuração](#configuracao-e-ambiente) para obter a lista completa de provedores suportados e variáveis de ambiente.

> ⚠️ **ATENÇÃO**<br/>
> Se você estiver usando o Ollama a partir de outro dispositivo, contêiner ou serviço, lembre-se de configurar o Ollama para permitir conexões externas (não apenas localhost).


Para limites, BYOK e mais detalhes, veja [autenticação OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuração e ambiente

**Locais dos arquivos de configuração**

| Implantação        | Local da configuração                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (use um volume para persistência) |

<br/>

**Variáveis de ambiente** (apenas web/Docker; o Electron usa o arquivo de configuração local)

| Variável         | Padrão                 | Descrição |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Porta de escuta do servidor |
| `CONFIG_PATH`    | `/app/data/config.json` | Caminho para o arquivo de configuração |
| `OPENROUTER_API_KEY` | *(vazio)*               | Chave API do OpenRouter |
| `OPENAI_API_KEY`     | *(vazio)*               | Chave API do OpenAI |
| `CEREBRAS_API_KEY`   | *(vazio)*               | Chave API do Cerebras |
| `ANTHROPIC_API_KEY`  | *(vazio)*               | Chave API da Anthropic |
| `GOOGLE_API_KEY`     | *(vazio)*               | Chave API do Google Gemini |
| `DEEPSEEK_API_KEY`   | *(vazio)*               | Chave API do DeepSeek |
| `GROQ_API_KEY`       | *(vazio)*               | Chave API do Groq |
| `MISTRAL_API_KEY`    | *(vazio)*               | Chave API da Mistral |
| `OLLAMA_URL`     | *(vazio)*               | URL base do Ollama (ex: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(vazio)*               | Chave API da xAI |

Configure apenas os provedores que você usar. Os IDs dos modelos são segmentados por namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Exibição de custos:** O OpenRouter retorna o custo exato cobrado quando aplicável. Outros provedores usam **estimativas** de custo baseadas nos preços públicos de modelos do OpenRouter quando uma chave do OpenRouter está disponível; sem ela, o custo de provedores não OpenRouter pode aparecer como `0`. As estimativas não são faturas.

<br/>

**Dados e persistência:** Para Docker, monte um volume em `/app/data` para garantir que `config.json` e o banco de dados SQLite sejam mantidos entre reinicializações do contêiner. Sem um volume, todos os dados são perdidos quando o contêiner for interrompido.

**Desenvolvedores:** Após atualizar alterações que substituem a antiga configuração de chave única, redefina ou una `data/config.json` com a nova estrutura padrão de `src/config-defaults/config_default.json`, caso seu arquivo local ainda use campos removidos (`api_key`, `api_url`, opções de proxy).

<br/>

**Autenticação web:**

- Administrador padrão: `admin` / `transrewrt26`.
- Gerencie usuários em **Configurações → Usuários**.
- Redefina uma senha: `docker exec <contêiner> reset-web-password '<nome-de-usuário>' '<nova-senha>'`
  (a partir do código-fonte: `pnpm run reset-web-password -- <nome-de-usuário> <nova-senha>`)

<br/>

> ⚠️ **ATENÇÃO**<br/>
> Altere imediatamente a senha padrão do administrador em qualquer host acessível por rede.

<br/>

Configurações principais (fonte, modelos, idiomas, etc.) estão disponíveis nas Configurações do aplicativo.

<br/><br/>

<a id="development-and-architecture"></a>

## Desenvolvimento e arquitetura

- **Desenvolvimento:** Configuração, compilação, testes e implantação (Electron, Web, Docker) - veja **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Visão geral da arquitetura e sistema:** Estrutura de pastas, pilha tecnológica, decisões de design - veja **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Lançamentos e tags

- **Tags do Git** `v`* (por exemplo, `v1.0.10`) acionam o [fluxo de trabalho de lançamento](.github/workflows/release.yml). Os **GitHub Releases** incluem o instalador para Windows (`.exe`) e AppImages para Linux (**x64** e **arm64**).
- **Imagens Docker** são publicadas em `ghcr.io/wsj-br/transrewrt`. As tags das imagens correspondem à versão do Git (por exemplo, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) além da tag `latest`. Multiarquitetura: `linux/amd64` e `linux/arm64` (por exemplo, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Como contribuir

1. Faça um fork do repositório.
2. Crie um ramo para a funcionalidade: `git checkout -b feature/minha-funcionalidade`
3. Faça commits com mensagens claras.
4. Envie e abra um Pull Request para o ramo `main`.

Siga o estilo de código existente e teste suas alterações nos modos Electron e web antes de enviar. Veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para instruções de compilação e testes.

<br/>

**Relatando problemas:** Abra uma issue no [GitHub](https://github.com/wsj-br/transrewrt/issues). Inclua sua plataforma (Windows / Linux / Docker) e a versão do aplicativo (mostrada na janela Sobre ou na página de Lançamentos).

<br/><br/>

<a id="disclaimer"></a>
## Aviso

Nomes e ícones de produtos pertencem a seus respectivos proprietários e são usados apenas para fins de identificação. Este software não é afiliado nem endossado por nenhuma das marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licença

Direitos autorais © 2026 Waldemar Scudeller Jr.

[Licença Apache 2.0](LICENSE)