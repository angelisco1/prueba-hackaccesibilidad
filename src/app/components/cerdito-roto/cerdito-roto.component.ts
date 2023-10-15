import { Component, EventEmitter, Output } from '@angular/core';
import { filter } from 'rxjs';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-cerdito-roto',
  templateUrl: './cerdito-roto.component.html',
  styleUrls: ['./cerdito-roto.component.css']
})
export class CerditoRotoComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'hucha'
  nombre = 'Hucha'
  acciones = [
    { evento: 'mirar', mensaje: 'Es una hucha con forma de cerdito. Parece muy fragil.', objetosNecesarios: [] }
  ]
  intacto = true

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
