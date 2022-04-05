import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HogarRoutingModule } from './hogar-routing.module';
import { HogarComponent } from './hogar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    HogarComponent
  ],
  imports: [
    CommonModule,
    HogarRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class HogarModule { }
