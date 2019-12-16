import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { UserExpenseService } from 'src/app/shared/services/user-expense/userExpense.service';


describe('UsersComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let service: UserExpenseService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      imports: [ReactiveFormsModule],
      providers: [UserExpenseService, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(UserExpenseService);
  });
  it('form invalid when empty', () => {
    expect(component.addUserForm.valid).toBeFalsy();
  });
  it('name field validity', () => {
  const name = component.addUserForm.controls.name;
  expect(name.valid).toBeFalsy();
  let errors = {};
  errors = name.errors || {};
  expect(errors['required']).toBeTruthy();
  name.setValue('mohit');
  errors = name.errors || {};
  expect(errors['required']).toBeFalsy();
});
  it('submitting a form emits a User', () => {
expect(component.addUserForm.valid).toBeFalsy();
component.addUserForm.controls.name.setValue('mohit');
expect(component.addUserForm.valid).toBeTruthy();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('addUser', () => {
    component.addUserForm.controls.name.setValue('Mihir');
    component.addUser();
    setTimeout(() => {
      service.UserExpenseCollection$.subscribe(data => {
        const _user =  data.find(f => f.User.UserName === 'Mihir');
        expect(_user.User.UserName).toBe('Mihir');
  })
    }, 1000);

  });
});
