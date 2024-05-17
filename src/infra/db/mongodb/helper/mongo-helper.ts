import { MongoClient } from "mongodb"

export const MongoHelper = {
  client: {} as MongoClient,

  async connect(url: string): Promise<void> {
    this.client = await MongoClient.connect(url)
  },

  async disconnect(): Promise<void> {
    await this.client.close()
  }
}