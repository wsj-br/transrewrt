---
translated_at: "2026-03-24T00:52:29.309Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Banner do Transrewrt](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Guia do Usuário

<br/>

<a id="introduction"></a>
## Introdução

O Transrewrt ajuda você a trabalhar com texto de três maneiras principais:

- **Traduzir** - converter texto de um idioma para outro.
- **Reescrever** - reformular o texto em um estilo diferente, como mais claro, mais curto ou mais formal.
- **Transformar** - processar texto usando instruções personalizadas de IA chamadas de prompts.

<br/>

Este guia explica como usar o aplicativo após instalado e em execução. Para etapas de instalação, veja o arquivo **[README](README.pt-BR.md)** principal.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> O Transrewrt está disponível como aplicativo para desktop para Windows e Linux, e como aplicativo web auto-hospedado. Este guia foca no uso diário do aplicativo. Sempre que algo se aplica apenas a uma versão, isso é claramente indicado.

<small>**Leia em outros idiomas:** [English (UK)](USER-GUIDE.pt-BR.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Sumário**

- [Antes de começar](#before-you-start)
  - [Como obter uma chave de API gratuita do OpenRouter (aplicativo desktop)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Primeiros passos](#getting-started)
- [Partes principais da janela](#main-parts-of-the-window)
  - [Barra lateral](#sidebar)
  - [Barra de ferramentas](#toolbar)
  - [Painéis de entrada e saída](#input-and-output-panels)
- [Traduzir](#translate)
  - [Traduzir texto](#translate-text)
  - [Seleção de idioma](#language-selection)
  - [Configurações úteis de tradução](#helpful-translation-settings)
  - [Atalhos de teclado](#keyboard-shortcuts)
- [Reescrever](#rewrite)
  - [Reescrever texto](#rewrite-text)
- [Transformar](#transform)
  - [Executar um prompt existente](#run-an-existing-prompt)
  - [Se você ainda não tiver prompts](#if-you-have-no-prompts-yet)
  - [Criar um prompt rapidamente](#create-a-prompt-quickly)
  - [Editar um prompt](#edit-a-prompt)
  - [Testar um prompt antes de usá-lo](#test-a-prompt-before-using-it)
  - [Gerenciar prompts salvos](#manage-saved-prompts)
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
  - [Prompts de transformação](#transform-prompts)
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
  - [O custo mostra "não disponível" ou está incorreto](#cost-shows-not-available-or-seems-wrong)
  - [O custo total não corresponde à conta do provedor](#total-cost-does-not-match-my-provider-bill)
  - [A página Histórico está ausente na barra lateral](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicativo web: redirecionado para a página de login inesperadamente](#web-app-redirected-to-the-login-page-unexpectedly)
  - [O painel não mostra dados de outros usuários (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Eu mudei um prompt e perdi as alterações](#i-changed-a-prompt-and-lost-the-edits)
- [Dicas rápidas](#quick-tips)
- [Aviso legal](#disclaimer)
- [Licença](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Antes de começar

Para usar o Transrewrt, você precisa de acesso a pelo menos um provedor de IA. Os provedores compatíveis são: [OpenRouter](https://openrouter.ai) (que agrega diversos modelos), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e [Ollama](https://ollama.com) para modelos locais.

Você não precisa escolher um modelo pago para começar. Assim que você adicionar sua chave de API do OpenRouter, o aplicativo ativa automaticamente uma opção **gratuita** integrada do OpenRouter. Isso permite que você comece a traduzir, reescrever e transformar textos imediatamente.

Em termos simples:

- Um **modelo** é o mecanismo de IA que realiza o trabalho. Os modelos são listados com um **prefixo do provedor** (por exemplo, `openrouter/…`, `openai/…`, `ollama/…`).
- Uma **chave de API** (ou, no caso do Ollama, uma **URL base**) é como o aplicativo conecta-se a esse provedor.

Se você estiver usando o **aplicativo de desktop**, adicione chaves em [**Configurações** > **Configuração de API**](#api-config) para cada provedor que usar. Para uso exclusivo com OpenRouter, veja [Como obter uma chave de API](#how-to-get-an-api-key-desktop-app) abaixo. Se você não quiser usar uma chave de API, pode instalar o Ollama (em [ollama.com](https://ollama.com)) e usar modelos locais em vez disso.

Se você estiver usando a **versão web**, o proprietário do servidor configura os provedores usando variáveis de ambiente, portanto você normalmente não precisará inserir chaves de API.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Como obter uma chave de API gratuita do OpenRouter (aplicativo de desktop)

Se você estiver usando o aplicativo de desktop, siga estes passos:

1. Acesse [OpenRouter](https://openrouter.ai) pelo seu navegador web.
2. Crie uma conta ou faça login.
3. Abra a página [Keys](https://openrouter.ai/keys).
4. Clique no botão para criar uma nova chave de API.
5. Dê um nome à chave para que você possa identificá-la posteriormente.
6. Copie a nova chave de API.
7. Volte ao Transrewrt e abra **Configurações** > **Configuração de API**.
8. Cole a chave em **Chave de API do OpenRouter** (em **Configurações** > **Configuração de API**).
9. Clique em **Testar chave do OpenRouter** para garantir que está funcionando.

<br/>

> ℹ️ **NOTA**<br/>
> Você pode começar usando a rota gratuita do OpenRouter ou qualquer um dos outros modelos gratuitos disponíveis, sem precisar adicionar um cartão de crédito. Em muitos casos, isso é suficiente para começar a usar o Transrewrt sem precisar escolher um modelo pago. Alternativamente, você pode usar o Ollama para executar modelos localmente sem qualquer chave de API.

<br/><br/>

<a id="getting-started"></a>
## Primeiros passos

Se esta for a sua primeira vez usando o Transrewrt, siga esta ordem:

1. Abra o aplicativo.
2. Escolha seu **idioma da interface** no ícone do globo, se necessário.
3. Se você estiver usando o **aplicativo de desktop**, abra [**Configurações** > **Configuração de API**](#api-config), adicione uma chave de API para pelo menos um provedor (por exemplo, OpenRouter) e clique em **Testar** para verificar se está funcionando.
4. Abra [**Configurações** > **Modelos**](#models) e adicione um ou mais modelos a **Modelos selecionados**.
5. Abra [**Configurações** > **Idiomas**](#languages) e escolha seus **Idiomas principais**, caso deseje que seus idiomas mais usados apareçam primeiro.
6. Vá até **Traduzir** e execute uma tradução simples para confirmar que tudo está funcionando.
7. Quando funcionar, experimente **Reescrever** e depois **Transformar**.

A ordem é importante. Ela evita o problema mais comum no primeiro uso: tentar executar uma tarefa antes que o aplicativo tenha uma conexão de API funcionando ou um modelo selecionado.

<br/><br/>

<a id="main-parts-of-the-window"></a>
## Partes principais da janela

O aplicativo é dividido em três áreas principais:

- A **barra lateral** à esquerda.
- A **barra de ferramentas** no topo.
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
        <li><strong>Traduzir</strong> abre o workspace de tradução.</li><br/>
        <li><strong>Reescrever</strong> abre o workspace de reescrita.</li><br/>
        <li><strong>Transformar</strong> abre o workspace de prompt personalizado.</li><br/>
        <li><strong>Painel</strong> mostra informações de uso e custo.</li><br/>
        <li><strong>Configurações</strong> abre o painel de configurações.</li><br/>
        <li><strong>Histórico</strong> mostra o histórico de uso com os textos de entrada e saída.</li><br/>
        <li><strong>Usuário</strong> mostra o nome do usuário logado (somente na versão web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barra de Ferramentas

A barra de ferramentas muda ligeiramente dependendo de onde você está no aplicativo.

- À esquerda, ela mostra o nome da página atual.
- À direita, ela mostra o **seletor de modelo** e o controle do **idioma da interface**.

O **seletor de modelo** permite que você escolha qual mecanismo de IA utilizar para a tarefa atual.

  ![Seletor de modelo](../images/screenshots/pt-BR/model-selector.png)

> ℹ️ **NOTA**<br/>
> Alguns modelos gratuitos podem não estar sempre disponíveis — às vezes estão offline ou possuem limite de uso. Se isso ocorrer, o aplicativo removerá automaticamente esse modelo da sua lista disponível.<br/>
> Para controlar quais modelos aparecem, acesse [**Configurações** > **Modelos**](#models) e edite sua lista de modelos. 
> Você também pode abrir as configurações do modelo diretamente clicando no ícone do provedor à esquerda do nome do modelo na barra de ferramentas.

<br/>

O **ícone de globo + código de idioma** altera o idioma da interface do aplicativo, como menus e botões. Ele **não** altera os idiomas de tradução usados na função **Traduzir**.

  ![Seletor de idioma da interface](../images/screenshots/pt-BR/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Painéis de entrada e saída

A maioria dos espaços de trabalho usa um painel **Entrada** à esquerda e um painel **Saída** à direita.

O painel **Entrada** mostra:

- Contagem de caracteres
- Contagem de palavras
- Contagem de parágrafos

O painel **Saída** pode mostrar:

- Quanto tempo a tarefa levou
- O custo dessa tarefa (se disponível)
- Seu custo total acumulado
- **TPS** (tokens por segundo)
- Contagens de caracteres, palavras e parágrafos
- O modelo utilizado

Se você estiver em dúvida sobre os termos técnicos:

- **Token** significa um pequeno trecho de texto. Pode ser pensado como parte de uma palavra ou uma palavra curta.
- **TPS** indica quantos desses trechos de texto o modelo processou a cada segundo.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Traduzir

Use **Traduzir** quando desejar converter texto de um idioma para outro.

![Área de trabalho Traduzir](../images/screenshots/pt-BR/translate.png)

<br/>

<a id="translate-text"></a>
### Traduzir texto

1. Abra **Traduzir**.
2. Escolha um idioma em **De**.
3. Escolha um idioma em **Para**.
4. Escolha um modelo na barra de ferramentas.
5. Digite ou cole o texto no campo **Entrada**.
6. Clique em **Traduzir**.
7. Leia o resultado no campo **Saída**.
8. Use o botão de cópia se desejar copiar o resultado.

<br/>

<a id="language-selection"></a>
### Seleção de idioma

- **De** pode ser um idioma específico ou **Detectar Idioma**.
- **Para** é o idioma em que você deseja obter o resultado.

Seus **Idiomas principais** selecionados aparecem no topo da lista. Você pode definir esses idiomas em [**Configurações** > **Idiomas**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Configurações úteis de tradução

Em [**Configurações** > **Configurações Gerais**](#general-settings), você pode alterar o comportamento da tradução:

- **Traduzir automaticamente ao colar** executa uma tradução assim que você colar um texto.
- **Copiar resultado automaticamente para a área de transferência** copia o resultado automaticamente após uma execução bem-sucedida.
- **Tradução em tempo real (digitando)** executa traduções enquanto você digita.
- **Tempo limite (ms)** define por quanto tempo o aplicativo espera antes de executar uma tradução em tempo real.

<br/>

<a id="keyboard-shortcuts"></a>
### Atalhos de teclado

Em [**Configurações** > **Configurações Gerais**](#general-settings), **Comportamento do ENTER** controla o que acontece quando você pressiona `Enter`:

- **Enter** pode executar a tarefa e **Shift+Enter** pode adicionar uma nova linha.
- Ou o aplicativo pode fazer o oposto.

O modo atual também é exibido no botão **Traduzir**.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Reescrever

Use **Reescrever** quando desejar melhorar a redação sem alterar o significado principal.

![Área de trabalho Reescrever](../images/screenshots/pt-BR/rewrite.png)

Isso é útil para:

- corrigir ortografia e gramática
- tornar o texto mais claro
- tornar o texto mais formal ou mais informal
- encurtar ou expandir o texto
- tornar o texto mais técnico

<br/>

<a id="rewrite-text"></a>

### Reescrever texto

1. Abra o **Reescrever**.
2. Escolha um **Modo**.
3. Escolha um modelo na barra de ferramentas.
4. Digite ou cole o texto no campo **Entrada**.
5. Clique em **Reescrever**.
6. Revise o resultado no campo **Saída**.

O mesmo comportamento da tecla Enter descrito em [**Traduzir**](#keyboard-shortcuts) também se aplica aqui.

<br/>

> 💡 **DICAS**<br/>
> Quando você usa o modo "**Verificar ortografia e gramática**", um botão `Mostrar alterações` aparece no painel de saída.
> Clique neste botão para alternar a exibição das correções, mostrando ou ocultando as alterações específicas feitas em seu texto.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## Transformar

Use **Transformar** quando desejar que a IA siga um conjunto personalizado de instruções.

![Área de trabalho Transformar](../images/screenshots/pt-BR/transform.png)

Esta é a área mais flexível do aplicativo. Você pode usá-la para tarefas como:

- resumir anotações
- transformar um texto informal em um e-mail bem elaborado
- extrair pontos principais
- converter texto em um formato específico

<br/>

<a id="run-an-existing-prompt"></a>
### Executar um prompt existente

1. Abra **Transformar**.
2. Escolha um prompt na lista de prompts.
3. Se aparecer uma caixa de idioma **Destino**, selecione um idioma, se desejar.
4. Digite ou cole o texto no campo **Entrada**.
5. Clique em **Transformar**.
6. Leia o resultado no campo **Saída**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Se você ainda não tem prompts

Se sua lista de prompts estiver vazia, clique em **Carregar prompts de exemplo**. Isso adicionará exemplos integrados para que você possa começar rapidamente.

<br/>

> ℹ️ **NOTA**<br/>
> Os prompts de exemplo são fornecidos em inglês. Depois de carregá-los, você pode editar um prompt e usar **Traduzir prompt** para convertê-lo para seu idioma.

<br/>

<a id="create-a-prompt-quickly"></a>
### Criar um prompt rapidamente

A maneira mais rápida de criar um prompt é:

1. Clique em **Novo prompt**.
2. Clique em **Gerar prompt**.
3. Descreva o que deseja que o prompt faça.
4. Escolha um modelo.
5. Deixe o aplicativo criar um rascunho para você.
6. Revise o rascunho e clique em **Salvar**.

![Gerar prompt](../images/screenshots/pt-BR/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Editar um prompt

Ao criar ou editar um prompt, o editor aparece à esquerda e uma área de teste aparece à direita.

![Editor de prompt do Transformar](../images/screenshots/pt-BR/transform-prompt-edit.png)

Os campos principais são:

- **Nome do prompt**: o nome exibido na lista de prompts.
- **Instruções do prompt (opcional)**: uma dica curta exibida ao usuário ao executar o prompt.
- **Função da IA**: a função geral atribuída à IA, como 'Você é um assistente útil'.
- **Instruções da IA (uma por linha)**: as regras específicas que você deseja que a IA siga.
- **Descrição da saída**: uma palavra curta que descreve o resultado, como 'resumo' ou 'reescrita'.
- **Temperatura (0,0 → 1,0)**: o comportamento do modelo; veja abaixo.
- **Solicitar idioma de destino**: adiciona um seletor de idioma de destino ao executar o prompt.

Se o termo técnico **Temperatura** for novo para você, pense da seguinte forma:

- Uma temperatura **mais baixa** gera resultados mais estáveis e previsíveis.
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
### Testar um prompt antes de usá-lo

O painel de teste à direita permite experimentar seu prompt com texto de exemplo antes de usá-lo em seu trabalho diário.

Isso é útil quando:

- você está criando um novo prompt
- está comparando duas versões de um prompt
- deseja verificar o tom, comprimento ou formato da saída

<br/>

<a id="manage-saved-prompts"></a>
### Gerenciar prompts salvos

Para gerenciar seus prompts salvos em um só lugar, abra [**Configurações** > **Prompts do Transformar**](#transform-prompts).

Lá você poderá:

- listar e excluir seus prompts
- exportar prompts como **JSON**, **CSV** ou **XLSX**
- importar prompts a partir de um arquivo

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Painel

Use o **Painel** para ver o quanto você está utilizando o aplicativo e quanto isso está custando (para modelos pagos).

![Resumo do painel](../images/screenshots/pt-BR/dashboard-summary.png)


<br/>

> ℹ️ **NOTA**<br/>
> Se você usar apenas modelos gratuitos, os gráficos relacionados ao custo ficarão vazios.

<br/>

<a id="filter-the-data"></a>
### Filtrar os dados

Use os botões de filtro na parte superior para alterar o intervalo de tempo.

![Filtros do painel](../images/screenshots/pt-BR/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> O filtro **Usuário** só é visível para administradores na versão web. Usuários comuns não verão esse filtro, e ele não está disponível no aplicativo de desktop.

<br/>

<a id="dashboard-tabs"></a>
### Abas do painel

- **Resumo** oferece uma visão geral do uso e dos custos.
- **Por Uso** detalha a atividade por idioma de tradução, modo de reescrita e prompt de transformação.
- **Por Modelo** mostra quais modelos você utilizou e quanto custaram.
- **Por Dia** exibe os totais diários.
- **Todas as Chamadas** mostra o histórico completo das chamadas e permite exportá-lo.

<br/>

<a id="export-data"></a>
### Exportar dados

As tabelas do painel podem exportar os dados nos seguintes formatos:

- **JSON**
- **CSV**
- **XLSX**

Isso é útil se você desejar analisar as atividades fora do aplicativo ou compartilhar um relatório.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Excluir registros armazenados de um modelo

Em **Por Modelo** ou **Todas as Chamadas**, você pode remover os registros armazenados de um modelo clicando no ícone da "lixeira".

> ⚠️ **ATENÇÃO**<br/>
> A exclusão dos registros armazenados não pode ser desfeita. Use esta opção somente se tiver certeza de que não precisa mais desse histórico.

Para excluir todos os dados ou remover registros com base na sua data, acesse [**Configurações** > **Rastreamento de Custo**](#cost-tracking). Lá você encontrará opções para excluir todos os dados armazenados ou apenas os dados anteriores a uma determinada data.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Histórico

Clique em **Histórico** para ver o histórico das suas ações dentro do **Transrewrt**, incluindo a entrada e saída de cada operação.

![Página de histórico](../images/screenshots/pt-BR/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrar o histórico

O **Histórico** utiliza os mesmos filtros da página **Painel**. Use-os para selecionar o intervalo de tempo.

![Filtros do painel](../images/screenshots/pt-BR/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> O filtro **Usuário** só é visível para administradores na versão web. Usuários comuns não verão esse filtro, e ele não está disponível no aplicativo de desktop.

<br/>

<a id="export-history-data"></a>
### Exportar dados do histórico

A página de histórico pode exportar os dados filtrados nos seguintes formatos:

- **JSON**
- **CSV**
- **XLSX**

Isso é útil se você desejar analisar as atividades fora do aplicativo ou compartilhar um relatório.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Configurações

Abra **Configurações** na barra lateral para personalizar o comportamento do aplicativo.

As abas disponíveis dependem da plataforma e do seu perfil:

  | Aba                       | Desktop | Web (admin) | Web (usuário comum) |
  |---------------------------|:-------:|:-----------:|:-------------------:|
  | Configurações Gerais      |   sim   |     sim     |         sim         |
  | Modelos                   |   sim   |     sim     |         sim         |
  | Idiomas                   |   sim   |     sim     |         sim         |
  | Rastreamento de Custo     |   sim   |     sim     |          —          |
  | Prompts de Transformação  |   sim   |     sim     |         sim         |
  | Usuários                  |    —    |     sim     |          —          |
  | Configuração de API       |   sim   |     sim     |          —          |
  | Sobre                     |   sim   |     sim     |         sim         |

<br/>

> ℹ️ **NOTA**<br/>
> Na versão web, cada usuário possui sua própria configuração. Configurações como modelos selecionados, idiomas, opções gerais e prompts de transformação são armazenadas por usuário. As alterações que você fizer não afetam outros usuários.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Configurações gerais

Use **Configurações Gerais** para controlar o comportamento ao digitar, se os detalhes de execução são armazenados no **Histórico** e a aparência.

**Comportamento**

- **Comportamento do ENTER** escolhe se a tecla `Enter` executa a tarefa ou insere uma nova linha.
- **Auto-traduzir ao colar** inicia a tradução assim que você colar um texto.
- **Copiar resultado automaticamente para a área de transferência** copia automaticamente os resultados bem-sucedidos.
- **Tradução em tempo real (enquanto digita)** traduz enquanto você digita.
- **Tempo limite (ms)** define o tempo de espera para a tradução em tempo real.

**Histórico**

- **Manter histórico de execuções** controla se cada tradução, reescrita e transformação armazena o **texto de entrada e de saída** para a visualização no painel lateral [**Histórico**](#history). Desativar essa opção solicita confirmação; se você confirmar, os textos armazenados serão removidos do banco de dados.
- **Excluir dados do histórico** permite remover os textos armazenados por idade (por exemplo, mais antigos que alguns meses, ou **todos os dados (limpar)**) usando **Excluir dados**. Isso afeta apenas os textos salvos para a visualização **Histórico**; ele **não** exclui os totais de custo ou uso. Para remover ou reduzir dados de **custo**, use [**Configurações** > **Acompanhamento de custo**](#cost-tracking).

**Aparência**

- **Casas decimais do custo** altera como as casas decimais de custo são exibidas.
- **Somente web:** **mostrar margem ao redor do aplicativo** adiciona espaço extra ao redor da interface.
- **Família da fonte** altera a fonte nos painéis de texto.
- **Tamanho** altera o tamanho da fonte.


<br/>

<a id="models"></a>
### Modelos

Use **Configurações** > **Modelos** para escolher quais modelos aparecem na barra de ferramentas.

![Guia Modelos nas Configurações](../images/screenshots/pt-BR/settings-models.png)

A página possui duas listas:

- **Modelos disponíveis** à esquerda
- **Modelos selecionados** à direita

Controles úteis incluem:

- **Pesquisar modelos...** para encontrar um modelo pelo nome
- Chips de **Provedor** para limitar a lista a um motor (OpenRouter, OpenAI, Ollama, …)
- **Apenas gratuitos** para mostrar somente modelos sem custo
- **Atualizar** para recarregar a lista
- **Expandir todos** e **Recolher todos** ao organizar por provedor

Os IDs dos modelos incluem o prefixo do provedor (por exemplo, `openrouter/…` vs `openai/…`). Emblemas como **OpenAI (OpenRouter)** versus **OpenAI (direto)** mostram como o tráfego é roteado.

Ações:

 - Para adicionar um modelo, clique em **Adicionar** ou em qualquer parte da entrada.

 - Para remover um modelo, clique em **X** ao lado dele em **Modelos Selecionados** ou em **Selecionar** na entrada em Modelos Disponíveis.

 - Para limpar a lista, clique em **Desmarcar todos**. O modelo gratuito obrigatório permanecerá na lista.

<br/>

> ℹ️ **NOTA**<br/>
> Se você não quiser adicionar créditos ao OpenRouter imediatamente, comece ativando **Apenas gratuitos** e escolha os modelos gratuitos (não é necessário cartão de crédito). Você também pode usar o Ollama para executar modelos localmente sem nenhuma chave de API.

<br/>

<a id="languages"></a>
### Idiomas

Use **Configurações** > **Idiomas** para organizar as listas de idiomas usadas no aplicativo.

- **Idiomas principais** são fixados próximo ao topo das listas de idiomas em **Traduzir** e **Transformar**.
- **Idioma personalizado** permite adicionar um idioma que não está na lista padrão.

Se você adicionar um idioma personalizado, ele aparecerá nos seletores de idioma junto às opções integradas.

<br/>

<a id="cost-tracking"></a>
### Acompanhamento de custo

Use **Configurações** > **Acompanhamento de custo** para gerenciar informações de custo.

- **Custo total** mostra o valor acumulado.
- **Copiar valor** copia o total para a área de transferência.
- **Redefinir custo** redefine o total armazenado para zero.
- **Sincronizar com o uso da chave de API** define o total igual ao uso informado pela sua conta OpenRouter (somente OpenRouter).
- **Uso da chave de API** mostra detalhes de uso do OpenRouter, se disponíveis.
- **Excluir dados de custo** remove todos os dados ou somente entradas mais antigas que uma data selecionada.

**Acompanhamento de custo:** Ao usar modelos OpenRouter, o aplicativo exibe seu uso e gastos reais com base nos dados do OpenRouter. Para todos os outros provedores, o aplicativo estima os custos usando preços publicados pelo OpenRouter; se um preço não estiver disponível, a estimativa pode ser zero.

<br/>

> ℹ️ **NOTA**<br/>
> Todos os valores de custo são estimativas apenas para sua referência, não são extratos oficiais de faturamento.


<br/>

> ⚠️ **AVISO**<br/>
> A exclusão de dados não pode ser desfeita. Antes de excluir, certifique-se de fazer backup ou exportar seus dados via [**Painel** > **Todas as chamadas**](#dashboard-tabs), caso contrário serão perdidos permanentemente.<br/>
> Todo o histórico relacionado a cada entrada de chamada à API também será excluído.


<br/>

<a id="transform-prompts"></a>

### Transformar prompts

Use **Configurações** > **Transformar Prompts** para gerenciar prompts em massa.

Você pode:

- revisar seus prompts salvos
- excluir prompts
- importar prompts de um arquivo
- exportar prompts para backup ou compartilhamento

<br/>

<a id="users"></a>
### Usuários

**Web: somente administrador**

Use **Usuários** para gerenciar contas de usuário na versão web. Você pode adicionar usuários, atualizar seus dados, redefinir senhas e excluir contas.

<br/>

<a id="api-config"></a>
### Configuração da API

Os provedores suportados são: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e **Ollama** (modelos locais por meio de uma URL base). Você precisa configurar apenas os provedores que utilizar.

**Aplicativo web: somente administrador**

As chaves de API são configuradas por meio de variáveis de ambiente do sistema ou do Docker — elas não são inseridas na interface web. Esta página mostra quais provedores têm uma chave configurada e permite testá-los ao clicar no botão **`Testar`**.

<br/>

> ℹ️ **NOTA**<br/>
> Para alterar uma chave de API, atualize a variável de ambiente na configuração do seu sistema ou do Docker e reinicie o servidor ou o contêiner.

<br/>

**Aplicativo desktop**

Use **Configuração da API** para armazenar as chaves de API de cada provedor que você utiliza. Para o Ollama, insira a **URL base** em vez de uma chave de API.

<br/>

> 💡 **Dica** <br/>
> Se você não quiser usar uma chave de API ou pagar pelo uso, pode [baixar o Ollama](https://ollama.com) e executar modelos localmente na sua máquina gratuitamente. Alternativamente, você pode criar uma conta gratuita no OpenRouter (sem cartão de crédito) para usar seus modelos gratuitos.

- Adicione apenas os provedores necessários. Em **Configurações** > **Modelos**, cada ID de modelo começa com o nome do provedor (por exemplo `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Para adicionar uma chave de API, digite o valor no campo de texto e clique em **`Salvar`**. Para substituir uma chave existente, clique em **`Editar`**. Para verificar se uma chave está funcionando, clique em **`Testar`**.

<br/>

> ℹ️ **NOTA**<br/>
> Você não pode visualizar o valor atual de uma chave de API. Você só pode substituí-la usando o botão **`Editar`**.
> As chaves de API são armazenadas criptografadas no arquivo de configuração.

<br/>

Para obter instruções detalhadas sobre como obter uma chave OpenRouter, consulte [Como obter uma chave de API](#how-to-get-an-api-key-desktop-app) acima.

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

Se algo não estiver funcionando conforme esperado, verifique primeiramente os seguintes pontos.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### O aplicativo não traduz, reescreve ou transforma texto

Verifique se:

- você selecionou um modelo na barra de ferramentas
- pelo menos um modelo está listado em [**Configurações** > **Modelos**](#models)
- a configuração da API está funcionando

Se estiver usando o aplicativo desktop:

1. Abra [**Configurações** > **Configuração da API**](#api-config).
2. Verifique se pelo menos uma chave de API foi salva.
3. Clique em **Testar** ao lado do provedor para confirmar se a chave está funcionando.

<br/>

<a id="the-model-list-is-empty"></a>
### A lista de modelos está vazia

Abra [**Configurações** > **Modelos**](#models) e clique em **Atualizar**.

Se necessário:

- pesquise por um modelo
- ative a opção **Somente gratuitos**
- adicione um ou mais modelos aos **Modelos selecionados**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### O resultado é muito lento ou caro

Tente uma ou mais das seguintes opções:

- escolha um modelo diferente
- use uma entrada mais curta
- desative **Tradução em tempo real (enquanto digita)** em [**Configurações** > **Configurações gerais**](#general-settings)
- use modelos gratuitos para tarefas simples (consulte [Modelos](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### A interface está em outro idioma errado

Clique no ícone do globo na [barra de ferramentas](#toolbar) e escolha o **Idioma da interface** desejado.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### O texto é muito pequeno ou difícil de ler

Abra [**Configurações** > **Configurações gerais**](#general-settings) e altere:

- **Família da fonte**
- **Tamanho**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Os gráficos do painel estão vazios

Isso é normal se:

- você estiver usando apenas **modelos gratuitos** (os gráficos de custo ficarão em branco)
- o **filtro de tempo** selecionado não abrange o período em que as chamadas foram feitas — experimente **Todos** para verificar

Se os gráficos ainda estiverem vazios após selecionar **Todos**, confirme se as chamadas aparecem em [**Histórico**](#history) ou na aba **Todas as chamadas**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### O custo mostra "não disponível" ou parece incorreto

Quando você utiliza modelos através do **OpenRouter**, o aplicativo mostra o valor real gasto conforme informado pelo OpenRouter.

Para **outros provedores** (OpenAI direto, Anthropic direto, etc.), o custo é estimado a partir dos dados de preços publicados pelo OpenRouter. Se nenhum preço correspondente for encontrado para um modelo, o custo será exibido como **não disponível** e não será adicionado ao seu total acumulado.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### O custo total não corresponde à minha fatura do provedor

Todos os valores exibidos no aplicativo são **estimativas apenas para referência**, não sendo demonstrativos oficiais de cobrança.

Para aproximar o total ao seu gasto real no OpenRouter, abra [**Configurações** > **Rastreamento de custos**](#cost-tracking) e clique em **Sincronizar com o uso da chave API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### A página Histórico está ausente na barra lateral

A opção **Manter histórico de execução** pode estar desativada. Acesse [**Configurações** > **Configurações Gerais**](#general-settings) e ative-a. Observe que ativar essa opção não recupera dados de histórico previamente excluídos.

<br/>

<a id="web-app-session-expired"></a>
### Aplicativo web: redirecionado para a página de login inesperadamente

Sua sessão pode ter expirado. Faça login novamente. Se isso ocorrer com frequência, verifique a configuração do servidor quanto aos tempos de duração da sessão.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### O painel não exibe dados de outros usuários (web)

Apenas **administradores** podem visualizar dados de todos os usuários por meio do filtro **Usuário**. Usuários comuns veem apenas suas próprias atividades por design.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Alterei um prompt e perdi as edições

Ao editar um prompt, clique sempre em **Salvar** antes de clicar em **Voltar para Executar**.

<br/><br/>

<a id="quick-tips"></a>
## Dicas rápidas

- Comece com [**Traduzir**](#translate) para garantir que sua configuração está funcionando antes de passar para [**Reescrever**](#rewrite) ou [**Transformar**](#transform).
- Use [**Reescrever**](#rewrite) para melhorias comuns no texto.
- Use [**Transformar**](#transform) quando precisar de um fluxo de trabalho repetível para uma tarefa específica.
- Use o [**Painel**](#dashboard) se desejar acompanhar o uso e os custos.
- Use o [**Histórico**](#history) para revisar operações anteriores e o texto completo da entrada e saída.
- Exporte seus prompts regularmente se estiver criando uma biblioteca que deseja manter segura (veja [Transformar Prompts](#transform-prompts)) ou se quiser compartilhá-la com outros.

<br/><br/>

<a id="disclaimer"></a>
## Aviso Legal

Os nomes e ícones dos produtos pertencem aos seus respectivos proprietários e são usados apenas para fins de identificação. Este software não é afiliado nem endossado por nenhuma das marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licença

Direitos autorais © 2026 Waldemar Scudeller Jr.

[Licença Apache 2.0](LICENSE)