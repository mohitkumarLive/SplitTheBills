import { UserExpense, Expense } from './userExpense.model';
import { UserModel } from './user.model';

describe('Testing User Expense Model', () => {

    let  userExpense: UserExpense;
    let expense: Expense;
    beforeEach(() => {
          userExpense = new UserExpense();
          userExpense.User = new UserModel('Mohit');

          expense = new Expense('1', 10);
    });

    it('Create New Expense Model', () => {
        expect(userExpense.User.UserName).toBe('Mohit');
    });

    it('Add New Expense', () => {
          userExpense.AddExpense(10);
          expect(userExpense.Total()).toBe(10);
    });

    it('Add Expense Item', () => {
      expense = new Expense('1', 10);
      expect(expense.Amount).toBe(10);
    });


});
