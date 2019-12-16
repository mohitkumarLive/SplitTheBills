import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserExpenseService } from './userExpense.service';
import { Expense } from '../../model/userExpense.model';

describe('User Expense', () => {
  let injector: TestBed;
  let service: UserExpenseService;
  let httpMock: HttpTestingController;

  let expense : Expense;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserExpenseService]
    });
    injector = getTestBed();
    service = injector.get(UserExpenseService);
    httpMock = injector.get(HttpTestingController);

    expense = new Expense('1', 10);
    service.fetchExpense();
  });

  it('should return an Observable<USerEXpense[]>', () => {
    service.addExepnse(expense);
    setTimeout(() => {
       service.UserExpenseCollection$.subscribe(data => {
            expect(data.length).toBe(4);
       })
    }, 1000);

  });
});
