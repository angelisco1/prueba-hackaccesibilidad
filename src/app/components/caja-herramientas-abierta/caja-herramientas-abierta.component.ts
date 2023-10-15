import { Component, EventEmitter, Output } from '@angular/core';
import { filter } from 'rxjs';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-caja-herramientas-abierta',
  templateUrl: './caja-herramientas-abierta.component.html',
  styleUrls: ['./caja-herramientas-abierta.component.css']
})
export class CajaHerramientasAbiertaComponent {
  @Output() onExecuteAction = new EventEmitter<any>()

  id = 'caja-herramientas'
  nombre = 'Caja herramientas'
  acciones = [
    { evento: 'mirar', mensaje: 'Es una caja de herramientas. Parece que podemos abrirla.', objetosNecesarios: [] },
    { evento: 'cerrar', mensaje: 'Has cerrado la caja.', objetosNecesarios: [] },
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
