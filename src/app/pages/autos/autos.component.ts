import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css']
})
export class AutosComponent implements OnInit, OnDestroy {
  listaServicios = [];
  auxObser: Subscription;

  constructor(
    private serviciosService: ServiciosService,
  ) { }

  ngOnInit(): void {
    this.serviciosService.auxTipo = 1;
    this.serviciosService.getListServicioService();
    this.auxObser = this.serviciosService.listaSubject.subscribe(x => {
      this.listaServicios = x;
    });
  }

  ngOnDestroy(): void {
    this.auxObser.unsubscribe();
  }

}
