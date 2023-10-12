import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caja-herramientas-cerrada',
  templateUrl: './caja-herramientas-cerrada.component.html',
  styleUrls: ['./caja-herramientas-cerrada.component.css']
})
export class CajaHerramientasCerradaComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'caja-herramientas'
  nombre = 'Caja herramientas'
  acciones = [
    { evento: 'mirar', mensaje: 'Es una caja de herramientas. Parece que podemos abrirla.', objetosNecesarios: [] },
    { evento: 'abrir', mensaje: 'Has abierto la caja.', objetosNecesarios: [] },
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
