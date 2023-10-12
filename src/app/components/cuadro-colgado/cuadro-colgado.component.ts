import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cuadro-colgado',
  templateUrl: './cuadro-colgado.component.html',
  styleUrls: ['./cuadro-colgado.component.css']
})
export class CuadroColgadoComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'cuadro'
  nombre = 'Cuadro'
  acciones = [
    { evento: 'mirar', mensaje: 'Parece que hay algo detrás del cuadro.', objetosNecesarios: [] },
    { evento: 'descolgar', mensaje: 'Has dejado el cuadro en el suelo.', objetosNecesarios: [] },
  ]
  colgado = true

  mostrarAcciones = false

  toggleAcciones() {
    this.mostrarAcciones = !this.mostrarAcciones
  }

  ejecutarAccion(accion: any) {
    console.log(accion)
    this.onExecuteAction.emit(accion)
  }
}
