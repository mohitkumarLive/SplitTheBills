import { NgModule } from '@angular/core';
import { AppHeaderComponent, AppLoaderComponent  } from './index';
import { CommonModule } from '@angular/common';
import {  RouterModule } from '@angular/router';


@NgModule({
    declarations : [AppHeaderComponent, AppLoaderComponent],
    imports: [
        CommonModule,
        RouterModule

    ],
    exports: [ AppHeaderComponent, AppLoaderComponent ]
})

export class  ComponentModule {

}
