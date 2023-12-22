export namespace IAuthRegister {
  export type Params = {
    username: string
    password: string
  }

  export type Result = {
    message: string
  }
}

export interface IAuthRegister {
  authRegister(params: IAuthRegister.Params): Promise<IAuthRegister.Result>
}
