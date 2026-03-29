---
translated_at: "2026-03-29T01:42:45.164Z"
source_hash: "8981b8db163153bfc443046fa20a49b33c92b9feebdee302f6ef60852f273472"
source_mtime: "2026-03-29T01:41:58.368Z"
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>

# Guia do Usuário

<br/>

<a id="introduction"></a>

## Introdução

O Transrewrt ajuda você a trabalhar com texto de três maneiras principais:

- **Traduzir** - converter texto de um idioma para outro.
- **Reescrever** - reescrever o texto em um estilo diferente, como mais claro, mais curto ou mais formal.
- **Transformar** - processar texto usando instruções personalizadas de IA chamadas de *prompts*.

<br/>

Este guia explica como usar o aplicativo após ele estar instalado e em execução. Para as etapas de instalação, consulte o arquivo **[README](README.pt-BR.md)** principal.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> O Transrewrt está disponível como um aplicativo desktop para Windows e Linux, e como um aplicativo web autohospedado. Este guia foca no uso diário do aplicativo. Quando algo se aplica apenas a uma versão, isso é claramente indicado.

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](translated-docs/US

<small id="lang-list">· [العربية](USER-GUIDE.ar.md) · [Bosanski](USER-GUIDE.bs.md) · [Български](USER-GUIDE.bg.md) · [Čeština](USER-GUIDE.cs.md) · [Dansk](USER-GUIDE.da.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [English](USER-GUIDE.pt-BR.md) · [Español - Latinoamérica](USER-GUIDE.es-419.md) · [Español - España](USER-GUIDE.es-ES.md) · [Eesti](USER-GUIDE.et.md) · [Suomi](USER-GUIDE.fi.md) · [Français](USER-GUIDE.fr.md) · [עברית](USER-GUIDE.he.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Indonesia](USER-GUIDE.id.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Қазақ тілі](USER-GUIDE.kk.md) · [한국어](USER-GUIDE.ko.md) · [Nederlands](USER-GUIDE.nl.md) · [Norsk bokmål](USER-GUIDE.no.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Svenska](USER-GUIDE.sv.md) · [Kiswahili](USER-GUIDE.sw.md) · [தமிழ்](USER-GUIDE.ta.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Observação sobre traduções da interface e da documentação:** Todos os idiomas da interface, exceto o inglês (UK) original, 
> foram traduzidos usando modelos de IA; a redação pode ser imprecisa ou conter erros.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Sumário**

- [Antes de começar](#before-you-start)
  - [Como obter uma chave de API gratuita do OpenRouter (aplicativo para desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Primeiros passos](#getting-started)
- [Partes principais da janela](#main-parts-of-the-window)
  - [Barra lateral](#sidebar)
  - [Barra de ferramentas](#toolbar)
  - [Painéis de entrada e saída](#input-and-output-panels)
- [Traduzir](#translate)
  - [Traduzir texto](#translate-text)
  - [Seleção de idioma](#language-selection)
  - [Configurações úteis para tradução](#helpful-translation-settings)
- [Reescrever](#rewrite)
- [Transformar](#transform)
  - [Executar um prompt existente](#run-an-existing-prompt)
  - [Se você ainda não tem nenhum prompt](#if-you-have-no-prompts-yet)
  - [Criar um prompt rapidamente](#create-a-prompt-quickly)
  - [Editar um prompt](#edit-a-prompt)
  - [Testar um prompt antes de usá-lo](#test-a-prompt-before-using-it)
- [Painel](#dashboard)
  - [Filtrar os dados](#filter-the-data)
  - [Abas do painel](#dashboard-tabs)
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
  - [Transformar prompts](#transform-prompts)
  - [Usuários](#users)
  - [Configuração de API](#api-config)
  - [Sobre](#about)
- [Problemas comuns](#common-issues)
  - [O aplicativo não traduz, reescreve ou transforma o texto](#the-app-will-not-translate-rewrite-or-transform-text)
  - [A lista de modelos está vazia](#the-model-list-is-empty)
  - [O resultado é muito lento ou muito caro](#the-result-is-too-slow-or-too-expensive)
  - [A interface está no idioma errado](#the-interface-is-in-the-wrong-language)
  - [O texto é muito pequeno ou difícil de ler](#the-text-is-too-small-or-hard-to-read)
  - [Os gráficos do painel estão vazios](#dashboard-charts-are-empty)

- [Custo mostra "não disponível" ou parece incorreto](#cost-shows-not-available-or-seems-wrong)
  - [Custo total não corresponde à minha fatura do provedor](#total-cost-does-not-match-my-provider-bill)
  - [A página Histórico está ausente na barra lateral](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicativo web: redirecionado para a página de login inesperadamente](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Administrador web: esqueceu ou perdeu uma senha](#web-admin-forgot-or-lost-a-password)
  - [O painel não exibe dados de outros usuários (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Eu alterei um prompt e perdi as edições](#i-changed-a-prompt-and-lost-the-edits)
- [Dicas rápidas](#quick-tips)
- [Aviso](#disclaimer)
- [Licença](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Antes de começar

Para usar o Transrewrt, você precisa de acesso a pelo menos um provedor de IA. Os provedores suportados são: [OpenRouter](https://openrouter.ai) (que reúne diversos modelos), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e [Ollama](https://ollama.com) para modelos locais.

Você não precisa escolher um modelo pago para começar. Assim que você adicionar sua chave de API do OpenRouter, o aplicativo ativa automaticamente uma opção **gratuita** integrada do OpenRouter. Isso permite que você comece a traduzir, reescrever e transformar textos imediatamente. Alternativamente, você também pode obter uma chave de API gratuita da Cerebras, Google, Groq ou Mistral AI.

Em termos simples:

- Um **modelo** é o mecanismo de IA que realiza o trabalho. Os modelos são listados com um **prefixo do provedor** (por exemplo, `openrouter/…`, `openai/…`, `ollama/…`).
- Uma **chave de API** (ou, no caso do Ollama, uma **URL base**) é como o aplicativo se conecta ao provedor.

Se você estiver usando o **aplicativo desktop**, adicione chaves em [**Configurações** > **Configuração da API**](#api-config) para cada provedor que utilizar. Para uso exclusivo do OpenRouter, consulte [Como obter uma chave de API](#how-to-get-an-api-key-desktop-app) abaixo. Se você não deseja usar uma chave de API, pode instalar o Ollama (em [ollama.com](https://ollama.com)) e usar modelos locais, como `translategemma:4b`.

Se você estiver usando a **versão web**, o proprietário do servidor configura os provedores por meio de variáveis de ambiente, portanto, você não poderá inserir chaves de API diretamente no aplicativo.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### Como obter uma chave de API gratuita do OpenRouter (aplicativo desktop)

Se você estiver usando o aplicativo desktop, siga estes passos:

1. Acesse [OpenRouter](https://openrouter.ai) no seu navegador.
2. Crie uma conta ou faça login.
3. Abra a página [Keys](https://openrouter.ai/keys).
4. Clique no botão para criar uma nova chave de API.
5. Dê um nome à chave para que você possa reconhecê-la posteriormente.
6. Copie a nova chave de API.
7. Volte ao Transrewrt e abra **Configurações** > **Configuração da API**.
8. Cole a chave em **Chave da API OpenRouter** (em **Configurações** > **Configuração da API**).
9. Clique em **Testar chave do OpenRouter** para verificar se está funcionando.

<br/><br/>

<a id="getting-started"></a>

## Primeiros passos

Se esta for a sua primeira vez usando o Transrewrt, siga esta ordem:

1. Abra o aplicativo.
2. Escolha o seu **idioma da interface** no ícone do globo, se necessário.
3. Se estiver usando o **aplicativo para desktop**, abra [**Configurações** > **Configuração de API**](#api-config), adicione uma chave de API para pelo menos um provedor (por exemplo, OpenRouter) e clique em **Testar** para verificar se está funcionando.
4. Abra [**Configurações** > **Modelos**](#models) e adicione um ou mais modelos aos **Modelos Selecionados**.
5. Abra [**Configurações** > **Idiomas**](#languages) e escolha os seus **Idiomas principais**, caso deseje que os idiomas mais usados apareçam primeiro.
6. Vá até **Traduzir** e execute uma tradução simples para confirmar se tudo está funcionando.
7. Quando funcionar, experimente **Reescrever** e depois **Transformar**.

A ordem é importante. Ela evita o problema mais comum no primeiro uso: tentar executar uma tarefa antes que o aplicativo tenha uma conexão de API funcionando ou um modelo selecionado.

<br/><br/>

<a id="main-parts-of-the-window"></a>

## Partes principais da janela

O aplicativo é dividido em três áreas principais:

- A **barra lateral** à esquerda.
- A **barra de ferramentas** na parte superior.
- A **área de trabalho** no centro.

<br/>

<a id="sidebar"></a>

### Barra lateral

Use a barra lateral para navegar pelo aplicativo. Você pode recolher a barra lateral para ganhar mais espaço, clicando no ícone ao lado do logotipo do aplicativo.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/pt-BR/sidebar.png" alt="Barra Lateral do Aplicativo" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Traduzir</strong> abre o ambiente de trabalho de tradução.</li><br/>
        <li><strong>Reescrever</strong> abre o ambiente de trabalho de reescrita.</li><br/>
        <li><strong>Transformar</strong> abre o ambiente de trabalho de prompt personalizado.</li><br/>
        <li><strong>Painel</strong> exibe informações de uso e custo.</li><br/>
        <li><strong>Configurações</strong> abre o painel de configurações.</li><br/>
        <li><strong>Histórico</strong> mostra o histórico de uso com os textos de entrada e saída.</li><br/>
        <li><strong>Usuário</strong> mostra o nome do usuário logado (apenas na versão web).</li>
      </ul>

</td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barra de Ferramentas

A barra de ferramentas muda ligeiramente dependendo de onde você está no aplicativo.

- À esquerda, ela mostra o nome da página atual.
- À direita, mostra o **seletor de modelo** e o controle de **Idioma da interface**.

O **seletor de modelo** permite escolher qual mecanismo de IA usar para a tarefa atual.

  ![Selet在玩家中 modelo](../images/screenshots/pt-BR/model-selector.png)

Alguns modelos gratuitos podem não estar sempre disponíveis — às vezes estão fora do ar ou têm limite de uso. Se isso acontecer, o aplicativo removerá automaticamente esse modelo da sua lista de disponíveis. Para controlar quais modelos aparecem, vá até [**Configurações** > **Modelos**](#models) e edite sua lista de modelos.
Você também pode abrir as configurações do modelo diretamente clicando no ícone do provedor à esquerda do nome do modelo na barra de ferramentas.

<br/>

O **ícone de globo + código de idioma** altera o idioma da interface do aplicativo, como menus e botões. Ele **não** altera os idiomas de tradução usados na função **Traduzir**.

![Seletor de idioma da interface](../images/screenshots/pt-BR/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Painéis de entrada e saída

A maioria dos espaços de trabalho utiliza um painel **Entrada** no lado esquerdo e um pain combustível de **Saída** no lado direito.

Cada painel também exibe:

| **Entrada**                                                        | **Saída**                                                                                                               |
|--------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| - Contagem de caracteres <br/>- Contagem de palavras <br/>- Contagem de parágrafos | - Quanto tempo a tarefa levou<br/>- **TPS** (tokens por segundo)<br/>- Contagem de caracteres, palavras e parágrafos<br/>- O modelo utilizado |

<br/>

Se você estiver se perguntando sobre os termos técnicos:

- **Token** significa um pequeno trecho de texto. Você pode pensar nisso como parte de uma palavra ou uma palavra curta.
- **TPS** indica quantos desses trechos de texto o modelo processou a cada segundo.

Você também pode monitorar o custo de cada operação (se disponível) e o custo total, ativando a opção `Mostrar informações de custo nas ações` em [**Configurações** > **Configurações gerais**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>

## Traduzir

Use **Traduzir** quando quiser converter um texto de um idioma para outro.

![Área de trabalho de tradução](../images/screenshots/pt-BR/translate.png)

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
8. Use o botão de cópia se desejar copiar o resultado.

<br/>

<a id="language-selection"></a>

### Seleção de idioma

- **De** pode ser um idioma específico ou **Detectar idioma**.
- **Para** é o idioma que você deseja para o resultado.

Seus **Idiomas principais** selecionados aparecem no topo da lista. Você pode configurá-los em [**Configurações** > **Idiomas**](#languages).

<br/>

<a id="helpful-translation-settings"></a>

### Configurações úteis para tradução

Em [**Configurações** > **Configurações Gerais**](#general-settings), você pode alterar o comportamento da tradução:

- **Traduzir automaticamente ao colar** realiza uma tradução assim que você colar um texto.
- **Copiar resultado automaticamente para a área de transferência** copia o resultado automaticamente após uma execução bem-sucedida.
- **Tradução em tempo real (enquanto digita)** realiza traduções enquanto você digita.
- **Tempo limite (ms)** define por quanto tempo o aplicativo espera antes de executar uma tradução em tempo real.
- **Enter** define o que acontece quando você pressiona `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Reescrever

Use o **Reescrever** quando desejar melhorar a redação sem alterar o significado principal.

![Área de trabalho do Reescrever](../images/screenshots/pt-BR/rewrite.png)

Isso é útil para:

- corrigir ortografia e gramática (**Verificar ortografia e gramática**)
- tornar o texto mais claro (**Melhorar a clareza**)
- obter diversas reformulações distintas em uma única execução (**Versões alternativas**)
- tornar o texto mais formal ou mais informal (**Formal** / **Informal**)
- encurtar ou expandir o texto (**Encurtar** / **Expandir**)
- tornar o texto mais técnico (**Tornar técnico**)

<br/>

> 💡 **DICA**<br/>
> Quando você usa o modo "**Verificar ortografia e gramática**", um interruptor **Mostrar alterações** aparece no painel de saída (ao lado de **Copiar**).
> Ative ou desative para mostrar ou ocultar as correções específicas aplicadas ao seu texto.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformar

Use o **Transformar** quando quiser que a IA siga um conjunto personalizado de instruções.

![Área de trabalho do Transformar](../images/screenshots/pt-BR/transform.png)

Esta é a área mais flexível do aplicativo. Você pode usá-la para tarefas como:

- resumir anotações
- transformar um texto informal em um e-mail refinado
- extrair pontos principais
- converter texto em um formato específico
- qualquer outra atividade personalizada com o texto de entrada

<br/>

<a id="run-an-existing-prompt"></a>

### Executar um prompt existente

1. Abra **Transformar**.
2. Escolha um prompt na lista de prompts.
3. Se aparecer uma caixa de idioma **Destino**, escolha um idioma, se desejar.
4. Digite ou cole o texto na entrada **Entrada**.
5. Clique em **Transformar**.
6. Leia o resultado em **Saída**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Se você ainda não tiver nenhum prompt

Se sua lista de prompts estiver vazia, clique em **Carregar prompts de exemplo** no espaço de trabalho Transformar. O mesmo controle está sempre disponível em [**Configurações** > **Prompts do Transformar**](#transform-prompts) na linha de importação/exportação. Ambos adicionam exemplos embutidos para que você possa começar rapidamente.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> Os prompts de exemplo são fornecidos em inglês. Após carregá-los, você pode editar um prompt e usar **Traduzir prompt** para traduzi-lo para o seu idioma.

<br/>

<a id="create-a-prompt-quickly"></a>

### Crie um prompt rapidamente

A maneira mais rápida de criar um prompt é:

1. Clique em **Novo prompt**.
2. Clique em **Gerar prompt**.
3. Descreva o que você deseja que o prompt faça.
4. Escolha um modelo.
5. Deixe o aplicativo criar um rascunho para você.
6. Revise o rascunho e clique em **Salvar**.

![Gerar prompt](../images/screenshots/pt-BR/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### Editar um prompt

Quando você cria ou edita um prompt, o editor aparece à esquerda e uma área de teste aparece à direita.

![Editor de prompt de transformação](../images/screenshots/pt-BR/transform-prompt-edit.png)

Os campos principais são:

- **Nome do prompt**: o nome exibido na lista de prompts.
- **Instruções do prompt (opcional)**: uma breve dica exibida ao usuário ao executar o prompt.
- **Função do modelo**: a função geral atribuída à IA, como por exemplo "Você é um assistente útil."
- **Instruções do modelo (uma por linha)**: as regras específicas que você deseja que a IA siga.
- **Descrição da saída**: uma palavra curta que descreve o resultado, como "resumo" ou "reescrever".
- **Temperatura (0,0 → 1,0)**: como o modelo irá se comportar; veja abaixo.
- **Solicitar idioma de destino**: adiciona um seletor de idioma de destino ao executar o prompt.

Se o termo técnico **Temperatura** for novo para você, pense assim:

- Uma temperatura **mais baixa** oferece resultados mais estáveis e previsíveis.

- Uma temperatura **mais alta** gera mais variedade e criatividade.

Você também pode usar:

- **`Gerar prompt`** para criar um novo rascunho a partir de uma descrição simples
- **`Melhorar prompt`** para aperfeiçoar um prompt existente
- **`Traduzir prompt`** para traduzir os campos do prompt

<br/>

> ⚠️ **ATENÇÃO**<br/>
> Clique em **`Salvar`** antes de clicar em **`Voltar para Executar`**. Se você voltar sem salvar, suas alterações serão perdidas.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Teste um prompt antes de usá-lo

O painel de teste à direita permite que você experimente seu prompt com um texto de exemplo antes de usá-lo no trabalho diário.

Isso é útil quando:

- você está criando um novo prompt
- você está comparando duas versões de um prompt
- você deseja verificar o tom, o comprimento ou o formato da saída

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> Você pode exportar e importar prompts salvos em [**Configurações** > **Transformar Prompts**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Painel

Use o **Painel** para verificar o quanto você está utilizando o aplicativo e quanto ele está custando (para modelos pagos).

![Resumo do painel](../images/screenshots/pt-BR/dashboard-summary.png)

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> Se você utilizar apenas modelos **gratuitos**, os valores de **custo** podem ser zero e os resumos focados em custo podem parecer vazios. Em **Resumo**, **Uso ao longo do tempo** e **Uso por modelo** ainda serão exibidos os **números de chamadas** (traduzir, reescrever e transformar) quando houver atividade no período selecionado.

<br/>

<a id="filter-the-data"></a>

### Filtrar os dados

Use os botões de filtro na parte superior para alterar o intervalo de tempo.

![Filtros do painel](../images/screenshots/pt-BR/dashboard-filter.png)

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> O filtro **Usuário** é visível apenas para administradores na versão web. Usuários comuns não verão este filtro, e ele não está disponível no aplicativo de desktop.

<br/>

<a id="dashboard-tabs"></a>

### Abas do painel

- **Resumo** fornece uma visão geral do uso e custo. Inclui um gráfico de **Uso ao longo do tempo** (contagem cumulativa empilhada de **chamadas** por dia para traduzir, reescrever e transformar) e **Uso por modelo** (total de **chamadas por modelo**, incluindo transformação).
- **Por Uso** detalha as atividades por idioma de tradução, modo de reescrita e prompt de transformação.
- **Por Modelo** mostra quais modelos você utilizou e quanto eles custaram.
- **Por Dia** exibe os totais diários.
- **Todas as Chamadas** mostra o histórico completo de chamadas e permite exportá-lo.

<br/>

<a id="export-data"></a>

### Exportar dados

As tabelas do painel podem exportar dados nos seguintes formatos:

- **JSON**
- **CSV**
- **XLSX**

Isso é útil se você deseja analisar atividades fora do aplicativo ou compartilhar um relatório.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Excluir registros armazenados de um modelo

Em **Por Modelo** ou **Todas as Chamadas**, você pode remover os registros armazenados de um modelo clicando no ícone da "lixeira".

> ⚠️ **AVISO**<br/>
> A exclusão de registros armazenados não pode ser desfeita. Use esta função somente se tiver certeza de que não precisa mais desse histórico.

Para excluir todos os dados ou remover registros com base na idade, acesse [**Configurações** > **Rastreamento de Custo**](#cost-tracking). Lá você encontrará opções para excluir todos os dados armazenados ou apenas os dados anteriores a uma determinada data.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Histórico

Clique em **Histórico** para ver o histórico de suas ações dentro do **Transrewrt**, incluindo a entrada e saída de cada operação.

![Página de histórico](../images/screenshots/pt-BR/history.png)

<br/>

<a id="filter-the-history"></a>

### Filtrar os dados

A **Histórico** usa os mesmos filtros da página **Painel**. Use-os para selecionar o intervalo de tempo.

![Filtros do painel](../images/screenshots/pt-BR/dashboard-filter.png)

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> O filtro **Usuário** é visível apenas para administradores na versão web. Usuários comuns não verão este filtro, e ele não está disponível no aplicativo de desktop.

<br/>

<a id="export-history-data"></a>

### Exportar dados do histórico

A página de histórico pode exportar os dados filtrados nos seguintes formatos:

- **JSON**
- **CSV**
- **XLSX**

Isso é útil caso deseje analisar as atividades fora do aplicativo ou compartilhar um relatório.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>

## Configurações

Abra **Configurações** na barra lateral para personalizar o comportamento do aplicativo.

As guias disponíveis dependem da plataforma e do seu papel:

  | Guia               | Desktop | Web (admin) | Web (usuário comum) |
  |--------------------|:-------:|:-----------:|:-------------------:|
  | Configurações Gerais |   sim   |     sim     |         sim         |
  | Modelos            |   sim   |     sim     |         sim         |
  | Idiomas            |   sim   |     sim     |         sim         |
  | Acompanhamento de Custo |   sim   |     sim     |          —          |
  | Transformar Mensagens |   sim   |     sim     |         sim         |
  | Usuários           |    —    |     sim     |          —          |
  | Configuração de API |   sim   |     sim     |          —          |
  | Sobre              |   sim   |     sim     |         sim         |

<br/>

> ℹ️ **NOTA**<br/>

> Na versão web, cada usuário possui sua própria configuração. Configurações como modelos selecionados, idiomas, opções gerais e prompts de transformação são armazenadas por usuário. As alterações que você fizer não afetam outros usuários.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>

### Configurações gerais

Use **Configurações gerais** para controlar o comportamento ao digitar, se os detalhes de execução são armazenados no **Histórico** e a aparência do aplicativo.

**Comportamento**

- **Comportamento da tecla ENTER** define se a tecla `Enter` executa a tarefa ou insere uma nova linha.
- **Auto-traduzir ao colar** inicia a tradução assim que você colar um texto.
- **Copiar resultado automaticamente para a área de transferência** copia automaticamente os resultados bem-sucedidos.
- **Tradução em tempo real (enquanto digita)** traduz enquanto você digita.
- **Tempo limite (ms)** define o tempo de espera para a tradução em tempo real.

**Histórico**

- **Manter histórico de execuções** controla se cada tradução, reescrita e transformação armazena o **texto de entrada e saída** na visualização do painel lateral [**Histórico**](#history). Desativar essa opção solicita confirmação; se você confirmar, o histórico armazenado será removido do banco de dados.

- **Excluir dados do histórico** permite remover o texto armazenado por idade (por exemplo, mais antigo que alguns meses ou **todos os dados (limpar)**) usando **Excluir dados**. Isso afeta apenas o texto de execuções salvo na visualização do **Histórico**; **não** exclui os totais de custo ou uso. Para remover ou reduzir os dados de **custo**, use [**Configurações** > **Acompanhamento de custo**](#cost-tracking).

**Aparência**

- **Mostrar informações de custo nas ações** controla a exibição do custo por operação (se disponível) e do custo total nos painéis de saída de Traduzir, Reescrever e Transformar.
- **Casas decimais do custo** altera a forma como as casas decimais dos custos são exibidas.
- **Apenas web:** **mostrar uma margem ao redor do aplicativo** adiciona espaço extra ao redor da interface.
- **Família da fonte** altera a fonte utilizada nos painéis de texto.
- **Tamanho** altera o tamanho da fonte.

**Backup de Configuração**

- **Incluir dados de uso no backup** — quando ativado, o arquivo ZIP também contém histórico de execuções e dados de chamadas à API.

- **Backup configuration** — cria um único arquivo ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` no horário UTC por padrão) contendo `config.json`, `state.json`, chave de criptografia opcional, usuários, preferências, prompts personalizados e dados de uso, se você tiver habilitado. Após um backup bem-sucedido, a confirmação exibirá o nome do arquivo salvo.
- **Restaurar do backup** — abre primeiro uma **janela de confirmação**. Escolha o arquivo ZIP de backup dentro da janela (**Procurar** / seletor de arquivos ou arrastar e soltar, onde for suportado), depois revise as opções:
  - **Restaurar os dados de uso** — importa o histórico/uso do ZIP quando foi feito o backup com os dados de uso incluídos; desmarque essa opção se você desejar apenas configurações e prompts.
  - **Limpar os dados de uso antigos antes da restauração** — remove o histórico/uso existente nesta instalação antes de aplicar o backup (opcional; use quando desejar substituir completamente).

Backups criados na versão web ou na versão desktop podem ser restaurados na outra versão. Ao restaurar um backup do desktop na versão web, os dados serão restaurados para o usuário administrador.


<br/>

<a id="models"></a>

### Modelos

Use **Configurações** > **Modelos** para escolher quais modelos aparecem na barra de ferramentas.

![Aba Modelos nas configurações](../images/screenshots/pt-BR/settings-models.png)

A página possui duas listas:

- **Modelos disponíveis** à esquerda
- **Modelos selecionados** à direita

Controles úteis incluem:

- **Pesquisar modelos...** para encontrar um modelo pelo nome
- Chips de **Provedor** para restringir a lista a um motor específico (OpenRouter, OpenAI, Ollama, …)
- **Apenas gratuitos** para mostrar somente modelos gratuitos
- **Atualizar** para recarregar a lista
- **Expandir tudo** e **Recolher tudo** ao organizar por provedor

Os IDs dos modelos incluem o prefixo do provedor (por exemplo, `openrouter/…` vs `openai/…`). Emblemas como **OpenAI (OpenRouter)** versus **OpenAI (direto)** mostram como o tráfego é roteado.

> ℹ️ **OBSERVAÇÃO**<br/>

> **OpenRouter Body Builder** (`openrouter/bodybuilder`) é um modelo de roteamento, não um modelo de chat geral: sua resposta é um JSON que descreve o corpo das requisições da API OpenRouter (por exemplo, um array `requests` com `model` e `messages`). Se você usá-lo para **Traduzir**, **Reescrever** ou **Transformar**, o painel de saída mostrará esse JSON em vez do texto finalizado. Escolha um modelo de texto normal para essas tarefas. Veja a [página do modelo Body Builder](https://openrouter.ai/openrouter/bodybuilder) no OpenRouter.

Ações:

 - Para adicionar um modelo, clique em **Adicionar** ou em qualquer lugar na entrada.

 - Para remover um modelo, clique em **X** ao lado dele em **Modelos Selecionados** ou em **Selecionado** na entrada em Modelos Disponíveis.

 - Para limpar a lista, clique em **Desmarcar todos**. O modelo gratuito obrigatório permanecerá na lista.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>

> Se você não quiser adicionar créditos ao OpenRouter imediatamente, comece habilitando **Somente Gratuito** e escolhendo os modelos gratuitos (sem necessidade de cartão de crédito). Você também pode usar o Ollama para executar modelos localmente sem qualquer chave de API.

<br/>

<a id="languages"></a>

### Idiomas

Use **Configurações** > **Idiomas** para organizar as listas de idiomas usadas no aplicativo.

- **Idiomas principais** são fixados próximo ao topo das listas de idiomas em **Traduzir** e **Transformar**.
- **Idioma personalizado** permite adicionar um idioma que não está na lista integrada.

Se você adicionar um idioma personalizado, ele aparecerá nos seletores de idioma ao lado das opções integradas.

<br/>

<a id="cost-tracking"></a>

### Acompanhamento de custos

Use **Configurações** > **Acompanhamento de custos** para gerenciar as informações de custo.

- **Custo total** mostra o valor acumulado.
- **Copiar valor** copia o total para a área de transferência.
- **Redefinir custo** redefine o valor acumulado para zero.
- **Sincronizar com o uso da chave de API** ajusta o total para corresponder ao uso registrado na sua conta OpenRouter (apenas OpenRouter).
- **Uso da chave de API** exibe detalhes do uso no OpenRouter, se disponíveis.
- **Excluir dados de custo** remove todos os dados ou apenas as entradas anteriores a uma data selecionada.

**Acompanhamento de custos:** quando você utiliza modelos do OpenRouter, o aplicativo exibe seu uso e gasto reais com base nas informações de custo fornecidas pelo OpenRouter. Para todos os outros provedores, o aplicativo estima os custos com base nos preços publicados pelo OpenRouter; se um preço não estiver disponível, a estimativa poderá ser zero.

<br/>

> ℹ️ **NOTA**<br/>
> **Todos os valores de custo são estimativas apenas para sua referência, não são demonstrativos oficiais de cobrança.**

<br/>

> ⚠️ **AVISO**<br/>

> A exclusão de dados não pode ser desfeita. Antes de excluir, certifique-se de fazer backup dos seus dados ou exportá-los por meio de [**Histórico**](#history) 
> ou [**Painel** > **Todas as Chamadas**](#dashboard-tabs), caso contrário eles serão perdidos permanentemente. 
> Todo o histórico de entradas e saídas relacionado a cada entrada de chamada à API também será excluído.


<br/>

<a id="transform-prompts"></a>

### Transformar prompts

Use **Configurações** > **Transformar Prompts** para gerenciar prompts em lote.

Você pode:

- revisar seus prompts salvos
- excluir prompts
- importar prompts de um arquivo
- exportar prompts para backup ou compartilhamento
- carregar prompts de exemplo para a lista de prompts

<br/>

<a id="users"></a>

### Usuários

Use **Usuários** para gerenciar contas de usuário na versão web. Você pode adicionar usuários, atualizar seus detalhes, redefinir senhas e excluir contas.

<br/>

<a id="api-config"></a>

### Configuração da API

Os provedores suportados são: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e **Ollama** (modelos locais por meio de uma URL base). Você precisa configurar apenas os provedores que utilizar.

**Aplicativo web: somente administrador**

As chaves de API são configuradas por meio de variáveis de ambiente do sistema ou do Docker — elas não são inseridas na interface web. Esta página mostra quais provedores têm uma chave configurada e permite testar cada um clicando no botão **`Testar`**.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> Para alterar uma chave de API, atualize a variável de ambiente na sua configuração do sistema ou do Docker e reinicie o servidor ou o contêiner.

> ℹ️ **OBSERVAÇÃO**<br/>

> **Backups da configuração** (veja [**Configurações gerais** → Backup de configuração](#general-settings)) podem incorporar chaves de provedor **resolvidas** dentro do arquivo `config.json` do ZIP. Restaurar esse ZIP **não** copia essas chaves de volta para o arquivo de configuração persistido no servidor — as chaves ativas ainda vêm do ambiente e do estado do arquivo existente, conforme descrito ali.

<br/>

**Aplicativo desktop**

Use **Configuração de API** para armazenar as chaves de API de cada provedor que você utilizar. Para o Ollama, insira a **URL base** em vez de uma chave de API.


<br/>

> 💡 **Dica** <br/>
> Se você não deseja usar uma chave de API ou pagar por uso, pode [baixar o Ollama](https://ollama.com) e executar modelos (como `translategemma:4b`) localmente na sua máquina gratuitamente. Alternativamente, você pode criar uma conta gratuita no OpenRouter (sem necessidade de cartão de crédito) para usar seus modelos gratuitos, ou obter uma chave de API gratuita da Cerebras, Google, Groq ou Mistral AI.

<br/>

- Adicione apenas os provedores que você precisa. Em **Configurações** > **Modelos**, cada ID de modelo começa com o nome do provedor (por exemplo, `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Para adicionar uma chave de API, insira o valor no campo de texto e clique em **`Salvar`**. Para substituir uma chave existente, clique em **`Editar`**. Para verificar se uma chave está funcionando, clique em **`Testar`**. Para a URL base do Ollama, clique sempre em **`Testar`** para verificar a conexão.

<br/>

> ℹ️ **NOTA**<br/>
> Você não pode visualizar o valor atual de uma chave de API. Você só pode substituí-la usando o botão **`Editar`**.
> As chaves de API são armazenadas criptografadas na configuração.

<br/>

<a id="about"></a>

### Sobre

A aba **Sobre** exibe:

- o nome do aplicativo
- o número da versão
- a data da compilação
- um link para o repositório do projeto

<br/><br/>

<a id="common-issues"></a>

## Problemas comuns

Se algo não funcionar como esperado, verifique primeiramente os seguintes pontos.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>

### O aplicativo não irá traduzir, reescrever ou transformar texto

Verifique se:

- você selecionou um modelo na barra de ferramentas
- pelo menos um modelo está listado em [**Configurações** > **Modelos**](#models)
- sua configuração de API está funcionando

Se você estiver usando o aplicativo desktop:

1. Abra [**Configurações** > **Configuração de API**](#api-config).
2. Verifique se pelo menos uma chave de API foi salva.
3. Clique em **Testar** ao lado do provedor para confirmar se a chave está funcionando.

<br/>

<a id="the-model-list-is-empty"></a>

### A lista de modelos está vazia

Abra [**Configurações** > **Modelos**](#models) e clique em **Atualizar**.

Se necessário:

- pesquise por um modelo
- ative **Apenas Gratuitos**
- adicione um ou mais modelos aos **Modelos Selecionados**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>

### O resultado está muito lento ou muito caro

Tente uma ou mais das seguintes opções:

- escolha um modelo diferente
- use uma entrada mais curta
- desative a **Tradução em tempo real (enquanto digita)** em [**Configurações** > **Configurações gerais**](#general-settings)
- use modelos gratuitos para tarefas simples (veja [Modelos](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### A interface está no idioma errado

Clique no ícone do globo na [barra de ferramentas](#toolbar) e escolha o **Idioma da interface** de sua preferência.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>

### O texto é muito pequeno ou difícil de ler

Abra [**Configurações** > **Configurações Gerais**](#general-settings) e altere:

- **Família da Fonte**
- **Tamanho**

<br/>

<a id="dashboard-charts-are-empty"></a>

### Os gráficos do painel estão vazios

Isso é normal se:

- você utiliza apenas **modelos gratuitos** e está visualizando os valores de **custo** (eles podem ser zero); os gráficos de quantidade de chamadas de **uso** na aba **Resumo** ainda precisam de dados do período selecionado
- o **filtro de tempo** selecionado não abrange o período em que as chamadas foram feitas — experimente **Tudo** para verificar

Se os gráficos ainda estiverem vazios após selecionar **Tudo**, confirme se as chamadas aparecem na aba [**Histórico**](#history) ou na guia **Todas as chamadas**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### Custo mostra "não disponível" ou parece incorreto

Quando você utiliza modelos por meio do **OpenRouter**, o aplicativo exibe o valor real do seu gasto informado pelo OpenRouter.

Para **outros provedores** (OpenAI direto, Anthropic direto, etc.), o custo é estimado com base em dados de preços publicados pelo OpenRouter. Se nenhum preço correspondente for encontrado para um modelo, o custo aparecerá como **não disponível** e não será somado ao seu total acumulado.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### O custo total não corresponde à conta do meu provedor

Todos os valores de custo no aplicativo são **estimativas apenas para referência**, não sendo demonstrativos financeiros oficiais.

Para aproximar o total ao seu gasto real no OpenRouter, abra [**Configurações** > **Acompanhamento de custos**](#cost-tracking) e clique em **Sincronizar com o uso da chave API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### A página Histórico está ausente na barra lateral

A opção **Manter histórico de execuções** pode estar desativada. Abra [**Configurações** > **Configurações gerais**](#general-settings) e habilite-a. Observe que ativá-la não restaura dados do histórico previamente excluídos.

<br/>

<a id="web-app-session-expired"></a>

### Aplicativo web: redirecionado para a página de login inesperadamente

Sua sessão pode ter expirado. Faça login novamente. Se isso ocorrer com frequência, verifique a configuração do servidor quanto às definições de tempo de vida da sessão.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Administração web: esqueceu ou perdeu a senha

Isso se aplica ao **aplicativo web autohospedado** (Docker), não ao aplicativo desktop (Electron).

- Se outro administrador ainda puder fazer login, ele pode abrir [**Configurações** > **Usuários**](#users), selecionar a conta e definir uma **nova senha** ali.
- Se você estiver **bloqueado**, mas tiver **acesso ao terminal** da máquina ou do contêiner, redefina a senha usando o utilitário que acompanha a imagem (substitua `transrewrt` se você alterou o nome padrão e coloque a senha entre aspas se ela contiver espaços ou caracteres especiais):

```bash
docker exec transrewrt reset-web-password '<nome-de-usuário>' '<nova-senha>'
```

O nome de usuário padrão do administrador é `admin`, se você nunca criou outras contas. Quando você fornece apenas um argumento, ele será tratado como a nova senha para `admin`.

Se estiver executando a partir de um **repositório fonte** em vez do Docker, use:

```bash
pnpm run reset-web-password -- <nome-de-usuário> <nova-senha>

O script atualiza o registro do usuário no banco de dados SQLite (e pode criar o usuário `admin` se ele estiver ausente). Após a redefinição, faça login com a nova senha.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### O painel não exibe dados de outros usuários (web)

Apenas **administradores** podem visualizar os dados de todos os usuários por meio do filtro **Usuário**. Por padrão, usuários comuns veem apenas suas próprias atividades.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### Eu mudei um prompt e perdi as edições

Ao editar um prompt, clique sempre em **Salvar** antes de clicar em **Voltar para Executar**.

<br/><br/>

<a id="quick-tips"></a>

## Dicas rápidas

- Comece com [**Traduzir**](#translate) para garantir que sua configuração está funcionando antes de avançar para [**Reescrever**](#rewrite) ou [**Transformar**](#transform).
- Use [**Reescrever**](#rewrite) para melhorias cotidianas no texto.
- Use [**Transformar**](#transform) quando precisar de um fluxo de trabalho repetível para uma tarefa específica.
- Use [**Painel**](#dashboard) se quiser acompanhar o uso e os custos.
- Use [**Histórico**](#history) para revisar operações passadas e seus textos completos de entrada e saída.
- Exporte os prompts regularmente se estiver criando uma biblioteca de prompts que deseja manter segura (veja [Prompts de Transformação](#transform-prompts)) ou se desejar compartilhá-la com outras pessoas.

<br/><br/>

<a id="disclaimer"></a>

## Aviso

Os nomes e ícones dos produtos pertencem a seus respectivos proprietários e são usados apenas para fins de identificação. Este software não está afiliado nem é endossado por nenhuma das marcas mencionadas.

<br/><br/>

<a id="license"></a>

## Licença

Copyright © 2026 Waldemar Scudeller Jr.

[Licença Apache 2.0](LICENSE)