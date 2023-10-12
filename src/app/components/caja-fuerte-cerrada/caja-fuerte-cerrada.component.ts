import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-caja-fuerte-cerrada',
  templateUrl: './caja-fuerte-cerrada.component.html',
  styleUrls: ['./caja-fuerte-cerrada.component.css']
})
export class CajaFuerteCerradaComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'caja-fuerte'
  nombre = 'Caja fuerte'
  acciones = [
    { evento: 'mirar', mensaje: 'Es una caja fuerte. Parece que necesitamos un código de 4 números para abrirla.', objetosNecesarios: [] },
    { evento: 'abrir', mensaje: 'Has abierto la caja.', objetosNecesarios: ['postit'] },
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
