---
title: Configuração
description: >-
  Locais de arquivos de configuração, variáveis de ambiente Docker, modo de
  privacidade e autenticação web.
---



## Locais dos arquivos de configuração

| Implantação | Pasta de dados |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/` (use um volume para persistir) |

A pasta de dados contém tudo o que vale a pena fazer backup:

- `config.json` — configurações e chaves de API criptografadas (desktop)
- `state.json` — idiomas, modelo e estado de visualização usados pela última vez
- `presets.json` — catálogo de predefinições do modo Fácil em cache
- `transrewrt.db` — banco de dados SQLite com histórico, custos, prompts, glossário e usuários (web)

Você também pode criar um ZIP de backup portátil a partir do aplicativo — consulte [Configurações → Configurações Gerais](/docs/settings/#general-settings).

## Variáveis de ambiente (web / Docker)

O Electron usa o arquivo de configuração local. Apenas para o servidor web/Docker:

| Variável | Descrição |
| --- | --- |
| `PORT` | Porta de escuta do servidor (padrão `5000`) |
| `CONFIG_PATH` | Caminho para o arquivo de configuração (padrão `/app/data/config.json`) |
| `TZ` | Fuso horário para a hora do servidor (padrão `Europe/London`) |
| `HISTORY_DISABLED` | Forçar o histórico de execução desativado (`true` / `1`) |
| `OPENROUTER_API_KEY` | Chave de API OpenRouter |
| `OPENAI_API_KEY` | Chave de API OpenAI |
| `CEREBRAS_API_KEY` | Chave de API Cerebras |
| `ANTHROPIC_API_KEY` | Chave de API Anthropic |
| `GOOGLE_API_KEY` | Chave de API Google Gemini |
| `DEEPSEEK_API_KEY` | Chave de API DeepSeek |
| `GROQ_API_KEY` | Chave de API Groq |
| `MISTRAL_API_KEY` | Chave de API Mistral |
| `LOCAL_LLM_URL` | URL base completa da API compatível com OpenAI para um servidor local, incluindo o caminho (por exemplo, Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | Chave de API xAI |
| `NVIDIA_API_KEY` | Chave de API NVIDIA |
| `ALIBABA_API_KEY` | Chave de API Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | Chave de API apikey.fun |
| `CUSTOM_PROVIDER_NAME` | Nome de exibição para um provedor personalizado compatível com OpenAI |
| `CUSTOM_PROVIDER_URL` | URL base para um provedor personalizado compatível com OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | Chave de API para o provedor personalizado |

Todas as três variáveis `CUSTOM_PROVIDER_*` são necessárias ao usar um endpoint personalizado. Os modelos aparecem no modo **Avançado** como `{providerName}/…`.

## Variáveis de ambiente (desktop)

| Variável | Descrição |
| --- | --- |
| `TRANSREWRT_DISABLE_GPU` | Defina como `1` para desabilitar a aceleração de hardware (útil quando o Chromium imprime erros de GPU / EGL no Linux) |
| `HISTORY_DISABLED` | Forçar o histórico de execução a ser desativado (`true` / `1`) — consulte [Modo de privacidade](#privacy-mode) |

## Modo de privacidade

Defina `HISTORY_DISABLED` como `true` ou `1` no processo do servidor web/Docker e/ou no processo principal do Electron para forçar o histórico a ser desativado, independentemente de `config.json` ou das preferências do usuário. Isso desabilita o armazenamento do histórico de entrada/saída, bloqueia **Configurações → Configurações Gerais → Histórico** e bloqueia as APIs relacionadas ao Histórico.

## Persistência de dados (Docker)

Monte um volume em `/app/data` para que os arquivos de configuração e o banco de dados SQLite (consulte [Locais dos arquivos de configuração](#config-file-locations)) sobrevivam às reinicializações do contêiner. Sem um volume, os dados são perdidos quando o contêiner para.

## Autenticação web

- Administrador padrão: `admin` / `transrewrt26`
- Gerencie usuários, tempo limite de sessão e revogação de sessão em **Configurações → Usuários** — consulte [Configurações](/docs/settings/#users)
- Cada usuário conectado pode alterar sua própria senha ou sair do menu do usuário na parte inferior da barra lateral
- Redefinir uma senha:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Altere a senha padrão do administrador imediatamente em qualquer host acessível pela rede.
:::

:::caution
O servidor usa HTTP simples. Se você o expuser além do localhost ou de uma rede confiável, coloque-o atrás de um proxy reverso com HTTPS (por exemplo, Caddy, nginx ou Traefik) para que senhas e texto não sejam enviados em texto simples.
:::

## Exibição de custo

O OpenRouter retorna o custo exato cobrado quando aplicável. Outros provedores usam o custo **estimado** do preço do modelo público do OpenRouter quando uma chave do OpenRouter está disponível. Estimativas não são faturas.

Para a interface do usuário de Configurações (fontes, modelos, histórico, backups), consulte [Configurações](/docs/settings/).
