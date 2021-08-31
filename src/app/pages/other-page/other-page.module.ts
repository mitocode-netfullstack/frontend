import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherPageRoutingModule } from './other-page-routing.module';
import { OtherPageComponent } from './other-page.component';


@NgModule({
  declarations: [
    OtherPageComponent
  ],
  imports: [
    CommonModule,
    OtherPageRoutingModule
  ]
})
export class OtherPageModule { }
