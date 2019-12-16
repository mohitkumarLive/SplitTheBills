import { UserModel } from './user.model';
export enum SettleMentType {
   PAY,
   RECIEVE
}

export class SettlementItem {
  Amount: number;
  Type: SettleMentType;
  From: UserModel;
  To: UserModel;
}


export class Settlement {
    Friend: UserModel;
    AmountToSettle: number;
}
