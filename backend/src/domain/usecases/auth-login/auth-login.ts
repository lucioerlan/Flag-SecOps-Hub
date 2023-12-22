export namespace IAuthLogin {
  export type Params = {
    username: string
    password: string
  }

  export type Result = {
    token: string
  }
}

export interface IAuthLogin {
  authLogin(params: IAuthLogin.Params): Promise<IAuthLogin.Result>
}
