import { AddAccountRepository } from "src/data/protocols/add-account-repository";
import { AccountModel } from "src/domain/models/account";
import { AddAccountModel } from "src/domain/usecases/add-account";
import { MongoHelper } from "../helper/mongo-helper";

export class AccountMongoRepository implements AddAccountRepository {
  async add(account: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(account)
    const foundAccount = (await accountCollection.findOne({ _id: result.insertedId }))!

    const { _id, ...createdAccount } = foundAccount

    return {
      ...createdAccount,
      id: _id.toString()
    } as AccountModel;
  }
}