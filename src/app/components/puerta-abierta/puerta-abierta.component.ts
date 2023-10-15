import { Component, EventEmitter, Output } from '@angular/core';
import { filter } from 'rxjs';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-puerta-abierta',
  templateUrl: './puerta-abierta.component.html',
  styleUrls: ['./puerta-abierta.component.css']
})
export class PuertaAbiertaComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'puerta'
  nombre = 'Puerta'
  acciones = [
    { evento: 'mirar', mensaje: 'La puerta está abierta.', objetosNecesarios: [] },
    // { evento: 'abrir', mensaje: 'La puerta se ha abierto.', objetosNecesarios: ['llave'] },
    { evento: 'cerrar', mensaje: 'La puerta se ha cerrado.', objetosNecesarios: ['llave'] },
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
