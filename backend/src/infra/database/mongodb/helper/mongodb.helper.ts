import { MongoClient, Collection, ObjectId } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,
  uri: null as string,

  async connect(uri: string): Promise<void> {
    this.uri = uri
    this.client = await MongoClient.connect(uri)
  },

  async disconnect(): Promise<void> {
    await this.client.close()
    this.client = null
  },

  getCollection(name: string): Collection {
    return this.client.db().collection(name)
  },

  map: <T>(data: any): T => {
    const { _id, ...rest } = data
    return { id: _id.toHexString(), ...rest }
  },

  toObjectId(id: string): ObjectId {
    return new ObjectId(id)
  },

  mapCollection<T>(collection: any[]): T[] {
    return collection.map((c) => this.map(c))
  }
}
