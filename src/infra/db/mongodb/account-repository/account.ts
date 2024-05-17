import { AddAccountRepository } from "src/data/protocols/add-account-repository";
import { AccountModel } from "src/domain/models/account";
import { AddAccountModel } from "src/domain/usecases/add-account";
import { MongoHelper } from "../helper/mongo-helper";

export class AccountMongoRepository implements AddAccountRepository {
  async add(account: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection<AddAccountModel>('accounts')
    const result = await accountCollection.insertOne(account)
    const createdAccount = (await accountCollection.findOne({ _id: result.insertedId }))!

    return MongoHelper.map<AddAccountModel>(createdAccount)
  }
}