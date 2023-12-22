import { makeListFeatureFlagsController } from '@/main/factories/controllers/list-feature-flags/get-profile-controller.factory'
import { HttpResponse, Request } from '@/presentation/protocols'

export const ListFeatureFlagsHandler = async (request: Request): Promise<HttpResponse> => {
  const createListFeatureFlags = makeListFeatureFlagsController()
  return createListFeatureFlags.handle(request)
}
