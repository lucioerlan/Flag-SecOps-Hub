import { ILogger } from '@/main/adapters'
import { Controller, HttpResponse, Request } from '@/presentation/protocols'

export class LogControllerDecorator implements Controller {
  constructor(
    private readonly controller: Controller,
    private readonly logger: ILogger
  ) {}

  async handle(request: Request): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(request)
    if (httpResponse.statusCode !== 200) {
      this.logger.error(`${request.method} ${request.url}`)
    }

    return httpResponse
  }
}
