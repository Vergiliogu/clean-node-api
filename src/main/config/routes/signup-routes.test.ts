import request from 'supertest'
import { app } from '../app'
import { MongoHelper } from 'src/infra/db/mongodb/helper/mongo-helper';

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL!)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  });

  beforeEach(async () => {
    await MongoHelper.clearCollection('accounts')
  });
test('should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'a',
        email: 'b',
        password: 'c',
        passwordConfirmation: 'd',
      })
      .expect(200)
  });
});
