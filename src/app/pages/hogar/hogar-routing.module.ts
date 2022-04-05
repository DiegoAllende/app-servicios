import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HogarComponent } from './hogar.component';

const routes: Routes = [
  {path: '', component: HogarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HogarRoutingModule { }
