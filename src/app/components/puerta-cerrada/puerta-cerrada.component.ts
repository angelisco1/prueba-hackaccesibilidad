import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-puerta-cerrada',
  templateUrl: './puerta-cerrada.component.html',
  styleUrls: ['./puerta-cerrada.component.css']
})
export class PuertaCerradaComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'puerta'
  nombre = 'Puerta'
  acciones = [
    { evento: 'mirar', mensaje: 'La puerta está cerrada. Parece que necesitamos una llave para abrirla.', objetosNecesarios: [] },
    { evento: 'abrir', mensaje: 'La puerta se ha abierto.', objetosNecesarios: ['llave'] },
    // { evento: 'cerrar', mensaje: 'La puerta se ha cerrado.', objetosNecesarios: ['llave'] },
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
