---
translation_last_updated: '2026-03-31T22:56:50.553Z'
source_file_mtime: '2026-03-31T22:20:13.182Z'
source_file_hash: bf6416a9ca259a19
translation_language: pt-BR
source_file_path: README.md
---
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Sumário**

- [Capturas de tela](#screenshots)
- [Sumário](#table-of-contents)
- [Início rápido](#quick-start)
- [Instalação](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Configurando o fuso horário](#configuring-the-timezone)
- [Obtendo uma chave de API do OpenRouter](#getting-an-openrouter-api-key)
- [Configuração e ambiente](#configuration-and-environment)
- [Desenvolvimento e arquitetura](#development-and-architecture)
- [Relatando problemas](#reporting-issues)
- [Aviso legal](#disclaimer)
- [Licença](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

Ferramenta de texto com IA: traduza entre idiomas, reescreva em diferentes estilos e transforme com prompts personalizados — usando múltiplos provedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e Ollama local). Executa como aplicativo desktop (Electron) ou aplicativo web autohospedado (Docker).

- **Traduzir** — entre dezenas de idiomas, com detecção automática da origem
- **Reescrever** — corrigir gramática, melhorar clareza, formal/informal, encurtar, expandir, técnico
- **Transformar** — prompts personalizados de IA; criar e gerenciar prompts, idioma de destino opcional por prompt
- **Histórico** — histórico completo de execuções com texto de entrada/saída, filtros e exportação
- **Modelos e custo** — escolha modelos de qualquer provedor configurado; painéis de custo e uso com log, resumos por modelo/operação/dia
- **Interface do usuário (UI)** — interface multilíngue (30+ idiomas, suporte a RTL), fontes, ...
- **Modo web** — suporte multiusuário com papéis de administrador
- **Desktop** — aplicativo Electron para Windows e Linux
- **Autohospedado** — imagem Docker para amd64 e arm64 (pronto para Raspberry Pi)

Após a instalação, consulte o **[Guia do Usuário](USER-GUIDE.pt-BR.md)** para um guia completo de todos os recursos.

**Leia em outros idiomas:**
[Inglês (Reino Unido)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [Inglês (EUA)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)

> **Observação sobre traduções da interface e da documentação:** Todos os idiomas da interface, exceto o inglês (Reino Unido) original,
> foram traduzidos usando modelos de IA; a redação pode ser imprecisa ou conter erros.

## Capturas de tela

**Seletor de idioma**

Seletor de idioma

**Traduzir**

Traduzir

**Transformar - editor de prompt**

Transformar - editor de prompt

**Painel**

Resumo do painel — uso

**Histórico**

Histórico

**Configurações - seleção de modelo**

Configurações - seleção de modelo

## Sumário

- [Início rápido](#quick-start)
- [Instalação](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Configurando o fuso horário](#configuring-the-timezone)
- [Obtendo uma chave de API do OpenRouter](#getting-an-openrouter-api-key)
- [Configuração e ambiente](#configuration-and-environment)
- [Desenvolvimento e arquitetura](#development-and-architecture)
- [Relatando problemas](#reporting-issues)
- [Aviso legal](#disclaimer)
- [Licença](#license)

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

Substitua `sk-or-your-key` pela sua [chave de API do OpenRouter](https://openrouter.ai/keys) (ou defina chaves de outros provedores; veja [Configuração](#configuration-and-environment)). Abra [http://localhost:5000](http://localhost:5000) e altere a senha padrão do admin antes de expor o serviço.

> ℹ️ **OBSERVAÇÃO**  
>
> No Docker, as credenciais do LLM são definidas com variáveis de ambiente como `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (não na interface web). No desktop (Electron), você configura as chaves em **Configurações → API**.

**Windows**

Baixe o mais recente `Transrewrt Setup x.y.z.exe` em [Releases](https://github.com/wsj-br/transrewrt/releases), execute o instalador e depois inicie pelo menu Iniciar ou atalho na área de trabalho. Insira suas chaves de API em **Configurações → API**. Você precisa configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

**Linux**

Baixe o `.AppImage` para sua CPU em [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` para PCs típicos, `arm64` para muitos dispositivos ARM, incluindo Raspberry Pi 4+), depois:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Insira suas chaves de API em **Configurações → API**. Você precisa configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

**Mensagens do console:** Versões empacotadas para Linux (`x64` e `arm64` AppImages) suprimem avisos de descontinuação do Node no terminal (por exemplo, o módulo interno `punycode`). Se o Chromium exibir erros de GPU / EGL como “GLES3 é não suportado”, mas o aplicativo funcionar, você pode silenciá-los desativando a aceleração de hardware:

```bash
TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-arm64.AppImage
```

Isso se aplica também ao amd64; altere o nome do arquivo para corresponder ao seu download. Veja [Instalação → Linux (Electron)](#linux-electron) para mais detalhes.

No Debian/Ubuntu, você pode precisar de bibliotecas de **execução** extras que o Chromium espera (geralmente já presentes em ambientes desktop completos). Use **`libnotify4`** para notificações na área de trabalho — **não** `libnotify-dev` (isso é para compilar software, não para executar o AppImage empacotado):

```bash
sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth
```

Imagens mínimas ou personalizadas ainda podem falhar com uma biblioteca `.so` ausente; instale o pacote indicado no erro (extras comuns: `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2`). Alguns ambientes precisam do FUSE para executar AppImages (por exemplo, `libfuse2` no Ubuntu 22.04+), ou use `APPIMAGE_EXTRACT_AND_RUN=1 ./Transrewrt-….AppImage`.

Veja [Instalação → Linux](#linux-electron) para o mesmo resumo.

> ℹ️ **OBSERVAÇÃO**  
>
> macOS não é atualmente suportado. O Transrewrt está disponível para Windows, Linux e Docker.

Quando o aplicativo estiver em execução, consulte o **[Guia do Usuário](USER-GUIDE.pt-BR.md)** para aprender a traduzir, reescrever e transformar texto, gerenciar prompts e configurar modelos.

## Instalação

### Windows (Electron)

- Baixe o instalador mais recente em [Releases](https://github.com/wsj-br/transrewrt/releases).
- Execute o `.exe` e siga as instruções do instalador.
- Na primeira execução: inicie o aplicativo pelo menu Iniciar ou atalho na área de trabalho.

> ℹ️ **NOTA**  
> 
> O Windows pode exibir um desses avisos de segurança (normal para aplicativos não assinados ou independentes):
> 
> - **Controle de Conta de Usuário (UAC)**: "Você deseja permitir que este aplicativo de um editor desconhecido faça alterações em seu dispositivo?" → Clique em **Sim**.
> - **Microsoft Defender SmartScreen**: "O Windows protegeu seu PC" → Clique em **Mais informações** → **Executar assim mesmo**.
> 
> Isso ocorre porque o aplicativo não é assinado pela Microsoft ou por um editor importante — é seguro se baixado a partir das nossas versões oficiais no GitHub
>  (verifique a soma de verificação SHA256 abaixo).

### Linux (Electron)

- Baixe o `.AppImage` correspondente (`.x64` ou `.arm64`) em [Releases](https://github.com/wsj-br/transrewrt/releases).
- Execute: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` em x86_64/amd64, ou use o nome de arquivo `...-arm64.AppImage` em ARM64.
- **Bibliotecas de tempo de execução Debian/Ubuntu** (Electron/Chromium; igual a [Início rápido → Linux](#quick-start)): `sudo apt install libgtk-3-0 libnotify4 libnss3 libxss1 libasound2 libxtst6 xauth` — use **`libnotify4`**, não `libnotify-dev`. Em sistemas mínimos, instale quaisquer `.so` ausentes relatados no terminal; complementos como `libatk1.0-0`, `libatk-bridge2.0-0`, `libgbm1`, `libdrm2` são frequentemente necessários. O AppImage pode precisar de `libfuse2` (Ubuntu 22.04+) ou `APPIMAGE_EXTRACT_AND_RUN=1 ./….AppImage`.
- **Mensagens de GPU:** O Chromium pode registrar erros de inicialização de GPU ou EGL em alguns sistemas (especialmente ARM); o aplicativo ainda pode funcionar normalmente. Para evitar essas mensagens, inicie com aceleração por hardware desativada: `TRANSREWRT_DISABLE_GPU=1 ./Transrewrt-x.y.z-x64.AppImage` (ou o nome do seu arquivo `arm64`).

### Docker

- Baixe a imagem: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Defina pelo menos uma chave de provedor via ambiente (por exemplo, `OPENROUTER_API_KEY` para OpenRouter). Passe as variáveis com `-e` ou via `docker compose` / `.env` para que segredos não sejam incorporados à imagem.
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

ou, se preferir usar Docker Compose, utilize:

```
# download the compose file
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edit the file to add the API_KEYS and adjust the timezone (TZ)
vi transrewrt.yml
# start the container
docker compose -f transrewrt.yml up -d
```

Veja [Configuração](#configuration-and-environment) para todas as variáveis de ambiente, como `PORT`, `CONFIG_PATH`, `TZ` e chaves de LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

### Configurando o fuso horário

A data e hora da interface do usuário seguem o idioma e o fuso horário do **navegador**. Para o comportamento no **lado do servidor** (como logs), o contêiner usa a variável de ambiente `TZ`. O padrão é `TZ=Europe/London`.

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

## Obtendo uma chave de API do OpenRouter

O Transrewrt suporta múltiplos provedores de IA. [OpenRouter](https://openrouter.ai) é uma escolha popular porque reúne muitos modelos sob uma única chave e oferece modelos gratuitos.

1. Cadastre-se ou entre em [openrouter.ai](https://openrouter.ai).
2. Acesse a página [Keys](https://openrouter.ai/keys) e crie uma nova chave (dê um nome e, opcionalmente, defina um limite de crédito). Você pode usar modelos gratuitos sem adicionar crédito.
3. **Desktop (Electron):** cole as chaves em **Configurações → API**. **Docker:** defina variáveis de ambiente como `OPENROUTER_API_KEY` (veja [Início rápido](#quick-start)).

Não use o modelo **Body Builder** do OpenRouter (`[openrouter/bodybuilder](https://openrouter.ai/openrouter/bodybuilder)`) para traduzir, reescrever ou transformar: ele retorna cargas JSON de solicitação, não o texto completo para essas tarefas. Veja [Configurações → Modelos](USER-GUIDE.pt-BR.md#models) no Guia do Usuário.

Você também pode usar outros provedores (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ou executar modelos localmente com [Ollama](https://ollama.com). Veja [Configuração](#configuration-and-environment) para a lista completa de provedores suportados e variáveis de ambiente.

> ⚠️ **AVISO**  
> 
> Se você estiver usando o Ollama a partir de outro dispositivo, contêiner ou serviço, lembre-se de configurar o Ollama para permitir conexões externas (não apenas localhost).

Para limites, BYOK e mais, veja [autenticação OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

## Configuração e ambiente

**Localizações do arquivo de configuração**

| Implantação         | Local da configuração                                   |
| ------------------ | ------------------------------------------------- |
| Electron (Windows) | `%APPDATA%\transrewrt\`                           |
| Electron (Linux)   | `~/.config/transrewrt/`                           |
| Web / Docker       | `/app/data/config.json` (use um volume para manter os dados) |

**Variáveis de ambiente** (apenas web/Docker; o Electron usa o arquivo de configuração local)

| Variável             | Padrão                  | Descrição                                                                                                                 |
| -------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `PORT`               | `5000`                  | Porta de escuta do servidor                                                                                                 |
| `CONFIG_PATH`        | `/app/data/config.json` | Caminho para o arquivo de configuração                                                                                     |
| `TZ`                 | `Europe/London`         | Fuso horário IANA para horário do lado do servidor (registros, etc.); a interface ainda segue o navegador. Veja [Docker → fuso horário](#docker-timezone) |
| `OPENROUTER_API_KEY` | *(vazio)*               | Chave de API do OpenRouter                                                                                                  |
| `OPENAI_API_KEY`     | *(vazio)*               | Chave de API do OpenAI                                                                                                      |
| `CEREBRAS_API_KEY`   | *(vazio)*               | Chave de API do Cerebras                                                                                                    |
| `ANTHROPIC_API_KEY`  | *(vazio)*               | Chave de API do Anthropic                                                                                                   |
| `GOOGLE_API_KEY`     | *(vazio)*               | Chave de API do Google Gemini                                                                                               |
| `DEEPSEEK_API_KEY`   | *(vazio)*               | Chave de API do DeepSeek                                                                                                    |
| `GROQ_API_KEY`       | *(vazio)*               | Chave de API do Groq                                                                                                        |
| `MISTRAL_API_KEY`    | *(vazio)*               | Chave de API do Mistral                                                                                                     |
| `OLLAMA_URL`         | *(vazio)*               | URL base do Ollama (por exemplo, `http://host.docker.internal:11434`)                                                       |
| `XAI_API_KEY`        | *(vazio)*               | Chave de API do xAI                                                                                                         |

Configure apenas os provedores que você utiliza. Os IDs dos modelos são organizados em namespaces (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Exibição de custo:** O OpenRouter retorna o custo cobrado exato quando aplicável. Outros provedores usam o custo **estimado** dos preços públicos de modelos do OpenRouter quando uma chave OpenRouter está disponível; sem ela, o custo de provedores não OpenRouter pode aparecer como `0`. As estimativas não são faturas.

**Dados e persistência:** Para Docker, monte um volume em `/app/data` para que o `config.json` e o banco de dados SQLite sejam mantidos após reinicializações do contêiner. Sem um volume, todos os dados são perdidos quando o contêiner é interrompido.

**Desenvolvedores:** Após atualizar alterações que substituem a antiga configuração de chave única, redefina ou una `data/config.json` com a nova estrutura padrão de `src/config-defaults/config_default.json`, caso seu arquivo local ainda use campos removidos (`api_key`, `api_url`, opções de proxy).

**Autenticação web:**

- Admin padrão: `admin` / `transrewrt26`.
- Gerencie usuários em **Configurações → Usuários**.
- Redefina uma senha: `docker exec <container> reset-web-password '<username>' '<new-password>'`
  (a partir do código-fonte: `pnpm run reset-web-password -- <username> <new-password>`)

> ⚠️ **AVISO**  
>
> Altere imediatamente a senha padrão do admin em qualquer host acessível pela rede.

Configurações principais (fonte, modelos, idiomas, etc.) estão disponíveis nas Configurações do aplicativo.

## Desenvolvimento e arquitetura

- **Desenvolvimento:** Configuração, compilação, teste e implantação (Electron, Web, Docker) - veja **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Arquitetura e visão geral do sistema:** Estrutura de pastas, pilha tecnológica, decisões de design - veja **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

## Relatando problemas

Abra uma issue no [GitHub](https://github.com/wsj-br/transrewrt/issues). Inclua sua plataforma (Windows / Linux / Docker) e a versão do aplicativo (mostrada na janela Sobre ou na página de Releases).

## Isenção de responsabilidade

Nomes e ícones de produtos pertencem aos seus respectivos proprietários e são usados apenas para fins de identificação. Este software não é afiliado nem endossado por nenhuma das marcas mencionadas.

## Licença

Direitos autorais © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
