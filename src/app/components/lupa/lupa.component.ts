import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lupa',
  templateUrl: './lupa.component.html',
  styleUrls: ['./lupa.component.css']
})
export class LupaComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'lupa'
  nombre = 'Lupa'
  acciones = [
    { evento: 'mirar', mensaje: 'Una lupa. ¿Para que la podré utilizar?' },
    { evento: 'coger', mensaje: 'Has cogido una lupa.' },
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
