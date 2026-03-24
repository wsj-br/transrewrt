---
translated_at: "2026-03-24T02:52:29.046Z"
source_hash: "fc671c16dd34a2c355752935670712beb8abd2ae65453de44983a2f2f0701696"
source_mtime: 1774306679773.736
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Guia do Utilizador

<br/>

<a id="introduction"></a>
## Introdução

O Transrewrt ajuda-o a trabalhar com texto de três formas principais:

- **Traduzir** - converter texto de uma língua para outra.
- **Reescrever** - reformular texto com um estilo diferente, como mais claro, mais curto ou mais formal.
- **Transformar** - processar texto usando instruções personalizadas de IA, chamadas prompts.

<br/>

Este guia explica como utilizar a aplicação após a instalação e execução. Para os passos de instalação, consulte o ficheiro **[README](README.pt.md)** principal.

<br/>

> ℹ️ **NOTA**<br/>
> O Transrewrt está disponível como aplicação de ambiente de trabalho para Windows e Linux e como aplicação web autoalojada. Este guia foca-se na utilização diária da aplicação. Sempre que algo se aplique apenas a uma versão, será claramente indicado.

<small>**Leia em outros idiomas:** [English (UK)](USER-GUIDE.pt.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br/>

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Índice**

- [Antes de começar](#before-you-start)
  - [Como obter uma chave de API gratuita da OpenRouter (aplicação de ambiente de trabalho)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Primeiros passos](#getting-started)
- [Partes principais da janela](#main-parts-of-the-window)
  - [Barra lateral](#sidebar)
  - [Barra de ferramentas](#toolbar)
  - [Painéis de entrada e saída](#input-and-output-panels)
- [Traduzir](#translate)
  - [Traduzir texto](#translate-text)
  - [Seleção de idioma](#language-selection)
  - [Configurações úteis para tradução](#helpful-translation-settings)
  - [Atalhos de teclado](#keyboard-shortcuts)
- [Reescrever](#rewrite)
  - [Reescrever texto](#rewrite-text)
- [Transformar](#transform)
  - [Executar um prompt existente](#run-an-existing-prompt)
  - [Se ainda não tiver prompts](#if-you-have-no-prompts-yet)
  - [Criar um prompt rapidamente](#create-a-prompt-quickly)
  - [Editar um prompt](#edit-a-prompt)
  - [Testar um prompt antes de utilizá-lo](#test-a-prompt-before-using-it)
  - [Gerir prompts guardados](#manage-saved-prompts)
- [Painel de controlo (Dashboard)](#dashboard)
  - [Filtrar os dados](#filter-the-data)
  - [Separadores do painel](#dashboard-tabs)
  - [Exportar dados](#export-data)
  - [Eliminar registos armazenados de um modelo](#delete-stored-records-for-a-model)
- [Histórico](#history)
  - [Filtrar os dados](#filter-the-data-1)
  - [Exportar dados do histórico](#export-history-data)
- [Definições](#settings)
  - [Definições gerais](#general-settings)
  - [Modelos](#models)
  - [Idiomas](#languages)
  - [Controlo de custos](#cost-tracking)
  - [Prompts de transformação](#transform-prompts)
  - [Utilizadores](#users)
  - [Configuração da API](#api-config)
  - [Acerca](#about)
- [Problemas comuns](#common-issues)
  - [A aplicação não traduz, reescreve nem transforma texto](#the-app-will-not-translate-rewrite-or-transform-text)
  - [A lista de modelos está vazia](#the-model-list-is-empty)
  - [O resultado é demasiado lento ou caro](#the-result-is-too-slow-or-too-expensive)
  - [A interface está no idioma errado](#the-interface-is-in-the-wrong-language)
  - [O texto está demasiado pequeno ou difícil de ler](#the-text-is-too-small-or-hard-to-read)
  - [Os gráficos do painel estão vazios](#dashboard-charts-are-empty)
  - [O custo mostra "não disponível" ou parece incorreto](#cost-shows-not-available-or-seems-wrong)
  - [O custo total não corresponde à fatura do meu fornecedor](#total-cost-does-not-match-my-provider-bill)
  - [A página Histórico não aparece na barra lateral](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicação web: redirecionamento inesperado para a página de início de sessão](#web-app-redirected-to-the-login-page-unexpectedly)
  - [O painel não mostra dados de outros utilizadores (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Alterei um prompt e perdi as edições](#i-changed-a-prompt-and-lost-the-edits)
- [Dicas rápidas](#quick-tips)
- [Aviso](#disclaimer)
- [Licença](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Antes de começar

Para usar o Transrewrt, precisa de acesso a pelo menos um fornecedor de IA. Os fornecedores suportados são: [OpenRouter](https://openrouter.ai) (que agrega muitos modelos), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e [Ollama](https://ollama.com) para modelos locais.

Não precisa de selecionar um modelo pago para começar. Assim que adicionar a sua chave API do OpenRouter, a aplicação ativa automaticamente uma opção gratuita integrada do **OpenRouter**. Isto permite-lhe começar imediatamente a traduzir, reescrever e transformar texto.

Em linguagem simples:

- Um **modelo** é o motor de IA que realiza o trabalho. Os modelos estão listados com um **prefixo do fornecedor** (por exemplo `openrouter/…`, `openai/…`, `ollama/…`).
- Uma **chave API** (ou, no caso do Ollama, um **URL base**) é como a aplicação acede a esse fornecedor.

Se estiver a usar a **aplicação de ambiente de trabalho**, adicione chaves em [**Definições** > **Configuração da API**](#api-config) para cada fornecedor que usar. Para utilizar apenas o OpenRouter, veja abaixo [Como obter uma chave API](#how-to-get-an-api-key-desktop-app). Se não quiser usar uma chave API, pode instalar o Ollama (em [ollama.com](https://ollama.com)) e utilizar modelos locais em vez disso.

Se estiver a usar a **versão web**, o proprietário do servidor configura os fornecedores através de variáveis de ambiente, pelo que normalmente não terá de inserir chaves API.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Como obter uma chave API gratuita do OpenRouter (aplicação de ambiente de trabalho)

Se estiver a usar a aplicação de ambiente de trabalho, siga estes passos:

1. Aceda a [OpenRouter](https://openrouter.ai) no seu navegador web.
2. Crie uma conta ou inicie sessão.
3. Abra a página [Keys](https://openrouter.ai/keys).
4. Clique no botão para criar uma nova chave API.
5. Dê um nome à chave para que possa reconhecê-la posteriormente.
6. Copie a nova chave API.
7. Volte ao Transrewrt e abra **Definições** > **Configuração da API**.
8. Cole a chave em **Chave API OpenRouter** (em **Definições** > **Configuração da API**).
9. Clique em **Testar chave OpenRouter** para garantir que funciona.

<br/>

> ℹ️ **NOTA**<br/>
> Pode começar com a rota gratuita do OpenRouter ou com qualquer outro modelo gratuito disponível sem adicionar um cartão de crédito. Em muitos casos, isso é suficiente para começar a usar o Transrewrt sem escolher um modelo pago. Alternativamente, pode usar o Ollama para executar modelos localmente sem qualquer chave API.

<br/><br/>

<a id="getting-started"></a>
## Primeiros passos

Se esta é a sua primeira vez a usar o Transrewrt, siga esta ordem:

1. Abra a aplicação.
2. Escolha o seu **idioma da interface** a partir do ícone do globo, se necessário.
3. Se estiver a usar a **aplicação de ambiente de trabalho**, abra [**Definições** > **Configuração da API**](#api-config), adicione uma chave API para pelo menos um fornecedor (por exemplo, OpenRouter) e clique em **Testar** para verificar se funciona.
4. Abra [**Definições** > **Modelos**](#models) e adicione um ou mais modelos a **Modelos Selecionados**.
5. Abra [**Definições** > **Idiomas**](#languages) e escolha os seus **Idiomas principais**, se quiser que os seus idiomas mais utilizados apareçam em primeiro lugar.
6. Vá a **Traduzir** e execute uma tradução simples para confirmar que tudo está a funcionar.
7. Depois disso funcionar, experimente **Reescrever** e, em seguida, **Transformar**.

Esta ordem é importante. Evita o problema mais comum no primeiro uso: tentar executar uma tarefa antes de a aplicação ter uma ligação API funcional ou um modelo selecionado.

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

Use a barra lateral para navegar pela aplicação. Pode recolher a barra lateral para obter mais espaço, clicando no ícone junto ao logótipo da aplicação.

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
        <li><strong>Transformar</strong> abre a área de trabalho de instruções personalizadas.</li><br/>
        <li><strong>Painel</strong> mostra informações de utilização e custos.</li><br/>
        <li><strong>Definições</strong> abre o painel de definições.</li><br/>
        <li><strong>Histórico</strong> mostra o histórico de utilização com o texto de entrada e saída.</li><br/>
        <li><strong>Utilizador</strong> mostra o nome de utilizador do utilizador autenticado (apenas na versão web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barra de ferramentas

A barra de ferramentas muda ligeiramente consoante a localização na aplicação.

- No lado esquerdo, mostra o nome da página atual.
- No lado direito, mostra o **seletor de modelo** e o controlo de **idioma da interface**.

O **seletor de modelo** permite escolher qual o motor de IA utilizar para a tarefa atual.

  ![Seletor de modelo](../images/screenshots/pt/model-selector.png)

> ℹ️ **NOTA**<br/>
> Alguns modelos gratuitos podem não estar sempre disponíveis — por vezes estão offline ou têm um limite de utilização. Se isto ocorrer, a aplicação removerá automaticamente esse modelo da sua lista disponível.<br/>
> Para controlar quais os modelos que aparecem, vá a [**Definições** > **Modelos**](#models) e edite a sua lista de modelos. 
> Também pode abrir as definições do modelo diretamente clicando no ícone do fornecedor à esquerda do nome do modelo na barra de ferramentas.

<br/>

O **ícone do globo + código de idioma** altera o idioma da interface da aplicação, como menus e botões. **Não** altera os idiomas de tradução utilizados em **Traduzir**.

  ![Seletor de idioma da interface](../images/screenshots/pt/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Painéis de entrada e saída

A maioria dos espaços de trabalho utiliza um painel **Entrada** no lado esquerdo e um painel **Saída** no lado direito.

O painel **Entrada** mostra:

- Contagem de caracteres
- Contagem de palavras
- Contagem de parágrafos

O painel **Saída** pode mostrar:

- Tempo que a tarefa levou
- Custo da tarefa (se disponível)
- Custo total acumulado
- **TPS** (tokens por segundo)
- Contagem de caracteres, palavras e parágrafos
- Modelo utilizado

Se tiver dúvidas sobre os termos técnicos:

- **Token** significa um pequeno bloco de texto. Pode pensar nele como parte de uma palavra ou uma palavra curta.
- **TPS** significa quantos desses blocos de texto o modelo processou por segundo.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Traduzir

Use **Traduzir** quando quiser converter texto de um idioma para outro.

![Área de trabalho de tradução](../images/screenshots/pt/translate.png)

<br/>

<a id="translate-text"></a>
### Traduzir texto

1. Abra **Traduzir**.
2. Escolha um idioma em **De**.
3. Escolha um idioma em **Para**.
4. Escolha um modelo na barra de ferramentas.
5. Digite ou cole texto no campo **Entrada**.
6. Clique em **Traduzir**.
7. Leia o resultado no campo **Saída**.
8. Use o botão de copiar se quiser copiar o resultado.

<br/>

<a id="language-selection"></a>
### Seleção de idioma

- **De** pode ser um idioma específico ou **Detetar Idioma**.
- **Para** é o idioma para o qual deseja que o resultado seja traduzido.

Os seus **Idiomas principais** selecionados aparecem no topo da lista. Pode configurá-los em [**Definições** > **Idiomas**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Definições úteis de tradução

Em [**Definições** > **Definições Gerais**](#general-settings), pode alterar o comportamento da tradução:

- **Traduzir automaticamente ao colar** executa uma tradução assim que cola texto.
- **Copiar automaticamente o resultado para a área de transferência** copia o resultado automaticamente após uma execução bem-sucedida.
- **Tradução em tempo real (enquanto escreve)** executa traduções enquanto escreve.
- **Tempo limite (ms)** controla quanto tempo a aplicação espera antes de executar uma tradução em tempo real.

<br/>

<a id="keyboard-shortcuts"></a>
### Atalhos de teclado

Em [**Definições** > **Definições Gerais**](#general-settings), o **Comportamento do ENTER** controla o que acontece quando pressiona `Enter`:

- **Enter** pode executar a tarefa e **Shift+Enter** pode adicionar uma nova linha.
- Ou a aplicação pode fazer o contrário.

O modo atual também é mostrado no botão **Traduzir**.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Reescrever

Use **Reescrever** quando quiser melhorar a redação sem alterar o significado principal.

![Área de trabalho de reescrita](../images/screenshots/pt/rewrite.png)

Isto é útil para:

- corrigir erros ortográficos e gramaticais
- tornar o texto mais claro
- tornar o texto mais formal ou menos formal
- encurtar ou expandir o texto
- tornar o texto mais técnico

<br/>

<a id="rewrite-text"></a>

### Reescrever texto

1. Abra **Reescrever**.
2. Escolha um **Modo**.
3. Escolha um modelo na barra de ferramentas.
4. Digite ou cole o texto na área **Entrada**.
5. Clique em **Reescrever**.
6. Revise o resultado em **Saída**.

O mesmo comportamento da tecla Enter descrito em [**Traduzir**](#keyboard-shortcuts) também se aplica aqui.

<br/>

> 💡 **DICA**<br/>
> Quando você usa o modo "**Verificar ortografia e gramática**", um botão `Mostrar alterações` aparece no painel de saída.
> Clique neste botão para alternar a exibição das correções, mostrando ou ocultando as alterações específicas feitas no seu texto.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>
## Transformar

Use **Transformar** quando desejar que a IA siga um conjunto personalizado de instruções.

![Área de trabalho Transformar](../images/screenshots/pt/transform.png)

Esta é a área mais flexível do aplicativo. Você pode usá-la para tarefas como:

- resumir anotações
- transformar um texto informal em um e-mail refinado
- extrair pontos principais
- converter texto para um formato específico

<br/>

<a id="run-an-existing-prompt"></a>
### Executar um prompt existente

1. Abra **Transformar**.
2. Escolha um prompt na lista de prompts.
3. Se aparecer uma caixa de idioma **Destino**, escolha um idioma, caso deseje.
4. Digite ou cole o texto na área **Entrada**.
5. Clique em **Transformar**.
6. Leia o resultado em **Saída**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Se você ainda não tem prompts

Se a sua lista de prompts estiver vazia, clique em **Carregar prompts de exemplo**. Isso adicionará exemplos embutidos para que você possa começar rapidamente.

<br/>

> ℹ️ **NOTA**<br/>
> Os prompts de exemplo são fornecidos em inglês. Após carregá-los, você pode editar um prompt e usar **Traduzir prompt** para convertê-lo para seu idioma.

<br/>

<a id="create-a-prompt-quickly"></a>
### Criar um prompt rapidamente

A maneira mais rápida de criar um prompt é:

1. Clique em **Novo prompt**.
2. Clique em **Gerar prompt**.
3. Descreva o que você deseja que o prompt faça.
4. Escolha um modelo.
5. Deixe o aplicativo criar um rascunho para você.
6. Revise o rascunho e clique em **Salvar**.

![Gerar prompt](../images/screenshots/pt/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Editar um prompt

Quando você cria ou edita um prompt, o editor aparece à esquerda e uma área de teste aparece à direita.

![Editor de prompt do Transformar](../images/screenshots/pt/transform-prompt-edit.png)

Os campos principais são:

- **Nome do prompt**: o nome exibido na lista de prompts.
- **Instruções do prompt (opcional)**: uma breve dica exibida ao usuário ao executar o prompt.
- **Função da IA**: o papel geral atribuído à IA, por exemplo 'Você é um assistente útil.'
- **Instruções da IA (uma por linha)**: as regras específicas que você deseja que a IA siga.
- **Descrição da saída**: uma palavra curta que descreve o resultado, como 'resumo' ou 'reescrever'.
- **Temperatura (0,0 → 1,0)**: o comportamento do modelo; veja abaixo.
- **Perguntar pelo idioma de destino**: adiciona um seletor de idioma ao executar o prompt.

Se o termo técnico **Temperatura** for novo para você, pense nele dessa forma:

- Uma temperatura **mais baixa** resulta em respostas mais estáveis e previsíveis.
- Uma temperatura **mais alta** resulta em mais variedade e criatividade.

Você também pode usar:

- **`Gerar prompt`** para criar um novo rascunho a partir de uma descrição simples
- **`Aperfeiçoar prompt`** para refinar um prompt existente
- **`Traduzir prompt`** para traduzir os campos do prompt

<br/>

> ⚠️ **ATENÇÃO**<br/>
> Clique em **`Salvar`** antes de clicar em **`Voltar para Executar`**. Se você voltar sem salvar, suas alterações serão perdidas.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Testar um prompt antes de usá-lo

O painel de teste à direita permite testar seu prompt com texto de exemplo antes de usá-lo no trabalho diário.

Isso é útil quando:

- você está criando um novo prompt
- você está comparando duas versões de um prompt
- deseja verificar o tom, comprimento ou formato da saída

<br/>

<a id="manage-saved-prompts"></a>
### Gerenciar prompts salvos

Para gerenciar os prompts salvos em um único local, abra [**Configurações** > **Prompts do Transformar**](#transform-prompts).

Lá você pode:

- listar e excluir seus prompts
- exportar prompts como **JSON**, **CSV** ou **XLSX**
- importar prompts a partir de um arquivo

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>

## Painel

Use o **Painel** para ver o quanto está a utilizar a aplicação e quanto isso está a custar (para modelos pagos).

![Resumo do painel](../images/screenshots/pt/dashboard-summary.png)


<br/>

> ℹ️ **NOTA**<br/>
> Se utilizar apenas modelos gratuitos, os gráficos relacionados com custos estarão vazios.

<br/>

<a id="filter-the-data"></a>
### Filtrar os dados

Utilize os botões de filtro no topo para alterar o intervalo de tempo.

![Filtros do painel](../images/screenshots/pt/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> O filtro **Utilizador** apenas é visível para administradores na versão web. Utilizadores regulares não verão este filtro, e este não está disponível na aplicação para computador.

<br/>

<a id="dashboard-tabs"></a>
### Separadores do painel

- **Resumo** oferece uma visão geral da utilização e dos custos.
- **Por utilização** divide a atividade por idioma de tradução, modo de reescrita e prompt de transformação.
- **Por modelo** mostra quais os modelos que utilizou e os respetivos custos.
- **Por dia** mostra os totais diários.
- **Todas as chamadas** mostra o histórico completo de chamadas e permite exportá-lo.

<br/>

<a id="export-data"></a>
### Exportar dados

As tabelas do painel permitem exportar dados nos seguintes formatos:

- **JSON**
- **CSV**
- **XLSX**

Isto é útil se pretender analisar a atividade fora da aplicação ou partilhar um relatório.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Eliminar registos armazenados de um modelo

Em **Por modelo** ou **Todas as chamadas**, pode remover registos armazenados de um modelo clicando no ícone do "ícone de lixo".

> ⚠️ **ATENÇÃO**<br/>
> A eliminação de registos armazenados não pode ser desfeita. Use esta função apenas se tiver a certeza de que já não necessita desse histórico.

Para eliminar todos os dados ou remover registos com base na sua antiguidade, aceda a [**Definições** > **Acompanhamento de custos**](#cost-tracking). Lá encontrará opções para eliminar todos os dados armazenados ou apenas os dados anteriores a uma determinada data.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Histórico

Clique em **Histórico** para ver o histórico das suas ações dentro do **Transrewrt**, incluindo a entrada e saída de cada operação.

![Página de histórico](../images/screenshots/pt/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrar o histórico

O **Histórico** utiliza os mesmos filtros da página **Painel**. Utilize-os para selecionar o intervalo de tempo.

![Filtros do painel](../images/screenshots/pt/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> O filtro **Utilizador** apenas é visível para administradores na versão web. Utilizadores regulares não verão este filtro, e este não está disponível na aplicação para computador.

<br/>

<a id="export-history-data"></a>
### Exportar dados do histórico

A página de histórico permite exportar os dados filtrados nos seguintes formatos:

- **JSON**
- **CSV**
- **XLSX**

Isto é útil se pretender analisar a atividade fora da aplicação ou partilhar um relatório.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Definições

Abra **Definições** na barra lateral para personalizar o comportamento da aplicação.

Os separadores disponíveis dependem da plataforma e do seu papel:

  | Separador               | Computador | Web (admin) | Web (utilizador comum) |
  |-------------------------|:----------:|:-----------:|:----------------------:|
  | Definições gerais       |    sim     |     sim     |           sim          |
  | Modelos                 |    sim     |     sim     |           sim          |
  | Idiomas                 |    sim     |     sim     |           sim          |
  | Acompanhamento de custos|    sim     |     sim     |            —           |
  | Prompts de transformação|    sim     |     sim     |           sim          |
  | Utilizadores            |     —      |     sim     |            —           |
  | Configuração da API     |    sim     |     sim     |            —           |
  | Sobre                   |    sim     |     sim     |           sim          |

<br/>

> ℹ️ **NOTA**<br/>
> Na versão web, cada utilizador tem a sua própria configuração. Definições como modelos selecionados, idiomas, opções gerais e prompts de transformação são armazenados por utilizador. As alterações que efetuar não afetam outros utilizadores.

<br/>


[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>

### Configurações gerais

Use **Configurações Gerais** para controlar o comportamento da digitação, se os detalhes de execução são armazenados no **Histórico** e a aparência.

**Comportamento**

- **Comportamento do ENTER** define se a tecla `Enter` executa a tarefa ou insere uma nova linha.
- **Auto-traduzir ao colar** inicia a tradução assim que você colar um texto.
- **Copiar resultado automaticamente para a área de transferência** copia os resultados bem-sucedidos automaticamente.
- **Tradução em tempo real (enquanto digita)** traduz enquanto você digita.
- **Tempo limite (ms)** define o tempo de espera para a tradução em tempo real.

**Histórico**

- **Manter histórico de execuções** define se cada tradução, reescrita e transformação armazena o **texto de entrada e saída** para a visualização do painel lateral [**Histórico**](#history). Desativar pede confirmação; se confirmado, os textos armazenados são removidos da base de dados.
- **Eliminar dados do histórico** permite remover textos armazenados por idade (por exemplo, mais antigos que alguns meses, ou **todos os dados (limpar)**) usando o botão **Eliminar dados**. Isto afeta apenas os textos de execução guardados para a visualização do **Histórico**; **não** elimina os totais de custos ou uso. Para remover ou reduzir dados de **custo**, use [**Configurações** > **Acompanhamento de custos**](#cost-tracking).

**Aparência**

- **Dígitos decimais do custo** altera a forma como os decimais de custo são exibidos.
- **Apenas web:** **mostrar margem ao redor da aplicação** adiciona espaço extra ao redor da interface.
- **Família da fonte** altera a fonte de escrita nos painéis de texto.
- **Tamanho** altera o tamanho da fonte.

<br/>

<a id="models"></a>
### Modelos

Use **Configurações** > **Modelos** para escolher quais modelos aparecem na barra de ferramentas.

![Separador Modelos de Configurações](../images/screenshots/pt/settings-models.png)

A página tem duas listas:

- **Modelos Disponíveis** à esquerda
- **Modelos Selecionados** à direita

Os controles úteis incluem:

- **Procurar modelos...** para encontrar um modelo pelo nome
- Chips de **Provedor** para reduzir a lista a um motor (OpenRouter, OpenAI, Ollama, …)
- **Apenas Gratuitos** para mostrar apenas modelos gratuitos
- **Atualizar** para recarregar a lista
- **Expandir Todos** e **Recolher Todos** quando estiver a ordenar por provedor

Os identificadores dos modelos incluem o prefixo do provedor (por exemplo, `openrouter/…` vs `openai/…`). Selos como **OpenAI (OpenRouter)** vs **OpenAI (direto)** mostram como o tráfego é encaminhado.

Ações:

- Para adicionar um modelo, clique em **Adicionar** ou em qualquer lugar da entrada.

- Para remover um modelo, clique em **X** ao lado dele nos **Modelos Selecionados** ou em **Selecionado** na entrada dos Modelos Disponíveis.

- Para limpar a lista, clique em **Desmarcar tudo**. O modelo gratuito obrigatório permanecerá na lista.

<br/>

> ℹ️ **NOTA**<br/>
> Se não deseja adicionar créditos ao OpenRouter imediatamente, comece ativando **Apenas Gratuitos** e escolhendo os modelos gratuitos (sem necessidade de cartão de crédito). Também pode usar o Ollama para executar modelos localmente sem qualquer chave de API.

<br/>

<a id="languages"></a>
### Idiomas

Use **Configurações** > **Idiomas** para organizar as listas de idiomas utilizadas na aplicação.

- **Idiomas principais** ficam fixados no topo das listas de idiomas em **Traduzir** e **Transformar**.
- **Idioma personalizado** permite adicionar um idioma que não está na lista embutida.

Se adicionar um idioma personalizado, ele aparecerá nos seletores de idioma juntamente com as opções embutidas.

<br/>

<a id="cost-tracking"></a>
### Acompanhamento de custos

Use **Configurações** > **Acompanhamento de custos** para gerir as informações de custo.

- **Custo total** mostra o valor acumulado.
- **Copiar valor** copia o total para a área de transferência.
- **Redefinir custo** define o total armazenado como zero.
- **Sincronizar com o uso da chave API** ajusta o total para corresponder ao uso reportado pela sua conta OpenRouter (apenas OpenRouter).
- **Uso da chave API** mostra detalhes do uso do OpenRouter, se disponíveis.
- **Eliminar dados de custo** remove todos os dados ou apenas entradas mais antigas que uma data selecionada.

**Acompanhamento de custos:** Quando utiliza modelos OpenRouter, a aplicação mostra o seu uso e gastos reais com base nos dados do OpenRouter. Para todos os outros provedores, a aplicação estima os custos usando os preços publicados pelo OpenRouter; se um preço não estiver disponível, a estimativa poderá ser zero.

<br/>

> ℹ️ **NOTA**<br/>
> **Todos os valores de custo são estimativas apenas para sua referência, não são faturas oficiais.**

<br/>

> ⚠️ **AVISO**<br/>
> A eliminação de dados não pode ser desfeita. Antes de eliminar, certifique-se de fazer backup dos seus dados ou exportá-los através de [**Painel** > **Todas as chamadas**](#dashboard-tabs); caso contrário, serão perdidos permanentemente. <br/>
> Todo o histórico relacionado a cada entrada de chamada da API também será eliminado.

<br/>

<a id="transform-prompts"></a>

### Transformar prompts

Use **Configurações** > **Transformar Prompts** para gerir prompts em massa.

Pode:

- rever os seus prompts guardados
- eliminar prompts
- importar prompts de um ficheiro
- exportar prompts para cópia de segurança ou partilha

<br/>

<a id="users"></a>
### Utilizadores

**Web: apenas administrador**

Use **Utilizadores** para gerir contas de utilizador na versão web. Pode adicionar utilizadores, atualizar os seus dados, repor palavras-passe e eliminar contas.

<br/>

<a id="api-config"></a>
### Configuração da API

Os fornecedores suportados são: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI e **Ollama** (modelos locais através de um URL base). Só precisa de configurar os fornecedores que utiliza.

**Aplicação web: apenas administrador**

As chaves da API são configuradas através de variáveis de ambiente do sistema ou do Docker — não são introduzidas na interface web. Esta página indica quais os fornecedores que têm uma chave configurada e permite testar cada um clicando no botão **`Testar`**.

<br/>

> ℹ️ **NOTA**<br/>
> Para alterar uma chave da API, atualize a variável de ambiente na sua configuração do sistema ou Docker e reinicie o servidor ou contentor.

<br/>

**Aplicação desktop**

Use **Configuração da API** para armazenar chaves da API para cada fornecedor que utilizar. No caso do Ollama, introduza o **URL base** em vez de uma chave da API.


<br/>

> 💡 **Dica** <br/>
> Se não deseja utilizar uma chave da API ou pagar pelo uso, pode [descarregar o Ollama](https://ollama.com) e executar modelos localmente no seu computador gratuitamente. Alternativamente, pode criar uma conta gratuita no OpenRouter (sem necessidade de cartão de crédito) para utilizar os seus modelos gratuitos.

- Adicione apenas os fornecedores de que necessita. Em **Configurações** > **Modelos**, cada ID de modelo começa com o fornecedor (por exemplo, `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Para adicionar uma chave da API, digite o valor no campo de texto e clique em **`Guardar`**. Para substituir uma chave existente, clique em **`Editar`**. Para verificar se uma chave está a funcionar, clique em **`Testar`**.

<br/>

> ℹ️ **NOTA**<br/>
> Não pode ver o valor atual de uma chave da API. Só pode substituí-la utilizando o botão **`Editar`**.
> As chaves da API são armazenadas encriptadas no ficheiro de configuração.

<br/>

Para obter instruções detalhadas sobre como obter uma chave OpenRouter, consulte [Como obter uma chave de API](#how-to-get-an-api-key-desktop-app) acima.

<br/>

<a id="about"></a>
### Sobre

O separador **Sobre** mostra:

- o nome da aplicação
- o número da versão
- a data da compilação
- uma ligação ao repositório do projeto

<br/><br/>

<a id="common-issues"></a>
## Problemas comuns

Se algo não estiver a funcionar conforme esperado, verifique primeiro os seguintes pontos.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### A aplicação não traduz, reescreve ou transforma texto

Verifique que:

- selecionou um modelo na barra de ferramentas
- pelo menos um modelo está listado em [**Configurações** > **Modelos**](#models)
- a sua configuração da API está a funcionar

Se estiver a utilizar a aplicação desktop:

1. Abra [**Configurações** > **Configuração da API**](#api-config).
2. Verifique se pelo menos uma chave da API está guardada.
3. Clique em **Testar** ao lado do fornecedor para confirmar que a chave está a funcionar.

<br/>

<a id="the-model-list-is-empty"></a>
### A lista de modelos está vazia

Abra [**Configurações** > **Modelos**](#models) e clique em **Atualizar**.

Se necessário:

- pesquise um modelo
- ative **Apenas gratuitos**
- adicione um ou mais modelos aos **Modelos Selecionados**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### O resultado é demasiado lento ou demasiado caro

Experimente uma ou mais das seguintes opções:

- escolha um modelo diferente
- utilize uma entrada mais curta
- desative a **Tradução em tempo real (ao escrever)** em [**Configurações** > **Configurações Gerais**](#general-settings)
- utilize modelos gratuitos para tarefas simples (veja [Modelos](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### A interface está numa língua errada

Clique no ícone do globo na [barra de ferramentas](#toolbar) e escolha a sua **Língua da interface** preferida.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### O texto é demasiado pequeno ou difícil de ler

Abra [**Configurações** > **Configurações Gerais**](#general-settings) e altere:

- **Família da fonte**
- **Tamanho**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Os gráficos do painel estão vazios

Isto é normal se:

- utilizar apenas **modelos gratuitos** (os gráficos de custos ficarão em branco)
- o **filtro de tempo** selecionado não abranger o período em que foram feitas chamadas — experimente **Todos** para verificar

Se os gráficos ainda estiverem vazios após selecionar **Todos**, confirme que chamadas aparecem em [**Histórico**](#history) ou no separador **Todas as chamadas**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>

### O custo mostra "não disponível" ou parece incorreto

Quando você utiliza modelos através do **OpenRouter**, o aplicativo exibe seu gasto real informado pelo OpenRouter.

Para **outros provedores** (OpenAI direto, Anthropic direto, etc.), o custo é estimado com base em dados de preços publicados pelo OpenRouter. Se nenhum preço correspondente for encontrado para um modelo, o custo será exibido como **não disponível** e não será incluído no seu total acumulado.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### O custo total não corresponde à minha fatura do provedor

Todos os valores de custo no aplicativo são **estimativas apenas para referência**, não são declarações oficiais de cobrança.

Para aproximar o total do seu gasto real com o OpenRouter, abra [**Configurações** > **Acompanhamento de custo**](#cost-tracking) e clique em **Sincronizar com uso da chave de API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### A página Histórico está ausente na barra lateral

A opção **Manter histórico de execução** pode estar desativada. Abra [**Configurações** > **Configurações gerais**](#general-settings) e ative-a. Observe que ativá-la não restaura dados históricos previamente excluídos.

<br/>

<a id="web-app-session-expired"></a>
### Aplicativo web: redirecionado para a página de login inesperadamente

Sua sessão pode ter expirado. Faça login novamente. Se isso acontecer com frequência, verifique a configuração do servidor quanto às definições de duração da sessão.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### O painel não mostra dados de outros usuários (web)

Apenas **administradores** podem visualizar dados de todos os usuários por meio do filtro **Usuário**. Por padrão, usuários comuns veem apenas suas próprias atividades.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Eu alterei um prompt e perdi as edições

Ao editar um prompt, clique sempre em **Salvar** antes de clicar em **Voltar para Execução**.

<br/><br/>

<a id="quick-tips"></a>
## Dicas rápidas

- Comece com [**Traduzir**](#translate) para garantir que sua configuração está funcionando antes de passar para [**Reescrever**](#rewrite) ou [**Transformar**](#transform).
- Use [**Reescrever**](#rewrite) para melhorias cotidianas de texto.
- Use [**Transformar**](#transform) quando precisar de um fluxo de trabalho repetível para uma tarefa específica.
- Use [**Painel**](#dashboard) se quiser acompanhar o uso e os custos.
- Use [**Histórico**](#history) para revisar operações anteriores e seus textos completos de entrada e saída.
- Exporte prompts regularmente se estiver criando uma biblioteca de prompts que deseja manter segura (veja [Transformar Prompts](#transform-prompts)) ou se quiser compartilhá-la com outros.

<br/><br/>

<a id="disclaimer"></a>
## Aviso legal

Nomes e ícones de produtos pertencem a seus respectivos proprietários e são usados apenas para fins de identificação. Este software não é afiliado nem endossado por nenhuma das marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licença

Direitos autorais © 2026 Waldemar Scudeller Jr.

[Licença Apache 2.0](LICENSE)