## 🛡️ Frontend do Flag SecOps Hub

<p align="center">
   <a href="#badge">
        <img alt="prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>
    <a href="#badge">
        <img alt="eslint" src="https://img.shields.io/badge/ESLint-Configured-blue"></a>
    <a href="#badge">
        <img alt="jest" src="https://cdn.jsdelivr.net/gh/justjavac/jest-badges/badges/100.svg"></a>
    <a href="#badge">
        <img alt="cypress" src="https://img.shields.io/badge/cypress-04C38E.svg?style=flat-square&logo=cypress&logoColor=white"></a>
    <a href="#badge">
        <img alt="husky" src="https://img.shields.io/badge/husky-8.0.3-blueviolet"></a>
    <a href="#badge">
        <img alt="lint-staged" src="https://img.shields.io/badge/lint--staged-15.2.0-orange"></a>
    <a href="#badge">
        <img alt="storybook" src="https://img.shields.io/badge/storybook-FF4785.svg?style=flat-square&logo=storybook&logoColor=white"></a>
    <a href="#badge">
        <img alt="commitlint" src="https://img.shields.io/badge/commitlint-18.4.3-yellow"></a>
</p>

## 📚 Descrição

**flag-secops-hub-backend** O frontend do "Flag-SecOps-Hub" é a interface do usuário, responsável por oferecer um ambiente interativo para o gerenciamento de Feature Flags. Ele permite que os usuários criem, editem e excluam flags, além de visualizar o status de cada uma delas.

---

## 🍂 Pilha de tecnologia

- [NodeJS](https://nodejs.org/en)
- [TypeScript](https://www.typescriptlang.org)
- [React](https://reactjs.org)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Jest](https://jestjs.io)
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
- [i18next](https://www.i18next.com)
- [React Router Dom](https://reactrouter.com/en/6.21.1t)
- [Formik](https://formik.org)
- [Yup](https://www.npmjs.com/package/yup)
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [Lint Staged](https://github.com/okonet/lint-staged#readme)
- [Husky](https://typicode.github.io/husky)
- [Commitlint](https://commitlint.js.org)
- [Comitizen](https://commitizen-tools.github.io/commitizen)
- [Release It](https://github.com/release-it/release-it)
- [Vite](https://vitejs.dev)
- [Docsify](https://docsify.js.org)
- [Cypress](https://www.cypress.io)
- [Storybook](https://storybook.js.org)
- [Github Actions](https://docs.github.com/pt/actions)
- [Docker](https://www.docker.com)
- [SonarQube](https://www.sonarqube.org)

---

## 📄 Documentações

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
| storybook           | Inicializa o servidor do storybook           |
| storybook:build     | Gera a versão de produção do storybook       |
| cypress:open        | Inicializa o servidor do cypress             |
| cypress:run         | Executa os testes do cypress                 |

---

## Sobre o projeto:

### 📁 Estrutura

- [`assets`](./src/assets) - Contém arquivos estáticos como imagens, ícones e estilos globais.
- [`components`](./src/components) - Agrupa componentes React de acordo com o Atomic Design, divididos em átomos, moléculas, organismos,
- [`constants`](./src/constants) - Define constantes utilizadas em todo o projeto, como cores, URLs de API, e mensagens de erro, centralizando a configuração e facilitando alterações.
- [`contexts`](./src/contexts) - Gerencia o estado global de forma eficiente, evitando props drilling e permitindo um estado compartilhado entre componentes.
- [`factories`](./src/factories) - Armazena funções de fábrica para criar e configurar instâncias de bibliotecas e abstrações.
- [`hooks`](./src/hooks) - Armazena hooks personalizados do React, permitindo reutilizar a lógica de estado e efeitos colaterais em diferentes componentes.
- [`layouts`](./src/layouts) - Contém componentes de layout utilizados para estruturar páginas e seções comuns, como cabeçalhos, rodapés e contêineres
- [`pages`](./src/pages) - Inclui componentes de página, cada um correspondendo a uma rota no aplicativo, servindo como ponto de entrada para as funcionalidades e layouts.
- [`routes`](./src/routes) - Define as rotas do aplicativo, mapeando URLs para os componentes de página correspondentes e gerenciando navegação.
- [`services`](./src/services) - Agrupa serviços para comunicação com APIs externas e outras operações de IO.
- [`store`](./src/store) - Configura e gerencia o estado global com Redux Toolkit, facilitando o gerenciamento de estado em lugares mais complexos.
- [`translate`](./src/translate) - Contém arquivos de tradução para i18next, permitindo que o aplicativo seja traduzido para diferentes idiomas.
- [`types`](./src/types) - Contêm tipos e interfaces do TypeScript.
- [`utils`](./src/utils) - Reúne funções utilitárias e helpers que podem ser usadas em várias partes do projeto.
- [`validators`](./src/validators) - Contém funções e esquemas para validação de formulários com Yup, permitindo validar dados de entrada sem poluir os componentes.

### 🏛️ Arquitetura

O projeto segue a arquitetura:

- [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/)

### 🧩 Padrões

O projeto utiliza diversos padrões de design, incluindo:

- [Component Based Architecture](https://en.wikipedia.org/wiki/Component-based_software_engineering)
- [Factory](https://en.wikipedia.org/wiki/Factory_method_pattern)
- [Observer Pattern](https://en.wikipedia.org/wiki/Observer_pattern)

### 📚 Documentações

O projeto é documentado usando:

- [Storybook](https://storybook.js.org/)
- [Docsify](https://docsify.js.org/)
- [C4 Model](https://c4model.com/)

### 💡 Princípios

O projeto segue os seguintes princípios de desenvolvimento de software:

- [S.O.L.I.D](https://en.wikipedia.org/wiki/SOLID)
- [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
- [YAGNI](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)
- [KISS](https://en.wikipedia.org/wiki/KISS_principle)
- [Responsive Design](https://en.wikipedia.org/wiki/Responsive_web_design)
- [Progressive Enhancement](https://en.wikipedia.org/wiki/Progressive_enhancement)

---

## 🏃 Rodando o projeto

- Instale as dependências do projeto executando o comando `npm install`

- Para Inicializar o projeto execute o comando `npm run dev`

- Para executar os testes, execute o comando `npm run test` ou `npm run test:cypress:run` para Cypress.

- Para aplicar lint no projeto, execute o comando `npm run lint`
