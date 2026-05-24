---
translation_last_updated: '2026-05-24T17:52:55.800Z'
source_file_mtime: '2026-05-21T23:09:11.948Z'
source_file_hash: 8a7988e2486931ff07a063a9f29a8a2b09122dc70ddc4f0e8d6d1b22d011f008
translation_language: pt-BR
source_file_path: README.md
translation_models:
  - qwen/qwen3-235b-a22b-2507
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.3.2-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Ferramenta de texto com IA: traduza entre idiomas, reescreva em diferentes estilos e transforme com prompts personalizados — usando múltiplos provedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama local). Funciona como aplicativo desktop (Electron) ou aplicativo web autohospedado (Docker).

- **Traduzir** - entre dezenas de idiomas, com detecção automática da origem
- **Reescrever** - corrigir gramática, melhorar clareza, formal/informal, encurtar, expandir, técnico
- **Transformar** - prompts personalizados de IA; criar e gerenciar prompts, idioma de destino opcional por prompt
- **Histórico** - histórico completo de execuções com texto de entrada/saída, filtros e exportação
- **Fácil e Avançado** - Modo Fácil (padrão): habilidades selecionadas por provedor (**Grátis (OpenRouter)**, **Lite**, **Avançado**, **Técnico**; apenas habilidades com mapeamento para o provedor selecionado são exibidas), sem necessidade de escolher IDs de modelo; Modo Avançado: lista completa de modelos dos provedores configurados
- **Modelos e custo** - painéis de custo e uso (Resumo, Por Modelo, Todas as chamadas) com opção de exportação; OpenRouter mostra o gasto real, outros provedores usam estimativas
- **Interface do usuário (UI)** - interface multilíngue (30+ idiomas, suporte a RTL), fontes, ...
- **Modo Web** - suporte a múltiplos usuários com funções de administrador
- **Desktop** - Aplicativo Electron para Windows e Linux
- **Autohospedado** - Imagem Docker para amd64 e arm64 (pronto para Raspberry Pi)

Uma vez instalado, consulte o [**Guia do Usuário**](USER-GUIDE.pt-BR.md) para obter um guia completo de todos os recursos.

<small>**Leia em outros idiomas:** </small>
<small id="lang-list">[English (GB)](../README.md) · [Português (Brasil)](./README.pt-BR.md) · [العربية](./README.ar.md) · [বাংলা](./README.bn.md) · [Català](./README.ca.md) · [中文 (中国大陆)](./README.zh-CN.md) · [中文 (台灣)](./README.zh-TW.md) · [Hrvatski](./README.hr.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [English (US)](./README.en-US.md) · [Tagalog](./README.tl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [Bahasa Melayu](./README.ms.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Basa Jawa](./README.jv.md) · [Português](./README.pt.md) · [ਪੰਜਾਬੀ](./README.pa.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Kiswahili](./README.sw.md) · [Svenska](./README.sv.md) · [తెలుగు](./README.te.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

<small>

> **Observação sobre traduções da interface e documentação:** Todos os idiomas da interface, exceto o inglês (UK) original, 
> foram traduzidos usando modelos de IA; a redação pode ser imprecisa ou conter erros.

</small>

<br/>

<a id="table-of-contents"></a>
## Sumário

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Capturas de tela](#screenshots)
- [Primeiros passos](#quick-start)
- [Obtendo uma chave de API OpenRouter](#getting-an-openrouter-api-key)
- [Configuração e ambiente](#configuration-and-environment)
- [Desenvolvimento e arquitetura](#development-and-architecture)
- [Relatando problemas](#reporting-issues)
- [Aviso legal](#disclaimer)
- [Licença](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="screenshots"></a>
## Capturas de tela

**Seletor de idioma**

![Language selector](../images/screenshots/pt-BR/language-selector.png)

**Traduzir**

![Translate](../images/screenshots/pt-BR/translate.png)

**Transformar - editor de prompt**

![Transform - prompt editor](../images/screenshots/pt-BR/transform-prompt-edit.png)

**Painel**

![Dashboard summary - usage](../images/screenshots/pt-BR/dashboard-summary.png)

**Histórico**

![History](../images/screenshots/pt-BR/history.png)

**Configurações - seleção de modelo**

![Settings - model selection](../images/screenshots/pt-BR/settings-models.png)

<br/><br/>

<a id="quick-start"></a>
## Primeiros passos

<details>
<summary><b>Docker (recomendado para autohospedagem)</b></summary>

<a id="docker"></a>

<br/>

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Substitua `sk-or-your-key` pela sua [chave de API do OpenRouter](https://openrouter.ai/keys) (ou defina chaves de outros provedores; veja [Configuração](#configuration-and-environment)). Abra [http://localhost:5000](http://localhost:5000) e altere a senha padrão do admin antes de expor o serviço.

Defina pelo menos uma chave de provedor via ambiente (por exemplo, `OPENROUTER_API_KEY` para o OpenRouter). Passe as variáveis com `-e` ou `docker compose` / `.env` para que segredos não sejam incorporados à imagem. As chaves de provedores **não** são inseridas na interface web; o servidor as lê do ambiente.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> No Docker, as credenciais de LLM são definidas com variáveis de ambiente como `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (não na interface web). No desktop (Electron), você configura as chaves em **Configurações → API**.

<br/>

Ou use Docker Compose:

```bash
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# Edit the file to add your API keys (API_KEYs), or uncomment and adjust the `.env` file. Set the timezone (TZ) if necessary.
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Veja [Configuração](#configuration-and-environment) para todas as variáveis de ambiente, como `PORT`, `CONFIG_PATH`, `TZ`, e chaves de LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

</details>

<br/>

<details>
<summary><b>Fuso horário do servidor (Docker)</b></summary>

<a id="configuring-the-timezone"></a>

<br/>

As datas e horários da interface do usuário seguem o idioma e o fuso horário do **navegador**. Para o **comportamento** no lado do servidor (logs e similares), o contêiner usa a variável de ambiente `TZ`. O padrão é `TZ=Europe/London`.

Para usar outro fuso horário, defina `TZ` no seu arquivo Compose, por exemplo:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Ou passe ao executar o contêiner (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Em muitos hosts Linux, você pode copiar o nome do fuso horário do sistema com:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Uma lista de nomes válidos de fusos horários é mantida na [base de dados tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

</details>

<br/>

<details>
<summary><b>Windows</b></summary>

<a id="windows-electron"></a>

<br/>

- Baixe o último `Transrewrt Setup x.y.z.exe` em [Releases](https://github.com/wsj-br/transrewrt/releases).
- Execute o `.exe` e siga o instalador.
- Primeira execução: inicie o aplicativo pelo menu Iniciar ou atalho na área de trabalho.
- Insira suas chaves de API em **Configurações → API**. Você precisa configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> O Windows pode exibir um destes avisos de segurança (normal para apps sem assinatura ou independentes):
>   - **Controle de Conta de Usuário (UAC)**: "Você deseja permitir que este aplicativo de um editor desconhecido faça alterações no seu dispositivo?" → Clique em **Sim**.
>   - **Microsoft Defender SmartScreen**: "O Windows protegeu seu PC" → Clique em **Mais informações** → **Executar assim mesmo**.
>
> Isso ocorre porque o aplicativo não é assinado pela Microsoft ou por um editor importante — é seguro se baixado de nossos lançamentos oficiais no GitHub (verifique os checksums na página [Releases](https://github.com/wsj-br/transrewrt/releases) ao lado de cada arquivo).

<br/>

</details>

<br/>

<details>
<summary><b>Linux</b></summary>

<a id="linux-electron"></a>

<br/>

Baixe o `.AppImage` para sua CPU a partir da página [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` para PCs comuns, `arm64` para muitos dispositivos ARM, incluindo Raspberry Pi 4+), então:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Em x86_64/amd64 use o nome do arquivo `x64`; em ARM64 use o nome `...-arm64.AppImage`.

Insira suas chaves de API em **Configurações → API**. Você precisa configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

**Mensagens no console:** Builds empacotados para Linux (`x64` e `arm64` AppImages) suprimem avisos de descontinuação do Node no terminal (por exemplo, do módulo interno `punycode`). Se o Chromium exibir erros de GPU / EGL como “GLES3 é não suportado”, mas o aplicativo funcionar, você pode silenciá-los desativando a aceleração por hardware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Isso se aplica também ao amd64; altere o nome do arquivo para corresponder ao seu download.

No Debian/Ubuntu, você pode precisar de bibliotecas adicionais de **execução** exigidas pelo Chromium (essas bibliotecas geralmente já estão presentes em instalações completas de desktop). Execute os comandos abaixo se necessário:

```bash
sudo apt update
sudo apt install -y libfuse2 libgtk-3-0 libnotify4 libnss3 libnspr4 libxss1 libxtst6 xdg-utils \
     xauth libatspi2.0-0 libdrm2 libgbm1 libxcb-dri3-0 libcups2 libasound2t64
```

substitua `libasound2t64` por `libasound2` para `arm64`. Instalações mínimas ou personalizadas ainda podem falhar com um arquivo `.so` ausente. Instale o pacote com o nome indicado na mensagem de erro (extras comuns: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Em alguns ambientes, você pode precisar executar o aplicativo usando `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> O macOS não é atualmente suportado. O Transrewrt está disponível para Windows, Linux e Docker.

</details>

<br/>

Uma vez que o aplicativo esteja em execução, consulte o [**Guia do Usuário**](USER-GUIDE.pt-BR.md) para saber como traduzir, reescrever e transformar textos, gerenciar prompts e configurar modelos.

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Obtendo uma chave de API do OpenRouter

O Transrewrt suporta múltiplos provedores de IA. [OpenRouter](https://openrouter.ai) é uma escolha popular porque agrega muitos modelos sob uma única chave e oferece modelos gratuitos.

1. Cadastre-se ou faça login em [openrouter.ai](https://openrouter.ai).
2. Acesse a página [Keys](https://openrouter.ai/keys) e crie uma nova chave (dê um nome e, opcionalmente, defina um limite de crédito). Você pode usar modelos gratuitos sem adicionar créditos.
3. **Desktop (Electron):** cole as chaves em **Configurações → API**. **Docker:** defina variáveis de ambiente como `OPENROUTER_API_KEY` (veja [Início rápido](#quick-start)).

Não use o modelo **Body Builder** do OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) para traduzir, reescrever ou transformar: ele retorna cargas de solicitação JSON, não o texto completo para essas tarefas. Veja [Configurações → Modelos](USER-GUIDE.pt-BR.md#models) no Guia do Usuário.

Você também pode usar outros provedores (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ou executar modelos localmente com [Ollama](https://ollama.com). Veja [Configuração](#configuration-and-environment) para a lista completa de provedores suportados e variáveis de ambiente.

</br>

> ⚠️ **ATENÇÃO**<br/>
> Se você estiver usando o Ollama a partir de outro dispositivo, contêiner ou serviço, lembre-se de configurar o Ollama para permitir conexões externas (não apenas localhost).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuração e ambiente

</br>

**Localizações dos arquivos de configuração**

| Implantação         | Local da configuração                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (use um volume para manter os dados) |

<br/>

**Variáveis de ambiente** (apenas web/Docker; o Electron usa o arquivo de configuração local)

| Variável             | Descrição                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | Porta de escuta do servidor (padrão: `5000`)                                  |
| `CONFIG_PATH`        | Caminho para o arquivo de configuração (padrão: `/app/data/config.json`)                |
| `TZ`                 | fuso horário para o tempo no servidor (logs, etc.) (padrão: `Europe/London`) |
| `HISTORY_DISABLED`   | Força o desligamento do histórico de execução (opcional, padrão é `false`)                  |
| `OPENROUTER_API_KEY` | Chave de API OpenRouter                                                           |
| `OPENAI_API_KEY`     | Chave de API OpenAI                                                               |
| `CEREBRAS_API_KEY`   | Chave de API Cerebras                                                             |
| `ANTHROPIC_API_KEY`  | Chave de API Anthropic                                                            |
| `GOOGLE_API_KEY`     | Chave de API Google Gemini                                                        |
| `DEEPSEEK_API_KEY`   | Chave de API DeepSeek                                                             |
| `GROQ_API_KEY`       | Chave de API Groq                                                                 |
| `MISTRAL_API_KEY`    | Chave de API Mistral                                                              |
| `OLLAMA_URL`         | URL base do Ollama (ex: `http://host.docker.internal:11434`)                   |
| `XAI_API_KEY`        | Chave de API do xAI                                                                  |

**Modo privacidade:** Para forçar o desligamento do rastreamento de histórico independentemente de `config.json` ou das preferências por usuário, defina `HISTORY_DISABLED` como `true` ou `1` (sem diferenciar maiúsculas e minúsculas) para o **processo do servidor web/Docker** e/ou o **processo principal do desktop Electron** (por exemplo, ambiente do sistema ou inicializador — não apenas o renderizador). Isso desativa o armazenamento do histórico de entrada/saída, bloqueia **Configurações → Configurações gerais → Histórico** e impede APIs relacionadas ao Histórico.

Configure apenas os provedores que você utiliza. Os IDs dos modelos são organizados por namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Exibição de custo:** O OpenRouter retorna o custo cobrado exato quando aplicável. Outros provedores usam o custo **estimado** do OpenRouter com base na tabela pública de preços dos modelos, quando uma chave OpenRouter está disponível; sem ela, o custo de provedores não-OpenRouter pode aparecer como `0`. As estimativas não são faturas.

<br/>

**Dados e persistência:** Para Docker, monte um volume em `/app/data` para que `config.json` e o banco de dados SQLite sejam mantidos após reinicializações do contêiner. Sem um volume, todos os dados são perdidos quando o contêiner é interrompido.

<br/>

**Autenticação web:**

- Admin padrão: `admin` / `transrewrt26`.
- Gerencie usuários em **Configurações → Usuários**.
- Redefina uma senha: `docker exec <container> reset-web-password '<username>' '<new-password>'`

<br/>

> ⚠️ **AVISO**<br/>
> Altere imediatamente a senha padrão do administrador em qualquer host acessível por rede.

<br/>

As configurações principais (fonte, modelos, idiomas, etc.) estão disponíveis nas Configurações do aplicativo.

<br/><br/>

<a id="development-and-architecture"></a>
## Desenvolvimento e arquitetura

- **Desenvolvimento:** Configuração, compilação, teste e implantação (Electron, Web, Docker) - consulte [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md).
- **Visão geral da arquitetura e do sistema:** Estrutura de pastas, pilha tecnológica, decisões de design - consulte [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md).

<br/><br/>

<a id="reporting-issues"></a>
## Relatando problemas

Abra um problema no [GitHub](https://github.com/wsj-br/transrewrt/issues). Inclua sua plataforma (Windows / Linux / Docker) e a versão do aplicativo (exibida na janela Sobre ou na página de Lançamentos).

<br/><br/>

<a id="disclaimer"></a>
## Isenção de responsabilidade

Nomes e ícones de produtos pertencem aos seus respectivos proprietários e são usados apenas para fins de identificação. Este software não é afiliado nem endossado por nenhuma das marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licença

Direitos autorais © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
