import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { RouterModule } from '@angular/router';

import { ComponentArray } from './component.export';
import { routes } from './routes';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: ComponentArray,
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: []
})
export class ExpenseModule {}
