import { Component, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { UserExpense } from 'src/app/shared/model/userExpense.model';

@Component({
  selector : 'app-expense-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl : './expenseCard.component.html',
})

export class ExpenseCardComponent {

    @Input() UserExpense: UserExpense;
    constructor() {
    }

}
