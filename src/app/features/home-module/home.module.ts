import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { RouterModule } from '@angular/router';

import { ComponentArray } from './component.export';
import {routes} from './routes';

@NgModule({
  declarations: ComponentArray,
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: []
})
export class HomeModule {}
