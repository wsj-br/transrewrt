---
title: Configurações
description: >-
  Referência compacta para Geral, Modelos, Idiomas, Glossário, Custo,
  Transformar, Usuários, API e Sobre.
translation_last_updated: '2026-07-17T21:14:47.795Z'
source_file_mtime: '2026-07-17T14:37:21.849Z'
source_file_hash: 492e5fd37f4a6b282502282d4f2728047a0d09ae8c30334b3c8388a5ce6e9f68
translation_language: pt-BR
source_file_path: src/content/docs/docs/settings.md
translation_models:
  - google/gemini-2.5-flash
---



Abra **Configurações** na barra lateral para personalizar o comportamento do aplicativo.

| Aba | Desktop | Web (admin) | Web (usuário) | Notas |
| --- | :---: | :---: | :---: | --- |
| Configurações Gerais | sim | sim | sim | Inclui **experiência de IA** (Fácil / Avançado) |
| Modelos | sim | sim | sim | Somente quando a **experiência de IA** é **Avançado** |
| Idiomas | sim | sim | sim | |
| Rastreamento de Custos | sim | sim | — | |
| Transformar | sim | sim | sim | Importação/exportação em massa de prompts |
| Glossário | sim | sim | sim | Pares de termos para tradução |
| Usuários | — | sim | — | |
| Configuração da API | sim | sim | — | |
| Sobre | sim | sim | sim | |

No modo **Fácil**, escolha a IA por meio de predefinições na barra de ferramentas e **Provedor** em Configurações Gerais; a aba **Modelos** fica oculta.

:::note
Na versão web, cada usuário tem sua própria configuração (experiência de IA, provedor, modelos/predefinições, idiomas, opções, prompts). As alterações não afetam outros usuários.
:::

## Configurações gerais

**Experiência de IA**

- **Fácil** (padrão): escolha um **Provedor**. Provedores de nuvem usam predefinições da barra de ferramentas (**Gratuito (OpenRouter)**, **Padrão**, **Avançado**, **Técnico**). **LLM Local** lista os modelos locais instalados. **Atualizar catálogo de predefinições** busca a lista mais recente de predefinições do repositório do projeto.
- **Avançado**: escolha modelos na barra de ferramentas; gerencie a lista em [Modelos](#models).

**Aparência** — Tema; **Mostrar informações de custo nas ações**; **Dígitos da fração de custo**; margem apenas para web ao redor do aplicativo; **Família da Fonte** e **Tamanho**.

**Comportamento** — **Comportamento para ENTER**; **Executar automaticamente ao colar**; **Copiar resultado automaticamente para a área de transferência**; **Tradução em tempo real enquanto digita**; **Tempo limite (ms)**.

**Histórico**

- **Manter histórico de execução** — armazena entrada/saída para a visualização [Histórico](/docs/history/). Desativar pede confirmação e pode remover texto armazenado. Se rotulado como *desativado pelo administrador*, `HISTORY_DISABLED` é definido — consulte [Configuração](/docs/configuration/#privacy-mode).
- **Excluir dados do histórico** — remove texto armazenado por idade ou limpa tudo. **Não** exclui totais de custo (use Rastreamento de Custos para isso).

**Backup de Configuração** (administradores de desktop e web)

- Opcional **Incluir dados de uso no backup**
- **Configuração de backup** — ZIP com configuração, estado, usuários, preferências, prompts e dados de uso opcionais
- **Restaurar do backup** — caixa de diálogo de confirmação com opções para restaurar e/ou limpar dados de uso

Backups podem ser movidos entre desktop e web; restaurar um backup de desktop na web aplica dados ao usuário administrador.

## Modelos

Disponível apenas no modo **Avançado**.

![Aba Modelos de Configurações](/images/screenshots/pt-BR/settings-general.png)

- **Modelos Disponíveis** (esquerda) e **Modelos Selecionados** (direita)
- Pesquisar, chips de **Provedor**, **Somente Gratuitos**, **Atualizar**, Expandir/Recolher Tudo
- IDs de modelo usam um prefixo de provedor (`openrouter/…`, `openai/…`, `local/…`, …)

:::caution
Não use o **Body Builder** (`openrouter/bodybuilder`) do OpenRouter para Traduzir, Reescrever ou Transformar — ele retorna payloads de solicitação JSON, não texto finalizado.
:::

Adicione com **Adicionar**; remova com **X**. **Desmarcar tudo** mantém o modelo gratuito necessário.

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
A exclusão de dados de custo não pode ser desfeita. Exporte via Histórico ou Painel → Todas as Chamadas primeiro se precisar de um backup. O histórico de entrada/saída relacionado para essas chamadas de API também é removido.
:::

## Transformar

Gerencie prompts em massa: revise, exclua, importe, exporte e carregue prompts de exemplo.

## Glossário

Gerencie pares de termos aplicados durante a [tradução](/docs/translate/#use-the-glossary). Cada termo tem idioma de origem/destino e texto de origem/destino.

- Adicionar através da linha inferior e **+**
- Filtrar por idiomas ou texto
- Importar/exportar CSV ou XLSX; baixar modelos vazios

O Desktop armazena o glossário localmente; a web o armazena por usuário.

## Usuários

Somente web (administradores): adicionar usuários, atualizar detalhes, redefinir senhas, excluir contas.

## Configuração da API

Configure apenas os provedores que você usa: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, **LLM Local** (URL base para Ollama, LM Studio, llama.cpp ou similar) e um provedor personalizado opcional compatível com OpenAI.

**Web (administrador):** as chaves vêm de variáveis de ambiente — esta página mostra quais estão definidas e permite que você **Teste**. Reinicie após alterar as variáveis de ambiente. Consulte [Configuração](/docs/configuration/).

**Desktop:** insira as chaves (ou URL do LLM Local) e **Salvar** / **Editar** / **Testar**. As chaves são armazenadas criptografadas; você não pode visualizar o valor atual, apenas substituí-lo.

:::tip
Nenhuma chave paga é necessária para começar: use modelos OpenRouter gratuitos, outros provedores de nível gratuito ou um servidor local compatível com OpenAI, como [Ollama](https://ollama.com), LM Studio ou llama.cpp (por exemplo, `translategemma:4b`).
:::

## Sobre

Nome do aplicativo, versão, data de compilação, licença, avisos de terceiros e link do repositório.
