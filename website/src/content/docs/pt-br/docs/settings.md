---
title: Configurações
description: >-
  Referência compacta para Geral, Modelos, Idiomas, Glossário, Custo,
  Transformar, Usuários, API e Sobre.
---



Abra **Configurações** na barra lateral para personalizar o comportamento do aplicativo.

| Guia | Desktop | Web (administrador) | Web (usuário) | Notas |
| --- | :---: | :---: | :---: | --- |
| Configurações Gerais | sim | sim | sim | Inclui **experiência de IA** (Fácil / Avançado) |
| Modelos | sim | sim | sim | Somente quando a **experiência de IA** é **Avançada** |
| Idiomas | sim | sim | sim | |
| Rastreamento de Custos | sim | sim | — | |
| Transformar | sim | sim | sim | Importação/exportação em massa de prompts |
| Glossário | sim | sim | sim | Pares de termos para tradução |
| Usuários | — | sim | — | |
| Configuração da API | sim | sim | — | |
| Sobre | sim | sim | sim | |

No modo **Fácil**, escolha a IA por meio de predefinições na barra de ferramentas e **Provedor** em Configurações Gerais; a guia **Modelos** fica oculta.

:::note
Na versão web, cada usuário tem sua própria configuração (experiência de IA, provedor, modelos/predefinições, idiomas, opções, prompts). As alterações não afetam outros usuários.
:::

## Configurações Gerais

![Guia Configurações Gerais](/images/screenshots/pt-BR/settings-general.png)

**Experiência de IA**

- **Fácil** (padrão): escolha um **Provedor**. Provedores de nuvem usam predefinições da barra de ferramentas. **LLM Local** lista os modelos locais instalados. **Atualizar catálogo de predefinições** busca a lista mais recente de predefinições do repositório do projeto.
  - **Gratuito (OpenRouter)** — opção de custo zero roteada para modelos gratuitos disponíveis; a qualidade e a disponibilidade podem variar
  - **Padrão** — leve e econômico; melhor para textos curtos, rascunhos rápidos e uso em alto volume
  - **Avançado** — modelo de alta precisão para conteúdo complexo ou com nuances, com custo mais alto
  - **Técnico** — ajustado para código, APIs, documentos de desenvolvedor e conteúdo estruturado; preserva a formatação e a terminologia
- **Avançado**: escolha modelos na barra de ferramentas; gerencie a lista em [Modelos](#models).

Você também pode alternar Fácil ↔ Avançado no menu de predefinições/modelos da barra de ferramentas (**Alternar para o modo Fácil/Avançado**, acima de Abrir Configurações).

**Aparência** — Tema; **Mostrar informações de custo nas ações**; **Dígitos fracionários de custo**; margem somente para web ao redor do aplicativo; **Família da Fonte** e **Tamanho**.

**Comportamento** — **Comportamento para ENTER**; **Execução automática ao colar**; **Copiar resultado automaticamente para a área de transferência**; **Tradução em tempo real enquanto digita**; **Tempo limite (ms)**.

**Histórico**

- **Manter histórico de execução** — armazena entrada/saída para a visualização [Histórico](/docs/history/). Desativar pede confirmação e pode remover o texto armazenado. Se rotulado como *desativado pelo administrador*, `HISTORY_DISABLED` está definido — consulte [Configuração](/docs/configuration/#privacy-mode).
- **Excluir dados do histórico** — remove o texto armazenado por idade ou limpa tudo. **Não** exclui os totais de custo (use o Rastreamento de Custos para isso).

**Backup de Configuração** (administradores de desktop e web)

- Opcional **Incluir dados de uso no backup**
- **Backup de configuração** — ZIP com configuração, estado, usuários, preferências, prompts e dados de uso opcionais
- **Restaurar do backup** — caixa de diálogo de confirmação com opções para restaurar e/ou limpar dados de uso

Os backups podem ser movidos entre desktop e web; restaurar um backup de desktop na web aplica os dados ao usuário administrador.

## Modelos

Disponível apenas no modo **Avançado**.

- **Modelos Disponíveis** (esquerda) e **Modelos Selecionados** (direita)
- Pesquisar, chips de **Provedor**, **Somente Grátis**, **Atualizar**, Expandir/Recolher Tudo
- Os IDs dos modelos usam um prefixo de provedor (`openrouter/…`, `openai/…`, `local/…`, …)

:::tip
Não use o **Body Builder** (`openrouter/bodybuilder`) do OpenRouter para Traduzir, Reescrever ou Transformar — ele retorna payloads de solicitação JSON, não texto finalizado.
:::

Adicione com **Adicionar**; remova com **X**. O modelo gratuito do OpenRouter é opcional — os modelos selecionados podem estar vazios. Remover o último modelo da barra de ferramentas abre **Configurações → Modelos**. Se o modelo atual ficar indisponível, o aplicativo seleciona o próximo modelo na lista em vez de forçar o modelo gratuito.

## Idiomas

- **Principais idiomas** — fixados perto do topo das listas de idiomas em Traduzir e Transformar
- **Idioma personalizado** — adicione um idioma que falta na lista integrada

## Rastreamento de custos

- **Custo Total**, **Copiar Valor**, **Redefinir Custo**
- **Sincronizar com uso da chave de API** — alinhar com o uso da conta OpenRouter (somente OpenRouter)
- **Uso da Chave de API** — detalhes do OpenRouter quando disponíveis
- **Excluir dados de custo** — todos os dados ou entradas mais antigas que uma data

O OpenRouter mostra o custo real faturado quando aplicável; outros provedores usam estimativas de preços do OpenRouter. Estimativas não são faturas.

:::caution
A exclusão de dados de custo não pode ser desfeita. Exporte via Histórico ou Painel → Todas as Chamadas primeiro, se precisar de um backup. O histórico de entrada/saída relacionado para essas chamadas de API também é removido.
:::

## Transformar

Gerencie prompts em massa: revise, exclua, importe, exporte e carregue prompts de exemplo.

## Glossário

Gerencie pares de termos aplicados durante a [tradução](/docs/translate/#use-the-glossary). Cada termo tem idioma de origem/destino e texto de origem/destino.

- Adicione pela linha inferior e **+**
- Filtre por idiomas ou texto
- Importe/exporte CSV ou XLSX; baixe modelos vazios

O Desktop armazena o glossário localmente; a web o armazena por usuário.

## Usuários

Somente web (administradores):

- Adicionar usuários, atualizar detalhes, redefinir senhas, excluir contas
- **Tempo limite da sessão** — quanto tempo um login dura (1 hora a 7 dias); as alterações se aplicam apenas a novos logins
- **Revogar sessões** — desconectar um usuário de todos os dispositivos imediatamente

Todo usuário conectado (incluindo não-administradores) pode alterar sua própria senha ou sair do menu do usuário na parte inferior da barra lateral.

## Configuração da API

Configure apenas os provedores que você usa: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **LLM Local** (URL base para Ollama, LM Studio, llama.cpp ou similar) e um provedor compatível com OpenAI personalizado opcional.

**Web (administrador):** as chaves vêm de variáveis de ambiente — esta página mostra quais estão configuradas e permite que você **Teste**. Reinicie após alterar as variáveis de ambiente. Consulte [Configuração](/docs/configuration/).

**Desktop:** insira as chaves (ou URL do LLM Local) e **Salvar** / **Editar** / **Testar**. As chaves são armazenadas criptografadas; você não pode visualizar o valor atual, apenas substituí-lo.

:::tip
Nenhuma chave paga é necessária para começar: use modelos OpenRouter gratuitos, outros provedores de nível gratuito ou um servidor local compatível com OpenAI, como [Ollama](https://ollama.com), LM Studio ou llama.cpp (por exemplo, `translategemma:4b`).
:::

## Sobre

Nome do aplicativo, versão, data de compilação, licença, avisos de terceiros e link do repositório.
