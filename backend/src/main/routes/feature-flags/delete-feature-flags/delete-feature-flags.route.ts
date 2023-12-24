import { makeDeleteFeatureFlagController } from '@/main/factories/controllers/feature-flags'
import { HttpResponse, Request } from '@/presentation/protocols'

export const DeleteFeatureFlagsHandler = async (request: Request): Promise<HttpResponse> => {
  const deleteFeatureFlagsController = makeDeleteFeatureFlagController()
  return deleteFeatureFlagsController.handle(request)
}
