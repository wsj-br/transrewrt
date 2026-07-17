---
title: Traduzir texto
description: >-
  Converta texto entre idiomas, use o glossário e refine os resultados com
  Refrasear.
---



Use **Traduzir** para converter texto de um idioma para outro.

![Traduzir espaço de trabalho](/images/screenshots/pt-BR/translate.png)

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
- **Tempo limite (ms)** — aguardar antes de uma execução em tempo real
- **Comportamento para ENTER** — se Enter executa a tarefa ou insere uma nova linha

## Refinar uma tradução

Após uma execução bem-sucedida, **Refrasear…** e um menu suspenso de versão aparecem ao lado do seletor **Para:**:

1. **Refrasear…** (sem seleção) — outra tradução completa da mesma entrada. Até **cinco** versões; o modelo vê as versões anteriores para que a redação possa diferir. Clique em **Parar Tradução** para cancelar um refraseamento em andamento.
2. **Alternativas de palavras** — selecione palavras ou uma frase curta e, em seguida, clique com o botão direito ou em **Refrasear…**. Escolha uma alternativa para substituir o trecho (pode expandir ligeiramente para gramática). Em cinco versões, apenas a versão 5 é atualizada.
3. Cada solicitação de refraseamento ou alternativas usa o modelo novamente e pode adicionar custo.

## Usar o glossário

Um **glossário** é um par de termos de origem/destino para um par de idiomas. Quando ativado, os termos correspondentes são enviados ao modelo para que a redação preferida permaneça consistente.

1. Ative o **Glossário** no painel de entrada.
2. Traduza como de costume — os termos para aquele par **De** / **Para** são aplicados automaticamente.
3. Clique em **Adicionar ao Glossário** (ao lado de **De:**) para capturar um novo par rapidamente.
4. Gerencie todos os termos em [Configurações → Glossário](/docs/settings/#glossary).

:::note
Os termos do glossário são correspondidos por par de idiomas. Eles não podem ser usados com **Detectar idioma** como origem.
:::

## Próximos passos

- [Reescrever texto](/docs/rewrite/)
- [Transformar com prompts](/docs/transform/)
- [Problemas comuns](/docs/common-issues/)
