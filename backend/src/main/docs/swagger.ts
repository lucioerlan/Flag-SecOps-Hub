export default {
  openapi: {
    info: {
      title: '🛡️ Flag SecOps Hub Backend',
      contact: {
        name: 'Github',
        url: 'https://github.com/lucioerlan/Flag-SecOps-Hub'
      },
      version: '1.0',
      description:
        'O backend do <b>"Flag-SecOps-Hub"</b> é responsável por gerenciar a autenticação de usuários e o controle de acesso, além de permitir a gestão das Feature Flags e seus respectivos valores.'
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development'
      },
      {
        url: 'https://flag-secops-hub.herokuapp.com',
        description: 'Production'
      }
    ],
    paths: {
      '/auth/register': {
        post: {
          tags: ['Auth'],
          summary: 'auth-register',
          description: 'Permite que novos usuários se registrem na aplicação.',
          operationId: 'auth-register',
          parameters: [],
          requestBody: {
            description: '',
            content: {
              'application/json': {
                schema: {
                  allOf: [
                    {
                      $ref: '#/components/schemas/auth-register-request'
                    },
                    {
                      example: {
                        name: 'Erlan Dev',
                        email: 'erlanlucio@hotmail.com',
                        password: '123456'
                      }
                    }
                  ]
                },
                example: {
                  name: 'Erlan Dev',
                  email: 'erlanlucio@hotmail.com',
                  password: '123456'
                }
              }
            },
            required: true
          },
          responses: {
            '200': {
              description: '',
              headers: {}
            }
          },
          deprecated: false
        }
      },
      '/auth/login': {
        post: {
          tags: ['Auth'],
          summary: 'auth-login',
          description: 'Este endpoint permite que usuários façam login fornecendo suas credenciais.',
          operationId: 'auth-login',
          parameters: [],
          requestBody: {
            description: '',
            content: {
              'application/json': {
                schema: {
                  allOf: [
                    {
                      $ref: '#/components/schemas/auth-login-request'
                    },
                    {
                      example: {
                        email: 'erlanlucio@hotmail.com',
                        password: '123456'
                      }
                    }
                  ]
                },
                example: {
                  email: 'erlanlucio@hotmail.com',
                  password: '123456'
                }
              }
            },
            required: true
          },
          responses: {
            '200': {
              description: '',
              headers: {}
            }
          },
          deprecated: false
        }
      },
      '/auth/refresh': {
        post: {
          tags: ['Auth'],
          summary: 'auth-refresh',
          description: 'Este endpoint é usado para atualizar o token de autenticação.',
          operationId: 'auth-refresh',
          parameters: [],
          requestBody: {
            description: '',
            content: {
              'application/json': {
                schema: {
                  allOf: [
                    {
                      $ref: '#/components/schemas/auth-refresh-request'
                    },
                    {
                      example: {
                        refreshToken: 'validRefreshToken'
                      }
                    }
                  ]
                },
                example: {
                  refreshToken: 'validRefreshToken'
                }
              }
            },
            required: true
          },
          responses: {
            '200': {
              description: '',
              headers: {}
            }
          },
          deprecated: false
        }
      },
      '/feature-flags': {
        post: {
          tags: ['Feature Flags'],
          summary: 'create feature-flags',
          description: 'Permite a criação de uma nova feature flag.',
          operationId: 'createfeature-flags',
          parameters: [],
          requestBody: {
            description: '',
            content: {
              'application/json': {
                schema: {
                  allOf: [
                    {
                      $ref: '#/components/schemas/createfeature-flagsrequest'
                    },
                    {
                      example: {
                        name: 'Promoção de natal',
                        description: 'Habilita a promoção de natal do Grupo Boticário',
                        state: true
                      }
                    }
                  ]
                },
                example: {
                  name: 'Promoção de natal',
                  description: 'Habilita a promoção de natal do Grupo Boticário',
                  state: true
                }
              }
            },
            required: true
          },
          responses: {
            '200': {
              description: '',
              headers: {}
            }
          },
          deprecated: false,
          security: [
            {
              bearerAuth: []
            }
          ]
        },
        get: {
          tags: ['Feature Flags'],
          summary: 'list feature-flags',
          description: 'Lista todas as feature flags disponíveis.',
          operationId: 'listfeature-flags',
          parameters: [],
          responses: {
            '200': {
              description: '',
              headers: {}
            }
          },
          deprecated: false,
          security: [
            {
              bearerAuth: []
            }
          ]
        }
      },
      '/feature-flags/{featureFlagId}': {
        get: {
          tags: ['Feature Flags'],
          summary: 'find feature-flags',
          description: 'Busca detalhes de uma feature flag específica pelo ID.',
          operationId: 'findfeature-flags',
          parameters: [
            {
              name: 'featureFlagId',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              }
            }
          ],
          responses: {
            '200': {
              description: '',
              headers: {}
            }
          },
          deprecated: false,
          security: [
            {
              bearerAuth: []
            }
          ]
        },
        delete: {
          tags: ['Feature Flags'],
          summary: 'delete feature-flags',
          description: 'Remove uma feature flag específica pelo ID.',
          operationId: 'deletefeature-flags',
          parameters: [
            {
              name: 'featureFlagId',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              }
            }
          ],
          responses: {
            '200': {
              description: '',
              headers: {}
            }
          },
          deprecated: false,
          security: [
            {
              bearerAuth: []
            }
          ]
        },
        patch: {
          tags: ['Feature Flags'],
          summary: 'update feature-flags',
          description: 'Atualiza uma feature flag existente pelo ID.',
          operationId: 'updatefeature-flags',
          parameters: [
            {
              name: 'featureFlagId',
              in: 'path',
              required: true,
              schema: {
                type: 'string'
              }
            }
          ],
          requestBody: {
            description: '',
            content: {
              'application/json': {
                schema: {
                  allOf: [
                    { $ref: '#/components/schemas/updatefeature-flagsrequest' },
                    {
                      example: {
                        state: false
                      }
                    }
                  ]
                },
                example: {
                  state: false
                }
              }
            },
            required: true
          },
          responses: {
            '200': {
              description: '',
              headers: {}
            }
          },
          deprecated: false,
          security: [
            {
              bearerAuth: []
            }
          ]
        }
      }
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer'
        }
      },
      schemas: {
        'auth-register-request': {
          title: 'auth-register-request',
          required: ['name', 'email', 'password'],
          type: 'object',
          properties: {
            name: {
              type: 'string'
            },
            email: {
              type: 'string'
            },
            password: {
              type: 'string'
            }
          },
          example: {
            name: 'Erlan Dev',
            email: 'erlanlucio@hotmail.com',
            password: '123456'
          }
        },
        'auth-login-request': {
          title: 'auth-login-request',
          required: ['email', 'password'],
          type: 'object',
          properties: {
            email: {
              type: 'string'
            },
            password: {
              type: 'string'
            }
          },
          example: {
            email: 'erlanlucio@hotmail.com',
            password: '123456'
          }
        },
        'auth-refresh-request': {
          title: 'auth-refresh-request',
          required: ['refreshToken'],
          type: 'object',
          properties: {
            refreshToken: {
              type: 'string'
            }
          },
          example: {
            refreshToken: 'validRefreshToken'
          }
        },
        'createfeature-flagsrequest': {
          title: 'createfeature-flagsrequest',
          required: ['name', 'description', 'state'],
          type: 'object',
          properties: {
            name: {
              type: 'string'
            },
            description: {
              type: 'string'
            },
            state: {
              type: 'boolean'
            }
          },
          example: {
            name: 'Promoção de natal',
            description: 'Habilita a promoção de natal do Grupo Boticário',
            state: true
          }
        },
        'updatefeature-flagsrequest': {
          title: 'updatefeature-flagsrequest',
          required: ['state'],
          type: 'object',
          properties: {
            state: {
              type: 'boolean'
            }
          },
          example: {
            state: false
          }
        }
      }
    },
    tags: [
      {
        name: 'Auth',
        description:
          'O módulo Auth refere-se ao sistema de autenticação integrado na API que é responsável por gerenciar o acesso do usuário e a segurança das transações.'
      },
      {
        name: 'Feature Flags',
        description:
          'O módulo Feature Flags é responsável para gerenciamento das flags na aplicação, permite operações como ativação, desativação, listagem, detalhamento, criação, atualização e remoção de flags.'
      }
    ]
  }
}
