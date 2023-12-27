const translations = {
  button: {
    back: 'Back',
    isSubmitting: 'Please wait...',
    submit: 'Save',
    delete: 'Delete',
    cancel: 'Cancel',
    create: 'Create',
    register: 'Register',
    edit: 'Edit'
  },
  chip: {
    back: 'Back'
  },
  input: {
    email: 'Email',
    password: 'Password',
    name: 'Name',
    nameFeatureFlag: 'Feature Flag Name',
    descriptionFeatureFlag: 'Feature Flag Description',
    confirmPassword: 'Confirm Password',
    errorEmail: {
      type: {
        message: 'Invalid email address format'
      },
      required: {
        message: 'Email is required'
      }
    },
    errorPass: {
      type: {
        message: 'The password must have at least 6 characters'
      },
      required: {
        message: 'Password required'
      }
    },
    errorName: {
      required: {
        message: 'Name is required'
      }
    },
    errorDescription: {
      required: {
        message: 'Description is required'
      }
    },
    errorConfirmPassword: {
      type: {
        message: 'Passwords do not match'
      }
    }
  },
  tabs: {
    notFound: 'Page Not Found',
    login: 'Login',
    home: 'Home',
    register: 'Register'
  },
  titles: {
    notFoundPage: 'Oops, The page you are looking for is not here! 🤔'
  },
  tooltip: {
    logout: 'Logout',
    modal: {
      close: 'Close Modal'
    },
    table: {
      edit: 'Edit',
      delete: 'Delete'
    }
  },
  subtitles: {
    notFoundPage: 'Use the back button, to return to the previous page.'
  },
  cards: {
    title: {
      total: 'Total Feature Flags',
      active: 'Active Feature Flags',
      inactive: 'Inactive Feature Flags',
      beta: 'Beta Feature Flags'
    },
    description: {
      total: 'Total number of feature flags created',
      active: 'How many feature flags are currently active',
      inactive: 'How many feature flags are currently inactive',
      beta: 'How many feature flags are in beta'
    }
  },
  table: {
    search: 'Search',
    empty: 'No data to show',
    columns: {
      name: 'Name',
      description: 'Description',
      state: 'Status',
      created_at: 'Created At',
      updated_at: 'Updated At',
      actions: 'Actions'
    },
    toolbar: {
      createNewFeatureFlag: 'Create New Feature Flag',
      titleManageFeatureFlags: '🚩 Manage Feature Flags',
      searchFeatureFlags: 'Search Feature Flags'
    },
    footer: {
      page: 'Page',
      displaying: 'displaying'
    }
  },
  modal: {
    delete: {
      title: 'Delete Feature Flag',
      description: 'Are you sure you want to delete this feature flag?'
    }
  },
  labels: {
    stateFeatureFlagOn: 'On',
    stateFeatureFlagOff: 'Off'
  },
  link: {
    notMemberRegister: '👋 Not a member? Register here',
    alreadyMemberLogin: '👋 Already a member? Login here'
  }
}

export default translations
