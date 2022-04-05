import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  listaSubject = new BehaviorSubject([]);
  filaEditar = new BehaviorSubject({});
  listaServicios = [];
  auxTipo = 0;

  constructor() {
    this.setLocalStorage();
  }

  setLocalStorage() {
    if (!localStorage.getItem('servicios')) {
      localStorage.setItem('servicios', JSON.stringify([]));
      this.listaSubject.next([]);
    } else {
      this.listaServicios = JSON.parse(localStorage.getItem('servicios'));
      this.setDataMenu();
    }
  }

  getListServicioService() {
    this.setDataMenu();
  }

  saveServicioService(datos) {
    const aux: any[] = JSON.parse(localStorage.getItem('servicios'))
    aux.push(datos)
    localStorage.setItem('servicios', JSON.stringify(aux));
    this.setLocalStorage();
  }

  editServicioService(datos) {
    const aux: any[] = JSON.parse(localStorage.getItem('servicios'))
    if (aux.length > 0) {
      const newdata = aux.map(item => {
        if (item.id === datos.id) {
          return datos;
        } else {
          return item;
        }
      });
      localStorage.setItem('servicios', JSON.stringify(newdata))
      this.setLocalStorage();
      this.filaEditar.next({});
    }
  }

  deleteServicioService(id: number) {
    const aux: any[] = JSON.parse(localStorage.getItem('servicios'))
    if (aux.length > 0) {
      const newdata = aux.filter(item => item.id !== id);
      localStorage.setItem('servicios', JSON.stringify(newdata))
      this.setLocalStorage();
    }
  }

  setFilaEditar(datos: any) {
    this.filaEditar.next(datos);
  }

  setDataMenu() {
    console.log("aaaaaaaaaaa: ", this.auxTipo);
    
    switch (this.auxTipo) {
      case 0:
        this.listaSubject.next(this.listaServicios);
        break;
      case 1:
        let aux1 = this.listaServicios.filter(x=> x.tipo === this.auxTipo);
        this.listaSubject.next(aux1);
        break;
      case 2:
        let aux2 = this.listaServicios.filter(x=> x.tipo === this.auxTipo);
        this.listaSubject.next(aux2);
        break;
      case 3:
        let aux3 = this.listaServicios.filter(x=> x.tipo === this.auxTipo);
        this.listaSubject.next(aux3);
        break;
      default:
        break;
    }
  }

}
