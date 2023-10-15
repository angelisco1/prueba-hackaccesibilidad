import { Component, EventEmitter, Output } from '@angular/core';
import { filter } from 'rxjs';
import { EventsService } from 'src/app/services/events.service';

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
