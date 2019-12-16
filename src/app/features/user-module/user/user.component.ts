import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserModel } from 'src/app/shared/model/user.model';
import { UserExpenseService } from 'src/app/shared/services/user-expense/userExpense.service';
import { Observable } from 'rxjs';
import { UserExpense } from 'src/app/shared/model/userExpense.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public addUserForm: FormGroup;
  private friendList$: Observable<UserExpense[]>;
  constructor(private formBuilder: FormBuilder, private userExpenseService: UserExpenseService ) {

  }

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      name: [null, Validators.required]
    });

    this.userExpenseService.fetchExpense();
    this.friendList$ = this.userExpenseService.UserExpenseCollection$;
  }
  addUser() {
    const newFriend = new UserModel(this.addUserForm.value.name);
    this.userExpenseService.addNewUser(newFriend);
    this.addUserForm.setValue({name: ''});
  }
}
