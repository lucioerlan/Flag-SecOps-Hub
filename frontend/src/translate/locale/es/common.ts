const translations = {
  button: {
    back: 'Volver',
    isSubmitting: 'Por favor, espere...',
    submit: 'Guardar',
    delete: 'Borrar',
    cancel: 'Cancelar',
    create: 'Crear',
    register: 'Registrar',
    edit: 'Editar'
  },
  chip: {
    back: 'Volver'
  },
  input: {
    email: 'Correo electrónico',
    password: 'Contraseña',
    name: 'Nombre',
    nameFeatureFlag: 'Nombre de la Feature Flag',
    descriptionFeatureFlag: 'Descripción de la Feature Flag',
    confirmPassword: 'Confirmar Contraseña',
    errorEmail: {
      type: {
        message: 'Formato de dirección de correo electrónico inválido'
      },
      required: {
        message: 'Correo electrónico es obligatorio'
      }
    },
    errorPass: {
      type: {
        message: 'La contraseña debe tener al menos 6 caracteres'
      },
      required: {
        message: 'Contraseña requerida'
      }
    },
    errorName: {
      required: {
        message: 'Nombre es obligatorio'
      }
    },
    errorDescription: {
      required: {
        message: 'Descripción es obligatorio'
      }
    },
    errorConfirmPassword: {
      type: {
        message: 'Las contraseñas no coinciden'
      }
    }
  },
  tabs: {
    notFound: 'Página No Encontrada',
    login: 'Login',
    home: 'Home',
    register: 'Registrar'
  },
  tooltip: {
    logout: 'Salir',
    modal: {
      close: 'Cerrar Modal'
    },
    table: {
      edit: 'Editar',
      delete: 'Borrar'
    }
  },
  titles: {
    notFoundPage: 'Oops, ¡La página que estás buscando no está aquí! 🤔'
  },
  subtitles: {
    notFoundPage: 'Usa el botón volver, para volver a la página anterior.'
  },
  cards: {
    title: {
      total: 'Total de Feature Flags',
      active: 'Feature Flags Activas',
      inactive: 'Feature Flags Desactivadas',
      beta: 'Feature Flags en Beta'
    },
    description: {
      total: 'Cantidad total de feature flags creadas',
      active: 'Cuántas feature flags están actualmente activas',
      inactive: 'Cuántas feature flags están actualmente desactivadas',
      beta: 'Cuántas feature flags están en beta'
    }
  },
  table: {
    search: 'Buscar',
    empty: 'No hay datos para mostrar',
    columns: {
      name: 'Nombre',
      description: 'Descripción',
      state: 'Estado',
      created_at: 'Creado En',
      updated_at: 'Actualizado En',
      actions: 'Acciones'
    },
    toolbar: {
      createNewFeatureFlag: 'Crear Nueva Feature Flag',
      titleManageFeatureFlags: '🚩 Administrar Feature Flags',
      searchFeatureFlags: 'Buscar Feature Flags'
    },
    footer: {
      page: 'Página',
      displaying: 'Mostrando'
    }
  },
  modal: {
    delete: {
      title: 'Borrar Feature Flag',
      description: '¿Estás seguro de que quieres borrar esta Feature Flag?'
    }
  },
  labels: {
    stateFeatureFlagOn: 'Activada',
    stateFeatureFlagOff: 'Desactivada'
  },
  link: {
    notMemberRegister: '👋 ¿No eres miembro? Regístrate',
    memberLogin: '👋 ¿Ya eres miembro? Inicia sesión'
  }
}

export default translations
