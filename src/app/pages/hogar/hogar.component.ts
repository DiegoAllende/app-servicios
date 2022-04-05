import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-hogar',
  templateUrl: './hogar.component.html',
  styleUrls: ['./hogar.component.css']
})
export class HogarComponent implements OnInit, OnDestroy {
  listaServicios = [];
  auxObser: Subscription;

  constructor(
    private serviciosService: ServiciosService,
  ) { }

  ngOnInit(): void {
    this.serviciosService.auxTipo = 3;
    this.serviciosService.getListServicioService();
    this.auxObser = this.serviciosService.listaSubject.subscribe(x => {
      this.listaServicios = x;
    });
  }

  ngOnDestroy(): void {
    this.auxObser.unsubscribe();
  }

}
