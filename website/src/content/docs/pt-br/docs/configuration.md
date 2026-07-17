---
title: Configuração
description: >-
  Locais de arquivo de configuração, variáveis de ambiente Docker, modo de
  privacidade e autenticação web.
translation_last_updated: '2026-07-17T21:14:47.616Z'
source_file_mtime: '2026-07-17T14:43:44.727Z'
source_file_hash: 8c3b2c00eddcee7693d66c5f5955c2d2186e55de630886446764bc6b798f05b5
translation_language: pt-BR
source_file_path: src/content/docs/docs/configuration.md
translation_models:
  - google/gemini-2.5-flash
---



## Locais de arquivo de configuração

| Implantação | Local da configuração |
| --- | --- |
| Electron (Windows) | `%APPDATA%\transrewrt\` |
| Electron (Linux) | `~/.config/transrewrt/` |
| Web / Docker | `/app/data/config.json` (use um volume para persistir) |

## Variáveis de ambiente (web / Docker)

O Electron usa o arquivo de configuração local. Apenas para o servidor web/Docker:

| Variável | Descrição |
| --- | --- |
| `PORT` | Porta de escuta do servidor (padrão `5000`) |
| `CONFIG_PATH` | Caminho para o arquivo de configuração (padrão `/app/data/config.json`) |
| `TZ` | Fuso horário para o horário do servidor (padrão `Europe/London`) |
| `HISTORY_DISABLED` | Forçar o histórico de execução desativado (`true` / `1`) |
| `OPENROUTER_API_KEY` | Chave de API do OpenRouter |
| `OPENAI_API_KEY` | Chave de API do OpenAI |
| `CEREBRAS_API_KEY` | Chave de API do Cerebras |
| `ANTHROPIC_API_KEY` | Chave de API do Anthropic |
| `GOOGLE_API_KEY` | Chave de API do Google Gemini |
| `DEEPSEEK_API_KEY` | Chave de API do DeepSeek |
| `GROQ_API_KEY` | Chave de API do Groq |
| `MISTRAL_API_KEY` | Chave de API do Mistral |
| `LOCAL_LLM_URL` | URL base da API totalmente compatível com OpenAI para um servidor local (inclua o caminho, por exemplo, Ollama `http://host.docker.internal:11434/v1`, LM Studio `http://host.docker.internal:1234/v1`) |
| `XAI_API_KEY` | Chave de API do xAI |
| `NVIDIA_API_KEY` | Chave de API da NVIDIA |
| `ALIBABA_API_KEY` | Chave de API do Alibaba Cloud (DashScope) |
| `APIFUN_API_KEY` | Chave de API do apikey.fun |
| `CUSTOM_PROVIDER_NAME` | Nome de exibição para um provedor personalizado compatível com OpenAI |
| `CUSTOM_PROVIDER_URL` | URL base para um provedor personalizado compatível com OpenAI |
| `CUSTOM_PROVIDER_API_KEY` | Chave de API para o provedor personalizado |

Todas as três variáveis `CUSTOM_PROVIDER_*` são necessárias ao usar um endpoint personalizado. Os modelos aparecem no modo **Avançado** como `{providerName}/…`.

## Modo de privacidade

Defina `HISTORY_DISABLED` como `true` ou `1` no processo do servidor web/Docker e/ou no processo principal do Electron para forçar o desligamento do histórico, independentemente de `config.json` ou das preferências por usuário. Isso desabilita o armazenamento do histórico de entrada/saída, bloqueia **Configurações → Configurações Gerais → Histórico** e bloqueia as APIs relacionadas ao Histórico.

## Persistência de dados (Docker)

Monte um volume em `/app/data` para que `config.json` e o banco de dados SQLite sobrevivam às reinicializações do contêiner. Sem um volume, os dados são perdidos quando o contêiner para.

## Autenticação web

- Administrador padrão: `admin` / `transrewrt26`
- Gerenciar usuários em **Configurações → Usuários**
- Redefinir uma senha:

```bash
docker exec <container> reset-web-password '<username>' '<new-password>'
```

:::danger
Altere a senha padrão do administrador imediatamente em qualquer host acessível pela rede.
:::

## Exibição de custo

O OpenRouter retorna o custo exato cobrado quando aplicável. Outros provedores usam o custo **estimado** da precificação pública do modelo do OpenRouter quando uma chave do OpenRouter está disponível. Estimativas não são faturas.

Para a interface de usuário de Configurações (fontes, modelos, histórico, backups), consulte [Configurações](/docs/settings/).
