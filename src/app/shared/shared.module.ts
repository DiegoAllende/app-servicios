import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { TarjetaComponent } from '../components/tarjeta/tarjeta.component';



@NgModule({
  declarations: [HeaderComponent, NavbarComponent, TarjetaComponent],
  imports: [ CommonModule, MaterialModule, RouterModule ],
  exports: [HeaderComponent, NavbarComponent, TarjetaComponent]
})
export class SharedModule { }
