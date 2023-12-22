import { makeCreateFeatureFlagController } from '@/main/factories/controllers/create-feature-flags/create-feature-flags.factory'
import { HttpResponse, Request } from '@/presentation/protocols'

export const CreateFeatureFlagsHandler = async (request: Request): Promise<HttpResponse> => {
  const createFeatureFlags = makeCreateFeatureFlagController()
  return createFeatureFlags.handle(request)
}
