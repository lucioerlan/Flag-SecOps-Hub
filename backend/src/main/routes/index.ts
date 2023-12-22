import { AuthLoginHandler as AuthLogin } from '@/main/routes/auth-login/auth-login.route'
import { AuthRefreshHandler as AuthRefresh } from '@/main/routes/auth-refresh/auth-refresh.route'
import { AuthRegisterHandler as AuthRegister } from '@/main/routes/auth-register/auth-register.route'
import { CreateFeatureFlagsHandler as CreateFeatureFlags } from '@/main/routes/create-feature-flags/create-feature-flags-route'
import { DeleteFeatureFlagsHandler as DeleteFeatureFlags } from '@/main/routes/delete-feature-flags/delete-feature-flags-route'
import { FindFeatureFlagsHandler as FindFeatureFlags } from '@/main/routes/find-feature-flags/find-feature-flags-route'
import { ListFeatureFlagsHandler as ListFeatureFlagsRoute } from '@/main/routes/list-feature-flags/list-feature-flags-route'
import { UpdateFeatureFlagsHandler as UpdateFeatureFlags } from '@/main/routes/update-feature-flags/update-feature-flags-route'
import { Handler, Request, Response } from '@/presentation/protocols'

const createRouteHandler = (handler: Handler) => async (request: Request, reply: Response) => {
  const result = await handler(request)
  reply.send(result)
}

export const authRoutes = [
  { method: 'POST', url: '/auth/login', handler: createRouteHandler(AuthLogin) },
  { method: 'POST', url: '/auth/refresh', handler: createRouteHandler(AuthRefresh) },
  { method: 'POST', url: '/auth/register', handler: createRouteHandler(AuthRegister) }
]

export const featureFlagRoutes = [
  { method: 'GET', url: '/feature-flags', handler: createRouteHandler(ListFeatureFlagsRoute) },
  { method: 'GET', url: '/feature-flags/:id', handler: createRouteHandler(FindFeatureFlags) },
  { method: 'POST', url: '/feature-flags', handler: createRouteHandler(CreateFeatureFlags) },
  { method: 'PUT', url: '/feature-flags/:id', handler: createRouteHandler(UpdateFeatureFlags) },
  { method: 'DELETE', url: '/feature-flags/:id', handler: createRouteHandler(DeleteFeatureFlags) },
  { method: 'PATCH', url: '/feature-flags/:id/toggle', handler: createRouteHandler(UpdateFeatureFlags) }
]

export const routes = [...featureFlagRoutes, ...authRoutes]
