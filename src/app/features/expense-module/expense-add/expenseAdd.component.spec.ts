import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ExpenseAddComponent } from './expenseAdd.component';

describe('ExpenseAddComponent', () => {
  let component: ExpenseAddComponent;
  let fixture: ComponentFixture<ExpenseAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseAddComponent ],
      imports: [ReactiveFormsModule],
      providers: [HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('amount field validity', () => {
  const amount = component.form.controls.amount;
  expect(amount.valid).toBeFalsy();
  let errors = {};
  errors = amount.errors || {};
  expect(errors['required']).toBeTruthy();
  amount.setValue(400);
  errors = amount.errors || {};
  expect(errors['required']).toBeFalsy();
});
  it('submitting a form emits a Expense', () => {
expect(component.form.valid).toBeFalsy();
component.form.controls.user.setValue('123');
component.form.controls.amount.setValue(400);
expect(component.form.valid).toBeTruthy();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Add Expense', () => {
    component.form.controls.user.setValue('123');
    component.form.controls.amount.setValue(400);
    component.addExpense();
    expect(component).toBeTruthy();
  });
});
