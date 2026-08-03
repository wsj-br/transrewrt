---
title: Visão geral
description: >-
  O que é o Transrewrt e como encontrar documentos de instalação, guias e
  configurações.
---



**Transrewrt** é uma ferramenta de texto de código aberto com IA para:

- **Traduzir** — entre dezenas de idiomas, com detecção automática de origem e glossários
- **Reescrever** — corrigir gramática, melhorar a clareza, mudar o tom ou o comprimento
- **Transformar** — executar seus próprios prompts de IA personalizados em qualquer texto

Ele suporta muitos provedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, endpoints compatíveis com OpenAI e servidores locais compatíveis com OpenAI, como Ollama, LM Studio ou llama.cpp). Execute-o como um **aplicativo de desktop** (Windows / Linux) ou um **aplicativo web Docker**.

Suas chaves, seus modelos, seu host — não há conta Transrewrt na nuvem.

## Como a janela é organizada

![Espaço de trabalho de tradução](/images/screenshots/pt-BR/translate.png)

- **Barra lateral** — a navegação principal: Traduzir, Reescrever, Transformar, Painel, Histórico, Configurações (e o usuário logado na web).
- **Barra de ferramentas** — o título da página, o seletor de **predefinição** (Fácil) ou **modelo** (Avançado), o seletor de **Idioma da interface** (ícone de globo; não altera Traduzir De/Para) e Ajuda (**?**) com link para esta documentação. O menu de predefinição/modelo também pode **Alternar para o modo Fácil/Avançado** (acima de Abrir Configurações).
- **Área de trabalho** — os painéis de Entrada e Saída, com contagens, tempo, TPS e custo opcional. A barra de ação mostra um pequeno link de **versão** do aplicativo (canto inferior direito) para o site do GitHub Pages.

Por padrão, o aplicativo é executado no modo **Fácil**: escolha uma **predefinição** e um **Provedor** em Configurações. Mude para **Avançado** em [Configurações → Configurações Gerais](/docs/settings/#general-settings) para uma lista completa de modelos, ou use o botão no menu de predefinição/modelo da barra de ferramentas.

## Primeiros passos

1. [Início rápido](/docs/quick-start/) — instale o desktop ou execute com Docker
2. [Chave de API](/docs/api-key/) — conecte uma chave OpenRouter gratuita ou outro provedor
3. [Configuração](/docs/configuration/) — variáveis de ambiente, caminhos de configuração, autenticação web

## Guias

- [Traduzir texto](/docs/translate/)
- [Reescrever texto](/docs/rewrite/)
- [Transformar com prompts](/docs/transform/)
- [Usar o Painel](/docs/dashboard/)
- [Navegar pelo Histórico](/docs/history/)

## Referência e ajuda

- [Configurações](/docs/settings/)
- [Problemas comuns](/docs/common-issues/)

[Download releases](https://github.com/wsj-br/transrewrt/releases) · [GitHub repository](https://github.com/wsj-br/transrewrt)
