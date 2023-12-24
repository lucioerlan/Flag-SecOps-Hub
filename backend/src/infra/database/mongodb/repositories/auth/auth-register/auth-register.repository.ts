import { IAuthRegisterRepository } from '@/data/protocols/database/auth'
import { MongoHelper } from '@/infra/database/mongodb/helper/mongodb.helper'

export class AuthRegisterRepository implements IAuthRegisterRepository {
  async addUser(userData: IAuthRegisterRepository.Params): Promise<IAuthRegisterRepository.Result> {
    const userCollection = MongoHelper.getCollection('users')
    const addUser = await userCollection.insertOne(userData)

    return addUser.insertedId.toString()
  }

  async findUserByEmail(email: string): Promise<IAuthRegisterRepository.Result> {
    const userCollection = MongoHelper.getCollection('users')
    const findUserByEmail = await userCollection.findOne({ email })

    return findUserByEmail && MongoHelper.map(findUserByEmail)
  }
}
