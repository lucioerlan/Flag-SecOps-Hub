import { makeUpdateFeatureFlagController } from '@/main/factories/controllers/update-feature-flags/update-feature-flags.factory'
import { HttpResponse, Request } from '@/presentation/protocols'

export const UpdateFeatureFlagsHandler = async (request: Request): Promise<HttpResponse> => {
  const updateFeatureFlagsController = makeUpdateFeatureFlagController()
  return updateFeatureFlagsController.handle(request)
}
