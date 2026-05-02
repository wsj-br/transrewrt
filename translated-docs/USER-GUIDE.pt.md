---
translation_last_updated: '2026-05-01T21:25:52.100Z'
source_file_mtime: '2026-05-01T21:20:11.119Z'
source_file_hash: 253d03c03bd028d8119ce13e1d810e974a386f3e98054a9e750d5ecfbf1c76d0
translation_language: pt
source_file_path: USER-GUIDE.md
translation_models:
  - deepseek/deepseek-v3.2
  - openai/gpt-4o-mini
  - qwen/qwen3-235b-a22b-2507
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Guia do Usuário

<br/>

<a id="introduction"></a>
## Introdução

Transrewrt ajuda você a trabalhar com texto de três maneiras principais:

- **Traduzir** - converter texto de um idioma para outro.
- **Reescrever** - reformular texto em um estilo diferente, como mais claro, mais curto ou mais formal.
- **Transformar** - processar texto usando instruções de IA personalizadas chamadas prompts.

<br/>

Este guia explica como usar o aplicativo uma vez que ele esteja instalado e em funcionamento. Para etapas de instalação, consulte o **[README](README.pt.md)**.

<br/>

> ℹ️ **NOTA**<br/>
> Transrewrt está disponível como um aplicativo de desktop para Windows e Linux, e como um aplicativo web auto-hospedado. Este guia foca no uso cotidiano do aplicativo. Onde algo se aplica apenas a uma versão, isso está claramente marcado.

<small>**Leia em outros idiomas:** </small>
<small id="lang-list">[English (GB)](../USER-GUIDE.md) · [Português (Brasil)](./USER-GUIDE.pt-BR.md) · [العربية](./USER-GUIDE.ar.md) · [বাংলা](./USER-GUIDE.bn.md) · [Català](./USER-GUIDE.ca.md) · [中文 (中国大陆)](./USER-GUIDE.zh-CN.md) · [中文 (台灣)](./USER-GUIDE.zh-TW.md) · [Hrvatski](./USER-GUIDE.hr.md) · [Čeština](./USER-GUIDE.cs.md) · [Nederlands](./USER-GUIDE.nl.md) · [English (US)](./USER-GUIDE.en-US.md) · [Tagalog](./USER-GUIDE.tl.md) · [Français](./USER-GUIDE.fr.md) · [Deutsch](./USER-GUIDE.de.md) · [Ελληνικά](./USER-GUIDE.el.md) · [हिन्दी](./USER-GUIDE.hi.md) · [Magyar](./USER-GUIDE.hu.md) · [Italiano](./USER-GUIDE.it.md) · [日本語](./USER-GUIDE.ja.md) · [한국어](./USER-GUIDE.ko.md) · [Bahasa Melayu](./USER-GUIDE.ms.md) · [فارسی](./USER-GUIDE.fa.md) · [Polski](./USER-GUIDE.pl.md) · [Basa Jawa](./USER-GUIDE.jv.md) · [Português](./USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](./USER-GUIDE.pa.md) · [Română](./USER-GUIDE.ro.md) · [Русский](./USER-GUIDE.ru.md) · [Slovenčina](./USER-GUIDE.sk.md) · [Español](./USER-GUIDE.es.md) · [Kiswahili](./USER-GUIDE.sw.md) · [Svenska](./USER-GUIDE.sv.md) · [తెలుగు](./USER-GUIDE.te.md) · [ไทย](./USER-GUIDE.th.md) · [Türkçe](./USER-GUIDE.tr.md) · [Українська](./USER-GUIDE.uk.md) · [Tiếng Việt](./USER-GUIDE.vi.md)</small>

<small>

> **Observação sobre traduções da interface e documentação:** Todos os idiomas da interface, exceto o inglês (UK) original, 
> foram traduzidos usando modelos de IA; a redação pode ser imprecisa ou conter erros.

</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Tabela de Conteúdos**

- [Antes de começar](#before-you-start)
  - [Como obter uma chave API gratuita do OpenRouter (aplicativo desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Primeiros passos](#getting-started)
- [Partes principais da janela](#main-parts-of-the-window)
  - [Barra lateral](#sidebar)
  - [Barra de ferramentas](#toolbar)
  - [Painéis de entrada e saída](#input-and-output-panels)
- [Traduzir](#translate)
  - [Traduzir texto](#translate-text)
  - [Seleção de idioma](#language-selection)
  - [Configurações úteis de tradução](#helpful-translation-settings)
- [Reescrever](#rewrite)
- [Transformar](#transform)
  - [Executar um prompt existente](#run-an-existing-prompt)
  - [Se você ainda não tiver prompts](#if-you-have-no-prompts-yet)
  - [Criar um prompt rapidamente](#create-a-prompt-quickly)
  - [Editar um prompt](#edit-a-prompt)
  - [Testar um prompt antes de usá-lo](#test-a-prompt-before-using-it)
- [Painel](#dashboard)
  - [Filtrar os dados](#filter-the-data)
  - [Guias do painel](#dashboard-tabs)
  - [Exportar dados](#export-data)
  - [Excluir registros armazenados para um modelo](#delete-stored-records-for-a-model)
- [Histórico](#history)
  - [Filtrar os dados](#filter-the-data-1)
  - [Exportar dados do histórico](#export-history-data)
- [Configurações](#settings)
  - [Configurações gerais](#general-settings)
  - [Modelos](#models)
  - [Idiomas](#languages)
  - [Acompanhamento de custos](#cost-tracking)
  - [Prompts de transformação](#transform-prompts)
  - [Usuários](#users)
  - [Configuração de API](#api-config)
  - [Sobre](#about)
- [Problemas comuns](#common-issues)
  - [O aplicativo não traduz, reescreve ou transforma texto](#the-app-will-not-translate-rewrite-or-transform-text)
  - [A lista de modelos está vazia](#the-model-list-is-empty)
  - [O resultado é muito lento ou muito caro](#the-result-is-too-slow-or-too-expensive)
  - [A interface está no idioma errado](#the-interface-is-in-the-wrong-language)
  - [O texto é muito pequeno ou difícil de ler](#the-text-is-too-small-or-hard-to-read)
  - [Os gráficos do painel estão vazios](#dashboard-charts-are-empty)
  - [O custo mostra "não disponível" ou parece incorreto](#cost-shows-not-available-or-seems-wrong)
  - [O custo total não corresponde à minha fatura do provedor](#total-cost-does-not-match-my-provider-bill)
  - [A página Histórico está ausente na barra lateral](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicativo web: redirecionado para a página de login inesperadamente](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Administração web: esqueci ou perdi a senha](#web-admin-forgot-or-lost-a-password)
  - [O painel não mostra dados de outros usuários (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Eu alterei um prompt e perdi as edições](#i-changed-a-prompt-and-lost-the-edits)
- [Dicas rápidas](#quick-tips)
- [Aviso legal](#disclaimer)
- [Licença](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Antes de começar

Para usar o Transrewrt, você precisa de acesso a pelo menos um provedor de IA. Os provedores suportados são: [OpenRouter](https://openrouter.ai) (que agrega muitos modelos), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e [Ollama](https://ollama.com) para modelos locais.

Você não precisa selecionar um modelo pago para começar. Assim que você adicionar sua chave de API OpenRouter, o aplicativo habilita automaticamente uma opção **gratuita** OpenRouter embutida. Isso permite que você comece a traduzir, reescrever e transformar texto imediatamente. Alternativamente, você também pode obter uma chave de API gratuita da Cerebras, Google, Groq ou Mistral AI.

Em linguagem simples:

- Um **modelo** é o motor de IA que faz o trabalho. Os modelos são listados com um **prefixo de provedor** (por exemplo `openrouter/…`, `openai/…`, `ollama/…`).
- Uma **chave de API** (ou, para Ollama, uma **URL base**) é como o aplicativo alcança esse provedor.

Se estiver a utilizar a **aplicação de ambiente de trabalho**, adicione chaves em [**Definições** > **Configuração da API**](#api-config) para cada provedor que utilizar. Para utilização exclusiva do OpenRouter, consulte [Como obter uma chave de API](#how-to-get-an-api-key-desktop-app) abaixo. Se não quiser utilizar uma chave de API, pode instalar o Ollama (a partir de [ollama.com](https://ollama.com)) e utilizar modelos locais em vez disso, como `translategemma:4b`.

Se estiver a utilizar a **versão web**, o proprietário do servidor configura os provedores com variáveis de ambiente, pelo que não pode introduzir chaves de API diretamente na aplicação.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Como obter uma chave de API gratuita do OpenRouter (aplicação de ambiente de trabalho)

Se estiver a utilizar a aplicação de ambiente de trabalho, siga estes passos:

1. Acesse [OpenRouter](https://openrouter.ai) no seu navegador web.
2. Crie uma conta ou faça login.
3. Abra a página [Chaves](https://openrouter.ai/keys).
4. Clique no botão para criar uma nova chave de API.
5. Dê um nome à chave para que você possa reconhecê-la posteriormente.
6. Copie a nova chave de API.
7. Volte ao Transrewrt e abra **Configurações** > **Configuração de API**.
8. Cole a chave em **Chave de API OpenRouter** (em **Configurações** > **Configuração de API**).
9. Clique em **Testar chave OpenRouter** para garantir que ela funcione.

<br/><br/>

<a id="getting-started"></a>
## Primeiros passos

Se esta é a sua primeira vez a utilizar o Transrewrt, siga esta ordem:

1. Abra o aplicativo.
2. Escolha seu **idioma da interface** no ícone do globo, se necessário.
3. Se estiver usando o **aplicativo desktop**, abra [**Configurações** > **Configuração de API**](#api-config), adicione uma chave de API para pelo menos um provedor (por exemplo, OpenRouter) e clique em **Testar** para verificar se está funcionando.
4. Abra [**Configurações** > **Modelos**](#models) e adicione um ou mais modelos a **Modelos Selecionados**.
5. Abra [**Configurações** > **Idiomas**](#languages) e escolha seus **Idiomas Principais**, se quiser que os idiomas mais usados apareçam primeiro.
6. Vá para **Traduzir** e execute uma tradução simples para confirmar que tudo está funcionando.
7. Depois que funcionar, experimente **Reescrever** e depois **Transformar**.

Esta ordem é importante. Evita o problema mais comum no primeiro uso: tentar executar uma tarefa antes da aplicação ter uma ligação de API funcional ou um modelo selecionado.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Partes principais da janela

A aplicação está dividida em três áreas principais:

- A **barra lateral** à esquerda.
- A **barra de ferramentas** no topo.
- A **área de trabalho** no centro.

<br/>

<a id="sidebar"></a>
### Barra lateral

Utilize a barra lateral para navegar na aplicação. Pode recolher a barra lateral para ganhar mais espaço, clicando no ícone ao lado do logótipo da aplicação.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/pt/sidebar.png" alt="Barra Lateral da Aplicação" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Traduzir</strong> abre a área de trabalho de tradução.</li><br/>
        <li><strong>Reescrita</strong> abre a área de trabalho de reescrita.</li><br/>
        <li><strong>Transformação</strong> abre a área de trabalho de prompt personalizado.</li><br/>
        <li><strong>Painel</strong> mostra informações de utilização e custo.</li><br/>
        <li><strong>Definições</strong> abre o painel de definições.</li><br/>
        <li><strong>Histórico</strong> mostra o histórico de utilização com o texto de entrada e saída</li><br/>
        <li><strong>Usuário</strong> mostra o nome de usuário do utilizador com sessão iniciada (apenas web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Barra de ferramentas

A barra de ferramentas altera-se ligeiramente dependendo de onde estiver na aplicação.

- À esquerda, mostra o nome da página atual.
- À direita, mostra o **seletor de modelos** e o controlo do **Idioma da interface**.

O **seletor de modelos** permite-lhe escolher qual motor de IA utilizar para a tarefa atual.

![Model selector](../images/screenshots/pt/model-selector.png)

Alguns modelos gratuitos podem não estar sempre disponíveis — por vezes estão offline ou têm um limite de utilização. Se isto acontecer, a aplicação removerá automaticamente esse modelo da sua lista disponível. Para controlar quais modelos aparecem, vá a [**Definições** > **Modelos**](#models) e edite a sua lista de modelos. 
Também pode abrir as definições do modelo diretamente clicando no ícone do provedor à esquerda do nome do modelo na barra de ferramentas.

<br/>

O **ícone do globo + código de idioma** altera o idioma da interface do aplicativo, como menus e botões. Ele **não** altera os idiomas de tradução usados em **Traduzir**.

![Interface language selector](../images/screenshots/pt/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Painéis de entrada e saída

A maioria dos espaços de trabalho usa um painel de **Entrada** à esquerda e um painel de **Saída** à direita.

Cada painel também mostra:

| **Entrada**                                                          | **Saída**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Contagem de caracteres <br/>- Contagem de palavras <br/>- Contagem de parágrafos   <br/> | - Quanto tempo a tarefa levou<br/>- **TPS** (fichas por segundo)<br/>- Contagens de caracteres, palavras e parágrafos<br/>- O modelo usado |

Se você está se perguntando sobre os termos técnicos:

- **Ficha** significa um pequeno pedaço de texto. Você pode pensar nisso como parte de uma palavra ou uma palavra curta.
- **TPS** significa quantos desses pedaços de texto o modelo processou a cada segundo.

<br/>

Você também pode monitorar o custo de cada operação (se disponível) e o custo total, habilitando a opção `Show cost information on the actions` em [**Definições** > **Definições Gerais**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Traduzir

Use **Traduzir** quando quiser converter texto de um idioma para outro.

![Translate workspace](../images/screenshots/pt/translate.png)

<br/>

<a id="translate-text"></a>
### Traduzir texto

1. Abra **Traduzir**.
2. Escolha um idioma em **De**.
3. Escolha um idioma em **Para**.
4. Escolha um modelo na barra de ferramentas.
5. Digite ou cole o texto em **Entrada**.
6. Clique em **Traduzir**.
7. Leia o resultado em **Saída**.
8. Use o botão de copiar se quiser copiar o resultado.

<br/>

<a id="language-selection"></a>
### Seleção de idioma

- **De** pode ser um idioma específico ou **Detetar Idioma**.
- **Para** é o idioma em que você deseja o resultado.

Os seus **Idiomas principais** selecionados aparecem no topo da lista. Você pode definir esses em [**Definições** > **Idiomas**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Definições de tradução úteis

Em [**Definições** > **Definições Gerais**](#general-settings), você pode alterar como a tradução se comporta:

- **Auto-traduzir ao colar** executa uma tradução assim que você cola um texto.
- **Copiar resultado automaticamente para a área de transferência** copia o resultado automaticamente após uma execução bem-sucedida.
- **Tradução em tempo real (enquanto digita)** executa traduções enquanto você digita.
- **Tempo limite (ms)** controla por quanto tempo o aplicativo aguarda antes de executar uma tradução em tempo real.
- **Enter** controla o que acontece quando você pressiona `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Reescrita

Use **Reescrita** quando quiser melhorar a redação sem alterar o significado principal.

![Rewrite workspace](../images/screenshots/pt/rewrite.png)

Isto é útil para:

- corrigir ortografia e gramática (**Verificar ortografia e gramática**)
- tornar o texto mais claro (**Melhorar clareza**)
- várias reformulações distintas em uma única execução (**Versões alternativas**)
- tornar o texto mais formal ou mais informal (**Formal** / **Informal**)
- encurtar ou expandir texto (**Encurtar** / **Expandir**)
- tornar o texto mais técnico (**Tornar técnico**)

<br/>

> 💡 **DICA**<br/>
> Quando utilizar o modo "**Verificar Ortografia e Gramática**", um interruptor **Mostrar alterações** aparece no painel de saída (ao lado de **Copiar**).
> Ative ou desative para mostrar ou ocultar as correções específicas aplicadas ao seu texto.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Transformação

Utilize **Transformação** quando quiser que a IA siga um conjunto personalizado de instruções.

![Transform workspace](../images/screenshots/pt/transform.png)

Esta é a área mais flexível da aplicação. Pode utilizá-la para tarefas como:

- resumir anotações
- transformar texto informal em um e-mail refinado
- extrair pontos principais
- converter texto em um formato específico
- qualquer outra atividade personalizada com o texto de entrada

<br/>

<a id="run-an-existing-prompt"></a>
### Executar um prompt existente

1. Abra **Transformar**.
2. Escolha um prompt na lista de prompts.
3. Se aparecer uma caixa de idioma **Destino**, escolha um idioma, se desejar.
4. Digite ou cole o texto em **Entrada**.
5. Clique em **Transformar**.
6. Leia o resultado em **Saída**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Se ainda não tiver prompts

Se a sua lista de prompts estiver vazia, clique em **Carregar prompts de exemplo** na área de trabalho de Transformação. O mesmo controlo está sempre disponível em [**Definições** > **Prompts de transformação**](#transform-prompts) na linha de exportação/importação. Ambos adicionam exemplos integrados para que possa começar rapidamente.

<br/>

> ℹ️ **NOTA**<br/>
> Os prompts de exemplo são fornecidos em inglês. Após carregá-los, pode editar um prompt e usar **Traduzir prompt** para traduzi-lo para seu idioma.

<br/>

<a id="create-a-prompt-quickly"></a>
### Criar um prompt rapidamente

A forma mais rápida de criar um prompt é:

1. Clique em **Novo prompt**.
2. Clique em **Gerar prompt**.
3. Descreva o que você deseja que o prompt faça.
4. Escolha um modelo.
5. Deixe o aplicativo criar um rascunho para você.
6. Revise o rascunho e clique em **Salvar**.

![Generate prompt](../images/screenshots/pt/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Editar um prompt

Quando criar ou editar um prompt, o editor aparece à esquerda e uma área de teste aparece à direita.

![Transform prompt editor](../images/screenshots/pt/transform-prompt-edit.png)

Os campos principais são:

- **Nome do prompt**: o nome exibido na lista de prompts.
- **Instruções do prompt (opcional)**: uma dica curta exibida ao usuário ao executar o prompt.
- **Função do modelo**: a função geral atribuída à IA, como 'Você é um assistente útil.'
- **Instruções do modelo (uma por linha)**: as regras específicas que você deseja que a IA siga.
- **Descrição da saída**: uma palavra curta que descreve o resultado, como 'resumo' ou 'reescrita'.
- **Temperatura (0,0 → 1,0)**: como o modelo se comportará; veja abaixo.
- **Solicitar idioma de destino**: adiciona um seletor de idioma de destino ao executar o prompt.

Se o termo técnico **Temperatura** for novo para si, pense nele da seguinte forma:

- Uma **temperatura mais baixa** oferece resultados mais estáveis e previsíveis.
- Uma **temperatura mais alta** oferece mais variedade e criatividade.

Você também pode usar:

- **`Generate prompt`** para criar um novo rascunho a partir de uma descrição simples
- **`Improve prompt`** para refinar um prompt existente
- **`Translate prompt`** para traduzir os campos do prompt

<br/>

> ⚠️ **AVISO**<br/>
> Clique em **`Save`** antes de clicar em **`Back to Run`**. Se voltar sem salvar, suas alterações serão perdidas.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Teste um prompt antes de usá-lo

O painel de teste à direita permite experimentar seu prompt com texto de exemplo antes de usá-lo no trabalho diário.

Isso é útil quando:

- você está criando um novo prompt
- você está comparando duas versões de um prompt
- você deseja verificar o tom, comprimento ou formato do resultado

<br/>

> ℹ️ **NOTA**<br/>
> Você pode exportar e importar prompts salvos em [**Definições** > **Prompts de transformação**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Painel

Use o **Painel** para ver o quanto você está utilizando o aplicativo e qual o custo (para modelos pagos).

![Dashboard summary](../images/screenshots/pt/dashboard-summary.png)

<br/>

> ℹ️ **NOTA**<br/>
> Se você usar apenas modelos **grátis**, os valores de **custo** podem ser zero e os resumos focados em custo podem parecer vazios. Em **Resumo**, **Uso ao longo do tempo** e **Uso por modelo** ainda mostram **números de chamadas** (traduzir, reescrever e transformar) quando houver atividade no período selecionado.

<br/>

<a id="filter-the-data"></a>
### Filtrar os dados

Use os botões de filtro na parte superior para alterar o intervalo de tempo.

![Dashboard filters](../images/screenshots/pt/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> O filtro **Usuário** só é visível para administradores na versão web. Utilizadores regulares não verão este filtro, e este não está disponível na aplicação de desktop.

<br/>

<a id="dashboard-tabs"></a>
### Abas do Painel

- **Resumo** fornece uma visão geral do uso e custo. Inclui **Uso ao longo do tempo** (**contagem acumulada de chamadas** diárias empilhadas para traduzir, reescrever e transformar) e **Uso por modelo** (**chamadas totais por modelo**, incluindo transformar).
- **Por uso** detalha a atividade por idioma de tradução, modo de reescrita e prompt de transformação.
- **Por modelo** mostra quais modelos você usou e quanto custaram.
- **Por dia** mostra os totais diários.
- **Todas as chamadas** mostra o histórico completo de chamadas e permite exportá-lo.

<br/>

<a id="export-data"></a>
### Exportar dados

As tabelas do painel podem exportar dados nos formatos:

- **JSON**
- **CSV**
- **XLSX**

Isto é útil se quiser rever a atividade fora da aplicação ou partilhar um relatório.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Eliminar registos armazenados para um modelo

Em **Por Modelo** ou **Todas as Chamadas**, pode remover os registos armazenados para um modelo clicando no ícone do "caixote do lixo".

> ⚠️ **AVISO**<br/>
> A eliminação de registos armazenados não pode ser desfeita. Utilize apenas se tiver a certeza de que já não precisa desse histórico.

Para eliminar todos os dados ou remover registos com base na sua idade, vá para [**Definições** > **Rastreio de Custos**](#cost-tracking). Lá encontrará opções para eliminar todos os dados armazenados ou apenas dados mais antigos do que uma determinada data.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Histórico

Clique em **Histórico** para ver o histórico das suas ações dentro do **Transrewrt**, incluindo a entrada e saída de cada operação.

![History page](../images/screenshots/pt/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrar os dados

**Histórico** utiliza os mesmos filtros da página **Painel**. Utilize-os para selecionar o intervalo de tempo.

![Dashboard filters](../images/screenshots/pt/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> O filtro **Usuário** só é visível para administradores na versão web. Utilizadores regulares não verão este filtro, e este não está disponível na aplicação de desktop.

<br/>

<a id="export-history-data"></a>
### Exportar dados do histórico

A página de histórico pode exportar os dados filtrados em:

- **JSON**
- **CSV**
- **XLSX**

Isto é útil se quiser rever a atividade fora da aplicação ou partilhar um relatório.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="settings"></a>
## Definições

Abra **Definições** na barra lateral para personalizar o comportamento da aplicação.

Os separadores disponíveis dependem da plataforma e do seu papel:

| Guia              | Desktop | Web (admin) | Web (usuário comum) |
  |-------------------|:-------:|:-----------:|:-------------------:|
  | Configurações gerais |   sim   |     sim     |        sim          |
  | Modelos           |   sim   |     sim     |        sim          |
  | Idiomas           |   sim   |     sim     |        sim          |
  | Acompanhamento de custo |   sim   |     sim     |         -           |
  | Prompts de transformação |   sim   |     sim     |        sim          |
  | Usuários          |    -    |     sim     |         -           |
  | Configuração da API |   sim   |     sim     |         -          |
  | Sobre               |   sim   |     sim     |        sim         |

<br/>

> ℹ️ **NOTA**<br/>
> Na versão web, cada utilizador tem a sua própria configuração. Definições como modelos selecionados, idiomas, opções gerais e prompts de transformação são armazenadas por utilizador. As alterações que efetuar não afetam outros utilizadores.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Definições gerais

Use as **Definições Gerais** para controlar o comportamento de escrita, se os detalhes de execução são armazenados para o **Histórico**, e a aparência.

**Comportamento**

- **Comportamento para ENTER** escolhe se `Enter` executa a tarefa ou insere uma nova linha.
- **Auto-traduzir ao colar** inicia a tradução assim que você colar um texto.
- **Copiar resultado automaticamente para a área de transferência** copia resultados bem-sucedidos automaticamente.
- **Tradução em tempo real (enquanto digita)** traduz enquanto você digita.
- **Tempo limite (ms)** define o tempo de espera para a tradução em tempo real.

**Histórico**

- **Manter o histórico de execução** controla se cada tradução, reescrita e transformação armazena **texto de entrada e resultado** para a vista da barra lateral [**Histórico**](#history). Desligá-lo pede confirmação; se confirmar, o texto do histórico armazenado é removido da base de dados.
- **Eliminar dados do histórico** permite remover o texto armazenado por idade (por exemplo, mais antigo que alguns meses, ou **todos os dados (limpar)**) usando **Eliminar dados**. Isso afeta apenas o texto de execução guardado para a vista **Histórico**; **não** elimina os totais de custo ou uso. Para remover ou aparar dados de **custo**, use [**Definições** > **Rastreio de Custos**](#cost-tracking).

**Aparência**

- **Mostrar informações de custo nas ações** controla a exibição do custo por operação (se disponível) e do custo total nos painéis de saída de Traduzir, Reescrever e Transformar.
- **Dígitos fracionários do custo** altera a forma como os decimais do custo são exibidos.
- **Apenas web:** **mostrar margem ao redor do aplicativo** adiciona espaço extra ao redor da interface.
- **Família da fonte** altera a fonte de escrita nos painéis de texto.
- **Tamanho** altera o tamanho da fonte.

**Cópia de Segurança da Configuração**

- **Incluir dados de uso no backup** - quando ativado, o ZIP também contém histórico de execuções e dados de chamadas à API. 
- **Fazer backup da configuração** - cria um único arquivo ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` em UTC por padrão) com `config.json`, `state.json`, chave de criptografia opcional, usuários, preferências, prompts personalizados e dados de uso, se você tiver optado por incluí-los. Após um backup bem-sucedido, a confirmação exibe o nome do arquivo salvo.
- **Restaurar a partir do backup** - abre primeiro um **diálogo de confirmação**. Escolha o arquivo ZIP do backup dentro do diálogo (**Procurar** / seletor de arquivos ou arrastar e soltar, onde suportado), depois revise as opções:
  - **Restaurar os dados de uso** - importa o uso/histórico do ZIP quando ele foi feito com os dados de uso incluídos; desative se você quiser apenas configurações e prompts.
  - **Limpar os dados de uso antigos antes da restauração** - remove o uso/histórico existente nesta instalação antes de aplicar o backup (opcional; use quando desejar uma substituição limpa).

As cópias de segurança criadas na versão web ou de desktop podem ser restauradas na outra. Ao restaurar uma cópia de segurança de desktop na versão web, os dados serão restaurados para o utilizador administrador.

<br/>

<a id="models"></a>
### Modelos

Use **Definições** > **Modelos** para escolher quais modelos aparecem na barra de ferramentas.

![Settings Models tab](../images/screenshots/pt/settings-models.png)

A página tem duas listas:

- **Modelos Disponíveis** à esquerda
- **Modelos Selecionados** à direita

Os controlos úteis incluem:

- **Pesquisar modelos...** para encontrar um modelo pelo nome
- Chips de **Provedor** para restringir a lista a um mecanismo (OpenRouter, OpenAI, Ollama, …)
- **Apenas gratuitos** para mostrar somente modelos gratuitos
- **Atualizar** para recarregar a lista
- **Expandir tudo** e **Recolher tudo** quando você estiver ordenando por provedor

Os ids dos modelos incluem o prefixo do provedor (por exemplo `openrouter/…` vs `openai/…`). Distintivos como **OpenAI (OpenRouter)** vs **OpenAI (direto)** mostram como o tráfego é encaminhado.

> ℹ️ **NOTA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) é um modelo de roteador, não um modelo de chat geral: a sua resposta é JSON que descreve corpos de pedidos da API OpenRouter (por exemplo, um array `requests` com `model` e `messages`). Se o usar para **Traduzir**, **Reescrita** ou **Transformação**, o painel de resultado mostrará esse JSON em vez de texto finalizado. Escolha um modelo de texto normal para essas tarefas. Veja a [página do modelo Body Builder](https://openrouter.ai/openrouter/bodybuilder) no OpenRouter.

Ações:

- Para adicionar um modelo, clique em **Adicionar** ou em qualquer lugar na entrada.

- Para remover um modelo, clique em **X** ao lado dele em **Modelos Selecionados** ou em **Selecionado** na entrada em Modelos Disponíveis.

- Para limpar a lista, clique em **Desselecionar Tudo**. O modelo gratuito necessário permanecerá na lista.

<br/>

> ℹ️ **NOTA**<br/>
> Se você não quiser adicionar créditos ao OpenRouter imediatamente, comece ativando **Apenas Gratuitos** e escolhendo os modelos gratuitos (sem necessidade de cartão de crédito). Você também pode usar Ollama para executar modelos localmente sem nenhuma chave API.

<br/>

<a id="languages"></a>
### Idiomas

Use **Definições** > **Idiomas** para organizar as listas de idiomas usadas no aplicativo.

- **Idiomas principais** estão fixados perto do topo das listas de idiomas em **Traduzir** e **Transformação**.
- **Idioma Personalizado** permite que você adicione um idioma que não está na lista embutida.

Se você adicionar um idioma personalizado, ele aparecerá nos seletores de idioma ao lado das opções embutidas.

<br/>

<a id="cost-tracking"></a>
### Rastreio de Custos

Use **Definições** > **Rastreio de Custos** para gerenciar informações de custo.

- **Custo total** mostra o valor acumulado.
- **Copiar valor** copia o total para a área de transferência.
- **Redefinir custo** redefine o total armazenado para zero.
- **Sincronizar com o uso da chave de API** define o total para corresponder ao uso informado pela sua conta OpenRouter (apenas OpenRouter).
- **Uso da chave de API** mostra detalhes de uso do OpenRouter, se disponíveis.
- **Excluir dados de custo** remove todos os dados ou apenas entradas anteriores a uma data selecionada.

**Rastreio de Custos:** Quando você usa modelos do OpenRouter, o aplicativo mostra seu uso real e gastos com base nas informações de custo do OpenRouter. Para todos os outros provedores, o aplicativo estima os custos usando preços publicados pelo OpenRouter; se um preço não estiver disponível, a estimativa pode ser zero.

<br/>

> ℹ️ **NOTA**<br/>
>  **Todos os valores de custo são estimativas apenas para sua referência, não são declarações de cobrança oficiais.**

<br/>

> ⚠️ **AVISO**<br/>
> A exclusão de dados não pode ser desfeita. Antes de excluir, certifique-se de fazer backup dos seus dados ou exportá-los via [**Histórico**](#history) 
> ou [**Painel** > **Todas as Chamadas**](#dashboard-tabs), caso contrário, eles serão perdidos permanentemente. 
> Todo o histórico de entrada/saída relacionado a cada entrada de chamada da API também será excluído.

<br/>

<a id="transform-prompts"></a>
### Prompts de Transformação

Use **Definições** > **Prompts de Transformação** para gerenciar prompts em massa.

Você pode:

- revisar seus prompts salvos
- excluir prompts
- importar prompts de um arquivo
- exportar prompts para backup ou compartilhamento
- carregar prompts de exemplo para a lista de prompts

<br/>

<a id="users"></a>
### Utilizadores

Use **Utilizadores** para gerenciar contas de usuário na versão web. Você pode adicionar usuários, atualizar seus detalhes, redefinir senhas e eliminar contas.

<br/>

<a id="api-config"></a>
### Configuração da API

Os provedores suportados são: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e **Ollama** (modelos locais via uma URL base). Você só precisa configurar os provedores que utiliza.

**Aplicação web: apenas administrador**

As chaves API são configuradas através de variáveis de ambiente do sistema ou do Docker – não são introduzidas na interface web. Esta página mostra quais os provedores que têm uma chave configurada e permite testar cada um clicando no botão **`Test`**.

<br/>

> ℹ️ **NOTA**<br/>
> Para alterar uma chave API, atualize a variável de ambiente na sua configuração do sistema ou do Docker e reinicie o servidor ou o contentor.

> ℹ️ **NOTA**<br/>
> As **cópias de segurança da configuração** (consulte [**Definições Gerais** → Cópia de Segurança da Configuração](#general-settings)) podem incorporar chaves de provedor **resolvidas** dentro do ficheiro `config.json` do ZIP. A restauração desse ZIP **não** copia essas chaves de volta para o ficheiro de configuração persistido do servidor – as chaves ativas continuam a vir do ambiente e do estado do ficheiro existente, conforme descrito ali.

<br/>

**Aplicação de ambiente de trabalho**

Utilize **Configuração da API** para armazenar chaves API para cada provedor que utilizar. Para o Ollama, introduza a **URL base** em vez de uma chave API.

<br/>

> 💡 **Dica** <br/>
> Se não quiser utilizar uma chave API ou pagar por utilização, pode [descarregar o Ollama](https://ollama.com) e executar modelos (como `translategemma:4b`) localmente na sua máquina gratuitamente. Alternativamente, pode criar uma conta gratuita OpenRouter (sem necessidade de cartão de crédito) para utilizar os seus modelos gratuitos, ou obter uma chave API gratuita da Cerebras, Google, Groq ou Mistral AI.

<br/>

- Adicione apenas os provedores de que necessita. Em **Definições** > **Modelos**, cada ID de modelo começa com o provedor (por exemplo `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Para adicionar uma chave API, introduza o valor no campo de texto e clique em **`Save`**. Para substituir uma chave existente, clique em **`Edit`**. Para verificar se uma chave está a funcionar, clique em **`Test`**. Para a URL base do Ollama, clique sempre em **`Test`** para verificar a ligação.

<br/>

> ℹ️ **NOTA**<br/>
> Não pode ver o valor atual de uma chave API. Só pode substituí-la utilizando o botão **`Edit`**.
> As chaves API são armazenadas encriptadas na configuração.

<br/>

<a id="about"></a>
### Sobre

O separador **Sobre** mostra:

- o nome da aplicação
- o número da versão
- a data de compilação
- uma ligação ao repositório do projeto

<br/><br/>

<a id="common-issues"></a>
## Problemas comuns

Se algo não funcionar como esperado, verifique primeiro os seguintes pontos.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### A aplicação não traduz, reescreve ou transforma texto

Verifique se:

- selecionou um modelo na barra de ferramentas
- pelo menos um modelo está listado em [**Definições** > **Modelos**](#models)
- a sua configuração API está a funcionar

Se estiver a utilizar a aplicação de ambiente de trabalho:

1. Abra [**Definições** > **Configuração da API**](#api-config).
2. Verifique se pelo menos uma chave API está guardada.
3. Clique em **Testar** ao lado do provedor para confirmar que a chave está a funcionar.

<br/>

<a id="the-model-list-is-empty"></a>
### A lista de modelos está vazia

Abra [**Definições** > **Modelos**](#models) e clique em **Atualizar**.

Se necessário:

- procure um modelo
- ative **Apenas Gratuitos**
- adicione um ou mais modelos a **Modelos Selecionados**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### O resultado está muito lento ou muito caro

Tente uma ou mais das seguintes opções:

- escolha um modelo diferente
- use uma entrada mais curta
- desative **Tradução em tempo real (ao escrever)** em [**Definições** > **Definições Gerais**](#general-settings)
- use modelos gratuitos para tarefas simples (veja [Modelos](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### O idioma da interface está errado

Clique no ícone do globo na [barra de ferramentas](#toolbar) e escolha seu **Idioma da interface** preferido.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### O texto está muito pequeno ou difícil de ler

Abra [**Definições** > **Definições Gerais**](#general-settings) e altere:

- **Família de Fonte**
- **Tamanho**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Os gráficos do Painel estão vazios

Isso é normal se:

- você usa apenas **modelos gratuitos** e está olhando para os números de **custo** (eles podem ser zero); os gráficos de contagem de chamadas de **uso** em **Resumo** ainda precisam de dados do período selecionado
- o **filtro de tempo** selecionado não cobre o período em que as chamadas foram feitas - tente **Tudo** para verificar

Se os gráficos ainda estiverem vazios após selecionar **Tudo**, confirme se as chamadas aparecem no [**Histórico**](#history) ou na aba **Todas as Chamadas**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### O custo mostra "não disponível" ou parece errado

Quando você usa modelos através do **OpenRouter**, o aplicativo mostra seu gasto real reportado pelo OpenRouter.

Para **outros provedores** (OpenAI direto, Anthropic direto, etc.), o custo é estimado a partir dos dados de preços publicados pelo OpenRouter. Se nenhum preço correspondente for encontrado para um modelo, o custo aparecerá como **não disponível** e não será adicionado ao seu total acumulado.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### O custo total não corresponde à minha fatura do provedor

Todos os valores apresentados na aplicação são **estimativas apenas para referência**, não sendo declarações oficiais de faturação.

Para aproximar o total do seu gasto real no OpenRouter, abra [**Definições** > **Rastreio de Custos**](#cost-tracking) e clique em **Sincronizar com utilização da chave API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### A página Histórico está em falta na barra lateral

A opção **Manter o histórico de execução** pode estar desativada. Abra [**Definições** > **Definições Gerais**](#general-settings) e ative-a. Note que ativá-la não restaura dados de histórico previamente eliminados.

<br/>

<a id="web-app-session-expired"></a>
### Aplicação web: redirecionado para a página de início de sessão inesperadamente

A sua sessão pode ter expirado. Inicie sessão novamente. Se isto acontecer com frequência, verifique a configuração do servidor quanto às definições de duração da sessão.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Administração web: esqueceu ou perdeu uma palavra-passe

Isto aplica-se à **aplicação web auto-hospedada** (Docker), não à aplicação desktop (Electron).

- Se outro administrador ainda conseguir iniciar sessão, pode abrir [**Definições** > **Utilizadores**](#users), escolher a conta e definir uma **nova palavra-passe** ali.
- Se estiver **bloqueado** mas tiver **acesso shell** à máquina ou ao contentor, redefina a palavra-passe com a ferramenta fornecida com a imagem (substitua `transrewrt` se alterar o nome padrão, e coloque entre aspas a palavra-passe se contiver espaços ou caracteres especiais):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

O nome de usuário administrador padrão é `admin` se nunca tiver criado outras contas. Quando fornecer apenas um argumento, este será tratado como a nova palavra-passe para `admin`.

Se estiver a executar a partir de um **checkout da fonte** em vez do Docker, utilize:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

O script atualiza o registo do utilizador na base de dados SQLite (e pode criar o utilizador `admin` se este estiver em falta). Após a redefinição, inicie sessão com a nova palavra-passe.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### O Painel não mostra dados de outros utilizadores (web)

Apenas **administradores** podem ver dados de todos os utilizadores através do filtro **Usuário**. Utilizadores regulares veem apenas a sua própria atividade por design.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Alterei um prompt e perdi as edições

Ao editar um prompt, clique sempre em **Guardar** antes de clicar em **Voltar à Execução**.

<br/><br/>

<a id="quick-tips"></a>
## Dicas rápidas

- Comece com [**Traduzir**](#translate) para garantir que sua configuração está funcionando antes de passar para [**Reescrever**](#rewrite) ou [**Transformar**](#transform).
- Use [**Reescrever**](#rewrite) para melhorias cotidianas no texto.
- Use [**Transformar**](#transform) quando precisar de um fluxo de trabalho repetível para uma tarefa específica.
- Use [**Painel**](#dashboard) se quiser acompanhar o uso e o custo.
- Use [**Histórico**](#history) para revisar operações anteriores e seus textos completos de entrada/saída.
- Exporte seus prompts regularmente se estiver criando uma biblioteca de prompts que deseja manter segura (veja [Transformar Prompts](#transform-prompts)) ou se desejar compartilhá-los com outros.

<br/><br/>

<a id="disclaimer"></a>
## Aviso legal

Os nomes e ícones dos produtos pertencem aos respetivos proprietários e são utilizados apenas para fins de identificação. Este software não é afiliado nem endossado por nenhuma das marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licença

Direitos autorais © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
