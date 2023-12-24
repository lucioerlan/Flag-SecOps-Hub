import { makeUpdateFeatureFlagController } from '@/main/factories/controllers/feature-flags'
import { HttpResponse, Request } from '@/presentation/protocols'

export const UpdateFeatureFlagsHandler = async (request: Request): Promise<HttpResponse> => {
  const updateFeatureFlagsController = makeUpdateFeatureFlagController()
  return updateFeatureFlagsController.handle(request)
}
