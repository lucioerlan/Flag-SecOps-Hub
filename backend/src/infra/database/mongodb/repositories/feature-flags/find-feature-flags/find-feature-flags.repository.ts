import { IFindFeatureFlagRepository } from '@/data/protocols/database/feature-flags'
import { MongoHelper } from '@/infra/database/mongodb/helper/mongodb.helper'

export class FindFeatureFlagRepository implements IFindFeatureFlagRepository {
  async findFeatureFlag(id: string): Promise<IFindFeatureFlagRepository.Result> {
    const featureFlagsCollection = MongoHelper.getCollection('feature-flags')
    const findFeatureFlag = await featureFlagsCollection.findOne({ _id: MongoHelper.toObjectId(id) })

    return findFeatureFlag && MongoHelper.map(findFeatureFlag)
  }
}
