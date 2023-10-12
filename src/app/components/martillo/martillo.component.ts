import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-martillo',
  templateUrl: './martillo.component.html',
  styleUrls: ['./martillo.component.css']
})
export class MartilloComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'martillo'
  nombre = 'Martillo'
  acciones = [
    { evento: 'mirar', mensaje: 'Un martillo un poco viejo. Cuidado no vayas a romper algo frágil.' },
    { evento: 'coger', mensaje: 'Has cogido un martillo.' },
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
