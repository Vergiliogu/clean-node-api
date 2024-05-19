import request from 'supertest'
import { app } from '../app'

describe('SignUp Routes', () => {
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
