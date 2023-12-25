## 🛡️ Backend do Flag SecOps Hub

<p align="center">
 <a href="#badge">
        <img alt="prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>
    <a href="#badge">
        <img alt="eslint" src="https://img.shields.io/badge/ESLint-Configured-blue"></a>
    <a href="#badge">
        <img alt="jest" src="https://cdn.jsdelivr.net/gh/justjavac/jest-badges/badges/100.svg"></a>
    <a href="#badge">
        <img alt="husky" src="https://img.shields.io/badge/husky-8.0.3-blueviolet"></a>
    <a href="#badge">
        <img alt="lint-staged" src="https://img.shields.io/badge/lint--staged-15.2.0-orange"></a>
    <a href="#badge">
        <img alt="commitlint" src="https://img.shields.io/badge/commitlint-18.4.3-yellow"></a>
</p>

## 📚 Descrição

**flag-secops-hub-backend** O backend do "Flag-SecOps-Hub" é responsável por gerenciar a autenticação de usuários e o controle de acesso, além de permitir a gestão das Feature Flags e seus respectivos valores.

---

## 🍂 Pilha de tecnologia

- [NodeJS](https://nodejs.org/en)
- [TypeScript](https://www.typescriptlang.org)
- [Fastify](https://www.fastify.io)
- [MongoDB](https://www.mongodb.com)
- [Jest](https://jestjs.io)
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Lint Staged](https://github.com/okonet/lint-staged#readme)
- [Husky](https://typicode.github.io/husky)
- [Commitlint](https://commitlint.js.org)
- [Comitizen](https://commitizen-tools.github.io/commitizen)
- [Release It](https://github.com/release-it/release-it)
- [Winston](https://github.com/winstonjs/winston)
- [Docsify](https://docsify.js.org)
- [Swagger](https://swagger.io)
- [Github Actions](https://docs.github.com/pt/actions)
- [Docker](https://www.docker.com)
- [SonarQube](https://www.sonarqube.org)

---

## 📄 Documentações

**Gerando um Servidor de Documentação com Swagger**
Para visualizar a documentação Swagger:

- Inicie o projeto com `npm run dev` para levantar o servidor localmente.
- Acesse `http://localhost:5000/documentation` no navegador para ver a interface do Swagger com todas as rotas disponíveis.

**Gerando um Servidor de Documentação com Docsify**
Para visualizar a documentação no Docsify:

- Se ainda não inicializou a documentação, execute `npm run docs:init` para preparar a pasta `docs`.
- Em seguida, execute `npm run docs:serve` para levantar um servidor local na porta `7000`.
- Acesse `http://localhost:7000` no navegador, você deverá ver uma interface amigável para navegar entre os documentos README.md do projeto.

---

## 🎯 Comandos

Os comandos abaixo serão executados no nível monorepo - em todos os aplicativos e pacotes onde existe o script npm.

| Comando             | Descrição                                    |
| ------------------- | -------------------------------------------- |
| build               | Gera a versão de produção do projeto         |
| dev                 | Inicializa o projeto em modo desenvolvimento |
| start               | Inicializa o projeto em modo produção        |
| lint                | Aplica lint em todo o projeto                |
| format              | Aplica prettier em todo o projeto            |
| test                | Executa todos os testes do projeto           |
| clean               | Remove a pasta node_modules,coverage e dist  |
| release             | Gera uma nova versão do projeto              |
| update-dependencies | Atualiza as dependências do projeto          |
| docs:init           | Inicializa a documentação                    |
| docs:dev            | Inicializa o servidor de documentação        |

---

## Sobre o projeto:

### 📁 Estrutura

- [`data`](./src/data) - Orquestra o fluxo de dados entre o domínio e as interfaces, contendo a lógica de aplicação e casos de uso.
- [`domain`](./src/domain) - O núcleo do sistema, com regras e lógicas de negócio, entidades, e interfaces de repositórios.
- [`infra`](./src/infra) - Implementa detalhes técnicos como bancos de dados e comunicação com serviços externos.
- [`main`](./src/main) - Ponto de entrada da aplicação, responsável pela inicialização e configuração.
- [`presentation`](./src/presentation) - Interage com o usuário ou sistemas externos, tratando de requisições e respostas.

### 🏛️ Arquitetura

O projeto segue a arquitetura:

- [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Domain Driven Design](https://en.wikipedia.org/wiki/Domain-driven_design)

### 🧩 Padrões

O projeto utiliza diversos padrões de design, incluindo:

- [Dependency Injection](https://en.wikipedia.org/wiki/Dependency_injection)
- [Factory](https://en.wikipedia.org/wiki/Factory_method_pattern)
- [Adapter](https://en.wikipedia.org/wiki/Adapter_pattern)
- [Decorator](https://en.wikipedia.org/wiki/Decorator_pattern)
- [Proxy](https://en.wikipedia.org/wiki/Proxy_pattern)
- [Composite](https://en.wikipedia.org/wiki/Composite_pattern)

### 📚 Documentações

O projeto é documentado usando:

- [Swagger](https://swagger.io/docs/specification/about/)
- [Docsify](https://docsify.js.org/)
- [C4 Model](https://c4model.com/)

### 💡 Princípios

O projeto segue os seguintes princípios de desenvolvimento de software:

- [S.O.L.I.D](https://en.wikipedia.org/wiki/SOLID)
- [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)
- [KISS](https://en.wikipedia.org/wiki/KISS_principle)

---

## 🏃 Rodando o projeto

- Instale as dependências do projeto executando o comando `npm install`

- Para Inicializar o projeto execute o comando `npm run dev`

- Para executar os testes, execute o comando `npm run test`

- Para aplicar lint no projeto, execute o comando `npm run lint`
