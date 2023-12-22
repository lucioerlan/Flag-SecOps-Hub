import { ListFeatureFlagsHandler as ListFeatureFlagsRoute } from '@/main/routes/list-feature-flags/list-feature-flags-route'
import { Handler, Request, Response } from '@/presentation/protocols'

const createRouteHandler = (handler: Handler) => async (request: Request, reply: Response) => {
  const result = await handler(request)
  reply.send(result)
}

export const routes = [
  { method: 'GET', url: '/list-feature-flags', handler: createRouteHandler(ListFeatureFlagsRoute) }
]
