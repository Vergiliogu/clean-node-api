import { Collection, MongoClient, Document as MongoDocument, WithId } from "mongodb"

export const MongoHelper = {
  client: {} as MongoClient,

  async connect(url: string): Promise<void> {
    this.client = await MongoClient.connect(url)
  },

  async disconnect(): Promise<void> {
    await this.client.close()
  },

  getCollection<T extends MongoDocument>(name: string): Collection<T> {
    return this.client.db().collection<T>(name)
  },

  async clearCollection(name: string): Promise<void> {
    const collection = this.getCollection(name)
    await collection.deleteMany({})
  },

  map<T>(
    collection: WithId<T>
  ): T & { id: string } {
    const { _id, ...filteredAccount } = collection

    return {
      ...filteredAccount,
      id: _id.toString()
    } as T & { id: string };
  }
}