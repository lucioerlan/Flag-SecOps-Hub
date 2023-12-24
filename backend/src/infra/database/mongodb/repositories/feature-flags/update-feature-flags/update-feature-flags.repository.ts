import { IUpdateFeatureFlagRepository } from '@/data/protocols/database/feature-flags'
import { MongoHelper } from '@/infra/database/mongodb/helper/mongodb.helper'

export class UpdateFeatureFlagRepository implements IUpdateFeatureFlagRepository {
  async updateFeatureFlag(params: IUpdateFeatureFlagRepository.Params): Promise<IUpdateFeatureFlagRepository.Result> {
    const featureFlagsCollection = MongoHelper.getCollection('feature-flags')
    const { id, ...updateData } = params

    const updateFeatureFlag = await featureFlagsCollection.findOneAndUpdate(
      { _id: MongoHelper.toObjectId(id) },
      {
        $set: {
          ...updateData,
          updated_at: new Date(),
          created_at: delete updateData.created_at
        }
      },
      { returnDocument: 'after' }
    )

    return updateFeatureFlag && MongoHelper.map(updateFeatureFlag)
  }
}
