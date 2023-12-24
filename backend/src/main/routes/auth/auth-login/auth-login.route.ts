import { makeAuthLoginController } from '@/main/factories/controllers/auth'
import { HttpResponse, Request } from '@/presentation/protocols'

export const AuthLoginHandler = async (request: Request): Promise<HttpResponse> => {
  const controller = makeAuthLoginController()
  return controller.handle(request)
}
