import { Component, OnInit } from '@angular/core';
import { UserExpenseService } from 'src/app/shared/services/user-expense/userExpense.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss']
})

export class HomePageComponent implements OnInit {

  constructor(private userExpenseService: UserExpenseService) { }

  ngOnInit(): void {
    this.userExpenseService.fetchExpense();
  }

}
