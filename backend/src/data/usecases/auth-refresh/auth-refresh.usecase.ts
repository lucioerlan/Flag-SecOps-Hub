import { IAuthRefresh } from '@/domain/usecases/auth-refresh/auth-refresh'

export class AuthRefreshUsecase implements IAuthRefresh {
  async authRefresh(params: IAuthRefresh.Params): Promise<IAuthRefresh.Result> {
    let newAccessToken: string = ''

    if (params.refreshToken === 'validRefreshToken') {
      newAccessToken = 'newlyGeneratedAccessToken'
    } else {
      newAccessToken = 'invalidAccessToken'
    }

    return {
      token: newAccessToken
    }
  }
}
