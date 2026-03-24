---
translated_at: "2026-03-24T00:49:39.629Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo do Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Versão"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licença: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plataforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Ferramenta de texto com IA: traduza entre idiomas, reescreva em diferentes estilos e transforme com prompts personalizados — usando múltiplos provedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama local). Funciona como aplicativo de desktop (Electron) ou aplicativo web autohospedado (Docker).

- **Traduzir** — entre dezenas de idiomas, com detecção automática da língua de origem
- **Reescrever** — corrigir gramática, melhorar clareza, estilo formal/informal, encurtar, expandir, conteúdo técnico
- **Transformar** — prompts personalizados com IA; criar e gerenciar prompts, idioma de destino opcional por prompt
- **Histórico** — histórico completo de execuções com entradas/saídas de texto, filtros e exportação
- **Modelos e custos** — escolha modelos de qualquer provedor configurado; painel de custos com registro SQLite, resumos por modelo/operação/dia
- **Interface** — interface multilíngue (30+ idiomas, suporte a escrita da direita para a esquerda), fontes, ...
- **Modo Web** — suporte multiusuário com funções administrativas; as chaves de API permanecem no servidor, nunca expostas ao navegador
- **Desktop** — aplicativo Electron para Windows e Linux
- **Autohospedagem** — imagem Docker para amd64 e arm64 (pronto para Raspberry Pi)

Após a instalação, consulte o **[Guia do Usuário](USER-GUIDE.pt-BR.md)** para um guia completo de todos os recursos.

<small>**Leia em outros idiomas:** [English (UK)](README.pt-BR.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<br/>

**Observação sobre traduções da interface e documentação:** Todos os idiomas da interface, exceto o inglês (UK), foram traduzidos usando modelos de IA; a redação pode ser imprecisa ou conter erros.

<a id="screenshots"></a>
## Capturas de tela

**Seletor de idioma**

![Seletor de idioma](../images/screenshots/pt-BR/language-selector.png)

**Traduzir**

![Traduzir](../images/screenshots/pt-BR/translate.png)

**Transformar - editor de prompts**

![Transformar - editor de prompts](../images/screenshots/pt-BR/transform-prompt-edit.png)

**Painel**

![Painel de custos](../images/screenshots/pt-BR/dashboard-summary.png)

**Histórico**

![Histórico](../images/screenshots/pt-BR/history.png)

**Configurações - seleção de modelo**

![Configurações - seleção de modelo](../images/screenshots/pt-BR/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Sumário

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Início rápido](#início-rápido)
- [Instalação](#instalação)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Obtendo uma chave da API OpenRouter](#obtendo-uma-chave-da-api-openrouter)
- [Configuração e ambiente](#configuração-e-ambiente)
- [Desenvolvimento e arquitetura](#desenvolvimento-e-arquitetura)
- [Lançamentos e tags](#lançamentos-e-tags)
- [Contribuição](#contribuição)
- [Aviso](#aviso)
- [Licença](#licença)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Início rápido

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

> ℹ️ **OBSERVAÇÃO**<br/>
> No Docker, as credenciais do LLM são definidas por meio de variáveis de ambiente como `OPENROUTER_KEY`, `OPENAI_KEY`, … (não pela interface web). No desktop (Electron), você configura as chaves em **Configurações → API**.

<br/>

**Windows**

Faça o download do último `Transrewrt Setup x.y.z.exe` em [Lançamentos](https://github.com/wsj-br/transrewrt/releases), execute o instalador e depois inicie o aplicativo pelo menu Iniciar ou atalho na área de trabalho. Insira suas chaves da API em **Configurações → API**. Você precisa configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

<br/>

**Linux**

Faça o download do `.AppImage` em [Lançamentos](https://github.com/wsj-br/transrewrt/releases), então:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Insira suas chaves da API em **Configurações → API**. Você precisa configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

No Debian/Ubuntu, talvez você precise instalar dependências extras primeiro:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Veja [Instalação → Linux](#linux-electron) para detalhes.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> macOS não é atualmente suportado. O Transrewrt está disponível para Windows, Linux e Docker.

<br/>

Uma vez que o aplicativo esteja em execução, consulte o **[Guia do Usuário](USER-GUIDE.pt-BR.md)** para aprender a traduzir, reescrever e transformar textos, gerenciar prompts e configurar modelos.

<br/><br/>

<a id="installation"></a>
## Instalação

<a id="windows-electron"></a>
### Windows (Electron)

- Faça o download do instalador mais recente em [Lançamentos](https://github.com/wsj-br/transrewrt/releases).
- Execute o `.exe` e siga as instruções do instalador.
- Primeira execução: inicie o aplicativo pelo menu Iniciar ou atalho na área de trabalho.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Faça o download do `.AppImage` em [Lançamentos](https://github.com/wsj-br/transrewrt/releases).
- Execute: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Dependências extras (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para mais detalhes.

<br/>

<a id="docker"></a>
### Docker

- Baixe a imagem: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Defina ao menos uma chave de provedor por meio de variável de ambiente (por exemplo, `OPENROUTER_KEY` para OpenRouter). Passe as variáveis com `-e` ou via `docker compose` / `.env` para que os segredos não sejam incorporados à imagem.
- As chaves dos provedores **não** são inseridas pela interface web; o servidor as lê do ambiente.

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

| Opção   | Descrição                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Porta     | `5000` (mapeie com `-p 5000:5000`)                                                                              |
| Volume   | Monte `/app/data` para configurações e banco de dados persistentes                                                         |
| Variáveis de ambiente | `PORT`, `CONFIG_PATH`, mais chaves do LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - veja [Configuração](#configuração-e-ambiente) |

Para compilar e executar a partir do código-fonte: `docker compose up --build -d` ou `pnpm docker:up` - veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Obtendo uma chave API do OpenRouter

O Transrewrt suporta múltiplos provedores de IA. [OpenRouter](https://openrouter.ai) é uma escolha popular porque agrega diversos modelos sob uma única chave e oferece modelos gratuitos.

1. Crie uma conta ou faça login em [openrouter.ai](https://openrouter.ai).
2. Acesse a página [Keys](https://openrouter.ai/keys) e crie uma nova chave (dê um nome e, opcionalmente, defina um limite de crédito). Você pode usar modelos gratuitos sem adicionar créditos.
3. **Desktop (Electron):** cole as chaves em **Configurações → API**. **Docker:** defina variáveis de ambiente como `OPENROUTER_KEY` (veja [Início rápido](#quick-start)).

Você também pode usar outros provedores (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) ou executar modelos localmente com o [Ollama](https://ollama.com). Veja [Configuração](#configuration-and-environment) para a lista completa de provedores suportados e variáveis de ambiente.

Para limites, BYOK e mais, consulte [autenticação do OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuração e ambiente

**Locais do arquivo de configuração**

| Implantação        | Local da configuração                             |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (use um volume para manter os dados) |

<br/>

**Variáveis de ambiente** (apenas web/Docker; o Electron usa o arquivo de configuração local)

| Variável           | Padrão                  | Descrição |
| ------------------ | ----------------------- | --------- |
| `PORT`             | `5000`                  | Porta de escuta do servidor |
| `CONFIG_PATH`      | `/app/data/config.json` | Caminho para o arquivo de configuração |
| `OPENROUTER_KEY`   | *(vazio)*               | Chave API do OpenRouter |
| `OPENAI_KEY`       | *(vazio)*               | Chave API da OpenAI |
| `ANTHROPIC_KEY`    | *(vazio)*               | Chave API da Anthropic |
| `GOOGLE_KEY`       | *(vazio)*               | Chave API do Google Gemini |
| `DEEPSEEK_KEY`     | *(vazio)*               | Chave API do DeepSeek |
| `GROQ_KEY`         | *(vazio)*               | Chave API do Groq |
| `MISTRAL_KEY`      | *(vazio)*               | Chave API do Mistral |
| `OLLAMA_URL`       | *(vazio)*               | URL base do Ollama (ex: `http://host.docker.internal:11434`) |
| `XAI_KEY`          | *(vazio)*               | Chave API do xAI |

Configure apenas os provedores que você utiliza. Os IDs dos modelos são nomeados com namespace (`openrouter/…`, `openai/…`, `ollama/…`, etc.).

**Exibição de custo:** O OpenRouter retorna o custo exato cobrado quando aplicável. Outros provedores usam o custo **estimado** com base nos preços públicos dos modelos do OpenRouter, quando uma chave OpenRouter estiver disponível; sem ela, o custo de provedores não-OpenRouter pode aparecer como `0`. As estimativas não são faturas.

<br/>

**Dados e persistência:** Para Docker, monte um volume em `/app/data` para que `config.json` e o banco de dados SQLite persistam após reinicializações do contêiner. Sem um volume, todos os dados são perdidos quando o contêiner é encerrado.

**Desenvolvedores:** Após atualizar mudanças que substituem a antiga configuração de chave única, redefina ou una `data/config.json` com o novo formato padrão presente em `src/config-defaults/config_default.json`, caso seu arquivo local ainda use campos removidos (`api_key`, `api_url`, opções de proxy).

<br/>

**Autenticação web:**

- Administrador padrão: `admin` / `transrewrt26`.
- Gerencie usuários em **Configurações → Usuários**.
- Redefina uma senha: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (a partir do código-fonte: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **ATENÇÃO**<br/>
> Altere imediatamente a senha padrão do administrador em qualquer hospedagem acessível por rede.

<br/>

Configurações principais (fonte, modelos, idiomas, etc.) estão disponíveis nas Configurações do aplicativo.

<br/><br/>

<a id="development-and-architecture"></a>
## Desenvolvimento e arquitetura

- **Desenvolvimento:** Configuração, construção, testes e implantação (Electron, Web, Docker) - veja **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Visão geral da arquitetura e do sistema:** Estrutura de pastas, pilha tecnológica, decisões de design - veja **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Lançamentos e tags

- **Tags do Git** `v`* (por exemplo, `v1.0.10`) acionam o [fluxo de trabalho de lançamento](.github/workflows/release.yml). Os **GitHub Releases** incluem o instalador para Windows (`.exe`) e o AppImage para Linux.
- **Imagens do Docker** são publicadas em `ghcr.io/wsj-br/transrewrt`. As tags das imagens correspondem à versão do Git (por exemplo, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) além da tag `latest`. Multi-arquitetura: `linux/amd64` e `linux/arm64` (por exemplo, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Contribuição

1. Faça um fork do repositório.
2. Crie uma branch para a funcionalidade: `git checkout -b feature/minha-funcionalidade`
3. Faça commit das suas alterações com uma mensagem clara.
4. Envie e abra um Pull Request para a branch `main`.

Siga o estilo de código existente e teste suas alterações nos modos Electron e web antes de enviar. Veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para instruções de compilação e testes.

<br/>

**Relatando problemas:** Abra um issue no [GitHub](https://github.com/wsj-br/transrewrt/issues). Inclua sua plataforma (Windows / Linux / Docker) e a versão do aplicativo (mostrada na janela "Sobre" ou na página de Lançamentos).

<br/><br/>

<a id="disclaimer"></a>
## Aviso Legal

Os nomes e ícones dos produtos pertencem aos respectivos proprietários e são usados apenas para fins de identificação. Este software não tem afiliação com, nem é endossado por, nenhuma das marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licença

Copyright © 2026 Waldemar Scudeller Jr.

[Licença Apache 2.0](LICENSE)