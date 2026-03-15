---
translated_at: "2026-03-15T21:55:22.509Z"
source_hash: "b0c865b5c3a974ee09fb533d8ca52413ddab37aacda108239395719b8c2588b2"
source_mtime: 1773611628537.9895
model: "stepfun/step-3.5-flash:free"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logo do Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.11-blue" alt="Versão"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licença: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plataforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Ferramenta de texto com IA: traduza entre idiomas, reescreva em diferentes estilos e transforme com prompts personalizados - tudo via [OpenRouter](https://openrouter.ai). Executa como aplicativo desktop (Electron) ou aplicação web auto-hospedada (Docker).

- **Traduzir** - entre dezenas de idiomas, com detecção automática do idioma de origem
- **Reescrever** - corrigir gramática, melhorar clareza, formal/informal, encurtar, expandir, técnico
- **Transformar** - prompts personalizados de IA; criar e gerenciar prompts, idioma de destino opcional por prompt
- **Modelos e custo** - escolha qualquer modelo OpenRouter; painel de custos com log SQLite, resumos por modelo/operação/dia
- **Interface** - i18n (pt-BR, de, fr, es, RTL), temas, fontes, atalhos de teclado; modo web seguro (chave API apenas no servidor)
- **Desktop** - aplicativo Electron para Windows e Linux
- **Auto-hospedado** - imagem Docker para amd64 e arm64 (pronto para Raspberry Pi)

Após a instalação, consulte o **[Guia do Usuário](../USER-GUIDE.md)** para um passeio completo por todos os recursos.

<small>**Leia em outros idiomas:** [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

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

**Configurações - seleção de modelo**

![Configurações - seleção de modelo](../images/screenshots/pt-BR/settings-models.png)

<br /><br />

<a id="table-of-contents"></a>
## Sumário

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Introdução rápida](#quick-start)
- [Instalação](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Como obter uma chave da API OpenRouter](#getting-an-openrouter-api-key)
- [Configuração e ambiente](#configuration-and-environment)
- [Desenvolvimento e arquitetura](#development-and-architecture)
- [Lançamentos e tags](#releases-and-tags)
- [Contribuindo](#contributing)
- [Aviso legal](#disclaimer)
- [Licença](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="quick-start"></a>

## Início rápido

**Docker (recomendado para auto-hospedagem)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Substitua `sk-or-your-key` pela sua [chave de API do OpenRouter](https://openrouter.ai/keys). Abra [http://localhost:5000](http://localhost:5000) e altere a senha de administrador padrão antes de expor o serviço.

<br />

> ℹ️ **NOTA**<br/>
> No Docker, a chave de API do OpenRouter é definida apenas via variável de ambiente `API_KEY` (não na interface web). No desktop (Electron), você a cola em **Configurações → API**.

<br />

**Windows**

Baixe o `Transrewrt Setup x.y.z.exe` mais recente em [Releases](https://github.com/wsj-br/transrewrt/releases), execute o instalador e inicie pelo menu Iniciar ou atalho na área de trabalho. Insira sua chave de API do OpenRouter em **Configurações → API**.

<br />

**Linux**

Baixe o `.AppImage` em [Releases](https://github.com/wsj-br/transrewrt/releases) e então:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Insira sua chave de API do OpenRouter em **Configurações → API**. No Debian/Ubuntu, pode ser necessário instalar dependências adicionais primeiro:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Veja [Instalação → Linux](#linux-electron) para detalhes.

<br />

> ℹ️ **NOTA**<br/>
> Atualmente, macOS não é suportado. O Transrewrt está disponível para Windows, Linux e Docker.

<br />

Uma vez que o aplicativo esteja em execução, consulte o **[Guia do Usuário](../USER-GUIDE.md)** para aprender a traduzir, reescrever e transformar texto, gerenciar prompts e configurar modelos.

<br /><br />

<a id="installation"></a>
## Instalação

<a id="windows-electron"></a>
### Windows (Electron)

- Baixe o instalador mais recente em [Releases](https://github.com/wsj-br/transrewrt/releases).
- Execute o `.exe` e siga o instalador.
- Primeira execução: inicie o aplicativo pelo menu Iniciar ou atalho na área de trabalho. A configuração é armazenada em `%APPDATA%\transrewrt\`.

<br />

<a id="linux-electron"></a>
### Linux (Electron)

- Baixe o `.AppImage` em [Releases](https://github.com/wsj-br/transrewrt/releases).
- Execute: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Dependências adicionais (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para mais informações.

<br />

<a id="docker"></a>
### Docker

- Faça pull: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- A chave de API do OpenRouter **deve** ser definida via variável de ambiente `API_KEY`. Passe com `-e API_KEY` (ou via `docker compose` / `.env`) para que a chave não seja visível na lista de processos.
- A chave de API não pode ser inserida na interface web.

Exemplo - volume nomeado para persistência (chave de API passada via env, não na linha de comando):

```bash
API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br />

| Opção   | Descrição                                                                                                   |
| ------- | ----------------------------------------------------------------------------------------------------------- |
| Porta   | `5000` (mapeie com `-p 5000:5000`)                                                                          |
| Volume  | Monte `/app/data` para persistência de configuração e banco de dados                                        |
| Env vars| `PORT`, `CONFIG_PATH`, `API_KEY`, `API_URL`, `KEY_SEED` - veja [Configuração](#configuration-and-environment) |

Para compilar e executar a partir do código-fonte: `docker compose up --build -d` ou `pnpm run docker:up` - veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br /><br />

<a id="getting-an-openrouter-api-key"></a>
## Obtendo uma chave de API do OpenRouter

O Transrewrt usa o [OpenRouter](https://openrouter.ai) para modelos de IA. Você precisa de uma chave de API para traduzir, reescrever ou transformar texto.

1. Cadastre-se ou faça login em [openrouter.ai](https://openrouter.ai).
2. Abra a página [Keys](https://openrouter.ai/keys) e crie uma nova chave (dê um nome e, opcionalmente, defina um limite de crédito). Você pode usar modelos gratuitos sem adicionar crédito.
3. **Desktop (Electron):** cole a chave em **Configurações → API**. **Docker:** defina a variável de ambiente `API_KEY` (veja [Início rápido](#quick-start)).

Para limites, BYOK e mais, veja [Autenticação do OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br /><br />

<a id="configuration-and-environment"></a>

## Configuração e ambiente

**Localizações de arquivos de configuração**

| Implantação         | Localização da configuração                           |
| ------------------ | ----------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                               |
| Electron (Linux)   | `~/.config/transrewrt/`                               |
| Web / Docker       | `/app/data/config.json` (use um volume para persistir) |

<br />

**Variáveis de ambiente** (apenas web/Docker; o Electron usa o arquivo de configuração local)

| Variável      | Padrão                        | Descrição                                                   |
| ------------- | ----------------------------- | ----------------------------------------------------------- |
| `PORT`        | `5000`                        | Porta de escuta do servidor                                 |
| `CONFIG_PATH` | `/app/data/config.json`       | Caminho para o arquivo de configuração                     |
| `API_KEY`     | *(vazio)*                     | Chave da API do OpenRouter (obrigatória para Docker; defina via env, não pela UI) |
| `API_URL`     | `https://openrouter.ai/api/v1` | URL base da API de IA upstream                             |
| `KEY_SEED`    | *(vazio)*                     | Semente da chave do proxy Transrewrt (substitui a configuração se definida) |

<br />

**Dados e persistência:** Para Docker, monte um volume em `/app/data` para que `config.json` e o banco de dados SQLite persistam entre as reinicializações do contêiner. Sem um volume, todos os dados são perdidos quando o contêiner para.

<br />

**Autenticação da web:**

- Admin padrão: `admin` / `transrewrt26`.
- Gerenciar usuários em **Configurações → Usuários**.
- Redefinir uma senha: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (da fonte: `pnpm run reset-web-password -- <username> <new-password>`)

<br />

> ⚠️ **AVISO**<br/>
> Altere a senha de administrador padrão imediatamente em qualquer host acessível pela rede.

<br />

**Proxy Transrewrt (opcional):** Você pode rotear o tráfego da API através de um proxy externo que usa uma chave rolante baseada em tempo. Em **Configurações → API**, ative **Usar Proxy Transrewrt**, defina **Semente da chave** e defina **URL da API** para a URL base do proxy. Veja [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md) para detalhes.

As configurações principais (tema, fonte, modelos, idiomas, etc.) estão disponíveis na caixa de diálogo Configurações ou podem ser editadas diretamente no JSON de configuração. A lista completa e os padrões estão documentados em [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br /><br />

<a id="development-and-architecture"></a>
## Desenvolvimento e arquitetura

- **Desenvolvimento:** Configuração, build, teste e implantação (Electron, Web, Docker) - veja **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arquitetura e visão geral do sistema:** Estrutura de pastas, pilha tecnológica, decisões de design, proxy Transrewrt - veja **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

```mermaid
graph TD
    subgraph renderer["src/renderer/ (aplicação React compartilhada)"]
        T[Traduzir]
        R[Reescrever]
        TR[Transformar]
        D[Dashboard]
        S[Configurações]
        T & R & TR & D & S --> core["configManager / apiService / costUtils"]
    end
    core -->|Electron| main["src/main/main.js"]
    core -->|Web / Docker| server["src/server/index.js"]
```

<br /><br />

<a id="releases-and-tags"></a>
## Lançamentos e tags

- **Git tags** `v`* (ex: `v1.0.10`) disparam o [fluxo de trabalho de lançamento](.github/workflows/release.yml). **GitHub Releases** anexam o instalador Windows (`.exe`) e o Linux AppImage.
- **Imagens Docker** são publicadas em `ghcr.io/wsj-br/transrewrt`. As tags das imagens correspondem à versão do Git (ex: `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) mais `latest`. Multi-arquitetura: `linux/amd64` e `linux/arm64` (ex: Raspberry Pi).

<br /><br />

<a id="contributing"></a>
## Contribuindo

1. Faça um fork do repositório.
2. Crie um branch de feature: `git checkout -b feature/minha-feature`
3. Faça commit das suas alterações com uma mensagem clara.
4. Envie e abra um Pull Request contra `main`.

Por favor, siga o estilo de código existente e teste suas alterações nos modos Electron e web antes de enviar. Veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para instruções de build e teste.

<br />

**Relatando problemas:** Abra uma issue no [GitHub](https://github.com/wsj-br/transrewrt/issues). Inclua sua plataforma (Windows / Linux / Docker) e a versão do app (mostrada na caixa de diálogo Sobre ou na página Lançamentos).

<br /><br />

<a id="disclaimer"></a>

## Aviso Legal

Os nomes de produtos e ícones pertencem aos seus respectivos proprietários e são usados apenas para fins de identificação. Este software não é afiliado nem endossado por nenhuma das marcas mencionadas.

<br /><br />

<a id="license"></a>
## Licença

Copyright © 2026 Waldemar Scudeller Jr.

[Licença Apache 2.0](LICENSE)