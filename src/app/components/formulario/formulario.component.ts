import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GeneralService } from 'src/app/services/general.service';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formu: FormGroup;
  filaEdit = {};
  auxObser: Subscription;
  comboServicios = [];

  constructor(
    private fb: FormBuilder,
    private serviciosService: ServiciosService,
    private generalService: GeneralService,
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.listarComboServicio();
    this.auxObser = this.serviciosService.filaEditar.subscribe((x: any) => {
      this.formu.patchValue({
        id: x?.id || 0, nombre: x?.nombre || "", descripcion: x?.descripcion || "", tipo: x.tipo || ""
      });
    });
  }

  ngOnDestroy(): void {
    this.auxObser.unsubscribe();
  }

  createForm(){
    this.formu = this.fb.group({
      id: [0],
      nombre: [null, [Validators.required, Validators.maxLength(20)]],
      descripcion: [null, [Validators.required, Validators.maxLength(150)]],
      tipo: [null, [Validators.required]],
    });
  }
  get getFId() {return this.formu.get('id')}
  get getFNombre() {return this.formu.get('nombre')}
  get getFDescripcion() {return this.formu.get('descripcion')}
  get getFTipo() {return this.formu.get('tipo')}

  listarComboServicio() {
    this.comboServicios = this.generalService.getListComboService();
  }

  registrarServicio() {
    const id = Date.now();
    this.getFId.setValue(id);
    this.serviciosService.saveServicioService(this.formu.value);
    this.limpiar();
  }

  editarServicio() {
    this.serviciosService.editServicioService(this.formu.value);
    this.limpiar();
  }

  btnGuardar() {
    if(this.formu.valid) {
      if(this.getFId.value) {
        this.editarServicio();
      } else {
        this.registrarServicio();
      }
    }
  }

  btnCancelar() {
    this.limpiar();
  }

  limpiar() {
    this.getFId.setValue(0);
    this.getFNombre.setValue("");
    this.getFDescripcion.setValue("");
    this.getFTipo.setValue(null);
    this.formu.markAsUntouched();
    this.formu.markAsDirty();
  }
  

}
