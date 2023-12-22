import { makeAuthRefreshController } from '@/main/factories/controllers/auth-refresh/auth-refresh.factory'
import { HttpResponse, Request } from '@/presentation/protocols'

export const AuthRefreshHandler = async (request: Request): Promise<HttpResponse> => {
  const controller = makeAuthRefreshController()
  return controller.handle(request)
}
