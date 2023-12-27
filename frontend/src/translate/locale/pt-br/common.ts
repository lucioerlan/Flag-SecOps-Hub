const translations = {
  button: {
    back: 'Voltar',
    isSubmitting: 'Por favor, aguarde...',
    submit: 'Salvar',
    enter: 'Entrar',
    delete: 'Deletar',
    cancel: 'Cancelar',
    create: 'Criar',
    register: 'Registrar'
  },
  chip: {
    back: 'Voltar'
  },
  input: {
    email: 'E-mail',
    password: 'Senha',
    name: 'Nome',
    nameFeatureFlag: 'Nome da Feature Flag',
    descriptionFeatureFlag: 'Descrição da Feature Flag',
    confirmPassword: 'Confirmar Senha',
    errorEmail: {
      type: {
        message: 'Formato de endereço de e-mail inválido'
      },
      required: {
        message: 'E-mail é obrigatório'
      }
    },
    errorPass: {
      type: {
        message: 'A senha deve ter no mínimo 6 caracteres'
      },
      required: {
        message: 'Senha requerida'
      }
    },
    errorName: {
      required: {
        message: 'Nome é obrigatório'
      }
    },
    errorDescription: {
      required: {
        message: 'Descrição é obrigatório'
      }
    },
    errorConfirmPassword: {
      type: {
        message: 'As senhas não conferem'
      }
    }
  },
  tooltip: {
    logout: 'Sair',
    modal: {
      close: 'Fechar Modal'
    },
    table: {
      edit: 'Editar',
      delete: 'Deletar'
    }
  },
  tabs: {
    notFound: 'Página Não Encontrada',
    login: 'Login',
    home: 'Home',
    register: 'Registrar'
  },
  titles: {
    notFoundPage: 'Oops, A página que você está procurando não está aqui! 🤔'
  },
  subtitles: {
    notFoundPage: 'Use o botão voltar, para retornar a página anterior.'
  },
  cards: {
    title: {
      total: 'Total de Feature Flags',
      active: 'Feature Flags Ativas',
      inactive: 'Feature Flags Desativadas',
      beta: 'Feature Flags em Beta'
    },
    description: {
      total: 'Quantidade total de feature flags criadas',
      active: 'Quantas feature flags estão atualmente ativas',
      inactive: 'Quantas feature flags estão atualmente desativadas',
      beta: 'Quantas feature flags estão em beta'
    }
  },
  table: {
    search: 'Pesquisar',
    empty: 'Nenhum resultado encontrado',
    columns: {
      name: 'Nome',
      description: 'Descrição',
      state: 'Status',
      created_at: 'Criado Em',
      updated_at: 'Atualizado Em',
      actions: 'Ações'
    },
    toolbar: {
      createNewFeatureFlag: 'Criar Nova Feature Flag',
      titleManageFeatureFlags: '🚩 Gerenciar Feature Flags',
      searchFeatureFlags: 'Pesquisar Feature Flags'
    },
    footer: {
      page: 'Página',
      displaying: 'Exibindo'
    }
  },
  modal: {
    delete: {
      title: 'Deletar Feature Flag',
      description: 'Você tem certeza que deseja deletar esta feature flag?'
    }
  },
  labels: {
    stateFeatureFlagOn: 'Ativada',
    stateFeatureFlagOff: 'Desativada'
  },
  link: {
    notMemberRegister: '👋 Não é um membro? Registre-se aqui!',
    alreadyMemberLogin: '👋 Já é um membro? Faça login aqui!'
  }
}

export default translations
