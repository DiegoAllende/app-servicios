import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./inicio/inicio.module').then(mod => mod.InicioModule),
  },
  {
    path: 'autos',
    loadChildren: () => import('./autos/autos.module').then(mod => mod.AutosModule),
  },
  {
    path: 'salud',
    loadChildren: () => import('./salud/salud.module').then(mod => mod.SaludModule),
  },
  {
    path: 'hogar',
    loadChildren: () => import('./hogar/hogar.module').then(mod => mod.HogarModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
