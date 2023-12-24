import { IDeleteFeatureFlagRepository } from '@/data/protocols/database/feature-flags'
import { MongoHelper } from '@/infra/database/mongodb/helper/mongodb.helper'

export class DeleteFeatureFlagRepository implements IDeleteFeatureFlagRepository {
  async deleteFeatureFlag(id: string): Promise<IDeleteFeatureFlagRepository.Result> {
    const featureFlagsCollection = MongoHelper.getCollection('feature-flags')
    const deleteFeatureFlag = await featureFlagsCollection.deleteOne({ _id: MongoHelper.toObjectId(id) })

    return deleteFeatureFlag && deleteFeatureFlag.deletedCount
  }
}
