<p align="center">
  <img src="../images/transrewrt_banner.png" alt="Transrewrt Banner"  />
</p>

<h1 align="center">Transrewrt</h1>

<p align="center">
  <a href="https://github.com/wsj-br/transrewrt/releases"><img src="https://img.shields.io/badge/version-1.6.3-blue" alt="Version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-Apache%202.0-green" alt="License: Apache 2.0"></a>
  <img src="https://img.shields.io/badge/platform-Windows%20%7C%20Linux%20%7C%20Docker-lightgrey" alt="Platform">
</p>

Ferramenta de texto com IA para **traduzir**, **reescrever** e **transformar** com prompts personalizados. Use seus próprios provedores de IA (OpenRouter, OpenAI, Anthropic, Google Gemini, DeepSeek, Groq, Mistral, xAI, Cerebras, NVIDIA, Alibaba Cloud, apikey.fun, endpoints compatíveis com OpenAI e servidores locais como Ollama, LM Studio ou llama.cpp). Execute como um aplicativo de desktop (Windows / Linux) ou um aplicativo web auto-hospedado (Docker). Sem conta Transrewrt na nuvem.

## Recursos

| Capacidade | Descrição |
| --- | --- |
| **Traduzir** | Dezenas de idiomas, detecção automática, glossários, refinar com Rephrase |
| **Reescrever** | Clareza, tom, comprimento, ortografia e gramática — no mesmo idioma |
| **Transformar** | Prompts de IA personalizados que você cria, edita e reutiliza |
| **Implantar** | Desktop Electron ou web Docker (amd64 e arm64) |
| **Chaves** | Seus provedores, seu host — Predefinições fáceis ou lista de modelos avançados |

![Traduzir](../images/screenshots/pt-BR/translate.png)

<small>**Leia em outros idiomas:** </small>
<small id="lang-list">[English (UK)](../README.md) · [العربية](./README.ar.md) · [简体中文](./README.zh-Hans.md) · [繁體中文](./README.zh-Hant.md) · [Čeština](./README.cs.md) · [Nederlands](./README.nl.md) · [Français](./README.fr.md) · [Deutsch](./README.de.md) · [Ελληνικά](./README.el.md) · [हिन्दी](./README.hi.md) · [Magyar](./README.hu.md) · [Italiano](./README.it.md) · [日本語](./README.ja.md) · [한국어](./README.ko.md) · [فارسی](./README.fa.md) · [Polski](./README.pl.md) · [Português (Brasil)](./README.pt-BR.md) · [Română](./README.ro.md) · [Русский](./README.ru.md) · [Slovenčina](./README.sk.md) · [Español](./README.es.md) · [Svenska](./README.sv.md) · [ไทย](./README.th.md) · [Türkçe](./README.tr.md) · [Українська](./README.uk.md) · [Tiếng Việt](./README.vi.md)</small>

## Início rápido

**Docker**

```bash
docker pull ghcr.io/wsj-br/transrewrt:latest

docker run -d \
  -p 5000:5000 \
  -v transrewrt-data:/app/data \
  -e PROVIDER_API_KEY=your-key \
  --name transrewrt \
  ghcr.io/wsj-br/transrewrt:latest
```

Substitua `PROVIDER_API_KEY` pela sua variável de provedor (por exemplo, `OPENROUTER_API_KEY`, `OPENAI_API_KEY`, `GROQ_API_KEY`). Abra [http://localhost:5000](http://localhost:5000) e altere a senha padrão do Administrador. As chaves são definidas por meio de variáveis de ambiente (não pela interface web).

**Windows** — Baixe `Transrewrt Setup x.y.z.exe` em [Releases](https://github.com/wsj-br/transrewrt/releases), instale e adicione as chaves em **Configurações → API**.

**Linux** — Baixe o `.AppImage` em [Releases](https://github.com/wsj-br/transrewrt/releases), então:

```bash
chmod +x Transrewrt-x.y.z-x64.AppImage && ./Transrewrt-x.y.z-x64.AppImage
```

Detalhes da plataforma (Compose, SmartScreen, libs apt, flags de GPU, fuso horário): [Documentos de início rápido](https://wsj-br.github.io/transrewrt/docs/quick-start/).

## Documentação

Documentos completos do produto (instalação, chaves de API, guias, configurações, solução de problemas):

**[https://wsj-br.github.io/transrewrt/docs/](https://wsj-br.github.io/transrewrt/docs/)**

- [Chave de API](https://wsj-br.github.io/transrewrt/docs/api-key/)
- [Configuração](https://wsj-br.github.io/transrewrt/docs/configuration/)
- [Traduzir](https://wsj-br.github.io/transrewrt/docs/translate/) · [Reescrever](https://wsj-br.github.io/transrewrt/docs/rewrite/) · [Transformar](https://wsj-br.github.io/transrewrt/docs/transform/)
- [Problemas comuns](https://wsj-br.github.io/transrewrt/docs/common-issues/)

## Desenvolvimento

- Configuração, compilação, teste, implantação: [dev/DEVELOPMENT.md](../dev/DEVELOPMENT.md)
- Visão geral da arquitetura: [dev/SYSTEM-OVERVIEW.md](../dev/SYSTEM-OVERVIEW.md)

## Suporte

Abra um problema no [GitHub](https://github.com/wsj-br/transrewrt/issues). Inclua sua plataforma (Windows / Linux / Docker) e versão do aplicativo (caixa de diálogo Sobre ou página de Releases).

## Agradecimentos

As sugestões de predefinição do Modo Fácil no editor de predefinições usam dados de avaliação públicos de:

- [languagebench](https://huggingface.co/spaces/fair-forward/languagebench) (CC BY-SA 4.0)
- [Artificial Analysis](https://artificialanalysis.ai/) (atribuição necessária para dados da API)

As licenças de dependência de terceiros e estes avisos de fonte de dados estão listados em [NOTICES](../NOTICES).

## Licença

Direitos autorais © 2026 Waldemar Scudeller Jr.

[Apache License 2.0](../LICENSE)

Os nomes e ícones dos produtos pertencem a seus respectivos proprietários e são usados apenas para fins de identificação. Este software não é afiliado ou endossado por essas marcas.

<small>

> **Observação sobre traduções de UI e documentação:** Todos os idiomas de interface e documentação, exceto inglês (Reino Unido), foram traduzidos com IA usando [ai-i18n-tools](https://wsj-br.github.io/ai-i18n-tools/); a redação pode ser imprecisa ou conter erros.

</small>
