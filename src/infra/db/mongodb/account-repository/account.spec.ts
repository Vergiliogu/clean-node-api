import { MongoClient } from 'mongodb'
import { MongoHelper } from '../helper/mongo-helper';
import { AccountMongoRepository } from './account';

const makeSut = (): AccountMongoRepository => {
  return new AccountMongoRepository()
}

describe('Account Mongo Repository', () => {
  let client: MongoClient;

  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL!)
    client = MongoHelper.client
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('Should return an account on success', async () => {
    const sut = makeSut()
    const account = await sut.add({
      name: 'any',
      email: 'any@mail.com',
      password: 'any'
    })

    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('any')
    expect(account.email).toBe('any@mail.com')
    expect(account.password).toBe('any')
  });
});