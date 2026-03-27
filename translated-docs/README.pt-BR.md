---
translated_at: "2026-03-26T00:00:12.327Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logotipo do Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.15-blue" alt="Versão"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licença: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plataforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Ferramenta de texto com IA: traduza entre idiomas, reescreva em diferentes estilos e transforme com prompts personalizados — usando múltiplos provedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama local). Executa como aplicativo para desktop (Electron) ou aplicativo web autohospedado (Docker).

- **Traduzir** — entre dezenas de idiomas, com detecção automática da origem
- **Reescrever** — corrigir gramática, melhorar clareza, formal/informal, encurtar, expandir, técnico
- **Transformar** — prompts personalizados de IA; crie e gerencie prompts, idioma de destino opcional por prompt
- **Histórico** — histórico completo de execuções com entradas/saídas de texto, filtros e exportação
- **Modelos e custo** — escolha modelos de qualquer provedor configurado; painéis de custo e uso com log, resumos por modelo/operação/dia
- **Interface** — interface multilíngue (30+ idiomas, suporte a RTL), fontes, ...
- **Modo Web** — suporte multiusuário com papéis de administrador
- **Desktop** — aplicativo Electron para Windows e Linux
- **Autohospedado** — imagem Docker para amd64 e arm64 (pronto para Raspberry Pi)

Após a instalação, consulte o **[Guia do Usuário](USER-GUIDE.pt-BR.md)** para um passeio completo por todas as funcionalidades.

<small>**Leia em outros idiomas:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Observação sobre traduções da interface e documentação:** Todos os idiomas da interface, exceto o original inglês (UK),
> foram traduzidos usando modelos de IA; o texto pode ser impreciso ou conter erros.

</small>

<br/>

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

**Configurações - seleção de modelos**

![Configurações - seleção de modelos](../images/screenshots/pt-BR/settings-models.png)

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
- [Obter uma chave de API OpenRouter](#obter-uma-chave-de-api-openrouter)
- [Configuração e ambiente](#configuração-e-ambiente)
- [Desenvolvimento e arquitetura](#desenvolvimento-e-arquitetura)
- [Lançamentos e tags](#lançamentos-e-tags)
- [Contribuição](#contribuição)
- [Declaração de isenção de responsabilidade](#declaração-de-isenção-de-responsabilidade)
- [Licença](#licença)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="início-rápido"></a>
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

Substitua `sk-or-your-key` pela sua [chave de API OpenRouter](https://openrouter.ai/keys) (ou configure chaves de outros provedores; veja [Configuração](#configuração-e-ambiente)). Abra [http://localhost:5000](http://localhost:5000) e altere a senha padrão do administrador antes de expor o serviço.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> No Docker, as credenciais do LLM são definidas por meio de variáveis de ambiente, como `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (não na interface da web). Em ambientes desktop (Electron), você configura as chaves em **Configurações → API**.

<br/>

**Windows**

Baixe o `Transrewrt Setup x.y.z.exe` mais recente em [Lançamentos](https://github.com/wsj-br/transrewrt/releases), execute o instalador e inicie a aplicação a partir do menu Iniciar ou do atalho na área de trabalho. Insira suas chaves de API em **Configurações → API**. É necessário configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

<br/>

**Linux**

Baixe o `.AppImage` compatível com sua CPU em [Lançamentos](https://github.com/wsj-br/transrewrt/releases) (`x64` para PCs comuns, `arm64` para muitos dispositivos ARM, incluindo Raspberry Pi 4+), e então:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Insira suas chaves de API em **Configurações → API**. É necessário configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

No Debian/Ubuntu, você pode precisar instalar dependências adicionais primeiro:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Veja [Instalação → Linux](#linux-electron) para detalhes.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> macOS não é suportado atualmente. O Transrewrt está disponível para Windows, Linux e Docker.

<br/>

Após iniciar o aplicativo, consulte o **[Guia do Usuário](USER-GUIDE.pt-BR.md)** para aprender como traduzir, reescrever e transformar texto, gerenciar prompts e configurar modelos.

<br/><br/>

<a id="instalação"></a>
## Instalação

<a id="windows-electron"></a>
### Windows (Electron)

- Baixe o instalador mais recente em [Lançamentos](https://github.com/wsj-br/transrewrt/releases).
- Execute o `.exe` e siga as instruções do instalador.
- Primeira execução: inicie o aplicativo pelo menu Iniciar ou atalho na área de trabalho.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Baixe o `.AppImage` correspondente (`x64` ou `arm64`) em [Lançamentos](https://github.com/wsj-br/transrewrt/releases).
- Execute: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` no x86_64/amd64, ou use o nome de arquivo `...-arm64.AppImage` no ARM64.
- Dependências adicionais (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para mais detalhes.

<br/>

<a id="docker"></a>
### Docker

- Baixe: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Configure pelo menos uma chave de provedor via ambiente (por exemplo, `OPENROUTER_API_KEY` para o OpenRouter). Passe as variáveis com `-e` ou via `docker compose` / `.env` para que segredos não sejam embutidos na imagem.
- Chaves de provedores **não** são inseridas na interface web; o servidor as lê diretamente do ambiente.

Exemplo - volume nomeado para persistência (chave OpenRouter via ambiente):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opção    | Descrição                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Porta    | `5000` (mapeie com `-p 5000:5000`)                                                                              |
| Volume   | Monte `/app/data` para manter configurações e banco de dados persistentes                                                         |
| Variáveis de ambiente | `PORT`, `CONFIG_PATH`, além das chaves de LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - veja [Configuração](#configuração-e-ambiente) |

Para compilar e executar a partir do código-fonte: `docker compose up --build -d` ou `pnpm docker:up` - veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="obter-uma-chave-de-api-openrouter"></a>

## Obtendo uma chave de API do OpenRouter

O Transrewrt suporta múltiplos provedores de IA. O [OpenRouter](https://openrouter.ai) é uma opção popular porque reúne muitos modelos sob uma única chave e oferece modelos gratuitos.

1. Cadastre-se ou faça login em [openrouter.ai](https://openrouter.ai).
2. Acesse a página [Keys](https://openrouter.ai/keys) e crie uma nova chave (dê um nome e, opcionalmente, defina um limite de crédito). Você pode usar modelos gratuitos sem adicionar créditos.
3. **Desktop (Electron):** cole as chaves em **Configurações → API**. **Docker:** defina variáveis de ambiente como `OPENROUTER_API_KEY` (veja [Início rápido](#quick-start)).

Não use o modelo **Body Builder** do OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) para traduzir, reescrever ou transformar: ele retorna cargas JSON de solicitações, não o texto finalizado para essas tarefas. Veja [Configurações → Modelos](USER-GUIDE.pt-BR.md#models) no Guia do Usuário.

Você também pode usar outros provedores (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ou rodar modelos localmente com o [Ollama](https://ollama.com). Veja [Configuração](#configuration-and-environment) para obter a lista completa de provedores suportados e variáveis de ambiente.

> ⚠️ **ATENÇÃO**<br/>
> Se você estiver usando o Ollama a partir de outro dispositivo, contêiner ou serviço, lembre-se de configurar o Ollama para permitir conexões externas (não apenas localhost).


Para limites, BYOK e mais, veja [autenticação OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuração e ambiente

**Localizações do arquivo de configuração**

| Implantação         | Local da configuração                                   |
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
| `OPENROUTER_API_KEY` | *(vazio)*               | Chave da API do OpenRouter |
| `OPENAI_API_KEY`     | *(vazio)*               | Chave da API do OpenAI |
| `CEREBRAS_API_KEY`   | *(vazio)*               | Chave da API do Cerebras |
| `ANTHROPIC_API_KEY`  | *(vazio)*               | Chave da API do Anthropic |
| `GOOGLE_API_KEY`     | *(vazio)*               | Chave da API do Google Gemini |
| `DEEPSEEK_API_KEY`   | *(vazio)*               | Chave da API do DeepSeek |
| `GROQ_API_KEY`       | *(vazio)*               | Chave da API do Groq |
| `MISTRAL_API_KEY`    | *(vazio)*               | Chave da API do Mistral |
| `OLLAMA_URL`     | *(vazio)*               | URL base do Ollama (ex: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(vazio)*               | Chave da API do xAI |

Configure apenas os provedores que você utiliza. Os IDs dos modelos são organizados por namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Exibição de custos:** O OpenRouter retorna o custo exato cobrado quando aplicável. Outros provedores usam o custo **estimado** com base nos preços públicos dos modelos do OpenRouter quando uma chave do OpenRouter está disponível; sem ela, o custo de provedores não OpenRouter pode aparecer como `0`. Estimativas não são faturas.

<br/>

**Dados e persistência:** Para o Docker, monte um volume em `/app/data` para que o `config.json` e o banco de dados SQLite sejam mantidos após reinicializações do contêiner. Sem um volume, todos os dados serão perdidos quando o contêiner parar.

**Desenvolvedores:** Após atualizar com mudanças que substituam a antiga configuração de chave única, reinicie ou una o `data/config.json` com a nova estrutura padrão de `src/config-defaults/config_default.json`, caso seu arquivo local ainda use campos removidos (`api_key`, `api_url`, opções de proxy).

<br/>

**Autenticação web:**

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
- **Visão geral da arquitetura e do sistema:** Estrutura de pastas, pilha tecnológica e decisões de design - veja **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Releases e tags

- **Tags do Git** `v`* (por exemplo, `v1.0.10`) acionam o [fluxo de trabalho de release](.github/workflows/release.yml). Os **GitHub Releases** incluem o instalador para Windows (`.exe`) e os AppImages para Linux (**x64** e **arm64**).
- As **imagens do Docker** são publicadas em `ghcr.io/wsj-br/transrewrt`. As tags das imagens correspondem à versão do Git (por exemplo, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) além da tag `latest`. Multiarquitetura: `linux/amd64` e `linux/arm64` (por exemplo, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Contribuindo

1. Faça um fork do repositório.
2. Crie um branch para a funcionalidade: `git checkout -b feature/minha-funcionalidade`
3. Faça commit das suas alterações com uma mensagem clara.
4. Envie (push) e abra um Pull Request para o branch `main`.

Siga o estilo de código existente e teste suas alterações nos modos Electron e web antes de enviar. Veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para instruções de compilação e testes.

<br/>

**Relatando problemas:** Abra uma issue no [GitHub](https://github.com/wsj-br/transrewrt/issues). Inclua sua plataforma (Windows / Linux / Docker) e a versão do aplicativo (exibida na janela "Sobre" ou na página de Releases).

<br/><br/>

<a id="disclaimer"></a>
## Aviso Legal

Os nomes e ícones dos produtos pertencem aos seus respectivos proprietários e são usados apenas para fins de identificação. Este software não é afiliado nem endossado por nenhuma das marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licença

Copyright © 2026 Waldemar Scudeller Jr.

[Licença Apache 2.0](LICENSE)