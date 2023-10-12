import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-caja-fuerte-abierta',
  templateUrl: './caja-fuerte-abierta.component.html',
  styleUrls: ['./caja-fuerte-abierta.component.css']
})
export class CajaFuerteAbiertaComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'caja-fuerte'
  nombre = 'Caja fuerte'
  acciones = [
    { evento: 'mirar', mensaje: 'Es una caja fuerte. Parece que necesitamos un código de 4 números para abrirla.', objetosNecesarios: [] },
    { evento: 'cerrar', mensaje: 'Has cerrado la caja.', objetosNecesarios: [] },
  ]
  cerrado = true

  mostrarAcciones = false

  toggleAcciones() {
    this.mostrarAcciones = !this.mostrarAcciones
  }

  ejecutarAccion(accion: any) {
    console.log(accion)
    this.onExecuteAction.emit({ ...accion, item: this.id })
  }
}
