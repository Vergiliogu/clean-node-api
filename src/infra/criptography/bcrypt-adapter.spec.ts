import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return 'hashed'
  }
}))

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct values', async () => {
    const salt = 12
    const value = 'any'
    const sut = new BcryptAdapter(salt);

    const hashSpy = jest.spyOn(bcrypt, 'hash')

    await sut.encrypt(value)
    expect(hashSpy).toHaveBeenCalledWith(value, salt)
  });

  test('Should return a hash on success', async () => {
    const sut = new BcryptAdapter(12);

    const hash = await sut.encrypt('any')
    expect(hash).toBe('hashed')
  });
});