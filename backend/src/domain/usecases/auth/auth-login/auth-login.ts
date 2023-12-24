export namespace IAuthLogin {
  export type Params = {
    email: string
    password: string
  }

  export type Result = Partial<{
    accessToken: string
    email: string
    name: string
    type: 'error' | 'success'
    message: string
  }>
}

export interface IAuthLogin {
  authLogin(params: IAuthLogin.Params): Promise<IAuthLogin.Result>
}
