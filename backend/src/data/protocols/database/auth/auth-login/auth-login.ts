export namespace IAuthLoginRepository {
  export type Params = {
    email: string
    password: string
  }

  export type Result = {
    id: string
    name: string
    email: string
    password: string
  }
}

export interface IAuthLoginRepository {
  findUserByEmail(email: string): Promise<IAuthLoginRepository.Result>
}
