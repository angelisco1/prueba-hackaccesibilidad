import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { filter } from 'rxjs'

@Component({
  selector: 'app-armario-cerrado',
  templateUrl: './armario-cerrado.component.html',
  styleUrls: ['./armario-cerrado.component.css']
})
export class ArmarioCerradoComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'armario'
  nombre = 'Armario'
  acciones = [
    { evento: 'mirar', mensaje: 'Un armario enorme. Parece que podemos abrirlo.', objetosNecesarios: [] },
    { evento: 'abrir', mensaje: 'El armario se ha abierto.', objetosNecesarios: [] },
  ]
  cerrado = true

  mostrarAcciones = false

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.onShowActions
      .pipe(
        filter((mostrarAccionesDe: string) => this.id !== mostrarAccionesDe)
      )
      .subscribe(() => {
        this.mostrarAcciones = false
      })
  }

  toggleAcciones() {
    this.eventsService.onShowActions.emit(this.id)
    this.mostrarAcciones = !this.mostrarAcciones
  }

  ejecutarAccion(accion: any) {
    console.log(accion)
    this.onExecuteAction.emit({ ...accion, item: this.id })
  }
}
