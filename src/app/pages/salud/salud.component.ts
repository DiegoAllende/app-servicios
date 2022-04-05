import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css']
})
export class SaludComponent implements OnInit, OnDestroy {
  listaServicios = [];
  auxObser: Subscription;

  constructor(
    private serviciosService: ServiciosService,
  ) { }

  ngOnInit(): void {
    this.serviciosService.auxTipo = 2;
    this.serviciosService.getListServicioService();
    this.auxObser = this.serviciosService.listaSubject.subscribe(x => {
      this.listaServicios = x;
    });
  }

  ngOnDestroy(): void {
    this.auxObser.unsubscribe();
  }

}
