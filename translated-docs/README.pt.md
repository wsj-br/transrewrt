---
translation_last_updated: '2026-03-31T23:44:46.242Z'
source_file_mtime: '2026-03-31T23:34:44.122Z'
source_file_hash: 4c9fbb976bec3529
translation_language: pt
source_file_path: README.md
---
<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.1.1-blue" alt="Versão"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="Licença: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Plataforma">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React 19">
  <img src="https://img.shields.io/badge/Electron-41-47848F?logo=electron" alt="Electron 41">
</p>

Ferramenta de texto com IA: traduzir entre idiomas, reescrever em diferentes estilos e transformar com prompts personalizados — usando múltiplos provedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama local). Funciona como aplicativo desktop (Electron) ou aplicativo web autohospedado (Docker).

- **Traduzir** — entre dezenas de idiomas, com detecção automática da origem
- **Reescrita** — corrigir gramática, melhorar clareza, formal/informal, encurtar, expandir, técnico
- **Transformação** — prompts personalizados de IA; criar e gerenciar prompts, idioma de destino opcional por prompt
- **Histórico** — histórico completo de execuções com texto de entrada/saída, filtros e exportação
- **Modelos e custo** — escolher modelos de qualquer provedor configurado; painéis de custo e uso com registros, resumos por modelo/operação/dia
- **Interface** — interface multilíngue (30+ idiomas, suporte a RTL), fontes, ...
- **Modo Web** — suporte multiusuário com papéis de administrador
- **Desktop** — aplicativo Electron para Windows e Linux
- **Autohospedado** — imagem Docker para amd64 e arm64 (pronto para Raspberry Pi)

Após a instalação, consulte o **[Guia do Usuário](USER-GUIDE.pt.md)** para um guia completo de todas as funcionalidades.

<small>**Leia em outros idiomas:** </small>
<small id="lang-list">[English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Observação sobre traduções da interface e documentação:** Todos os idiomas da interface, exceto o inglês (RU) original,
> foram traduzidos usando modelos de IA; a redação pode ser imprecisa ou conter erros.

</small>

<br/>

<a id="screenshots"></a>
## Capturas de tela

**Seletor de idioma**

![Language selector](../images/screenshots/pt/language-selector.png)

**Traduzir**

![Translate](../images/screenshots/pt/translate.png)

**Transformação - editor de prompt**

![Transform - prompt editor](../images/screenshots/pt/transform-prompt-edit.png)

**Painel**

![Dashboard summary — usage](../images/screenshots/pt/dashboard-summary.png)

**Histórico**

![History](../images/screenshots/pt/history.png)

**Definições - seleção de modelo**

![Settings - model selection](../images/screenshots/pt/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>
## Índice

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Primeiros passos](#quick-start)
- [Instalação](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Configurar o fuso horário](#configuring-the-timezone)
- [Obter uma chave de API do OpenRouter](#getting-an-openrouter-api-key)
- [Configuração e ambiente](#configuration-and-environment)
- [Desenvolvimento e arquitetura](#development-and-architecture)
- [Relatar problemas](#reporting-issues)
- [Aviso legal](#disclaimer)
- [Licença](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="quick-start"></a>
## Início rápido

**Docker (recomendado para auto-hospedagem)**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

Substitua `sk-or-your-key` pela sua [chave API OpenRouter](https://openrouter.ai/keys) (ou defina chaves de outros provedores; veja [Configuração](#configuration-and-environment)). Abra [http://localhost:5000](http://localhost:5000) e altere a palavra-passe padrão do administrador antes de expor o serviço.

<br/>

> ℹ️ **NOTA**<br/>
> No Docker, as credenciais do LLM são definidas com variáveis de ambiente como `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (não na interface web). No desktop (Electron), você configura as chaves em **Definições → API**.

<br/>

**Windows**

Transfira o mais recente `Transrewrt Setup x.y.z.exe` em [Releases](https://github.com/wsj-br/transrewrt/releases), execute o instalador e depois inicie a partir do menu Iniciar ou atalho no ambiente de trabalho. Insira as suas chaves API em **Definições → API**. Você precisa configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

<br/>

**Linux**

Transfira o `.AppImage` para o seu CPU em [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` para PCs típicos, `arm64` para muitos dispositivos ARM, incluindo Raspberry Pi 4+), depois:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Insira as suas chaves API em **Definições → API**. Você precisa configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

**Mensagens do console:** As versões empacotadas para Linux (`AppImages` x64 e arm64) suprimem avisos de depreciação do Node no terminal (por exemplo, o módulo embutido `punycode`). Se o Chromium exibir erros de GPU / EGL como “GLES3 não suportado”, mas o aplicativo funcionar, você pode silenciá-los desativando a aceleração por hardware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Isso se aplica também ao amd64; altere o nome do arquivo para corresponder à sua versão baixada. Veja [Instalação → Linux (Electron)](#linux-electron) para mais detalhes.

No Debian/Ubuntu, pode ser necessário instalar bibliotecas de **execução** adicionais que o Chromium espera (geralmente já presentes em ambientes desktop completos). Use **`libnotify4`** para notificações na área de trabalho — **não** `libnotify-dev` (isso é para compilar software, não para executar o AppImage empacotado):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

Imagens mínimas ou personalizadas ainda podem falhar com uma biblioteca `.so` ausente; instale o pacote indicado no erro (extras comuns: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Alguns ambientes precisam do FUSE para executar AppImages (por exemplo, `libfuse2` no Ubuntu 22.04+), ou use `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

<br/>

> ℹ️ **NOTA**<br/>
> O macOS não é atualmente suportado. O Transrewrt está disponível para Windows, Linux e Docker.

<br/>

Uma vez que a aplicação esteja em execução, consulte o **[Guia do Usuário](USER-GUIDE.pt.md)** para aprender a traduzir, reescrever e transformar texto, gerir prompts e configurar modelos.

<br/><br/>

<a id="installation"></a>
## Instalação

<a id="windows-electron"></a>
### Windows (Electron)

- Transfira o instalador mais recente em [Releases](https://github.com/wsj-br/transrewrt/releases).
- Execute o `.exe` e siga as instruções do instalador.
- Primeira execução: inicie a aplicação pelo menu Iniciar ou atalho no ambiente de trabalho.

<br/>

> ℹ️ **NOTA**<br/>
> O Windows pode exibir um destes avisos de segurança (normal para aplicativos não assinados ou independentes):
>   - **Controle de Conta de Usuário (UAC)**: "Você deseja permitir que este aplicativo de um editor desconhecido faça alterações no seu dispositivo?" → Clique em **Sim**.
>   - **Microsoft Defender SmartScreen**: "O Windows protegeu seu PC" → Clique em **Mais informações** → **Executar mesmo assim**.
>
> Isso ocorre porque o aplicativo não é assinado pela Microsoft ou por um editor importante — é seguro se baixado a partir das nossas versões oficiais no GitHub
>  (verifique a soma de verificação SHA256 abaixo).

<br/>

<a id="linux-electron"></a>
### Linux (Electron)

- Descarregue o ficheiro `.AppImage` correspondente (`x64` ou `arm64`) em [Versões](https://github.com/wsj-br/transrewrt/releases).
- Execute: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` em x86_64/amd64, ou utilize o nome de ficheiro `...-arm64.AppImage` em ARM64.
- **Bibliotecas de runtime do Debian/Ubuntu** (Electron/Chromium; iguais às [Início rápido → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — utilize **`libnotify4`**, não `libnotify-dev`. Em sistemas mínimos, instale quaisquer `.so` em falta indicados no terminal; complementos como `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2` são frequentemente necessários. O AppImage pode precisar de `libfuse2` (Ubuntu 22.04+) ou `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`.
- **Mensagens da GPU:** O Chromium pode registar erros de inicialização da GPU ou EGL em alguns sistemas (especialmente ARM); a aplicação ainda pode funcionar normalmente. Para evitar essas mensagens, inicie com a aceleração por hardware desativada: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (ou o nome do seu ficheiro `arm64`).

<br/>

<a id="docker"></a>
### Docker

- Baixar: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Defina pelo menos uma chave de provedor via ambiente (por exemplo, `OPENROUTER_API_KEY` para OpenRouter). Passe as variáveis com `-e` ou `docker compose` / `.env` para que os segredos não sejam incorporados na imagem.
- As chaves dos provedores **não** são inseridas na interface web; o servidor as lê do ambiente.

Exemplo - volume nomeado para persistência (chave OpenRouter via env):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

ou, se preferir usar Docker Compose, use:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Veja [Configuração](#configuration-and-environment) para todas as variáveis de ambiente, como `PORT`, `CONFIG_PATH`, `TZ` e chaves de LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>
### Configurando o fuso horário

A data e hora da interface do usuário seguem o idioma e o fuso horário do **navegador**. Para o comportamento no **lado do servidor** (registros e similares), o contêiner usa a variável de ambiente `TZ`. O padrão é `TZ=Europe/London`.

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

Uma lista de nomes válidos de fusos horários é mantida na [banco de dados tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>
## Obtendo uma chave de API do OpenRouter

O Transrewrt suporta múltiplos provedores de IA. [OpenRouter](https://openrouter.ai) é uma escolha popular porque agrega muitos modelos sob uma única chave e oferece modelos gratuitos.

1. Registre-se ou faça login em [openrouter.ai](https://openrouter.ai).
2. Acesse a página [Keys](https://openrouter.ai/keys) e crie uma nova chave (dê um nome e, opcionalmente, defina um limite de crédito). Você pode usar modelos gratuitos sem adicionar crédito.
3. **Desktop (Electron):** cole as chaves em **Definições → API**. **Docker:** defina variáveis de ambiente como `OPENROUTER_API_KEY` (veja [Início rápido](#quick-start)).

Não use o modelo **Body Builder** do OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) para traduzir, reescrever ou transformar: ele retorna cargas JSON de solicitação, não o texto completo para essas tarefas. Veja [Definições → Modelos](USER-GUIDE.pt.md#models) no Guia do Usuário.

Você também pode usar outros provedores (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ou executar modelos localmente com [Ollama](https://ollama.com). Veja [Configuração](#configuration-and-environment) para a lista completa de provedores suportados e variáveis de ambiente.

> ⚠️ **AVISO**<br/>
> Se você estiver usando o Ollama a partir de outro dispositivo, contêiner ou serviço, lembre-se de configurar o Ollama para permitir conexões externas (não apenas localhost).

Para limites, BYOK e mais, consulte [autenticação OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

<br/><br/>

<a id="configuration-and-environment"></a>
## Configuração e ambiente

**Localizações do ficheiro de configuração**

| Implementação         | Localização da configuração                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (use um volume para manter os dados) |

<br/>

**Variáveis de ambiente** (apenas web/Docker; o Electron utiliza o ficheiro de configuração local)

| Variável             | Descrição                                                                  |
|----------------------|------------------------------------------------------------------------------|
| `PORT`               | Porta de escuta do servidor (padrão: `5000`)                                  |
| `CONFIG_PATH`        | Caminho para o arquivo de configuração (padrão: `/app/data/config.json`)     |
| `TZ`                 | fuso horário para o tempo no servidor (logs, etc.) (padrão: `Europe/London`) |
| `OPENROUTER_API_KEY` | Chave de API do OpenRouter                                                   |
| `OPENAI_API_KEY`     | Chave de API do OpenAI                                                       |
| `CEREBRAS_API_KEY`   | Chave de API do Cerebras                                                     |
| `ANTHROPIC_API_KEY`  | Chave de API do Anthropic                                                    |
| `GOOGLE_API_KEY`     | Chave de API do Google Gemini                                                |
| `DEEPSEEK_API_KEY`   | Chave de API do DeepSeek                                                     |
| `GROQ_API_KEY`       | Chave de API do Groq                                                         |
| `MISTRAL_API_KEY`    | Chave de API do Mistral                                                      |
| `OLLAMA_URL`         | URL base do Ollama (ex: `http://host.docker.internal:11434`)                 |
| `XAI_API_KEY`        | Chave de API do xAI                                                          |

Configure apenas os fornecedores que utilizar. Os IDs dos modelos são agrupados por namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Exibição de custo:** O OpenRouter devolve o custo faturado exato quando aplicável. Outros fornecedores utilizam o custo **estimado** a partir dos preços públicos dos modelos do OpenRouter quando uma chave OpenRouter está disponível; sem ela, o custo de não-OpenRouter pode aparecer como `0`. As estimativas não são faturas.

<br/>

**Dados e persistência:** Para Docker, monte um volume em `/app/data` para que o `config.json` e a base de dados SQLite persistam entre reinícios do contentor. Sem um volume, todos os dados são perdidos quando o contentor é encerrado.

**Programadores:** Após atualizar alterações que substituem a configuração antiga de chave única, redefina ou una `data/config.json` com a nova estrutura padrão de `src/config-defaults/config_default.json`, caso o seu ficheiro local ainda utilize campos removidos (`api_key`, `api_url`, opções de proxy).

<br/>

**Autenticação web:**

- Administrador padrão: `admin` / `transrewrt26`.
- Gerir utilizadores em **Definições → Utilizadores**.
- Repor palavra-passe: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (a partir da origem: `pnpm run reset-web-password -- <username> <new-password>`)

<br/>

> ⚠️ **AVISO**<br/>
> Altere imediatamente a palavra-passe padrão do administrador em qualquer anfitrião acessível pela rede.

<br/>

As definições principais (tipo de letra, modelos, idiomas, etc.) estão disponíveis nas Definições da aplicação.

<br/><br/>

<a id="development-and-architecture"></a>
## Desenvolvimento e arquitetura

- **Desenvolvimento:** Configuração, compilação, teste e implementação (Electron, Web, Docker) - veja **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arquitetura e visão geral do sistema:** Estrutura de pastas, pilha tecnológica, decisões de design - veja **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>
## Relato de problemas

Abra uma questão no [GitHub](https://github.com/wsj-br/transrewrt/issues). Inclua a sua plataforma (Windows / Linux / Docker) e a versão da aplicação (mostrada na janela "Sobre" ou na página de Lançamentos).

<br/><br/>

<a id="disclaimer"></a>
## Aviso

Os nomes e ícones dos produtos pertencem aos respetivos proprietários e são utilizados apenas para fins de identificação. Este software não é afiliado nem endossado por nenhuma das marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licença

Direitos autorais © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
