---
translated_at: "2026-03-15T22:25:51.735Z"
source_hash: "69732149de931f2a0059ecf9073871caedaa431362e32c010e7d93bd3cbd76bc"
source_mtime: 1773611603946.006
model: "stepfun/step-3.5-flash:free"
---
<a id="transrewrt-user-guide"></a>
# Guia do Utilizador do Transrewrt

<br />

<a id="introduction"></a>
## Introdução

O Transrewrt ajuda-o a trabalhar com texto de três formas principais:

- **Traduzir** – converte texto de um idioma para outro.
- **Reescrever** – reformula texto num estilo diferente, como mais claro, mais curto ou mais formal.
- **Transformar** – processa texto utilizando instruções de IA personalizadas denominadas *prompts*.

<br />

Este guia explica como utilizar a aplicação depois de instalada e em execução. Para os passos de instalação, consulte o [README](../README.md) principal.

<br />

> ℹ️ **NOTA**<br/>
> O Transrewrt está disponível como uma aplicação de ambiente de trabalho para Windows e Linux, e como uma aplicação Web auto-hospedada. Este guia centra-se na utilização quotidiana da aplicação. Quando algo se aplica apenas a uma versão, é claramente indicado.

<small>**Ler noutros idiomas:** [English (UK)](../USER-GUIDE.md) · [Português (BR)](USER-GUIDE.pt-BR.md) · [العربية](USER-GUIDE.ar.md) · [বাংলা](USER-GUIDE.bn.md) · [Català](USER-GUIDE.ca.md) · [简体中文](USER-GUIDE.zh-CN.md) · [繁體中文](USER-GUIDE.zh-TW.md) · [Hrvatski](USER-GUIDE.hr.md) · [Čeština](USER-GUIDE.cs.md) · [Nederlands](USER-GUIDE.nl.md) · [English (US)](USER-GUIDE.en-US.md) · [Filipino](USER-GUIDE.tl.md) · [Français](USER-GUIDE.fr.md) · [Deutsch](USER-GUIDE.de.md) · [Ελληνικά](USER-GUIDE.el.md) · [हिन्दी](USER-GUIDE.hi.md) · [Magyar](USER-GUIDE.hu.md) · [Italiano](USER-GUIDE.it.md) · [日本語](USER-GUIDE.ja.md) · [Basa Jawa](USER-GUIDE.jv.md) · [한국어](USER-GUIDE.ko.md) · [Bahasa Melayu](USER-GUIDE.ms.md) · [فارسی](USER-GUIDE.fa.md) · [Polski](USER-GUIDE.pl.md) · [Português (PT)](USER-GUIDE.pt.md) · [ਪੰਜਾਬੀ](USER-GUIDE.pa.md) · [Română](USER-GUIDE.ro.md) · [Русский](USER-GUIDE.ru.md) · [Slovenčina](USER-GUIDE.sk.md) · [Español](USER-GUIDE.es.md) · [Kiswahili](USER-GUIDE.sw.md) · [Svenska](USER-GUIDE.sv.md) · [తెలుగు](USER-GUIDE.te.md) · [ภาษาไทย](USER-GUIDE.th.md) · [Türkçe](USER-GUIDE.tr.md) · [Українська](USER-GUIDE.uk.md) · [Tiếng Việt](USER-GUIDE.vi.md)</small>

<br />

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Índice**

- [Antes de começar](#antes-de-começar)
  - [Como obter uma chave de API (aplicação de ambiente de trabalho)](#como-obter-uma-chave-de-api-aplicacao-de-ambiente-de-trabalho)
- [Primeiros passos](#primeiros-passos)
- [Partes principais da janela](#partes-principais-da-janela)
  - [Barra lateral](#barra-lateral)
  - [Barra de ferramentas](#barra-de-ferramentas)
  - [Painéis de entrada e saída](#painéis-de-entrada-e-saída)
- [Traduzir](#traduzir)
  - [Traduzir texto](#traduzir-texto)
  - [Seleção de idioma](#selecao-de-idioma)
  - [Definições de tradução úteis](#definicoes-de-traducao-uteis)
  - [Atalhos de teclado](#atalhos-de-teclado)
- [Reescrever](#reescrever)
  - [Reescrever texto](#reescrever-texto)
- [Transformar](#transformar)
  - [Executar um prompt existente](#executar-um-prompt-existente)
  - [Se ainda não tiver prompts](#se-ainda-nao-tiver-prompts)
  - [Criar um prompt rapidamente](#criar-um-prompt-rapidamente)
  - [Editar um prompt](#editar-um-prompt)
  - [Testar um prompt antes de o utilizar](#testar-um-prompt-antes-de-o-utilizar)
  - [Gerir prompts guardados](#gerir-prompts-guardados)
- [Painel de controlo](#painel-de-controlo)
  - [Filtrar os dados](#filtrar-os-dados)
  - [Separadores do painel de controlo](#separadores-do-painel-de-controlo)
  - [Exportar dados](#exportar-dados)
  - [Eliminar registos armazenados de um modelo](#eliminar-registos-armazenados-de-um-modelo)
- [Definições](#definicoes)
  - [Definições gerais](#definicoes-gerais)
  - [Modelos](#modelos)
  - [Idiomas](#idiomas)
  - [Controlo de custos](#controlo-de-custos)
  - [Prompts de transformação](#prompts-de-transformacao)
  - [Utilizadores](#utilizadores)
  - [Config. de API](#config-de-api)
  - [Acerca](#acerca)
- [Problemas comuns](#problemas-comuns)
  - [A aplicação não traduz, reescreve ou transforma texto](#a-aplicacao-nao-traduz-reescreve-ou-transforma-texto)
  - [A lista de modelos está vazia](#a-lista-de-modelos-esta-vazia)
  - [O resultado é demasiado lento ou caro](#o-resultado-e-demasiado-lento-ou-caro)
  - [A interface está no idioma errado](#a-interface-esta-no-idioma-errado)
  - [O texto é demasiado pequeno ou difícil de ler](#o-texto-e-demasiado-pequeno-ou-dificil-de-ler)
  - [Mudei um prompt e perdi as edições](#mudei-um-prompt-e-perdi-as-edicoes)
- [Dicas rápidas](#dicas-rapidas)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<br /><br />

<a id="antes-de-comecar"></a>

## Antes de começar

Para usar o Transrewrt, precisa de acesso ao serviço de IA via OpenRouter.

Não precisa de escolher um modelo pago antes de começar. A aplicação inclui sempre um modelo **gratuito** incorporado, pelo que, para uso normal, isso é suficiente para começar a traduzir, reescrever e transformar texto.

Em linguagem simples:

- Um **modelo** é o motor de IA que faz o trabalho.
- Uma **chave de API** é a sua credencial de acesso pessoal para esse serviço.

Se estiver a usar a **aplicação de ambiente de trabalho**, precisará de uma chave de API. Para passos detalhados, consulte [Como obter uma chave de API](#how-to-get-an-api-key-desktop-app) abaixo. Em resumo: crie uma conta em [OpenRouter](https://openrouter.ai), abra a página [Chaves](https://openrouter.ai/keys), crie uma nova chave e cole-a em [**Definições** > **Configuração de API**](#api-config) no Transrewrt.

Se estiver a usar a **versão web**, o proprietário do servidor geralmente configura isso para si, pelo que normalmente não precisará de inserir uma chave de API você mesmo.

<br />

<a id="how-to-get-an-api-key-desktop-app"></a>
### Como obter uma chave de API (aplicação de ambiente de trabalho)

Se estiver a usar a aplicação de ambiente de trabalho, siga estes passos:

1. Aceda a [OpenRouter](https://openrouter.ai) no seu navegador.
2. Crie uma conta ou inicie sessão.
3. Abra a página [Chaves](https://openrouter.ai/keys).
4. Clique no botão para criar uma nova chave de API.
5. Dê um nome à chave para a poder reconhecer mais tarde.
6. Copie a nova chave de API.
7. Volte ao Transrewrt e abra **Definições** > **Configuração de API**.
8. Cole a chave em **Chave de API do OpenRouter**.
9. Clique em **Testar Configuração de API** para se certificar de que funciona.

> ℹ️ **NOTA**<br/>
> Pode começar com a rota gratuita do OpenRouter ou com qualquer um dos outros modelos gratuitos disponíveis. Em muitos casos, isso é suficiente para começar a usar o Transrewrt sem escolher um modelo pago.

<br /><br />

<a id="getting-started"></a>
## Introdução

Se esta é a sua primeira vez a usar o Transrewrt, siga esta ordem:

1. Abra a aplicação.
2. Se necessário, escolha o seu **Idioma da interface** a partir do ícone globo.
3. Se estiver na **aplicação de ambiente de trabalho**, abra [**Definições** > **Configuração de API**](#api-config), cole a sua chave de API do OpenRouter e clique em **Testar Configuração de API**.
4. Abra [**Definições** > **Modelos**](#models) e adicione um ou mais modelos a **Modelos Selecionados**.
5. Abra [**Definições** > **Idiomas**](#languages) e escolha os seus **Idiomas principais** se quiser que os idiomas mais usados apareçam primeiro.
6. Vá a **Traduzir** e execute uma tradução simples para confirmar que tudo está a funcionar.
7. Uma vez que funcione, experimente **Reescrever** e depois **Transformar**.

Esta ordem é importante. Evita o problema mais comum na primeira utilização: tentar executar uma tarefa antes de a aplicação ter uma ligação de API a funcionar ou um modelo selecionado.

<br /><br />

<a id="main-parts-of-the-window"></a>
## Partes principais da janela

A aplicação está dividida em três áreas principais:

- A **barra lateral** à esquerda.
- A **barra de ferramentas** no topo.
- A **área de trabalho** no centro.

<br />

<a id="sidebar"></a>
### Barra lateral

Use a barra lateral para se movimentar pela aplicação:

<br />

<table>
  <tr>
    <td valign="top">
       <img src="../images/screenshots/pt/sidebar.png" alt="Barra lateral da aplicação" style="max-width: 100%; border: 1px solid #ddd; border-radius: 4px;">
    </td>
    <td valign="top">
      <br />
      <ul>
        <li><strong>Traduzir</strong> abre o espaço de trabalho de tradução.</li>
        <li><strong>Reescrever</strong> abre o espaço de trabalho de reescrita.</li>
        <li><strong>Transformar</strong> abre o espaço de trabalho de prompt personalizado.</li>
        <li><strong>Painel</strong> mostra informações de uso e custo.</li>
        <li><strong>Definições</strong> abre o painel de definições.</li>
        <li><strong>Utilizador</strong> mostra o nome de utilizador do utilizador com sessão iniciada (apenas web).</li>
      </ul>
      <br />
      <p>Também pode recolher a barra lateral para obter mais espaço clicando no ícone junto ao logótipo da aplicação.</p>
    </td>
  </tr>
</table>

<br />

<a id="toolbar"></a>
### Barra de ferramentas

A barra de ferramentas muda ligeiramente dependendo de onde está na aplicação.

- À esquerda, mostra o nome da página atual.
- À direita, mostra o **seletor de modelos** e o controlo de **Idioma da interface**.

O **seletor de modelos** permite-lhe escolher qual o motor de IA a usar para a tarefa atual.

  ![Seletor de modelos](../images/screenshots/pt/model-selector.png)

> ℹ️ **NOTA**<br/>
> Alguns modelos gratuitos podem deixar de funcionar temporariamente se estiverem indisponíveis ou tiverem atingido um limite de uso. Se isso acontecer, a aplicação removerá esse modelo da sua lista automaticamente.


O **ícone globo + código de idioma** altera o idioma da interface da aplicação, como menus e botões. **Não** altera os idiomas de tradução usados em **Traduzir**.

  ![Seletor de idioma da interface](../images/screenshots/pt/language-selector.png)

<br />

<a id="input-and-output-panels"></a>

### Painéis de Entrada e Saída

A maioria dos espaços de trabalho utiliza um painel **Entrada** à esquerda e um painel **Saída** à direita.

O painel **Entrada** mostra:

- Contagem de carateres
- Contagem de palavras
- Contagem de parágrafos

O painel **Saída** pode mostrar:

- Quanto tempo a tarefa demorou
- O custo dessa tarefa
- O seu custo total acumulado
- **TPS** (tokens por segundo), que é uma medida simples de velocidade
- Contagens de carateres, palavras e parágrafos
- O modelo utilizado

Se está curioso com os termos técnicos:

- **Token** significa um pequeno pedaço de texto. Pode pensar nisso como parte de uma palavra ou uma palavra curta.
- **TPS** significa quantos desses pedaços de texto o modelo processou por segundo.

<br /><br />

<a id="translate"></a>
## Traduzir

 utilize **Traduzir** quando quiser converter texto de um idioma para outro.

![Espaço de trabalho de Tradução](../images/screenshots/pt/translate.png)

<br />

<a id="translate-text"></a>
### Traduzir texto

1. Abra **Traduzir**.
2. Escolha um idioma em **De**.
3. Escolha um idioma em **Para**.
4. Escolha um modelo na barra de ferramentas.
5. Digite ou cole texto em **Entrada**.
6. Clique em **Traduzir**.
7. Leia o resultado em **Saída**.
8. Utilize o botão de copiar se quiser copiar o resultado.

<br />

<a id="language-selection"></a>
### Selecção de idioma

- **De** pode ser um idioma específico ou **Detetar Idioma**.
- **Para** é o idioma em que quer o resultado.

Os seus **Idiomas principais** selecionados aparecem no topo da lista. Pode defini-los em [**Definições** > **Idiomas**](#languages).

<br />

<a id="helpful-translation-settings"></a>
### Definições de tradução úteis

Em [**Definições** > **Definições Gerais**](#general-settings), pode alterar o comportamento da tradução:

- **Tradução automática ao colar** executa uma tradução assim que colar texto.
- **Copiar resultado automaticamente para a área de transferência** copia o resultado automaticamente após uma execução bem-sucedida.
- **Tradução em tempo real (enquanto digita)** executa traduções enquanto digita.
- **Tempo limite (ms)** controla quanto tempo a aplicação espera antes de executar uma tradução em tempo real.

<br />

<a id="keyboard-shortcuts"></a>
### Atalhos de teclado

Em [**Definições** > **Definições Gerais**](#general-settings), **Comportamento da tecla ENTER** controla o que acontece quando prime Enter:

- **Enter** pode executar a tarefa e **Shift+Enter** pode adicionar uma nova linha.
- Ou a aplicação pode fazer o inverso.

O atalho atual também é mostrado no botão **Traduzir**.

<br /><br />

<a id="rewrite"></a>
## Reescrever

 utilize **Reescrever** quando quiser melhorar a redação sem alterar o significado principal.

![Espaço de trabalho de Reescrever](../images/screenshots/pt/rewrite.png)

Isto é útil para:

- corrigir ortografia e gramática
- tornar o texto mais claro
- tornar o texto mais formal ou mais informal
- encurtar ou expandir texto
- fazer o texto soar mais técnico

<br />

<a id="rewrite-text"></a>
### Reescrever texto

1. Abra **Reescrever**.
2. Escolha um **Modo**.
3. Escolha um modelo na barra de ferramentas.
4. Digite ou cole texto em **Entrada**.
5. Clique em **Reescrever**.
6. Reveja o resultado em **Saída**.

O mesmo comportamento da tecla Enter descrito em [**Traduzir**](#keyboard-shortcuts) também se aplica aqui.

<br /><br />

<a id="transform"></a>
## Transformar

 utilize **Transformar** quando quiser que a IA siga um conjunto personalizado de instruções.

![Espaço de trabalho de Transformar](../images/screenshots/pt/transform.png)

Esta é a área mais flexível da aplicação. Pode utilizá-la para tarefas como:

- resumir notas
- transformar texto rudimentar num e-mail polido
- extrair pontos-chave
- converter texto num formato específico

<br />

<a id="run-an-existing-prompt"></a>
### Executar um prompt existente

1. Abra **Transformar**.
2. Escolha um prompt da lista de prompts.
3. Se aparecer uma caixa de idioma **Destino**, escolha um idioma se desejar.
4. Digite ou cole texto em **Entrada**.
5. Clique em **Transformar**.
6. Leia o resultado em **Saída**.

<br />

<a id="if-you-have-no-prompts-yet"></a>
### Se ainda não tiver prompts

Se a sua lista de prompts estiver vazia, clique em **Carregar prompts de exemplo**. Isto adiciona exemplos incorporados para poder começar rapidamente.

> ℹ️ **NOTA**<br/>
> Os prompts de exemplo são fornecidos em inglês. Após os carregar, pode editar um prompt e utilizar **Traduzir prompt** se quiser adaptar o texto do prompt para outro idioma.

<br />

<a id="create-a-prompt-quickly"></a>

### Criar um prompt rapidamente

A forma mais rápida de criar um prompt é:

1. Clique em **Novo prompt**.
2. Clique em **Gerar prompt**.
3. Descreva o que deseja que o prompt faça.
4. Escolha um modelo.
5. Deixe a aplicação criar um rascunho para si.
6. Reveja o rascunho e clique em **Guardar**.

![Gerar prompt](../images/screenshots/pt/transform-generate.png)

<br />

### Editar um prompt

Quando cria ou edita um prompt, o editor aparece à esquerda e uma área de teste aparece à direita.

![Editor de prompt de Transformação](../images/screenshots/pt/transform-prompt-edit.png)

Os principais campos são:

- **Nome do prompt**: o nome apresentado na lista de prompts.
- **Instruções do prompt (opcional)**: uma breve dica exibida ao utilizador ao executar o prompt.
- **Função do Modelo**: a função geral atribuída à IA, como 'You are a helpful assistant.'
- **Instruções do Modelo (uma por linha)**: as regras específicas que deseja que a IA siga.
- **Descrição do resultado**: uma palavra curta que descreve o resultado, como 'summary' ou 'rewrite'.
- **Temperatura (0.0 → 1.0)**: um controlo de criatividade.
- **Pedir idioma de destino**: adiciona um seletor de idioma de destino ao executar o prompt.

Se o termo técnico **Temperatura** é novo para si, pense da seguinte forma:

- Uma **temperatura mais baixa** dá resultados mais estáveis e previsíveis.
- Uma **temperatura mais alta** dá mais variedade e criatividade.

Também pode utilizar:

- **`Generate prompt`** para criar um novo rascunho a partir de uma descrição simples
- **`Improve prompt`** para refinar um prompt existente
- **`Translate prompt`** para traduzir os campos do prompt

> ⚠️ **AVISO**<br/>
> Clique em **`Save`** antes de clicar em **`Back to Run`**. Se voltar sem guardar, as suas alterações serão perdidas.

<br />

<a id="test-a-prompt-before-using-it"></a>
### Testar um prompt antes de o utilizar

O painel de teste à direita permite-lhe experimentar o seu prompt com texto de exemplo antes de o utilizar no trabalho diário.

Isto é útil quando:

- está a criar um novo prompt
- está a comparar duas versões de um prompt
- quer verificar o tom, comprimento ou formato de saída

<br />

<a id="manage-saved-prompts"></a>
### Gerir prompts guardados

Para gerir os prompts guardados num único local, abra [**Configurações** > **Prompts de Transformação**](#transform-prompts).

Aí pode:

- listar e eliminar os seus prompts
- exportar prompts como **JSON**, **CSV** ou **XLSX**
- importar prompts de um ficheiro

<br /><br />

## Painel de Controle

Utilize o **Painel de Controle** para ver quanto está a utilizar a aplicação e quanto está a custar.

![Resumo do painel](../images/screenshots/pt/dashboard-summary.png)

<br />

<a id="filter-the-data"></a>
### Filtrar os dados

Utilize os botões de filtro na parte superior para alterar o intervalo de tempo.

![Filtros do painel](../images/screenshots/pt/dashboard-filter.png)

> ℹ️ **NOTA**<br/>
> Na versão web, os administradores também podem ver um filtro **Utilizador**. Isto permite-lhes alternar entre **Todos os utilizadores** e um utilizador individual.

<br />

<a id="dashboard-tabs"></a>
### Abas do painel

- **Resumo** fornece uma visão geral da utilização e custos.
- **Por Uso** divide a atividade por idioma de tradução, modo de reescrita e prompt de transformação.
- **Por Modelo** mostra quais os modelos que utilizou e quanto custaram.
- **Por Dia** mostra totais diários.
- **Todas as Chamadas** mostra o histórico completo de chamadas e permite exportá-lo.

<br />

<a id="export-data"></a>
### Exportar dados

As tabelas do painel podem exportar dados em:

- **JSON**
- **CSV**
- **XLSX**

Isto é útil se quiser rever a atividade fora da aplicação ou partilhar um relatório.

<br />

<a id="delete-stored-records-for-a-model"></a>
### Eliminar registos armazenados de um modelo

Em **Por Modelo** ou **Todas as Chamadas**, pode remover os registos armazenados de um modelo.

> ⚠️ **AVISO**<br/>
> A eliminação de registos armazenados não pode ser revertida. Utilize apenas se tiver a certeza de que não precisa mais desse histórico.

Para eliminar todos os dados ou remover registos com base na sua idade, aceda a [**Configurações** > **Controle de Custos**](#cost-tracking). Aí encontrará opções para eliminar todos os dados armazenados ou apenas dados anteriores a uma determinada data.

<br /><br />

<a id="settings"></a>
## Configurações

Abra **Configurações** na barra lateral para personalizar o comportamento da aplicação.

Os separadores disponíveis podem variar:

- **Configuração da API** está disponível apenas na aplicação desktop.
- **Utilizadores** está disponível apenas na aplicação web e apenas para administradores.

<br />

<a id="general-settings"></a>

### Definições gerais

Use **Definições Gerais** para controlar o comportamento de digitação e a aparência.

**Comportamento**

- **Comportamento do ENTER** escolhe se a tecla Enter executa a tarefa ou insere uma nova linha.
- **Tradução automática ao colar** inicia a tradução assim que colar o texto.
- **Cópia automática do resultado para a área de transferência** copia os resultados com sucesso automaticamente.
- **Tradução em tempo real (enquanto digita)** traduz enquanto digita.
- **Tempo limite (ms)** define o tempo de espera para a tradução em tempo real.

**Aparência**

- **Dígitos de fração de custo** altera a forma como os decimais de custo são exibidos.
- **Família de fontes** altera a fonte de escrita nos painéis de texto.
- **Tamanho** altera o tamanho da fonte.
- **Apenas na web:** **mostrar uma margem em torno da aplicação** adiciona espaço extra em torno da interface.

<br />

<a id="models"></a>
### Modelos

Use **Definições** > **Modelos** para escolher quais modelos aparecem na barra de ferramentas.

![Separador Modelos das Definições](../images/screenshots/pt/settings-models.png)

A página tem duas listas:

- **Modelos Disponíveis** à esquerda
- **Modelos Selecionados** à direita

Controlos úteis incluem:

- **Procurar modelos...** para encontrar um modelo pelo nome
- **Apenas Gratuitos** para mostrar apenas modelos gratuitos
- **Atualizar** para recarregar a lista
- **Expandir Tudo** e **Colapsar Tudo** quando estiver a ordenar por fornecedor

Para adicionar um modelo, clique em **Adicionar**.

Para remover um modelo, clique em **X** ao lado dele em **Modelos Selecionados**.

Para limpar a lista, clique em **Deselecionar todos**. O modelo gratuito necessário permanecerá na lista.

> ℹ️ **NOTA**<br/>
> Se não quiser adicionar créditos ao OpenRouter imediatamente, comece por ativar **Apenas Gratuitos** e escolher os modelos gratuitos.

<br />

<a id="languages"></a>
### Idiomas

Use **Definições** > **Idiomas** para organizar as listas de idiomas utilizadas na aplicação.

- **Idiomas principais** são fixados perto do topo das listas de idiomas em **Traduzir** e **Transformar**.
- **Idioma personalizado** permite-lhe adicionar um idioma que não está na lista integrada.

Se adicionar um idioma personalizado, ele aparece nos seletores de idioma juntamente com as opções integradas.

<br />

<a id="cost-tracking"></a>
### Monitorização de custos

Use **Definições** > **Monitorização de Custos** para gerir informações de custo.

- **Custo Total** mostra o total acumulado.
- **Copiar Valor** copia o total para a área de transferência.
- **Repor Custo** repõe o total armazenado para zero.
- **Sincronizar com uso da chave API** define o total para corresponder ao uso reportado pelo OpenRouter.
- **Uso da Chave API** mostra detalhes de uso, se disponível.
- **Eliminar dados de custo** remove todos os dados, ou apenas entradas mais antigas do que uma data selecionada.

> ⚠️ **AVISO**<br/>
> A eliminação de dados não pode ser revertida. Antes de eliminar, certifique-se de fazer uma cópia de segurança dos seus dados ou exportá-los via [**Painel de Controlo** > **Todas as Chamadas**](#dashboard-tabs), caso contrário serão perdidos permanentemente.

<br />

<a id="transform-prompts"></a>
### Prompts de transformação

Use **Definições** > **Prompts de Transformação** para gerir prompts em massa.

Pode:

- rever os seus prompts guardados
- eliminar prompts
- importar prompts de um ficheiro
- exportar prompts para cópia de segurança ou partilha

<br />

<a id="users"></a>
### Utilizadores

**Apenas na web - apenas administrador**

Use **Utilizadores** para gerir contas de utilizador na versão web. Pode adicionar utilizadores, atualizar os seus detalhes, repor palavras-passe e eliminar contas.

<br />

<a id="api-config"></a>
### Configuração da API

**Apenas no desktop**

Use **Configuração da API** para ligar a aplicação desktop ao OpenRouter ou a um proxy Transrewrt.

- **Chave API do OpenRouter** é onde cola a sua chave.
- **URL da API** é o endereço do serviço. Deixe esta no padrão a menos que lhe tenha sido dado um diferente.
- **Usar Proxy Transrewrt** encaminha os pedidos através de um serviço de proxy em vez de diretamente para o OpenRouter.
- **Semente da Chave** aparece quando a opção de proxy está ativada.
- **Testar Configuração da API** verifica se a configuração atual está a funcionar.

Para passos detalhados sobre como obter a sua chave API, consulte [Como obter uma chave API](#how-to-get-an-api-key-desktop-app) acima.

> ℹ️ **NOTA**<br/>
> Se não tem a certeza do que significam **URL da API**, **Usar Proxy Transrewrt** ou **Semente da Chave**, deixe-os inalterados e use a configuração padrão do OpenRouter. Mais informações sobre o proxy estão disponíveis no [repositório do Proxy Transrewrt](https://github.com/wsj-br/transrewrt-proxy).


<br />

<a id="about"></a>

### Sobre

A **Sobre** mostra:

- o nome da aplicação
- o número da versão
- a data de compilação
- uma ligação para o repositório do projeto

<br /><br />

<a id="common-issues"></a>
## Problemas comuns

Se algo não funcionar como esperado, verifique primeiro os seguintes pontos.

<br />

<a id="the-app-will-not-translate-rewrite-or-transform-text"></a>
### A aplicação não irá traduzir, reescrever ou transformar texto

Verifique se:

- selecionou um modelo na barra de ferramentas
- pelo menos um modelo está listado em [**Definições** > **Modelos**](#models)
- a sua configuração de API está a funcionar

Se está a usar a aplicação de ambiente de trabalho:

1. Abra [**Definições** > **Configuração de API**](#api-config).
2. Verifique se a sua chave de API está guardada.
3. Clique em **Testar Configuração de API**.

<br />

<a id="the-model-list-is-empty"></a>
### A lista de modelos está vazia

Abra [**Definições** > **Modelos**](#models) e clique em **Atualizar**.

Se necessário:

- procure um modelo
- ative **Apenas Gratuitos**
- adicione um ou mais modelos a **Modelos Selecionados**

<br />

<a id="the-result-is-too-slow-or-too-expensive"></a>
### O resultado é muito lento ou muito caro

Tente uma ou mais das seguintes:

- escolha um modelo diferente
- use um texto de entrada mais curto
- desative **Tradução em tempo real (durante a digitação)** em [**Definições** > **Definições Gerais**](#general-settings)
- use modelos gratuitos para tarefas simples (veja [Modelos](#models))

<br />

<a id="the-interface-is-in-the-wrong-language"></a>
### A interface está no idioma errado

Clique no ícone do globo na [barra de ferramentas](#toolbar) e escolha o seu **Idioma da interface** preferido.

<br />

<a id="the-text-is-too-small-or-hard-to-read"></a>
### O texto é muito pequeno ou difícil de ler

Abra [**Definições** > **Definições Gerais**](#general-settings) e altere:

- **Família de Fontes**
- **Tamanho**

<br />

<a id="i-changed-a-prompt-and-lost-the-edits"></a>
### Mudei um prompt e perdi as alterações

Ao editar um prompt, clique sempre em **Guardar** antes de clicar em **Voltar para Executar**.

<br /><br />

<a id="quick-tips"></a>
## Dicas rápidas

- Comece com [**Traduzir**](#translate) para garantir que a sua configuração funciona antes de avançar para [**Reescrever**](#rewrite) ou [**Transformar**](#transform).
- Use [**Reescrever**](#rewrite) para melhorias de redação do quotidiano.
- Use [**Transformar**](#transform) quando precisar de um fluxo de trabalho repetível para uma tarefa específica.
- Use [**Painel de Controlo**](#dashboard) se quiser monitorizar a utilização e custos.
- Exporte prompts regularmente se criar uma biblioteca de prompts que queira manter segura (veja [Transformar Prompts](#transform-prompts)).

<br /><br />

<a id="disclaimer"></a>
## Aviso Legal

Os nomes de produtos e ícones pertencem aos seus respetivos proprietários e são usados apenas para fins de identificação. Este software não está associado nem endossado por nenhuma das marcas mencionadas.

<br /><br />

<a id="license"></a>
## Licença

Copyright © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](LICENSE)