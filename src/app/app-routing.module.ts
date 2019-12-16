import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path : '', loadChildren : './features/home-module/home.module#HomeModule' },
  { path : 'expense', loadChildren : './features/expense-module/expense.module#ExpenseModule' },
  { path : 'friends', loadChildren : './features/user-module/user-module#UserModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
