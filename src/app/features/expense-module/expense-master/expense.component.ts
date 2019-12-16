import { Component, OnInit } from '@angular/core';
import { UserExpense, Expense } from 'src/app/shared/model/userExpense.model';
import { UserModel } from 'src/app/shared/model/user.model';
import { UserExpenseService } from 'src/app/shared/services/user-expense/userExpense.service';
import { SettlementItem } from 'src/app/shared/model/settlement.model';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-expense',
    templateUrl: './expense.component.html',
    styleUrls: ['./expense.component.scss']
})

export class ExpenseComponent implements OnInit {

    UserExpenseList: UserExpense[] = [];
    UserExpenseList$: Observable<UserExpense[]>;
    SettlementItem: SettlementItem[] = [];

    constructor(private userExpenseService: UserExpenseService) {

    }

    MathAbs(item: number): number {
        return Math.abs(item);
    }
    ngOnInit(): void {
        this.userExpenseService.fetchExpense();
        this._subscibeToUserList();
    }

    settleUp() {
        this.SettlementItem = this.userExpenseService.settleMent().filter(f => f.Amount !== 0);
    }

    AddExpenseToUser(expense: Expense) {
        this.userExpenseService.addExepnse(expense);

    }

    private _subscibeToUserList() {
        this.UserExpenseList$ = this.userExpenseService.UserExpenseCollection$;
    }
}
