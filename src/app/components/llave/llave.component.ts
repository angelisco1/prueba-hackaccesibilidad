import { Component, EventEmitter, Output } from '@angular/core';
import { filter } from 'rxjs';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-llave',
  templateUrl: './llave.component.html',
  styleUrls: ['./llave.component.css']
})
export class LlaveComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'llave'
  nombre = 'Llave'
  acciones = [
    { evento: 'mirar', mensaje: 'Una llave escondida. Parece que abre una puerta.' },
    { evento: 'coger', mensaje: 'Has cogido una llave.' },
  ]

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
