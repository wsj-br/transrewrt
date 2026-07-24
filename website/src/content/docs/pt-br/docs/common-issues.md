---
title: Problemas comuns
description: Solução de problemas e dicas rápidas para o Transrewrt.
---



Se algo não funcionar como esperado, verifique estes pontos primeiro.

## O aplicativo não traduz, reescreve ou transforma

Verifique se:

- você selecionou um **preset** (Fácil) ou **modelo** (Avançado) na barra de ferramentas
- no modo **Fácil**, **Configurações → Configurações Gerais** tem um **Provedor** com uma chave funcional (ou URL LLM Local)
- no modo **Avançado**, um modelo é selecionado na barra de ferramentas (uma lista vazia é permitida, mas você precisa de pelo menos um modelo em **Configurações → Modelos** para executar)
- sua configuração de API está funcionando (desktop: **Configurações → Configuração da API → Testar**)

## A lista de modelos está vazia

No modo **Fácil**, confirme se o **Provedor** está configurado e as chaves/URLs foram testadas. Para **LLM Local**, certifique-se de que seu servidor local esteja em execução e os modelos estejam carregados.

No modo **Avançado**, os modelos selecionados podem estar vazios. Abra **Configurações → Modelos**, clique em **Atualizar** e adicione modelos a **Modelos Selecionados**. Opcionalmente, ative **Somente Grátis**. Remover o último modelo da barra de ferramentas também abre Configurações → Modelos.

## Muito lento ou muito caro

- Escolha um preset ou modelo diferente
- Use uma entrada mais curta
- Desative a **Tradução em tempo real enquanto digita** em Configurações Gerais
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

O OpenRouter mostra o gasto real quando aplicável. Para outros provedores, o custo é estimado a partir dos preços do OpenRouter; se nenhum preço corresponder, o custo é exibido como **não disponível** e não é adicionado ao total.

## O custo total não corresponde à minha fatura do provedor

Os valores no aplicativo são **estimativas para referência**, não faturas. Para o OpenRouter, use **Configurações → Rastreamento de Custos → Sincronizar com o uso da chave de API**.

## Página de histórico ausente na barra lateral

**Manter histórico de execução** pode estar desativado. Ative-o nas Configurações Gerais, a menos que o histórico esteja desativado pelo administrador (`HISTORY_DISABLED` — consulte [Configuração](/docs/configuration/#privacy-mode)).

## Web: redirecionado para o login inesperadamente

Sua sessão pode ter expirado. Faça login novamente. Se isso acontecer com frequência, peça a um administrador para aumentar o **Tempo Limite da Sessão** em [Configurações → Usuários](/docs/settings/#users) (um administrador também pode ter revogado suas sessões).

## Administrador web: esqueceu a senha

Se outro administrador puder fazer login, ele poderá redefinir a senha em **Configurações → Usuários**. Se você estiver bloqueado, mas tiver acesso ao shell:

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

O nome de usuário padrão do administrador é `admin`. A partir de um checkout de origem: `pnpm run reset-web-password -- <username> <new-password>`.

## O painel não mostra dados para outros usuários (web)

Somente **administradores** podem visualizar outros usuários através do filtro **Usuário**. Usuários comuns veem apenas suas próprias atividades.

## Alterei um prompt e perdi as edições

Ao editar um prompt de Transformação, clique em **Salvar** antes de **Voltar para Executar**.

## Dicas rápidas

- Comece com [Traduzir](/docs/translate/) para confirmar sua configuração antes de Reescrever ou Transformar
- Use [Reescrever](/docs/rewrite/) para melhorias diárias na redação
- Use [Transformar](/docs/transform/) para fluxos de trabalho personalizados repetíveis
- Permaneça no modo **Fácil** até precisar de IDs de modelo granulares
- Exporte prompts regularmente se estiver construindo uma biblioteca de prompts
- Use [Painel](/docs/dashboard/) e [Histórico](/docs/history/) para revisar o uso e as execuções anteriores

[Report an issue](https://github.com/wsj-br/transrewrt/issues)
