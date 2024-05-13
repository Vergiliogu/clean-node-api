import { EmailValidatorAdapter } from "./email-validator-adapter";
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail(): boolean {
    return true
  }
}))

describe('EmailValidator Adapter', () => {
  test('should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter();
    jest.spyOn(validator, 'isEmail')
      .mockReturnValueOnce(false)

    const isValid = sut.isValid('')
    expect(isValid).toBe(false)
  });

  test('should return true if validator returns true', () => {
    const sut = new EmailValidatorAdapter();

    const isValid = sut.isValid('true@mail.com')
    expect(isValid).toBe(true)
  });

  test('should call validator with correct email', () => {
    const sut = new EmailValidatorAdapter();
    const isEmailSpy = jest.spyOn(validator, 'isEmail')

    const testEmail = 'true@mail.com'
    sut.isValid(testEmail)
    expect(isEmailSpy).toHaveBeenCalledWith(testEmail)
  });
});