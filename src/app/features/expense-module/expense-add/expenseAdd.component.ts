
import { Component, Input, OnChanges, Output, EventEmitter, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserExpense, Expense } from 'src/app/shared/model/userExpense.model';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-expense-add',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './expenseAdd.component.html',
    styleUrls: ['./expenseAdd.component.scss']
})

export class ExpenseAddComponent implements OnInit {
    @Input() Users$: Observable<UserExpense[]>;
    @Output() AddExpenseToUser = new EventEmitter<Expense>();
    form: FormGroup;

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            user: new FormControl(),
            amount: [null, Validators.required],
        });
    }

    addExpense(): void {
        const expense = new Expense(this.form.value.user, this.form.value.amount);
        this.AddExpenseToUser.emit(expense);
    }
}
