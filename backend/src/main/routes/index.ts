import { makeEnsureAuthenticatedMiddleware } from '../factories/middlewares/authenticate.factory'
import * as AuthSchema from '@/infra/validators/schemas/auth'
import * as FeatureFlagSchema from '@/infra/validators/schemas/feature-flags'
import * as AuthRoute from '@/main/routes/auth'
import * as FeatureFlagsRoute from '@/main/routes/feature-flags'
import { Handler, Request, Response } from '@/presentation/protocols'

const createRouteHandler = (handler: Handler) => async (request: Request, reply: Response) => {
  const result = await handler(request)
  reply.code(result.statusCode).send(result)
}

const createAuthMiddleware = () => {
  const authMiddleware = makeEnsureAuthenticatedMiddleware()
  return authMiddleware.handle.bind(authMiddleware)
}

export const authRoutes = [
  {
    method: 'POST',
    url: '/auth/login',
    handler: createRouteHandler(AuthRoute.AuthLoginHandler),
    schema: AuthSchema.authLoginSchema
  },
  {
    method: 'POST',
    url: '/auth/refresh',
    handler: createRouteHandler(AuthRoute.AuthRefreshHandler)
  },
  {
    method: 'POST',
    url: '/auth/register',
    handler: createRouteHandler(AuthRoute.AuthRegisterHandler),
    schema: AuthSchema.authRegisterSchema
  }
]

export const featureFlagRoutes = [
  {
    method: 'GET',
    url: '/feature-flags',
    handler: createRouteHandler(FeatureFlagsRoute.ListFeatureFlagsHandler),
    preHandler: createAuthMiddleware()
  },
  {
    method: 'GET',
    url: '/feature-flags/:id',
    handler: createRouteHandler(FeatureFlagsRoute.FindFeatureFlagsHandler),
    preHandler: createAuthMiddleware(),
    schema: FeatureFlagSchema.findFeatureFlagSchema
  },
  {
    method: 'POST',
    url: '/feature-flags',
    handler: createRouteHandler(FeatureFlagsRoute.CreateFeatureFlagsHandler),
    preHandler: createAuthMiddleware(),
    schema: FeatureFlagSchema.createFeatureFlagSchema
  },
  {
    method: 'PATCH',
    url: '/feature-flags/:id',
    handler: createRouteHandler(FeatureFlagsRoute.UpdateFeatureFlagsHandler),
    preHandler: createAuthMiddleware(),
    schema: FeatureFlagSchema.updateFeatureFlagSchema
  },
  {
    method: 'DELETE',
    url: '/feature-flags/:id',
    handler: createRouteHandler(FeatureFlagsRoute.DeleteFeatureFlagsHandler),
    preHandler: createAuthMiddleware(),
    schema: FeatureFlagSchema.deleteFeatureFlagSchema
  }
]

export const routes = [...featureFlagRoutes, ...authRoutes]
