---
translated_at: "2026-03-29T01:55:45.358Z"
source_hash: "8981b8db163153bfc443046fa20a49b33c92b9feebdee302f6ef60852f273472"
source_mtime: "2026-03-29T01:41:58.368Z"
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>

# Guia do Utilizador

<br/>

<a id="introduction"></a>

## Introdução

O Transrewrt ajuda você a trabalhar com textos de três formas principais:

- **Traduzir** - converter textos de um idioma para outro.
- **Reescrever** - reformular textos de forma diferente, como mais claro, mais curto ou mais formal.
- **Transformar** - processar textos utilizando instruções personalizadas de IA chamadas prompts.

<br/>

Este guia explica como usar o aplicativo após instalado e em execução. Para as etapas de instalação, consulte o **[README](README.pt.md)** principal.

<br/>

> ℹ️ **NOTA**<br/>
> O Transrewrt está disponível como aplicativo desktop para Windows e Linux, e como aplicativo web autohospedado. Este guia foca no uso diário do aplicativo. Quando algo se aplica apenas a uma versão, isso é claramente indicado.

<small>**Leia em outros idiomas:** </small>

<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Observação sobre traduções da interface e da documentação:** Todos os idiomas da interface, exceto o inglês (UK) original, 
> foram traduzidos usando modelos de IA; a redação pode ser imprecisa ou conter erros.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Índice**

- [Antes de começar](#before-you-start)
  - [Como obter uma chave de API gratuita do OpenRouter (aplicação de desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Introdução](#getting-started)
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
  - [Se ainda não tiver prompts](#if-you-have-no-prompts-yet)
  - [Criar um prompt rapidamente](#create-a-prompt-quickly)
  - [Editar um prompt](#edit-a-prompt)
  - [Testar um prompt antes de o usar](#test-a-prompt-before-using-it)
- [Painel de controle](#dashboard)
  - [Filtrar os dados](#filter-the-data)
  - [Separadores do painel](#dashboard-tabs)
  - [Exportar dados](#export-data)

- [Eliminar registos armazenados para um modelo](#delete-stored-records-for-a-model)
- [Histórico](#history)
  - [Filtrar os dados](#filter-the-data-1)
  - [Exportar dados do histórico](#export-history-data)
- [Definições](#settings)
  - [Definições gerais](#general-settings)
  - [Modelos](#models)
  - [Idiomas](#languages)
  - [Acompanhamento de custos](#cost-tracking)
  - [Transformar pedidos](#transform-prompts)
  - [Utilizadores](#users)
  - [Configuração da API](#api-config)
  - [Sobre](#about)
- [Problemas comuns](#common-issues)
  - [A aplicação não traduz, reescreve ou transforma texto](#the-app-will-not-translate-rewrite-or-transform-text)
  - [A lista de modelos está vazia](#the-model-list-is-empty)
  - [O resultado é demasiado lento ou caro](#the-result-is-too-slow-or-too-expensive)
  - [A interface está no idioma errado](#the-interface-is-in-the-wrong-language)
  - [O texto é pequeno demais ou difícil de ler](#the-text-is-too-small-or-hard-to-read)
  - [Os gráficos do painel estão vazios](#dashboard-charts-are-empty)

- [Custo mostra "não disponível" ou parece estar incorreto](#cost-shows-not-available-or-seems-wrong)
  - [Custo total não corresponde à fatura do meu provedor](#total-cost-does-not-match-my-provider-bill)
  - [A página Histórico está ausente na barra lateral](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicativo web: redirecionado para a página de login inesperadamente](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Administração web: esqueci ou perdi uma senha](#web-admin-forgot-or-lost-a-password)
  - [O painel não exibe dados de outros usuários (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Eu alterei um prompt e perdi as edições](#i-changed-a-prompt-and-lost-the-edits)
- [Dicas rápidas](#quick-tips)
- [Aviso](#disclaimer)
- [Licença](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Antes de começar

Para usar o Transrewrt, você precisa de acesso a pelo menos um fornecedor de IA. Os fornecedores suportados são: [OpenRouter](https://openrouter.ai) (que agrega diversos modelos), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e [Ollama](https://ollama.com) para modelos locais.

Você não precisa escolher um modelo pago para começar. Assim que adicionar sua chave de API do OpenRouter, o aplicativo ativa automaticamente uma opção **gratuita** integrada do OpenRouter. Isso permite começar imediatamente a traduzir, reescrever e transformar textos. Alternativamente, você também pode obter uma chave de API gratuita da Cerebras, Google, Groq ou Mistral AI.

Em termos simples:

- Um **modelo** é o motor de IA que realiza o trabalho. Os modelos são listados com um **prefixo do fornecedor** (por exemplo, `openrouter/…`, `openai/…`, `ollama/…`).
- Uma **chave de API** (ou, no caso do Ollama, uma **URL base**) é como o aplicativo se conecta a esse fornecedor.

Se estiver a utilizar a **aplicação de ambiente de trabalho**, adicione chaves em [**Definições** > **Configuração de API**](#api-config) para cada fornecedor que utilizar. Para utilização apenas com OpenRouter, consulte abaixo [Como obter uma chave de API](#how-to-get-an-api-key-desktop-app). Se não quiser utilizar uma chave de API, pode instalar o Ollama (a partir de [ollama.com](https://ollama.com)) e usar modelos locais em vez disso, como o `translategemma:4b`.

Se estiver a utilizar a **versão web**, o proprietário do servidor configura os fornecedores através de variáveis de ambiente, pelo que não pode introduzir chaves de API diretamente na aplicação.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>

### Como obter uma chave API gratuita do OpenRouter (aplicativo desktop)

Se estiver a utilizar o aplicativo desktop, siga estes passos:

1. Aceda a [OpenRouter](https://openrouter.ai) no seu navegador web.
2. Crie uma conta ou faça login.
3. Abra a página [Keys](https://openrouter.ai/keys).
4. Clique no botão para criar uma nova chave API.
5. Dê um nome à chave para poder identificá-la mais tarde.
6. Copie a nova chave API.
7. Volte ao Transrewrt e abra **Definições** > **Configuração da API**.
8. Cole a chave em **Chave API do OpenRouter** (em **Definições** > **Configuração da API**).
9. Clique em **Testar chave OpenRouter** para garantir que funciona.

<br/><br/>

<a id="getting-started"></a>

## Primeiros passos

Se esta for a sua primeira vez usando o Transrewrt, siga esta ordem:

1. Abra o aplicativo.
2. Escolha o seu **idioma da interface** no ícone do globo, se necessário.
3. Se estiver usando o **aplicativo desktop**, abra [**Configurações** > **Configuração de API**](#api-config), adicione uma chave de API para pelo menos um provedor (por exemplo, OpenRouter) e clique em **Testar** para verificar se está funcionando.
4. Abra [**Configurações** > **Modelos**](#models) e adicione um ou mais modelos aos **Modelos Selecionados**.
5. Abra [**Configurações** > **Idiomas**](#languages) e escolha os seus **Idiomas principais**, caso queira que os idiomas mais usados apareçam primeiro.
6. Vá até **Traduzir** e execute uma tradução simples para confirmar que tudo está funcionando.
7. Depois que funcionar, experimente **Reescrever** e então **Transformar**.

A ordem é importante. Ela evita o problema mais comum no primeiro uso: tentar executar uma tarefa antes de o aplicativo ter uma conexão de API funcionando ou um modelo selecionado.

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

Utilize a barra lateral para navegar pela aplicação. Você pode recolher a barra lateral para obter mais espaço, clicando no ícone ao lado do logótipo da aplicação.

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
        <li><strong>Reescrever</strong> abre a área de trabalho de reescrita.</li><br/>
        <li><strong>Transformar</strong> abre a área de trabalho de prompt personalizado.</li><br/>
        <li><strong>Painel</strong> mostra informações de utilização e custos.</li><br/>
        <li><strong>Definições</strong> abre o painel de configurações.</li><br/>
        <li><strong>Histórico</strong> mostra o histórico de utilização com o texto de entrada e saída.</li><br/>
        <li><strong>Utilizador</strong> mostra o nome do utilizador autenticado (apenas na versão web).</li>
      </ul>

</td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barra de ferramentas

A barra de ferramentas altera-se ligeiramente consoante a localização na aplicação.

- À esquerda, mostra o nome da página atual.
- À direita, mostra o **seletor de modelo** e o controlo do **idioma da interface**.

O **seletor de modelo** permite escolher qual motor de IA utilizar na tarefa atual.

  ![Seletor de modelo](../images/screenshots/pt/model-selector.png)

Alguns modelos gratuitos podem não estar sempre disponíveis — por vezes estão offline ou têm um limite de utilização. Se isto acontecer, a aplicação irá automaticamente remover esse modelo da sua lista disponível. Para controlar quais os modelos que aparecem, aceda a [**Definições** > **Modelos**](#models) e edite a sua lista de modelos. 
Também pode abrir as definições do modelo diretamente clicando no ícone do fornecedor à esquerda do nome do modelo na barra de ferramentas.

<br/>

O **ícone do globo + código de idioma** altera o idioma da interface da aplicação, como menus e botões. Isto **não** altera os idiomas de tradução utilizados no **Traduzir**.

![Seletor de idioma da interface](../images/screenshots/pt/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>

### Painéis de entrada e saída

A maioria dos espaços de trabalho utiliza um painel **Entrada** no lado esquerdo e um painel **Saída** no lado direito.

Cada painel também exibe:

| **Entrada**                                                          | **Saída**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Contagem de caracteres <br/>- Contagem de palavras <br/>- Contagem de parágrafos   <br/> | - Quanto tempo a tarefa demorou<br/>- **TPS** (tokens por segundo)<br/>- Contagens de caracteres, palavras e parágrafos<br/>- O modelo utilizado |

Se você está se perguntando sobre os termos técnicos:

- **Token** significa um pequeno pedaço de texto. Pode ser pensado como parte de uma palavra ou uma palavra curta.
- **TPS** significa quantos desses pedaços de texto o modelo processou por segundo.

<br/>

Você também pode monitorar o custo de cada operação (se disponível) e o custo total, ativando a opção `Mostrar informações de custo nas ações` em [**Configurações** > **Configurações gerais**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>

## Traduzir

Utilize **Traduzir** quando quiser converter texto de um idioma para outro.

![Área de trabalho de Traduzir](../images/screenshots/pt/translate.png)

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
8. Use o botão de copiar, caso deseje copiar o resultado.

<br/>

<a id="language-selection"></a>

### Seleção de idioma

- **De** pode ser um idioma específico ou **Detetar idioma**.
- **Para** é o idioma que deseja para o resultado.

Os seus idiomas **Principais** selecionados aparecem no topo da lista. Pode definir estes em [**Definições** > **Idiomas**](#languages).

<br/>

<a id="helpful-translation-settings"></a>

### Configurações úteis de tradução

Em [**Configurações** > **Configurações Gerais**](#general-settings), você pode alterar o comportamento da tradução:

- **Traduzir automaticamente ao colar** executa uma tradução assim que você colar um texto.
- **Copiar resultado automaticamente para a área de transferência** copia o resultado automaticamente após uma tradução bem-sucedida.
- **Tradução em tempo real (durante a digitação)** executa traduções enquanto você digita.
- **Tempo limite (ms)** define por quanto tempo o aplicativo aguarda antes de executar uma tradução em tempo real.
- **Enter** define o que acontece quando você pressiona `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>

## Reescrever

Utilize o **Reescrever** quando quiser melhorar a redação sem alterar o significado principal.

![Área de trabalho do Reescrever](../images/screenshots/pt/rewrite.png)

Isso é útil para:

- corrigir ortografia e gramática (**Verificar ortografia e gramática**)
- tornar o texto mais claro (**Melhorar clareza**)
- obter várias reformulações distintas em uma única execução (**Versões alternativas**)
- tornar o texto mais formal ou mais informal (**Formal** / **Informal**)
- encurtar ou expandir o texto (**Encurtar** / **Expandir**)
- tornar o texto mais técnico (**Tornar técnico**)

<br/>

> 💡 **DICA**<br/>
> Quando você utiliza o modo "**Verificar ortografia e gramática**", um interruptor **Mostrar alterações** aparece no painel de saída (ao lado de **Copiar**).
> Ative ou desative-o para mostrar ou ocultar as correções específicas aplicadas ao seu texto.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformar

Utilize **Transformar** quando quiser que a IA siga um conjunto personalizado de instruções.

![Área de trabalho Transformar](../images/screenshots/pt/transform.png)

Esta é a área mais flexível da aplicação. Pode utilizá-la para tarefas como:

- resumir notas
- transformar texto informal num e-mail refinado
- extrair pontos principais
- converter texto para um formato específico
- qualquer outra atividade personalizada com o texto de entrada

<br/>

<a id="run-an-existing-prompt"></a>

### Executar um prompt existente

1. Abra **Transformar**.
2. Escolha um prompt da lista de prompts.
3. Se aparecer uma caixa de idioma **Destino**, escolha um idioma, caso deseje.
4. Digite ou cole um texto em **Entrada**.
5. Clique em **Transformar**.
6. Leia o resultado em **Saída**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>

### Se ainda não tiver prompts

Se sua lista de prompts estiver vazia, clique em **Carregar prompts de exemplo** no espaço de trabalho Transformar. O mesmo controle está sempre disponível em [**Configurações** > **Prompts de Transformação**](#transform-prompts), na linha de exportação/importação. Ambos adicionam exemplos embutidos para que você possa começar rapidamente.

<br/>

> ℹ️ **NOTA**<br/>
> Os prompts de exemplo são fornecidos em inglês. Após carregá-los, você pode editar um prompt e usar **Traduzir prompt** para traduzi-lo para o seu idioma.

<br/>

<a id="create-a-prompt-quickly"></a>

### Criar um prompt rapidamente

A forma mais rápida de criar um prompt é:

1. Clique em **Novo prompt**.
2. Clique em **Gerar prompt**.
3. Descreva o que deseja que o prompt faça.
4. Escolha um modelo.
5. Deixe o aplicativo criar um rascunho para você.
6. Revise o rascunho e clique em **Salvar**.

![Gerar prompt](../images/screenshots/pt/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>

### Editar um prompt

Quando criar ou editar um prompt, o editor será exibido à esquerda e uma área de teste aparecerá à direita.

![Editor de prompt de transformação](../images/screenshots/pt/transform-prompt-edit.png)

Os campos principais são:

- **Nome do prompt**: o nome exibido na lista de prompts.
- **Instruções do prompt (opcional)**: uma dica curta exibida ao utilizador ao executar o prompt.
- **Função do modelo**: a função geral atribuída à IA, como por exemplo 'Você é um assistente útil.'
- **Instruções do modelo (uma por linha)**: as regras específicas que deseja que a IA siga.
- **Descrição da saída**: uma palavra curta que descreve o resultado, como por exemplo 'resumo' ou 'reescrita'.
- **Temperatura (0,0 → 1,0)**: como o modelo se comportará; veja abaixo.
- **Solicitar idioma de destino**: adiciona um seletor de idioma de destino quando o prompt é executado.

Se o termo técnico **Temperatura** for novo para si, pense nele da seguinte forma:

- Uma temperatura **mais baixa** produz resultados mais estáveis e previsíveis.

- Uma temperatura **mais alta** gera mais variedade e criatividade.

Você também pode usar:

- **`Gerar prompt`** para criar um novo rascunho a partir de uma descrição simples
- **`Aprimorar prompt`** para aperfeiçoar um prompt existente
- **`Traduzir prompt`** para traduzir os campos do prompt

<br/>

> ⚠️ **AVISO**<br/>
> Clique em **`Salvar`** antes de clicar em **`Voltar para Execução`**. Se você voltar sem salvar, suas alterações serão perdidas.

<br/>

<a id="test-a-prompt-before-using-it"></a>

### Testar um prompt antes de usá-lo

O painel de teste à direita permite testar o seu prompt com um texto de exemplo antes de o utilizar no trabalho diário.

Isto é útil quando:

- está criando um novo prompt
- está comparando duas versões de um prompt
- deseja verificar o tom, o comprimento ou o formato da saída

<br/>

> ℹ️ **NOTA**<br/>
> Pode exportar e importar prompts guardados em [**Definições** > **Transformar Prompts**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Painel de Controle

Use o **Painel de Controle** para ver o quanto você está utilizando o aplicativo e qual é o custo disso (para modelos pagos).

![Resumo do painel](../images/screenshots/pt/dashboard-summary.png)


<br/>

> ℹ️ **NOTA**<br/>
> Se você usar apenas modelos **gratuitos**, os valores de **custo** podem ser zero e os resumos baseados em custo podem parecer vazios. Em **Resumo**, **Uso ao longo do tempo** e **Uso por modelo**, ainda serão exibidos os **números de chamadas** (traduzir, reescrever e transformar) quando houver atividade no período selecionado.

<br/>

<a id="filter-the-data"></a>

### Filtrar os dados

Utilize os botões de filtro na parte superior para alterar o intervalo de tempo.

![Filtros do painel](../images/screenshots/pt/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> O filtro **Utilizador** só é visível para administradores na versão web. Utilizadores regulares não verão este filtro, e este não está disponível na aplicação de desktop.

<br/>

<a id="dashboard-tabs"></a>

### Separadores do painel de controlo

- **Resumo** fornece uma visão geral do uso e custo. Inclui **Uso ao longo do tempo** (gráfico acumulado empilhado de **número de chamadas** por dia para traduzir, reescrever e transformar) e **Uso por modelo** (**chamadas por modelo**, incluindo transformação).
- **Por Uso** detalha a atividade por idioma de tradução, modo de reescrita e prompt de transformação.
- **Por Modelo** mostra quais os modelos que utilizou e o respetivo custo.
- **Por Dia** mostra os totais diários.
- **Todas as Chamadas** exibe o histórico completo de chamadas e permite exportá-lo.

<br/>

<a id="export-data"></a>

### Exportar dados

As tabelas do painel podem exportar dados nos seguintes formatos:

- **JSON**
- **CSV**
- **XLSX**

Isso é útil caso deseje analisar as atividades fora do aplicativo ou compartilhar um relatório.

<br/>

<a id="delete-stored-records-for-a-model"></a>

### Eliminar registos armazenados para um modelo

Em **Por Modelo** ou **Todas as Chamadas**, pode remover os registos armazenados para um modelo clicando no ícone do "caixote do lixo".

> ⚠️ **AVISO**<br/>
> A eliminação de registos armazenados não pode ser desfeita. Utilize esta opção apenas se tiver a certeza de que já não precisa desse histórico.

Para eliminar todos os dados ou remover registos com base na sua antiguidade, aceda a [**Definições** > **Acompanhamento de Custos**](#cost-tracking). Ali encontrará opções para eliminar todos os dados armazenados ou apenas os dados anteriores a uma determinada data.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>

## Histórico

Clique em **Histórico** para ver o histórico das suas ações dentro do **Transrewrt**, incluindo a entrada e saída de cada operação.

![Página de histórico](../images/screenshots/pt/history.png)

<br/>

<a id="filter-the-history"></a>

### Filtrar os dados

A **Histórico** utiliza os mesmos filtros que a página do **Painel**. Use-os para selecionar o intervalo de tempo.

![Filtros do painel](../images/screenshots/pt/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> O filtro **Utilizador** só é visível para administradores na versão web. Os utilizadores normais não verão este filtro, e ele não está disponível na aplicação de ambiente de trabalho.

<br/>

<a id="export-history-data"></a>

### Exportar dados do histórico

A página de histórico pode exportar os dados filtrados nos seguintes formatos:

- **JSON**
- **CSV**
- **XLSX**

Isso é útil se você deseja revisar a atividade fora do aplicativo ou compartilhar um relatório.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>

## Configurações

Abra **Configurações** na barra lateral para personalizar o comportamento da aplicação.

As guias disponíveis dependem da plataforma e do seu papel:

| Separador | Ambiente de trabalho | Web (administrador) | Web (utilizador comum) |
|-------------------|:-------:|:-----------:|:------------------:|
| Definições Gerais |   sim   |     sim     |        sim         |
| Modelos           |   sim   |     sim     |        sim         |
| Idiomas           |   sim   |     sim     |        sim         |
| Controlo de Custos |   sim   |     sim     |         —          |
| Transformar Pedidos |   sim   |     sim     |        sim         |
| Utilizadores      |    —    |     sim     |         —          |
| Configuração da API |   sim   |     sim     |         —          |
| Sobre             |   sim   |     sim     |        sim         |

<br/>

> ℹ️ **NOTA**<br/>
> Na versão web, cada utilizador tem a sua própria configuração. Definições como modelos selecionados, idiomas, opções gerais e prompts de transformação são armazenadas por utilizador. As alterações que efetuar não afetam outros utilizadores.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>

### Configurações gerais

Utilize **Configurações Gerais** para controlar o comportamento de digitação, se os detalhes de execução são armazenados no **Histórico** e a aparência do programa.

**Comportamento**

- **Comportamento da tecla ENTER** define se `Enter` executa a tarefa ou insere uma nova linha.
- **Traduzir automaticamente ao colar** inicia a tradução assim que você colar um texto.
- **Copiar automaticamente o resultado para a área de transferência** copia os resultados bem-sucedidos automaticamente.
- **Tradução em tempo real (enquanto digita)** traduz enquanto você digita.
- **Tempo limite (ms)** define o tempo de espera para a tradução em tempo real.

**Histórico**

- **Manter histórico de execuções** controla se cada tradução, reescrita e transformação armazena o **texto de entrada e saída** para a visualização no painel lateral [**Histórico**](#history). Desativar esta opção solicita confirmação; caso confirme, os textos armazenados no histórico serão removidos da base de dados.

- **Eliminar dados do histórico** permite remover o texto armazenado por idade (por exemplo, com mais de alguns meses ou **todos os dados (limpar)**) utilizando **Eliminar dados**. Isto afeta apenas o texto guardado para a visualização do **Histórico**; **não** elimina os totais de custo ou utilização. Para remover ou reduzir os dados de **custo**, utilize [**Definições** > **Acompanhamento de custos**](#cost-tracking).

**Aparência**

- **Mostrar informações de custo nas ações** controla a exibição do custo por operação (se disponível) e do custo total nos painéis de saída de Traduzir, Reescrever e Transformar.
- **Casas decimais do custo** altera a forma como são exibidos os decimais do custo.
- **Apenas na Web:** **mostrar uma margem à volta da aplicação** adiciona espaço extra à volta da interface.
- **Família da fonte** altera a fonte utilizada nos painéis de texto.
- **Tamanho** altera o tamanho da fonte.

**Cópia de segurança da configuração**

- **Incluir dados de utilização na cópia de segurança** — quando ativado, o ficheiro ZIP também contém o histórico de execuções e dados das chamadas à API.

- **Configuração de backup** — cria um único ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` em UTC por padrão) contendo `config.json`, `state.json`, chave de criptografia opcional, utilizadores, preferências, prompts personalizados e dados de utilização, caso tenha optado por incluí-los. Após um backup bem-sucedido, a confirmação exibe o nome do ficheiro guardado.
- **Restaurar a partir do backup** — abre primeiro uma **janela de confirmação**. Escolha o ficheiro ZIP de backup dentro da janela (**Procurar** / selecionador de ficheiros ou arrastar e soltar, onde suportado) e, em seguida, revise as opções:
  - **Restaurar os dados de utilização** — importar a utilização/histórico do ZIP quando este foi feito com os dados de utilização incluídos; desative esta opção se quiser apenas configurarções e prompts.
  - **Limpar os dados antigos de utilização antes de restaurar** — remover os dados de utilização/histórico existentes nesta instalação antes de aplicar o backup (opcional; utilize quando desejar uma substituição limpa).

Os backups criados na versão web ou na versão desktop podem ser restaurados na outra versão. Ao restaurar um backup do desktop na versão web, os dados serão restaurados para o utilizador administrador.


<br/>

<a id="models"></a>

### Modelos

Use **Configurações** > **Modelos** para escolher quais modelos aparecem na barra de ferramentas.

![Separador Modelos nas Configurações](../images/screenshots/pt/settings-models.png)

A página tem duas listas:

- **Modelos Disponíveis** à esquerda
- **Modelos Selecionados** à direita

Os controlos úteis incluem:

- **Procurar modelos...** para encontrar um modelo pelo nome
- Etiquetas de **Fornecedor** para reduzir a lista a um motor (OpenRouter, OpenAI, Ollama, …)
- **Apenas Gratuitos** para mostrar apenas modelos gratuitos
- **Atualizar** para recarregar a lista
- **Expandir Tudo** e **Contrair Tudo** ao ordenar por fornecedor

Os IDs dos modelos incluem o prefixo do fornecedor (por exemplo `openrouter/…` vs `openai/…`). Etiquetas como **OpenAI (OpenRouter)** vs **OpenAI (direto)** mostram como o tráfego é encaminhado.

> ℹ️ **NOTA**<br/>

> **OpenRouter Body Builder** (`openrouter/bodybuilder`) é um modelo de roteamento, não um modelo geral de chat: sua resposta é um JSON que descreve corpos de solicitação da API OpenRouter (por exemplo, um array `requests` com `model` e `messages`). Se você o utilizar para **Traduzir**, **Reescrever** ou **Transformar**, o painel de saída mostrará esse JSON em vez de texto finalizado. Escolha um modelo de texto normal para essas tarefas. Veja a [página do modelo Body Builder](https://openrouter.ai/openrouter/bodybuilder) no OpenRouter.

Ações:

 - Para adicionar um modelo, clique em **Adicionar** ou em qualquer lugar na entrada.

 - Para remover um modelo, clique em **X** ao lado dele em **Modelos Selecionados** ou em **Selecionar** na entrada em Modelos Disponíveis.

 - Para limpar a lista, clique em **Desmarcar todos**. O modelo gratuito obrigatório permanecerá na lista.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>

> Se não quiser adicionar créditos ao OpenRouter imediatamente, comece ativando **Apenas Gratuito** e escolhendo os modelos gratuitos (não é necessário cartão de crédito). Você também pode usar o Ollama para executar modelos localmente sem nenhuma chave de API.

<br/>

<a id="languages"></a>

### Idiomas

Utilize **Definições** > **Idiomas** para organizar as listas de idiomas utilizadas na aplicação.

- **Idiomas principais** são fixados próximo ao topo das listas de idiomas em **Traduzir** e **Transformar**.
- **Idioma personalizado** permite adicionar um idioma que não está na lista integrada.

Se adicionar um idioma personalizado, este aparecerá nos seletores de idioma juntamente com as opções integradas.

<br/>

<a id="cost-tracking"></a>

### Acompanhamento de custos

Use **Configurações** > **Acompanhamento de Custos** para gerir as informações de custo.

- **Custo Total** mostra o total acumulado.
- **Copiar Valor** copia o total para a área de transferência.
- **Repor Custo** repõe o total armazenado para zero.
- **Sincronizar com a utilização da chave API** define o total de acordo com a utilização indicada na sua conta OpenRouter (apenas OpenRouter).
- **Utilização da Chave API** mostra detalhes da utilização do OpenRouter, se disponíveis.
- **Eliminar dados de custo** remove todos os dados ou apenas as entradas anteriores a uma data selecionada.

**Acompanhamento de custos:** Quando utiliza modelos OpenRouter, a aplicação mostra a sua utilização real e despesas com base nas informações de custo do OpenRouter. Para todos os outros fornecedores, a aplicação estima os custos com base nos preços publicados pelo OpenRouter; se um preço não estiver disponível, a estimativa poderá ser zero.

<br/>

> ℹ️ **NOTA**<br/>
> **Todos os valores indicados são estimativas apenas para sua referência, não constituem facturas oficiais.**

<br/>

> ⚠️ **AVISO**<br/>

> A eliminação de dados não pode ser desfeita. Antes de eliminar, certifique-se de fazer uma cópia de segurança dos seus dados ou exportá-los através de [**Histórico**](#history)  
> ou [**Painel** > **Todas as chamadas**](#dashboard-tabs); caso contrário, serão perdidos permanentemente.  
> Todo o histórico de entradas e saídas relacionado a cada entrada de chamada de API também será eliminado.


<br/>

<a id="transform-prompts"></a>

### Transformar prompts

Utilize **Definições** > **Transformar Prompts** para gerir prompts em massa.

Pode:

- rever os seus prompts guardados
- eliminar prompts
- importar prompts a partir de um ficheiro
- exportar prompts para cópia de segurança ou partilha
- carregar prompts de exemplo para a lista de prompts

<br/>

<a id="users"></a>

### Utilizadores

Utilize **Utilizadores** para gerir contas de utilizador na versão web. Pode adicionar utilizadores, atualizar os seus detalhes, redefinir palavras-passe e eliminar contas.

<br/>

<a id="api-config"></a>

### Configuração da API

Os provedores suportados são: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e **Ollama** (modelos locais via URL base). Você precisa configurar apenas os provedores que for utilizar.

**Aplicação web: somente administrador**

As chaves de API são configuradas através de variáveis de ambiente do sistema ou do Docker — elas não são inseridas na interface web. Esta página mostra quais provedores têm uma chave configurada e permite testar cada um clicando no botão **`Testar`**.

<br/>

> ℹ️ **NOTA**<br/>
> Para alterar uma chave de API, atualize a variável de ambiente na sua configuração do sistema ou do Docker e reinicie o servidor ou o contêiner.

> ℹ️ **NOTA**<br/>

> **Backups de configuração** (veja [**Configurações gerais** → Backup de configuração](#general-settings)) podem incorporar chaves resolvedas de provedores dentro do `config.json` do ZIP. Restaurar esse ZIP **não** copia essas chaves de volta para o ficheiro de configuração persistido no servidor — as chaves ativas ainda provêm do ambiente e do estado de ficheiro existente, como descrito ali.

<br/>

**Aplicação desktop**

Use a **Configuração da API** para armazenar as chaves da API de cada provedor que utilizar. No caso do Ollama, introduza a **URL base** em vez de uma chave da API.


<br/>

> 💡 **Dica** <br/>
> Se não quiser utilizar uma chave da API ou pagar pelo uso, pode [descarregar o Ollama](https://ollama.com) e executar modelos (como `translategemma:4b`) localmente na sua máquina gratuitamente. Alternativamente, pode criar uma conta gratuita no OpenRouter (sem necessidade de cartão de crédito) para utilizar os seus modelos gratuitos, ou obter uma chave da API gratuita da Cerebras, Google, Groq ou Mistral AI.

<br/>

- Adicione apenas os provedores que você precisa. Em **Configurações** > **Modelos**, cada ID de modelo começa com o nome do provedor (por exemplo, `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Para adicionar uma chave de API, digite o valor no campo de texto e clique em **`Salvar`**. Para substituir uma chave existente, clique em **`Editar`**. Para verificar se uma chave está funcionando, clique em **`Testar`**. Para a URL base do Ollama, clique sempre em **`Testar`** para verificar a conexão.

<br/>

> ℹ️ **NOTA**<br/>
> Você não pode visualizar o valor atual de uma chave de API. Apenas é possível substituí-la utilizando o botão **`Editar`**.
> As chaves de API são armazenadas criptografadas na configuração.

<br/>

<a id="about"></a>

### Sobre

A aba **Sobre** mostra:

- o nome do aplicativo
- o número da versão
- a data da compilação
- um link para o repositório do projeto

<br/><br/>

<a id="common-issues"></a>

## Problemas comuns

Se algo não funcionar como esperado, verifique primeiro os seguintes pontos.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>

### A aplicação não irá traduzir, reescrever nem transformar texto

Verifique se:

- selecionou um modelo na barra de ferramentas
- pelo menos um modelo está listado em [**Definições** > **Modelos**](#models)
- a configuração da sua API está funcional

Se estiver a utilizar a aplicação de ambiente de trabalho:

1. Abra [**Definições** > **Configuração da API**](#api-config).
2. Verifique se pelo menos uma chave API foi guardada.
3. Clique em **Testar** ao lado do fornecedor para confirmar que a chave está a funcionar.

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

### O resultado é demasiado lento ou demasiado caro

Experimente uma ou mais das seguintes opções:

- escolha um modelo diferente
- utilize uma entrada mais curta
- desative a **Tradução em tempo real (enquanto escreve)** em [**Definições** > **Definições Gerais**](#general-settings)
- utilize modelos gratuitos para tarefas simples (veja [Modelos](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>

### A interface está no idioma errado

Clique no ícone do globo na [barra de ferramentas](#toolbar) e escolha o seu **idioma da interface** preferido.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>

### O texto é muito pequeno ou difícil de ler

Abra [**Configurações** > **Configurações Gerais**](#general-settings) e altere:

- **Família da fonte**
- **Tamanho**

<br/>

<a id="dashboard-charts-are-empty"></a>

### Os gráficos do painel estão vazios

Isso é normal se:

- você usar apenas **modelos gratuitos** e estiver visualizando os valores de **custo** (eles podem ser zero); os gráficos de contagem de chamadas de **utilização** na aba **Resumo** ainda precisam de dados do período selecionado
- o **filtro de tempo** selecionado não abranger o período em que as chamadas foram feitas — experimente **Tudo** para verificar

Se os gráficos continuarem vazios após selecionar **Tudo**, confirme se as chamadas aparecem na aba [**Histórico**](#history) ou na guia **Todas as Chamadas**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### O custo mostra "não disponível" ou parece incorreto

Quando você usa modelos através do **OpenRouter**, o aplicativo exibe o valor real do seu gasto informado pelo OpenRouter.

Para **outros provedores** (OpenAI direto, Anthropic direto, etc.), o custo é estimado com base em dados de preços publicados pelo OpenRouter. Se nenhum preço correspondente for encontrado para um modelo, o custo será exibido como **não disponível** e não será adicionado ao seu total acumulado.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>

### O custo total não corresponde à fatura do meu provedor

Todos os valores de custo na aplicação são **estimativas para referência apenas**, não sendo faturas oficiais.

Para aproximar o total do valor real que você gasta no OpenRouter, abra [**Configurações** > **Acompanhamento de custos**](#cost-tracking) e clique em **Sincronizar com o uso da chave API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>

### A página Histórico está ausente na barra lateral

A opção **Manter histórico de execução** pode estar desativada. Abra [**Configurações** > **Configurações Gerais**](#general-settings) e ative-a. Observe que ativá-la não restaura dados de histórico previamente excluídos.

<br/>

<a id="web-app-session-expired"></a>

### Aplicação web: redirecionado para a página de login inesperadamente

A sua sessão pode ter expirado. Volte a iniciar sessão. Se isto acontecer com frequência, verifique a configuração do servidor relativamente ao tempo de vida da sessão.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>

### Web admin: esqueceu ou perdeu uma senha

Isto aplica-se à **aplicação web auto-hospedada** (Docker), não à aplicação de ambiente de trabalho (Electron).

- Se outro administrador ainda puder fazer login, ele poderá abrir [**Configurações** > **Utilizadores**](#users), escolher a conta e definir uma **nova senha** ali.
- Se estiver **bloqueado** mas tiver **acesso à shell** da máquina ou do recipiente (container), reinicie a senha com a ferramenta integrada que acompanha a imagem (substitua `transrewrt` se tiver alterado o nome padrão, e coloque a senha entre aspas se esta contiver espaços ou caracteres especiais):

```bash
docker exec transrewrt reset-web-password '<nome-de-utilizador>' '<nova-senha>'
```

O nome de utilizador padrão do administrador é `admin`, caso nunca tenha criado outras contas. Quando fornece apenas um argumento, este é tratado como a nova senha para `admin`.

Se estiver a executar a partir de um **repositório fonte** em vez de Docker, utilize:

```bash
pnpm run reset-web-password -- <nome-de-utilizador> <nova-senha>

O script atualiza o registo do utilizador na base de dados SQLite (e pode criar o utilizador `admin` se este estiver em falta). Após a reposição, inicie sessão com a nova palavra-passe.


<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>

### O painel não exibe dados para outros utilizadores (web)

Apenas **administradores** podem visualizar dados de todos os utilizadores através do filtro **Utilizador**. Por conceção, utilizadores normais apenas veem a sua própria atividade.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>

### Eu mudei um prompt e perdi as edições

Ao editar um prompt, clique sempre em **Guardar** antes de clicar em **Voltar para Executar**.

<br/><br/>

<a id="quick-tips"></a>

## Dicas rápidas

- Comece com [**Traduzir**](#translate) para garantir que sua configuração está funcionando antes de prosseguir para [**Reescrever**](#rewrite) ou [**Transformar**](#transform).
- Use [**Reescrever**](#rewrite) para melhorias cotidianas no texto.
- Use [**Transformar**](#transform) quando precisar de um fluxo de trabalho repetível para uma tarefa específica.
- Use o [**Painel**](#dashboard) se quiser acompanhar o uso e os custos.
- Use o [**Histórico**](#history) para revisar operações anteriores e seus textos completos de entrada/saída.
- Exporte os prompts regularmente se estiver criando uma biblioteca de prompts que deseja manter segura (veja [Prompts de Transformação](#transform-prompts)) ou se quiser compartilhá-los com outras pessoas.

<br/><br/>

<a id="disclaimer"></a>

## Aviso

Os nomes e ícones dos produtos pertencem aos seus respectivos proprietários e são usados apenas para fins de identificação. Este software não está afiliado nem é endossado por nenhuma das marcas mencionadas.

<br/><br/>

<a id="license"></a>

## Licença

Copyright © 2026 Waldemar Scudeller Jr.

[Licença Apache 2.0](LICENSE)