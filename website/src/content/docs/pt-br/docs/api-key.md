---
title: Chave de API
description: >-
  Obtenha uma chave de API gratuita do OpenRouter e conecte outros provedores de
  IA ao Transrewrt.
translation_last_updated: '2026-07-17T21:14:47.530Z'
source_file_mtime: '2026-07-17T14:58:48.569Z'
source_file_hash: 540c5b2b785355828a421293195b23c2fec98502888d607638fbb33f93970a2a
translation_language: pt-BR
source_file_path: src/content/docs/docs/api-key.md
translation_models:
  - google/gemini-2.5-flash
---



O Transrewrt precisa de acesso a pelo menos um provedor de IA. Você **não** precisa de um modelo pago para começar: o OpenRouter oferece modelos gratuitos depois que você adiciona uma chave, e vários outros provedores também oferecem planos gratuitos.

Os provedores suportados incluem [OpenRouter](https://openrouter.ai), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, qualquer endpoint compatível com OpenAI e servidores locais compatíveis com OpenAI (Ollama, LM Studio, llama.cpp e similares).

## Fácil vs. Avançado

- Modo **Fácil** (padrão): escolha um **predefinição** (Gratuito (OpenRouter), Padrão, Avançado ou Técnico) mapeado para um **provedor**. Apenas as predefinições com um mapeamento para o provedor atual aparecem.
- Modo **Avançado**: escolha modelos diretamente. Os IDs de modelo usam um prefixo de provedor (por exemplo, `openrouter/…`, `openai/…`, `local/…`).

## Chave OpenRouter gratuita (desktop)

1. Vá para [openrouter.ai](https://openrouter.ai) e cadastre-se ou faça login.
2. Abra a página [Chaves](https://openrouter.ai/keys) e crie uma nova chave (dê um nome; limite de crédito opcional). Você pode usar modelos gratuitos sem adicionar crédito.
3. No Transrewrt, abra **Configurações → Configuração da API**, cole a chave em **Chave de API do OpenRouter** e clique em **Testar chave do OpenRouter**.

:::caution
Não use o modelo **Body Builder** do OpenRouter (`openrouter/bodybuilder`) para traduzir, reescrever ou transformar — ele retorna payloads de solicitação JSON, não texto completo.
:::

## Outras opções gratuitas

Você também pode obter chaves de API gratuitas da Cerebras, Google, Groq, Mistral AI ou [NVIDIA](https://build.nvidia.com/) (API compatível com OpenAI), ou executar modelos localmente com Ollama, LM Studio, llama.cpp ou outro servidor compatível com OpenAI (por exemplo, `translategemma:4b` via Ollama). Defina a URL base do LLM Local para a base completa da API (inclua o caminho, por exemplo, `http://localhost:11434/v1`) em Configurações (desktop) ou `LOCAL_LLM_URL` (Docker).

:::caution
Se você usa um servidor LLM local de outro dispositivo ou contêiner, configure-o para permitir conexões externas (não apenas localhost).
:::

## Docker / web

Defina as chaves do provedor como **variáveis de ambiente** no servidor (por exemplo, `PROVIDER_API_KEY`). Os usuários não podem digitar chaves na interface do navegador. Consulte [Configuração](/docs/configuration/).

## Lista de verificação da primeira execução

1. Abra o aplicativo e defina o **Idioma da interface**, se necessário.
2. Adicione e teste pelo menos uma chave de provedor (desktop) ou confirme se o servidor tem chaves de ambiente (web).
3. No modo **Fácil**, escolha um **Provedor** em Configurações Gerais; no modo **Avançado**, adicione modelos em **Configurações → Modelos**.
4. Em **Traduzir**, escolha uma predefinição ou modelo e execute um teste curto — consulte [Traduzir texto](/docs/translate/).
