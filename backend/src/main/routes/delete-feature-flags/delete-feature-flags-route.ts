import { makeDeleteFeatureFlagController } from '@/main/factories/controllers/delete-feature-flags/delete-feature-flags.factory'
import { HttpResponse, Request } from '@/presentation/protocols'

export const DeleteFeatureFlagsHandler = async (request: Request): Promise<HttpResponse> => {
  const deleteFeatureFlagsController = makeDeleteFeatureFlagController()
  return deleteFeatureFlagsController.handle(request)
}
