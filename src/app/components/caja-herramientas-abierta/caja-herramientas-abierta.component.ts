import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caja-herramientas-abierta',
  templateUrl: './caja-herramientas-abierta.component.html',
  styleUrls: ['./caja-herramientas-abierta.component.css']
})
export class CajaHerramientasAbiertaComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'caja-herramientas'
  nombre = 'Caja herramientas'
  acciones = [
    { evento: 'mirar', mensaje: 'Es una caja de herramientas. Parece que podemos abrirla.', objetosNecesarios: [] },
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
