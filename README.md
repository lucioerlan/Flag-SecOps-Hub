<div align="center">

![Interface](./frontend/docs/images/home.png)
[Explore o design no Figma](https://www.figma.com/file/bm74nLFsmGi07IZCxIOZ3t/Flag-SecOps-Hub?type=design&node-id=0%3A1&mode=design&t=69BMYVDYpLNlbjmj-1).

<!-- Badges Section -->

![Frontend](https://github.com/lucioerlan/Flag-SecOps-Hub/actions/workflows/frontend-ci.yml/badge.svg?branch=main)
![Backend](https://github.com/lucioerlan/Flag-SecOps-Hub/actions/workflows/backend-ci.yml/badge.svg?branch=main)

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=lucioerlan_Flag-SecOps-Hub&metric=bugs)](https://sonarcloud.io/summary/new_code?id=lucioerlan_Flag-SecOps-Hub)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=lucioerlan_Flag-SecOps-Hub&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=lucioerlan_Flag-SecOps-Hub)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=lucioerlan_Flag-SecOps-Hub&metric=coverage)](https://sonarcloud.io/summary/new_code?id=lucioerlan_Flag-SecOps-Hub)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=lucioerlan_Flag-SecOps-Hub&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=lucioerlan_Flag-SecOps-Hub)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=lucioerlan_Flag-SecOps-Hub&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=lucioerlan_Flag-SecOps-Hub)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=lucioerlan_Flag-SecOps-Hub&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=lucioerlan_Flag-SecOps-Hub)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=lucioerlan_Flag-SecOps-Hub&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=lucioerlan_Flag-SecOps-Hub)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=lucioerlan_Flag-SecOps-Hub&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=lucioerlan_Flag-SecOps-Hub)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=lucioerlan_Flag-SecOps-Hub&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=lucioerlan_Flag-SecOps-Hub)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=lucioerlan_Flag-SecOps-Hub&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=lucioerlan_Flag-SecOps-Hub)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=lucioerlan_Flag-SecOps-Hub&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=lucioerlan_Flag-SecOps-Hub)

<!-- More Badges -->

</div>

Flag SecOps Hub é um projeto para gestão de Feature Flags, com foco em segurança, performance e escalabilidade. Desenvolvido com práticas modernas e tecnologias de ponta, o projeto visa fornecer uma solução eficiente e confiável para o gerenciamento dinâmico de recursos em aplicações.

---

## 🛡️ Visão Geral do Projeto

- **Objetivo**: Simplificar a gestão de Feature Flags.
- **Usuários-alvo**: Desenvolvedores, gerentes de projeto e equipes de QA em busca de uma gestão eficiente e segura.
- **Estrutura**: Composto por Backend e Frontend, integrando-se para fornecer uma solução completa.

---

## 🏗️ Arquitetura e Tecnologias

#### Backend

- **Arquitetura**: Clean Architecture e DDD para modularidade e manutenção eficiente.
- **Tecnologias**: Node.js, TypeScript, Fastify, MongoDB, Jest, Docker, Swagger, Winston, entre outros.
- **Segurança**: Implementações específicas para garantir a proteção dos dados e das operações.

#### Frontend

- **Arquitetura**: Design Atômico para organização eficiente e manutenível dos componentes.
- **Tecnologias**: React, Vite, Redux, Formik, Styled Components, i18next, React Testing Library, Cypress, Storybook, entre outros.
- **Usabilidade e Acessibilidade**: Foco em uma interface amigável e acessível para todos os usuários.
- **Design Figma**: [Visualize o design no Figma](https://www.figma.com/file/bm74nLFsmGi07IZCxIOZ3t/Flag-SecOps-Hub?type=design&node-id=0%3A1&mode=design&t=69BMYVDYpLNlbjmj-1).

---

## 🚀 Como Executar

### 🐳 Docker Compose

1. Certifique-se de ter Docker e Docker Compose.
2. Execute `docker-compose up` na raiz do projeto.
3. O frontend vai estar disponivel em `http://localhost:3000` e o backend em `http://localhost:5000`. Isso vai subir tanto o backend quanto o frontend em containers Docker.

### 🧰 Makefile

Para facilitar a execução de comandos, utilize o arquivo Makefile disponível na raiz do projeto:

- **Para construir as imagens Docker:**: `make build`
- **Para executar o projetoo**: `make up`
- **Para parar os serviços**: `make down`

## 📚 Documentação

Cada parte do projeto (Backend e Frontend) possui documentação específica detalhando sua configuração, uso e características.

#### Backend

- **Documentação Interativa Swagger**: Acesse em `http://localhost:5000/documentation` após iniciar o projeto.
- **Docsify**: Para uma visão mais detalhada, a documentação completa está disponível em [Docsify backend](./backend/docs/README.md). Execute `npm run docs:serve` na raiz do backend para iniciar o servidor de documentação Docsify.

#### Frontend

- **Storybook**: Explore componentes e guias no Storybook acessando `http://localhost:6006` após executar o comando `npm run storybook`.
- **Docsify**: Para uma visão mais detalhada, a documentação completa está disponível em [Docsify frontend](./frontend/docs/README.md). Execute `npm run docs:serve` na raiz do frontend para iniciar o servidor de documentação Docsify.

---

## 🛠️ Comandos Comuns

- `npm install`: Instala as dependências do projeto.
- `npm run dev`: Inicializa o projeto em modo de desenvolvimento.
- `npm run test`: Executa todos os testes do projeto.
- `npm run lint`: Aplica linting em todo o projeto.

---

## 🧪 Testes

Para executar os testes end-to-end com Cypress, Use `npm run test:cypress:open` para interface interativa ou `npm run test:cypress:run` para execução headless.

---

## 🌟 CI/CD com GitHub Actions e SonarCloud

O projeto possui integração contínua e entrega contínua (CI/CD) com o GitHub Actions. Os resultados de qualidade de código são analisados pelo **SonarCloud**, incluindo métricas de bugs, code smells, cobertura de código e muito mais. O CD é realizado na Vercel.

---

## 🧑‍💻 Contribuição

Contribuições são bem-vindas para melhorar a documentação, adicionar funcionalidades ou corrigir bugs. Crie um pull request ou abra uma issue para colaborar.

---

## 🚧 Melhorias Futuras

Para uma lista detalhada das melhorias futuras planejadas para o projeto, incluindo atualizações técnicas e otimizações, por favor visite o seguinte link: [Melhorias Futuras](https://github.com/lucioerlan/Flag-SecOps-Hub/discussions/68)

---

## 📃 Licença

O projeto é distribuído sob a Licença MIT. Veja [`LICENSE`](https://opensource.org/licenses/MIT) para mais informações.
