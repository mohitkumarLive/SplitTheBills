
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentModule } from './globals';

@NgModule({
  declarations: [],
  imports: [
  ],
  exports: [
      CommonModule,
      FormsModule,
      ComponentModule
  ],
  providers: []
})
export class SharedModule {}
