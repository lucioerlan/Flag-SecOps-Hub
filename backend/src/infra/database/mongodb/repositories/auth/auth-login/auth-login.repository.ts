import { IAuthLoginRepository } from '@/data/protocols/database/auth'
import { MongoHelper } from '@/infra/database/mongodb/helper/mongodb.helper'

export class AuthLoginRepository implements IAuthLoginRepository {
  async findUserByEmail(email: string): Promise<IAuthLoginRepository.Result> {
    const userCollection = MongoHelper.getCollection('users')
    const findUserByEmail = await userCollection.findOne({ email })

    return findUserByEmail && MongoHelper.map(findUserByEmail)
  }
}
