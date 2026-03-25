---
translated_at: "2026-03-25T21:56:19.932Z"
source_hash: "6ca7b21e820e8ee121cd93bbf98806547c5c3ce7914799891d923201bd2c4466"
source_mtime: 1774468804877.8855
model: "qwen/qwen3-235b-a22b-2507"
---
![Transrewrt banner](../images/transrewrt_banner.png)


<a id="transrewrt-user-guide"></a>
# Guia do Utilizador

<br/>

<a id="introduction"></a>
## Introdução

O Transrewrt ajuda-o a trabalhar com texto de três formas principais:

- **Traduzir** - converter texto de um idioma para outro.
- **Reescrever** - reformatar texto com um estilo diferente, por exemplo, mais claro, mais curto ou mais formal.
- **Transformar** - processar texto usando instruções personalizadas de IA chamadas *prompts*.

<br/>

Este guia explica como usar a aplicação depois de instalada e em execução. Para obter instruções de instalação, consulte o ficheiro **[README](README.pt.md)** principal.

<br/>

> ℹ️ **NOTA**<br/>
> O Transrewrt está disponível como uma aplicação de ambiente de trabalho para Windows e Linux e como uma aplicação web auto-hospedada. Este guia centra-se no uso diário da aplicação. Quando algo se aplica apenas a uma versão, isso é claramente indicado.

<small>**Leia em outros idiomas:** [English (UK)](USER-GUIDE.pt.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Nota sobre traduções da interface e documentação:** Todos os idiomas da interface, exceto o inglês (UK) original, foram traduzidos utilizando modelos de IA; a redação pode ser imprecisa ou conter erros.

</small>

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
  - [Definições úteis para tradução](#helpful-translation-settings)
- [Reescrever](#rewrite)
- [Transformar](#transform)
  - [Executar um *prompt* existente](#run-an-existing-prompt)
  - [Se ainda não tiver *prompts*](#if-you-have-no-prompts-yet)
  - [Criar um *prompt* rapidamente](#create-a-prompt-quickly)
  - [Editar um *prompt*](#edit-a-prompt)
  - [Testar um *prompt* antes de o usar](#test-a-prompt-before-using-it)
- [Painel de controlo](#dashboard)
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
  - [Controlo de custos](#cost-tracking)
  - [Prompts de transformação](#transform-prompts)
  - [Utilizadores](#users)
  - [Configuração da API](#api-config)
  - [Sobre](#about)
- [Problemas comuns](#common-issues)
  - [A aplicação não traduz, reescreve ou transforma texto](#the-app-will-not-translate-rewrite-or-transform-text)
  - [A lista de modelos está vazia](#the-model-list-is-empty)
  - [O resultado é demasiado lento ou caro](#the-result-is-too-slow-or-too-expensive)
  - [A interface está no idioma errado](#the-interface-is-in-the-wrong-language)
  - [O texto é demasiado pequeno ou difícil de ler](#the-text-is-too-small-or-hard-to-read)
  - [Os gráficos do painel estão vazios](#dashboard-charts-are-empty)
  - [O custo mostra "não disponível" ou parece incorreto](#cost-shows-not-available-or-seems-wrong)
  - [O custo total não corresponde à fatura do fornecedor](#total-cost-does-not-match-my-provider-bill)
  - [A página Histórico está em falta na barra lateral](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicação web: redirecionado inesperadamente para a página de início de sessão](#web-app-redirected-to-the-login-page-unexpectedly)
  - [O painel não mostra dados de outros utilizadores (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Alterei um *prompt* e perdi as edições](#i-changed-a-prompt-and-lost-the-edits)
- [Dicas rápidas](#quick-tips)
- [Aviso legal](#disclaimer)
- [Licença](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>

## Antes de começar

Para usar o Transrewrt, você precisa ter acesso a pelo menos um provedor de IA. Os provedores suportados são: [OpenRouter](https://openrouter.ai) (que agrega diversos modelos), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e [Ollama](https://ollama.com) para modelos locais.

Você não precisa escolher um modelo pago para começar. Assim que adicionar sua chave de API do OpenRouter, o aplicativo ativa automaticamente uma opção integrada **gratuita** do OpenRouter. Isso permite que você comece a traduzir, reescrever e transformar textos imediatamente. Alternativamente, você também pode obter uma chave de API gratuita da Cerebras, Google, Groq ou Mistral AI.

Em termos simples:

- Um **modelo** é o motor de IA que realiza o trabalho. Os modelos são listados com um **prefixo do provedor** (por exemplo, `openrouter/…`, `openai/…`, `ollama/…`).
- Uma **chave de API** (ou, no caso do Ollama, uma **URL base**) é o meio pelo qual o aplicativo se conecta a esse provedor.

Se estiver usando o **aplicativo desktop**, adicione as chaves em [**Configurações** > **Config. API**](#api-config) para cada provedor que utilizar. Para uso exclusivo do OpenRouter, veja [Como obter uma chave de API](#how-to-get-an-api-key-desktop-app) abaixo. Caso não deseje usar uma chave de API, você pode instalar o Ollama (em [ollama.com](https://ollama.com)) e usar modelos locais, como o `translategemma:4b`.

Se estiver usando a **versão web**, o proprietário do servidor configura os provedores com variáveis de ambiente, portanto, você não pode inserir chaves de API diretamente no aplicativo.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Como obter uma chave de API gratuita do OpenRouter (aplicativo desktop)

Se estiver usando o aplicativo desktop, siga estes passos:

1. Acesse [OpenRouter](https://openrouter.ai) em seu navegador web.
2. Crie uma conta ou faça login.
3. Abra a página [Keys](https://openrouter.ai/keys).
4. Clique no botão para criar uma nova chave de API.
5. Dê um nome à chave para poder reconhecê-la posteriormente.
6. Copie a nova chave de API.
7. Volte ao Transrewrt e abra **Configurações** > **Config. API**.
8. Cole a chave em **Chave de API OpenRouter** (em **Configurações** > **Config. API**).
9. Clique em **Testar chave OpenRouter** para garantir que ela funcione.

<br/><br/>

<a id="getting-started"></a>
## Primeiros passos

Se esta for a sua primeira vez usando o Transrewrt, siga esta ordem:

1. Abra o aplicativo.
2. Se necessário, escolha seu **idioma da interface** no ícone do globo.
3. Se estiver usando o **aplicativo desktop**, abra [**Configurações** > **Config. API**](#api-config), adicione uma chave de API para pelo menos um provedor (por exemplo, OpenRouter) e clique em **Testar** para verificar se está funcionando.
4. Abra [**Configurações** > **Modelos**](#models) e adicione um ou mais modelos em **Modelos selecionados**.
5. Abra [**Configurações** > **Idiomas**](#languages) e escolha seus **Idiomas principais**, caso queira que os idiomas mais usados apareçam primeiro.
6. Vá até **Traduzir** e execute uma tradução simples para confirmar se tudo está funcionando.
7. Quando funcionar, experimente **Reescrever** e depois **Transformar**.

Essa ordem é importante. Ela evita o problema mais comum no primeiro uso: tentar executar uma tarefa antes de o aplicativo ter uma conexão de API ativa ou um modelo selecionado.

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

Use a barra lateral para navegar pelo aplicativo. Você pode recolhê-la para ter mais espaço, clicando no ícone ao lado do logotipo do aplicativo.

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
        <li><strong>Transformar</strong> abre o espaço de trabalho com prompt personalizado.</li><br/>
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

A barra de ferramentas muda ligeiramente dependendo de onde você está na aplicação.

- À esquerda, mostra o nome da página atual.
- À direita, mostra o **seletor de modelo** e o controlo da **língua da interface**.

O **seletor de modelo** permite escolher qual motor de IA utilizar para a tarefa atual.

  ![Seletor de modelo](../images/screenshots/pt/model-selector.png)

Alguns modelos gratuitos podem não estar sempre disponíveis — por vezes estão offline ou têm um limite de utilização. Se isto acontecer, a aplicação removerá automaticamente esse modelo da sua lista de modelos disponíveis. Para controlar quais os modelos que aparecem, vá a [**Definições** > **Modelos**](#models) e edite a sua lista de modelos. 
Também pode abrir diretamente as definições do modelo clicando no ícone do fornecedor à esquerda do nome do modelo na barra de ferramentas.

<br/>

O **ícone do globo + código de idioma** altera o idioma da interface da aplicação, como menus e botões. Isto **não** altera os idiomas de tradução utilizados em **Traduzir**.

  ![Seletor de idioma da interface](../images/screenshots/pt/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Painéis de entrada e saída

A maioria dos espaços de trabalho utiliza um painel de **Entrada** no lado esquerdo e um painel de **Saída** no lado direito.

Cada painel também mostra:

| **Entrada**                                                            | **Saída**                                                                                                                      |
|------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| - Contagem de caracteres <br/>- Contagem de palavras <br/>- Contagem de parágrafos   <br/> | - Tempo que a tarefa demorou<br/>- **TPS** (tokens por segundo)<br/>- Contagem de caracteres, palavras e parágrafos<br/>- Modelo utilizado |


Se tiver dúvidas sobre os termos técnicos:

- **Token** significa um pequeno fragmento de texto. Pode pensá-lo como uma parte de uma palavra ou uma palavra curta.
- **TPS** indica quantos desses fragmentos de texto o modelo processou por segundo.

<br/>

Também pode monitorizar o custo de cada operação (se disponível) e o custo total, ativando a opção `Mostrar informações de custo nas ações` em [**Definições** > **Definições gerais**](#general-settings). 
 
<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="translate"></a>
## Traduzir

Utilize **Traduzir** quando pretender converter texto de um idioma para outro.

![Área de trabalho Traduzir](../images/screenshots/pt/translate.png)

<br/>

<a id="translate-text"></a>
### Traduzir texto

1. Abra **Traduzir**.
2. Escolha um idioma em **De**.
3. Escolha um idioma em **Para**.
4. Escolha um modelo na barra de ferramentas.
5. Escreva ou cole texto no campo **Entrada**.
6. Clique em **Traduzir**.
7. Leia o resultado no campo **Saída**.
8. Use o botão de cópia se quiser copiar o resultado.

<br/>

<a id="language-selection"></a>
### Seleção de idioma

- **De** pode ser um idioma específico ou **Detetar idioma**.
- **Para** é o idioma para o qual deseja obter o resultado.

Os seus **Idiomas principais** selecionados aparecem no topo da lista. Pode configurá-los em [**Definições** > **Idiomas**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Definições úteis de tradução

Em [**Definições** > **Definições gerais**](#general-settings), pode alterar o comportamento da tradução:

- **Traduzir automaticamente ao colar** executa uma tradução logo que cole texto.
- **Copiar automaticamente o resultado para a área de transferência** copia o resultado automaticamente após uma execução bem-sucedida.
- **Tradução em tempo real (enquanto escreve)** executa traduções enquanto escreve.
- **Tempo limite (ms)** define o tempo de espera da aplicação antes de executar uma tradução em tempo real.
- **Enter** controla o que acontece ao premir `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="rewrite"></a>
## Reescrever

Utilize **Reescrever** quando quiser melhorar a redação sem alterar o significado principal.

![Área de trabalho Reescrever](../images/screenshots/pt/rewrite.png)

Isto é útil para:

- corrigir ortografia e gramática
- tornar o texto mais claro
- tornar o texto mais formal ou menos formal
- encurtar ou expandir o texto
- tornar o texto mais técnico

<br/>

> 💡 **DICA**<br/>
> Quando utiliza o modo "**Verificar ortografia e gramática**", um botão `Mostrar alterações` aparece no painel de saída.
> Clique neste botão para alternar a exibição das correções, mostrando ou ocultando as alterações específicas feitas no seu texto.


<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="transform"></a>

## Transformar

Utilize **Transformar** quando desejar que a IA siga um conjunto personalizado de instruções.

![Área de trabalho Transformar](../images/screenshots/pt/transform.png)

Esta é a área mais flexível da aplicação. Pode utilizá-la para tarefas como:

- resumir notas
- transformar texto informal num e-mail refinado
- extrair pontos principais
- converter texto num formato específico
- qualquer outra atividade personalizada com o texto de entrada

<br/>

<a id="run-an-existing-prompt"></a>
### Executar um comando existente

1. Abra **Transformar**.
2. Escolha um comando da lista de comandos.
3. Se surgir uma caixa de idioma **Destino**, selecione um idioma, caso deseje.
4. Digite ou cole o texto em **Entrada**.
5. Clique em **Transformar**.
6. Leia o resultado em **Saída**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Se ainda não tiver comandos

Se a sua lista de comandos estiver vazia, clique em **Carregar comandos de exemplo**. Isto adiciona exemplos integrados para que possa começar rapidamente.

<br/>

> ℹ️ **NOTA**<br/>
> Os comandos de exemplo são fornecidos em inglês. Após carregá-los, pode editar um comando e utilizar **Traduzir comando** para o traduzir para o seu idioma.

<br/>

<a id="create-a-prompt-quickly"></a>
### Criar um comando rapidamente

A forma mais rápida de criar um comando é:

1. Clique em **Novo comando**.
2. Clique em **Gerar comando**.
3. Descreva o que deseja que o comando faça.
4. Escolha um modelo.
5. Deixe a aplicação criar um rascunho para si.
6. Revise o rascunho e clique em **Guardar**.

![Gerar comando](../images/screenshots/pt/transform-generate.png)


<br/>

<a id="edit-a-prompt"></a>
### Editar um comando

Quando criar ou editar um comando, o editor aparece à esquerda e uma área de teste surge à direita.

![Editor de comandos do Transformar](../images/screenshots/pt/transform-prompt-edit.png)

Os campos principais são:

- **Nome do comando**: o nome exibido na lista de comandos.
- **Instruções do comando (opcional)**: uma dica curta mostrada ao utilizador ao executar o comando.
- **Função da IA**: a função geral atribuída à IA, por exemplo, 'Você é um assistente útil.'
- **Instruções do modelo (uma por linha)**: as regras específicas que pretende que a IA siga.
- **Descrição da saída**: uma palavra curta que descreve o resultado, como 'resumo' ou 'reescrita'.
- **Temperatura (0,0 → 1,0)**: como o modelo irá comportar-se; veja abaixo.
- **Pedir idioma de destino**: adiciona um seletor de idioma de destino ao executar o comando.

Se o termo técnico **Temperatura** for novo para si, pense da seguinte forma:

- Uma temperatura **mais baixa** produz resultados mais estáveis e previsíveis.
- Uma temperatura **mais alta** produz mais variedade e criatividade.

Também pode utilizar:

- **`Gerar comando`** para criar um novo rascunho a partir de uma descrição simples
- **`Melhorar comando`** para aperfeiçoar um comando existente
- **`Traduzir comando`** para traduzir os campos do comando

<br/>

> ⚠️ **AVISO**<br/>
> Clique em **`Guardar`** antes de clicar em **`Voltar para Executar`**. Se voltar sem guardar, as suas alterações serão perdidas.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Testar um comando antes de o utilizar

O painel de teste à direita permite experimentar o seu comando com texto de exemplo antes de o utilizar no trabalho do dia a dia.

Isto é útil quando:

- está a criar um novo comando
- está a comparar duas versões de um comando
- deseja verificar o tom, o comprimento ou o formato da saída

<br/>

> ℹ️ **NOTA**<br/>
> Pode exportar e importar comandos guardados em [**Configurações** > **Comandos Transformar**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Painel

Utilize **Painel** para ver o quanto está a utilizar a aplicação e o respetivo custo (para modelos pagos).

![Resumo do Painel](../images/screenshots/pt/dashboard-summary.png)


<br/>

> ℹ️ **NOTA**<br/>
> Se utilizar apenas modelos gratuitos, os gráficos relacionados com custos estarão em branco.

<br/>

<a id="filter-the-data"></a>
### Filtrar os dados

Utilize os botões de filtro na parte superior para alterar o intervalo de tempo.

![Filtros do Painel](../images/screenshots/pt/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> O filtro **Utilizador** só é visível para administradores na versão web. Utilizadores comuns não verão este filtro, e não está disponível na aplicação para computador.

<br/>

<a id="dashboard-tabs"></a>

### Abas do painel

- **Resumo** dá-lhe uma visão geral de utilização e custo.
- **Por Utilização** divide a atividade por idioma de tradução, modo de reescrita e prompt de transformação.
- **Por Modelo** mostra quais os modelos que utilizou e quanto custaram.
- **Por Dia** mostra os totais diários.
- **Todas as Chamadas** mostra o histórico completo de chamadas e permite exportá-lo.

<br/>

<a id="export-data"></a>
### Exportar dados

As tabelas do painel podem exportar dados nos seguintes formatos:

- **JSON**
- **CSV**
- **XLSX**

Isto é útil se pretender rever a atividade fora da aplicação ou partilhar um relatório.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Eliminar registos armazenados de um modelo

Em **Por Modelo** ou **Todas as Chamadas**, pode remover os registos armazenados de um modelo clicando no ícone do "cesto do lixo".

> ⚠️ **ATENÇÃO**<br/>
> A eliminação de registos armazenados não pode ser desfeita. Utilize esta funcionalidade apenas se tiver a certeza de que já não necessita desse histórico.

Para eliminar todos os dados ou remover registos com base na sua antiguidade, vá a [**Definições** > **Acompanhamento de Custo**](#cost-tracking). Ali encontrará opções para apagar todos os dados armazenados ou apenas os dados anteriores a uma determinada data.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="history"></a>
## Histórico

Clique em **Histórico** para ver o histórico das suas ações dentro do **Transrewrt**, incluindo a entrada e saída de cada operação.

![Página de histórico](../images/screenshots/pt/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrar os dados

**Histórico** utiliza os mesmos filtros da página **Painel**. Utilize-os para selecionar o intervalo temporal.

![Filtros do painel](../images/screenshots/pt/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> O filtro **Utilizador** só é visível para administradores na versão web. Utilizadores regulares não verão este filtro, e este não está disponível na aplicação de ambiente de trabalho.

<br/>

<a id="export-history-data"></a>
### Exportar dados do histórico

A página de histórico pode exportar os dados filtrados nos seguintes formatos:

- **JSON**
- **CSV**
- **XLSX**

Isto é útil se pretender rever a atividade fora da aplicação ou partilhar um relatório.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="settings"></a>
## Definições

Abra **Definições** na barra lateral para personalizar o comportamento da aplicação.

As abas disponíveis dependem da plataforma e do seu papel:

  | Aba                   | Ambiente de Trabalho | Web (admin) | Web (utilizador regular) |
  |-----------------------|:--------------------:|:-----------:|:------------------------:|
  | Definições Gerais     |         sim          |     sim     |            sim           |
  | Modelos               |         sim          |     sim     |            sim           |
  | Idiomas               |         sim          |     sim     |            sim           |
  | Acompanhamento de Custo |         sim          |     sim     |             —            |
  | Prompts de Transformação |         sim          |     sim     |            sim           |
  | Utilizadores          |          —           |     sim     |             —            |
  | Configuração da API   |         sim          |     sim     |             —            |
  | Sobre                 |         sim          |     sim     |            sim           |

<br/>

> ℹ️ **NOTA**<br/>
> Na versão web, cada utilizador tem a sua própria configuração. Definições como modelos selecionados, idiomas, opções gerais e prompts de transformação são armazenadas por utilizador. As alterações que efetuar não afetam outros utilizadores.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: # 

<a id="general-settings"></a>
### Definições gerais

Use **Definições Gerais** para controlar o comportamento de escrita, se os detalhes de execução são armazenados no **Histórico** e a aparência.

**Comportamento**

- **Comportamento do ENTER** escolhe se a tecla `Enter` executa a tarefa ou insere uma nova linha.
- **Tradução automática ao colar** inicia a tradução assim que colar texto.
- **Copiar automaticamente o resultado para a área de transferência** copia automaticamente os resultados com sucesso.
- **Tradução em tempo real (enquanto escreve)** traduz enquanto escreve.
- **Tempo limite (ms)** define o tempo de espera para a tradução em tempo real.

**Histórico**

- **Manter histórico de execução** controla se cada tradução, reescrita e transformação armazena o **texto de entrada e saída** para a vista [**Histórico**](#history) na barra lateral. Desativar esta opção pede confirmação; se confirmar, o texto do histórico armazenado será removido da base de dados.
- **Eliminar dados do histórico** permite-lhe remover texto armazenado com base na idade (por exemplo, com mais de alguns meses ou **todos os dados (limpar)**) utilizando **Eliminar dados**. Isto apenas afeta o texto de execução guardado para a vista **Histórico**; **não** elimina os totais de custo ou utilização. Para remover ou reduzir dados de **custo**, use [**Definições** > **Acompanhamento de Custo**](#cost-tracking).

**Aparência**

- **Mostrar informações de custo nas ações** controla a exibição do custo por operação (se disponível) e do custo total nos painéis de saída de Traduzir, Reescrever e Transformar.
- **Nº de casas decimais do custo** altera a forma como são apresentados os decimais dos custos.
- **Apenas web:** **mostrar margem à volta da aplicação** adiciona espaço extra à volta da interface.
- **Família do tipo de letra** altera o tipo de letra nos painéis de texto.
- **Tamanho** altera o tamanho do tipo de letra.


<br/>

<a id="models"></a>

### Modelos

Utilize **Definições** > **Modelos** para escolher quais modelos aparecem na barra de ferramentas.

![Separador Modelos nas Definições](../images/screenshots/pt/settings-models.png)

A página possui duas listas:

- **Modelos Disponíveis** à esquerda
- **Modelos Selecionados** à direita

Controlos úteis incluem:

- **Pesquisar modelos...** para encontrar um modelo pelo nome
- Botões **Provedor** para reduzir a lista a um único motor (OpenRouter, OpenAI, Ollama, …)
- **Apenas Gratuitos** para mostrar apenas os modelos gratuitos
- **Atualizar** para recarregar a lista
- **Expandir Todos** e **Recolher Todos** quando estiver a ordenar por provedor

Os IDs dos modelos incluem o prefixo do provedor (por exemplo, `openrouter/…` vs `openai/…`). Os selos como **OpenAI (OpenRouter)** vs **OpenAI (direto)** mostram como o tráfego é encaminhado.

> ℹ️ **NOTA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) é um modelo de encaminhamento, não um modelo de chat geral: a sua resposta é JSON que descreve corpos de pedido da API OpenRouter (por exemplo, uma matriz `requests` com `model` e `messages`). Se utilizá-lo para **Traduzir**, **Reescrever** ou **Transformar**, o painel de saída mostrará esse JSON em vez de texto finalizado. Escolha um modelo de texto normal para essas tarefas. Veja a [página do modelo Body Builder](https://openrouter.ai/openrouter/bodybuilder) na OpenRouter.

Ações:

 - Para adicionar um modelo, clique em **Adicionar** ou em qualquer lugar da entrada.

 - Para remover um modelo, clique em **X** ao lado dele nos **Modelos Selecionados** ou em **Selecionado** na entrada dos Modelos Disponíveis.

 - Para limpar a lista, clique em **Desmarcar todas**. O modelo gratuito obrigatório permanecerá na lista.

<br/>

> ℹ️ **NOTA**<br/>
> Se não quiser adicionar créditos à OpenRouter imediatamente, comece por ativar **Apenas Gratuitos** e selecionar os modelos gratuitos (sem necessidade de cartão de crédito). Também pode utilizar o Ollama para executar modelos localmente sem qualquer chave API.

<br/>

<a id="languages"></a>
### Idiomas

Utilize **Definições** > **Idiomas** para organizar as listas de idiomas utilizadas na aplicação.

- **Idiomas Principais** são fixados próximo ao topo das listas de idiomas em **Traduzir** e **Transformar**.
- **Idioma Personalizado** permite-lhe adicionar um idioma que não esteja na lista incorporada.

Se adicionar um idioma personalizado, ele aparecerá nos seletores de idioma juntamente com as opções incorporadas.

<br/>

<a id="cost-tracking"></a>
### Monitorização de Custos

Utilize **Definições** > **Monitorização de Custos** para gerir as informações de custo.

- **Custo Total** mostra o total acumulado.
- **Copiar Valor** copia o total para a área de transferência.
- **Repor Custo** redefine o total armazenado para zero.
- **Sincronizar com uso da chave API** define o total para corresponder ao uso indicado pela sua conta OpenRouter (apenas OpenRouter).
- **Uso da Chave API** mostra detalhes de uso da OpenRouter, se disponíveis.
- **Eliminar dados de custo** remove todos os dados ou apenas entradas mais antigas que uma data selecionada.

**Monitorização de custos:** Quando utiliza modelos OpenRouter, a aplicação mostra o seu uso e despesas reais com base nas informações de custo da OpenRouter. Para todos os outros provedores, a aplicação estima os custos usando os preços publicados pela OpenRouter; se o preço não estiver disponível, a estimativa poderá ser zero.

<br/>

> ℹ️ **NOTA**<br/>
> Todos os valores são apenas estimativas para sua referência, **não são faturas oficiais.**


<br/>

> ⚠️ **ATENÇÃO**<br/>
> A eliminação de dados não pode ser desfeita. Antes de eliminar, certifique-se de fazer backup dos seus dados ou exportá-los através de [**Histórico**](#history) 
> ou [**Painel** > **Todos os Pedidos**](#dashboard-tabs), caso contrário serão perdidos permanentemente. 
> Todo o histórico de entrada/saída relacionado a cada entrada de chamada da API também será eliminado.


<br/>

<a id="transform-prompts"></a>
### Prompts de Transformação

Utilize **Definições** > **Prompts de Transformação** para gerir prompts em massa.

Pode:

- rever os seus prompts guardados
- eliminar prompts
- importar prompts de um ficheiro
- exportar prompts para backup ou partilha

<br/>

<a id="users"></a>
### Utilizadores

Utilize **Utilizadores** para gerir contas de utilizador na versão web. Pode adicionar utilizadores, atualizar os seus detalhes, repor palavras-passe e eliminar contas.

<br/>

<a id="api-config"></a>
### Configuração da API

Os provedores suportados são: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e **Ollama** (modelos locais através de um URL base). Só precisa configurar os provedores que utiliza.

**Aplicação web: apenas administrador**

As chaves API são configuradas através de variáveis de ambiente do sistema ou do Docker — não são inseridas na interface web. Esta página mostra quais os provedores que têm uma chave configurada e permite testar cada um clicando no botão **`Testar`**.

<br/>

> ℹ️ **NOTA**<br/>
> Para alterar uma chave API, atualize a variável de ambiente na sua configuração do sistema ou do Docker e reinicie o servidor ou contentor.

<br/>

**Aplicação de secretária**

Utilize **Configuração da API** para armazenar chaves API para cada provedor que utilizar. Para o Ollama, introduza o **URL base** em vez de uma chave API.

<br/>

> 💡 **Dica** <br/>
> Se não quiser utilizar uma chave API nem pagar pelo uso, pode [descarregar o Ollama](https://ollama.com) e executar modelos (como `translategemma:4b`) localmente na sua máquina gratuitamente. Alternativamente, pode criar uma conta OpenRouter gratuita (sem necessidade de cartão de crédito) para usar os seus modelos gratuitos, ou obter uma chave API gratuita da Cerebras, Google, Groq ou Mistral AI.

<br/>

- Adicione apenas os provedores necessários. Em **Definições** > **Modelos**, cada ID de modelo começa com o provedor (por exemplo, `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Para adicionar uma chave API, introduza o valor no campo de texto e clique em **`Guardar`**. Para substituir uma chave existente, clique em **`Editar`**. Para verificar se uma chave está a funcionar, clique em **`Testar`**. Para o URL base do Ollama, clique sempre em **`Testar`** para verificar a ligação.

<br/>

> ℹ️ **NOTA**<br/>
> Não pode ver o valor atual de uma chave API. Só pode substituí-la utilizando o botão **`Editar`**.
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

Se algo não funcionar conforme esperado, verifique primeiro os seguintes pontos.

<br/>

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### A aplicação não traduz, reescreve ou transforma texto

Verifique que:

- selecionou um modelo na barra de ferramentas
- pelo menos um modelo está listado em [**Definições** > **Modelos**](#models)
- a sua configuração da API está a funcionar

Se estiver a utilizar a aplicação de ambiente de trabalho:

1. Abra [**Definições** > **Configuração da API**](#api-config).
2. Verifique se pelo menos uma chave API foi guardada.
3. Clique em **Testar** ao lado do fornecedor para confirmar que a chave está a funcionar.

<br/>

<a id="the-model-list-is-empty"></a>
### A lista de modelos está vazia

Abra [**Definições** > **Modelos**](#models) e clique em **Atualizar**.

Se necessário:

- pesquise um modelo
- ative **Apenas gratuitos**
- adicione um ou mais modelos aos **Modelos Selecionados**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### O resultado é demasiado lento ou demasiado caro

Experimente uma ou mais destas opções:

- escolha um modelo diferente
- use uma entrada mais curta
- desative **Tradução em tempo real (enquanto escreve)** em [**Definições** > **Definições Gerais**](#general-settings)
- use modelos gratuitos para tarefas simples (ver [Modelos](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### A interface está na língua errada

Clique no ícone do globo na [barra de ferramentas](#toolbar) e escolha a sua **Língua da interface** preferida.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### O texto é demasiado pequeno ou difícil de ler

Abra [**Definições** > **Definições Gerais**](#general-settings) e altere:

- **Família da Letra**
- **Tamanho**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Os gráficos do painel estão vazios

Isto é normal se:

- estiver a usar apenas **modelos gratuitos** (os gráficos de custos ficarão em branco)
- o **filtro de tempo** selecionado não abranger o período em que foram feitas chamadas — experimente **Tudo** para verificar

Se os gráficos ainda estiverem vazios após selecionar **Tudo**, confirme que as chamadas aparecem em [**Histórico**](#history) ou no separador **Todas as chamadas**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### O custo mostra "não disponível" ou parece incorreto

Quando utiliza modelos através do **OpenRouter**, a aplicação mostra o seu gasto real informado pelo OpenRouter.

Para **outros fornecedores** (OpenAI direto, Anthropic direto, etc.), o custo é estimado a partir dos dados de preços publicados pelo OpenRouter. Se não for encontrado um preço correspondente para um modelo, o custo aparecerá como **não disponível** e não será adicionado ao seu total acumulado.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### O custo total não corresponde à fatura do meu fornecedor

Todos os valores de custo na aplicação são **estimativas apenas para referência**, não são documentos oficiais de faturação.

Para aproximar o total ao seu gasto real no OpenRouter, abra [**Definições** > **Acompanhamento de Custo**](#cost-tracking) e clique em **Sincronizar com o uso da chave API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### A página Histórico está em falta na barra lateral

A opção **Manter histórico de execuções** pode estar desativada. Abra [**Definições** > **Definições Gerais**](#general-settings) e ative-a. Note que ativar esta opção não restaurará dados do histórico previamente eliminados.

<br/>

<a id="web-app-session-expired"></a>
### Aplicação web: redirecionamento inesperado para a página de login

A sua sessão pode ter expirado. Volte a iniciar sessão. Se isto acontecer com frequência, verifique a configuração do servidor quanto às definições de duração da sessão.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### O painel não mostra dados para outros utilizadores (web)

Apenas os **administradores** podem ver dados de todos os utilizadores através do filtro **Utilizador**. Os utilizadores comuns veem apenas a sua própria atividade, conforme concebido.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Mudei uma instrução e perdi as edições

Ao editar uma instrução, clique sempre em **Guardar** antes de clicar em **Voltar para Executar**.

<br/><br/>

<a id="quick-tips"></a>
## Dicas rápidas

- Comece com [**Traduzir**](#translate) para garantir que a sua configuração está a funcionar antes de passar para [**Reescrever**](#rewrite) ou [**Transformar**](#transform).
- Use [**Reescrever**](#rewrite) para melhorias diárias de redação.
- Use [**Transformar**](#transform) quando precisar de um fluxo de trabalho repetível para uma tarefa específica.
- Use [**Painel**](#dashboard) se quiser monitorizar o uso e o custo.
- Use [**Histórico**](#history) para rever operações anteriores e os respetivos textos completos de entrada e saída.
- Exporte instruções regularmente se estiver a criar uma biblioteca de instruções que pretende manter segura (ver [Instruções de Transformação](#transform-prompts)), ou se desejar partilhá-la com outros.

<br/><br/>

<a id="disclaimer"></a>

## Aviso

Os nomes e ícones dos produtos pertencem aos seus respectivos proprietários e são usados apenas para fins de identificação. Este software não está associado nem é endossado por nenhuma das marcas mencionadas.

The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\the\the\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\The\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\extract
</extract
\
<import\>
<import\>
<import\>
<import\>
<import>
<import>
<import>
<import>
<import>
<import>
<import>
<import>
<update, we are actively engaging in climate, and and and and and and and and and and and and and and and and and and and and and and and and and and and and and and and and and\and\and\and\and\and\and\and\and\and\and\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the\the