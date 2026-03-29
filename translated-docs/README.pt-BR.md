---
translated_at: "2026-03-29T02:02:42.798Z"
source_hash: "f26a12ca888393b55a064bfcf8fe2b74a425c383f1ad6f7ecbb32b67b7c9f897"
source_mtime: "2026-03-29T01:54:18.655Z"
model: "qwen/qwen3-235b-a22b-2507"
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

Ferramenta de texto com IA: traduza entre idiomas, reescreva em diferentes estilos e transforme com prompts personalizados — usando múltiplos provedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, e Ollama local). Executa como aplicativo desktop (Electron) ou como aplicativo web auto-hospedado (Docker).

- **Traduzir** — entre dezenas de idiomas, com detecção automática da língua de origem
- **Reescrever** — corrigir gramática, melhorar clareza, formal/informal, encurtar, expandir, técnico
- **Transformar** — prompts personalizados de IA; crie e gerencie prompts, com idioma de destino opcional por prompt
- **Histórico** — histórico completo de execuções com texto de entrada/saída, filtros e exportação
- **Modelos e custo** — escolha modelos de qualquer provedor configurado; painéis de custo e uso com logs e resumos por modelo/operação/dia
- **Interface** — interface multilíngue (30+ idiomas, suporte a RTL), fontes, ...
- **Modo Web** — suporte a múltiplos usuários com papéis de administrador
- **Desktop** — aplicativo Electron para Windows e Linux
- **Autohospedagem** — imagem Docker para amd64 e arm64 (pronto para Raspberry Pi)

Após a instalação, consulte o **[Guia do Usuário](USER-GUIDE.pt-BR.md)** para um passeio completo por todos os recursos.

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](README.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small id="lang-list"> [English (UK)](../README.md) · [Português (BR)](README.pt-BR.md) · [العربية](README.ar.md) · [বাংলা](README.bn.md) · [Català](README.ca.md) · [简体中文](README.zh-CN.md) · [繁體中文](README.zh-TW.md) · [Hrvatski](README.hr.md) · [Čeština](README.cs.md) · [Nederlands](README.nl.md) · [English (US)](README.en-US.md) · [Filipino](README.tl.md) · [Français](README.fr.md) · [Deutsch](README.de.md) · [Ελληνικά](README.el.md) · [हिन्दी](README.hi.md) · [Magyar](README.hu.md) · [Italiano](README.it.md) · [日本語](README.ja.md) · [Basa Jawa](README.jv.md) · [한국어](README.ko.md) · [Bahasa Melayu](README.ms.md) · [فارسی](README.fa.md) · [Polski](translated-docs/READM

E.pl.md) · [Português (PT)](README.pt.md) · [ਪੰਜਾਬੀ](README.pa.md) · [Română](README.ro.md) · [Русский](README.ru.md) · [Slovenčina](README.sk.md) · [Español](README.es.md) · [Kiswahili](README.sw.md) · [Svenska](README.sv.md) · [తెలుగు](README.te.md) · [ภาษาไทย](README.th.md) · [Türkçe](README.tr.md) · [Українська](README.uk.md) · [Tiếng Việt](README.vi.md)</small>

<small>

> **Observação sobre traduções da interface e documentação:** Todos os idiomas da interface, exceto o inglês original (Reino Unido), foram traduzidos usando modelos de IA; a redação pode ser imprecisa ou conter erros.

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

![Painel - resumo de uso](../images/screenshots/pt-BR/dashboard-summary.png)

**Histórico**

![Histórico](../images/screenshots/pt-BR/history.png)

**Configurações - seleção de modelo**

![Configurações - seleção de modelo](../images/screenshots/pt-BR/settings-models.png)

<br/><br/>

<a id="table-of-contents"></a>

## Sumário

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Início rápido](#quick-start)
- [Instalação](#installation)
  - [Windows (Electron)](#windows-electron)
  - [Linux (Electron)](#linux-electron)
  - [Docker](#docker)
  - [Configuração do fuso horário](#configuring-the-timezone)
- [Obtendo uma chave de API OpenRouter](#getting-an-openrouter-api-key)
- [Configuração e ambiente](#configuration-and-environment)
- [Desenvolvimento e arquitetura](#development-and-architecture)
- [Relatando problemas](#reporting-issues)
- [Aviso legal](#disclaimer)
- [Licença](#license)

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

Substitua `sk-or-your-key` pela sua [chave de API do OpenRouter](https://openrouter.ai/keys) (ou defina chaves de outros provedores; veja [Configuração](#configuration-and-environment)). Abra [http://localhost:5000](http://localhost:5000) e altere a senha padrão de administrador antes de expor o serviço.

<br/>

> ℹ️ **NOTA**<br/>
> No Docker, as credenciais do LLM são definidas por meio de variáveis de ambiente como `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `CEREBRAS_API_KEY`, … (não na interface web). No desktop (Electron), você configura as chaves em **Configurações → API**.

<br/>

**Windows**

Baixe o arquivo mais recente `Transrewrt Setup x.y.z.exe` em [Releases](https://github.com/wsj-br/transrewrt/releases), execute o instalador e inicie o programa pelo menu Iniciar ou atalho na área de trabalho. Insira suas chaves de API em **Configurações → API**. Você precisa configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

<br/>

**Linux**

Baixe o arquivo `.AppImage` para o seu processador em [Releases](https://github.com/wsj-br/transrewrt/releases) (`x64` para PCs comuns, `arm64` para muitos dispositivos ARM, incluindo Raspberry Pi 4+), então execute:


```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```


Insira suas chaves de API em **Configurações → API**. Você precisa configurar pelo menos um provedor; o OpenRouter é comum para modelos gratuitos.

No Debian/Ubuntu você pode precisar instalar dependências adicionais primeiro:


```bash
sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth
```


Veja [Instalação → Linux](#linux-electron) para detalhes.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> Atualmente o macOS não é suportado. O Transrewrt está disponível para Windows, Linux e Docker.

<br/>

Quando o aplicativo estiver em execução, consulte o **[Guia do Usuário](USER-GUIDE.pt-BR.md)** para aprender como traduzir, reescrever e transformar textos, gerenciar prompts e configurar modelos.

<br/><br/>

<a id="installation"></a>

## Instalação

<a id="windows-electron"></a>

### Windows (Electron)

- Baixe o instalador mais recente em [Releases](https://github.com/wsj-br/transrewrt/releases).
- Execute o arquivo `.exe` e siga as instruções do instalador.
- Primeira execução: inicie o aplicativo pelo menu Iniciar ou pelo atalho na área de trabalho.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> O Windows pode exibir um destes avisos de segurança (comum para aplicativos não assinados ou independentes):
>   - **Controle de Conta de Usuário (UAC)**: "Você deseja permitir que este aplicativo de um editor desconhecido faça alterações em seu dispositivo?" → Clique em **Sim**.
>   - **Microsoft Defender SmartScreen**: "O Windows protegeu seu PC" → Clique em **Mais informações** → **Executar assim mesmo**.
>
> Isso ocorre porque o aplicativo não foi assinado pela Microsoft ou por um editor importante — ele é seguro se baixado por meio das versões oficiais no nosso GitHub
> (verifique o checksum SHA256 abaixo).

<br/>

<a id="linux-electron"></a>

### Linux (Electron)

- Baixe o `.AppImage` correspondente (`x64` ou `arm64`) em [Releases](https://github.com/wsj-br/transrewrt/releases).
- Execute: `chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage` em x86_64/amd64, ou use o nome do arquivo `...-arm64.AppImage` em ARM64.
- Dependências adicionais (Debian/Ubuntu): `sudo apt install libgtk-3-0 libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth`
- Veja [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md) para mais informações.

<br/>

<a id="docker"></a>

### Docker

- Pull: `docker pull ghcr.io/wsj-br/transrewrt:latest`
- Defina pelo menos uma chave de provedor via ambiente (por exemplo, `OPENROUTER_API_KEY` para OpenRouter). Passe as variáveis com `-e` ou via `docker compose` / `.env` para que os segredos não sejam incorporados à imagem.
- As chaves dos provedores **não** são inseridas na interface web; o servidor as lê a partir das variáveis de ambiente.

Exemplo - volume nomeado para persistência (chave OpenRouter via ambiente):

```bash
OPENROUTER_API_KEY=sk-or-your-key docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e OPENROUTER_API_KEY \
  --name transrewrt-web \
  ghcr.io/wsj-br/transrewrt:latest
```

ou, se preferir usar o Docker Compose, utilize:

```bash
# baixe o arquivo de composição
wget https://github.com/wsj-br/transrewrt/raw/refs/heads/master/production.yml -O transrewrt.yml
# edite o arquivo para adicionar as API_KEYS e ajustar o fuso horário (TZ)
vi transrewrt.yml
# inicie o contêiner
docker compose -f transrewrt.yml up -d

Veja [Configuração](#configuration-and-environment) para todas as variáveis de ambiente, como `PORT`, `CONFIG_PATH`, `TZ` e chaves de LLM (`OPENROUTER_API_KEY`, `OPENAI_API_KEY`, …).

<a id="configuring-the-timezone"></a>

### Configurando o fuso horário

A data e hora da interface do usuário do aplicativo seguem o idioma e o fuso horário do **navegador**. Para o comportamento no lado do **servidor** (logs e similares), o contêiner utiliza a variável de ambiente `TZ`. O valor padrão é `TZ=Europe/London`.

Para usar outro fuso horário, defina `TZ` no seu arquivo Compose, por exemplo:

```yaml
environment:
  - TZ=America/Sao_Paulo
```

Ou passe ao executar o contêiner (Docker):

```bash
--env TZ=America/Sao_Paulo
```

Em muitos sistemas Linux, você pode copiar o nome do fuso horário do sistema com:

```bash
echo TZ=\"$(</etc/timezone)\"
```

Uma lista de nomes válidos de fusos horários está disponível na [base de dados tz](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) (Wikipedia).

<br/><br/>

<a id="getting-an-openrouter-api-key"></a>

## Obtendo uma chave de API do OpenRouter

O Transrewrt suporta múltiplos provedores de IA. [OpenRouter](https://openrouter.ai) é uma escolha popular porque agrega muitos modelos sob uma única chave e oferece modelos gratuitos.

1. Registre-se ou entre em [openrouter.ai](https://openrouter.ai).
2. Acesse a página [Keys](https://openrouter.ai/keys) e crie uma nova chave (dê um nome e, opcionalmente, defina um limite de crédito). Você pode usar modelos gratuitos sem adicionar créditos.
3. **Desktop (Electron):** cole as chaves em **Configurações → API**. **Docker:** defina variáveis de ambiente como `OPENROUTER_API_KEY` (veja [Início rápido](#quick-start)).

Não use o modelo **Body Builder** do OpenRouter ([`openrouter/bodybuilder`](https://openrouter.ai/openrouter/bodybuilder)) para traduzir, reescrever ou transformar: ele retorna cargas de solicitação JSON, não o texto completo para essas tarefas. Veja [Configurações → Modelos](USER-GUIDE.pt-BR.md#models) no Guia do Usuário.

Você também pode usar outros provedores (OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras) ou executar modelos localmente com o [Ollama](https://ollama.com). Veja [Configuração](#configuration-and-environment) para obter a lista completa dos provedores suportados e variáveis de ambiente.

> ⚠️ **ATENÇÃO**<br/>
> Se você estiver usando o Ollama a partir de outro dispositivo, contêiner ou serviço, lembre-se de configurá-lo para permitir conexões externas (não apenas localhost).

Para saber mais sobre limites, BYOK e outros detalhes, consulte [Autenticação do OpenRouter](https://openrouter.ai/docs/api/reference/authentication).

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

| Variável               | Padrão                    | Descrição |
| ---------------------- | ------------------------- | --------- |
| `PORT`                 | `5000`                    | Porta de escuta do servidor |
| `CONFIG_PATH`          | `/app/data/config.json`   | Caminho para o arquivo de configuração |
| `TZ`                   | `Europe/London`           | Fuso horário IANA para hora no lado do servidor (logs, etc.); a interface ainda segue o fuso do navegador. Veja [Docker → fuso horário](#docker-timezone) |
| `OPENROUTER_API_KEY`   | *(vazio)*                 | Chave da API OpenRouter |
| `OPENAI_API_KEY`       | *(vazio)*                 | Chave da API OpenAI |
| `CEREBRAS_API_KEY`     | *(vazio)*                 | Chave da API Cerebras |
| `ANTHROPIC_API_KEY`    | *(vazio)*                 | Chave da API Anthropic |
| `GOOGLE_API_KEY`       | *(vazio)*                 | Chave da API Google Gemini |
| `DEEPSEEK_API_KEY`     | *(vazio)*                 | Chave da API DeepSeek |
| `GROQ_API_KEY`         | *(vazio)*                 | Chave da API Groq |
| `MISTRAL_API_KEY`      | *(vazio)*                 | Chave da API Mistral |
| `OLLAMA_URL`           | *(vazio)*                 | URL base do Ollama (ex: `http://host.docker.internal:11434`) |
| `XAI_API_KEY`          | *(vazio)*                 | Chave da API xAI |

Configure apenas os provedores que você utiliza. Os IDs dos modelos são organizados por namespace (`openrouter/…`, `openai/…`, `cerebras/…`, `ollama/…`, etc.).

**Exibição de custo:** O OpenRouter retorna o custo exato cobrado, quando aplicável. Outros provedores usam o custo **estimado** com base na precificação pública de modelos do OpenRouter, caso uma chave do OpenRouter esteja disponível; sem essa chave, o custo de provedores não OpenRouter pode ser exibido como `0`. As estimativas não equivalem a faturas.

<br/>

**Dados e persistência:** No Docker, monte um volume em `/app/data` para que o `config.json` e o banco de dados SQLite persistam entre reinicializações do contêiner. Sem um volume, todos os dados serão perdidos ao parar o contêiner.

**Desenvolvedores:** Após atualizar mudanças que substituem a antiga configuração de chave única, redefina ou combine o arquivo `data/config.json` com a nova estrutura padrão de `src/config-defaults/config_default.json`, caso seu arquivo local ainda use campos removidos (`api_key`, `api_url`, opções de proxy).

<br/>

**Autenticação web:**

- Administrador padrão: `admin` / `transrewrt26`.
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

- **Desenvolvimento:** Configuração, construção, testes e implantação (Electron, Web, Docker) - veja **[dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)**.
- **Visão geral da arquitetura e do sistema:** Estrutura de pastas, pilha tecnológica, decisões de design - veja **[dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)**.

<br/><br/>

<a id="reporting-issues"></a>

## Relatando problemas

Abra um problema no [GitHub](https://github.com/wsj-br/transrewrt/issues). Inclua sua plataforma (Windows / Linux / Docker) e a versão do aplicativo (exibida na janela "Sobre" ou na página de Lançamentos).

<br/><br/>

<a id="disclaimer"></a>

## Aviso

Os nomes e ícones dos produtos pertencem aos seus respectivos proprietários e são usados apenas para fins de identificação. Este software não é afiliado nem endossado por nenhuma das marcas mencionadas.

<br/><br/>

<a id="license"></a>

## Licença

Copyright © 2026 Waldemar Scudeller Jr.

[Licença Apache 2.0](LICENSE)