import { Component, Input, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() datos: any = {};

  constructor(
    private serviciosService: ServiciosService,
  ) { }

  ngOnInit(): void {
  }

  btnEditar() {
    this.serviciosService.setFilaEditar(this.datos);
  }
  
  btnEliminar() {
    this.serviciosService.deleteServicioService(this.datos.id);
  }

}
