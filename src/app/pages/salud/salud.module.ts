import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaludRoutingModule } from './salud-routing.module';
import { SaludComponent } from './salud.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    SaludComponent
  ],
  imports: [
    CommonModule,
    SaludRoutingModule,
    SharedModule,
    MaterialModule,
  ]
})
export class SaludModule { }
