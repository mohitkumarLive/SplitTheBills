import { UserModel } from './user.model';

export class  UserExpense {
    User: UserModel;
    Expense: number[] = [];

    AddExpense(expense: number): void {
         this.Expense.push(expense);
    }
    Total(): number {
        return this.Expense.reduce((sum, a) => sum + a, 0);
    }
}

export class  Expense {
    UserId: string;
    Amount: number;

    constructor(userid: string, amount: number) {
         this.UserId = userid;
         this.Amount =  amount;
    }
}
