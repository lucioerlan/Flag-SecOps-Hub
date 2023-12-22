import { makeListFeatureFlagsController } from '@/main/factories/controllers/list-feature-flags/list-feature-flags.factory'
import { HttpResponse, Request } from '@/presentation/protocols'

export const ListFeatureFlagsHandler = async (request: Request): Promise<HttpResponse> => {
  const createListFeatureFlags = makeListFeatureFlagsController()
  return createListFeatureFlags.handle(request)
}
