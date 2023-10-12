import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'libro'
  nombre = 'Libro'
  acciones = [
    { evento: 'mirar', mensaje: 'Un libro de criptografía. Quizás me pueda servir para algo.' },
    { evento: 'coger', mensaje: 'Has cogido un libro.' },
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
