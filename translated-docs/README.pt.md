---
translated_at: "2026-03-25T22:27:00.590Z"
source_hash: "7b3703140b5006a6bfb0700c530b1afcc6e9b0fc364d69c57960ab4609dccbd9"
source_mtime: 1774475429145.525
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logotipo do Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Versão"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licença: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/plataforma-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plataforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Ferramenta de texto com IA: traduza entre idiomas, reescreva em diferentes estilos e transforme com instruções personalizadas — usando múltiplos provedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama local). Executa como aplicativo desktop (Electron) ou como aplicativo web autohospedado (Docker).

- **Traduzir** — entre dezenas de idiomas, com detecção automática da língua de origem
- **Reescrever** — corrigir gramática, melhorar clareza, formal/informal, encurtar, expandir, técnico
- **Transformar** — instruções personalizadas de IA; criar e gerenciar instruções, idioma de destino opcional por instrução
- **Histórico** — histórico completo de operações com texto de entrada/saída, filtros e exportação
- **Modelos e custos** — escolha modelos de qualquer provedor configurado; painéis de custos e uso com registros e resumos por modelo/ação/dia
- **Interface** — interface multilíngue (30+ idiomas, suporte a escrita da direita para a esquerda), fontes, ...
- **Modo web** — suporte multiusuário com papéis administrativos
- **Desktop** — aplicativo Electron para Windows e Linux
- **Autohospedado** — imagem Docker para amd64 e arm64 (pronto para Raspberry Pi)

Após a instalação, consulte o **[Guia do Usuário](USER-GUIDE.pt.md)** para um passeio completo por todas as funcionalidades.

<small>**Leia em outros idiomas:** [English (UK)](README.pt.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Observação sobre traduções da interface e documentação:** Todos os idiomas da interface, exceto o inglês original (UK), 
> foram traduzidos usando modelos de IA; a redação pode ser imprecisa ou conter erros.

</small>

<br/>

<a id="screenshots"></a>
## Capturas de tela

**Seletor de idioma**

![Seletor de idioma](../images/screenshots/pt/language-selector.png)

**Traduzir**

![Traduzir](../images/screenshots/pt/translate.png)

**Transformar - editor de instruçōes**

![Transformar - editor de instruçōes](../images/screenshots/pt/transform-prompt-edit.png)

**Painel**

![Painel de custos](../images/screenshots/pt/dashboard-summary.png)

**Histórico**

![Histórico](../images/screenshots/pt/history.png)

**Configurações - seleção de modelo**

![Configurações - seleção de modelo](../images/screenshots/pt/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Índice

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Guia rápido](#guia-rápido)
- [Instalação](#instalação)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Obter uma chave de API do OpenRouter](#obter-uma-chave-de-api-do-openrouter)
- [Configuração e ambiente](#configuração-e-ambiente)
- [Desenvolvimento e arquitetura](#desenvolvimento-e-arquitetura)
- [Publicações e etiquetas](#publicações-e-etiquetas)
- [Contribuir](#contribuir)
- [Aviso](#aviso)
- [Licença](#licença)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Guia rápido

**Docker (recomendado para alojamento próprio)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Substitua `sk-or-your-key` pela sua [chave de API do OpenRouter](https://openrouter.ai/keys) (ou defina chaves de outros provedores; veja [Configuração](#configuration-and-environment)). Abra [http://localhost:5000](http://localhost:5000) e altere a palavra-passe padrão do administrador antes de expor o serviço.

<br/>

> ℹ️ **NOTA**<br/>
> No Docker, as credenciais de LLM são definidas com variáveis de ambiente como `OPENROUTER_KEY`, `OPENAI_KEY`, `CEREBRAS_KEY`, … (não na interface web). Em ambiente de área de trabalho (Electron), configura as chaves em **Definições → API**.

<br/>

**Windows**

Transfira o ficheiro mais recente `Transrewrt Setup x.y.z.exe` em [Publicações](https://github.com/wsj-br/transrewrt/releases), execute o instalador e lance o programa a partir do menu Iniciar ou do atalho no ambiente de trabalho. Insira as suas chaves de API em **Definições → API**. Terá de configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

<br/>

**Linux**

Transfira o ficheiro `.AppImage` adequado ao seu processador em [Publicações](https://github.com/wsj-br/transrewrt/releases) (`x64` para PCs típicos, `arm64` para muitos dispositivos ARM, incluindo Raspberry Pi 4+), depois:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Insira as suas chaves de API em **Definições → API**. Terá de configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

Em Debian/Ubuntu poderá ter de instalar dependências adicionais primeiro:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Consulte [Instalação → Linux](#linux-electron) para mais detalhes.

<br/>

> ℹ️ **NOTA**<br/>
> macOS não é atualmente suportado. O Transrewrt está disponível para Windows, Linux e Docker.

<br/>

Depois de iniciar a aplicação, veja o **[Guia do Utilizador](USER-GUIDE.pt.md)** para aprender a traduzir, reescrever e transformar texto, gerir prompts e configurar modelos.

<br/><br/>

<a id="installation"></a>
## Instalação

<a id="windows-electron"></a>
### Windows (Electron)

- Transfira o instalador mais recente em [Publicações](https://github.com/wsj-br/transrewrt/releases).
- Execute o ficheiro `.exe` e siga as instruções do instalador.
- Na primeira execução: lance a aplicação a partir do menu Iniciar ou de um atalho no ambiente de trabalho. 

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Transfira o ficheiro `.AppImage` correspondente (`x64` ou `arm64`) em [Publicações](https://github.com/wsj-br/transrewrt/releases).
- Execute: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` em x86_64/amd64 ou use o nome de ficheiro `...-arm64.AppImage` em ARM64.
- Dependências adicionais (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Consulte [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para mais informações.

<br/>

<a id="docker"></a>
### Docker

- Transferir: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Defina pelo menos uma chave de provedor através de variáveis de ambiente (por exemplo `OPENROUTER_KEY` para o OpenRouter). Passe as variáveis com `-e` ou via `docker compose` / `.env` para que segredos não fiquem integrados na imagem.
- As chaves de provedor **não** são inseridas na interface web; o servidor lê-as do ambiente.

Exemplo - volume nomeado para persistência (chave OpenRouter via env):

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
| Porta    | `5000` (mapeie com `-p 5000:5000`)                                                                              |
| Volume   | Monte `/app/data` para preservar a configuração e a base de dados                                                         |
| Variáveis de ambiente | `PORT`, `CONFIG_PATH`, mais chaves LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - veja [Configuração](#configuration-and-environment) |

Para compilar e executar a partir do código-fonte: `docker compose up --build -d` ou `pnpm docker:up` - veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Obter uma chave API OpenRouter

O Transrewrt suporta múltiplos fornecedores de IA. [OpenRouter](https://openrouter.ai) é uma escolha popular porque agrega muitos modelos sob uma única chave e oferece modelos gratuitos.

1. Registe-se ou inicie sessão em [openrouter.ai](https://openrouter.ai).
2. Abra a página [Keys](https://openrouter.ai/keys) e crie uma nova chave (dê-lhe um nome e, opcionalmente, defina um limite de crédito). Pode usar modelos gratuitos sem adicionar crédito.
3. **Ambiente de trabalho (Electron):** cole as chaves em **Definições → API**. **Docker:** defina variáveis de ambiente como `OPENROUTER_KEY` (veja [Início rápido](#quick-start)).

Não utilize o modelo **Body Builder** do OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) para traduzir, reescrever ou transformar: ele devolve cargas JSON com os pedidos, não o texto finalizado para essas tarefas. Veja [Definições → Modelos](USER-GUIDE.pt.md#models) no Guia do Utilizador.

Pode também usar outros fornecedores (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ou executar modelos localmente com [Ollama](https://ollama.com). Veja [Configuração](#configuration-and-environment) para obter a lista completa de fornecedores suportados e variáveis de ambiente.

> ⚠️ **AVISO**<br/>
> Se estiver a utilizar o Ollama a partir de outro dispositivo, contentor ou serviço, lembre-se de configurar o Ollama para permitir ligações externas (não apenas localhost).

Para limites, BYOK e mais informações, consulte [Autenticação OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuração e ambiente

**Localizações do ficheiro de configuração**

| Implementação      | Localização da configuração                     |
| ------------------ | ----------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                         |
| Electron (Linux)   | `~/.config/transrewrt/`                         |
| Web / Docker       | `/app/data/config.json` (use um volume para persistência) |

<br/>

**Variáveis de ambiente** (apenas web/Docker; o Electron utiliza o ficheiro de configuração local)

| Variável         | Padrão                  | Descrição |
| ---------------- | ----------------------- | --------- |
| `PORT`           | `5000`                  | Porta onde o servidor escuta |
| `CONFIG_PATH`    | `/app/data/config.json` | Caminho para o ficheiro de configuração |
| `OPENROUTER_KEY` | *(vazio)*               | Chave API OpenRouter |
| `OPENAI_KEY`     | *(vazio)*               | Chave API OpenAI |
| `CEREBRAS_KEY`   | *(vazio)*               | Chave API Cerebras |
| `ANTHROPIC_KEY`  | *(vazio)*               | Chave API Anthropic |
| `GOOGLE_KEY`     | *(vazio)*               | Chave API Google Gemini |
| `DEEPSEEK_KEY`   | *(vazio)*               | Chave API DeepSeek |
| `GROQ_KEY`       | *(vazio)*               | Chave API Groq |
| `MISTRAL_KEY`    | *(vazio)*               | Chave API Mistral |
| `OLLAMA_URL`     | *(vazio)*               | URL base do Ollama (ex: `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(vazio)*               | Chave API xAI |

Configure apenas os fornecedores que utilizar. Os IDs dos modelos são agrupados por namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Exibição de custos:** O OpenRouter devolve o custo facturado exato, quando aplicável. Outros fornecedores utilizam o custo **estimado** com base nos preços públicos dos modelos do OpenRouter, quando uma chave OpenRouter estiver disponível; sem ela, o custo de fornecedores não OpenRouter pode aparecer como `0`. As estimativas não são faturas.

<br/>

**Dados e persistência:** Para Docker, monte um volume em `/app/data` para que `config.json` e a base de dados SQLite persistam entre reinícios do contentor. Sem um volume, todos os dados são perdidos quando o contentor for encerrado.

**Desenvolvedores:** Após atualizar alterações que substituem a antiga configuração única de chave, redefina ou una `data/config.json` com a nova estrutura padrão de `src/config-defaults/config_default.json`, caso o seu ficheiro local ainda utilize campos removidos (`api_key`, `api_url`, opções de proxy).

<br/>

**Autenticação na Web:**

- Administrador padrão: `admin` / `transrewrt26`.
- Gerencie os utilizadores em **Definições → Utilizadores**.
- Resetar uma palavra-passe: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (a partir do código-fonte: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **AVISO**<br/>
> Altere imediatamente a palavra-passe padrão do administrador em qualquer equipamento com acesso à rede.

<br/>

Definições principais (tipo de letra, modelos, idiomas, etc.) estão disponíveis nas Definições da aplicação.

<br/><br/>

<a id="development-and-architecture"></a>

## Desenvolvimento e arquitetura

- **Desenvolvimento:** Configuração, compilação, testes e implantação (Electron, Web, Docker) - veja **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arquitetura e visão geral do sistema:** Estrutura de pastas, pilha tecnológica, decisões de design - veja **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Versões e tags

- **Tags do Git** `v`* (por exemplo, `v1.0.10`) disparam o [fluxo de trabalho de versão](.github/workflows/release.yml). As **GitHub Releases** incluem o instalador para Windows (`.exe`) e AppImages para Linux (**x64** e **arm64**).
- **Imagens Docker** são publicadas em `ghcr.io/wsj-br/transrewrt`. As tags das imagens correspondem à versão do Git (por exemplo, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`), além da tag `latest`. Multi-arquitetura: `linux/amd64` e `linux/arm64` (por exemplo, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Como contribuir

1. Faça um fork do repositório.
2. Crie uma branch para a funcionalidade: `git checkout -b feature/minha-funcionalidade`
3. Faça commit das suas alterações com uma mensagem clara.
4. Envie e crie um Pull Request para a branch `main`.

Siga o estilo de código existente e teste suas alterações nos modos Electron e web antes de enviar. Veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para instruções de compilação e testes.

<br/>

**Relatando problemas:** Abra uma issue no [GitHub](https://github.com/wsj-br/transrewrt/issues). Inclua sua plataforma (Windows / Linux / Docker) e a versão do aplicativo (exibida na janela "Sobre" ou na página de Releases).

<br/><br/>

<a id="disclaimer"></a>
## Aviso Legal

Os nomes e ícones de produtos pertencem aos seus respectivos proprietários e são usados apenas para fins de identificação. Este software não é afiliado nem endossado por nenhuma das marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licença

Copyright © 2026 Waldemar Scudeller Jr.

[Licença Apache 2.0](LICENSE)