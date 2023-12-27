import { IDecrypter } from '@/data/protocols/cryptography/jwt/jwt'
import { MESSAGES } from '@/domain/entities'
import { Request, Response } from '@/presentation/protocols'
import { HttpResponse, Middleware } from '@/presentation/protocols'

export class EnsureAuthenticatedMiddleware implements Middleware {
  constructor(private readonly decrypter: IDecrypter) {}

  async handle(request: Request, response: Response): Promise<HttpResponse> {
    const authorizationHeader = request.headers.authorization

    if (!authorizationHeader) {
      return response.status(401).send({ error: MESSAGES.tokenIsMissing })
    }

    const [, token] = authorizationHeader.split(' ')
    try {
      await this.decrypter.decrypt(token)
    } catch (error) {
      return response.status(401).send({ error: MESSAGES.tokenIsInvalid })
    }
  }
}
