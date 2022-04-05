import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy {
  listaServicios = [];
  auxObser: Subscription;

  constructor(
    private serviciosService: ServiciosService,
  ) { }

  ngOnInit(): void {
    this.serviciosService.auxTipo = 0;
    this.serviciosService.getListServicioService();
    this.auxObser = this.serviciosService.listaSubject.subscribe(x => {
      this.listaServicios = x;
    });
  }

  ngOnDestroy(): void {
    this.auxObser.unsubscribe();
  }

}
