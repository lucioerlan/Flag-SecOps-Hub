# Ccmcl Slack Assistant Bot

[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=colab-ccl-tasks-ccmcl-slack-assistant-bot&metric=bugs&token=2ab3ffdeb79e6a3640cc414ea7fbe6ddf4a1e4f1)](https://sonarcloud.io/summary/new_code?id=colab-ccl-tasks-ccmcl-slack-assistant-bot) [![Code_smells](https://sonarcloud.io/api/project_badges/measure?project=colab-ccl-tasks-ccmcl-slack-assistant-bot&metric=code_smells&token=2ab3ffdeb79e6a3640cc414ea7fbe6ddf4a1e4f1)](https://sonarcloud.io/summary/new_code?id=colab-ccl-tasks-ccmcl-slack-assistant-bot) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=colab-ccl-tasks-ccmcl-slack-assistant-bot&metric=coverage&token=2ab3ffdeb79e6a3640cc414ea7fbe6ddf4a1e4f1)](https://sonarcloud.io/summary/new_code?id=colab-ccl-tasks-ccmcl-slack-assistant-bot) [![Duplicated_lines_density](https://sonarcloud.io/api/project_badges/measure?project=colab-ccl-tasks-ccmcl-slack-assistant-bot&metric=duplicated_lines_density&token=2ab3ffdeb79e6a3640cc414ea7fbe6ddf4a1e4f1)](https://sonarcloud.io/summary/new_code?id=colab-ccl-tasks-ccmcl-slack-assistant-bot) [![Ncloc](https://sonarcloud.io/api/project_badges/measure?project=colab-ccl-tasks-ccmcl-slack-assistant-bot&metric=ncloc&token=2ab3ffdeb79e6a3640cc414ea7fbe6ddf4a1e4f1)](https://sonarcloud.io/summary/new_code?id=colab-ccl-tasks-ccmcl-slack-assistant-bot) [![Sqale_rating](https://sonarcloud.io/api/project_badges/measure?project=colab-ccl-tasks-ccmcl-slack-assistant-bot&metric=sqale_rating&token=2ab3ffdeb79e6a3640cc414ea7fbe6ddf4a1e4f1)](https://sonarcloud.io/summary/new_code?id=colab-ccl-tasks-ccmcl-slack-assistant-bot) [![Alert_status](https://sonarcloud.io/api/project_badges/measure?project=colab-ccl-tasks-ccmcl-slack-assistant-bot&metric=alert_status&token=2ab3ffdeb79e6a3640cc414ea7fbe6ddf4a1e4f1)](https://sonarcloud.io/summary/new_code?id=colab-ccl-tasks-ccmcl-slack-assistant-bot) [![Reliability_rating](https://sonarcloud.io/api/project_badges/measure?project=colab-ccl-tasks-ccmcl-slack-assistant-bot&metric=reliability_rating&token=2ab3ffdeb79e6a3640cc414ea7fbe6ddf4a1e4f1)](https://sonarcloud.io/summary/new_code?id=colab-ccl-tasks-ccmcl-slack-assistant-bot) [![Security_rating](https://sonarcloud.io/api/project_badges/measure?project=colab-ccl-tasks-ccmcl-slack-assistant-bot&metric=security_rating&token=2ab3ffdeb79e6a3640cc414ea7fbe6ddf4a1e4f1)](https://sonarcloud.io/summary/new_code?id=colab-ccl-tasks-ccmcl-slack-assistant-bot) [![Sqale_index](https://sonarcloud.io/api/project_badges/measure?project=colab-ccl-tasks-ccmcl-slack-assistant-bot&metric=sqale_index&token=2ab3ffdeb79e6a3640cc414ea7fbe6ddf4a1e4f1)](https://sonarcloud.io/summary/new_code?id=colab-ccl-tasks-ccmcl-slack-assistant-bot) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=colab-ccl-tasks-ccmcl-slack-assistant-bot&metric=vulnerabilities&token=2ab3ffdeb79e6a3640cc414ea7fbe6ddf4a1e4f1)](https://sonarcloud.io/summary/new_code?id=colab-ccl-tasks-ccmcl-slack-assistant-bot)

## Description

Bot responsável por executar diversos comandos, ações e eventos no Slack. Desde ativar e reativar usuários até conceder acesso ao sandbox e convidar novos membros para o workspace.

## Environments

| Key                                   |             Descrição              |                 Default value |
| ------------------------------------- | :--------------------------------: | ----------------------------: |
| MSGRAPH_CLIENT_ID                     |        Client id do MSGraph        |                           --- |
| MSGRAPH_CLIENT_SECRET                 |      Client secret do MSGraph      |                           --- |
| MSGRAPH_GROUP_ACESSO_SLACK_SANDBOX_ID |   Id do slack sandbox no msgraph   |                           --- |
| MSGRAPH_GROUP_ACESSO_SLACK_TERCEIROS  |  Id do grupo terceiro no msgraph   |                           --- |
| SLACK_API_URL                         |      URL da api scmi do slack      | https://api.slack.com/scim/v1 |
| SLACK_SIGNING_SECRET                  |      Signing secret do slack       |                           --- |
| SLACK_SOCKET_TOKEN                    |         Token app do slack         |                           --- |
| SLACK_BOT_TOKEN                       |         Bot token do slack         |                           --- |
| SLACK_USER_TOKEN                      |        User token do slack         |                           --- |
| LOG_LEVEL_ENABLED                     |            Tipo de Log             |                         debug |
| VIZZLO_API_URL                        |        URL da api da vizzlo        |     https://vizzlo.com/api/v1 |
| VIZZLO_TOKEN                          |        Token da api vizzlo         |                           --- |
| VIZZLO_ORG_ID                         |      Id da organização vizzlo      |                           --- |
| ADMIN_APPROVAL_CHANNEL_ID             | Id do canal de aprovação de admins |                           --- |

## Environments Urls

| Environment | URL                                                                     |
| ----------- | ----------------------------------------------------------------------- |
| DEV         | <https://dccmcl-slack-assistant-bot.colaborador.grupoboticario.digital> |
| HML         | <https://hccmcl-slack-assistant-bot.colaborador.grupoboticario.digital> |
| PRD         | <https://ccmcl-slack-assistant-bot.colaborador.grupoboticario.digital>  |

## Slack Events Endpoints

| Environment | URL                                                                                  |
| ----------- | ------------------------------------------------------------------------------------ |
| DEV         | <https://dccmcl-slack-assistant-bot.colaborador.grupoboticario.digital/slack/events> |
| HML         | <https://hccmcl-slack-assistant-bot.colaborador.grupoboticario.digital/slack/events> |
| PRD         | <https://ccmcl-slack-assistant-bot.colaborador.grupoboticario.digital/slack/events>  |

## Getting Started

Copie as variáveis de ambiente exemplo

```sh
$ cp .env.example .env
```

Rode a aplicação

```sh
$ npm install
$ npm run start:dev
```

## Testing

```sh
$ npm run test
```

## Slack Components

### Slash Commands:

- command: /ajuda-slack
  description: Exibe a lista de comandos disponíveis no Assistente Slack.
- command: /reativar-prestador
  description: Reative o acesso de prestadores de serviço que estão desativados no Slack.
- command: /trocar-prestador-canais
  description: Reorganize os canais do prestador de serviço no Slack.
- command: /desativar-prestador
  description: Desative o acesso de um prestador de serviço ao Slack.
- command: /adicionar-prestador-canais
  description: Inclua o prestador de serviço em canais específicos no Slack.
- command: /acesso-vizzlo
  description: Concede acesso à plataforma Vizzlo para um colaborador do Grupo Boticario.
- command: /acesso-slack-sandbox
  description: Concede acesso ao ambiente de Sandbox do Slack para fins de testes e experimentações.
- command: /alterar-validade-prestador
  description: Altera a validade de um prestador de serviço.
- command: /gerenciar-canal
  description: Permite gerenciar múltiplas configurações de um canal.

### Scopes

User:

- [admin](https://api.slack.com/scopes/admin)
- [admin.conversations:write](https://api.slack.com/scopes/admin.conversations:write)
- [admin.invites:read](https://api.slack.com/scopes/admin.invites:read)
- [admin.invites:write](https://api.slack.com/scopes/admin.invites:write)
- [admin.users:write](https://api.slack.com/scopes/admin.users:write)
- [channels:read](https://api.slack.com/scopes/channels:read)
- [chat:write](https://api.slack.com/scopes/chat:write)
- [users.profile:read](https://api.slack.com/scopes/users.profile:read)
- [users:read](https://api.slack.com/scopes/users:read)
- [users:read.email](https://api.slack.com/scopes/users:read.email)

Bot:

- [chat:write](https://api.slack.com/scopes/chat:write)
- [chat:write.public](https://api.slack.com/scopes/chat:write.public)
- [commands](https://api.slack.com/scopes/commands)
- [users:read](https://api.slack.com/scopes/users.profile:read)
- [users:read.email](https://api.slack.com/scopes/users:read)
- [users.profile:read](https://api.slack.com/scopes/users:read.email)

## NPM Commands

| Comando             | Descrição                                    |
| ------------------- | -------------------------------------------- |
| build               | Gera a versão de produção do projeto         |
| start:dev           | Inicializa o projeto                         |
| lint                | Aplica lint em todo o projeto                |
| test                | Executa todos os testes do projeto           |
| clean               | Remove a pasta node_modules,coverage e build |
| release             | Gera uma nova versão do projeto              |
| update-dependencies | Atualiza as dependências do projeto          |
| format              | Formata o código                             |

## Build with

- [NodeJS](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [Docker](https://www.docker.com/)
- [Kubernetes](https://kubernetes.io/)
- [Jest](https://jestjs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Lint Staged](https://github.com/okonet/lint-staged#readme)
- [Husky](https://typicode.github.io/husky/#/)
- [Commitlint](https://commitlint.js.org/#/)
- [TechDocs](https://backstage.io/docs/features/techdocs/techdocs-overview)
- [Github Actions](https://docs.github.com/pt/actions)
- [New Relic](https://newrelic.com/)
- [SonarQube](https://www.sonarqube.org/)
- [Winston](https://github.com/winstonjs/winston)
- [Aws EKS](https://aws.amazon.com/pt/eks/)

## Building an app with Bolt for JavaScript

Bolt is a foundational framework that makes it easier to build Slack apps with the platform's latest features. This guide walks you through building your first app with [Bolt for JavaScript](https://slack.dev/bolt-js/tutorial/getting-started).

## Documentation

Toda a documentação e informações desse repositório se encontram na pasta ./docs, sendo interpretrada pela utilizando a TechDocs, nosso padrão no momento dentro da PDD

## Execute techdocs locally with podman

Primeiramente efetue o rm da maquina virtual do podman, pois iremos precisar cria-la com um volume apontando para HOME da máquina local

```sh
podman machine stop podman-machine-default \
&& podman machine rm podman-machine-default \
&& podman machine init -v $HOME:$HOME \
&& podman machine start
```

Agora vamos buildar uma imagem local para a techdocs, o dockerfile para essa imagem está em ./docs/Dockerfile

```sh
podman build ./docs -t mkdocs:local-dev
```

Após o termino do build do container, podemos executar o podman run para o container

```sh
podman run -w /content -v $(pwd):/content -p 8080:8080 -d mkdocs:local-dev serve -a 0.0.0.0:8080
```

Prontinho, agora é só navegar até [http://0.0.0.0:8080](http://0.0.0.0:8080) para ver suas alteraçoes

## Scaffolding

This code was generated using [Scafflater](https://github.com/@scafflater/scafflater) and has some scaffold options (or partials code) are enabled.

To see the available scaffold possibilities, please run:

```bash
npm install -g scafflater-cli
scafflater-cli partial:list
```

If some fits on your needs, just scaffold it:

```bash
scafflater-cli partial:run [PARTIAL_NAME]
```
