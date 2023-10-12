import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cerdito',
  templateUrl: './cerdito.component.html',
  styleUrls: ['./cerdito.component.css']
})
export class CerditoComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'hucha'
  nombre = 'Hucha'
  acciones = [
    { evento: 'mirar', mensaje: 'Es una hucha con forma de cerdito. Parece muy fragil.', objetosNecesarios: [] },
    { evento: 'golpear', mensaje: 'Has roto la hucha.', objetosNecesarios: ['martillo'] },
  ]
  intacto = true

  mostrarAcciones = false

  toggleAcciones() {
    this.mostrarAcciones = !this.mostrarAcciones
  }

  ejecutarAccion(accion: any) {
    console.log(accion)
    this.onExecuteAction.emit(accion)
  }
}
