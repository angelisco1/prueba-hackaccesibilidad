import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-armario-abierto',
  templateUrl: './armario-abierto.component.html',
  styleUrls: ['./armario-abierto.component.css']
})
export class ArmarioAbiertoComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'armario'
  nombre = 'Armario'
  acciones = [
    { evento: 'mirar', mensaje: 'Un armario enorme. Parece que podemos abrirlo.', objetosNecesarios: [] },
    { evento: 'cerrar', mensaje: 'El armario se ha cerrado.', objetosNecesarios: [] },
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
