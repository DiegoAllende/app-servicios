import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutosRoutingModule } from './autos-routing.module';
import { AutosComponent } from './autos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    AutosComponent
  ],
  imports: [
    CommonModule,
    AutosRoutingModule,
    SharedModule,
    MaterialModule,
    
  ]
})
export class AutosModule { }
