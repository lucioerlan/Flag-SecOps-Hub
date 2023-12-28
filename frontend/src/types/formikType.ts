export type FormAuthLoginValues = {
  email: string
  password: string
}

export type FormFeatureFlagValues = {
  name: string
  description: string
  state: string
}

export type OtherAuthLoginProps = {
  errors: {
    login?: boolean
    email?: string
    password?: string
  }
  touched: {
    login?: boolean
    email?: boolean
    password?: boolean
  }
}

export type FormAuthRegisterValues = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export type OtherAuthRegisterProps = {
  errors: {
    login?: boolean
    name?: string
    email?: string
    password?: string
  }
  touched: {
    login?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }
}

export type PasswordField = 'password' | 'confirmPassword'
