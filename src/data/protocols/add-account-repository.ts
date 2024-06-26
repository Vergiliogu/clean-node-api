import { AccountModel } from "src/domain/models/account";
import { AddAccountModel } from "src/domain/usecases/add-account";

export interface AddAccountRepository {
  add(account: AddAccountModel): Promise<AccountModel>;
}