import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private comboServicios = [
    {codigo: 1, valor: "Auto"},
    {codigo: 2, valor: "Salud"},
    {codigo: 3, valor: "Hogar"},
  ];
  

  constructor() {
  }

  getListComboService(){
    return this.comboServicios;
  }

}
