---
translation_last_updated: '2026-03-31T22:57:41.033Z'
source_file_mtime: '2026-03-30T09:57:25.622Z'
source_file_hash: e1b91eca0124d467
translation_language: pt
source_file_path: USER-GUIDE.md
---
![Transrewrt banner](../images/transrewrt_banner.png)

<a id="transrewrt-user-guide"></a>
# Guia do Utilizador

<br/>

<a id="introduction"></a>
## Introdução

O Transrewrt ajuda-o a trabalhar com texto de três formas principais:

- **Traduzir** - converter texto de um idioma para outro.
- **Reescrever** - reformular texto com um estilo diferente, como mais claro, mais curto ou mais formal.
- **Transformar** - processar texto utilizando instruções personalizadas de IA chamadas prompts.

<br/>

Este guia explica como utilizar a aplicação após a instalação e execução. Para os passos de instalação, consulte o ficheiro **[README](README.pt.md)** principal.

<br/>

> ℹ️ **NOTA**<br/>
> O Transrewrt está disponível como aplicação de ambiente de trabalho para Windows e Linux, e como aplicação web auto-hospedada. Este guia centra-se na utilização diária da aplicação. Sempre que algo se aplique apenas a uma versão, será claramente indicado.

<small>**Leia em outros idiomas:** </small>
<small id="lang-list">[English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<small>

> **Observação sobre traduções da interface e documentação:** Todos os idiomas da interface, exceto o inglês (RU) original,
> foram traduzidos usando modelos de IA; a redação pode ser imprecisa ou conter erros.

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
  - [Executar um prompt existente](#run-an-existing-prompt)
  - [Se ainda não tiver prompts](#if-you-have-no-prompts-yet)
  - [Criar um prompt rapidamente](#create-a-prompt-quickly)
  - [Editar um prompt](#edit-a-prompt)
  - [Testar um prompt antes de o usar](#test-a-prompt-before-using-it)
- [Painel](#dashboard)
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
  - [Rastreio de custos](#cost-tracking)
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
  - [O custo total não corresponde à fatura do meu provedor](#total-cost-does-not-match-my-provider-bill)
  - [A página Histórico está em falta na barra lateral](#the-history-page-is-missing-from-the-sidebar)
  - [Aplicação web: redirecionado inesperadamente para a página de início de sessão](#web-app-redirected-to-the-login-page-unexpectedly)
  - [Administrador web: esqueceu-se ou perdeu a palavra-passe](#web-admin-forgot-or-lost-a-password)
  - [O painel não mostra dados de outros utilizadores (web)](#dashboard-shows-no-data-for-other-users-web)
  - [Alterei um prompt e perdi as edições](#i-changed-a-prompt-and-lost-the-edits)
- [Dicas rápidas](#quick-tips)
- [Aviso legal](#disclaimer)
- [Licença](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br/><br/>

<a id="before-you-start"></a>
## Antes de começar

Para usar o Transrewrt, você precisa de acesso a pelo menos um provedor de IA. Os provedores suportados são: [OpenRouter](https://openrouter.ai) (que agrega muitos modelos), OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e [Ollama](https://ollama.com) para modelos locais.

Você não precisa selecionar um modelo pago para começar. Assim que adicionar sua chave de API do OpenRouter, o aplicativo ativa automaticamente uma opção **grátis** integrada do OpenRouter. Isso permite que você comece a traduzir, reescrever e transformar texto imediatamente. Alternativamente, você também pode obter uma chave de API grátis da Cerebras, Google, Groq ou Mistral AI.

Em termos simples:

- Um **modelo** é o mecanismo de IA que realiza o trabalho. Os modelos são listados com um **prefixo do provedor** (por exemplo `openrouter/…`, `openai/…`, `ollama/…`).
- Uma **chave de API** (ou, para o Ollama, uma **URL base**) é o modo como o aplicativo se conecta a esse provedor.

Se você estiver usando o **aplicativo desktop**, adicione as chaves em [**Definições** > **Configuração da API**](#api-config) para cada provedor que usar. Para uso exclusivo do OpenRouter, veja [Como obter uma chave de API](#how-to-get-an-api-key-desktop-app) abaixo. Se não quiser usar uma chave de API, você pode instalar o Ollama (em [ollama.com](https://ollama.com)) e usar modelos locais, como `translategemma:4b`.

Se você estiver usando a **versão web**, o proprietário do servidor configura os provedores com variáveis de ambiente, portanto, você não pode inserir chaves de API diretamente no aplicativo.

<br/>

<a id="how-to-get-an-api-key-desktop-app"></a>
### Como obter uma chave de API grátis do OpenRouter (aplicativo desktop)

Se você estiver usando o aplicativo desktop, siga estes passos:

1. Acesse [OpenRouter](https://openrouter.ai) no seu navegador.
2. Crie uma conta ou faça login.
3. Abra a página [Keys](https://openrouter.ai/keys).
4. Clique no botão para criar uma nova chave de API.
5. Dê um nome à chave para que você possa reconhecê-la posteriormente.
6. Copie a nova chave de API.
7. Volte ao Transrewrt e abra **Definições** > **Configuração da API**.
8. Cole a chave em **Chave de API do OpenRouter** (em **Definições** > **Configuração da API**).
9. Clique em **Testar chave do OpenRouter** para verificar se está funcionando.

<br/><br/>

<a id="getting-started"></a>
## Primeiros passos

Se esta é a sua primeira vez usando o Transrewrt, siga esta ordem:

1. Abra o aplicativo.
2. Escolha seu **Idioma da interface** no ícone do globo, se necessário.
3. Se você estiver no **aplicativo desktop**, abra [**Definições** > **Configuração da API**](#api-config), adicione uma chave de API para pelo menos um provedor (por exemplo, OpenRouter) e clique em **Testar** para verificar se está funcionando.
4. Abra [**Definições** > **Modelos**](#models) e adicione um ou mais modelos aos **Modelos Selecionados**.
5. Abra [**Definições** > **Idiomas**](#languages) e escolha seus **Idiomas principais**, caso deseje que os idiomas mais usados apareçam primeiro.
6. Vá para **Traduzir** e execute uma tradução simples para confirmar que tudo está funcionando.
7. Depois que funcionar, experimente **Reescrever** e depois **Transformar**.

Essa ordem é importante. Ela evita o problema mais comum no primeiro uso: tentar executar uma tarefa antes de o aplicativo ter uma conexão de API funcionando ou um modelo selecionado.

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
       <img src="../images/screenshots/pt/sidebar.png" alt="Barra Lateral do Aplicativo" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br/><br/>
      <ul>
        <li><strong>Traduzir</strong> abre a área de trabalho de tradução.</li><br/>
        <li><strong>Reescrever</strong> abre a área de trabalho de reescrita.</li><br/>
        <li><strong>Transformar</strong> abre a área de trabalho de prompt personalizado.</li><br/>
        <li><strong>Painel</strong> mostra informações de uso e custo.</li><br/>
        <li><strong>Definições</strong> abre o painel de configurações.</li><br/>
        <li><strong>Histórico</strong> mostra o histórico de uso com os textos de entrada e saída</li><br/>
        <li><strong>Usuário</strong> mostra o nome de usuário do usuário logado (somente web).</li>
      </ul>
    </td>
  </tr>
</table>

<br/>

<a id="toolbar"></a>
### Barra de ferramentas

A barra de ferramentas altera ligeiramente consoante a localização na aplicação.

- À esquerda, mostra o nome da página atual.
- À direita, mostra o **seletor de modelo** e o controlo do **Idioma da interface**.

O **seletor de modelo** permite-lhe escolher qual o motor de IA a utilizar para a tarefa atual.

![Model selector](../images/screenshots/pt/model-selector.png)

Alguns modelos gratuitos podem não estar sempre disponíveis — por vezes estão offline ou têm um limite de utilização. Se isto acontecer, a aplicação removerá automaticamente esse modelo da sua lista disponível. Para controlar quais os modelos que aparecem, aceda a [**Definições** > **Modelos**](#models) e edite a sua lista de modelos.
Também pode abrir as definições do modelo diretamente clicando no ícone do provedor à esquerda do nome do modelo na barra de ferramentas.

<br/>

O **ícone do globo + código de idioma** altera o idioma da interface da aplicação, como menus e botões. Isto **não** altera os idiomas de tradução utilizados em **Traduzir**.

![Interface language selector](../images/screenshots/pt/language-selector.png)

<br/>

<a id="input-and-output-panels"></a>
### Painéis de entrada e saída

A maioria dos espaços de trabalho utiliza um painel **Entrada** no lado esquerdo e um painel **Resultado** no lado direito.

Cada painel também mostra:

| **Entrada**                                                          | **Resultado**                                                                                                                  |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| - Contagem de caracteres <br/>- Contagem de palavras <br/>- Contagem de parágrafos   <br/> | - Tempo que a tarefa demorou<br/>- **TPS** (fichas por segundo)<br/>- Contagens de caracteres, palavras e parágrafos<br/>- O modelo utilizado |

Se estiver com dúvidas sobre os termos técnicos:

- **Ficha** significa um pequeno fragmento de texto. Pode pensar nisso como parte de uma palavra ou uma palavra curta.
- **TPS** significa quantos desses fragmentos de texto o modelo processou por segundo.

<br/>

Também pode monitorizar o custo de cada operação (se disponível) e o custo total, ativando a opção `Mostrar informações de custo nas ações` em [**Definições** > **Definições Gerais**](#general-settings).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="translate"></a>
## Traduzir

Utilize **Traduzir** quando quiser converter texto de um idioma para outro.

![Translate workspace](../images/screenshots/pt/translate.png)

<br/>

<a id="translate-text"></a>
### Traduzir texto

1. Abra **Traduzir**.
2. Escolha um idioma em **De**.
3. Escolha um idioma em **Para**.
4. Escolha um modelo na barra de ferramentas.
5. Escreva ou cole o texto em **Entrada**.
6. Clique em **Traduzir**.
7. Leia o resultado em **Resultado**.
8. Utilize o botão de copiar se quiser copiar o resultado.

<br/>

<a id="language-selection"></a>
### Seleção de idioma

- **De** pode ser um idioma específico ou **Detetar Idioma**.
- **Para** é o idioma para o qual deseja o resultado.

Os seus **Idiomas principais** selecionados aparecem no topo da lista. Pode definir estes em [**Definições** > **Idiomas**](#languages).

<br/>

<a id="helpful-translation-settings"></a>
### Definições úteis de tradução

Em [**Definições** > **Definições Gerais**](#general-settings), pode alterar o comportamento da tradução:

- **Traduzir automaticamente ao colar** executa uma tradução logo que cole texto.
- **Copiar resultado automaticamente para a área de transferência** copia o resultado automaticamente após uma execução bem-sucedida.
- **Tradução em tempo real (ao escrever)** executa traduções enquanto escreve.
- **Tempo limite (ms)** controla quanto tempo a aplicação espera antes de executar uma tradução em tempo real.
- **Enter** controla o que acontece quando pressiona `Enter`:

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="rewrite"></a>
## Reescrita

Utilize a **Reescrita** quando quiser melhorar a redação sem alterar o significado principal.

![Rewrite workspace](../images/screenshots/pt/rewrite.png)

Isto é útil para:

- corrigir ortografia e gramática (**Verificar Ortografia e Gramática**)
- tornar o texto mais claro (**Melhorar Clareza**)
- várias reformulações distintas numa única execução (**Versões alternativas**)
- tornar o texto mais formal ou mais informal (**Formal** / **Informal**)
- encurtar ou expandir texto (**Encurtar** / **Expandir**)
- tornar o texto mais técnico (**Tornar Técnico**)

<br/>

> 💡 **DICA**<br/>
> Quando utiliza o modo "**Verificar Ortografia e Gramática**", surge um interruptor **Mostrar alterações** no painel de resultado (ao lado de **Copiar**).
> Ative ou desative para mostrar ou ocultar as correções específicas aplicadas ao seu texto.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="transform"></a>
## Transformação

Utilize **Transformação** quando quiser que a IA siga um conjunto personalizado de instruções.

![Transform workspace](../images/screenshots/pt/transform.png)

Esta é a área mais flexível da aplicação. Pode utilizá-la para tarefas como:

- resumir notas
- transformar texto bruto num e-mail polido
- extrair pontos-chave
- converter texto num formato específico
- qualquer outra atividade personalizada com o texto de entrada

<br/>

<a id="run-an-existing-prompt"></a>
### Executar um prompt existente

1. Abra **Transformação**.
2. Escolha um prompt da lista de prompts.
3. Se aparecer uma caixa de **Destino** de idioma, escolha um idioma, se desejar.
4. Escreva ou cole texto em **Entrada**.
5. Clique em **Transformar**.
6. Leia o resultado em **Resultado**.

<br/>

<a id="if-you-have-no-prompts-yet"></a>
### Se ainda não tiver prompts

Se a sua lista de prompts estiver vazia, clique em **Carregar prompts de exemplo** na área de trabalho Transformação. O mesmo controlo está sempre disponível em [**Definições** > **Prompts de transformação**](#transform-prompts) na linha de exportação/importação. Ambos adicionam exemplos integrados para que possa começar rapidamente.

<br/>

> ℹ️ **NOTA**<br/>
> Os prompts de exemplo são fornecidos em inglês. Após os carregar, pode editar um prompt e usar **Traduzir prompt** para o traduzir para o seu idioma.

<br/>

<a id="create-a-prompt-quickly"></a>
### Criar um prompt rapidamente

A forma mais rápida de criar um prompt é:

1. Clique em **Novo prompt**.
2. Clique em **Gerar prompt**.
3. Descreva o que quer que o prompt faça.
4. Escolha um modelo.
5. Deixe a aplicação criar um rascunho para si.
6. Reveja o rascunho e clique em **Guardar**.

![Generate prompt](../images/screenshots/pt/transform-generate.png)

<br/>

<a id="edit-a-prompt"></a>
### Editar um prompt

Quando você cria ou edita um prompt, o editor aparece à esquerda e uma área de teste aparece à direita.

![Transform prompt editor](../images/screenshots/pt/transform-prompt-edit.png)

Os campos principais são:

- **Nome do prompt**: o nome exibido na lista de prompts.
- **Instruções do prompt (opcional)**: uma dica curta exibida ao usuário ao executar o prompt.
- **Papel do Modelo**: o papel geral atribuído à IA, como 'Você é um assistente útil.'
- **Instruções do Modelo (uma por linha)**: as regras específicas que você deseja que a IA siga.
- **Descrição da saída**: uma palavra curta que descreve o resultado, como 'resumo' ou 'reescrita'.
- **Temperatura (0,0 → 1,0)**: como o modelo se comportará; veja abaixo.
- **Pedir idioma de destino**: adiciona um seletor de idioma de destino quando o prompt é executado.

Se o termo técnico **Temperatura** for novo para você, pense nele da seguinte forma:

- Uma **temperatura mais baixa** gera resultados mais estáveis e previsíveis.
- Uma **temperatura mais alta** gera mais variedade e criatividade.

Você também pode usar:

- **`Gerar prompt`** para criar um novo rascunho a partir de uma descrição simples
- **`Melhorar prompt`** para aperfeiçoar um prompt existente
- **`Traduzir prompt`** para traduzir os campos do prompt

<br/>

> ⚠️ **AVISO**<br/>
> Clique em **`Salvar`** antes de clicar em **`Voltar para Executar`**. Se você voltar sem salvar, suas alterações serão perdidas.

<br/>

<a id="test-a-prompt-before-using-it"></a>
### Testar um prompt antes de usá-lo

O painel de teste à direita permite que você experimente seu prompt com texto de exemplo antes de usá-lo no trabalho diário.

Isso é útil quando:

- você está criando um novo prompt
- você está comparando duas versões de um prompt
- você deseja verificar o tom, comprimento ou formato da saída

<br/>

> ℹ️ **NOTA**<br/>
> Você pode exportar e importar prompts salvos em [**Definições** > **Prompts de transformação**](#transform-prompts).

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="dashboard"></a>
## Painel

Use o **Painel** para ver o quanto você está utilizando o aplicativo e quanto isso está custando (para modelos pagos).

![Dashboard summary](../images/screenshots/pt/dashboard-summary.png)

<br/>

> ℹ️ **NOTA**<br/>
> Se você usar apenas modelos **grátis**, os valores de **custo** podem ser zero e os resumos focados em custo podem parecer vazios. Em **Resumo**, **Uso ao longo do tempo** e **Uso por modelo** ainda mostram o **número de chamadas** (traduzir, reescrever e transformar) quando houver atividade no período selecionado.

<br/>

<a id="filter-the-data"></a>
### Filtrar os dados

Use os botões de filtro na parte superior para alterar o intervalo de tempo.

![Dashboard filters](../images/screenshots/pt/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> O filtro **Usuário** só é visível para administradores na versão web. Utilizadores regulares não verão este filtro, e este não está disponível na aplicação desktop.

<br/>

<a id="dashboard-tabs"></a>
### Separadores do Painel

- **Resumo** dá-lhe uma visão geral do uso e custo. Inclui **Uso ao longo do tempo** (contagem acumulada empilhada de **chamadas** por dia para tradução, reescrita e transformação) e **Uso por modelo** (total de **chamadas por modelo**, incluindo transformação).
- **Por Utilização** divide a atividade por idioma de tradução, modo de reescrita e prompt de transformação.
- **Por Modelo** mostra quais os modelos que utilizou e quanto custaram.
- **Por Dia** mostra os totais diários.
- **Todas as Chamadas** mostra o histórico completo de chamadas e permite exportá-lo.

<br/>

<a id="export-data"></a>
### Exportar dados

As tabelas do painel podem exportar dados em:

- **JSON**
- **CSV**
- **XLSX**

Isto é útil se quiser rever a atividade fora da aplicação ou partilhar um relatório.

<br/>

<a id="delete-stored-records-for-a-model"></a>
### Eliminar registos armazenados de um modelo

Em **Por Modelo** ou **Todas as Chamadas**, pode remover os registos armazenados de um modelo clicando no ícone do "caixote do lixo".

> ⚠️ **AVISO**<br/>
> A eliminação de registos armazenados não pode ser desfeita. Utilize esta opção apenas se tiver a certeza de que já não precisa desse histórico.

Para eliminar todos os dados ou remover registos com base na sua idade, aceda a [**Definições** > **Rastreio de Custos**](#cost-tracking). Lá encontrará opções para eliminar todos os dados armazenados ou apenas os dados mais antigos que uma determinada data.

<br/><br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="history"></a>
## Histórico

Clique em **Histórico** para ver o histórico das suas ações dentro do **Transrewrt**, incluindo a entrada e saída de cada operação.

![History page](../images/screenshots/pt/history.png)

<br/>

<a id="filter-the-history"></a>
### Filtrar os dados

**Histórico** utiliza os mesmos filtros da página **Painel**. Use-os para selecionar o intervalo de tempo.

![Dashboard filters](../images/screenshots/pt/dashboard-filter.png)

<br/>

> ℹ️ **NOTA**<br/>
> O filtro **Usuário** só é visível para administradores na versão web. Utilizadores regulares não verão este filtro, e este não está disponível na aplicação desktop.

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

| Separador               | Desktop | Web (administrador) | Web (utilizador normal) |
  |-------------------|:-------:|:-------------------:|:----------------------:|
  | Definições Gerais  |   Sim   |         Sim          |          Sim           |
  | Modelos            |   Sim   |         Sim          |          Sim           |
  | Idiomas            |   Sim   |         Sim          |          Sim           |
  | Rastreio de Custos |   Sim   |         Sim          |           —            |
  | Prompts de transformação |   Sim   |         Sim          |          Sim           |
  | Utilizadores       |    —    |         Sim          |           —            |
  | Configuração da API|   Sim   |         Sim          |           —            |
  | Sobre              |   Sim   |         Sim          |          Sim           |

<br/>

> ℹ️ **NOTA**<br/>
> Na versão web, cada utilizador tem a sua própria configuração. Definições como modelos selecionados, idiomas, opções gerais e prompts de transformação são armazenadas por utilizador. As alterações que efetuar não afetam outros utilizadores.

<br/>

[--------------------------------------------------------------------------------------------------------------------------]: #

<a id="general-settings"></a>
### Definições Gerais

Utilize **Definições Gerais** para controlar o comportamento ao escrever, se os detalhes de execução são armazenados no **Histórico** e a aparência.

**Comportamento**

- **Comportamento para ENTER** escolhe se `Enter` executa a tarefa ou insere uma nova linha.
- **Traduzir automaticamente ao colar** inicia a tradução assim que colar texto.
- **Copiar resultado automaticamente para a área de transferência** copia automaticamente os resultados bem-sucedidos.
- **Tradução em tempo real (ao escrever)** traduz enquanto escreve.
- **Tempo limite (ms)** define o tempo de espera para a tradução em tempo real.

**Histórico**

- **Manter o histórico de execução** controla se cada tradução, reescrita e transformação armazena o **texto de entrada e saída** para a vista [**Histórico**](#history) na barra lateral. Desativar pede confirmação; se confirmar, o texto do histórico armazenado é removido da base de dados.
- **Eliminar dados do histórico** permite remover o texto armazenado por idade (por exemplo, mais antigo que alguns meses, ou **todos os dados (limpar)**) usando **Eliminar dados**. Isto afeta apenas o texto de execução guardado para a vista **Histórico**; **não** elimina os totais de custo ou uso. Para remover ou reduzir os dados de **custo**, utilize [**Definições** > **Rastreio de Custos**](#cost-tracking).

**Aparência**

- **Mostrar informações de custo nas ações** controla a exibição do custo por operação (se disponível) e do custo total nos painéis de saída de Traduzir, Reescrever e Transformar.
- **Casas decimais do custo** altera a forma como os decimais do custo são exibidos.
- **Apenas web:** **mostrar uma margem em torno da aplicação** adiciona espaço extra à volta da interface.
- **Família de fontes** altera a fonte de escrita nos painéis de texto.
- **Tamanho** altera o tamanho da fonte.

**Cópia de Segurança da Configuração**

- **Incluir dados de uso no backup** — quando ativado, o ZIP também contém histórico de execuções e dados de chamadas à API.
- **Fazer cópia de segurança da configuração** — cria um único ZIP (`transrewrt-config-backup-YYYY-MM-DD_HHMMSS.zip` em UTC por defeito) com `config.json`, `state.json`, chave de encriptação opcional, utilizadores, preferências, prompts personalizados e dados de uso se tiver ativado. Após um backup bem-sucedido, a confirmação mostra o nome do ficheiro guardado.
- **Restaurar a partir da cópia de segurança** — abre primeiro uma **janela de confirmação**. Escolha o ZIP do backup dentro da janela (**Procurar** / seletor de ficheiros ou arrastar e largar onde suportado), depois reveja as opções:
  - **Restaurar os dados de uso** — importa uso/histórico do ZIP quando foi feito backup com uso incluído; deixe desativado se quiser apenas definições e prompts.
  - **Limpar os dados de uso antigos antes da restauração** — remove o uso/histórico existente nesta instalação antes de aplicar o backup (opcional; use quando quiser uma substituição limpa).

Backups criados na versão web ou desktop podem ser restaurados na outra. Ao restaurar um backup do desktop na versão web, os dados serão restaurados para o utilizador administrador.

<br/>

<a id="models"></a>
### Modelos

Utilize **Definições** > **Modelos** para escolher quais os modelos que aparecem na barra de ferramentas.

![Settings Models tab](../images/screenshots/pt/settings-models.png)

A página tem duas listas:

- **Modelos Disponíveis** à esquerda
- **Modelos Selecionados** à direita

Controlos úteis incluem:

- **Pesquisar modelos...** para encontrar um modelo pelo nome
- Chips **Provedor** para reduzir a lista a um motor (OpenRouter, OpenAI, Ollama, …)
- **Apenas Gratuitos** para mostrar apenas modelos gratuitos
- **Atualizar** para recarregar a lista
- **Expandir Tudo** e **Recolher Tudo** quando estiver a ordenar por provedor

Os IDs dos modelos incluem o prefixo do provedor (por exemplo, `openrouter/…` vs `openai/…`). Emblemas como **OpenAI (OpenRouter)** vs **OpenAI (direto)** mostram como o tráfego é encaminhado.

> ℹ️ **NOTA**<br/>
> **OpenRouter Body Builder** (`openrouter/bodybuilder`) é um modelo de roteamento, não um modelo de chat geral: sua resposta é JSON que descreve os corpos das requisições da API OpenRouter (por exemplo, um array `requests` com `model` e `messages`). Se você o utilizar para **Traduzir**, **Reescrever** ou **Transformar**, o painel de resultado mostrará esse JSON em vez do texto finalizado. Escolha um modelo de texto normal para essas tarefas. Veja a [página do modelo Body Builder](https://openrouter.ai/openrouter/bodybuilder) no OpenRouter.

Ações:

- Para adicionar um modelo, clique em **Adicionar** ou em qualquer lugar da entrada.

- Para remover um modelo, clique em **X** ao lado dele em **Modelos Selecionados** ou em **Selecionado** na entrada em Modelos Disponíveis.

- Para limpar a lista, clique em **Desselecionar Tudo**. O modelo gratuito obrigatório permanecerá na lista.

<br/>

> ℹ️ **NOTA**<br/>
> Se não quiser adicionar créditos ao OpenRouter imediatamente, comece ativando **Apenas Gratuitos** e escolhendo os modelos gratuitos (sem necessidade de cartão de crédito). Também pode usar o Ollama para executar modelos localmente sem qualquer chave API.

<br/>

<a id="languages"></a>
### Idiomas

Use **Definições** > **Idiomas** para organizar as listas de idiomas usadas na aplicação.

- **Idiomas principais** são fixados perto do topo das listas de idiomas em **Traduzir** e **Transformar**.
- **Idioma personalizado** permite adicionar um idioma que não está na lista integrada.

Se adicionar um idioma personalizado, ele aparecerá nos seletores de idioma juntamente com as opções integradas.

<br/>

<a id="cost-tracking"></a>
### Rastreio de custos

Use **Definições** > **Rastreio de Custos** para gerir as informações de custo.

- **Custo Total** mostra o total acumulado.
- **Copiar Valor** copia o total para a área de transferência.
- **Repor Custo** redefine o total armazenado para zero.
- **Sincronizar com utilização da chave API** define o total para corresponder ao uso reportado pela sua conta OpenRouter (apenas OpenRouter).
- **Utilização da Chave API** mostra detalhes de uso do OpenRouter, se disponíveis.
- **Eliminar dados de custos** remove todos os dados, ou apenas entradas com mais de uma data selecionada.

**Rastreio de custos:** Quando utiliza modelos OpenRouter, a aplicação mostra o seu uso real e despesas com base nas informações de custo do OpenRouter. Para todos os outros provedores, a aplicação estima os custos usando os preços publicados pelo OpenRouter; se um preço não estiver disponível, a estimativa pode ser zero.

<br/>

> ℹ️ **NOTA**<br/>
>  Todos os valores de custo são estimativas apenas para sua referência, não são faturas oficiais.

<br/>

> ⚠️ **AVISO**<br/>
> A eliminação de dados não pode ser desfeita. Antes de eliminar, certifique-se de fazer backup dos seus dados ou exportá-los através de [**Histórico**](#history)
> ou [**Painel** > **Todas as Chamadas**](#dashboard-tabs), caso contrário serão perdidos permanentemente.
> Todo o histórico de entrada/saída relacionado a cada entrada de chamada à API também será eliminado.

<br/>

<a id="transform-prompts"></a>
### Prompts de transformação

Use **Definições** > **Prompts de Transformação** para gerir prompts em massa.

Pode:

- rever os seus prompts guardados
- eliminar prompts
- importar prompts a partir de um ficheiro
- exportar prompts para cópia de segurança ou partilha
- carregar prompts de exemplo para a lista de prompts

<br/>

<a id="users"></a>
### Utilizadores

Utilize **Utilizadores** para gerir contas de utilizador na versão web. Pode adicionar utilizadores, atualizar os seus detalhes, repor palavras-passe e eliminar contas.

<br/>

<a id="api-config"></a>
### Configuração da API

Os provedores suportados são: OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras e **Ollama** (modelos locais através de uma URL base). Só precisa de configurar os provedores que utilizar.

**Aplicação web: apenas administrador**

As chaves da API são configuradas através de variáveis de ambiente do sistema ou do Docker — não são inseridas na interface web. Esta página mostra quais os provedores que têm uma chave configurada e permite testar cada um clicando no botão **`Testar`**.

<br/>

> ℹ️ **NOTA**<br/>
> Para alterar uma chave da API, atualize a variável de ambiente na sua configuração do sistema ou do Docker e reinicie o servidor ou o contentor.

> ℹ️ **NOTA**<br/>
> As **cópias de segurança da configuração** (consulte [**Definições Gerais** → Cópia de Segurança da Configuração](#general-settings)) podem incorporar chaves de provedores **resolvidas** dentro do ficheiro `config.json` do ZIP. A restauração desse ZIP **não** copia essas chaves de volta para o ficheiro de configuração persistente do servidor — as chaves ativas continuam a vir do ambiente e do estado do ficheiro existente, conforme descrito ali.

<br/>

**Aplicação de ambiente de trabalho**

Utilize **Configuração da API** para armazenar chaves da API para cada provedor que utilizar. Para o Ollama, introduza a **URL base** em vez de uma chave da API.

<br/>

> 💡 **Dica** <br/>
> Se não quiser utilizar uma chave da API nem pagar pelo uso, pode [transferir o Ollama](https://ollama.com) e executar modelos (como `translategemma:4b`) localmente na sua máquina gratuitamente. Alternativamente, pode criar uma conta gratuita no OpenRouter (sem necessidade de cartão de crédito) para utilizar os seus modelos gratuitos, ou obter uma chave da API gratuita da Cerebras, Google, Groq ou Mistral AI.

<br/>

- Adicione apenas os provedores de que necessita. Em **Definições** > **Modelos**, cada ID de modelo começa com o provedor (por exemplo `openrouter/openrouter/free`, `openai/gpt-4o`, `ollama/llama3`).

Para adicionar uma chave da API, introduza o valor no campo de texto e clique em **`Guardar`**. Para substituir uma chave existente, clique em **`Editar`**. Para verificar se uma chave está a funcionar, clique em **`Testar`**. Para a URL base do Ollama, clique sempre em **`Testar`** para verificar a ligação.

<br/>

> ℹ️ **NOTA**<br/>
> Não pode ver o valor atual de uma chave da API. Só pode substituí-la utilizando o botão **`Editar`**.
> As chaves da API são armazenadas encriptadas na configuração.

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
### A aplicação não irá traduzir, reescrever ou transformar texto

Verifique se:

- selecionou um modelo na barra de ferramentas
- pelo menos um modelo está listado em [**Definições** > **Modelos**](#models)
- a configuração da API está a funcionar

Se estiver a utilizar a aplicação de ambiente de trabalho:

1. Abra [**Definições** > **Configuração da API**](#api-config).
2. Verifique se pelo menos uma chave API está guardada.
3. Clique em **Testar** ao lado do provedor para confirmar que a chave está a funcionar.

<br/>

<a id="the-model-list-is-empty"></a>
### A lista de modelos está vazia

Abra [**Definições** > **Modelos**](#models) e clique em **Atualizar**.

Se necessário:

- pesquise por um modelo
- ative **Apenas Gratuitos**
- adicione um ou mais modelos a **Modelos Selecionados**

<br/>

<a id="the-result-is-too-slow-or-too-expensive"></a>
### O resultado é demasiado lento ou demasiado caro

Experimente uma ou mais das seguintes opções:

- escolha um modelo diferente
- utilize uma entrada mais curta
- desative **Tradução em tempo real (ao escrever)** em [**Definições** > **Definições Gerais**](#general-settings)
- utilize modelos gratuitos para tarefas simples (consulte [Modelos](#models))

<br/>

<a id="the-interface-is-in-the-wrong-language"></a>
### A interface está no idioma errado

Clique no ícone do globo na [barra de ferramentas](#toolbar) e escolha o seu **Idioma da interface** preferido.

<br/>

<a id="the-text-is-too-small-or-hard-to-read"></a>
### O texto é demasiado pequeno ou difícil de ler

Abra [**Definições** > **Definições Gerais**](#general-settings) e altere:

- **Família da Fonte**
- **Tamanho**

<br/>

<a id="dashboard-charts-are-empty"></a>
### Os gráficos do Painel estão vazios

Isto é normal se:

- apenas utilizar **modelos gratuitos** e estiver a visualizar os valores de **custo** (podem ser zero); os gráficos de contagem de chamadas em **Resumo** ainda precisam de dados do período selecionado
- o **filtro de tempo** selecionado não abrange o período em que foram feitas chamadas — experimente **Tudo** para verificar

Se os gráficos ainda estiverem vazios após selecionar **Tudo**, confirme se as chamadas aparecem em [**Histórico**](#history) ou na aba **Todas as Chamadas**.

<br/>

<a id="cost-shows-not-available-or-seems-wrong"></a>
### Custo mostra "não disponível" ou parece incorreto

Quando utiliza modelos através do **OpenRouter**, a aplicação mostra o valor real gasto conforme reportado pelo OpenRouter.

Para **outros provedores** (OpenAI direto, Anthropic direto, etc.), o custo é estimado a partir dos dados de preços publicados pelo OpenRouter. Se não for encontrado um preço correspondente para um modelo, o custo aparecerá como **não disponível** e não será adicionado ao seu total acumulado.

<br/>

<a id="total-cost-does-not-match-my-provider-bill"></a>
### O custo total não corresponde à minha fatura do provedor

Todos os valores de custo na aplicação são **estimativas apenas para referência**, não sendo declarações oficiais de faturamento.

Para aproximar o total do seu gasto real no OpenRouter, abra [**Definições** > **Rastreio de Custos**](#cost-tracking) e clique em **Sincronizar com utilização da chave API**.

<br/>

<a id="the-history-page-is-missing-from-the-sidebar"></a>
### A página Histórico está ausente na barra lateral

A opção **Manter o histórico de execução** pode estar desativada. Abra [**Definições** > **Definições Gerais**](#general-settings) e ative-a. Note que ativá-la não restaura dados de histórico previamente eliminados.

<br/>

<a id="web-app-session-expired"></a>
### Aplicação web: redirecionado para a página de início de sessão inesperadamente

A sua sessão pode ter expirado. Inicie sessão novamente. Se isto acontecer com frequência, verifique a configuração do servidor quanto às definições de duração da sessão.

<br/>

<a id="web-admin-forgot-or-lost-a-password"></a>
### Administração web: esqueceu ou perdeu a palavra-passe

Isto aplica-se à aplicação web **auto-hospedada** (Docker), não à aplicação desktop (Electron).

- Se outro administrador ainda puder iniciar sessão, ele pode abrir [**Definições** > **Utilizadores**](#users), escolher a conta e definir uma **nova palavra-passe** ali.
- Se estiver **bloqueado** mas tiver **acesso shell** à máquina ou ao recipiente, redefina a palavra-passe com a ferramenta fornecida na imagem (substitua `transrewrt` se alterou o nome padrão, e coloque entre aspas a palavra-passe se contiver espaços ou caracteres especiais):

```bash
docker exec transrewrt reset-web-password '<username>' '<new-password>'
```

O nome de usuário padrão do administrador é `admin` se nunca criou outras contas. Quando fornece apenas um argumento, ele será tratado como a nova palavra-passe para `admin`.

Se estiver a executar a partir de um **checkout de código-fonte** em vez do Docker, utilize:

```bash
pnpm run reset-web-password -- <username> <new-password>
```

O script atualiza o registo do utilizador na base de dados SQLite (e pode criar o utilizador `admin` se estiver ausente). Após a redefinição, inicie sessão com a nova palavra-passe.

<br/>

<a id="dashboard-shows-no-data-for-other-users"></a>
### O Painel não mostra dados de outros utilizadores (web)

Apenas **administradores** podem ver dados de todos os utilizadores através do filtro **Utilizador**. Por design, utilizadores regulares veem apenas a sua própria atividade.

<br/>

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Alterei um prompt e perdi as edições

Ao editar um prompt, clique sempre em **Guardar** antes de clicar em **Voltar à Execução**.

<br/><br/>

<a id="quick-tips"></a>
## Dicas rápidas

- Comece com [**Traduzir**](#translate) para garantir que a sua configuração funciona antes de avançar para [**Reescrita**](#rewrite) ou [**Transformação**](#transform).
- Utilize [**Reescrita**](#rewrite) para melhorias de linguagem do dia a dia.
- Utilize [**Transformação**](#transform) quando precisar de um fluxo de trabalho repetível para uma tarefa específica.
- Utilize [**Painel**](#dashboard) se desejar acompanhar o uso e o custo.
- Utilize [**Histórico**](#history) para rever operações anteriores e os respetivos textos completos de entrada e saída.
- Exporte prompts regularmente se estiver a criar uma biblioteca de prompts que deseja manter em segurança (consulte [Prompts de transformação](#transform-prompts)) ou se pretender partilhá-la com outros.

<br/><br/>

<a id="disclaimer"></a>
## Aviso

Os nomes e ícones dos produtos pertencem aos respetivos proprietários e são utilizados apenas para fins de identificação. Este software não é afiliado nem endossado por nenhuma das marcas mencionadas.

<br/><br/>

<a id="license"></a>
## Licença

Direitos autorais © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)
