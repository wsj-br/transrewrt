---
title: Traduzir texto
description: >-
  Converta texto entre idiomas, use o glossário e refine os resultados com
  Rephrase.
---



Use **Traduzir** para converter texto de um idioma para outro.

![Espaço de trabalho de tradução](/images/screenshots/pt-BR/translate.png)

## Pré-requisitos

- Pelo menos uma chave de provedor (desktop) ou chave de ambiente de servidor (web) — consulte [Chave de API](/docs/api-key/)
- Um **preset** (Fácil) ou **modelo** (Avançado) selecionado na barra de ferramentas

## Traduzir texto

1. Abra **Traduzir** na barra lateral.
2. Escolha um idioma em **De** (ou **Detectar Idioma**).
3. Escolha um idioma em **Para**.
4. Escolha um preset ou modelo na barra de ferramentas.
5. Digite ou cole o texto em **Entrada**.
6. Clique em **Traduzir**.
7. Leia o resultado em **Saída** e copie se necessário.

Os **idiomas principais** aparecem primeiro nas listas — defina-os em [Configurações → Idiomas](/docs/settings/#languages).

## Configurações úteis

Em [Configurações → Configurações Gerais](/docs/settings/#general-settings):

- **Executar automaticamente ao colar** — executa assim que você cola
- **Copiar resultado automaticamente para a área de transferência** — copia após uma execução bem-sucedida
- **Tradução em tempo real enquanto digita** — executa enquanto você digita (pode aumentar o custo)
- **Tempo limite (ms)** — aguarda antes de uma execução em tempo real
- **Comportamento para ENTER** — se Enter executa a tarefa ou insere uma nova linha

## Layout e teclado

- **Alternância de layout** — os botões acima dos painéis alternam entre os layouts de Entrada/Saída **lado a lado** e **empilhados**. A escolha se aplica a Traduzir, Reescrever e Transformar e é lembrada neste dispositivo.
- **Enter** ou **Shift+Enter** executa a tarefa, dependendo do **Comportamento para ENTER** (veja acima).
- **Escape** limpa o painel de Entrada (ou fecha um menu ou diálogo aberto primeiro).

## Refinar uma tradução

Após uma execução bem-sucedida, **Rephrase…** e um menu suspenso de versão aparecem ao lado do seletor **Para:**:

1. **Rephrase…** (nenhuma seleção) — outra tradução completa da mesma entrada. Até **cinco** versões; o modelo vê as versões anteriores para que a redação possa diferir. Clique em **Parar Tradução** para cancelar um rephrase em execução.
2. **Alternativas de palavras** — selecione palavras ou uma frase curta, depois clique com o botão direito ou **Rephrase…**. Escolha uma alternativa para substituir o trecho (pode expandir ligeiramente para gramática). Em cinco versões, apenas a versão 5 é atualizada.
3. Cada solicitação de rephrase ou alternativas usa o modelo novamente e pode adicionar custo.

## Usar o glossário

Um **glossário** é um par de termos de origem/destino para um par de idiomas. Quando ativado, os termos correspondentes são enviados ao modelo para que a terminologia preferida permaneça consistente.

1. Ative o **Glossário** no painel de entrada.
2. Traduza normalmente — os termos para o par **De** / **Para** são aplicados automaticamente.
3. Clique em **Adicionar ao Glossário** (ao lado de **De:**) para capturar um novo par rapidamente.
4. Gerencie todos os termos em [Configurações → Glossário](/docs/settings/#glossary).

:::note
Os termos do glossário são correspondidos por par de idiomas. Eles não podem ser usados com **Detectar Idioma** como origem.
:::

## Próximos passos

- [Reescrever texto](/docs/rewrite/)
- [Transformar com prompts](/docs/transform/)
- [Problemas comuns](/docs/common-issues/)
