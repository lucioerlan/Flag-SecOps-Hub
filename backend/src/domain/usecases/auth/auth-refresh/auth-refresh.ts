export namespace IAuthRefresh {
  export type Params = {
    refreshToken: string
  }

  export type Result = {
    token: string
    refreshToken?: string
  }
}

export interface IAuthRefresh {
  authRefresh(params: IAuthRefresh.Params): Promise<IAuthRefresh.Result>
}
