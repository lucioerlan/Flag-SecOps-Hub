import { makeListFeatureFlagsController } from '@/main/factories/controllers/feature-flags'
import { HttpResponse, Request } from '@/presentation/protocols'

export const ListFeatureFlagsHandler = async (request: Request): Promise<HttpResponse> => {
  const createListFeatureFlags = makeListFeatureFlagsController()
  return createListFeatureFlags.handle(request)
}
