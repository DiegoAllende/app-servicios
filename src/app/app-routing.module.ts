import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';

const ROUTES: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', redirectTo: 'inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: true }),
    PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
