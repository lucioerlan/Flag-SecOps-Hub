import { MongoHelper as sut } from '@/infra/database/mongodb/helper/mongodb.helper'
import { ObjectId } from 'mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'

describe('Mongo Helper', () => {
  let mongoServer: MongoMemoryServer

  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create()
    const uri = mongoServer.getUri()
    await sut.connect(uri)
  })

  afterAll(async () => {
    await sut.disconnect()
    await mongoServer.stop()
  })

  it('Should reconnect if mongodb is down', async () => {
    expect(sut.getCollection('any_collection')).toBeTruthy()
    await sut.disconnect()

    expect(() => sut.getCollection('any_collection')).toThrow()
    await sut.connect(mongoServer.getUri())

    expect(sut.getCollection('any_collection')).toBeTruthy()
  })

  it('Should map the collection', () => {
    const collection = [
      {
        _id: new ObjectId(),
        field: 'any_value'
      }
    ]

    const mappedCollection = sut.mapCollection<{
      id: ObjectId
      field: string
    }>(collection)
    expect(mappedCollection[0].field).toEqual('any_value')
    expect(mappedCollection[0].id).toEqual(collection[0]._id.toHexString())
  })

  it('Should convert string id to ObjectId', () => {
    const stringId = '507f1f77bcf86cd799439011'
    const objectId = sut.toObjectId(stringId)
    expect(objectId).toBeDefined()
    expect(objectId.toHexString()).toBe(stringId)
  })
})
