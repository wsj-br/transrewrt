---
translated_at: "2026-03-24T02:50:30.654Z"
source_hash: "718acd12f14755cd75ebf7d09b86d9a1df37ebe1898710080fa8e80c1221d58b"
source_mtime: 1774311390366.3484
model: "qwen/qwen3-235b-a22b-2507"
---
<p align="center">
  <img src="../images/transrewrt_logo.svg" alt="Logótipo do Transrewrt" width="120" />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.0.14-blue" alt="Versão"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licença: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plataforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Ferramenta de texto com IA: traduza entre idiomas, reescreva em diferentes estilos e transforme com instruções personalizadas — utilizando múltiplos provedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama local). Funciona como aplicativo desktop (Electron) ou aplicativo web autohospedado (Docker).

- **Traduzir** — entre dezenas de idiomas, com detecção automática da língua de origem
- **Reescrever** — corrigir gramática, melhorar clareza, formal/informal, encurtar, expandir, técnico
- **Transformar** — instruções personalizadas de IA; crie e gerencie comandos, com idioma de destino opcional por prompt
- **Histórico** — histórico completo de execuções com texto de entrada/saída, filtros e exportação
- **Modelos e custo** — escolha modelos de qualquer provedor configurado; painel de custos com registro em SQLite, resumos por modelo/operacao/dia
- **Interface** — interface multilíngue (30+ idiomas, suporte a RTL), fontes, ...
- **Modo Web** — suporte a múltiplos usuários com perfis administrativos; chaves de API ficam no lado do servidor, nunca expostas ao navegador
- **Desktop** — aplicativo Electron para Windows e Linux
- **Autohospedagem** — imagem Docker para amd64 e arm64 (pronto para Raspberry Pi)

Após a instalação, consulte o **[Guia do Utilizador](USER-GUIDE.pt.md)** para um guia completo de todas as funcionalidades.

<small>**Leia noutras línguas:** [English (UK)](README.pt.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>


<br/>

**Nota sobre traduções da interface e documentação:** Todos os idiomas da interface, exceto o inglês (UK), foram traduzidos com modelos de IA; a redação pode ser imprecisa ou conter erros.



<a id="screenshots"></a>
## Capturas de tela

**Seletor de idioma**

![Seletor de idioma](../images/screenshots/pt/language-selector.png)

**Traduzir**

![Traduzir](../images/screenshots/pt/translate.png)

**Transformar – editor de comando**

![Transformar – editor de comando](../images/screenshots/pt/transform-prompt-edit.png)

**Painel**

![Painel de custos](../images/screenshots/pt/dashboard-summary.png)

**Histórico**

![Histórico](../images/screenshots/pt/history.png)

**Configurações – seleção de modelo**

![Configurações – seleção de modelo](../images/screenshots/pt/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Índice

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Início rápido](#in%C3%ADcio-r%C3%A1pido)
- [Instalação](#instala%C3%A7%C3%A3o)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Obter uma chave de API OpenRouter](#obter-uma-chave-de-api-openrouter)
- [Configuração e ambiente](#configura%C3%A7%C3%A3o-e-ambiente)
- [Desenvolvimento e arquitetura](#desenvolvimento-e-arquitetura)
- [Versões e etiquetas](#vers%C3%B5es-e-etiquetas)
- [Contribuição](#contribui%C3%A7%C3%A3o)
- [Aviso](#aviso)
- [Licença](#licen%C3%A7a)

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

Substitua `sk-or-your-key` pela sua [chave de API OpenRouter](https://openrouter.ai/keys) (ou defina chaves de outros provedores; veja [Configuração](#configura%C3%A7%C3%A3o-e-ambiente)). Abra [http://localhost:5000](http://localhost:5000) e altere a senha padrão do administrador antes de expor o serviço.

<br/>

> ℹ️ **NOTA**<br/>
> No Docker, as credenciais do LLM são definidas por variáveis de ambiente como `OPENROUTER_KEY`, `OPENAI_KEY`, … (não na interface web). No desktop (Electron), você configura as chaves em **Configurações → API**.

<br/>

**Windows**

Faça o download do último `Transrewrt Setup x.y.z.exe` em [Versões](https://github.com/wsj-br/transrewrt/releases), execute o instalador e depois inicie pelo menu Iniciar ou atalho na área de trabalho. Insira as suas chaves de API em **Configurações → API**. Você precisa configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

<br/>

**Linux**

Faça o download do `.AppImage` em [Versões](https://github.com/wsj-br/transrewrt/releases), e então:

```bash
chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage
```

Insira as suas chaves de API em **Configurações → API**. Você precisa configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

No Debian/Ubuntu, pode ser necessário instalar dependências adicionais primeiro:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Veja [Instalação → Linux](#linux-electron) para mais detalhes.

<br/>

> ℹ️ **NOTA**<br/>
> O macOS não é atualmente suportado. O Transrewrt está disponível para Windows, Linux e Docker.

<br/>

Uma vez que a aplicação esteja em execução, consulte o **[Guia do Usuário](USER-GUIDE.pt.md)** para aprender como traduzir, reescrever e transformar texto, gerir prompts e configurar modelos.

<br/><br/>

<a id="installation"></a>
## Instalação

<a id="windows-electron"></a>
### Windows (Electron)

- Faça o download do instalador mais recente em [Versões](https://github.com/wsj-br/transrewrt/releases).
- Execute o ficheiro `.exe` e siga as instruções do instalador.
- Na primeira execução: inicie a aplicação pelo menu Iniciar ou atalho no ambiente de trabalho.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Faça o download do `.AppImage` em [Versões](https://github.com/wsj-br/transrewrt/releases).
- Execute: `chmod +x Transrewrt-x.y.z.AppImage && ./Transrewrt-x.y.z.AppImage`
- Dependências adicionais (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para mais informações.

<br/>

<a id="docker"></a>
### Docker

- Obtenha: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Configure pelo menos uma chave de provedor através de variáveis de ambiente (por exemplo, `OPENROUTER_KEY` para o OpenRouter). Passe as variáveis com `-e` ou via `docker compose` / `.env` para que segredos não sejam incorporados na imagem.
- As chaves de provedores **não** são introduzidas na interface web; o servidor lê-as do ambiente.

Exemplo – volume nomeado para persistência (chave OpenRouter via variável de ambiente):

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
|--------|-------------------------------------------------------------------------------------------------------------|
| Porta  | `5000` (mapeie com `-p 5000:5000`)                                                                          |
| Volume | Monte `/app/data` para persistência da configuração e base de dados                                         |
| Variáveis de ambiente | `PORT`, `CONFIG_PATH`, além das chaves do LLM (`OPENROUTER_KEY`, `OPENAI_KEY`, …) - veja [Configuração](#configura%C3%A7%C3%A3o-e-ambiente) |

Para construir e executar a partir do código-fonte: `docker compose up --build -d` ou `pnpm docker:up` - veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Obter uma chave de API OpenRouter

O Transrewrt suporta diversos fornecedores de IA. O [OpenRouter](https://openrouter.ai) é uma escolha popular porque agrega muitos modelos sob uma única chave e oferece modelos gratuitos.

1. Inscreva-se ou faça login em [openrouter.ai](https://openrouter.ai).
2. Acesse a página [Keys](https://openrouter.ai/keys) e crie uma nova chave (dê-lhe um nome e, opcionalmente, defina um limite de crédito). Você pode usar modelos gratuitos sem adicionar crédito.
3. **Desktop (Electron):** cole a chave em **Configurações → API**. **Docker:** defina variáveis de ambiente como `OPENROUTER_KEY` (veja [Início rápido](#quick-start)).

Você também pode usar outros provedores (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI) ou executar modelos localmente com [Ollama](https://ollama.com). Veja [Configuração](#configuration-and-environment) para a lista completa de provedores suportados e variáveis de ambiente.

Para informações sobre limites, uso próprio de chaves (BYOK) e mais, consulte [autenticação OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuração e ambiente

**Localizações do arquivo de configuração**

| Implantação        | Localização da configuração                                  |
| ------------------ | ------------------------------------------------------------ |
| Electron (Windows) | `%APPDATA%\transrewrt\`                                      |
| Electron (Linux)   | `~/.config/transrewrt/`                                      |
| Web / Docker       | `/app/data/config.json` (use um volume para manter dados)    |

<br/>

**Variáveis de ambiente** (apenas web/Docker; o Electron usa o arquivo de configuração local)

| Variável         | Padrão                 | Descrição |
| ---------------- | ----------------------- | ----------- |
| `PORT`           | `5000`                  | Porta de escuta do servidor |
| `CONFIG_PATH`    | `/app/data/config.json` | Caminho para o arquivo de configuração |
| `OPENROUTER_KEY` | *(vazio)*               | Chave da API OpenRouter |
| `OPENAI_KEY`     | *(vazio)*               | Chave da API OpenAI |
| `ANTHROPIC_KEY`  | *(vazio)*               | Chave da API Anthropic |
| `GOOGLE_KEY`     | *(vazio)*               | Chave da API Google Gemini |
| `DEEPSEEK_KEY`   | *(vazio)*               | Chave da API DeepSeek |
| `GROQ_KEY`       | *(vazio)*               | Chave da API Groq |
| `MISTRAL_KEY`    | *(vazio)*               | Chave da API Mistral |
| `OLLAMA_URL`     | *(vazio)*               | URL base do Ollama (ex: `http://host.docker.internal:11434`) |
| `XAI_KEY`        | *(vazio)*               | Chave da API xAI |

Configure apenas os provedores que você for utilizar. Os IDs dos modelos são organizados por namespace (`openrouter/…`, `openai/…`, `ollama/…`, etc.).

**Exibição de custos:** o OpenRouter retorna o custo exato cobrado, quando aplicável. Outros provedores usam um custo **estimado** com base na tabela pública de preços do OpenRouter se uma chave OpenRouter estiver disponível; caso contrário, o custo de provedores que não são OpenRouter pode aparecer como `0`. As estimativas não são faturas.

<br/>

**Dados e persistência:** Para Docker, monte um volume em `/app/data` para que `config.json` e o banco de dados SQLite sejam mantidos entre reinicializações do contêiner. Sem um volume, todos os dados são perdidos quando o contêiner for encerrado.

**Desenvolvedores:** Após atualizar com alterações que substituam a antiga configuração com chave única, redefina ou combine `data/config.json` com a nova estrutura padrão de `src/config-defaults/config_default.json` se seu arquivo local ainda usar campos removidos (`api_key`, `api_url`, opções de proxy).

<br/>

**Autenticação na web:**

- Admin padrão: `admin` / `transrewrt26`.
- Gerencie usuários em **Configurações → Usuários**.
- Redefinir uma senha: `docker exec <container> reset-web-password '<username>' '<new-password>'`
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
- **Visão geral de arquitetura e sistema:** Estrutura de pastas, pilha tecnológica, decisões de design - veja **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>

## Lançamentos e tags

- As **tags do Git** `v`* (por exemplo, `v1.0.10`) acionam o [fluxo de trabalho de lançamento](.github/workflows/release.yml). As **Publicações no GitHub** incluem o instalador para Windows (`.exe`) e o AppImage para Linux.
- As **imagens do Docker** são publicadas em `ghcr.io/wsj-br/transrewrt`. As tags das imagens seguem a versão do Git (por exemplo, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) além da tag `latest`. Multi-arch: `linux/amd64` e `linux/arm64` (por exemplo, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Contribuindo

1. Faça um fork do repositório.
2. Crie uma branch para a nova funcionalidade: `git checkout -b feature/minha-funcionalidade`
3. Faça commit das suas alterações com uma mensagem clara.
4. Envie (push) e abra um Pull Request para a branch `main`.

Por favor, siga o estilo de código existente e teste suas alterações nos modos Electron e web antes de enviar. Consulte [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para instruções de construção e testes.

<br/>

**Relatando problemas:** Abra uma issue no [GitHub](https://github.com/wsj-br/transrewrt/issues). Inclua sua plataforma (Windows / Linux / Docker) e versão do aplicativo (mostrada na janela "Sobre" ou na página de Lançamentos).

<br/><br/>

<a id="disclaimer"></a>
## Aviso Legal

Nomes e ícones de produtos pertencem aos seus respectivos proprietários e são usados apenas para fins de identificação. Este software não é afiliado nem endossado por nenhuma das marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licença

Copyright © 2026 Waldemar Scudeller Jr.

[Licença Apache 2.0](LICENSE)