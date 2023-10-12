import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-it',
  templateUrl: './post-it.component.html',
  styleUrls: ['./post-it.component.css']
})
export class PostItComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'postit'
  nombre = 'Post-it'
  acciones = [
    { evento: 'mirar', mensaje: 'Un papel con el número 1234 escrito. ¿Abrirá algo?' },
    { evento: 'coger', mensaje: 'Has cogido el post-it.' },
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
