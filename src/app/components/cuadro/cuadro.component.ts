import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { filter } from 'rxjs'

@Component({
  selector: 'app-cuadro',
  templateUrl: './cuadro.component.html',
  styleUrls: ['./cuadro.component.css']
})
export class CuadroComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'cuadro'
  nombre = 'Cuadro'
  acciones = [
    { evento: 'mirar', mensaje: 'Parece que hay algo detrás del cuadro.', objetosNecesarios: [] },
    { evento: 'colgar', mensaje: 'Has colgado el cuadro en la pared.', objetosNecesarios: [] },
  ]
  colgado = true

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
    this.onExecuteAction.emit(accion)
  }

}
