import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutosComponent } from './autos.component';

const routes: Routes = [
  {path: '', component: AutosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutosRoutingModule { }
