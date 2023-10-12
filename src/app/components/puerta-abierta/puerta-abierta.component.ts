import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-puerta-abierta',
  templateUrl: './puerta-abierta.component.html',
  styleUrls: ['./puerta-abierta.component.css']
})
export class PuertaAbiertaComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'puerta'
  nombre = 'Puerta'
  acciones = [
    { evento: 'mirar', mensaje: 'La puerta está abierta.', objetosNecesarios: [] },
    // { evento: 'abrir', mensaje: 'La puerta se ha abierto.', objetosNecesarios: ['llave'] },
    { evento: 'cerrar', mensaje: 'La puerta se ha cerrado.', objetosNecesarios: ['llave'] },
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
