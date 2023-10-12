import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-llave',
  templateUrl: './llave.component.html',
  styleUrls: ['./llave.component.css']
})
export class LlaveComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'llave'
  nombre = 'Llave'
  acciones = [
    { evento: 'mirar', mensaje: 'Una llave escondida. Parece que abre una puerta.' },
    { evento: 'coger', mensaje: 'Has cogido una llave.' },
  ]

  mostrarAcciones = false

  toggleAcciones() {
    this.mostrarAcciones = !this.mostrarAcciones
  }

  ejecutarAccion(accion: any) {
    console.log(accion)
    this.onExecuteAction.emit({ ...accion, item: this.id })
  }
}
