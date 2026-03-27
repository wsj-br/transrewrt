---
translated_at: "2026-03-26T00:55:34.716Z"
source_hash: "d5d19d18eadc9060d8db2f32f47dc8174ee783feea992030f3c686debc714a88"
source_mtime: 1774482559451.2136
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

Ferramenta de texto com IA: traduza entre idiomas, reescreva em diferentes estilos e transforme com prompts personalizados — utilizando múltiplos provedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama local). Pode ser executado como aplicativo desktop (Electron) ou como aplicativo web autohospedado (Docker).

- **Traduzir** — entre dezenas de idiomas, com detecção automática da língua de origem
- **Reescrever** — corrigir gramática, melhorar clareza, formal/informal, encurtar, expandir, técnico
- **Transformar** — prompts de IA personalizados; crie e gerencie prompts, com idioma de destino opcional por prompt
- **Histórico** — histórico completo de execuções com entrada/saída de texto, filtros e exportação
- **Modelos e custo** — escolha modelos de qualquer provedor configurado; painéis de custo e uso com log, resumos por modelo/operação/dia
- **Interface** — interface multilíngue (30+ idiomas, suporte a RTL), fontes, ...
- **Modo Web** — suporte a múltiplos usuários com cargos de administrador
- **Desktop** — aplicativo Electron para Windows e Linux
- **Autohospedagem** — imagem Docker para amd64 e arm64 (pronto para Raspberry Pi)

Após instalar, consulte o **[Guia do Usuário](USER-GUIDE.pt.md)** para uma visão completa de todas as funcionalidades.

<small>**Leia em outros idiomas:** </small>
<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Observação sobre traduções de interface e documentação:** Todos os idiomas da interface, exceto o inglês (UK) original, 
> foram traduzidos usando modelos de IA; a redação pode ser imprecisa ou conter erros.

</small>

<br/>

<a id="screenshots"></a>
## Capturas de tela

**Seletor de idioma**

![Seletor de idioma](../images/screenshots/pt/language-selector.png)

**Traduzir**

![Traduzir](../images/screenshots/pt/translate.png)

**Transformar - editor de prompts**

![Transformar - editor de prompts](../images/screenshots/pt/transform-prompt-edit.png)

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


- [Inicialização rápida](#quick-start)
- [Instalação](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
- [Obter uma chave API OpenRouter](#getting-an-openrouter-api-key)
- [Configuração e ambiente](#configuration-and-environment)
- [Desenvolvimento e arquitetura](#development-and-architecture)
- [Lançamentos e etiquetas](#releases-and-tags)
- [Contribuição](#contributing)
- [Aviso](#disclaimer)
- [Licença](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Inicialização rápida

**Docker (recomendado para alojamento próprio)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Substitua `sk-or-your-key` pela sua [chave API OpenRouter](https://openrouter.ai/keys) (ou defina chaves de outros provedores; veja [Configuração](#configuration-and-environment)). Abra [http://localhost:5000](http://localhost:5000) e mude a senha padrão do administrador antes de expor o serviço.

<br/>

> ℹ️ **NOTA**<br/>
> No Docker, as credenciais do LLM são definidas com variáveis de ambiente como `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (não na interface web). No ambiente de área de trabalho (Electron), configura as chaves em **Definições → API**.

<br/>

**Windows**

Transfira o mais recente `Transrewrt Setup x.y.z.exe` em [Lançamentos](https://github.com/wsj-br/transrewrt/releases), execute o instalador e, em seguida, inicie o programa a partir do menu Iniciar ou do atalho no ambiente de trabalho. Insira suas chaves API em **Definições → API**. Precisa configurar pelo menos um provedor. O OpenRouter é comum para modelos gratuitos.

<br/>

**Linux**

Transfira o `.AppImage` compatível com seu processador em [Lançamentos](https://github.com/wsj-br/transrewrt/releases) (`x64` para PCs típicos, `arm64` para muitos dispositivos ARM, incluindo Raspberry Pi 4+), depois:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Insira suas chaves API em **Definições → API**. Precisa configurar pelo menos um provedor, sendo o OpenRouter comum para modelos gratuitos.

No Debian/Ubuntu pode precisar instalar dependências adicionais primeiro:

```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```

Veja [Instalação → Linux](#linux-electron) para detalhes.

<br/>

> ℹ️ **NOTA**<br/>
> O macOS não é atualmente suportado. O Transrewrt está disponível para Windows, Linux e Docker.

<br/>

Uma vez que a aplicação está em execução, veja o **[Guia do Utilizador](USER-GUIDE.pt.md)** para aprender como traduzir, reescrever e transformar texto, gerir instruções (prompts) e configurar modelos.

<br/><br/>

<a id="installation"></a>
## Instalação

<a id="windows-electron"></a>
### Windows (Electron)

- Transfira o instalador mais recente em [Lançamentos](https://github.com/wsj-br/transrewrt/releases).
- Execute o `.exe` e siga as instruções do instalador.
- Na primeira execução: inicie a aplicação a partir do menu Iniciar ou atalho no ambiente de trabalho.

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Transfira o `.AppImage` correspondente (`x64` ou `arm64`) em [Lançamentos](https://github.com/wsj-br/transrewrt/releases).
- Execute: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` em x86_64/amd64, ou use o nome de ficheiro `...-arm64.AppImage` em ARM64.
- Dependências adicionais (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para mais informações.

<br/>

<a id="docker"></a>
### Docker

- Transferir: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Defina pelo menos uma chave do provedor através do ambiente (por exemplo `OPENROUTER_API_KEY` para OpenRouter). Passe as variáveis com `-e` ou `docker compose` / `.env` para que segredos não sejam embutidos na imagem.
- As chaves do provedor **não** são digitadas na interface web; o servidor lê-as a partir do ambiente.

Exemplo - volume nomeado para persistência (chave OpenRouter via env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

<br/>

| Opção     | Descrição                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| Porta    | `5000` (mapeie com `-p 5000:5000`)                                                                           |
| Volume   | Monte `/app/data` para configuração persistente e base de dados                                              |
| Variáveis de ambiente | `PORT`, `CONFIG_PATH`, mais chaves do LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …) - veja [Configuração](#configuration-and-environment) |

Para construir e executar a partir do código-fonte: `docker compose up --build -d` ou `pnpm docker:up` – veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Como obter uma chave da API OpenRouter

O Transrewrt suporta múltiplos fornecedores de IA. A [OpenRouter](https://openrouter.ai) é uma escolha popular porque reúne muitos modelos sob uma única chave e oferece modelos gratuitos.

1. Registe-se ou faça login em [openrouter.ai](https://openrouter.ai).
2. Abra a página [Keys](https://openrouter.ai/keys) e crie uma nova chave (dê-lhe um nome e, opcionalmente, defina um limite de crédito). Pode usar modelos gratuitos sem adicionar créditos.
3. **Desktop (Electron):** Cole as chaves em **Definições → API**. **Docker:** Defina variáveis de ambiente como `OPENROUTER_API_KEY` (veja [Início rápido](#quick-start)).

Não utilize o modelo **Body Builder** da OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) para traduzir, reescrever ou transformar: ele devolve cargas úteis JSON de solicitações, e não o texto completo para essas tarefas. Veja [Definições → Modelos](USER-GUIDE.pt.md#models) no Guia do Utilizador.

Também pode usar outros fornecedores (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ou executar modelos localmente com [Ollama](https://ollama.com). Veja [Configuração](#configuration-and-environment) para a lista completa de fornecedores suportados e variáveis de ambiente.

> ⚠️ **AVISO**<br/>
> Se estiver a utilizar Ollama a partir de outro dispositivo, contentor ou serviço, lembre-se de configurar o Ollama para permitir conexões externas (não apenas localhost).

Para limites, BYOK e mais, veja [Autenticação OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuração e ambiente

**Localizações do ficheiro de configuração**

| Implementação      | Localização da configuração                    |
| ------------------ | ---------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                        |
| Electron (Linux)   | `~/.config/transrewrt/`                        |
| Web / Docker       | `/app/data/config.json` (use um volume para persistir) |

<br/>

**Variáveis de ambiente** (apenas web/Docker; o Electron utiliza o ficheiro de configuração local)

| Variável         | Pré-definição           | Descrição |
| ---------------- | ----------------------- | --------- |
| `PORT`           | `5000`                  | Porta de escuta do servidor |
| `CONFIG_PATH`    | `/app/data/config.json` | Caminho para o ficheiro de configuração |
| `OPENROUTER_API_KEY` | *(vazio)*               | Chave da API OpenRouter |
| `OPENAI_API_KEY`     | *(vazio)*               | Chave da API OpenAI |
| `CEREBRAS_API_KEY`   | *(vazio)*               | Chave da API Cerebras |
| `ANTHROPIC_API_KEY`  | *(vazio)*               | Chave da API Anthropic |
| `GOOGLE_API_KEY`     | *(vazio)*               | Chave da API Gemini do Google |
| `DEEPSEEK_API_KEY`   | *(vazio)*               | Chave da API DeepSeek |
| `GROQ_API_KEY`       | *(vazio)*               | Chave da API Groq |
| `MISTRAL_API_KEY`    | *(vazio)*               | Chave da API Mistral |
| `OLLAMA_URL`     | *(vazio)*               | URL base do Ollama (ex: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`        | *(vazio)*               | Chave da API xAI |

Configure apenas os fornecedores que utilizar. Os IDs dos modelos são espaciais (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Exibição de custos:** A OpenRouter devolve o custo exato cobrado, quando aplicável. Outros fornecedores utilizam o custo **estimado** a partir dos preços públicos dos modelos fornecidos pela OpenRouter quando uma chave OpenRouter está disponível; sem ela, o custo não OpenRouter pode aparecer como `0`. As estimativas não são faturas.

<br/>

**Dados e persistência:** Para Docker, monte um volume em `/app/data` para que o `config.json` e a base de dados SQLite persistam após reinícios do contentor. Sem um volume, todos os dados são perdidos quando o contentor for parado.

**Programadores:** Após atualizar alterações que substituem a antiga configuração com chave única, reinicie ou una `data/config.json` com a nova estrutura padrão em `src/config-defaults/config_default.json`, se o seu ficheiro local ainda usar campos removidos (`api_key`, `api_url`, opções de proxy).

<br/>

**Autenticação web:**

- Administrador padrão: `admin` / `transrewrt26`.
- Gerir utilizadores em **Definições → Utilizadores**.
- Repor uma palavra-passe: `docker exec <container> reset-web-password '<username>' '<new-password>'`  
  (a partir do código-fonte: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **AVISO**<br/>
> Altere imediatamente a palavra-passe padrão do administrador em qualquer anfitrião com acesso à rede.

<br/>

Definições principais (fonte, modelos, idiomas, etc.) estão disponíveis em Definições da aplicação.

<br/><br/>

<a id="development-and-architecture"></a>

## Desenvolvimento e arquitetura

- **Desenvolvimento:** Configuração, compilação, testes e implantação (Electron, Web, Docker) - veja **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Visão geral da arquitetura e do sistema:** Estrutura de pastas, pilha tecnológica, decisões de design - veja **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="releases-and-tags"></a>
## Lançamentos e tags

- **Tags Git** começando com `v` (por exemplo, `v1.0.10`) disparam o [fluxo de trabalho de lançamento](.github/workflows/release.yml). Os **GitHub Releases** incluem o instalador para Windows (`.exe`) e AppImages para Linux (**x64** e **arm64**).
- As **imagens Docker** são publicadas em `ghcr.io/wsj-br/transrewrt`. As tags das imagens correspondem à versão Git (por exemplo, `v1.0.10` → `ghcr.io/wsj-br/transrewrt:1.0.10`) além da tag `latest`. Multi-arquitetura: `linux/amd64` e `linux/arm64` (por exemplo, Raspberry Pi).

<br/><br/>

<a id="contributing"></a>
## Contribuição

1. Faça um fork do repositório.
2. Crie um branch para a nova funcionalidade: `git checkout -b feature/minha-funcionalidade`
3. Faça commits com mensagens claras.
4. Envie suas alterações e abra uma Pull Request para o branch `main`.

Siga o estilo de código existente e teste suas alterações nos modos Electron e web antes de enviar. Veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para instruções sobre compilação e testes.

<br/>

**Relato de problemas:** Abra uma issue no [GitHub](https://github.com/wsj-br/transrewrt/issues). Inclua sua plataforma (Windows / Linux / Docker) e a versão do aplicativo (exibida na janela "Sobre" ou na página de lançamentos).

<br/><br/>

<a id="disclaimer"></a>
## Aviso Legal

Os nomes e ícones de produtos pertencem aos respectivos proprietários e são utilizados apenas para fins de identificação. Este software não é afiliado nem endossado por nenhuma das marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licença

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)