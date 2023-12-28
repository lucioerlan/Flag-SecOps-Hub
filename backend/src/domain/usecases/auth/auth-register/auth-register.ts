export namespace IAuthRegister {
  export type Params = {
    name: string
    email: string
    password: string
  }

  export type Result = string
}

export interface IAuthRegister {
  authRegister(params: IAuthRegister.Params): Promise<string>
}
