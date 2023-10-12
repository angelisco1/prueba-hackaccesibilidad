import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cerdito-roto',
  templateUrl: './cerdito-roto.component.html',
  styleUrls: ['./cerdito-roto.component.css']
})
export class CerditoRotoComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'hucha'
  nombre = 'Hucha'
  acciones = [
    { evento: 'mirar', mensaje: 'Es una hucha con forma de cerdito. Parece muy fragil.', objetosNecesarios: [] }
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
