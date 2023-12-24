import { ICreateFeatureFlagRepository } from '@/data/protocols/database/feature-flags'
import { MongoHelper } from '@/infra/database/mongodb/helper/mongodb.helper'

export class CreateFeatureFlagRepository implements ICreateFeatureFlagRepository {
  async createFeatureFlag(params: ICreateFeatureFlagRepository.Params): Promise<ICreateFeatureFlagRepository.Result> {
    const featureFlagsCollection = MongoHelper.getCollection('feature-flags')
    const timestamp = new Date()
    const createFeatureFlag = await featureFlagsCollection.insertOne({
      ...params,
      created_at: timestamp,
      updated_at: timestamp
    })

    return createFeatureFlag.insertedId.toString()
  }
}
