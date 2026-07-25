---
title: Chave de API
description: >-
  Conecte o Transrewrt a um provedor de IA de sua escolha adicionando uma chave
  de API, ou use um modelo local.
---



O Transrewrt não inclui sua própria IA — ele envia seu texto para um provedor de IA que você escolhe. Para conectar um provedor, você adiciona uma **chave de API**: um código privado, emitido pelo provedor, que funciona como uma senha para o serviço deles. Você só precisa de **um** provedor para começar, e não precisa pagar: vários provedores oferecem modelos gratuitos ou planos gratuitos, e você também pode executar modelos em seu próprio computador sem chave alguma.

Os provedores suportados incluem OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, qualquer endpoint compatível com OpenAI e servidores locais compatíveis com OpenAI (Ollama, LM Studio, llama.cpp e similares).

## Passo 1 — Escolha um provedor

Qualquer provedor suportado funciona. Se você não tiver certeza de qual escolher:

- **Gratuito para começar**: OpenRouter, Google Gemini, Groq, Mistral, Cerebras e NVIDIA oferecem modelos gratuitos ou planos gratuitos.
- **Já tem uma conta?** Se você já usa OpenAI, Anthropic ou outro provedor suportado, pode simplesmente reutilizar essa conta.
- **Prefere manter tudo no seu próprio computador?** Ignore a chave completamente e use um [modelo local](#using-a-local-model-instead-no-api-key) em vez disso.

## Passo 2 — Crie uma chave de API

Os passos exatos variam ligeiramente por provedor, mas o padrão é o mesmo em todos os lugares:

1. Cadastre-se ou faça login no site do provedor. Em **Configurações → Configuração de API** do Transrewrt, cada provedor tem um link **Abrir site do provedor** que o leva ao local certo.
2. Encontre a página **Chaves de API** (às vezes em configurações de conta, painel ou desenvolvedor) e crie uma nova chave. Alguns provedores pedem para você nomear a chave ou definir um limite de gastos — ambos são opcionais.
3. Copie a chave. É uma longa sequência de letras e números, muitas vezes começando com algo como `sk-`.

:::note
Trate uma chave de API como uma senha: não a compartilhe, publique ou envie para ninguém. Se uma chave vazar, exclua-a no site do provedor e crie uma nova.
:::

## Passo 3 — Adicione e teste a chave (desktop)

1. No Transrewrt, abra **Configurações → Configuração de API**.
2. Cole a chave no campo do seu provedor (por exemplo, **Chave de API do Google Gemini**) e salve-a.
3. Clique em **Testar** ao lado do campo para confirmar se a chave funciona.

Assim que o teste for bem-sucedido, você estará pronto — escolha esse provedor na tela principal e comece a traduzir.

## Usando um modelo local (sem chave de API)

Você pode executar modelos em seu próprio computador com Ollama, LM Studio, llama.cpp ou outro servidor compatível com OpenAI (por exemplo, `google/gemma-4-e2b` via LM Studio). Nada sai da sua máquina e nenhuma chave de API é necessária.

Para conectar um, defina a URL base do LLM Local para a base completa da API, incluindo o caminho — por exemplo, `http://localhost:11434/v1`. No desktop, defina isso em **Configurações → Configuração de API**; no Docker, defina a variável de ambiente `LOCAL_LLM_URL` em vez disso.

:::tip
Se você usa um servidor LLM local de outro dispositivo ou contêiner, configure-o para permitir conexões externas (não apenas localhost).
:::

## Docker / web

Se você usa o Transrewrt em um navegador, as chaves são gerenciadas por quem executa o servidor, não digitadas na interface do usuário do navegador. O administrador define as chaves do provedor como **variáveis de ambiente** no servidor (por exemplo, `PROVIDER_API_KEY`) — consulte [Configuração](/docs/configuration/).

## Lista de verificação de primeira execução

1. Abra o aplicativo e defina o **Idioma da interface**, se necessário.
2. Adicione e teste pelo menos uma chave de provedor — ou configure um modelo local (desktop), ou confirme se o servidor tem chaves de ambiente (web).
3. No modo **Fácil**, escolha um **Provedor** em Configurações Gerais; no modo **Avançado**, adicione modelos em **Configurações → Modelos** — consulte [Configurações](/docs/settings/#general-settings) para os dois modos.
4. Em **Traduzir**, escolha um preset ou modelo e execute um teste curto — consulte [Traduzir texto](/docs/translate/).

## Se algo não funcionar

- **A chave de teste falha**: verifique se a chave foi copiada completamente (sem espaços antes ou depois) e se não foi excluída ou desabilitada no site do provedor.
- **As traduções falham com um erro de cota ou crédito**: os níveis gratuitos têm limites diários ou mensais; aguarde, mude para outro provedor gratuito ou adicione crédito.
- **Nenhum provedor aparece no modo Fácil**: abra **Configurações → Configuração da API** e confirme se pelo menos uma chave (ou o URL do LLM Local) está configurada e testada.

Mais ajuda: [Problemas comuns](/docs/common-issues/).
