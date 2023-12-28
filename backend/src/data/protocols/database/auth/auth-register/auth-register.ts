export namespace IAuthRegisterRepository {
  export type Params = {
    name: string
    email: string
    password: string
  }

  export type Result = string
}

export interface IAuthRegisterRepository {
  findUserByEmail(email: string): Promise<string>
  addUser(userData: IAuthRegisterRepository.Params): Promise<string>
}
