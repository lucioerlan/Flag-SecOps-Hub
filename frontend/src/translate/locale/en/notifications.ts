const translations = {
  success: {
    loaded: 'Successfully loaded',
    stored: 'Successfully registered',
    deleteFeatureFlag: 'Feature Flag successfully deleted',
    updateFeatureFlag: 'Feature Flag successfully updated',
    createFeatureFlag: 'Feature Flag successfully created',
    welcomeBack: 'Welcome back',
    wemissyou: 'We miss you',
    successAccountCreation: 'All set',
    letsdoit: 'Redirecting to login'
  },
  error: {
    submit: 'There was an error saving the data. Try again.',
    stored: 'There was an error saving the data. Try again.',
    login: "Oops! We're sorry, but there was an error!",
    required: {
      title: 'Oops... there are fields with error',
      message: 'Check the filled fields and try again.'
    },
    updateFeatureFlag: 'There was an error activating / deactivating the Feature Flag. Try again.',
    createFeatureFlag: 'There was an error creating the Feature Flag. Try again.',
    deleteFeatureFlag: 'There was an error deleting the Feature Flag. Try again.'
  },
  warning: {
    credentials: 'Oops... invalid credentials',
    'Invalid email': "Oops... we didn't find any user with that email",
    'Invalid password': 'Oops... the password is incorrect',
    'Already exists': "Oops... there's already a user with that email"
  }
}

export default translations
