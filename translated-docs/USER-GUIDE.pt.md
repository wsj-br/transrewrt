---
translated_at: "2026-03-26T01:02:07.257Z"
source_hash: "87f5e7618cbfd3084efeecba28440ecccb03450da2ae8fe4c6f91c75cb7f4981"
source_mtime: 1774482557035.2158
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
- **Transformar** - processar texto utilizando instruções personalizadas de IA, denominadas *prompts*.

<br/>

Este guia explica como utilizar a aplicação após esta ter sido instalada e estar em funcionamento. Para obter os passos de instalação, consulte o ficheiro **[README](README.pt.md)** principal.

<br/>

> ℹ️ **NOTA**<br/>
> O Transrewrt está disponível como uma aplicação de ambiente de trabalho para Windows e Linux, e como uma aplicação web autoalojada. Este guia centra-se na utilização diária da aplicação. Quando algo se aplica apenas a uma versão, isso é claramente indicado.

<small>**Ler em outros idiomas:** </small>
<small id="lang-list"> [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Nota sobre traduções da interface e documentação:** Todos os idiomas da interface, exceto o inglês (UK) original, foram traduzidos com recurso a modelos de IA; a redação poderá ser imprecisa ou conter erros.

</small>

<br/>


<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Índice** 

- [Antes de começar](#before-you-start)
  - [Como obter uma chave API gratuita do OpenRouter (aplicação de ambiente de trabalho)](#how-to-get-a-free-openrouter-api-key-desktop-app)
- [Primeiros passos](#getting-started)
- [Partes principais da janela](#main-parts-of-the-window)
  - [Barra lateral](#sidebar)
  - [Barra de ferramentas](#toolbar)
  - [Painéis de entrada e saída](#input-and-output-panels)
- [Traduzir](#translate)
  - [Traduzir texto](#translate-text)
  - [Seleção de idioma](#language-selection)
  - [Definições úteis de tradução](#helpful-translation-settings)
- [Reescrever](#rewrite)
- [Transformar](#transform)
  - [Executar um *prompt* existente](#run-an-existing-prompt)
  - [Se ainda não tiver *prompts*](#if-you-have-no-prompts-yet)
  - [Criar um *prompt* rapidamente](#create-a-prompt-quickly)
  - [Editar um *prompt*](#edit-a-prompt)
  - [Testar um *prompt* antes de o usar](#test-a-prompt-before-using-it)
- [Painel de controlo](#dashboard)
  - [Filtrar os dados](#filter-the-data)
  - [Separadores do painel de controlo](#dashboard-tabs)
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
  - [Prompts de transformação](#transform-prompts)
  - [Utilizadores](#users)
  - [Configuração da API](#api-config)
  - [Sobre](#about)
- [Problemas comuns](#common-issues)
  - [A aplicação não traduz, reescreve nem transforma texto](#the-app-will-not-translate-rewrite-or-transform-text)
  - [A lista de modelos está vazia](#the-model-list-is-empty)
  - [O resultado é demasiado lento ou demasiado caro](#the-result-is-too-slow-or-too-expensive)
  - [A interface está no idioma errado](#the-interface-is-in-the-wrong-language)
  - [O texto é demasiado pequeno ou difícil de ler](#the-text-is-too-small-or-hard-to-read)
  - [Os gráficos do painel de controlo estão vazios](#dashboard-charts-are-empty)
  - [O custo mostra "não disponível" ou parece incorreto](#cost-shows-not-available-or-seems-wrong)
  - [O custo total não corresponde à fatura do meu fornecedor](#total-cost-does-not-match-my-provider-bill)
  - [A página Histórico desapareceu da barra lateral](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicação web: redirecionamento inesperado para a página de início de sessão](#web-app-redirected-to-the-login-page-unexpectedly)
  - [O painel de controlo não mostra dados de outros utilizadores (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Alterei um *prompt* e perdi as edições](#i-changed-a-prompt-and-lost-the-edits)
- [Dicas rápidas](#quick-tips)
- [Aviso legal](#disclaimer)
- [Licença](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Antes de começar

Para usar o Transrewrt, você precisa ter acesso a pelo menos um provedor de IA. Os provedores suportados são: [OpenRouter](https://openrouter.ai) (que reúne muitos modelos), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e [Ollama](https://ollama.com) para modelos locais.

Você não precisa selecionar um modelo pago para começar. Assim que adicionar sua chave de API do OpenRouter, o aplicativo ativa automaticamente uma opção **gratuita** integrada do OpenRouter. Isso permite que você comece a traduzir, reescrever e transformar textos imediatamente. Alternativamente, você também pode obter uma chave de API gratuita da Cerebras, Google, Groq ou Mistral AI.

Em termos simples:

- Um **modelo** é o mecanismo de IA que realiza o trabalho. Os modelos são listados com um **prefixo do provedor** (por exemplo `openrouter/…`, `openai/…`, `ollama/…`).
- Uma **chave de API** (ou, no caso do Ollama, uma **URL base**) é como o aplicativo se conecta ao provedor.

Se você estiver usando o **aplicativo desktop**, adicione as chaves em [**Configurações** > **Configuração de API**](#api-config) para cada provedor que usar. Para uso exclusivo do OpenRouter, veja [Como obter uma chave de API](#how-to-get-an-api-key-desktop-app) abaixo. Se você não quiser usar uma chave de API, pode instalar o Ollama (de [ollama.com](https://ollama.com)) e usar modelos locais, como o `translategemma:4b`.

Se você estiver usando a **versão web**, o proprietário do servidor configura os provedores usando variáveis de ambiente, portanto você não pode inserir chaves de API diretamente no aplicativo.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Como obter uma chave de API gratuita do OpenRouter (aplicativo desktop)

Se você estiver usando o aplicativo desktop, siga estes passos:

1. Acesse [OpenRouter](https://openrouter.ai) no seu navegador web.
2. Crie uma conta ou faça login.
3. Abra a página [Keys](https://openrouter.ai/keys).
4. Clique no botão para criar uma nova chave de API.
5. Dê um nome à chave para poder reconhecê-la posteriormente.
6. Copie a nova chave de API.
7. Volte ao Transrewrt e abra **Configurações** > **Configuração de API**.
8. Cole a chave em **Chave de API do OpenRouter** (em **Configurações** > **Configuração de API**).
9. Clique em **Testar chave do OpenRouter** para garantir que está funcionando.

<br/><br/>

<a id="getting-started"></a>
## Primeiros passos

Se esta for a sua primeira vez usando o Transrewrt, siga esta ordem:

1. Abra o aplicativo.
2. Escolha seu **idioma da interface** no ícone do globo, se necessário.
3. Se estiver usando o **aplicativo desktop**, abra [**Configurações** > **Configuração de API**](#api-config), adicione uma chave de API para pelo menos um provedor (por exemplo, OpenRouter) e clique em **Testar** para verificar se está funcionando.
4. Abra [**Configurações** > **Modelos**](#models) e adicione um ou mais modelos a **Modelos selecionados**.
5. Abra [**Configurações** > **Idiomas**](#languages) e escolha seus **Idiomas principais**, caso deseje que os idiomas mais usados apareçam primeiro.
6. Vá até **Traduzir** e execute uma tradução simples para confirmar que tudo está funcionando.
7. Após isso funcionar, experimente **Reescrever** e depois **Transformar**.

Essa ordem é importante. Ela evita o problema mais comum no primeiro uso: tentar executar uma tarefa antes de o aplicativo ter uma conexão de API funcional ou um modelo selecionado.

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

Use a barra lateral para navegar pelo aplicativo. Você pode recolher a barra lateral para ganhar mais espaço clicando no ícone ao lado do logotipo do aplicativo.

<br/>

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/pt/sidebar.png" alt="Barra Lateral do Aplicativo" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Traduzir</strong> abre o espaço de trabalho de tradução.</li><br/>
        <li><strong>Reescrever</strong> abre o espaço de trabalho de reescrita.</li><br/>
        <li><strong>Transformar</strong> abre o espaço de trabalho de prompt personalizado.</li><br/>
        <li><strong>Painel</strong> mostra informações de uso e custo.</li><br/>
        <li><strong>Configurações</strong> abre o painel de configurações.</li><br/>
        <li><strong>Histórico</strong> mostra o histórico de uso com o texto de entrada e saída.</li><br/>
        <li><strong>Utilizador</strong> mostra o nome de utilizador do utilizador logado (apenas na versão web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>

### Barra de ferramentas

A barra de ferramentas altera-se ligeiramente consoante onde se encontra na aplicação.

- À esquerda, mostra o nome da página atual.
- À direita, mostra o **seletor de modelo** e o controlo de **Idioma da interface**.

O **seletor de modelo** permite-lhe escolher qual motor de IA utilizar para a tarefa atual.

  ![Seletor de modelo](../images/screenshots/pt/model-selector.png)

Alguns modelos gratuitos podem não estar sempre disponíveis – por vezes estão offline ou têm um limite de utilização. Se isto acontecer, a aplicação removerá automaticamente esse modelo da sua lista de modelos disponíveis. Para controlar quais os modelos que aparecem, vá a [**Definições** > **Modelos**](#models) e edite a sua lista de modelos. 
Também pode abrir as definições do modelo diretamente clicando no ícone do fornecedor à esquerda do nome do modelo na barra de ferramentas.

<br/>

O **ícone de globo + código do idioma** altera o idioma da interface da aplicação, como menus e botões. **Não** altera os idiomas de tradução usados em **Traduzir**.

  ![Seletor de idioma da interface](../images/screenshots/pt/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Painéis de entrada e saída

A maioria dos espaços de trabalho utiliza um painel **Entrada** no lado esquerdo e um painel **Saída** no lado direito.

Cada painel também mostra:

| **Entrada**                                                                  | **Saída**                                                                                                                                                   |
|------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| - Contagem de caracteres <br/>- Contagem de palavras <br/>- Contagem de parágrafos | - Tempo que a tarefa levou<br/>- **TPS** (tokens por segundo)<br/>- Contagem de caracteres, palavras e parágrafos<br/>- Modelo utilizado |


Se estiver com dúvidas sobre os termos técnicos:

- **Token** significa um pequeno fragmento de texto. Pode pensar nele como parte de uma palavra ou numa palavra curta.
- **TPS** significa quantos desses fragmentos de texto o modelo processou por segundo.

<br/>

Também pode monitorizar o custo de cada operação (se disponível) e o custo total, ativando a opção `Mostrar informação de custo nas ações` em [**Definições** > **Definições gerais**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Traduzir

Utilize **Traduzir** quando quiser converter texto de um idioma para outro.

![Espaço de trabalho de tradução](../images/screenshots/pt/translate.png)

<br/>

<a id="translate-text"></a>
### Traduzir texto

1. Abra **Traduzir**.
2. Escolha um idioma em **De**.
3. Escolha um idioma em **Para**.
4. Escolha um modelo na barra de ferramentas.
5. Digite ou cole o texto no campo **Entrada**.
6. Clique em **Traduzir**.
7. Leia o resultado em **Saída**.
8. Use o botão de copiar se desejar copiar o resultado.

<br/>

<a id="language-selection"></a>
### Seleção de idioma

- **De** pode ser um idioma específico ou **Detetar idioma**.
- **Para** é o idioma que deseja ter como resultado.

Os seus **Principais idiomas** selecionados aparecem no topo da lista. Pode defini-los em [**Definições** > **Idiomas**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Definições úteis de tradução

Em [**Definições** > **Definições Gerais**](#general-settings), pode alterar o comportamento da tradução:

- **Traduzir automaticamente ao colar** executa uma tradução logo que cole texto.
- **Copiar resultado automaticamente para a área de transferência** copia o resultado automaticamente após uma execução bem-sucedida.
- **Tradução em tempo real (enquanto escreve)** executa traduções enquanto escreve.
- **Tempo limite (ms)** controla quanto tempo a aplicação espera antes de executar uma tradução em tempo real.
- **Enter** controla o que acontece quando prime `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Reescrever

Utilize **Reescrever** quando desejar melhorar a redação sem alterar o significado principal.

![Espaço de trabalho de reescrita](../images/screenshots/pt/rewrite.png)

Isto é útil para:

- corrigir ortografia e gramática
- tornar o texto mais claro
- tornar o texto mais formal ou menos formal
- encurtar ou expandir texto
- tornar o texto mais técnico

<br/>

> 💡 **DICA**<br/>
> Quando utiliza o modo "**Verificar Ortografia e Gramática**", um botão `Mostrar alterações` aparece no painel de saída.
> Clique neste botão para alternar a exibição das correções, mostrando ou ocultando as alterações específicas feitas ao seu texto.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformar

Use o **Transformar** quando quiser que a IA siga um conjunto personalizado de instruções.

![Área de trabalho do Transformar](../images/screenshots/pt/transform.png)

Esta é a área mais flexível do aplicativo. Você pode usá-la para tarefas como:

- resumir anotações
- transformar texto informal em um e-mail polido
- extrair pontos principais
- converter texto em um formato específico
- qualquer outra atividade personalizada com o texto de entrada

<br/>

<a id="run-an-existing-prompt"></a>
### Executar um prompt existente

1. Abra o **Transformar**.
2. Escolha um prompt da lista de prompts.
3. Se aparecer uma caixa de idioma **Destino**, selecione um idioma, se desejar.
4. Digite ou cole um texto na área **Entrada**.
5. Clique em **Transformar**.
6. Leia o resultado em **Saída**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Se você ainda não tiver prompts

Se sua lista de prompts estiver vazia, clique em **Carregar prompts de exemplo**. Isso adicionará exemplos embutidos para que você possa começar rapidamente.

<br/>

> ℹ️ **NOTA**<br/>
> Os prompts de exemplo são fornecidos em inglês. Após carregá-los, você pode editar um prompt e usar **Traduzir prompt** para traduzi-lo para o seu idioma.

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

![Gerar prompt](../images/screenshots/pt/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Editar um prompt

Quando você cria ou edita um prompt, o editor aparece à esquerda e uma área de teste aparece à direita.

![Editor de prompt no Transformar](../images/screenshots/pt/transform-prompt-edit.png)

Os principais campos são:

- **Nome do prompt**: o nome exibido na lista de prompts.
- **Instruções do prompt (opcional)**: uma dica curta mostrada ao usuário ao executar o prompt.
- **Função da IA**: a função geral atribuída à IA, como 'Você é um assistente útil.'
- **Instruções da IA (uma por linha)**: as regras específicas que você deseja que a IA siga.
- **Descrição da saída**: uma palavra curta que descreve o resultado, como 'resumo' ou 'reescrita'.
- **Temperatura (0,0 → 1,0)**: como o modelo se comportará; veja abaixo.
- **Solicitar idioma de destino**: adiciona um seletor de idioma de destino quando o prompt for executado.

Se o termo técnico **Temperatura** for novo para você, pense assim:

- Uma temperatura **mais baixa** produz resultados mais estáveis e previsíveis.
- Uma temperatura **mais alta** produz mais variedade e criatividade.

Você também pode usar:

- **`Gerar prompt`** para criar um novo rascunho a partir de uma descrição simples
- **`Aprimorar prompt`** para refinar um prompt existente
- **`Traduzir prompt`** para traduzir os campos do prompt

<br/>

> ⚠️ **AVISO**<br/>
> Clique em **`Salvar`** antes de clicar em **`Voltar para Executar`**. Se você voltar sem salvar, suas alterações serão perdidas.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Testar um prompt antes de usá-lo

O painel de teste à direita permite experimentar seu prompt com texto de exemplo antes de usá-lo no trabalho do dia a dia.

Isso é útil quando:

- você está criando um novo prompt
- você está comparando duas versões de um prompt
- você deseja verificar o tom, o tamanho ou o formato da saída

<br/>

> ℹ️ **NOTA**<br/>
> Você pode exportar e importar prompts salvos em [**Configurações** > **Prompts do Transformar**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="dashboard"></a>
## Painel

Use o **Painel** para ver o quanto você está usando o aplicativo e quanto isso está custando (para modelos pagos).

![Resumo do Painel](../images/screenshots/pt/dashboard-summary.png)


<br/>

> ℹ️ **NOTA**<br/>
> Se você usar apenas modelos gratuitos, os gráficos relacionados ao custo ficarão em branco.

<br/>

<a id="filter-the-data"></a>
### Filtrar os dados

Use os botões de filtro na parte superior para alterar o intervalo de tempo.

![Filtros do Painel](../images/screenshots/pt/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> O filtro **Usuário** só é visível para administradores na versão web. Usuários comuns não verão esse filtro, e ele não está disponível no aplicativo para desktop.

<br/>

<a id="dashboard-tabs"></a>

### Separadores do painel

- **Resumo** oferece uma visão geral do uso e custo.
- **Por Utilização** divide a atividade por idioma de tradução, modo de reescrita e prompt de transformação.
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

Isso é útil se você desejar analisar a atividade fora do aplicativo ou compartilhar um relatório.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Excluir registros armazenados de um modelo

Em **Por Modelo** ou **Todas as Chamadas**, você pode remover registros armazenados de um modelo clicando no ícone da "lixeira".

> ⚠️ **AVISO**<br/>
> A exclusão de registros armazenados não pode ser desfeita. Use isso apenas se tiver certeza de que não precisa mais desse histórico.

Para excluir todos os dados ou remover registros com base na idade, acesse [**Definições** > **Controle de Custo**](#cost-tracking). Lá você encontrará opções para excluir todos os dados armazenados ou apenas dados anteriores a uma determinada data.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Histórico

Clique em **Histórico** para ver o histórico das suas ações dentro do **Transrewrt**, incluindo a entrada e saída de cada operação.

![Página de histórico](../images/screenshots/pt/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrar os dados

**Histórico** utiliza os mesmos filtros da página **Painel**. Use-os para selecionar o intervalo de tempo.

![Filtros do painel](../images/screenshots/pt/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> O filtro **Utilizador** só é visível para administradores na versão web. Utilizadores regulares não verão esse filtro, e ele não está disponível no aplicativo de desktop.

<br/>

<a id="export-history-data"></a>
### Exportar dados do histórico

A página de histórico pode exportar os dados filtrados nos seguintes formatos:

- **JSON**
- **CSV**
- **XLSX**

Isso é útil se você desejar analisar a atividade fora do aplicativo ou compartilhar um relatório.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Definições

Abra **Definições** na barra lateral para personalizar o comportamento do aplicativo.

Os separadores disponíveis dependem da plataforma e do seu papel:

  | Separador               | Desktop | Web (admin) | Web (utilizador normal) |
  |------------------------|:-------:|:-----------:|:----------------------:|
  | Definições Gerais      |   sim   |     sim     |          sim           |
  | Modelos                |   sim   |     sim     |          sim           |
  | Idiomas                |   sim   |     sim     |          sim           |
  | Controle de Custo      |   sim   |     sim     |           —            |
  | Prompts de Transformação |   sim   |     sim     |          sim           |
  | Utilizadores           |    —    |     sim     |           —            |
  | Configuração da API    |   sim   |     sim     |           —            |
  | Sobre                  |   sim   |     sim     |          sim           |

<br/>

> ℹ️ **NOTA**<br/>
> Na versão web, cada utilizador tem a sua própria configuração. Definições como modelos selecionados, idiomas, opções gerais e prompts de transformação são armazenadas por utilizador. As alterações que fizer não afetam outros utilizadores.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Definições gerais

Use **Definições Gerais** para controlar o comportamento da digitação, se os detalhes de execução são armazenados no **Histórico** e a aparência.

**Comportamento**

- **Comportamento do ENTER** escolhe se `Enter` executa a tarefa ou insere uma nova linha.
- **Traduzir automaticamente ao colar** inicia a tradução assim que você colar o texto.
- **Copiar resultado automaticamente para a área de transferência** copia automaticamente os resultados bem-sucedidos.
- **Tradução em tempo real (enquanto digita)** traduz enquanto você digita.
- **Tempo limite (ms)** define o tempo de espera para a tradução em tempo real.

**Histórico**

- **Manter histórico de execução** controla se cada tradução, reescrita e transformação armazena o **texto de entrada e saída** para a visualização do **Histórico** na barra lateral. Desativar essa opção solicita confirmação; se confirmar, o texto histórico armazenado será removido da base de dados.
- **Eliminar dados do histórico** permite remover texto armazenado com base na idade (por exemplo, com mais de alguns meses ou **todos os dados (limpar)**) usando a opção **Eliminar dados**. Isto afeta apenas o texto de execuções guardadas para a vista **Histórico**; **não** elimina totais de custo ou utilização. Para remover ou cortar dados de **custo**, use [**Definições** > **Controle de Custo**](#cost-tracking).

**Aparência**

- **Mostrar informação de custo nas ações** controla a exibição do custo por operação (se disponível) e do custo total nos painéis de saída de Traduzir, Reescrever e Transformar.
- **Casas decimais do custo** altera a forma como são exibidas as casas decimais do custo.
- **Apenas web:** **mostrar margem à volta da aplicação** adiciona espaço extra à volta da interface.
- **Família da Fonte** altera a fonte de escrita nos painéis de texto.
- **Tamanho** altera o tamanho da fonte.

<br/>

<a id="models"></a>

### Modelos

Use **Configurações** > **Modelos** para escolher quais modelos aparecem na barra de ferramentas.

![Separador Modelos nas configurações](../images/screenshots/pt/settings-models.png)

A página tem duas listas:

- **Modelos Disponíveis** à esquerda
- **Modelos Selecionados** à direita

Controlos úteis incluem:

- **Pesquisar modelos...** para encontrar um modelo pelo nome
- Etiquetas **Provedor** para reduzir a lista a um motor (OpenRouter, OpenAI, Ollama, …)
- **Apenas Gratuitos** para mostrar apenas modelos gratuitos
- **Atualizar** para recarregar a lista
- **Expandir Tudo** e **Recolher Tudo** quando estiver a ordenar por provedor

Os IDs dos modelos incluem o prefixo do provedor (por exemplo `openrouter/…` vs `openai/…`). Etiquetas como **OpenAI (OpenRouter)** vs **OpenAI (direto)** mostram como o tráfego é encaminhado.

> ℹ️ **NOTA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) é um modelo de encaminhamento, não um modelo de chat geral: sua resposta é JSON que descreve corpos de pedido da API OpenRouter (por exemplo, um array `requests` com `model` e `messages`). Se o usar em **Traduzir**, **Reescrever** ou **Transformar**, o painel de saída mostrará esse JSON em vez de texto finalizado. Escolha um modelo de texto normal para essas tarefas. Veja a [página do modelo Body Builder](https://openrouter.ai/openrouter/bodybuilder) no OpenRouter.

Ações:

 - Para adicionar um modelo, clique em **Adicionar** ou em qualquer lugar na entrada.

 - Para remover um modelo, clique em **X** junto a ele em **Modelos Selecionados** ou em **Selecionado** na entrada em Modelos Disponíveis.

 - Para limpar a lista, clique em **Deselecionar todos**. O modelo gratuito obrigatório permanecerá na lista.

<br/>

> ℹ️ **NOTA**<br/>
> Se não quiser adicionar créditos ao OpenRouter imediatamente, comece por ativar **Apenas Gratuitos** e escolher os modelos gratuitos (sem necessidade de cartão de crédito). Também pode usar o Ollama para executar modelos localmente sem qualquer chave de API.

<br/>

<a id="languages"></a>
### Idiomas

Use **Configurações** > **Idiomas** para organizar as listas de idiomas usadas na aplicação.

- **Idiomas principais** são fixados perto do topo das listas de idiomas em **Traduzir** e **Transformar**.
- **Idioma personalizado** permite adicionar um idioma que não está na lista integrada.

Se adicionar um idioma personalizado, este aparecerá nos seletores de idioma ao lado das opções integradas.

<br/>

<a id="cost-tracking"></a>
### Controlo de custos

Use **Configurações** > **Controlo de Custos** para gerir informações de custo.

- **Custo Total** mostra o total acumulado.
- **Copiar Valor** copia o total para a área de transferência.
- **Repor Custo** redefine o total armazenado para zero.
- **Sincronizar com uso da chave API** define o total de acordo com o uso informado pela sua conta OpenRouter (apenas OpenRouter).
- **Uso da Chave API** mostra detalhes de uso do OpenRouter, se disponível.
- **Eliminar dados de custo** remove todos os dados, ou apenas entradas anteriores a uma data selecionada.

**Controlo de custos:** Quando utiliza modelos OpenRouter, a aplicação mostra o seu uso e gastos reais com base nas informações de custo do OpenRouter. Para todos os outros provedores, a aplicação estima os custos com base nos preços publicados pelo OpenRouter; se um preço não estiver disponível, a estimativa poderá ser zero.

<br/>

> ℹ️ **NOTA**<br/>
>  **Todos os valores de custo são estimativas apenas para sua referência, não são faturas oficiais.**

<br/>

> ⚠️ **AVISO**<br/>
> A eliminação de dados não pode ser desfeita. Antes de eliminar, certifique-se de fazer cópia de segurança dos seus dados ou exportá-los através de [**Histórico**](#history) 
> ou [**Painel** > **Todas as Chamadas**](#dashboard-tabs), caso contrário serão permanentemente perdidos. 
> Todo o histórico de entrada/saída relacionado com cada entrada de chamada de API também será eliminado.

<br/>

<a id="transform-prompts"></a>
### Prompts de Transformação

Use **Configurações** > **Prompts de Transformação** para gerir prompts em massa.

Pode:

- rever os seus prompts guardados
- eliminar prompts
- importar prompts de um ficheiro
- exportar prompts para cópia de segurança ou partilha

<br/>

<a id="users"></a>
### Utilizadores

Use **Utilizadores** para gerir contas de utilizador na versão web. Pode adicionar utilizadores, atualizar os seus detalhes, repor palavras-passe e eliminar contas.

<br/>

<a id="api-config"></a>
### Configuração da API

Os provedores suportados são: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e **Ollama** (modelos locais através de um URL base). Só precisa de configurar os provedores que utiliza.

**Aplicação web: apenas administrador**

As chaves API são configuradas através de variáveis de ambiente do sistema ou do Docker — não são introduzidas na interface web. Esta página mostra quais os provedores que têm uma chave configurada e permite testar cada um clicando no botão **`Testar`**.

<br/>

> ℹ️ **NOTA**<br/>
> Para alterar uma chave API, atualize a variável de ambiente na sua configuração do sistema ou do Docker e reinicie o servidor ou o recipiente.

<br/>

**Aplicação de desktop**

Use **Configuração da API** para armazenar chaves API para cada provedor que utiliza. Para o Ollama, introduza o **URL base** em vez de uma chave API.

<br/>

> 💡 **Dica** <br/>
> Se não quiser usar uma chave API nem pagar pelo uso, pode [descarregar o Ollama](https://ollama.com) e executar modelos (como `translategemma:4b`) localmente na sua máquina gratuitamente. Alternativamente, pode criar uma conta OpenRouter gratuita (sem necessidade de cartão de crédito) para usar os seus modelos gratuitos, ou obter uma chave API gratuita da Cerebras, Google, Groq ou Mistral AI.

<br/>

- Adicione apenas os provedores de que necessita. Em **Configurações** > **Modelos**, cada ID de modelo começa com o provedor (por exemplo `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Para adicionar uma chave API, introduza o valor no campo de texto e clique em **`Guardar`**. Para substituir uma chave existente, clique em **`Editar`**. Para verificar se uma chave está a funcionar, clique em **`Testar`**. Para o URL base do Ollama, clique sempre em **`Testar`** para verificar a ligação.

<br/>

> ℹ️ **NOTA**<br/>
> Não pode ver o valor atual de uma chave API. Só pode substituí-la utilizando o botão **`Editar`**.
> As chaves API são armazenadas encriptadas na configuração.

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

Se alguma coisa não funcionar como esperado, verifique primeiro os seguintes pontos.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### O aplicativo não traduz, reescreve ou transforma texto

Verifique se:

- você selecionou um modelo na barra de ferramentas
- pelo menos um modelo está listado em [**Configurações** > **Modelos**](#models)
- sua configuração de API está funcionando

Se estiver usando o aplicativo desktop:

1. Abra [**Configurações** > **Configuração da API**](#api-config).
2. Verifique se pelo menos uma chave de API está salva.
3. Clique em **Testar** ao lado do provedor para confirmar que a chave está funcionando.

<br/>

<a id="the-model-list-is-empty"></a>
### A lista de modelos está vazia

Abra [**Configurações** > **Modelos**](#models) e clique em **Atualizar**.

Se necessário:

- pesquise por um modelo
- ative a opção **Apenas gratuitos**
- adicione um ou mais modelos aos **Modelos Selecionados**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### O resultado é muito lento ou muito caro

Tente uma ou mais das seguintes opções:

- escolha um modelo diferente
- use uma entrada mais curta
- desative **Tradução em tempo real (enquanto digita)** em [**Configurações** > **Configurações Gerais**](#general-settings)
- use modelos gratuitos para tarefas simples (veja [Modelos](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### A interface está em outro idioma

Clique no ícone do globo na [barra de ferramentas](#toolbar) e escolha seu **Idioma da interface** preferido.

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

- você usa apenas **modelos gratuitos** (os gráficos de custo ficarão em branco)
- o **filtro de tempo** selecionado não cobre o período em que as chamadas foram feitas — experimente **Tudo** para verificar

Se os gráficos ainda estiverem vazios após selecionar **Tudo**, confirme se as chamadas aparecem em [**Histórico**](#history) ou na aba **Todas as Chamadas**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### O custo mostra "não disponível" ou parece incorreto

Quando você usa modelos por meio do **OpenRouter**, o aplicativo mostra seu gasto real informado pelo OpenRouter.

Para **outros provedores** (OpenAI direto, Anthropic direto, etc.), o custo é estimado com base nos dados de preços publicados pelo OpenRouter. Se não for encontrado um preço compatível para um modelo, o custo aparecerá como **não disponível** e não será incluído no seu total acumulado.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### O custo total não corresponde à minha fatura do provedor

Todos os valores de custo no aplicativo são **estimativas apenas para referência**, não são demonstrativos oficiais de cobrança.

Para aproximar o total do seu gasto real no OpenRouter, abra [**Configurações** > **Acompanhamento de Custo**](#cost-tracking) e clique em **Sincronizar com o uso da chave de API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### A página Histórico está ausente na barra lateral

A opção **Manter histórico de execuções** pode estar desativada. Abra [**Configurações** > **Configurações Gerais**](#general-settings) e ative-a. Observe que ativá-la não restaura dados históricos que já foram excluídos anteriormente.

<br/>

<a id="web-app-session-expired"></a>
### Aplicativo web: redirecionado inesperadamente para a página de login

Sua sessão pode ter expirado. Faça login novamente. Se isso acontecer com frequência, verifique a configuração do servidor quanto às definições de duração da sessão.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### O painel não mostra dados de outros usuários (web)

Apenas **administradores** podem visualizar dados de todos os usuários por meio do filtro **Usuário**. Usuários comuns veem apenas suas próprias atividades, conforme designado.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Eu modifiquei um prompt e perdi as alterações

Ao editar um prompt, sempre clique em **Salvar** antes de clicar em **Voltar para Executar**.

<br/><br/>

<a id="quick-tips"></a>
## Dicas rápidas

- Comece com [**Traduzir**](#translate) para garantir que sua configuração está funcionando antes de avançar para [**Reescrever**](#rewrite) ou [**Transformar**](#transform).
- Use [**Reescrever**](#rewrite) para melhorias comuns de texto.
- Use [**Transformar**](#transform) quando precisar de um fluxo de trabalho repetível para uma tarefa específica.
- Use [**Painel**](#dashboard) se quiser acompanhar o uso e o custo.
- Use [**Histórico**](#history) para revisar operações anteriores e os textos completos de entrada e saída.
- Exporte prompts regularmente se estiver criando uma biblioteca de prompts que deseja preservar (veja [Transformar Prompts](#transform-prompts)) ou se quiser compartilhá-la com outras pessoas.

<br/><br/>

<a id="disclaimer"></a>

## Aviso

Os nomes e ícones dos produtos pertencem aos respectivos proprietários e são usados apenas para fins de identificação. Este software não é afiliado nem endossado por nenhuma das marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licença

Direitos autorais © 2026 Waldemar Scudeller Jr.

[Licença Apache 2.0](LICENSE)