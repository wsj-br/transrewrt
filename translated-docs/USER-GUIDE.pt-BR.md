---
translated_at: "2026-03-25T20:41:02.496Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
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
- **Reescrever** - reescrever o texto com um estilo diferente, como mais claro, mais curto ou mais formal.
- **Transformar** - processar texto usando instruções personalizadas de IA, chamadas de _prompts_.

<br/>

Este guia explica como usar o aplicativo após instalá-lo e iniciá-lo. Para instruções de instalação, consulte o arquivo **[README](README.pt-BR.md)** principal.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> O Transrewrt está disponível como aplicativo desktop para Windows e Linux e como aplicativo web auto-hospedado. Este guia foca no uso diário do aplicativo. Quando algo se aplica apenas a uma versão, isso é claramente indicado.

<small>**Leia em outros idiomas:** [English (UK)](USER-GUIDE.pt-BR.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Observação sobre traduções da interface e documentação:** Todos os idiomas da interface, exceto o inglês (UK) original, foram traduzidos usando modelos de IA; as traduções podem ser imprecisas ou conter erros.

</small>

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
- [Reescrever](#rewrite)
- [Transformar](#transform)
  - [Executar um _prompt_ existente](#run-an-existing-prompt)
  - [Se você ainda não tem _prompts_](#if-you-have-no-prompts-yet)
  - [Criar um _prompt_ rapidamente](#create-a-prompt-quickly)
  - [Editar um _prompt_](#edit-a-prompt)
  - [Testar um _prompt_ antes de usá-lo](#test-a-prompt-before-using-it)
- [Painel (Dashboard)](#dashboard)
  - [Filtrar os dados](#filter-the-data)
  - [Guias do painel](#dashboard-tabs)
  - [Exportar dados](#export-data)
  - [Excluir registros armazenados de um modelo](#delete-stored-records-for-a-model)
- [Histórico](#history)
  - [Filtrar os dados](#filter-the-data-1)
  - [Exportar dados do histórico](#export-history-data)
- [Configurações](#settings)
  - [Configurações gerais](#general-settings)
  - [Modelos](#models)
  - [Idiomas](#languages)
  - [Acompanhamento de custo](#cost-tracking)
  - [_Prompts_ de transformação](#transform-prompts)
  - [Usuários](#users)
  - [Configuração de API](#api-config)
  - [Sobre](#about)
- [Problemas comuns](#common-issues)
  - [O aplicativo não traduz, reescreve ou transforma o texto](#the-app-will-not-translate-rewrite-or-transform-text)
  - [A lista de modelos está vazia](#the-model-list-is-empty)
  - [O resultado é muito lento ou muito caro](#the-result-is-too-slow-or-too-expensive)
  - [A interface está no idioma errado](#the-interface-is-in-the-wrong-language)
  - [O texto está muito pequeno ou difícil de ler](#the-text-is-too-small-or-hard-to-read)
  - [Os gráficos do painel estão vazios](#dashboard-charts-are-empty)
  - [O custo mostra "não disponível" ou parece incorreto](#cost-shows-not-available-or-seems-wrong)
  - [O custo total não confere com a minha fatura do provedor](#total-cost-does-not-match-my-provider-bill)
  - [A página Histórico está ausente na barra lateral](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicativo web: redirecionado inesperadamente para a página de login](#web-app-redirected-to-the-login-page-unexpectedly)
  - [O painel não mostra dados de outros usuários (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Eu alterei um _prompt_ e perdi as edições](#i-changed-a-prompt-and-lost-the-edits)
- [Dicas rápidas](#quick-tips)
- [Aviso legal](#disclaimer)
- [Licença](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Antes de começar

Para usar o Transrewrt, você precisa de acesso a pelo menos um provedor de IA. Os provedores suportados são: [OpenRouter](https://openrouter.ai) (que reúne diversos modelos), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e [Ollama](https://ollama.com) para modelos locais.

Você não precisa selecionar um modelo pago para começar. Assim que adicionar sua chave de API do OpenRouter, o aplicativo habilita automaticamente uma opção **gratuita** integrada do OpenRouter. Isso permite que você comece a traduzir, reescrever e transformar textos imediatamente. Alternativamente, você também pode obter uma chave de API gratuita da Cerebras, Google, Groq ou Mistral AI.

Em termos simples:

- Um **modelo** é o mecanismo de IA que realiza o trabalho. Os modelos são listados com um **prefixo do provedor** (por exemplo, `openrouter/…`, `openai/…`, `ollama/…`).
- Uma **chave de API** (ou, no caso do Ollama, uma **URL base**) é o modo como o aplicativo se conecta ao provedor.

Se estiver usando o **aplicativo de desktop**, adicione as chaves em [**Configurações** > **Configuração de API**](#api-config) para cada provedor que você usar. Para uso exclusivo do OpenRouter, veja [Como obter uma chave de API](#how-to-get-an-api-key-desktop-app) abaixo. Se não quiser usar uma chave de API, você pode instalar o Ollama (disponível em [ollama.com](https://ollama.com)) e usar modelos locais, como por exemplo `translategemma:4b`.

Se estiver usando a **versão web**, o proprietário do servidor configura os provedores por meio de variáveis de ambiente, portanto você não pode inserir chaves de API diretamente no aplicativo.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Como obter uma chave de API gratuita do OpenRouter (aplicativo de desktop)

Se estiver usando o aplicativo de desktop, siga os passos abaixo:

1. Acesse [OpenRouter](https://openrouter.ai) pelo seu navegador.
2. Crie uma conta ou faça login.
3. Abra a página de [Chaves](https://openrouter.ai/keys).
4. Clique no botão para criar uma nova chave de API.
5. Dê um nome à chave para poder identificá-la posteriormente.
6. Copie a nova chave de API.
7. Retorne ao Transrewrt e abra **Configurações** > **Configuração de API**.
8. Cole a chave no campo **Chave de API do OpenRouter** (em **Configurações** > **Configuração de API**).
9. Clique em **Testar chave do OpenRouter** para verificar se está funcionando.

<br/><br/>

<a id="getting-started"></a>
## Primeiros passos

Se esta é a sua primeira vez usando o Transrewrt, siga esta ordem:

1. Abra o aplicativo.
2. Se necessário, escolha seu **idioma da interface** no ícone do globo.
3. Se estiver usando o **aplicativo de desktop**, abra [**Configurações** > **Configuração de API**](#api-config), adicione uma chave de API de pelo menos um provedor (por exemplo, OpenRouter) e clique em **Testar** para verificar se está funcionando.
4. Abra [**Configurações** > **Modelos**](#models) e adicione um ou mais modelos aos **Modelos Selecionados**.
5. Abra [**Configurações** > **Idiomas**](#languages) e escolha seus **Idiomas Principais**, caso deseje que os idiomas mais usados apareçam primeiro.
6. Vá até **Traduzir** e execute uma tradução simples para confirmar que tudo está funcionando.
7. Após isso funcionar, experimente **Reescrever** e depois **Transformar**.

Essa ordem é importante. Ela evita o problema mais comum para quem usa o aplicativo pela primeira vez: tentar executar uma tarefa antes de o aplicativo ter uma conexão de API ativa ou um modelo selecionado.

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
        <li><strong>Traduzir</strong> abre o espaço de trabalho de tradução.</li><br/>
        <li><strong>Reescrever</strong> abre o espaço de trabalho de reescrita.</li><br/>
        <li><strong>Transformar</strong> abre o espaço de trabalho de prompt personalizado.</li><br/>
        <li><strong>Painel</strong> mostra informações de uso e custo.</li><br/>
        <li><strong>Configurações</strong> abre o painel de configurações.</li><br/>
        <li><strong>Histórico</strong> mostra o histórico de uso com os textos de entrada e saída.</li><br/>
        <li><strong>Usuário</strong> mostra o nome do usuário logado (apenas na versão web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barra de ferramentas

A barra de ferramentas é levemente alterada dependendo de onde você está no aplicativo.

- À esquerda, é exibido o nome da página atual.
- À direita, são exibidos o **seletor de modelo** e o controle do **idioma da interface**.

O **seletor de modelo** permite escolher qual mecanismo de IA usar para a tarefa atual.

  ![Seletor de modelo](../images/screenshots/pt-BR/model-selector.png)

Alguns modelos gratuitos podem não estar sempre disponíveis — às vezes estão offline ou têm limite de uso. Nesse caso, o aplicativo removerá automaticamente esse modelo da sua lista de modelos disponíveis. Para controlar quais modelos aparecem, acesse [**Configurações** > **Modelos**](#models) e edite sua lista de modelos. 
Você também pode abrir as configurações do modelo diretamente clicando no ícone do provedor à esquerda do nome do modelo na barra de ferramentas.

<br/>

O **ícone de globo + código do idioma** altera o idioma da interface do aplicativo, como menus e botões. Ele **não** altera os idiomas de tradução usados em **Traduzir**.

  ![Seletor de idioma da interface](../images/screenshots/pt-BR/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Painéis de entrada e saída

A maioria dos espaços de trabalho usa um painel **Entrada** no lado esquerdo e um painel **Saída** no direito.

Cada painel também exibe:

| **Entrada**                                                         | **Saída**                                                                                                                  |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Contagem de caracteres <br/>- Contagem de palavras <br/>- Contagem de parágrafos   <br/> | - Tempo gasto na tarefa<br/>- **TPS** (tokens por segundo)<br/>- Contagens de caracteres, palavras e parágrafos<br/>- Modelo utilizado |


Se você tiver dúvidas sobre os termos técnicos:

- **Token** significa um pequeno trecho de texto. Pode ser entendido como parte de uma palavra ou uma palavra curta.
- **TPS** indica quantos desses trechos de texto o modelo processou a cada segundo.

<br/>

Você também pode monitorar o custo de cada operação (se disponível) e o custo total, ativando a opção `Mostrar informações de custo nas ações` em [**Configurações** > **Configurações gerais**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Traduzir

Use **Traduzir** quando quiser converter um texto de um idioma para outro.

![Espaço de trabalho Traduzir](../images/screenshots/pt-BR/translate.png)

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
8. Use o botão de copiar se desejar copiar o resultado.

<br/>

<a id="language-selection"></a>
### Seleção de idioma

- **De** pode ser um idioma específico ou **Detectar idioma**.
- **Para** é o idioma desejado para o resultado.

Seus **Idiomas principais** selecionados aparecem no topo da lista. Você pode definir esses idiomas em [**Configurações** > **Idiomas**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Configurações úteis de tradução

Em [**Configurações** > **Configurações gerais**](#general-settings), você pode alterar o comportamento da tradução:

- **Traduzir automaticamente ao colar** realiza uma tradução assim que você colar um texto.
- **Copiar resultado automaticamente para a área de transferência** copia o resultado automaticamente após uma execução bem-sucedida.
- **Tradução em tempo real (enquanto digita)** realiza traduções enquanto você digita.
- **Tempo limite (ms)** define por quanto tempo o aplicativo espera antes de executar uma tradução em tempo real.
- **Enter** define o que acontece ao pressionar `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Reescrever

Use **Reescrever** quando quiser melhorar a redação sem alterar o significado principal.

![Espaço de trabalho Reescrever](../images/screenshots/pt-BR/rewrite.png)

Isso é útil para:

- corrigir erros de ortografia e gramática
- tornar o texto mais claro
- tornar o texto mais formal ou mais informal
- encurtar ou expandir o texto
- tornar o texto mais técnico

<br/>

> 💡 **DICAS**<br/>
> Quando você usa o modo "**Verificar Ortografia e Gramática**", um botão `Mostrar alterações` aparece no painel de saída.
> Clique neste botão para alternar a exibição das correções, mostrando ou ocultando as alterações específicas feitas no seu texto.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformar

Use o **Transformar** quando desejar que a IA siga um conjunto personalizado de instruções.

![Área de trabalho do Transformar](../images/screenshots/pt-BR/transform.png)

Esta é a área mais flexível do aplicativo. Você pode usá-la para tarefas como:

- resumir anotações
- transformar textos brutos em e-mails refinados
- extrair pontos principais
- converter texto em um formato específico
- qualquer outra atividade personalizada com o texto de entrada

<br/>

<a id="run-an-existing-prompt"></a>
### Executar um prompt existente

1. Abra o **Transformar**.
2. Escolha um prompt da lista de prompts.
3. Se um campo de idioma **Destino** aparecer, escolha um idioma caso deseje.
4. Digite ou cole o texto em **Entrada**.
5. Clique em **Transformar**.
6. Leia o resultado em **Saída**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Se você ainda não tiver prompts

Se a sua lista de prompts estiver vazia, clique em **Carregar prompts de exemplo**. Isso adicionará exemplos integrados para que você possa começar rapidamente.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> Os prompts de exemplo são fornecidos em inglês. Após carregá-los, você pode editar um prompt e usar **Traduzir prompt** para traduzi-lo para o seu idioma.

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

![Gerar prompt](../images/screenshots/pt-BR/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Editar um prompt

Quando você criar ou editar um prompt, o editor aparecerá à esquerda e uma área de teste aparecerá à direita.

![Editor de prompt do Transformar](../images/screenshots/pt-BR/transform-prompt-edit.png)

Os principais campos são:

- **Nome do prompt**: o nome exibido na lista de prompts.
- **Instruções do prompt (opcional)**: uma dica curta exibida ao usuário ao executar o prompt.
- **Função da IA**: a função geral atribuída à IA, como 'Você é um assistente útil.'
- **Instruções da IA (uma por linha)**: as regras específicas que você deseja que a IA siga.
- **Descrição da saída**: uma palavra curta que descreve o resultado, como 'resumo' ou 'reescrita'.
- **Temperatura (0,0 → 1,0)**: como o modelo se comportará; veja abaixo.
- **Solicitar idioma de destino**: adiciona um seletor de idioma de destino ao executar o prompt.

Se o termo técnico **Temperatura** for novo para você, pense da seguinte forma:

- Uma temperatura **mais baixa** gera resultados mais estáveis e previsíveis.
- Uma temperatura **mais alta** gera mais variedade e criatividade.

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
- você deseja verificar o tom, comprimento ou formato da saída

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> Você pode exportar e importar prompts salvos em [**Configurações** > **Prompts do Transformar**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Painel

Use o **Painel** para ver quanto você está utilizando o aplicativo e quanto está custando (para modelos pagos).

![Resumo do Painel](../images/screenshots/pt-BR/dashboard-summary.png)


<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> Se você usar apenas modelos gratuitos, os gráficos relacionados ao custo estarão em branco. 

<br/>

<a id="filter-the-data"></a>
### Filtrar os dados

Use os botões de filtro na parte superior para alterar o intervalo de tempo.

![Filtros do Painel](../images/screenshots/pt-BR/dashboard-filter.png)

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> O filtro **Usuário** só é visível para administradores na versão web. Usuários comuns não verão esse filtro, e ele não está disponível no aplicativo desktop.

<br/>

<a id="dashboard-tabs"></a>

### Guias do painel

- **Resumo** oferece uma visão geral de uso e custo.
- **Por Uso** detalha a atividade por idioma de tradução, modo de reescrita e prompt de transformação.
- **Por Modelo** mostra quais modelos você utilizou e quanto custaram.
- **Por Dia** exibe os totais diários.
- **Todas as Chamadas** mostra o histórico completo de chamadas e permite exportá-lo.

<br/>

<a id="export-data"></a>
### Exportar dados

As tabelas do painel permitem exportar dados nos seguintes formatos:

- **JSON**
- **CSV**
- **XLSX**

Isso é útil se você deseja analisar a atividade fora do aplicativo ou compartilhar um relatório.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Excluir registros armazenados de um modelo

Em **Por Modelo** ou **Todas as Chamadas**, é possível remover os registros armazenados de um modelo clicando no ícone da "lixeira".

> ⚠️ **AVISO**<br/>
> A exclusão de registros armazenados não pode ser desfeita. Utilize esta opção apenas se tiver certeza de que não precisa mais desse histórico.

Para excluir todos os dados ou remover registros com base na data de criação, acesse [**Configurações** > **Acompanhamento de custo**](#cost-tracking). Lá você encontrará opções para excluir todos os dados armazenados ou apenas aqueles anteriores a uma determinada data.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Histórico

Clique em **Histórico** para visualizar o histórico de suas ações dentro do **Transrewrt**, incluindo a entrada e saída de cada operação.

![Página de histórico](../images/screenshots/pt-BR/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrar os dados

**Histórico** utiliza os mesmos filtros da página **Painel**. Use-os para selecionar o intervalo de tempo.

![Filtros do painel](../images/screenshots/pt-BR/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> O filtro **Usuário** só é visível para administradores na versão web. Usuários comuns não verão esse filtro, e ele não está disponível no aplicativo desktop.

<br/>

<a id="export-history-data"></a>
### Exportar dados do histórico

A página de histórico pode exportar os dados filtrados nos seguintes formatos:

- **JSON**
- **CSV**
- **XLSX**

Isso é útil se você deseja analisar a atividade fora do aplicativo ou compartilhar um relatório.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Configurações

Abra **Configurações** na barra lateral para personalizar o comportamento do aplicativo.

As guias disponíveis dependem da plataforma e do seu perfil:

  | Guia                   | Desktop | Web (admin) | Web (usuário comum) |
  |------------------------|:-------:|:-----------:|:------------------:|
  | Configurações Gerais   |   sim   |     sim     |        sim         |
  | Modelos                |   sim   |     sim     |        sim         |
  | Idiomas                |   sim   |     sim     |        sim         |
  | Acompanhamento de Custo|   sim   |     sim     |         —          |
  | Prompts de Transformação|  sim   |     sim     |        sim         |
  | Usuários               |    —    |     sim     |         —          |
  | Configuração de API    |   sim   |     sim     |         —          |
  | Sobre                  |   sim   |     sim     |        sim         |

<br/>

> ℹ️ **NOTA**<br/>
> Na versão web, cada usuário possui sua própria configuração. Configurações como modelos selecionados, idiomas, opções gerais e prompts de transformação são armazenadas individualmente. As alterações que você fizer não afetam outros usuários.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Configurações gerais

Use **Configurações Gerais** para controlar o comportamento ao digitar, se os detalhes das execuções são armazenados no **Histórico** e a aparência do aplicativo.

**Comportamento**

- **Comportamento do ENTER** define se a tecla `Enter` executa a tarefa ou insere uma nova linha.
- **Auto-traduzir ao colar** inicia a tradução assim que você colar um texto.
- **Copiar resultado automaticamente para a área de transferência** copia automaticamente os resultados bem-sucedidos.
- **Tradução em tempo real (enquanto digita)** traduz enquanto você digita.
- **Tempo limite (ms)** define o tempo de espera para a tradução em tempo real.

**Histórico**

- **Manter histórico de execuções** controla se cada tradução, reescrita e transformação armazena o **texto de entrada e saída** para a visualização do [**Histórico**](#history) na barra lateral. Desativar essa opção solicitará confirmação; ao confirmar, o texto do histórico armazenado será removido do banco de dados.
- **Excluir dados do histórico** permite remover textos armazenados com base na idade (por exemplo, mais antigos que alguns meses, ou **todos os dados (limpar)**) usando a opção **Excluir dados**. Isso afeta apenas os textos de execução salvos para a visualização do **Histórico**; **não** exclui totais de custo ou uso. Para remover ou reduzir dados de **custo**, utilize [**Configurações** > **Acompanhamento de custo**](#cost-tracking).

**Aparência**

- **Mostrar informações de custo nas ações** controla a exibição do custo por operação (se disponível) e do custo total nos painéis de saída de Tradução, Reescrita e Transformação.
- **Casas decimais do custo** altera a forma como as casas decimais do custo são exibidas.
- **Somente web:** **mostrar margem ao redor do aplicativo** adiciona espaço extra ao redor da interface.
- **Família da fonte** altera a fonte de escrita nos painéis de texto.
- **Tamanho** altera o tamanho da fonte.

<br/>

<a id="models"></a>

### Modelos

Use **Configurações** > **Modelos** para escolher quais modelos aparecem na barra de ferramentas.

![Aba Modelos nas configurações](../images/screenshots/pt-BR/settings-models.png)

A página possui duas listas:

- **Modelos Disponíveis** à esquerda
- **Modelos Selecionados** à direita

Controles úteis incluem:

- **Pesquisar modelos...** para encontrar um modelo pelo nome
- Chips de **Provedor** para restringir a lista a um motor específico (OpenRouter, OpenAI, Ollama, …)
- **Apenas Gratuitos** para exibir somente modelos gratuitos
- **Atualizar** para recarregar a lista
- **Expandir Todos** e **Recolher Todos** ao ordenar por provedor

Os IDs dos modelos incluem o prefixo do provedor (por exemplo, `openrouter/…` vs `openai/…`). Emblemas como **OpenAI (OpenRouter)** vs **OpenAI (direto)** mostram como o tráfego é direcionado.

> ℹ️ **OBSERVAÇÃO**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) é um modelo roteador, não um modelo de chat geral: sua resposta é um JSON que descreve os corpos de requisição da API OpenRouter (por exemplo, um array `requests` com `model` e `messages`). Se você usá-lo para **Traduzir**, **Reescrever** ou **Transformar**, o painel de saída mostrará esse JSON em vez do texto finalizado. Escolha um modelo de texto normal para essas tarefas. Veja a [página do modelo Body Builder](https://openrouter.ai/openrouter/bodybuilder) no OpenRouter.

Ações:

 - Para adicionar um modelo, clique em **Adicionar** ou em qualquer lugar da entrada.

 - Para remover um modelo, clique em **X** ao lado dele em **Modelos Selecionados** ou em **Selecionado** na entrada dos Modelos Disponíveis.

 - Para limpar a lista, clique em **Desmarcar todos**. O modelo gratuito obrigatório permanecerá na lista.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> Se você não quiser adicionar créditos ao OpenRouter imediatamente, comece ativando **Apenas Gratuitos** e escolhendo modelos gratuitos (sem necessidade de cartão de crédito). Você também pode usar o Ollama para executar modelos localmente sem nenhuma chave de API.

<br/>

<a id="languages"></a>
### Idiomas

Use **Configurações** > **Idiomas** para organizar as listas de idiomas utilizadas no aplicativo.

- **Idiomas principais** são fixados próximo ao topo das listas de idiomas em **Traduzir** e **Transformar**.
- **Idioma personalizado** permite adicionar um idioma que não está na lista integrada.

Se você adicionar um idioma personalizado, ele aparecerá nos seletores de idioma ao lado das opções integradas.

<br/>

<a id="cost-tracking"></a>
### Acompanhamento de custos

Use **Configurações** > **Acompanhamento de Custos** para gerenciar as informações de custo.

- **Custo Total** mostra o valor acumulado.
- **Copiar Valor** copia o total para a área de transferência.
- **Redefinir Custo** redefine o total armazenado para zero.
- **Sincronizar com o uso da chave de API** ajusta o total para corresponder ao uso informado pela sua conta OpenRouter (somente OpenRouter).
- **Uso da Chave de API** exibe detalhes de uso do OpenRouter, se disponíveis.
- **Excluir dados de custo** remove todos os dados ou apenas entradas anteriores a uma data selecionada.

**Acompanhamento de custos**: Quando você usa modelos do OpenRouter, o aplicativo mostra seu uso e gastos reais com base nas informações de custo fornecidas pelo OpenRouter. Para todos os outros provedores, o aplicativo estima os custos usando preços publicados pelo OpenRouter; se um preço não estiver disponível, a estimativa pode ser zero.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> Todos os valores são estimativas apenas para sua referência, não constituem faturas oficiais.

<br/>

> ⚠️ **AVISO**<br/>
> A exclusão de dados não pode ser desfeita. Antes de excluir, certifique-se de fazer backup ou exportar seus dados através de [**Histórico**](#history) ou [**Painel** > **Todas as Chamadas**](#dashboard-tabs). Caso contrário, os dados serão perdidos permanentemente. Todo o histórico de entrada/saída relacionado a cada chamada de API também será excluído.

<br/>

<a id="transform-prompts"></a>
### Prompts de transformação

Use **Configurações** > **Prompts de Transformação** para gerenciar prompts em massa.

Você pode:

- revisar seus prompts salvos
- excluir prompts
- importar prompts de um arquivo
- exportar prompts para backup ou compartilhamento

<br/>

<a id="users"></a>
### Usuários

Use **Usuários** para gerenciar contas de usuário na versão web. Você pode adicionar usuários, atualizar seus dados, redefinir senhas e excluir contas.

<br/>

<a id="api-config"></a>
### Configuração de API

Os provedores suportados são: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e **Ollama** (modelos locais via URL base). Configure apenas os provedores que você utiliza.

**Aplicação web: somente administrador**

As chaves de API são configuradas por meio de variáveis de ambiente do sistema ou do Docker — não são inseridas na interface web. Esta página mostra quais provedores têm uma chave configurada e permite testar cada um clicando no botão **`Testar`**.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> Para alterar uma chave de API, atualize a variável de ambiente na sua configuração do sistema ou do Docker e reinicie o servidor ou contêiner.

<br/>

**Aplicativo desktop**

Use **Configuração de API** para armazenar chaves de API para cada provedor que você utiliza. Para o Ollama, insira a **URL base** em vez de uma chave de API.

<br/>

> 💡 **Dica** <br/>
> Se você não deseja usar uma chave de API ou pagar pelo uso, pode [baixar o Ollama](https://ollama.com) e executar modelos (como `translategemma:4b`) localmente, gratuitamente. Alternativamente, crie uma conta gratuita no OpenRouter (sem cartão de crédito necessário) para usar seus modelos gratuitos, ou obtenha uma chave de API gratuita da Cerebras, Google, Groq ou Mistral AI.

<br/>

- Adicione apenas os provedores necessários. Em **Configurações** > **Modelos**, cada ID de modelo começa com o nome do provedor (por exemplo, `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Para adicionar uma chave de API, insira o valor no campo de texto e clique em **`Salvar`**. Para substituir uma chave existente, clique em **`Editar`**. Para verificar se a chave está funcionando, clique em **`Testar`**. Para a URL base do Ollama, clique sempre em **`Testar`** para verificar a conexão.

<br/>

> ℹ️ **OBSERVAÇÃO**<br/>
> Você não pode ver o valor atual de uma chave de API. Só é possível substituí-la usando o botão **`Editar`**.
> As chaves de API são armazenadas criptografadas na configuração.

<br/>

<a id="about"></a>

### Sobre

A aba **Sobre** exibe:

- o nome do aplicativo
- o número da versão
- a data da build
- um link para o repositório do projeto

<br/><br/>

<a id="common-issues"></a>
## Problemas comuns

Se algo não estiver funcionando como esperado, verifique primeiramente os pontos a seguir.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### O aplicativo não traduz, reescreve ou transforma texto

Verifique se:

- você selecionou um modelo na barra de ferramentas
- pelo menos um modelo está listado em [**Configurações** > **Modelos**](#models)
- sua configuração de API está funcionando

Se estiver usando o aplicativo desktop:

1. Abra [**Configurações** > **Configuração da API**](#api-config).
2. Verifique se pelo menos uma chave de API foi salva.
3. Clique em **Testar** ao lado do provedor para confirmar que a chave está funcionando.

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
### O resultado é muito lento ou muito caro

Experimente uma ou mais das seguintes opções:

- escolha um modelo diferente
- use uma entrada mais curta
- desative **Tradução em tempo real (enquanto digita)** em [**Configurações** > **Configurações Gerais**](#general-settings)
- use modelos gratuitos para tarefas simples (veja [Modelos](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### A interface está em um idioma errado

Clique no ícone de globo na [barra de ferramentas](#toolbar) e escolha seu **Idioma da interface** preferido.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### O texto está muito pequeno ou difícil de ler

Abra [**Configurações** > **Configurações Gerais**](#general-settings) e altere:

- **Família da fonte**
- **Tamanho**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Os gráficos do painel estão vazios

Isso é normal se:

- você estiver usando apenas **modelos gratuitos** (os gráficos de custo ficarão em branco)
- o **filtro de tempo** selecionado não incluir o período em que as chamadas foram feitas — experimente **Tudo** para verificar

Se os gráficos ainda estiverem vazios após selecionar **Tudo**, confirme se as chamadas aparecem na aba [**Histórico**](#history) ou na aba **Todas as chamadas**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### O custo exibe "não disponível" ou parece incorreto

Quando você usa modelos por meio do **OpenRouter**, o aplicativo mostra o valor real gasto conforme relatado pelo OpenRouter.

Para **outros provedores** (OpenAI direto, Anthropic direto, etc.), o custo é estimado a partir dos dados de preços publicados pelo OpenRouter. Se não for encontrado um preço correspondente para um modelo, o custo aparecerá como **não disponível** e não será adicionado ao seu total acumulado.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### O custo total não corresponde à minha fatura do provedor

Todos os valores de custo no aplicativo são **estimativas apenas para referência**, não representam faturas oficiais.

Para que o total se aproxime mais do seu gasto real no OpenRouter, abra [**Configurações** > **Rastreamento de custo**](#cost-tracking) e clique em **Sincronizar com o uso da chave de API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### A página Histórico está ausente na barra lateral

A opção **Manter histórico de execuções** pode estar desativada. Abra [**Configurações** > **Configurações Gerais**](#general-settings) e ative-a. Observe que ativar esta opção não restaura dados do histórico previamente excluídos.

<br/>

<a id="web-app-session-expired"></a>
### Aplicativo web: redirecionado para a página de login inesperadamente

Sua sessão pode ter expirado. Faça login novamente. Se isso acontecer com frequência, verifique a configuração do servidor quanto ao tempo de duração da sessão.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### O painel não mostra dados de outros usuários (web)

Apenas **administradores** podem visualizar dados de todos os usuários através do filtro **Usuário**. Os usuários comuns veem apenas suas próprias atividades, por design.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Eu alterei um prompt e perdi as edições

Ao editar um prompt, clique sempre em **Salvar** antes de clicar em **Voltar para Executar**.

<br/><br/>

<a id="quick-tips"></a>
## Dicas rápidas

- Comece com [**Traduzir**](#translate) para garantir que sua configuração está funcionando antes de avançar para [**Reescrever**](#rewrite) ou [**Transformar**](#transform).
- Use [**Reescrever**](#rewrite) para melhorias comuns na redação.
- Use [**Transformar**](#transform) quando precisar de um fluxo de trabalho repetível para uma tarefa específica.
- Use [**Painel**](#dashboard) se quiser acompanhar uso e custos.
- Use [**Histórico**](#history) para revisar operações anteriores e seus textos completos de entrada/saída.
- Exporte seus prompts regularmente se estiver criando uma biblioteca que deseja manter segura (veja [Transformar Prompts](#transform-prompts)) ou se quiser compartilhá-la com outras pessoas.

<br/><br/>

<a id="disclaimer"></a>

## Aviso

Nomes de produtos e ícones pertencem aos seus respectivos proprietários e são usados apenas para fins de identificação. Este software não possui afiliação com, nem é endossado por, nenhuma das marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licença

Direitos autorais © 2026 Waldemar Scudeller Jr.

[Licença Apache 2.0](LICENSE)