export type FormValues = {
  email: string
  password: string
}

export type OtherProps = {
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
