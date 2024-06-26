import { Encrypter } from "src/data/protocols/encrypter";
import {hash} from 'bcrypt'

export class BcryptAdapter implements Encrypter {
  private readonly salt: number;

  constructor(salt: number) {
    this.salt = salt
  }

  async encrypt(value: string): Promise<string> {
      return await hash(value, this.salt);
  }
}