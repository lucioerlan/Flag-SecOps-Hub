import { makeFindFeatureFlagController } from '@/main/factories/controllers/find-feature-flags/find-feature-flags.factory'
import { HttpResponse, Request } from '@/presentation/protocols'

export const FindFeatureFlagsHandler = async (request: Request): Promise<HttpResponse> => {
  const createFindFeatureFlags = makeFindFeatureFlagController()
  return createFindFeatureFlags.handle(request)
}
