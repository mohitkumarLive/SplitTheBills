import { Injectable } from '@angular/core';
import { UserExpense, Expense } from '../../model/userExpense.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../../model/user.model';
import { Settlement, SettlementItem, SettleMentType } from '../../model/settlement.model';

@Injectable({
    providedIn: 'root'
})

export  class  UserExpenseService {

    UserExpenseCollection: UserExpense[] = [];

    UserExpenseCollection$  =  new BehaviorSubject<UserExpense[]>([]);

    constructor(private http: HttpClient) {

    }


    fetchExpense()  {
      if (!this.UserExpenseCollection.length) {
     const url = '/assets/data/friends.json';
     this.http.get<UserExpense[]>(url)
     .subscribe((success) => {
          success.map((item) => {
             const  user = new UserModel(item.User.UserName);
             user.UserId  = item.User.UserId;
             const  userExpense =  new UserExpense();
             userExpense.User = user;
             userExpense.Expense  =  [...item.Expense];
             this.UserExpenseCollection.push(userExpense);
          });
          this.UserExpenseCollection$.next(this.UserExpenseCollection);
     },
     (errror) => {
       console.log('Error in call');
     });
   }
}

      addNewUser(newFriend: UserModel): void {
            const userExpense = new UserExpense();
            userExpense.User = newFriend;
            this.UserExpenseCollection.push(userExpense);
     }

     addExepnse(userexpense: Expense): void {
        const  userExpense  =  this.UserExpenseCollection.find( f => f.User.UserId === userexpense.UserId );
        if  (userExpense) {
            userExpense.AddExpense(userexpense.Amount);
        }
        this.UserExpenseCollection$.next(this.UserExpenseCollection);
     }
      settleMent(): SettlementItem[] {
        let  settlementArray: Settlement[] = [];
        const finalSettlementArray: SettlementItem[] =[];
        const average  =  this.UserExpenseCollection.reduce((sum, item) => sum + item.Total(), 0) / this.UserExpenseCollection.length;
        this.UserExpenseCollection.map(item => {
               const  settlement =  new Settlement();
               settlement.Friend =  item.User;
               settlement.AmountToSettle = average - item.Total();
               settlementArray.push(settlement);
        });
        settlementArray = settlementArray.sort( (a, b) => {
            if (a.AmountToSettle > b.AmountToSettle) { return -1; }
            if (b.AmountToSettle > a.AmountToSettle) { return 1; }
            return 0;
        });
        for (const currentFrom of settlementArray) {
            if (currentFrom.AmountToSettle > 0) {
                for (let j = settlementArray.length - 1; j >= 0; j--) {
                    const currentTo = settlementArray[j];
                    const settlementItem = new SettlementItem();
                    settlementItem.From = currentFrom.Friend;
                    settlementItem.To = currentTo.Friend;
                    if ( Math.abs(currentFrom.AmountToSettle) >= Math.abs(currentTo.AmountToSettle)) {
                        settlementItem.Amount = currentTo.AmountToSettle;
                        currentFrom.AmountToSettle = currentFrom.AmountToSettle;
                        currentFrom.AmountToSettle = currentFrom.AmountToSettle + currentTo.AmountToSettle;
                        currentTo.AmountToSettle = 0;
                        finalSettlementArray.push(settlementItem);

                    } else  {
                        settlementItem.Amount =  currentFrom.AmountToSettle;
                        currentTo.AmountToSettle =  currentTo.AmountToSettle + currentFrom.AmountToSettle;
                        currentFrom.AmountToSettle = 0;
                        finalSettlementArray.push(settlementItem);
                    }

                    if (currentFrom.AmountToSettle === 0) {
                        break;
                    }
                    }
            }
        }
        return finalSettlementArray;
     }

}
