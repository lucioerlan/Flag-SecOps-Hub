import { IListFeatureFlagsRepository } from '@/data/protocols/database/feature-flags'
import { MongoHelper } from '@/infra/database/mongodb/helper/mongodb.helper'

export class ListFeatureFlagsRepository implements IListFeatureFlagsRepository {
  async listFeatureFlags(): Promise<IListFeatureFlagsRepository.Result> {
    const featureFlagsCollection = MongoHelper.getCollection('feature-flags')
    const listFeatureFlags = await featureFlagsCollection.find({}).toArray()

    return listFeatureFlags && MongoHelper.mapCollection(listFeatureFlags)
  }
}
