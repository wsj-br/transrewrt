---
title: Problemas comuns
description: Solução de problemas e dicas rápidas para o Transrewrt.
translation_last_updated: '2026-07-17T21:14:47.575Z'
source_file_mtime: '2026-07-17T14:37:17.841Z'
source_file_hash: d60d2f0d1e9289639fd72ad478b6756e4638dce77acf7d2d1795a37653a97f17
translation_language: pt-BR
source_file_path: src/content/docs/docs/common-issues.md
translation_models:
  - google/gemini-2.5-flash
---



Se algo não funcionar como esperado, verifique estes pontos primeiro.

## O aplicativo não traduz, reescreve ou transforma

Verifique se:

- você selecionou um **preset** (Fácil) ou **modelo** (Avançado) na barra de ferramentas
- no modo **Fácil**, **Configurações → Configurações Gerais** tem um **Provedor** com uma chave funcional (ou URL de LLM Local)
- no modo **Avançado**, pelo menos um modelo está listado em **Configurações → Modelos**
- sua configuração de API está funcionando (desktop: **Configurações → Configuração de API → Testar**)

## A lista de modelos está vazia

No modo **Fácil**, confirme se o **Provedor** está configurado e as chaves/URLs foram testadas. Para **LLM Local**, certifique-se de que seu servidor local esteja em execução e os modelos carregados.

No modo **Avançado**, abra **Configurações → Modelos**, clique em **Atualizar** e adicione modelos a **Modelos Selecionados**. Opcionalmente, ative **Somente Grátis**.

## Muito lento ou muito caro

- Escolha um preset ou modelo diferente
- Use uma entrada mais curta
- Desative a **Tradução em tempo real enquanto digita** nas Configurações Gerais
- Use modelos gratuitos para tarefas simples

## Idioma da interface incorreto

Clique no ícone do globo na barra de ferramentas e escolha seu **Idioma da interface**.

## Texto muito pequeno ou difícil de ler

**Configurações → Configurações Gerais** → altere a **Família da Fonte** e o **Tamanho**.

## O Resumo do Painel parece vazio

Isso é normal se:

- você usa apenas **modelos gratuitos** e está olhando para os números de **custo** (eles podem ser zero); os KPIs de contagem de chamadas ainda precisam de dados para o período selecionado
- o **filtro de tempo** selecionado não cobre quando as chamadas foram feitas — tente **Todos**

Se os KPIs ainda estiverem zerados após **Todos**, verifique [Histórico](/docs/history/) ou Painel → **Todas as Chamadas**.

## O custo mostra "não disponível" ou parece errado

O OpenRouter mostra o gasto real quando aplicável. Para outros provedores, o custo é estimado a partir do preço do OpenRouter; se nenhum preço corresponder, o custo aparece como **não disponível** e não é adicionado ao total.

## O custo total não corresponde à minha fatura do provedor

Os valores no aplicativo são **estimativas para referência**, não faturas. Para o OpenRouter, use **Configurações → Rastreamento de Custos → Sincronizar com o uso da chave de API**.

## Página de histórico ausente na barra lateral

**Manter histórico de execução** pode estar desativado. Ative-o nas Configurações Gerais, a menos que o histórico esteja desativado pelo administrador (`HISTORY_DISABLED` — consulte [Configuração](/docs/configuration/#privacy-mode)).

## Web: redirecionado para login inesperadamente

Sua sessão pode ter expirado. Faça login novamente. Se isso acontecer com frequência, verifique as configurações de tempo de vida da sessão do servidor.

## Administrador da web: esqueceu a senha

Se outro administrador puder fazer login, ele poderá redefinir a senha em **Configurações → Usuários**. Se você estiver bloqueado, mas tiver acesso ao shell:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

O nome de usuário padrão do administrador é `admin`. A partir de um checkout de origem: `pnpm run reset-web-password -- <username> <new-password>`.

## O Painel não mostra dados para outros usuários (web)

Apenas **administradores** podem visualizar outros usuários através do filtro **Usuário**. Usuários regulares veem apenas sua própria atividade.

## Prompt alterado e edições perdidas

Ao editar um prompt de Transformação, clique em **Salvar** antes de **Voltar para Executar**.

## Dicas rápidas

- Comece com [Traduzir](/docs/translate/) para confirmar sua configuração antes de Reescrever ou Transformar
- Use [Reescrever](/docs/rewrite/) para melhorias diárias na redação
- Use [Transformar](/docs/transform/) para fluxos de trabalho personalizados repetíveis
- Permaneça no modo **Fácil** até precisar de IDs de modelo granulares
- Exporte prompts regularmente se estiver construindo uma biblioteca de prompts
- Use [Painel](/docs/dashboard/) e [Histórico](/docs/history/) para revisar o uso e execuções anteriores

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
