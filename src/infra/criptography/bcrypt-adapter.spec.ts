import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (): Promise<string> {
    return 'hashed'
  }
}))

const salt = 12
const makeSut = () => {
  const sut = new BcryptAdapter(salt);
  return sut
}

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct values', async () => {
    const value = 'any'
    const sut = makeSut()

    const hashSpy = jest.spyOn(bcrypt, 'hash')

    await sut.encrypt(value)
    expect(hashSpy).toHaveBeenCalledWith(value, salt)
  });

  test('Should return a hash on success', async () => {
    const sut = makeSut()

    const hash = await sut.encrypt('any')
    expect(hash).toBe('hashed')
  });
});