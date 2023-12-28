import { IUpdateFeatureFlagRepository } from '@/data/protocols/database/feature-flags'
import { MongoHelper } from '@/infra/database/mongodb/helper/mongodb.helper'

export class UpdateFeatureFlagRepository implements IUpdateFeatureFlagRepository {
  async updateFeatureFlag(params: IUpdateFeatureFlagRepository.Params): Promise<IUpdateFeatureFlagRepository.Result> {
    const featureFlagsCollection = MongoHelper.getCollection('feature-flags')
    const { id, ...updateDataWithoutCreatedAt } = params

    const updateFeatureFlag = await featureFlagsCollection.findOneAndUpdate(
      { _id: MongoHelper.toObjectId(id) },
      {
        $set: {
          ...updateDataWithoutCreatedAt,
          updated_at: new Date()
        }
      },
      { returnDocument: 'after' }
    )

    return updateFeatureFlag && MongoHelper.map(updateFeatureFlag)
  }
}
