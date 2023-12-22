import { makeAuthRegisterController } from '@/main/factories/controllers/auth-register/auth-register.factory'
import { HttpResponse, Request } from '@/presentation/protocols'

export const AuthRegisterHandler = async (request: Request): Promise<HttpResponse> => {
  const controller = makeAuthRegisterController()
  return controller.handle(request)
}
